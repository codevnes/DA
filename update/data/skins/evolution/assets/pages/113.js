(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{1863:function(t,e,a){"use strict";a.r(e);var r=a(3971),s=a(2782);for(var n in s)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return s[t]}))}(n);a(3756);var i=a(0),o=a(3758),u=a.n(o),l=Object(i.a)(s.default,r.a,r.b,!1,null,"43c68698",null);"function"==typeof u.a&&u()(l),e.default=l.exports},1919:function(t,e,a){"use strict";a(7),a(10),a(6),a(8),a(11),a(16),a(14),a(23),a(25),a(18);var r=a(1),s=a(20);Object.defineProperty(e,"__esModule",{value:!0}),e.getDomainLog=e.updateDiskUsage=e.licenseVerify=e.setUserAwstats=e.setMultiple=e.setUserSkin=e.setUserEmail=e.setUserName=e.setUserStats=e.unsetPublicStats=e.setPublicStats=e.getWebalizerReport=e.getStatsStatus=e.getStats=void 0;var n=r(a(20)),i=r(a(2));a(5),a(13),a(50),a(27),a(57),a(24),a(21),a(61),a(96);var o=r(a(78)),u=a(713),l=function(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!==s(t)&&"function"!=typeof t)return{default:t};var a=c(e);if(a&&a.has(t))return a.get(t);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in t)if("default"!==i&&Object.prototype.hasOwnProperty.call(t,i)){var o=n?Object.getOwnPropertyDescriptor(t,i):null;o&&(o.get||o.set)?Object.defineProperty(r,i,o):r[i]=t[i]}r.default=t,a&&a.set(t,r);return r}(a(9));function c(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,a=new WeakMap;return(c=function(t){return t?a:e})(t)}function p(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function f(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?p(Object(a),!0).forEach((function(e){(0,i.default)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var d=o.default.get({id:"USER_STATS",url:"/CMD_USER_STATS",params:{bytes:!0},domain:!0,pagination:!0,after:function(t){return t.flow(t.project({domains:"domains",stats:"stats","addons.webalizer":"webalizer","addons.awstats":"awstats",limitNotice:"stats",customItems:"custom_items"}),t.mapProps({stats:t.flow(t.deleteProp("info"),t.toArray,t.filter((function(t){return!!t.usage})),t.transformObject((function(t){return(0,i.default)({},t.setting,{usage:t.usage||void 0,limit:t.max_usage||void 0})})),t.mapValues((function(t){return["ON","OFF"].includes(t.usage)?{usage:"ON"===t.usage}:"object"===(0,n.default)(t.usage)?f(f({},t),{},{usage:Object.values(t.usage)}):t})),t.mapValues((function(e){return e.limit?t.toLimitedUsage(t.convert.toAppNumber)(e):e.usage})),t.mapProps({awstats:t.flow(t.toSelect,t.getProp("value"))})),domains:t.toTable(t.mapArray(t.flow((function(t){var e=t.subdomains||t.settings.subdomains||[];return void 0!==t.settings.subdomains&&delete t.settings.subdomains,t.subdomains=e,t}),t.mapProps({bandwidth:t.mapProp("usage",t.convert.toAppNumber),quota:t.convert.toAppNumber,log_usage:t.convert.toAppNumber,nsubdomains:t.convert.toAppNumber,suspended:t.convert.toAppBoolean,settings:t.mapValues(t.convert.toAppBoolean)})))),addons:t.flow(t.toArray,t.mapArray(t.isEqual("1")),t.reduce((function(t,e){return t||e}),!1)),limitNotice:function(e){var a=Object.values(e).find((function(t){return"send_usage_message"===t.setting}));return!!a&&{defaultValue:a.max_usage,value:t.toSelect(a.usage).value}},customItems:l.pipe(l.defaultTo({}),l.map(u.fromObject),l.filter((function(t){return t.value||"checkbox"===t.type})),l.values)}))}});e.getStats=d;var m=o.default.get({id:"STATS_STATUS",url:"/CMD_USER_STATS",domain:!0,after:function(t){return t.flow(t.project({awstats:"awstats",awstatsOptions:"domain_awstats",webalizer:"webalizer"}),t.mapProp("awstats",(function(t){return"0"!==t})),t.mapProp("webalizer",t.isEqual("1")))}});e.getStatsStatus=m;var b=o.default.get({id:"WEBALIZER_REPORT",url:"/CMD_FILE_MANAGER",response:!1,params:{action:"exists"},schema:{domain:o.default.DOMAIN,subdomain:o.default.OPTIONAL_STRING},before:function(t){var e=t.domain,a=t.subdomain;return{path:a?"/domains/".concat(e,"/stats/").concat(a,"/index.html"):"/domains/".concat(e,"/stats/index.html"),domain:null,subdomain:null}},after:function(){return function(t){return"1"===t.exists}}});e.getWebalizerReport=b;var v=o.default.select({url:"/CMD_PUBLIC_STATS",params:{action:"public",json:!0},domain:!0,schema:{path:o.default.REQUIRED_STRING}});e.setPublicStats=v;var g=o.default.select({url:"/CMD_PUBLIC_STATS",params:{action:"public",json:!0,unset:!0},schema:{path:o.default.REQUIRED_STRING}});e.unsetPublicStats=g;var O=o.default.post({url:"/CMD_CHANGE_INFO",params:{json:!0},domain:!0,schema:{evalue:o.default.OPTIONAL_STRING,nvalue:o.default.OPTIONAL_STRING,lvalue:o.default.OPTIONAL_STRING}});e.setUserStats=O;var w=o.default.post({url:"/CMD_CHANGE_INFO",domain:!0}),_=w.extend({params:{name:!0},schema:{nvalue:o.default.REQUIRED_STRING}});e.setUserName=_;var h=w.extend({params:{email:!0},schema:{evalue:o.default.REQUIRED_STRING}});e.setUserEmail=h;var S=w.extend({params:{skin:!0},schema:{skinvalue:o.default.REQUIRED_STRING}});e.setUserSkin=S;var y=w.extend({params:{set_multiple:!0,send_usage_message:!0},schema:{nvalue:o.default.OPTIONAL_STRING,evalue:o.default.OPTIONAL_STRING,skinvalue:o.default.OPTIONAL_STRING,lvalue:o.default.OPTIONAL_STRING,awstatsvalue:o.default.OPTIONAL_STRING,zvalue:o.default.OPTIONAL_STRING},before:function(t){return{name:!!t.nvalue||null,email:!!t.evalue||null,skin:!!t.skinvalue||null,language:!!t.lvalue||null,awstats:!!t.awstatsvalue||null,zoom:!!t.zvalue||null}}});e.setMultiple=y;var T=w.extend({params:{awstats:!0},schema:{awstatsvalue:o.default.REQUIRED_STRING}});e.setUserAwstats=T;var R=o.default.get({id:"LICENSE_VERIFY",url:"/CMD_LICENSE_VERIFY",notifySuccess:!0});e.licenseVerify=R;var I=o.default.post({url:"/CMD_CHANGE_INFO",params:{update:!0}});e.updateDiskUsage=I;var N=o.default.get({id:"DOMAIN_LOG",url:"/CMD_SHOW_LOG",params:{json:null},accepts:"text/plain",domain:!0,schema:{type:o.default.REQUIRED_STRING},after:function(t){return t.flow((function(t){return t.split("\n")}),(function(t){return t.slice(0,-1)}))}});e.getDomainLog=N},2782:function(t,e,a){"use strict";a.r(e);var r=a(2783),s=a.n(r);for(var n in r)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return r[t]}))}(n);e.default=s.a},2783:function(t,e,a){"use strict";a(10),a(5),a(6),a(8),a(11);var r=a(1);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=r(a(36)),n=r(a(38)),i=r(a(37)),o=r(a(2));a(7),a(24),a(26),a(16),a(14),a(73),a(23),a(18);var u=a(1919),l=a(58),c=a(32);function p(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function f(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?p(Object(a),!0).forEach((function(e){(0,o.default)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var d,m={preload:[u.getWebalizerReport,u.getStatsStatus],api:[{command:u.getWebalizerReport,bind:"hasWebalizerReport"},{command:u.getStatsStatus,bind:"stats"}],mixins:[(0,l.$bindTab)({defaultTab:"",param:"tab"})],props:{domain:{type:String,required:!0}},data:function(){return{report:""}},computed:{hasAwstatsReport:function(){return this.$api.stats.awstats&&!!Object.keys(this.awstatsOptions).length},hasWebalizerReport:function(){return this.$api.hasWebalizerReport},awstatsOptions:function(){var t=this;if(!this.$api.stats.awstats)return{};var e=c.fp.transformObject((function(e,a){if("has_dynamic"===a)return{};if("present"===e)return(0,o.default)({},a,t.$gettext("Present"));var r=c.fp.convert.toAppDate(e),s=[t.$gettext("January"),t.$gettext("February"),t.$gettext("March"),t.$gettext("April"),t.$gettext("May"),t.$gettext("June"),t.$gettext("July"),t.$gettext("August"),t.$gettext("September"),t.$gettext("October"),t.$gettext("November"),t.$gettext("December")];return(0,o.default)({},a,"".concat(s[r.getMonth()]," ").concat(r.getFullYear()))})),a=this.$api.stats.awstatsOptions[this.domain];return f(f({},"1"===a.has_dynamic?(0,o.default)({},"/CMD_AWSTATS/".concat(this.domain,"/awstats.pl"),this.$gettext("All Month(cgi)")):{}),e(a))},reportLink:function(){return"/CMD_WEBALIZER/".concat(this.domain,"/index.html")}},watch:{$domain:(d=(0,i.default)(s.default.mark((function t(e){var a=this;return s.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.$router.push({name:this.$route.name,params:f(f({},this.$route.params),{},{domain:e})}),t.next=3,Promise.all([(0,u.getWebalizerReport)(),(0,u.getStatsStatus)()]);case 3:this.$nextTick((function(){!a.$api.stats.webalizer&&a.$api.stats.awstats?a.tab="awstats":a.tab="webalizer"}));case 4:case"end":return t.stop()}}),t,this)}))),function(t){return d.apply(this,arguments)})},created:function(){var t=this;this.$watch("awstatsOptions",(function(e){var a=Object.keys(e),r=(0,n.default)(a,1);t.report=r[0]}),{deep:!0,immediate:!0}),this.$nextTick((function(){!t.$api.stats.webalizer&&t.$api.stats.awstats?t.tab="awstats":t.tab="webalizer"}))}};e.default=m},3123:function(t,e,a){var r=a(3757);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,a(4).default)("2346fe3a",r,!0,{})},3756:function(t,e,a){"use strict";a(3123)},3757:function(t,e,a){},3758:function(t,e){},3971:function(t,e,a){"use strict";a.d(e,"a",(function(){return r})),a.d(e,"b",(function(){return s}));var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("app-page",{attrs:{id:"domain-stats"}},[t.tab?a("app-page-section",[t.$api.stats.awstats||t.$api.stats.webalizer?a("ui-tabs",{attrs:{tabs:[t.$api.stats.webalizer?{id:"webalizer",label:t.$gettext("Webalizer")}:{},t.$api.stats.awstats?{id:"awstats",label:t.$gettext("AWStats")}:{}],"hide-single-tab":"",selected:t.tab},on:{"update:selected":function(e){t.tab=e}}},[a("div",{attrs:{slot:"tab:webalizer"},slot:"tab:webalizer"},[t.hasWebalizerReport?a("iframe",{staticClass:"report",attrs:{src:t.reportLink,frameborder:"0"}}):a("translate",[t._v("\n                    There are no statistics for the domain yet\n                ")])],1),t._v(" "),a("div",{attrs:{slot:"tab:awstats"},slot:"tab:awstats"},[a("ui-form-element",[a("translate",{attrs:{slot:"title"},slot:"title"},[t._v("\n                        Month\n                    ")]),t._v(" "),a("input-select",{attrs:{slot:"content",options:t.awstatsOptions},slot:"content",model:{value:t.report,callback:function(e){t.report=e},expression:"report"}})],1),t._v(" "),t.report?a("iframe",{staticClass:"report",attrs:{src:t.report,frameborder:"0"}}):t._e()],1)]):a("translate",[t._v("\n            There are no statistics for the domain yet\n        ")])],1):t._e()],1)},s=[]}}]);