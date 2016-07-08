Spinner = React.createClass({
  getDefaultProps: function() {
    return {
      'fullScreen': false
    }
  },
  render: function() {
    return (
      <div className="spinner-bg">
        <div className="spinner-wrapper">
          Loading...
          <div className="spinner">
            <div className="rect1"></div>
            <div className="rect2"></div>
            <div className="rect3"></div>
            <div className="rect4"></div>
            <div className="rect5"></div>
          </div>
        </div>
      </div>
    );
  },

});

RSpinner = React.createFactory(Spinner);