(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{1793:function(t,e,n){"use strict";n.r(e);var o=n(3902),a=n(2368);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);var s=n(0),i=n(3418),l=n.n(i),u=Object(s.a)(a.default,o.a,o.b,!1,null,null,null);"function"==typeof l.a&&l()(u),e.default=u.exports},2367:function(t,e,n){"use strict";n.r(e),n.d(e,"getCronjobs",(function(){return i})),n.d(e,"deleteCronjobs",(function(){return l})),n.d(e,"createCronjob",(function(){return u})),n.d(e,"updateCronjobReboot",(function(){return p})),n.d(e,"updateCronjob",(function(){return d})),n.d(e,"saveEmail",(function(){return m})),n.d(e,"getPhpBinPath",(function(){return f}));var o=n(78),a=n.n(o),r=n(9),s="/CMD_CRON_JOBS",i=a.a.get({url:s,id:"CRON_JOBS",params:{ipp:"99999",page:"1"},mapResponse:{email:r.prop("MAILTO"),rows:r.pipe(r.prop("crons"),r.omit(["info"]),r.values)}}),l=a.a.select({url:s,params:{action:"delete",delete:!0}}),u=a.a.post({url:s,params:{action:"create"},schema:{reboot:a.a.REQUIRED_BOOL,minute:a.a.REQUIRED_STRING,hour:a.a.REQUIRED_STRING,dayofmonth:a.a.REQUIRED_STRING,month:a.a.REQUIRED_STRING,dayofweek:a.a.REQUIRED_STRING}}),c=a.a.post({url:s,params:{save:!0},schema:{id:a.a.REQUIRED_STRING,command:a.a.REQUIRED_STRING}}),p=c.extend({url:s,params:{reboot:!0}}),d=c.extend({url:s,schema:{minute:a.a.REQUIRED_STRING,hour:a.a.REQUIRED_STRING,dayofmonth:a.a.REQUIRED_STRING,month:a.a.REQUIRED_STRING,dayofweek:a.a.REQUIRED_STRING}}),m=a.a.post({url:s,params:{action:"saveemail"},schema:{email:a.a.REQUIRED_STRING}}),f=a.a.get({url:s,id:"CRON_PHP_BIN_PATH",response:!1,mapResponse:function(t){return"1"===t.set_php_bin_path_in_crons}})},2368:function(t,e,n){"use strict";n.r(e);var o=n(2369),a=n.n(o);for(var r in o)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e.default=a.a},2369:function(t,e,n){"use strict";n(16),n(14),n(23),n(25),n(18),n(6);var o=n(1),a=n(20);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(n(36)),s=o(n(37));n(13),n(15);var i=n(2367),l=n(75),u=function(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!==a(t)&&"function"!=typeof t)return{default:t};var n=c(e);if(n&&n.has(t))return n.get(t);var o={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in t)if("default"!==s&&Object.prototype.hasOwnProperty.call(t,s)){var i=r?Object.getOwnPropertyDescriptor(t,s):null;i&&(i.get||i.set)?Object.defineProperty(o,s,i):o[s]=t[s]}o.default=t,n&&n.set(t,o);return o}(n(9));function c(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,n=new WeakMap;return(c=function(t){return t?n:e})(t)}var p,d={preload:i.getPhpBinPath,api:[{command:i.getPhpBinPath,bind:"phpBinPath"}],data:function(){return{minute:"*",hour:"*",dayOfMonth:"*",month:"*",dayOfWeek:"*",command:"",reboot:!1}},computed:{currentTime:function(){var t=u.pipe(l.toAppDate,this.$options.filters.date),e=this.$state.app.tokens,n=e.TIMESTAMP,o=void 0!==n&&n,a=e.TIME;return o?t(o):a},emailPrevented:function(){return this.command.includes(" >/dev/null 2>&1")}},created:function(){this.command=this.$state.app.tokens.HOME_DIR},methods:{createCronJob:(p=(0,s.default)(r.default.mark((function t(){return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,i.createCronjob)({reboot:this.reboot,minute:this.minute,hour:this.hour,dayofmonth:this.dayOfMonth,month:this.month,dayofweek:this.dayOfWeek,command:this.command});case 2:t.sent&&this.$router.back();case 4:case"end":return t.stop()}}),t,this)}))),function(){return p.apply(this,arguments)}),preventEmail:function(){this.command="".concat(this.command," >/dev/null 2>&1")}}};e.default=d},3418:function(t,e){},3902:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return a}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("app-page",[n("app-page-section",[n("ui-form-element",[n("span",{attrs:{slot:"title"},slot:"title"}),t._v(" "),n("input-checkbox",{attrs:{slot:"content"},slot:"content",model:{value:t.reboot,callback:function(e){t.reboot=e},expression:"reboot"}},[n("translate",[t._v("Run on @reboot")])],1)],1)],1),t._v(" "),t.reboot?t._e():n("app-page-section",[n("ui-form-element",[n("translate",{attrs:{slot:"title"},slot:"title"},[t._v("\n                Current Time\n            ")]),t._v(" "),n("input-text",{attrs:{slot:"content",disabled:"disabled",value:t.currentTime},slot:"content"})],1),t._v(" "),n("ui-form-element",{attrs:{group:"createCronJob",validators:{required:!0}}},[n("translate",{attrs:{slot:"title"},slot:"title"},[t._v("\n                Minute\n            ")]),t._v(" "),n("span",{attrs:{slot:"tooltip"},slot:"tooltip"},[t._v("0–59")]),t._v(" "),n("input-text",{attrs:{slot:"content"},slot:"content",model:{value:t.minute,callback:function(e){t.minute=e},expression:"minute"}})],1),t._v(" "),n("ui-form-element",{attrs:{group:"createCronJob",validators:{required:!0}}},[n("translate",{attrs:{slot:"title"},slot:"title"},[t._v("\n                Hour\n            ")]),t._v(" "),n("span",{attrs:{slot:"tooltip"},slot:"tooltip"},[t._v("0–23")]),t._v(" "),n("input-text",{attrs:{slot:"content"},slot:"content",model:{value:t.hour,callback:function(e){t.hour=e},expression:"hour"}})],1),t._v(" "),n("ui-form-element",{attrs:{group:"createCronJob",validators:{required:!0}}},[n("translate",{attrs:{slot:"title"},slot:"title"},[t._v("\n                Day of Month\n            ")]),t._v(" "),n("span",{attrs:{slot:"tooltip"},slot:"tooltip"},[t._v("1–31")]),t._v(" "),n("input-text",{attrs:{slot:"content"},slot:"content",model:{value:t.dayOfMonth,callback:function(e){t.dayOfMonth=e},expression:"dayOfMonth"}})],1),t._v(" "),n("ui-form-element",{attrs:{group:"createCronJob",validators:{required:!0}}},[n("translate",{attrs:{slot:"title"},slot:"title"},[t._v("\n                Month\n            ")]),t._v(" "),n("span",{attrs:{slot:"tooltip"},slot:"tooltip"},[t._v("1–12")]),t._v(" "),n("input-text",{attrs:{slot:"content"},slot:"content",model:{value:t.month,callback:function(e){t.month=e},expression:"month"}})],1),t._v(" "),n("ui-form-element",[n("translate",{attrs:{slot:"title"},slot:"title"},[t._v("\n                Day of Week\n            ")]),t._v(" "),n("translate",{attrs:{slot:"tooltip"},slot:"tooltip"},[t._v("\n                0–7; 0, 7 = Sunday\n            ")]),t._v(" "),n("input-text",{attrs:{slot:"content"},slot:"content",model:{value:t.dayOfWeek,callback:function(e){t.dayOfWeek=e},expression:"dayOfWeek"}})],1)],1),t._v(" "),n("app-page-section",[n("ui-form-element",{attrs:{group:"createCronJob",validators:{required:!0}},scopedSlots:t._u([{key:"content",fn:function(){return[n("div",{directives:[{name:"flex",rawName:"v-flex",value:{dir:"column"},expression:"{ dir: 'column' }"}]},[n("input-textarea",{model:{value:t.command,callback:function(e){t.command=e},expression:"command"}})],1)]},proxy:!0}])},[n("translate",{attrs:{slot:"title"},slot:"title"},[t._v("\n                Command\n            ")])],1)],1),t._v(" "),n("div",{directives:[{name:"flex",rawName:"v-flex",value:{dir:"column"},expression:"{ dir: 'column'}"}],attrs:{slot:"help:content"},slot:"help:content"},[n("translate",[t._v("Valid Cron time values are the numbers indicated and *.")]),t._v(" "),n("translate",[t._v("You can specify exact times using commas to separate them. e.g. 1,2,3 (minutes 1,2 and 3) ")]),t._v(" "),n("translate",[t._v("You can specify spans using a dash. e.g. 5-7 (minutes 5 to 7) ")]),t._v(" "),n("translate",[t._v("You can specify intervals using a star and a forward slash. e.g. */2 (every 2nd minute) ")]),t._v(" "),n("translate",[t._v("You can combine them to create a more precise schedule. e.g. 1,5,11-15,30-59/2 (minutes 1, 5, 11 to 15 and every 2nd minute between 30 and 59) ")]),t._v(" "),n("translate",[t._v("Note that there are no spaces")]),t._v(" "),n("br"),t._v(" "),n("translate",{staticClass:"txt:bold"},[t._v("\n            Sample Cron commands:\n        ")]),t._v(" "),n("ui-pre",{attrs:{"content-lines":[(t.$api.phpBinPath?"":"/usr/local/bin/")+"php /home/admin/domains/domain.com/public_html/script.php","/usr/local/bin/curl --silent http://www.domain.com/cron.php > /dev/null","/usr/bin/wget -O /dev/null http://www.domain.com/cron.php"]}})],1),t._v(" "),n("ui-button",{key:"preventButton",attrs:{slot:"footer:buttons",disabled:t.emailPrevented,theme:"safe",size:"big"},on:{click:t.preventEmail},slot:"footer:buttons"},[n("translate",[t._v("Prevent E-mail")])],1),t._v(" "),n("ui-button",{attrs:{slot:"footer:buttons",theme:"safe","validate-group":"createCronJob"},on:{click:t.createCronJob},slot:"footer:buttons"},[n("translate",[t._v("Create")])],1)],1)},a=[]}}]);