webpackJsonp([1],{"9M+g":function(t,e){},Jmt5:function(t,e){},KRm3:function(t,e,s){"use strict";s.d(e,"a",function(){return a});var n=s("mtWM"),i=s.n(n),a=i.a.create({baseURL:"/",headers:{"Access-Control-Allow-Origin":"http://localhost:8080"}})},Lfzq:function(t,e,s){"use strict";var n=s("Uk0m"),i=s("tlTn"),a=s("VU/8"),r=a(n.a,i.a,!1,null,null,null);e.a=r.exports},M93x:function(t,e,s){"use strict";var n=s("xJD8"),i=s("Vq/C"),a=s("VU/8"),r=a(n.a,i.a,!1,null,null,null);e.a=r.exports},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("7+uW"),i=s("M93x"),a=s("YaEn"),r=s("sCSS"),o=s("Jmt5"),c=(s.n(o),s("9M+g"));s.n(c);n.a.config.productionTip=!1,n.a.use(r.a),new n.a({el:"#app",router:a.a,template:"<App/>",components:{App:i.a}})},TGvd:function(t,e,s){"use strict";var n=s("aEfQ"),i=s("Wa+B"),a=s("VU/8"),r=a(n.a,i.a,!1,null,null,null);e.a=r.exports},Uk0m:function(t,e,s){"use strict";var n=s("Lfzq");e.a={name:"system-info",components:{SystemInfo:n.a},props:["info","title"],data:function(){return{id:((new Date).getTime()-Math.random()).toString()}}}},"Vq/C":function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},i=[],a={render:n,staticRenderFns:i};e.a=a},"Wa+B":function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"container"},[t._m(0),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-4"},[s("system-info",{attrs:{info:t.computerSystem,title:t.csTitle}}),t._v(" "),s("system-info",{attrs:{info:t.processor,title:t.pTitle}}),t._v(" "),s("system-info",{attrs:{info:t.memory,title:t.mTitle}}),t._v(" "),s("system-info",{attrs:{info:t.powerSources,title:t.pwTitle}})],1),t._v(" "),s("div",{staticClass:"col-sm-4"},[s("system-info",{attrs:{info:t.diskStores,title:t.dsTitle}}),t._v(" "),s("system-info",{attrs:{info:t.networkInterfaces,title:t.nTitle}}),t._v(" "),s("system-info",{attrs:{info:t.displays,title:t.dTitle}}),t._v(" "),s("system-info",{attrs:{info:t.sensors,title:t.sTitle}})],1),t._v(" "),s("div",{staticClass:"col-sm-4"},[s("system-info",{attrs:{info:t.usbDevices,title:t.usbTitle}}),t._v(" "),s("system-info",{attrs:{info:t.operatingSystem,title:t.osTitle}}),t._v(" "),s("system-info",{attrs:{info:t.processes,title:t.prTitle}})],1)])])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-12"},[s("h2",{staticClass:"text-center"},[t._v("System information")])])])}],a={render:n,staticRenderFns:i};e.a=a},YaEn:function(t,e,s){"use strict";var n=s("7+uW"),i=s("/ocq"),a=s("TGvd");n.a.use(i.a),e.a=new i.a({routes:[{path:"/",component:a.a}]})},aEfQ:function(t,e,s){"use strict";var n=s("Lfzq"),i=s("KRm3");e.a={components:{SystemInfo:n.a},data:function(){return{csTitle:"Computer system",computerSystem:null,pTitle:"Processor",processor:null,mTitle:"Memory",memory:null,pwTitle:"Power sources",powerSources:null,dsTitle:"Disk stores",diskStores:null,nTitle:"Network interfaces",networkInterfaces:null,dTitle:"Displays",displays:null,sTitle:"Sensors",sensors:null,usbTitle:"USB devices",usbDevices:null,osTitle:"Operating system",operatingSystem:null,prTitle:"Processes",processes:null}},created:function(){var t=this;i.a.get("system/computerSystem").then(function(e){t.computerSystem=e.data}),i.a.get("system/processor").then(function(e){t.processor=e.data}),i.a.get("system/memory").then(function(e){t.memory=e.data}),i.a.get("system/powerSources").then(function(e){t.powerSources=e.data}),i.a.get("system/diskStores").then(function(e){t.diskStores=e.data}),i.a.get("system/networkIFs").then(function(e){t.networkInterfaces=e.data}),i.a.get("system/displays").then(function(e){t.displays=e.data}),i.a.get("system/sensors").then(function(e){t.sensors=e.data}),i.a.get("system/usbDevices").then(function(e){t.usbDevices=e.data}),i.a.get("system/OS").then(function(e){t.operatingSystem=e.data}),i.a.get("system/processes").then(function(e){t.processes=e.data})}}},tlTn:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("b-btn",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:t.id,expression:"id"}],attrs:{variant:"link"}},[t._v(t._s(t.title))]),t._v(" "),s("b-collapse",{staticClass:"mt-2",attrs:{id:t.id}},[s("b-card",[t._l(t.info,function(e,n){return e instanceof Object?t._e():s("p",{staticClass:"card-text"},[s("strong",[t._v(t._s(n))]),t._v(": "+t._s(e))])}),t._v(" "),t._l(t.info,function(e,n){return e instanceof Object?s("system-info",{attrs:{info:e,title:n}}):t._e()})],2)],1)],1)},i=[],a={render:n,staticRenderFns:i};e.a=a},xJD8:function(t,e,s){"use strict";e.a={name:"app"}}},["NHnr"]);
//# sourceMappingURL=app.9d39728eeeb2080e3fd4.js.map