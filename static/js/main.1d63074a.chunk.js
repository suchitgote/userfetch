(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{19:function(t,e,n){},20:function(t,e,n){},40:function(t,e,n){"use strict";n.r(e);var c=n(2),a=n.n(c),r=n(13),s=n.n(r),o=(n(19),n(3)),i=(n(20),n(14)),l=n.n(i),d=n(0);var u=function(t){return Object(d.jsxs)("div",{className:"Usercard",children:[Object(d.jsxs)("div",{className:"info",children:[Object(d.jsxs)("h3",{children:["Email : ",t.product.email,"  "]}),Object(d.jsxs)("h3",{children:["First name : ",t.product.first_name,"  "]}),Object(d.jsxs)("h3",{children:["Last name : ",t.product.last_name,"  "]})]}),Object(d.jsx)("figure",{children:Object(d.jsx)("img",{src:t.product.avatar,alt:"userpic"})})]})};var j=function(t){var e="https://reqres.in/api/users?page=".concat(t.pageno),n=Object(c.useState)({loading:!1,data:null,error:!1}),a=Object(o.a)(n,2),r=a[0],s=a[1];Object(c.useEffect)((function(){s({loading:!0,data:null,error:!1}),l.a.get(e).then((function(t){s({loading:!1,data:t.data,error:!1})})).catch((function(){s({loading:!1,data:null,error:!0})}))}),[e]);var i=null;return r.error&&(i=Object(d.jsx)("p",{children:"there was an console.error please refresh or try again later."})),r.loading&&(i=Object(d.jsx)("h1",{children:" loading..."})),r.data&&(console.log("products.data",r.data),console.log("products.data.data",r.data.data),i=r.data.data.map((function(t,e){return Object(d.jsx)("div",{className:"userlist",children:Object(d.jsx)(u,{product:t},e)})}))),Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"ALL USERS"}),i]})};var b=function(){var t=Object(c.useState)(""),e=Object(o.a)(t,2),n=e[0],a=e[1],r=function(t){a(t),document.querySelectorAll("button")[t-1].style.background="white",t=1===t?2:1,document.querySelectorAll("button")[t-1].style.background="skyblue"};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(j,{pageno:n}),Object(d.jsxs)("div",{className:"button",children:[Object(d.jsx)("button",{onClick:function(){r(1)},children:" 1 "}),Object(d.jsx)("button",{onClick:function(){r(2)},children:" 2 "})]})]})},h=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,r=e.getLCP,s=e.getTTFB;n(t),c(t),a(t),r(t),s(t)}))};s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(b,{})}),document.getElementById("root")),h()}},[[40,1,2]]]);
//# sourceMappingURL=main.1d63074a.chunk.js.map