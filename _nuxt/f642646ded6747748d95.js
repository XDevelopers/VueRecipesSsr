(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{176:function(t,a,c){var n=c(186);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,c(10).default)("ffe1667c",n,!1,{sourceMap:!1})},185:function(t,a,c){"use strict";var n=c(176);c.n(n).a},186:function(t,a,c){(t.exports=c(9)(!1)).push([t.i,"\n.recipe[data-v-dcbbbf0c]{background:#2b2b2b;display:flex;flex-direction:row;height:80vh;justify-content:center;margin:20px\n}\n.item[data-v-dcbbbf0c]{margin:20px;text-align:center\n}\n.item[data-v-dcbbbf0c],h1[data-v-dcbbbf0c],h2[data-v-dcbbbf0c]{padding:20px\n}\nh1[data-v-dcbbbf0c],h2[data-v-dcbbbf0c]{color:#fbfbfb\n}\nimg[data-v-dcbbbf0c]{height:400px;width:600px\n}",""])},193:function(t,a,c){"use strict";c.r(a);var n=function(){var t=this,a=t.$createElement,c=t._self._c||a;return c("div",{staticClass:"recipe"},[c("div",{staticClass:"item"},[c("h1",[t._v(t._s(t.data.title))]),t._v(" "),c("img",{attrs:{src:t.data.image,alt:"",srcset:""}}),t._v(" "),c("h2",[t._v(t._s(t.data.description))])])])};n._withStripped=!0;var e=c(60),i=c.n(e),d={data:function(){return{data:{}}},created:function(){console.log("created")},asyncData:function(t){return i.a.get("http://localhost:3001/recipes/".concat(t.params.id)).then(function(t){return{data:t.data}})}},r=(c(185),c(18)),s=Object(r.a)(d,n,[],!1,null,"dcbbbf0c",null);s.options.__file="index.vue";a.default=s.exports}}]);