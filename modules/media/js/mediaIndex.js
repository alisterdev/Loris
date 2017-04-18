!function(e){function t(n){if(a[n])return a[n].exports;var r=a[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var a={};return t.m=e,t.c=a,t.p="",t(0)}([function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),l=a(1),c=n(l),u=a(5),p=a(10),d=n(p),f=a(11),h=n(f),m=function(e){function t(e){r(this,t);var a=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return loris.hiddenHeaders=["Cand ID","Session ID","File Type"],a.state={isLoaded:!1,filter:{}},a.fetchData=a.fetchData.bind(a),a.updateFilter=a.updateFilter.bind(a),a}return o(t,e),s(t,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"fetchData",value:function(){$.ajax(this.props.DataURL,{method:"GET",dataType:"json",success:function(e){this.setState({Data:e,isLoaded:!0})}.bind(this),error:function(e){console.error(e)}})}},{key:"updateFilter",value:function(e){this.setState({filter:e})}},{key:"render",value:function(){if(!this.state.isLoaded)return React.createElement("button",{className:"btn-info has-spinner"},"Loading",React.createElement("span",{className:"glyphicon glyphicon-refresh glyphicon-refresh-animate"}));var e=void 0,t=[{id:"browse",label:"Browse"}];return loris.userHasPermission("media_write")&&(t.push({id:"upload",label:"Upload"}),e=React.createElement(u.TabPane,{TabId:t[1].id},React.createElement(d.default,{DataURL:loris.BaseURL+"/media/ajax/FileUpload.php?action=getData",action:loris.BaseURL+"/media/ajax/FileUpload.php?action=upload"}))),React.createElement(u.Tabs,{tabs:t,defaultTab:"browse",updateURL:!0},React.createElement(u.TabPane,{TabId:t[0].id},React.createElement(c.default,{Module:"media",name:"media_filter",id:"media_filter",columns:3,formElements:this.state.Data.form,onUpdate:this.updateFilter,filter:this.state.filter},React.createElement("br",null),React.createElement(ButtonElement,{type:"reset",label:"Clear Filters"})),React.createElement(StaticDataTable,{Data:this.state.Data.Data,Headers:this.state.Data.Headers,Filter:this.state.filter,getFormattedCell:h.default,freezeColumn:"File Name"})),e)}}]),t}(React.Component);$(function(){var e=React.createElement("div",{className:"page-media"},React.createElement(m,{DataURL:loris.BaseURL+"/media/?format=json"}));ReactDOM.render(e,document.getElementById("lorisworkspace"))})},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),l=a(2),c=n(l),u=function(e){function t(e){r(this,t);var a=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.clearFilter=a.clearFilter.bind(a),a.getFormChildren=a.getFormChildren.bind(a),a.setFilter=a.setFilter.bind(a),a.onElementUpdate=a.onElementUpdate.bind(a),a.queryString=QueryString.get(),a}return o(t,e),s(t,[{key:"componentDidMount",value:function(){var e={},t=this.queryString;Object.keys(t).forEach(function(a){var n="candidateID"===a?"candID":a;e[n]={value:t[a],exactMatch:!1}}),this.props.onUpdate(e)}},{key:"clearFilter",value:function(){this.queryString=QueryString.clear(this.props.Module),this.props.onUpdate({})}},{key:"getFormChildren",value:function(){var e=[];return React.Children.forEach(this.props.children,function(t,a){if(React.isValidElement(t)&&"function"==typeof t.type&&t.props.onUserInput){var n=t.props.onUserInput,r=n.name,i=t.type.displayName,o="candID"===t.props.name?"candidateID":t.props.name,s=this.queryString[o];"onUserInput"===r&&(n="ButtonElement"===i&&"reset"===t.props.type?this.clearFilter:this.onElementUpdate.bind(null,i)),e.push(React.cloneElement(t,{onUserInput:n,value:s?s:"",key:a})),this.setFilter(i,t.props.name,s)}else e.push(React.cloneElement(t,{key:a}))}.bind(this)),e}},{key:"setFilter",value:function(e,t,a){var n={};return this.props.filter&&(n=JSON.parse(JSON.stringify(this.props.filter))),t&&a?(n[t]={},n[t].value=a,n[t].exactMatch="SelectElement"===e):n&&t&&""===a&&delete n[t],n}},{key:"onElementUpdate",value:function(e,t,a){if("string"==typeof t&&"string"==typeof a){var n="candID"===t?"candidateID":t;this.queryString=QueryString.set(this.queryString,n,a);var r=this.setFilter(e,t,a);this.props.onUpdate(r)}}},{key:"render",value:function(){var e=this.getFormChildren(),t=this.props.formElements;return t&&Object.keys(t).forEach(function(e){var a="candID"===e?"candidateID":e;t[e].onUserInput=this.onElementUpdate.bind(null,e),t[e].value=this.queryString[a]}.bind(this)),React.createElement(c.default,{id:this.props.id,height:this.props.height,title:this.props.title},React.createElement(FormElement,this.props,e))}}]),t}(React.Component);u.defaultProps={id:"selection-filter",height:"100%",title:"Selection Filter",onUpdate:function(){console.warn("onUpdate() callback is not set!")}},u.propTypes={Module:React.PropTypes.string.isRequired,filter:React.PropTypes.object.isRequired,id:React.PropTypes.string,height:React.PropTypes.string,title:React.PropTypes.string,onUpdate:React.PropTypes.func},t.default=u},function(e,t){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),o=function(e){function t(e){a(this,t);var r=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={collapsed:r.props.initCollapsed},r.panelClass=r.props.initCollapsed?"panel-collapse collapse":"panel-collapse collapse in",r.toggleCollapsed=r.toggleCollapsed.bind(r),r}return r(t,e),i(t,[{key:"toggleCollapsed",value:function(){this.setState({collapsed:!this.state.collapsed})}},{key:"render",value:function(){var e=this.state.collapsed?"glyphicon pull-right glyphicon-chevron-down":"glyphicon pull-right glyphicon-chevron-up",t=this.props.title?React.createElement("div",{className:"panel-heading",onClick:this.toggleCollapsed,"data-toggle":"collapse","data-target":"#"+this.props.id,style:{cursor:"pointer"}},this.props.title,React.createElement("span",{className:e})):"";return React.createElement("div",{className:"panel panel-primary"},t,React.createElement("div",{id:this.props.id,className:this.panelClass,role:"tabpanel"},React.createElement("div",{className:"panel-body",style:{height:this.props.height}},this.props.children)))}}]),t}(React.Component);o.propTypes={id:React.PropTypes.string,height:React.PropTypes.string,title:React.PropTypes.string},o.defaultProps={initCollapsed:!1,id:"default-panel",height:"100%"},t.default=o},,,function(e,t){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),o=function(e){function t(e){a(this,t);var r=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),i=window.location.hash,o="";return r.props.updateURL&&i?o=i.substr(1):r.props.defaultTab?o=r.props.defaultTab:r.props.tabs.length>0&&(o=r.props.tabs[0].id),r.state={activeTab:o},r.handleClick=r.handleClick.bind(r),r.getTabs=r.getTabs.bind(r),r.getTabPanes=r.getTabPanes.bind(r),r}return r(t,e),i(t,[{key:"handleClick",value:function(e,t){if(this.setState({activeTab:e}),this.props.onTabChange(e),this.props.updateURL){var a=$("body").scrollTop()||$("html").scrollTop();window.location.hash=t.target.hash,$("html,body").scrollTop(a)}}},{key:"getTabs",value:function(){var e=this.props.tabs.map(function(e){var t=this.state.activeTab===e.id?"active":null,a="#"+e.id,n="tab-"+e.id;return React.createElement("li",{role:"presentation",className:t,key:e.id},React.createElement("a",{id:n,href:a,role:"tab","data-toggle":"tab",onClick:this.handleClick.bind(null,e.id)},e.label))}.bind(this));return e}},{key:"getTabPanes",value:function(){var e=React.Children.map(this.props.children,function(e,t){if(e)return React.cloneElement(e,{activeTab:this.state.activeTab,key:t})}.bind(this));return e}},{key:"render",value:function(){var e=this.getTabs(),t=this.getTabPanes(),a={marginLeft:0,marginBottom:"5px"};return React.createElement("div",null,React.createElement("ul",{className:"nav nav-tabs",role:"tablist",style:a},e),React.createElement("div",{className:"tab-content"},t))}}]),t}(React.Component);o.propTypes={tabs:React.PropTypes.array.isRequired,defaultTab:React.PropTypes.string,updateURL:React.PropTypes.bool},o.defaultProps={onTabChange:function(){},updateURL:!1};var s=function(e){function t(){return a(this,t),n(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),i(t,[{key:"render",value:function(){var e="tab-pane",t=void 0;return this.props.TabId===this.props.activeTab&&(e+=" active"),this.props.Title&&(t=React.createElement("h1",null,this.props.Title)),React.createElement("div",{role:"tabpanel",className:e,id:this.props.TabId},t,this.props.children)}}]),t}(React.Component);s.propTypes={TabId:React.PropTypes.string.isRequired,Title:React.PropTypes.string,activeTab:React.PropTypes.string},t.Tabs=o,t.TabPane=s},,,,,function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),l=a(12),c=n(l),u=function(e){function t(e){r(this,t);var a=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={Data:{},formData:{},uploadResult:null,errorMessage:null,isLoaded:!1,loadedData:0,uploadProgress:-1},a.getValidFileName=a.getValidFileName.bind(a),a.handleSubmit=a.handleSubmit.bind(a),a.isValidFileName=a.isValidFileName.bind(a),a.isValidForm=a.isValidForm.bind(a),a.setFormData=a.setFormData.bind(a),a.uploadFile=a.uploadFile.bind(a),a}return o(t,e),s(t,[{key:"componentDidMount",value:function(){var e=this;$.ajax(this.props.DataURL,{dataType:"json",success:function(t){e.setState({Data:t,isLoaded:!0})},error:function(t,a,n){console.error(t,a,n),e.setState({error:"An error occurred when loading the form!"})}})}},{key:"render",value:function(){if(void 0!==this.state.error)return React.createElement("div",{className:"alert alert-danger text-center"},React.createElement("strong",null,this.state.error));if(!this.state.isLoaded)return React.createElement("button",{className:"btn-info has-spinner"},"Loading",React.createElement("span",{className:"glyphicon glyphicon-refresh glyphicon-refresh-animate"}));var e=React.createElement("span",null,"File name should begin with ",React.createElement("b",null,"[PSCID]_[Visit Label]_[Instrument]"),React.createElement("br",null),"For example, for candidate ",React.createElement("i",null,"ABC123"),", visit ",React.createElement("i",null,"V1")," for",React.createElement("i",null,"Body Mass Index")," the file name should be prefixed by:",React.createElement("b",null," ABC123_V1_Body_Mass_Index"));return React.createElement("div",{className:"row"},React.createElement("div",{className:"col-md-8 col-lg-7"},React.createElement(FormElement,{name:"mediaUpload",fileUpload:!0,onSubmit:this.handleSubmit,ref:"form"},React.createElement("h3",null,"Upload a media file"),React.createElement("br",null),React.createElement(StaticElement,{label:"Note",text:e}),React.createElement(SelectElement,{name:"pscid",label:"PSCID",options:this.state.Data.candidates,onUserInput:this.setFormData,ref:"pscid",hasError:!1,required:!0,value:this.state.formData.pscid}),React.createElement(SelectElement,{name:"visitLabel",label:"Visit Label",options:this.state.Data.visits,onUserInput:this.setFormData,ref:"visitLabel",required:!0,value:this.state.formData.visitLabel}),React.createElement(SelectElement,{name:"forSite",label:"Site",options:this.state.Data.sites,onUserInput:this.setFormData,ref:"forSite",required:!0,value:this.state.formData.forSite}),React.createElement(SelectElement,{name:"instrument",label:"Instrument",options:this.state.Data.instruments,onUserInput:this.setFormData,ref:"instrument",value:this.state.formData.instrument}),React.createElement(DateElement,{name:"dateTaken",label:"Date of Administration",minYear:"2000",maxYear:"2017",onUserInput:this.setFormData,ref:"dateTaken",value:this.state.formData.dateTaken}),React.createElement(TextareaElement,{name:"comments",label:"Comments",onUserInput:this.setFormData,ref:"comments",value:this.state.formData.comments}),React.createElement(FileElement,{name:"file",id:"mediaUploadEl",onUserInput:this.setFormData,ref:"file",label:"File to upload",required:!0,value:this.state.formData.file}),React.createElement(ButtonElement,{label:"Upload File"}),React.createElement("div",{className:"row"},React.createElement("div",{className:"col-sm-9 col-sm-offset-3"},React.createElement(c.default,{value:this.state.uploadProgress}))))))}},{key:"getValidFileName",value:function(e,t,a){var n=e+"_"+t;return a&&(n+="_"+a),n}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state.formData,a=this.refs,n=this.state.Data.mediaFiles?this.state.Data.mediaFiles:[];if(this.isValidForm(a,t)){var r=t.instrument?t.instrument:null,i=t.file?t.file.name.replace(/\s+/g,"_"):null,o=this.getValidFileName(t.pscid,t.visitLabel,r);if(!this.isValidFileName(o,i))return void swal("Invalid file name!","File name should begin with: "+o,"error");var s=n.indexOf(i);s>=0?swal({title:"Are you sure?",text:"A file with this name already exists!\n Would you like to override existing file?",type:"warning",showCancelButton:!0,confirmButtonText:"Yes, I am sure!",cancelButtonText:"No, cancel it!"},function(e){e?this.uploadFile():swal("Cancelled","Your imaginary file is safe :)","error")}.bind(this)):this.uploadFile()}}},{key:"uploadFile",value:function(){var e=this.state.formData,t=new FormData;for(var a in e)""!==e[a]&&t.append(a,e[a]);$.ajax({type:"POST",url:this.props.action,data:t,cache:!1,contentType:!1,processData:!1,xhr:function(){var e=new window.XMLHttpRequest;return e.upload.addEventListener("progress",function(e){if(e.lengthComputable){var t=Math.round(e.loaded/e.total*100);this.setState({uploadProgress:t})}}.bind(this),!1),e}.bind(this),success:function(){var t=JSON.parse(JSON.stringify(this.state.Data.mediaFiles));t.push(e.file.name);var a=new CustomEvent("update-datatable");window.dispatchEvent(a),this.setState({mediaFiles:t,formData:{},uploadProgress:-1}),swal("Upload Successful!","","success")}.bind(this),error:function(e){console.error(e);var t=e.responseJSON?e.responseJSON.message:"Upload error!";this.setState({errorMessage:t,uploadProgress:-1}),swal(t,"","error")}.bind(this)})}},{key:"isValidFileName",value:function(e,t){return null!==t&&null!==e&&0===t.indexOf(e)}},{key:"isValidForm",value:function e(t,a){var e=!0,n={pscid:null,visitLabel:null,file:null};return Object.keys(n).map(function(r){a[r]?n[r]=a[r]:t[r]&&(t[r].props.hasError=!0,e=!1)}),this.forceUpdate(),e}},{key:"setFormData",value:function(e,t){var a=this.state.formData.visitLabel,n=this.state.formData.pscid;"pscid"===e&&""!==t&&(this.state.Data.visits=this.state.Data.sessionData[t].visits,this.state.Data.sites=this.state.Data.sessionData[t].sites,a?this.state.Data.instruments=this.state.Data.sessionData[t].instruments[a]:this.state.Data.instruments=this.state.Data.sessionData[t].instruments.all),"visitLabel"===e&&""!==t&&n&&(this.state.Data.instruments=this.state.Data.sessionData[n].instruments[t]);var r=this.state.formData;r[e]=t,this.setState({formData:r})}}]),t}(React.Component);u.propTypes={DataURL:React.PropTypes.string.isRequired,action:React.PropTypes.string.isRequired},t.default=u},function(e,t){"use strict";function a(e,t,a,n){if(loris.hiddenHeaders.indexOf(e)>-1)return null;var r={};n.forEach(function(e,t){r[e]=a[t]},this);var i=loris.userHasPermission("media_write");if("File Name"===e&&i===!0){var o=loris.BaseURL+"/media/ajax/FileDownload.php?File="+r["File Name"];return React.createElement("td",null,React.createElement("a",{href:o,target:"_blank",download:r["File Name"]},t))}if("Visit Label"===e&&null!==r["Cand ID"]&&r["Session ID"]){var s=loris.BaseURL+"/instrument_list/?candID="+r["Cand ID"]+"&sessionID="+r["Session ID"];return React.createElement("td",null,React.createElement("a",{href:s},t))}if("Edit Metadata"===e){var l=loris.BaseURL+"/media/edit/?id="+r["Edit Metadata"];return React.createElement("td",null,React.createElement("a",{href:l},"Edit"))}return React.createElement("td",null,t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a},function(e,t){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),o=function(e){function t(){return a(this,t),n(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),i(t,[{key:"render",value:function(){var e={display:this.props.value<0?"none":"block",backgroundColor:"#d3d3d3",height:"30px",position:"relative"},t={position:"absolute",top:0,left:0,zIndex:1e3,width:"100%",color:"#fff",textAlign:"center",lineHeight:"30px",fontWeight:"600"};return React.createElement("div",{className:"progress",style:e},React.createElement("div",{className:"progress-bar progress-bar-striped active",role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":this.props.value,style:{width:this.props.value+"%"}}),React.createElement("span",{style:t},this.props.value,"%"))}}]),t}(React.Component);o.propTypes={value:React.PropTypes.number},o.defaultProps={value:0},t.default=o}]);
//# sourceMappingURL=mediaIndex.js.map