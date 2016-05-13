<?php

/**
 * The timepoint details menu
 * @package behavioural
 */

class NDB_Menu_Filter_JSON_Instrument_dev extends NDB_Menu_Filter
{

    function setup() {
        return true;
    }

    /**
     * Adds React table related dependencies to menu filters, since forms don't
     * usually have tables or pagination
     *
     * @return array of javascript files to be sourced
     */
    function getJSDependencies()
    {
        $factory = NDB_Factory::singleton();
        $depends = parent::getJSDependencies();
        $baseURL = $factory->settings()->getBaseURL();
        return array_merge(
            $depends,
            array(
                $baseURL . '/js/components/Instrument.js',
            )
        );
    }
}
?>
