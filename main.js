(()=>{"use strict";var n={28:(n,e,t)=>{t.d(e,{Z:()=>c});var o=t(81),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap);"]),i.push([n.id,"body {\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    height: 100vh;\n    font-family: 'Roboto', sans-serif;\n}\n\n.content {\n    flex: 1;\n    display: flex;\n}\n\n.footer {\n    height: 40px;\n    background-color: #333333;\n    display: flex;\n    justify-content: center;\n    color: white;\n    align-items: center;\n}\n\n.sidebar {\n    background-color: #F4F5F7;\n    display: flex;\n    flex-direction: column;\n    width: min(28%, 250px);\n    padding: 20px;\n    box-shadow: 0px 0px 10px rgba(0,0,0,0.15);\n    align-items: center;\n}\n\n.nav {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n    width: 100%;\n    align-items: center;\n}\n\n.sidebar h1 {\n    align-self: flex-start;\n    margin-left: 10px;\n}\n\n.sidebar button {\n    width: 95%;\n    height: 40px;\n}\n\n.projects {\n    display: flex;\n    flex-direction: column;\n    gap: 12px;\n    font-size: 1.5em;\n    width: 100%;\n}\n\nbutton svg {\n    height: 1.25em;\n}\n\nbutton {\n    display: flex;\n    border: none;\n    border-radius: 12px;\n    padding: 12px;\n    cursor: pointer;\n    gap: 12px;\n    align-items: center;\n    font-size: 1.25em;\n    background-color: #F4F5F7;\n}\n\nbutton:hover {\n    background-color: #dddddd;\n}\n\nbutton.active {\n    background-color: #cccccc;\n    font-weight: 600;\n}\n\n.tasks{\n    width: 100%;\n}\n\n.addTaskBtn {\n    background-color: white;\n    width: 100%;\n}\n\n.header {\n    display: flex;\n    gap: 12px;\n    align-items: center;\n}\n\n.header svg {\n    height: 30px;\n}\n\n.main {\n    padding: 0 35px;\n    min-width: 72%;\n}\n\n.main h1 {\n    white-space: nowrap;\n}\n\n.overlay {\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: rgba(0,0,0,0.6);\n}\n\n.inputBox {\n    width: max(20%, 150px);\n    background-color: #F4F5F7;\n    padding: 30px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n    border-radius: 12px;\n}\n\n.inputField {\n    width: 100%;\n    font-size: 1.5em;\n}\n\n.inputButtons {\n    width: 100%;\n}\n\n.inputBtn {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n}",""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],c=0;c<n.length;c++){var d=n[c],s=o.base?d[0]+o.base:d[0],l=a[s]||0,u="".concat(s," ").concat(l);a[s]=l+1;var p=t(u),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=r(f,o);o.byIndex=c,e.splice(c,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var d=o(n,r),s=0;s<a.length;s++){var l=t(a[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=d}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),r=t.n(o),a=t(569),i=t.n(a),c=t(565),d=t.n(c),s=t(216),l=t.n(s),u=t(589),p=t.n(u),f=t(28),m={};function h(){const n=document.querySelector(".content");n.removeChild(n.lastElementChild)}m.styleTagTransform=p(),m.setAttributes=d(),m.insert=i().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=l(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const v=n=>{let e=[];return{getTitle:()=>n,addTodo:n=>{e.push(n)},getTodos:()=>e}},g=document.querySelectorAll(".navBtn"),x=v("defaultProject"),y=[];y.push(x),g.forEach((n=>n.addEventListener("click",(e=>{g.forEach((n=>{n.classList.remove("active")})),n.classList.add("active"),function(n,e){document.querySelector(".main");const t=document.querySelector(".header");t.innerHTML="",t.appendChild(n);const o=document.createElement("h1");o.textContent=e,t.appendChild(o)}(n.querySelector("svg").cloneNode(!0),n.textContent.trim())})))),document.querySelector(".addProjectBtn").addEventListener("click",(n=>{!function(){const n=document.querySelector(".content"),e=document.createElement("div");e.classList.add("overlay");const t=document.createElement("div");t.classList.add("inputBox");const o=document.createElement("input");o.classList.add("inputField"),o.placeholder="Project name";const r=document.createElement("div");r.classList.add("inputButtons");const a=document.createElement("button");a.classList.add("confirmBtn"),a.classList.add("inputBtn"),a.textContent="Create";const i=document.createElement("button");i.classList.add("cancelBtn"),i.classList.add("inputBtn"),i.textContent="Cancel",t.appendChild(o),r.appendChild(a),r.appendChild(i),t.appendChild(r),e.appendChild(t),n.appendChild(e)}();const e=document.querySelector(".inputField");document.querySelector(".cancelBtn").addEventListener("click",(n=>{h()})),document.querySelector(".confirmBtn").addEventListener("click",(n=>{"defaultProject"==y[0].getTitle()&&y.pop(),y.push(v(e.value)),function(n){const e=document.querySelector(".projects");e.innerHTML="",n.forEach((n=>{const t=document.createElement("div");t.classList.add("project"),t.textContent=n.getTitle(),e.appendChild(t)}))}(y),h()}))}))})()})();