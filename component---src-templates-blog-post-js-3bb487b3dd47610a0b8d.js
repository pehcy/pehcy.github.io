(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{yZlL:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return m}));n("jm62"),n("yt8O"),n("RW0V"),n("f3/d"),n("a1Th"),n("Btvt"),n("XfO3"),n("HEwt"),n("rGqo"),n("rE2o"),n("ioFf");var r=n("q1tI"),c=n("Wbzz"),o=n("6Gk8"),i=n("Bl7J"),l=n("vrFN"),a=n("p3AD"),u=(n("pIFo"),n("qKvR")),s={name:"16ms1ue",styles:"position:sticky;top:0;font-size:85%;height:0px;> ul{transform:translateX(calc(-100% - 4em)) translateY(6em);padding-left:0px;};ul{width:calc(-4em - 340px + 50vw);li{display:inline-block;list-style:outside none none;a{color:#88A0A8;box-shadow:none;}.isActive{color:black;}}};"};var f=function(e){var t=e.html,n=s,c=function(e,t){void 0===t&&(t=void 0);var n=Object(r.useState)(""),c=n[0],o=n[1];return Object(r.useEffect)((function(){var n=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&o(e.target.id)}))}),{rootMargin:t||"0% 0% -80% 0%"});return e.forEach((function(e){n.observe(document.getElementById(e))})),function(){e.forEach((function(e){n.unobserve(document.getElementById(e))}))}}),[]),c}(Object(r.useMemo)((function(){var e=[];if("undefined"!=typeof document){var n=document.createElement("html");n.innerHTML=t,n.querySelectorAll("a").forEach((function(t){e.push(t.hash.replace("#",""))}))}return e}),[]));return Object(r.useEffect)((function(){document.querySelectorAll(".Toc a").forEach((function(e){e.classList.remove("isActive")}));var e=document.querySelectorAll('.Toc a[href$="/#'+c+'"]');e.length&&e[0].classList.add("isActive")}),[c]),Object(u.c)("div",{className:"Toc",dangerouslySetInnerHTML:{__html:t},css:n})};function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){O(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.default=function(e){var t=e.data,n=e.pageContext,r=e.location,s=t.markdownRemark,b=n.previous,O=n.next;[576,768,992,1200].map((function(e){return"@media (min-width: "+e+"px)"}));return Object(u.c)(i.a,{location:r},Object(u.c)(l.a,{title:s.frontmatter.title,description:s.frontmatter.description||s.excerpt}),Object(u.c)("article",null,Object(u.c)("header",null,Object(u.c)("h1",{style:{marginTop:Object(a.a)(1),marginBottom:0}},s.frontmatter.title),Object(u.c)("p",{style:p(p({},Object(a.b)(-.2)),{},{display:"block",marginBottom:Object(a.a)(1)})},s.frontmatter.date)),Object(u.c)(f,{html:s.tableOfContents}),Object(u.c)("section",{dangerouslySetInnerHTML:{__html:s.html}}),Object(u.c)("hr",{style:{marginBottom:Object(a.a)(1)}}),Object(u.c)("footer",null,Object(u.c)(o.a,null))),Object(u.c)("nav",null,Object(u.c)("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},Object(u.c)("li",null,b&&Object(u.c)(c.Link,{to:b.fields.slug,rel:"prev"},"← ",b.frontmatter.title)),Object(u.c)("li",null,O&&Object(u.c)(c.Link,{to:O.fields.slug,rel:"next"},O.frontmatter.title," →")))))};var m="3374384000"}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-3bb487b3dd47610a0b8d.js.map