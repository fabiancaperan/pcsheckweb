(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2fa712d2"],{"0019":function(t,e,a){t.exports=a.p+"img/fondo_nuestra_historia.649815ba.png"},"3e44":function(t,e,a){t.exports=a.p+"img/header_logo.f87112c0.png"},"42d1":function(t,e,a){t.exports=a.p+"img/familia.35aed6be.png"},"45f0":function(t,e,a){t.exports=a.p+"img/educacion.f55b9997.jpg"},4804:function(t,e,a){},"4e4e":function(t,e,a){t.exports=a.p+"img/donacion_computadores.a77f848a.jpg"},"5e6c":function(t,e,a){t.exports=a.p+"img/reutilizamos.a2cfa2f4.jpg"},"73b3":function(t,e,a){t.exports=a.p+"img/marcas_aliadas.6f23cdbb.png"},7412:function(t,e,a){t.exports=a.p+"img/aliados_fundacion.eacfc8ba.jpg"},8079:function(t,e,a){t.exports=a.p+"img/apoyo-social.bee905fc.jpg"},"8a79":function(t,e,a){"use strict";var s=a("23e7"),o=a("06cf").f,r=a("50c4"),i=a("5a34"),n=a("1d80"),c=a("ab13"),l=a("c430"),d="".endsWith,u=Math.min,m=c("endsWith"),v=!l&&!m&&!!function(){var t=o(String.prototype,"endsWith");return t&&!t.writable}();s({target:"String",proto:!0,forced:!v&&!m},{endsWith:function(t){var e=String(n(this));i(t);var a=arguments.length>1?arguments[1]:void 0,s=r(e.length),o=void 0===a?s:u(r(a),s),c=String(t);return d?d.call(e,c,o):e.slice(o-c.length,o)===c}})},"989e":function(t,e,a){t.exports=a.p+"img/fundadores.109bdbf1.png"},"99d9":function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return c}));var s=a("b0af"),o=a("80d2"),r=Object(o["g"])("v-card__actions"),i=Object(o["g"])("v-card__subtitle"),n=Object(o["g"])("v-card__text"),c=Object(o["g"])("v-card__title");s["a"]},"9d26":function(t,e,a){"use strict";a("7db0"),a("caad"),a("c975"),a("fb6a"),a("45fc"),a("a9e3"),a("2532"),a("498a"),a("c96a");var s,o=a("5530"),r=(a("4804"),a("7e2b")),i=a("a9ad"),n=a("af2b"),c=a("7560"),l=a("80d2"),d=a("2b0e"),u=a("58df");function m(t){return["fas","far","fal","fab","fad"].some((function(e){return t.includes(e)}))}function v(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(function(t){t["xSmall"]="12px",t["small"]="16px",t["default"]="24px",t["medium"]="28px",t["large"]="36px",t["xLarge"]="40px"})(s||(s={}));var g=Object(u["a"])(r["a"],i["a"],n["a"],c["a"]).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium:function(){return!1},hasClickListener:function(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon:function(){var t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),Object(l["r"])(this,t)},getSize:function(){var t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=Object(l["o"])(t).find((function(e){return t[e]}));return e&&s[e]||Object(l["f"])(this.size)},getDefaultData:function(){var t={staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:Object(o["a"])({"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0},this.attrs$),on:this.listeners$};return t},applyColors:function(t){t.class=Object(o["a"])(Object(o["a"])({},t.class),this.themeClasses),this.setTextColor(this.color,t)},renderFontIcon:function(t,e){var a=[],s=this.getDefaultData(),o="material-icons",r=t.indexOf("-"),i=r<=-1;i?a.push(t):(o=t.slice(0,r),m(o)&&(o="")),s.class[o]=!0,s.class[t]=!i;var n=this.getSize();return n&&(s.style={fontSize:n}),this.applyColors(s),e(this.hasClickListener?"button":this.tag,s,a)},renderSvgIcon:function(t,e){var a=this.getSize(),s=Object(o["a"])(Object(o["a"])({},this.getDefaultData()),{},{style:a?{fontSize:a,height:a,width:a}:void 0});s.class["v-icon--svg"]=!0,this.applyColors(s);var r={attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",height:a||"24",width:a||"24",role:"img","aria-hidden":!0}};return e(this.hasClickListener?"button":"span",s,[e("svg",r,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent:function(t,e){var a=this.getDefaultData();a.class["v-icon--is-component"]=!0;var s=this.getSize();s&&(a.style={fontSize:s,height:s,width:s}),this.applyColors(a);var o=t.component;return a.props=t.props,a.nativeOn=a.on,e(o,a)}},render:function(t){var e=this.getIcon();return"string"===typeof e?v(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}}),h=d["a"].extend({name:"v-icon",$_wrapperFor:g,functional:!0,render:function(t,e){var a=e.data,s=e.children,o="";return a.domProps&&(o=a.domProps.textContent||a.domProps.innerHTML||o,delete a.domProps.textContent,delete a.domProps.innerHTML),t(g,a,o?[o]:s)}});e["a"]=h},ce24:function(t,e,a){},d429:function(t,e,a){t.exports=a.p+"img/shek.e52f6c2e.jpg"},d97d:function(t,e,a){"use strict";var s=a("ce24"),o=a.n(s);o.a},eaf5:function(t,e,a){t.exports=a.p+"img/carrusel_2.aa36a789.jpg"},eea6:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"home"}},[s("div",[s("v-img",{staticClass:"imglogo",attrs:{src:a("3e44")}})],1),s("v-carousel",{attrs:{"hide-delimiter-background":"",height:"100%","show-arrows":!1}},[s("v-carousel-item",[s("v-img",{attrs:{src:a("4e4e")}},[s("v-card-text",{staticClass:"white--text centerButtons text-center"},[s("v-btn",{attrs:{rounded:"",large:"",color:"orange",href:"/donations"}},[t._v("Dona un computador")])],1)],1)],1),s("v-carousel-item",[s("v-img",{attrs:{src:a("eaf5")}},[s("v-card-text",{staticClass:"white--text centerButton text-center"},[s("h1",[t._v("Apoyamos a familias llevando acceso a tecnología reacondicionada como herramienta de desarrollo sostenible")]),s("br"),s("v-btn",{attrs:{rounded:"",large:"",color:"orange",href:"/donations"}},[t._v("Postulate")])],1)],1)],1),s("v-carousel-item",[s("v-img",{attrs:{src:a("fe2a")}},[s("v-card-text",{staticClass:"white--text centerButtons text-center"},[s("v-btn",{attrs:{rounded:"",large:"",color:"orange",href:"/howDoWeDoIt"}},[t._v("Reacondicionamos")])],1)],1)],1)],1),s("v-img",{attrs:{src:a("45f0")}},[s("v-row",[s("v-col",{staticClass:"imgcenter",attrs:{sm:"10",md:"8",lg:"4"}},[s("v-img",{attrs:{"max-width":"100%",src:a("fb00")}},[s("v-row",[s("v-col",{staticClass:"imgcenter",attrs:{cols:"6"}},[s("br"),s("br"),s("h3",{staticClass:"text-center"},[t._v("Con tu ayuda Camila podra hacer sus tareas en un compu reacondicionado.")])])],1)],1),s("v-row",[s("v-col",{staticClass:"imgcenter",attrs:{cols:"9"}},[s("h3",{staticClass:"text-center white--text"},[t._v(" Nuestra Fundación tiene como objeto social apoyar el desarrollo integral de la familia y primera infancia a través de proyectos sociales y ambientales. ")])])],1),s("v-row",[s("v-col",{staticClass:"imgcenter",attrs:{cols:"9"}},[s("v-img",{attrs:{src:a("42d1")}})],1)],1)],1)],1)],1),s("v-img",{attrs:{src:a("0019")}},[s("v-row",[s("v-col",{staticClass:"imgcenter",attrs:{sm:"9",md:"7",lg:"4"}},[s("h2",{staticClass:"text-center"},[t._v(" “Este sueño comenzó hace 15 años, motivados por llevar tecnología a poblaciones vulnerables, lo que nunca pensamos fue en el impacto económico y ambiental que tuvo PCSHEK en la sociedad.” ")])])],1),s("v-row",[s("v-col",{staticClass:"imgcenter",attrs:{cols:"6"}},[s("h3",{staticClass:"text-center"},[t._v("Yamile y Gonzalo")])])],1),s("v-row",{attrs:{id:"test"}},[s("v-col",{staticClass:"imgcenter",attrs:{cols:"6"}},[s("v-img",{attrs:{src:a("989e")}})],1)],1),s("v-row",[s("v-col",{staticClass:"imgcenter text-center",attrs:{cols:"6"}},[s("v-btn",{staticClass:"white--text",attrs:{rounded:"",large:"",color:"orange",href:"/aboutUs#nosotros"}},[t._v("Conoce nuestra historia")])],1)],1)],1),s("v-img",{attrs:{src:a("5e6c")}},[s("v-row",{style:"padding:15%"},[s("v-col",{attrs:{xs:"6",sm:"6",md:"12",lg:"12"}},[s("h3",{staticClass:"white--text",style:"width:50%"},[t._v(" Reutilizamos los elementos móviles y tecnológicos dados de baja por empresas, hogares y otras instituciones, para transformárlos en herramientas de desarrollo humano. ")])]),s("v-col",{attrs:{xs:"6",sm:"6",md:"12",lg:"12"}},[s("br"),s("v-btn",{staticClass:"white--text",attrs:{rounded:"",large:"",color:"orange",href:"/howDoWeDoIt"}},[t._v("Conoce más")])],1)],1)],1),s("v-row",[s("v-col",{attrs:{cols:"6",md:"6",sm:"12"}},[s("v-card-title",[t._v(" Te presentamos a SHEK, nuestra mascota ")]),s("v-card-text",[t._v(" SHEK es una combinación de tecnologías obsoletas y modernas, que al ser unificadas en los laboratorios de PCSHEK dan como resultado nuestra visión y prácticas en el reacondicionamiento de nuestro país. ")])],1),s("v-col",{attrs:{cols:"6",md:"6",sm:"12"}},[s("v-img",{attrs:{src:a("d429")}})],1)],1),s("v-img",{attrs:{src:a("8079")}},[s("v-row",{staticClass:"centerButton"},[s("v-col",{attrs:{cols:"12"}},[s("h1",{staticClass:"white--text"},[t._v("Apoyo Social")]),s("br")]),s("v-col",{attrs:{cols:"12"}},[s("h4",{staticClass:"white--text"},[t._v(" Gracias a tus aportes tecnológicos, llegamos a los sectores más vulnerables de Colombia. ")]),s("br")]),s("v-col",{attrs:{cols:"12"}},[s("v-btn",{staticClass:"white--text",attrs:{rounded:"",large:"",color:"orange",href:"/projects"}},[t._v("Conoce nuestros proyectos")])],1)],1)],1),s("v-row",[s("v-col",{attrs:{cols:"6",md:"6",sm:"12"}},[s("v-card-title",[t._v("Nuestros aliados")]),s("v-card-text",[t._v(" Algunos de nuestros amigos en el camino por una sociedad más conectada. ")]),s("v-img",{attrs:{src:a("7412")}})],1),s("v-col",{attrs:{cols:"6",md:"6",sm:"12"}},[s("v-carousel",{attrs:{"hide-delimiter-background":"",dark:"",height:"100%","show-arrows":!1}},[s("v-carousel-item",[s("v-img",{attrs:{src:a("73b3")}})],1)],1)],1)],1)],1)},o=[],r=(a("8a79"),{data:function(){return{itemsAliados:[{img:""}]}},methods:{onClick:function(t,e){t.stopPropagation(),!e.to&&e.href&&this.$vuetify.goTo(e.href.endsWith("!")?0:e.href)},onclickreturn:function(){this.$vuetify.goTo("/aboutUs#nosotros")}}}),i=r,n=(a("d97d"),a("2877")),c=a("6544"),l=a.n(c),d=a("8336"),u=a("99d9"),m=a("5e66"),v=a("3e35"),g=a("62ad"),h=a("adda"),f=a("0fd9"),p=Object(n["a"])(i,s,o,!1,null,"c88a348e",null);e["default"]=p.exports;l()(p,{VBtn:d["a"],VCardText:u["a"],VCardTitle:u["b"],VCarousel:m["a"],VCarouselItem:v["a"],VCol:g["a"],VImg:h["a"],VRow:f["a"]})},fb00:function(t,e,a){t.exports=a.p+"img/fondo_texto_educacion.a3628ec6.png"},fe2a:function(t,e,a){t.exports=a.p+"img/reacondicionamos.fbec16b3.jpg"}}]);
//# sourceMappingURL=chunk-2fa712d2.52b0a695.js.map