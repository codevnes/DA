(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{1752:function(e,t,n){"use strict";n.r(t);var s=n(3863),r=n(2189);for(var a in r)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(a);var o=n(0),i=n(3278),u=n.n(i),l=Object(o.a)(r.default,s.a,s.b,!1,null,null,null);"function"==typeof u.a&&u()(l),t.default=l.exports},1906:function(e,t,n){"use strict";n.r(t);var s=n(1907),r=n.n(s);for(var a in s)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return s[e]}))}(a);t.default=r.a},1907:function(e,t,n){"use strict";n(16),n(14),n(23),n(25),n(18),n(6);var s=n(20);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(17),n(7);var r=n(12),a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==s(e)&&"function"!=typeof e)return{default:e};var n=o(t);if(n&&n.has(e))return n.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var u=a?Object.getOwnPropertyDescriptor(e,i):null;u&&(u.get||u.set)?Object.defineProperty(r,i,u):r[i]=e[i]}r.default=e,n&&n.set(e,r);return r}(n(9));function o(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(o=function(e){return e?n:t})(e)}var i={props:{domains:{type:Object,required:!0,default:function(){return{}}}},data:function(){return{showAll:!1}},computed:{showDomainLimit:(0,r.options)("tables/userDomainsLimit"),showPointers:function(){return this.$state.app.tokens.SHOW_POINTERS_IN_LIST||"1"},shownDomainNumber:function(){return Number(this.showDomainLimit)},showExpandButton:function(){return Object.keys(this.domains).length>this.shownDomainNumber},showAllDomains:function(){return this.showAll||Object.keys(this.domains).length===this.shownDomainNumber+1},shownDomains:function(){if(this.showAllDomains)return this.domains;var e=a.slice(0,this.shownDomainNumber,a.keys(this.domains));return a.pick(e,this.domains)}}};t.default=i},1926:function(e,t,n){"use strict";var s=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.getUsersCountPerReseller=t.saveComments=t.createAdmin=t.deleteUsers=t.unsuspendUsers=t.suspendUsers=void 0;var r=s(n(78)),a=r.default.post({url:"/CMD_SELECT_USERS",notifySuccess:!0,params:{location:"CMD_ALL_USER_SHOW"},schema:{select:r.default.ROWS},blocking:!0}),o=a.extend({params:{dosuspend:!0},schema:{reason:r.default.REQUIRED_STRING},blocking:!0});t.suspendUsers=o;var i=a.extend({params:{dounsuspend:!0},blocking:!0});t.unsuspendUsers=i;var u=a.extend({params:{delete:!0,confirmed:!0},schema:{leave_dns:r.default.OPTIONAL_BOOL},blocking:!0});t.deleteUsers=u;var l=r.default.post({url:"/CMD_ACCOUNT_ADMIN",params:{action:"create"},schema:{username:r.default.REQUIRED_STRING,email:r.default.REQUIRED_STRING,passwd:r.default.REQUIRED_STRING,passwd2:r.default.REQUIRED_STRING,notify:r.default.REQUIRED_BOOL}});t.createAdmin=l;var c=r.default.post({url:"/CMD_COMMENTS",params:{location:"CMD_SHOW_RESELLER"},schema:{user:r.default.REQUIRED_STRING,comments:r.default.REQUIRED_STRING}});t.saveComments=c;var d=r.default.post({url:"/CMD_MOVE_USERS",id:"USERS_COUNT_PER_RESELLER",response:{},after:function(e){return e.flow(e.getProp("data_list"),e.mapValues((function(e){return e.length})))}});t.getUsersCountPerReseller=d},1937:function(e,t,n){"use strict";n.r(t);var s=n(2026),r=n(1906);for(var a in r)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(a);n(2013);var o=n(0),i=Object(o.a)(r.default,s.a,s.b,!1,null,null,null);t.default=i.exports},1938:function(e,t,n){var s=n(2014);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);(0,n(4).default)("1ddbfbc9",s,!0,{})},1993:function(e,t,n){"use strict";n(7),n(10),n(6),n(8),n(11);var s=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.getAdmins=t.getUsers=void 0,n(34),n(21),n(61),n(85),n(17),n(55),n(5),n(24);var r=s(n(2)),a=s(n(38)),o=s(n(78));function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){(0,r.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l=o.default.get({id:"ALL_USERS",url:"/CMD_ALL_USER_SHOW",pagination:!0,params:{bytes:!0},after:function(e){return e.flow(e.wrap("users"),e.moveProp({"users.reasons":"options.reasons","users.add_leave_dns":"options.add_leave_dns","users.remote_server":"options.remote_servers","users.RESULT":"options.connectionError"}),e.mapProp("users",e.toTable(e.flow(e.mapArrayProps({username:e.getProp("value"),is_user:e.feedWith(1,e.flow(e.getProp("username.is_user"),e.convert.toAppBoolean)),suspended:e.flow(e.getProp("value"),e.convert.toAppBoolean),reason:e.feedWith(1,(function(e){return e.suspended.reason||"none"})),vdomains:e.toLimitedUsage(),bandwidth:e.toLimitedUsage(),quota:e.toLimitedUsage(),date_created:e.convert.toAppDate,mysql:function(t){if(t){var n=t.split("/").map((function(e){return e.trim()})),s=(0,a.default)(n,2),r=s[0],o=s[1];return e.toLimitedUsage()({limit:Number(o)||1/0,usage:r})}}}),e.mapArray((function(e){return u(u({},e),{},{test:"test"})}))))),e.mapProp("options",e.mapProps({add_leave_dns:e.convert.toAppBoolean,connectionError:function(t){return(t||"").split("<br>\\n").filter(e.notEmpty).join("<br>")},remote_servers:e.flow((function(e){return e||{}}),e.mapValues((function(t,n){var s=t.ssl,r=t.port,a=e.convert.toAppBoolean(s)?"https":"http";return"".concat(a,"://").concat(n,":").concat(r)}))),reasons:e.toSelect})))}});t.getUsers=l;var c=o.default.get({id:"ADMINS",url:"/CMD_ADMIN_SHOW",params:{bytes:!0},pagination:!0,after:function(e){return e.flow(e.wrap("admins"),e.moveProp({"admins.reasons":"reasons"}),e.mapProp("admins",e.toTable(e.mapArrayProps({nusers:e.convert.toAppNumber,suspended:e.flow(e.getProp("value"),e.isEqual("no:"),e.not),reason:e.feedWith(1,(function(e){return e.suspended.reason||"none"})),vdomains:e.toLimitedUsage(),bandwidth:e.toLimitedUsage(),quota:e.toLimitedUsage()}))),e.mapProp("reasons",e.toSelect))}});t.getAdmins=c},2013:function(e,t,n){"use strict";n(1938)},2014:function(e,t,n){},2026:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return r}));var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:{"scrollbar:primary":!e.$_Client.isPhone},style:{"overflow-x":"auto","min-width":e.$_Client.isPhone?"auto":"15rem"}},[e._l(e.shownDomains,(function(t,s){return n("div",{directives:[{name:"flex",rawName:"v-flex",value:{cross:"center"},expression:"{ cross: 'center' }"}],key:s},[n("a",{attrs:{href:"http://"+s,target:"_blank"}},[e._v("\n            "+e._s(e._f("p6eUnicode")(s))+"\n        ")]),e._v("\n         \n        "),t.length&&"0"!==e.showPointers?n("ui-tooltip",[n("translate",{staticClass:"txt:bold",attrs:{slot:"trigger"},slot:"trigger"},[e._v("\n                (pointers)\n            ")]),e._v(" "),n("1"===e.showPointers?"ul":"ol",{tag:"component",staticClass:"wrap:nowrap user-domains--pointers"},e._l(t,(function(t){return n("li",{key:t},[n("a",{attrs:{href:"http://"+t,target:"_blank"}},[e._v("\n                        "+e._s(e._f("p6eUnicode")(t))+"\n                    ")])])})),0)],1):e._e()],1)})),e._v(" "),e.showExpandButton&&!e.showAllDomains?n("ui-button",{attrs:{theme:"light",size:"small"},on:{click:function(t){e.showAll=!0}}},[n("translate",[e._v("show all...")]),e._v(" "),n("ui-icon",{directives:[{name:"margin",rawName:"v-margin",value:[,,,1],expression:"[, , , 1]"}],attrs:{id:"caret-down",size:"small"}})],1):e._e()],2)},r=[]},2189:function(e,t,n){"use strict";n.r(t);var s=n(2190),r=n.n(s);for(var a in s)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return s[e]}))}(a);t.default=r.a},2190:function(e,t,n){"use strict";n(10),n(6),n(11),n(16),n(14),n(23),n(25),n(18);var s=n(1),r=n(20);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(n(36)),o=s(n(38)),i=s(n(2)),u=s(n(37));n(7),n(27),n(8),n(34),n(5),n(21),n(61);var l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=v(t);if(n&&n.has(e))return n.get(e);var s={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=a?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(s,o,i):s[o]=e[o]}s.default=e,n&&n.set(e,s);return s}(n(9)),c=n(1993),d=n(1926),p=s(n(2029)),f=s(n(1994)),m=s(n(1937)),h=s(n(1939));function v(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(v=function(e){return e?n:t})(e)}function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){(0,i.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b,w,S,E={preload:c.getUsers,api:[{command:c.getUsers,bind:{"response.users":"users","response.options":"options"}},{command:d.getUsersCountPerReseller,bind:"usersPerReseller"}],commands:{getUsers:c.getUsers},components:{CreateMessageDialog:p.default,SuspendUserDialog:f.default,UserDomains:m.default,ChangePasswordDialog:h.default},data:function(){return{select:[],leaveDNS:!1,message:"",userStatus:{}}},computed:{rows:function(){return this.$api.users.rows},options:function(){return this.$api.options},showRemoteServer:function(){return!!Object.keys(this.options.remote_servers||{}).length},reasons:function(){return f.default.$exports.reasons.call(this,this.$api.options.reasons.options)},hasDateCreatedColumn:function(){return void 0!==this.$api.users.columns.date_created},additionalColumnLabels:function(){return{date_created:this.$gettext("Date Created"),mysql:this.$gettext("Databases"),package:this.$gettext("Package"),email:this.$gettext("E-mail")}},additionalColumns:function(){var e=this;return l.pipe(l.omit(["username","creator","bandwidth","quota","vdomains","suspended","ip","domains","sent_emails","remote_server"]),l.mapObjIndexed((function(t,n){return{label:e.additionalColumnLabels[n]||n,visible:!1}})))(this.$api.users.columns)},deleteData:function(){var e=this;return this.select.reduce((function(t,n){var s=e.$api.usersPerReseller[n];return void 0!==s&&t.push({name:n,nusers:s}),t}),[])}},mounted:function(){this.getUsersCountPerReseller(),this.options.connectionError&&this.$notifications.error({timeout:1/0,title:this.$gettext("Connection Error"),content:this.options.connectionError})},methods:{getUsersCountPerReseller:function(){(0,d.getUsersCountPerReseller)()},getUsageProgress:function(e){var t=100*e.usage/e.limit,n="primary";return t>40&&(n="safe"),t>80&&(n="danger"),{size:"normal",theme:n,value:t}},deleteUsers:(S=(0,u.default)(a.default.mark((function e(){var t,n=this;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=this.select).forEach(this.setStatus("deleted")),e.next=4,(0,d.deleteUsers)({select:t,leave_dns:this.options.add_leave_dns?this.leaveDNS:null});case 4:e.sent||t.forEach((function(e){delete n.userStatus[e]})),this.select=[],this.$reloadApiTable({reset:!1});case 8:case"end":return e.stop()}}),e,this)}))),function(){return S.apply(this,arguments)}),getChildUsers:function(e){return this.rows.filter((function(t){return t.creator===e})).map((function(e){return e.username}))},setStatus:function(e){var t=this;return function(n){return t.$set(t.userStatus,n,e)}},deleteStatus:function(e){this.$delete(this.userStatus,e)},suspendUsers:(w=(0,u.default)(a.default.mark((function e(t){var n,s,r=this;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.select,s=this.setStatus("suspended"),n.forEach((function(e){s(e),r.getChildUsers(e).forEach(s)})),e.next=5,(0,d.suspendUsers)(g({select:n},t));case 5:e.sent||n.forEach((function(e){r.deleteStatus(e),r.getChildUsers(e).forEach(r.deleteStatus)})),this.$reloadApiTable({reset:!1}),this.select=[];case 9:case"end":return e.stop()}}),e,this)}))),function(e){return w.apply(this,arguments)}),unsuspendUsers:(b=(0,u.default)(a.default.mark((function e(){var t,n,s=this;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.select,n=this.setStatus("active"),t.forEach((function(e){n(e),s.getChildUsers(e).forEach(n)})),e.next=5,(0,d.unsuspendUsers)({select:t});case 5:e.sent||t.forEach((function(e){s.deleteStatus(e),s.getChildUsers(e).forEach(s.deleteStatus)})),this.$reloadApiTable({reset:!1}),this.select=[];case 9:case"end":return e.stop()}}),e,this)}))),function(){return b.apply(this,arguments)}),filterDeletedUsers:function(e){return"deleted"!==this.userStatus[e.username]},mapUserStatus:function(e){return g(g({},e),{},{suspended:this.userStatus[e.username]?"suspended"===this.userStatus[e.username]:e.suspended})},getSentEmailsString:function(e){var t=e.split(":"),n=(0,o.default)(t,3),s=n[0],r=n[1],a=n[2];return r&&a?this.$gettextInterpolate(this.$gettext("%{ sent } (Today: %{ today } / %{ limit })"),{sent:s,today:r,limit:a}):s},loginAs:function(e){this.$store.dispatch("app/LOGIN_AS",{user:e,path:this.$route.path,router:this.$router})},changePassword:function(e){this.$refs.cpd.show(e)}}};t.default=E},3278:function(e,t){},3863:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return r}));var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("app-page",{attrs:{actions:[{name:"reseller/users/create",label:e.$gettext("Add New User"),icon:"add-new-user"}]}},[n("app-page-section",[n("ui-api-table",e._b({on:{"action:message":function(t){e.$dialog("CREATE_MESSAGE_DIALOG").open()},"action:suspend":function(t){e.$dialog("SUSPEND_USER_DIALOG").open()},"action:unsuspend":e.unsuspendUsers,"action:del":function(t){e.$dialog("DELETE_ITEMS_DIALOG").open()}},scopedSlots:e._u([{key:"col:username",fn:function(t){var s=t.username,r=t.suspended,a=t.deleted,o=t.remote_server,i=t.is_user,u=t.reason;return n("div",{staticClass:"wrap:nowrap"},[n("ui-link",o?{attrs:{href:e.options.remote_servers[o]+"/CMD_SHOW_USER="+s,target:"_blank"}}:{attrs:{name:i?"reseller/users/view":"admin/users/resellers/view",params:{user:s}}},[e._v("\n                    "+e._s(s)+"\n                ")]),e._v(" "),r?n("ui-tooltip",{attrs:{theme:"danger",icon:"warning"}},[u?n("translate",{attrs:{"translate-params":{reason:e.reasons[u]}}},[e._v("\n                        Suspended: %{ reason }\n                    ")]):n("translate",[e._v("\n                        Suspended\n                    ")])],1):e._e(),e._v(" "),a?n("ui-tooltip",{attrs:{theme:"danger",icon:"warning"}},[n("translate",[e._v("Deleted")])],1):e._e()],1)}},{key:"col:creator",fn:function(t){var s=t.creator;return["root"!==s?n("ui-link",{attrs:{name:"admin/users/resellers/view",params:{user:s}}},[e._v("\n                    "+e._s(s)+"\n                ")]):e._e()]}},{key:"col:bandwidth",fn:function(t){var s=t.bandwidth;return n("ui-limited-usage",e._b({},"ui-limited-usage",s,!1))}},{key:"col:quota",fn:function(t){var s=t.quota;return n("ui-limited-usage",e._b({},"ui-limited-usage",s,!1))}},{key:"col:vdomains",fn:function(t){var s=t.vdomains;return n("ui-limited-usage",e._b({attrs:{plain:""}},"ui-limited-usage",s,!1))}},{key:"col:mysql",fn:function(t){var s=t.mysql;return n("ui-limited-usage",e._b({attrs:{plain:""}},"ui-limited-usage",s,!1))}},{key:"col:ip",fn:function(t){var s=t.ip;return[s.length?e._e():n("span"),e._v(" "),e._l(s,(function(t){return n("p",{directives:[{name:"margin",rawName:"v-margin",value:0,expression:"0"}],key:t},[e._v("\n                    "+e._s(t)+"\n                ")])}))]}},{key:"col:domains",fn:function(t){var s=t.domains;return n("user-domains",e._b({},"user-domains",{domains:s},!1))}},{key:"col:sent_emails",fn:function(t){var n=t.sent_emails;return[e._v("\n                "+e._s(e.getSentEmailsString(n))+"\n            ")]}},{key:"col:date_created",fn:function(t){var n=t.date_created;return[e._v("\n                "+e._s(e._f("date")(n))+"\n            ")]}},{key:"row:actions",fn:function(t){var s=t.username,r=t.suspended;return n("ui-actions",{},[n("ui-link",{on:{click:function(t){e.select=[s],e.$dialog("CREATE_MESSAGE_DIALOG").open()}}},[n("translate",[e._v("Send a Message")])],1),e._v(" "),r?e._e():n("ui-link",{on:{click:function(t){e.select=[s],e.$dialog("SUSPEND_USER_DIALOG").open()}}},[n("translate",[e._v("Suspend")])],1),e._v(" "),r?n("ui-link",{on:{click:function(t){e.select=[s],e.unsuspendUsers()}}},[n("translate",[e._v("Unsuspend")])],1):e._e(),e._v(" "),n("ui-link",{on:{click:function(t){return e.loginAs(s)}}},[n("translate",{attrs:{"translate-params":{username:s}}},[e._v("\n                        Login as %{ username }\n                    ")])],1),e._v(" "),n("ui-link",{on:{click:function(t){return e.changePassword(s)}}},[n("translate",{attrs:{"translate-params":{username:s}}},[e._v("\n                        Change %{ username }'s password\n                    ")])],1),e._v(" "),n("ui-link",{on:{click:function(t){e.select=[s],e.$dialog("DELETE_ITEMS_DIALOG").open()}}},[n("translate",[e._v("Remove")])],1)],1)}}]),model:{value:e.select,callback:function(t){e.select=t},expression:"select"}},"ui-api-table",{command:e.$commands.getUsers,endpoint:"GET_ALL_USERS",property:"users",rowID:"username",columns:Object.assign({},{username:{label:e.$gettext("Username"),searchable:!0},creator:{label:e.$gettext("Creator"),searchable:!0},bandwidth:{label:e.$gettext("Bandwidth"),getClass:function(e){return e.bandwidth.status?"--usage:"+e.bandwidth.status:""}},quota:{label:e.$gettext("Disk Usage"),getClass:function(e){return e.bandwidth.status?"--usage:"+e.quota.status:""}},vdomains:e.$gettext("# of domains"),domains:{label:e.$gettext("Domain(s)"),width:"minmax(15rem, auto)",searchable:!0},ip:{label:e.$gettext("IP(s)"),searchable:!0},suspended:{label:e.$gettext("Suspended"),hide:!0,searchable:{type:"select",options:{Yes:e.$gettext("Yes"),No:e.$gettext("No")}}},sent_emails:e.$gettext("Sent E-mails"),remote_server:{label:e.$gettext("Remote Server"),hide:!e.showRemoteServer}},e.additionalColumns),actions:{message:e.$gettext("Send a Message"),suspend:e.$gettext("Suspend"),unsuspend:e.$gettext("Unsuspend"),del:e.$gettext("Delete")},updateOn:["SUSPEND_USERS","UNSUSPEND_USERS","DELETE_USERS"],rowsMapper:e.mapUserStatus,rowsFilter:e.filterDeletedUsers,verticalLayout:e.$_Client.isPhone},!1))],1),e._v(" "),n("create-message-dialog",{attrs:{users:e.select}}),e._v(" "),n("ui-dialog",{attrs:{id:"DELETE_ITEMS_DIALOG"}},[n("template",{slot:"title"},[e._v("\n            "+e._s(e.$ngettext("Delete user","Delete users",e.select.length))+"\n        ")]),e._v(" "),n("template",{slot:"content"},[n("ui-form-element",{attrs:{underline:!!e.deleteData.length}},[n("template",{slot:"content"},[n("span",{staticClass:"txt:bold"},[e._v(e._s(e.$ngettext("Are you sure you want to delete selected user?","Are you sure you want to delete selected users?",e.select.length)))])])],2),e._v(" "),e.deleteData.length?n("ui-form-element",{attrs:{underline:e.options.add_leave_dns}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("table",{staticClass:"table-elem"},[n("tr",[n("th",[e._v("\n                                "+e._s(e.$ngettext("You are deleting reseller that have users under control. If you proceed, these user accounts, along with ALL the associated website and email contents, which are not listed here, will also be removed.","You are deleting resellers that have users under control. If you proceed, these user accounts, along with ALL the associated website and email contents, which are not listed here, will also be removed.",e.deleteData.length))+"\n                            ")])]),e._v(" "),e._l(e.deleteData,(function(t){return n("tr",{key:t.name},[n("td",[n("translate",{attrs:{"translate-params":t,"translate-n":t.nusers,"translate-plural":"%{ name } and %{nusers } users"}},[e._v("\n                                    %{ name } and %{nusers } user\n                                ")])],1)])}))],2)])]):e._e(),e._v(" "),e.options.add_leave_dns?n("ui-form-element",[n("input-checkbox",{attrs:{slot:"content"},slot:"content",model:{value:e.leaveDNS,callback:function(t){e.leaveDNS=t},expression:"leaveDNS"}},[n("translate",[e._v("Leave DNS")]),e._v(" "),n("ui-tooltip",[n("translate",[e._v("Do not remove DNS zones of domains owned by the user.")])],1)],1)],1):e._e()],1),e._v(" "),n("ui-button",{attrs:{slot:"buttons",theme:"danger"},on:{click:e.deleteUsers},slot:"buttons"},[n("translate",[e._v("Delete")])],1)],2),e._v(" "),n("suspend-user-dialog",{attrs:{"api-reasons":e.$api.options.reasons.options},on:{suspend:e.suspendUsers}}),e._v(" "),n("change-password-dialog",{ref:"cpd"})],1)},r=[]}}]);