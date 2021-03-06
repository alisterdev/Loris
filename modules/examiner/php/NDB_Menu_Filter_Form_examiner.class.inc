<?php
/**
 * Examiner module menu filter form
 *
 * PHP Version 5
 *
 * @category Clinical
 * @package  Loris
 * @author   Tara Campbell <tara.campbell@mail.mcgill.ca>
 * @license  http://www.gnu.org/licenses/gpl-3.0.txt GPLv3
 * @link     https://www.github.com/aces/Loris
 */

/**
 * Examiner module menu filter form
 *
 * PHP Version 5
 *
 * @category Clinical
 * @package  Loris
 * @author   Tara Campbell <tara.campbell@mail.mcgill.ca>
 * @license  http://www.gnu.org/licenses/gpl-3.0.txt GPLv3
 * @link     https://www.github.com/aces/Loris
 */

class NDB_Menu_Filter_Form_Examiner extends NDB_Menu_Filter_Form
{
    var $useCertification;

    /**
     * Checks if the user has access to examiner menu filter
     *
     * @return boolean
     */
    function _hasAccess()
    {
        $user = User::singleton();
        return $user->hasPermission('examiner_view');
    }

    /**
     * Sets the menu filter class variables.
     *
     * @return boolean
     */
    function _setupVariables()
    {
        $DB            = Database::singleton();
        $config        = NDB_Config::singleton();
        $certification = $config->getSetting('Certification');

        if (isset($certification['EnableCertification'])) {
            $this->useCertification = $certification['EnableCertification'];
        } else {
            $useCertification = false;
        }

        $user     = User::singleton();
        $centerID = $DB->quote($user->getData('CenterID'));

        if ($user->hasPermission('examiner_multisite')) {
                $query = " 
                        FROM 
                         examiners e LEFT JOIN psc ON 
                        (e.centerID=psc.CenterID) 
                        LEFT JOIN certification c ON 
                        (c.examinerID=e.examinerID and c.pass = 'certified') 
                        LEFT JOIN test_names tn ON (tn.ID = c.testID) WHERE 1=1 ";
        } else {

              $query = "
                        FROM 
                         examiners e LEFT JOIN psc ON 
                        (e.centerID=psc.CenterID) 
                        LEFT JOIN certification c ON 
                        (c.examinerID=e.examinerID and c.pass = 'certified') 
                        LEFT JOIN test_names tn ON (tn.ID = c.testID)
                        WHERE e.centerID =".$centerID." ";

        }

        // set the class variables
        $this->columns      = array(
                               'e.full_name as Examiner',
                               'e.examinerID as ID',
                               'psc.Name as Site',
                               'e.radiologist as Radiologist',
                               'GROUP_CONCAT(tn.full_name) as Certification',
                              );
        $this->group_by     = "e.full_name,psc.Name";
        $this->query        = $query;
        $this->order_by     = 'e.full_name';
        $this->headers      = array(
                               'Examiner',
                               'ID',
                               'Site',
                               'Radiologist',
                               'Certification',
                              );
        $this->validFilters = array(
                               'e.full_name',
                               'e.centerID',
                               'COALESCE(e.radiologist, 0)',
                              );

        $this->formToFilter = array(
                               'examiner'    => 'e.full_name',
                               'site'        => 'e.centerID',
                               'radiologist' => 'COALESCE(e.radiologist, 0)',
                              );

        // If certification is turned on, update the class variables to include
        // certification information
        if ($this->useCertification == '1') {

            $this->tpl_data['hiddenHeaders'] = json_encode(['ID']);

        } else {

            $this->tpl_data['hiddenHeaders'] = json_encode(['ID', 'Certification']);

        }
        return true;
    }

    /**
     * Sets the menu filter class variables.
     *
     * @return void
     */
    function _setFilterForm()
    {
        $user = User::singleton();

        // Get site options
        if ($user->hasPermission('examiner_multisite')) {
            // get the list of study sites - to be replaced by the Site object
            $sites = Utility::getSiteList();
            if (is_array($sites)) {
                $sites = array('' => '') + $sites;
            }
        } else {
            // allow only to view own site data
            $site_arr = $user->getData('CenterIDs');
            foreach ($site_arr as $key => $val) {
                $site[$key] = &Site::singleton($val);
                if ($site[$key]->isStudySite()) {
                    $sites[$val] = $site[$key]->getCenterName();
                }
            }
            $sites = array('' => 'All User Sites') + $sites;
        }

        // Radiologist options
        $radiologist = array(
                        null => 'All',
                        '1'  => 'Yes',
                        '0'  => 'No',
                       );

        // menu filter form elements
        $this->addBasicText('examiner', 'Examiner:');
        $this->addSelect('site', 'Site:', $sites);
        $this->addSelect('radiologist', 'Radiologist:', $radiologist);

        // add examiner form elements
        $this->addBasicText('addName', 'Name');
        $this->addCheckbox('addRadiologist', 'Radiologist', array('value' => '1'));
        $this->addSelect('addSite', 'Site', $sites);

        $this->form->addFormRule(array(&$this, '_validateAddExaminer'));

        // Add a useCertification template variable so that the template
        // rendering can depend on the EnableCertification setting
        $this->tpl_data['certification'] = $this->useCertification;

    }

    /**
     * Validates the examiner form values.
     *
     * @param array $values Add Examiner form values
     *
     * @return array of error messages
     */
    function _validateAddExaminer($values)
    {
        $errors = array();

        $name = $values['addName'];
        $site = $values['addSite'];

        if (empty($name) || empty($site)) {
            $errors['addName'] = 'Please include both a name and site';
        } else if ($this->examinerExists($name, $site)) {
            $errors['addName'] = 'This examiner already exists';
        }

        return $errors;
    }

    /**
     * Processes the add examiner form values
     *
     * @param array $values add examiner form values
     *
     * @return void
     */
    function _process($values)
    {

        $DB     = Database::singleton();
        $config = NDB_Config::singleton();

        $fullName    = $values['addName'];
        $siteID      = $values['addSite'];
        $radiologist = $values['addRadiologist'];
        //$values['addRadiologist'] should be used once addCheckbox is
        // supported by LorisForm and once addRadiologist checkbox is added
        // to the form using the addCheckbox method
        //$radiologist = $values['addRadiologist'];

        $DB->insert(
            'examiners',
            array(
             'full_name'   => $fullName,
             'centerID'    => $siteID,
             'radiologist' => $radiologist,
            )
        );
        header("Location: {$baseurl}/examiner/", true, 303);
    }

    /**
     * Checks if an examiner exists with a given name and site
     *
     * @param string $fullName The full name of the examiner
     * @param int    $siteID   The site ID
     *
     * @return boolean
     */
    function examinerExists($fullName, $siteID)
    {
        $DB         = Database::singleton();
        $examinerID = $DB->pselectOne(
            "SELECT examinerID
             FROM examiners
             WHERE full_name=:fullName AND centerID=:siteID",
            array(
             'fullName' => $fullName,
             'siteID'   => $siteID,
            )
        );

        if (empty($examinerID)) {
            return false;
        } else {
            return true;
        }
    }
    /**
     * Include the column formatter required to display the feedback link colours
     * in the candidate_list menu
     *
     * @return array of javascript to be inserted
     */
    function getJSDependencies()
    {
        $factory = NDB_Factory::singleton();
        $baseURL = $factory->settings()->getBaseURL();
        $deps    = parent::getJSDependencies();
        return array_merge(
            $deps,
            array(
             $baseURL . "/examiner/js/columnFormatter.js",
            )
        );
    }
}
?>
