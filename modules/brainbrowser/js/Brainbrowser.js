!function(e){function t(l){if(a[l])return a[l].exports;var r=a[l]={exports:{},id:l,loaded:!1};return e[l].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var a={};return t.m=e,t.c=a,t.p="",t(0)}([function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=React.createClass({displayName:"BrainBrowser",getInitialState:function(){return{defaultPanelSize:300}},componentDidMount:function(){var e=JSON.parse(localStorage.getItem("modulePrefs"));e||(e={}),e[loris.TestName]||(e[loris.TestName]={},e[loris.TestName].panelSize=this.state.defaultPanelSize);var t=e[loris.TestName].panelSize;this.setState({panelSize:t}),this.modulePrefs=e},handleChange:function(e){var t=e.target.value||this.state.defaultPanelSize;this.modulePrefs[loris.TestName].panelSize=t,localStorage.setItem("modulePrefs",JSON.stringify(this.modulePrefs)),this.setState({panelSize:t})},render:function(){var e={100:"100 Pixels",200:"200 Pixels",256:"256 Pixels",300:"300 Pixels (Default)",400:"400 Pixels",500:"500 Pixels",600:"600 Pixels",700:"700 Pixels",800:"800 Pixels",900:"900 Pixels",1e3:"1000 Pixels"};return React.createElement("div",null,React.createElement("div",{id:"brainbrowser-wrapper",className:"brainbrowser-wrapper"},React.createElement("div",{id:"global-controls",className:"global-controls"},React.createElement("button",{id:"sync-volumes",className:"control"},"Sync Volumes"),React.createElement("button",{id:"reset-view",className:"control"},"Reset View"),React.createElement("select",{id:"panel-size",className:"control",value:this.state.panelSize,onChange:this.handleChange},React.createElement("option",{value:"-1"},"Auto"),Object.keys(e).map(function(t){return React.createElement("option",{value:t,key:t},e[t])})))),React.createElement("div",{id:"brainbrowser",className:"brainbrowser"}),React.createElement("div",{id:"loading",className:"loading-message"},"Loading..."))}}),l=React.createFactory(a);window.BrainBrowser=a,window.RBrainBrowser=l,t.default=a}]);
//# sourceMappingURL=Brainbrowser.js.map