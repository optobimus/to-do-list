(()=>{"use strict";var n={28:(n,e,t)=>{t.d(e,{Z:()=>a});var o=t(537),i=t.n(o),r=t(645),A=t.n(r)()(i());A.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap);"]),A.push([n.id,"body {\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    height: 100vh;\n    font-family: 'Roboto', sans-serif;\n}\n\n.content {\n    flex: 1;\n    display: flex;\n}\n\n.footer {\n    height: 40px;\n    background-color: #333333;\n    display: flex;\n    justify-content: center;\n    color: white;\n    align-items: center;\n}\n\n.sidebar {\n    background-color: #F4F5F7;\n    display: flex;\n    flex-direction: column;\n    width: min(28%, 250px);\n    padding: 20px;\n    box-shadow: 0px 0px 10px rgba(0,0,0,0.15);\n    align-items: center;\n}\n\n.nav {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n    width: 100%;\n    align-items: center;\n}\n\n.sidebar h1 {\n    align-self: flex-start;\n    margin-left: 10px;\n}\n\n.sidebar button {\n    width: 95%;\n    height: 40px;\n}\n\n.projects {\n    display: flex;\n    flex-direction: column;\n    gap: 12px;\n    font-size: 1.5em;\n    width: 100%;\n    margin-bottom: 20px;\n    z-index: 0;\n}\n\n.project {\n    display: flex;\n    align-items: center;\n    font-size: 0.8em;\n    width: 100%;\n    z-index: 1;\n}\n\nbutton svg {\n    height: 1.25em;\n}\n\n.projects svg {\n    height: 25px;\n}\n\n\n.projectLeft {\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    border: 1px solid green;\n    flex: 1;\n}\n\n.projectRight {\n    display: none;\n    z-index: 10;\n    border: 1px solid red;\n}\n\n.projectRight svg {\n    z-index: -1;\n}\n\n.projectRight:hover {\n    display: flex;\n    align-items: center;\n}\n\nbutton {\n    display: flex;\n    border: none;\n    border-radius: 12px;\n    padding: 12px;\n    cursor: pointer;\n    gap: 12px;\n    align-items: center;\n    font-size: 1.25em;\n    background-color: #F4F5F7;\n}\n\n.projects button {\n    gap: 0;    \n}\n\nbutton:hover {\n    background-color: #dddddd;\n}\n\nbutton.active {\n    background-color: #cccccc;\n    font-weight: 600;\n}\n\n.tasks{\n    width: 100%;\n}\n\n.addTaskBtn {\n    background-color: white;\n    width: 100%;\n}\n\n.header {\n    display: flex;\n    gap: 12px;\n    align-items: center;\n}\n\n.header svg {\n    height: 30px;\n}\n\n.main {\n    padding: 0 35px;\n    width: 72%;\n}\n\n.main h1 {\n    white-space: nowrap;\n}\n\n.overlay {\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: rgba(0,0,0,0.6);\n}\n\n.inputBox {\n    width: max(20%, 150px);\n    background-color: #F4F5F7;\n    padding: 30px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n    border-radius: 12px;\n}\n\n.inputField {\n    width: 100%;\n    font-size: 1.5em;\n}\n\n.inputButtons {\n    width: 100%;\n}\n\n.inputBtn {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n}","",{version:3,sources:["webpack://./src/styles.css"],names:[],mappings:"AACA;IACI,SAAS;IACT,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,aAAa;IACb,iCAAiC;AACrC;;AAEA;IACI,OAAO;IACP,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,yBAAyB;IACzB,aAAa;IACb,uBAAuB;IACvB,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,yBAAyB;IACzB,aAAa;IACb,sBAAsB;IACtB,sBAAsB;IACtB,aAAa;IACb,yCAAyC;IACzC,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,WAAW;IACX,mBAAmB;AACvB;;AAEA;IACI,sBAAsB;IACtB,iBAAiB;AACrB;;AAEA;IACI,UAAU;IACV,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,gBAAgB;IAChB,WAAW;IACX,mBAAmB;IACnB,UAAU;AACd;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,gBAAgB;IAChB,WAAW;IACX,UAAU;AACd;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,YAAY;AAChB;;;AAGA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,uBAAuB;IACvB,OAAO;AACX;;AAEA;IACI,aAAa;IACb,WAAW;IACX,qBAAqB;AACzB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,mBAAmB;IACnB,aAAa;IACb,eAAe;IACf,SAAS;IACT,mBAAmB;IACnB,iBAAiB;IACjB,yBAAyB;AAC7B;;AAEA;IACI,MAAM;AACV;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;IACzB,gBAAgB;AACpB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,uBAAuB;IACvB,WAAW;AACf;;AAEA;IACI,aAAa;IACb,SAAS;IACT,mBAAmB;AACvB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,UAAU;AACd;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,iCAAiC;AACrC;;AAEA;IACI,sBAAsB;IACtB,yBAAyB;IACzB,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;IACT,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,gBAAgB;AACpB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,WAAW;IACX,aAAa;IACb,uBAAuB;AAC3B",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');\nbody {\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    height: 100vh;\n    font-family: 'Roboto', sans-serif;\n}\n\n.content {\n    flex: 1;\n    display: flex;\n}\n\n.footer {\n    height: 40px;\n    background-color: #333333;\n    display: flex;\n    justify-content: center;\n    color: white;\n    align-items: center;\n}\n\n.sidebar {\n    background-color: #F4F5F7;\n    display: flex;\n    flex-direction: column;\n    width: min(28%, 250px);\n    padding: 20px;\n    box-shadow: 0px 0px 10px rgba(0,0,0,0.15);\n    align-items: center;\n}\n\n.nav {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n    width: 100%;\n    align-items: center;\n}\n\n.sidebar h1 {\n    align-self: flex-start;\n    margin-left: 10px;\n}\n\n.sidebar button {\n    width: 95%;\n    height: 40px;\n}\n\n.projects {\n    display: flex;\n    flex-direction: column;\n    gap: 12px;\n    font-size: 1.5em;\n    width: 100%;\n    margin-bottom: 20px;\n    z-index: 0;\n}\n\n.project {\n    display: flex;\n    align-items: center;\n    font-size: 0.8em;\n    width: 100%;\n    z-index: 1;\n}\n\nbutton svg {\n    height: 1.25em;\n}\n\n.projects svg {\n    height: 25px;\n}\n\n\n.projectLeft {\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    border: 1px solid green;\n    flex: 1;\n}\n\n.projectRight {\n    display: none;\n    z-index: 10;\n    border: 1px solid red;\n}\n\n.projectRight svg {\n    z-index: -1;\n}\n\n.projectRight:hover {\n    display: flex;\n    align-items: center;\n}\n\nbutton {\n    display: flex;\n    border: none;\n    border-radius: 12px;\n    padding: 12px;\n    cursor: pointer;\n    gap: 12px;\n    align-items: center;\n    font-size: 1.25em;\n    background-color: #F4F5F7;\n}\n\n.projects button {\n    gap: 0;    \n}\n\nbutton:hover {\n    background-color: #dddddd;\n}\n\nbutton.active {\n    background-color: #cccccc;\n    font-weight: 600;\n}\n\n.tasks{\n    width: 100%;\n}\n\n.addTaskBtn {\n    background-color: white;\n    width: 100%;\n}\n\n.header {\n    display: flex;\n    gap: 12px;\n    align-items: center;\n}\n\n.header svg {\n    height: 30px;\n}\n\n.main {\n    padding: 0 35px;\n    width: 72%;\n}\n\n.main h1 {\n    white-space: nowrap;\n}\n\n.overlay {\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: rgba(0,0,0,0.6);\n}\n\n.inputBox {\n    width: max(20%, 150px);\n    background-color: #F4F5F7;\n    padding: 30px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n    border-radius: 12px;\n}\n\n.inputField {\n    width: 100%;\n    font-size: 1.5em;\n}\n\n.inputButtons {\n    width: 100%;\n}\n\n.inputBtn {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n}"],sourceRoot:""}]);const a=A},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,i,r){"string"==typeof n&&(n=[[null,n,void 0]]);var A={};if(o)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(A[c]=!0)}for(var s=0;s<n.length;s++){var d=[].concat(n[s]);o&&A[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),e.push(d))}},e}},537:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),r="/*# ".concat(i," */");return[e].concat([r]).join("\n")}return[e].join("\n")}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var r={},A=[],a=0;a<n.length;a++){var c=n[a],s=o.base?c[0]+o.base:c[0],d=r[s]||0,l="".concat(s," ").concat(d);r[s]=d+1;var p=t(l),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(u);else{var m=i(u,o);o.byIndex=a,e.splice(a,0,{identifier:l,updater:m,references:1})}A.push(l)}return A}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var r=o(n=n||[],i=i||{});return function(n){n=n||[];for(var A=0;A<r.length;A++){var a=t(r[A]);e[a].references--}for(var c=o(n,i),s=0;s<r.length;s++){var d=t(r[s]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}r=c}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,i&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var i=e[o];if(void 0!==i)return i.exports;var r=e[o]={id:o,exports:{}};return n[o](r,r.exports,t),r.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),i=t.n(o),r=t(569),A=t.n(r),a=t(565),c=t.n(a),s=t(216),d=t.n(s),l=t(589),p=t.n(l),u=t(28),m={};function h(n,e){document.querySelector(".main");const t=document.querySelector(".header");t.innerHTML="",t.appendChild(n);const o=document.createElement("h1");o.textContent=e,t.appendChild(o)}function f(){const n=document.querySelector(".content");n.removeChild(n.lastElementChild)}function C(n){const e=document.querySelector(".projects");e.innerHTML="";let t=0;n.forEach((n=>{const o=document.createElement("div"),i=document.createElement("div");o.classList.add("projectLeft"),i.classList.add("projectRight");const r=document.createElement("button");r.classList.add("project"),o.innerHTML='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_iconCarrier"><path fill="#000000" fill-rule="evenodd" d="M2 3.75A.75.75 0 012.75 3h.5a.75.75 0 010 1.5h-.5A.75.75 0 012 3.75zm4 0A.75.75 0 016.75 3h6.5a.75.75 0 010 1.5h-6.5A.75.75 0 016 3.75zm-4 4A.75.75 0 012.75 7h.5a.75.75 0 010 1.5h-.5A.75.75 0 012 7.75zm4 0A.75.75 0 016.75 7h6.5a.75.75 0 010 1.5h-6.5A.75.75 0 016 7.75zm-4 4a.75.75 0 01.75-.75h.5a.75.75 0 010 1.5h-.5a.75.75 0 01-.75-.75zm4 0a.75.75 0 01.75-.75h6.5a.75.75 0 010 1.5h-6.5a.75.75 0 01-.75-.75z" clip-rule="evenodd"></path></g></svg>'+n.getTitle(),i.innerHTML='<svg class="removeSVG" hidden viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_iconCarrier"><path fill="#000000" d="M12.78 4.28a.75.75 0 00-1.06-1.06L8 6.94 4.28 3.22a.75.75 0 00-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 101.06 1.06L8 9.06l3.72 3.72a.75.75 0 101.06-1.06L9.06 8l3.72-3.72z"></path></g></svg>',r.appendChild(o),r.appendChild(i),r.setAttribute("data-index",t++),e.appendChild(r)}))}m.styleTagTransform=p(),m.setAttributes=c(),m.insert=A().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=d(),e()(u.Z,m),u.Z&&u.Z.locals&&u.Z.locals;const g=n=>{let e=[];return{getTitle:()=>n,addTodo:n=>{e.push(n)},getTodos:()=>e}},B=document.querySelectorAll(".navBtn"),x=g("defaultProject");let I=[];I.push(x),B.forEach((n=>n.addEventListener("click",(e=>{B.forEach((n=>{n.classList.remove("active")})),n.classList.add("active"),h(n.querySelector("svg").cloneNode(!0),n.textContent.trim())})))),document.querySelector(".addProjectBtn").addEventListener("click",(n=>{!function(){const n=document.querySelector(".content"),e=document.createElement("div");e.classList.add("overlay");const t=document.createElement("div");t.classList.add("inputBox");const o=document.createElement("input");o.classList.add("inputField"),o.placeholder="Project name";const i=document.createElement("div");i.classList.add("inputButtons");const r=document.createElement("button");r.classList.add("confirmBtn"),r.classList.add("inputBtn"),r.textContent="Create";const A=document.createElement("button");A.classList.add("cancelBtn"),A.classList.add("inputBtn"),A.textContent="Cancel",t.appendChild(o),i.appendChild(r),i.appendChild(A),t.appendChild(i),e.appendChild(t),n.appendChild(e)}();const e=document.querySelector(".inputField"),t=document.querySelector(".inputBox"),o=document.querySelector(".cancelBtn"),i=document.querySelector(".confirmBtn");e.focus(),o.addEventListener("click",(n=>{f()})),i.addEventListener("click",(n=>{0!==I.length&&"defaultProject"==I[0].getTitle()&&I.pop(),I.push(g(e.value)),C(I),f()})),t.addEventListener("keyup",(n=>{"Enter"===n.code&&(0!==I.length&&"defaultProject"==I[0].getTitle()&&I.pop(),I.push(g(e.value)),C(I),f())}))})),document.querySelector(".projects").addEventListener("mouseenter",(n=>{const e=document.querySelectorAll(".project");e.forEach((n=>{n.addEventListener("mouseenter",(e=>{!function(n){const e=n.lastElementChild;e.style.display="flex",e.style.alignItems="center"}(n)})),n.addEventListener("mouseleave",(e=>{!function(n){n.lastElementChild.style.display="none"}(n)})),n.firstChild.addEventListener("click",(t=>{e.forEach((n=>{n.classList.remove("active")})),n.classList.add("active"),h(n.querySelector("svg").cloneNode(!0),n.textContent.trim())}))})),document.querySelectorAll(".projectRight").forEach((n=>{n.addEventListener("click",(e=>{I=I.filter(((e,t)=>I.indexOf(e)!==parseInt(n.parentNode.dataset.index))),C(I);const t=document.querySelector(".navBtn.active");console.log(t),h(t.querySelector("svg").cloneNode(!0),t.textContent.trim())}))}))}))})()})();
//# sourceMappingURL=main.js.map