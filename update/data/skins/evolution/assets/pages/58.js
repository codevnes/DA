(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{1785:function(t,e,r){"use strict";r.r(e);var n=r(3894),o=r(2330);for(var a in o)["default"].indexOf(a)<0&&function(t){r.d(e,t,(function(){return o[t]}))}(a);var i=r(0),s=r(3384),u=r.n(s),c=Object(i.a)(o.default,n.a,n.b,!1,null,null,null);"function"==typeof u.a&&u()(c),e.default=c.exports},1887:function(t,e,r){"use strict";r.r(e);var n=r(1888),o=r.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){r.d(e,t,(function(){return n[t]}))}(a);e.default=o.a},1888:function(t,e,r){"use strict";r(16),r(14),r(23),r(25),r(18),r(6);var n=r(20);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r(17),r(110),r(96),r(84);var o=function(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!==n(t)&&"function"!=typeof t)return{default:t};var r=a(e);if(r&&r.has(t))return r.get(t);var o={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in t)if("default"!==s&&Object.prototype.hasOwnProperty.call(t,s)){var u=i?Object.getOwnPropertyDescriptor(t,s):null;u&&(u.get||u.set)?Object.defineProperty(o,s,u):o[s]=t[s]}o.default=t,r&&r.set(t,o);return o}(r(9));function a(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,r=new WeakMap;return(a=function(t){return t?r:e})(t)}var i={data:function(){return{sort:{key:"year",order:"DESC"}}},props:{history:{type:Array,required:!0},hideLinks:{type:Boolean,required:!1,default:!1}},computed:{ipp:function(){var t=Number(this.$route.query.ipp)||!1;return t&&t>0?t:this.$state.options["tables/ipp"]},page:function(){var t=Number(this.$route.query.page)||!1;return t&&t>0?t:1},sortComparator:function(){var t="DESC"===this.sort.order?o.descend:o.ascend;return o.sortWith("year"===this.sort.key?[t(o.prop("year")),t(o.prop("month"))]:[t(o.prop(this.sort.key))])},sortedHistory:function(){return this.sortComparator(this.history)},rows:function(){return this.sortedHistory.slice((this.page-1)*this.ipp,this.page*this.ipp)}},methods:{getMonthName:function(t){return[this.$gettext("January"),this.$gettext("February"),this.$gettext("March"),this.$gettext("April"),this.$gettext("May"),this.$gettext("June"),this.$gettext("July"),this.$gettext("August"),this.$gettext("September"),this.$gettext("October"),this.$gettext("November"),this.$gettext("December")][parseInt(t,10)-1]}}};e.default=i},1889:function(t,e,r){"use strict";r.r(e);var n=r(1890),o=r.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){r.d(e,t,(function(){return n[t]}))}(a);e.default=o.a},1890:function(t,e,r){"use strict";r(7),r(10),r(6),r(8),r(11);var n=r(1);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(r(2));r(50),r(27),r(14),r(65),r(5),r(34),r(24),r(84);var a=n(r(30)),i=r(2e3);function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){(0,o.default)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var c={components:{LineChart:a.default.extend({extends:i.Line,mixins:[i.mixins.reactiveProp],props:["chart","options"],mounted:function(){this.renderChart(this.chartData,this.options)}})},data:function(){return{year:null,hovered:null}},props:{type:{type:String,required:!1,default:"volumes"},history:{type:Array,required:!0},hideLinks:{type:Boolean,required:!1,default:!1}},computed:{years:function(){return Object.values(this.history.reduce((function(t,e){var r=e.year;return u((0,o.default)({},r,r.toString()),t)}),{}))},rows:function(){var t=this;return this.history.filter((function(e){return e.year.toString()===t.year}))},labels:function(){return this.rows.map(this.getMonthName)},chartData:function(){return this.chart[this.type].chartData},options:function(){return this.chart[this.type].options},chart:function(){var t=this,e={enabled:!0,mode:"nearest",intersect:!1,bodySpacing:6,xPadding:10,yPadding:10,titleFontFamily:"Open Sans",bodyFontFamily:"Open Sans",footerFontFamily:"Open Sans",footerFontSize:10,displayColors:!1};return{volumes:{chartData:{labels:this.labels,datasets:[u({label:this.$gettext("Bandwidth"),data:this.rows.map((function(t){return t.bandwidth}))},this.datasetOptions("danger")),u({label:this.$gettext("Disk Usage"),data:this.rows.map((function(t){return t.quota}))},this.datasetOptions("primary"))]},options:{onClick:this.chartsClick,legend:{onClick:function(){}},scales:{yAxes:[{ticks:{callback:this.size}}]},tooltips:u(u({},e),{},{callbacks:{title:function(e){var r=t.rows[e[0].index];return"".concat(t.getMonthName(r)," ").concat(r.year)},label:function(e){var r=e.datasetIndex,n=e.yLabel,o=[t.$gettext("Bandwidth"),t.$gettext("Disk Usage")][r];return"".concat(o,": ").concat(t.size(n))},footer:function(e){return 0!==e[0].datasetIndex||t.hideLinks?(t.$emit("hover:clear"),""):(t.$emit("hover:date",t.rows[e[0].index]),t.$gettext("Click for details"))}}})}},inodes:{chartData:{labels:this.labels,datasets:[u({label:this.$gettext("Inodes Count"),data:this.rows.map((function(t){return t.inode}))},this.datasetOptions("safe"))]},options:{legend:{onClick:function(){}},tooltips:u(u({},e),{},{callbacks:{title:function(e){var r=t.rows[e[0].index];return"".concat(t.getMonthName(r)," ").concat(r.year)},footer:function(){return t.hideLinks?void 0:t.$gettext("Click for details")}}})}}}}},methods:{chartsClick:function(){this.hovered&&this.$emit("click",this.hovered)},size:function(t){return this.$options.filters.humanReadableSize(t)},datasetOptions:function(t){var e=function(t){return getComputedStyle(document.body).getPropertyValue("--".concat(t))};return{backgroundColor:e("".concat(t,"-overlay")),borderColor:e(t),pointBackgroundColor:e(t),borderWidth:3,pointRadius:5,pointHitRadius:20}},getMonthName:function(t){var e=t.month;return[this.$gettext("January"),this.$gettext("February"),this.$gettext("March"),this.$gettext("April"),this.$gettext("May"),this.$gettext("June"),this.$gettext("July"),this.$gettext("August"),this.$gettext("September"),this.$gettext("October"),this.$gettext("November"),this.$gettext("December")][parseInt(e,10)-1]}},created:function(){var t=this;this.year=this.years[this.years.length-1],this.$on("hover:date",(function(e){var r=e.year,n=e.month;t.hovered={year:r,month:n}})),this.$on("hover:clear",(function(){t.hovered=null}))}};e.default=c},1948:function(t,e,r){"use strict";var n=r(1);Object.defineProperty(e,"__esModule",{value:!0}),e.getServerHistory=e.getResellerHistory=e.getUserHistory=void 0;var o=n(r(78)),a=o.default.get({url:"/CMD_USER_HISTORY",response:[],after:function(t){return t.flow(t.toArray,t.mapArrayProps({bandwidth:t.convert.toAppNumber,quota:t.convert.toAppNumber,inode:t.convert.toAppNumber,year:t.convert.toAppNumber,month:t.convert.toAppNumber}))}}),i=a.extend({id:"USER_HISTORY",url:"/CMD_USER_HISTORY",schema:{user:o.default.OPTIONAL_STRING}});e.getUserHistory=i;var s=a.extend({id:"RESELLER_HISTORY",url:"/CMD_RESELLER_HISTORY",schema:{user:o.default.OPTIONAL_STRING}});e.getResellerHistory=s;var u=a.extend({id:"ADMIN_HISTORY",url:"/CMD_ADMIN_HISTORY"});e.getServerHistory=u},1949:function(t,e,r){"use strict";r.r(e);var n=r(1990),o=r(1887);for(var a in o)["default"].indexOf(a)<0&&function(t){r.d(e,t,(function(){return o[t]}))}(a);var i=r(0),s=Object(i.a)(o.default,n.a,n.b,!1,null,null,null);e.default=s.exports},1950:function(t,e,r){"use strict";r.r(e);var n=r(1991),o=r(1889);for(var a in o)["default"].indexOf(a)<0&&function(t){r.d(e,t,(function(){return o[t]}))}(a);var i=r(0),s=Object(i.a)(o.default,n.a,n.b,!1,null,null,null);e.default=s.exports},1990:function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return o}));var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("app-page-section",[r("ui-r-table",{attrs:{rows:t.rows,sort:t.sort,columns:[{id:"year",label:t.$gettext("Date")},{id:"bandwidth",label:t.$gettext("Bandwidth")},{id:"quota",label:t.$gettext("Disk Usage")},{id:"inode",label:t.$gettext("Inodes Count")}],rowsCount:t.history.length,isCheckable:!1,verticalLayout:t.$_Client.isPhone,isSortable:"",externalSorting:"",sort:t.sort,equalWidthLayout:""},on:{"update:sort":function(e){t.sort=e}},scopedSlots:t._u([{key:"col:year",fn:function(e){var n=e.year,o=e.month;return r(t.hideLinks?"span":"ui-link",{tag:"component",staticClass:"txt:bold",on:{click:function(e){return t.$emit("click",{year:n,month:o})}}},[t._v("\n            "+t._s(t.getMonthName(o))+", "+t._s(n)+"\n        ")])}},{key:"col:bandwidth",fn:function(e){var r=e.bandwidth;return[t._v("\n            "+t._s(t._f("humanReadableSize")(r))+"\n        ")]}},{key:"col:quota",fn:function(e){var r=e.quota;return[t._v("\n            "+t._s(t._f("humanReadableSize")(r))+"\n        ")]}}])})],1)},o=[]},1991:function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return o}));var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("app-page-section",[r("ui-form-element",{attrs:{underline:!1,verticalOnPhone:!1}},[r("translate",{attrs:{slot:"title"},slot:"title"},[t._v("Year:")]),t._v(" "),r("input-select",{attrs:{slot:"content",options:t.years},slot:"content",model:{value:t.year,callback:function(e){t.year=e},expression:"year"}})],1),t._v(" "),r("line-chart",t._b({key:t.type},"line-chart",t.chart[t.type],!1))],1)},o=[]},2330:function(t,e,r){"use strict";r.r(e);var n=r(2331),o=r.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){r.d(e,t,(function(){return n[t]}))}(a);e.default=o.a},2331:function(t,e,r){"use strict";r(34);var n=r(1);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(9),a=r(1948),i=n(r(1949)),s=n(r(1950)),u={preload:a.getUserHistory,api:[{command:a.getUserHistory,bind:"history"}],components:{HistoryChart:s.default,HistoryTable:i.default},data:function(){return{showAs:"table",show:{bandwidth:!0,quota:!0,inode:!1},type:"volumes"}},methods:{openBreakdown:function(t){this.$router.push({name:"reseller/users/bandwidth",params:(0,o.map)(String,t)})}}};e.default=u},3384:function(t,e){},3894:function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return o}));var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("app-page",[r("app-page-section",[r("ui-form-element",{attrs:{"vertical-on-phone":!1,underline:!1}},[r("translate",{attrs:{slot:"title"},slot:"title"},[t._v("\n                Show as:\n            ")]),t._v(" "),r("div",{directives:[{name:"flex",rawName:"v-flex",value:{cross:"center"},expression:"{ cross: 'center' }"},{name:"gutter",rawName:"v-gutter",value:1,expression:"1"}],attrs:{slot:"content"},slot:"content"},[r("input-radio",{attrs:{value:"table"},model:{value:t.showAs,callback:function(e){t.showAs=e},expression:"showAs"}},[r("translate",[t._v("Table")])],1),t._v(" "),r("input-radio",{attrs:{value:"chart"},model:{value:t.showAs,callback:function(e){t.showAs=e},expression:"showAs"}},[r("translate",[t._v("Chart")])],1)],1)],1)],1),t._v(" "),"table"===t.showAs?r("history-table",t._b({attrs:{history:t.$api.history},on:{click:t.openBreakdown}},"history-table",t.show,!1)):r("history-chart",{attrs:{history:t.$api.history,type:t.type}})],1)},o=[]}}]);