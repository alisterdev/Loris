!function(e){function t(r){if(a[r])return a[r].exports;var s=a[r]={exports:{},id:r,loaded:!1};return e[r].call(s.exports,s,s.exports,t),s.loaded=!0,s.exports}var a={};return t.m=e,t.c=a,t.p="",t(0)}([function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var s=a(1),n=r(s),i=QueryString.get(document.currentScript.src);$(function(){var e=React.createElement("div",{className:"page-candidate-parameters"},React.createElement(n.default,{Module:"candidate_parameters",candID:i.candID}));ReactDOM.render(e,document.getElementById("lorisworkspace"))})},function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),l=a(2),c=r(l),d=a(3),u=r(d),p=a(4),m=r(p),f=a(5),h=r(f),D=a(6),b=r(D),v=function(e){function t(){return s(this,t),n(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),o(t,[{key:"getTabPanes",value:function(e){var t=loris.BaseURL+"/candidate_parameters/ajax/formHandler.php",a=loris.BaseURL+"/candidate_parameters/ajax/getData.php?candID="+this.props.candID,r=Object.keys(e).map(function(r){var s=e[r].component;return React.createElement(TabPane,{TabId:e[r].id,key:r},React.createElement(s,{action:t,dataURL:a+"&data="+e[r].id,tabName:e[r].id}))});return r}},{key:"render",value:function(){var e=[{id:"candidateInfo",label:"Candidate Information",component:c.default},{id:"participantStatus",label:"Participant Status",component:h.default}];return"true"===loris.config("useProband")&&e.push({id:"probandInfo",label:"Proband Information",component:u.default}),"true"===loris.config("useFamilyID")&&e.push({id:"familyInfo",label:"Family Information",component:m.default}),"true"===loris.config("useConsent")&&e.push({id:"consentStatus",label:"Consent Status",component:b.default}),React.createElement("div",null,React.createElement("a",{className:"btn btn-sm btn-primary",href:loris.BaseURL+"/timepoint_list/?candID="+this.props.candID,style:{marginBottom:"20px"}},"Return to timepoint list"),React.createElement("br",null),React.createElement(Tabs,{tabs:e,defaultTab:"candidateInfo",updateURL:!0},this.getTabPanes(e)))}}]),t}(React.Component);v.propTypes={},v.defaultProps={},t.default=v},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=React.createClass({displayName:"CandidateInfo",getInitialState:function(){return{caveatOptions:{true:"True",false:"False"},Data:[],formData:{},updateResult:null,errorMessage:null,isLoaded:!1,loadedData:0}},componentDidMount:function(){var e=this;$.ajax(this.props.dataURL,{dataType:"json",success:function(t){var a={flaggedCaveatemptor:t.flagged_caveatemptor,flaggedOther:t.flagged_other,flaggedReason:t.flagged_reason};Object.assign(a,t.parameter_values),e.setState({Data:t,isLoaded:!0,formData:a})},error:function(t,a,r){e.setState({error:"An error occurred when loading the form!"})}})},setFormData:function(e,t){var a=JSON.parse(JSON.stringify(this.state.formData));a[e]=t,"flaggedCaveatemptor"===e&&"false"===t&&(a.flaggedReason="",a.flaggedOther=""),"flaggedReason"===e&&"Other"!==this.state.Data.caveatReasonOptions[t]&&(a.flaggedOther=""),this.setState({formData:a})},onSubmit:function(e){e.preventDefault()},render:function(){if(!this.state.isLoaded)return void 0!==this.state.error?React.createElement("div",{className:"alert alert-danger text-center"},React.createElement("strong",null,this.state.error)):React.createElement("button",{className:"btn-info has-spinner"},"Loading",React.createElement("span",{className:"glyphicon glyphicon-refresh glyphicon-refresh-animate"}));var e=!0,t=null;loris.userHasPermission("candidate_parameter_edit")&&(e=!1,t=React.createElement(ButtonElement,{label:"Update"}));var a=!0,r=!1;"true"===this.state.formData.flaggedCaveatemptor&&(a=!1,r=!0);var s=null,n=null,i=!0,o=!1;for(var l in this.state.Data.caveatReasonOptions)if(this.state.Data.caveatReasonOptions.hasOwnProperty(l)&&"Other"===this.state.Data.caveatReasonOptions[l]){s=l;break}this.state.formData.flaggedReason===s&&(o=!0,i=!1),"false"===this.state.formData.flaggedCaveatemptor&&(a=!0,r=!1,i=!0,o=!1),null!==s&&(n=React.createElement(TextareaElement,{label:"If Other, please specify",name:"flaggedOther",value:this.state.formData.flaggedOther,onUserInput:this.setFormData,ref:"flaggedOther",disabled:i,required:o}));var c=[],d=this.state.Data.extra_parameters;for(var u in d)if(d.hasOwnProperty(u)){var p=d[u].ParameterTypeID,m=p,f=this.state.formData[p];switch(d[u].Type.substring(0,3)){case"enu":var h=d[u].Type.substring(5);h=h.slice(0,-1),h=h.replace(/'/g,""),h=h.split(",");var D={};for(var b in h)h.hasOwnProperty(b)&&(D[h[b]]=h[b]);c.push(React.createElement(SelectElement,{label:d[u].Description,name:m,options:D,value:f,onUserInput:this.setFormData,ref:m,disabled:e,key:u}));break;case"dat":c.push(React.createElement(DateElement,{label:d[u].Description,name:m,value:f,onUserInput:this.setFormData,ref:m,disabled:e,key:u}));break;default:c.push(React.createElement(TextareaElement,{label:d[u].Description,name:m,value:f,onUserInput:this.setFormData,ref:m,disabled:e,key:u}))}}var v="",g="alert text-center hide";if(this.state.updateResult)if("success"===this.state.updateResult)g="alert alert-success text-center",v="Update Successful!";else if("error"===this.state.updateResult){var R=this.state.errorMessage;g="alert alert-danger text-center",v=R?R:"Failed to update!"}return React.createElement("div",{className:"row"},React.createElement("div",{className:g,role:"alert",ref:"alert-message"},v),React.createElement(FormElement,{name:"candidateInfo",onSubmit:this.handleSubmit,ref:"form",class:"col-md-6"},React.createElement(StaticElement,{label:"PSCID",text:this.state.Data.pscid}),React.createElement(StaticElement,{label:"DCCID",text:this.state.Data.candID}),React.createElement(SelectElement,{label:"Caveat Emptor Flag for Candidate",name:"flaggedCaveatemptor",options:this.state.caveatOptions,value:this.state.formData.flaggedCaveatemptor,onUserInput:this.setFormData,ref:"flaggedCaveatemptor",disabled:e,required:!0}),React.createElement(SelectElement,{label:"Reason for Caveat Emptor Flag",name:"flaggedReason",options:this.state.Data.caveatReasonOptions,value:this.state.formData.flaggedReason,onUserInput:this.setFormData,ref:"flaggedReason",disabled:a,required:r}),n,c,t))},handleSubmit:function(e){e.preventDefault();var t=this.state.formData,a=this,r=new FormData;for(var s in t)t.hasOwnProperty(s)&&""!==t[s]&&r.append(s,t[s]);r.append("tab",this.props.tabName),r.append("candID",this.state.Data.candID),$.ajax({type:"POST",url:a.props.action,data:r,cache:!1,contentType:!1,processData:!1,success:function(e){a.setState({updateResult:"success"}),a.showAlertMessage()},error:function(e){if(""!==e.responseText){var t=JSON.parse(e.responseText).message;a.setState({updateResult:"error",errorMessage:t}),a.showAlertMessage()}}})},showAlertMessage:function(){var e=this;if(null!==this.refs["alert-message"]){var t=this.refs["alert-message"];$(t).fadeTo(2e3,500).delay(3e3).slideUp(500,function(){e.setState({updateResult:null})})}}});t.default=a},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=React.createClass({displayName:"ProbandInfo",getInitialState:function(){return{genderOptions:{Male:"Male",Female:"Female"},Data:[],formData:{},updateResult:null,errorMessage:null,isLoaded:!1,loadedData:0}},componentDidMount:function(){var e=this;$.ajax(this.props.dataURL,{dataType:"json",success:function(t){var a={ProbandGender:t.ProbandGender,ProbandDoB:t.ProbandDoB,ProbandDoB2:t.ProbandDoB};e.setState({formData:a,Data:t,isLoaded:!0})},error:function(t,a,r){e.setState({error:"An error occurred when loading the form!"})}})},setFormData:function(e,t){var a=this.state.formData;a[e]=t,this.setState({formData:a})},onSubmit:function(e){e.preventDefault()},render:function(){if(!this.state.isLoaded)return void 0!==this.state.error?React.createElement("div",{className:"alert alert-danger text-center"},React.createElement("strong",null,this.state.error)):React.createElement("button",{className:"btn-info has-spinner"},"Loading",React.createElement("span",{className:"glyphicon glyphicon-refresh glyphicon-refresh-animate"}));var e=!0,t=null;loris.userHasPermission("candidate_parameter_edit")&&(e=!1,t=React.createElement(ButtonElement,{label:"Update"}));var a=!1,r=!1;null!==this.state.formData.ProbandGender&&(a=!0),null!==this.state.formData.ProbandDoB&&(r=!0);var s="",n="alert text-center hide";if(this.state.updateResult)if("success"===this.state.updateResult)n="alert alert-success text-center",s="Update Successful!";else if("error"===this.state.updateResult){var i=this.state.errorMessage;n="alert alert-danger text-center",s=i?i:"Failed to update!"}return React.createElement("div",{className:"row"},React.createElement("div",{className:n,role:"alert",ref:"alert-message"},s),React.createElement(FormElement,{name:"probandInfo",onSubmit:this.handleSubmit,ref:"form",class:"col-md-6"},React.createElement(StaticElement,{label:"PSCID",text:this.state.Data.pscid}),React.createElement(StaticElement,{label:"DCCID",text:this.state.Data.candID}),React.createElement(SelectElement,{label:"Proband Gender",name:"ProbandGender",options:this.state.genderOptions,value:this.state.formData.ProbandGender,onUserInput:this.setFormData,ref:"ProbandGender",disabled:e,required:!0}),React.createElement(DateElement,{label:"DoB Proband",name:"ProbandDoB",value:this.state.formData.ProbandDoB,onUserInput:this.setFormData,ref:"ProbandDoB",disabled:e,required:a}),React.createElement(DateElement,{label:"Confirm DoB Proband",name:"ProbandDoB2",value:this.state.formData.ProbandDoB2,onUserInput:this.setFormData,ref:"ProbandDoB2",disabled:e,required:r}),React.createElement(StaticElement,{label:"Age Difference (months)",text:this.state.Data.ageDifference.toString()}),t))},handleSubmit:function(e){e.preventDefault();var t=this.state.formData,a=new Date,r=a.getDate(),s=a.getMonth()+1,n=a.getFullYear();r<10&&(r="0"+r),s<10&&(s="0"+s),a=n+"-"+s+"-"+r;var i=t.ProbandDoB?t.ProbandDoB:null,o=t.ProbandDoB2?t.ProbandDoB2:null;if(i!==o)return void alert("DOB do not match!");if(i>a)return void alert("Consent to study date cannot be later than today!");var l=this,c=new FormData;for(var d in t)""!==t[d]&&c.append(d,t[d]);c.append("tab",this.props.tabName),c.append("candID",this.state.Data.candID),$.ajax({type:"POST",url:l.props.action,data:c,cache:!1,contentType:!1,processData:!1,success:function(e){l.setState({updateResult:"success"}),l.showAlertMessage()},error:function(e){if(""!==e.responseText){var t=JSON.parse(e.responseText).message;l.setState({updateResult:"error",errorMessage:t}),l.showAlertMessage()}}})},showAlertMessage:function(){var e=this;if(null!==this.refs["alert-message"]){var t=this.refs["alert-message"];$(t).fadeTo(2e3,500).delay(3e3).slideUp(500,function(){e.setState({updateResult:null})})}}});t.default=a},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=React.createClass({displayName:"FamilyInfo",getInitialState:function(){return{Data:[],formData:{},familyMembers:[],updateResult:null,errorMessage:null,isLoaded:!1,loadedData:0}},componentDidMount:function(){var e=this;$.ajax(this.props.dataURL,{dataType:"json",xhr:function t(){var t=new window.XMLHttpRequest;return t.addEventListener("progress",function(t){e.setState({loadedData:t.loaded})}),t},success:function(t){e.setState({Data:t,isLoaded:!0,familyMembers:t.existingFamilyMembers})},error:function(t,a,r){e.setState({error:"An error occurred when loading the form!"})}})},setFormData:function(e,t){var a=this.state.formData;a[e]=t,this.setState({formData:a})},onSubmit:function(e){e.preventDefault()},render:function(){if(!this.state.isLoaded)return void 0!==this.state.error?React.createElement("div",{className:"alert alert-danger text-center"},React.createElement("strong",null,this.state.error)):React.createElement("button",{className:"btn-info has-spinner"},"Loading",React.createElement("span",{className:"glyphicon glyphicon-refresh glyphicon-refresh-animate"}));var e={full_sibling:"Full Sibling",half_sibling:"Half Sibling","1st_cousin":"First Cousin"},t=!0,a=null;loris.userHasPermission("candidate_parameter_edit")&&(t=!1,a=React.createElement(ButtonElement,{label:"Add"}));var r=this.state.Data.candidates,s=this.state.familyMembers,n=[];for(var i in s)if(s.hasOwnProperty(i)){var o=s[i].FamilyCandID,l=s[i].Relationship_type,c="?candID="+o+"&identifier="+o;n.push(React.createElement("div",{key:i},React.createElement(StaticElement,{label:"Family Member DCCID",text:React.createElement("a",{href:c},o)}),React.createElement(StaticElement,{label:"Relation Type",text:e[l]}),React.createElement(ButtonElement,{label:"Delete",type:"button",onUserInput:this.deleteFamilyMember.bind(null,o,i,r)}),React.createElement("hr",null))),delete r[o]}var d=!1;this.state.formData.FamilyCandID&&(d=!0);var u="",p="alert text-center hide";if(this.state.updateResult)if("success"===this.state.updateResult)p="alert alert-success text-center",u="Update Successful!";else if("error"===this.state.updateResult){var m=this.state.errorMessage;p="alert alert-danger text-center",u=m?m:"Failed to update!"}return React.createElement("div",{className:"row"},React.createElement("div",{className:p,role:"alert",ref:"alert-message"},u),React.createElement(FormElement,{name:"familyInfo",onSubmit:this.handleSubmit,ref:"form",class:"col-md-6"},React.createElement(StaticElement,{label:"PSCID",text:this.state.Data.pscid}),React.createElement(StaticElement,{label:"DCCID",text:this.state.Data.candID}),React.createElement("hr",null),n,React.createElement(SelectElement,{label:"Family Member ID (DCCID)",name:"FamilyCandID",options:r,onUserInput:this.setFormData,ref:"FamilyCandID",disabled:t,required:!1,value:this.state.formData.FamilyCandID}),React.createElement(SelectElement,{label:"Relation Type",name:"Relationship_type",options:e,onUserInput:this.setFormData,ref:"Relationship_type",disabled:t,required:d,value:this.state.formData.Relationship_type}),a))},handleSubmit:function(e){e.preventDefault();var t=this.state.formData,a=this,r=new FormData,s=this.refs,n=this.state.familyMembers,i={};for(var o in t)t.hasOwnProperty(o)&&""!==t[o]&&(i[o]=t[o],r.append(o,t[o]));r.append("tab",this.props.tabName),r.append("candID",this.state.Data.candID),n.push(i),this.setState({familyMembers:n}),$.ajax({type:"POST",url:a.props.action,data:r,cache:!1,contentType:!1,processData:!1,success:function(e){a.setState({updateResult:"success",formData:{}}),a.showAlertMessage(),Object.keys(s).map(function(e){s[e].state&&s[e].state.value&&(s[e].state.value="")}),a.forceUpdate()},error:function(e){var t=JSON.parse(e.responseText).message;a.setState({updateResult:"error",errorMessage:t}),a.showAlertMessage()}})},showAlertMessage:function(){var e=this;if(null!==this.refs["alert-message"]){var t=this.refs["alert-message"];$(t).fadeTo(2e3,500).delay(3e3).slideUp(500,function(){e.setState({updateResult:null})})}},deleteFamilyMember:function(e,t,a){var r=this.state.familyMembers;delete r[t],a[e]=e,this.setState({familyMembers:r});var s=this.state.formData,n=this,i=new FormData;for(var o in s)s.hasOwnProperty(o)&&""!==s[o]&&i.append(o,s[o]);i.append("tab","deleteFamilyMember"),i.append("candID",this.state.Data.candID),i.append("familyDCCID",e),$.ajax({type:"POST",url:n.props.action,data:i,cache:!1,contentType:!1,processData:!1,success:function(e){n.setState({updateResult:"success"}),n.showAlertMessage()},error:function(e){if(""!==e.responseText){var t=JSON.parse(e.responseText).message;n.setState({updateResult:"error",errorMessage:t}),n.showAlertMessage()}}})}});t.default=a},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=React.createClass({displayName:"ParticipantStatus",getInitialState:function(){return{Data:[],formData:{},updateResult:null,errorMessage:null,isLoaded:!1,loadedData:0}},componentDidMount:function(){var e=this;$.ajax(this.props.dataURL,{dataType:"json",xhr:function t(){var t=new window.XMLHttpRequest;return t.addEventListener("progress",function(t){e.setState({loadedData:t.loaded})}),t},success:function(t){var a={};a.participantStatus=t.participantStatus,a.participantSuboptions=t.participantSuboptions,a.reasonSpecify=t.reasonSpecify,e.setState({Data:t,formData:a,isLoaded:!0})},error:function(t,a,r){e.setState({error:"An error occurred when loading the form!"})}})},setFormData:function(e,t){var a=this.state.formData,r=this.state.Data.required;"participantStatus"===e&&r.indexOf(t)<0&&(a.participantSuboptions=""),a[e]=t,this.setState({formData:a})},onSubmit:function(e){e.preventDefault()},render:function(){if(!this.state.isLoaded)return void 0!==this.state.error?React.createElement("div",{className:"alert alert-danger text-center"},React.createElement("strong",null,this.state.error)):React.createElement("button",{className:"btn-info has-spinner"},"Loading",React.createElement("span",{className:"glyphicon glyphicon-refresh glyphicon-refresh-animate"}));var e=!0,t=null;loris.userHasPermission("candidate_parameter_edit")&&(e=!1,t=React.createElement(ButtonElement,{label:"Update"}));var a=this.state.Data.required,r={},s=!1,n=this.state.formData.participantStatus?this.state.formData.participantStatus:this.state.Data.participantStatus;n&&a.indexOf(n)>-1&&(r=this.state.Data.parentIDs[n],s=!0);var i=[];for(var o in this.state.Data.history)if(this.state.Data.history.hasOwnProperty(o)){var l="";for(var c in this.state.Data.history[o])if(this.state.Data.history[o].hasOwnProperty(c)){var d=this.state.Data.history[o][c];if(null!==d)switch(c){case"data_entry_date":l+="[",l+=d,l+="] ";break;case"entry_staff":l+=d,l+=" ";break;case"status":l+=" Status: ",l+=d,l+=" ";break;case"suboption":l+="Details: ",l+=d,l+=" ";break;case"reason_specify":l+="Comments: ",l+=d,l+=" "}}i.push(React.createElement("p",{key:o},l))}var u="",p="alert text-center hide";if(this.state.updateResult)if("success"===this.state.updateResult)p="alert alert-success text-center",u="Update Successful!";else if("error"===this.state.updateResult){var m=this.state.errorMessage;p="alert alert-danger text-center",u=m?m:"Failed to update!"}return React.createElement("div",{className:"row"},React.createElement("div",{className:p,role:"alert",ref:"alert-message"},u),React.createElement(FormElement,{name:"participantStatus",onSubmit:this.handleSubmit,ref:"form",class:"col-md-6"},React.createElement(StaticElement,{label:"PSCID",text:this.state.Data.pscid}),React.createElement(StaticElement,{label:"DCCID",text:this.state.Data.candID}),React.createElement(SelectElement,{label:"Participant Status",name:"participantStatus",options:this.state.Data.statusOptions,value:this.state.formData.participantStatus,onUserInput:this.setFormData,ref:"participantStatus",disabled:e,required:!0}),React.createElement(SelectElement,{label:"Specify Reason",name:"participantSuboptions",options:r,value:this.state.formData.participantSuboptions,onUserInput:this.setFormData,ref:"participantSuboptions",disabled:!s,required:s}),React.createElement(TextareaElement,{label:"Comments",name:"reasonSpecify",value:this.state.formData.reasonSpecify,onUserInput:this.setFormData,ref:"reasonSpecify",disabled:e,required:!1}),t,i))},handleSubmit:function(e){e.preventDefault();var t=this.state.formData,a=this,r=new FormData;for(var s in t)""!==t[s]&&r.append(s,t[s]);r.append("tab",this.props.tabName),r.append("candID",this.state.Data.candID),$.ajax({type:"POST",url:a.props.action,data:r,cache:!1,contentType:!1,processData:!1,success:function(e){a.setState({updateResult:"success"}),a.showAlertMessage()},error:function(e){if(""!==e.responseText){var t=JSON.parse(e.responseText).message;a.setState({updateResult:"error",errorMessage:t}),a.showAlertMessage()}}})},showAlertMessage:function(){var e=this;if(null!==this.refs["alert-message"]){var t=this.refs["alert-message"];$(t).fadeTo(2e3,500).delay(3e3).slideUp(500,function(){e.setState({updateResult:null})})}}});t.default=a},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=React.createClass({displayName:"ConsentStatus",getInitialState:function(){return{consentOptions:{yes:"Yes",no:"No"},Data:[],formData:{},updateResult:null,errorMessage:null,isLoaded:!1,loadedData:0}},componentDidMount:function(){var e=this;$.ajax(this.props.dataURL,{dataType:"json",success:function(t){var a={},r=t.consents;for(var s in r)if(r.hasOwnProperty(s)){var n=s+"_date",i=s+"_date2",o=s+"_withdrawal",l=s+"_withdrawal2";a[s]=t.consentStatuses[s],a[n]=t.consentDates[s],a[i]=t.consentDates[s],a[o]=t.withdrawals[s],a[l]=t.withdrawals[s]}e.setState({Data:t,formData:a,isLoaded:!0})},error:function(t,a,r){e.setState({error:"An error occurred when loading the form!"})}})},setFormData:function(e,t){var a=this.state.formData;a[e]=t,this.setState({formData:a})},onSubmit:function(e){e.preventDefault()},render:function(){if(!this.state.isLoaded)return void 0!==this.state.error?React.createElement("div",{className:"alert alert-danger text-center"},React.createElement("strong",null,this.state.error)):React.createElement("button",{className:"btn-info has-spinner"},"Loading",React.createElement("span",{className:"glyphicon glyphicon-refresh glyphicon-refresh-animate"}));var e=!0,t=null;loris.userHasPermission("candidate_parameter_edit")&&(e=!1,t=React.createElement(ButtonElement,{label:"Update"}));var a=[],r=[],s=0;for(var n in this.state.Data.consents)if(this.state.Data.consents.hasOwnProperty(n)){var i=n+"_withdrawal";"yes"===this.state.formData[n]&&(a[s]=!0),this.state.formData[i]?r[s]=!0:r[s]=!1,s++}var o=[];s=0;for(var l in this.state.Data.consents)if(this.state.Data.consents.hasOwnProperty(l)){var c=this.state.Data.consents[l],d=l+"_date",u=l+"_date2",p="Date of "+c,m="Confirmation Date of "+c,f=l+"_withdrawal",h=l+"_withdrawal2",D="Date of Withdrawal of "+c,b="Confirmation Date of Withdrawal of "+c,v=React.createElement("div",{key:s},React.createElement(SelectElement,{label:c,name:l,options:this.state.consentOptions,value:this.state.formData[l],onUserInput:this.setFormData,ref:l,disabled:e,required:!1}),React.createElement(DateElement,{label:p,name:d,value:this.state.formData[d],onUserInput:this.setFormData,ref:d,disabled:e,required:a[s]}),React.createElement(DateElement,{label:m,name:u,value:this.state.formData[u],onUserInput:this.setFormData,ref:u,disabled:e,required:a[s]}),React.createElement(DateElement,{label:D,name:f,value:this.state.formData[f],onUserInput:this.setFormData,ref:f,disabled:e,required:!1}),React.createElement(DateElement,{label:b,name:h,value:this.state.formData[h],onUserInput:this.setFormData,ref:h,disabled:e,required:r[s]}),React.createElement("hr",null));o.push(v),s++}var g=[];for(var R in this.state.Data.history)if(this.state.Data.history.hasOwnProperty(R)){var y=this.state.Data.history[R].label,S=this.state.Data.history[R].consentType;for(var E in this.state.Data.history[R])if(this.state.Data.history[R].hasOwnProperty(E)){var w="",I=this.state.Data.history[R][E];for(var P in I)if(I.hasOwnProperty(P)){var x=I[P];if(null!==x)switch(P){case"data_entry_date":w+="[",w+=x,w+="] ";break;case"entry_staff":w+=x,w+=" ";break;case S:w+=y+" Status: ",w+=x,w+=" ";break;case S+"_date":w+="Date of Consent: ",w+=x,w+=" ";break;case S+"_withdrawal":w+="Date of Consent Withdrawal: ",w+=x,w+=" "}}g.push(React.createElement("p",{key:E},w))}}var O="",_="alert text-center hide";if(this.state.updateResult)if("success"===this.state.updateResult)_="alert alert-success text-center",O="Update Successful!";else if("error"===this.state.updateResult){var M=this.state.errorMessage;_="alert alert-danger text-center",O=M?M:"Failed to update!"}return React.createElement("div",{className:"row"},React.createElement("div",{className:_,role:"alert",ref:"alert-message"},O),React.createElement(FormElement,{name:"consentStatus",onSubmit:this.handleSubmit,ref:"form",class:"col-md-6"},React.createElement(StaticElement,{label:"PSCID",text:this.state.Data.pscid}),React.createElement(StaticElement,{label:"DCCID",text:this.state.Data.candID}),o,t,g))},handleSubmit:function(e){e.preventDefault();var t=this.state.formData,a=new Date,r=a.getDate(),s=a.getMonth()+1,n=a.getFullYear();r<10&&(r="0"+r),s<10&&(s="0"+s),a=n+"-"+s+"-"+r;for(var i in this.state.Data.consents)if(this.state.Data.consents.hasOwnProperty(i)){var o=this.state.Data.consents[i],l=i+"_date",c=i+"_date2",d=t[l]?t[l]:null,u=t[c]?t[c]:null;if(d!==u)return void alert(o+" dates do not match!");if(d>a)return void alert(o+" date cannot be later than today!");var p=i+"_withdrawal",m=i+"_withdrawal2";if(d=t[p]?t[p]:null,u=t[m]?t[m]:null,d!==u)return void alert(o+" withdrawal dates do not match!");if(d>a)return void alert(o+" withdrawal date cannot be later than today!")}var f=this,h=new FormData;for(var D in t)""!==t[D]&&h.append(D,t[D]);h.append("tab",this.props.tabName),h.append("candID",this.state.Data.candID),$.ajax({type:"POST",url:f.props.action,data:h,cache:!1,contentType:!1,processData:!1,success:function(e){f.setState({updateResult:"success"}),f.showAlertMessage()},error:function(e){if(""!==e.responseText){var t=JSON.parse(e.responseText).message;f.setState({updateResult:"error",errorMessage:t}),f.showAlertMessage()}}})},showAlertMessage:function(){var e=this;if(null!==this.refs["alert-message"]){var t=this.refs["alert-message"];$(t).fadeTo(2e3,500).delay(3e3).slideUp(500,function(){e.setState({updateResult:null})})}}});t.default=a}]);
//# sourceMappingURL=index.js.map