!function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:!1};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.p="",__webpack_require__(0)}({0:function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_uploadForm=__webpack_require__(10),_uploadForm2=_interopRequireDefault(_uploadForm),_columnFormatter=__webpack_require__(11),_columnFormatter2=_interopRequireDefault(_columnFormatter),MediaIndex=function(_React$Component){function MediaIndex(props){_classCallCheck(this,MediaIndex);var _this=_possibleConstructorReturn(this,(MediaIndex.__proto__||Object.getPrototypeOf(MediaIndex)).call(this,props));return loris.hiddenHeaders=["Cand ID","Session ID","File Type"],_this.state={isLoaded:!1,filter:{}},_this.fetchData=_this.fetchData.bind(_this),_this.updateFilter=_this.updateFilter.bind(_this),_this}return _inherits(MediaIndex,_React$Component),_createClass(MediaIndex,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"fetchData",value:function(){$.ajax(this.props.DataURL,{method:"GET",dataType:"json",success:function(data){this.setState({Data:data,isLoaded:!0})}.bind(this),error:function(_error){console.error(_error)}})}},{key:"updateFilter",value:function(filter){this.setState({filter:filter})}},{key:"render",value:function(){if(!this.state.isLoaded)return React.createElement("button",{className:"btn-info has-spinner"},"Loading",React.createElement("span",{className:"glyphicon glyphicon-refresh glyphicon-refresh-animate"}));var uploadTab=void 0,tabList=[{id:"browse",label:"Browse"}];return loris.userHasPermission("media_write")&&(tabList.push({id:"upload",label:"Upload"}),uploadTab=React.createElement(TabPane,{TabId:tabList[1].id},React.createElement(_uploadForm2.default,{DataURL:loris.BaseURL+"/media/ajax/FileUpload.php?action=getData",action:loris.BaseURL+"/media/ajax/FileUpload.php?action=upload"}))),React.createElement(Tabs,{tabs:tabList,defaultTab:"browse",updateURL:!0},React.createElement(TabPane,{TabId:tabList[0].id},React.createElement(FilterForm,{Module:"media",name:"media_filter",id:"media_filter",columns:3,formElements:this.state.Data.form,onUpdate:this.updateFilter,filter:this.state.filter},React.createElement("br",null),React.createElement(ButtonElement,{type:"reset",label:"Clear Filters"})),React.createElement(StaticDataTable,{Data:this.state.Data.Data,Headers:this.state.Data.Headers,Filter:this.state.filter,getFormattedCell:_columnFormatter2.default,freezeColumn:"File Name"})),uploadTab)}}]),MediaIndex}(React.Component);$(function(){var mediaIndex=React.createElement("div",{className:"page-media"},React.createElement(MediaIndex,{DataURL:loris.BaseURL+"/media/?format=json"}));ReactDOM.render(mediaIndex,document.getElementById("lorisworkspace"))})},10:function(module,exports){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),MediaUploadForm=function(_React$Component){function MediaUploadForm(props){_classCallCheck(this,MediaUploadForm);var _this=_possibleConstructorReturn(this,(MediaUploadForm.__proto__||Object.getPrototypeOf(MediaUploadForm)).call(this,props));return _this.state={Data:{},formData:{},uploadResult:null,errorMessage:null,isLoaded:!1,loadedData:0,uploadProgress:-1},_this.getValidFileName=_this.getValidFileName.bind(_this),_this.handleSubmit=_this.handleSubmit.bind(_this),_this.isValidFileName=_this.isValidFileName.bind(_this),_this.isValidForm=_this.isValidForm.bind(_this),_this.setFormData=_this.setFormData.bind(_this),_this.uploadFile=_this.uploadFile.bind(_this),_this}return _inherits(MediaUploadForm,_React$Component),_createClass(MediaUploadForm,[{key:"componentDidMount",value:function(){var self=this;$.ajax(this.props.DataURL,{dataType:"json",success:function(data){self.setState({Data:data,isLoaded:!0})},error:function(data,errorCode,errorMsg){console.error(data,errorCode,errorMsg),self.setState({error:"An error occurred when loading the form!"})}})}},{key:"render",value:function(){if(void 0!==this.state.error)return React.createElement("div",{className:"alert alert-danger text-center"},React.createElement("strong",null,this.state.error));if(!this.state.isLoaded)return React.createElement("button",{className:"btn-info has-spinner"},"Loading",React.createElement("span",{className:"glyphicon glyphicon-refresh glyphicon-refresh-animate"}));var helpText=React.createElement("span",null,"File name should begin with ",React.createElement("b",null,"[PSCID]_[Visit Label]_[Instrument]"),React.createElement("br",null),"For example, for candidate ",React.createElement("i",null,"ABC123"),", visit ",React.createElement("i",null,"V1")," for",React.createElement("i",null,"Body Mass Index")," the file name should be prefixed by:",React.createElement("b",null," ABC123_V1_Body_Mass_Index"));return React.createElement("div",{className:"row"},React.createElement("div",{className:"col-md-8 col-lg-7"},React.createElement(FormElement,{name:"mediaUpload",fileUpload:!0,onSubmit:this.handleSubmit,ref:"form"},React.createElement("h3",null,"Upload a media file"),React.createElement("br",null),React.createElement(StaticElement,{label:"Note",text:helpText}),React.createElement(SelectElement,{name:"pscid",label:"PSCID",options:this.state.Data.candidates,onUserInput:this.setFormData,ref:"pscid",hasError:!1,required:!0,value:this.state.formData.pscid}),React.createElement(SelectElement,{name:"visitLabel",label:"Visit Label",options:this.state.Data.visits,onUserInput:this.setFormData,ref:"visitLabel",required:!0,value:this.state.formData.visitLabel}),React.createElement(SelectElement,{name:"forSite",label:"Site",options:this.state.Data.sites,onUserInput:this.setFormData,ref:"forSite",required:!0,value:this.state.formData.forSite}),React.createElement(SelectElement,{name:"instrument",label:"Instrument",options:this.state.Data.instruments,onUserInput:this.setFormData,ref:"instrument",value:this.state.formData.instrument}),React.createElement(DateElement,{name:"dateTaken",label:"Date of Administration",minYear:"2000",maxYear:"2017",onUserInput:this.setFormData,ref:"dateTaken",value:this.state.formData.dateTaken}),React.createElement(TextareaElement,{name:"comments",label:"Comments",onUserInput:this.setFormData,ref:"comments",value:this.state.formData.comments}),React.createElement(FileElement,{name:"file",id:"mediaUploadEl",onUserInput:this.setFormData,ref:"file",label:"File to upload",required:!0,value:this.state.formData.file}),React.createElement(ButtonElement,{label:"Upload File"}),React.createElement("div",{className:"row"},React.createElement("div",{className:"col-sm-9 col-sm-offset-3"},React.createElement(ProgressBar,{value:this.state.uploadProgress}))))))}},{key:"getValidFileName",value:function(pscid,visitLabel,instrument){var fileName=pscid+"_"+visitLabel;return instrument&&(fileName+="_"+instrument),fileName}},{key:"handleSubmit",value:function(e){e.preventDefault();var formData=this.state.formData,formRefs=this.refs,mediaFiles=this.state.Data.mediaFiles?this.state.Data.mediaFiles:[];if(this.isValidForm(formRefs,formData)){var instrument=formData.instrument?formData.instrument:null,fileName=formData.file?formData.file.name.replace(/\s+/g,"_"):null,requiredFileName=this.getValidFileName(formData.pscid,formData.visitLabel,instrument);if(!this.isValidFileName(requiredFileName,fileName))return void swal("Invalid file name!","File name should begin with: "+requiredFileName,"error");var isDuplicate=mediaFiles.indexOf(fileName);isDuplicate>=0?swal({title:"Are you sure?",text:"A file with this name already exists!\n Would you like to override existing file?",type:"warning",showCancelButton:!0,confirmButtonText:"Yes, I am sure!",cancelButtonText:"No, cancel it!"},function(isConfirm){isConfirm?this.uploadFile():swal("Cancelled","Your imaginary file is safe :)","error")}.bind(this)):this.uploadFile()}}},{key:"uploadFile",value:function(){var formData=this.state.formData,formObj=new FormData;for(var key in formData)""!==formData[key]&&formObj.append(key,formData[key]);$.ajax({type:"POST",url:this.props.action,data:formObj,cache:!1,contentType:!1,processData:!1,xhr:function(){var xhr=new window.XMLHttpRequest;return xhr.upload.addEventListener("progress",function(evt){if(evt.lengthComputable){var percentage=Math.round(evt.loaded/evt.total*100);this.setState({uploadProgress:percentage})}}.bind(this),!1),xhr}.bind(this),success:function(){var mediaFiles=JSON.parse(JSON.stringify(this.state.Data.mediaFiles));mediaFiles.push(formData.file.name);var event=new CustomEvent("update-datatable");window.dispatchEvent(event),this.setState({mediaFiles:mediaFiles,formData:{},uploadProgress:-1}),swal("Upload Successful!","","success")}.bind(this),error:function(err){console.error(err);var msg=err.responseJSON?err.responseJSON.message:"Upload error!";this.setState({errorMessage:msg,uploadProgress:-1}),swal(msg,"","error")}.bind(this)})}},{key:"isValidFileName",value:function(requiredFileName,fileName){return null!==fileName&&null!==requiredFileName&&0===fileName.indexOf(requiredFileName)}},{key:"isValidForm",value:function isValidForm(formRefs,formData){var isValidForm=!0,requiredFields={pscid:null,visitLabel:null,file:null};return Object.keys(requiredFields).map(function(field){formData[field]?requiredFields[field]=formData[field]:formRefs[field]&&(formRefs[field].props.hasError=!0,isValidForm=!1)}),this.forceUpdate(),isValidForm}},{key:"setFormData",value:function(formElement,value){var visitLabel=this.state.formData.visitLabel,pscid=this.state.formData.pscid;"pscid"===formElement&&""!==value&&(this.state.Data.visits=this.state.Data.sessionData[value].visits,this.state.Data.sites=this.state.Data.sessionData[value].sites,visitLabel?this.state.Data.instruments=this.state.Data.sessionData[value].instruments[visitLabel]:this.state.Data.instruments=this.state.Data.sessionData[value].instruments.all),"visitLabel"===formElement&&""!==value&&pscid&&(this.state.Data.instruments=this.state.Data.sessionData[pscid].instruments[value]);var formData=this.state.formData;formData[formElement]=value,this.setState({formData:formData})}}]),MediaUploadForm}(React.Component);MediaUploadForm.propTypes={DataURL:React.PropTypes.string.isRequired,action:React.PropTypes.string.isRequired},exports.default=MediaUploadForm},11:function(module,exports){"use strict";function formatColumn(column,cell,rowData,rowHeaders){if(loris.hiddenHeaders.indexOf(column)>-1)return null;var row={};rowHeaders.forEach(function(header,index){row[header]=rowData[index]},this);var hasWritePermission=loris.userHasPermission("media_write");if("File Name"===column&&hasWritePermission===!0){var downloadURL=loris.BaseURL+"/media/ajax/FileDownload.php?File="+row["File Name"];return React.createElement("td",null,React.createElement("a",{href:downloadURL,target:"_blank",download:row["File Name"]},cell))}if("Visit Label"===column&&null!==row["Cand ID"]&&row["Session ID"]){var sessionURL=loris.BaseURL+"/instrument_list/?candID="+row["Cand ID"]+"&sessionID="+row["Session ID"];return React.createElement("td",null,React.createElement("a",{href:sessionURL},cell))}if("Edit Metadata"===column){var editURL=loris.BaseURL+"/media/edit/?id="+row["Edit Metadata"];return React.createElement("td",null,React.createElement("a",{href:editURL},"Edit"))}return React.createElement("td",null,cell)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=formatColumn}});
//# sourceMappingURL=mediaIndex.js.map