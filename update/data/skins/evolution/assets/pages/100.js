(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{1789:function(t,e,a){"use strict";a.r(e);var s=a(3898),n=a(2359);for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a(3408);var i=a(0),o=a(3410),u=a.n(o),c=Object(i.a)(n.default,s.a,s.b,!1,null,null,null);"function"==typeof u.a&&u()(c),e.default=c.exports},2358:function(t,e,a){"use strict";a(7),a(10),a(5),a(6),a(8),a(11);var s=a(1);Object.defineProperty(e,"__esModule",{value:!0}),e.restoreBackup=e.getBackup=e.createBackup=e.getBackups=void 0;var n=s(a(2)),r=s(a(78));function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){(0,n.default)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var u={url:"/CMD_SITE_BACKUP",domain:!0},c=r.default.get(o(o({},u),{},{id:"SITE_BACKUPS",domain:!0,response:[]}));e.getBackups=c;var l=r.default.select(o(o({},u),{},{params:{action:"backup",form_version:"4"}}));e.createBackup=l;var p=r.default.post(o(o({id:"SITE_BACKUP"},u),{},{params:{action:"view"},schema:{file:r.default.REQUIRED_STRING},response:[],notifySuccess:!1}));e.getBackup=p;var f=r.default.select(o(o({},u),{},{params:{action:"restore",form_version:"3"},schema:{file:r.default.REQUIRED_STRING}}));e.restoreBackup=f},2359:function(t,e,a){"use strict";a.r(e);var s=a(2360),n=a.n(s);for(var r in s)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return s[t]}))}(r);e.default=n.a},2360:function(t,e,a){"use strict";a(16),a(14),a(23),a(25),a(18),a(6);var s=a(1),n=a(20);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=s(a(36)),i=s(a(37));a(13),a(15);var o=l(a(2358)),u=l(a(9));function c(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,a=new WeakMap;return(c=function(t){return t?a:e})(t)}function l(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!==n(t)&&"function"!=typeof t)return{default:t};var a=c(e);if(a&&a.has(t))return a.get(t);var s={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in t)if("default"!==i&&Object.prototype.hasOwnProperty.call(t,i)){var o=r?Object.getOwnPropertyDescriptor(t,i):null;o&&(o.get||o.set)?Object.defineProperty(s,i,o):s[i]=t[i]}return s.default=t,a&&a.set(t,s),s}var p,f={preload:o.getBackups,data:function(){return{backup:"",options:[]}},api:[{command:o.getBackups,bind:"backups"},{command:o.getBackup,bind:"backup"}],computed:{hasOptions:function(){return this.$api.backup.length>0},selectOptions:function(){var t=this,e={};return e.website={label:this.$gettext("Website Data"),entries:{domain:this.$gettext("Domains Directory: Backs up all user files for all domains"),subdomain:this.$gettext("Subdomains Lists: Backs up the list of subdomains for each domain")}},e.email={label:this.$gettext("E-mail"),entries:{email:this.$gettext("E-mail Accounts List for all domains (names and passwords)"),email_data:this.$gettext("E-mail Data: Includes the messages from the Inbox, IMAP Folders, and webmail data."),emailsettings:this.$gettext("E-mail Settings: Includes the filters and the catchall address."),forwarder:this.$gettext("Forwarders: Includes all forwarding addresses."),autoresponder:this.$gettext("Autoresponders: Includes all autoresponders and messages."),vacation:this.$gettext("Vacation Messages: Includes all vacation messages and times."),list:this.$gettext("Mailing Lists: Includes the list, digest-list and archives.")}},e.ftp={label:this.$gettext("FTP"),entries:{ftp:this.$gettext("FTP Accounts"),ftpsettings:this.$gettext("FTP Settings")}},e.database={label:this.$gettext("Databases"),entries:{database:this.$gettext("Database Settings: Backs up all DB Users and DB Settings"),database_data:this.$gettext("Database Data")}},u.map(u.evolve({entries:u.pickBy((function(e,a){return t.$api.backup.includes(a)}))}),e)}},watch:{backup:(p=(0,i.default)(r.default.mark((function t(e){return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=4;break}return t.next=3,o.getBackup({file:e});case 3:this.options=t.sent;case 4:case"end":return t.stop()}}),t,this)}))),function(t){return p.apply(this,arguments)})},methods:{restoreBackup:function(){o.restoreBackup({file:this.backup,select:this.options})}}};e.default=f},3049:function(t,e,a){var s=a(3409);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,a(4).default)("af345b5e",s,!0,{})},3408:function(t,e,a){"use strict";a(3049)},3409:function(t,e,a){},3410:function(t,e){},3898:function(t,e,a){"use strict";a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return n}));var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("app-page",[a("app-page-section",[t.$api.backups.length?a("ui-form-element",[a("translate",{attrs:{slot:"title"},slot:"title"},[t._v("\n                Backup\n            ")]),t._v(" "),a("input-select",{attrs:{slot:"content",options:t.$api.backups},slot:"content",model:{value:t.backup,callback:function(e){t.backup=e},expression:"backup"}})],1):[a("translate",{attrs:{tag:"p"}},[t._v("\n                Sorry, it seems that there are no backups created yet. Would you like to create one?\n            ")]),t._v(" "),a("ui-button-link",{directives:[{name:"margin",rawName:"v-margin",value:[1,0],expression:"[1, 0]"}],attrs:{name:"user/backup",theme:"safe"}},[a("translate",[t._v("Create Backup")])],1)]],2),t._v(" "),t.hasOptions?a("app-page-section",[a("translate",{attrs:{slot:"section:title"},slot:"section:title"},[t._v("\n            Restore Options\n        ")]),t._v(" "),a("input-select-multiple",{staticClass:"frameless-input-multiple",attrs:{options:t.selectOptions,"max-items-visible":1/0,"hide-header":""},model:{value:t.options,callback:function(e){t.options=e},expression:"options"}})],1):t._e(),t._v(" "),a("ui-link",{attrs:{slot:"bottom:links",bullet:"",href:"/CMD_FILE_MANAGER?path=/backups",target:"_blank"},slot:"bottom:links"},[a("translate",[t._v("View current backups")])],1),t._v(" "),a("template",{slot:"footer:buttons"},[t.$api.backups.length?a("ui-button",{attrs:{theme:"safe",disabled:!t.options.length},on:{click:t.restoreBackup}},[a("translate",[t._v("Restore")])],1):t._e()],1)],2)},n=[]}}]);