(function(t){function e(e){for(var n,i,u=e[0],a=e[1],l=e[2],p=0,d=[];p<u.length;p++)i=u[p],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n]);c&&c(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),o()}function o(){for(var t,e=0;e<s.length;e++){for(var o=s[e],n=!0,u=1;u<o.length;u++){var a=o[u];0!==r[a]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=o[0]))}return t}var n={},r={app:0},s=[];function i(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=n,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/vuexPosts/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],a=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var c=a;s.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";o("85ec")},3669:function(t,e,o){"use strict";o("8093")},"56d7":function(t,e,o){"use strict";o.r(e);var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("AddPost"),o("h1",[t._v(t._s(t.countPosts))]),t._l(t.validPosts,(function(e){return o("div",{key:e.id,staticClass:"post"},[o("h2",[t._v(t._s(e.title))]),o("p",[t._v(t._s(e.body))])])}))],2)},s=[],i=o("2f62"),u=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",placeholder:"title"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:t.body,expression:"body"}],attrs:{type:"text",placeholder:"body"},domProps:{value:t.body},on:{input:function(e){e.target.composing||(t.body=e.target.value)}}}),o("button",{attrs:{type:"submit"}},[t._v("Create post")]),o("hr")])},a=[],l={data(){return{title:"",body:""}},methods:{...Object(i["d"])(["addPost"]),submit(){this.addPost({title:this.title,body:this.body,id:Date.now()}),this.title=this.body=""}}},c=l,p=(o("3669"),o("2877")),d=Object(p["a"])(c,u,a,!1,null,"0d8f6c96",null),f=d.exports,v={name:"App",computed:Object(i["c"])(["validPosts","countPosts"]),methods:Object(i["b"])(["fetchPosts"]),components:{AddPost:f},mounted(){this.fetchPosts()}},b=v,h=(o("034f"),Object(p["a"])(b,r,s,!1,null,null,null)),m=h.exports,y={actions:{async fetchPosts(t,e=3){const o=await fetch("https://jsonplaceholder.typicode.com/posts?_limit="+e),n=await o.json();t.commit("updatePosts",n)}},mutations:{updatePosts(t,e){t.posts=e},addPost(t,e){t.posts.unshift(e)}},state:{posts:[]},getters:{validPosts(t){return t.posts.filter(t=>t.title&&t.body)},allPosts(t){return t.posts},countPosts(t,e){return e.validPosts.length}}};n["a"].use(i["a"]);var P=new i["a"].Store({modules:{posts:y}});n["a"].config.productionTip=!1,new n["a"]({store:P,render:function(t){return t(m)}}).$mount("#app")},8093:function(t,e,o){},"85ec":function(t,e,o){}});
//# sourceMappingURL=app.6b39d971.js.map