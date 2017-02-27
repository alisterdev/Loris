!function(e){function t(s){if(a[s])return a[s].exports;var i=a[s]={exports:{},id:s,loaded:!1};return e[s].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var a={};return t.m=e,t.c=a,t.p="",t(0)}([function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=React.createClass({displayName:"IssueEditForm",propTypes:{DataURL:React.PropTypes.string.isRequired,action:React.PropTypes.string.isRequired},getInitialState:function(){return{Data:[],formData:{},submissionResult:null,errorMessage:null,isLoaded:!1,isNewIssue:!1,issueID:0}},componentDidMount:function(){this.getFormData()},render:function(){if(this.state.error)return React.createElement("div",{className:"alert alert-danger text-center"},React.createElement("strong",null,this.state.error));if(!this.state.isLoaded)return React.createElement("button",{className:"btn-info has-spinner"},"Loading",React.createElement("span",{className:"glyphicon glyphicon-refresh glyphicon-refresh-animate"}));var e=this.state.Data.hasEditPermission||this.state.Data.isOwnIssue||this.state.isNewIssue,t=void 0,a=void 0,i=void 0,r=void 0,n=void 0,o=void 0,l=this.state.issueData.watching;this.state.isNewIssue?(t="Create New Issue",a="Never!",i="No-one!",r="Sometime Soon!",n="Submit Issue",o="Description"):(t="Edit Issue #"+this.state.issueData.issueID,a=this.state.issueData.lastUpdate,i=this.state.issueData.lastUpdatedBy,r=this.state.issueData.dateCreated,n="Update Issue",o="New Comment");var c=this.state.isNewIssue||React.createElement(s,{commentHistory:this.state.issueData.commentHistory}),m=void 0,u=void 0;return this.state.isNewIssue||(m=React.createElement("div",{className:"row"},React.createElement("div",{className:"col-md-6"},React.createElement(StaticElement,{name:"lastUpdate",label:"Last Update: ",ref:"lastUpdate",text:a})),React.createElement("div",{className:"col-md-6"},React.createElement(StaticElement,{name:"lastUpdatedBy",label:"Last Updated By: ",ref:"lastUpdatedBy",text:i})),React.createElement("div",{className:"col-md-6"},React.createElement(StaticElement,{name:"dateCreated",label:"Date Created: ",ref:"dateCreated",text:r})),React.createElement("div",{className:"col-md-6"},React.createElement(StaticElement,{name:"reporter",label:"Reporter: ",ref:"reporter",text:this.state.issueData.reporter}))),u=React.createElement(StaticElement,{name:"description",label:"Description",ref:"description",text:this.state.issueData.desc})),React.createElement("div",null,React.createElement(FormElement,{name:"issueEdit",onSubmit:this.handleSubmit,ref:"form"},React.createElement("h3",null,t),React.createElement("br",null),m,React.createElement("br",null),React.createElement("br",null),React.createElement(TextboxElement,{name:"title",label:"Title",onUserInput:this.setFormData,ref:"title",value:this.state.formData.title,disabled:!e,required:!0}),u,React.createElement(SelectElement,{name:"assignee",label:"Assignee",emptyOption:!0,options:this.state.Data.assignees,onUserInput:this.setFormData,ref:"assignee",disabled:!e,value:this.state.formData.assignee,required:!0}),React.createElement(SelectElement,{name:"centerID",label:"Site",emptyOption:!0,options:this.state.Data.sites,onUserInput:this.setFormData,ref:"centerID",disabled:!e,value:this.state.formData.centerID}),React.createElement(SelectElement,{name:"status",label:"Status",emptyOption:!1,options:this.state.Data.statuses,onUserInput:this.setFormData,ref:"status",disabled:!e,value:this.state.formData.status}),React.createElement(SelectElement,{name:"priority",label:"Priority",emptyOption:!1,options:this.state.Data.priorities,onUserInput:this.setFormData,ref:"priority",required:!1,disabled:!e,value:this.state.formData.priority}),React.createElement(SelectElement,{name:"category",label:"Category",emptyOption:!0,options:this.state.Data.categories,onUserInput:this.setFormData,ref:"category",disabled:!e,value:this.state.formData.category}),React.createElement(SelectElement,{name:"module",label:"Module",emptyOption:!0,options:this.state.Data.modules,onUserInput:this.setFormData,ref:"module",disabled:!e,value:this.state.formData.module}),React.createElement(TextboxElement,{name:"PSCID",label:"PSCID",onUserInput:this.setFormData,ref:"PSCID",disabled:!e,value:this.state.formData.PSCID}),React.createElement(TextboxElement,{name:"visitLabel",label:"Visit Label",onUserInput:this.setFormData,ref:"visitLabel",disabled:!e,value:this.state.formData.visitLabel}),React.createElement(SelectElement,{name:"watching",label:"Watching?",emptyOption:!1,options:{No:"No",Yes:"Yes"},onUserInput:this.setFormData,ref:"watching",value:l}),React.createElement(SelectElement,{name:"othersWatching",label:"Add others to watching?",emptyOption:!0,options:this.state.Data.otherWatchers,onUserInput:this.setFormData,ref:"watching",multiple:!0,value:this.state.formData.othersWatching}),React.createElement(TextareaElement,{name:"comment",label:o,onUserInput:this.setFormData,ref:"comment",value:this.state.formData.comment}),React.createElement(ButtonElement,{label:n})),c)},getFormData:function(){$.ajax(this.props.DataURL,{dataType:"json",success:function(e){this.setState({Data:e,isLoaded:!0,issueData:e.issueData,formData:e.issueData,isNewIssue:!e.issueData.issueID})}.bind(this),error:function(e){this.setState({error:"An error occurred when loading the form!\n Error: "+e.status+" ("+e.statusText+")"})}.bind(this)})},handleSubmit:function(e){if(e.preventDefault(),!this.state.submissionResult||!this.state.isNewIssue){this.setState({submissionResult:"pending"});var t=this.state.formData,a=this.refs,s=new FormData;if(this.isValidForm(a,t)){for(var i in t)""!==t[i]&&s.append(i,t[i]);$.ajax({type:"POST",url:this.props.action,data:s,cache:!1,dataType:"json",contentType:!1,processData:!1,success:function(e){var t="success",a=this.state.isNewIssue?"You will be redirected to main page in 2 seconds!":"";this.showAlertMessage(t,a),this.setState({submissionResult:"success",issueID:e.issueID})}.bind(this),error:function(e){console.error(e),this.setState({submissionResult:"error"});var t="error",a="Failed to submit issue :(";this.showAlertMessage(t,a)}.bind(this)})}}},setFormData:function(e,t){var a=this.state.formData;a[e]=t,this.setState({formData:a})},isValidForm:function e(t,a){var e=!0,s={title:null,assignee:null};return Object.keys(s).map(function(i){a[i]?s[i]=a[i]:t[i]&&(t[i].props.hasError=!0,e=!1)}),this.forceUpdate(),e},showAlertMessage:function(e,t){var a="success",s="Issue updated!",i=t||"",r=null,n=!0,o=function(){this.setState({submissionResult:null})};"success"===e&&this.state.isNewIssue?(s="Issue created!",r=2e3,n=!1,o=function(){this.setState({formData:{},submissionResult:null}),window.location.assign("/issue_tracker")}):"error"===e&&(a="error",s="Error!"),swal({title:s,type:a,text:i,timer:r,allowOutsideClick:!1,allowEscapeKey:!1,showConfirmButton:n},o.bind(this))}}),s=React.createClass({displayName:"CollapsibleComment",getInitialState:function(){return{collapsed:!0}},toggleCollapsed:function(){this.setState({collapsed:!this.state.collapsed})},render:function(){var e=[],t=this.state.collapsed?"Show Comment History":"Hide Comment History",a=this.props.commentHistory;for(var s in a)if(a.hasOwnProperty(s)){var i=" updated the "+a[s].fieldChanged+" to ";"comment"===a[s].fieldChanged&&(i=" commented "),e.push(React.createElement("div",{key:"comment_"+s},"[",a[s].dateAdded,"]",React.createElement("b",null," ",a[s].addedBy),i,React.createElement("i",null," ",a[s].newValue)))}return React.createElement("div",{className:"row form-group"},React.createElement("div",{className:"col-sm-9"},React.createElement("div",{className:"btn btn-primary",onClick:this.toggleCollapsed,"data-toggle":"collapse","data-target":"#comment-history",style:{margin:"10px 0"}},t)),React.createElement("div",{className:"col-sm-9"},React.createElement("div",{id:"comment-history",className:"collapse"},e)))}}),i=React.createFactory(a);window.IssueEditForm=a,window.RIssueEditForm=i,t.default=a}]);
//# sourceMappingURL=editIssue.js.map