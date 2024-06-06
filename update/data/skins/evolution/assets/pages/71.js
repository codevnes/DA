(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{1763:function(e,t,a){"use strict";a.r(t);var r=a(3872),n=a(2238);for(var s in n)["default"].indexOf(s)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(s);a(3311);var o=a(0),l=a(3313),u=a.n(l),i=Object(o.a)(n.default,r.a,r.b,!1,null,"3f6e1f63",null);"function"==typeof u.a&&u()(i),t.default=i.exports},1914:function(e,t,a){"use strict";a(7),a(10),a(6),a(8),a(11);var r=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.updateCron=t.getCron=t.restoreBackup=t.getRestoreFiles=t.scheduleBackup=t.getRestoreOptions=t.getScheduleOptions=t.getSettings=t.updateSettings=t.deleteCrons=t.duplicateCrons=t.getEncryptionStatus=t.hasResellerCrons=t.getCrons=void 0;var n=r(a(2));a(85),a(21),a(40),a(50),a(57),a(27),a(5);var s=r(a(78));function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){(0,n.default)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var u="/CMD_USER_BACKUP",i=s.default.get({id:"USER_BACKUPS",url:u,after:function(e){return e.flow((function(e){return{rows:e.crons,location:e.files_location}}),e.processTableInfo("rows"),e.mapProps({rows:e.flow(e.toArray,e.mapArrayProps({where:e.flow(e.moveProp("encryption_password","encrypted"),e.mapProps({encrypted:e.flow(e.setDefault("0"),e.isEqual("1")),path:function(e){return e.replace("<span class='green_lock'>&#128274;</span>","").trim()}}))}))}))}});t.getCrons=i;var p=s.default.get({id:"HAS_USER_BACKUPS",url:u,response:!1,mapResponse:function(e){return 0!==e.crons.length}});t.hasResellerCrons=p;var c=s.default.get({id:"BACKUP_ENCRYPTION_STATUS",url:u,after:function(e){return e.flow(e.project({enabled:"settings.allow_backup_encryption",password:"settings.encryption_password"}),e.mapProp("enabled",e.convert.toAppBoolean))}});t.getEncryptionStatus=c;var f=s.default.select({url:u,params:{duplicate:!0}});t.duplicateCrons=f;var d=s.default.select({url:u,params:{delete:!0}});t.deleteCrons=d;var _=s.default.post({url:u,params:{action:"setting"},schema:{message:s.default.REQUIRED_BOOL,local_ns:s.default.REQUIRED_BOOL,restore_spf:s.default.REQUIRED_BOOL}});t.updateSettings=_;var v=s.default.get({id:"USER_BACKUP_SETTINGS",url:u,after:function(e){return e.flow(e.project({local_ns:"settings.local_ns",message:"settings.message",restore_spf:"settings.restore_spf"}),e.mapValues(e.convert.toAppBoolean))}});t.getSettings=v;var m=s.default.get({id:"USER_BACKUP_SCHEDULE_OPTIONS",url:u,after:function(e){return e.flow(e.project({settings:"settings","settings.append":"append_to_path",where:"where",users:"users",location:"files_location"}),e.mapProps({users:e.flow(e.deleteProp("info"),e.toArray,e.mapArray(e.getProp("user"))),settings:e.flow(e.project({ip:"ftp_ip",password:"ftp_password",path:"ftp_path",port:"ftp_port",secure:"ftp_secure",username:"ftp_username",append:"append"}),e.mapProps({secure:e.convert.toAppBoolean,append:function(e){var t=Object.values(e),a=t.find((function(e){return e.selected})),r=t.reduce((function(e,t){return l(l({},e),{},(0,n.default)({},t.value,t.text))}),{});return{value:a.value,options:r}}}))}))}});t.getScheduleOptions=m;var O=s.default.get({id:"USER_BACKUP_RESTORE_OPTIONS",url:u,after:function(e){return e.flow(e.project({settings:"settings",where:"where",location:"files_location",ips:"ip_list",files:"files"}),e.mapProps({files:e.flow(e.deleteProp("info"),e.toArray),settings:e.flow(e.getProps(["ftp_ip","ftp_password","ftp_path","ftp_port","ftp_secure","ftp_username"]),e.mapProps({ftp_secure:e.convert.toAppBoolean})),ips:function(e){var t=Object.values(e),a=t.find((function(e){return e.selected})),r=t.reduce((function(e,t){return l(l({},e),{},(0,n.default)({},t.value,t.text))}),{});return{value:a.value,options:r}}}))}});t.getRestoreOptions=O;var R=s.default.post({url:u,params:{action:"create",form_version:"3"},schema:{who:s.default.REQUIRED_STRING,select:{type:Array,required:!1},skip_suspended:s.default.OPTIONAL_BOOL,when:s.default.REQUIRED_STRING,minute:s.default.OPTIONAL_STRING,hour:s.default.OPTIONAL_STRING,dayofmonth:s.default.OPTIONAL_STRING,month:s.default.OPTIONAL_STRING,dayofweek:s.default.OPTIONAL_STRING,where:s.default.REQUIRED_STRING,ftp_ip:s.default.OPTIONAL_STRING,ftp_username:s.default.OPTIONAL_STRING,ftp_password:s.default.OPTIONAL_STRING,ftp_path:s.default.OPTIONAL_STRING,ftp_port:s.default.OPTIONAL_STRING,ftp_secure:s.default.OPTIONAL_STRING,append_to_path:s.default.OPTIONAL_STRING,custom_append:s.default.OPTIONAL_STRING,encryption_password:s.default.OPTIONAL_STRING}});t.scheduleBackup=R;var I=s.default.get({url:u,id:"USER_BACKUP_RESTORE_FILES",params:{action:"update_files"},schema:{where:s.default.REQUIRED_STRING,ftp_ip:s.default.OPTIONAL_STRING,ftp_username:s.default.OPTIONAL_STRING,ftp_password:s.default.OPTIONAL_STRING,ftp_path:s.default.OPTIONAL_STRING,ftp_port:s.default.OPTIONAL_STRING,ftp_secure:s.default.OPTIONAL_STRING},after:function(e){return e.flow(e.getProp("files"),e.deleteProp("info"),e.toArray)}});t.getRestoreFiles=I;var h=s.default.post({url:u,params:{action:"restore"},schema:{where:s.default.REQUIRED_STRING,ftp_ip:s.default.OPTIONAL_STRING,ftp_username:s.default.OPTIONAL_STRING,ftp_password:s.default.OPTIONAL_STRING,ftp_path:s.default.OPTIONAL_STRING,ftp_port:s.default.OPTIONAL_STRING,ftp_secure:s.default.OPTIONAL_STRING,ip_choice:s.default.REQUIRED_STRING,ip:s.default.OPTIONAL_STRING,select:{type:Array,required:!0},encryption_password:s.default.OPTIONAL_STRING}});t.restoreBackup=h;var S=s.default.post({url:"/CMD_USER_BACKUP_MODIFY",id:"USER_BACKUP_CRON",schema:{id:s.default.REQUIRED_STRING},notifySuccess:!1,notifyError:!0,after:function(e){return e.flow(e.moveProp({append_to_path:"append","settings.where":"where"}),e.mapProps({settings:e.mapProp("ftp_secure",e.convert.toAppBoolean),who:e.mapProps({skip_suspended:e.convert.toAppBoolean,users:e.flow(e.deleteProp("info"),e.toArray,e.mapArray(e.getProp("user"))),select:e.feedWith(1,e.flow(e.getProp("users"),e.deleteProp("info"),e.filter(e.flow(e.getProp("checkbox"),e.isEqual("checked"))),e.mapValues(e.getProp("user")),e.toArray))}),append:e.flow(e.mapProps({options:e.feedWith(1,e.transformObject((function(e){var t=e.value,a=e.text;return(0,n.default)({},t,a)}))),value:e.feedWith(1,e.flow(e.find(e.getProp("selected")),e.getProp("value")))}),e.getProps(["value","options"])),custom_append:e.feedWith(1,e.getProp("append.custom_append"))}))}});t.getCron=S;var g=s.default.post({url:u,params:{action:"modify",when:"cron",form_version:"3"},schema:{id:s.default.REQUIRED_STRING,who:s.default.REQUIRED_STRING,select:{type:Array,required:!1},skip_suspended:s.default.OPTIONAL_BOOL,minute:s.default.REQUIRED_STRING,hour:s.default.REQUIRED_STRING,dayofmonth:s.default.REQUIRED_STRING,month:s.default.REQUIRED_STRING,dayofweek:s.default.REQUIRED_STRING,where:s.default.REQUIRED_STRING,ftp_ip:s.default.OPTIONAL_STRING,ftp_username:s.default.OPTIONAL_STRING,ftp_password:s.default.OPTIONAL_STRING,ftp_path:s.default.OPTIONAL_STRING,ftp_port:s.default.OPTIONAL_STRING,ftp_secure:s.default.OPTIONAL_STRING,append_to_path:s.default.REQUIRED_STRING,custom_append:s.default.OPTIONAL_STRING}});t.updateCron=g},2238:function(e,t,a){"use strict";a.r(t);var r=a(2239),n=a.n(r);for(var s in r)["default"].indexOf(s)<0&&function(e){a.d(t,e,(function(){return r[e]}))}(s);t.default=n.a},2239:function(e,t,a){"use strict";var r=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(1914),s=r(a(3310)),o={preload:n.getCrons,commands:{getCrons:n.getCrons},api:[{command:n.getCrons,bind:"crons"}],components:{SettingsDialog:s.default},data:function(){return{select:[]}},methods:{duplicateCrons:function(){(0,n.duplicateCrons)({select:this.select}).then(this.$reloadApiTable)},deleteCrons:function(){(0,n.deleteCrons)({select:this.select}).then(this.$reloadApiTable)}}};t.default=o},2240:function(e,t,a){"use strict";a.r(t);var r=a(2241),n=a.n(r);for(var s in r)["default"].indexOf(s)<0&&function(e){a.d(t,e,(function(){return r[e]}))}(s);t.default=n.a},2241:function(e,t,a){"use strict";var r=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(36));a(49);var s,o=r(a(37)),l=a(1914),u={data:function(){return{message:!1,local_ns:!1,restore_spf:!1}},created:(s=(0,o.default)(n.default.mark((function e(){return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=Object,e.t1=this,e.next=4,(0,l.getSettings)();case 4:e.t2=e.sent,e.t0.assign.call(e.t0,e.t1,e.t2);case 6:case"end":return e.stop()}}),e,this)}))),function(){return s.apply(this,arguments)}),methods:{saveSettings:function(){(0,l.updateSettings)(this.$data)}}};t.default=u},3028:function(e,t,a){var r=a(3312);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,a(4).default)("65e4201a",r,!0,{})},3310:function(e,t,a){"use strict";a.r(t);var r=a(4016),n=a(2240);for(var s in n)["default"].indexOf(s)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(s);var o=a(0),l=Object(o.a)(n.default,r.a,r.b,!1,null,null,null);t.default=l.exports},3311:function(e,t,a){"use strict";a(3028)},3312:function(e,t,a){},3313:function(e,t){},3872:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return n}));var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("app-page",{attrs:{id:"reseller-user-backups",actions:[{name:"reseller/backups/schedule",label:e.$gettext("Schedule"),icon:"#plus-fill"},{name:"reseller/backups/restore",label:e.$gettext("Restore"),icon:"#extract"}]}},[a("template",{slot:"header:buttons"},[a("ui-button-link",{attrs:{theme:"safe",name:"reseller/backups/schedule"}},[a("translate",[e._v("Schedule Backup")])],1),e._v(" "),a("ui-button-link",{attrs:{theme:"primary",name:"reseller/backups/restore"}},[a("translate",[e._v("Restore Backup")])],1)],1),e._v(" "),a("app-page-section",[a("ui-api-table",e._b({on:{"action:duplicate":e.duplicateCrons,"action:del":function(t){e.$dialog("DELETE_ITEMS_DIALOG").open()}},scopedSlots:e._u([{key:"col:when",fn:function(t){var r=t.when;return[a("div",{directives:[{name:"flex",rawName:"v-flex",value:{dir:"column"},expression:"{ dir: 'column' }"}]},[a("translate",{attrs:{"translate-params":r}},[e._v("\n                        Minute: %{minute}\n                    ")]),e._v(" "),a("translate",{attrs:{"translate-params":r}},[e._v("\n                        Hour: %{hour}\n                    ")]),e._v(" "),a("translate",{attrs:{"translate-params":r}},[e._v("\n                        Day of Month: %{dayofmonth}\n                    ")]),e._v(" "),a("translate",{attrs:{"translate-params":r}},[e._v("\n                        Month: %{month}\n                    ")]),e._v(" "),a("translate",{attrs:{"translate-params":r}},[e._v("\n                        Day of Week: %{dayofweek}\n                    ")])],1)]}},{key:"col:who",fn:function(t){var r=t.who;return["all"===r.who?a("translate",[e._v("\n                    All Users\n                ")]):"selected"===r.who?[a("translate",{attrs:{tag:"strong"}},[e._v("\n                        Selected Users:\n                    ")]),e._v(" "),e._l(r.select,(function(t){return a("li",{key:t,domProps:{textContent:e._s(t)}})}))]:[a("translate",{attrs:{tag:"strong"}},[e._v("\n                        All Users Except:\n                    ")]),e._v(" "),e._l(r.select,(function(t){return a("li",{key:t,domProps:{textContent:e._s(t)}})}))],e._v(" "),"yes"===r.skip_suspended?a("ui-tooltip",{attrs:{theme:"danger",icon:"warning"}},[a("translate",[e._v("Skip Suspended")])],1):e._e()]}},{key:"col:where",fn:function(t){var r=t.where,n=r.encrypted,s=r.path;return[n?a("ui-tooltip",{attrs:{theme:"safe",icon:"locked-padlock"}},[a("translate",[e._v("Encrypted")])],1):e._e(),e._v(" "),s?[e._v("\n                    "+e._s(s)+"\n                ")]:[e._v("\n                    "+e._s(e.$api.crons.location)+"\n                ")]]}},{key:"row:actions",fn:function(t){var r=t.id;return a("ui-button-link",{attrs:{name:"reseller/backups/modify",params:{id:r},icon:"pencil",title:e.$gettext("Edit")}})}}]),model:{value:e.select,callback:function(t){e.select=t},expression:"select"}},"ui-api-table",{command:e.$commands.getCrons,rowID:"id",columns:{when:e.$gettext("When"),who:e.$gettext("Who"),where:e.$gettext("Where")},actions:{duplicate:e.$gettext("Duplicate"),del:e.$gettext("Delete")},equalWidthLayout:!0,editable:!1,verticalLayout:e.$_Client.isPhone},!1))],1),e._v(" "),a("ui-link",{attrs:{slot:"bottom:links",bullet:""},on:{click:function(t){e.$dialog("BACKUP_RESTORE_SETTINGS").open()}},slot:"bottom:links"},[a("translate",[e._v("Backup/Restore Settings")])],1),e._v(" "),a("ui-dialog-delete-items",{attrs:{subject:e.$ngettext("scheduled backup","scheduled backups",e.select.length)},on:{"click:confirm":e.deleteCrons}}),e._v(" "),a("settings-dialog")],2)},n=[]},4016:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return n}));var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ui-dialog",{attrs:{id:"BACKUP_RESTORE_SETTINGS"}},[a("translate",{attrs:{slot:"title"},slot:"title"},[e._v("\n        Backup/Restore Settings\n    ")]),e._v(" "),a("template",{slot:"content"},[a("ui-form-element",[a("input-checkbox",{attrs:{slot:"content"},slot:"content",model:{value:e.message,callback:function(t){e.message=t},expression:"message"}},[a("translate",[e._v("Send a message when a backup has finished.")])],1)],1),e._v(" "),a("ui-form-element",[a("div",{directives:[{name:"flex",rawName:"v-flex",value:{dir:"column"},expression:"{ dir:'column' }"}],attrs:{slot:"content"},slot:"content"},[a("input-radio",{attrs:{value:!0},model:{value:e.local_ns,callback:function(t){e.local_ns=t},expression:"local_ns"}},[a("translate",[e._v("\n                        Restore with local NameServers.\n                    ")])],1),e._v(" "),a("input-radio",{attrs:{value:!1},model:{value:e.local_ns,callback:function(t){e.local_ns=t},expression:"local_ns"}},[a("translate",[e._v("\n                        Use NS values from backup.\n                    ")])],1)],1)]),e._v(" "),a("ui-form-element",[a("div",{directives:[{name:"flex",rawName:"v-flex",value:{dir:"column"},expression:"{ dir:'column' }"}],attrs:{slot:"content"},slot:"content"},[a("input-radio",{attrs:{value:!0},model:{value:e.restore_spf,callback:function(t){e.restore_spf=t},expression:"restore_spf"}},[a("translate",[e._v("\n                        Restore with SPF values from backup.\n                    ")])],1),e._v(" "),a("input-radio",{attrs:{value:!1},model:{value:e.restore_spf,callback:function(t){e.restore_spf=t},expression:"restore_spf"}},[a("translate",[e._v("\n                        Use local SPF values.\n                    ")])],1)],1)])],1),e._v(" "),a("ui-button",{attrs:{slot:"buttons",theme:"safe"},on:{click:e.saveSettings},slot:"buttons"},[a("translate",[e._v("Save")])],1)],2)},n=[]}}]);