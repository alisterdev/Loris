"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* global LorisPage, IssueTracker, formatColumn */

var IssueTracker = function (_LorisPage) {
  _inherits(IssueTracker, _LorisPage);

  function IssueTracker() {
    _classCallCheck(this, IssueTracker);

    return _possibleConstructorReturn(this, (IssueTracker.__proto__ || Object.getPrototypeOf(IssueTracker)).apply(this, arguments));
  }

  _createClass(IssueTracker, [{
    key: "setFilter",
    value: function setFilter(fieldName, fieldValue) {
      if (fieldName === "keyword") {
        fieldName = "title";
      }
      _get(IssueTracker.prototype.__proto__ || Object.getPrototypeOf(IssueTracker.prototype), "setFilter", this).call(this, fieldName, fieldValue);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          FilterTable,
          { Module: this.props.Module },
          React.createElement(FormElement, {
            formElements: this.state.FilterForm,
            columns: 3,
            onUserInput: this.setFilter
          })
        ),
        React.createElement(DynamicDataTable, _extends({
          Filter: this.state.Filter
        }, this.props))
      );
    }
  }]);

  return IssueTracker;
}(LorisPage);

window.onload = function () {
  var dataURL = loris.BaseURL + "/issue_tracker/?format=json";
  var issueTracker = React.createElement(IssueTracker, {
    Module: "issue_tracker",
    DataURL: dataURL,
    getFormattedCell: formatColumn
  });
  React.render(issueTracker, document.getElementById("page-active-issues"));
};