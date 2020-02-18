(this["webpackJsonpnaked-wines-tech-challenge"]=this["webpackJsonpnaked-wines-tech-challenge"]||[]).push([[0],{122:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(7),i=t.n(r),l=(t(80),t(39)),s=t.n(l),o=t(55),m=t(25),d=t(58),u=t.n(d),p=t(152),g=t(154),E=t(151),f=t(18),h=t(21),v=t(23),w=t(5),N=(t(31),t(59)),b=t.n(N),k=t(60),y=t.n(k),O=t(61),j=t.n(O),x=t(62),z=t.n(x);var C=function(e){switch(e.type){case"red":return c.a.createElement("img",{className:"product-image",src:b.a});case"white":return c.a.createElement("img",{className:"product-image",src:y.a});case"sparkling":return c.a.createElement("img",{className:"product-image",src:z.a});case"rose":return c.a.createElement("img",{className:"product-image",src:j.a})}},F=t(15);var S=function(e){var a=Object(n.useRef)("rating");return Object(n.useEffect)((function(){!function(t){var n=a.current.getElementsByClassName("star");Array.from(n).forEach((function(a){a.style.color=e.averageRating>=a.dataset.value?"#df171e":"black"}))}()}),[]),c.a.createElement("div",{className:"rating",ref:a,"data-rating":e.averageRating},Object(F.a)(Array(+e.numberOfStars).keys()).map((function(e){return c.a.createElement("span",{className:"star",key:e+1,"data-value":e+1},"\u2605")})))},R=Object(w.a)({root:{height:"100%",color:"white",backgroundColor:"#35b63e","&:hover":{backgroundColor:"#008506"}}})(p.a),W=Object(w.a)({root:{height:"100%",color:"white",backgroundColor:"#df171e","&:hover":{backgroundColor:"#a40000"}}})(p.a);var A=function(e){var a=e.product,t=Math.round(a.averageRating);return Object(f.a)(),c.a.createElement("div",{className:"product-card"},c.a.createElement("div",{className:"product-image-container"},c.a.createElement(C,{type:a.type}),c.a.createElement("div",{className:"product-label"},a.lowStock&&c.a.createElement("h6",{className:"badge badge-red"},"LOW STOCK")),c.a.createElement(g.a,{title:"Rating"},c.a.createElement("div",{className:"product-rating"},c.a.createElement(S,{numberOfStars:"5",averageRating:t}))),c.a.createElement(g.a,{title:"Favourite"},c.a.createElement("div",{className:"product-favourite"},c.a.createElement(h.a,{icon:v.b,size:"lg",onClick:""})))),c.a.createElement("div",{className:"product-name"},c.a.createElement("h2",null,a.productName)),c.a.createElement("div",{className:"product-info"},c.a.createElement("h3",null,a.producer.firstName," ",a.producer.lastName),c.a.createElement("div",{className:"product-style"},c.a.createElement(g.a,{title:"Grape",placement:"left"},c.a.createElement("div",null,c.a.createElement(h.a,{className:"style-icon",icon:v.e,fixedWidth:!0,size:"sm"}))),c.a.createElement("span",null,a.wineGrape)),c.a.createElement("div",{className:"product-origin"},c.a.createElement(g.a,{title:"Origin",placement:"left"},c.a.createElement("div",null,c.a.createElement(h.a,{className:"style-icon",icon:v.a,fixedWidth:!0,size:"sm"}))),c.a.createElement("span",null,a.origin)),c.a.createElement("div",{className:"product-abv"},c.a.createElement(g.a,{title:"ABV%",placement:"left"},c.a.createElement("div",null,c.a.createElement(h.a,{className:"style-icon",icon:v.d,fixedWidth:!0,size:"sm"}))),c.a.createElement("span",null,a.alcoholStrength,"%"))),c.a.createElement("div",{className:"product-price"},c.a.createElement("p",null,"Market Price: ",a.price),a.markedOutOfStock&&c.a.createElement("div",{className:"oos-btn"},c.a.createElement(W,{variant:"contained",color:"primary",size:"large"},"Out of stock")),!a.markedOutOfStock&&c.a.createElement("div",{className:"product-form"},c.a.createElement("div",{className:"product-quantity"},c.a.createElement(E.a,{size:"small",variant:"outlined",defaultValue:a.productQuantity})),c.a.createElement("div",{className:"atb-btn"},c.a.createElement(R,{variant:"contained",color:"primary",size:"large"},"Add to Basket")))))};var B=function(){return c.a.createElement("div",{className:"app-header"},c.a.createElement("div",{className:"header-left"},c.a.createElement("h1",null,"Champion Wines")),c.a.createElement("div",{className:"header-right"},c.a.createElement(p.a,{startIcon:c.a.createElement(h.a,{icon:v.c,size:"lg",onClick:""}),variant:"outlined",color:"secondary",size:"large"},"Add card")))},G=t(66),I=t.n(G);var J=function(){return c.a.createElement("div",{className:"loading-icon"},c.a.createElement(I.a,{type:"Rings",color:"black",height:100,width:100}))},M=t(67),V=t(150),q=Object(M.a)({palette:{primary:{main:"#1a237e"},secondary:{main:"#ffffff"}}}),K=function(e){return c.a.createElement("section",{className:"products"},e.wines.map((function(e){return c.a.createElement(A,{key:e.id,product:e})})))};var L=function(){var e=Object(n.useState)({wines:[],isFetching:!1}),a=Object(m.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)((function(){(function(){var e=Object(o.a)(s.a.mark((function e(){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r({wines:t.wines,isFetching:!0}),e.next=4,u.a.get("https://naked-wines-tech-challenge-data.s3.eu-west-1.amazonaws.com/wine-data.json");case 4:a=e.sent,console.log(a.data),r({wines:a.data.wines,isFetching:!1}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0),r({wines:t.wines,isFetching:!0});case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}})()()}),[]),c.a.createElement(V.a,{theme:q},c.a.createElement("div",{className:"app"},c.a.createElement(B,null),c.a.createElement("main",{className:"main-section",role:"main"},c.a.createElement("div",{className:"app-body"},t.isFetching&&c.a.createElement(J,null),!t.isFetching&&c.a.createElement(K,{wines:t.wines,isFetching:t.isFetching})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},31:function(e,a,t){},59:function(e,a,t){e.exports=t.p+"static/media/red-wine-placeholder.8d85c2f9.jpg"},60:function(e,a,t){e.exports=t.p+"static/media/white-wine-placeholder.88493f7c.jpg"},61:function(e,a,t){e.exports=t.p+"static/media/rose-wine-placeholder-2.4d07052b.jpg"},62:function(e,a,t){e.exports=t.p+"static/media/sparkling-wine-placeholder-2.db8c67bb.jpeg"},75:function(e,a,t){e.exports=t(122)},80:function(e,a,t){}},[[75,1,2]]]);
//# sourceMappingURL=main.81766ee0.chunk.js.map