(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{1828:function(t,e,a){"use strict";a.r(e);var n=a(3936),i=a(2645);for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a(3653);var s=a(0),o=a(3655),l=a.n(o),c=Object(s.a)(i.default,n.a,n.b,!1,null,"03683c7c",null);"function"==typeof l.a&&l()(c),e.default=c.exports},1929:function(t,e,a){"use strict";var n=a(1);Object.defineProperty(e,"__esModule",{value:!0}),e.uploadFiles=e.checkExistsMultiple=e.download=e.checkExists=e.getArchive=e.extract=e.copy=e.rename=e.create=e.save=e.read=void 0,a(5),a(24),a(26),a(7);var i=a(28),r=n(a(78)),s=a(12),o="/CMD_FILE_MANAGER",l=r.default.get({url:o,id:"FILE_CONTENT",params:{action:"edit"},schema:{path:r.default.REQUIRED_STRING},after:function(t){return t.flow(t.moveProp({DIRECTORY:"dir",FILENAME:"filename",TEXT:"text"}),t.mapProp("text",t.convert.toAppText),t.deleteProp("BODY"))}});e.read=l;var c=r.default.post({url:o,noQueryArg:!0,params:{action:"edit",json:!0},schema:{path:r.default.REQUIRED_STRING,filename:r.default.REQUIRED_STRING,text:r.default.REQUIRED_STRING}});e.save=c;var u=c.extend({params:{text:""}});e.create=u;var f=r.default.post({url:o,params:{action:"rename"},schema:{old:r.default.REQUIRED_STRING,filename:r.default.REQUIRED_STRING,path:r.default.REQUIRED_STRING}});e.rename=f;var d=f.extend({params:{action:"copy",json:!0},schema:{overwrite:r.default.REQUIRED_BOOL}});e.copy=d;var p=r.default.post({url:o,params:{action:"extract",page:2},schema:{path:r.default.REQUIRED_STRING,directory:r.default.REQUIRED_STRING}});e.extract=p;var h=r.default.get({id:"ARCHIVE",url:o,params:{action:"extract",json:!0},schema:{path:r.default.REQUIRED_STRING},response:[],after:function(t){return t.flow(t.getProp("output"),t.convert.toLines,t.filter(t.notEmpty))}});e.getArchive=h;var m=r.default.get({url:o,id:"FILE_EXISTS",response:!1,params:{action:"exists"},schema:{path:r.default.REQUIRED_STRING},after:function(t){return t.flow(t.getProp("exists"),t.isEqual("1"))}});e.checkExists=m;e.download=function(t){var e=(0,i.State)("app.tokens.SESSION_ID"),a="".concat(o).concat(t.truepath,"?noredirect=true&X-DirectAdmin-Session-ID=").concat(e);(0,s.openInNewTab)(a,t.name)};var v=r.default.get({url:o,id:"FILES_EXISTS",params:{action:"multiple_exist"},schema:{file:r.default.ROWS},response:[],mapResponse:function(t){var e=t.paths;return Object.keys(e).filter((function(t){return"1"===e[t].exists}))}});e.checkExistsMultiple=v;var E=r.default.post({url:"/CMD_FILE_MANAGER",params:{action:"upload"},schema:{file:{required:!0},path:r.default.REQUIRED_STRING},transport:FormData,continous:!0});e.uploadFiles=E},2645:function(t,e,a){"use strict";a.r(e);var n=a(2646),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e.default=i.a},2646:function(t,e,a){"use strict";var n=a(1);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a(85),a(96),a(21),a(61),a(24);var i,r,s=n(a(36)),o=n(a(38)),l=n(a(37)),c=a(1929),u=n(a(1903)),f={components:{FileExistsConfirmationDialog:n(a(2837)).default,InputTextEditor:u.default},beforeRouteEnter:(r=(0,l.default)(s.default.mark((function t(e,a,n){return s.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,c.read)({path:e.query.path});case 3:n(),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),n(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])}))),function(t,e,a){return r.apply(this,arguments)}),api:[{command:c.read,bind:"file"}],data:function(){return{content:"",filename:""}},created:function(){this.content=this.file.text.trim(),this.filename=this.file.filename},computed:{file:function(){return this.$api.file},path:function(){return"/"===this.file.path[this.file.path.length-1]?this.file.path.slice(0,-1):this.file.path},editorMode:function(){var t=this.file.filename.split(".");return{html:"html",js:"javascript",css:"css",php:"php",pl:"perl",ini:"ini",sql:"sql",json:"json"}[(0,o.default)(t,2)[1]]||"text"}},methods:{save:(i=(0,l.default)(s.default.mark((function t(){return s.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t0=this.file.filename!==this.filename,!t.t0){t.next=5;break}return t.next=4,this.checkFileExists();case 4:t.t0=t.sent;case 5:t.t0?this.$dialog("FILE_EXISTS_CONFIRMATION_DIALOG").open():this.confirmedSave();case 7:case"end":return t.stop()}}),t,this)}))),function(){return i.apply(this,arguments)}),confirmedSave:function(){(0,c.save)({path:this.file.path,filename:this.filename,text:this.content})},checkFileExists:function(){return(0,c.checkExists)({path:"".concat(this.path,"/").concat(this.filename)})}}};e.default=f},2837:function(t,e,a){"use strict";a.r(e);var n=a(0),i=Object(n.a)({},(function(t,e){var a=e._c;return a("ui-dialog",{attrs:{id:"FILE_EXISTS_CONFIRMATION_DIALOG",theme:"danger",noCloseBtn:"",noCloseIcon:""}},[a("translate",{attrs:{slot:"title"},slot:"title"},[e._v("Confirm File Save")]),e._v(" "),a("translate",{attrs:{slot:"content","translate-params":{filename:e.props.filename}},slot:"content"},[e._v("\n        File %{ filename } already exists. Confirm overwrite?\n    ")]),e._v(" "),a("template",{slot:"buttons"},[a("ui-button",{attrs:{theme:"danger"},on:{click:e.listeners.overwrite}},[a("translate",[e._v("Yes")])],1),e._v(" "),a("ui-button",{attrs:{theme:"neutral"},on:{click:e.listeners.discard}},[a("translate",[e._v("No")])],1)],1)],2)}),[],!0,null,null,null);e.default=i.exports},3106:function(t,e,a){var n=a(3654);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a(4).default)("1dda33b7",n,!0,{})},3653:function(t,e,a){"use strict";a(3106)},3654:function(t,e,a){},3655:function(t,e){},3936:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("app-page",[a("app-page-section",[a("ui-form-element",{attrs:{underline:!1}},[a("translate",{attrs:{slot:"title"},slot:"title"},[t._v("\n                Save As\n            ")]),t._v(" "),a("input-text",{attrs:{slot:"content"},slot:"content",model:{value:t.filename,callback:function(e){t.filename=e},expression:"filename"}},[a("ui-button",{attrs:{slot:"additions:right",theme:"safe"},on:{click:t.save},slot:"additions:right"},[a("translate",[t._v("Save")])],1)],1)],1),t._v(" "),a("input-text-editor",{attrs:{mode:t.editorMode},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}},[a("template",{slot:"header"},[t._v("\n                "+t._s(t.path)+"/"+t._s(t.file.filename)+"\n            ")])],2)],1),t._v(" "),a("file-exists-confirmation-dialog",{on:{overwrite:t.confirmedSave,discard:function(e){t.$dialog("FILE_EXISTS_CONFIRMATION_DIALOG").close()}}})],1)},i=[]}}]);