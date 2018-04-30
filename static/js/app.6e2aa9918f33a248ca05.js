webpackJsonp([1],{"+FD2":function(t,e){},"3V4k":function(t,e){},EZDV:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),s=a("Xxa5"),i=a.n(s),r=a("exGp"),c=a.n(r),o=a("Gu7T"),l=a.n(o),u=a("mvHQ"),d=a.n(u),f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("b-tabs",{attrs:{expanded:""},model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}},t._l(t.tabs,function(t){return a("b-tab-item",{key:t.id,attrs:{label:t.text,icon:t.icon}})}))],1)},staticRenderFns:[]};var p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card article"},[a("div",{staticClass:"card-content"},[a("article",{staticClass:"media"},[a("div",{staticClass:"media-left"},[a("figure",{staticClass:"image is-128x128"},[a("img",{attrs:{src:t.image||"http://www.oneilllogistics.com/content/images/news.png",alt:"Image"}})])]),t._v(" "),a("div",{staticClass:"media-content"},[a("p",[a("strong",[t._v(t._s(t.title))]),a("small",{staticClass:"is-pulled-right"},[t._v(t._s(new Date(t.date).toLocaleString()))]),t._v(" "),a("br")]),t._v("\n            "+t._s(t.content)+"\n        ")])])]),t._v(" "),a("footer",{staticClass:"card-footer"},[a("a",{staticClass:"card-footer-item",attrs:{href:"#"}},[t._v("Save")]),t._v(" "),a("a",{staticClass:"card-footer-item",attrs:{href:t.link,target:"_blank"}},[t._v("Open")])])])},staticRenderFns:[]};var v={name:"AddTopics",props:["tags"],data:function(){return{newTags:[]}},methods:{addNewTags:function(){this.$emit("add-new-tags",[].concat(l()(this.tags),l()(this.newTags)).map(function(t){return{type:"custom",icon:"bookmark",text:t}})),this.newTags=[]},removeTag:function(t){this.$emit("remove-tag",t)}}},b={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"add-topics"},[a("div",{staticClass:"subtitle my-title 3"},[t._v("Add Keywords to get updated about")]),t._v(" "),a("b-field",{attrs:{grouped:""}},[a("b-taginput",{attrs:{expanded:"",icon:"fa fa-tags",type:"is-primary"},model:{value:t.newTags,callback:function(e){t.newTags=e},expression:"newTags"}}),t._v(" "),a("p",{staticClass:"control"},[a("button",{staticClass:"button is-primary",on:{click:t.addNewTags}},[t._v("Add To Topics")])])],1),t._v(" "),a("div",{staticClass:"tags"},[a("div",{staticClass:"field"},t._l(t.tags,function(e,n){return a("b-tag",{key:n,attrs:{type:"is-primary is-medium",closable:""},on:{close:function(a){t.removeTag(e)}}},[t._v("\n        "+t._s(e)+"\n      ")])}))])],1)},staticRenderFns:[]};var h={name:"App",data:function(){return{API_URL:"https://newsapi.org/v2/top-headlines?country=ng&apiKey=ba09ef9453bd4b4bad5cd307ad133ef0&category=",CUSTOM:"https://newsapi.org/v2/everything?apiKey=ba09ef9453bd4b4bad5cd307ad133ef0&q=",results:[],fetching:!1,activeTab:0,type:"normal",tabs:[{type:"normal",text:"General",icon:"bell"},{type:"normal",text:"Science",icon:"flask"},{type:"normal",text:"Technology",icon:"rocket"},{type:"normal",text:"Sports",icon:"bookmark"},{type:"normal",text:"Business",icon:"briefcase"}],loadingComponent:null}},components:{MyTabs:a("VU/8")({name:"MyTabs",props:["tabs","customTabs"],data:function(){return{activeTab:0,results:[]}},mounted:function(){this.$emit("tab-change",this.activeTab)},watch:{activeTab:function(t,e){this.$emit("tab-change",t)}}},f,!1,function(t){a("3V4k")},null,null).exports,NewsArticle:a("VU/8")({name:"NewsArticle",props:["image","title","content","link","date"]},p,!1,function(t){a("+FD2")},null,null).exports,AddTopics:a("VU/8")(v,b,!1,function(t){a("EZDV")},null,null).exports},computed:{activeArticles:function(){return this.results[this.activeTab]?this.results[this.activeTab].articles:[]}},watch:{tabs:function(t,e){localStorage.setItem("tabs",d()(this.tabs))}},beforeMount:function(){if(localStorage.getItem("tabs"))try{this.tabs=JSON.parse(localStorage.getItem("tabs"))}catch(t){}for(var t in this.tabs)this.results[t]={}},methods:{addNewTags:function(t){console.log("New tabs",t),this.tabs=[].concat(l()(this.tabs.filter(function(t){return"normal"===t.type})),l()(t));for(var e=0;e<this.tabs.length;)this.results[e]||this.results.push({}),e++},removeTag:function(t){var e=this.tabs.findIndex(function(e){return e.text===t});this.tabs=this.tabs.filter(function(e){return e.text!==t}),this.results.filter(function(t,a){return a!==e})},handleTabChange:function(t){var e=this.tabs.find(function(e,a){return a===t}).type;this.type=e,this.activeTab=t,"normal"===e?this.fetchPosts(t):this.fetchCustom(t)},fetchCustom:function(t){var e=this;return c()(i.a.mark(function a(){var n;return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return e.results[t].articles||(e.fetching=!0),a.prev=1,a.next=4,fetch(e.CUSTOM+e.tabs[t].text).then(function(t){return t.json()});case 4:n=a.sent,e.results=e.results.map(function(e,a){return a===t?n:e}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(1),e.$toast.open({message:"Couldn't fetch "+e.tabs[t].text+" stories. Are you online? 😏",position:"is-bottom",duration:4e3});case 11:e.fetching=!1;case 12:case"end":return a.stop()}},a,e,[[1,8]])}))()},fetchPosts:function(t){var e=this;return c()(i.a.mark(function a(){var n;return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return e.results[t].articles||(e.fetching=!0),a.prev=1,a.next=4,fetch(e.API_URL+e.tabs[t].text).then(function(t){return t.json()});case 4:n=a.sent,e.results=e.results.map(function(e,a){return a===t?n:e}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(1),e.$toast.open({message:"Couldn't fetch news. Are you online? 😏",position:"is-bottom",duration:4e3});case 11:e.fetching=!1;case 12:case"end":return a.stop()}},a,e,[[1,8]])}))()}}},m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"my-navbar"},[a("nav",{staticClass:"navbar",attrs:{role:"navigation","aria-label":"main navigation"}},[a("h1",{staticClass:"title is-3 my-title"},[t._v("Newzz")]),t._v(" "),a("div",{on:{click:function(){return t.type="+"}}},[a("b-icon",{attrs:{icon:"plus"}})],1)]),t._v(" "),a("MyTabs",{attrs:{tabs:t.tabs},on:{"tab-change":t.handleTabChange}})],1),t._v(" "),"+"===t.type?a("AddTopics",{attrs:{tags:t.tabs.filter(function(t){return"custom"==t.type}).map(function(t){return t.text})},on:{"add-new-tags":t.addNewTags,"remove-tag":t.removeTag}}):a("div",{staticClass:"articles"},[t._l(t.activeArticles,function(t,e){return a("NewsArticle",{key:e,attrs:{title:t.title,content:t.description,link:t.url,date:t.publishedAt,image:t.urlToImage}})}),t._v(" "),a("b-loading",{attrs:{"is-full-page":!1,active:t.fetching,canCancel:!0},on:{"update:active":function(e){t.fetching=e}}})],2)],1)},staticRenderFns:[]};var g=a("VU/8")(h,m,!1,function(t){a("SDIF")},null,null).exports,T=a("MMSg"),_=a.n(T);a("doPI");n.a.use(_.a,{defaultIconPack:"fa"}),n.a.config.productionTip=!1,new n.a({el:"#app",components:{App:g},template:"<App/>"})},SDIF:function(t,e){},doPI:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.6e2aa9918f33a248ca05.js.map