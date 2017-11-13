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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

var _cpu = __webpack_require__(2);

var _cpu2 = _interopRequireDefault(_cpu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cpu = new _cpu2.default();
var opcodes = [0x3e, 0xff, // LD  a, 255
0x87];

// run the opcodes
opcodes.forEach(function (opcode) {
  cpu.processOpcode(opcode);
});
// import zelda from '../roms/zelda-la.json';
//
// const rom = window.rom = zelda;
// console.log('rom', rom);
//
// // convert the base64 rom back into binary
// const romData = atob(rom.data);
//
// // print the rom title
// const title = [0x134, 0x135, 0x136, 0x137, 0x138, 0x139, 0x140, 0x141, 0x142].reduce((acc, addr) => {
//   return acc + romData.charAt(addr).toString(16)
// }, '');
// console.log('rom title: ', title);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

/*! (C) Andrea Giammarchi - @WebReflection - Mit Style License */
(function(e,t){"use strict";function Ht(){var e=wt.splice(0,wt.length);Et=0;while(e.length)e.shift().call(null,e.shift())}function Bt(e,t){for(var n=0,r=e.length;n<r;n++)Jt(e[n],t)}function jt(e){for(var t=0,n=e.length,r;t<n;t++)r=e[t],Pt(r,A[It(r)])}function Ft(e){return function(t){ut(t)&&(Jt(t,e),O.length&&Bt(t.querySelectorAll(O),e))}}function It(e){var t=ht.call(e,"is"),n=e.nodeName.toUpperCase(),r=_.call(L,t?N+t.toUpperCase():T+n);return t&&-1<r&&!qt(n,t)?-1:r}function qt(e,t){return-1<O.indexOf(e+'[is="'+t+'"]')}function Rt(e){var t=e.currentTarget,n=e.attrChange,r=e.attrName,i=e.target,s=e[y]||2,o=e[w]||3;kt&&(!i||i===t)&&t[h]&&r!=="style"&&(e.prevValue!==e.newValue||e.newValue===""&&(n===s||n===o))&&t[h](r,n===s?null:e.prevValue,n===o?null:e.newValue)}function Ut(e){var t=Ft(e);return function(e){wt.push(t,e.target),Et&&clearTimeout(Et),Et=setTimeout(Ht,1)}}function zt(e){Ct&&(Ct=!1,e.currentTarget.removeEventListener(S,zt)),O.length&&Bt((e.target||n).querySelectorAll(O),e.detail===l?l:a),st&&Vt()}function Wt(e,t){var n=this;vt.call(n,e,t),Lt.call(n,{target:n})}function Xt(e,t){nt(e,t),Mt?Mt.observe(e,yt):(Nt&&(e.setAttribute=Wt,e[o]=Ot(e),e[u](x,Lt)),e[u](E,Rt)),e[m]&&kt&&(e.created=!0,e[m](),e.created=!1)}function Vt(){for(var e,t=0,n=at.length;t<n;t++)e=at[t],M.contains(e)||(n--,at.splice(t--,1),Jt(e,l))}function $t(e){throw new Error("A "+e+" type is already registered")}function Jt(e,t){var n,r=It(e),i;-1<r&&(Dt(e,A[r]),r=0,t===a&&!e[a]?(e[l]=!1,e[a]=!0,i="connected",r=1,st&&_.call(at,e)<0&&at.push(e)):t===l&&!e[l]&&(e[a]=!1,e[l]=!0,i="disconnected",r=1),r&&(n=e[t+f]||e[i+f])&&n.call(e))}function Kt(){}function Qt(e,t,r){var i=r&&r[c]||"",o=t.prototype,u=tt(o),a=t.observedAttributes||j,f={prototype:u};ot(u,m,{value:function(){if(Q)Q=!1;else if(!this[W]){this[W]=!0,new t(this),o[m]&&o[m].call(this);var e=G[Z.get(t)];(!V||e.create.length>1)&&Zt(this)}}}),ot(u,h,{value:function(e){-1<_.call(a,e)&&o[h].apply(this,arguments)}}),o[d]&&ot(u,p,{value:o[d]}),o[v]&&ot(u,g,{value:o[v]}),i&&(f[c]=i),e=e.toUpperCase(),G[e]={constructor:t,create:i?[i,et(e)]:[e]},Z.set(t,e),n[s](e.toLowerCase(),f),en(e),Y[e].r()}function Gt(e){var t=G[e.toUpperCase()];return t&&t.constructor}function Yt(e){return typeof e=="string"?e:e&&e.is||""}function Zt(e){var t=e[h],n=t?e.attributes:j,r=n.length,i;while(r--)i=n[r],t.call(e,i.name||i.nodeName,null,i.value||i.nodeValue)}function en(e){return e=e.toUpperCase(),e in Y||(Y[e]={},Y[e].p=new K(function(t){Y[e].r=t})),Y[e].p}function tn(){X&&delete e.customElements,B(e,"customElements",{configurable:!0,value:new Kt}),B(e,"CustomElementRegistry",{configurable:!0,value:Kt});for(var t=function(t){var r=e[t];if(r){e[t]=function(t){var i,s;return t||(t=this),t[W]||(Q=!0,i=G[Z.get(t.constructor)],s=V&&i.create.length===1,t=s?Reflect.construct(r,j,i.constructor):n.createElement.apply(n,i.create),t[W]=!0,Q=!1,s||Zt(t)),t},e[t].prototype=r.prototype;try{r.prototype.constructor=e[t]}catch(i){z=!0,B(r,W,{value:e[t]})}}},r=i.get(/^HTML[A-Z]*[a-z]/),o=r.length;o--;t(r[o]));n.createElement=function(e,t){var n=Yt(t);return n?gt.call(this,e,et(n)):gt.call(this,e)},St||(Tt=!0,n[s](""))}var n=e.document,r=e.Object,i=function(e){var t=/^[A-Z]+[a-z]/,n=function(e){var t=[],n;for(n in s)e.test(n)&&t.push(n);return t},i=function(e,t){t=t.toLowerCase(),t in s||(s[e]=(s[e]||[]).concat(t),s[t]=s[t.toUpperCase()]=e)},s=(r.create||r)(null),o={},u,a,f,l;for(a in e)for(l in e[a]){f=e[a][l],s[l]=f;for(u=0;u<f.length;u++)s[f[u].toLowerCase()]=s[f[u].toUpperCase()]=l}return o.get=function(r){return typeof r=="string"?s[r]||(t.test(r)?[]:""):n(r)},o.set=function(n,r){return t.test(n)?i(n,r):i(r,n),o},o}({collections:{HTMLAllCollection:["all"],HTMLCollection:["forms"],HTMLFormControlsCollection:["elements"],HTMLOptionsCollection:["options"]},elements:{Element:["element"],HTMLAnchorElement:["a"],HTMLAppletElement:["applet"],HTMLAreaElement:["area"],HTMLAttachmentElement:["attachment"],HTMLAudioElement:["audio"],HTMLBRElement:["br"],HTMLBaseElement:["base"],HTMLBodyElement:["body"],HTMLButtonElement:["button"],HTMLCanvasElement:["canvas"],HTMLContentElement:["content"],HTMLDListElement:["dl"],HTMLDataElement:["data"],HTMLDataListElement:["datalist"],HTMLDetailsElement:["details"],HTMLDialogElement:["dialog"],HTMLDirectoryElement:["dir"],HTMLDivElement:["div"],HTMLDocument:["document"],HTMLElement:["element","abbr","address","article","aside","b","bdi","bdo","cite","code","command","dd","dfn","dt","em","figcaption","figure","footer","header","i","kbd","mark","nav","noscript","rp","rt","ruby","s","samp","section","small","strong","sub","summary","sup","u","var","wbr"],HTMLEmbedElement:["embed"],HTMLFieldSetElement:["fieldset"],HTMLFontElement:["font"],HTMLFormElement:["form"],HTMLFrameElement:["frame"],HTMLFrameSetElement:["frameset"],HTMLHRElement:["hr"],HTMLHeadElement:["head"],HTMLHeadingElement:["h1","h2","h3","h4","h5","h6"],HTMLHtmlElement:["html"],HTMLIFrameElement:["iframe"],HTMLImageElement:["img"],HTMLInputElement:["input"],HTMLKeygenElement:["keygen"],HTMLLIElement:["li"],HTMLLabelElement:["label"],HTMLLegendElement:["legend"],HTMLLinkElement:["link"],HTMLMapElement:["map"],HTMLMarqueeElement:["marquee"],HTMLMediaElement:["media"],HTMLMenuElement:["menu"],HTMLMenuItemElement:["menuitem"],HTMLMetaElement:["meta"],HTMLMeterElement:["meter"],HTMLModElement:["del","ins"],HTMLOListElement:["ol"],HTMLObjectElement:["object"],HTMLOptGroupElement:["optgroup"],HTMLOptionElement:["option"],HTMLOutputElement:["output"],HTMLParagraphElement:["p"],HTMLParamElement:["param"],HTMLPictureElement:["picture"],HTMLPreElement:["pre"],HTMLProgressElement:["progress"],HTMLQuoteElement:["blockquote","q","quote"],HTMLScriptElement:["script"],HTMLSelectElement:["select"],HTMLShadowElement:["shadow"],HTMLSlotElement:["slot"],HTMLSourceElement:["source"],HTMLSpanElement:["span"],HTMLStyleElement:["style"],HTMLTableCaptionElement:["caption"],HTMLTableCellElement:["td","th"],HTMLTableColElement:["col","colgroup"],HTMLTableElement:["table"],HTMLTableRowElement:["tr"],HTMLTableSectionElement:["thead","tbody","tfoot"],HTMLTemplateElement:["template"],HTMLTextAreaElement:["textarea"],HTMLTimeElement:["time"],HTMLTitleElement:["title"],HTMLTrackElement:["track"],HTMLUListElement:["ul"],HTMLUnknownElement:["unknown","vhgroupv","vkeygen"],HTMLVideoElement:["video"]},nodes:{Attr:["node"],Audio:["audio"],CDATASection:["node"],CharacterData:["node"],Comment:["#comment"],Document:["#document"],DocumentFragment:["#document-fragment"],DocumentType:["node"],HTMLDocument:["#document"],Image:["img"],Option:["option"],ProcessingInstruction:["node"],ShadowRoot:["#shadow-root"],Text:["#text"],XMLDocument:["xml"]}});typeof t!="object"&&(t={type:t||"auto"});var s="registerElement",o="__"+s+(e.Math.random()*1e5>>0),u="addEventListener",a="attached",f="Callback",l="detached",c="extends",h="attributeChanged"+f,p=a+f,d="connected"+f,v="disconnected"+f,m="created"+f,g=l+f,y="ADDITION",b="MODIFICATION",w="REMOVAL",E="DOMAttrModified",S="DOMContentLoaded",x="DOMSubtreeModified",T="<",N="=",C=/^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,k=["ANNOTATION-XML","COLOR-PROFILE","FONT-FACE","FONT-FACE-SRC","FONT-FACE-URI","FONT-FACE-FORMAT","FONT-FACE-NAME","MISSING-GLYPH"],L=[],A=[],O="",M=n.documentElement,_=L.indexOf||function(e){for(var t=this.length;t--&&this[t]!==e;);return t},D=r.prototype,P=D.hasOwnProperty,H=D.isPrototypeOf,B=r.defineProperty,j=[],F=r.getOwnPropertyDescriptor,I=r.getOwnPropertyNames,q=r.getPrototypeOf,R=r.setPrototypeOf,U=!!r.__proto__,z=!1,W="__dreCEv1",X=e.customElements,V=!/^force/.test(t.type)&&!!(X&&X.define&&X.get&&X.whenDefined),$=r.create||r,J=e.Map||function(){var t=[],n=[],r;return{get:function(e){return n[_.call(t,e)]},set:function(e,i){r=_.call(t,e),r<0?n[t.push(e)-1]=i:n[r]=i}}},K=e.Promise||function(e){function i(e){n=!0;while(t.length)t.shift()(e)}var t=[],n=!1,r={"catch":function(){return r},then:function(e){return t.push(e),n&&setTimeout(i,1),r}};return e(i),r},Q=!1,G=$(null),Y=$(null),Z=new J,et=function(e){return e.toLowerCase()},tt=r.create||function sn(e){return e?(sn.prototype=e,new sn):this},nt=R||(U?function(e,t){return e.__proto__=t,e}:I&&F?function(){function e(e,t){for(var n,r=I(t),i=0,s=r.length;i<s;i++)n=r[i],P.call(e,n)||B(e,n,F(t,n))}return function(t,n){do e(t,n);while((n=q(n))&&!H.call(n,t));return t}}():function(e,t){for(var n in t)e[n]=t[n];return e}),rt=e.MutationObserver||e.WebKitMutationObserver,it=(e.HTMLElement||e.Element||e.Node).prototype,st=!H.call(it,M),ot=st?function(e,t,n){return e[t]=n.value,e}:B,ut=st?function(e){return e.nodeType===1}:function(e){return H.call(it,e)},at=st&&[],ft=it.attachShadow,lt=it.cloneNode,ct=it.dispatchEvent,ht=it.getAttribute,pt=it.hasAttribute,dt=it.removeAttribute,vt=it.setAttribute,mt=n.createElement,gt=mt,yt=rt&&{attributes:!0,characterData:!0,attributeOldValue:!0},bt=rt||function(e){Nt=!1,M.removeEventListener(E,bt)},wt,Et=0,St=s in n&&!/^force-all/.test(t.type),xt=!0,Tt=!1,Nt=!0,Ct=!0,kt=!0,Lt,At,Ot,Mt,_t,Dt,Pt;St||(R||U?(Dt=function(e,t){H.call(t,e)||Xt(e,t)},Pt=Xt):(Dt=function(e,t){e[o]||(e[o]=r(!0),Xt(e,t))},Pt=Dt),st?(Nt=!1,function(){var e=F(it,u),t=e.value,n=function(e){var t=new CustomEvent(E,{bubbles:!0});t.attrName=e,t.prevValue=ht.call(this,e),t.newValue=null,t[w]=t.attrChange=2,dt.call(this,e),ct.call(this,t)},r=function(e,t){var n=pt.call(this,e),r=n&&ht.call(this,e),i=new CustomEvent(E,{bubbles:!0});vt.call(this,e,t),i.attrName=e,i.prevValue=n?r:null,i.newValue=t,n?i[b]=i.attrChange=1:i[y]=i.attrChange=0,ct.call(this,i)},i=function(e){var t=e.currentTarget,n=t[o],r=e.propertyName,i;n.hasOwnProperty(r)&&(n=n[r],i=new CustomEvent(E,{bubbles:!0}),i.attrName=n.name,i.prevValue=n.value||null,i.newValue=n.value=t[r]||null,i.prevValue==null?i[y]=i.attrChange=0:i[b]=i.attrChange=1,ct.call(t,i))};e.value=function(e,s,u){e===E&&this[h]&&this.setAttribute!==r&&(this[o]={className:{name:"class",value:this.className}},this.setAttribute=r,this.removeAttribute=n,t.call(this,"propertychange",i)),t.call(this,e,s,u)},B(it,u,e)}()):rt||(M[u](E,bt),M.setAttribute(o,1),M.removeAttribute(o),Nt&&(Lt=function(e){var t=this,n,r,i;if(t===e.target){n=t[o],t[o]=r=Ot(t);for(i in r){if(!(i in n))return At(0,t,i,n[i],r[i],y);if(r[i]!==n[i])return At(1,t,i,n[i],r[i],b)}for(i in n)if(!(i in r))return At(2,t,i,n[i],r[i],w)}},At=function(e,t,n,r,i,s){var o={attrChange:e,currentTarget:t,attrName:n,prevValue:r,newValue:i};o[s]=e,Rt(o)},Ot=function(e){for(var t,n,r={},i=e.attributes,s=0,o=i.length;s<o;s++)t=i[s],n=t.name,n!=="setAttribute"&&(r[n]=t.value);return r})),n[s]=function(t,r){p=t.toUpperCase(),xt&&(xt=!1,rt?(Mt=function(e,t){function n(e,t){for(var n=0,r=e.length;n<r;t(e[n++]));}return new rt(function(r){for(var i,s,o,u=0,a=r.length;u<a;u++)i=r[u],i.type==="childList"?(n(i.addedNodes,e),n(i.removedNodes,t)):(s=i.target,kt&&s[h]&&i.attributeName!=="style"&&(o=ht.call(s,i.attributeName),o!==i.oldValue&&s[h](i.attributeName,i.oldValue,o)))})}(Ft(a),Ft(l)),_t=function(e){return Mt.observe(e,{childList:!0,subtree:!0}),e},_t(n),ft&&(it.attachShadow=function(){return _t(ft.apply(this,arguments))})):(wt=[],n[u]("DOMNodeInserted",Ut(a)),n[u]("DOMNodeRemoved",Ut(l))),n[u](S,zt),n[u]("readystatechange",zt),it.cloneNode=function(e){var t=lt.call(this,!!e),n=It(t);return-1<n&&Pt(t,A[n]),e&&O.length&&jt(t.querySelectorAll(O)),t});if(Tt)return Tt=!1;-2<_.call(L,N+p)+_.call(L,T+p)&&$t(t);if(!C.test(p)||-1<_.call(k,p))throw new Error("The type "+t+" is invalid");var i=function(){return o?n.createElement(f,p):n.createElement(f)},s=r||D,o=P.call(s,c),f=o?r[c].toUpperCase():p,p,d;return o&&-1<_.call(L,T+f)&&$t(f),d=L.push((o?N:T)+p)-1,O=O.concat(O.length?",":"",o?f+'[is="'+t.toLowerCase()+'"]':f),i.prototype=A[d]=P.call(s,"prototype")?s.prototype:tt(it),O.length&&Bt(n.querySelectorAll(O),a),i},n.createElement=gt=function(e,t){var r=Yt(t),i=r?mt.call(n,e,et(r)):mt.call(n,e),s=""+e,o=_.call(L,(r?N:T)+(r||s).toUpperCase()),u=-1<o;return r&&(i.setAttribute("is",r=r.toLowerCase()),u&&(u=qt(s.toUpperCase(),r))),kt=!n.createElement.innerHTMLHelper,u&&Pt(i,A[o]),i}),Kt.prototype={constructor:Kt,define:V?function(e,t,n){if(n)Qt(e,t,n);else{var r=e.toUpperCase();G[r]={constructor:t,create:[r]},Z.set(t,r),X.define(e,t)}}:Qt,get:V?function(e){return X.get(e)||Gt(e)}:Gt,whenDefined:V?function(e){return K.race([X.whenDefined(e),en(e)])}:en};if(!X||/^force/.test(t.type))tn();else if(!t.noBuiltIn)try{(function(t,r,i){r[c]="a",t.prototype=tt(HTMLAnchorElement.prototype),t.prototype.constructor=t,e.customElements.define(i,t,r);if(ht.call(n.createElement("a",{is:i}),"is")!==i||V&&ht.call(new t,"is")!==i)throw r})(function on(){return Reflect.construct(HTMLAnchorElement,[],on)},{},"document-register-element-a")}catch(nn){tn()}if(!t.noBuiltIn)try{mt.call(n,"a","a")}catch(rn){et=function(e){return{is:e.toLowerCase()}}}})(window);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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
    this.data = 0;
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
          // console.log('mnemonic', mnemonic);

          if (regValue1 === regValue2) {
            _this[operand1.toLowerCase()] = regValue1;
          }
          _this[operand1.toLowerCase()] = regValue1 + regValue2;
        }

        /*
        /* fullCarry: 0b1
        /* halfCarry: 0b10
        /* subtract: 0b100
        /* zero: 0b1000
         */
        if (mnemonic === 'SUB') {
          _this.f = 4;
          console.log('f reg === ' + _this.f);
          var subSum = _this[operand1.toLowerCase()];
          _this[operand1.toLowerCase()] = subSum;
          // console.log('SUB', testVal, this.f);
        }

        if (length === 2 && _this.opcodeArray.length === 2) {

          if (_this.opcodeArray.length === 2) {
            var opcode2 = _this.opcodeArray[1];

            // console.log(`Opcode ${opcode2}, `)
            if (mnemonic === 'ADD') {
              _this.data = _this[operand1.toLowerCase()] + opcode2;
            }

            if (_this.data >= 0xff) {
              // console.log( `this "F" ${data}`);
              _this.f = 1;
            }

            if (_this.data < 0xff) {
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

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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



/***/ })
/******/ ]);