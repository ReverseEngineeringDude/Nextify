(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var Ux={exports:{}},dd={},Fx={exports:{}},ct={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bc=Symbol.for("react.element"),eE=Symbol.for("react.portal"),tE=Symbol.for("react.fragment"),nE=Symbol.for("react.strict_mode"),iE=Symbol.for("react.profiler"),rE=Symbol.for("react.provider"),sE=Symbol.for("react.context"),oE=Symbol.for("react.forward_ref"),aE=Symbol.for("react.suspense"),lE=Symbol.for("react.memo"),cE=Symbol.for("react.lazy"),Y_=Symbol.iterator;function uE(n){return n===null||typeof n!="object"?null:(n=Y_&&n[Y_]||n["@@iterator"],typeof n=="function"?n:null)}var Ox={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},kx=Object.assign,zx={};function ll(n,e,t){this.props=n,this.context=e,this.refs=zx,this.updater=t||Ox}ll.prototype.isReactComponent={};ll.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};ll.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function Bx(){}Bx.prototype=ll.prototype;function ug(n,e,t){this.props=n,this.context=e,this.refs=zx,this.updater=t||Ox}var fg=ug.prototype=new Bx;fg.constructor=ug;kx(fg,ll.prototype);fg.isPureReactComponent=!0;var $_=Array.isArray,Vx=Object.prototype.hasOwnProperty,dg={current:null},Hx={key:!0,ref:!0,__self:!0,__source:!0};function Gx(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Vx.call(e,i)&&!Hx.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Bc,type:n,key:s,ref:o,props:r,_owner:dg.current}}function fE(n,e){return{$$typeof:Bc,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function hg(n){return typeof n=="object"&&n!==null&&n.$$typeof===Bc}function dE(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var q_=/\/+/g;function Od(n,e){return typeof n=="object"&&n!==null&&n.key!=null?dE(""+n.key):e.toString(36)}function ef(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Bc:case eE:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Od(o,0):i,$_(r)?(t="",n!=null&&(t=n.replace(q_,"$&/")+"/"),ef(r,e,t,"",function(c){return c})):r!=null&&(hg(r)&&(r=fE(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(q_,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",$_(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Od(s,a);o+=ef(s,e,t,l,r)}else if(l=uE(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Od(s,a++),o+=ef(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Jc(n,e,t){if(n==null)return n;var i=[],r=0;return ef(n,i,"","",function(s){return e.call(t,s,r++)}),i}function hE(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var qn={current:null},tf={transition:null},pE={ReactCurrentDispatcher:qn,ReactCurrentBatchConfig:tf,ReactCurrentOwner:dg};function Wx(){throw Error("act(...) is not supported in production builds of React.")}ct.Children={map:Jc,forEach:function(n,e,t){Jc(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Jc(n,function(){e++}),e},toArray:function(n){return Jc(n,function(e){return e})||[]},only:function(n){if(!hg(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};ct.Component=ll;ct.Fragment=tE;ct.Profiler=iE;ct.PureComponent=ug;ct.StrictMode=nE;ct.Suspense=aE;ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pE;ct.act=Wx;ct.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=kx({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=dg.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)Vx.call(e,l)&&!Hx.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Bc,type:n.type,key:r,ref:s,props:i,_owner:o}};ct.createContext=function(n){return n={$$typeof:sE,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:rE,_context:n},n.Consumer=n};ct.createElement=Gx;ct.createFactory=function(n){var e=Gx.bind(null,n);return e.type=n,e};ct.createRef=function(){return{current:null}};ct.forwardRef=function(n){return{$$typeof:oE,render:n}};ct.isValidElement=hg;ct.lazy=function(n){return{$$typeof:cE,_payload:{_status:-1,_result:n},_init:hE}};ct.memo=function(n,e){return{$$typeof:lE,type:n,compare:e===void 0?null:e}};ct.startTransition=function(n){var e=tf.transition;tf.transition={};try{n()}finally{tf.transition=e}};ct.unstable_act=Wx;ct.useCallback=function(n,e){return qn.current.useCallback(n,e)};ct.useContext=function(n){return qn.current.useContext(n)};ct.useDebugValue=function(){};ct.useDeferredValue=function(n){return qn.current.useDeferredValue(n)};ct.useEffect=function(n,e){return qn.current.useEffect(n,e)};ct.useId=function(){return qn.current.useId()};ct.useImperativeHandle=function(n,e,t){return qn.current.useImperativeHandle(n,e,t)};ct.useInsertionEffect=function(n,e){return qn.current.useInsertionEffect(n,e)};ct.useLayoutEffect=function(n,e){return qn.current.useLayoutEffect(n,e)};ct.useMemo=function(n,e){return qn.current.useMemo(n,e)};ct.useReducer=function(n,e,t){return qn.current.useReducer(n,e,t)};ct.useRef=function(n){return qn.current.useRef(n)};ct.useState=function(n){return qn.current.useState(n)};ct.useSyncExternalStore=function(n,e,t){return qn.current.useSyncExternalStore(n,e,t)};ct.useTransition=function(){return qn.current.useTransition()};ct.version="18.3.1";Fx.exports=ct;var qe=Fx.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mE=qe,gE=Symbol.for("react.element"),_E=Symbol.for("react.fragment"),vE=Object.prototype.hasOwnProperty,xE=mE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,yE={key:!0,ref:!0,__self:!0,__source:!0};function jx(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)vE.call(e,i)&&!yE.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:gE,type:n,key:s,ref:o,props:r,_owner:xE.current}}dd.Fragment=_E;dd.jsx=jx;dd.jsxs=jx;Ux.exports=dd;var C=Ux.exports,Xx={exports:{}},Li={},Yx={exports:{}},$x={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(U,q){var P=U.length;U.push(q);e:for(;0<P;){var re=P-1>>>1,xe=U[re];if(0<r(xe,q))U[re]=q,U[P]=xe,P=re;else break e}}function t(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var q=U[0],P=U.pop();if(P!==q){U[0]=P;e:for(var re=0,xe=U.length,Ke=xe>>>1;re<Ke;){var Oe=2*(re+1)-1,Ve=U[Oe],K=Oe+1,J=U[K];if(0>r(Ve,P))K<xe&&0>r(J,Ve)?(U[re]=J,U[K]=P,re=K):(U[re]=Ve,U[Oe]=P,re=Oe);else if(K<xe&&0>r(J,P))U[re]=J,U[K]=P,re=K;else break e}}return q}function r(U,q){var P=U.sortIndex-q.sortIndex;return P!==0?P:U.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,f=3,p=!1,v=!1,_=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(U){for(var q=t(c);q!==null;){if(q.callback===null)i(c);else if(q.startTime<=U)i(c),q.sortIndex=q.expirationTime,e(l,q);else break;q=t(c)}}function y(U){if(_=!1,x(U),!v)if(t(l)!==null)v=!0,G(E);else{var q=t(c);q!==null&&j(y,q.startTime-U)}}function E(U,q){v=!1,_&&(_=!1,h(R),R=-1),p=!0;var P=f;try{for(x(q),d=t(l);d!==null&&(!(d.expirationTime>q)||U&&!L());){var re=d.callback;if(typeof re=="function"){d.callback=null,f=d.priorityLevel;var xe=re(d.expirationTime<=q);q=n.unstable_now(),typeof xe=="function"?d.callback=xe:d===t(l)&&i(l),x(q)}else i(l);d=t(l)}if(d!==null)var Ke=!0;else{var Oe=t(c);Oe!==null&&j(y,Oe.startTime-q),Ke=!1}return Ke}finally{d=null,f=P,p=!1}}var A=!1,w=null,R=-1,M=5,S=-1;function L(){return!(n.unstable_now()-S<M)}function F(){if(w!==null){var U=n.unstable_now();S=U;var q=!0;try{q=w(!0,U)}finally{q?V():(A=!1,w=null)}}else A=!1}var V;if(typeof g=="function")V=function(){g(F)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,W=$.port2;$.port1.onmessage=F,V=function(){W.postMessage(null)}}else V=function(){m(F,0)};function G(U){w=U,A||(A=!0,V())}function j(U,q){R=m(function(){U(n.unstable_now())},q)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(U){U.callback=null},n.unstable_continueExecution=function(){v||p||(v=!0,G(E))},n.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<U?Math.floor(1e3/U):5},n.unstable_getCurrentPriorityLevel=function(){return f},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(U){switch(f){case 1:case 2:case 3:var q=3;break;default:q=f}var P=f;f=q;try{return U()}finally{f=P}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(U,q){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var P=f;f=U;try{return q()}finally{f=P}},n.unstable_scheduleCallback=function(U,q,P){var re=n.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?re+P:re):P=re,U){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=P+xe,U={id:u++,callback:q,priorityLevel:U,startTime:P,expirationTime:xe,sortIndex:-1},P>re?(U.sortIndex=P,e(c,U),t(l)===null&&U===t(c)&&(_?(h(R),R=-1):_=!0,j(y,P-re))):(U.sortIndex=xe,e(l,U),v||p||(v=!0,G(E))),U},n.unstable_shouldYield=L,n.unstable_wrapCallback=function(U){var q=f;return function(){var P=f;f=q;try{return U.apply(this,arguments)}finally{f=P}}}})($x);Yx.exports=$x;var SE=Yx.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ME=qe,Pi=SE;function ae(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var qx=new Set,cc={};function Go(n,e){Ga(n,e),Ga(n+"Capture",e)}function Ga(n,e){for(cc[n]=e,n=0;n<e.length;n++)qx.add(e[n])}var Qr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tp=Object.prototype.hasOwnProperty,EE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,K_={},Z_={};function wE(n){return tp.call(Z_,n)?!0:tp.call(K_,n)?!1:EE.test(n)?Z_[n]=!0:(K_[n]=!0,!1)}function TE(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function AE(n,e,t,i){if(e===null||typeof e>"u"||TE(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Kn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Tn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Tn[n]=new Kn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Tn[e]=new Kn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Tn[n]=new Kn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Tn[n]=new Kn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Tn[n]=new Kn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Tn[n]=new Kn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Tn[n]=new Kn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Tn[n]=new Kn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Tn[n]=new Kn(n,5,!1,n.toLowerCase(),null,!1,!1)});var pg=/[\-:]([a-z])/g;function mg(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(pg,mg);Tn[e]=new Kn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(pg,mg);Tn[e]=new Kn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(pg,mg);Tn[e]=new Kn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Tn[n]=new Kn(n,1,!1,n.toLowerCase(),null,!1,!1)});Tn.xlinkHref=new Kn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Tn[n]=new Kn(n,1,!1,n.toLowerCase(),null,!0,!0)});function gg(n,e,t,i){var r=Tn.hasOwnProperty(e)?Tn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(AE(e,t,r,i)&&(t=null),i||r===null?wE(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var os=ME.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,eu=Symbol.for("react.element"),ha=Symbol.for("react.portal"),pa=Symbol.for("react.fragment"),_g=Symbol.for("react.strict_mode"),np=Symbol.for("react.profiler"),Kx=Symbol.for("react.provider"),Zx=Symbol.for("react.context"),vg=Symbol.for("react.forward_ref"),ip=Symbol.for("react.suspense"),rp=Symbol.for("react.suspense_list"),xg=Symbol.for("react.memo"),ms=Symbol.for("react.lazy"),Qx=Symbol.for("react.offscreen"),Q_=Symbol.iterator;function pl(n){return n===null||typeof n!="object"?null:(n=Q_&&n[Q_]||n["@@iterator"],typeof n=="function"?n:null)}var jt=Object.assign,kd;function Pl(n){if(kd===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);kd=e&&e[1]||""}return`
`+kd+n}var zd=!1;function Bd(n,e){if(!n||zd)return"";zd=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){i=c}n.call(e.prototype)}else{try{throw Error()}catch(c){i=c}n()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{zd=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Pl(n):""}function CE(n){switch(n.tag){case 5:return Pl(n.type);case 16:return Pl("Lazy");case 13:return Pl("Suspense");case 19:return Pl("SuspenseList");case 0:case 2:case 15:return n=Bd(n.type,!1),n;case 11:return n=Bd(n.type.render,!1),n;case 1:return n=Bd(n.type,!0),n;default:return""}}function sp(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case pa:return"Fragment";case ha:return"Portal";case np:return"Profiler";case _g:return"StrictMode";case ip:return"Suspense";case rp:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Zx:return(n.displayName||"Context")+".Consumer";case Kx:return(n._context.displayName||"Context")+".Provider";case vg:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case xg:return e=n.displayName||null,e!==null?e:sp(n.type)||"Memo";case ms:e=n._payload,n=n._init;try{return sp(n(e))}catch{}}return null}function bE(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return sp(e);case 8:return e===_g?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Bs(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Jx(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function RE(n){var e=Jx(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function tu(n){n._valueTracker||(n._valueTracker=RE(n))}function ey(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=Jx(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Cf(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function op(n,e){var t=e.checked;return jt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function J_(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Bs(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ty(n,e){e=e.checked,e!=null&&gg(n,"checked",e,!1)}function ap(n,e){ty(n,e);var t=Bs(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?lp(n,e.type,t):e.hasOwnProperty("defaultValue")&&lp(n,e.type,Bs(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function e0(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function lp(n,e,t){(e!=="number"||Cf(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Dl=Array.isArray;function Ra(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Bs(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function cp(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ae(91));return jt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function t0(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(ae(92));if(Dl(t)){if(1<t.length)throw Error(ae(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Bs(t)}}function ny(n,e){var t=Bs(e.value),i=Bs(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function n0(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function iy(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function up(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?iy(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var nu,ry=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(nu=nu||document.createElement("div"),nu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=nu.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function uc(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Hl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},PE=["Webkit","ms","Moz","O"];Object.keys(Hl).forEach(function(n){PE.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Hl[e]=Hl[n]})});function sy(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Hl.hasOwnProperty(n)&&Hl[n]?(""+e).trim():e+"px"}function oy(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=sy(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var DE=jt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fp(n,e){if(e){if(DE[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ae(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ae(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ae(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ae(62))}}function dp(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hp=null;function yg(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var pp=null,Pa=null,Da=null;function i0(n){if(n=Gc(n)){if(typeof pp!="function")throw Error(ae(280));var e=n.stateNode;e&&(e=_d(e),pp(n.stateNode,n.type,e))}}function ay(n){Pa?Da?Da.push(n):Da=[n]:Pa=n}function ly(){if(Pa){var n=Pa,e=Da;if(Da=Pa=null,i0(n),e)for(n=0;n<e.length;n++)i0(e[n])}}function cy(n,e){return n(e)}function uy(){}var Vd=!1;function fy(n,e,t){if(Vd)return n(e,t);Vd=!0;try{return cy(n,e,t)}finally{Vd=!1,(Pa!==null||Da!==null)&&(uy(),ly())}}function fc(n,e){var t=n.stateNode;if(t===null)return null;var i=_d(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(ae(231,e,typeof t));return t}var mp=!1;if(Qr)try{var ml={};Object.defineProperty(ml,"passive",{get:function(){mp=!0}}),window.addEventListener("test",ml,ml),window.removeEventListener("test",ml,ml)}catch{mp=!1}function NE(n,e,t,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(u){this.onError(u)}}var Gl=!1,bf=null,Rf=!1,gp=null,LE={onError:function(n){Gl=!0,bf=n}};function IE(n,e,t,i,r,s,o,a,l){Gl=!1,bf=null,NE.apply(LE,arguments)}function UE(n,e,t,i,r,s,o,a,l){if(IE.apply(this,arguments),Gl){if(Gl){var c=bf;Gl=!1,bf=null}else throw Error(ae(198));Rf||(Rf=!0,gp=c)}}function Wo(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function dy(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function r0(n){if(Wo(n)!==n)throw Error(ae(188))}function FE(n){var e=n.alternate;if(!e){if(e=Wo(n),e===null)throw Error(ae(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return r0(r),n;if(s===i)return r0(r),e;s=s.sibling}throw Error(ae(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(ae(189))}}if(t.alternate!==i)throw Error(ae(190))}if(t.tag!==3)throw Error(ae(188));return t.stateNode.current===t?n:e}function hy(n){return n=FE(n),n!==null?py(n):null}function py(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=py(n);if(e!==null)return e;n=n.sibling}return null}var my=Pi.unstable_scheduleCallback,s0=Pi.unstable_cancelCallback,OE=Pi.unstable_shouldYield,kE=Pi.unstable_requestPaint,Qt=Pi.unstable_now,zE=Pi.unstable_getCurrentPriorityLevel,Sg=Pi.unstable_ImmediatePriority,gy=Pi.unstable_UserBlockingPriority,Pf=Pi.unstable_NormalPriority,BE=Pi.unstable_LowPriority,_y=Pi.unstable_IdlePriority,hd=null,Cr=null;function VE(n){if(Cr&&typeof Cr.onCommitFiberRoot=="function")try{Cr.onCommitFiberRoot(hd,n,void 0,(n.current.flags&128)===128)}catch{}}var fr=Math.clz32?Math.clz32:WE,HE=Math.log,GE=Math.LN2;function WE(n){return n>>>=0,n===0?32:31-(HE(n)/GE|0)|0}var iu=64,ru=4194304;function Nl(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Df(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=Nl(a):(s&=o,s!==0&&(i=Nl(s)))}else o=t&~r,o!==0?i=Nl(o):s!==0&&(i=Nl(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-fr(e),r=1<<t,i|=n[t],e&=~r;return i}function jE(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function XE(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-fr(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=jE(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function _p(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function vy(){var n=iu;return iu<<=1,!(iu&4194240)&&(iu=64),n}function Hd(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Vc(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-fr(e),n[e]=t}function YE(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-fr(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function Mg(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-fr(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var Et=0;function xy(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var yy,Eg,Sy,My,Ey,vp=!1,su=[],Cs=null,bs=null,Rs=null,dc=new Map,hc=new Map,_s=[],$E="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function o0(n,e){switch(n){case"focusin":case"focusout":Cs=null;break;case"dragenter":case"dragleave":bs=null;break;case"mouseover":case"mouseout":Rs=null;break;case"pointerover":case"pointerout":dc.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":hc.delete(e.pointerId)}}function gl(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Gc(e),e!==null&&Eg(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function qE(n,e,t,i,r){switch(e){case"focusin":return Cs=gl(Cs,n,e,t,i,r),!0;case"dragenter":return bs=gl(bs,n,e,t,i,r),!0;case"mouseover":return Rs=gl(Rs,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return dc.set(s,gl(dc.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,hc.set(s,gl(hc.get(s)||null,n,e,t,i,r)),!0}return!1}function wy(n){var e=go(n.target);if(e!==null){var t=Wo(e);if(t!==null){if(e=t.tag,e===13){if(e=dy(t),e!==null){n.blockedOn=e,Ey(n.priority,function(){Sy(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function nf(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=xp(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);hp=i,t.target.dispatchEvent(i),hp=null}else return e=Gc(t),e!==null&&Eg(e),n.blockedOn=t,!1;e.shift()}return!0}function a0(n,e,t){nf(n)&&t.delete(e)}function KE(){vp=!1,Cs!==null&&nf(Cs)&&(Cs=null),bs!==null&&nf(bs)&&(bs=null),Rs!==null&&nf(Rs)&&(Rs=null),dc.forEach(a0),hc.forEach(a0)}function _l(n,e){n.blockedOn===e&&(n.blockedOn=null,vp||(vp=!0,Pi.unstable_scheduleCallback(Pi.unstable_NormalPriority,KE)))}function pc(n){function e(r){return _l(r,n)}if(0<su.length){_l(su[0],n);for(var t=1;t<su.length;t++){var i=su[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Cs!==null&&_l(Cs,n),bs!==null&&_l(bs,n),Rs!==null&&_l(Rs,n),dc.forEach(e),hc.forEach(e),t=0;t<_s.length;t++)i=_s[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<_s.length&&(t=_s[0],t.blockedOn===null);)wy(t),t.blockedOn===null&&_s.shift()}var Na=os.ReactCurrentBatchConfig,Nf=!0;function ZE(n,e,t,i){var r=Et,s=Na.transition;Na.transition=null;try{Et=1,wg(n,e,t,i)}finally{Et=r,Na.transition=s}}function QE(n,e,t,i){var r=Et,s=Na.transition;Na.transition=null;try{Et=4,wg(n,e,t,i)}finally{Et=r,Na.transition=s}}function wg(n,e,t,i){if(Nf){var r=xp(n,e,t,i);if(r===null)Qd(n,e,i,Lf,t),o0(n,i);else if(qE(r,n,e,t,i))i.stopPropagation();else if(o0(n,i),e&4&&-1<$E.indexOf(n)){for(;r!==null;){var s=Gc(r);if(s!==null&&yy(s),s=xp(n,e,t,i),s===null&&Qd(n,e,i,Lf,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else Qd(n,e,i,null,t)}}var Lf=null;function xp(n,e,t,i){if(Lf=null,n=yg(i),n=go(n),n!==null)if(e=Wo(n),e===null)n=null;else if(t=e.tag,t===13){if(n=dy(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Lf=n,null}function Ty(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(zE()){case Sg:return 1;case gy:return 4;case Pf:case BE:return 16;case _y:return 536870912;default:return 16}default:return 16}}var ys=null,Tg=null,rf=null;function Ay(){if(rf)return rf;var n,e=Tg,t=e.length,i,r="value"in ys?ys.value:ys.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return rf=r.slice(n,1<i?1-i:void 0)}function sf(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function ou(){return!0}function l0(){return!1}function Ii(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ou:l0,this.isPropagationStopped=l0,this}return jt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ou)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ou)},persist:function(){},isPersistent:ou}),e}var cl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ag=Ii(cl),Hc=jt({},cl,{view:0,detail:0}),JE=Ii(Hc),Gd,Wd,vl,pd=jt({},Hc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cg,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==vl&&(vl&&n.type==="mousemove"?(Gd=n.screenX-vl.screenX,Wd=n.screenY-vl.screenY):Wd=Gd=0,vl=n),Gd)},movementY:function(n){return"movementY"in n?n.movementY:Wd}}),c0=Ii(pd),ew=jt({},pd,{dataTransfer:0}),tw=Ii(ew),nw=jt({},Hc,{relatedTarget:0}),jd=Ii(nw),iw=jt({},cl,{animationName:0,elapsedTime:0,pseudoElement:0}),rw=Ii(iw),sw=jt({},cl,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),ow=Ii(sw),aw=jt({},cl,{data:0}),u0=Ii(aw),lw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},uw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fw(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=uw[n])?!!e[n]:!1}function Cg(){return fw}var dw=jt({},Hc,{key:function(n){if(n.key){var e=lw[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=sf(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?cw[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cg,charCode:function(n){return n.type==="keypress"?sf(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?sf(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),hw=Ii(dw),pw=jt({},pd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),f0=Ii(pw),mw=jt({},Hc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cg}),gw=Ii(mw),_w=jt({},cl,{propertyName:0,elapsedTime:0,pseudoElement:0}),vw=Ii(_w),xw=jt({},pd,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),yw=Ii(xw),Sw=[9,13,27,32],bg=Qr&&"CompositionEvent"in window,Wl=null;Qr&&"documentMode"in document&&(Wl=document.documentMode);var Mw=Qr&&"TextEvent"in window&&!Wl,Cy=Qr&&(!bg||Wl&&8<Wl&&11>=Wl),d0=" ",h0=!1;function by(n,e){switch(n){case"keyup":return Sw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ry(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ma=!1;function Ew(n,e){switch(n){case"compositionend":return Ry(e);case"keypress":return e.which!==32?null:(h0=!0,d0);case"textInput":return n=e.data,n===d0&&h0?null:n;default:return null}}function ww(n,e){if(ma)return n==="compositionend"||!bg&&by(n,e)?(n=Ay(),rf=Tg=ys=null,ma=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Cy&&e.locale!=="ko"?null:e.data;default:return null}}var Tw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function p0(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!Tw[n.type]:e==="textarea"}function Py(n,e,t,i){ay(i),e=If(e,"onChange"),0<e.length&&(t=new Ag("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var jl=null,mc=null;function Aw(n){Vy(n,0)}function md(n){var e=va(n);if(ey(e))return n}function Cw(n,e){if(n==="change")return e}var Dy=!1;if(Qr){var Xd;if(Qr){var Yd="oninput"in document;if(!Yd){var m0=document.createElement("div");m0.setAttribute("oninput","return;"),Yd=typeof m0.oninput=="function"}Xd=Yd}else Xd=!1;Dy=Xd&&(!document.documentMode||9<document.documentMode)}function g0(){jl&&(jl.detachEvent("onpropertychange",Ny),mc=jl=null)}function Ny(n){if(n.propertyName==="value"&&md(mc)){var e=[];Py(e,mc,n,yg(n)),fy(Aw,e)}}function bw(n,e,t){n==="focusin"?(g0(),jl=e,mc=t,jl.attachEvent("onpropertychange",Ny)):n==="focusout"&&g0()}function Rw(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return md(mc)}function Pw(n,e){if(n==="click")return md(e)}function Dw(n,e){if(n==="input"||n==="change")return md(e)}function Nw(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var pr=typeof Object.is=="function"?Object.is:Nw;function gc(n,e){if(pr(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!tp.call(e,r)||!pr(n[r],e[r]))return!1}return!0}function _0(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function v0(n,e){var t=_0(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=_0(t)}}function Ly(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Ly(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Iy(){for(var n=window,e=Cf();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Cf(n.document)}return e}function Rg(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function Lw(n){var e=Iy(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&Ly(t.ownerDocument.documentElement,t)){if(i!==null&&Rg(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=v0(t,s);var o=v0(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Iw=Qr&&"documentMode"in document&&11>=document.documentMode,ga=null,yp=null,Xl=null,Sp=!1;function x0(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Sp||ga==null||ga!==Cf(i)||(i=ga,"selectionStart"in i&&Rg(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Xl&&gc(Xl,i)||(Xl=i,i=If(yp,"onSelect"),0<i.length&&(e=new Ag("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=ga)))}function au(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var _a={animationend:au("Animation","AnimationEnd"),animationiteration:au("Animation","AnimationIteration"),animationstart:au("Animation","AnimationStart"),transitionend:au("Transition","TransitionEnd")},$d={},Uy={};Qr&&(Uy=document.createElement("div").style,"AnimationEvent"in window||(delete _a.animationend.animation,delete _a.animationiteration.animation,delete _a.animationstart.animation),"TransitionEvent"in window||delete _a.transitionend.transition);function gd(n){if($d[n])return $d[n];if(!_a[n])return n;var e=_a[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Uy)return $d[n]=e[t];return n}var Fy=gd("animationend"),Oy=gd("animationiteration"),ky=gd("animationstart"),zy=gd("transitionend"),By=new Map,y0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ys(n,e){By.set(n,e),Go(e,[n])}for(var qd=0;qd<y0.length;qd++){var Kd=y0[qd],Uw=Kd.toLowerCase(),Fw=Kd[0].toUpperCase()+Kd.slice(1);Ys(Uw,"on"+Fw)}Ys(Fy,"onAnimationEnd");Ys(Oy,"onAnimationIteration");Ys(ky,"onAnimationStart");Ys("dblclick","onDoubleClick");Ys("focusin","onFocus");Ys("focusout","onBlur");Ys(zy,"onTransitionEnd");Ga("onMouseEnter",["mouseout","mouseover"]);Ga("onMouseLeave",["mouseout","mouseover"]);Ga("onPointerEnter",["pointerout","pointerover"]);Ga("onPointerLeave",["pointerout","pointerover"]);Go("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Go("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Go("onBeforeInput",["compositionend","keypress","textInput","paste"]);Go("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Go("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Go("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ll="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ow=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ll));function S0(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,UE(i,e,void 0,n),n.currentTarget=null}function Vy(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;S0(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;S0(r,a,c),s=l}}}if(Rf)throw n=gp,Rf=!1,gp=null,n}function It(n,e){var t=e[Ap];t===void 0&&(t=e[Ap]=new Set);var i=n+"__bubble";t.has(i)||(Hy(e,n,2,!1),t.add(i))}function Zd(n,e,t){var i=0;e&&(i|=4),Hy(t,n,i,e)}var lu="_reactListening"+Math.random().toString(36).slice(2);function _c(n){if(!n[lu]){n[lu]=!0,qx.forEach(function(t){t!=="selectionchange"&&(Ow.has(t)||Zd(t,!1,n),Zd(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[lu]||(e[lu]=!0,Zd("selectionchange",!1,e))}}function Hy(n,e,t,i){switch(Ty(e)){case 1:var r=ZE;break;case 4:r=QE;break;default:r=wg}t=r.bind(null,e,t,n),r=void 0,!mp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Qd(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=go(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}fy(function(){var c=s,u=yg(t),d=[];e:{var f=By.get(n);if(f!==void 0){var p=Ag,v=n;switch(n){case"keypress":if(sf(t)===0)break e;case"keydown":case"keyup":p=hw;break;case"focusin":v="focus",p=jd;break;case"focusout":v="blur",p=jd;break;case"beforeblur":case"afterblur":p=jd;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=c0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=tw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=gw;break;case Fy:case Oy:case ky:p=rw;break;case zy:p=vw;break;case"scroll":p=JE;break;case"wheel":p=yw;break;case"copy":case"cut":case"paste":p=ow;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=f0}var _=(e&4)!==0,m=!_&&n==="scroll",h=_?f!==null?f+"Capture":null:f;_=[];for(var g=c,x;g!==null;){x=g;var y=x.stateNode;if(x.tag===5&&y!==null&&(x=y,h!==null&&(y=fc(g,h),y!=null&&_.push(vc(g,y,x)))),m)break;g=g.return}0<_.length&&(f=new p(f,v,null,t,u),d.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",f&&t!==hp&&(v=t.relatedTarget||t.fromElement)&&(go(v)||v[Jr]))break e;if((p||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,p?(v=t.relatedTarget||t.toElement,p=c,v=v?go(v):null,v!==null&&(m=Wo(v),v!==m||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=c),p!==v)){if(_=c0,y="onMouseLeave",h="onMouseEnter",g="mouse",(n==="pointerout"||n==="pointerover")&&(_=f0,y="onPointerLeave",h="onPointerEnter",g="pointer"),m=p==null?f:va(p),x=v==null?f:va(v),f=new _(y,g+"leave",p,t,u),f.target=m,f.relatedTarget=x,y=null,go(u)===c&&(_=new _(h,g+"enter",v,t,u),_.target=x,_.relatedTarget=m,y=_),m=y,p&&v)t:{for(_=p,h=v,g=0,x=_;x;x=Yo(x))g++;for(x=0,y=h;y;y=Yo(y))x++;for(;0<g-x;)_=Yo(_),g--;for(;0<x-g;)h=Yo(h),x--;for(;g--;){if(_===h||h!==null&&_===h.alternate)break t;_=Yo(_),h=Yo(h)}_=null}else _=null;p!==null&&M0(d,f,p,_,!1),v!==null&&m!==null&&M0(d,m,v,_,!0)}}e:{if(f=c?va(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var E=Cw;else if(p0(f))if(Dy)E=Dw;else{E=Rw;var A=bw}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(E=Pw);if(E&&(E=E(n,c))){Py(d,E,t,u);break e}A&&A(n,f,c),n==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&lp(f,"number",f.value)}switch(A=c?va(c):window,n){case"focusin":(p0(A)||A.contentEditable==="true")&&(ga=A,yp=c,Xl=null);break;case"focusout":Xl=yp=ga=null;break;case"mousedown":Sp=!0;break;case"contextmenu":case"mouseup":case"dragend":Sp=!1,x0(d,t,u);break;case"selectionchange":if(Iw)break;case"keydown":case"keyup":x0(d,t,u)}var w;if(bg)e:{switch(n){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else ma?by(n,t)&&(R="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(R="onCompositionStart");R&&(Cy&&t.locale!=="ko"&&(ma||R!=="onCompositionStart"?R==="onCompositionEnd"&&ma&&(w=Ay()):(ys=u,Tg="value"in ys?ys.value:ys.textContent,ma=!0)),A=If(c,R),0<A.length&&(R=new u0(R,n,null,t,u),d.push({event:R,listeners:A}),w?R.data=w:(w=Ry(t),w!==null&&(R.data=w)))),(w=Mw?Ew(n,t):ww(n,t))&&(c=If(c,"onBeforeInput"),0<c.length&&(u=new u0("onBeforeInput","beforeinput",null,t,u),d.push({event:u,listeners:c}),u.data=w))}Vy(d,e)})}function vc(n,e,t){return{instance:n,listener:e,currentTarget:t}}function If(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=fc(n,t),s!=null&&i.unshift(vc(n,s,r)),s=fc(n,e),s!=null&&i.push(vc(n,s,r))),n=n.return}return i}function Yo(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function M0(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=fc(t,s),l!=null&&o.unshift(vc(t,l,a))):r||(l=fc(t,s),l!=null&&o.push(vc(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var kw=/\r\n?/g,zw=/\u0000|\uFFFD/g;function E0(n){return(typeof n=="string"?n:""+n).replace(kw,`
`).replace(zw,"")}function cu(n,e,t){if(e=E0(e),E0(n)!==e&&t)throw Error(ae(425))}function Uf(){}var Mp=null,Ep=null;function wp(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Tp=typeof setTimeout=="function"?setTimeout:void 0,Bw=typeof clearTimeout=="function"?clearTimeout:void 0,w0=typeof Promise=="function"?Promise:void 0,Vw=typeof queueMicrotask=="function"?queueMicrotask:typeof w0<"u"?function(n){return w0.resolve(null).then(n).catch(Hw)}:Tp;function Hw(n){setTimeout(function(){throw n})}function Jd(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),pc(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);pc(e)}function Ps(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function T0(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var ul=Math.random().toString(36).slice(2),yr="__reactFiber$"+ul,xc="__reactProps$"+ul,Jr="__reactContainer$"+ul,Ap="__reactEvents$"+ul,Gw="__reactListeners$"+ul,Ww="__reactHandles$"+ul;function go(n){var e=n[yr];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Jr]||t[yr]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=T0(n);n!==null;){if(t=n[yr])return t;n=T0(n)}return e}n=t,t=n.parentNode}return null}function Gc(n){return n=n[yr]||n[Jr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function va(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(ae(33))}function _d(n){return n[xc]||null}var Cp=[],xa=-1;function $s(n){return{current:n}}function Ut(n){0>xa||(n.current=Cp[xa],Cp[xa]=null,xa--)}function Pt(n,e){xa++,Cp[xa]=n.current,n.current=e}var Vs={},Fn=$s(Vs),ii=$s(!1),No=Vs;function Wa(n,e){var t=n.type.contextTypes;if(!t)return Vs;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function ri(n){return n=n.childContextTypes,n!=null}function Ff(){Ut(ii),Ut(Fn)}function A0(n,e,t){if(Fn.current!==Vs)throw Error(ae(168));Pt(Fn,e),Pt(ii,t)}function Gy(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ae(108,bE(n)||"Unknown",r));return jt({},t,i)}function Of(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Vs,No=Fn.current,Pt(Fn,n),Pt(ii,ii.current),!0}function C0(n,e,t){var i=n.stateNode;if(!i)throw Error(ae(169));t?(n=Gy(n,e,No),i.__reactInternalMemoizedMergedChildContext=n,Ut(ii),Ut(Fn),Pt(Fn,n)):Ut(ii),Pt(ii,t)}var Vr=null,vd=!1,eh=!1;function Wy(n){Vr===null?Vr=[n]:Vr.push(n)}function jw(n){vd=!0,Wy(n)}function qs(){if(!eh&&Vr!==null){eh=!0;var n=0,e=Et;try{var t=Vr;for(Et=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Vr=null,vd=!1}catch(r){throw Vr!==null&&(Vr=Vr.slice(n+1)),my(Sg,qs),r}finally{Et=e,eh=!1}}return null}var ya=[],Sa=0,kf=null,zf=0,Vi=[],Hi=0,Lo=null,jr=1,Xr="";function oo(n,e){ya[Sa++]=zf,ya[Sa++]=kf,kf=n,zf=e}function jy(n,e,t){Vi[Hi++]=jr,Vi[Hi++]=Xr,Vi[Hi++]=Lo,Lo=n;var i=jr;n=Xr;var r=32-fr(i)-1;i&=~(1<<r),t+=1;var s=32-fr(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,jr=1<<32-fr(e)+r|t<<r|i,Xr=s+n}else jr=1<<s|t<<r|i,Xr=n}function Pg(n){n.return!==null&&(oo(n,1),jy(n,1,0))}function Dg(n){for(;n===kf;)kf=ya[--Sa],ya[Sa]=null,zf=ya[--Sa],ya[Sa]=null;for(;n===Lo;)Lo=Vi[--Hi],Vi[Hi]=null,Xr=Vi[--Hi],Vi[Hi]=null,jr=Vi[--Hi],Vi[Hi]=null}var bi=null,Ai=null,Ot=!1,lr=null;function Xy(n,e){var t=Xi(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function b0(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,bi=n,Ai=Ps(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,bi=n,Ai=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Lo!==null?{id:jr,overflow:Xr}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Xi(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,bi=n,Ai=null,!0):!1;default:return!1}}function bp(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Rp(n){if(Ot){var e=Ai;if(e){var t=e;if(!b0(n,e)){if(bp(n))throw Error(ae(418));e=Ps(t.nextSibling);var i=bi;e&&b0(n,e)?Xy(i,t):(n.flags=n.flags&-4097|2,Ot=!1,bi=n)}}else{if(bp(n))throw Error(ae(418));n.flags=n.flags&-4097|2,Ot=!1,bi=n}}}function R0(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;bi=n}function uu(n){if(n!==bi)return!1;if(!Ot)return R0(n),Ot=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!wp(n.type,n.memoizedProps)),e&&(e=Ai)){if(bp(n))throw Yy(),Error(ae(418));for(;e;)Xy(n,e),e=Ps(e.nextSibling)}if(R0(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(ae(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Ai=Ps(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Ai=null}}else Ai=bi?Ps(n.stateNode.nextSibling):null;return!0}function Yy(){for(var n=Ai;n;)n=Ps(n.nextSibling)}function ja(){Ai=bi=null,Ot=!1}function Ng(n){lr===null?lr=[n]:lr.push(n)}var Xw=os.ReactCurrentBatchConfig;function xl(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(ae(309));var i=t.stateNode}if(!i)throw Error(ae(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(ae(284));if(!t._owner)throw Error(ae(290,n))}return n}function fu(n,e){throw n=Object.prototype.toString.call(e),Error(ae(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function P0(n){var e=n._init;return e(n._payload)}function $y(n){function e(h,g){if(n){var x=h.deletions;x===null?(h.deletions=[g],h.flags|=16):x.push(g)}}function t(h,g){if(!n)return null;for(;g!==null;)e(h,g),g=g.sibling;return null}function i(h,g){for(h=new Map;g!==null;)g.key!==null?h.set(g.key,g):h.set(g.index,g),g=g.sibling;return h}function r(h,g){return h=Is(h,g),h.index=0,h.sibling=null,h}function s(h,g,x){return h.index=x,n?(x=h.alternate,x!==null?(x=x.index,x<g?(h.flags|=2,g):x):(h.flags|=2,g)):(h.flags|=1048576,g)}function o(h){return n&&h.alternate===null&&(h.flags|=2),h}function a(h,g,x,y){return g===null||g.tag!==6?(g=ah(x,h.mode,y),g.return=h,g):(g=r(g,x),g.return=h,g)}function l(h,g,x,y){var E=x.type;return E===pa?u(h,g,x.props.children,y,x.key):g!==null&&(g.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===ms&&P0(E)===g.type)?(y=r(g,x.props),y.ref=xl(h,g,x),y.return=h,y):(y=df(x.type,x.key,x.props,null,h.mode,y),y.ref=xl(h,g,x),y.return=h,y)}function c(h,g,x,y){return g===null||g.tag!==4||g.stateNode.containerInfo!==x.containerInfo||g.stateNode.implementation!==x.implementation?(g=lh(x,h.mode,y),g.return=h,g):(g=r(g,x.children||[]),g.return=h,g)}function u(h,g,x,y,E){return g===null||g.tag!==7?(g=wo(x,h.mode,y,E),g.return=h,g):(g=r(g,x),g.return=h,g)}function d(h,g,x){if(typeof g=="string"&&g!==""||typeof g=="number")return g=ah(""+g,h.mode,x),g.return=h,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case eu:return x=df(g.type,g.key,g.props,null,h.mode,x),x.ref=xl(h,null,g),x.return=h,x;case ha:return g=lh(g,h.mode,x),g.return=h,g;case ms:var y=g._init;return d(h,y(g._payload),x)}if(Dl(g)||pl(g))return g=wo(g,h.mode,x,null),g.return=h,g;fu(h,g)}return null}function f(h,g,x,y){var E=g!==null?g.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return E!==null?null:a(h,g,""+x,y);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case eu:return x.key===E?l(h,g,x,y):null;case ha:return x.key===E?c(h,g,x,y):null;case ms:return E=x._init,f(h,g,E(x._payload),y)}if(Dl(x)||pl(x))return E!==null?null:u(h,g,x,y,null);fu(h,x)}return null}function p(h,g,x,y,E){if(typeof y=="string"&&y!==""||typeof y=="number")return h=h.get(x)||null,a(g,h,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case eu:return h=h.get(y.key===null?x:y.key)||null,l(g,h,y,E);case ha:return h=h.get(y.key===null?x:y.key)||null,c(g,h,y,E);case ms:var A=y._init;return p(h,g,x,A(y._payload),E)}if(Dl(y)||pl(y))return h=h.get(x)||null,u(g,h,y,E,null);fu(g,y)}return null}function v(h,g,x,y){for(var E=null,A=null,w=g,R=g=0,M=null;w!==null&&R<x.length;R++){w.index>R?(M=w,w=null):M=w.sibling;var S=f(h,w,x[R],y);if(S===null){w===null&&(w=M);break}n&&w&&S.alternate===null&&e(h,w),g=s(S,g,R),A===null?E=S:A.sibling=S,A=S,w=M}if(R===x.length)return t(h,w),Ot&&oo(h,R),E;if(w===null){for(;R<x.length;R++)w=d(h,x[R],y),w!==null&&(g=s(w,g,R),A===null?E=w:A.sibling=w,A=w);return Ot&&oo(h,R),E}for(w=i(h,w);R<x.length;R++)M=p(w,h,R,x[R],y),M!==null&&(n&&M.alternate!==null&&w.delete(M.key===null?R:M.key),g=s(M,g,R),A===null?E=M:A.sibling=M,A=M);return n&&w.forEach(function(L){return e(h,L)}),Ot&&oo(h,R),E}function _(h,g,x,y){var E=pl(x);if(typeof E!="function")throw Error(ae(150));if(x=E.call(x),x==null)throw Error(ae(151));for(var A=E=null,w=g,R=g=0,M=null,S=x.next();w!==null&&!S.done;R++,S=x.next()){w.index>R?(M=w,w=null):M=w.sibling;var L=f(h,w,S.value,y);if(L===null){w===null&&(w=M);break}n&&w&&L.alternate===null&&e(h,w),g=s(L,g,R),A===null?E=L:A.sibling=L,A=L,w=M}if(S.done)return t(h,w),Ot&&oo(h,R),E;if(w===null){for(;!S.done;R++,S=x.next())S=d(h,S.value,y),S!==null&&(g=s(S,g,R),A===null?E=S:A.sibling=S,A=S);return Ot&&oo(h,R),E}for(w=i(h,w);!S.done;R++,S=x.next())S=p(w,h,R,S.value,y),S!==null&&(n&&S.alternate!==null&&w.delete(S.key===null?R:S.key),g=s(S,g,R),A===null?E=S:A.sibling=S,A=S);return n&&w.forEach(function(F){return e(h,F)}),Ot&&oo(h,R),E}function m(h,g,x,y){if(typeof x=="object"&&x!==null&&x.type===pa&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case eu:e:{for(var E=x.key,A=g;A!==null;){if(A.key===E){if(E=x.type,E===pa){if(A.tag===7){t(h,A.sibling),g=r(A,x.props.children),g.return=h,h=g;break e}}else if(A.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===ms&&P0(E)===A.type){t(h,A.sibling),g=r(A,x.props),g.ref=xl(h,A,x),g.return=h,h=g;break e}t(h,A);break}else e(h,A);A=A.sibling}x.type===pa?(g=wo(x.props.children,h.mode,y,x.key),g.return=h,h=g):(y=df(x.type,x.key,x.props,null,h.mode,y),y.ref=xl(h,g,x),y.return=h,h=y)}return o(h);case ha:e:{for(A=x.key;g!==null;){if(g.key===A)if(g.tag===4&&g.stateNode.containerInfo===x.containerInfo&&g.stateNode.implementation===x.implementation){t(h,g.sibling),g=r(g,x.children||[]),g.return=h,h=g;break e}else{t(h,g);break}else e(h,g);g=g.sibling}g=lh(x,h.mode,y),g.return=h,h=g}return o(h);case ms:return A=x._init,m(h,g,A(x._payload),y)}if(Dl(x))return v(h,g,x,y);if(pl(x))return _(h,g,x,y);fu(h,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,g!==null&&g.tag===6?(t(h,g.sibling),g=r(g,x),g.return=h,h=g):(t(h,g),g=ah(x,h.mode,y),g.return=h,h=g),o(h)):t(h,g)}return m}var Xa=$y(!0),qy=$y(!1),Bf=$s(null),Vf=null,Ma=null,Lg=null;function Ig(){Lg=Ma=Vf=null}function Ug(n){var e=Bf.current;Ut(Bf),n._currentValue=e}function Pp(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function La(n,e){Vf=n,Lg=Ma=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(ni=!0),n.firstContext=null)}function Ji(n){var e=n._currentValue;if(Lg!==n)if(n={context:n,memoizedValue:e,next:null},Ma===null){if(Vf===null)throw Error(ae(308));Ma=n,Vf.dependencies={lanes:0,firstContext:n}}else Ma=Ma.next=n;return e}var _o=null;function Fg(n){_o===null?_o=[n]:_o.push(n)}function Ky(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Fg(e)):(t.next=r.next,r.next=t),e.interleaved=t,es(n,i)}function es(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var gs=!1;function Og(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zy(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function qr(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Ds(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,dt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,es(n,t)}return r=i.interleaved,r===null?(e.next=e,Fg(i)):(e.next=r.next,r.next=e),i.interleaved=e,es(n,t)}function of(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Mg(n,t)}}function D0(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Hf(n,e,t,i){var r=n.updateQueue;gs=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=n.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,u=c=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=n,_=a;switch(f=e,p=t,_.tag){case 1:if(v=_.payload,typeof v=="function"){d=v.call(p,d,f);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=_.payload,f=typeof v=="function"?v.call(p,d,f):v,f==null)break e;d=jt({},d,f);break e;case 2:gs=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Uo|=o,n.lanes=o,n.memoizedState=d}}function N0(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(ae(191,r));r.call(i)}}}var Wc={},br=$s(Wc),yc=$s(Wc),Sc=$s(Wc);function vo(n){if(n===Wc)throw Error(ae(174));return n}function kg(n,e){switch(Pt(Sc,e),Pt(yc,n),Pt(br,Wc),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:up(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=up(e,n)}Ut(br),Pt(br,e)}function Ya(){Ut(br),Ut(yc),Ut(Sc)}function Qy(n){vo(Sc.current);var e=vo(br.current),t=up(e,n.type);e!==t&&(Pt(yc,n),Pt(br,t))}function zg(n){yc.current===n&&(Ut(br),Ut(yc))}var Vt=$s(0);function Gf(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var th=[];function Bg(){for(var n=0;n<th.length;n++)th[n]._workInProgressVersionPrimary=null;th.length=0}var af=os.ReactCurrentDispatcher,nh=os.ReactCurrentBatchConfig,Io=0,Wt=null,un=null,vn=null,Wf=!1,Yl=!1,Mc=0,Yw=0;function An(){throw Error(ae(321))}function Vg(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!pr(n[t],e[t]))return!1;return!0}function Hg(n,e,t,i,r,s){if(Io=s,Wt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,af.current=n===null||n.memoizedState===null?Zw:Qw,n=t(i,r),Yl){s=0;do{if(Yl=!1,Mc=0,25<=s)throw Error(ae(301));s+=1,vn=un=null,e.updateQueue=null,af.current=Jw,n=t(i,r)}while(Yl)}if(af.current=jf,e=un!==null&&un.next!==null,Io=0,vn=un=Wt=null,Wf=!1,e)throw Error(ae(300));return n}function Gg(){var n=Mc!==0;return Mc=0,n}function gr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vn===null?Wt.memoizedState=vn=n:vn=vn.next=n,vn}function er(){if(un===null){var n=Wt.alternate;n=n!==null?n.memoizedState:null}else n=un.next;var e=vn===null?Wt.memoizedState:vn.next;if(e!==null)vn=e,un=n;else{if(n===null)throw Error(ae(310));un=n,n={memoizedState:un.memoizedState,baseState:un.baseState,baseQueue:un.baseQueue,queue:un.queue,next:null},vn===null?Wt.memoizedState=vn=n:vn=vn.next=n}return vn}function Ec(n,e){return typeof e=="function"?e(n):e}function ih(n){var e=er(),t=e.queue;if(t===null)throw Error(ae(311));t.lastRenderedReducer=n;var i=un,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Io&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:n(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,Wt.lanes|=u,Uo|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,pr(i,e.memoizedState)||(ni=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,Wt.lanes|=s,Uo|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function rh(n){var e=er(),t=e.queue;if(t===null)throw Error(ae(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);pr(s,e.memoizedState)||(ni=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function Jy(){}function e1(n,e){var t=Wt,i=er(),r=e(),s=!pr(i.memoizedState,r);if(s&&(i.memoizedState=r,ni=!0),i=i.queue,Wg(i1.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||vn!==null&&vn.memoizedState.tag&1){if(t.flags|=2048,wc(9,n1.bind(null,t,i,r,e),void 0,null),xn===null)throw Error(ae(349));Io&30||t1(t,e,r)}return r}function t1(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Wt.updateQueue,e===null?(e={lastEffect:null,stores:null},Wt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function n1(n,e,t,i){e.value=t,e.getSnapshot=i,r1(e)&&s1(n)}function i1(n,e,t){return t(function(){r1(e)&&s1(n)})}function r1(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!pr(n,t)}catch{return!0}}function s1(n){var e=es(n,1);e!==null&&dr(e,n,1,-1)}function L0(n){var e=gr();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ec,lastRenderedState:n},e.queue=n,n=n.dispatch=Kw.bind(null,Wt,n),[e.memoizedState,n]}function wc(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=Wt.updateQueue,e===null?(e={lastEffect:null,stores:null},Wt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function o1(){return er().memoizedState}function lf(n,e,t,i){var r=gr();Wt.flags|=n,r.memoizedState=wc(1|e,t,void 0,i===void 0?null:i)}function xd(n,e,t,i){var r=er();i=i===void 0?null:i;var s=void 0;if(un!==null){var o=un.memoizedState;if(s=o.destroy,i!==null&&Vg(i,o.deps)){r.memoizedState=wc(e,t,s,i);return}}Wt.flags|=n,r.memoizedState=wc(1|e,t,s,i)}function I0(n,e){return lf(8390656,8,n,e)}function Wg(n,e){return xd(2048,8,n,e)}function a1(n,e){return xd(4,2,n,e)}function l1(n,e){return xd(4,4,n,e)}function c1(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function u1(n,e,t){return t=t!=null?t.concat([n]):null,xd(4,4,c1.bind(null,e,n),t)}function jg(){}function f1(n,e){var t=er();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Vg(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function d1(n,e){var t=er();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Vg(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function h1(n,e,t){return Io&21?(pr(t,e)||(t=vy(),Wt.lanes|=t,Uo|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,ni=!0),n.memoizedState=t)}function $w(n,e){var t=Et;Et=t!==0&&4>t?t:4,n(!0);var i=nh.transition;nh.transition={};try{n(!1),e()}finally{Et=t,nh.transition=i}}function p1(){return er().memoizedState}function qw(n,e,t){var i=Ls(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},m1(n))g1(e,t);else if(t=Ky(n,e,t,i),t!==null){var r=$n();dr(t,n,i,r),_1(t,e,i)}}function Kw(n,e,t){var i=Ls(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(m1(n))g1(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,pr(a,o)){var l=e.interleaved;l===null?(r.next=r,Fg(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=Ky(n,e,r,i),t!==null&&(r=$n(),dr(t,n,i,r),_1(t,e,i))}}function m1(n){var e=n.alternate;return n===Wt||e!==null&&e===Wt}function g1(n,e){Yl=Wf=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function _1(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Mg(n,t)}}var jf={readContext:Ji,useCallback:An,useContext:An,useEffect:An,useImperativeHandle:An,useInsertionEffect:An,useLayoutEffect:An,useMemo:An,useReducer:An,useRef:An,useState:An,useDebugValue:An,useDeferredValue:An,useTransition:An,useMutableSource:An,useSyncExternalStore:An,useId:An,unstable_isNewReconciler:!1},Zw={readContext:Ji,useCallback:function(n,e){return gr().memoizedState=[n,e===void 0?null:e],n},useContext:Ji,useEffect:I0,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,lf(4194308,4,c1.bind(null,e,n),t)},useLayoutEffect:function(n,e){return lf(4194308,4,n,e)},useInsertionEffect:function(n,e){return lf(4,2,n,e)},useMemo:function(n,e){var t=gr();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=gr();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=qw.bind(null,Wt,n),[i.memoizedState,n]},useRef:function(n){var e=gr();return n={current:n},e.memoizedState=n},useState:L0,useDebugValue:jg,useDeferredValue:function(n){return gr().memoizedState=n},useTransition:function(){var n=L0(!1),e=n[0];return n=$w.bind(null,n[1]),gr().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=Wt,r=gr();if(Ot){if(t===void 0)throw Error(ae(407));t=t()}else{if(t=e(),xn===null)throw Error(ae(349));Io&30||t1(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,I0(i1.bind(null,i,s,n),[n]),i.flags|=2048,wc(9,n1.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=gr(),e=xn.identifierPrefix;if(Ot){var t=Xr,i=jr;t=(i&~(1<<32-fr(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Mc++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=Yw++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},Qw={readContext:Ji,useCallback:f1,useContext:Ji,useEffect:Wg,useImperativeHandle:u1,useInsertionEffect:a1,useLayoutEffect:l1,useMemo:d1,useReducer:ih,useRef:o1,useState:function(){return ih(Ec)},useDebugValue:jg,useDeferredValue:function(n){var e=er();return h1(e,un.memoizedState,n)},useTransition:function(){var n=ih(Ec)[0],e=er().memoizedState;return[n,e]},useMutableSource:Jy,useSyncExternalStore:e1,useId:p1,unstable_isNewReconciler:!1},Jw={readContext:Ji,useCallback:f1,useContext:Ji,useEffect:Wg,useImperativeHandle:u1,useInsertionEffect:a1,useLayoutEffect:l1,useMemo:d1,useReducer:rh,useRef:o1,useState:function(){return rh(Ec)},useDebugValue:jg,useDeferredValue:function(n){var e=er();return un===null?e.memoizedState=n:h1(e,un.memoizedState,n)},useTransition:function(){var n=rh(Ec)[0],e=er().memoizedState;return[n,e]},useMutableSource:Jy,useSyncExternalStore:e1,useId:p1,unstable_isNewReconciler:!1};function or(n,e){if(n&&n.defaultProps){e=jt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Dp(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:jt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var yd={isMounted:function(n){return(n=n._reactInternals)?Wo(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=$n(),r=Ls(n),s=qr(i,r);s.payload=e,t!=null&&(s.callback=t),e=Ds(n,s,r),e!==null&&(dr(e,n,r,i),of(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=$n(),r=Ls(n),s=qr(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Ds(n,s,r),e!==null&&(dr(e,n,r,i),of(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=$n(),i=Ls(n),r=qr(t,i);r.tag=2,e!=null&&(r.callback=e),e=Ds(n,r,i),e!==null&&(dr(e,n,i,t),of(e,n,i))}};function U0(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!gc(t,i)||!gc(r,s):!0}function v1(n,e,t){var i=!1,r=Vs,s=e.contextType;return typeof s=="object"&&s!==null?s=Ji(s):(r=ri(e)?No:Fn.current,i=e.contextTypes,s=(i=i!=null)?Wa(n,r):Vs),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=yd,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function F0(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&yd.enqueueReplaceState(e,e.state,null)}function Np(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},Og(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Ji(s):(s=ri(e)?No:Fn.current,r.context=Wa(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Dp(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&yd.enqueueReplaceState(r,r.state,null),Hf(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function $a(n,e){try{var t="",i=e;do t+=CE(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function sh(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Lp(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var eT=typeof WeakMap=="function"?WeakMap:Map;function x1(n,e,t){t=qr(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Yf||(Yf=!0,Gp=i),Lp(n,e)},t}function y1(n,e,t){t=qr(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Lp(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Lp(n,e),typeof i!="function"&&(Ns===null?Ns=new Set([this]):Ns.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function O0(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new eT;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=pT.bind(null,n,e,t),e.then(n,n))}function k0(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function z0(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=qr(-1,1),e.tag=2,Ds(t,e,1))),t.lanes|=1),n)}var tT=os.ReactCurrentOwner,ni=!1;function Gn(n,e,t,i){e.child=n===null?qy(e,null,t,i):Xa(e,n.child,t,i)}function B0(n,e,t,i,r){t=t.render;var s=e.ref;return La(e,r),i=Hg(n,e,t,i,s,r),t=Gg(),n!==null&&!ni?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,ts(n,e,r)):(Ot&&t&&Pg(e),e.flags|=1,Gn(n,e,i,r),e.child)}function V0(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!Jg(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,S1(n,e,s,i,r)):(n=df(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:gc,t(o,i)&&n.ref===e.ref)return ts(n,e,r)}return e.flags|=1,n=Is(s,i),n.ref=e.ref,n.return=e,e.child=n}function S1(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(gc(s,i)&&n.ref===e.ref)if(ni=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(ni=!0);else return e.lanes=n.lanes,ts(n,e,r)}return Ip(n,e,t,i,r)}function M1(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Pt(wa,yi),yi|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,Pt(wa,yi),yi|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,Pt(wa,yi),yi|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,Pt(wa,yi),yi|=i;return Gn(n,e,r,t),e.child}function E1(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Ip(n,e,t,i,r){var s=ri(t)?No:Fn.current;return s=Wa(e,s),La(e,r),t=Hg(n,e,t,i,s,r),i=Gg(),n!==null&&!ni?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,ts(n,e,r)):(Ot&&i&&Pg(e),e.flags|=1,Gn(n,e,t,r),e.child)}function H0(n,e,t,i,r){if(ri(t)){var s=!0;Of(e)}else s=!1;if(La(e,r),e.stateNode===null)cf(n,e),v1(e,t,i),Np(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=Ji(c):(c=ri(t)?No:Fn.current,c=Wa(e,c));var u=t.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&F0(e,o,i,c),gs=!1;var f=e.memoizedState;o.state=f,Hf(e,i,o,r),l=e.memoizedState,a!==i||f!==l||ii.current||gs?(typeof u=="function"&&(Dp(e,t,u,i),l=e.memoizedState),(a=gs||U0(e,t,a,i,f,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Zy(n,e),a=e.memoizedProps,c=e.type===e.elementType?a:or(e.type,a),o.props=c,d=e.pendingProps,f=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Ji(l):(l=ri(t)?No:Fn.current,l=Wa(e,l));var p=t.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&F0(e,o,i,l),gs=!1,f=e.memoizedState,o.state=f,Hf(e,i,o,r);var v=e.memoizedState;a!==d||f!==v||ii.current||gs?(typeof p=="function"&&(Dp(e,t,p,i),v=e.memoizedState),(c=gs||U0(e,t,c,i,f,v,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),i=!1)}return Up(n,e,t,i,s,r)}function Up(n,e,t,i,r,s){E1(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&C0(e,t,!1),ts(n,e,s);i=e.stateNode,tT.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=Xa(e,n.child,null,s),e.child=Xa(e,null,a,s)):Gn(n,e,a,s),e.memoizedState=i.state,r&&C0(e,t,!0),e.child}function w1(n){var e=n.stateNode;e.pendingContext?A0(n,e.pendingContext,e.pendingContext!==e.context):e.context&&A0(n,e.context,!1),kg(n,e.containerInfo)}function G0(n,e,t,i,r){return ja(),Ng(r),e.flags|=256,Gn(n,e,t,i),e.child}var Fp={dehydrated:null,treeContext:null,retryLane:0};function Op(n){return{baseLanes:n,cachePool:null,transitions:null}}function T1(n,e,t){var i=e.pendingProps,r=Vt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),Pt(Vt,r&1),n===null)return Rp(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ed(o,i,0,null),n=wo(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Op(t),e.memoizedState=Fp,n):Xg(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return nT(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Is(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Is(a,s):(s=wo(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?Op(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=Fp,i}return s=n.child,n=s.sibling,i=Is(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Xg(n,e){return e=Ed({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function du(n,e,t,i){return i!==null&&Ng(i),Xa(e,n.child,null,t),n=Xg(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function nT(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=sh(Error(ae(422))),du(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Ed({mode:"visible",children:i.children},r,0,null),s=wo(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Xa(e,n.child,null,o),e.child.memoizedState=Op(o),e.memoizedState=Fp,s);if(!(e.mode&1))return du(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ae(419)),i=sh(s,i,void 0),du(n,e,o,i)}if(a=(o&n.childLanes)!==0,ni||a){if(i=xn,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,es(n,r),dr(i,n,r,-1))}return Qg(),i=sh(Error(ae(421))),du(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=mT.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Ai=Ps(r.nextSibling),bi=e,Ot=!0,lr=null,n!==null&&(Vi[Hi++]=jr,Vi[Hi++]=Xr,Vi[Hi++]=Lo,jr=n.id,Xr=n.overflow,Lo=e),e=Xg(e,i.children),e.flags|=4096,e)}function W0(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Pp(n.return,e,t)}function oh(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function A1(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Gn(n,e,i.children,t),i=Vt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&W0(n,t,e);else if(n.tag===19)W0(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(Pt(Vt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Gf(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),oh(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Gf(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}oh(e,!0,t,null,s);break;case"together":oh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function cf(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function ts(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Uo|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(ae(153));if(e.child!==null){for(n=e.child,t=Is(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Is(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function iT(n,e,t){switch(e.tag){case 3:w1(e),ja();break;case 5:Qy(e);break;case 1:ri(e.type)&&Of(e);break;case 4:kg(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Pt(Bf,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Pt(Vt,Vt.current&1),e.flags|=128,null):t&e.child.childLanes?T1(n,e,t):(Pt(Vt,Vt.current&1),n=ts(n,e,t),n!==null?n.sibling:null);Pt(Vt,Vt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return A1(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Pt(Vt,Vt.current),i)break;return null;case 22:case 23:return e.lanes=0,M1(n,e,t)}return ts(n,e,t)}var C1,kp,b1,R1;C1=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};kp=function(){};b1=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,vo(br.current);var s=null;switch(t){case"input":r=op(n,r),i=op(n,i),s=[];break;case"select":r=jt({},r,{value:void 0}),i=jt({},i,{value:void 0}),s=[];break;case"textarea":r=cp(n,r),i=cp(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Uf)}fp(t,i);var o;t=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(cc.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(c,t)),t=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(cc.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&It("scroll",n),s||a===l||(s=[])):(s=s||[]).push(c,l))}t&&(s=s||[]).push("style",t);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};R1=function(n,e,t,i){t!==i&&(e.flags|=4)};function yl(n,e){if(!Ot)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Cn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function rT(n,e,t){var i=e.pendingProps;switch(Dg(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Cn(e),null;case 1:return ri(e.type)&&Ff(),Cn(e),null;case 3:return i=e.stateNode,Ya(),Ut(ii),Ut(Fn),Bg(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(uu(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,lr!==null&&(Xp(lr),lr=null))),kp(n,e),Cn(e),null;case 5:zg(e);var r=vo(Sc.current);if(t=e.type,n!==null&&e.stateNode!=null)b1(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ae(166));return Cn(e),null}if(n=vo(br.current),uu(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[yr]=e,i[xc]=s,n=(e.mode&1)!==0,t){case"dialog":It("cancel",i),It("close",i);break;case"iframe":case"object":case"embed":It("load",i);break;case"video":case"audio":for(r=0;r<Ll.length;r++)It(Ll[r],i);break;case"source":It("error",i);break;case"img":case"image":case"link":It("error",i),It("load",i);break;case"details":It("toggle",i);break;case"input":J_(i,s),It("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},It("invalid",i);break;case"textarea":t0(i,s),It("invalid",i)}fp(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&cu(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&cu(i.textContent,a,n),r=["children",""+a]):cc.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&It("scroll",i)}switch(t){case"input":tu(i),e0(i,s,!0);break;case"textarea":tu(i),n0(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Uf)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=iy(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[yr]=e,n[xc]=i,C1(n,e,!1,!1),e.stateNode=n;e:{switch(o=dp(t,i),t){case"dialog":It("cancel",n),It("close",n),r=i;break;case"iframe":case"object":case"embed":It("load",n),r=i;break;case"video":case"audio":for(r=0;r<Ll.length;r++)It(Ll[r],n);r=i;break;case"source":It("error",n),r=i;break;case"img":case"image":case"link":It("error",n),It("load",n),r=i;break;case"details":It("toggle",n),r=i;break;case"input":J_(n,i),r=op(n,i),It("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=jt({},i,{value:void 0}),It("invalid",n);break;case"textarea":t0(n,i),r=cp(n,i),It("invalid",n);break;default:r=i}fp(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?oy(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&ry(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&uc(n,l):typeof l=="number"&&uc(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(cc.hasOwnProperty(s)?l!=null&&s==="onScroll"&&It("scroll",n):l!=null&&gg(n,s,l,o))}switch(t){case"input":tu(n),e0(n,i,!1);break;case"textarea":tu(n),n0(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Bs(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Ra(n,!!i.multiple,s,!1):i.defaultValue!=null&&Ra(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Uf)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Cn(e),null;case 6:if(n&&e.stateNode!=null)R1(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ae(166));if(t=vo(Sc.current),vo(br.current),uu(e)){if(i=e.stateNode,t=e.memoizedProps,i[yr]=e,(s=i.nodeValue!==t)&&(n=bi,n!==null))switch(n.tag){case 3:cu(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&cu(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[yr]=e,e.stateNode=i}return Cn(e),null;case 13:if(Ut(Vt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ot&&Ai!==null&&e.mode&1&&!(e.flags&128))Yy(),ja(),e.flags|=98560,s=!1;else if(s=uu(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(ae(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ae(317));s[yr]=e}else ja(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Cn(e),s=!1}else lr!==null&&(Xp(lr),lr=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||Vt.current&1?dn===0&&(dn=3):Qg())),e.updateQueue!==null&&(e.flags|=4),Cn(e),null);case 4:return Ya(),kp(n,e),n===null&&_c(e.stateNode.containerInfo),Cn(e),null;case 10:return Ug(e.type._context),Cn(e),null;case 17:return ri(e.type)&&Ff(),Cn(e),null;case 19:if(Ut(Vt),s=e.memoizedState,s===null)return Cn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)yl(s,!1);else{if(dn!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=Gf(n),o!==null){for(e.flags|=128,yl(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return Pt(Vt,Vt.current&1|2),e.child}n=n.sibling}s.tail!==null&&Qt()>qa&&(e.flags|=128,i=!0,yl(s,!1),e.lanes=4194304)}else{if(!i)if(n=Gf(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),yl(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ot)return Cn(e),null}else 2*Qt()-s.renderingStartTime>qa&&t!==1073741824&&(e.flags|=128,i=!0,yl(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Qt(),e.sibling=null,t=Vt.current,Pt(Vt,i?t&1|2:t&1),e):(Cn(e),null);case 22:case 23:return Zg(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?yi&1073741824&&(Cn(e),e.subtreeFlags&6&&(e.flags|=8192)):Cn(e),null;case 24:return null;case 25:return null}throw Error(ae(156,e.tag))}function sT(n,e){switch(Dg(e),e.tag){case 1:return ri(e.type)&&Ff(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Ya(),Ut(ii),Ut(Fn),Bg(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return zg(e),null;case 13:if(Ut(Vt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(ae(340));ja()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return Ut(Vt),null;case 4:return Ya(),null;case 10:return Ug(e.type._context),null;case 22:case 23:return Zg(),null;case 24:return null;default:return null}}var hu=!1,Nn=!1,oT=typeof WeakSet=="function"?WeakSet:Set,we=null;function Ea(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Yt(n,e,i)}else t.current=null}function zp(n,e,t){try{t()}catch(i){Yt(n,e,i)}}var j0=!1;function aT(n,e){if(Mp=Nf,n=Iy(),Rg(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=n,f=null;t:for(;;){for(var p;d!==t||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===n)break t;if(f===t&&++c===r&&(a=o),f===s&&++u===i&&(l=o),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Ep={focusedElem:n,selectionRange:t},Nf=!1,we=e;we!==null;)if(e=we,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,we=n;else for(;we!==null;){e=we;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var _=v.memoizedProps,m=v.memoizedState,h=e.stateNode,g=h.getSnapshotBeforeUpdate(e.elementType===e.type?_:or(e.type,_),m);h.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ae(163))}}catch(y){Yt(e,e.return,y)}if(n=e.sibling,n!==null){n.return=e.return,we=n;break}we=e.return}return v=j0,j0=!1,v}function $l(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&zp(e,t,s)}r=r.next}while(r!==i)}}function Sd(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Bp(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function P1(n){var e=n.alternate;e!==null&&(n.alternate=null,P1(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[yr],delete e[xc],delete e[Ap],delete e[Gw],delete e[Ww])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function D1(n){return n.tag===5||n.tag===3||n.tag===4}function X0(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||D1(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Vp(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Uf));else if(i!==4&&(n=n.child,n!==null))for(Vp(n,e,t),n=n.sibling;n!==null;)Vp(n,e,t),n=n.sibling}function Hp(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Hp(n,e,t),n=n.sibling;n!==null;)Hp(n,e,t),n=n.sibling}var Sn=null,ar=!1;function as(n,e,t){for(t=t.child;t!==null;)N1(n,e,t),t=t.sibling}function N1(n,e,t){if(Cr&&typeof Cr.onCommitFiberUnmount=="function")try{Cr.onCommitFiberUnmount(hd,t)}catch{}switch(t.tag){case 5:Nn||Ea(t,e);case 6:var i=Sn,r=ar;Sn=null,as(n,e,t),Sn=i,ar=r,Sn!==null&&(ar?(n=Sn,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Sn.removeChild(t.stateNode));break;case 18:Sn!==null&&(ar?(n=Sn,t=t.stateNode,n.nodeType===8?Jd(n.parentNode,t):n.nodeType===1&&Jd(n,t),pc(n)):Jd(Sn,t.stateNode));break;case 4:i=Sn,r=ar,Sn=t.stateNode.containerInfo,ar=!0,as(n,e,t),Sn=i,ar=r;break;case 0:case 11:case 14:case 15:if(!Nn&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&zp(t,e,o),r=r.next}while(r!==i)}as(n,e,t);break;case 1:if(!Nn&&(Ea(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Yt(t,e,a)}as(n,e,t);break;case 21:as(n,e,t);break;case 22:t.mode&1?(Nn=(i=Nn)||t.memoizedState!==null,as(n,e,t),Nn=i):as(n,e,t);break;default:as(n,e,t)}}function Y0(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new oT),e.forEach(function(i){var r=gT.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function tr(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Sn=a.stateNode,ar=!1;break e;case 3:Sn=a.stateNode.containerInfo,ar=!0;break e;case 4:Sn=a.stateNode.containerInfo,ar=!0;break e}a=a.return}if(Sn===null)throw Error(ae(160));N1(s,o,r),Sn=null,ar=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Yt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)L1(e,n),e=e.sibling}function L1(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(tr(e,n),mr(n),i&4){try{$l(3,n,n.return),Sd(3,n)}catch(_){Yt(n,n.return,_)}try{$l(5,n,n.return)}catch(_){Yt(n,n.return,_)}}break;case 1:tr(e,n),mr(n),i&512&&t!==null&&Ea(t,t.return);break;case 5:if(tr(e,n),mr(n),i&512&&t!==null&&Ea(t,t.return),n.flags&32){var r=n.stateNode;try{uc(r,"")}catch(_){Yt(n,n.return,_)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&ty(r,s),dp(a,o);var c=dp(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?oy(r,d):u==="dangerouslySetInnerHTML"?ry(r,d):u==="children"?uc(r,d):gg(r,u,d,c)}switch(a){case"input":ap(r,s);break;case"textarea":ny(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ra(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?Ra(r,!!s.multiple,s.defaultValue,!0):Ra(r,!!s.multiple,s.multiple?[]:"",!1))}r[xc]=s}catch(_){Yt(n,n.return,_)}}break;case 6:if(tr(e,n),mr(n),i&4){if(n.stateNode===null)throw Error(ae(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(_){Yt(n,n.return,_)}}break;case 3:if(tr(e,n),mr(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{pc(e.containerInfo)}catch(_){Yt(n,n.return,_)}break;case 4:tr(e,n),mr(n);break;case 13:tr(e,n),mr(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(qg=Qt())),i&4&&Y0(n);break;case 22:if(u=t!==null&&t.memoizedState!==null,n.mode&1?(Nn=(c=Nn)||u,tr(e,n),Nn=c):tr(e,n),mr(n),i&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!u&&n.mode&1)for(we=n,u=n.child;u!==null;){for(d=we=u;we!==null;){switch(f=we,p=f.child,f.tag){case 0:case 11:case 14:case 15:$l(4,f,f.return);break;case 1:Ea(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){i=f,t=f.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(_){Yt(i,t,_)}}break;case 5:Ea(f,f.return);break;case 22:if(f.memoizedState!==null){q0(d);continue}}p!==null?(p.return=f,we=p):q0(d)}u=u.sibling}e:for(u=null,d=n;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=sy("display",o))}catch(_){Yt(n,n.return,_)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(_){Yt(n,n.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===n)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break e;for(;d.sibling===null;){if(d.return===null||d.return===n)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:tr(e,n),mr(n),i&4&&Y0(n);break;case 21:break;default:tr(e,n),mr(n)}}function mr(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(D1(t)){var i=t;break e}t=t.return}throw Error(ae(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(uc(r,""),i.flags&=-33);var s=X0(n);Hp(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=X0(n);Vp(n,a,o);break;default:throw Error(ae(161))}}catch(l){Yt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function lT(n,e,t){we=n,I1(n)}function I1(n,e,t){for(var i=(n.mode&1)!==0;we!==null;){var r=we,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||hu;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Nn;a=hu;var c=Nn;if(hu=o,(Nn=l)&&!c)for(we=r;we!==null;)o=we,l=o.child,o.tag===22&&o.memoizedState!==null?K0(r):l!==null?(l.return=o,we=l):K0(r);for(;s!==null;)we=s,I1(s),s=s.sibling;we=r,hu=a,Nn=c}$0(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,we=s):$0(n)}}function $0(n){for(;we!==null;){var e=we;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Nn||Sd(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Nn)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:or(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&N0(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}N0(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&pc(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ae(163))}Nn||e.flags&512&&Bp(e)}catch(f){Yt(e,e.return,f)}}if(e===n){we=null;break}if(t=e.sibling,t!==null){t.return=e.return,we=t;break}we=e.return}}function q0(n){for(;we!==null;){var e=we;if(e===n){we=null;break}var t=e.sibling;if(t!==null){t.return=e.return,we=t;break}we=e.return}}function K0(n){for(;we!==null;){var e=we;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Sd(4,e)}catch(l){Yt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Yt(e,r,l)}}var s=e.return;try{Bp(e)}catch(l){Yt(e,s,l)}break;case 5:var o=e.return;try{Bp(e)}catch(l){Yt(e,o,l)}}}catch(l){Yt(e,e.return,l)}if(e===n){we=null;break}var a=e.sibling;if(a!==null){a.return=e.return,we=a;break}we=e.return}}var cT=Math.ceil,Xf=os.ReactCurrentDispatcher,Yg=os.ReactCurrentOwner,Ki=os.ReactCurrentBatchConfig,dt=0,xn=null,on=null,En=0,yi=0,wa=$s(0),dn=0,Tc=null,Uo=0,Md=0,$g=0,ql=null,ei=null,qg=0,qa=1/0,zr=null,Yf=!1,Gp=null,Ns=null,pu=!1,Ss=null,$f=0,Kl=0,Wp=null,uf=-1,ff=0;function $n(){return dt&6?Qt():uf!==-1?uf:uf=Qt()}function Ls(n){return n.mode&1?dt&2&&En!==0?En&-En:Xw.transition!==null?(ff===0&&(ff=vy()),ff):(n=Et,n!==0||(n=window.event,n=n===void 0?16:Ty(n.type)),n):1}function dr(n,e,t,i){if(50<Kl)throw Kl=0,Wp=null,Error(ae(185));Vc(n,t,i),(!(dt&2)||n!==xn)&&(n===xn&&(!(dt&2)&&(Md|=t),dn===4&&vs(n,En)),si(n,i),t===1&&dt===0&&!(e.mode&1)&&(qa=Qt()+500,vd&&qs()))}function si(n,e){var t=n.callbackNode;XE(n,e);var i=Df(n,n===xn?En:0);if(i===0)t!==null&&s0(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&s0(t),e===1)n.tag===0?jw(Z0.bind(null,n)):Wy(Z0.bind(null,n)),Vw(function(){!(dt&6)&&qs()}),t=null;else{switch(xy(i)){case 1:t=Sg;break;case 4:t=gy;break;case 16:t=Pf;break;case 536870912:t=_y;break;default:t=Pf}t=H1(t,U1.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function U1(n,e){if(uf=-1,ff=0,dt&6)throw Error(ae(327));var t=n.callbackNode;if(Ia()&&n.callbackNode!==t)return null;var i=Df(n,n===xn?En:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=qf(n,i);else{e=i;var r=dt;dt|=2;var s=O1();(xn!==n||En!==e)&&(zr=null,qa=Qt()+500,Eo(n,e));do try{dT();break}catch(a){F1(n,a)}while(!0);Ig(),Xf.current=s,dt=r,on!==null?e=0:(xn=null,En=0,e=dn)}if(e!==0){if(e===2&&(r=_p(n),r!==0&&(i=r,e=jp(n,r))),e===1)throw t=Tc,Eo(n,0),vs(n,i),si(n,Qt()),t;if(e===6)vs(n,i);else{if(r=n.current.alternate,!(i&30)&&!uT(r)&&(e=qf(n,i),e===2&&(s=_p(n),s!==0&&(i=s,e=jp(n,s))),e===1))throw t=Tc,Eo(n,0),vs(n,i),si(n,Qt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(ae(345));case 2:ao(n,ei,zr);break;case 3:if(vs(n,i),(i&130023424)===i&&(e=qg+500-Qt(),10<e)){if(Df(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){$n(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Tp(ao.bind(null,n,ei,zr),e);break}ao(n,ei,zr);break;case 4:if(vs(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-fr(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Qt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*cT(i/1960))-i,10<i){n.timeoutHandle=Tp(ao.bind(null,n,ei,zr),i);break}ao(n,ei,zr);break;case 5:ao(n,ei,zr);break;default:throw Error(ae(329))}}}return si(n,Qt()),n.callbackNode===t?U1.bind(null,n):null}function jp(n,e){var t=ql;return n.current.memoizedState.isDehydrated&&(Eo(n,e).flags|=256),n=qf(n,e),n!==2&&(e=ei,ei=t,e!==null&&Xp(e)),n}function Xp(n){ei===null?ei=n:ei.push.apply(ei,n)}function uT(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!pr(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function vs(n,e){for(e&=~$g,e&=~Md,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-fr(e),i=1<<t;n[t]=-1,e&=~i}}function Z0(n){if(dt&6)throw Error(ae(327));Ia();var e=Df(n,0);if(!(e&1))return si(n,Qt()),null;var t=qf(n,e);if(n.tag!==0&&t===2){var i=_p(n);i!==0&&(e=i,t=jp(n,i))}if(t===1)throw t=Tc,Eo(n,0),vs(n,e),si(n,Qt()),t;if(t===6)throw Error(ae(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,ao(n,ei,zr),si(n,Qt()),null}function Kg(n,e){var t=dt;dt|=1;try{return n(e)}finally{dt=t,dt===0&&(qa=Qt()+500,vd&&qs())}}function Fo(n){Ss!==null&&Ss.tag===0&&!(dt&6)&&Ia();var e=dt;dt|=1;var t=Ki.transition,i=Et;try{if(Ki.transition=null,Et=1,n)return n()}finally{Et=i,Ki.transition=t,dt=e,!(dt&6)&&qs()}}function Zg(){yi=wa.current,Ut(wa)}function Eo(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,Bw(t)),on!==null)for(t=on.return;t!==null;){var i=t;switch(Dg(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ff();break;case 3:Ya(),Ut(ii),Ut(Fn),Bg();break;case 5:zg(i);break;case 4:Ya();break;case 13:Ut(Vt);break;case 19:Ut(Vt);break;case 10:Ug(i.type._context);break;case 22:case 23:Zg()}t=t.return}if(xn=n,on=n=Is(n.current,null),En=yi=e,dn=0,Tc=null,$g=Md=Uo=0,ei=ql=null,_o!==null){for(e=0;e<_o.length;e++)if(t=_o[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}_o=null}return n}function F1(n,e){do{var t=on;try{if(Ig(),af.current=jf,Wf){for(var i=Wt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Wf=!1}if(Io=0,vn=un=Wt=null,Yl=!1,Mc=0,Yg.current=null,t===null||t.return===null){dn=1,Tc=e,on=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=En,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=k0(o);if(p!==null){p.flags&=-257,z0(p,o,a,s,e),p.mode&1&&O0(s,c,e),e=p,l=c;var v=e.updateQueue;if(v===null){var _=new Set;_.add(l),e.updateQueue=_}else v.add(l);break e}else{if(!(e&1)){O0(s,c,e),Qg();break e}l=Error(ae(426))}}else if(Ot&&a.mode&1){var m=k0(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),z0(m,o,a,s,e),Ng($a(l,a));break e}}s=l=$a(l,a),dn!==4&&(dn=2),ql===null?ql=[s]:ql.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=x1(s,l,e);D0(s,h);break e;case 1:a=l;var g=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Ns===null||!Ns.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=y1(s,a,e);D0(s,y);break e}}s=s.return}while(s!==null)}z1(t)}catch(E){e=E,on===t&&t!==null&&(on=t=t.return);continue}break}while(!0)}function O1(){var n=Xf.current;return Xf.current=jf,n===null?jf:n}function Qg(){(dn===0||dn===3||dn===2)&&(dn=4),xn===null||!(Uo&268435455)&&!(Md&268435455)||vs(xn,En)}function qf(n,e){var t=dt;dt|=2;var i=O1();(xn!==n||En!==e)&&(zr=null,Eo(n,e));do try{fT();break}catch(r){F1(n,r)}while(!0);if(Ig(),dt=t,Xf.current=i,on!==null)throw Error(ae(261));return xn=null,En=0,dn}function fT(){for(;on!==null;)k1(on)}function dT(){for(;on!==null&&!OE();)k1(on)}function k1(n){var e=V1(n.alternate,n,yi);n.memoizedProps=n.pendingProps,e===null?z1(n):on=e,Yg.current=null}function z1(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=sT(t,e),t!==null){t.flags&=32767,on=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{dn=6,on=null;return}}else if(t=rT(t,e,yi),t!==null){on=t;return}if(e=e.sibling,e!==null){on=e;return}on=e=n}while(e!==null);dn===0&&(dn=5)}function ao(n,e,t){var i=Et,r=Ki.transition;try{Ki.transition=null,Et=1,hT(n,e,t,i)}finally{Ki.transition=r,Et=i}return null}function hT(n,e,t,i){do Ia();while(Ss!==null);if(dt&6)throw Error(ae(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(ae(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(YE(n,s),n===xn&&(on=xn=null,En=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||pu||(pu=!0,H1(Pf,function(){return Ia(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Ki.transition,Ki.transition=null;var o=Et;Et=1;var a=dt;dt|=4,Yg.current=null,aT(n,t),L1(t,n),Lw(Ep),Nf=!!Mp,Ep=Mp=null,n.current=t,lT(t),kE(),dt=a,Et=o,Ki.transition=s}else n.current=t;if(pu&&(pu=!1,Ss=n,$f=r),s=n.pendingLanes,s===0&&(Ns=null),VE(t.stateNode),si(n,Qt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Yf)throw Yf=!1,n=Gp,Gp=null,n;return $f&1&&n.tag!==0&&Ia(),s=n.pendingLanes,s&1?n===Wp?Kl++:(Kl=0,Wp=n):Kl=0,qs(),null}function Ia(){if(Ss!==null){var n=xy($f),e=Ki.transition,t=Et;try{if(Ki.transition=null,Et=16>n?16:n,Ss===null)var i=!1;else{if(n=Ss,Ss=null,$f=0,dt&6)throw Error(ae(331));var r=dt;for(dt|=4,we=n.current;we!==null;){var s=we,o=s.child;if(we.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(we=c;we!==null;){var u=we;switch(u.tag){case 0:case 11:case 15:$l(8,u,s)}var d=u.child;if(d!==null)d.return=u,we=d;else for(;we!==null;){u=we;var f=u.sibling,p=u.return;if(P1(u),u===c){we=null;break}if(f!==null){f.return=p,we=f;break}we=p}}}var v=s.alternate;if(v!==null){var _=v.child;if(_!==null){v.child=null;do{var m=_.sibling;_.sibling=null,_=m}while(_!==null)}}we=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,we=o;else e:for(;we!==null;){if(s=we,s.flags&2048)switch(s.tag){case 0:case 11:case 15:$l(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,we=h;break e}we=s.return}}var g=n.current;for(we=g;we!==null;){o=we;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,we=x;else e:for(o=g;we!==null;){if(a=we,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Sd(9,a)}}catch(E){Yt(a,a.return,E)}if(a===o){we=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,we=y;break e}we=a.return}}if(dt=r,qs(),Cr&&typeof Cr.onPostCommitFiberRoot=="function")try{Cr.onPostCommitFiberRoot(hd,n)}catch{}i=!0}return i}finally{Et=t,Ki.transition=e}}return!1}function Q0(n,e,t){e=$a(t,e),e=x1(n,e,1),n=Ds(n,e,1),e=$n(),n!==null&&(Vc(n,1,e),si(n,e))}function Yt(n,e,t){if(n.tag===3)Q0(n,n,t);else for(;e!==null;){if(e.tag===3){Q0(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ns===null||!Ns.has(i))){n=$a(t,n),n=y1(e,n,1),e=Ds(e,n,1),n=$n(),e!==null&&(Vc(e,1,n),si(e,n));break}}e=e.return}}function pT(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=$n(),n.pingedLanes|=n.suspendedLanes&t,xn===n&&(En&t)===t&&(dn===4||dn===3&&(En&130023424)===En&&500>Qt()-qg?Eo(n,0):$g|=t),si(n,e)}function B1(n,e){e===0&&(n.mode&1?(e=ru,ru<<=1,!(ru&130023424)&&(ru=4194304)):e=1);var t=$n();n=es(n,e),n!==null&&(Vc(n,e,t),si(n,t))}function mT(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),B1(n,t)}function gT(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(ae(314))}i!==null&&i.delete(e),B1(n,t)}var V1;V1=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||ii.current)ni=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return ni=!1,iT(n,e,t);ni=!!(n.flags&131072)}else ni=!1,Ot&&e.flags&1048576&&jy(e,zf,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;cf(n,e),n=e.pendingProps;var r=Wa(e,Fn.current);La(e,t),r=Hg(null,e,i,n,r,t);var s=Gg();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ri(i)?(s=!0,Of(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Og(e),r.updater=yd,e.stateNode=r,r._reactInternals=e,Np(e,i,n,t),e=Up(null,e,i,!0,s,t)):(e.tag=0,Ot&&s&&Pg(e),Gn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(cf(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=vT(i),n=or(i,n),r){case 0:e=Ip(null,e,i,n,t);break e;case 1:e=H0(null,e,i,n,t);break e;case 11:e=B0(null,e,i,n,t);break e;case 14:e=V0(null,e,i,or(i.type,n),t);break e}throw Error(ae(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:or(i,r),Ip(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:or(i,r),H0(n,e,i,r,t);case 3:e:{if(w1(e),n===null)throw Error(ae(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Zy(n,e),Hf(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=$a(Error(ae(423)),e),e=G0(n,e,i,t,r);break e}else if(i!==r){r=$a(Error(ae(424)),e),e=G0(n,e,i,t,r);break e}else for(Ai=Ps(e.stateNode.containerInfo.firstChild),bi=e,Ot=!0,lr=null,t=qy(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(ja(),i===r){e=ts(n,e,t);break e}Gn(n,e,i,t)}e=e.child}return e;case 5:return Qy(e),n===null&&Rp(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,wp(i,r)?o=null:s!==null&&wp(i,s)&&(e.flags|=32),E1(n,e),Gn(n,e,o,t),e.child;case 6:return n===null&&Rp(e),null;case 13:return T1(n,e,t);case 4:return kg(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Xa(e,null,i,t):Gn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:or(i,r),B0(n,e,i,r,t);case 7:return Gn(n,e,e.pendingProps,t),e.child;case 8:return Gn(n,e,e.pendingProps.children,t),e.child;case 12:return Gn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Pt(Bf,i._currentValue),i._currentValue=o,s!==null)if(pr(s.value,o)){if(s.children===r.children&&!ii.current){e=ts(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=qr(-1,t&-t),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Pp(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ae(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Pp(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Gn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,La(e,t),r=Ji(r),i=i(r),e.flags|=1,Gn(n,e,i,t),e.child;case 14:return i=e.type,r=or(i,e.pendingProps),r=or(i.type,r),V0(n,e,i,r,t);case 15:return S1(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:or(i,r),cf(n,e),e.tag=1,ri(i)?(n=!0,Of(e)):n=!1,La(e,t),v1(e,i,r),Np(e,i,r,t),Up(null,e,i,!0,n,t);case 19:return A1(n,e,t);case 22:return M1(n,e,t)}throw Error(ae(156,e.tag))};function H1(n,e){return my(n,e)}function _T(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xi(n,e,t,i){return new _T(n,e,t,i)}function Jg(n){return n=n.prototype,!(!n||!n.isReactComponent)}function vT(n){if(typeof n=="function")return Jg(n)?1:0;if(n!=null){if(n=n.$$typeof,n===vg)return 11;if(n===xg)return 14}return 2}function Is(n,e){var t=n.alternate;return t===null?(t=Xi(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function df(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")Jg(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case pa:return wo(t.children,r,s,e);case _g:o=8,r|=8;break;case np:return n=Xi(12,t,e,r|2),n.elementType=np,n.lanes=s,n;case ip:return n=Xi(13,t,e,r),n.elementType=ip,n.lanes=s,n;case rp:return n=Xi(19,t,e,r),n.elementType=rp,n.lanes=s,n;case Qx:return Ed(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Kx:o=10;break e;case Zx:o=9;break e;case vg:o=11;break e;case xg:o=14;break e;case ms:o=16,i=null;break e}throw Error(ae(130,n==null?n:typeof n,""))}return e=Xi(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function wo(n,e,t,i){return n=Xi(7,n,i,e),n.lanes=t,n}function Ed(n,e,t,i){return n=Xi(22,n,i,e),n.elementType=Qx,n.lanes=t,n.stateNode={isHidden:!1},n}function ah(n,e,t){return n=Xi(6,n,null,e),n.lanes=t,n}function lh(n,e,t){return e=Xi(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function xT(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hd(0),this.expirationTimes=Hd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hd(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function e_(n,e,t,i,r,s,o,a,l){return n=new xT(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Xi(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Og(s),n}function yT(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ha,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function G1(n){if(!n)return Vs;n=n._reactInternals;e:{if(Wo(n)!==n||n.tag!==1)throw Error(ae(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ri(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ae(171))}if(n.tag===1){var t=n.type;if(ri(t))return Gy(n,t,e)}return e}function W1(n,e,t,i,r,s,o,a,l){return n=e_(t,i,!0,n,r,s,o,a,l),n.context=G1(null),t=n.current,i=$n(),r=Ls(t),s=qr(i,r),s.callback=e??null,Ds(t,s,r),n.current.lanes=r,Vc(n,r,i),si(n,i),n}function wd(n,e,t,i){var r=e.current,s=$n(),o=Ls(r);return t=G1(t),e.context===null?e.context=t:e.pendingContext=t,e=qr(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Ds(r,e,o),n!==null&&(dr(n,r,o,s),of(n,r,o)),o}function Kf(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function J0(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function t_(n,e){J0(n,e),(n=n.alternate)&&J0(n,e)}function ST(){return null}var j1=typeof reportError=="function"?reportError:function(n){console.error(n)};function n_(n){this._internalRoot=n}Td.prototype.render=n_.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(ae(409));wd(n,e,null,null)};Td.prototype.unmount=n_.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Fo(function(){wd(null,n,null,null)}),e[Jr]=null}};function Td(n){this._internalRoot=n}Td.prototype.unstable_scheduleHydration=function(n){if(n){var e=My();n={blockedOn:null,target:n,priority:e};for(var t=0;t<_s.length&&e!==0&&e<_s[t].priority;t++);_s.splice(t,0,n),t===0&&wy(n)}};function i_(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Ad(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function ev(){}function MT(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Kf(o);s.call(c)}}var o=W1(e,i,n,0,null,!1,!1,"",ev);return n._reactRootContainer=o,n[Jr]=o.current,_c(n.nodeType===8?n.parentNode:n),Fo(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Kf(l);a.call(c)}}var l=e_(n,0,!1,null,null,!1,!1,"",ev);return n._reactRootContainer=l,n[Jr]=l.current,_c(n.nodeType===8?n.parentNode:n),Fo(function(){wd(e,l,t,i)}),l}function Cd(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Kf(o);a.call(l)}}wd(e,o,n,r)}else o=MT(t,e,n,r,i);return Kf(o)}yy=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Nl(e.pendingLanes);t!==0&&(Mg(e,t|1),si(e,Qt()),!(dt&6)&&(qa=Qt()+500,qs()))}break;case 13:Fo(function(){var i=es(n,1);if(i!==null){var r=$n();dr(i,n,1,r)}}),t_(n,1)}};Eg=function(n){if(n.tag===13){var e=es(n,134217728);if(e!==null){var t=$n();dr(e,n,134217728,t)}t_(n,134217728)}};Sy=function(n){if(n.tag===13){var e=Ls(n),t=es(n,e);if(t!==null){var i=$n();dr(t,n,e,i)}t_(n,e)}};My=function(){return Et};Ey=function(n,e){var t=Et;try{return Et=n,e()}finally{Et=t}};pp=function(n,e,t){switch(e){case"input":if(ap(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=_d(i);if(!r)throw Error(ae(90));ey(i),ap(i,r)}}}break;case"textarea":ny(n,t);break;case"select":e=t.value,e!=null&&Ra(n,!!t.multiple,e,!1)}};cy=Kg;uy=Fo;var ET={usingClientEntryPoint:!1,Events:[Gc,va,_d,ay,ly,Kg]},Sl={findFiberByHostInstance:go,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},wT={bundleType:Sl.bundleType,version:Sl.version,rendererPackageName:Sl.rendererPackageName,rendererConfig:Sl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:os.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=hy(n),n===null?null:n.stateNode},findFiberByHostInstance:Sl.findFiberByHostInstance||ST,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mu.isDisabled&&mu.supportsFiber)try{hd=mu.inject(wT),Cr=mu}catch{}}Li.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ET;Li.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!i_(e))throw Error(ae(200));return yT(n,e,null,t)};Li.createRoot=function(n,e){if(!i_(n))throw Error(ae(299));var t=!1,i="",r=j1;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=e_(n,1,!1,null,null,t,!1,i,r),n[Jr]=e.current,_c(n.nodeType===8?n.parentNode:n),new n_(e)};Li.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(ae(188)):(n=Object.keys(n).join(","),Error(ae(268,n)));return n=hy(e),n=n===null?null:n.stateNode,n};Li.flushSync=function(n){return Fo(n)};Li.hydrate=function(n,e,t){if(!Ad(e))throw Error(ae(200));return Cd(null,n,e,!0,t)};Li.hydrateRoot=function(n,e,t){if(!i_(n))throw Error(ae(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=j1;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=W1(e,null,n,1,t??null,r,!1,s,o),n[Jr]=e.current,_c(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Td(e)};Li.render=function(n,e,t){if(!Ad(e))throw Error(ae(200));return Cd(null,n,e,!1,t)};Li.unmountComponentAtNode=function(n){if(!Ad(n))throw Error(ae(40));return n._reactRootContainer?(Fo(function(){Cd(null,null,n,!1,function(){n._reactRootContainer=null,n[Jr]=null})}),!0):!1};Li.unstable_batchedUpdates=Kg;Li.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Ad(t))throw Error(ae(200));if(n==null||n._reactInternals===void 0)throw Error(ae(38));return Cd(n,e,t,!1,i)};Li.version="18.3.1-next-f1338f8080-20240426";function X1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(X1)}catch(n){console.error(n)}}X1(),Xx.exports=Li;var TT=Xx.exports,Y1,tv=TT;Y1=tv.createRoot,tv.hydrateRoot;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var AT={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CT=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),xt=(n,e)=>{const t=qe.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:a="",children:l,...c},u)=>qe.createElement("svg",{ref:u,...AT,width:r,height:r,stroke:i,strokeWidth:o?Number(s)*24/Number(r):s,className:["lucide",`lucide-${CT(n)}`,a].join(" "),...c},[...e.map(([d,f])=>qe.createElement(d,f)),...Array.isArray(l)?l:[l]]));return t.displayName=`${n}`,t};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bT=xt("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r_=xt("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RT=xt("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PT=xt("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DT=xt("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NT=xt("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LT=xt("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $1=xt("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s_=xt("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IT=xt("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q1=xt("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K1=xt("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z1=xt("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UT=xt("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FT=xt("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OT=xt("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kT=xt("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q1=xt("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zT=xt("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BT=xt("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv=xt("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VT=xt("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HT=xt("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GT=xt("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WT=xt("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jT=xt("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XT=xt("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J1=xt("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YT=xt("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o_=xt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $T=xt("Youtube",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]]),qT=()=>{const[n,e]=qe.useState(!1),[t,i]=qe.useState(!1);qe.useEffect(()=>{const o=()=>{i(window.scrollY>50)};return window.addEventListener("scroll",o),()=>window.removeEventListener("scroll",o)},[]);const r=[{href:"#home",label:"Home"},{href:"#about",label:"About"},{href:"#services",label:"Services"},{href:"#team",label:"Team"},{href:"#projects",label:"Projects"},{href:"#contact",label:"Contact"}],s=()=>{const o="918590319003",a=encodeURIComponent("Hi, I want to start a project with Nextify!"),l=`https://wa.me/${o}?text=${a}`;window.open(l,"_blank")};return C.jsx("nav",{className:`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${t?"glass py-4":"py-6"}`,children:C.jsxs("div",{className:"container mx-auto px-6",children:[C.jsxs("div",{className:"flex items-center justify-between",children:[C.jsxs("a",{href:"#home",className:"flex items-center space-x-2 group",children:[C.jsx("div",{className:"relative",children:C.jsx("img",{src:"/Nextify/logo.png",alt:"Nextify Logo",className:"w-10 h-10 object-contain rounded-full"})}),C.jsx("span",{className:"text-2xl font-bold gradient-text font-space-grotesk",children:"Nextify"})]}),C.jsxs("div",{className:"hidden md:flex items-center space-x-8",children:[r.map((o,a)=>C.jsxs("a",{href:o.href,className:"relative text-white hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-cyan-400 hover:bg-clip-text transition-all duration-300 group",children:[o.label,C.jsx("span",{className:"absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300"})]},a)),C.jsx("button",{onClick:s,className:"btn-primary hover-glow",children:"Get Started"})]}),C.jsx("button",{onClick:()=>e(!n),className:"md:hidden p-2 text-white hover:text-cyan-400 transition-colors duration-300",children:C.jsxs("div",{className:"relative w-6 h-6",children:[C.jsx(UT,{className:`absolute inset-0 transition-all duration-300 ${n?"rotate-90 opacity-0":"rotate-0 opacity-100"}`}),C.jsx(o_,{className:`absolute inset-0 transition-all duration-300 ${n?"rotate-0 opacity-100":"rotate-90 opacity-0"}`})]})})]}),C.jsx("div",{className:`md:hidden transition-all duration-500 overflow-hidden ${n?"max-h-96 opacity-100 mt-6":"max-h-0 opacity-0"}`,children:C.jsxs("div",{className:"glass-card p-6 space-y-4",children:[r.map((o,a)=>C.jsx("a",{href:o.href,onClick:()=>e(!1),className:"block text-white hover:text-cyan-400 transition-colors duration-300 text-lg",children:o.label},a)),C.jsx("button",{onClick:s,className:"btn-primary w-full mt-4",children:"Get Started"})]})})]})})};function Br(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function eS(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ri={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ka={duration:.5,overwrite:!1,delay:0},a_,wn,kt,Yi=1e8,bt=1/Yi,Yp=Math.PI*2,KT=Yp/4,ZT=0,tS=Math.sqrt,QT=Math.cos,JT=Math.sin,yn=function(e){return typeof e=="string"},$t=function(e){return typeof e=="function"},ns=function(e){return typeof e=="number"},l_=function(e){return typeof e>"u"},Dr=function(e){return typeof e=="object"},oi=function(e){return e!==!1},c_=function(){return typeof window<"u"},gu=function(e){return $t(e)||yn(e)},nS=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Un=Array.isArray,$p=/(?:-?\.?\d|\.)+/gi,iS=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ta=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ch=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,rS=/[+-]=-?[.\d]+/,sS=/[^,'"\[\]\s]+/gi,eA=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ht,_r,qp,u_,Di={},Zf={},oS,aS=function(e){return(Zf=Za(e,Di))&&hi},f_=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ac=function(e,t){return!t&&console.warn(e)},lS=function(e,t){return e&&(Di[e]=t)&&Zf&&(Zf[e]=t)||Di},Cc=function(){return 0},tA={suppressEvents:!0,isStart:!0,kill:!1},hf={suppressEvents:!0,kill:!1},nA={suppressEvents:!0},d_={},Us=[],Kp={},cS,Mi={},uh={},iv=30,pf=[],h_="",p_=function(e){var t=e[0],i,r;if(Dr(t)||$t(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=pf.length;r--&&!pf[r].targetTest(t););i=pf[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new LS(e[r],i)))||e.splice(r,1);return e},To=function(e){return e._gsap||p_($i(e))[0]._gsap},uS=function(e,t,i){return(i=e[t])&&$t(i)?e[t]():l_(i)&&e.getAttribute&&e.getAttribute(t)||i},ai=function(e,t){return(e=e.split(",")).forEach(t)||e},Zt=function(e){return Math.round(e*1e5)/1e5||0},sn=function(e){return Math.round(e*1e7)/1e7||0},Ua=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},iA=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},Qf=function(){var e=Us.length,t=Us.slice(0),i,r;for(Kp={},Us.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},m_=function(e){return!!(e._initted||e._startAt||e.add)},fS=function(e,t,i,r){Us.length&&!wn&&Qf(),e.render(t,i,!!(wn&&t<0&&m_(e))),Us.length&&!wn&&Qf()},dS=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(sS).length<2?t:yn(e)?e.trim():e},hS=function(e){return e},Ni=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},rA=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},Za=function(e,t){for(var i in t)e[i]=t[i];return e},rv=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Dr(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},Jf=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},Zl=function(e){var t=e.parent||Ht,i=e.keyframes?rA(Un(e.keyframes)):Ni;if(oi(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},sA=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},pS=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},bd=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Hs=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ao=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},oA=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Zp=function(e,t,i,r){return e._startAt&&(wn?e._startAt.revert(hf):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},aA=function n(e){return!e||e._ts&&n(e.parent)},sv=function(e){return e._repeat?Qa(e._tTime,e=e.duration()+e._rDelay)*e:0},Qa=function(e,t){var i=Math.floor(e=sn(e/t));return e&&i===e?i-1:i},ed=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Rd=function(e){return e._end=sn(e._start+(e._tDur/Math.abs(e._ts||e._rts||bt)||0))},Pd=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=sn(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Rd(e),i._dirty||Ao(i,e)),e},mS=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=ed(e.rawTime(),t),(!t._dur||jc(0,t.totalDuration(),i)-t._tTime>bt)&&t.render(i,!0)),Ao(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-bt}},Sr=function(e,t,i,r){return t.parent&&Hs(t),t._start=sn((ns(i)?i:i||e!==Ht?zi(e,i,t):e._time)+t._delay),t._end=sn(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),pS(e,t,"_first","_last",e._sort?"_start":0),Qp(t)||(e._recent=t),r||mS(e,t),e._ts<0&&Pd(e,e._tTime),e},gS=function(e,t){return(Di.ScrollTrigger||f_("scrollTrigger",t))&&Di.ScrollTrigger.create(t,e)},_S=function(e,t,i,r,s){if(__(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!wn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&cS!==wi.frame)return Us.push(e),e._lazy=[s,r],1},lA=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},Qp=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},cA=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&lA(e)&&!(!e._initted&&Qp(e))||(e._ts<0||e._dp._ts<0)&&!Qp(e))?0:1,a=e._rDelay,l=0,c,u,d;if(a&&e._repeat&&(l=jc(0,e._tDur,t),u=Qa(l,a),e._yoyo&&u&1&&(o=1-o),u!==Qa(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||wn||r||e._zTime===bt||!t&&e._zTime){if(!e._initted&&_S(e,t,r,i,l))return;for(d=e._zTime,e._zTime=t||(i?bt:0),i||(i=t&&!d),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Zp(e,t,i,!0),e._onUpdate&&!i&&Ci(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Ci(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Hs(e,1),!i&&!wn&&(Ci(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},uA=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Ja=function(e,t,i,r){var s=e._repeat,o=sn(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:sn(o*(s+1)+e._rDelay*s):o,a>0&&!r&&Pd(e,e._tTime=e._tDur*a),e.parent&&Rd(e),i||Ao(e.parent,e),e},ov=function(e){return e instanceof Xn?Ao(e):Ja(e,e._dur)},fA={_start:0,endTime:Cc,totalDuration:Cc},zi=function n(e,t,i){var r=e.labels,s=e._recent||fA,o=e.duration()>=Yi?s.endTime(!1):e._dur,a,l,c;return yn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&i&&(l=l/100*(Un(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},Ql=function(e,t,i){var r=ns(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=oi(l.vars.inherit)&&l.parent;o.immediateRender=oi(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new rn(t[0],o,t[s+1])},Ks=function(e,t){return e||e===0?t(e):t},jc=function(e,t,i){return i<e?e:i>t?t:i},Ln=function(e,t){return!yn(e)||!(t=eA.exec(e))?"":t[1]},dA=function(e,t,i){return Ks(i,function(r){return jc(e,t,r)})},Jp=[].slice,vS=function(e,t){return e&&Dr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Dr(e[0]))&&!e.nodeType&&e!==_r},hA=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return yn(r)&&!t||vS(r,1)?(s=i).push.apply(s,$i(r)):i.push(r)})||i},$i=function(e,t,i){return kt&&!t&&kt.selector?kt.selector(e):yn(e)&&!i&&(qp||!el())?Jp.call((t||u_).querySelectorAll(e),0):Un(e)?hA(e,i):vS(e)?Jp.call(e,0):e?[e]:[]},em=function(e){return e=$i(e)[0]||Ac("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return $i(t,i.querySelectorAll?i:i===e?Ac("Invalid scope")||u_.createElement("div"):e)}},xS=function(e){return e.sort(function(){return .5-Math.random()})},yS=function(e){if($t(e))return e;var t=Dr(e)?e:{each:e},i=Co(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,u=r,d=r;return yn(r)?u=d={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],d=r[1]),function(f,p,v){var _=(v||t).length,m=o[_],h,g,x,y,E,A,w,R,M;if(!m){if(M=t.grid==="auto"?0:(t.grid||[1,Yi])[1],!M){for(w=-Yi;w<(w=v[M++].getBoundingClientRect().left)&&M<_;);M<_&&M--}for(m=o[_]=[],h=l?Math.min(M,_)*u-.5:r%M,g=M===Yi?0:l?_*d/M-.5:r/M|0,w=0,R=Yi,A=0;A<_;A++)x=A%M-h,y=g-(A/M|0),m[A]=E=c?Math.abs(c==="y"?y:x):tS(x*x+y*y),E>w&&(w=E),E<R&&(R=E);r==="random"&&xS(m),m.max=w-R,m.min=R,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(M>_?_-1:c?c==="y"?_/M:M:Math.max(M,_/M))||0)*(r==="edges"?-1:1),m.b=_<0?s-_:s,m.u=Ln(t.amount||t.each)||0,i=i&&_<0?PS(i):i}return _=(m[f]-m.min)/m.max||0,sn(m.b+(i?i(_):_)*m.v)+m.u}},tm=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=sn(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(ns(i)?0:Ln(i))}},SS=function(e,t){var i=Un(e),r,s;return!i&&Dr(e)&&(r=i=e.radius||Yi,e.values?(e=$i(e.values),(s=!ns(e[0]))&&(r*=r)):e=tm(e.increment)),Ks(t,i?$t(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Yi,u=0,d=e.length,f,p;d--;)s?(f=e[d].x-a,p=e[d].y-l,f=f*f+p*p):f=Math.abs(e[d]-a),f<c&&(c=f,u=d);return u=!r||c<=r?e[u]:o,s||u===o||ns(o)?u:u+Ln(o)}:tm(e))},MS=function(e,t,i,r){return Ks(Un(e)?!t:i===!0?!!(i=0):!r,function(){return Un(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},pA=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},mA=function(e,t){return function(i){return e(parseFloat(i))+(t||Ln(i))}},gA=function(e,t,i){return wS(e,t,0,1,i)},ES=function(e,t,i){return Ks(i,function(r){return e[~~t(r)]})},_A=function n(e,t,i){var r=t-e;return Un(e)?ES(e,n(0,e.length),t):Ks(i,function(s){return(r+(s-e)%r)%r+e})},vA=function n(e,t,i){var r=t-e,s=r*2;return Un(e)?ES(e,n(0,e.length-1),t):Ks(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},bc=function(e){for(var t=0,i="",r,s,o,a;~(r=e.indexOf("random(",t));)o=e.indexOf(")",r),a=e.charAt(r+7)==="[",s=e.substr(r+7,o-r-7).match(a?sS:$p),i+=e.substr(t,r-t)+MS(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return i+e.substr(t,e.length-t)},wS=function(e,t,i,r,s){var o=t-e,a=r-i;return Ks(s,function(l){return i+((l-e)/o*a||0)})},xA=function n(e,t,i,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var o=yn(e),a={},l,c,u,d,f;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(Un(e)&&!Un(t)){for(u=[],d=e.length,f=d-2,c=1;c<d;c++)u.push(n(e[c-1],e[c]));d--,s=function(v){v*=d;var _=Math.min(f,~~v);return u[_](v-_)},i=t}else r||(e=Za(Un(e)?[]:{},e));if(!u){for(l in t)g_.call(a,e,l,"get",t[l]);s=function(v){return y_(v,a)||(o?e.p:e)}}}return Ks(i,s)},av=function(e,t,i){var r=e.labels,s=Yi,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Ci=function(e,t,i){var r=e.vars,s=r[t],o=kt,a=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,i&&Us.length&&Qf(),a&&(kt=a),u=l?s.apply(c,l):s.call(c),kt=o,u},Il=function(e){return Hs(e),e.scrollTrigger&&e.scrollTrigger.kill(!!wn),e.progress()<1&&Ci(e,"onInterrupt"),e},Aa,TS=[],AS=function(e){if(e)if(e=!e.name&&e.default||e,c_()||e.headless){var t=e.name,i=$t(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:Cc,render:y_,add:g_,kill:UA,modifier:IA,rawVars:0},o={targetTest:0,get:0,getSetter:x_,aliases:{},register:0};if(el(),e!==r){if(Mi[t])return;Ni(r,Ni(Jf(e,s),o)),Za(r.prototype,Za(s,Jf(e,o))),Mi[r.prop=t]=r,e.targetTest&&(pf.push(r),d_[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}lS(t,r),e.register&&e.register(hi,r,li)}else TS.push(e)},Ct=255,Ul={aqua:[0,Ct,Ct],lime:[0,Ct,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ct],navy:[0,0,128],white:[Ct,Ct,Ct],olive:[128,128,0],yellow:[Ct,Ct,0],orange:[Ct,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ct,0,0],pink:[Ct,192,203],cyan:[0,Ct,Ct],transparent:[Ct,Ct,Ct,0]},fh=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*Ct+.5|0},CS=function(e,t,i){var r=e?ns(e)?[e>>16,e>>8&Ct,e&Ct]:0:Ul.black,s,o,a,l,c,u,d,f,p,v;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ul[e])r=Ul[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Ct,r&Ct,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Ct,e&Ct]}else if(e.substr(0,3)==="hsl"){if(r=v=e.match($p),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=fh(l+1/3,s,o),r[1]=fh(l,s,o),r[2]=fh(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(iS),i&&r.length<4&&(r[3]=1),r}else r=e.match($p)||Ul.transparent;r=r.map(Number)}return t&&!v&&(s=r[0]/Ct,o=r[1]/Ct,a=r[2]/Ct,d=Math.max(s,o,a),f=Math.min(s,o,a),u=(d+f)/2,d===f?l=c=0:(p=d-f,c=u>.5?p/(2-d-f):p/(d+f),l=d===s?(o-a)/p+(o<a?6:0):d===o?(a-s)/p+2:(s-o)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),i&&r.length<4&&(r[3]=1),r},bS=function(e){var t=[],i=[],r=-1;return e.split(Fs).forEach(function(s){var o=s.match(Ta)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},lv=function(e,t,i){var r="",s=(e+r).match(Fs),o=t?"hsla(":"rgba(",a=0,l,c,u,d;if(!s)return e;if(s=s.map(function(f){return(f=CS(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(u=bS(e),l=i.c,l.join(r)!==u.c.join(r)))for(c=e.replace(Fs,"1").split(Ta),d=c.length-1;a<d;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:i).shift());if(!c)for(c=e.split(Fs),d=c.length-1;a<d;a++)r+=c[a]+s[a];return r+c[d]},Fs=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ul)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),yA=/hsl[a]?\(/,RS=function(e){var t=e.join(" "),i;if(Fs.lastIndex=0,Fs.test(t))return i=yA.test(t),e[1]=lv(e[1],i),e[0]=lv(e[0],i,bS(e[1])),!0},Rc,wi=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,c,u,d,f,p,v=function _(m){var h=n()-r,g=m===!0,x,y,E,A;if((h>e||h<0)&&(i+=h-t),r+=h,E=r-i,x=E-o,(x>0||g)&&(A=++d.frame,f=E-d.time*1e3,d.time=E=E/1e3,o+=x+(x>=s?4:s-x),y=1),g||(l=c(_)),y)for(p=0;p<a.length;p++)a[p](E,f,A,m)};return d={time:0,frame:0,tick:function(){v(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){oS&&(!qp&&c_()&&(_r=qp=window,u_=_r.document||{},Di.gsap=hi,(_r.gsapVersions||(_r.gsapVersions=[])).push(hi.version),aS(Zf||_r.GreenSockGlobals||!_r.gsap&&_r||{}),TS.forEach(AS)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(m){return setTimeout(m,o-d.time*1e3+1|0)},Rc=1,v(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Rc=0,c=Cc},lagSmoothing:function(m,h){e=m||1/0,t=Math.min(h||33,e)},fps:function(m){s=1e3/(m||240),o=d.time*1e3+s},add:function(m,h,g){var x=h?function(y,E,A,w){m(y,E,A,w),d.remove(x)}:m;return d.remove(m),a[g?"unshift":"push"](x),el(),x},remove:function(m,h){~(h=a.indexOf(m))&&a.splice(h,1)&&p>=h&&p--},_listeners:a},d}(),el=function(){return!Rc&&wi.wake()},ft={},SA=/^[\d.\-M][\d.\-,\s]/,MA=/["']/g,EA=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,c;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(MA,"").trim():+c,r=l.substr(a+1).trim();return t},wA=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},TA=function(e){var t=(e+"").split("("),i=ft[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[EA(t[1])]:wA(e).split(",").map(dS)):ft._CE&&SA.test(e)?ft._CE("",e):i},PS=function(e){return function(t){return 1-e(1-t)}},DS=function n(e,t){for(var i=e._first,r;i;)i instanceof Xn?n(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?n(i.timeline,t):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=t)),i=i._next},Co=function(e,t){return e&&($t(e)?e:ft[e]||TA(e))||t},jo=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return ai(e,function(a){ft[a]=Di[a]=s,ft[o=a.toLowerCase()]=i;for(var l in s)ft[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ft[a+"."+l]=s[l]}),s},NS=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},dh=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/Yp*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*JT((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:NS(a);return s=Yp/s,l.config=function(c,u){return n(e,c,u)},l},hh=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:NS(i);return r.config=function(s){return n(e,s)},r};ai("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;jo(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});ft.Linear.easeNone=ft.none=ft.Linear.easeIn;jo("Elastic",dh("in"),dh("out"),dh());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};jo("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);jo("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});jo("Circ",function(n){return-(tS(1-n*n)-1)});jo("Sine",function(n){return n===1?1:-QT(n*KT)+1});jo("Back",hh("in"),hh("out"),hh());ft.SteppedEase=ft.steps=Di.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-bt;return function(a){return((r*jc(0,o,a)|0)+s)*i}}};Ka.ease=ft["quad.out"];ai("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return h_+=n+","+n+"Params,"});var LS=function(e,t){this.id=ZT++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:uS,this.set=t?t.getSetter:x_},Pc=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ja(this,+t.duration,1,1),this.data=t.data,kt&&(this._ctx=kt,kt.data.push(this)),Rc||wi.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Ja(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(el(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Pd(this,i),!s._dp||s.parent||mS(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Sr(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===bt||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),fS(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+sv(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+sv(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Qa(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-bt?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?ed(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-bt?0:this._rts,this.totalTime(jc(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),Rd(this),oA(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(el(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==bt&&(this._tTime-=bt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Sr(r,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(oi(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ed(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=nA);var r=wn;return wn=i,m_(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),wn=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,ov(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,ov(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(zi(this,i),oi(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,oi(r)),this._dur||(this._zTime=-bt),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-bt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-bt,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-bt)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this;return new Promise(function(s){var o=$t(i)?i:hS,a=function(){var c=r.then;r.then=null,$t(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=c),s(o),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},e.kill=function(){Il(this)},n}();Ni(Pc.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-bt,_prom:0,_ps:!1,_rts:1});var Xn=function(n){eS(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=oi(i.sortChildren),Ht&&Sr(i.parent||Ht,Br(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&gS(Br(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return Ql(0,arguments,this),this},t.from=function(r,s,o){return Ql(1,arguments,this),this},t.fromTo=function(r,s,o,a){return Ql(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,Zl(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new rn(r,s,zi(this,o),1),this},t.call=function(r,s,o){return Sr(this,rn.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new rn(r,o,zi(this,l)),this},t.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,Zl(o).immediateRender=oi(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},t.staggerFromTo=function(r,s,o,a,l,c,u,d){return a.startAt=o,Zl(a).immediateRender=oi(a.immediateRender),this.staggerTo(r,s,a,l,c,u,d)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:sn(r),d=this._zTime<0!=r<0&&(this._initted||!c),f,p,v,_,m,h,g,x,y,E,A,w;if(this!==Ht&&u>l&&r>=0&&(u=l),u!==this._tTime||o||d){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),f=u,y=this._start,x=this._ts,h=!x,d&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(A=this._yoyo,m=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(f=sn(u%m),u===l?(_=this._repeat,f=c):(E=sn(u/m),_=~~E,_&&_===E&&(f=c,_--),f>c&&(f=c)),E=Qa(this._tTime,m),!a&&this._tTime&&E!==_&&this._tTime-E*m-this._dur<=0&&(E=_),A&&_&1&&(f=c-f,w=1),_!==E&&!this._lock){var R=A&&E&1,M=R===(A&&_&1);if(_<E&&(R=!R),a=R?0:u%c?c:u,this._lock=1,this.render(a||(w?0:sn(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Ci(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1),a&&a!==this._time||h!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,a=R?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!h)return this;DS(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(g=uA(this,sn(a),sn(f)),g&&(u-=f-(f=g._start))),this._tTime=u,this._time=f,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&u&&!s&&!E&&(Ci(this,"onStart"),this._tTime!==u))return this;if(f>=a&&r>=0)for(p=this._first;p;){if(v=p._next,(p._act||f>=p._start)&&p._ts&&g!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(f-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(f-p._start)*p._ts,s,o),f!==this._time||!this._ts&&!h){g=0,v&&(u+=this._zTime=-bt);break}}p=v}else{p=this._last;for(var S=r<0?r:f;p;){if(v=p._prev,(p._act||S<=p._end)&&p._ts&&g!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(S-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(S-p._start)*p._ts,s,o||wn&&m_(p)),f!==this._time||!this._ts&&!h){g=0,v&&(u+=this._zTime=S?-bt:bt);break}}p=v}}if(g&&!s&&(this.pause(),g.render(f>=a?0:-bt)._zTime=f>=a?1:-1,this._ts))return this._start=y,Rd(this),this.render(r,s,o);this._onUpdate&&!s&&Ci(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(y===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Hs(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(Ci(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(ns(s)||(s=zi(this,s,r)),!(r instanceof Pc)){if(Un(r))return r.forEach(function(a){return o.add(a,s)}),this;if(yn(r))return this.addLabel(r,s);if($t(r))r=rn.delayedCall(0,r);else return this}return this!==r?Sr(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Yi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof rn?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return yn(r)?this.removeLabel(r):$t(r)?this.killTweensOf(r):(r.parent===this&&bd(this,r),r===this._recent&&(this._recent=this._last),Ao(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=sn(wi.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=zi(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=rn.delayedCall(0,s||Cc,o);return a.data="isPause",this._hasPause=1,Sr(this,a,zi(this,r))},t.removePause=function(r){var s=this._first;for(r=zi(this,r);s;)s._start===r&&s.data==="isPause"&&Hs(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)Ms!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=$i(r),l=this._first,c=ns(s),u;l;)l instanceof rn?iA(l._targets,a)&&(c?(!Ms||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=zi(o,r),l=s,c=l.startAt,u=l.onStart,d=l.onStartParams,f=l.immediateRender,p,v=rn.to(o,Ni({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||bt,onStart:function(){if(o.pause(),!p){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());v._dur!==m&&Ja(v,m,0,1).render(v._time,!0,!0),p=1}u&&u.apply(v,d||[])}},s));return f?v.render(0):v},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Ni({startAt:{time:zi(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),av(this,zi(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),av(this,zi(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+bt)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return Ao(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Ao(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Yi,c,u,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(d=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Sr(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Ja(o,o===Ht&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(Ht._ts&&(fS(Ht,ed(r,Ht)),cS=wi.frame),wi.frame>=iv){iv+=Ri.autoSleep||120;var s=Ht._first;if((!s||!s._ts)&&Ri.autoSleep&&wi._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||wi.sleep()}}},e}(Pc);Ni(Xn.prototype,{_lock:0,_hasPause:0,_forcing:0});var AA=function(e,t,i,r,s,o,a){var l=new li(this._pt,e,t,0,1,zS,null,s),c=0,u=0,d,f,p,v,_,m,h,g;for(l.b=i,l.e=r,i+="",r+="",(h=~r.indexOf("random("))&&(r=bc(r)),o&&(g=[i,r],o(g,e,t),i=g[0],r=g[1]),f=i.match(ch)||[];d=ch.exec(r);)v=d[0],_=r.substring(c,d.index),p?p=(p+1)%5:_.substr(-5)==="rgba("&&(p=1),v!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:v.charAt(1)==="="?Ua(m,v)-m:parseFloat(v)-m,m:p&&p<4?Math.round:0},c=ch.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(rS.test(r)||h)&&(l.e=0),this._pt=l,l},g_=function(e,t,i,r,s,o,a,l,c,u){$t(r)&&(r=r(s||0,e,o));var d=e[t],f=i!=="get"?i:$t(d)?c?e[t.indexOf("set")||!$t(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,p=$t(d)?c?DA:OS:v_,v;if(yn(r)&&(~r.indexOf("random(")&&(r=bc(r)),r.charAt(1)==="="&&(v=Ua(f,r)+(Ln(f)||0),(v||v===0)&&(r=v))),!u||f!==r||nm)return!isNaN(f*r)&&r!==""?(v=new li(this._pt,e,t,+f||0,r-(f||0),typeof d=="boolean"?LA:kS,0,p),c&&(v.fp=c),a&&v.modifier(a,this,e),this._pt=v):(!d&&!(t in e)&&f_(t,r),AA.call(this,e,t,f,r,p,l||Ri.stringFilter,c))},CA=function(e,t,i,r,s){if($t(e)&&(e=Jl(e,s,t,i,r)),!Dr(e)||e.style&&e.nodeType||Un(e)||nS(e))return yn(e)?Jl(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=Jl(e[a],s,t,i,r);return o},IS=function(e,t,i,r,s,o){var a,l,c,u;if(Mi[e]&&(a=new Mi[e]).init(s,a.rawVars?t[e]:CA(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new li(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==Aa))for(c=i._ptLookup[i._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Ms,nm,__=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,d=r.yoyoEase,f=r.keyframes,p=r.autoRevert,v=e._dur,_=e._startAt,m=e._targets,h=e.parent,g=h&&h.data==="nested"?h.vars.targets:m,x=e._overwrite==="auto"&&!a_,y=e.timeline,E,A,w,R,M,S,L,F,V,$,W,G,j;if(y&&(!f||!s)&&(s="none"),e._ease=Co(s,Ka.ease),e._yEase=d?PS(Co(d===!0?s:d,Ka.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!y&&!!r.runBackwards,!y||f&&!r.stagger){if(F=m[0]?To(m[0]).harness:0,G=F&&r[F.prop],E=Jf(r,d_),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!p?_.render(-1,!0):_.revert(u&&v?hf:tA),_._lazy=0),o){if(Hs(e._startAt=rn.set(m,Ni({data:"isStart",overwrite:!1,parent:h,immediateRender:!0,lazy:!_&&oi(l),startAt:null,delay:0,onUpdate:c&&function(){return Ci(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(wn||!a&&!p)&&e._startAt.revert(hf),a&&v&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(u&&v&&!_){if(t&&(a=!1),w=Ni({overwrite:!1,data:"isFromStart",lazy:a&&!_&&oi(l),immediateRender:a,stagger:0,parent:h},E),G&&(w[F.prop]=G),Hs(e._startAt=rn.set(m,w)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(wn?e._startAt.revert(hf):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,bt,bt);else if(!t)return}for(e._pt=e._ptCache=0,l=v&&oi(l)||l&&!v,A=0;A<m.length;A++){if(M=m[A],L=M._gsap||p_(m)[A]._gsap,e._ptLookup[A]=$={},Kp[L.id]&&Us.length&&Qf(),W=g===m?A:g.indexOf(M),F&&(V=new F).init(M,G||E,e,W,g)!==!1&&(e._pt=R=new li(e._pt,M,V.name,0,1,V.render,V,0,V.priority),V._props.forEach(function(U){$[U]=R}),V.priority&&(S=1)),!F||G)for(w in E)Mi[w]&&(V=IS(w,E,e,W,M,g))?V.priority&&(S=1):$[w]=R=g_.call(e,M,w,"get",E[w],W,g,0,r.stringFilter);e._op&&e._op[A]&&e.kill(M,e._op[A]),x&&e._pt&&(Ms=e,Ht.killTweensOf(M,$,e.globalTime(t)),j=!e.parent,Ms=0),e._pt&&l&&(Kp[L.id]=1)}S&&BS(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!j,f&&t<=0&&y.render(Yi,!0,!0)},bA=function(e,t,i,r,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,d,f,p;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,p=e._targets.length;p--;){if(u=f[p][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return nm=1,e.vars[t]="+=0",__(e,a),nm=0,l?Ac(t+" not eligible for reset"):1;c.push(u)}for(p=c.length;p--;)d=c[p],u=d._pt||d,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=i-u.s,d.e&&(d.e=Zt(i)+Ln(d.e)),d.b&&(d.b=u.s+Ln(d.b))},RA=function(e,t){var i=e[0]?To(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=Za({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},PA=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(Un(t))a=i[e]||(i[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Jl=function(e,t,i,r,s){return $t(e)?e.call(t,i,r,s):yn(e)&&~e.indexOf("random(")?bc(e):e},US=h_+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",FS={};ai(US+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return FS[n]=1});var rn=function(n){eS(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:Zl(r))||this;var l=a.vars,c=l.duration,u=l.delay,d=l.immediateRender,f=l.stagger,p=l.overwrite,v=l.keyframes,_=l.defaults,m=l.scrollTrigger,h=l.yoyoEase,g=r.parent||Ht,x=(Un(i)||nS(i)?ns(i[0]):"length"in r)?[i]:$i(i),y,E,A,w,R,M,S,L;if(a._targets=x.length?p_(x):Ac("GSAP target "+i+" not found. https://gsap.com",!Ri.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,v||f||gu(c)||gu(u)){if(r=a.vars,y=a.timeline=new Xn({data:"nested",defaults:_||{},targets:g&&g.data==="nested"?g.vars.targets:x}),y.kill(),y.parent=y._dp=Br(a),y._start=0,f||gu(c)||gu(u)){if(w=x.length,S=f&&yS(f),Dr(f))for(R in f)~US.indexOf(R)&&(L||(L={}),L[R]=f[R]);for(E=0;E<w;E++)A=Jf(r,FS),A.stagger=0,h&&(A.yoyoEase=h),L&&Za(A,L),M=x[E],A.duration=+Jl(c,Br(a),E,M,x),A.delay=(+Jl(u,Br(a),E,M,x)||0)-a._delay,!f&&w===1&&A.delay&&(a._delay=u=A.delay,a._start+=u,A.delay=0),y.to(M,A,S?S(E,M,x):0),y._ease=ft.none;y.duration()?c=u=0:a.timeline=0}else if(v){Zl(Ni(y.vars.defaults,{ease:"none"})),y._ease=Co(v.ease||r.ease||"none");var F=0,V,$,W;if(Un(v))v.forEach(function(G){return y.to(x,G,">")}),y.duration();else{A={};for(R in v)R==="ease"||R==="easeEach"||PA(R,v[R],A,v.easeEach);for(R in A)for(V=A[R].sort(function(G,j){return G.t-j.t}),F=0,E=0;E<V.length;E++)$=V[E],W={ease:$.e,duration:($.t-(E?V[E-1].t:0))/100*c},W[R]=$.v,y.to(x,W,F),F+=W.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||a.duration(c=y.duration())}else a.timeline=0;return p===!0&&!a_&&(Ms=Br(a),Ht.killTweensOf(x),Ms=0),Sr(g,Br(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(d||!c&&!v&&a._start===sn(g._time)&&oi(d)&&aA(Br(a))&&g.data!=="nested")&&(a._tTime=-bt,a.render(Math.max(0,-u)||0)),m&&gS(Br(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,d=r>l-bt&&!u?l:r<bt?0:r,f,p,v,_,m,h,g,x,y;if(!c)cA(this,r,s,o);else if(d!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=d,x=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+r,s,o);if(f=sn(d%_),d===l?(v=this._repeat,f=c):(m=sn(d/_),v=~~m,v&&v===m?(f=c,v--):f>c&&(f=c)),h=this._yoyo&&v&1,h&&(y=this._yEase,f=c-f),m=Qa(this._tTime,_),f===a&&!o&&this._initted&&v===m)return this._tTime=d,this;v!==m&&(x&&this._yEase&&DS(x,h),this.vars.repeatRefresh&&!h&&!this._lock&&f!==_&&this._initted&&(this._lock=o=1,this.render(sn(_*v),!0).invalidate()._lock=0))}if(!this._initted){if(_S(this,u?r:f,o,s,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&v!==m))return this;if(c!==this._dur)return this.render(r,s,o)}if(this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=g=(y||this._ease)(f/c),this._from&&(this.ratio=g=1-g),!a&&d&&!s&&!m&&(Ci(this,"onStart"),this._tTime!==d))return this;for(p=this._pt;p;)p.r(g,p.d),p=p._next;x&&x.render(r<0?r:x._dur*x._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&Zp(this,r,s,o),Ci(this,"onUpdate")),this._repeat&&v!==m&&this.vars.onRepeat&&!s&&this.parent&&Ci(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&Zp(this,r,!0,!0),(r||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Hs(this,1),!s&&!(u&&!a)&&(d||a||h)&&(Ci(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){Rc||wi.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||__(this,c),u=this._ease(c/this._dur),bA(this,r,s,o,a,u,c,l)?this.resetTo(r,s,o,a,1):(Pd(this,0),this.parent||pS(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Il(this):this.scrollTrigger&&this.scrollTrigger.kill(!!wn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Ms&&Ms.vars.overwrite!==!0)._first||Il(this),this.parent&&o!==this.timeline.totalDuration()&&Ja(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?$i(r):a,c=this._ptLookup,u=this._pt,d,f,p,v,_,m,h;if((!s||s==="all")&&sA(a,l))return s==="all"&&(this._pt=0),Il(this);for(d=this._op=this._op||[],s!=="all"&&(yn(s)&&(_={},ai(s,function(g){return _[g]=1}),s=_),s=RA(a,s)),h=a.length;h--;)if(~l.indexOf(a[h])){f=c[h],s==="all"?(d[h]=s,v=f,p={}):(p=d[h]=d[h]||{},v=s);for(_ in v)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&bd(this,m,"_pt"),delete f[_]),p!=="all"&&(p[_]=1)}return this._initted&&!this._pt&&u&&Il(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Ql(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return Ql(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return Ht.killTweensOf(r,s,o)},e}(Pc);Ni(rn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ai("staggerTo,staggerFrom,staggerFromTo",function(n){rn[n]=function(){var e=new Xn,t=Jp.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var v_=function(e,t,i){return e[t]=i},OS=function(e,t,i){return e[t](i)},DA=function(e,t,i,r){return e[t](r.fp,i)},NA=function(e,t,i){return e.setAttribute(t,i)},x_=function(e,t){return $t(e[t])?OS:l_(e[t])&&e.setAttribute?NA:v_},kS=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},LA=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},zS=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},y_=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},IA=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},UA=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?bd(this,t,"_pt"):t.dep||(i=1),t=r;return!i},FA=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},BS=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},li=function(){function n(t,i,r,s,o,a,l,c,u){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||kS,this.d=l||this,this.set=c||v_,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=FA,this.m=i,this.mt=s,this.tween=r},n}();ai(h_+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return d_[n]=1});Di.TweenMax=Di.TweenLite=rn;Di.TimelineLite=Di.TimelineMax=Xn;Ht=new Xn({sortChildren:!1,defaults:Ka,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ri.stringFilter=RS;var bo=[],mf={},OA=[],cv=0,kA=0,ph=function(e){return(mf[e]||OA).map(function(t){return t()})},im=function(){var e=Date.now(),t=[];e-cv>2&&(ph("matchMediaInit"),bo.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,c;for(a in r)o=_r.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(i.revert(),l&&t.push(i))}),ph("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),cv=e,ph("matchMedia"))},VS=function(){function n(t,i){this.selector=i&&em(i),this.data=[],this._r=[],this.isReverted=!1,this.id=kA++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){$t(i)&&(s=r,r=i,i=$t);var o=this,a=function(){var c=kt,u=o.selector,d;return c&&c!==o&&c.data.push(o),s&&(o.selector=em(s)),kt=o,d=r.apply(o,arguments),$t(d)&&o._r.push(d),kt=c,o.selector=u,o.isReverted=!1,d};return o.last=a,i===$t?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=kt;kt=null,i(this),kt=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof rn&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),l=s.data.length;l--;)c=s.data[l],c instanceof Xn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof rn)&&c.revert&&c.revert(i);s._r.forEach(function(u){return u(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=bo.length;o--;)bo[o].id===this.id&&bo.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),zA=function(){function n(t){this.contexts=[],this.scope=t,kt&&kt.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){Dr(i)||(i={matches:i});var o=new VS(0,s||this.scope),a=o.conditions={},l,c,u;kt&&!o.selector&&(o.selector=kt.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(c in i)c==="all"?u=1:(l=_r.matchMedia(i[c]),l&&(bo.indexOf(o)<0&&bo.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(im):l.addEventListener("change",im)));return u&&r(o,function(d){return o.add(null,d)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),td={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return AS(r)})},timeline:function(e){return new Xn(e)},getTweensOf:function(e,t){return Ht.getTweensOf(e,t)},getProperty:function(e,t,i,r){yn(e)&&(e=$i(e)[0]);var s=To(e||{}).get,o=i?hS:dS;return i==="native"&&(i=""),e&&(t?o((Mi[t]&&Mi[t].get||s)(e,t,i,r)):function(a,l,c){return o((Mi[a]&&Mi[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,i){if(e=$i(e),e.length>1){var r=e.map(function(u){return hi.quickSetter(u,t,i)}),s=r.length;return function(u){for(var d=s;d--;)r[d](u)}}e=e[0]||{};var o=Mi[t],a=To(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var d=new o;Aa._pt=0,d.init(e,i?u+i:u,Aa,0,[e]),d.render(1,d),Aa._pt&&y_(1,Aa)}:a.set(e,l);return o?c:function(u){return c(e,l,i?u+i:u,a,1)}},quickTo:function(e,t,i){var r,s=hi.to(e,Ni((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return Ht.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Co(e.ease,Ka.ease)),rv(Ka,e||{})},config:function(e){return rv(Ri,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!Mi[a]&&!Di[a]&&Ac(t+" effect requires "+a+" plugin.")}),uh[t]=function(a,l,c){return i($i(a),Ni(l||{},s),c)},o&&(Xn.prototype[t]=function(a,l,c){return this.add(uh[t](a,Dr(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ft[e]=Co(t)},parseEase:function(e,t){return arguments.length?Co(e,t):ft},getById:function(e){return Ht.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Xn(e),r,s;for(i.smoothChildTiming=oi(e.smoothChildTiming),Ht.remove(i),i._dp=0,i._time=i._tTime=Ht._time,r=Ht._first;r;)s=r._next,(t||!(!r._dur&&r instanceof rn&&r.vars.onComplete===r._targets[0]))&&Sr(i,r,r._start-r._delay),r=s;return Sr(Ht,i,0),i},context:function(e,t){return e?new VS(e,t):kt},matchMedia:function(e){return new zA(e)},matchMediaRefresh:function(){return bo.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||im()},addEventListener:function(e,t){var i=mf[e]||(mf[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=mf[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:_A,wrapYoyo:vA,distribute:yS,random:MS,snap:SS,normalize:gA,getUnit:Ln,clamp:dA,splitColor:CS,toArray:$i,selector:em,mapRange:wS,pipe:pA,unitize:mA,interpolate:xA,shuffle:xS},install:aS,effects:uh,ticker:wi,updateRoot:Xn.updateRoot,plugins:Mi,globalTimeline:Ht,core:{PropTween:li,globals:lS,Tween:rn,Timeline:Xn,Animation:Pc,getCache:To,_removeLinkedListItem:bd,reverting:function(){return wn},context:function(e){return e&&kt&&(kt.data.push(e),e._ctx=kt),kt},suppressOverwrites:function(e){return a_=e}}};ai("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return td[n]=rn[n]});wi.add(Xn.updateRoot);Aa=td.to({},{duration:0});var BA=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},VA=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=BA(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},mh=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(yn(s)&&(l={},ai(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}VA(a,s)}}}},hi=td.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)wn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},mh("roundProps",tm),mh("modifiers"),mh("snap",SS))||td;rn.version=Xn.version=hi.version="3.13.0";oS=1;c_()&&el();ft.Power0;ft.Power1;ft.Power2;ft.Power3;ft.Power4;ft.Linear;ft.Quad;ft.Cubic;ft.Quart;ft.Quint;ft.Strong;ft.Elastic;ft.Back;ft.SteppedEase;ft.Bounce;ft.Sine;ft.Expo;ft.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var uv,Es,Fa,S_,xo,fv,M_,HA=function(){return typeof window<"u"},is={},lo=180/Math.PI,Oa=Math.PI/180,$o=Math.atan2,dv=1e8,E_=/([A-Z])/g,GA=/(left|right|width|margin|padding|x)/i,WA=/[\s,\(]\S/,Mr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},rm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},jA=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},XA=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},YA=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},HS=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},GS=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},$A=function(e,t,i){return e.style[t]=i},qA=function(e,t,i){return e.style.setProperty(t,i)},KA=function(e,t,i){return e._gsap[t]=i},ZA=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},QA=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},JA=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},Gt="transform",ci=Gt+"Origin",eC=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in is&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Mr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=Hr(r,a)}):this.tfm[e]=o.x?o[e]:Hr(r,e),e===ci&&(this.tfm.zOrigin=o.zOrigin);else return Mr.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(Gt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(ci,t,"")),e=Gt}(s||t)&&this.props.push(e,t,s[e])},WS=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},tC=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(E_,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=M_(),(!s||!s.isStart)&&!i[Gt]&&(WS(i),r.zOrigin&&i[ci]&&(i[ci]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},jS=function(e,t){var i={target:e,props:[],revert:tC,save:eC};return e._gsap||hi.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},XS,sm=function(e,t){var i=Es.createElementNS?Es.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Es.createElement(e);return i&&i.style?i:Es.createElement(e)},qi=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(E_,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,tl(t)||t,1)||""},hv="O,Moz,ms,Ms,Webkit".split(","),tl=function(e,t,i){var r=t||xo,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(hv[o]+e in s););return o<0?null:(o===3?"ms":o>=0?hv[o]:"")+e},om=function(){HA()&&window.document&&(uv=window,Es=uv.document,Fa=Es.documentElement,xo=sm("div")||{style:{}},sm("div"),Gt=tl(Gt),ci=Gt+"Origin",xo.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",XS=!!tl("perspective"),M_=hi.core.reverting,S_=1)},pv=function(e){var t=e.ownerSVGElement,i=sm("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),Fa.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),Fa.removeChild(i),s},mv=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},YS=function(e){var t,i;try{t=e.getBBox()}catch{t=pv(e),i=1}return t&&(t.width||t.height)||i||(t=pv(e)),t&&!t.width&&!t.x&&!t.y?{x:+mv(e,["x","cx","x1"])||0,y:+mv(e,["y","cy","y1"])||0,width:0,height:0}:t},$S=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&YS(e))},Oo=function(e,t){if(t){var i=e.style,r;t in is&&t!==ci&&(t=Gt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(E_,"-$1").toLowerCase())):i.removeAttribute(t)}},ws=function(e,t,i,r,s,o){var a=new li(e._pt,t,i,0,1,o?GS:HS);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},gv={deg:1,rad:1,turn:1},nC={grid:1,flex:1},Gs=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=xo.style,l=GA.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,f=r==="px",p=r==="%",v,_,m,h;if(r===o||!s||gv[r]||gv[o])return s;if(o!=="px"&&!f&&(s=n(e,t,i,"px")),h=e.getCTM&&$S(e),(p||o==="%")&&(is[t]||~t.indexOf("adius")))return v=h?e.getBBox()[l?"width":"height"]:e[u],Zt(p?s/v*d:s/100*v);if(a[l?"width":"height"]=d+(f?o:r),_=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,h&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Es||!_.appendChild)&&(_=Es.body),m=_._gsap,m&&p&&m.width&&l&&m.time===wi.time&&!m.uncache)return Zt(s/m.width*d);if(p&&(t==="height"||t==="width")){var g=e.style[t];e.style[t]=d+r,v=e[u],g?e.style[t]=g:Oo(e,t)}else(p||o==="%")&&!nC[qi(_,"display")]&&(a.position=qi(e,"position")),_===e&&(a.position="static"),_.appendChild(xo),v=xo[u],_.removeChild(xo),a.position="absolute";return l&&p&&(m=To(_),m.time=wi.time,m.width=_[u]),Zt(f?v*s/d:v&&s?d/v*s:0)},Hr=function(e,t,i,r){var s;return S_||om(),t in Mr&&t!=="transform"&&(t=Mr[t],~t.indexOf(",")&&(t=t.split(",")[0])),is[t]&&t!=="transform"?(s=Nc(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:id(qi(e,ci))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=nd[t]&&nd[t](e,t,i)||qi(e,t)||uS(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Gs(e,t,s,i)+i:s},iC=function(e,t,i,r){if(!i||i==="none"){var s=tl(t,e,1),o=s&&qi(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=qi(e,"borderTopColor"))}var a=new li(this._pt,e.style,t,0,1,zS),l=0,c=0,u,d,f,p,v,_,m,h,g,x,y,E;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=qi(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(_=e.style[t],e.style[t]=r,r=qi(e,t)||r,_?e.style[t]=_:Oo(e,t)),u=[i,r],RS(u),i=u[0],r=u[1],f=i.match(Ta)||[],E=r.match(Ta)||[],E.length){for(;d=Ta.exec(r);)m=d[0],g=r.substring(l,d.index),v?v=(v+1)%5:(g.substr(-5)==="rgba("||g.substr(-5)==="hsla(")&&(v=1),m!==(_=f[c++]||"")&&(p=parseFloat(_)||0,y=_.substr((p+"").length),m.charAt(1)==="="&&(m=Ua(p,m)+y),h=parseFloat(m),x=m.substr((h+"").length),l=Ta.lastIndex-x.length,x||(x=x||Ri.units[t]||y,l===r.length&&(r+=x,a.e+=x)),y!==x&&(p=Gs(e,t,_,x)||0),a._pt={_next:a._pt,p:g||c===1?g:",",s:p,c:h-p,m:v&&v<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?GS:HS;return rS.test(r)&&(a.e=0),this._pt=a,a},_v={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},rC=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=_v[i]||i,t[1]=_v[r]||r,t.join(" ")},sC=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],is[a]&&(l=1,a=a==="transformOrigin"?ci:Gt),Oo(i,a);l&&(Oo(i,Gt),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Nc(i,1),o.uncache=1,WS(r)))}},nd={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new li(e._pt,t,i,0,0,sC);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},Dc=[1,0,0,1,0,0],qS={},KS=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},vv=function(e){var t=qi(e,Gt);return KS(t)?Dc:t.substr(7).match(iS).map(Zt)},w_=function(e,t){var i=e._gsap||To(e),r=e.style,s=vv(e),o,a,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Dc:s):(s===Dc&&!e.offsetParent&&e!==Fa&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,Fa.appendChild(e)),s=vv(e),l?r.display=l:Oo(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Fa.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},am=function(e,t,i,r,s,o){var a=e._gsap,l=s||w_(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,d=a.xOffset||0,f=a.yOffset||0,p=l[0],v=l[1],_=l[2],m=l[3],h=l[4],g=l[5],x=t.split(" "),y=parseFloat(x[0])||0,E=parseFloat(x[1])||0,A,w,R,M;i?l!==Dc&&(w=p*m-v*_)&&(R=y*(m/w)+E*(-_/w)+(_*g-m*h)/w,M=y*(-v/w)+E*(p/w)-(p*g-v*h)/w,y=R,E=M):(A=YS(e),y=A.x+(~x[0].indexOf("%")?y/100*A.width:y),E=A.y+(~(x[1]||x[0]).indexOf("%")?E/100*A.height:E)),r||r!==!1&&a.smooth?(h=y-c,g=E-u,a.xOffset=d+(h*p+g*_)-h,a.yOffset=f+(h*v+g*m)-g):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=E,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[ci]="0px 0px",o&&(ws(o,a,"xOrigin",c,y),ws(o,a,"yOrigin",u,E),ws(o,a,"xOffset",d,a.xOffset),ws(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+E)},Nc=function(e,t){var i=e._gsap||new LS(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=qi(e,ci)||"0",u,d,f,p,v,_,m,h,g,x,y,E,A,w,R,M,S,L,F,V,$,W,G,j,U,q,P,re,xe,Ke,Oe,Ve;return u=d=f=_=m=h=g=x=y=0,p=v=1,i.svg=!!(e.getCTM&&$S(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Gt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Gt]!=="none"?l[Gt]:"")),r.scale=r.rotate=r.translate="none"),w=w_(e,i.svg),i.svg&&(i.uncache?(U=e.getBBox(),c=i.xOrigin-U.x+"px "+(i.yOrigin-U.y)+"px",j=""):j=!t&&e.getAttribute("data-svg-origin"),am(e,j||c,!!j||i.originIsAbsolute,i.smooth!==!1,w)),E=i.xOrigin||0,A=i.yOrigin||0,w!==Dc&&(L=w[0],F=w[1],V=w[2],$=w[3],u=W=w[4],d=G=w[5],w.length===6?(p=Math.sqrt(L*L+F*F),v=Math.sqrt($*$+V*V),_=L||F?$o(F,L)*lo:0,g=V||$?$o(V,$)*lo+_:0,g&&(v*=Math.abs(Math.cos(g*Oa))),i.svg&&(u-=E-(E*L+A*V),d-=A-(E*F+A*$))):(Ve=w[6],Ke=w[7],P=w[8],re=w[9],xe=w[10],Oe=w[11],u=w[12],d=w[13],f=w[14],R=$o(Ve,xe),m=R*lo,R&&(M=Math.cos(-R),S=Math.sin(-R),j=W*M+P*S,U=G*M+re*S,q=Ve*M+xe*S,P=W*-S+P*M,re=G*-S+re*M,xe=Ve*-S+xe*M,Oe=Ke*-S+Oe*M,W=j,G=U,Ve=q),R=$o(-V,xe),h=R*lo,R&&(M=Math.cos(-R),S=Math.sin(-R),j=L*M-P*S,U=F*M-re*S,q=V*M-xe*S,Oe=$*S+Oe*M,L=j,F=U,V=q),R=$o(F,L),_=R*lo,R&&(M=Math.cos(R),S=Math.sin(R),j=L*M+F*S,U=W*M+G*S,F=F*M-L*S,G=G*M-W*S,L=j,W=U),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,h=180-h),p=Zt(Math.sqrt(L*L+F*F+V*V)),v=Zt(Math.sqrt(G*G+Ve*Ve)),R=$o(W,G),g=Math.abs(R)>2e-4?R*lo:0,y=Oe?1/(Oe<0?-Oe:Oe):0),i.svg&&(j=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!KS(qi(e,Gt)),j&&e.setAttribute("transform",j))),Math.abs(g)>90&&Math.abs(g)<270&&(s?(p*=-1,g+=_<=0?180:-180,_+=_<=0?180:-180):(v*=-1,g+=g<=0?180:-180)),t=t||i.uncache,i.x=u-((i.xPercent=u&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=d-((i.yPercent=d&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=f+o,i.scaleX=Zt(p),i.scaleY=Zt(v),i.rotation=Zt(_)+a,i.rotationX=Zt(m)+a,i.rotationY=Zt(h)+a,i.skewX=g+a,i.skewY=x+a,i.transformPerspective=y+o,(i.zOrigin=parseFloat(c.split(" ")[2])||!t&&i.zOrigin||0)&&(r[ci]=id(c)),i.xOffset=i.yOffset=0,i.force3D=Ri.force3D,i.renderTransform=i.svg?aC:XS?ZS:oC,i.uncache=0,i},id=function(e){return(e=e.split(" "))[0]+" "+e[1]},gh=function(e,t,i){var r=Ln(t);return Zt(parseFloat(t)+parseFloat(Gs(e,"x",i+"px",r)))+r},oC=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,ZS(e,t)},Qs="0deg",Ml="0px",Js=") ",ZS=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,c=i.rotation,u=i.rotationY,d=i.rotationX,f=i.skewX,p=i.skewY,v=i.scaleX,_=i.scaleY,m=i.transformPerspective,h=i.force3D,g=i.target,x=i.zOrigin,y="",E=h==="auto"&&e&&e!==1||h===!0;if(x&&(d!==Qs||u!==Qs)){var A=parseFloat(u)*Oa,w=Math.sin(A),R=Math.cos(A),M;A=parseFloat(d)*Oa,M=Math.cos(A),o=gh(g,o,w*M*-x),a=gh(g,a,-Math.sin(A)*-x),l=gh(g,l,R*M*-x+x)}m!==Ml&&(y+="perspective("+m+Js),(r||s)&&(y+="translate("+r+"%, "+s+"%) "),(E||o!==Ml||a!==Ml||l!==Ml)&&(y+=l!==Ml||E?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Js),c!==Qs&&(y+="rotate("+c+Js),u!==Qs&&(y+="rotateY("+u+Js),d!==Qs&&(y+="rotateX("+d+Js),(f!==Qs||p!==Qs)&&(y+="skew("+f+", "+p+Js),(v!==1||_!==1)&&(y+="scale("+v+", "+_+Js),g.style[Gt]=y||"translate(0, 0)"},aC=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,c=i.skewX,u=i.skewY,d=i.scaleX,f=i.scaleY,p=i.target,v=i.xOrigin,_=i.yOrigin,m=i.xOffset,h=i.yOffset,g=i.forceCSS,x=parseFloat(o),y=parseFloat(a),E,A,w,R,M;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Oa,c*=Oa,E=Math.cos(l)*d,A=Math.sin(l)*d,w=Math.sin(l-c)*-f,R=Math.cos(l-c)*f,c&&(u*=Oa,M=Math.tan(c-u),M=Math.sqrt(1+M*M),w*=M,R*=M,u&&(M=Math.tan(u),M=Math.sqrt(1+M*M),E*=M,A*=M)),E=Zt(E),A=Zt(A),w=Zt(w),R=Zt(R)):(E=d,R=f,A=w=0),(x&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(x=Gs(p,"x",o,"px"),y=Gs(p,"y",a,"px")),(v||_||m||h)&&(x=Zt(x+v-(v*E+_*w)+m),y=Zt(y+_-(v*A+_*R)+h)),(r||s)&&(M=p.getBBox(),x=Zt(x+r/100*M.width),y=Zt(y+s/100*M.height)),M="matrix("+E+","+A+","+w+","+R+","+x+","+y+")",p.setAttribute("transform",M),g&&(p.style[Gt]=M)},lC=function(e,t,i,r,s){var o=360,a=yn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?lo:1),c=l-r,u=r+c+"deg",d,f;return a&&(d=s.split("_")[1],d==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),d==="cw"&&c<0?c=(c+o*dv)%o-~~(c/o)*o:d==="ccw"&&c>0&&(c=(c-o*dv)%o-~~(c/o)*o)),e._pt=f=new li(e._pt,t,i,r,c,jA),f.e=u,f.u="deg",e._props.push(i),f},xv=function(e,t){for(var i in t)e[i]=t[i];return e},cC=function(e,t,i){var r=xv({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,c,u,d,f,p,v;r.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),o[Gt]=t,a=Nc(i,1),Oo(i,Gt),i.setAttribute("transform",c)):(c=getComputedStyle(i)[Gt],o[Gt]=t,a=Nc(i,1),o[Gt]=c);for(l in is)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(p=Ln(c),v=Ln(u),d=p!==v?Gs(i,l,c,v):parseFloat(c),f=parseFloat(u),e._pt=new li(e._pt,a,l,d,f-d,rm),e._pt.u=v||0,e._props.push(l));xv(a,r)};ai("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});nd[e>1?"border"+n:n]=function(a,l,c,u,d){var f,p;if(arguments.length<4)return f=o.map(function(v){return Hr(a,v,c)}),p=f.join(" "),p.split(f[0]).length===5?f[0]:p;f=(u+"").split(" "),p={},o.forEach(function(v,_){return p[v]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,p,d)}});var QS={name:"css",register:om,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,c,u,d,f,p,v,_,m,h,g,x,y,E,A,w,R;S_||om(),this.styles=this.styles||jS(e),R=this.styles.props,this.tween=i;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(Mi[_]&&IS(_,t,i,r,e,s)))){if(p=typeof u,v=nd[_],p==="function"&&(u=u.call(i,r,e,s),p=typeof u),p==="string"&&~u.indexOf("random(")&&(u=bc(u)),v)v(this,e,_,u,i)&&(w=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",Fs.lastIndex=0,Fs.test(c)||(m=Ln(c),h=Ln(u)),h?m!==h&&(c=Gs(e,_,c,h)+h):m&&(u+=m),this.add(a,"setProperty",c,u,r,s,0,0,_),o.push(_),R.push(_,0,a[_]);else if(p!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(i,r,e,s):l[_],yn(c)&&~c.indexOf("random(")&&(c=bc(c)),Ln(c+"")||c==="auto"||(c+=Ri.units[_]||Ln(Hr(e,_))||""),(c+"").charAt(1)==="="&&(c=Hr(e,_))):c=Hr(e,_),f=parseFloat(c),g=p==="string"&&u.charAt(1)==="="&&u.substr(0,2),g&&(u=u.substr(2)),d=parseFloat(u),_ in Mr&&(_==="autoAlpha"&&(f===1&&Hr(e,"visibility")==="hidden"&&d&&(f=0),R.push("visibility",0,a.visibility),ws(this,a,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=Mr[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in is,x){if(this.styles.save(_),p==="string"&&u.substring(0,6)==="var(--"&&(u=qi(e,u.substring(4,u.indexOf(")"))),d=parseFloat(u)),y||(E=e._gsap,E.renderTransform&&!t.parseTransform||Nc(e,t.parseTransform),A=t.smoothOrigin!==!1&&E.smooth,y=this._pt=new li(this._pt,a,Gt,0,1,E.renderTransform,E,0,-1),y.dep=1),_==="scale")this._pt=new li(this._pt,E,"scaleY",E.scaleY,(g?Ua(E.scaleY,g+d):d)-E.scaleY||0,rm),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){R.push(ci,0,a[ci]),u=rC(u),E.svg?am(e,u,0,A,0,this):(h=parseFloat(u.split(" ")[2])||0,h!==E.zOrigin&&ws(this,E,"zOrigin",E.zOrigin,h),ws(this,a,_,id(c),id(u)));continue}else if(_==="svgOrigin"){am(e,u,1,A,0,this);continue}else if(_ in qS){lC(this,E,_,f,g?Ua(f,g+u):u);continue}else if(_==="smoothOrigin"){ws(this,E,"smooth",E.smooth,u);continue}else if(_==="force3D"){E[_]=u;continue}else if(_==="transform"){cC(this,u,e);continue}}else _ in a||(_=tl(_)||_);if(x||(d||d===0)&&(f||f===0)&&!WA.test(u)&&_ in a)m=(c+"").substr((f+"").length),d||(d=0),h=Ln(u)||(_ in Ri.units?Ri.units[_]:m),m!==h&&(f=Gs(e,_,c,h)),this._pt=new li(this._pt,x?E:a,_,f,(g?Ua(f,g+d):d)-f,!x&&(h==="px"||_==="zIndex")&&t.autoRound!==!1?YA:rm),this._pt.u=h||0,m!==h&&h!=="%"&&(this._pt.b=c,this._pt.r=XA);else if(_ in a)iC.call(this,e,_,c,g?g+u:u);else if(_ in e)this.add(e,_,c||e[_],g?g+u:u,r,s);else if(_!=="parseTransform"){f_(_,u);continue}x||(_ in a?R.push(_,0,a[_]):typeof e[_]=="function"?R.push(_,2,e[_]()):R.push(_,1,c||e[_])),o.push(_)}}w&&BS(this)},render:function(e,t){if(t.tween._time||!M_())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Hr,aliases:Mr,getSetter:function(e,t,i){var r=Mr[t];return r&&r.indexOf(",")<0&&(t=r),t in is&&t!==ci&&(e._gsap.x||Hr(e,"x"))?i&&fv===i?t==="scale"?ZA:KA:(fv=i||{})&&(t==="scale"?QA:JA):e.style&&!l_(e.style[t])?$A:~t.indexOf("-")?qA:x_(e,t)},core:{_removeProperty:Oo,_getMatrix:w_}};hi.utils.checkPrefix=tl;hi.core.getStyleSaver=jS;(function(n,e,t,i){var r=ai(n+","+e+","+t,function(s){is[s]=1});ai(e,function(s){Ri.units[s]="deg",qS[s]=1}),Mr[r[13]]=n+","+e,ai(i,function(s){var o=s.split(":");Mr[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ai("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Ri.units[n]="px"});hi.registerPlugin(QS);var ti=hi.registerPlugin(QS)||hi;ti.core.Tween;const uC=()=>{const n=qe.useRef(null),e=qe.useRef(null),t=qe.useRef(null),i=qe.useRef(null);qe.useEffect(()=>{var a;ti.timeline({delay:.5}).fromTo(e.current,{y:100,opacity:0},{y:0,opacity:1,duration:1.2,ease:"power3.out"}).fromTo(t.current,{y:50,opacity:0},{y:0,opacity:1,duration:1,ease:"power3.out"},"-=0.8").fromTo((a=i.current)==null?void 0:a.children,{y:30,opacity:0},{y:0,opacity:1,duration:.8,ease:"power3.out",stagger:.2},"-=0.6"),ti.to(".floating-element",{y:-20,duration:3,repeat:-1,yoyo:!0,ease:"power2.inOut",stagger:.5})},[]);const r=()=>{const o="918590319003",a=encodeURIComponent("Hi! I want to start a project with your team.");window.open(`https://wa.me/${o}?text=${a}`,"_blank")},s=()=>{window.open("https://youtube.com/@thenextifytech?si=dKeSDNmY83dlGt4n","_blank")};return C.jsxs("section",{id:"home",ref:n,className:"relative min-h-screen flex items-center justify-center pt-20 overflow-hidden",children:[C.jsx("div",{className:"container mx-auto px-6 text-center relative z-10",children:C.jsxs("div",{className:"max-w-5xl mx-auto",children:[C.jsxs("div",{className:"inline-flex items-center space-x-2 glass-card px-6 py-3 mb-8 animate-pulse-glow invisible",children:[C.jsx(jT,{className:"w-4 h-4 text-cyan-400"}),C.jsx("span",{className:"text-sm font-medium text-cyan-400",children:"Next-Gen Digital Solutions"})]}),C.jsxs("h1",{ref:e,className:"text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight font-space-grotesk",children:[C.jsx("span",{className:"gradient-text block",children:"Digital Dreams"}),C.jsx("span",{className:"text-white block",children:"Made Reality"})]}),C.jsx("p",{ref:t,className:"text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed",children:"We craft cutting-edge digital experiences that push boundaries and transform your vision into stunning, interactive reality."}),C.jsxs("div",{ref:i,className:"flex flex-col sm:flex-row items-center justify-center gap-6",children:[C.jsxs("button",{onClick:r,className:"btn-primary flex items-center space-x-2 hover-tilt group text-lg px-8 py-4",children:[C.jsx("span",{children:"Start Your Project"}),C.jsx(r_,{className:"w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"})]}),C.jsxs("button",{onClick:s,className:"btn-secondary flex items-center space-x-2 hover-tilt group text-lg px-8 py-4",children:[C.jsx(zT,{className:"w-5 h-5"}),C.jsx("span",{children:"Watch Demo"})]})]}),C.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-8 mt-16",children:[{number:"30+",label:"Projects Completed"},{number:"5+",label:"Happy Clients"},{number:"5+",label:"Years Experience"},{number:"24/7",label:"Support Available"}].map((o,a)=>C.jsxs("div",{className:"glass-card p-6 hover-tilt",children:[C.jsx("div",{className:"text-3xl md:text-4xl font-bold gradient-text mb-2",children:o.number}),C.jsx("div",{className:"text-gray-400 text-sm",children:o.label})]},a))})]})}),C.jsxs("div",{className:"absolute inset-0 pointer-events-none overflow-hidden",children:[C.jsx("div",{className:"floating-element absolute top-20 left-10 w-20 h-20 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-20 blur-xl"}),C.jsx("div",{className:"floating-element absolute top-40 right-20 w-32 h-32 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 opacity-20 blur-xl",style:{animationDelay:"1s"}}),C.jsx("div",{className:"floating-element absolute bottom-40 left-20 w-16 h-16 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 opacity-20 blur-xl",style:{animationDelay:"2s"}}),C.jsx("div",{className:"floating-element absolute bottom-20 right-10 w-24 h-24 rounded-full bg-gradient-to-r from-pink-400 to-red-400 opacity-20 blur-xl",style:{animationDelay:"0.5s"}})]}),C.jsx("div",{className:"absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce",children:C.jsx("div",{className:"w-6 h-10 border-2 border-white/30 rounded-full flex justify-center",children:C.jsx("div",{className:"w-1 h-3 bg-white rounded-full mt-2 animate-pulse"})})})]})};function fC(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function dC(n,e,t){return e&&fC(n.prototype,e),n}/*!
 * Observer 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Mn,gf,Ti,Ts,As,ka,JS,co,ec,eM,Yr,sr,tM,nM=function(){return Mn||typeof window<"u"&&(Mn=window.gsap)&&Mn.registerPlugin&&Mn},iM=1,Ca=[],at=[],Rr=[],tc=Date.now,lm=function(e,t){return t},hC=function(){var e=ec.core,t=e.bridge||{},i=e._scrollers,r=e._proxies;i.push.apply(i,at),r.push.apply(r,Rr),at=i,Rr=r,lm=function(o,a){return t[o](a)}},Os=function(e,t){return~Rr.indexOf(e)&&Rr[Rr.indexOf(e)+1][t]},nc=function(e){return!!~eM.indexOf(e)},Bn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:r!==!1,capture:!!s})},zn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},_u="scrollLeft",vu="scrollTop",cm=function(){return Yr&&Yr.isPressed||at.cache++},rd=function(e,t){var i=function r(s){if(s||s===0){iM&&(Ti.history.scrollRestoration="manual");var o=Yr&&Yr.isPressed;s=r.v=Math.round(s)||(Yr&&Yr.iOS?1:0),e(s),r.cacheID=at.cache,o&&lm("ss",s)}else(t||at.cache!==r.cacheID||lm("ref"))&&(r.cacheID=at.cache,r.v=e());return r.v+r.offset};return i.offset=0,e&&i},Yn={s:_u,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:rd(function(n){return arguments.length?Ti.scrollTo(n,fn.sc()):Ti.pageXOffset||Ts[_u]||As[_u]||ka[_u]||0})},fn={s:vu,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Yn,sc:rd(function(n){return arguments.length?Ti.scrollTo(Yn.sc(),n):Ti.pageYOffset||Ts[vu]||As[vu]||ka[vu]||0})},Jn=function(e,t){return(t&&t._ctx&&t._ctx.selector||Mn.utils.toArray)(e)[0]||(typeof e=="string"&&Mn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},pC=function(e,t){for(var i=t.length;i--;)if(t[i]===e||t[i].contains(e))return!0;return!1},Ws=function(e,t){var i=t.s,r=t.sc;nc(e)&&(e=Ts.scrollingElement||As);var s=at.indexOf(e),o=r===fn.sc?1:2;!~s&&(s=at.push(e)-1),at[s+o]||Bn(e,"scroll",cm);var a=at[s+o],l=a||(at[s+o]=rd(Os(e,i),!0)||(nc(e)?r:rd(function(c){return arguments.length?e[i]=c:e[i]})));return l.target=e,a||(l.smooth=Mn.getProperty(e,"scrollBehavior")==="smooth"),l},um=function(e,t,i){var r=e,s=e,o=tc(),a=o,l=t||50,c=Math.max(500,l*3),u=function(v,_){var m=tc();_||m-o>l?(s=r,r=v,a=o,o=m):i?r+=v:r=s+(v-s)/(m-a)*(o-a)},d=function(){s=r=i?0:r,a=o=0},f=function(v){var _=a,m=s,h=tc();return(v||v===0)&&v!==r&&u(v),o===a||h-a>c?0:(r+(i?m:-m))/((i?h:o)-_)*1e3};return{update:u,reset:d,getVelocity:f}},El=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},yv=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},rM=function(){ec=Mn.core.globals().ScrollTrigger,ec&&ec.core&&hC()},sM=function(e){return Mn=e||nM(),!gf&&Mn&&typeof document<"u"&&document.body&&(Ti=window,Ts=document,As=Ts.documentElement,ka=Ts.body,eM=[Ti,Ts,As,ka],Mn.utils.clamp,tM=Mn.core.context||function(){},co="onpointerenter"in ka?"pointer":"mouse",JS=en.isTouch=Ti.matchMedia&&Ti.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Ti||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,sr=en.eventTypes=("ontouchstart"in As?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in As?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return iM=0},500),rM(),gf=1),gf};Yn.op=fn;at.cache=0;var en=function(){function n(t){this.init(t)}var e=n.prototype;return e.init=function(i){gf||sM(Mn)||console.warn("Please gsap.registerPlugin(Observer)"),ec||rM();var r=i.tolerance,s=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,c=i.debounce,u=i.preventDefault,d=i.onStop,f=i.onStopDelay,p=i.ignore,v=i.wheelSpeed,_=i.event,m=i.onDragStart,h=i.onDragEnd,g=i.onDrag,x=i.onPress,y=i.onRelease,E=i.onRight,A=i.onLeft,w=i.onUp,R=i.onDown,M=i.onChangeX,S=i.onChangeY,L=i.onChange,F=i.onToggleX,V=i.onToggleY,$=i.onHover,W=i.onHoverEnd,G=i.onMove,j=i.ignoreCheck,U=i.isNormalizer,q=i.onGestureStart,P=i.onGestureEnd,re=i.onWheel,xe=i.onEnable,Ke=i.onDisable,Oe=i.onClick,Ve=i.scrollSpeed,K=i.capture,J=i.allowClicks,pe=i.lockAxis,Pe=i.onLockAxis;this.target=a=Jn(a)||As,this.vars=i,p&&(p=Mn.utils.toArray(p)),r=r||1e-9,s=s||0,v=v||1,Ve=Ve||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Ti.getComputedStyle(ka).lineHeight)||22);var Ce,We,gt,N,Ye,Ue,De,O=this,st=0,ye=0,je=i.passive||!u&&i.passive!==!1,Qe=Ws(a,Yn),_t=Ws(a,fn),D=Qe(),T=_t(),B=~o.indexOf("touch")&&!~o.indexOf("pointer")&&sr[0]==="pointerdown",Q=nc(a),ee=a.ownerDocument||Ts,Z=[0,0,0],Se=[0,0,0],le=0,be=function(){return le=tc()},he=function(Ne,Ze){return(O.event=Ne)&&p&&pC(Ne.target,p)||Ze&&B&&Ne.pointerType!=="touch"||j&&j(Ne,Ze)},oe=function(){O._vx.reset(),O._vy.reset(),We.pause(),d&&d(O)},de=function(){var Ne=O.deltaX=yv(Z),Ze=O.deltaY=yv(Se),me=Math.abs(Ne)>=r,He=Math.abs(Ze)>=r;L&&(me||He)&&L(O,Ne,Ze,Z,Se),me&&(E&&O.deltaX>0&&E(O),A&&O.deltaX<0&&A(O),M&&M(O),F&&O.deltaX<0!=st<0&&F(O),st=O.deltaX,Z[0]=Z[1]=Z[2]=0),He&&(R&&O.deltaY>0&&R(O),w&&O.deltaY<0&&w(O),S&&S(O),V&&O.deltaY<0!=ye<0&&V(O),ye=O.deltaY,Se[0]=Se[1]=Se[2]=0),(N||gt)&&(G&&G(O),gt&&(m&&gt===1&&m(O),g&&g(O),gt=0),N=!1),Ue&&!(Ue=!1)&&Pe&&Pe(O),Ye&&(re(O),Ye=!1),Ce=0},ke=function(Ne,Ze,me){Z[me]+=Ne,Se[me]+=Ze,O._vx.update(Ne),O._vy.update(Ze),c?Ce||(Ce=requestAnimationFrame(de)):de()},Re=function(Ne,Ze){pe&&!De&&(O.axis=De=Math.abs(Ne)>Math.abs(Ze)?"x":"y",Ue=!0),De!=="y"&&(Z[2]+=Ne,O._vx.update(Ne,!0)),De!=="x"&&(Se[2]+=Ze,O._vy.update(Ze,!0)),c?Ce||(Ce=requestAnimationFrame(de)):de()},fe=function(Ne){if(!he(Ne,1)){Ne=El(Ne,u);var Ze=Ne.clientX,me=Ne.clientY,He=Ze-O.x,Fe=me-O.y,$e=O.isDragging;O.x=Ze,O.y=me,($e||(He||Fe)&&(Math.abs(O.startX-Ze)>=s||Math.abs(O.startY-me)>=s))&&(gt=$e?2:1,$e||(O.isDragging=!0),Re(He,Fe))}},Xe=O.onPress=function(ve){he(ve,1)||ve&&ve.button||(O.axis=De=null,We.pause(),O.isPressed=!0,ve=El(ve),st=ye=0,O.startX=O.x=ve.clientX,O.startY=O.y=ve.clientY,O._vx.reset(),O._vy.reset(),Bn(U?a:ee,sr[1],fe,je,!0),O.deltaX=O.deltaY=0,x&&x(O))},I=O.onRelease=function(ve){if(!he(ve,1)){zn(U?a:ee,sr[1],fe,!0);var Ne=!isNaN(O.y-O.startY),Ze=O.isDragging,me=Ze&&(Math.abs(O.x-O.startX)>3||Math.abs(O.y-O.startY)>3),He=El(ve);!me&&Ne&&(O._vx.reset(),O._vy.reset(),u&&J&&Mn.delayedCall(.08,function(){if(tc()-le>300&&!ve.defaultPrevented){if(ve.target.click)ve.target.click();else if(ee.createEvent){var Fe=ee.createEvent("MouseEvents");Fe.initMouseEvent("click",!0,!0,Ti,1,He.screenX,He.screenY,He.clientX,He.clientY,!1,!1,!1,!1,0,null),ve.target.dispatchEvent(Fe)}}})),O.isDragging=O.isGesturing=O.isPressed=!1,d&&Ze&&!U&&We.restart(!0),gt&&de(),h&&Ze&&h(O),y&&y(O,me)}},se=function(Ne){return Ne.touches&&Ne.touches.length>1&&(O.isGesturing=!0)&&q(Ne,O.isDragging)},ce=function(){return(O.isGesturing=!1)||P(O)},ge=function(Ne){if(!he(Ne)){var Ze=Qe(),me=_t();ke((Ze-D)*Ve,(me-T)*Ve,1),D=Ze,T=me,d&&We.restart(!0)}},ie=function(Ne){if(!he(Ne)){Ne=El(Ne,u),re&&(Ye=!0);var Ze=(Ne.deltaMode===1?l:Ne.deltaMode===2?Ti.innerHeight:1)*v;ke(Ne.deltaX*Ze,Ne.deltaY*Ze,0),d&&!U&&We.restart(!0)}},te=function(Ne){if(!he(Ne)){var Ze=Ne.clientX,me=Ne.clientY,He=Ze-O.x,Fe=me-O.y;O.x=Ze,O.y=me,N=!0,d&&We.restart(!0),(He||Fe)&&Re(He,Fe)}},Ee=function(Ne){O.event=Ne,$(O)},Be=function(Ne){O.event=Ne,W(O)},ht=function(Ne){return he(Ne)||El(Ne,u)&&Oe(O)};We=O._dc=Mn.delayedCall(f||.25,oe).pause(),O.deltaX=O.deltaY=0,O._vx=um(0,50,!0),O._vy=um(0,50,!0),O.scrollX=Qe,O.scrollY=_t,O.isDragging=O.isGesturing=O.isPressed=!1,tM(this),O.enable=function(ve){return O.isEnabled||(Bn(Q?ee:a,"scroll",cm),o.indexOf("scroll")>=0&&Bn(Q?ee:a,"scroll",ge,je,K),o.indexOf("wheel")>=0&&Bn(a,"wheel",ie,je,K),(o.indexOf("touch")>=0&&JS||o.indexOf("pointer")>=0)&&(Bn(a,sr[0],Xe,je,K),Bn(ee,sr[2],I),Bn(ee,sr[3],I),J&&Bn(a,"click",be,!0,!0),Oe&&Bn(a,"click",ht),q&&Bn(ee,"gesturestart",se),P&&Bn(ee,"gestureend",ce),$&&Bn(a,co+"enter",Ee),W&&Bn(a,co+"leave",Be),G&&Bn(a,co+"move",te)),O.isEnabled=!0,O.isDragging=O.isGesturing=O.isPressed=N=gt=!1,O._vx.reset(),O._vy.reset(),D=Qe(),T=_t(),ve&&ve.type&&Xe(ve),xe&&xe(O)),O},O.disable=function(){O.isEnabled&&(Ca.filter(function(ve){return ve!==O&&nc(ve.target)}).length||zn(Q?ee:a,"scroll",cm),O.isPressed&&(O._vx.reset(),O._vy.reset(),zn(U?a:ee,sr[1],fe,!0)),zn(Q?ee:a,"scroll",ge,K),zn(a,"wheel",ie,K),zn(a,sr[0],Xe,K),zn(ee,sr[2],I),zn(ee,sr[3],I),zn(a,"click",be,!0),zn(a,"click",ht),zn(ee,"gesturestart",se),zn(ee,"gestureend",ce),zn(a,co+"enter",Ee),zn(a,co+"leave",Be),zn(a,co+"move",te),O.isEnabled=O.isPressed=O.isDragging=!1,Ke&&Ke(O))},O.kill=O.revert=function(){O.disable();var ve=Ca.indexOf(O);ve>=0&&Ca.splice(ve,1),Yr===O&&(Yr=0)},Ca.push(O),U&&nc(a)&&(Yr=O),O.enable(_)},dC(n,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),n}();en.version="3.13.0";en.create=function(n){return new en(n)};en.register=sM;en.getAll=function(){return Ca.slice()};en.getById=function(n){return Ca.filter(function(e){return e.vars.id===n})[0]};nM()&&Mn.registerPlugin(en);/*!
 * ScrollTrigger 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ae,fa,ot,Rt,Ei,yt,T_,sd,Lc,ic,Fl,xu,Pn,Dd,fm,Wn,Sv,Mv,da,oM,_h,aM,Hn,dm,lM,cM,ps,hm,A_,za,C_,od,pm,vh,yu=1,Dn=Date.now,xh=Dn(),Zi=0,Ol=0,Ev=function(e,t,i){var r=Si(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},wv=function(e,t){return t&&(!Si(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},mC=function n(){return Ol&&requestAnimationFrame(n)},Tv=function(){return Dd=1},Av=function(){return Dd=0},vr=function(e){return e},kl=function(e){return Math.round(e*1e5)/1e5||0},uM=function(){return typeof window<"u"},fM=function(){return Ae||uM()&&(Ae=window.gsap)&&Ae.registerPlugin&&Ae},ko=function(e){return!!~T_.indexOf(e)},dM=function(e){return(e==="Height"?C_:ot["inner"+e])||Ei["client"+e]||yt["client"+e]},hM=function(e){return Os(e,"getBoundingClientRect")||(ko(e)?function(){return Sf.width=ot.innerWidth,Sf.height=C_,Sf}:function(){return Gr(e)})},gC=function(e,t,i){var r=i.d,s=i.d2,o=i.a;return(o=Os(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?dM(s):e["client"+s])||0}},_C=function(e,t){return!t||~Rr.indexOf(e)?hM(e):function(){return Sf}},Er=function(e,t){var i=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(i="scroll"+r)&&(o=Os(e,i))?o()-hM(e)()[s]:ko(e)?(Ei[i]||yt[i])-dM(r):e[i]-e["offset"+r])},Su=function(e,t){for(var i=0;i<da.length;i+=3)(!t||~t.indexOf(da[i+1]))&&e(da[i],da[i+1],da[i+2])},Si=function(e){return typeof e=="string"},In=function(e){return typeof e=="function"},zl=function(e){return typeof e=="number"},uo=function(e){return typeof e=="object"},wl=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},yh=function(e,t){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e)}):t(e);i&&i.totalTime&&(e.callbackAnimation=i)}},qo=Math.abs,pM="left",mM="top",b_="right",R_="bottom",Ro="width",Po="height",rc="Right",sc="Left",oc="Top",ac="Bottom",nn="padding",Gi="margin",nl="Width",P_="Height",cn="px",Wi=function(e){return ot.getComputedStyle(e)},vC=function(e){var t=Wi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Cv=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Gr=function(e,t){var i=t&&Wi(e)[fm]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ae.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return i&&i.progress(0).kill(),r},ad=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},gM=function(e){var t=[],i=e.labels,r=e.duration(),s;for(s in i)t.push(i[s]/r);return t},xC=function(e){return function(t){return Ae.utils.snap(gM(e),t)}},D_=function(e){var t=Ae.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return i?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<i.length;a++)if(i[a]>=r)return i[a];return i[a-1]}else for(a=i.length,r+=o;a--;)if(i[a]<=r)return i[a];return i[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},yC=function(e){return function(t,i){return D_(gM(e))(t,i.direction)}},Mu=function(e,t,i,r){return i.split(",").forEach(function(s){return e(t,s,r)})},_n=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:!r,capture:!!s})},gn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},Eu=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},bv={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},wu={toggleActions:"play",anticipatePin:0},ld={top:0,left:0,center:.5,bottom:1,right:1},_f=function(e,t){if(Si(e)){var i=e.indexOf("="),r=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(r*=t/100),e=e.substr(0,i-1)),e=r+(e in ld?ld[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Tu=function(e,t,i,r,s,o,a,l){var c=s.startColor,u=s.endColor,d=s.fontSize,f=s.indent,p=s.fontWeight,v=Rt.createElement("div"),_=ko(i)||Os(i,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,h=_?yt:i,g=e.indexOf("start")!==-1,x=g?c:u,y="border-color:"+x+";font-size:"+d+";color:"+x+";font-weight:"+p+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(y+=(r===fn?b_:R_)+":"+(o+parseFloat(f))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),v._isStart=g,v.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),v.style.cssText=y,v.innerText=t||t===0?e+"-"+t:e,h.children[0]?h.insertBefore(v,h.children[0]):h.appendChild(v),v._offset=v["offset"+r.op.d2],vf(v,0,r,g),v},vf=function(e,t,i,r){var s={display:"block"},o=i[r?"os2":"p2"],a=i[r?"p2":"os2"];e._isFlipped=r,s[i.a+"Percent"]=r?-100:0,s[i.a]=r?"1px":0,s["border"+o+nl]=1,s["border"+a+nl]=0,s[i.p]=t+"px",Ae.set(e,s)},it=[],mm={},Ic,Rv=function(){return Dn()-Zi>34&&(Ic||(Ic=requestAnimationFrame(Kr)))},Ko=function(){(!Hn||!Hn.isPressed||Hn.startX>yt.clientWidth)&&(at.cache++,Hn?Ic||(Ic=requestAnimationFrame(Kr)):Kr(),Zi||Bo("scrollStart"),Zi=Dn())},Sh=function(){cM=ot.innerWidth,lM=ot.innerHeight},Bl=function(e){at.cache++,(e===!0||!Pn&&!aM&&!Rt.fullscreenElement&&!Rt.webkitFullscreenElement&&(!dm||cM!==ot.innerWidth||Math.abs(ot.innerHeight-lM)>ot.innerHeight*.25))&&sd.restart(!0)},zo={},SC=[],_M=function n(){return gn(rt,"scrollEnd",n)||yo(!0)},Bo=function(e){return zo[e]&&zo[e].map(function(t){return t()})||SC},xi=[],vM=function(e){for(var t=0;t<xi.length;t+=5)(!e||xi[t+4]&&xi[t+4].query===e)&&(xi[t].style.cssText=xi[t+1],xi[t].getBBox&&xi[t].setAttribute("transform",xi[t+2]||""),xi[t+3].uncache=1)},N_=function(e,t){var i;for(Wn=0;Wn<it.length;Wn++)i=it[Wn],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));od=!0,t&&vM(t),t||Bo("revert")},xM=function(e,t){at.cache++,(t||!jn)&&at.forEach(function(i){return In(i)&&i.cacheID++&&(i.rec=0)}),Si(e)&&(ot.history.scrollRestoration=A_=e)},jn,Do=0,Pv,MC=function(){if(Pv!==Do){var e=Pv=Do;requestAnimationFrame(function(){return e===Do&&yo(!0)})}},yM=function(){yt.appendChild(za),C_=!Hn&&za.offsetHeight||ot.innerHeight,yt.removeChild(za)},Dv=function(e){return Lc(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},yo=function(e,t){if(Ei=Rt.documentElement,yt=Rt.body,T_=[ot,Rt,Ei,yt],Zi&&!e&&!od){_n(rt,"scrollEnd",_M);return}yM(),jn=rt.isRefreshing=!0,at.forEach(function(r){return In(r)&&++r.cacheID&&(r.rec=r())});var i=Bo("refreshInit");oM&&rt.sort(),t||N_(),at.forEach(function(r){In(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),it.slice(0).forEach(function(r){return r.refresh()}),od=!1,it.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),pm=1,Dv(!0),it.forEach(function(r){var s=Er(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),Dv(!1),pm=0,i.forEach(function(r){return r&&r.render&&r.render(-1)}),at.forEach(function(r){In(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),xM(A_,1),sd.pause(),Do++,jn=2,Kr(2),it.forEach(function(r){return In(r.vars.onRefresh)&&r.vars.onRefresh(r)}),jn=rt.isRefreshing=!1,Bo("refresh")},gm=0,xf=1,lc,Kr=function(e){if(e===2||!jn&&!od){rt.isUpdating=!0,lc&&lc.update(0);var t=it.length,i=Dn(),r=i-xh>=50,s=t&&it[0].scroll();if(xf=gm>s?-1:1,jn||(gm=s),r&&(Zi&&!Dd&&i-Zi>200&&(Zi=0,Bo("scrollEnd")),Fl=xh,xh=i),xf<0){for(Wn=t;Wn-- >0;)it[Wn]&&it[Wn].update(0,r);xf=1}else for(Wn=0;Wn<t;Wn++)it[Wn]&&it[Wn].update(0,r);rt.isUpdating=!1}Ic=0},_m=[pM,mM,R_,b_,Gi+ac,Gi+rc,Gi+oc,Gi+sc,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],yf=_m.concat([Ro,Po,"boxSizing","max"+nl,"max"+P_,"position",Gi,nn,nn+oc,nn+rc,nn+ac,nn+sc]),EC=function(e,t,i){Ba(i);var r=e._gsap;if(r.spacerIsNative)Ba(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Mh=function(e,t,i,r){if(!e._gsap.swappedIn){for(var s=_m.length,o=t.style,a=e.style,l;s--;)l=_m[s],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[R_]=a[b_]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Ro]=ad(e,Yn)+cn,o[Po]=ad(e,fn)+cn,o[nn]=a[Gi]=a[mM]=a[pM]="0",Ba(r),a[Ro]=a["max"+nl]=i[Ro],a[Po]=a["max"+P_]=i[Po],a[nn]=i[nn],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},wC=/([A-Z])/g,Ba=function(e){if(e){var t=e.t.style,i=e.length,r=0,s,o;for((e.t._gsap||Ae.core.getCache(e.t)).uncache=1;r<i;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(wC,"-$1").toLowerCase())}},Au=function(e){for(var t=yf.length,i=e.style,r=[],s=0;s<t;s++)r.push(yf[s],i[yf[s]]);return r.t=e,r},TC=function(e,t,i){for(var r=[],s=e.length,o=i?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},Sf={left:0,top:0},Nv=function(e,t,i,r,s,o,a,l,c,u,d,f,p,v){In(e)&&(e=e(l)),Si(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?_f("0"+e.substr(3),i):0));var _=p?p.time():0,m,h,g;if(p&&p.seek(0),isNaN(e)||(e=+e),zl(e))p&&(e=Ae.utils.mapRange(p.scrollTrigger.start,p.scrollTrigger.end,0,f,e)),a&&vf(a,i,r,!0);else{In(t)&&(t=t(l));var x=(e||"0").split(" "),y,E,A,w;g=Jn(t,l)||yt,y=Gr(g)||{},(!y||!y.left&&!y.top)&&Wi(g).display==="none"&&(w=g.style.display,g.style.display="block",y=Gr(g),w?g.style.display=w:g.style.removeProperty("display")),E=_f(x[0],y[r.d]),A=_f(x[1]||"0",i),e=y[r.p]-c[r.p]-u+E+s-A,a&&vf(a,A,r,i-A<20||a._isStart&&A>20),i-=i-A}if(v&&(l[v]=e||-.001,e<0&&(e=0)),o){var R=e+i,M=o._isStart;m="scroll"+r.d2,vf(o,R,r,M&&R>20||!M&&(d?Math.max(yt[m],Ei[m]):o.parentNode[m])<=R+1),d&&(c=Gr(a),d&&(o.style[r.op.p]=c[r.op.p]-r.op.m-o._offset+cn))}return p&&g&&(m=Gr(g),p.seek(f),h=Gr(g),p._caScrollDist=m[r.p]-h[r.p],e=e/p._caScrollDist*f),p&&p.seek(_),p?e:Math.round(e)},AC=/(webkit|moz|length|cssText|inset)/i,Lv=function(e,t,i,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===yt){e._stOrig=s.cssText,a=Wi(e);for(o in a)!+o&&!AC.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=i,s.left=r}else s.cssText=e._stOrig;Ae.core.getCache(e).uncache=1,t.appendChild(e)}},SM=function(e,t,i){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,i&&i()),s=r,r=Math.round(o),r}},Cu=function(e,t,i){var r={};r[t.p]="+="+i,Ae.set(e,r)},Iv=function(e,t){var i=Ws(e,t),r="_scroll"+t.p2,s=function o(a,l,c,u,d){var f=o.tween,p=l.onComplete,v={};c=c||i();var _=SM(i,c,function(){f.kill(),o.tween=0});return d=u&&d||0,u=u||a-c,f&&f.kill(),l[r]=a,l.inherit=!1,l.modifiers=v,v[r]=function(){return _(c+u*f.ratio+d*f.ratio*f.ratio)},l.onUpdate=function(){at.cache++,o.tween&&Kr()},l.onComplete=function(){o.tween=0,p&&p.call(f)},f=o.tween=Ae.to(e,l),f};return e[r]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},_n(e,"wheel",i.wheelHandler),rt.isTouch&&_n(e,"touchmove",i.wheelHandler),s},rt=function(){function n(t,i){fa||n.register(Ae)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),hm(this),this.init(t,i)}var e=n.prototype;return e.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ol){this.update=this.refresh=this.kill=vr;return}i=Cv(Si(i)||zl(i)||i.nodeType?{trigger:i}:i,wu);var s=i,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,d=s.scrub,f=s.trigger,p=s.pin,v=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,h=s.onScrubComplete,g=s.onSnapComplete,x=s.once,y=s.snap,E=s.pinReparent,A=s.pinSpacer,w=s.containerAnimation,R=s.fastScrollEnd,M=s.preventOverlaps,S=i.horizontal||i.containerAnimation&&i.horizontal!==!1?Yn:fn,L=!d&&d!==0,F=Jn(i.scroller||ot),V=Ae.core.getCache(F),$=ko(F),W=("pinType"in i?i.pinType:Os(F,"pinType")||$&&"fixed")==="fixed",G=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],j=L&&i.toggleActions.split(" "),U="markers"in i?i.markers:wu.markers,q=$?0:parseFloat(Wi(F)["border"+S.p2+nl])||0,P=this,re=i.onRefreshInit&&function(){return i.onRefreshInit(P)},xe=gC(F,$,S),Ke=_C(F,$),Oe=0,Ve=0,K=0,J=Ws(F,S),pe,Pe,Ce,We,gt,N,Ye,Ue,De,O,st,ye,je,Qe,_t,D,T,B,Q,ee,Z,Se,le,be,he,oe,de,ke,Re,fe,Xe,I,se,ce,ge,ie,te,Ee,Be;if(P._startClamp=P._endClamp=!1,P._dir=S,m*=45,P.scroller=F,P.scroll=w?w.time.bind(w):J,We=J(),P.vars=i,r=r||i.animation,"refreshPriority"in i&&(oM=1,i.refreshPriority===-9999&&(lc=P)),V.tweenScroll=V.tweenScroll||{top:Iv(F,fn),left:Iv(F,Yn)},P.tweenTo=pe=V.tweenScroll[S.p],P.scrubDuration=function(me){se=zl(me)&&me,se?I?I.duration(me):I=Ae.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:se,paused:!0,onComplete:function(){return h&&h(P)}}):(I&&I.progress(1).kill(),I=0)},r&&(r.vars.lazy=!1,r._initted&&!P.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),P.animation=r.pause(),r.scrollTrigger=P,P.scrubDuration(d),fe=0,l||(l=r.vars.id)),y&&((!uo(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in yt.style&&Ae.set($?[yt,Ei]:F,{scrollBehavior:"auto"}),at.forEach(function(me){return In(me)&&me.target===($?Rt.scrollingElement||Ei:F)&&(me.smooth=!1)}),Ce=In(y.snapTo)?y.snapTo:y.snapTo==="labels"?xC(r):y.snapTo==="labelsDirectional"?yC(r):y.directional!==!1?function(me,He){return D_(y.snapTo)(me,Dn()-Ve<500?0:He.direction)}:Ae.utils.snap(y.snapTo),ce=y.duration||{min:.1,max:2},ce=uo(ce)?ic(ce.min,ce.max):ic(ce,ce),ge=Ae.delayedCall(y.delay||se/2||.1,function(){var me=J(),He=Dn()-Ve<500,Fe=pe.tween;if((He||Math.abs(P.getVelocity())<10)&&!Fe&&!Dd&&Oe!==me){var $e=(me-N)/Qe,qt=r&&!L?r.totalProgress():$e,tt=He?0:(qt-Xe)/(Dn()-Fl)*1e3||0,Ft=Ae.utils.clamp(-$e,1-$e,qo(tt/2)*tt/.185),Kt=$e+(y.inertia===!1?0:Ft),Dt,Tt,St=y,pi=St.onStart,Nt=St.onInterrupt,On=St.onComplete;if(Dt=Ce(Kt,P),zl(Dt)||(Dt=Kt),Tt=Math.max(0,Math.round(N+Dt*Qe)),me<=Ye&&me>=N&&Tt!==me){if(Fe&&!Fe._initted&&Fe.data<=qo(Tt-me))return;y.inertia===!1&&(Ft=Dt-$e),pe(Tt,{duration:ce(qo(Math.max(qo(Kt-qt),qo(Dt-qt))*.185/tt/.05||0)),ease:y.ease||"power3",data:qo(Tt-me),onInterrupt:function(){return ge.restart(!0)&&Nt&&Nt(P)},onComplete:function(){P.update(),Oe=J(),r&&!L&&(I?I.resetTo("totalProgress",Dt,r._tTime/r._tDur):r.progress(Dt)),fe=Xe=r&&!L?r.totalProgress():P.progress,g&&g(P),On&&On(P)}},me,Ft*Qe,Tt-me-Ft*Qe),pi&&pi(P,pe.tween)}}else P.isActive&&Oe!==me&&ge.restart(!0)}).pause()),l&&(mm[l]=P),f=P.trigger=Jn(f||p!==!0&&p),Be=f&&f._gsap&&f._gsap.stRevert,Be&&(Be=Be(P)),p=p===!0?f:Jn(p),Si(a)&&(a={targets:f,className:a}),p&&(v===!1||v===Gi||(v=!v&&p.parentNode&&p.parentNode.style&&Wi(p.parentNode).display==="flex"?!1:nn),P.pin=p,Pe=Ae.core.getCache(p),Pe.spacer?_t=Pe.pinState:(A&&(A=Jn(A),A&&!A.nodeType&&(A=A.current||A.nativeElement),Pe.spacerIsNative=!!A,A&&(Pe.spacerState=Au(A))),Pe.spacer=B=A||Rt.createElement("div"),B.classList.add("pin-spacer"),l&&B.classList.add("pin-spacer-"+l),Pe.pinState=_t=Au(p)),i.force3D!==!1&&Ae.set(p,{force3D:!0}),P.spacer=B=Pe.spacer,Re=Wi(p),be=Re[v+S.os2],ee=Ae.getProperty(p),Z=Ae.quickSetter(p,S.a,cn),Mh(p,B,Re),T=Au(p)),U){ye=uo(U)?Cv(U,bv):bv,O=Tu("scroller-start",l,F,S,ye,0),st=Tu("scroller-end",l,F,S,ye,0,O),Q=O["offset"+S.op.d2];var ht=Jn(Os(F,"content")||F);Ue=this.markerStart=Tu("start",l,ht,S,ye,Q,0,w),De=this.markerEnd=Tu("end",l,ht,S,ye,Q,0,w),w&&(Ee=Ae.quickSetter([Ue,De],S.a,cn)),!W&&!(Rr.length&&Os(F,"fixedMarkers")===!0)&&(vC($?yt:F),Ae.set([O,st],{force3D:!0}),oe=Ae.quickSetter(O,S.a,cn),ke=Ae.quickSetter(st,S.a,cn))}if(w){var ve=w.vars.onUpdate,Ne=w.vars.onUpdateParams;w.eventCallback("onUpdate",function(){P.update(0,0,1),ve&&ve.apply(w,Ne||[])})}if(P.previous=function(){return it[it.indexOf(P)-1]},P.next=function(){return it[it.indexOf(P)+1]},P.revert=function(me,He){if(!He)return P.kill(!0);var Fe=me!==!1||!P.enabled,$e=Pn;Fe!==P.isReverted&&(Fe&&(ie=Math.max(J(),P.scroll.rec||0),K=P.progress,te=r&&r.progress()),Ue&&[Ue,De,O,st].forEach(function(qt){return qt.style.display=Fe?"none":"block"}),Fe&&(Pn=P,P.update(Fe)),p&&(!E||!P.isActive)&&(Fe?EC(p,B,_t):Mh(p,B,Wi(p),he)),Fe||P.update(Fe),Pn=$e,P.isReverted=Fe)},P.refresh=function(me,He,Fe,$e){if(!((Pn||!P.enabled)&&!He)){if(p&&me&&Zi){_n(n,"scrollEnd",_M);return}!jn&&re&&re(P),Pn=P,pe.tween&&!Fe&&(pe.tween.kill(),pe.tween=0),I&&I.pause(),_&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren&&r.getChildren(!0,!0,!1).forEach(function(lt){return lt.vars.immediateRender&&lt.render(0,!0,!0)})),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var qt=xe(),tt=Ke(),Ft=w?w.duration():Er(F,S),Kt=Qe<=.01||!Qe,Dt=0,Tt=$e||0,St=uo(Fe)?Fe.end:i.end,pi=i.endTrigger||f,Nt=uo(Fe)?Fe.start:i.start||(i.start===0||!f?0:p?"0 0":"0 100%"),On=P.pinnedContainer=i.pinnedContainer&&Jn(i.pinnedContainer,P),Ui=f&&Math.max(0,it.indexOf(P))||0,ln=Ui,b,k,X,Y,z,ne,ue,Te,Me,ze,Ie,Le,Je;for(U&&uo(Fe)&&(Le=Ae.getProperty(O,S.p),Je=Ae.getProperty(st,S.p));ln-- >0;)ne=it[ln],ne.end||ne.refresh(0,1)||(Pn=P),ue=ne.pin,ue&&(ue===f||ue===p||ue===On)&&!ne.isReverted&&(ze||(ze=[]),ze.unshift(ne),ne.revert(!0,!0)),ne!==it[ln]&&(Ui--,ln--);for(In(Nt)&&(Nt=Nt(P)),Nt=Ev(Nt,"start",P),N=Nv(Nt,f,qt,S,J(),Ue,O,P,tt,q,W,Ft,w,P._startClamp&&"_startClamp")||(p?-.001:0),In(St)&&(St=St(P)),Si(St)&&!St.indexOf("+=")&&(~St.indexOf(" ")?St=(Si(Nt)?Nt.split(" ")[0]:"")+St:(Dt=_f(St.substr(2),qt),St=Si(Nt)?Nt:(w?Ae.utils.mapRange(0,w.duration(),w.scrollTrigger.start,w.scrollTrigger.end,N):N)+Dt,pi=f)),St=Ev(St,"end",P),Ye=Math.max(N,Nv(St||(pi?"100% 0":Ft),pi,qt,S,J()+Dt,De,st,P,tt,q,W,Ft,w,P._endClamp&&"_endClamp"))||-.001,Dt=0,ln=Ui;ln--;)ne=it[ln],ue=ne.pin,ue&&ne.start-ne._pinPush<=N&&!w&&ne.end>0&&(b=ne.end-(P._startClamp?Math.max(0,ne.start):ne.start),(ue===f&&ne.start-ne._pinPush<N||ue===On)&&isNaN(Nt)&&(Dt+=b*(1-ne.progress)),ue===p&&(Tt+=b));if(N+=Dt,Ye+=Dt,P._startClamp&&(P._startClamp+=Dt),P._endClamp&&!jn&&(P._endClamp=Ye||-.001,Ye=Math.min(Ye,Er(F,S))),Qe=Ye-N||(N-=.01)&&.001,Kt&&(K=Ae.utils.clamp(0,1,Ae.utils.normalize(N,Ye,ie))),P._pinPush=Tt,Ue&&Dt&&(b={},b[S.a]="+="+Dt,On&&(b[S.p]="-="+J()),Ae.set([Ue,De],b)),p&&!(pm&&P.end>=Er(F,S)))b=Wi(p),Y=S===fn,X=J(),Se=parseFloat(ee(S.a))+Tt,!Ft&&Ye>1&&(Ie=($?Rt.scrollingElement||Ei:F).style,Ie={style:Ie,value:Ie["overflow"+S.a.toUpperCase()]},$&&Wi(yt)["overflow"+S.a.toUpperCase()]!=="scroll"&&(Ie.style["overflow"+S.a.toUpperCase()]="scroll")),Mh(p,B,b),T=Au(p),k=Gr(p,!0),Te=W&&Ws(F,Y?Yn:fn)(),v?(he=[v+S.os2,Qe+Tt+cn],he.t=B,ln=v===nn?ad(p,S)+Qe+Tt:0,ln&&(he.push(S.d,ln+cn),B.style.flexBasis!=="auto"&&(B.style.flexBasis=ln+cn)),Ba(he),On&&it.forEach(function(lt){lt.pin===On&&lt.vars.pinSpacing!==!1&&(lt._subPinOffset=!0)}),W&&J(ie)):(ln=ad(p,S),ln&&B.style.flexBasis!=="auto"&&(B.style.flexBasis=ln+cn)),W&&(z={top:k.top+(Y?X-N:Te)+cn,left:k.left+(Y?Te:X-N)+cn,boxSizing:"border-box",position:"fixed"},z[Ro]=z["max"+nl]=Math.ceil(k.width)+cn,z[Po]=z["max"+P_]=Math.ceil(k.height)+cn,z[Gi]=z[Gi+oc]=z[Gi+rc]=z[Gi+ac]=z[Gi+sc]="0",z[nn]=b[nn],z[nn+oc]=b[nn+oc],z[nn+rc]=b[nn+rc],z[nn+ac]=b[nn+ac],z[nn+sc]=b[nn+sc],D=TC(_t,z,E),jn&&J(0)),r?(Me=r._initted,_h(1),r.render(r.duration(),!0,!0),le=ee(S.a)-Se+Qe+Tt,de=Math.abs(Qe-le)>1,W&&de&&D.splice(D.length-2,2),r.render(0,!0,!0),Me||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),_h(0)):le=Qe,Ie&&(Ie.value?Ie.style["overflow"+S.a.toUpperCase()]=Ie.value:Ie.style.removeProperty("overflow-"+S.a));else if(f&&J()&&!w)for(k=f.parentNode;k&&k!==yt;)k._pinOffset&&(N-=k._pinOffset,Ye-=k._pinOffset),k=k.parentNode;ze&&ze.forEach(function(lt){return lt.revert(!1,!0)}),P.start=N,P.end=Ye,We=gt=jn?ie:J(),!w&&!jn&&(We<ie&&J(ie),P.scroll.rec=0),P.revert(!1,!0),Ve=Dn(),ge&&(Oe=-1,ge.restart(!0)),Pn=0,r&&L&&(r._initted||te)&&r.progress()!==te&&r.progress(te||0,!0).render(r.time(),!0,!0),(Kt||K!==P.progress||w||_||r&&!r._initted)&&(r&&!L&&(r._initted||K||r.vars.immediateRender!==!1)&&r.totalProgress(w&&N<-.001&&!K?Ae.utils.normalize(N,Ye,0):K,!0),P.progress=Kt||(We-N)/Qe===K?0:K),p&&v&&(B._pinOffset=Math.round(P.progress*le)),I&&I.invalidate(),isNaN(Le)||(Le-=Ae.getProperty(O,S.p),Je-=Ae.getProperty(st,S.p),Cu(O,S,Le),Cu(Ue,S,Le-($e||0)),Cu(st,S,Je),Cu(De,S,Je-($e||0))),Kt&&!jn&&P.update(),u&&!jn&&!je&&(je=!0,u(P),je=!1)}},P.getVelocity=function(){return(J()-gt)/(Dn()-Fl)*1e3||0},P.endAnimation=function(){wl(P.callbackAnimation),r&&(I?I.progress(1):r.paused()?L||wl(r,P.direction<0,1):wl(r,r.reversed()))},P.labelToScroll=function(me){return r&&r.labels&&(N||P.refresh()||N)+r.labels[me]/r.duration()*Qe||0},P.getTrailing=function(me){var He=it.indexOf(P),Fe=P.direction>0?it.slice(0,He).reverse():it.slice(He+1);return(Si(me)?Fe.filter(function($e){return $e.vars.preventOverlaps===me}):Fe).filter(function($e){return P.direction>0?$e.end<=N:$e.start>=Ye})},P.update=function(me,He,Fe){if(!(w&&!Fe&&!me)){var $e=jn===!0?ie:P.scroll(),qt=me?0:($e-N)/Qe,tt=qt<0?0:qt>1?1:qt||0,Ft=P.progress,Kt,Dt,Tt,St,pi,Nt,On,Ui;if(He&&(gt=We,We=w?J():$e,y&&(Xe=fe,fe=r&&!L?r.totalProgress():tt)),m&&p&&!Pn&&!yu&&Zi&&(!tt&&N<$e+($e-gt)/(Dn()-Fl)*m?tt=1e-4:tt===1&&Ye>$e+($e-gt)/(Dn()-Fl)*m&&(tt=.9999)),tt!==Ft&&P.enabled){if(Kt=P.isActive=!!tt&&tt<1,Dt=!!Ft&&Ft<1,Nt=Kt!==Dt,pi=Nt||!!tt!=!!Ft,P.direction=tt>Ft?1:-1,P.progress=tt,pi&&!Pn&&(Tt=tt&&!Ft?0:tt===1?1:Ft===1?2:3,L&&(St=!Nt&&j[Tt+1]!=="none"&&j[Tt+1]||j[Tt],Ui=r&&(St==="complete"||St==="reset"||St in r))),M&&(Nt||Ui)&&(Ui||d||!r)&&(In(M)?M(P):P.getTrailing(M).forEach(function(X){return X.endAnimation()})),L||(I&&!Pn&&!yu?(I._dp._time-I._start!==I._time&&I.render(I._dp._time-I._start),I.resetTo?I.resetTo("totalProgress",tt,r._tTime/r._tDur):(I.vars.totalProgress=tt,I.invalidate().restart())):r&&r.totalProgress(tt,!!(Pn&&(Ve||me)))),p){if(me&&v&&(B.style[v+S.os2]=be),!W)Z(kl(Se+le*tt));else if(pi){if(On=!me&&tt>Ft&&Ye+1>$e&&$e+1>=Er(F,S),E)if(!me&&(Kt||On)){var ln=Gr(p,!0),b=$e-N;Lv(p,yt,ln.top+(S===fn?b:0)+cn,ln.left+(S===fn?0:b)+cn)}else Lv(p,B);Ba(Kt||On?D:T),de&&tt<1&&Kt||Z(Se+(tt===1&&!On?le:0))}}y&&!pe.tween&&!Pn&&!yu&&ge.restart(!0),a&&(Nt||x&&tt&&(tt<1||!vh))&&Lc(a.targets).forEach(function(X){return X.classList[Kt||x?"add":"remove"](a.className)}),o&&!L&&!me&&o(P),pi&&!Pn?(L&&(Ui&&(St==="complete"?r.pause().totalProgress(1):St==="reset"?r.restart(!0).pause():St==="restart"?r.restart(!0):r[St]()),o&&o(P)),(Nt||!vh)&&(c&&Nt&&yh(P,c),G[Tt]&&yh(P,G[Tt]),x&&(tt===1?P.kill(!1,1):G[Tt]=0),Nt||(Tt=tt===1?1:3,G[Tt]&&yh(P,G[Tt]))),R&&!Kt&&Math.abs(P.getVelocity())>(zl(R)?R:2500)&&(wl(P.callbackAnimation),I?I.progress(1):wl(r,St==="reverse"?1:!tt,1))):L&&o&&!Pn&&o(P)}if(ke){var k=w?$e/w.duration()*(w._caScrollDist||0):$e;oe(k+(O._isFlipped?1:0)),ke(k)}Ee&&Ee(-$e/w.duration()*(w._caScrollDist||0))}},P.enable=function(me,He){P.enabled||(P.enabled=!0,_n(F,"resize",Bl),$||_n(F,"scroll",Ko),re&&_n(n,"refreshInit",re),me!==!1&&(P.progress=K=0,We=gt=Oe=J()),He!==!1&&P.refresh())},P.getTween=function(me){return me&&pe?pe.tween:I},P.setPositions=function(me,He,Fe,$e){if(w){var qt=w.scrollTrigger,tt=w.duration(),Ft=qt.end-qt.start;me=qt.start+Ft*me/tt,He=qt.start+Ft*He/tt}P.refresh(!1,!1,{start:wv(me,Fe&&!!P._startClamp),end:wv(He,Fe&&!!P._endClamp)},$e),P.update()},P.adjustPinSpacing=function(me){if(he&&me){var He=he.indexOf(S.d)+1;he[He]=parseFloat(he[He])+me+cn,he[1]=parseFloat(he[1])+me+cn,Ba(he)}},P.disable=function(me,He){if(P.enabled&&(me!==!1&&P.revert(!0,!0),P.enabled=P.isActive=!1,He||I&&I.pause(),ie=0,Pe&&(Pe.uncache=1),re&&gn(n,"refreshInit",re),ge&&(ge.pause(),pe.tween&&pe.tween.kill()&&(pe.tween=0)),!$)){for(var Fe=it.length;Fe--;)if(it[Fe].scroller===F&&it[Fe]!==P)return;gn(F,"resize",Bl),$||gn(F,"scroll",Ko)}},P.kill=function(me,He){P.disable(me,He),I&&!He&&I.kill(),l&&delete mm[l];var Fe=it.indexOf(P);Fe>=0&&it.splice(Fe,1),Fe===Wn&&xf>0&&Wn--,Fe=0,it.forEach(function($e){return $e.scroller===P.scroller&&(Fe=1)}),Fe||jn||(P.scroll.rec=0),r&&(r.scrollTrigger=null,me&&r.revert({kill:!1}),He||r.kill()),Ue&&[Ue,De,O,st].forEach(function($e){return $e.parentNode&&$e.parentNode.removeChild($e)}),lc===P&&(lc=0),p&&(Pe&&(Pe.uncache=1),Fe=0,it.forEach(function($e){return $e.pin===p&&Fe++}),Fe||(Pe.spacer=0)),i.onKill&&i.onKill(P)},it.push(P),P.enable(!1,!1),Be&&Be(P),r&&r.add&&!Qe){var Ze=P.update;P.update=function(){P.update=Ze,at.cache++,N||Ye||P.refresh()},Ae.delayedCall(.01,P.update),Qe=.01,N=Ye=0}else P.refresh();p&&MC()},n.register=function(i){return fa||(Ae=i||fM(),uM()&&window.document&&n.enable(),fa=Ol),fa},n.defaults=function(i){if(i)for(var r in i)wu[r]=i[r];return wu},n.disable=function(i,r){Ol=0,it.forEach(function(o){return o[r?"kill":"disable"](i)}),gn(ot,"wheel",Ko),gn(Rt,"scroll",Ko),clearInterval(xu),gn(Rt,"touchcancel",vr),gn(yt,"touchstart",vr),Mu(gn,Rt,"pointerdown,touchstart,mousedown",Tv),Mu(gn,Rt,"pointerup,touchend,mouseup",Av),sd.kill(),Su(gn);for(var s=0;s<at.length;s+=3)Eu(gn,at[s],at[s+1]),Eu(gn,at[s],at[s+2])},n.enable=function(){if(ot=window,Rt=document,Ei=Rt.documentElement,yt=Rt.body,Ae&&(Lc=Ae.utils.toArray,ic=Ae.utils.clamp,hm=Ae.core.context||vr,_h=Ae.core.suppressOverwrites||vr,A_=ot.history.scrollRestoration||"auto",gm=ot.pageYOffset||0,Ae.core.globals("ScrollTrigger",n),yt)){Ol=1,za=document.createElement("div"),za.style.height="100vh",za.style.position="absolute",yM(),mC(),en.register(Ae),n.isTouch=en.isTouch,ps=en.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),dm=en.isTouch===1,_n(ot,"wheel",Ko),T_=[ot,Rt,Ei,yt],Ae.matchMedia?(n.matchMedia=function(c){var u=Ae.matchMedia(),d;for(d in c)u.add(d,c[d]);return u},Ae.addEventListener("matchMediaInit",function(){return N_()}),Ae.addEventListener("matchMediaRevert",function(){return vM()}),Ae.addEventListener("matchMedia",function(){yo(0,1),Bo("matchMedia")}),Ae.matchMedia().add("(orientation: portrait)",function(){return Sh(),Sh})):console.warn("Requires GSAP 3.11.0 or later"),Sh(),_n(Rt,"scroll",Ko);var i=yt.hasAttribute("style"),r=yt.style,s=r.borderTopStyle,o=Ae.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",a=Gr(yt),fn.m=Math.round(a.top+fn.sc())||0,Yn.m=Math.round(a.left+Yn.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),i||(yt.setAttribute("style",""),yt.removeAttribute("style")),xu=setInterval(Rv,250),Ae.delayedCall(.5,function(){return yu=0}),_n(Rt,"touchcancel",vr),_n(yt,"touchstart",vr),Mu(_n,Rt,"pointerdown,touchstart,mousedown",Tv),Mu(_n,Rt,"pointerup,touchend,mouseup",Av),fm=Ae.utils.checkPrefix("transform"),yf.push(fm),fa=Dn(),sd=Ae.delayedCall(.2,yo).pause(),da=[Rt,"visibilitychange",function(){var c=ot.innerWidth,u=ot.innerHeight;Rt.hidden?(Sv=c,Mv=u):(Sv!==c||Mv!==u)&&Bl()},Rt,"DOMContentLoaded",yo,ot,"load",yo,ot,"resize",Bl],Su(_n),it.forEach(function(c){return c.enable(0,1)}),l=0;l<at.length;l+=3)Eu(gn,at[l],at[l+1]),Eu(gn,at[l],at[l+2])}},n.config=function(i){"limitCallbacks"in i&&(vh=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(xu)||(xu=r)&&setInterval(Rv,r),"ignoreMobileResize"in i&&(dm=n.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(Su(gn)||Su(_n,i.autoRefreshEvents||"none"),aM=(i.autoRefreshEvents+"").indexOf("resize")===-1)},n.scrollerProxy=function(i,r){var s=Jn(i),o=at.indexOf(s),a=ko(s);~o&&at.splice(o,a?6:2),r&&(a?Rr.unshift(ot,r,yt,r,Ei,r):Rr.unshift(s,r))},n.clearMatchMedia=function(i){it.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},n.isInViewport=function(i,r,s){var o=(Si(i)?Jn(i):i).getBoundingClientRect(),a=o[s?Ro:Po]*r||0;return s?o.right-a>0&&o.left+a<ot.innerWidth:o.bottom-a>0&&o.top+a<ot.innerHeight},n.positionInViewport=function(i,r,s){Si(i)&&(i=Jn(i));var o=i.getBoundingClientRect(),a=o[s?Ro:Po],l=r==null?a/2:r in ld?ld[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/ot.innerWidth:(o.top+l)/ot.innerHeight},n.killAll=function(i){if(it.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var r=zo.killAll||[];zo={},r.forEach(function(s){return s()})}},n}();rt.version="3.13.0";rt.saveStyles=function(n){return n?Lc(n).forEach(function(e){if(e&&e.style){var t=xi.indexOf(e);t>=0&&xi.splice(t,5),xi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ae.core.getCache(e),hm())}}):xi};rt.revert=function(n,e){return N_(!n,e)};rt.create=function(n,e){return new rt(n,e)};rt.refresh=function(n){return n?Bl(!0):(fa||rt.register())&&yo(!0)};rt.update=function(n){return++at.cache&&Kr(n===!0?2:0)};rt.clearScrollMemory=xM;rt.maxScroll=function(n,e){return Er(n,e?Yn:fn)};rt.getScrollFunc=function(n,e){return Ws(Jn(n),e?Yn:fn)};rt.getById=function(n){return mm[n]};rt.getAll=function(){return it.filter(function(n){return n.vars.id!=="ScrollSmoother"})};rt.isScrolling=function(){return!!Zi};rt.snapDirectional=D_;rt.addEventListener=function(n,e){var t=zo[n]||(zo[n]=[]);~t.indexOf(e)||t.push(e)};rt.removeEventListener=function(n,e){var t=zo[n],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};rt.batch=function(n,e){var t=[],i={},r=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var d=[],f=[],p=Ae.delayedCall(r,function(){u(d,f),d=[],f=[]}).pause();return function(v){d.length||p.restart(!0),d.push(v.trigger),f.push(v),s<=d.length&&p.progress(1)}},a;for(a in e)i[a]=a.substr(0,2)==="on"&&In(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return In(s)&&(s=s(),_n(rt,"refresh",function(){return s=e.batchMax()})),Lc(n).forEach(function(l){var c={};for(a in i)c[a]=i[a];c.trigger=l,t.push(rt.create(c))}),t};var Uv=function(e,t,i,r){return t>r?e(r):t<0&&e(0),i>r?(r-t)/(i-t):i<0?t/(t-i):1},Eh=function n(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(en.isTouch?" pinch-zoom":""):"none",e===Ei&&n(yt,t)},bu={auto:1,scroll:1},CC=function(e){var t=e.event,i=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Ae.core.getCache(s),a=Dn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==yt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(bu[(l=Wi(s)).overflowY]||bu[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==i&&!ko(s)&&(bu[(l=Wi(s)).overflowY]||bu[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},MM=function(e,t,i,r){return en.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&CC,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&_n(Rt,en.eventTypes[0],Ov,!1,!0)},onDisable:function(){return gn(Rt,en.eventTypes[0],Ov,!0)}})},bC=/(input|label|select|textarea)/i,Fv,Ov=function(e){var t=bC.test(e.target.tagName);(t||Fv)&&(e._gsapAllow=!0,Fv=t)},RC=function(e){uo(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=Jn(e.target)||Ei,u=Ae.core.globals().ScrollSmoother,d=u&&u.get(),f=ps&&(e.content&&Jn(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),p=Ws(c,fn),v=Ws(c,Yn),_=1,m=(en.isTouch&&ot.visualViewport?ot.visualViewport.scale*ot.visualViewport.width:ot.outerWidth)/ot.innerWidth,h=0,g=In(r)?function(){return r(a)}:function(){return r||2.8},x,y,E=MM(c,e.type,!0,s),A=function(){return y=!1},w=vr,R=vr,M=function(){l=Er(c,fn),R=ic(ps?1:0,l),i&&(w=ic(0,Er(c,Yn))),x=Do},S=function(){f._gsap.y=kl(parseFloat(f._gsap.y)+p.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",p.offset=p.cacheID=0},L=function(){if(y){requestAnimationFrame(A);var U=kl(a.deltaY/2),q=R(p.v-U);if(f&&q!==p.v+p.offset){p.offset=q-p.v;var P=kl((parseFloat(f&&f._gsap.y)||0)-p.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",f._gsap.y=P+"px",p.cacheID=at.cache,Kr()}return!0}p.offset&&S(),y=!0},F,V,$,W,G=function(){M(),F.isActive()&&F.vars.scrollY>l&&(p()>l?F.progress(1)&&p(l):F.resetTo("scrollY",l))};return f&&Ae.set(f,{y:"+=0"}),e.ignoreCheck=function(j){return ps&&j.type==="touchmove"&&L()||_>1.05&&j.type!=="touchstart"||a.isGesturing||j.touches&&j.touches.length>1},e.onPress=function(){y=!1;var j=_;_=kl((ot.visualViewport&&ot.visualViewport.scale||1)/m),F.pause(),j!==_&&Eh(c,_>1.01?!0:i?!1:"x"),V=v(),$=p(),M(),x=Do},e.onRelease=e.onGestureStart=function(j,U){if(p.offset&&S(),!U)W.restart(!0);else{at.cache++;var q=g(),P,re;i&&(P=v(),re=P+q*.05*-j.velocityX/.227,q*=Uv(v,P,re,Er(c,Yn)),F.vars.scrollX=w(re)),P=p(),re=P+q*.05*-j.velocityY/.227,q*=Uv(p,P,re,Er(c,fn)),F.vars.scrollY=R(re),F.invalidate().duration(q).play(.01),(ps&&F.vars.scrollY>=l||P>=l-1)&&Ae.to({},{onUpdate:G,duration:q})}o&&o(j)},e.onWheel=function(){F._ts&&F.pause(),Dn()-h>1e3&&(x=0,h=Dn())},e.onChange=function(j,U,q,P,re){if(Do!==x&&M(),U&&i&&v(w(P[2]===U?V+(j.startX-j.x):v()+U-P[1])),q){p.offset&&S();var xe=re[2]===q,Ke=xe?$+j.startY-j.y:p()+q-re[1],Oe=R(Ke);xe&&Ke!==Oe&&($+=Oe-Ke),p(Oe)}(q||U)&&Kr()},e.onEnable=function(){Eh(c,i?!1:"x"),rt.addEventListener("refresh",G),_n(ot,"resize",G),p.smooth&&(p.target.style.scrollBehavior="auto",p.smooth=v.smooth=!1),E.enable()},e.onDisable=function(){Eh(c,!0),gn(ot,"resize",G),rt.removeEventListener("refresh",G),E.kill()},e.lockAxis=e.lockAxis!==!1,a=new en(e),a.iOS=ps,ps&&!p()&&p(1),ps&&Ae.ticker.add(vr),W=a._dc,F=Ae.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:SM(p,p(),function(){return F.pause()})},onUpdate:Kr,onComplete:W.vars.onComplete}),a};rt.sort=function(n){if(In(n))return it.sort(n);var e=ot.pageYOffset||0;return rt.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+ot.innerHeight}),it.sort(n||function(t,i){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};rt.observe=function(n){return new en(n)};rt.normalizeScroll=function(n){if(typeof n>"u")return Hn;if(n===!0&&Hn)return Hn.enable();if(n===!1){Hn&&Hn.kill(),Hn=n;return}var e=n instanceof en?n:RC(n);return Hn&&Hn.target===e.target&&Hn.kill(),ko(e.target)&&(Hn=e),e};rt.core={_getVelocityProp:um,_inputObserver:MM,_scrollers:at,_proxies:Rr,bridge:{ss:function(){Zi||Bo("scrollStart"),Zi=Dn()},ref:function(){return Pn}}};fM()&&Ae.registerPlugin(rt);ti.registerPlugin(rt);const PC=()=>{const n=qe.useRef(null);qe.useEffect(()=>{if(n.current){const t=ti.context(()=>{ti.fromTo(".about-title",{y:50,opacity:0},{y:0,opacity:1,duration:.8,ease:"power3.out",scrollTrigger:{trigger:".about-title",start:"top 80%",toggleActions:"play none none reverse"}}),ti.utils.toArray(".about-text").forEach((i,r)=>{ti.fromTo(i,{y:30,opacity:0},{y:0,opacity:1,duration:.6,ease:"power3.out",delay:r*.1,scrollTrigger:{trigger:i,start:"top 85%",toggleActions:"play none none reverse"}})}),ti.utils.toArray(".about-card").forEach((i,r)=>{ti.fromTo(i,{y:40,opacity:0,scale:.95},{y:0,opacity:1,scale:1,duration:.6,ease:"power3.out",delay:r*.1,scrollTrigger:{trigger:i,start:"top 90%",toggleActions:"play none none reverse"}})})},n);return()=>t.revert()}},[]);const e=[{icon:XT,title:"Strategic Vision",description:"We align digital solutions with your business objectives for maximum impact."},{icon:nv,title:"Innovation First",description:"Cutting-edge technology and creative thinking drive every project we deliver."},{icon:YT,title:"Collaborative Approach",description:"Your success is our success. We work as an extension of your team."},{icon:RT,title:"Excellence Delivered",description:"Award-winning designs and development that exceed industry standards."}];return C.jsxs("section",{id:"about",ref:n,className:"py-20 relative",children:[C.jsx("div",{className:"container mx-auto px-6",children:C.jsxs("div",{className:"max-w-6xl mx-auto",children:[C.jsxs("div",{className:"text-center mb-16",children:[C.jsx("h2",{className:"about-title text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text font-space-grotesk",children:"About Nextify"}),C.jsx("p",{className:"about-text text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed",children:"We're a forward-thinking digital agency that transforms ambitious ideas into extraordinary digital experiences through innovation, creativity, and technical excellence."})]}),C.jsxs("div",{className:"grid lg:grid-cols-2 gap-16 items-center mb-20",children:[C.jsxs("div",{className:"space-y-6",children:[C.jsxs("div",{className:"about-text",children:[C.jsx("h3",{className:"text-2xl md:text-3xl font-bold text-white mb-4",children:"Pioneering Digital Excellence Since 2019"}),C.jsx("p",{className:"text-gray-300 text-lg leading-relaxed mb-6",children:"Founded with a vision to revolutionize digital experiences, Nextify has grown from a passionate startup to a recognized leader in cutting-edge web development and digital strategy."}),C.jsx("p",{className:"text-gray-300 text-lg leading-relaxed",children:"Our team of creative designers, skilled developers, and strategic thinkers work collaboratively to deliver solutions that not only meet today's needs but anticipate tomorrow's opportunities."})]}),C.jsxs("div",{className:"about-text grid grid-cols-2 gap-6 pt-8",children:[C.jsxs("div",{className:"text-center",children:[C.jsx("div",{className:"text-4xl font-bold gradient-text mb-2",children:"500+"}),C.jsx("div",{className:"text-gray-400",children:"Projects Delivered"})]}),C.jsxs("div",{className:"text-center",children:[C.jsx("div",{className:"text-4xl font-bold gradient-text mb-2",children:"98%"}),C.jsx("div",{className:"text-gray-400",children:"Client Satisfaction"})]})]})]}),C.jsx("div",{className:"about-text relative",children:C.jsx("div",{className:"glass-card p-8 hover-tilt",children:C.jsxs("div",{className:"space-y-6",children:[C.jsxs("div",{className:"flex items-center space-x-4",children:[C.jsx("div",{className:"w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 flex items-center justify-center",children:C.jsx(nv,{className:"w-6 h-6 text-white"})}),C.jsx("h4",{className:"text-xl font-semibold text-white",children:"Our Mission"})]}),C.jsxs("ul",{className:"text-gray-300 leading-relaxed list-disc list-inside",children:[C.jsx("li",{children:"Provide digital solutions that help small businesses thrive"}),C.jsx("li",{children:"Bridge students' skills with real business needs"}),C.jsx("li",{children:"Create hands-on learning and product innovation"}),C.jsx("li",{children:"Deliver technology with social responsibility"})]})]})})})]}),C.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-4 gap-8",children:e.map((t,i)=>C.jsxs("div",{className:"about-card glass-card p-8 hover-tilt hover-glow group",children:[C.jsx("div",{className:"mb-6",children:C.jsx("div",{className:"w-16 h-16 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-300",children:C.jsx(t.icon,{className:"w-8 h-8 text-white"})})}),C.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:t.title}),C.jsx("p",{className:"text-gray-300 leading-relaxed",children:t.description})]},i))})]})}),C.jsxs("div",{className:"absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden",children:[C.jsx("div",{className:"absolute top-20 right-10 w-32 h-32 rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20 blur-3xl animate-float"}),C.jsx("div",{className:"absolute bottom-20 left-10 w-40 h-40 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-400/20 blur-3xl animate-float",style:{animationDelay:"1.5s"}})]})]})};ti.registerPlugin(rt);const L_=()=>{qe.useEffect(()=>(ti.utils.toArray(".fade-up, .fade-left, .fade-right, .fade-scale").forEach(e=>{const t=e.classList.contains("fade-left")?{x:-50}:e.classList.contains("fade-right")?{x:50}:e.classList.contains("fade-scale")?{scale:.8}:{y:50};ti.fromTo(e,{opacity:0,...t},{opacity:1,x:0,y:0,scale:1,duration:.8,ease:"power3.out",scrollTrigger:{trigger:e,start:"top 85%",toggleActions:"play none none reverse"}})}),()=>{rt.getAll().forEach(e=>e.kill())}),[])},DC=()=>{const n=qe.useRef(null);L_();const[e,t]=qe.useState(null),i=[{icon:OT,title:"Web Development",description:"Custom websites and web applications built with cutting-edge technologies.",features:["React & Next.js","Node.js Backend","Database Design","API Integration","Performance Optimization"],gradient:"from-purple-400 to-pink-400"},{icon:WT,title:"Mobile Apps",description:"Native and cross-platform mobile applications for iOS and Android.",features:["React Native","Flutter Development","Native iOS/Android","App Store Optimization","Push Notifications"],gradient:"from-cyan-400 to-blue-400"},{icon:GT,title:"E-Commerce",description:"Complete e-commerce solutions with secure payment processing.",features:["Shopify Development","WooCommerce","Payment Integration","Inventory Management","Analytics Dashboard"],gradient:"from-green-400 to-emerald-400"},{icon:kT,title:"UI/UX Design",description:"User-centered design that creates engaging and intuitive experiences.",features:["User Research","Wireframing","Prototype Design","Design Systems","Usability Testing"],gradient:"from-orange-400 to-red-400"},{icon:VT,title:"SEO Optimization",description:"Comprehensive SEO strategies to improve your online visibility.",features:["Keyword Research","On-Page SEO","Technical SEO","Content Strategy","Performance Tracking"],gradient:"from-indigo-400 to-purple-400"},{icon:PT,title:"Digital Marketing",description:"Data-driven marketing campaigns that deliver measurable results.",features:["Social Media Marketing","PPC Campaigns","Email Marketing","Content Marketing","Analytics & Reporting"],gradient:"from-pink-400 to-rose-400"}],r=o=>{t(o),document.body.style.overflow="hidden"},s=()=>{t(null),document.body.style.overflow="auto"};return C.jsxs(C.Fragment,{children:[C.jsxs("section",{id:"services",ref:n,className:"py-20 relative",children:[C.jsx("div",{className:"container mx-auto px-6",children:C.jsxs("div",{className:"max-w-6xl mx-auto",children:[C.jsxs("div",{className:"text-center mb-16",children:[C.jsx("h2",{className:"fade-up text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text font-space-grotesk",children:"Our Services"}),C.jsx("p",{className:"fade-up text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed",children:"Comprehensive digital solutions tailored to elevate your business and create exceptional user experiences across all platforms."})]}),C.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:i.map((o,a)=>C.jsxs("div",{className:"fade-up glass-card p-8 hover-tilt hover-glow group cursor-pointer",onClick:()=>r(o),children:[C.jsx("div",{className:"mb-6",children:C.jsx("div",{className:`w-16 h-16 rounded-full bg-gradient-to-r ${o.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`,children:C.jsx(o.icon,{className:"w-8 h-8 text-white"})})}),C.jsx("h3",{className:"text-2xl font-semibold text-white mb-4 group-hover:gradient-text transition-all duration-300",children:o.title}),C.jsx("p",{className:"text-gray-300 leading-relaxed mb-6",children:o.description}),C.jsxs("div",{className:"flex items-center text-cyan-400 group-hover:text-white transition-colors duration-300",children:[C.jsx("span",{className:"font-medium",children:"Learn More"}),C.jsx(r_,{className:"w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"})]})]},a))}),C.jsx("div",{className:"fade-up text-center mt-16",children:C.jsxs("div",{className:"glass-card p-8 hover-glow",children:[C.jsx("h3",{className:"text-3xl font-bold text-white mb-4",children:"Ready to Start Your Project?"}),C.jsx("p",{className:"text-gray-300 mb-8 max-w-2xl mx-auto",children:"Let's discuss how we can bring your vision to life with our comprehensive digital solutions."}),C.jsx("button",{className:"btn-primary hover-tilt",children:"Get Free Consultation"})]})})]})}),C.jsxs("div",{className:"absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden",children:[C.jsx("div",{className:"absolute top-40 left-10 w-24 h-24 rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20 blur-2xl animate-float"}),C.jsx("div",{className:"absolute bottom-40 right-10 w-32 h-32 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-400/20 blur-3xl animate-float",style:{animationDelay:"2s"}})]})]}),e&&C.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm",children:C.jsxs("div",{className:"glass-card p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto",children:[C.jsxs("div",{className:"flex items-center justify-between mb-6",children:[C.jsxs("div",{className:"flex items-center space-x-4",children:[C.jsx("div",{className:`w-12 h-12 rounded-full bg-gradient-to-r ${e.gradient} flex items-center justify-center`,children:C.jsx(e.icon,{className:"w-6 h-6 text-white"})}),C.jsx("h3",{className:"text-2xl font-bold text-white",children:e.title})]}),C.jsx("button",{onClick:s,className:"p-2 text-gray-400 hover:text-white transition-colors duration-300",children:C.jsx(o_,{className:"w-6 h-6"})})]}),C.jsx("p",{className:"text-gray-300 mb-8 text-lg leading-relaxed",children:e.description}),C.jsx("h4",{className:"text-xl font-semibold text-white mb-4",children:"What's Included:"}),C.jsx("ul",{className:"space-y-3 mb-8",children:e.features.map((o,a)=>C.jsxs("li",{className:"flex items-center text-gray-300",children:[C.jsx("div",{className:"w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 mr-3"}),o]},a))}),C.jsxs("div",{className:"flex flex-col sm:flex-row gap-4",children:[C.jsx("button",{className:"btn-primary flex-1",children:"Get Started"}),C.jsx("button",{onClick:s,className:"btn-secondary flex-1",children:"Close"})]})]})})]})};var vm=new Map,Ru=new WeakMap,kv=0,NC=void 0;function LC(n){return n?(Ru.has(n)||(kv+=1,Ru.set(n,kv.toString())),Ru.get(n)):"0"}function IC(n){return Object.keys(n).sort().filter(e=>n[e]!==void 0).map(e=>`${e}_${e==="root"?LC(n.root):n[e]}`).toString()}function UC(n){const e=IC(n);let t=vm.get(e);if(!t){const i=new Map;let r;const s=new IntersectionObserver(o=>{o.forEach(a=>{var l;const c=a.isIntersecting&&r.some(u=>a.intersectionRatio>=u);n.trackVisibility&&typeof a.isVisible>"u"&&(a.isVisible=c),(l=i.get(a.target))==null||l.forEach(u=>{u(c,a)})})},n);r=s.thresholds||(Array.isArray(n.threshold)?n.threshold:[n.threshold||0]),t={id:e,observer:s,elements:i},vm.set(e,t)}return t}function FC(n,e,t={},i=NC){if(typeof window.IntersectionObserver>"u"&&i!==void 0){const l=n.getBoundingClientRect();return e(i,{isIntersecting:i,target:n,intersectionRatio:typeof t.threshold=="number"?t.threshold:0,time:0,boundingClientRect:l,intersectionRect:l,rootBounds:l}),()=>{}}const{id:r,observer:s,elements:o}=UC(t),a=o.get(n)||[];return o.has(n)||o.set(n,a),a.push(e),s.observe(n),function(){a.splice(a.indexOf(e),1),a.length===0&&(o.delete(n),s.unobserve(n)),o.size===0&&(s.disconnect(),vm.delete(r))}}function OC({threshold:n,delay:e,trackVisibility:t,rootMargin:i,root:r,triggerOnce:s,skip:o,initialInView:a,fallbackInView:l,onChange:c}={}){var u;const[d,f]=qe.useState(null),p=qe.useRef(c),[v,_]=qe.useState({inView:!!a,entry:void 0});p.current=c,qe.useEffect(()=>{if(o||!d)return;let x;return x=FC(d,(y,E)=>{_({inView:y,entry:E}),p.current&&p.current(y,E),E.isIntersecting&&s&&x&&(x(),x=void 0)},{root:r,rootMargin:i,threshold:n,trackVisibility:t,delay:e},l),()=>{x&&x()}},[Array.isArray(n)?n.toString():n,d,r,i,s,o,t,l,e]);const m=(u=v.entry)==null?void 0:u.target,h=qe.useRef(void 0);!d&&m&&!s&&!o&&h.current!==m&&(h.current=m,_({inView:!!a,entry:void 0}));const g=[f,v.inView,v.entry];return g.ref=g[0],g.inView=g[1],g.entry=g[2],g}const kC=()=>{const n=qe.useRef(null),[e,t]=OC({threshold:.3,triggerOnce:!0}),[i]=qe.useState([{name:"Praveen MT",role:"Lead, Technical Operations",bio:"Passionate about building scalable tech solutions.",image:"/Nextify//team/praveen.jpeg",social:{github:"https://github.com/ReverseEngineeringDude",linkedin:"https://www.linkedin.com/in/redbytesec",twitter:"https://x.com/RedByteSec",instagram:"https://instagram.com/red_byte.sec"}},{name:"Krishna Priya",role:"Design Lead",bio:"Creating beautiful and functional user experiences.",image:"/Nextify//team/krishnapriya.jpeg",social:{linkedin:"#",twitter:"#",instagram:"https://www.instagram.com/krshna_pria"}},{name:"Prarthana",role:"Documentation Engineer",bio:"Creating and maintaining clear and concise documentation.",image:"/Nextify//team/prarthana.jpeg",social:{github:"#",linkedin:"#",instagram:"https://www.instagram.com/prarthanaa_a___"}},{name:"Abhinav Krishna",role:"Financial Strategist",bio:"Driving growth through data-driven financial strategies.",image:"/Nextify//team/abhinav.jpeg",social:{linkedin:"#",twitter:"#",instagram:"https://www.instagram.com/ab.hinv"}},{name:"Mrudul Dev",role:"Marketing and Finance",bio:"Driving growth through data-driven marketing strategies.",image:"/Nextify//team/mruduldev.jpeg",social:{github:"#",linkedin:"#",instagram:"https://www.instagram.com/mrudhhll"}}]);return qe.useEffect(()=>{t&&n.current&&ti.timeline().fromTo(".team-card",{y:50,opacity:0,scale:.9},{y:0,opacity:1,scale:1,duration:.8,ease:"power3.out",stagger:.2})},[t]),C.jsxs("section",{id:"team",ref:n,className:"relative py-20 overflow-hidden",children:[C.jsxs("div",{ref:e,className:"container mx-auto px-6 relative z-10",children:[C.jsxs("div",{className:"text-center mb-16",children:[C.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-white mb-4",children:"Our Team"}),C.jsx("p",{className:"text-lg text-gray-300 max-w-2xl mx-auto",children:"Meet the passionate professionals driving innovation and delivering excellence."})]}),C.jsx("div",{className:"grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-center items-start",children:i.map((r,s)=>C.jsxs("div",{className:"team-card card",children:[C.jsxs("div",{className:"profile-pic",children:[C.jsx("img",{src:r.image,alt:r.name}),C.jsx("span",{className:"name",children:r.name})]}),C.jsxs("div",{className:"bottom",children:[C.jsxs("div",{className:"content",children:[C.jsx("span",{className:"about-me",children:r.role}),C.jsx("p",{className:"about-me",children:r.bio})]}),C.jsx("div",{className:"bottom-bottom",children:C.jsx("div",{className:"social-links-container",children:Object.entries(r.social).map(([o,a])=>a?C.jsx("a",{href:a,target:"_blank",rel:"noopener noreferrer",children:C.jsx("span",{className:"social-icon",children:o})},o):null)})})]})]},s))})]}),C.jsx("div",{className:"absolute top-20 right-10 w-40 h-40 bg-pink-300/40 blur-3xl rounded-full animate-pulse"}),C.jsx("div",{className:"absolute bottom-20 left-10 w-60 h-60 bg-rose-200/40 blur-3xl rounded-full animate-pulse delay-700"})]})},zC=()=>{const n=qe.useRef(null),[e,t]=qe.useState(null),[i,r]=qe.useState("All");L_();const s=[{id:1,title:"The Tea Story - Digital Transformation",category:"Mobile App",description:"Complete digital transformation for a local tea cafe including digital menu, online ordering system, and promotional campaigns.Results: +35% orders, +50% social engagement, free delivery within 5km radius.",longDescription:`The Tea Story - Digital Transformation 
 Client: The Tea Story - local tea cafe 
  
 Challenge: Needed a digital presence to compete with larger chains and reach more customers 
  
 Solution: Comprehensive digital transformation including: 
  
 Interactive digital menu with online ordering system 
 Custom delivery management for 5km radius 
 Loyalty program integration 
 Social media marketing campaigns 
 Results: 
  
 35% increase in orders 
 50% growth in social media engagement 
 Successful implementation of free delivery service 
 Improved customer retention through loyalty program`,image:"https://content.jdmagicbox.com/v2/comp/chennai/b6/044pxx44.xx44.240527200455.m3b6/catalogue/the-tea-story-iyyappanthangal-chennai-tea-stalls-78sdqi22ie.jpg",technologies:["Flutter","LottieFiles","Dart","Kotlin","Swift"],liveUrl:"#",githubUrl:"#",featured:!0},{id:2,title:"E-Commerce Mobile App",category:"Mobile App",description:"Full-featured e-commerce mobile application with payment integration.",longDescription:"A cross-platform mobile application that provides a seamless shopping experience with features including user authentication, product catalog, shopping cart, secure payment processing, and order tracking.",image:"https://lilacinfotech.com/lilac_assets/images/blog/How-to-Create-a-Shopping-App-for-Your-Business:Features-Cost-and-More.jpg",technologies:["Flutter","LottieFiles","Dart","Kotlin","Swift"],liveUrl:"#",githubUrl:"#",featured:!0},{id:3,title:"GateWayResort",category:"Web Development",description:"Comprehensive restaurant management platform with POS integration.",longDescription:"A Simple Frontend design for a resort website, showcasing services, amenities, and booking options with a modern and responsive layout.",image:"https://ik.imgkit.net/3vlqs5axxjf/external/ik-seo/https://www.cfmedia.vfmleonardo.com/imageRepo/2/0/66/584/691/TGR_Damdama_-_Facade_Day_O/The-Gateway-Resort-Damdama-Lake-Gurgaon-Exterior.jpg?tr=w-656%2Ch-390%2Cfo-auto",technologies:["React","Tailwind CSS","Node.js","Express"],liveUrl:"#",githubUrl:"https://github.com/ReverseEngineeringDude/GateWayResort.git",featured:!1},{id:4,title:"Blind Assist App",category:"Mobile App",description:"A simple flutter app to assist visually disabled person ",longDescription:"A mobile application designed to assist visually impaired individuals by providing features such as object recognition, text-to-speech conversion, and navigation assistance using Flutter and TensorFlow.",image:"https://i.ytimg.com/vi/3ViGM4Sz7n4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBjfYT2LklahoCNux57rl30NiQ5qw",technologies:["Flutter","Firebase","Call Assist","TensorFlow"],liveUrl:"#",githubUrl:"https://github.com/ReverseEngineeringDude/Blind-assist.git",featured:!0}],o=["All",...Array.from(new Set(s.map(f=>f.category)))],a=i==="All"?s:s.filter(f=>f.category===i),l=f=>{t(f),document.body.style.overflow="hidden"},c=()=>{t(null),document.body.style.overflow="auto"},u=()=>{if(!e)return;const p=(s.findIndex(v=>v.id===e.id)+1)%s.length;t(s[p])},d=()=>{if(!e)return;const p=(s.findIndex(v=>v.id===e.id)-1+s.length)%s.length;t(s[p])};return C.jsx(C.Fragment,{children:C.jsxs("section",{ref:n,id:"projects",className:"py-20 relative",children:[C.jsxs("div",{className:"container mx-auto px-6",children:[C.jsxs("div",{className:"text-center mb-16",children:[C.jsx("h2",{className:"fade-up text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text font-space-grotesk",children:"Our Projects"}),C.jsx("p",{className:"fade-up text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed",children:"Showcasing our latest work and innovative solutions that demonstrate our expertise."})]}),C.jsx("div",{className:"flex flex-wrap justify-center gap-4 mb-12",children:o.map((f,p)=>C.jsx("button",{onClick:()=>r(f),className:`fade-up filter-button px-6 py-3 rounded-full font-medium transition-all duration-300 ${i===f?"bg-gradient-to-r from-purple-400 to-cyan-400 text-white":"glass-card text-gray-300 hover:text-white hover:bg-white/10"}`,children:f},p))}),C.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:a.map(f=>C.jsxs("div",{className:"project-card fade-scale glass-card group hover-tilt hover-glow cursor-pointer overflow-hidden",onClick:()=>l(f),children:[C.jsxs("div",{className:"relative h-48 overflow-hidden",children:[C.jsx("img",{src:f.image,alt:f.title,className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"}),f.featured&&C.jsx("div",{className:"absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-xs font-bold px-3 py-1 rounded-full",children:"Featured"})]}),C.jsxs("div",{className:"p-6",children:[C.jsx("div",{className:"text-sm text-cyan-400 font-medium mb-2",children:f.category}),C.jsx("h3",{className:"text-xl font-semibold text-white mb-3 group-hover:gradient-text transition-all duration-300",children:f.title}),C.jsx("p",{className:"text-gray-300 text-sm leading-relaxed mb-4",children:f.description}),C.jsxs("div",{className:"flex flex-wrap gap-2",children:[f.technologies.slice(0,3).map((p,v)=>C.jsx("span",{className:"px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300",children:p},v)),f.technologies.length>3&&C.jsxs("span",{className:"px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300",children:["+",f.technologies.length-3," more"]})]})]})]},f.id))})]}),e&&C.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm",children:C.jsxs("div",{className:"glass-card p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto",children:[C.jsxs("div",{className:"flex items-center justify-between mb-6",children:[C.jsxs("div",{className:"flex items-center space-x-4",children:[C.jsx("span",{className:"px-3 py-1 bg-gradient-to-r from-purple-400 to-cyan-400 text-white text-sm font-medium rounded-full",children:e.category}),C.jsx("h3",{className:"text-2xl font-bold text-white",children:e.title})]}),C.jsxs("div",{className:"flex items-center space-x-2",children:[C.jsx("button",{onClick:d,className:"p-2 text-gray-400 hover:text-white",children:C.jsx(bT,{className:"w-5 h-5"})}),C.jsx("button",{onClick:u,className:"p-2 text-gray-400 hover:text-white",children:C.jsx(r_,{className:"w-5 h-5"})}),C.jsx("button",{onClick:c,className:"p-2 text-gray-400 hover:text-white",children:C.jsx(o_,{className:"w-6 h-6"})})]})]}),C.jsx("div",{className:"relative h-64 md:h-80 rounded-xl overflow-hidden mb-8 fade-up",children:C.jsx("img",{src:e.image,alt:e.title,className:"w-full h-full object-cover"})}),C.jsxs("div",{className:"grid md:grid-cols-3 gap-8",children:[C.jsxs("div",{className:"md:col-span-2 fade-up",children:[C.jsx("h4",{className:"text-xl font-semibold text-white mb-4",children:"Project Overview"}),C.jsx("p",{className:"text-gray-300 leading-relaxed mb-6",children:e.longDescription}),C.jsx("h4",{className:"text-xl font-semibold text-white mb-4",children:"Technologies Used"}),C.jsx("div",{className:"flex flex-wrap gap-3 mb-6",children:e.technologies.map((f,p)=>C.jsx("span",{className:"px-4 py-2 bg-white/10 rounded-full text-sm text-gray-300 border border-white/20",children:f},p))})]}),C.jsxs("div",{className:"fade-up",children:[C.jsx("h4",{className:"text-xl font-semibold text-white mb-4",children:"Project Links"}),C.jsx("div",{className:"space-y-3",children:e.githubUrl&&C.jsxs("a",{href:e.githubUrl,className:"flex items-center space-x-2 p-3 glass-card hover-glow text-gray-300 hover:text-white transition-colors duration-300",children:[C.jsx(s_,{className:"w-5 h-5"}),C.jsx("span",{children:"View Source Code"})]})})]})]}),C.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-white/20",children:[C.jsx("button",{className:"btn-primary flex-1",children:"Start Similar Project"}),C.jsx("button",{onClick:c,className:"btn-secondary flex-1",children:"Close"})]})]})})]})})},BC=()=>{const n=qe.useRef(null),[e,t]=qe.useState({name:"",email:"",company:"",phone:"",service:"",message:""}),[i,r]=qe.useState(!1),[s,o]=qe.useState(!1);L_();const a=[{icon:K1,title:"Email Us",details:["thenextifytech@gmail.com"],gradient:"from-purple-400 to-pink-400",action:()=>window.open("mailto:thenextifytech@gmail.com")},{icon:Q1,title:"Call Us",details:["+918590319003"],gradient:"from-cyan-400 to-blue-400",action:()=>window.open("tel:+918590319003")},{icon:Z1,title:"Visit Us",details:["Seethi sahib memorial polytechnic college, Tirurangadi, Kerala, India"],gradient:"from-green-400 to-emerald-400"},{icon:LT,title:"Business Hours",details:["Mon - Fri: 9:00 AM - 6:00 PM","Sat: 10:00 AM - 4:00 PM"],gradient:"from-orange-400 to-red-400"}],l=async u=>{u.preventDefault(),r(!0),await new Promise(d=>setTimeout(d,2e3)),r(!1),o(!0),setTimeout(()=>{o(!1),t({name:"",email:"",company:"",phone:"",service:"",message:""})},3e3)},c=()=>{const u="918590319003",d=encodeURIComponent(`Hi! I would like to schedule a call regarding my ${e.service||"project"}.`);window.open(`https://wa.me/${u}?text=${d}`,"_blank")};return C.jsxs("section",{id:"contact",ref:n,className:"py-20 relative",children:[C.jsx("div",{className:"container mx-auto px-6",children:C.jsxs("div",{className:"max-w-6xl mx-auto",children:[C.jsxs("div",{className:"text-center mb-16",children:[C.jsx("h2",{className:"fade-up contact-title text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text font-space-grotesk",children:"Get In Touch"}),C.jsx("p",{className:"fade-up contact-subtitle text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed",children:"Ready to bring your digital vision to life? Let's start a conversation about your project and explore how we can help you achieve your goals."})]}),C.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16",children:a.map((u,d)=>C.jsxs("div",{className:"fade-scale contact-card glass-card p-6 hover-tilt hover-glow group text-center cursor-pointer",onClick:u.action?u.action:void 0,children:[C.jsx("div",{className:`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${u.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`,children:C.jsx(u.icon,{className:"w-8 h-8 text-white"})}),C.jsx("h3",{className:"text-lg font-semibold text-white mb-3 group-hover:gradient-text transition-all duration-300",children:u.title}),u.details.map((f,p)=>C.jsx("p",{className:"text-gray-300 text-sm",children:f},p))]},d))}),C.jsxs("div",{className:"grid lg:grid-cols-2 gap-12",children:[C.jsx("div",{className:"fade-up contact-form",children:C.jsxs("div",{className:"glass-card p-8",children:[C.jsxs("div",{className:"flex items-center space-x-3 mb-8",children:[C.jsx(FT,{className:"w-8 h-8 text-cyan-400"}),C.jsx("h3",{className:"text-2xl font-bold text-white",children:"Send us a Message"})]}),s?C.jsxs("div",{className:"text-center py-12 fade-up",children:[C.jsx("div",{className:"w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 flex items-center justify-center animate-bounce",children:C.jsx(NT,{className:"w-10 h-10 text-white"})}),C.jsx("h3",{className:"text-2xl font-bold text-white mb-4",children:"Message Sent Successfully!"}),C.jsx("p",{className:"text-gray-300 leading-relaxed",children:"Thank you for reaching out! We've received your message and will get back to you within 24 hours."})]}):C.jsx("form",{onSubmit:l,className:"space-y-6",children:C.jsx("button",{type:"submit",disabled:i,className:"w-full btn-primary hover-glow disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2",children:i?C.jsxs(C.Fragment,{children:[C.jsx("div",{className:"w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"}),C.jsx("span",{children:"Sending Message..."})]}):C.jsxs(C.Fragment,{children:[C.jsx(HT,{className:"w-5 h-5"}),C.jsx("span",{children:"Send Message"})]})})})]})}),C.jsxs("div",{className:"space-y-8 fade-up",children:[C.jsxs("div",{className:"contact-card glass-card p-8 hover-glow",children:[C.jsxs("div",{className:"flex items-center space-x-3 mb-6",children:[C.jsx(DT,{className:"w-8 h-8 text-purple-400"}),C.jsx("h3",{className:"text-2xl font-bold text-white",children:"Schedule a Meeting"})]}),C.jsx("p",{className:"text-gray-300 mb-6 leading-relaxed",children:"Prefer to talk directly? Schedule a free 30-minute consultation to discuss your project in detail."}),C.jsx("button",{className:"btn-secondary w-full hover-tilt",onClick:c,children:"Book a Call"})]}),C.jsxs("div",{className:"contact-card glass-card p-8 hover-glow",children:[C.jsx("h3",{className:"text-2xl font-bold text-white mb-6",children:"Frequently Asked Questions"}),C.jsxs("div",{className:"space-y-4",children:[C.jsxs("div",{children:[C.jsx("h4",{className:"text-lg font-semibold text-cyan-400 mb-2",children:"What's your typical project timeline?"}),C.jsx("p",{className:"text-gray-300 text-sm",children:"Project timelines vary based on complexity, but most web projects take 4-8 weeks from start to launch."})]}),C.jsxs("div",{children:[C.jsx("h4",{className:"text-lg font-semibold text-cyan-400 mb-2",children:"Do you provide ongoing support?"}),C.jsx("p",{className:"text-gray-300 text-sm",children:"Yes, we offer comprehensive maintenance and support packages to keep your project running smoothly."})]}),C.jsxs("div",{children:[C.jsx("h4",{className:"text-lg font-semibold text-cyan-400 mb-2",children:"What's included in your pricing?"}),C.jsx("p",{className:"text-gray-300 text-sm",children:"Our quotes include design, development, testing, launch support, and basic training for your team."})]})]})]})]})]})]})}),C.jsxs("div",{className:"absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden",children:[C.jsx("div",{className:"absolute top-40 right-20 w-24 h-24 rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20 blur-2xl animate-float"}),C.jsx("div",{className:"absolute bottom-40 left-20 w-32 h-32 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-400/20 blur-3xl animate-float",style:{animationDelay:"1s"}})]})]})},VC=()=>{const n=new Date().getFullYear(),[e,t]=qe.useState(""),[i,r]=qe.useState(!1),[s,o]=qe.useState(!1),a=[{href:"#home",label:"Home"},{href:"#about",label:"About"},{href:"#services",label:"Services"},{href:"#projects",label:"Projects"}],l=["Web Development","Mobile Apps","UI/UX Design","E-Commerce","Digital Marketing","SEO Optimization"],c=[{icon:s_,href:"https://github.com/NextifyTech",label:"GitHub"},{icon:J1,href:"https://x.com/nextify_s3",label:"Twitter"},{icon:$1,href:"https://facebook.com/share/1FYScvAStm",label:"Facebook"},{icon:q1,href:"https://instagram.com/next.ify",label:"Instagram"}],u=()=>{e&&(r(!0),o(!0),setTimeout(()=>r(!1),3e3),setTimeout(()=>o(!1),1500),t(""))};return C.jsxs("footer",{className:"relative bg-gradient-to-t from-black via-gray-900 to-gray-900/50 pt-12 md:pt-20 pb-6 md:pb-8",children:[C.jsxs("div",{className:"container mx-auto px-4 sm:px-6",children:[C.jsxs("div",{className:"max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16",children:[C.jsxs("div",{className:"sm:col-span-2 lg:col-span-2",children:[C.jsxs("a",{to:"/",className:"flex items-center space-x-2 mb-4 md:mb-6 group",children:[C.jsxs("div",{className:"relative w-8 h-8 md:w-10 md:h-10",children:[C.jsx("img",{src:"/Nextify/logo.png",alt:"Nextify Logo",className:"w-full h-full object-contain group-hover:opacity-80 transition-opacity duration-300"}),C.jsx("div",{className:"absolute inset-0 animate-pulse-glow rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"})]}),C.jsx("span",{className:"text-xl md:text-2xl font-bold gradient-text font-space-grotesk",children:"Nextify"})]}),C.jsx("p",{className:"text-gray-300 leading-relaxed mb-4 md:mb-6 text-sm md:text-base max-w-md",children:"We're a forward-thinking digital agency transforming ideas into extraordinary digital experiences."}),C.jsxs("div",{className:"space-y-2 md:space-y-3",children:[C.jsxs("div",{className:"flex items-center space-x-2 md:space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm md:text-base",children:[C.jsx(K1,{className:"w-4 h-4 md:w-5 md:h-5"}),C.jsx("a",{href:"mailto:hello@nextify.com",className:"hover:underline break-words",children:"TheNextifyTech@gmail.com"})]}),C.jsxs("div",{className:"flex items-center space-x-2 md:space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm md:text-base",children:[C.jsx(Q1,{className:"w-4 h-4 md:w-5 md:h-5"}),C.jsx("a",{href:"tel:+918590319003",className:"hover:underline",children:"+918590319003"})]}),C.jsxs("div",{className:"flex items-center space-x-2 md:space-x-3 text-gray-300 text-sm md:text-base",children:[C.jsx(Z1,{className:"w-4 h-4 md:w-5 md:h-5 flex-shrink-0"}),C.jsx("span",{className:"break-words",children:"Seethi Sahib Memorial Polytechnic College, Tirur, Malappuram"})]})]})]}),C.jsxs("div",{children:[C.jsx("h3",{className:"text-lg md:text-xl font-semibold text-white mb-4 md:mb-6",children:"Quick Links"}),C.jsxs("ul",{className:"space-y-2 md:space-y-3",children:[a.map((d,f)=>C.jsx("li",{children:C.jsx("a",{href:d.href,className:"text-gray-300 hover:text-cyan-400 hover:translate-x-2 transition-all duration-300 block text-sm md:text-base",children:d.label})},f)),C.jsx("li",{children:C.jsx("a",{href:"#contact",className:"text-gray-300 hover:text-cyan-400 hover:translate-x-2 transition-all duration-300 block text-sm md:text-base",children:"Contact"})}),C.jsx("li",{children:C.jsx("a",{href:"#",className:"text-gray-300 hover:text-cyan-400 hover:translate-x-2 transition-all duration-300 block text-sm md:text-base",children:"Privacy Policy"})})]})]}),C.jsxs("div",{children:[C.jsx("h3",{className:"text-lg md:text-xl font-semibold text-white mb-4 md:mb-6",children:"Our Services"}),C.jsx("ul",{className:"space-y-2 md:space-y-3",children:l.map((d,f)=>C.jsx("li",{children:C.jsx("a",{href:"#services",className:"text-gray-300 hover:text-cyan-400 hover:translate-x-2 transition-all duration-300 block text-sm md:text-base",children:d})},f))})]})]}),C.jsx("div",{className:"glass-card p-4 md:p-8 mb-8 md:mb-12",children:C.jsxs("div",{className:"text-center max-w-2xl mx-auto relative",children:[C.jsx("h3",{className:"text-xl md:text-2xl font-bold text-white mb-3 md:mb-4",children:"Stay Updated with Latest Trends"}),C.jsx("p",{className:"text-gray-300 mb-4 md:mb-6 text-sm md:text-base",children:"Subscribe to our newsletter for insights, tips, and updates."}),C.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 md:gap-4 max-w-md mx-auto relative",children:[C.jsx("input",{type:"email",value:e,onChange:d=>t(d.target.value),placeholder:"Enter your email",className:"flex-1 px-3 md:px-4 py-2 md:py-3 bg-white/5 border border-white/10 rounded-lg md:rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-white/10 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 text-sm md:text-base"}),C.jsxs("button",{onClick:u,className:`btn-primary px-4 md:px-8 py-2 md:py-3 relative overflow-hidden whitespace-nowrap transition-all duration-300 transform text-sm md:text-base ${i?"bg-green-500 scale-105":"hover:scale-105 hover-tilt"}`,children:[!i&&"Subscribe",i&&C.jsx("span",{className:"absolute inset-0 flex items-center justify-center text-white font-bold text-base md:text-lg animate-bounce",children:"✔ Subscribed!"}),s&&C.jsx("div",{className:"absolute inset-0 pointer-events-none",children:[...Array(15)].map((d,f)=>C.jsx("span",{className:"absolute w-2 h-2 bg-yellow-400 rounded-full animate-confetti",style:{top:`${Math.random()*100}%`,left:`${Math.random()*100}%`,animationDelay:`${Math.random()*.5}s`}},f))})]})]})]})}),C.jsx("div",{className:"border-t border-white/10 pt-6 md:pt-8",children:C.jsxs("div",{className:"flex flex-col lg:flex-row items-center justify-between gap-4 md:gap-6",children:[C.jsxs("div",{className:"text-center lg:text-left",children:[C.jsxs("p",{className:"text-gray-300 mb-2 text-sm md:text-base",children:["© ",n," Nextify. All rights reserved."]}),C.jsxs("p",{className:"text-xs md:text-sm text-gray-400 flex items-center justify-center lg:justify-start space-x-1 md:space-x-2",children:[C.jsx("span",{children:"Made with"}),C.jsx(IT,{className:"w-3 h-3 md:w-4 md:h-4 text-red-400 animate-pulse"}),C.jsx("span",{children:"by the Nextify team"})]})]}),C.jsx("div",{className:"flex items-center space-x-2 md:space-x-4",children:c.map((d,f)=>C.jsx("a",{href:d.href,"aria-label":d.label,className:"w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-400 hover:to-cyan-400 hover:border-transparent hover:scale-110 transition-all duration-300 group",children:C.jsx(d.icon,{className:"w-4 h-4 md:w-5 md:h-5"})},f))})]})})]}),C.jsxs("div",{className:"absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden",children:[C.jsx("div",{className:"absolute top-10 md:top-20 left-5 md:left-10 w-20 h-20 md:w-32 md:h-32 rounded-full bg-gradient-to-r from-purple-400/10 to-pink-400/10 blur-2xl md:blur-3xl animate-float"}),C.jsx("div",{className:"absolute bottom-10 md:bottom-20 right-5 md:right-10 w-24 h-24 md:w-40 md:h-40 rounded-full bg-gradient-to-r from-cyan-400/10 to-blue-400/10 blur-2xl md:blur-3xl animate-float",style:{animationDelay:"2s"}})]}),C.jsx("style",{children:`
          @keyframes confetti {
            0% { transform: translateY(0) rotate(0deg); opacity: 1; }
            100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
          }
          .animate-confetti {
            animation: confetti 1s ease-out forwards;
          }
        `})]})},HC=()=>{const[n,e]=qe.useState(!1),[t,i]=qe.useState(!1);qe.useEffect(()=>{const l=()=>{window.scrollY>300?e(!0):(e(!1),i(!1))};return window.addEventListener("scroll",l),()=>window.removeEventListener("scroll",l)},[]);const r=()=>i(!t),s=[{icon:$1,url:"https://facebook.com/share/1FYScvAStm",color:"#1877F2"},{icon:J1,url:"https://x.com/nextify_s3",color:"#1DA1F2"},{icon:q1,url:"https://instagram.com/next.ify",color:"#E4405F"},{icon:s_,url:"https://github.com/NextifyTech",color:"#000000ff"},{icon:$T,url:"https://youtube.com/@thenextifytech",color:"#FF0000"}],o=150,a=[0,22.5,45,67.5,90];return C.jsx(C.Fragment,{children:n&&C.jsx("div",{className:"fixed bottom-8 right-8 z-50",children:C.jsxs("div",{className:"relative w-14 h-14",children:[s.map((l,c)=>{const u=a[c]*Math.PI/180,d=o*Math.cos(u),f=o*Math.sin(u),p=l.icon;return C.jsx("a",{href:l.url,target:"_blank",rel:"noopener noreferrer","aria-label":l.label,className:"absolute w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-500",style:{left:"50%",top:"50%",transform:t?`translate(${-d}px, ${-f}px) scale(1)`:"translate(0,0) scale(0)",transitionDelay:`${t?c*50:0}ms`},children:C.jsx(p,{className:"w-6 h-6",style:{color:l.color}})},c)}),C.jsx("button",{onClick:r,className:"absolute w-14 h-14 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-300",children:C.jsx(BT,{className:`w-6 h-6 transition-transform duration-300 ${t?"rotate-45":""}`})})]})})})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const I_="180",GC=0,zv=1,WC=2,EM=1,jC=2,kr=3,js=0,ui=1,Wr=2,ks=0,Va=1,xm=2,Bv=3,Vv=4,XC=5,po=100,YC=101,$C=102,qC=103,KC=104,ZC=200,QC=201,JC=202,eb=203,ym=204,Sm=205,tb=206,nb=207,ib=208,rb=209,sb=210,ob=211,ab=212,lb=213,cb=214,Mm=0,Em=1,wm=2,il=3,Tm=4,Am=5,Cm=6,bm=7,wM=0,ub=1,fb=2,zs=0,db=1,hb=2,pb=3,mb=4,gb=5,_b=6,vb=7,TM=300,rl=301,sl=302,Rm=303,Pm=304,Nd=306,Dm=1e3,So=1001,Nm=1002,hr=1003,xb=1004,Pu=1005,wr=1006,wh=1007,Mo=1008,rs=1009,AM=1010,CM=1011,Uc=1012,U_=1013,Vo=1014,$r=1015,Xc=1016,F_=1017,O_=1018,Fc=1020,bM=35902,RM=35899,PM=1021,DM=1022,ur=1023,Oc=1026,kc=1027,NM=1028,k_=1029,LM=1030,z_=1031,B_=1033,Mf=33776,Ef=33777,wf=33778,Tf=33779,Lm=35840,Im=35841,Um=35842,Fm=35843,Om=36196,km=37492,zm=37496,Bm=37808,Vm=37809,Hm=37810,Gm=37811,Wm=37812,jm=37813,Xm=37814,Ym=37815,$m=37816,qm=37817,Km=37818,Zm=37819,Qm=37820,Jm=37821,eg=36492,tg=36494,ng=36495,ig=36283,rg=36284,sg=36285,og=36286,yb=3200,Sb=3201,Mb=0,Eb=1,xs="",Bi="srgb",ol="srgb-linear",cd="linear",wt="srgb",Zo=7680,Hv=519,wb=512,Tb=513,Ab=514,IM=515,Cb=516,bb=517,Rb=518,Pb=519,Gv=35044,Wv="300 es",Tr=2e3,ud=2001;class fl{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Th=Math.PI/180,ag=180/Math.PI;function Yc(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(bn[n&255]+bn[n>>8&255]+bn[n>>16&255]+bn[n>>24&255]+"-"+bn[e&255]+bn[e>>8&255]+"-"+bn[e>>16&15|64]+bn[e>>24&255]+"-"+bn[t&63|128]+bn[t>>8&255]+"-"+bn[t>>16&255]+bn[t>>24&255]+bn[i&255]+bn[i>>8&255]+bn[i>>16&255]+bn[i>>24&255]).toLowerCase()}function ut(n,e,t){return Math.max(e,Math.min(t,n))}function Db(n,e){return(n%e+e)%e}function Ah(n,e,t){return(1-t)*n+t*e}function Tl(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Qn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class vt{constructor(e=0,t=0){vt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ut(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $c{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const f=s[o+0],p=s[o+1],v=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=v,e[t+3]=_;return}if(d!==_||l!==f||c!==p||u!==v){let m=1-a;const h=l*f+c*p+u*v+d*_,g=h>=0?1:-1,x=1-h*h;if(x>Number.EPSILON){const E=Math.sqrt(x),A=Math.atan2(E,h*g);m=Math.sin(m*A)/E,a=Math.sin(a*A)/E}const y=a*g;if(l=l*m+f*y,c=c*m+p*y,u=u*m+v*y,d=d*m+_*y,m===1-a){const E=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=E,c*=E,u*=E,d*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],f=s[o+1],p=s[o+2],v=s[o+3];return e[t]=a*v+u*d+l*p-c*f,e[t+1]=l*v+u*f+c*d-a*p,e[t+2]=c*v+u*p+a*f-l*d,e[t+3]=u*v-a*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),f=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=f*u*d+c*p*v,this._y=c*p*d-f*u*v,this._z=c*u*v+f*p*d,this._w=c*u*d-f*p*v;break;case"YXZ":this._x=f*u*d+c*p*v,this._y=c*p*d-f*u*v,this._z=c*u*v-f*p*d,this._w=c*u*d+f*p*v;break;case"ZXY":this._x=f*u*d-c*p*v,this._y=c*p*d+f*u*v,this._z=c*u*v+f*p*d,this._w=c*u*d-f*p*v;break;case"ZYX":this._x=f*u*d-c*p*v,this._y=c*p*d+f*u*v,this._z=c*u*v-f*p*d,this._w=c*u*d+f*p*v;break;case"YZX":this._x=f*u*d+c*p*v,this._y=c*p*d+f*u*v,this._z=c*u*v-f*p*d,this._w=c*u*d-f*p*v;break;case"XZY":this._x=f*u*d-c*p*v,this._y=c*p*d-f*u*v,this._z=c*u*v+f*p*d,this._w=c*u*d+f*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(jv.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(jv.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ut(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ch.copy(this).projectOnVector(e),this.sub(Ch)}reflect(e){return this.sub(Ch.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ch=new H,jv=new $c;class et{constructor(e,t,i,r,s,o,a,l,c){et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],p=i[5],v=i[8],_=r[0],m=r[3],h=r[6],g=r[1],x=r[4],y=r[7],E=r[2],A=r[5],w=r[8];return s[0]=o*_+a*g+l*E,s[3]=o*m+a*x+l*A,s[6]=o*h+a*y+l*w,s[1]=c*_+u*g+d*E,s[4]=c*m+u*x+d*A,s[7]=c*h+u*y+d*w,s[2]=f*_+p*g+v*E,s[5]=f*m+p*x+v*A,s[8]=f*h+p*y+v*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*s,p=c*s-o*l,v=t*d+i*f+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return e[0]=d*_,e[1]=(r*c-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=f*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=p*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(bh.makeScale(e,t)),this}rotate(e){return this.premultiply(bh.makeRotation(-e)),this}translate(e,t){return this.premultiply(bh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const bh=new et;function UM(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function fd(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Nb(){const n=fd("canvas");return n.style.display="block",n}const Xv={};function zc(n){n in Xv||(Xv[n]=!0,console.warn(n))}function Lb(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Yv=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$v=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ib(){const n={enabled:!0,workingColorSpace:ol,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===wt&&(r.r=Zr(r.r),r.g=Zr(r.g),r.b=Zr(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===wt&&(r.r=Ha(r.r),r.g=Ha(r.g),r.b=Ha(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===xs?cd:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return zc("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return zc("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ol]:{primaries:e,whitePoint:i,transfer:cd,toXYZ:Yv,fromXYZ:$v,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Bi},outputColorSpaceConfig:{drawingBufferColorSpace:Bi}},[Bi]:{primaries:e,whitePoint:i,transfer:wt,toXYZ:Yv,fromXYZ:$v,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Bi}}}),n}const mt=Ib();function Zr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ha(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Qo;class Ub{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Qo===void 0&&(Qo=fd("canvas")),Qo.width=e.width,Qo.height=e.height;const r=Qo.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Qo}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=fd("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Zr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Zr(t[i]/255)*255):t[i]=Zr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Fb=0;class V_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fb++}),this.uuid=Yc(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Rh(r[o].image)):s.push(Rh(r[o]))}else s=Rh(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Rh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ub.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ob=0;const Ph=new H;class fi extends fl{constructor(e=fi.DEFAULT_IMAGE,t=fi.DEFAULT_MAPPING,i=So,r=So,s=wr,o=Mo,a=ur,l=rs,c=fi.DEFAULT_ANISOTROPY,u=xs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ob++}),this.uuid=Yc(),this.name="",this.source=new V_(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ph).x}get height(){return this.source.getSize(Ph).y}get depth(){return this.source.getSize(Ph).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==TM)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Dm:e.x=e.x-Math.floor(e.x);break;case So:e.x=e.x<0?0:1;break;case Nm:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Dm:e.y=e.y-Math.floor(e.y);break;case So:e.y=e.y<0?0:1;break;case Nm:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}fi.DEFAULT_IMAGE=null;fi.DEFAULT_MAPPING=TM;fi.DEFAULT_ANISOTROPY=1;class Jt{constructor(e=0,t=0,i=0,r=1){Jt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],p=l[5],v=l[9],_=l[2],m=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-_)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+_)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,y=(p+1)/2,E=(h+1)/2,A=(u+f)/4,w=(d+_)/4,R=(v+m)/4;return x>y&&x>E?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=A/i,s=w/i):y>E?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=A/r,s=R/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=w/s,r=R/s),this.set(i,r,s,t),this}let g=Math.sqrt((m-v)*(m-v)+(d-_)*(d-_)+(f-u)*(f-u));return Math.abs(g)<.001&&(g=1),this.x=(m-v)/g,this.y=(d-_)/g,this.z=(f-u)/g,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this.w=ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this.w=ut(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ut(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class kb extends fl{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wr,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Jt(0,0,e,t),this.scissorTest=!1,this.viewport=new Jt(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new fi(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:wr,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new V_(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ho extends kb{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class FM extends fi{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=hr,this.minFilter=hr,this.wrapR=So,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class zb extends fi{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=hr,this.minFilter=hr,this.wrapR=So,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qc{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(nr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(nr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=nr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,nr):nr.fromBufferAttribute(s,o),nr.applyMatrix4(e.matrixWorld),this.expandByPoint(nr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Du.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Du.copy(i.boundingBox)),Du.applyMatrix4(e.matrixWorld),this.union(Du)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,nr),nr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Al),Nu.subVectors(this.max,Al),Jo.subVectors(e.a,Al),ea.subVectors(e.b,Al),ta.subVectors(e.c,Al),ls.subVectors(ea,Jo),cs.subVectors(ta,ea),eo.subVectors(Jo,ta);let t=[0,-ls.z,ls.y,0,-cs.z,cs.y,0,-eo.z,eo.y,ls.z,0,-ls.x,cs.z,0,-cs.x,eo.z,0,-eo.x,-ls.y,ls.x,0,-cs.y,cs.x,0,-eo.y,eo.x,0];return!Dh(t,Jo,ea,ta,Nu)||(t=[1,0,0,0,1,0,0,0,1],!Dh(t,Jo,ea,ta,Nu))?!1:(Lu.crossVectors(ls,cs),t=[Lu.x,Lu.y,Lu.z],Dh(t,Jo,ea,ta,Nu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(nr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Lr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Lr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Lr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Lr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Lr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Lr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Lr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Lr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Lr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Lr=[new H,new H,new H,new H,new H,new H,new H,new H],nr=new H,Du=new qc,Jo=new H,ea=new H,ta=new H,ls=new H,cs=new H,eo=new H,Al=new H,Nu=new H,Lu=new H,to=new H;function Dh(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){to.fromArray(n,s);const a=r.x*Math.abs(to.x)+r.y*Math.abs(to.y)+r.z*Math.abs(to.z),l=e.dot(to),c=t.dot(to),u=i.dot(to);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Bb=new qc,Cl=new H,Nh=new H;class Ld{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Bb.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Cl.subVectors(e,this.center);const t=Cl.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Cl,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Nh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Cl.copy(e.center).add(Nh)),this.expandByPoint(Cl.copy(e.center).sub(Nh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ir=new H,Lh=new H,Iu=new H,us=new H,Ih=new H,Uu=new H,Uh=new H;class OM{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ir)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ir.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ir.copy(this.origin).addScaledVector(this.direction,t),Ir.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Lh.copy(e).add(t).multiplyScalar(.5),Iu.copy(t).sub(e).normalize(),us.copy(this.origin).sub(Lh);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Iu),a=us.dot(this.direction),l=-us.dot(Iu),c=us.lengthSq(),u=Math.abs(1-o*o);let d,f,p,v;if(u>0)if(d=o*l-a,f=o*a-l,v=s*u,d>=0)if(f>=-v)if(f<=v){const _=1/u;d*=_,f*=_,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-v?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c):f<=v?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Lh).addScaledVector(Iu,f),p}intersectSphere(e,t){Ir.subVectors(e.center,this.origin);const i=Ir.dot(this.direction),r=Ir.dot(Ir)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ir)!==null}intersectTriangle(e,t,i,r,s){Ih.subVectors(t,e),Uu.subVectors(i,e),Uh.crossVectors(Ih,Uu);let o=this.direction.dot(Uh),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;us.subVectors(this.origin,e);const l=a*this.direction.dot(Uu.crossVectors(us,Uu));if(l<0)return null;const c=a*this.direction.dot(Ih.cross(us));if(c<0||l+c>o)return null;const u=-a*us.dot(Uh);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class an{constructor(e,t,i,r,s,o,a,l,c,u,d,f,p,v,_,m){an.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,d,f,p,v,_,m)}set(e,t,i,r,s,o,a,l,c,u,d,f,p,v,_,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=v,h[11]=_,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new an().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/na.setFromMatrixColumn(e,0).length(),s=1/na.setFromMatrixColumn(e,1).length(),o=1/na.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*u,p=o*d,v=a*u,_=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=p+v*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=v+p*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*d,v=c*u,_=c*d;t[0]=f+_*a,t[4]=v*a-p,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=p*a-v,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*d,v=c*u,_=c*d;t[0]=f-_*a,t[4]=-o*d,t[8]=v+p*a,t[1]=p+v*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*d,v=a*u,_=a*d;t[0]=l*u,t[4]=v*c-p,t[8]=f*c+_,t[1]=l*d,t[5]=_*c+f,t[9]=p*c-v,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,v=a*l,_=a*c;t[0]=l*u,t[4]=_-f*d,t[8]=v*d+p,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*d+v,t[10]=f-_*d}else if(e.order==="XZY"){const f=o*l,p=o*c,v=a*l,_=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+_,t[5]=o*u,t[9]=p*d-v,t[2]=v*d-p,t[6]=a*u,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Vb,e,Hb)}lookAt(e,t,i){const r=this.elements;return _i.subVectors(e,t),_i.lengthSq()===0&&(_i.z=1),_i.normalize(),fs.crossVectors(i,_i),fs.lengthSq()===0&&(Math.abs(i.z)===1?_i.x+=1e-4:_i.z+=1e-4,_i.normalize(),fs.crossVectors(i,_i)),fs.normalize(),Fu.crossVectors(_i,fs),r[0]=fs.x,r[4]=Fu.x,r[8]=_i.x,r[1]=fs.y,r[5]=Fu.y,r[9]=_i.y,r[2]=fs.z,r[6]=Fu.z,r[10]=_i.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],p=i[13],v=i[2],_=i[6],m=i[10],h=i[14],g=i[3],x=i[7],y=i[11],E=i[15],A=r[0],w=r[4],R=r[8],M=r[12],S=r[1],L=r[5],F=r[9],V=r[13],$=r[2],W=r[6],G=r[10],j=r[14],U=r[3],q=r[7],P=r[11],re=r[15];return s[0]=o*A+a*S+l*$+c*U,s[4]=o*w+a*L+l*W+c*q,s[8]=o*R+a*F+l*G+c*P,s[12]=o*M+a*V+l*j+c*re,s[1]=u*A+d*S+f*$+p*U,s[5]=u*w+d*L+f*W+p*q,s[9]=u*R+d*F+f*G+p*P,s[13]=u*M+d*V+f*j+p*re,s[2]=v*A+_*S+m*$+h*U,s[6]=v*w+_*L+m*W+h*q,s[10]=v*R+_*F+m*G+h*P,s[14]=v*M+_*V+m*j+h*re,s[3]=g*A+x*S+y*$+E*U,s[7]=g*w+x*L+y*W+E*q,s[11]=g*R+x*F+y*G+E*P,s[15]=g*M+x*V+y*j+E*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],p=e[14],v=e[3],_=e[7],m=e[11],h=e[15];return v*(+s*l*d-r*c*d-s*a*f+i*c*f+r*a*p-i*l*p)+_*(+t*l*p-t*c*f+s*o*f-r*o*p+r*c*u-s*l*u)+m*(+t*c*d-t*a*p-s*o*d+i*o*p+s*a*u-i*c*u)+h*(-r*a*u-t*l*d+t*a*f+r*o*d-i*o*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],p=e[11],v=e[12],_=e[13],m=e[14],h=e[15],g=d*m*c-_*f*c+_*l*p-a*m*p-d*l*h+a*f*h,x=v*f*c-u*m*c-v*l*p+o*m*p+u*l*h-o*f*h,y=u*_*c-v*d*c+v*a*p-o*_*p-u*a*h+o*d*h,E=v*d*l-u*_*l-v*a*f+o*_*f+u*a*m-o*d*m,A=t*g+i*x+r*y+s*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=g*w,e[1]=(_*f*s-d*m*s-_*r*p+i*m*p+d*r*h-i*f*h)*w,e[2]=(a*m*s-_*l*s+_*r*c-i*m*c-a*r*h+i*l*h)*w,e[3]=(d*l*s-a*f*s-d*r*c+i*f*c+a*r*p-i*l*p)*w,e[4]=x*w,e[5]=(u*m*s-v*f*s+v*r*p-t*m*p-u*r*h+t*f*h)*w,e[6]=(v*l*s-o*m*s-v*r*c+t*m*c+o*r*h-t*l*h)*w,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*p+t*l*p)*w,e[8]=y*w,e[9]=(v*d*s-u*_*s-v*i*p+t*_*p+u*i*h-t*d*h)*w,e[10]=(o*_*s-v*a*s+v*i*c-t*_*c-o*i*h+t*a*h)*w,e[11]=(u*a*s-o*d*s-u*i*c+t*d*c+o*i*p-t*a*p)*w,e[12]=E*w,e[13]=(u*_*r-v*d*r+v*i*f-t*_*f-u*i*m+t*d*m)*w,e[14]=(v*a*r-o*_*r-v*i*l+t*_*l+o*i*m-t*a*m)*w,e[15]=(o*d*r-u*a*r+u*i*l-t*d*l-o*i*f+t*a*f)*w,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,d=a+a,f=s*c,p=s*u,v=s*d,_=o*u,m=o*d,h=a*d,g=l*c,x=l*u,y=l*d,E=i.x,A=i.y,w=i.z;return r[0]=(1-(_+h))*E,r[1]=(p+y)*E,r[2]=(v-x)*E,r[3]=0,r[4]=(p-y)*A,r[5]=(1-(f+h))*A,r[6]=(m+g)*A,r[7]=0,r[8]=(v+x)*w,r[9]=(m-g)*w,r[10]=(1-(f+_))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=na.set(r[0],r[1],r[2]).length();const o=na.set(r[4],r[5],r[6]).length(),a=na.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ir.copy(this);const c=1/s,u=1/o,d=1/a;return ir.elements[0]*=c,ir.elements[1]*=c,ir.elements[2]*=c,ir.elements[4]*=u,ir.elements[5]*=u,ir.elements[6]*=u,ir.elements[8]*=d,ir.elements[9]*=d,ir.elements[10]*=d,t.setFromRotationMatrix(ir),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Tr,l=!1){const c=this.elements,u=2*s/(t-e),d=2*s/(i-r),f=(t+e)/(t-e),p=(i+r)/(i-r);let v,_;if(l)v=s/(o-s),_=o*s/(o-s);else if(a===Tr)v=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===ud)v=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Tr,l=!1){const c=this.elements,u=2/(t-e),d=2/(i-r),f=-(t+e)/(t-e),p=-(i+r)/(i-r);let v,_;if(l)v=1/(o-s),_=o/(o-s);else if(a===Tr)v=-2/(o-s),_=-(o+s)/(o-s);else if(a===ud)v=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=v,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const na=new H,ir=new an,Vb=new H(0,0,0),Hb=new H(1,1,1),fs=new H,Fu=new H,_i=new H,qv=new an,Kv=new $c;class ss{constructor(e=0,t=0,i=0,r=ss.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(ut(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ut(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return qv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qv,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Kv.setFromEuler(this),this.setFromQuaternion(Kv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ss.DEFAULT_ORDER="XYZ";class kM{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Gb=0;const Zv=new H,ia=new $c,Ur=new an,Ou=new H,bl=new H,Wb=new H,jb=new $c,Qv=new H(1,0,0),Jv=new H(0,1,0),ex=new H(0,0,1),tx={type:"added"},Xb={type:"removed"},ra={type:"childadded",child:null},Fh={type:"childremoved",child:null};class di extends fl{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gb++}),this.uuid=Yc(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=di.DEFAULT_UP.clone();const e=new H,t=new ss,i=new $c,r=new H(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new an},normalMatrix:{value:new et}}),this.matrix=new an,this.matrixWorld=new an,this.matrixAutoUpdate=di.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=di.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kM,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ia.setFromAxisAngle(e,t),this.quaternion.multiply(ia),this}rotateOnWorldAxis(e,t){return ia.setFromAxisAngle(e,t),this.quaternion.premultiply(ia),this}rotateX(e){return this.rotateOnAxis(Qv,e)}rotateY(e){return this.rotateOnAxis(Jv,e)}rotateZ(e){return this.rotateOnAxis(ex,e)}translateOnAxis(e,t){return Zv.copy(e).applyQuaternion(this.quaternion),this.position.add(Zv.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Qv,e)}translateY(e){return this.translateOnAxis(Jv,e)}translateZ(e){return this.translateOnAxis(ex,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ur.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ou.copy(e):Ou.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),bl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ur.lookAt(bl,Ou,this.up):Ur.lookAt(Ou,bl,this.up),this.quaternion.setFromRotationMatrix(Ur),r&&(Ur.extractRotation(r.matrixWorld),ia.setFromRotationMatrix(Ur),this.quaternion.premultiply(ia.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(tx),ra.child=e,this.dispatchEvent(ra),ra.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Xb),Fh.child=e,this.dispatchEvent(Fh),Fh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ur.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ur.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ur),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(tx),ra.child=e,this.dispatchEvent(ra),ra.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bl,e,Wb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bl,jb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}di.DEFAULT_UP=new H(0,1,0);di.DEFAULT_MATRIX_AUTO_UPDATE=!0;di.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const rr=new H,Fr=new H,Oh=new H,Or=new H,sa=new H,oa=new H,nx=new H,kh=new H,zh=new H,Bh=new H,Vh=new Jt,Hh=new Jt,Gh=new Jt;class cr{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),rr.subVectors(e,t),r.cross(rr);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){rr.subVectors(r,t),Fr.subVectors(i,t),Oh.subVectors(e,t);const o=rr.dot(rr),a=rr.dot(Fr),l=rr.dot(Oh),c=Fr.dot(Fr),u=Fr.dot(Oh),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(c*l-a*u)*f,v=(o*u-a*l)*f;return s.set(1-p-v,v,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Or)===null?!1:Or.x>=0&&Or.y>=0&&Or.x+Or.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Or)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Or.x),l.addScaledVector(o,Or.y),l.addScaledVector(a,Or.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return Vh.setScalar(0),Hh.setScalar(0),Gh.setScalar(0),Vh.fromBufferAttribute(e,t),Hh.fromBufferAttribute(e,i),Gh.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Vh,s.x),o.addScaledVector(Hh,s.y),o.addScaledVector(Gh,s.z),o}static isFrontFacing(e,t,i,r){return rr.subVectors(i,t),Fr.subVectors(e,t),rr.cross(Fr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return rr.subVectors(this.c,this.b),Fr.subVectors(this.a,this.b),rr.cross(Fr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return cr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return cr.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return cr.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return cr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return cr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;sa.subVectors(r,i),oa.subVectors(s,i),kh.subVectors(e,i);const l=sa.dot(kh),c=oa.dot(kh);if(l<=0&&c<=0)return t.copy(i);zh.subVectors(e,r);const u=sa.dot(zh),d=oa.dot(zh);if(u>=0&&d<=u)return t.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(sa,o);Bh.subVectors(e,s);const p=sa.dot(Bh),v=oa.dot(Bh);if(v>=0&&p<=v)return t.copy(s);const _=p*c-l*v;if(_<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(i).addScaledVector(oa,a);const m=u*v-p*d;if(m<=0&&d-u>=0&&p-v>=0)return nx.subVectors(s,r),a=(d-u)/(d-u+(p-v)),t.copy(r).addScaledVector(nx,a);const h=1/(m+_+f);return o=_*h,a=f*h,t.copy(i).addScaledVector(sa,o).addScaledVector(oa,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const zM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ds={h:0,s:0,l:0},ku={h:0,s:0,l:0};function Wh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Mt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Bi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=mt.workingColorSpace){return this.r=e,this.g=t,this.b=i,mt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=mt.workingColorSpace){if(e=Db(e,1),t=ut(t,0,1),i=ut(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Wh(o,s,e+1/3),this.g=Wh(o,s,e),this.b=Wh(o,s,e-1/3)}return mt.colorSpaceToWorking(this,r),this}setStyle(e,t=Bi){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Bi){const i=zM[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zr(e.r),this.g=Zr(e.g),this.b=Zr(e.b),this}copyLinearToSRGB(e){return this.r=Ha(e.r),this.g=Ha(e.g),this.b=Ha(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bi){return mt.workingToColorSpace(Rn.copy(this),e),Math.round(ut(Rn.r*255,0,255))*65536+Math.round(ut(Rn.g*255,0,255))*256+Math.round(ut(Rn.b*255,0,255))}getHexString(e=Bi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.workingToColorSpace(Rn.copy(this),t);const i=Rn.r,r=Rn.g,s=Rn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=mt.workingColorSpace){return mt.workingToColorSpace(Rn.copy(this),t),e.r=Rn.r,e.g=Rn.g,e.b=Rn.b,e}getStyle(e=Bi){mt.workingToColorSpace(Rn.copy(this),e);const t=Rn.r,i=Rn.g,r=Rn.b;return e!==Bi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ds),this.setHSL(ds.h+e,ds.s+t,ds.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ds),e.getHSL(ku);const i=Ah(ds.h,ku.h,t),r=Ah(ds.s,ku.s,t),s=Ah(ds.l,ku.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rn=new Mt;Mt.NAMES=zM;let Yb=0;class Kc extends fl{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yb++}),this.uuid=Yc(),this.name="",this.type="Material",this.blending=Va,this.side=js,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ym,this.blendDst=Sm,this.blendEquation=po,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Mt(0,0,0),this.blendAlpha=0,this.depthFunc=il,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zo,this.stencilZFail=Zo,this.stencilZPass=Zo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Va&&(i.blending=this.blending),this.side!==js&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ym&&(i.blendSrc=this.blendSrc),this.blendDst!==Sm&&(i.blendDst=this.blendDst),this.blendEquation!==po&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==il&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Zo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Zo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class H_ extends Kc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ss,this.combine=wM,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const tn=new H,zu=new vt;let $b=0;class Qi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$b++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Gv,this.updateRanges=[],this.gpuType=$r,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)zu.fromBufferAttribute(this,t),zu.applyMatrix3(e),this.setXY(t,zu.x,zu.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix3(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Tl(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Qn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Tl(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Tl(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Tl(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Tl(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Qn(t,this.array),i=Qn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Qn(t,this.array),i=Qn(i,this.array),r=Qn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Qn(t,this.array),i=Qn(i,this.array),r=Qn(r,this.array),s=Qn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gv&&(e.usage=this.usage),e}}class BM extends Qi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class VM extends Qi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Pr extends Qi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let qb=0;const ki=new an,jh=new di,aa=new H,vi=new qc,Rl=new qc,mn=new H;class Nr extends fl{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qb++}),this.uuid=Yc(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(UM(e)?VM:BM)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new et().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ki.makeRotationFromQuaternion(e),this.applyMatrix4(ki),this}rotateX(e){return ki.makeRotationX(e),this.applyMatrix4(ki),this}rotateY(e){return ki.makeRotationY(e),this.applyMatrix4(ki),this}rotateZ(e){return ki.makeRotationZ(e),this.applyMatrix4(ki),this}translate(e,t,i){return ki.makeTranslation(e,t,i),this.applyMatrix4(ki),this}scale(e,t,i){return ki.makeScale(e,t,i),this.applyMatrix4(ki),this}lookAt(e){return jh.lookAt(e),jh.updateMatrix(),this.applyMatrix4(jh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(aa).negate(),this.translate(aa.x,aa.y,aa.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Pr(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];vi.setFromBufferAttribute(s),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,vi.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,vi.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(vi.min),this.boundingBox.expandByPoint(vi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ld);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(vi.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Rl.setFromBufferAttribute(a),this.morphTargetsRelative?(mn.addVectors(vi.min,Rl.min),vi.expandByPoint(mn),mn.addVectors(vi.max,Rl.max),vi.expandByPoint(mn)):(vi.expandByPoint(Rl.min),vi.expandByPoint(Rl.max))}vi.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)mn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(mn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)mn.fromBufferAttribute(a,c),l&&(aa.fromBufferAttribute(e,c),mn.add(aa)),r=Math.max(r,i.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qi(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new H,l[R]=new H;const c=new H,u=new H,d=new H,f=new vt,p=new vt,v=new vt,_=new H,m=new H;function h(R,M,S){c.fromBufferAttribute(i,R),u.fromBufferAttribute(i,M),d.fromBufferAttribute(i,S),f.fromBufferAttribute(s,R),p.fromBufferAttribute(s,M),v.fromBufferAttribute(s,S),u.sub(c),d.sub(c),p.sub(f),v.sub(f);const L=1/(p.x*v.y-v.x*p.y);isFinite(L)&&(_.copy(u).multiplyScalar(v.y).addScaledVector(d,-p.y).multiplyScalar(L),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(L),a[R].add(_),a[M].add(_),a[S].add(_),l[R].add(m),l[M].add(m),l[S].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let R=0,M=g.length;R<M;++R){const S=g[R],L=S.start,F=S.count;for(let V=L,$=L+F;V<$;V+=3)h(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const x=new H,y=new H,E=new H,A=new H;function w(R){E.fromBufferAttribute(r,R),A.copy(E);const M=a[R];x.copy(M),x.sub(E.multiplyScalar(E.dot(M))).normalize(),y.crossVectors(A,M);const L=y.dot(l[R])<0?-1:1;o.setXYZW(R,x.x,x.y,x.z,L)}for(let R=0,M=g.length;R<M;++R){const S=g[R],L=S.start,F=S.count;for(let V=L,$=L+F;V<$;V+=3)w(e.getX(V+0)),w(e.getX(V+1)),w(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Qi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new H,s=new H,o=new H,a=new H,l=new H,c=new H,u=new H,d=new H;if(e)for(let f=0,p=e.count;f<p;f+=3){const v=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)mn.fromBufferAttribute(e,t),mn.normalize(),e.setXYZ(t,mn.x,mn.y,mn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let p=0,v=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*u;for(let h=0;h<u;h++)f[v++]=c[p++]}return new Qi(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Nr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],p=e(f,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ix=new an,no=new OM,Bu=new Ld,rx=new H,Vu=new H,Hu=new H,Gu=new H,Xh=new H,Wu=new H,sx=new H,ju=new H;class Ar extends di{constructor(e=new Nr,t=new H_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Wu.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(Xh.fromBufferAttribute(d,e),o?Wu.addScaledVector(Xh,u):Wu.addScaledVector(Xh.sub(t),u))}t.add(Wu)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Bu.copy(i.boundingSphere),Bu.applyMatrix4(s),no.copy(e.ray).recast(e.near),!(Bu.containsPoint(no.origin)===!1&&(no.intersectSphere(Bu,rx)===null||no.origin.distanceToSquared(rx)>(e.far-e.near)**2))&&(ix.copy(s).invert(),no.copy(e.ray).applyMatrix4(ix),!(i.boundingBox!==null&&no.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,no)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,_=f.length;v<_;v++){const m=f[v],h=o[m.materialIndex],g=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=g,E=x;y<E;y+=3){const A=a.getX(y),w=a.getX(y+1),R=a.getX(y+2);r=Xu(this,h,e,i,c,u,d,A,w,R),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=v,h=_;m<h;m+=3){const g=a.getX(m),x=a.getX(m+1),y=a.getX(m+2);r=Xu(this,o,e,i,c,u,d,g,x,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,_=f.length;v<_;v++){const m=f[v],h=o[m.materialIndex],g=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=g,E=x;y<E;y+=3){const A=y,w=y+1,R=y+2;r=Xu(this,h,e,i,c,u,d,A,w,R),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=v,h=_;m<h;m+=3){const g=m,x=m+1,y=m+2;r=Xu(this,o,e,i,c,u,d,g,x,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Kb(n,e,t,i,r,s,o,a){let l;if(e.side===ui?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===js,a),l===null)return null;ju.copy(a),ju.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ju);return c<t.near||c>t.far?null:{distance:c,point:ju.clone(),object:n}}function Xu(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Vu),n.getVertexPosition(l,Hu),n.getVertexPosition(c,Gu);const u=Kb(n,e,t,i,Vu,Hu,Gu,sx);if(u){const d=new H;cr.getBarycoord(sx,Vu,Hu,Gu,d),r&&(u.uv=cr.getInterpolatedAttribute(r,a,l,c,d,new vt)),s&&(u.uv1=cr.getInterpolatedAttribute(s,a,l,c,d,new vt)),o&&(u.normal=cr.getInterpolatedAttribute(o,a,l,c,d,new H),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new H,materialIndex:0};cr.getNormal(Vu,Hu,Gu,f.normal),u.face=f,u.barycoord=d}return u}class Zc extends Nr{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,p=0;v("z","y","x",-1,-1,i,t,e,o,s,0),v("z","y","x",1,-1,i,t,-e,o,s,1),v("x","z","y",1,1,e,i,t,r,o,2),v("x","z","y",1,-1,e,i,-t,r,o,3),v("x","y","z",1,-1,e,t,i,r,s,4),v("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Pr(c,3)),this.setAttribute("normal",new Pr(u,3)),this.setAttribute("uv",new Pr(d,2));function v(_,m,h,g,x,y,E,A,w,R,M){const S=y/w,L=E/R,F=y/2,V=E/2,$=A/2,W=w+1,G=R+1;let j=0,U=0;const q=new H;for(let P=0;P<G;P++){const re=P*L-V;for(let xe=0;xe<W;xe++){const Ke=xe*S-F;q[_]=Ke*g,q[m]=re*x,q[h]=$,c.push(q.x,q.y,q.z),q[_]=0,q[m]=0,q[h]=A>0?1:-1,u.push(q.x,q.y,q.z),d.push(xe/w),d.push(1-P/R),j+=1}}for(let P=0;P<R;P++)for(let re=0;re<w;re++){const xe=f+re+W*P,Ke=f+re+W*(P+1),Oe=f+(re+1)+W*(P+1),Ve=f+(re+1)+W*P;l.push(xe,Ke,Ve),l.push(Ke,Oe,Ve),U+=6}a.addGroup(p,U,M),p+=U,f+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zc(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function al(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Vn(n){const e={};for(let t=0;t<n.length;t++){const i=al(n[t]);for(const r in i)e[r]=i[r]}return e}function Zb(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function HM(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:mt.workingColorSpace}const Qb={clone:al,merge:Vn};var Jb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,e2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xs extends Kc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jb,this.fragmentShader=e2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=al(e.uniforms),this.uniformsGroups=Zb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class GM extends di{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new an,this.projectionMatrix=new an,this.projectionMatrixInverse=new an,this.coordinateSystem=Tr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hs=new H,ox=new vt,ax=new vt;class ji extends GM{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ag*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Th*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ag*2*Math.atan(Math.tan(Th*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){hs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hs.x,hs.y).multiplyScalar(-e/hs.z),hs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(hs.x,hs.y).multiplyScalar(-e/hs.z)}getViewSize(e,t){return this.getViewBounds(e,ox,ax),t.subVectors(ax,ox)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Th*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const la=-90,ca=1;class t2 extends di{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ji(la,ca,e,t);r.layers=this.layers,this.add(r);const s=new ji(la,ca,e,t);s.layers=this.layers,this.add(s);const o=new ji(la,ca,e,t);o.layers=this.layers,this.add(o);const a=new ji(la,ca,e,t);a.layers=this.layers,this.add(a);const l=new ji(la,ca,e,t);l.layers=this.layers,this.add(l);const c=new ji(la,ca,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Tr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ud)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,f,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class WM extends fi{constructor(e=[],t=rl,i,r,s,o,a,l,c,u){super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class n2 extends Ho{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new WM(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Zc(5,5,5),s=new Xs({name:"CubemapFromEquirect",uniforms:al(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ui,blending:ks});s.uniforms.tEquirect.value=t;const o=new Ar(r,s),a=t.minFilter;return t.minFilter===Mo&&(t.minFilter=wr),new t2(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class Yu extends di{constructor(){super(),this.isGroup=!0,this.type="Group"}}const i2={type:"move"};class Yh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),h=this._getHandJoint(c,_);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,v=.005;c.inputState.pinching&&f>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(i2)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Yu;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class r2 extends di{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ss,this.environmentIntensity=1,this.environmentRotation=new ss,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const $h=new H,s2=new H,o2=new et;class fo{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=$h.subVectors(i,t).cross(s2.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta($h),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||o2.getNormalMatrix(e),r=this.coplanarPoint($h).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const io=new Ld,a2=new vt(.5,.5),$u=new H;class jM{constructor(e=new fo,t=new fo,i=new fo,r=new fo,s=new fo,o=new fo){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Tr,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],d=s[5],f=s[6],p=s[7],v=s[8],_=s[9],m=s[10],h=s[11],g=s[12],x=s[13],y=s[14],E=s[15];if(r[0].setComponents(c-o,p-u,h-v,E-g).normalize(),r[1].setComponents(c+o,p+u,h+v,E+g).normalize(),r[2].setComponents(c+a,p+d,h+_,E+x).normalize(),r[3].setComponents(c-a,p-d,h-_,E-x).normalize(),i)r[4].setComponents(l,f,m,y).normalize(),r[5].setComponents(c-l,p-f,h-m,E-y).normalize();else if(r[4].setComponents(c-l,p-f,h-m,E-y).normalize(),t===Tr)r[5].setComponents(c+l,p+f,h+m,E+y).normalize();else if(t===ud)r[5].setComponents(l,f,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),io.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),io.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(io)}intersectsSprite(e){io.center.set(0,0,0);const t=a2.distanceTo(e.center);return io.radius=.7071067811865476+t,io.applyMatrix4(e.matrixWorld),this.intersectsSphere(io)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if($u.x=r.normal.x>0?e.max.x:e.min.x,$u.y=r.normal.y>0?e.max.y:e.min.y,$u.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint($u)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class XM extends Kc{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Mt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const lx=new an,lg=new OM,qu=new Ld,Ku=new H;class l2 extends di{constructor(e=new Nr,t=new XM){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),qu.copy(i.boundingSphere),qu.applyMatrix4(r),qu.radius+=s,e.ray.intersectsSphere(qu)===!1)return;lx.copy(r).invert(),lg.copy(e.ray).applyMatrix4(lx);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let v=f,_=p;v<_;v++){const m=c.getX(v);Ku.fromBufferAttribute(d,m),cx(Ku,m,l,r,e,t,this)}}else{const f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let v=f,_=p;v<_;v++)Ku.fromBufferAttribute(d,v),cx(Ku,v,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function cx(n,e,t,i,r,s,o){const a=lg.distanceSqToPoint(n);if(a<t){const l=new H;lg.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class YM extends fi{constructor(e,t,i=Vo,r,s,o,a=hr,l=hr,c,u=Oc,d=1){if(u!==Oc&&u!==kc)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new V_(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class $M extends fi{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Qc extends Nr{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],o=[];a(r),c(i),u(),this.setAttribute("position",new Pr(s,3)),this.setAttribute("normal",new Pr(s.slice(),3)),this.setAttribute("uv",new Pr(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(g){const x=new H,y=new H,E=new H;for(let A=0;A<t.length;A+=3)p(t[A+0],x),p(t[A+1],y),p(t[A+2],E),l(x,y,E,g)}function l(g,x,y,E){const A=E+1,w=[];for(let R=0;R<=A;R++){w[R]=[];const M=g.clone().lerp(y,R/A),S=x.clone().lerp(y,R/A),L=A-R;for(let F=0;F<=L;F++)F===0&&R===A?w[R][F]=M:w[R][F]=M.clone().lerp(S,F/L)}for(let R=0;R<A;R++)for(let M=0;M<2*(A-R)-1;M++){const S=Math.floor(M/2);M%2===0?(f(w[R][S+1]),f(w[R+1][S]),f(w[R][S])):(f(w[R][S+1]),f(w[R+1][S+1]),f(w[R+1][S]))}}function c(g){const x=new H;for(let y=0;y<s.length;y+=3)x.x=s[y+0],x.y=s[y+1],x.z=s[y+2],x.normalize().multiplyScalar(g),s[y+0]=x.x,s[y+1]=x.y,s[y+2]=x.z}function u(){const g=new H;for(let x=0;x<s.length;x+=3){g.x=s[x+0],g.y=s[x+1],g.z=s[x+2];const y=m(g)/2/Math.PI+.5,E=h(g)/Math.PI+.5;o.push(y,1-E)}v(),d()}function d(){for(let g=0;g<o.length;g+=6){const x=o[g+0],y=o[g+2],E=o[g+4],A=Math.max(x,y,E),w=Math.min(x,y,E);A>.9&&w<.1&&(x<.2&&(o[g+0]+=1),y<.2&&(o[g+2]+=1),E<.2&&(o[g+4]+=1))}}function f(g){s.push(g.x,g.y,g.z)}function p(g,x){const y=g*3;x.x=e[y+0],x.y=e[y+1],x.z=e[y+2]}function v(){const g=new H,x=new H,y=new H,E=new H,A=new vt,w=new vt,R=new vt;for(let M=0,S=0;M<s.length;M+=9,S+=6){g.set(s[M+0],s[M+1],s[M+2]),x.set(s[M+3],s[M+4],s[M+5]),y.set(s[M+6],s[M+7],s[M+8]),A.set(o[S+0],o[S+1]),w.set(o[S+2],o[S+3]),R.set(o[S+4],o[S+5]),E.copy(g).add(x).add(y).divideScalar(3);const L=m(E);_(A,S+0,g,L),_(w,S+2,x,L),_(R,S+4,y,L)}}function _(g,x,y,E){E<0&&g.x===1&&(o[x]=g.x-1),y.x===0&&y.z===0&&(o[x]=E/2/Math.PI+.5)}function m(g){return Math.atan2(g.z,-g.x)}function h(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qc(e.vertices,e.indices,e.radius,e.details)}}class G_ extends Qc{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new G_(e.radius,e.detail)}}class W_ extends Qc{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new W_(e.radius,e.detail)}}class Id extends Nr{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,f=t/l,p=[],v=[],_=[],m=[];for(let h=0;h<u;h++){const g=h*f-o;for(let x=0;x<c;x++){const y=x*d-s;v.push(y,-g,0),_.push(0,0,1),m.push(x/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let g=0;g<a;g++){const x=g+c*h,y=g+c*(h+1),E=g+1+c*(h+1),A=g+1+c*h;p.push(x,y,A),p.push(y,E,A)}this.setIndex(p),this.setAttribute("position",new Pr(v,3)),this.setAttribute("normal",new Pr(_,3)),this.setAttribute("uv",new Pr(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Id(e.width,e.height,e.widthSegments,e.heightSegments)}}class j_ extends Qc{constructor(e=1,t=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,r,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new j_(e.radius,e.detail)}}class c2 extends Kc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class u2 extends Kc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class f2 extends GM{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class d2 extends ji{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function ux(n,e,t,i){const r=h2(i);switch(t){case PM:return n*e;case NM:return n*e/r.components*r.byteLength;case k_:return n*e/r.components*r.byteLength;case LM:return n*e*2/r.components*r.byteLength;case z_:return n*e*2/r.components*r.byteLength;case DM:return n*e*3/r.components*r.byteLength;case ur:return n*e*4/r.components*r.byteLength;case B_:return n*e*4/r.components*r.byteLength;case Mf:case Ef:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case wf:case Tf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Im:case Fm:return Math.max(n,16)*Math.max(e,8)/4;case Lm:case Um:return Math.max(n,8)*Math.max(e,8)/2;case Om:case km:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case zm:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Bm:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Vm:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Hm:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Gm:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Wm:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case jm:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Xm:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ym:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case $m:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case qm:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Km:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Zm:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Qm:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Jm:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case eg:case tg:case ng:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ig:case rg:return Math.ceil(n/4)*Math.ceil(e/4)*8;case sg:case og:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function h2(n){switch(n){case rs:case AM:return{byteLength:1,components:1};case Uc:case CM:case Xc:return{byteLength:2,components:1};case F_:case O_:return{byteLength:2,components:4};case Vo:case U_:case $r:return{byteLength:4,components:1};case bM:case RM:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:I_}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=I_);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function qM(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function p2(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((p,v)=>p.start-v.start);let f=0;for(let p=1;p<d.length;p++){const v=d[f],_=d[p];_.start<=v.start+v.count+1?v.count=Math.max(v.count,_.start+_.count-v.start):(++f,d[f]=_)}d.length=f+1;for(let p=0,v=d.length;p<v;p++){const _=d[p];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var m2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,g2=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,_2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,v2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,x2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,y2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,S2=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,M2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,E2=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,w2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,T2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,A2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,C2=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,b2=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,R2=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,P2=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,D2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,N2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,L2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,I2=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,U2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,F2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,O2=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,k2=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,z2=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,B2=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,V2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,H2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,G2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,W2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,j2="gl_FragColor = linearToOutputTexel( gl_FragColor );",X2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Y2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,$2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,q2=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,K2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Z2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Q2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,J2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,eR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nR=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,iR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sR=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,oR=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,aR=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,lR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cR=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,uR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fR=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dR=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,hR=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,pR=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,mR=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,gR=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_R=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,SR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,MR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ER=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,wR=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,TR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,AR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,CR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,RR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,PR=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,DR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,NR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,LR=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,IR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,FR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,OR=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,kR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,BR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,VR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,HR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,GR=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,WR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,XR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,YR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$R=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,KR=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ZR=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,QR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,JR=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,eP=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tP=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,nP=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,iP=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,rP=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sP=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,oP=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,aP=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,lP=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,cP=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,hP=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pP=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mP=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_P=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xP=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yP=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,SP=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,MP=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,EP=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,wP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,TP=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AP=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,CP=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bP=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,RP=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PP=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DP=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NP=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,LP=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IP=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,UP=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,FP=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,OP=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kP=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,zP=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BP=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VP=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HP=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,GP=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,WP=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jP=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,XP=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,YP=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nt={alphahash_fragment:m2,alphahash_pars_fragment:g2,alphamap_fragment:_2,alphamap_pars_fragment:v2,alphatest_fragment:x2,alphatest_pars_fragment:y2,aomap_fragment:S2,aomap_pars_fragment:M2,batching_pars_vertex:E2,batching_vertex:w2,begin_vertex:T2,beginnormal_vertex:A2,bsdfs:C2,iridescence_fragment:b2,bumpmap_pars_fragment:R2,clipping_planes_fragment:P2,clipping_planes_pars_fragment:D2,clipping_planes_pars_vertex:N2,clipping_planes_vertex:L2,color_fragment:I2,color_pars_fragment:U2,color_pars_vertex:F2,color_vertex:O2,common:k2,cube_uv_reflection_fragment:z2,defaultnormal_vertex:B2,displacementmap_pars_vertex:V2,displacementmap_vertex:H2,emissivemap_fragment:G2,emissivemap_pars_fragment:W2,colorspace_fragment:j2,colorspace_pars_fragment:X2,envmap_fragment:Y2,envmap_common_pars_fragment:$2,envmap_pars_fragment:q2,envmap_pars_vertex:K2,envmap_physical_pars_fragment:aR,envmap_vertex:Z2,fog_vertex:Q2,fog_pars_vertex:J2,fog_fragment:eR,fog_pars_fragment:tR,gradientmap_pars_fragment:nR,lightmap_pars_fragment:iR,lights_lambert_fragment:rR,lights_lambert_pars_fragment:sR,lights_pars_begin:oR,lights_toon_fragment:lR,lights_toon_pars_fragment:cR,lights_phong_fragment:uR,lights_phong_pars_fragment:fR,lights_physical_fragment:dR,lights_physical_pars_fragment:hR,lights_fragment_begin:pR,lights_fragment_maps:mR,lights_fragment_end:gR,logdepthbuf_fragment:_R,logdepthbuf_pars_fragment:vR,logdepthbuf_pars_vertex:xR,logdepthbuf_vertex:yR,map_fragment:SR,map_pars_fragment:MR,map_particle_fragment:ER,map_particle_pars_fragment:wR,metalnessmap_fragment:TR,metalnessmap_pars_fragment:AR,morphinstance_vertex:CR,morphcolor_vertex:bR,morphnormal_vertex:RR,morphtarget_pars_vertex:PR,morphtarget_vertex:DR,normal_fragment_begin:NR,normal_fragment_maps:LR,normal_pars_fragment:IR,normal_pars_vertex:UR,normal_vertex:FR,normalmap_pars_fragment:OR,clearcoat_normal_fragment_begin:kR,clearcoat_normal_fragment_maps:zR,clearcoat_pars_fragment:BR,iridescence_pars_fragment:VR,opaque_fragment:HR,packing:GR,premultiplied_alpha_fragment:WR,project_vertex:jR,dithering_fragment:XR,dithering_pars_fragment:YR,roughnessmap_fragment:$R,roughnessmap_pars_fragment:qR,shadowmap_pars_fragment:KR,shadowmap_pars_vertex:ZR,shadowmap_vertex:QR,shadowmask_pars_fragment:JR,skinbase_vertex:eP,skinning_pars_vertex:tP,skinning_vertex:nP,skinnormal_vertex:iP,specularmap_fragment:rP,specularmap_pars_fragment:sP,tonemapping_fragment:oP,tonemapping_pars_fragment:aP,transmission_fragment:lP,transmission_pars_fragment:cP,uv_pars_fragment:uP,uv_pars_vertex:fP,uv_vertex:dP,worldpos_vertex:hP,background_vert:pP,background_frag:mP,backgroundCube_vert:gP,backgroundCube_frag:_P,cube_vert:vP,cube_frag:xP,depth_vert:yP,depth_frag:SP,distanceRGBA_vert:MP,distanceRGBA_frag:EP,equirect_vert:wP,equirect_frag:TP,linedashed_vert:AP,linedashed_frag:CP,meshbasic_vert:bP,meshbasic_frag:RP,meshlambert_vert:PP,meshlambert_frag:DP,meshmatcap_vert:NP,meshmatcap_frag:LP,meshnormal_vert:IP,meshnormal_frag:UP,meshphong_vert:FP,meshphong_frag:OP,meshphysical_vert:kP,meshphysical_frag:zP,meshtoon_vert:BP,meshtoon_frag:VP,points_vert:HP,points_frag:GP,shadow_vert:WP,shadow_frag:jP,sprite_vert:XP,sprite_frag:YP},_e={common:{diffuse:{value:new Mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new Mt(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},xr={basic:{uniforms:Vn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:Vn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Mt(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:Vn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Mt(0)},specular:{value:new Mt(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:Vn([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:Vn([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Mt(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:Vn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:Vn([_e.points,_e.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:Vn([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:Vn([_e.common,_e.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:Vn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:Vn([_e.sprite,_e.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:Vn([_e.common,_e.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:Vn([_e.lights,_e.fog,{color:{value:new Mt(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};xr.physical={uniforms:Vn([xr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new Mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new Mt(0)},specularColor:{value:new Mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const Zu={r:0,b:0,g:0},ro=new ss,$P=new an;function qP(n,e,t,i,r,s,o){const a=new Mt(0);let l=s===!0?0:1,c,u,d=null,f=0,p=null;function v(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?t:e).get(y)),y}function _(x){let y=!1;const E=v(x);E===null?h(a,l):E&&E.isColor&&(h(E,1),y=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(x,y){const E=v(y);E&&(E.isCubeTexture||E.mapping===Nd)?(u===void 0&&(u=new Ar(new Zc(1,1,1),new Xs({name:"BackgroundCubeMaterial",uniforms:al(xr.backgroundCube.uniforms),vertexShader:xr.backgroundCube.vertexShader,fragmentShader:xr.backgroundCube.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),ro.copy(y.backgroundRotation),ro.x*=-1,ro.y*=-1,ro.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ro.y*=-1,ro.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4($P.makeRotationFromEuler(ro)),u.material.toneMapped=mt.getTransfer(E.colorSpace)!==wt,(d!==E||f!==E.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=E,f=E.version,p=n.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Ar(new Id(2,2),new Xs({name:"BackgroundMaterial",uniforms:al(xr.background.uniforms),vertexShader:xr.background.vertexShader,fragmentShader:xr.background.fragmentShader,side:js,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=mt.getTransfer(E.colorSpace)!==wt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(d!==E||f!==E.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=E,f=E.version,p=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function h(x,y){x.getRGB(Zu,HM(n)),i.buffers.color.setClear(Zu.r,Zu.g,Zu.b,y,o)}function g(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,y=1){a.set(x),l=y,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,h(a,l)},render:_,addToRenderList:m,dispose:g}}function KP(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(S,L,F,V,$){let W=!1;const G=d(V,F,L);s!==G&&(s=G,c(s.object)),W=p(S,V,F,$),W&&v(S,V,F,$),$!==null&&e.update($,n.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,y(S,L,F,V),$!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function d(S,L,F){const V=F.wireframe===!0;let $=i[S.id];$===void 0&&($={},i[S.id]=$);let W=$[L.id];W===void 0&&(W={},$[L.id]=W);let G=W[V];return G===void 0&&(G=f(l()),W[V]=G),G}function f(S){const L=[],F=[],V=[];for(let $=0;$<t;$++)L[$]=0,F[$]=0,V[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:F,attributeDivisors:V,object:S,attributes:{},index:null}}function p(S,L,F,V){const $=s.attributes,W=L.attributes;let G=0;const j=F.getAttributes();for(const U in j)if(j[U].location>=0){const P=$[U];let re=W[U];if(re===void 0&&(U==="instanceMatrix"&&S.instanceMatrix&&(re=S.instanceMatrix),U==="instanceColor"&&S.instanceColor&&(re=S.instanceColor)),P===void 0||P.attribute!==re||re&&P.data!==re.data)return!0;G++}return s.attributesNum!==G||s.index!==V}function v(S,L,F,V){const $={},W=L.attributes;let G=0;const j=F.getAttributes();for(const U in j)if(j[U].location>=0){let P=W[U];P===void 0&&(U==="instanceMatrix"&&S.instanceMatrix&&(P=S.instanceMatrix),U==="instanceColor"&&S.instanceColor&&(P=S.instanceColor));const re={};re.attribute=P,P&&P.data&&(re.data=P.data),$[U]=re,G++}s.attributes=$,s.attributesNum=G,s.index=V}function _(){const S=s.newAttributes;for(let L=0,F=S.length;L<F;L++)S[L]=0}function m(S){h(S,0)}function h(S,L){const F=s.newAttributes,V=s.enabledAttributes,$=s.attributeDivisors;F[S]=1,V[S]===0&&(n.enableVertexAttribArray(S),V[S]=1),$[S]!==L&&(n.vertexAttribDivisor(S,L),$[S]=L)}function g(){const S=s.newAttributes,L=s.enabledAttributes;for(let F=0,V=L.length;F<V;F++)L[F]!==S[F]&&(n.disableVertexAttribArray(F),L[F]=0)}function x(S,L,F,V,$,W,G){G===!0?n.vertexAttribIPointer(S,L,F,$,W):n.vertexAttribPointer(S,L,F,V,$,W)}function y(S,L,F,V){_();const $=V.attributes,W=F.getAttributes(),G=L.defaultAttributeValues;for(const j in W){const U=W[j];if(U.location>=0){let q=$[j];if(q===void 0&&(j==="instanceMatrix"&&S.instanceMatrix&&(q=S.instanceMatrix),j==="instanceColor"&&S.instanceColor&&(q=S.instanceColor)),q!==void 0){const P=q.normalized,re=q.itemSize,xe=e.get(q);if(xe===void 0)continue;const Ke=xe.buffer,Oe=xe.type,Ve=xe.bytesPerElement,K=Oe===n.INT||Oe===n.UNSIGNED_INT||q.gpuType===U_;if(q.isInterleavedBufferAttribute){const J=q.data,pe=J.stride,Pe=q.offset;if(J.isInstancedInterleavedBuffer){for(let Ce=0;Ce<U.locationSize;Ce++)h(U.location+Ce,J.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Ce=0;Ce<U.locationSize;Ce++)m(U.location+Ce);n.bindBuffer(n.ARRAY_BUFFER,Ke);for(let Ce=0;Ce<U.locationSize;Ce++)x(U.location+Ce,re/U.locationSize,Oe,P,pe*Ve,(Pe+re/U.locationSize*Ce)*Ve,K)}else{if(q.isInstancedBufferAttribute){for(let J=0;J<U.locationSize;J++)h(U.location+J,q.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let J=0;J<U.locationSize;J++)m(U.location+J);n.bindBuffer(n.ARRAY_BUFFER,Ke);for(let J=0;J<U.locationSize;J++)x(U.location+J,re/U.locationSize,Oe,P,re*Ve,re/U.locationSize*J*Ve,K)}}else if(G!==void 0){const P=G[j];if(P!==void 0)switch(P.length){case 2:n.vertexAttrib2fv(U.location,P);break;case 3:n.vertexAttrib3fv(U.location,P);break;case 4:n.vertexAttrib4fv(U.location,P);break;default:n.vertexAttrib1fv(U.location,P)}}}}g()}function E(){R();for(const S in i){const L=i[S];for(const F in L){const V=L[F];for(const $ in V)u(V[$].object),delete V[$];delete L[F]}delete i[S]}}function A(S){if(i[S.id]===void 0)return;const L=i[S.id];for(const F in L){const V=L[F];for(const $ in V)u(V[$].object),delete V[$];delete L[F]}delete i[S.id]}function w(S){for(const L in i){const F=i[L];if(F[S.id]===void 0)continue;const V=F[S.id];for(const $ in V)u(V[$].object),delete V[$];delete F[S.id]}}function R(){M(),o=!0,s!==r&&(s=r,c(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:M,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:g}}function ZP(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),t.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let p=0;for(let v=0;v<d;v++)p+=u[v];t.update(p,i,1)}function l(c,u,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)o(c[v],u[v],f[v]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let v=0;for(let _=0;_<d;_++)v+=u[_]*f[_];t.update(v,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function QP(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==ur&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const R=w===Xc&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==rs&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==$r&&!R)}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),g=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=v>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:v,maxTextureSize:_,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:g,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:E,maxSamples:A}}function JP(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new fo,a=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,p){const v=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,h=n.get(d);if(!r||v===null||v.length===0||s&&!m)s?u(null):c();else{const g=s?0:i,x=g*4;let y=h.clippingState||null;l.value=y,y=u(v,f,x,p);for(let E=0;E!==x;++E)y[E]=t[E];h.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,p,v){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,v!==!0||m===null){const h=p+_*4,g=f.matrixWorldInverse;a.getNormalMatrix(g),(m===null||m.length<h)&&(m=new Float32Array(h));for(let x=0,y=p;x!==_;++x,y+=4)o.copy(d[x]).applyMatrix4(g,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function e3(n){let e=new WeakMap;function t(o,a){return a===Rm?o.mapping=rl:a===Pm&&(o.mapping=sl),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Rm||a===Pm)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new n2(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const ba=4,fx=[.125,.215,.35,.446,.526,.582],mo=20,qh=new f2,dx=new Mt;let Kh=null,Zh=0,Qh=0,Jh=!1;const ho=(1+Math.sqrt(5))/2,ua=1/ho,hx=[new H(-ho,ua,0),new H(ho,ua,0),new H(-ua,0,ho),new H(ua,0,ho),new H(0,ho,-ua),new H(0,ho,ua),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)],t3=new H;class px{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=t3}=s;Kh=this._renderer.getRenderTarget(),Zh=this._renderer.getActiveCubeFace(),Qh=this._renderer.getActiveMipmapLevel(),Jh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_x(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Kh,Zh,Qh),this._renderer.xr.enabled=Jh,e.scissorTest=!1,Qu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===rl||e.mapping===sl?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Kh=this._renderer.getRenderTarget(),Zh=this._renderer.getActiveCubeFace(),Qh=this._renderer.getActiveMipmapLevel(),Jh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:wr,minFilter:wr,generateMipmaps:!1,type:Xc,format:ur,colorSpace:ol,depthBuffer:!1},r=mx(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mx(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=n3(s)),this._blurMaterial=i3(s,e,t)}return r}_compileMaterial(e){const t=new Ar(this._lodPlanes[0],e);this._renderer.compile(t,qh)}_sceneToCubeUV(e,t,i,r,s){const l=new ji(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(dx),d.toneMapping=zs,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null));const _=new H_({name:"PMREM.Background",side:ui,depthWrite:!1,depthTest:!1}),m=new Ar(new Zc,_);let h=!1;const g=e.background;g?g.isColor&&(_.color.copy(g),e.background=null,h=!0):(_.color.copy(dx),h=!0);for(let x=0;x<6;x++){const y=x%3;y===0?(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[x],s.y,s.z)):y===1?(l.up.set(0,0,c[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[x],s.z)):(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[x]));const E=this._cubeSize;Qu(r,y*E,x>2?E:0,E,E),d.setRenderTarget(r),h&&d.render(m,l),d.render(e,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=p,d.autoClear=f,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===rl||e.mapping===sl;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=_x()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gx());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ar(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Qu(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,qh)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=hx[(r-s-1)%hx.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Ar(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*mo-1),_=s/v,m=isFinite(s)?1+Math.floor(u*_):mo;m>mo&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${mo}`);const h=[];let g=0;for(let w=0;w<mo;++w){const R=w/_,M=Math.exp(-R*R/2);h.push(M),w===0?g+=M:w<m&&(g+=2*M)}for(let w=0;w<h.length;w++)h[w]=h[w]/g;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=v,f.mipInt.value=x-i;const y=this._sizeLods[r],E=3*y*(r>x-ba?r-x+ba:0),A=4*(this._cubeSize-y);Qu(t,E,A,3*y,2*y),l.setRenderTarget(t),l.render(d,qh)}}function n3(n){const e=[],t=[],i=[];let r=n;const s=n-ba+1+fx.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-ba?l=fx[o-n+ba-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,v=6,_=3,m=2,h=1,g=new Float32Array(_*v*p),x=new Float32Array(m*v*p),y=new Float32Array(h*v*p);for(let A=0;A<p;A++){const w=A%3*2/3-1,R=A>2?0:-1,M=[w,R,0,w+2/3,R,0,w+2/3,R+1,0,w,R,0,w+2/3,R+1,0,w,R+1,0];g.set(M,_*v*A),x.set(f,m*v*A);const S=[A,A,A,A,A,A];y.set(S,h*v*A)}const E=new Nr;E.setAttribute("position",new Qi(g,_)),E.setAttribute("uv",new Qi(x,m)),E.setAttribute("faceIndex",new Qi(y,h)),e.push(E),r>ba&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function mx(n,e,t){const i=new Ho(n,e,t);return i.texture.mapping=Nd,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Qu(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function i3(n,e,t){const i=new Float32Array(mo),r=new H(0,1,0);return new Xs({name:"SphericalGaussianBlur",defines:{n:mo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:X_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ks,depthTest:!1,depthWrite:!1})}function gx(){return new Xs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:X_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ks,depthTest:!1,depthWrite:!1})}function _x(){return new Xs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:X_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ks,depthTest:!1,depthWrite:!1})}function X_(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function r3(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Rm||l===Pm,u=l===rl||l===sl;if(c||u){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new px(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new px(n)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function s3(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&zc("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function o3(n,e,t,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const p in f)e.update(f[p],n.ARRAY_BUFFER)}function c(d){const f=[],p=d.index,v=d.attributes.position;let _=0;if(p!==null){const g=p.array;_=p.version;for(let x=0,y=g.length;x<y;x+=3){const E=g[x+0],A=g[x+1],w=g[x+2];f.push(E,A,A,w,w,E)}}else if(v!==void 0){const g=v.array;_=v.version;for(let x=0,y=g.length/3-1;x<y;x+=3){const E=x+0,A=x+1,w=x+2;f.push(E,A,A,w,w,E)}}else return;const m=new(UM(f)?VM:BM)(f,1);m.version=_;const h=s.get(d);h&&e.remove(h),s.set(d,m)}function u(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function a3(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){n.drawElements(i,p,s,f*o),t.update(p,i,1)}function c(f,p,v){v!==0&&(n.drawElementsInstanced(i,p,s,f*o,v),t.update(p,i,v))}function u(f,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,v);let m=0;for(let h=0;h<v;h++)m+=p[h];t.update(m,i,1)}function d(f,p,v,_){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<f.length;h++)c(f[h]/o,p[h],_[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,_,0,v);let h=0;for(let g=0;g<v;g++)h+=p[g]*_[g];t.update(h,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function l3(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function c3(n,e,t){const i=new WeakMap,r=new Jt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let S=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;f!==void 0&&f.texture.dispose();const v=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let y=0;v===!0&&(y=1),_===!0&&(y=2),m===!0&&(y=3);let E=a.attributes.position.count*y,A=1;E>e.maxTextureSize&&(A=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const w=new Float32Array(E*A*4*d),R=new FM(w,E,A,d);R.type=$r,R.needsUpdate=!0;const M=y*4;for(let L=0;L<d;L++){const F=h[L],V=g[L],$=x[L],W=E*A*4*L;for(let G=0;G<F.count;G++){const j=G*M;v===!0&&(r.fromBufferAttribute(F,G),w[W+j+0]=r.x,w[W+j+1]=r.y,w[W+j+2]=r.z,w[W+j+3]=0),_===!0&&(r.fromBufferAttribute(V,G),w[W+j+4]=r.x,w[W+j+5]=r.y,w[W+j+6]=r.z,w[W+j+7]=0),m===!0&&(r.fromBufferAttribute($,G),w[W+j+8]=r.x,w[W+j+9]=r.y,w[W+j+10]=r.z,w[W+j+11]=$.itemSize===4?r.w:1)}}f={count:d,texture:R,size:new vt(E,A)},i.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const _=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function u3(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const KM=new fi,vx=new YM(1,1),ZM=new FM,QM=new zb,JM=new WM,xx=[],yx=[],Sx=new Float32Array(16),Mx=new Float32Array(9),Ex=new Float32Array(4);function dl(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=xx[r];if(s===void 0&&(s=new Float32Array(r),xx[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function hn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function pn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ud(n,e){let t=yx[e];t===void 0&&(t=new Int32Array(e),yx[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function f3(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function d3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;n.uniform2fv(this.addr,e),pn(t,e)}}function h3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(hn(t,e))return;n.uniform3fv(this.addr,e),pn(t,e)}}function p3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;n.uniform4fv(this.addr,e),pn(t,e)}}function m3(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(hn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),pn(t,e)}else{if(hn(t,i))return;Ex.set(i),n.uniformMatrix2fv(this.addr,!1,Ex),pn(t,i)}}function g3(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(hn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),pn(t,e)}else{if(hn(t,i))return;Mx.set(i),n.uniformMatrix3fv(this.addr,!1,Mx),pn(t,i)}}function _3(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(hn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),pn(t,e)}else{if(hn(t,i))return;Sx.set(i),n.uniformMatrix4fv(this.addr,!1,Sx),pn(t,i)}}function v3(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function x3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;n.uniform2iv(this.addr,e),pn(t,e)}}function y3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;n.uniform3iv(this.addr,e),pn(t,e)}}function S3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;n.uniform4iv(this.addr,e),pn(t,e)}}function M3(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function E3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;n.uniform2uiv(this.addr,e),pn(t,e)}}function w3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;n.uniform3uiv(this.addr,e),pn(t,e)}}function T3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;n.uniform4uiv(this.addr,e),pn(t,e)}}function A3(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(vx.compareFunction=IM,s=vx):s=KM,t.setTexture2D(e||s,r)}function C3(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||QM,r)}function b3(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||JM,r)}function R3(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||ZM,r)}function P3(n){switch(n){case 5126:return f3;case 35664:return d3;case 35665:return h3;case 35666:return p3;case 35674:return m3;case 35675:return g3;case 35676:return _3;case 5124:case 35670:return v3;case 35667:case 35671:return x3;case 35668:case 35672:return y3;case 35669:case 35673:return S3;case 5125:return M3;case 36294:return E3;case 36295:return w3;case 36296:return T3;case 35678:case 36198:case 36298:case 36306:case 35682:return A3;case 35679:case 36299:case 36307:return C3;case 35680:case 36300:case 36308:case 36293:return b3;case 36289:case 36303:case 36311:case 36292:return R3}}function D3(n,e){n.uniform1fv(this.addr,e)}function N3(n,e){const t=dl(e,this.size,2);n.uniform2fv(this.addr,t)}function L3(n,e){const t=dl(e,this.size,3);n.uniform3fv(this.addr,t)}function I3(n,e){const t=dl(e,this.size,4);n.uniform4fv(this.addr,t)}function U3(n,e){const t=dl(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function F3(n,e){const t=dl(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function O3(n,e){const t=dl(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function k3(n,e){n.uniform1iv(this.addr,e)}function z3(n,e){n.uniform2iv(this.addr,e)}function B3(n,e){n.uniform3iv(this.addr,e)}function V3(n,e){n.uniform4iv(this.addr,e)}function H3(n,e){n.uniform1uiv(this.addr,e)}function G3(n,e){n.uniform2uiv(this.addr,e)}function W3(n,e){n.uniform3uiv(this.addr,e)}function j3(n,e){n.uniform4uiv(this.addr,e)}function X3(n,e,t){const i=this.cache,r=e.length,s=Ud(t,r);hn(i,s)||(n.uniform1iv(this.addr,s),pn(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||KM,s[o])}function Y3(n,e,t){const i=this.cache,r=e.length,s=Ud(t,r);hn(i,s)||(n.uniform1iv(this.addr,s),pn(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||QM,s[o])}function $3(n,e,t){const i=this.cache,r=e.length,s=Ud(t,r);hn(i,s)||(n.uniform1iv(this.addr,s),pn(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||JM,s[o])}function q3(n,e,t){const i=this.cache,r=e.length,s=Ud(t,r);hn(i,s)||(n.uniform1iv(this.addr,s),pn(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||ZM,s[o])}function K3(n){switch(n){case 5126:return D3;case 35664:return N3;case 35665:return L3;case 35666:return I3;case 35674:return U3;case 35675:return F3;case 35676:return O3;case 5124:case 35670:return k3;case 35667:case 35671:return z3;case 35668:case 35672:return B3;case 35669:case 35673:return V3;case 5125:return H3;case 36294:return G3;case 36295:return W3;case 36296:return j3;case 35678:case 36198:case 36298:case 36306:case 35682:return X3;case 35679:case 36299:case 36307:return Y3;case 35680:case 36300:case 36308:case 36293:return $3;case 36289:case 36303:case 36311:case 36292:return q3}}class Z3{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=P3(t.type)}}class Q3{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=K3(t.type)}}class J3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const ep=/(\w+)(\])?(\[|\.)?/g;function wx(n,e){n.seq.push(e),n.map[e.id]=e}function eD(n,e,t){const i=n.name,r=i.length;for(ep.lastIndex=0;;){const s=ep.exec(i),o=ep.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){wx(t,c===void 0?new Z3(a,n,e):new Q3(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new J3(a),wx(t,d)),t=d}}}class Af{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);eD(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Tx(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const tD=37297;let nD=0;function iD(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Ax=new et;function rD(n){mt._getMatrix(Ax,mt.workingColorSpace,n);const e=`mat3( ${Ax.elements.map(t=>t.toFixed(4))} )`;switch(mt.getTransfer(n)){case cd:return[e,"LinearTransferOETF"];case wt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Cx(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+iD(n.getShaderSource(e),a)}else return s}function sD(n,e){const t=rD(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function oD(n,e){let t;switch(e){case db:t="Linear";break;case hb:t="Reinhard";break;case pb:t="Cineon";break;case mb:t="ACESFilmic";break;case _b:t="AgX";break;case vb:t="Neutral";break;case gb:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ju=new H;function aD(){mt.getLuminanceCoefficients(Ju);const n=Ju.x.toFixed(4),e=Ju.y.toFixed(4),t=Ju.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lD(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vl).join(`
`)}function cD(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function uD(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Vl(n){return n!==""}function bx(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rx(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const fD=/^[ \t]*#include +<([\w\d./]+)>/gm;function cg(n){return n.replace(fD,hD)}const dD=new Map;function hD(n,e){let t=nt[e];if(t===void 0){const i=dD.get(e);if(i!==void 0)t=nt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return cg(t)}const pD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Px(n){return n.replace(pD,mD)}function mD(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Dx(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function gD(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===EM?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===jC?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===kr&&(e="SHADOWMAP_TYPE_VSM"),e}function _D(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case rl:case sl:e="ENVMAP_TYPE_CUBE";break;case Nd:e="ENVMAP_TYPE_CUBE_UV";break}return e}function vD(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case sl:e="ENVMAP_MODE_REFRACTION";break}return e}function xD(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case wM:e="ENVMAP_BLENDING_MULTIPLY";break;case ub:e="ENVMAP_BLENDING_MIX";break;case fb:e="ENVMAP_BLENDING_ADD";break}return e}function yD(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function SD(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=gD(t),c=_D(t),u=vD(t),d=xD(t),f=yD(t),p=lD(t),v=cD(s),_=r.createProgram();let m,h,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Vl).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Vl).join(`
`),h.length>0&&(h+=`
`)):(m=[Dx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vl).join(`
`),h=[Dx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zs?"#define TONE_MAPPING":"",t.toneMapping!==zs?nt.tonemapping_pars_fragment:"",t.toneMapping!==zs?oD("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,sD("linearToOutputTexel",t.outputColorSpace),aD(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vl).join(`
`)),o=cg(o),o=bx(o,t),o=Rx(o,t),a=cg(a),a=bx(a,t),a=Rx(a,t),o=Px(o),a=Px(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===Wv?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const x=g+m+o,y=g+h+a,E=Tx(r,r.VERTEX_SHADER,x),A=Tx(r,r.FRAGMENT_SHADER,y);r.attachShader(_,E),r.attachShader(_,A),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function w(L){if(n.debug.checkShaderErrors){const F=r.getProgramInfoLog(_)||"",V=r.getShaderInfoLog(E)||"",$=r.getShaderInfoLog(A)||"",W=F.trim(),G=V.trim(),j=$.trim();let U=!0,q=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(U=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,E,A);else{const P=Cx(r,E,"vertex"),re=Cx(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+W+`
`+P+`
`+re)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(G===""||j==="")&&(q=!1);q&&(L.diagnostics={runnable:U,programLog:W,vertexShader:{log:G,prefix:m},fragmentShader:{log:j,prefix:h}})}r.deleteShader(E),r.deleteShader(A),R=new Af(r,_),M=uD(r,_)}let R;this.getUniforms=function(){return R===void 0&&w(this),R};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(_,tD)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=nD++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=A,this}let MD=0;class ED{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new wD(e),t.set(e,i)),i}}class wD{constructor(e){this.id=MD++,this.code=e,this.usedTimes=0}}function TD(n,e,t,i,r,s,o){const a=new kM,l=new ED,c=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,S,L,F,V){const $=F.fog,W=V.geometry,G=M.isMeshStandardMaterial?F.environment:null,j=(M.isMeshStandardMaterial?t:e).get(M.envMap||G),U=j&&j.mapping===Nd?j.image.height:null,q=v[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const P=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,re=P!==void 0?P.length:0;let xe=0;W.morphAttributes.position!==void 0&&(xe=1),W.morphAttributes.normal!==void 0&&(xe=2),W.morphAttributes.color!==void 0&&(xe=3);let Ke,Oe,Ve,K;if(q){const ve=xr[q];Ke=ve.vertexShader,Oe=ve.fragmentShader}else Ke=M.vertexShader,Oe=M.fragmentShader,l.update(M),Ve=l.getVertexShaderID(M),K=l.getFragmentShaderID(M);const J=n.getRenderTarget(),pe=n.state.buffers.depth.getReversed(),Pe=V.isInstancedMesh===!0,Ce=V.isBatchedMesh===!0,We=!!M.map,gt=!!M.matcap,N=!!j,Ye=!!M.aoMap,Ue=!!M.lightMap,De=!!M.bumpMap,O=!!M.normalMap,st=!!M.displacementMap,ye=!!M.emissiveMap,je=!!M.metalnessMap,Qe=!!M.roughnessMap,_t=M.anisotropy>0,D=M.clearcoat>0,T=M.dispersion>0,B=M.iridescence>0,Q=M.sheen>0,ee=M.transmission>0,Z=_t&&!!M.anisotropyMap,Se=D&&!!M.clearcoatMap,le=D&&!!M.clearcoatNormalMap,be=D&&!!M.clearcoatRoughnessMap,he=B&&!!M.iridescenceMap,oe=B&&!!M.iridescenceThicknessMap,de=Q&&!!M.sheenColorMap,ke=Q&&!!M.sheenRoughnessMap,Re=!!M.specularMap,fe=!!M.specularColorMap,Xe=!!M.specularIntensityMap,I=ee&&!!M.transmissionMap,se=ee&&!!M.thicknessMap,ce=!!M.gradientMap,ge=!!M.alphaMap,ie=M.alphaTest>0,te=!!M.alphaHash,Ee=!!M.extensions;let Be=zs;M.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Be=n.toneMapping);const ht={shaderID:q,shaderType:M.type,shaderName:M.name,vertexShader:Ke,fragmentShader:Oe,defines:M.defines,customVertexShaderID:Ve,customFragmentShaderID:K,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Ce,batchingColor:Ce&&V._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&V.instanceColor!==null,instancingMorph:Pe&&V.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:J===null?n.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:ol,alphaToCoverage:!!M.alphaToCoverage,map:We,matcap:gt,envMap:N,envMapMode:N&&j.mapping,envMapCubeUVHeight:U,aoMap:Ye,lightMap:Ue,bumpMap:De,normalMap:O,displacementMap:f&&st,emissiveMap:ye,normalMapObjectSpace:O&&M.normalMapType===Eb,normalMapTangentSpace:O&&M.normalMapType===Mb,metalnessMap:je,roughnessMap:Qe,anisotropy:_t,anisotropyMap:Z,clearcoat:D,clearcoatMap:Se,clearcoatNormalMap:le,clearcoatRoughnessMap:be,dispersion:T,iridescence:B,iridescenceMap:he,iridescenceThicknessMap:oe,sheen:Q,sheenColorMap:de,sheenRoughnessMap:ke,specularMap:Re,specularColorMap:fe,specularIntensityMap:Xe,transmission:ee,transmissionMap:I,thicknessMap:se,gradientMap:ce,opaque:M.transparent===!1&&M.blending===Va&&M.alphaToCoverage===!1,alphaMap:ge,alphaTest:ie,alphaHash:te,combine:M.combine,mapUv:We&&_(M.map.channel),aoMapUv:Ye&&_(M.aoMap.channel),lightMapUv:Ue&&_(M.lightMap.channel),bumpMapUv:De&&_(M.bumpMap.channel),normalMapUv:O&&_(M.normalMap.channel),displacementMapUv:st&&_(M.displacementMap.channel),emissiveMapUv:ye&&_(M.emissiveMap.channel),metalnessMapUv:je&&_(M.metalnessMap.channel),roughnessMapUv:Qe&&_(M.roughnessMap.channel),anisotropyMapUv:Z&&_(M.anisotropyMap.channel),clearcoatMapUv:Se&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:le&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:de&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:ke&&_(M.sheenRoughnessMap.channel),specularMapUv:Re&&_(M.specularMap.channel),specularColorMapUv:fe&&_(M.specularColorMap.channel),specularIntensityMapUv:Xe&&_(M.specularIntensityMap.channel),transmissionMapUv:I&&_(M.transmissionMap.channel),thicknessMapUv:se&&_(M.thicknessMap.channel),alphaMapUv:ge&&_(M.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(O||_t),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!W.attributes.uv&&(We||ge),fog:!!$,useFog:M.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:pe,skinning:V.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:xe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:Be,decodeVideoTexture:We&&M.map.isVideoTexture===!0&&mt.getTransfer(M.map.colorSpace)===wt,decodeVideoTextureEmissive:ye&&M.emissiveMap.isVideoTexture===!0&&mt.getTransfer(M.emissiveMap.colorSpace)===wt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Wr,flipSided:M.side===ui,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ee&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ee&&M.extensions.multiDraw===!0||Ce)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ht.vertexUv1s=c.has(1),ht.vertexUv2s=c.has(2),ht.vertexUv3s=c.has(3),c.clear(),ht}function h(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const L in M.defines)S.push(L),S.push(M.defines[L]);return M.isRawShaderMaterial===!1&&(g(S,M),x(S,M),S.push(n.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function g(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function x(M,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),M.push(a.mask)}function y(M){const S=v[M.type];let L;if(S){const F=xr[S];L=Qb.clone(F.uniforms)}else L=M.uniforms;return L}function E(M,S){let L;for(let F=0,V=u.length;F<V;F++){const $=u[F];if($.cacheKey===S){L=$,++L.usedTimes;break}}return L===void 0&&(L=new SD(n,S,M,s),u.push(L)),L}function A(M){if(--M.usedTimes===0){const S=u.indexOf(M);u[S]=u[u.length-1],u.pop(),M.destroy()}}function w(M){l.remove(M)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:y,acquireProgram:E,releaseProgram:A,releaseShaderCache:w,programs:u,dispose:R}}function AD(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function CD(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Nx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Lx(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,f,p,v,_,m){let h=n[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:v,renderOrder:d.renderOrder,z:_,group:m},n[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=v,h.renderOrder=d.renderOrder,h.z=_,h.group=m),e++,h}function a(d,f,p,v,_,m){const h=o(d,f,p,v,_,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):t.push(h)}function l(d,f,p,v,_,m){const h=o(d,f,p,v,_,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):t.unshift(h)}function c(d,f){t.length>1&&t.sort(d||CD),i.length>1&&i.sort(f||Nx),r.length>1&&r.sort(f||Nx)}function u(){for(let d=e,f=n.length;d<f;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function bD(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Lx,n.set(i,[o])):r>=s.length?(o=new Lx,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function RD(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new Mt};break;case"SpotLight":t={position:new H,direction:new H,color:new Mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new Mt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new Mt,groundColor:new Mt};break;case"RectAreaLight":t={color:new Mt,position:new H,halfWidth:new H,halfHeight:new H};break}return n[e.id]=t,t}}}function PD(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let DD=0;function ND(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function LD(n){const e=new RD,t=PD(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);const r=new H,s=new an,o=new an;function a(c){let u=0,d=0,f=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let p=0,v=0,_=0,m=0,h=0,g=0,x=0,y=0,E=0,A=0,w=0;c.sort(ND);for(let M=0,S=c.length;M<S;M++){const L=c[M],F=L.color,V=L.intensity,$=L.distance,W=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=F.r*V,d+=F.g*V,f+=F.b*V;else if(L.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(L.sh.coefficients[G],V);w++}else if(L.isDirectionalLight){const G=e.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const j=L.shadow,U=t.get(L);U.shadowIntensity=j.intensity,U.shadowBias=j.bias,U.shadowNormalBias=j.normalBias,U.shadowRadius=j.radius,U.shadowMapSize=j.mapSize,i.directionalShadow[p]=U,i.directionalShadowMap[p]=W,i.directionalShadowMatrix[p]=L.shadow.matrix,g++}i.directional[p]=G,p++}else if(L.isSpotLight){const G=e.get(L);G.position.setFromMatrixPosition(L.matrixWorld),G.color.copy(F).multiplyScalar(V),G.distance=$,G.coneCos=Math.cos(L.angle),G.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),G.decay=L.decay,i.spot[_]=G;const j=L.shadow;if(L.map&&(i.spotLightMap[E]=L.map,E++,j.updateMatrices(L),L.castShadow&&A++),i.spotLightMatrix[_]=j.matrix,L.castShadow){const U=t.get(L);U.shadowIntensity=j.intensity,U.shadowBias=j.bias,U.shadowNormalBias=j.normalBias,U.shadowRadius=j.radius,U.shadowMapSize=j.mapSize,i.spotShadow[_]=U,i.spotShadowMap[_]=W,y++}_++}else if(L.isRectAreaLight){const G=e.get(L);G.color.copy(F).multiplyScalar(V),G.halfWidth.set(L.width*.5,0,0),G.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=G,m++}else if(L.isPointLight){const G=e.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),G.distance=L.distance,G.decay=L.decay,L.castShadow){const j=L.shadow,U=t.get(L);U.shadowIntensity=j.intensity,U.shadowBias=j.bias,U.shadowNormalBias=j.normalBias,U.shadowRadius=j.radius,U.shadowMapSize=j.mapSize,U.shadowCameraNear=j.camera.near,U.shadowCameraFar=j.camera.far,i.pointShadow[v]=U,i.pointShadowMap[v]=W,i.pointShadowMatrix[v]=L.shadow.matrix,x++}i.point[v]=G,v++}else if(L.isHemisphereLight){const G=e.get(L);G.skyColor.copy(L.color).multiplyScalar(V),G.groundColor.copy(L.groundColor).multiplyScalar(V),i.hemi[h]=G,h++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const R=i.hash;(R.directionalLength!==p||R.pointLength!==v||R.spotLength!==_||R.rectAreaLength!==m||R.hemiLength!==h||R.numDirectionalShadows!==g||R.numPointShadows!==x||R.numSpotShadows!==y||R.numSpotMaps!==E||R.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=v,i.hemi.length=h,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=y+E-A,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=w,R.directionalLength=p,R.pointLength=v,R.spotLength=_,R.rectAreaLength=m,R.hemiLength=h,R.numDirectionalShadows=g,R.numPointShadows=x,R.numSpotShadows=y,R.numSpotMaps=E,R.numLightProbes=w,i.version=DD++)}function l(c,u){let d=0,f=0,p=0,v=0,_=0;const m=u.matrixWorldInverse;for(let h=0,g=c.length;h<g;h++){const x=c[h];if(x.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),d++}else if(x.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const y=i.rectArea[v];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),v++}else if(x.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const y=i.hemi[_];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function Ix(n){const e=new LD(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function ID(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Ix(n),e.set(r,[a])):s>=o.length?(a=new Ix(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const UD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,FD=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function OD(n,e,t){let i=new jM;const r=new vt,s=new vt,o=new Jt,a=new c2({depthPacking:Sb}),l=new u2,c={},u=t.maxTextureSize,d={[js]:ui,[ui]:js,[Wr]:Wr},f=new Xs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:UD,fragmentShader:FD}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const v=new Nr;v.setAttribute("position",new Qi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ar(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=EM;let h=this.type;this.render=function(A,w,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const M=n.getRenderTarget(),S=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),F=n.state;F.setBlending(ks),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const V=h!==kr&&this.type===kr,$=h===kr&&this.type!==kr;for(let W=0,G=A.length;W<G;W++){const j=A[W],U=j.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const q=U.getFrameExtents();if(r.multiply(q),s.copy(U.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/q.x),r.x=s.x*q.x,U.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/q.y),r.y=s.y*q.y,U.mapSize.y=s.y)),U.map===null||V===!0||$===!0){const re=this.type!==kr?{minFilter:hr,magFilter:hr}:{};U.map!==null&&U.map.dispose(),U.map=new Ho(r.x,r.y,re),U.map.texture.name=j.name+".shadowMap",U.camera.updateProjectionMatrix()}n.setRenderTarget(U.map),n.clear();const P=U.getViewportCount();for(let re=0;re<P;re++){const xe=U.getViewport(re);o.set(s.x*xe.x,s.y*xe.y,s.x*xe.z,s.y*xe.w),F.viewport(o),U.updateMatrices(j,re),i=U.getFrustum(),y(w,R,U.camera,j,this.type)}U.isPointLightShadow!==!0&&this.type===kr&&g(U,R),U.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(M,S,L)};function g(A,w){const R=e.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ho(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(w,null,R,f,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(w,null,R,p,_,null)}function x(A,w,R,M){let S=null;const L=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)S=L;else if(S=R.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const F=S.uuid,V=w.uuid;let $=c[F];$===void 0&&($={},c[F]=$);let W=$[V];W===void 0&&(W=S.clone(),$[V]=W,w.addEventListener("dispose",E)),S=W}if(S.visible=w.visible,S.wireframe=w.wireframe,M===kr?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:d[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,R.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const F=n.properties.get(S);F.light=R}return S}function y(A,w,R,M,S){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===kr)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);const V=e.update(A),$=A.material;if(Array.isArray($)){const W=V.groups;for(let G=0,j=W.length;G<j;G++){const U=W[G],q=$[U.materialIndex];if(q&&q.visible){const P=x(A,q,M,S);A.onBeforeShadow(n,A,w,R,V,P,U),n.renderBufferDirect(R,null,V,P,A,U),A.onAfterShadow(n,A,w,R,V,P,U)}}}else if($.visible){const W=x(A,$,M,S);A.onBeforeShadow(n,A,w,R,V,W,null),n.renderBufferDirect(R,null,V,W,A,null),A.onAfterShadow(n,A,w,R,V,W,null)}}const F=A.children;for(let V=0,$=F.length;V<$;V++)y(F[V],w,R,M,S)}function E(A){A.target.removeEventListener("dispose",E);for(const R in c){const M=c[R],S=A.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}const kD={[Mm]:Em,[wm]:Cm,[Tm]:bm,[il]:Am,[Em]:Mm,[Cm]:wm,[bm]:Tm,[Am]:il};function zD(n,e){function t(){let I=!1;const se=new Jt;let ce=null;const ge=new Jt(0,0,0,0);return{setMask:function(ie){ce!==ie&&!I&&(n.colorMask(ie,ie,ie,ie),ce=ie)},setLocked:function(ie){I=ie},setClear:function(ie,te,Ee,Be,ht){ht===!0&&(ie*=Be,te*=Be,Ee*=Be),se.set(ie,te,Ee,Be),ge.equals(se)===!1&&(n.clearColor(ie,te,Ee,Be),ge.copy(se))},reset:function(){I=!1,ce=null,ge.set(-1,0,0,0)}}}function i(){let I=!1,se=!1,ce=null,ge=null,ie=null;return{setReversed:function(te){if(se!==te){const Ee=e.get("EXT_clip_control");te?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT),se=te;const Be=ie;ie=null,this.setClear(Be)}},getReversed:function(){return se},setTest:function(te){te?J(n.DEPTH_TEST):pe(n.DEPTH_TEST)},setMask:function(te){ce!==te&&!I&&(n.depthMask(te),ce=te)},setFunc:function(te){if(se&&(te=kD[te]),ge!==te){switch(te){case Mm:n.depthFunc(n.NEVER);break;case Em:n.depthFunc(n.ALWAYS);break;case wm:n.depthFunc(n.LESS);break;case il:n.depthFunc(n.LEQUAL);break;case Tm:n.depthFunc(n.EQUAL);break;case Am:n.depthFunc(n.GEQUAL);break;case Cm:n.depthFunc(n.GREATER);break;case bm:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ge=te}},setLocked:function(te){I=te},setClear:function(te){ie!==te&&(se&&(te=1-te),n.clearDepth(te),ie=te)},reset:function(){I=!1,ce=null,ge=null,ie=null,se=!1}}}function r(){let I=!1,se=null,ce=null,ge=null,ie=null,te=null,Ee=null,Be=null,ht=null;return{setTest:function(ve){I||(ve?J(n.STENCIL_TEST):pe(n.STENCIL_TEST))},setMask:function(ve){se!==ve&&!I&&(n.stencilMask(ve),se=ve)},setFunc:function(ve,Ne,Ze){(ce!==ve||ge!==Ne||ie!==Ze)&&(n.stencilFunc(ve,Ne,Ze),ce=ve,ge=Ne,ie=Ze)},setOp:function(ve,Ne,Ze){(te!==ve||Ee!==Ne||Be!==Ze)&&(n.stencilOp(ve,Ne,Ze),te=ve,Ee=Ne,Be=Ze)},setLocked:function(ve){I=ve},setClear:function(ve){ht!==ve&&(n.clearStencil(ve),ht=ve)},reset:function(){I=!1,se=null,ce=null,ge=null,ie=null,te=null,Ee=null,Be=null,ht=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,p=[],v=null,_=!1,m=null,h=null,g=null,x=null,y=null,E=null,A=null,w=new Mt(0,0,0),R=0,M=!1,S=null,L=null,F=null,V=null,$=null;const W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,j=0;const U=n.getParameter(n.VERSION);U.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(U)[1]),G=j>=1):U.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),G=j>=2);let q=null,P={};const re=n.getParameter(n.SCISSOR_BOX),xe=n.getParameter(n.VIEWPORT),Ke=new Jt().fromArray(re),Oe=new Jt().fromArray(xe);function Ve(I,se,ce,ge){const ie=new Uint8Array(4),te=n.createTexture();n.bindTexture(I,te),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ee=0;Ee<ce;Ee++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(se,0,n.RGBA,1,1,ge,0,n.RGBA,n.UNSIGNED_BYTE,ie):n.texImage2D(se+Ee,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ie);return te}const K={};K[n.TEXTURE_2D]=Ve(n.TEXTURE_2D,n.TEXTURE_2D,1),K[n.TEXTURE_CUBE_MAP]=Ve(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[n.TEXTURE_2D_ARRAY]=Ve(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),K[n.TEXTURE_3D]=Ve(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),J(n.DEPTH_TEST),o.setFunc(il),De(!1),O(zv),J(n.CULL_FACE),Ye(ks);function J(I){u[I]!==!0&&(n.enable(I),u[I]=!0)}function pe(I){u[I]!==!1&&(n.disable(I),u[I]=!1)}function Pe(I,se){return d[I]!==se?(n.bindFramebuffer(I,se),d[I]=se,I===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=se),I===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=se),!0):!1}function Ce(I,se){let ce=p,ge=!1;if(I){ce=f.get(se),ce===void 0&&(ce=[],f.set(se,ce));const ie=I.textures;if(ce.length!==ie.length||ce[0]!==n.COLOR_ATTACHMENT0){for(let te=0,Ee=ie.length;te<Ee;te++)ce[te]=n.COLOR_ATTACHMENT0+te;ce.length=ie.length,ge=!0}}else ce[0]!==n.BACK&&(ce[0]=n.BACK,ge=!0);ge&&n.drawBuffers(ce)}function We(I){return v!==I?(n.useProgram(I),v=I,!0):!1}const gt={[po]:n.FUNC_ADD,[YC]:n.FUNC_SUBTRACT,[$C]:n.FUNC_REVERSE_SUBTRACT};gt[qC]=n.MIN,gt[KC]=n.MAX;const N={[ZC]:n.ZERO,[QC]:n.ONE,[JC]:n.SRC_COLOR,[ym]:n.SRC_ALPHA,[sb]:n.SRC_ALPHA_SATURATE,[ib]:n.DST_COLOR,[tb]:n.DST_ALPHA,[eb]:n.ONE_MINUS_SRC_COLOR,[Sm]:n.ONE_MINUS_SRC_ALPHA,[rb]:n.ONE_MINUS_DST_COLOR,[nb]:n.ONE_MINUS_DST_ALPHA,[ob]:n.CONSTANT_COLOR,[ab]:n.ONE_MINUS_CONSTANT_COLOR,[lb]:n.CONSTANT_ALPHA,[cb]:n.ONE_MINUS_CONSTANT_ALPHA};function Ye(I,se,ce,ge,ie,te,Ee,Be,ht,ve){if(I===ks){_===!0&&(pe(n.BLEND),_=!1);return}if(_===!1&&(J(n.BLEND),_=!0),I!==XC){if(I!==m||ve!==M){if((h!==po||y!==po)&&(n.blendEquation(n.FUNC_ADD),h=po,y=po),ve)switch(I){case Va:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case xm:n.blendFunc(n.ONE,n.ONE);break;case Bv:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Vv:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Va:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case xm:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Bv:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vv:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}g=null,x=null,E=null,A=null,w.set(0,0,0),R=0,m=I,M=ve}return}ie=ie||se,te=te||ce,Ee=Ee||ge,(se!==h||ie!==y)&&(n.blendEquationSeparate(gt[se],gt[ie]),h=se,y=ie),(ce!==g||ge!==x||te!==E||Ee!==A)&&(n.blendFuncSeparate(N[ce],N[ge],N[te],N[Ee]),g=ce,x=ge,E=te,A=Ee),(Be.equals(w)===!1||ht!==R)&&(n.blendColor(Be.r,Be.g,Be.b,ht),w.copy(Be),R=ht),m=I,M=!1}function Ue(I,se){I.side===Wr?pe(n.CULL_FACE):J(n.CULL_FACE);let ce=I.side===ui;se&&(ce=!ce),De(ce),I.blending===Va&&I.transparent===!1?Ye(ks):Ye(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),s.setMask(I.colorWrite);const ge=I.stencilWrite;a.setTest(ge),ge&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ye(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?J(n.SAMPLE_ALPHA_TO_COVERAGE):pe(n.SAMPLE_ALPHA_TO_COVERAGE)}function De(I){S!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),S=I)}function O(I){I!==GC?(J(n.CULL_FACE),I!==L&&(I===zv?n.cullFace(n.BACK):I===WC?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):pe(n.CULL_FACE),L=I}function st(I){I!==F&&(G&&n.lineWidth(I),F=I)}function ye(I,se,ce){I?(J(n.POLYGON_OFFSET_FILL),(V!==se||$!==ce)&&(n.polygonOffset(se,ce),V=se,$=ce)):pe(n.POLYGON_OFFSET_FILL)}function je(I){I?J(n.SCISSOR_TEST):pe(n.SCISSOR_TEST)}function Qe(I){I===void 0&&(I=n.TEXTURE0+W-1),q!==I&&(n.activeTexture(I),q=I)}function _t(I,se,ce){ce===void 0&&(q===null?ce=n.TEXTURE0+W-1:ce=q);let ge=P[ce];ge===void 0&&(ge={type:void 0,texture:void 0},P[ce]=ge),(ge.type!==I||ge.texture!==se)&&(q!==ce&&(n.activeTexture(ce),q=ce),n.bindTexture(I,se||K[I]),ge.type=I,ge.texture=se)}function D(){const I=P[q];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function T(){try{n.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function B(){try{n.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{n.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ee(){try{n.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{n.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Se(){try{n.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function le(){try{n.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function be(){try{n.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function he(){try{n.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function oe(){try{n.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function de(I){Ke.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),Ke.copy(I))}function ke(I){Oe.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),Oe.copy(I))}function Re(I,se){let ce=c.get(se);ce===void 0&&(ce=new WeakMap,c.set(se,ce));let ge=ce.get(I);ge===void 0&&(ge=n.getUniformBlockIndex(se,I.name),ce.set(I,ge))}function fe(I,se){const ge=c.get(se).get(I);l.get(se)!==ge&&(n.uniformBlockBinding(se,ge,I.__bindingPointIndex),l.set(se,ge))}function Xe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},q=null,P={},d={},f=new WeakMap,p=[],v=null,_=!1,m=null,h=null,g=null,x=null,y=null,E=null,A=null,w=new Mt(0,0,0),R=0,M=!1,S=null,L=null,F=null,V=null,$=null,Ke.set(0,0,n.canvas.width,n.canvas.height),Oe.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:J,disable:pe,bindFramebuffer:Pe,drawBuffers:Ce,useProgram:We,setBlending:Ye,setMaterial:Ue,setFlipSided:De,setCullFace:O,setLineWidth:st,setPolygonOffset:ye,setScissorTest:je,activeTexture:Qe,bindTexture:_t,unbindTexture:D,compressedTexImage2D:T,compressedTexImage3D:B,texImage2D:he,texImage3D:oe,updateUBOMapping:Re,uniformBlockBinding:fe,texStorage2D:le,texStorage3D:be,texSubImage2D:Q,texSubImage3D:ee,compressedTexSubImage2D:Z,compressedTexSubImage3D:Se,scissor:de,viewport:ke,reset:Xe}}function BD(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new vt,u=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(D,T){return p?new OffscreenCanvas(D,T):fd("canvas")}function _(D,T,B){let Q=1;const ee=_t(D);if((ee.width>B||ee.height>B)&&(Q=B/Math.max(ee.width,ee.height)),Q<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const Z=Math.floor(Q*ee.width),Se=Math.floor(Q*ee.height);d===void 0&&(d=v(Z,Se));const le=T?v(Z,Se):d;return le.width=Z,le.height=Se,le.getContext("2d").drawImage(D,0,0,Z,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+Z+"x"+Se+")."),le}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),D;return D}function m(D){return D.generateMipmaps}function h(D){n.generateMipmap(D)}function g(D){return D.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?n.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(D,T,B,Q,ee=!1){if(D!==null){if(n[D]!==void 0)return n[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Z=T;if(T===n.RED&&(B===n.FLOAT&&(Z=n.R32F),B===n.HALF_FLOAT&&(Z=n.R16F),B===n.UNSIGNED_BYTE&&(Z=n.R8)),T===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(Z=n.R8UI),B===n.UNSIGNED_SHORT&&(Z=n.R16UI),B===n.UNSIGNED_INT&&(Z=n.R32UI),B===n.BYTE&&(Z=n.R8I),B===n.SHORT&&(Z=n.R16I),B===n.INT&&(Z=n.R32I)),T===n.RG&&(B===n.FLOAT&&(Z=n.RG32F),B===n.HALF_FLOAT&&(Z=n.RG16F),B===n.UNSIGNED_BYTE&&(Z=n.RG8)),T===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(Z=n.RG8UI),B===n.UNSIGNED_SHORT&&(Z=n.RG16UI),B===n.UNSIGNED_INT&&(Z=n.RG32UI),B===n.BYTE&&(Z=n.RG8I),B===n.SHORT&&(Z=n.RG16I),B===n.INT&&(Z=n.RG32I)),T===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),B===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),B===n.UNSIGNED_INT&&(Z=n.RGB32UI),B===n.BYTE&&(Z=n.RGB8I),B===n.SHORT&&(Z=n.RGB16I),B===n.INT&&(Z=n.RGB32I)),T===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),B===n.UNSIGNED_INT&&(Z=n.RGBA32UI),B===n.BYTE&&(Z=n.RGBA8I),B===n.SHORT&&(Z=n.RGBA16I),B===n.INT&&(Z=n.RGBA32I)),T===n.RGB&&(B===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),B===n.UNSIGNED_INT_10F_11F_11F_REV&&(Z=n.R11F_G11F_B10F)),T===n.RGBA){const Se=ee?cd:mt.getTransfer(Q);B===n.FLOAT&&(Z=n.RGBA32F),B===n.HALF_FLOAT&&(Z=n.RGBA16F),B===n.UNSIGNED_BYTE&&(Z=Se===wt?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function y(D,T){let B;return D?T===null||T===Vo||T===Fc?B=n.DEPTH24_STENCIL8:T===$r?B=n.DEPTH32F_STENCIL8:T===Uc&&(B=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Vo||T===Fc?B=n.DEPTH_COMPONENT24:T===$r?B=n.DEPTH_COMPONENT32F:T===Uc&&(B=n.DEPTH_COMPONENT16),B}function E(D,T){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==hr&&D.minFilter!==wr?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function A(D){const T=D.target;T.removeEventListener("dispose",A),R(T),T.isVideoTexture&&u.delete(T)}function w(D){const T=D.target;T.removeEventListener("dispose",w),S(T)}function R(D){const T=i.get(D);if(T.__webglInit===void 0)return;const B=D.source,Q=f.get(B);if(Q){const ee=Q[T.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&M(D),Object.keys(Q).length===0&&f.delete(B)}i.remove(D)}function M(D){const T=i.get(D);n.deleteTexture(T.__webglTexture);const B=D.source,Q=f.get(B);delete Q[T.__cacheKey],o.memory.textures--}function S(D){const T=i.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),i.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(T.__webglFramebuffer[Q]))for(let ee=0;ee<T.__webglFramebuffer[Q].length;ee++)n.deleteFramebuffer(T.__webglFramebuffer[Q][ee]);else n.deleteFramebuffer(T.__webglFramebuffer[Q]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[Q])}else{if(Array.isArray(T.__webglFramebuffer))for(let Q=0;Q<T.__webglFramebuffer.length;Q++)n.deleteFramebuffer(T.__webglFramebuffer[Q]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Q=0;Q<T.__webglColorRenderbuffer.length;Q++)T.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[Q]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const B=D.textures;for(let Q=0,ee=B.length;Q<ee;Q++){const Z=i.get(B[Q]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(B[Q])}i.remove(D)}let L=0;function F(){L=0}function V(){const D=L;return D>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+r.maxTextures),L+=1,D}function $(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function W(D,T){const B=i.get(D);if(D.isVideoTexture&&je(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&B.__version!==D.version){const Q=D.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(B,D,T);return}}else D.isExternalTexture&&(B.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+T)}function G(D,T){const B=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&B.__version!==D.version){K(B,D,T);return}t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+T)}function j(D,T){const B=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&B.__version!==D.version){K(B,D,T);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+T)}function U(D,T){const B=i.get(D);if(D.version>0&&B.__version!==D.version){J(B,D,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+T)}const q={[Dm]:n.REPEAT,[So]:n.CLAMP_TO_EDGE,[Nm]:n.MIRRORED_REPEAT},P={[hr]:n.NEAREST,[xb]:n.NEAREST_MIPMAP_NEAREST,[Pu]:n.NEAREST_MIPMAP_LINEAR,[wr]:n.LINEAR,[wh]:n.LINEAR_MIPMAP_NEAREST,[Mo]:n.LINEAR_MIPMAP_LINEAR},re={[wb]:n.NEVER,[Pb]:n.ALWAYS,[Tb]:n.LESS,[IM]:n.LEQUAL,[Ab]:n.EQUAL,[Rb]:n.GEQUAL,[Cb]:n.GREATER,[bb]:n.NOTEQUAL};function xe(D,T){if(T.type===$r&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===wr||T.magFilter===wh||T.magFilter===Pu||T.magFilter===Mo||T.minFilter===wr||T.minFilter===wh||T.minFilter===Pu||T.minFilter===Mo)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(D,n.TEXTURE_WRAP_S,q[T.wrapS]),n.texParameteri(D,n.TEXTURE_WRAP_T,q[T.wrapT]),(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)&&n.texParameteri(D,n.TEXTURE_WRAP_R,q[T.wrapR]),n.texParameteri(D,n.TEXTURE_MAG_FILTER,P[T.magFilter]),n.texParameteri(D,n.TEXTURE_MIN_FILTER,P[T.minFilter]),T.compareFunction&&(n.texParameteri(D,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(D,n.TEXTURE_COMPARE_FUNC,re[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===hr||T.minFilter!==Pu&&T.minFilter!==Mo||T.type===$r&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");n.texParameterf(D,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function Ke(D,T){let B=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",A));const Q=T.source;let ee=f.get(Q);ee===void 0&&(ee={},f.set(Q,ee));const Z=$(T);if(Z!==D.__cacheKey){ee[Z]===void 0&&(ee[Z]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,B=!0),ee[Z].usedTimes++;const Se=ee[D.__cacheKey];Se!==void 0&&(ee[D.__cacheKey].usedTimes--,Se.usedTimes===0&&M(T)),D.__cacheKey=Z,D.__webglTexture=ee[Z].texture}return B}function Oe(D,T,B){return Math.floor(Math.floor(D/B)/T)}function Ve(D,T,B,Q){const Z=D.updateRanges;if(Z.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,T.width,T.height,B,Q,T.data);else{Z.sort((oe,de)=>oe.start-de.start);let Se=0;for(let oe=1;oe<Z.length;oe++){const de=Z[Se],ke=Z[oe],Re=de.start+de.count,fe=Oe(ke.start,T.width,4),Xe=Oe(de.start,T.width,4);ke.start<=Re+1&&fe===Xe&&Oe(ke.start+ke.count-1,T.width,4)===fe?de.count=Math.max(de.count,ke.start+ke.count-de.start):(++Se,Z[Se]=ke)}Z.length=Se+1;const le=n.getParameter(n.UNPACK_ROW_LENGTH),be=n.getParameter(n.UNPACK_SKIP_PIXELS),he=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,T.width);for(let oe=0,de=Z.length;oe<de;oe++){const ke=Z[oe],Re=Math.floor(ke.start/4),fe=Math.ceil(ke.count/4),Xe=Re%T.width,I=Math.floor(Re/T.width),se=fe,ce=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Xe),n.pixelStorei(n.UNPACK_SKIP_ROWS,I),t.texSubImage2D(n.TEXTURE_2D,0,Xe,I,se,ce,B,Q,T.data)}D.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,le),n.pixelStorei(n.UNPACK_SKIP_PIXELS,be),n.pixelStorei(n.UNPACK_SKIP_ROWS,he)}}function K(D,T,B){let Q=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Q=n.TEXTURE_3D);const ee=Ke(D,T),Z=T.source;t.bindTexture(Q,D.__webglTexture,n.TEXTURE0+B);const Se=i.get(Z);if(Z.version!==Se.__version||ee===!0){t.activeTexture(n.TEXTURE0+B);const le=mt.getPrimaries(mt.workingColorSpace),be=T.colorSpace===xs?null:mt.getPrimaries(T.colorSpace),he=T.colorSpace===xs||le===be?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);let oe=_(T.image,!1,r.maxTextureSize);oe=Qe(T,oe);const de=s.convert(T.format,T.colorSpace),ke=s.convert(T.type);let Re=x(T.internalFormat,de,ke,T.colorSpace,T.isVideoTexture);xe(Q,T);let fe;const Xe=T.mipmaps,I=T.isVideoTexture!==!0,se=Se.__version===void 0||ee===!0,ce=Z.dataReady,ge=E(T,oe);if(T.isDepthTexture)Re=y(T.format===kc,T.type),se&&(I?t.texStorage2D(n.TEXTURE_2D,1,Re,oe.width,oe.height):t.texImage2D(n.TEXTURE_2D,0,Re,oe.width,oe.height,0,de,ke,null));else if(T.isDataTexture)if(Xe.length>0){I&&se&&t.texStorage2D(n.TEXTURE_2D,ge,Re,Xe[0].width,Xe[0].height);for(let ie=0,te=Xe.length;ie<te;ie++)fe=Xe[ie],I?ce&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,fe.width,fe.height,de,ke,fe.data):t.texImage2D(n.TEXTURE_2D,ie,Re,fe.width,fe.height,0,de,ke,fe.data);T.generateMipmaps=!1}else I?(se&&t.texStorage2D(n.TEXTURE_2D,ge,Re,oe.width,oe.height),ce&&Ve(T,oe,de,ke)):t.texImage2D(n.TEXTURE_2D,0,Re,oe.width,oe.height,0,de,ke,oe.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){I&&se&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,Re,Xe[0].width,Xe[0].height,oe.depth);for(let ie=0,te=Xe.length;ie<te;ie++)if(fe=Xe[ie],T.format!==ur)if(de!==null)if(I){if(ce)if(T.layerUpdates.size>0){const Ee=ux(fe.width,fe.height,T.format,T.type);for(const Be of T.layerUpdates){const ht=fe.data.subarray(Be*Ee/fe.data.BYTES_PER_ELEMENT,(Be+1)*Ee/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,Be,fe.width,fe.height,1,de,ht)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,fe.width,fe.height,oe.depth,de,fe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ie,Re,fe.width,fe.height,oe.depth,0,fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?ce&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,fe.width,fe.height,oe.depth,de,ke,fe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ie,Re,fe.width,fe.height,oe.depth,0,de,ke,fe.data)}else{I&&se&&t.texStorage2D(n.TEXTURE_2D,ge,Re,Xe[0].width,Xe[0].height);for(let ie=0,te=Xe.length;ie<te;ie++)fe=Xe[ie],T.format!==ur?de!==null?I?ce&&t.compressedTexSubImage2D(n.TEXTURE_2D,ie,0,0,fe.width,fe.height,de,fe.data):t.compressedTexImage2D(n.TEXTURE_2D,ie,Re,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?ce&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,fe.width,fe.height,de,ke,fe.data):t.texImage2D(n.TEXTURE_2D,ie,Re,fe.width,fe.height,0,de,ke,fe.data)}else if(T.isDataArrayTexture)if(I){if(se&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,Re,oe.width,oe.height,oe.depth),ce)if(T.layerUpdates.size>0){const ie=ux(oe.width,oe.height,T.format,T.type);for(const te of T.layerUpdates){const Ee=oe.data.subarray(te*ie/oe.data.BYTES_PER_ELEMENT,(te+1)*ie/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,te,oe.width,oe.height,1,de,ke,Ee)}T.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,de,ke,oe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Re,oe.width,oe.height,oe.depth,0,de,ke,oe.data);else if(T.isData3DTexture)I?(se&&t.texStorage3D(n.TEXTURE_3D,ge,Re,oe.width,oe.height,oe.depth),ce&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,de,ke,oe.data)):t.texImage3D(n.TEXTURE_3D,0,Re,oe.width,oe.height,oe.depth,0,de,ke,oe.data);else if(T.isFramebufferTexture){if(se)if(I)t.texStorage2D(n.TEXTURE_2D,ge,Re,oe.width,oe.height);else{let ie=oe.width,te=oe.height;for(let Ee=0;Ee<ge;Ee++)t.texImage2D(n.TEXTURE_2D,Ee,Re,ie,te,0,de,ke,null),ie>>=1,te>>=1}}else if(Xe.length>0){if(I&&se){const ie=_t(Xe[0]);t.texStorage2D(n.TEXTURE_2D,ge,Re,ie.width,ie.height)}for(let ie=0,te=Xe.length;ie<te;ie++)fe=Xe[ie],I?ce&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,de,ke,fe):t.texImage2D(n.TEXTURE_2D,ie,Re,de,ke,fe);T.generateMipmaps=!1}else if(I){if(se){const ie=_t(oe);t.texStorage2D(n.TEXTURE_2D,ge,Re,ie.width,ie.height)}ce&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,de,ke,oe)}else t.texImage2D(n.TEXTURE_2D,0,Re,de,ke,oe);m(T)&&h(Q),Se.__version=Z.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function J(D,T,B){if(T.image.length!==6)return;const Q=Ke(D,T),ee=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+B);const Z=i.get(ee);if(ee.version!==Z.__version||Q===!0){t.activeTexture(n.TEXTURE0+B);const Se=mt.getPrimaries(mt.workingColorSpace),le=T.colorSpace===xs?null:mt.getPrimaries(T.colorSpace),be=T.colorSpace===xs||Se===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const he=T.isCompressedTexture||T.image[0].isCompressedTexture,oe=T.image[0]&&T.image[0].isDataTexture,de=[];for(let te=0;te<6;te++)!he&&!oe?de[te]=_(T.image[te],!0,r.maxCubemapSize):de[te]=oe?T.image[te].image:T.image[te],de[te]=Qe(T,de[te]);const ke=de[0],Re=s.convert(T.format,T.colorSpace),fe=s.convert(T.type),Xe=x(T.internalFormat,Re,fe,T.colorSpace),I=T.isVideoTexture!==!0,se=Z.__version===void 0||Q===!0,ce=ee.dataReady;let ge=E(T,ke);xe(n.TEXTURE_CUBE_MAP,T);let ie;if(he){I&&se&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,Xe,ke.width,ke.height);for(let te=0;te<6;te++){ie=de[te].mipmaps;for(let Ee=0;Ee<ie.length;Ee++){const Be=ie[Ee];T.format!==ur?Re!==null?I?ce&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee,0,0,Be.width,Be.height,Re,Be.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee,Xe,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee,0,0,Be.width,Be.height,Re,fe,Be.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee,Xe,Be.width,Be.height,0,Re,fe,Be.data)}}}else{if(ie=T.mipmaps,I&&se){ie.length>0&&ge++;const te=_t(de[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,Xe,te.width,te.height)}for(let te=0;te<6;te++)if(oe){I?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,de[te].width,de[te].height,Re,fe,de[te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Xe,de[te].width,de[te].height,0,Re,fe,de[te].data);for(let Ee=0;Ee<ie.length;Ee++){const ht=ie[Ee].image[te].image;I?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee+1,0,0,ht.width,ht.height,Re,fe,ht.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee+1,Xe,ht.width,ht.height,0,Re,fe,ht.data)}}else{I?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Re,fe,de[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Xe,Re,fe,de[te]);for(let Ee=0;Ee<ie.length;Ee++){const Be=ie[Ee];I?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee+1,0,0,Re,fe,Be.image[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee+1,Xe,Re,fe,Be.image[te])}}}m(T)&&h(n.TEXTURE_CUBE_MAP),Z.__version=ee.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function pe(D,T,B,Q,ee,Z){const Se=s.convert(B.format,B.colorSpace),le=s.convert(B.type),be=x(B.internalFormat,Se,le,B.colorSpace),he=i.get(T),oe=i.get(B);if(oe.__renderTarget=T,!he.__hasExternalTextures){const de=Math.max(1,T.width>>Z),ke=Math.max(1,T.height>>Z);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,Z,be,de,ke,T.depth,0,Se,le,null):t.texImage2D(ee,Z,be,de,ke,0,Se,le,null)}t.bindFramebuffer(n.FRAMEBUFFER,D),ye(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,ee,oe.__webglTexture,0,st(T)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,ee,oe.__webglTexture,Z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Pe(D,T,B){if(n.bindRenderbuffer(n.RENDERBUFFER,D),T.depthBuffer){const Q=T.depthTexture,ee=Q&&Q.isDepthTexture?Q.type:null,Z=y(T.stencilBuffer,ee),Se=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=st(T);ye(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le,Z,T.width,T.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,le,Z,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,Z,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Se,n.RENDERBUFFER,D)}else{const Q=T.textures;for(let ee=0;ee<Q.length;ee++){const Z=Q[ee],Se=s.convert(Z.format,Z.colorSpace),le=s.convert(Z.type),be=x(Z.internalFormat,Se,le,Z.colorSpace),he=st(T);B&&ye(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,he,be,T.width,T.height):ye(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,he,be,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,be,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ce(D,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=i.get(T.depthTexture);Q.__renderTarget=T,(!Q.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),W(T.depthTexture,0);const ee=Q.__webglTexture,Z=st(T);if(T.depthTexture.format===Oc)ye(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0);else if(T.depthTexture.format===kc)ye(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function We(D){const T=i.get(D),B=D.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==D.depthTexture){const Q=D.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),Q){const ee=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,Q.removeEventListener("dispose",ee)};Q.addEventListener("dispose",ee),T.__depthDisposeCallback=ee}T.__boundDepthTexture=Q}if(D.depthTexture&&!T.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");const Q=D.texture.mipmaps;Q&&Q.length>0?Ce(T.__webglFramebuffer[0],D):Ce(T.__webglFramebuffer,D)}else if(B){T.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[Q]),T.__webglDepthbuffer[Q]===void 0)T.__webglDepthbuffer[Q]=n.createRenderbuffer(),Pe(T.__webglDepthbuffer[Q],D,!1);else{const ee=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=T.__webglDepthbuffer[Q];n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,Z)}}else{const Q=D.texture.mipmaps;if(Q&&Q.length>0?t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),Pe(T.__webglDepthbuffer,D,!1);else{const ee=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,Z)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function gt(D,T,B){const Q=i.get(D);T!==void 0&&pe(Q.__webglFramebuffer,D,D.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&We(D)}function N(D){const T=D.texture,B=i.get(D),Q=i.get(T);D.addEventListener("dispose",w);const ee=D.textures,Z=D.isWebGLCubeRenderTarget===!0,Se=ee.length>1;if(Se||(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=T.version,o.memory.textures++),Z){B.__webglFramebuffer=[];for(let le=0;le<6;le++)if(T.mipmaps&&T.mipmaps.length>0){B.__webglFramebuffer[le]=[];for(let be=0;be<T.mipmaps.length;be++)B.__webglFramebuffer[le][be]=n.createFramebuffer()}else B.__webglFramebuffer[le]=n.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){B.__webglFramebuffer=[];for(let le=0;le<T.mipmaps.length;le++)B.__webglFramebuffer[le]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(Se)for(let le=0,be=ee.length;le<be;le++){const he=i.get(ee[le]);he.__webglTexture===void 0&&(he.__webglTexture=n.createTexture(),o.memory.textures++)}if(D.samples>0&&ye(D)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let le=0;le<ee.length;le++){const be=ee[le];B.__webglColorRenderbuffer[le]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[le]);const he=s.convert(be.format,be.colorSpace),oe=s.convert(be.type),de=x(be.internalFormat,he,oe,be.colorSpace,D.isXRRenderTarget===!0),ke=st(D);n.renderbufferStorageMultisample(n.RENDERBUFFER,ke,de,D.width,D.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,B.__webglColorRenderbuffer[le])}n.bindRenderbuffer(n.RENDERBUFFER,null),D.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),Pe(B.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),xe(n.TEXTURE_CUBE_MAP,T);for(let le=0;le<6;le++)if(T.mipmaps&&T.mipmaps.length>0)for(let be=0;be<T.mipmaps.length;be++)pe(B.__webglFramebuffer[le][be],D,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,be);else pe(B.__webglFramebuffer[le],D,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(T)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let le=0,be=ee.length;le<be;le++){const he=ee[le],oe=i.get(he);let de=n.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(de=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(de,oe.__webglTexture),xe(de,he),pe(B.__webglFramebuffer,D,he,n.COLOR_ATTACHMENT0+le,de,0),m(he)&&h(de)}t.unbindTexture()}else{let le=n.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(le=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(le,Q.__webglTexture),xe(le,T),T.mipmaps&&T.mipmaps.length>0)for(let be=0;be<T.mipmaps.length;be++)pe(B.__webglFramebuffer[be],D,T,n.COLOR_ATTACHMENT0,le,be);else pe(B.__webglFramebuffer,D,T,n.COLOR_ATTACHMENT0,le,0);m(T)&&h(le),t.unbindTexture()}D.depthBuffer&&We(D)}function Ye(D){const T=D.textures;for(let B=0,Q=T.length;B<Q;B++){const ee=T[B];if(m(ee)){const Z=g(D),Se=i.get(ee).__webglTexture;t.bindTexture(Z,Se),h(Z),t.unbindTexture()}}}const Ue=[],De=[];function O(D){if(D.samples>0){if(ye(D)===!1){const T=D.textures,B=D.width,Q=D.height;let ee=n.COLOR_BUFFER_BIT;const Z=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Se=i.get(D),le=T.length>1;if(le)for(let he=0;he<T.length;he++)t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);const be=D.texture.mipmaps;be&&be.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let he=0;he<T.length;he++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),le){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Se.__webglColorRenderbuffer[he]);const oe=i.get(T[he]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,oe,0)}n.blitFramebuffer(0,0,B,Q,0,0,B,Q,ee,n.NEAREST),l===!0&&(Ue.length=0,De.length=0,Ue.push(n.COLOR_ATTACHMENT0+he),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Ue.push(Z),De.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,De)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ue))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),le)for(let he=0;he<T.length;he++){t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,Se.__webglColorRenderbuffer[he]);const oe=i.get(T[he]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,oe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const T=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function st(D){return Math.min(r.maxSamples,D.samples)}function ye(D){const T=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function je(D){const T=o.render.frame;u.get(D)!==T&&(u.set(D,T),D.update())}function Qe(D,T){const B=D.colorSpace,Q=D.format,ee=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||B!==ol&&B!==xs&&(mt.getTransfer(B)===wt?(Q!==ur||ee!==rs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),T}function _t(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=F,this.setTexture2D=W,this.setTexture2DArray=G,this.setTexture3D=j,this.setTextureCube=U,this.rebindTextures=gt,this.setupRenderTarget=N,this.updateRenderTargetMipmap=Ye,this.updateMultisampleRenderTarget=O,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=ye}function VD(n,e){function t(i,r=xs){let s;const o=mt.getTransfer(r);if(i===rs)return n.UNSIGNED_BYTE;if(i===F_)return n.UNSIGNED_SHORT_4_4_4_4;if(i===O_)return n.UNSIGNED_SHORT_5_5_5_1;if(i===bM)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===RM)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===AM)return n.BYTE;if(i===CM)return n.SHORT;if(i===Uc)return n.UNSIGNED_SHORT;if(i===U_)return n.INT;if(i===Vo)return n.UNSIGNED_INT;if(i===$r)return n.FLOAT;if(i===Xc)return n.HALF_FLOAT;if(i===PM)return n.ALPHA;if(i===DM)return n.RGB;if(i===ur)return n.RGBA;if(i===Oc)return n.DEPTH_COMPONENT;if(i===kc)return n.DEPTH_STENCIL;if(i===NM)return n.RED;if(i===k_)return n.RED_INTEGER;if(i===LM)return n.RG;if(i===z_)return n.RG_INTEGER;if(i===B_)return n.RGBA_INTEGER;if(i===Mf||i===Ef||i===wf||i===Tf)if(o===wt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Mf)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ef)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===wf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Tf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Mf)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ef)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===wf)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Tf)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Lm||i===Im||i===Um||i===Fm)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Lm)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Im)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Um)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Fm)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Om||i===km||i===zm)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Om||i===km)return o===wt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===zm)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Bm||i===Vm||i===Hm||i===Gm||i===Wm||i===jm||i===Xm||i===Ym||i===$m||i===qm||i===Km||i===Zm||i===Qm||i===Jm)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Bm)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Vm)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Hm)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Gm)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Wm)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===jm)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Xm)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ym)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===$m)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===qm)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Km)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Zm)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Qm)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Jm)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===eg||i===tg||i===ng)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===eg)return o===wt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===tg)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ng)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ig||i===rg||i===sg||i===og)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ig)return s.COMPRESSED_RED_RGTC1_EXT;if(i===rg)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===sg)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===og)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Fc?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const HD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,GD=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class WD{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new $M(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Xs({vertexShader:HD,fragmentShader:GD,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ar(new Id(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jD extends fl{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,p=null,v=null;const _=typeof XRWebGLBinding<"u",m=new WD,h={},g=t.getContextAttributes();let x=null,y=null;const E=[],A=[],w=new vt;let R=null;const M=new ji;M.viewport=new Jt;const S=new ji;S.viewport=new Jt;const L=[M,S],F=new d2;let V=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let J=E[K];return J===void 0&&(J=new Yh,E[K]=J),J.getTargetRaySpace()},this.getControllerGrip=function(K){let J=E[K];return J===void 0&&(J=new Yh,E[K]=J),J.getGripSpace()},this.getHand=function(K){let J=E[K];return J===void 0&&(J=new Yh,E[K]=J),J.getHandSpace()};function W(K){const J=A.indexOf(K.inputSource);if(J===-1)return;const pe=E[J];pe!==void 0&&(pe.update(K.inputSource,K.frame,c||o),pe.dispatchEvent({type:K.type,data:K.inputSource}))}function G(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",j);for(let K=0;K<E.length;K++){const J=A[K];J!==null&&(A[K]=null,E[K].disconnect(J))}V=null,$=null,m.reset();for(const K in h)delete h[K];e.setRenderTarget(x),p=null,f=null,d=null,r=null,y=null,Ve.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",G),r.addEventListener("inputsourceschange",j),g.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,Pe=null,Ce=null;g.depth&&(Ce=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=g.stencil?kc:Oc,Pe=g.stencil?Fc:Vo);const We={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(We),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new Ho(f.textureWidth,f.textureHeight,{format:ur,type:rs,depthTexture:new YM(f.textureWidth,f.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const pe={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,pe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Ho(p.framebufferWidth,p.framebufferHeight,{format:ur,type:rs,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ve.setContext(r),Ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function j(K){for(let J=0;J<K.removed.length;J++){const pe=K.removed[J],Pe=A.indexOf(pe);Pe>=0&&(A[Pe]=null,E[Pe].disconnect(pe))}for(let J=0;J<K.added.length;J++){const pe=K.added[J];let Pe=A.indexOf(pe);if(Pe===-1){for(let We=0;We<E.length;We++)if(We>=A.length){A.push(pe),Pe=We;break}else if(A[We]===null){A[We]=pe,Pe=We;break}if(Pe===-1)break}const Ce=E[Pe];Ce&&Ce.connect(pe)}}const U=new H,q=new H;function P(K,J,pe){U.setFromMatrixPosition(J.matrixWorld),q.setFromMatrixPosition(pe.matrixWorld);const Pe=U.distanceTo(q),Ce=J.projectionMatrix.elements,We=pe.projectionMatrix.elements,gt=Ce[14]/(Ce[10]-1),N=Ce[14]/(Ce[10]+1),Ye=(Ce[9]+1)/Ce[5],Ue=(Ce[9]-1)/Ce[5],De=(Ce[8]-1)/Ce[0],O=(We[8]+1)/We[0],st=gt*De,ye=gt*O,je=Pe/(-De+O),Qe=je*-De;if(J.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Qe),K.translateZ(je),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ce[10]===-1)K.projectionMatrix.copy(J.projectionMatrix),K.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const _t=gt+je,D=N+je,T=st-Qe,B=ye+(Pe-Qe),Q=Ye*N/D*_t,ee=Ue*N/D*_t;K.projectionMatrix.makePerspective(T,B,Q,ee,_t,D),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function re(K,J){J===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(J.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let J=K.near,pe=K.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(pe=m.depthFar)),F.near=S.near=M.near=J,F.far=S.far=M.far=pe,(V!==F.near||$!==F.far)&&(r.updateRenderState({depthNear:F.near,depthFar:F.far}),V=F.near,$=F.far),F.layers.mask=K.layers.mask|6,M.layers.mask=F.layers.mask&3,S.layers.mask=F.layers.mask&5;const Pe=K.parent,Ce=F.cameras;re(F,Pe);for(let We=0;We<Ce.length;We++)re(Ce[We],Pe);Ce.length===2?P(F,M,S):F.projectionMatrix.copy(M.projectionMatrix),xe(K,F,Pe)};function xe(K,J,pe){pe===null?K.matrix.copy(J.matrixWorld):(K.matrix.copy(pe.matrixWorld),K.matrix.invert(),K.matrix.multiply(J.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(J.projectionMatrix),K.projectionMatrixInverse.copy(J.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=ag*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(K){return h[K]};let Ke=null;function Oe(K,J){if(u=J.getViewerPose(c||o),v=J,u!==null){const pe=u.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let Pe=!1;pe.length!==F.cameras.length&&(F.cameras.length=0,Pe=!0);for(let N=0;N<pe.length;N++){const Ye=pe[N];let Ue=null;if(p!==null)Ue=p.getViewport(Ye);else{const O=d.getViewSubImage(f,Ye);Ue=O.viewport,N===0&&(e.setRenderTargetTextures(y,O.colorTexture,O.depthStencilTexture),e.setRenderTarget(y))}let De=L[N];De===void 0&&(De=new ji,De.layers.enable(N),De.viewport=new Jt,L[N]=De),De.matrix.fromArray(Ye.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray(Ye.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),N===0&&(F.matrix.copy(De.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Pe===!0&&F.cameras.push(De)}const Ce=r.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){d=i.getBinding();const N=d.getDepthInformation(pe[0]);N&&N.isValid&&N.texture&&m.init(N,r.renderState)}if(Ce&&Ce.includes("camera-access")&&_){e.state.unbindTexture(),d=i.getBinding();for(let N=0;N<pe.length;N++){const Ye=pe[N].camera;if(Ye){let Ue=h[Ye];Ue||(Ue=new $M,h[Ye]=Ue);const De=d.getCameraImage(Ye);Ue.sourceTexture=De}}}}for(let pe=0;pe<E.length;pe++){const Pe=A[pe],Ce=E[pe];Pe!==null&&Ce!==void 0&&Ce.update(Pe,J,c||o)}Ke&&Ke(K,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),v=null}const Ve=new qM;Ve.setAnimationLoop(Oe),this.setAnimationLoop=function(K){Ke=K},this.dispose=function(){}}}const so=new ss,XD=new an;function YD(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,HM(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,g,x,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),d(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,y)):h.isMeshMatcapMaterial?(s(m,h),v(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),_(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,g,x):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===ui&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===ui&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const g=e.get(h),x=g.envMap,y=g.envMapRotation;x&&(m.envMap.value=x,so.copy(y),so.x*=-1,so.y*=-1,so.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(so.y*=-1,so.z*=-1),m.envMapRotation.value.setFromMatrix4(XD.makeRotationFromEuler(so)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,g,x){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*g,m.scale.value=x*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,g){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===ui&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,h){h.matcap&&(m.matcap.value=h.matcap)}function _(m,h){const g=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function $D(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,x){const y=x.program;i.uniformBlockBinding(g,y)}function c(g,x){let y=r[g.id];y===void 0&&(v(g),y=u(g),r[g.id]=y,g.addEventListener("dispose",m));const E=x.program;i.updateUBOMapping(g,E);const A=e.render.frame;s[g.id]!==A&&(f(g),s[g.id]=A)}function u(g){const x=d();g.__bindingPointIndex=x;const y=n.createBuffer(),E=g.__size,A=g.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,E,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,y),y}function d(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(g){const x=r[g.id],y=g.uniforms,E=g.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let A=0,w=y.length;A<w;A++){const R=Array.isArray(y[A])?y[A]:[y[A]];for(let M=0,S=R.length;M<S;M++){const L=R[M];if(p(L,A,M,E)===!0){const F=L.__offset,V=Array.isArray(L.value)?L.value:[L.value];let $=0;for(let W=0;W<V.length;W++){const G=V[W],j=_(G);typeof G=="number"||typeof G=="boolean"?(L.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,F+$,L.__data)):G.isMatrix3?(L.__data[0]=G.elements[0],L.__data[1]=G.elements[1],L.__data[2]=G.elements[2],L.__data[3]=0,L.__data[4]=G.elements[3],L.__data[5]=G.elements[4],L.__data[6]=G.elements[5],L.__data[7]=0,L.__data[8]=G.elements[6],L.__data[9]=G.elements[7],L.__data[10]=G.elements[8],L.__data[11]=0):(G.toArray(L.__data,$),$+=j.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(g,x,y,E){const A=g.value,w=x+"_"+y;if(E[w]===void 0)return typeof A=="number"||typeof A=="boolean"?E[w]=A:E[w]=A.clone(),!0;{const R=E[w];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return E[w]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function v(g){const x=g.uniforms;let y=0;const E=16;for(let w=0,R=x.length;w<R;w++){const M=Array.isArray(x[w])?x[w]:[x[w]];for(let S=0,L=M.length;S<L;S++){const F=M[S],V=Array.isArray(F.value)?F.value:[F.value];for(let $=0,W=V.length;$<W;$++){const G=V[$],j=_(G),U=y%E,q=U%j.boundary,P=U+q;y+=q,P!==0&&E-P<j.storage&&(y+=E-P),F.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=y,y+=j.storage}}}const A=y%E;return A>0&&(y+=E-A),g.__size=y,g.__cache={},this}function _(g){const x={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(x.boundary=4,x.storage=4):g.isVector2?(x.boundary=8,x.storage=8):g.isVector3||g.isColor?(x.boundary=16,x.storage=12):g.isVector4?(x.boundary=16,x.storage=16):g.isMatrix3?(x.boundary=48,x.storage=48):g.isMatrix4?(x.boundary=64,x.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),x}function m(g){const x=g.target;x.removeEventListener("dispose",m);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function h(){for(const g in r)n.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class qD{constructor(e={}){const{canvas:t=Nb(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const v=new Uint32Array(4),_=new Int32Array(4);let m=null,h=null;const g=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let E=!1;this._outputColorSpace=Bi;let A=0,w=0,R=null,M=-1,S=null;const L=new Jt,F=new Jt;let V=null;const $=new Mt(0);let W=0,G=t.width,j=t.height,U=1,q=null,P=null;const re=new Jt(0,0,G,j),xe=new Jt(0,0,G,j);let Ke=!1;const Oe=new jM;let Ve=!1,K=!1;const J=new an,pe=new H,Pe=new Jt,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function gt(){return R===null?U:1}let N=i;function Ye(b,k){return t.getContext(b,k)}try{const b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${I_}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",ge,!1),t.addEventListener("webglcontextcreationerror",ie,!1),N===null){const k="webgl2";if(N=Ye(k,b),N===null)throw Ye(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Ue,De,O,st,ye,je,Qe,_t,D,T,B,Q,ee,Z,Se,le,be,he,oe,de,ke,Re,fe,Xe;function I(){Ue=new s3(N),Ue.init(),Re=new VD(N,Ue),De=new QP(N,Ue,e,Re),O=new zD(N,Ue),De.reversedDepthBuffer&&f&&O.buffers.depth.setReversed(!0),st=new l3(N),ye=new AD,je=new BD(N,Ue,O,ye,De,Re,st),Qe=new e3(y),_t=new r3(y),D=new p2(N),fe=new KP(N,D),T=new o3(N,D,st,fe),B=new u3(N,T,D,st),oe=new c3(N,De,je),le=new JP(ye),Q=new TD(y,Qe,_t,Ue,De,fe,le),ee=new YD(y,ye),Z=new bD,Se=new ID(Ue),he=new qP(y,Qe,_t,O,B,p,l),be=new OD(y,B,De),Xe=new $D(N,st,De,O),de=new ZP(N,Ue,st),ke=new a3(N,Ue,st),st.programs=Q.programs,y.capabilities=De,y.extensions=Ue,y.properties=ye,y.renderLists=Z,y.shadowMap=be,y.state=O,y.info=st}I();const se=new jD(y,N);this.xr=se,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const b=Ue.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ue.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(b){b!==void 0&&(U=b,this.setSize(G,j,!1))},this.getSize=function(b){return b.set(G,j)},this.setSize=function(b,k,X=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=b,j=k,t.width=Math.floor(b*U),t.height=Math.floor(k*U),X===!0&&(t.style.width=b+"px",t.style.height=k+"px"),this.setViewport(0,0,b,k)},this.getDrawingBufferSize=function(b){return b.set(G*U,j*U).floor()},this.setDrawingBufferSize=function(b,k,X){G=b,j=k,U=X,t.width=Math.floor(b*X),t.height=Math.floor(k*X),this.setViewport(0,0,b,k)},this.getCurrentViewport=function(b){return b.copy(L)},this.getViewport=function(b){return b.copy(re)},this.setViewport=function(b,k,X,Y){b.isVector4?re.set(b.x,b.y,b.z,b.w):re.set(b,k,X,Y),O.viewport(L.copy(re).multiplyScalar(U).round())},this.getScissor=function(b){return b.copy(xe)},this.setScissor=function(b,k,X,Y){b.isVector4?xe.set(b.x,b.y,b.z,b.w):xe.set(b,k,X,Y),O.scissor(F.copy(xe).multiplyScalar(U).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(b){O.setScissorTest(Ke=b)},this.setOpaqueSort=function(b){q=b},this.setTransparentSort=function(b){P=b},this.getClearColor=function(b){return b.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor(...arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha(...arguments)},this.clear=function(b=!0,k=!0,X=!0){let Y=0;if(b){let z=!1;if(R!==null){const ne=R.texture.format;z=ne===B_||ne===z_||ne===k_}if(z){const ne=R.texture.type,ue=ne===rs||ne===Vo||ne===Uc||ne===Fc||ne===F_||ne===O_,Te=he.getClearColor(),Me=he.getClearAlpha(),ze=Te.r,Ie=Te.g,Le=Te.b;ue?(v[0]=ze,v[1]=Ie,v[2]=Le,v[3]=Me,N.clearBufferuiv(N.COLOR,0,v)):(_[0]=ze,_[1]=Ie,_[2]=Le,_[3]=Me,N.clearBufferiv(N.COLOR,0,_))}else Y|=N.COLOR_BUFFER_BIT}k&&(Y|=N.DEPTH_BUFFER_BIT),X&&(Y|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",ge,!1),t.removeEventListener("webglcontextcreationerror",ie,!1),he.dispose(),Z.dispose(),Se.dispose(),ye.dispose(),Qe.dispose(),_t.dispose(),B.dispose(),fe.dispose(),Xe.dispose(),Q.dispose(),se.dispose(),se.removeEventListener("sessionstart",Ze),se.removeEventListener("sessionend",me),He.stop()};function ce(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const b=st.autoReset,k=be.enabled,X=be.autoUpdate,Y=be.needsUpdate,z=be.type;I(),st.autoReset=b,be.enabled=k,be.autoUpdate=X,be.needsUpdate=Y,be.type=z}function ie(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function te(b){const k=b.target;k.removeEventListener("dispose",te),Ee(k)}function Ee(b){Be(b),ye.remove(b)}function Be(b){const k=ye.get(b).programs;k!==void 0&&(k.forEach(function(X){Q.releaseProgram(X)}),b.isShaderMaterial&&Q.releaseShaderCache(b))}this.renderBufferDirect=function(b,k,X,Y,z,ne){k===null&&(k=Ce);const ue=z.isMesh&&z.matrixWorld.determinant()<0,Te=St(b,k,X,Y,z);O.setMaterial(Y,ue);let Me=X.index,ze=1;if(Y.wireframe===!0){if(Me=T.getWireframeAttribute(X),Me===void 0)return;ze=2}const Ie=X.drawRange,Le=X.attributes.position;let Je=Ie.start*ze,lt=(Ie.start+Ie.count)*ze;ne!==null&&(Je=Math.max(Je,ne.start*ze),lt=Math.min(lt,(ne.start+ne.count)*ze)),Me!==null?(Je=Math.max(Je,0),lt=Math.min(lt,Me.count)):Le!=null&&(Je=Math.max(Je,0),lt=Math.min(lt,Le.count));const Xt=lt-Je;if(Xt<0||Xt===1/0)return;fe.setup(z,Y,Te,X,Me);let Lt,At=de;if(Me!==null&&(Lt=D.get(Me),At=ke,At.setIndex(Lt)),z.isMesh)Y.wireframe===!0?(O.setLineWidth(Y.wireframeLinewidth*gt()),At.setMode(N.LINES)):At.setMode(N.TRIANGLES);else if(z.isLine){let Ge=Y.linewidth;Ge===void 0&&(Ge=1),O.setLineWidth(Ge*gt()),z.isLineSegments?At.setMode(N.LINES):z.isLineLoop?At.setMode(N.LINE_LOOP):At.setMode(N.LINE_STRIP)}else z.isPoints?At.setMode(N.POINTS):z.isSprite&&At.setMode(N.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)zc("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),At.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Ue.get("WEBGL_multi_draw"))At.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Ge=z._multiDrawStarts,zt=z._multiDrawCounts,pt=z._multiDrawCount,mi=Me?D.get(Me).bytesPerElement:1,Xo=ye.get(Y).currentProgram.getUniforms();for(let gi=0;gi<pt;gi++)Xo.setValue(N,"_gl_DrawID",gi),At.render(Ge[gi]/mi,zt[gi])}else if(z.isInstancedMesh)At.renderInstances(Je,Xt,z.count);else if(X.isInstancedBufferGeometry){const Ge=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,zt=Math.min(X.instanceCount,Ge);At.renderInstances(Je,Xt,zt)}else At.render(Je,Xt)};function ht(b,k,X){b.transparent===!0&&b.side===Wr&&b.forceSinglePass===!1?(b.side=ui,b.needsUpdate=!0,Kt(b,k,X),b.side=js,b.needsUpdate=!0,Kt(b,k,X),b.side=Wr):Kt(b,k,X)}this.compile=function(b,k,X=null){X===null&&(X=b),h=Se.get(X),h.init(k),x.push(h),X.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(h.pushLight(z),z.castShadow&&h.pushShadow(z))}),b!==X&&b.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(h.pushLight(z),z.castShadow&&h.pushShadow(z))}),h.setupLights();const Y=new Set;return b.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const ne=z.material;if(ne)if(Array.isArray(ne))for(let ue=0;ue<ne.length;ue++){const Te=ne[ue];ht(Te,X,z),Y.add(Te)}else ht(ne,X,z),Y.add(ne)}),h=x.pop(),Y},this.compileAsync=function(b,k,X=null){const Y=this.compile(b,k,X);return new Promise(z=>{function ne(){if(Y.forEach(function(ue){ye.get(ue).currentProgram.isReady()&&Y.delete(ue)}),Y.size===0){z(b);return}setTimeout(ne,10)}Ue.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let ve=null;function Ne(b){ve&&ve(b)}function Ze(){He.stop()}function me(){He.start()}const He=new qM;He.setAnimationLoop(Ne),typeof self<"u"&&He.setContext(self),this.setAnimationLoop=function(b){ve=b,se.setAnimationLoop(b),b===null?He.stop():He.start()},se.addEventListener("sessionstart",Ze),se.addEventListener("sessionend",me),this.render=function(b,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(k),k=se.getCamera()),b.isScene===!0&&b.onBeforeRender(y,b,k,R),h=Se.get(b,x.length),h.init(k),x.push(h),J.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Oe.setFromProjectionMatrix(J,Tr,k.reversedDepth),K=this.localClippingEnabled,Ve=le.init(this.clippingPlanes,K),m=Z.get(b,g.length),m.init(),g.push(m),se.enabled===!0&&se.isPresenting===!0){const ne=y.xr.getDepthSensingMesh();ne!==null&&Fe(ne,k,-1/0,y.sortObjects)}Fe(b,k,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(q,P),We=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,We&&he.addToRenderList(m,b),this.info.render.frame++,Ve===!0&&le.beginShadows();const X=h.state.shadowsArray;be.render(X,b,k),Ve===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=m.opaque,z=m.transmissive;if(h.setupLights(),k.isArrayCamera){const ne=k.cameras;if(z.length>0)for(let ue=0,Te=ne.length;ue<Te;ue++){const Me=ne[ue];qt(Y,z,b,Me)}We&&he.render(b);for(let ue=0,Te=ne.length;ue<Te;ue++){const Me=ne[ue];$e(m,b,Me,Me.viewport)}}else z.length>0&&qt(Y,z,b,k),We&&he.render(b),$e(m,b,k);R!==null&&w===0&&(je.updateMultisampleRenderTarget(R),je.updateRenderTargetMipmap(R)),b.isScene===!0&&b.onAfterRender(y,b,k),fe.resetDefaultState(),M=-1,S=null,x.pop(),x.length>0?(h=x[x.length-1],Ve===!0&&le.setGlobalState(y.clippingPlanes,h.state.camera)):h=null,g.pop(),g.length>0?m=g[g.length-1]:m=null};function Fe(b,k,X,Y){if(b.visible===!1)return;if(b.layers.test(k.layers)){if(b.isGroup)X=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(k);else if(b.isLight)h.pushLight(b),b.castShadow&&h.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Oe.intersectsSprite(b)){Y&&Pe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(J);const ue=B.update(b),Te=b.material;Te.visible&&m.push(b,ue,Te,X,Pe.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Oe.intersectsObject(b))){const ue=B.update(b),Te=b.material;if(Y&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Pe.copy(b.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),Pe.copy(ue.boundingSphere.center)),Pe.applyMatrix4(b.matrixWorld).applyMatrix4(J)),Array.isArray(Te)){const Me=ue.groups;for(let ze=0,Ie=Me.length;ze<Ie;ze++){const Le=Me[ze],Je=Te[Le.materialIndex];Je&&Je.visible&&m.push(b,ue,Je,X,Pe.z,Le)}}else Te.visible&&m.push(b,ue,Te,X,Pe.z,null)}}const ne=b.children;for(let ue=0,Te=ne.length;ue<Te;ue++)Fe(ne[ue],k,X,Y)}function $e(b,k,X,Y){const z=b.opaque,ne=b.transmissive,ue=b.transparent;h.setupLightsView(X),Ve===!0&&le.setGlobalState(y.clippingPlanes,X),Y&&O.viewport(L.copy(Y)),z.length>0&&tt(z,k,X),ne.length>0&&tt(ne,k,X),ue.length>0&&tt(ue,k,X),O.buffers.depth.setTest(!0),O.buffers.depth.setMask(!0),O.buffers.color.setMask(!0),O.setPolygonOffset(!1)}function qt(b,k,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[Y.id]===void 0&&(h.state.transmissionRenderTarget[Y.id]=new Ho(1,1,{generateMipmaps:!0,type:Ue.has("EXT_color_buffer_half_float")||Ue.has("EXT_color_buffer_float")?Xc:rs,minFilter:Mo,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:mt.workingColorSpace}));const ne=h.state.transmissionRenderTarget[Y.id],ue=Y.viewport||L;ne.setSize(ue.z*y.transmissionResolutionScale,ue.w*y.transmissionResolutionScale);const Te=y.getRenderTarget(),Me=y.getActiveCubeFace(),ze=y.getActiveMipmapLevel();y.setRenderTarget(ne),y.getClearColor($),W=y.getClearAlpha(),W<1&&y.setClearColor(16777215,.5),y.clear(),We&&he.render(X);const Ie=y.toneMapping;y.toneMapping=zs;const Le=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),h.setupLightsView(Y),Ve===!0&&le.setGlobalState(y.clippingPlanes,Y),tt(b,X,Y),je.updateMultisampleRenderTarget(ne),je.updateRenderTargetMipmap(ne),Ue.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let lt=0,Xt=k.length;lt<Xt;lt++){const Lt=k[lt],At=Lt.object,Ge=Lt.geometry,zt=Lt.material,pt=Lt.group;if(zt.side===Wr&&At.layers.test(Y.layers)){const mi=zt.side;zt.side=ui,zt.needsUpdate=!0,Ft(At,X,Y,Ge,zt,pt),zt.side=mi,zt.needsUpdate=!0,Je=!0}}Je===!0&&(je.updateMultisampleRenderTarget(ne),je.updateRenderTargetMipmap(ne))}y.setRenderTarget(Te,Me,ze),y.setClearColor($,W),Le!==void 0&&(Y.viewport=Le),y.toneMapping=Ie}function tt(b,k,X){const Y=k.isScene===!0?k.overrideMaterial:null;for(let z=0,ne=b.length;z<ne;z++){const ue=b[z],Te=ue.object,Me=ue.geometry,ze=ue.group;let Ie=ue.material;Ie.allowOverride===!0&&Y!==null&&(Ie=Y),Te.layers.test(X.layers)&&Ft(Te,k,X,Me,Ie,ze)}}function Ft(b,k,X,Y,z,ne){b.onBeforeRender(y,k,X,Y,z,ne),b.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),z.onBeforeRender(y,k,X,Y,b,ne),z.transparent===!0&&z.side===Wr&&z.forceSinglePass===!1?(z.side=ui,z.needsUpdate=!0,y.renderBufferDirect(X,k,Y,z,b,ne),z.side=js,z.needsUpdate=!0,y.renderBufferDirect(X,k,Y,z,b,ne),z.side=Wr):y.renderBufferDirect(X,k,Y,z,b,ne),b.onAfterRender(y,k,X,Y,z,ne)}function Kt(b,k,X){k.isScene!==!0&&(k=Ce);const Y=ye.get(b),z=h.state.lights,ne=h.state.shadowsArray,ue=z.state.version,Te=Q.getParameters(b,z.state,ne,k,X),Me=Q.getProgramCacheKey(Te);let ze=Y.programs;Y.environment=b.isMeshStandardMaterial?k.environment:null,Y.fog=k.fog,Y.envMap=(b.isMeshStandardMaterial?_t:Qe).get(b.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&b.envMap===null?k.environmentRotation:b.envMapRotation,ze===void 0&&(b.addEventListener("dispose",te),ze=new Map,Y.programs=ze);let Ie=ze.get(Me);if(Ie!==void 0){if(Y.currentProgram===Ie&&Y.lightsStateVersion===ue)return Tt(b,Te),Ie}else Te.uniforms=Q.getUniforms(b),b.onBeforeCompile(Te,y),Ie=Q.acquireProgram(Te,Me),ze.set(Me,Ie),Y.uniforms=Te.uniforms;const Le=Y.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Le.clippingPlanes=le.uniform),Tt(b,Te),Y.needsLights=Nt(b),Y.lightsStateVersion=ue,Y.needsLights&&(Le.ambientLightColor.value=z.state.ambient,Le.lightProbe.value=z.state.probe,Le.directionalLights.value=z.state.directional,Le.directionalLightShadows.value=z.state.directionalShadow,Le.spotLights.value=z.state.spot,Le.spotLightShadows.value=z.state.spotShadow,Le.rectAreaLights.value=z.state.rectArea,Le.ltc_1.value=z.state.rectAreaLTC1,Le.ltc_2.value=z.state.rectAreaLTC2,Le.pointLights.value=z.state.point,Le.pointLightShadows.value=z.state.pointShadow,Le.hemisphereLights.value=z.state.hemi,Le.directionalShadowMap.value=z.state.directionalShadowMap,Le.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Le.spotShadowMap.value=z.state.spotShadowMap,Le.spotLightMatrix.value=z.state.spotLightMatrix,Le.spotLightMap.value=z.state.spotLightMap,Le.pointShadowMap.value=z.state.pointShadowMap,Le.pointShadowMatrix.value=z.state.pointShadowMatrix),Y.currentProgram=Ie,Y.uniformsList=null,Ie}function Dt(b){if(b.uniformsList===null){const k=b.currentProgram.getUniforms();b.uniformsList=Af.seqWithValue(k.seq,b.uniforms)}return b.uniformsList}function Tt(b,k){const X=ye.get(b);X.outputColorSpace=k.outputColorSpace,X.batching=k.batching,X.batchingColor=k.batchingColor,X.instancing=k.instancing,X.instancingColor=k.instancingColor,X.instancingMorph=k.instancingMorph,X.skinning=k.skinning,X.morphTargets=k.morphTargets,X.morphNormals=k.morphNormals,X.morphColors=k.morphColors,X.morphTargetsCount=k.morphTargetsCount,X.numClippingPlanes=k.numClippingPlanes,X.numIntersection=k.numClipIntersection,X.vertexAlphas=k.vertexAlphas,X.vertexTangents=k.vertexTangents,X.toneMapping=k.toneMapping}function St(b,k,X,Y,z){k.isScene!==!0&&(k=Ce),je.resetTextureUnits();const ne=k.fog,ue=Y.isMeshStandardMaterial?k.environment:null,Te=R===null?y.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:ol,Me=(Y.isMeshStandardMaterial?_t:Qe).get(Y.envMap||ue),ze=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ie=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Le=!!X.morphAttributes.position,Je=!!X.morphAttributes.normal,lt=!!X.morphAttributes.color;let Xt=zs;Y.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Xt=y.toneMapping);const Lt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,At=Lt!==void 0?Lt.length:0,Ge=ye.get(Y),zt=h.state.lights;if(Ve===!0&&(K===!0||b!==S)){const kn=b===S&&Y.id===M;le.setState(Y,b,kn)}let pt=!1;Y.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==zt.state.version||Ge.outputColorSpace!==Te||z.isBatchedMesh&&Ge.batching===!1||!z.isBatchedMesh&&Ge.batching===!0||z.isBatchedMesh&&Ge.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Ge.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Ge.instancing===!1||!z.isInstancedMesh&&Ge.instancing===!0||z.isSkinnedMesh&&Ge.skinning===!1||!z.isSkinnedMesh&&Ge.skinning===!0||z.isInstancedMesh&&Ge.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ge.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ge.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ge.instancingMorph===!1&&z.morphTexture!==null||Ge.envMap!==Me||Y.fog===!0&&Ge.fog!==ne||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==le.numPlanes||Ge.numIntersection!==le.numIntersection)||Ge.vertexAlphas!==ze||Ge.vertexTangents!==Ie||Ge.morphTargets!==Le||Ge.morphNormals!==Je||Ge.morphColors!==lt||Ge.toneMapping!==Xt||Ge.morphTargetsCount!==At)&&(pt=!0):(pt=!0,Ge.__version=Y.version);let mi=Ge.currentProgram;pt===!0&&(mi=Kt(Y,k,z));let Xo=!1,gi=!1,hl=!1;const Bt=mi.getUniforms(),Fi=Ge.uniforms;if(O.useProgram(mi.program)&&(Xo=!0,gi=!0,hl=!0),Y.id!==M&&(M=Y.id,gi=!0),Xo||S!==b){O.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Bt.setValue(N,"projectionMatrix",b.projectionMatrix),Bt.setValue(N,"viewMatrix",b.matrixWorldInverse);const Zn=Bt.map.cameraPosition;Zn!==void 0&&Zn.setValue(N,pe.setFromMatrixPosition(b.matrixWorld)),De.logarithmicDepthBuffer&&Bt.setValue(N,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Bt.setValue(N,"isOrthographic",b.isOrthographicCamera===!0),S!==b&&(S=b,gi=!0,hl=!0)}if(z.isSkinnedMesh){Bt.setOptional(N,z,"bindMatrix"),Bt.setOptional(N,z,"bindMatrixInverse");const kn=z.skeleton;kn&&(kn.boneTexture===null&&kn.computeBoneTexture(),Bt.setValue(N,"boneTexture",kn.boneTexture,je))}z.isBatchedMesh&&(Bt.setOptional(N,z,"batchingTexture"),Bt.setValue(N,"batchingTexture",z._matricesTexture,je),Bt.setOptional(N,z,"batchingIdTexture"),Bt.setValue(N,"batchingIdTexture",z._indirectTexture,je),Bt.setOptional(N,z,"batchingColorTexture"),z._colorsTexture!==null&&Bt.setValue(N,"batchingColorTexture",z._colorsTexture,je));const Oi=X.morphAttributes;if((Oi.position!==void 0||Oi.normal!==void 0||Oi.color!==void 0)&&oe.update(z,X,mi),(gi||Ge.receiveShadow!==z.receiveShadow)&&(Ge.receiveShadow=z.receiveShadow,Bt.setValue(N,"receiveShadow",z.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Fi.envMap.value=Me,Fi.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&k.environment!==null&&(Fi.envMapIntensity.value=k.environmentIntensity),gi&&(Bt.setValue(N,"toneMappingExposure",y.toneMappingExposure),Ge.needsLights&&pi(Fi,hl),ne&&Y.fog===!0&&ee.refreshFogUniforms(Fi,ne),ee.refreshMaterialUniforms(Fi,Y,U,j,h.state.transmissionRenderTarget[b.id]),Af.upload(N,Dt(Ge),Fi,je)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Af.upload(N,Dt(Ge),Fi,je),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Bt.setValue(N,"center",z.center),Bt.setValue(N,"modelViewMatrix",z.modelViewMatrix),Bt.setValue(N,"normalMatrix",z.normalMatrix),Bt.setValue(N,"modelMatrix",z.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const kn=Y.uniformsGroups;for(let Zn=0,Fd=kn.length;Zn<Fd;Zn++){const Zs=kn[Zn];Xe.update(Zs,mi),Xe.bind(Zs,mi)}}return mi}function pi(b,k){b.ambientLightColor.needsUpdate=k,b.lightProbe.needsUpdate=k,b.directionalLights.needsUpdate=k,b.directionalLightShadows.needsUpdate=k,b.pointLights.needsUpdate=k,b.pointLightShadows.needsUpdate=k,b.spotLights.needsUpdate=k,b.spotLightShadows.needsUpdate=k,b.rectAreaLights.needsUpdate=k,b.hemisphereLights.needsUpdate=k}function Nt(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(b,k,X){const Y=ye.get(b);Y.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),ye.get(b.texture).__webglTexture=k,ye.get(b.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:X,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,k){const X=ye.get(b);X.__webglFramebuffer=k,X.__useDefaultFramebuffer=k===void 0};const On=N.createFramebuffer();this.setRenderTarget=function(b,k=0,X=0){R=b,A=k,w=X;let Y=!0,z=null,ne=!1,ue=!1;if(b){const Me=ye.get(b);if(Me.__useDefaultFramebuffer!==void 0)O.bindFramebuffer(N.FRAMEBUFFER,null),Y=!1;else if(Me.__webglFramebuffer===void 0)je.setupRenderTarget(b);else if(Me.__hasExternalTextures)je.rebindTextures(b,ye.get(b.texture).__webglTexture,ye.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Le=b.depthTexture;if(Me.__boundDepthTexture!==Le){if(Le!==null&&ye.has(Le)&&(b.width!==Le.image.width||b.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");je.setupDepthRenderbuffer(b)}}const ze=b.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(ue=!0);const Ie=ye.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ie[k])?z=Ie[k][X]:z=Ie[k],ne=!0):b.samples>0&&je.useMultisampledRTT(b)===!1?z=ye.get(b).__webglMultisampledFramebuffer:Array.isArray(Ie)?z=Ie[X]:z=Ie,L.copy(b.viewport),F.copy(b.scissor),V=b.scissorTest}else L.copy(re).multiplyScalar(U).floor(),F.copy(xe).multiplyScalar(U).floor(),V=Ke;if(X!==0&&(z=On),O.bindFramebuffer(N.FRAMEBUFFER,z)&&Y&&O.drawBuffers(b,z),O.viewport(L),O.scissor(F),O.setScissorTest(V),ne){const Me=ye.get(b.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+k,Me.__webglTexture,X)}else if(ue){const Me=k;for(let ze=0;ze<b.textures.length;ze++){const Ie=ye.get(b.textures[ze]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+ze,Ie.__webglTexture,X,Me)}}else if(b!==null&&X!==0){const Me=ye.get(b.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Me.__webglTexture,X)}M=-1},this.readRenderTargetPixels=function(b,k,X,Y,z,ne,ue,Te=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=ye.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ue!==void 0&&(Me=Me[ue]),Me){O.bindFramebuffer(N.FRAMEBUFFER,Me);try{const ze=b.textures[Te],Ie=ze.format,Le=ze.type;if(!De.textureFormatReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!De.textureTypeReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=b.width-Y&&X>=0&&X<=b.height-z&&(b.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Te),N.readPixels(k,X,Y,z,Re.convert(Ie),Re.convert(Le),ne))}finally{const ze=R!==null?ye.get(R).__webglFramebuffer:null;O.bindFramebuffer(N.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(b,k,X,Y,z,ne,ue,Te=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=ye.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ue!==void 0&&(Me=Me[ue]),Me)if(k>=0&&k<=b.width-Y&&X>=0&&X<=b.height-z){O.bindFramebuffer(N.FRAMEBUFFER,Me);const ze=b.textures[Te],Ie=ze.format,Le=ze.type;if(!De.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!De.textureTypeReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Je),N.bufferData(N.PIXEL_PACK_BUFFER,ne.byteLength,N.STREAM_READ),b.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Te),N.readPixels(k,X,Y,z,Re.convert(Ie),Re.convert(Le),0);const lt=R!==null?ye.get(R).__webglFramebuffer:null;O.bindFramebuffer(N.FRAMEBUFFER,lt);const Xt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Lb(N,Xt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Je),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ne),N.deleteBuffer(Je),N.deleteSync(Xt),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,k=null,X=0){const Y=Math.pow(2,-X),z=Math.floor(b.image.width*Y),ne=Math.floor(b.image.height*Y),ue=k!==null?k.x:0,Te=k!==null?k.y:0;je.setTexture2D(b,0),N.copyTexSubImage2D(N.TEXTURE_2D,X,0,0,ue,Te,z,ne),O.unbindTexture()};const Ui=N.createFramebuffer(),ln=N.createFramebuffer();this.copyTextureToTexture=function(b,k,X=null,Y=null,z=0,ne=null){ne===null&&(z!==0?(zc("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ne=z,z=0):ne=0);let ue,Te,Me,ze,Ie,Le,Je,lt,Xt;const Lt=b.isCompressedTexture?b.mipmaps[ne]:b.image;if(X!==null)ue=X.max.x-X.min.x,Te=X.max.y-X.min.y,Me=X.isBox3?X.max.z-X.min.z:1,ze=X.min.x,Ie=X.min.y,Le=X.isBox3?X.min.z:0;else{const Oi=Math.pow(2,-z);ue=Math.floor(Lt.width*Oi),Te=Math.floor(Lt.height*Oi),b.isDataArrayTexture?Me=Lt.depth:b.isData3DTexture?Me=Math.floor(Lt.depth*Oi):Me=1,ze=0,Ie=0,Le=0}Y!==null?(Je=Y.x,lt=Y.y,Xt=Y.z):(Je=0,lt=0,Xt=0);const At=Re.convert(k.format),Ge=Re.convert(k.type);let zt;k.isData3DTexture?(je.setTexture3D(k,0),zt=N.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(je.setTexture2DArray(k,0),zt=N.TEXTURE_2D_ARRAY):(je.setTexture2D(k,0),zt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,k.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,k.unpackAlignment);const pt=N.getParameter(N.UNPACK_ROW_LENGTH),mi=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Xo=N.getParameter(N.UNPACK_SKIP_PIXELS),gi=N.getParameter(N.UNPACK_SKIP_ROWS),hl=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Lt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Lt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ze),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ie),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Le);const Bt=b.isDataArrayTexture||b.isData3DTexture,Fi=k.isDataArrayTexture||k.isData3DTexture;if(b.isDepthTexture){const Oi=ye.get(b),kn=ye.get(k),Zn=ye.get(Oi.__renderTarget),Fd=ye.get(kn.__renderTarget);O.bindFramebuffer(N.READ_FRAMEBUFFER,Zn.__webglFramebuffer),O.bindFramebuffer(N.DRAW_FRAMEBUFFER,Fd.__webglFramebuffer);for(let Zs=0;Zs<Me;Zs++)Bt&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ye.get(b).__webglTexture,z,Le+Zs),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ye.get(k).__webglTexture,ne,Xt+Zs)),N.blitFramebuffer(ze,Ie,ue,Te,Je,lt,ue,Te,N.DEPTH_BUFFER_BIT,N.NEAREST);O.bindFramebuffer(N.READ_FRAMEBUFFER,null),O.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(z!==0||b.isRenderTargetTexture||ye.has(b)){const Oi=ye.get(b),kn=ye.get(k);O.bindFramebuffer(N.READ_FRAMEBUFFER,Ui),O.bindFramebuffer(N.DRAW_FRAMEBUFFER,ln);for(let Zn=0;Zn<Me;Zn++)Bt?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Oi.__webglTexture,z,Le+Zn):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Oi.__webglTexture,z),Fi?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,kn.__webglTexture,ne,Xt+Zn):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,kn.__webglTexture,ne),z!==0?N.blitFramebuffer(ze,Ie,ue,Te,Je,lt,ue,Te,N.COLOR_BUFFER_BIT,N.NEAREST):Fi?N.copyTexSubImage3D(zt,ne,Je,lt,Xt+Zn,ze,Ie,ue,Te):N.copyTexSubImage2D(zt,ne,Je,lt,ze,Ie,ue,Te);O.bindFramebuffer(N.READ_FRAMEBUFFER,null),O.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Fi?b.isDataTexture||b.isData3DTexture?N.texSubImage3D(zt,ne,Je,lt,Xt,ue,Te,Me,At,Ge,Lt.data):k.isCompressedArrayTexture?N.compressedTexSubImage3D(zt,ne,Je,lt,Xt,ue,Te,Me,At,Lt.data):N.texSubImage3D(zt,ne,Je,lt,Xt,ue,Te,Me,At,Ge,Lt):b.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,ne,Je,lt,ue,Te,At,Ge,Lt.data):b.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,ne,Je,lt,Lt.width,Lt.height,At,Lt.data):N.texSubImage2D(N.TEXTURE_2D,ne,Je,lt,ue,Te,At,Ge,Lt);N.pixelStorei(N.UNPACK_ROW_LENGTH,pt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,mi),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Xo),N.pixelStorei(N.UNPACK_SKIP_ROWS,gi),N.pixelStorei(N.UNPACK_SKIP_IMAGES,hl),ne===0&&k.generateMipmaps&&N.generateMipmap(zt),O.unbindTexture()},this.initRenderTarget=function(b){ye.get(b).__webglFramebuffer===void 0&&je.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?je.setTextureCube(b,0):b.isData3DTexture?je.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?je.setTexture2DArray(b,0):je.setTexture2D(b,0),O.unbindTexture()},this.resetState=function(){A=0,w=0,R=null,O.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=mt._getUnpackColorSpace()}}const KD=()=>{const n=qe.useRef(null),e=qe.useRef(),t=qe.useRef(),i=qe.useRef();return qe.useEffect(()=>{if(!n.current)return;const r=new r2,s=new ji(75,window.innerWidth/window.innerHeight,.1,1e3),o=new qD({alpha:!0,antialias:!0});o.setSize(window.innerWidth,window.innerHeight),o.setClearColor(0,0),n.current.appendChild(o.domElement),e.current=r,t.current=o;const a=2e3,l=new Nr,c=new Float32Array(a*3),u=new Float32Array(a*3);for(let g=0;g<a*3;g+=3){c[g]=(Math.random()-.5)*2e3,c[g+1]=(Math.random()-.5)*2e3,c[g+2]=(Math.random()-.5)*2e3;const x=Math.random();x<.33?(u[g]=.42,u[g+1]=.39,u[g+2]=1):x<.66?(u[g]=0,u[g+1]=.9,u[g+2]=1):(u[g]=1,u[g+1]=0,u[g+2]=.43)}l.setAttribute("position",new Qi(c,3)),l.setAttribute("color",new Qi(u,3));const d=new XM({size:3,vertexColors:!0,transparent:!0,opacity:.8,blending:xm}),f=new l2(l,d);r.add(f),i.current=f;const p=[new j_(20,0),new W_(15,0),new G_(18,0)],v=[];for(let g=0;g<8;g++){const x=p[Math.floor(Math.random()*p.length)],y=new H_({color:Math.random()<.5?7103487:58879,wireframe:!0,transparent:!0,opacity:.3}),E=new Ar(x,y);E.position.set((Math.random()-.5)*1e3,(Math.random()-.5)*1e3,(Math.random()-.5)*1e3),v.push(E),r.add(E)}s.position.z=500;const _=()=>{requestAnimationFrame(_),i.current&&(i.current.rotation.x+=5e-4,i.current.rotation.y+=.001),v.forEach((g,x)=>{g.rotation.x+=.002+x*2e-4,g.rotation.y+=.003+x*3e-4,g.position.y+=Math.sin(Date.now()*.001+x)*.1}),o.render(r,s)};_();const m=()=>{t.current&&(s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),t.current.setSize(window.innerWidth,window.innerHeight))};window.addEventListener("resize",m);const h=g=>{if(!i.current)return;const x=g.clientX/window.innerWidth*2-1,y=-(g.clientY/window.innerHeight)*2+1;i.current.rotation.x=y*.05,i.current.rotation.y=x*.05};return window.addEventListener("mousemove",h),()=>{window.removeEventListener("resize",m),window.removeEventListener("mousemove",h),n.current&&o.domElement&&n.current.removeChild(o.domElement),o.dispose()}},[]),C.jsx("div",{ref:n,className:"fixed inset-0 pointer-events-none z-0",style:{background:"transparent"}})};function ZD(){return C.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 overflow-x-hidden",children:[C.jsx(KD,{}),C.jsx(qT,{}),C.jsxs("main",{children:[C.jsx(uC,{}),C.jsx(PC,{}),C.jsx(DC,{}),C.jsx(kC,{}),C.jsx(zC,{}),C.jsx(BC,{})]}),C.jsx(VC,{}),C.jsx(HC,{})]})}Y1(document.getElementById("root")).render(C.jsx(qe.StrictMode,{children:C.jsx(ZD,{})}));
