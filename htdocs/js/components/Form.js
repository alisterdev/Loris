!function(e){function t(r){if(a[r])return a[r].exports;var s=a[r]={exports:{},id:r,loaded:!1};return e[r].call(s.exports,s,s.exports,t),s.loaded=!0,s.exports}var a={};return t.m=e,t.c=a,t.p="",t(0)}([function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=React.createClass({displayName:"FormElement",propTypes:{name:React.PropTypes.string.isRequired,id:React.PropTypes.string,method:React.PropTypes.oneOf(["POST","GET"]),class:React.PropTypes.string,columns:React.PropTypes.number,formElements:React.PropTypes.shape({elementName:React.PropTypes.shape({name:React.PropTypes.string,type:React.PropTypes.string})}),onSubmit:React.PropTypes.func,onUserInput:React.PropTypes.func},getDefaultProps:function(){return{name:null,id:null,method:"POST",class:"form-horizontal",columns:1,fileUpload:!1,formElements:{},onSubmit:function(){console.warn("onSubmit() callback is not set!")}}},getFormElements:function(){var e=[],t=this.props.columns,a=12,r=Math.floor(a/t),s="col-xs-12 col-sm-"+r+" col-md-"+r,l=this.props.formElements;return Object.keys(l).forEach(function(t,a){var r=this.props.onUserInput?this.props.onUserInput:l[t].onUserInput,n=l[t].value?l[t].value:"";e.push(React.createElement("div",{key:"el_"+a,className:s},React.createElement(m,{element:l[t],onUserInput:r,value:n})))}.bind(this)),React.Children.forEach(this.props.children,function(t,a){var r="col-xs-12 col-sm-12 col-md-12";React.isValidElement(t)&&"function"==typeof t.type&&(r=s),e.push(React.createElement("div",{key:"el_child_"+a,className:r},t))}),e},handleSubmit:function(e){this.props.onSubmit&&(e.preventDefault(),this.props.onSubmit(e))},render:function(){var e=this.props.fileUpload?"multipart/form-data":null,t=this.getFormElements(),a={display:"flex",flexWrap:"wrap"};return React.createElement("form",{name:this.props.name,id:this.props.id,className:this.props.class,method:this.props.method,encType:e,onSubmit:this.handleSubmit},React.createElement("div",{className:"row",style:a},t))}}),r=React.createClass({displayName:"SelectElement",propTypes:{name:React.PropTypes.string.isRequired,options:React.PropTypes.object.isRequired,label:React.PropTypes.string,value:React.PropTypes.oneOfType([React.PropTypes.string,React.PropTypes.array]),id:React.PropTypes.string,class:React.PropTypes.string,multiple:React.PropTypes.bool,disabled:React.PropTypes.bool,required:React.PropTypes.bool,emptyOption:React.PropTypes.bool,hasError:React.PropTypes.bool,errorMessage:React.PropTypes.string,onUserInput:React.PropTypes.func},getDefaultProps:function(){return{name:"",options:{},label:"",value:void 0,id:"",class:"",multiple:!1,disabled:!1,required:!1,emptyOption:!0,hasError:!1,errorMessage:"The field is required!",onUserInput:function(){console.warn("onUserInput() callback is not set")}}},handleChange:function(e){var t=e.target.value,a=e.target.options;if(this.props.multiple&&a.length>1){t=[];for(var r=0,s=a.length;r<s;r++)a[r].selected&&t.push(a[r].value)}this.props.onUserInput(this.props.name,t)},render:function(){var e=this.props.multiple?"multiple":null,t=this.props.required?"required":null,a=this.props.disabled?"disabled":null,r=this.props.options,s=null,l=null,n=null,o="row form-group";t&&(n=React.createElement("span",{className:"text-danger"},"*")),this.props.emptyOption&&(l=React.createElement("option",null)),(this.props.hasError||this.props.required&&""===this.props.value)&&(s=React.createElement("span",null,this.props.errorMessage),o="row form-group has-error");var p=this.props.value||(e?[]:"");return React.createElement("div",{className:o},React.createElement("label",{className:"col-sm-3 control-label",htmlFor:this.props.label},this.props.label,n),React.createElement("div",{className:"col-sm-9"},React.createElement("select",{name:this.props.name,multiple:e,className:"form-control",id:this.props.label,value:p,onChange:this.handleChange,required:t,disabled:a},l,Object.keys(r).map(function(e){return React.createElement("option",{value:e,key:e},r[e])})),s))}}),s=React.createClass({displayName:"TextareaElement",propTypes:{name:React.PropTypes.string.isRequired,label:React.PropTypes.string,value:React.PropTypes.string,id:React.PropTypes.string,disabled:React.PropTypes.bool,required:React.PropTypes.bool,rows:React.PropTypes.number,cols:React.PropTypes.number,onUserInput:React.PropTypes.func},getDefaultProps:function(){return{name:"",label:"",value:"",id:null,disabled:!1,required:!1,rows:4,cols:25,onUserInput:function(){console.warn("onUserInput() callback is not set")}}},handleChange:function(e){this.props.onUserInput(this.props.name,e.target.value)},render:function(){var e=this.props.disabled?"disabled":null,t=this.props.required?"required":null,a=null;return t&&(a=React.createElement("span",{className:"text-danger"},"*")),React.createElement("div",{className:"row form-group"},React.createElement("label",{className:"col-sm-3 control-label",htmlFor:this.props.id},this.props.label,a),React.createElement("div",{className:"col-sm-9"},React.createElement("textarea",{cols:this.props.cols,rows:this.props.rows,className:"form-control",name:this.props.name,id:this.props.id,value:this.props.value||"",required:t,disabled:e,onChange:this.handleChange})))}}),l=React.createClass({displayName:"TextboxElement",propTypes:{name:React.PropTypes.string.isRequired,label:React.PropTypes.string,value:React.PropTypes.string,id:React.PropTypes.string,disabled:React.PropTypes.bool,required:React.PropTypes.bool,onUserInput:React.PropTypes.func},getDefaultProps:function(){return{name:"",label:"",value:"",id:null,disabled:!1,required:!1,onUserInput:function(){console.warn("onUserInput() callback is not set")}}},handleChange:function(e){this.props.onUserInput(this.props.name,e.target.value)},render:function(){var e=this.props.disabled?"disabled":null,t=this.props.required?"required":null,a=null;return t&&(a=React.createElement("span",{className:"text-danger"},"*")),React.createElement("div",{className:"row form-group"},React.createElement("label",{className:"col-sm-3 control-label",htmlFor:this.props.id},this.props.label,a),React.createElement("div",{className:"col-sm-9"},React.createElement("input",{type:"text",className:"form-control",name:this.props.name,id:this.props.id,value:this.props.value||"",required:t,disabled:e,onChange:this.handleChange})))}}),n=React.createClass({displayName:"DateElement",propTypes:{name:React.PropTypes.string.isRequired,label:React.PropTypes.string,value:React.PropTypes.string,id:React.PropTypes.string,disabled:React.PropTypes.bool,required:React.PropTypes.bool,onUserInput:React.PropTypes.func},getDefaultProps:function(){return{name:"",label:"",value:"",id:null,disabled:!1,required:!1,onUserInput:function(){console.warn("onUserInput() callback is not set")}}},handleChange:function(e){this.props.onUserInput(this.props.name,e.target.value)},render:function(){var e=this.props.disabled?"disabled":null,t=this.props.required?"required":null,a=null;return t&&(a=React.createElement("span",{className:"text-danger"},"*")),React.createElement("div",{className:"row form-group"},React.createElement("label",{className:"col-sm-3 control-label",htmlFor:this.props.label},this.props.label,a),React.createElement("div",{className:"col-sm-9"},React.createElement("input",{type:"date",className:"form-control",name:this.props.name,id:this.props.label,min:this.props.minYear,max:this.props.maxYear,onChange:this.handleChange,value:this.props.value,required:t,disabled:e})))}}),o=React.createClass({displayName:"NumericElement",propTypes:{name:React.PropTypes.string.isRequired,min:React.PropTypes.number.isRequired,max:React.PropTypes.number.isRequired,label:React.PropTypes.string,value:React.PropTypes.string,id:React.PropTypes.string,disabled:React.PropTypes.bool,required:React.PropTypes.bool,onUserInput:React.PropTypes.func},getDefaultProps:function(){return{name:"",min:null,max:null,label:"",value:"",id:null,required:!1,disabled:!1,onUserInput:function(){console.warn("onUserInput() callback is not set")}}},handleChange:function(e){this.props.onUserInput(this.props.name,e.target.value)},render:function(){var e=this.props.disabled?"disabled":null,t=this.props.required?"required":null,a=null;return React.createElement("div",{className:"row form-group"},React.createElement("label",{className:"col-sm-3 control-label",htmlFor:this.props.id},this.props.label,a),React.createElement("div",{className:"col-sm-9"},React.createElement("input",{type:"number",className:"form-control",name:this.props.name,id:this.props.id,min:this.props.min,max:this.props.max,value:this.props.value,disabled:e,required:t,onChange:this.handleChange})))}}),p=React.createClass({displayName:"FileElement",propTypes:{name:React.PropTypes.string.isRequired,label:React.PropTypes.string,value:React.PropTypes.oneOfType([React.PropTypes.string,React.PropTypes.object]),id:React.PropTypes.string,disabled:React.PropTypes.bool,required:React.PropTypes.bool,hasError:React.PropTypes.bool,errorMessage:React.PropTypes.string,onUserInput:React.PropTypes.func},getDefaultProps:function(){return{name:"",label:"File to Upload",value:"",id:null,disabled:!1,required:!1,hasError:!1,errorMessage:"The field is required!",onUserInput:function(){console.warn("onUserInput() callback is not set")}}},handleChange:function(e){var t=e.target.files[0]?e.target.files[0]:"";this.props.onUserInput(this.props.name,t)},render:function(){var e=this.props.required?"required":null,t=this.props.value?this.props.value.name:void 0,a=null,r="",s="row form-group";e&&(a=React.createElement("span",{className:"text-danger"},"*"));var l={display:"table",tableLayout:"fixed",width:"100%",whiteSpace:"nowrap"},n={display:"table-cell",overflow:"hidden",textOverflow:"ellipsis"};this.props.hasError&&(r=this.props.errorMessage,s="row form-group has-error");var o=document.querySelector(".fileUpload");return o&&!t&&(o.value=""),this.props.disabled?(l.paddingTop="7px",React.createElement("div",{className:s},React.createElement("label",{className:"col-sm-3 control-label"},this.props.label),React.createElement("div",{className:"col-sm-9"},React.createElement("div",{style:l},React.createElement("span",{style:n},t))))):React.createElement("div",{className:s},React.createElement("label",{className:"col-sm-3 control-label"},this.props.label,a),React.createElement("div",{className:"col-sm-9"},React.createElement("div",{className:"input-group"},React.createElement("div",{tabIndex:"-1",className:"form-control file-caption kv-fileinput-caption"},React.createElement("div",{style:l},React.createElement("span",{style:n},t)),React.createElement("div",{className:"file-caption-name",id:"video_file"})),React.createElement("div",{className:"input-group-btn"},React.createElement("div",{className:"btn btn-primary btn-file"},React.createElement("i",{className:"glyphicon glyphicon-folder-open"})," Browse",React.createElement("input",{type:"file",className:"fileUpload",name:this.props.name,onChange:this.handleChange,required:e})))),React.createElement("span",null,r)))}}),i=React.createClass({displayName:"StaticElement",mixins:[React.addons.PureRenderMixin],propTypes:{label:React.PropTypes.string,text:React.PropTypes.oneOfType([React.PropTypes.string,React.PropTypes.element])},getDefaultProps:function(){return{label:"",text:null}},render:function(){return React.createElement("div",{className:"row form-group"},React.createElement("label",{className:"col-sm-3 control-label"},this.props.label),React.createElement("div",{className:"col-sm-9"},React.createElement("p",{className:"form-control-static"},this.props.text)))}}),c=React.createClass({displayName:"ButtonElement",propTypes:{label:React.PropTypes.string,type:React.PropTypes.string,onUserInput:React.PropTypes.func},getDefaultProps:function(){return{label:"Submit",type:"submit",buttonClass:"btn btn-primary",columnSize:"col-sm-9 col-sm-offset-3",onUserInput:function(){console.warn("onUserInput() callback is not set")}}},handleClick:function(e){this.props.onUserInput(e)},render:function(){return React.createElement("div",{className:"row form-group"},React.createElement("div",{className:this.props.columnSize},React.createElement("button",{type:this.props.type,className:this.props.buttonClass,onClick:this.handleClick},this.props.label)))}}),m=React.createClass({displayName:"LorisElement",render:function(){var e=this.props.element;e.ref=e.name,e.onUserInput=this.props.onUserInput;var t=React.createElement("div",null);switch(e.type){case"text":t=React.createElement(l,e);break;case"select":t=React.createElement(r,e);break;case"date":t=React.createElement(n,e);break;case"numeric":t=React.createElement(o,e);break;case"textarea":t=React.createElement(s,e);break;case"file":t=React.createElement(p,e);break;default:console.warn("Element of type "+e.type+" is not currently implemented!")}return t}});window.FormElement=a,window.SelectElement=r,window.TextareaElement=s,window.TextboxElement=l,window.DateElement=n,window.NumericElement=o,window.FileElement=p,window.StaticElement=i,window.ButtonElement=c,window.LorisElement=m,t.default={FormElement:a,SelectElement:r,TextareaElement:s,TextboxElement:l,DateElement:n,NumericElement:o,FileElement:p,StaticElement:i,ButtonElement:c,LorisElement:m}}]);
//# sourceMappingURL=Form.js.map