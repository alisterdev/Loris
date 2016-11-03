/* global LorisPage, IssueTracker, formatColumn */

class IssueTracker extends LorisPage {

  setFilter(fieldName, fieldValue) {
    if (fieldName === "keyword") {
      fieldName = "title";
    }
    super.setFilter(fieldName, fieldValue);
  }

  render() {
    return (
      <div>
        <FilterTable Module={this.props.Module}>
          <FormElement
            formElements={this.state.FilterForm}
            columns={3}
            onUserInput={this.setFilter}
          />
        </FilterTable>

        <DynamicDataTable
          Filter={this.state.Filter}
          {... this.props}
        />
      </div>
    );
  }
}

window.onload = function() {
  var dataURL = loris.BaseURL + "/issue_tracker/?format=json";
  var issueTracker = (
    <IssueTracker
      Module="issue_tracker"
      DataURL={dataURL}
      getFormattedCell={formatColumn}
    />
  );
  React.render(issueTracker, document.getElementById("page-active-issues"));
};
