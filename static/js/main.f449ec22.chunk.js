(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,n){e.exports=n(50)},48:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(25),o=n(18),c=function(){return a.createElement("header",null,a.createElement("span",{className:"date"},"Tuesday, August 13th"),a.createElement("h1",null,"Today"),a.createElement("div",{className:"avatar"},a.createElement(o.Avatar,null)))},i=n(11),s=n(7),l=n(17);var u=a.memo(function(){var e=Object(s.c)();return a.createElement(s.a.div,{className:"content-container",style:Object(i.a)({},e,{originY:0,originX:0})},a.createElement(o.LoremIpsum,{p:6,avgWordsPerSentence:6,avgSentencesPerParagraph:4}))}),d={type:"spring",stiffness:200,damping:30},m={type:"spring",stiffness:300,damping:35},p=function(e){var t=e.title,n=e.category,r=e.isSelected,o=Object(s.c)(),c=r?30:15,l=c;return a.createElement(s.a.div,{className:"title-container",initial:!1,animate:{x:c,y:l},transition:r?d:m,transformTemplate:f,style:Object(i.a)({},o,{originX:0,originY:0})},a.createElement("span",{className:"category"},n),a.createElement("h2",null,t))},f=function(e){var t=e.x,n=e.y,a=e.scaleX,r=e.scaleY;return"scaleX(".concat(a,") scaleY(").concat(r,") translate(").concat(t,", ").concat(n,") translateZ(0)")},g=function(e){var t=e.id,n=e.isSelected,r=e.pointOfInterest,o=void 0===r?0:r,c=e.backgroundColor,l=Object(s.c)();return a.createElement(s.a.div,{className:"card-image-container",style:Object(i.a)({},l,{backgroundColor:c,originX:0,originY:0})},a.createElement(s.a.img,{className:"card-image",src:"images/".concat(t,".jpg"),alt:"",initial:!1,animate:n?{x:-20,y:-20}:{x:-o,y:0},transition:m}))},b=n(29);var y=n(14),v=n(5),O=n(26),E=5,h=.2;function j(e,t,n){e.isAnimating()||e.start(function(a){var r=Object(y.e)({from:t,to:n,velocity:e.getVelocity(),stiffness:400,damping:40}).start({update:function(t){return e.set(t)},complete:a});return function(){return r.stop()}})}var C=Object(O.debounce)(j,100);var k=150,S=Object(a.memo)(function(e){var t=e.isSelected,n=e.id,r=e.title,o=e.category,c=e.history,f=e.pointOfInterest,y=e.backgroundColor,O=Object(s.d)(0),S=Object(s.d)(t?2:0),A=function(e){var t=Object(s.d)(1),n=Object(s.d)(1),r=Object(s.c)({scaleX:t,scaleY:n}),o=Object(s.d)("".concat(e,"px"));return Object(a.useEffect)(function(){function t(){var t=r.scaleX.get(),n=r.scaleY.get(),a=t*e+"px",c=n*e+"px";o.set("".concat(a," ").concat(c))}var n=r.scaleX.onChange(t),a=r.scaleY.onChange(t);return function(){n(),a()}},[e]),{scaleX:t,scaleY:n,borderTopLeftRadius:o,borderTopRightRadius:o,borderBottomLeftRadius:o,borderBottomRightRadius:o}}(20),I=Object(a.useRef)(null),N=function(e,t){var n=Object(a.useState)({top:0,bottom:0}),r=Object(b.a)(n,2),o=r[0],c=r[1];return Object(a.useEffect)(function(){if(t){var n=e.current,a=window.innerHeight,r=n.offsetTop,o=n.offsetHeight,i=a-2*r,s=Math.min(i-o,0);c({top:s,bottom:0})}},[t]),o}(I,t);function w(){O.get()>k&&c.push("/demo1")}var T=Object(a.useRef)(null);return function(e,t,n,a,r){Object(s.b)(e,"wheel",r&&function(e){e.preventDefault();var r=t.get(),o=r-e.deltaY,c=!1,i=n&&o>=n.top&&o<=n.bottom;n&&!i&&((o=Object(v.f)(r,o,h))<n.top&&(e.deltaY<=E?(j(t,o,n.top),c=!0):C(t,o,n.top)),o>n.bottom&&(e.deltaY>=-E?(j(t,o,n.bottom),c=!0):C(t,o,n.bottom))),c?C.cancel():(t.stop(),t.set(o)),a(e)},{passive:!1})}(T,O,N,w,t),a.createElement("li",{ref:T,className:"card"},a.createElement(Y,{isSelected:t}),a.createElement("div",{className:"card-content-container ".concat(t&&"open")},a.createElement(s.a.div,{ref:I,className:"card-content",style:Object(i.a)({},A,{zIndex:S,y:O}),layoutTransition:t?d:m,drag:!!t&&"y",dragConstraints:N,onDrag:w,onUpdate:function(e){t?S.set(2):!t&&e.scaleX<1.01&&S.set(0)}},a.createElement(g,{id:n,isSelected:t,pointOfInterest:f,backgroundColor:y}),a.createElement(p,{title:r,category:o,isSelected:t}),a.createElement(u,null))),!t&&a.createElement(l.b,{to:n,className:"card-open-link"}))},function(e,t){return e.isSelected===t.isSelected}),Y=function(e){var t=e.isSelected;return a.createElement(s.a.div,{initial:!1,animate:{opacity:t?1:0},transition:{duration:.2},style:{pointerEvents:t?"auto":"none"},className:"overlay"},a.createElement(l.b,{to:"/demo1"}))},A=n(12),I=function(e){var t=e.match,n=e.history;return a.createElement("ul",{className:"card-list"},w.map(function(e){return a.createElement(S,Object.assign({key:e.id,isSelected:t.params.id===e.id,history:n},e))}))},N=function(){return a.createElement(l.a,null,a.createElement(A.a,{path:["/demo1/:id","/demo1/"],component:I}))},w=[{id:"c",category:"Pizza",title:"5 Food Apps Delivering the Best of Your City",pointOfInterest:80,backgroundColor:"#814A0E"},{id:"f",category:"How to",title:"Arrange Your Apple Devices for the Gram",pointOfInterest:120,backgroundColor:"#959684"},{id:"a",category:"Pedal Power",title:"Map Apps for the Superior Mode of Transport",pointOfInterest:260,backgroundColor:"#5DBCD2"},{id:"g",category:"Holidays",title:"Our Pick of Apps to Help You Escape From Apps",pointOfInterest:200,backgroundColor:"#8F986D"},{id:"d",category:"Photography",title:"The Latest Ultra-Specific Photography Editing Apps",pointOfInterest:150,backgroundColor:"#FA6779"},{id:"h",category:"They're all the same",title:"100 Cupcake Apps for the Cupcake Connoisseur",pointOfInterest:60,backgroundColor:"#282F49"},{id:"e",category:"Cats",title:"Yes, They Are Sociopaths",pointOfInterest:200,backgroundColor:"#AC7441"},{id:"b",category:"Holidays",title:"Seriously the Only Escape is the Stratosphere",pointOfInterest:260,backgroundColor:"#CC555B"}];n(48);function T(){return a.createElement("div",{className:"container"},a.createElement(c,null),a.createElement(N,null))}var X=document.getElementById("root");Object(r.render)(a.createElement(T,null),X)}},[[30,2,1]]]);
//# sourceMappingURL=main.f449ec22.chunk.js.map