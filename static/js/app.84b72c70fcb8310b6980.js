webpackJsonp([1],{"+FD2":function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),s=a("mvHQ"),i=a.n(s),c=a("Xxa5"),r=a.n(c),o=a("exGp"),l=a.n(o),u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("b-tabs",{attrs:{expanded:""},model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}},[t._l(t.tabs,function(t){return a("b-tab-item",{key:t.id,attrs:{label:t}})}),t._v(" "),a("b-tab-item",{attrs:{label:"+"}})],2)],1)},staticRenderFns:[]};var d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card article"},[a("div",{staticClass:"card-content"},[a("article",{staticClass:"media"},[a("div",{staticClass:"media-left"},[a("figure",{staticClass:"image is-128x128"},[a("img",{attrs:{src:t.image||"http://www.oneilllogistics.com/content/images/news.png",alt:"Image"}})])]),t._v(" "),a("div",{staticClass:"media-content"},[a("p",[a("strong",[t._v(t._s(t.title))]),a("small",{staticClass:"is-pulled-right"},[t._v(t._s(new Date(t.date).toLocaleString()))]),t._v(" "),a("br")]),t._v("\n            "+t._s(t.content)+"\n        ")])])]),t._v(" "),a("footer",{staticClass:"card-footer"},[a("a",{staticClass:"card-footer-item",attrs:{href:"#"}},[t._v("Save")]),t._v(" "),a("a",{staticClass:"card-footer-item",attrs:{href:t.link,target:"_blank"}},[t._v("Open")])])])},staticRenderFns:[]};var b={name:"App",data:function(){return{API_URL:"https://newsapi.org/v2/top-headlines?country=ng&apiKey=ba09ef9453bd4b4bad5cd307ad133ef0&category=",results:[],customResults:[],fetching:!1,activeTab:0,tabs:["General","Science","Technology","Sports","Business"],customTabs:[],loadingComponent:null}},components:{MyTabs:a("VU/8")({name:"MyTabs",props:["tabs"],data:function(){return{activeTab:0,results:[]}},mounted:function(){this.$emit("tab-change",this.activeTab)},watch:{activeTab:function(t,e){this.$emit("tab-change",this.tabs[t])}}},u,!1,function(t){a("ktGF")},null,null).exports,NewsArticle:a("VU/8")({name:"NewsArticle",props:["image","title","content","link","date"]},d,!1,function(t){a("+FD2")},null,null).exports},watch:{fetching:function(t){t?this.loadingComponent=this.$loading.open({container:null}):this.loadingComponent.close()}},beforeMount:function(){for(var t in this.tabs)this.results[t]=[]},mounted:function(){if(localStorage.getItem("articles"))try{return void(this.results=JSON.parse(localStorage.getItem("articles")))}catch(t){}this.fetchPosts(0)},methods:{handleTabChange:function(t){this.tabs.includes(t)?(this.activeTab=this.tabs.findIndex(function(e){return e===t}),this.fetchPosts(this.activeTab)):this.customTabs.includes(t)?this.activeTab=this.tabs.findIndex(function(e){return e===t}):console.log("Clicked on + button")},fetchPosts:function(t,e){var a=this;return l()(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.results[t].articles||(a.fetching=!0),e.prev=1,e.next=4,fetch(a.API_URL+a.tabs[t]).then(function(t){return t.json()});case 4:a.results[t]=e.sent,a.storeResults(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),a.$toast.open({message:"Couldn't fetch news. Are you online? 😏",position:"is-bottom",duration:4e3});case 11:a.fetching=!1;case 12:case"end":return e.stop()}},e,a,[[1,8]])}))()},storeResults:function(){localStorage.setItem("articles",i()(this.results)),console.log("Successfully stored")}}},f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"my-navbar"},[t._m(0),t._v(" "),a("MyTabs",{attrs:{tabs:t.tabs.concat(t.customTabs)},on:{"tab-change":t.handleTabChange}})],1),t._v(" "),t._l(t.results[t.activeTab].articles,function(e,n){return t.tabs[t.activeTab]?a("NewsArticle",{key:n,attrs:{title:e.title,content:e.description,link:e.url,date:e.publishedAt,image:e.urlToImage}}):t.customtabs[t.activeTab]?t._l(t.results[t.activeTab].articles,function(t,e){return a("NewsArticle",{key:e,attrs:{title:t.title,content:t.description,link:t.url,date:t.publishedAt,image:t.urlToImage}})}):a("AddTopics")})],2)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("nav",{staticClass:"navbar",attrs:{role:"navigation","aria-label":"main navigation"}},[e("h1",{staticClass:"title is-3 my-title"},[this._v("Newzz")])])}]};var h=a("VU/8")(b,f,!1,function(t){a("RJOw")},null,null).exports,v=a("MMSg"),p=a.n(v);a("doPI");n.a.use(p.a),n.a.config.productionTip=!1,new n.a({el:"#app",components:{App:h},template:"<App/>"})},RJOw:function(t,e){},doPI:function(t,e){},ktGF:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.84b72c70fcb8310b6980.js.map