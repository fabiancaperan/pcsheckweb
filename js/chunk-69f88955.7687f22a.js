(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-69f88955"],{"0094":function(t,o,e){t.exports=e.p+"img/imagen_lado_derecho_contacto.ad215d27.png"},1043:function(t,o,e){"use strict";var a=e("a73f"),n=e.n(a);n.a},1681:function(t,o,e){},"5d8b":function(t,o,e){"use strict";e.r(o);var a=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("div",[a("div",[a("v-img",{staticClass:"imglogo",attrs:{src:e("3e44")}})],1),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("v-row",[a("v-col",{attrs:{cols:"6",md:"6",sm:"12"}},[a("v-card-text",{staticClass:"text-center"},[a("h1",[t._v("Contáctanos")])]),a("v-row",{staticClass:"back"},[a("form",[a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{staticClass:"borderorange",attrs:{label:"Nombre",name:"user_name",filled:"",outlined:"",rounded:"",solo:"","full-width":"",color:"orange","hide-details":""},model:{value:t.nombreContacto,callback:function(o){t.nombreContacto=o},expression:"nombreContacto"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{staticClass:"borderorange",attrs:{label:"Correo Electronico",name:"correo",filled:"",outlined:"",rounded:"",solo:"",color:"orange","hide-details":""},model:{value:t.correoContacto,callback:function(o){t.correoContacto=o},expression:"correoContacto"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{staticClass:"borderorange",attrs:{label:"Teléfono / Celular",name:"tel",filled:"",outlined:"",rounded:"",solo:"",color:"orange","hide-details":""},model:{value:t.telefonoContacto,callback:function(o){t.telefonoContacto=o},expression:"telefonoContacto"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-textarea",{staticClass:"borderorange",attrs:{label:"¿Cómo podemos ayudarte?",name:"observations",filled:"",outlined:"",rounded:"",solo:"",color:"orange",height:"250","hide-details":""},model:{value:t.comentariosContacto,callback:function(o){t.comentariosContacto=o},expression:"comentariosContacto"}})],1),a("v-btn",{staticClass:"mx-auto white--text",attrs:{width:"420",height:"55",rounded:"",color:"blue"},on:{click:t.sendEmail}},[t._v("Enviar")])],1)])],1),a("v-col",{attrs:{cols:"6",md:"6",sm:"12"}},[a("v-img",{attrs:{src:e("0094")}})],1)],1)],1)},n=[],r=e("0f91"),s=e.n(r),l={methods:{sendEmail:function(t){console.log(t),s.a.sendForm("gmail","template_NXvgAyIP",t.target.form,"user_cemph8cVifopKVlJq6Kyw").then((function(t){console.log("SUCCESS!",t.status,t.text)}),(function(t){console.log("FAILED...",t)}))}},data:function(){return{nombreContacto:null,correoContacto:null,telefonoContacto:null,comentariosContacto:null}}},i=l,c=(e("1043"),e("2877")),u=e("6544"),d=e.n(u),h=e("8336"),f=e("99d9"),m=e("62ad"),p=e("adda"),g=e("0fd9"),v=e("8654"),b=e("a844"),C=Object(c["a"])(i,a,n,!1,null,"2cf0be1b",null);o["default"]=C.exports;d()(C,{VBtn:h["a"],VCardText:f["a"],VCol:m["a"],VImg:p["a"],VRow:g["a"],VTextField:v["a"],VTextarea:b["a"]})},a73f:function(t,o,e){},a844:function(t,o,e){"use strict";e("a9e3");var a=e("5530"),n=(e("1681"),e("8654")),r=e("58df"),s=Object(r["a"])(n["a"]);o["a"]=s.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return Object(a["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},n["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var o=t.scrollHeight,e=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(e,o)+"px"}},genInput:function(){var t=n["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){n["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})}}]);
//# sourceMappingURL=chunk-69f88955.7687f22a.js.map