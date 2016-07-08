Spinner = React.createClass({
  displayName: "Spinner",

  getDefaultProps: function () {
    return {
      'fullScreen': false
    };
  },
  render: function () {
    return React.createElement(
      "div",
      { className: "spinner-bg" },
      React.createElement(
        "div",
        { className: "spinner-wrapper" },
        "Loading...",
        React.createElement(
          "div",
          { className: "spinner" },
          React.createElement("div", { className: "rect1" }),
          React.createElement("div", { className: "rect2" }),
          React.createElement("div", { className: "rect3" }),
          React.createElement("div", { className: "rect4" }),
          React.createElement("div", { className: "rect5" })
        )
      )
    );
  }

});

RSpinner = React.createFactory(Spinner);
