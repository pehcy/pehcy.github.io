(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"8+s/":function(t,e,n){"use strict";function r(t){return t&&"object"==typeof t&&"default"in t?t.default:t}n("V+eJ"),n("bWfx"),n("f3/d"),n("hHhE"),n("HAE/");var o=n("q1tI"),i=r(o),a=r(n("Gytx"));function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u=!("undefined"==typeof window||!window.document||!window.document.createElement);t.exports=function(t,e,n){if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,l=[];function T(){s=t(l.map((function(t){return t.props}))),f.canUseDOM?e(s):n&&(s=n(s))}var f=function(t){var e,n;function o(){return t.apply(this,arguments)||this}n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,o.peek=function(){return s},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=s;return s=void 0,l=[],t};var c=o.prototype;return c.shouldComponentUpdate=function(t){return!a(t,this.props)},c.componentWillMount=function(){l.push(this),T()},c.componentDidUpdate=function(){T()},c.componentWillUnmount=function(){var t=l.indexOf(this);l.splice(t,1),T()},c.render=function(){return i.createElement(r,this.props)},o}(o.Component);return c(f,"displayName","SideEffect("+function(t){return t.displayName||t.name||"Component"}(r)+")"),c(f,"canUseDOM",u),f}}},Gytx:function(t,e,n){n("2Spj"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),t.exports=function(t,e,n,r){var o=n?n.call(r,t,e):void 0;if(void 0!==o)return!!o;if(t===e)return!0;if("object"!=typeof t||!t||"object"!=typeof e||!e)return!1;var i=Object.keys(t),a=Object.keys(e);if(i.length!==a.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(e),u=0;u<i.length;u++){var s=i[u];if(!c(s))return!1;var l=t[s],T=e[s];if(!1===(o=n?n.call(r,l,T,s):void 0)||void 0===o&&l!==T)return!1}return!0}},Miam:function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"author":{"contacts":{"discord":"Chee Yung","github":"https://github.com/pehcy","linkedin":"https://www.linkedin.com/in/chee-yung-1228231b0/","twitter":"https://twitter.com/CheeYungPeh"}},"description":"A starter blog demonstrating what Gatsby can do.","canonical":"https://pehcy.github.io/","siteUrl":"https://pehcy.github.io","social":{"twitter":"CheeYungPeh"},"title":"pehcy\'s blog"}}}}')},TJpk:function(t,e,n){n("LK8F"),n("dZ+Y"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("8+KV"),n("/SS/"),n("hHhE"),n("V+eJ"),n("HAE/"),n("91GP"),e.__esModule=!0,e.Helmet=void 0;var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=T(n("q1tI")),a=T(n("17x9")),c=T(n("8+s/")),u=T(n("bmMU")),s=n("v1p5"),l=n("hFT/");function T(t){return t&&t.__esModule?t:{default:t}}function f(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}function p(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function E(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var d,A,h,S=(0,c.default)(s.reducePropsToState,s.handleClientStateChange,s.mapStateOnServer)((function(){return null})),y=(d=S,h=A=function(t){function e(){return p(this,e),E(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.shouldComponentUpdate=function(t){return!(0,u.default)(this.props,t)},e.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case l.TAG_NAMES.SCRIPT:case l.TAG_NAMES.NOSCRIPT:return{innerHTML:e};case l.TAG_NAMES.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},e.prototype.flattenArrayTypeChildren=function(t){var e,n=t.child,o=t.arrayTypeChildren,i=t.newChildProps,a=t.nestedChildren;return r({},o,((e={})[n.type]=[].concat(o[n.type]||[],[r({},i,this.mapNestedChildrenToProps(n,a))]),e))},e.prototype.mapObjectTypeChildren=function(t){var e,n,o=t.child,i=t.newProps,a=t.newChildProps,c=t.nestedChildren;switch(o.type){case l.TAG_NAMES.TITLE:return r({},i,((e={})[o.type]=c,e.titleAttributes=r({},a),e));case l.TAG_NAMES.BODY:return r({},i,{bodyAttributes:r({},a)});case l.TAG_NAMES.HTML:return r({},i,{htmlAttributes:r({},a)})}return r({},i,((n={})[o.type]=r({},a),n))},e.prototype.mapArrayTypeChildrenToProps=function(t,e){var n=r({},e);return Object.keys(t).forEach((function(e){var o;n=r({},n,((o={})[e]=t[e],o))})),n},e.prototype.warnOnInvalidChildren=function(t,e){return!0},e.prototype.mapChildrenToProps=function(t,e){var n=this,r={};return i.default.Children.forEach(t,(function(t){if(t&&t.props){var o=t.props,i=o.children,a=f(o,["children"]),c=(0,s.convertReactPropstoHtmlAttributes)(a);switch(n.warnOnInvalidChildren(t,i),t.type){case l.TAG_NAMES.LINK:case l.TAG_NAMES.META:case l.TAG_NAMES.NOSCRIPT:case l.TAG_NAMES.SCRIPT:case l.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:t,arrayTypeChildren:r,newChildProps:c,nestedChildren:i});break;default:e=n.mapObjectTypeChildren({child:t,newProps:e,newChildProps:c,nestedChildren:i})}}})),e=this.mapArrayTypeChildrenToProps(r,e)},e.prototype.render=function(){var t=this.props,e=t.children,n=f(t,["children"]),o=r({},n);return e&&(o=this.mapChildrenToProps(e,o)),i.default.createElement(d,o)},o(e,null,[{key:"canUseDOM",set:function(t){d.canUseDOM=t}}]),e}(i.default.Component),A.propTypes={base:a.default.object,bodyAttributes:a.default.object,children:a.default.oneOfType([a.default.arrayOf(a.default.node),a.default.node]),defaultTitle:a.default.string,defer:a.default.bool,encodeSpecialCharacters:a.default.bool,htmlAttributes:a.default.object,link:a.default.arrayOf(a.default.object),meta:a.default.arrayOf(a.default.object),noscript:a.default.arrayOf(a.default.object),onChangeClientState:a.default.func,script:a.default.arrayOf(a.default.object),style:a.default.arrayOf(a.default.object),title:a.default.string,titleAttributes:a.default.object,titleTemplate:a.default.string},A.defaultProps={defer:!0,encodeSpecialCharacters:!0},A.peek=d.peek,A.rewind=function(){var t=d.rewind();return t||(t=(0,s.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},h);y.renderStatic=y.rewind,e.Helmet=y,e.default=y},VXBa:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("q1tI"),o=n("PcS7"),i=n("qKvR"),a=function(t){var e=t.children,n=Object(o.b)()[0];return Object(r.useEffect)((function(){parent.postMessage({theme:n},"*")}),[n]),Object(i.c)("div",null,e)}},bmMU:function(t,e,n){"use strict";n("f3/d"),n("SRfc"),n("a1Th"),n("h7Nl"),n("Oyvg"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("LK8F");var r=Array.isArray,o=Object.keys,i=Object.prototype.hasOwnProperty,a="undefined"!=typeof Element;t.exports=function(t,e){try{return function t(e,n){if(e===n)return!0;if(e&&n&&"object"==typeof e&&"object"==typeof n){var c,u,s,l=r(e),T=r(n);if(l&&T){if((u=e.length)!=n.length)return!1;for(c=u;0!=c--;)if(!t(e[c],n[c]))return!1;return!0}if(l!=T)return!1;var f=e instanceof Date,p=n instanceof Date;if(f!=p)return!1;if(f&&p)return e.getTime()==n.getTime();var E=e instanceof RegExp,d=n instanceof RegExp;if(E!=d)return!1;if(E&&d)return e.toString()==n.toString();var A=o(e);if((u=A.length)!==o(n).length)return!1;for(c=u;0!=c--;)if(!i.call(n,A[c]))return!1;if(a&&e instanceof Element&&n instanceof Element)return e===n;for(c=u;0!=c--;)if(!("_owner"===(s=A[c])&&e.$$typeof||t(e[s],n[s])))return!1;return!0}return e!=e&&n!=n}(t,e)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},"hFT/":function(t,e,n){n("DNiP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("bWfx"),e.__esModule=!0;e.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var r=e.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},o=(e.VALID_TAG_NAMES=Object.keys(r).map((function(t){return r[t]})),e.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},e.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});e.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},e.HTML_TAG_MAP=Object.keys(o).reduce((function(t,e){return t[o[e]]=e,t}),{}),e.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],e.HELMET_ATTRIBUTE="data-react-helmet"},v1p5:function(t,e,n){(function(t){n("dZ+Y"),n("KKXr"),n("eM6i"),n("8+KV"),n("LK8F"),n("V+eJ"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("0l/t"),n("bWfx"),n("DNiP"),n("pIFo"),n("91GP"),n("rE2o"),n("ioFf"),e.__esModule=!0,e.warn=e.requestAnimationFrame=e.reducePropsToState=e.mapStateOnServer=e.handleClientStateChange=e.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=u(n("q1tI")),a=u(n("MgzW")),c=n("hFT/");function u(t){return t&&t.__esModule?t:{default:t}}var s,l=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===e?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},T=function(t){var e=A(t,c.TAG_NAMES.TITLE),n=A(t,c.HELMET_PROPS.TITLE_TEMPLATE);if(n&&e)return n.replace(/%s/g,(function(){return e}));var r=A(t,c.HELMET_PROPS.DEFAULT_TITLE);return e||r||void 0},f=function(t){return A(t,c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},p=function(t,e){return e.filter((function(e){return void 0!==e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return o({},t,e)}),{})},E=function(t,e){return e.filter((function(t){return void 0!==t[c.TAG_NAMES.BASE]})).map((function(t){return t[c.TAG_NAMES.BASE]})).reverse().reduce((function(e,n){if(!e.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==t.indexOf(i)&&n[i])return e.concat(n)}return e}),[])},d=function(t,e,n){var o={};return n.filter((function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&b("Helmet: "+t+' should be of type "Array". Instead found type "'+r(e[t])+'"'),!1)})).map((function(e){return e[t]})).reverse().reduce((function(t,n){var r={};n.filter((function(t){for(var n=void 0,i=Object.keys(t),a=0;a<i.length;a++){var u=i[a],s=u.toLowerCase();-1===e.indexOf(s)||n===c.TAG_PROPERTIES.REL&&"canonical"===t[n].toLowerCase()||s===c.TAG_PROPERTIES.REL&&"stylesheet"===t[s].toLowerCase()||(n=s),-1===e.indexOf(u)||u!==c.TAG_PROPERTIES.INNER_HTML&&u!==c.TAG_PROPERTIES.CSS_TEXT&&u!==c.TAG_PROPERTIES.ITEM_PROP||(n=u)}if(!n||!t[n])return!1;var l=t[n].toLowerCase();return o[n]||(o[n]={}),r[n]||(r[n]={}),!o[n][l]&&(r[n][l]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var i=Object.keys(r),u=0;u<i.length;u++){var s=i[u],l=(0,a.default)({},o[s],r[s]);o[s]=l}return t}),[]).reverse()},A=function(t,e){for(var n=t.length-1;n>=0;n--){var r=t[n];if(r.hasOwnProperty(e))return r[e]}return null},h=(s=Date.now(),function(t){var e=Date.now();e-s>16?(s=e,t(e)):setTimeout((function(){h(t)}),0)}),S=function(t){return clearTimeout(t)},y="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||h:t.requestAnimationFrame||h,m="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||S:t.cancelAnimationFrame||S,b=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},_=null,v=function(t,e){var n=t.baseTag,r=t.bodyAttributes,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,u=t.noscriptTags,s=t.onChangeClientState,l=t.scriptTags,T=t.styleTags,f=t.title,p=t.titleAttributes;P(c.TAG_NAMES.BODY,r),P(c.TAG_NAMES.HTML,o),O(f,p);var E={baseTag:M(c.TAG_NAMES.BASE,n),linkTags:M(c.TAG_NAMES.LINK,i),metaTags:M(c.TAG_NAMES.META,a),noscriptTags:M(c.TAG_NAMES.NOSCRIPT,u),scriptTags:M(c.TAG_NAMES.SCRIPT,l),styleTags:M(c.TAG_NAMES.STYLE,T)},d={},A={};Object.keys(E).forEach((function(t){var e=E[t],n=e.newTags,r=e.oldTags;n.length&&(d[t]=n),r.length&&(A[t]=E[t].oldTags)})),e&&e(),s(t,d,A)},R=function(t){return Array.isArray(t)?t.join(""):t},O=function(t,e){void 0!==t&&document.title!==t&&(document.title=R(t)),P(c.TAG_NAMES.TITLE,e)},P=function(t,e){var n=document.getElementsByTagName(t)[0];if(n){for(var r=n.getAttribute(c.HELMET_ATTRIBUTE),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(e),u=0;u<a.length;u++){var s=a[u],l=e[s]||"";n.getAttribute(s)!==l&&n.setAttribute(s,l),-1===o.indexOf(s)&&o.push(s);var T=i.indexOf(s);-1!==T&&i.splice(T,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(c.HELMET_ATTRIBUTE):n.getAttribute(c.HELMET_ATTRIBUTE)!==a.join(",")&&n.setAttribute(c.HELMET_ATTRIBUTE,a.join(","))}},M=function(t,e){var n=document.head||document.querySelector(c.TAG_NAMES.HEAD),r=n.querySelectorAll(t+"["+c.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return e&&e.length&&e.forEach((function(e){var n=document.createElement(t);for(var r in e)if(e.hasOwnProperty(r))if(r===c.TAG_PROPERTIES.INNER_HTML)n.innerHTML=e.innerHTML;else if(r===c.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText));else{var u=void 0===e[r]?"":e[r];n.setAttribute(r,u)}n.setAttribute(c.HELMET_ATTRIBUTE,"true"),o.some((function(t,e){return a=e,n.isEqualNode(t)}))?o.splice(a,1):i.push(n)})),o.forEach((function(t){return t.parentNode.removeChild(t)})),i.forEach((function(t){return n.appendChild(t)})),{oldTags:o,newTags:i}},g=function(t){return Object.keys(t).reduce((function(e,n){var r=void 0!==t[n]?n+'="'+t[n]+'"':""+n;return e?e+" "+r:r}),"")},C=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[c.REACT_TAG_MAP[n]||n]=t[n],e}),e)},w=function(t,e,n){switch(t){case c.TAG_NAMES.TITLE:return{toComponent:function(){return t=e.title,n=e.titleAttributes,(r={key:t})[c.HELMET_ATTRIBUTE]=!0,o=C(n,r),[i.default.createElement(c.TAG_NAMES.TITLE,o,t)];var t,n,r,o},toString:function(){return function(t,e,n,r){var o=g(n),i=R(e);return o?"<"+t+" "+c.HELMET_ATTRIBUTE+'="true" '+o+">"+l(i,r)+"</"+t+">":"<"+t+" "+c.HELMET_ATTRIBUTE+'="true">'+l(i,r)+"</"+t+">"}(t,e.title,e.titleAttributes,n)}};case c.ATTRIBUTE_NAMES.BODY:case c.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return C(e)},toString:function(){return g(e)}};default:return{toComponent:function(){return function(t,e){return e.map((function(e,n){var r,o=((r={key:n})[c.HELMET_ATTRIBUTE]=!0,r);return Object.keys(e).forEach((function(t){var n=c.REACT_TAG_MAP[t]||t;if(n===c.TAG_PROPERTIES.INNER_HTML||n===c.TAG_PROPERTIES.CSS_TEXT){var r=e.innerHTML||e.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=e[t]})),i.default.createElement(t,o)}))}(t,e)},toString:function(){return function(t,e,n){return e.reduce((function(e,r){var o=Object.keys(r).filter((function(t){return!(t===c.TAG_PROPERTIES.INNER_HTML||t===c.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(t,e){var o=void 0===r[e]?e:e+'="'+l(r[e],n)+'"';return t?t+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===c.SELF_CLOSING_TAGS.indexOf(t);return e+"<"+t+" "+c.HELMET_ATTRIBUTE+'="true" '+o+(a?"/>":">"+i+"</"+t+">")}),"")}(t,e,n)}}}};e.convertReactPropstoHtmlAttributes=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[c.HTML_TAG_MAP[n]||n]=t[n],e}),e)},e.handleClientStateChange=function(t){_&&m(_),t.defer?_=y((function(){v(t,(function(){_=null}))})):(v(t),_=null)},e.mapStateOnServer=function(t){var e=t.baseTag,n=t.bodyAttributes,r=t.encode,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,u=t.noscriptTags,s=t.scriptTags,l=t.styleTags,T=t.title,f=void 0===T?"":T,p=t.titleAttributes;return{base:w(c.TAG_NAMES.BASE,e,r),bodyAttributes:w(c.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:w(c.ATTRIBUTE_NAMES.HTML,o,r),link:w(c.TAG_NAMES.LINK,i,r),meta:w(c.TAG_NAMES.META,a,r),noscript:w(c.TAG_NAMES.NOSCRIPT,u,r),script:w(c.TAG_NAMES.SCRIPT,s,r),style:w(c.TAG_NAMES.STYLE,l,r),title:w(c.TAG_NAMES.TITLE,{title:f,titleAttributes:p},r)}},e.reducePropsToState=function(t){return{baseTag:E([c.TAG_PROPERTIES.HREF],t),bodyAttributes:p(c.ATTRIBUTE_NAMES.BODY,t),defer:A(t,c.HELMET_PROPS.DEFER),encode:A(t,c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:p(c.ATTRIBUTE_NAMES.HTML,t),linkTags:d(c.TAG_NAMES.LINK,[c.TAG_PROPERTIES.REL,c.TAG_PROPERTIES.HREF],t),metaTags:d(c.TAG_NAMES.META,[c.TAG_PROPERTIES.NAME,c.TAG_PROPERTIES.CHARSET,c.TAG_PROPERTIES.HTTPEQUIV,c.TAG_PROPERTIES.PROPERTY,c.TAG_PROPERTIES.ITEM_PROP],t),noscriptTags:d(c.TAG_NAMES.NOSCRIPT,[c.TAG_PROPERTIES.INNER_HTML],t),onChangeClientState:f(t),scriptTags:d(c.TAG_NAMES.SCRIPT,[c.TAG_PROPERTIES.SRC,c.TAG_PROPERTIES.INNER_HTML],t),styleTags:d(c.TAG_NAMES.STYLE,[c.TAG_PROPERTIES.CSS_TEXT],t),title:T(t),titleAttributes:p(c.ATTRIBUTE_NAMES.TITLE,t)}},e.requestAnimationFrame=y,e.warn=b}).call(this,n("yLpj"))},wtQ5:function(t,e,n){"use strict";var r=n("Miam"),o=n("TJpk"),i=n("qKvR"),a=function(t){var e,n,a=t.description,c=t.lang,u=t.meta,s=t.title,l=r.data.site,T=a||l.siteMetadata.description,f=l.siteMetadata.author.contacts,p='{\n    "@context": "https://schema.org",\n    "@type": "Organization",\n    "@id": "'+l.siteMetadata.siteUrl+'/#organization",\n    "name": "'+l.siteMetadata.title+'",\n    "url": "'+l.siteMetadata.siteUrl+'",\n    "sameAs": [\n      "'+f.discord+'",\n      "'+f.github+'",\n      "'+f.linkedin+'",\n      "'+f.twitter+'",\n    ],\n    "logo": {},\n  }';return Object(i.c)(o.Helmet,{title:s,htmlAttributes:{lang:c},meta:[{name:"description",content:T},{property:"og:type",content:"website"},{property:"og:title",content:s},{property:"og:description",content:T},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(e=l.siteMetadata)||void 0===e||null===(n=e.social)||void 0===n?void 0:n.twitter)||""},{name:"twitter:title",content:s},{name:"twitter:description",content:T}].concat(u)},Object(i.c)("script",{type:"application/ld+json"},p),l.siteMetadata.canonical&&Object(i.c)("link",{rel:"canonical",href:l.siteMetadata.canonical}))};a.defaultProps={lang:"en",meta:[],description:""},e.a=a}}]);
//# sourceMappingURL=11f2d5029a8c0f7218cc273d4699c871b718c8f2-63e658b637238ed5b6c9.js.map