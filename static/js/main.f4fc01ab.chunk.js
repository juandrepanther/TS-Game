(this["webpackJsonpts-game"]=this["webpackJsonpts-game"]||[]).push([[0],{18:function(e,t,n){},25:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(9),r=n.n(s);n(18);function i(e){var t=e,n=setInterval((function(){var e;e=t,document.getElementById("timer").innerText="".concat(e-1," sec."),0===(t-=1)&&clearInterval(n)}),1e3)}var o=n(4),d=n(8),l=n(2),u=(n(25),n(6)),j=Object(u.b)({name:"seconds",initialState:{seconds:0,isStarted:!1},reducers:{addSeconds:function(e,t){e.seconds=t.payload},decrementSeconds:function(e){e.seconds-=1},changeIsStarted:function(e,t){e.isStarted=t.payload}}}),b=j.actions,h=b.addSeconds,m=(b.decrementSeconds,b.changeIsStarted),O=j.reducer,f=n(1),v=function(e){var t=e.children,n=parseInt(t),c=Object(o.b)();return Object(f.jsx)(d.b,{onClick:function(){return c(h(n)),void c(m(!0))},className:"button-6",to:"/DragElements",children:"".concat(n," seconds")})};n(27);function x(){return Object(f.jsxs)("div",{className:"start-page",children:[Object(f.jsx)("div",{className:"start-page-title",children:"Choose Timer value"}),Object(f.jsxs)("div",{className:"btn-wrapper",children:[Object(f.jsx)(v,{children:"10"}),Object(f.jsx)(v,{children:"20"}),Object(f.jsx)(v,{children:"30"})]})]})}n(28);var p=Object(u.b)({name:"stats",initialState:{value:0},reducers:{increment:function(e,t){e.value+=t.payload}}}),g=p.actions.increment,S=p.reducer,k=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.sharkIndex.sharkIndex}));return Object(f.jsx)("div",{onDragOver:function(e){return e.preventDefault()},onDrop:function(){return 0===t?e(g(1)):console.log("not yellow")},className:"basket",children:"DROP YELLOW SHARKS"})},I=n(7),N=(n(29),Object(u.b)({name:"sharkIndex",initialState:{sharkIndex:0},reducers:{selectShark:function(e,t){e.sharkIndex=t.payload}}})),y=N.actions.selectShark,E=N.reducer,D=n.p+"static/media/shark-small.a7ca0144.png",M=n.p+"static/media/shark-daddy.43ec729e.png",T=[D,n.p+"static/media/shark-papa.cd768167.png",M,n.p+"static/media/shark-grand.7986e720.png"],w=function(e,t){return Math.floor(Math.random()*(t-e+1)+e)};function R(){var e=Object(c.useState)(!0),t=Object(I.a)(e,2),n=t[0],a=t[1],s=Object(o.b)(),r=Object(l.f)();Object(c.useEffect)((function(){var e=setInterval((function(){var t;"0 sec."!==(null===(t=document.getElementById("timer"))||void 0===t?void 0:t.innerText)?(a((function(e){return!e})),s(m(!1))):(clearInterval(e),r("/TS-Game-Finish"))}),1e3);return function(){return clearInterval(e)}}),[s,r]);var i=function(){var e=Math.floor(Math.random()*T.length);return Object(f.jsx)("div",{style:{top:"".concat(w(0,470),"px"),left:"".concat(w(0,470),"px")},draggable:!0,className:"random-object",children:Object(f.jsx)("img",{src:T[e],alt:"",className:"main-shark",onMouseDown:function(){return s(y(e))}})})};return Object(f.jsx)("div",{className:"board",children:n&&T.map((function(e,t){return Object(f.jsx)(i,{},t)}))})}n(30);function B(){var e=Object(o.c)((function(e){return e.stats.value}));return Object(f.jsxs)("div",{className:"stats",children:[e,Object(f.jsx)("div",{className:"timer-title",children:"TIMER"}),Object(f.jsx)("div",{id:"timer"})]})}function F(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(R,{}),Object(f.jsx)(k,{}),Object(f.jsx)(B,{})]})}n(31);function G(){var e=Object(o.c)((function(e){return e})),t=e.stats.value,n=e.seconds.seconds;return Object(f.jsxs)("div",{className:"finish-page",children:[Object(f.jsx)("div",{className:"finish-page-title",children:"Your Results:"}),Object(f.jsx)("div",{className:"finish-page-result",children:"Within ".concat(n," seconds you collected ").concat(t," Yellow baby-sharks.")})]})}var Y=function(){var e=Object(o.c)((function(e){return e.seconds})),t=e.seconds;return e.isStarted&&i(t),Object(f.jsx)(d.a,{children:Object(f.jsx)("div",{className:"app-container",children:Object(f.jsxs)(l.c,{children:[Object(f.jsx)(l.a,{path:"/DragElements",element:Object(f.jsx)(F,{})}),Object(f.jsx)(l.a,{path:"/TS-Game",element:Object(f.jsx)(x,{})}),Object(f.jsx)(l.a,{path:"/TS-Game-Finish",element:Object(f.jsx)(G,{})})]})})})},C=Object(u.a)({reducer:{stats:S,seconds:O,sharkIndex:E}});r.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(o.a,{store:C,children:Object(f.jsx)(Y,{})})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.f4fc01ab.chunk.js.map