!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).htmlToImage={})}(this,(function(t){"use strict";var e=function(){return e=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},e.apply(this,arguments)};function n(t,e,n,r){return new(n||(n=Promise))((function(i,o){function c(t){try{a(r.next(t))}catch(t){o(t)}}function u(t){try{a(r.throw(t))}catch(t){o(t)}}function a(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(c,u)}a((r=r.apply(t,e||[])).next())}))}function r(t,e){var n,r,i,o,c={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(u){return function(a){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,u[0]&&(c=0)),c;)try{if(n=1,r&&(i=2&u[0]?r.return:u[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,u[1])).done)return i;switch(r=0,i&&(u=[2&u[0],i.value]),u[0]){case 0:case 1:i=u;break;case 4:return c.label++,{value:u[1],done:!1};case 5:c.label++,r=u[1],u=[0];continue;case 7:u=c.ops.pop(),c.trys.pop();continue;default:if(!(i=c.trys,(i=i.length>0&&i[i.length-1])||6!==u[0]&&2!==u[0])){c=0;continue}if(3===u[0]&&(!i||u[1]>i[0]&&u[1]<i[3])){c.label=u[1];break}if(6===u[0]&&c.label<i[1]){c.label=i[1],i=u;break}if(i&&c.label<i[2]){c.label=i[2],c.ops.push(u);break}i[2]&&c.ops.pop(),c.trys.pop();continue}u=e.call(t,c)}catch(t){u=[6,t],r=0}finally{n=i=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,a])}}}var i,o=(i=0,function(){return i+=1,"u".concat("0000".concat((Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)).concat(i)});function c(t){for(var e=[],n=0,r=t.length;n<r;n++)e.push(t[n]);return e}function u(t,e){var n=(t.ownerDocument.defaultView||window).getComputedStyle(t).getPropertyValue(e);return n?parseFloat(n.replace("px","")):0}function a(t,e){void 0===e&&(e={});var n,r,i,o=e.width||(r=u(n=t,"border-left-width"),i=u(n,"border-right-width"),n.clientWidth+r+i),c=e.height||function(t){var e=u(t,"border-top-width"),n=u(t,"border-bottom-width");return t.clientHeight+e+n}(t);return{width:o,height:c}}var s=16384;function l(t,e){return void 0===e&&(e={}),t.toBlob?new Promise((function(n){t.toBlob(n,e.type?e.type:"image/png",e.quality?e.quality:1)})):new Promise((function(n){for(var r=window.atob(t.toDataURL(e.type?e.type:void 0,e.quality?e.quality:void 0).split(",")[1]),i=r.length,o=new Uint8Array(i),c=0;c<i;c+=1)o[c]=r.charCodeAt(c);n(new Blob([o],{type:e.type?e.type:"image/png"}))}))}function f(t){return new Promise((function(e,n){var r=new Image;r.decode=function(){return e(r)},r.onload=function(){return e(r)},r.onerror=n,r.crossOrigin="anonymous",r.decoding="async",r.src=t}))}function h(t){return n(this,void 0,void 0,(function(){return r(this,(function(e){return[2,Promise.resolve().then((function(){return(new XMLSerializer).serializeToString(t)})).then(encodeURIComponent).then((function(t){return"data:image/svg+xml;charset=utf-8,".concat(t)}))]}))}))}function d(t,e,i){return n(this,void 0,void 0,(function(){var n,o,c;return r(this,(function(r){return n="http://www.w3.org/2000/svg",o=document.createElementNS(n,"svg"),c=document.createElementNS(n,"foreignObject"),o.setAttribute("width","".concat(e)),o.setAttribute("height","".concat(i)),o.setAttribute("viewBox","0 0 ".concat(e," ").concat(i)),c.setAttribute("width","100%"),c.setAttribute("height","100%"),c.setAttribute("x","0"),c.setAttribute("y","0"),c.setAttribute("externalResourcesRequired","true"),o.appendChild(c),c.appendChild(t),[2,h(o)]}))}))}var v=function(t,e){if(t instanceof e)return!0;var n=Object.getPrototypeOf(t);return null!==n&&(n.constructor.name===e.name||v(n,e))};function p(t,e,n){var r=".".concat(t,":").concat(e),i=n.cssText?function(t){var e=t.getPropertyValue("content");return"".concat(t.cssText," content: '").concat(e.replace(/'|"/g,""),"';")}(n):function(t){return c(t).map((function(e){var n=t.getPropertyValue(e),r=t.getPropertyPriority(e);return"".concat(e,": ").concat(n).concat(r?" !important":"",";")})).join(" ")}(n);return document.createTextNode("".concat(r,"{").concat(i,"}"))}function g(t,e,n){var r=window.getComputedStyle(t,n),i=r.getPropertyValue("content");if(""!==i&&"none"!==i){var c=o();try{e.className="".concat(e.className," ").concat(c)}catch(t){return}var u=document.createElement("style");u.appendChild(p(c,n,r)),e.appendChild(u)}}var m="application/font-woff",w="image/jpeg",b={woff:m,woff2:m,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:w,jpeg:w,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml",webp:"image/webp"};function y(t){var e=function(t){var e=/\.([^./]*?)$/g.exec(t);return e?e[1]:""}(t).toLowerCase();return b[e]||""}function x(t){return-1!==t.search(/^(data:)/)}function S(t,e){return"data:".concat(e,";base64,").concat(t)}function E(t,e,i){return n(this,void 0,void 0,(function(){var n,o;return r(this,(function(r){switch(r.label){case 0:return[4,fetch(t,e)];case 1:if(404===(n=r.sent()).status)throw new Error('Resource "'.concat(n.url,'" not found'));return[4,n.blob()];case 2:return o=r.sent(),[2,new Promise((function(t,e){var r=new FileReader;r.onerror=e,r.onloadend=function(){try{t(i({res:n,result:r.result}))}catch(t){e(t)}},r.readAsDataURL(o)}))]}}))}))}var C={};function P(t,i,o){return n(this,void 0,void 0,(function(){var n,c,u,a,s;return r(this,(function(r){switch(r.label){case 0:if(n=function(t,e,n){var r=t.replace(/\?.*/,"");return n&&(r=t),/ttf|otf|eot|woff2?/i.test(r)&&(r=r.replace(/.*\//,"")),e?"[".concat(e,"]").concat(r):r}(t,i,o.includeQueryParams),null!=C[n])return[2,C[n]];o.cacheBust&&(t+=(/\?/.test(t)?"&":"?")+(new Date).getTime()),o.cacheDisable&&(o.fetchRequestInit=e(e({},o.fetchRequestInit),{cache:"no-cache"})),r.label=1;case 1:return r.trys.push([1,3,,4]),[4,E(t,o.fetchRequestInit,(function(t){var e=t.res,n=t.result;return i||(i=e.headers.get("Content-Type")||""),function(t){return t.split(/,/)[1]}(n)}))];case 2:return u=r.sent(),c=S(u,i),[3,4];case 3:return a=r.sent(),c=o.imagePlaceholder||"",s="Failed to fetch resource: ".concat(t),a&&(s="string"==typeof a?a:a.message),s&&console.warn(s),[3,4];case 4:return C[n]=c,[2,c]}}))}))}function R(t){return n(this,void 0,void 0,(function(){var e;return r(this,(function(n){return"data:,"===(e=t.toDataURL())?[2,t.cloneNode(!1)]:[2,f(e)]}))}))}function T(t,e){return n(this,void 0,void 0,(function(){var n,i,o,c;return r(this,(function(r){switch(r.label){case 0:return t.currentSrc?(n=document.createElement("canvas"),i=n.getContext("2d"),n.width=t.clientWidth,n.height=t.clientHeight,null==i||i.drawImage(t,0,0,n.width,n.height),[2,f(n.toDataURL())]):(o=t.poster,c=y(o),[4,P(o,c,e)]);case 1:return[2,f(r.sent())]}}))}))}function A(t){var e;return n(this,void 0,void 0,(function(){return r(this,(function(n){switch(n.label){case 0:return n.trys.push([0,3,,4]),(null===(e=null==t?void 0:t.contentDocument)||void 0===e?void 0:e.body)?[4,N(t.contentDocument.body,{},!0)]:[3,2];case 1:return[2,n.sent()];case 2:return[3,4];case 3:return n.sent(),[3,4];case 4:return[2,t.cloneNode(!1)]}}))}))}var L=function(t){return null!=t.tagName&&"SLOT"===t.tagName.toUpperCase()};function I(t,e){return v(e,Element)&&(function(t,e){var n=e.style;if(n){var r=window.getComputedStyle(t);r.cssText?(n.cssText=r.cssText,n.transformOrigin=r.transformOrigin):c(r).forEach((function(i){var o=r.getPropertyValue(i);if("font-size"===i&&o.endsWith("px")){var c=Math.floor(parseFloat(o.substring(0,o.length-2)))-.1;o="".concat(c,"px")}v(t,HTMLIFrameElement)&&"display"===i&&"inline"===o&&(o="block"),"d"===i&&e.getAttribute("d")&&(o="path(".concat(e.getAttribute("d"),")")),n.setProperty(i,o,r.getPropertyPriority(i))}))}}(t,e),function(t,e){g(t,e,":before"),g(t,e,":after")}(t,e),function(t,e){v(t,HTMLTextAreaElement)&&(e.innerHTML=t.value),v(t,HTMLInputElement)&&e.setAttribute("value",t.value)}(t,e),function(t,e){if(v(t,HTMLSelectElement)){var n=e,r=Array.from(n.children).find((function(e){return t.value===e.getAttribute("value")}));r&&r.setAttribute("selected","")}}(t,e)),e}function N(t,e,i){return n(this,void 0,void 0,(function(){return r(this,(function(o){return i||!e.filter||e.filter(t)?[2,Promise.resolve(t).then((function(t){return function(t,e){return n(this,void 0,void 0,(function(){return r(this,(function(n){return v(t,HTMLCanvasElement)?[2,R(t)]:v(t,HTMLVideoElement)?[2,T(t,e)]:v(t,HTMLIFrameElement)?[2,A(t)]:[2,t.cloneNode(!1)]}))}))}(t,e)})).then((function(i){return function(t,e,i){var o,u;return n(this,void 0,void 0,(function(){var n;return r(this,(function(r){switch(r.label){case 0:return n=[],0===(n=L(t)&&t.assignedNodes?c(t.assignedNodes()):v(t,HTMLIFrameElement)&&(null===(o=t.contentDocument)||void 0===o?void 0:o.body)?c(t.contentDocument.body.childNodes):c((null!==(u=t.shadowRoot)&&void 0!==u?u:t).childNodes)).length||v(t,HTMLVideoElement)?[2,e]:[4,n.reduce((function(t,n){return t.then((function(){return N(n,i)})).then((function(t){t&&e.appendChild(t)}))}),Promise.resolve())];case 1:return r.sent(),[2,e]}}))}))}(t,i,e)})).then((function(e){return I(t,e)})).then((function(t){return function(t,e){return n(this,void 0,void 0,(function(){var n,i,o,c,u,a,s,l,f,h,d,v,p;return r(this,(function(r){switch(r.label){case 0:if(0===(n=t.querySelectorAll?t.querySelectorAll("use"):[]).length)return[2,t];i={},p=0,r.label=1;case 1:return p<n.length?(o=n[p],(c=o.getAttribute("xlink:href"))?(u=t.querySelector(c),a=document.querySelector(c),u||!a||i[c]?[3,3]:(s=i,l=c,[4,N(a,e,!0)])):[3,3]):[3,4];case 2:s[l]=r.sent(),r.label=3;case 3:return p++,[3,1];case 4:if((f=Object.values(i)).length){for(h="http://www.w3.org/1999/xhtml",(d=document.createElementNS(h,"svg")).setAttribute("xmlns",h),d.style.position="absolute",d.style.width="0",d.style.height="0",d.style.overflow="hidden",d.style.display="none",v=document.createElementNS(h,"defs"),d.appendChild(v),p=0;p<f.length;p++)v.appendChild(f[p]);t.appendChild(d)}return[2,t]}}))}))}(t,e)}))]:[2,null]}))}))}var k=/url\((['"]?)([^'"]+?)\1\)/g,D=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,M=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function H(t,e,i,o,c){return n(this,void 0,void 0,(function(){var n,u,a,s;return r(this,(function(r){switch(r.label){case 0:return r.trys.push([0,5,,6]),n=i?function(t,e){if(t.match(/^[a-z]+:\/\//i))return t;if(t.match(/^\/\//))return window.location.protocol+t;if(t.match(/^[a-z]+:/i))return t;var n=document.implementation.createHTMLDocument(),r=n.createElement("base"),i=n.createElement("a");return n.head.appendChild(r),n.body.appendChild(i),e&&(r.href=e),i.href=t,i.href}(e,i):e,u=y(e),a=void 0,c?[4,c(n)]:[3,2];case 1:return s=r.sent(),a=S(s,u),[3,4];case 2:return[4,P(n,u,o)];case 3:a=r.sent(),r.label=4;case 4:return[2,t.replace((l=e,f=l.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1"),new RegExp("(url\\(['\"]?)(".concat(f,")(['\"]?\\))"),"g")),"$1".concat(a,"$3"))];case 5:return r.sent(),[3,6];case 6:return[2,t]}var l,f}))}))}function j(t){return-1!==t.search(k)}function q(t,e,i){return n(this,void 0,void 0,(function(){var n,o;return r(this,(function(r){return j(t)?(n=function(t,e){var n=e.preferredFontFormat;return n?t.replace(M,(function(t){for(;;){var e=D.exec(t)||[],r=e[0],i=e[2];if(!i)return"";if(i===n)return"src: ".concat(r,";")}})):t}(t,i),o=function(t){var e=[];return t.replace(k,(function(t,n,r){return e.push(r),t})),e.filter((function(t){return!x(t)}))}(n),[2,o.reduce((function(t,n){return t.then((function(t){return H(t,n,e,i)}))}),Promise.resolve(n))]):[2,t]}))}))}function O(t,e,i){var o;return n(this,void 0,void 0,(function(){var n,c;return r(this,(function(r){switch(r.label){case 0:return(n=null===(o=e.style)||void 0===o?void 0:o.getPropertyValue(t))?[4,q(n,null,i)]:[3,2];case 1:return c=r.sent(),e.style.setProperty(t,c,e.style.getPropertyPriority(t)),[2,!0];case 2:return[2,!1]}}))}))}function V(t,e){return n(this,void 0,void 0,(function(){return r(this,(function(n){switch(n.label){case 0:return[4,O("background",t,e)];case 1:return n.sent()?[3,3]:[4,O("background-image",t,e)];case 2:n.sent(),n.label=3;case 3:return[4,O("mask",t,e)];case 4:return n.sent()?[3,6]:[4,O("mask-image",t,e)];case 5:n.sent(),n.label=6;case 6:return[2]}}))}))}function F(t,e){return n(this,void 0,void 0,(function(){var n,i,o;return r(this,(function(r){switch(r.label){case 0:return(n=v(t,HTMLImageElement))&&!x(t.src)||v(t,SVGImageElement)&&!x(t.href.baseVal)?[4,P(i=n?t.src:t.href.baseVal,y(i),e)]:[2];case 1:return o=r.sent(),[4,new Promise((function(e,r){t.onload=e,t.onerror=r;var i=t;i.decode&&(i.decode=e),"lazy"===i.loading&&(i.loading="eager"),n?(t.srcset="",t.src=o):t.href.baseVal=o}))];case 2:return r.sent(),[2]}}))}))}function U(t,e){return n(this,void 0,void 0,(function(){var n,i;return r(this,(function(r){switch(r.label){case 0:return n=c(t.childNodes),i=n.map((function(t){return B(t,e)})),[4,Promise.all(i).then((function(){return t}))];case 1:return r.sent(),[2]}}))}))}function B(t,e){return n(this,void 0,void 0,(function(){return r(this,(function(n){switch(n.label){case 0:return v(t,Element)?[4,V(t,e)]:[3,4];case 1:return n.sent(),[4,F(t,e)];case 2:return n.sent(),[4,U(t,e)];case 3:n.sent(),n.label=4;case 4:return[2]}}))}))}var z={};function W(t){return n(this,void 0,void 0,(function(){var e,n;return r(this,(function(r){switch(r.label){case 0:return null!=(e=z[t])?[2,e]:[4,fetch(t)];case 1:return[4,r.sent().text()];case 2:return n=r.sent(),e={url:t,cssText:n},z[t]=e,[2,e]}}))}))}function $(t,e){return n(this,void 0,void 0,(function(){var i,o,c,u,a=this;return r(this,(function(s){return i=t.cssText,o=/url\(["']?([^"')]+)["']?\)/g,c=i.match(/url\([^)]+\)/g)||[],u=c.map((function(c){return n(a,void 0,void 0,(function(){var n;return r(this,(function(r){return(n=c.replace(o,"$1")).startsWith("https://")||(n=new URL(n,t.url).href),[2,E(n,e.fetchRequestInit,(function(t){var e=t.result;return i=i.replace(c,"url(".concat(e,")")),[c,e]}))]}))}))})),[2,Promise.all(u).then((function(){return i}))]}))}))}function _(t){if(null==t)return[];for(var e=[],n=t.replace(/(\/\*[\s\S]*?\*\/)/gi,""),r=new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");;){if(null===(c=r.exec(n)))break;e.push(c[0])}n=n.replace(r,"");for(var i=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,o=new RegExp("((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})","gi");;){var c;if(null===(c=i.exec(n))){if(null===(c=o.exec(n)))break;i.lastIndex=o.lastIndex}else o.lastIndex=i.lastIndex;e.push(c[0])}return e}function G(t,e){return n(this,void 0,void 0,(function(){var n,i;return r(this,(function(r){return n=[],i=[],t.forEach((function(n){if("cssRules"in n)try{c(n.cssRules||[]).forEach((function(t,r){if(t.type===CSSRule.IMPORT_RULE){var o=r+1,c=W(t.href).then((function(t){return $(t,e)})).then((function(t){return _(t).forEach((function(t){try{n.insertRule(t,t.startsWith("@import")?o+=1:n.cssRules.length)}catch(e){console.error("Error inserting rule from remote css",{rule:t,error:e})}}))})).catch((function(t){console.error("Error loading remote css",t.toString())}));i.push(c)}}))}catch(o){var r=t.find((function(t){return null==t.href}))||document.styleSheets[0];null!=n.href&&i.push(W(n.href).then((function(t){return $(t,e)})).then((function(t){return _(t).forEach((function(t){r.insertRule(t,n.cssRules.length)}))})).catch((function(t){console.error("Error loading remote stylesheet",t)}))),console.error("Error inlining remote css file",o)}})),[2,Promise.all(i).then((function(){return t.forEach((function(t){if("cssRules"in t)try{c(t.cssRules||[]).forEach((function(t){n.push(t)}))}catch(e){console.error("Error while reading CSS rules from ".concat(t.href),e)}})),n}))]}))}))}function J(t){return t.filter((function(t){return t.type===CSSRule.FONT_FACE_RULE})).filter((function(t){return j(t.style.getPropertyValue("src"))}))}function Q(t,e){return n(this,void 0,void 0,(function(){return r(this,(function(n){switch(n.label){case 0:if(null==t.ownerDocument)throw new Error("Provided element is not within a Document");return[4,G(c(t.ownerDocument.styleSheets),e)];case 1:return[2,J(n.sent())]}}))}))}function X(t,e){return n(this,void 0,void 0,(function(){var n;return r(this,(function(r){switch(r.label){case 0:return[4,Q(t,e)];case 1:return n=r.sent(),[4,Promise.all(n.map((function(t){var n=t.parentStyleSheet?t.parentStyleSheet.href:null;return q(t.cssText,n,e)})))];case 2:return[2,r.sent().join("\n")]}}))}))}function K(t,e){return n(this,void 0,void 0,(function(){var n,i,o,c,u;return r(this,(function(r){switch(r.label){case 0:return null==e.fontEmbedCSS?[3,1]:(i=e.fontEmbedCSS,[3,5]);case 1:return e.skipFonts?(o=null,[3,4]):[3,2];case 2:return[4,X(t,e)];case 3:o=r.sent(),r.label=4;case 4:i=o,r.label=5;case 5:return(n=i)&&(c=document.createElement("style"),u=document.createTextNode(n),c.appendChild(u),t.firstChild?t.insertBefore(c,t.firstChild):t.appendChild(c)),[2]}}))}))}function Y(t,e){return void 0===e&&(e={}),n(this,void 0,void 0,(function(){var n,i,o,c;return r(this,(function(r){switch(r.label){case 0:return n=a(t,e),i=n.width,o=n.height,[4,N(t,e,!0)];case 1:return[4,K(c=r.sent(),e)];case 2:return r.sent(),[4,B(c,e)];case 3:return r.sent(),function(t,e){var n=t.style;e.backgroundColor&&(n.backgroundColor=e.backgroundColor),e.width&&(n.width="".concat(e.width,"px")),e.height&&(n.height="".concat(e.height,"px"));var r=e.style;null!=r&&Object.keys(r).forEach((function(t){n[t]=r[t]}))}(c,e),[4,d(c,i,o)];case 4:return[2,r.sent()]}}))}))}function Z(t,e){return void 0===e&&(e={}),n(this,void 0,void 0,(function(){var n,i,o,c,u,l,h,d,v;return r(this,(function(r){switch(r.label){case 0:return n=a(t,e),i=n.width,o=n.height,[4,Y(t,e)];case 1:return[4,f(r.sent())];case 2:return c=r.sent(),u=document.createElement("canvas"),l=u.getContext("2d"),h=e.pixelRatio||function(){var t,e;try{e=process}catch(t){}var n=e&&e.env?e.env.devicePixelRatio:null;return n&&(t=parseInt(n,10),Number.isNaN(t)&&(t=1)),t||window.devicePixelRatio||1}(),d=e.canvasWidth||i,v=e.canvasHeight||o,u.width=d*h,u.height=v*h,e.skipAutoScale||function(t){(t.width>s||t.height>s)&&(t.width>s&&t.height>s?t.width>t.height?(t.height*=s/t.width,t.width=s):(t.width*=s/t.height,t.height=s):t.width>s?(t.height*=s/t.width,t.width=s):(t.width*=s/t.height,t.height=s))}(u),u.style.width="".concat(d),u.style.height="".concat(v),e.backgroundColor&&(l.fillStyle=e.backgroundColor,l.fillRect(0,0,u.width,u.height)),l.drawImage(c,0,0,u.width,u.height),[2,u]}}))}))}t.getFontEmbedCSS=function(t,e){return void 0===e&&(e={}),n(this,void 0,void 0,(function(){return r(this,(function(n){return[2,X(t,e)]}))}))},t.toBlob=function(t,e){return void 0===e&&(e={}),n(this,void 0,void 0,(function(){return r(this,(function(n){switch(n.label){case 0:return[4,Z(t,e)];case 1:return[4,l(n.sent())];case 2:return[2,n.sent()]}}))}))},t.toCanvas=Z,t.toJpeg=function(t,e){return void 0===e&&(e={}),n(this,void 0,void 0,(function(){return r(this,(function(n){switch(n.label){case 0:return[4,Z(t,e)];case 1:return[2,n.sent().toDataURL("image/jpeg",e.quality||1)]}}))}))},t.toPixelData=function(t,e){return void 0===e&&(e={}),n(this,void 0,void 0,(function(){var n,i,o,c;return r(this,(function(r){switch(r.label){case 0:return n=a(t,e),i=n.width,o=n.height,[4,Z(t,e)];case 1:return c=r.sent(),[2,c.getContext("2d").getImageData(0,0,i,o).data]}}))}))},t.toPng=function(t,e){return void 0===e&&(e={}),n(this,void 0,void 0,(function(){return r(this,(function(n){switch(n.label){case 0:return[4,Z(t,e)];case 1:return[2,n.sent().toDataURL()]}}))}))},t.toSvg=Y}));
//# sourceMappingURL=html-to-image.js.map
