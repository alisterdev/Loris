/* exported SetFlagForm */

class SetFlagForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      formData: {}
    };

    // Bind component instance to custom methods
    this.setFormData = this.setFormData.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /**
   * Set the form data based on state values of child elements/componenets
   *
   * @param {string} formElement - name of the selected element
   * @param {string} value - selected value for corresponding form element
   */
  setFormData(formElement, value) {
    const formData = this.state.formData;
    formData[formElement] = value;
    this.setState({formData});
  }

  /**
   * Handles form submission
   * @param {event} e - Form submition event
   */
  handleSubmit(e) {
    e.preventDefault();

    let myFormData = this.state.formData;

    $.ajax({
      type: 'POST',
      url: '/data_integrity_flag/',
      data: JSON.stringify(myFormData),
      cache: false,
      contentType: false,
      processData: false,
      success: function(data) {
        swal({
          title: "Success!",
          type: "success"
        });
        this.props.updateData();
        this.setState({formData: {}});
      }.bind(this),
      error: function(err) {
        console.error(err);
        swal({
          title: "Error!",
          type: "error",
          content: err.statusText
        });
      }
    });
  }

  render() {
    return (
      <div className="col-md-8 col-lg-6 col-md-push-1 col-lg-push-2">
      <FormElement name="flag_form" onSubmit={this.handleSubmit}>
        <h3 className="text-center">Update Instrument Status</h3><br />
        <SelectElement
          name="visitLabel"
          label="Visit Label"
          options={this.props.visits}
          onUserInput={this.setFormData}
          value={this.state.formData.visitLabel}
          required={true}
        />
        <SelectElement
          name="instrument"
          label="Instrument"
          options={this.props.instruments}
          onUserInput={this.setFormData}
          value={this.state.formData.instrument}
          required={true}
        />
        <DateElement
          name="date"
          label="Date"
          onUserInput={this.setFormData}
          value={this.state.formData.date}
          required={true}
        />
        <SelectElement
          name="flagStatus"
          label="Flag Status"
          options={this.props.flagStatusList}
          onUserInput={this.setFormData}
          value={this.state.formData.flagStatus}
          required={true}
        />
        <TextareaElement
          name="comment"
          label="Comment"
          onUserInput={this.setFormData}
          value={this.state.formData.comment}/>
        <ButtonElement label="Update"/>
      </FormElement>
      </div>
    );
  }
}

SetFlagForm.propTypes = {};
SetFlagForm.defaultProps = {};

export default SetFlagForm;
