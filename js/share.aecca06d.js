(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["share"],{"7c2a":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content-all"},[a("h1",{staticClass:"text-center"},[e._v("商品收藏")]),a("div",{staticClass:"like-back"},[a("b-row",{staticClass:"w-100 vh-100 mt-5 card-content mx-auto"},[a("b-col",{staticClass:"w-100 d-flex flex-wrap mx-auto"},e._l(e.userLike.likes,(function(e){return a("b-card",{key:e._id,staticClass:"m-2 mt-4",staticStyle:{"box-shadow":"none"},attrs:{"img-src":e.products?e.products.image:"","img-top":""}})})),1)],1)],1)])},s=[],n=a("1da1"),i=(a("96cf"),{data:function(){return{userLike:{}}},created:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,!e.user.isLogin){t.next=8;break}return t.next=4,e.api.get("/users/like/list/"+e.user._id,{headers:{authorization:"Bearer "+e.user.token}});case 4:a=t.sent,r=a.data,e.userLike=r.result,console.log(e.userLike);case 8:t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),e.$swal({icon:"error",title:"錯誤",text:t.t0.response.data.message});case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()}}),c=i,o=a("2877"),u=Object(o["a"])(c,r,s,!1,null,null,null);t["default"]=u.exports}}]);
//# sourceMappingURL=share.aecca06d.js.map