(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"33yf":function(t,e,r){(function(t){function n(t,e){for(var r=0,n=t.length-1;n>=0;n--){var i=t[n];"."===i?t.splice(n,1):".."===i?(t.splice(n,1),r++):r&&(t.splice(n,1),r--)}if(e)for(;r--;r)t.unshift("..");return t}function i(t,e){if(t.filter)return t.filter(e);for(var r=[],n=0;n<t.length;n++)e(t[n],n,t)&&r.push(t[n]);return r}r("0l/t"),r("KKXr"),e.resolve=function(){for(var e="",r=!1,o=arguments.length-1;o>=-1&&!r;o--){var a=o>=0?arguments[o]:t.cwd();if("string"!=typeof a)throw new TypeError("Arguments to path.resolve must be strings");a&&(e=a+"/"+e,r="/"===a.charAt(0))}return(r?"/":"")+(e=n(i(e.split("/"),(function(t){return!!t})),!r).join("/"))||"."},e.normalize=function(t){var r=e.isAbsolute(t),a="/"===o(t,-1);return(t=n(i(t.split("/"),(function(t){return!!t})),!r).join("/"))||r||(t="."),t&&a&&(t+="/"),(r?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(i(t,(function(t,e){if("string"!=typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))},e.relative=function(t,r){function n(t){for(var e=0;e<t.length&&""===t[e];e++);for(var r=t.length-1;r>=0&&""===t[r];r--);return e>r?[]:t.slice(e,r-e+1)}t=e.resolve(t).substr(1),r=e.resolve(r).substr(1);for(var i=n(t.split("/")),o=n(r.split("/")),a=Math.min(i.length,o.length),s=a,c=0;c<a;c++)if(i[c]!==o[c]){s=c;break}var u=[];for(c=s;c<i.length;c++)u.push("..");return(u=u.concat(o.slice(s))).join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){if("string"!=typeof t&&(t+=""),0===t.length)return".";for(var e=t.charCodeAt(0),r=47===e,n=-1,i=!0,o=t.length-1;o>=1;--o)if(47===(e=t.charCodeAt(o))){if(!i){n=o;break}}else i=!1;return-1===n?r?"/":".":r&&1===n?"/":t.slice(0,n)},e.basename=function(t,e){var r=function(t){"string"!=typeof t&&(t+="");var e,r=0,n=-1,i=!0;for(e=t.length-1;e>=0;--e)if(47===t.charCodeAt(e)){if(!i){r=e+1;break}}else-1===n&&(i=!1,n=e+1);return-1===n?"":t.slice(r,n)}(t);return e&&r.substr(-1*e.length)===e&&(r=r.substr(0,r.length-e.length)),r},e.extname=function(t){"string"!=typeof t&&(t+="");for(var e=-1,r=0,n=-1,i=!0,o=0,a=t.length-1;a>=0;--a){var s=t.charCodeAt(a);if(47!==s)-1===n&&(i=!1,n=a+1),46===s?-1===e?e=a:1!==o&&(o=1):-1!==e&&(o=-1);else if(!i){r=a+1;break}}return-1===e||-1===n||0===o||1===o&&e===n-1&&e===r+1?"":t.slice(e,n)};var o="b"==="ab".substr(-1)?function(t,e,r){return t.substr(e,r)}:function(t,e,r){return e<0&&(e=t.length+e),t.substr(e,r)}}).call(this,r("8oxB"))},"8oxB":function(t,e){var r,n,i=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(t){if(r===setTimeout)return setTimeout(t,0);if((r===o||!r)&&setTimeout)return r=setTimeout,setTimeout(t,0);try{return r(t,0)}catch(e){try{return r.call(null,t,0)}catch(e){return r.call(this,t,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:o}catch(t){r=o}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(t){n=a}}();var c,u=[],l=!1,f=-1;function p(){l&&c&&(l=!1,c.length?u=c.concat(u):f=-1,u.length&&h())}function h(){if(!l){var t=s(p);l=!0;for(var e=u.length;e;){for(c=u,u=[];++f<e;)c&&c[f].run();f=-1,e=u.length}c=null,l=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{n(t)}catch(e){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(t)}}function m(t,e){this.fun=t,this.array=e}function g(){}i.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];u.push(new m(t,e)),1!==u.length||l||s(h)},m.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=g,i.addListener=g,i.once=g,i.off=g,i.removeListener=g,i.removeAllListeners=g,i.emit=g,i.prependListener=g,i.prependOnceListener=g,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},CwrG:function(t,e,r){"use strict";var n=r("wTIg"),i=r("gMUm"),o=(r("q1tI"),r("qKvR")),a=function(t){var e=t.copyright;return Object(o.c)("div",{className:"site__copyright"},e)},s=r("ZmJU"),c=(e.a=function(){var t=i.data;return Object(o.c)(u,null,Object(o.c)(s.a,null,Object(o.c)(c,null,Object(o.c)(a,{copyright:t.site.siteMetadata.copyright}))))},Object(n.a)("div",{target:"e1qetgf0"})({name:"ojp4ba",styles:"display:flex;bottom:0;align-items:center;padding:1.5rem 0 4rem 0;justify-content:space-between;@media (max-width:960px){flex-direction:column;}"})),u=Object(n.a)("div",{target:"e1qetgf1"})({name:"1piq29w",styles:"position:relative;margin:140px auto 50px;"})},ZmJU:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r("wTIg"),i=Object(n.a)("div",{target:"e1d9lmjg0"})({name:"1bxe6km",styles:"max-width:1280px;margin:0 auto;width:90%;@media (min-width:600px){width:90%;}@media (min-width:993px){width:80%;}"})},cKXd:function(t,e,r){"use strict";r.d(e,"a",(function(){return p}));var n=r("wTIg"),i=(r("q1tI"),r("Wbzz")),o=r("ZmJU"),a=Object(n.a)("button",{target:"eu8jobw0"})({name:"1guqjzb",styles:"opacity:0.65;border-radius:5px;width:40px;height:25px;position:relative;align-items:center;justify-content:center;transition:opacity 0.3s ease;margin-left:15px;background:rgba(255,255,255,0.01);border:transparent;&:hover{opacity:1;}"}),s=Object(n.a)("div",{target:"eu8jobw1"})("cursor:pointer;position:relative;height:24px;width:24px;border-radius:50%;background:",(function(t){return t.theme.colors.primary}),";border:",(function(t){return t.isLight?"4px":"2px"})," solid ",(function(t){return t.theme.colors.primary}),";transform:scale(",(function(t){return t.isLight?.57:1}),");transition:all 0.45s ease;overflow:",(function(t){return t.isLight?"visible":"hidden"}),";&::after{content:'';position:absolute;right:-9px;top:-9px;height:24px;width:24px;border:2px solid ",(function(t){return t.theme.colors.primary}),";border-radius:50%;transform:translate(",(function(t){return t.isLight?"0, 0":"14px, -14px"}),");transition:transform 0.45s ease;opacity:",(function(t){return t.isLight?0:1}),";}&::before{content:'';width:8px;height:8px;border-radius:50%;margin:-4px 0 0 -4px;position:absolute;top:50%;left:50%;box-shadow:0 -23px 0 ",(function(t){return t.theme.colors.primary}),",0 23px 0 ",(function(t){return t.theme.colors.primary}),",23px 0 0 ",(function(t){return t.theme.colors.primary}),",-23px 0 0 ",(function(t){return t.theme.colors.primary}),",15px 15px 0 ",(function(t){return t.theme.colors.primary}),",-15px 15px 0 ",(function(t){return t.theme.colors.primary}),",15px -15px 0 ",(function(t){return t.theme.colors.primary}),",-15px -15px 0 ",(function(t){return t.theme.colors.primary}),";transform:scale(",(function(t){return t.isLight?1:0}),");transition:all 0.35s ease;}"),c=Object(n.a)("div",{target:"eu8jobw2"})("position:absolute;right:-1px;top:-8px;height:24px;width:24px;border-radius:50%;border:0;background:",(function(t){return t.theme.colors.background}),";transform:translate(",(function(t){return t.isLight?"14px, -14px":"0, 0"}),");transition:",(function(t){return t.theme.colors.primary}),",transform 0.45s ease;opacity:",(function(t){return t.isLight?0:1}),";"),u=r("PcS7"),l=r("qKvR");function f(){var t=Object(u.b)(),e=t[0],r=t[1],n="light"===e;return Object(l.c)(a,{onClick:function(t){t.preventDefault(),r(n?"dark":"light")},"aria-label":n?"Light mode activated":"Dark mode activated"},Object(l.c)(s,{isLight:n}),Object(l.c)(c,{isLight:n}))}var p=function(){return Object(l.c)(h,null,Object(l.c)(g,null,Object(l.c)(o.a,null,Object(l.c)(m,null,Object(l.c)("a",{href:"https://github.com/pehcy",rel:"noopener noreferrer",target:"_blank"},"GitHub"),Object(l.c)(i.Link,{to:"/"},"Home"),Object(l.c)(i.Link,{to:"/articles"},"Articles"),Object(l.c)(f,null)))))},h=Object(n.a)("div",{target:"e1rve4nr0"})({name:"szfvsw",styles:"background:transparent;width:100%;"}),m=Object(n.a)("div",{target:"e1rve4nr1"})({name:"1tumew4",styles:"align-items:center;display:flex;margin-left:auto;margin-right:1rem;width:max-content;@media (max-width:960px){display:block;}a{color:inherit;margin-right:2.5rem;&:last-child{margin-right:unset;}&:hover{text-decoration:none;}}"}),g=Object(n.a)("div",{target:"e1rve4nr2"})({name:"9049ub",styles:"padding:1.5rem 0;display:flex;align-items:center;justify-content:space-between;"})},gMUm:function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"copyright":"© All rights reserved | Made with Typescript + GatsbyJS"}}}}')},"x0B/":function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));r("qKvR"),r("33yf");var n={name:"1yr7lc5",styles:'@font-face{font-family:"Inter","system-ui","-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","sans-serif";font-weight:400;font-style:normal;}@font-face{fontfamily:JetBrainsMono;font-weight:400;font-style:normal;src:url("");font-display:swap;}a{color:inherit;text-decoration:none;cursor:pointer;}body{font-family:"Inter","system-ui","-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","sans-serif";font-weight:400;}'}}}]);
//# sourceMappingURL=9d55517ac2ea42203158741a97624851de93a9ab-e5da68dd7c77ca93b844.js.map