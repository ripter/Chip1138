/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! document-register-element */ 1);\n\nvar _cpu = __webpack_require__(/*! ./cpu.js */ 2);\n\nvar _cpu2 = _interopRequireDefault(_cpu);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar cpu = new _cpu2.default();\nvar opcodes = [0x3e, 0xff, // LD  a, 255\n0x87];\n\n// run the opcodes\nopcodes.forEach(function (opcode) {\n  cpu.processOpcode(opcode);\n});\n// import zelda from '../roms/zelda-la.json';\n//\n// const rom = window.rom = zelda;\n// console.log('rom', rom);\n//\n// // convert the base64 rom back into binary\n// const romData = atob(rom.data);\n//\n// // print the rom title\n// const title = [0x134, 0x135, 0x136, 0x137, 0x138, 0x139, 0x140, 0x141, 0x142].reduce((acc, addr) => {\n//   return acc + romData.charAt(addr).toString(16)\n// }, '');\n// console.log('rom title: ', title);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvaW5kZXguanM/MWZkZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2RvY3VtZW50LXJlZ2lzdGVyLWVsZW1lbnQnO1xuaW1wb3J0IENQVSBmcm9tICcuL2NwdS5qcyc7XG5cbmNvbnN0IGNwdSA9IG5ldyBDUFUoKTtcbmNvbnN0IG9wY29kZXMgPSBbXG4gIDB4M2UsIDB4ZmYsIC8vIExEICBhLCAyNTVcbiAgMHg4NywgLy8gQUREIGEsIGFcbl07XG5cbi8vIHJ1biB0aGUgb3Bjb2Rlc1xub3Bjb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uKG9wY29kZSkge1xuICBjcHUucHJvY2Vzc09wY29kZShvcGNvZGUpO1xufSk7XG4vLyBpbXBvcnQgemVsZGEgZnJvbSAnLi4vcm9tcy96ZWxkYS1sYS5qc29uJztcbi8vXG4vLyBjb25zdCByb20gPSB3aW5kb3cucm9tID0gemVsZGE7XG4vLyBjb25zb2xlLmxvZygncm9tJywgcm9tKTtcbi8vXG4vLyAvLyBjb252ZXJ0IHRoZSBiYXNlNjQgcm9tIGJhY2sgaW50byBiaW5hcnlcbi8vIGNvbnN0IHJvbURhdGEgPSBhdG9iKHJvbS5kYXRhKTtcbi8vXG4vLyAvLyBwcmludCB0aGUgcm9tIHRpdGxlXG4vLyBjb25zdCB0aXRsZSA9IFsweDEzNCwgMHgxMzUsIDB4MTM2LCAweDEzNywgMHgxMzgsIDB4MTM5LCAweDE0MCwgMHgxNDEsIDB4MTQyXS5yZWR1Y2UoKGFjYywgYWRkcikgPT4ge1xuLy8gICByZXR1cm4gYWNjICsgcm9tRGF0YS5jaGFyQXQoYWRkcikudG9TdHJpbmcoMTYpXG4vLyB9LCAnJyk7XG4vLyBjb25zb2xlLmxvZygncm9tIHRpdGxlOiAnLCB0aXRsZSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!***********************************************************************************!*\
  !*** ./node_modules/document-register-element/build/document-register-element.js ***!
  \***********************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

eval("/*! (C) Andrea Giammarchi - @WebReflection - Mit Style License */\n(function(e,t){\"use strict\";function Ht(){var e=wt.splice(0,wt.length);Et=0;while(e.length)e.shift().call(null,e.shift())}function Bt(e,t){for(var n=0,r=e.length;n<r;n++)Jt(e[n],t)}function jt(e){for(var t=0,n=e.length,r;t<n;t++)r=e[t],Pt(r,A[It(r)])}function Ft(e){return function(t){ut(t)&&(Jt(t,e),O.length&&Bt(t.querySelectorAll(O),e))}}function It(e){var t=ht.call(e,\"is\"),n=e.nodeName.toUpperCase(),r=_.call(L,t?N+t.toUpperCase():T+n);return t&&-1<r&&!qt(n,t)?-1:r}function qt(e,t){return-1<O.indexOf(e+'[is=\"'+t+'\"]')}function Rt(e){var t=e.currentTarget,n=e.attrChange,r=e.attrName,i=e.target,s=e[y]||2,o=e[w]||3;kt&&(!i||i===t)&&t[h]&&r!==\"style\"&&(e.prevValue!==e.newValue||e.newValue===\"\"&&(n===s||n===o))&&t[h](r,n===s?null:e.prevValue,n===o?null:e.newValue)}function Ut(e){var t=Ft(e);return function(e){wt.push(t,e.target),Et&&clearTimeout(Et),Et=setTimeout(Ht,1)}}function zt(e){Ct&&(Ct=!1,e.currentTarget.removeEventListener(S,zt)),O.length&&Bt((e.target||n).querySelectorAll(O),e.detail===l?l:a),st&&Vt()}function Wt(e,t){var n=this;vt.call(n,e,t),Lt.call(n,{target:n})}function Xt(e,t){nt(e,t),Mt?Mt.observe(e,yt):(Nt&&(e.setAttribute=Wt,e[o]=Ot(e),e[u](x,Lt)),e[u](E,Rt)),e[m]&&kt&&(e.created=!0,e[m](),e.created=!1)}function Vt(){for(var e,t=0,n=at.length;t<n;t++)e=at[t],M.contains(e)||(n--,at.splice(t--,1),Jt(e,l))}function $t(e){throw new Error(\"A \"+e+\" type is already registered\")}function Jt(e,t){var n,r=It(e),i;-1<r&&(Dt(e,A[r]),r=0,t===a&&!e[a]?(e[l]=!1,e[a]=!0,i=\"connected\",r=1,st&&_.call(at,e)<0&&at.push(e)):t===l&&!e[l]&&(e[a]=!1,e[l]=!0,i=\"disconnected\",r=1),r&&(n=e[t+f]||e[i+f])&&n.call(e))}function Kt(){}function Qt(e,t,r){var i=r&&r[c]||\"\",o=t.prototype,u=tt(o),a=t.observedAttributes||j,f={prototype:u};ot(u,m,{value:function(){if(Q)Q=!1;else if(!this[W]){this[W]=!0,new t(this),o[m]&&o[m].call(this);var e=G[Z.get(t)];(!V||e.create.length>1)&&Zt(this)}}}),ot(u,h,{value:function(e){-1<_.call(a,e)&&o[h].apply(this,arguments)}}),o[d]&&ot(u,p,{value:o[d]}),o[v]&&ot(u,g,{value:o[v]}),i&&(f[c]=i),e=e.toUpperCase(),G[e]={constructor:t,create:i?[i,et(e)]:[e]},Z.set(t,e),n[s](e.toLowerCase(),f),en(e),Y[e].r()}function Gt(e){var t=G[e.toUpperCase()];return t&&t.constructor}function Yt(e){return typeof e==\"string\"?e:e&&e.is||\"\"}function Zt(e){var t=e[h],n=t?e.attributes:j,r=n.length,i;while(r--)i=n[r],t.call(e,i.name||i.nodeName,null,i.value||i.nodeValue)}function en(e){return e=e.toUpperCase(),e in Y||(Y[e]={},Y[e].p=new K(function(t){Y[e].r=t})),Y[e].p}function tn(){X&&delete e.customElements,B(e,\"customElements\",{configurable:!0,value:new Kt}),B(e,\"CustomElementRegistry\",{configurable:!0,value:Kt});for(var t=function(t){var r=e[t];if(r){e[t]=function(t){var i,s;return t||(t=this),t[W]||(Q=!0,i=G[Z.get(t.constructor)],s=V&&i.create.length===1,t=s?Reflect.construct(r,j,i.constructor):n.createElement.apply(n,i.create),t[W]=!0,Q=!1,s||Zt(t)),t},e[t].prototype=r.prototype;try{r.prototype.constructor=e[t]}catch(i){z=!0,B(r,W,{value:e[t]})}}},r=i.get(/^HTML[A-Z]*[a-z]/),o=r.length;o--;t(r[o]));n.createElement=function(e,t){var n=Yt(t);return n?gt.call(this,e,et(n)):gt.call(this,e)},St||(Tt=!0,n[s](\"\"))}var n=e.document,r=e.Object,i=function(e){var t=/^[A-Z]+[a-z]/,n=function(e){var t=[],n;for(n in s)e.test(n)&&t.push(n);return t},i=function(e,t){t=t.toLowerCase(),t in s||(s[e]=(s[e]||[]).concat(t),s[t]=s[t.toUpperCase()]=e)},s=(r.create||r)(null),o={},u,a,f,l;for(a in e)for(l in e[a]){f=e[a][l],s[l]=f;for(u=0;u<f.length;u++)s[f[u].toLowerCase()]=s[f[u].toUpperCase()]=l}return o.get=function(r){return typeof r==\"string\"?s[r]||(t.test(r)?[]:\"\"):n(r)},o.set=function(n,r){return t.test(n)?i(n,r):i(r,n),o},o}({collections:{HTMLAllCollection:[\"all\"],HTMLCollection:[\"forms\"],HTMLFormControlsCollection:[\"elements\"],HTMLOptionsCollection:[\"options\"]},elements:{Element:[\"element\"],HTMLAnchorElement:[\"a\"],HTMLAppletElement:[\"applet\"],HTMLAreaElement:[\"area\"],HTMLAttachmentElement:[\"attachment\"],HTMLAudioElement:[\"audio\"],HTMLBRElement:[\"br\"],HTMLBaseElement:[\"base\"],HTMLBodyElement:[\"body\"],HTMLButtonElement:[\"button\"],HTMLCanvasElement:[\"canvas\"],HTMLContentElement:[\"content\"],HTMLDListElement:[\"dl\"],HTMLDataElement:[\"data\"],HTMLDataListElement:[\"datalist\"],HTMLDetailsElement:[\"details\"],HTMLDialogElement:[\"dialog\"],HTMLDirectoryElement:[\"dir\"],HTMLDivElement:[\"div\"],HTMLDocument:[\"document\"],HTMLElement:[\"element\",\"abbr\",\"address\",\"article\",\"aside\",\"b\",\"bdi\",\"bdo\",\"cite\",\"code\",\"command\",\"dd\",\"dfn\",\"dt\",\"em\",\"figcaption\",\"figure\",\"footer\",\"header\",\"i\",\"kbd\",\"mark\",\"nav\",\"noscript\",\"rp\",\"rt\",\"ruby\",\"s\",\"samp\",\"section\",\"small\",\"strong\",\"sub\",\"summary\",\"sup\",\"u\",\"var\",\"wbr\"],HTMLEmbedElement:[\"embed\"],HTMLFieldSetElement:[\"fieldset\"],HTMLFontElement:[\"font\"],HTMLFormElement:[\"form\"],HTMLFrameElement:[\"frame\"],HTMLFrameSetElement:[\"frameset\"],HTMLHRElement:[\"hr\"],HTMLHeadElement:[\"head\"],HTMLHeadingElement:[\"h1\",\"h2\",\"h3\",\"h4\",\"h5\",\"h6\"],HTMLHtmlElement:[\"html\"],HTMLIFrameElement:[\"iframe\"],HTMLImageElement:[\"img\"],HTMLInputElement:[\"input\"],HTMLKeygenElement:[\"keygen\"],HTMLLIElement:[\"li\"],HTMLLabelElement:[\"label\"],HTMLLegendElement:[\"legend\"],HTMLLinkElement:[\"link\"],HTMLMapElement:[\"map\"],HTMLMarqueeElement:[\"marquee\"],HTMLMediaElement:[\"media\"],HTMLMenuElement:[\"menu\"],HTMLMenuItemElement:[\"menuitem\"],HTMLMetaElement:[\"meta\"],HTMLMeterElement:[\"meter\"],HTMLModElement:[\"del\",\"ins\"],HTMLOListElement:[\"ol\"],HTMLObjectElement:[\"object\"],HTMLOptGroupElement:[\"optgroup\"],HTMLOptionElement:[\"option\"],HTMLOutputElement:[\"output\"],HTMLParagraphElement:[\"p\"],HTMLParamElement:[\"param\"],HTMLPictureElement:[\"picture\"],HTMLPreElement:[\"pre\"],HTMLProgressElement:[\"progress\"],HTMLQuoteElement:[\"blockquote\",\"q\",\"quote\"],HTMLScriptElement:[\"script\"],HTMLSelectElement:[\"select\"],HTMLShadowElement:[\"shadow\"],HTMLSlotElement:[\"slot\"],HTMLSourceElement:[\"source\"],HTMLSpanElement:[\"span\"],HTMLStyleElement:[\"style\"],HTMLTableCaptionElement:[\"caption\"],HTMLTableCellElement:[\"td\",\"th\"],HTMLTableColElement:[\"col\",\"colgroup\"],HTMLTableElement:[\"table\"],HTMLTableRowElement:[\"tr\"],HTMLTableSectionElement:[\"thead\",\"tbody\",\"tfoot\"],HTMLTemplateElement:[\"template\"],HTMLTextAreaElement:[\"textarea\"],HTMLTimeElement:[\"time\"],HTMLTitleElement:[\"title\"],HTMLTrackElement:[\"track\"],HTMLUListElement:[\"ul\"],HTMLUnknownElement:[\"unknown\",\"vhgroupv\",\"vkeygen\"],HTMLVideoElement:[\"video\"]},nodes:{Attr:[\"node\"],Audio:[\"audio\"],CDATASection:[\"node\"],CharacterData:[\"node\"],Comment:[\"#comment\"],Document:[\"#document\"],DocumentFragment:[\"#document-fragment\"],DocumentType:[\"node\"],HTMLDocument:[\"#document\"],Image:[\"img\"],Option:[\"option\"],ProcessingInstruction:[\"node\"],ShadowRoot:[\"#shadow-root\"],Text:[\"#text\"],XMLDocument:[\"xml\"]}});typeof t!=\"object\"&&(t={type:t||\"auto\"});var s=\"registerElement\",o=\"__\"+s+(e.Math.random()*1e5>>0),u=\"addEventListener\",a=\"attached\",f=\"Callback\",l=\"detached\",c=\"extends\",h=\"attributeChanged\"+f,p=a+f,d=\"connected\"+f,v=\"disconnected\"+f,m=\"created\"+f,g=l+f,y=\"ADDITION\",b=\"MODIFICATION\",w=\"REMOVAL\",E=\"DOMAttrModified\",S=\"DOMContentLoaded\",x=\"DOMSubtreeModified\",T=\"<\",N=\"=\",C=/^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,k=[\"ANNOTATION-XML\",\"COLOR-PROFILE\",\"FONT-FACE\",\"FONT-FACE-SRC\",\"FONT-FACE-URI\",\"FONT-FACE-FORMAT\",\"FONT-FACE-NAME\",\"MISSING-GLYPH\"],L=[],A=[],O=\"\",M=n.documentElement,_=L.indexOf||function(e){for(var t=this.length;t--&&this[t]!==e;);return t},D=r.prototype,P=D.hasOwnProperty,H=D.isPrototypeOf,B=r.defineProperty,j=[],F=r.getOwnPropertyDescriptor,I=r.getOwnPropertyNames,q=r.getPrototypeOf,R=r.setPrototypeOf,U=!!r.__proto__,z=!1,W=\"__dreCEv1\",X=e.customElements,V=!/^force/.test(t.type)&&!!(X&&X.define&&X.get&&X.whenDefined),$=r.create||r,J=e.Map||function(){var t=[],n=[],r;return{get:function(e){return n[_.call(t,e)]},set:function(e,i){r=_.call(t,e),r<0?n[t.push(e)-1]=i:n[r]=i}}},K=e.Promise||function(e){function i(e){n=!0;while(t.length)t.shift()(e)}var t=[],n=!1,r={\"catch\":function(){return r},then:function(e){return t.push(e),n&&setTimeout(i,1),r}};return e(i),r},Q=!1,G=$(null),Y=$(null),Z=new J,et=function(e){return e.toLowerCase()},tt=r.create||function sn(e){return e?(sn.prototype=e,new sn):this},nt=R||(U?function(e,t){return e.__proto__=t,e}:I&&F?function(){function e(e,t){for(var n,r=I(t),i=0,s=r.length;i<s;i++)n=r[i],P.call(e,n)||B(e,n,F(t,n))}return function(t,n){do e(t,n);while((n=q(n))&&!H.call(n,t));return t}}():function(e,t){for(var n in t)e[n]=t[n];return e}),rt=e.MutationObserver||e.WebKitMutationObserver,it=(e.HTMLElement||e.Element||e.Node).prototype,st=!H.call(it,M),ot=st?function(e,t,n){return e[t]=n.value,e}:B,ut=st?function(e){return e.nodeType===1}:function(e){return H.call(it,e)},at=st&&[],ft=it.attachShadow,lt=it.cloneNode,ct=it.dispatchEvent,ht=it.getAttribute,pt=it.hasAttribute,dt=it.removeAttribute,vt=it.setAttribute,mt=n.createElement,gt=mt,yt=rt&&{attributes:!0,characterData:!0,attributeOldValue:!0},bt=rt||function(e){Nt=!1,M.removeEventListener(E,bt)},wt,Et=0,St=s in n&&!/^force-all/.test(t.type),xt=!0,Tt=!1,Nt=!0,Ct=!0,kt=!0,Lt,At,Ot,Mt,_t,Dt,Pt;St||(R||U?(Dt=function(e,t){H.call(t,e)||Xt(e,t)},Pt=Xt):(Dt=function(e,t){e[o]||(e[o]=r(!0),Xt(e,t))},Pt=Dt),st?(Nt=!1,function(){var e=F(it,u),t=e.value,n=function(e){var t=new CustomEvent(E,{bubbles:!0});t.attrName=e,t.prevValue=ht.call(this,e),t.newValue=null,t[w]=t.attrChange=2,dt.call(this,e),ct.call(this,t)},r=function(e,t){var n=pt.call(this,e),r=n&&ht.call(this,e),i=new CustomEvent(E,{bubbles:!0});vt.call(this,e,t),i.attrName=e,i.prevValue=n?r:null,i.newValue=t,n?i[b]=i.attrChange=1:i[y]=i.attrChange=0,ct.call(this,i)},i=function(e){var t=e.currentTarget,n=t[o],r=e.propertyName,i;n.hasOwnProperty(r)&&(n=n[r],i=new CustomEvent(E,{bubbles:!0}),i.attrName=n.name,i.prevValue=n.value||null,i.newValue=n.value=t[r]||null,i.prevValue==null?i[y]=i.attrChange=0:i[b]=i.attrChange=1,ct.call(t,i))};e.value=function(e,s,u){e===E&&this[h]&&this.setAttribute!==r&&(this[o]={className:{name:\"class\",value:this.className}},this.setAttribute=r,this.removeAttribute=n,t.call(this,\"propertychange\",i)),t.call(this,e,s,u)},B(it,u,e)}()):rt||(M[u](E,bt),M.setAttribute(o,1),M.removeAttribute(o),Nt&&(Lt=function(e){var t=this,n,r,i;if(t===e.target){n=t[o],t[o]=r=Ot(t);for(i in r){if(!(i in n))return At(0,t,i,n[i],r[i],y);if(r[i]!==n[i])return At(1,t,i,n[i],r[i],b)}for(i in n)if(!(i in r))return At(2,t,i,n[i],r[i],w)}},At=function(e,t,n,r,i,s){var o={attrChange:e,currentTarget:t,attrName:n,prevValue:r,newValue:i};o[s]=e,Rt(o)},Ot=function(e){for(var t,n,r={},i=e.attributes,s=0,o=i.length;s<o;s++)t=i[s],n=t.name,n!==\"setAttribute\"&&(r[n]=t.value);return r})),n[s]=function(t,r){p=t.toUpperCase(),xt&&(xt=!1,rt?(Mt=function(e,t){function n(e,t){for(var n=0,r=e.length;n<r;t(e[n++]));}return new rt(function(r){for(var i,s,o,u=0,a=r.length;u<a;u++)i=r[u],i.type===\"childList\"?(n(i.addedNodes,e),n(i.removedNodes,t)):(s=i.target,kt&&s[h]&&i.attributeName!==\"style\"&&(o=ht.call(s,i.attributeName),o!==i.oldValue&&s[h](i.attributeName,i.oldValue,o)))})}(Ft(a),Ft(l)),_t=function(e){return Mt.observe(e,{childList:!0,subtree:!0}),e},_t(n),ft&&(it.attachShadow=function(){return _t(ft.apply(this,arguments))})):(wt=[],n[u](\"DOMNodeInserted\",Ut(a)),n[u](\"DOMNodeRemoved\",Ut(l))),n[u](S,zt),n[u](\"readystatechange\",zt),it.cloneNode=function(e){var t=lt.call(this,!!e),n=It(t);return-1<n&&Pt(t,A[n]),e&&O.length&&jt(t.querySelectorAll(O)),t});if(Tt)return Tt=!1;-2<_.call(L,N+p)+_.call(L,T+p)&&$t(t);if(!C.test(p)||-1<_.call(k,p))throw new Error(\"The type \"+t+\" is invalid\");var i=function(){return o?n.createElement(f,p):n.createElement(f)},s=r||D,o=P.call(s,c),f=o?r[c].toUpperCase():p,p,d;return o&&-1<_.call(L,T+f)&&$t(f),d=L.push((o?N:T)+p)-1,O=O.concat(O.length?\",\":\"\",o?f+'[is=\"'+t.toLowerCase()+'\"]':f),i.prototype=A[d]=P.call(s,\"prototype\")?s.prototype:tt(it),O.length&&Bt(n.querySelectorAll(O),a),i},n.createElement=gt=function(e,t){var r=Yt(t),i=r?mt.call(n,e,et(r)):mt.call(n,e),s=\"\"+e,o=_.call(L,(r?N:T)+(r||s).toUpperCase()),u=-1<o;return r&&(i.setAttribute(\"is\",r=r.toLowerCase()),u&&(u=qt(s.toUpperCase(),r))),kt=!n.createElement.innerHTMLHelper,u&&Pt(i,A[o]),i}),Kt.prototype={constructor:Kt,define:V?function(e,t,n){if(n)Qt(e,t,n);else{var r=e.toUpperCase();G[r]={constructor:t,create:[r]},Z.set(t,r),X.define(e,t)}}:Qt,get:V?function(e){return X.get(e)||Gt(e)}:Gt,whenDefined:V?function(e){return K.race([X.whenDefined(e),en(e)])}:en};if(!X||/^force/.test(t.type))tn();else if(!t.noBuiltIn)try{(function(t,r,i){r[c]=\"a\",t.prototype=tt(HTMLAnchorElement.prototype),t.prototype.constructor=t,e.customElements.define(i,t,r);if(ht.call(n.createElement(\"a\",{is:i}),\"is\")!==i||V&&ht.call(new t,\"is\")!==i)throw r})(function on(){return Reflect.construct(HTMLAnchorElement,[],on)},{},\"document-register-element-a\")}catch(nn){tn()}if(!t.noBuiltIn)try{mt.call(n,\"a\",\"a\")}catch(rn){et=function(e){return{is:e.toLowerCase()}}}})(window);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb2N1bWVudC1yZWdpc3Rlci1lbGVtZW50L2J1aWxkL2RvY3VtZW50LXJlZ2lzdGVyLWVsZW1lbnQuanM/MDhiMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgKEMpIEFuZHJlYSBHaWFtbWFyY2hpIC0gQFdlYlJlZmxlY3Rpb24gLSBNaXQgU3R5bGUgTGljZW5zZSAqL1xuKGZ1bmN0aW9uKGUsdCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gSHQoKXt2YXIgZT13dC5zcGxpY2UoMCx3dC5sZW5ndGgpO0V0PTA7d2hpbGUoZS5sZW5ndGgpZS5zaGlmdCgpLmNhbGwobnVsbCxlLnNoaWZ0KCkpfWZ1bmN0aW9uIEJ0KGUsdCl7Zm9yKHZhciBuPTAscj1lLmxlbmd0aDtuPHI7bisrKUp0KGVbbl0sdCl9ZnVuY3Rpb24ganQoZSl7Zm9yKHZhciB0PTAsbj1lLmxlbmd0aCxyO3Q8bjt0Kyspcj1lW3RdLFB0KHIsQVtJdChyKV0pfWZ1bmN0aW9uIEZ0KGUpe3JldHVybiBmdW5jdGlvbih0KXt1dCh0KSYmKEp0KHQsZSksTy5sZW5ndGgmJkJ0KHQucXVlcnlTZWxlY3RvckFsbChPKSxlKSl9fWZ1bmN0aW9uIEl0KGUpe3ZhciB0PWh0LmNhbGwoZSxcImlzXCIpLG49ZS5ub2RlTmFtZS50b1VwcGVyQ2FzZSgpLHI9Xy5jYWxsKEwsdD9OK3QudG9VcHBlckNhc2UoKTpUK24pO3JldHVybiB0JiYtMTxyJiYhcXQobix0KT8tMTpyfWZ1bmN0aW9uIHF0KGUsdCl7cmV0dXJuLTE8Ty5pbmRleE9mKGUrJ1tpcz1cIicrdCsnXCJdJyl9ZnVuY3Rpb24gUnQoZSl7dmFyIHQ9ZS5jdXJyZW50VGFyZ2V0LG49ZS5hdHRyQ2hhbmdlLHI9ZS5hdHRyTmFtZSxpPWUudGFyZ2V0LHM9ZVt5XXx8MixvPWVbd118fDM7a3QmJighaXx8aT09PXQpJiZ0W2hdJiZyIT09XCJzdHlsZVwiJiYoZS5wcmV2VmFsdWUhPT1lLm5ld1ZhbHVlfHxlLm5ld1ZhbHVlPT09XCJcIiYmKG49PT1zfHxuPT09bykpJiZ0W2hdKHIsbj09PXM/bnVsbDplLnByZXZWYWx1ZSxuPT09bz9udWxsOmUubmV3VmFsdWUpfWZ1bmN0aW9uIFV0KGUpe3ZhciB0PUZ0KGUpO3JldHVybiBmdW5jdGlvbihlKXt3dC5wdXNoKHQsZS50YXJnZXQpLEV0JiZjbGVhclRpbWVvdXQoRXQpLEV0PXNldFRpbWVvdXQoSHQsMSl9fWZ1bmN0aW9uIHp0KGUpe0N0JiYoQ3Q9ITEsZS5jdXJyZW50VGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoUyx6dCkpLE8ubGVuZ3RoJiZCdCgoZS50YXJnZXR8fG4pLnF1ZXJ5U2VsZWN0b3JBbGwoTyksZS5kZXRhaWw9PT1sP2w6YSksc3QmJlZ0KCl9ZnVuY3Rpb24gV3QoZSx0KXt2YXIgbj10aGlzO3Z0LmNhbGwobixlLHQpLEx0LmNhbGwobix7dGFyZ2V0Om59KX1mdW5jdGlvbiBYdChlLHQpe250KGUsdCksTXQ/TXQub2JzZXJ2ZShlLHl0KTooTnQmJihlLnNldEF0dHJpYnV0ZT1XdCxlW29dPU90KGUpLGVbdV0oeCxMdCkpLGVbdV0oRSxSdCkpLGVbbV0mJmt0JiYoZS5jcmVhdGVkPSEwLGVbbV0oKSxlLmNyZWF0ZWQ9ITEpfWZ1bmN0aW9uIFZ0KCl7Zm9yKHZhciBlLHQ9MCxuPWF0Lmxlbmd0aDt0PG47dCsrKWU9YXRbdF0sTS5jb250YWlucyhlKXx8KG4tLSxhdC5zcGxpY2UodC0tLDEpLEp0KGUsbCkpfWZ1bmN0aW9uICR0KGUpe3Rocm93IG5ldyBFcnJvcihcIkEgXCIrZStcIiB0eXBlIGlzIGFscmVhZHkgcmVnaXN0ZXJlZFwiKX1mdW5jdGlvbiBKdChlLHQpe3ZhciBuLHI9SXQoZSksaTstMTxyJiYoRHQoZSxBW3JdKSxyPTAsdD09PWEmJiFlW2FdPyhlW2xdPSExLGVbYV09ITAsaT1cImNvbm5lY3RlZFwiLHI9MSxzdCYmXy5jYWxsKGF0LGUpPDAmJmF0LnB1c2goZSkpOnQ9PT1sJiYhZVtsXSYmKGVbYV09ITEsZVtsXT0hMCxpPVwiZGlzY29ubmVjdGVkXCIscj0xKSxyJiYobj1lW3QrZl18fGVbaStmXSkmJm4uY2FsbChlKSl9ZnVuY3Rpb24gS3QoKXt9ZnVuY3Rpb24gUXQoZSx0LHIpe3ZhciBpPXImJnJbY118fFwiXCIsbz10LnByb3RvdHlwZSx1PXR0KG8pLGE9dC5vYnNlcnZlZEF0dHJpYnV0ZXN8fGosZj17cHJvdG90eXBlOnV9O290KHUsbSx7dmFsdWU6ZnVuY3Rpb24oKXtpZihRKVE9ITE7ZWxzZSBpZighdGhpc1tXXSl7dGhpc1tXXT0hMCxuZXcgdCh0aGlzKSxvW21dJiZvW21dLmNhbGwodGhpcyk7dmFyIGU9R1taLmdldCh0KV07KCFWfHxlLmNyZWF0ZS5sZW5ndGg+MSkmJlp0KHRoaXMpfX19KSxvdCh1LGgse3ZhbHVlOmZ1bmN0aW9uKGUpey0xPF8uY2FsbChhLGUpJiZvW2hdLmFwcGx5KHRoaXMsYXJndW1lbnRzKX19KSxvW2RdJiZvdCh1LHAse3ZhbHVlOm9bZF19KSxvW3ZdJiZvdCh1LGcse3ZhbHVlOm9bdl19KSxpJiYoZltjXT1pKSxlPWUudG9VcHBlckNhc2UoKSxHW2VdPXtjb25zdHJ1Y3Rvcjp0LGNyZWF0ZTppP1tpLGV0KGUpXTpbZV19LFouc2V0KHQsZSksbltzXShlLnRvTG93ZXJDYXNlKCksZiksZW4oZSksWVtlXS5yKCl9ZnVuY3Rpb24gR3QoZSl7dmFyIHQ9R1tlLnRvVXBwZXJDYXNlKCldO3JldHVybiB0JiZ0LmNvbnN0cnVjdG9yfWZ1bmN0aW9uIFl0KGUpe3JldHVybiB0eXBlb2YgZT09XCJzdHJpbmdcIj9lOmUmJmUuaXN8fFwiXCJ9ZnVuY3Rpb24gWnQoZSl7dmFyIHQ9ZVtoXSxuPXQ/ZS5hdHRyaWJ1dGVzOmoscj1uLmxlbmd0aCxpO3doaWxlKHItLSlpPW5bcl0sdC5jYWxsKGUsaS5uYW1lfHxpLm5vZGVOYW1lLG51bGwsaS52YWx1ZXx8aS5ub2RlVmFsdWUpfWZ1bmN0aW9uIGVuKGUpe3JldHVybiBlPWUudG9VcHBlckNhc2UoKSxlIGluIFl8fChZW2VdPXt9LFlbZV0ucD1uZXcgSyhmdW5jdGlvbih0KXtZW2VdLnI9dH0pKSxZW2VdLnB9ZnVuY3Rpb24gdG4oKXtYJiZkZWxldGUgZS5jdXN0b21FbGVtZW50cyxCKGUsXCJjdXN0b21FbGVtZW50c1wiLHtjb25maWd1cmFibGU6ITAsdmFsdWU6bmV3IEt0fSksQihlLFwiQ3VzdG9tRWxlbWVudFJlZ2lzdHJ5XCIse2NvbmZpZ3VyYWJsZTohMCx2YWx1ZTpLdH0pO2Zvcih2YXIgdD1mdW5jdGlvbih0KXt2YXIgcj1lW3RdO2lmKHIpe2VbdF09ZnVuY3Rpb24odCl7dmFyIGkscztyZXR1cm4gdHx8KHQ9dGhpcyksdFtXXXx8KFE9ITAsaT1HW1ouZ2V0KHQuY29uc3RydWN0b3IpXSxzPVYmJmkuY3JlYXRlLmxlbmd0aD09PTEsdD1zP1JlZmxlY3QuY29uc3RydWN0KHIsaixpLmNvbnN0cnVjdG9yKTpuLmNyZWF0ZUVsZW1lbnQuYXBwbHkobixpLmNyZWF0ZSksdFtXXT0hMCxRPSExLHN8fFp0KHQpKSx0fSxlW3RdLnByb3RvdHlwZT1yLnByb3RvdHlwZTt0cnl7ci5wcm90b3R5cGUuY29uc3RydWN0b3I9ZVt0XX1jYXRjaChpKXt6PSEwLEIocixXLHt2YWx1ZTplW3RdfSl9fX0scj1pLmdldCgvXkhUTUxbQS1aXSpbYS16XS8pLG89ci5sZW5ndGg7by0tO3QocltvXSkpO24uY3JlYXRlRWxlbWVudD1mdW5jdGlvbihlLHQpe3ZhciBuPVl0KHQpO3JldHVybiBuP2d0LmNhbGwodGhpcyxlLGV0KG4pKTpndC5jYWxsKHRoaXMsZSl9LFN0fHwoVHQ9ITAsbltzXShcIlwiKSl9dmFyIG49ZS5kb2N1bWVudCxyPWUuT2JqZWN0LGk9ZnVuY3Rpb24oZSl7dmFyIHQ9L15bQS1aXStbYS16XS8sbj1mdW5jdGlvbihlKXt2YXIgdD1bXSxuO2ZvcihuIGluIHMpZS50ZXN0KG4pJiZ0LnB1c2gobik7cmV0dXJuIHR9LGk9ZnVuY3Rpb24oZSx0KXt0PXQudG9Mb3dlckNhc2UoKSx0IGluIHN8fChzW2VdPShzW2VdfHxbXSkuY29uY2F0KHQpLHNbdF09c1t0LnRvVXBwZXJDYXNlKCldPWUpfSxzPShyLmNyZWF0ZXx8cikobnVsbCksbz17fSx1LGEsZixsO2ZvcihhIGluIGUpZm9yKGwgaW4gZVthXSl7Zj1lW2FdW2xdLHNbbF09Zjtmb3IodT0wO3U8Zi5sZW5ndGg7dSsrKXNbZlt1XS50b0xvd2VyQ2FzZSgpXT1zW2ZbdV0udG9VcHBlckNhc2UoKV09bH1yZXR1cm4gby5nZXQ9ZnVuY3Rpb24ocil7cmV0dXJuIHR5cGVvZiByPT1cInN0cmluZ1wiP3Nbcl18fCh0LnRlc3Qocik/W106XCJcIik6bihyKX0sby5zZXQ9ZnVuY3Rpb24obixyKXtyZXR1cm4gdC50ZXN0KG4pP2kobixyKTppKHIsbiksb30sb30oe2NvbGxlY3Rpb25zOntIVE1MQWxsQ29sbGVjdGlvbjpbXCJhbGxcIl0sSFRNTENvbGxlY3Rpb246W1wiZm9ybXNcIl0sSFRNTEZvcm1Db250cm9sc0NvbGxlY3Rpb246W1wiZWxlbWVudHNcIl0sSFRNTE9wdGlvbnNDb2xsZWN0aW9uOltcIm9wdGlvbnNcIl19LGVsZW1lbnRzOntFbGVtZW50OltcImVsZW1lbnRcIl0sSFRNTEFuY2hvckVsZW1lbnQ6W1wiYVwiXSxIVE1MQXBwbGV0RWxlbWVudDpbXCJhcHBsZXRcIl0sSFRNTEFyZWFFbGVtZW50OltcImFyZWFcIl0sSFRNTEF0dGFjaG1lbnRFbGVtZW50OltcImF0dGFjaG1lbnRcIl0sSFRNTEF1ZGlvRWxlbWVudDpbXCJhdWRpb1wiXSxIVE1MQlJFbGVtZW50OltcImJyXCJdLEhUTUxCYXNlRWxlbWVudDpbXCJiYXNlXCJdLEhUTUxCb2R5RWxlbWVudDpbXCJib2R5XCJdLEhUTUxCdXR0b25FbGVtZW50OltcImJ1dHRvblwiXSxIVE1MQ2FudmFzRWxlbWVudDpbXCJjYW52YXNcIl0sSFRNTENvbnRlbnRFbGVtZW50OltcImNvbnRlbnRcIl0sSFRNTERMaXN0RWxlbWVudDpbXCJkbFwiXSxIVE1MRGF0YUVsZW1lbnQ6W1wiZGF0YVwiXSxIVE1MRGF0YUxpc3RFbGVtZW50OltcImRhdGFsaXN0XCJdLEhUTUxEZXRhaWxzRWxlbWVudDpbXCJkZXRhaWxzXCJdLEhUTUxEaWFsb2dFbGVtZW50OltcImRpYWxvZ1wiXSxIVE1MRGlyZWN0b3J5RWxlbWVudDpbXCJkaXJcIl0sSFRNTERpdkVsZW1lbnQ6W1wiZGl2XCJdLEhUTUxEb2N1bWVudDpbXCJkb2N1bWVudFwiXSxIVE1MRWxlbWVudDpbXCJlbGVtZW50XCIsXCJhYmJyXCIsXCJhZGRyZXNzXCIsXCJhcnRpY2xlXCIsXCJhc2lkZVwiLFwiYlwiLFwiYmRpXCIsXCJiZG9cIixcImNpdGVcIixcImNvZGVcIixcImNvbW1hbmRcIixcImRkXCIsXCJkZm5cIixcImR0XCIsXCJlbVwiLFwiZmlnY2FwdGlvblwiLFwiZmlndXJlXCIsXCJmb290ZXJcIixcImhlYWRlclwiLFwiaVwiLFwia2JkXCIsXCJtYXJrXCIsXCJuYXZcIixcIm5vc2NyaXB0XCIsXCJycFwiLFwicnRcIixcInJ1YnlcIixcInNcIixcInNhbXBcIixcInNlY3Rpb25cIixcInNtYWxsXCIsXCJzdHJvbmdcIixcInN1YlwiLFwic3VtbWFyeVwiLFwic3VwXCIsXCJ1XCIsXCJ2YXJcIixcIndiclwiXSxIVE1MRW1iZWRFbGVtZW50OltcImVtYmVkXCJdLEhUTUxGaWVsZFNldEVsZW1lbnQ6W1wiZmllbGRzZXRcIl0sSFRNTEZvbnRFbGVtZW50OltcImZvbnRcIl0sSFRNTEZvcm1FbGVtZW50OltcImZvcm1cIl0sSFRNTEZyYW1lRWxlbWVudDpbXCJmcmFtZVwiXSxIVE1MRnJhbWVTZXRFbGVtZW50OltcImZyYW1lc2V0XCJdLEhUTUxIUkVsZW1lbnQ6W1wiaHJcIl0sSFRNTEhlYWRFbGVtZW50OltcImhlYWRcIl0sSFRNTEhlYWRpbmdFbGVtZW50OltcImgxXCIsXCJoMlwiLFwiaDNcIixcImg0XCIsXCJoNVwiLFwiaDZcIl0sSFRNTEh0bWxFbGVtZW50OltcImh0bWxcIl0sSFRNTElGcmFtZUVsZW1lbnQ6W1wiaWZyYW1lXCJdLEhUTUxJbWFnZUVsZW1lbnQ6W1wiaW1nXCJdLEhUTUxJbnB1dEVsZW1lbnQ6W1wiaW5wdXRcIl0sSFRNTEtleWdlbkVsZW1lbnQ6W1wia2V5Z2VuXCJdLEhUTUxMSUVsZW1lbnQ6W1wibGlcIl0sSFRNTExhYmVsRWxlbWVudDpbXCJsYWJlbFwiXSxIVE1MTGVnZW5kRWxlbWVudDpbXCJsZWdlbmRcIl0sSFRNTExpbmtFbGVtZW50OltcImxpbmtcIl0sSFRNTE1hcEVsZW1lbnQ6W1wibWFwXCJdLEhUTUxNYXJxdWVlRWxlbWVudDpbXCJtYXJxdWVlXCJdLEhUTUxNZWRpYUVsZW1lbnQ6W1wibWVkaWFcIl0sSFRNTE1lbnVFbGVtZW50OltcIm1lbnVcIl0sSFRNTE1lbnVJdGVtRWxlbWVudDpbXCJtZW51aXRlbVwiXSxIVE1MTWV0YUVsZW1lbnQ6W1wibWV0YVwiXSxIVE1MTWV0ZXJFbGVtZW50OltcIm1ldGVyXCJdLEhUTUxNb2RFbGVtZW50OltcImRlbFwiLFwiaW5zXCJdLEhUTUxPTGlzdEVsZW1lbnQ6W1wib2xcIl0sSFRNTE9iamVjdEVsZW1lbnQ6W1wib2JqZWN0XCJdLEhUTUxPcHRHcm91cEVsZW1lbnQ6W1wib3B0Z3JvdXBcIl0sSFRNTE9wdGlvbkVsZW1lbnQ6W1wib3B0aW9uXCJdLEhUTUxPdXRwdXRFbGVtZW50OltcIm91dHB1dFwiXSxIVE1MUGFyYWdyYXBoRWxlbWVudDpbXCJwXCJdLEhUTUxQYXJhbUVsZW1lbnQ6W1wicGFyYW1cIl0sSFRNTFBpY3R1cmVFbGVtZW50OltcInBpY3R1cmVcIl0sSFRNTFByZUVsZW1lbnQ6W1wicHJlXCJdLEhUTUxQcm9ncmVzc0VsZW1lbnQ6W1wicHJvZ3Jlc3NcIl0sSFRNTFF1b3RlRWxlbWVudDpbXCJibG9ja3F1b3RlXCIsXCJxXCIsXCJxdW90ZVwiXSxIVE1MU2NyaXB0RWxlbWVudDpbXCJzY3JpcHRcIl0sSFRNTFNlbGVjdEVsZW1lbnQ6W1wic2VsZWN0XCJdLEhUTUxTaGFkb3dFbGVtZW50OltcInNoYWRvd1wiXSxIVE1MU2xvdEVsZW1lbnQ6W1wic2xvdFwiXSxIVE1MU291cmNlRWxlbWVudDpbXCJzb3VyY2VcIl0sSFRNTFNwYW5FbGVtZW50OltcInNwYW5cIl0sSFRNTFN0eWxlRWxlbWVudDpbXCJzdHlsZVwiXSxIVE1MVGFibGVDYXB0aW9uRWxlbWVudDpbXCJjYXB0aW9uXCJdLEhUTUxUYWJsZUNlbGxFbGVtZW50OltcInRkXCIsXCJ0aFwiXSxIVE1MVGFibGVDb2xFbGVtZW50OltcImNvbFwiLFwiY29sZ3JvdXBcIl0sSFRNTFRhYmxlRWxlbWVudDpbXCJ0YWJsZVwiXSxIVE1MVGFibGVSb3dFbGVtZW50OltcInRyXCJdLEhUTUxUYWJsZVNlY3Rpb25FbGVtZW50OltcInRoZWFkXCIsXCJ0Ym9keVwiLFwidGZvb3RcIl0sSFRNTFRlbXBsYXRlRWxlbWVudDpbXCJ0ZW1wbGF0ZVwiXSxIVE1MVGV4dEFyZWFFbGVtZW50OltcInRleHRhcmVhXCJdLEhUTUxUaW1lRWxlbWVudDpbXCJ0aW1lXCJdLEhUTUxUaXRsZUVsZW1lbnQ6W1widGl0bGVcIl0sSFRNTFRyYWNrRWxlbWVudDpbXCJ0cmFja1wiXSxIVE1MVUxpc3RFbGVtZW50OltcInVsXCJdLEhUTUxVbmtub3duRWxlbWVudDpbXCJ1bmtub3duXCIsXCJ2aGdyb3VwdlwiLFwidmtleWdlblwiXSxIVE1MVmlkZW9FbGVtZW50OltcInZpZGVvXCJdfSxub2Rlczp7QXR0cjpbXCJub2RlXCJdLEF1ZGlvOltcImF1ZGlvXCJdLENEQVRBU2VjdGlvbjpbXCJub2RlXCJdLENoYXJhY3RlckRhdGE6W1wibm9kZVwiXSxDb21tZW50OltcIiNjb21tZW50XCJdLERvY3VtZW50OltcIiNkb2N1bWVudFwiXSxEb2N1bWVudEZyYWdtZW50OltcIiNkb2N1bWVudC1mcmFnbWVudFwiXSxEb2N1bWVudFR5cGU6W1wibm9kZVwiXSxIVE1MRG9jdW1lbnQ6W1wiI2RvY3VtZW50XCJdLEltYWdlOltcImltZ1wiXSxPcHRpb246W1wib3B0aW9uXCJdLFByb2Nlc3NpbmdJbnN0cnVjdGlvbjpbXCJub2RlXCJdLFNoYWRvd1Jvb3Q6W1wiI3NoYWRvdy1yb290XCJdLFRleHQ6W1wiI3RleHRcIl0sWE1MRG9jdW1lbnQ6W1wieG1sXCJdfX0pO3R5cGVvZiB0IT1cIm9iamVjdFwiJiYodD17dHlwZTp0fHxcImF1dG9cIn0pO3ZhciBzPVwicmVnaXN0ZXJFbGVtZW50XCIsbz1cIl9fXCIrcysoZS5NYXRoLnJhbmRvbSgpKjFlNT4+MCksdT1cImFkZEV2ZW50TGlzdGVuZXJcIixhPVwiYXR0YWNoZWRcIixmPVwiQ2FsbGJhY2tcIixsPVwiZGV0YWNoZWRcIixjPVwiZXh0ZW5kc1wiLGg9XCJhdHRyaWJ1dGVDaGFuZ2VkXCIrZixwPWErZixkPVwiY29ubmVjdGVkXCIrZix2PVwiZGlzY29ubmVjdGVkXCIrZixtPVwiY3JlYXRlZFwiK2YsZz1sK2YseT1cIkFERElUSU9OXCIsYj1cIk1PRElGSUNBVElPTlwiLHc9XCJSRU1PVkFMXCIsRT1cIkRPTUF0dHJNb2RpZmllZFwiLFM9XCJET01Db250ZW50TG9hZGVkXCIseD1cIkRPTVN1YnRyZWVNb2RpZmllZFwiLFQ9XCI8XCIsTj1cIj1cIixDPS9eW0EtWl1bQS1aMC05XSooPzotW0EtWjAtOV0rKSskLyxrPVtcIkFOTk9UQVRJT04tWE1MXCIsXCJDT0xPUi1QUk9GSUxFXCIsXCJGT05ULUZBQ0VcIixcIkZPTlQtRkFDRS1TUkNcIixcIkZPTlQtRkFDRS1VUklcIixcIkZPTlQtRkFDRS1GT1JNQVRcIixcIkZPTlQtRkFDRS1OQU1FXCIsXCJNSVNTSU5HLUdMWVBIXCJdLEw9W10sQT1bXSxPPVwiXCIsTT1uLmRvY3VtZW50RWxlbWVudCxfPUwuaW5kZXhPZnx8ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PXRoaXMubGVuZ3RoO3QtLSYmdGhpc1t0XSE9PWU7KTtyZXR1cm4gdH0sRD1yLnByb3RvdHlwZSxQPUQuaGFzT3duUHJvcGVydHksSD1ELmlzUHJvdG90eXBlT2YsQj1yLmRlZmluZVByb3BlcnR5LGo9W10sRj1yLmdldE93blByb3BlcnR5RGVzY3JpcHRvcixJPXIuZ2V0T3duUHJvcGVydHlOYW1lcyxxPXIuZ2V0UHJvdG90eXBlT2YsUj1yLnNldFByb3RvdHlwZU9mLFU9ISFyLl9fcHJvdG9fXyx6PSExLFc9XCJfX2RyZUNFdjFcIixYPWUuY3VzdG9tRWxlbWVudHMsVj0hL15mb3JjZS8udGVzdCh0LnR5cGUpJiYhIShYJiZYLmRlZmluZSYmWC5nZXQmJlgud2hlbkRlZmluZWQpLCQ9ci5jcmVhdGV8fHIsSj1lLk1hcHx8ZnVuY3Rpb24oKXt2YXIgdD1bXSxuPVtdLHI7cmV0dXJue2dldDpmdW5jdGlvbihlKXtyZXR1cm4gbltfLmNhbGwodCxlKV19LHNldDpmdW5jdGlvbihlLGkpe3I9Xy5jYWxsKHQsZSkscjwwP25bdC5wdXNoKGUpLTFdPWk6bltyXT1pfX19LEs9ZS5Qcm9taXNlfHxmdW5jdGlvbihlKXtmdW5jdGlvbiBpKGUpe249ITA7d2hpbGUodC5sZW5ndGgpdC5zaGlmdCgpKGUpfXZhciB0PVtdLG49ITEscj17XCJjYXRjaFwiOmZ1bmN0aW9uKCl7cmV0dXJuIHJ9LHRoZW46ZnVuY3Rpb24oZSl7cmV0dXJuIHQucHVzaChlKSxuJiZzZXRUaW1lb3V0KGksMSkscn19O3JldHVybiBlKGkpLHJ9LFE9ITEsRz0kKG51bGwpLFk9JChudWxsKSxaPW5ldyBKLGV0PWZ1bmN0aW9uKGUpe3JldHVybiBlLnRvTG93ZXJDYXNlKCl9LHR0PXIuY3JlYXRlfHxmdW5jdGlvbiBzbihlKXtyZXR1cm4gZT8oc24ucHJvdG90eXBlPWUsbmV3IHNuKTp0aGlzfSxudD1SfHwoVT9mdW5jdGlvbihlLHQpe3JldHVybiBlLl9fcHJvdG9fXz10LGV9OkkmJkY/ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCl7Zm9yKHZhciBuLHI9SSh0KSxpPTAscz1yLmxlbmd0aDtpPHM7aSsrKW49cltpXSxQLmNhbGwoZSxuKXx8QihlLG4sRih0LG4pKX1yZXR1cm4gZnVuY3Rpb24odCxuKXtkbyBlKHQsbik7d2hpbGUoKG49cShuKSkmJiFILmNhbGwobix0KSk7cmV0dXJuIHR9fSgpOmZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBuIGluIHQpZVtuXT10W25dO3JldHVybiBlfSkscnQ9ZS5NdXRhdGlvbk9ic2VydmVyfHxlLldlYktpdE11dGF0aW9uT2JzZXJ2ZXIsaXQ9KGUuSFRNTEVsZW1lbnR8fGUuRWxlbWVudHx8ZS5Ob2RlKS5wcm90b3R5cGUsc3Q9IUguY2FsbChpdCxNKSxvdD1zdD9mdW5jdGlvbihlLHQsbil7cmV0dXJuIGVbdF09bi52YWx1ZSxlfTpCLHV0PXN0P2Z1bmN0aW9uKGUpe3JldHVybiBlLm5vZGVUeXBlPT09MX06ZnVuY3Rpb24oZSl7cmV0dXJuIEguY2FsbChpdCxlKX0sYXQ9c3QmJltdLGZ0PWl0LmF0dGFjaFNoYWRvdyxsdD1pdC5jbG9uZU5vZGUsY3Q9aXQuZGlzcGF0Y2hFdmVudCxodD1pdC5nZXRBdHRyaWJ1dGUscHQ9aXQuaGFzQXR0cmlidXRlLGR0PWl0LnJlbW92ZUF0dHJpYnV0ZSx2dD1pdC5zZXRBdHRyaWJ1dGUsbXQ9bi5jcmVhdGVFbGVtZW50LGd0PW10LHl0PXJ0JiZ7YXR0cmlidXRlczohMCxjaGFyYWN0ZXJEYXRhOiEwLGF0dHJpYnV0ZU9sZFZhbHVlOiEwfSxidD1ydHx8ZnVuY3Rpb24oZSl7TnQ9ITEsTS5yZW1vdmVFdmVudExpc3RlbmVyKEUsYnQpfSx3dCxFdD0wLFN0PXMgaW4gbiYmIS9eZm9yY2UtYWxsLy50ZXN0KHQudHlwZSkseHQ9ITAsVHQ9ITEsTnQ9ITAsQ3Q9ITAsa3Q9ITAsTHQsQXQsT3QsTXQsX3QsRHQsUHQ7U3R8fChSfHxVPyhEdD1mdW5jdGlvbihlLHQpe0guY2FsbCh0LGUpfHxYdChlLHQpfSxQdD1YdCk6KER0PWZ1bmN0aW9uKGUsdCl7ZVtvXXx8KGVbb109cighMCksWHQoZSx0KSl9LFB0PUR0KSxzdD8oTnQ9ITEsZnVuY3Rpb24oKXt2YXIgZT1GKGl0LHUpLHQ9ZS52YWx1ZSxuPWZ1bmN0aW9uKGUpe3ZhciB0PW5ldyBDdXN0b21FdmVudChFLHtidWJibGVzOiEwfSk7dC5hdHRyTmFtZT1lLHQucHJldlZhbHVlPWh0LmNhbGwodGhpcyxlKSx0Lm5ld1ZhbHVlPW51bGwsdFt3XT10LmF0dHJDaGFuZ2U9MixkdC5jYWxsKHRoaXMsZSksY3QuY2FsbCh0aGlzLHQpfSxyPWZ1bmN0aW9uKGUsdCl7dmFyIG49cHQuY2FsbCh0aGlzLGUpLHI9biYmaHQuY2FsbCh0aGlzLGUpLGk9bmV3IEN1c3RvbUV2ZW50KEUse2J1YmJsZXM6ITB9KTt2dC5jYWxsKHRoaXMsZSx0KSxpLmF0dHJOYW1lPWUsaS5wcmV2VmFsdWU9bj9yOm51bGwsaS5uZXdWYWx1ZT10LG4/aVtiXT1pLmF0dHJDaGFuZ2U9MTppW3ldPWkuYXR0ckNoYW5nZT0wLGN0LmNhbGwodGhpcyxpKX0saT1mdW5jdGlvbihlKXt2YXIgdD1lLmN1cnJlbnRUYXJnZXQsbj10W29dLHI9ZS5wcm9wZXJ0eU5hbWUsaTtuLmhhc093blByb3BlcnR5KHIpJiYobj1uW3JdLGk9bmV3IEN1c3RvbUV2ZW50KEUse2J1YmJsZXM6ITB9KSxpLmF0dHJOYW1lPW4ubmFtZSxpLnByZXZWYWx1ZT1uLnZhbHVlfHxudWxsLGkubmV3VmFsdWU9bi52YWx1ZT10W3JdfHxudWxsLGkucHJldlZhbHVlPT1udWxsP2lbeV09aS5hdHRyQ2hhbmdlPTA6aVtiXT1pLmF0dHJDaGFuZ2U9MSxjdC5jYWxsKHQsaSkpfTtlLnZhbHVlPWZ1bmN0aW9uKGUscyx1KXtlPT09RSYmdGhpc1toXSYmdGhpcy5zZXRBdHRyaWJ1dGUhPT1yJiYodGhpc1tvXT17Y2xhc3NOYW1lOntuYW1lOlwiY2xhc3NcIix2YWx1ZTp0aGlzLmNsYXNzTmFtZX19LHRoaXMuc2V0QXR0cmlidXRlPXIsdGhpcy5yZW1vdmVBdHRyaWJ1dGU9bix0LmNhbGwodGhpcyxcInByb3BlcnR5Y2hhbmdlXCIsaSkpLHQuY2FsbCh0aGlzLGUscyx1KX0sQihpdCx1LGUpfSgpKTpydHx8KE1bdV0oRSxidCksTS5zZXRBdHRyaWJ1dGUobywxKSxNLnJlbW92ZUF0dHJpYnV0ZShvKSxOdCYmKEx0PWZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMsbixyLGk7aWYodD09PWUudGFyZ2V0KXtuPXRbb10sdFtvXT1yPU90KHQpO2ZvcihpIGluIHIpe2lmKCEoaSBpbiBuKSlyZXR1cm4gQXQoMCx0LGksbltpXSxyW2ldLHkpO2lmKHJbaV0hPT1uW2ldKXJldHVybiBBdCgxLHQsaSxuW2ldLHJbaV0sYil9Zm9yKGkgaW4gbilpZighKGkgaW4gcikpcmV0dXJuIEF0KDIsdCxpLG5baV0scltpXSx3KX19LEF0PWZ1bmN0aW9uKGUsdCxuLHIsaSxzKXt2YXIgbz17YXR0ckNoYW5nZTplLGN1cnJlbnRUYXJnZXQ6dCxhdHRyTmFtZTpuLHByZXZWYWx1ZTpyLG5ld1ZhbHVlOml9O29bc109ZSxSdChvKX0sT3Q9ZnVuY3Rpb24oZSl7Zm9yKHZhciB0LG4scj17fSxpPWUuYXR0cmlidXRlcyxzPTAsbz1pLmxlbmd0aDtzPG87cysrKXQ9aVtzXSxuPXQubmFtZSxuIT09XCJzZXRBdHRyaWJ1dGVcIiYmKHJbbl09dC52YWx1ZSk7cmV0dXJuIHJ9KSksbltzXT1mdW5jdGlvbih0LHIpe3A9dC50b1VwcGVyQ2FzZSgpLHh0JiYoeHQ9ITEscnQ/KE10PWZ1bmN0aW9uKGUsdCl7ZnVuY3Rpb24gbihlLHQpe2Zvcih2YXIgbj0wLHI9ZS5sZW5ndGg7bjxyO3QoZVtuKytdKSk7fXJldHVybiBuZXcgcnQoZnVuY3Rpb24ocil7Zm9yKHZhciBpLHMsbyx1PTAsYT1yLmxlbmd0aDt1PGE7dSsrKWk9clt1XSxpLnR5cGU9PT1cImNoaWxkTGlzdFwiPyhuKGkuYWRkZWROb2RlcyxlKSxuKGkucmVtb3ZlZE5vZGVzLHQpKToocz1pLnRhcmdldCxrdCYmc1toXSYmaS5hdHRyaWJ1dGVOYW1lIT09XCJzdHlsZVwiJiYobz1odC5jYWxsKHMsaS5hdHRyaWJ1dGVOYW1lKSxvIT09aS5vbGRWYWx1ZSYmc1toXShpLmF0dHJpYnV0ZU5hbWUsaS5vbGRWYWx1ZSxvKSkpfSl9KEZ0KGEpLEZ0KGwpKSxfdD1mdW5jdGlvbihlKXtyZXR1cm4gTXQub2JzZXJ2ZShlLHtjaGlsZExpc3Q6ITAsc3VidHJlZTohMH0pLGV9LF90KG4pLGZ0JiYoaXQuYXR0YWNoU2hhZG93PWZ1bmN0aW9uKCl7cmV0dXJuIF90KGZ0LmFwcGx5KHRoaXMsYXJndW1lbnRzKSl9KSk6KHd0PVtdLG5bdV0oXCJET01Ob2RlSW5zZXJ0ZWRcIixVdChhKSksblt1XShcIkRPTU5vZGVSZW1vdmVkXCIsVXQobCkpKSxuW3VdKFMsenQpLG5bdV0oXCJyZWFkeXN0YXRlY2hhbmdlXCIsenQpLGl0LmNsb25lTm9kZT1mdW5jdGlvbihlKXt2YXIgdD1sdC5jYWxsKHRoaXMsISFlKSxuPUl0KHQpO3JldHVybi0xPG4mJlB0KHQsQVtuXSksZSYmTy5sZW5ndGgmJmp0KHQucXVlcnlTZWxlY3RvckFsbChPKSksdH0pO2lmKFR0KXJldHVybiBUdD0hMTstMjxfLmNhbGwoTCxOK3ApK18uY2FsbChMLFQrcCkmJiR0KHQpO2lmKCFDLnRlc3QocCl8fC0xPF8uY2FsbChrLHApKXRocm93IG5ldyBFcnJvcihcIlRoZSB0eXBlIFwiK3QrXCIgaXMgaW52YWxpZFwiKTt2YXIgaT1mdW5jdGlvbigpe3JldHVybiBvP24uY3JlYXRlRWxlbWVudChmLHApOm4uY3JlYXRlRWxlbWVudChmKX0scz1yfHxELG89UC5jYWxsKHMsYyksZj1vP3JbY10udG9VcHBlckNhc2UoKTpwLHAsZDtyZXR1cm4gbyYmLTE8Xy5jYWxsKEwsVCtmKSYmJHQoZiksZD1MLnB1c2goKG8/TjpUKStwKS0xLE89Ty5jb25jYXQoTy5sZW5ndGg/XCIsXCI6XCJcIixvP2YrJ1tpcz1cIicrdC50b0xvd2VyQ2FzZSgpKydcIl0nOmYpLGkucHJvdG90eXBlPUFbZF09UC5jYWxsKHMsXCJwcm90b3R5cGVcIik/cy5wcm90b3R5cGU6dHQoaXQpLE8ubGVuZ3RoJiZCdChuLnF1ZXJ5U2VsZWN0b3JBbGwoTyksYSksaX0sbi5jcmVhdGVFbGVtZW50PWd0PWZ1bmN0aW9uKGUsdCl7dmFyIHI9WXQodCksaT1yP210LmNhbGwobixlLGV0KHIpKTptdC5jYWxsKG4sZSkscz1cIlwiK2Usbz1fLmNhbGwoTCwocj9OOlQpKyhyfHxzKS50b1VwcGVyQ2FzZSgpKSx1PS0xPG87cmV0dXJuIHImJihpLnNldEF0dHJpYnV0ZShcImlzXCIscj1yLnRvTG93ZXJDYXNlKCkpLHUmJih1PXF0KHMudG9VcHBlckNhc2UoKSxyKSkpLGt0PSFuLmNyZWF0ZUVsZW1lbnQuaW5uZXJIVE1MSGVscGVyLHUmJlB0KGksQVtvXSksaX0pLEt0LnByb3RvdHlwZT17Y29uc3RydWN0b3I6S3QsZGVmaW5lOlY/ZnVuY3Rpb24oZSx0LG4pe2lmKG4pUXQoZSx0LG4pO2Vsc2V7dmFyIHI9ZS50b1VwcGVyQ2FzZSgpO0dbcl09e2NvbnN0cnVjdG9yOnQsY3JlYXRlOltyXX0sWi5zZXQodCxyKSxYLmRlZmluZShlLHQpfX06UXQsZ2V0OlY/ZnVuY3Rpb24oZSl7cmV0dXJuIFguZ2V0KGUpfHxHdChlKX06R3Qsd2hlbkRlZmluZWQ6Vj9mdW5jdGlvbihlKXtyZXR1cm4gSy5yYWNlKFtYLndoZW5EZWZpbmVkKGUpLGVuKGUpXSl9OmVufTtpZighWHx8L15mb3JjZS8udGVzdCh0LnR5cGUpKXRuKCk7ZWxzZSBpZighdC5ub0J1aWx0SW4pdHJ5eyhmdW5jdGlvbih0LHIsaSl7cltjXT1cImFcIix0LnByb3RvdHlwZT10dChIVE1MQW5jaG9yRWxlbWVudC5wcm90b3R5cGUpLHQucHJvdG90eXBlLmNvbnN0cnVjdG9yPXQsZS5jdXN0b21FbGVtZW50cy5kZWZpbmUoaSx0LHIpO2lmKGh0LmNhbGwobi5jcmVhdGVFbGVtZW50KFwiYVwiLHtpczppfSksXCJpc1wiKSE9PWl8fFYmJmh0LmNhbGwobmV3IHQsXCJpc1wiKSE9PWkpdGhyb3cgcn0pKGZ1bmN0aW9uIG9uKCl7cmV0dXJuIFJlZmxlY3QuY29uc3RydWN0KEhUTUxBbmNob3JFbGVtZW50LFtdLG9uKX0se30sXCJkb2N1bWVudC1yZWdpc3Rlci1lbGVtZW50LWFcIil9Y2F0Y2gobm4pe3RuKCl9aWYoIXQubm9CdWlsdEluKXRyeXttdC5jYWxsKG4sXCJhXCIsXCJhXCIpfWNhdGNoKHJuKXtldD1mdW5jdGlvbihlKXtyZXR1cm57aXM6ZS50b0xvd2VyQ2FzZSgpfX19fSkod2luZG93KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kb2N1bWVudC1yZWdpc3Rlci1lbGVtZW50L2J1aWxkL2RvY3VtZW50LXJlZ2lzdGVyLWVsZW1lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!********************!*\
  !*** ./src/cpu.js ***!
  \********************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
<<<<<<< HEAD


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Virtual CPU for the Gameboy Color; a modified z80
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _opcode = __webpack_require__(3);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CPU = function () {
  function CPU() {
    _classCallCheck(this, CPU);

    // Create the memory banks
    this.memory8bit = new Uint8Array(18);
    this.memory16bit = new Uint16Array(5);

    // an array to store the opcodes in between calls in order to know how to process
    this.opcodeArray = [];
  }

  _createClass(CPU, [{
    key: 'processOpcode',
    value: function processOpcode(opcode) {
      var _this = this;

      this.opcodeArray.push(opcode);

      // our object key for the table
      var opKey = this.opcodeArray[0];
      var _OPCODE$opKey = _opcode.OPCODE[opKey],
          length = _OPCODE$opKey.length,
          operand1 = _OPCODE$opKey.operand1,
          operand2 = _OPCODE$opKey.operand2,
          mnemonic = _OPCODE$opKey.mnemonic;


      var regValue1 = this[operand1.toLowerCase()];
      var regValue2 = void 0;

      if (operand2) {
        regValue2 = this[operand2.toLowerCase()];
      }

      // Check our opcode's length...
      var sortOpcodes = function sortOpcodes() {
        if (length === 1) {
          console.log('mnemonic', mnemonic);

          if (regValue1 === regValue2) {
            _this[operand1.toLowerCase()] = regValue1;
          }
          _this[operand1.toLowerCase()] = regValue1 + regValue2;
        }

        if (mnemonic === 'SUB') {
          _this.f = 4;
          var testVal = _this[operand1.toLowerCase()];
          console.log('SUB', testVal, _this.f);
        }

        if (length === 2 && _this.opcodeArray.length === 2) {

          if (_this.opcodeArray.length === 2) {
            var opcode2 = _this.opcodeArray[1];

            // console.log(`Opcode ${opcode2}, `)
            var data = _this[operand1.toLowerCase()] + opcode2;
            if (data >= 0xff) {
              // console.log( `this "F" ${data}`);
              _this.f = 1;
            }
            if (data < 0xff) {
              // console.log( `this "F" ${data}`);
              _this.f = 0;
            }

            _this[operand1.toLowerCase()] = data;
            // console.log('data', data, OPCODE[this.opcodeArray[0]]);
            _this.opcodeArray.length = 0;
          }
        }
      };

      sortOpcodes();

      // if (this.opcodeArray.length === 2) {
      //   const currentOpcode = OPCODE[this.opcodeArray[0]];
      //   const data = this.opcodeArray[1];
      //   this[currentOpcode.operand1.toLowerCase()] = data;
      //
      //   // The preferred method to empty an array. As opposed to
      //   // this.opcodeArray = [], which is creating a new, empty array.
      //   this.opcodeArray.length = 0;
      // }
    }
  }, {
    key: 'a',
    get: function get() {
      return this.memory8bit[0];
    },
    set: function set(value) {
      this.memory8bit[0] = value;
    }
  }, {
    key: 'b',
    get: function get() {
      return this.memory8bit[1];
    },
    set: function set(value) {
      this.memory8bit[1] = value;
    }
  }, {
    key: 'c',
    get: function get() {
      return this.memory8bit[2];
    },
    set: function set(value) {
      this.memory8bit[2] = value;
    }
  }, {
    key: 'd',
    get: function get() {
      return this.memory8bit[3];
    },
    set: function set(value) {
      this.memory8bit[3] = value;
    }
  }, {
    key: 'e',
    get: function get() {
      return this.memory8bit[4];
    },
    set: function set(value) {
      this.memory8bit[4] = value;
    }
  }, {
    key: 'f',
    get: function get() {
      return this.memory8bit[5];
    },
    set: function set(value) {
      this.memory8bit[5] = value;
    }
  }, {
    key: 'l',
    get: function get() {
      return this.memory8bit[6];
    },
    set: function set(value) {
      this.memory8bit[6] = value;
    }
  }, {
    key: 'h',
    get: function get() {
      return this.memory8bit[7];
    },
    set: function set(value) {
      this.memory8bit[7] = value;
    }
  }, {
    key: 'altA',
    get: function get() {
      return this.memory8bit[8];
    },
    set: function set(value) {
      this.memory8bit[8] = value;
    }
  }, {
    key: 'altB',
    get: function get() {
      return this.memory8bit[9];
    },
    set: function set(value) {
      this.memory8bit[9] = value;
    }
  }, {
    key: 'altD',
    get: function get() {
      return this.memory8bit[10];
    },
    set: function set(value) {
      this.memory8bit[10] = value;
    }
  }, {
    key: 'altH',
    get: function get() {
      return this.memory8bit[11];
    },
    set: function set(value) {
      this.memory8bit[11] = value;
    }
  }, {
    key: 'altF',
    get: function get() {
      return this.memory8bit[12];
    },
    set: function set(value) {
      this.memory8bit[12] = value;
    }
  }, {
    key: 'altC',
    get: function get() {
      return this.memory8bit[13];
    },
    set: function set(value) {
      this.memory8bit[13] = value;
    }
  }, {
    key: 'altE',
    get: function get() {
      return this.memory8bit[14];
    },
    set: function set(value) {
      this.memory8bit[14] = value;
    }
  }, {
    key: 'altL',
    get: function get() {
      return this.memory8bit[15];
    },
    set: function set(value) {
      this.memory8bit[15] = value;
    }
  }, {
    key: 'i',
    get: function get() {
      return this.memory16bit[0];
    },
    set: function set(value) {
      this.memory16bit[0] = value;
    }
  }, {
    key: 'r',
    get: function get() {
      return this.memory16bit[1];
    },
    set: function set(value) {
      this.memory16bit[1] = value;
    }
  }, {
    key: 'ix',
    get: function get() {
      return this.memory16bit[2];
    },
    set: function set(value) {
      this.memory16bit[2] = value;
    }
  }, {
    key: 'iy',
    get: function get() {
      return this.memory16bit[3];
    },
    set: function set(value) {
      this.memory16bit[3] = value;
    }
  }, {
    key: 'sp',
    get: function get() {
      return this.memory16bit[4];
    },
    set: function set(value) {
      this.memory16bit[4] = value;
    }
  }]);

  return CPU;
}();

exports.default = CPU;
=======
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Virtual CPU for the Gameboy Color; a modified z80\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */\n\n\nvar _opcode = __webpack_require__(/*! ../const/opcode.js */ 3);\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar CPU = function () {\n  function CPU() {\n    _classCallCheck(this, CPU);\n\n    // Create the memory banks\n    this.memory8bit = new Uint8Array(18);\n    this.memory16bit = new Uint16Array(5);\n\n    // an array to store the opcodes in between calls in order to know how to process\n    this.opcodeArray = [];\n    this.data = 0;\n  }\n\n  _createClass(CPU, [{\n    key: 'processOpcode',\n    value: function processOpcode(opcode) {\n      var _this = this;\n\n      this.opcodeArray.push(opcode);\n\n      // our object key for the table\n      var opKey = this.opcodeArray[0];\n      var _OPCODE$opKey = _opcode.OPCODE[opKey],\n          length = _OPCODE$opKey.length,\n          operand1 = _OPCODE$opKey.operand1,\n          operand2 = _OPCODE$opKey.operand2,\n          mnemonic = _OPCODE$opKey.mnemonic;\n\n\n      var regValue1 = this[operand1.toLowerCase()];\n      var regValue2 = void 0;\n\n      if (operand2) {\n        regValue2 = this[operand2.toLowerCase()];\n      }\n\n      // Check our opcode's length...\n      var sortOpcodes = function sortOpcodes() {\n        if (length === 1) {\n          // console.log('mnemonic', mnemonic);\n\n          if (regValue1 === regValue2) {\n            _this[operand1.toLowerCase()] = regValue1;\n          }\n          _this[operand1.toLowerCase()] = regValue1 + regValue2;\n        }\n\n        /*\n        /* fullCarry: 0b1\n        /* halfCarry: 0b10\n        /* subtract: 0b100\n        /* zero: 0b1000\n         */\n        if (mnemonic === 'SUB') {\n          _this.f = 4;\n          console.log('f reg === ' + _this.f);\n          var subSum = _this[operand1.toLowerCase()];\n          _this[operand1.toLowerCase()] = subSum;\n          // console.log('SUB', testVal, this.f);\n        }\n\n        if (length === 2 && _this.opcodeArray.length === 2) {\n\n          if (_this.opcodeArray.length === 2) {\n            var opcode2 = _this.opcodeArray[1];\n\n            // console.log(`Opcode ${opcode2}, `)\n            if (mnemonic === 'ADD') {\n              _this.data = _this[operand1.toLowerCase()] + opcode2;\n            }\n\n            if (_this.data >= 0xff) {\n              // console.log( `this \"F\" ${data}`);\n              _this.f = 1;\n            }\n\n            if (_this.data < 0xff) {\n              // console.log( `this \"F\" ${data}`);\n              _this.f = 0;\n            }\n\n            _this[operand1.toLowerCase()] = data;\n            // console.log('data', data, OPCODE[this.opcodeArray[0]]);\n            _this.opcodeArray.length = 0;\n          }\n        }\n      };\n\n      sortOpcodes();\n\n      // if (this.opcodeArray.length === 2) {\n      //   const currentOpcode = OPCODE[this.opcodeArray[0]];\n      //   const data = this.opcodeArray[1];\n      //   this[currentOpcode.operand1.toLowerCase()] = data;\n      //\n      //   // The preferred method to empty an array. As opposed to\n      //   // this.opcodeArray = [], which is creating a new, empty array.\n      //   this.opcodeArray.length = 0;\n      // }\n    }\n  }, {\n    key: 'a',\n    get: function get() {\n      return this.memory8bit[0];\n    },\n    set: function set(value) {\n      this.memory8bit[0] = value;\n    }\n  }, {\n    key: 'b',\n    get: function get() {\n      return this.memory8bit[1];\n    },\n    set: function set(value) {\n      this.memory8bit[1] = value;\n    }\n  }, {\n    key: 'c',\n    get: function get() {\n      return this.memory8bit[2];\n    },\n    set: function set(value) {\n      this.memory8bit[2] = value;\n    }\n  }, {\n    key: 'd',\n    get: function get() {\n      return this.memory8bit[3];\n    },\n    set: function set(value) {\n      this.memory8bit[3] = value;\n    }\n  }, {\n    key: 'e',\n    get: function get() {\n      return this.memory8bit[4];\n    },\n    set: function set(value) {\n      this.memory8bit[4] = value;\n    }\n  }, {\n    key: 'f',\n    get: function get() {\n      return this.memory8bit[5];\n    },\n    set: function set(value) {\n      this.memory8bit[5] = value;\n    }\n  }, {\n    key: 'l',\n    get: function get() {\n      return this.memory8bit[6];\n    },\n    set: function set(value) {\n      this.memory8bit[6] = value;\n    }\n  }, {\n    key: 'h',\n    get: function get() {\n      return this.memory8bit[7];\n    },\n    set: function set(value) {\n      this.memory8bit[7] = value;\n    }\n  }, {\n    key: 'altA',\n    get: function get() {\n      return this.memory8bit[8];\n    },\n    set: function set(value) {\n      this.memory8bit[8] = value;\n    }\n  }, {\n    key: 'altB',\n    get: function get() {\n      return this.memory8bit[9];\n    },\n    set: function set(value) {\n      this.memory8bit[9] = value;\n    }\n  }, {\n    key: 'altD',\n    get: function get() {\n      return this.memory8bit[10];\n    },\n    set: function set(value) {\n      this.memory8bit[10] = value;\n    }\n  }, {\n    key: 'altH',\n    get: function get() {\n      return this.memory8bit[11];\n    },\n    set: function set(value) {\n      this.memory8bit[11] = value;\n    }\n  }, {\n    key: 'altF',\n    get: function get() {\n      return this.memory8bit[12];\n    },\n    set: function set(value) {\n      this.memory8bit[12] = value;\n    }\n  }, {\n    key: 'altC',\n    get: function get() {\n      return this.memory8bit[13];\n    },\n    set: function set(value) {\n      this.memory8bit[13] = value;\n    }\n  }, {\n    key: 'altE',\n    get: function get() {\n      return this.memory8bit[14];\n    },\n    set: function set(value) {\n      this.memory8bit[14] = value;\n    }\n  }, {\n    key: 'altL',\n    get: function get() {\n      return this.memory8bit[15];\n    },\n    set: function set(value) {\n      this.memory8bit[15] = value;\n    }\n  }, {\n    key: 'i',\n    get: function get() {\n      return this.memory16bit[0];\n    },\n    set: function set(value) {\n      this.memory16bit[0] = value;\n    }\n  }, {\n    key: 'r',\n    get: function get() {\n      return this.memory16bit[1];\n    },\n    set: function set(value) {\n      this.memory16bit[1] = value;\n    }\n  }, {\n    key: 'ix',\n    get: function get() {\n      return this.memory16bit[2];\n    },\n    set: function set(value) {\n      this.memory16bit[2] = value;\n    }\n  }, {\n    key: 'iy',\n    get: function get() {\n      return this.memory16bit[3];\n    },\n    set: function set(value) {\n      this.memory16bit[3] = value;\n    }\n  }, {\n    key: 'sp',\n    get: function get() {\n      return this.memory16bit[4];\n    },\n    set: function set(value) {\n      this.memory16bit[4] = value;\n    }\n  }]);\n\n  return CPU;\n}();\n\nexports.default = CPU;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvY3B1LmpzPzAwNmUiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBWaXJ0dWFsIENQVSBmb3IgdGhlIEdhbWVib3kgQ29sb3I7IGEgbW9kaWZpZWQgejgwXG4gKi9cbmltcG9ydCB7IE9QQ09ERSB9IGZyb20gJy4uL2NvbnN0L29wY29kZS5qcyc7XG5cbmNsYXNzIENQVSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8vIENyZWF0ZSB0aGUgbWVtb3J5IGJhbmtzXG4gICAgdGhpcy5tZW1vcnk4Yml0ID0gbmV3IFVpbnQ4QXJyYXkoMTgpO1xuICAgIHRoaXMubWVtb3J5MTZiaXQgPSBuZXcgVWludDE2QXJyYXkoNSk7XG5cbiAgICAvLyBhbiBhcnJheSB0byBzdG9yZSB0aGUgb3Bjb2RlcyBpbiBiZXR3ZWVuIGNhbGxzIGluIG9yZGVyIHRvIGtub3cgaG93IHRvIHByb2Nlc3NcbiAgICB0aGlzLm9wY29kZUFycmF5ID0gW107XG4gICAgdGhpcy5kYXRhID0gMDtcblxuICB9XG5cbiAgcHJvY2Vzc09wY29kZShvcGNvZGUpIHtcbiAgICB0aGlzLm9wY29kZUFycmF5LnB1c2gob3Bjb2RlKTtcblxuICAgIC8vIG91ciBvYmplY3Qga2V5IGZvciB0aGUgdGFibGVcbiAgICBjb25zdCBvcEtleSA9IHRoaXMub3Bjb2RlQXJyYXlbMF07XG4gICAgY29uc3Qge2xlbmd0aCwgb3BlcmFuZDEsIG9wZXJhbmQyLCBtbmVtb25pY30gPSBPUENPREVbb3BLZXldO1xuXG4gICAgY29uc3QgcmVnVmFsdWUxID0gdGhpc1tvcGVyYW5kMS50b0xvd2VyQ2FzZSgpXTtcbiAgICBsZXQgcmVnVmFsdWUyO1xuXG4gICAgaWYgKG9wZXJhbmQyKSB7XG4gICAgICByZWdWYWx1ZTIgPSB0aGlzW29wZXJhbmQyLnRvTG93ZXJDYXNlKCldO1xuICAgIH1cblxuICAgIC8vIENoZWNrIG91ciBvcGNvZGUncyBsZW5ndGguLi5cbiAgICBjb25zdCBzb3J0T3Bjb2RlcyA9ICgpID0+IHtcbiAgICAgIGlmIChsZW5ndGggPT09IDEpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ21uZW1vbmljJywgbW5lbW9uaWMpO1xuXG4gICAgICAgIGlmIChyZWdWYWx1ZTEgPT09IHJlZ1ZhbHVlMiApIHtcbiAgICAgICAgICB0aGlzW29wZXJhbmQxLnRvTG93ZXJDYXNlKCldID0gcmVnVmFsdWUxO1xuICAgICAgICB9XG4gICAgICAgIHRoaXNbb3BlcmFuZDEudG9Mb3dlckNhc2UoKV0gPSByZWdWYWx1ZTEgKyByZWdWYWx1ZTI7XG4gICAgICB9XG5cbiAgICAgIC8qXG4gICAgICAvKiBmdWxsQ2Fycnk6IDBiMVxuICAgICAgLyogaGFsZkNhcnJ5OiAwYjEwXG4gICAgICAvKiBzdWJ0cmFjdDogMGIxMDBcbiAgICAgIC8qIHplcm86IDBiMTAwMFxuICAgICAgICovXG4gICAgICBpZiAobW5lbW9uaWMgPT09ICdTVUInKSB7XG4gICAgICAgIHRoaXMuZiA9IDBiMTAwO1xuICAgICAgICBjb25zb2xlLmxvZyhgZiByZWcgPT09ICR7dGhpcy5mfWApO1xuICAgICAgICBjb25zdCBzdWJTdW0gPSB0aGlzW29wZXJhbmQxLnRvTG93ZXJDYXNlKCldO1xuICAgICAgICB0aGlzW29wZXJhbmQxLnRvTG93ZXJDYXNlKCldID0gc3ViU3VtO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnU1VCJywgdGVzdFZhbCwgdGhpcy5mKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGxlbmd0aCA9PT0gMiAmJiB0aGlzLm9wY29kZUFycmF5Lmxlbmd0aCA9PT0gMikge1xuXG4gICAgICAgIGlmICh0aGlzLm9wY29kZUFycmF5Lmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgIGNvbnN0IG9wY29kZTIgPSB0aGlzLm9wY29kZUFycmF5WzFdO1xuXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coYE9wY29kZSAke29wY29kZTJ9LCBgKVxuICAgICAgICAgIGlmIChtbmVtb25pYyA9PT0gJ0FERCcpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IHRoaXNbb3BlcmFuZDEudG9Mb3dlckNhc2UoKV0gKyBvcGNvZGUyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0aGlzLmRhdGEgPj0gMHhmZikge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coIGB0aGlzIFwiRlwiICR7ZGF0YX1gKTtcbiAgICAgICAgICAgIHRoaXMuZiA9IDBiMTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodGhpcy5kYXRhIDwgMHhmZikge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coIGB0aGlzIFwiRlwiICR7ZGF0YX1gKTtcbiAgICAgICAgICAgIHRoaXMuZiA9IDBiMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzW29wZXJhbmQxLnRvTG93ZXJDYXNlKCldID0gZGF0YTtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZGF0YScsIGRhdGEsIE9QQ09ERVt0aGlzLm9wY29kZUFycmF5WzBdXSk7XG4gICAgICAgICAgdGhpcy5vcGNvZGVBcnJheS5sZW5ndGggPSAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHNvcnRPcGNvZGVzKCk7XG5cbiAgICAvLyBpZiAodGhpcy5vcGNvZGVBcnJheS5sZW5ndGggPT09IDIpIHtcbiAgICAvLyAgIGNvbnN0IGN1cnJlbnRPcGNvZGUgPSBPUENPREVbdGhpcy5vcGNvZGVBcnJheVswXV07XG4gICAgLy8gICBjb25zdCBkYXRhID0gdGhpcy5vcGNvZGVBcnJheVsxXTtcbiAgICAvLyAgIHRoaXNbY3VycmVudE9wY29kZS5vcGVyYW5kMS50b0xvd2VyQ2FzZSgpXSA9IGRhdGE7XG4gICAgLy9cbiAgICAvLyAgIC8vIFRoZSBwcmVmZXJyZWQgbWV0aG9kIHRvIGVtcHR5IGFuIGFycmF5LiBBcyBvcHBvc2VkIHRvXG4gICAgLy8gICAvLyB0aGlzLm9wY29kZUFycmF5ID0gW10sIHdoaWNoIGlzIGNyZWF0aW5nIGEgbmV3LCBlbXB0eSBhcnJheS5cbiAgICAvLyAgIHRoaXMub3Bjb2RlQXJyYXkubGVuZ3RoID0gMDtcbiAgICAvLyB9XG4gIH1cblxuICBnZXQgYSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZW1vcnk4Yml0WzBdO1xuICB9XG4gIHNldCBhKHZhbHVlKSB7XG4gICAgdGhpcy5tZW1vcnk4Yml0WzBdID0gdmFsdWU7XG4gIH1cblxuICBnZXQgYigpIHtcbiAgICByZXR1cm4gdGhpcy5tZW1vcnk4Yml0WzFdO1xuICB9XG4gIHNldCBiKHZhbHVlKSB7XG4gICAgdGhpcy5tZW1vcnk4Yml0WzFdID0gdmFsdWU7XG4gIH1cblxuICBnZXQgYygpIHtcbiAgICByZXR1cm4gdGhpcy5tZW1vcnk4Yml0WzJdO1xuICB9XG4gIHNldCBjKHZhbHVlKSB7XG4gICAgdGhpcy5tZW1vcnk4Yml0WzJdID0gdmFsdWU7XG4gIH1cblxuICBnZXQgZCgpIHtcbiAgICByZXR1cm4gdGhpcy5tZW1vcnk4Yml0WzNdO1xuICB9XG4gIHNldCBkKHZhbHVlKSB7XG4gICAgdGhpcy5tZW1vcnk4Yml0WzNdID0gdmFsdWU7XG4gIH1cblxuICBnZXQgZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZW1vcnk4Yml0WzRdO1xuICB9XG4gIHNldCBlKHZhbHVlKSB7XG4gICAgdGhpcy5tZW1vcnk4Yml0WzRdID0gdmFsdWU7XG4gIH1cblxuICBnZXQgZigpIHtcbiAgICByZXR1cm4gdGhpcy5tZW1vcnk4Yml0WzVdO1xuICB9XG4gIHNldCBmKHZhbHVlKSB7XG4gICAgdGhpcy5tZW1vcnk4Yml0WzVdID0gdmFsdWU7XG4gIH1cblxuICBnZXQgbCgpIHtcbiAgICByZXR1cm4gdGhpcy5tZW1vcnk4Yml0WzZdO1xuICB9XG4gIHNldCBsKHZhbHVlKSB7XG4gICAgdGhpcy5tZW1vcnk4Yml0WzZdID0gdmFsdWU7XG4gIH1cblxuICBnZXQgaCgpIHtcbiAgICByZXR1cm4gdGhpcy5tZW1vcnk4Yml0WzddO1xuICB9XG4gIHNldCBoKHZhbHVlKSB7XG4gICAgdGhpcy5tZW1vcnk4Yml0WzddID0gdmFsdWU7XG4gIH1cblxuICBnZXQgYWx0QSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZW1vcnk4Yml0WzhdO1xuICB9XG5cbiAgc2V0IGFsdEEodmFsdWUpIHtcbiAgICB0aGlzLm1lbW9yeThiaXRbOF0gPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBhbHRCKCkge1xuICAgIHJldHVybiB0aGlzLm1lbW9yeThiaXRbOV07XG4gIH1cblxuICBzZXQgYWx0Qih2YWx1ZSkge1xuICAgIHRoaXMubWVtb3J5OGJpdFs5XSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IGFsdEQoKSB7XG4gICAgcmV0dXJuIHRoaXMubWVtb3J5OGJpdFsxMF07XG4gIH1cblxuICBzZXQgYWx0RCh2YWx1ZSkge1xuICAgIHRoaXMubWVtb3J5OGJpdFsxMF0gPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBhbHRIKCkge1xuICAgIHJldHVybiB0aGlzLm1lbW9yeThiaXRbMTFdO1xuICB9XG5cbiAgc2V0IGFsdEgodmFsdWUpIHtcbiAgICB0aGlzLm1lbW9yeThiaXRbMTFdID0gdmFsdWU7XG4gIH1cblxuICBnZXQgYWx0RigpIHtcbiAgICByZXR1cm4gdGhpcy5tZW1vcnk4Yml0WzEyXTtcbiAgfVxuXG4gIHNldCBhbHRGKHZhbHVlKSB7XG4gICAgdGhpcy5tZW1vcnk4Yml0WzEyXSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IGFsdEMoKSB7XG4gICAgcmV0dXJuIHRoaXMubWVtb3J5OGJpdFsxM107XG4gIH1cblxuICBzZXQgYWx0Qyh2YWx1ZSkge1xuICAgIHRoaXMubWVtb3J5OGJpdFsxM10gPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBhbHRFKCkge1xuICAgIHJldHVybiB0aGlzLm1lbW9yeThiaXRbMTRdO1xuICB9XG5cbiAgc2V0IGFsdEUodmFsdWUpIHtcbiAgICB0aGlzLm1lbW9yeThiaXRbMTRdID0gdmFsdWU7XG4gIH1cblxuICBnZXQgYWx0TCgpIHtcbiAgICByZXR1cm4gdGhpcy5tZW1vcnk4Yml0WzE1XTtcbiAgfVxuXG4gIHNldCBhbHRMKHZhbHVlKSB7XG4gICAgdGhpcy5tZW1vcnk4Yml0WzE1XSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IGkgKCkge1xuICAgIHJldHVybiB0aGlzLm1lbW9yeTE2Yml0WzBdO1xuICB9XG5cbiAgc2V0IGkgKHZhbHVlKSB7XG4gICAgdGhpcy5tZW1vcnkxNmJpdFswXSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHIgKCkge1xuICAgIHJldHVybiB0aGlzLm1lbW9yeTE2Yml0WzFdO1xuICB9XG5cbiAgc2V0IHIgKHZhbHVlKSB7XG4gICAgdGhpcy5tZW1vcnkxNmJpdFsxXSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IGl4ICgpIHtcbiAgICByZXR1cm4gdGhpcy5tZW1vcnkxNmJpdFsyXTtcbiAgfVxuXG4gIHNldCBpeCAodmFsdWUpIHtcbiAgICB0aGlzLm1lbW9yeTE2Yml0WzJdID0gdmFsdWU7XG4gIH1cblxuICBnZXQgaXkgKCkge1xuICAgIHJldHVybiB0aGlzLm1lbW9yeTE2Yml0WzNdO1xuICB9XG5cbiAgc2V0IGl5ICh2YWx1ZSkge1xuICAgIHRoaXMubWVtb3J5MTZiaXRbM10gPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBzcCAoKSB7XG4gICAgcmV0dXJuIHRoaXMubWVtb3J5MTZiaXRbNF07XG4gIH1cblxuICBzZXQgc3AgKHZhbHVlKSB7XG4gICAgdGhpcy5tZW1vcnkxNmJpdFs0XSA9IHZhbHVlO1xuICB9XG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBDUFU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NwdS5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7O0FBR0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7O0FBS0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");
>>>>>>> f8be061d9bc834f434984a6f33880d8d45830e9f

/***/ }),
/* 3 */
/*!*************************!*\
  !*** ./const/opcode.js ***!
  \*************************/
/*! exports provided: OPCODE, default, OPCODE_CB */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< HEAD
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
const OPCODE = {
  // Length: 1
  0x2: {
    mnemonic: 'LD',
    length: 1,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x2',
    operand1: '(BC)',
    operand2: 'A'
  },
  0x9: {
    mnemonic: 'ADD',
    length: 1,
    cycles: [
      8
    ],
    flags: [
      '-',
      '0',
      'H',
      'C'
    ],
    addr: '0x9',
    operand1: 'HL',
    operand2: 'BC'
  },
  0xa: {
    mnemonic: 'LD',
    length: 1,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xa',
    operand1: 'A',
    operand2: '(BC)'
  },
  0x12: {
    mnemonic: 'LD',
    length: 1,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x12',
    operand1: '(DE)',
    operand2: 'A'
  },
  0x19: {
    mnemonic: 'ADD',
    length: 1,
    cycles: [
      8
    ],
    flags: [
      '-',
      '0',
      'H',
      'C'
    ],
    addr: '0x19',
    operand1: 'HL',
    operand2: 'DE'
  },
  0x1a: {
    mnemonic: 'LD',
    length: 1,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x1a',
    operand1: 'A',
    operand2: '(DE)'
  },
  0x22: {
    mnemonic: 'LD',
    length: 1,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x22',
    operand1: '(HL+)',
    operand2: 'A'
  },
  0x29: {
    mnemonic: 'ADD',
    length: 1,
    cycles: [
      8
    ],
    flags: [
      '-',
      '0',
      'H',
      'C'
    ],
    addr: '0x29',
    operand1: 'HL',
    operand2: 'HL'
  },
  0x2a: {
    mnemonic: 'LD',
    length: 1,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x2a',
    operand1: 'A',
    operand2: '(HL+)'
  },
  0x32: {
    mnemonic: 'LD',
    length: 1,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x32',
    operand1: '(HL-)',
    operand2: 'A'
  },
  0x39: {
    mnemonic: 'ADD',
    length: 1,
    cycles: [
      8
    ],
    flags: [
      '-',
      '0',
      'H',
      'C'
    ],
    addr: '0x39',
    operand1: 'HL',
    operand2: 'SP'
  },
  0x3a: {
    mnemonic: 'LD',
    length: 1,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x3a',
    operand1: 'A',
    operand2: '(HL-)'
  },
  0x40: {
    mnemonic: 'LD',
    length: 1,
    cycles: [
      4
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x40',
    operand1: 'B',
    operand2: 'B'
  },
  0x41: {
    mnemonic: 'LD',
    length: 1,
    cycles: [
      4
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x41',
    operand1: 'B',
    operand2: 'C'
  },
  0x42: {
    mnemonic: 'LD',
    length: 1,
    cycles: [
      4
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x42',
    operand1: 'B',
    operand2: 'D'
  },
  0x43: {
    mnemonic: 'LD',
    length: 1,
    cycles: [
      4
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x43',
    operand1: 'B',
    operand2: 'E'
  },
  0x44: {
    mnemonic: 'LD',
    length: 1,
    cycles: [
      4
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x44',
    operand1: 'B',
    operand2: 'H'
  },
  0x45: {
    mnemonic: 'LD',
    length: 1,
    cycles: [
      4
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x45',
    operand1: 'B',
    operand2: 'L'
  },
  0x46: {
    mnemonic: 'LD',
    length: 1,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x46',
    operand1: 'B',
    operand2: '(HL)'
  },
  0x47: {
    mnemonic: 'LD',
    length: 1,
    cycles: [
      4
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x47',
    operand1: 'B',
    operand2: 'A'
  },
  0x48: {
    mnemonic: 'LD',
    length: 1,
    cycles: [
      4
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x48',
    operand1: 'C',
    operand2: 'B'
  },
  0x49: {
    mnemonic: 'LD',
    length: 1,
    cycles: [
      4
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x49',
    operand1: 'C',
    operand2: 'C'
  },
  0x4a: {
    mnemonic: 'LD',
    length: 1,
    cycles: [
      4
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x4a',
    operand1: 'C',
    operand2: 'D'
  },
  0x4b: {
    mnemonic: 'LD',
    length: 1,
    cycles: [
      4
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x4b',
    operand1: 'C',
    operand2: 'E'
  },
  0x4c: {
    mnemonic: 'LD',
    length: 1,
    cycles: [
      4
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x4c',
    operand1: 'C',
    operand2: 'H'
  },
  0x4d: {
    mnemonic: 'LD',
    length: 1,
    cycles: [
      4
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x4d',
    operand1: 'C',
    operand2: 'L'
  },
  0x4e: {
    mnemonic: 'LD',
    length: 1,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x4e',
    operand1: 'C',
    operand2: '(HL)'
  },
  0x4f: {
    mnemonic: 'LD',
    length: 1,
    cycles: [
      4
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x4f',
    operand1: 'C',
    operand2: 'A'
  },
  0x50: {
    mnemonic: 'LD',
    length: 1,
    cycles: [
      4
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x50',
    operand1: 'D',
    operand2: 'B'
  },
  0x51: {
    mnemonic: 'LD',
    length: 1,
    cycles: [
      4
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x51',
    operand1: 'D',
    operand2: 'C'
  },
  0x52: {
    mnemonic: 'LD',
    length: 1,
    cycles: [
      4
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x52',
    operand1: 'D',
    operand2: 'D'
  },
  0x53: {
    mnemonic: 'LD',
    length: 1,
    cycles: [
      4
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x53',
    operand1: 'D',
    operand2: 'E'
  },
  0x54: {
    mnemonic: 'LD',
    length: 1,
    cycles: [
      4
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x54',
    operand1: 'D',
    operand2: 'H'
  },
  0x55: {
    mnemonic: 'LD',
    length: 1,
    cycles: [
      4
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x55',
    operand1: 'D',
    operand2: 'L'
  },
  0x56: {
    mnemonic: 'LD',
    length: 1,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x56',
    operand1: 'D',
    operand2: '(HL)'
  },
  0x57: {
    mnemonic: 'LD',
    length: 1,
    cycles: [
      4
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x57',
    operand1: 'D',
    operand2: 'A'
  },
  0x58: {
    mnemonic: 'LD',
    length: 1,
    cycles: [
      4
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x58',
    operand1: 'E',
    operand2: 'B'
  },
  0x59: {
    mnemonic: 'LD',
    length: 1,
    cycles: [
      4
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x59',
    operand1: 'E',
    operand2: 'C'
  },
  0x5a: {
    mnemonic: 'LD',
    length: 1,
    cycles: [
      4
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x5a',
    operand1: 'E',
    operand2: 'D'
  },
  0x5b: {
    mnemonic: 'LD',
    length: 1,
    cycles: [
      4
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x5b',
    operand1: 'E',
    operand2: 'E'
  },
  0x5c: {
    mnemonic: 'LD',
    length: 1,
    cycles: [
      4
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x5c',
    operand1: 'E',
    operand2: 'H'
  },
  0x5d: {
    mnemonic: 'LD',
    length: 1,
    cycles: [
      4
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x5d',
    operand1: 'E',
    operand2: 'L'
  },
  0x5e: {
    mnemonic: 'LD',
    length: 1,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x5e',
    operand1: 'E',
    operand2: '(HL)'
  },
  0x5f: {
    mnemonic: 'LD',
    length: 1,
    cycles: [
      4
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x5f',
    operand1: 'E',
    operand2: 'A'
  },
  0x60: {
    mnemonic: 'LD',
    length: 1,
    cycles: [
      4
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x60',
    operand1: 'H',
    operand2: 'B'
  },
  0x61: {
    mnemonic: 'LD',
    length: 1,
    cycles: [
      4
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x61',
    operand1: 'H',
    operand2: 'C'
  },
  0x62: {
    mnemonic: 'LD',
    length: 1,
    cycles: [
      4
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x62',
    operand1: 'H',
    operand2: 'D'
  },
  0x63: {
    mnemonic: 'LD',
    length: 1,
    cycles: [
      4
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x63',
    operand1: 'H',
    operand2: 'E'
  },
  0x64: {
    mnemonic: 'LD',
    length: 1,
    cycles: [
      4
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x64',
    operand1: 'H',
    operand2: 'H'
  },
  0x65: {
    mnemonic: 'LD',
    length: 1,
    cycles: [
      4
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x65',
    operand1: 'H',
    operand2: 'L'
  },
  0x66: {
    mnemonic: 'LD',
    length: 1,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x66',
    operand1: 'H',
    operand2: '(HL)'
  },
  0x67: {
    mnemonic: 'LD',
    length: 1,
    cycles: [
      4
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x67',
    operand1: 'H',
    operand2: 'A'
  },
  0x68: {
    mnemonic: 'LD',
    length: 1,
    cycles: [
      4
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x68',
    operand1: 'L',
    operand2: 'B'
  },
  0x69: {
    mnemonic: 'LD',
    length: 1,
    cycles: [
      4
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x69',
    operand1: 'L',
    operand2: 'C'
  },
  0x6a: {
    mnemonic: 'LD',
    length: 1,
    cycles: [
      4
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x6a',
    operand1: 'L',
    operand2: 'D'
  },
  0x6b: {
    mnemonic: 'LD',
    length: 1,
    cycles: [
      4
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x6b',
    operand1: 'L',
    operand2: 'E'
  },
  0x6c: {
    mnemonic: 'LD',
    length: 1,
    cycles: [
      4
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x6c',
    operand1: 'L',
    operand2: 'H'
  },
  0x6d: {
    mnemonic: 'LD',
    length: 1,
    cycles: [
      4
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x6d',
    operand1: 'L',
    operand2: 'L'
  },
  0x6e: {
    mnemonic: 'LD',
    length: 1,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x6e',
    operand1: 'L',
    operand2: '(HL)'
  },
  0x6f: {
    mnemonic: 'LD',
    length: 1,
    cycles: [
      4
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x6f',
    operand1: 'L',
    operand2: 'A'
  },
  0x70: {
    mnemonic: 'LD',
    length: 1,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x70',
    operand1: '(HL)',
    operand2: 'B'
  },
  0x71: {
    mnemonic: 'LD',
    length: 1,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x71',
    operand1: '(HL)',
    operand2: 'C'
  },
  0x72: {
    mnemonic: 'LD',
    length: 1,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x72',
    operand1: '(HL)',
    operand2: 'D'
  },
  0x73: {
    mnemonic: 'LD',
    length: 1,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x73',
    operand1: '(HL)',
    operand2: 'E'
  },
  0x74: {
    mnemonic: 'LD',
    length: 1,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x74',
    operand1: '(HL)',
    operand2: 'H'
  },
  0x75: {
    mnemonic: 'LD',
    length: 1,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x75',
    operand1: '(HL)',
    operand2: 'L'
  },
  0x76: {
    mnemonic: 'HALT',
    length: 1,
    cycles: [
      4
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x76'
  },
  0x77: {
    mnemonic: 'LD',
    length: 1,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x77',
    operand1: '(HL)',
    operand2: 'A'
  },
  0x78: {
    mnemonic: 'LD',
    length: 1,
    cycles: [
      4
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x78',
    operand1: 'A',
    operand2: 'B'
  },
  0x79: {
    mnemonic: 'LD',
    length: 1,
    cycles: [
      4
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x79',
    operand1: 'A',
    operand2: 'C'
  },
  0x7a: {
    mnemonic: 'LD',
    length: 1,
    cycles: [
      4
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x7a',
    operand1: 'A',
    operand2: 'D'
  },
  0x7b: {
    mnemonic: 'LD',
    length: 1,
    cycles: [
      4
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x7b',
    operand1: 'A',
    operand2: 'E'
  },
  0x7c: {
    mnemonic: 'LD',
    length: 1,
    cycles: [
      4
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x7c',
    operand1: 'A',
    operand2: 'H'
  },
  0x7d: {
    mnemonic: 'LD',
    length: 1,
    cycles: [
      4
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x7d',
    operand1: 'A',
    operand2: 'L'
  },
  0x7e: {
    mnemonic: 'LD',
    length: 1,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x7e',
    operand1: 'A',
    operand2: '(HL)'
  },
  0x7f: {
    mnemonic: 'LD',
    length: 1,
    cycles: [
      4
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x7f',
    operand1: 'A',
    operand2: 'A'
  },
  0x80: {
    mnemonic: 'ADD',
    length: 1,
    cycles: [
      4
    ],
    flags: [
      'Z',
      '0',
      'H',
      'C'
    ],
    addr: '0x80',
    operand1: 'A',
    operand2: 'B'
  },
  0x81: {
    mnemonic: 'ADD',
    length: 1,
    cycles: [
      4
    ],
    flags: [
      'Z',
      '0',
      'H',
      'C'
    ],
    addr: '0x81',
    operand1: 'A',
    operand2: 'C'
  },
  0x82: {
    mnemonic: 'ADD',
    length: 1,
    cycles: [
      4
    ],
    flags: [
      'Z',
      '0',
      'H',
      'C'
    ],
    addr: '0x82',
    operand1: 'A',
    operand2: 'D'
  },
  0x83: {
    mnemonic: 'ADD',
    length: 1,
    cycles: [
      4
    ],
    flags: [
      'Z',
      '0',
      'H',
      'C'
    ],
    addr: '0x83',
    operand1: 'A',
    operand2: 'E'
  },
  0x84: {
    mnemonic: 'ADD',
    length: 1,
    cycles: [
      4
    ],
    flags: [
      'Z',
      '0',
      'H',
      'C'
    ],
    addr: '0x84',
    operand1: 'A',
    operand2: 'H'
  },
  0x85: {
    mnemonic: 'ADD',
    length: 1,
    cycles: [
      4
    ],
    flags: [
      'Z',
      '0',
      'H',
      'C'
    ],
    addr: '0x85',
    operand1: 'A',
    operand2: 'L'
  },
  0x86: {
    mnemonic: 'ADD',
    length: 1,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      'H',
      'C'
    ],
    addr: '0x86',
    operand1: 'A',
    operand2: '(HL)'
  },
  0x87: {
    mnemonic: 'ADD',
    length: 1,
    cycles: [
      4
    ],
    flags: [
      'Z',
      '0',
      'H',
      'C'
    ],
    addr: '0x87',
    operand1: 'A',
    operand2: 'A'
  },
  0x90: {
    mnemonic: 'SUB',
    length: 1,
    cycles: [
      4
    ],
    flags: [
      'Z',
      '1',
      'H',
      'C'
    ],
    addr: '0x90',
    operand1: 'B'
  },
  0x91: {
    mnemonic: 'SUB',
    length: 1,
    cycles: [
      4
    ],
    flags: [
      'Z',
      '1',
      'H',
      'C'
    ],
    addr: '0x91',
    operand1: 'C'
  },
  0x92: {
    mnemonic: 'SUB',
    length: 1,
    cycles: [
      4
    ],
    flags: [
      'Z',
      '1',
      'H',
      'C'
    ],
    addr: '0x92',
    operand1: 'D'
  },
  0x93: {
    mnemonic: 'SUB',
    length: 1,
    cycles: [
      4
    ],
    flags: [
      'Z',
      '1',
      'H',
      'C'
    ],
    addr: '0x93',
    operand1: 'E'
  },
  0x94: {
    mnemonic: 'SUB',
    length: 1,
    cycles: [
      4
    ],
    flags: [
      'Z',
      '1',
      'H',
      'C'
    ],
    addr: '0x94',
    operand1: 'H'
  },
  0x95: {
    mnemonic: 'SUB',
    length: 1,
    cycles: [
      4
    ],
    flags: [
      'Z',
      '1',
      'H',
      'C'
    ],
    addr: '0x95',
    operand1: 'L'
  },
  0x96: {
    mnemonic: 'SUB',
    length: 1,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '1',
      'H',
      'C'
    ],
    addr: '0x96',
    operand1: '(HL)'
  },
  0x97: {
    mnemonic: 'SUB',
    length: 1,
    cycles: [
      4
    ],
    flags: [
      'Z',
      '1',
      'H',
      'C'
    ],
    addr: '0x97',
    operand1: 'A'
  },
  0xf9: {
    mnemonic: 'LD',
    length: 1,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xf9',
    operand1: 'SP',
    operand2: 'HL'
  },

  // Length: 2
  0x6: {
    mnemonic: 'LD',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x6',
    operand1: 'B',
    operand2: 'd8'
  },
  0xe: {
    mnemonic: 'LD',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xe',
    operand1: 'C',
    operand2: 'd8'
  },
  0xc6: {
    mnemonic: 'ADD',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      'H',
      'C'
    ],
    addr: '0xc6',
    operand1: 'A',
    operand2: 'd8'
  },
  0x16: {
    mnemonic: 'LD',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x16',
    operand1: 'D',
    operand2: 'd8'
  },
  0x1e: {
    mnemonic: 'LD',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x1e',
    operand1: 'E',
    operand2: 'd8'
  },
  0x26: {
    mnemonic: 'LD',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x26',
    operand1: 'H',
    operand2: 'd8'
  },
  0x2e: {
    mnemonic: 'LD',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x2e',
    operand1: 'L',
    operand2: 'd8'
  },
  0x36: {
    mnemonic: 'LD',
    length: 2,
    cycles: [
      12
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x36',
    operand1: '(HL)',
    operand2: 'd8'
  },
  0x3e: {
    mnemonic: 'LD',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x3e',
    operand1: 'A',
    operand2: 'd8'
  },
  0xd6: {
    mnemonic: 'SUB',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '1',
      'H',
      'C'
    ],
    addr: '0xd6',
    operand1: 'd8'
  },
  0xe0: {
    mnemonic: 'LDH',
    length: 2,
    cycles: [
      12
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xe0',
    operand1: '(a8)',
    operand2: 'A'
  },
  0xe2: {
    mnemonic: 'LD',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xe2',
    operand1: '(C)',
    operand2: 'A'
  },
  0xe8: {
    mnemonic: 'ADD',
    length: 2,
    cycles: [
      16
    ],
    flags: [
      '0',
      '0',
      'H',
      'C'
    ],
    addr: '0xe8',
    operand1: 'SP',
    operand2: 'r8'
  },
  0xf0: {
    mnemonic: 'LDH',
    length: 2,
    cycles: [
      12
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xf0',
    operand1: 'A',
    operand2: '(a8)'
  },
  0xf2: {
    mnemonic: 'LD',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xf2',
    operand1: 'A',
    operand2: '(C)'
  },
  0xf8: {
    mnemonic: 'LD',
    length: 2,
    cycles: [
      12
    ],
    flags: [
      '0',
      '0',
      'H',
      'C'
    ],
    addr: '0xf8',
    operand1: 'HL',
    operand2: 'SP+r8'
  },

  // Length: 3
  0x1: {
    mnemonic: 'LD',
    length: 3,
    cycles: [
      12
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x1',
    operand1: 'BC',
    operand2: 'd16'
  },
  0x8: {
    mnemonic: 'LD',
    length: 3,
    cycles: [
      20
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x8',
    operand1: '(a16)',
    operand2: 'SP'
  },
  0x11: {
    mnemonic: 'LD',
    length: 3,
    cycles: [
      12
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x11',
    operand1: 'DE',
    operand2: 'd16'
  },
  0x21: {
    mnemonic: 'LD',
    length: 3,
    cycles: [
      12
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x21',
    operand1: 'HL',
    operand2: 'd16'
  },
  0x31: {
    mnemonic: 'LD',
    length: 3,
    cycles: [
      12
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x31',
    operand1: 'SP',
    operand2: 'd16'
  },
  0xea: {
    mnemonic: 'LD',
    length: 3,
    cycles: [
      16
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xea',
    operand1: '(a16)',
    operand2: 'A'
  },
  0xfa: {
    mnemonic: 'LD',
    length: 3,
    cycles: [
      16
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xfa',
    operand1: 'A',
    operand2: '(a16)'
  },


  /*
  0x0: {
  mnemonic: 'NOP',
  length: 1,
  cycles: [4],
  flags: [
  '-',
  '-',
  '-',
  '-'
],
addr: 0x0
},
0x3: {
mnemonic: 'INC',
length: 1,
cycles: [
8
],
flags: [
'-',
'-',
'-',
'-'
],
addr: '0x3',
operand1: 'BC'
},
0x4: {
mnemonic: 'INC',
length: 1,
cycles: [
4
],
flags: [
'Z',
'0',
'H',
'-'
],
addr: '0x4',
operand1: 'B'
},
0x5: {
mnemonic: 'DEC',
length: 1,
cycles: [
4
],
flags: [
'Z',
'1',
'H',
'-'
],
addr: '0x5',
operand1: 'B'
},
0x7: {
mnemonic: 'RLCA',
length: 1,
cycles: [
4
],
flags: [
'0',
'0',
'0',
'C'
],
addr: '0x7'
},
0xb: {
mnemonic: 'DEC',
length: 1,
cycles: [
8
],
flags: [
'-',
'-',
'-',
'-'
],
addr: '0xb',
operand1: 'BC'
},
0xc: {
mnemonic: 'INC',
length: 1,
cycles: [
4
],
flags: [
'Z',
'0',
'H',
'-'
],
addr: '0xc',
operand1: 'C'
},
0xd: {
mnemonic: 'DEC',
length: 1,
cycles: [
4
],
flags: [
'Z',
'1',
'H',
'-'
],
addr: '0xd',
operand1: 'C'
},
0xf: {
mnemonic: 'RRCA',
length: 1,
cycles: [
4
],
flags: [
'0',
'0',
'0',
'C'
],
addr: '0xf'
},
0x10: {
mnemonic: 'STOP',
length: 2,
cycles: [
4
],
flags: [
'-',
'-',
'-',
'-'
],
addr: '0x10',
operand1: '0'
},
0x13: {
mnemonic: 'INC',
length: 1,
cycles: [
8
],
flags: [
'-',
'-',
'-',
'-'
],
addr: '0x13',
operand1: 'DE'
},
0x14: {
mnemonic: 'INC',
length: 1,
cycles: [
4
],
flags: [
'Z',
'0',
'H',
'-'
],
addr: '0x14',
operand1: 'D'
},
0x15: {
mnemonic: 'DEC',
length: 1,
cycles: [
4
],
flags: [
'Z',
'1',
'H',
'-'
],
addr: '0x15',
operand1: 'D'
},
0x17: {
mnemonic: 'RLA',
length: 1,
cycles: [
4
],
flags: [
'0',
'0',
'0',
'C'
],
addr: '0x17'
},
0x18: {
mnemonic: 'JR',
length: 2,
cycles: [
12
],
flags: [
'-',
'-',
'-',
'-'
],
addr: '0x18',
operand1: 'r8'
},
0x1b: {
mnemonic: 'DEC',
length: 1,
cycles: [
8
],
flags: [
'-',
'-',
'-',
'-'
],
addr: '0x1b',
operand1: 'DE'
},
0x1c: {
mnemonic: 'INC',
length: 1,
cycles: [
4
],
flags: [
'Z',
'0',
'H',
'-'
],
addr: '0x1c',
operand1: 'E'
},
0x1d: {
mnemonic: 'DEC',
length: 1,
cycles: [
4
],
flags: [
'Z',
'1',
'H',
'-'
],
addr: '0x1d',
operand1: 'E'
},
0x1f: {
mnemonic: 'RRA',
length: 1,
cycles: [
4
],
flags: [
'0',
'0',
'0',
'C'
],
addr: '0x1f'
},
0x20: {
mnemonic: 'JR',
length: 2,
cycles: [
12,
8
],
flags: [
'-',
'-',
'-',
'-'
],
addr: '0x20',
operand1: 'NZ',
operand2: 'r8'
},
0x23: {
mnemonic: 'INC',
length: 1,
cycles: [
8
],
flags: [
'-',
'-',
'-',
'-'
],
addr: '0x23',
operand1: 'HL'
},
0x24: {
mnemonic: 'INC',
length: 1,
cycles: [
4
],
flags: [
'Z',
'0',
'H',
'-'
],
addr: '0x24',
operand1: 'H'
},
0x25: {
mnemonic: 'DEC',
length: 1,
cycles: [
4
],
flags: [
'Z',
'1',
'H',
'-'
],
addr: '0x25',
operand1: 'H'
},
0x27: {
mnemonic: 'DAA',
length: 1,
cycles: [
4
],
flags: [
'Z',
'-',
'0',
'C'
],
addr: '0x27'
},
0x28: {
mnemonic: 'JR',
length: 2,
cycles: [
12,
8
],
flags: [
'-',
'-',
'-',
'-'
],
addr: '0x28',
operand1: 'Z',
operand2: 'r8'
},
0x2b: {
mnemonic: 'DEC',
length: 1,
cycles: [
8
],
flags: [
'-',
'-',
'-',
'-'
],
addr: '0x2b',
operand1: 'HL'
},
0x2c: {
mnemonic: 'INC',
length: 1,
cycles: [
4
],
flags: [
'Z',
'0',
'H',
'-'
],
addr: '0x2c',
operand1: 'L'
},
0x2d: {
mnemonic: 'DEC',
length: 1,
cycles: [
4
],
flags: [
'Z',
'1',
'H',
'-'
],
addr: '0x2d',
operand1: 'L'
},
0x2f: {
mnemonic: 'CPL',
length: 1,
cycles: [
4
],
flags: [
'-',
'1',
'1',
'-'
],
addr: '0x2f'
},
0x30: {
mnemonic: 'JR',
length: 2,
cycles: [
12,
8
],
flags: [
'-',
'-',
'-',
'-'
],
addr: '0x30',
operand1: 'NC',
operand2: 'r8'
},
0x33: {
mnemonic: 'INC',
length: 1,
cycles: [
8
],
flags: [
'-',
'-',
'-',
'-'
],
addr: '0x33',
operand1: 'SP'
},
0x34: {
mnemonic: 'INC',
length: 1,
cycles: [
12
],
flags: [
'Z',
'0',
'H',
'-'
],
addr: '0x34',
operand1: '(HL)'
},
0x35: {
mnemonic: 'DEC',
length: 1,
cycles: [
12
],
flags: [
'Z',
'1',
'H',
'-'
],
addr: '0x35',
operand1: '(HL)'
},
0x37: {
mnemonic: 'SCF',
length: 1,
cycles: [
4
],
flags: [
'-',
'0',
'0',
'1'
],
addr: '0x37'
},
0x38: {
mnemonic: 'JR',
length: 2,
cycles: [
12,
8
],
flags: [
'-',
'-',
'-',
'-'
],
addr: '0x38',
operand1: 'C',
operand2: 'r8'
},
0x3b: {
mnemonic: 'DEC',
length: 1,
cycles: [
8
],
flags: [
'-',
'-',
'-',
'-'
],
addr: '0x3b',
operand1: 'SP'
},
0x3c: {
mnemonic: 'INC',
length: 1,
cycles: [
4
],
flags: [
'Z',
'0',
'H',
'-'
],
addr: '0x3c',
operand1: 'A'
},
0x3d: {
mnemonic: 'DEC',
length: 1,
cycles: [
4
],
flags: [
'Z',
'1',
'H',
'-'
],
addr: '0x3d',
operand1: 'A'
},
0x3f: {
mnemonic: 'CCF',
length: 1,
cycles: [
4
],
flags: [
'-',
'0',
'0',
'C'
],
addr: '0x3f'
},

0x88: {
mnemonic: 'ADC',
length: 1,
cycles: [
4
],
flags: [
'Z',
'0',
'H',
'C'
],
addr: '0x88',
operand1: 'A',
operand2: 'B'
},
0x89: {
mnemonic: 'ADC',
length: 1,
cycles: [
4
],
flags: [
'Z',
'0',
'H',
'C'
],
addr: '0x89',
operand1: 'A',
operand2: 'C'
},
0x8a: {
mnemonic: 'ADC',
length: 1,
cycles: [
4
],
flags: [
'Z',
'0',
'H',
'C'
],
addr: '0x8a',
operand1: 'A',
operand2: 'D'
},
0x8b: {
mnemonic: 'ADC',
length: 1,
cycles: [
4
],
flags: [
'Z',
'0',
'H',
'C'
],
addr: '0x8b',
operand1: 'A',
operand2: 'E'
},
0x8c: {
mnemonic: 'ADC',
length: 1,
cycles: [
4
],
flags: [
'Z',
'0',
'H',
'C'
],
addr: '0x8c',
operand1: 'A',
operand2: 'H'
},
0x8d: {
mnemonic: 'ADC',
length: 1,
cycles: [
4
],
flags: [
'Z',
'0',
'H',
'C'
],
addr: '0x8d',
operand1: 'A',
operand2: 'L'
},
0x8e: {
mnemonic: 'ADC',
length: 1,
cycles: [
8
],
flags: [
'Z',
'0',
'H',
'C'
],
addr: '0x8e',
operand1: 'A',
operand2: '(HL)'
},
0x8f: {
mnemonic: 'ADC',
length: 1,
cycles: [
4
],
flags: [
'Z',
'0',
'H',
'C'
],
addr: '0x8f',
operand1: 'A',
operand2: 'A'
},

0x98: {
mnemonic: 'SBC',
length: 1,
cycles: [
4
],
flags: [
'Z',
'1',
'H',
'C'
],
addr: '0x98',
operand1: 'A',
operand2: 'B'
},
0x99: {
mnemonic: 'SBC',
length: 1,
cycles: [
4
],
flags: [
'Z',
'1',
'H',
'C'
],
addr: '0x99',
operand1: 'A',
operand2: 'C'
},
0x9a: {
mnemonic: 'SBC',
length: 1,
cycles: [
4
],
flags: [
'Z',
'1',
'H',
'C'
],
addr: '0x9a',
operand1: 'A',
operand2: 'D'
},
0x9b: {
mnemonic: 'SBC',
length: 1,
cycles: [
4
],
flags: [
'Z',
'1',
'H',
'C'
],
addr: '0x9b',
operand1: 'A',
operand2: 'E'
},
0x9c: {
mnemonic: 'SBC',
length: 1,
cycles: [
4
],
flags: [
'Z',
'1',
'H',
'C'
],
addr: '0x9c',
operand1: 'A',
operand2: 'H'
},
0x9d: {
mnemonic: 'SBC',
length: 1,
cycles: [
4
],
flags: [
'Z',
'1',
'H',
'C'
],
addr: '0x9d',
operand1: 'A',
operand2: 'L'
},
0x9e: {
mnemonic: 'SBC',
length: 1,
cycles: [
8
],
flags: [
'Z',
'1',
'H',
'C'
],
addr: '0x9e',
operand1: 'A',
operand2: '(HL)'
},
0x9f: {
mnemonic: 'SBC',
length: 1,
cycles: [
4
],
flags: [
'Z',
'1',
'H',
'C'
],
addr: '0x9f',
operand1: 'A',
operand2: 'A'
},
0xa0: {
mnemonic: 'AND',
length: 1,
cycles: [
4
],
flags: [
'Z',
'0',
'1',
'0'
],
addr: '0xa0',
operand1: 'B'
},
0xa1: {
mnemonic: 'AND',
length: 1,
cycles: [
4
],
flags: [
'Z',
'0',
'1',
'0'
],
addr: '0xa1',
operand1: 'C'
},
0xa2: {
mnemonic: 'AND',
length: 1,
cycles: [
4
],
flags: [
'Z',
'0',
'1',
'0'
],
addr: '0xa2',
operand1: 'D'
},
0xa3: {
mnemonic: 'AND',
length: 1,
cycles: [
4
],
flags: [
'Z',
'0',
'1',
'0'
],
addr: '0xa3',
operand1: 'E'
},
0xa4: {
mnemonic: 'AND',
length: 1,
cycles: [
4
],
flags: [
'Z',
'0',
'1',
'0'
],
addr: '0xa4',
operand1: 'H'
},
0xa5: {
mnemonic: 'AND',
length: 1,
cycles: [
4
],
flags: [
'Z',
'0',
'1',
'0'
],
addr: '0xa5',
operand1: 'L'
},
0xa6: {
mnemonic: 'AND',
length: 1,
cycles: [
8
],
flags: [
'Z',
'0',
'1',
'0'
],
addr: '0xa6',
operand1: '(HL)'
},
0xa7: {
mnemonic: 'AND',
length: 1,
cycles: [
4
],
flags: [
'Z',
'0',
'1',
'0'
],
addr: '0xa7',
operand1: 'A'
},
0xa8: {
mnemonic: 'XOR',
length: 1,
cycles: [
4
],
flags: [
'Z',
'0',
'0',
'0'
],
addr: '0xa8',
operand1: 'B'
},
0xa9: {
mnemonic: 'XOR',
length: 1,
cycles: [
4
],
flags: [
'Z',
'0',
'0',
'0'
],
addr: '0xa9',
operand1: 'C'
},
0xaa: {
mnemonic: 'XOR',
length: 1,
cycles: [
4
],
flags: [
'Z',
'0',
'0',
'0'
],
addr: '0xaa',
operand1: 'D'
},
0xab: {
mnemonic: 'XOR',
length: 1,
cycles: [
4
],
flags: [
'Z',
'0',
'0',
'0'
],
addr: '0xab',
operand1: 'E'
},
0xac: {
mnemonic: 'XOR',
length: 1,
cycles: [
4
],
flags: [
'Z',
'0',
'0',
'0'
],
addr: '0xac',
operand1: 'H'
},
0xad: {
mnemonic: 'XOR',
length: 1,
cycles: [
4
],
flags: [
'Z',
'0',
'0',
'0'
],
addr: '0xad',
operand1: 'L'
},
0xae: {
mnemonic: 'XOR',
length: 1,
cycles: [
8
],
flags: [
'Z',
'0',
'0',
'0'
],
addr: '0xae',
operand1: '(HL)'
},
0xaf: {
mnemonic: 'XOR',
length: 1,
cycles: [
4
],
flags: [
'Z',
'0',
'0',
'0'
],
addr: '0xaf',
operand1: 'A'
},
0xb0: {
mnemonic: 'OR',
length: 1,
cycles: [
4
],
flags: [
'Z',
'0',
'0',
'0'
],
addr: '0xb0',
operand1: 'B'
},
0xb1: {
mnemonic: 'OR',
length: 1,
cycles: [
4
],
flags: [
'Z',
'0',
'0',
'0'
],
addr: '0xb1',
operand1: 'C'
},
0xb2: {
mnemonic: 'OR',
length: 1,
cycles: [
4
],
flags: [
'Z',
'0',
'0',
'0'
],
addr: '0xb2',
operand1: 'D'
},
0xb3: {
mnemonic: 'OR',
length: 1,
cycles: [
4
],
flags: [
'Z',
'0',
'0',
'0'
],
addr: '0xb3',
operand1: 'E'
},
0xb4: {
mnemonic: 'OR',
length: 1,
cycles: [
4
],
flags: [
'Z',
'0',
'0',
'0'
],
addr: '0xb4',
operand1: 'H'
},
0xb5: {
mnemonic: 'OR',
length: 1,
cycles: [
4
],
flags: [
'Z',
'0',
'0',
'0'
],
addr: '0xb5',
operand1: 'L'
},
0xb6: {
mnemonic: 'OR',
length: 1,
cycles: [
8
],
flags: [
'Z',
'0',
'0',
'0'
],
addr: '0xb6',
operand1: '(HL)'
},
0xb7: {
mnemonic: 'OR',
length: 1,
cycles: [
4
],
flags: [
'Z',
'0',
'0',
'0'
],
addr: '0xb7',
operand1: 'A'
},
0xb8: {
mnemonic: 'CP',
length: 1,
cycles: [
4
],
flags: [
'Z',
'1',
'H',
'C'
],
addr: '0xb8',
operand1: 'B'
},
0xb9: {
mnemonic: 'CP',
length: 1,
cycles: [
4
],
flags: [
'Z',
'1',
'H',
'C'
],
addr: '0xb9',
operand1: 'C'
},
0xba: {
mnemonic: 'CP',
length: 1,
cycles: [
4
],
flags: [
'Z',
'1',
'H',
'C'
],
addr: '0xba',
operand1: 'D'
},
0xbb: {
mnemonic: 'CP',
length: 1,
cycles: [
4
],
flags: [
'Z',
'1',
'H',
'C'
],
addr: '0xbb',
operand1: 'E'
},
0xbc: {
mnemonic: 'CP',
length: 1,
cycles: [
4
],
flags: [
'Z',
'1',
'H',
'C'
],
addr: '0xbc',
operand1: 'H'
},
0xbd: {
mnemonic: 'CP',
length: 1,
cycles: [
4
],
flags: [
'Z',
'1',
'H',
'C'
],
addr: '0xbd',
operand1: 'L'
},
0xbe: {
mnemonic: 'CP',
length: 1,
cycles: [
8
],
flags: [
'Z',
'1',
'H',
'C'
],
addr: '0xbe',
operand1: '(HL)'
},
0xbf: {
mnemonic: 'CP',
length: 1,
cycles: [
4
],
flags: [
'Z',
'1',
'H',
'C'
],
addr: '0xbf',
operand1: 'A'
},
0xc0: {
mnemonic: 'RET',
length: 1,
cycles: [
20,
8
],
flags: [
'-',
'-',
'-',
'-'
],
addr: '0xc0',
operand1: 'NZ'
},
0xc1: {
mnemonic: 'POP',
length: 1,
cycles: [
12
],
flags: [
'-',
'-',
'-',
'-'
],
addr: '0xc1',
operand1: 'BC'
},
0xc2: {
mnemonic: 'JP',
length: 3,
cycles: [
16,
12
],
flags: [
'-',
'-',
'-',
'-'
],
addr: '0xc2',
operand1: 'NZ',
operand2: 'a16'
},
0xc3: {
mnemonic: 'JP',
length: 3,
cycles: [
16
],
flags: [
'-',
'-',
'-',
'-'
],
addr: '0xc3',
operand1: 'a16'
},
0xc4: {
mnemonic: 'CALL',
length: 3,
cycles: [
24,
12
],
flags: [
'-',
'-',
'-',
'-'
],
addr: '0xc4',
operand1: 'NZ',
operand2: 'a16'
},
0xc5: {
mnemonic: 'PUSH',
length: 1,
cycles: [
16
],
flags: [
'-',
'-',
'-',
'-'
],
addr: '0xc5',
operand1: 'BC'
},
0xc7: {
mnemonic: 'RST',
length: 1,
cycles: [
16
],
flags: [
'-',
'-',
'-',
'-'
],
addr: '0xc7',
operand1: '00H'
},
0xc8: {
mnemonic: 'RET',
length: 1,
cycles: [
20,
8
],
flags: [
'-',
'-',
'-',
'-'
],
addr: '0xc8',
operand1: 'Z'
},
0xc9: {
mnemonic: 'RET',
length: 1,
cycles: [
16
],
flags: [
'-',
'-',
'-',
'-'
],
addr: '0xc9'
},
0xca: {
mnemonic: 'JP',
length: 3,
cycles: [
16,
12
],
flags: [
'-',
'-',
'-',
'-'
],
addr: '0xca',
operand1: 'Z',
operand2: 'a16'
},
0xcb: {
mnemonic: 'PREFIX',
length: 1,
cycles: [
4
],
flags: [
'-',
'-',
'-',
'-'
],
addr: '0xcb',
operand1: 'CB'
},
0xcc: {
mnemonic: 'CALL',
length: 3,
cycles: [
24,
12
],
flags: [
'-',
'-',
'-',
'-'
],
addr: '0xcc',
operand1: 'Z',
operand2: 'a16'
},
0xcd: {
mnemonic: 'CALL',
length: 3,
cycles: [
24
],
flags: [
'-',
'-',
'-',
'-'
],
addr: '0xcd',
operand1: 'a16'
},
0xce: {
mnemonic: 'ADC',
length: 2,
cycles: [
8
],
flags: [
'Z',
'0',
'H',
'C'
],
addr: '0xce',
operand1: 'A',
operand2: 'd8'
},
0xcf: {
mnemonic: 'RST',
length: 1,
cycles: [
16
],
flags: [
'-',
'-',
'-',
'-'
],
addr: '0xcf',
operand1: '08H'
},
0xd0: {
mnemonic: 'RET',
length: 1,
cycles: [
20,
8
],
flags: [
'-',
'-',
'-',
'-'
],
addr: '0xd0',
operand1: 'NC'
},
0xd1: {
mnemonic: 'POP',
length: 1,
cycles: [
12
],
flags: [
'-',
'-',
'-',
'-'
],
addr: '0xd1',
operand1: 'DE'
},
0xd2: {
mnemonic: 'JP',
length: 3,
cycles: [
16,
12
],
flags: [
'-',
'-',
'-',
'-'
],
addr: '0xd2',
operand1: 'NC',
operand2: 'a16'
},
0xd4: {
mnemonic: 'CALL',
length: 3,
cycles: [
24,
12
],
flags: [
'-',
'-',
'-',
'-'
],
addr: '0xd4',
operand1: 'NC',
operand2: 'a16'
},
0xd5: {
mnemonic: 'PUSH',
length: 1,
cycles: [
16
],
flags: [
'-',
'-',
'-',
'-'
],
addr: '0xd5',
operand1: 'DE'
},

0xd7: {
mnemonic: 'RST',
length: 1,
cycles: [
16
],
flags: [
'-',
'-',
'-',
'-'
],
addr: '0xd7',
operand1: '10H'
},
0xd8: {
mnemonic: 'RET',
length: 1,
cycles: [
20,
8
],
flags: [
'-',
'-',
'-',
'-'
],
addr: '0xd8',
operand1: 'C'
},
0xd9: {
mnemonic: 'RETI',
length: 1,
cycles: [
16
],
flags: [
'-',
'-',
'-',
'-'
],
addr: '0xd9'
},
0xda: {
mnemonic: 'JP',
length: 3,
cycles: [
16,
12
],
flags: [
'-',
'-',
'-',
'-'
],
addr: '0xda',
operand1: 'C',
operand2: 'a16'
},
0xdc: {
mnemonic: 'CALL',
length: 3,
cycles: [
24,
12
],
flags: [
'-',
'-',
'-',
'-'
],
addr: '0xdc',
operand1: 'C',
operand2: 'a16'
},
0xde: {
mnemonic: 'SBC',
length: 2,
cycles: [
8
],
flags: [
'Z',
'1',
'H',
'C'
],
addr: '0xde',
operand1: 'A',
operand2: 'd8'
},
0xdf: {
mnemonic: 'RST',
length: 1,
cycles: [
16
],
flags: [
'-',
'-',
'-',
'-'
],
addr: '0xdf',
operand1: '18H'
},
0xe1: {
mnemonic: 'POP',
length: 1,
cycles: [
12
],
flags: [
'-',
'-',
'-',
'-'
],
addr: '0xe1',
operand1: 'HL'
},


0xe5: {
mnemonic: 'PUSH',
length: 1,
cycles: [
16
],
flags: [
'-',
'-',
'-',
'-'
],
addr: '0xe5',
operand1: 'HL'
},
0xe6: {
mnemonic: 'AND',
length: 2,
cycles: [
8
],
flags: [
'Z',
'0',
'1',
'0'
],
addr: '0xe6',
operand1: 'd8'
},
0xe7: {
mnemonic: 'RST',
length: 1,
cycles: [
16
],
flags: [
'-',
'-',
'-',
'-'
],
addr: '0xe7',
operand1: '20H'
},
0xe9: {
mnemonic: 'JP',
length: 1,
cycles: [
4
],
flags: [
'-',
'-',
'-',
'-'
],
addr: '0xe9',
operand1: '(HL)'
},
0xee: {
mnemonic: 'XOR',
length: 2,
cycles: [
8
],
flags: [
'Z',
'0',
'0',
'0'
],
addr: '0xee',
operand1: 'd8'
},
0xef: {
mnemonic: 'RST',
length: 1,
cycles: [
16
],
flags: [
'-',
'-',
'-',
'-'
],
addr: '0xef',
operand1: '28H'
},
0xf1: {
mnemonic: 'POP',
length: 1,
cycles: [
12
],
flags: [
'Z',
'N',
'H',
'C'
],
addr: '0xf1',
operand1: 'AF'
},
0xf3: {
mnemonic: 'DI',
length: 1,
cycles: [
4
],
flags: [
'-',
'-',
'-',
'-'
],
addr: '0xf3'
},
0xf5: {
mnemonic: 'PUSH',
length: 1,
cycles: [
16
],
flags: [
'-',
'-',
'-',
'-'
],
addr: '0xf5',
operand1: 'AF'
},
0xf6: {
mnemonic: 'OR',
length: 2,
cycles: [
8
],
flags: [
'Z',
'0',
'0',
'0'
],
addr: '0xf6',
operand1: 'd8'
},
0xf7: {
mnemonic: 'RST',
length: 1,
cycles: [
16
],
flags: [
'-',
'-',
'-',
'-'
],
addr: '0xf7',
operand1: '30H'
},
0xfb: {
mnemonic: 'EI',
length: 1,
cycles: [
4
],
flags: [
'-',
'-',
'-',
'-'
],
addr: '0xfb'
},
0xfe: {
mnemonic: 'CP',
length: 2,
cycles: [
8
],
flags: [
'Z',
'1',
'H',
'C'
],
addr: '0xfe',
operand1: 'd8'
},
0xff: {
mnemonic: 'RST',
length: 1,
cycles: [
16
],
flags: [
'-',
'-',
'-',
'-'
],
addr: '0xff',
operand1: '38H'
}
*/
};
/* harmony export (immutable) */ __webpack_exports__["OPCODE"] = OPCODE;

/* harmony default export */ __webpack_exports__["default"] = (OPCODE);


const OPCODE_CB = {
  0x0: {
    mnemonic: 'RLC',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '0',
      'C'
    ],
    addr: '0x0',
    operand1: 'B'
  },
  0x1: {
    mnemonic: 'RLC',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '0',
      'C'
    ],
    addr: '0x1',
    operand1: 'C'
  },
  0x2: {
    mnemonic: 'RLC',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '0',
      'C'
    ],
    addr: '0x2',
    operand1: 'D'
  },
  0x3: {
    mnemonic: 'RLC',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '0',
      'C'
    ],
    addr: '0x3',
    operand1: 'E'
  },
  0x4: {
    mnemonic: 'RLC',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '0',
      'C'
    ],
    addr: '0x4',
    operand1: 'H'
  },
  0x5: {
    mnemonic: 'RLC',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '0',
      'C'
    ],
    addr: '0x5',
    operand1: 'L'
  },
  0x6: {
    mnemonic: 'RLC',
    length: 2,
    cycles: [
      16
    ],
    flags: [
      'Z',
      '0',
      '0',
      'C'
    ],
    addr: '0x6',
    operand1: '(HL)'
  },
  0x7: {
    mnemonic: 'RLC',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '0',
      'C'
    ],
    addr: '0x7',
    operand1: 'A'
  },
  0x8: {
    mnemonic: 'RRC',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '0',
      'C'
    ],
    addr: '0x8',
    operand1: 'B'
  },
  0x9: {
    mnemonic: 'RRC',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '0',
      'C'
    ],
    addr: '0x9',
    operand1: 'C'
  },
  0xa: {
    mnemonic: 'RRC',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '0',
      'C'
    ],
    addr: '0xa',
    operand1: 'D'
  },
  0xb: {
    mnemonic: 'RRC',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '0',
      'C'
    ],
    addr: '0xb',
    operand1: 'E'
  },
  0xc: {
    mnemonic: 'RRC',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '0',
      'C'
    ],
    addr: '0xc',
    operand1: 'H'
  },
  0xd: {
    mnemonic: 'RRC',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '0',
      'C'
    ],
    addr: '0xd',
    operand1: 'L'
  },
  0xe: {
    mnemonic: 'RRC',
    length: 2,
    cycles: [
      16
    ],
    flags: [
      'Z',
      '0',
      '0',
      'C'
    ],
    addr: '0xe',
    operand1: '(HL)'
  },
  0xf: {
    mnemonic: 'RRC',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '0',
      'C'
    ],
    addr: '0xf',
    operand1: 'A'
  },
  0x10: {
    mnemonic: 'RL',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '0',
      'C'
    ],
    addr: '0x10',
    operand1: 'B'
  },
  0x11: {
    mnemonic: 'RL',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '0',
      'C'
    ],
    addr: '0x11',
    operand1: 'C'
  },
  0x12: {
    mnemonic: 'RL',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '0',
      'C'
    ],
    addr: '0x12',
    operand1: 'D'
  },
  0x13: {
    mnemonic: 'RL',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '0',
      'C'
    ],
    addr: '0x13',
    operand1: 'E'
  },
  0x14: {
    mnemonic: 'RL',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '0',
      'C'
    ],
    addr: '0x14',
    operand1: 'H'
  },
  0x15: {
    mnemonic: 'RL',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '0',
      'C'
    ],
    addr: '0x15',
    operand1: 'L'
  },
  0x16: {
    mnemonic: 'RL',
    length: 2,
    cycles: [
      16
    ],
    flags: [
      'Z',
      '0',
      '0',
      'C'
    ],
    addr: '0x16',
    operand1: '(HL)'
  },
  0x17: {
    mnemonic: 'RL',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '0',
      'C'
    ],
    addr: '0x17',
    operand1: 'A'
  },
  0x18: {
    mnemonic: 'RR',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '0',
      'C'
    ],
    addr: '0x18',
    operand1: 'B'
  },
  0x19: {
    mnemonic: 'RR',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '0',
      'C'
    ],
    addr: '0x19',
    operand1: 'C'
  },
  0x1a: {
    mnemonic: 'RR',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '0',
      'C'
    ],
    addr: '0x1a',
    operand1: 'D'
  },
  0x1b: {
    mnemonic: 'RR',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '0',
      'C'
    ],
    addr: '0x1b',
    operand1: 'E'
  },
  0x1c: {
    mnemonic: 'RR',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '0',
      'C'
    ],
    addr: '0x1c',
    operand1: 'H'
  },
  0x1d: {
    mnemonic: 'RR',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '0',
      'C'
    ],
    addr: '0x1d',
    operand1: 'L'
  },
  0x1e: {
    mnemonic: 'RR',
    length: 2,
    cycles: [
      16
    ],
    flags: [
      'Z',
      '0',
      '0',
      'C'
    ],
    addr: '0x1e',
    operand1: '(HL)'
  },
  0x1f: {
    mnemonic: 'RR',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '0',
      'C'
    ],
    addr: '0x1f',
    operand1: 'A'
  },
  0x20: {
    mnemonic: 'SLA',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '0',
      'C'
    ],
    addr: '0x20',
    operand1: 'B'
  },
  0x21: {
    mnemonic: 'SLA',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '0',
      'C'
    ],
    addr: '0x21',
    operand1: 'C'
  },
  0x22: {
    mnemonic: 'SLA',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '0',
      'C'
    ],
    addr: '0x22',
    operand1: 'D'
  },
  0x23: {
    mnemonic: 'SLA',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '0',
      'C'
    ],
    addr: '0x23',
    operand1: 'E'
  },
  0x24: {
    mnemonic: 'SLA',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '0',
      'C'
    ],
    addr: '0x24',
    operand1: 'H'
  },
  0x25: {
    mnemonic: 'SLA',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '0',
      'C'
    ],
    addr: '0x25',
    operand1: 'L'
  },
  0x26: {
    mnemonic: 'SLA',
    length: 2,
    cycles: [
      16
    ],
    flags: [
      'Z',
      '0',
      '0',
      'C'
    ],
    addr: '0x26',
    operand1: '(HL)'
  },
  0x27: {
    mnemonic: 'SLA',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '0',
      'C'
    ],
    addr: '0x27',
    operand1: 'A'
  },
  0x28: {
    mnemonic: 'SRA',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '0',
      '0'
    ],
    addr: '0x28',
    operand1: 'B'
  },
  0x29: {
    mnemonic: 'SRA',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '0',
      '0'
    ],
    addr: '0x29',
    operand1: 'C'
  },
  0x2a: {
    mnemonic: 'SRA',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '0',
      '0'
    ],
    addr: '0x2a',
    operand1: 'D'
  },
  0x2b: {
    mnemonic: 'SRA',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '0',
      '0'
    ],
    addr: '0x2b',
    operand1: 'E'
  },
  0x2c: {
    mnemonic: 'SRA',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '0',
      '0'
    ],
    addr: '0x2c',
    operand1: 'H'
  },
  0x2d: {
    mnemonic: 'SRA',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '0',
      '0'
    ],
    addr: '0x2d',
    operand1: 'L'
  },
  0x2e: {
    mnemonic: 'SRA',
    length: 2,
    cycles: [
      16
    ],
    flags: [
      'Z',
      '0',
      '0',
      '0'
    ],
    addr: '0x2e',
    operand1: '(HL)'
  },
  0x2f: {
    mnemonic: 'SRA',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '0',
      '0'
    ],
    addr: '0x2f',
    operand1: 'A'
  },
  0x30: {
    mnemonic: 'SWAP',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '0',
      '0'
    ],
    addr: '0x30',
    operand1: 'B'
  },
  0x31: {
    mnemonic: 'SWAP',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '0',
      '0'
    ],
    addr: '0x31',
    operand1: 'C'
  },
  0x32: {
    mnemonic: 'SWAP',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '0',
      '0'
    ],
    addr: '0x32',
    operand1: 'D'
  },
  0x33: {
    mnemonic: 'SWAP',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '0',
      '0'
    ],
    addr: '0x33',
    operand1: 'E'
  },
  0x34: {
    mnemonic: 'SWAP',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '0',
      '0'
    ],
    addr: '0x34',
    operand1: 'H'
  },
  0x35: {
    mnemonic: 'SWAP',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '0',
      '0'
    ],
    addr: '0x35',
    operand1: 'L'
  },
  0x36: {
    mnemonic: 'SWAP',
    length: 2,
    cycles: [
      16
    ],
    flags: [
      'Z',
      '0',
      '0',
      '0'
    ],
    addr: '0x36',
    operand1: '(HL)'
  },
  0x37: {
    mnemonic: 'SWAP',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '0',
      '0'
    ],
    addr: '0x37',
    operand1: 'A'
  },
  0x38: {
    mnemonic: 'SRL',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '0',
      'C'
    ],
    addr: '0x38',
    operand1: 'B'
  },
  0x39: {
    mnemonic: 'SRL',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '0',
      'C'
    ],
    addr: '0x39',
    operand1: 'C'
  },
  0x3a: {
    mnemonic: 'SRL',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '0',
      'C'
    ],
    addr: '0x3a',
    operand1: 'D'
  },
  0x3b: {
    mnemonic: 'SRL',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '0',
      'C'
    ],
    addr: '0x3b',
    operand1: 'E'
  },
  0x3c: {
    mnemonic: 'SRL',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '0',
      'C'
    ],
    addr: '0x3c',
    operand1: 'H'
  },
  0x3d: {
    mnemonic: 'SRL',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '0',
      'C'
    ],
    addr: '0x3d',
    operand1: 'L'
  },
  0x3e: {
    mnemonic: 'SRL',
    length: 2,
    cycles: [
      16
    ],
    flags: [
      'Z',
      '0',
      '0',
      'C'
    ],
    addr: '0x3e',
    operand1: '(HL)'
  },
  0x3f: {
    mnemonic: 'SRL',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '0',
      'C'
    ],
    addr: '0x3f',
    operand1: 'A'
  },
  0x40: {
    mnemonic: 'BIT',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '1',
      '-'
    ],
    addr: '0x40',
    operand1: '0',
    operand2: 'B'
  },
  0x41: {
    mnemonic: 'BIT',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '1',
      '-'
    ],
    addr: '0x41',
    operand1: '0',
    operand2: 'C'
  },
  0x42: {
    mnemonic: 'BIT',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '1',
      '-'
    ],
    addr: '0x42',
    operand1: '0',
    operand2: 'D'
  },
  0x43: {
    mnemonic: 'BIT',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '1',
      '-'
    ],
    addr: '0x43',
    operand1: '0',
    operand2: 'E'
  },
  0x44: {
    mnemonic: 'BIT',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '1',
      '-'
    ],
    addr: '0x44',
    operand1: '0',
    operand2: 'H'
  },
  0x45: {
    mnemonic: 'BIT',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '1',
      '-'
    ],
    addr: '0x45',
    operand1: '0',
    operand2: 'L'
  },
  0x46: {
    mnemonic: 'BIT',
    length: 2,
    cycles: [
      16
    ],
    flags: [
      'Z',
      '0',
      '1',
      '-'
    ],
    addr: '0x46',
    operand1: '0',
    operand2: '(HL)'
  },
  0x47: {
    mnemonic: 'BIT',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '1',
      '-'
    ],
    addr: '0x47',
    operand1: '0',
    operand2: 'A'
  },
  0x48: {
    mnemonic: 'BIT',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '1',
      '-'
    ],
    addr: '0x48',
    operand1: '1',
    operand2: 'B'
  },
  0x49: {
    mnemonic: 'BIT',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '1',
      '-'
    ],
    addr: '0x49',
    operand1: '1',
    operand2: 'C'
  },
  0x4a: {
    mnemonic: 'BIT',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '1',
      '-'
    ],
    addr: '0x4a',
    operand1: '1',
    operand2: 'D'
  },
  0x4b: {
    mnemonic: 'BIT',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '1',
      '-'
    ],
    addr: '0x4b',
    operand1: '1',
    operand2: 'E'
  },
  0x4c: {
    mnemonic: 'BIT',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '1',
      '-'
    ],
    addr: '0x4c',
    operand1: '1',
    operand2: 'H'
  },
  0x4d: {
    mnemonic: 'BIT',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '1',
      '-'
    ],
    addr: '0x4d',
    operand1: '1',
    operand2: 'L'
  },
  0x4e: {
    mnemonic: 'BIT',
    length: 2,
    cycles: [
      16
    ],
    flags: [
      'Z',
      '0',
      '1',
      '-'
    ],
    addr: '0x4e',
    operand1: '1',
    operand2: '(HL)'
  },
  0x4f: {
    mnemonic: 'BIT',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '1',
      '-'
    ],
    addr: '0x4f',
    operand1: '1',
    operand2: 'A'
  },
  0x50: {
    mnemonic: 'BIT',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '1',
      '-'
    ],
    addr: '0x50',
    operand1: '2',
    operand2: 'B'
  },
  0x51: {
    mnemonic: 'BIT',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '1',
      '-'
    ],
    addr: '0x51',
    operand1: '2',
    operand2: 'C'
  },
  0x52: {
    mnemonic: 'BIT',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '1',
      '-'
    ],
    addr: '0x52',
    operand1: '2',
    operand2: 'D'
  },
  0x53: {
    mnemonic: 'BIT',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '1',
      '-'
    ],
    addr: '0x53',
    operand1: '2',
    operand2: 'E'
  },
  0x54: {
    mnemonic: 'BIT',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '1',
      '-'
    ],
    addr: '0x54',
    operand1: '2',
    operand2: 'H'
  },
  0x55: {
    mnemonic: 'BIT',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '1',
      '-'
    ],
    addr: '0x55',
    operand1: '2',
    operand2: 'L'
  },
  0x56: {
    mnemonic: 'BIT',
    length: 2,
    cycles: [
      16
    ],
    flags: [
      'Z',
      '0',
      '1',
      '-'
    ],
    addr: '0x56',
    operand1: '2',
    operand2: '(HL)'
  },
  0x57: {
    mnemonic: 'BIT',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '1',
      '-'
    ],
    addr: '0x57',
    operand1: '2',
    operand2: 'A'
  },
  0x58: {
    mnemonic: 'BIT',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '1',
      '-'
    ],
    addr: '0x58',
    operand1: '3',
    operand2: 'B'
  },
  0x59: {
    mnemonic: 'BIT',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '1',
      '-'
    ],
    addr: '0x59',
    operand1: '3',
    operand2: 'C'
  },
  0x5a: {
    mnemonic: 'BIT',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '1',
      '-'
    ],
    addr: '0x5a',
    operand1: '3',
    operand2: 'D'
  },
  0x5b: {
    mnemonic: 'BIT',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '1',
      '-'
    ],
    addr: '0x5b',
    operand1: '3',
    operand2: 'E'
  },
  0x5c: {
    mnemonic: 'BIT',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '1',
      '-'
    ],
    addr: '0x5c',
    operand1: '3',
    operand2: 'H'
  },
  0x5d: {
    mnemonic: 'BIT',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '1',
      '-'
    ],
    addr: '0x5d',
    operand1: '3',
    operand2: 'L'
  },
  0x5e: {
    mnemonic: 'BIT',
    length: 2,
    cycles: [
      16
    ],
    flags: [
      'Z',
      '0',
      '1',
      '-'
    ],
    addr: '0x5e',
    operand1: '3',
    operand2: '(HL)'
  },
  0x5f: {
    mnemonic: 'BIT',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '1',
      '-'
    ],
    addr: '0x5f',
    operand1: '3',
    operand2: 'A'
  },
  0x60: {
    mnemonic: 'BIT',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '1',
      '-'
    ],
    addr: '0x60',
    operand1: '4',
    operand2: 'B'
  },
  0x61: {
    mnemonic: 'BIT',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '1',
      '-'
    ],
    addr: '0x61',
    operand1: '4',
    operand2: 'C'
  },
  0x62: {
    mnemonic: 'BIT',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '1',
      '-'
    ],
    addr: '0x62',
    operand1: '4',
    operand2: 'D'
  },
  0x63: {
    mnemonic: 'BIT',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '1',
      '-'
    ],
    addr: '0x63',
    operand1: '4',
    operand2: 'E'
  },
  0x64: {
    mnemonic: 'BIT',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '1',
      '-'
    ],
    addr: '0x64',
    operand1: '4',
    operand2: 'H'
  },
  0x65: {
    mnemonic: 'BIT',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '1',
      '-'
    ],
    addr: '0x65',
    operand1: '4',
    operand2: 'L'
  },
  0x66: {
    mnemonic: 'BIT',
    length: 2,
    cycles: [
      16
    ],
    flags: [
      'Z',
      '0',
      '1',
      '-'
    ],
    addr: '0x66',
    operand1: '4',
    operand2: '(HL)'
  },
  0x67: {
    mnemonic: 'BIT',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '1',
      '-'
    ],
    addr: '0x67',
    operand1: '4',
    operand2: 'A'
  },
  0x68: {
    mnemonic: 'BIT',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '1',
      '-'
    ],
    addr: '0x68',
    operand1: '5',
    operand2: 'B'
  },
  0x69: {
    mnemonic: 'BIT',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '1',
      '-'
    ],
    addr: '0x69',
    operand1: '5',
    operand2: 'C'
  },
  0x6a: {
    mnemonic: 'BIT',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '1',
      '-'
    ],
    addr: '0x6a',
    operand1: '5',
    operand2: 'D'
  },
  0x6b: {
    mnemonic: 'BIT',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '1',
      '-'
    ],
    addr: '0x6b',
    operand1: '5',
    operand2: 'E'
  },
  0x6c: {
    mnemonic: 'BIT',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '1',
      '-'
    ],
    addr: '0x6c',
    operand1: '5',
    operand2: 'H'
  },
  0x6d: {
    mnemonic: 'BIT',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '1',
      '-'
    ],
    addr: '0x6d',
    operand1: '5',
    operand2: 'L'
  },
  0x6e: {
    mnemonic: 'BIT',
    length: 2,
    cycles: [
      16
    ],
    flags: [
      'Z',
      '0',
      '1',
      '-'
    ],
    addr: '0x6e',
    operand1: '5',
    operand2: '(HL)'
  },
  0x6f: {
    mnemonic: 'BIT',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '1',
      '-'
    ],
    addr: '0x6f',
    operand1: '5',
    operand2: 'A'
  },
  0x70: {
    mnemonic: 'BIT',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '1',
      '-'
    ],
    addr: '0x70',
    operand1: '6',
    operand2: 'B'
  },
  0x71: {
    mnemonic: 'BIT',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '1',
      '-'
    ],
    addr: '0x71',
    operand1: '6',
    operand2: 'C'
  },
  0x72: {
    mnemonic: 'BIT',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '1',
      '-'
    ],
    addr: '0x72',
    operand1: '6',
    operand2: 'D'
  },
  0x73: {
    mnemonic: 'BIT',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '1',
      '-'
    ],
    addr: '0x73',
    operand1: '6',
    operand2: 'E'
  },
  0x74: {
    mnemonic: 'BIT',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '1',
      '-'
    ],
    addr: '0x74',
    operand1: '6',
    operand2: 'H'
  },
  0x75: {
    mnemonic: 'BIT',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '1',
      '-'
    ],
    addr: '0x75',
    operand1: '6',
    operand2: 'L'
  },
  0x76: {
    mnemonic: 'BIT',
    length: 2,
    cycles: [
      16
    ],
    flags: [
      'Z',
      '0',
      '1',
      '-'
    ],
    addr: '0x76',
    operand1: '6',
    operand2: '(HL)'
  },
  0x77: {
    mnemonic: 'BIT',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '1',
      '-'
    ],
    addr: '0x77',
    operand1: '6',
    operand2: 'A'
  },
  0x78: {
    mnemonic: 'BIT',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '1',
      '-'
    ],
    addr: '0x78',
    operand1: '7',
    operand2: 'B'
  },
  0x79: {
    mnemonic: 'BIT',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '1',
      '-'
    ],
    addr: '0x79',
    operand1: '7',
    operand2: 'C'
  },
  0x7a: {
    mnemonic: 'BIT',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '1',
      '-'
    ],
    addr: '0x7a',
    operand1: '7',
    operand2: 'D'
  },
  0x7b: {
    mnemonic: 'BIT',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '1',
      '-'
    ],
    addr: '0x7b',
    operand1: '7',
    operand2: 'E'
  },
  0x7c: {
    mnemonic: 'BIT',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '1',
      '-'
    ],
    addr: '0x7c',
    operand1: '7',
    operand2: 'H'
  },
  0x7d: {
    mnemonic: 'BIT',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '1',
      '-'
    ],
    addr: '0x7d',
    operand1: '7',
    operand2: 'L'
  },
  0x7e: {
    mnemonic: 'BIT',
    length: 2,
    cycles: [
      16
    ],
    flags: [
      'Z',
      '0',
      '1',
      '-'
    ],
    addr: '0x7e',
    operand1: '7',
    operand2: '(HL)'
  },
  0x7f: {
    mnemonic: 'BIT',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      'Z',
      '0',
      '1',
      '-'
    ],
    addr: '0x7f',
    operand1: '7',
    operand2: 'A'
  },
  0x80: {
    mnemonic: 'RES',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x80',
    operand1: '0',
    operand2: 'B'
  },
  0x81: {
    mnemonic: 'RES',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x81',
    operand1: '0',
    operand2: 'C'
  },
  0x82: {
    mnemonic: 'RES',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x82',
    operand1: '0',
    operand2: 'D'
  },
  0x83: {
    mnemonic: 'RES',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x83',
    operand1: '0',
    operand2: 'E'
  },
  0x84: {
    mnemonic: 'RES',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x84',
    operand1: '0',
    operand2: 'H'
  },
  0x85: {
    mnemonic: 'RES',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x85',
    operand1: '0',
    operand2: 'L'
  },
  0x86: {
    mnemonic: 'RES',
    length: 2,
    cycles: [
      16
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x86',
    operand1: '0',
    operand2: '(HL)'
  },
  0x87: {
    mnemonic: 'RES',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x87',
    operand1: '0',
    operand2: 'A'
  },
  0x88: {
    mnemonic: 'RES',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x88',
    operand1: '1',
    operand2: 'B'
  },
  0x89: {
    mnemonic: 'RES',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x89',
    operand1: '1',
    operand2: 'C'
  },
  0x8a: {
    mnemonic: 'RES',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x8a',
    operand1: '1',
    operand2: 'D'
  },
  0x8b: {
    mnemonic: 'RES',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x8b',
    operand1: '1',
    operand2: 'E'
  },
  0x8c: {
    mnemonic: 'RES',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x8c',
    operand1: '1',
    operand2: 'H'
  },
  0x8d: {
    mnemonic: 'RES',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x8d',
    operand1: '1',
    operand2: 'L'
  },
  0x8e: {
    mnemonic: 'RES',
    length: 2,
    cycles: [
      16
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x8e',
    operand1: '1',
    operand2: '(HL)'
  },
  0x8f: {
    mnemonic: 'RES',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x8f',
    operand1: '1',
    operand2: 'A'
  },
  0x90: {
    mnemonic: 'RES',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x90',
    operand1: '2',
    operand2: 'B'
  },
  0x91: {
    mnemonic: 'RES',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x91',
    operand1: '2',
    operand2: 'C'
  },
  0x92: {
    mnemonic: 'RES',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x92',
    operand1: '2',
    operand2: 'D'
  },
  0x93: {
    mnemonic: 'RES',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x93',
    operand1: '2',
    operand2: 'E'
  },
  0x94: {
    mnemonic: 'RES',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x94',
    operand1: '2',
    operand2: 'H'
  },
  0x95: {
    mnemonic: 'RES',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x95',
    operand1: '2',
    operand2: 'L'
  },
  0x96: {
    mnemonic: 'RES',
    length: 2,
    cycles: [
      16
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x96',
    operand1: '2',
    operand2: '(HL)'
  },
  0x97: {
    mnemonic: 'RES',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x97',
    operand1: '2',
    operand2: 'A'
  },
  0x98: {
    mnemonic: 'RES',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x98',
    operand1: '3',
    operand2: 'B'
  },
  0x99: {
    mnemonic: 'RES',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x99',
    operand1: '3',
    operand2: 'C'
  },
  0x9a: {
    mnemonic: 'RES',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x9a',
    operand1: '3',
    operand2: 'D'
  },
  0x9b: {
    mnemonic: 'RES',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x9b',
    operand1: '3',
    operand2: 'E'
  },
  0x9c: {
    mnemonic: 'RES',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x9c',
    operand1: '3',
    operand2: 'H'
  },
  0x9d: {
    mnemonic: 'RES',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x9d',
    operand1: '3',
    operand2: 'L'
  },
  0x9e: {
    mnemonic: 'RES',
    length: 2,
    cycles: [
      16
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x9e',
    operand1: '3',
    operand2: '(HL)'
  },
  0x9f: {
    mnemonic: 'RES',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0x9f',
    operand1: '3',
    operand2: 'A'
  },
  0xa0: {
    mnemonic: 'RES',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xa0',
    operand1: '4',
    operand2: 'B'
  },
  0xa1: {
    mnemonic: 'RES',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xa1',
    operand1: '4',
    operand2: 'C'
  },
  0xa2: {
    mnemonic: 'RES',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xa2',
    operand1: '4',
    operand2: 'D'
  },
  0xa3: {
    mnemonic: 'RES',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xa3',
    operand1: '4',
    operand2: 'E'
  },
  0xa4: {
    mnemonic: 'RES',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xa4',
    operand1: '4',
    operand2: 'H'
  },
  0xa5: {
    mnemonic: 'RES',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xa5',
    operand1: '4',
    operand2: 'L'
  },
  0xa6: {
    mnemonic: 'RES',
    length: 2,
    cycles: [
      16
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xa6',
    operand1: '4',
    operand2: '(HL)'
  },
  0xa7: {
    mnemonic: 'RES',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xa7',
    operand1: '4',
    operand2: 'A'
  },
  0xa8: {
    mnemonic: 'RES',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xa8',
    operand1: '5',
    operand2: 'B'
  },
  0xa9: {
    mnemonic: 'RES',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xa9',
    operand1: '5',
    operand2: 'C'
  },
  0xaa: {
    mnemonic: 'RES',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xaa',
    operand1: '5',
    operand2: 'D'
  },
  0xab: {
    mnemonic: 'RES',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xab',
    operand1: '5',
    operand2: 'E'
  },
  0xac: {
    mnemonic: 'RES',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xac',
    operand1: '5',
    operand2: 'H'
  },
  0xad: {
    mnemonic: 'RES',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xad',
    operand1: '5',
    operand2: 'L'
  },
  0xae: {
    mnemonic: 'RES',
    length: 2,
    cycles: [
      16
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xae',
    operand1: '5',
    operand2: '(HL)'
  },
  0xaf: {
    mnemonic: 'RES',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xaf',
    operand1: '5',
    operand2: 'A'
  },
  0xb0: {
    mnemonic: 'RES',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xb0',
    operand1: '6',
    operand2: 'B'
  },
  0xb1: {
    mnemonic: 'RES',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xb1',
    operand1: '6',
    operand2: 'C'
  },
  0xb2: {
    mnemonic: 'RES',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xb2',
    operand1: '6',
    operand2: 'D'
  },
  0xb3: {
    mnemonic: 'RES',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xb3',
    operand1: '6',
    operand2: 'E'
  },
  0xb4: {
    mnemonic: 'RES',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xb4',
    operand1: '6',
    operand2: 'H'
  },
  0xb5: {
    mnemonic: 'RES',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xb5',
    operand1: '6',
    operand2: 'L'
  },
  0xb6: {
    mnemonic: 'RES',
    length: 2,
    cycles: [
      16
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xb6',
    operand1: '6',
    operand2: '(HL)'
  },
  0xb7: {
    mnemonic: 'RES',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xb7',
    operand1: '6',
    operand2: 'A'
  },
  0xb8: {
    mnemonic: 'RES',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xb8',
    operand1: '7',
    operand2: 'B'
  },
  0xb9: {
    mnemonic: 'RES',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xb9',
    operand1: '7',
    operand2: 'C'
  },
  0xba: {
    mnemonic: 'RES',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xba',
    operand1: '7',
    operand2: 'D'
  },
  0xbb: {
    mnemonic: 'RES',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xbb',
    operand1: '7',
    operand2: 'E'
  },
  0xbc: {
    mnemonic: 'RES',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xbc',
    operand1: '7',
    operand2: 'H'
  },
  0xbd: {
    mnemonic: 'RES',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xbd',
    operand1: '7',
    operand2: 'L'
  },
  0xbe: {
    mnemonic: 'RES',
    length: 2,
    cycles: [
      16
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xbe',
    operand1: '7',
    operand2: '(HL)'
  },
  0xbf: {
    mnemonic: 'RES',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xbf',
    operand1: '7',
    operand2: 'A'
  },
  0xc0: {
    mnemonic: 'SET',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xc0',
    operand1: '0',
    operand2: 'B'
  },
  0xc1: {
    mnemonic: 'SET',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xc1',
    operand1: '0',
    operand2: 'C'
  },
  0xc2: {
    mnemonic: 'SET',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xc2',
    operand1: '0',
    operand2: 'D'
  },
  0xc3: {
    mnemonic: 'SET',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xc3',
    operand1: '0',
    operand2: 'E'
  },
  0xc4: {
    mnemonic: 'SET',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xc4',
    operand1: '0',
    operand2: 'H'
  },
  0xc5: {
    mnemonic: 'SET',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xc5',
    operand1: '0',
    operand2: 'L'
  },
  0xc6: {
    mnemonic: 'SET',
    length: 2,
    cycles: [
      16
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xc6',
    operand1: '0',
    operand2: '(HL)'
  },
  0xc7: {
    mnemonic: 'SET',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xc7',
    operand1: '0',
    operand2: 'A'
  },
  0xc8: {
    mnemonic: 'SET',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xc8',
    operand1: '1',
    operand2: 'B'
  },
  0xc9: {
    mnemonic: 'SET',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xc9',
    operand1: '1',
    operand2: 'C'
  },
  0xca: {
    mnemonic: 'SET',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xca',
    operand1: '1',
    operand2: 'D'
  },
  0xcb: {
    mnemonic: 'SET',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xcb',
    operand1: '1',
    operand2: 'E'
  },
  0xcc: {
    mnemonic: 'SET',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xcc',
    operand1: '1',
    operand2: 'H'
  },
  0xcd: {
    mnemonic: 'SET',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xcd',
    operand1: '1',
    operand2: 'L'
  },
  0xce: {
    mnemonic: 'SET',
    length: 2,
    cycles: [
      16
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xce',
    operand1: '1',
    operand2: '(HL)'
  },
  0xcf: {
    mnemonic: 'SET',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xcf',
    operand1: '1',
    operand2: 'A'
  },
  0xd0: {
    mnemonic: 'SET',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xd0',
    operand1: '2',
    operand2: 'B'
  },
  0xd1: {
    mnemonic: 'SET',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xd1',
    operand1: '2',
    operand2: 'C'
  },
  0xd2: {
    mnemonic: 'SET',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xd2',
    operand1: '2',
    operand2: 'D'
  },
  0xd3: {
    mnemonic: 'SET',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xd3',
    operand1: '2',
    operand2: 'E'
  },
  0xd4: {
    mnemonic: 'SET',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xd4',
    operand1: '2',
    operand2: 'H'
  },
  0xd5: {
    mnemonic: 'SET',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xd5',
    operand1: '2',
    operand2: 'L'
  },
  0xd6: {
    mnemonic: 'SET',
    length: 2,
    cycles: [
      16
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xd6',
    operand1: '2',
    operand2: '(HL)'
  },
  0xd7: {
    mnemonic: 'SET',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xd7',
    operand1: '2',
    operand2: 'A'
  },
  0xd8: {
    mnemonic: 'SET',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xd8',
    operand1: '3',
    operand2: 'B'
  },
  0xd9: {
    mnemonic: 'SET',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xd9',
    operand1: '3',
    operand2: 'C'
  },
  0xda: {
    mnemonic: 'SET',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xda',
    operand1: '3',
    operand2: 'D'
  },
  0xdb: {
    mnemonic: 'SET',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xdb',
    operand1: '3',
    operand2: 'E'
  },
  0xdc: {
    mnemonic: 'SET',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xdc',
    operand1: '3',
    operand2: 'H'
  },
  0xdd: {
    mnemonic: 'SET',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xdd',
    operand1: '3',
    operand2: 'L'
  },
  0xde: {
    mnemonic: 'SET',
    length: 2,
    cycles: [
      16
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xde',
    operand1: '3',
    operand2: '(HL)'
  },
  0xdf: {
    mnemonic: 'SET',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xdf',
    operand1: '3',
    operand2: 'A'
  },
  0xe0: {
    mnemonic: 'SET',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xe0',
    operand1: '4',
    operand2: 'B'
  },
  0xe1: {
    mnemonic: 'SET',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xe1',
    operand1: '4',
    operand2: 'C'
  },
  0xe2: {
    mnemonic: 'SET',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xe2',
    operand1: '4',
    operand2: 'D'
  },
  0xe3: {
    mnemonic: 'SET',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xe3',
    operand1: '4',
    operand2: 'E'
  },
  0xe4: {
    mnemonic: 'SET',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xe4',
    operand1: '4',
    operand2: 'H'
  },
  0xe5: {
    mnemonic: 'SET',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xe5',
    operand1: '4',
    operand2: 'L'
  },
  0xe6: {
    mnemonic: 'SET',
    length: 2,
    cycles: [
      16
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xe6',
    operand1: '4',
    operand2: '(HL)'
  },
  0xe7: {
    mnemonic: 'SET',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xe7',
    operand1: '4',
    operand2: 'A'
  },
  0xe8: {
    mnemonic: 'SET',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xe8',
    operand1: '5',
    operand2: 'B'
  },
  0xe9: {
    mnemonic: 'SET',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xe9',
    operand1: '5',
    operand2: 'C'
  },
  0xea: {
    mnemonic: 'SET',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xea',
    operand1: '5',
    operand2: 'D'
  },
  0xeb: {
    mnemonic: 'SET',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xeb',
    operand1: '5',
    operand2: 'E'
  },
  0xec: {
    mnemonic: 'SET',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xec',
    operand1: '5',
    operand2: 'H'
  },
  0xed: {
    mnemonic: 'SET',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xed',
    operand1: '5',
    operand2: 'L'
  },
  0xee: {
    mnemonic: 'SET',
    length: 2,
    cycles: [
      16
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xee',
    operand1: '5',
    operand2: '(HL)'
  },
  0xef: {
    mnemonic: 'SET',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xef',
    operand1: '5',
    operand2: 'A'
  },
  0xf0: {
    mnemonic: 'SET',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xf0',
    operand1: '6',
    operand2: 'B'
  },
  0xf1: {
    mnemonic: 'SET',
    length: 2,
    cycles: [
      8
    ],
    lags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xf1',
    operand1: '6',
    operand2: 'C'
  },
  0xf2: {
    mnemonic: 'SET',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xf2',
    operand1: '6',
    operand2: 'D'
  },
  0xf3: {
    mnemonic: 'SET',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xf3',
    operand1: '6',
    operand2: 'E'
  },
  0xf4: {
    mnemonic: 'SET',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xf4',
    operand1: '6',
    operand2: 'H'
  },
  0xf5: {
    mnemonic: 'SET',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xf5',
    operand1: '6',
    operand2: 'L'
  },
  0xf6: {
    mnemonic: 'SET',
    length: 2,
    cycles: [
      16
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xf6',
    operand1: '6',
    operand2: '(HL)'
  },
  0xf7: {
    mnemonic: 'SET',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xf7',
    operand1: '6',
    operand2: 'A'
  },
  xf8: {
    mnemonic: 'SET',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xf8',
    operand1: '7',
    operand2: 'B'
  },
  0xf9: {
    mnemonic: 'SET',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xf9',
    operand1: '7',
    operand2: 'C'
  },
  0xfa: {
    mnemonic: 'SET',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xfa',
    operand1: '7',
    operand2: 'D'
  },
  0xfb: {
    mnemonic: 'SET',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xfb',
    operand1: '7',
    operand2: 'E'
  },
  0xfc: {
    mnemonic: 'SET',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xfc',
    operand1: '7',
    operand2: 'H'
  },
  0xfd: {
    mnemonic: 'SET',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xfd',
    operand1: '7',
    operand2: 'L'
  },
  0xfe: {
    mnemonic: 'SET',
    length: 2,
    cycles: [
      16
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xfe',
    operand1: '7',
    operand2: '(HL)',
  },
  0xff: {
    nemonic: 'SET',
    length: 2,
    cycles: [
      8
    ],
    flags: [
      '-',
      '-',
      '-',
      '-'
    ],
    addr: '0xff',
    operand1: '7',
    operand2: 'A',
  }
};
/* harmony export (immutable) */ __webpack_exports__["OPCODE_CB"] = OPCODE_CB;


=======
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\nconst OPCODE = {\n  // Length: 1\n  0x2: {\n    mnemonic: 'LD',\n    length: 1,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x2',\n    operand1: '(BC)',\n    operand2: 'A'\n  },\n  0x9: {\n    mnemonic: 'ADD',\n    length: 1,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '0',\n      'H',\n      'C'\n    ],\n    addr: '0x9',\n    operand1: 'HL',\n    operand2: 'BC'\n  },\n  0xa: {\n    mnemonic: 'LD',\n    length: 1,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xa',\n    operand1: 'A',\n    operand2: '(BC)'\n  },\n  0x12: {\n    mnemonic: 'LD',\n    length: 1,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x12',\n    operand1: '(DE)',\n    operand2: 'A'\n  },\n  0x19: {\n    mnemonic: 'ADD',\n    length: 1,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '0',\n      'H',\n      'C'\n    ],\n    addr: '0x19',\n    operand1: 'HL',\n    operand2: 'DE'\n  },\n  0x1a: {\n    mnemonic: 'LD',\n    length: 1,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x1a',\n    operand1: 'A',\n    operand2: '(DE)'\n  },\n  0x22: {\n    mnemonic: 'LD',\n    length: 1,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x22',\n    operand1: '(HL+)',\n    operand2: 'A'\n  },\n  0x29: {\n    mnemonic: 'ADD',\n    length: 1,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '0',\n      'H',\n      'C'\n    ],\n    addr: '0x29',\n    operand1: 'HL',\n    operand2: 'HL'\n  },\n  0x2a: {\n    mnemonic: 'LD',\n    length: 1,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x2a',\n    operand1: 'A',\n    operand2: '(HL+)'\n  },\n  0x32: {\n    mnemonic: 'LD',\n    length: 1,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x32',\n    operand1: '(HL-)',\n    operand2: 'A'\n  },\n  0x39: {\n    mnemonic: 'ADD',\n    length: 1,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '0',\n      'H',\n      'C'\n    ],\n    addr: '0x39',\n    operand1: 'HL',\n    operand2: 'SP'\n  },\n  0x3a: {\n    mnemonic: 'LD',\n    length: 1,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x3a',\n    operand1: 'A',\n    operand2: '(HL-)'\n  },\n  0x40: {\n    mnemonic: 'LD',\n    length: 1,\n    cycles: [\n      4\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x40',\n    operand1: 'B',\n    operand2: 'B'\n  },\n  0x41: {\n    mnemonic: 'LD',\n    length: 1,\n    cycles: [\n      4\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x41',\n    operand1: 'B',\n    operand2: 'C'\n  },\n  0x42: {\n    mnemonic: 'LD',\n    length: 1,\n    cycles: [\n      4\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x42',\n    operand1: 'B',\n    operand2: 'D'\n  },\n  0x43: {\n    mnemonic: 'LD',\n    length: 1,\n    cycles: [\n      4\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x43',\n    operand1: 'B',\n    operand2: 'E'\n  },\n  0x44: {\n    mnemonic: 'LD',\n    length: 1,\n    cycles: [\n      4\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x44',\n    operand1: 'B',\n    operand2: 'H'\n  },\n  0x45: {\n    mnemonic: 'LD',\n    length: 1,\n    cycles: [\n      4\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x45',\n    operand1: 'B',\n    operand2: 'L'\n  },\n  0x46: {\n    mnemonic: 'LD',\n    length: 1,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x46',\n    operand1: 'B',\n    operand2: '(HL)'\n  },\n  0x47: {\n    mnemonic: 'LD',\n    length: 1,\n    cycles: [\n      4\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x47',\n    operand1: 'B',\n    operand2: 'A'\n  },\n  0x48: {\n    mnemonic: 'LD',\n    length: 1,\n    cycles: [\n      4\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x48',\n    operand1: 'C',\n    operand2: 'B'\n  },\n  0x49: {\n    mnemonic: 'LD',\n    length: 1,\n    cycles: [\n      4\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x49',\n    operand1: 'C',\n    operand2: 'C'\n  },\n  0x4a: {\n    mnemonic: 'LD',\n    length: 1,\n    cycles: [\n      4\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x4a',\n    operand1: 'C',\n    operand2: 'D'\n  },\n  0x4b: {\n    mnemonic: 'LD',\n    length: 1,\n    cycles: [\n      4\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x4b',\n    operand1: 'C',\n    operand2: 'E'\n  },\n  0x4c: {\n    mnemonic: 'LD',\n    length: 1,\n    cycles: [\n      4\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x4c',\n    operand1: 'C',\n    operand2: 'H'\n  },\n  0x4d: {\n    mnemonic: 'LD',\n    length: 1,\n    cycles: [\n      4\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x4d',\n    operand1: 'C',\n    operand2: 'L'\n  },\n  0x4e: {\n    mnemonic: 'LD',\n    length: 1,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x4e',\n    operand1: 'C',\n    operand2: '(HL)'\n  },\n  0x4f: {\n    mnemonic: 'LD',\n    length: 1,\n    cycles: [\n      4\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x4f',\n    operand1: 'C',\n    operand2: 'A'\n  },\n  0x50: {\n    mnemonic: 'LD',\n    length: 1,\n    cycles: [\n      4\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x50',\n    operand1: 'D',\n    operand2: 'B'\n  },\n  0x51: {\n    mnemonic: 'LD',\n    length: 1,\n    cycles: [\n      4\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x51',\n    operand1: 'D',\n    operand2: 'C'\n  },\n  0x52: {\n    mnemonic: 'LD',\n    length: 1,\n    cycles: [\n      4\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x52',\n    operand1: 'D',\n    operand2: 'D'\n  },\n  0x53: {\n    mnemonic: 'LD',\n    length: 1,\n    cycles: [\n      4\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x53',\n    operand1: 'D',\n    operand2: 'E'\n  },\n  0x54: {\n    mnemonic: 'LD',\n    length: 1,\n    cycles: [\n      4\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x54',\n    operand1: 'D',\n    operand2: 'H'\n  },\n  0x55: {\n    mnemonic: 'LD',\n    length: 1,\n    cycles: [\n      4\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x55',\n    operand1: 'D',\n    operand2: 'L'\n  },\n  0x56: {\n    mnemonic: 'LD',\n    length: 1,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x56',\n    operand1: 'D',\n    operand2: '(HL)'\n  },\n  0x57: {\n    mnemonic: 'LD',\n    length: 1,\n    cycles: [\n      4\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x57',\n    operand1: 'D',\n    operand2: 'A'\n  },\n  0x58: {\n    mnemonic: 'LD',\n    length: 1,\n    cycles: [\n      4\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x58',\n    operand1: 'E',\n    operand2: 'B'\n  },\n  0x59: {\n    mnemonic: 'LD',\n    length: 1,\n    cycles: [\n      4\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x59',\n    operand1: 'E',\n    operand2: 'C'\n  },\n  0x5a: {\n    mnemonic: 'LD',\n    length: 1,\n    cycles: [\n      4\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x5a',\n    operand1: 'E',\n    operand2: 'D'\n  },\n  0x5b: {\n    mnemonic: 'LD',\n    length: 1,\n    cycles: [\n      4\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x5b',\n    operand1: 'E',\n    operand2: 'E'\n  },\n  0x5c: {\n    mnemonic: 'LD',\n    length: 1,\n    cycles: [\n      4\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x5c',\n    operand1: 'E',\n    operand2: 'H'\n  },\n  0x5d: {\n    mnemonic: 'LD',\n    length: 1,\n    cycles: [\n      4\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x5d',\n    operand1: 'E',\n    operand2: 'L'\n  },\n  0x5e: {\n    mnemonic: 'LD',\n    length: 1,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x5e',\n    operand1: 'E',\n    operand2: '(HL)'\n  },\n  0x5f: {\n    mnemonic: 'LD',\n    length: 1,\n    cycles: [\n      4\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x5f',\n    operand1: 'E',\n    operand2: 'A'\n  },\n  0x60: {\n    mnemonic: 'LD',\n    length: 1,\n    cycles: [\n      4\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x60',\n    operand1: 'H',\n    operand2: 'B'\n  },\n  0x61: {\n    mnemonic: 'LD',\n    length: 1,\n    cycles: [\n      4\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x61',\n    operand1: 'H',\n    operand2: 'C'\n  },\n  0x62: {\n    mnemonic: 'LD',\n    length: 1,\n    cycles: [\n      4\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x62',\n    operand1: 'H',\n    operand2: 'D'\n  },\n  0x63: {\n    mnemonic: 'LD',\n    length: 1,\n    cycles: [\n      4\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x63',\n    operand1: 'H',\n    operand2: 'E'\n  },\n  0x64: {\n    mnemonic: 'LD',\n    length: 1,\n    cycles: [\n      4\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x64',\n    operand1: 'H',\n    operand2: 'H'\n  },\n  0x65: {\n    mnemonic: 'LD',\n    length: 1,\n    cycles: [\n      4\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x65',\n    operand1: 'H',\n    operand2: 'L'\n  },\n  0x66: {\n    mnemonic: 'LD',\n    length: 1,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x66',\n    operand1: 'H',\n    operand2: '(HL)'\n  },\n  0x67: {\n    mnemonic: 'LD',\n    length: 1,\n    cycles: [\n      4\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x67',\n    operand1: 'H',\n    operand2: 'A'\n  },\n  0x68: {\n    mnemonic: 'LD',\n    length: 1,\n    cycles: [\n      4\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x68',\n    operand1: 'L',\n    operand2: 'B'\n  },\n  0x69: {\n    mnemonic: 'LD',\n    length: 1,\n    cycles: [\n      4\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x69',\n    operand1: 'L',\n    operand2: 'C'\n  },\n  0x6a: {\n    mnemonic: 'LD',\n    length: 1,\n    cycles: [\n      4\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x6a',\n    operand1: 'L',\n    operand2: 'D'\n  },\n  0x6b: {\n    mnemonic: 'LD',\n    length: 1,\n    cycles: [\n      4\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x6b',\n    operand1: 'L',\n    operand2: 'E'\n  },\n  0x6c: {\n    mnemonic: 'LD',\n    length: 1,\n    cycles: [\n      4\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x6c',\n    operand1: 'L',\n    operand2: 'H'\n  },\n  0x6d: {\n    mnemonic: 'LD',\n    length: 1,\n    cycles: [\n      4\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x6d',\n    operand1: 'L',\n    operand2: 'L'\n  },\n  0x6e: {\n    mnemonic: 'LD',\n    length: 1,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x6e',\n    operand1: 'L',\n    operand2: '(HL)'\n  },\n  0x6f: {\n    mnemonic: 'LD',\n    length: 1,\n    cycles: [\n      4\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x6f',\n    operand1: 'L',\n    operand2: 'A'\n  },\n  0x70: {\n    mnemonic: 'LD',\n    length: 1,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x70',\n    operand1: '(HL)',\n    operand2: 'B'\n  },\n  0x71: {\n    mnemonic: 'LD',\n    length: 1,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x71',\n    operand1: '(HL)',\n    operand2: 'C'\n  },\n  0x72: {\n    mnemonic: 'LD',\n    length: 1,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x72',\n    operand1: '(HL)',\n    operand2: 'D'\n  },\n  0x73: {\n    mnemonic: 'LD',\n    length: 1,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x73',\n    operand1: '(HL)',\n    operand2: 'E'\n  },\n  0x74: {\n    mnemonic: 'LD',\n    length: 1,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x74',\n    operand1: '(HL)',\n    operand2: 'H'\n  },\n  0x75: {\n    mnemonic: 'LD',\n    length: 1,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x75',\n    operand1: '(HL)',\n    operand2: 'L'\n  },\n  0x76: {\n    mnemonic: 'HALT',\n    length: 1,\n    cycles: [\n      4\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x76'\n  },\n  0x77: {\n    mnemonic: 'LD',\n    length: 1,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x77',\n    operand1: '(HL)',\n    operand2: 'A'\n  },\n  0x78: {\n    mnemonic: 'LD',\n    length: 1,\n    cycles: [\n      4\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x78',\n    operand1: 'A',\n    operand2: 'B'\n  },\n  0x79: {\n    mnemonic: 'LD',\n    length: 1,\n    cycles: [\n      4\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x79',\n    operand1: 'A',\n    operand2: 'C'\n  },\n  0x7a: {\n    mnemonic: 'LD',\n    length: 1,\n    cycles: [\n      4\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x7a',\n    operand1: 'A',\n    operand2: 'D'\n  },\n  0x7b: {\n    mnemonic: 'LD',\n    length: 1,\n    cycles: [\n      4\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x7b',\n    operand1: 'A',\n    operand2: 'E'\n  },\n  0x7c: {\n    mnemonic: 'LD',\n    length: 1,\n    cycles: [\n      4\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x7c',\n    operand1: 'A',\n    operand2: 'H'\n  },\n  0x7d: {\n    mnemonic: 'LD',\n    length: 1,\n    cycles: [\n      4\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x7d',\n    operand1: 'A',\n    operand2: 'L'\n  },\n  0x7e: {\n    mnemonic: 'LD',\n    length: 1,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x7e',\n    operand1: 'A',\n    operand2: '(HL)'\n  },\n  0x7f: {\n    mnemonic: 'LD',\n    length: 1,\n    cycles: [\n      4\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x7f',\n    operand1: 'A',\n    operand2: 'A'\n  },\n  0x80: {\n    mnemonic: 'ADD',\n    length: 1,\n    cycles: [\n      4\n    ],\n    flags: [\n      'Z',\n      '0',\n      'H',\n      'C'\n    ],\n    addr: '0x80',\n    operand1: 'A',\n    operand2: 'B'\n  },\n  0x81: {\n    mnemonic: 'ADD',\n    length: 1,\n    cycles: [\n      4\n    ],\n    flags: [\n      'Z',\n      '0',\n      'H',\n      'C'\n    ],\n    addr: '0x81',\n    operand1: 'A',\n    operand2: 'C'\n  },\n  0x82: {\n    mnemonic: 'ADD',\n    length: 1,\n    cycles: [\n      4\n    ],\n    flags: [\n      'Z',\n      '0',\n      'H',\n      'C'\n    ],\n    addr: '0x82',\n    operand1: 'A',\n    operand2: 'D'\n  },\n  0x83: {\n    mnemonic: 'ADD',\n    length: 1,\n    cycles: [\n      4\n    ],\n    flags: [\n      'Z',\n      '0',\n      'H',\n      'C'\n    ],\n    addr: '0x83',\n    operand1: 'A',\n    operand2: 'E'\n  },\n  0x84: {\n    mnemonic: 'ADD',\n    length: 1,\n    cycles: [\n      4\n    ],\n    flags: [\n      'Z',\n      '0',\n      'H',\n      'C'\n    ],\n    addr: '0x84',\n    operand1: 'A',\n    operand2: 'H'\n  },\n  0x85: {\n    mnemonic: 'ADD',\n    length: 1,\n    cycles: [\n      4\n    ],\n    flags: [\n      'Z',\n      '0',\n      'H',\n      'C'\n    ],\n    addr: '0x85',\n    operand1: 'A',\n    operand2: 'L'\n  },\n  0x86: {\n    mnemonic: 'ADD',\n    length: 1,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      'H',\n      'C'\n    ],\n    addr: '0x86',\n    operand1: 'A',\n    operand2: '(HL)'\n  },\n  0x87: {\n    mnemonic: 'ADD',\n    length: 1,\n    cycles: [\n      4\n    ],\n    flags: [\n      'Z',\n      '0',\n      'H',\n      'C'\n    ],\n    addr: '0x87',\n    operand1: 'A',\n    operand2: 'A'\n  },\n  0x90: {\n    mnemonic: 'SUB',\n    length: 1,\n    cycles: [\n      4\n    ],\n    flags: [\n      'Z',\n      '1',\n      'H',\n      'C'\n    ],\n    addr: '0x90',\n    operand1: 'B'\n  },\n  0x91: {\n    mnemonic: 'SUB',\n    length: 1,\n    cycles: [\n      4\n    ],\n    flags: [\n      'Z',\n      '1',\n      'H',\n      'C'\n    ],\n    addr: '0x91',\n    operand1: 'C'\n  },\n  0x92: {\n    mnemonic: 'SUB',\n    length: 1,\n    cycles: [\n      4\n    ],\n    flags: [\n      'Z',\n      '1',\n      'H',\n      'C'\n    ],\n    addr: '0x92',\n    operand1: 'D'\n  },\n  0x93: {\n    mnemonic: 'SUB',\n    length: 1,\n    cycles: [\n      4\n    ],\n    flags: [\n      'Z',\n      '1',\n      'H',\n      'C'\n    ],\n    addr: '0x93',\n    operand1: 'E'\n  },\n  0x94: {\n    mnemonic: 'SUB',\n    length: 1,\n    cycles: [\n      4\n    ],\n    flags: [\n      'Z',\n      '1',\n      'H',\n      'C'\n    ],\n    addr: '0x94',\n    operand1: 'H'\n  },\n  0x95: {\n    mnemonic: 'SUB',\n    length: 1,\n    cycles: [\n      4\n    ],\n    flags: [\n      'Z',\n      '1',\n      'H',\n      'C'\n    ],\n    addr: '0x95',\n    operand1: 'L'\n  },\n  0x96: {\n    mnemonic: 'SUB',\n    length: 1,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '1',\n      'H',\n      'C'\n    ],\n    addr: '0x96',\n    operand1: '(HL)'\n  },\n  0x97: {\n    mnemonic: 'SUB',\n    length: 1,\n    cycles: [\n      4\n    ],\n    flags: [\n      'Z',\n      '1',\n      'H',\n      'C'\n    ],\n    addr: '0x97',\n    operand1: 'A'\n  },\n  0xf9: {\n    mnemonic: 'LD',\n    length: 1,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xf9',\n    operand1: 'SP',\n    operand2: 'HL'\n  },\n\n  // Length: 2\n  0x6: {\n    mnemonic: 'LD',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x6',\n    operand1: 'B',\n    operand2: 'd8'\n  },\n  0xe: {\n    mnemonic: 'LD',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xe',\n    operand1: 'C',\n    operand2: 'd8'\n  },\n  0xc6: {\n    mnemonic: 'ADD',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      'H',\n      'C'\n    ],\n    addr: '0xc6',\n    operand1: 'A',\n    operand2: 'd8'\n  },\n  0x16: {\n    mnemonic: 'LD',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x16',\n    operand1: 'D',\n    operand2: 'd8'\n  },\n  0x1e: {\n    mnemonic: 'LD',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x1e',\n    operand1: 'E',\n    operand2: 'd8'\n  },\n  0x26: {\n    mnemonic: 'LD',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x26',\n    operand1: 'H',\n    operand2: 'd8'\n  },\n  0x2e: {\n    mnemonic: 'LD',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x2e',\n    operand1: 'L',\n    operand2: 'd8'\n  },\n  0x36: {\n    mnemonic: 'LD',\n    length: 2,\n    cycles: [\n      12\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x36',\n    operand1: '(HL)',\n    operand2: 'd8'\n  },\n  0x3e: {\n    mnemonic: 'LD',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x3e',\n    operand1: 'A',\n    operand2: 'd8'\n  },\n  0xd6: {\n    mnemonic: 'SUB',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '1',\n      'H',\n      'C'\n    ],\n    addr: '0xd6',\n    operand1: 'd8'\n  },\n  0xe0: {\n    mnemonic: 'LDH',\n    length: 2,\n    cycles: [\n      12\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xe0',\n    operand1: '(a8)',\n    operand2: 'A'\n  },\n  0xe2: {\n    mnemonic: 'LD',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xe2',\n    operand1: '(C)',\n    operand2: 'A'\n  },\n  0xe8: {\n    mnemonic: 'ADD',\n    length: 2,\n    cycles: [\n      16\n    ],\n    flags: [\n      '0',\n      '0',\n      'H',\n      'C'\n    ],\n    addr: '0xe8',\n    operand1: 'SP',\n    operand2: 'r8'\n  },\n  0xf0: {\n    mnemonic: 'LDH',\n    length: 2,\n    cycles: [\n      12\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xf0',\n    operand1: 'A',\n    operand2: '(a8)'\n  },\n  0xf2: {\n    mnemonic: 'LD',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xf2',\n    operand1: 'A',\n    operand2: '(C)'\n  },\n  0xf8: {\n    mnemonic: 'LD',\n    length: 2,\n    cycles: [\n      12\n    ],\n    flags: [\n      '0',\n      '0',\n      'H',\n      'C'\n    ],\n    addr: '0xf8',\n    operand1: 'HL',\n    operand2: 'SP+r8'\n  },\n\n  // Length: 3\n  0x1: {\n    mnemonic: 'LD',\n    length: 3,\n    cycles: [\n      12\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x1',\n    operand1: 'BC',\n    operand2: 'd16'\n  },\n  0x8: {\n    mnemonic: 'LD',\n    length: 3,\n    cycles: [\n      20\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x8',\n    operand1: '(a16)',\n    operand2: 'SP'\n  },\n  0x11: {\n    mnemonic: 'LD',\n    length: 3,\n    cycles: [\n      12\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x11',\n    operand1: 'DE',\n    operand2: 'd16'\n  },\n  0x21: {\n    mnemonic: 'LD',\n    length: 3,\n    cycles: [\n      12\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x21',\n    operand1: 'HL',\n    operand2: 'd16'\n  },\n  0x31: {\n    mnemonic: 'LD',\n    length: 3,\n    cycles: [\n      12\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x31',\n    operand1: 'SP',\n    operand2: 'd16'\n  },\n  0xea: {\n    mnemonic: 'LD',\n    length: 3,\n    cycles: [\n      16\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xea',\n    operand1: '(a16)',\n    operand2: 'A'\n  },\n  0xfa: {\n    mnemonic: 'LD',\n    length: 3,\n    cycles: [\n      16\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xfa',\n    operand1: 'A',\n    operand2: '(a16)'\n  },\n\n\n  /*\n  0x0: {\n  mnemonic: 'NOP',\n  length: 1,\n  cycles: [4],\n  flags: [\n  '-',\n  '-',\n  '-',\n  '-'\n],\naddr: 0x0\n},\n0x3: {\nmnemonic: 'INC',\nlength: 1,\ncycles: [\n8\n],\nflags: [\n'-',\n'-',\n'-',\n'-'\n],\naddr: '0x3',\noperand1: 'BC'\n},\n0x4: {\nmnemonic: 'INC',\nlength: 1,\ncycles: [\n4\n],\nflags: [\n'Z',\n'0',\n'H',\n'-'\n],\naddr: '0x4',\noperand1: 'B'\n},\n0x5: {\nmnemonic: 'DEC',\nlength: 1,\ncycles: [\n4\n],\nflags: [\n'Z',\n'1',\n'H',\n'-'\n],\naddr: '0x5',\noperand1: 'B'\n},\n0x7: {\nmnemonic: 'RLCA',\nlength: 1,\ncycles: [\n4\n],\nflags: [\n'0',\n'0',\n'0',\n'C'\n],\naddr: '0x7'\n},\n0xb: {\nmnemonic: 'DEC',\nlength: 1,\ncycles: [\n8\n],\nflags: [\n'-',\n'-',\n'-',\n'-'\n],\naddr: '0xb',\noperand1: 'BC'\n},\n0xc: {\nmnemonic: 'INC',\nlength: 1,\ncycles: [\n4\n],\nflags: [\n'Z',\n'0',\n'H',\n'-'\n],\naddr: '0xc',\noperand1: 'C'\n},\n0xd: {\nmnemonic: 'DEC',\nlength: 1,\ncycles: [\n4\n],\nflags: [\n'Z',\n'1',\n'H',\n'-'\n],\naddr: '0xd',\noperand1: 'C'\n},\n0xf: {\nmnemonic: 'RRCA',\nlength: 1,\ncycles: [\n4\n],\nflags: [\n'0',\n'0',\n'0',\n'C'\n],\naddr: '0xf'\n},\n0x10: {\nmnemonic: 'STOP',\nlength: 2,\ncycles: [\n4\n],\nflags: [\n'-',\n'-',\n'-',\n'-'\n],\naddr: '0x10',\noperand1: '0'\n},\n0x13: {\nmnemonic: 'INC',\nlength: 1,\ncycles: [\n8\n],\nflags: [\n'-',\n'-',\n'-',\n'-'\n],\naddr: '0x13',\noperand1: 'DE'\n},\n0x14: {\nmnemonic: 'INC',\nlength: 1,\ncycles: [\n4\n],\nflags: [\n'Z',\n'0',\n'H',\n'-'\n],\naddr: '0x14',\noperand1: 'D'\n},\n0x15: {\nmnemonic: 'DEC',\nlength: 1,\ncycles: [\n4\n],\nflags: [\n'Z',\n'1',\n'H',\n'-'\n],\naddr: '0x15',\noperand1: 'D'\n},\n0x17: {\nmnemonic: 'RLA',\nlength: 1,\ncycles: [\n4\n],\nflags: [\n'0',\n'0',\n'0',\n'C'\n],\naddr: '0x17'\n},\n0x18: {\nmnemonic: 'JR',\nlength: 2,\ncycles: [\n12\n],\nflags: [\n'-',\n'-',\n'-',\n'-'\n],\naddr: '0x18',\noperand1: 'r8'\n},\n0x1b: {\nmnemonic: 'DEC',\nlength: 1,\ncycles: [\n8\n],\nflags: [\n'-',\n'-',\n'-',\n'-'\n],\naddr: '0x1b',\noperand1: 'DE'\n},\n0x1c: {\nmnemonic: 'INC',\nlength: 1,\ncycles: [\n4\n],\nflags: [\n'Z',\n'0',\n'H',\n'-'\n],\naddr: '0x1c',\noperand1: 'E'\n},\n0x1d: {\nmnemonic: 'DEC',\nlength: 1,\ncycles: [\n4\n],\nflags: [\n'Z',\n'1',\n'H',\n'-'\n],\naddr: '0x1d',\noperand1: 'E'\n},\n0x1f: {\nmnemonic: 'RRA',\nlength: 1,\ncycles: [\n4\n],\nflags: [\n'0',\n'0',\n'0',\n'C'\n],\naddr: '0x1f'\n},\n0x20: {\nmnemonic: 'JR',\nlength: 2,\ncycles: [\n12,\n8\n],\nflags: [\n'-',\n'-',\n'-',\n'-'\n],\naddr: '0x20',\noperand1: 'NZ',\noperand2: 'r8'\n},\n0x23: {\nmnemonic: 'INC',\nlength: 1,\ncycles: [\n8\n],\nflags: [\n'-',\n'-',\n'-',\n'-'\n],\naddr: '0x23',\noperand1: 'HL'\n},\n0x24: {\nmnemonic: 'INC',\nlength: 1,\ncycles: [\n4\n],\nflags: [\n'Z',\n'0',\n'H',\n'-'\n],\naddr: '0x24',\noperand1: 'H'\n},\n0x25: {\nmnemonic: 'DEC',\nlength: 1,\ncycles: [\n4\n],\nflags: [\n'Z',\n'1',\n'H',\n'-'\n],\naddr: '0x25',\noperand1: 'H'\n},\n0x27: {\nmnemonic: 'DAA',\nlength: 1,\ncycles: [\n4\n],\nflags: [\n'Z',\n'-',\n'0',\n'C'\n],\naddr: '0x27'\n},\n0x28: {\nmnemonic: 'JR',\nlength: 2,\ncycles: [\n12,\n8\n],\nflags: [\n'-',\n'-',\n'-',\n'-'\n],\naddr: '0x28',\noperand1: 'Z',\noperand2: 'r8'\n},\n0x2b: {\nmnemonic: 'DEC',\nlength: 1,\ncycles: [\n8\n],\nflags: [\n'-',\n'-',\n'-',\n'-'\n],\naddr: '0x2b',\noperand1: 'HL'\n},\n0x2c: {\nmnemonic: 'INC',\nlength: 1,\ncycles: [\n4\n],\nflags: [\n'Z',\n'0',\n'H',\n'-'\n],\naddr: '0x2c',\noperand1: 'L'\n},\n0x2d: {\nmnemonic: 'DEC',\nlength: 1,\ncycles: [\n4\n],\nflags: [\n'Z',\n'1',\n'H',\n'-'\n],\naddr: '0x2d',\noperand1: 'L'\n},\n0x2f: {\nmnemonic: 'CPL',\nlength: 1,\ncycles: [\n4\n],\nflags: [\n'-',\n'1',\n'1',\n'-'\n],\naddr: '0x2f'\n},\n0x30: {\nmnemonic: 'JR',\nlength: 2,\ncycles: [\n12,\n8\n],\nflags: [\n'-',\n'-',\n'-',\n'-'\n],\naddr: '0x30',\noperand1: 'NC',\noperand2: 'r8'\n},\n0x33: {\nmnemonic: 'INC',\nlength: 1,\ncycles: [\n8\n],\nflags: [\n'-',\n'-',\n'-',\n'-'\n],\naddr: '0x33',\noperand1: 'SP'\n},\n0x34: {\nmnemonic: 'INC',\nlength: 1,\ncycles: [\n12\n],\nflags: [\n'Z',\n'0',\n'H',\n'-'\n],\naddr: '0x34',\noperand1: '(HL)'\n},\n0x35: {\nmnemonic: 'DEC',\nlength: 1,\ncycles: [\n12\n],\nflags: [\n'Z',\n'1',\n'H',\n'-'\n],\naddr: '0x35',\noperand1: '(HL)'\n},\n0x37: {\nmnemonic: 'SCF',\nlength: 1,\ncycles: [\n4\n],\nflags: [\n'-',\n'0',\n'0',\n'1'\n],\naddr: '0x37'\n},\n0x38: {\nmnemonic: 'JR',\nlength: 2,\ncycles: [\n12,\n8\n],\nflags: [\n'-',\n'-',\n'-',\n'-'\n],\naddr: '0x38',\noperand1: 'C',\noperand2: 'r8'\n},\n0x3b: {\nmnemonic: 'DEC',\nlength: 1,\ncycles: [\n8\n],\nflags: [\n'-',\n'-',\n'-',\n'-'\n],\naddr: '0x3b',\noperand1: 'SP'\n},\n0x3c: {\nmnemonic: 'INC',\nlength: 1,\ncycles: [\n4\n],\nflags: [\n'Z',\n'0',\n'H',\n'-'\n],\naddr: '0x3c',\noperand1: 'A'\n},\n0x3d: {\nmnemonic: 'DEC',\nlength: 1,\ncycles: [\n4\n],\nflags: [\n'Z',\n'1',\n'H',\n'-'\n],\naddr: '0x3d',\noperand1: 'A'\n},\n0x3f: {\nmnemonic: 'CCF',\nlength: 1,\ncycles: [\n4\n],\nflags: [\n'-',\n'0',\n'0',\n'C'\n],\naddr: '0x3f'\n},\n\n0x88: {\nmnemonic: 'ADC',\nlength: 1,\ncycles: [\n4\n],\nflags: [\n'Z',\n'0',\n'H',\n'C'\n],\naddr: '0x88',\noperand1: 'A',\noperand2: 'B'\n},\n0x89: {\nmnemonic: 'ADC',\nlength: 1,\ncycles: [\n4\n],\nflags: [\n'Z',\n'0',\n'H',\n'C'\n],\naddr: '0x89',\noperand1: 'A',\noperand2: 'C'\n},\n0x8a: {\nmnemonic: 'ADC',\nlength: 1,\ncycles: [\n4\n],\nflags: [\n'Z',\n'0',\n'H',\n'C'\n],\naddr: '0x8a',\noperand1: 'A',\noperand2: 'D'\n},\n0x8b: {\nmnemonic: 'ADC',\nlength: 1,\ncycles: [\n4\n],\nflags: [\n'Z',\n'0',\n'H',\n'C'\n],\naddr: '0x8b',\noperand1: 'A',\noperand2: 'E'\n},\n0x8c: {\nmnemonic: 'ADC',\nlength: 1,\ncycles: [\n4\n],\nflags: [\n'Z',\n'0',\n'H',\n'C'\n],\naddr: '0x8c',\noperand1: 'A',\noperand2: 'H'\n},\n0x8d: {\nmnemonic: 'ADC',\nlength: 1,\ncycles: [\n4\n],\nflags: [\n'Z',\n'0',\n'H',\n'C'\n],\naddr: '0x8d',\noperand1: 'A',\noperand2: 'L'\n},\n0x8e: {\nmnemonic: 'ADC',\nlength: 1,\ncycles: [\n8\n],\nflags: [\n'Z',\n'0',\n'H',\n'C'\n],\naddr: '0x8e',\noperand1: 'A',\noperand2: '(HL)'\n},\n0x8f: {\nmnemonic: 'ADC',\nlength: 1,\ncycles: [\n4\n],\nflags: [\n'Z',\n'0',\n'H',\n'C'\n],\naddr: '0x8f',\noperand1: 'A',\noperand2: 'A'\n},\n\n0x98: {\nmnemonic: 'SBC',\nlength: 1,\ncycles: [\n4\n],\nflags: [\n'Z',\n'1',\n'H',\n'C'\n],\naddr: '0x98',\noperand1: 'A',\noperand2: 'B'\n},\n0x99: {\nmnemonic: 'SBC',\nlength: 1,\ncycles: [\n4\n],\nflags: [\n'Z',\n'1',\n'H',\n'C'\n],\naddr: '0x99',\noperand1: 'A',\noperand2: 'C'\n},\n0x9a: {\nmnemonic: 'SBC',\nlength: 1,\ncycles: [\n4\n],\nflags: [\n'Z',\n'1',\n'H',\n'C'\n],\naddr: '0x9a',\noperand1: 'A',\noperand2: 'D'\n},\n0x9b: {\nmnemonic: 'SBC',\nlength: 1,\ncycles: [\n4\n],\nflags: [\n'Z',\n'1',\n'H',\n'C'\n],\naddr: '0x9b',\noperand1: 'A',\noperand2: 'E'\n},\n0x9c: {\nmnemonic: 'SBC',\nlength: 1,\ncycles: [\n4\n],\nflags: [\n'Z',\n'1',\n'H',\n'C'\n],\naddr: '0x9c',\noperand1: 'A',\noperand2: 'H'\n},\n0x9d: {\nmnemonic: 'SBC',\nlength: 1,\ncycles: [\n4\n],\nflags: [\n'Z',\n'1',\n'H',\n'C'\n],\naddr: '0x9d',\noperand1: 'A',\noperand2: 'L'\n},\n0x9e: {\nmnemonic: 'SBC',\nlength: 1,\ncycles: [\n8\n],\nflags: [\n'Z',\n'1',\n'H',\n'C'\n],\naddr: '0x9e',\noperand1: 'A',\noperand2: '(HL)'\n},\n0x9f: {\nmnemonic: 'SBC',\nlength: 1,\ncycles: [\n4\n],\nflags: [\n'Z',\n'1',\n'H',\n'C'\n],\naddr: '0x9f',\noperand1: 'A',\noperand2: 'A'\n},\n0xa0: {\nmnemonic: 'AND',\nlength: 1,\ncycles: [\n4\n],\nflags: [\n'Z',\n'0',\n'1',\n'0'\n],\naddr: '0xa0',\noperand1: 'B'\n},\n0xa1: {\nmnemonic: 'AND',\nlength: 1,\ncycles: [\n4\n],\nflags: [\n'Z',\n'0',\n'1',\n'0'\n],\naddr: '0xa1',\noperand1: 'C'\n},\n0xa2: {\nmnemonic: 'AND',\nlength: 1,\ncycles: [\n4\n],\nflags: [\n'Z',\n'0',\n'1',\n'0'\n],\naddr: '0xa2',\noperand1: 'D'\n},\n0xa3: {\nmnemonic: 'AND',\nlength: 1,\ncycles: [\n4\n],\nflags: [\n'Z',\n'0',\n'1',\n'0'\n],\naddr: '0xa3',\noperand1: 'E'\n},\n0xa4: {\nmnemonic: 'AND',\nlength: 1,\ncycles: [\n4\n],\nflags: [\n'Z',\n'0',\n'1',\n'0'\n],\naddr: '0xa4',\noperand1: 'H'\n},\n0xa5: {\nmnemonic: 'AND',\nlength: 1,\ncycles: [\n4\n],\nflags: [\n'Z',\n'0',\n'1',\n'0'\n],\naddr: '0xa5',\noperand1: 'L'\n},\n0xa6: {\nmnemonic: 'AND',\nlength: 1,\ncycles: [\n8\n],\nflags: [\n'Z',\n'0',\n'1',\n'0'\n],\naddr: '0xa6',\noperand1: '(HL)'\n},\n0xa7: {\nmnemonic: 'AND',\nlength: 1,\ncycles: [\n4\n],\nflags: [\n'Z',\n'0',\n'1',\n'0'\n],\naddr: '0xa7',\noperand1: 'A'\n},\n0xa8: {\nmnemonic: 'XOR',\nlength: 1,\ncycles: [\n4\n],\nflags: [\n'Z',\n'0',\n'0',\n'0'\n],\naddr: '0xa8',\noperand1: 'B'\n},\n0xa9: {\nmnemonic: 'XOR',\nlength: 1,\ncycles: [\n4\n],\nflags: [\n'Z',\n'0',\n'0',\n'0'\n],\naddr: '0xa9',\noperand1: 'C'\n},\n0xaa: {\nmnemonic: 'XOR',\nlength: 1,\ncycles: [\n4\n],\nflags: [\n'Z',\n'0',\n'0',\n'0'\n],\naddr: '0xaa',\noperand1: 'D'\n},\n0xab: {\nmnemonic: 'XOR',\nlength: 1,\ncycles: [\n4\n],\nflags: [\n'Z',\n'0',\n'0',\n'0'\n],\naddr: '0xab',\noperand1: 'E'\n},\n0xac: {\nmnemonic: 'XOR',\nlength: 1,\ncycles: [\n4\n],\nflags: [\n'Z',\n'0',\n'0',\n'0'\n],\naddr: '0xac',\noperand1: 'H'\n},\n0xad: {\nmnemonic: 'XOR',\nlength: 1,\ncycles: [\n4\n],\nflags: [\n'Z',\n'0',\n'0',\n'0'\n],\naddr: '0xad',\noperand1: 'L'\n},\n0xae: {\nmnemonic: 'XOR',\nlength: 1,\ncycles: [\n8\n],\nflags: [\n'Z',\n'0',\n'0',\n'0'\n],\naddr: '0xae',\noperand1: '(HL)'\n},\n0xaf: {\nmnemonic: 'XOR',\nlength: 1,\ncycles: [\n4\n],\nflags: [\n'Z',\n'0',\n'0',\n'0'\n],\naddr: '0xaf',\noperand1: 'A'\n},\n0xb0: {\nmnemonic: 'OR',\nlength: 1,\ncycles: [\n4\n],\nflags: [\n'Z',\n'0',\n'0',\n'0'\n],\naddr: '0xb0',\noperand1: 'B'\n},\n0xb1: {\nmnemonic: 'OR',\nlength: 1,\ncycles: [\n4\n],\nflags: [\n'Z',\n'0',\n'0',\n'0'\n],\naddr: '0xb1',\noperand1: 'C'\n},\n0xb2: {\nmnemonic: 'OR',\nlength: 1,\ncycles: [\n4\n],\nflags: [\n'Z',\n'0',\n'0',\n'0'\n],\naddr: '0xb2',\noperand1: 'D'\n},\n0xb3: {\nmnemonic: 'OR',\nlength: 1,\ncycles: [\n4\n],\nflags: [\n'Z',\n'0',\n'0',\n'0'\n],\naddr: '0xb3',\noperand1: 'E'\n},\n0xb4: {\nmnemonic: 'OR',\nlength: 1,\ncycles: [\n4\n],\nflags: [\n'Z',\n'0',\n'0',\n'0'\n],\naddr: '0xb4',\noperand1: 'H'\n},\n0xb5: {\nmnemonic: 'OR',\nlength: 1,\ncycles: [\n4\n],\nflags: [\n'Z',\n'0',\n'0',\n'0'\n],\naddr: '0xb5',\noperand1: 'L'\n},\n0xb6: {\nmnemonic: 'OR',\nlength: 1,\ncycles: [\n8\n],\nflags: [\n'Z',\n'0',\n'0',\n'0'\n],\naddr: '0xb6',\noperand1: '(HL)'\n},\n0xb7: {\nmnemonic: 'OR',\nlength: 1,\ncycles: [\n4\n],\nflags: [\n'Z',\n'0',\n'0',\n'0'\n],\naddr: '0xb7',\noperand1: 'A'\n},\n0xb8: {\nmnemonic: 'CP',\nlength: 1,\ncycles: [\n4\n],\nflags: [\n'Z',\n'1',\n'H',\n'C'\n],\naddr: '0xb8',\noperand1: 'B'\n},\n0xb9: {\nmnemonic: 'CP',\nlength: 1,\ncycles: [\n4\n],\nflags: [\n'Z',\n'1',\n'H',\n'C'\n],\naddr: '0xb9',\noperand1: 'C'\n},\n0xba: {\nmnemonic: 'CP',\nlength: 1,\ncycles: [\n4\n],\nflags: [\n'Z',\n'1',\n'H',\n'C'\n],\naddr: '0xba',\noperand1: 'D'\n},\n0xbb: {\nmnemonic: 'CP',\nlength: 1,\ncycles: [\n4\n],\nflags: [\n'Z',\n'1',\n'H',\n'C'\n],\naddr: '0xbb',\noperand1: 'E'\n},\n0xbc: {\nmnemonic: 'CP',\nlength: 1,\ncycles: [\n4\n],\nflags: [\n'Z',\n'1',\n'H',\n'C'\n],\naddr: '0xbc',\noperand1: 'H'\n},\n0xbd: {\nmnemonic: 'CP',\nlength: 1,\ncycles: [\n4\n],\nflags: [\n'Z',\n'1',\n'H',\n'C'\n],\naddr: '0xbd',\noperand1: 'L'\n},\n0xbe: {\nmnemonic: 'CP',\nlength: 1,\ncycles: [\n8\n],\nflags: [\n'Z',\n'1',\n'H',\n'C'\n],\naddr: '0xbe',\noperand1: '(HL)'\n},\n0xbf: {\nmnemonic: 'CP',\nlength: 1,\ncycles: [\n4\n],\nflags: [\n'Z',\n'1',\n'H',\n'C'\n],\naddr: '0xbf',\noperand1: 'A'\n},\n0xc0: {\nmnemonic: 'RET',\nlength: 1,\ncycles: [\n20,\n8\n],\nflags: [\n'-',\n'-',\n'-',\n'-'\n],\naddr: '0xc0',\noperand1: 'NZ'\n},\n0xc1: {\nmnemonic: 'POP',\nlength: 1,\ncycles: [\n12\n],\nflags: [\n'-',\n'-',\n'-',\n'-'\n],\naddr: '0xc1',\noperand1: 'BC'\n},\n0xc2: {\nmnemonic: 'JP',\nlength: 3,\ncycles: [\n16,\n12\n],\nflags: [\n'-',\n'-',\n'-',\n'-'\n],\naddr: '0xc2',\noperand1: 'NZ',\noperand2: 'a16'\n},\n0xc3: {\nmnemonic: 'JP',\nlength: 3,\ncycles: [\n16\n],\nflags: [\n'-',\n'-',\n'-',\n'-'\n],\naddr: '0xc3',\noperand1: 'a16'\n},\n0xc4: {\nmnemonic: 'CALL',\nlength: 3,\ncycles: [\n24,\n12\n],\nflags: [\n'-',\n'-',\n'-',\n'-'\n],\naddr: '0xc4',\noperand1: 'NZ',\noperand2: 'a16'\n},\n0xc5: {\nmnemonic: 'PUSH',\nlength: 1,\ncycles: [\n16\n],\nflags: [\n'-',\n'-',\n'-',\n'-'\n],\naddr: '0xc5',\noperand1: 'BC'\n},\n0xc7: {\nmnemonic: 'RST',\nlength: 1,\ncycles: [\n16\n],\nflags: [\n'-',\n'-',\n'-',\n'-'\n],\naddr: '0xc7',\noperand1: '00H'\n},\n0xc8: {\nmnemonic: 'RET',\nlength: 1,\ncycles: [\n20,\n8\n],\nflags: [\n'-',\n'-',\n'-',\n'-'\n],\naddr: '0xc8',\noperand1: 'Z'\n},\n0xc9: {\nmnemonic: 'RET',\nlength: 1,\ncycles: [\n16\n],\nflags: [\n'-',\n'-',\n'-',\n'-'\n],\naddr: '0xc9'\n},\n0xca: {\nmnemonic: 'JP',\nlength: 3,\ncycles: [\n16,\n12\n],\nflags: [\n'-',\n'-',\n'-',\n'-'\n],\naddr: '0xca',\noperand1: 'Z',\noperand2: 'a16'\n},\n0xcb: {\nmnemonic: 'PREFIX',\nlength: 1,\ncycles: [\n4\n],\nflags: [\n'-',\n'-',\n'-',\n'-'\n],\naddr: '0xcb',\noperand1: 'CB'\n},\n0xcc: {\nmnemonic: 'CALL',\nlength: 3,\ncycles: [\n24,\n12\n],\nflags: [\n'-',\n'-',\n'-',\n'-'\n],\naddr: '0xcc',\noperand1: 'Z',\noperand2: 'a16'\n},\n0xcd: {\nmnemonic: 'CALL',\nlength: 3,\ncycles: [\n24\n],\nflags: [\n'-',\n'-',\n'-',\n'-'\n],\naddr: '0xcd',\noperand1: 'a16'\n},\n0xce: {\nmnemonic: 'ADC',\nlength: 2,\ncycles: [\n8\n],\nflags: [\n'Z',\n'0',\n'H',\n'C'\n],\naddr: '0xce',\noperand1: 'A',\noperand2: 'd8'\n},\n0xcf: {\nmnemonic: 'RST',\nlength: 1,\ncycles: [\n16\n],\nflags: [\n'-',\n'-',\n'-',\n'-'\n],\naddr: '0xcf',\noperand1: '08H'\n},\n0xd0: {\nmnemonic: 'RET',\nlength: 1,\ncycles: [\n20,\n8\n],\nflags: [\n'-',\n'-',\n'-',\n'-'\n],\naddr: '0xd0',\noperand1: 'NC'\n},\n0xd1: {\nmnemonic: 'POP',\nlength: 1,\ncycles: [\n12\n],\nflags: [\n'-',\n'-',\n'-',\n'-'\n],\naddr: '0xd1',\noperand1: 'DE'\n},\n0xd2: {\nmnemonic: 'JP',\nlength: 3,\ncycles: [\n16,\n12\n],\nflags: [\n'-',\n'-',\n'-',\n'-'\n],\naddr: '0xd2',\noperand1: 'NC',\noperand2: 'a16'\n},\n0xd4: {\nmnemonic: 'CALL',\nlength: 3,\ncycles: [\n24,\n12\n],\nflags: [\n'-',\n'-',\n'-',\n'-'\n],\naddr: '0xd4',\noperand1: 'NC',\noperand2: 'a16'\n},\n0xd5: {\nmnemonic: 'PUSH',\nlength: 1,\ncycles: [\n16\n],\nflags: [\n'-',\n'-',\n'-',\n'-'\n],\naddr: '0xd5',\noperand1: 'DE'\n},\n\n0xd7: {\nmnemonic: 'RST',\nlength: 1,\ncycles: [\n16\n],\nflags: [\n'-',\n'-',\n'-',\n'-'\n],\naddr: '0xd7',\noperand1: '10H'\n},\n0xd8: {\nmnemonic: 'RET',\nlength: 1,\ncycles: [\n20,\n8\n],\nflags: [\n'-',\n'-',\n'-',\n'-'\n],\naddr: '0xd8',\noperand1: 'C'\n},\n0xd9: {\nmnemonic: 'RETI',\nlength: 1,\ncycles: [\n16\n],\nflags: [\n'-',\n'-',\n'-',\n'-'\n],\naddr: '0xd9'\n},\n0xda: {\nmnemonic: 'JP',\nlength: 3,\ncycles: [\n16,\n12\n],\nflags: [\n'-',\n'-',\n'-',\n'-'\n],\naddr: '0xda',\noperand1: 'C',\noperand2: 'a16'\n},\n0xdc: {\nmnemonic: 'CALL',\nlength: 3,\ncycles: [\n24,\n12\n],\nflags: [\n'-',\n'-',\n'-',\n'-'\n],\naddr: '0xdc',\noperand1: 'C',\noperand2: 'a16'\n},\n0xde: {\nmnemonic: 'SBC',\nlength: 2,\ncycles: [\n8\n],\nflags: [\n'Z',\n'1',\n'H',\n'C'\n],\naddr: '0xde',\noperand1: 'A',\noperand2: 'd8'\n},\n0xdf: {\nmnemonic: 'RST',\nlength: 1,\ncycles: [\n16\n],\nflags: [\n'-',\n'-',\n'-',\n'-'\n],\naddr: '0xdf',\noperand1: '18H'\n},\n0xe1: {\nmnemonic: 'POP',\nlength: 1,\ncycles: [\n12\n],\nflags: [\n'-',\n'-',\n'-',\n'-'\n],\naddr: '0xe1',\noperand1: 'HL'\n},\n\n\n0xe5: {\nmnemonic: 'PUSH',\nlength: 1,\ncycles: [\n16\n],\nflags: [\n'-',\n'-',\n'-',\n'-'\n],\naddr: '0xe5',\noperand1: 'HL'\n},\n0xe6: {\nmnemonic: 'AND',\nlength: 2,\ncycles: [\n8\n],\nflags: [\n'Z',\n'0',\n'1',\n'0'\n],\naddr: '0xe6',\noperand1: 'd8'\n},\n0xe7: {\nmnemonic: 'RST',\nlength: 1,\ncycles: [\n16\n],\nflags: [\n'-',\n'-',\n'-',\n'-'\n],\naddr: '0xe7',\noperand1: '20H'\n},\n0xe9: {\nmnemonic: 'JP',\nlength: 1,\ncycles: [\n4\n],\nflags: [\n'-',\n'-',\n'-',\n'-'\n],\naddr: '0xe9',\noperand1: '(HL)'\n},\n0xee: {\nmnemonic: 'XOR',\nlength: 2,\ncycles: [\n8\n],\nflags: [\n'Z',\n'0',\n'0',\n'0'\n],\naddr: '0xee',\noperand1: 'd8'\n},\n0xef: {\nmnemonic: 'RST',\nlength: 1,\ncycles: [\n16\n],\nflags: [\n'-',\n'-',\n'-',\n'-'\n],\naddr: '0xef',\noperand1: '28H'\n},\n0xf1: {\nmnemonic: 'POP',\nlength: 1,\ncycles: [\n12\n],\nflags: [\n'Z',\n'N',\n'H',\n'C'\n],\naddr: '0xf1',\noperand1: 'AF'\n},\n0xf3: {\nmnemonic: 'DI',\nlength: 1,\ncycles: [\n4\n],\nflags: [\n'-',\n'-',\n'-',\n'-'\n],\naddr: '0xf3'\n},\n0xf5: {\nmnemonic: 'PUSH',\nlength: 1,\ncycles: [\n16\n],\nflags: [\n'-',\n'-',\n'-',\n'-'\n],\naddr: '0xf5',\noperand1: 'AF'\n},\n0xf6: {\nmnemonic: 'OR',\nlength: 2,\ncycles: [\n8\n],\nflags: [\n'Z',\n'0',\n'0',\n'0'\n],\naddr: '0xf6',\noperand1: 'd8'\n},\n0xf7: {\nmnemonic: 'RST',\nlength: 1,\ncycles: [\n16\n],\nflags: [\n'-',\n'-',\n'-',\n'-'\n],\naddr: '0xf7',\noperand1: '30H'\n},\n0xfb: {\nmnemonic: 'EI',\nlength: 1,\ncycles: [\n4\n],\nflags: [\n'-',\n'-',\n'-',\n'-'\n],\naddr: '0xfb'\n},\n0xfe: {\nmnemonic: 'CP',\nlength: 2,\ncycles: [\n8\n],\nflags: [\n'Z',\n'1',\n'H',\n'C'\n],\naddr: '0xfe',\noperand1: 'd8'\n},\n0xff: {\nmnemonic: 'RST',\nlength: 1,\ncycles: [\n16\n],\nflags: [\n'-',\n'-',\n'-',\n'-'\n],\naddr: '0xff',\noperand1: '38H'\n}\n*/\n};\n/* harmony export (immutable) */ __webpack_exports__[\"OPCODE\"] = OPCODE;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (OPCODE);\n\n\nconst OPCODE_CB = {\n  0x0: {\n    mnemonic: 'RLC',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '0',\n      'C'\n    ],\n    addr: '0x0',\n    operand1: 'B'\n  },\n  0x1: {\n    mnemonic: 'RLC',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '0',\n      'C'\n    ],\n    addr: '0x1',\n    operand1: 'C'\n  },\n  0x2: {\n    mnemonic: 'RLC',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '0',\n      'C'\n    ],\n    addr: '0x2',\n    operand1: 'D'\n  },\n  0x3: {\n    mnemonic: 'RLC',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '0',\n      'C'\n    ],\n    addr: '0x3',\n    operand1: 'E'\n  },\n  0x4: {\n    mnemonic: 'RLC',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '0',\n      'C'\n    ],\n    addr: '0x4',\n    operand1: 'H'\n  },\n  0x5: {\n    mnemonic: 'RLC',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '0',\n      'C'\n    ],\n    addr: '0x5',\n    operand1: 'L'\n  },\n  0x6: {\n    mnemonic: 'RLC',\n    length: 2,\n    cycles: [\n      16\n    ],\n    flags: [\n      'Z',\n      '0',\n      '0',\n      'C'\n    ],\n    addr: '0x6',\n    operand1: '(HL)'\n  },\n  0x7: {\n    mnemonic: 'RLC',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '0',\n      'C'\n    ],\n    addr: '0x7',\n    operand1: 'A'\n  },\n  0x8: {\n    mnemonic: 'RRC',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '0',\n      'C'\n    ],\n    addr: '0x8',\n    operand1: 'B'\n  },\n  0x9: {\n    mnemonic: 'RRC',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '0',\n      'C'\n    ],\n    addr: '0x9',\n    operand1: 'C'\n  },\n  0xa: {\n    mnemonic: 'RRC',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '0',\n      'C'\n    ],\n    addr: '0xa',\n    operand1: 'D'\n  },\n  0xb: {\n    mnemonic: 'RRC',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '0',\n      'C'\n    ],\n    addr: '0xb',\n    operand1: 'E'\n  },\n  0xc: {\n    mnemonic: 'RRC',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '0',\n      'C'\n    ],\n    addr: '0xc',\n    operand1: 'H'\n  },\n  0xd: {\n    mnemonic: 'RRC',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '0',\n      'C'\n    ],\n    addr: '0xd',\n    operand1: 'L'\n  },\n  0xe: {\n    mnemonic: 'RRC',\n    length: 2,\n    cycles: [\n      16\n    ],\n    flags: [\n      'Z',\n      '0',\n      '0',\n      'C'\n    ],\n    addr: '0xe',\n    operand1: '(HL)'\n  },\n  0xf: {\n    mnemonic: 'RRC',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '0',\n      'C'\n    ],\n    addr: '0xf',\n    operand1: 'A'\n  },\n  0x10: {\n    mnemonic: 'RL',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '0',\n      'C'\n    ],\n    addr: '0x10',\n    operand1: 'B'\n  },\n  0x11: {\n    mnemonic: 'RL',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '0',\n      'C'\n    ],\n    addr: '0x11',\n    operand1: 'C'\n  },\n  0x12: {\n    mnemonic: 'RL',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '0',\n      'C'\n    ],\n    addr: '0x12',\n    operand1: 'D'\n  },\n  0x13: {\n    mnemonic: 'RL',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '0',\n      'C'\n    ],\n    addr: '0x13',\n    operand1: 'E'\n  },\n  0x14: {\n    mnemonic: 'RL',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '0',\n      'C'\n    ],\n    addr: '0x14',\n    operand1: 'H'\n  },\n  0x15: {\n    mnemonic: 'RL',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '0',\n      'C'\n    ],\n    addr: '0x15',\n    operand1: 'L'\n  },\n  0x16: {\n    mnemonic: 'RL',\n    length: 2,\n    cycles: [\n      16\n    ],\n    flags: [\n      'Z',\n      '0',\n      '0',\n      'C'\n    ],\n    addr: '0x16',\n    operand1: '(HL)'\n  },\n  0x17: {\n    mnemonic: 'RL',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '0',\n      'C'\n    ],\n    addr: '0x17',\n    operand1: 'A'\n  },\n  0x18: {\n    mnemonic: 'RR',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '0',\n      'C'\n    ],\n    addr: '0x18',\n    operand1: 'B'\n  },\n  0x19: {\n    mnemonic: 'RR',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '0',\n      'C'\n    ],\n    addr: '0x19',\n    operand1: 'C'\n  },\n  0x1a: {\n    mnemonic: 'RR',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '0',\n      'C'\n    ],\n    addr: '0x1a',\n    operand1: 'D'\n  },\n  0x1b: {\n    mnemonic: 'RR',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '0',\n      'C'\n    ],\n    addr: '0x1b',\n    operand1: 'E'\n  },\n  0x1c: {\n    mnemonic: 'RR',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '0',\n      'C'\n    ],\n    addr: '0x1c',\n    operand1: 'H'\n  },\n  0x1d: {\n    mnemonic: 'RR',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '0',\n      'C'\n    ],\n    addr: '0x1d',\n    operand1: 'L'\n  },\n  0x1e: {\n    mnemonic: 'RR',\n    length: 2,\n    cycles: [\n      16\n    ],\n    flags: [\n      'Z',\n      '0',\n      '0',\n      'C'\n    ],\n    addr: '0x1e',\n    operand1: '(HL)'\n  },\n  0x1f: {\n    mnemonic: 'RR',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '0',\n      'C'\n    ],\n    addr: '0x1f',\n    operand1: 'A'\n  },\n  0x20: {\n    mnemonic: 'SLA',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '0',\n      'C'\n    ],\n    addr: '0x20',\n    operand1: 'B'\n  },\n  0x21: {\n    mnemonic: 'SLA',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '0',\n      'C'\n    ],\n    addr: '0x21',\n    operand1: 'C'\n  },\n  0x22: {\n    mnemonic: 'SLA',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '0',\n      'C'\n    ],\n    addr: '0x22',\n    operand1: 'D'\n  },\n  0x23: {\n    mnemonic: 'SLA',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '0',\n      'C'\n    ],\n    addr: '0x23',\n    operand1: 'E'\n  },\n  0x24: {\n    mnemonic: 'SLA',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '0',\n      'C'\n    ],\n    addr: '0x24',\n    operand1: 'H'\n  },\n  0x25: {\n    mnemonic: 'SLA',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '0',\n      'C'\n    ],\n    addr: '0x25',\n    operand1: 'L'\n  },\n  0x26: {\n    mnemonic: 'SLA',\n    length: 2,\n    cycles: [\n      16\n    ],\n    flags: [\n      'Z',\n      '0',\n      '0',\n      'C'\n    ],\n    addr: '0x26',\n    operand1: '(HL)'\n  },\n  0x27: {\n    mnemonic: 'SLA',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '0',\n      'C'\n    ],\n    addr: '0x27',\n    operand1: 'A'\n  },\n  0x28: {\n    mnemonic: 'SRA',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '0',\n      '0'\n    ],\n    addr: '0x28',\n    operand1: 'B'\n  },\n  0x29: {\n    mnemonic: 'SRA',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '0',\n      '0'\n    ],\n    addr: '0x29',\n    operand1: 'C'\n  },\n  0x2a: {\n    mnemonic: 'SRA',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '0',\n      '0'\n    ],\n    addr: '0x2a',\n    operand1: 'D'\n  },\n  0x2b: {\n    mnemonic: 'SRA',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '0',\n      '0'\n    ],\n    addr: '0x2b',\n    operand1: 'E'\n  },\n  0x2c: {\n    mnemonic: 'SRA',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '0',\n      '0'\n    ],\n    addr: '0x2c',\n    operand1: 'H'\n  },\n  0x2d: {\n    mnemonic: 'SRA',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '0',\n      '0'\n    ],\n    addr: '0x2d',\n    operand1: 'L'\n  },\n  0x2e: {\n    mnemonic: 'SRA',\n    length: 2,\n    cycles: [\n      16\n    ],\n    flags: [\n      'Z',\n      '0',\n      '0',\n      '0'\n    ],\n    addr: '0x2e',\n    operand1: '(HL)'\n  },\n  0x2f: {\n    mnemonic: 'SRA',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '0',\n      '0'\n    ],\n    addr: '0x2f',\n    operand1: 'A'\n  },\n  0x30: {\n    mnemonic: 'SWAP',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '0',\n      '0'\n    ],\n    addr: '0x30',\n    operand1: 'B'\n  },\n  0x31: {\n    mnemonic: 'SWAP',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '0',\n      '0'\n    ],\n    addr: '0x31',\n    operand1: 'C'\n  },\n  0x32: {\n    mnemonic: 'SWAP',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '0',\n      '0'\n    ],\n    addr: '0x32',\n    operand1: 'D'\n  },\n  0x33: {\n    mnemonic: 'SWAP',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '0',\n      '0'\n    ],\n    addr: '0x33',\n    operand1: 'E'\n  },\n  0x34: {\n    mnemonic: 'SWAP',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '0',\n      '0'\n    ],\n    addr: '0x34',\n    operand1: 'H'\n  },\n  0x35: {\n    mnemonic: 'SWAP',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '0',\n      '0'\n    ],\n    addr: '0x35',\n    operand1: 'L'\n  },\n  0x36: {\n    mnemonic: 'SWAP',\n    length: 2,\n    cycles: [\n      16\n    ],\n    flags: [\n      'Z',\n      '0',\n      '0',\n      '0'\n    ],\n    addr: '0x36',\n    operand1: '(HL)'\n  },\n  0x37: {\n    mnemonic: 'SWAP',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '0',\n      '0'\n    ],\n    addr: '0x37',\n    operand1: 'A'\n  },\n  0x38: {\n    mnemonic: 'SRL',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '0',\n      'C'\n    ],\n    addr: '0x38',\n    operand1: 'B'\n  },\n  0x39: {\n    mnemonic: 'SRL',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '0',\n      'C'\n    ],\n    addr: '0x39',\n    operand1: 'C'\n  },\n  0x3a: {\n    mnemonic: 'SRL',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '0',\n      'C'\n    ],\n    addr: '0x3a',\n    operand1: 'D'\n  },\n  0x3b: {\n    mnemonic: 'SRL',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '0',\n      'C'\n    ],\n    addr: '0x3b',\n    operand1: 'E'\n  },\n  0x3c: {\n    mnemonic: 'SRL',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '0',\n      'C'\n    ],\n    addr: '0x3c',\n    operand1: 'H'\n  },\n  0x3d: {\n    mnemonic: 'SRL',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '0',\n      'C'\n    ],\n    addr: '0x3d',\n    operand1: 'L'\n  },\n  0x3e: {\n    mnemonic: 'SRL',\n    length: 2,\n    cycles: [\n      16\n    ],\n    flags: [\n      'Z',\n      '0',\n      '0',\n      'C'\n    ],\n    addr: '0x3e',\n    operand1: '(HL)'\n  },\n  0x3f: {\n    mnemonic: 'SRL',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '0',\n      'C'\n    ],\n    addr: '0x3f',\n    operand1: 'A'\n  },\n  0x40: {\n    mnemonic: 'BIT',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '1',\n      '-'\n    ],\n    addr: '0x40',\n    operand1: '0',\n    operand2: 'B'\n  },\n  0x41: {\n    mnemonic: 'BIT',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '1',\n      '-'\n    ],\n    addr: '0x41',\n    operand1: '0',\n    operand2: 'C'\n  },\n  0x42: {\n    mnemonic: 'BIT',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '1',\n      '-'\n    ],\n    addr: '0x42',\n    operand1: '0',\n    operand2: 'D'\n  },\n  0x43: {\n    mnemonic: 'BIT',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '1',\n      '-'\n    ],\n    addr: '0x43',\n    operand1: '0',\n    operand2: 'E'\n  },\n  0x44: {\n    mnemonic: 'BIT',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '1',\n      '-'\n    ],\n    addr: '0x44',\n    operand1: '0',\n    operand2: 'H'\n  },\n  0x45: {\n    mnemonic: 'BIT',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '1',\n      '-'\n    ],\n    addr: '0x45',\n    operand1: '0',\n    operand2: 'L'\n  },\n  0x46: {\n    mnemonic: 'BIT',\n    length: 2,\n    cycles: [\n      16\n    ],\n    flags: [\n      'Z',\n      '0',\n      '1',\n      '-'\n    ],\n    addr: '0x46',\n    operand1: '0',\n    operand2: '(HL)'\n  },\n  0x47: {\n    mnemonic: 'BIT',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '1',\n      '-'\n    ],\n    addr: '0x47',\n    operand1: '0',\n    operand2: 'A'\n  },\n  0x48: {\n    mnemonic: 'BIT',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '1',\n      '-'\n    ],\n    addr: '0x48',\n    operand1: '1',\n    operand2: 'B'\n  },\n  0x49: {\n    mnemonic: 'BIT',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '1',\n      '-'\n    ],\n    addr: '0x49',\n    operand1: '1',\n    operand2: 'C'\n  },\n  0x4a: {\n    mnemonic: 'BIT',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '1',\n      '-'\n    ],\n    addr: '0x4a',\n    operand1: '1',\n    operand2: 'D'\n  },\n  0x4b: {\n    mnemonic: 'BIT',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '1',\n      '-'\n    ],\n    addr: '0x4b',\n    operand1: '1',\n    operand2: 'E'\n  },\n  0x4c: {\n    mnemonic: 'BIT',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '1',\n      '-'\n    ],\n    addr: '0x4c',\n    operand1: '1',\n    operand2: 'H'\n  },\n  0x4d: {\n    mnemonic: 'BIT',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '1',\n      '-'\n    ],\n    addr: '0x4d',\n    operand1: '1',\n    operand2: 'L'\n  },\n  0x4e: {\n    mnemonic: 'BIT',\n    length: 2,\n    cycles: [\n      16\n    ],\n    flags: [\n      'Z',\n      '0',\n      '1',\n      '-'\n    ],\n    addr: '0x4e',\n    operand1: '1',\n    operand2: '(HL)'\n  },\n  0x4f: {\n    mnemonic: 'BIT',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '1',\n      '-'\n    ],\n    addr: '0x4f',\n    operand1: '1',\n    operand2: 'A'\n  },\n  0x50: {\n    mnemonic: 'BIT',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '1',\n      '-'\n    ],\n    addr: '0x50',\n    operand1: '2',\n    operand2: 'B'\n  },\n  0x51: {\n    mnemonic: 'BIT',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '1',\n      '-'\n    ],\n    addr: '0x51',\n    operand1: '2',\n    operand2: 'C'\n  },\n  0x52: {\n    mnemonic: 'BIT',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '1',\n      '-'\n    ],\n    addr: '0x52',\n    operand1: '2',\n    operand2: 'D'\n  },\n  0x53: {\n    mnemonic: 'BIT',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '1',\n      '-'\n    ],\n    addr: '0x53',\n    operand1: '2',\n    operand2: 'E'\n  },\n  0x54: {\n    mnemonic: 'BIT',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '1',\n      '-'\n    ],\n    addr: '0x54',\n    operand1: '2',\n    operand2: 'H'\n  },\n  0x55: {\n    mnemonic: 'BIT',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '1',\n      '-'\n    ],\n    addr: '0x55',\n    operand1: '2',\n    operand2: 'L'\n  },\n  0x56: {\n    mnemonic: 'BIT',\n    length: 2,\n    cycles: [\n      16\n    ],\n    flags: [\n      'Z',\n      '0',\n      '1',\n      '-'\n    ],\n    addr: '0x56',\n    operand1: '2',\n    operand2: '(HL)'\n  },\n  0x57: {\n    mnemonic: 'BIT',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '1',\n      '-'\n    ],\n    addr: '0x57',\n    operand1: '2',\n    operand2: 'A'\n  },\n  0x58: {\n    mnemonic: 'BIT',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '1',\n      '-'\n    ],\n    addr: '0x58',\n    operand1: '3',\n    operand2: 'B'\n  },\n  0x59: {\n    mnemonic: 'BIT',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '1',\n      '-'\n    ],\n    addr: '0x59',\n    operand1: '3',\n    operand2: 'C'\n  },\n  0x5a: {\n    mnemonic: 'BIT',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '1',\n      '-'\n    ],\n    addr: '0x5a',\n    operand1: '3',\n    operand2: 'D'\n  },\n  0x5b: {\n    mnemonic: 'BIT',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '1',\n      '-'\n    ],\n    addr: '0x5b',\n    operand1: '3',\n    operand2: 'E'\n  },\n  0x5c: {\n    mnemonic: 'BIT',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '1',\n      '-'\n    ],\n    addr: '0x5c',\n    operand1: '3',\n    operand2: 'H'\n  },\n  0x5d: {\n    mnemonic: 'BIT',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '1',\n      '-'\n    ],\n    addr: '0x5d',\n    operand1: '3',\n    operand2: 'L'\n  },\n  0x5e: {\n    mnemonic: 'BIT',\n    length: 2,\n    cycles: [\n      16\n    ],\n    flags: [\n      'Z',\n      '0',\n      '1',\n      '-'\n    ],\n    addr: '0x5e',\n    operand1: '3',\n    operand2: '(HL)'\n  },\n  0x5f: {\n    mnemonic: 'BIT',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '1',\n      '-'\n    ],\n    addr: '0x5f',\n    operand1: '3',\n    operand2: 'A'\n  },\n  0x60: {\n    mnemonic: 'BIT',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '1',\n      '-'\n    ],\n    addr: '0x60',\n    operand1: '4',\n    operand2: 'B'\n  },\n  0x61: {\n    mnemonic: 'BIT',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '1',\n      '-'\n    ],\n    addr: '0x61',\n    operand1: '4',\n    operand2: 'C'\n  },\n  0x62: {\n    mnemonic: 'BIT',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '1',\n      '-'\n    ],\n    addr: '0x62',\n    operand1: '4',\n    operand2: 'D'\n  },\n  0x63: {\n    mnemonic: 'BIT',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '1',\n      '-'\n    ],\n    addr: '0x63',\n    operand1: '4',\n    operand2: 'E'\n  },\n  0x64: {\n    mnemonic: 'BIT',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '1',\n      '-'\n    ],\n    addr: '0x64',\n    operand1: '4',\n    operand2: 'H'\n  },\n  0x65: {\n    mnemonic: 'BIT',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '1',\n      '-'\n    ],\n    addr: '0x65',\n    operand1: '4',\n    operand2: 'L'\n  },\n  0x66: {\n    mnemonic: 'BIT',\n    length: 2,\n    cycles: [\n      16\n    ],\n    flags: [\n      'Z',\n      '0',\n      '1',\n      '-'\n    ],\n    addr: '0x66',\n    operand1: '4',\n    operand2: '(HL)'\n  },\n  0x67: {\n    mnemonic: 'BIT',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '1',\n      '-'\n    ],\n    addr: '0x67',\n    operand1: '4',\n    operand2: 'A'\n  },\n  0x68: {\n    mnemonic: 'BIT',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '1',\n      '-'\n    ],\n    addr: '0x68',\n    operand1: '5',\n    operand2: 'B'\n  },\n  0x69: {\n    mnemonic: 'BIT',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '1',\n      '-'\n    ],\n    addr: '0x69',\n    operand1: '5',\n    operand2: 'C'\n  },\n  0x6a: {\n    mnemonic: 'BIT',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '1',\n      '-'\n    ],\n    addr: '0x6a',\n    operand1: '5',\n    operand2: 'D'\n  },\n  0x6b: {\n    mnemonic: 'BIT',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '1',\n      '-'\n    ],\n    addr: '0x6b',\n    operand1: '5',\n    operand2: 'E'\n  },\n  0x6c: {\n    mnemonic: 'BIT',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '1',\n      '-'\n    ],\n    addr: '0x6c',\n    operand1: '5',\n    operand2: 'H'\n  },\n  0x6d: {\n    mnemonic: 'BIT',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '1',\n      '-'\n    ],\n    addr: '0x6d',\n    operand1: '5',\n    operand2: 'L'\n  },\n  0x6e: {\n    mnemonic: 'BIT',\n    length: 2,\n    cycles: [\n      16\n    ],\n    flags: [\n      'Z',\n      '0',\n      '1',\n      '-'\n    ],\n    addr: '0x6e',\n    operand1: '5',\n    operand2: '(HL)'\n  },\n  0x6f: {\n    mnemonic: 'BIT',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '1',\n      '-'\n    ],\n    addr: '0x6f',\n    operand1: '5',\n    operand2: 'A'\n  },\n  0x70: {\n    mnemonic: 'BIT',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '1',\n      '-'\n    ],\n    addr: '0x70',\n    operand1: '6',\n    operand2: 'B'\n  },\n  0x71: {\n    mnemonic: 'BIT',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '1',\n      '-'\n    ],\n    addr: '0x71',\n    operand1: '6',\n    operand2: 'C'\n  },\n  0x72: {\n    mnemonic: 'BIT',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '1',\n      '-'\n    ],\n    addr: '0x72',\n    operand1: '6',\n    operand2: 'D'\n  },\n  0x73: {\n    mnemonic: 'BIT',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '1',\n      '-'\n    ],\n    addr: '0x73',\n    operand1: '6',\n    operand2: 'E'\n  },\n  0x74: {\n    mnemonic: 'BIT',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '1',\n      '-'\n    ],\n    addr: '0x74',\n    operand1: '6',\n    operand2: 'H'\n  },\n  0x75: {\n    mnemonic: 'BIT',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '1',\n      '-'\n    ],\n    addr: '0x75',\n    operand1: '6',\n    operand2: 'L'\n  },\n  0x76: {\n    mnemonic: 'BIT',\n    length: 2,\n    cycles: [\n      16\n    ],\n    flags: [\n      'Z',\n      '0',\n      '1',\n      '-'\n    ],\n    addr: '0x76',\n    operand1: '6',\n    operand2: '(HL)'\n  },\n  0x77: {\n    mnemonic: 'BIT',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '1',\n      '-'\n    ],\n    addr: '0x77',\n    operand1: '6',\n    operand2: 'A'\n  },\n  0x78: {\n    mnemonic: 'BIT',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '1',\n      '-'\n    ],\n    addr: '0x78',\n    operand1: '7',\n    operand2: 'B'\n  },\n  0x79: {\n    mnemonic: 'BIT',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '1',\n      '-'\n    ],\n    addr: '0x79',\n    operand1: '7',\n    operand2: 'C'\n  },\n  0x7a: {\n    mnemonic: 'BIT',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '1',\n      '-'\n    ],\n    addr: '0x7a',\n    operand1: '7',\n    operand2: 'D'\n  },\n  0x7b: {\n    mnemonic: 'BIT',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '1',\n      '-'\n    ],\n    addr: '0x7b',\n    operand1: '7',\n    operand2: 'E'\n  },\n  0x7c: {\n    mnemonic: 'BIT',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '1',\n      '-'\n    ],\n    addr: '0x7c',\n    operand1: '7',\n    operand2: 'H'\n  },\n  0x7d: {\n    mnemonic: 'BIT',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '1',\n      '-'\n    ],\n    addr: '0x7d',\n    operand1: '7',\n    operand2: 'L'\n  },\n  0x7e: {\n    mnemonic: 'BIT',\n    length: 2,\n    cycles: [\n      16\n    ],\n    flags: [\n      'Z',\n      '0',\n      '1',\n      '-'\n    ],\n    addr: '0x7e',\n    operand1: '7',\n    operand2: '(HL)'\n  },\n  0x7f: {\n    mnemonic: 'BIT',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      'Z',\n      '0',\n      '1',\n      '-'\n    ],\n    addr: '0x7f',\n    operand1: '7',\n    operand2: 'A'\n  },\n  0x80: {\n    mnemonic: 'RES',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x80',\n    operand1: '0',\n    operand2: 'B'\n  },\n  0x81: {\n    mnemonic: 'RES',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x81',\n    operand1: '0',\n    operand2: 'C'\n  },\n  0x82: {\n    mnemonic: 'RES',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x82',\n    operand1: '0',\n    operand2: 'D'\n  },\n  0x83: {\n    mnemonic: 'RES',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x83',\n    operand1: '0',\n    operand2: 'E'\n  },\n  0x84: {\n    mnemonic: 'RES',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x84',\n    operand1: '0',\n    operand2: 'H'\n  },\n  0x85: {\n    mnemonic: 'RES',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x85',\n    operand1: '0',\n    operand2: 'L'\n  },\n  0x86: {\n    mnemonic: 'RES',\n    length: 2,\n    cycles: [\n      16\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x86',\n    operand1: '0',\n    operand2: '(HL)'\n  },\n  0x87: {\n    mnemonic: 'RES',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x87',\n    operand1: '0',\n    operand2: 'A'\n  },\n  0x88: {\n    mnemonic: 'RES',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x88',\n    operand1: '1',\n    operand2: 'B'\n  },\n  0x89: {\n    mnemonic: 'RES',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x89',\n    operand1: '1',\n    operand2: 'C'\n  },\n  0x8a: {\n    mnemonic: 'RES',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x8a',\n    operand1: '1',\n    operand2: 'D'\n  },\n  0x8b: {\n    mnemonic: 'RES',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x8b',\n    operand1: '1',\n    operand2: 'E'\n  },\n  0x8c: {\n    mnemonic: 'RES',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x8c',\n    operand1: '1',\n    operand2: 'H'\n  },\n  0x8d: {\n    mnemonic: 'RES',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x8d',\n    operand1: '1',\n    operand2: 'L'\n  },\n  0x8e: {\n    mnemonic: 'RES',\n    length: 2,\n    cycles: [\n      16\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x8e',\n    operand1: '1',\n    operand2: '(HL)'\n  },\n  0x8f: {\n    mnemonic: 'RES',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x8f',\n    operand1: '1',\n    operand2: 'A'\n  },\n  0x90: {\n    mnemonic: 'RES',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x90',\n    operand1: '2',\n    operand2: 'B'\n  },\n  0x91: {\n    mnemonic: 'RES',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x91',\n    operand1: '2',\n    operand2: 'C'\n  },\n  0x92: {\n    mnemonic: 'RES',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x92',\n    operand1: '2',\n    operand2: 'D'\n  },\n  0x93: {\n    mnemonic: 'RES',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x93',\n    operand1: '2',\n    operand2: 'E'\n  },\n  0x94: {\n    mnemonic: 'RES',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x94',\n    operand1: '2',\n    operand2: 'H'\n  },\n  0x95: {\n    mnemonic: 'RES',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x95',\n    operand1: '2',\n    operand2: 'L'\n  },\n  0x96: {\n    mnemonic: 'RES',\n    length: 2,\n    cycles: [\n      16\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x96',\n    operand1: '2',\n    operand2: '(HL)'\n  },\n  0x97: {\n    mnemonic: 'RES',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x97',\n    operand1: '2',\n    operand2: 'A'\n  },\n  0x98: {\n    mnemonic: 'RES',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x98',\n    operand1: '3',\n    operand2: 'B'\n  },\n  0x99: {\n    mnemonic: 'RES',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x99',\n    operand1: '3',\n    operand2: 'C'\n  },\n  0x9a: {\n    mnemonic: 'RES',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x9a',\n    operand1: '3',\n    operand2: 'D'\n  },\n  0x9b: {\n    mnemonic: 'RES',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x9b',\n    operand1: '3',\n    operand2: 'E'\n  },\n  0x9c: {\n    mnemonic: 'RES',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x9c',\n    operand1: '3',\n    operand2: 'H'\n  },\n  0x9d: {\n    mnemonic: 'RES',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x9d',\n    operand1: '3',\n    operand2: 'L'\n  },\n  0x9e: {\n    mnemonic: 'RES',\n    length: 2,\n    cycles: [\n      16\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x9e',\n    operand1: '3',\n    operand2: '(HL)'\n  },\n  0x9f: {\n    mnemonic: 'RES',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0x9f',\n    operand1: '3',\n    operand2: 'A'\n  },\n  0xa0: {\n    mnemonic: 'RES',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xa0',\n    operand1: '4',\n    operand2: 'B'\n  },\n  0xa1: {\n    mnemonic: 'RES',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xa1',\n    operand1: '4',\n    operand2: 'C'\n  },\n  0xa2: {\n    mnemonic: 'RES',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xa2',\n    operand1: '4',\n    operand2: 'D'\n  },\n  0xa3: {\n    mnemonic: 'RES',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xa3',\n    operand1: '4',\n    operand2: 'E'\n  },\n  0xa4: {\n    mnemonic: 'RES',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xa4',\n    operand1: '4',\n    operand2: 'H'\n  },\n  0xa5: {\n    mnemonic: 'RES',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xa5',\n    operand1: '4',\n    operand2: 'L'\n  },\n  0xa6: {\n    mnemonic: 'RES',\n    length: 2,\n    cycles: [\n      16\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xa6',\n    operand1: '4',\n    operand2: '(HL)'\n  },\n  0xa7: {\n    mnemonic: 'RES',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xa7',\n    operand1: '4',\n    operand2: 'A'\n  },\n  0xa8: {\n    mnemonic: 'RES',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xa8',\n    operand1: '5',\n    operand2: 'B'\n  },\n  0xa9: {\n    mnemonic: 'RES',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xa9',\n    operand1: '5',\n    operand2: 'C'\n  },\n  0xaa: {\n    mnemonic: 'RES',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xaa',\n    operand1: '5',\n    operand2: 'D'\n  },\n  0xab: {\n    mnemonic: 'RES',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xab',\n    operand1: '5',\n    operand2: 'E'\n  },\n  0xac: {\n    mnemonic: 'RES',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xac',\n    operand1: '5',\n    operand2: 'H'\n  },\n  0xad: {\n    mnemonic: 'RES',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xad',\n    operand1: '5',\n    operand2: 'L'\n  },\n  0xae: {\n    mnemonic: 'RES',\n    length: 2,\n    cycles: [\n      16\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xae',\n    operand1: '5',\n    operand2: '(HL)'\n  },\n  0xaf: {\n    mnemonic: 'RES',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xaf',\n    operand1: '5',\n    operand2: 'A'\n  },\n  0xb0: {\n    mnemonic: 'RES',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xb0',\n    operand1: '6',\n    operand2: 'B'\n  },\n  0xb1: {\n    mnemonic: 'RES',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xb1',\n    operand1: '6',\n    operand2: 'C'\n  },\n  0xb2: {\n    mnemonic: 'RES',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xb2',\n    operand1: '6',\n    operand2: 'D'\n  },\n  0xb3: {\n    mnemonic: 'RES',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xb3',\n    operand1: '6',\n    operand2: 'E'\n  },\n  0xb4: {\n    mnemonic: 'RES',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xb4',\n    operand1: '6',\n    operand2: 'H'\n  },\n  0xb5: {\n    mnemonic: 'RES',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xb5',\n    operand1: '6',\n    operand2: 'L'\n  },\n  0xb6: {\n    mnemonic: 'RES',\n    length: 2,\n    cycles: [\n      16\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xb6',\n    operand1: '6',\n    operand2: '(HL)'\n  },\n  0xb7: {\n    mnemonic: 'RES',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xb7',\n    operand1: '6',\n    operand2: 'A'\n  },\n  0xb8: {\n    mnemonic: 'RES',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xb8',\n    operand1: '7',\n    operand2: 'B'\n  },\n  0xb9: {\n    mnemonic: 'RES',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xb9',\n    operand1: '7',\n    operand2: 'C'\n  },\n  0xba: {\n    mnemonic: 'RES',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xba',\n    operand1: '7',\n    operand2: 'D'\n  },\n  0xbb: {\n    mnemonic: 'RES',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xbb',\n    operand1: '7',\n    operand2: 'E'\n  },\n  0xbc: {\n    mnemonic: 'RES',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xbc',\n    operand1: '7',\n    operand2: 'H'\n  },\n  0xbd: {\n    mnemonic: 'RES',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xbd',\n    operand1: '7',\n    operand2: 'L'\n  },\n  0xbe: {\n    mnemonic: 'RES',\n    length: 2,\n    cycles: [\n      16\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xbe',\n    operand1: '7',\n    operand2: '(HL)'\n  },\n  0xbf: {\n    mnemonic: 'RES',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xbf',\n    operand1: '7',\n    operand2: 'A'\n  },\n  0xc0: {\n    mnemonic: 'SET',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xc0',\n    operand1: '0',\n    operand2: 'B'\n  },\n  0xc1: {\n    mnemonic: 'SET',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xc1',\n    operand1: '0',\n    operand2: 'C'\n  },\n  0xc2: {\n    mnemonic: 'SET',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xc2',\n    operand1: '0',\n    operand2: 'D'\n  },\n  0xc3: {\n    mnemonic: 'SET',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xc3',\n    operand1: '0',\n    operand2: 'E'\n  },\n  0xc4: {\n    mnemonic: 'SET',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xc4',\n    operand1: '0',\n    operand2: 'H'\n  },\n  0xc5: {\n    mnemonic: 'SET',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xc5',\n    operand1: '0',\n    operand2: 'L'\n  },\n  0xc6: {\n    mnemonic: 'SET',\n    length: 2,\n    cycles: [\n      16\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xc6',\n    operand1: '0',\n    operand2: '(HL)'\n  },\n  0xc7: {\n    mnemonic: 'SET',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xc7',\n    operand1: '0',\n    operand2: 'A'\n  },\n  0xc8: {\n    mnemonic: 'SET',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xc8',\n    operand1: '1',\n    operand2: 'B'\n  },\n  0xc9: {\n    mnemonic: 'SET',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xc9',\n    operand1: '1',\n    operand2: 'C'\n  },\n  0xca: {\n    mnemonic: 'SET',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xca',\n    operand1: '1',\n    operand2: 'D'\n  },\n  0xcb: {\n    mnemonic: 'SET',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xcb',\n    operand1: '1',\n    operand2: 'E'\n  },\n  0xcc: {\n    mnemonic: 'SET',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xcc',\n    operand1: '1',\n    operand2: 'H'\n  },\n  0xcd: {\n    mnemonic: 'SET',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xcd',\n    operand1: '1',\n    operand2: 'L'\n  },\n  0xce: {\n    mnemonic: 'SET',\n    length: 2,\n    cycles: [\n      16\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xce',\n    operand1: '1',\n    operand2: '(HL)'\n  },\n  0xcf: {\n    mnemonic: 'SET',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xcf',\n    operand1: '1',\n    operand2: 'A'\n  },\n  0xd0: {\n    mnemonic: 'SET',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xd0',\n    operand1: '2',\n    operand2: 'B'\n  },\n  0xd1: {\n    mnemonic: 'SET',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xd1',\n    operand1: '2',\n    operand2: 'C'\n  },\n  0xd2: {\n    mnemonic: 'SET',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xd2',\n    operand1: '2',\n    operand2: 'D'\n  },\n  0xd3: {\n    mnemonic: 'SET',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xd3',\n    operand1: '2',\n    operand2: 'E'\n  },\n  0xd4: {\n    mnemonic: 'SET',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xd4',\n    operand1: '2',\n    operand2: 'H'\n  },\n  0xd5: {\n    mnemonic: 'SET',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xd5',\n    operand1: '2',\n    operand2: 'L'\n  },\n  0xd6: {\n    mnemonic: 'SET',\n    length: 2,\n    cycles: [\n      16\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xd6',\n    operand1: '2',\n    operand2: '(HL)'\n  },\n  0xd7: {\n    mnemonic: 'SET',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xd7',\n    operand1: '2',\n    operand2: 'A'\n  },\n  0xd8: {\n    mnemonic: 'SET',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xd8',\n    operand1: '3',\n    operand2: 'B'\n  },\n  0xd9: {\n    mnemonic: 'SET',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xd9',\n    operand1: '3',\n    operand2: 'C'\n  },\n  0xda: {\n    mnemonic: 'SET',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xda',\n    operand1: '3',\n    operand2: 'D'\n  },\n  0xdb: {\n    mnemonic: 'SET',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xdb',\n    operand1: '3',\n    operand2: 'E'\n  },\n  0xdc: {\n    mnemonic: 'SET',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xdc',\n    operand1: '3',\n    operand2: 'H'\n  },\n  0xdd: {\n    mnemonic: 'SET',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xdd',\n    operand1: '3',\n    operand2: 'L'\n  },\n  0xde: {\n    mnemonic: 'SET',\n    length: 2,\n    cycles: [\n      16\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xde',\n    operand1: '3',\n    operand2: '(HL)'\n  },\n  0xdf: {\n    mnemonic: 'SET',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xdf',\n    operand1: '3',\n    operand2: 'A'\n  },\n  0xe0: {\n    mnemonic: 'SET',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xe0',\n    operand1: '4',\n    operand2: 'B'\n  },\n  0xe1: {\n    mnemonic: 'SET',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xe1',\n    operand1: '4',\n    operand2: 'C'\n  },\n  0xe2: {\n    mnemonic: 'SET',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xe2',\n    operand1: '4',\n    operand2: 'D'\n  },\n  0xe3: {\n    mnemonic: 'SET',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xe3',\n    operand1: '4',\n    operand2: 'E'\n  },\n  0xe4: {\n    mnemonic: 'SET',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xe4',\n    operand1: '4',\n    operand2: 'H'\n  },\n  0xe5: {\n    mnemonic: 'SET',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xe5',\n    operand1: '4',\n    operand2: 'L'\n  },\n  0xe6: {\n    mnemonic: 'SET',\n    length: 2,\n    cycles: [\n      16\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xe6',\n    operand1: '4',\n    operand2: '(HL)'\n  },\n  0xe7: {\n    mnemonic: 'SET',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xe7',\n    operand1: '4',\n    operand2: 'A'\n  },\n  0xe8: {\n    mnemonic: 'SET',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xe8',\n    operand1: '5',\n    operand2: 'B'\n  },\n  0xe9: {\n    mnemonic: 'SET',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xe9',\n    operand1: '5',\n    operand2: 'C'\n  },\n  0xea: {\n    mnemonic: 'SET',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xea',\n    operand1: '5',\n    operand2: 'D'\n  },\n  0xeb: {\n    mnemonic: 'SET',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xeb',\n    operand1: '5',\n    operand2: 'E'\n  },\n  0xec: {\n    mnemonic: 'SET',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xec',\n    operand1: '5',\n    operand2: 'H'\n  },\n  0xed: {\n    mnemonic: 'SET',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xed',\n    operand1: '5',\n    operand2: 'L'\n  },\n  0xee: {\n    mnemonic: 'SET',\n    length: 2,\n    cycles: [\n      16\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xee',\n    operand1: '5',\n    operand2: '(HL)'\n  },\n  0xef: {\n    mnemonic: 'SET',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xef',\n    operand1: '5',\n    operand2: 'A'\n  },\n  0xf0: {\n    mnemonic: 'SET',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xf0',\n    operand1: '6',\n    operand2: 'B'\n  },\n  0xf1: {\n    mnemonic: 'SET',\n    length: 2,\n    cycles: [\n      8\n    ],\n    lags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xf1',\n    operand1: '6',\n    operand2: 'C'\n  },\n  0xf2: {\n    mnemonic: 'SET',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xf2',\n    operand1: '6',\n    operand2: 'D'\n  },\n  0xf3: {\n    mnemonic: 'SET',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xf3',\n    operand1: '6',\n    operand2: 'E'\n  },\n  0xf4: {\n    mnemonic: 'SET',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xf4',\n    operand1: '6',\n    operand2: 'H'\n  },\n  0xf5: {\n    mnemonic: 'SET',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xf5',\n    operand1: '6',\n    operand2: 'L'\n  },\n  0xf6: {\n    mnemonic: 'SET',\n    length: 2,\n    cycles: [\n      16\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xf6',\n    operand1: '6',\n    operand2: '(HL)'\n  },\n  0xf7: {\n    mnemonic: 'SET',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xf7',\n    operand1: '6',\n    operand2: 'A'\n  },\n  xf8: {\n    mnemonic: 'SET',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xf8',\n    operand1: '7',\n    operand2: 'B'\n  },\n  0xf9: {\n    mnemonic: 'SET',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xf9',\n    operand1: '7',\n    operand2: 'C'\n  },\n  0xfa: {\n    mnemonic: 'SET',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xfa',\n    operand1: '7',\n    operand2: 'D'\n  },\n  0xfb: {\n    mnemonic: 'SET',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xfb',\n    operand1: '7',\n    operand2: 'E'\n  },\n  0xfc: {\n    mnemonic: 'SET',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xfc',\n    operand1: '7',\n    operand2: 'H'\n  },\n  0xfd: {\n    mnemonic: 'SET',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xfd',\n    operand1: '7',\n    operand2: 'L'\n  },\n  0xfe: {\n    mnemonic: 'SET',\n    length: 2,\n    cycles: [\n      16\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xfe',\n    operand1: '7',\n    operand2: '(HL)',\n  },\n  0xff: {\n    nemonic: 'SET',\n    length: 2,\n    cycles: [\n      8\n    ],\n    flags: [\n      '-',\n      '-',\n      '-',\n      '-'\n    ],\n    addr: '0xff',\n    operand1: '7',\n    operand2: 'A',\n  }\n};\n/* harmony export (immutable) */ __webpack_exports__[\"OPCODE_CB\"] = OPCODE_CB;\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbnN0L29wY29kZS5qcz81M2Q3Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBPUENPREUgPSB7XG4gIC8vIExlbmd0aDogMVxuICAweDI6IHtcbiAgICBtbmVtb25pYzogJ0xEJyxcbiAgICBsZW5ndGg6IDEsXG4gICAgY3ljbGVzOiBbXG4gICAgICA4XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nXG4gICAgXSxcbiAgICBhZGRyOiAnMHgyJyxcbiAgICBvcGVyYW5kMTogJyhCQyknLFxuICAgIG9wZXJhbmQyOiAnQSdcbiAgfSxcbiAgMHg5OiB7XG4gICAgbW5lbW9uaWM6ICdBREQnLFxuICAgIGxlbmd0aDogMSxcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnMCcsXG4gICAgICAnSCcsXG4gICAgICAnQydcbiAgICBdLFxuICAgIGFkZHI6ICcweDknLFxuICAgIG9wZXJhbmQxOiAnSEwnLFxuICAgIG9wZXJhbmQyOiAnQkMnXG4gIH0sXG4gIDB4YToge1xuICAgIG1uZW1vbmljOiAnTEQnLFxuICAgIGxlbmd0aDogMSxcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweGEnLFxuICAgIG9wZXJhbmQxOiAnQScsXG4gICAgb3BlcmFuZDI6ICcoQkMpJ1xuICB9LFxuICAweDEyOiB7XG4gICAgbW5lbW9uaWM6ICdMRCcsXG4gICAgbGVuZ3RoOiAxLFxuICAgIGN5Y2xlczogW1xuICAgICAgOFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4MTInLFxuICAgIG9wZXJhbmQxOiAnKERFKScsXG4gICAgb3BlcmFuZDI6ICdBJ1xuICB9LFxuICAweDE5OiB7XG4gICAgbW5lbW9uaWM6ICdBREQnLFxuICAgIGxlbmd0aDogMSxcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnMCcsXG4gICAgICAnSCcsXG4gICAgICAnQydcbiAgICBdLFxuICAgIGFkZHI6ICcweDE5JyxcbiAgICBvcGVyYW5kMTogJ0hMJyxcbiAgICBvcGVyYW5kMjogJ0RFJ1xuICB9LFxuICAweDFhOiB7XG4gICAgbW5lbW9uaWM6ICdMRCcsXG4gICAgbGVuZ3RoOiAxLFxuICAgIGN5Y2xlczogW1xuICAgICAgOFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4MWEnLFxuICAgIG9wZXJhbmQxOiAnQScsXG4gICAgb3BlcmFuZDI6ICcoREUpJ1xuICB9LFxuICAweDIyOiB7XG4gICAgbW5lbW9uaWM6ICdMRCcsXG4gICAgbGVuZ3RoOiAxLFxuICAgIGN5Y2xlczogW1xuICAgICAgOFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4MjInLFxuICAgIG9wZXJhbmQxOiAnKEhMKyknLFxuICAgIG9wZXJhbmQyOiAnQSdcbiAgfSxcbiAgMHgyOToge1xuICAgIG1uZW1vbmljOiAnQUREJyxcbiAgICBsZW5ndGg6IDEsXG4gICAgY3ljbGVzOiBbXG4gICAgICA4XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJy0nLFxuICAgICAgJzAnLFxuICAgICAgJ0gnLFxuICAgICAgJ0MnXG4gICAgXSxcbiAgICBhZGRyOiAnMHgyOScsXG4gICAgb3BlcmFuZDE6ICdITCcsXG4gICAgb3BlcmFuZDI6ICdITCdcbiAgfSxcbiAgMHgyYToge1xuICAgIG1uZW1vbmljOiAnTEQnLFxuICAgIGxlbmd0aDogMSxcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDJhJyxcbiAgICBvcGVyYW5kMTogJ0EnLFxuICAgIG9wZXJhbmQyOiAnKEhMKyknXG4gIH0sXG4gIDB4MzI6IHtcbiAgICBtbmVtb25pYzogJ0xEJyxcbiAgICBsZW5ndGg6IDEsXG4gICAgY3ljbGVzOiBbXG4gICAgICA4XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nXG4gICAgXSxcbiAgICBhZGRyOiAnMHgzMicsXG4gICAgb3BlcmFuZDE6ICcoSEwtKScsXG4gICAgb3BlcmFuZDI6ICdBJ1xuICB9LFxuICAweDM5OiB7XG4gICAgbW5lbW9uaWM6ICdBREQnLFxuICAgIGxlbmd0aDogMSxcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnMCcsXG4gICAgICAnSCcsXG4gICAgICAnQydcbiAgICBdLFxuICAgIGFkZHI6ICcweDM5JyxcbiAgICBvcGVyYW5kMTogJ0hMJyxcbiAgICBvcGVyYW5kMjogJ1NQJ1xuICB9LFxuICAweDNhOiB7XG4gICAgbW5lbW9uaWM6ICdMRCcsXG4gICAgbGVuZ3RoOiAxLFxuICAgIGN5Y2xlczogW1xuICAgICAgOFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4M2EnLFxuICAgIG9wZXJhbmQxOiAnQScsXG4gICAgb3BlcmFuZDI6ICcoSEwtKSdcbiAgfSxcbiAgMHg0MDoge1xuICAgIG1uZW1vbmljOiAnTEQnLFxuICAgIGxlbmd0aDogMSxcbiAgICBjeWNsZXM6IFtcbiAgICAgIDRcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDQwJyxcbiAgICBvcGVyYW5kMTogJ0InLFxuICAgIG9wZXJhbmQyOiAnQidcbiAgfSxcbiAgMHg0MToge1xuICAgIG1uZW1vbmljOiAnTEQnLFxuICAgIGxlbmd0aDogMSxcbiAgICBjeWNsZXM6IFtcbiAgICAgIDRcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDQxJyxcbiAgICBvcGVyYW5kMTogJ0InLFxuICAgIG9wZXJhbmQyOiAnQydcbiAgfSxcbiAgMHg0Mjoge1xuICAgIG1uZW1vbmljOiAnTEQnLFxuICAgIGxlbmd0aDogMSxcbiAgICBjeWNsZXM6IFtcbiAgICAgIDRcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDQyJyxcbiAgICBvcGVyYW5kMTogJ0InLFxuICAgIG9wZXJhbmQyOiAnRCdcbiAgfSxcbiAgMHg0Mzoge1xuICAgIG1uZW1vbmljOiAnTEQnLFxuICAgIGxlbmd0aDogMSxcbiAgICBjeWNsZXM6IFtcbiAgICAgIDRcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDQzJyxcbiAgICBvcGVyYW5kMTogJ0InLFxuICAgIG9wZXJhbmQyOiAnRSdcbiAgfSxcbiAgMHg0NDoge1xuICAgIG1uZW1vbmljOiAnTEQnLFxuICAgIGxlbmd0aDogMSxcbiAgICBjeWNsZXM6IFtcbiAgICAgIDRcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDQ0JyxcbiAgICBvcGVyYW5kMTogJ0InLFxuICAgIG9wZXJhbmQyOiAnSCdcbiAgfSxcbiAgMHg0NToge1xuICAgIG1uZW1vbmljOiAnTEQnLFxuICAgIGxlbmd0aDogMSxcbiAgICBjeWNsZXM6IFtcbiAgICAgIDRcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDQ1JyxcbiAgICBvcGVyYW5kMTogJ0InLFxuICAgIG9wZXJhbmQyOiAnTCdcbiAgfSxcbiAgMHg0Njoge1xuICAgIG1uZW1vbmljOiAnTEQnLFxuICAgIGxlbmd0aDogMSxcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDQ2JyxcbiAgICBvcGVyYW5kMTogJ0InLFxuICAgIG9wZXJhbmQyOiAnKEhMKSdcbiAgfSxcbiAgMHg0Nzoge1xuICAgIG1uZW1vbmljOiAnTEQnLFxuICAgIGxlbmd0aDogMSxcbiAgICBjeWNsZXM6IFtcbiAgICAgIDRcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDQ3JyxcbiAgICBvcGVyYW5kMTogJ0InLFxuICAgIG9wZXJhbmQyOiAnQSdcbiAgfSxcbiAgMHg0ODoge1xuICAgIG1uZW1vbmljOiAnTEQnLFxuICAgIGxlbmd0aDogMSxcbiAgICBjeWNsZXM6IFtcbiAgICAgIDRcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDQ4JyxcbiAgICBvcGVyYW5kMTogJ0MnLFxuICAgIG9wZXJhbmQyOiAnQidcbiAgfSxcbiAgMHg0OToge1xuICAgIG1uZW1vbmljOiAnTEQnLFxuICAgIGxlbmd0aDogMSxcbiAgICBjeWNsZXM6IFtcbiAgICAgIDRcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDQ5JyxcbiAgICBvcGVyYW5kMTogJ0MnLFxuICAgIG9wZXJhbmQyOiAnQydcbiAgfSxcbiAgMHg0YToge1xuICAgIG1uZW1vbmljOiAnTEQnLFxuICAgIGxlbmd0aDogMSxcbiAgICBjeWNsZXM6IFtcbiAgICAgIDRcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDRhJyxcbiAgICBvcGVyYW5kMTogJ0MnLFxuICAgIG9wZXJhbmQyOiAnRCdcbiAgfSxcbiAgMHg0Yjoge1xuICAgIG1uZW1vbmljOiAnTEQnLFxuICAgIGxlbmd0aDogMSxcbiAgICBjeWNsZXM6IFtcbiAgICAgIDRcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDRiJyxcbiAgICBvcGVyYW5kMTogJ0MnLFxuICAgIG9wZXJhbmQyOiAnRSdcbiAgfSxcbiAgMHg0Yzoge1xuICAgIG1uZW1vbmljOiAnTEQnLFxuICAgIGxlbmd0aDogMSxcbiAgICBjeWNsZXM6IFtcbiAgICAgIDRcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDRjJyxcbiAgICBvcGVyYW5kMTogJ0MnLFxuICAgIG9wZXJhbmQyOiAnSCdcbiAgfSxcbiAgMHg0ZDoge1xuICAgIG1uZW1vbmljOiAnTEQnLFxuICAgIGxlbmd0aDogMSxcbiAgICBjeWNsZXM6IFtcbiAgICAgIDRcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDRkJyxcbiAgICBvcGVyYW5kMTogJ0MnLFxuICAgIG9wZXJhbmQyOiAnTCdcbiAgfSxcbiAgMHg0ZToge1xuICAgIG1uZW1vbmljOiAnTEQnLFxuICAgIGxlbmd0aDogMSxcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDRlJyxcbiAgICBvcGVyYW5kMTogJ0MnLFxuICAgIG9wZXJhbmQyOiAnKEhMKSdcbiAgfSxcbiAgMHg0Zjoge1xuICAgIG1uZW1vbmljOiAnTEQnLFxuICAgIGxlbmd0aDogMSxcbiAgICBjeWNsZXM6IFtcbiAgICAgIDRcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDRmJyxcbiAgICBvcGVyYW5kMTogJ0MnLFxuICAgIG9wZXJhbmQyOiAnQSdcbiAgfSxcbiAgMHg1MDoge1xuICAgIG1uZW1vbmljOiAnTEQnLFxuICAgIGxlbmd0aDogMSxcbiAgICBjeWNsZXM6IFtcbiAgICAgIDRcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDUwJyxcbiAgICBvcGVyYW5kMTogJ0QnLFxuICAgIG9wZXJhbmQyOiAnQidcbiAgfSxcbiAgMHg1MToge1xuICAgIG1uZW1vbmljOiAnTEQnLFxuICAgIGxlbmd0aDogMSxcbiAgICBjeWNsZXM6IFtcbiAgICAgIDRcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDUxJyxcbiAgICBvcGVyYW5kMTogJ0QnLFxuICAgIG9wZXJhbmQyOiAnQydcbiAgfSxcbiAgMHg1Mjoge1xuICAgIG1uZW1vbmljOiAnTEQnLFxuICAgIGxlbmd0aDogMSxcbiAgICBjeWNsZXM6IFtcbiAgICAgIDRcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDUyJyxcbiAgICBvcGVyYW5kMTogJ0QnLFxuICAgIG9wZXJhbmQyOiAnRCdcbiAgfSxcbiAgMHg1Mzoge1xuICAgIG1uZW1vbmljOiAnTEQnLFxuICAgIGxlbmd0aDogMSxcbiAgICBjeWNsZXM6IFtcbiAgICAgIDRcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDUzJyxcbiAgICBvcGVyYW5kMTogJ0QnLFxuICAgIG9wZXJhbmQyOiAnRSdcbiAgfSxcbiAgMHg1NDoge1xuICAgIG1uZW1vbmljOiAnTEQnLFxuICAgIGxlbmd0aDogMSxcbiAgICBjeWNsZXM6IFtcbiAgICAgIDRcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDU0JyxcbiAgICBvcGVyYW5kMTogJ0QnLFxuICAgIG9wZXJhbmQyOiAnSCdcbiAgfSxcbiAgMHg1NToge1xuICAgIG1uZW1vbmljOiAnTEQnLFxuICAgIGxlbmd0aDogMSxcbiAgICBjeWNsZXM6IFtcbiAgICAgIDRcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDU1JyxcbiAgICBvcGVyYW5kMTogJ0QnLFxuICAgIG9wZXJhbmQyOiAnTCdcbiAgfSxcbiAgMHg1Njoge1xuICAgIG1uZW1vbmljOiAnTEQnLFxuICAgIGxlbmd0aDogMSxcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDU2JyxcbiAgICBvcGVyYW5kMTogJ0QnLFxuICAgIG9wZXJhbmQyOiAnKEhMKSdcbiAgfSxcbiAgMHg1Nzoge1xuICAgIG1uZW1vbmljOiAnTEQnLFxuICAgIGxlbmd0aDogMSxcbiAgICBjeWNsZXM6IFtcbiAgICAgIDRcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDU3JyxcbiAgICBvcGVyYW5kMTogJ0QnLFxuICAgIG9wZXJhbmQyOiAnQSdcbiAgfSxcbiAgMHg1ODoge1xuICAgIG1uZW1vbmljOiAnTEQnLFxuICAgIGxlbmd0aDogMSxcbiAgICBjeWNsZXM6IFtcbiAgICAgIDRcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDU4JyxcbiAgICBvcGVyYW5kMTogJ0UnLFxuICAgIG9wZXJhbmQyOiAnQidcbiAgfSxcbiAgMHg1OToge1xuICAgIG1uZW1vbmljOiAnTEQnLFxuICAgIGxlbmd0aDogMSxcbiAgICBjeWNsZXM6IFtcbiAgICAgIDRcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDU5JyxcbiAgICBvcGVyYW5kMTogJ0UnLFxuICAgIG9wZXJhbmQyOiAnQydcbiAgfSxcbiAgMHg1YToge1xuICAgIG1uZW1vbmljOiAnTEQnLFxuICAgIGxlbmd0aDogMSxcbiAgICBjeWNsZXM6IFtcbiAgICAgIDRcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDVhJyxcbiAgICBvcGVyYW5kMTogJ0UnLFxuICAgIG9wZXJhbmQyOiAnRCdcbiAgfSxcbiAgMHg1Yjoge1xuICAgIG1uZW1vbmljOiAnTEQnLFxuICAgIGxlbmd0aDogMSxcbiAgICBjeWNsZXM6IFtcbiAgICAgIDRcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDViJyxcbiAgICBvcGVyYW5kMTogJ0UnLFxuICAgIG9wZXJhbmQyOiAnRSdcbiAgfSxcbiAgMHg1Yzoge1xuICAgIG1uZW1vbmljOiAnTEQnLFxuICAgIGxlbmd0aDogMSxcbiAgICBjeWNsZXM6IFtcbiAgICAgIDRcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDVjJyxcbiAgICBvcGVyYW5kMTogJ0UnLFxuICAgIG9wZXJhbmQyOiAnSCdcbiAgfSxcbiAgMHg1ZDoge1xuICAgIG1uZW1vbmljOiAnTEQnLFxuICAgIGxlbmd0aDogMSxcbiAgICBjeWNsZXM6IFtcbiAgICAgIDRcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDVkJyxcbiAgICBvcGVyYW5kMTogJ0UnLFxuICAgIG9wZXJhbmQyOiAnTCdcbiAgfSxcbiAgMHg1ZToge1xuICAgIG1uZW1vbmljOiAnTEQnLFxuICAgIGxlbmd0aDogMSxcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDVlJyxcbiAgICBvcGVyYW5kMTogJ0UnLFxuICAgIG9wZXJhbmQyOiAnKEhMKSdcbiAgfSxcbiAgMHg1Zjoge1xuICAgIG1uZW1vbmljOiAnTEQnLFxuICAgIGxlbmd0aDogMSxcbiAgICBjeWNsZXM6IFtcbiAgICAgIDRcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDVmJyxcbiAgICBvcGVyYW5kMTogJ0UnLFxuICAgIG9wZXJhbmQyOiAnQSdcbiAgfSxcbiAgMHg2MDoge1xuICAgIG1uZW1vbmljOiAnTEQnLFxuICAgIGxlbmd0aDogMSxcbiAgICBjeWNsZXM6IFtcbiAgICAgIDRcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDYwJyxcbiAgICBvcGVyYW5kMTogJ0gnLFxuICAgIG9wZXJhbmQyOiAnQidcbiAgfSxcbiAgMHg2MToge1xuICAgIG1uZW1vbmljOiAnTEQnLFxuICAgIGxlbmd0aDogMSxcbiAgICBjeWNsZXM6IFtcbiAgICAgIDRcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDYxJyxcbiAgICBvcGVyYW5kMTogJ0gnLFxuICAgIG9wZXJhbmQyOiAnQydcbiAgfSxcbiAgMHg2Mjoge1xuICAgIG1uZW1vbmljOiAnTEQnLFxuICAgIGxlbmd0aDogMSxcbiAgICBjeWNsZXM6IFtcbiAgICAgIDRcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDYyJyxcbiAgICBvcGVyYW5kMTogJ0gnLFxuICAgIG9wZXJhbmQyOiAnRCdcbiAgfSxcbiAgMHg2Mzoge1xuICAgIG1uZW1vbmljOiAnTEQnLFxuICAgIGxlbmd0aDogMSxcbiAgICBjeWNsZXM6IFtcbiAgICAgIDRcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDYzJyxcbiAgICBvcGVyYW5kMTogJ0gnLFxuICAgIG9wZXJhbmQyOiAnRSdcbiAgfSxcbiAgMHg2NDoge1xuICAgIG1uZW1vbmljOiAnTEQnLFxuICAgIGxlbmd0aDogMSxcbiAgICBjeWNsZXM6IFtcbiAgICAgIDRcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDY0JyxcbiAgICBvcGVyYW5kMTogJ0gnLFxuICAgIG9wZXJhbmQyOiAnSCdcbiAgfSxcbiAgMHg2NToge1xuICAgIG1uZW1vbmljOiAnTEQnLFxuICAgIGxlbmd0aDogMSxcbiAgICBjeWNsZXM6IFtcbiAgICAgIDRcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDY1JyxcbiAgICBvcGVyYW5kMTogJ0gnLFxuICAgIG9wZXJhbmQyOiAnTCdcbiAgfSxcbiAgMHg2Njoge1xuICAgIG1uZW1vbmljOiAnTEQnLFxuICAgIGxlbmd0aDogMSxcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDY2JyxcbiAgICBvcGVyYW5kMTogJ0gnLFxuICAgIG9wZXJhbmQyOiAnKEhMKSdcbiAgfSxcbiAgMHg2Nzoge1xuICAgIG1uZW1vbmljOiAnTEQnLFxuICAgIGxlbmd0aDogMSxcbiAgICBjeWNsZXM6IFtcbiAgICAgIDRcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDY3JyxcbiAgICBvcGVyYW5kMTogJ0gnLFxuICAgIG9wZXJhbmQyOiAnQSdcbiAgfSxcbiAgMHg2ODoge1xuICAgIG1uZW1vbmljOiAnTEQnLFxuICAgIGxlbmd0aDogMSxcbiAgICBjeWNsZXM6IFtcbiAgICAgIDRcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDY4JyxcbiAgICBvcGVyYW5kMTogJ0wnLFxuICAgIG9wZXJhbmQyOiAnQidcbiAgfSxcbiAgMHg2OToge1xuICAgIG1uZW1vbmljOiAnTEQnLFxuICAgIGxlbmd0aDogMSxcbiAgICBjeWNsZXM6IFtcbiAgICAgIDRcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDY5JyxcbiAgICBvcGVyYW5kMTogJ0wnLFxuICAgIG9wZXJhbmQyOiAnQydcbiAgfSxcbiAgMHg2YToge1xuICAgIG1uZW1vbmljOiAnTEQnLFxuICAgIGxlbmd0aDogMSxcbiAgICBjeWNsZXM6IFtcbiAgICAgIDRcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDZhJyxcbiAgICBvcGVyYW5kMTogJ0wnLFxuICAgIG9wZXJhbmQyOiAnRCdcbiAgfSxcbiAgMHg2Yjoge1xuICAgIG1uZW1vbmljOiAnTEQnLFxuICAgIGxlbmd0aDogMSxcbiAgICBjeWNsZXM6IFtcbiAgICAgIDRcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDZiJyxcbiAgICBvcGVyYW5kMTogJ0wnLFxuICAgIG9wZXJhbmQyOiAnRSdcbiAgfSxcbiAgMHg2Yzoge1xuICAgIG1uZW1vbmljOiAnTEQnLFxuICAgIGxlbmd0aDogMSxcbiAgICBjeWNsZXM6IFtcbiAgICAgIDRcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDZjJyxcbiAgICBvcGVyYW5kMTogJ0wnLFxuICAgIG9wZXJhbmQyOiAnSCdcbiAgfSxcbiAgMHg2ZDoge1xuICAgIG1uZW1vbmljOiAnTEQnLFxuICAgIGxlbmd0aDogMSxcbiAgICBjeWNsZXM6IFtcbiAgICAgIDRcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDZkJyxcbiAgICBvcGVyYW5kMTogJ0wnLFxuICAgIG9wZXJhbmQyOiAnTCdcbiAgfSxcbiAgMHg2ZToge1xuICAgIG1uZW1vbmljOiAnTEQnLFxuICAgIGxlbmd0aDogMSxcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDZlJyxcbiAgICBvcGVyYW5kMTogJ0wnLFxuICAgIG9wZXJhbmQyOiAnKEhMKSdcbiAgfSxcbiAgMHg2Zjoge1xuICAgIG1uZW1vbmljOiAnTEQnLFxuICAgIGxlbmd0aDogMSxcbiAgICBjeWNsZXM6IFtcbiAgICAgIDRcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDZmJyxcbiAgICBvcGVyYW5kMTogJ0wnLFxuICAgIG9wZXJhbmQyOiAnQSdcbiAgfSxcbiAgMHg3MDoge1xuICAgIG1uZW1vbmljOiAnTEQnLFxuICAgIGxlbmd0aDogMSxcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDcwJyxcbiAgICBvcGVyYW5kMTogJyhITCknLFxuICAgIG9wZXJhbmQyOiAnQidcbiAgfSxcbiAgMHg3MToge1xuICAgIG1uZW1vbmljOiAnTEQnLFxuICAgIGxlbmd0aDogMSxcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDcxJyxcbiAgICBvcGVyYW5kMTogJyhITCknLFxuICAgIG9wZXJhbmQyOiAnQydcbiAgfSxcbiAgMHg3Mjoge1xuICAgIG1uZW1vbmljOiAnTEQnLFxuICAgIGxlbmd0aDogMSxcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDcyJyxcbiAgICBvcGVyYW5kMTogJyhITCknLFxuICAgIG9wZXJhbmQyOiAnRCdcbiAgfSxcbiAgMHg3Mzoge1xuICAgIG1uZW1vbmljOiAnTEQnLFxuICAgIGxlbmd0aDogMSxcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDczJyxcbiAgICBvcGVyYW5kMTogJyhITCknLFxuICAgIG9wZXJhbmQyOiAnRSdcbiAgfSxcbiAgMHg3NDoge1xuICAgIG1uZW1vbmljOiAnTEQnLFxuICAgIGxlbmd0aDogMSxcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDc0JyxcbiAgICBvcGVyYW5kMTogJyhITCknLFxuICAgIG9wZXJhbmQyOiAnSCdcbiAgfSxcbiAgMHg3NToge1xuICAgIG1uZW1vbmljOiAnTEQnLFxuICAgIGxlbmd0aDogMSxcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDc1JyxcbiAgICBvcGVyYW5kMTogJyhITCknLFxuICAgIG9wZXJhbmQyOiAnTCdcbiAgfSxcbiAgMHg3Njoge1xuICAgIG1uZW1vbmljOiAnSEFMVCcsXG4gICAgbGVuZ3RoOiAxLFxuICAgIGN5Y2xlczogW1xuICAgICAgNFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4NzYnXG4gIH0sXG4gIDB4Nzc6IHtcbiAgICBtbmVtb25pYzogJ0xEJyxcbiAgICBsZW5ndGg6IDEsXG4gICAgY3ljbGVzOiBbXG4gICAgICA4XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nXG4gICAgXSxcbiAgICBhZGRyOiAnMHg3NycsXG4gICAgb3BlcmFuZDE6ICcoSEwpJyxcbiAgICBvcGVyYW5kMjogJ0EnXG4gIH0sXG4gIDB4Nzg6IHtcbiAgICBtbmVtb25pYzogJ0xEJyxcbiAgICBsZW5ndGg6IDEsXG4gICAgY3ljbGVzOiBbXG4gICAgICA0XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nXG4gICAgXSxcbiAgICBhZGRyOiAnMHg3OCcsXG4gICAgb3BlcmFuZDE6ICdBJyxcbiAgICBvcGVyYW5kMjogJ0InXG4gIH0sXG4gIDB4Nzk6IHtcbiAgICBtbmVtb25pYzogJ0xEJyxcbiAgICBsZW5ndGg6IDEsXG4gICAgY3ljbGVzOiBbXG4gICAgICA0XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nXG4gICAgXSxcbiAgICBhZGRyOiAnMHg3OScsXG4gICAgb3BlcmFuZDE6ICdBJyxcbiAgICBvcGVyYW5kMjogJ0MnXG4gIH0sXG4gIDB4N2E6IHtcbiAgICBtbmVtb25pYzogJ0xEJyxcbiAgICBsZW5ndGg6IDEsXG4gICAgY3ljbGVzOiBbXG4gICAgICA0XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nXG4gICAgXSxcbiAgICBhZGRyOiAnMHg3YScsXG4gICAgb3BlcmFuZDE6ICdBJyxcbiAgICBvcGVyYW5kMjogJ0QnXG4gIH0sXG4gIDB4N2I6IHtcbiAgICBtbmVtb25pYzogJ0xEJyxcbiAgICBsZW5ndGg6IDEsXG4gICAgY3ljbGVzOiBbXG4gICAgICA0XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nXG4gICAgXSxcbiAgICBhZGRyOiAnMHg3YicsXG4gICAgb3BlcmFuZDE6ICdBJyxcbiAgICBvcGVyYW5kMjogJ0UnXG4gIH0sXG4gIDB4N2M6IHtcbiAgICBtbmVtb25pYzogJ0xEJyxcbiAgICBsZW5ndGg6IDEsXG4gICAgY3ljbGVzOiBbXG4gICAgICA0XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nXG4gICAgXSxcbiAgICBhZGRyOiAnMHg3YycsXG4gICAgb3BlcmFuZDE6ICdBJyxcbiAgICBvcGVyYW5kMjogJ0gnXG4gIH0sXG4gIDB4N2Q6IHtcbiAgICBtbmVtb25pYzogJ0xEJyxcbiAgICBsZW5ndGg6IDEsXG4gICAgY3ljbGVzOiBbXG4gICAgICA0XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nXG4gICAgXSxcbiAgICBhZGRyOiAnMHg3ZCcsXG4gICAgb3BlcmFuZDE6ICdBJyxcbiAgICBvcGVyYW5kMjogJ0wnXG4gIH0sXG4gIDB4N2U6IHtcbiAgICBtbmVtb25pYzogJ0xEJyxcbiAgICBsZW5ndGg6IDEsXG4gICAgY3ljbGVzOiBbXG4gICAgICA4XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nXG4gICAgXSxcbiAgICBhZGRyOiAnMHg3ZScsXG4gICAgb3BlcmFuZDE6ICdBJyxcbiAgICBvcGVyYW5kMjogJyhITCknXG4gIH0sXG4gIDB4N2Y6IHtcbiAgICBtbmVtb25pYzogJ0xEJyxcbiAgICBsZW5ndGg6IDEsXG4gICAgY3ljbGVzOiBbXG4gICAgICA0XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nXG4gICAgXSxcbiAgICBhZGRyOiAnMHg3ZicsXG4gICAgb3BlcmFuZDE6ICdBJyxcbiAgICBvcGVyYW5kMjogJ0EnXG4gIH0sXG4gIDB4ODA6IHtcbiAgICBtbmVtb25pYzogJ0FERCcsXG4gICAgbGVuZ3RoOiAxLFxuICAgIGN5Y2xlczogW1xuICAgICAgNFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICdaJyxcbiAgICAgICcwJyxcbiAgICAgICdIJyxcbiAgICAgICdDJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4ODAnLFxuICAgIG9wZXJhbmQxOiAnQScsXG4gICAgb3BlcmFuZDI6ICdCJ1xuICB9LFxuICAweDgxOiB7XG4gICAgbW5lbW9uaWM6ICdBREQnLFxuICAgIGxlbmd0aDogMSxcbiAgICBjeWNsZXM6IFtcbiAgICAgIDRcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnWicsXG4gICAgICAnMCcsXG4gICAgICAnSCcsXG4gICAgICAnQydcbiAgICBdLFxuICAgIGFkZHI6ICcweDgxJyxcbiAgICBvcGVyYW5kMTogJ0EnLFxuICAgIG9wZXJhbmQyOiAnQydcbiAgfSxcbiAgMHg4Mjoge1xuICAgIG1uZW1vbmljOiAnQUREJyxcbiAgICBsZW5ndGg6IDEsXG4gICAgY3ljbGVzOiBbXG4gICAgICA0XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJ1onLFxuICAgICAgJzAnLFxuICAgICAgJ0gnLFxuICAgICAgJ0MnXG4gICAgXSxcbiAgICBhZGRyOiAnMHg4MicsXG4gICAgb3BlcmFuZDE6ICdBJyxcbiAgICBvcGVyYW5kMjogJ0QnXG4gIH0sXG4gIDB4ODM6IHtcbiAgICBtbmVtb25pYzogJ0FERCcsXG4gICAgbGVuZ3RoOiAxLFxuICAgIGN5Y2xlczogW1xuICAgICAgNFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICdaJyxcbiAgICAgICcwJyxcbiAgICAgICdIJyxcbiAgICAgICdDJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4ODMnLFxuICAgIG9wZXJhbmQxOiAnQScsXG4gICAgb3BlcmFuZDI6ICdFJ1xuICB9LFxuICAweDg0OiB7XG4gICAgbW5lbW9uaWM6ICdBREQnLFxuICAgIGxlbmd0aDogMSxcbiAgICBjeWNsZXM6IFtcbiAgICAgIDRcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnWicsXG4gICAgICAnMCcsXG4gICAgICAnSCcsXG4gICAgICAnQydcbiAgICBdLFxuICAgIGFkZHI6ICcweDg0JyxcbiAgICBvcGVyYW5kMTogJ0EnLFxuICAgIG9wZXJhbmQyOiAnSCdcbiAgfSxcbiAgMHg4NToge1xuICAgIG1uZW1vbmljOiAnQUREJyxcbiAgICBsZW5ndGg6IDEsXG4gICAgY3ljbGVzOiBbXG4gICAgICA0XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJ1onLFxuICAgICAgJzAnLFxuICAgICAgJ0gnLFxuICAgICAgJ0MnXG4gICAgXSxcbiAgICBhZGRyOiAnMHg4NScsXG4gICAgb3BlcmFuZDE6ICdBJyxcbiAgICBvcGVyYW5kMjogJ0wnXG4gIH0sXG4gIDB4ODY6IHtcbiAgICBtbmVtb25pYzogJ0FERCcsXG4gICAgbGVuZ3RoOiAxLFxuICAgIGN5Y2xlczogW1xuICAgICAgOFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICdaJyxcbiAgICAgICcwJyxcbiAgICAgICdIJyxcbiAgICAgICdDJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4ODYnLFxuICAgIG9wZXJhbmQxOiAnQScsXG4gICAgb3BlcmFuZDI6ICcoSEwpJ1xuICB9LFxuICAweDg3OiB7XG4gICAgbW5lbW9uaWM6ICdBREQnLFxuICAgIGxlbmd0aDogMSxcbiAgICBjeWNsZXM6IFtcbiAgICAgIDRcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnWicsXG4gICAgICAnMCcsXG4gICAgICAnSCcsXG4gICAgICAnQydcbiAgICBdLFxuICAgIGFkZHI6ICcweDg3JyxcbiAgICBvcGVyYW5kMTogJ0EnLFxuICAgIG9wZXJhbmQyOiAnQSdcbiAgfSxcbiAgMHg5MDoge1xuICAgIG1uZW1vbmljOiAnU1VCJyxcbiAgICBsZW5ndGg6IDEsXG4gICAgY3ljbGVzOiBbXG4gICAgICA0XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJ1onLFxuICAgICAgJzEnLFxuICAgICAgJ0gnLFxuICAgICAgJ0MnXG4gICAgXSxcbiAgICBhZGRyOiAnMHg5MCcsXG4gICAgb3BlcmFuZDE6ICdCJ1xuICB9LFxuICAweDkxOiB7XG4gICAgbW5lbW9uaWM6ICdTVUInLFxuICAgIGxlbmd0aDogMSxcbiAgICBjeWNsZXM6IFtcbiAgICAgIDRcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnWicsXG4gICAgICAnMScsXG4gICAgICAnSCcsXG4gICAgICAnQydcbiAgICBdLFxuICAgIGFkZHI6ICcweDkxJyxcbiAgICBvcGVyYW5kMTogJ0MnXG4gIH0sXG4gIDB4OTI6IHtcbiAgICBtbmVtb25pYzogJ1NVQicsXG4gICAgbGVuZ3RoOiAxLFxuICAgIGN5Y2xlczogW1xuICAgICAgNFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICdaJyxcbiAgICAgICcxJyxcbiAgICAgICdIJyxcbiAgICAgICdDJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4OTInLFxuICAgIG9wZXJhbmQxOiAnRCdcbiAgfSxcbiAgMHg5Mzoge1xuICAgIG1uZW1vbmljOiAnU1VCJyxcbiAgICBsZW5ndGg6IDEsXG4gICAgY3ljbGVzOiBbXG4gICAgICA0XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJ1onLFxuICAgICAgJzEnLFxuICAgICAgJ0gnLFxuICAgICAgJ0MnXG4gICAgXSxcbiAgICBhZGRyOiAnMHg5MycsXG4gICAgb3BlcmFuZDE6ICdFJ1xuICB9LFxuICAweDk0OiB7XG4gICAgbW5lbW9uaWM6ICdTVUInLFxuICAgIGxlbmd0aDogMSxcbiAgICBjeWNsZXM6IFtcbiAgICAgIDRcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnWicsXG4gICAgICAnMScsXG4gICAgICAnSCcsXG4gICAgICAnQydcbiAgICBdLFxuICAgIGFkZHI6ICcweDk0JyxcbiAgICBvcGVyYW5kMTogJ0gnXG4gIH0sXG4gIDB4OTU6IHtcbiAgICBtbmVtb25pYzogJ1NVQicsXG4gICAgbGVuZ3RoOiAxLFxuICAgIGN5Y2xlczogW1xuICAgICAgNFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICdaJyxcbiAgICAgICcxJyxcbiAgICAgICdIJyxcbiAgICAgICdDJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4OTUnLFxuICAgIG9wZXJhbmQxOiAnTCdcbiAgfSxcbiAgMHg5Njoge1xuICAgIG1uZW1vbmljOiAnU1VCJyxcbiAgICBsZW5ndGg6IDEsXG4gICAgY3ljbGVzOiBbXG4gICAgICA4XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJ1onLFxuICAgICAgJzEnLFxuICAgICAgJ0gnLFxuICAgICAgJ0MnXG4gICAgXSxcbiAgICBhZGRyOiAnMHg5NicsXG4gICAgb3BlcmFuZDE6ICcoSEwpJ1xuICB9LFxuICAweDk3OiB7XG4gICAgbW5lbW9uaWM6ICdTVUInLFxuICAgIGxlbmd0aDogMSxcbiAgICBjeWNsZXM6IFtcbiAgICAgIDRcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnWicsXG4gICAgICAnMScsXG4gICAgICAnSCcsXG4gICAgICAnQydcbiAgICBdLFxuICAgIGFkZHI6ICcweDk3JyxcbiAgICBvcGVyYW5kMTogJ0EnXG4gIH0sXG4gIDB4Zjk6IHtcbiAgICBtbmVtb25pYzogJ0xEJyxcbiAgICBsZW5ndGg6IDEsXG4gICAgY3ljbGVzOiBbXG4gICAgICA4XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nXG4gICAgXSxcbiAgICBhZGRyOiAnMHhmOScsXG4gICAgb3BlcmFuZDE6ICdTUCcsXG4gICAgb3BlcmFuZDI6ICdITCdcbiAgfSxcblxuICAvLyBMZW5ndGg6IDJcbiAgMHg2OiB7XG4gICAgbW5lbW9uaWM6ICdMRCcsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGN5Y2xlczogW1xuICAgICAgOFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4NicsXG4gICAgb3BlcmFuZDE6ICdCJyxcbiAgICBvcGVyYW5kMjogJ2Q4J1xuICB9LFxuICAweGU6IHtcbiAgICBtbmVtb25pYzogJ0xEJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICA4XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nXG4gICAgXSxcbiAgICBhZGRyOiAnMHhlJyxcbiAgICBvcGVyYW5kMTogJ0MnLFxuICAgIG9wZXJhbmQyOiAnZDgnXG4gIH0sXG4gIDB4YzY6IHtcbiAgICBtbmVtb25pYzogJ0FERCcsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGN5Y2xlczogW1xuICAgICAgOFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICdaJyxcbiAgICAgICcwJyxcbiAgICAgICdIJyxcbiAgICAgICdDJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4YzYnLFxuICAgIG9wZXJhbmQxOiAnQScsXG4gICAgb3BlcmFuZDI6ICdkOCdcbiAgfSxcbiAgMHgxNjoge1xuICAgIG1uZW1vbmljOiAnTEQnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDE2JyxcbiAgICBvcGVyYW5kMTogJ0QnLFxuICAgIG9wZXJhbmQyOiAnZDgnXG4gIH0sXG4gIDB4MWU6IHtcbiAgICBtbmVtb25pYzogJ0xEJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICA4XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nXG4gICAgXSxcbiAgICBhZGRyOiAnMHgxZScsXG4gICAgb3BlcmFuZDE6ICdFJyxcbiAgICBvcGVyYW5kMjogJ2Q4J1xuICB9LFxuICAweDI2OiB7XG4gICAgbW5lbW9uaWM6ICdMRCcsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGN5Y2xlczogW1xuICAgICAgOFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4MjYnLFxuICAgIG9wZXJhbmQxOiAnSCcsXG4gICAgb3BlcmFuZDI6ICdkOCdcbiAgfSxcbiAgMHgyZToge1xuICAgIG1uZW1vbmljOiAnTEQnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDJlJyxcbiAgICBvcGVyYW5kMTogJ0wnLFxuICAgIG9wZXJhbmQyOiAnZDgnXG4gIH0sXG4gIDB4MzY6IHtcbiAgICBtbmVtb25pYzogJ0xEJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICAxMlxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4MzYnLFxuICAgIG9wZXJhbmQxOiAnKEhMKScsXG4gICAgb3BlcmFuZDI6ICdkOCdcbiAgfSxcbiAgMHgzZToge1xuICAgIG1uZW1vbmljOiAnTEQnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDNlJyxcbiAgICBvcGVyYW5kMTogJ0EnLFxuICAgIG9wZXJhbmQyOiAnZDgnXG4gIH0sXG4gIDB4ZDY6IHtcbiAgICBtbmVtb25pYzogJ1NVQicsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGN5Y2xlczogW1xuICAgICAgOFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICdaJyxcbiAgICAgICcxJyxcbiAgICAgICdIJyxcbiAgICAgICdDJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4ZDYnLFxuICAgIG9wZXJhbmQxOiAnZDgnXG4gIH0sXG4gIDB4ZTA6IHtcbiAgICBtbmVtb25pYzogJ0xESCcsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGN5Y2xlczogW1xuICAgICAgMTJcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweGUwJyxcbiAgICBvcGVyYW5kMTogJyhhOCknLFxuICAgIG9wZXJhbmQyOiAnQSdcbiAgfSxcbiAgMHhlMjoge1xuICAgIG1uZW1vbmljOiAnTEQnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweGUyJyxcbiAgICBvcGVyYW5kMTogJyhDKScsXG4gICAgb3BlcmFuZDI6ICdBJ1xuICB9LFxuICAweGU4OiB7XG4gICAgbW5lbW9uaWM6ICdBREQnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDE2XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJzAnLFxuICAgICAgJzAnLFxuICAgICAgJ0gnLFxuICAgICAgJ0MnXG4gICAgXSxcbiAgICBhZGRyOiAnMHhlOCcsXG4gICAgb3BlcmFuZDE6ICdTUCcsXG4gICAgb3BlcmFuZDI6ICdyOCdcbiAgfSxcbiAgMHhmMDoge1xuICAgIG1uZW1vbmljOiAnTERIJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICAxMlxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4ZjAnLFxuICAgIG9wZXJhbmQxOiAnQScsXG4gICAgb3BlcmFuZDI6ICcoYTgpJ1xuICB9LFxuICAweGYyOiB7XG4gICAgbW5lbW9uaWM6ICdMRCcsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGN5Y2xlczogW1xuICAgICAgOFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4ZjInLFxuICAgIG9wZXJhbmQxOiAnQScsXG4gICAgb3BlcmFuZDI6ICcoQyknXG4gIH0sXG4gIDB4Zjg6IHtcbiAgICBtbmVtb25pYzogJ0xEJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICAxMlxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICcwJyxcbiAgICAgICcwJyxcbiAgICAgICdIJyxcbiAgICAgICdDJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4ZjgnLFxuICAgIG9wZXJhbmQxOiAnSEwnLFxuICAgIG9wZXJhbmQyOiAnU1ArcjgnXG4gIH0sXG5cbiAgLy8gTGVuZ3RoOiAzXG4gIDB4MToge1xuICAgIG1uZW1vbmljOiAnTEQnLFxuICAgIGxlbmd0aDogMyxcbiAgICBjeWNsZXM6IFtcbiAgICAgIDEyXG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nXG4gICAgXSxcbiAgICBhZGRyOiAnMHgxJyxcbiAgICBvcGVyYW5kMTogJ0JDJyxcbiAgICBvcGVyYW5kMjogJ2QxNidcbiAgfSxcbiAgMHg4OiB7XG4gICAgbW5lbW9uaWM6ICdMRCcsXG4gICAgbGVuZ3RoOiAzLFxuICAgIGN5Y2xlczogW1xuICAgICAgMjBcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDgnLFxuICAgIG9wZXJhbmQxOiAnKGExNiknLFxuICAgIG9wZXJhbmQyOiAnU1AnXG4gIH0sXG4gIDB4MTE6IHtcbiAgICBtbmVtb25pYzogJ0xEJyxcbiAgICBsZW5ndGg6IDMsXG4gICAgY3ljbGVzOiBbXG4gICAgICAxMlxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4MTEnLFxuICAgIG9wZXJhbmQxOiAnREUnLFxuICAgIG9wZXJhbmQyOiAnZDE2J1xuICB9LFxuICAweDIxOiB7XG4gICAgbW5lbW9uaWM6ICdMRCcsXG4gICAgbGVuZ3RoOiAzLFxuICAgIGN5Y2xlczogW1xuICAgICAgMTJcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDIxJyxcbiAgICBvcGVyYW5kMTogJ0hMJyxcbiAgICBvcGVyYW5kMjogJ2QxNidcbiAgfSxcbiAgMHgzMToge1xuICAgIG1uZW1vbmljOiAnTEQnLFxuICAgIGxlbmd0aDogMyxcbiAgICBjeWNsZXM6IFtcbiAgICAgIDEyXG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nXG4gICAgXSxcbiAgICBhZGRyOiAnMHgzMScsXG4gICAgb3BlcmFuZDE6ICdTUCcsXG4gICAgb3BlcmFuZDI6ICdkMTYnXG4gIH0sXG4gIDB4ZWE6IHtcbiAgICBtbmVtb25pYzogJ0xEJyxcbiAgICBsZW5ndGg6IDMsXG4gICAgY3ljbGVzOiBbXG4gICAgICAxNlxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4ZWEnLFxuICAgIG9wZXJhbmQxOiAnKGExNiknLFxuICAgIG9wZXJhbmQyOiAnQSdcbiAgfSxcbiAgMHhmYToge1xuICAgIG1uZW1vbmljOiAnTEQnLFxuICAgIGxlbmd0aDogMyxcbiAgICBjeWNsZXM6IFtcbiAgICAgIDE2XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nXG4gICAgXSxcbiAgICBhZGRyOiAnMHhmYScsXG4gICAgb3BlcmFuZDE6ICdBJyxcbiAgICBvcGVyYW5kMjogJyhhMTYpJ1xuICB9LFxuXG5cbiAgLypcbiAgMHgwOiB7XG4gIG1uZW1vbmljOiAnTk9QJyxcbiAgbGVuZ3RoOiAxLFxuICBjeWNsZXM6IFs0XSxcbiAgZmxhZ3M6IFtcbiAgJy0nLFxuICAnLScsXG4gICctJyxcbiAgJy0nXG5dLFxuYWRkcjogMHgwXG59LFxuMHgzOiB7XG5tbmVtb25pYzogJ0lOQycsXG5sZW5ndGg6IDEsXG5jeWNsZXM6IFtcbjhcbl0sXG5mbGFnczogW1xuJy0nLFxuJy0nLFxuJy0nLFxuJy0nXG5dLFxuYWRkcjogJzB4MycsXG5vcGVyYW5kMTogJ0JDJ1xufSxcbjB4NDoge1xubW5lbW9uaWM6ICdJTkMnLFxubGVuZ3RoOiAxLFxuY3ljbGVzOiBbXG40XG5dLFxuZmxhZ3M6IFtcbidaJyxcbicwJyxcbidIJyxcbictJ1xuXSxcbmFkZHI6ICcweDQnLFxub3BlcmFuZDE6ICdCJ1xufSxcbjB4NToge1xubW5lbW9uaWM6ICdERUMnLFxubGVuZ3RoOiAxLFxuY3ljbGVzOiBbXG40XG5dLFxuZmxhZ3M6IFtcbidaJyxcbicxJyxcbidIJyxcbictJ1xuXSxcbmFkZHI6ICcweDUnLFxub3BlcmFuZDE6ICdCJ1xufSxcbjB4Nzoge1xubW5lbW9uaWM6ICdSTENBJyxcbmxlbmd0aDogMSxcbmN5Y2xlczogW1xuNFxuXSxcbmZsYWdzOiBbXG4nMCcsXG4nMCcsXG4nMCcsXG4nQydcbl0sXG5hZGRyOiAnMHg3J1xufSxcbjB4Yjoge1xubW5lbW9uaWM6ICdERUMnLFxubGVuZ3RoOiAxLFxuY3ljbGVzOiBbXG44XG5dLFxuZmxhZ3M6IFtcbictJyxcbictJyxcbictJyxcbictJ1xuXSxcbmFkZHI6ICcweGInLFxub3BlcmFuZDE6ICdCQydcbn0sXG4weGM6IHtcbm1uZW1vbmljOiAnSU5DJyxcbmxlbmd0aDogMSxcbmN5Y2xlczogW1xuNFxuXSxcbmZsYWdzOiBbXG4nWicsXG4nMCcsXG4nSCcsXG4nLSdcbl0sXG5hZGRyOiAnMHhjJyxcbm9wZXJhbmQxOiAnQydcbn0sXG4weGQ6IHtcbm1uZW1vbmljOiAnREVDJyxcbmxlbmd0aDogMSxcbmN5Y2xlczogW1xuNFxuXSxcbmZsYWdzOiBbXG4nWicsXG4nMScsXG4nSCcsXG4nLSdcbl0sXG5hZGRyOiAnMHhkJyxcbm9wZXJhbmQxOiAnQydcbn0sXG4weGY6IHtcbm1uZW1vbmljOiAnUlJDQScsXG5sZW5ndGg6IDEsXG5jeWNsZXM6IFtcbjRcbl0sXG5mbGFnczogW1xuJzAnLFxuJzAnLFxuJzAnLFxuJ0MnXG5dLFxuYWRkcjogJzB4Zidcbn0sXG4weDEwOiB7XG5tbmVtb25pYzogJ1NUT1AnLFxubGVuZ3RoOiAyLFxuY3ljbGVzOiBbXG40XG5dLFxuZmxhZ3M6IFtcbictJyxcbictJyxcbictJyxcbictJ1xuXSxcbmFkZHI6ICcweDEwJyxcbm9wZXJhbmQxOiAnMCdcbn0sXG4weDEzOiB7XG5tbmVtb25pYzogJ0lOQycsXG5sZW5ndGg6IDEsXG5jeWNsZXM6IFtcbjhcbl0sXG5mbGFnczogW1xuJy0nLFxuJy0nLFxuJy0nLFxuJy0nXG5dLFxuYWRkcjogJzB4MTMnLFxub3BlcmFuZDE6ICdERSdcbn0sXG4weDE0OiB7XG5tbmVtb25pYzogJ0lOQycsXG5sZW5ndGg6IDEsXG5jeWNsZXM6IFtcbjRcbl0sXG5mbGFnczogW1xuJ1onLFxuJzAnLFxuJ0gnLFxuJy0nXG5dLFxuYWRkcjogJzB4MTQnLFxub3BlcmFuZDE6ICdEJ1xufSxcbjB4MTU6IHtcbm1uZW1vbmljOiAnREVDJyxcbmxlbmd0aDogMSxcbmN5Y2xlczogW1xuNFxuXSxcbmZsYWdzOiBbXG4nWicsXG4nMScsXG4nSCcsXG4nLSdcbl0sXG5hZGRyOiAnMHgxNScsXG5vcGVyYW5kMTogJ0QnXG59LFxuMHgxNzoge1xubW5lbW9uaWM6ICdSTEEnLFxubGVuZ3RoOiAxLFxuY3ljbGVzOiBbXG40XG5dLFxuZmxhZ3M6IFtcbicwJyxcbicwJyxcbicwJyxcbidDJ1xuXSxcbmFkZHI6ICcweDE3J1xufSxcbjB4MTg6IHtcbm1uZW1vbmljOiAnSlInLFxubGVuZ3RoOiAyLFxuY3ljbGVzOiBbXG4xMlxuXSxcbmZsYWdzOiBbXG4nLScsXG4nLScsXG4nLScsXG4nLSdcbl0sXG5hZGRyOiAnMHgxOCcsXG5vcGVyYW5kMTogJ3I4J1xufSxcbjB4MWI6IHtcbm1uZW1vbmljOiAnREVDJyxcbmxlbmd0aDogMSxcbmN5Y2xlczogW1xuOFxuXSxcbmZsYWdzOiBbXG4nLScsXG4nLScsXG4nLScsXG4nLSdcbl0sXG5hZGRyOiAnMHgxYicsXG5vcGVyYW5kMTogJ0RFJ1xufSxcbjB4MWM6IHtcbm1uZW1vbmljOiAnSU5DJyxcbmxlbmd0aDogMSxcbmN5Y2xlczogW1xuNFxuXSxcbmZsYWdzOiBbXG4nWicsXG4nMCcsXG4nSCcsXG4nLSdcbl0sXG5hZGRyOiAnMHgxYycsXG5vcGVyYW5kMTogJ0UnXG59LFxuMHgxZDoge1xubW5lbW9uaWM6ICdERUMnLFxubGVuZ3RoOiAxLFxuY3ljbGVzOiBbXG40XG5dLFxuZmxhZ3M6IFtcbidaJyxcbicxJyxcbidIJyxcbictJ1xuXSxcbmFkZHI6ICcweDFkJyxcbm9wZXJhbmQxOiAnRSdcbn0sXG4weDFmOiB7XG5tbmVtb25pYzogJ1JSQScsXG5sZW5ndGg6IDEsXG5jeWNsZXM6IFtcbjRcbl0sXG5mbGFnczogW1xuJzAnLFxuJzAnLFxuJzAnLFxuJ0MnXG5dLFxuYWRkcjogJzB4MWYnXG59LFxuMHgyMDoge1xubW5lbW9uaWM6ICdKUicsXG5sZW5ndGg6IDIsXG5jeWNsZXM6IFtcbjEyLFxuOFxuXSxcbmZsYWdzOiBbXG4nLScsXG4nLScsXG4nLScsXG4nLSdcbl0sXG5hZGRyOiAnMHgyMCcsXG5vcGVyYW5kMTogJ05aJyxcbm9wZXJhbmQyOiAncjgnXG59LFxuMHgyMzoge1xubW5lbW9uaWM6ICdJTkMnLFxubGVuZ3RoOiAxLFxuY3ljbGVzOiBbXG44XG5dLFxuZmxhZ3M6IFtcbictJyxcbictJyxcbictJyxcbictJ1xuXSxcbmFkZHI6ICcweDIzJyxcbm9wZXJhbmQxOiAnSEwnXG59LFxuMHgyNDoge1xubW5lbW9uaWM6ICdJTkMnLFxubGVuZ3RoOiAxLFxuY3ljbGVzOiBbXG40XG5dLFxuZmxhZ3M6IFtcbidaJyxcbicwJyxcbidIJyxcbictJ1xuXSxcbmFkZHI6ICcweDI0Jyxcbm9wZXJhbmQxOiAnSCdcbn0sXG4weDI1OiB7XG5tbmVtb25pYzogJ0RFQycsXG5sZW5ndGg6IDEsXG5jeWNsZXM6IFtcbjRcbl0sXG5mbGFnczogW1xuJ1onLFxuJzEnLFxuJ0gnLFxuJy0nXG5dLFxuYWRkcjogJzB4MjUnLFxub3BlcmFuZDE6ICdIJ1xufSxcbjB4Mjc6IHtcbm1uZW1vbmljOiAnREFBJyxcbmxlbmd0aDogMSxcbmN5Y2xlczogW1xuNFxuXSxcbmZsYWdzOiBbXG4nWicsXG4nLScsXG4nMCcsXG4nQydcbl0sXG5hZGRyOiAnMHgyNydcbn0sXG4weDI4OiB7XG5tbmVtb25pYzogJ0pSJyxcbmxlbmd0aDogMixcbmN5Y2xlczogW1xuMTIsXG44XG5dLFxuZmxhZ3M6IFtcbictJyxcbictJyxcbictJyxcbictJ1xuXSxcbmFkZHI6ICcweDI4Jyxcbm9wZXJhbmQxOiAnWicsXG5vcGVyYW5kMjogJ3I4J1xufSxcbjB4MmI6IHtcbm1uZW1vbmljOiAnREVDJyxcbmxlbmd0aDogMSxcbmN5Y2xlczogW1xuOFxuXSxcbmZsYWdzOiBbXG4nLScsXG4nLScsXG4nLScsXG4nLSdcbl0sXG5hZGRyOiAnMHgyYicsXG5vcGVyYW5kMTogJ0hMJ1xufSxcbjB4MmM6IHtcbm1uZW1vbmljOiAnSU5DJyxcbmxlbmd0aDogMSxcbmN5Y2xlczogW1xuNFxuXSxcbmZsYWdzOiBbXG4nWicsXG4nMCcsXG4nSCcsXG4nLSdcbl0sXG5hZGRyOiAnMHgyYycsXG5vcGVyYW5kMTogJ0wnXG59LFxuMHgyZDoge1xubW5lbW9uaWM6ICdERUMnLFxubGVuZ3RoOiAxLFxuY3ljbGVzOiBbXG40XG5dLFxuZmxhZ3M6IFtcbidaJyxcbicxJyxcbidIJyxcbictJ1xuXSxcbmFkZHI6ICcweDJkJyxcbm9wZXJhbmQxOiAnTCdcbn0sXG4weDJmOiB7XG5tbmVtb25pYzogJ0NQTCcsXG5sZW5ndGg6IDEsXG5jeWNsZXM6IFtcbjRcbl0sXG5mbGFnczogW1xuJy0nLFxuJzEnLFxuJzEnLFxuJy0nXG5dLFxuYWRkcjogJzB4MmYnXG59LFxuMHgzMDoge1xubW5lbW9uaWM6ICdKUicsXG5sZW5ndGg6IDIsXG5jeWNsZXM6IFtcbjEyLFxuOFxuXSxcbmZsYWdzOiBbXG4nLScsXG4nLScsXG4nLScsXG4nLSdcbl0sXG5hZGRyOiAnMHgzMCcsXG5vcGVyYW5kMTogJ05DJyxcbm9wZXJhbmQyOiAncjgnXG59LFxuMHgzMzoge1xubW5lbW9uaWM6ICdJTkMnLFxubGVuZ3RoOiAxLFxuY3ljbGVzOiBbXG44XG5dLFxuZmxhZ3M6IFtcbictJyxcbictJyxcbictJyxcbictJ1xuXSxcbmFkZHI6ICcweDMzJyxcbm9wZXJhbmQxOiAnU1AnXG59LFxuMHgzNDoge1xubW5lbW9uaWM6ICdJTkMnLFxubGVuZ3RoOiAxLFxuY3ljbGVzOiBbXG4xMlxuXSxcbmZsYWdzOiBbXG4nWicsXG4nMCcsXG4nSCcsXG4nLSdcbl0sXG5hZGRyOiAnMHgzNCcsXG5vcGVyYW5kMTogJyhITCknXG59LFxuMHgzNToge1xubW5lbW9uaWM6ICdERUMnLFxubGVuZ3RoOiAxLFxuY3ljbGVzOiBbXG4xMlxuXSxcbmZsYWdzOiBbXG4nWicsXG4nMScsXG4nSCcsXG4nLSdcbl0sXG5hZGRyOiAnMHgzNScsXG5vcGVyYW5kMTogJyhITCknXG59LFxuMHgzNzoge1xubW5lbW9uaWM6ICdTQ0YnLFxubGVuZ3RoOiAxLFxuY3ljbGVzOiBbXG40XG5dLFxuZmxhZ3M6IFtcbictJyxcbicwJyxcbicwJyxcbicxJ1xuXSxcbmFkZHI6ICcweDM3J1xufSxcbjB4Mzg6IHtcbm1uZW1vbmljOiAnSlInLFxubGVuZ3RoOiAyLFxuY3ljbGVzOiBbXG4xMixcbjhcbl0sXG5mbGFnczogW1xuJy0nLFxuJy0nLFxuJy0nLFxuJy0nXG5dLFxuYWRkcjogJzB4MzgnLFxub3BlcmFuZDE6ICdDJyxcbm9wZXJhbmQyOiAncjgnXG59LFxuMHgzYjoge1xubW5lbW9uaWM6ICdERUMnLFxubGVuZ3RoOiAxLFxuY3ljbGVzOiBbXG44XG5dLFxuZmxhZ3M6IFtcbictJyxcbictJyxcbictJyxcbictJ1xuXSxcbmFkZHI6ICcweDNiJyxcbm9wZXJhbmQxOiAnU1AnXG59LFxuMHgzYzoge1xubW5lbW9uaWM6ICdJTkMnLFxubGVuZ3RoOiAxLFxuY3ljbGVzOiBbXG40XG5dLFxuZmxhZ3M6IFtcbidaJyxcbicwJyxcbidIJyxcbictJ1xuXSxcbmFkZHI6ICcweDNjJyxcbm9wZXJhbmQxOiAnQSdcbn0sXG4weDNkOiB7XG5tbmVtb25pYzogJ0RFQycsXG5sZW5ndGg6IDEsXG5jeWNsZXM6IFtcbjRcbl0sXG5mbGFnczogW1xuJ1onLFxuJzEnLFxuJ0gnLFxuJy0nXG5dLFxuYWRkcjogJzB4M2QnLFxub3BlcmFuZDE6ICdBJ1xufSxcbjB4M2Y6IHtcbm1uZW1vbmljOiAnQ0NGJyxcbmxlbmd0aDogMSxcbmN5Y2xlczogW1xuNFxuXSxcbmZsYWdzOiBbXG4nLScsXG4nMCcsXG4nMCcsXG4nQydcbl0sXG5hZGRyOiAnMHgzZidcbn0sXG5cbjB4ODg6IHtcbm1uZW1vbmljOiAnQURDJyxcbmxlbmd0aDogMSxcbmN5Y2xlczogW1xuNFxuXSxcbmZsYWdzOiBbXG4nWicsXG4nMCcsXG4nSCcsXG4nQydcbl0sXG5hZGRyOiAnMHg4OCcsXG5vcGVyYW5kMTogJ0EnLFxub3BlcmFuZDI6ICdCJ1xufSxcbjB4ODk6IHtcbm1uZW1vbmljOiAnQURDJyxcbmxlbmd0aDogMSxcbmN5Y2xlczogW1xuNFxuXSxcbmZsYWdzOiBbXG4nWicsXG4nMCcsXG4nSCcsXG4nQydcbl0sXG5hZGRyOiAnMHg4OScsXG5vcGVyYW5kMTogJ0EnLFxub3BlcmFuZDI6ICdDJ1xufSxcbjB4OGE6IHtcbm1uZW1vbmljOiAnQURDJyxcbmxlbmd0aDogMSxcbmN5Y2xlczogW1xuNFxuXSxcbmZsYWdzOiBbXG4nWicsXG4nMCcsXG4nSCcsXG4nQydcbl0sXG5hZGRyOiAnMHg4YScsXG5vcGVyYW5kMTogJ0EnLFxub3BlcmFuZDI6ICdEJ1xufSxcbjB4OGI6IHtcbm1uZW1vbmljOiAnQURDJyxcbmxlbmd0aDogMSxcbmN5Y2xlczogW1xuNFxuXSxcbmZsYWdzOiBbXG4nWicsXG4nMCcsXG4nSCcsXG4nQydcbl0sXG5hZGRyOiAnMHg4YicsXG5vcGVyYW5kMTogJ0EnLFxub3BlcmFuZDI6ICdFJ1xufSxcbjB4OGM6IHtcbm1uZW1vbmljOiAnQURDJyxcbmxlbmd0aDogMSxcbmN5Y2xlczogW1xuNFxuXSxcbmZsYWdzOiBbXG4nWicsXG4nMCcsXG4nSCcsXG4nQydcbl0sXG5hZGRyOiAnMHg4YycsXG5vcGVyYW5kMTogJ0EnLFxub3BlcmFuZDI6ICdIJ1xufSxcbjB4OGQ6IHtcbm1uZW1vbmljOiAnQURDJyxcbmxlbmd0aDogMSxcbmN5Y2xlczogW1xuNFxuXSxcbmZsYWdzOiBbXG4nWicsXG4nMCcsXG4nSCcsXG4nQydcbl0sXG5hZGRyOiAnMHg4ZCcsXG5vcGVyYW5kMTogJ0EnLFxub3BlcmFuZDI6ICdMJ1xufSxcbjB4OGU6IHtcbm1uZW1vbmljOiAnQURDJyxcbmxlbmd0aDogMSxcbmN5Y2xlczogW1xuOFxuXSxcbmZsYWdzOiBbXG4nWicsXG4nMCcsXG4nSCcsXG4nQydcbl0sXG5hZGRyOiAnMHg4ZScsXG5vcGVyYW5kMTogJ0EnLFxub3BlcmFuZDI6ICcoSEwpJ1xufSxcbjB4OGY6IHtcbm1uZW1vbmljOiAnQURDJyxcbmxlbmd0aDogMSxcbmN5Y2xlczogW1xuNFxuXSxcbmZsYWdzOiBbXG4nWicsXG4nMCcsXG4nSCcsXG4nQydcbl0sXG5hZGRyOiAnMHg4ZicsXG5vcGVyYW5kMTogJ0EnLFxub3BlcmFuZDI6ICdBJ1xufSxcblxuMHg5ODoge1xubW5lbW9uaWM6ICdTQkMnLFxubGVuZ3RoOiAxLFxuY3ljbGVzOiBbXG40XG5dLFxuZmxhZ3M6IFtcbidaJyxcbicxJyxcbidIJyxcbidDJ1xuXSxcbmFkZHI6ICcweDk4Jyxcbm9wZXJhbmQxOiAnQScsXG5vcGVyYW5kMjogJ0InXG59LFxuMHg5OToge1xubW5lbW9uaWM6ICdTQkMnLFxubGVuZ3RoOiAxLFxuY3ljbGVzOiBbXG40XG5dLFxuZmxhZ3M6IFtcbidaJyxcbicxJyxcbidIJyxcbidDJ1xuXSxcbmFkZHI6ICcweDk5Jyxcbm9wZXJhbmQxOiAnQScsXG5vcGVyYW5kMjogJ0MnXG59LFxuMHg5YToge1xubW5lbW9uaWM6ICdTQkMnLFxubGVuZ3RoOiAxLFxuY3ljbGVzOiBbXG40XG5dLFxuZmxhZ3M6IFtcbidaJyxcbicxJyxcbidIJyxcbidDJ1xuXSxcbmFkZHI6ICcweDlhJyxcbm9wZXJhbmQxOiAnQScsXG5vcGVyYW5kMjogJ0QnXG59LFxuMHg5Yjoge1xubW5lbW9uaWM6ICdTQkMnLFxubGVuZ3RoOiAxLFxuY3ljbGVzOiBbXG40XG5dLFxuZmxhZ3M6IFtcbidaJyxcbicxJyxcbidIJyxcbidDJ1xuXSxcbmFkZHI6ICcweDliJyxcbm9wZXJhbmQxOiAnQScsXG5vcGVyYW5kMjogJ0UnXG59LFxuMHg5Yzoge1xubW5lbW9uaWM6ICdTQkMnLFxubGVuZ3RoOiAxLFxuY3ljbGVzOiBbXG40XG5dLFxuZmxhZ3M6IFtcbidaJyxcbicxJyxcbidIJyxcbidDJ1xuXSxcbmFkZHI6ICcweDljJyxcbm9wZXJhbmQxOiAnQScsXG5vcGVyYW5kMjogJ0gnXG59LFxuMHg5ZDoge1xubW5lbW9uaWM6ICdTQkMnLFxubGVuZ3RoOiAxLFxuY3ljbGVzOiBbXG40XG5dLFxuZmxhZ3M6IFtcbidaJyxcbicxJyxcbidIJyxcbidDJ1xuXSxcbmFkZHI6ICcweDlkJyxcbm9wZXJhbmQxOiAnQScsXG5vcGVyYW5kMjogJ0wnXG59LFxuMHg5ZToge1xubW5lbW9uaWM6ICdTQkMnLFxubGVuZ3RoOiAxLFxuY3ljbGVzOiBbXG44XG5dLFxuZmxhZ3M6IFtcbidaJyxcbicxJyxcbidIJyxcbidDJ1xuXSxcbmFkZHI6ICcweDllJyxcbm9wZXJhbmQxOiAnQScsXG5vcGVyYW5kMjogJyhITCknXG59LFxuMHg5Zjoge1xubW5lbW9uaWM6ICdTQkMnLFxubGVuZ3RoOiAxLFxuY3ljbGVzOiBbXG40XG5dLFxuZmxhZ3M6IFtcbidaJyxcbicxJyxcbidIJyxcbidDJ1xuXSxcbmFkZHI6ICcweDlmJyxcbm9wZXJhbmQxOiAnQScsXG5vcGVyYW5kMjogJ0EnXG59LFxuMHhhMDoge1xubW5lbW9uaWM6ICdBTkQnLFxubGVuZ3RoOiAxLFxuY3ljbGVzOiBbXG40XG5dLFxuZmxhZ3M6IFtcbidaJyxcbicwJyxcbicxJyxcbicwJ1xuXSxcbmFkZHI6ICcweGEwJyxcbm9wZXJhbmQxOiAnQidcbn0sXG4weGExOiB7XG5tbmVtb25pYzogJ0FORCcsXG5sZW5ndGg6IDEsXG5jeWNsZXM6IFtcbjRcbl0sXG5mbGFnczogW1xuJ1onLFxuJzAnLFxuJzEnLFxuJzAnXG5dLFxuYWRkcjogJzB4YTEnLFxub3BlcmFuZDE6ICdDJ1xufSxcbjB4YTI6IHtcbm1uZW1vbmljOiAnQU5EJyxcbmxlbmd0aDogMSxcbmN5Y2xlczogW1xuNFxuXSxcbmZsYWdzOiBbXG4nWicsXG4nMCcsXG4nMScsXG4nMCdcbl0sXG5hZGRyOiAnMHhhMicsXG5vcGVyYW5kMTogJ0QnXG59LFxuMHhhMzoge1xubW5lbW9uaWM6ICdBTkQnLFxubGVuZ3RoOiAxLFxuY3ljbGVzOiBbXG40XG5dLFxuZmxhZ3M6IFtcbidaJyxcbicwJyxcbicxJyxcbicwJ1xuXSxcbmFkZHI6ICcweGEzJyxcbm9wZXJhbmQxOiAnRSdcbn0sXG4weGE0OiB7XG5tbmVtb25pYzogJ0FORCcsXG5sZW5ndGg6IDEsXG5jeWNsZXM6IFtcbjRcbl0sXG5mbGFnczogW1xuJ1onLFxuJzAnLFxuJzEnLFxuJzAnXG5dLFxuYWRkcjogJzB4YTQnLFxub3BlcmFuZDE6ICdIJ1xufSxcbjB4YTU6IHtcbm1uZW1vbmljOiAnQU5EJyxcbmxlbmd0aDogMSxcbmN5Y2xlczogW1xuNFxuXSxcbmZsYWdzOiBbXG4nWicsXG4nMCcsXG4nMScsXG4nMCdcbl0sXG5hZGRyOiAnMHhhNScsXG5vcGVyYW5kMTogJ0wnXG59LFxuMHhhNjoge1xubW5lbW9uaWM6ICdBTkQnLFxubGVuZ3RoOiAxLFxuY3ljbGVzOiBbXG44XG5dLFxuZmxhZ3M6IFtcbidaJyxcbicwJyxcbicxJyxcbicwJ1xuXSxcbmFkZHI6ICcweGE2Jyxcbm9wZXJhbmQxOiAnKEhMKSdcbn0sXG4weGE3OiB7XG5tbmVtb25pYzogJ0FORCcsXG5sZW5ndGg6IDEsXG5jeWNsZXM6IFtcbjRcbl0sXG5mbGFnczogW1xuJ1onLFxuJzAnLFxuJzEnLFxuJzAnXG5dLFxuYWRkcjogJzB4YTcnLFxub3BlcmFuZDE6ICdBJ1xufSxcbjB4YTg6IHtcbm1uZW1vbmljOiAnWE9SJyxcbmxlbmd0aDogMSxcbmN5Y2xlczogW1xuNFxuXSxcbmZsYWdzOiBbXG4nWicsXG4nMCcsXG4nMCcsXG4nMCdcbl0sXG5hZGRyOiAnMHhhOCcsXG5vcGVyYW5kMTogJ0InXG59LFxuMHhhOToge1xubW5lbW9uaWM6ICdYT1InLFxubGVuZ3RoOiAxLFxuY3ljbGVzOiBbXG40XG5dLFxuZmxhZ3M6IFtcbidaJyxcbicwJyxcbicwJyxcbicwJ1xuXSxcbmFkZHI6ICcweGE5Jyxcbm9wZXJhbmQxOiAnQydcbn0sXG4weGFhOiB7XG5tbmVtb25pYzogJ1hPUicsXG5sZW5ndGg6IDEsXG5jeWNsZXM6IFtcbjRcbl0sXG5mbGFnczogW1xuJ1onLFxuJzAnLFxuJzAnLFxuJzAnXG5dLFxuYWRkcjogJzB4YWEnLFxub3BlcmFuZDE6ICdEJ1xufSxcbjB4YWI6IHtcbm1uZW1vbmljOiAnWE9SJyxcbmxlbmd0aDogMSxcbmN5Y2xlczogW1xuNFxuXSxcbmZsYWdzOiBbXG4nWicsXG4nMCcsXG4nMCcsXG4nMCdcbl0sXG5hZGRyOiAnMHhhYicsXG5vcGVyYW5kMTogJ0UnXG59LFxuMHhhYzoge1xubW5lbW9uaWM6ICdYT1InLFxubGVuZ3RoOiAxLFxuY3ljbGVzOiBbXG40XG5dLFxuZmxhZ3M6IFtcbidaJyxcbicwJyxcbicwJyxcbicwJ1xuXSxcbmFkZHI6ICcweGFjJyxcbm9wZXJhbmQxOiAnSCdcbn0sXG4weGFkOiB7XG5tbmVtb25pYzogJ1hPUicsXG5sZW5ndGg6IDEsXG5jeWNsZXM6IFtcbjRcbl0sXG5mbGFnczogW1xuJ1onLFxuJzAnLFxuJzAnLFxuJzAnXG5dLFxuYWRkcjogJzB4YWQnLFxub3BlcmFuZDE6ICdMJ1xufSxcbjB4YWU6IHtcbm1uZW1vbmljOiAnWE9SJyxcbmxlbmd0aDogMSxcbmN5Y2xlczogW1xuOFxuXSxcbmZsYWdzOiBbXG4nWicsXG4nMCcsXG4nMCcsXG4nMCdcbl0sXG5hZGRyOiAnMHhhZScsXG5vcGVyYW5kMTogJyhITCknXG59LFxuMHhhZjoge1xubW5lbW9uaWM6ICdYT1InLFxubGVuZ3RoOiAxLFxuY3ljbGVzOiBbXG40XG5dLFxuZmxhZ3M6IFtcbidaJyxcbicwJyxcbicwJyxcbicwJ1xuXSxcbmFkZHI6ICcweGFmJyxcbm9wZXJhbmQxOiAnQSdcbn0sXG4weGIwOiB7XG5tbmVtb25pYzogJ09SJyxcbmxlbmd0aDogMSxcbmN5Y2xlczogW1xuNFxuXSxcbmZsYWdzOiBbXG4nWicsXG4nMCcsXG4nMCcsXG4nMCdcbl0sXG5hZGRyOiAnMHhiMCcsXG5vcGVyYW5kMTogJ0InXG59LFxuMHhiMToge1xubW5lbW9uaWM6ICdPUicsXG5sZW5ndGg6IDEsXG5jeWNsZXM6IFtcbjRcbl0sXG5mbGFnczogW1xuJ1onLFxuJzAnLFxuJzAnLFxuJzAnXG5dLFxuYWRkcjogJzB4YjEnLFxub3BlcmFuZDE6ICdDJ1xufSxcbjB4YjI6IHtcbm1uZW1vbmljOiAnT1InLFxubGVuZ3RoOiAxLFxuY3ljbGVzOiBbXG40XG5dLFxuZmxhZ3M6IFtcbidaJyxcbicwJyxcbicwJyxcbicwJ1xuXSxcbmFkZHI6ICcweGIyJyxcbm9wZXJhbmQxOiAnRCdcbn0sXG4weGIzOiB7XG5tbmVtb25pYzogJ09SJyxcbmxlbmd0aDogMSxcbmN5Y2xlczogW1xuNFxuXSxcbmZsYWdzOiBbXG4nWicsXG4nMCcsXG4nMCcsXG4nMCdcbl0sXG5hZGRyOiAnMHhiMycsXG5vcGVyYW5kMTogJ0UnXG59LFxuMHhiNDoge1xubW5lbW9uaWM6ICdPUicsXG5sZW5ndGg6IDEsXG5jeWNsZXM6IFtcbjRcbl0sXG5mbGFnczogW1xuJ1onLFxuJzAnLFxuJzAnLFxuJzAnXG5dLFxuYWRkcjogJzB4YjQnLFxub3BlcmFuZDE6ICdIJ1xufSxcbjB4YjU6IHtcbm1uZW1vbmljOiAnT1InLFxubGVuZ3RoOiAxLFxuY3ljbGVzOiBbXG40XG5dLFxuZmxhZ3M6IFtcbidaJyxcbicwJyxcbicwJyxcbicwJ1xuXSxcbmFkZHI6ICcweGI1Jyxcbm9wZXJhbmQxOiAnTCdcbn0sXG4weGI2OiB7XG5tbmVtb25pYzogJ09SJyxcbmxlbmd0aDogMSxcbmN5Y2xlczogW1xuOFxuXSxcbmZsYWdzOiBbXG4nWicsXG4nMCcsXG4nMCcsXG4nMCdcbl0sXG5hZGRyOiAnMHhiNicsXG5vcGVyYW5kMTogJyhITCknXG59LFxuMHhiNzoge1xubW5lbW9uaWM6ICdPUicsXG5sZW5ndGg6IDEsXG5jeWNsZXM6IFtcbjRcbl0sXG5mbGFnczogW1xuJ1onLFxuJzAnLFxuJzAnLFxuJzAnXG5dLFxuYWRkcjogJzB4YjcnLFxub3BlcmFuZDE6ICdBJ1xufSxcbjB4Yjg6IHtcbm1uZW1vbmljOiAnQ1AnLFxubGVuZ3RoOiAxLFxuY3ljbGVzOiBbXG40XG5dLFxuZmxhZ3M6IFtcbidaJyxcbicxJyxcbidIJyxcbidDJ1xuXSxcbmFkZHI6ICcweGI4Jyxcbm9wZXJhbmQxOiAnQidcbn0sXG4weGI5OiB7XG5tbmVtb25pYzogJ0NQJyxcbmxlbmd0aDogMSxcbmN5Y2xlczogW1xuNFxuXSxcbmZsYWdzOiBbXG4nWicsXG4nMScsXG4nSCcsXG4nQydcbl0sXG5hZGRyOiAnMHhiOScsXG5vcGVyYW5kMTogJ0MnXG59LFxuMHhiYToge1xubW5lbW9uaWM6ICdDUCcsXG5sZW5ndGg6IDEsXG5jeWNsZXM6IFtcbjRcbl0sXG5mbGFnczogW1xuJ1onLFxuJzEnLFxuJ0gnLFxuJ0MnXG5dLFxuYWRkcjogJzB4YmEnLFxub3BlcmFuZDE6ICdEJ1xufSxcbjB4YmI6IHtcbm1uZW1vbmljOiAnQ1AnLFxubGVuZ3RoOiAxLFxuY3ljbGVzOiBbXG40XG5dLFxuZmxhZ3M6IFtcbidaJyxcbicxJyxcbidIJyxcbidDJ1xuXSxcbmFkZHI6ICcweGJiJyxcbm9wZXJhbmQxOiAnRSdcbn0sXG4weGJjOiB7XG5tbmVtb25pYzogJ0NQJyxcbmxlbmd0aDogMSxcbmN5Y2xlczogW1xuNFxuXSxcbmZsYWdzOiBbXG4nWicsXG4nMScsXG4nSCcsXG4nQydcbl0sXG5hZGRyOiAnMHhiYycsXG5vcGVyYW5kMTogJ0gnXG59LFxuMHhiZDoge1xubW5lbW9uaWM6ICdDUCcsXG5sZW5ndGg6IDEsXG5jeWNsZXM6IFtcbjRcbl0sXG5mbGFnczogW1xuJ1onLFxuJzEnLFxuJ0gnLFxuJ0MnXG5dLFxuYWRkcjogJzB4YmQnLFxub3BlcmFuZDE6ICdMJ1xufSxcbjB4YmU6IHtcbm1uZW1vbmljOiAnQ1AnLFxubGVuZ3RoOiAxLFxuY3ljbGVzOiBbXG44XG5dLFxuZmxhZ3M6IFtcbidaJyxcbicxJyxcbidIJyxcbidDJ1xuXSxcbmFkZHI6ICcweGJlJyxcbm9wZXJhbmQxOiAnKEhMKSdcbn0sXG4weGJmOiB7XG5tbmVtb25pYzogJ0NQJyxcbmxlbmd0aDogMSxcbmN5Y2xlczogW1xuNFxuXSxcbmZsYWdzOiBbXG4nWicsXG4nMScsXG4nSCcsXG4nQydcbl0sXG5hZGRyOiAnMHhiZicsXG5vcGVyYW5kMTogJ0EnXG59LFxuMHhjMDoge1xubW5lbW9uaWM6ICdSRVQnLFxubGVuZ3RoOiAxLFxuY3ljbGVzOiBbXG4yMCxcbjhcbl0sXG5mbGFnczogW1xuJy0nLFxuJy0nLFxuJy0nLFxuJy0nXG5dLFxuYWRkcjogJzB4YzAnLFxub3BlcmFuZDE6ICdOWidcbn0sXG4weGMxOiB7XG5tbmVtb25pYzogJ1BPUCcsXG5sZW5ndGg6IDEsXG5jeWNsZXM6IFtcbjEyXG5dLFxuZmxhZ3M6IFtcbictJyxcbictJyxcbictJyxcbictJ1xuXSxcbmFkZHI6ICcweGMxJyxcbm9wZXJhbmQxOiAnQkMnXG59LFxuMHhjMjoge1xubW5lbW9uaWM6ICdKUCcsXG5sZW5ndGg6IDMsXG5jeWNsZXM6IFtcbjE2LFxuMTJcbl0sXG5mbGFnczogW1xuJy0nLFxuJy0nLFxuJy0nLFxuJy0nXG5dLFxuYWRkcjogJzB4YzInLFxub3BlcmFuZDE6ICdOWicsXG5vcGVyYW5kMjogJ2ExNidcbn0sXG4weGMzOiB7XG5tbmVtb25pYzogJ0pQJyxcbmxlbmd0aDogMyxcbmN5Y2xlczogW1xuMTZcbl0sXG5mbGFnczogW1xuJy0nLFxuJy0nLFxuJy0nLFxuJy0nXG5dLFxuYWRkcjogJzB4YzMnLFxub3BlcmFuZDE6ICdhMTYnXG59LFxuMHhjNDoge1xubW5lbW9uaWM6ICdDQUxMJyxcbmxlbmd0aDogMyxcbmN5Y2xlczogW1xuMjQsXG4xMlxuXSxcbmZsYWdzOiBbXG4nLScsXG4nLScsXG4nLScsXG4nLSdcbl0sXG5hZGRyOiAnMHhjNCcsXG5vcGVyYW5kMTogJ05aJyxcbm9wZXJhbmQyOiAnYTE2J1xufSxcbjB4YzU6IHtcbm1uZW1vbmljOiAnUFVTSCcsXG5sZW5ndGg6IDEsXG5jeWNsZXM6IFtcbjE2XG5dLFxuZmxhZ3M6IFtcbictJyxcbictJyxcbictJyxcbictJ1xuXSxcbmFkZHI6ICcweGM1Jyxcbm9wZXJhbmQxOiAnQkMnXG59LFxuMHhjNzoge1xubW5lbW9uaWM6ICdSU1QnLFxubGVuZ3RoOiAxLFxuY3ljbGVzOiBbXG4xNlxuXSxcbmZsYWdzOiBbXG4nLScsXG4nLScsXG4nLScsXG4nLSdcbl0sXG5hZGRyOiAnMHhjNycsXG5vcGVyYW5kMTogJzAwSCdcbn0sXG4weGM4OiB7XG5tbmVtb25pYzogJ1JFVCcsXG5sZW5ndGg6IDEsXG5jeWNsZXM6IFtcbjIwLFxuOFxuXSxcbmZsYWdzOiBbXG4nLScsXG4nLScsXG4nLScsXG4nLSdcbl0sXG5hZGRyOiAnMHhjOCcsXG5vcGVyYW5kMTogJ1onXG59LFxuMHhjOToge1xubW5lbW9uaWM6ICdSRVQnLFxubGVuZ3RoOiAxLFxuY3ljbGVzOiBbXG4xNlxuXSxcbmZsYWdzOiBbXG4nLScsXG4nLScsXG4nLScsXG4nLSdcbl0sXG5hZGRyOiAnMHhjOSdcbn0sXG4weGNhOiB7XG5tbmVtb25pYzogJ0pQJyxcbmxlbmd0aDogMyxcbmN5Y2xlczogW1xuMTYsXG4xMlxuXSxcbmZsYWdzOiBbXG4nLScsXG4nLScsXG4nLScsXG4nLSdcbl0sXG5hZGRyOiAnMHhjYScsXG5vcGVyYW5kMTogJ1onLFxub3BlcmFuZDI6ICdhMTYnXG59LFxuMHhjYjoge1xubW5lbW9uaWM6ICdQUkVGSVgnLFxubGVuZ3RoOiAxLFxuY3ljbGVzOiBbXG40XG5dLFxuZmxhZ3M6IFtcbictJyxcbictJyxcbictJyxcbictJ1xuXSxcbmFkZHI6ICcweGNiJyxcbm9wZXJhbmQxOiAnQ0InXG59LFxuMHhjYzoge1xubW5lbW9uaWM6ICdDQUxMJyxcbmxlbmd0aDogMyxcbmN5Y2xlczogW1xuMjQsXG4xMlxuXSxcbmZsYWdzOiBbXG4nLScsXG4nLScsXG4nLScsXG4nLSdcbl0sXG5hZGRyOiAnMHhjYycsXG5vcGVyYW5kMTogJ1onLFxub3BlcmFuZDI6ICdhMTYnXG59LFxuMHhjZDoge1xubW5lbW9uaWM6ICdDQUxMJyxcbmxlbmd0aDogMyxcbmN5Y2xlczogW1xuMjRcbl0sXG5mbGFnczogW1xuJy0nLFxuJy0nLFxuJy0nLFxuJy0nXG5dLFxuYWRkcjogJzB4Y2QnLFxub3BlcmFuZDE6ICdhMTYnXG59LFxuMHhjZToge1xubW5lbW9uaWM6ICdBREMnLFxubGVuZ3RoOiAyLFxuY3ljbGVzOiBbXG44XG5dLFxuZmxhZ3M6IFtcbidaJyxcbicwJyxcbidIJyxcbidDJ1xuXSxcbmFkZHI6ICcweGNlJyxcbm9wZXJhbmQxOiAnQScsXG5vcGVyYW5kMjogJ2Q4J1xufSxcbjB4Y2Y6IHtcbm1uZW1vbmljOiAnUlNUJyxcbmxlbmd0aDogMSxcbmN5Y2xlczogW1xuMTZcbl0sXG5mbGFnczogW1xuJy0nLFxuJy0nLFxuJy0nLFxuJy0nXG5dLFxuYWRkcjogJzB4Y2YnLFxub3BlcmFuZDE6ICcwOEgnXG59LFxuMHhkMDoge1xubW5lbW9uaWM6ICdSRVQnLFxubGVuZ3RoOiAxLFxuY3ljbGVzOiBbXG4yMCxcbjhcbl0sXG5mbGFnczogW1xuJy0nLFxuJy0nLFxuJy0nLFxuJy0nXG5dLFxuYWRkcjogJzB4ZDAnLFxub3BlcmFuZDE6ICdOQydcbn0sXG4weGQxOiB7XG5tbmVtb25pYzogJ1BPUCcsXG5sZW5ndGg6IDEsXG5jeWNsZXM6IFtcbjEyXG5dLFxuZmxhZ3M6IFtcbictJyxcbictJyxcbictJyxcbictJ1xuXSxcbmFkZHI6ICcweGQxJyxcbm9wZXJhbmQxOiAnREUnXG59LFxuMHhkMjoge1xubW5lbW9uaWM6ICdKUCcsXG5sZW5ndGg6IDMsXG5jeWNsZXM6IFtcbjE2LFxuMTJcbl0sXG5mbGFnczogW1xuJy0nLFxuJy0nLFxuJy0nLFxuJy0nXG5dLFxuYWRkcjogJzB4ZDInLFxub3BlcmFuZDE6ICdOQycsXG5vcGVyYW5kMjogJ2ExNidcbn0sXG4weGQ0OiB7XG5tbmVtb25pYzogJ0NBTEwnLFxubGVuZ3RoOiAzLFxuY3ljbGVzOiBbXG4yNCxcbjEyXG5dLFxuZmxhZ3M6IFtcbictJyxcbictJyxcbictJyxcbictJ1xuXSxcbmFkZHI6ICcweGQ0Jyxcbm9wZXJhbmQxOiAnTkMnLFxub3BlcmFuZDI6ICdhMTYnXG59LFxuMHhkNToge1xubW5lbW9uaWM6ICdQVVNIJyxcbmxlbmd0aDogMSxcbmN5Y2xlczogW1xuMTZcbl0sXG5mbGFnczogW1xuJy0nLFxuJy0nLFxuJy0nLFxuJy0nXG5dLFxuYWRkcjogJzB4ZDUnLFxub3BlcmFuZDE6ICdERSdcbn0sXG5cbjB4ZDc6IHtcbm1uZW1vbmljOiAnUlNUJyxcbmxlbmd0aDogMSxcbmN5Y2xlczogW1xuMTZcbl0sXG5mbGFnczogW1xuJy0nLFxuJy0nLFxuJy0nLFxuJy0nXG5dLFxuYWRkcjogJzB4ZDcnLFxub3BlcmFuZDE6ICcxMEgnXG59LFxuMHhkODoge1xubW5lbW9uaWM6ICdSRVQnLFxubGVuZ3RoOiAxLFxuY3ljbGVzOiBbXG4yMCxcbjhcbl0sXG5mbGFnczogW1xuJy0nLFxuJy0nLFxuJy0nLFxuJy0nXG5dLFxuYWRkcjogJzB4ZDgnLFxub3BlcmFuZDE6ICdDJ1xufSxcbjB4ZDk6IHtcbm1uZW1vbmljOiAnUkVUSScsXG5sZW5ndGg6IDEsXG5jeWNsZXM6IFtcbjE2XG5dLFxuZmxhZ3M6IFtcbictJyxcbictJyxcbictJyxcbictJ1xuXSxcbmFkZHI6ICcweGQ5J1xufSxcbjB4ZGE6IHtcbm1uZW1vbmljOiAnSlAnLFxubGVuZ3RoOiAzLFxuY3ljbGVzOiBbXG4xNixcbjEyXG5dLFxuZmxhZ3M6IFtcbictJyxcbictJyxcbictJyxcbictJ1xuXSxcbmFkZHI6ICcweGRhJyxcbm9wZXJhbmQxOiAnQycsXG5vcGVyYW5kMjogJ2ExNidcbn0sXG4weGRjOiB7XG5tbmVtb25pYzogJ0NBTEwnLFxubGVuZ3RoOiAzLFxuY3ljbGVzOiBbXG4yNCxcbjEyXG5dLFxuZmxhZ3M6IFtcbictJyxcbictJyxcbictJyxcbictJ1xuXSxcbmFkZHI6ICcweGRjJyxcbm9wZXJhbmQxOiAnQycsXG5vcGVyYW5kMjogJ2ExNidcbn0sXG4weGRlOiB7XG5tbmVtb25pYzogJ1NCQycsXG5sZW5ndGg6IDIsXG5jeWNsZXM6IFtcbjhcbl0sXG5mbGFnczogW1xuJ1onLFxuJzEnLFxuJ0gnLFxuJ0MnXG5dLFxuYWRkcjogJzB4ZGUnLFxub3BlcmFuZDE6ICdBJyxcbm9wZXJhbmQyOiAnZDgnXG59LFxuMHhkZjoge1xubW5lbW9uaWM6ICdSU1QnLFxubGVuZ3RoOiAxLFxuY3ljbGVzOiBbXG4xNlxuXSxcbmZsYWdzOiBbXG4nLScsXG4nLScsXG4nLScsXG4nLSdcbl0sXG5hZGRyOiAnMHhkZicsXG5vcGVyYW5kMTogJzE4SCdcbn0sXG4weGUxOiB7XG5tbmVtb25pYzogJ1BPUCcsXG5sZW5ndGg6IDEsXG5jeWNsZXM6IFtcbjEyXG5dLFxuZmxhZ3M6IFtcbictJyxcbictJyxcbictJyxcbictJ1xuXSxcbmFkZHI6ICcweGUxJyxcbm9wZXJhbmQxOiAnSEwnXG59LFxuXG5cbjB4ZTU6IHtcbm1uZW1vbmljOiAnUFVTSCcsXG5sZW5ndGg6IDEsXG5jeWNsZXM6IFtcbjE2XG5dLFxuZmxhZ3M6IFtcbictJyxcbictJyxcbictJyxcbictJ1xuXSxcbmFkZHI6ICcweGU1Jyxcbm9wZXJhbmQxOiAnSEwnXG59LFxuMHhlNjoge1xubW5lbW9uaWM6ICdBTkQnLFxubGVuZ3RoOiAyLFxuY3ljbGVzOiBbXG44XG5dLFxuZmxhZ3M6IFtcbidaJyxcbicwJyxcbicxJyxcbicwJ1xuXSxcbmFkZHI6ICcweGU2Jyxcbm9wZXJhbmQxOiAnZDgnXG59LFxuMHhlNzoge1xubW5lbW9uaWM6ICdSU1QnLFxubGVuZ3RoOiAxLFxuY3ljbGVzOiBbXG4xNlxuXSxcbmZsYWdzOiBbXG4nLScsXG4nLScsXG4nLScsXG4nLSdcbl0sXG5hZGRyOiAnMHhlNycsXG5vcGVyYW5kMTogJzIwSCdcbn0sXG4weGU5OiB7XG5tbmVtb25pYzogJ0pQJyxcbmxlbmd0aDogMSxcbmN5Y2xlczogW1xuNFxuXSxcbmZsYWdzOiBbXG4nLScsXG4nLScsXG4nLScsXG4nLSdcbl0sXG5hZGRyOiAnMHhlOScsXG5vcGVyYW5kMTogJyhITCknXG59LFxuMHhlZToge1xubW5lbW9uaWM6ICdYT1InLFxubGVuZ3RoOiAyLFxuY3ljbGVzOiBbXG44XG5dLFxuZmxhZ3M6IFtcbidaJyxcbicwJyxcbicwJyxcbicwJ1xuXSxcbmFkZHI6ICcweGVlJyxcbm9wZXJhbmQxOiAnZDgnXG59LFxuMHhlZjoge1xubW5lbW9uaWM6ICdSU1QnLFxubGVuZ3RoOiAxLFxuY3ljbGVzOiBbXG4xNlxuXSxcbmZsYWdzOiBbXG4nLScsXG4nLScsXG4nLScsXG4nLSdcbl0sXG5hZGRyOiAnMHhlZicsXG5vcGVyYW5kMTogJzI4SCdcbn0sXG4weGYxOiB7XG5tbmVtb25pYzogJ1BPUCcsXG5sZW5ndGg6IDEsXG5jeWNsZXM6IFtcbjEyXG5dLFxuZmxhZ3M6IFtcbidaJyxcbidOJyxcbidIJyxcbidDJ1xuXSxcbmFkZHI6ICcweGYxJyxcbm9wZXJhbmQxOiAnQUYnXG59LFxuMHhmMzoge1xubW5lbW9uaWM6ICdESScsXG5sZW5ndGg6IDEsXG5jeWNsZXM6IFtcbjRcbl0sXG5mbGFnczogW1xuJy0nLFxuJy0nLFxuJy0nLFxuJy0nXG5dLFxuYWRkcjogJzB4ZjMnXG59LFxuMHhmNToge1xubW5lbW9uaWM6ICdQVVNIJyxcbmxlbmd0aDogMSxcbmN5Y2xlczogW1xuMTZcbl0sXG5mbGFnczogW1xuJy0nLFxuJy0nLFxuJy0nLFxuJy0nXG5dLFxuYWRkcjogJzB4ZjUnLFxub3BlcmFuZDE6ICdBRidcbn0sXG4weGY2OiB7XG5tbmVtb25pYzogJ09SJyxcbmxlbmd0aDogMixcbmN5Y2xlczogW1xuOFxuXSxcbmZsYWdzOiBbXG4nWicsXG4nMCcsXG4nMCcsXG4nMCdcbl0sXG5hZGRyOiAnMHhmNicsXG5vcGVyYW5kMTogJ2Q4J1xufSxcbjB4Zjc6IHtcbm1uZW1vbmljOiAnUlNUJyxcbmxlbmd0aDogMSxcbmN5Y2xlczogW1xuMTZcbl0sXG5mbGFnczogW1xuJy0nLFxuJy0nLFxuJy0nLFxuJy0nXG5dLFxuYWRkcjogJzB4ZjcnLFxub3BlcmFuZDE6ICczMEgnXG59LFxuMHhmYjoge1xubW5lbW9uaWM6ICdFSScsXG5sZW5ndGg6IDEsXG5jeWNsZXM6IFtcbjRcbl0sXG5mbGFnczogW1xuJy0nLFxuJy0nLFxuJy0nLFxuJy0nXG5dLFxuYWRkcjogJzB4ZmInXG59LFxuMHhmZToge1xubW5lbW9uaWM6ICdDUCcsXG5sZW5ndGg6IDIsXG5jeWNsZXM6IFtcbjhcbl0sXG5mbGFnczogW1xuJ1onLFxuJzEnLFxuJ0gnLFxuJ0MnXG5dLFxuYWRkcjogJzB4ZmUnLFxub3BlcmFuZDE6ICdkOCdcbn0sXG4weGZmOiB7XG5tbmVtb25pYzogJ1JTVCcsXG5sZW5ndGg6IDEsXG5jeWNsZXM6IFtcbjE2XG5dLFxuZmxhZ3M6IFtcbictJyxcbictJyxcbictJyxcbictJ1xuXSxcbmFkZHI6ICcweGZmJyxcbm9wZXJhbmQxOiAnMzhIJ1xufVxuKi9cbn07XG5leHBvcnQgZGVmYXVsdCBPUENPREU7XG5cblxuZXhwb3J0IGNvbnN0IE9QQ09ERV9DQiA9IHtcbiAgMHgwOiB7XG4gICAgbW5lbW9uaWM6ICdSTEMnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnWicsXG4gICAgICAnMCcsXG4gICAgICAnMCcsXG4gICAgICAnQydcbiAgICBdLFxuICAgIGFkZHI6ICcweDAnLFxuICAgIG9wZXJhbmQxOiAnQidcbiAgfSxcbiAgMHgxOiB7XG4gICAgbW5lbW9uaWM6ICdSTEMnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnWicsXG4gICAgICAnMCcsXG4gICAgICAnMCcsXG4gICAgICAnQydcbiAgICBdLFxuICAgIGFkZHI6ICcweDEnLFxuICAgIG9wZXJhbmQxOiAnQydcbiAgfSxcbiAgMHgyOiB7XG4gICAgbW5lbW9uaWM6ICdSTEMnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnWicsXG4gICAgICAnMCcsXG4gICAgICAnMCcsXG4gICAgICAnQydcbiAgICBdLFxuICAgIGFkZHI6ICcweDInLFxuICAgIG9wZXJhbmQxOiAnRCdcbiAgfSxcbiAgMHgzOiB7XG4gICAgbW5lbW9uaWM6ICdSTEMnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnWicsXG4gICAgICAnMCcsXG4gICAgICAnMCcsXG4gICAgICAnQydcbiAgICBdLFxuICAgIGFkZHI6ICcweDMnLFxuICAgIG9wZXJhbmQxOiAnRSdcbiAgfSxcbiAgMHg0OiB7XG4gICAgbW5lbW9uaWM6ICdSTEMnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnWicsXG4gICAgICAnMCcsXG4gICAgICAnMCcsXG4gICAgICAnQydcbiAgICBdLFxuICAgIGFkZHI6ICcweDQnLFxuICAgIG9wZXJhbmQxOiAnSCdcbiAgfSxcbiAgMHg1OiB7XG4gICAgbW5lbW9uaWM6ICdSTEMnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnWicsXG4gICAgICAnMCcsXG4gICAgICAnMCcsXG4gICAgICAnQydcbiAgICBdLFxuICAgIGFkZHI6ICcweDUnLFxuICAgIG9wZXJhbmQxOiAnTCdcbiAgfSxcbiAgMHg2OiB7XG4gICAgbW5lbW9uaWM6ICdSTEMnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDE2XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJ1onLFxuICAgICAgJzAnLFxuICAgICAgJzAnLFxuICAgICAgJ0MnXG4gICAgXSxcbiAgICBhZGRyOiAnMHg2JyxcbiAgICBvcGVyYW5kMTogJyhITCknXG4gIH0sXG4gIDB4Nzoge1xuICAgIG1uZW1vbmljOiAnUkxDJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICA4XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJ1onLFxuICAgICAgJzAnLFxuICAgICAgJzAnLFxuICAgICAgJ0MnXG4gICAgXSxcbiAgICBhZGRyOiAnMHg3JyxcbiAgICBvcGVyYW5kMTogJ0EnXG4gIH0sXG4gIDB4ODoge1xuICAgIG1uZW1vbmljOiAnUlJDJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICA4XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJ1onLFxuICAgICAgJzAnLFxuICAgICAgJzAnLFxuICAgICAgJ0MnXG4gICAgXSxcbiAgICBhZGRyOiAnMHg4JyxcbiAgICBvcGVyYW5kMTogJ0InXG4gIH0sXG4gIDB4OToge1xuICAgIG1uZW1vbmljOiAnUlJDJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICA4XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJ1onLFxuICAgICAgJzAnLFxuICAgICAgJzAnLFxuICAgICAgJ0MnXG4gICAgXSxcbiAgICBhZGRyOiAnMHg5JyxcbiAgICBvcGVyYW5kMTogJ0MnXG4gIH0sXG4gIDB4YToge1xuICAgIG1uZW1vbmljOiAnUlJDJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICA4XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJ1onLFxuICAgICAgJzAnLFxuICAgICAgJzAnLFxuICAgICAgJ0MnXG4gICAgXSxcbiAgICBhZGRyOiAnMHhhJyxcbiAgICBvcGVyYW5kMTogJ0QnXG4gIH0sXG4gIDB4Yjoge1xuICAgIG1uZW1vbmljOiAnUlJDJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICA4XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJ1onLFxuICAgICAgJzAnLFxuICAgICAgJzAnLFxuICAgICAgJ0MnXG4gICAgXSxcbiAgICBhZGRyOiAnMHhiJyxcbiAgICBvcGVyYW5kMTogJ0UnXG4gIH0sXG4gIDB4Yzoge1xuICAgIG1uZW1vbmljOiAnUlJDJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICA4XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJ1onLFxuICAgICAgJzAnLFxuICAgICAgJzAnLFxuICAgICAgJ0MnXG4gICAgXSxcbiAgICBhZGRyOiAnMHhjJyxcbiAgICBvcGVyYW5kMTogJ0gnXG4gIH0sXG4gIDB4ZDoge1xuICAgIG1uZW1vbmljOiAnUlJDJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICA4XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJ1onLFxuICAgICAgJzAnLFxuICAgICAgJzAnLFxuICAgICAgJ0MnXG4gICAgXSxcbiAgICBhZGRyOiAnMHhkJyxcbiAgICBvcGVyYW5kMTogJ0wnXG4gIH0sXG4gIDB4ZToge1xuICAgIG1uZW1vbmljOiAnUlJDJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICAxNlxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICdaJyxcbiAgICAgICcwJyxcbiAgICAgICcwJyxcbiAgICAgICdDJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4ZScsXG4gICAgb3BlcmFuZDE6ICcoSEwpJ1xuICB9LFxuICAweGY6IHtcbiAgICBtbmVtb25pYzogJ1JSQycsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGN5Y2xlczogW1xuICAgICAgOFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICdaJyxcbiAgICAgICcwJyxcbiAgICAgICcwJyxcbiAgICAgICdDJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4ZicsXG4gICAgb3BlcmFuZDE6ICdBJ1xuICB9LFxuICAweDEwOiB7XG4gICAgbW5lbW9uaWM6ICdSTCcsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGN5Y2xlczogW1xuICAgICAgOFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICdaJyxcbiAgICAgICcwJyxcbiAgICAgICcwJyxcbiAgICAgICdDJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4MTAnLFxuICAgIG9wZXJhbmQxOiAnQidcbiAgfSxcbiAgMHgxMToge1xuICAgIG1uZW1vbmljOiAnUkwnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnWicsXG4gICAgICAnMCcsXG4gICAgICAnMCcsXG4gICAgICAnQydcbiAgICBdLFxuICAgIGFkZHI6ICcweDExJyxcbiAgICBvcGVyYW5kMTogJ0MnXG4gIH0sXG4gIDB4MTI6IHtcbiAgICBtbmVtb25pYzogJ1JMJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICA4XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJ1onLFxuICAgICAgJzAnLFxuICAgICAgJzAnLFxuICAgICAgJ0MnXG4gICAgXSxcbiAgICBhZGRyOiAnMHgxMicsXG4gICAgb3BlcmFuZDE6ICdEJ1xuICB9LFxuICAweDEzOiB7XG4gICAgbW5lbW9uaWM6ICdSTCcsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGN5Y2xlczogW1xuICAgICAgOFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICdaJyxcbiAgICAgICcwJyxcbiAgICAgICcwJyxcbiAgICAgICdDJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4MTMnLFxuICAgIG9wZXJhbmQxOiAnRSdcbiAgfSxcbiAgMHgxNDoge1xuICAgIG1uZW1vbmljOiAnUkwnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnWicsXG4gICAgICAnMCcsXG4gICAgICAnMCcsXG4gICAgICAnQydcbiAgICBdLFxuICAgIGFkZHI6ICcweDE0JyxcbiAgICBvcGVyYW5kMTogJ0gnXG4gIH0sXG4gIDB4MTU6IHtcbiAgICBtbmVtb25pYzogJ1JMJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICA4XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJ1onLFxuICAgICAgJzAnLFxuICAgICAgJzAnLFxuICAgICAgJ0MnXG4gICAgXSxcbiAgICBhZGRyOiAnMHgxNScsXG4gICAgb3BlcmFuZDE6ICdMJ1xuICB9LFxuICAweDE2OiB7XG4gICAgbW5lbW9uaWM6ICdSTCcsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGN5Y2xlczogW1xuICAgICAgMTZcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnWicsXG4gICAgICAnMCcsXG4gICAgICAnMCcsXG4gICAgICAnQydcbiAgICBdLFxuICAgIGFkZHI6ICcweDE2JyxcbiAgICBvcGVyYW5kMTogJyhITCknXG4gIH0sXG4gIDB4MTc6IHtcbiAgICBtbmVtb25pYzogJ1JMJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICA4XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJ1onLFxuICAgICAgJzAnLFxuICAgICAgJzAnLFxuICAgICAgJ0MnXG4gICAgXSxcbiAgICBhZGRyOiAnMHgxNycsXG4gICAgb3BlcmFuZDE6ICdBJ1xuICB9LFxuICAweDE4OiB7XG4gICAgbW5lbW9uaWM6ICdSUicsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGN5Y2xlczogW1xuICAgICAgOFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICdaJyxcbiAgICAgICcwJyxcbiAgICAgICcwJyxcbiAgICAgICdDJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4MTgnLFxuICAgIG9wZXJhbmQxOiAnQidcbiAgfSxcbiAgMHgxOToge1xuICAgIG1uZW1vbmljOiAnUlInLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnWicsXG4gICAgICAnMCcsXG4gICAgICAnMCcsXG4gICAgICAnQydcbiAgICBdLFxuICAgIGFkZHI6ICcweDE5JyxcbiAgICBvcGVyYW5kMTogJ0MnXG4gIH0sXG4gIDB4MWE6IHtcbiAgICBtbmVtb25pYzogJ1JSJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICA4XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJ1onLFxuICAgICAgJzAnLFxuICAgICAgJzAnLFxuICAgICAgJ0MnXG4gICAgXSxcbiAgICBhZGRyOiAnMHgxYScsXG4gICAgb3BlcmFuZDE6ICdEJ1xuICB9LFxuICAweDFiOiB7XG4gICAgbW5lbW9uaWM6ICdSUicsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGN5Y2xlczogW1xuICAgICAgOFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICdaJyxcbiAgICAgICcwJyxcbiAgICAgICcwJyxcbiAgICAgICdDJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4MWInLFxuICAgIG9wZXJhbmQxOiAnRSdcbiAgfSxcbiAgMHgxYzoge1xuICAgIG1uZW1vbmljOiAnUlInLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnWicsXG4gICAgICAnMCcsXG4gICAgICAnMCcsXG4gICAgICAnQydcbiAgICBdLFxuICAgIGFkZHI6ICcweDFjJyxcbiAgICBvcGVyYW5kMTogJ0gnXG4gIH0sXG4gIDB4MWQ6IHtcbiAgICBtbmVtb25pYzogJ1JSJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICA4XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJ1onLFxuICAgICAgJzAnLFxuICAgICAgJzAnLFxuICAgICAgJ0MnXG4gICAgXSxcbiAgICBhZGRyOiAnMHgxZCcsXG4gICAgb3BlcmFuZDE6ICdMJ1xuICB9LFxuICAweDFlOiB7XG4gICAgbW5lbW9uaWM6ICdSUicsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGN5Y2xlczogW1xuICAgICAgMTZcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnWicsXG4gICAgICAnMCcsXG4gICAgICAnMCcsXG4gICAgICAnQydcbiAgICBdLFxuICAgIGFkZHI6ICcweDFlJyxcbiAgICBvcGVyYW5kMTogJyhITCknXG4gIH0sXG4gIDB4MWY6IHtcbiAgICBtbmVtb25pYzogJ1JSJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICA4XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJ1onLFxuICAgICAgJzAnLFxuICAgICAgJzAnLFxuICAgICAgJ0MnXG4gICAgXSxcbiAgICBhZGRyOiAnMHgxZicsXG4gICAgb3BlcmFuZDE6ICdBJ1xuICB9LFxuICAweDIwOiB7XG4gICAgbW5lbW9uaWM6ICdTTEEnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnWicsXG4gICAgICAnMCcsXG4gICAgICAnMCcsXG4gICAgICAnQydcbiAgICBdLFxuICAgIGFkZHI6ICcweDIwJyxcbiAgICBvcGVyYW5kMTogJ0InXG4gIH0sXG4gIDB4MjE6IHtcbiAgICBtbmVtb25pYzogJ1NMQScsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGN5Y2xlczogW1xuICAgICAgOFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICdaJyxcbiAgICAgICcwJyxcbiAgICAgICcwJyxcbiAgICAgICdDJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4MjEnLFxuICAgIG9wZXJhbmQxOiAnQydcbiAgfSxcbiAgMHgyMjoge1xuICAgIG1uZW1vbmljOiAnU0xBJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICA4XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJ1onLFxuICAgICAgJzAnLFxuICAgICAgJzAnLFxuICAgICAgJ0MnXG4gICAgXSxcbiAgICBhZGRyOiAnMHgyMicsXG4gICAgb3BlcmFuZDE6ICdEJ1xuICB9LFxuICAweDIzOiB7XG4gICAgbW5lbW9uaWM6ICdTTEEnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnWicsXG4gICAgICAnMCcsXG4gICAgICAnMCcsXG4gICAgICAnQydcbiAgICBdLFxuICAgIGFkZHI6ICcweDIzJyxcbiAgICBvcGVyYW5kMTogJ0UnXG4gIH0sXG4gIDB4MjQ6IHtcbiAgICBtbmVtb25pYzogJ1NMQScsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGN5Y2xlczogW1xuICAgICAgOFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICdaJyxcbiAgICAgICcwJyxcbiAgICAgICcwJyxcbiAgICAgICdDJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4MjQnLFxuICAgIG9wZXJhbmQxOiAnSCdcbiAgfSxcbiAgMHgyNToge1xuICAgIG1uZW1vbmljOiAnU0xBJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICA4XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJ1onLFxuICAgICAgJzAnLFxuICAgICAgJzAnLFxuICAgICAgJ0MnXG4gICAgXSxcbiAgICBhZGRyOiAnMHgyNScsXG4gICAgb3BlcmFuZDE6ICdMJ1xuICB9LFxuICAweDI2OiB7XG4gICAgbW5lbW9uaWM6ICdTTEEnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDE2XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJ1onLFxuICAgICAgJzAnLFxuICAgICAgJzAnLFxuICAgICAgJ0MnXG4gICAgXSxcbiAgICBhZGRyOiAnMHgyNicsXG4gICAgb3BlcmFuZDE6ICcoSEwpJ1xuICB9LFxuICAweDI3OiB7XG4gICAgbW5lbW9uaWM6ICdTTEEnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnWicsXG4gICAgICAnMCcsXG4gICAgICAnMCcsXG4gICAgICAnQydcbiAgICBdLFxuICAgIGFkZHI6ICcweDI3JyxcbiAgICBvcGVyYW5kMTogJ0EnXG4gIH0sXG4gIDB4Mjg6IHtcbiAgICBtbmVtb25pYzogJ1NSQScsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGN5Y2xlczogW1xuICAgICAgOFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICdaJyxcbiAgICAgICcwJyxcbiAgICAgICcwJyxcbiAgICAgICcwJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4MjgnLFxuICAgIG9wZXJhbmQxOiAnQidcbiAgfSxcbiAgMHgyOToge1xuICAgIG1uZW1vbmljOiAnU1JBJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICA4XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJ1onLFxuICAgICAgJzAnLFxuICAgICAgJzAnLFxuICAgICAgJzAnXG4gICAgXSxcbiAgICBhZGRyOiAnMHgyOScsXG4gICAgb3BlcmFuZDE6ICdDJ1xuICB9LFxuICAweDJhOiB7XG4gICAgbW5lbW9uaWM6ICdTUkEnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnWicsXG4gICAgICAnMCcsXG4gICAgICAnMCcsXG4gICAgICAnMCdcbiAgICBdLFxuICAgIGFkZHI6ICcweDJhJyxcbiAgICBvcGVyYW5kMTogJ0QnXG4gIH0sXG4gIDB4MmI6IHtcbiAgICBtbmVtb25pYzogJ1NSQScsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGN5Y2xlczogW1xuICAgICAgOFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICdaJyxcbiAgICAgICcwJyxcbiAgICAgICcwJyxcbiAgICAgICcwJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4MmInLFxuICAgIG9wZXJhbmQxOiAnRSdcbiAgfSxcbiAgMHgyYzoge1xuICAgIG1uZW1vbmljOiAnU1JBJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICA4XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJ1onLFxuICAgICAgJzAnLFxuICAgICAgJzAnLFxuICAgICAgJzAnXG4gICAgXSxcbiAgICBhZGRyOiAnMHgyYycsXG4gICAgb3BlcmFuZDE6ICdIJ1xuICB9LFxuICAweDJkOiB7XG4gICAgbW5lbW9uaWM6ICdTUkEnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnWicsXG4gICAgICAnMCcsXG4gICAgICAnMCcsXG4gICAgICAnMCdcbiAgICBdLFxuICAgIGFkZHI6ICcweDJkJyxcbiAgICBvcGVyYW5kMTogJ0wnXG4gIH0sXG4gIDB4MmU6IHtcbiAgICBtbmVtb25pYzogJ1NSQScsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGN5Y2xlczogW1xuICAgICAgMTZcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnWicsXG4gICAgICAnMCcsXG4gICAgICAnMCcsXG4gICAgICAnMCdcbiAgICBdLFxuICAgIGFkZHI6ICcweDJlJyxcbiAgICBvcGVyYW5kMTogJyhITCknXG4gIH0sXG4gIDB4MmY6IHtcbiAgICBtbmVtb25pYzogJ1NSQScsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGN5Y2xlczogW1xuICAgICAgOFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICdaJyxcbiAgICAgICcwJyxcbiAgICAgICcwJyxcbiAgICAgICcwJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4MmYnLFxuICAgIG9wZXJhbmQxOiAnQSdcbiAgfSxcbiAgMHgzMDoge1xuICAgIG1uZW1vbmljOiAnU1dBUCcsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGN5Y2xlczogW1xuICAgICAgOFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICdaJyxcbiAgICAgICcwJyxcbiAgICAgICcwJyxcbiAgICAgICcwJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4MzAnLFxuICAgIG9wZXJhbmQxOiAnQidcbiAgfSxcbiAgMHgzMToge1xuICAgIG1uZW1vbmljOiAnU1dBUCcsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGN5Y2xlczogW1xuICAgICAgOFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICdaJyxcbiAgICAgICcwJyxcbiAgICAgICcwJyxcbiAgICAgICcwJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4MzEnLFxuICAgIG9wZXJhbmQxOiAnQydcbiAgfSxcbiAgMHgzMjoge1xuICAgIG1uZW1vbmljOiAnU1dBUCcsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGN5Y2xlczogW1xuICAgICAgOFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICdaJyxcbiAgICAgICcwJyxcbiAgICAgICcwJyxcbiAgICAgICcwJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4MzInLFxuICAgIG9wZXJhbmQxOiAnRCdcbiAgfSxcbiAgMHgzMzoge1xuICAgIG1uZW1vbmljOiAnU1dBUCcsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGN5Y2xlczogW1xuICAgICAgOFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICdaJyxcbiAgICAgICcwJyxcbiAgICAgICcwJyxcbiAgICAgICcwJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4MzMnLFxuICAgIG9wZXJhbmQxOiAnRSdcbiAgfSxcbiAgMHgzNDoge1xuICAgIG1uZW1vbmljOiAnU1dBUCcsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGN5Y2xlczogW1xuICAgICAgOFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICdaJyxcbiAgICAgICcwJyxcbiAgICAgICcwJyxcbiAgICAgICcwJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4MzQnLFxuICAgIG9wZXJhbmQxOiAnSCdcbiAgfSxcbiAgMHgzNToge1xuICAgIG1uZW1vbmljOiAnU1dBUCcsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGN5Y2xlczogW1xuICAgICAgOFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICdaJyxcbiAgICAgICcwJyxcbiAgICAgICcwJyxcbiAgICAgICcwJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4MzUnLFxuICAgIG9wZXJhbmQxOiAnTCdcbiAgfSxcbiAgMHgzNjoge1xuICAgIG1uZW1vbmljOiAnU1dBUCcsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGN5Y2xlczogW1xuICAgICAgMTZcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnWicsXG4gICAgICAnMCcsXG4gICAgICAnMCcsXG4gICAgICAnMCdcbiAgICBdLFxuICAgIGFkZHI6ICcweDM2JyxcbiAgICBvcGVyYW5kMTogJyhITCknXG4gIH0sXG4gIDB4Mzc6IHtcbiAgICBtbmVtb25pYzogJ1NXQVAnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnWicsXG4gICAgICAnMCcsXG4gICAgICAnMCcsXG4gICAgICAnMCdcbiAgICBdLFxuICAgIGFkZHI6ICcweDM3JyxcbiAgICBvcGVyYW5kMTogJ0EnXG4gIH0sXG4gIDB4Mzg6IHtcbiAgICBtbmVtb25pYzogJ1NSTCcsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGN5Y2xlczogW1xuICAgICAgOFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICdaJyxcbiAgICAgICcwJyxcbiAgICAgICcwJyxcbiAgICAgICdDJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4MzgnLFxuICAgIG9wZXJhbmQxOiAnQidcbiAgfSxcbiAgMHgzOToge1xuICAgIG1uZW1vbmljOiAnU1JMJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICA4XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJ1onLFxuICAgICAgJzAnLFxuICAgICAgJzAnLFxuICAgICAgJ0MnXG4gICAgXSxcbiAgICBhZGRyOiAnMHgzOScsXG4gICAgb3BlcmFuZDE6ICdDJ1xuICB9LFxuICAweDNhOiB7XG4gICAgbW5lbW9uaWM6ICdTUkwnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnWicsXG4gICAgICAnMCcsXG4gICAgICAnMCcsXG4gICAgICAnQydcbiAgICBdLFxuICAgIGFkZHI6ICcweDNhJyxcbiAgICBvcGVyYW5kMTogJ0QnXG4gIH0sXG4gIDB4M2I6IHtcbiAgICBtbmVtb25pYzogJ1NSTCcsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGN5Y2xlczogW1xuICAgICAgOFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICdaJyxcbiAgICAgICcwJyxcbiAgICAgICcwJyxcbiAgICAgICdDJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4M2InLFxuICAgIG9wZXJhbmQxOiAnRSdcbiAgfSxcbiAgMHgzYzoge1xuICAgIG1uZW1vbmljOiAnU1JMJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICA4XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJ1onLFxuICAgICAgJzAnLFxuICAgICAgJzAnLFxuICAgICAgJ0MnXG4gICAgXSxcbiAgICBhZGRyOiAnMHgzYycsXG4gICAgb3BlcmFuZDE6ICdIJ1xuICB9LFxuICAweDNkOiB7XG4gICAgbW5lbW9uaWM6ICdTUkwnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnWicsXG4gICAgICAnMCcsXG4gICAgICAnMCcsXG4gICAgICAnQydcbiAgICBdLFxuICAgIGFkZHI6ICcweDNkJyxcbiAgICBvcGVyYW5kMTogJ0wnXG4gIH0sXG4gIDB4M2U6IHtcbiAgICBtbmVtb25pYzogJ1NSTCcsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGN5Y2xlczogW1xuICAgICAgMTZcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnWicsXG4gICAgICAnMCcsXG4gICAgICAnMCcsXG4gICAgICAnQydcbiAgICBdLFxuICAgIGFkZHI6ICcweDNlJyxcbiAgICBvcGVyYW5kMTogJyhITCknXG4gIH0sXG4gIDB4M2Y6IHtcbiAgICBtbmVtb25pYzogJ1NSTCcsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGN5Y2xlczogW1xuICAgICAgOFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICdaJyxcbiAgICAgICcwJyxcbiAgICAgICcwJyxcbiAgICAgICdDJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4M2YnLFxuICAgIG9wZXJhbmQxOiAnQSdcbiAgfSxcbiAgMHg0MDoge1xuICAgIG1uZW1vbmljOiAnQklUJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICA4XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJ1onLFxuICAgICAgJzAnLFxuICAgICAgJzEnLFxuICAgICAgJy0nXG4gICAgXSxcbiAgICBhZGRyOiAnMHg0MCcsXG4gICAgb3BlcmFuZDE6ICcwJyxcbiAgICBvcGVyYW5kMjogJ0InXG4gIH0sXG4gIDB4NDE6IHtcbiAgICBtbmVtb25pYzogJ0JJVCcsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGN5Y2xlczogW1xuICAgICAgOFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICdaJyxcbiAgICAgICcwJyxcbiAgICAgICcxJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4NDEnLFxuICAgIG9wZXJhbmQxOiAnMCcsXG4gICAgb3BlcmFuZDI6ICdDJ1xuICB9LFxuICAweDQyOiB7XG4gICAgbW5lbW9uaWM6ICdCSVQnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnWicsXG4gICAgICAnMCcsXG4gICAgICAnMScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDQyJyxcbiAgICBvcGVyYW5kMTogJzAnLFxuICAgIG9wZXJhbmQyOiAnRCdcbiAgfSxcbiAgMHg0Mzoge1xuICAgIG1uZW1vbmljOiAnQklUJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICA4XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJ1onLFxuICAgICAgJzAnLFxuICAgICAgJzEnLFxuICAgICAgJy0nXG4gICAgXSxcbiAgICBhZGRyOiAnMHg0MycsXG4gICAgb3BlcmFuZDE6ICcwJyxcbiAgICBvcGVyYW5kMjogJ0UnXG4gIH0sXG4gIDB4NDQ6IHtcbiAgICBtbmVtb25pYzogJ0JJVCcsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGN5Y2xlczogW1xuICAgICAgOFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICdaJyxcbiAgICAgICcwJyxcbiAgICAgICcxJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4NDQnLFxuICAgIG9wZXJhbmQxOiAnMCcsXG4gICAgb3BlcmFuZDI6ICdIJ1xuICB9LFxuICAweDQ1OiB7XG4gICAgbW5lbW9uaWM6ICdCSVQnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnWicsXG4gICAgICAnMCcsXG4gICAgICAnMScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDQ1JyxcbiAgICBvcGVyYW5kMTogJzAnLFxuICAgIG9wZXJhbmQyOiAnTCdcbiAgfSxcbiAgMHg0Njoge1xuICAgIG1uZW1vbmljOiAnQklUJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICAxNlxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICdaJyxcbiAgICAgICcwJyxcbiAgICAgICcxJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4NDYnLFxuICAgIG9wZXJhbmQxOiAnMCcsXG4gICAgb3BlcmFuZDI6ICcoSEwpJ1xuICB9LFxuICAweDQ3OiB7XG4gICAgbW5lbW9uaWM6ICdCSVQnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnWicsXG4gICAgICAnMCcsXG4gICAgICAnMScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDQ3JyxcbiAgICBvcGVyYW5kMTogJzAnLFxuICAgIG9wZXJhbmQyOiAnQSdcbiAgfSxcbiAgMHg0ODoge1xuICAgIG1uZW1vbmljOiAnQklUJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICA4XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJ1onLFxuICAgICAgJzAnLFxuICAgICAgJzEnLFxuICAgICAgJy0nXG4gICAgXSxcbiAgICBhZGRyOiAnMHg0OCcsXG4gICAgb3BlcmFuZDE6ICcxJyxcbiAgICBvcGVyYW5kMjogJ0InXG4gIH0sXG4gIDB4NDk6IHtcbiAgICBtbmVtb25pYzogJ0JJVCcsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGN5Y2xlczogW1xuICAgICAgOFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICdaJyxcbiAgICAgICcwJyxcbiAgICAgICcxJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4NDknLFxuICAgIG9wZXJhbmQxOiAnMScsXG4gICAgb3BlcmFuZDI6ICdDJ1xuICB9LFxuICAweDRhOiB7XG4gICAgbW5lbW9uaWM6ICdCSVQnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnWicsXG4gICAgICAnMCcsXG4gICAgICAnMScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDRhJyxcbiAgICBvcGVyYW5kMTogJzEnLFxuICAgIG9wZXJhbmQyOiAnRCdcbiAgfSxcbiAgMHg0Yjoge1xuICAgIG1uZW1vbmljOiAnQklUJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICA4XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJ1onLFxuICAgICAgJzAnLFxuICAgICAgJzEnLFxuICAgICAgJy0nXG4gICAgXSxcbiAgICBhZGRyOiAnMHg0YicsXG4gICAgb3BlcmFuZDE6ICcxJyxcbiAgICBvcGVyYW5kMjogJ0UnXG4gIH0sXG4gIDB4NGM6IHtcbiAgICBtbmVtb25pYzogJ0JJVCcsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGN5Y2xlczogW1xuICAgICAgOFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICdaJyxcbiAgICAgICcwJyxcbiAgICAgICcxJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4NGMnLFxuICAgIG9wZXJhbmQxOiAnMScsXG4gICAgb3BlcmFuZDI6ICdIJ1xuICB9LFxuICAweDRkOiB7XG4gICAgbW5lbW9uaWM6ICdCSVQnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnWicsXG4gICAgICAnMCcsXG4gICAgICAnMScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDRkJyxcbiAgICBvcGVyYW5kMTogJzEnLFxuICAgIG9wZXJhbmQyOiAnTCdcbiAgfSxcbiAgMHg0ZToge1xuICAgIG1uZW1vbmljOiAnQklUJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICAxNlxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICdaJyxcbiAgICAgICcwJyxcbiAgICAgICcxJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4NGUnLFxuICAgIG9wZXJhbmQxOiAnMScsXG4gICAgb3BlcmFuZDI6ICcoSEwpJ1xuICB9LFxuICAweDRmOiB7XG4gICAgbW5lbW9uaWM6ICdCSVQnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnWicsXG4gICAgICAnMCcsXG4gICAgICAnMScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDRmJyxcbiAgICBvcGVyYW5kMTogJzEnLFxuICAgIG9wZXJhbmQyOiAnQSdcbiAgfSxcbiAgMHg1MDoge1xuICAgIG1uZW1vbmljOiAnQklUJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICA4XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJ1onLFxuICAgICAgJzAnLFxuICAgICAgJzEnLFxuICAgICAgJy0nXG4gICAgXSxcbiAgICBhZGRyOiAnMHg1MCcsXG4gICAgb3BlcmFuZDE6ICcyJyxcbiAgICBvcGVyYW5kMjogJ0InXG4gIH0sXG4gIDB4NTE6IHtcbiAgICBtbmVtb25pYzogJ0JJVCcsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGN5Y2xlczogW1xuICAgICAgOFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICdaJyxcbiAgICAgICcwJyxcbiAgICAgICcxJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4NTEnLFxuICAgIG9wZXJhbmQxOiAnMicsXG4gICAgb3BlcmFuZDI6ICdDJ1xuICB9LFxuICAweDUyOiB7XG4gICAgbW5lbW9uaWM6ICdCSVQnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnWicsXG4gICAgICAnMCcsXG4gICAgICAnMScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDUyJyxcbiAgICBvcGVyYW5kMTogJzInLFxuICAgIG9wZXJhbmQyOiAnRCdcbiAgfSxcbiAgMHg1Mzoge1xuICAgIG1uZW1vbmljOiAnQklUJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICA4XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJ1onLFxuICAgICAgJzAnLFxuICAgICAgJzEnLFxuICAgICAgJy0nXG4gICAgXSxcbiAgICBhZGRyOiAnMHg1MycsXG4gICAgb3BlcmFuZDE6ICcyJyxcbiAgICBvcGVyYW5kMjogJ0UnXG4gIH0sXG4gIDB4NTQ6IHtcbiAgICBtbmVtb25pYzogJ0JJVCcsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGN5Y2xlczogW1xuICAgICAgOFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICdaJyxcbiAgICAgICcwJyxcbiAgICAgICcxJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4NTQnLFxuICAgIG9wZXJhbmQxOiAnMicsXG4gICAgb3BlcmFuZDI6ICdIJ1xuICB9LFxuICAweDU1OiB7XG4gICAgbW5lbW9uaWM6ICdCSVQnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnWicsXG4gICAgICAnMCcsXG4gICAgICAnMScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDU1JyxcbiAgICBvcGVyYW5kMTogJzInLFxuICAgIG9wZXJhbmQyOiAnTCdcbiAgfSxcbiAgMHg1Njoge1xuICAgIG1uZW1vbmljOiAnQklUJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICAxNlxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICdaJyxcbiAgICAgICcwJyxcbiAgICAgICcxJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4NTYnLFxuICAgIG9wZXJhbmQxOiAnMicsXG4gICAgb3BlcmFuZDI6ICcoSEwpJ1xuICB9LFxuICAweDU3OiB7XG4gICAgbW5lbW9uaWM6ICdCSVQnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnWicsXG4gICAgICAnMCcsXG4gICAgICAnMScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDU3JyxcbiAgICBvcGVyYW5kMTogJzInLFxuICAgIG9wZXJhbmQyOiAnQSdcbiAgfSxcbiAgMHg1ODoge1xuICAgIG1uZW1vbmljOiAnQklUJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICA4XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJ1onLFxuICAgICAgJzAnLFxuICAgICAgJzEnLFxuICAgICAgJy0nXG4gICAgXSxcbiAgICBhZGRyOiAnMHg1OCcsXG4gICAgb3BlcmFuZDE6ICczJyxcbiAgICBvcGVyYW5kMjogJ0InXG4gIH0sXG4gIDB4NTk6IHtcbiAgICBtbmVtb25pYzogJ0JJVCcsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGN5Y2xlczogW1xuICAgICAgOFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICdaJyxcbiAgICAgICcwJyxcbiAgICAgICcxJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4NTknLFxuICAgIG9wZXJhbmQxOiAnMycsXG4gICAgb3BlcmFuZDI6ICdDJ1xuICB9LFxuICAweDVhOiB7XG4gICAgbW5lbW9uaWM6ICdCSVQnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnWicsXG4gICAgICAnMCcsXG4gICAgICAnMScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDVhJyxcbiAgICBvcGVyYW5kMTogJzMnLFxuICAgIG9wZXJhbmQyOiAnRCdcbiAgfSxcbiAgMHg1Yjoge1xuICAgIG1uZW1vbmljOiAnQklUJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICA4XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJ1onLFxuICAgICAgJzAnLFxuICAgICAgJzEnLFxuICAgICAgJy0nXG4gICAgXSxcbiAgICBhZGRyOiAnMHg1YicsXG4gICAgb3BlcmFuZDE6ICczJyxcbiAgICBvcGVyYW5kMjogJ0UnXG4gIH0sXG4gIDB4NWM6IHtcbiAgICBtbmVtb25pYzogJ0JJVCcsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGN5Y2xlczogW1xuICAgICAgOFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICdaJyxcbiAgICAgICcwJyxcbiAgICAgICcxJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4NWMnLFxuICAgIG9wZXJhbmQxOiAnMycsXG4gICAgb3BlcmFuZDI6ICdIJ1xuICB9LFxuICAweDVkOiB7XG4gICAgbW5lbW9uaWM6ICdCSVQnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnWicsXG4gICAgICAnMCcsXG4gICAgICAnMScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDVkJyxcbiAgICBvcGVyYW5kMTogJzMnLFxuICAgIG9wZXJhbmQyOiAnTCdcbiAgfSxcbiAgMHg1ZToge1xuICAgIG1uZW1vbmljOiAnQklUJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICAxNlxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICdaJyxcbiAgICAgICcwJyxcbiAgICAgICcxJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4NWUnLFxuICAgIG9wZXJhbmQxOiAnMycsXG4gICAgb3BlcmFuZDI6ICcoSEwpJ1xuICB9LFxuICAweDVmOiB7XG4gICAgbW5lbW9uaWM6ICdCSVQnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnWicsXG4gICAgICAnMCcsXG4gICAgICAnMScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDVmJyxcbiAgICBvcGVyYW5kMTogJzMnLFxuICAgIG9wZXJhbmQyOiAnQSdcbiAgfSxcbiAgMHg2MDoge1xuICAgIG1uZW1vbmljOiAnQklUJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICA4XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJ1onLFxuICAgICAgJzAnLFxuICAgICAgJzEnLFxuICAgICAgJy0nXG4gICAgXSxcbiAgICBhZGRyOiAnMHg2MCcsXG4gICAgb3BlcmFuZDE6ICc0JyxcbiAgICBvcGVyYW5kMjogJ0InXG4gIH0sXG4gIDB4NjE6IHtcbiAgICBtbmVtb25pYzogJ0JJVCcsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGN5Y2xlczogW1xuICAgICAgOFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICdaJyxcbiAgICAgICcwJyxcbiAgICAgICcxJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4NjEnLFxuICAgIG9wZXJhbmQxOiAnNCcsXG4gICAgb3BlcmFuZDI6ICdDJ1xuICB9LFxuICAweDYyOiB7XG4gICAgbW5lbW9uaWM6ICdCSVQnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnWicsXG4gICAgICAnMCcsXG4gICAgICAnMScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDYyJyxcbiAgICBvcGVyYW5kMTogJzQnLFxuICAgIG9wZXJhbmQyOiAnRCdcbiAgfSxcbiAgMHg2Mzoge1xuICAgIG1uZW1vbmljOiAnQklUJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICA4XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJ1onLFxuICAgICAgJzAnLFxuICAgICAgJzEnLFxuICAgICAgJy0nXG4gICAgXSxcbiAgICBhZGRyOiAnMHg2MycsXG4gICAgb3BlcmFuZDE6ICc0JyxcbiAgICBvcGVyYW5kMjogJ0UnXG4gIH0sXG4gIDB4NjQ6IHtcbiAgICBtbmVtb25pYzogJ0JJVCcsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGN5Y2xlczogW1xuICAgICAgOFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICdaJyxcbiAgICAgICcwJyxcbiAgICAgICcxJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4NjQnLFxuICAgIG9wZXJhbmQxOiAnNCcsXG4gICAgb3BlcmFuZDI6ICdIJ1xuICB9LFxuICAweDY1OiB7XG4gICAgbW5lbW9uaWM6ICdCSVQnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnWicsXG4gICAgICAnMCcsXG4gICAgICAnMScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDY1JyxcbiAgICBvcGVyYW5kMTogJzQnLFxuICAgIG9wZXJhbmQyOiAnTCdcbiAgfSxcbiAgMHg2Njoge1xuICAgIG1uZW1vbmljOiAnQklUJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICAxNlxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICdaJyxcbiAgICAgICcwJyxcbiAgICAgICcxJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4NjYnLFxuICAgIG9wZXJhbmQxOiAnNCcsXG4gICAgb3BlcmFuZDI6ICcoSEwpJ1xuICB9LFxuICAweDY3OiB7XG4gICAgbW5lbW9uaWM6ICdCSVQnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnWicsXG4gICAgICAnMCcsXG4gICAgICAnMScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDY3JyxcbiAgICBvcGVyYW5kMTogJzQnLFxuICAgIG9wZXJhbmQyOiAnQSdcbiAgfSxcbiAgMHg2ODoge1xuICAgIG1uZW1vbmljOiAnQklUJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICA4XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJ1onLFxuICAgICAgJzAnLFxuICAgICAgJzEnLFxuICAgICAgJy0nXG4gICAgXSxcbiAgICBhZGRyOiAnMHg2OCcsXG4gICAgb3BlcmFuZDE6ICc1JyxcbiAgICBvcGVyYW5kMjogJ0InXG4gIH0sXG4gIDB4Njk6IHtcbiAgICBtbmVtb25pYzogJ0JJVCcsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGN5Y2xlczogW1xuICAgICAgOFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICdaJyxcbiAgICAgICcwJyxcbiAgICAgICcxJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4NjknLFxuICAgIG9wZXJhbmQxOiAnNScsXG4gICAgb3BlcmFuZDI6ICdDJ1xuICB9LFxuICAweDZhOiB7XG4gICAgbW5lbW9uaWM6ICdCSVQnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnWicsXG4gICAgICAnMCcsXG4gICAgICAnMScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDZhJyxcbiAgICBvcGVyYW5kMTogJzUnLFxuICAgIG9wZXJhbmQyOiAnRCdcbiAgfSxcbiAgMHg2Yjoge1xuICAgIG1uZW1vbmljOiAnQklUJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICA4XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJ1onLFxuICAgICAgJzAnLFxuICAgICAgJzEnLFxuICAgICAgJy0nXG4gICAgXSxcbiAgICBhZGRyOiAnMHg2YicsXG4gICAgb3BlcmFuZDE6ICc1JyxcbiAgICBvcGVyYW5kMjogJ0UnXG4gIH0sXG4gIDB4NmM6IHtcbiAgICBtbmVtb25pYzogJ0JJVCcsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGN5Y2xlczogW1xuICAgICAgOFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICdaJyxcbiAgICAgICcwJyxcbiAgICAgICcxJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4NmMnLFxuICAgIG9wZXJhbmQxOiAnNScsXG4gICAgb3BlcmFuZDI6ICdIJ1xuICB9LFxuICAweDZkOiB7XG4gICAgbW5lbW9uaWM6ICdCSVQnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnWicsXG4gICAgICAnMCcsXG4gICAgICAnMScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDZkJyxcbiAgICBvcGVyYW5kMTogJzUnLFxuICAgIG9wZXJhbmQyOiAnTCdcbiAgfSxcbiAgMHg2ZToge1xuICAgIG1uZW1vbmljOiAnQklUJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICAxNlxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICdaJyxcbiAgICAgICcwJyxcbiAgICAgICcxJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4NmUnLFxuICAgIG9wZXJhbmQxOiAnNScsXG4gICAgb3BlcmFuZDI6ICcoSEwpJ1xuICB9LFxuICAweDZmOiB7XG4gICAgbW5lbW9uaWM6ICdCSVQnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnWicsXG4gICAgICAnMCcsXG4gICAgICAnMScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDZmJyxcbiAgICBvcGVyYW5kMTogJzUnLFxuICAgIG9wZXJhbmQyOiAnQSdcbiAgfSxcbiAgMHg3MDoge1xuICAgIG1uZW1vbmljOiAnQklUJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICA4XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJ1onLFxuICAgICAgJzAnLFxuICAgICAgJzEnLFxuICAgICAgJy0nXG4gICAgXSxcbiAgICBhZGRyOiAnMHg3MCcsXG4gICAgb3BlcmFuZDE6ICc2JyxcbiAgICBvcGVyYW5kMjogJ0InXG4gIH0sXG4gIDB4NzE6IHtcbiAgICBtbmVtb25pYzogJ0JJVCcsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGN5Y2xlczogW1xuICAgICAgOFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICdaJyxcbiAgICAgICcwJyxcbiAgICAgICcxJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4NzEnLFxuICAgIG9wZXJhbmQxOiAnNicsXG4gICAgb3BlcmFuZDI6ICdDJ1xuICB9LFxuICAweDcyOiB7XG4gICAgbW5lbW9uaWM6ICdCSVQnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnWicsXG4gICAgICAnMCcsXG4gICAgICAnMScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDcyJyxcbiAgICBvcGVyYW5kMTogJzYnLFxuICAgIG9wZXJhbmQyOiAnRCdcbiAgfSxcbiAgMHg3Mzoge1xuICAgIG1uZW1vbmljOiAnQklUJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICA4XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJ1onLFxuICAgICAgJzAnLFxuICAgICAgJzEnLFxuICAgICAgJy0nXG4gICAgXSxcbiAgICBhZGRyOiAnMHg3MycsXG4gICAgb3BlcmFuZDE6ICc2JyxcbiAgICBvcGVyYW5kMjogJ0UnXG4gIH0sXG4gIDB4NzQ6IHtcbiAgICBtbmVtb25pYzogJ0JJVCcsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGN5Y2xlczogW1xuICAgICAgOFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICdaJyxcbiAgICAgICcwJyxcbiAgICAgICcxJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4NzQnLFxuICAgIG9wZXJhbmQxOiAnNicsXG4gICAgb3BlcmFuZDI6ICdIJ1xuICB9LFxuICAweDc1OiB7XG4gICAgbW5lbW9uaWM6ICdCSVQnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnWicsXG4gICAgICAnMCcsXG4gICAgICAnMScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDc1JyxcbiAgICBvcGVyYW5kMTogJzYnLFxuICAgIG9wZXJhbmQyOiAnTCdcbiAgfSxcbiAgMHg3Njoge1xuICAgIG1uZW1vbmljOiAnQklUJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICAxNlxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICdaJyxcbiAgICAgICcwJyxcbiAgICAgICcxJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4NzYnLFxuICAgIG9wZXJhbmQxOiAnNicsXG4gICAgb3BlcmFuZDI6ICcoSEwpJ1xuICB9LFxuICAweDc3OiB7XG4gICAgbW5lbW9uaWM6ICdCSVQnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnWicsXG4gICAgICAnMCcsXG4gICAgICAnMScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDc3JyxcbiAgICBvcGVyYW5kMTogJzYnLFxuICAgIG9wZXJhbmQyOiAnQSdcbiAgfSxcbiAgMHg3ODoge1xuICAgIG1uZW1vbmljOiAnQklUJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICA4XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJ1onLFxuICAgICAgJzAnLFxuICAgICAgJzEnLFxuICAgICAgJy0nXG4gICAgXSxcbiAgICBhZGRyOiAnMHg3OCcsXG4gICAgb3BlcmFuZDE6ICc3JyxcbiAgICBvcGVyYW5kMjogJ0InXG4gIH0sXG4gIDB4Nzk6IHtcbiAgICBtbmVtb25pYzogJ0JJVCcsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGN5Y2xlczogW1xuICAgICAgOFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICdaJyxcbiAgICAgICcwJyxcbiAgICAgICcxJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4NzknLFxuICAgIG9wZXJhbmQxOiAnNycsXG4gICAgb3BlcmFuZDI6ICdDJ1xuICB9LFxuICAweDdhOiB7XG4gICAgbW5lbW9uaWM6ICdCSVQnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnWicsXG4gICAgICAnMCcsXG4gICAgICAnMScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDdhJyxcbiAgICBvcGVyYW5kMTogJzcnLFxuICAgIG9wZXJhbmQyOiAnRCdcbiAgfSxcbiAgMHg3Yjoge1xuICAgIG1uZW1vbmljOiAnQklUJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICA4XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJ1onLFxuICAgICAgJzAnLFxuICAgICAgJzEnLFxuICAgICAgJy0nXG4gICAgXSxcbiAgICBhZGRyOiAnMHg3YicsXG4gICAgb3BlcmFuZDE6ICc3JyxcbiAgICBvcGVyYW5kMjogJ0UnXG4gIH0sXG4gIDB4N2M6IHtcbiAgICBtbmVtb25pYzogJ0JJVCcsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGN5Y2xlczogW1xuICAgICAgOFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICdaJyxcbiAgICAgICcwJyxcbiAgICAgICcxJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4N2MnLFxuICAgIG9wZXJhbmQxOiAnNycsXG4gICAgb3BlcmFuZDI6ICdIJ1xuICB9LFxuICAweDdkOiB7XG4gICAgbW5lbW9uaWM6ICdCSVQnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnWicsXG4gICAgICAnMCcsXG4gICAgICAnMScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDdkJyxcbiAgICBvcGVyYW5kMTogJzcnLFxuICAgIG9wZXJhbmQyOiAnTCdcbiAgfSxcbiAgMHg3ZToge1xuICAgIG1uZW1vbmljOiAnQklUJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICAxNlxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICdaJyxcbiAgICAgICcwJyxcbiAgICAgICcxJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4N2UnLFxuICAgIG9wZXJhbmQxOiAnNycsXG4gICAgb3BlcmFuZDI6ICcoSEwpJ1xuICB9LFxuICAweDdmOiB7XG4gICAgbW5lbW9uaWM6ICdCSVQnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnWicsXG4gICAgICAnMCcsXG4gICAgICAnMScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDdmJyxcbiAgICBvcGVyYW5kMTogJzcnLFxuICAgIG9wZXJhbmQyOiAnQSdcbiAgfSxcbiAgMHg4MDoge1xuICAgIG1uZW1vbmljOiAnUkVTJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICA4XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nXG4gICAgXSxcbiAgICBhZGRyOiAnMHg4MCcsXG4gICAgb3BlcmFuZDE6ICcwJyxcbiAgICBvcGVyYW5kMjogJ0InXG4gIH0sXG4gIDB4ODE6IHtcbiAgICBtbmVtb25pYzogJ1JFUycsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGN5Y2xlczogW1xuICAgICAgOFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4ODEnLFxuICAgIG9wZXJhbmQxOiAnMCcsXG4gICAgb3BlcmFuZDI6ICdDJ1xuICB9LFxuICAweDgyOiB7XG4gICAgbW5lbW9uaWM6ICdSRVMnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDgyJyxcbiAgICBvcGVyYW5kMTogJzAnLFxuICAgIG9wZXJhbmQyOiAnRCdcbiAgfSxcbiAgMHg4Mzoge1xuICAgIG1uZW1vbmljOiAnUkVTJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICA4XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nXG4gICAgXSxcbiAgICBhZGRyOiAnMHg4MycsXG4gICAgb3BlcmFuZDE6ICcwJyxcbiAgICBvcGVyYW5kMjogJ0UnXG4gIH0sXG4gIDB4ODQ6IHtcbiAgICBtbmVtb25pYzogJ1JFUycsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGN5Y2xlczogW1xuICAgICAgOFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4ODQnLFxuICAgIG9wZXJhbmQxOiAnMCcsXG4gICAgb3BlcmFuZDI6ICdIJ1xuICB9LFxuICAweDg1OiB7XG4gICAgbW5lbW9uaWM6ICdSRVMnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDg1JyxcbiAgICBvcGVyYW5kMTogJzAnLFxuICAgIG9wZXJhbmQyOiAnTCdcbiAgfSxcbiAgMHg4Njoge1xuICAgIG1uZW1vbmljOiAnUkVTJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICAxNlxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4ODYnLFxuICAgIG9wZXJhbmQxOiAnMCcsXG4gICAgb3BlcmFuZDI6ICcoSEwpJ1xuICB9LFxuICAweDg3OiB7XG4gICAgbW5lbW9uaWM6ICdSRVMnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDg3JyxcbiAgICBvcGVyYW5kMTogJzAnLFxuICAgIG9wZXJhbmQyOiAnQSdcbiAgfSxcbiAgMHg4ODoge1xuICAgIG1uZW1vbmljOiAnUkVTJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICA4XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nXG4gICAgXSxcbiAgICBhZGRyOiAnMHg4OCcsXG4gICAgb3BlcmFuZDE6ICcxJyxcbiAgICBvcGVyYW5kMjogJ0InXG4gIH0sXG4gIDB4ODk6IHtcbiAgICBtbmVtb25pYzogJ1JFUycsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGN5Y2xlczogW1xuICAgICAgOFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4ODknLFxuICAgIG9wZXJhbmQxOiAnMScsXG4gICAgb3BlcmFuZDI6ICdDJ1xuICB9LFxuICAweDhhOiB7XG4gICAgbW5lbW9uaWM6ICdSRVMnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDhhJyxcbiAgICBvcGVyYW5kMTogJzEnLFxuICAgIG9wZXJhbmQyOiAnRCdcbiAgfSxcbiAgMHg4Yjoge1xuICAgIG1uZW1vbmljOiAnUkVTJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICA4XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nXG4gICAgXSxcbiAgICBhZGRyOiAnMHg4YicsXG4gICAgb3BlcmFuZDE6ICcxJyxcbiAgICBvcGVyYW5kMjogJ0UnXG4gIH0sXG4gIDB4OGM6IHtcbiAgICBtbmVtb25pYzogJ1JFUycsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGN5Y2xlczogW1xuICAgICAgOFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4OGMnLFxuICAgIG9wZXJhbmQxOiAnMScsXG4gICAgb3BlcmFuZDI6ICdIJ1xuICB9LFxuICAweDhkOiB7XG4gICAgbW5lbW9uaWM6ICdSRVMnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDhkJyxcbiAgICBvcGVyYW5kMTogJzEnLFxuICAgIG9wZXJhbmQyOiAnTCdcbiAgfSxcbiAgMHg4ZToge1xuICAgIG1uZW1vbmljOiAnUkVTJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICAxNlxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4OGUnLFxuICAgIG9wZXJhbmQxOiAnMScsXG4gICAgb3BlcmFuZDI6ICcoSEwpJ1xuICB9LFxuICAweDhmOiB7XG4gICAgbW5lbW9uaWM6ICdSRVMnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDhmJyxcbiAgICBvcGVyYW5kMTogJzEnLFxuICAgIG9wZXJhbmQyOiAnQSdcbiAgfSxcbiAgMHg5MDoge1xuICAgIG1uZW1vbmljOiAnUkVTJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICA4XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nXG4gICAgXSxcbiAgICBhZGRyOiAnMHg5MCcsXG4gICAgb3BlcmFuZDE6ICcyJyxcbiAgICBvcGVyYW5kMjogJ0InXG4gIH0sXG4gIDB4OTE6IHtcbiAgICBtbmVtb25pYzogJ1JFUycsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGN5Y2xlczogW1xuICAgICAgOFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4OTEnLFxuICAgIG9wZXJhbmQxOiAnMicsXG4gICAgb3BlcmFuZDI6ICdDJ1xuICB9LFxuICAweDkyOiB7XG4gICAgbW5lbW9uaWM6ICdSRVMnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDkyJyxcbiAgICBvcGVyYW5kMTogJzInLFxuICAgIG9wZXJhbmQyOiAnRCdcbiAgfSxcbiAgMHg5Mzoge1xuICAgIG1uZW1vbmljOiAnUkVTJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICA4XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nXG4gICAgXSxcbiAgICBhZGRyOiAnMHg5MycsXG4gICAgb3BlcmFuZDE6ICcyJyxcbiAgICBvcGVyYW5kMjogJ0UnXG4gIH0sXG4gIDB4OTQ6IHtcbiAgICBtbmVtb25pYzogJ1JFUycsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGN5Y2xlczogW1xuICAgICAgOFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4OTQnLFxuICAgIG9wZXJhbmQxOiAnMicsXG4gICAgb3BlcmFuZDI6ICdIJ1xuICB9LFxuICAweDk1OiB7XG4gICAgbW5lbW9uaWM6ICdSRVMnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDk1JyxcbiAgICBvcGVyYW5kMTogJzInLFxuICAgIG9wZXJhbmQyOiAnTCdcbiAgfSxcbiAgMHg5Njoge1xuICAgIG1uZW1vbmljOiAnUkVTJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICAxNlxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4OTYnLFxuICAgIG9wZXJhbmQxOiAnMicsXG4gICAgb3BlcmFuZDI6ICcoSEwpJ1xuICB9LFxuICAweDk3OiB7XG4gICAgbW5lbW9uaWM6ICdSRVMnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDk3JyxcbiAgICBvcGVyYW5kMTogJzInLFxuICAgIG9wZXJhbmQyOiAnQSdcbiAgfSxcbiAgMHg5ODoge1xuICAgIG1uZW1vbmljOiAnUkVTJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICA4XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nXG4gICAgXSxcbiAgICBhZGRyOiAnMHg5OCcsXG4gICAgb3BlcmFuZDE6ICczJyxcbiAgICBvcGVyYW5kMjogJ0InXG4gIH0sXG4gIDB4OTk6IHtcbiAgICBtbmVtb25pYzogJ1JFUycsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGN5Y2xlczogW1xuICAgICAgOFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4OTknLFxuICAgIG9wZXJhbmQxOiAnMycsXG4gICAgb3BlcmFuZDI6ICdDJ1xuICB9LFxuICAweDlhOiB7XG4gICAgbW5lbW9uaWM6ICdSRVMnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDlhJyxcbiAgICBvcGVyYW5kMTogJzMnLFxuICAgIG9wZXJhbmQyOiAnRCdcbiAgfSxcbiAgMHg5Yjoge1xuICAgIG1uZW1vbmljOiAnUkVTJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICA4XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nXG4gICAgXSxcbiAgICBhZGRyOiAnMHg5YicsXG4gICAgb3BlcmFuZDE6ICczJyxcbiAgICBvcGVyYW5kMjogJ0UnXG4gIH0sXG4gIDB4OWM6IHtcbiAgICBtbmVtb25pYzogJ1JFUycsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGN5Y2xlczogW1xuICAgICAgOFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4OWMnLFxuICAgIG9wZXJhbmQxOiAnMycsXG4gICAgb3BlcmFuZDI6ICdIJ1xuICB9LFxuICAweDlkOiB7XG4gICAgbW5lbW9uaWM6ICdSRVMnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDlkJyxcbiAgICBvcGVyYW5kMTogJzMnLFxuICAgIG9wZXJhbmQyOiAnTCdcbiAgfSxcbiAgMHg5ZToge1xuICAgIG1uZW1vbmljOiAnUkVTJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICAxNlxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4OWUnLFxuICAgIG9wZXJhbmQxOiAnMycsXG4gICAgb3BlcmFuZDI6ICcoSEwpJ1xuICB9LFxuICAweDlmOiB7XG4gICAgbW5lbW9uaWM6ICdSRVMnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweDlmJyxcbiAgICBvcGVyYW5kMTogJzMnLFxuICAgIG9wZXJhbmQyOiAnQSdcbiAgfSxcbiAgMHhhMDoge1xuICAgIG1uZW1vbmljOiAnUkVTJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICA4XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nXG4gICAgXSxcbiAgICBhZGRyOiAnMHhhMCcsXG4gICAgb3BlcmFuZDE6ICc0JyxcbiAgICBvcGVyYW5kMjogJ0InXG4gIH0sXG4gIDB4YTE6IHtcbiAgICBtbmVtb25pYzogJ1JFUycsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGN5Y2xlczogW1xuICAgICAgOFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4YTEnLFxuICAgIG9wZXJhbmQxOiAnNCcsXG4gICAgb3BlcmFuZDI6ICdDJ1xuICB9LFxuICAweGEyOiB7XG4gICAgbW5lbW9uaWM6ICdSRVMnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweGEyJyxcbiAgICBvcGVyYW5kMTogJzQnLFxuICAgIG9wZXJhbmQyOiAnRCdcbiAgfSxcbiAgMHhhMzoge1xuICAgIG1uZW1vbmljOiAnUkVTJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICA4XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nXG4gICAgXSxcbiAgICBhZGRyOiAnMHhhMycsXG4gICAgb3BlcmFuZDE6ICc0JyxcbiAgICBvcGVyYW5kMjogJ0UnXG4gIH0sXG4gIDB4YTQ6IHtcbiAgICBtbmVtb25pYzogJ1JFUycsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGN5Y2xlczogW1xuICAgICAgOFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4YTQnLFxuICAgIG9wZXJhbmQxOiAnNCcsXG4gICAgb3BlcmFuZDI6ICdIJ1xuICB9LFxuICAweGE1OiB7XG4gICAgbW5lbW9uaWM6ICdSRVMnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweGE1JyxcbiAgICBvcGVyYW5kMTogJzQnLFxuICAgIG9wZXJhbmQyOiAnTCdcbiAgfSxcbiAgMHhhNjoge1xuICAgIG1uZW1vbmljOiAnUkVTJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICAxNlxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4YTYnLFxuICAgIG9wZXJhbmQxOiAnNCcsXG4gICAgb3BlcmFuZDI6ICcoSEwpJ1xuICB9LFxuICAweGE3OiB7XG4gICAgbW5lbW9uaWM6ICdSRVMnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweGE3JyxcbiAgICBvcGVyYW5kMTogJzQnLFxuICAgIG9wZXJhbmQyOiAnQSdcbiAgfSxcbiAgMHhhODoge1xuICAgIG1uZW1vbmljOiAnUkVTJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICA4XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nXG4gICAgXSxcbiAgICBhZGRyOiAnMHhhOCcsXG4gICAgb3BlcmFuZDE6ICc1JyxcbiAgICBvcGVyYW5kMjogJ0InXG4gIH0sXG4gIDB4YTk6IHtcbiAgICBtbmVtb25pYzogJ1JFUycsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGN5Y2xlczogW1xuICAgICAgOFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4YTknLFxuICAgIG9wZXJhbmQxOiAnNScsXG4gICAgb3BlcmFuZDI6ICdDJ1xuICB9LFxuICAweGFhOiB7XG4gICAgbW5lbW9uaWM6ICdSRVMnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweGFhJyxcbiAgICBvcGVyYW5kMTogJzUnLFxuICAgIG9wZXJhbmQyOiAnRCdcbiAgfSxcbiAgMHhhYjoge1xuICAgIG1uZW1vbmljOiAnUkVTJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICA4XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nXG4gICAgXSxcbiAgICBhZGRyOiAnMHhhYicsXG4gICAgb3BlcmFuZDE6ICc1JyxcbiAgICBvcGVyYW5kMjogJ0UnXG4gIH0sXG4gIDB4YWM6IHtcbiAgICBtbmVtb25pYzogJ1JFUycsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGN5Y2xlczogW1xuICAgICAgOFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4YWMnLFxuICAgIG9wZXJhbmQxOiAnNScsXG4gICAgb3BlcmFuZDI6ICdIJ1xuICB9LFxuICAweGFkOiB7XG4gICAgbW5lbW9uaWM6ICdSRVMnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweGFkJyxcbiAgICBvcGVyYW5kMTogJzUnLFxuICAgIG9wZXJhbmQyOiAnTCdcbiAgfSxcbiAgMHhhZToge1xuICAgIG1uZW1vbmljOiAnUkVTJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICAxNlxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4YWUnLFxuICAgIG9wZXJhbmQxOiAnNScsXG4gICAgb3BlcmFuZDI6ICcoSEwpJ1xuICB9LFxuICAweGFmOiB7XG4gICAgbW5lbW9uaWM6ICdSRVMnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweGFmJyxcbiAgICBvcGVyYW5kMTogJzUnLFxuICAgIG9wZXJhbmQyOiAnQSdcbiAgfSxcbiAgMHhiMDoge1xuICAgIG1uZW1vbmljOiAnUkVTJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICA4XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nXG4gICAgXSxcbiAgICBhZGRyOiAnMHhiMCcsXG4gICAgb3BlcmFuZDE6ICc2JyxcbiAgICBvcGVyYW5kMjogJ0InXG4gIH0sXG4gIDB4YjE6IHtcbiAgICBtbmVtb25pYzogJ1JFUycsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGN5Y2xlczogW1xuICAgICAgOFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4YjEnLFxuICAgIG9wZXJhbmQxOiAnNicsXG4gICAgb3BlcmFuZDI6ICdDJ1xuICB9LFxuICAweGIyOiB7XG4gICAgbW5lbW9uaWM6ICdSRVMnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweGIyJyxcbiAgICBvcGVyYW5kMTogJzYnLFxuICAgIG9wZXJhbmQyOiAnRCdcbiAgfSxcbiAgMHhiMzoge1xuICAgIG1uZW1vbmljOiAnUkVTJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICA4XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nXG4gICAgXSxcbiAgICBhZGRyOiAnMHhiMycsXG4gICAgb3BlcmFuZDE6ICc2JyxcbiAgICBvcGVyYW5kMjogJ0UnXG4gIH0sXG4gIDB4YjQ6IHtcbiAgICBtbmVtb25pYzogJ1JFUycsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGN5Y2xlczogW1xuICAgICAgOFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4YjQnLFxuICAgIG9wZXJhbmQxOiAnNicsXG4gICAgb3BlcmFuZDI6ICdIJ1xuICB9LFxuICAweGI1OiB7XG4gICAgbW5lbW9uaWM6ICdSRVMnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweGI1JyxcbiAgICBvcGVyYW5kMTogJzYnLFxuICAgIG9wZXJhbmQyOiAnTCdcbiAgfSxcbiAgMHhiNjoge1xuICAgIG1uZW1vbmljOiAnUkVTJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICAxNlxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4YjYnLFxuICAgIG9wZXJhbmQxOiAnNicsXG4gICAgb3BlcmFuZDI6ICcoSEwpJ1xuICB9LFxuICAweGI3OiB7XG4gICAgbW5lbW9uaWM6ICdSRVMnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweGI3JyxcbiAgICBvcGVyYW5kMTogJzYnLFxuICAgIG9wZXJhbmQyOiAnQSdcbiAgfSxcbiAgMHhiODoge1xuICAgIG1uZW1vbmljOiAnUkVTJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICA4XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nXG4gICAgXSxcbiAgICBhZGRyOiAnMHhiOCcsXG4gICAgb3BlcmFuZDE6ICc3JyxcbiAgICBvcGVyYW5kMjogJ0InXG4gIH0sXG4gIDB4Yjk6IHtcbiAgICBtbmVtb25pYzogJ1JFUycsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGN5Y2xlczogW1xuICAgICAgOFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4YjknLFxuICAgIG9wZXJhbmQxOiAnNycsXG4gICAgb3BlcmFuZDI6ICdDJ1xuICB9LFxuICAweGJhOiB7XG4gICAgbW5lbW9uaWM6ICdSRVMnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweGJhJyxcbiAgICBvcGVyYW5kMTogJzcnLFxuICAgIG9wZXJhbmQyOiAnRCdcbiAgfSxcbiAgMHhiYjoge1xuICAgIG1uZW1vbmljOiAnUkVTJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICA4XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nXG4gICAgXSxcbiAgICBhZGRyOiAnMHhiYicsXG4gICAgb3BlcmFuZDE6ICc3JyxcbiAgICBvcGVyYW5kMjogJ0UnXG4gIH0sXG4gIDB4YmM6IHtcbiAgICBtbmVtb25pYzogJ1JFUycsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGN5Y2xlczogW1xuICAgICAgOFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4YmMnLFxuICAgIG9wZXJhbmQxOiAnNycsXG4gICAgb3BlcmFuZDI6ICdIJ1xuICB9LFxuICAweGJkOiB7XG4gICAgbW5lbW9uaWM6ICdSRVMnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweGJkJyxcbiAgICBvcGVyYW5kMTogJzcnLFxuICAgIG9wZXJhbmQyOiAnTCdcbiAgfSxcbiAgMHhiZToge1xuICAgIG1uZW1vbmljOiAnUkVTJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICAxNlxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4YmUnLFxuICAgIG9wZXJhbmQxOiAnNycsXG4gICAgb3BlcmFuZDI6ICcoSEwpJ1xuICB9LFxuICAweGJmOiB7XG4gICAgbW5lbW9uaWM6ICdSRVMnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweGJmJyxcbiAgICBvcGVyYW5kMTogJzcnLFxuICAgIG9wZXJhbmQyOiAnQSdcbiAgfSxcbiAgMHhjMDoge1xuICAgIG1uZW1vbmljOiAnU0VUJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICA4XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nXG4gICAgXSxcbiAgICBhZGRyOiAnMHhjMCcsXG4gICAgb3BlcmFuZDE6ICcwJyxcbiAgICBvcGVyYW5kMjogJ0InXG4gIH0sXG4gIDB4YzE6IHtcbiAgICBtbmVtb25pYzogJ1NFVCcsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGN5Y2xlczogW1xuICAgICAgOFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4YzEnLFxuICAgIG9wZXJhbmQxOiAnMCcsXG4gICAgb3BlcmFuZDI6ICdDJ1xuICB9LFxuICAweGMyOiB7XG4gICAgbW5lbW9uaWM6ICdTRVQnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweGMyJyxcbiAgICBvcGVyYW5kMTogJzAnLFxuICAgIG9wZXJhbmQyOiAnRCdcbiAgfSxcbiAgMHhjMzoge1xuICAgIG1uZW1vbmljOiAnU0VUJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICA4XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nXG4gICAgXSxcbiAgICBhZGRyOiAnMHhjMycsXG4gICAgb3BlcmFuZDE6ICcwJyxcbiAgICBvcGVyYW5kMjogJ0UnXG4gIH0sXG4gIDB4YzQ6IHtcbiAgICBtbmVtb25pYzogJ1NFVCcsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGN5Y2xlczogW1xuICAgICAgOFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4YzQnLFxuICAgIG9wZXJhbmQxOiAnMCcsXG4gICAgb3BlcmFuZDI6ICdIJ1xuICB9LFxuICAweGM1OiB7XG4gICAgbW5lbW9uaWM6ICdTRVQnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweGM1JyxcbiAgICBvcGVyYW5kMTogJzAnLFxuICAgIG9wZXJhbmQyOiAnTCdcbiAgfSxcbiAgMHhjNjoge1xuICAgIG1uZW1vbmljOiAnU0VUJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICAxNlxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4YzYnLFxuICAgIG9wZXJhbmQxOiAnMCcsXG4gICAgb3BlcmFuZDI6ICcoSEwpJ1xuICB9LFxuICAweGM3OiB7XG4gICAgbW5lbW9uaWM6ICdTRVQnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweGM3JyxcbiAgICBvcGVyYW5kMTogJzAnLFxuICAgIG9wZXJhbmQyOiAnQSdcbiAgfSxcbiAgMHhjODoge1xuICAgIG1uZW1vbmljOiAnU0VUJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICA4XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nXG4gICAgXSxcbiAgICBhZGRyOiAnMHhjOCcsXG4gICAgb3BlcmFuZDE6ICcxJyxcbiAgICBvcGVyYW5kMjogJ0InXG4gIH0sXG4gIDB4Yzk6IHtcbiAgICBtbmVtb25pYzogJ1NFVCcsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGN5Y2xlczogW1xuICAgICAgOFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4YzknLFxuICAgIG9wZXJhbmQxOiAnMScsXG4gICAgb3BlcmFuZDI6ICdDJ1xuICB9LFxuICAweGNhOiB7XG4gICAgbW5lbW9uaWM6ICdTRVQnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweGNhJyxcbiAgICBvcGVyYW5kMTogJzEnLFxuICAgIG9wZXJhbmQyOiAnRCdcbiAgfSxcbiAgMHhjYjoge1xuICAgIG1uZW1vbmljOiAnU0VUJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICA4XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nXG4gICAgXSxcbiAgICBhZGRyOiAnMHhjYicsXG4gICAgb3BlcmFuZDE6ICcxJyxcbiAgICBvcGVyYW5kMjogJ0UnXG4gIH0sXG4gIDB4Y2M6IHtcbiAgICBtbmVtb25pYzogJ1NFVCcsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGN5Y2xlczogW1xuICAgICAgOFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4Y2MnLFxuICAgIG9wZXJhbmQxOiAnMScsXG4gICAgb3BlcmFuZDI6ICdIJ1xuICB9LFxuICAweGNkOiB7XG4gICAgbW5lbW9uaWM6ICdTRVQnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweGNkJyxcbiAgICBvcGVyYW5kMTogJzEnLFxuICAgIG9wZXJhbmQyOiAnTCdcbiAgfSxcbiAgMHhjZToge1xuICAgIG1uZW1vbmljOiAnU0VUJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICAxNlxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4Y2UnLFxuICAgIG9wZXJhbmQxOiAnMScsXG4gICAgb3BlcmFuZDI6ICcoSEwpJ1xuICB9LFxuICAweGNmOiB7XG4gICAgbW5lbW9uaWM6ICdTRVQnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweGNmJyxcbiAgICBvcGVyYW5kMTogJzEnLFxuICAgIG9wZXJhbmQyOiAnQSdcbiAgfSxcbiAgMHhkMDoge1xuICAgIG1uZW1vbmljOiAnU0VUJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICA4XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nXG4gICAgXSxcbiAgICBhZGRyOiAnMHhkMCcsXG4gICAgb3BlcmFuZDE6ICcyJyxcbiAgICBvcGVyYW5kMjogJ0InXG4gIH0sXG4gIDB4ZDE6IHtcbiAgICBtbmVtb25pYzogJ1NFVCcsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGN5Y2xlczogW1xuICAgICAgOFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4ZDEnLFxuICAgIG9wZXJhbmQxOiAnMicsXG4gICAgb3BlcmFuZDI6ICdDJ1xuICB9LFxuICAweGQyOiB7XG4gICAgbW5lbW9uaWM6ICdTRVQnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweGQyJyxcbiAgICBvcGVyYW5kMTogJzInLFxuICAgIG9wZXJhbmQyOiAnRCdcbiAgfSxcbiAgMHhkMzoge1xuICAgIG1uZW1vbmljOiAnU0VUJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICA4XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nXG4gICAgXSxcbiAgICBhZGRyOiAnMHhkMycsXG4gICAgb3BlcmFuZDE6ICcyJyxcbiAgICBvcGVyYW5kMjogJ0UnXG4gIH0sXG4gIDB4ZDQ6IHtcbiAgICBtbmVtb25pYzogJ1NFVCcsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGN5Y2xlczogW1xuICAgICAgOFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4ZDQnLFxuICAgIG9wZXJhbmQxOiAnMicsXG4gICAgb3BlcmFuZDI6ICdIJ1xuICB9LFxuICAweGQ1OiB7XG4gICAgbW5lbW9uaWM6ICdTRVQnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweGQ1JyxcbiAgICBvcGVyYW5kMTogJzInLFxuICAgIG9wZXJhbmQyOiAnTCdcbiAgfSxcbiAgMHhkNjoge1xuICAgIG1uZW1vbmljOiAnU0VUJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICAxNlxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4ZDYnLFxuICAgIG9wZXJhbmQxOiAnMicsXG4gICAgb3BlcmFuZDI6ICcoSEwpJ1xuICB9LFxuICAweGQ3OiB7XG4gICAgbW5lbW9uaWM6ICdTRVQnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweGQ3JyxcbiAgICBvcGVyYW5kMTogJzInLFxuICAgIG9wZXJhbmQyOiAnQSdcbiAgfSxcbiAgMHhkODoge1xuICAgIG1uZW1vbmljOiAnU0VUJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICA4XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nXG4gICAgXSxcbiAgICBhZGRyOiAnMHhkOCcsXG4gICAgb3BlcmFuZDE6ICczJyxcbiAgICBvcGVyYW5kMjogJ0InXG4gIH0sXG4gIDB4ZDk6IHtcbiAgICBtbmVtb25pYzogJ1NFVCcsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGN5Y2xlczogW1xuICAgICAgOFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4ZDknLFxuICAgIG9wZXJhbmQxOiAnMycsXG4gICAgb3BlcmFuZDI6ICdDJ1xuICB9LFxuICAweGRhOiB7XG4gICAgbW5lbW9uaWM6ICdTRVQnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweGRhJyxcbiAgICBvcGVyYW5kMTogJzMnLFxuICAgIG9wZXJhbmQyOiAnRCdcbiAgfSxcbiAgMHhkYjoge1xuICAgIG1uZW1vbmljOiAnU0VUJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICA4XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nXG4gICAgXSxcbiAgICBhZGRyOiAnMHhkYicsXG4gICAgb3BlcmFuZDE6ICczJyxcbiAgICBvcGVyYW5kMjogJ0UnXG4gIH0sXG4gIDB4ZGM6IHtcbiAgICBtbmVtb25pYzogJ1NFVCcsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGN5Y2xlczogW1xuICAgICAgOFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4ZGMnLFxuICAgIG9wZXJhbmQxOiAnMycsXG4gICAgb3BlcmFuZDI6ICdIJ1xuICB9LFxuICAweGRkOiB7XG4gICAgbW5lbW9uaWM6ICdTRVQnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweGRkJyxcbiAgICBvcGVyYW5kMTogJzMnLFxuICAgIG9wZXJhbmQyOiAnTCdcbiAgfSxcbiAgMHhkZToge1xuICAgIG1uZW1vbmljOiAnU0VUJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICAxNlxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4ZGUnLFxuICAgIG9wZXJhbmQxOiAnMycsXG4gICAgb3BlcmFuZDI6ICcoSEwpJ1xuICB9LFxuICAweGRmOiB7XG4gICAgbW5lbW9uaWM6ICdTRVQnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweGRmJyxcbiAgICBvcGVyYW5kMTogJzMnLFxuICAgIG9wZXJhbmQyOiAnQSdcbiAgfSxcbiAgMHhlMDoge1xuICAgIG1uZW1vbmljOiAnU0VUJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICA4XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nXG4gICAgXSxcbiAgICBhZGRyOiAnMHhlMCcsXG4gICAgb3BlcmFuZDE6ICc0JyxcbiAgICBvcGVyYW5kMjogJ0InXG4gIH0sXG4gIDB4ZTE6IHtcbiAgICBtbmVtb25pYzogJ1NFVCcsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGN5Y2xlczogW1xuICAgICAgOFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4ZTEnLFxuICAgIG9wZXJhbmQxOiAnNCcsXG4gICAgb3BlcmFuZDI6ICdDJ1xuICB9LFxuICAweGUyOiB7XG4gICAgbW5lbW9uaWM6ICdTRVQnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweGUyJyxcbiAgICBvcGVyYW5kMTogJzQnLFxuICAgIG9wZXJhbmQyOiAnRCdcbiAgfSxcbiAgMHhlMzoge1xuICAgIG1uZW1vbmljOiAnU0VUJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICA4XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nXG4gICAgXSxcbiAgICBhZGRyOiAnMHhlMycsXG4gICAgb3BlcmFuZDE6ICc0JyxcbiAgICBvcGVyYW5kMjogJ0UnXG4gIH0sXG4gIDB4ZTQ6IHtcbiAgICBtbmVtb25pYzogJ1NFVCcsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGN5Y2xlczogW1xuICAgICAgOFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4ZTQnLFxuICAgIG9wZXJhbmQxOiAnNCcsXG4gICAgb3BlcmFuZDI6ICdIJ1xuICB9LFxuICAweGU1OiB7XG4gICAgbW5lbW9uaWM6ICdTRVQnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweGU1JyxcbiAgICBvcGVyYW5kMTogJzQnLFxuICAgIG9wZXJhbmQyOiAnTCdcbiAgfSxcbiAgMHhlNjoge1xuICAgIG1uZW1vbmljOiAnU0VUJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICAxNlxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4ZTYnLFxuICAgIG9wZXJhbmQxOiAnNCcsXG4gICAgb3BlcmFuZDI6ICcoSEwpJ1xuICB9LFxuICAweGU3OiB7XG4gICAgbW5lbW9uaWM6ICdTRVQnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweGU3JyxcbiAgICBvcGVyYW5kMTogJzQnLFxuICAgIG9wZXJhbmQyOiAnQSdcbiAgfSxcbiAgMHhlODoge1xuICAgIG1uZW1vbmljOiAnU0VUJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICA4XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nXG4gICAgXSxcbiAgICBhZGRyOiAnMHhlOCcsXG4gICAgb3BlcmFuZDE6ICc1JyxcbiAgICBvcGVyYW5kMjogJ0InXG4gIH0sXG4gIDB4ZTk6IHtcbiAgICBtbmVtb25pYzogJ1NFVCcsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGN5Y2xlczogW1xuICAgICAgOFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4ZTknLFxuICAgIG9wZXJhbmQxOiAnNScsXG4gICAgb3BlcmFuZDI6ICdDJ1xuICB9LFxuICAweGVhOiB7XG4gICAgbW5lbW9uaWM6ICdTRVQnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweGVhJyxcbiAgICBvcGVyYW5kMTogJzUnLFxuICAgIG9wZXJhbmQyOiAnRCdcbiAgfSxcbiAgMHhlYjoge1xuICAgIG1uZW1vbmljOiAnU0VUJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICA4XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nXG4gICAgXSxcbiAgICBhZGRyOiAnMHhlYicsXG4gICAgb3BlcmFuZDE6ICc1JyxcbiAgICBvcGVyYW5kMjogJ0UnXG4gIH0sXG4gIDB4ZWM6IHtcbiAgICBtbmVtb25pYzogJ1NFVCcsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGN5Y2xlczogW1xuICAgICAgOFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4ZWMnLFxuICAgIG9wZXJhbmQxOiAnNScsXG4gICAgb3BlcmFuZDI6ICdIJ1xuICB9LFxuICAweGVkOiB7XG4gICAgbW5lbW9uaWM6ICdTRVQnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweGVkJyxcbiAgICBvcGVyYW5kMTogJzUnLFxuICAgIG9wZXJhbmQyOiAnTCdcbiAgfSxcbiAgMHhlZToge1xuICAgIG1uZW1vbmljOiAnU0VUJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICAxNlxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4ZWUnLFxuICAgIG9wZXJhbmQxOiAnNScsXG4gICAgb3BlcmFuZDI6ICcoSEwpJ1xuICB9LFxuICAweGVmOiB7XG4gICAgbW5lbW9uaWM6ICdTRVQnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweGVmJyxcbiAgICBvcGVyYW5kMTogJzUnLFxuICAgIG9wZXJhbmQyOiAnQSdcbiAgfSxcbiAgMHhmMDoge1xuICAgIG1uZW1vbmljOiAnU0VUJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICA4XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nXG4gICAgXSxcbiAgICBhZGRyOiAnMHhmMCcsXG4gICAgb3BlcmFuZDE6ICc2JyxcbiAgICBvcGVyYW5kMjogJ0InXG4gIH0sXG4gIDB4ZjE6IHtcbiAgICBtbmVtb25pYzogJ1NFVCcsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGN5Y2xlczogW1xuICAgICAgOFxuICAgIF0sXG4gICAgbGFnczogW1xuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nXG4gICAgXSxcbiAgICBhZGRyOiAnMHhmMScsXG4gICAgb3BlcmFuZDE6ICc2JyxcbiAgICBvcGVyYW5kMjogJ0MnXG4gIH0sXG4gIDB4ZjI6IHtcbiAgICBtbmVtb25pYzogJ1NFVCcsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGN5Y2xlczogW1xuICAgICAgOFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4ZjInLFxuICAgIG9wZXJhbmQxOiAnNicsXG4gICAgb3BlcmFuZDI6ICdEJ1xuICB9LFxuICAweGYzOiB7XG4gICAgbW5lbW9uaWM6ICdTRVQnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweGYzJyxcbiAgICBvcGVyYW5kMTogJzYnLFxuICAgIG9wZXJhbmQyOiAnRSdcbiAgfSxcbiAgMHhmNDoge1xuICAgIG1uZW1vbmljOiAnU0VUJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICA4XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nXG4gICAgXSxcbiAgICBhZGRyOiAnMHhmNCcsXG4gICAgb3BlcmFuZDE6ICc2JyxcbiAgICBvcGVyYW5kMjogJ0gnXG4gIH0sXG4gIDB4ZjU6IHtcbiAgICBtbmVtb25pYzogJ1NFVCcsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGN5Y2xlczogW1xuICAgICAgOFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4ZjUnLFxuICAgIG9wZXJhbmQxOiAnNicsXG4gICAgb3BlcmFuZDI6ICdMJ1xuICB9LFxuICAweGY2OiB7XG4gICAgbW5lbW9uaWM6ICdTRVQnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDE2XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nXG4gICAgXSxcbiAgICBhZGRyOiAnMHhmNicsXG4gICAgb3BlcmFuZDE6ICc2JyxcbiAgICBvcGVyYW5kMjogJyhITCknXG4gIH0sXG4gIDB4Zjc6IHtcbiAgICBtbmVtb25pYzogJ1NFVCcsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGN5Y2xlczogW1xuICAgICAgOFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4ZjcnLFxuICAgIG9wZXJhbmQxOiAnNicsXG4gICAgb3BlcmFuZDI6ICdBJ1xuICB9LFxuICB4Zjg6IHtcbiAgICBtbmVtb25pYzogJ1NFVCcsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGN5Y2xlczogW1xuICAgICAgOFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4ZjgnLFxuICAgIG9wZXJhbmQxOiAnNycsXG4gICAgb3BlcmFuZDI6ICdCJ1xuICB9LFxuICAweGY5OiB7XG4gICAgbW5lbW9uaWM6ICdTRVQnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweGY5JyxcbiAgICBvcGVyYW5kMTogJzcnLFxuICAgIG9wZXJhbmQyOiAnQydcbiAgfSxcbiAgMHhmYToge1xuICAgIG1uZW1vbmljOiAnU0VUJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICA4XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nXG4gICAgXSxcbiAgICBhZGRyOiAnMHhmYScsXG4gICAgb3BlcmFuZDE6ICc3JyxcbiAgICBvcGVyYW5kMjogJ0QnXG4gIH0sXG4gIDB4ZmI6IHtcbiAgICBtbmVtb25pYzogJ1NFVCcsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGN5Y2xlczogW1xuICAgICAgOFxuICAgIF0sXG4gICAgZmxhZ3M6IFtcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJyxcbiAgICAgICctJ1xuICAgIF0sXG4gICAgYWRkcjogJzB4ZmInLFxuICAgIG9wZXJhbmQxOiAnNycsXG4gICAgb3BlcmFuZDI6ICdFJ1xuICB9LFxuICAweGZjOiB7XG4gICAgbW5lbW9uaWM6ICdTRVQnLFxuICAgIGxlbmd0aDogMixcbiAgICBjeWNsZXM6IFtcbiAgICAgIDhcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweGZjJyxcbiAgICBvcGVyYW5kMTogJzcnLFxuICAgIG9wZXJhbmQyOiAnSCdcbiAgfSxcbiAgMHhmZDoge1xuICAgIG1uZW1vbmljOiAnU0VUJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICA4XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nXG4gICAgXSxcbiAgICBhZGRyOiAnMHhmZCcsXG4gICAgb3BlcmFuZDE6ICc3JyxcbiAgICBvcGVyYW5kMjogJ0wnXG4gIH0sXG4gIDB4ZmU6IHtcbiAgICBtbmVtb25pYzogJ1NFVCcsXG4gICAgbGVuZ3RoOiAyLFxuICAgIGN5Y2xlczogW1xuICAgICAgMTZcbiAgICBdLFxuICAgIGZsYWdzOiBbXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLScsXG4gICAgICAnLSdcbiAgICBdLFxuICAgIGFkZHI6ICcweGZlJyxcbiAgICBvcGVyYW5kMTogJzcnLFxuICAgIG9wZXJhbmQyOiAnKEhMKScsXG4gIH0sXG4gIDB4ZmY6IHtcbiAgICBuZW1vbmljOiAnU0VUJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgY3ljbGVzOiBbXG4gICAgICA4XG4gICAgXSxcbiAgICBmbGFnczogW1xuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nLFxuICAgICAgJy0nXG4gICAgXSxcbiAgICBhZGRyOiAnMHhmZicsXG4gICAgb3BlcmFuZDE6ICc3JyxcbiAgICBvcGVyYW5kMjogJ0EnLFxuICB9XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb25zdC9vcGNvZGUuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///3\n");
>>>>>>> f8be061d9bc834f434984a6f33880d8d45830e9f

/***/ })
/******/ ]);