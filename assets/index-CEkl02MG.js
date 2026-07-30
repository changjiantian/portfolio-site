(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function CE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var F_={exports:{}},au={},O_={exports:{}},Ge={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Va=Symbol.for("react.element"),RE=Symbol.for("react.portal"),bE=Symbol.for("react.fragment"),PE=Symbol.for("react.strict_mode"),DE=Symbol.for("react.profiler"),LE=Symbol.for("react.provider"),NE=Symbol.for("react.context"),IE=Symbol.for("react.forward_ref"),UE=Symbol.for("react.suspense"),FE=Symbol.for("react.memo"),OE=Symbol.for("react.lazy"),cg=Symbol.iterator;function kE(t){return t===null||typeof t!="object"?null:(t=cg&&t[cg]||t["@@iterator"],typeof t=="function"?t:null)}var k_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B_=Object.assign,V_={};function wo(t,e,n){this.props=t,this.context=e,this.refs=V_,this.updater=n||k_}wo.prototype.isReactComponent={};wo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};wo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function z_(){}z_.prototype=wo.prototype;function dp(t,e,n){this.props=t,this.context=e,this.refs=V_,this.updater=n||k_}var hp=dp.prototype=new z_;hp.constructor=dp;B_(hp,wo.prototype);hp.isPureReactComponent=!0;var ug=Array.isArray,H_=Object.prototype.hasOwnProperty,pp={current:null},G_={key:!0,ref:!0,__self:!0,__source:!0};function W_(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)H_.call(e,i)&&!G_.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Va,type:t,key:s,ref:o,props:r,_owner:pp.current}}function BE(t,e){return{$$typeof:Va,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function mp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Va}function VE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var fg=/\/+/g;function Uu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?VE(""+t.key):e.toString(36)}function $l(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Va:case RE:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Uu(o,0):i,ug(r)?(n="",t!=null&&(n=t.replace(fg,"$&/")+"/"),$l(r,e,n,"",function(c){return c})):r!=null&&(mp(r)&&(r=BE(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(fg,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",ug(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Uu(s,a);o+=$l(s,e,n,l,r)}else if(l=kE(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Uu(s,a++),o+=$l(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function tl(t,e,n){if(t==null)return t;var i=[],r=0;return $l(t,i,"","",function(s){return e.call(n,s,r++)}),i}function zE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var gn={current:null},ql={transition:null},HE={ReactCurrentDispatcher:gn,ReactCurrentBatchConfig:ql,ReactCurrentOwner:pp};function X_(){throw Error("act(...) is not supported in production builds of React.")}Ge.Children={map:tl,forEach:function(t,e,n){tl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return tl(t,function(){e++}),e},toArray:function(t){return tl(t,function(e){return e})||[]},only:function(t){if(!mp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ge.Component=wo;Ge.Fragment=bE;Ge.Profiler=DE;Ge.PureComponent=dp;Ge.StrictMode=PE;Ge.Suspense=UE;Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=HE;Ge.act=X_;Ge.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=B_({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=pp.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)H_.call(e,l)&&!G_.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Va,type:t.type,key:r,ref:s,props:i,_owner:o}};Ge.createContext=function(t){return t={$$typeof:NE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:LE,_context:t},t.Consumer=t};Ge.createElement=W_;Ge.createFactory=function(t){var e=W_.bind(null,t);return e.type=t,e};Ge.createRef=function(){return{current:null}};Ge.forwardRef=function(t){return{$$typeof:IE,render:t}};Ge.isValidElement=mp;Ge.lazy=function(t){return{$$typeof:OE,_payload:{_status:-1,_result:t},_init:zE}};Ge.memo=function(t,e){return{$$typeof:FE,type:t,compare:e===void 0?null:e}};Ge.startTransition=function(t){var e=ql.transition;ql.transition={};try{t()}finally{ql.transition=e}};Ge.unstable_act=X_;Ge.useCallback=function(t,e){return gn.current.useCallback(t,e)};Ge.useContext=function(t){return gn.current.useContext(t)};Ge.useDebugValue=function(){};Ge.useDeferredValue=function(t){return gn.current.useDeferredValue(t)};Ge.useEffect=function(t,e){return gn.current.useEffect(t,e)};Ge.useId=function(){return gn.current.useId()};Ge.useImperativeHandle=function(t,e,n){return gn.current.useImperativeHandle(t,e,n)};Ge.useInsertionEffect=function(t,e){return gn.current.useInsertionEffect(t,e)};Ge.useLayoutEffect=function(t,e){return gn.current.useLayoutEffect(t,e)};Ge.useMemo=function(t,e){return gn.current.useMemo(t,e)};Ge.useReducer=function(t,e,n){return gn.current.useReducer(t,e,n)};Ge.useRef=function(t){return gn.current.useRef(t)};Ge.useState=function(t){return gn.current.useState(t)};Ge.useSyncExternalStore=function(t,e,n){return gn.current.useSyncExternalStore(t,e,n)};Ge.useTransition=function(){return gn.current.useTransition()};Ge.version="18.3.1";O_.exports=Ge;var J=O_.exports;const GE=CE(J);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var WE=J,XE=Symbol.for("react.element"),jE=Symbol.for("react.fragment"),$E=Object.prototype.hasOwnProperty,qE=WE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,YE={key:!0,ref:!0,__self:!0,__source:!0};function j_(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)$E.call(e,i)&&!YE.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:XE,type:t,key:s,ref:o,props:r,_owner:qE.current}}au.Fragment=jE;au.jsx=j_;au.jsxs=j_;F_.exports=au;var P=F_.exports,rd={},$_={exports:{}},Fn={},q_={exports:{}},Y_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,V){var K=N.length;N.push(V);e:for(;0<K;){var ne=K-1>>>1,oe=N[ne];if(0<r(oe,V))N[ne]=V,N[K]=oe,K=ne;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var V=N[0],K=N.pop();if(K!==V){N[0]=K;e:for(var ne=0,oe=N.length,Ve=oe>>>1;ne<Ve;){var He=2*(ne+1)-1,ke=N[He],Q=He+1,ae=N[Q];if(0>r(ke,K))Q<oe&&0>r(ae,ke)?(N[ne]=ae,N[Q]=K,ne=Q):(N[ne]=ke,N[He]=K,ne=He);else if(Q<oe&&0>r(ae,K))N[ne]=ae,N[Q]=K,ne=Q;else break e}}return V}function r(N,V){var K=N.sortIndex-V.sortIndex;return K!==0?K:N.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],f=1,d=null,u=3,p=!1,m=!1,M=!1,g=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(N){for(var V=n(c);V!==null;){if(V.callback===null)i(c);else if(V.startTime<=N)i(c),V.sortIndex=V.expirationTime,e(l,V);else break;V=n(c)}}function x(N){if(M=!1,y(N),!m)if(n(l)!==null)m=!0,I(E);else{var V=n(c);V!==null&&L(x,V.startTime-N)}}function E(N,V){m=!1,M&&(M=!1,h(_),_=-1),p=!0;var K=u;try{for(y(V),d=n(l);d!==null&&(!(d.expirationTime>V)||N&&!D());){var ne=d.callback;if(typeof ne=="function"){d.callback=null,u=d.priorityLevel;var oe=ne(d.expirationTime<=V);V=t.unstable_now(),typeof oe=="function"?d.callback=oe:d===n(l)&&i(l),y(V)}else i(l);d=n(l)}if(d!==null)var Ve=!0;else{var He=n(c);He!==null&&L(x,He.startTime-V),Ve=!1}return Ve}finally{d=null,u=K,p=!1}}var w=!1,C=null,_=-1,A=5,b=-1;function D(){return!(t.unstable_now()-b<A)}function U(){if(C!==null){var N=t.unstable_now();b=N;var V=!0;try{V=C(!0,N)}finally{V?$():(w=!1,C=null)}}else w=!1}var $;if(typeof v=="function")$=function(){v(U)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,B=Y.port2;Y.port1.onmessage=U,$=function(){B.postMessage(null)}}else $=function(){g(U,0)};function I(N){C=N,w||(w=!0,$())}function L(N,V){_=g(function(){N(t.unstable_now())},V)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){m||p||(m=!0,I(E))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return u},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(u){case 1:case 2:case 3:var V=3;break;default:V=u}var K=u;u=V;try{return N()}finally{u=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,V){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var K=u;u=N;try{return V()}finally{u=K}},t.unstable_scheduleCallback=function(N,V,K){var ne=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?ne+K:ne):K=ne,N){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=K+oe,N={id:f++,callback:V,priorityLevel:N,startTime:K,expirationTime:oe,sortIndex:-1},K>ne?(N.sortIndex=K,e(c,N),n(l)===null&&N===n(c)&&(M?(h(_),_=-1):M=!0,L(x,K-ne))):(N.sortIndex=oe,e(l,N),m||p||(m=!0,I(E))),N},t.unstable_shouldYield=D,t.unstable_wrapCallback=function(N){var V=u;return function(){var K=u;u=V;try{return N.apply(this,arguments)}finally{u=K}}}})(Y_);q_.exports=Y_;var KE=q_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ZE=J,Un=KE;function re(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var K_=new Set,va={};function ys(t,e){fo(t,e),fo(t+"Capture",e)}function fo(t,e){for(va[t]=e,t=0;t<e.length;t++)K_.add(e[t])}var Qi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sd=Object.prototype.hasOwnProperty,QE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,dg={},hg={};function JE(t){return sd.call(hg,t)?!0:sd.call(dg,t)?!1:QE.test(t)?hg[t]=!0:(dg[t]=!0,!1)}function eT(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function tT(t,e,n,i){if(e===null||typeof e>"u"||eT(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function vn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var en={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){en[t]=new vn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];en[e]=new vn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){en[t]=new vn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){en[t]=new vn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){en[t]=new vn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){en[t]=new vn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){en[t]=new vn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){en[t]=new vn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){en[t]=new vn(t,5,!1,t.toLowerCase(),null,!1,!1)});var gp=/[\-:]([a-z])/g;function vp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(gp,vp);en[e]=new vn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(gp,vp);en[e]=new vn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(gp,vp);en[e]=new vn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){en[t]=new vn(t,1,!1,t.toLowerCase(),null,!1,!1)});en.xlinkHref=new vn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){en[t]=new vn(t,1,!1,t.toLowerCase(),null,!0,!0)});function _p(t,e,n,i){var r=en.hasOwnProperty(e)?en[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(tT(e,n,r,i)&&(n=null),i||r===null?JE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var rr=ZE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,nl=Symbol.for("react.element"),zs=Symbol.for("react.portal"),Hs=Symbol.for("react.fragment"),xp=Symbol.for("react.strict_mode"),od=Symbol.for("react.profiler"),Z_=Symbol.for("react.provider"),Q_=Symbol.for("react.context"),yp=Symbol.for("react.forward_ref"),ad=Symbol.for("react.suspense"),ld=Symbol.for("react.suspense_list"),Sp=Symbol.for("react.memo"),vr=Symbol.for("react.lazy"),J_=Symbol.for("react.offscreen"),pg=Symbol.iterator;function No(t){return t===null||typeof t!="object"?null:(t=pg&&t[pg]||t["@@iterator"],typeof t=="function"?t:null)}var xt=Object.assign,Fu;function Zo(t){if(Fu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Fu=e&&e[1]||""}return`
`+Fu+t}var Ou=!1;function ku(t,e){if(!t||Ou)return"";Ou=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ou=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Zo(t):""}function nT(t){switch(t.tag){case 5:return Zo(t.type);case 16:return Zo("Lazy");case 13:return Zo("Suspense");case 19:return Zo("SuspenseList");case 0:case 2:case 15:return t=ku(t.type,!1),t;case 11:return t=ku(t.type.render,!1),t;case 1:return t=ku(t.type,!0),t;default:return""}}function cd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Hs:return"Fragment";case zs:return"Portal";case od:return"Profiler";case xp:return"StrictMode";case ad:return"Suspense";case ld:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Q_:return(t.displayName||"Context")+".Consumer";case Z_:return(t._context.displayName||"Context")+".Provider";case yp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Sp:return e=t.displayName||null,e!==null?e:cd(t.type)||"Memo";case vr:e=t._payload,t=t._init;try{return cd(t(e))}catch{}}return null}function iT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return cd(e);case 8:return e===xp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ir(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ex(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function rT(t){var e=ex(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function il(t){t._valueTracker||(t._valueTracker=rT(t))}function tx(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=ex(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function yc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ud(t,e){var n=e.checked;return xt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function mg(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Ir(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function nx(t,e){e=e.checked,e!=null&&_p(t,"checked",e,!1)}function fd(t,e){nx(t,e);var n=Ir(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?dd(t,e.type,n):e.hasOwnProperty("defaultValue")&&dd(t,e.type,Ir(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function gg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function dd(t,e,n){(e!=="number"||yc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Qo=Array.isArray;function no(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Ir(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function hd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(re(91));return xt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function vg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(re(92));if(Qo(n)){if(1<n.length)throw Error(re(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ir(n)}}function ix(t,e){var n=Ir(e.value),i=Ir(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function _g(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function rx(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?rx(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var rl,sx=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(rl=rl||document.createElement("div"),rl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=rl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function _a(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ra={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},sT=["Webkit","ms","Moz","O"];Object.keys(ra).forEach(function(t){sT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ra[e]=ra[t]})});function ox(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ra.hasOwnProperty(t)&&ra[t]?(""+e).trim():e+"px"}function ax(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=ox(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var oT=xt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function md(t,e){if(e){if(oT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(re(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(re(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(re(61))}if(e.style!=null&&typeof e.style!="object")throw Error(re(62))}}function gd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vd=null;function Mp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var _d=null,io=null,ro=null;function xg(t){if(t=Ga(t)){if(typeof _d!="function")throw Error(re(280));var e=t.stateNode;e&&(e=du(e),_d(t.stateNode,t.type,e))}}function lx(t){io?ro?ro.push(t):ro=[t]:io=t}function cx(){if(io){var t=io,e=ro;if(ro=io=null,xg(t),e)for(t=0;t<e.length;t++)xg(e[t])}}function ux(t,e){return t(e)}function fx(){}var Bu=!1;function dx(t,e,n){if(Bu)return t(e,n);Bu=!0;try{return ux(t,e,n)}finally{Bu=!1,(io!==null||ro!==null)&&(fx(),cx())}}function xa(t,e){var n=t.stateNode;if(n===null)return null;var i=du(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(re(231,e,typeof n));return n}var xd=!1;if(Qi)try{var Io={};Object.defineProperty(Io,"passive",{get:function(){xd=!0}}),window.addEventListener("test",Io,Io),window.removeEventListener("test",Io,Io)}catch{xd=!1}function aT(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var sa=!1,Sc=null,Mc=!1,yd=null,lT={onError:function(t){sa=!0,Sc=t}};function cT(t,e,n,i,r,s,o,a,l){sa=!1,Sc=null,aT.apply(lT,arguments)}function uT(t,e,n,i,r,s,o,a,l){if(cT.apply(this,arguments),sa){if(sa){var c=Sc;sa=!1,Sc=null}else throw Error(re(198));Mc||(Mc=!0,yd=c)}}function Ss(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function hx(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function yg(t){if(Ss(t)!==t)throw Error(re(188))}function fT(t){var e=t.alternate;if(!e){if(e=Ss(t),e===null)throw Error(re(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return yg(r),t;if(s===i)return yg(r),e;s=s.sibling}throw Error(re(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(re(189))}}if(n.alternate!==i)throw Error(re(190))}if(n.tag!==3)throw Error(re(188));return n.stateNode.current===n?t:e}function px(t){return t=fT(t),t!==null?mx(t):null}function mx(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=mx(t);if(e!==null)return e;t=t.sibling}return null}var gx=Un.unstable_scheduleCallback,Sg=Un.unstable_cancelCallback,dT=Un.unstable_shouldYield,hT=Un.unstable_requestPaint,Rt=Un.unstable_now,pT=Un.unstable_getCurrentPriorityLevel,Ep=Un.unstable_ImmediatePriority,vx=Un.unstable_UserBlockingPriority,Ec=Un.unstable_NormalPriority,mT=Un.unstable_LowPriority,_x=Un.unstable_IdlePriority,lu=null,Ai=null;function gT(t){if(Ai&&typeof Ai.onCommitFiberRoot=="function")try{Ai.onCommitFiberRoot(lu,t,void 0,(t.current.flags&128)===128)}catch{}}var li=Math.clz32?Math.clz32:xT,vT=Math.log,_T=Math.LN2;function xT(t){return t>>>=0,t===0?32:31-(vT(t)/_T|0)|0}var sl=64,ol=4194304;function Jo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Tc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Jo(a):(s&=o,s!==0&&(i=Jo(s)))}else o=n&~r,o!==0?i=Jo(o):s!==0&&(i=Jo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-li(e),r=1<<n,i|=t[n],e&=~r;return i}function yT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ST(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-li(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=yT(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Sd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function xx(){var t=sl;return sl<<=1,!(sl&4194240)&&(sl=64),t}function Vu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function za(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-li(e),t[e]=n}function MT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-li(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Tp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-li(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var it=0;function yx(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Sx,wp,Mx,Ex,Tx,Md=!1,al=[],Ar=null,Cr=null,Rr=null,ya=new Map,Sa=new Map,xr=[],ET="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Mg(t,e){switch(t){case"focusin":case"focusout":Ar=null;break;case"dragenter":case"dragleave":Cr=null;break;case"mouseover":case"mouseout":Rr=null;break;case"pointerover":case"pointerout":ya.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sa.delete(e.pointerId)}}function Uo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ga(e),e!==null&&wp(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function TT(t,e,n,i,r){switch(e){case"focusin":return Ar=Uo(Ar,t,e,n,i,r),!0;case"dragenter":return Cr=Uo(Cr,t,e,n,i,r),!0;case"mouseover":return Rr=Uo(Rr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ya.set(s,Uo(ya.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Sa.set(s,Uo(Sa.get(s)||null,t,e,n,i,r)),!0}return!1}function wx(t){var e=ts(t.target);if(e!==null){var n=Ss(e);if(n!==null){if(e=n.tag,e===13){if(e=hx(n),e!==null){t.blockedOn=e,Tx(t.priority,function(){Mx(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Yl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ed(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);vd=i,n.target.dispatchEvent(i),vd=null}else return e=Ga(n),e!==null&&wp(e),t.blockedOn=n,!1;e.shift()}return!0}function Eg(t,e,n){Yl(t)&&n.delete(e)}function wT(){Md=!1,Ar!==null&&Yl(Ar)&&(Ar=null),Cr!==null&&Yl(Cr)&&(Cr=null),Rr!==null&&Yl(Rr)&&(Rr=null),ya.forEach(Eg),Sa.forEach(Eg)}function Fo(t,e){t.blockedOn===e&&(t.blockedOn=null,Md||(Md=!0,Un.unstable_scheduleCallback(Un.unstable_NormalPriority,wT)))}function Ma(t){function e(r){return Fo(r,t)}if(0<al.length){Fo(al[0],t);for(var n=1;n<al.length;n++){var i=al[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ar!==null&&Fo(Ar,t),Cr!==null&&Fo(Cr,t),Rr!==null&&Fo(Rr,t),ya.forEach(e),Sa.forEach(e),n=0;n<xr.length;n++)i=xr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<xr.length&&(n=xr[0],n.blockedOn===null);)wx(n),n.blockedOn===null&&xr.shift()}var so=rr.ReactCurrentBatchConfig,wc=!0;function AT(t,e,n,i){var r=it,s=so.transition;so.transition=null;try{it=1,Ap(t,e,n,i)}finally{it=r,so.transition=s}}function CT(t,e,n,i){var r=it,s=so.transition;so.transition=null;try{it=4,Ap(t,e,n,i)}finally{it=r,so.transition=s}}function Ap(t,e,n,i){if(wc){var r=Ed(t,e,n,i);if(r===null)Ku(t,e,i,Ac,n),Mg(t,i);else if(TT(r,t,e,n,i))i.stopPropagation();else if(Mg(t,i),e&4&&-1<ET.indexOf(t)){for(;r!==null;){var s=Ga(r);if(s!==null&&Sx(s),s=Ed(t,e,n,i),s===null&&Ku(t,e,i,Ac,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Ku(t,e,i,null,n)}}var Ac=null;function Ed(t,e,n,i){if(Ac=null,t=Mp(i),t=ts(t),t!==null)if(e=Ss(t),e===null)t=null;else if(n=e.tag,n===13){if(t=hx(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ac=t,null}function Ax(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(pT()){case Ep:return 1;case vx:return 4;case Ec:case mT:return 16;case _x:return 536870912;default:return 16}default:return 16}}var Mr=null,Cp=null,Kl=null;function Cx(){if(Kl)return Kl;var t,e=Cp,n=e.length,i,r="value"in Mr?Mr.value:Mr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Kl=r.slice(t,1<i?1-i:void 0)}function Zl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ll(){return!0}function Tg(){return!1}function On(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ll:Tg,this.isPropagationStopped=Tg,this}return xt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ll)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ll)},persist:function(){},isPersistent:ll}),e}var Ao={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rp=On(Ao),Ha=xt({},Ao,{view:0,detail:0}),RT=On(Ha),zu,Hu,Oo,cu=xt({},Ha,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Oo&&(Oo&&t.type==="mousemove"?(zu=t.screenX-Oo.screenX,Hu=t.screenY-Oo.screenY):Hu=zu=0,Oo=t),zu)},movementY:function(t){return"movementY"in t?t.movementY:Hu}}),wg=On(cu),bT=xt({},cu,{dataTransfer:0}),PT=On(bT),DT=xt({},Ha,{relatedTarget:0}),Gu=On(DT),LT=xt({},Ao,{animationName:0,elapsedTime:0,pseudoElement:0}),NT=On(LT),IT=xt({},Ao,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),UT=On(IT),FT=xt({},Ao,{data:0}),Ag=On(FT),OT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},BT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function VT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=BT[t])?!!e[t]:!1}function bp(){return VT}var zT=xt({},Ha,{key:function(t){if(t.key){var e=OT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Zl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?kT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bp,charCode:function(t){return t.type==="keypress"?Zl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Zl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),HT=On(zT),GT=xt({},cu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cg=On(GT),WT=xt({},Ha,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bp}),XT=On(WT),jT=xt({},Ao,{propertyName:0,elapsedTime:0,pseudoElement:0}),$T=On(jT),qT=xt({},cu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),YT=On(qT),KT=[9,13,27,32],Pp=Qi&&"CompositionEvent"in window,oa=null;Qi&&"documentMode"in document&&(oa=document.documentMode);var ZT=Qi&&"TextEvent"in window&&!oa,Rx=Qi&&(!Pp||oa&&8<oa&&11>=oa),Rg=" ",bg=!1;function bx(t,e){switch(t){case"keyup":return KT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Px(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Gs=!1;function QT(t,e){switch(t){case"compositionend":return Px(e);case"keypress":return e.which!==32?null:(bg=!0,Rg);case"textInput":return t=e.data,t===Rg&&bg?null:t;default:return null}}function JT(t,e){if(Gs)return t==="compositionend"||!Pp&&bx(t,e)?(t=Cx(),Kl=Cp=Mr=null,Gs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Rx&&e.locale!=="ko"?null:e.data;default:return null}}var e1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!e1[t.type]:e==="textarea"}function Dx(t,e,n,i){lx(i),e=Cc(e,"onChange"),0<e.length&&(n=new Rp("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var aa=null,Ea=null;function t1(t){Hx(t,0)}function uu(t){var e=js(t);if(tx(e))return t}function n1(t,e){if(t==="change")return e}var Lx=!1;if(Qi){var Wu;if(Qi){var Xu="oninput"in document;if(!Xu){var Dg=document.createElement("div");Dg.setAttribute("oninput","return;"),Xu=typeof Dg.oninput=="function"}Wu=Xu}else Wu=!1;Lx=Wu&&(!document.documentMode||9<document.documentMode)}function Lg(){aa&&(aa.detachEvent("onpropertychange",Nx),Ea=aa=null)}function Nx(t){if(t.propertyName==="value"&&uu(Ea)){var e=[];Dx(e,Ea,t,Mp(t)),dx(t1,e)}}function i1(t,e,n){t==="focusin"?(Lg(),aa=e,Ea=n,aa.attachEvent("onpropertychange",Nx)):t==="focusout"&&Lg()}function r1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return uu(Ea)}function s1(t,e){if(t==="click")return uu(e)}function o1(t,e){if(t==="input"||t==="change")return uu(e)}function a1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var fi=typeof Object.is=="function"?Object.is:a1;function Ta(t,e){if(fi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!sd.call(e,r)||!fi(t[r],e[r]))return!1}return!0}function Ng(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ig(t,e){var n=Ng(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ng(n)}}function Ix(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ix(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Ux(){for(var t=window,e=yc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=yc(t.document)}return e}function Dp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function l1(t){var e=Ux(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Ix(n.ownerDocument.documentElement,n)){if(i!==null&&Dp(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Ig(n,s);var o=Ig(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var c1=Qi&&"documentMode"in document&&11>=document.documentMode,Ws=null,Td=null,la=null,wd=!1;function Ug(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;wd||Ws==null||Ws!==yc(i)||(i=Ws,"selectionStart"in i&&Dp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),la&&Ta(la,i)||(la=i,i=Cc(Td,"onSelect"),0<i.length&&(e=new Rp("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ws)))}function cl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Xs={animationend:cl("Animation","AnimationEnd"),animationiteration:cl("Animation","AnimationIteration"),animationstart:cl("Animation","AnimationStart"),transitionend:cl("Transition","TransitionEnd")},ju={},Fx={};Qi&&(Fx=document.createElement("div").style,"AnimationEvent"in window||(delete Xs.animationend.animation,delete Xs.animationiteration.animation,delete Xs.animationstart.animation),"TransitionEvent"in window||delete Xs.transitionend.transition);function fu(t){if(ju[t])return ju[t];if(!Xs[t])return t;var e=Xs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Fx)return ju[t]=e[n];return t}var Ox=fu("animationend"),kx=fu("animationiteration"),Bx=fu("animationstart"),Vx=fu("transitionend"),zx=new Map,Fg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Br(t,e){zx.set(t,e),ys(e,[t])}for(var $u=0;$u<Fg.length;$u++){var qu=Fg[$u],u1=qu.toLowerCase(),f1=qu[0].toUpperCase()+qu.slice(1);Br(u1,"on"+f1)}Br(Ox,"onAnimationEnd");Br(kx,"onAnimationIteration");Br(Bx,"onAnimationStart");Br("dblclick","onDoubleClick");Br("focusin","onFocus");Br("focusout","onBlur");Br(Vx,"onTransitionEnd");fo("onMouseEnter",["mouseout","mouseover"]);fo("onMouseLeave",["mouseout","mouseover"]);fo("onPointerEnter",["pointerout","pointerover"]);fo("onPointerLeave",["pointerout","pointerover"]);ys("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ys("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ys("onBeforeInput",["compositionend","keypress","textInput","paste"]);ys("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ys("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ys("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ea="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),d1=new Set("cancel close invalid load scroll toggle".split(" ").concat(ea));function Og(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,uT(i,e,void 0,t),t.currentTarget=null}function Hx(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Og(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Og(r,a,c),s=l}}}if(Mc)throw t=yd,Mc=!1,yd=null,t}function ht(t,e){var n=e[Pd];n===void 0&&(n=e[Pd]=new Set);var i=t+"__bubble";n.has(i)||(Gx(e,t,2,!1),n.add(i))}function Yu(t,e,n){var i=0;e&&(i|=4),Gx(n,t,i,e)}var ul="_reactListening"+Math.random().toString(36).slice(2);function wa(t){if(!t[ul]){t[ul]=!0,K_.forEach(function(n){n!=="selectionchange"&&(d1.has(n)||Yu(n,!1,t),Yu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ul]||(e[ul]=!0,Yu("selectionchange",!1,e))}}function Gx(t,e,n,i){switch(Ax(e)){case 1:var r=AT;break;case 4:r=CT;break;default:r=Ap}n=r.bind(null,e,n,t),r=void 0,!xd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Ku(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=ts(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}dx(function(){var c=s,f=Mp(n),d=[];e:{var u=zx.get(t);if(u!==void 0){var p=Rp,m=t;switch(t){case"keypress":if(Zl(n)===0)break e;case"keydown":case"keyup":p=HT;break;case"focusin":m="focus",p=Gu;break;case"focusout":m="blur",p=Gu;break;case"beforeblur":case"afterblur":p=Gu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=wg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=PT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=XT;break;case Ox:case kx:case Bx:p=NT;break;case Vx:p=$T;break;case"scroll":p=RT;break;case"wheel":p=YT;break;case"copy":case"cut":case"paste":p=UT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Cg}var M=(e&4)!==0,g=!M&&t==="scroll",h=M?u!==null?u+"Capture":null:u;M=[];for(var v=c,y;v!==null;){y=v;var x=y.stateNode;if(y.tag===5&&x!==null&&(y=x,h!==null&&(x=xa(v,h),x!=null&&M.push(Aa(v,x,y)))),g)break;v=v.return}0<M.length&&(u=new p(u,m,null,n,f),d.push({event:u,listeners:M}))}}if(!(e&7)){e:{if(u=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",u&&n!==vd&&(m=n.relatedTarget||n.fromElement)&&(ts(m)||m[Ji]))break e;if((p||u)&&(u=f.window===f?f:(u=f.ownerDocument)?u.defaultView||u.parentWindow:window,p?(m=n.relatedTarget||n.toElement,p=c,m=m?ts(m):null,m!==null&&(g=Ss(m),m!==g||m.tag!==5&&m.tag!==6)&&(m=null)):(p=null,m=c),p!==m)){if(M=wg,x="onMouseLeave",h="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(M=Cg,x="onPointerLeave",h="onPointerEnter",v="pointer"),g=p==null?u:js(p),y=m==null?u:js(m),u=new M(x,v+"leave",p,n,f),u.target=g,u.relatedTarget=y,x=null,ts(f)===c&&(M=new M(h,v+"enter",m,n,f),M.target=y,M.relatedTarget=g,x=M),g=x,p&&m)t:{for(M=p,h=m,v=0,y=M;y;y=ws(y))v++;for(y=0,x=h;x;x=ws(x))y++;for(;0<v-y;)M=ws(M),v--;for(;0<y-v;)h=ws(h),y--;for(;v--;){if(M===h||h!==null&&M===h.alternate)break t;M=ws(M),h=ws(h)}M=null}else M=null;p!==null&&kg(d,u,p,M,!1),m!==null&&g!==null&&kg(d,g,m,M,!0)}}e:{if(u=c?js(c):window,p=u.nodeName&&u.nodeName.toLowerCase(),p==="select"||p==="input"&&u.type==="file")var E=n1;else if(Pg(u))if(Lx)E=o1;else{E=r1;var w=i1}else(p=u.nodeName)&&p.toLowerCase()==="input"&&(u.type==="checkbox"||u.type==="radio")&&(E=s1);if(E&&(E=E(t,c))){Dx(d,E,n,f);break e}w&&w(t,u,c),t==="focusout"&&(w=u._wrapperState)&&w.controlled&&u.type==="number"&&dd(u,"number",u.value)}switch(w=c?js(c):window,t){case"focusin":(Pg(w)||w.contentEditable==="true")&&(Ws=w,Td=c,la=null);break;case"focusout":la=Td=Ws=null;break;case"mousedown":wd=!0;break;case"contextmenu":case"mouseup":case"dragend":wd=!1,Ug(d,n,f);break;case"selectionchange":if(c1)break;case"keydown":case"keyup":Ug(d,n,f)}var C;if(Pp)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Gs?bx(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Rx&&n.locale!=="ko"&&(Gs||_!=="onCompositionStart"?_==="onCompositionEnd"&&Gs&&(C=Cx()):(Mr=f,Cp="value"in Mr?Mr.value:Mr.textContent,Gs=!0)),w=Cc(c,_),0<w.length&&(_=new Ag(_,t,null,n,f),d.push({event:_,listeners:w}),C?_.data=C:(C=Px(n),C!==null&&(_.data=C)))),(C=ZT?QT(t,n):JT(t,n))&&(c=Cc(c,"onBeforeInput"),0<c.length&&(f=new Ag("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:c}),f.data=C))}Hx(d,e)})}function Aa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Cc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=xa(t,n),s!=null&&i.unshift(Aa(t,s,r)),s=xa(t,e),s!=null&&i.push(Aa(t,s,r))),t=t.return}return i}function ws(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function kg(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=xa(n,s),l!=null&&o.unshift(Aa(n,l,a))):r||(l=xa(n,s),l!=null&&o.push(Aa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var h1=/\r\n?/g,p1=/\u0000|\uFFFD/g;function Bg(t){return(typeof t=="string"?t:""+t).replace(h1,`
`).replace(p1,"")}function fl(t,e,n){if(e=Bg(e),Bg(t)!==e&&n)throw Error(re(425))}function Rc(){}var Ad=null,Cd=null;function Rd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var bd=typeof setTimeout=="function"?setTimeout:void 0,m1=typeof clearTimeout=="function"?clearTimeout:void 0,Vg=typeof Promise=="function"?Promise:void 0,g1=typeof queueMicrotask=="function"?queueMicrotask:typeof Vg<"u"?function(t){return Vg.resolve(null).then(t).catch(v1)}:bd;function v1(t){setTimeout(function(){throw t})}function Zu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ma(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ma(e)}function br(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function zg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Co=Math.random().toString(36).slice(2),Ei="__reactFiber$"+Co,Ca="__reactProps$"+Co,Ji="__reactContainer$"+Co,Pd="__reactEvents$"+Co,_1="__reactListeners$"+Co,x1="__reactHandles$"+Co;function ts(t){var e=t[Ei];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ji]||n[Ei]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=zg(t);t!==null;){if(n=t[Ei])return n;t=zg(t)}return e}t=n,n=t.parentNode}return null}function Ga(t){return t=t[Ei]||t[Ji],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function js(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(re(33))}function du(t){return t[Ca]||null}var Dd=[],$s=-1;function Vr(t){return{current:t}}function pt(t){0>$s||(t.current=Dd[$s],Dd[$s]=null,$s--)}function dt(t,e){$s++,Dd[$s]=t.current,t.current=e}var Ur={},cn=Vr(Ur),Mn=Vr(!1),ds=Ur;function ho(t,e){var n=t.type.contextTypes;if(!n)return Ur;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function En(t){return t=t.childContextTypes,t!=null}function bc(){pt(Mn),pt(cn)}function Hg(t,e,n){if(cn.current!==Ur)throw Error(re(168));dt(cn,e),dt(Mn,n)}function Wx(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(re(108,iT(t)||"Unknown",r));return xt({},n,i)}function Pc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ur,ds=cn.current,dt(cn,t),dt(Mn,Mn.current),!0}function Gg(t,e,n){var i=t.stateNode;if(!i)throw Error(re(169));n?(t=Wx(t,e,ds),i.__reactInternalMemoizedMergedChildContext=t,pt(Mn),pt(cn),dt(cn,t)):pt(Mn),dt(Mn,n)}var Hi=null,hu=!1,Qu=!1;function Xx(t){Hi===null?Hi=[t]:Hi.push(t)}function y1(t){hu=!0,Xx(t)}function zr(){if(!Qu&&Hi!==null){Qu=!0;var t=0,e=it;try{var n=Hi;for(it=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Hi=null,hu=!1}catch(r){throw Hi!==null&&(Hi=Hi.slice(t+1)),gx(Ep,zr),r}finally{it=e,Qu=!1}}return null}var qs=[],Ys=0,Dc=null,Lc=0,zn=[],Hn=0,hs=null,Xi=1,ji="";function Yr(t,e){qs[Ys++]=Lc,qs[Ys++]=Dc,Dc=t,Lc=e}function jx(t,e,n){zn[Hn++]=Xi,zn[Hn++]=ji,zn[Hn++]=hs,hs=t;var i=Xi;t=ji;var r=32-li(i)-1;i&=~(1<<r),n+=1;var s=32-li(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Xi=1<<32-li(e)+r|n<<r|i,ji=s+t}else Xi=1<<s|n<<r|i,ji=t}function Lp(t){t.return!==null&&(Yr(t,1),jx(t,1,0))}function Np(t){for(;t===Dc;)Dc=qs[--Ys],qs[Ys]=null,Lc=qs[--Ys],qs[Ys]=null;for(;t===hs;)hs=zn[--Hn],zn[Hn]=null,ji=zn[--Hn],zn[Hn]=null,Xi=zn[--Hn],zn[Hn]=null}var Ln=null,Dn=null,mt=!1,ri=null;function $x(t,e){var n=Wn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Wg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ln=t,Dn=br(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ln=t,Dn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=hs!==null?{id:Xi,overflow:ji}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Wn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ln=t,Dn=null,!0):!1;default:return!1}}function Ld(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Nd(t){if(mt){var e=Dn;if(e){var n=e;if(!Wg(t,e)){if(Ld(t))throw Error(re(418));e=br(n.nextSibling);var i=Ln;e&&Wg(t,e)?$x(i,n):(t.flags=t.flags&-4097|2,mt=!1,Ln=t)}}else{if(Ld(t))throw Error(re(418));t.flags=t.flags&-4097|2,mt=!1,Ln=t}}}function Xg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ln=t}function dl(t){if(t!==Ln)return!1;if(!mt)return Xg(t),mt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Rd(t.type,t.memoizedProps)),e&&(e=Dn)){if(Ld(t))throw qx(),Error(re(418));for(;e;)$x(t,e),e=br(e.nextSibling)}if(Xg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(re(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Dn=br(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Dn=null}}else Dn=Ln?br(t.stateNode.nextSibling):null;return!0}function qx(){for(var t=Dn;t;)t=br(t.nextSibling)}function po(){Dn=Ln=null,mt=!1}function Ip(t){ri===null?ri=[t]:ri.push(t)}var S1=rr.ReactCurrentBatchConfig;function ko(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(re(309));var i=n.stateNode}if(!i)throw Error(re(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(re(284));if(!n._owner)throw Error(re(290,t))}return t}function hl(t,e){throw t=Object.prototype.toString.call(e),Error(re(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function jg(t){var e=t._init;return e(t._payload)}function Yx(t){function e(h,v){if(t){var y=h.deletions;y===null?(h.deletions=[v],h.flags|=16):y.push(v)}}function n(h,v){if(!t)return null;for(;v!==null;)e(h,v),v=v.sibling;return null}function i(h,v){for(h=new Map;v!==null;)v.key!==null?h.set(v.key,v):h.set(v.index,v),v=v.sibling;return h}function r(h,v){return h=Nr(h,v),h.index=0,h.sibling=null,h}function s(h,v,y){return h.index=y,t?(y=h.alternate,y!==null?(y=y.index,y<v?(h.flags|=2,v):y):(h.flags|=2,v)):(h.flags|=1048576,v)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,v,y,x){return v===null||v.tag!==6?(v=of(y,h.mode,x),v.return=h,v):(v=r(v,y),v.return=h,v)}function l(h,v,y,x){var E=y.type;return E===Hs?f(h,v,y.props.children,x,y.key):v!==null&&(v.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===vr&&jg(E)===v.type)?(x=r(v,y.props),x.ref=ko(h,v,y),x.return=h,x):(x=rc(y.type,y.key,y.props,null,h.mode,x),x.ref=ko(h,v,y),x.return=h,x)}function c(h,v,y,x){return v===null||v.tag!==4||v.stateNode.containerInfo!==y.containerInfo||v.stateNode.implementation!==y.implementation?(v=af(y,h.mode,x),v.return=h,v):(v=r(v,y.children||[]),v.return=h,v)}function f(h,v,y,x,E){return v===null||v.tag!==7?(v=cs(y,h.mode,x,E),v.return=h,v):(v=r(v,y),v.return=h,v)}function d(h,v,y){if(typeof v=="string"&&v!==""||typeof v=="number")return v=of(""+v,h.mode,y),v.return=h,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case nl:return y=rc(v.type,v.key,v.props,null,h.mode,y),y.ref=ko(h,null,v),y.return=h,y;case zs:return v=af(v,h.mode,y),v.return=h,v;case vr:var x=v._init;return d(h,x(v._payload),y)}if(Qo(v)||No(v))return v=cs(v,h.mode,y,null),v.return=h,v;hl(h,v)}return null}function u(h,v,y,x){var E=v!==null?v.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return E!==null?null:a(h,v,""+y,x);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case nl:return y.key===E?l(h,v,y,x):null;case zs:return y.key===E?c(h,v,y,x):null;case vr:return E=y._init,u(h,v,E(y._payload),x)}if(Qo(y)||No(y))return E!==null?null:f(h,v,y,x,null);hl(h,y)}return null}function p(h,v,y,x,E){if(typeof x=="string"&&x!==""||typeof x=="number")return h=h.get(y)||null,a(v,h,""+x,E);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case nl:return h=h.get(x.key===null?y:x.key)||null,l(v,h,x,E);case zs:return h=h.get(x.key===null?y:x.key)||null,c(v,h,x,E);case vr:var w=x._init;return p(h,v,y,w(x._payload),E)}if(Qo(x)||No(x))return h=h.get(y)||null,f(v,h,x,E,null);hl(v,x)}return null}function m(h,v,y,x){for(var E=null,w=null,C=v,_=v=0,A=null;C!==null&&_<y.length;_++){C.index>_?(A=C,C=null):A=C.sibling;var b=u(h,C,y[_],x);if(b===null){C===null&&(C=A);break}t&&C&&b.alternate===null&&e(h,C),v=s(b,v,_),w===null?E=b:w.sibling=b,w=b,C=A}if(_===y.length)return n(h,C),mt&&Yr(h,_),E;if(C===null){for(;_<y.length;_++)C=d(h,y[_],x),C!==null&&(v=s(C,v,_),w===null?E=C:w.sibling=C,w=C);return mt&&Yr(h,_),E}for(C=i(h,C);_<y.length;_++)A=p(C,h,_,y[_],x),A!==null&&(t&&A.alternate!==null&&C.delete(A.key===null?_:A.key),v=s(A,v,_),w===null?E=A:w.sibling=A,w=A);return t&&C.forEach(function(D){return e(h,D)}),mt&&Yr(h,_),E}function M(h,v,y,x){var E=No(y);if(typeof E!="function")throw Error(re(150));if(y=E.call(y),y==null)throw Error(re(151));for(var w=E=null,C=v,_=v=0,A=null,b=y.next();C!==null&&!b.done;_++,b=y.next()){C.index>_?(A=C,C=null):A=C.sibling;var D=u(h,C,b.value,x);if(D===null){C===null&&(C=A);break}t&&C&&D.alternate===null&&e(h,C),v=s(D,v,_),w===null?E=D:w.sibling=D,w=D,C=A}if(b.done)return n(h,C),mt&&Yr(h,_),E;if(C===null){for(;!b.done;_++,b=y.next())b=d(h,b.value,x),b!==null&&(v=s(b,v,_),w===null?E=b:w.sibling=b,w=b);return mt&&Yr(h,_),E}for(C=i(h,C);!b.done;_++,b=y.next())b=p(C,h,_,b.value,x),b!==null&&(t&&b.alternate!==null&&C.delete(b.key===null?_:b.key),v=s(b,v,_),w===null?E=b:w.sibling=b,w=b);return t&&C.forEach(function(U){return e(h,U)}),mt&&Yr(h,_),E}function g(h,v,y,x){if(typeof y=="object"&&y!==null&&y.type===Hs&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case nl:e:{for(var E=y.key,w=v;w!==null;){if(w.key===E){if(E=y.type,E===Hs){if(w.tag===7){n(h,w.sibling),v=r(w,y.props.children),v.return=h,h=v;break e}}else if(w.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===vr&&jg(E)===w.type){n(h,w.sibling),v=r(w,y.props),v.ref=ko(h,w,y),v.return=h,h=v;break e}n(h,w);break}else e(h,w);w=w.sibling}y.type===Hs?(v=cs(y.props.children,h.mode,x,y.key),v.return=h,h=v):(x=rc(y.type,y.key,y.props,null,h.mode,x),x.ref=ko(h,v,y),x.return=h,h=x)}return o(h);case zs:e:{for(w=y.key;v!==null;){if(v.key===w)if(v.tag===4&&v.stateNode.containerInfo===y.containerInfo&&v.stateNode.implementation===y.implementation){n(h,v.sibling),v=r(v,y.children||[]),v.return=h,h=v;break e}else{n(h,v);break}else e(h,v);v=v.sibling}v=af(y,h.mode,x),v.return=h,h=v}return o(h);case vr:return w=y._init,g(h,v,w(y._payload),x)}if(Qo(y))return m(h,v,y,x);if(No(y))return M(h,v,y,x);hl(h,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,v!==null&&v.tag===6?(n(h,v.sibling),v=r(v,y),v.return=h,h=v):(n(h,v),v=of(y,h.mode,x),v.return=h,h=v),o(h)):n(h,v)}return g}var mo=Yx(!0),Kx=Yx(!1),Nc=Vr(null),Ic=null,Ks=null,Up=null;function Fp(){Up=Ks=Ic=null}function Op(t){var e=Nc.current;pt(Nc),t._currentValue=e}function Id(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function oo(t,e){Ic=t,Up=Ks=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Sn=!0),t.firstContext=null)}function qn(t){var e=t._currentValue;if(Up!==t)if(t={context:t,memoizedValue:e,next:null},Ks===null){if(Ic===null)throw Error(re(308));Ks=t,Ic.dependencies={lanes:0,firstContext:t}}else Ks=Ks.next=t;return e}var ns=null;function kp(t){ns===null?ns=[t]:ns.push(t)}function Zx(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,kp(e)):(n.next=r.next,r.next=n),e.interleaved=n,er(t,i)}function er(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var _r=!1;function Bp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qx(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function qi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Pr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,er(t,n)}return r=i.interleaved,r===null?(e.next=e,kp(i)):(e.next=r.next,r.next=e),i.interleaved=e,er(t,n)}function Ql(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Tp(t,n)}}function $g(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Uc(t,e,n,i){var r=t.updateQueue;_r=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,f=c=l=null,a=s;do{var u=a.lane,p=a.eventTime;if((i&u)===u){f!==null&&(f=f.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=t,M=a;switch(u=e,p=n,M.tag){case 1:if(m=M.payload,typeof m=="function"){d=m.call(p,d,u);break e}d=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=M.payload,u=typeof m=="function"?m.call(p,d,u):m,u==null)break e;d=xt({},d,u);break e;case 2:_r=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,u=r.effects,u===null?r.effects=[a]:u.push(a))}else p={eventTime:p,lane:u,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=p,l=d):f=f.next=p,o|=u;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;u=a,a=u.next,u.next=null,r.lastBaseUpdate=u,r.shared.pending=null}}while(!0);if(f===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ms|=o,t.lanes=o,t.memoizedState=d}}function qg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(re(191,r));r.call(i)}}}var Wa={},Ci=Vr(Wa),Ra=Vr(Wa),ba=Vr(Wa);function is(t){if(t===Wa)throw Error(re(174));return t}function Vp(t,e){switch(dt(ba,e),dt(Ra,t),dt(Ci,Wa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:pd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=pd(e,t)}pt(Ci),dt(Ci,e)}function go(){pt(Ci),pt(Ra),pt(ba)}function Jx(t){is(ba.current);var e=is(Ci.current),n=pd(e,t.type);e!==n&&(dt(Ra,t),dt(Ci,n))}function zp(t){Ra.current===t&&(pt(Ci),pt(Ra))}var vt=Vr(0);function Fc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ju=[];function Hp(){for(var t=0;t<Ju.length;t++)Ju[t]._workInProgressVersionPrimary=null;Ju.length=0}var Jl=rr.ReactCurrentDispatcher,ef=rr.ReactCurrentBatchConfig,ps=0,_t=null,kt=null,Xt=null,Oc=!1,ca=!1,Pa=0,M1=0;function nn(){throw Error(re(321))}function Gp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!fi(t[n],e[n]))return!1;return!0}function Wp(t,e,n,i,r,s){if(ps=s,_t=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Jl.current=t===null||t.memoizedState===null?A1:C1,t=n(i,r),ca){s=0;do{if(ca=!1,Pa=0,25<=s)throw Error(re(301));s+=1,Xt=kt=null,e.updateQueue=null,Jl.current=R1,t=n(i,r)}while(ca)}if(Jl.current=kc,e=kt!==null&&kt.next!==null,ps=0,Xt=kt=_t=null,Oc=!1,e)throw Error(re(300));return t}function Xp(){var t=Pa!==0;return Pa=0,t}function xi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xt===null?_t.memoizedState=Xt=t:Xt=Xt.next=t,Xt}function Yn(){if(kt===null){var t=_t.alternate;t=t!==null?t.memoizedState:null}else t=kt.next;var e=Xt===null?_t.memoizedState:Xt.next;if(e!==null)Xt=e,kt=t;else{if(t===null)throw Error(re(310));kt=t,t={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},Xt===null?_t.memoizedState=Xt=t:Xt=Xt.next=t}return Xt}function Da(t,e){return typeof e=="function"?e(t):e}function tf(t){var e=Yn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=kt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var f=c.lane;if((ps&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,_t.lanes|=f,ms|=f}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,fi(i,e.memoizedState)||(Sn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,_t.lanes|=s,ms|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function nf(t){var e=Yn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);fi(s,e.memoizedState)||(Sn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function ey(){}function ty(t,e){var n=_t,i=Yn(),r=e(),s=!fi(i.memoizedState,r);if(s&&(i.memoizedState=r,Sn=!0),i=i.queue,jp(ry.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Xt!==null&&Xt.memoizedState.tag&1){if(n.flags|=2048,La(9,iy.bind(null,n,i,r,e),void 0,null),jt===null)throw Error(re(349));ps&30||ny(n,e,r)}return r}function ny(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=_t.updateQueue,e===null?(e={lastEffect:null,stores:null},_t.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function iy(t,e,n,i){e.value=n,e.getSnapshot=i,sy(e)&&oy(t)}function ry(t,e,n){return n(function(){sy(e)&&oy(t)})}function sy(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!fi(t,n)}catch{return!0}}function oy(t){var e=er(t,1);e!==null&&ci(e,t,1,-1)}function Yg(t){var e=xi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Da,lastRenderedState:t},e.queue=t,t=t.dispatch=w1.bind(null,_t,t),[e.memoizedState,t]}function La(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=_t.updateQueue,e===null?(e={lastEffect:null,stores:null},_t.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function ay(){return Yn().memoizedState}function ec(t,e,n,i){var r=xi();_t.flags|=t,r.memoizedState=La(1|e,n,void 0,i===void 0?null:i)}function pu(t,e,n,i){var r=Yn();i=i===void 0?null:i;var s=void 0;if(kt!==null){var o=kt.memoizedState;if(s=o.destroy,i!==null&&Gp(i,o.deps)){r.memoizedState=La(e,n,s,i);return}}_t.flags|=t,r.memoizedState=La(1|e,n,s,i)}function Kg(t,e){return ec(8390656,8,t,e)}function jp(t,e){return pu(2048,8,t,e)}function ly(t,e){return pu(4,2,t,e)}function cy(t,e){return pu(4,4,t,e)}function uy(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function fy(t,e,n){return n=n!=null?n.concat([t]):null,pu(4,4,uy.bind(null,e,t),n)}function $p(){}function dy(t,e){var n=Yn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Gp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function hy(t,e){var n=Yn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Gp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function py(t,e,n){return ps&21?(fi(n,e)||(n=xx(),_t.lanes|=n,ms|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Sn=!0),t.memoizedState=n)}function E1(t,e){var n=it;it=n!==0&&4>n?n:4,t(!0);var i=ef.transition;ef.transition={};try{t(!1),e()}finally{it=n,ef.transition=i}}function my(){return Yn().memoizedState}function T1(t,e,n){var i=Lr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},gy(t))vy(e,n);else if(n=Zx(t,e,n,i),n!==null){var r=pn();ci(n,t,i,r),_y(n,e,i)}}function w1(t,e,n){var i=Lr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(gy(t))vy(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,fi(a,o)){var l=e.interleaved;l===null?(r.next=r,kp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Zx(t,e,r,i),n!==null&&(r=pn(),ci(n,t,i,r),_y(n,e,i))}}function gy(t){var e=t.alternate;return t===_t||e!==null&&e===_t}function vy(t,e){ca=Oc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function _y(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Tp(t,n)}}var kc={readContext:qn,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useInsertionEffect:nn,useLayoutEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useMutableSource:nn,useSyncExternalStore:nn,useId:nn,unstable_isNewReconciler:!1},A1={readContext:qn,useCallback:function(t,e){return xi().memoizedState=[t,e===void 0?null:e],t},useContext:qn,useEffect:Kg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ec(4194308,4,uy.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ec(4194308,4,t,e)},useInsertionEffect:function(t,e){return ec(4,2,t,e)},useMemo:function(t,e){var n=xi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=xi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=T1.bind(null,_t,t),[i.memoizedState,t]},useRef:function(t){var e=xi();return t={current:t},e.memoizedState=t},useState:Yg,useDebugValue:$p,useDeferredValue:function(t){return xi().memoizedState=t},useTransition:function(){var t=Yg(!1),e=t[0];return t=E1.bind(null,t[1]),xi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=_t,r=xi();if(mt){if(n===void 0)throw Error(re(407));n=n()}else{if(n=e(),jt===null)throw Error(re(349));ps&30||ny(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Kg(ry.bind(null,i,s,t),[t]),i.flags|=2048,La(9,iy.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=xi(),e=jt.identifierPrefix;if(mt){var n=ji,i=Xi;n=(i&~(1<<32-li(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Pa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=M1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},C1={readContext:qn,useCallback:dy,useContext:qn,useEffect:jp,useImperativeHandle:fy,useInsertionEffect:ly,useLayoutEffect:cy,useMemo:hy,useReducer:tf,useRef:ay,useState:function(){return tf(Da)},useDebugValue:$p,useDeferredValue:function(t){var e=Yn();return py(e,kt.memoizedState,t)},useTransition:function(){var t=tf(Da)[0],e=Yn().memoizedState;return[t,e]},useMutableSource:ey,useSyncExternalStore:ty,useId:my,unstable_isNewReconciler:!1},R1={readContext:qn,useCallback:dy,useContext:qn,useEffect:jp,useImperativeHandle:fy,useInsertionEffect:ly,useLayoutEffect:cy,useMemo:hy,useReducer:nf,useRef:ay,useState:function(){return nf(Da)},useDebugValue:$p,useDeferredValue:function(t){var e=Yn();return kt===null?e.memoizedState=t:py(e,kt.memoizedState,t)},useTransition:function(){var t=nf(Da)[0],e=Yn().memoizedState;return[t,e]},useMutableSource:ey,useSyncExternalStore:ty,useId:my,unstable_isNewReconciler:!1};function ni(t,e){if(t&&t.defaultProps){e=xt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Ud(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:xt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var mu={isMounted:function(t){return(t=t._reactInternals)?Ss(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=pn(),r=Lr(t),s=qi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Pr(t,s,r),e!==null&&(ci(e,t,r,i),Ql(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=pn(),r=Lr(t),s=qi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Pr(t,s,r),e!==null&&(ci(e,t,r,i),Ql(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=pn(),i=Lr(t),r=qi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Pr(t,r,i),e!==null&&(ci(e,t,i,n),Ql(e,t,i))}};function Zg(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ta(n,i)||!Ta(r,s):!0}function xy(t,e,n){var i=!1,r=Ur,s=e.contextType;return typeof s=="object"&&s!==null?s=qn(s):(r=En(e)?ds:cn.current,i=e.contextTypes,s=(i=i!=null)?ho(t,r):Ur),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=mu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Qg(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&mu.enqueueReplaceState(e,e.state,null)}function Fd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Bp(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=qn(s):(s=En(e)?ds:cn.current,r.context=ho(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ud(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&mu.enqueueReplaceState(r,r.state,null),Uc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function vo(t,e){try{var n="",i=e;do n+=nT(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function rf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Od(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var b1=typeof WeakMap=="function"?WeakMap:Map;function yy(t,e,n){n=qi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Vc||(Vc=!0,$d=i),Od(t,e)},n}function Sy(t,e,n){n=qi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Od(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Od(t,e),typeof i!="function"&&(Dr===null?Dr=new Set([this]):Dr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Jg(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new b1;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=G1.bind(null,t,e,n),e.then(t,t))}function e0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function t0(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=qi(-1,1),e.tag=2,Pr(n,e,1))),n.lanes|=1),t)}var P1=rr.ReactCurrentOwner,Sn=!1;function fn(t,e,n,i){e.child=t===null?Kx(e,null,n,i):mo(e,t.child,n,i)}function n0(t,e,n,i,r){n=n.render;var s=e.ref;return oo(e,r),i=Wp(t,e,n,i,s,r),n=Xp(),t!==null&&!Sn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,tr(t,e,r)):(mt&&n&&Lp(e),e.flags|=1,fn(t,e,i,r),e.child)}function i0(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!tm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,My(t,e,s,i,r)):(t=rc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ta,n(o,i)&&t.ref===e.ref)return tr(t,e,r)}return e.flags|=1,t=Nr(s,i),t.ref=e.ref,t.return=e,e.child=t}function My(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ta(s,i)&&t.ref===e.ref)if(Sn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Sn=!0);else return e.lanes=t.lanes,tr(t,e,r)}return kd(t,e,n,i,r)}function Ey(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},dt(Qs,bn),bn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,dt(Qs,bn),bn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,dt(Qs,bn),bn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,dt(Qs,bn),bn|=i;return fn(t,e,r,n),e.child}function Ty(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function kd(t,e,n,i,r){var s=En(n)?ds:cn.current;return s=ho(e,s),oo(e,r),n=Wp(t,e,n,i,s,r),i=Xp(),t!==null&&!Sn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,tr(t,e,r)):(mt&&i&&Lp(e),e.flags|=1,fn(t,e,n,r),e.child)}function r0(t,e,n,i,r){if(En(n)){var s=!0;Pc(e)}else s=!1;if(oo(e,r),e.stateNode===null)tc(t,e),xy(e,n,i),Fd(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=qn(c):(c=En(n)?ds:cn.current,c=ho(e,c));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Qg(e,o,i,c),_r=!1;var u=e.memoizedState;o.state=u,Uc(e,i,o,r),l=e.memoizedState,a!==i||u!==l||Mn.current||_r?(typeof f=="function"&&(Ud(e,n,f,i),l=e.memoizedState),(a=_r||Zg(e,n,a,i,u,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Qx(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:ni(e.type,a),o.props=c,d=e.pendingProps,u=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=qn(l):(l=En(n)?ds:cn.current,l=ho(e,l));var p=n.getDerivedStateFromProps;(f=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||u!==l)&&Qg(e,o,i,l),_r=!1,u=e.memoizedState,o.state=u,Uc(e,i,o,r);var m=e.memoizedState;a!==d||u!==m||Mn.current||_r?(typeof p=="function"&&(Ud(e,n,p,i),m=e.memoizedState),(c=_r||Zg(e,n,c,i,u,m,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,m,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=m),o.props=i,o.state=m,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),i=!1)}return Bd(t,e,n,i,s,r)}function Bd(t,e,n,i,r,s){Ty(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Gg(e,n,!1),tr(t,e,s);i=e.stateNode,P1.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=mo(e,t.child,null,s),e.child=mo(e,null,a,s)):fn(t,e,a,s),e.memoizedState=i.state,r&&Gg(e,n,!0),e.child}function wy(t){var e=t.stateNode;e.pendingContext?Hg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Hg(t,e.context,!1),Vp(t,e.containerInfo)}function s0(t,e,n,i,r){return po(),Ip(r),e.flags|=256,fn(t,e,n,i),e.child}var Vd={dehydrated:null,treeContext:null,retryLane:0};function zd(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ay(t,e,n){var i=e.pendingProps,r=vt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),dt(vt,r&1),t===null)return Nd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=_u(o,i,0,null),t=cs(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=zd(n),e.memoizedState=Vd,t):qp(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return D1(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Nr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Nr(a,s):(s=cs(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?zd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Vd,i}return s=t.child,t=s.sibling,i=Nr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function qp(t,e){return e=_u({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function pl(t,e,n,i){return i!==null&&Ip(i),mo(e,t.child,null,n),t=qp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function D1(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=rf(Error(re(422))),pl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=_u({mode:"visible",children:i.children},r,0,null),s=cs(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&mo(e,t.child,null,o),e.child.memoizedState=zd(o),e.memoizedState=Vd,s);if(!(e.mode&1))return pl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(re(419)),i=rf(s,i,void 0),pl(t,e,o,i)}if(a=(o&t.childLanes)!==0,Sn||a){if(i=jt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,er(t,r),ci(i,t,r,-1))}return em(),i=rf(Error(re(421))),pl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=W1.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Dn=br(r.nextSibling),Ln=e,mt=!0,ri=null,t!==null&&(zn[Hn++]=Xi,zn[Hn++]=ji,zn[Hn++]=hs,Xi=t.id,ji=t.overflow,hs=e),e=qp(e,i.children),e.flags|=4096,e)}function o0(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Id(t.return,e,n)}function sf(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Cy(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(fn(t,e,i.children,n),i=vt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&o0(t,n,e);else if(t.tag===19)o0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(dt(vt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Fc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),sf(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Fc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}sf(e,!0,n,null,s);break;case"together":sf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function tc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function tr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ms|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(re(153));if(e.child!==null){for(t=e.child,n=Nr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Nr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function L1(t,e,n){switch(e.tag){case 3:wy(e),po();break;case 5:Jx(e);break;case 1:En(e.type)&&Pc(e);break;case 4:Vp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;dt(Nc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(dt(vt,vt.current&1),e.flags|=128,null):n&e.child.childLanes?Ay(t,e,n):(dt(vt,vt.current&1),t=tr(t,e,n),t!==null?t.sibling:null);dt(vt,vt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Cy(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),dt(vt,vt.current),i)break;return null;case 22:case 23:return e.lanes=0,Ey(t,e,n)}return tr(t,e,n)}var Ry,Hd,by,Py;Ry=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Hd=function(){};by=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,is(Ci.current);var s=null;switch(n){case"input":r=ud(t,r),i=ud(t,i),s=[];break;case"select":r=xt({},r,{value:void 0}),i=xt({},i,{value:void 0}),s=[];break;case"textarea":r=hd(t,r),i=hd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Rc)}md(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(va.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(va.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ht("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Py=function(t,e,n,i){n!==i&&(e.flags|=4)};function Bo(t,e){if(!mt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function rn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function N1(t,e,n){var i=e.pendingProps;switch(Np(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rn(e),null;case 1:return En(e.type)&&bc(),rn(e),null;case 3:return i=e.stateNode,go(),pt(Mn),pt(cn),Hp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(dl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ri!==null&&(Kd(ri),ri=null))),Hd(t,e),rn(e),null;case 5:zp(e);var r=is(ba.current);if(n=e.type,t!==null&&e.stateNode!=null)by(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(re(166));return rn(e),null}if(t=is(Ci.current),dl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Ei]=e,i[Ca]=s,t=(e.mode&1)!==0,n){case"dialog":ht("cancel",i),ht("close",i);break;case"iframe":case"object":case"embed":ht("load",i);break;case"video":case"audio":for(r=0;r<ea.length;r++)ht(ea[r],i);break;case"source":ht("error",i);break;case"img":case"image":case"link":ht("error",i),ht("load",i);break;case"details":ht("toggle",i);break;case"input":mg(i,s),ht("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ht("invalid",i);break;case"textarea":vg(i,s),ht("invalid",i)}md(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&fl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&fl(i.textContent,a,t),r=["children",""+a]):va.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ht("scroll",i)}switch(n){case"input":il(i),gg(i,s,!0);break;case"textarea":il(i),_g(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Rc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=rx(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Ei]=e,t[Ca]=i,Ry(t,e,!1,!1),e.stateNode=t;e:{switch(o=gd(n,i),n){case"dialog":ht("cancel",t),ht("close",t),r=i;break;case"iframe":case"object":case"embed":ht("load",t),r=i;break;case"video":case"audio":for(r=0;r<ea.length;r++)ht(ea[r],t);r=i;break;case"source":ht("error",t),r=i;break;case"img":case"image":case"link":ht("error",t),ht("load",t),r=i;break;case"details":ht("toggle",t),r=i;break;case"input":mg(t,i),r=ud(t,i),ht("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=xt({},i,{value:void 0}),ht("invalid",t);break;case"textarea":vg(t,i),r=hd(t,i),ht("invalid",t);break;default:r=i}md(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?ax(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&sx(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&_a(t,l):typeof l=="number"&&_a(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(va.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ht("scroll",t):l!=null&&_p(t,s,l,o))}switch(n){case"input":il(t),gg(t,i,!1);break;case"textarea":il(t),_g(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Ir(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?no(t,!!i.multiple,s,!1):i.defaultValue!=null&&no(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Rc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return rn(e),null;case 6:if(t&&e.stateNode!=null)Py(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(re(166));if(n=is(ba.current),is(Ci.current),dl(e)){if(i=e.stateNode,n=e.memoizedProps,i[Ei]=e,(s=i.nodeValue!==n)&&(t=Ln,t!==null))switch(t.tag){case 3:fl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&fl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Ei]=e,e.stateNode=i}return rn(e),null;case 13:if(pt(vt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(mt&&Dn!==null&&e.mode&1&&!(e.flags&128))qx(),po(),e.flags|=98560,s=!1;else if(s=dl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(re(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(re(317));s[Ei]=e}else po(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;rn(e),s=!1}else ri!==null&&(Kd(ri),ri=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||vt.current&1?Bt===0&&(Bt=3):em())),e.updateQueue!==null&&(e.flags|=4),rn(e),null);case 4:return go(),Hd(t,e),t===null&&wa(e.stateNode.containerInfo),rn(e),null;case 10:return Op(e.type._context),rn(e),null;case 17:return En(e.type)&&bc(),rn(e),null;case 19:if(pt(vt),s=e.memoizedState,s===null)return rn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Bo(s,!1);else{if(Bt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Fc(t),o!==null){for(e.flags|=128,Bo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return dt(vt,vt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Rt()>_o&&(e.flags|=128,i=!0,Bo(s,!1),e.lanes=4194304)}else{if(!i)if(t=Fc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Bo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!mt)return rn(e),null}else 2*Rt()-s.renderingStartTime>_o&&n!==1073741824&&(e.flags|=128,i=!0,Bo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Rt(),e.sibling=null,n=vt.current,dt(vt,i?n&1|2:n&1),e):(rn(e),null);case 22:case 23:return Jp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?bn&1073741824&&(rn(e),e.subtreeFlags&6&&(e.flags|=8192)):rn(e),null;case 24:return null;case 25:return null}throw Error(re(156,e.tag))}function I1(t,e){switch(Np(e),e.tag){case 1:return En(e.type)&&bc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return go(),pt(Mn),pt(cn),Hp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return zp(e),null;case 13:if(pt(vt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(re(340));po()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return pt(vt),null;case 4:return go(),null;case 10:return Op(e.type._context),null;case 22:case 23:return Jp(),null;case 24:return null;default:return null}}var ml=!1,an=!1,U1=typeof WeakSet=="function"?WeakSet:Set,Se=null;function Zs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Tt(t,e,i)}else n.current=null}function Gd(t,e,n){try{n()}catch(i){Tt(t,e,i)}}var a0=!1;function F1(t,e){if(Ad=wc,t=Ux(),Dp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,f=0,d=t,u=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)u=d,d=p;for(;;){if(d===t)break t;if(u===n&&++c===r&&(a=o),u===s&&++f===i&&(l=o),(p=d.nextSibling)!==null)break;d=u,u=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Cd={focusedElem:t,selectionRange:n},wc=!1,Se=e;Se!==null;)if(e=Se,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Se=t;else for(;Se!==null;){e=Se;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var M=m.memoizedProps,g=m.memoizedState,h=e.stateNode,v=h.getSnapshotBeforeUpdate(e.elementType===e.type?M:ni(e.type,M),g);h.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(re(163))}}catch(x){Tt(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,Se=t;break}Se=e.return}return m=a0,a0=!1,m}function ua(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Gd(e,n,s)}r=r.next}while(r!==i)}}function gu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Wd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Dy(t){var e=t.alternate;e!==null&&(t.alternate=null,Dy(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ei],delete e[Ca],delete e[Pd],delete e[_1],delete e[x1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ly(t){return t.tag===5||t.tag===3||t.tag===4}function l0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ly(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Xd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Rc));else if(i!==4&&(t=t.child,t!==null))for(Xd(t,e,n),t=t.sibling;t!==null;)Xd(t,e,n),t=t.sibling}function jd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(jd(t,e,n),t=t.sibling;t!==null;)jd(t,e,n),t=t.sibling}var qt=null,ii=!1;function cr(t,e,n){for(n=n.child;n!==null;)Ny(t,e,n),n=n.sibling}function Ny(t,e,n){if(Ai&&typeof Ai.onCommitFiberUnmount=="function")try{Ai.onCommitFiberUnmount(lu,n)}catch{}switch(n.tag){case 5:an||Zs(n,e);case 6:var i=qt,r=ii;qt=null,cr(t,e,n),qt=i,ii=r,qt!==null&&(ii?(t=qt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):qt.removeChild(n.stateNode));break;case 18:qt!==null&&(ii?(t=qt,n=n.stateNode,t.nodeType===8?Zu(t.parentNode,n):t.nodeType===1&&Zu(t,n),Ma(t)):Zu(qt,n.stateNode));break;case 4:i=qt,r=ii,qt=n.stateNode.containerInfo,ii=!0,cr(t,e,n),qt=i,ii=r;break;case 0:case 11:case 14:case 15:if(!an&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Gd(n,e,o),r=r.next}while(r!==i)}cr(t,e,n);break;case 1:if(!an&&(Zs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Tt(n,e,a)}cr(t,e,n);break;case 21:cr(t,e,n);break;case 22:n.mode&1?(an=(i=an)||n.memoizedState!==null,cr(t,e,n),an=i):cr(t,e,n);break;default:cr(t,e,n)}}function c0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new U1),e.forEach(function(i){var r=X1.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Kn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:qt=a.stateNode,ii=!1;break e;case 3:qt=a.stateNode.containerInfo,ii=!0;break e;case 4:qt=a.stateNode.containerInfo,ii=!0;break e}a=a.return}if(qt===null)throw Error(re(160));Ny(s,o,r),qt=null,ii=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Tt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Iy(e,t),e=e.sibling}function Iy(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Kn(e,t),gi(t),i&4){try{ua(3,t,t.return),gu(3,t)}catch(M){Tt(t,t.return,M)}try{ua(5,t,t.return)}catch(M){Tt(t,t.return,M)}}break;case 1:Kn(e,t),gi(t),i&512&&n!==null&&Zs(n,n.return);break;case 5:if(Kn(e,t),gi(t),i&512&&n!==null&&Zs(n,n.return),t.flags&32){var r=t.stateNode;try{_a(r,"")}catch(M){Tt(t,t.return,M)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&nx(r,s),gd(a,o);var c=gd(a,s);for(o=0;o<l.length;o+=2){var f=l[o],d=l[o+1];f==="style"?ax(r,d):f==="dangerouslySetInnerHTML"?sx(r,d):f==="children"?_a(r,d):_p(r,f,d,c)}switch(a){case"input":fd(r,s);break;case"textarea":ix(r,s);break;case"select":var u=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?no(r,!!s.multiple,p,!1):u!==!!s.multiple&&(s.defaultValue!=null?no(r,!!s.multiple,s.defaultValue,!0):no(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ca]=s}catch(M){Tt(t,t.return,M)}}break;case 6:if(Kn(e,t),gi(t),i&4){if(t.stateNode===null)throw Error(re(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(M){Tt(t,t.return,M)}}break;case 3:if(Kn(e,t),gi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ma(e.containerInfo)}catch(M){Tt(t,t.return,M)}break;case 4:Kn(e,t),gi(t);break;case 13:Kn(e,t),gi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Zp=Rt())),i&4&&c0(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(an=(c=an)||f,Kn(e,t),an=c):Kn(e,t),gi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(Se=t,f=t.child;f!==null;){for(d=Se=f;Se!==null;){switch(u=Se,p=u.child,u.tag){case 0:case 11:case 14:case 15:ua(4,u,u.return);break;case 1:Zs(u,u.return);var m=u.stateNode;if(typeof m.componentWillUnmount=="function"){i=u,n=u.return;try{e=i,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(M){Tt(i,n,M)}}break;case 5:Zs(u,u.return);break;case 22:if(u.memoizedState!==null){f0(d);continue}}p!==null?(p.return=u,Se=p):f0(d)}f=f.sibling}e:for(f=null,d=t;;){if(d.tag===5){if(f===null){f=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=ox("display",o))}catch(M){Tt(t,t.return,M)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(M){Tt(t,t.return,M)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Kn(e,t),gi(t),i&4&&c0(t);break;case 21:break;default:Kn(e,t),gi(t)}}function gi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Ly(n)){var i=n;break e}n=n.return}throw Error(re(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(_a(r,""),i.flags&=-33);var s=l0(t);jd(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=l0(t);Xd(t,a,o);break;default:throw Error(re(161))}}catch(l){Tt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function O1(t,e,n){Se=t,Uy(t)}function Uy(t,e,n){for(var i=(t.mode&1)!==0;Se!==null;){var r=Se,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||ml;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||an;a=ml;var c=an;if(ml=o,(an=l)&&!c)for(Se=r;Se!==null;)o=Se,l=o.child,o.tag===22&&o.memoizedState!==null?d0(r):l!==null?(l.return=o,Se=l):d0(r);for(;s!==null;)Se=s,Uy(s),s=s.sibling;Se=r,ml=a,an=c}u0(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Se=s):u0(t)}}function u0(t){for(;Se!==null;){var e=Se;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:an||gu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!an)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ni(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&qg(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}qg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&Ma(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(re(163))}an||e.flags&512&&Wd(e)}catch(u){Tt(e,e.return,u)}}if(e===t){Se=null;break}if(n=e.sibling,n!==null){n.return=e.return,Se=n;break}Se=e.return}}function f0(t){for(;Se!==null;){var e=Se;if(e===t){Se=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Se=n;break}Se=e.return}}function d0(t){for(;Se!==null;){var e=Se;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{gu(4,e)}catch(l){Tt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Tt(e,r,l)}}var s=e.return;try{Wd(e)}catch(l){Tt(e,s,l)}break;case 5:var o=e.return;try{Wd(e)}catch(l){Tt(e,o,l)}}}catch(l){Tt(e,e.return,l)}if(e===t){Se=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Se=a;break}Se=e.return}}var k1=Math.ceil,Bc=rr.ReactCurrentDispatcher,Yp=rr.ReactCurrentOwner,jn=rr.ReactCurrentBatchConfig,Qe=0,jt=null,It=null,Jt=0,bn=0,Qs=Vr(0),Bt=0,Na=null,ms=0,vu=0,Kp=0,fa=null,yn=null,Zp=0,_o=1/0,zi=null,Vc=!1,$d=null,Dr=null,gl=!1,Er=null,zc=0,da=0,qd=null,nc=-1,ic=0;function pn(){return Qe&6?Rt():nc!==-1?nc:nc=Rt()}function Lr(t){return t.mode&1?Qe&2&&Jt!==0?Jt&-Jt:S1.transition!==null?(ic===0&&(ic=xx()),ic):(t=it,t!==0||(t=window.event,t=t===void 0?16:Ax(t.type)),t):1}function ci(t,e,n,i){if(50<da)throw da=0,qd=null,Error(re(185));za(t,n,i),(!(Qe&2)||t!==jt)&&(t===jt&&(!(Qe&2)&&(vu|=n),Bt===4&&yr(t,Jt)),Tn(t,i),n===1&&Qe===0&&!(e.mode&1)&&(_o=Rt()+500,hu&&zr()))}function Tn(t,e){var n=t.callbackNode;ST(t,e);var i=Tc(t,t===jt?Jt:0);if(i===0)n!==null&&Sg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Sg(n),e===1)t.tag===0?y1(h0.bind(null,t)):Xx(h0.bind(null,t)),g1(function(){!(Qe&6)&&zr()}),n=null;else{switch(yx(i)){case 1:n=Ep;break;case 4:n=vx;break;case 16:n=Ec;break;case 536870912:n=_x;break;default:n=Ec}n=Gy(n,Fy.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Fy(t,e){if(nc=-1,ic=0,Qe&6)throw Error(re(327));var n=t.callbackNode;if(ao()&&t.callbackNode!==n)return null;var i=Tc(t,t===jt?Jt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Hc(t,i);else{e=i;var r=Qe;Qe|=2;var s=ky();(jt!==t||Jt!==e)&&(zi=null,_o=Rt()+500,ls(t,e));do try{z1();break}catch(a){Oy(t,a)}while(!0);Fp(),Bc.current=s,Qe=r,It!==null?e=0:(jt=null,Jt=0,e=Bt)}if(e!==0){if(e===2&&(r=Sd(t),r!==0&&(i=r,e=Yd(t,r))),e===1)throw n=Na,ls(t,0),yr(t,i),Tn(t,Rt()),n;if(e===6)yr(t,i);else{if(r=t.current.alternate,!(i&30)&&!B1(r)&&(e=Hc(t,i),e===2&&(s=Sd(t),s!==0&&(i=s,e=Yd(t,s))),e===1))throw n=Na,ls(t,0),yr(t,i),Tn(t,Rt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(re(345));case 2:Kr(t,yn,zi);break;case 3:if(yr(t,i),(i&130023424)===i&&(e=Zp+500-Rt(),10<e)){if(Tc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){pn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=bd(Kr.bind(null,t,yn,zi),e);break}Kr(t,yn,zi);break;case 4:if(yr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-li(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Rt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*k1(i/1960))-i,10<i){t.timeoutHandle=bd(Kr.bind(null,t,yn,zi),i);break}Kr(t,yn,zi);break;case 5:Kr(t,yn,zi);break;default:throw Error(re(329))}}}return Tn(t,Rt()),t.callbackNode===n?Fy.bind(null,t):null}function Yd(t,e){var n=fa;return t.current.memoizedState.isDehydrated&&(ls(t,e).flags|=256),t=Hc(t,e),t!==2&&(e=yn,yn=n,e!==null&&Kd(e)),t}function Kd(t){yn===null?yn=t:yn.push.apply(yn,t)}function B1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!fi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function yr(t,e){for(e&=~Kp,e&=~vu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-li(e),i=1<<n;t[n]=-1,e&=~i}}function h0(t){if(Qe&6)throw Error(re(327));ao();var e=Tc(t,0);if(!(e&1))return Tn(t,Rt()),null;var n=Hc(t,e);if(t.tag!==0&&n===2){var i=Sd(t);i!==0&&(e=i,n=Yd(t,i))}if(n===1)throw n=Na,ls(t,0),yr(t,e),Tn(t,Rt()),n;if(n===6)throw Error(re(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Kr(t,yn,zi),Tn(t,Rt()),null}function Qp(t,e){var n=Qe;Qe|=1;try{return t(e)}finally{Qe=n,Qe===0&&(_o=Rt()+500,hu&&zr())}}function gs(t){Er!==null&&Er.tag===0&&!(Qe&6)&&ao();var e=Qe;Qe|=1;var n=jn.transition,i=it;try{if(jn.transition=null,it=1,t)return t()}finally{it=i,jn.transition=n,Qe=e,!(Qe&6)&&zr()}}function Jp(){bn=Qs.current,pt(Qs)}function ls(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,m1(n)),It!==null)for(n=It.return;n!==null;){var i=n;switch(Np(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&bc();break;case 3:go(),pt(Mn),pt(cn),Hp();break;case 5:zp(i);break;case 4:go();break;case 13:pt(vt);break;case 19:pt(vt);break;case 10:Op(i.type._context);break;case 22:case 23:Jp()}n=n.return}if(jt=t,It=t=Nr(t.current,null),Jt=bn=e,Bt=0,Na=null,Kp=vu=ms=0,yn=fa=null,ns!==null){for(e=0;e<ns.length;e++)if(n=ns[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}ns=null}return t}function Oy(t,e){do{var n=It;try{if(Fp(),Jl.current=kc,Oc){for(var i=_t.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Oc=!1}if(ps=0,Xt=kt=_t=null,ca=!1,Pa=0,Yp.current=null,n===null||n.return===null){Bt=1,Na=e,It=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Jt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var u=f.alternate;u?(f.updateQueue=u.updateQueue,f.memoizedState=u.memoizedState,f.lanes=u.lanes):(f.updateQueue=null,f.memoizedState=null)}var p=e0(o);if(p!==null){p.flags&=-257,t0(p,o,a,s,e),p.mode&1&&Jg(s,c,e),e=p,l=c;var m=e.updateQueue;if(m===null){var M=new Set;M.add(l),e.updateQueue=M}else m.add(l);break e}else{if(!(e&1)){Jg(s,c,e),em();break e}l=Error(re(426))}}else if(mt&&a.mode&1){var g=e0(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),t0(g,o,a,s,e),Ip(vo(l,a));break e}}s=l=vo(l,a),Bt!==4&&(Bt=2),fa===null?fa=[s]:fa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=yy(s,l,e);$g(s,h);break e;case 1:a=l;var v=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Dr===null||!Dr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=Sy(s,a,e);$g(s,x);break e}}s=s.return}while(s!==null)}Vy(n)}catch(E){e=E,It===n&&n!==null&&(It=n=n.return);continue}break}while(!0)}function ky(){var t=Bc.current;return Bc.current=kc,t===null?kc:t}function em(){(Bt===0||Bt===3||Bt===2)&&(Bt=4),jt===null||!(ms&268435455)&&!(vu&268435455)||yr(jt,Jt)}function Hc(t,e){var n=Qe;Qe|=2;var i=ky();(jt!==t||Jt!==e)&&(zi=null,ls(t,e));do try{V1();break}catch(r){Oy(t,r)}while(!0);if(Fp(),Qe=n,Bc.current=i,It!==null)throw Error(re(261));return jt=null,Jt=0,Bt}function V1(){for(;It!==null;)By(It)}function z1(){for(;It!==null&&!dT();)By(It)}function By(t){var e=Hy(t.alternate,t,bn);t.memoizedProps=t.pendingProps,e===null?Vy(t):It=e,Yp.current=null}function Vy(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=I1(n,e),n!==null){n.flags&=32767,It=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Bt=6,It=null;return}}else if(n=N1(n,e,bn),n!==null){It=n;return}if(e=e.sibling,e!==null){It=e;return}It=e=t}while(e!==null);Bt===0&&(Bt=5)}function Kr(t,e,n){var i=it,r=jn.transition;try{jn.transition=null,it=1,H1(t,e,n,i)}finally{jn.transition=r,it=i}return null}function H1(t,e,n,i){do ao();while(Er!==null);if(Qe&6)throw Error(re(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(re(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(MT(t,s),t===jt&&(It=jt=null,Jt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||gl||(gl=!0,Gy(Ec,function(){return ao(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=jn.transition,jn.transition=null;var o=it;it=1;var a=Qe;Qe|=4,Yp.current=null,F1(t,n),Iy(n,t),l1(Cd),wc=!!Ad,Cd=Ad=null,t.current=n,O1(n),hT(),Qe=a,it=o,jn.transition=s}else t.current=n;if(gl&&(gl=!1,Er=t,zc=r),s=t.pendingLanes,s===0&&(Dr=null),gT(n.stateNode),Tn(t,Rt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Vc)throw Vc=!1,t=$d,$d=null,t;return zc&1&&t.tag!==0&&ao(),s=t.pendingLanes,s&1?t===qd?da++:(da=0,qd=t):da=0,zr(),null}function ao(){if(Er!==null){var t=yx(zc),e=jn.transition,n=it;try{if(jn.transition=null,it=16>t?16:t,Er===null)var i=!1;else{if(t=Er,Er=null,zc=0,Qe&6)throw Error(re(331));var r=Qe;for(Qe|=4,Se=t.current;Se!==null;){var s=Se,o=s.child;if(Se.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Se=c;Se!==null;){var f=Se;switch(f.tag){case 0:case 11:case 15:ua(8,f,s)}var d=f.child;if(d!==null)d.return=f,Se=d;else for(;Se!==null;){f=Se;var u=f.sibling,p=f.return;if(Dy(f),f===c){Se=null;break}if(u!==null){u.return=p,Se=u;break}Se=p}}}var m=s.alternate;if(m!==null){var M=m.child;if(M!==null){m.child=null;do{var g=M.sibling;M.sibling=null,M=g}while(M!==null)}}Se=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Se=o;else e:for(;Se!==null;){if(s=Se,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ua(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,Se=h;break e}Se=s.return}}var v=t.current;for(Se=v;Se!==null;){o=Se;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,Se=y;else e:for(o=v;Se!==null;){if(a=Se,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:gu(9,a)}}catch(E){Tt(a,a.return,E)}if(a===o){Se=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,Se=x;break e}Se=a.return}}if(Qe=r,zr(),Ai&&typeof Ai.onPostCommitFiberRoot=="function")try{Ai.onPostCommitFiberRoot(lu,t)}catch{}i=!0}return i}finally{it=n,jn.transition=e}}return!1}function p0(t,e,n){e=vo(n,e),e=yy(t,e,1),t=Pr(t,e,1),e=pn(),t!==null&&(za(t,1,e),Tn(t,e))}function Tt(t,e,n){if(t.tag===3)p0(t,t,n);else for(;e!==null;){if(e.tag===3){p0(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Dr===null||!Dr.has(i))){t=vo(n,t),t=Sy(e,t,1),e=Pr(e,t,1),t=pn(),e!==null&&(za(e,1,t),Tn(e,t));break}}e=e.return}}function G1(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=pn(),t.pingedLanes|=t.suspendedLanes&n,jt===t&&(Jt&n)===n&&(Bt===4||Bt===3&&(Jt&130023424)===Jt&&500>Rt()-Zp?ls(t,0):Kp|=n),Tn(t,e)}function zy(t,e){e===0&&(t.mode&1?(e=ol,ol<<=1,!(ol&130023424)&&(ol=4194304)):e=1);var n=pn();t=er(t,e),t!==null&&(za(t,e,n),Tn(t,n))}function W1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),zy(t,n)}function X1(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(re(314))}i!==null&&i.delete(e),zy(t,n)}var Hy;Hy=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Mn.current)Sn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Sn=!1,L1(t,e,n);Sn=!!(t.flags&131072)}else Sn=!1,mt&&e.flags&1048576&&jx(e,Lc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;tc(t,e),t=e.pendingProps;var r=ho(e,cn.current);oo(e,n),r=Wp(null,e,i,t,r,n);var s=Xp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,En(i)?(s=!0,Pc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Bp(e),r.updater=mu,e.stateNode=r,r._reactInternals=e,Fd(e,i,t,n),e=Bd(null,e,i,!0,s,n)):(e.tag=0,mt&&s&&Lp(e),fn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(tc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=$1(i),t=ni(i,t),r){case 0:e=kd(null,e,i,t,n);break e;case 1:e=r0(null,e,i,t,n);break e;case 11:e=n0(null,e,i,t,n);break e;case 14:e=i0(null,e,i,ni(i.type,t),n);break e}throw Error(re(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ni(i,r),kd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ni(i,r),r0(t,e,i,r,n);case 3:e:{if(wy(e),t===null)throw Error(re(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Qx(t,e),Uc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=vo(Error(re(423)),e),e=s0(t,e,i,n,r);break e}else if(i!==r){r=vo(Error(re(424)),e),e=s0(t,e,i,n,r);break e}else for(Dn=br(e.stateNode.containerInfo.firstChild),Ln=e,mt=!0,ri=null,n=Kx(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(po(),i===r){e=tr(t,e,n);break e}fn(t,e,i,n)}e=e.child}return e;case 5:return Jx(e),t===null&&Nd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Rd(i,r)?o=null:s!==null&&Rd(i,s)&&(e.flags|=32),Ty(t,e),fn(t,e,o,n),e.child;case 6:return t===null&&Nd(e),null;case 13:return Ay(t,e,n);case 4:return Vp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=mo(e,null,i,n):fn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ni(i,r),n0(t,e,i,r,n);case 7:return fn(t,e,e.pendingProps,n),e.child;case 8:return fn(t,e,e.pendingProps.children,n),e.child;case 12:return fn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,dt(Nc,i._currentValue),i._currentValue=o,s!==null)if(fi(s.value,o)){if(s.children===r.children&&!Mn.current){e=tr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=qi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Id(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(re(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Id(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}fn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,oo(e,n),r=qn(r),i=i(r),e.flags|=1,fn(t,e,i,n),e.child;case 14:return i=e.type,r=ni(i,e.pendingProps),r=ni(i.type,r),i0(t,e,i,r,n);case 15:return My(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ni(i,r),tc(t,e),e.tag=1,En(i)?(t=!0,Pc(e)):t=!1,oo(e,n),xy(e,i,r),Fd(e,i,r,n),Bd(null,e,i,!0,t,n);case 19:return Cy(t,e,n);case 22:return Ey(t,e,n)}throw Error(re(156,e.tag))};function Gy(t,e){return gx(t,e)}function j1(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(t,e,n,i){return new j1(t,e,n,i)}function tm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function $1(t){if(typeof t=="function")return tm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===yp)return 11;if(t===Sp)return 14}return 2}function Nr(t,e){var n=t.alternate;return n===null?(n=Wn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function rc(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")tm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Hs:return cs(n.children,r,s,e);case xp:o=8,r|=8;break;case od:return t=Wn(12,n,e,r|2),t.elementType=od,t.lanes=s,t;case ad:return t=Wn(13,n,e,r),t.elementType=ad,t.lanes=s,t;case ld:return t=Wn(19,n,e,r),t.elementType=ld,t.lanes=s,t;case J_:return _u(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Z_:o=10;break e;case Q_:o=9;break e;case yp:o=11;break e;case Sp:o=14;break e;case vr:o=16,i=null;break e}throw Error(re(130,t==null?t:typeof t,""))}return e=Wn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function cs(t,e,n,i){return t=Wn(7,t,i,e),t.lanes=n,t}function _u(t,e,n,i){return t=Wn(22,t,i,e),t.elementType=J_,t.lanes=n,t.stateNode={isHidden:!1},t}function of(t,e,n){return t=Wn(6,t,null,e),t.lanes=n,t}function af(t,e,n){return e=Wn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function q1(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vu(0),this.expirationTimes=Vu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function nm(t,e,n,i,r,s,o,a,l){return t=new q1(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Wn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bp(s),t}function Y1(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:zs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Wy(t){if(!t)return Ur;t=t._reactInternals;e:{if(Ss(t)!==t||t.tag!==1)throw Error(re(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(En(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(re(171))}if(t.tag===1){var n=t.type;if(En(n))return Wx(t,n,e)}return e}function Xy(t,e,n,i,r,s,o,a,l){return t=nm(n,i,!0,t,r,s,o,a,l),t.context=Wy(null),n=t.current,i=pn(),r=Lr(n),s=qi(i,r),s.callback=e??null,Pr(n,s,r),t.current.lanes=r,za(t,r,i),Tn(t,i),t}function xu(t,e,n,i){var r=e.current,s=pn(),o=Lr(r);return n=Wy(n),e.context===null?e.context=n:e.pendingContext=n,e=qi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Pr(r,e,o),t!==null&&(ci(t,r,o,s),Ql(t,r,o)),o}function Gc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function m0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function im(t,e){m0(t,e),(t=t.alternate)&&m0(t,e)}function K1(){return null}var jy=typeof reportError=="function"?reportError:function(t){console.error(t)};function rm(t){this._internalRoot=t}yu.prototype.render=rm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(re(409));xu(t,e,null,null)};yu.prototype.unmount=rm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;gs(function(){xu(null,t,null,null)}),e[Ji]=null}};function yu(t){this._internalRoot=t}yu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ex();t={blockedOn:null,target:t,priority:e};for(var n=0;n<xr.length&&e!==0&&e<xr[n].priority;n++);xr.splice(n,0,t),n===0&&wx(t)}};function sm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Su(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function g0(){}function Z1(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Gc(o);s.call(c)}}var o=Xy(e,i,t,0,null,!1,!1,"",g0);return t._reactRootContainer=o,t[Ji]=o.current,wa(t.nodeType===8?t.parentNode:t),gs(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Gc(l);a.call(c)}}var l=nm(t,0,!1,null,null,!1,!1,"",g0);return t._reactRootContainer=l,t[Ji]=l.current,wa(t.nodeType===8?t.parentNode:t),gs(function(){xu(e,l,n,i)}),l}function Mu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Gc(o);a.call(l)}}xu(e,o,t,r)}else o=Z1(n,e,t,r,i);return Gc(o)}Sx=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Jo(e.pendingLanes);n!==0&&(Tp(e,n|1),Tn(e,Rt()),!(Qe&6)&&(_o=Rt()+500,zr()))}break;case 13:gs(function(){var i=er(t,1);if(i!==null){var r=pn();ci(i,t,1,r)}}),im(t,1)}};wp=function(t){if(t.tag===13){var e=er(t,134217728);if(e!==null){var n=pn();ci(e,t,134217728,n)}im(t,134217728)}};Mx=function(t){if(t.tag===13){var e=Lr(t),n=er(t,e);if(n!==null){var i=pn();ci(n,t,e,i)}im(t,e)}};Ex=function(){return it};Tx=function(t,e){var n=it;try{return it=t,e()}finally{it=n}};_d=function(t,e,n){switch(e){case"input":if(fd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=du(i);if(!r)throw Error(re(90));tx(i),fd(i,r)}}}break;case"textarea":ix(t,n);break;case"select":e=n.value,e!=null&&no(t,!!n.multiple,e,!1)}};ux=Qp;fx=gs;var Q1={usingClientEntryPoint:!1,Events:[Ga,js,du,lx,cx,Qp]},Vo={findFiberByHostInstance:ts,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},J1={bundleType:Vo.bundleType,version:Vo.version,rendererPackageName:Vo.rendererPackageName,rendererConfig:Vo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:rr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=px(t),t===null?null:t.stateNode},findFiberByHostInstance:Vo.findFiberByHostInstance||K1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vl.isDisabled&&vl.supportsFiber)try{lu=vl.inject(J1),Ai=vl}catch{}}Fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q1;Fn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!sm(e))throw Error(re(200));return Y1(t,e,null,n)};Fn.createRoot=function(t,e){if(!sm(t))throw Error(re(299));var n=!1,i="",r=jy;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=nm(t,1,!1,null,null,n,!1,i,r),t[Ji]=e.current,wa(t.nodeType===8?t.parentNode:t),new rm(e)};Fn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(re(188)):(t=Object.keys(t).join(","),Error(re(268,t)));return t=px(e),t=t===null?null:t.stateNode,t};Fn.flushSync=function(t){return gs(t)};Fn.hydrate=function(t,e,n){if(!Su(e))throw Error(re(200));return Mu(null,t,e,!0,n)};Fn.hydrateRoot=function(t,e,n){if(!sm(t))throw Error(re(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=jy;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Xy(e,null,t,1,n??null,r,!1,s,o),t[Ji]=e.current,wa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new yu(e)};Fn.render=function(t,e,n){if(!Su(e))throw Error(re(200));return Mu(null,t,e,!1,n)};Fn.unmountComponentAtNode=function(t){if(!Su(t))throw Error(re(40));return t._reactRootContainer?(gs(function(){Mu(null,null,t,!1,function(){t._reactRootContainer=null,t[Ji]=null})}),!0):!1};Fn.unstable_batchedUpdates=Qp;Fn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Su(n))throw Error(re(200));if(t==null||t._reactInternals===void 0)throw Error(re(38));return Mu(t,e,n,!1,i)};Fn.version="18.3.1-next-f1338f8080-20240426";function $y(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($y)}catch(t){console.error(t)}}$y(),$_.exports=Fn;var om=$_.exports,v0=om;rd.createRoot=v0.createRoot,rd.hydrateRoot=v0.hydrateRoot;/**
 * @license lucide-react v1.27.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v1.27.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ew=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.27.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tw=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,i)=>i?i.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v1.27.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _0=t=>{const e=tw(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.27.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var lf={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.27.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nw=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},iw=J.createContext({}),rw=()=>J.useContext(iw),sw=J.forwardRef(({color:t,size:e,strokeWidth:n,absoluteStrokeWidth:i,className:r="",children:s,iconNode:o,...a},l)=>{const{size:c=24,strokeWidth:f=2,absoluteStrokeWidth:d=!1,color:u="currentColor",className:p=""}=rw()??{},m=i??d?Number(n??f)*24/Number(e??c):n??f;return J.createElement("svg",{ref:l,...lf,width:e??c??lf.width,height:e??c??lf.height,stroke:t??u,strokeWidth:m,className:qy("lucide",p,r),...!s&&!nw(a)&&{"aria-hidden":"true"},...a},[...o.map(([M,g])=>J.createElement(M,g)),...Array.isArray(s)?s:[s]])});/**
 * @license lucide-react v1.27.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ht=(t,e)=>{const n=J.forwardRef(({className:i,...r},s)=>J.createElement(sw,{ref:s,iconNode:e,className:qy(`lucide-${ew(_0(t))}`,`lucide-${t}`,i),...r}));return n.displayName=_0(t),n};/**
 * @license lucide-react v1.27.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ow=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],zo=Ht("arrow-left",ow);/**
 * @license lucide-react v1.27.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aw=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],_l=Ht("arrow-right",aw);/**
 * @license lucide-react v1.27.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lw=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],Yy=Ht("arrow-up-right",lw);/**
 * @license lucide-react v1.27.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cw=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],uw=Ht("arrow-up",cw);/**
 * @license lucide-react v1.27.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fw=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],dw=Ht("chevron-left",fw);/**
 * @license lucide-react v1.27.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hw=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],pw=Ht("chevron-right",hw);/**
 * @license lucide-react v1.27.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mw=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],gw=Ht("circle",mw);/**
 * @license lucide-react v1.27.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vw=[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z",key:"1f1r0c"}]],Ky=Ht("diamond",vw);/**
 * @license lucide-react v1.27.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _w=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Zy=Ht("download",_w);/**
 * @license lucide-react v1.27.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xw=[["path",{d:"M10.5 3 8 9l4 13 4-13-2.5-6",key:"b3dvk1"}],["path",{d:"M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z",key:"7w4byz"}],["path",{d:"M2 9h20",key:"16fsjt"}]],yw=Ht("gem",xw);/**
 * @license lucide-react v1.27.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sw=[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",key:"yt0hxn"}]],Mw=Ht("hexagon",Sw);/**
 * @license lucide-react v1.27.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ew=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],Qy=Ht("layout-dashboard",Ew);/**
 * @license lucide-react v1.27.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tw=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],ww=Ht("palette",Tw);/**
 * @license lucide-react v1.27.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aw=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],Cw=Ht("pause",Aw);/**
 * @license lucide-react v1.27.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rw=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],bw=Ht("play",Rw);/**
 * @license lucide-react v1.27.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pw=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],Dw=Ht("smartphone",Pw);/**
 * @license lucide-react v1.27.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lw=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],Nw=Ht("square",Lw);/**
 * @license lucide-react v1.27.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iw=[["path",{d:"M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"14u9p9"}]],Uw=Ht("triangle",Iw);/**
 * @license lucide-react v1.27.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fw=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Jy=Ht("x",Fw),Ow="/portfolio-site/",je=t=>Ow+t.replace(/^\//,""),Lt={name:"常传建",role:"资深设计专家 · UED 负责人",city:"杭州",phone:"181-4345-1169",email:"changjiantian@163.com",stats:[{value:"15",suffix:"年",label:"设计经验"},{value:"6",suffix:"年+",label:"团队管理"},{value:"3",suffix:"项",label:"国家级 / 省级重点项目"},{value:"10",suffix:"人+",label:"设计团队 0→1 搭建"}],experience:[{company:"浙江甲骨文超级码科技有限公司",role:"UED 负责人",period:"2021.07 — 至今",points:["从 0 到 1 组建 10+ 人设计团队，设计产出效率提升 40%","主导「全农码」农业农村部重点项目设计体系，通过部级验收","主导「浙农码」设计迭代，获省级及央媒广泛报道","负责「浙江省茶产业大脑」，2023 国际茶博会正式发布"]},{company:"杭州庭好数字科技有限公司",role:"UED 负责人",period:"2017.03 — 2021.07",points:["搭建 5 人设计团队，统筹 5 端 APP 及主站设计","主导官网重构，改版后 1 个月内助力公司完成新一轮融资","工长 APP 重构后用户好评率从 62% 提升至 91%"]},{company:"中国移动杭州研究院",role:"高级 UI 设计师",period:"2014.02 — 2017.03",points:["负责战略级项目「嗨健康」APP 全周期设计，完成 4 次重大版本迭代","独立完成品牌视觉体系（Logo + CI）及 UI 设计规范"]},{company:"浙江中正智能科技 / 敦印中国",role:"UI 设计师",period:"2011.06 — 2014.02",points:["负责官网、移动端 APP 界面设计与企业 VI 系统","主导电商平台改版及大型活动视觉设计"]}]},kw=[{icon:"Diamond",title:"视觉系统设计",desc:"精通设计系统搭建，从色彩、字体到组件规范，构建一致性品牌视觉语言，确保产品体验的一致性与扩展性。"},{icon:"Gem",title:"用户体验驱动",desc:"善于洞察用户需求与行为模式，通过数据驱动的设计迭代，持续优化产品体验与转化率。"},{icon:"Triangle",title:"跨行业设计经验",desc:"在农业数字化、家装互联网、健康医疗、电商等多个领域积累了丰富的设计实践，能快速适应不同业务场景。"},{icon:"Circle",title:"团队管理与赋能",desc:"6 年以上 UED 团队管理经验，擅长组建、培养设计团队，推动设计流程标准化与团队能力成长。"},{icon:"Square",title:"设计战略思维",desc:"能够将业务目标转化为可落地的设计策略，在产品规划阶段介入，以设计驱动商业价值。"},{icon:"Hexagon",title:"全链路设计能力",desc:"从品牌 VI、UI 界面到可视化大屏、运营物料，覆盖数字产品设计的完整链路，确保端到端的设计品质。"}],Bw=[{key:"all",label:"全部"},{key:"data",label:"数据可视化大屏"},{key:"app",label:"移动 / Web 应用"},{key:"brand",label:"平面与品牌"}],Bn=[{id:"quannongma",name:"全农码",subtitle:"国家级农产品数字身份平台",category:"data",categoryLabel:"数据可视化大屏",role:"设计负责人",period:"2023.09 — 2025.12",desc:"农业农村部重点项目。统筹京杭两地团队远程协作，覆盖可视化大屏、后台系统、H5 全链路设计，年底通过部级验收并获部级领导高度评价。",tags:["数据大屏","G 端","Design System","后台系统"],stats:[{value:"部级",label:"项目验收"},{value:"3",label:"产品端"},{value:"200+",label:"设计产出"}],layout:"stack",sizeLabel:"1920 × 1080",images:Array.from({length:11},(t,e)=>({src:je(`/assets/projects/quannongma/qnm-${String(e+1).padStart(2,"0")}.webp`),w:1920,h:1080}))},{id:"zhenongma",name:"浙农码",subtitle:"浙江省农业数字化改革核心标识系统",category:"data",categoryLabel:"数据可视化大屏",role:"设计负责人",period:"2021.07 — 2023.09",desc:"浙江省农业数字化改革核心平台，主导多轮设计迭代，成为省级数字化改革标志性成果，获省级及央媒广泛报道。",tags:["数据大屏","G 端","数字化改革"],stats:[{value:"省级",label:"平台层级"},{value:"6",label:"迭代轮次"},{value:"20+",label:"媒体报道"}],layout:"stack",sizeLabel:"1920 × 1080",images:Array.from({length:8},(t,e)=>({src:je(`/assets/projects/zhenongma/znm-${String(e+1).padStart(2,"0")}.webp`),w:1920,h:1080}))},{id:"zhecha",name:"浙江省茶产业大脑",subtitle:"全国首个茶产业全产业链数字化平台",category:"data",categoryLabel:"数据可视化大屏",role:"设计负责人",period:"2022.10 — 2023.11",desc:"全国首个茶产业全产业链数字化平台，在 2023 中国国际茶博会正式发布，获农业农村部重点推荐。",tags:["数据大屏","产业大脑","G 端"],stats:[{value:"国际茶博会",label:"发布场合"},{value:"全产业链",label:"覆盖范围"},{value:"10+",label:"数据模块"}],layout:"stack",sizeLabel:"1920 × 1080",images:Array.from({length:12},(t,e)=>({src:je(`/assets/projects/zhecha/zc-${String(e+1).padStart(2,"0")}.webp`),w:1920,h:1080}))},{id:"gpt",name:"超级码 GPT",subtitle:"企业级 AI 智能助手",category:"app",categoryLabel:"Web 应用",role:"设计负责人",period:"2024 — 2025",desc:"公司自研企业级 AI 对话产品，主导从 0 到 1 的产品体验与界面设计，覆盖 Web 端智能问答、知识库等核心场景。",tags:["AI 产品","Web UI","对话体验"],stats:[{value:"5+",label:"AI 场景"},{value:"0→1",label:"产品设计"},{value:"3月",label:"上线周期"}],layout:"stack",sizeLabel:"1920 × 1080",images:Array.from({length:7},(t,e)=>({src:je(`/assets/projects/gpt/gpt-${String(e+1).padStart(2,"0")}.webp`),w:1920,h:1080}))},{id:"tinghao-yezhu",name:"庭好的 · 业主端",subtitle:"家装服务业主端 APP",category:"app",categoryLabel:"移动应用",role:"UED 负责人",period:"2017.03 — 2021.07",desc:"面向装修业主的移动端产品，覆盖工地进度、在线验收、材料选购、沟通协同全流程，让装修过程透明可控。",tags:["移动端","APP","家装服务"],stats:[{value:"91%",label:"用户好评率"},{value:"全流程",label:"装修覆盖"},{value:"V1→V4",label:"版本迭代"}],layout:"masonry",sizeLabel:"1440 宽 · 长图",images:[{src:je("/assets/projects/tinghao-yezhu/yz-01.webp"),w:1440,h:810},{src:je("/assets/projects/tinghao-yezhu/yz-02.webp"),w:1440,h:1561},{src:je("/assets/projects/tinghao-yezhu/yz-03.webp"),w:1440,h:1920},{src:je("/assets/projects/tinghao-yezhu/yz-04.webp"),w:1440,h:1475},{src:je("/assets/projects/tinghao-yezhu/yz-05.webp"),w:1440,h:1377},{src:je("/assets/projects/tinghao-yezhu/yz-06.webp"),w:1440,h:2218},{src:je("/assets/projects/tinghao-yezhu/yz-07.webp"),w:1440,h:1495},{src:je("/assets/projects/tinghao-yezhu/yz-08.webp"),w:1440,h:2585},{src:je("/assets/projects/tinghao-yezhu/yz-09.webp"),w:1440,h:4823}]},{id:"tinghao-gongzhang",name:"庭好的 · 工长端",subtitle:"施工管理工长端 APP",category:"app",categoryLabel:"移动应用",role:"UED 负责人",period:"2017.03 — 2021.07",desc:"面向工长的施工管理工具。V1 → V2 重构聚焦工程场景操作流优化，解决「字体过小、操作繁琐」痛点，用户好评率从 62% 提升至 91%。",tags:["移动端","APP","重构"],stats:[{value:"91%",label:"用户好评率"},{value:"+29%",label:"好评提升"},{value:"2月",label:"重构周期"}],layout:"masonry",sizeLabel:"1440 宽 · 长图",images:[{src:je("/assets/projects/tinghao-gongzhang/gz-01.webp"),w:1440,h:810},{src:je("/assets/projects/tinghao-gongzhang/gz-02.webp"),w:1440,h:1561},{src:je("/assets/projects/tinghao-gongzhang/gz-03.webp"),w:1440,h:1344},{src:je("/assets/projects/tinghao-gongzhang/gz-04.webp"),w:1440,h:926},{src:je("/assets/projects/tinghao-gongzhang/gz-05.webp"),w:1440,h:3558}]},{id:"tinghao",name:"庭好的 · 品牌",subtitle:"家装平台品牌视觉体系",category:"brand",categoryLabel:"平面与品牌",role:"UED 负责人",period:"2017.03 — 2021.07",desc:"建立品牌设计语言体系，主导官网重构，改版后 1 个月内助力公司完成新一轮融资。",tags:["品牌","官网","VI"],stats:[{value:"1月",label:"融资助力"},{value:"5+",label:"品牌触点"},{value:"1次",label:"官网重构"}],layout:"masonry",sizeLabel:"混合尺寸",images:[{src:je("/assets/projects/tinghao/th-01.webp"),w:586,h:384},{src:je("/assets/projects/tinghao/th-02.webp"),w:586,h:384},{src:je("/assets/projects/tinghao/th-03.webp"),w:586,h:460},{src:je("/assets/projects/tinghao/th-04.webp"),w:711,h:1983}]},{id:"pingmian",name:"平面视觉合集",subtitle:"海报 / 画册 / 运营视觉",category:"brand",categoryLabel:"平面与品牌",role:"视觉设计",period:"2011 — 2025",desc:"品牌与平面视觉设计合集，涵盖活动海报、产品画册、运营视觉与线下物料等。",tags:["海报","画册","运营视觉"],stats:[{value:"100+",label:"视觉作品"},{value:"5+",label:"行业覆盖"},{value:"10年",label:"服务周期"}],layout:"masonry",sizeLabel:"混合尺寸",images:[{src:je("/assets/projects/pingmian/pm-01.webp"),w:2880,h:1620},{src:je("/assets/projects/pingmian/pm-02.webp"),w:2880,h:1620},{src:je("/assets/projects/pingmian/pm-03.webp"),w:2880,h:1765},{src:je("/assets/projects/pingmian/pm-04.webp"),w:1920,h:1080},{src:je("/assets/projects/pingmian/pm-05.webp"),w:1920,h:1080},{src:je("/assets/projects/pingmian/pm-06.webp"),w:1920,h:1080},{src:je("/assets/projects/pingmian/pm-07.webp"),w:2538,h:1428},{src:je("/assets/projects/pingmian/pm-08.webp"),w:2538,h:1428},{src:je("/assets/projects/pingmian/pm-09.webp"),w:1250,h:1874},{src:je("/assets/projects/pingmian/pm-10.webp"),w:1250,h:1874},{src:je("/assets/projects/pingmian/pm-11.webp"),w:1250,h:1874},{src:je("/assets/projects/pingmian/pm-12.webp"),w:1250,h:1874},{src:je("/assets/projects/pingmian/pm-13.webp"),w:2538,h:1428}]}],x0=[{href:"#home",label:"首页"},{href:"#about",label:"关于"},{href:"#projects",label:"项目"},{href:"#strengths",label:"优势"},{href:"#contact",label:"联系"}];function Vw(){const[t,e]=J.useState(!1),[n,i]=J.useState(!1);J.useEffect(()=>{const o=()=>e(window.scrollY>40);return o(),window.addEventListener("scroll",o,{passive:!0}),()=>window.removeEventListener("scroll",o)},[]),J.useEffect(()=>(document.body.style.overflow=n?"hidden":"",()=>{document.body.style.overflow=""}),[n]);const r=()=>i(!1),s=o=>{document.querySelector(".pd-overlay")&&window.dispatchEvent(new CustomEvent("portfolio:close-detail")),r()};return P.jsxs("header",{className:`nav ${t?"scrolled":""} ${n?"nav-open":""}`,children:[P.jsxs("div",{className:"nav-inner",children:[P.jsxs("a",{className:"nav-logo",href:"#home",onClick:s,children:[P.jsx("strong",{children:"CJ"}),P.jsx("em",{className:"accent-dot",children:"."}),P.jsx("span",{children:"PORTFOLIO 2026"})]}),P.jsxs("nav",{className:"nav-links",children:[x0.slice(0,4).map(o=>P.jsx("a",{href:o.href,onClick:s,children:o.label},o.href)),P.jsx("a",{className:"nav-cta",href:"#contact",onClick:s,children:"联系我"}),P.jsxs("a",{className:"nav-download",href:"/portfolio-site/resume.pdf",download:!0,onClick:s,children:[P.jsx(Zy,{size:15,strokeWidth:2}),"简历"]})]}),P.jsxs("button",{className:"nav-toggle","aria-label":"菜单","aria-expanded":n,onClick:()=>i(o=>!o),children:[P.jsx("span",{}),P.jsx("span",{}),P.jsx("span",{})]})]}),P.jsxs("div",{className:"nav-mobile",onClick:r,children:[x0.map(o=>P.jsx("a",{href:o.href,onClick:s,children:o.label},o.href)),P.jsx("a",{href:"/portfolio-site/resume.pdf",download:!0,onClick:s,children:"下载简历"})]})]})}const am=J.createContext({});function lm(t){const e=J.useRef(null);return e.current===null&&(e.current=t()),e.current}const zw=typeof window<"u",cm=zw?J.useLayoutEffect:J.useEffect,Eu=J.createContext(null);function um(t,e){t.indexOf(e)===-1&&t.push(e)}function Wc(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}const Li=(t,e,n)=>n>e?e:n<t?t:n;let fm=()=>{};const Fr={},eS=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),tS=t=>typeof t=="object"&&t!==null,nS=t=>/^0[^.\s]+$/u.test(t);function iS(t){let e;return()=>(e===void 0&&(e=t()),e)}const $n=t=>t,Xa=(...t)=>t.reduce((e,n)=>i=>n(e(i))),Ia=(t,e,n)=>{const i=e-t;return i?(n-t)/i:1};class dm{constructor(){this.subscriptions=[]}add(e){return um(this.subscriptions,e),()=>Wc(this.subscriptions,e)}notify(e,n,i){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,n,i);else for(let s=0;s<r;s++){const o=this.subscriptions[s];o&&o(e,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Nn=t=>t*1e3,Xn=t=>t/1e3,rS=(t,e)=>e?t*(1e3/e):0,sS=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,Hw=1e-7,Gw=12;function Ww(t,e,n,i,r){let s,o,a=0;do o=e+(n-e)/2,s=sS(o,i,r)-t,s>0?n=o:e=o;while(Math.abs(s)>Hw&&++a<Gw);return o}function ja(t,e,n,i){if(t===e&&n===i)return $n;const r=s=>Ww(s,0,1,t,n);return s=>s===0||s===1?s:sS(r(s),e,i)}const oS=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,aS=t=>e=>1-t(1-e),lS=ja(.33,1.53,.69,.99),hm=aS(lS),cS=oS(hm),uS=t=>t>=1?1:(t*=2)<1?.5*hm(t):.5*(2-Math.pow(2,-10*(t-1))),pm=t=>1-Math.sin(Math.acos(t)),fS=aS(pm),dS=oS(pm),Xw=ja(.42,0,1,1),jw=ja(0,0,.58,1),hS=ja(.42,0,.58,1),$w=t=>Array.isArray(t)&&typeof t[0]!="number",pS=t=>Array.isArray(t)&&typeof t[0]=="number",qw={linear:$n,easeIn:Xw,easeInOut:hS,easeOut:jw,circIn:pm,circInOut:dS,circOut:fS,backIn:hm,backInOut:cS,backOut:lS,anticipate:uS},Yw=t=>typeof t=="string",y0=t=>{if(pS(t)){fm(t.length===4);const[e,n,i,r]=t;return ja(e,n,i,r)}else if(Yw(t))return qw[t];return t},xl=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function Kw(t){let e=new Set,n=new Set,i=!1,r=!1;const s=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function a(c){s.has(c)&&(l.schedule(c),t()),c(o)}const l={schedule:(c,f=!1,d=!1)=>{const p=d&&i?e:n;return f&&s.add(c),p.add(c),c},cancel:c=>{n.delete(c),s.delete(c)},process:c=>{if(o=c,i){r=!0;return}i=!0;const f=e;e=n,n=f,e.forEach(a),e.clear(),i=!1,r&&(r=!1,l.process(c))}};return l}const Zw=40;function mS(t,e){let n=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,o=xl.reduce((y,x)=>(y[x]=Kw(s),y),{}),{setup:a,read:l,resolveKeyframes:c,preUpdate:f,update:d,preRender:u,render:p,postRender:m}=o,M=()=>{const y=Fr.useManualTiming,x=y?r.timestamp:performance.now();n=!1,y||(r.delta=i?1e3/60:Math.max(Math.min(x-r.timestamp,Zw),1)),r.timestamp=x,r.isProcessing=!0,a.process(r),l.process(r),c.process(r),f.process(r),d.process(r),u.process(r),p.process(r),m.process(r),r.isProcessing=!1,n&&e&&(i=!1,t(M))},g=()=>{n=!0,i=!0,r.isProcessing||t(M)};return{schedule:xl.reduce((y,x)=>{const E=o[x];return y[x]=(w,C=!1,_=!1)=>(n||g(),E.schedule(w,C,_)),y},{}),cancel:y=>{for(let x=0;x<xl.length;x++)o[xl[x]].cancel(y)},state:r,steps:o}}const{schedule:ct,cancel:Or,state:Yt,steps:cf}=mS(typeof requestAnimationFrame<"u"?requestAnimationFrame:$n,!0);let sc;function Qw(){sc=void 0}const dn={now:()=>(sc===void 0&&dn.set(Yt.isProcessing||Fr.useManualTiming?Yt.timestamp:performance.now()),sc),set:t=>{sc=t,queueMicrotask(Qw)}},gS=t=>e=>typeof e=="string"&&e.startsWith(t),vS=gS("--"),Jw=gS("var(--"),mm=t=>Jw(t)?eA.test(t.split("/*")[0].trim()):!1,eA=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function S0(t){return typeof t!="string"?!1:t.split("/*")[0].includes("var(--")}const Ro={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Ua={...Ro,transform:t=>Li(0,1,t)},yl={...Ro,default:1},ha=t=>Math.round(t*1e5)/1e5,gm=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function tA(t){return t==null}const nA=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,vm=(t,e)=>n=>!!(typeof n=="string"&&nA.test(n)&&n.startsWith(t)||e&&!tA(n)&&Object.prototype.hasOwnProperty.call(n,e)),_S=(t,e,n)=>i=>{if(typeof i!="string")return i;const[r,s,o,a]=i.match(gm);return{[t]:parseFloat(r),[e]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},iA=t=>Li(0,255,t),uf={...Ro,transform:t=>Math.round(iA(t))},rs={test:vm("rgb","red"),parse:_S("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+uf.transform(t)+", "+uf.transform(e)+", "+uf.transform(n)+", "+ha(Ua.transform(i))+")"};function rA(t){let e="",n="",i="",r="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),r=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),r=t.substring(4,5),e+=e,n+=n,i+=i,r+=r),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const Zd={test:vm("#"),parse:rA,transform:rs.transform},$a=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),Vi=$a("deg"),Ri=$a("%"),Me=$a("px"),sA=$a("vh"),oA=$a("vw"),M0={...Ri,parse:t=>Ri.parse(t)/100,transform:t=>Ri.transform(t*100)},Js={test:vm("hsl","hue"),parse:_S("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+Ri.transform(ha(e))+", "+Ri.transform(ha(n))+", "+ha(Ua.transform(i))+")"},Nt={test:t=>rs.test(t)||Zd.test(t)||Js.test(t),parse:t=>rs.test(t)?rs.parse(t):Js.test(t)?Js.parse(t):Zd.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?rs.transform(t):Js.transform(t),getAnimatableNone:t=>{const e=Nt.parse(t);return e.alpha=0,Nt.transform(e)}},aA=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function lA(t){var e,n;return isNaN(t)&&typeof t=="string"&&(((e=t.match(gm))==null?void 0:e.length)||0)+(((n=t.match(aA))==null?void 0:n.length)||0)>0}const xS="number",yS="color",cA="var",uA="var(",E0="${}",fA=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function xo(t){const e=t.toString(),n=[],i={color:[],number:[],var:[]},r=[];let s=0;const a=e.replace(fA,l=>(Nt.test(l)?(i.color.push(s),r.push(yS),n.push(Nt.parse(l))):l.startsWith(uA)?(i.var.push(s),r.push(cA),n.push(l)):(i.number.push(s),r.push(xS),n.push(parseFloat(l))),++s,E0)).split(E0);return{values:n,split:a,indexes:i,types:r}}function dA(t){return xo(t).values}function SS({split:t,types:e}){const n=t.length;return i=>{let r="";for(let s=0;s<n;s++)if(r+=t[s],i[s]!==void 0){const o=e[s];o===xS?r+=ha(i[s]):o===yS?r+=Nt.transform(i[s]):r+=i[s]}return r}}function hA(t){return SS(xo(t))}const pA=t=>typeof t=="number"?0:Nt.test(t)?Nt.getAnimatableNone(t):t,mA=(t,e)=>typeof t=="number"?e!=null&&e.trim().endsWith("/")?t:0:pA(t);function gA(t){const e=xo(t);return SS(e)(e.values.map((i,r)=>mA(i,e.split[r])))}const ui={test:lA,parse:dA,createTransformer:hA,getAnimatableNone:gA};function ff(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function vA({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,e/=100,n/=100;let r=0,s=0,o=0;if(!e)r=s=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;r=ff(l,a,t+1/3),s=ff(l,a,t),o=ff(l,a,t-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:i}}function Xc(t,e){return n=>n>0?e:t}const lt=(t,e,n)=>t+(e-t)*n,df=(t,e,n)=>{const i=t*t,r=n*(e*e-i)+i;return r<0?0:Math.sqrt(r)},_A=[Zd,rs,Js],xA=t=>_A.find(e=>e.test(t));function T0(t){const e=xA(t);if(!e)return!1;let n=e.parse(t);return e===Js&&(n=vA(n)),n}const w0=(t,e)=>{const n=T0(t),i=T0(e);if(!n||!i)return Xc(t,e);const r={...n};return s=>(r.red=df(n.red,i.red,s),r.green=df(n.green,i.green,s),r.blue=df(n.blue,i.blue,s),r.alpha=lt(n.alpha,i.alpha,s),rs.transform(r))},Qd=new Set(["none","hidden"]);function yA(t,e){return Qd.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function SA(t,e){return n=>lt(t,e,n)}function _m(t){return typeof t=="number"?SA:typeof t=="string"?mm(t)?Xc:Nt.test(t)?w0:TA:Array.isArray(t)?MS:typeof t=="object"?Nt.test(t)?w0:MA:Xc}function MS(t,e){const n=[...t],i=n.length,r=t.map((s,o)=>_m(s)(s,e[o]));return s=>{for(let o=0;o<i;o++)n[o]=r[o](s);return n}}function MA(t,e){const n={...t,...e},i={};for(const r in n)t[r]!==void 0&&e[r]!==void 0&&(i[r]=_m(t[r])(t[r],e[r]));return r=>{for(const s in i)n[s]=i[s](r);return n}}function EA(t,e){const n=[],i={color:0,var:0,number:0};for(let r=0;r<e.values.length;r++){const s=e.types[r],o=t.indexes[s][i[s]],a=t.values[o]??0;n[r]=a,i[s]++}return n}const TA=(t,e)=>{const n=ui.createTransformer(e),i=xo(t),r=xo(e);return i.indexes.var.length===r.indexes.var.length&&i.indexes.color.length===r.indexes.color.length&&i.indexes.number.length>=r.indexes.number.length?Qd.has(t)&&!r.values.length||Qd.has(e)&&!i.values.length?yA(t,e):Xa(MS(EA(i,r),r.values),n):Xc(t,e)};function ES(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?lt(t,e,n):_m(t)(t,e)}const wA=t=>{const e=({timestamp:n})=>t(n);return{start:(n=!0)=>ct.update(e,n),stop:()=>Or(e),now:()=>Yt.isProcessing?Yt.timestamp:dn.now()}},TS=(t,e,n=10)=>{let i="";const r=Math.max(Math.round(e/n),2);for(let s=0;s<r;s++)i+=Math.round(t(s/(r-1))*1e4)/1e4+", ";return`linear(${i.substring(0,i.length-2)})`},jc=2e4;function xm(t){let e=0;const n=50;let i=t.next(e);for(;!i.done&&e<jc;)e+=n,i=t.next(e);return e>=jc?1/0:e}function AA(t,e=100,n){const i=n({...t,keyframes:[0,e]}),r=Math.min(xm(i),jc);return{type:"keyframes",ease:s=>i.next(r*s).value/e,duration:Xn(r)}}const Et={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Jd(t,e){return t*Math.sqrt(1-e*e)}const CA=12;function RA(t,e,n){let i=n;for(let r=1;r<CA;r++)i=i-t(i)/e(i);return i}const hf=.001;function bA({duration:t=Et.duration,bounce:e=Et.bounce,velocity:n=Et.velocity,mass:i=Et.mass}){let r,s,o=1-e;o=Li(Et.minDamping,Et.maxDamping,o),t=Li(Et.minDuration,Et.maxDuration,Xn(t)),o<1?(r=c=>{const f=c*o,d=f*t,u=f-n,p=Jd(c,o),m=Math.exp(-d);return hf-u/p*m},s=c=>{const d=c*o*t,u=d*n+n,p=Math.pow(o,2)*Math.pow(c,2)*t,m=Math.exp(-d),M=Jd(Math.pow(c,2),o);return(-r(c)+hf>0?-1:1)*((u-p)*m)/M}):(r=c=>{const f=Math.exp(-c*t),d=(c-n)*t+1;return-hf+f*d},s=c=>{const f=Math.exp(-c*t),d=(n-c)*(t*t);return f*d});const a=5/t,l=RA(r,s,a);if(t=Nn(t),isNaN(l))return{stiffness:Et.stiffness,damping:Et.damping,duration:t};{const c=Math.pow(l,2)*i;return{stiffness:c,damping:o*2*Math.sqrt(i*c),duration:t}}}const PA=["duration","bounce"],DA=["stiffness","damping","mass"];function A0(t,e){return e.some(n=>t[n]!==void 0)}function LA(t){let e={velocity:Et.velocity,stiffness:Et.stiffness,damping:Et.damping,mass:Et.mass,isResolvedFromDuration:!1,...t};if(!A0(t,DA)&&A0(t,PA))if(e.velocity=0,t.visualDuration){const n=t.visualDuration,i=2*Math.PI/(n*1.2),r=i*i,s=2*Li(.05,1,1-(t.bounce||0))*Math.sqrt(r);e={...e,mass:Et.mass,stiffness:r,damping:s}}else{const n=bA({...t,velocity:0});e={...e,...n,mass:Et.mass},e.isResolvedFromDuration=!0}return e}function $c(t=Et.visualDuration,e=Et.bounce){const n=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:i,restDelta:r}=n;const s=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],a={done:!1,value:s},{stiffness:l,damping:c,mass:f,duration:d,velocity:u,isResolvedFromDuration:p}=LA({...n,velocity:-Xn(n.velocity||0)}),m=u||0,M=c/(2*Math.sqrt(l*f)),g=o-s,h=Xn(Math.sqrt(l/f)),v=Math.abs(g)<5;i||(i=v?Et.restSpeed.granular:Et.restSpeed.default),r||(r=v?Et.restDelta.granular:Et.restDelta.default);let y,x,E,w,C,_;if(M<1)E=Jd(h,M),w=(m+M*h*g)/E,y=b=>{const D=Math.exp(-M*h*b);return o-D*(w*Math.sin(E*b)+g*Math.cos(E*b))},C=M*h*w+g*E,_=M*h*g-w*E,x=b=>Math.exp(-M*h*b)*(C*Math.sin(E*b)+_*Math.cos(E*b));else if(M===1){y=D=>o-Math.exp(-h*D)*(g+(m+h*g)*D);const b=m+h*g;x=D=>Math.exp(-h*D)*(h*b*D-m)}else{const b=h*Math.sqrt(M*M-1);y=Y=>{const B=Math.exp(-M*h*Y),I=Math.min(b*Y,300);return o-B*((m+M*h*g)*Math.sinh(I)+b*g*Math.cosh(I))/b};const D=(m+M*h*g)/b,U=M*h*D-g*b,$=M*h*g-D*b;x=Y=>{const B=Math.exp(-M*h*Y),I=Math.min(b*Y,300);return B*(U*Math.sinh(I)+$*Math.cosh(I))}}const A={calculatedDuration:p&&d||null,velocity:b=>Nn(x(b)),next:b=>{if(!p&&M<1){const U=Math.exp(-M*h*b),$=Math.sin(E*b),Y=Math.cos(E*b),B=o-U*(w*$+g*Y),I=Nn(U*(C*$+_*Y));return a.done=Math.abs(I)<=i&&Math.abs(o-B)<=r,a.value=a.done?o:B,a}const D=y(b);if(p)a.done=b>=d;else{const U=Nn(x(b));a.done=Math.abs(U)<=i&&Math.abs(o-D)<=r}return a.value=a.done?o:D,a},toString:()=>{const b=Math.min(xm(A),jc),D=TS(U=>A.next(b*U).value,b,30);return b+"ms "+D},toTransition:()=>{}};return A}$c.applyToOptions=t=>{const e=AA(t,100,$c);return t.ease=e.ease,t.duration=Nn(e.duration),t.type="keyframes",t};const NA=5;function wS(t,e,n){const i=Math.max(e-NA,0);return rS(n-t(i),e-i)}function eh({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:c=.5,restSpeed:f}){const d=t[0],u={done:!1,value:d},p=_=>a!==void 0&&_<a||l!==void 0&&_>l,m=_=>a===void 0?l:l===void 0||Math.abs(a-_)<Math.abs(l-_)?a:l;let M=n*e;const g=d+M,h=o===void 0?g:o(g);h!==g&&(M=h-d);const v=_=>-M*Math.exp(-_/i),y=_=>h+v(_),x=_=>{const A=v(_),b=y(_);u.done=Math.abs(A)<=c,u.value=u.done?h:b};let E,w;const C=_=>{p(u.value)&&(E=_,w=$c({keyframes:[u.value,m(u.value)],velocity:wS(y,_,u.value),damping:r,stiffness:s,restDelta:c,restSpeed:f}))};return C(0),{calculatedDuration:null,next:_=>{let A=!1;return!w&&E===void 0&&(A=!0,x(_),C(_)),E!==void 0&&_>=E?w.next(_-E):(!A&&x(_),u)}}}function IA(t,e,n){const i=[],r=n||Fr.mix||ES,s=t.length-1;for(let o=0;o<s;o++){let a=r(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||$n:e;a=Xa(l,a)}i.push(a)}return i}function UA(t,e,{clamp:n=!0,ease:i,mixer:r}={}){const s=t.length;if(fm(s===e.length),s===1)return()=>e[0];if(s===2&&e[0]===e[1])return()=>e[1];const o=t[0]===t[1];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const a=IA(e,i,r),l=a.length,c=f=>{if(o&&f<t[0])return e[0];let d=0;if(l>1)for(;d<t.length-2&&!(f<t[d+1]);d++);const u=Ia(t[d],t[d+1],f);return a[d](u)};return n?f=>c(Li(t[0],t[s-1],f)):c}function FA(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const r=Ia(0,e,i);t.push(lt(n,1,r))}}function OA(t){const e=[0];return FA(e,t.length-1),e}function kA(t,e){return t.map(n=>n*e)}function BA(t,e){return t.map(()=>e||hS).splice(0,t.length-1)}function pa({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const r=$w(i)?i.map(y0):y0(i),s={done:!1,value:e[0]},o=kA(n&&n.length===e.length?n:OA(e),t),a=UA(o,e,{ease:Array.isArray(r)?r:BA(e,r)});return{calculatedDuration:t,next:l=>(s.value=a(l),s.done=l>=t,s)}}const VA=t=>t!==null;function Tu(t,{repeat:e,repeatType:n="loop"},i,r=1){const s=t.filter(VA),a=r<0||e&&n!=="loop"&&e%2===1?0:s.length-1;return!a||i===void 0?s[a]:i}const zA={decay:eh,inertia:eh,tween:pa,keyframes:pa,spring:$c};function AS(t){typeof t.type=="string"&&(t.type=zA[t.type])}class ym{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,n){return this.finished.then(e,n)}}const HA=t=>t/100;class qc extends ym{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var i,r;const{motionValue:n}=this.options;n&&n.updatedAt!==dn.now()&&this.tick(dn.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(r=(i=this.options).onStop)==null||r.call(i))},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;AS(e);const{type:n=pa,repeat:i=0,repeatDelay:r=0,repeatType:s,velocity:o=0}=e;let{keyframes:a}=e;const l=n||pa;l!==pa&&typeof a[0]!="number"&&(this.mixKeyframes=Xa(HA,ES(a[0],a[1])),a=[0,100]);const c=l({...e,keyframes:a});s==="mirror"&&(this.mirroredGenerator=l({...e,keyframes:[...a].reverse(),velocity:-o})),c.calculatedDuration===null&&(c.calculatedDuration=xm(c));const{calculatedDuration:f}=c;this.calculatedDuration=f,this.resolvedDuration=f+r,this.totalDuration=this.resolvedDuration*(i+1)-r,this.generator=c}updateTime(e){const n=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(e,n=!1){const{generator:i,totalDuration:r,mixKeyframes:s,mirroredGenerator:o,resolvedDuration:a,calculatedDuration:l}=this;if(this.startTime===null)return i.next(0);const{delay:c=0,keyframes:f,repeat:d,repeatType:u,repeatDelay:p,type:m,onUpdate:M,finalKeyframe:g}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),n?this.currentTime=e:this.updateTime(e);const h=this.currentTime-c*(this.playbackSpeed>=0?1:-1),v=this.playbackSpeed>=0?h<0:h>r;this.currentTime=Math.max(h,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=r);let y=this.currentTime,x=i;if(d){const _=Math.min(this.currentTime,r)/a;let A=Math.floor(_),b=_%1;!b&&_>=1&&(b=1),b===1&&A--,A=Math.min(A,d+1),!!(A%2)&&(u==="reverse"?(b=1-b,p&&(b-=p/a)):u==="mirror"&&(x=o)),y=Li(0,1,b)*a}let E;v?(this.delayState.value=f[0],E=this.delayState):E=x.next(y),s&&!v&&(E.value=s(E.value));let{done:w}=E;!v&&l!==null&&(w=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);const C=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&w);return C&&m!==eh&&(E.value=Tu(f,this.options,g,this.speed)),M&&M(E.value),C&&this.finish(),E}then(e,n){return this.finished.then(e,n)}get duration(){return Xn(this.calculatedDuration)}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+Xn(e)}get time(){return Xn(this.currentTime)}set time(e){e=Nn(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=e,this.tick(e))}getGeneratorVelocity(){const e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);const n=this.generator.next(e).value;return wS(i=>this.generator.next(i).value,e,n)}get speed(){return this.playbackSpeed}set speed(e){const n=this.playbackSpeed!==e;n&&this.driver&&this.updateTime(dn.now()),this.playbackSpeed=e,n&&this.driver&&(this.time=Xn(this.currentTime))}play(){var r,s;if(this.isStopped)return;const{driver:e=wA,startTime:n}=this.options;this.driver||(this.driver=e(o=>this.tick(o))),(s=(r=this.options).onPlay)==null||s.call(r);const i=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=i):this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime||(this.startTime=n??i),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(dn.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var e,n;this.notifyFinished(),this.teardown(),this.state="finished",(n=(e=this.options).onComplete)==null||n.call(e)}cancel(){var e,n;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(n=(e=this.options).onCancel)==null||n.call(e)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){var n;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(n=this.driver)==null||n.stop(),e.observe(this)}}function GA(t){for(let e=1;e<t.length;e++)t[e]??(t[e]=t[e-1])}const ss=t=>t*180/Math.PI,th=t=>{const e=ss(Math.atan2(t[1],t[0]));return nh(e)},WA={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:th,rotateZ:th,skewX:t=>ss(Math.atan(t[1])),skewY:t=>ss(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},nh=t=>(t=t%360,t<0&&(t+=360),t),C0=th,R0=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),b0=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),XA={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:R0,scaleY:b0,scale:t=>(R0(t)+b0(t))/2,rotateX:t=>nh(ss(Math.atan2(t[6],t[5]))),rotateY:t=>nh(ss(Math.atan2(-t[2],t[0]))),rotateZ:C0,rotate:C0,skewX:t=>ss(Math.atan(t[4])),skewY:t=>ss(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function ih(t){return t.includes("scale")?1:0}function rh(t,e){if(!t||t==="none")return ih(e);const n=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let i,r;if(n)i=XA,r=n;else{const a=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);i=WA,r=a}if(!r)return ih(e);const s=i[e],o=r[1].split(",").map($A);return typeof s=="function"?s(o):o[s]}const jA=(t,e)=>{const{transform:n="none"}=getComputedStyle(t);return rh(n,e)};function $A(t){return parseFloat(t.trim())}const bo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Po=new Set([...bo,"pathRotation"]),P0=t=>t===Ro||t===Me,qA=new Set(["x","y","z"]),YA=bo.filter(t=>!qA.has(t));function KA(t){const e=[];return YA.forEach(n=>{const i=t.getValue(n);i!==void 0&&(e.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),e}const Tr={width:({x:t},{paddingLeft:e="0",paddingRight:n="0",boxSizing:i})=>{const r=t.max-t.min;return i==="border-box"?r:r-parseFloat(e)-parseFloat(n)},height:({y:t},{paddingTop:e="0",paddingBottom:n="0",boxSizing:i})=>{const r=t.max-t.min;return i==="border-box"?r:r-parseFloat(e)-parseFloat(n)},top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:(t,{transform:e})=>rh(e,"x"),y:(t,{transform:e})=>rh(e,"y")};Tr.translateX=Tr.x;Tr.translateY=Tr.y;const us=new Set;let sh=!1,oh=!1,ah=!1;function CS(){if(oh){const t=Array.from(us).filter(i=>i.needsMeasurement),e=new Set(t.map(i=>i.element)),n=new Map;e.forEach(i=>{const r=KA(i);r.length&&(n.set(i,r),i.render())}),t.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render();const r=n.get(i);r&&r.forEach(([s,o])=>{var a;(a=i.getValue(s))==null||a.set(o)})}),t.forEach(i=>i.measureEndState()),t.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}oh=!1,sh=!1,us.forEach(t=>t.complete(ah)),us.clear()}function RS(){us.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(oh=!0)})}function ZA(){ah=!0,RS(),CS(),ah=!1}class Sm{constructor(e,n,i,r,s,o=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=i,this.motionValue=r,this.element=s,this.isAsync=o}scheduleResolve(){this.state="scheduled",this.isAsync?(us.add(this),sh||(sh=!0,ct.read(RS),ct.resolveKeyframes(CS))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:i,motionValue:r}=this;if(e[0]===null){const s=r==null?void 0:r.get(),o=e[e.length-1];if(s!==void 0)e[0]=s;else if(i&&n){const a=i.readValue(n,o);a!=null&&(e[0]=a)}e[0]===void 0&&(e[0]=o),r&&s===void 0&&r.set(e[0])}GA(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),us.delete(this)}cancel(){this.state==="scheduled"&&(us.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const QA=t=>t.startsWith("--");function bS(t,e,n){QA(e)?t.style.setProperty(e,n):t.style[e]=n}const JA={};function PS(t,e){const n=iS(t);return()=>JA[e]??n()}const eC=PS(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),DS=PS(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),ta=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,D0={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ta([0,.65,.55,1]),circOut:ta([.55,0,1,.45]),backIn:ta([.31,.01,.66,-.59]),backOut:ta([.33,1.53,.69,.99])};function LS(t,e){if(t)return typeof t=="function"?DS()?TS(t,e):"ease-out":pS(t)?ta(t):Array.isArray(t)?t.map(n=>LS(n,e)||D0.easeOut):D0[t]}function tC(t,e,n,{delay:i=0,duration:r=300,repeat:s=0,repeatType:o="loop",ease:a="easeOut",times:l}={},c=void 0){const f={[e]:n};l&&(f.offset=l);const d=LS(a,r);Array.isArray(d)&&(f.easing=d);const u={delay:i,duration:r,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"};return c&&(u.pseudoElement=c),t.animate(f,u)}function NS(t){return typeof t=="function"&&"applyToOptions"in t}function nC({type:t,...e}){return NS(t)&&DS()?t.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class IS extends ym{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;const{element:n,name:i,keyframes:r,pseudoElement:s,allowFlatten:o=!1,finalKeyframe:a,onComplete:l}=e;this.isPseudoElement=!!s,this.allowFlatten=o,this.options=e,fm(typeof e.type!="string");const c=nC(e);this.animation=tC(n,i,r,c,s),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!s){const f=Tu(r,this.options,a,this.speed);this.updateMotionValue&&this.updateMotionValue(f),bS(n,i,f),this.animation.cancel()}l==null||l(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var e,n;(n=(e=this.animation).finish)==null||n.call(e)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var n,i,r;const e=(n=this.options)==null?void 0:n.element;!this.isPseudoElement&&(e!=null&&e.isConnected)&&((r=(i=this.animation).commitStyles)==null||r.call(i))}get duration(){var n,i;const e=((i=(n=this.animation.effect)==null?void 0:n.getComputedTiming)==null?void 0:i.call(n).duration)||0;return Xn(Number(e))}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+Xn(e)}get time(){return Xn(Number(this.animation.currentTime)||0)}set time(e){const n=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Nn(e),n&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:n,rangeEnd:i,observe:r}){var s;return this.allowFlatten&&((s=this.animation.effect)==null||s.updateTiming({easing:"linear"})),this.animation.onfinish=null,e&&eC()?(this.animation.timeline=e,n&&(this.animation.rangeStart=n),i&&(this.animation.rangeEnd=i),$n):r(this)}}const US={anticipate:uS,backInOut:cS,circInOut:dS};function iC(t){return t in US}function rC(t){typeof t.ease=="string"&&iC(t.ease)&&(t.ease=US[t.ease])}const pf=10;class sC extends IS{constructor(e){rC(e),AS(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:n,onUpdate:i,onComplete:r,element:s,...o}=this.options;if(!n)return;if(e!==void 0){n.set(e);return}const a=new qc({...o,autoplay:!1}),l=Math.max(pf,dn.now()-this.startTime),c=Li(0,pf,l-pf),f=a.sample(l).value,{name:d}=this.options;s&&d&&bS(s,d,f),n.setWithVelocity(a.sample(Math.max(0,l-c)).value,f,c),a.stop()}}const L0=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(ui.test(t)||t==="0")&&!t.startsWith("url("));function oC(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function aC(t,e,n,i){const r=t[0];if(r===null)return!1;if(e==="display"||e==="visibility")return!0;const s=t[t.length-1],o=L0(r,e),a=L0(s,e);return!o||!a?!1:oC(t)||(n==="spring"||NS(n))&&i}function lh(t){t.duration=0,t.type="keyframes"}const FS=new Set(["opacity","clipPath","filter","transform"]),lC=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function cC(t){for(let e=0;e<t.length;e++)if(typeof t[e]=="string"&&lC.test(t[e]))return!0;return!1}const uC=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),fC=iS(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function dC(t){var d;const{motionValue:e,name:n,repeatDelay:i,repeatType:r,damping:s,type:o,keyframes:a}=t;if(!(((d=e==null?void 0:e.owner)==null?void 0:d.current)instanceof HTMLElement))return!1;const{onUpdate:c,transformTemplate:f}=e.owner.getProps();return fC()&&n&&(FS.has(n)||uC.has(n)&&cC(a))&&(n!=="transform"||!f)&&!c&&!i&&r!=="mirror"&&s!==0&&o!=="inertia"}const hC=40;class pC extends ym{constructor({autoplay:e=!0,delay:n=0,type:i="keyframes",repeat:r=0,repeatDelay:s=0,repeatType:o="loop",keyframes:a,name:l,motionValue:c,element:f,...d}){var m;super(),this.stop=()=>{var M,g;this._animation&&(this._animation.stop(),(M=this.stopTimeline)==null||M.call(this)),(g=this.keyframeResolver)==null||g.cancel()},this.createdAt=dn.now();const u={autoplay:e,delay:n,type:i,repeat:r,repeatDelay:s,repeatType:o,name:l,motionValue:c,element:f,...d},p=(f==null?void 0:f.KeyframeResolver)||Sm;this.keyframeResolver=new p(a,(M,g,h)=>this.onKeyframesResolved(M,g,u,!h),l,c,f),(m=this.keyframeResolver)==null||m.scheduleResolve()}onKeyframesResolved(e,n,i,r){var h,v;this.keyframeResolver=void 0;const{name:s,type:o,velocity:a,delay:l,isHandoff:c,onUpdate:f}=i;this.resolvedAt=dn.now();let d=!0;aC(e,s,o,a)||(d=!1,(Fr.instantAnimations||!l)&&(f==null||f(Tu(e,i,n))),e[0]=e[e.length-1],lh(i),i.repeat=0);const p={startTime:r?this.resolvedAt?this.resolvedAt-this.createdAt>hC?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...i,keyframes:e},m=d&&!c&&dC(p),M=(v=(h=p.motionValue)==null?void 0:h.owner)==null?void 0:v.current;let g;if(m)try{g=new sC({...p,element:M})}catch{g=new qc(p)}else g=new qc(p);g.finished.then(()=>{this.notifyFinished()}).catch($n),this.pendingTimeline&&(this.stopTimeline=g.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=g}get finished(){return this._animation?this.animation.finished:this._finished}then(e,n){return this.finished.finally(e).then(()=>{})}get animation(){var e;return this._animation||((e=this.keyframeResolver)==null||e.resume(),ZA()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var e;this._animation&&this.animation.cancel(),(e=this.keyframeResolver)==null||e.cancel()}}function OS(t,e,n,i=0,r=1){const s=Array.from(t).sort((c,f)=>c.sortNodePosition(f)).indexOf(e),o=t.size,a=(o-1)*i;return typeof n=="function"?n(s,o):r===1?s*i:a-s*i}const N0=30,mC=t=>!isNaN(parseFloat(t));class gC{constructor(e,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=i=>{var s;const r=dn.now();if(this.updatedAt!==r&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&((s=this.events.change)==null||s.notify(this.current),this.dependents))for(const o of this.dependents)o.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=dn.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=mC(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new dm);const i=this.events[e].add(n);return e==="change"?()=>{i(),ct.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,n,i){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var e;(e=this.events.change)==null||e.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=dn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>N0)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,N0);return rS(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var e,n;(e=this.dependents)==null||e.clear(),(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function yo(t,e){return new gC(t,e)}function kS(t,e){if(t!=null&&t.inherit&&e){const{inherit:n,...i}=t;return{...e,...i}}return t}function Mm(t,e){const n=(t==null?void 0:t[e])??(t==null?void 0:t.default)??t;return n!==t?kS(n,t):n}const vC={type:"spring",stiffness:500,damping:25,restSpeed:10},_C=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),xC={type:"keyframes",duration:.8},yC={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},SC=(t,{keyframes:e})=>e.length>2?xC:Po.has(t)?t.startsWith("scale")?_C(e[1]):vC:yC,MC=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function EC(t){for(const e in t)if(!MC.has(e))return!0;return!1}const Em=(t,e,n,i={},r,s)=>o=>{const a=Mm(i,t)||{},l=a.delay||i.delay||0;let{elapsed:c=0}=i;c=c-Nn(l);const f={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-c,onUpdate:u=>{e.set(u),a.onUpdate&&a.onUpdate(u)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:t,motionValue:e,element:s?void 0:r};EC(a)||Object.assign(f,SC(t,f)),f.duration&&(f.duration=Nn(f.duration)),f.repeatDelay&&(f.repeatDelay=Nn(f.repeatDelay)),f.from!==void 0&&(f.keyframes[0]=f.from);let d=!1;if((f.type===!1||f.duration===0&&!f.repeatDelay)&&(lh(f),f.delay===0&&(d=!0)),(Fr.instantAnimations||Fr.skipAnimations||r!=null&&r.shouldSkipAnimations||a.skipAnimations)&&(d=!0,lh(f),f.delay=0),f.allowFlatten=!a.type&&!a.ease,d&&!s&&e.get()!==void 0){const u=Tu(f.keyframes,a);if(u!==void 0){ct.update(()=>{f.onUpdate(u),f.onComplete()});return}}return a.isSync?new qc(f):new pC(f)},TC=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function wC(t){const e=TC.exec(t);if(!e)return[,];const[,n,i,r]=e;return[`--${n??i}`,r]}function BS(t,e,n=1){const[i,r]=wC(t);if(!i)return;const s=window.getComputedStyle(e).getPropertyValue(i);if(s){const o=s.trim();return eS(o)?parseFloat(o):o}return mm(r)?BS(r,e,n+1):r}function I0(t){const e=[{},{}];return t==null||t.values.forEach((n,i)=>{e[0][i]=n.get(),e[1][i]=n.getVelocity()}),e}function Tm(t,e,n,i){if(typeof e=="function"){const[r,s]=I0(i);e=e(n!==void 0?n:t.custom,r,s)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[r,s]=I0(i);e=e(n!==void 0?n:t.custom,r,s)}return e}function fs(t,e,n){const i=t.getProps();return Tm(i,e,n!==void 0?n:i.custom,t)}const VS=new Set(["width","height","top","left","right","bottom",...bo]),ch=t=>Array.isArray(t);function AC(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,yo(n))}function CC(t){return ch(t)?t[t.length-1]||0:t}function RC(t,e){const n=fs(t,e);let{transitionEnd:i={},transition:r={},...s}=n||{};s={...s,...i};for(const o in s){const a=CC(s[o]);AC(t,o,a)}}const Zt=t=>!!(t&&t.getVelocity);function bC(t){return!!(Zt(t)&&t.add)}function uh(t,e){const n=t.getValue("willChange");if(bC(n))return n.add(e);if(!n&&Fr.WillChange){const i=new Fr.WillChange("auto");t.addValue("willChange",i),i.add(e)}}function wm(t){return t.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}const PC="framerAppearId",zS="data-"+wm(PC);function HS(t){return t.props[zS]}function DC({protectedKeys:t,needsAnimating:e},n){const i=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,i}function GS(t,e,{delay:n=0,transitionOverride:i,type:r}={}){let{transition:s,transitionEnd:o,...a}=e;const l=t.getDefaultTransition();s=s?kS(s,l):l;const c=s==null?void 0:s.reduceMotion,f=s==null?void 0:s.skipAnimations;i&&(s=i);const d=[],u=r&&t.animationState&&t.animationState.getState()[r],p=s==null?void 0:s.path;p&&p.animateVisualElement(t,a,s,n,d);for(const m in a){const M=t.getValue(m,t.latestValues[m]??null),g=a[m];if(g===void 0||u&&DC(u,m))continue;const h={delay:n,...Mm(s||{},m)};f&&(h.skipAnimations=!0);const v=M.get();if(v!==void 0&&!M.isAnimating()&&!Array.isArray(g)&&g===v&&!h.velocity){ct.update(()=>M.set(g));continue}let y=!1;if(window.MotionHandoffAnimation){const w=HS(t);if(w){const C=window.MotionHandoffAnimation(w,m,ct);C!==null&&(h.startTime=C,y=!0)}}uh(t,m);const x=c??t.shouldReduceMotion;M.start(Em(m,M,g,x&&VS.has(m)?{type:!1}:h,t,y));const E=M.animation;E&&d.push(E)}if(o){const m=()=>ct.update(()=>{o&&RC(t,o)});d.length?Promise.all(d).then(m):m()}return d}function fh(t,e,n={}){var l;const i=fs(t,e,n.type==="exit"?(l=t.presenceContext)==null?void 0:l.custom:void 0);let{transition:r=t.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(r=n.transitionOverride);const s=i?()=>Promise.all(GS(t,i,n)):()=>Promise.resolve(),o=t.variantChildren&&t.variantChildren.size?(c=0)=>{const{delayChildren:f=0,staggerChildren:d,staggerDirection:u}=r;return LC(t,e,c,f,d,u,n)}:()=>Promise.resolve(),{when:a}=r;if(a){const[c,f]=a==="beforeChildren"?[s,o]:[o,s];return c().then(()=>f())}else return Promise.all([s(),o(n.delay)])}function LC(t,e,n=0,i=0,r=0,s=1,o){const a=[];for(const l of t.variantChildren)l.notify("AnimationStart",e),a.push(fh(l,e,{...o,delay:n+(typeof i=="function"?0:i)+OS(t.variantChildren,l,i,r,s)}).then(()=>l.notify("AnimationComplete",e)));return Promise.all(a)}function NC(t,e,n={}){t.notify("AnimationStart",e);let i;if(Array.isArray(e)){const r=e.map(s=>fh(t,s,n));i=Promise.all(r)}else if(typeof e=="string")i=fh(t,e,n);else{const r=typeof e=="function"?fs(t,e,n.custom):e;i=Promise.all(GS(t,r,n))}return i.then(()=>{t.notify("AnimationComplete",e)})}const IC={test:t=>t==="auto",parse:t=>t},WS=t=>e=>e.test(t),XS=[Ro,Me,Ri,Vi,oA,sA,IC],U0=t=>XS.find(WS(t));function UC(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||nS(t):!0}const FC=new Set(["brightness","contrast","saturate","opacity"]);function OC(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[i]=n.match(gm)||[];if(!i)return t;const r=n.replace(i,"");let s=FC.has(e)?1:0;return i!==n&&(s*=100),e+"("+s+r+")"}const kC=/\b([a-z-]*)\(.*?\)/gu,dh={...ui,getAnimatableNone:t=>{const e=t.match(kC);return e?e.map(OC).join(" "):t}},hh={...ui,getAnimatableNone:t=>{const e=ui.parse(t);return ui.createTransformer(t)(e.map(i=>typeof i=="number"?0:typeof i=="object"?{...i,alpha:1}:i))}},F0={...Ro,transform:Math.round},BC={rotate:Vi,pathRotation:Vi,rotateX:Vi,rotateY:Vi,rotateZ:Vi,scale:yl,scaleX:yl,scaleY:yl,scaleZ:yl,skew:Vi,skewX:Vi,skewY:Vi,distance:Me,translateX:Me,translateY:Me,translateZ:Me,x:Me,y:Me,z:Me,perspective:Me,transformPerspective:Me,opacity:Ua,originX:M0,originY:M0,originZ:Me},Yc={borderWidth:Me,borderTopWidth:Me,borderRightWidth:Me,borderBottomWidth:Me,borderLeftWidth:Me,borderRadius:Me,borderTopLeftRadius:Me,borderTopRightRadius:Me,borderBottomRightRadius:Me,borderBottomLeftRadius:Me,width:Me,maxWidth:Me,height:Me,maxHeight:Me,top:Me,right:Me,bottom:Me,left:Me,inset:Me,insetBlock:Me,insetBlockStart:Me,insetBlockEnd:Me,insetInline:Me,insetInlineStart:Me,insetInlineEnd:Me,padding:Me,paddingTop:Me,paddingRight:Me,paddingBottom:Me,paddingLeft:Me,paddingBlock:Me,paddingBlockStart:Me,paddingBlockEnd:Me,paddingInline:Me,paddingInlineStart:Me,paddingInlineEnd:Me,margin:Me,marginTop:Me,marginRight:Me,marginBottom:Me,marginLeft:Me,marginBlock:Me,marginBlockStart:Me,marginBlockEnd:Me,marginInline:Me,marginInlineStart:Me,marginInlineEnd:Me,fontSize:Me,backgroundPositionX:Me,backgroundPositionY:Me,...BC,zIndex:F0,fillOpacity:Ua,strokeOpacity:Ua,numOctaves:F0},VC={...Yc,color:Nt,backgroundColor:Nt,outlineColor:Nt,fill:Nt,stroke:Nt,borderColor:Nt,borderTopColor:Nt,borderRightColor:Nt,borderBottomColor:Nt,borderLeftColor:Nt,filter:dh,WebkitFilter:dh,mask:hh,WebkitMask:hh},jS=t=>VC[t],zC=new Set([dh,hh]);function $S(t,e){let n=jS(t);return zC.has(n)||(n=ui),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const HC=new Set(["auto","none","0"]);function GC(t,e,n){let i=0,r;for(;i<t.length&&!r;){const s=t[i];typeof s=="string"&&!HC.has(s)&&xo(s).values.length&&(r=t[i]),i++}if(r&&n)for(const s of e)t[s]=$S(n,r)}class WC extends Sm{constructor(e,n,i,r,s){super(e,n,i,r,s,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:i}=this;if(!n||!n.current)return;super.readKeyframes();for(let f=0;f<e.length;f++){let d=e[f];if(typeof d=="string"&&(d=d.trim(),mm(d))){const u=BS(d,n.current);u!==void 0&&(e[f]=u),f===e.length-1&&(this.finalKeyframe=d)}}if(this.resolveNoneKeyframes(),!VS.has(i)||e.length!==2)return;const[r,s]=e,o=U0(r),a=U0(s),l=S0(r),c=S0(s);if(l!==c&&Tr[i]){this.needsMeasurement=!0;return}if(o!==a)if(P0(o)&&P0(a))for(let f=0;f<e.length;f++){const d=e[f];typeof d=="string"&&(e[f]=parseFloat(d))}else Tr[i]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,i=[];for(let r=0;r<e.length;r++)(e[r]===null||UC(e[r]))&&i.push(r);i.length&&GC(e,i,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:i}=this;if(!e||!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Tr[i](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const r=n[n.length-1];r!==void 0&&e.getValue(i,r).jump(r,!1)}measureEndState(){var a;const{element:e,name:n,unresolvedKeyframes:i}=this;if(!e||!e.current)return;const r=e.getValue(n);r&&r.jump(this.measuredOrigin,!1);const s=i.length-1,o=i[s];i[s]=Tr[n](e.measureViewportBox(),window.getComputedStyle(e.current)),o!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=o),(a=this.removedTransforms)!=null&&a.length&&this.removedTransforms.forEach(([l,c])=>{e.getValue(l).set(c)}),this.resolveNoneKeyframes()}}const Am=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"];function qS(t,e,n){if(t==null)return[];if(t instanceof EventTarget)return[t];if(typeof t=="string"){let i=document;const r=(n==null?void 0:n[t])??i.querySelectorAll(t);return r?Array.from(r):[]}return Array.from(t).filter(i=>i!=null)}const ph=(t,e)=>e&&typeof t=="number"?e.transform(t):t;function oc(t){return tS(t)&&"offsetHeight"in t&&!("ownerSVGElement"in t)}const{schedule:Cm}=mS(queueMicrotask,!1),ti={x:!1,y:!1};function YS(){return ti.x||ti.y}function XC(t){return t==="x"||t==="y"?ti[t]?null:(ti[t]=!0,()=>{ti[t]=!1}):ti.x||ti.y?null:(ti.x=ti.y=!0,()=>{ti.x=ti.y=!1})}function KS(t,e){const n=qS(t),i=new AbortController,r={passive:!0,...e,signal:i.signal};return[n,r,()=>i.abort()]}function jC(t){return!(t.pointerType==="touch"||YS())}function $C(t,e,n={}){const[i,r,s]=KS(t,n);return i.forEach(o=>{let a=!1,l=!1,c;const f=()=>{o.removeEventListener("pointerleave",m)},d=g=>{c&&(c(g),c=void 0),f()},u=g=>{a=!1,window.removeEventListener("pointerup",u),window.removeEventListener("pointercancel",u),l&&(l=!1,d(g))},p=()=>{a=!0,window.addEventListener("pointerup",u,r),window.addEventListener("pointercancel",u,r)},m=g=>{if(g.pointerType!=="touch"){if(a){l=!0;return}d(g)}},M=g=>{if(!jC(g))return;l=!1;const h=e(o,g);typeof h=="function"&&(c=h,o.addEventListener("pointerleave",m,r))};o.addEventListener("pointerenter",M,r),o.addEventListener("pointerdown",p,r)}),s}const ZS=(t,e)=>e?t===e?!0:ZS(t,e.parentElement):!1,Rm=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,qC=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function YC(t){return qC.has(t.tagName)||t.isContentEditable===!0}const KC=new Set(["INPUT","SELECT","TEXTAREA"]);function ZC(t){return KC.has(t.tagName)||t.isContentEditable===!0}const ac=new WeakSet;function O0(t){return e=>{e.key==="Enter"&&t(e)}}function mf(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const QC=(t,e)=>{const n=t.currentTarget;if(!n)return;const i=O0(()=>{if(ac.has(n))return;mf(n,"down");const r=O0(()=>{mf(n,"up")}),s=()=>mf(n,"cancel");n.addEventListener("keyup",r,e),n.addEventListener("blur",s,e)});n.addEventListener("keydown",i,e),n.addEventListener("blur",()=>n.removeEventListener("keydown",i),e)};function k0(t){return Rm(t)&&!YS()}const B0=new WeakSet;function JC(t,e,n={}){const[i,r,s]=KS(t,n),o=a=>{const l=a.currentTarget;if(!k0(a)||B0.has(a))return;ac.add(l),n.stopPropagation&&B0.add(a);const c=e(l,a),f={...r,capture:!0},d=(m,M)=>{window.removeEventListener("pointerup",u,f),window.removeEventListener("pointercancel",p,f),ac.has(l)&&ac.delete(l),k0(m)&&typeof c=="function"&&c(m,{success:M})},u=m=>{d(m,l===window||l===document||n.useGlobalTarget||ZS(l,m.target))},p=m=>{d(m,!1)};window.addEventListener("pointerup",u,f),window.addEventListener("pointercancel",p,f)};return i.forEach(a=>{(n.useGlobalTarget?window:a).addEventListener("pointerdown",o,r),oc(a)&&(a.addEventListener("focus",c=>QC(c,r)),!YC(a)&&!a.hasAttribute("tabindex")&&(a.tabIndex=0))}),s}function bm(t){return tS(t)&&"ownerSVGElement"in t}const lc=new WeakMap;let gr;const QS=(t,e,n)=>(i,r)=>r&&r[0]?r[0][t+"Size"]:bm(i)&&"getBBox"in i?i.getBBox()[e]:i[n],eR=QS("inline","width","offsetWidth"),tR=QS("block","height","offsetHeight");function nR({target:t,borderBoxSize:e}){var n;(n=lc.get(t))==null||n.forEach(i=>{i(t,{get width(){return eR(t,e)},get height(){return tR(t,e)}})})}function iR(t){t.forEach(nR)}function rR(){typeof ResizeObserver>"u"||(gr=new ResizeObserver(iR))}function sR(t,e){gr||rR();const n=qS(t);return n.forEach(i=>{let r=lc.get(i);r||(r=new Set,lc.set(i,r)),r.add(e),gr==null||gr.observe(i)}),()=>{n.forEach(i=>{const r=lc.get(i);r==null||r.delete(e),r!=null&&r.size||gr==null||gr.unobserve(i)})}}const cc=new Set;let eo;function oR(){eo=()=>{const t={get width(){return window.innerWidth},get height(){return window.innerHeight}};cc.forEach(e=>e(t))},window.addEventListener("resize",eo)}function aR(t){return cc.add(t),eo||oR(),()=>{cc.delete(t),!cc.size&&typeof eo=="function"&&(window.removeEventListener("resize",eo),eo=void 0)}}function V0(t,e){return typeof t=="function"?aR(t):sR(t,e)}function lR(t){return bm(t)&&t.tagName==="svg"}const cR=[...XS,Nt,ui],uR=t=>cR.find(WS(t)),z0=()=>({translate:0,scale:1,origin:0,originPoint:0}),to=()=>({x:z0(),y:z0()}),H0=()=>({min:0,max:0}),Ot=()=>({x:H0(),y:H0()}),fR=new WeakMap;function wu(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function Fa(t){return typeof t=="string"||Array.isArray(t)}const Pm=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Dm=["initial",...Pm];function Au(t){return wu(t.animate)||Dm.some(e=>Fa(t[e]))}function JS(t){return!!(Au(t)||t.variants)}function dR(t,e,n){for(const i in e){const r=e[i],s=n[i];if(Zt(r))t.addValue(i,r);else if(Zt(s))t.addValue(i,yo(r,{owner:t}));else if(s!==r)if(t.hasValue(i)){const o=t.getValue(i);o.liveStyle===!0?o.jump(r):o.hasAnimated||o.set(r)}else{const o=t.getStaticValue(i);t.addValue(i,yo(o!==void 0?o:r,{owner:t}))}}for(const i in n)e[i]===void 0&&t.removeValue(i);return e}const mh={current:null},eM={current:!1},hR=typeof window<"u";function pR(){if(eM.current=!0,!!hR)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>mh.current=t.matches;t.addEventListener("change",e),e()}else mh.current=!1}const G0=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let Kc={};function tM(t){Kc=t}function mR(){return Kc}class gR{scrapeMotionValuesFromProps(e,n,i){return{}}constructor({parent:e,props:n,presenceContext:i,reducedMotionConfig:r,skipAnimations:s,blockInitialAnimation:o,visualState:a},l={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Sm,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const p=dn.now();this.renderScheduledAt<p&&(this.renderScheduledAt=p,ct.render(this.render,!1,!0))};const{latestValues:c,renderState:f}=a;this.latestValues=c,this.baseTarget={...c},this.initialValues=n.initial?{...c}:{},this.renderState=f,this.parent=e,this.props=n,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.skipAnimationsConfig=s,this.options=l,this.blockInitialAnimation=!!o,this.isControllingVariants=Au(n),this.isVariantNode=JS(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:d,...u}=this.scrapeMotionValuesFromProps(n,{},this);for(const p in u){const m=u[p];c[p]!==void 0&&Zt(m)&&m.set(c[p])}}mount(e){var n,i;if(this.hasBeenMounted)for(const r in this.initialValues)(n=this.values.get(r))==null||n.jump(this.initialValues[r]),this.latestValues[r]=this.initialValues[r];this.current=e,fR.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,s)=>this.bindToMotionValue(s,r)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(eM.current||pR(),this.shouldReduceMotion=mh.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(i=this.parent)==null||i.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var e;this.projection&&this.projection.unmount(),Or(this.notifyUpdate),Or(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(e=this.parent)==null||e.removeChild(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const i=this.features[n];i&&(i.unmount(),i.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,n){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),n.accelerate&&FS.has(e)&&this.current instanceof HTMLElement){const{factory:o,keyframes:a,times:l,ease:c,duration:f}=n.accelerate,d=new IS({element:this.current,name:e,keyframes:a,times:l,ease:c,duration:Nn(f)}),u=o(d);this.valueSubscriptions.set(e,()=>{u(),d.cancel()});return}const i=Po.has(e);i&&this.onBindTransform&&this.onBindTransform();const r=n.on("change",o=>{this.latestValues[e]=o,this.props.onUpdate&&ct.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let s;typeof window<"u"&&window.MotionCheckAppearSync&&(s=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{r(),s&&s()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in Kc){const n=Kc[e];if(!n)continue;const{isEnabled:i,Feature:r}=n;if(!this.features[e]&&r&&i(this.props)&&(this.features[e]=new r(this)),this.features[e]){const s=this.features[e];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Ot()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<G0.length;i++){const r=G0[i];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const s="on"+r,o=e[s];o&&(this.propEventSubscriptions[r]=this.on(r,o))}this.prevMotionValues=dR(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const i=this.values.get(e);n!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&n!==void 0&&(i=yo(n===null?void 0:n,{owner:this}),this.addValue(e,i)),i}readValue(e,n){let i=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return i!=null&&(typeof i=="string"&&(eS(i)||nS(i))?i=parseFloat(i):!uR(i)&&ui.test(n)&&(i=$S(e,n)),this.setBaseTarget(e,Zt(i)?i.get():i)),Zt(i)?i.get():i}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var s;const{initial:n}=this.props;let i;if(typeof n=="string"||typeof n=="object"){const o=Tm(this.props,n,(s=this.presenceContext)==null?void 0:s.custom);o&&(i=o[e])}if(n&&i!==void 0)return i;const r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!Zt(r)?r:this.initialValues[e]!==void 0&&i===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new dm),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}scheduleRenderMicrotask(){Cm.render(this.render)}}class nM extends gR{constructor(){super(...arguments),this.KeyframeResolver=WC}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){const i=e.style;return i?i[n]:void 0}removeValueFromRenderState(e,{vars:n,style:i}){delete n[e],delete i[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Zt(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class Hr{constructor(e){this.isMounted=!1,this.node=e}update(){}}function iM({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function vR({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function _R(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function gf(t){return t===void 0||t===1}function gh({scale:t,scaleX:e,scaleY:n}){return!gf(t)||!gf(e)||!gf(n)}function Zr(t){return gh(t)||rM(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function rM(t){return W0(t.x)||W0(t.y)}function W0(t){return t&&t!=="0%"}function Zc(t,e,n){const i=t-n,r=e*i;return n+r}function X0(t,e,n,i,r){return r!==void 0&&(t=Zc(t,r,i)),Zc(t,n,i)+e}function vh(t,e=0,n=1,i,r){t.min=X0(t.min,e,n,i,r),t.max=X0(t.max,e,n,i,r)}function sM(t,{x:e,y:n}){vh(t.x,e.translate,e.scale,e.originPoint),vh(t.y,n.translate,n.scale,n.originPoint)}const j0=.999999999999,$0=1.0000000000001;function xR(t,e,n,i=!1){var a;const r=n.length;if(!r)return;e.x=e.y=1;let s,o;for(let l=0;l<r;l++){s=n[l],o=s.projectionDelta;const{visualElement:c}=s.options;c&&c.props.style&&c.props.style.display==="contents"||(i&&s.options.layoutScroll&&s.scroll&&s!==s.root&&(Si(t.x,-s.scroll.offset.x),Si(t.y,-s.scroll.offset.y)),o&&(e.x*=o.x.scale,e.y*=o.y.scale,sM(t,o)),i&&Zr(s.latestValues)&&uc(t,s.latestValues,(a=s.layout)==null?void 0:a.layoutBox))}e.x<$0&&e.x>j0&&(e.x=1),e.y<$0&&e.y>j0&&(e.y=1)}function Si(t,e){t.min+=e,t.max+=e}function q0(t,e,n,i,r=.5){const s=lt(t.min,t.max,r);vh(t,e,n,s,i)}function Y0(t,e){return typeof t=="string"?parseFloat(t)/100*(e.max-e.min):t}function uc(t,e,n){const i=n??t;q0(t.x,Y0(e.x,i.x),e.scaleX,e.scale,e.originX),q0(t.y,Y0(e.y,i.y),e.scaleY,e.scale,e.originY)}function oM(t,e){return iM(_R(t.getBoundingClientRect(),e))}function yR(t,e,n){const i=oM(t,n),{scroll:r}=e;return r&&(Si(i.x,r.offset.x),Si(i.y,r.offset.y)),i}const SR={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},MR=bo.length;function ER(t,e,n){let i="",r=!0;for(let o=0;o<MR;o++){const a=bo[o],l=t[a];if(l===void 0)continue;let c=!0;if(typeof l=="number")c=l===(a.startsWith("scale")?1:0);else{const f=parseFloat(l);c=a.startsWith("scale")?f===1:f===0}if(!c||n){const f=ph(l,Yc[a]);if(!c){r=!1;const d=SR[a]||a;i+=`${d}(${f}) `}n&&(e[a]=f)}}const s=t.pathRotation;return s&&(r=!1,i+=`rotate(${ph(s,Yc.pathRotation)}) `),i=i.trim(),n?i=n(e,r?"":i):r&&(i="none"),i}function Lm(t,e,n){const{style:i,vars:r,transformOrigin:s}=t;let o=!1,a=!1;for(const l in e){const c=e[l];if(Po.has(l)){o=!0;continue}else if(vS(l)){r[l]=c;continue}else{const f=ph(c,Yc[l]);l.startsWith("origin")?(a=!0,s[l]=f):i[l]=f}}if(e.transform||(o||n?i.transform=ER(e,t.transform,n):i.transform&&(i.transform="none")),a){const{originX:l="50%",originY:c="50%",originZ:f=0}=s;i.transformOrigin=`${l} ${c} ${f}`}}function aM(t,{style:e,vars:n},i,r){const s=t.style;let o;for(o in e)s[o]=e[o];r==null||r.applyProjectionStyles(s,i);for(o in n)s.setProperty(o,n[o])}function K0(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const Ho={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(Me.test(t))t=parseFloat(t);else return t;const n=K0(t,e.target.x),i=K0(t,e.target.y);return`${n}% ${i}%`}},TR={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,r=ui.parse(t);if(r.length>5)return i;const s=ui.createTransformer(t),o=typeof r[0]!="number"?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;r[0+o]/=a,r[1+o]/=l;const c=lt(a,l,.5);return typeof r[2+o]=="number"&&(r[2+o]/=c),typeof r[3+o]=="number"&&(r[3+o]/=c),s(r)}},_h={borderRadius:{...Ho,applyTo:[...Am]},borderTopLeftRadius:Ho,borderTopRightRadius:Ho,borderBottomLeftRadius:Ho,borderBottomRightRadius:Ho,boxShadow:TR};function lM(t,{layout:e,layoutId:n}){return Po.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!_h[t]||t==="opacity")}function Nm(t,e,n){var o;const i=t.style,r=e==null?void 0:e.style,s={};if(!i)return s;for(const a in i)(Zt(i[a])||r&&Zt(r[a])||lM(a,t)||((o=n==null?void 0:n.getValue(a))==null?void 0:o.liveStyle)!==void 0)&&(s[a]=i[a]);return s}function wR(t){return window.getComputedStyle(t)}class AR extends nM{constructor(){super(...arguments),this.type="html",this.renderInstance=aM}readValueFromInstance(e,n){var i;if(Po.has(n))return(i=this.projection)!=null&&i.isProjecting?ih(n):jA(e,n);{const r=wR(e),s=(vS(n)?r.getPropertyValue(n):r[n])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(e,{transformPagePoint:n}){return oM(e,n)}build(e,n,i){Lm(e,n,i.transformTemplate)}scrapeMotionValuesFromProps(e,n,i){return Nm(e,n,i)}}const CR={offset:"stroke-dashoffset",array:"stroke-dasharray"},RR={offset:"strokeDashoffset",array:"strokeDasharray"};function bR(t,e,n=1,i=0,r=!0){t.pathLength=1;const s=r?CR:RR;t[s.offset]=`${-i}`,t[s.array]=`${e} ${n}`}const PR=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function cM(t,{attrX:e,attrY:n,attrScale:i,pathLength:r,pathSpacing:s=1,pathOffset:o=0,...a},l,c,f){if(Lm(t,a,c),l){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:d,style:u}=t;d.transform&&(u.transform=d.transform,delete d.transform),(u.transform||d.transformOrigin)&&(u.transformOrigin=d.transformOrigin??"50% 50%",delete d.transformOrigin),u.transform&&(u.transformBox=(f==null?void 0:f.transformBox)??"fill-box",delete d.transformBox);for(const p of PR)d[p]!==void 0&&(u[p]=d[p],delete d[p]);e!==void 0&&(d.x=e),n!==void 0&&(d.y=n),i!==void 0&&(d.scale=i),r!==void 0&&bR(d,r,s,o,!1)}const uM=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),fM=t=>typeof t=="string"&&t.toLowerCase()==="svg";function DR(t,e,n,i){aM(t,e,void 0,i);for(const r in e.attrs)t.setAttribute(uM.has(r)?r:wm(r),e.attrs[r])}function dM(t,e,n){const i=Nm(t,e,n);for(const r in t)if(Zt(t[r])||Zt(e[r])){const s=bo.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;i[s]=t[r]}return i}class LR extends nM{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Ot}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(Po.has(n)){const i=jS(n);return i&&i.default||0}return n=uM.has(n)?n:wm(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,i){return dM(e,n,i)}build(e,n,i){cM(e,n,this.isSVGTag,i.transformTemplate,i.style)}renderInstance(e,n,i,r){DR(e,n,i,r)}mount(e){this.isSVGTag=fM(e.tagName),super.mount(e)}}const NR=Dm.length;function hM(t){if(!t)return;if(!t.isControllingVariants){const n=t.parent?hM(t.parent)||{}:{};return t.props.initial!==void 0&&(n.initial=t.props.initial),n}const e={};for(let n=0;n<NR;n++){const i=Dm[n],r=t.props[i];(Fa(r)||r===!1)&&(e[i]=r)}return e}function pM(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}const IR=[...Pm].reverse(),UR=Pm.length;function FR(t){return e=>Promise.all(e.map(({animation:n,options:i})=>NC(t,n,i)))}function OR(t){let e=FR(t),n=Z0(),i=!0,r=!1;const s=c=>(f,d)=>{var p;const u=fs(t,d,c==="exit"?(p=t.presenceContext)==null?void 0:p.custom:void 0);if(u){const{transition:m,transitionEnd:M,...g}=u;f={...f,...g,...M}}return f};function o(c){e=c(t)}function a(c){const{props:f}=t,d=hM(t.parent)||{},u=[],p=new Set;let m={},M=1/0;for(let h=0;h<UR;h++){const v=IR[h],y=n[v],x=f[v]!==void 0?f[v]:d[v],E=Fa(x),w=v===c?y.isActive:null;w===!1&&(M=h);let C=x===d[v]&&x!==f[v]&&E;if(C&&(i||r)&&t.manuallyAnimateOnMount&&(C=!1),y.protectedKeys={...m},!y.isActive&&w===null||!x&&!y.prevProp||wu(x)||typeof x=="boolean")continue;if(v==="exit"&&y.isActive&&w!==!0){y.prevResolvedValues&&(m={...m,...y.prevResolvedValues});continue}const _=kR(y.prevProp,x);let A=_||v===c&&y.isActive&&!C&&E||h>M&&E,b=!1;const D=Array.isArray(x)?x:[x];let U=D.reduce(s(v),{});w===!1&&(U={});const{prevResolvedValues:$={}}=y,Y={...$,...U},B=N=>{A=!0,p.has(N)&&(b=!0,p.delete(N)),y.needsAnimating[N]=!0;const V=t.getValue(N);V&&(V.liveStyle=!1)};for(const N in Y){const V=U[N],K=$[N];if(m.hasOwnProperty(N))continue;let ne=!1;ch(V)&&ch(K)?ne=!pM(V,K)||_:ne=V!==K,ne?V!=null?B(N):p.add(N):V!==void 0&&p.has(N)?B(N):y.protectedKeys[N]=!0}y.prevProp=x,y.prevResolvedValues=U,y.isActive&&(m={...m,...U}),(i||r)&&t.blockInitialAnimation&&(A=!1);const I=C&&_;A&&(!I||b)&&u.push(...D.map(N=>{const V={type:v};if(typeof N=="string"&&(i||r)&&!I&&t.manuallyAnimateOnMount&&t.parent){const{parent:K}=t,ne=fs(K,N);if(K.enteringChildren&&ne){const{delayChildren:oe}=ne.transition||{};V.delay=OS(K.enteringChildren,t,oe)}}return{animation:N,options:V}}))}if(p.size){const h={};if(typeof f.initial!="boolean"){const v=fs(t,Array.isArray(f.initial)?f.initial[0]:f.initial);v&&v.transition&&(h.transition=v.transition)}p.forEach(v=>{const y=t.getBaseTarget(v),x=t.getValue(v);x&&(x.liveStyle=!0),h[v]=y??null}),u.push({animation:h})}let g=!!u.length;return i&&(f.initial===!1||f.initial===f.animate)&&!t.manuallyAnimateOnMount&&(g=!1),i=!1,r=!1,g?e(u):Promise.resolve()}function l(c,f){var u;if(n[c].isActive===f)return Promise.resolve();(u=t.variantChildren)==null||u.forEach(p=>{var m;return(m=p.animationState)==null?void 0:m.setActive(c,f)}),n[c].isActive=f;const d=a(c);for(const p in n)n[p].protectedKeys={};return d}return{animateChanges:a,setActive:l,setAnimateFunction:o,getState:()=>n,reset:()=>{n=Z0(),r=!0}}}function kR(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!pM(e,t):!1}function Wr(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Z0(){return{animate:Wr(!0),whileInView:Wr(),whileHover:Wr(),whileTap:Wr(),whileDrag:Wr(),whileFocus:Wr(),exit:Wr()}}function xh(t,e){t.min=e.min,t.max=e.max}function Zn(t,e){xh(t.x,e.x),xh(t.y,e.y)}function Q0(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}const mM=1e-4,BR=1-mM,VR=1+mM,gM=.01,zR=0-gM,HR=0+gM;function hn(t){return t.max-t.min}function GR(t,e,n){return Math.abs(t-e)<=n}function J0(t,e,n,i=.5){t.origin=i,t.originPoint=lt(e.min,e.max,t.origin),t.scale=hn(n)/hn(e),t.translate=lt(n.min,n.max,t.origin)-t.originPoint,(t.scale>=BR&&t.scale<=VR||isNaN(t.scale))&&(t.scale=1),(t.translate>=zR&&t.translate<=HR||isNaN(t.translate))&&(t.translate=0)}function ma(t,e,n,i){J0(t.x,e.x,n.x,i?i.originX:void 0),J0(t.y,e.y,n.y,i?i.originY:void 0)}function ev(t,e,n,i=0){const r=i?lt(n.min,n.max,i):n.min;t.min=r+e.min,t.max=t.min+hn(e)}function WR(t,e,n,i){ev(t.x,e.x,n.x,i==null?void 0:i.x),ev(t.y,e.y,n.y,i==null?void 0:i.y)}function tv(t,e,n,i=0){const r=i?lt(n.min,n.max,i):n.min;t.min=e.min-r,t.max=t.min+hn(e)}function Qc(t,e,n,i){tv(t.x,e.x,n.x,i==null?void 0:i.x),tv(t.y,e.y,n.y,i==null?void 0:i.y)}function nv(t,e,n,i,r){return t-=e,t=Zc(t,1/n,i),r!==void 0&&(t=Zc(t,1/r,i)),t}function XR(t,e=0,n=1,i=.5,r,s=t,o=t){if(Ri.test(e)&&(e=parseFloat(e),e=lt(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=lt(s.min,s.max,i);t===s&&(a-=e),t.min=nv(t.min,e,n,a,r),t.max=nv(t.max,e,n,a,r)}function iv(t,e,[n,i,r],s,o){XR(t,e[n],e[i],e[r],e.scale,s,o)}const jR=["x","scaleX","originX"],$R=["y","scaleY","originY"];function rv(t,e,n,i){iv(t.x,e,jR,n?n.x:void 0,i?i.x:void 0),iv(t.y,e,$R,n?n.y:void 0,i?i.y:void 0)}function sv(t){return t.translate===0&&t.scale===1}function vM(t){return sv(t.x)&&sv(t.y)}function ov(t,e){return t.min===e.min&&t.max===e.max}function qR(t,e){return ov(t.x,e.x)&&ov(t.y,e.y)}function av(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function _M(t,e){return av(t.x,e.x)&&av(t.y,e.y)}function lv(t){return hn(t.x)/hn(t.y)}function cv(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}function yi(t){return[t("x"),t("y")]}function YR(t,e,n){let i="";const r=t.x.translate/e.x,s=t.y.translate/e.y,o=(n==null?void 0:n.z)||0;if((r||s||o)&&(i=`translate3d(${r}px, ${s}px, ${o}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:c,rotate:f,pathRotation:d,rotateX:u,rotateY:p,skewX:m,skewY:M}=n;c&&(i=`perspective(${c}px) ${i}`),f&&(i+=`rotate(${f}deg) `),d&&(i+=`rotate(${d}deg) `),u&&(i+=`rotateX(${u}deg) `),p&&(i+=`rotateY(${p}deg) `),m&&(i+=`skewX(${m}deg) `),M&&(i+=`skewY(${M}deg) `)}const a=t.x.scale*e.x,l=t.y.scale*e.y;return(a!==1||l!==1)&&(i+=`scale(${a}, ${l})`),i||"none"}const KR=Am.length,uv=t=>typeof t=="string"?parseFloat(t):t,fv=t=>typeof t=="number"||Me.test(t);function ZR(t,e,n,i,r,s){r?(t.opacity=lt(0,n.opacity??1,QR(i)),t.opacityExit=lt(e.opacity??1,0,JR(i))):s&&(t.opacity=lt(e.opacity??1,n.opacity??1,i));for(let o=0;o<KR;o++){const a=Am[o];let l=dv(e,a),c=dv(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||fv(l)===fv(c)?(t[a]=Math.max(lt(uv(l),uv(c),i),0),(Ri.test(c)||Ri.test(l))&&(t[a]+="%")):t[a]=c}(e.rotate||n.rotate)&&(t.rotate=lt(e.rotate||0,n.rotate||0,i))}function dv(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const QR=xM(0,.5,fS),JR=xM(.5,.95,$n);function xM(t,e,n){return i=>i<t?0:i>e?1:n(Ia(t,e,i))}function eb(t,e,n){const i=Zt(t)?t:yo(t);return i.start(Em("",i,e,n)),i.animation}function Oa(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}const tb=(t,e)=>t.depth-e.depth;class nb{constructor(){this.children=[],this.isDirty=!1}add(e){um(this.children,e),this.isDirty=!0}remove(e){Wc(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(tb),this.isDirty=!1,this.children.forEach(e)}}function ib(t,e){const n=dn.now(),i=({timestamp:r})=>{const s=r-n;s>=e&&(Or(i),t(s-e))};return ct.setup(i,!0),()=>Or(i)}function fc(t){return Zt(t)?t.get():t}class rb{constructor(){this.members=[]}add(e){um(this.members,e);for(let n=this.members.length-1;n>=0;n--){const i=this.members[n];if(i===e||i===this.lead||i===this.prevLead)continue;const r=i.instance;(!r||r.isConnected===!1)&&!i.snapshot&&(Wc(this.members,i),i.unmount())}e.scheduleRender()}remove(e){if(Wc(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){var n;for(let i=this.members.indexOf(e)-1;i>=0;i--){const r=this.members[i];if(r.isPresent!==!1&&((n=r.instance)==null?void 0:n.isConnected)!==!1)return this.promote(r),!0}return!1}promote(e,n){var r;const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.updateSnapshot(),e.scheduleRender();const{layoutDependency:s}=i.options,{layoutDependency:o}=e.options;(s===void 0||s!==o)&&(e.resumeFrom=i,n&&(i.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),(r=e.root)!=null&&r.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{var n,i,r,s,o;(i=(n=e.options).onExitComplete)==null||i.call(n),(o=(r=e.resumingFrom)==null?void 0:(s=r.options).onExitComplete)==null||o.call(s)})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){var e;(e=this.lead)!=null&&e.snapshot&&(this.lead.snapshot=void 0)}}const dc={hasAnimatedSinceResize:!0,hasEverUpdated:!1},vf=["","X","Y","Z"],sb=1e3;let ob=0;function _f(t,e,n,i){const{latestValues:r}=e;r[t]&&(n[t]=r[t],e.setStaticValue(t,0),i&&(i[t]=0))}function yM(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=HS(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:r,layoutId:s}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",ct,!(r||s))}const{parent:i}=t;i&&!i.hasCheckedOptimisedAppear&&yM(i)}function SM({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(o={},a=e==null?void 0:e()){this.id=ob++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(cb),this.nodes.forEach(mb),this.nodes.forEach(gb),this.nodes.forEach(ub)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new nb)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new dm),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o){if(this.instance)return;this.isSVG=bm(o)&&!lR(o),this.instance=o;const{layoutId:a,layout:l,visualElement:c}=this.options;if(c&&!c.current&&c.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(l||a)&&(this.isLayoutDirty=!0),t){let f,d=0;const u=()=>this.root.updateBlockedByResize=!1;ct.read(()=>{d=window.innerWidth}),t(o,()=>{const p=window.innerWidth;p!==d&&(d=p,this.root.updateBlockedByResize=!0,f&&f(),f=ib(u,250),dc.hasAnimatedSinceResize&&(dc.hasAnimatedSinceResize=!1,this.nodes.forEach(mv)))})}a&&this.root.registerSharedNode(a,this),this.options.animate!==!1&&c&&(a||l)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:d,hasRelativeLayoutChanged:u,layout:p})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const m=this.options.transition||c.getDefaultTransition()||Sb,{onLayoutAnimationStart:M,onLayoutAnimationComplete:g}=c.getProps(),h=!this.targetLayout||!_M(this.targetLayout,p),v=!d&&u;if(this.options.layoutRoot||this.resumeFrom||v||d&&(h||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const y={...Mm(m,"layout"),onPlay:M,onComplete:g};(c.shouldReduceMotion||this.options.layoutRoot)&&(y.delay=0,y.type=!1),this.startAnimation(y),this.setAnimationOrigin(f,v,y.path)}else d||mv(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=p})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Or(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(vb),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&yM(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let f=0;f<this.path.length;f++){const d=this.path[f];d.shouldResetTransform=!0,(typeof d.latestValues.x=="string"||typeof d.latestValues.y=="string")&&(d.isLayoutDirty=!0),d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const l=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),l&&this.nodes.forEach(db),this.nodes.forEach(hv);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(pv);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(hb),this.nodes.forEach(pb),this.nodes.forEach(ab),this.nodes.forEach(lb)):this.nodes.forEach(pv),this.clearAllSnapshots();const a=dn.now();Yt.delta=Li(0,1e3/60,a-Yt.timestamp),Yt.timestamp=a,Yt.isProcessing=!0,cf.update.process(Yt),cf.preRender.process(Yt),cf.render.process(Yt),Yt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Cm.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(fb),this.sharedNodes.forEach(_b)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ct.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ct.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!hn(this.snapshot.measuredBox.x)&&!hn(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=Ot()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a&&this.instance){const l=i(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!r)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!vM(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,f=c!==this.prevTransformTemplateValue;o&&this.instance&&(a||Zr(this.latestValues)||f)&&(r(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),Mb(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var c;const{visualElement:o}=this.options;if(!o)return Ot();const a=o.measureViewportBox();if(!(((c=this.scroll)==null?void 0:c.wasRoot)||this.path.some(Eb))){const{scroll:f}=this.root;f&&(Si(a.x,f.offset.x),Si(a.y,f.offset.y))}return a}removeElementScroll(o){var l;const a=Ot();if(Zn(a,o),(l=this.scroll)!=null&&l.wasRoot)return a;for(let c=0;c<this.path.length;c++){const f=this.path[c],{scroll:d,options:u}=f;f!==this.root&&d&&u.layoutScroll&&(d.wasRoot&&Zn(a,o),Si(a.x,d.offset.x),Si(a.y,d.offset.y))}return a}applyTransform(o,a=!1,l){var f,d;const c=l||Ot();Zn(c,o);for(let u=0;u<this.path.length;u++){const p=this.path[u];!a&&p.options.layoutScroll&&p.scroll&&p!==p.root&&(Si(c.x,-p.scroll.offset.x),Si(c.y,-p.scroll.offset.y)),Zr(p.latestValues)&&uc(c,p.latestValues,(f=p.layout)==null?void 0:f.layoutBox)}return Zr(this.latestValues)&&uc(c,this.latestValues,(d=this.layout)==null?void 0:d.layoutBox),c}removeTransform(o){var l;const a=Ot();Zn(a,o);for(let c=0;c<this.path.length;c++){const f=this.path[c];if(!Zr(f.latestValues))continue;let d;f.instance&&(gh(f.latestValues)&&f.updateSnapshot(),d=Ot(),Zn(d,f.measurePageBox())),rv(a,f.latestValues,(l=f.snapshot)==null?void 0:l.layoutBox,d)}return Zr(this.latestValues)&&rv(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Yt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var p;const a=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=a.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=a.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=a.isSharedProjectionDirty);const l=!!this.resumingFrom||this!==a;if(!(o||l&&this.isSharedProjectionDirty||this.isProjectionDirty||(p=this.parent)!=null&&p.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:f,layoutId:d}=this.options;if(!this.layout||!(f||d))return;this.resolvedRelativeTargetAt=Yt.timestamp;const u=this.getClosestProjectingParent();u&&this.linkedParentVersion!==u.layoutVersion&&!u.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&u&&u.layout?this.createRelativeTarget(u,this.layout.layoutBox,u.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Ot(),this.targetWithTransforms=Ot()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),WR(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Zn(this.target,this.layout.layoutBox),sM(this.target,this.targetDelta)):Zn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&u&&!!u.resumingFrom==!!this.resumingFrom&&!u.options.layoutScroll&&u.target&&this.animationProgress!==1?this.createRelativeTarget(u,this.target,u.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||gh(this.parent.latestValues)||rM(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(o,a,l){this.relativeParent=o,this.linkedParentVersion=o.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ot(),this.relativeTargetOrigin=Ot(),Qc(this.relativeTargetOrigin,a,l,this.options.layoutAnchor||void 0),Zn(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var m;const o=this.getLead(),a=!!this.resumingFrom||this!==o;let l=!0;if((this.isProjectionDirty||(m=this.parent)!=null&&m.isProjectionDirty)&&(l=!1),a&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(l=!1),this.resolvedRelativeTargetAt===Yt.timestamp&&(l=!1),l)return;const{layout:c,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||f))return;Zn(this.layoutCorrected,this.layout.layoutBox);const d=this.treeScale.x,u=this.treeScale.y;xR(this.layoutCorrected,this.treeScale,this.path,a),o.layout&&!o.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(o.target=o.layout.layoutBox,o.targetWithTransforms=Ot());const{target:p}=o;if(!p){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Q0(this.prevProjectionDelta.x,this.projectionDelta.x),Q0(this.prevProjectionDelta.y,this.projectionDelta.y)),ma(this.projectionDelta,this.layoutCorrected,p,this.latestValues),(this.treeScale.x!==d||this.treeScale.y!==u||!cv(this.projectionDelta.x,this.prevProjectionDelta.x)||!cv(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",p))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)==null||a.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=to(),this.projectionDelta=to(),this.projectionDeltaWithTransform=to()}setAnimationOrigin(o,a=!1,l){const c=this.snapshot,f=c?c.latestValues:{},d={...this.latestValues},u=to();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const p=Ot(),m=c?c.source:void 0,M=this.layout?this.layout.source:void 0,g=m!==M,h=this.getStack(),v=!h||h.members.length<=1,y=!!(g&&!v&&this.options.crossfade===!0&&!this.path.some(yb));this.animationProgress=0;let x;const E=l==null?void 0:l.interpolateProjection(o);this.mixTargetDelta=w=>{const C=w/1e3,_=E==null?void 0:E(C);_?(u.x.translate=_.x,u.x.scale=lt(o.x.scale,1,C),u.x.origin=o.x.origin,u.x.originPoint=o.x.originPoint,u.y.translate=_.y,u.y.scale=lt(o.y.scale,1,C),u.y.origin=o.y.origin,u.y.originPoint=o.y.originPoint):(gv(u.x,o.x,C),gv(u.y,o.y,C)),this.setTargetDelta(u),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Qc(p,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),xb(this.relativeTarget,this.relativeTargetOrigin,p,C),x&&qR(this.relativeTarget,x)&&(this.isProjectionDirty=!1),x||(x=Ot()),Zn(x,this.relativeTarget)),g&&(this.animationValues=d,ZR(d,f,this.latestValues,C,y,v)),_&&_.rotate!==void 0&&(this.animationValues||(this.animationValues=d),this.animationValues.pathRotation=_.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=C},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){var a,l,c;this.notifyListeners("animationStart"),(a=this.currentAnimation)==null||a.stop(),(c=(l=this.resumingFrom)==null?void 0:l.currentAnimation)==null||c.stop(),this.pendingAnimation&&(Or(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ct.update(()=>{dc.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=yo(0)),this.motionValue.jump(0,!1),this.currentAnimation=eb(this.motionValue,[0,1e3],{...o,velocity:0,isSync:!0,onUpdate:f=>{this.mixTargetDelta(f),o.onUpdate&&o.onUpdate(f)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(sb),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:f}=o;if(!(!a||!l||!c)){if(this!==o&&this.layout&&c&&MM(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||Ot();const d=hn(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+d;const u=hn(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+u}Zn(a,l),uc(a,f),ma(this.projectionDeltaWithTransform,this.layoutCorrected,a,f)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new rb),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var a;const{layoutId:o}=this.options;return o?((a=this.getStack())==null?void 0:a.lead)||this:this}getPrevLead(){var a;const{layoutId:o}=this.options;return o?(a=this.getStack())==null?void 0:a.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const c={};l.z&&_f("z",o,c,this.animationValues);for(let f=0;f<vf.length;f++)_f(`rotate${vf[f]}`,o,c,this.animationValues),_f(`skew${vf[f]}`,o,c,this.animationValues);o.render();for(const f in c)o.setStaticValue(f,c[f]),this.animationValues&&(this.animationValues[f]=c[f]);o.scheduleRender()}applyProjectionStyles(o,a){if(!this.instance||this.isSVG)return;if(!this.isVisible){o.visibility="hidden";return}const l=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,o.visibility="",o.opacity="",o.pointerEvents=fc(a==null?void 0:a.pointerEvents)||"",o.transform=l?l(this.latestValues,""):"none";return}const c=this.getLead();if(!this.projectionDelta||!this.layout||!c.target){this.options.layoutId&&(o.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,o.pointerEvents=fc(a==null?void 0:a.pointerEvents)||""),this.hasProjected&&!Zr(this.latestValues)&&(o.transform=l?l({},""):"none",this.hasProjected=!1);return}o.visibility="";const f=c.animationValues||c.latestValues;this.applyTransformsToTarget();let d=YR(this.projectionDeltaWithTransform,this.treeScale,f);l&&(d=l(f,d)),o.transform=d;const{x:u,y:p}=this.projectionDelta;o.transformOrigin=`${u.origin*100}% ${p.origin*100}% 0`,c.animationValues?o.opacity=c===this?f.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:f.opacityExit:o.opacity=c===this?f.opacity!==void 0?f.opacity:"":f.opacityExit!==void 0?f.opacityExit:0;for(const m in _h){if(f[m]===void 0)continue;const{correct:M,applyTo:g,isCSSVariable:h}=_h[m],v=d==="none"?f[m]:M(f[m],c);if(g){const y=g.length;for(let x=0;x<y;x++)o[g[x]]=v}else h?this.options.visualElement.renderState.vars[m]=v:o[m]=v}this.options.layoutId&&(o.pointerEvents=c===this?fc(a==null?void 0:a.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)==null?void 0:a.stop()}),this.root.nodes.forEach(hv),this.root.sharedNodes.clear()}}}function ab(t){t.updateLayout()}function lb(t){var n;const e=((n=t.resumeFrom)==null?void 0:n.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&e&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:r}=t.layout,{animationType:s}=t.options,o=e.source!==t.layout.source;if(s==="size")yi(d=>{const u=o?e.measuredBox[d]:e.layoutBox[d],p=hn(u);u.min=i[d].min,u.max=u.min+p});else if(s==="x"||s==="y"){const d=s==="x"?"y":"x";xh(o?e.measuredBox[d]:e.layoutBox[d],i[d])}else MM(s,e.layoutBox,i)&&yi(d=>{const u=o?e.measuredBox[d]:e.layoutBox[d],p=hn(i[d]);u.max=u.min+p,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[d].max=t.relativeTarget[d].min+p)});const a=to();ma(a,i,e.layoutBox);const l=to();o?ma(l,t.applyTransform(r,!0),e.measuredBox):ma(l,i,e.layoutBox);const c=!vM(a);let f=!1;if(!t.resumeFrom){const d=t.getClosestProjectingParent();if(d&&!d.resumeFrom){const{snapshot:u,layout:p}=d;if(u&&p){const m=t.options.layoutAnchor||void 0,M=Ot();Qc(M,e.layoutBox,u.layoutBox,m);const g=Ot();Qc(g,i,p.layoutBox,m),_M(M,g)||(f=!0),d.options.layoutRoot&&(t.relativeTarget=g,t.relativeTargetOrigin=M,t.relativeParent=d)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:e,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeLayoutChanged:f})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function cb(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function ub(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function fb(t){t.clearSnapshot()}function hv(t){t.clearMeasurements()}function db(t){t.isLayoutDirty=!0,t.updateLayout()}function pv(t){t.isLayoutDirty=!1}function hb(t){t.isAnimationBlocked&&t.layout&&!t.isLayoutDirty&&(t.snapshot=t.layout,t.isLayoutDirty=!0)}function pb(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function mv(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function mb(t){t.resolveTargetDelta()}function gb(t){t.calcProjection()}function vb(t){t.resetSkewAndRotation()}function _b(t){t.removeLeadSnapshot()}function gv(t,e,n){t.translate=lt(e.translate,0,n),t.scale=lt(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function vv(t,e,n,i){t.min=lt(e.min,n.min,i),t.max=lt(e.max,n.max,i)}function xb(t,e,n,i){vv(t.x,e.x,n.x,i),vv(t.y,e.y,n.y,i)}function yb(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const Sb={duration:.45,ease:[.4,0,.1,1]},_v=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),xv=_v("applewebkit/")&&!_v("chrome/")?Math.round:$n;function yv(t){t.min=xv(t.min),t.max=xv(t.max)}function Mb(t){yv(t.x),yv(t.y)}function MM(t,e,n){return t==="position"||t==="preserve-aspect"&&!GR(lv(e),lv(n),.2)}function Eb(t){var e;return t!==t.root&&((e=t.scroll)==null?void 0:e.wasRoot)}const Tb=SM({attachResizeListener:(t,e)=>Oa(t,"resize",e),measureScroll:()=>{var t,e;return{x:document.documentElement.scrollLeft||((t=document.body)==null?void 0:t.scrollLeft)||0,y:document.documentElement.scrollTop||((e=document.body)==null?void 0:e.scrollTop)||0}},checkIsScrollRoot:()=>!0}),xf={current:void 0},EM=SM({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!xf.current){const t=new Tb({});t.mount(window),t.setOptions({layoutScroll:!0}),xf.current=t}return xf.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),Im=J.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function Sv(t,e){if(typeof t=="function")return t(e);t!=null&&(t.current=e)}function wb(...t){return e=>{let n=!1;const i=t.map(r=>{const s=Sv(r,e);return!n&&typeof s=="function"&&(n=!0),s});if(n)return()=>{for(let r=0;r<i.length;r++){const s=i[r];typeof s=="function"?s():Sv(t[r],null)}}}}function Ab(...t){return J.useCallback(wb(...t),t)}class Cb extends J.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(oc(n)&&e.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const i=n.offsetParent,r=oc(i)&&i.offsetWidth||0,s=oc(i)&&i.offsetHeight||0,o=getComputedStyle(n),a=this.props.sizeRef.current;a.height=parseFloat(o.height),a.width=parseFloat(o.width),a.top=n.offsetTop,a.left=n.offsetLeft,a.right=r-a.width-a.left,a.bottom=s-a.height-a.top,a.direction=o.direction}return null}componentDidUpdate(){}render(){return this.props.children}}function Rb({children:t,isPresent:e,anchorX:n,anchorY:i,root:r,pop:s}){var u;const o=J.useId(),a=J.useRef(null),l=J.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0,direction:"ltr"}),{nonce:c}=J.useContext(Im),f=((u=t.props)==null?void 0:u.ref)??(t==null?void 0:t.ref),d=Ab(a,f);return J.useInsertionEffect(()=>{const{width:p,height:m,top:M,left:g,right:h,bottom:v,direction:y}=l.current;if(e||s===!1||!a.current||!p||!m)return;const x=y==="rtl",E=n==="left"?x?`right: ${h}`:`left: ${g}`:x?`left: ${g}`:`right: ${h}`,w=i==="bottom"?`bottom: ${v}`:`top: ${M}`;a.current.dataset.motionPopId=o;const C=document.createElement("style");c&&(C.nonce=c);const _=r??document.head;return _.appendChild(C),C.sheet&&C.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${p}px !important;
            height: ${m}px !important;
            ${E}px !important;
            ${w}px !important;
          }
        `),()=>{var A;(A=a.current)==null||A.removeAttribute("data-motion-pop-id"),_.contains(C)&&_.removeChild(C)}},[e]),P.jsx(Cb,{isPresent:e,childRef:a,sizeRef:l,pop:s,children:s===!1?t:J.cloneElement(t,{ref:d})})}const bb=({children:t,initial:e,isPresent:n,onExitComplete:i,custom:r,presenceAffectsLayout:s,mode:o,anchorX:a,anchorY:l,root:c})=>{const f=lm(Pb),d=J.useId(),u=J.useRef(n),p=J.useRef(i);cm(()=>{u.current=n,p.current=i});let m=!0,M=J.useMemo(()=>(m=!1,{id:d,initial:e,isPresent:n,custom:r,onExitComplete:g=>{f.set(g,!0);for(const h of f.values())if(!h)return;i&&i()},register:g=>(f.set(g,!1),()=>{var h;f.delete(g),!u.current&&!f.size&&((h=p.current)==null||h.call(p))})}),[n,f,i]);return s&&m&&(M={...M}),J.useMemo(()=>{f.forEach((g,h)=>f.set(h,!1))},[n]),J.useEffect(()=>{!n&&!f.size&&i&&i()},[n]),t=P.jsx(Rb,{pop:o==="popLayout",isPresent:n,anchorX:a,anchorY:l,root:c,children:t}),P.jsx(Eu.Provider,{value:M,children:t})};function Pb(){return new Map}function TM(t=!0){const e=J.useContext(Eu);if(e===null)return[!0,null];const{isPresent:n,onExitComplete:i,register:r}=e,s=J.useId();J.useEffect(()=>{if(t)return r(s)},[t]);const o=J.useCallback(()=>t&&i&&i(s),[s,i,t]);return!n&&i?[!1,o]:[!0]}const Sl=t=>t.key||"";function Mv(t){const e=[];return J.Children.forEach(t,n=>{J.isValidElement(n)&&e.push(n)}),e}const Ev=({children:t,custom:e,initial:n=!0,onExitComplete:i,presenceAffectsLayout:r=!0,mode:s="sync",propagate:o=!1,anchorX:a="left",anchorY:l="top",root:c})=>{const[f,d]=TM(o),u=J.useMemo(()=>Mv(t),[t]),p=o&&!f?[]:u.map(Sl),m=J.useRef(!0),M=J.useRef(u),g=lm(()=>new Map),h=J.useRef(new Set),[v,y]=J.useState(u),[x,E]=J.useState(u);cm(()=>{m.current=!1,M.current=u;for(let _=0;_<x.length;_++){const A=Sl(x[_]);p.includes(A)?(g.delete(A),h.current.delete(A)):g.get(A)!==!0&&g.set(A,!1)}},[x,p.length,p.join("-")]);const w=[];if(u!==v){let _=[...u];for(let A=0;A<x.length;A++){const b=x[A],D=Sl(b);p.includes(D)||(_.splice(A,0,b),w.push(b))}return s==="wait"&&w.length&&(_=w),E(Mv(_)),y(u),null}const{forceRender:C}=J.useContext(am);return P.jsx(P.Fragment,{children:x.map(_=>{const A=Sl(_),b=o&&!f?!1:u===x||p.includes(A),D=()=>{if(h.current.has(A))return;if(g.has(A))h.current.add(A),g.set(A,!0);else return;let U=!0;g.forEach($=>{$||(U=!1)}),U&&(C==null||C(),E(M.current),o&&(d==null||d()),i&&i())};return P.jsx(bb,{isPresent:b,initial:!m.current||n?void 0:!1,custom:e,presenceAffectsLayout:r,mode:s,root:c,onExitComplete:b?void 0:D,anchorX:a,anchorY:l,children:_},A)})})},wM=J.createContext({strict:!1}),Tv={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let wv=!1;function Db(){if(wv)return;const t={};for(const e in Tv)t[e]={isEnabled:n=>Tv[e].some(i=>!!n[i])};tM(t),wv=!0}function AM(){return Db(),mR()}function Lb(t){const e=AM();for(const n in t)e[n]={...e[n],...t[n]};tM(e)}const Nb=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Jc(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||Nb.has(t)}let CM=t=>!Jc(t);function Ib(t){typeof t=="function"&&(CM=e=>e.startsWith("on")?!Jc(e):t(e))}try{Ib(require("@emotion/is-prop-valid").default)}catch{}function Ub(t,e,n){const i={};for(const r in t)r==="values"&&typeof t.values=="object"||Zt(t[r])||(CM(r)||n===!0&&Jc(r)||!e&&!Jc(r)||t.draggable&&r.startsWith("onDrag"))&&(i[r]=t[r]);return i}const Cu=J.createContext({});function Fb(t,e){if(Au(t)){const{initial:n,animate:i}=t;return{initial:n===!1||Fa(n)?n:void 0,animate:Fa(i)?i:void 0}}return t.inherit!==!1?e:{}}function Ob(t){const{initial:e,animate:n}=Fb(t,J.useContext(Cu));return J.useMemo(()=>({initial:e,animate:n}),[Av(e),Av(n)])}function Av(t){return Array.isArray(t)?t.join(" "):t}const Um=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function RM(t,e,n){for(const i in e)!Zt(e[i])&&!lM(i,n)&&(t[i]=e[i])}function kb({transformTemplate:t},e){return J.useMemo(()=>{const n=Um();return Lm(n,e,t),Object.assign({},n.vars,n.style)},[e])}function Bb(t,e){const n=t.style||{},i={};return RM(i,n,t),Object.assign(i,kb(t,e)),i}function Vb(t,e){const n={},i=Bb(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=i,n}const bM=()=>({...Um(),attrs:{}});function zb(t,e,n,i){const r=J.useMemo(()=>{const s=bM();return cM(s,e,fM(i),t.transformTemplate,t.style),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};RM(s,t.style,t),r.style={...s,...r.style}}return r}const Hb=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Fm(t){return typeof t!="string"||t.includes("-")?!1:!!(Hb.indexOf(t)>-1||/[A-Z]/u.test(t))}function Gb(t,e,n,{latestValues:i},r,s=!1,o){const l=(o??Fm(t)?zb:Vb)(e,i,r,t),c=Ub(e,typeof t=="string",s),f=t!==J.Fragment?{...c,...l,ref:n}:{},{children:d}=e,u=J.useMemo(()=>Zt(d)?d.get():d,[d]);return J.createElement(t,{...f,children:u})}function Wb({scrapeMotionValuesFromProps:t,createRenderState:e},n,i,r){return{latestValues:Xb(n,i,r,t),renderState:e()}}function Xb(t,e,n,i){const r={},s=i(t,{});for(const u in s)r[u]=fc(s[u]);let{initial:o,animate:a}=t;const l=Au(t),c=JS(t);e&&c&&!l&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let f=n?n.initial===!1:!1;f=f||o===!1;const d=f?a:o;if(d&&typeof d!="boolean"&&!wu(d)){const u=Array.isArray(d)?d:[d];for(let p=0;p<u.length;p++){const m=Tm(t,u[p]);if(m){const{transitionEnd:M,transition:g,...h}=m;for(const v in h){let y=h[v];if(Array.isArray(y)){const x=f?y.length-1:0;y=y[x]}y!==null&&(r[v]=y)}for(const v in M)r[v]=M[v]}}}return r}const PM=t=>(e,n)=>{const i=J.useContext(Cu),r=J.useContext(Eu),s=()=>Wb(t,e,i,r);return n?s():lm(s)},jb=PM({scrapeMotionValuesFromProps:Nm,createRenderState:Um}),$b=PM({scrapeMotionValuesFromProps:dM,createRenderState:bM}),qb=Symbol.for("motionComponentSymbol");function Yb(t,e,n){const i=J.useRef(n);J.useInsertionEffect(()=>{i.current=n});const r=J.useRef(null);return J.useCallback(s=>{var a;s&&((a=t.onMount)==null||a.call(t,s)),e&&(s?e.mount(s):e.unmount());const o=i.current;if(typeof o=="function")if(s){const l=o(s);typeof l=="function"&&(r.current=l)}else r.current?(r.current(),r.current=null):o(s);else o&&(o.current=s)},[e])}const DM=J.createContext({});function Vs(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function Kb(t,e,n,i,r,s){var y,x;const{visualElement:o}=J.useContext(Cu),a=J.useContext(wM),l=J.useContext(Eu),c=J.useContext(Im),f=c.reducedMotion,d=c.skipAnimations,u=J.useRef(null),p=J.useRef(!1);i=i||a.renderer,!u.current&&i&&(u.current=i(t,{visualState:e,parent:o,props:n,presenceContext:l,blockInitialAnimation:l?l.initial===!1:!1,reducedMotionConfig:f,skipAnimations:d,isSVG:s}),p.current&&u.current&&(u.current.manuallyAnimateOnMount=!0));const m=u.current,M=J.useContext(DM);m&&!m.projection&&r&&(m.type==="html"||m.type==="svg")&&Zb(u.current,n,r,M);const g=J.useRef(!1);J.useInsertionEffect(()=>{m&&g.current&&m.update(n,l)});const h=n[zS],v=J.useRef(!!h&&typeof window<"u"&&!((y=window.MotionHandoffIsComplete)!=null&&y.call(window,h))&&((x=window.MotionHasOptimisedAnimation)==null?void 0:x.call(window,h)));return cm(()=>{p.current=!0,m&&(g.current=!0,window.MotionIsMounted=!0,m.updateFeatures(),m.scheduleRenderMicrotask(),v.current&&m.animationState&&m.animationState.animateChanges())}),J.useEffect(()=>{m&&(!v.current&&m.animationState&&m.animationState.animateChanges(),v.current&&(queueMicrotask(()=>{var E;(E=window.MotionHandoffMarkAsComplete)==null||E.call(window,h)}),v.current=!1),m.enteringChildren=void 0)}),m}function Zb(t,e,n,i){const{layoutId:r,layout:s,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:c,layoutAnchor:f,layoutCrossfade:d}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:LM(t.parent)),t.projection.setOptions({layoutId:r,layout:s,alwaysMeasureLayout:!!o||a&&Vs(a),visualElement:t,animationType:typeof s=="string"?s:"both",initialPromotionConfig:i,crossfade:d,layoutScroll:l,layoutRoot:c,layoutAnchor:f})}function LM(t){if(t)return t.options.allowProjection!==!1?t.projection:LM(t.parent)}function yf(t,{forwardMotionProps:e=!1,type:n}={},i,r){i&&Lb(i);const s=n?n==="svg":Fm(t),o=s?$b:jb;function a(c,f){let d;const u={...J.useContext(Im),...c,layoutId:Qb(c)},{isStatic:p}=u,m=Ob(c),M=o(c,p);if(!p&&typeof window<"u"){Jb();const g=eP(u);d=g.MeasureLayout,m.visualElement=Kb(t,M,u,r,g.ProjectionNode,s)}return P.jsxs(Cu.Provider,{value:m,children:[d&&m.visualElement?P.jsx(d,{visualElement:m.visualElement,...u}):null,Gb(t,c,Yb(M,m.visualElement,f),M,p,e,s)]})}a.displayName=`motion.${typeof t=="string"?t:`create(${t.displayName??t.name??""})`}`;const l=J.forwardRef(a);return l[qb]=t,l}function Qb({layoutId:t}){const e=J.useContext(am).id;return e&&t!==void 0?e+"-"+t:t}function Jb(t,e){J.useContext(wM).strict}function eP(t){const e=AM(),{drag:n,layout:i}=e;if(!n&&!i)return{};const r={...n,...i};return{MeasureLayout:n!=null&&n.isEnabled(t)||i!=null&&i.isEnabled(t)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function tP(t,e){if(typeof Proxy>"u")return yf;const n=new Map,i=(s,o)=>yf(s,o,t,e),r=(s,o)=>i(s,o);return new Proxy(r,{get:(s,o)=>o==="create"?i:(n.has(o)||n.set(o,yf(o,void 0,t,e)),n.get(o))})}const nP=(t,e)=>e.isSVG??Fm(t)?new LR(e):new AR(e,{allowProjection:t!==J.Fragment});class iP extends Hr{constructor(e){super(e),e.animationState||(e.animationState=OR(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();wu(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)==null||e.call(this)}}let rP=0;class sP extends Hr{constructor(){super(...arguments),this.id=rP++,this.isExitComplete=!1}update(){var s;if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;if(e&&i===!1){if(this.isExitComplete){const{initial:o,custom:a}=this.node.getProps();if(typeof o=="string"||typeof o=="object"&&o!==null&&!Array.isArray(o)){const l=fs(this.node,o,a);if(l){const{transition:c,transitionEnd:f,...d}=l;for(const u in d)(s=this.node.getValue(u))==null||s.jump(d[u])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const r=this.node.animationState.setActive("exit",!e);n&&!e&&r.then(()=>{this.isExitComplete=!0,n(this.id)})}mount(){const{register:e,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const oP={animation:{Feature:iP},exit:{Feature:sP}};function qa(t){return{point:{x:t.pageX,y:t.pageY}}}const aP=t=>e=>Rm(e)&&t(e,qa(e));function ga(t,e,n,i){return Oa(t,e,aP(n),i)}const NM=({current:t})=>t?t.ownerDocument.defaultView:null,Cv=(t,e)=>Math.abs(t-e);function lP(t,e){const n=Cv(t.x,e.x),i=Cv(t.y,e.y);return Math.sqrt(n**2+i**2)}const Rv=new Set(["auto","scroll"]);class IM{constructor(e,n,{transformPagePoint:i,contextWindow:r=window,dragSnapToOrigin:s=!1,distanceThreshold:o=3,element:a}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=m=>{this.handleScroll(m.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=Ml(this.lastRawMoveEventInfo,this.transformPagePoint));const m=Sf(this.lastMoveEventInfo,this.history),M=this.startEvent!==null,g=lP(m.offset,{x:0,y:0})>=this.distanceThreshold;if(!M&&!g)return;const{point:h}=m,{timestamp:v}=Yt;this.history.push({...h,timestamp:v});const{onStart:y,onMove:x}=this.handlers;M||(y&&y(this.lastMoveEvent,m),this.startEvent=this.lastMoveEvent),x&&x(this.lastMoveEvent,m)},this.handlePointerMove=(m,M)=>{this.lastMoveEvent=m,this.lastRawMoveEventInfo=M,this.lastMoveEventInfo=Ml(M,this.transformPagePoint),ct.update(this.updatePoint,!0)},this.handlePointerUp=(m,M)=>{this.end();const{onEnd:g,onSessionEnd:h,resumeAnimation:v}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&v&&v(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const y=Sf(m.type==="pointercancel"?this.lastMoveEventInfo:Ml(M,this.transformPagePoint),this.history);this.startEvent&&g&&g(m,y),h&&h(m,y)},!Rm(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=i,this.distanceThreshold=o,this.contextWindow=r||window;const l=qa(e),c=Ml(l,this.transformPagePoint),{point:f}=c,{timestamp:d}=Yt;this.history=[{...f,timestamp:d}];const{onSessionStart:u}=n;u&&u(e,Sf(c,this.history));const p={passive:!0,capture:!0};this.removeListeners=Xa(ga(this.contextWindow,"pointermove",this.handlePointerMove,p),ga(this.contextWindow,"pointerup",this.handlePointerUp,p),ga(this.contextWindow,"pointercancel",this.handlePointerUp,p)),a&&this.startScrollTracking(a)}startScrollTracking(e){let n=e.parentElement;for(;n;){const i=getComputedStyle(n);(Rv.has(i.overflowX)||Rv.has(i.overflowY))&&this.scrollPositions.set(n,{x:n.scrollLeft,y:n.scrollTop}),n=n.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(e){const n=this.scrollPositions.get(e);if(!n)return;const i=e===window,r=i?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},s={x:r.x-n.x,y:r.y-n.y};s.x===0&&s.y===0||(i?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=s.x,this.lastMoveEventInfo.point.y+=s.y):this.history.length>0&&(this.history[0].x-=s.x,this.history[0].y-=s.y),this.scrollPositions.set(e,r),ct.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Or(this.updatePoint)}}function Ml(t,e){return e?{point:e(t.point)}:t}function bv(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Sf({point:t},e){return{point:t,delta:bv(t,UM(e)),offset:bv(t,cP(e)),velocity:uP(e,.1)}}function cP(t){return t[0]}function UM(t){return t[t.length-1]}function uP(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null;const r=UM(t);for(;n>=0&&(i=t[n],!(r.timestamp-i.timestamp>Nn(e)));)n--;if(!i)return{x:0,y:0};i===t[0]&&t.length>2&&r.timestamp-i.timestamp>Nn(e)*2&&(i=t[1]);const s=Xn(r.timestamp-i.timestamp);if(s===0)return{x:0,y:0};const o={x:(r.x-i.x)/s,y:(r.y-i.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function fP(t,{min:e,max:n},i){return e!==void 0&&t<e?t=i?lt(e,t,i.min):Math.max(t,e):n!==void 0&&t>n&&(t=i?lt(n,t,i.max):Math.min(t,n)),t}function Pv(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function dP(t,{top:e,left:n,bottom:i,right:r}){return{x:Pv(t.x,n,r),y:Pv(t.y,e,i)}}function Dv(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}function hP(t,e){return{x:Dv(t.x,e.x),y:Dv(t.y,e.y)}}function pP(t,e){let n=.5;const i=hn(t),r=hn(e);return r>i?n=Ia(e.min,e.max-i,t.min):i>r&&(n=Ia(t.min,t.max-r,e.min)),Li(0,1,n)}function mP(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const yh=.35;function gP(t=yh){return t===!1?t=0:t===!0&&(t=yh),{x:Lv(t,"left","right"),y:Lv(t,"top","bottom")}}function Lv(t,e,n){return{min:Nv(t,e),max:Nv(t,n)}}function Nv(t,e){return typeof t=="number"?t:t[e]||0}const vP=new WeakMap;class _P{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Ot(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:n=!1,distanceThreshold:i}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const s=d=>{n&&this.snapToCursor(qa(d).point),this.stopAnimation()},o=(d,u)=>{const{drag:p,dragPropagation:m,onDragStart:M}=this.getProps();if(p&&!m&&(this.openDragLock&&this.openDragLock(),this.openDragLock=XC(p),!this.openDragLock))return;this.latestPointerEvent=d,this.latestPanInfo=u,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),yi(h=>{let v=this.getAxisMotionValue(h).get()||0;if(Ri.test(v)){const{projection:y}=this.visualElement;if(y&&y.layout){const x=y.layout.layoutBox[h];x&&(v=hn(x)*(parseFloat(v)/100))}}this.originPoint[h]=v}),M&&ct.update(()=>M(d,u),!1,!0),uh(this.visualElement,"transform");const{animationState:g}=this.visualElement;g&&g.setActive("whileDrag",!0)},a=(d,u)=>{this.latestPointerEvent=d,this.latestPanInfo=u;const{dragPropagation:p,dragDirectionLock:m,onDirectionLock:M,onDrag:g}=this.getProps();if(!p&&!this.openDragLock)return;const{offset:h}=u;if(m&&this.currentDirection===null){this.currentDirection=yP(h),this.currentDirection!==null&&M&&M(this.currentDirection);return}this.updateAxis("x",u.point,h),this.updateAxis("y",u.point,h),this.visualElement.render(),g&&ct.update(()=>g(d,u),!1,!0)},l=(d,u)=>{this.latestPointerEvent=d,this.latestPanInfo=u,this.stop(d,u),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>{const{dragSnapToOrigin:d}=this.getProps();(d||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:f}=this.getProps();this.panSession=new IM(e,{onSessionStart:s,onStart:o,onMove:a,onSessionEnd:l,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:f,distanceThreshold:i,contextWindow:NM(this.visualElement),element:this.visualElement.current})}stop(e,n){const i=e||this.latestPointerEvent,r=n||this.latestPanInfo,s=this.isDragging;if(this.cancel(),!s||!r||!i)return;const{velocity:o}=r;this.startAnimation(o);const{onDragEnd:a}=this.getProps();a&&ct.postRender(()=>a(i,r))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,n,i){const{drag:r}=this.getProps();if(!i||!El(e,r,this.currentDirection))return;const s=this.getAxisMotionValue(e);let o=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(o=fP(o,this.constraints[e],this.elastic[e])),s.set(o)}resolveConstraints(){var s;const{dragConstraints:e,dragElastic:n}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(s=this.visualElement.projection)==null?void 0:s.layout,r=this.constraints;e&&Vs(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&i?this.constraints=dP(i.layoutBox,e):this.constraints=!1,this.elastic=gP(n),r!==this.constraints&&!Vs(e)&&i&&this.constraints&&!this.hasMutatedConstraints&&yi(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=mP(i.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!Vs(e))return!1;const i=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;r.root&&(r.root.scroll=void 0,r.root.updateScroll());const s=yR(i,r.root,this.visualElement.getTransformPagePoint());let o=hP(r.layout.layoutBox,s);if(n){const a=n(vR(o));this.hasMutatedConstraints=!!a,a&&(o=iM(a))}return o}startAnimation(e){const{drag:n,dragMomentum:i,dragElastic:r,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=yi(f=>{if(!El(f,n,this.currentDirection))return;let d=l&&l[f]||{};(o===!0||o===f)&&(d={min:0,max:0});const u=r?200:1e6,p=r?40:1e7,m={type:"inertia",velocity:i?e[f]:0,bounceStiffness:u,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...s,...d};return this.startAxisValueAnimation(f,m)});return Promise.all(c).then(a)}startAxisValueAnimation(e,n){const i=this.getAxisMotionValue(e);return uh(this.visualElement,e),i.start(Em(e,i,0,n,this.visualElement,!1))}stopAnimation(){yi(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,r=this.visualElement.getProps()[n];return r||this.visualElement.getValue(e,this.visualElement.latestValues[e]??0)}snapToCursor(e){yi(n=>{const{drag:i}=this.getProps();if(!El(n,i,this.currentDirection))return;const{projection:r}=this.visualElement,s=this.getAxisMotionValue(n);if(r&&r.layout){const{min:o,max:a}=r.layout.layoutBox[n],l=s.get()||0;s.set(e[n]-lt(o,a,.5)+l)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!Vs(n)||!i||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};yi(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();r[o]=pP({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.constraints=!1,this.resolveConstraints(),yi(o=>{if(!El(o,e,null))return;const a=this.getAxisMotionValue(o),{min:l,max:c}=this.constraints[o];a.set(lt(l,c,r[o]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;vP.set(this.visualElement,this);const e=this.visualElement.current,n=ga(e,"pointerdown",c=>{const{drag:f,dragListener:d=!0}=this.getProps(),u=c.target,p=u!==e&&ZC(u);f&&d&&!p&&this.start(c)});let i;const r=()=>{const{dragConstraints:c}=this.getProps();Vs(c)&&c.current&&(this.constraints=this.resolveRefConstraints(),i||(i=xP(e,c.current,()=>this.scalePositionWithinConstraints())))},{projection:s}=this.visualElement,o=s.addEventListener("measure",r);s&&!s.layout&&(s.root&&s.root.updateScroll(),s.updateLayout()),ct.read(r);const a=Oa(window,"resize",()=>this.scalePositionWithinConstraints()),l=s.addEventListener("didUpdate",({delta:c,hasLayoutChanged:f})=>{this.isDragging&&f&&(yi(d=>{const u=this.getAxisMotionValue(d);u&&(this.originPoint[d]+=c[d].translate,u.set(u.get()+c[d].translate))}),this.visualElement.render())});return()=>{a(),n(),o(),l&&l(),i&&i()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:r=!1,dragConstraints:s=!1,dragElastic:o=yh,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:i,dragPropagation:r,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function Iv(t){let e=!0;return()=>{if(e){e=!1;return}t()}}function xP(t,e,n){const i=V0(t,Iv(n)),r=V0(e,Iv(n));return()=>{i(),r()}}function El(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function yP(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class SP extends Hr{constructor(e){super(e),this.removeGroupControls=$n,this.removeListeners=$n,this.controls=new _P(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||$n}update(){const{dragControls:e}=this.node.getProps(),{dragControls:n}=this.node.prevProps||{};e!==n&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const Mf=t=>(e,n)=>{t&&ct.update(()=>t(e,n),!1,!0)};class MP extends Hr{constructor(){super(...arguments),this.removePointerDownListener=$n}onPointerDown(e){this.session=new IM(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:NM(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:i,onPanEnd:r}=this.node.getProps();return{onSessionStart:Mf(e),onStart:Mf(n),onMove:Mf(i),onEnd:(s,o)=>{delete this.session,r&&ct.postRender(()=>r(s,o))}}}mount(){this.removePointerDownListener=ga(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Ef=!1;class EP extends J.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i,layoutId:r}=this.props,{projection:s}=e;s&&(n.group&&n.group.add(s),i&&i.register&&r&&i.register(s),Ef&&s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),dc.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:i,drag:r,isPresent:s}=this.props,{projection:o}=i;return o&&(o.isPresent=s,e.layoutDependency!==n&&o.setOptions({...o.options,layoutDependency:n}),Ef=!0,r||e.layoutDependency!==n||n===void 0||e.isPresent!==s?o.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?o.promote():o.relegate()||ct.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:e,layoutAnchor:n}=this.props,{projection:i}=e;i&&(i.options.layoutAnchor=n,i.root.didUpdate(),Cm.postRender(()=>{!i.currentAnimation&&i.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:r}=e;Ef=!0,r&&(r.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(r),i&&i.deregister&&i.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function FM(t){const[e,n]=TM(),i=J.useContext(am);return P.jsx(EP,{...t,layoutGroup:i,switchLayoutGroup:J.useContext(DM),isPresent:e,safeToRemove:n})}const TP={pan:{Feature:MP},drag:{Feature:SP,ProjectionNode:EM,MeasureLayout:FM}};function Uv(t,e,n){const{props:i}=t;t.animationState&&i.whileHover&&t.animationState.setActive("whileHover",n==="Start");const r="onHover"+n,s=i[r];s&&ct.postRender(()=>s(e,qa(e)))}class wP extends Hr{mount(){const{current:e}=this.node;e&&(this.unmount=$C(e,(n,i)=>(Uv(this.node,i,"Start"),r=>Uv(this.node,r,"End"))))}unmount(){}}class AP extends Hr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Xa(Oa(this.node.current,"focus",()=>this.onFocus()),Oa(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Fv(t,e,n){const{props:i}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&i.whileTap&&t.animationState.setActive("whileTap",n==="Start");const r="onTap"+(n==="End"?"":n),s=i[r];s&&ct.postRender(()=>s(e,qa(e)))}class CP extends Hr{mount(){const{current:e}=this.node;if(!e)return;const{globalTapTarget:n,propagate:i}=this.node.props;this.unmount=JC(e,(r,s)=>(Fv(this.node,s,"Start"),(o,{success:a})=>Fv(this.node,o,a?"End":"Cancel")),{useGlobalTarget:n,stopPropagation:(i==null?void 0:i.tap)===!1})}unmount(){}}const Sh=new WeakMap,Tf=new WeakMap,RP=t=>{const e=Sh.get(t.target);e&&e(t)},bP=t=>{t.forEach(RP)};function PP({root:t,...e}){const n=t||document;Tf.has(n)||Tf.set(n,{});const i=Tf.get(n),r=JSON.stringify(e);return i[r]||(i[r]=new IntersectionObserver(bP,{root:t,...e})),i[r]}function DP(t,e,n){const i=PP(e);return Sh.set(t,n),i.observe(t),()=>{Sh.delete(t),i.unobserve(t)}}const LP={some:0,all:1};class NP extends Hr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var l;(l=this.stopObserver)==null||l.call(this);const{viewport:e={}}=this.node.getProps(),{root:n,margin:i,amount:r="some",once:s}=e,o={root:n?n.current:void 0,rootMargin:i,threshold:typeof r=="number"?r:LP[r]},a=c=>{const{isIntersecting:f}=c;if(this.isInView===f||(this.isInView=f,s&&!f&&this.hasEnteredView))return;f&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",f);const{onViewportEnter:d,onViewportLeave:u}=this.node.getProps(),p=f?d:u;p&&p(c)};this.stopObserver=DP(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(IP(e,n))&&this.startObserver()}unmount(){var e;(e=this.stopObserver)==null||e.call(this),this.hasEnteredView=!1,this.isInView=!1}}function IP({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const UP={inView:{Feature:NP},tap:{Feature:CP},focus:{Feature:AP},hover:{Feature:wP}},FP={layout:{ProjectionNode:EM,MeasureLayout:FM}},OP={...oP,...UP,...TP,...FP},Gi=tP(OP,nP);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Om="185",kP=0,Ov=1,BP=2,hc=1,VP=2,na=3,kr=0,wn=1,Wi=2,Yi=0,lo=1,kv=2,Bv=3,Vv=4,zP=5,Jr=100,HP=101,GP=102,WP=103,XP=104,jP=200,$P=201,qP=202,YP=203,Mh=204,Eh=205,KP=206,ZP=207,QP=208,JP=209,e2=210,t2=211,n2=212,i2=213,r2=214,Th=0,wh=1,Ah=2,So=3,Ch=4,Rh=5,bh=6,Ph=7,OM=0,s2=1,o2=2,bi=0,kM=1,BM=2,VM=3,zM=4,HM=5,GM=6,WM=7,XM=300,vs=301,Mo=302,wf=303,Af=304,Ru=306,Dh=1e3,$i=1001,Lh=1002,Qt=1003,a2=1004,Tl=1005,ln=1006,Cf=1007,os=1008,Gn=1009,jM=1010,$M=1011,ka=1012,km=1013,Ni=1014,Ti=1015,nr=1016,Bm=1017,Vm=1018,Ba=1020,qM=35902,YM=35899,KM=1021,ZM=1022,ai=1023,ir=1026,as=1027,QM=1028,zm=1029,_s=1030,Hm=1031,Gm=1033,pc=33776,mc=33777,gc=33778,vc=33779,Nh=35840,Ih=35841,Uh=35842,Fh=35843,Oh=36196,kh=37492,Bh=37496,Vh=37488,zh=37489,eu=37490,Hh=37491,Gh=37808,Wh=37809,Xh=37810,jh=37811,$h=37812,qh=37813,Yh=37814,Kh=37815,Zh=37816,Qh=37817,Jh=37818,ep=37819,tp=37820,np=37821,ip=36492,rp=36494,sp=36495,op=36283,ap=36284,tu=36285,lp=36286,l2=3200,zv=0,c2=1,Sr="",Pn="srgb",nu="srgb-linear",iu="linear",nt="srgb",As=7680,Hv=519,u2=512,f2=513,d2=514,Wm=515,h2=516,p2=517,Xm=518,m2=519,Gv=35044,Wv="300 es",wi=2e3,ru=2001;function g2(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function su(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function v2(){const t=su("canvas");return t.style.display="block",t}const Xv={};function jv(...t){const e="THREE."+t.shift();console.log(e,...t)}function JM(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ne(...t){t=JM(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function Ze(...t){t=JM(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function co(...t){const e=t.join(" ");e in Xv||(Xv[e]=!0,Ne(...t))}function _2(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const x2={[Th]:wh,[Ah]:bh,[Ch]:Ph,[So]:Rh,[wh]:Th,[bh]:Ah,[Ph]:Ch,[Rh]:So};class Ms{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Rf=Math.PI/180,cp=180/Math.PI;function Ya(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(sn[t&255]+sn[t>>8&255]+sn[t>>16&255]+sn[t>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[n&63|128]+sn[n>>8&255]+"-"+sn[n>>16&255]+sn[n>>24&255]+sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]).toLowerCase()}function qe(t,e,n){return Math.max(e,Math.min(n,t))}function y2(t,e){return(t%e+e)%e}function bf(t,e,n){return(1-n)*t+n*e}function Go(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function xn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Ym=class Ym{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=qe(this.x,e.x,n.x),this.y=qe(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=qe(this.x,e,n),this.y=qe(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ym.prototype.isVector2=!0;let Xe=Ym;class Do{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],f=i[r+2],d=i[r+3],u=s[o+0],p=s[o+1],m=s[o+2],M=s[o+3];if(d!==M||l!==u||c!==p||f!==m){let g=l*u+c*p+f*m+d*M;g<0&&(u=-u,p=-p,m=-m,M=-M,g=-g);let h=1-a;if(g<.9995){const v=Math.acos(g),y=Math.sin(v);h=Math.sin(h*v)/y,a=Math.sin(a*v)/y,l=l*h+u*a,c=c*h+p*a,f=f*h+m*a,d=d*h+M*a}else{l=l*h+u*a,c=c*h+p*a,f=f*h+m*a,d=d*h+M*a;const v=1/Math.sqrt(l*l+c*c+f*f+d*d);l*=v,c*=v,f*=v,d*=v}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],f=i[r+3],d=s[o],u=s[o+1],p=s[o+2],m=s[o+3];return e[n]=a*m+f*d+l*p-c*u,e[n+1]=l*m+f*u+c*d-a*p,e[n+2]=c*m+f*p+a*u-l*d,e[n+3]=f*m-a*d-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(r/2),d=a(s/2),u=l(i/2),p=l(r/2),m=l(s/2);switch(o){case"XYZ":this._x=u*f*d+c*p*m,this._y=c*p*d-u*f*m,this._z=c*f*m+u*p*d,this._w=c*f*d-u*p*m;break;case"YXZ":this._x=u*f*d+c*p*m,this._y=c*p*d-u*f*m,this._z=c*f*m-u*p*d,this._w=c*f*d+u*p*m;break;case"ZXY":this._x=u*f*d-c*p*m,this._y=c*p*d+u*f*m,this._z=c*f*m+u*p*d,this._w=c*f*d-u*p*m;break;case"ZYX":this._x=u*f*d-c*p*m,this._y=c*p*d+u*f*m,this._z=c*f*m-u*p*d,this._w=c*f*d+u*p*m;break;case"YZX":this._x=u*f*d+c*p*m,this._y=c*p*d+u*f*m,this._z=c*f*m-u*p*d,this._w=c*f*d-u*p*m;break;case"XZY":this._x=u*f*d-c*p*m,this._y=c*p*d-u*f*m,this._z=c*f*m+u*p*d,this._w=c*f*d+u*p*m;break;default:Ne("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],f=n[6],d=n[10],u=i+a+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(f-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(f-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-i*c,this._z=s*f+o*c+i*l-r*a,this._w=o*f-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),f=Math.sin(c);l=Math.sin(l*c)/f,n=Math.sin(n*c)/f,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Km=class Km{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion($v.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion($v.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),f=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*f,this.y=i+l*f+a*c-s*d,this.z=r+l*d+s*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=qe(this.x,e.x,n.x),this.y=qe(this.y,e.y,n.y),this.z=qe(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=qe(this.x,e,n),this.y=qe(this.y,e,n),this.z=qe(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Pf.copy(this).projectOnVector(e),this.sub(Pf)}reflect(e){return this.sub(Pf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Km.prototype.isVector3=!0;let W=Km;const Pf=new W,$v=new Do,Zm=class Zm{constructor(e,n,i,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],d=i[7],u=i[2],p=i[5],m=i[8],M=r[0],g=r[3],h=r[6],v=r[1],y=r[4],x=r[7],E=r[2],w=r[5],C=r[8];return s[0]=o*M+a*v+l*E,s[3]=o*g+a*y+l*w,s[6]=o*h+a*x+l*C,s[1]=c*M+f*v+d*E,s[4]=c*g+f*y+d*w,s[7]=c*h+f*x+d*C,s[2]=u*M+p*v+m*E,s[5]=u*g+p*y+m*w,s[8]=u*h+p*x+m*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return n*o*f-n*a*c-i*s*f+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],d=f*o-a*c,u=a*l-f*s,p=c*s-o*l,m=n*d+i*u+r*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/m;return e[0]=d*M,e[1]=(r*c-f*i)*M,e[2]=(a*i-r*o)*M,e[3]=u*M,e[4]=(f*n-r*l)*M,e[5]=(r*s-a*n)*M,e[6]=p*M,e[7]=(i*l-c*n)*M,e[8]=(o*n-i*s)*M,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return co("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Df.makeScale(e,n)),this}rotate(e){return co("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Df.makeRotation(-e)),this}translate(e,n){return co("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Df.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Zm.prototype.isMatrix3=!0;let Ue=Zm;const Df=new Ue,qv=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yv=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function S2(){const t={enabled:!0,workingColorSpace:nu,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===nt&&(r.r=Ki(r.r),r.g=Ki(r.g),r.b=Ki(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===nt&&(r.r=uo(r.r),r.g=uo(r.g),r.b=uo(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Sr?iu:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return co("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return co("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[nu]:{primaries:e,whitePoint:i,transfer:iu,toXYZ:qv,fromXYZ:Yv,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Pn},outputColorSpaceConfig:{drawingBufferColorSpace:Pn}},[Pn]:{primaries:e,whitePoint:i,transfer:nt,toXYZ:qv,fromXYZ:Yv,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Pn}}}),t}const $e=S2();function Ki(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function uo(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Cs;class M2{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Cs===void 0&&(Cs=su("canvas")),Cs.width=e.width,Cs.height=e.height;const r=Cs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Cs}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=su("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ki(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ki(n[i]/255)*255):n[i]=Ki(n[i]);return{data:n,width:e.width,height:e.height}}else return Ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let E2=0;class jm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:E2++}),this.uuid=Ya(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Lf(r[o].image)):s.push(Lf(r[o]))}else s=Lf(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Lf(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?M2.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ne("Texture: Unable to serialize Texture."),{})}let T2=0;const Nf=new W;class mn extends Ms{constructor(e=mn.DEFAULT_IMAGE,n=mn.DEFAULT_MAPPING,i=$i,r=$i,s=ln,o=os,a=ai,l=Gn,c=mn.DEFAULT_ANISOTROPY,f=Sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:T2++}),this.uuid=Ya(),this.name="",this.source=new jm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Nf).x}get height(){return this.source.getSize(Nf).y}get depth(){return this.source.getSize(Nf).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ne(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ne(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==XM)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Dh:e.x=e.x-Math.floor(e.x);break;case $i:e.x=e.x<0?0:1;break;case Lh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Dh:e.y=e.y-Math.floor(e.y);break;case $i:e.y=e.y<0?0:1;break;case Lh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=XM;mn.DEFAULT_ANISOTROPY=1;const Qm=class Qm{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],d=l[8],u=l[1],p=l[5],m=l[9],M=l[2],g=l[6],h=l[10];if(Math.abs(f-u)<.01&&Math.abs(d-M)<.01&&Math.abs(m-g)<.01){if(Math.abs(f+u)<.1&&Math.abs(d+M)<.1&&Math.abs(m+g)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(c+1)/2,x=(p+1)/2,E=(h+1)/2,w=(f+u)/4,C=(d+M)/4,_=(m+g)/4;return y>x&&y>E?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=w/i,s=C/i):x>E?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=w/r,s=_/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=C/s,r=_/s),this.set(i,r,s,n),this}let v=Math.sqrt((g-m)*(g-m)+(d-M)*(d-M)+(u-f)*(u-f));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(d-M)/v,this.z=(u-f)/v,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=qe(this.x,e.x,n.x),this.y=qe(this.y,e.y,n.y),this.z=qe(this.z,e.z,n.z),this.w=qe(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=qe(this.x,e,n),this.y=qe(this.y,e,n),this.z=qe(this.z,e,n),this.w=qe(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Qm.prototype.isVector4=!0;let wt=Qm;class w2 extends Ms{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new wt(0,0,e,n),this.scissorTest=!1,this.viewport=new wt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new mn(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:ln,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new jm(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pi extends w2{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class eE extends mn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class A2 extends mn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ou=class ou{constructor(e,n,i,r,s,o,a,l,c,f,d,u,p,m,M,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,f,d,u,p,m,M,g)}set(e,n,i,r,s,o,a,l,c,f,d,u,p,m,M,g){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=f,h[10]=d,h[14]=u,h[3]=p,h[7]=m,h[11]=M,h[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ou().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Rs.setFromMatrixColumn(e,0).length(),s=1/Rs.setFromMatrixColumn(e,1).length(),o=1/Rs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const u=o*f,p=o*d,m=a*f,M=a*d;n[0]=l*f,n[4]=-l*d,n[8]=c,n[1]=p+m*c,n[5]=u-M*c,n[9]=-a*l,n[2]=M-u*c,n[6]=m+p*c,n[10]=o*l}else if(e.order==="YXZ"){const u=l*f,p=l*d,m=c*f,M=c*d;n[0]=u+M*a,n[4]=m*a-p,n[8]=o*c,n[1]=o*d,n[5]=o*f,n[9]=-a,n[2]=p*a-m,n[6]=M+u*a,n[10]=o*l}else if(e.order==="ZXY"){const u=l*f,p=l*d,m=c*f,M=c*d;n[0]=u-M*a,n[4]=-o*d,n[8]=m+p*a,n[1]=p+m*a,n[5]=o*f,n[9]=M-u*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const u=o*f,p=o*d,m=a*f,M=a*d;n[0]=l*f,n[4]=m*c-p,n[8]=u*c+M,n[1]=l*d,n[5]=M*c+u,n[9]=p*c-m,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const u=o*l,p=o*c,m=a*l,M=a*c;n[0]=l*f,n[4]=M-u*d,n[8]=m*d+p,n[1]=d,n[5]=o*f,n[9]=-a*f,n[2]=-c*f,n[6]=p*d+m,n[10]=u-M*d}else if(e.order==="XZY"){const u=o*l,p=o*c,m=a*l,M=a*c;n[0]=l*f,n[4]=-d,n[8]=c*f,n[1]=u*d+M,n[5]=o*f,n[9]=p*d-m,n[2]=m*d-p,n[6]=a*f,n[10]=M*d+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(C2,e,R2)}lookAt(e,n,i){const r=this.elements;return Cn.subVectors(e,n),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),ur.crossVectors(i,Cn),ur.lengthSq()===0&&(Math.abs(i.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),ur.crossVectors(i,Cn)),ur.normalize(),wl.crossVectors(Cn,ur),r[0]=ur.x,r[4]=wl.x,r[8]=Cn.x,r[1]=ur.y,r[5]=wl.y,r[9]=Cn.y,r[2]=ur.z,r[6]=wl.z,r[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],d=i[5],u=i[9],p=i[13],m=i[2],M=i[6],g=i[10],h=i[14],v=i[3],y=i[7],x=i[11],E=i[15],w=r[0],C=r[4],_=r[8],A=r[12],b=r[1],D=r[5],U=r[9],$=r[13],Y=r[2],B=r[6],I=r[10],L=r[14],N=r[3],V=r[7],K=r[11],ne=r[15];return s[0]=o*w+a*b+l*Y+c*N,s[4]=o*C+a*D+l*B+c*V,s[8]=o*_+a*U+l*I+c*K,s[12]=o*A+a*$+l*L+c*ne,s[1]=f*w+d*b+u*Y+p*N,s[5]=f*C+d*D+u*B+p*V,s[9]=f*_+d*U+u*I+p*K,s[13]=f*A+d*$+u*L+p*ne,s[2]=m*w+M*b+g*Y+h*N,s[6]=m*C+M*D+g*B+h*V,s[10]=m*_+M*U+g*I+h*K,s[14]=m*A+M*$+g*L+h*ne,s[3]=v*w+y*b+x*Y+E*N,s[7]=v*C+y*D+x*B+E*V,s[11]=v*_+y*U+x*I+E*K,s[15]=v*A+y*$+x*L+E*ne,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],d=e[6],u=e[10],p=e[14],m=e[3],M=e[7],g=e[11],h=e[15],v=l*p-c*u,y=a*p-c*d,x=a*u-l*d,E=o*p-c*f,w=o*u-l*f,C=o*d-a*f;return n*(M*v-g*y+h*x)-i*(m*v-g*E+h*w)+r*(m*y-M*E+h*C)-s*(m*x-M*w+g*C)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],o=e[5],a=e[9],l=e[2],c=e[6],f=e[10];return n*(o*f-a*c)-i*(s*f-a*l)+r*(s*c-o*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],d=e[9],u=e[10],p=e[11],m=e[12],M=e[13],g=e[14],h=e[15],v=n*a-i*o,y=n*l-r*o,x=n*c-s*o,E=i*l-r*a,w=i*c-s*a,C=r*c-s*l,_=f*M-d*m,A=f*g-u*m,b=f*h-p*m,D=d*g-u*M,U=d*h-p*M,$=u*h-p*g,Y=v*$-y*U+x*D+E*b-w*A+C*_;if(Y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/Y;return e[0]=(a*$-l*U+c*D)*B,e[1]=(r*U-i*$-s*D)*B,e[2]=(M*C-g*w+h*E)*B,e[3]=(u*w-d*C-p*E)*B,e[4]=(l*b-o*$-c*A)*B,e[5]=(n*$-r*b+s*A)*B,e[6]=(g*x-m*C-h*y)*B,e[7]=(f*C-u*x+p*y)*B,e[8]=(o*U-a*b+c*_)*B,e[9]=(i*b-n*U-s*_)*B,e[10]=(m*w-M*x+h*v)*B,e[11]=(d*x-f*w-p*v)*B,e[12]=(a*A-o*D-l*_)*B,e[13]=(n*D-i*A+r*_)*B,e[14]=(M*y-m*E-g*v)*B,e[15]=(f*E-d*y+u*v)*B,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+i,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,f=o+o,d=a+a,u=s*c,p=s*f,m=s*d,M=o*f,g=o*d,h=a*d,v=l*c,y=l*f,x=l*d,E=i.x,w=i.y,C=i.z;return r[0]=(1-(M+h))*E,r[1]=(p+x)*E,r[2]=(m-y)*E,r[3]=0,r[4]=(p-x)*w,r[5]=(1-(u+h))*w,r[6]=(g+v)*w,r[7]=0,r[8]=(m+y)*C,r[9]=(g-v)*C,r[10]=(1-(u+M))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let o=Rs.set(r[0],r[1],r[2]).length();const a=Rs.set(r[4],r[5],r[6]).length(),l=Rs.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Qn.copy(this);const c=1/o,f=1/a,d=1/l;return Qn.elements[0]*=c,Qn.elements[1]*=c,Qn.elements[2]*=c,Qn.elements[4]*=f,Qn.elements[5]*=f,Qn.elements[6]*=f,Qn.elements[8]*=d,Qn.elements[9]*=d,Qn.elements[10]*=d,n.setFromRotationMatrix(Qn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,r,s,o,a=wi,l=!1){const c=this.elements,f=2*s/(n-e),d=2*s/(i-r),u=(n+e)/(n-e),p=(i+r)/(i-r);let m,M;if(l)m=s/(o-s),M=o*s/(o-s);else if(a===wi)m=-(o+s)/(o-s),M=-2*o*s/(o-s);else if(a===ru)m=-o/(o-s),M=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=wi,l=!1){const c=this.elements,f=2/(n-e),d=2/(i-r),u=-(n+e)/(n-e),p=-(i+r)/(i-r);let m,M;if(l)m=1/(o-s),M=o/(o-s);else if(a===wi)m=-2/(o-s),M=-(o+s)/(o-s);else if(a===ru)m=-1/(o-s),M=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=m,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};ou.prototype.isMatrix4=!0;let Ut=ou;const Rs=new W,Qn=new Ut,C2=new W(0,0,0),R2=new W(1,1,1),ur=new W,wl=new W,Cn=new W,Kv=new Ut,Zv=new Do;class xs{constructor(e=0,n=0,i=0,r=xs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],d=r[2],u=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-qe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,p),this._y=0);break;default:Ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Kv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kv,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Zv.setFromEuler(this),this.setFromQuaternion(Zv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xs.DEFAULT_ORDER="XYZ";class tE{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let b2=0;const Qv=new W,bs=new Do,Ui=new Ut,Al=new W,Wo=new W,P2=new W,D2=new Do,Jv=new W(1,0,0),e_=new W(0,1,0),t_=new W(0,0,1),n_={type:"added"},L2={type:"removed"},Ps={type:"childadded",child:null},If={type:"childremoved",child:null};class In extends Ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:b2++}),this.uuid=Ya(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=In.DEFAULT_UP.clone();const e=new W,n=new xs,i=new Do,r=new W(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ut},normalMatrix:{value:new Ue}}),this.matrix=new Ut,this.matrixWorld=new Ut,this.matrixAutoUpdate=In.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tE,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return bs.setFromAxisAngle(e,n),this.quaternion.multiply(bs),this}rotateOnWorldAxis(e,n){return bs.setFromAxisAngle(e,n),this.quaternion.premultiply(bs),this}rotateX(e){return this.rotateOnAxis(Jv,e)}rotateY(e){return this.rotateOnAxis(e_,e)}rotateZ(e){return this.rotateOnAxis(t_,e)}translateOnAxis(e,n){return Qv.copy(e).applyQuaternion(this.quaternion),this.position.add(Qv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Jv,e)}translateY(e){return this.translateOnAxis(e_,e)}translateZ(e){return this.translateOnAxis(t_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Al.copy(e):Al.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(Wo,Al,this.up):Ui.lookAt(Al,Wo,this.up),this.quaternion.setFromRotationMatrix(Ui),r&&(Ui.extractRotation(r.matrixWorld),bs.setFromRotationMatrix(Ui),this.quaternion.premultiply(bs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(n_),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null):Ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(L2),If.child=e,this.dispatchEvent(If),If.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(n_),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,e,P2),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,D2,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),d=o(e.shapes),u=o(e.skeletons),p=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),m.length>0&&(i.nodes=m)}return i.object=r,i;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}In.DEFAULT_UP=new W(0,1,0);In.DEFAULT_MATRIX_AUTO_UPDATE=!0;In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Cl extends In{constructor(){super(),this.isGroup=!0,this.type="Group"}}const N2={type:"move"};class Uf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const M of e.hand.values()){const g=n.getJointPose(M,i),h=this._getHandJoint(c,M);g!==null&&(h.matrix.fromArray(g.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=g.radius),h.visible=g!==null}const f=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=f.position.distanceTo(d.position),p=.02,m=.005;c.inputState.pinching&&u>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(N2)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Cl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const nE={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fr={h:0,s:0,l:0},Rl={h:0,s:0,l:0};function Ff(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class et{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=$e.workingColorSpace){return this.r=e,this.g=n,this.b=i,$e.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=$e.workingColorSpace){if(e=y2(e,1),n=qe(n,0,1),i=qe(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Ff(o,s,e+1/3),this.g=Ff(o,s,e),this.b=Ff(o,s,e-1/3)}return $e.colorSpaceToWorking(this,r),this}setStyle(e,n=Pn){function i(s){s!==void 0&&parseFloat(s)<1&&Ne("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Ne("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);Ne("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Pn){const i=nE[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ne("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ki(e.r),this.g=Ki(e.g),this.b=Ki(e.b),this}copyLinearToSRGB(e){return this.r=uo(e.r),this.g=uo(e.g),this.b=uo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pn){return $e.workingToColorSpace(on.copy(this),e),Math.round(qe(on.r*255,0,255))*65536+Math.round(qe(on.g*255,0,255))*256+Math.round(qe(on.b*255,0,255))}getHexString(e=Pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=$e.workingColorSpace){$e.workingToColorSpace(on.copy(this),n);const i=on.r,r=on.g,s=on.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=f<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=$e.workingColorSpace){return $e.workingToColorSpace(on.copy(this),n),e.r=on.r,e.g=on.g,e.b=on.b,e}getStyle(e=Pn){$e.workingToColorSpace(on.copy(this),e);const n=on.r,i=on.g,r=on.b;return e!==Pn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(fr),this.setHSL(fr.h+e,fr.s+n,fr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(fr),e.getHSL(Rl);const i=bf(fr.h,Rl.h,n),r=bf(fr.s,Rl.s,n),s=bf(fr.l,Rl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const on=new et;et.NAMES=nE;class I2 extends In{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xs,this.environmentIntensity=1,this.environmentRotation=new xs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Jn=new W,Fi=new W,Of=new W,Oi=new W,Ds=new W,Ls=new W,i_=new W,kf=new W,Bf=new W,Vf=new W,zf=new wt,Hf=new wt,Gf=new wt;class oi{constructor(e=new W,n=new W,i=new W){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Jn.subVectors(e,n),r.cross(Jn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Jn.subVectors(r,n),Fi.subVectors(i,n),Of.subVectors(e,n);const o=Jn.dot(Jn),a=Jn.dot(Fi),l=Jn.dot(Of),c=Fi.dot(Fi),f=Fi.dot(Of),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const u=1/d,p=(c*l-a*f)*u,m=(o*f-a*l)*u;return s.set(1-p-m,m,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Oi)===null?!1:Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Oi.x),l.addScaledVector(o,Oi.y),l.addScaledVector(a,Oi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return zf.setScalar(0),Hf.setScalar(0),Gf.setScalar(0),zf.fromBufferAttribute(e,n),Hf.fromBufferAttribute(e,i),Gf.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(zf,s.x),o.addScaledVector(Hf,s.y),o.addScaledVector(Gf,s.z),o}static isFrontFacing(e,n,i,r){return Jn.subVectors(i,n),Fi.subVectors(e,n),Jn.cross(Fi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jn.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),Jn.cross(Fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return oi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return oi.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Ds.subVectors(r,i),Ls.subVectors(s,i),kf.subVectors(e,i);const l=Ds.dot(kf),c=Ls.dot(kf);if(l<=0&&c<=0)return n.copy(i);Bf.subVectors(e,r);const f=Ds.dot(Bf),d=Ls.dot(Bf);if(f>=0&&d<=f)return n.copy(r);const u=l*d-f*c;if(u<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(Ds,o);Vf.subVectors(e,s);const p=Ds.dot(Vf),m=Ls.dot(Vf);if(m>=0&&p<=m)return n.copy(s);const M=p*c-l*m;if(M<=0&&c>=0&&m<=0)return a=c/(c-m),n.copy(i).addScaledVector(Ls,a);const g=f*m-p*d;if(g<=0&&d-f>=0&&p-m>=0)return i_.subVectors(s,r),a=(d-f)/(d-f+(p-m)),n.copy(r).addScaledVector(i_,a);const h=1/(g+M+u);return o=M*h,a=u*h,n.copy(i).addScaledVector(Ds,o).addScaledVector(Ls,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ka{constructor(e=new W(1/0,1/0,1/0),n=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ei.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ei.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ei.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ei):ei.fromBufferAttribute(s,o),ei.applyMatrix4(e.matrixWorld),this.expandByPoint(ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),bl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),bl.copy(i.boundingBox)),bl.applyMatrix4(e.matrixWorld),this.union(bl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ei),ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xo),Pl.subVectors(this.max,Xo),Ns.subVectors(e.a,Xo),Is.subVectors(e.b,Xo),Us.subVectors(e.c,Xo),dr.subVectors(Is,Ns),hr.subVectors(Us,Is),Xr.subVectors(Ns,Us);let n=[0,-dr.z,dr.y,0,-hr.z,hr.y,0,-Xr.z,Xr.y,dr.z,0,-dr.x,hr.z,0,-hr.x,Xr.z,0,-Xr.x,-dr.y,dr.x,0,-hr.y,hr.x,0,-Xr.y,Xr.x,0];return!Wf(n,Ns,Is,Us,Pl)||(n=[1,0,0,0,1,0,0,0,1],!Wf(n,Ns,Is,Us,Pl))?!1:(Dl.crossVectors(dr,hr),n=[Dl.x,Dl.y,Dl.z],Wf(n,Ns,Is,Us,Pl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ki=[new W,new W,new W,new W,new W,new W,new W,new W],ei=new W,bl=new Ka,Ns=new W,Is=new W,Us=new W,dr=new W,hr=new W,Xr=new W,Xo=new W,Pl=new W,Dl=new W,jr=new W;function Wf(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){jr.fromArray(t,s);const a=r.x*Math.abs(jr.x)+r.y*Math.abs(jr.y)+r.z*Math.abs(jr.z),l=e.dot(jr),c=n.dot(jr),f=i.dot(jr);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const Dt=new W,Ll=new Xe;let U2=0;class Di extends Ms{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:U2++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Gv,this.updateRanges=[],this.gpuType=Ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ll.fromBufferAttribute(this,n),Ll.applyMatrix3(e),this.setXY(n,Ll.x,Ll.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyMatrix3(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyMatrix4(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyNormalMatrix(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.transformDirection(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Go(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=xn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Go(n,this.array)),n}setX(e,n){return this.normalized&&(n=xn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Go(n,this.array)),n}setY(e,n){return this.normalized&&(n=xn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Go(n,this.array)),n}setZ(e,n){return this.normalized&&(n=xn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Go(n,this.array)),n}setW(e,n){return this.normalized&&(n=xn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=xn(n,this.array),i=xn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=xn(n,this.array),i=xn(i,this.array),r=xn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=xn(n,this.array),i=xn(i,this.array),r=xn(r,this.array),s=xn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gv&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class iE extends Di{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class rE extends Di{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Zi extends Di{constructor(e,n,i){super(new Float32Array(e),n,i)}}const F2=new Ka,jo=new W,Xf=new W;class $m{constructor(e=new W,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):F2.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;jo.subVectors(e,this.center);const n=jo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(jo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(jo.copy(e.center).add(Xf)),this.expandByPoint(jo.copy(e.center).sub(Xf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let O2=0;const Vn=new Ut,jf=new In,Fs=new W,Rn=new Ka,$o=new Ka,Wt=new W;class sr extends Ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:O2++}),this.uuid=Ya(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(g2(e)?rE:iE)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ue().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Vn.makeRotationFromQuaternion(e),this.applyMatrix4(Vn),this}rotateX(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this}rotateY(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this}rotateZ(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this}translate(e,n,i){return Vn.makeTranslation(e,n,i),this.applyMatrix4(Vn),this}scale(e,n,i){return Vn.makeScale(e,n,i),this.applyMatrix4(Vn),this}lookAt(e){return jf.lookAt(e),jf.updateMatrix(),this.applyMatrix4(jf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fs).negate(),this.translate(Fs.x,Fs.y,Fs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Zi(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ka);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Rn.setFromBufferAttribute(s),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $m);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(Rn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];$o.setFromBufferAttribute(a),this.morphTargetsRelative?(Wt.addVectors(Rn.min,$o.min),Rn.expandByPoint(Wt),Wt.addVectors(Rn.max,$o.max),Rn.expandByPoint(Wt)):(Rn.expandByPoint($o.min),Rn.expandByPoint($o.max))}Rn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Wt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Wt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)Wt.fromBufferAttribute(a,c),l&&(Fs.fromBufferAttribute(e,c),Wt.add(Fs)),r=Math.max(r,i.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Di(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let _=0;_<i.count;_++)a[_]=new W,l[_]=new W;const c=new W,f=new W,d=new W,u=new Xe,p=new Xe,m=new Xe,M=new W,g=new W;function h(_,A,b){c.fromBufferAttribute(i,_),f.fromBufferAttribute(i,A),d.fromBufferAttribute(i,b),u.fromBufferAttribute(s,_),p.fromBufferAttribute(s,A),m.fromBufferAttribute(s,b),f.sub(c),d.sub(c),p.sub(u),m.sub(u);const D=1/(p.x*m.y-m.x*p.y);isFinite(D)&&(M.copy(f).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(D),g.copy(d).multiplyScalar(p.x).addScaledVector(f,-m.x).multiplyScalar(D),a[_].add(M),a[A].add(M),a[b].add(M),l[_].add(g),l[A].add(g),l[b].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let _=0,A=v.length;_<A;++_){const b=v[_],D=b.start,U=b.count;for(let $=D,Y=D+U;$<Y;$+=3)h(e.getX($+0),e.getX($+1),e.getX($+2))}const y=new W,x=new W,E=new W,w=new W;function C(_){E.fromBufferAttribute(r,_),w.copy(E);const A=a[_];y.copy(A),y.sub(E.multiplyScalar(E.dot(A))).normalize(),x.crossVectors(w,A);const D=x.dot(l[_])<0?-1:1;o.setXYZW(_,y.x,y.y,y.z,D)}for(let _=0,A=v.length;_<A;++_){const b=v[_],D=b.start,U=b.count;for(let $=D,Y=D+U;$<Y;$+=3)C(e.getX($+0)),C(e.getX($+1)),C(e.getX($+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Di(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const r=new W,s=new W,o=new W,a=new W,l=new W,c=new W,f=new W,d=new W;if(e)for(let u=0,p=e.count;u<p;u+=3){const m=e.getX(u+0),M=e.getX(u+1),g=e.getX(u+2);r.fromBufferAttribute(n,m),s.fromBufferAttribute(n,M),o.fromBufferAttribute(n,g),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,g),a.add(f),l.add(f),c.add(f),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,p=n.count;u<p;u+=3)r.fromBufferAttribute(n,u+0),s.fromBufferAttribute(n,u+1),o.fromBufferAttribute(n,u+2),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),i.setXYZ(u+0,f.x,f.y,f.z),i.setXYZ(u+1,f.x,f.y,f.z),i.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Wt.fromBufferAttribute(e,n),Wt.normalize(),e.setXYZ(n,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,d=a.normalized,u=new c.constructor(l.length*f);let p=0,m=0;for(let M=0,g=l.length;M<g;M++){a.isInterleavedBufferAttribute?p=l[M]*a.data.stride+a.offset:p=l[M]*f;for(let h=0;h<f;h++)u[m++]=c[p++]}return new Di(u,f,d)}if(this.index===null)return Ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new sr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,d=c.length;f<d;f++){const u=c[f],p=e(u,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let d=0,u=c.length;d<u;d++){const p=c[d];f.push(p.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],d=s[c];for(let u=0,p=d.length;u<p;u++)f.push(d[u].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let k2=0;class bu extends Ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:k2++}),this.uuid=Ya(),this.name="",this.type="Material",this.blending=lo,this.side=kr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mh,this.blendDst=Eh,this.blendEquation=Jr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=So,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=As,this.stencilZFail=As,this.stencilZPass=As,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ne(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ne(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==lo&&(i.blending=this.blending),this.side!==kr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Mh&&(i.blendSrc=this.blendSrc),this.blendDst!==Eh&&(i.blendDst=this.blendDst),this.blendEquation!==Jr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==So&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==As&&(i.stencilFail=this.stencilFail),this.stencilZFail!==As&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==As&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new et().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Xe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Xe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Bi=new W,$f=new W,Nl=new W,pr=new W,qf=new W,Il=new W,Yf=new W;class B2{constructor(e=new W,n=new W(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Bi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Bi.copy(this.origin).addScaledVector(this.direction,n),Bi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){$f.copy(e).add(n).multiplyScalar(.5),Nl.copy(n).sub(e).normalize(),pr.copy(this.origin).sub($f);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Nl),a=pr.dot(this.direction),l=-pr.dot(Nl),c=pr.lengthSq(),f=Math.abs(1-o*o);let d,u,p,m;if(f>0)if(d=o*l-a,u=o*a-l,m=s*f,d>=0)if(u>=-m)if(u<=m){const M=1/f;d*=M,u*=M,p=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=s,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;else u<=-m?(d=Math.max(0,-(-o*s+a)),u=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+u*(u+2*l)+c):u<=m?(d=0,u=Math.min(Math.max(-s,-l),s),p=u*(u+2*l)+c):(d=Math.max(0,-(o*s+a)),u=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+u*(u+2*l)+c);else u=o>0?-s:s,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy($f).addScaledVector(Nl,u),p}intersectSphere(e,n){Bi.subVectors(e.center,this.origin);const i=Bi.dot(this.direction),r=Bi.dot(Bi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),f>=0?(s=(e.min.y-u.y)*f,o=(e.max.y-u.y)*f):(s=(e.max.y-u.y)*f,o=(e.min.y-u.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Bi)!==null}intersectTriangle(e,n,i,r,s){qf.subVectors(n,e),Il.subVectors(i,e),Yf.crossVectors(qf,Il);let o=this.direction.dot(Yf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;pr.subVectors(this.origin,e);const l=a*this.direction.dot(Il.crossVectors(pr,Il));if(l<0)return null;const c=a*this.direction.dot(qf.cross(pr));if(c<0||l+c>o)return null;const f=-a*pr.dot(Yf);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class sE extends bu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xs,this.combine=OM,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const r_=new Ut,$r=new B2,Ul=new $m,s_=new W,Fl=new W,Ol=new W,kl=new W,Kf=new W,Bl=new W,o_=new W,Vl=new W;class Ii extends In{constructor(e=new sr,n=new sE){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Bl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],d=s[l];f!==0&&(Kf.fromBufferAttribute(d,e),o?Bl.addScaledVector(Kf,f):Bl.addScaledVector(Kf.sub(n),f))}n.add(Bl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ul.copy(i.boundingSphere),Ul.applyMatrix4(s),$r.copy(e.ray).recast(e.near),!(Ul.containsPoint($r.origin)===!1&&($r.intersectSphere(Ul,s_)===null||$r.origin.distanceToSquared(s_)>(e.far-e.near)**2))&&(r_.copy(s).invert(),$r.copy(e.ray).applyMatrix4(r_),!(i.boundingBox!==null&&$r.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,$r)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,u=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,M=u.length;m<M;m++){const g=u[m],h=o[g.materialIndex],v=Math.max(g.start,p.start),y=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let x=v,E=y;x<E;x+=3){const w=a.getX(x),C=a.getX(x+1),_=a.getX(x+2);r=zl(this,h,e,i,c,f,d,w,C,_),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const m=Math.max(0,p.start),M=Math.min(a.count,p.start+p.count);for(let g=m,h=M;g<h;g+=3){const v=a.getX(g),y=a.getX(g+1),x=a.getX(g+2);r=zl(this,o,e,i,c,f,d,v,y,x),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,M=u.length;m<M;m++){const g=u[m],h=o[g.materialIndex],v=Math.max(g.start,p.start),y=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let x=v,E=y;x<E;x+=3){const w=x,C=x+1,_=x+2;r=zl(this,h,e,i,c,f,d,w,C,_),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const m=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let g=m,h=M;g<h;g+=3){const v=g,y=g+1,x=g+2;r=zl(this,o,e,i,c,f,d,v,y,x),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function V2(t,e,n,i,r,s,o,a){let l;if(e.side===wn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===kr,a),l===null)return null;Vl.copy(a),Vl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Vl);return c<n.near||c>n.far?null:{distance:c,point:Vl.clone(),object:t}}function zl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Fl),t.getVertexPosition(l,Ol),t.getVertexPosition(c,kl);const f=V2(t,e,n,i,Fl,Ol,kl,o_);if(f){const d=new W;oi.getBarycoord(o_,Fl,Ol,kl,d),r&&(f.uv=oi.getInterpolatedAttribute(r,a,l,c,d,new Xe)),s&&(f.uv1=oi.getInterpolatedAttribute(s,a,l,c,d,new Xe)),o&&(f.normal=oi.getInterpolatedAttribute(o,a,l,c,d,new W),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new W,materialIndex:0};oi.getNormal(Fl,Ol,kl,u.normal),f.face=u,f.barycoord=d}return f}class z2 extends mn{constructor(e=null,n=1,i=1,r,s,o,a,l,c=Qt,f=Qt,d,u){super(null,o,a,l,c,f,r,s,d,u),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Zf=new W,H2=new W,G2=new Ue;class Qr{constructor(e=new W(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Zf.subVectors(i,n).cross(H2.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(Zf),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:n.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||G2.getNormalMatrix(e),r=this.coplanarPoint(Zf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qr=new $m,W2=new Xe(.5,.5),Hl=new W;class oE{constructor(e=new Qr,n=new Qr,i=new Qr,r=new Qr,s=new Qr,o=new Qr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=wi,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],f=s[4],d=s[5],u=s[6],p=s[7],m=s[8],M=s[9],g=s[10],h=s[11],v=s[12],y=s[13],x=s[14],E=s[15];if(r[0].setComponents(c-o,p-f,h-m,E-v).normalize(),r[1].setComponents(c+o,p+f,h+m,E+v).normalize(),r[2].setComponents(c+a,p+d,h+M,E+y).normalize(),r[3].setComponents(c-a,p-d,h-M,E-y).normalize(),i)r[4].setComponents(l,u,g,x).normalize(),r[5].setComponents(c-l,p-u,h-g,E-x).normalize();else if(r[4].setComponents(c-l,p-u,h-g,E-x).normalize(),n===wi)r[5].setComponents(c+l,p+u,h+g,E+x).normalize();else if(n===ru)r[5].setComponents(l,u,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),qr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qr)}intersectsSprite(e){qr.center.set(0,0,0);const n=W2.distanceTo(e.center);return qr.radius=.7071067811865476+n,qr.applyMatrix4(e.matrixWorld),this.intersectsSphere(qr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Hl.x=r.normal.x>0?e.max.x:e.min.x,Hl.y=r.normal.y>0?e.max.y:e.min.y,Hl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Hl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class aE extends mn{constructor(e=[],n=vs,i,r,s,o,a,l,c,f){super(e,n,i,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Eo extends mn{constructor(e,n,i=Ni,r,s,o,a=Qt,l=Qt,c,f=ir,d=1){if(f!==ir&&f!==as)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:n,depth:d};super(u,r,s,o,a,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new jm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class X2 extends Eo{constructor(e,n=Ni,i=vs,r,s,o=Qt,a=Qt,l,c=ir){const f={width:e,height:e,depth:1},d=[f,f,f,f,f,f];super(e,e,n,i,r,s,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class lE extends mn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Za extends sr{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],d=[];let u=0,p=0;m("z","y","x",-1,-1,i,n,e,o,s,0),m("z","y","x",1,-1,i,n,-e,o,s,1),m("x","z","y",1,1,e,i,n,r,o,2),m("x","z","y",1,-1,e,i,-n,r,o,3),m("x","y","z",1,-1,e,n,i,r,s,4),m("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Zi(c,3)),this.setAttribute("normal",new Zi(f,3)),this.setAttribute("uv",new Zi(d,2));function m(M,g,h,v,y,x,E,w,C,_,A){const b=x/C,D=E/_,U=x/2,$=E/2,Y=w/2,B=C+1,I=_+1;let L=0,N=0;const V=new W;for(let K=0;K<I;K++){const ne=K*D-$;for(let oe=0;oe<B;oe++){const Ve=oe*b-U;V[M]=Ve*v,V[g]=ne*y,V[h]=Y,c.push(V.x,V.y,V.z),V[M]=0,V[g]=0,V[h]=w>0?1:-1,f.push(V.x,V.y,V.z),d.push(oe/C),d.push(1-K/_),L+=1}}for(let K=0;K<_;K++)for(let ne=0;ne<C;ne++){const oe=u+ne+B*K,Ve=u+ne+B*(K+1),He=u+(ne+1)+B*(K+1),ke=u+(ne+1)+B*K;l.push(oe,Ve,ke),l.push(Ve,He,ke),N+=6}a.addGroup(p,N,A),p+=N,u+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Za(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Qa extends sr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,f=l+1,d=e/a,u=n/l,p=[],m=[],M=[],g=[];for(let h=0;h<f;h++){const v=h*u-o;for(let y=0;y<c;y++){const x=y*d-s;m.push(x,-v,0),M.push(0,0,1),g.push(y/a),g.push(1-h/l)}}for(let h=0;h<l;h++)for(let v=0;v<a;v++){const y=v+c*h,x=v+c*(h+1),E=v+1+c*(h+1),w=v+1+c*h;p.push(y,x,w),p.push(x,E,w)}this.setIndex(p),this.setAttribute("position",new Zi(m,3)),this.setAttribute("normal",new Zi(M,3)),this.setAttribute("uv",new Zi(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qa(e.width,e.height,e.widthSegments,e.heightSegments)}}function To(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(a_(r))r.isRenderTargetTexture?(Ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(a_(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function un(t){const e={};for(let n=0;n<t.length;n++){const i=To(t[n]);for(const r in i)e[r]=i[r]}return e}function a_(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function j2(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function cE(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const $2={clone:To,merge:un};var q2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Y2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class di extends bu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=q2,this.fragmentShader=Y2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=To(e.uniforms),this.uniformsGroups=j2(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new et().setHex(r.value);break;case"v2":this.uniforms[i].value=new Xe().fromArray(r.value);break;case"v3":this.uniforms[i].value=new W().fromArray(r.value);break;case"v4":this.uniforms[i].value=new wt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Ue().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Ut().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class K2 extends di{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Z2 extends bu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=l2,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Q2 extends bu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Gl=new W,Wl=new Do,vi=new W;class uE extends In{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ut,this.projectionMatrix=new Ut,this.projectionMatrixInverse=new Ut,this.coordinateSystem=wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Gl,Wl,vi),vi.x===1&&vi.y===1&&vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gl,Wl,vi.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Gl,Wl,vi),vi.x===1&&vi.y===1&&vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gl,Wl,vi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const mr=new W,l_=new Xe,c_=new Xe;class si extends uE{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=cp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Rf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cp*2*Math.atan(Math.tan(Rf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mr.x,mr.y).multiplyScalar(-e/mr.z),mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(mr.x,mr.y).multiplyScalar(-e/mr.z)}getViewSize(e,n){return this.getViewBounds(e,l_,c_),n.subVectors(c_,l_)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Rf*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class qm extends uE{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Os=-90,ks=1;class J2 extends In{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new si(Os,ks,e,n);r.layers=this.layers,this.add(r);const s=new si(Os,ks,e,n);s.layers=this.layers,this.add(s);const o=new si(Os,ks,e,n);o.layers=this.layers,this.add(o);const a=new si(Os,ks,e,n);a.layers=this.layers,this.add(a);const l=new si(Os,ks,e,n);l.layers=this.layers,this.add(l);const c=new si(Os,ks,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===wi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ru)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,f]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,f),e.setRenderTarget(d,u,p),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class e3 extends si{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class t3{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ne("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}const Jm=class Jm{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};Jm.prototype.isMatrix2=!0;let u_=Jm;function f_(t,e,n,i){const r=n3(i);switch(n){case KM:return t*e;case QM:return t*e/r.components*r.byteLength;case zm:return t*e/r.components*r.byteLength;case _s:return t*e*2/r.components*r.byteLength;case Hm:return t*e*2/r.components*r.byteLength;case ZM:return t*e*3/r.components*r.byteLength;case ai:return t*e*4/r.components*r.byteLength;case Gm:return t*e*4/r.components*r.byteLength;case pc:case mc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case gc:case vc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ih:case Fh:return Math.max(t,16)*Math.max(e,8)/4;case Nh:case Uh:return Math.max(t,8)*Math.max(e,8)/2;case Oh:case kh:case Vh:case zh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Bh:case eu:case Hh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Gh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Wh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Xh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case jh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case $h:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case qh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Yh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Kh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Zh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Qh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Jh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case ep:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case tp:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case np:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case ip:case rp:case sp:return Math.ceil(t/4)*Math.ceil(e/4)*16;case op:case ap:return Math.ceil(t/4)*Math.ceil(e/4)*8;case tu:case lp:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function n3(t){switch(t){case Gn:case jM:return{byteLength:1,components:1};case ka:case $M:case nr:return{byteLength:2,components:1};case Bm:case Vm:return{byteLength:2,components:4};case Ni:case km:case Ti:return{byteLength:4,components:1};case qM:case YM:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Om}}));typeof window<"u"&&(window.__THREE__?Ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Om);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function fE(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function i3(t){const e=new WeakMap;function n(a,l){const c=a.array,f=a.usage,d=c.byteLength,u=t.createBuffer();t.bindBuffer(l,u),t.bufferData(l,c,f),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const f=l.array,d=l.updateRanges;if(t.bindBuffer(c,a),d.length===0)t.bufferSubData(c,0,f);else{d.sort((p,m)=>p.start-m.start);let u=0;for(let p=1;p<d.length;p++){const m=d[u],M=d[p];M.start<=m.start+m.count+1?m.count=Math.max(m.count,M.start+M.count-m.start):(++u,d[u]=M)}d.length=u+1;for(let p=0,m=d.length;p<m;p++){const M=d[p];t.bufferSubData(c,M.start*f.BYTES_PER_ELEMENT,f,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var r3=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,s3=`#ifdef USE_ALPHAHASH
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
#endif`,o3=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,a3=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,l3=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,c3=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,u3=`#ifdef USE_AOMAP
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
#endif`,f3=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,d3=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,h3=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,p3=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,m3=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,g3=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,v3=`#ifdef USE_IRIDESCENCE
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
#endif`,_3=`#ifdef USE_BUMPMAP
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
#endif`,x3=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,y3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,S3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,M3=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,E3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,T3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,w3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,A3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,C3=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,R3=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,b3=`vec3 transformedNormal = objectNormal;
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
#endif`,P3=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,D3=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,L3=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,N3=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,I3="gl_FragColor = linearToOutputTexel( gl_FragColor );",U3=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,F3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,O3=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,k3=`#ifdef USE_ENVMAP
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
#endif`,B3=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,V3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,z3=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,H3=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,G3=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,W3=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,X3=`#ifdef USE_GRADIENTMAP
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
}`,j3=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$3=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,q3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Y3=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#endif
#include <lightprobes_pars_fragment>`,K3=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
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
#endif`,Z3=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Q3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,J3=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,eD=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tD=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,nD=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,iD=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,rD=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,sD=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,oD=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,aD=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lD=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cD=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uD=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fD=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dD=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hD=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,pD=`#if defined( USE_POINTS_UV )
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
#endif`,mD=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gD=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vD=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_D=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xD=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yD=`#ifdef USE_MORPHTARGETS
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
#endif`,SD=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,MD=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ED=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,TD=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wD=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,AD=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,CD=`#ifdef USE_NORMALMAP
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
#endif`,RD=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bD=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,PD=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,DD=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,LD=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ND=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,ID=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,UD=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,FD=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,OD=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kD=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,BD=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,VD=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,zD=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,HD=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,GD=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,WD=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,XD=`#ifdef USE_SKINNING
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
#endif`,jD=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$D=`#ifdef USE_SKINNING
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
#endif`,qD=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,YD=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,KD=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ZD=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,QD=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,JD=`#ifdef USE_TRANSMISSION
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
#endif`,eL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iL=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rL=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sL=`uniform sampler2D t2D;
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
}`,oL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aL=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cL=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uL=`#include <common>
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
}`,fL=`#if DEPTH_PACKING == 3200
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
}`,dL=`#define DISTANCE
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
}`,hL=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,pL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mL=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gL=`uniform float scale;
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
}`,vL=`uniform vec3 diffuse;
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
}`,_L=`#include <common>
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
}`,xL=`uniform vec3 diffuse;
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
}`,yL=`#define LAMBERT
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
}`,SL=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,ML=`#define MATCAP
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
}`,EL=`#define MATCAP
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
}`,TL=`#define NORMAL
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
}`,wL=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,AL=`#define PHONG
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
}`,CL=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,RL=`#define STANDARD
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
}`,bL=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,PL=`#define TOON
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
}`,DL=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,LL=`uniform float size;
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
}`,NL=`uniform vec3 diffuse;
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
}`,IL=`#include <common>
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
}`,UL=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,FL=`uniform float rotation;
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
}`,OL=`uniform vec3 diffuse;
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
}`,Be={alphahash_fragment:r3,alphahash_pars_fragment:s3,alphamap_fragment:o3,alphamap_pars_fragment:a3,alphatest_fragment:l3,alphatest_pars_fragment:c3,aomap_fragment:u3,aomap_pars_fragment:f3,batching_pars_vertex:d3,batching_vertex:h3,begin_vertex:p3,beginnormal_vertex:m3,bsdfs:g3,iridescence_fragment:v3,bumpmap_pars_fragment:_3,clipping_planes_fragment:x3,clipping_planes_pars_fragment:y3,clipping_planes_pars_vertex:S3,clipping_planes_vertex:M3,color_fragment:E3,color_pars_fragment:T3,color_pars_vertex:w3,color_vertex:A3,common:C3,cube_uv_reflection_fragment:R3,defaultnormal_vertex:b3,displacementmap_pars_vertex:P3,displacementmap_vertex:D3,emissivemap_fragment:L3,emissivemap_pars_fragment:N3,colorspace_fragment:I3,colorspace_pars_fragment:U3,envmap_fragment:F3,envmap_common_pars_fragment:O3,envmap_pars_fragment:k3,envmap_pars_vertex:B3,envmap_physical_pars_fragment:K3,envmap_vertex:V3,fog_vertex:z3,fog_pars_vertex:H3,fog_fragment:G3,fog_pars_fragment:W3,gradientmap_pars_fragment:X3,lightmap_pars_fragment:j3,lights_lambert_fragment:$3,lights_lambert_pars_fragment:q3,lights_pars_begin:Y3,lights_toon_fragment:Z3,lights_toon_pars_fragment:Q3,lights_phong_fragment:J3,lights_phong_pars_fragment:eD,lights_physical_fragment:tD,lights_physical_pars_fragment:nD,lights_fragment_begin:iD,lights_fragment_maps:rD,lights_fragment_end:sD,lightprobes_pars_fragment:oD,logdepthbuf_fragment:aD,logdepthbuf_pars_fragment:lD,logdepthbuf_pars_vertex:cD,logdepthbuf_vertex:uD,map_fragment:fD,map_pars_fragment:dD,map_particle_fragment:hD,map_particle_pars_fragment:pD,metalnessmap_fragment:mD,metalnessmap_pars_fragment:gD,morphinstance_vertex:vD,morphcolor_vertex:_D,morphnormal_vertex:xD,morphtarget_pars_vertex:yD,morphtarget_vertex:SD,normal_fragment_begin:MD,normal_fragment_maps:ED,normal_pars_fragment:TD,normal_pars_vertex:wD,normal_vertex:AD,normalmap_pars_fragment:CD,clearcoat_normal_fragment_begin:RD,clearcoat_normal_fragment_maps:bD,clearcoat_pars_fragment:PD,iridescence_pars_fragment:DD,opaque_fragment:LD,packing:ND,premultiplied_alpha_fragment:ID,project_vertex:UD,dithering_fragment:FD,dithering_pars_fragment:OD,roughnessmap_fragment:kD,roughnessmap_pars_fragment:BD,shadowmap_pars_fragment:VD,shadowmap_pars_vertex:zD,shadowmap_vertex:HD,shadowmask_pars_fragment:GD,skinbase_vertex:WD,skinning_pars_vertex:XD,skinning_vertex:jD,skinnormal_vertex:$D,specularmap_fragment:qD,specularmap_pars_fragment:YD,tonemapping_fragment:KD,tonemapping_pars_fragment:ZD,transmission_fragment:QD,transmission_pars_fragment:JD,uv_pars_fragment:eL,uv_pars_vertex:tL,uv_vertex:nL,worldpos_vertex:iL,background_vert:rL,background_frag:sL,backgroundCube_vert:oL,backgroundCube_frag:aL,cube_vert:lL,cube_frag:cL,depth_vert:uL,depth_frag:fL,distance_vert:dL,distance_frag:hL,equirect_vert:pL,equirect_frag:mL,linedashed_vert:gL,linedashed_frag:vL,meshbasic_vert:_L,meshbasic_frag:xL,meshlambert_vert:yL,meshlambert_frag:SL,meshmatcap_vert:ML,meshmatcap_frag:EL,meshnormal_vert:TL,meshnormal_frag:wL,meshphong_vert:AL,meshphong_frag:CL,meshphysical_vert:RL,meshphysical_frag:bL,meshtoon_vert:PL,meshtoon_frag:DL,points_vert:LL,points_frag:NL,shadow_vert:IL,shadow_frag:UL,sprite_vert:FL,sprite_frag:OL},me={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new W},probesMax:{value:new W},probesResolution:{value:new W}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},Mi={basic:{uniforms:un([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:un([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new et(0)},envMapIntensity:{value:1}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:un([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:un([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:un([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new et(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:un([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:un([me.points,me.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:un([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:un([me.common,me.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:un([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:un([me.sprite,me.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distance:{uniforms:un([me.common,me.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distance_vert,fragmentShader:Be.distance_frag},shadow:{uniforms:un([me.lights,me.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};Mi.physical={uniforms:un([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const Xl={r:0,b:0,g:0},kL=new Ut,dE=new Ue;dE.set(-1,0,0,0,1,0,0,0,1);function BL(t,e,n,i,r,s){const o=new et(0);let a=r===!0?0:1,l,c,f=null,d=0,u=null;function p(v){let y=v.isScene===!0?v.background:null;if(y&&y.isTexture){const x=v.backgroundBlurriness>0;y=e.get(y,x)}return y}function m(v){let y=!1;const x=p(v);x===null?g(o,a):x&&x.isColor&&(g(x,1),y=!0);const E=t.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function M(v,y){const x=p(y);x&&(x.isCubeTexture||x.mapping===Ru)?(c===void 0&&(c=new Ii(new Za(1,1,1),new di({name:"BackgroundCubeMaterial",uniforms:To(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(kL.makeRotationFromEuler(y.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(dE),c.material.toneMapped=$e.getTransfer(x.colorSpace)!==nt,(f!==x||d!==x.version||u!==t.toneMapping)&&(c.material.needsUpdate=!0,f=x,d=x.version,u=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Ii(new Qa(2,2),new di({name:"BackgroundMaterial",uniforms:To(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:kr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=$e.getTransfer(x.colorSpace)!==nt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||d!==x.version||u!==t.toneMapping)&&(l.material.needsUpdate=!0,f=x,d=x.version,u=t.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,y){v.getRGB(Xl,cE(t)),n.buffers.color.setClear(Xl.r,Xl.g,Xl.b,y,s)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,y=1){o.set(v),a=y,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,g(o,a)},render:m,addToRenderList:M,dispose:h}}function VL(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,o=!1;function a(D,U,$,Y,B){let I=!1;const L=d(D,Y,$,U);s!==L&&(s=L,c(s.object)),I=p(D,Y,$,B),I&&m(D,Y,$,B),B!==null&&e.update(B,t.ELEMENT_ARRAY_BUFFER),(I||o)&&(o=!1,x(D,U,$,Y),B!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return t.createVertexArray()}function c(D){return t.bindVertexArray(D)}function f(D){return t.deleteVertexArray(D)}function d(D,U,$,Y){const B=Y.wireframe===!0;let I=i[U.id];I===void 0&&(I={},i[U.id]=I);const L=D.isInstancedMesh===!0?D.id:0;let N=I[L];N===void 0&&(N={},I[L]=N);let V=N[$.id];V===void 0&&(V={},N[$.id]=V);let K=V[B];return K===void 0&&(K=u(l()),V[B]=K),K}function u(D){const U=[],$=[],Y=[];for(let B=0;B<n;B++)U[B]=0,$[B]=0,Y[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:$,attributeDivisors:Y,object:D,attributes:{},index:null}}function p(D,U,$,Y){const B=s.attributes,I=U.attributes;let L=0;const N=$.getAttributes();for(const V in N)if(N[V].location>=0){const ne=B[V];let oe=I[V];if(oe===void 0&&(V==="instanceMatrix"&&D.instanceMatrix&&(oe=D.instanceMatrix),V==="instanceColor"&&D.instanceColor&&(oe=D.instanceColor)),ne===void 0||ne.attribute!==oe||oe&&ne.data!==oe.data)return!0;L++}return s.attributesNum!==L||s.index!==Y}function m(D,U,$,Y){const B={},I=U.attributes;let L=0;const N=$.getAttributes();for(const V in N)if(N[V].location>=0){let ne=I[V];ne===void 0&&(V==="instanceMatrix"&&D.instanceMatrix&&(ne=D.instanceMatrix),V==="instanceColor"&&D.instanceColor&&(ne=D.instanceColor));const oe={};oe.attribute=ne,ne&&ne.data&&(oe.data=ne.data),B[V]=oe,L++}s.attributes=B,s.attributesNum=L,s.index=Y}function M(){const D=s.newAttributes;for(let U=0,$=D.length;U<$;U++)D[U]=0}function g(D){h(D,0)}function h(D,U){const $=s.newAttributes,Y=s.enabledAttributes,B=s.attributeDivisors;$[D]=1,Y[D]===0&&(t.enableVertexAttribArray(D),Y[D]=1),B[D]!==U&&(t.vertexAttribDivisor(D,U),B[D]=U)}function v(){const D=s.newAttributes,U=s.enabledAttributes;for(let $=0,Y=U.length;$<Y;$++)U[$]!==D[$]&&(t.disableVertexAttribArray($),U[$]=0)}function y(D,U,$,Y,B,I,L){L===!0?t.vertexAttribIPointer(D,U,$,B,I):t.vertexAttribPointer(D,U,$,Y,B,I)}function x(D,U,$,Y){M();const B=Y.attributes,I=$.getAttributes(),L=U.defaultAttributeValues;for(const N in I){const V=I[N];if(V.location>=0){let K=B[N];if(K===void 0&&(N==="instanceMatrix"&&D.instanceMatrix&&(K=D.instanceMatrix),N==="instanceColor"&&D.instanceColor&&(K=D.instanceColor)),K!==void 0){const ne=K.normalized,oe=K.itemSize,Ve=e.get(K);if(Ve===void 0)continue;const He=Ve.buffer,ke=Ve.type,Q=Ve.bytesPerElement,ae=ke===t.INT||ke===t.UNSIGNED_INT||K.gpuType===km;if(K.isInterleavedBufferAttribute){const se=K.data,Le=se.stride,Ie=K.offset;if(se.isInstancedInterleavedBuffer){for(let Pe=0;Pe<V.locationSize;Pe++)h(V.location+Pe,se.meshPerAttribute);D.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Pe=0;Pe<V.locationSize;Pe++)g(V.location+Pe);t.bindBuffer(t.ARRAY_BUFFER,He);for(let Pe=0;Pe<V.locationSize;Pe++)y(V.location+Pe,oe/V.locationSize,ke,ne,Le*Q,(Ie+oe/V.locationSize*Pe)*Q,ae)}else{if(K.isInstancedBufferAttribute){for(let se=0;se<V.locationSize;se++)h(V.location+se,K.meshPerAttribute);D.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let se=0;se<V.locationSize;se++)g(V.location+se);t.bindBuffer(t.ARRAY_BUFFER,He);for(let se=0;se<V.locationSize;se++)y(V.location+se,oe/V.locationSize,ke,ne,oe*Q,oe/V.locationSize*se*Q,ae)}}else if(L!==void 0){const ne=L[N];if(ne!==void 0)switch(ne.length){case 2:t.vertexAttrib2fv(V.location,ne);break;case 3:t.vertexAttrib3fv(V.location,ne);break;case 4:t.vertexAttrib4fv(V.location,ne);break;default:t.vertexAttrib1fv(V.location,ne)}}}}v()}function E(){A();for(const D in i){const U=i[D];for(const $ in U){const Y=U[$];for(const B in Y){const I=Y[B];for(const L in I)f(I[L].object),delete I[L];delete Y[B]}}delete i[D]}}function w(D){if(i[D.id]===void 0)return;const U=i[D.id];for(const $ in U){const Y=U[$];for(const B in Y){const I=Y[B];for(const L in I)f(I[L].object),delete I[L];delete Y[B]}}delete i[D.id]}function C(D){for(const U in i){const $=i[U];for(const Y in $){const B=$[Y];if(B[D.id]===void 0)continue;const I=B[D.id];for(const L in I)f(I[L].object),delete I[L];delete B[D.id]}}}function _(D){for(const U in i){const $=i[U],Y=D.isInstancedMesh===!0?D.id:0,B=$[Y];if(B!==void 0){for(const I in B){const L=B[I];for(const N in L)f(L[N].object),delete L[N];delete B[I]}delete $[Y],Object.keys($).length===0&&delete i[U]}}}function A(){b(),o=!0,s!==r&&(s=r,c(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:A,resetDefaultState:b,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfObject:_,releaseStatesOfProgram:C,initAttributes:M,enableAttribute:g,disableUnusedAttributes:v}}function zL(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function o(l,c,f){f!==0&&(t.drawArraysInstanced(i,l,c,f),n.update(c,i,f))}function a(l,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,f);let u=0;for(let p=0;p<f;p++)u+=c[p];n.update(u,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function HL(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==ai&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const _=C===nr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Gn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Ti&&!_)}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(Ne("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const d=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&Ne("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),E=t.getParameter(t.MAX_SAMPLES),w=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:m,maxTextureSize:M,maxCubemapSize:g,maxAttributes:h,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:x,maxSamples:E,samples:w}}function GL(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Qr,a=new Ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||i!==0||r;return r=u,i=d.length,p},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){n=f(d,u,0)},this.setState=function(d,u,p){const m=d.clippingPlanes,M=d.clipIntersection,g=d.clipShadows,h=t.get(d);if(!r||m===null||m.length===0||s&&!g)s?f(null):c();else{const v=s?0:i,y=v*4;let x=h.clippingState||null;l.value=x,x=f(m,u,y,p);for(let E=0;E!==y;++E)x[E]=n[E];h.clippingState=x,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(d,u,p,m){const M=d!==null?d.length:0;let g=null;if(M!==0){if(g=l.value,m!==!0||g===null){const h=p+M*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<h)&&(g=new Float32Array(h));for(let y=0,x=p;y!==M;++y,x+=4)o.copy(d[y]).applyMatrix4(v,a),o.normal.toArray(g,x),g[x+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,g}}const wr=4,d_=[.125,.215,.35,.446,.526,.582],es=20,WL=256,qo=new qm,h_=new et;let Qf=null,Jf=0,ed=0,td=!1;const XL=new W;class p_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=XL}=s;Qf=this._renderer.getRenderTarget(),Jf=this._renderer.getActiveCubeFace(),ed=this._renderer.getActiveMipmapLevel(),td=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=v_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=g_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Qf,Jf,ed),this._renderer.xr.enabled=td,e.scissorTest=!1,Bs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===vs||e.mapping===Mo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qf=this._renderer.getRenderTarget(),Jf=this._renderer.getActiveCubeFace(),ed=this._renderer.getActiveMipmapLevel(),td=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:nr,format:ai,colorSpace:nu,depthBuffer:!1},r=m_(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=m_(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=jL(s)),this._blurMaterial=qL(s,e,n),this._ggxMaterial=$L(s,e,n)}return r}_compileMaterial(e){const n=new Ii(new sr,e);this._renderer.compile(n,qo)}_sceneToCubeUV(e,n,i,r,s){const l=new si(90,1,n,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,p=d.toneMapping;d.getClearColor(h_),d.toneMapping=bi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ii(new Za,new sE({name:"PMREM.Background",side:wn,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,g=M.material;let h=!1;const v=e.background;v?v.isColor&&(g.color.copy(v),e.background=null,h=!0):(g.color.copy(h_),h=!0);for(let y=0;y<6;y++){const x=y%3;x===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[y],s.y,s.z)):x===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[y]));const E=this._cubeSize;Bs(r,x*E,y>2?E:0,E,E),d.setRenderTarget(r),h&&d.render(M,l),d.render(e,l)}d.toneMapping=p,d.autoClear=u,e.background=v}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===vs||e.mapping===Mo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=v_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=g_());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Bs(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,qo)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),f=n/(this._lodMeshes.length-1),d=Math.sqrt(c*c-f*f),u=0+c*1.25,p=d*u,{_lodMax:m}=this,M=this._sizeLods[i],g=3*M*(i>m-wr?i-m+wr:0),h=4*(this._cubeSize-M);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=m-n,Bs(s,g,h,3*M,2*M),r.setRenderTarget(s),r.render(a,qo),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=m-i,Bs(e,g,h,3*M,2*M),r.setRenderTarget(e),r.render(a,qo)}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Ze("blur direction must be either latitudinal or longitudinal!");const f=3,d=this._lodMeshes[r];d.material=c;const u=c.uniforms,p=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*es-1),M=s/m,g=isFinite(s)?1+Math.floor(f*M):es;g>es&&Ne(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${es}`);const h=[];let v=0;for(let C=0;C<es;++C){const _=C/M,A=Math.exp(-_*_/2);h.push(A),C===0?v+=A:C<g&&(v+=2*A)}for(let C=0;C<h.length;C++)h[C]=h[C]/v;u.envMap.value=e.texture,u.samples.value=g,u.weights.value=h,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:y}=this;u.dTheta.value=m,u.mipInt.value=y-i;const x=this._sizeLods[r],E=3*x*(r>y-wr?r-y+wr:0),w=4*(this._cubeSize-x);Bs(n,E,w,3*x,2*x),l.setRenderTarget(n),l.render(d,qo)}}function jL(t){const e=[],n=[],i=[];let r=t;const s=t-wr+1+d_.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>t-wr?l=d_[o-t+wr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),f=-c,d=1+c,u=[f,f,d,f,d,d,f,f,d,d,f,d],p=6,m=6,M=3,g=2,h=1,v=new Float32Array(M*m*p),y=new Float32Array(g*m*p),x=new Float32Array(h*m*p);for(let w=0;w<p;w++){const C=w%3*2/3-1,_=w>2?0:-1,A=[C,_,0,C+2/3,_,0,C+2/3,_+1,0,C,_,0,C+2/3,_+1,0,C,_+1,0];v.set(A,M*m*w),y.set(u,g*m*w);const b=[w,w,w,w,w,w];x.set(b,h*m*w)}const E=new sr;E.setAttribute("position",new Di(v,M)),E.setAttribute("uv",new Di(y,g)),E.setAttribute("faceIndex",new Di(x,h)),i.push(new Ii(E,null)),r>wr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function m_(t,e,n){const i=new Pi(t,e,n);return i.texture.mapping=Ru,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Bs(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function $L(t,e,n){return new di({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:WL,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Pu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function qL(t,e,n){const i=new Float32Array(es),r=new W(0,1,0);return new di({name:"SphericalGaussianBlur",defines:{n:es,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Pu(),fragmentShader:`

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
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function g_(){return new di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pu(),fragmentShader:`

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
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function v_(){return new di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Pu(){return`

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
	`}class hE extends Pi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new aE(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Za(5,5,5),s=new di({name:"CubemapFromEquirect",uniforms:To(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:wn,blending:Yi});s.uniforms.tEquirect.value=n;const o=new Ii(r,s),a=n.minFilter;return n.minFilter===os&&(n.minFilter=ln),new J2(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}function YL(t){let e=new WeakMap,n=new WeakMap,i=null;function r(u,p=!1){return u==null?null:p?o(u):s(u)}function s(u){if(u&&u.isTexture){const p=u.mapping;if(p===wf||p===Af)if(e.has(u)){const m=e.get(u).texture;return a(m,u.mapping)}else{const m=u.image;if(m&&m.height>0){const M=new hE(m.height);return M.fromEquirectangularTexture(t,u),e.set(u,M),u.addEventListener("dispose",c),a(M.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){const p=u.mapping,m=p===wf||p===Af,M=p===vs||p===Mo;if(m||M){let g=n.get(u);const h=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==h)return i===null&&(i=new p_(t)),g=m?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),g.texture;if(g!==void 0)return g.texture;{const v=u.image;return m&&v&&v.height>0||M&&v&&l(v)?(i===null&&(i=new p_(t)),g=m?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),u.addEventListener("dispose",f),g.texture):null}}}return u}function a(u,p){return p===wf?u.mapping=vs:p===Af&&(u.mapping=Mo),u}function l(u){let p=0;const m=6;for(let M=0;M<m;M++)u[M]!==void 0&&p++;return p===m}function c(u){const p=u.target;p.removeEventListener("dispose",c);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function f(u){const p=u.target;p.removeEventListener("dispose",f);const m=n.get(p);m!==void 0&&(n.delete(p),m.dispose())}function d(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function KL(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&co("WebGLRenderer: "+i+" extension not supported."),r}}}function ZL(t,e,n,i){const r={},s=new WeakMap;function o(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const m in u.attributes)e.remove(u.attributes[m]);u.removeEventListener("dispose",o),delete r[u.id];const p=s.get(u);p&&(e.remove(p),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function a(d,u){return r[u.id]===!0||(u.addEventListener("dispose",o),r[u.id]=!0,n.memory.geometries++),u}function l(d){const u=d.attributes;for(const p in u)e.update(u[p],t.ARRAY_BUFFER)}function c(d){const u=[],p=d.index,m=d.attributes.position;let M=0;if(m===void 0)return;if(p!==null){const v=p.array;M=p.version;for(let y=0,x=v.length;y<x;y+=3){const E=v[y+0],w=v[y+1],C=v[y+2];u.push(E,w,w,C,C,E)}}else{const v=m.array;M=m.version;for(let y=0,x=v.length/3-1;y<x;y+=3){const E=y+0,w=y+1,C=y+2;u.push(E,w,w,C,C,E)}}const g=new(m.count>=65535?rE:iE)(u,1);g.version=M;const h=s.get(d);h&&e.remove(h),s.set(d,g)}function f(d){const u=s.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:f}}function QL(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,u){t.drawElements(i,u,s,d*o),n.update(u,i,1)}function c(d,u,p){p!==0&&(t.drawElementsInstanced(i,u,s,d*o,p),n.update(u,i,p))}function f(d,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,d,0,p);let M=0;for(let g=0;g<p;g++)M+=u[g];n.update(M,i,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function JL(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:Ze("WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function eN(t,e,n){const i=new WeakMap,r=new wt;function s(o,a,l){const c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=f!==void 0?f.length:0;let u=i.get(a);if(u===void 0||u.count!==d){let b=function(){_.dispose(),i.delete(a),a.removeEventListener("dispose",b)};var p=b;u!==void 0&&u.texture.dispose();const m=a.morphAttributes.position!==void 0,M=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let x=0;m===!0&&(x=1),M===!0&&(x=2),g===!0&&(x=3);let E=a.attributes.position.count*x,w=1;E>e.maxTextureSize&&(w=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const C=new Float32Array(E*w*4*d),_=new eE(C,E,w,d);_.type=Ti,_.needsUpdate=!0;const A=x*4;for(let D=0;D<d;D++){const U=h[D],$=v[D],Y=y[D],B=E*w*4*D;for(let I=0;I<U.count;I++){const L=I*A;m===!0&&(r.fromBufferAttribute(U,I),C[B+L+0]=r.x,C[B+L+1]=r.y,C[B+L+2]=r.z,C[B+L+3]=0),M===!0&&(r.fromBufferAttribute($,I),C[B+L+4]=r.x,C[B+L+5]=r.y,C[B+L+6]=r.z,C[B+L+7]=0),g===!0&&(r.fromBufferAttribute(Y,I),C[B+L+8]=r.x,C[B+L+9]=r.y,C[B+L+10]=r.z,C[B+L+11]=Y.itemSize===4?r.w:1)}}u={count:d,texture:_,size:new Xe(E,w)},i.set(a,u),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const M=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(t,"morphTargetBaseInfluence",M),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:s}}function tN(t,e,n,i,r){let s=new WeakMap;function o(c){const f=r.render.frame,d=c.geometry,u=e.get(c,d);if(s.get(u)!==f&&(e.update(u),s.set(u,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==f&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,f))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==f&&(p.update(),s.set(p,f))}return u}function a(){s=new WeakMap}function l(c){const f=c.target;f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),n.remove(f.instanceMatrix),f.instanceColor!==null&&n.remove(f.instanceColor)}return{update:o,dispose:a}}const nN={[kM]:"LINEAR_TONE_MAPPING",[BM]:"REINHARD_TONE_MAPPING",[VM]:"CINEON_TONE_MAPPING",[zM]:"ACES_FILMIC_TONE_MAPPING",[GM]:"AGX_TONE_MAPPING",[WM]:"NEUTRAL_TONE_MAPPING",[HM]:"CUSTOM_TONE_MAPPING"};function iN(t,e,n,i,r,s){const o=new Pi(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,depthTexture:r?new Eo(e,n):void 0}),a=new Pi(e,n,{type:nr,depthBuffer:!1,stencilBuffer:!1}),l=new sr;l.setAttribute("position",new Zi([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Zi([0,2,0,0,2,0],2));const c=new K2({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Ii(l,c),d=new qm(-1,1,1,-1,0,1);let u=null,p=null,m=!1,M,g=null,h=[],v=!1;this.setSize=function(y,x){o.setSize(y,x),a.setSize(y,x);for(let E=0;E<h.length;E++){const w=h[E];w.setSize&&w.setSize(y,x)}},this.setEffects=function(y){h=y,v=h.length>0&&h[0].isRenderPass===!0;const x=o.width,E=o.height;for(let w=0;w<h.length;w++){const C=h[w];C.setSize&&C.setSize(x,E)}},this.begin=function(y,x){if(m||y.toneMapping===bi&&h.length===0)return!1;if(g=x,x!==null){const E=x.width,w=x.height;(o.width!==E||o.height!==w)&&this.setSize(E,w)}return v===!1&&y.setRenderTarget(o),M=y.toneMapping,y.toneMapping=bi,!0},this.hasRenderPass=function(){return v},this.end=function(y,x){y.toneMapping=M,m=!0;let E=o,w=a;for(let C=0;C<h.length;C++){const _=h[C];if(_.enabled!==!1&&(_.render(y,w,E,x),_.needsSwap!==!1)){const A=E;E=w,w=A}}if(u!==y.outputColorSpace||p!==y.toneMapping){u=y.outputColorSpace,p=y.toneMapping,c.defines={},$e.getTransfer(u)===nt&&(c.defines.SRGB_TRANSFER="");const C=nN[p];C&&(c.defines[C]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=E.texture,y.setRenderTarget(g),y.render(f,d),g=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),l.dispose(),c.dispose()}}const pE=new mn,up=new Eo(1,1),mE=new eE,gE=new A2,vE=new aE,__=[],x_=[],y_=new Float32Array(16),S_=new Float32Array(9),M_=new Float32Array(4);function Lo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=__[r];if(s===void 0&&(s=new Float32Array(r),__[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Vt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function zt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Du(t,e){let n=x_[e];n===void 0&&(n=new Int32Array(e),x_[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function rN(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function sN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Vt(n,e))return;t.uniform2fv(this.addr,e),zt(n,e)}}function oN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Vt(n,e))return;t.uniform3fv(this.addr,e),zt(n,e)}}function aN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Vt(n,e))return;t.uniform4fv(this.addr,e),zt(n,e)}}function lN(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Vt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),zt(n,e)}else{if(Vt(n,i))return;M_.set(i),t.uniformMatrix2fv(this.addr,!1,M_),zt(n,i)}}function cN(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Vt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),zt(n,e)}else{if(Vt(n,i))return;S_.set(i),t.uniformMatrix3fv(this.addr,!1,S_),zt(n,i)}}function uN(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Vt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),zt(n,e)}else{if(Vt(n,i))return;y_.set(i),t.uniformMatrix4fv(this.addr,!1,y_),zt(n,i)}}function fN(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function dN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Vt(n,e))return;t.uniform2iv(this.addr,e),zt(n,e)}}function hN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Vt(n,e))return;t.uniform3iv(this.addr,e),zt(n,e)}}function pN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Vt(n,e))return;t.uniform4iv(this.addr,e),zt(n,e)}}function mN(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function gN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Vt(n,e))return;t.uniform2uiv(this.addr,e),zt(n,e)}}function vN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Vt(n,e))return;t.uniform3uiv(this.addr,e),zt(n,e)}}function _N(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Vt(n,e))return;t.uniform4uiv(this.addr,e),zt(n,e)}}function xN(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(up.compareFunction=n.isReversedDepthBuffer()?Xm:Wm,s=up):s=pE,n.setTexture2D(e||s,r)}function yN(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||gE,r)}function SN(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||vE,r)}function MN(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||mE,r)}function EN(t){switch(t){case 5126:return rN;case 35664:return sN;case 35665:return oN;case 35666:return aN;case 35674:return lN;case 35675:return cN;case 35676:return uN;case 5124:case 35670:return fN;case 35667:case 35671:return dN;case 35668:case 35672:return hN;case 35669:case 35673:return pN;case 5125:return mN;case 36294:return gN;case 36295:return vN;case 36296:return _N;case 35678:case 36198:case 36298:case 36306:case 35682:return xN;case 35679:case 36299:case 36307:return yN;case 35680:case 36300:case 36308:case 36293:return SN;case 36289:case 36303:case 36311:case 36292:return MN}}function TN(t,e){t.uniform1fv(this.addr,e)}function wN(t,e){const n=Lo(e,this.size,2);t.uniform2fv(this.addr,n)}function AN(t,e){const n=Lo(e,this.size,3);t.uniform3fv(this.addr,n)}function CN(t,e){const n=Lo(e,this.size,4);t.uniform4fv(this.addr,n)}function RN(t,e){const n=Lo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function bN(t,e){const n=Lo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function PN(t,e){const n=Lo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function DN(t,e){t.uniform1iv(this.addr,e)}function LN(t,e){t.uniform2iv(this.addr,e)}function NN(t,e){t.uniform3iv(this.addr,e)}function IN(t,e){t.uniform4iv(this.addr,e)}function UN(t,e){t.uniform1uiv(this.addr,e)}function FN(t,e){t.uniform2uiv(this.addr,e)}function ON(t,e){t.uniform3uiv(this.addr,e)}function kN(t,e){t.uniform4uiv(this.addr,e)}function BN(t,e,n){const i=this.cache,r=e.length,s=Du(n,r);Vt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));let o;this.type===t.SAMPLER_2D_SHADOW?o=up:o=pE;for(let a=0;a!==r;++a)n.setTexture2D(e[a]||o,s[a])}function VN(t,e,n){const i=this.cache,r=e.length,s=Du(n,r);Vt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||gE,s[o])}function zN(t,e,n){const i=this.cache,r=e.length,s=Du(n,r);Vt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||vE,s[o])}function HN(t,e,n){const i=this.cache,r=e.length,s=Du(n,r);Vt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||mE,s[o])}function GN(t){switch(t){case 5126:return TN;case 35664:return wN;case 35665:return AN;case 35666:return CN;case 35674:return RN;case 35675:return bN;case 35676:return PN;case 5124:case 35670:return DN;case 35667:case 35671:return LN;case 35668:case 35672:return NN;case 35669:case 35673:return IN;case 5125:return UN;case 36294:return FN;case 36295:return ON;case 36296:return kN;case 35678:case 36198:case 36298:case 36306:case 35682:return BN;case 35679:case 36299:case 36307:return VN;case 35680:case 36300:case 36308:case 36293:return zN;case 36289:case 36303:case 36311:case 36292:return HN}}class WN{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=EN(n.type)}}class XN{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=GN(n.type)}}class jN{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const nd=/(\w+)(\])?(\[|\.)?/g;function E_(t,e){t.seq.push(e),t.map[e.id]=e}function $N(t,e,n){const i=t.name,r=i.length;for(nd.lastIndex=0;;){const s=nd.exec(i),o=nd.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){E_(n,c===void 0?new WN(a,t,e):new XN(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new jN(a),E_(n,d)),n=d}}}class _c{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);$N(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function T_(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const qN=37297;let YN=0;function KN(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const w_=new Ue;function ZN(t){$e._getMatrix(w_,$e.workingColorSpace,t);const e=`mat3( ${w_.elements.map(n=>n.toFixed(4))} )`;switch($e.getTransfer(t)){case iu:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return Ne("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function A_(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+KN(t.getShaderSource(e),a)}else return s}function QN(t,e){const n=ZN(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const JN={[kM]:"Linear",[BM]:"Reinhard",[VM]:"Cineon",[zM]:"ACESFilmic",[GM]:"AgX",[WM]:"Neutral",[HM]:"Custom"};function eI(t,e){const n=JN[e];return n===void 0?(Ne("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const jl=new W;function tI(){$e.getLuminanceCoefficients(jl);const t=jl.x.toFixed(4),e=jl.y.toFixed(4),n=jl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function nI(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ia).join(`
`)}function iI(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function rI(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function ia(t){return t!==""}function C_(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function R_(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const sI=/^[ \t]*#include +<([\w\d./]+)>/gm;function fp(t){return t.replace(sI,aI)}const oI=new Map;function aI(t,e){let n=Be[e];if(n===void 0){const i=oI.get(e);if(i!==void 0)n=Be[i],Ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return fp(n)}const lI=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function b_(t){return t.replace(lI,cI)}function cI(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function P_(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const uI={[hc]:"SHADOWMAP_TYPE_PCF",[na]:"SHADOWMAP_TYPE_VSM"};function fI(t){return uI[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const dI={[vs]:"ENVMAP_TYPE_CUBE",[Mo]:"ENVMAP_TYPE_CUBE",[Ru]:"ENVMAP_TYPE_CUBE_UV"};function hI(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":dI[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const pI={[Mo]:"ENVMAP_MODE_REFRACTION"};function mI(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":pI[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const gI={[OM]:"ENVMAP_BLENDING_MULTIPLY",[s2]:"ENVMAP_BLENDING_MIX",[o2]:"ENVMAP_BLENDING_ADD"};function vI(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":gI[t.combine]||"ENVMAP_BLENDING_NONE"}function _I(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function xI(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=fI(n),c=hI(n),f=mI(n),d=vI(n),u=_I(n),p=nI(n),m=iI(s),M=r.createProgram();let g,h,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(ia).join(`
`),g.length>0&&(g+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(ia).join(`
`),h.length>0&&(h+=`
`)):(g=[P_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ia).join(`
`),h=[P_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==bi?"#define TONE_MAPPING":"",n.toneMapping!==bi?Be.tonemapping_pars_fragment:"",n.toneMapping!==bi?eI("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,QN("linearToOutputTexel",n.outputColorSpace),tI(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ia).join(`
`)),o=fp(o),o=C_(o,n),o=R_(o,n),a=fp(a),a=C_(a,n),a=R_(a,n),o=b_(o),a=b_(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,h=["#define varying in",n.glslVersion===Wv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Wv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const y=v+g+o,x=v+h+a,E=T_(r,r.VERTEX_SHADER,y),w=T_(r,r.FRAGMENT_SHADER,x);r.attachShader(M,E),r.attachShader(M,w),n.index0AttributeName!==void 0?r.bindAttribLocation(M,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function C(D){if(t.debug.checkShaderErrors){const U=r.getProgramInfoLog(M)||"",$=r.getShaderInfoLog(E)||"",Y=r.getShaderInfoLog(w)||"",B=U.trim(),I=$.trim(),L=Y.trim();let N=!0,V=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(N=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,M,E,w);else{const K=A_(r,E,"vertex"),ne=A_(r,w,"fragment");Ze("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+B+`
`+K+`
`+ne)}else B!==""?Ne("WebGLProgram: Program Info Log:",B):(I===""||L==="")&&(V=!1);V&&(D.diagnostics={runnable:N,programLog:B,vertexShader:{log:I,prefix:g},fragmentShader:{log:L,prefix:h}})}r.deleteShader(E),r.deleteShader(w),_=new _c(r,M),A=rI(r,M)}let _;this.getUniforms=function(){return _===void 0&&C(this),_};let A;this.getAttributes=function(){return A===void 0&&C(this),A};let b=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(M,qN)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=YN++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=E,this.fragmentShader=w,this}let yI=0;class SI{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new MI(e),n.set(e,i)),i}}class MI{constructor(e){this.id=yI++,this.code=e,this.usedTimes=0}}function EI(t){return t===_s||t===eu||t===tu}function TI(t,e,n,i,r,s){const o=new tE,a=new SI,l=new Set,c=[],f=new Map,d=i.logarithmicDepthBuffer;let u=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return l.add(_),_===0?"uv":`uv${_}`}function M(_,A,b,D,U,$){const Y=D.fog,B=U.geometry,I=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?D.environment:null,L=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,N=e.get(_.envMap||I,L),V=N&&N.mapping===Ru?N.image.height:null,K=p[_.type];_.precision!==null&&(u=i.getMaxPrecision(_.precision),u!==_.precision&&Ne("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));const ne=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,oe=ne!==void 0?ne.length:0;let Ve=0;B.morphAttributes.position!==void 0&&(Ve=1),B.morphAttributes.normal!==void 0&&(Ve=2),B.morphAttributes.color!==void 0&&(Ve=3);let He,ke,Q,ae;if(K){const Ee=Mi[K];He=Ee.vertexShader,ke=Ee.fragmentShader}else{He=_.vertexShader,ke=_.fragmentShader;const Ee=a.getVertexShaderStage(_),St=a.getFragmentShaderStage(_);a.update(_,Ee,St),Q=Ee.id,ae=St.id}const se=t.getRenderTarget(),Le=t.state.buffers.depth.getReversed(),Ie=U.isInstancedMesh===!0,Pe=U.isBatchedMesh===!0,gt=!!_.map,We=!!_.matcap,st=!!N,Je=!!_.aoMap,Ye=!!_.lightMap,bt=!!_.bumpMap&&_.wireframe===!1,Ft=!!_.normalMap,Gt=!!_.displacementMap,$t=!!_.emissiveMap,yt=!!_.metalnessMap,Pt=!!_.roughnessMap,O=_.anisotropy>0,_n=_.clearcoat>0,tt=_.dispersion>0,R=_.iridescence>0,S=_.sheen>0,z=_.transmission>0,X=O&&!!_.anisotropyMap,q=_n&&!!_.clearcoatMap,le=_n&&!!_.clearcoatNormalMap,ue=_n&&!!_.clearcoatRoughnessMap,Z=R&&!!_.iridescenceMap,te=R&&!!_.iridescenceThicknessMap,fe=S&&!!_.sheenColorMap,Ae=S&&!!_.sheenRoughnessMap,pe=!!_.specularMap,de=!!_.specularColorMap,be=!!_.specularIntensityMap,De=z&&!!_.transmissionMap,Fe=z&&!!_.thicknessMap,F=!!_.gradientMap,ce=!!_.alphaMap,ee=_.alphaTest>0,he=!!_.alphaHash,_e=!!_.extensions;let ie=bi;_.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(ie=t.toneMapping);const we={shaderID:K,shaderType:_.type,shaderName:_.name,vertexShader:He,fragmentShader:ke,defines:_.defines,customVertexShaderID:Q,customFragmentShaderID:ae,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:Pe,batchingColor:Pe&&U._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&U.instanceColor!==null,instancingMorph:Ie&&U.morphTexture!==null,outputColorSpace:se===null?t.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:$e.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:gt,matcap:We,envMap:st,envMapMode:st&&N.mapping,envMapCubeUVHeight:V,aoMap:Je,lightMap:Ye,bumpMap:bt,normalMap:Ft,displacementMap:Gt,emissiveMap:$t,normalMapObjectSpace:Ft&&_.normalMapType===c2,normalMapTangentSpace:Ft&&_.normalMapType===zv,packedNormalMap:Ft&&_.normalMapType===zv&&EI(_.normalMap.format),metalnessMap:yt,roughnessMap:Pt,anisotropy:O,anisotropyMap:X,clearcoat:_n,clearcoatMap:q,clearcoatNormalMap:le,clearcoatRoughnessMap:ue,dispersion:tt,iridescence:R,iridescenceMap:Z,iridescenceThicknessMap:te,sheen:S,sheenColorMap:fe,sheenRoughnessMap:Ae,specularMap:pe,specularColorMap:de,specularIntensityMap:be,transmission:z,transmissionMap:De,thicknessMap:Fe,gradientMap:F,opaque:_.transparent===!1&&_.blending===lo&&_.alphaToCoverage===!1,alphaMap:ce,alphaTest:ee,alphaHash:he,combine:_.combine,mapUv:gt&&m(_.map.channel),aoMapUv:Je&&m(_.aoMap.channel),lightMapUv:Ye&&m(_.lightMap.channel),bumpMapUv:bt&&m(_.bumpMap.channel),normalMapUv:Ft&&m(_.normalMap.channel),displacementMapUv:Gt&&m(_.displacementMap.channel),emissiveMapUv:$t&&m(_.emissiveMap.channel),metalnessMapUv:yt&&m(_.metalnessMap.channel),roughnessMapUv:Pt&&m(_.roughnessMap.channel),anisotropyMapUv:X&&m(_.anisotropyMap.channel),clearcoatMapUv:q&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:le&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:te&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&m(_.sheenRoughnessMap.channel),specularMapUv:pe&&m(_.specularMap.channel),specularColorMapUv:de&&m(_.specularColorMap.channel),specularIntensityMapUv:be&&m(_.specularIntensityMap.channel),transmissionMapUv:De&&m(_.transmissionMap.channel),thicknessMapUv:Fe&&m(_.thicknessMap.channel),alphaMapUv:ce&&m(_.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Ft||O),vertexNormals:!!B.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!B.attributes.uv&&(gt||ce),fog:!!Y,useFog:_.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||B.attributes.normal===void 0&&Ft===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Le,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:Ve,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:$.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:t.shadowMap.enabled&&b.length>0,shadowMapType:t.shadowMap.type,toneMapping:ie,decodeVideoTexture:gt&&_.map.isVideoTexture===!0&&$e.getTransfer(_.map.colorSpace)===nt,decodeVideoTextureEmissive:$t&&_.emissiveMap.isVideoTexture===!0&&$e.getTransfer(_.emissiveMap.colorSpace)===nt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Wi,flipSided:_.side===wn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:_e&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&_.extensions.multiDraw===!0||Pe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return we.vertexUv1s=l.has(1),we.vertexUv2s=l.has(2),we.vertexUv3s=l.has(3),l.clear(),we}function g(_){const A=[];if(_.shaderID?A.push(_.shaderID):(A.push(_.customVertexShaderID),A.push(_.customFragmentShaderID)),_.defines!==void 0)for(const b in _.defines)A.push(b),A.push(_.defines[b]);return _.isRawShaderMaterial===!1&&(h(A,_),v(A,_),A.push(t.outputColorSpace)),A.push(_.customProgramCacheKey),A.join()}function h(_,A){_.push(A.precision),_.push(A.outputColorSpace),_.push(A.envMapMode),_.push(A.envMapCubeUVHeight),_.push(A.mapUv),_.push(A.alphaMapUv),_.push(A.lightMapUv),_.push(A.aoMapUv),_.push(A.bumpMapUv),_.push(A.normalMapUv),_.push(A.displacementMapUv),_.push(A.emissiveMapUv),_.push(A.metalnessMapUv),_.push(A.roughnessMapUv),_.push(A.anisotropyMapUv),_.push(A.clearcoatMapUv),_.push(A.clearcoatNormalMapUv),_.push(A.clearcoatRoughnessMapUv),_.push(A.iridescenceMapUv),_.push(A.iridescenceThicknessMapUv),_.push(A.sheenColorMapUv),_.push(A.sheenRoughnessMapUv),_.push(A.specularMapUv),_.push(A.specularColorMapUv),_.push(A.specularIntensityMapUv),_.push(A.transmissionMapUv),_.push(A.thicknessMapUv),_.push(A.combine),_.push(A.fogExp2),_.push(A.sizeAttenuation),_.push(A.morphTargetsCount),_.push(A.morphAttributeCount),_.push(A.numDirLights),_.push(A.numPointLights),_.push(A.numSpotLights),_.push(A.numSpotLightMaps),_.push(A.numHemiLights),_.push(A.numRectAreaLights),_.push(A.numDirLightShadows),_.push(A.numPointLightShadows),_.push(A.numSpotLightShadows),_.push(A.numSpotLightShadowsWithMaps),_.push(A.numLightProbes),_.push(A.shadowMapType),_.push(A.toneMapping),_.push(A.numClippingPlanes),_.push(A.numClipIntersection),_.push(A.depthPacking)}function v(_,A){o.disableAll(),A.instancing&&o.enable(0),A.instancingColor&&o.enable(1),A.instancingMorph&&o.enable(2),A.matcap&&o.enable(3),A.envMap&&o.enable(4),A.normalMapObjectSpace&&o.enable(5),A.normalMapTangentSpace&&o.enable(6),A.clearcoat&&o.enable(7),A.iridescence&&o.enable(8),A.alphaTest&&o.enable(9),A.vertexColors&&o.enable(10),A.vertexAlphas&&o.enable(11),A.vertexUv1s&&o.enable(12),A.vertexUv2s&&o.enable(13),A.vertexUv3s&&o.enable(14),A.vertexTangents&&o.enable(15),A.anisotropy&&o.enable(16),A.alphaHash&&o.enable(17),A.batching&&o.enable(18),A.dispersion&&o.enable(19),A.batchingColor&&o.enable(20),A.gradientMap&&o.enable(21),A.packedNormalMap&&o.enable(22),A.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),A.numLightProbeGrids>0&&o.enable(22),A.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function y(_){const A=p[_.type];let b;if(A){const D=Mi[A];b=$2.clone(D.uniforms)}else b=_.uniforms;return b}function x(_,A){let b=f.get(A);return b!==void 0?++b.usedTimes:(b=new xI(t,A,_,r),c.push(b),f.set(A,b)),b}function E(_){if(--_.usedTimes===0){const A=c.indexOf(_);c[A]=c[c.length-1],c.pop(),f.delete(_.cacheKey),_.destroy()}}function w(_){a.remove(_)}function C(){a.dispose()}return{getParameters:M,getProgramCacheKey:g,getUniforms:y,acquireProgram:x,releaseProgram:E,releaseShaderCache:w,programs:c,dispose:C}}function wI(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function AI(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function D_(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function L_(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function a(u,p,m,M,g,h){let v=t[e];return v===void 0?(v={id:u.id,object:u,geometry:p,material:m,materialVariant:o(u),groupOrder:M,renderOrder:u.renderOrder,z:g,group:h},t[e]=v):(v.id=u.id,v.object=u,v.geometry=p,v.material=m,v.materialVariant=o(u),v.groupOrder=M,v.renderOrder=u.renderOrder,v.z=g,v.group=h),e++,v}function l(u,p,m,M,g,h){const v=a(u,p,m,M,g,h);m.transmission>0?i.push(v):m.transparent===!0?r.push(v):n.push(v)}function c(u,p,m,M,g,h){const v=a(u,p,m,M,g,h);m.transmission>0?i.unshift(v):m.transparent===!0?r.unshift(v):n.unshift(v)}function f(u,p,m){n.length>1&&n.sort(u||AI),i.length>1&&i.sort(p||D_),r.length>1&&r.sort(p||D_),m&&(n.reverse(),i.reverse(),r.reverse())}function d(){for(let u=e,p=t.length;u<p;u++){const m=t[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:d,sort:f}}function CI(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new L_,t.set(i,[o])):r>=s.length?(o=new L_,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function RI(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new W,color:new et};break;case"SpotLight":n={position:new W,direction:new W,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new W,color:new et,distance:0,decay:0};break;case"HemisphereLight":n={direction:new W,skyColor:new et,groundColor:new et};break;case"RectAreaLight":n={color:new et,position:new W,halfWidth:new W,halfHeight:new W};break}return t[e.id]=n,n}}}function bI(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let PI=0;function DI(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function LI(t){const e=new RI,n=bI(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new W);const r=new W,s=new Ut,o=new Ut;function a(c){let f=0,d=0,u=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let p=0,m=0,M=0,g=0,h=0,v=0,y=0,x=0,E=0,w=0,C=0;c.sort(DI);for(let A=0,b=c.length;A<b;A++){const D=c[A],U=D.color,$=D.intensity,Y=D.distance;let B=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===_s?B=D.shadow.map.texture:B=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)f+=U.r*$,d+=U.g*$,u+=U.b*$;else if(D.isLightProbe){for(let I=0;I<9;I++)i.probe[I].addScaledVector(D.sh.coefficients[I],$);C++}else if(D.isDirectionalLight){const I=e.get(D);if(I.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const L=D.shadow,N=n.get(D);N.shadowIntensity=L.intensity,N.shadowBias=L.bias,N.shadowNormalBias=L.normalBias,N.shadowRadius=L.radius,N.shadowMapSize=L.mapSize,i.directionalShadow[p]=N,i.directionalShadowMap[p]=B,i.directionalShadowMatrix[p]=D.shadow.matrix,v++}i.directional[p]=I,p++}else if(D.isSpotLight){const I=e.get(D);I.position.setFromMatrixPosition(D.matrixWorld),I.color.copy(U).multiplyScalar($),I.distance=Y,I.coneCos=Math.cos(D.angle),I.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),I.decay=D.decay,i.spot[M]=I;const L=D.shadow;if(D.map&&(i.spotLightMap[E]=D.map,E++,L.updateMatrices(D),D.castShadow&&w++),i.spotLightMatrix[M]=L.matrix,D.castShadow){const N=n.get(D);N.shadowIntensity=L.intensity,N.shadowBias=L.bias,N.shadowNormalBias=L.normalBias,N.shadowRadius=L.radius,N.shadowMapSize=L.mapSize,i.spotShadow[M]=N,i.spotShadowMap[M]=B,x++}M++}else if(D.isRectAreaLight){const I=e.get(D);I.color.copy(U).multiplyScalar($),I.halfWidth.set(D.width*.5,0,0),I.halfHeight.set(0,D.height*.5,0),i.rectArea[g]=I,g++}else if(D.isPointLight){const I=e.get(D);if(I.color.copy(D.color).multiplyScalar(D.intensity),I.distance=D.distance,I.decay=D.decay,D.castShadow){const L=D.shadow,N=n.get(D);N.shadowIntensity=L.intensity,N.shadowBias=L.bias,N.shadowNormalBias=L.normalBias,N.shadowRadius=L.radius,N.shadowMapSize=L.mapSize,N.shadowCameraNear=L.camera.near,N.shadowCameraFar=L.camera.far,i.pointShadow[m]=N,i.pointShadowMap[m]=B,i.pointShadowMatrix[m]=D.shadow.matrix,y++}i.point[m]=I,m++}else if(D.isHemisphereLight){const I=e.get(D);I.skyColor.copy(D.color).multiplyScalar($),I.groundColor.copy(D.groundColor).multiplyScalar($),i.hemi[h]=I,h++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=u;const _=i.hash;(_.directionalLength!==p||_.pointLength!==m||_.spotLength!==M||_.rectAreaLength!==g||_.hemiLength!==h||_.numDirectionalShadows!==v||_.numPointShadows!==y||_.numSpotShadows!==x||_.numSpotMaps!==E||_.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=M,i.rectArea.length=g,i.point.length=m,i.hemi.length=h,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=x+E-w,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=C,_.directionalLength=p,_.pointLength=m,_.spotLength=M,_.rectAreaLength=g,_.hemiLength=h,_.numDirectionalShadows=v,_.numPointShadows=y,_.numSpotShadows=x,_.numSpotMaps=E,_.numLightProbes=C,i.version=PI++)}function l(c,f){let d=0,u=0,p=0,m=0,M=0;const g=f.matrixWorldInverse;for(let h=0,v=c.length;h<v;h++){const y=c[h];if(y.isDirectionalLight){const x=i.directional[d];x.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(g),d++}else if(y.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(g),p++}else if(y.isRectAreaLight){const x=i.rectArea[m];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),o.identity(),s.copy(y.matrixWorld),s.premultiply(g),o.extractRotation(s),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),m++}else if(y.isPointLight){const x=i.point[u];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),u++}else if(y.isHemisphereLight){const x=i.hemi[M];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(g),M++}}}return{setup:a,setupView:l,state:i}}function N_(t){const e=new LI(t),n=[],i=[],r=[];function s(u){d.camera=u,n.length=0,i.length=0,r.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function l(u){r.push(u)}function c(){e.setup(n)}function f(u){e.setupView(n,u)}const d={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:f,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function NI(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new N_(t),e.set(r,[a])):s>=o.length?(a=new N_(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const II=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,UI=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,FI=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],OI=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],I_=new Ut,Yo=new W,id=new W;function kI(t,e,n){let i=new oE;const r=new Xe,s=new Xe,o=new wt,a=new Z2,l=new Q2,c={},f=n.maxTextureSize,d={[kr]:wn,[wn]:kr,[Wi]:Wi},u=new di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:II,fragmentShader:UI}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const m=new sr;m.setAttribute("position",new Di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Ii(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hc;let h=this.type;this.render=function(w,C,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===VP&&(Ne("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=hc);const A=t.getRenderTarget(),b=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),U=t.state;U.setBlending(Yi),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const $=h!==this.type;$&&C.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(B=>B.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,B=w.length;Y<B;Y++){const I=w[Y],L=I.shadow;if(L===void 0){Ne("WebGLShadowMap:",I,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const N=L.getFrameExtents();r.multiply(N),s.copy(L.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/N.x),r.x=s.x*N.x,L.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/N.y),r.y=s.y*N.y,L.mapSize.y=s.y));const V=t.state.buffers.depth.getReversed();if(L.camera._reversedDepth=V,L.map===null||$===!0){if(L.map!==null&&(L.map.depthTexture!==null&&(L.map.depthTexture.dispose(),L.map.depthTexture=null),L.map.dispose()),this.type===na){if(I.isPointLight){Ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}L.map=new Pi(r.x,r.y,{format:_s,type:nr,minFilter:ln,magFilter:ln,generateMipmaps:!1}),L.map.texture.name=I.name+".shadowMap",L.map.depthTexture=new Eo(r.x,r.y,Ti),L.map.depthTexture.name=I.name+".shadowMapDepth",L.map.depthTexture.format=ir,L.map.depthTexture.compareFunction=null,L.map.depthTexture.minFilter=Qt,L.map.depthTexture.magFilter=Qt}else I.isPointLight?(L.map=new hE(r.x),L.map.depthTexture=new X2(r.x,Ni)):(L.map=new Pi(r.x,r.y),L.map.depthTexture=new Eo(r.x,r.y,Ni)),L.map.depthTexture.name=I.name+".shadowMap",L.map.depthTexture.format=ir,this.type===hc?(L.map.depthTexture.compareFunction=V?Xm:Wm,L.map.depthTexture.minFilter=ln,L.map.depthTexture.magFilter=ln):(L.map.depthTexture.compareFunction=null,L.map.depthTexture.minFilter=Qt,L.map.depthTexture.magFilter=Qt);L.camera.updateProjectionMatrix()}const K=L.map.isWebGLCubeRenderTarget?6:1;for(let ne=0;ne<K;ne++){if(L.map.isWebGLCubeRenderTarget)t.setRenderTarget(L.map,ne),t.clear();else{ne===0&&(t.setRenderTarget(L.map),t.clear());const oe=L.getViewport(ne);o.set(s.x*oe.x,s.y*oe.y,s.x*oe.z,s.y*oe.w),U.viewport(o)}if(I.isPointLight){const oe=L.camera,Ve=L.matrix,He=I.distance||oe.far;He!==oe.far&&(oe.far=He,oe.updateProjectionMatrix()),Yo.setFromMatrixPosition(I.matrixWorld),oe.position.copy(Yo),id.copy(oe.position),id.add(FI[ne]),oe.up.copy(OI[ne]),oe.lookAt(id),oe.updateMatrixWorld(),Ve.makeTranslation(-Yo.x,-Yo.y,-Yo.z),I_.multiplyMatrices(oe.projectionMatrix,oe.matrixWorldInverse),L._frustum.setFromProjectionMatrix(I_,oe.coordinateSystem,oe.reversedDepth)}else L.updateMatrices(I);i=L.getFrustum(),x(C,_,L.camera,I,this.type)}L.isPointLightShadow!==!0&&this.type===na&&v(L,_),L.needsUpdate=!1}h=this.type,g.needsUpdate=!1,t.setRenderTarget(A,b,D)};function v(w,C){const _=e.update(M);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Pi(r.x,r.y,{format:_s,type:nr})),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(C,null,_,u,M,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(C,null,_,p,M,null)}function y(w,C,_,A){let b=null;const D=_.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)b=D;else if(b=_.isPointLight===!0?l:a,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const U=b.uuid,$=C.uuid;let Y=c[U];Y===void 0&&(Y={},c[U]=Y);let B=Y[$];B===void 0&&(B=b.clone(),Y[$]=B,C.addEventListener("dispose",E)),b=B}if(b.visible=C.visible,b.wireframe=C.wireframe,A===na?b.side=C.shadowSide!==null?C.shadowSide:C.side:b.side=C.shadowSide!==null?C.shadowSide:d[C.side],b.alphaMap=C.alphaMap,b.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,b.map=C.map,b.clipShadows=C.clipShadows,b.clippingPlanes=C.clippingPlanes,b.clipIntersection=C.clipIntersection,b.displacementMap=C.displacementMap,b.displacementScale=C.displacementScale,b.displacementBias=C.displacementBias,b.wireframeLinewidth=C.wireframeLinewidth,b.linewidth=C.linewidth,_.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const U=t.properties.get(b);U.light=_}return b}function x(w,C,_,A,b){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&b===na)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,w.matrixWorld);const $=e.update(w),Y=w.material;if(Array.isArray(Y)){const B=$.groups;for(let I=0,L=B.length;I<L;I++){const N=B[I],V=Y[N.materialIndex];if(V&&V.visible){const K=y(w,V,A,b);w.onBeforeShadow(t,w,C,_,$,K,N),t.renderBufferDirect(_,null,$,K,w,N),w.onAfterShadow(t,w,C,_,$,K,N)}}}else if(Y.visible){const B=y(w,Y,A,b);w.onBeforeShadow(t,w,C,_,$,B,null),t.renderBufferDirect(_,null,$,B,w,null),w.onAfterShadow(t,w,C,_,$,B,null)}}const U=w.children;for(let $=0,Y=U.length;$<Y;$++)x(U[$],C,_,A,b)}function E(w){w.target.removeEventListener("dispose",E);for(const _ in c){const A=c[_],b=w.target.uuid;b in A&&(A[b].dispose(),delete A[b])}}}function BI(t,e){function n(){let F=!1;const ce=new wt;let ee=null;const he=new wt(0,0,0,0);return{setMask:function(_e){ee!==_e&&!F&&(t.colorMask(_e,_e,_e,_e),ee=_e)},setLocked:function(_e){F=_e},setClear:function(_e,ie,we,Ee,St){St===!0&&(_e*=Ee,ie*=Ee,we*=Ee),ce.set(_e,ie,we,Ee),he.equals(ce)===!1&&(t.clearColor(_e,ie,we,Ee),he.copy(ce))},reset:function(){F=!1,ee=null,he.set(-1,0,0,0)}}}function i(){let F=!1,ce=!1,ee=null,he=null,_e=null;return{setReversed:function(ie){if(ce!==ie){const we=e.get("EXT_clip_control");ie?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),ce=ie;const Ee=_e;_e=null,this.setClear(Ee)}},getReversed:function(){return ce},setTest:function(ie){ie?se(t.DEPTH_TEST):Le(t.DEPTH_TEST)},setMask:function(ie){ee!==ie&&!F&&(t.depthMask(ie),ee=ie)},setFunc:function(ie){if(ce&&(ie=x2[ie]),he!==ie){switch(ie){case Th:t.depthFunc(t.NEVER);break;case wh:t.depthFunc(t.ALWAYS);break;case Ah:t.depthFunc(t.LESS);break;case So:t.depthFunc(t.LEQUAL);break;case Ch:t.depthFunc(t.EQUAL);break;case Rh:t.depthFunc(t.GEQUAL);break;case bh:t.depthFunc(t.GREATER);break;case Ph:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}he=ie}},setLocked:function(ie){F=ie},setClear:function(ie){_e!==ie&&(_e=ie,ce&&(ie=1-ie),t.clearDepth(ie))},reset:function(){F=!1,ee=null,he=null,_e=null,ce=!1}}}function r(){let F=!1,ce=null,ee=null,he=null,_e=null,ie=null,we=null,Ee=null,St=null;return{setTest:function(ut){F||(ut?se(t.STENCIL_TEST):Le(t.STENCIL_TEST))},setMask:function(ut){ce!==ut&&!F&&(t.stencilMask(ut),ce=ut)},setFunc:function(ut,hi,pi){(ee!==ut||he!==hi||_e!==pi)&&(t.stencilFunc(ut,hi,pi),ee=ut,he=hi,_e=pi)},setOp:function(ut,hi,pi){(ie!==ut||we!==hi||Ee!==pi)&&(t.stencilOp(ut,hi,pi),ie=ut,we=hi,Ee=pi)},setLocked:function(ut){F=ut},setClear:function(ut){St!==ut&&(t.clearStencil(ut),St=ut)},reset:function(){F=!1,ce=null,ee=null,he=null,_e=null,ie=null,we=null,Ee=null,St=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let f={},d={},u={},p=new WeakMap,m=[],M=null,g=!1,h=null,v=null,y=null,x=null,E=null,w=null,C=null,_=new et(0,0,0),A=0,b=!1,D=null,U=null,$=null,Y=null,B=null;const I=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,N=0;const V=t.getParameter(t.VERSION);V.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(V)[1]),L=N>=1):V.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),L=N>=2);let K=null,ne={};const oe=t.getParameter(t.SCISSOR_BOX),Ve=t.getParameter(t.VIEWPORT),He=new wt().fromArray(oe),ke=new wt().fromArray(Ve);function Q(F,ce,ee,he){const _e=new Uint8Array(4),ie=t.createTexture();t.bindTexture(F,ie),t.texParameteri(F,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(F,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let we=0;we<ee;we++)F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY?t.texImage3D(ce,0,t.RGBA,1,1,he,0,t.RGBA,t.UNSIGNED_BYTE,_e):t.texImage2D(ce+we,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,_e);return ie}const ae={};ae[t.TEXTURE_2D]=Q(t.TEXTURE_2D,t.TEXTURE_2D,1),ae[t.TEXTURE_CUBE_MAP]=Q(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[t.TEXTURE_2D_ARRAY]=Q(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ae[t.TEXTURE_3D]=Q(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),se(t.DEPTH_TEST),o.setFunc(So),bt(!1),Ft(Ov),se(t.CULL_FACE),Je(Yi);function se(F){f[F]!==!0&&(t.enable(F),f[F]=!0)}function Le(F){f[F]!==!1&&(t.disable(F),f[F]=!1)}function Ie(F,ce){return u[F]!==ce?(t.bindFramebuffer(F,ce),u[F]=ce,F===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=ce),F===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=ce),!0):!1}function Pe(F,ce){let ee=m,he=!1;if(F){ee=p.get(ce),ee===void 0&&(ee=[],p.set(ce,ee));const _e=F.textures;if(ee.length!==_e.length||ee[0]!==t.COLOR_ATTACHMENT0){for(let ie=0,we=_e.length;ie<we;ie++)ee[ie]=t.COLOR_ATTACHMENT0+ie;ee.length=_e.length,he=!0}}else ee[0]!==t.BACK&&(ee[0]=t.BACK,he=!0);he&&t.drawBuffers(ee)}function gt(F){return M!==F?(t.useProgram(F),M=F,!0):!1}const We={[Jr]:t.FUNC_ADD,[HP]:t.FUNC_SUBTRACT,[GP]:t.FUNC_REVERSE_SUBTRACT};We[WP]=t.MIN,We[XP]=t.MAX;const st={[jP]:t.ZERO,[$P]:t.ONE,[qP]:t.SRC_COLOR,[Mh]:t.SRC_ALPHA,[e2]:t.SRC_ALPHA_SATURATE,[QP]:t.DST_COLOR,[KP]:t.DST_ALPHA,[YP]:t.ONE_MINUS_SRC_COLOR,[Eh]:t.ONE_MINUS_SRC_ALPHA,[JP]:t.ONE_MINUS_DST_COLOR,[ZP]:t.ONE_MINUS_DST_ALPHA,[t2]:t.CONSTANT_COLOR,[n2]:t.ONE_MINUS_CONSTANT_COLOR,[i2]:t.CONSTANT_ALPHA,[r2]:t.ONE_MINUS_CONSTANT_ALPHA};function Je(F,ce,ee,he,_e,ie,we,Ee,St,ut){if(F===Yi){g===!0&&(Le(t.BLEND),g=!1);return}if(g===!1&&(se(t.BLEND),g=!0),F!==zP){if(F!==h||ut!==b){if((v!==Jr||E!==Jr)&&(t.blendEquation(t.FUNC_ADD),v=Jr,E=Jr),ut)switch(F){case lo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case kv:t.blendFunc(t.ONE,t.ONE);break;case Bv:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Vv:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Ze("WebGLState: Invalid blending: ",F);break}else switch(F){case lo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case kv:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Bv:Ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vv:Ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ze("WebGLState: Invalid blending: ",F);break}y=null,x=null,w=null,C=null,_.set(0,0,0),A=0,h=F,b=ut}return}_e=_e||ce,ie=ie||ee,we=we||he,(ce!==v||_e!==E)&&(t.blendEquationSeparate(We[ce],We[_e]),v=ce,E=_e),(ee!==y||he!==x||ie!==w||we!==C)&&(t.blendFuncSeparate(st[ee],st[he],st[ie],st[we]),y=ee,x=he,w=ie,C=we),(Ee.equals(_)===!1||St!==A)&&(t.blendColor(Ee.r,Ee.g,Ee.b,St),_.copy(Ee),A=St),h=F,b=!1}function Ye(F,ce){F.side===Wi?Le(t.CULL_FACE):se(t.CULL_FACE);let ee=F.side===wn;ce&&(ee=!ee),bt(ee),F.blending===lo&&F.transparent===!1?Je(Yi):Je(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);const he=F.stencilWrite;a.setTest(he),he&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),$t(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?se(t.SAMPLE_ALPHA_TO_COVERAGE):Le(t.SAMPLE_ALPHA_TO_COVERAGE)}function bt(F){D!==F&&(F?t.frontFace(t.CW):t.frontFace(t.CCW),D=F)}function Ft(F){F!==kP?(se(t.CULL_FACE),F!==U&&(F===Ov?t.cullFace(t.BACK):F===BP?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Le(t.CULL_FACE),U=F}function Gt(F){F!==$&&(L&&t.lineWidth(F),$=F)}function $t(F,ce,ee){F?(se(t.POLYGON_OFFSET_FILL),(Y!==ce||B!==ee)&&(Y=ce,B=ee,o.getReversed()&&(ce=-ce),t.polygonOffset(ce,ee))):Le(t.POLYGON_OFFSET_FILL)}function yt(F){F?se(t.SCISSOR_TEST):Le(t.SCISSOR_TEST)}function Pt(F){F===void 0&&(F=t.TEXTURE0+I-1),K!==F&&(t.activeTexture(F),K=F)}function O(F,ce,ee){ee===void 0&&(K===null?ee=t.TEXTURE0+I-1:ee=K);let he=ne[ee];he===void 0&&(he={type:void 0,texture:void 0},ne[ee]=he),(he.type!==F||he.texture!==ce)&&(K!==ee&&(t.activeTexture(ee),K=ee),t.bindTexture(F,ce||ae[F]),he.type=F,he.texture=ce)}function _n(){const F=ne[K];F!==void 0&&F.type!==void 0&&(t.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function tt(){try{t.compressedTexImage2D(...arguments)}catch(F){Ze("WebGLState:",F)}}function R(){try{t.compressedTexImage3D(...arguments)}catch(F){Ze("WebGLState:",F)}}function S(){try{t.texSubImage2D(...arguments)}catch(F){Ze("WebGLState:",F)}}function z(){try{t.texSubImage3D(...arguments)}catch(F){Ze("WebGLState:",F)}}function X(){try{t.compressedTexSubImage2D(...arguments)}catch(F){Ze("WebGLState:",F)}}function q(){try{t.compressedTexSubImage3D(...arguments)}catch(F){Ze("WebGLState:",F)}}function le(){try{t.texStorage2D(...arguments)}catch(F){Ze("WebGLState:",F)}}function ue(){try{t.texStorage3D(...arguments)}catch(F){Ze("WebGLState:",F)}}function Z(){try{t.texImage2D(...arguments)}catch(F){Ze("WebGLState:",F)}}function te(){try{t.texImage3D(...arguments)}catch(F){Ze("WebGLState:",F)}}function fe(F){return d[F]!==void 0?d[F]:t.getParameter(F)}function Ae(F,ce){d[F]!==ce&&(t.pixelStorei(F,ce),d[F]=ce)}function pe(F){He.equals(F)===!1&&(t.scissor(F.x,F.y,F.z,F.w),He.copy(F))}function de(F){ke.equals(F)===!1&&(t.viewport(F.x,F.y,F.z,F.w),ke.copy(F))}function be(F,ce){let ee=c.get(ce);ee===void 0&&(ee=new WeakMap,c.set(ce,ee));let he=ee.get(F);he===void 0&&(he=t.getUniformBlockIndex(ce,F.name),ee.set(F,he))}function De(F,ce){const he=c.get(ce).get(F);l.get(ce)!==he&&(t.uniformBlockBinding(ce,he,F.__bindingPointIndex),l.set(ce,he))}function Fe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),f={},d={},K=null,ne={},u={},p=new WeakMap,m=[],M=null,g=!1,h=null,v=null,y=null,x=null,E=null,w=null,C=null,_=new et(0,0,0),A=0,b=!1,D=null,U=null,$=null,Y=null,B=null,He.set(0,0,t.canvas.width,t.canvas.height),ke.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:se,disable:Le,bindFramebuffer:Ie,drawBuffers:Pe,useProgram:gt,setBlending:Je,setMaterial:Ye,setFlipSided:bt,setCullFace:Ft,setLineWidth:Gt,setPolygonOffset:$t,setScissorTest:yt,activeTexture:Pt,bindTexture:O,unbindTexture:_n,compressedTexImage2D:tt,compressedTexImage3D:R,texImage2D:Z,texImage3D:te,pixelStorei:Ae,getParameter:fe,updateUBOMapping:be,uniformBlockBinding:De,texStorage2D:le,texStorage3D:ue,texSubImage2D:S,texSubImage3D:z,compressedTexSubImage2D:X,compressedTexSubImage3D:q,scissor:pe,viewport:de,reset:Fe}}function VI(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xe,f=new WeakMap,d=new Set;let u;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(R,S){return m?new OffscreenCanvas(R,S):su("canvas")}function g(R,S,z){let X=1;const q=tt(R);if((q.width>z||q.height>z)&&(X=z/Math.max(q.width,q.height)),X<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const le=Math.floor(X*q.width),ue=Math.floor(X*q.height);u===void 0&&(u=M(le,ue));const Z=S?M(le,ue):u;return Z.width=le,Z.height=ue,Z.getContext("2d").drawImage(R,0,0,le,ue),Ne("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+le+"x"+ue+")."),Z}else return"data"in R&&Ne("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),R;return R}function h(R){return R.generateMipmaps}function v(R){t.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function x(R,S,z,X,q,le=!1){if(R!==null){if(t[R]!==void 0)return t[R];Ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ue;X&&(ue=e.get("EXT_texture_norm16"),ue||Ne("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=S;if(S===t.RED&&(z===t.FLOAT&&(Z=t.R32F),z===t.HALF_FLOAT&&(Z=t.R16F),z===t.UNSIGNED_BYTE&&(Z=t.R8),z===t.UNSIGNED_SHORT&&ue&&(Z=ue.R16_EXT),z===t.SHORT&&ue&&(Z=ue.R16_SNORM_EXT)),S===t.RED_INTEGER&&(z===t.UNSIGNED_BYTE&&(Z=t.R8UI),z===t.UNSIGNED_SHORT&&(Z=t.R16UI),z===t.UNSIGNED_INT&&(Z=t.R32UI),z===t.BYTE&&(Z=t.R8I),z===t.SHORT&&(Z=t.R16I),z===t.INT&&(Z=t.R32I)),S===t.RG&&(z===t.FLOAT&&(Z=t.RG32F),z===t.HALF_FLOAT&&(Z=t.RG16F),z===t.UNSIGNED_BYTE&&(Z=t.RG8),z===t.UNSIGNED_SHORT&&ue&&(Z=ue.RG16_EXT),z===t.SHORT&&ue&&(Z=ue.RG16_SNORM_EXT)),S===t.RG_INTEGER&&(z===t.UNSIGNED_BYTE&&(Z=t.RG8UI),z===t.UNSIGNED_SHORT&&(Z=t.RG16UI),z===t.UNSIGNED_INT&&(Z=t.RG32UI),z===t.BYTE&&(Z=t.RG8I),z===t.SHORT&&(Z=t.RG16I),z===t.INT&&(Z=t.RG32I)),S===t.RGB_INTEGER&&(z===t.UNSIGNED_BYTE&&(Z=t.RGB8UI),z===t.UNSIGNED_SHORT&&(Z=t.RGB16UI),z===t.UNSIGNED_INT&&(Z=t.RGB32UI),z===t.BYTE&&(Z=t.RGB8I),z===t.SHORT&&(Z=t.RGB16I),z===t.INT&&(Z=t.RGB32I)),S===t.RGBA_INTEGER&&(z===t.UNSIGNED_BYTE&&(Z=t.RGBA8UI),z===t.UNSIGNED_SHORT&&(Z=t.RGBA16UI),z===t.UNSIGNED_INT&&(Z=t.RGBA32UI),z===t.BYTE&&(Z=t.RGBA8I),z===t.SHORT&&(Z=t.RGBA16I),z===t.INT&&(Z=t.RGBA32I)),S===t.RGB&&(z===t.UNSIGNED_SHORT&&ue&&(Z=ue.RGB16_EXT),z===t.SHORT&&ue&&(Z=ue.RGB16_SNORM_EXT),z===t.UNSIGNED_INT_5_9_9_9_REV&&(Z=t.RGB9_E5),z===t.UNSIGNED_INT_10F_11F_11F_REV&&(Z=t.R11F_G11F_B10F)),S===t.RGBA){const te=le?iu:$e.getTransfer(q);z===t.FLOAT&&(Z=t.RGBA32F),z===t.HALF_FLOAT&&(Z=t.RGBA16F),z===t.UNSIGNED_BYTE&&(Z=te===nt?t.SRGB8_ALPHA8:t.RGBA8),z===t.UNSIGNED_SHORT&&ue&&(Z=ue.RGBA16_EXT),z===t.SHORT&&ue&&(Z=ue.RGBA16_SNORM_EXT),z===t.UNSIGNED_SHORT_4_4_4_4&&(Z=t.RGBA4),z===t.UNSIGNED_SHORT_5_5_5_1&&(Z=t.RGB5_A1)}return(Z===t.R16F||Z===t.R32F||Z===t.RG16F||Z===t.RG32F||Z===t.RGBA16F||Z===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function E(R,S){let z;return R?S===null||S===Ni||S===Ba?z=t.DEPTH24_STENCIL8:S===Ti?z=t.DEPTH32F_STENCIL8:S===ka&&(z=t.DEPTH24_STENCIL8,Ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ni||S===Ba?z=t.DEPTH_COMPONENT24:S===Ti?z=t.DEPTH_COMPONENT32F:S===ka&&(z=t.DEPTH_COMPONENT16),z}function w(R,S){return h(R)===!0||R.isFramebufferTexture&&R.minFilter!==Qt&&R.minFilter!==ln?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function C(R){const S=R.target;S.removeEventListener("dispose",C),A(S),S.isVideoTexture&&f.delete(S),S.isHTMLTexture&&d.delete(S)}function _(R){const S=R.target;S.removeEventListener("dispose",_),D(S)}function A(R){const S=i.get(R);if(S.__webglInit===void 0)return;const z=R.source,X=p.get(z);if(X){const q=X[S.__cacheKey];q.usedTimes--,q.usedTimes===0&&b(R),Object.keys(X).length===0&&p.delete(z)}i.remove(R)}function b(R){const S=i.get(R);t.deleteTexture(S.__webglTexture);const z=R.source,X=p.get(z);delete X[S.__cacheKey],o.memory.textures--}function D(R){const S=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(S.__webglFramebuffer[X]))for(let q=0;q<S.__webglFramebuffer[X].length;q++)t.deleteFramebuffer(S.__webglFramebuffer[X][q]);else t.deleteFramebuffer(S.__webglFramebuffer[X]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[X])}else{if(Array.isArray(S.__webglFramebuffer))for(let X=0;X<S.__webglFramebuffer.length;X++)t.deleteFramebuffer(S.__webglFramebuffer[X]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let X=0;X<S.__webglColorRenderbuffer.length;X++)S.__webglColorRenderbuffer[X]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[X]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const z=R.textures;for(let X=0,q=z.length;X<q;X++){const le=i.get(z[X]);le.__webglTexture&&(t.deleteTexture(le.__webglTexture),o.memory.textures--),i.remove(z[X])}i.remove(R)}let U=0;function $(){U=0}function Y(){return U}function B(R){U=R}function I(){const R=U;return R>=r.maxTextures&&Ne("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),U+=1,R}function L(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function N(R,S){const z=i.get(R);if(R.isVideoTexture&&O(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&z.__version!==R.version){const X=R.image;if(X===null)Ne("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Ne("WebGLRenderer: Texture marked for update but image is incomplete");else{Le(z,R,S);return}}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,z.__webglTexture,t.TEXTURE0+S)}function V(R,S){const z=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){Le(z,R,S);return}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,z.__webglTexture,t.TEXTURE0+S)}function K(R,S){const z=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){Le(z,R,S);return}n.bindTexture(t.TEXTURE_3D,z.__webglTexture,t.TEXTURE0+S)}function ne(R,S){const z=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&z.__version!==R.version){Ie(z,R,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,z.__webglTexture,t.TEXTURE0+S)}const oe={[Dh]:t.REPEAT,[$i]:t.CLAMP_TO_EDGE,[Lh]:t.MIRRORED_REPEAT},Ve={[Qt]:t.NEAREST,[a2]:t.NEAREST_MIPMAP_NEAREST,[Tl]:t.NEAREST_MIPMAP_LINEAR,[ln]:t.LINEAR,[Cf]:t.LINEAR_MIPMAP_NEAREST,[os]:t.LINEAR_MIPMAP_LINEAR},He={[u2]:t.NEVER,[m2]:t.ALWAYS,[f2]:t.LESS,[Wm]:t.LEQUAL,[d2]:t.EQUAL,[Xm]:t.GEQUAL,[h2]:t.GREATER,[p2]:t.NOTEQUAL};function ke(R,S){if(S.type===Ti&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===ln||S.magFilter===Cf||S.magFilter===Tl||S.magFilter===os||S.minFilter===ln||S.minFilter===Cf||S.minFilter===Tl||S.minFilter===os)&&Ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,oe[S.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,oe[S.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,oe[S.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,Ve[S.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,Ve[S.minFilter]),S.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,He[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Qt||S.minFilter!==Tl&&S.minFilter!==os||S.type===Ti&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Q(R,S){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",C));const X=S.source;let q=p.get(X);q===void 0&&(q={},p.set(X,q));const le=L(S);if(le!==R.__cacheKey){q[le]===void 0&&(q[le]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,z=!0),q[le].usedTimes++;const ue=q[R.__cacheKey];ue!==void 0&&(q[R.__cacheKey].usedTimes--,ue.usedTimes===0&&b(S)),R.__cacheKey=le,R.__webglTexture=q[le].texture}return z}function ae(R,S,z){return Math.floor(Math.floor(R/z)/S)}function se(R,S,z,X){const le=R.updateRanges;if(le.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,S.width,S.height,z,X,S.data);else{le.sort((Ae,pe)=>Ae.start-pe.start);let ue=0;for(let Ae=1;Ae<le.length;Ae++){const pe=le[ue],de=le[Ae],be=pe.start+pe.count,De=ae(de.start,S.width,4),Fe=ae(pe.start,S.width,4);de.start<=be+1&&De===Fe&&ae(de.start+de.count-1,S.width,4)===De?pe.count=Math.max(pe.count,de.start+de.count-pe.start):(++ue,le[ue]=de)}le.length=ue+1;const Z=n.getParameter(t.UNPACK_ROW_LENGTH),te=n.getParameter(t.UNPACK_SKIP_PIXELS),fe=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,S.width);for(let Ae=0,pe=le.length;Ae<pe;Ae++){const de=le[Ae],be=Math.floor(de.start/4),De=Math.ceil(de.count/4),Fe=be%S.width,F=Math.floor(be/S.width),ce=De,ee=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Fe),n.pixelStorei(t.UNPACK_SKIP_ROWS,F),n.texSubImage2D(t.TEXTURE_2D,0,Fe,F,ce,ee,z,X,S.data)}R.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,Z),n.pixelStorei(t.UNPACK_SKIP_PIXELS,te),n.pixelStorei(t.UNPACK_SKIP_ROWS,fe)}}function Le(R,S,z){let X=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(X=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(X=t.TEXTURE_3D);const q=Q(R,S),le=S.source;n.bindTexture(X,R.__webglTexture,t.TEXTURE0+z);const ue=i.get(le);if(le.version!==ue.__version||q===!0){if(n.activeTexture(t.TEXTURE0+z),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const ee=$e.getPrimaries($e.workingColorSpace),he=S.colorSpace===Sr?null:$e.getPrimaries(S.colorSpace),_e=S.colorSpace===Sr||ee===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e)}n.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment);let te=g(S.image,!1,r.maxTextureSize);te=_n(S,te);const fe=s.convert(S.format,S.colorSpace),Ae=s.convert(S.type);let pe=x(S.internalFormat,fe,Ae,S.normalized,S.colorSpace,S.isVideoTexture);ke(X,S);let de;const be=S.mipmaps,De=S.isVideoTexture!==!0,Fe=ue.__version===void 0||q===!0,F=le.dataReady,ce=w(S,te);if(S.isDepthTexture)pe=E(S.format===as,S.type),Fe&&(De?n.texStorage2D(t.TEXTURE_2D,1,pe,te.width,te.height):n.texImage2D(t.TEXTURE_2D,0,pe,te.width,te.height,0,fe,Ae,null));else if(S.isDataTexture)if(be.length>0){De&&Fe&&n.texStorage2D(t.TEXTURE_2D,ce,pe,be[0].width,be[0].height);for(let ee=0,he=be.length;ee<he;ee++)de=be[ee],De?F&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,de.width,de.height,fe,Ae,de.data):n.texImage2D(t.TEXTURE_2D,ee,pe,de.width,de.height,0,fe,Ae,de.data);S.generateMipmaps=!1}else De?(Fe&&n.texStorage2D(t.TEXTURE_2D,ce,pe,te.width,te.height),F&&se(S,te,fe,Ae)):n.texImage2D(t.TEXTURE_2D,0,pe,te.width,te.height,0,fe,Ae,te.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){De&&Fe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ce,pe,be[0].width,be[0].height,te.depth);for(let ee=0,he=be.length;ee<he;ee++)if(de=be[ee],S.format!==ai)if(fe!==null)if(De){if(F)if(S.layerUpdates.size>0){const _e=f_(de.width,de.height,S.format,S.type);for(const ie of S.layerUpdates){const we=de.data.subarray(ie*_e/de.data.BYTES_PER_ELEMENT,(ie+1)*_e/de.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,ie,de.width,de.height,1,fe,we)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,0,de.width,de.height,te.depth,fe,de.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ee,pe,de.width,de.height,te.depth,0,de.data,0,0);else Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?F&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,0,de.width,de.height,te.depth,fe,Ae,de.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ee,pe,de.width,de.height,te.depth,0,fe,Ae,de.data)}else{De&&Fe&&n.texStorage2D(t.TEXTURE_2D,ce,pe,be[0].width,be[0].height);for(let ee=0,he=be.length;ee<he;ee++)de=be[ee],S.format!==ai?fe!==null?De?F&&n.compressedTexSubImage2D(t.TEXTURE_2D,ee,0,0,de.width,de.height,fe,de.data):n.compressedTexImage2D(t.TEXTURE_2D,ee,pe,de.width,de.height,0,de.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?F&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,de.width,de.height,fe,Ae,de.data):n.texImage2D(t.TEXTURE_2D,ee,pe,de.width,de.height,0,fe,Ae,de.data)}else if(S.isDataArrayTexture)if(De){if(Fe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ce,pe,te.width,te.height,te.depth),F)if(S.layerUpdates.size>0){const ee=f_(te.width,te.height,S.format,S.type);for(const he of S.layerUpdates){const _e=te.data.subarray(he*ee/te.data.BYTES_PER_ELEMENT,(he+1)*ee/te.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,he,te.width,te.height,1,fe,Ae,_e)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,fe,Ae,te.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,pe,te.width,te.height,te.depth,0,fe,Ae,te.data);else if(S.isData3DTexture)De?(Fe&&n.texStorage3D(t.TEXTURE_3D,ce,pe,te.width,te.height,te.depth),F&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,fe,Ae,te.data)):n.texImage3D(t.TEXTURE_3D,0,pe,te.width,te.height,te.depth,0,fe,Ae,te.data);else if(S.isFramebufferTexture){if(Fe)if(De)n.texStorage2D(t.TEXTURE_2D,ce,pe,te.width,te.height);else{let ee=te.width,he=te.height;for(let _e=0;_e<ce;_e++)n.texImage2D(t.TEXTURE_2D,_e,pe,ee,he,0,fe,Ae,null),ee>>=1,he>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in t){const ee=t.canvas;if(ee.hasAttribute("layoutsubtree")||ee.setAttribute("layoutsubtree","true"),te.parentNode!==ee){ee.appendChild(te),d.add(S),ee.onpaint=he=>{const _e=he.changedElements;for(const ie of d)_e.includes(ie.image)&&(ie.needsUpdate=!0)},ee.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,te);else{const _e=t.RGBA,ie=t.RGBA,we=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,_e,ie,we,te)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(be.length>0){if(De&&Fe){const ee=tt(be[0]);n.texStorage2D(t.TEXTURE_2D,ce,pe,ee.width,ee.height)}for(let ee=0,he=be.length;ee<he;ee++)de=be[ee],De?F&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,fe,Ae,de):n.texImage2D(t.TEXTURE_2D,ee,pe,fe,Ae,de);S.generateMipmaps=!1}else if(De){if(Fe){const ee=tt(te);n.texStorage2D(t.TEXTURE_2D,ce,pe,ee.width,ee.height)}F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,fe,Ae,te)}else n.texImage2D(t.TEXTURE_2D,0,pe,fe,Ae,te);h(S)&&v(X),ue.__version=le.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function Ie(R,S,z){if(S.image.length!==6)return;const X=Q(R,S),q=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+z);const le=i.get(q);if(q.version!==le.__version||X===!0){n.activeTexture(t.TEXTURE0+z);const ue=$e.getPrimaries($e.workingColorSpace),Z=S.colorSpace===Sr?null:$e.getPrimaries(S.colorSpace),te=S.colorSpace===Sr||ue===Z?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);const fe=S.isCompressedTexture||S.image[0].isCompressedTexture,Ae=S.image[0]&&S.image[0].isDataTexture,pe=[];for(let ie=0;ie<6;ie++)!fe&&!Ae?pe[ie]=g(S.image[ie],!0,r.maxCubemapSize):pe[ie]=Ae?S.image[ie].image:S.image[ie],pe[ie]=_n(S,pe[ie]);const de=pe[0],be=s.convert(S.format,S.colorSpace),De=s.convert(S.type),Fe=x(S.internalFormat,be,De,S.normalized,S.colorSpace),F=S.isVideoTexture!==!0,ce=le.__version===void 0||X===!0,ee=q.dataReady;let he=w(S,de);ke(t.TEXTURE_CUBE_MAP,S);let _e;if(fe){F&&ce&&n.texStorage2D(t.TEXTURE_CUBE_MAP,he,Fe,de.width,de.height);for(let ie=0;ie<6;ie++){_e=pe[ie].mipmaps;for(let we=0;we<_e.length;we++){const Ee=_e[we];S.format!==ai?be!==null?F?ee&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we,0,0,Ee.width,Ee.height,be,Ee.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we,Fe,Ee.width,Ee.height,0,Ee.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we,0,0,Ee.width,Ee.height,be,De,Ee.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we,Fe,Ee.width,Ee.height,0,be,De,Ee.data)}}}else{if(_e=S.mipmaps,F&&ce){_e.length>0&&he++;const ie=tt(pe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,he,Fe,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(Ae){F?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,pe[ie].width,pe[ie].height,be,De,pe[ie].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Fe,pe[ie].width,pe[ie].height,0,be,De,pe[ie].data);for(let we=0;we<_e.length;we++){const St=_e[we].image[ie].image;F?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we+1,0,0,St.width,St.height,be,De,St.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we+1,Fe,St.width,St.height,0,be,De,St.data)}}else{F?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,be,De,pe[ie]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Fe,be,De,pe[ie]);for(let we=0;we<_e.length;we++){const Ee=_e[we];F?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we+1,0,0,be,De,Ee.image[ie]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we+1,Fe,be,De,Ee.image[ie])}}}h(S)&&v(t.TEXTURE_CUBE_MAP),le.__version=q.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function Pe(R,S,z,X,q,le){const ue=s.convert(z.format,z.colorSpace),Z=s.convert(z.type),te=x(z.internalFormat,ue,Z,z.normalized,z.colorSpace),fe=i.get(S),Ae=i.get(z);if(Ae.__renderTarget=S,!fe.__hasExternalTextures){const pe=Math.max(1,S.width>>le),de=Math.max(1,S.height>>le);q===t.TEXTURE_3D||q===t.TEXTURE_2D_ARRAY?n.texImage3D(q,le,te,pe,de,S.depth,0,ue,Z,null):n.texImage2D(q,le,te,pe,de,0,ue,Z,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Pt(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,X,q,Ae.__webglTexture,0,yt(S)):(q===t.TEXTURE_2D||q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,X,q,Ae.__webglTexture,le),n.bindFramebuffer(t.FRAMEBUFFER,null)}function gt(R,S,z){if(t.bindRenderbuffer(t.RENDERBUFFER,R),S.depthBuffer){const X=S.depthTexture,q=X&&X.isDepthTexture?X.type:null,le=E(S.stencilBuffer,q),ue=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Pt(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,yt(S),le,S.width,S.height):z?t.renderbufferStorageMultisample(t.RENDERBUFFER,yt(S),le,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,le,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ue,t.RENDERBUFFER,R)}else{const X=S.textures;for(let q=0;q<X.length;q++){const le=X[q],ue=s.convert(le.format,le.colorSpace),Z=s.convert(le.type),te=x(le.internalFormat,ue,Z,le.normalized,le.colorSpace);Pt(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,yt(S),te,S.width,S.height):z?t.renderbufferStorageMultisample(t.RENDERBUFFER,yt(S),te,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,te,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function We(R,S,z){const X=S.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const q=i.get(S.depthTexture);if(q.__renderTarget=S,(!q.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),X){if(q.__webglInit===void 0&&(q.__webglInit=!0,S.depthTexture.addEventListener("dispose",C)),q.__webglTexture===void 0){q.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture),ke(t.TEXTURE_CUBE_MAP,S.depthTexture);const fe=s.convert(S.depthTexture.format),Ae=s.convert(S.depthTexture.type);let pe;S.depthTexture.format===ir?pe=t.DEPTH_COMPONENT24:S.depthTexture.format===as&&(pe=t.DEPTH24_STENCIL8);for(let de=0;de<6;de++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,pe,S.width,S.height,0,fe,Ae,null)}}else N(S.depthTexture,0);const le=q.__webglTexture,ue=yt(S),Z=X?t.TEXTURE_CUBE_MAP_POSITIVE_X+z:t.TEXTURE_2D,te=S.depthTexture.format===as?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(S.depthTexture.format===ir)Pt(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,Z,le,0,ue):t.framebufferTexture2D(t.FRAMEBUFFER,te,Z,le,0);else if(S.depthTexture.format===as)Pt(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,Z,le,0,ue):t.framebufferTexture2D(t.FRAMEBUFFER,te,Z,le,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function st(R){const S=i.get(R),z=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const X=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),X){const q=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,X.removeEventListener("dispose",q)};X.addEventListener("dispose",q),S.__depthDisposeCallback=q}S.__boundDepthTexture=X}if(R.depthTexture&&!S.__autoAllocateDepthBuffer)if(z)for(let X=0;X<6;X++)We(S.__webglFramebuffer[X],R,X);else{const X=R.texture.mipmaps;X&&X.length>0?We(S.__webglFramebuffer[0],R,0):We(S.__webglFramebuffer,R,0)}else if(z){S.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[X]),S.__webglDepthbuffer[X]===void 0)S.__webglDepthbuffer[X]=t.createRenderbuffer(),gt(S.__webglDepthbuffer[X],R,!1);else{const q=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=S.__webglDepthbuffer[X];t.bindRenderbuffer(t.RENDERBUFFER,le),t.framebufferRenderbuffer(t.FRAMEBUFFER,q,t.RENDERBUFFER,le)}}else{const X=R.texture.mipmaps;if(X&&X.length>0?n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=t.createRenderbuffer(),gt(S.__webglDepthbuffer,R,!1);else{const q=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=S.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,le),t.framebufferRenderbuffer(t.FRAMEBUFFER,q,t.RENDERBUFFER,le)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Je(R,S,z){const X=i.get(R);S!==void 0&&Pe(X.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),z!==void 0&&st(R)}function Ye(R){const S=R.texture,z=i.get(R),X=i.get(S);R.addEventListener("dispose",_);const q=R.textures,le=R.isWebGLCubeRenderTarget===!0,ue=q.length>1;if(ue||(X.__webglTexture===void 0&&(X.__webglTexture=t.createTexture()),X.__version=S.version,o.memory.textures++),le){z.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer[Z]=[];for(let te=0;te<S.mipmaps.length;te++)z.__webglFramebuffer[Z][te]=t.createFramebuffer()}else z.__webglFramebuffer[Z]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer=[];for(let Z=0;Z<S.mipmaps.length;Z++)z.__webglFramebuffer[Z]=t.createFramebuffer()}else z.__webglFramebuffer=t.createFramebuffer();if(ue)for(let Z=0,te=q.length;Z<te;Z++){const fe=i.get(q[Z]);fe.__webglTexture===void 0&&(fe.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&Pt(R)===!1){z.__webglMultisampledFramebuffer=t.createFramebuffer(),z.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let Z=0;Z<q.length;Z++){const te=q[Z];z.__webglColorRenderbuffer[Z]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,z.__webglColorRenderbuffer[Z]);const fe=s.convert(te.format,te.colorSpace),Ae=s.convert(te.type),pe=x(te.internalFormat,fe,Ae,te.normalized,te.colorSpace,R.isXRRenderTarget===!0),de=yt(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,de,pe,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Z,t.RENDERBUFFER,z.__webglColorRenderbuffer[Z])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=t.createRenderbuffer(),gt(z.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(le){n.bindTexture(t.TEXTURE_CUBE_MAP,X.__webglTexture),ke(t.TEXTURE_CUBE_MAP,S);for(let Z=0;Z<6;Z++)if(S.mipmaps&&S.mipmaps.length>0)for(let te=0;te<S.mipmaps.length;te++)Pe(z.__webglFramebuffer[Z][te],R,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,te);else Pe(z.__webglFramebuffer[Z],R,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);h(S)&&v(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ue){for(let Z=0,te=q.length;Z<te;Z++){const fe=q[Z],Ae=i.get(fe);let pe=t.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(pe=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(pe,Ae.__webglTexture),ke(pe,fe),Pe(z.__webglFramebuffer,R,fe,t.COLOR_ATTACHMENT0+Z,pe,0),h(fe)&&v(pe)}n.unbindTexture()}else{let Z=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Z=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Z,X.__webglTexture),ke(Z,S),S.mipmaps&&S.mipmaps.length>0)for(let te=0;te<S.mipmaps.length;te++)Pe(z.__webglFramebuffer[te],R,S,t.COLOR_ATTACHMENT0,Z,te);else Pe(z.__webglFramebuffer,R,S,t.COLOR_ATTACHMENT0,Z,0);h(S)&&v(Z),n.unbindTexture()}R.depthBuffer&&st(R)}function bt(R){const S=R.textures;for(let z=0,X=S.length;z<X;z++){const q=S[z];if(h(q)){const le=y(R),ue=i.get(q).__webglTexture;n.bindTexture(le,ue),v(le),n.unbindTexture()}}}const Ft=[],Gt=[];function $t(R){if(R.samples>0){if(Pt(R)===!1){const S=R.textures,z=R.width,X=R.height;let q=t.COLOR_BUFFER_BIT;const le=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=i.get(R),Z=S.length>1;if(Z)for(let fe=0;fe<S.length;fe++)n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer);const te=R.texture.mipmaps;te&&te.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let fe=0;fe<S.length;fe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(q|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(q|=t.STENCIL_BUFFER_BIT)),Z){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ue.__webglColorRenderbuffer[fe]);const Ae=i.get(S[fe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ae,0)}t.blitFramebuffer(0,0,z,X,0,0,z,X,q,t.NEAREST),l===!0&&(Ft.length=0,Gt.length=0,Ft.push(t.COLOR_ATTACHMENT0+fe),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Ft.push(le),Gt.push(le),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Gt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ft))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Z)for(let fe=0;fe<S.length;fe++){n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,ue.__webglColorRenderbuffer[fe]);const Ae=i.get(S[fe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,Ae,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const S=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function yt(R){return Math.min(r.maxSamples,R.samples)}function Pt(R){const S=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function O(R){const S=o.render.frame;f.get(R)!==S&&(f.set(R,S),R.update())}function _n(R,S){const z=R.colorSpace,X=R.format,q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==nu&&z!==Sr&&($e.getTransfer(z)===nt?(X!==ai||q!==Gn)&&Ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ze("WebGLTextures: Unsupported texture color space:",z)),S}function tt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=$,this.getTextureUnits=Y,this.setTextureUnits=B,this.setTexture2D=N,this.setTexture2DArray=V,this.setTexture3D=K,this.setTextureCube=ne,this.rebindTextures=Je,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=bt,this.updateMultisampleRenderTarget=$t,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=Pe,this.useMultisampledRTT=Pt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function zI(t,e){function n(i,r=Sr){let s;const o=$e.getTransfer(r);if(i===Gn)return t.UNSIGNED_BYTE;if(i===Bm)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Vm)return t.UNSIGNED_SHORT_5_5_5_1;if(i===qM)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===YM)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===jM)return t.BYTE;if(i===$M)return t.SHORT;if(i===ka)return t.UNSIGNED_SHORT;if(i===km)return t.INT;if(i===Ni)return t.UNSIGNED_INT;if(i===Ti)return t.FLOAT;if(i===nr)return t.HALF_FLOAT;if(i===KM)return t.ALPHA;if(i===ZM)return t.RGB;if(i===ai)return t.RGBA;if(i===ir)return t.DEPTH_COMPONENT;if(i===as)return t.DEPTH_STENCIL;if(i===QM)return t.RED;if(i===zm)return t.RED_INTEGER;if(i===_s)return t.RG;if(i===Hm)return t.RG_INTEGER;if(i===Gm)return t.RGBA_INTEGER;if(i===pc||i===mc||i===gc||i===vc)if(o===nt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===pc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===mc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===gc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===vc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===pc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===mc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===gc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===vc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Nh||i===Ih||i===Uh||i===Fh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Nh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ih)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Uh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Fh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Oh||i===kh||i===Bh||i===Vh||i===zh||i===eu||i===Hh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Oh||i===kh)return o===nt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Bh)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Vh)return s.COMPRESSED_R11_EAC;if(i===zh)return s.COMPRESSED_SIGNED_R11_EAC;if(i===eu)return s.COMPRESSED_RG11_EAC;if(i===Hh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Gh||i===Wh||i===Xh||i===jh||i===$h||i===qh||i===Yh||i===Kh||i===Zh||i===Qh||i===Jh||i===ep||i===tp||i===np)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Gh)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Wh)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Xh)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===jh)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===$h)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===qh)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Yh)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Kh)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Zh)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Qh)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Jh)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ep)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===tp)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===np)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ip||i===rp||i===sp)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ip)return o===nt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===rp)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===sp)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===op||i===ap||i===tu||i===lp)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===op)return s.COMPRESSED_RED_RGTC1_EXT;if(i===ap)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===tu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===lp)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ba?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const HI=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,GI=`
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

}`;class WI{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new lE(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new di({vertexShader:HI,fragmentShader:GI,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ii(new Qa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class XI extends Ms{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,d=null,u=null,p=null,m=null;const M=typeof XRWebGLBinding<"u",g=new WI,h={},v=n.getContextAttributes();let y=null,x=null;const E=[],w=[],C=new Xe;let _=null;const A=new si;A.viewport=new wt;const b=new si;b.viewport=new wt;const D=[A,b],U=new e3;let $=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ae=E[Q];return ae===void 0&&(ae=new Uf,E[Q]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(Q){let ae=E[Q];return ae===void 0&&(ae=new Uf,E[Q]=ae),ae.getGripSpace()},this.getHand=function(Q){let ae=E[Q];return ae===void 0&&(ae=new Uf,E[Q]=ae),ae.getHandSpace()};function B(Q){const ae=w.indexOf(Q.inputSource);if(ae===-1)return;const se=E[ae];se!==void 0&&(se.update(Q.inputSource,Q.frame,c||o),se.dispatchEvent({type:Q.type,data:Q.inputSource}))}function I(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",I),r.removeEventListener("inputsourceschange",L);for(let Q=0;Q<E.length;Q++){const ae=w[Q];ae!==null&&(w[Q]=null,E[Q].disconnect(ae))}$=null,Y=null,g.reset();for(const Q in h)delete h[Q];e.setRenderTarget(y),p=null,u=null,d=null,r=null,x=null,ke.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,i.isPresenting===!0&&Ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,i.isPresenting===!0&&Ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d===null&&M&&(d=new XRWebGLBinding(r,n)),d},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",I),r.addEventListener("inputsourceschange",L),v.xrCompatible!==!0&&await n.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(C),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,Le=null,Ie=null;v.depth&&(Ie=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,se=v.stencil?as:ir,Le=v.stencil?Ba:Ni);const Pe={colorFormat:n.RGBA8,depthFormat:Ie,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(Pe),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),x=new Pi(u.textureWidth,u.textureHeight,{format:ai,type:Gn,depthTexture:new Eo(u.textureWidth,u.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const se={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,se),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new Pi(p.framebufferWidth,p.framebufferHeight,{format:ai,type:Gn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ke.setContext(r),ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function L(Q){for(let ae=0;ae<Q.removed.length;ae++){const se=Q.removed[ae],Le=w.indexOf(se);Le>=0&&(w[Le]=null,E[Le].disconnect(se))}for(let ae=0;ae<Q.added.length;ae++){const se=Q.added[ae];let Le=w.indexOf(se);if(Le===-1){for(let Pe=0;Pe<E.length;Pe++)if(Pe>=w.length){w.push(se),Le=Pe;break}else if(w[Pe]===null){w[Pe]=se,Le=Pe;break}if(Le===-1)break}const Ie=E[Le];Ie&&Ie.connect(se)}}const N=new W,V=new W;function K(Q,ae,se){N.setFromMatrixPosition(ae.matrixWorld),V.setFromMatrixPosition(se.matrixWorld);const Le=N.distanceTo(V),Ie=ae.projectionMatrix.elements,Pe=se.projectionMatrix.elements,gt=Ie[14]/(Ie[10]-1),We=Ie[14]/(Ie[10]+1),st=(Ie[9]+1)/Ie[5],Je=(Ie[9]-1)/Ie[5],Ye=(Ie[8]-1)/Ie[0],bt=(Pe[8]+1)/Pe[0],Ft=gt*Ye,Gt=gt*bt,$t=Le/(-Ye+bt),yt=$t*-Ye;if(ae.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(yt),Q.translateZ($t),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ie[10]===-1)Q.projectionMatrix.copy(ae.projectionMatrix),Q.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const Pt=gt+$t,O=We+$t,_n=Ft-yt,tt=Gt+(Le-yt),R=st*We/O*Pt,S=Je*We/O*Pt;Q.projectionMatrix.makePerspective(_n,tt,R,S,Pt,O),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function ne(Q,ae){ae===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ae.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;let ae=Q.near,se=Q.far;g.texture!==null&&(g.depthNear>0&&(ae=g.depthNear),g.depthFar>0&&(se=g.depthFar)),U.near=b.near=A.near=ae,U.far=b.far=A.far=se,($!==U.near||Y!==U.far)&&(r.updateRenderState({depthNear:U.near,depthFar:U.far}),$=U.near,Y=U.far),U.layers.mask=Q.layers.mask|6,A.layers.mask=U.layers.mask&-5,b.layers.mask=U.layers.mask&-3;const Le=Q.parent,Ie=U.cameras;ne(U,Le);for(let Pe=0;Pe<Ie.length;Pe++)ne(Ie[Pe],Le);Ie.length===2?K(U,A,b):U.projectionMatrix.copy(A.projectionMatrix),oe(Q,U,Le)};function oe(Q,ae,se){se===null?Q.matrix.copy(ae.matrixWorld):(Q.matrix.copy(se.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ae.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ae.projectionMatrix),Q.projectionMatrixInverse.copy(ae.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=cp*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(Q){l=Q,u!==null&&(u.fixedFoveation=Q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(U)},this.getCameraTexture=function(Q){return h[Q]};let Ve=null;function He(Q,ae){if(f=ae.getViewerPose(c||o),m=ae,f!==null){const se=f.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let Le=!1;se.length!==U.cameras.length&&(U.cameras.length=0,Le=!0);for(let We=0;We<se.length;We++){const st=se[We];let Je=null;if(p!==null)Je=p.getViewport(st);else{const bt=d.getViewSubImage(u,st);Je=bt.viewport,We===0&&(e.setRenderTargetTextures(x,bt.colorTexture,bt.depthStencilTexture),e.setRenderTarget(x))}let Ye=D[We];Ye===void 0&&(Ye=new si,Ye.layers.enable(We),Ye.viewport=new wt,D[We]=Ye),Ye.matrix.fromArray(st.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(st.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(Je.x,Je.y,Je.width,Je.height),We===0&&(U.matrix.copy(Ye.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Le===!0&&U.cameras.push(Ye)}const Ie=r.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&M){d=i.getBinding();const We=d.getDepthInformation(se[0]);We&&We.isValid&&We.texture&&g.init(We,r.renderState)}if(Ie&&Ie.includes("camera-access")&&M){e.state.unbindTexture(),d=i.getBinding();for(let We=0;We<se.length;We++){const st=se[We].camera;if(st){let Je=h[st];Je||(Je=new lE,h[st]=Je);const Ye=d.getCameraImage(st);Je.sourceTexture=Ye}}}}for(let se=0;se<E.length;se++){const Le=w[se],Ie=E[se];Le!==null&&Ie!==void 0&&Ie.update(Le,ae,c||o)}Ve&&Ve(Q,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),m=null}const ke=new fE;ke.setAnimationLoop(He),this.setAnimationLoop=function(Q){Ve=Q},this.dispose=function(){}}}const jI=new Ut,_E=new Ue;_E.set(-1,0,0,0,1,0,0,0,1);function $I(t,e){function n(g,h){g.matrixAutoUpdate===!0&&g.updateMatrix(),h.value.copy(g.matrix)}function i(g,h){h.color.getRGB(g.fogColor.value,cE(t)),h.isFog?(g.fogNear.value=h.near,g.fogFar.value=h.far):h.isFogExp2&&(g.fogDensity.value=h.density)}function r(g,h,v,y,x){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?s(g,h):h.isMeshLambertMaterial?(s(g,h),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(s(g,h),d(g,h)):h.isMeshPhongMaterial?(s(g,h),f(g,h),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(s(g,h),u(g,h),h.isMeshPhysicalMaterial&&p(g,h,x)):h.isMeshMatcapMaterial?(s(g,h),m(g,h)):h.isMeshDepthMaterial?s(g,h):h.isMeshDistanceMaterial?(s(g,h),M(g,h)):h.isMeshNormalMaterial?s(g,h):h.isLineBasicMaterial?(o(g,h),h.isLineDashedMaterial&&a(g,h)):h.isPointsMaterial?l(g,h,v,y):h.isSpriteMaterial?c(g,h):h.isShadowMaterial?(g.color.value.copy(h.color),g.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(g,h){g.opacity.value=h.opacity,h.color&&g.diffuse.value.copy(h.color),h.emissive&&g.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.bumpMap&&(g.bumpMap.value=h.bumpMap,n(h.bumpMap,g.bumpMapTransform),g.bumpScale.value=h.bumpScale,h.side===wn&&(g.bumpScale.value*=-1)),h.normalMap&&(g.normalMap.value=h.normalMap,n(h.normalMap,g.normalMapTransform),g.normalScale.value.copy(h.normalScale),h.side===wn&&g.normalScale.value.negate()),h.displacementMap&&(g.displacementMap.value=h.displacementMap,n(h.displacementMap,g.displacementMapTransform),g.displacementScale.value=h.displacementScale,g.displacementBias.value=h.displacementBias),h.emissiveMap&&(g.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,g.emissiveMapTransform)),h.specularMap&&(g.specularMap.value=h.specularMap,n(h.specularMap,g.specularMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest);const v=e.get(h),y=v.envMap,x=v.envMapRotation;y&&(g.envMap.value=y,g.envMapRotation.value.setFromMatrix4(jI.makeRotationFromEuler(x)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(_E),g.reflectivity.value=h.reflectivity,g.ior.value=h.ior,g.refractionRatio.value=h.refractionRatio),h.lightMap&&(g.lightMap.value=h.lightMap,g.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,g.lightMapTransform)),h.aoMap&&(g.aoMap.value=h.aoMap,g.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,g.aoMapTransform))}function o(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform))}function a(g,h){g.dashSize.value=h.dashSize,g.totalSize.value=h.dashSize+h.gapSize,g.scale.value=h.scale}function l(g,h,v,y){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.size.value=h.size*v,g.scale.value=y*.5,h.map&&(g.map.value=h.map,n(h.map,g.uvTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function c(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.rotation.value=h.rotation,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function f(g,h){g.specular.value.copy(h.specular),g.shininess.value=Math.max(h.shininess,1e-4)}function d(g,h){h.gradientMap&&(g.gradientMap.value=h.gradientMap)}function u(g,h){g.metalness.value=h.metalness,h.metalnessMap&&(g.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,g.metalnessMapTransform)),g.roughness.value=h.roughness,h.roughnessMap&&(g.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,g.roughnessMapTransform)),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)}function p(g,h,v){g.ior.value=h.ior,h.sheen>0&&(g.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),g.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(g.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,g.sheenColorMapTransform)),h.sheenRoughnessMap&&(g.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,g.sheenRoughnessMapTransform))),h.clearcoat>0&&(g.clearcoat.value=h.clearcoat,g.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(g.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,g.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(g.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===wn&&g.clearcoatNormalScale.value.negate())),h.dispersion>0&&(g.dispersion.value=h.dispersion),h.iridescence>0&&(g.iridescence.value=h.iridescence,g.iridescenceIOR.value=h.iridescenceIOR,g.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(g.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,g.iridescenceMapTransform)),h.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),h.transmission>0&&(g.transmission.value=h.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(g.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,g.transmissionMapTransform)),g.thickness.value=h.thickness,h.thicknessMap&&(g.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=h.attenuationDistance,g.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(g.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(g.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=h.specularIntensity,g.specularColor.value.copy(h.specularColor),h.specularColorMap&&(g.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,g.specularColorMapTransform)),h.specularIntensityMap&&(g.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,h){h.matcap&&(g.matcap.value=h.matcap)}function M(g,h){const v=e.get(h).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function qI(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,E){const w=E.program;i.uniformBlockBinding(x,w)}function c(x,E){let w=r[x.id];w===void 0&&(g(x),w=f(x),r[x.id]=w,x.addEventListener("dispose",v));const C=E.program;i.updateUBOMapping(x,C);const _=e.render.frame;s[x.id]!==_&&(u(x),s[x.id]=_)}function f(x){const E=d();x.__bindingPointIndex=E;const w=t.createBuffer(),C=x.__size,_=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,w),t.bufferData(t.UNIFORM_BUFFER,C,_),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,E,w),w}function d(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return Ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const E=r[x.id],w=x.uniforms,C=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,E);for(let _=0,A=w.length;_<A;_++){const b=w[_];if(Array.isArray(b))for(let D=0,U=b.length;D<U;D++)p(b[D],_,D,C);else p(b,_,0,C)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(x,E,w,C){if(M(x,E,w,C)===!0){const _=x.__offset,A=x.value;if(Array.isArray(A)){let b=0;for(let D=0;D<A.length;D++){const U=A[D],$=h(U);m(U,x.__data,b),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(b+=$.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(A,x.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,_,x.__data)}}function m(x,E,w){typeof x=="number"||typeof x=="boolean"?E[0]=x:x.isMatrix3?(E[0]=x.elements[0],E[1]=x.elements[1],E[2]=x.elements[2],E[3]=0,E[4]=x.elements[3],E[5]=x.elements[4],E[6]=x.elements[5],E[7]=0,E[8]=x.elements[6],E[9]=x.elements[7],E[10]=x.elements[8],E[11]=0):ArrayBuffer.isView(x)?E.set(new x.constructor(x.buffer,x.byteOffset,E.length)):x.toArray(E,w)}function M(x,E,w,C){const _=x.value,A=E+"_"+w;if(C[A]===void 0)return typeof _=="number"||typeof _=="boolean"?C[A]=_:ArrayBuffer.isView(_)?C[A]=_.slice():C[A]=_.clone(),!0;{const b=C[A];if(typeof _=="number"||typeof _=="boolean"){if(b!==_)return C[A]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(b.equals(_)===!1)return b.copy(_),!0}}return!1}function g(x){const E=x.uniforms;let w=0;const C=16;for(let A=0,b=E.length;A<b;A++){const D=Array.isArray(E[A])?E[A]:[E[A]];for(let U=0,$=D.length;U<$;U++){const Y=D[U],B=Array.isArray(Y.value)?Y.value:[Y.value];for(let I=0,L=B.length;I<L;I++){const N=B[I],V=h(N),K=w%C,ne=K%V.boundary,oe=K+ne;w+=ne,oe!==0&&C-oe<V.storage&&(w+=C-oe),Y.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=w,w+=V.storage}}}const _=w%C;return _>0&&(w+=C-_),x.__size=w,x.__cache={},this}function h(x){const E={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(E.boundary=4,E.storage=4):x.isVector2?(E.boundary=8,E.storage=8):x.isVector3||x.isColor?(E.boundary=16,E.storage=12):x.isVector4?(E.boundary=16,E.storage=16):x.isMatrix3?(E.boundary=48,E.storage=48):x.isMatrix4?(E.boundary=64,E.storage=64):x.isTexture?Ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(E.boundary=16,E.storage=x.byteLength):Ne("WebGLRenderer: Unsupported uniform value type.",x),E}function v(x){const E=x.target;E.removeEventListener("dispose",v);const w=o.indexOf(E.__bindingPointIndex);o.splice(w,1),t.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function y(){for(const x in r)t.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:l,update:c,dispose:y}}const YI=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let _i=null;function KI(){return _i===null&&(_i=new z2(YI,16,16,_s,nr),_i.name="DFG_LUT",_i.minFilter=ln,_i.magFilter=ln,_i.wrapS=$i,_i.wrapT=$i,_i.generateMipmaps=!1,_i.needsUpdate=!0),_i}class ZI{constructor(e={}){const{canvas:n=v2(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:p=Gn}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const M=p,g=new Set([Gm,Hm,zm]),h=new Set([Gn,Ni,ka,Ba,Bm,Vm]),v=new Uint32Array(4),y=new Int32Array(4),x=new W;let E=null,w=null;const C=[],_=[];let A=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let D=!1,U=null,$=null,Y=null,B=null;this._outputColorSpace=Pn;let I=0,L=0,N=null,V=-1,K=null;const ne=new wt,oe=new wt;let Ve=null;const He=new et(0);let ke=0,Q=n.width,ae=n.height,se=1,Le=null,Ie=null;const Pe=new wt(0,0,Q,ae),gt=new wt(0,0,Q,ae);let We=!1;const st=new oE;let Je=!1,Ye=!1;const bt=new Ut,Ft=new W,Gt=new wt,$t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let yt=!1;function Pt(){return N===null?se:1}let O=i;function _n(T,k){return n.getContext(T,k)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Om}`),n.addEventListener("webglcontextlost",St,!1),n.addEventListener("webglcontextrestored",ut,!1),n.addEventListener("webglcontextcreationerror",hi,!1),O===null){const k="webgl2";if(O=_n(k,T),O===null)throw _n(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(T){throw Ze("WebGLRenderer: "+T.message),T}let tt,R,S,z,X,q,le,ue,Z,te,fe,Ae,pe,de,be,De,Fe,F,ce,ee,he,_e,ie;function we(){tt=new KL(O),tt.init(),he=new zI(O,tt),R=new HL(O,tt,e,he),S=new BI(O,tt),R.reversedDepthBuffer&&u&&S.buffers.depth.setReversed(!0),$=O.createFramebuffer(),Y=O.createFramebuffer(),B=O.createFramebuffer(),z=new JL(O),X=new wI,q=new VI(O,tt,S,X,R,he,z),le=new YL(b),ue=new i3(O),_e=new VL(O,ue),Z=new ZL(O,ue,z,_e),te=new tN(O,Z,ue,_e,z),F=new eN(O,R,q),be=new GL(X),fe=new TI(b,le,tt,R,_e,be),Ae=new $I(b,X),pe=new CI,de=new NI(tt),Fe=new BL(b,le,S,te,m,l),De=new kI(b,te,R),ie=new qI(O,z,R,S),ce=new zL(O,tt,z),ee=new QL(O,tt,z),z.programs=fe.programs,b.capabilities=R,b.extensions=tt,b.properties=X,b.renderLists=pe,b.shadowMap=De,b.state=S,b.info=z}we(),M!==Gn&&(A=new iN(M,n.width,n.height,a,r,s));const Ee=new XI(b,O);this.xr=Ee,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const T=tt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=tt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(T){T!==void 0&&(se=T,this.setSize(Q,ae,!1))},this.getSize=function(T){return T.set(Q,ae)},this.setSize=function(T,k,j=!0){if(Ee.isPresenting){Ne("WebGLRenderer: Can't change size while VR device is presenting.");return}Q=T,ae=k,n.width=Math.floor(T*se),n.height=Math.floor(k*se),j===!0&&(n.style.width=T+"px",n.style.height=k+"px"),A!==null&&A.setSize(n.width,n.height),this.setViewport(0,0,T,k)},this.getDrawingBufferSize=function(T){return T.set(Q*se,ae*se).floor()},this.setDrawingBufferSize=function(T,k,j){Q=T,ae=k,se=j,n.width=Math.floor(T*j),n.height=Math.floor(k*j),this.setViewport(0,0,T,k)},this.setEffects=function(T){if(M===Gn){Ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let k=0;k<T.length;k++)if(T[k].isOutputPass===!0){Ne("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(ne)},this.getViewport=function(T){return T.copy(Pe)},this.setViewport=function(T,k,j,H){T.isVector4?Pe.set(T.x,T.y,T.z,T.w):Pe.set(T,k,j,H),S.viewport(ne.copy(Pe).multiplyScalar(se).round())},this.getScissor=function(T){return T.copy(gt)},this.setScissor=function(T,k,j,H){T.isVector4?gt.set(T.x,T.y,T.z,T.w):gt.set(T,k,j,H),S.scissor(oe.copy(gt).multiplyScalar(se).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(T){S.setScissorTest(We=T)},this.setOpaqueSort=function(T){Le=T},this.setTransparentSort=function(T){Ie=T},this.getClearColor=function(T){return T.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor(...arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha(...arguments)},this.clear=function(T=!0,k=!0,j=!0){let H=0;if(T){let G=!1;if(N!==null){const ve=N.texture.format;G=g.has(ve)}if(G){const ve=N.texture.type,ye=h.has(ve),ge=Fe.getClearColor(),Te=Fe.getClearAlpha(),Ce=ge.r,Oe=ge.g,ze=ge.b;ye?(v[0]=Ce,v[1]=Oe,v[2]=ze,v[3]=Te,O.clearBufferuiv(O.COLOR,0,v)):(y[0]=Ce,y[1]=Oe,y[2]=ze,y[3]=Te,O.clearBufferiv(O.COLOR,0,y))}else H|=O.COLOR_BUFFER_BIT}k&&(H|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(H|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&O.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),U=T},this.dispose=function(){n.removeEventListener("webglcontextlost",St,!1),n.removeEventListener("webglcontextrestored",ut,!1),n.removeEventListener("webglcontextcreationerror",hi,!1),Fe.dispose(),pe.dispose(),de.dispose(),X.dispose(),le.dispose(),te.dispose(),_e.dispose(),ie.dispose(),fe.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",tg),Ee.removeEventListener("sessionend",ng),Gr.stop()};function St(T){T.preventDefault(),jv("WebGLRenderer: Context Lost."),D=!0}function ut(){jv("WebGLRenderer: Context Restored."),D=!1;const T=z.autoReset,k=De.enabled,j=De.autoUpdate,H=De.needsUpdate,G=De.type;we(),z.autoReset=T,De.enabled=k,De.autoUpdate=j,De.needsUpdate=H,De.type=G}function hi(T){Ze("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function pi(T){const k=T.target;k.removeEventListener("dispose",pi),yE(k)}function yE(T){SE(T),X.remove(T)}function SE(T){const k=X.get(T).programs;k!==void 0&&(k.forEach(function(j){fe.releaseProgram(j)}),T.isShaderMaterial&&fe.releaseShaderCache(T))}this.renderBufferDirect=function(T,k,j,H,G,ve){k===null&&(k=$t);const ye=G.isMesh&&G.matrixWorld.determinantAffine()<0,ge=TE(T,k,j,H,G);S.setMaterial(H,ye);let Te=j.index,Ce=1;if(H.wireframe===!0){if(Te=Z.getWireframeAttribute(j),Te===void 0)return;Ce=2}const Oe=j.drawRange,ze=j.attributes.position;let Re=Oe.start*Ce,rt=(Oe.start+Oe.count)*Ce;ve!==null&&(Re=Math.max(Re,ve.start*Ce),rt=Math.min(rt,(ve.start+ve.count)*Ce)),Te!==null?(Re=Math.max(Re,0),rt=Math.min(rt,Te.count)):ze!=null&&(Re=Math.max(Re,0),rt=Math.min(rt,ze.count));const At=rt-Re;if(At<0||At===1/0)return;_e.setup(G,H,ge,j,Te);let Mt,ot=ce;if(Te!==null&&(Mt=ue.get(Te),ot=ee,ot.setIndex(Mt)),G.isMesh)H.wireframe===!0?(S.setLineWidth(H.wireframeLinewidth*Pt()),ot.setMode(O.LINES)):ot.setMode(O.TRIANGLES);else if(G.isLine){let tn=H.linewidth;tn===void 0&&(tn=1),S.setLineWidth(tn*Pt()),G.isLineSegments?ot.setMode(O.LINES):G.isLineLoop?ot.setMode(O.LINE_LOOP):ot.setMode(O.LINE_STRIP)}else G.isPoints?ot.setMode(O.POINTS):G.isSprite&&ot.setMode(O.TRIANGLES);if(G.isBatchedMesh)if(tt.get("WEBGL_multi_draw"))ot.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const tn=G._multiDrawStarts,xe=G._multiDrawCounts,An=G._multiDrawCount,Ke=Te?ue.get(Te).bytesPerElement:1,kn=X.get(H).currentProgram.getUniforms();for(let mi=0;mi<An;mi++)kn.setValue(O,"_gl_DrawID",mi),ot.render(tn[mi]/Ke,xe[mi])}else if(G.isInstancedMesh)ot.renderInstances(Re,At,G.count);else if(j.isInstancedBufferGeometry){const tn=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,xe=Math.min(j.instanceCount,tn);ot.renderInstances(Re,At,xe)}else ot.render(Re,At)};function eg(T,k,j){T.transparent===!0&&T.side===Wi&&T.forceSinglePass===!1?(T.side=wn,T.needsUpdate=!0,el(T,k,j),T.side=kr,T.needsUpdate=!0,el(T,k,j),T.side=Wi):el(T,k,j)}this.compile=function(T,k,j=null){j===null&&(j=T),w=de.get(j),w.init(k),_.push(w),j.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(w.pushLight(G),G.castShadow&&w.pushShadow(G))}),T!==j&&T.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(w.pushLight(G),G.castShadow&&w.pushShadow(G))}),w.setupLights();const H=new Set;return T.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ve=G.material;if(ve)if(Array.isArray(ve))for(let ye=0;ye<ve.length;ye++){const ge=ve[ye];eg(ge,j,G),H.add(ge)}else eg(ve,j,G),H.add(ve)}),w=_.pop(),H},this.compileAsync=function(T,k,j=null){const H=this.compile(T,k,j);return new Promise(G=>{function ve(){if(H.forEach(function(ye){X.get(ye).currentProgram.isReady()&&H.delete(ye)}),H.size===0){G(T);return}setTimeout(ve,10)}tt.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let Nu=null;function ME(T){Nu&&Nu(T)}function tg(){Gr.stop()}function ng(){Gr.start()}const Gr=new fE;Gr.setAnimationLoop(ME),typeof self<"u"&&Gr.setContext(self),this.setAnimationLoop=function(T){Nu=T,Ee.setAnimationLoop(T),T===null?Gr.stop():Gr.start()},Ee.addEventListener("sessionstart",tg),Ee.addEventListener("sessionend",ng),this.render=function(T,k){if(k!==void 0&&k.isCamera!==!0){Ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;U!==null&&U.renderStart(T,k);const j=Ee.enabled===!0&&Ee.isPresenting===!0,H=A!==null&&(N===null||j)&&A.begin(b,N);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(k),k=Ee.getCamera()),T.isScene===!0&&T.onBeforeRender(b,T,k,N),w=de.get(T,_.length),w.init(k),w.state.textureUnits=q.getTextureUnits(),_.push(w),bt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),st.setFromProjectionMatrix(bt,wi,k.reversedDepth),Ye=this.localClippingEnabled,Je=be.init(this.clippingPlanes,Ye),E=pe.get(T,C.length),E.init(),C.push(E),Ee.enabled===!0&&Ee.isPresenting===!0){const ye=b.xr.getDepthSensingMesh();ye!==null&&Iu(ye,k,-1/0,b.sortObjects)}Iu(T,k,0,b.sortObjects),E.finish(),b.sortObjects===!0&&E.sort(Le,Ie,k.reversedDepth),yt=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,yt&&Fe.addToRenderList(E,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Je===!0&&be.beginShadows();const G=w.state.shadowsArray;if(De.render(G,T,k),Je===!0&&be.endShadows(),(H&&A.hasRenderPass())===!1){const ye=E.opaque,ge=E.transmissive;if(w.setupLights(),k.isArrayCamera){const Te=k.cameras;if(ge.length>0)for(let Ce=0,Oe=Te.length;Ce<Oe;Ce++){const ze=Te[Ce];rg(ye,ge,T,ze)}yt&&Fe.render(T);for(let Ce=0,Oe=Te.length;Ce<Oe;Ce++){const ze=Te[Ce];ig(E,T,ze,ze.viewport)}}else ge.length>0&&rg(ye,ge,T,k),yt&&Fe.render(T),ig(E,T,k)}N!==null&&L===0&&(q.updateMultisampleRenderTarget(N),q.updateRenderTargetMipmap(N)),H&&A.end(b),T.isScene===!0&&T.onAfterRender(b,T,k),_e.resetDefaultState(),V=-1,K=null,_.pop(),_.length>0?(w=_[_.length-1],q.setTextureUnits(w.state.textureUnits),Je===!0&&be.setGlobalState(b.clippingPlanes,w.state.camera)):w=null,C.pop(),C.length>0?E=C[C.length-1]:E=null,U!==null&&U.renderEnd()};function Iu(T,k,j,H){if(T.visible===!1)return;if(T.layers.test(k.layers)){if(T.isGroup)j=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(k);else if(T.isLightProbeGrid)w.pushLightProbeGrid(T);else if(T.isLight)w.pushLight(T),T.castShadow&&w.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||st.intersectsSprite(T)){H&&Gt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(bt);const ye=te.update(T),ge=T.material;ge.visible&&E.push(T,ye,ge,j,Gt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||st.intersectsObject(T))){const ye=te.update(T),ge=T.material;if(H&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Gt.copy(T.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Gt.copy(ye.boundingSphere.center)),Gt.applyMatrix4(T.matrixWorld).applyMatrix4(bt)),Array.isArray(ge)){const Te=ye.groups;for(let Ce=0,Oe=Te.length;Ce<Oe;Ce++){const ze=Te[Ce],Re=ge[ze.materialIndex];Re&&Re.visible&&E.push(T,ye,Re,j,Gt.z,ze)}}else ge.visible&&E.push(T,ye,ge,j,Gt.z,null)}}const ve=T.children;for(let ye=0,ge=ve.length;ye<ge;ye++)Iu(ve[ye],k,j,H)}function ig(T,k,j,H){const{opaque:G,transmissive:ve,transparent:ye}=T;w.setupLightsView(j),Je===!0&&be.setGlobalState(b.clippingPlanes,j),H&&S.viewport(ne.copy(H)),G.length>0&&Ja(G,k,j),ve.length>0&&Ja(ve,k,j),ye.length>0&&Ja(ye,k,j),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function rg(T,k,j,H){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[H.id]===void 0){const Re=tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[H.id]=new Pi(1,1,{generateMipmaps:!0,type:Re?nr:Gn,minFilter:os,samples:Math.max(4,R.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace})}const ve=w.state.transmissionRenderTarget[H.id],ye=H.viewport||ne;ve.setSize(ye.z*b.transmissionResolutionScale,ye.w*b.transmissionResolutionScale);const ge=b.getRenderTarget(),Te=b.getActiveCubeFace(),Ce=b.getActiveMipmapLevel();b.setRenderTarget(ve),b.getClearColor(He),ke=b.getClearAlpha(),ke<1&&b.setClearColor(16777215,.5),b.clear(),yt&&Fe.render(j);const Oe=b.toneMapping;b.toneMapping=bi;const ze=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),w.setupLightsView(H),Je===!0&&be.setGlobalState(b.clippingPlanes,H),Ja(T,j,H),q.updateMultisampleRenderTarget(ve),q.updateRenderTargetMipmap(ve),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let rt=0,At=k.length;rt<At;rt++){const Mt=k[rt],{object:ot,geometry:tn,material:xe,group:An}=Mt;if(xe.side===Wi&&ot.layers.test(H.layers)){const Ke=xe.side;xe.side=wn,xe.needsUpdate=!0,sg(ot,j,H,tn,xe,An),xe.side=Ke,xe.needsUpdate=!0,Re=!0}}Re===!0&&(q.updateMultisampleRenderTarget(ve),q.updateRenderTargetMipmap(ve))}b.setRenderTarget(ge,Te,Ce),b.setClearColor(He,ke),ze!==void 0&&(H.viewport=ze),b.toneMapping=Oe}function Ja(T,k,j){const H=k.isScene===!0?k.overrideMaterial:null;for(let G=0,ve=T.length;G<ve;G++){const ye=T[G],{object:ge,geometry:Te,group:Ce}=ye;let Oe=ye.material;Oe.allowOverride===!0&&H!==null&&(Oe=H),ge.layers.test(j.layers)&&sg(ge,k,j,Te,Oe,Ce)}}function sg(T,k,j,H,G,ve){T.onBeforeRender(b,k,j,H,G,ve),T.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),G.onBeforeRender(b,k,j,H,T,ve),G.transparent===!0&&G.side===Wi&&G.forceSinglePass===!1?(G.side=wn,G.needsUpdate=!0,b.renderBufferDirect(j,k,H,G,T,ve),G.side=kr,G.needsUpdate=!0,b.renderBufferDirect(j,k,H,G,T,ve),G.side=Wi):b.renderBufferDirect(j,k,H,G,T,ve),T.onAfterRender(b,k,j,H,G,ve)}function el(T,k,j){k.isScene!==!0&&(k=$t);const H=X.get(T),G=w.state.lights,ve=w.state.shadowsArray,ye=G.state.version,ge=fe.getParameters(T,G.state,ve,k,j,w.state.lightProbeGridArray),Te=fe.getProgramCacheKey(ge);let Ce=H.programs;H.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?k.environment:null,H.fog=k.fog;const Oe=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;H.envMap=le.get(T.envMap||H.environment,Oe),H.envMapRotation=H.environment!==null&&T.envMap===null?k.environmentRotation:T.envMapRotation,Ce===void 0&&(T.addEventListener("dispose",pi),Ce=new Map,H.programs=Ce);let ze=Ce.get(Te);if(ze!==void 0){if(H.currentProgram===ze&&H.lightsStateVersion===ye)return ag(T,ge),ze}else ge.uniforms=fe.getUniforms(T),U!==null&&T.isNodeMaterial&&U.build(T,j,ge),T.onBeforeCompile(ge,b),ze=fe.acquireProgram(ge,Te),Ce.set(Te,ze),H.uniforms=ge.uniforms;const Re=H.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Re.clippingPlanes=be.uniform),ag(T,ge),H.needsLights=AE(T),H.lightsStateVersion=ye,H.needsLights&&(Re.ambientLightColor.value=G.state.ambient,Re.lightProbe.value=G.state.probe,Re.directionalLights.value=G.state.directional,Re.directionalLightShadows.value=G.state.directionalShadow,Re.spotLights.value=G.state.spot,Re.spotLightShadows.value=G.state.spotShadow,Re.rectAreaLights.value=G.state.rectArea,Re.ltc_1.value=G.state.rectAreaLTC1,Re.ltc_2.value=G.state.rectAreaLTC2,Re.pointLights.value=G.state.point,Re.pointLightShadows.value=G.state.pointShadow,Re.hemisphereLights.value=G.state.hemi,Re.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Re.spotLightMatrix.value=G.state.spotLightMatrix,Re.spotLightMap.value=G.state.spotLightMap,Re.pointShadowMatrix.value=G.state.pointShadowMatrix),H.lightProbeGrid=w.state.lightProbeGridArray.length>0,H.currentProgram=ze,H.uniformsList=null,ze}function og(T){if(T.uniformsList===null){const k=T.currentProgram.getUniforms();T.uniformsList=_c.seqWithValue(k.seq,T.uniforms)}return T.uniformsList}function ag(T,k){const j=X.get(T);j.outputColorSpace=k.outputColorSpace,j.batching=k.batching,j.batchingColor=k.batchingColor,j.instancing=k.instancing,j.instancingColor=k.instancingColor,j.instancingMorph=k.instancingMorph,j.skinning=k.skinning,j.morphTargets=k.morphTargets,j.morphNormals=k.morphNormals,j.morphColors=k.morphColors,j.morphTargetsCount=k.morphTargetsCount,j.numClippingPlanes=k.numClippingPlanes,j.numIntersection=k.numClipIntersection,j.vertexAlphas=k.vertexAlphas,j.vertexTangents=k.vertexTangents,j.toneMapping=k.toneMapping}function EE(T,k){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;x.setFromMatrixPosition(k.matrixWorld);for(let j=0,H=T.length;j<H;j++){const G=T[j];if(G.texture!==null&&G.boundingBox.containsPoint(x))return G}return null}function TE(T,k,j,H,G){k.isScene!==!0&&(k=$t),q.resetTextureUnits();const ve=k.fog,ye=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?k.environment:null,ge=N===null?b.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:$e.workingColorSpace,Te=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Ce=le.get(H.envMap||ye,Te),Oe=H.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,ze=!!j.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Re=!!j.morphAttributes.position,rt=!!j.morphAttributes.normal,At=!!j.morphAttributes.color;let Mt=bi;H.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Mt=b.toneMapping);const ot=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,tn=ot!==void 0?ot.length:0,xe=X.get(H),An=w.state.lights;if(Je===!0&&(Ye===!0||T!==K)){const ft=T===K&&H.id===V;be.setState(H,T,ft)}let Ke=!1;H.version===xe.__version?(xe.needsLights&&xe.lightsStateVersion!==An.state.version||xe.outputColorSpace!==ge||G.isBatchedMesh&&xe.batching===!1||!G.isBatchedMesh&&xe.batching===!0||G.isBatchedMesh&&xe.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&xe.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&xe.instancing===!1||!G.isInstancedMesh&&xe.instancing===!0||G.isSkinnedMesh&&xe.skinning===!1||!G.isSkinnedMesh&&xe.skinning===!0||G.isInstancedMesh&&xe.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&xe.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&xe.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&xe.instancingMorph===!1&&G.morphTexture!==null||xe.envMap!==Ce||H.fog===!0&&xe.fog!==ve||xe.numClippingPlanes!==void 0&&(xe.numClippingPlanes!==be.numPlanes||xe.numIntersection!==be.numIntersection)||xe.vertexAlphas!==Oe||xe.vertexTangents!==ze||xe.morphTargets!==Re||xe.morphNormals!==rt||xe.morphColors!==At||xe.toneMapping!==Mt||xe.morphTargetsCount!==tn||!!xe.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(Ke=!0):(Ke=!0,xe.__version=H.version);let kn=xe.currentProgram;Ke===!0&&(kn=el(H,k,G),U&&H.isNodeMaterial&&U.onUpdateProgram(H,kn,xe));let mi=!1,or=!1,Es=!1;const at=kn.getUniforms(),Ct=xe.uniforms;if(S.useProgram(kn.program)&&(mi=!0,or=!0,Es=!0),H.id!==V&&(V=H.id,or=!0),xe.needsLights){const ft=EE(w.state.lightProbeGridArray,G);xe.lightProbeGrid!==ft&&(xe.lightProbeGrid=ft,or=!0)}if(mi||K!==T){S.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),at.setValue(O,"projectionMatrix",T.projectionMatrix),at.setValue(O,"viewMatrix",T.matrixWorldInverse);const lr=at.map.cameraPosition;lr!==void 0&&lr.setValue(O,Ft.setFromMatrixPosition(T.matrixWorld)),R.logarithmicDepthBuffer&&at.setValue(O,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&at.setValue(O,"isOrthographic",T.isOrthographicCamera===!0),K!==T&&(K=T,or=!0,Es=!0)}if(xe.needsLights&&(An.state.directionalShadowMap.length>0&&at.setValue(O,"directionalShadowMap",An.state.directionalShadowMap,q),An.state.spotShadowMap.length>0&&at.setValue(O,"spotShadowMap",An.state.spotShadowMap,q),An.state.pointShadowMap.length>0&&at.setValue(O,"pointShadowMap",An.state.pointShadowMap,q)),G.isSkinnedMesh){at.setOptional(O,G,"bindMatrix"),at.setOptional(O,G,"bindMatrixInverse");const ft=G.skeleton;ft&&(ft.boneTexture===null&&ft.computeBoneTexture(),at.setValue(O,"boneTexture",ft.boneTexture,q))}G.isBatchedMesh&&(at.setOptional(O,G,"batchingTexture"),at.setValue(O,"batchingTexture",G._matricesTexture,q),at.setOptional(O,G,"batchingIdTexture"),at.setValue(O,"batchingIdTexture",G._indirectTexture,q),at.setOptional(O,G,"batchingColorTexture"),G._colorsTexture!==null&&at.setValue(O,"batchingColorTexture",G._colorsTexture,q));const ar=j.morphAttributes;if((ar.position!==void 0||ar.normal!==void 0||ar.color!==void 0)&&F.update(G,j,kn),(or||xe.receiveShadow!==G.receiveShadow)&&(xe.receiveShadow=G.receiveShadow,at.setValue(O,"receiveShadow",G.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&k.environment!==null&&(Ct.envMapIntensity.value=k.environmentIntensity),Ct.dfgLUT!==void 0&&(Ct.dfgLUT.value=KI()),or){if(at.setValue(O,"toneMappingExposure",b.toneMappingExposure),xe.needsLights&&wE(Ct,Es),ve&&H.fog===!0&&Ae.refreshFogUniforms(Ct,ve),Ae.refreshMaterialUniforms(Ct,H,se,ae,w.state.transmissionRenderTarget[T.id]),xe.needsLights&&xe.lightProbeGrid){const ft=xe.lightProbeGrid;Ct.probesSH.value=ft.texture,Ct.probesMin.value.copy(ft.boundingBox.min),Ct.probesMax.value.copy(ft.boundingBox.max),Ct.probesResolution.value.copy(ft.resolution)}_c.upload(O,og(xe),Ct,q)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(_c.upload(O,og(xe),Ct,q),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&at.setValue(O,"center",G.center),at.setValue(O,"modelViewMatrix",G.modelViewMatrix),at.setValue(O,"normalMatrix",G.normalMatrix),at.setValue(O,"modelMatrix",G.matrixWorld),H.uniformsGroups!==void 0){const ft=H.uniformsGroups;for(let lr=0,Ts=ft.length;lr<Ts;lr++){const lg=ft[lr];ie.update(lg,kn),ie.bind(lg,kn)}}return kn}function wE(T,k){T.ambientLightColor.needsUpdate=k,T.lightProbe.needsUpdate=k,T.directionalLights.needsUpdate=k,T.directionalLightShadows.needsUpdate=k,T.pointLights.needsUpdate=k,T.pointLightShadows.needsUpdate=k,T.spotLights.needsUpdate=k,T.spotLightShadows.needsUpdate=k,T.rectAreaLights.needsUpdate=k,T.hemisphereLights.needsUpdate=k}function AE(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(T,k,j){const H=X.get(T);H.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),X.get(T.texture).__webglTexture=k,X.get(T.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:j,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,k){const j=X.get(T);j.__webglFramebuffer=k,j.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(T,k=0,j=0){N=T,I=k,L=j;let H=null,G=!1,ve=!1;if(T){const ge=X.get(T);if(ge.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(O.FRAMEBUFFER,ge.__webglFramebuffer),ne.copy(T.viewport),oe.copy(T.scissor),Ve=T.scissorTest,S.viewport(ne),S.scissor(oe),S.setScissorTest(Ve),V=-1;return}else if(ge.__webglFramebuffer===void 0)q.setupRenderTarget(T);else if(ge.__hasExternalTextures)q.rebindTextures(T,X.get(T.texture).__webglTexture,X.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Oe=T.depthTexture;if(ge.__boundDepthTexture!==Oe){if(Oe!==null&&X.has(Oe)&&(T.width!==Oe.image.width||T.height!==Oe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(T)}}const Te=T.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(ve=!0);const Ce=X.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ce[k])?H=Ce[k][j]:H=Ce[k],G=!0):T.samples>0&&q.useMultisampledRTT(T)===!1?H=X.get(T).__webglMultisampledFramebuffer:Array.isArray(Ce)?H=Ce[j]:H=Ce,ne.copy(T.viewport),oe.copy(T.scissor),Ve=T.scissorTest}else ne.copy(Pe).multiplyScalar(se).floor(),oe.copy(gt).multiplyScalar(se).floor(),Ve=We;if(j!==0&&(H=$),S.bindFramebuffer(O.FRAMEBUFFER,H)&&S.drawBuffers(T,H),S.viewport(ne),S.scissor(oe),S.setScissorTest(Ve),G){const ge=X.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+k,ge.__webglTexture,j)}else if(ve){const ge=k;for(let Te=0;Te<T.textures.length;Te++){const Ce=X.get(T.textures[Te]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Te,Ce.__webglTexture,j,ge)}}else if(T!==null&&j!==0){const ge=X.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ge.__webglTexture,j)}V=-1},this.readRenderTargetPixels=function(T,k,j,H,G,ve,ye,ge=0){if(!(T&&T.isWebGLRenderTarget)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=X.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ye!==void 0&&(Te=Te[ye]),Te){S.bindFramebuffer(O.FRAMEBUFFER,Te);try{const Ce=T.textures[ge],Oe=Ce.format,ze=Ce.type;if(T.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ge),!R.textureFormatReadable(Oe)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!R.textureTypeReadable(ze)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=T.width-H&&j>=0&&j<=T.height-G&&O.readPixels(k,j,H,G,he.convert(Oe),he.convert(ze),ve)}finally{const Ce=N!==null?X.get(N).__webglFramebuffer:null;S.bindFramebuffer(O.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(T,k,j,H,G,ve,ye,ge=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=X.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ye!==void 0&&(Te=Te[ye]),Te)if(k>=0&&k<=T.width-H&&j>=0&&j<=T.height-G){S.bindFramebuffer(O.FRAMEBUFFER,Te);const Ce=T.textures[ge],Oe=Ce.format,ze=Ce.type;if(T.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ge),!R.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!R.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Re=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Re),O.bufferData(O.PIXEL_PACK_BUFFER,ve.byteLength,O.STREAM_READ),O.readPixels(k,j,H,G,he.convert(Oe),he.convert(ze),0);const rt=N!==null?X.get(N).__webglFramebuffer:null;S.bindFramebuffer(O.FRAMEBUFFER,rt);const At=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await _2(O,At,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Re),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ve),O.deleteBuffer(Re),O.deleteSync(At),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,k=null,j=0){const H=Math.pow(2,-j),G=Math.floor(T.image.width*H),ve=Math.floor(T.image.height*H),ye=k!==null?k.x:0,ge=k!==null?k.y:0;q.setTexture2D(T,0),O.copyTexSubImage2D(O.TEXTURE_2D,j,0,0,ye,ge,G,ve),S.unbindTexture()},this.copyTextureToTexture=function(T,k,j=null,H=null,G=0,ve=0){let ye,ge,Te,Ce,Oe,ze,Re,rt,At;const Mt=T.isCompressedTexture?T.mipmaps[ve]:T.image;if(j!==null)ye=j.max.x-j.min.x,ge=j.max.y-j.min.y,Te=j.isBox3?j.max.z-j.min.z:1,Ce=j.min.x,Oe=j.min.y,ze=j.isBox3?j.min.z:0;else{const Ct=Math.pow(2,-G);ye=Math.floor(Mt.width*Ct),ge=Math.floor(Mt.height*Ct),T.isDataArrayTexture?Te=Mt.depth:T.isData3DTexture?Te=Math.floor(Mt.depth*Ct):Te=1,Ce=0,Oe=0,ze=0}H!==null?(Re=H.x,rt=H.y,At=H.z):(Re=0,rt=0,At=0);const ot=he.convert(k.format),tn=he.convert(k.type);let xe;k.isData3DTexture?(q.setTexture3D(k,0),xe=O.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(q.setTexture2DArray(k,0),xe=O.TEXTURE_2D_ARRAY):(q.setTexture2D(k,0),xe=O.TEXTURE_2D),S.activeTexture(O.TEXTURE0),S.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,k.flipY),S.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),S.pixelStorei(O.UNPACK_ALIGNMENT,k.unpackAlignment);const An=S.getParameter(O.UNPACK_ROW_LENGTH),Ke=S.getParameter(O.UNPACK_IMAGE_HEIGHT),kn=S.getParameter(O.UNPACK_SKIP_PIXELS),mi=S.getParameter(O.UNPACK_SKIP_ROWS),or=S.getParameter(O.UNPACK_SKIP_IMAGES);S.pixelStorei(O.UNPACK_ROW_LENGTH,Mt.width),S.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Mt.height),S.pixelStorei(O.UNPACK_SKIP_PIXELS,Ce),S.pixelStorei(O.UNPACK_SKIP_ROWS,Oe),S.pixelStorei(O.UNPACK_SKIP_IMAGES,ze);const Es=T.isDataArrayTexture||T.isData3DTexture,at=k.isDataArrayTexture||k.isData3DTexture;if(T.isDepthTexture){const Ct=X.get(T),ar=X.get(k),ft=X.get(Ct.__renderTarget),lr=X.get(ar.__renderTarget);S.bindFramebuffer(O.READ_FRAMEBUFFER,ft.__webglFramebuffer),S.bindFramebuffer(O.DRAW_FRAMEBUFFER,lr.__webglFramebuffer);for(let Ts=0;Ts<Te;Ts++)Es&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,X.get(T).__webglTexture,G,ze+Ts),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,X.get(k).__webglTexture,ve,At+Ts)),O.blitFramebuffer(Ce,Oe,ye,ge,Re,rt,ye,ge,O.DEPTH_BUFFER_BIT,O.NEAREST);S.bindFramebuffer(O.READ_FRAMEBUFFER,null),S.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(G!==0||T.isRenderTargetTexture||X.has(T)){const Ct=X.get(T),ar=X.get(k);S.bindFramebuffer(O.READ_FRAMEBUFFER,Y),S.bindFramebuffer(O.DRAW_FRAMEBUFFER,B);for(let ft=0;ft<Te;ft++)Es?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ct.__webglTexture,G,ze+ft):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ct.__webglTexture,G),at?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ar.__webglTexture,ve,At+ft):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ar.__webglTexture,ve),G!==0?O.blitFramebuffer(Ce,Oe,ye,ge,Re,rt,ye,ge,O.COLOR_BUFFER_BIT,O.NEAREST):at?O.copyTexSubImage3D(xe,ve,Re,rt,At+ft,Ce,Oe,ye,ge):O.copyTexSubImage2D(xe,ve,Re,rt,Ce,Oe,ye,ge);S.bindFramebuffer(O.READ_FRAMEBUFFER,null),S.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else at?T.isDataTexture||T.isData3DTexture?O.texSubImage3D(xe,ve,Re,rt,At,ye,ge,Te,ot,tn,Mt.data):k.isCompressedArrayTexture?O.compressedTexSubImage3D(xe,ve,Re,rt,At,ye,ge,Te,ot,Mt.data):O.texSubImage3D(xe,ve,Re,rt,At,ye,ge,Te,ot,tn,Mt):T.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,ve,Re,rt,ye,ge,ot,tn,Mt.data):T.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,ve,Re,rt,Mt.width,Mt.height,ot,Mt.data):O.texSubImage2D(O.TEXTURE_2D,ve,Re,rt,ye,ge,ot,tn,Mt);S.pixelStorei(O.UNPACK_ROW_LENGTH,An),S.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ke),S.pixelStorei(O.UNPACK_SKIP_PIXELS,kn),S.pixelStorei(O.UNPACK_SKIP_ROWS,mi),S.pixelStorei(O.UNPACK_SKIP_IMAGES,or),ve===0&&k.generateMipmaps&&O.generateMipmap(xe),S.unbindTexture()},this.initRenderTarget=function(T){X.get(T).__webglFramebuffer===void 0&&q.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?q.setTextureCube(T,0):T.isData3DTexture?q.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?q.setTexture2DArray(T,0):q.setTexture2D(T,0),S.unbindTexture()},this.resetState=function(){I=0,L=0,N=null,S.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=$e._getDrawingBufferColorSpace(e),n.unpackColorSpace=$e._getUnpackColorSpace()}}const xc=8,QI=`
#define MAX_COLORS ${xc}
uniform vec2 uCanvas;
uniform float uTime;
uniform float uSpeed;
uniform vec2 uRot;
uniform int uColorCount;
uniform vec3 uColors[MAX_COLORS];
uniform int uTransparent;
uniform float uScale;
uniform float uFrequency;
uniform float uWarpStrength;
uniform vec2 uPointer; // in NDC [-1,1]
uniform float uMouseInfluence;
uniform float uParallax;
uniform float uNoise;
uniform int uIterations;
uniform float uIntensity;
uniform float uBandWidth;
varying vec2 vUv;

void main() {
  float t = uTime * uSpeed;
  vec2 p = vUv * 2.0 - 1.0;
  p += uPointer * uParallax * 0.1;
  vec2 rp = vec2(p.x * uRot.x - p.y * uRot.y, p.x * uRot.y + p.y * uRot.x);
  vec2 q = vec2(rp.x * (uCanvas.x / uCanvas.y), rp.y);
  q /= max(uScale, 0.0001);
  q /= 0.5 + 0.2 * dot(q, q);
  q += 0.2 * cos(t) - 7.56;
  vec2 toward = (uPointer - rp);
  q += toward * uMouseInfluence * 0.2;

    for (int j = 0; j < 5; j++) {
      if (j >= uIterations - 1) break;
      vec2 rr = sin(1.5 * (q.yx * uFrequency) + 2.0 * cos(q * uFrequency));
      q += (rr - q) * 0.15;
    }

    vec3 col = vec3(0.0);
    float a = 1.0;

    if (uColorCount > 0) {
      vec2 s = q;
      vec3 sumCol = vec3(0.0);
      float cover = 0.0;
      for (int i = 0; i < MAX_COLORS; ++i) {
            if (i >= uColorCount) break;
            s -= 0.01;
            vec2 r = sin(1.5 * (s.yx * uFrequency) + 2.0 * cos(s * uFrequency));
            float m0 = length(r + sin(5.0 * r.y * uFrequency - 3.0 * t + float(i)) / 4.0);
            float kBelow = clamp(uWarpStrength, 0.0, 1.0);
            float kMix = pow(kBelow, 0.3); // strong response across 0..1
            float gain = 1.0 + max(uWarpStrength - 1.0, 0.0); // allow >1 to amplify displacement
            vec2 disp = (r - s) * kBelow;
            vec2 warped = s + disp * gain;
            float m1 = length(warped + sin(5.0 * warped.y * uFrequency - 3.0 * t + float(i)) / 4.0);
            float m = mix(m0, m1, kMix);
            float w = 1.0 - exp(-uBandWidth / exp(uBandWidth * m));
            sumCol += uColors[i] * w;
            cover = max(cover, w);
      }
      col = clamp(sumCol, 0.0, 1.0);
      a = uTransparent > 0 ? cover : 1.0;
    } else {
        vec2 s = q;
        for (int k = 0; k < 3; ++k) {
            s -= 0.01;
            vec2 r = sin(1.5 * (s.yx * uFrequency) + 2.0 * cos(s * uFrequency));
            float m0 = length(r + sin(5.0 * r.y * uFrequency - 3.0 * t + float(k)) / 4.0);
            float kBelow = clamp(uWarpStrength, 0.0, 1.0);
            float kMix = pow(kBelow, 0.3);
            float gain = 1.0 + max(uWarpStrength - 1.0, 0.0);
            vec2 disp = (r - s) * kBelow;
            vec2 warped = s + disp * gain;
            float m1 = length(warped + sin(5.0 * warped.y * uFrequency - 3.0 * t + float(k)) / 4.0);
            float m = mix(m0, m1, kMix);
            col[k] = 1.0 - exp(-uBandWidth / exp(uBandWidth * m));
        }
        a = uTransparent > 0 ? max(max(col.r, col.g), col.b) : 1.0;
    }

    col *= uIntensity;

    if (uNoise > 0.0001) {
      float n = fract(sin(dot(gl_FragCoord.xy + vec2(uTime), vec2(12.9898, 78.233))) * 43758.5453123);
      col += (n - 0.5) * uNoise;
      col = clamp(col, 0.0, 1.0);
    }

    vec3 rgb = (uTransparent > 0) ? col * a : col;
    gl_FragColor = vec4(rgb, a);
}
`,JI=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`;function xE({className:t,style:e,rotation:n=90,speed:i=.2,colors:r=[],transparent:s=!0,autoRotate:o=0,scale:a=1,frequency:l=1,warpStrength:c=1,mouseInfluence:f=1,parallax:d=.5,noise:u=.15,iterations:p=1,intensity:m=1.5,bandWidth:M=6,paused:g=!1}){const h=J.useRef(null),v=J.useRef(null),y=J.useRef(null),x=J.useRef(null),E=J.useRef(null),w=J.useRef(g),C=J.useRef(n),_=J.useRef(o),A=J.useRef(new Xe(0,0)),b=J.useRef(new Xe(0,0)),D=J.useRef(8);return J.useEffect(()=>{const U=h.current,$=new I2,Y=new qm(-1,1,1,-1,0,1),B=new Qa(2,2),I=Array.from({length:xc},()=>new W(0,0,0)),L=new di({vertexShader:JI,fragmentShader:QI,uniforms:{uCanvas:{value:new Xe(1,1)},uTime:{value:0},uSpeed:{value:i},uRot:{value:new Xe(1,0)},uColorCount:{value:0},uColors:{value:I},uTransparent:{value:s?1:0},uScale:{value:a},uFrequency:{value:l},uWarpStrength:{value:c},uPointer:{value:new Xe(0,0)},uMouseInfluence:{value:f},uParallax:{value:d},uNoise:{value:u},uIterations:{value:p},uIntensity:{value:m},uBandWidth:{value:M}},premultipliedAlpha:!0,transparent:!0});x.current=L;const N=new Ii(B,L);$.add(N);const V=new ZI({antialias:!1,powerPreference:"high-performance",alpha:!0});v.current=V,V.outputColorSpace=Pn,V.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),V.setClearColor(0,s?0:1),V.domElement.style.width="100%",V.domElement.style.height="100%",V.domElement.style.display="block",U.appendChild(V.domElement);const K=new t3,ne=()=>{const He=U.clientWidth||1,ke=U.clientHeight||1;V.setSize(He,ke,!1),L.uniforms.uCanvas.value.set(He,ke)};if(ne(),"ResizeObserver"in window){const He=new ResizeObserver(ne);He.observe(U),E.current=He}else window.addEventListener("resize",ne);const oe=()=>{if(!w.current){const He=K.getDelta(),ke=K.elapsedTime;L.uniforms.uTime.value=ke;const ae=(C.current%360+_.current*ke)*Math.PI/180,se=Math.cos(ae),Le=Math.sin(ae);L.uniforms.uRot.value.set(se,Le);const Ie=b.current,Pe=A.current,gt=Math.min(1,He*D.current);Ie.lerp(Pe,gt),L.uniforms.uPointer.value.copy(Ie),V.render($,Y)}y.current=requestAnimationFrame(oe)};y.current=requestAnimationFrame(oe);const Ve=()=>{document.hidden?(y.current!==null&&cancelAnimationFrame(y.current),y.current=null):y.current===null&&(K.getDelta(),y.current=requestAnimationFrame(oe))};return document.addEventListener("visibilitychange",Ve),()=>{document.removeEventListener("visibilitychange",Ve),y.current!==null&&cancelAnimationFrame(y.current),E.current?E.current.disconnect():window.removeEventListener("resize",ne),B.dispose(),L.dispose(),V.dispose(),V.forceContextLoss(),V.domElement&&V.domElement.parentElement===U&&U.removeChild(V.domElement)}},[M,l,m,p,f,u,d,a,i,s,c]),J.useEffect(()=>{const U=x.current,$=v.current;if(!U)return;C.current=n,_.current=o,U.uniforms.uSpeed.value=i,U.uniforms.uScale.value=a,U.uniforms.uFrequency.value=l,U.uniforms.uWarpStrength.value=c,U.uniforms.uMouseInfluence.value=f,U.uniforms.uParallax.value=d,U.uniforms.uNoise.value=u,U.uniforms.uIterations.value=p,U.uniforms.uIntensity.value=m,U.uniforms.uBandWidth.value=M;const Y=I=>{const L=I.replace("#","").trim(),N=L.length===3?[parseInt(L[0]+L[0],16),parseInt(L[1]+L[1],16),parseInt(L[2]+L[2],16)]:[parseInt(L.slice(0,2),16),parseInt(L.slice(2,4),16),parseInt(L.slice(4,6),16)];return new W(N[0]/255,N[1]/255,N[2]/255)},B=(r||[]).filter(Boolean).slice(0,xc).map(Y);for(let I=0;I<xc;I++){const L=U.uniforms.uColors.value[I];I<B.length?L.copy(B[I]):L.set(0,0,0)}U.uniforms.uColorCount.value=B.length,U.uniforms.uTransparent.value=s?1:0,$&&$.setClearColor(0,s?0:1)},[n,o,i,a,l,c,f,d,u,p,m,M,r,s]),J.useEffect(()=>{const U=x.current,$=h.current;if(!U||!$)return;const Y=B=>{const I=$.getBoundingClientRect(),L=(B.clientX-I.left)/(I.width||1)*2-1,N=-((B.clientY-I.top)/(I.height||1)*2-1);A.current.set(L,N)};return window.addEventListener("pointermove",Y),()=>{window.removeEventListener("pointermove",Y)}},[]),J.useEffect(()=>{w.current=g},[g]),P.jsx("div",{ref:h,className:`color-bends-container ${t}`,style:e})}const Ko=[.32,.72,0,1];function eU(){const t=J.useRef(null);return P.jsxs("section",{className:"hero",id:"home",children:[P.jsx("div",{className:"hero-bends","aria-hidden":"true",children:P.jsx(xE,{colors:["#e3c37e","#c9a45c","#3d2f14"],rotation:90,autoRotate:4,speed:.14,scale:1,frequency:1,warpStrength:1,mouseInfluence:.7,parallax:.4,noise:.08,iterations:2,intensity:1.1,bandWidth:6,transparent:!0})}),P.jsx("div",{className:"hero-bg-grid","aria-hidden":"true"}),P.jsx("div",{className:"hero-word","aria-hidden":"true",children:"DESIGN"}),P.jsxs("div",{className:"container hero-inner",children:[P.jsxs("div",{className:"hero-left",children:[P.jsxs(Gi.div,{className:"hero-label",initial:{opacity:0,y:24},animate:{opacity:1,y:0},transition:{duration:.7,ease:Ko},children:[P.jsx("span",{className:"dot"}),"UX/UI DESIGNER"]}),P.jsxs(Gi.h1,{className:"hero-title",initial:{opacity:0,y:48},animate:{opacity:1,y:0},transition:{duration:.85,delay:.12,ease:Ko},children:["DIGITAL",P.jsxs("span",{className:"outline",children:["EXPERIENCES",P.jsx("span",{className:"accent-dot",children:"."})]})]}),P.jsxs(Gi.p,{className:"hero-desc",initial:{opacity:0,y:32},animate:{opacity:1,y:0},transition:{duration:.8,delay:.26,ease:Ko},children:[Lt.name,"，",Lt.role,"。15 年互联网设计经验，擅长从 0 到 1 构建设计体系，主导国家级农业数字化平台与省级产业大脑等重大项目， 以设计驱动业务增长与数字化转型。"]}),P.jsxs(Gi.div,{className:"hero-cta",initial:{opacity:0,y:28},animate:{opacity:1,y:0},transition:{duration:.8,delay:.4,ease:Ko},children:[P.jsxs("a",{className:"cta-primary",href:"#projects",children:["查看作品",P.jsx(Yy,{size:17,strokeWidth:2.4})]}),P.jsxs("a",{className:"cta-ghost",href:"#contact",children:[P.jsx("span",{className:"dot"}),"联系我"]}),P.jsxs("a",{className:"cta-ghost cta-download",href:"/portfolio-site/resume.pdf",download:!0,children:[P.jsx(Zy,{size:17,strokeWidth:2.2}),"下载简历"]})]})]}),P.jsx("div",{className:"hero-right",ref:t,children:P.jsx(Gi.div,{className:"id-float",animate:{y:[0,-15,0],rotateZ:[-1,1,-1]},transition:{duration:6,repeat:1/0,ease:"easeInOut"},children:P.jsxs(Gi.div,{className:"id-card",drag:!0,dragElastic:.2,dragConstraints:t,dragTransition:{bounceStiffness:600,bounceDamping:20},whileHover:{scale:1.02},whileDrag:{scale:1.04},initial:{opacity:0,y:64},animate:{opacity:1,y:0},transition:{duration:.9,delay:.35,ease:Ko},children:[P.jsx("span",{className:"lanyard","aria-hidden":"true"}),P.jsx("span",{className:"lanyard-clip","aria-hidden":"true"}),P.jsx("span",{className:"id-chip",children:"DESIGN LEAD"}),P.jsxs("div",{className:"id-photo",children:[P.jsx("img",{src:"/portfolio-site/images/avatar.webp",alt:Lt.name,draggable:!1}),P.jsxs("div",{className:"id-overlay",children:[P.jsxs("strong",{children:[Lt.name,P.jsx("span",{className:"accent-dot",children:"."})]}),P.jsx("span",{children:Lt.role})]})]})]})})})]})]})}function Kt({as:t="div",className:e="",delay:n=0,children:i,...r}){const s=J.useRef(null);return J.useEffect(()=>{const o=s.current;if(!o)return;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){o.classList.add("is-visible");return}const a=new IntersectionObserver(l=>{l.forEach(c=>{c.isIntersecting&&(o.classList.add("is-visible"),a.unobserve(o))})},{threshold:.1,rootMargin:"0px 0px -6% 0px"});return a.observe(o),()=>a.disconnect()},[]),P.jsx(t,{ref:s,className:`reveal ${e}`,style:n?{transitionDelay:`${n}ms`}:void 0,...r,children:i})}function Lu({className:t="",opacity:e,...n}){const i=J.useRef(null),[r,s]=J.useState(!0);return J.useEffect(()=>{const o=i.current;if(!o||typeof IntersectionObserver>"u")return;const a=new IntersectionObserver(([l])=>s(l.isIntersecting),{threshold:.01,rootMargin:"0px 0px 25% 0px"});return a.observe(o),()=>a.disconnect()},[]),P.jsxs("div",{className:`section-fx ${t}`,ref:i,"aria-hidden":"true",children:[P.jsx(xE,{...n,style:e!=null?{opacity:e}:void 0,paused:!r}),P.jsx("div",{className:"section-fx-shade"})]})}function tU(){return P.jsxs("section",{className:"section section-soft",id:"about",children:[P.jsx(Lu,{opacity:.95,colors:["#7be0b0","#3fa37a","#1d6b4f","#0c2a20"],rotation:90,autoRotate:4,speed:.14,scale:1.1,frequency:1,warpStrength:.85,mouseInfluence:.4,parallax:.3,noise:.06,iterations:2,intensity:1.25,bandWidth:5,transparent:!0}),P.jsxs("div",{className:"container",children:[P.jsxs("div",{className:"section-head",children:[P.jsx(Kt,{className:"section-eyebrow",children:"About"}),P.jsx(Kt,{as:"h2",className:"section-title",delay:100,children:"关于我"})]}),P.jsxs("div",{className:"about-grid",children:[P.jsxs(Kt,{className:"about-id",children:[P.jsx("div",{className:"about-avatar",children:P.jsx("img",{src:"/portfolio-site/images/avatar.webp",alt:Lt.name})}),P.jsx("div",{className:"about-name",children:Lt.name}),P.jsx("div",{className:"about-role",children:Lt.role}),P.jsx("div",{className:"about-divider"}),P.jsxs("div",{className:"about-contact-row",children:[P.jsx("span",{className:"k",children:"电话"}),P.jsx("a",{className:"v",href:`tel:${Lt.phone}`,children:Lt.phone})]}),P.jsxs("div",{className:"about-contact-row",children:[P.jsx("span",{className:"k",children:"邮箱"}),P.jsx("a",{className:"v",href:`mailto:${Lt.email}`,children:Lt.email})]}),P.jsxs("div",{className:"about-contact-row",children:[P.jsx("span",{className:"k",children:"城市"}),P.jsx("span",{className:"v",children:Lt.city})]}),P.jsxs("div",{className:"about-contact-row",children:[P.jsx("span",{className:"k",children:"方向"}),P.jsx("span",{className:"v",children:"B 端 / G 端数字化产品"})]})]}),P.jsxs("div",{children:[P.jsxs(Kt,{className:"about-intro",delay:120,children:[P.jsx("p",{children:"深耕 UI/UX 设计领域逾 15 年，专注于为业务和产品打造高可行性的视觉与创意设计方案。从中国移动到浙江甲骨文超级码，始终致力于通过设计驱动产品价值与用户体验的持续提升。"}),P.jsx("p",{children:"精通 C 端与 B 端设计规范，对细节的追求近乎苛刻。在农业数字化、家装互联网、健康医疗等多个领域积累了丰富的跨行业设计经验，具备 6 年以上团队管理能力；"})]}),P.jsx(Kt,{className:"about-stats",delay:200,children:Lt.stats.map(t=>P.jsxs("div",{className:"stat",children:[P.jsxs("div",{className:"stat-value",children:[t.value,P.jsx("em",{children:t.suffix})]}),P.jsx("div",{className:"stat-label",children:t.label})]},t.label))}),P.jsxs("div",{className:"about-exp",children:[P.jsx(Kt,{className:"about-exp-title",delay:80,children:"Experience · 工作经历"}),Lt.experience.map((t,e)=>P.jsxs(Kt,{className:"exp-item",delay:e*60,children:[P.jsx("div",{className:"exp-period",children:t.period}),P.jsxs("div",{children:[P.jsx("div",{className:"exp-company",children:t.company}),P.jsx("div",{className:"exp-role",children:t.role}),P.jsx("ul",{className:"exp-points",children:t.points.map(n=>P.jsx("li",{children:n},n))})]})]},t.company))]})]})]})]})]})}function nU({images:t,index:e,onIndexChange:n,onClose:i}){const r=t.length,s=t[e];if(J.useEffect(()=>{const a=l=>{l.key==="Escape"?i():l.key==="ArrowLeft"&&r>1?n((e-1+r)%r):l.key==="ArrowRight"&&r>1&&n((e+1)%r)};return document.addEventListener("keydown",a),document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",a),document.body.style.overflow=""}},[e,r,n,i]),!s)return null;const o=a=>{r<=1||n((e+a+r)%r)};return om.createPortal(P.jsxs("div",{className:"lightbox",onClick:i,role:"dialog","aria-modal":"true",children:[P.jsx("button",{className:"lightbox-close",onClick:i,"aria-label":"关闭",children:P.jsx(Jy,{size:20,strokeWidth:2})}),r>1&&P.jsx("button",{className:"lightbox-nav lightbox-prev",onClick:a=>{a.stopPropagation(),o(-1)},"aria-label":"上一张",children:P.jsx(dw,{size:30,strokeWidth:2})}),r>1&&P.jsx("button",{className:"lightbox-nav lightbox-next",onClick:a=>{a.stopPropagation(),o(1)},"aria-label":"下一张",children:P.jsx(pw,{size:30,strokeWidth:2})}),P.jsx("img",{className:"lightbox-img",src:s.src,alt:`作品大图 ${e+1}`,onClick:a=>a.stopPropagation()},s.src),P.jsxs("div",{className:"lightbox-cap",children:[String(e+1).padStart(2,"0")," / ",String(r).padStart(2,"0")," · ",s.w," × ",s.h," PX"]})]}),document.body)}const U_=[.32,.72,0,1],iU={data:Qy,app:Dw,brand:ww};function rU({value:t,label:e}){return P.jsxs("div",{className:"pc-stat",children:[P.jsx("div",{className:"pc-stat-value",children:t}),P.jsx("div",{className:"pc-stat-label",children:e})]})}function sU({images:t,active:e,onZoom:n}){const[i,r]=J.useState(3);J.useEffect(()=>{const o=()=>{const a=window.innerWidth;a<640?r(1):a<1100?r(2):a<1600?r(3):r(4)};return o(),window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[]);const s=J.useMemo(()=>{const o=Array.from({length:i},()=>[]),a=new Array(i).fill(0);return t.forEach(l=>{const c=l.h/l.w,f=a.indexOf(Math.min(...a));o[f].push(l),a[f]+=c}),o},[t,i]);return P.jsx("div",{className:"pd-masonry",children:s.map((o,a)=>P.jsx("div",{className:"pd-masonry-col",children:o.map(l=>{const c=t.indexOf(l)+1;return P.jsxs("div",{className:"g-wrap",children:[P.jsx("img",{className:"g-img",src:l.src,alt:`${e.name} 作品图 ${c}`,style:{aspectRatio:`${l.w} / ${l.h}`},loading:"eager",onClick:()=>n({images:t,index:t.indexOf(l)})}),P.jsxs("div",{className:"g-cap",children:[P.jsx("span",{className:"g-num",children:String(c).padStart(2,"0")}),P.jsxs("span",{className:"g-dim",children:[l.w," × ",l.h]})]})]},l.src)})},a))})}function oU(){const[t,e]=J.useState("all"),[n,i]=J.useState(null),[r,s]=J.useState(null),[o,a]=J.useState(!0),[l,c]=J.useState(!1),[f,d]=J.useState(null),u=J.useRef(null),p=J.useRef(!1),m=J.useRef(0),M=J.useRef(0),g=J.useRef(!1),h=J.useRef(null),v=()=>{var I;(I=h.current)==null||I.scrollTo({top:0,behavior:"smooth"})},y=I=>{d(I);const L=setTimeout(()=>d(null),1600);return()=>clearTimeout(L)},x=J.useMemo(()=>t==="all"?Bn:Bn.filter(I=>I.category===t),[t]),E=Bn.find(I=>I.id===n)||null,w=Bn.findIndex(I=>I.id===n),C=w>=0?Bn[(w-1+Bn.length)%Bn.length]:null,_=w>=0?Bn[(w+1)%Bn.length]:null,A=I=>{I&&(i(I.id),requestAnimationFrame(()=>{const L=document.querySelector(".pd-overlay");L&&(L.scrollTop=0)}))};J.useEffect(()=>{document.body.style.overflow=E?"hidden":"";const I=()=>i(null);return window.addEventListener("portfolio:close-detail",I),()=>{document.body.style.overflow="",window.removeEventListener("portfolio:close-detail",I)}},[E]),J.useEffect(()=>{const I=L=>L.key==="Escape"&&i(null);return window.addEventListener("keydown",I),()=>window.removeEventListener("keydown",I)},[]),J.useEffect(()=>{u.current&&u.current.scrollTo({left:0,behavior:"smooth"})},[t]);const b=()=>{const I=u.current;if(!I)return 0;const L=I.querySelector(".project-card");if(!L)return 0;const N=parseInt(getComputedStyle(I).gap)||24;return L.offsetWidth+N},D=I=>{const L=u.current;if(!L)return;const N=b();if(!N)return;const V=L.scrollWidth-L.clientWidth;if(I===1&&L.scrollLeft+N>=V-2){L.scrollTo({left:V,behavior:"smooth"}),y("已是最后一张");return}if(I===-1&&L.scrollLeft-N<=2){L.scrollTo({left:0,behavior:"smooth"}),y("已是第一张");return}L.scrollBy({left:I*N,behavior:"smooth"})},U=I=>{const L=u.current;L&&(p.current=!0,g.current=!1,m.current=I.pageX,M.current=L.scrollLeft,L.classList.add("dragging"))},$=I=>{if(!p.current)return;const L=I.pageX-m.current;Math.abs(L)>4&&(g.current=!0),u.current.scrollLeft=M.current-L},Y=()=>{var I;p.current&&(p.current=!1,(I=u.current)==null||I.classList.remove("dragging"))},B=()=>{var I;p.current=!1,(I=u.current)==null||I.classList.remove("dragging"),c(!1)};return J.useEffect(()=>{if(!o||p.current||E)return;const I=setInterval(()=>{if(p.current)return;const L=u.current;if(!L)return;const N=b();if(!N)return;const V=L.scrollWidth-L.clientWidth;L.scrollLeft+N>=V-2?L.scrollTo({left:0,behavior:"smooth"}):L.scrollBy({left:N,behavior:"smooth"})},3500);return()=>clearInterval(I)},[o,E]),P.jsxs("section",{className:"section",id:"projects",children:[P.jsx(Lu,{opacity:.5,colors:["#f0b35a","#e08a3c","#a85a1e","#3a230c"],rotation:90,autoRotate:4,speed:.11,scale:1,frequency:1.1,warpStrength:.85,mouseInfluence:.5,parallax:.4,noise:.08,iterations:2,intensity:.9,bandWidth:6,transparent:!0}),P.jsx("div",{className:"container",children:P.jsxs("div",{className:"section-head projects-head",children:[P.jsxs("div",{children:[P.jsx(Kt,{className:"section-eyebrow",children:"Projects"}),P.jsx(Kt,{as:"h2",className:"section-title",delay:100,children:"精选案例"})]}),P.jsx(Kt,{className:"filter-bar",delay:200,children:Bw.map(I=>P.jsx("button",{className:`filter-btn ${t===I.key?"active":""}`,onClick:()=>e(I.key),children:I.label},I.key))})]})}),P.jsxs("div",{className:"projects-outer",children:[P.jsx("button",{className:"pc-side pc-side-left",onClick:()=>D(-1),"aria-label":"上一个项目",children:P.jsx(zo,{size:20,strokeWidth:1.8})}),P.jsx("button",{className:"pc-side pc-side-right",onClick:()=>D(1),"aria-label":"下一个项目",children:P.jsx(_l,{size:20,strokeWidth:1.8})}),P.jsx("div",{className:"projects-track",ref:u,onMouseEnter:()=>c(!0),onMouseDown:U,onMouseMove:$,onMouseUp:Y,onMouseLeave:B,children:x.map((I,L)=>{var K;const N=iU[I.category]||Qy,V=(K=I.images[0])==null?void 0:K.src;return P.jsxs(Gi.div,{className:"project-card",initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},whileHover:{scale:1.035,y:-7},viewport:{once:!0,amount:.2},transition:{duration:.6,delay:L*.08,ease:U_},onClick:ne=>{if(g.current){ne.preventDefault();return}i(I.id)},role:"button",tabIndex:0,onKeyDown:ne=>ne.key==="Enter"&&i(I.id),children:[P.jsxs("div",{className:"pc-cover",children:[P.jsx("img",{src:V,alt:`${I.name} 封面`,loading:"lazy"}),P.jsx("div",{className:"pc-shade"})]}),P.jsxs("div",{className:"pc-body",children:[P.jsxs("div",{className:"pc-top",children:[P.jsx("div",{className:"pc-icon",children:P.jsx(N,{size:18,strokeWidth:1.8})}),P.jsxs("div",{className:"pc-meta",children:[P.jsx("div",{className:"pc-cat",children:I.categoryLabel}),P.jsx("div",{className:"pc-name",children:I.name})]})]}),P.jsx("div",{className:"pc-sub",children:I.subtitle}),P.jsx("p",{className:"pc-desc",children:I.desc}),P.jsx("div",{className:"pc-stats",children:I.stats.map(ne=>P.jsx(rU,{value:ne.value,label:ne.label},ne.label))}),P.jsxs("div",{className:"pc-btn",children:[P.jsx("span",{children:"查看详情"}),P.jsx(Yy,{size:16,strokeWidth:1.8})]})]})]},I.id)})}),P.jsxs("div",{className:"pc-controls",children:[P.jsx("button",{className:"pc-ctrl",onClick:()=>D(-1),"aria-label":"上一个项目",children:P.jsx(zo,{size:18,strokeWidth:1.8})}),P.jsx("button",{className:"pc-ctrl",onClick:()=>D(1),"aria-label":"下一个项目",children:P.jsx(_l,{size:18,strokeWidth:1.8})}),P.jsx("button",{className:`pc-ctrl ${o?"active":""}`,onClick:()=>a(I=>!I),"aria-label":o?"暂停自动滚动":"自动滚动",children:o?P.jsx(Cw,{size:18,fill:"currentColor"}):P.jsx(bw,{size:18,fill:"currentColor"})})]}),P.jsx(Ev,{children:f&&P.jsx(Gi.div,{className:"pc-notice",initial:{opacity:0,y:12},animate:{opacity:1,y:0},exit:{opacity:0,y:8},transition:{duration:.25},children:f})})]}),om.createPortal(P.jsx(Ev,{children:E&&P.jsxs(Gi.div,{ref:h,className:"pd-overlay",initial:{opacity:0,y:56},animate:{opacity:1,y:0},exit:{opacity:0,y:56},transition:{duration:.45,ease:U_},children:[P.jsx("div",{className:"pd-topbar",children:P.jsxs("div",{className:"pd-topbar-inner",children:[P.jsxs("div",{className:"pd-topbar-title",children:[P.jsx("span",{className:"pd-topbar-idx",children:String(Bn.indexOf(E)+1).padStart(2,"0")}),P.jsx("span",{children:E.name})]}),P.jsxs("div",{className:"pd-topbar-actions",children:[P.jsx("button",{className:"pd-topbar-btn",onClick:()=>A(C),"aria-label":"上一个案例",title:"上一个案例",children:P.jsx(zo,{size:18,strokeWidth:2})}),P.jsx("button",{className:"pd-topbar-btn",onClick:()=>A(_),"aria-label":"下一个案例",title:"下一个案例",children:P.jsx(_l,{size:18,strokeWidth:2})}),P.jsx("button",{className:"pd-topbar-btn close",onClick:()=>i(null),"aria-label":"关闭",title:"关闭",children:P.jsx(Jy,{size:18,strokeWidth:2})})]})]})}),P.jsxs("div",{className:"pd-head",children:[P.jsxs("span",{className:"pd-idx-head",children:[String(Bn.indexOf(E)+1).padStart(2,"0")," /"," ",String(Bn.length).padStart(2,"0")]}),P.jsx("div",{className:"pd-eyebrow",children:E.categoryLabel}),P.jsx("h3",{className:"pd-title",children:E.name}),P.jsx("div",{className:"pd-sub",children:E.subtitle}),P.jsxs("div",{className:"pd-meta",children:[P.jsxs("div",{className:"row",children:[P.jsx("div",{className:"k",children:"Role"}),P.jsx("div",{className:"v",children:E.role})]}),P.jsxs("div",{className:"row",children:[P.jsx("div",{className:"k",children:"Period"}),P.jsx("div",{className:"v",children:E.period})]}),P.jsxs("div",{className:"row",children:[P.jsx("div",{className:"k",children:"Output"}),P.jsxs("div",{className:"v",children:[E.images.length," 张 · ",E.sizeLabel]})]})]}),P.jsx("p",{className:"pd-desc",children:E.desc}),P.jsx("div",{className:"pd-tags",children:E.tags.map(I=>P.jsx("span",{className:"pd-tag",children:I},I))})]}),P.jsxs("div",{className:"pd-gallery",children:[P.jsxs("div",{className:"pd-count",children:["全部作品 · ",E.images.length," 张"]}),P.jsx(sU,{images:E.images,active:E,onZoom:s}),P.jsx("div",{className:"pd-footer",children:P.jsxs("div",{className:"pd-footer-inner",children:[P.jsxs("button",{className:"pd-back-btn",onClick:()=>i(null),children:[P.jsx(zo,{size:16,strokeWidth:2}),"返回列表"]}),P.jsxs("div",{className:"pd-pager",children:[P.jsxs("button",{className:"pd-pager-btn",onClick:()=>A(C),children:[P.jsx(zo,{size:15,strokeWidth:2}),"上一个案例"]}),P.jsxs("button",{className:"pd-pager-btn",onClick:()=>A(_),children:["下一个案例",P.jsx(_l,{size:15,strokeWidth:2})]})]}),P.jsxs("button",{className:"pd-top-btn",onClick:v,title:"返回顶部",children:[P.jsx(uw,{size:15,strokeWidth:2}),"顶部"]})]})})]})]},E.id)}),document.body),r&&P.jsx(nU,{images:r.images,index:r.index,onIndexChange:I=>s(L=>({...L,index:I})),onClose:()=>s(null)})]})}const aU={Diamond:Ky,Gem:yw,Triangle:Uw,Circle:gw,Square:Nw,Hexagon:Mw};function lU(){return P.jsxs("section",{className:"section section-soft",id:"strengths",children:[P.jsx(Lu,{opacity:.82,colors:["#b794f6","#8b5cf6","#5b2ea6","#241046"],rotation:135,autoRotate:6,speed:.12,scale:1.2,frequency:1.6,warpStrength:.9,mouseInfluence:.4,parallax:.3,noise:.07,iterations:2,intensity:1.12,bandWidth:9,transparent:!0}),P.jsxs("div",{className:"container",children:[P.jsxs("div",{className:"section-head",children:[P.jsx(Kt,{className:"section-eyebrow",children:"Strengths"}),P.jsx(Kt,{as:"h2",className:"section-title",delay:100,children:"核心优势"})]}),P.jsx("div",{className:"strength-grid",children:kw.map((t,e)=>{const n=aU[t.icon]||Ky;return P.jsxs(Kt,{className:"s-card",delay:e%3*100,children:[P.jsx("div",{className:"s-icon",children:P.jsx(n,{size:34,strokeWidth:1.4})}),P.jsx("div",{className:"s-title",children:t.title}),P.jsx("div",{className:"s-desc",children:t.desc})]},t.title)})})]})]})}function cU(){return P.jsxs("section",{className:"contact",id:"contact",children:[P.jsx(Lu,{opacity:.95,colors:["#8fe8f5","#3fb3d6","#1f7e9c","#0a2c38"],rotation:60,autoRotate:5,speed:.14,scale:1.1,frequency:1,warpStrength:.85,mouseInfluence:.85,parallax:.6,noise:.07,iterations:2,intensity:1.25,bandWidth:5,transparent:!0}),P.jsxs("div",{className:"contact-inner",children:[P.jsx(Kt,{className:"contact-eyebrow",children:"Contact"}),P.jsxs(Kt,{as:"h2",className:"contact-title",delay:120,children:["让我们一起",P.jsx("br",{}),"创造点什么"]}),P.jsx(Kt,{className:"contact-desc",delay:220,children:"正在寻找资深体验设计 / UED 管理岗位机会。无论是全职合作还是设计咨询，欢迎随时联系。"}),P.jsxs(Kt,{className:"contact-links",delay:320,children:[P.jsxs("div",{className:"contact-link",children:[P.jsx("div",{className:"k",children:"Email"}),P.jsx("a",{href:`mailto:${Lt.email}`,children:P.jsx("span",{className:"v",children:Lt.email})})]}),P.jsxs("div",{className:"contact-link",children:[P.jsx("div",{className:"k",children:"Phone"}),P.jsx("a",{href:`tel:${Lt.phone}`,children:P.jsx("span",{className:"v",children:Lt.phone})})]}),P.jsxs("div",{className:"contact-link",children:[P.jsx("div",{className:"k",children:"Base"}),P.jsxs("span",{className:"v",children:[Lt.city," · 可远程协作"]})]})]})]}),P.jsx("div",{className:"footer-bar",children:P.jsx("span",{children:"© 2026 常传建 — 以设计驱动产品价值"})})]})}function uU(){return P.jsxs(P.Fragment,{children:[P.jsx(Vw,{}),P.jsxs("main",{children:[P.jsx(eU,{}),P.jsx(tU,{}),P.jsx(oU,{}),P.jsx(lU,{}),P.jsx(cU,{})]})]})}rd.createRoot(document.getElementById("root")).render(P.jsx(GE.StrictMode,{children:P.jsx(uU,{})}));
