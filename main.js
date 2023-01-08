(()=>{"use strict";var n={28:(n,e,t)=>{t.d(e,{Z:()=>c});var o=t(81),r=t.n(o),i=t(645),a=t.n(i)()(r());a.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap);"]),a.push([n.id,"body {\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    height: 100vh;\n    font-family: 'Roboto', sans-serif;\n}\n\n.content {\n    flex: 1;\n    display: flex;\n}\n\n.footer {\n    height: 40px;\n    background-color: #333333;\n    display: flex;\n    justify-content: center;\n    color: white;\n    align-items: center;\n}\n\n.sidebar {\n    background-color: #F4F5F7;\n    display: flex;\n    flex-direction: column;\n    width: min(28%, 250px);\n    padding: 20px;\n    box-shadow: 0px 0px 10px rgba(0,0,0,0.15);\n    align-items: center;\n}\n\n.nav {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n    width: 100%;\n    align-items: center;\n}\n\n.sidebar h1 {\n    align-self: flex-start;\n    margin-left: 10px;\n}\n\n.sidebar button {\n    width: 95%;\n    height: 40px;\n}\n\n.projects {\n    display: flex;\n    flex-direction: column;\n    gap: 12px;\n    font-size: 1.5em;\n    width: 100%;\n    margin-bottom: 20px;\n}\n\n.project {\n    display: flex;\n    align-items: center;\n    font-size: 0.8em;\n    width: 100%;\n    justify-content: space-between;\n}\n\nbutton svg {\n    height: 1.25em;\n}\n\n.projects svg {\n    height: 25px;\n}\n\n\n.projectLeft {\n    display: flex;\n    align-items: center;\n    gap: 12px;\n}\n\n.projectRight {\n    display: none;\n    z-index: 10;\n}\n\n.projectRight:hover {\n    display: flex;\n    align-items: center;\n}\n\nbutton {\n    display: flex;\n    border: none;\n    border-radius: 12px;\n    padding: 12px;\n    cursor: pointer;\n    gap: 12px;\n    align-items: center;\n    font-size: 1.25em;\n    background-color: #F4F5F7;\n}\n\nbutton:hover {\n    background-color: #dddddd;\n}\n\nbutton.active {\n    background-color: #cccccc;\n    font-weight: 600;\n}\n\n.tasks{\n    width: 100%;\n}\n\n.addTaskBtn {\n    background-color: white;\n    width: 100%;\n}\n\n.header {\n    display: flex;\n    gap: 12px;\n    align-items: center;\n}\n\n.header svg {\n    height: 30px;\n}\n\n.main {\n    padding: 0 35px;\n    width: 72%;\n}\n\n.main h1 {\n    white-space: nowrap;\n}\n\n.overlay {\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: rgba(0,0,0,0.6);\n}\n\n.inputBox {\n    width: max(20%, 150px);\n    background-color: #F4F5F7;\n    padding: 30px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n    border-radius: 12px;\n}\n\n.inputField {\n    width: 100%;\n    font-size: 1.5em;\n}\n\n.inputButtons {\n    width: 100%;\n}\n\n.inputBtn {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n}",""]);const c=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);o&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],d=o.base?s[0]+o.base:s[0],l=i[d]||0,p="".concat(d," ").concat(l);i[d]=l+1;var u=t(p),h={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(h);else{var f=r(h,o);o.byIndex=c,e.splice(c,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var s=o(n,r),d=0;d<i.length;d++){var l=t(i[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=s}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),r=t.n(o),i=t(569),a=t.n(i),c=t(565),s=t.n(c),d=t(216),l=t.n(d),p=t(589),u=t.n(p),h=t(28),f={};function m(){const n=document.querySelector(".content");n.removeChild(n.lastElementChild)}f.styleTagTransform=u(),f.setAttributes=s(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),e()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals;const g=n=>{let e=[];return{getTitle:()=>n,addTodo:n=>{e.push(n)},getTodos:()=>e}},v=document.querySelectorAll(".navBtn"),x=g("defaultProject"),y=[];y.push(x),v.forEach((n=>n.addEventListener("click",(e=>{v.forEach((n=>{n.classList.remove("active")})),n.classList.add("active"),function(n,e){document.querySelector(".main");const t=document.querySelector(".header");t.innerHTML="",t.appendChild(n);const o=document.createElement("h1");o.textContent=e,t.appendChild(o)}(n.querySelector("svg").cloneNode(!0),n.textContent.trim())})))),document.querySelector(".addProjectBtn").addEventListener("click",(n=>{!function(){const n=document.querySelector(".content"),e=document.createElement("div");e.classList.add("overlay");const t=document.createElement("div");t.classList.add("inputBox");const o=document.createElement("input");o.classList.add("inputField"),o.placeholder="Project name";const r=document.createElement("div");r.classList.add("inputButtons");const i=document.createElement("button");i.classList.add("confirmBtn"),i.classList.add("inputBtn"),i.textContent="Create";const a=document.createElement("button");a.classList.add("cancelBtn"),a.classList.add("inputBtn"),a.textContent="Cancel",t.appendChild(o),r.appendChild(i),r.appendChild(a),t.appendChild(r),e.appendChild(t),n.appendChild(e)}();const e=document.querySelector(".inputField");document.querySelector(".cancelBtn").addEventListener("click",(n=>{m()})),document.querySelector(".confirmBtn").addEventListener("click",(n=>{"defaultProject"==y[0].getTitle()&&y.pop(),y.push(g(e.value)),function(n){const e=document.querySelector(".projects");e.innerHTML="",n.forEach((n=>{const t=document.createElement("div"),o=document.createElement("div");t.classList.add("projectLeft"),o.classList.add("projectRight");const r=document.createElement("button");r.classList.add("project"),t.innerHTML='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_iconCarrier"><path fill="#000000" fill-rule="evenodd" d="M2 3.75A.75.75 0 012.75 3h.5a.75.75 0 010 1.5h-.5A.75.75 0 012 3.75zm4 0A.75.75 0 016.75 3h6.5a.75.75 0 010 1.5h-6.5A.75.75 0 016 3.75zm-4 4A.75.75 0 012.75 7h.5a.75.75 0 010 1.5h-.5A.75.75 0 012 7.75zm4 0A.75.75 0 016.75 7h6.5a.75.75 0 010 1.5h-6.5A.75.75 0 016 7.75zm-4 4a.75.75 0 01.75-.75h.5a.75.75 0 010 1.5h-.5a.75.75 0 01-.75-.75zm4 0a.75.75 0 01.75-.75h6.5a.75.75 0 010 1.5h-6.5a.75.75 0 01-.75-.75z" clip-rule="evenodd"></path></g></svg>'+n.getTitle(),o.innerHTML='<svg class="removeSVG" hidden viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_iconCarrier"><path fill="#000000" d="M12.78 4.28a.75.75 0 00-1.06-1.06L8 6.94 4.28 3.22a.75.75 0 00-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 101.06 1.06L8 9.06l3.72 3.72a.75.75 0 101.06-1.06L9.06 8l3.72-3.72z"></path></g></svg>',r.appendChild(t),r.appendChild(o),e.appendChild(r)}))}(y);let t=document.querySelectorAll(".project");t.forEach((n=>n.addEventListener("mouseenter",(e=>{!function(n){const e=n.lastElementChild;e.style.display="flex",e.style.alignItems="center"}(n)})))),t.forEach((n=>n.addEventListener("mouseleave",(e=>{!function(n){n.lastElementChild.style.display="none"}(n)})))),m()}))}))})()})();