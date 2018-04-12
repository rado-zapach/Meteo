webpackJsonp([1],{"0CA3":function(t,e,s){"use strict";var a=s("KRm3"),n=s("mqZH");e.a={components:{LineChart:n.a},data:function(){return{dataProvider:null,title:"Cpu temperature",valueField:"value",categoryField:"created"}},props:["type"],created:function(){var t=new Date;t.setMonth(t.getMonth()-1),this.getData(t)},methods:{getData:function(t){var e=this;a.a.get("sensors/search/findAllByTypeAndCreatedAfterOrderByCreatedAsc",{params:{type:this.type,createdAfter:t.toISOString()}}).then(function(t){e.dataProvider=t.data._embedded.sensors})}}}},"8zWO":function(t,e,s){"use strict";var a=s("eVYT"),n=s("r/Ye"),r=s("VU/8"),i=r(a.a,n.a,!1,null,null,null);e.a=i.exports},"9M+g":function(t,e){},DrHO:function(t,e,s){"use strict";e.a={data:function(){return{id:this._uid.toString(),chart:null}},props:["value"],watch:{value:function(t){this.chart.arrows[0].setValue(t),this.chart.axes[0].setBottomText(t+" °C")}},created:function(){this.chart=window.AmCharts.makeChart(this.id,{type:"gauge",theme:"light",axes:[{axisThickness:1,axisAlpha:.2,tickAlpha:.2,valueInterval:10,bands:[{color:"#84b761",endValue:40,startValue:0},{color:"#fdd400",endValue:70,startValue:40},{color:"#cc4748",endValue:100,startValue:70}],bottomTextYOffset:-20,endValue:100}],arrows:[{}]})}}},IPNx:function(t,e,s){"use strict";var a=s("0CA3"),n=s("rOKW"),r=s("VU/8"),i=r(a.a,n.a,!1,null,null,null);e.a=i.exports},Jmt5:function(t,e){},KRm3:function(t,e,s){"use strict";s.d(e,"a",function(){return r});var a=s("mtWM"),n=s.n(a),r=n.a.create({baseURL:"http://localhost:8088",headers:{"Access-Control-Allow-Origin":"http://localhost:8080"}})},Lfzq:function(t,e,s){"use strict";var a=s("Uk0m"),n=s("tlTn"),r=s("VU/8"),i=r(a.a,n.a,!1,null,null,null);e.a=i.exports},M93x:function(t,e,s){"use strict";var a=s("xJD8"),n=s("Vq/C"),r=s("VU/8"),i=r(a.a,n.a,!1,null,null,null);e.a=i.exports},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),n=s("M93x"),r=s("YaEn"),i=s("sCSS"),o=s("Jmt5"),c=(s.n(o),s("9M+g")),l=(s.n(c),s("wDpx")),u=s.n(l),d=s("9EFi"),f=s.n(d),v=s("KvFD"),m=s.n(v);a.a.config.productionTip=!1,a.a.use(i.a),a.a.use(u.a),a.a.use(f.a),a.a.use(m.a),new a.a({el:"#app",router:r.a,template:"<App/>",components:{App:n.a}})},NUZA:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticStyle:{width:"100%",height:"300px"},attrs:{id:t.id}})},n=[],r={render:a,staticRenderFns:n};e.a=r},O4qg:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticStyle:{width:"100%",height:"300px"},attrs:{id:t.id}})},n=[],r={render:a,staticRenderFns:n};e.a=r},TGvd:function(t,e,s){"use strict";var a=s("aEfQ"),n=s("Wa+B"),r=s("VU/8"),i=r(a.a,n.a,!1,null,null,null);e.a=i.exports},Uk0m:function(t,e,s){"use strict";var a=s("Lfzq");e.a={name:"system-info",components:{SystemInfo:a.a},props:["info","title"],data:function(){return{id:this._uid.toString()}}}},UyH6:function(t,e,s){"use strict";var a=s("DrHO"),n=s("NUZA"),r=s("VU/8"),i=r(a.a,n.a,!1,null,null,null);e.a=i.exports},"Vq/C":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},n=[],r={render:a,staticRenderFns:n};e.a=r},"Wa+B":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"container"},[t._m(0),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-4"},[s("system-info",{attrs:{info:t.computerSystem,title:t.csTitle}}),t._v(" "),s("system-info",{attrs:{info:t.processor,title:t.pTitle}}),t._v(" "),s("system-info",{attrs:{info:t.memory,title:t.mTitle}}),t._v(" "),s("system-info",{attrs:{info:t.powerSources,title:t.pwTitle}})],1),t._v(" "),s("div",{staticClass:"col-sm-4"},[s("system-info",{attrs:{info:t.diskStores,title:t.dsTitle}}),t._v(" "),s("system-info",{attrs:{info:t.networkInterfaces,title:t.nTitle}}),t._v(" "),s("system-info",{attrs:{info:t.displays,title:t.dTitle}}),t._v(" "),s("system-info",{attrs:{info:t.sensors,title:t.sTitle}})],1),t._v(" "),s("div",{staticClass:"col-sm-4"},[s("system-info",{attrs:{info:t.usbDevices,title:t.usbTitle}}),t._v(" "),s("system-info",{attrs:{info:t.operatingSystem,title:t.osTitle}}),t._v(" "),s("system-info",{attrs:{info:t.processes,title:t.prTitle}})],1)]),t._v(" "),s("line-graph",{attrs:{type:"t-cpu"}}),t._v(" "),s("cpu-temperature-gauge")],1)])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-12"},[s("h2",{staticClass:"text-center"},[t._v("System information")])])])}],r={render:a,staticRenderFns:n};e.a=r},YaEn:function(t,e,s){"use strict";var a=s("7+uW"),n=s("/ocq"),r=s("TGvd");a.a.use(n.a),e.a=new n.a({routes:[{path:"/",component:r.a}]})},aEfQ:function(t,e,s){"use strict";var a=s("Lfzq"),n=s("KRm3"),r=s("IPNx"),i=s("8zWO");e.a={components:{SystemInfo:a.a,LineGraph:r.a,CpuTemperatureGauge:i.a},data:function(){return{csTitle:"Computer system",computerSystem:null,pTitle:"Processor",processor:null,mTitle:"Memory",memory:null,pwTitle:"Power sources",powerSources:null,dsTitle:"Disk stores",diskStores:null,nTitle:"Network interfaces",networkInterfaces:null,dTitle:"Displays",displays:null,sTitle:"Sensors",sensors:null,usbTitle:"USB devices",usbDevices:null,osTitle:"Operating system",operatingSystem:null,prTitle:"Processes",processes:null}},created:function(){var t=this;n.a.get("system/computerSystem").then(function(e){t.computerSystem=e.data}),n.a.get("system/processor").then(function(e){t.processor=e.data}),n.a.get("system/memory").then(function(e){t.memory=e.data}),n.a.get("system/powerSources").then(function(e){t.powerSources=e.data}),n.a.get("system/diskStores").then(function(e){t.diskStores=e.data}),n.a.get("system/networkIFs").then(function(e){t.networkInterfaces=e.data}),n.a.get("system/displays").then(function(e){t.displays=e.data}),n.a.get("system/sensors").then(function(e){t.sensors=e.data}),n.a.get("system/usbDevices").then(function(e){t.usbDevices=e.data}),n.a.get("system/OS").then(function(e){t.operatingSystem=e.data}),n.a.get("system/processes").then(function(e){t.processes=e.data})}}},eVYT:function(t,e,s){"use strict";var a=s("KRm3"),n=s("UyH6");e.a={components:{GaugeChart:n.a},data:function(){return{value:0}},created:function(){var t=this;setInterval(function(){t.getData()},2e3)},methods:{getData:function(t){var e=this;a.a.get("system/sensors").then(function(t){e.value=t.data.cpuTemperature})}}}},mqZH:function(t,e,s){"use strict";var a=s("vhzz"),n=s("O4qg"),r=s("VU/8"),i=r(a.a,n.a,!1,null,null,null);e.a=i.exports},"r/Ye":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement;return(t._self._c||e)("gauge-chart",{attrs:{value:t.value}})},n=[],r={render:a,staticRenderFns:n};e.a=r},rOKW:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement;return(t._self._c||e)("line-chart",{attrs:{dataProvider:t.dataProvider,title:t.title,valueField:t.valueField,categoryField:t.categoryField}})},n=[],r={render:a,staticRenderFns:n};e.a=r},tlTn:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("b-btn",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:t.id,expression:"id"}],attrs:{variant:"link"}},[t._v(t._s(t.title))]),t._v(" "),s("b-collapse",{staticClass:"mt-2",attrs:{id:t.id}},[s("b-card",[t._l(t.info,function(e,a){return e instanceof Object?t._e():s("p",{staticClass:"card-text"},[s("strong",[t._v(t._s(a))]),t._v(": "+t._s(e))])}),t._v(" "),t._l(t.info,function(e,a){return e instanceof Object?s("system-info",{attrs:{info:e,title:a}}):t._e()})],2)],1)],1)},n=[],r={render:a,staticRenderFns:n};e.a=r},vhzz:function(t,e,s){"use strict";e.a={data:function(){return{id:this._uid.toString(),chart:null}},props:["dataProvider","title","valueField","categoryField"],watch:{dataProvider:function(t){null==this.chart.dataProvider?this.chart.dataProvider=t:this.chart.dataProvider.push.apply(this.chart.dataProvider,t),this.chart.validateData()}},created:function(){this.chart=window.AmCharts.makeChart(this.id,{type:"serial",chartCursor:{categoryBalloonDateFormat:"DD.MM.YYYY JJ:NN:SS"},graphs:[{title:this.title,valueField:this.valueField,connect:!1}],categoryField:this.categoryField,dataProvider:this.dataProvider,categoryAxis:{parseDates:!0,minPeriod:"5mm"}})}}},xJD8:function(t,e,s){"use strict";e.a={name:"app"}}},["NHnr"]);
//# sourceMappingURL=app.8f00fc306de0e2763fb0.js.map