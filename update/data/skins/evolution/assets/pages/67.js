(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{1734:function(t,e,n){"use strict";n.r(e);var a=n(3845),l=n(2129);for(var i in l)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return l[t]}))}(i);var s=n(0),r=n(3223),o=n.n(r),u=Object(s.a)(l.default,a.a,a.b,!1,null,null,null);"function"==typeof o.a&&o()(u),e.default=u.exports},2129:function(t,e,n){"use strict";n.r(e);var a=n(2130),l=n.n(a);for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e.default=l.a},2130:function(t,e,n){"use strict";n(16),n(14),n(23),n(25),n(18),n(6);var a=n(1),l=n(20);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n(36)),s=a(n(37)),r=function(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!==l(t)&&"function"!=typeof t)return{default:t};var n=d(e);if(n&&n.has(t))return n.get(t);var a={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in t)if("default"!==s&&Object.prototype.hasOwnProperty.call(t,s)){var r=i?Object.getOwnPropertyDescriptor(t,s):null;r&&(r.get||r.set)?Object.defineProperty(a,s,r):a[s]=t[s]}a.default=t,n&&n.set(t,a);return a}(n(3220)),o=n(58),u=a(n(3221)),c=a(n(3222));function d(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,n=new WeakMap;return(d=function(t){return t?n:e})(t)}var p,f={preload:r.getDetails,commands:r,components:{LinkIpDialog:u.default,UnlinkIpDialog:c.default},api:[{command:r.getDetails,bind:"data"}],mixins:[(0,o.$bindTab)({defaultTab:"details",param:"tab"})],props:{ip:{type:String,required:!0}},data:function(){return{select:[]}},computed:{details:function(){return this.$api.data.details},available_ips:function(){return this.$api.data.available_ips}},created:function(){this.detailsData={status:this.$gettext("Status"),netmask:this.$gettext("Netmask"),users:this.$gettext("Users"),nameserver:this.$gettext("Name Server")}},methods:{linkIp:function(t){r.linkIp(t).then(this.$reloadApiTable)},unlinkIp:function(t){r.unlinkIp(t).then(this.$reloadApiTable)},setGlobal:(p=(0,s.default)(i.default.mark((function t(e){return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.setGlobal({ip:this.ip,global:e||null});case 2:r.getDetails({ip:this.ip});case 3:case"end":return t.stop()}}),t,this)}))),function(t){return p.apply(this,arguments)})}};e.default=f},2131:function(t,e,n){"use strict";n.r(e);var a=n(2132),l=n.n(a);for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e.default=l.a},2132:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{ip:{type:String,required:!0,default:""},availableIps:{type:Array,required:!0,default:function(){return[]}}},data:function(){return{linkIP:"",dns:!0,apache:!0,apply:!0,background:!0}},methods:{submit:function(){this.$emit("submit",{ip:this.ip,ip_to_link:this.linkIP,dns:this.dns,apache:this.apache,apply:this.apply,background:this.background})}}};e.default=a},2133:function(t,e,n){"use strict";n.r(e);var a=n(2134),l=n.n(a);for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e.default=l.a},2134:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{flushDNS:!0,rewriteApache:!0}},props:{ip:{type:String,required:!0},select:{type:Array,requried:!0}},methods:{submit:function(){this.$emit("submit",{ip:this.ip,select:this.select,flush_dns:this.flushDNS,rewrite_apache:this.rewriteApache})}}};e.default=a},3220:function(t,e,n){"use strict";var a=n(1);Object.defineProperty(e,"__esModule",{value:!0}),e.setGlobal=e.unlinkIp=e.linkIp=e.getDetails=void 0;var l=a(n(78)),i="/CMD_IP_MANAGER_DETAILS",s=l.default.get({url:i,id:"IP_MANAGER_DETAILS",schema:{ip:l.default.REQUIRED_STRING},pagiantion:!0,after:function(t){return t.flow(t.moveProp("value","details.users"),t.moveProp("status","details.status"),t.moveProp("reseller","details.reseller"),t.moveProp("resellers_with_ip","details.resellers"),t.moveProp("ns","details.nameserver"),t.moveProp("netmask","details.netmask"),t.moveProp("gateway","details.gateway"),t.moveProp("ip","details.ip"),t.moveProp("global","details.global"),t.mapProps({linked_ips:t.toTable(t.mapArrayProps({dns:t.convert.toAppBoolean,apache:t.convert.toAppBoolean})),details:t.mapProps({users:t.convert.toAppNumber,global:t.isEqual("yes"),resellers:t.setDefault([])})}))}});e.getDetails=s;var r=l.default.post({url:i,params:{json:!0,action:"add"},schema:{ip:l.default.REQUIRED_STRING,ip_to_link:l.default.REQUIRED_STRING,dns:l.default.REQUIRED_BOOL,apache:l.default.REQUIRED_BOOL,apply:l.default.REQUIRED_BOOL}});e.linkIp=r;var o=l.default.select({url:i,params:{json:!0,remove:!0},schema:{ip:l.default.REQUIRED_STRING,rewrite_apache:l.default.REQUIRED_BOOL,flush_dns:l.default.REQUIRED_BOOL}});e.unlinkIp=o;var u=l.default.post({url:i,params:{action:"global"},schema:{ip:l.default.REQUIRED_STRING,global:l.default.OPTIONAL_BOOL}});e.setGlobal=u},3221:function(t,e,n){"use strict";n.r(e);var a=n(3996),l=n(2131);for(var i in l)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return l[t]}))}(i);var s=n(0),r=Object(s.a)(l.default,a.a,a.b,!1,null,null,null);e.default=r.exports},3222:function(t,e,n){"use strict";n.r(e);var a=n(3997),l=n(2133);for(var i in l)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return l[t]}))}(i);var s=n(0),r=Object(s.a)(l.default,a.a,a.b,!1,null,null,null);e.default=r.exports},3223:function(t,e){},3845:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return l}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("app-page",{attrs:{actions:t.available_ips.length?[{label:t.$gettext("Link IP"),icon:"#plus-fill",handler:t.$dialog("LINK_IP_DIALOG").open}]:[]}},[n("translate",{attrs:{slot:"page:title"},slot:"page:title"},[t._v("\n        Details for %{ip}\n    ")]),t._v(" "),t.available_ips.length?n("ui-button",{attrs:{slot:"header:buttons",theme:"primary"},on:{click:function(e){t.$dialog("LINK_IP_DIALOG").open()}},slot:"header:buttons"},[n("translate",[t._v("Link IP")])],1):t._e(),t._v(" "),n("app-page-section",[n("ui-tabs",{attrs:{tabs:[{id:"details",label:t.$gettext("Details")},{id:"ips",label:t.$gettext("Linked IP(s)")}],selected:t.tab},on:{"update:selected":function(e){t.tab=e}}},[n("ui-table",{key:"details-table",attrs:{slot:"tab:details",items:[t.details],transposed:""},slot:"tab:details"},[t._l(t.detailsData,(function(e,a){return n("ui-column",t._b({key:a,attrs:{visible:!!t.details[a],fit:""}},"ui-column",{label:e,id:a},!1))})),t._v(" "),n("ui-column",{attrs:{id:"resellers",visible:Boolean(t.details.global&&t.details.resellers.length),label:t.$gettext("Resellers")}},[[t._v("\n                        "+t._s(t.details.resellers.join(", "))+"\n                    ")]],2),t._v(" "),n("ui-column",{attrs:{id:"reseller",label:t.$gettext("Reseller"),visible:Boolean(t.details.reseller&&!(t.details.global&&t.details.resellers.length))}}),t._v(" "),n("ui-column",{attrs:{id:"global",label:t.$gettext("Global"),visible:["shared","free"].includes(t.details.status)},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.global;return[n("input-checkbox",{attrs:{model:a},on:{change:t.setGlobal}},[n("translate",[t._v("When enabled, this IP can be used by multiple Resellers")])],1)]}}])})],2),t._v(" "),n("ui-api-table",t._b({attrs:{slot:"tab:ips"},on:{"action:unlink":function(e){t.$dialog("UNLINK_IP_DIALOG").open()}},slot:"tab:ips",scopedSlots:t._u([{key:"col:dns",fn:function(e){var a=e.dns;return[n("translate",a?[t._v("\n                        Yes\n                    ")]:[t._v("\n                        No\n                    ")])]}},{key:"col:apache",fn:function(e){var a=e.apache;return[n("translate",a?[t._v("\n                        Yes\n                    ")]:[t._v("\n                        No\n                    ")])]}}]),model:{value:t.select,callback:function(e){t.select=e},expression:"select"}},"ui-api-table",{command:t.$commands.getDetails,property:"linked_ips",rowID:"ip",columns:{ip:t.$gettext("IP Address"),dns:t.$gettext("Added to DNS"),apache:t.$gettext("Added to Apache")},actions:{unlink:t.$gettext("Un-Link")},requestData:{ip:t.ip},verticalLayout:t.$_Client.isPhone},!1))],1)],1),t._v(" "),n("link-ip-dialog",{attrs:{ip:t.ip,"available-ips":t.available_ips},on:{submit:t.linkIp}}),t._v(" "),n("unlink-ip-dialog",t._b({on:{submit:t.unlinkIp}},"unlink-ip-dialog",{ip:t.ip,select:t.select},!1))],1)},l=[]},3996:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return l}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ui-dialog",{attrs:{id:"LINK_IP_DIALOG",theme:"safe"},on:{"dialog:close":t.$reset}},[n("translate",{attrs:{slot:"title"},slot:"title"},[t._v("\n        Link an IP to %{ip}\n    ")]),t._v(" "),n("template",{slot:"content"},[n("ui-form-element",{attrs:{group:"linkIP",validators:{required:!0},vertical:""}},[n("translate",{attrs:{slot:"title"},slot:"title"},[t._v("\n                IP Address\n            ")]),t._v(" "),n("input-select",{attrs:{slot:"content",options:t.availableIps},slot:"content",model:{value:t.linkIP,callback:function(e){t.linkIP=e},expression:"linkIP"}})],1),t._v(" "),n("ui-form-element",{attrs:{vertical:""}},[n("input-checkbox",{attrs:{slot:"content"},slot:"content",model:{value:t.dns,callback:function(e){t.dns=e},expression:"dns"}},[n("translate",[t._v("Add to DNS")])],1),t._v(" "),n("translate",{attrs:{slot:"tooltip"},slot:"tooltip"},[t._v("\n                Linking an IP with DNS will duplicate the A/AAAA records for the current IP with the linked IP.\n            ")])],1),t._v(" "),n("ui-form-element",{attrs:{vertical:""}},[n("input-checkbox",{attrs:{slot:"content"},slot:"content",model:{value:t.apache,callback:function(e){t.apache=e},expression:"apache"}},[n("translate",[t._v("Add to Apache")])],1),t._v(" "),n("translate",{attrs:{slot:"tooltip"},slot:"tooltip"},[t._v("\n                Linking an IP with apache will add the linked IP into the VirtualHost with the current IP.\n            ")])],1),t._v(" "),n("ui-form-element",{attrs:{vertical:""}},[n("input-checkbox",{attrs:{slot:"content"},slot:"content",model:{value:t.apply,callback:function(e){t.apply=e},expression:"apply"}},[n("translate",[t._v("Apply to existing domains")])],1),t._v(" "),n("translate",{attrs:{slot:"tooltip"},slot:"tooltip"},[t._v('\n                The "Apply to existing Domains" option will trigger the httpd.conf rewrites and insert A/AAAA records into the local DNS zones. Disabling this checkbox won\'t touch the DNS or httpd.conf files, but future httpd.cont rewrites will have the linked IP added.\n            ')])],1),t._v(" "),n("ui-form-element",{attrs:{vertical:""}},[n("input-checkbox",{attrs:{slot:"content"},slot:"content",model:{value:t.background,callback:function(e){t.background=e},expression:"background"}},[n("translate",[t._v("Link in background")])],1),t._v(" "),n("translate",{attrs:{slot:"tooltip"},slot:"tooltip"},[t._v("\n                When this is set, the add link task is processed in the background via task.queue. It may take up to 1 minute before the processing starts, and an unknown amount of time, depending on the number of websites present.\n            ")])],1)],1),t._v(" "),n("ui-button",{attrs:{slot:"buttons",theme:"safe","validate-group":"linkIP"},on:{click:t.submit},slot:"buttons"},[n("translate",[t._v("Link")])],1)],2)},l=[]},3997:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return l}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ui-dialog",{attrs:{id:"UNLINK_IP_DIALOG",theme:"danger"},on:{"dialog:close":t.$reset}},[n("translate",{attrs:{slot:"title","translate-n":t.select.length,"translate-plural":"Un-Link IP Addresses"},slot:"title"},[t._v("\n        Un-Link IP Address\n    ")]),t._v(" "),n("template",{slot:"content"},[n("translate",{staticClass:"txt:bold",attrs:{"translate-n":t.select.length,"translate-plural":"Are you sure you want to unlink selected IPs?"}},[t._v("\n            Are you sure you want to unlink selected IP?\n        ")]),t._v(" "),n("ui-form-element",{attrs:{vertical:""}},[n("input-checkbox",{attrs:{slot:"content"},slot:"content",model:{value:t.flushDNS,callback:function(e){t.flushDNS=e},expression:"flushDNS"}},[n("translate",[t._v("Flush from DNS")])],1)],1),t._v(" "),n("ui-form-element",{attrs:{vertical:""}},[n("input-checkbox",{attrs:{slot:"content"},slot:"content",model:{value:t.rewriteApache,callback:function(e){t.rewriteApache=e},expression:"rewriteApache"}},[n("translate",[t._v("Rewrite Apache")])],1)],1)],1),t._v(" "),n("ui-button",{attrs:{slot:"buttons",theme:"danger"},on:{click:t.submit},slot:"buttons"},[n("translate",[t._v("Un-Link")])],1)],2)},l=[]}}]);