(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),r=n(13),s=n.n(r),i=(n(19),n(3)),o=(n(20),n(14)),l=n.n(o),d=n(0);var j=function(e){return Object(d.jsxs)("div",{className:"Usercard",children:[Object(d.jsxs)("div",{className:"info",children:[Object(d.jsxs)("div",{className:"subinfo",children:[Object(d.jsx)("h4",{children:"Email : "}),Object(d.jsxs)("span",{children:["  ",e.product.email,"  "]})]}),Object(d.jsxs)("div",{className:"subinfo",children:[Object(d.jsx)("h4",{children:"first_name : "}),Object(d.jsxs)("span",{children:["  ",e.product.first_name,"  "]})]}),Object(d.jsxs)("div",{className:"subinfo",children:[Object(d.jsx)("h4",{children:"last_name : "}),Object(d.jsxs)("span",{children:["  ",e.product.last_name,"  "]})]})]}),Object(d.jsx)("figure",{children:Object(d.jsx)("img",{src:e.product.avatar,alt:"userpic"})})]})};var u=function(e){var t="https://reqres.in/api/users?page=".concat(e.pageno),n=Object(c.useState)({loading:!1,data:null,error:!1}),a=Object(i.a)(n,2),r=a[0],s=a[1];Object(c.useEffect)((function(){s({loading:!0,data:null,error:!1}),l.a.get(t).then((function(e){s({loading:!1,data:e.data,error:!1})})).catch((function(){s({loading:!1,data:null,error:!0})}))}),[t]);var o=null;return r.error&&(o=Object(d.jsx)("p",{children:"there was an console.error please refresh or try again later."})),r.loading&&(o=Object(d.jsx)("h1",{children:" loading..."})),r.data&&(console.log("products.data",r.data),console.log("products.data.data",r.data.data),o=r.data.data.map((function(e,t){return Object(d.jsx)("div",{className:"userlist",children:Object(d.jsx)(j,{product:e},t)})}))),Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"ALL USERS"}),o]})};var b=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],a=t[1],r=function(e){a(e),document.querySelectorAll("button")[e-1].style.background="white",e=1===e?2:1,document.querySelectorAll("button")[e-1].style.background="skyblue"};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(u,{pageno:n}),Object(d.jsxs)("div",{className:"button",children:[Object(d.jsx)("button",{onClick:function(){r(1)},children:" 1 "}),Object(d.jsx)("button",{onClick:function(){r(2)},children:" 2 "})]})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(b,{})}),document.getElementById("root")),h()}},[[40,1,2]]]);
//# sourceMappingURL=main.ce770d06.chunk.js.map