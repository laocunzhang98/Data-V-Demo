(function(e){function a(a){for(var n,s,o=a[0],i=a[1],u=a[2],m=0,v=[];m<o.length;m++)s=o[m],Object.prototype.hasOwnProperty.call(l,s)&&l[s]&&v.push(l[s][0]),l[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);c&&c(a);while(v.length)v.shift()();return r.push.apply(r,u||[]),t()}function t(){for(var e,a=0;a<r.length;a++){for(var t=r[a],n=!0,o=1;o<t.length;o++){var i=t[o];0!==l[i]&&(n=!1)}n&&(r.splice(a--,1),e=s(s.s=t[0]))}return e}var n={},l={app:0},r=[];function s(a){if(n[a])return n[a].exports;var t=n[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=e,s.c=n,s.d=function(e,a,t){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)s.d(t,n,function(a){return e[a]}.bind(null,n));return t},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=a,o=o.slice();for(var u=0;u<o.length;u++)a(o[u]);var c=i;r.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("56d7")},"034f":function(e,a,t){"use strict";var n=t("85ec"),l=t.n(n);l.a},"0367":function(e,a,t){"use strict";var n=t("44d8"),l=t.n(n);l.a},"21bb":function(e,a,t){"use strict";var n=t("2dad"),l=t.n(n);l.a},"2dad":function(e,a,t){},"44d8":function(e,a,t){},5597:function(e,a,t){"use strict";var n=t("66f0"),l=t.n(n);l.a},"56d7":function(e,a,t){"use strict";t.r(a);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("2b0e"),l=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},r=[],s={},o=s,i=(t("034f"),t("2877")),u=Object(i["a"])(o,l,r,!1,null,null,null),c=u.exports,m=t("8c4f"),v=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"home"},[t("top-view"),t("sales-view"),t("bottom-view"),t("map-view")],1)},p=[],d=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"top-view"},[t("el-row",{attrs:{gutter:20}},[t("el-col",{attrs:{span:6}},[t("el-card",{attrs:{shadow:"hover"}},[t("total-sales")],1)],1),t("el-col",{attrs:{span:6}},[t("el-card",{attrs:{shadow:"hover"}},[t("total-orders")],1)],1),t("el-col",{attrs:{span:6}},[t("el-card",{attrs:{shadow:"hover"}},[t("today-users")],1)],1),t("el-col",{attrs:{span:6}},[t("el-card",{attrs:{shadow:"hover"}},[t("total-users")],1)],1)],1)],1)},f=[],y=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("common-card",{attrs:{title:"累计销售额",value:"￥32,039,165"},scopedSlots:e._u([{key:"footer",fn:function(){return[t("span",[e._v("昨日销售额")]),t("span",{staticClass:"emphasis"},[e._v("￥32,039,165")])]},proxy:!0}])},[[t("div",{staticClass:"compare-wraper"},[t("div",{staticClass:"compare"},[t("span",[e._v("日同比:")]),t("span",{staticClass:"emphasis"},[e._v("7.33%")]),t("div",{staticClass:"increase"})]),t("div",{staticClass:"compare"},[t("span",[e._v("月同比:")]),t("span",{staticClass:"emphasis"},[e._v("7.33%")]),t("div",{staticClass:"decrease"})])])]],2)],1)},h=[],b=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("div",{staticClass:"title"},[e._v(e._s(e.title))]),t("div",{staticClass:"value"},[e._v(e._s(e.value))]),t("div",{staticClass:"chart"},[e._t("default")],2),t("div",{staticClass:"line"}),t("div",{staticClass:"total"},[e._t("footer")],2)])},w=[],g={props:{title:String,value:String}},x=g,_=(t("8e18"),t("67ee"),Object(i["a"])(x,b,w,!1,null,"593371fb",null)),C=_.exports,S={components:{CommonCard:C}},k={mixins:[S]},T=k,O=(t("a21e"),Object(i["a"])(T,y,h,!1,null,"caf3f508",null)),j=O.exports,E=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("common-card",{attrs:{title:"累计订单量",value:"1,212,002"},scopedSlots:e._u([{key:"footer",fn:function(){return[t("span",[e._v("昨日订单量")]),t("span",{staticClass:"emphasis"},[e._v("￥39,165")])]},proxy:!0}])},[[t("v-chart",{attrs:{options:e.getOptions()}})]],2)],1)},$=[],z={mixins:[S],mounted:function(){},methods:{getOptions:function(){return{xAxis:{type:"category",show:!1,boundaryGap:!1},yAxis:{show:!1},series:[{type:"line",data:[628,432,220,534,790,438,220,328,532,328,843,690,530,220,620],lineStyle:{width:0},itemStyle:{opacity:0},areaStyle:{color:"purple"},smooth:!0}],grid:{top:0,bottom:0,right:0,left:0}}}}},D=z,A=(t("9e73"),Object(i["a"])(D,E,$,!1,null,"10884c47",null)),B=A.exports,P=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("common-card",{attrs:{title:"累计用户数",value:"1,081,014"},scopedSlots:e._u([{key:"footer",fn:function(){return[t("div",{staticClass:"total-user-footer"},[t("span",[e._v("日同比")]),t("span",{staticClass:"emphasis"},[e._v("8.14%")]),t("div",{staticClass:"increase"}),t("span",{staticClass:"month"},[e._v("月同比")]),t("span",{staticClass:"emphasis"},[e._v("3.14%")]),t("div",{staticClass:"decrease"})])]},proxy:!0}])},[[t("v-chart",{attrs:{options:e.getOptions()}})]],2)},G=[],M={mixins:[S],mounted:function(){},methods:{getOptions:function(){return{grid:{top:0,bottom:0,left:0,right:0},xAxis:{type:"value",show:!1},yAxis:{type:"category",show:!1},series:[{type:"bar",data:[200],stack:"总量",barWidth:"20%",itemStyle:{color:"#45c946"}},{type:"bar",data:[250],stack:"总量",itemStyle:{color:"#eee"}},{type:"custom",data:[200],stack:"总量",renderItem:function(e,a){console.log(e);var t=a.value(0),n=a.coord([t,0]);return{type:"group",position:n,children:[{type:"path",shape:{d:"M1024 255.996 511.971 767.909 0 255.996 1024 255.996z",x:-5,y:-20,width:10,height:10,layout:"cover"},style:{fill:"#45c946"}},{type:"path",shape:{d:"M0 767.909l512.029-511.913L1024 767.909 0 767.909z",x:-5,y:10,width:10,height:10,layout:"cover"},style:{fill:"#45c946"}}]}}}]}}}},L=M,I=(t("675b"),Object(i["a"])(L,P,G,!1,null,"45e583f4",null)),J=I.exports,U=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("common-card",{attrs:{title:"今日用户交易量",value:"81,024"},scopedSlots:e._u([{key:"footer",fn:function(){return[t("span",[e._v("退货率")]),t("span",{staticClass:"emphasis"},[e._v("5.14%")])]},proxy:!0}])},[[t("div",{attrs:{id:"today-users-chart"}})]],2)],1)},W=[],H={mixins:[S],mounted:function(){var e=document.getElementById("today-users-chart");if(e){var a=this.$echarts.init(e);a.setOption({color:["#3398DB"],series:[{type:"bar",data:[418,82,288,334,390,338,220,150,82,280,134,290,330,150],barWidth:"60%"}],xAxis:{type:"category",data:["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00","12:00","13:00"],show:!1},yAxis:{show:!1},grid:{top:0,bottom:0,left:0,right:0}})}}},V=H,N=(t("93fe"),Object(i["a"])(V,U,W,!1,null,"1b193ab3",null)),Y=N.exports,F={components:{TotalSales:j,TotalOrders:B,TotalUsers:J,TodayUsers:Y}},K=F,Z=Object(i["a"])(K,d,f,!1,null,null,null),q=Z.exports,Q=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"sales-view"},[t("el-card",{attrs:{shadow:"hover"},scopedSlots:e._u([{key:"header",fn:function(){return[t("div",{staticClass:"menu-wrapper",attrs:{size:"small"}},[t("el-menu",{staticClass:"sales-view-menu",attrs:{mode:"horizontal","default-active":"1"}},[t("el-menu-item",{attrs:{index:"1"}},[e._v("销售额")]),t("el-menu-item",{attrs:{index:"2"}},[e._v("访问量")])],1),t("div",{staticClass:"menu-right"},[t("el-radio-group",{attrs:{size:"small"},model:{value:e.radioSelect,callback:function(a){e.radioSelect=a},expression:"radioSelect"}},[t("el-radio-button",{attrs:{label:"今日"}}),t("el-radio-button",{attrs:{label:"本周"}}),t("el-radio-button",{attrs:{label:"本月"}}),t("el-radio-button",{attrs:{label:"今年"}})],1),t("el-date-picker",{attrs:{type:"daterange","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":e.pickerOptions,size:"small"},model:{value:e.date,callback:function(a){e.date=a},expression:"date"}})],1)],1)]},proxy:!0}])},[[t("div",{staticClass:"sales-view-chart-wrapper"},[t("v-chart",{attrs:{options:e.chartOption}}),t("div",{staticClass:"sales-view-list"},[t("div",{staticClass:"sales-view-title"},[e._v("排行榜")]),e._l(e.rankData,(function(a){return t("div",{key:a.no,staticClass:"list-item"},[t("div",{staticClass:"list-item-no",class:+a.no<=3?"top-no":""},[e._v(e._s(a.no))]),t("div",{staticClass:"list-item-name"},[e._v(e._s(a.name))]),t("div",{staticClass:"list-item-money"},[e._v(e._s(a.money))])])}))],2)],1)]],2)],1)},R=[],X={data:function(){return{radioSelect:"今日",date:null,pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(e){var a=new Date,t=new Date;t.setTime(t.getTime()-6048e5),e.$emit("pick",[t,a])}},{text:"最近一个月",onClick:function(e){var a=new Date,t=new Date;t.setTime(t.getTime()-2592e6),e.$emit("pick",[t,a])}},{text:"最近三个月",onClick:function(e){var a=new Date,t=new Date;t.setTime(t.getTime()-7776e6),e.$emit("pick",[t,a])}}]},chartOption:{title:{text:"年度销售额",textStyle:{fontSize:12,color:"#666"},left:25,top:20},xAxis:{type:"category",data:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],axisTick:{alignWithLabel:!0,lineStyle:{color:"#999"}},axisLine:{lineStyle:{color:"#999"}},axisLabel:{color:"#333"}},yAxis:{axisLine:{show:!1},axisTick:{show:!1},splitLine:{lineStyle:{type:"dotted",color:"#eee"}}},series:[{name:"sales",type:"bar",barWidth:"35%",data:[200,250,300,350,300,250,200,200,250,300,350,300,250,200],itemStyle:{color:"#3398DB"}}],grid:{top:70,left:60,right:60,bottom:50}},rankData:[{no:1,name:"麦当劳",money:"323.234"},{no:2,name:"麦当劳",money:"323.234"},{no:3,name:"麦当劳",money:"323.234"},{no:4,name:"麦当劳",money:"323.234"},{no:5,name:"麦当劳",money:"323.234"},{no:6,name:"麦当劳",money:"323.234"},{no:7,name:"麦当劳",money:"323.234"}]}}},ee=X,ae=(t("0367"),Object(i["a"])(ee,Q,R,!1,null,"4e8916b2",null)),te=ae.exports,ne=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"map-view"},[t("div",{staticClass:"left"},[t("bmap-scatter")],1),t("div",{staticClass:"right"},[t("el-card",{attrs:{shadow:"hover"},scopedSlots:e._u([{key:"header",fn:function(){return[t("div",{staticClass:"title"},[e._v("用户月同比增长")])]},proxy:!0}])},[[t("div",{staticClass:"chart-wrapper"},[e._v("1111")])]],2),t("el-card",{attrs:{shadow:"hover"},scopedSlots:e._u([{key:"header",fn:function(){return[t("div",{staticClass:"title"},[e._v("热门搜索")])]},proxy:!0}])},[[t("div",{staticClass:"chart-wrapper"},[e._v("xxxxx")])]],2)],1)])},le=[],re=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ve-bmap",{attrs:{settings:e.chartSettings,title:e.title,tooltip:{},series:e.chartSeries,height:"100%"}})},se=[],oe=(t("99af"),t("4160"),t("fb6a"),t("b0c0"),t("159b"),t("2909")),ie=function(e,a){var t=[];return e.forEach((function(e){var n=e.name,l=e.value,r=a[n];t.push({name:n,value:[].concat(Object(oe["a"])(r),[l])})})),t},ue={data:function(){return{title:{text:"慕课外卖销售数据大盘",subtext:"销售趋势统计",sublink:"https://www.imooc.com",left:"center"},chartSettings:{key:"G1LFyjrNGIkns5OfpZnrCGAKxpycPLwb",bmap:{center:[104.114129,37.550339],zoom:5,roam:!1,mapStyle:{styleJson:[{featureType:"water",elementType:"all",stylers:{color:"#d1d1d1"}},{featureType:"land",elementType:"all",stylers:{color:"#f3f3f3"}},{featureType:"railway",elementType:"all",stylers:{visibility:"off"}},{featureType:"highway",elementType:"all",stylers:{color:"#fdfdfd"}},{featureType:"highway",elementType:"labels",stylers:{visibility:"off"}},{featureType:"arterial",elementType:"geometry",stylers:{color:"#fefefe"}},{featureType:"arterial",elementType:"geometry.fill",stylers:{color:"#fefefe"}},{featureType:"poi",elementType:"all",stylers:{visibility:"off"}},{featureType:"green",elementType:"all",stylers:{visibility:"off"}},{featureType:"subway",elementType:"all",stylers:{visibility:"off"}},{featureType:"manmade",elementType:"all",stylers:{color:"#d1d1d1"}},{featureType:"local",elementType:"all",stylers:{color:"#d1d1d1"}},{featureType:"arterial",elementType:"labels",stylers:{visibility:"off"}},{featureType:"boundary",elementType:"all",stylers:{color:"#fefefe"}},{featureType:"building",elementType:"all",stylers:{color:"#d1d1d1"}},{featureType:"label",elementType:"labels.text.fill",stylers:{color:"#999999"}}]}}},chartSeries:[]}},watch:{mapData:function(){var e=this.mapData,a=e.data,t=e.geo;this.chartSeries=[{name:"销售额",type:"scatter",coordinateSystem:"bmap",data:ie(a,t),encode:{value:2},itemStyle:{color:"purple"},symbolSize:function(e){return e[2]/10},label:{show:!1,position:"right",formatter:function(e){return"".concat(e.data.name," - ").concat(e.data.value[2])}},emphasis:{label:{show:!0}}},{name:"Top 10",type:"effectScatter",coordinateSystem:"bmap",data:ie(a.sort((function(e,a){return a.value-e.value})),t).slice(0,10),symbolSize:function(e){return e[2]/10},encode:{value:2},label:{formatter:function(e){return"".concat(e.data.name," - ").concat(e.data.value[2])},position:"right",show:!0},hoverAnimation:!0,rippleEffect:{brushType:"stroke"},itemStyle:{color:"purple",shadowBlur:10,shadowColor:"#333"}}]}}},ce=ue,me=Object(i["a"])(ce,re,se,!1,null,null,null),ve=me.exports,pe={components:{BmapScatter:ve}},de=pe,fe=(t("5597"),Object(i["a"])(de,ne,le,!1,null,"e62e994e",null)),ye=fe.exports,he=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"bottom-view"},[t("div",{staticClass:"view"},[t("el-card",{attrs:{shadow:"hover"},scopedSlots:e._u([{key:"header",fn:function(){return[t("div",{staticClass:"title-wrapper"},[e._v("关键词搜索")])]},proxy:!0}])},[[t("div",{staticClass:"chart-wrapper"},[t("div",{staticClass:"chart-inner"},[t("div",{staticClass:"chart"},[t("div",{staticClass:"chart-title"},[e._v("用户搜索数")]),t("div",{staticClass:"chart-data"},[e._v("93,644")]),t("v-chart",{attrs:{options:e.searchUserOption}})],1),t("div",{staticClass:"chart"},[t("div",{staticClass:"chart-title"},[e._v("用户搜索数")]),t("div",{staticClass:"chart-data"},[e._v("192,782")]),t("v-chart",{attrs:{options:e.searchUserOption}})],1)]),t("div",{staticClass:"table-wrapper"},[t("el-table",{attrs:{data:e.tableData}},[t("el-table-column",{attrs:{prop:"rank",label:"排名",width:"180"}}),t("el-table-column",{attrs:{prop:"keyword",label:"关键词",width:"180"}}),t("el-table-column",{attrs:{prop:"count",label:"总搜索量"}}),t("el-table-column",{attrs:{prop:"rank",label:"搜索用户数"}})],1),t("el-pagination",{attrs:{layout:"prev, pager, next",background:"","page-size":4,total:100},on:{"current-change":e.handleCurrentChange}})],1)])]],2)],1),t("div",{staticClass:"view"},[t("el-card",{attrs:{shadow:"hover"},scopedSlots:e._u([{key:"header",fn:function(){return[t("div",{staticClass:"title-wrapper"},[t("div",{staticClass:"title"},[e._v("分类销售排行")]),t("div",{staticClass:"radio-wrapper"},[t("el-radio-group",{attrs:{size:"small"},model:{value:e.radioSelect,callback:function(a){e.radioSelect=a},expression:"radioSelect"}},[t("el-radio-button",{attrs:{label:"品类"}}),t("el-radio-button",{attrs:{label:"商品"}})],1)],1)]),[t("div",{staticClass:"chart-wrapper"},[t("v-chart",{attrs:{options:e.categoryOptions}})],1)]]},proxy:!0}])})],1)])},be=[],we={data:function(){return{searchUserOption:{xAxis:{type:"category",boundaryGap:!1},yAxis:{show:!1},series:[{type:"line",areaStyle:{color:"rgba(95,187,255,.5)"},data:[100,150,200,250,200,250,100,250],lineStyle:{color:"rgb(95,187,255)"},itemStyle:{opacity:0},smooth:!0}],grid:{top:0,right:0,left:0,bottom:0}},searchNumberOption:{},tableData:[{id:1,rank:1,keyword:"北京",count:100,users:90,range:"90%"},{id:2,rank:2,keyword:"北京",count:100,users:90,range:"90%"},{id:3,rank:3,keyword:"北京",count:100,users:90,range:"90%"},{id:4,rank:4,keyword:"北京",count:100,users:90,range:"90%"}],radioSelect:"品类",categoryOptions:{}}},mounted:function(){this.renderPieChart()},methods:{handleCurrentChange:function(e){console.log(e)},renderPieChart:function(){var e=[{legendname:"粉面粥店",value:67,percent:"15.40%",name:"粉面粥店 | 15.40%"},{legendname:"简餐便当",value:97,percent:"22.40%",name:"简餐便当 | 22.40%"},{legendname:"汉堡披萨",value:92,percent:"21.15%",name:"汉堡披萨 | 21.15%"}];this.categoryOptions={title:[{text:"品类分布",textStyle:{fontSize:14,color:"#666"},left:20,top:20},{text:"累计订单量",subtext:320,x:"34.5%",y:"42.5%",textStyle:{fontSize:14,color:"#999"},subtextStyle:{fontSize:28,color:"#333"},textAlign:"center"}],series:[{name:"品类分布",type:"pie",data:e,label:{normal:{show:!0,position:"outter",formatter:function(e){return e.data.legendname}}},center:["35%","50%"],radius:["45%","60%"],itemStyle:{borderWidth:4,borderColor:"#fff"}}],legend:{type:"scroll",orient:"vertical",height:245,left:"70%",top:"middle",textStyle:{color:"#BcBcBc"}},tooltip:{trigger:"item",formatter:function(e){var a=e.seriesName+"<br/>"+e.marker+e.data.legendname+"<br/>"+e.marker+"数量:"+e.data.value+"<br/>"+e.marker+"占比:"+e.data.percent;return a}}}}}},ge=we,xe=(t("7dc2"),Object(i["a"])(ge,he,be,!1,null,"21d74070",null)),_e=xe.exports,Ce={name:"Home",components:{TopView:q,SalesView:te,MapView:ye,BottomView:_e}},Se=Ce,ke=(t("21bb"),Object(i["a"])(Se,v,p,!1,null,null,null)),Te=ke.exports,Oe=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-chart",{attrs:{options:e.options}})},je=[],Ee=(t("a00a"),[{name:"海门",value:9},{name:"鄂尔多斯",value:12},{name:"招远",value:12},{name:"舟山",value:12},{name:"齐齐哈尔",value:14},{name:"盐城",value:15},{name:"赤峰",value:16},{name:"青岛",value:18},{name:"乳山",value:18},{name:"金昌",value:19},{name:"泉州",value:21},{name:"莱西",value:21},{name:"日照",value:21},{name:"胶南",value:22},{name:"南通",value:23},{name:"拉萨",value:24},{name:"云浮",value:24},{name:"梅州",value:25},{name:"文登",value:25},{name:"上海",value:25},{name:"攀枝花",value:25},{name:"威海",value:25},{name:"承德",value:25},{name:"厦门",value:26},{name:"汕尾",value:26},{name:"潮州",value:26},{name:"丹东",value:27},{name:"太仓",value:27},{name:"曲靖",value:27},{name:"烟台",value:28},{name:"福州",value:29},{name:"瓦房店",value:30},{name:"即墨",value:30},{name:"抚顺",value:31},{name:"玉溪",value:31},{name:"张家口",value:31},{name:"阳泉",value:31},{name:"莱州",value:32},{name:"湖州",value:32},{name:"汕头",value:32},{name:"昆山",value:33},{name:"宁波",value:33},{name:"湛江",value:33},{name:"揭阳",value:34},{name:"荣成",value:34},{name:"连云港",value:35},{name:"葫芦岛",value:35},{name:"常熟",value:36},{name:"东莞",value:36},{name:"河源",value:36},{name:"淮安",value:36},{name:"泰州",value:36},{name:"南宁",value:37},{name:"营口",value:37},{name:"惠州",value:37},{name:"江阴",value:37},{name:"蓬莱",value:37},{name:"韶关",value:38},{name:"嘉峪关",value:38},{name:"广州",value:38},{name:"延安",value:38},{name:"太原",value:39},{name:"清远",value:39},{name:"中山",value:39},{name:"昆明",value:39},{name:"寿光",value:40},{name:"盘锦",value:40},{name:"长治",value:41},{name:"深圳",value:41},{name:"珠海",value:42},{name:"宿迁",value:43},{name:"咸阳",value:43},{name:"铜川",value:44},{name:"平度",value:44},{name:"佛山",value:44},{name:"海口",value:44},{name:"江门",value:45},{name:"章丘",value:45},{name:"肇庆",value:46},{name:"大连",value:47},{name:"临汾",value:47},{name:"吴江",value:47},{name:"石嘴山",value:49},{name:"沈阳",value:50},{name:"苏州",value:50},{name:"茂名",value:50},{name:"嘉兴",value:51},{name:"长春",value:51},{name:"胶州",value:52},{name:"银川",value:52},{name:"张家港",value:52},{name:"三门峡",value:53},{name:"锦州",value:54},{name:"南昌",value:54},{name:"柳州",value:54},{name:"三亚",value:54},{name:"自贡",value:56},{name:"吉林",value:56},{name:"阳江",value:57},{name:"泸州",value:57},{name:"西宁",value:57},{name:"宜宾",value:58},{name:"呼和浩特",value:58},{name:"成都",value:58},{name:"大同",value:58},{name:"镇江",value:59},{name:"桂林",value:59},{name:"张家界",value:59},{name:"宜兴",value:59},{name:"北海",value:60},{name:"西安",value:61},{name:"金坛",value:62},{name:"东营",value:62},{name:"牡丹江",value:63},{name:"遵义",value:63},{name:"绍兴",value:63},{name:"扬州",value:64},{name:"常州",value:64},{name:"潍坊",value:65},{name:"重庆",value:66},{name:"台州",value:67},{name:"南京",value:67},{name:"滨州",value:70},{name:"贵阳",value:71},{name:"无锡",value:71},{name:"本溪",value:71},{name:"克拉玛依",value:72},{name:"渭南",value:72},{name:"马鞍山",value:72},{name:"宝鸡",value:72},{name:"焦作",value:75},{name:"句容",value:75},{name:"北京",value:79},{name:"徐州",value:79},{name:"衡水",value:80},{name:"包头",value:80},{name:"绵阳",value:80},{name:"乌鲁木齐",value:84},{name:"枣庄",value:84},{name:"杭州",value:84},{name:"淄博",value:85},{name:"鞍山",value:86},{name:"溧阳",value:86},{name:"库尔勒",value:86},{name:"安阳",value:90},{name:"开封",value:90},{name:"济南",value:92},{name:"德阳",value:93},{name:"温州",value:95},{name:"九江",value:96},{name:"邯郸",value:98},{name:"临安",value:99},{name:"兰州",value:99},{name:"沧州",value:100},{name:"临沂",value:103},{name:"南充",value:104},{name:"天津",value:105},{name:"富阳",value:106},{name:"泰安",value:112},{name:"诸暨",value:112},{name:"郑州",value:113},{name:"哈尔滨",value:114},{name:"聊城",value:116},{name:"芜湖",value:117},{name:"唐山",value:119},{name:"平顶山",value:119},{name:"邢台",value:119},{name:"德州",value:120},{name:"济宁",value:120},{name:"荆州",value:127},{name:"宜昌",value:130},{name:"义乌",value:132},{name:"丽水",value:133},{name:"洛阳",value:134},{name:"秦皇岛",value:136},{name:"株洲",value:143},{name:"石家庄",value:147},{name:"莱芜",value:148},{name:"常德",value:152},{name:"保定",value:153},{name:"湘潭",value:154},{name:"金华",value:157},{name:"岳阳",value:169},{name:"长沙",value:175},{name:"衢州",value:177},{name:"廊坊",value:193},{name:"菏泽",value:194},{name:"合肥",value:229},{name:"武汉",value:273},{name:"大庆",value:279}]),$e={"海门":[121.15,31.89],"鄂尔多斯":[109.781327,39.608266],"招远":[120.38,37.35],"舟山":[122.207216,29.985295],"齐齐哈尔":[123.97,47.33],"盐城":[120.13,33.38],"赤峰":[118.87,42.28],"青岛":[120.33,36.07],"乳山":[121.52,36.89],"金昌":[102.188043,38.520089],"泉州":[118.58,24.93],"莱西":[120.53,36.86],"日照":[119.46,35.42],"胶南":[119.97,35.88],"南通":[121.05,32.08],"拉萨":[91.11,29.97],"云浮":[112.02,22.93],"梅州":[116.1,24.55],"文登":[122.05,37.2],"上海":[121.48,31.22],"攀枝花":[101.718637,26.582347],"威海":[122.1,37.5],"承德":[117.93,40.97],"厦门":[118.1,24.46],"汕尾":[115.375279,22.786211],"潮州":[116.63,23.68],"丹东":[124.37,40.13],"太仓":[121.1,31.45],"曲靖":[103.79,25.51],"烟台":[121.39,37.52],"福州":[119.3,26.08],"瓦房店":[121.979603,39.627114],"即墨":[120.45,36.38],"抚顺":[123.97,41.97],"玉溪":[102.52,24.35],"张家口":[114.87,40.82],"阳泉":[113.57,37.85],"莱州":[119.942327,37.177017],"湖州":[120.1,30.86],"汕头":[116.69,23.39],"昆山":[120.95,31.39],"宁波":[121.56,29.86],"湛江":[110.359377,21.270708],"揭阳":[116.35,23.55],"荣成":[122.41,37.16],"连云港":[119.16,34.59],"葫芦岛":[120.836932,40.711052],"常熟":[120.74,31.64],"东莞":[113.75,23.04],"河源":[114.68,23.73],"淮安":[119.15,33.5],"泰州":[119.9,32.49],"南宁":[108.33,22.84],"营口":[122.18,40.65],"惠州":[114.4,23.09],"江阴":[120.26,31.91],"蓬莱":[120.75,37.8],"韶关":[113.62,24.84],"嘉峪关":[98.289152,39.77313],"广州":[113.23,23.16],"延安":[109.47,36.6],"太原":[112.53,37.87],"清远":[113.01,23.7],"中山":[113.38,22.52],"昆明":[102.73,25.04],"寿光":[118.73,36.86],"盘锦":[122.070714,41.119997],"长治":[113.08,36.18],"深圳":[114.07,22.62],"珠海":[113.52,22.3],"宿迁":[118.3,33.96],"咸阳":[108.72,34.36],"铜川":[109.11,35.09],"平度":[119.97,36.77],"佛山":[113.11,23.05],"海口":[110.35,20.02],"江门":[113.06,22.61],"章丘":[117.53,36.72],"肇庆":[112.44,23.05],"大连":[121.62,38.92],"临汾":[111.5,36.08],"吴江":[120.63,31.16],"石嘴山":[106.39,39.04],"沈阳":[123.38,41.8],"苏州":[120.62,31.32],"茂名":[110.88,21.68],"嘉兴":[120.76,30.77],"长春":[125.35,43.88],"胶州":[120.03336,36.264622],"银川":[106.27,38.47],"张家港":[120.555821,31.875428],"三门峡":[111.19,34.76],"锦州":[121.15,41.13],"南昌":[115.89,28.68],"柳州":[109.4,24.33],"三亚":[109.511909,18.252847],"自贡":[104.778442,29.33903],"吉林":[126.57,43.87],"阳江":[111.95,21.85],"泸州":[105.39,28.91],"西宁":[101.74,36.56],"宜宾":[104.56,29.77],"呼和浩特":[111.65,40.82],"成都":[104.06,30.67],"大同":[113.3,40.12],"镇江":[119.44,32.2],"桂林":[110.28,25.29],"张家界":[110.479191,29.117096],"宜兴":[119.82,31.36],"北海":[109.12,21.49],"西安":[108.95,34.27],"金坛":[119.56,31.74],"东营":[118.49,37.46],"牡丹江":[129.58,44.6],"遵义":[106.9,27.7],"绍兴":[120.58,30.01],"扬州":[119.42,32.39],"常州":[119.95,31.79],"潍坊":[119.1,36.62],"重庆":[106.54,29.59],"台州":[121.420757,28.656386],"南京":[118.78,32.04],"滨州":[118.03,37.36],"贵阳":[106.71,26.57],"无锡":[120.29,31.59],"本溪":[123.73,41.3],"克拉玛依":[84.77,45.59],"渭南":[109.5,34.52],"马鞍山":[118.48,31.56],"宝鸡":[107.15,34.38],"焦作":[113.21,35.24],"句容":[119.16,31.95],"北京":[116.46,39.92],"徐州":[117.2,34.26],"衡水":[115.72,37.72],"包头":[110,40.58],"绵阳":[104.73,31.48],"乌鲁木齐":[87.68,43.77],"枣庄":[117.57,34.86],"杭州":[120.19,30.26],"淄博":[118.05,36.78],"鞍山":[122.85,41.12],"溧阳":[119.48,31.43],"库尔勒":[86.06,41.68],"安阳":[114.35,36.1],"开封":[114.35,34.79],"济南":[117,36.65],"德阳":[104.37,31.13],"温州":[120.65,28.01],"九江":[115.97,29.71],"邯郸":[114.47,36.6],"临安":[119.72,30.23],"兰州":[103.73,36.03],"沧州":[116.83,38.33],"临沂":[118.35,35.05],"南充":[106.110698,30.837793],"天津":[117.2,39.13],"富阳":[119.95,30.07],"泰安":[117.13,36.18],"诸暨":[120.23,29.71],"郑州":[113.65,34.76],"哈尔滨":[126.63,45.75],"聊城":[115.97,36.45],"芜湖":[118.38,31.33],"唐山":[118.02,39.63],"平顶山":[113.29,33.75],"邢台":[114.48,37.05],"德州":[116.29,37.45],"济宁":[116.59,35.38],"荆州":[112.239741,30.335165],"宜昌":[111.3,30.7],"义乌":[120.06,29.32],"丽水":[119.92,28.45],"洛阳":[112.44,34.7],"秦皇岛":[119.57,39.95],"株洲":[113.16,27.83],"石家庄":[114.48,38.03],"莱芜":[117.67,36.19],"常德":[111.69,29.05],"保定":[115.48,38.85],"湘潭":[112.91,27.87],"金华":[119.64,29.12],"岳阳":[113.09,29.37],"长沙":[113,28.21],"衢州":[118.88,28.97],"廊坊":[116.7,39.53],"菏泽":[115.480656,35.23375],"合肥":[117.27,31.86],"武汉":[114.31,30.52],"大庆":[125.03,46.58]},ze=function(e){var a=[];return e.forEach((function(e,t){var n=e.name,l=e.value,r=$e[n];a.push({name:n,value:[].concat(Object(oe["a"])(r),[l])})})),a},De={data:function(){return{options:{},testPoint:[{name:"北京",value:[116.401394,39.91582,200]}],testPoint2:[{name:"上海",value:[121.472491,31.232965,300]}]}},methods:{},mounted:function(){this.options={title:{text:"慕课外卖销售数据大盘",subtext:"销售趋势统计",sublink:"https://www.wwlearn.cn",left:"center"},bmap:{key:"jEtI4YeoMBky141chG0vuvrfBf7HGTgD",center:[104.114129,37.550339],zoom:5,roam:!0,mapStyle:{styleJson:this.styleJson}},tooltip:{},series:[{name:"销售额",type:"scatter",coordinateSystem:"bmap",data:ze(Ee),encode:{value:2},itemStyle:{color:"purple"},symbolSize:function(e){return e[2]/10}},{name:"top2",type:"effectScatter",coordinateSystem:"bmap",data:ze(Ee.sort((function(e,a){return a.value-e.value}))).slice(0,10),symbolSize:function(e){return e[2]/10},encode:{value:2},hoverAnimation:!0,rippleEffect:{brushType:"stroke"},itemStyle:{color:"purple",shadowBlur:10,shadowColor:"#333"}}]}}},Ae=De,Be=Object(i["a"])(Ae,Oe,je,!1,null,"6958d74c",null),Pe=Be.exports,Ge=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ve-bmap",{ref:"bmap",attrs:{settings:e.chartSettings}})},Me=[],Le={data:function(){return this.chartSettings={key:"jEtI4YeoMBky141chG0vuvrfBf7HGTgD",bmap:{center:[120,30],zoom:10,roam:!0}}},mounted:function(){this.getdom()},methods:{getdom:function(){console.log(this.$refs.bmap)}}},Ie=Le,Je=Object(i["a"])(Ie,Ge,Me,!1,null,null,null),Ue=Je.exports;n["default"].use(m["a"]);var We=[{path:"/",name:"Home",component:Te},{path:"/",redirect:"/bmap"},{path:"/bmap",component:Pe},{path:"/bmap2",component:Ue}],He=new m["a"]({routes:We}),Ve=He,Ne=t("2f62");n["default"].use(Ne["a"]);var Ye=new Ne["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Fe=(t("672e"),t("450d"),t("101e")),Ke=t.n(Fe),Ze=(t("5466"),t("ecdf")),qe=t.n(Ze),Qe=(t("38a0"),t("ad41")),Re=t.n(Qe),Xe=(t("826b"),t("c263")),ea=t.n(Xe),aa=(t("fe07"),t("6ac5")),ta=t.n(aa),na=(t("3c52"),t("0d7b")),la=t.n(na),ra=(t("8bd8"),t("4cb2")),sa=t.n(ra),oa=(t("4ca3"),t("443e")),ia=t.n(oa),ua=(t("f4f9"),t("c2cc")),ca=t.n(ua),ma=(t("7a0f"),t("0f6c")),va=t.n(ma),pa=(t("b8e0"),t("a4c4")),da=t.n(pa);n["default"].use(da.a),n["default"].use(va.a),n["default"].use(ca.a),n["default"].use(ia.a),n["default"].use(sa.a),n["default"].use(la.a),n["default"].use(ta.a),n["default"].use(ea.a),n["default"].use(Re.a),n["default"].use(qe.a),n["default"].use(Ke.a);var fa=t("2819"),ya=t.n(fa);t("aabe");n["default"].use(ya.a);var ha=t("313e"),ba=t.n(ha),wa=t("9ca8");t("b29b");n["default"].config.productionTip=!1,n["default"].prototype.$echarts=ba.a,n["default"].component("v-chart",wa["a"]),new n["default"]({router:Ve,store:Ye,render:function(e){return e(c)}}).$mount("#app")},"61c2":function(e,a,t){},"66f0":function(e,a,t){},"675b":function(e,a,t){"use strict";var n=t("ba71"),l=t.n(n);l.a},"67ee":function(e,a,t){"use strict";var n=t("e076"),l=t.n(n);l.a},"7dc2":function(e,a,t){"use strict";var n=t("832b"),l=t.n(n);l.a},"832b":function(e,a,t){},"85ec":function(e,a,t){},"8e18":function(e,a,t){"use strict";var n=t("abc5"),l=t.n(n);l.a},"93fe":function(e,a,t){"use strict";var n=t("ad42"),l=t.n(n);l.a},"9e73":function(e,a,t){"use strict";var n=t("be57"),l=t.n(n);l.a},a21e:function(e,a,t){"use strict";var n=t("61c2"),l=t.n(n);l.a},abc5:function(e,a,t){},ad42:function(e,a,t){},b29b:function(e,a,t){},ba71:function(e,a,t){},be57:function(e,a,t){},e076:function(e,a,t){}});
//# sourceMappingURL=app.c053ec91.js.map