import CandidateInfo from './CandidateInfo';
import ProbandInfo from './ProbandInfo';
import FamilyInfo from './FamilyInfo';
import ParticipantStatus from './ParticipantStatus';
import ConsentStatus from './ConsentStatus';

class CandidateParameters extends React.Component {

  getTabPanes(tabList) {
    const actionURL = `${loris.BaseURL}/candidate_parameters/ajax/formHandler.php`;
    const dataURL = `${loris.BaseURL}/candidate_parameters/ajax/getData.php?candID=${this.props.candID}`;
    const tabPanes = Object.keys(tabList).map(function(key) {
      const TabContent = tabList[key].component;
      return (
        <TabPane TabId={tabList[key].id} key={key}>
          <TabContent
            actionURL={actionURL}
            dataURL={`${dataURL}&data=${tabList[key].id}`}
            tabName={tabList[key].id}
          />
        </TabPane>
      );
    });
    return tabPanes;
  }

  render() {

    let tabList = [
      {id: "candidateInfo", label: "Candidate Information", component: CandidateInfo},
      {id: "probandInfo", label: "Proband Information", component: ProbandInfo},
      {id: "familyInfo", label: "Family Information", component: FamilyInfo},
      {id: "participantStatus", label: "Participant Status", component: ParticipantStatus},
      {id: "consentStatus", label: "Consent Status", component: ConsentStatus}
    ];

    return (
      <Tabs tabs={tabList} defaultTab="candidateInfo" updateURL={true}>
        {this.getTabPanes(tabList)}
      </Tabs>
    );
  }
}

CandidateParameters.propTypes = {};
CandidateParameters.defaultProps = {};

export default CandidateParameters;