(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{1731:function(t,e,n){"use strict";n.r(e);var r=n(3842),a=n(2115);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n(3211);var i=n(0),u=n(3213),s=n.n(u),l=Object(i.a)(a.default,r.a,r.b,!1,null,"2be97300",null);"function"==typeof s.a&&s()(l),e.default=l.exports},2115:function(t,e,n){"use strict";n.r(e);var r=n(2116),a=n.n(r);for(var o in r)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e.default=a.a},2116:function(t,e,n){"use strict";n(16),n(14),n(23),n(25),n(18),n(6);var r=n(1),a=n(20);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(n(36)),i=r(n(37)),u=function(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!==a(t)&&"function"!=typeof t)return{default:t};var n=f(e);if(n&&n.has(t))return n.get(t);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in t)if("default"!==i&&Object.prototype.hasOwnProperty.call(t,i)){var u=o?Object.getOwnPropertyDescriptor(t,i):null;u&&(u.get||u.set)?Object.defineProperty(r,i,u):r[i]=t[i]}r.default=t,n&&n.set(t,r);return r}(n(2872)),s=r(n(1903)),l=r(n(3210));function f(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,n=new WeakMap;return(f=function(t){return t?n:e})(t)}var c,d,p={preload:u.getFile,components:{RootAuthDialog:l.default,InputTextEditor:s.default},beforeRouteUpdate:(d=(0,i.default)(o.default.mark((function t(e,n,r){return o.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.getFile(e.query);case 2:this.text=this.data,this.$dialog("ROOT_AUTH_DIALOG").close(),r();case 5:case"end":return t.stop()}}),t,this)}))),function(t,e,n){return d.apply(this,arguments)}),data:function(){return{text:""}},api:[{command:u.getFile,bind:"data"}],computed:{data:function(){return this.$api.data.data},files:function(){return this.$api.data.files},auth:function(){return this.$api.data.auth},file:function(){return this.$route.query.file}},mounted:function(){this.text=this.data},methods:{requestAuthAndSave:function(){this.auth?this.$dialog("ROOT_AUTH_DIALOG").open():this.save()},save:(c=(0,i.default)(o.default.mark((function t(){return o.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.saveFile({file:this.file,text:this.text});case 2:t.sent&&this.$router.push({name:"admin/file-editor"});case 4:case"end":return t.stop()}}),t,this)}))),function(){return c.apply(this,arguments)})}};e.default=p},2117:function(t,e,n){"use strict";n.r(e);var r=n(2118),a=n.n(r);for(var o in r)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e.default=a.a},2118:function(t,e,n){"use strict";var r=n(1);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a,o=r(n(36)),i=r(n(37)),u=n(2872),s={data:function(){return{rootpass:""}},props:{file:String,text:String},methods:{auth:(a=(0,i.default)(o.default.mark((function t(){return o.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,u.authenticate)({file:this.file,text:this.text,rootpass:this.rootpass});case 2:t.sent&&(this.$emit("confirmSave"),this.$dialog("ROOT_AUTH_DIALOG").close());case 4:case"end":return t.stop()}}),t,this)}))),function(){return a.apply(this,arguments)})}};e.default=s},2872:function(t,e,n){"use strict";n(7),n(10),n(5),n(6),n(8),n(11);var r=n(1);Object.defineProperty(e,"__esModule",{value:!0}),e.authenticate=e.saveFile=e.getFile=void 0;var a=r(n(2)),o=r(n(78));function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){(0,a.default)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var s="/CMD_ADMIN_FILE_EDITOR",l=o.default.get({id:"FILE_DATA",url:s,schema:{file:o.default.OPTIONAL_STRING},after:function(t){return t.flow(t.moveProp({FILEDATA:"data",FILES:"files",READONLY:"readOnly",REQUIRE_ROOT_AUTH:"auth"}),t.mapProps({auth:t.convert.toAppBoolean,readOnly:t.convert.toAppBoolean,files:t.flow(t.mapValues((function(t,e){return u(u({},t),{},{file:e})})),t.toArray,t.mapArrayProps({exists:t.isEqual("1"),size:t.convert.toAppNumber})),data:t.convert.toAppText}))}});e.getFile=l;var f=o.default.post({url:s,params:{action:"save"},schema:{file:o.default.REQUIRED_STRING,text:o.default.REQUIRED_STRING}});e.saveFile=f;var c=o.default.post({url:s,params:{action:"save",authenticate:!0},schema:{rootpass:o.default.REQUIRED_STRING,file:o.default.REQUIRED_STRING,text:o.default.REQUIRED_STRING}});e.authenticate=c},2873:function(t,e,n){var r=n(3212);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(4).default)("21be3df4",r,!0,{})},3210:function(t,e,n){"use strict";n.r(e);var r=n(3993),a=n(2117);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);var i=n(0),u=Object(i.a)(a.default,r.a,r.b,!1,null,null,null);e.default=u.exports},3211:function(t,e,n){"use strict";n(2873)},3212:function(t,e,n){},3213:function(t,e){},3842:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("app-page",{attrs:{id:"file-editor"}},[t.file?n("app-page-section",[n("input-text-editor",{model:{value:t.text,callback:function(e){t.text=e},expression:"text"}},[n("template",{slot:"header"},[t._v("\n                "+t._s(t.file)+"\n            ")])],2)],1):n("app-page-section",[n("ui-r-table",t._b({attrs:{"disable-pagination":""},scopedSlots:t._u([{key:"col:file",fn:function(e){var r=e.file;return[n("ui-link",{attrs:{name:"admin/file-editor",query:{file:r}}},[t._v("\n                    "+t._s(r)+"\n                ")])]}},{key:"col:size",fn:function(e){var r=e.size;return[e.exists?[t._v("\n                    "+t._s(t._f("humanReadableSize")(r))+"\n                ")]:n("translate",[t._v("\n                    Does not exist\n                ")])]}}],null,!1,4190044763)},"ui-r-table",{rows:t.files,columns:[{id:"file",label:t.$gettext("File"),grow:!0,editable:!1},{id:"size",label:t.$gettext("Size")}],isCheckable:!1,verticalLayout:t.$_Client.isPhone},!1))],1),t._v(" "),t.file?n("ui-button",{attrs:{slot:"footer:buttons",theme:"safe"},on:{click:t.requestAuthAndSave},slot:"footer:buttons"},[n("translate",[t._v("Save")])],1):t._e(),t._v(" "),n("root-auth-dialog",t._b({on:{confirmSave:t.save,close:function(e){return t.$router.push({name:"admin/file-editor",query:{}})}}},"root-auth-dialog",{file:t.file,text:t.text},!1))],1)},a=[]},3993:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ui-dialog",{attrs:{id:"ROOT_AUTH_DIALOG",theme:"danger",noCloseBtn:"",noCloseIcon:"",noAutoClose:""},on:{"dialog:close":function(e){t.rootpass=""}}},[n("translate",{attrs:{slot:"title"},slot:"title"},[t._v("Authenticate")]),t._v(" "),n("ui-form-element",{attrs:{slot:"content",vertical:"",group:"rootAuth",validators:{required:!0}},slot:"content"},[n("translate",{attrs:{slot:"title"},slot:"title"},[t._v("This file is tagged as secure. Root password required to edit")]),t._v(" "),n("input-password",{attrs:{slot:"content",autocomplete:!1},slot:"content",model:{value:t.rootpass,callback:function(e){t.rootpass=e},expression:"rootpass"}})],1),t._v(" "),n("ui-button",{attrs:{slot:"buttons",theme:"danger",validateGroup:"rootAuth"},on:{click:t.auth},slot:"buttons"},[n("translate",[t._v("Authenticate")])],1),t._v(" "),n("ui-button",{attrs:{slot:"buttons",theme:"neutral"},on:{click:function(e){return t.$emit("close")}},slot:"buttons"},[n("translate",[t._v("Back")])],1)],1)},a=[]}}]);