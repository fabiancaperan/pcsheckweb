(function(e){function n(n){for(var c,r,o=n[0],l=n[1],i=n[2],h=0,d=[];h<o.length;h++)r=o[h],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(c in l)Object.prototype.hasOwnProperty.call(l,c)&&(e[c]=l[c]);s&&s(n);while(d.length)d.shift()();return u.push.apply(u,i||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],c=!0,r=1;r<t.length;r++){var o=t[r];0!==a[o]&&(c=!1)}c&&(u.splice(n--,1),e=l(l.s=t[0]))}return e}var c={},r={app:0},a={app:0},u=[];function o(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-1d6c2539":"f8389380","chunk-10fd5588":"f69c9821","chunk-2fa712d2":"0d3dffbc","chunk-41a7c1c8":"61b2187d","chunk-4adb2ff6":"a47987ae","chunk-5480ad15":"5e5a8d22","chunk-627a5849":"b7f96c84","chunk-1c61c12d":"44f341ce","chunk-69f88955":"4ec61af6","chunk-7dc548de":"c7b76aaf","chunk-6b818491":"12b2d7c1","chunk-7574a638":"8bb9e212","chunk-c3b94380":"0fa1025f","chunk-6728c530":"467b1ab9"}[e]+".js"}function l(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.e=function(e){var n=[],t={"chunk-1d6c2539":1,"chunk-10fd5588":1,"chunk-2fa712d2":1,"chunk-41a7c1c8":1,"chunk-4adb2ff6":1,"chunk-5480ad15":1,"chunk-627a5849":1,"chunk-1c61c12d":1,"chunk-69f88955":1,"chunk-7dc548de":1,"chunk-6b818491":1,"chunk-7574a638":1,"chunk-c3b94380":1,"chunk-6728c530":1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=new Promise((function(n,t){for(var c="css/"+({}[e]||e)+"."+{"chunk-1d6c2539":"6a1ca2eb","chunk-10fd5588":"7ec4e391","chunk-2fa712d2":"7374d100","chunk-41a7c1c8":"71061ee3","chunk-4adb2ff6":"94aaf512","chunk-5480ad15":"489ec922","chunk-627a5849":"bd6e0bce","chunk-1c61c12d":"70770ec9","chunk-69f88955":"929276ec","chunk-7dc548de":"d07d7f85","chunk-6b818491":"13e3cbc3","chunk-7574a638":"8c0f9d87","chunk-c3b94380":"a061c962","chunk-6728c530":"a3fb6984"}[e]+".css",a=l.p+c,u=document.getElementsByTagName("link"),o=0;o<u.length;o++){var i=u[o],h=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(h===c||h===a))return n()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){i=d[o],h=i.getAttribute("data-href");if(h===c||h===a)return n()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=n,s.onerror=function(n){var c=n&&n.target&&n.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=c,delete r[e],s.parentNode.removeChild(s),t(u)},s.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(s)})).then((function(){r[e]=0})));var c=a[e];if(0!==c)if(c)n.push(c[2]);else{var u=new Promise((function(n,t){c=a[e]=[n,t]}));n.push(c[2]=u);var i,h=document.createElement("script");h.charset="utf-8",h.timeout=120,l.nc&&h.setAttribute("nonce",l.nc),h.src=o(e);var d=new Error;i=function(n){h.onerror=h.onload=null,clearTimeout(s);var t=a[e];if(0!==t){if(t){var c=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+c+": "+r+")",d.name="ChunkLoadError",d.type=c,d.request=r,t[1](d)}a[e]=void 0}};var s=setTimeout((function(){i({type:"timeout",target:h})}),12e4);h.onerror=h.onload=i,document.head.appendChild(h)}return Promise.all(n)},l.m=e,l.c=c,l.d=function(e,n,t){l.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,n){if(1&n&&(e=l(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)l.d(t,c,function(n){return e[n]}.bind(null,c));return t},l.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(n,"a",n),n},l.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},l.p="",l.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],h=i.push.bind(i);i.push=n,i=i.slice();for(var d=0;d<i.length;d++)n(i[d]);var s=h;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"34e8":function(e,n,t){"use strict";var c=t("865a"),r=t.n(c);r.a},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var c=t("a026"),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-app",[t("core-app-bar",{staticClass:"barset"}),t("core-view"),t("core-footer")],1)},a=[],u=(t("d3b7"),{name:"App",components:{CoreFooter:function(){return Promise.all([t.e("chunk-1d6c2539"),t.e("chunk-5480ad15")]).then(t.bind(null,"7a74"))},CoreAppBar:function(){return Promise.all([t.e("chunk-1d6c2539"),t.e("chunk-c3b94380")]).then(t.bind(null,"dc21"))},CoreView:function(){return t.e("chunk-6728c530").then(t.bind(null,"9306"))}}}),o=u,l=(t("34e8"),t("5c64"),t("2877")),i=t("6544"),h=t.n(i),d=t("7496"),s=Object(l["a"])(o,r,a,!1,null,"31fc1c44",null),f=s.exports;h()(s,{VApp:d["a"]});var p=t("8c4f");c["a"].use(p["a"]);var m="/pcsheckwebdev",b=[{path:"/",name:"Home",component:function(){return Promise.all([t.e("chunk-1d6c2539"),t.e("chunk-10fd5588"),t.e("chunk-2fa712d2")]).then(t.bind(null,"eea6"))},children:[{path:"/",redirect:"/home"},{path:"/home",name:"Home",component:function(){return Promise.all([t.e("chunk-1d6c2539"),t.e("chunk-10fd5588"),t.e("chunk-2fa712d2")]).then(t.bind(null,"eea6"))}},{path:"/howDoWeDoIt",name:"Como lo hacemos",component:function(){return Promise.all([t.e("chunk-1d6c2539"),t.e("chunk-4adb2ff6")]).then(t.bind(null,"f42d"))}},{path:"/aboutUs",name:"Nosotros",component:function(){return Promise.all([t.e("chunk-1d6c2539"),t.e("chunk-6b818491")]).then(t.bind(null,"bb95"))}},{path:"/projects",name:"Proyectos",component:function(){return Promise.all([t.e("chunk-1d6c2539"),t.e("chunk-7574a638")]).then(t.bind(null,"e00e"))}},{path:"/donations",name:"Donaciones",component:function(){return Promise.all([t.e("chunk-1d6c2539"),t.e("chunk-627a5849"),t.e("chunk-7dc548de")]).then(t.bind(null,"8b48"))}},{path:"/museum",name:"Museo",component:function(){return Promise.all([t.e("chunk-1d6c2539"),t.e("chunk-627a5849"),t.e("chunk-10fd5588"),t.e("chunk-1c61c12d")]).then(t.bind(null,"f275"))}},{path:"/contact",name:"Contacto",component:function(){return Promise.all([t.e("chunk-1d6c2539"),t.e("chunk-627a5849"),t.e("chunk-69f88955")]).then(t.bind(null,"5d8b"))}},{path:"/recondition",name:"Reacondicionar",component:function(){return Promise.all([t.e("chunk-1d6c2539"),t.e("chunk-10fd5588"),t.e("chunk-41a7c1c8")]).then(t.bind(null,"4c00"))}}]}],k=new p["a"]({base:m,mode:"history",routes:b}),v=k,g=t("2f62");c["a"].use(g["a"]);var y=new g["a"].Store({state:{},mutations:{},actions:{},modules:{}}),_=t("f309"),w=t("fcf4");c["a"].use(_["a"]);var P=new _["a"]({theme:{themes:{light:{primary:w["a"].red.darken1,secondary:w["a"].red.lighten4,accent:w["a"].indigo.base,purple:"#4e6093",green:"#7ac462",orange:"#e58e0e",grey:"3c3c3b",greylight:"3c3c3b"}}}}),j=(t("b0c0"),function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-btn",e._g(e._b({style:e.styles,attrs:{color:"primary",fab:"",small:""}},"v-btn",e.$attrs,!1),e.$listeners),[e._t("default")],2)}),C=[],O={name:"BaseBtn",props:{square:Boolean},computed:{styles:function(){return{borderRadius:this.square?"2px":void 0}}}},x=O,E=t("8336"),S=Object(l["a"])(x,j,C,!1,null,null,null),$=S.exports;h()(S,{VBtn:E["a"]});var B=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-card",e._g(e._b({attrs:{flat:"",tile:""}},"v-card",e.$attrs,!1),e.$listeners),[e._t("default")],2)},A=[],T={name:"BaseCard"},N=T,D=t("b0af"),L=Object(l["a"])(N,B,A,!1,null,null,null),M=L.exports;h()(L,{VCard:D["a"]});var q=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("h2",e._g(e._b({staticClass:"subheading text-uppercase font-weight-medium mb-3"},"h2",e.$attrs,!1),e.$listeners),[e._t("default")],2)},V=[],H={name:"BaseSubheading"},F=H,I=Object(l["a"])(F,q,V,!1,null,null,null),J=I.exports;c["a"].component($.name,$),c["a"].component(M.name,M),c["a"].component(J.name,J),c["a"].config.productionTip=!1,new c["a"]({router:v,store:y,vuetify:P,render:function(e){return e(f)}}).$mount("#app")},"5c64":function(e,n,t){"use strict";var c=t("dfa5"),r=t.n(c);r.a},"865a":function(e,n,t){},dfa5:function(e,n,t){}});