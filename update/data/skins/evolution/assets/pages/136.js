(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{1755:function(t,e,r){"use strict";r.r(e);var s=r(3866),n=r(2199);for(var a in n)["default"].indexOf(a)<0&&function(t){r.d(e,t,(function(){return n[t]}))}(a);var o=r(0),i=r(3285),u=r.n(i),l=Object(o.a)(n.default,s.a,s.b,!1,null,null,null);"function"==typeof u.a&&u()(l),e.default=l.exports},2199:function(t,e,r){"use strict";r.r(e);var s=r(2200),n=r.n(s);for(var a in s)["default"].indexOf(a)<0&&function(t){r.d(e,t,(function(){return s[t]}))}(a);e.default=n.a},2200:function(t,e,r){"use strict";r(16),r(14),r(23),r(25),r(18),r(6);var s=r(1),n=r(20);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r(13),r(15);var a=s(r(36)),o=s(r(37)),i=c(r(3284)),u=c(r(9));function l(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,r=new WeakMap;return(l=function(t){return t?r:e})(t)}function c(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!==n(t)&&"function"!=typeof t)return{default:t};var r=l(e);if(r&&r.has(t))return r.get(t);var s={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if("default"!==o&&Object.prototype.hasOwnProperty.call(t,o)){var i=a?Object.getOwnPropertyDescriptor(t,o):null;i&&(i.get||i.set)?Object.defineProperty(s,o,i):s[o]=t[o]}return s.default=t,r&&r.set(t,s),s}var f,p={preload:i.getList,api:[{command:i.getList,bind:"list"}],data:function(){return{users:[],creator:""}},computed:{targetCreators:function(){return u.keys(this.$api.list)},userGroups:function(){return u.pipe(u.filter(this.hasUsers),u.map(this.getUserGroup))(this.targetCreators)}},methods:{hasUsers:function(t){return!!this.$api.list[t].length},getResellerLabel:function(t){return this.$gettextInterpolate(this.$gettext("Reseller: %{ creator }"),{creator:t})},getUserGroup:function(t){return{label:this.getResellerLabel(t),entries:this.$api.list[t],disabled:this.creator===t}},moveUsers:(f=(0,o.default)(a.default.mark((function t(){return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.moveUsers({select:this.users,creator:this.creator});case 2:i.getList(),this.checkedRows=[];case 4:case"end":return t.stop()}}),t,this)}))),function(){return f.apply(this,arguments)})},watch:{creator:function(t){var e=this;this.users=u.filter((function(r){return!e.$api.list[t].includes(r)}),this.users)}}};e.default=p},3284:function(t,e,r){"use strict";var s=r(1);Object.defineProperty(e,"__esModule",{value:!0}),e.moveUsers=e.getList=void 0;var n=s(r(78)),a="/CMD_MOVE_USERS",o=n.default.get({id:"USERS_MOVE_LIST",url:a,after:function(t){return t.getProp("data_list")}});e.getList=o;var i=n.default.select({url:a,params:{action:"moveusers"},schema:{creator:n.default.REQUIRED_STRING}});e.moveUsers=i},3285:function(t,e){},3866:function(t,e,r){"use strict";r.d(e,"a",(function(){return s})),r.d(e,"b",(function(){return n}));var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("app-page",{attrs:{id:"move-users"}},[r("ui-form-element",{attrs:{vertical:""}},[r("translate",{attrs:{slot:"title"},slot:"title"},[t._v("Select Users")]),t._v(" "),r("input-select-multiple",{attrs:{slot:"content",options:t.userGroups},slot:"content",model:{value:t.users,callback:function(e){t.users=e},expression:"users"}})],1),t._v(" "),r("ui-form-element",{attrs:{vertical:""}},[r("translate",{attrs:{slot:"title"},slot:"title"},[t._v("Select Reseller")]),t._v(" "),r("div",{directives:[{name:"flex",rawName:"v-flex"}],attrs:{slot:"content"},slot:"content"},[r("input-select",{attrs:{options:t.targetCreators},model:{value:t.creator,callback:function(e){t.creator=e},expression:"creator"}})],1)],1),t._v(" "),r("ui-button",{attrs:{slot:"footer:buttons",theme:"primary",disabled:!t.users.length||!t.creator},on:{click:t.moveUsers},slot:"footer:buttons"},[r("translate",[t._v("Move Users")])],1)],1)},n=[]}}]);