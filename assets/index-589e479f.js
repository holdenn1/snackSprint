(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function Dl(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const Yb="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",Xb=Dl(Yb);function Do(t){if(te(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=ze(s)?ew(s):Do(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(ze(t))return t;if(Me(t))return t}}const Qb=/;(?![^(]*\))/g,Jb=/:([^]+)/,Zb=/\/\*.*?\*\//gs;function ew(t){const e={};return t.replace(Zb,"").split(Qb).forEach(n=>{if(n){const s=n.split(Jb);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function St(t){let e="";if(ze(t))e=t;else if(te(t))for(let n=0;n<t.length;n++){const s=St(t[n]);s&&(e+=s+" ")}else if(Me(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function tw(t){if(!t)return null;let{class:e,style:n}=t;return e&&!ze(e)&&(t.class=St(e)),n&&(t.style=Do(n)),t}const nw="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",sw=Dl(nw);function e_(t){return!!t||t===""}function iw(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=ws(t[s],e[s]);return n}function ws(t,e){if(t===e)return!0;let n=fp(t),s=fp(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=ro(t),s=ro(e),n||s)return t===e;if(n=te(t),s=te(e),n||s)return n&&s?iw(t,e):!1;if(n=Me(t),s=Me(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!ws(t[o],e[o]))return!1}}return String(t)===String(e)}function Ml(t,e){return t.findIndex(n=>ws(n,e))}const Ne=t=>ze(t)?t:t==null?"":te(t)||Me(t)&&(t.toString===n_||!fe(t.toString))?JSON.stringify(t,t_,2):String(t),t_=(t,e)=>e&&e.__v_isRef?t_(t,e.value):Fi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:mi(e)?{[`Set(${e.size})`]:[...e.values()]}:Me(e)&&!te(e)&&!s_(e)?String(e):e,Pe={},Mi=[],cn=()=>{},rw=()=>!1,ow=/^on[^a-z]/,Mo=t=>ow.test(t),Hh=t=>t.startsWith("onUpdate:"),Qe=Object.assign,Wh=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},aw=Object.prototype.hasOwnProperty,Te=(t,e)=>aw.call(t,e),te=Array.isArray,Fi=t=>ar(t)==="[object Map]",mi=t=>ar(t)==="[object Set]",fp=t=>ar(t)==="[object Date]",lw=t=>ar(t)==="[object RegExp]",fe=t=>typeof t=="function",ze=t=>typeof t=="string",ro=t=>typeof t=="symbol",Me=t=>t!==null&&typeof t=="object",zh=t=>Me(t)&&fe(t.then)&&fe(t.catch),n_=Object.prototype.toString,ar=t=>n_.call(t),cw=t=>ar(t).slice(8,-1),s_=t=>ar(t)==="[object Object]",qh=t=>ze(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,$r=Dl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Fl=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},uw=/-(\w)/g,Nt=Fl(t=>t.replace(uw,(e,n)=>n?n.toUpperCase():"")),hw=/\B([A-Z])/g,Xt=Fl(t=>t.replace(hw,"-$1").toLowerCase()),Fo=Fl(t=>t.charAt(0).toUpperCase()+t.slice(1)),jr=Fl(t=>t?`on${Fo(t)}`:""),Gi=(t,e)=>!Object.is(t,e),Li=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Wa=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},za=t=>{const e=parseFloat(t);return isNaN(e)?t:e},qa=t=>{const e=ze(t)?Number(t):NaN;return isNaN(e)?t:e};let pp;const dw=()=>pp||(pp=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Bt;class Kh{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Bt,!e&&Bt&&(this.index=(Bt.scopes||(Bt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Bt;try{return Bt=this,e()}finally{Bt=n}}}on(){Bt=this}off(){Bt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Gh(t){return new Kh(t)}function i_(t,e=Bt){e&&e.active&&e.effects.push(t)}function Yh(){return Bt}function r_(t){Bt&&Bt.cleanups.push(t)}const Xh=t=>{const e=new Set(t);return e.w=0,e.n=0,e},o_=t=>(t.w&Cs)>0,a_=t=>(t.n&Cs)>0,fw=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Cs},pw=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];o_(i)&&!a_(i)?i.delete(t):e[n++]=i,i.w&=~Cs,i.n&=~Cs}e.length=n}},Ka=new WeakMap;let Mr=0,Cs=1;const xu=30;let nn;const Ys=Symbol(""),Nu=Symbol("");class Lo{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,i_(this,s)}run(){if(!this.active)return this.fn();let e=nn,n=ms;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=nn,nn=this,ms=!0,Cs=1<<++Mr,Mr<=xu?fw(this):gp(this),this.fn()}finally{Mr<=xu&&pw(this),Cs=1<<--Mr,nn=this.parent,ms=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){nn===this?this.deferStop=!0:this.active&&(gp(this),this.onStop&&this.onStop(),this.active=!1)}}function gp(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}function gw(t,e){t.effect&&(t=t.effect.fn);const n=new Lo(t);e&&(Qe(n,e),e.scope&&i_(n,e.scope)),(!e||!e.lazy)&&n.run();const s=n.run.bind(n);return s.effect=n,s}function mw(t){t.effect.stop()}let ms=!0;const l_=[];function lr(){l_.push(ms),ms=!1}function cr(){const t=l_.pop();ms=t===void 0?!0:t}function Ft(t,e,n){if(ms&&nn){let s=Ka.get(t);s||Ka.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=Xh()),c_(i)}}function c_(t,e){let n=!1;Mr<=xu?a_(t)||(t.n|=Cs,n=!o_(t)):n=!t.has(nn),n&&(t.add(nn),nn.deps.push(t))}function Vn(t,e,n,s,i,r){const o=Ka.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&te(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":te(t)?qh(n)&&a.push(o.get("length")):(a.push(o.get(Ys)),Fi(t)&&a.push(o.get(Nu)));break;case"delete":te(t)||(a.push(o.get(Ys)),Fi(t)&&a.push(o.get(Nu)));break;case"set":Fi(t)&&a.push(o.get(Ys));break}if(a.length===1)a[0]&&Du(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Du(Xh(l))}}function Du(t,e){const n=te(t)?t:[...t];for(const s of n)s.computed&&mp(s);for(const s of n)s.computed||mp(s)}function mp(t,e){(t!==nn||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function _w(t,e){var n;return(n=Ka.get(t))===null||n===void 0?void 0:n.get(e)}const vw=Dl("__proto__,__v_isRef,__isVue"),u_=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ro)),yw=Ll(),Ew=Ll(!1,!0),bw=Ll(!0),ww=Ll(!0,!0),_p=Cw();function Cw(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=Ee(this);for(let r=0,o=this.length;r<o;r++)Ft(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(Ee)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){lr();const s=Ee(this)[e].apply(this,n);return cr(),s}}),t}function Tw(t){const e=Ee(this);return Ft(e,"has",t),e.hasOwnProperty(t)}function Ll(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?__:m_:e?g_:p_).get(s))return s;const o=te(s);if(!t){if(o&&Te(_p,i))return Reflect.get(_p,i,r);if(i==="hasOwnProperty")return Tw}const a=Reflect.get(s,i,r);return(ro(i)?u_.has(i):vw(i))||(t||Ft(s,"get",i),e)?a:De(a)?o&&qh(i)?a:a.value:Me(a)?t?Jh(a):In(a):a}}const Iw=h_(),Aw=h_(!0);function h_(t=!1){return function(n,s,i,r){let o=n[s];if(ii(o)&&De(o)&&!De(i))return!1;if(!t&&(!oo(i)&&!ii(i)&&(o=Ee(o),i=Ee(i)),!te(n)&&De(o)&&!De(i)))return o.value=i,!0;const a=te(n)&&qh(s)?Number(s)<n.length:Te(n,s),l=Reflect.set(n,s,i,r);return n===Ee(r)&&(a?Gi(i,o)&&Vn(n,"set",s,i):Vn(n,"add",s,i)),l}}function Sw(t,e){const n=Te(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Vn(t,"delete",e,void 0),s}function Rw(t,e){const n=Reflect.has(t,e);return(!ro(e)||!u_.has(e))&&Ft(t,"has",e),n}function kw(t){return Ft(t,"iterate",te(t)?"length":Ys),Reflect.ownKeys(t)}const d_={get:yw,set:Iw,deleteProperty:Sw,has:Rw,ownKeys:kw},f_={get:bw,set(t,e){return!0},deleteProperty(t,e){return!0}},Ow=Qe({},d_,{get:Ew,set:Aw}),Pw=Qe({},f_,{get:ww}),Qh=t=>t,Ul=t=>Reflect.getPrototypeOf(t);function pa(t,e,n=!1,s=!1){t=t.__v_raw;const i=Ee(t),r=Ee(e);n||(e!==r&&Ft(i,"get",e),Ft(i,"get",r));const{has:o}=Ul(i),a=s?Qh:n?ed:ao;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function ga(t,e=!1){const n=this.__v_raw,s=Ee(n),i=Ee(t);return e||(t!==i&&Ft(s,"has",t),Ft(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function ma(t,e=!1){return t=t.__v_raw,!e&&Ft(Ee(t),"iterate",Ys),Reflect.get(t,"size",t)}function vp(t){t=Ee(t);const e=Ee(this);return Ul(e).has.call(e,t)||(e.add(t),Vn(e,"add",t,t)),this}function yp(t,e){e=Ee(e);const n=Ee(this),{has:s,get:i}=Ul(n);let r=s.call(n,t);r||(t=Ee(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?Gi(e,o)&&Vn(n,"set",t,e):Vn(n,"add",t,e),this}function Ep(t){const e=Ee(this),{has:n,get:s}=Ul(e);let i=n.call(e,t);i||(t=Ee(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&Vn(e,"delete",t,void 0),r}function bp(){const t=Ee(this),e=t.size!==0,n=t.clear();return e&&Vn(t,"clear",void 0,void 0),n}function _a(t,e){return function(s,i){const r=this,o=r.__v_raw,a=Ee(o),l=e?Qh:t?ed:ao;return!t&&Ft(a,"iterate",Ys),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function va(t,e,n){return function(...s){const i=this.__v_raw,r=Ee(i),o=Fi(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?Qh:e?ed:ao;return!e&&Ft(r,"iterate",l?Nu:Ys),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function es(t){return function(...e){return t==="delete"?!1:this}}function xw(){const t={get(r){return pa(this,r)},get size(){return ma(this)},has:ga,add:vp,set:yp,delete:Ep,clear:bp,forEach:_a(!1,!1)},e={get(r){return pa(this,r,!1,!0)},get size(){return ma(this)},has:ga,add:vp,set:yp,delete:Ep,clear:bp,forEach:_a(!1,!0)},n={get(r){return pa(this,r,!0)},get size(){return ma(this,!0)},has(r){return ga.call(this,r,!0)},add:es("add"),set:es("set"),delete:es("delete"),clear:es("clear"),forEach:_a(!0,!1)},s={get(r){return pa(this,r,!0,!0)},get size(){return ma(this,!0)},has(r){return ga.call(this,r,!0)},add:es("add"),set:es("set"),delete:es("delete"),clear:es("clear"),forEach:_a(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=va(r,!1,!1),n[r]=va(r,!0,!1),e[r]=va(r,!1,!0),s[r]=va(r,!0,!0)}),[t,n,e,s]}const[Nw,Dw,Mw,Fw]=xw();function Bl(t,e){const n=e?t?Fw:Mw:t?Dw:Nw;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(Te(n,i)&&i in s?n:s,i,r)}const Lw={get:Bl(!1,!1)},Uw={get:Bl(!1,!0)},Bw={get:Bl(!0,!1)},Vw={get:Bl(!0,!0)},p_=new WeakMap,g_=new WeakMap,m_=new WeakMap,__=new WeakMap;function $w(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function jw(t){return t.__v_skip||!Object.isExtensible(t)?0:$w(cw(t))}function In(t){return ii(t)?t:Vl(t,!1,d_,Lw,p_)}function v_(t){return Vl(t,!1,Ow,Uw,g_)}function Jh(t){return Vl(t,!0,f_,Bw,m_)}function Hw(t){return Vl(t,!0,Pw,Vw,__)}function Vl(t,e,n,s,i){if(!Me(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=jw(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function En(t){return ii(t)?En(t.__v_raw):!!(t&&t.__v_isReactive)}function ii(t){return!!(t&&t.__v_isReadonly)}function oo(t){return!!(t&&t.__v_isShallow)}function Zh(t){return En(t)||ii(t)}function Ee(t){const e=t&&t.__v_raw;return e?Ee(e):t}function Ts(t){return Wa(t,"__v_skip",!0),t}const ao=t=>Me(t)?In(t):t,ed=t=>Me(t)?Jh(t):t;function td(t){ms&&nn&&(t=Ee(t),c_(t.dep||(t.dep=Xh())))}function $l(t,e){t=Ee(t);const n=t.dep;n&&Du(n)}function De(t){return!!(t&&t.__v_isRef===!0)}function Be(t){return E_(t,!1)}function y_(t){return E_(t,!0)}function E_(t,e){return De(t)?t:new Ww(t,e)}class Ww{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Ee(e),this._value=n?e:ao(e)}get value(){return td(this),this._value}set value(e){const n=this.__v_isShallow||oo(e)||ii(e);e=n?e:Ee(e),Gi(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:ao(e),$l(this))}}function zw(t){$l(t)}function C(t){return De(t)?t.value:t}const qw={get:(t,e,n)=>C(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return De(i)&&!De(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function nd(t){return En(t)?t:new Proxy(t,qw)}class Kw{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:s}=e(()=>td(this),()=>$l(this));this._get=n,this._set=s}get value(){return this._get()}set value(e){this._set(e)}}function Gw(t){return new Kw(t)}function b_(t){const e=te(t)?new Array(t.length):{};for(const n in t)e[n]=It(t,n);return e}class Yw{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return _w(Ee(this._object),this._key)}}function It(t,e,n){const s=t[e];return De(s)?s:new Yw(t,e,n)}var w_;class Xw{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[w_]=!1,this._dirty=!0,this.effect=new Lo(e,()=>{this._dirty||(this._dirty=!0,$l(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=Ee(this);return td(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}w_="__v_isReadonly";function Qw(t,e,n=!1){let s,i;const r=fe(t);return r?(s=t,i=cn):(s=t.get,i=t.set),new Xw(s,i,r||!i,n)}function Jw(t,...e){}function Zw(t,e){}function Ln(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){_i(r,e,n)}return i}function Wt(t,e,n,s){if(fe(t)){const r=Ln(t,e,n,s);return r&&zh(r)&&r.catch(o=>{_i(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(Wt(t[r],e,n,s));return i}function _i(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){Ln(l,null,10,[t,o,a]);return}}eC(t,n,i,s)}function eC(t,e,n,s=!0){console.error(t)}let lo=!1,Mu=!1;const _t=[];let mn=0;const Ui=[];let kn=null,$s=0;const C_=Promise.resolve();let sd=null;function vn(t){const e=sd||C_;return t?e.then(this?t.bind(this):t):e}function tC(t){let e=mn+1,n=_t.length;for(;e<n;){const s=e+n>>>1;co(_t[s])<t?e=s+1:n=s}return e}function jl(t){(!_t.length||!_t.includes(t,lo&&t.allowRecurse?mn+1:mn))&&(t.id==null?_t.push(t):_t.splice(tC(t.id),0,t),T_())}function T_(){!lo&&!Mu&&(Mu=!0,sd=C_.then(I_))}function nC(t){const e=_t.indexOf(t);e>mn&&_t.splice(e,1)}function id(t){te(t)?Ui.push(...t):(!kn||!kn.includes(t,t.allowRecurse?$s+1:$s))&&Ui.push(t),T_()}function wp(t,e=lo?mn+1:0){for(;e<_t.length;e++){const n=_t[e];n&&n.pre&&(_t.splice(e,1),e--,n())}}function Ga(t){if(Ui.length){const e=[...new Set(Ui)];if(Ui.length=0,kn){kn.push(...e);return}for(kn=e,kn.sort((n,s)=>co(n)-co(s)),$s=0;$s<kn.length;$s++)kn[$s]();kn=null,$s=0}}const co=t=>t.id==null?1/0:t.id,sC=(t,e)=>{const n=co(t)-co(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function I_(t){Mu=!1,lo=!0,_t.sort(sC);const e=cn;try{for(mn=0;mn<_t.length;mn++){const n=_t[mn];n&&n.active!==!1&&Ln(n,null,14)}}finally{mn=0,_t.length=0,Ga(),lo=!1,sd=null,(_t.length||Ui.length)&&I_()}}let Ri,ya=[];function A_(t,e){var n,s;Ri=t,Ri?(Ri.enabled=!0,ya.forEach(({event:i,args:r})=>Ri.emit(i,...r)),ya=[]):typeof window<"u"&&window.HTMLElement&&!(!((s=(n=window.navigator)===null||n===void 0?void 0:n.userAgent)===null||s===void 0)&&s.includes("jsdom"))?((e.__VUE_DEVTOOLS_HOOK_REPLAY__=e.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(r=>{A_(r,e)}),setTimeout(()=>{Ri||(e.__VUE_DEVTOOLS_HOOK_REPLAY__=null,ya=[])},3e3)):ya=[]}function iC(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Pe;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||Pe;d&&(i=n.map(f=>ze(f)?f.trim():f)),h&&(i=n.map(za))}let a,l=s[a=jr(e)]||s[a=jr(Nt(e))];!l&&r&&(l=s[a=jr(Xt(e))]),l&&Wt(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Wt(c,t,6,i)}}function S_(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!fe(t)){const l=c=>{const u=S_(c,e,!0);u&&(a=!0,Qe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(Me(t)&&s.set(t,null),null):(te(r)?r.forEach(l=>o[l]=null):Qe(o,r),Me(t)&&s.set(t,o),o)}function Hl(t,e){return!t||!Mo(e)?!1:(e=e.slice(2).replace(/Once$/,""),Te(t,e[0].toLowerCase()+e.slice(1))||Te(t,Xt(e))||Te(t,e))}let ht=null,Wl=null;function uo(t){const e=ht;return ht=t,Wl=t&&t.type.__scopeId||null,e}function ur(t){Wl=t}function hr(){Wl=null}const rC=t=>ft;function ft(t,e=ht,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&ju(-1);const r=uo(e);let o;try{o=t(...i)}finally{uo(r),s._d&&ju(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Ma(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:f,ctx:m,inheritAttrs:T}=t;let P,v;const g=uo(t);try{if(n.shapeFlag&4){const S=i||s;P=Vt(u.call(S,S,h,r,f,d,m)),v=l}else{const S=e;P=Vt(S.length>1?S(r,{attrs:l,slots:a,emit:c}):S(r,null)),v=e.props?l:aC(l)}}catch(S){zr.length=0,_i(S,t,1),P=ee(vt)}let b=P;if(v&&T!==!1){const S=Object.keys(v),{shapeFlag:w}=b;S.length&&w&7&&(o&&S.some(Hh)&&(v=lC(v,o)),b=Cn(b,v))}return n.dirs&&(b=Cn(b),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&(b.transition=n.transition),P=b,uo(g),P}function oC(t){let e;for(let n=0;n<t.length;n++){const s=t[n];if(Is(s)){if(s.type!==vt||s.children==="v-if"){if(e)return;e=s}}else return}return e}const aC=t=>{let e;for(const n in t)(n==="class"||n==="style"||Mo(n))&&((e||(e={}))[n]=t[n]);return e},lC=(t,e)=>{const n={};for(const s in t)(!Hh(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function cC(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?Cp(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!Hl(c,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Cp(s,o,c):!0:!!o;return!1}function Cp(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Hl(n,r))return!0}return!1}function rd({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const R_=t=>t.__isSuspense,uC={name:"Suspense",__isSuspense:!0,process(t,e,n,s,i,r,o,a,l,c){t==null?dC(e,n,s,i,r,o,a,l,c):fC(t,e,n,s,i,o,a,l,c)},hydrate:pC,create:od,normalize:gC},hC=uC;function ho(t,e){const n=t.props&&t.props[e];fe(n)&&n()}function dC(t,e,n,s,i,r,o,a,l){const{p:c,o:{createElement:u}}=l,h=u("div"),d=t.suspense=od(t,i,s,e,h,n,r,o,a,l);c(null,d.pendingBranch=t.ssContent,h,null,s,d,r,o),d.deps>0?(ho(t,"onPending"),ho(t,"onFallback"),c(null,t.ssFallback,e,n,s,null,r,o),Bi(d,t.ssFallback)):d.resolve()}function fC(t,e,n,s,i,r,o,a,{p:l,um:c,o:{createElement:u}}){const h=e.suspense=t.suspense;h.vnode=e,e.el=t.el;const d=e.ssContent,f=e.ssFallback,{activeBranch:m,pendingBranch:T,isInFallback:P,isHydrating:v}=h;if(T)h.pendingBranch=d,sn(d,T)?(l(T,d,h.hiddenContainer,null,i,h,r,o,a),h.deps<=0?h.resolve():P&&(l(m,f,n,s,i,null,r,o,a),Bi(h,f))):(h.pendingId++,v?(h.isHydrating=!1,h.activeBranch=T):c(T,i,h),h.deps=0,h.effects.length=0,h.hiddenContainer=u("div"),P?(l(null,d,h.hiddenContainer,null,i,h,r,o,a),h.deps<=0?h.resolve():(l(m,f,n,s,i,null,r,o,a),Bi(h,f))):m&&sn(d,m)?(l(m,d,n,s,i,h,r,o,a),h.resolve(!0)):(l(null,d,h.hiddenContainer,null,i,h,r,o,a),h.deps<=0&&h.resolve()));else if(m&&sn(d,m))l(m,d,n,s,i,h,r,o,a),Bi(h,d);else if(ho(e,"onPending"),h.pendingBranch=d,h.pendingId++,l(null,d,h.hiddenContainer,null,i,h,r,o,a),h.deps<=0)h.resolve();else{const{timeout:g,pendingId:b}=h;g>0?setTimeout(()=>{h.pendingId===b&&h.fallback(f)},g):g===0&&h.fallback(f)}}function od(t,e,n,s,i,r,o,a,l,c,u=!1){const{p:h,m:d,um:f,n:m,o:{parentNode:T,remove:P}}=c,v=t.props?qa(t.props.timeout):void 0,g={vnode:t,parent:e,parentComponent:n,isSVG:o,container:s,hiddenContainer:i,anchor:r,deps:0,pendingId:0,timeout:typeof v=="number"?v:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(b=!1){const{vnode:S,activeBranch:w,pendingBranch:A,pendingId:I,effects:E,parentComponent:N,container:O}=g;if(g.isHydrating)g.isHydrating=!1;else if(!b){const J=w&&A.transition&&A.transition.mode==="out-in";J&&(w.transition.afterLeave=()=>{I===g.pendingId&&d(A,O,$,0)});let{anchor:$}=g;w&&($=m(w),f(w,N,g,!0)),J||d(A,O,$,0)}Bi(g,A),g.pendingBranch=null,g.isInFallback=!1;let V=g.parent,L=!1;for(;V;){if(V.pendingBranch){V.effects.push(...E),L=!0;break}V=V.parent}L||id(E),g.effects=[],ho(S,"onResolve")},fallback(b){if(!g.pendingBranch)return;const{vnode:S,activeBranch:w,parentComponent:A,container:I,isSVG:E}=g;ho(S,"onFallback");const N=m(w),O=()=>{g.isInFallback&&(h(null,b,I,N,A,null,E,a,l),Bi(g,b))},V=b.transition&&b.transition.mode==="out-in";V&&(w.transition.afterLeave=O),g.isInFallback=!0,f(w,A,null,!0),V||O()},move(b,S,w){g.activeBranch&&d(g.activeBranch,b,S,w),g.container=b},next(){return g.activeBranch&&m(g.activeBranch)},registerDep(b,S){const w=!!g.pendingBranch;w&&g.deps++;const A=b.vnode.el;b.asyncDep.catch(I=>{_i(I,b,0)}).then(I=>{if(b.isUnmounted||g.isUnmounted||g.pendingId!==b.suspenseId)return;b.asyncResolved=!0;const{vnode:E}=b;Hu(b,I,!1),A&&(E.el=A);const N=!A&&b.subTree.el;S(b,E,T(A||b.subTree.el),A?null:m(b.subTree),g,o,l),N&&P(N),rd(b,E.el),w&&--g.deps===0&&g.resolve()})},unmount(b,S){g.isUnmounted=!0,g.activeBranch&&f(g.activeBranch,n,b,S),g.pendingBranch&&f(g.pendingBranch,n,b,S)}};return g}function pC(t,e,n,s,i,r,o,a,l){const c=e.suspense=od(e,s,n,t.parentNode,document.createElement("div"),null,i,r,o,a,!0),u=l(t,c.pendingBranch=e.ssContent,n,c,r,o);return c.deps===0&&c.resolve(),u}function gC(t){const{shapeFlag:e,children:n}=t,s=e&32;t.ssContent=Tp(s?n.default:n),t.ssFallback=s?Tp(n.fallback):ee(vt)}function Tp(t){let e;if(fe(t)){const n=ai&&t._c;n&&(t._d=!1,re()),t=t(),n&&(t._d=!0,e=Ot,tv())}return te(t)&&(t=oC(t)),t=Vt(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function k_(t,e){e&&e.pendingBranch?te(t)?e.effects.push(...t):e.effects.push(t):id(t)}function Bi(t,e){t.activeBranch=e;const{vnode:n,parentComponent:s}=t,i=n.el=e.el;s&&s.subTree===n&&(s.vnode.el=i,rd(s,i))}function Xs(t,e){if(Ye){let n=Ye.provides;const s=Ye.parent&&Ye.parent.provides;s===n&&(n=Ye.provides=Object.create(s)),n[t]=e}}function Dt(t,e,n=!1){const s=Ye||ht;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&fe(e)?e.call(s.proxy):e}}function ad(t,e){return Uo(t,null,e)}function O_(t,e){return Uo(t,null,{flush:"post"})}function mC(t,e){return Uo(t,null,{flush:"sync"})}const Ea={};function Ze(t,e,n){return Uo(t,e,n)}function Uo(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=Pe){const a=Yh()===(Ye==null?void 0:Ye.scope)?Ye:null;let l,c=!1,u=!1;if(De(t)?(l=()=>t.value,c=oo(t)):En(t)?(l=()=>t,s=!0):te(t)?(u=!0,c=t.some(b=>En(b)||oo(b)),l=()=>t.map(b=>{if(De(b))return b.value;if(En(b))return Ws(b);if(fe(b))return Ln(b,a,2)})):fe(t)?e?l=()=>Ln(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),Wt(t,a,3,[d])}:l=cn,e&&s){const b=l;l=()=>Ws(b())}let h,d=b=>{h=v.onStop=()=>{Ln(b,a,4)}},f;if(Xi)if(d=cn,e?n&&Wt(e,a,3,[l(),u?[]:void 0,d]):l(),i==="sync"){const b=fv();f=b.__watcherHandles||(b.__watcherHandles=[])}else return cn;let m=u?new Array(t.length).fill(Ea):Ea;const T=()=>{if(v.active)if(e){const b=v.run();(s||c||(u?b.some((S,w)=>Gi(S,m[w])):Gi(b,m)))&&(h&&h(),Wt(e,a,3,[b,m===Ea?void 0:u&&m[0]===Ea?[]:m,d]),m=b)}else v.run()};T.allowRecurse=!!e;let P;i==="sync"?P=T:i==="post"?P=()=>lt(T,a&&a.suspense):(T.pre=!0,a&&(T.id=a.uid),P=()=>jl(T));const v=new Lo(l,P);e?n?T():m=v.run():i==="post"?lt(v.run.bind(v),a&&a.suspense):v.run();const g=()=>{v.stop(),a&&a.scope&&Wh(a.scope.effects,v)};return f&&f.push(g),g}function _C(t,e,n){const s=this.proxy,i=ze(t)?t.includes(".")?P_(s,t):()=>s[t]:t.bind(s,s);let r;fe(e)?r=e:(r=e.handler,n=e);const o=Ye;As(this);const a=Uo(i,r.bind(s),n);return o?As(o):_s(),a}function P_(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Ws(t,e){if(!Me(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),De(t))Ws(t.value,e);else if(te(t))for(let n=0;n<t.length;n++)Ws(t[n],e);else if(mi(t)||Fi(t))t.forEach(n=>{Ws(n,e)});else if(s_(t))for(const n in t)Ws(t[n],e);return t}function ld(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return fn(()=>{t.isMounted=!0}),Ns(()=>{t.isUnmounting=!0}),t}const Yt=[Function,Array],vC={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Yt,onEnter:Yt,onAfterEnter:Yt,onEnterCancelled:Yt,onBeforeLeave:Yt,onLeave:Yt,onAfterLeave:Yt,onLeaveCancelled:Yt,onBeforeAppear:Yt,onAppear:Yt,onAfterAppear:Yt,onAppearCancelled:Yt},setup(t,{slots:e}){const n=en(),s=ld();let i;return()=>{const r=e.default&&zl(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const T of r)if(T.type!==vt){o=T;break}}const a=Ee(t),{mode:l}=a;if(s.isLeaving)return Wc(o);const c=Ip(o);if(!c)return Wc(o);const u=Yi(c,a,s,n);ri(c,u);const h=n.subTree,d=h&&Ip(h);let f=!1;const{getTransitionKey:m}=c.type;if(m){const T=m();i===void 0?i=T:T!==i&&(i=T,f=!0)}if(d&&d.type!==vt&&(!sn(c,d)||f)){const T=Yi(d,a,s,n);if(ri(d,T),l==="out-in")return s.isLeaving=!0,T.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},Wc(o);l==="in-out"&&c.type!==vt&&(T.delayLeave=(P,v,g)=>{const b=x_(s,d);b[String(d.key)]=d,P._leaveCb=()=>{v(),P._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=g})}return o}}},cd=vC;function x_(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Yi(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:f,onLeaveCancelled:m,onBeforeAppear:T,onAppear:P,onAfterAppear:v,onAppearCancelled:g}=e,b=String(t.key),S=x_(n,t),w=(E,N)=>{E&&Wt(E,s,9,N)},A=(E,N)=>{const O=N[1];w(E,N),te(E)?E.every(V=>V.length<=1)&&O():E.length<=1&&O()},I={mode:r,persisted:o,beforeEnter(E){let N=a;if(!n.isMounted)if(i)N=T||a;else return;E._leaveCb&&E._leaveCb(!0);const O=S[b];O&&sn(t,O)&&O.el._leaveCb&&O.el._leaveCb(),w(N,[E])},enter(E){let N=l,O=c,V=u;if(!n.isMounted)if(i)N=P||l,O=v||c,V=g||u;else return;let L=!1;const J=E._enterCb=$=>{L||(L=!0,$?w(V,[E]):w(O,[E]),I.delayedLeave&&I.delayedLeave(),E._enterCb=void 0)};N?A(N,[E,J]):J()},leave(E,N){const O=String(t.key);if(E._enterCb&&E._enterCb(!0),n.isUnmounting)return N();w(h,[E]);let V=!1;const L=E._leaveCb=J=>{V||(V=!0,N(),J?w(m,[E]):w(f,[E]),E._leaveCb=void 0,S[O]===t&&delete S[O])};S[O]=t,d?A(d,[E,L]):L()},clone(E){return Yi(E,e,n,s)}};return I}function Wc(t){if(Bo(t))return t=Cn(t),t.children=null,t}function Ip(t){return Bo(t)?t.children?t.children[0]:void 0:t}function ri(t,e){t.shapeFlag&6&&t.component?ri(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function zl(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===je?(o.patchFlag&128&&i++,s=s.concat(zl(o.children,e,a))):(e||o.type!==vt)&&s.push(a!=null?Cn(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function Ie(t){return fe(t)?{setup:t,name:t.name}:t}const Qs=t=>!!t.type.__asyncLoader;function yC(t){fe(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:s,delay:i=200,timeout:r,suspensible:o=!0,onError:a}=t;let l=null,c,u=0;const h=()=>(u++,l=null,d()),d=()=>{let f;return l||(f=l=e().catch(m=>{if(m=m instanceof Error?m:new Error(String(m)),a)return new Promise((T,P)=>{a(m,()=>T(h()),()=>P(m),u+1)});throw m}).then(m=>f!==l&&l?l:(m&&(m.__esModule||m[Symbol.toStringTag]==="Module")&&(m=m.default),c=m,m)))};return Ie({name:"AsyncComponentWrapper",__asyncLoader:d,get __asyncResolved(){return c},setup(){const f=Ye;if(c)return()=>zc(c,f);const m=g=>{l=null,_i(g,f,13,!s)};if(o&&f.suspense||Xi)return d().then(g=>()=>zc(g,f)).catch(g=>(m(g),()=>s?ee(s,{error:g}):null));const T=Be(!1),P=Be(),v=Be(!!i);return i&&setTimeout(()=>{v.value=!1},i),r!=null&&setTimeout(()=>{if(!T.value&&!P.value){const g=new Error(`Async component timed out after ${r}ms.`);m(g),P.value=g}},r),d().then(()=>{T.value=!0,f.parent&&Bo(f.parent.vnode)&&jl(f.parent.update)}).catch(g=>{m(g),P.value=g}),()=>{if(T.value&&c)return zc(c,f);if(P.value&&s)return ee(s,{error:P.value});if(n&&!v.value)return ee(n)}}})}function zc(t,e){const{ref:n,props:s,children:i,ce:r}=e.vnode,o=ee(t,s,i);return o.ref=n,o.ce=r,delete e.vnode.ce,o}const Bo=t=>t.type.__isKeepAlive,EC={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=en(),s=n.ctx;if(!s.renderer)return()=>{const g=e.default&&e.default();return g&&g.length===1?g[0]:g};const i=new Map,r=new Set;let o=null;const a=n.suspense,{renderer:{p:l,m:c,um:u,o:{createElement:h}}}=s,d=h("div");s.activate=(g,b,S,w,A)=>{const I=g.component;c(g,b,S,0,a),l(I.vnode,g,b,S,I,a,w,g.slotScopeIds,A),lt(()=>{I.isDeactivated=!1,I.a&&Li(I.a);const E=g.props&&g.props.onVnodeMounted;E&&Rt(E,I.parent,g)},a)},s.deactivate=g=>{const b=g.component;c(g,d,null,1,a),lt(()=>{b.da&&Li(b.da);const S=g.props&&g.props.onVnodeUnmounted;S&&Rt(S,b.parent,g),b.isDeactivated=!0},a)};function f(g){qc(g),u(g,n,a,!0)}function m(g){i.forEach((b,S)=>{const w=zu(b.type);w&&(!g||!g(w))&&T(S)})}function T(g){const b=i.get(g);!o||!sn(b,o)?f(b):o&&qc(o),i.delete(g),r.delete(g)}Ze(()=>[t.include,t.exclude],([g,b])=>{g&&m(S=>Fr(g,S)),b&&m(S=>!Fr(b,S))},{flush:"post",deep:!0});let P=null;const v=()=>{P!=null&&i.set(P,Kc(n.subTree))};return fn(v),Kl(v),Ns(()=>{i.forEach(g=>{const{subTree:b,suspense:S}=n,w=Kc(b);if(g.type===w.type&&g.key===w.key){qc(w);const A=w.component.da;A&&lt(A,S);return}f(g)})}),()=>{if(P=null,!e.default)return null;const g=e.default(),b=g[0];if(g.length>1)return o=null,g;if(!Is(b)||!(b.shapeFlag&4)&&!(b.shapeFlag&128))return o=null,b;let S=Kc(b);const w=S.type,A=zu(Qs(S)?S.type.__asyncResolved||{}:w),{include:I,exclude:E,max:N}=t;if(I&&(!A||!Fr(I,A))||E&&A&&Fr(E,A))return o=S,b;const O=S.key==null?w:S.key,V=i.get(O);return S.el&&(S=Cn(S),b.shapeFlag&128&&(b.ssContent=S)),P=O,V?(S.el=V.el,S.component=V.component,S.transition&&ri(S,S.transition),S.shapeFlag|=512,r.delete(O),r.add(O)):(r.add(O),N&&r.size>parseInt(N,10)&&T(r.values().next().value)),S.shapeFlag|=256,o=S,R_(b.type)?b:S}}},bC=EC;function Fr(t,e){return te(t)?t.some(n=>Fr(n,e)):ze(t)?t.split(",").includes(e):lw(t)?t.test(e):!1}function N_(t,e){M_(t,"a",e)}function D_(t,e){M_(t,"da",e)}function M_(t,e,n=Ye){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(ql(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Bo(i.parent.vnode)&&wC(s,e,n,i),i=i.parent}}function wC(t,e,n,s){const i=ql(e,t,s,!0);Gl(()=>{Wh(s[e],i)},n)}function qc(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function Kc(t){return t.shapeFlag&128?t.ssContent:t}function ql(t,e,n=Ye,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;lr(),As(n);const a=Wt(e,n,t,o);return _s(),cr(),a});return s?i.unshift(r):i.push(r),r}}const Kn=t=>(e,n=Ye)=>(!Xi||t==="sp")&&ql(t,(...s)=>e(...s),n),F_=Kn("bm"),fn=Kn("m"),L_=Kn("bu"),Kl=Kn("u"),Ns=Kn("bum"),Gl=Kn("um"),U_=Kn("sp"),B_=Kn("rtg"),V_=Kn("rtc");function $_(t,e=Ye){ql("ec",t,e)}function Gn(t,e){const n=ht;if(n===null)return t;const s=Jl(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=Pe]=e[r];o&&(fe(o)&&(o={mounted:o,updated:o}),o.deep&&Ws(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function gn(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(lr(),Wt(l,n,8,[t.el,a,t,e]),cr())}}const ud="components",CC="directives";function fo(t,e){return hd(ud,t,!0,e)||t}const j_=Symbol();function Yl(t){return ze(t)?hd(ud,t,!1)||t:t||j_}function TC(t){return hd(CC,t)}function hd(t,e,n=!0,s=!1){const i=ht||Ye;if(i){const r=i.type;if(t===ud){const a=zu(r,!1);if(a&&(a===e||a===Nt(e)||a===Fo(Nt(e))))return r}const o=Ap(i[t]||r[t],e)||Ap(i.appContext[t],e);return!o&&s?r:o}}function Ap(t,e){return t&&(t[e]||t[Nt(e)]||t[Fo(Nt(e))])}function dr(t,e,n,s){let i;const r=n&&n[s];if(te(t)||ze(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(Me(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}function IC(t,e){for(let n=0;n<e.length;n++){const s=e[n];if(te(s))for(let i=0;i<s.length;i++)t[s[i].name]=s[i].fn;else s&&(t[s.name]=s.key?(...i)=>{const r=s.fn(...i);return r&&(r.key=s.key),r}:s.fn)}return t}function Xl(t,e,n={},s,i){if(ht.isCE||ht.parent&&Qs(ht.parent)&&ht.parent.isCE)return e!=="default"&&(n.name=e),ee("slot",n,s&&s());let r=t[e];r&&r._c&&(r._d=!1),re();const o=r&&H_(r(n)),a=Qt(je,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function H_(t){return t.some(e=>Is(e)?!(e.type===vt||e.type===je&&!H_(e.children)):!0)?t:null}function AC(t,e){const n={};for(const s in t)n[e&&/[A-Z]/.test(s)?`on:${s}`:jr(s)]=t[s];return n}const Fu=t=>t?av(t)?Jl(t)||t.proxy:Fu(t.parent):null,Hr=Qe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Fu(t.parent),$root:t=>Fu(t.root),$emit:t=>t.emit,$options:t=>dd(t),$forceUpdate:t=>t.f||(t.f=()=>jl(t.update)),$nextTick:t=>t.n||(t.n=vn.bind(t.proxy)),$watch:t=>_C.bind(t)}),Gc=(t,e)=>t!==Pe&&!t.__isScriptSetup&&Te(t,e),Lu={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Gc(s,e))return o[e]=1,s[e];if(i!==Pe&&Te(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&Te(c,e))return o[e]=3,r[e];if(n!==Pe&&Te(n,e))return o[e]=4,n[e];Uu&&(o[e]=0)}}const u=Hr[e];let h,d;if(u)return e==="$attrs"&&Ft(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Pe&&Te(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,Te(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Gc(i,e)?(i[e]=n,!0):s!==Pe&&Te(s,e)?(s[e]=n,!0):Te(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==Pe&&Te(t,o)||Gc(e,o)||(a=r[0])&&Te(a,o)||Te(s,o)||Te(Hr,o)||Te(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Te(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},SC=Qe({},Lu,{get(t,e){if(e!==Symbol.unscopables)return Lu.get(t,e,t)},has(t,e){return e[0]!=="_"&&!Xb(e)}});let Uu=!0;function RC(t){const e=dd(t),n=t.proxy,s=t.ctx;Uu=!1,e.beforeCreate&&Sp(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:m,activated:T,deactivated:P,beforeDestroy:v,beforeUnmount:g,destroyed:b,unmounted:S,render:w,renderTracked:A,renderTriggered:I,errorCaptured:E,serverPrefetch:N,expose:O,inheritAttrs:V,components:L,directives:J,filters:$}=e;if(c&&kC(c,s,null,t.appContext.config.unwrapInjectedRef),o)for(const Z in o){const ae=o[Z];fe(ae)&&(s[Z]=ae.bind(n))}if(i){const Z=i.call(n,n);Me(Z)&&(t.data=In(Z))}if(Uu=!0,r)for(const Z in r){const ae=r[Z],ve=fe(ae)?ae.bind(n,n):fe(ae.get)?ae.get.bind(n,n):cn,Ge=!fe(ae)&&fe(ae.set)?ae.set.bind(n):cn,Le=Ce({get:ve,set:Ge});Object.defineProperty(s,Z,{enumerable:!0,configurable:!0,get:()=>Le.value,set:be=>Le.value=be})}if(a)for(const Z in a)W_(a[Z],s,n,Z);if(l){const Z=fe(l)?l.call(n):l;Reflect.ownKeys(Z).forEach(ae=>{Xs(ae,Z[ae])})}u&&Sp(u,t,"c");function ne(Z,ae){te(ae)?ae.forEach(ve=>Z(ve.bind(n))):ae&&Z(ae.bind(n))}if(ne(F_,h),ne(fn,d),ne(L_,f),ne(Kl,m),ne(N_,T),ne(D_,P),ne($_,E),ne(V_,A),ne(B_,I),ne(Ns,g),ne(Gl,S),ne(U_,N),te(O))if(O.length){const Z=t.exposed||(t.exposed={});O.forEach(ae=>{Object.defineProperty(Z,ae,{get:()=>n[ae],set:ve=>n[ae]=ve})})}else t.exposed||(t.exposed={});w&&t.render===cn&&(t.render=w),V!=null&&(t.inheritAttrs=V),L&&(t.components=L),J&&(t.directives=J)}function kC(t,e,n=cn,s=!1){te(t)&&(t=Bu(t));for(const i in t){const r=t[i];let o;Me(r)?"default"in r?o=Dt(r.from||i,r.default,!0):o=Dt(r.from||i):o=Dt(r),De(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function Sp(t,e,n){Wt(te(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function W_(t,e,n,s){const i=s.includes(".")?P_(n,s):()=>n[s];if(ze(t)){const r=e[t];fe(r)&&Ze(i,r)}else if(fe(t))Ze(i,t.bind(n));else if(Me(t))if(te(t))t.forEach(r=>W_(r,e,n,s));else{const r=fe(t.handler)?t.handler.bind(n):e[t.handler];fe(r)&&Ze(i,r,t)}}function dd(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>Ya(l,c,o,!0)),Ya(l,e,o)),Me(e)&&r.set(e,l),l}function Ya(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Ya(t,r,n,!0),i&&i.forEach(o=>Ya(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=OC[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const OC={data:Rp,props:Us,emits:Us,methods:Us,computed:Us,beforeCreate:Tt,created:Tt,beforeMount:Tt,mounted:Tt,beforeUpdate:Tt,updated:Tt,beforeDestroy:Tt,beforeUnmount:Tt,destroyed:Tt,unmounted:Tt,activated:Tt,deactivated:Tt,errorCaptured:Tt,serverPrefetch:Tt,components:Us,directives:Us,watch:xC,provide:Rp,inject:PC};function Rp(t,e){return e?t?function(){return Qe(fe(t)?t.call(this,this):t,fe(e)?e.call(this,this):e)}:e:t}function PC(t,e){return Us(Bu(t),Bu(e))}function Bu(t){if(te(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Tt(t,e){return t?[...new Set([].concat(t,e))]:e}function Us(t,e){return t?Qe(Qe(Object.create(null),t),e):e}function xC(t,e){if(!t)return e;if(!e)return t;const n=Qe(Object.create(null),t);for(const s in e)n[s]=Tt(t[s],e[s]);return n}function NC(t,e,n,s=!1){const i={},r={};Wa(r,Ql,1),t.propsDefaults=Object.create(null),z_(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:v_(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function DC(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=Ee(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Hl(t.emitsOptions,d))continue;const f=e[d];if(l)if(Te(r,d))f!==r[d]&&(r[d]=f,c=!0);else{const m=Nt(d);i[m]=Vu(l,a,m,f,t,!1)}else f!==r[d]&&(r[d]=f,c=!0)}}}else{z_(t,e,i,r)&&(c=!0);let u;for(const h in a)(!e||!Te(e,h)&&((u=Xt(h))===h||!Te(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Vu(l,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!Te(e,h))&&(delete r[h],c=!0)}c&&Vn(t,"set","$attrs")}function z_(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if($r(l))continue;const c=e[l];let u;i&&Te(i,u=Nt(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Hl(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=Ee(n),c=a||Pe;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Vu(i,l,h,c[h],t,!Te(c,h))}}return o}function Vu(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=Te(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&fe(l)){const{propsDefaults:c}=i;n in c?s=c[n]:(As(i),s=c[n]=l.call(null,e),_s())}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===Xt(n))&&(s=!0))}return s}function q_(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!fe(t)){const u=h=>{l=!0;const[d,f]=q_(h,e,!0);Qe(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return Me(t)&&s.set(t,Mi),Mi;if(te(r))for(let u=0;u<r.length;u++){const h=Nt(r[u]);kp(h)&&(o[h]=Pe)}else if(r)for(const u in r){const h=Nt(u);if(kp(h)){const d=r[u],f=o[h]=te(d)||fe(d)?{type:d}:Object.assign({},d);if(f){const m=xp(Boolean,f.type),T=xp(String,f.type);f[0]=m>-1,f[1]=T<0||m<T,(m>-1||Te(f,"default"))&&a.push(h)}}}const c=[o,a];return Me(t)&&s.set(t,c),c}function kp(t){return t[0]!=="$"}function Op(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Pp(t,e){return Op(t)===Op(e)}function xp(t,e){return te(e)?e.findIndex(n=>Pp(n,t)):fe(e)&&Pp(e,t)?0:-1}const K_=t=>t[0]==="_"||t==="$stable",fd=t=>te(t)?t.map(Vt):[Vt(t)],MC=(t,e,n)=>{if(e._n)return e;const s=ft((...i)=>fd(e(...i)),n);return s._c=!1,s},G_=(t,e,n)=>{const s=t._ctx;for(const i in t){if(K_(i))continue;const r=t[i];if(fe(r))e[i]=MC(i,r,s);else if(r!=null){const o=fd(r);e[i]=()=>o}}},Y_=(t,e)=>{const n=fd(e);t.slots.default=()=>n},FC=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Ee(e),Wa(e,"_",n)):G_(e,t.slots={})}else t.slots={},e&&Y_(t,e);Wa(t.slots,Ql,1)},LC=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=Pe;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(Qe(i,e),!n&&a===1&&delete i._):(r=!e.$stable,G_(e,i)),o=e}else e&&(Y_(t,e),o={default:1});if(r)for(const a in i)!K_(a)&&!(a in o)&&delete i[a]};function X_(){return{app:null,config:{isNativeTag:rw,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let UC=0;function BC(t,e){return function(s,i=null){fe(s)||(s=Object.assign({},s)),i!=null&&!Me(i)&&(i=null);const r=X_(),o=new Set;let a=!1;const l=r.app={_uid:UC++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:gv,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&fe(c.install)?(o.add(c),c.install(l,...u)):fe(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const d=ee(s,i);return d.appContext=r,u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,Jl(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l}};return l}}function Xa(t,e,n,s,i=!1){if(te(t)){t.forEach((d,f)=>Xa(d,e&&(te(e)?e[f]:e),n,s,i));return}if(Qs(s)&&!i)return;const r=s.shapeFlag&4?Jl(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Pe?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(ze(c)?(u[c]=null,Te(h,c)&&(h[c]=null)):De(c)&&(c.value=null)),fe(l))Ln(l,a,12,[o,u]);else{const d=ze(l),f=De(l);if(d||f){const m=()=>{if(t.f){const T=d?Te(h,l)?h[l]:u[l]:l.value;i?te(T)&&Wh(T,r):te(T)?T.includes(r)||T.push(r):d?(u[l]=[r],Te(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,Te(h,l)&&(h[l]=o)):f&&(l.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,lt(m,n)):m()}}}let ts=!1;const ba=t=>/svg/.test(t.namespaceURI)&&t.tagName!=="foreignObject",wa=t=>t.nodeType===8;function VC(t){const{mt:e,p:n,o:{patchProp:s,createText:i,nextSibling:r,parentNode:o,remove:a,insert:l,createComment:c}}=t,u=(v,g)=>{if(!g.hasChildNodes()){n(null,v,g),Ga(),g._vnode=v;return}ts=!1,h(g.firstChild,v,null,null,null),Ga(),g._vnode=v,ts&&console.error("Hydration completed but contains mismatches.")},h=(v,g,b,S,w,A=!1)=>{const I=wa(v)&&v.data==="[",E=()=>T(v,g,b,S,w,I),{type:N,ref:O,shapeFlag:V,patchFlag:L}=g;let J=v.nodeType;g.el=v,L===-2&&(A=!1,g.dynamicChildren=null);let $=null;switch(N){case oi:J!==3?g.children===""?(l(g.el=i(""),o(v),v),$=v):$=E():(v.data!==g.children&&(ts=!0,v.data=g.children),$=r(v));break;case vt:J!==8||I?$=E():$=r(v);break;case Js:if(I&&(v=r(v),J=v.nodeType),J===1||J===3){$=v;const le=!g.children.length;for(let ne=0;ne<g.staticCount;ne++)le&&(g.children+=$.nodeType===1?$.outerHTML:$.data),ne===g.staticCount-1&&(g.anchor=$),$=r($);return I?r($):$}else E();break;case je:I?$=m(v,g,b,S,w,A):$=E();break;default:if(V&1)J!==1||g.type.toLowerCase()!==v.tagName.toLowerCase()?$=E():$=d(v,g,b,S,w,A);else if(V&6){g.slotScopeIds=w;const le=o(v);if(e(g,le,null,b,S,ba(le),A),$=I?P(v):r(v),$&&wa($)&&$.data==="teleport end"&&($=r($)),Qs(g)){let ne;I?(ne=ee(je),ne.anchor=$?$.previousSibling:le.lastChild):ne=v.nodeType===3?zt(""):ee("div"),ne.el=v,g.component.subTree=ne}}else V&64?J!==8?$=E():$=g.type.hydrate(v,g,b,S,w,A,t,f):V&128&&($=g.type.hydrate(v,g,b,S,ba(o(v)),w,A,t,h))}return O!=null&&Xa(O,null,S,g),$},d=(v,g,b,S,w,A)=>{A=A||!!g.dynamicChildren;const{type:I,props:E,patchFlag:N,shapeFlag:O,dirs:V}=g,L=I==="input"&&V||I==="option";if(L||N!==-1){if(V&&gn(g,null,b,"created"),E)if(L||!A||N&48)for(const $ in E)(L&&$.endsWith("value")||Mo($)&&!$r($))&&s(v,$,null,E[$],!1,void 0,b);else E.onClick&&s(v,"onClick",null,E.onClick,!1,void 0,b);let J;if((J=E&&E.onVnodeBeforeMount)&&Rt(J,b,g),V&&gn(g,null,b,"beforeMount"),((J=E&&E.onVnodeMounted)||V)&&k_(()=>{J&&Rt(J,b,g),V&&gn(g,null,b,"mounted")},S),O&16&&!(E&&(E.innerHTML||E.textContent))){let $=f(v.firstChild,g,v,b,S,w,A);for(;$;){ts=!0;const le=$;$=$.nextSibling,a(le)}}else O&8&&v.textContent!==g.children&&(ts=!0,v.textContent=g.children)}return v.nextSibling},f=(v,g,b,S,w,A,I)=>{I=I||!!g.dynamicChildren;const E=g.children,N=E.length;for(let O=0;O<N;O++){const V=I?E[O]:E[O]=Vt(E[O]);if(v)v=h(v,V,S,w,A,I);else{if(V.type===oi&&!V.children)continue;ts=!0,n(null,V,b,null,S,w,ba(b),A)}}return v},m=(v,g,b,S,w,A)=>{const{slotScopeIds:I}=g;I&&(w=w?w.concat(I):I);const E=o(v),N=f(r(v),g,E,b,S,w,A);return N&&wa(N)&&N.data==="]"?r(g.anchor=N):(ts=!0,l(g.anchor=c("]"),E,N),N)},T=(v,g,b,S,w,A)=>{if(ts=!0,g.el=null,A){const N=P(v);for(;;){const O=r(v);if(O&&O!==N)a(O);else break}}const I=r(v),E=o(v);return a(v),n(null,g,E,I,b,S,ba(E),w),I},P=v=>{let g=0;for(;v;)if(v=r(v),v&&wa(v)&&(v.data==="["&&g++,v.data==="]")){if(g===0)return r(v);g--}return v};return[u,h]}const lt=k_;function Q_(t){return Z_(t)}function J_(t){return Z_(t,VC)}function Z_(t,e){const n=dw();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=cn,insertStaticContent:m}=t,T=(p,y,x,D=null,U=null,z=null,Y=!1,j=null,q=!!y.dynamicChildren)=>{if(p===y)return;p&&!sn(p,y)&&(D=k(p),be(p,U,z,!0),p=null),y.patchFlag===-2&&(q=!1,y.dynamicChildren=null);const{type:_,ref:R,shapeFlag:F}=y;switch(_){case oi:P(p,y,x,D);break;case vt:v(p,y,x,D);break;case Js:p==null&&g(y,x,D,Y);break;case je:L(p,y,x,D,U,z,Y,j,q);break;default:F&1?w(p,y,x,D,U,z,Y,j,q):F&6?J(p,y,x,D,U,z,Y,j,q):(F&64||F&128)&&_.process(p,y,x,D,U,z,Y,j,q,oe)}R!=null&&U&&Xa(R,p&&p.ref,z,y||p,!y)},P=(p,y,x,D)=>{if(p==null)s(y.el=a(y.children),x,D);else{const U=y.el=p.el;y.children!==p.children&&c(U,y.children)}},v=(p,y,x,D)=>{p==null?s(y.el=l(y.children||""),x,D):y.el=p.el},g=(p,y,x,D)=>{[p.el,p.anchor]=m(p.children,y,x,D,p.el,p.anchor)},b=({el:p,anchor:y},x,D)=>{let U;for(;p&&p!==y;)U=d(p),s(p,x,D),p=U;s(y,x,D)},S=({el:p,anchor:y})=>{let x;for(;p&&p!==y;)x=d(p),i(p),p=x;i(y)},w=(p,y,x,D,U,z,Y,j,q)=>{Y=Y||y.type==="svg",p==null?A(y,x,D,U,z,Y,j,q):N(p,y,U,z,Y,j,q)},A=(p,y,x,D,U,z,Y,j)=>{let q,_;const{type:R,props:F,shapeFlag:B,transition:X,dirs:Q}=p;if(q=p.el=o(p.type,z,F&&F.is,F),B&8?u(q,p.children):B&16&&E(p.children,q,null,D,U,z&&R!=="foreignObject",Y,j),Q&&gn(p,null,D,"created"),I(q,p,p.scopeId,Y,D),F){for(const de in F)de!=="value"&&!$r(de)&&r(q,de,null,F[de],z,p.children,D,U,K);"value"in F&&r(q,"value",null,F.value),(_=F.onVnodeBeforeMount)&&Rt(_,D,p)}Q&&gn(p,null,D,"beforeMount");const se=(!U||U&&!U.pendingBranch)&&X&&!X.persisted;se&&X.beforeEnter(q),s(q,y,x),((_=F&&F.onVnodeMounted)||se||Q)&&lt(()=>{_&&Rt(_,D,p),se&&X.enter(q),Q&&gn(p,null,D,"mounted")},U)},I=(p,y,x,D,U)=>{if(x&&f(p,x),D)for(let z=0;z<D.length;z++)f(p,D[z]);if(U){let z=U.subTree;if(y===z){const Y=U.vnode;I(p,Y,Y.scopeId,Y.slotScopeIds,U.parent)}}},E=(p,y,x,D,U,z,Y,j,q=0)=>{for(let _=q;_<p.length;_++){const R=p[_]=j?ls(p[_]):Vt(p[_]);T(null,R,y,x,D,U,z,Y,j)}},N=(p,y,x,D,U,z,Y)=>{const j=y.el=p.el;let{patchFlag:q,dynamicChildren:_,dirs:R}=y;q|=p.patchFlag&16;const F=p.props||Pe,B=y.props||Pe;let X;x&&Fs(x,!1),(X=B.onVnodeBeforeUpdate)&&Rt(X,x,y,p),R&&gn(y,p,x,"beforeUpdate"),x&&Fs(x,!0);const Q=U&&y.type!=="foreignObject";if(_?O(p.dynamicChildren,_,j,x,D,Q,z):Y||ae(p,y,j,null,x,D,Q,z,!1),q>0){if(q&16)V(j,y,F,B,x,D,U);else if(q&2&&F.class!==B.class&&r(j,"class",null,B.class,U),q&4&&r(j,"style",F.style,B.style,U),q&8){const se=y.dynamicProps;for(let de=0;de<se.length;de++){const Se=se[de],Ve=F[Se],Jn=B[Se];(Jn!==Ve||Se==="value")&&r(j,Se,Ve,Jn,U,p.children,x,D,K)}}q&1&&p.children!==y.children&&u(j,y.children)}else!Y&&_==null&&V(j,y,F,B,x,D,U);((X=B.onVnodeUpdated)||R)&&lt(()=>{X&&Rt(X,x,y,p),R&&gn(y,p,x,"updated")},D)},O=(p,y,x,D,U,z,Y)=>{for(let j=0;j<y.length;j++){const q=p[j],_=y[j],R=q.el&&(q.type===je||!sn(q,_)||q.shapeFlag&70)?h(q.el):x;T(q,_,R,null,D,U,z,Y,!0)}},V=(p,y,x,D,U,z,Y)=>{if(x!==D){if(x!==Pe)for(const j in x)!$r(j)&&!(j in D)&&r(p,j,x[j],null,Y,y.children,U,z,K);for(const j in D){if($r(j))continue;const q=D[j],_=x[j];q!==_&&j!=="value"&&r(p,j,_,q,Y,y.children,U,z,K)}"value"in D&&r(p,"value",x.value,D.value)}},L=(p,y,x,D,U,z,Y,j,q)=>{const _=y.el=p?p.el:a(""),R=y.anchor=p?p.anchor:a("");let{patchFlag:F,dynamicChildren:B,slotScopeIds:X}=y;X&&(j=j?j.concat(X):X),p==null?(s(_,x,D),s(R,x,D),E(y.children,x,R,U,z,Y,j,q)):F>0&&F&64&&B&&p.dynamicChildren?(O(p.dynamicChildren,B,x,U,z,Y,j),(y.key!=null||U&&y===U.subTree)&&pd(p,y,!0)):ae(p,y,x,R,U,z,Y,j,q)},J=(p,y,x,D,U,z,Y,j,q)=>{y.slotScopeIds=j,p==null?y.shapeFlag&512?U.ctx.activate(y,x,D,Y,q):$(y,x,D,U,z,Y,q):le(p,y,q)},$=(p,y,x,D,U,z,Y)=>{const j=p.component=ov(p,D,U);if(Bo(p)&&(j.ctx.renderer=oe),lv(j),j.asyncDep){if(U&&U.registerDep(j,ne),!p.el){const q=j.subTree=ee(vt);v(null,q,y,x)}return}ne(j,p,y,x,U,z,Y)},le=(p,y,x)=>{const D=y.component=p.component;if(cC(p,y,x))if(D.asyncDep&&!D.asyncResolved){Z(D,y,x);return}else D.next=y,nC(D.update),D.update();else y.el=p.el,D.vnode=y},ne=(p,y,x,D,U,z,Y)=>{const j=()=>{if(p.isMounted){let{next:R,bu:F,u:B,parent:X,vnode:Q}=p,se=R,de;Fs(p,!1),R?(R.el=Q.el,Z(p,R,Y)):R=Q,F&&Li(F),(de=R.props&&R.props.onVnodeBeforeUpdate)&&Rt(de,X,R,Q),Fs(p,!0);const Se=Ma(p),Ve=p.subTree;p.subTree=Se,T(Ve,Se,h(Ve.el),k(Ve),p,U,z),R.el=Se.el,se===null&&rd(p,Se.el),B&&lt(B,U),(de=R.props&&R.props.onVnodeUpdated)&&lt(()=>Rt(de,X,R,Q),U)}else{let R;const{el:F,props:B}=y,{bm:X,m:Q,parent:se}=p,de=Qs(y);if(Fs(p,!1),X&&Li(X),!de&&(R=B&&B.onVnodeBeforeMount)&&Rt(R,se,y),Fs(p,!0),F&&he){const Se=()=>{p.subTree=Ma(p),he(F,p.subTree,p,U,null)};de?y.type.__asyncLoader().then(()=>!p.isUnmounted&&Se()):Se()}else{const Se=p.subTree=Ma(p);T(null,Se,x,D,p,U,z),y.el=Se.el}if(Q&&lt(Q,U),!de&&(R=B&&B.onVnodeMounted)){const Se=y;lt(()=>Rt(R,se,Se),U)}(y.shapeFlag&256||se&&Qs(se.vnode)&&se.vnode.shapeFlag&256)&&p.a&&lt(p.a,U),p.isMounted=!0,y=x=D=null}},q=p.effect=new Lo(j,()=>jl(_),p.scope),_=p.update=()=>q.run();_.id=p.uid,Fs(p,!0),_()},Z=(p,y,x)=>{y.component=p;const D=p.vnode.props;p.vnode=y,p.next=null,DC(p,y.props,D,x),LC(p,y.children,x),lr(),wp(),cr()},ae=(p,y,x,D,U,z,Y,j,q=!1)=>{const _=p&&p.children,R=p?p.shapeFlag:0,F=y.children,{patchFlag:B,shapeFlag:X}=y;if(B>0){if(B&128){Ge(_,F,x,D,U,z,Y,j,q);return}else if(B&256){ve(_,F,x,D,U,z,Y,j,q);return}}X&8?(R&16&&K(_,U,z),F!==_&&u(x,F)):R&16?X&16?Ge(_,F,x,D,U,z,Y,j,q):K(_,U,z,!0):(R&8&&u(x,""),X&16&&E(F,x,D,U,z,Y,j,q))},ve=(p,y,x,D,U,z,Y,j,q)=>{p=p||Mi,y=y||Mi;const _=p.length,R=y.length,F=Math.min(_,R);let B;for(B=0;B<F;B++){const X=y[B]=q?ls(y[B]):Vt(y[B]);T(p[B],X,x,null,U,z,Y,j,q)}_>R?K(p,U,z,!0,!1,F):E(y,x,D,U,z,Y,j,q,F)},Ge=(p,y,x,D,U,z,Y,j,q)=>{let _=0;const R=y.length;let F=p.length-1,B=R-1;for(;_<=F&&_<=B;){const X=p[_],Q=y[_]=q?ls(y[_]):Vt(y[_]);if(sn(X,Q))T(X,Q,x,null,U,z,Y,j,q);else break;_++}for(;_<=F&&_<=B;){const X=p[F],Q=y[B]=q?ls(y[B]):Vt(y[B]);if(sn(X,Q))T(X,Q,x,null,U,z,Y,j,q);else break;F--,B--}if(_>F){if(_<=B){const X=B+1,Q=X<R?y[X].el:D;for(;_<=B;)T(null,y[_]=q?ls(y[_]):Vt(y[_]),x,Q,U,z,Y,j,q),_++}}else if(_>B)for(;_<=F;)be(p[_],U,z,!0),_++;else{const X=_,Q=_,se=new Map;for(_=Q;_<=B;_++){const Ut=y[_]=q?ls(y[_]):Vt(y[_]);Ut.key!=null&&se.set(Ut.key,_)}let de,Se=0;const Ve=B-Q+1;let Jn=!1,Zn=0;const Tr=new Array(Ve);for(_=0;_<Ve;_++)Tr[_]=0;for(_=X;_<=F;_++){const Ut=p[_];if(Se>=Ve){be(Ut,U,z,!0);continue}let pn;if(Ut.key!=null)pn=se.get(Ut.key);else for(de=Q;de<=B;de++)if(Tr[de-Q]===0&&sn(Ut,y[de])){pn=de;break}pn===void 0?be(Ut,U,z,!0):(Tr[pn-Q]=_+1,pn>=Zn?Zn=pn:Jn=!0,T(Ut,y[pn],x,null,U,z,Y,j,q),Se++)}const hp=Jn?$C(Tr):Mi;for(de=hp.length-1,_=Ve-1;_>=0;_--){const Ut=Q+_,pn=y[Ut],dp=Ut+1<R?y[Ut+1].el:D;Tr[_]===0?T(null,pn,x,dp,U,z,Y,j,q):Jn&&(de<0||_!==hp[de]?Le(pn,x,dp,2):de--)}}},Le=(p,y,x,D,U=null)=>{const{el:z,type:Y,transition:j,children:q,shapeFlag:_}=p;if(_&6){Le(p.component.subTree,y,x,D);return}if(_&128){p.suspense.move(y,x,D);return}if(_&64){Y.move(p,y,x,oe);return}if(Y===je){s(z,y,x);for(let F=0;F<q.length;F++)Le(q[F],y,x,D);s(p.anchor,y,x);return}if(Y===Js){b(p,y,x);return}if(D!==2&&_&1&&j)if(D===0)j.beforeEnter(z),s(z,y,x),lt(()=>j.enter(z),U);else{const{leave:F,delayLeave:B,afterLeave:X}=j,Q=()=>s(z,y,x),se=()=>{F(z,()=>{Q(),X&&X()})};B?B(z,Q,se):se()}else s(z,y,x)},be=(p,y,x,D=!1,U=!1)=>{const{type:z,props:Y,ref:j,children:q,dynamicChildren:_,shapeFlag:R,patchFlag:F,dirs:B}=p;if(j!=null&&Xa(j,null,x,p,!0),R&256){y.ctx.deactivate(p);return}const X=R&1&&B,Q=!Qs(p);let se;if(Q&&(se=Y&&Y.onVnodeBeforeUnmount)&&Rt(se,y,p),R&6)M(p.component,x,D);else{if(R&128){p.suspense.unmount(x,D);return}X&&gn(p,null,y,"beforeUnmount"),R&64?p.type.remove(p,y,x,U,oe,D):_&&(z!==je||F>0&&F&64)?K(_,y,x,!1,!0):(z===je&&F&384||!U&&R&16)&&K(q,y,x),D&&wt(p)}(Q&&(se=Y&&Y.onVnodeUnmounted)||X)&&lt(()=>{se&&Rt(se,y,p),X&&gn(p,null,y,"unmounted")},x)},wt=p=>{const{type:y,el:x,anchor:D,transition:U}=p;if(y===je){Gt(x,D);return}if(y===Js){S(p);return}const z=()=>{i(x),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(p.shapeFlag&1&&U&&!U.persisted){const{leave:Y,delayLeave:j}=U,q=()=>Y(x,z);j?j(p.el,z,q):q()}else z()},Gt=(p,y)=>{let x;for(;p!==y;)x=d(p),i(p),p=x;i(y)},M=(p,y,x)=>{const{bum:D,scope:U,update:z,subTree:Y,um:j}=p;D&&Li(D),U.stop(),z&&(z.active=!1,be(Y,p,y,x)),j&&lt(j,y),lt(()=>{p.isUnmounted=!0},y),y&&y.pendingBranch&&!y.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===y.pendingId&&(y.deps--,y.deps===0&&y.resolve())},K=(p,y,x,D=!1,U=!1,z=0)=>{for(let Y=z;Y<p.length;Y++)be(p[Y],y,x,D,U)},k=p=>p.shapeFlag&6?k(p.component.subTree):p.shapeFlag&128?p.suspense.next():d(p.anchor||p.el),W=(p,y,x)=>{p==null?y._vnode&&be(y._vnode,null,null,!0):T(y._vnode||null,p,y,null,null,null,x),wp(),Ga(),y._vnode=p},oe={p:T,um:be,m:Le,r:wt,mt:$,mc:E,pc:ae,pbc:O,n:k,o:t};let Oe,he;return e&&([Oe,he]=e(oe)),{render:W,hydrate:Oe,createApp:BC(W,Oe)}}function Fs({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function pd(t,e,n=!1){const s=t.children,i=e.children;if(te(s)&&te(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=ls(i[r]),a.el=o.el),n||pd(o,a)),a.type===oi&&(a.el=o.el)}}function $C(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const jC=t=>t.__isTeleport,Wr=t=>t&&(t.disabled||t.disabled===""),Np=t=>typeof SVGElement<"u"&&t instanceof SVGElement,$u=(t,e)=>{const n=t&&t.to;return ze(n)?e?e(n):null:n},HC={__isTeleport:!0,process(t,e,n,s,i,r,o,a,l,c){const{mc:u,pc:h,pbc:d,o:{insert:f,querySelector:m,createText:T,createComment:P}}=c,v=Wr(e.props);let{shapeFlag:g,children:b,dynamicChildren:S}=e;if(t==null){const w=e.el=T(""),A=e.anchor=T("");f(w,n,s),f(A,n,s);const I=e.target=$u(e.props,m),E=e.targetAnchor=T("");I&&(f(E,I),o=o||Np(I));const N=(O,V)=>{g&16&&u(b,O,V,i,r,o,a,l)};v?N(n,A):I&&N(I,E)}else{e.el=t.el;const w=e.anchor=t.anchor,A=e.target=t.target,I=e.targetAnchor=t.targetAnchor,E=Wr(t.props),N=E?n:A,O=E?w:I;if(o=o||Np(A),S?(d(t.dynamicChildren,S,N,i,r,o,a),pd(t,e,!0)):l||h(t,e,N,O,i,r,o,a,!1),v)E||Ca(e,n,w,c,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const V=e.target=$u(e.props,m);V&&Ca(e,V,null,c,0)}else E&&Ca(e,A,I,c,1)}ev(e)},remove(t,e,n,s,{um:i,o:{remove:r}},o){const{shapeFlag:a,children:l,anchor:c,targetAnchor:u,target:h,props:d}=t;if(h&&r(u),(o||!Wr(d))&&(r(c),a&16))for(let f=0;f<l.length;f++){const m=l[f];i(m,e,n,!0,!!m.dynamicChildren)}},move:Ca,hydrate:WC};function Ca(t,e,n,{o:{insert:s},m:i},r=2){r===0&&s(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=t,h=r===2;if(h&&s(o,e,n),(!h||Wr(u))&&l&16)for(let d=0;d<c.length;d++)i(c[d],e,n,2);h&&s(a,e,n)}function WC(t,e,n,s,i,r,{o:{nextSibling:o,parentNode:a,querySelector:l}},c){const u=e.target=$u(e.props,l);if(u){const h=u._lpa||u.firstChild;if(e.shapeFlag&16)if(Wr(e.props))e.anchor=c(o(t),e,a(t),n,s,i,r),e.targetAnchor=h;else{e.anchor=o(t);let d=h;for(;d;)if(d=o(d),d&&d.nodeType===8&&d.data==="teleport anchor"){e.targetAnchor=d,u._lpa=e.targetAnchor&&o(e.targetAnchor);break}c(h,e,u,n,s,i,r)}ev(e)}return e.anchor&&o(e.anchor)}const zC=HC;function ev(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const je=Symbol(void 0),oi=Symbol(void 0),vt=Symbol(void 0),Js=Symbol(void 0),zr=[];let Ot=null;function re(t=!1){zr.push(Ot=t?null:[])}function tv(){zr.pop(),Ot=zr[zr.length-1]||null}let ai=1;function ju(t){ai+=t}function nv(t){return t.dynamicChildren=ai>0?Ot||Mi:null,tv(),ai>0&&Ot&&Ot.push(t),t}function ge(t,e,n,s,i,r){return nv(G(t,e,n,s,i,r,!0))}function Qt(t,e,n,s,i){return nv(ee(t,e,n,s,i,!0))}function Is(t){return t?t.__v_isVNode===!0:!1}function sn(t,e){return t.type===e.type&&t.key===e.key}function qC(t){}const Ql="__vInternal",sv=({key:t})=>t??null,Fa=({ref:t,ref_key:e,ref_for:n})=>t!=null?ze(t)||De(t)||fe(t)?{i:ht,r:t,k:e,f:!!n}:t:null;function G(t,e=null,n=null,s=0,i=null,r=t===je?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&sv(e),ref:e&&Fa(e),scopeId:Wl,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:ht};return a?(gd(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=ze(n)?8:16),ai>0&&!o&&Ot&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Ot.push(l),l}const ee=KC;function KC(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===j_)&&(t=vt),Is(t)){const a=Cn(t,e,!0);return n&&gd(a,n),ai>0&&!r&&Ot&&(a.shapeFlag&6?Ot[Ot.indexOf(t)]=a:Ot.push(a)),a.patchFlag|=-2,a}if(tT(t)&&(t=t.__vccOpts),e){e=iv(e);let{class:a,style:l}=e;a&&!ze(a)&&(e.class=St(a)),Me(l)&&(Zh(l)&&!te(l)&&(l=Qe({},l)),e.style=Do(l))}const o=ze(t)?1:R_(t)?128:jC(t)?64:Me(t)?4:fe(t)?2:0;return G(t,e,n,s,i,o,r,!0)}function iv(t){return t?Zh(t)||Ql in t?Qe({},t):t:null}function Cn(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?rv(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&sv(a),ref:e&&e.ref?n&&i?te(i)?i.concat(Fa(e)):[i,Fa(e)]:Fa(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==je?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Cn(t.ssContent),ssFallback:t.ssFallback&&Cn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function zt(t=" ",e=0){return ee(oi,null,t,e)}function GC(t,e){const n=ee(Js,null,t);return n.staticCount=e,n}function rn(t="",e=!1){return e?(re(),Qt(vt,null,t)):ee(vt,null,t)}function Vt(t){return t==null||typeof t=="boolean"?ee(vt):te(t)?ee(je,null,t.slice()):typeof t=="object"?ls(t):ee(oi,null,String(t))}function ls(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Cn(t)}function gd(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(te(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),gd(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Ql in e)?e._ctx=ht:i===3&&ht&&(ht.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else fe(e)?(e={default:e,_ctx:ht},n=32):(e=String(e),s&64?(n=16,e=[zt(e)]):n=8);t.children=e,t.shapeFlag|=n}function rv(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=St([e.class,s.class]));else if(i==="style")e.style=Do([e.style,s.style]);else if(Mo(i)){const r=e[i],o=s[i];o&&r!==o&&!(te(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function Rt(t,e,n,s=null){Wt(t,e,7,[n,s])}const YC=X_();let XC=0;function ov(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||YC,r={uid:XC++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Kh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:q_(s,i),emitsOptions:S_(s,i),emit:null,emitted:null,propsDefaults:Pe,inheritAttrs:s.inheritAttrs,ctx:Pe,data:Pe,props:Pe,attrs:Pe,slots:Pe,refs:Pe,setupState:Pe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=iC.bind(null,r),t.ce&&t.ce(r),r}let Ye=null;const en=()=>Ye||ht,As=t=>{Ye=t,t.scope.on()},_s=()=>{Ye&&Ye.scope.off(),Ye=null};function av(t){return t.vnode.shapeFlag&4}let Xi=!1;function lv(t,e=!1){Xi=e;const{props:n,children:s}=t.vnode,i=av(t);NC(t,n,i,e),FC(t,s);const r=i?QC(t,e):void 0;return Xi=!1,r}function QC(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Ts(new Proxy(t.ctx,Lu));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?uv(t):null;As(t),lr();const r=Ln(s,t,0,[t.props,i]);if(cr(),_s(),zh(r)){if(r.then(_s,_s),e)return r.then(o=>{Hu(t,o,e)}).catch(o=>{_i(o,t,0)});t.asyncDep=r}else Hu(t,r,e)}else cv(t,e)}function Hu(t,e,n){fe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Me(e)&&(t.setupState=nd(e)),cv(t,n)}let Qa,Wu;function JC(t){Qa=t,Wu=e=>{e.render._rc&&(e.withProxy=new Proxy(e.ctx,SC))}}const ZC=()=>!Qa;function cv(t,e,n){const s=t.type;if(!t.render){if(!e&&Qa&&!s.render){const i=s.template||dd(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=Qe(Qe({isCustomElement:r,delimiters:a},o),l);s.render=Qa(i,c)}}t.render=s.render||cn,Wu&&Wu(t)}As(t),lr(),RC(t),cr(),_s()}function eT(t){return new Proxy(t.attrs,{get(e,n){return Ft(t,"get","$attrs"),e[n]}})}function uv(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=eT(t))},slots:t.slots,emit:t.emit,expose:e}}function Jl(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(nd(Ts(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Hr)return Hr[n](t)},has(e,n){return n in e||n in Hr}}))}function zu(t,e=!0){return fe(t)?t.displayName||t.name:t.name||e&&t.__name}function tT(t){return fe(t)&&"__vccOpts"in t}const Ce=(t,e)=>Qw(t,e,Xi);function nT(){return null}function sT(){return null}function iT(t){}function rT(t,e){return null}function oT(){return hv().slots}function aT(){return hv().attrs}function hv(){const t=en();return t.setupContext||(t.setupContext=uv(t))}function lT(t,e){const n=te(t)?t.reduce((s,i)=>(s[i]={},s),{}):t;for(const s in e){const i=n[s];i?te(i)||fe(i)?n[s]={type:i,default:e[s]}:i.default=e[s]:i===null&&(n[s]={default:e[s]})}return n}function cT(t,e){const n={};for(const s in t)e.includes(s)||Object.defineProperty(n,s,{enumerable:!0,get:()=>t[s]});return n}function uT(t){const e=en();let n=t();return _s(),zh(n)&&(n=n.catch(s=>{throw As(e),s})),[n,()=>As(e)]}function Ss(t,e,n){const s=arguments.length;return s===2?Me(e)&&!te(e)?Is(e)?ee(t,null,[e]):ee(t,e):ee(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Is(n)&&(n=[n]),ee(t,e,n))}const dv=Symbol(""),fv=()=>Dt(dv);function hT(){}function dT(t,e,n,s){const i=n[s];if(i&&pv(i,t))return i;const r=e();return r.memo=t.slice(),n[s]=r}function pv(t,e){const n=t.memo;if(n.length!=e.length)return!1;for(let s=0;s<n.length;s++)if(Gi(n[s],e[s]))return!1;return ai>0&&Ot&&Ot.push(t),!0}const gv="3.2.47",fT={createComponentInstance:ov,setupComponent:lv,renderComponentRoot:Ma,setCurrentRenderingInstance:uo,isVNode:Is,normalizeVNode:Vt},pT=fT,gT=null,mT=null,_T="http://www.w3.org/2000/svg",js=typeof document<"u"?document:null,Dp=js&&js.createElement("template"),vT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?js.createElementNS(_T,t):js.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>js.createTextNode(t),createComment:t=>js.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>js.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Dp.innerHTML=s?`<svg>${t}</svg>`:t;const a=Dp.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function yT(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function ET(t,e,n){const s=t.style,i=ze(n);if(n&&!i){if(e&&!ze(e))for(const r in e)n[r]==null&&qu(s,r,"");for(const r in n)qu(s,r,n[r])}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const Mp=/\s*!important$/;function qu(t,e,n){if(te(n))n.forEach(s=>qu(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=bT(t,e);Mp.test(n)?t.setProperty(Xt(s),n.replace(Mp,""),"important"):t[s]=n}}const Fp=["Webkit","Moz","ms"],Yc={};function bT(t,e){const n=Yc[e];if(n)return n;let s=Nt(e);if(s!=="filter"&&s in t)return Yc[e]=s;s=Fo(s);for(let i=0;i<Fp.length;i++){const r=Fp[i]+s;if(r in t)return Yc[e]=r}return e}const Lp="http://www.w3.org/1999/xlink";function wT(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Lp,e.slice(6,e.length)):t.setAttributeNS(Lp,e,n);else{const r=sw(e);n==null||r&&!e_(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function CT(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n??"";(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=e_(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function xn(t,e,n,s){t.addEventListener(e,n,s)}function TT(t,e,n,s){t.removeEventListener(e,n,s)}function IT(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=AT(e);if(s){const c=r[e]=kT(s,i);xn(t,a,c,l)}else o&&(TT(t,a,o,l),r[e]=void 0)}}const Up=/(?:Once|Passive|Capture)$/;function AT(t){let e;if(Up.test(t)){e={};let s;for(;s=t.match(Up);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Xt(t.slice(2)),e]}let Xc=0;const ST=Promise.resolve(),RT=()=>Xc||(ST.then(()=>Xc=0),Xc=Date.now());function kT(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Wt(OT(s,n.value),e,5,[s])};return n.value=t,n.attached=RT(),n}function OT(t,e){if(te(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Bp=/^on[a-z]/,PT=(t,e,n,s,i=!1,r,o,a,l)=>{e==="class"?yT(t,s,i):e==="style"?ET(t,n,s):Mo(e)?Hh(e)||IT(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):xT(t,e,s,i))?CT(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),wT(t,e,s,i))};function xT(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Bp.test(e)&&fe(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Bp.test(e)&&ze(n)?!1:e in t}function mv(t,e){const n=Ie(t);class s extends Zl{constructor(r){super(n,r,e)}}return s.def=n,s}const NT=t=>mv(t,Pv),DT=typeof HTMLElement<"u"?HTMLElement:class{};class Zl extends DT{constructor(e,n={},s){super(),this._def=e,this._props=n,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this.shadowRoot&&s?s(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,vn(()=>{this._connected||(Yu(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let s=0;s<this.attributes.length;s++)this._setAttr(this.attributes[s].name);new MutationObserver(s=>{for(const i of s)this._setAttr(i.attributeName)}).observe(this,{attributes:!0});const e=(s,i=!1)=>{const{props:r,styles:o}=s;let a;if(r&&!te(r))for(const l in r){const c=r[l];(c===Number||c&&c.type===Number)&&(l in this._props&&(this._props[l]=qa(this._props[l])),(a||(a=Object.create(null)))[Nt(l)]=!0)}this._numberProps=a,i&&this._resolveProps(s),this._applyStyles(o),this._update()},n=this._def.__asyncLoader;n?n().then(s=>e(s,!0)):e(this._def)}_resolveProps(e){const{props:n}=e,s=te(n)?n:Object.keys(n||{});for(const i of Object.keys(this))i[0]!=="_"&&s.includes(i)&&this._setProp(i,this[i],!0,!1);for(const i of s.map(Nt))Object.defineProperty(this,i,{get(){return this._getProp(i)},set(r){this._setProp(i,r)}})}_setAttr(e){let n=this.getAttribute(e);const s=Nt(e);this._numberProps&&this._numberProps[s]&&(n=qa(n)),this._setProp(s,n,!1)}_getProp(e){return this._props[e]}_setProp(e,n,s=!0,i=!0){n!==this._props[e]&&(this._props[e]=n,i&&this._instance&&this._update(),s&&(n===!0?this.setAttribute(Xt(e),""):typeof n=="string"||typeof n=="number"?this.setAttribute(Xt(e),n+""):n||this.removeAttribute(Xt(e))))}_update(){Yu(this._createVNode(),this.shadowRoot)}_createVNode(){const e=ee(this._def,Qe({},this._props));return this._instance||(e.ce=n=>{this._instance=n,n.isCE=!0;const s=(r,o)=>{this.dispatchEvent(new CustomEvent(r,{detail:o}))};n.emit=(r,...o)=>{s(r,o),Xt(r)!==r&&s(Xt(r),o)};let i=this;for(;i=i&&(i.parentNode||i.host);)if(i instanceof Zl){n.parent=i._instance,n.provides=i._instance.provides;break}}),e}_applyStyles(e){e&&e.forEach(n=>{const s=document.createElement("style");s.textContent=n,this.shadowRoot.appendChild(s)})}}function MT(t="$style"){{const e=en();if(!e)return Pe;const n=e.type.__cssModules;if(!n)return Pe;const s=n[t];return s||Pe}}function FT(t){const e=en();if(!e)return;const n=e.ut=(i=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(r=>Gu(r,i))},s=()=>{const i=t(e.proxy);Ku(e.subTree,i),n(i)};O_(s),fn(()=>{const i=new MutationObserver(s);i.observe(e.subTree.el.parentNode,{childList:!0}),Gl(()=>i.disconnect())})}function Ku(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{Ku(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)Gu(t.el,e);else if(t.type===je)t.children.forEach(n=>Ku(n,e));else if(t.type===Js){let{el:n,anchor:s}=t;for(;n&&(Gu(n,e),n!==s);)n=n.nextSibling}}function Gu(t,e){if(t.nodeType===1){const n=t.style;for(const s in e)n.setProperty(`--${s}`,e[s])}}const ns="transition",Ir="animation",md=(t,{slots:e})=>Ss(cd,vv(t),e);md.displayName="Transition";const _v={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},LT=md.props=Qe({},cd.props,_v),Ls=(t,e=[])=>{te(t)?t.forEach(n=>n(...e)):t&&t(...e)},Vp=t=>t?te(t)?t.some(e=>e.length>1):t.length>1:!1;function vv(t){const e={};for(const L in t)L in _v||(e[L]=t[L]);if(t.css===!1)return e;const{name:n="v",type:s,duration:i,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=t,m=UT(i),T=m&&m[0],P=m&&m[1],{onBeforeEnter:v,onEnter:g,onEnterCancelled:b,onLeave:S,onLeaveCancelled:w,onBeforeAppear:A=v,onAppear:I=g,onAppearCancelled:E=b}=e,N=(L,J,$)=>{rs(L,J?u:a),rs(L,J?c:o),$&&$()},O=(L,J)=>{L._isLeaving=!1,rs(L,h),rs(L,f),rs(L,d),J&&J()},V=L=>(J,$)=>{const le=L?I:g,ne=()=>N(J,L,$);Ls(le,[J,ne]),$p(()=>{rs(J,L?l:r),Rn(J,L?u:a),Vp(le)||jp(J,s,T,ne)})};return Qe(e,{onBeforeEnter(L){Ls(v,[L]),Rn(L,r),Rn(L,o)},onBeforeAppear(L){Ls(A,[L]),Rn(L,l),Rn(L,c)},onEnter:V(!1),onAppear:V(!0),onLeave(L,J){L._isLeaving=!0;const $=()=>O(L,J);Rn(L,h),Ev(),Rn(L,d),$p(()=>{L._isLeaving&&(rs(L,h),Rn(L,f),Vp(S)||jp(L,s,P,$))}),Ls(S,[L,$])},onEnterCancelled(L){N(L,!1),Ls(b,[L])},onAppearCancelled(L){N(L,!0),Ls(E,[L])},onLeaveCancelled(L){O(L),Ls(w,[L])}})}function UT(t){if(t==null)return null;if(Me(t))return[Qc(t.enter),Qc(t.leave)];{const e=Qc(t);return[e,e]}}function Qc(t){return qa(t)}function Rn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function rs(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function $p(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let BT=0;function jp(t,e,n,s){const i=t._endId=++BT,r=()=>{i===t._endId&&s()};if(n)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=yv(t,e);if(!o)return s();const c=o+"end";let u=0;const h=()=>{t.removeEventListener(c,d),r()},d=f=>{f.target===t&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),t.addEventListener(c,d)}function yv(t,e){const n=window.getComputedStyle(t),s=m=>(n[m]||"").split(", "),i=s(`${ns}Delay`),r=s(`${ns}Duration`),o=Hp(i,r),a=s(`${Ir}Delay`),l=s(`${Ir}Duration`),c=Hp(a,l);let u=null,h=0,d=0;e===ns?o>0&&(u=ns,h=o,d=r.length):e===Ir?c>0&&(u=Ir,h=c,d=l.length):(h=Math.max(o,c),u=h>0?o>c?ns:Ir:null,d=u?u===ns?r.length:l.length:0);const f=u===ns&&/\b(transform|all)(,|$)/.test(s(`${ns}Property`).toString());return{type:u,timeout:h,propCount:d,hasTransform:f}}function Hp(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>Wp(n)+Wp(t[s])))}function Wp(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function Ev(){return document.body.offsetHeight}const bv=new WeakMap,wv=new WeakMap,Cv={name:"TransitionGroup",props:Qe({},LT,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=en(),s=ld();let i,r;return Kl(()=>{if(!i.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!zT(i[0].el,n.vnode.el,o))return;i.forEach(jT),i.forEach(HT);const a=i.filter(WT);Ev(),a.forEach(l=>{const c=l.el,u=c.style;Rn(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const h=c._moveCb=d=>{d&&d.target!==c||(!d||/transform$/.test(d.propertyName))&&(c.removeEventListener("transitionend",h),c._moveCb=null,rs(c,o))};c.addEventListener("transitionend",h)})}),()=>{const o=Ee(t),a=vv(o);let l=o.tag||je;i=r,r=e.default?zl(e.default()):[];for(let c=0;c<r.length;c++){const u=r[c];u.key!=null&&ri(u,Yi(u,a,s,n))}if(i)for(let c=0;c<i.length;c++){const u=i[c];ri(u,Yi(u,a,s,n)),bv.set(u,u.el.getBoundingClientRect())}return ee(l,null,r)}}},VT=t=>delete t.mode;Cv.props;const $T=Cv;function jT(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function HT(t){wv.set(t,t.el.getBoundingClientRect())}function WT(t){const e=bv.get(t),n=wv.get(t),s=e.left-n.left,i=e.top-n.top;if(s||i){const r=t.el.style;return r.transform=r.webkitTransform=`translate(${s}px,${i}px)`,r.transitionDuration="0s",t}}function zT(t,e,n){const s=t.cloneNode();t._vtc&&t._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&s.classList.remove(a))}),n.split(/\s+/).forEach(o=>o&&s.classList.add(o)),s.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(s);const{hasTransform:r}=yv(s);return i.removeChild(s),r}const Rs=t=>{const e=t.props["onUpdate:modelValue"]||!1;return te(e)?n=>Li(e,n):e};function qT(t){t.target.composing=!0}function zp(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ja={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=Rs(i);const r=s||i.props&&i.props.type==="number";xn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=za(a)),t._assign(a)}),n&&xn(t,"change",()=>{t.value=t.value.trim()}),e||(xn(t,"compositionstart",qT),xn(t,"compositionend",zp),xn(t,"change",zp))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=Rs(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&za(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},ec={deep:!0,created(t,e,n){t._assign=Rs(n),xn(t,"change",()=>{const s=t._modelValue,i=Qi(t),r=t.checked,o=t._assign;if(te(s)){const a=Ml(s,i),l=a!==-1;if(r&&!l)o(s.concat(i));else if(!r&&l){const c=[...s];c.splice(a,1),o(c)}}else if(mi(s)){const a=new Set(s);r?a.add(i):a.delete(i),o(a)}else o(Iv(t,r))})},mounted:qp,beforeUpdate(t,e,n){t._assign=Rs(n),qp(t,e,n)}};function qp(t,{value:e,oldValue:n},s){t._modelValue=e,te(e)?t.checked=Ml(e,s.props.value)>-1:mi(e)?t.checked=e.has(s.props.value):e!==n&&(t.checked=ws(e,Iv(t,!0)))}const _d={created(t,{value:e},n){t.checked=ws(e,n.props.value),t._assign=Rs(n),xn(t,"change",()=>{t._assign(Qi(t))})},beforeUpdate(t,{value:e,oldValue:n},s){t._assign=Rs(s),e!==n&&(t.checked=ws(e,s.props.value))}},Tv={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const i=mi(e);xn(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?za(Qi(o)):Qi(o));t._assign(t.multiple?i?new Set(r):r:r[0])}),t._assign=Rs(s)},mounted(t,{value:e}){Kp(t,e)},beforeUpdate(t,e,n){t._assign=Rs(n)},updated(t,{value:e}){Kp(t,e)}};function Kp(t,e){const n=t.multiple;if(!(n&&!te(e)&&!mi(e))){for(let s=0,i=t.options.length;s<i;s++){const r=t.options[s],o=Qi(r);if(n)te(e)?r.selected=Ml(e,o)>-1:r.selected=e.has(o);else if(ws(Qi(r),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Qi(t){return"_value"in t?t._value:t.value}function Iv(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Av={created(t,e,n){Ta(t,e,n,null,"created")},mounted(t,e,n){Ta(t,e,n,null,"mounted")},beforeUpdate(t,e,n,s){Ta(t,e,n,s,"beforeUpdate")},updated(t,e,n,s){Ta(t,e,n,s,"updated")}};function Sv(t,e){switch(t){case"SELECT":return Tv;case"TEXTAREA":return Ja;default:switch(e){case"checkbox":return ec;case"radio":return _d;default:return Ja}}}function Ta(t,e,n,s,i){const o=Sv(t.tagName,n.props&&n.props.type)[i];o&&o(t,e,n,s)}function KT(){Ja.getSSRProps=({value:t})=>({value:t}),_d.getSSRProps=({value:t},e)=>{if(e.props&&ws(e.props.value,t))return{checked:!0}},ec.getSSRProps=({value:t},e)=>{if(te(t)){if(e.props&&Ml(t,e.props.value)>-1)return{checked:!0}}else if(mi(t)){if(e.props&&t.has(e.props.value))return{checked:!0}}else if(t)return{checked:!0}},Av.getSSRProps=(t,e)=>{if(typeof e.type!="string")return;const n=Sv(e.type.toUpperCase(),e.props&&e.props.type);if(n.getSSRProps)return n.getSSRProps(t,e)}}const GT=["ctrl","shift","alt","meta"],YT={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>GT.some(n=>t[`${n}Key`]&&!e.includes(n))},Vo=(t,e)=>(n,...s)=>{for(let i=0;i<e.length;i++){const r=YT[e[i]];if(r&&r(n,e))return}return t(n,...s)},XT={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},QT=(t,e)=>n=>{if(!("key"in n))return;const s=Xt(n.key);if(e.some(i=>i===s||XT[i]===s))return t(n)},Yn={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Ar(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),Ar(t,!0),s.enter(t)):s.leave(t,()=>{Ar(t,!1)}):Ar(t,e))},beforeUnmount(t,{value:e}){Ar(t,e)}};function Ar(t,e){t.style.display=e?t._vod:"none"}function JT(){Yn.getSSRProps=({value:t})=>{if(!t)return{style:{display:"none"}}}}const Rv=Qe({patchProp:PT},vT);let qr,Gp=!1;function kv(){return qr||(qr=Q_(Rv))}function Ov(){return qr=Gp?qr:J_(Rv),Gp=!0,qr}const Yu=(...t)=>{kv().render(...t)},Pv=(...t)=>{Ov().hydrate(...t)},xv=(...t)=>{const e=kv().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Nv(s);if(!i)return;const r=e._component;!fe(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e},ZT=(...t)=>{const e=Ov().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Nv(s);if(i)return n(i,!0,i instanceof SVGElement)},e};function Nv(t){return ze(t)?document.querySelector(t):t}let Yp=!1;const eI=()=>{Yp||(Yp=!0,KT(),JT())},tI=()=>{},nI=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:cd,Comment:vt,EffectScope:Kh,Fragment:je,KeepAlive:bC,ReactiveEffect:Lo,Static:Js,Suspense:hC,Teleport:zC,Text:oi,Transition:md,TransitionGroup:$T,VueElement:Zl,assertNumber:Zw,callWithAsyncErrorHandling:Wt,callWithErrorHandling:Ln,camelize:Nt,capitalize:Fo,cloneVNode:Cn,compatUtils:mT,compile:tI,computed:Ce,createApp:xv,createBlock:Qt,createCommentVNode:rn,createElementBlock:ge,createElementVNode:G,createHydrationRenderer:J_,createPropsRestProxy:cT,createRenderer:Q_,createSSRApp:ZT,createSlots:IC,createStaticVNode:GC,createTextVNode:zt,createVNode:ee,customRef:Gw,defineAsyncComponent:yC,defineComponent:Ie,defineCustomElement:mv,defineEmits:sT,defineExpose:iT,defineProps:nT,defineSSRCustomElement:NT,get devtools(){return Ri},effect:gw,effectScope:Gh,getCurrentInstance:en,getCurrentScope:Yh,getTransitionRawChildren:zl,guardReactiveProps:iv,h:Ss,handleError:_i,hydrate:Pv,initCustomFormatter:hT,initDirectivesForSSR:eI,inject:Dt,isMemoSame:pv,isProxy:Zh,isReactive:En,isReadonly:ii,isRef:De,isRuntimeOnly:ZC,isShallow:oo,isVNode:Is,markRaw:Ts,mergeDefaults:lT,mergeProps:rv,nextTick:vn,normalizeClass:St,normalizeProps:tw,normalizeStyle:Do,onActivated:N_,onBeforeMount:F_,onBeforeUnmount:Ns,onBeforeUpdate:L_,onDeactivated:D_,onErrorCaptured:$_,onMounted:fn,onRenderTracked:V_,onRenderTriggered:B_,onScopeDispose:r_,onServerPrefetch:U_,onUnmounted:Gl,onUpdated:Kl,openBlock:re,popScopeId:hr,provide:Xs,proxyRefs:nd,pushScopeId:ur,queuePostFlushCb:id,reactive:In,readonly:Jh,ref:Be,registerRuntimeCompiler:JC,render:Yu,renderList:dr,renderSlot:Xl,resolveComponent:fo,resolveDirective:TC,resolveDynamicComponent:Yl,resolveFilter:gT,resolveTransitionHooks:Yi,setBlockTracking:ju,setDevtoolsHook:A_,setTransitionHooks:ri,shallowReactive:v_,shallowReadonly:Hw,shallowRef:y_,ssrContextKey:dv,ssrUtils:pT,stop:mw,toDisplayString:Ne,toHandlerKey:jr,toHandlers:AC,toRaw:Ee,toRef:It,toRefs:b_,transformVNodeArgs:qC,triggerRef:zw,unref:C,useAttrs:aT,useCssModule:MT,useCssVars:FT,useSSRContext:fv,useSlots:oT,useTransitionState:ld,vModelCheckbox:ec,vModelDynamic:Av,vModelRadio:_d,vModelSelect:Tv,vModelText:Ja,vShow:Yn,version:gv,warn:Jw,watch:Ze,watchEffect:ad,watchPostEffect:O_,watchSyncEffect:mC,withAsyncContext:uT,withCtx:ft,withDefaults:rT,withDirectives:Gn,withKeys:QT,withMemo:dT,withModifiers:Vo,withScopeId:rC},Symbol.toStringTag,{value:"Module"}));var sI=!1;/*!
  * pinia v2.0.34
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let Dv;const tc=t=>Dv=t,Mv=Symbol();function Xu(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Kr;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Kr||(Kr={}));function iI(){const t=Gh(!0),e=t.run(()=>Be({}));let n=[],s=[];const i=Ts({install(r){tc(i),i._a=r,r.provide(Mv,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!sI?s.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const Fv=()=>{};function Xp(t,e,n,s=Fv){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&Yh()&&r_(i),i}function Ci(t,...e){t.slice().forEach(n=>{n(...e)})}function Qu(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];Xu(i)&&Xu(s)&&t.hasOwnProperty(n)&&!De(s)&&!En(s)?t[n]=Qu(i,s):t[n]=s}return t}const rI=Symbol();function oI(t){return!Xu(t)||!t.hasOwnProperty(rI)}const{assign:os}=Object;function aI(t){return!!(De(t)&&t.effect)}function lI(t,e,n,s){const{state:i,actions:r,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=i?i():{});const u=b_(n.state.value[t]);return os(u,r,Object.keys(o||{}).reduce((h,d)=>(h[d]=Ts(Ce(()=>{tc(n);const f=n._s.get(t);return o[d].call(f,f)})),h),{}))}return l=Lv(t,c,e,n,s,!0),l}function Lv(t,e,n={},s,i,r){let o;const a=os({actions:{}},n),l={deep:!0};let c,u,h=Ts([]),d=Ts([]),f;const m=s.state.value[t];!r&&!m&&(s.state.value[t]={}),Be({});let T;function P(I){let E;c=u=!1,typeof I=="function"?(I(s.state.value[t]),E={type:Kr.patchFunction,storeId:t,events:f}):(Qu(s.state.value[t],I),E={type:Kr.patchObject,payload:I,storeId:t,events:f});const N=T=Symbol();vn().then(()=>{T===N&&(c=!0)}),u=!0,Ci(h,E,s.state.value[t])}const v=r?function(){const{state:E}=n,N=E?E():{};this.$patch(O=>{os(O,N)})}:Fv;function g(){o.stop(),h=[],d=[],s._s.delete(t)}function b(I,E){return function(){tc(s);const N=Array.from(arguments),O=[],V=[];function L(le){O.push(le)}function J(le){V.push(le)}Ci(d,{args:N,name:I,store:w,after:L,onError:J});let $;try{$=E.apply(this&&this.$id===t?this:w,N)}catch(le){throw Ci(V,le),le}return $ instanceof Promise?$.then(le=>(Ci(O,le),le)).catch(le=>(Ci(V,le),Promise.reject(le))):(Ci(O,$),$)}}const S={_p:s,$id:t,$onAction:Xp.bind(null,d),$patch:P,$reset:v,$subscribe(I,E={}){const N=Xp(h,I,E.detached,()=>O()),O=o.run(()=>Ze(()=>s.state.value[t],V=>{(E.flush==="sync"?u:c)&&I({storeId:t,type:Kr.direct,events:f},V)},os({},l,E)));return N},$dispose:g},w=In(S);s._s.set(t,w);const A=s._e.run(()=>(o=Gh(),o.run(()=>e())));for(const I in A){const E=A[I];if(De(E)&&!aI(E)||En(E))r||(m&&oI(E)&&(De(E)?E.value=m[I]:Qu(E,m[I])),s.state.value[t][I]=E);else if(typeof E=="function"){const N=b(I,E);A[I]=N,a.actions[I]=E}}return os(w,A),os(Ee(w),A),Object.defineProperty(w,"$state",{get:()=>s.state.value[t],set:I=>{P(E=>{os(E,I)})}}),s._p.forEach(I=>{os(w,o.run(()=>I({store:w,app:s._a,pinia:s,options:a})))}),m&&r&&n.hydrate&&n.hydrate(w.$state,m),c=!0,u=!0,w}function $o(t,e,n){let s,i;const r=typeof e=="function";typeof t=="string"?(s=t,i=r?n:e):(i=t,s=t.id);function o(a,l){const c=en();return a=a||c&&Dt(Mv,null),a&&tc(a),a=Dv,a._s.has(s)||(r?Lv(s,e,i,a):lI(s,i,a)),a._s.get(s)}return o.$id=s,o}function vd(t){{t=Ee(t);const e={};for(const n in t){const s=t[n];(De(s)||En(s))&&(e[n]=It(t,n))}return e}}var cI=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function uI(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function s(){if(this instanceof s){var i=[null];i.push.apply(i,arguments);var r=Function.bind.apply(e,i);return new r}return e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(s){var i=Object.getOwnPropertyDescriptor(t,s);Object.defineProperty(n,s,i.get?i:{enumerable:!0,get:function(){return t[s]}})}),n}var ks={},hI={get exports(){return ks},set exports(t){ks=t}};const dI=uI(nI);(function(t,e){(function(n,s){s(e,dI)})(cI,function(n,s){const i=s.ref();function r(){function w(A){i.value=A}return{option:i,setOptions:w}}const o=s.ref({notifications:[],timeoutId:0,startTime:0,remainingTime:0});function a(){const{option:w}=r(),A=s.computed(()=>{var V;return o.value.remainingTime!==0?o.value.remainingTime:((V=w.value)==null?void 0:V.autoClose)||3e3}),I=V=>{const L=s.computed(()=>o.value.notifications.findIndex(J=>J.id===V));if(L.value!==-1){const J=o.value.notifications[L.value];J.isShow=!1,s.nextTick(()=>{o.value.notifications.splice(L.value,1)})}};function E(V,L){const J={id:Date.now(),status:V,message:L,isShow:!1,timeoutId:0};o.value.notifications.push(J),s.nextTick(()=>{o.value.notifications.forEach($=>($.id==J.id&&($.isShow=!0),$))}),N(J.id)}function N(V){o.value.remainingTime||(o.value.startTime=Date.now()),o.value.timeoutId=window.setTimeout(()=>{I(V),o.value.remainingTime=0},A.value),o.value.notifications.map(L=>(L.id===V&&(L.timeoutId=o.value.timeoutId),L))}function O(V){var L;clearTimeout(V);const J=Date.now()-o.value.startTime;o.value.remainingTime=(((L=w.value)==null?void 0:L.autoClose)||3e3)-J}return{toast:o,notify:E,removeNotification:I,stopTimer:O,timerToAutoClose:N}}const l="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADnElEQVR4nO2aOWhUQRjHfzPPIypKBO9CRTtBrdTCwkYUQVGsPCobwUIUbSysBQ/QoKCBJDvfrlFIYeGBioWFCCo2gpgYU2k80BgsBOP5ZCYvh9kj+97O7lskH3ywy+6b+f7z3d88mKD/ldqZHWTZoYTTynBLG7q0oV8bvkfcr4VO+5v9TyBsJ0MjdUFNTNUZ9irhrjb80kIYiw2/lHBbC3vsWtScOpimhSNaeBtb+OLcq4XDZGioCYbAsEULPR4BjNXSq0DYXD0ETUxVQlPVAIxhZchazfsFcYX5WnhaKxB6hJ+QZZ4fEBmWWnWnACKMuNvKUBmIVua6MJoeiDDiHjIsSKqJhpTMKSxqZklCtDJcrAPhw9GshPNJQmxYjxwYNpWfrQ0v0xZYF2PDq7KSZpSx0xdYSoI5NL42/JYd5fI3DGvJsL5MIG9KOr4tAFM65aNOAMOqGFrZXRSIq2JrbyYP6SDgPpO08Ljc52w7UBhFO7MTleKVgfiKYbmzBsPxmM/+JMesPBy2KUpBGwfc5llWu+ZL4j0fCFvzzcpwppYglOEeIYoOpmjhWcI1ThUCcquGQL4gLI788kQFh3E9P2IJ3TU0qX2RSa2ztl7BOl35QAx9CU7kqhJyiU5xsF3urPBAPhUCEtvZhqKGFo5pw58yNu4jx8LIlM960O6AFyBWIzQzOXp+/7jhO8sut5mwQQu/qwNE+JxkMZeYmpk+KoR/K/g/4VrkFzM8dpwfC2kkecVreDA0bLMTEJvoxvz+gXbmRFHqkicQofWxaoTf57SwyC3WxprRwSMQdkYgN5blS1JB+LVjTK+DgjZWasM7ZTDue4ZGW7V61EaoDCfzgNhZrKcNesmxwi3ayrIhk1OC+AShi5Uo0Yn5KRptmLX9hf9DCkfxj4JFY+Qnd7xtZPjq+ut25mjhvW8gSrhZEISLXMIezxsOxOkxdBweykklWt3eqmzskw1vbNVcHMigVg6nLqiMywdLghjWSn2MScMi3F32xNFl5/o0qT82qRKHlOFC6oLLv6yEc7FADJuY8KSOtPFoXAcvSjYH1Ie/9NjLJiq+6KllGyx5mnjJZZbghbLMS8XMDI/sZRNVuQz1WIaXYiU0V/Xu3dZPVTU1Q1fsEJuYBpPmIc/9xWuXsVN5A2IQ0O7o3ZP48ynDT1vFugIwcWj1TTlmBVm22TGmMtxwMyvb7o68VGM/v7Dtqe3sXFPUwkzvckwQ9UF/AaNTeZnCIEf7AAAAAElFTkSuQmCC",c="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACtElEQVR4nO2YTYiNURzGn/9zEppEUkoRpShlQbGwYDfFDitk5WNDPnZSNNghO7bsaJZkMYqSzMLCSM1GKTUlk6aY5v2fe4c5Onfu6PUx974f574fdZ966nY7nXN+5znv+57zB/rqq56yxhz2Rp3VAHYo+dO7CexCHeUAseRLS7q2X/v/UDdF5NEYRMsN8gjqJAcst+Snv0EsOeGAAdRFKnLtPxAtq8gQ6qAIWK/kzKIgZKTARlRdKvJoMYhYKg9RZUXAHiXnuoF4R8BeVFEOoJJvkkC0t9hbBxhUTUqeTAoRgzmBKskBKyz5OS2IJb84YCWqIhW5lQFi4cG/iSpIgc1K2swgZMMCW6qQxpOsELFUHpcLYcxgl9VuKjnVdrNjW2MGS4FwwBIlx7us9FCSY0sbetz3WTiIJc8n2DZXYu2vJmh/rlAIB6y25NfQIEpOfQfWFAZiRe4lfJDTJuKsyN1CIBrANiVnewWi5I8GsL3nIFZkJMWrNX0ibKXyvLcQxhxK+Y3IBkI6a8zBnkA4YKklPxQGQn50wLLgIJa8nHIieUGcJS8FhZgG1ir5rWgQJadngHXBQKzIgwwQIRJxVuR+EIgmsNNXCssCUXJuBtgdolr4KiNEmETY8miuKmVEHs8xeEgQF5HHsqYx4CuDeQZPc/pN4IlMVUoVuZFz4FT3kYQLcz0VRARs6FQtLMtKqgKb0qQxHGjg2VgiSQ+arksqw8kggH0BV/HiQr+WvBCq36hbldJX/pQcC7gVzv5eIPJMwH7HOlYplTwdeE/3BMTO931qsTRWWXIy5GD+BGtFnrXsf4fte9LP+d80RO4EHqjnVpHbf0BYYGuI93zhIOSsv3rH03ha9qQyW2RkPg1jDpQ+mbw2Zr9/m7wvfSI5reQ7f2l6UfZEAni04weyr76QWb8AiDa+QJoEhN4AAAAASUVORK5CYII=",u="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACjElEQVR4nO2YT4hNURzHP0xCk0hKKaIUpSwoFhZjN8UOK2Tlz4b82UnRYIdmx5YdzZIsRlGSWVDzmJnzewjRlEyakvybx3x178xrnoz37p/z7ru33re+9Xrdc87vc37nnHvuD9pqq5iSsScwRZYcm+T4HfoFWyiiJObIeChD034c/EfRJGNfDUTVeymS9J6FMt79A+IYVYlOiiIZ52fJRtU9FEEaYqWMr/8FcXyTsZq8S45bdbJR9U3yLJXZJsdkBJAgM13kURJz5XgSCWLKgxId5E1yHIoBUc3KQfIkGYtkfEgA8lGvWUxeJMfl2BAzMJfIgzTMWjl+JAYxfspYl4dldScFRNW3Ww3R3SDACRnj055o8Gx3ayCeMk8O1yC4nojXlmCvuKDP7EEcJyJs5LM1z5+LsMSOZwsxzFIZn5oAMq4yy7IDcVyLeLTGBZEcV7OBGGGDjEoTQX6pzMbmgxj9kY/VJCAWtrvfbIjdsd4PSUEsbLurORAvmS/jVYYgb/SWBf5BjDOxAkkLYmH7034hnrNcjs+ZgxhfZKzwB2LcSBCEDxDJuO4LYnNYKWwViGNSI2xNXy10PEo4k74yIhkDqaqUchxIMbhPEKnM/mQQJTrDymCawePcfhtPymiiKqUcF1NCxP0eiQJzIR7EMKvqVgtbZcd3lVkTJxt9ngav1GSk4gmmLxqEsd3jDJ6qmZyTHvvtqg8hOuQoeVwOx2pAjnoEKdWtUso44nldNwfEQh+eHWKQJXKMeR0suMEa90JP/fbZ91gQ82zZ6PU8Y1n4yt8QZdZ7OeezdyX49J4BcdzNQVBJ3V+F2JmDYNJ5hB3B3hhqeSBp7XgWZORBywNJ74G6L8i22iKx/gAkAKXj5NZ9cAAAAABJRU5ErkJggg==",h="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABQElEQVR4nO2ZQWrDMBBFfZQucpIESvZRsrCbs3fRM4RAEnglpKYO2CCPNaOR0d8ZjP5/GslI46apqqqqWpWADRAy+odnhqWDfADfwAM4J0sX738C7sCPGGYA0csUhn+IXjIY4PgXfqjnc6eS/N27m/A+ppoV9cqg5WkJg7aXBYzZhKFoZL6EUTDMsQ+TG2eDSBkgO0SKIG4glgRyByEJ5hZiTkD3EDFBi4GIOOxlOXwu0sTsl1GJGTDlQKwGhDUsLaAtfrOzhs8vr/v9WNCvwTu+YYiAcA/DDAi3MAgg3MHwamOKIDzdDsNSCA/39TBh3JXUQQmpIXL0tIIWhGWXMQA3TQiLvu9hAqJNll4bhvHldBe39tPcNFvJYJ/A1aoSEZW5ADvpYD2MKcQIjBxiMNg+88/QFtjm8q+qqqpqVPQL08n6GKXmFcYAAAAASUVORK5CYII=",d="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABN0lEQVR4nO3ZTWrDMBCG4fcoXfQkLZTuK83CSc6eRc8QAk0hJWBDMTFxJM1oLPRBdsYzj34S2YGenp6e1vIKhIr1w9hDVl6AI/ALHLCPABfgOwczIa7jxxojI2Kqn4yJY/PXGWaHfnYLtW89FRkVi5kRrZqWGNGuZYExGzDNQuZLWBQK1tiHxQtXQ5RsoDqiRCNuEDkNuUOkNOYW8UyD7hFrGt0M4tFhr9bhMyv3Rn8zM7EWsylEMxBpYWkNLWx2aeHrNy40uv93jXtMXIFwj4lPINxiYgLCHSZkINxgQgFEdUxYKJzzm2COCQoIc0xQRJhhAvBjdMQQLczXAuJ2ptKKlMbcW06XnFf7BZ40h5SbfQBnw5mYZz4zJ+A99WYTxhoxx2QhpnxW/jN0AN4q1u/p6emhfP4AxlR3VfJGRpkAAAAASUVORK5CYII=",f=["onMouseenter","onMouseleave","onClick"],m=["src"],T={class:"toastify-text"},P=["onClick","src"],v=s.defineComponent({__name:"index",setup(w){const{toast:A,removeNotification:I,stopTimer:E,timerToAutoClose:N}=a(),{option:O}=r(),V=s.computed(()=>{var Z;return((Z=O.value)==null?void 0:Z.theme)==="day"?d:h}),L=s.computed(()=>{var Z;return((Z=O.value)==null?void 0:Z.theme)==="night"?"toastify-night":"toastify-day"}),J=s.computed(()=>{var Z,ae;return{width:((Z=O.value)==null?void 0:Z.width)+"px",height:((ae=O.value)==null?void 0:ae.height)+"px"}}),$=s.computed(()=>{var Z;switch((Z=O.value)==null?void 0:Z.position){case"top-left":return"toast-top-left";case"top-right":return"toast-top-right";case"bottom-right":return"toast-bottom-right";case"bottom-left":return"toast-bottom-left";case"top-center":return"toast-top-center";default:return"toast-top-center"}}),le=s.computed(()=>{var Z,ae,ve;return(Z=$.value)!=null&&Z.includes("toast-top")?{top:((ae=O.value)==null?void 0:ae.offset)+"px"}:{bottom:((ve=O.value)==null?void 0:ve.offset)+"px"}});function ne(Z){var ae,ve,Ge,Le,be,wt,Gt,M,K,k,W,oe;switch(Z){case"success":return(ve=(ae=O.value)==null?void 0:ae.cover)!=null&&ve.success?(Le=(Ge=O.value)==null?void 0:Ge.cover)==null?void 0:Le.success:l;case"warning":return(wt=(be=O.value)==null?void 0:be.cover)!=null&&wt.warning?(M=(Gt=O.value)==null?void 0:Gt.cover)==null?void 0:M.warning:u;case"error":return(k=(K=O.value)==null?void 0:K.cover)!=null&&k.error?(oe=(W=O.value)==null?void 0:W.cover)==null?void 0:oe.error:c}}return(Z,ae)=>(s.openBlock(),s.createBlock(s.TransitionGroup,{name:"toastify",tag:"div",class:s.normalizeClass(["toastify-container",$.value]),style:s.normalizeStyle(le.value)},{default:s.withCtx(()=>[(s.openBlock(!0),s.createElementBlock(s.Fragment,null,s.renderList(s.unref(A).notifications,ve=>{var Ge;return s.openBlock(),s.createElementBlock("div",{onMouseenter:Le=>{var be;return((be=s.unref(O))==null?void 0:be.pauseTimerOnHover)&&s.unref(E)(ve.timeoutId)},onMouseleave:Le=>{var be;return((be=s.unref(O))==null?void 0:be.pauseTimerOnHover)&&s.unref(N)(ve.id)},onClick:Le=>{var be;return!!((be=s.unref(O))!=null&&be.closeOnClick)&&s.unref(I)(ve.id)},key:ve.id,class:s.normalizeClass([{"show-toast":ve.isShow},L.value]),style:s.normalizeStyle(J.value)},[ve.status!=="default"?(s.openBlock(),s.createElementBlock("img",{key:0,class:"toastify-img",src:ne(ve.status)},null,8,m)):s.createCommentVNode("",!0),s.createElementVNode("div",T,[s.createElementVNode("p",null,s.toDisplayString(ve.message),1)]),(Ge=s.unref(O))!=null&&Ge.showCloseButton?(s.openBlock(),s.createElementBlock("img",{key:1,onClick:Le=>s.unref(I)(ve.id),class:"toastify-close-btn",src:V.value},null,8,P)):s.createCommentVNode("",!0)],46,f)}),128))]),_:1},8,["class","style"]))}}),g=((w,A)=>{const I=w.__vccOpts||w;for(const[E,N]of A)I[E]=N;return I})(v,[["__scopeId","data-v-4025b8ac"]]),b={install:(w,A)=>{w.component("Toastify",g),r().setOptions(A)}};function S(){const{notify:w}=a();function A(I,E){w(I,E)}return{toastify:A}}n.createToastifyPlugin=b,n.useToastify=S,Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})})})(hI,ks);const qe=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},fI={},pI={class:"footer"};function gI(t,e){return re(),ge("footer",pI)}const mI=qe(fI,[["render",gI],["__scopeId","data-v-7199557b"]]),_I="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAABmElEQVR4nO3ZT07CQBSA8edCb6Ab8SwQVxI3LDQs5ALarR5EI0dw49rgTj2FBwA36hFK8pmaGoiBMJ2ZZv7wvoQN07TzS5OXFkQ0zWvAAJjVn4HkHHAOlCyaAyPZEmy+aNZj80MDwxXYcs13Q8nwzs6BC+BszdooO6wsjskDjQE2GzQNsMmjscAmi8YBmxwaD9hk0HjERo+mBWz0aE3T4go4BT5Iv+oXlb4JuDowl6Ym4KwSBf+LzJJNsYXgGVs2tPqZoKfAyUbwEnxseaEn4BDoAJMW1k0aG0P/AgrLi3WWznHUwrpJhTQN6NlcacV5vK4b1rUBHyQM3m8MrgK+EgR/i23AW4LgVxfwOEHwvQu4SBB85QLuJQhuPqFdJnUEYLsJbTupA4M/xTUaTurAYPsJbTupA4PtJ7TtpA4MvhTXaD6pQ7482E9oh0k9qV/tqs0+t7De3oR2eaYOkPuEdnmmDtCL+Aq4I/5ufYKPib+uT/AO8EC8PVZ79AauAvaAG+C9/ic+dGW9l2tg93eTmqZpmqZpmoTrB1sQlZanMEzkAAAAAElFTkSuQmCC";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uv={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H=function(t,e){if(!t)throw fr(e)},fr=function(t){return new Error("Firebase Database ("+Uv.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bv=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},vI=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},yd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),s.push(n[u],n[h],n[d],n[f])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Bv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):vI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new yI;const d=r<<2|a>>4;if(s.push(d),c!==64){const f=a<<4&240|c>>2;if(s.push(f),h!==64){const m=c<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class yI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Vv=function(t){const e=Bv(t);return yd.encodeByteArray(e,!0)},Za=function(t){return Vv(t).replace(/\./g,"")},el=function(t){try{return yd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EI(t){return $v(void 0,t)}function $v(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!bI(n)||(t[n]=$v(t[n],e[n]));return t}function bI(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CI=()=>wI().__FIREBASE_DEFAULTS__,TI=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},II=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&el(t[1]);return e&&JSON.parse(e)},nc=()=>{try{return CI()||TI()||II()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},jv=t=>{var e,n;return(n=(e=nc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Ed=t=>{const e=jv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},AI=()=>{var t;return(t=nc())===null||t===void 0?void 0:t.config},Hv=t=>{var e;return(e=nc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bd(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Za(JSON.stringify(n)),Za(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function wd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(bt())}function SI(){var t;const e=(t=nc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function RI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Wv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function kI(){const t=bt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function zv(){return Uv.NODE_ADMIN===!0}function OI(){try{return typeof indexedDB=="object"}catch{return!1}}function PI(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xI="FirebaseError";class An extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=xI,Object.setPrototypeOf(this,An.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,jo.prototype.create)}}class jo{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?NI(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new An(i,a,s)}}function NI(t,e){return t.replace(DI,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const DI=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(t){return JSON.parse(t)}function rt(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qv=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=po(el(r[0])||""),n=po(el(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},MI=function(t){const e=qv(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},FI=function(t){const e=qv(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ji(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Ju(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function tl(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function nl(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Qp(r)&&Qp(o)){if(!nl(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Qp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Lr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function Ur(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function UI(t,e){const n=new BI(t,e);return n.subscribe.bind(n)}class BI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");VI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Jc),i.error===void 0&&(i.error=Jc),i.complete===void 0&&(i.complete=Jc);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function VI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Jc(){}function Cd(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $I=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,H(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ic=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(t){return t&&t._delegate?t._delegate:t}class $n{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new sc;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(WI(e))try{this.getOrInitializeService({instanceIdentifier:Bs})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Bs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Bs){return this.instances.has(e)}getOptions(e=Bs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:HI(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Bs){return this.component?this.component.multipleInstances?e:Bs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function HI(t){return t===Bs?void 0:t}function WI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new jI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Re||(Re={}));const qI={debug:Re.DEBUG,verbose:Re.VERBOSE,info:Re.INFO,warn:Re.WARN,error:Re.ERROR,silent:Re.SILENT},KI=Re.INFO,GI={[Re.DEBUG]:"log",[Re.VERBOSE]:"log",[Re.INFO]:"info",[Re.WARN]:"warn",[Re.ERROR]:"error"},YI=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=GI[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class rc{constructor(e){this.name=e,this._logLevel=KI,this._logHandler=YI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?qI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Re.DEBUG,...e),this._logHandler(this,Re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Re.VERBOSE,...e),this._logHandler(this,Re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Re.INFO,...e),this._logHandler(this,Re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Re.WARN,...e),this._logHandler(this,Re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Re.ERROR,...e),this._logHandler(this,Re.ERROR,...e)}}const XI=(t,e)=>e.some(n=>t instanceof n);let Jp,Zp;function QI(){return Jp||(Jp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function JI(){return Zp||(Zp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Kv=new WeakMap,Zu=new WeakMap,Gv=new WeakMap,Zc=new WeakMap,Td=new WeakMap;function ZI(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(vs(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Kv.set(n,t)}).catch(()=>{}),Td.set(e,t),e}function eA(t){if(Zu.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Zu.set(t,e)}let eh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Zu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Gv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return vs(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function tA(t){eh=t(eh)}function nA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(eu(this),e,...n);return Gv.set(s,e.sort?e.sort():[e]),vs(s)}:JI().includes(t)?function(...e){return t.apply(eu(this),e),vs(Kv.get(this))}:function(...e){return vs(t.apply(eu(this),e))}}function sA(t){return typeof t=="function"?nA(t):(t instanceof IDBTransaction&&eA(t),XI(t,QI())?new Proxy(t,eh):t)}function vs(t){if(t instanceof IDBRequest)return ZI(t);if(Zc.has(t))return Zc.get(t);const e=sA(t);return e!==t&&(Zc.set(t,e),Td.set(e,t)),e}const eu=t=>Td.get(t);function iA(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=vs(o);return s&&o.addEventListener("upgradeneeded",l=>{s(vs(o.result),l.oldVersion,l.newVersion,vs(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const rA=["get","getKey","getAll","getAllKeys","count"],oA=["put","add","delete","clear"],tu=new Map;function eg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(tu.get(e))return tu.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=oA.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||rA.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return tu.set(e,r),r}tA(t=>({...t,get:(e,n,s)=>eg(e,n)||t.get(e,n,s),has:(e,n)=>!!eg(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(lA(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function lA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const th="@firebase/app",tg="0.9.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const li=new rc("@firebase/app"),cA="@firebase/app-compat",uA="@firebase/analytics-compat",hA="@firebase/analytics",dA="@firebase/app-check-compat",fA="@firebase/app-check",pA="@firebase/auth",gA="@firebase/auth-compat",mA="@firebase/database",_A="@firebase/database-compat",vA="@firebase/functions",yA="@firebase/functions-compat",EA="@firebase/installations",bA="@firebase/installations-compat",wA="@firebase/messaging",CA="@firebase/messaging-compat",TA="@firebase/performance",IA="@firebase/performance-compat",AA="@firebase/remote-config",SA="@firebase/remote-config-compat",RA="@firebase/storage",kA="@firebase/storage-compat",OA="@firebase/firestore",PA="@firebase/firestore-compat",xA="firebase",NA="9.19.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nh="[DEFAULT]",DA={[th]:"fire-core",[cA]:"fire-core-compat",[hA]:"fire-analytics",[uA]:"fire-analytics-compat",[fA]:"fire-app-check",[dA]:"fire-app-check-compat",[pA]:"fire-auth",[gA]:"fire-auth-compat",[mA]:"fire-rtdb",[_A]:"fire-rtdb-compat",[vA]:"fire-fn",[yA]:"fire-fn-compat",[EA]:"fire-iid",[bA]:"fire-iid-compat",[wA]:"fire-fcm",[CA]:"fire-fcm-compat",[TA]:"fire-perf",[IA]:"fire-perf-compat",[AA]:"fire-rc",[SA]:"fire-rc-compat",[RA]:"fire-gcs",[kA]:"fire-gcs-compat",[OA]:"fire-fst",[PA]:"fire-fst-compat","fire-js":"fire-js",[xA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sl=new Map,sh=new Map;function MA(t,e){try{t.container.addComponent(e)}catch(n){li.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Os(t){const e=t.name;if(sh.has(e))return li.debug(`There were multiple attempts to register component ${e}.`),!1;sh.set(e,t);for(const n of sl.values())MA(n,t);return!0}function Ho(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FA={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ys=new jo("app","Firebase",FA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LA{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new $n("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ys.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vi=NA;function Yv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:nh,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw ys.create("bad-app-name",{appName:String(i)});if(n||(n=AI()),!n)throw ys.create("no-options");const r=sl.get(i);if(r){if(nl(n,r.options)&&nl(s,r.config))return r;throw ys.create("duplicate-app",{appName:i})}const o=new zI(i);for(const l of sh.values())o.addComponent(l);const a=new LA(n,s,o);return sl.set(i,a),a}function oc(t=nh){const e=sl.get(t);if(!e&&t===nh)return Yv();if(!e)throw ys.create("no-app",{appName:t});return e}function Jt(t,e,n){var s;let i=(s=DA[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),li.warn(a.join(" "));return}Os(new $n(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UA="firebase-heartbeat-database",BA=1,go="firebase-heartbeat-store";let nu=null;function Xv(){return nu||(nu=iA(UA,BA,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(go)}}}).catch(t=>{throw ys.create("idb-open",{originalErrorMessage:t.message})})),nu}async function VA(t){try{return(await Xv()).transaction(go).objectStore(go).get(Qv(t))}catch(e){if(e instanceof An)li.warn(e.message);else{const n=ys.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});li.warn(n.message)}}}async function ng(t,e){try{const s=(await Xv()).transaction(go,"readwrite");return await s.objectStore(go).put(e,Qv(t)),s.done}catch(n){if(n instanceof An)li.warn(n.message);else{const s=ys.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});li.warn(s.message)}}}function Qv(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $A=1024,jA=30*24*60*60*1e3;class HA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new zA(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=sg();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=jA}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=sg(),{heartbeatsToSend:n,unsentEntries:s}=WA(this._heartbeatsCache.heartbeats),i=Za(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function sg(){return new Date().toISOString().substring(0,10)}function WA(t,e=$A){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),ig(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ig(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class zA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return OI()?PI().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await VA(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ng(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ng(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ig(t){return Za(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qA(t){Os(new $n("platform-logger",e=>new aA(e),"PRIVATE")),Os(new $n("heartbeat",e=>new HA(e),"PRIVATE")),Jt(th,tg,t),Jt(th,tg,"esm2017"),Jt("fire-js","")}qA("");var KA="firebase",GA="9.19.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Jt(KA,GA,"app");function Id(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function Jv(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const YA=Jv,Zv=new jo("auth","Firebase",Jv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rg=new rc("@firebase/auth");function La(t,...e){rg.logLevel<=Re.ERROR&&rg.error(`Auth (${vi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(t,...e){throw Ad(t,...e)}function bn(t,...e){return Ad(t,...e)}function XA(t,e,n){const s=Object.assign(Object.assign({},YA()),{[e]:n});return new jo("auth","Firebase",s).create(e,{appName:t.name})}function Ad(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Zv.create(t,...e)}function ue(t,e,...n){if(!t)throw Ad(e,...n)}function Nn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw La(e),new Error(e)}function jn(t,e){t||Nn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const og=new Map;function Dn(t){jn(t instanceof Function,"Expected a class definition");let e=og.get(t);return e?(jn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,og.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QA(t,e){const n=Ho(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(nl(r,e??{}))return i;hn(i,"already-initialized")}return n.initialize({options:e})}function JA(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Dn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ih(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function ZA(){return ag()==="http:"||ag()==="https:"}function ag(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ZA()||RI()||"connection"in navigator)?navigator.onLine:!0}function tS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e,n){this.shortDelay=e,this.longDelay=n,jn(n>e,"Short delay should be less than long delay!"),this.isMobile=wd()||Wv()}get(){return eS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sd(t,e){jn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Nn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Nn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Nn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sS=new Wo(3e4,6e4);function zo(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function qo(t,e,n,s,i={}){return ty(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=pr(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),ey.fetch()(ny(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function ty(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},nS),e);try{const i=new iS(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Ia(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ia(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ia(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ia(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw XA(t,u,c);hn(t,u)}}catch(i){if(i instanceof An)throw i;hn(t,"network-request-failed",{message:String(i)})}}async function Ko(t,e,n,s,i={}){const r=await qo(t,e,n,s,i);return"mfaPendingCredential"in r&&hn(t,"multi-factor-auth-required",{_serverResponse:r}),r}function ny(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Sd(t.config,i):`${t.config.apiScheme}://${i}`}class iS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(bn(this.auth,"network-request-failed")),sS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ia(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=bn(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rS(t,e){return qo(t,"POST","/v1/accounts:delete",e)}async function oS(t,e){return qo(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function aS(t,e=!1){const n=at(t),s=await n.getIdToken(e),i=Rd(s);ue(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Gr(su(i.auth_time)),issuedAtTime:Gr(su(i.iat)),expirationTime:Gr(su(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function su(t){return Number(t)*1e3}function Rd(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return La("JWT malformed, contained fewer than 3 sections"),null;try{const i=el(n);return i?JSON.parse(i):(La("Failed to decode base64 JWT payload"),null)}catch(i){return La("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function lS(t){const e=Rd(t);return ue(e,"internal-error"),ue(typeof e.exp<"u","internal-error"),ue(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mo(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof An&&cS(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function cS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Gr(this.lastLoginAt),this.creationTime=Gr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function il(t){var e;const n=t.auth,s=await t.getIdToken(),i=await mo(t,oS(n,{idToken:s}));ue(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?fS(r.providerUserInfo):[],a=dS(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new sy(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function hS(t){const e=at(t);await il(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function dS(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function fS(t){return t.map(e=>{var{providerId:n}=e,s=Id(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pS(t,e){const n=await ty(t,{},async()=>{const s=pr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=ny(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ey.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ue(e.idToken,"internal-error"),ue(typeof e.idToken<"u","internal-error"),ue(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):lS(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ue(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await pS(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new _o;return s&&(ue(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(ue(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(ue(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new _o,this.toJSON())}_performRefresh(){return Nn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ss(t,e){ue(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Zs{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Id(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new uS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new sy(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await mo(this,this.stsTokenManager.getToken(this.auth,e));return ue(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return aS(this,e)}reload(){return hS(this)}_assign(e){this!==e&&(ue(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Zs(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ue(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await il(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await mo(this,rS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,f=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,T=(a=n.tenantId)!==null&&a!==void 0?a:void 0,P=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,v=(c=n.createdAt)!==null&&c!==void 0?c:void 0,g=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:b,emailVerified:S,isAnonymous:w,providerData:A,stsTokenManager:I}=n;ue(b&&I,e,"internal-error");const E=_o.fromJSON(this.name,I);ue(typeof b=="string",e,"internal-error"),ss(h,e.name),ss(d,e.name),ue(typeof S=="boolean",e,"internal-error"),ue(typeof w=="boolean",e,"internal-error"),ss(f,e.name),ss(m,e.name),ss(T,e.name),ss(P,e.name),ss(v,e.name),ss(g,e.name);const N=new Zs({uid:b,auth:e,email:d,emailVerified:S,displayName:h,isAnonymous:w,photoURL:m,phoneNumber:f,tenantId:T,stsTokenManager:E,createdAt:v,lastLoginAt:g});return A&&Array.isArray(A)&&(N.providerData=A.map(O=>Object.assign({},O))),P&&(N._redirectEventId=P),N}static async _fromIdTokenResponse(e,n,s=!1){const i=new _o;i.updateFromServerResponse(n);const r=new Zs({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await il(r),r}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}iy.type="NONE";const lg=iy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ua(t,e,n){return`firebase:${t}:${e}:${n}`}class Vi{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Ua(this.userKey,i.apiKey,r),this.fullPersistenceKey=Ua("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Zs._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Vi(Dn(lg),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||Dn(lg);const o=Ua(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=Zs._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Vi(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Vi(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ay(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ry(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(cy(e))return"Blackberry";if(uy(e))return"Webos";if(kd(e))return"Safari";if((e.includes("chrome/")||oy(e))&&!e.includes("edge/"))return"Chrome";if(ly(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function ry(t=bt()){return/firefox\//i.test(t)}function kd(t=bt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function oy(t=bt()){return/crios\//i.test(t)}function ay(t=bt()){return/iemobile/i.test(t)}function ly(t=bt()){return/android/i.test(t)}function cy(t=bt()){return/blackberry/i.test(t)}function uy(t=bt()){return/webos/i.test(t)}function ac(t=bt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function gS(t=bt()){var e;return ac(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function mS(){return kI()&&document.documentMode===10}function hy(t=bt()){return ac(t)||ly(t)||uy(t)||cy(t)||/windows phone/i.test(t)||ay(t)}function _S(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dy(t,e=[]){let n;switch(t){case"Browser":n=cg(bt());break;case"Worker":n=`${cg(bt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${vi}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yS{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ug(this),this.idTokenSubscription=new ug(this),this.beforeStateQueue=new vS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Zv,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Dn(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await Vi.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ue(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await il(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=tS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?at(e):null;return n&&ue(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ue(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Dn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new jo("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Dn(e)||this._popupRedirectResolver;ue(n,this,"argument-error"),this.redirectPersistenceManager=await Vi.create(this,[Dn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ue(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ue(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=dy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Go(t){return at(t)}class ug{constructor(e){this.auth=e,this.observer=null,this.addObserver=UI(n=>this.observer=n)}get next(){return ue(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function ES(t,e,n){const s=Go(t);ue(s._canInitEmulator,s,"emulator-config-failed"),ue(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=fy(e),{host:o,port:a}=bS(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||wS()}function fy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function bS(t){const e=fy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:hg(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:hg(o)}}}function hg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function wS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Nn("not implemented")}_getIdTokenResponse(e){return Nn("not implemented")}_linkToIdToken(e,n){return Nn("not implemented")}_getReauthenticationResolver(e){return Nn("not implemented")}}async function CS(t,e){return qo(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TS(t,e){return Ko(t,"POST","/v1/accounts:signInWithPassword",zo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IS(t,e){return Ko(t,"POST","/v1/accounts:signInWithEmailLink",zo(t,e))}async function AS(t,e){return Ko(t,"POST","/v1/accounts:signInWithEmailLink",zo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo extends Od{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new vo(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new vo(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return TS(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return IS(e,{email:this._email,oobCode:this._password});default:hn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return CS(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return AS(e,{idToken:n,email:this._email,oobCode:this._password});default:hn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $i(t,e){return Ko(t,"POST","/v1/accounts:signInWithIdp",zo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SS="http://localhost";class ci extends Od{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ci(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):hn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=Id(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new ci(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return $i(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,$i(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,$i(e,n)}buildRequest(){const e={requestUri:SS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=pr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RS(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function kS(t){const e=Lr(Ur(t)).link,n=e?Lr(Ur(e)).deep_link_id:null,s=Lr(Ur(t)).deep_link_id;return(s?Lr(Ur(s)).link:null)||s||n||e||t}class Pd{constructor(e){var n,s,i,r,o,a;const l=Lr(Ur(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,h=RS((i=l.mode)!==null&&i!==void 0?i:null);ue(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=kS(e);try{return new Pd(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(){this.providerId=gr.PROVIDER_ID}static credential(e,n){return vo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Pd.parseLink(n);return ue(s,"argument-error"),vo._fromEmailAndCode(e,s.code,s.tenantId)}}gr.PROVIDER_ID="password";gr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";gr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo extends py{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us extends Yo{constructor(){super("facebook.com")}static credential(e){return ci._fromParams({providerId:us.PROVIDER_ID,signInMethod:us.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return us.credentialFromTaggedObject(e)}static credentialFromError(e){return us.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return us.credential(e.oauthAccessToken)}catch{return null}}}us.FACEBOOK_SIGN_IN_METHOD="facebook.com";us.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs extends Yo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ci._fromParams({providerId:hs.PROVIDER_ID,signInMethod:hs.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return hs.credentialFromTaggedObject(e)}static credentialFromError(e){return hs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return hs.credential(n,s)}catch{return null}}}hs.GOOGLE_SIGN_IN_METHOD="google.com";hs.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds extends Yo{constructor(){super("github.com")}static credential(e){return ci._fromParams({providerId:ds.PROVIDER_ID,signInMethod:ds.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ds.credentialFromTaggedObject(e)}static credentialFromError(e){return ds.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ds.credential(e.oauthAccessToken)}catch{return null}}}ds.GITHUB_SIGN_IN_METHOD="github.com";ds.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs extends Yo{constructor(){super("twitter.com")}static credential(e,n){return ci._fromParams({providerId:fs.PROVIDER_ID,signInMethod:fs.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return fs.credentialFromTaggedObject(e)}static credentialFromError(e){return fs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return fs.credential(n,s)}catch{return null}}}fs.TWITTER_SIGN_IN_METHOD="twitter.com";fs.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OS(t,e){return Ko(t,"POST","/v1/accounts:signUp",zo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await Zs._fromIdTokenResponse(e,s,i),o=dg(s);return new ui({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=dg(s);return new ui({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function dg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl extends An{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,rl.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new rl(e,n,s,i)}}function gy(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?rl._fromErrorAndOperation(t,r,e,s):r})}async function PS(t,e,n=!1){const s=await mo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ui._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xS(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await mo(t,gy(s,i,e,t),n);ue(r.idToken,s,"internal-error");const o=Rd(r.idToken);ue(o,s,"internal-error");const{sub:a}=o;return ue(t.uid===a,s,"user-mismatch"),ui._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&hn(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function my(t,e,n=!1){const s="signIn",i=await gy(t,s,e),r=await ui._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function NS(t,e){return my(Go(t),e)}async function DS(t,e,n){const s=Go(t),i=await OS(s,{returnSecureToken:!0,email:e,password:n}),r=await ui._fromIdTokenResponse(s,"signIn",i);return await s._updateCurrentUser(r.user),r}function MS(t,e,n){return NS(at(t),gr.credential(e,n))}function FS(t,e,n,s){return at(t).onIdTokenChanged(e,n,s)}function LS(t,e,n){return at(t).beforeAuthStateChanged(e,n)}function US(t){return at(t).signOut()}const ol="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ol,"1"),this.storage.removeItem(ol),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BS(){const t=bt();return kd(t)||ac(t)}const VS=1e3,$S=10;class vy extends _y{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=BS()&&_S(),this.fallbackToPolling=hy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);mS()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,$S):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},VS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}vy.type="LOCAL";const jS=vy;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy extends _y{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}yy.type="SESSION";const Ey=yy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new lc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await HS(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}lc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xd(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=xd("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(){return window}function zS(t){wn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function by(){return typeof wn().WorkerGlobalScope<"u"&&typeof wn().importScripts=="function"}async function qS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function KS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function GS(){return by()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wy="firebaseLocalStorageDb",YS=1,al="firebaseLocalStorage",Cy="fbase_key";class Xo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function cc(t,e){return t.transaction([al],e?"readwrite":"readonly").objectStore(al)}function XS(){const t=indexedDB.deleteDatabase(wy);return new Xo(t).toPromise()}function rh(){const t=indexedDB.open(wy,YS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(al,{keyPath:Cy})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(al)?e(s):(s.close(),await XS(),e(await rh()))})})}async function fg(t,e,n){const s=cc(t,!0).put({[Cy]:e,value:n});return new Xo(s).toPromise()}async function QS(t,e){const n=cc(t,!1).get(e),s=await new Xo(n).toPromise();return s===void 0?null:s.value}function pg(t,e){const n=cc(t,!0).delete(e);return new Xo(n).toPromise()}const JS=800,ZS=3;class Ty{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await rh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>ZS)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return by()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=lc._getInstance(GS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await qS(),!this.activeServiceWorker)return;this.sender=new WS(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||KS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await rh();return await fg(e,ol,"1"),await pg(e,ol),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>fg(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>QS(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>pg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=cc(i,!1).getAll();return new Xo(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),JS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ty.type="LOCAL";const eR=Ty;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function nR(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=bn("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",tR().appendChild(s)})}function sR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Wo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iR(t,e){return e?Dn(e):(ue(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd extends Od{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return $i(e,this._buildIdpRequest())}_linkToIdToken(e,n){return $i(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return $i(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function rR(t){return my(t.auth,new Nd(t),t.bypassAuthState)}function oR(t){const{auth:e,user:n}=t;return ue(n,e,"internal-error"),xS(n,new Nd(t),t.bypassAuthState)}async function aR(t){const{auth:e,user:n}=t;return ue(n,e,"internal-error"),PS(n,new Nd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iy{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return rR;case"linkViaPopup":case"linkViaRedirect":return aR;case"reauthViaPopup":case"reauthViaRedirect":return oR;default:hn(this.auth,"internal-error")}}resolve(e){jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lR=new Wo(2e3,1e4);class Pi extends Iy{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Pi.currentPopupAction&&Pi.currentPopupAction.cancel(),Pi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ue(e,this.auth,"internal-error"),e}async onExecution(){jn(this.filter.length===1,"Popup operations only handle one event");const e=xd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(bn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(bn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Pi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(bn(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,lR.get())};e()}}Pi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cR="pendingRedirect",Ba=new Map;class uR extends Iy{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Ba.get(this.auth._key());if(!e){try{const s=await hR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Ba.set(this.auth._key(),e)}return this.bypassAuthState||Ba.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function hR(t,e){const n=pR(e),s=fR(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function dR(t,e){Ba.set(t._key(),e)}function fR(t){return Dn(t._redirectPersistence)}function pR(t){return Ua(cR,t.config.apiKey,t.name)}async function gR(t,e,n=!1){const s=Go(t),i=iR(s,e),o=await new uR(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mR=10*60*1e3;class _R{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!vR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Ay(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(bn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=mR&&this.cachedEventUids.clear(),this.cachedEventUids.has(gg(e))}saveEventToCache(e){this.cachedEventUids.add(gg(e)),this.lastProcessedEventTime=Date.now()}}function gg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ay({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function vR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ay(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yR(t,e={}){return qo(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ER=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,bR=/^https?/;async function wR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await yR(t);for(const n of e)try{if(CR(n))return}catch{}hn(t,"unauthorized-domain")}function CR(t){const e=ih(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!bR.test(n))return!1;if(ER.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TR=new Wo(3e4,6e4);function mg(){const t=wn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function IR(t){return new Promise((e,n)=>{var s,i,r;function o(){mg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{mg(),n(bn(t,"network-request-failed"))},timeout:TR.get()})}if(!((i=(s=wn().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=wn().gapi)===null||r===void 0)&&r.load)o();else{const a=sR("iframefcb");return wn()[a]=()=>{gapi.load?o():n(bn(t,"network-request-failed"))},nR(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Va=null,e})}let Va=null;function AR(t){return Va=Va||IR(t),Va}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SR=new Wo(5e3,15e3),RR="__/auth/iframe",kR="emulator/auth/iframe",OR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},PR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function xR(t){const e=t.config;ue(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Sd(e,kR):`https://${t.config.authDomain}/${RR}`,s={apiKey:e.apiKey,appName:t.name,v:vi},i=PR.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${pr(s).slice(1)}`}async function NR(t){const e=await AR(t),n=wn().gapi;return ue(n,t,"internal-error"),e.open({where:document.body,url:xR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:OR,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=bn(t,"network-request-failed"),a=wn().setTimeout(()=>{r(o)},SR.get());function l(){wn().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},MR=500,FR=600,LR="_blank",UR="http://localhost";class _g{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function BR(t,e,n,s=MR,i=FR){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},DR),{width:s.toString(),height:i.toString(),top:r,left:o}),c=bt().toLowerCase();n&&(a=oy(c)?LR:n),ry(c)&&(e=e||UR,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[f,m])=>`${d}${f}=${m},`,"");if(gS(c)&&a!=="_self")return VR(e||"",a),new _g(null);const h=window.open(e||"",a,u);ue(h,t,"popup-blocked");try{h.focus()}catch{}return new _g(h)}function VR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $R="__/auth/handler",jR="emulator/auth/handler";function vg(t,e,n,s,i,r){ue(t.config.authDomain,t,"auth-domain-config-required"),ue(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:vi,eventId:i};if(e instanceof py){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ju(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(r||{}))o[l]=c}if(e instanceof Yo){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${HR(t)}?${pr(a).slice(1)}`}function HR({config:t}){return t.emulator?Sd(t,jR):`https://${t.authDomain}/${$R}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iu="webStorageSupport";class WR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ey,this._completeRedirectFn=gR,this._overrideRedirectResult=dR}async _openPopup(e,n,s,i){var r;jn((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=vg(e,n,s,ih(),i);return BR(e,o,xd())}async _openRedirect(e,n,s,i){return await this._originValidation(e),zS(vg(e,n,s,ih(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(jn(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await NR(e),s=new _R(e);return n.register("authEvent",i=>(ue(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(iu,{type:iu},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[iu];o!==void 0&&n(!!o),hn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=wR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return hy()||kd()||ac()}}const zR=WR;var yg="@firebase/auth",Eg="0.22.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ue(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function GR(t){Os(new $n("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=s.options;return((a,l)=>{ue(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),ue(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:r,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:dy(t)},u=new yS(a,l,c);return JA(u,n),u})(s,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Os(new $n("auth-internal",e=>{const n=Go(e.getProvider("auth").getImmediate());return(s=>new qR(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Jt(yg,Eg,KR(t)),Jt(yg,Eg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YR=5*60,XR=Hv("authIdTokenMaxAge")||YR;let bg=null;const QR=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>XR)return;const i=n==null?void 0:n.token;bg!==i&&(bg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function JR(t=oc()){const e=Ho(t,"auth");if(e.isInitialized())return e.getImmediate();const n=QA(t,{popupRedirectResolver:zR,persistence:[eR,jS,Ey]}),s=Hv("authTokenSyncURL");if(s){const r=QR(s);LS(n,r,()=>r(n.currentUser)),FS(n,o=>r(o))}const i=jv("auth");return i&&ES(n,`http://${i}`),n}GR("Browser");var ZR=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ie,Dd=Dd||{},pe=ZR||self;function ll(){}function uc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Qo(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function ek(t){return Object.prototype.hasOwnProperty.call(t,ru)&&t[ru]||(t[ru]=++tk)}var ru="closure_uid_"+(1e9*Math.random()>>>0),tk=0;function nk(t,e,n){return t.call.apply(t.bind,arguments)}function sk(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function yt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?yt=nk:yt=sk,yt.apply(null,arguments)}function Aa(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function pt(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function Ds(){this.s=this.s,this.o=this.o}var ik=0;Ds.prototype.s=!1;Ds.prototype.na=function(){!this.s&&(this.s=!0,this.M(),ik!=0)&&ek(this)};Ds.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Sy=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Md(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function wg(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(uc(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function Et(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Et.prototype.h=function(){this.defaultPrevented=!0};var rk=function(){if(!pe.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{pe.addEventListener("test",ll,e),pe.removeEventListener("test",ll,e)}catch{}return t}();function cl(t){return/^[\s\xa0]*$/.test(t)}var Cg=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function ou(t,e){return t<e?-1:t>e?1:0}function hc(){var t=pe.navigator;return t&&(t=t.userAgent)?t:""}function _n(t){return hc().indexOf(t)!=-1}function Fd(t){return Fd[" "](t),t}Fd[" "]=ll;function ok(t){var e=ck;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var ak=_n("Opera"),yo=_n("Trident")||_n("MSIE"),Ry=_n("Edge"),oh=Ry||yo,ky=_n("Gecko")&&!(hc().toLowerCase().indexOf("webkit")!=-1&&!_n("Edge"))&&!(_n("Trident")||_n("MSIE"))&&!_n("Edge"),lk=hc().toLowerCase().indexOf("webkit")!=-1&&!_n("Edge");function Oy(){var t=pe.document;return t?t.documentMode:void 0}var ah;e:{var au="",lu=function(){var t=hc();if(ky)return/rv:([^\);]+)(\)|;)/.exec(t);if(Ry)return/Edge\/([\d\.]+)/.exec(t);if(yo)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(lk)return/WebKit\/(\S+)/.exec(t);if(ak)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(lu&&(au=lu?lu[1]:""),yo){var cu=Oy();if(cu!=null&&cu>parseFloat(au)){ah=String(cu);break e}}ah=au}var ck={};function uk(){return ok(function(){let t=0;const e=Cg(String(ah)).split("."),n=Cg("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=ou(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||ou(i[2].length==0,r[2].length==0)||ou(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}pe.document&&yo&&Oy();function Eo(t,e){if(Et.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(ky){e:{try{Fd(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:hk[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Eo.X.h.call(this)}}pt(Eo,Et);var hk={2:"touch",3:"pen",4:"mouse"};Eo.prototype.h=function(){Eo.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Jo="closure_listenable_"+(1e6*Math.random()|0),dk=0;function fk(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++dk,this.ba=this.ea=!1}function dc(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Ld(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Py(t){const e={};for(const n in t)e[n]=t[n];return e}const Tg="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function xy(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<Tg.length;r++)n=Tg[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function fc(t){this.src=t,this.g={},this.h=0}fc.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=ch(t,e,s,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new fk(e,this.src,r,!!s,i),e.ea=n,t.push(e)),e};function lh(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=Sy(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(dc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function ch(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}var Ud="closure_lm_"+(1e6*Math.random()|0),uu={};function Ny(t,e,n,s,i){if(s&&s.once)return My(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Ny(t,e[r],n,s,i);return null}return n=$d(n),t&&t[Jo]?t.N(e,n,Qo(s)?!!s.capture:!!s,i):Dy(t,e,n,!1,s,i)}function Dy(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=Qo(i)?!!i.capture:!!i,a=Vd(t);if(a||(t[Ud]=a=new fc(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=pk(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)rk||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(Ly(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function pk(){function t(n){return e.call(t.src,t.listener,n)}const e=gk;return t}function My(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)My(t,e[r],n,s,i);return null}return n=$d(n),t&&t[Jo]?t.O(e,n,Qo(s)?!!s.capture:!!s,i):Dy(t,e,n,!0,s,i)}function Fy(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)Fy(t,e[r],n,s,i);else s=Qo(s)?!!s.capture:!!s,n=$d(n),t&&t[Jo]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=ch(r,n,s,i),-1<n&&(dc(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=Vd(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ch(e,n,s,i)),(n=-1<t?e[t]:null)&&Bd(n))}function Bd(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Jo])lh(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Ly(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Vd(e))?(lh(n,t),n.h==0&&(n.src=null,e[Ud]=null)):dc(t)}}}function Ly(t){return t in uu?uu[t]:uu[t]="on"+t}function gk(t,e){if(t.ba)t=!0;else{e=new Eo(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&Bd(t),t=n.call(s,e)}return t}function Vd(t){return t=t[Ud],t instanceof fc?t:null}var hu="__closure_events_fn_"+(1e9*Math.random()>>>0);function $d(t){return typeof t=="function"?t:(t[hu]||(t[hu]=function(e){return t.handleEvent(e)}),t[hu])}function ot(){Ds.call(this),this.i=new fc(this),this.P=this,this.I=null}pt(ot,Ds);ot.prototype[Jo]=!0;ot.prototype.removeEventListener=function(t,e,n,s){Fy(this,t,e,n,s)};function dt(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Et(e,t);else if(e instanceof Et)e.target=e.target||t;else{var i=e;e=new Et(s,t),xy(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=Sa(o,s,!0,e)&&i}if(o=e.g=t,i=Sa(o,s,!0,e)&&i,i=Sa(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=Sa(o,s,!1,e)&&i}ot.prototype.M=function(){if(ot.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)dc(n[s]);delete t.g[e],t.h--}}this.I=null};ot.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};ot.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Sa(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&lh(t.i,o),i=a.call(l,s)!==!1&&i}}return i&&!s.defaultPrevented}var jd=pe.JSON.stringify;function mk(){var t=Vy;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class _k{constructor(){this.h=this.g=null}add(e,n){const s=Uy.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Uy=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new vk,t=>t.reset());class vk{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function yk(t){pe.setTimeout(()=>{throw t},0)}function By(t,e){uh||Ek(),hh||(uh(),hh=!0),Vy.add(t,e)}var uh;function Ek(){var t=pe.Promise.resolve(void 0);uh=function(){t.then(bk)}}var hh=!1,Vy=new _k;function bk(){for(var t;t=mk();){try{t.h.call(t.g)}catch(n){yk(n)}var e=Uy;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}hh=!1}function pc(t,e){ot.call(this),this.h=t||1,this.g=e||pe,this.j=yt(this.lb,this),this.l=Date.now()}pt(pc,ot);ie=pc.prototype;ie.ca=!1;ie.R=null;ie.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),dt(this,"tick"),this.ca&&(Hd(this),this.start()))}};ie.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Hd(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}ie.M=function(){pc.X.M.call(this),Hd(this),delete this.g};function Wd(t,e,n){if(typeof t=="function")n&&(t=yt(t,n));else if(t&&typeof t.handleEvent=="function")t=yt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:pe.setTimeout(t,e||0)}function $y(t){t.g=Wd(()=>{t.g=null,t.i&&(t.i=!1,$y(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class wk extends Ds{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:$y(this)}M(){super.M(),this.g&&(pe.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function bo(t){Ds.call(this),this.h=t,this.g={}}pt(bo,Ds);var Ig=[];function jy(t,e,n,s){Array.isArray(n)||(n&&(Ig[0]=n.toString()),n=Ig);for(var i=0;i<n.length;i++){var r=Ny(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Hy(t){Ld(t.g,function(e,n){this.g.hasOwnProperty(n)&&Bd(e)},t),t.g={}}bo.prototype.M=function(){bo.X.M.call(this),Hy(this)};bo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function gc(){this.g=!0}gc.prototype.Aa=function(){this.g=!1};function Ck(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function Tk(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function xi(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Ak(t,n)+(s?" "+s:"")})}function Ik(t,e){t.info(function(){return"TIMEOUT: "+e})}gc.prototype.info=function(){};function Ak(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return jd(n)}catch{return e}}var mr={},Ag=null;function zd(){return Ag=Ag||new ot}mr.Pa="serverreachability";function Wy(t){Et.call(this,mr.Pa,t)}pt(Wy,Et);function wo(t){const e=zd();dt(e,new Wy(e))}mr.STAT_EVENT="statevent";function zy(t,e){Et.call(this,mr.STAT_EVENT,t),this.stat=e}pt(zy,Et);function At(t){const e=zd();dt(e,new zy(e,t))}mr.Qa="timingevent";function qy(t,e){Et.call(this,mr.Qa,t),this.size=e}pt(qy,Et);function Zo(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return pe.setTimeout(function(){t()},e)}var qd={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Sk={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Kd(){}Kd.prototype.h=null;function Sg(t){return t.h||(t.h=t.i())}function Rk(){}var ea={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Gd(){Et.call(this,"d")}pt(Gd,Et);function Yd(){Et.call(this,"c")}pt(Yd,Et);var dh;function mc(){}pt(mc,Kd);mc.prototype.g=function(){return new XMLHttpRequest};mc.prototype.i=function(){return{}};dh=new mc;function ta(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new bo(this),this.O=kk,t=oh?125:void 0,this.T=new pc(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Ky}function Ky(){this.i=null,this.g="",this.h=!1}var kk=45e3,fh={},ul={};ie=ta.prototype;ie.setTimeout=function(t){this.O=t};function ph(t,e,n){t.K=1,t.v=vc(Hn(e)),t.s=n,t.P=!0,Gy(t,null)}function Gy(t,e){t.F=Date.now(),na(t),t.A=Hn(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),n0(n.i,"t",s),t.C=0,n=t.l.H,t.h=new Ky,t.g=C0(t.l,n?e:null,!t.s),0<t.N&&(t.L=new wk(yt(t.La,t,t.g),t.N)),jy(t.S,t.g,"readystatechange",t.ib),e=t.H?Py(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),wo(),Ck(t.j,t.u,t.A,t.m,t.U,t.s)}ie.ib=function(t){t=t.target;const e=this.L;e&&Mn(t)==3?e.l():this.La(t)};ie.La=function(t){try{if(t==this.g)e:{const u=Mn(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||oh||this.g&&(this.h.h||this.g.fa()||Pg(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?wo(3):wo(2)),_c(this);var n=this.g.aa();this.Y=n;t:if(Yy(this)){var s=Pg(this.g);t="";var i=s.length,r=Mn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){zs(this),Yr(this);var o="";break t}this.h.i=new pe.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,Tk(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!cl(a)){var c=a;break t}}c=null}if(n=c)xi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,gh(this,n);else{this.i=!1,this.o=3,At(12),zs(this),Yr(this);break e}}this.P?(Xy(this,u,o),oh&&this.i&&u==3&&(jy(this.S,this.T,"tick",this.hb),this.T.start())):(xi(this.j,this.m,o,null),gh(this,o)),u==4&&zs(this),this.i&&!this.I&&(u==4?y0(this.l,this):(this.i=!1,na(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,At(12)):(this.o=0,At(13)),zs(this),Yr(this)}}}catch{}finally{}};function Yy(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Xy(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=Ok(t,n),i==ul){e==4&&(t.o=4,At(14),s=!1),xi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==fh){t.o=4,At(15),xi(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else xi(t.j,t.m,i,null),gh(t,i);Yy(t)&&i!=ul&&i!=fh&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,At(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),nf(e),e.K=!0,At(11))):(xi(t.j,t.m,n,"[Invalid Chunked Response]"),zs(t),Yr(t))}ie.hb=function(){if(this.g){var t=Mn(this.g),e=this.g.fa();this.C<e.length&&(_c(this),Xy(this,t,e),this.i&&t!=4&&na(this))}};function Ok(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?ul:(n=Number(e.substring(n,s)),isNaN(n)?fh:(s+=1,s+n>e.length?ul:(e=e.substr(s,n),t.C=s+n,e)))}ie.cancel=function(){this.I=!0,zs(this)};function na(t){t.V=Date.now()+t.O,Qy(t,t.O)}function Qy(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Zo(yt(t.gb,t),e)}function _c(t){t.B&&(pe.clearTimeout(t.B),t.B=null)}ie.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(Ik(this.j,this.A),this.K!=2&&(wo(),At(17)),zs(this),this.o=2,Yr(this)):Qy(this,this.V-t)};function Yr(t){t.l.G==0||t.I||y0(t.l,t)}function zs(t){_c(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Hd(t.T),Hy(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function gh(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||mh(n.h,t))){if(!t.J&&mh(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)fl(n),wc(n);else break e;tf(n),At(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Zo(yt(n.cb,n),6e3));if(1>=r0(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else qs(n,11)}else if((t.J||n.g==t)&&fl(n),!cl(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.T=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.I=c[1],n.ka=c[2];const u=c[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=c[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const f=t.g;if(f){const m=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var r=s.h;r.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Xd(r,r.h),r.h=null))}if(s.D){const T=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;T&&(s.za=T,We(s.F,s.D,T))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=w0(s,s.H?s.ka:null,s.V),o.J){o0(s.h,o);var a=o,l=s.J;l&&a.setTimeout(l),a.B&&(_c(a),na(a)),s.g=o}else _0(s);0<n.i.length&&Cc(n)}else c[0]!="stop"&&c[0]!="close"||qs(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?qs(n,7):ef(n):c[0]!="noop"&&n.l&&n.l.wa(c),n.A=0)}}wo(4)}catch{}}function Pk(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(uc(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function xk(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(uc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Jy(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(uc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=xk(t),s=Pk(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var Zy=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Nk(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ei(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ei){this.h=e!==void 0?e:t.h,hl(this,t.j),this.s=t.s,this.g=t.g,dl(this,t.m),this.l=t.l,e=t.i;var n=new Co;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Rg(this,n),this.o=t.o}else t&&(n=String(t).match(Zy))?(this.h=!!e,hl(this,n[1]||"",!0),this.s=Br(n[2]||""),this.g=Br(n[3]||"",!0),dl(this,n[4]),this.l=Br(n[5]||"",!0),Rg(this,n[6]||"",!0),this.o=Br(n[7]||"")):(this.h=!!e,this.i=new Co(null,this.h))}ei.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Vr(e,kg,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Vr(e,kg,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Vr(n,n.charAt(0)=="/"?Fk:Mk,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Vr(n,Uk)),t.join("")};function Hn(t){return new ei(t)}function hl(t,e,n){t.j=n?Br(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function dl(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Rg(t,e,n){e instanceof Co?(t.i=e,Bk(t.i,t.h)):(n||(e=Vr(e,Lk)),t.i=new Co(e,t.h))}function We(t,e,n){t.i.set(e,n)}function vc(t){return We(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Br(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Vr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Dk),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Dk(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var kg=/[#\/\?@]/g,Mk=/[#\?:]/g,Fk=/[#\?]/g,Lk=/[#\?@]/g,Uk=/#/g;function Co(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ms(t){t.g||(t.g=new Map,t.h=0,t.i&&Nk(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}ie=Co.prototype;ie.add=function(t,e){Ms(this),this.i=null,t=_r(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function e0(t,e){Ms(t),e=_r(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function t0(t,e){return Ms(t),e=_r(t,e),t.g.has(e)}ie.forEach=function(t,e){Ms(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};ie.oa=function(){Ms(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};ie.W=function(t){Ms(this);let e=[];if(typeof t=="string")t0(this,t)&&(e=e.concat(this.g.get(_r(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};ie.set=function(t,e){return Ms(this),this.i=null,t=_r(this,t),t0(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};ie.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function n0(t,e,n){e0(t,e),0<n.length&&(t.i=null,t.g.set(_r(t,e),Md(n)),t.h+=n.length)}ie.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function _r(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Bk(t,e){e&&!t.j&&(Ms(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(e0(this,s),n0(this,i,n))},t)),t.j=e}var Vk=class{constructor(t,e){this.h=t,this.g=e}};function s0(t){this.l=t||$k,pe.PerformanceNavigationTiming?(t=pe.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(pe.g&&pe.g.Ga&&pe.g.Ga()&&pe.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var $k=10;function i0(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function r0(t){return t.h?1:t.g?t.g.size:0}function mh(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Xd(t,e){t.g?t.g.add(e):t.h=e}function o0(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}s0.prototype.cancel=function(){if(this.i=a0(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function a0(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Md(t.i)}function Qd(){}Qd.prototype.stringify=function(t){return pe.JSON.stringify(t,void 0)};Qd.prototype.parse=function(t){return pe.JSON.parse(t,void 0)};function jk(){this.g=new Qd}function Hk(t,e,n){const s=n||"";try{Jy(t,function(i,r){let o=i;Qo(i)&&(o=jd(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function Wk(t,e){const n=new gc;if(pe.Image){const s=new Image;s.onload=Aa(Ra,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Aa(Ra,n,s,"TestLoadImage: error",!1,e),s.onabort=Aa(Ra,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Aa(Ra,n,s,"TestLoadImage: timeout",!1,e),pe.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Ra(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function yc(t){this.l=t.ac||null,this.j=t.jb||!1}pt(yc,Kd);yc.prototype.g=function(){return new Ec(this.l,this.j)};yc.prototype.i=function(t){return function(){return t}}({});function Ec(t,e){ot.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Jd,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}pt(Ec,ot);var Jd=0;ie=Ec.prototype;ie.open=function(t,e){if(this.readyState!=Jd)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,To(this)};ie.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||pe).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};ie.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,sa(this)),this.readyState=Jd};ie.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,To(this)),this.g&&(this.readyState=3,To(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof pe.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;l0(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function l0(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}ie.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?sa(this):To(this),this.readyState==3&&l0(this)}};ie.Va=function(t){this.g&&(this.response=this.responseText=t,sa(this))};ie.Ua=function(t){this.g&&(this.response=t,sa(this))};ie.ga=function(){this.g&&sa(this)};function sa(t){t.readyState=4,t.l=null,t.j=null,t.A=null,To(t)}ie.setRequestHeader=function(t,e){this.v.append(t,e)};ie.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};ie.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function To(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ec.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var zk=pe.JSON.parse;function et(t){ot.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=c0,this.K=this.L=!1}pt(et,ot);var c0="",qk=/^https?$/i,Kk=["POST","PUT"];ie=et.prototype;ie.Ka=function(t){this.L=t};ie.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():dh.g(),this.C=this.u?Sg(this.u):Sg(dh),this.g.onreadystatechange=yt(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){Og(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=pe.FormData&&t instanceof pe.FormData,!(0<=Sy(Kk,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{d0(this),0<this.B&&((this.K=Gk(this.g))?(this.g.timeout=this.B,this.g.ontimeout=yt(this.qa,this)):this.A=Wd(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Og(this,r)}};function Gk(t){return yo&&uk()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}ie.qa=function(){typeof Dd<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,dt(this,"timeout"),this.abort(8))};function Og(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,u0(t),bc(t)}function u0(t){t.D||(t.D=!0,dt(t,"complete"),dt(t,"error"))}ie.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,dt(this,"complete"),dt(this,"abort"),bc(this))};ie.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),bc(this,!0)),et.X.M.call(this)};ie.Ha=function(){this.s||(this.F||this.v||this.l?h0(this):this.fb())};ie.fb=function(){h0(this)};function h0(t){if(t.h&&typeof Dd<"u"&&(!t.C[1]||Mn(t)!=4||t.aa()!=2)){if(t.v&&Mn(t)==4)Wd(t.Ha,0,t);else if(dt(t,"readystatechange"),Mn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.H).match(Zy)[1]||null;if(!i&&pe.self&&pe.self.location){var r=pe.self.location.protocol;i=r.substr(0,r.length-1)}s=!qk.test(i?i.toLowerCase():"")}n=s}if(n)dt(t,"complete"),dt(t,"success");else{t.m=6;try{var o=2<Mn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",u0(t)}}finally{bc(t)}}}}function bc(t,e){if(t.g){d0(t);const n=t.g,s=t.C[0]?ll:null;t.g=null,t.C=null,e||dt(t,"ready");try{n.onreadystatechange=s}catch{}}}function d0(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(pe.clearTimeout(t.A),t.A=null)}function Mn(t){return t.g?t.g.readyState:0}ie.aa=function(){try{return 2<Mn(this)?this.g.status:-1}catch{return-1}};ie.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};ie.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),zk(e)}};function Pg(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case c0:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}ie.Ea=function(){return this.m};ie.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function f0(t){let e="";return Ld(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Zd(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=f0(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):We(t,e,n))}function Sr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function p0(t){this.Ca=0,this.i=[],this.j=new gc,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Sr("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Sr("baseRetryDelayMs",5e3,t),this.bb=Sr("retryDelaySeedMs",1e4,t),this.$a=Sr("forwardChannelMaxRetries",2,t),this.ta=Sr("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new s0(t&&t.concurrentRequestLimit),this.Fa=new jk,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}ie=p0.prototype;ie.ma=8;ie.G=1;function ef(t){if(g0(t),t.G==3){var e=t.U++,n=Hn(t.F);We(n,"SID",t.I),We(n,"RID",e),We(n,"TYPE","terminate"),ia(t,n),e=new ta(t,t.j,e,void 0),e.K=2,e.v=vc(Hn(n)),n=!1,pe.navigator&&pe.navigator.sendBeacon&&(n=pe.navigator.sendBeacon(e.v.toString(),"")),!n&&pe.Image&&(new Image().src=e.v,n=!0),n||(e.g=C0(e.l,null),e.g.da(e.v)),e.F=Date.now(),na(e)}b0(t)}function wc(t){t.g&&(nf(t),t.g.cancel(),t.g=null)}function g0(t){wc(t),t.u&&(pe.clearTimeout(t.u),t.u=null),fl(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&pe.clearTimeout(t.m),t.m=null)}function Cc(t){i0(t.h)||t.m||(t.m=!0,By(t.Ja,t),t.C=0)}function Yk(t,e){return r0(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Zo(yt(t.Ja,t,e),E0(t,t.C)),t.C++,!0)}ie.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new ta(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=Py(r),xy(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=m0(this,i,e),n=Hn(this.F),We(n,"RID",t),We(n,"CVER",22),this.D&&We(n,"X-HTTP-Session-Id",this.D),ia(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(f0(r)))+"&"+e:this.o&&Zd(n,this.o,r)),Xd(this.h,i),this.Ya&&We(n,"TYPE","init"),this.O?(We(n,"$req",e),We(n,"SID","null"),i.Z=!0,ph(i,n,null)):ph(i,n,e),this.G=2}}else this.G==3&&(t?xg(this,t):this.i.length==0||i0(this.h)||xg(this))};function xg(t,e){var n;e?n=e.m:n=t.U++;const s=Hn(t.F);We(s,"SID",t.I),We(s,"RID",n),We(s,"AID",t.T),ia(t,s),t.o&&t.s&&Zd(s,t.o,t.s),n=new ta(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=m0(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Xd(t.h,n),ph(n,s,e)}function ia(t,e){t.ia&&Ld(t.ia,function(n,s){We(e,s,n)}),t.l&&Jy({},function(n,s){We(e,s,n)})}function m0(t,e,n){n=Math.min(t.i.length,n);var s=t.l?yt(t.l.Ra,t.l,t):null;e:{var i=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=i[l].h;const u=i[l].g;if(c-=r,0>c)r=Math.max(0,i[l].h-100),a=!1;else try{Hk(u,o,"req"+c+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function _0(t){t.g||t.u||(t.Z=1,By(t.Ia,t),t.A=0)}function tf(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Zo(yt(t.Ia,t),E0(t,t.A)),t.A++,!0)}ie.Ia=function(){if(this.u=null,v0(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Zo(yt(this.eb,this),t)}};ie.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,At(10),wc(this),v0(this))};function nf(t){t.B!=null&&(pe.clearTimeout(t.B),t.B=null)}function v0(t){t.g=new ta(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Hn(t.sa);We(e,"RID","rpc"),We(e,"SID",t.I),We(e,"CI",t.L?"0":"1"),We(e,"AID",t.T),We(e,"TYPE","xmlhttp"),ia(t,e),t.o&&t.s&&Zd(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=vc(Hn(e)),n.s=null,n.P=!0,Gy(n,t)}ie.cb=function(){this.v!=null&&(this.v=null,wc(this),tf(this),At(19))};function fl(t){t.v!=null&&(pe.clearTimeout(t.v),t.v=null)}function y0(t,e){var n=null;if(t.g==e){fl(t),nf(t),t.g=null;var s=2}else if(mh(t.h,e))n=e.D,o0(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=zd(),dt(s,new qy(s,n)),Cc(t)}else _0(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(s==1&&Yk(t,e)||s==2&&tf(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:qs(t,5);break;case 4:qs(t,10);break;case 3:qs(t,6);break;default:qs(t,2)}}}function E0(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function qs(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=yt(t.kb,t);n||(n=new ei("//www.google.com/images/cleardot.gif"),pe.location&&pe.location.protocol=="http"||hl(n,"https"),vc(n)),Wk(n.toString(),s)}else At(2);t.G=0,t.l&&t.l.va(e),b0(t),g0(t)}ie.kb=function(t){t?(this.j.info("Successfully pinged google.com"),At(2)):(this.j.info("Failed to ping google.com"),At(1))};function b0(t){if(t.G=0,t.la=[],t.l){const e=a0(t.h);(e.length!=0||t.i.length!=0)&&(wg(t.la,e),wg(t.la,t.i),t.h.i.length=0,Md(t.i),t.i.length=0),t.l.ua()}}function w0(t,e,n){var s=n instanceof ei?Hn(n):new ei(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),dl(s,s.m);else{var i=pe.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new ei(null,void 0);s&&hl(r,s),e&&(r.g=e),i&&dl(r,i),n&&(r.l=n),s=r}return n=t.D,e=t.za,n&&e&&We(s,n,e),We(s,"VER",t.ma),ia(t,s),s}function C0(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new et(new yc({jb:!0})):new et(t.ra),e.Ka(t.H),e}function T0(){}ie=T0.prototype;ie.xa=function(){};ie.wa=function(){};ie.va=function(){};ie.ua=function(){};ie.Ra=function(){};function Zt(t,e){ot.call(this),this.g=new p0(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!cl(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!cl(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new vr(this)}pt(Zt,ot);Zt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;At(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=w0(t,null,t.V),Cc(t)};Zt.prototype.close=function(){ef(this.g)};Zt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=jd(t),t=n);e.i.push(new Vk(e.ab++,t)),e.G==3&&Cc(e)};Zt.prototype.M=function(){this.g.l=null,delete this.j,ef(this.g),delete this.g,Zt.X.M.call(this)};function I0(t){Gd.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}pt(I0,Gd);function A0(){Yd.call(this),this.status=1}pt(A0,Yd);function vr(t){this.g=t}pt(vr,T0);vr.prototype.xa=function(){dt(this.g,"a")};vr.prototype.wa=function(t){dt(this.g,new I0(t))};vr.prototype.va=function(t){dt(this.g,new A0)};vr.prototype.ua=function(){dt(this.g,"b")};Zt.prototype.send=Zt.prototype.u;Zt.prototype.open=Zt.prototype.m;Zt.prototype.close=Zt.prototype.close;qd.NO_ERROR=0;qd.TIMEOUT=8;qd.HTTP_ERROR=6;Sk.COMPLETE="complete";Rk.EventType=ea;ea.OPEN="a";ea.CLOSE="b";ea.ERROR="c";ea.MESSAGE="d";ot.prototype.listen=ot.prototype.N;et.prototype.listenOnce=et.prototype.O;et.prototype.getLastError=et.prototype.Oa;et.prototype.getLastErrorCode=et.prototype.Ea;et.prototype.getStatus=et.prototype.aa;et.prototype.getResponseJson=et.prototype.Sa;et.prototype.getResponseText=et.prototype.fa;et.prototype.send=et.prototype.da;et.prototype.setWithCredentials=et.prototype.Ka;const Ng="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}gt.UNAUTHENTICATED=new gt(null),gt.GOOGLE_CREDENTIALS=new gt("google-credentials-uid"),gt.FIRST_PARTY=new gt("first-party-uid"),gt.MOCK_USER=new gt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ra="9.19.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zi=new rc("@firebase/firestore");function jt(t,...e){if(Zi.logLevel<=Re.DEBUG){const n=e.map(rf);Zi.debug(`Firestore (${ra}): ${t}`,...n)}}function sf(t,...e){if(Zi.logLevel<=Re.ERROR){const n=e.map(rf);Zi.error(`Firestore (${ra}): ${t}`,...n)}}function Xk(t,...e){if(Zi.logLevel<=Re.WARN){const n=e.map(rf);Zi.warn(`Firestore (${ra}): ${t}`,...n)}}function rf(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function of(t="Unexpected state"){const e=`FIRESTORE (${ra}) INTERNAL ASSERTION FAILED: `+t;throw sf(e),new Error(e)}function _h(t,e){t||of()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Kt extends An{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Qk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(gt.UNAUTHENTICATED))}shutdown(){}}class Jk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Zk{constructor(e){this.t=e,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let r=new ji;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new ji,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{jt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(jt("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new ji)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(jt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(_h(typeof s.accessToken=="string"),new S0(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return _h(e===null||typeof e=="string"),new gt(e)}}class eO{constructor(e,n,s){this.h=e,this.l=n,this.m=s,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class tO{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new eO(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(gt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class nO{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class sO{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const s=r=>{r.error!=null&&jt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.T;return this.T=r.token,jt("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{jt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.I.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.I.getImmediate({optional:!0});r?i(r):jt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(_h(typeof n.token=="string"),this.T=n.token,new nO(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iO(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rO{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=iO(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function R0(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oO{constructor(e,n,s,i,r,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class pl{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new pl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof pl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Dg,we;(we=Dg||(Dg={}))[we.OK=0]="OK",we[we.CANCELLED=1]="CANCELLED",we[we.UNKNOWN=2]="UNKNOWN",we[we.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",we[we.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",we[we.NOT_FOUND=5]="NOT_FOUND",we[we.ALREADY_EXISTS=6]="ALREADY_EXISTS",we[we.PERMISSION_DENIED=7]="PERMISSION_DENIED",we[we.UNAUTHENTICATED=16]="UNAUTHENTICATED",we[we.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",we[we.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",we[we.ABORTED=10]="ABORTED",we[we.OUT_OF_RANGE=11]="OUT_OF_RANGE",we[we.UNIMPLEMENTED=12]="UNIMPLEMENTED",we[we.INTERNAL=13]="INTERNAL",we[we.UNAVAILABLE=14]="UNAVAILABLE",we[we.DATA_LOSS=15]="DATA_LOSS";function du(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aO{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Ws=e,this.timerId=n,this._o=s,this.mo=i,this.yo=r,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),s=Math.max(0,Date.now()-this.To),i=Math.max(0,n-s);i>0&&jt("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,i,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new ji,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new af(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Kt(qt.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function lO(t,e){if(sf("AsyncQueue",`${e}: ${t}`),R0(t))return new Kt(qt.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cO{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=gt.UNAUTHENTICATED,this.clientId=rO.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{jt("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(jt("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Kt(qt.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ji;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=lO(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mg=new Map;function uO(t,e,n,s){if(e===!0&&s===!0)throw new Kt(qt.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function hO(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":of()}function dO(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Kt(qt.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=hO(t);throw new Kt(qt.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new Kt(qt.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Kt(qt.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,uO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k0{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Fg({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Kt(qt.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new Kt(qt.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Fg(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Qk;switch(n.type){case"firstParty":return new tO(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new Kt(qt.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Mg.get(e);n&&(jt("ComponentProvider","Removing Datastore"),Mg.delete(e),n.terminate())}(this),Promise.resolve()}}function fO(t,e,n,s={}){var i;const r=(t=dO(t,k0))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&Xk("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=gt.MOCK_USER;else{o=bd(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=s.mockUserToken.sub||s.mockUserToken.user_id;if(!l)throw new Kt(qt.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new gt(l)}t._authCredentials=new Jk(new S0(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pO{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new aO(this,"async_queue_retry"),this.qc=()=>{const n=du();n&&jt("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const e=du();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const n=du();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new ji;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!R0(e))throw e;jt("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const n=this.Nc.then(()=>(this.Fc=!0,e().catch(s=>{this.Mc=s,this.Fc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw sf("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Fc=!1,s))));return this.Nc=n,n}enqueueAfterDelay(e,n,s){this.Uc(),this.Lc.indexOf(e)>-1&&(n=0);const i=af.createAndSchedule(this,e,n,s,r=>this.Qc(r));return this.$c.push(i),i}Uc(){this.Mc&&of()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}class gO extends k0{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new pO,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||_O(this),this._firestoreClient.terminate()}}function mO(t,e){const n=typeof t=="object"?t:oc(),s=typeof t=="string"?t:e||"(default)",i=Ho(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=Ed("firestore");r&&fO(i,...r)}return i}function _O(t){var e,n,s;const i=t._freezeSettings(),r=function(o,a,l,c){return new oO(o,a,l,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new cO(t._authCredentials,t._appCheckCredentials,t._queue,r),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=i.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}(function(t,e=!0){(function(n){ra=n})(vi),Os(new $n("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new gO(new Zk(n.getProvider("auth-internal")),new sO(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new Kt(qt.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new pl(a.options.projectId,l)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Jt(Ng,"3.10.0",t),Jt(Ng,"3.10.0","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O0="firebasestorage.googleapis.com",P0="storageBucket",vO=2*60*1e3,yO=10*60*1e3,EO=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke extends An{constructor(e,n,s=0){super(fu(e),`Firebase Storage: ${n} (${fu(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ke.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return fu(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var He;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(He||(He={}));function fu(t){return"storage/"+t}function lf(){const t="An unknown error occurred, please check the error payload for server response.";return new Ke(He.UNKNOWN,t)}function bO(t){return new Ke(He.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function wO(t){return new Ke(He.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function CO(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ke(He.UNAUTHENTICATED,t)}function TO(){return new Ke(He.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function IO(t){return new Ke(He.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function x0(){return new Ke(He.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function N0(){return new Ke(He.CANCELED,"User canceled the upload/download.")}function AO(t){return new Ke(He.INVALID_URL,"Invalid URL '"+t+"'.")}function SO(t){return new Ke(He.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function RO(){return new Ke(He.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+P0+"' property when initializing the app?")}function D0(){return new Ke(He.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function kO(){return new Ke(He.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function OO(){return new Ke(He.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function PO(t){return new Ke(He.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function vh(t){return new Ke(He.INVALID_ARGUMENT,t)}function M0(){return new Ke(He.APP_DELETED,"The Firebase app was deleted.")}function xO(t){return new Ke(He.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Xr(t,e){return new Ke(He.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Rr(t){throw new Ke(He.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=Ht.makeFromUrl(e,n)}catch{return new Ht(e,"")}if(s.path==="")return s;throw SO(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(S){S.path.charAt(S.path.length-1)==="/"&&(S.path_=S.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(S){S.path_=decodeURIComponent(S.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${i}/o${d}`,"i"),m={bucket:1,path:3},T=n===O0?"(?:storage.googleapis.com|storage.cloud.google.com)":n,P="([^?#]*)",v=new RegExp(`^https?://${T}/${i}/${P}`,"i"),b=[{regex:a,indices:l,postModify:r},{regex:f,indices:m,postModify:c},{regex:v,indices:{bucket:1,path:2},postModify:c}];for(let S=0;S<b.length;S++){const w=b[S],A=w.regex.exec(e);if(A){const I=A[w.indices.bucket];let E=A[w.indices.path];E||(E=""),s=new Ht(I,E),w.postModify(s);break}}if(s==null)throw AO(e);return s}}class NO{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DO(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...P){c||(c=!0,e.apply(null,P))}function h(P){i=setTimeout(()=>{i=null,t(f,l())},P)}function d(){r&&clearTimeout(r)}function f(P,...v){if(c){d();return}if(P){d(),u.call(null,P,...v);return}if(l()||o){d(),u.call(null,P,...v);return}s<64&&(s*=2);let b;a===1?(a=2,b=0):b=(s+Math.random())*1e3,h(b)}let m=!1;function T(P){m||(m=!0,d(),!c&&(i!==null?(P||(a=2),clearTimeout(i),h(0)):P||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,T(!0)},n),T}function MO(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FO(t){return t!==void 0}function LO(t){return typeof t=="function"}function UO(t){return typeof t=="object"&&!Array.isArray(t)}function Tc(t){return typeof t=="string"||t instanceof String}function Lg(t){return cf()&&t instanceof Blob}function cf(){return typeof Blob<"u"&&!SI()}function Ug(t,e,n,s){if(s<e)throw vh(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw vh(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oa(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function F0(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ti;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ti||(ti={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L0(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BO{constructor(e,n,s,i,r,o,a,l,c,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,m)=>{this.resolve_=f,this.reject_=m,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new ka(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===ti.NO_ERROR,l=r.getStatus();if(!a||L0(l,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===ti.ABORT;s(!1,new ka(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;s(!0,new ka(c,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());FO(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=lf();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?M0():N0();o(l)}else{const l=x0();o(l)}};this.canceled_?n(!1,new ka(!1,null,!0)):this.backoffId_=DO(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&MO(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ka{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function VO(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function $O(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function jO(t,e){e&&(t["X-Firebase-GMPID"]=e)}function HO(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function WO(t,e,n,s,i,r,o=!0){const a=F0(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return jO(c,e),VO(c,n),$O(c,r),HO(c,s),new BO(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zO(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function qO(...t){const e=zO();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(cf())return new Blob(t);throw new Ke(He.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function KO(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GO(t){if(typeof atob>"u")throw PO("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class pu{constructor(e,n){this.data=e,this.contentType=n||null}}function YO(t,e){switch(t){case yn.RAW:return new pu(U0(e));case yn.BASE64:case yn.BASE64URL:return new pu(B0(t,e));case yn.DATA_URL:return new pu(QO(e),JO(e))}throw lf()}function U0(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const r=s,o=t.charCodeAt(++n);s=65536|(r&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function XO(t){let e;try{e=decodeURIComponent(t)}catch{throw Xr(yn.DATA_URL,"Malformed data URL.")}return U0(e)}function B0(t,e){switch(t){case yn.BASE64:{const i=e.indexOf("-")!==-1,r=e.indexOf("_")!==-1;if(i||r)throw Xr(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case yn.BASE64URL:{const i=e.indexOf("+")!==-1,r=e.indexOf("/")!==-1;if(i||r)throw Xr(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=GO(e)}catch(i){throw i.message.includes("polyfill")?i:Xr(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let i=0;i<n.length;i++)s[i]=n.charCodeAt(i);return s}class V0{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Xr(yn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=ZO(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function QO(t){const e=new V0(t);return e.base64?B0(yn.BASE64,e.rest):XO(e.rest)}function JO(t){return new V0(t).contentType}function ZO(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e,n){let s=0,i="";Lg(e)?(this.data_=e,s=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Lg(this.data_)){const s=this.data_,i=KO(s,e,n);return i===null?null:new ps(i)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new ps(s,!0)}}static getBlob(...e){if(cf()){const n=e.map(s=>s instanceof ps?s.data_:s);return new ps(qO.apply(null,n))}else{const n=e.map(o=>Tc(o)?YO(yn.RAW,o).data:o.data_);let s=0;n.forEach(o=>{s+=o.byteLength});const i=new Uint8Array(s);let r=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[r++]=o[a]}),new ps(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $0(t){let e;try{e=JSON.parse(t)}catch{return null}return UO(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eP(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function tP(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function j0(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nP(t,e){return e}class Ct{constructor(e,n,s,i){this.server=e,this.local=n||e,this.writable=!!s,this.xform=i||nP}}let Oa=null;function sP(t){return!Tc(t)||t.length<2?t:j0(t)}function H0(){if(Oa)return Oa;const t=[];t.push(new Ct("bucket")),t.push(new Ct("generation")),t.push(new Ct("metageneration")),t.push(new Ct("name","fullPath",!0));function e(r,o){return sP(o)}const n=new Ct("name");n.xform=e,t.push(n);function s(r,o){return o!==void 0?Number(o):o}const i=new Ct("size");return i.xform=s,t.push(i),t.push(new Ct("timeCreated")),t.push(new Ct("updated")),t.push(new Ct("md5Hash",null,!0)),t.push(new Ct("cacheControl",null,!0)),t.push(new Ct("contentDisposition",null,!0)),t.push(new Ct("contentEncoding",null,!0)),t.push(new Ct("contentLanguage",null,!0)),t.push(new Ct("contentType",null,!0)),t.push(new Ct("metadata","customMetadata",!0)),Oa=t,Oa}function iP(t,e){function n(){const s=t.bucket,i=t.fullPath,r=new Ht(s,i);return e._makeStorageReference(r)}Object.defineProperty(t,"ref",{get:n})}function rP(t,e,n){const s={};s.type="file";const i=n.length;for(let r=0;r<i;r++){const o=n[r];s[o.local]=o.xform(s,e[o.server])}return iP(s,t),s}function W0(t,e,n){const s=$0(e);return s===null?null:rP(t,s,n)}function oP(t,e,n,s){const i=$0(e);if(i===null||!Tc(i.downloadTokens))return null;const r=i.downloadTokens;if(r.length===0)return null;const o=encodeURIComponent;return r.split(",").map(c=>{const u=t.bucket,h=t.fullPath,d="/b/"+o(u)+"/o/"+o(h),f=oa(d,n,s),m=F0({alt:"media",token:c});return f+m})[0]}function z0(t,e){const n={},s=e.length;for(let i=0;i<s;i++){const r=e[i];r.writable&&(n[r.server]=t[r.local])}return JSON.stringify(n)}class yr{constructor(e,n,s,i){this.url=e,this.method=n,this.handler=s,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(t){if(!t)throw lf()}function uf(t,e){function n(s,i){const r=W0(t,i,e);return Un(r!==null),r}return n}function aP(t,e){function n(s,i){const r=W0(t,i,e);return Un(r!==null),oP(r,i,t.host,t._protocol)}return n}function aa(t){function e(n,s){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=TO():i=CO():n.getStatus()===402?i=wO(t.bucket):n.getStatus()===403?i=IO(t.path):i=s,i.status=n.getStatus(),i.serverResponse=s.serverResponse,i}return e}function q0(t){const e=aa(t);function n(s,i){let r=e(s,i);return s.getStatus()===404&&(r=bO(t.path)),r.serverResponse=i.serverResponse,r}return n}function lP(t,e,n){const s=e.fullServerUrl(),i=oa(s,t.host,t._protocol),r="GET",o=t.maxOperationRetryTime,a=new yr(i,r,uf(t,n),o);return a.errorHandler=q0(e),a}function cP(t,e,n){const s=e.fullServerUrl(),i=oa(s,t.host,t._protocol),r="GET",o=t.maxOperationRetryTime,a=new yr(i,r,aP(t,n),o);return a.errorHandler=q0(e),a}function uP(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function K0(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=uP(null,e)),s}function hP(t,e,n,s,i){const r=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let b="";for(let S=0;S<2;S++)b=b+Math.random().toString().slice(2);return b}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=K0(e,s,i),u=z0(c,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,d=`\r
--`+l+"--",f=ps.getBlob(h,s,d);if(f===null)throw D0();const m={name:c.fullPath},T=oa(r,t.host,t._protocol),P="POST",v=t.maxUploadRetryTime,g=new yr(T,P,uf(t,n),v);return g.urlParams=m,g.headers=o,g.body=f.uploadData(),g.errorHandler=aa(e),g}class gl{constructor(e,n,s,i){this.current=e,this.total=n,this.finalized=!!s,this.metadata=i||null}}function hf(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{Un(!1)}return Un(!!n&&(e||["active"]).indexOf(n)!==-1),n}function dP(t,e,n,s,i){const r=e.bucketOnlyServerUrl(),o=K0(e,s,i),a={name:o.fullPath},l=oa(r,t.host,t._protocol),c="POST",u={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${s.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=z0(o,n),d=t.maxUploadRetryTime;function f(T){hf(T);let P;try{P=T.getResponseHeader("X-Goog-Upload-URL")}catch{Un(!1)}return Un(Tc(P)),P}const m=new yr(l,c,f,d);return m.urlParams=a,m.headers=u,m.body=h,m.errorHandler=aa(e),m}function fP(t,e,n,s){const i={"X-Goog-Upload-Command":"query"};function r(c){const u=hf(c,["active","final"]);let h=null;try{h=c.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Un(!1)}h||Un(!1);const d=Number(h);return Un(!isNaN(d)),new gl(d,s.size(),u==="final")}const o="POST",a=t.maxUploadRetryTime,l=new yr(n,o,r,a);return l.headers=i,l.errorHandler=aa(e),l}const Bg=256*1024;function pP(t,e,n,s,i,r,o,a){const l=new gl(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=s.size()),s.size()!==l.total)throw kO();const c=l.total-l.current;let u=c;i>0&&(u=Math.min(u,i));const h=l.current,d=h+u;let f="";u===0?f="finalize":c===u?f="upload, finalize":f="upload";const m={"X-Goog-Upload-Command":f,"X-Goog-Upload-Offset":`${l.current}`},T=s.slice(h,d);if(T===null)throw D0();function P(S,w){const A=hf(S,["active","final"]),I=l.current+u,E=s.size();let N;return A==="final"?N=uf(e,r)(S,w):N=null,new gl(I,E,A==="final",N)}const v="POST",g=e.maxUploadRetryTime,b=new yr(n,v,P,g);return b.headers=m,b.body=T.uploadData(),b.progressCallback=a||null,b.errorHandler=aa(t),b}const kt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function gu(t){switch(t){case"running":case"pausing":case"canceling":return kt.RUNNING;case"paused":return kt.PAUSED;case"success":return kt.SUCCESS;case"canceled":return kt.CANCELED;case"error":return kt.ERROR;default:return kt.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gP{constructor(e,n,s){if(LO(e)||n!=null||s!=null)this.next=e,this.error=n??void 0,this.complete=s??void 0;else{const r=e;this.next=r.next,this.error=r.error,this.complete=r.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class mP{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ti.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ti.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ti.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,i){if(this.sent_)throw Rr("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const r in i)i.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,i[r].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Rr("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Rr("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Rr("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Rr("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class _P extends mP{initXhr(){this.xhr_.responseType="text"}}function ki(){return new _P}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vP{constructor(e,n,s=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=s,this._mappings=H0(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(He.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const r=this.isExponentialBackoffExpired();if(L0(i.status,[]))if(r)i=x0();else{this.sleepTime=Math.max(this.sleepTime*2,EO),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(He.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,r)=>{this._resolve=i,this._reject=r,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,s])=>{switch(this._state){case"running":e(n,s);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const s=dP(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(s,ki,e,n);this._request=i,i.getPromise().then(r=>{this._request=void 0,this._uploadUrl=r,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,s)=>{const i=fP(this._ref.storage,this._ref._location,e,this._blob),r=this._ref.storage._makeRequest(i,ki,n,s);this._request=r,r.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=Bg*this._chunkMultiplier,n=new gl(this._transferred,this._blob.size()),s=this._uploadUrl;this._resolveToken((i,r)=>{let o;try{o=pP(this._ref._location,this._ref.storage,s,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const a=this._ref.storage._makeRequest(o,ki,i,r,!1);this._request=a,a.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Bg*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const s=lP(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(s,ki,e,n);this._request=i,i.getPromise().then(r=>{this._request=void 0,this._metadata=r,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const s=hP(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(s,ki,e,n);this._request=i,i.getPromise().then(r=>{this._request=void 0,this._metadata=r,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=N0(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=gu(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,s,i){const r=new gP(n||void 0,s||void 0,i||void 0);return this._addObserver(r),()=>{this._removeObserver(r)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(gu(this._state)){case kt.SUCCESS:Ti(this._resolve.bind(null,this.snapshot))();break;case kt.CANCELED:case kt.ERROR:const n=this._reject;Ti(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(gu(this._state)){case kt.RUNNING:case kt.PAUSED:e.next&&Ti(e.next.bind(e,this.snapshot))();break;case kt.SUCCESS:e.complete&&Ti(e.complete.bind(e))();break;case kt.CANCELED:case kt.ERROR:e.error&&Ti(e.error.bind(e,this._error))();break;default:e.error&&Ti(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ic=class yh{constructor(e,n){this._service=e,n instanceof Ht?this._location=n:this._location=Ht.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new yh(e,n)}get root(){const e=new Ht(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return j0(this._location.path)}get storage(){return this._service}get parent(){const e=eP(this._location.path);if(e===null)return null;const n=new Ht(this._location.bucket,e);return new yh(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw xO(e)}};function yP(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new vP(t,new ps(e),n)}function EP(t){t._throwIfRoot("getDownloadURL");const e=cP(t.storage,t._location,H0());return t.storage.makeRequestWithTokens(e,ki).then(n=>{if(n===null)throw OO();return n})}function bP(t,e){const n=tP(t._location.path,e),s=new Ht(t._location.bucket,n);return new Ic(t.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wP(t){return/^[A-Za-z]+:\/\//.test(t)}function CP(t,e){return new Ic(t,e)}function G0(t,e){if(t instanceof df){const n=t;if(n._bucket==null)throw RO();const s=new Ic(n,n._bucket);return e!=null?G0(s,e):s}else return e!==void 0?bP(t,e):t}function TP(t,e){if(e&&wP(e)){if(t instanceof df)return CP(t,e);throw vh("To use ref(service, url), the first argument must be a Storage instance.")}else return G0(t,e)}function Vg(t,e){const n=e==null?void 0:e[P0];return n==null?null:Ht.makeFromBucketSpec(n,t)}function IP(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=s;i&&(t._overrideAuthToken=typeof i=="string"?i:bd(i,t.app.options.projectId))}class df{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=O0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=vO,this._maxUploadRetryTime=yO,this._requests=new Set,i!=null?this._bucket=Ht.makeFromBucketSpec(i,this._host):this._bucket=Vg(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ht.makeFromBucketSpec(this._url,e):this._bucket=Vg(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Ug("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Ug("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ic(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new NO(M0());{const o=WO(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const $g="@firebase/storage",jg="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y0="storage";function AP(t,e,n){return t=at(t),yP(t,e,n)}function SP(t){return t=at(t),EP(t)}function RP(t,e){return t=at(t),TP(t,e)}function kP(t=oc(),e){t=at(t);const s=Ho(t,Y0).getImmediate({identifier:e}),i=Ed("storage");return i&&OP(s,...i),s}function OP(t,e,n,s={}){IP(t,e,n,s)}function PP(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new df(n,s,i,e,vi)}function xP(){Os(new $n(Y0,PP,"PUBLIC").setMultipleInstances(!0)),Jt($g,jg,""),Jt($g,jg,"esm2017")}xP();const Hg="@firebase/database",Wg="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let X0="";function NP(t){X0=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DP{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),rt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:po(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MP{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Xn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q0=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new DP(e)}}catch{}return new MP},Ks=Q0("localStorage"),Eh=Q0("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hi=new rc("@firebase/database"),FP=function(){let t=1;return function(){return t++}}(),J0=function(t){const e=$I(t),n=new LI;n.update(e);const s=n.digest();return yd.encodeByteArray(s)},la=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=la.apply(null,s):typeof s=="object"?e+=rt(s):e+=s,e+=" "}return e};let ni=null,zg=!0;const LP=function(t,e){H(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Hi.logLevel=Re.VERBOSE,ni=Hi.log.bind(Hi),e&&Eh.set("logging_enabled",!0)):typeof t=="function"?ni=t:(ni=null,Eh.remove("logging_enabled"))},mt=function(...t){if(zg===!0&&(zg=!1,ni===null&&Eh.get("logging_enabled")===!0&&LP(!0)),ni){const e=la.apply(null,t);ni(e)}},ca=function(t){return function(...e){mt(t,...e)}},bh=function(...t){const e="FIREBASE INTERNAL ERROR: "+la(...t);Hi.error(e)},Wn=function(...t){const e=`FIREBASE FATAL ERROR: ${la(...t)}`;throw Hi.error(e),new Error(e)},Mt=function(...t){const e="FIREBASE WARNING: "+la(...t);Hi.warn(e)},UP=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Mt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Z0=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},BP=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},er="[MIN_NAME]",hi="[MAX_NAME]",Er=function(t,e){if(t===e)return 0;if(t===er||e===hi)return-1;if(e===er||t===hi)return 1;{const n=qg(t),s=qg(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},VP=function(t,e){return t===e?0:t<e?-1:1},kr=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+rt(e))},ff=function(t){if(typeof t!="object"||t===null)return rt(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=rt(e[s]),n+=":",n+=ff(t[e[s]]);return n+="}",n},eE=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Lt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const tE=function(t){H(!Z0(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},$P=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},jP=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function HP(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const WP=new RegExp("^-?(0*)\\d{1,10}$"),zP=-2147483648,qP=2147483647,qg=function(t){if(WP.test(t)){const e=Number(t);if(e>=zP&&e<=qP)return e}return null},br=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Mt("Exception was thrown by user callback.",n),e},Math.floor(0))}},KP=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Qr=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GP{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Mt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YP{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(mt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Mt(e)}}class Wi{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Wi.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pf="5",nE="v",sE="s",iE="r",rE="f",oE=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,aE="ls",lE="p",wh="ac",cE="websocket",uE="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ks.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ks.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function XP(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function dE(t,e,n){H(typeof e=="string","typeof type must == string"),H(typeof n=="object","typeof params must == object");let s;if(e===cE)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===uE)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);XP(t)&&(n.ns=t.namespace);const i=[];return Lt(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QP{constructor(){this.counters_={}}incrementCounter(e,n=1){Xn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return EI(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mu={},_u={};function gf(t){const e=t.toString();return mu[e]||(mu[e]=new QP),mu[e]}function JP(t,e){const n=t.toString();return _u[n]||(_u[n]=e()),_u[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZP{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&br(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg="start",ex="close",tx="pLPCommand",nx="pRTLPCB",fE="id",pE="pw",gE="ser",sx="cb",ix="seg",rx="ts",ox="d",ax="dframe",mE=1870,_E=30,lx=mE-_E,cx=25e3,ux=3e4;class Ni{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ca(e),this.stats_=gf(n),this.urlFn=l=>(this.appCheckToken&&(l[wh]=this.appCheckToken),dE(n,uE,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new ZP(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(ux)),BP(()=>{if(this.isClosed_)return;this.scriptTagHolder=new mf((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Kg)this.id=a,this.password=l;else if(o===ex)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Kg]="t",s[gE]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[sx]=this.scriptTagHolder.uniqueCallbackIdentifier),s[nE]=pf,this.transportSessionId&&(s[sE]=this.transportSessionId),this.lastSessionId&&(s[aE]=this.lastSessionId),this.applicationId&&(s[lE]=this.applicationId),this.appCheckToken&&(s[wh]=this.appCheckToken),typeof location<"u"&&location.hostname&&oE.test(location.hostname)&&(s[iE]=rE);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ni.forceAllow_=!0}static forceDisallow(){Ni.forceDisallow_=!0}static isAvailable(){return Ni.forceAllow_?!0:!Ni.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!$P()&&!jP()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=rt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Vv(n),i=eE(s,lx);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[ax]="t",s[fE]=e,s[pE]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=rt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class mf{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=FP(),window[tx+this.uniqueCallbackIdentifier]=e,window[nx+this.uniqueCallbackIdentifier]=n,this.myIFrame=mf.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){mt("frame writing exception"),a.stack&&mt(a.stack),mt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||mt("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[fE]=this.myID,e[pE]=this.myPW,e[gE]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+_E+s.length<=mE;){const o=this.pendingSegs.shift();s=s+"&"+ix+i+"="+o.seg+"&"+rx+i+"="+o.ts+"&"+ox+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(cx)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{mt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hx=16384,dx=45e3;let ml=null;typeof MozWebSocket<"u"?ml=MozWebSocket:typeof WebSocket<"u"&&(ml=WebSocket);class on{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ca(this.connId),this.stats_=gf(n),this.connURL=on.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[nE]=pf,typeof location<"u"&&location.hostname&&oE.test(location.hostname)&&(o[iE]=rE),n&&(o[sE]=n),s&&(o[aE]=s),i&&(o[wh]=i),r&&(o[lE]=r),dE(e,cE,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ks.set("previous_websocket_failure",!0);try{let s;zv(),this.mySock=new ml(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){on.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&ml!==null&&!on.forceDisallow_}static previouslyFailed(){return Ks.isInMemoryStorage||Ks.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ks.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=po(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(H(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=rt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=eE(n,hx);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(dx))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}on.responsesRequiredToBeHealthy=2;on.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ni,on]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=on&&on.isAvailable();let s=n&&!on.previouslyFailed();if(e.webSocketOnly&&(n||Mt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[on];else{const i=this.transports_=[];for(const r of Io.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Io.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Io.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fx=6e4,px=5e3,gx=10*1024,mx=100*1024,vu="t",Gg="d",_x="s",Yg="r",vx="e",Xg="o",Qg="a",Jg="n",Zg="p",yx="h";class Ex{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ca("c:"+this.id+":"),this.transportManager_=new Io(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Qr(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>mx?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>gx?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(vu in e){const n=e[vu];n===Qg?this.upgradeIfSecondaryHealthy_():n===Yg?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Xg&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=kr("t",e),s=kr("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Zg,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Qg,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Jg,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=kr("t",e),s=kr("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=kr(vu,e);if(Gg in e){const s=e[Gg];if(n===yx){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Jg){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===_x?this.onConnectionShutdown_(s):n===Yg?this.onReset_(s):n===vx?bh("Server Error: "+s):n===Xg?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):bh("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),pf!==s&&Mt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Qr(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(fx))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Qr(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(px))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Zg,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ks.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yE{constructor(e){this.allowedEvents_=e,this.listeners_={},H(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){H(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l extends yE{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!wd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new _l}getInitialEvent(e){return H(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const em=32,tm=768;class Fe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Ae(){return new Fe("")}function me(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Ps(t){return t.pieces_.length-t.pieceNum_}function Ue(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Fe(t.pieces_,e)}function EE(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function bx(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function bE(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function wE(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Fe(e,0)}function tt(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof Fe)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new Fe(n,0)}function ye(t){return t.pieceNum_>=t.pieces_.length}function Pt(t,e){const n=me(t),s=me(e);if(n===null)return e;if(n===s)return Pt(Ue(t),Ue(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function _f(t,e){if(Ps(t)!==Ps(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function an(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Ps(t)>Ps(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class wx{constructor(e,n){this.errorPrefix_=n,this.parts_=bE(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=ic(this.parts_[s]);CE(this)}}function Cx(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=ic(e),CE(t)}function Tx(t){const e=t.parts_.pop();t.byteLength_-=ic(e),t.parts_.length>0&&(t.byteLength_-=1)}function CE(t){if(t.byteLength_>tm)throw new Error(t.errorPrefix_+"has a key path longer than "+tm+" bytes ("+t.byteLength_+").");if(t.parts_.length>em)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+em+") or object contains a cycle "+Vs(t))}function Vs(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf extends yE{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new vf}getInitialEvent(e){return H(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or=1e3,Ix=60*5*1e3,nm=30*1e3,Ax=1.3,Sx=3e4,Rx="server_kill",sm=3;class Bn extends vE{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Bn.nextPersistentConnectionId_++,this.log_=ca("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Or,this.maxReconnectDelay_=Ix,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!zv())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");vf.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&_l.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(rt(r)),H(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new sc,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),H(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),H(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Bn.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Xn(e,"w")){const s=Ji(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Mt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||FI(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=nm)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=MI(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),H(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+rt(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):bh("Unrecognized action received from server: "+rt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){H(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Or,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Or,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Sx&&(this.reconnectDelay_=Or),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Ax)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Bn.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){H(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?mt("getToken() completed but was canceled"):(mt("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new Ex(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,f=>{Mt(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(Rx)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Mt(h),l())}}}interrupt(e){mt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){mt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ju(this.interruptReasons_)&&(this.reconnectDelay_=Or,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>ff(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new Fe(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){mt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=sm&&(this.reconnectDelay_=nm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){mt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=sm&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+X0.replace(/\./g,"-")]=1,wd()?e["framework.cordova"]=1:Wv()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=_l.getInstance().currentlyOnline();return Ju(this.interruptReasons_)&&e}}Bn.nextPersistentConnectionId_=0;Bn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new _e(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new _e(er,e),i=new _e(er,n);return this.compare(s,i)!==0}minPost(){return _e.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pa;class TE extends Ac{static get __EMPTY_NODE(){return Pa}static set __EMPTY_NODE(e){Pa=e}compare(e,n){return Er(e.name,n.name)}isDefinedOn(e){throw fr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return _e.MIN}maxPost(){return new _e(hi,Pa)}makePost(e,n){return H(typeof e=="string","KeyIndex indexValue must always be a string."),new _e(e,Pa)}toString(){return".key"}}const zi=new TE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class it{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??it.RED,this.left=i??xt.EMPTY_NODE,this.right=r??xt.EMPTY_NODE}copy(e,n,s,i,r){return new it(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return xt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return xt.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,it.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,it.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}it.RED=!0;it.BLACK=!1;class kx{copy(e,n,s,i,r){return this}insert(e,n,s){return new it(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class xt{constructor(e,n=xt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new xt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,it.BLACK,null,null))}remove(e){return new xt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,it.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new xa(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new xa(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new xa(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new xa(this.root_,null,this.comparator_,!0,e)}}xt.EMPTY_NODE=new kx;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ox(t,e){return Er(t.name,e.name)}function yf(t,e){return Er(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ch;function Px(t){Ch=t}const IE=function(t){return typeof t=="number"?"number:"+tE(t):"string:"+t},AE=function(t){if(t.isLeafNode()){const e=t.val();H(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Xn(e,".sv"),"Priority must be a string or number.")}else H(t===Ch||t.isEmpty(),"priority of unexpected type.");H(t===Ch||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let im;class st{constructor(e,n=st.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,H(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),AE(this.priorityNode_)}static set __childrenNodeConstructor(e){im=e}static get __childrenNodeConstructor(){return im}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new st(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:st.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ye(e)?this:me(e)===".priority"?this.priorityNode_:st.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:st.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=me(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(H(s!==".priority"||Ps(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,st.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ue(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+IE(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=tE(this.value_):e+=this.value_,this.lazyHash_=J0(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===st.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof st.__childrenNodeConstructor?-1:(H(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=st.VALUE_TYPE_ORDER.indexOf(n),r=st.VALUE_TYPE_ORDER.indexOf(s);return H(i>=0,"Unknown leaf type: "+n),H(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}st.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let SE,RE;function xx(t){SE=t}function Nx(t){RE=t}class Dx extends Ac{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Er(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return _e.MIN}maxPost(){return new _e(hi,new st("[PRIORITY-POST]",RE))}makePost(e,n){const s=SE(e);return new _e(n,new st("[PRIORITY-POST]",s))}toString(){return".priority"}}const Xe=new Dx;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mx=Math.log(2);class Fx{constructor(e){const n=r=>parseInt(Math.log(r)/Mx,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const vl=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new it(d,h.node,it.BLACK,null,null);{const f=parseInt(u/2,10)+l,m=i(l,f),T=i(f+1,c);return h=t[f],d=n?n(h):h,new it(d,h.node,it.BLACK,m,T)}},r=function(l){let c=null,u=null,h=t.length;const d=function(m,T){const P=h-m,v=h;h-=m;const g=i(P+1,v),b=t[P],S=n?n(b):b;f(new it(S,b.node,T,null,g))},f=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<l.count;++m){const T=l.nextBitIsOne(),P=Math.pow(2,l.count-(m+1));T?d(P,it.BLACK):(d(P,it.BLACK),d(P,it.RED))}return u},o=new Fx(t.length),a=r(o);return new xt(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yu;const Ii={};class Fn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return H(Ii&&Xe,"ChildrenNode.ts has not been loaded"),yu=yu||new Fn({".priority":Ii},{".priority":Xe}),yu}get(e){const n=Ji(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof xt?n:null}hasIndex(e){return Xn(this.indexSet_,e.toString())}addIndex(e,n){H(e!==zi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(_e.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=vl(s,e.getCompare()):a=Ii;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Fn(u,c)}addToIndexes(e,n){const s=tl(this.indexes_,(i,r)=>{const o=Ji(this.indexSet_,r);if(H(o,"Missing index implementation for "+r),i===Ii)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(_e.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),vl(a,o.getCompare())}else return Ii;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new _e(e.name,a))),l.insert(e,e.node)}});return new Fn(s,this.indexSet_)}removeFromIndexes(e,n){const s=tl(this.indexes_,i=>{if(i===Ii)return i;{const r=n.get(e.name);return r?i.remove(new _e(e.name,r)):i}});return new Fn(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pr;class ce{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&AE(this.priorityNode_),this.children_.isEmpty()&&H(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Pr||(Pr=new ce(new xt(yf),null,Fn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Pr}updatePriority(e){return this.children_.isEmpty()?this:new ce(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Pr:n}}getChild(e){const n=me(e);return n===null?this:this.getImmediateChild(n).getChild(Ue(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(H(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new _e(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Pr:this.priorityNode_;return new ce(i,o,r)}}updateChild(e,n){const s=me(e);if(s===null)return n;{H(me(e)!==".priority"||Ps(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(Ue(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(Xe,(o,a)=>{n[o]=a.val(e),s++,r&&ce.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+IE(this.getPriority().val())+":"),this.forEachChild(Xe,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":J0(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new _e(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new _e(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new _e(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,_e.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,_e.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ua?-1:0}withIndex(e){if(e===zi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ce(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===zi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Xe),i=n.getIterator(Xe);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===zi?null:this.indexMap_.get(e.toString())}}ce.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Lx extends ce{constructor(){super(new xt(yf),ce.EMPTY_NODE,Fn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ce.EMPTY_NODE}isEmpty(){return!1}}const ua=new Lx;Object.defineProperties(_e,{MIN:{value:new _e(er,ce.EMPTY_NODE)},MAX:{value:new _e(hi,ua)}});TE.__EMPTY_NODE=ce.EMPTY_NODE;st.__childrenNodeConstructor=ce;Px(ua);Nx(ua);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ux=!0;function ut(t,e=null){if(t===null)return ce.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),H(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new st(n,ut(e))}if(!(t instanceof Array)&&Ux){const n=[];let s=!1;if(Lt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=ut(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new _e(o,l)))}}),n.length===0)return ce.EMPTY_NODE;const r=vl(n,Ox,o=>o.name,yf);if(s){const o=vl(n,Xe.getCompare());return new ce(r,ut(e),new Fn({".priority":o},{".priority":Xe}))}else return new ce(r,ut(e),Fn.Default)}else{let n=ce.EMPTY_NODE;return Lt(t,(s,i)=>{if(Xn(t,s)&&s.substring(0,1)!=="."){const r=ut(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(ut(e))}}xx(ut);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bx extends Ac{constructor(e){super(),this.indexPath_=e,H(!ye(e)&&me(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Er(e.name,n.name):r}makePost(e,n){const s=ut(e),i=ce.EMPTY_NODE.updateChild(this.indexPath_,s);return new _e(n,i)}maxPost(){const e=ce.EMPTY_NODE.updateChild(this.indexPath_,ua);return new _e(hi,e)}toString(){return bE(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vx extends Ac{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Er(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return _e.MIN}maxPost(){return _e.MAX}makePost(e,n){const s=ut(e);return new _e(n,s)}toString(){return".value"}}const $x=new Vx;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kE(t){return{type:"value",snapshotNode:t}}function tr(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ao(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function So(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function jx(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){H(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Ao(n,a)):H(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(tr(n,s)):o.trackChildChange(So(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Xe,(i,r)=>{n.hasChild(i)||s.trackChildChange(Ao(i,r))}),n.isLeafNode()||n.forEachChild(Xe,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(So(i,r,o))}else s.trackChildChange(tr(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?ce.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e){this.indexedFilter_=new Ef(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ro.getStartPost_(e),this.endPost_=Ro.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new _e(n,s))||(s=ce.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=ce.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(ce.EMPTY_NODE);const r=this;return n.forEachChild(Xe,(o,a)=>{r.matches(new _e(o,a))||(i=i.updateImmediateChild(o,ce.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hx{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Ro(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new _e(n,s))||(s=ce.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=ce.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=ce.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(ce.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,ce.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,f)=>h(f,d)}else o=this.index_.getCompare();const a=e;H(a.numChildren()===this.limit_,"");const l=new _e(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const f=d==null?1:o(d,l);if(u&&!s.isEmpty()&&f>=0)return r!=null&&r.trackChildChange(So(n,s,h)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(Ao(n,h));const T=a.updateImmediateChild(n,ce.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(tr(d.name,d.node)),T.updateImmediateChild(d.name,d.node)):T}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Ao(c.name,c.node)),r.trackChildChange(tr(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,ce.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Xe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return H(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return H(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:er}hasEnd(){return this.endSet_}getIndexEndValue(){return H(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return H(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:hi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return H(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Xe}copy(){const e=new bf;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Wx(t){return t.loadsAllData()?new Ef(t.getIndex()):t.hasLimit()?new Hx(t):new Ro(t)}function rm(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Xe?n="$priority":t.index_===$x?n="$value":t.index_===zi?n="$key":(H(t.index_ instanceof Bx,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=rt(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=rt(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+rt(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=rt(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+rt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function om(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Xe&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl extends vE{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=ca("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(H(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=yl.getListenId_(e,s),a={};this.listens_[o]=a;const l=rm(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),Ji(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=yl.getListenId_(e,n);delete this.listens_[s]}get(e){const n=rm(e._queryParams),s=e._path.toString(),i=new sc;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+pr(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=po(a.responseText)}catch{Mt("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&Mt("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zx{constructor(){this.rootNode_=ce.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function El(){return{value:null,children:new Map}}function OE(t,e,n){if(ye(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=me(e);t.children.has(s)||t.children.set(s,El());const i=t.children.get(s);e=Ue(e),OE(i,e,n)}}function Th(t,e,n){t.value!==null?n(e,t.value):qx(t,(s,i)=>{const r=new Fe(e.toString()+"/"+s);Th(i,r,n)})}function qx(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kx{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Lt(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const am=10*1e3,Gx=30*1e3,Yx=5*60*1e3;class Xx{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Kx(e);const s=am+(Gx-am)*Math.random();Qr(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Lt(e,(i,r)=>{r>0&&Xn(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Qr(this.reportStats_.bind(this),Math.floor(Math.random()*2*Yx))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ln;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ln||(ln={}));function PE(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function wf(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Cf(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=ln.ACK_USER_WRITE,this.source=PE()}operationForChild(e){if(ye(this.path)){if(this.affectedTree.value!=null)return H(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Fe(e));return new bl(Ae(),n,this.revert)}}else return H(me(this.path)===e,"operationForChild called for unrelated child."),new bl(Ue(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e,n){this.source=e,this.path=n,this.type=ln.LISTEN_COMPLETE}operationForChild(e){return ye(this.path)?new ko(this.source,Ae()):new ko(this.source,Ue(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=ln.OVERWRITE}operationForChild(e){return ye(this.path)?new di(this.source,Ae(),this.snap.getImmediateChild(e)):new di(this.source,Ue(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=ln.MERGE}operationForChild(e){if(ye(this.path)){const n=this.children.subtree(new Fe(e));return n.isEmpty()?null:n.value?new di(this.source,Ae(),n.value):new Oo(this.source,Ae(),n)}else return H(me(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Oo(this.source,Ue(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ye(e))return this.isFullyInitialized()&&!this.filtered_;const n=me(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qx{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Jx(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(jx(o.childName,o.snapshotNode))}),xr(t,i,"child_removed",e,s,n),xr(t,i,"child_added",e,s,n),xr(t,i,"child_moved",r,s,n),xr(t,i,"child_changed",e,s,n),xr(t,i,"value",e,s,n),i}function xr(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>eN(t,a,l)),o.forEach(a=>{const l=Zx(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function Zx(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function eN(t,e,n){if(e.childName==null||n.childName==null)throw fr("Should only compare child_ events.");const s=new _e(e.childName,e.snapshotNode),i=new _e(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sc(t,e){return{eventCache:t,serverCache:e}}function Jr(t,e,n,s){return Sc(new fi(e,n,s),t.serverCache)}function xE(t,e,n,s){return Sc(t.eventCache,new fi(e,n,s))}function Ih(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function pi(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Eu;const tN=()=>(Eu||(Eu=new xt(VP)),Eu);class $e{constructor(e,n=tN()){this.value=e,this.children=n}static fromObject(e){let n=new $e(null);return Lt(e,(s,i)=>{n=n.set(new Fe(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Ae(),value:this.value};if(ye(e))return null;{const s=me(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(Ue(e),n);return r!=null?{path:tt(new Fe(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ye(e))return this;{const n=me(e),s=this.children.get(n);return s!==null?s.subtree(Ue(e)):new $e(null)}}set(e,n){if(ye(e))return new $e(n,this.children);{const s=me(e),r=(this.children.get(s)||new $e(null)).set(Ue(e),n),o=this.children.insert(s,r);return new $e(this.value,o)}}remove(e){if(ye(e))return this.children.isEmpty()?new $e(null):new $e(null,this.children);{const n=me(e),s=this.children.get(n);if(s){const i=s.remove(Ue(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new $e(null):new $e(this.value,r)}else return this}}get(e){if(ye(e))return this.value;{const n=me(e),s=this.children.get(n);return s?s.get(Ue(e)):null}}setTree(e,n){if(ye(e))return n;{const s=me(e),r=(this.children.get(s)||new $e(null)).setTree(Ue(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new $e(this.value,o)}}fold(e){return this.fold_(Ae(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(tt(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Ae(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(ye(e))return null;{const r=me(e),o=this.children.get(r);return o?o.findOnPath_(Ue(e),tt(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Ae(),n)}foreachOnPath_(e,n,s){if(ye(e))return this;{this.value&&s(n,this.value);const i=me(e),r=this.children.get(i);return r?r.foreachOnPath_(Ue(e),tt(n,i),s):new $e(null)}}foreach(e){this.foreach_(Ae(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(tt(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e){this.writeTree_=e}static empty(){return new un(new $e(null))}}function Zr(t,e,n){if(ye(e))return new un(new $e(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Pt(i,e);return r=r.updateChild(o,n),new un(t.writeTree_.set(i,r))}else{const i=new $e(n),r=t.writeTree_.setTree(e,i);return new un(r)}}}function lm(t,e,n){let s=t;return Lt(n,(i,r)=>{s=Zr(s,tt(e,i),r)}),s}function cm(t,e){if(ye(e))return un.empty();{const n=t.writeTree_.setTree(e,new $e(null));return new un(n)}}function Ah(t,e){return yi(t,e)!=null}function yi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Pt(n.path,e)):null}function um(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Xe,(s,i)=>{e.push(new _e(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new _e(s,i.value))}),e}function Es(t,e){if(ye(e))return t;{const n=yi(t,e);return n!=null?new un(new $e(n)):new un(t.writeTree_.subtree(e))}}function Sh(t){return t.writeTree_.isEmpty()}function nr(t,e){return NE(Ae(),t.writeTree_,e)}function NE(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(H(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=NE(tt(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(tt(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tf(t,e){return LE(e,t)}function nN(t,e,n,s,i){H(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Zr(t.visibleWrites,e,n)),t.lastWriteId=s}function sN(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function iN(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);H(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&rN(a,s.path)?i=!1:an(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return oN(t),!0;if(s.snap)t.visibleWrites=cm(t.visibleWrites,s.path);else{const a=s.children;Lt(a,l=>{t.visibleWrites=cm(t.visibleWrites,tt(s.path,l))})}return!0}else return!1}function rN(t,e){if(t.snap)return an(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&an(tt(t.path,n),e))return!0;return!1}function oN(t){t.visibleWrites=DE(t.allWrites,aN,Ae()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function aN(t){return t.visible}function DE(t,e,n){let s=un.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)an(n,o)?(a=Pt(n,o),s=Zr(s,a,r.snap)):an(o,n)&&(a=Pt(o,n),s=Zr(s,Ae(),r.snap.getChild(a)));else if(r.children){if(an(n,o))a=Pt(n,o),s=lm(s,a,r.children);else if(an(o,n))if(a=Pt(o,n),ye(a))s=lm(s,Ae(),r.children);else{const l=Ji(r.children,me(a));if(l){const c=l.getChild(Ue(a));s=Zr(s,Ae(),c)}}}else throw fr("WriteRecord should have .snap or .children")}}return s}function ME(t,e,n,s,i){if(!s&&!i){const r=yi(t.visibleWrites,e);if(r!=null)return r;{const o=Es(t.visibleWrites,e);if(Sh(o))return n;if(n==null&&!Ah(o,Ae()))return null;{const a=n||ce.EMPTY_NODE;return nr(o,a)}}}else{const r=Es(t.visibleWrites,e);if(!i&&Sh(r))return n;if(!i&&n==null&&!Ah(r,Ae()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(an(c.path,e)||an(e,c.path))},a=DE(t.allWrites,o,e),l=n||ce.EMPTY_NODE;return nr(a,l)}}}function lN(t,e,n){let s=ce.EMPTY_NODE;const i=yi(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Xe,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Es(t.visibleWrites,e);return n.forEachChild(Xe,(o,a)=>{const l=nr(Es(r,new Fe(o)),a);s=s.updateImmediateChild(o,l)}),um(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Es(t.visibleWrites,e);return um(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function cN(t,e,n,s,i){H(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=tt(e,n);if(Ah(t.visibleWrites,r))return null;{const o=Es(t.visibleWrites,r);return Sh(o)?i.getChild(n):nr(o,i.getChild(n))}}function uN(t,e,n,s){const i=tt(e,n),r=yi(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Es(t.visibleWrites,i);return nr(o,s.getNode().getImmediateChild(n))}else return null}function hN(t,e){return yi(t.visibleWrites,e)}function dN(t,e,n,s,i,r,o){let a;const l=Es(t.visibleWrites,e),c=yi(l,Ae());if(c!=null)a=c;else if(n!=null)a=nr(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let f=d.getNext();for(;f&&u.length<i;)h(f,s)!==0&&u.push(f),f=d.getNext();return u}else return[]}function fN(){return{visibleWrites:un.empty(),allWrites:[],lastWriteId:-1}}function wl(t,e,n,s){return ME(t.writeTree,t.treePath,e,n,s)}function If(t,e){return lN(t.writeTree,t.treePath,e)}function hm(t,e,n,s){return cN(t.writeTree,t.treePath,e,n,s)}function Cl(t,e){return hN(t.writeTree,tt(t.treePath,e))}function pN(t,e,n,s,i,r){return dN(t.writeTree,t.treePath,e,n,s,i,r)}function Af(t,e,n){return uN(t.writeTree,t.treePath,e,n)}function FE(t,e){return LE(tt(t.treePath,e),t.writeTree)}function LE(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gN{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;H(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),H(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,So(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Ao(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,tr(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,So(s,e.snapshotNode,i.oldSnap));else throw fr("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mN{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const UE=new mN;class Sf{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new fi(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Af(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:pi(this.viewCache_),r=pN(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _N(t){return{filter:t}}function vN(t,e){H(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),H(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function yN(t,e,n,s,i){const r=new gN;let o,a;if(n.type===ln.OVERWRITE){const c=n;c.source.fromUser?o=Rh(t,e,c.path,c.snap,s,i,r):(H(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!ye(c.path),o=Tl(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===ln.MERGE){const c=n;c.source.fromUser?o=bN(t,e,c.path,c.children,s,i,r):(H(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=kh(t,e,c.path,c.children,s,i,a,r))}else if(n.type===ln.ACK_USER_WRITE){const c=n;c.revert?o=TN(t,e,c.path,s,i,r):o=wN(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===ln.LISTEN_COMPLETE)o=CN(t,e,n.path,s,r);else throw fr("Unknown operation type: "+n.type);const l=r.getChanges();return EN(e,o,l),{viewCache:o,changes:l}}function EN(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Ih(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(kE(Ih(e)))}}function BE(t,e,n,s,i,r){const o=e.eventCache;if(Cl(s,n)!=null)return e;{let a,l;if(ye(n))if(H(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=pi(e),u=c instanceof ce?c:ce.EMPTY_NODE,h=If(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=wl(s,pi(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=me(n);if(c===".priority"){H(Ps(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=hm(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=Ue(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=hm(s,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=Af(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return Jr(e,a,o.isFullyInitialized()||ye(n),t.filter.filtersNodes())}}function Tl(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(ye(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),f,null)}else{const f=me(n);if(!l.isCompleteForPath(n)&&Ps(n)>1)return e;const m=Ue(n),P=l.getNode().getImmediateChild(f).updateChild(m,s);f===".priority"?c=u.updatePriority(l.getNode(),P):c=u.updateChild(l.getNode(),f,P,m,UE,null)}const h=xE(e,c,l.isFullyInitialized()||ye(n),u.filtersNodes()),d=new Sf(i,h,r);return BE(t,h,n,i,d,a)}function Rh(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new Sf(i,e,r);if(ye(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Jr(e,c,!0,t.filter.filtersNodes());else{const h=me(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=Jr(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=Ue(n),f=a.getNode().getImmediateChild(h);let m;if(ye(d))m=s;else{const T=u.getCompleteChild(h);T!=null?EE(d)===".priority"&&T.getChild(wE(d)).isEmpty()?m=T:m=T.updateChild(d,s):m=ce.EMPTY_NODE}if(f.equals(m))l=e;else{const T=t.filter.updateChild(a.getNode(),h,m,d,u,o);l=Jr(e,T,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function dm(t,e){return t.eventCache.isCompleteForChild(e)}function bN(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=tt(n,l);dm(e,me(u))&&(a=Rh(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=tt(n,l);dm(e,me(u))||(a=Rh(t,a,u,c,i,r,o))}),a}function fm(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function kh(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;ye(n)?c=s:c=new $e(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),m=fm(t,f,d);l=Tl(t,l,new Fe(h),m,i,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!f){const m=e.serverCache.getNode().getImmediateChild(h),T=fm(t,m,d);l=Tl(t,l,new Fe(h),T,i,r,o,a)}}),l}function wN(t,e,n,s,i,r,o){if(Cl(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(ye(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Tl(t,e,n,l.getNode().getChild(n),i,r,a,o);if(ye(n)){let c=new $e(null);return l.getNode().forEachChild(zi,(u,h)=>{c=c.set(new Fe(u),h)}),kh(t,e,n,c,i,r,a,o)}else return e}else{let c=new $e(null);return s.foreach((u,h)=>{const d=tt(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),kh(t,e,n,c,i,r,a,o)}}function CN(t,e,n,s,i){const r=e.serverCache,o=xE(e,r.getNode(),r.isFullyInitialized()||ye(n),r.isFiltered());return BE(t,o,n,s,UE,i)}function TN(t,e,n,s,i,r){let o;if(Cl(s,n)!=null)return e;{const a=new Sf(s,e,i),l=e.eventCache.getNode();let c;if(ye(n)||me(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=wl(s,pi(e));else{const h=e.serverCache.getNode();H(h instanceof ce,"serverChildren would be complete if leaf node"),u=If(s,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=me(n);let h=Af(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,Ue(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,ce.EMPTY_NODE,Ue(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=wl(s,pi(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Cl(s,Ae())!=null,Jr(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IN{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Ef(s.getIndex()),r=Wx(s);this.processor_=_N(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(ce.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(ce.EMPTY_NODE,a.getNode(),null),u=new fi(l,o.isFullyInitialized(),i.filtersNodes()),h=new fi(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Sc(h,u),this.eventGenerator_=new Qx(this.query_)}get query(){return this.query_}}function AN(t){return t.viewCache_.serverCache.getNode()}function SN(t,e){const n=pi(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ye(e)&&!n.getImmediateChild(me(e)).isEmpty())?n.getChild(e):null}function pm(t){return t.eventRegistrations_.length===0}function RN(t,e){t.eventRegistrations_.push(e)}function gm(t,e,n){const s=[];if(n){H(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function mm(t,e,n,s){e.type===ln.MERGE&&e.source.queryId!==null&&(H(pi(t.viewCache_),"We should always have a full cache before handling merges"),H(Ih(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=yN(t.processor_,i,e,n,s);return vN(t.processor_,r.viewCache),H(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,VE(t,r.changes,r.viewCache.eventCache.getNode(),null)}function kN(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Xe,(r,o)=>{s.push(tr(r,o))}),n.isFullyInitialized()&&s.push(kE(n.getNode())),VE(t,s,n.getNode(),e)}function VE(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return Jx(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Il;class ON{constructor(){this.views=new Map}}function PN(t){H(!Il,"__referenceConstructor has already been defined"),Il=t}function xN(){return H(Il,"Reference.ts has not been loaded"),Il}function NN(t){return t.views.size===0}function Rf(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return H(r!=null,"SyncTree gave us an op for an invalid query."),mm(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(mm(o,e,n,s));return r}}function DN(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=wl(n,i?s:null),l=!1;a?l=!0:s instanceof ce?(a=If(n,s),l=!1):(a=ce.EMPTY_NODE,l=!1);const c=Sc(new fi(a,l,!1),new fi(s,i,!1));return new IN(e,c)}return o}function MN(t,e,n,s,i,r){const o=DN(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),RN(o,n),kN(o,n)}function FN(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=xs(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(gm(c,n,s)),pm(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(gm(l,n,s)),pm(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!xs(t)&&r.push(new(xN())(e._repo,e._path)),{removed:r,events:o}}function $E(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function qi(t,e){let n=null;for(const s of t.views.values())n=n||SN(s,e);return n}function jE(t,e){if(e._queryParams.loadsAllData())return Rc(t);{const s=e._queryIdentifier;return t.views.get(s)}}function HE(t,e){return jE(t,e)!=null}function xs(t){return Rc(t)!=null}function Rc(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Al;function LN(t){H(!Al,"__referenceConstructor has already been defined"),Al=t}function UN(){return H(Al,"Reference.ts has not been loaded"),Al}let BN=1;class _m{constructor(e){this.listenProvider_=e,this.syncPointTree_=new $e(null),this.pendingWriteTree_=fN(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function WE(t,e,n,s,i){return nN(t.pendingWriteTree_,e,n,s,i),i?ha(t,new di(PE(),e,n)):[]}function Gs(t,e,n=!1){const s=sN(t.pendingWriteTree_,e);if(iN(t.pendingWriteTree_,e)){let r=new $e(null);return s.snap!=null?r=r.set(Ae(),!0):Lt(s.children,o=>{r=r.set(new Fe(o),!0)}),ha(t,new bl(s.path,r,n))}else return[]}function kc(t,e,n){return ha(t,new di(wf(),e,n))}function VN(t,e,n){const s=$e.fromObject(n);return ha(t,new Oo(wf(),e,s))}function $N(t,e){return ha(t,new ko(wf(),e))}function jN(t,e,n){const s=Of(t,n);if(s){const i=Pf(s),r=i.path,o=i.queryId,a=Pt(r,e),l=new ko(Cf(o),a);return xf(t,r,l)}else return[]}function Oh(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||HE(o,e))){const l=FN(o,e,n,s);NN(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(d,f)=>xs(f));if(u&&!h){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const f=zN(d);for(let m=0;m<f.length;++m){const T=f[m],P=T.query,v=KE(t,T);t.listenProvider_.startListening(eo(P),Sl(t,P),v.hashFn,v.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(eo(e),null):c.forEach(d=>{const f=t.queryToTagMap.get(Oc(d));t.listenProvider_.stopListening(eo(d),f)}))}qN(t,c)}return a}function HN(t,e,n,s){const i=Of(t,s);if(i!=null){const r=Pf(i),o=r.path,a=r.queryId,l=Pt(o,e),c=new di(Cf(a),l,n);return xf(t,o,c)}else return[]}function WN(t,e,n,s){const i=Of(t,s);if(i){const r=Pf(i),o=r.path,a=r.queryId,l=Pt(o,e),c=$e.fromObject(n),u=new Oo(Cf(a),l,c);return xf(t,o,u)}else return[]}function vm(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,f)=>{const m=Pt(d,i);r=r||qi(f,m),o=o||xs(f)});let a=t.syncPointTree_.get(i);a?(o=o||xs(a),r=r||qi(a,Ae())):(a=new ON,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=ce.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((f,m)=>{const T=qi(m,Ae());T&&(r=r.updateImmediateChild(f,T))}));const c=HE(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=Oc(e);H(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const f=KN();t.queryToTagMap.set(d,f),t.tagToQueryMap.set(f,d)}const u=Tf(t.pendingWriteTree_,i);let h=MN(a,e,n,u,r,l);if(!c&&!o&&!s){const d=jE(a,e);h=h.concat(GN(t,e,d))}return h}function kf(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Pt(o,e),c=qi(a,l);if(c)return c});return ME(i,e,r,n,!0)}function ha(t,e){return zE(e,t.syncPointTree_,null,Tf(t.pendingWriteTree_,Ae()))}function zE(t,e,n,s){if(ye(t.path))return qE(t,e,n,s);{const i=e.get(Ae());n==null&&i!=null&&(n=qi(i,Ae()));let r=[];const o=me(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=FE(s,o);r=r.concat(zE(a,l,c,u))}return i&&(r=r.concat(Rf(i,t,s,n))),r}}function qE(t,e,n,s){const i=e.get(Ae());n==null&&i!=null&&(n=qi(i,Ae()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=FE(s,o),u=t.operationForChild(o);u&&(r=r.concat(qE(u,a,l,c)))}),i&&(r=r.concat(Rf(i,t,s,n))),r}function KE(t,e){const n=e.query,s=Sl(t,n);return{hashFn:()=>(AN(e)||ce.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?jN(t,n._path,s):$N(t,n._path);{const r=HP(i,n);return Oh(t,n,null,r)}}}}function Sl(t,e){const n=Oc(e);return t.queryToTagMap.get(n)}function Oc(t){return t._path.toString()+"$"+t._queryIdentifier}function Of(t,e){return t.tagToQueryMap.get(e)}function Pf(t){const e=t.indexOf("$");return H(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Fe(t.substr(0,e))}}function xf(t,e,n){const s=t.syncPointTree_.get(e);H(s,"Missing sync point for query tag that we're tracking");const i=Tf(t.pendingWriteTree_,e);return Rf(s,n,i,null)}function zN(t){return t.fold((e,n,s)=>{if(n&&xs(n))return[Rc(n)];{let i=[];return n&&(i=$E(n)),Lt(s,(r,o)=>{i=i.concat(o)}),i}})}function eo(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(UN())(t._repo,t._path):t}function qN(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Oc(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function KN(){return BN++}function GN(t,e,n){const s=e._path,i=Sl(t,e),r=KE(t,n),o=t.listenProvider_.startListening(eo(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)H(!xs(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!ye(c)&&u&&xs(u))return[Rc(u).query];{let d=[];return u&&(d=d.concat($E(u).map(f=>f.query))),Lt(h,(f,m)=>{d=d.concat(m)}),d}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(eo(u),Sl(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Nf(n)}node(){return this.node_}}class Df{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=tt(this.path_,e);return new Df(this.syncTree_,n)}node(){return kf(this.syncTree_,this.path_)}}const YN=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},ym=function(t,e,n){if(!t||typeof t!="object")return t;if(H(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return XN(t[".sv"],e,n);if(typeof t[".sv"]=="object")return QN(t[".sv"],e);H(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},XN=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:H(!1,"Unexpected server value: "+t)}},QN=function(t,e,n){t.hasOwnProperty("increment")||H(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&H(!1,"Unexpected increment value: "+s);const i=e.node();if(H(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},JN=function(t,e,n,s){return Mf(e,new Df(n,t),s)},GE=function(t,e,n){return Mf(t,new Nf(e),n)};function Mf(t,e,n){const s=t.getPriority().val(),i=ym(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=ym(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new st(a,ut(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new st(i))),o.forEachChild(Xe,(a,l)=>{const c=Mf(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Lf(t,e){let n=e instanceof Fe?e:new Fe(e),s=t,i=me(n);for(;i!==null;){const r=Ji(s.node.children,i)||{children:{},childCount:0};s=new Ff(i,s,r),n=Ue(n),i=me(n)}return s}function wr(t){return t.node.value}function YE(t,e){t.node.value=e,Ph(t)}function XE(t){return t.node.childCount>0}function ZN(t){return wr(t)===void 0&&!XE(t)}function Pc(t,e){Lt(t.node.children,(n,s)=>{e(new Ff(n,t,s))})}function QE(t,e,n,s){n&&!s&&e(t),Pc(t,i=>{QE(i,e,!0,s)}),n&&s&&e(t)}function eD(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function da(t){return new Fe(t.parent===null?t.name:da(t.parent)+"/"+t.name)}function Ph(t){t.parent!==null&&tD(t.parent,t.name,t)}function tD(t,e,n){const s=ZN(n),i=Xn(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Ph(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Ph(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nD=/[\[\].#$\/\u0000-\u001F\u007F]/,sD=/[\[\].#$\u0000-\u001F\u007F]/,bu=10*1024*1024,JE=function(t){return typeof t=="string"&&t.length!==0&&!nD.test(t)},ZE=function(t){return typeof t=="string"&&t.length!==0&&!sD.test(t)},iD=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),ZE(t)},eb=function(t,e,n,s){s&&e===void 0||Uf(Cd(t,"value"),e,n)},Uf=function(t,e,n){const s=n instanceof Fe?new wx(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Vs(s));if(typeof e=="function")throw new Error(t+"contains a function "+Vs(s)+" with contents = "+e.toString());if(Z0(e))throw new Error(t+"contains "+e.toString()+" "+Vs(s));if(typeof e=="string"&&e.length>bu/3&&ic(e)>bu)throw new Error(t+"contains a string greater than "+bu+" utf8 bytes "+Vs(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Lt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!JE(o)))throw new Error(t+" contains an invalid key ("+o+") "+Vs(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Cx(s,o),Uf(t,a,s),Tx(s)}),i&&r)throw new Error(t+' contains ".value" child '+Vs(s)+" in addition to actual children.")}},tb=function(t,e,n,s){if(!(s&&n===void 0)&&!ZE(n))throw new Error(Cd(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},rD=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),tb(t,e,n,s)},Bf=function(t,e){if(me(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},oD=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!JE(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!iD(n))throw new Error(Cd(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aD{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Vf(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!_f(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function nb(t,e,n){Vf(t,n),sb(t,s=>_f(s,e))}function zn(t,e,n){Vf(t,n),sb(t,s=>an(s,e)||an(e,s))}function sb(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(lD(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function lD(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();ni&&mt("event: "+n.toString()),br(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cD="repo_interrupt",uD=25;class hD{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new aD,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=El(),this.transactionQueueTree_=new Ff,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function dD(t,e,n){if(t.stats_=gf(t.repoInfo_),t.forceRestClient_||KP())t.server_=new yl(t.repoInfo_,(s,i,r,o)=>{Em(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>bm(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{rt(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Bn(t.repoInfo_,e,(s,i,r,o)=>{Em(t,s,i,r,o)},s=>{bm(t,s)},s=>{fD(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=JP(t.repoInfo_,()=>new Xx(t.stats_,t.server_)),t.infoData_=new zx,t.infoSyncTree_=new _m({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=kc(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),jf(t,"connected",!1),t.serverSyncTree_=new _m({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);zn(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function ib(t){const n=t.infoData_.getNode(new Fe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function $f(t){return YN({timestamp:ib(t)})}function Em(t,e,n,s,i){t.dataUpdateCount++;const r=new Fe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=tl(n,c=>ut(c));o=WN(t.serverSyncTree_,r,l,i)}else{const l=ut(n);o=HN(t.serverSyncTree_,r,l,i)}else if(s){const l=tl(n,c=>ut(c));o=VN(t.serverSyncTree_,r,l)}else{const l=ut(n);o=kc(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=xc(t,r)),zn(t.eventQueue_,a,o)}function bm(t,e){jf(t,"connected",e),e===!1&&gD(t)}function fD(t,e){Lt(e,(n,s)=>{jf(t,n,s)})}function jf(t,e,n){const s=new Fe("/.info/"+e),i=ut(n);t.infoData_.updateSnapshot(s,i);const r=kc(t.infoSyncTree_,s,i);zn(t.eventQueue_,s,r)}function rb(t){return t.nextWriteId_++}function pD(t,e,n,s,i){Hf(t,"set",{path:e.toString(),value:n,priority:s});const r=$f(t),o=ut(n,s),a=kf(t.serverSyncTree_,e),l=GE(o,a,r),c=rb(t),u=WE(t.serverSyncTree_,e,l,c,!0);Vf(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(d,f)=>{const m=d==="ok";m||Mt("set at "+e+" failed: "+d);const T=Gs(t.serverSyncTree_,c,!m);zn(t.eventQueue_,e,T),vD(t,i,d,f)});const h=ub(t,e);xc(t,h),zn(t.eventQueue_,h,[])}function gD(t){Hf(t,"onDisconnectEvents");const e=$f(t),n=El();Th(t.onDisconnect_,Ae(),(i,r)=>{const o=JN(i,r,t.serverSyncTree_,e);OE(n,i,o)});let s=[];Th(n,Ae(),(i,r)=>{s=s.concat(kc(t.serverSyncTree_,i,r));const o=ub(t,i);xc(t,o)}),t.onDisconnect_=El(),zn(t.eventQueue_,Ae(),s)}function mD(t,e,n){let s;me(e._path)===".info"?s=vm(t.infoSyncTree_,e,n):s=vm(t.serverSyncTree_,e,n),nb(t.eventQueue_,e._path,s)}function wm(t,e,n){let s;me(e._path)===".info"?s=Oh(t.infoSyncTree_,e,n):s=Oh(t.serverSyncTree_,e,n),nb(t.eventQueue_,e._path,s)}function _D(t){t.persistentConnection_&&t.persistentConnection_.interrupt(cD)}function Hf(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),mt(n,...e)}function vD(t,e,n,s){e&&br(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function ob(t,e,n){return kf(t.serverSyncTree_,e,n)||ce.EMPTY_NODE}function Wf(t,e=t.transactionQueueTree_){if(e||Nc(t,e),wr(e)){const n=lb(t,e);H(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&yD(t,da(e),n)}else XE(e)&&Pc(e,n=>{Wf(t,n)})}function yD(t,e,n){const s=n.map(c=>c.currentWriteId),i=ob(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];H(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Pt(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Hf(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(Gs(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Nc(t,Lf(t.transactionQueueTree_,e)),Wf(t,t.transactionQueueTree_),zn(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)br(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Mt("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}xc(t,e)}},o)}function xc(t,e){const n=ab(t,e),s=da(n),i=lb(t,n);return ED(t,i,s),s}function ED(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Pt(n,l.path);let u=!1,h;if(H(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(Gs(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=uD)u=!0,h="maxretry",i=i.concat(Gs(t.serverSyncTree_,l.currentWriteId,!0));else{const d=ob(t,l.path,o);l.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){Uf("transaction failed: Data returned ",f,l.path);let m=ut(f);typeof f=="object"&&f!=null&&Xn(f,".priority")||(m=m.updatePriority(d.getPriority()));const P=l.currentWriteId,v=$f(t),g=GE(m,d,v);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=g,l.currentWriteId=rb(t),o.splice(o.indexOf(P),1),i=i.concat(WE(t.serverSyncTree_,l.path,g,l.currentWriteId,l.applyLocally)),i=i.concat(Gs(t.serverSyncTree_,P,!0))}else u=!0,h="nodata",i=i.concat(Gs(t.serverSyncTree_,l.currentWriteId,!0))}zn(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}Nc(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)br(s[a]);Wf(t,t.transactionQueueTree_)}function ab(t,e){let n,s=t.transactionQueueTree_;for(n=me(e);n!==null&&wr(s)===void 0;)s=Lf(s,n),e=Ue(e),n=me(e);return s}function lb(t,e){const n=[];return cb(t,e,n),n.sort((s,i)=>s.order-i.order),n}function cb(t,e,n){const s=wr(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Pc(e,i=>{cb(t,i,n)})}function Nc(t,e){const n=wr(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,YE(e,n.length>0?n:void 0)}Pc(e,s=>{Nc(t,s)})}function ub(t,e){const n=da(ab(t,e)),s=Lf(t.transactionQueueTree_,e);return eD(s,i=>{wu(t,i)}),wu(t,s),QE(s,i=>{wu(t,i)}),n}function wu(t,e){const n=wr(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(H(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(H(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Gs(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?YE(e,void 0):n.length=r+1,zn(t.eventQueue_,da(e),i);for(let o=0;o<s.length;o++)br(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bD(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function wD(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Mt(`Invalid query segment '${n}' in query '${t}'`)}return e}const Cm=function(t,e){const n=CD(t),s=n.namespace;n.domain==="firebase.com"&&Wn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Wn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||UP();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new hE(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new Fe(n.pathString)}},CD=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=bD(t.substring(u,h)));const d=wD(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tm="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",TD=function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=Tm.charAt(n%64),n=Math.floor(n/64);H(n===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Tm.charAt(e[i]);return H(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hb{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+rt(this.snapshot.exportVal())}}class db{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ID{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return H(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return ye(this._path)?null:EE(this._path)}get ref(){return new Qn(this._repo,this._path)}get _queryIdentifier(){const e=om(this._queryParams),n=ff(e);return n==="{}"?"default":n}get _queryObject(){return om(this._queryParams)}isEqual(e){if(e=at(e),!(e instanceof zf))return!1;const n=this._repo===e._repo,s=_f(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+bx(this._path)}}class Qn extends zf{constructor(e,n){super(e,n,new bf,!1)}get parent(){const e=wE(this._path);return e===null?null:new Qn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Po{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Fe(e),s=sr(this.ref,e);return new Po(this._node.getChild(n),s,Xe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Po(i,sr(this.ref,s),Xe)))}hasChild(e){const n=new Fe(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function $a(t,e){return t=at(t),t._checkNotDeleted("ref"),e!==void 0?sr(t._root,e):t._root}function sr(t,e){return t=at(t),me(t._path)===null?rD("child","path",e,!1):tb("child","path",e,!1),new Qn(t._repo,tt(t._path,e))}function AD(t,e){t=at(t),Bf("push",t._path),eb("push",e,t._path,!0);const n=ib(t._repo),s=TD(n),i=sr(t,s),r=sr(t,s);let o;return e!=null?o=qf(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function SD(t){return Bf("remove",t._path),qf(t,null)}function qf(t,e){t=at(t),Bf("set",t._path),eb("set",e,t._path,!1);const n=new sc;return pD(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class Kf{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new hb("value",this,new Po(e.snapshotNode,new Qn(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new db(this,e,n):null}matches(e){return e instanceof Kf?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Gf{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new db(this,e,n):null}createEvent(e,n){H(e.childName!=null,"Child events should have a childName.");const s=sr(new Qn(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new hb(e.type,this,new Po(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Gf?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function RD(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const l=n,c=(u,h)=>{wm(t._repo,t,a),l(u,h)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new ID(n,r||void 0),a=e==="value"?new Kf(o):new Gf(e,o);return mD(t._repo,t,a),()=>wm(t._repo,t,a)}function kD(t,e,n,s){return RD(t,"value",e,n,s)}PN(Qn);LN(Qn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OD="FIREBASE_DATABASE_EMULATOR_HOST",xh={};let PD=!1;function xD(t,e,n,s){t.repoInfo_=new hE(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function ND(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Wn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),mt("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Cm(r,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[OD]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=Cm(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new Wi(Wi.OWNER):new YP(t.name,t.options,e);oD("Invalid Firebase Database URL",o),ye(o.path)||Wn("Database URL must point to the root of a Firebase Database (not including a child path).");const h=MD(a,t,u,new GP(t.name,n));return new FD(h,t)}function DD(t,e){const n=xh[e];(!n||n[t.key]!==t)&&Wn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),_D(t),delete n[t.key]}function MD(t,e,n,s){let i=xh[e.name];i||(i={},xh[e.name]=i);let r=i[t.toURLString()];return r&&Wn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new hD(t,PD,n,s),i[t.toURLString()]=r,r}class FD{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(dD(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Qn(this._repo,Ae())),this._rootInternal}_delete(){return this._rootInternal!==null&&(DD(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Wn("Cannot call "+e+" on a deleted database.")}}function LD(t=oc(),e){const n=Ho(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=Ed("database");s&&UD(n,...s)}return n}function UD(t,e,n,s={}){t=at(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Wn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&Wn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Wi(Wi.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:bd(s.mockUserToken,t.app.options.projectId);r=new Wi(o)}xD(i,e,n,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BD(t){NP(vi),Os(new $n("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return ND(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Jt(Hg,Wg,t),Jt(Hg,Wg,"esm2017")}Bn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Bn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};BD();const VD={apiKey:"AIzaSyCJyeK_uaQqFQ029_L8He2X19zreqUYNWc",authDomain:"snacksprint-5053d.firebaseapp.com",projectId:"snacksprint-5053d",storageBucket:"snacksprint-5053d.appspot.com",messagingSenderId:"293488162980",appId:"1:293488162980:web:e9200a53088e6a73bb8e31",databaseURL:"https://snacksprint-5053d-default-rtdb.europe-west1.firebasedatabase.app"},Yf=Yv(VD),Cu=JR(Yf);mO(Yf);const $D=kP(Yf),ja=LD(),Cr=$o("mainStore",()=>{const t=Be({pizza:[],burgers:[],roles:[],salads:[],drinks:[],checkedProducts:[],message:"",success:!1,error:!1,isShowMenu:!1});async function e(){try{t.value.error=!1;const r=$a(ja,"products/");kD(r,o=>{const a=o.val();a!==null&&n(Object.values(a))})}catch(r){t.value.error=!0,console.error(r)}}function n(r){t.value.pizza=r.filter(o=>o.product=="pizza"),t.value.burgers=r.filter(o=>o.product=="burgers"),t.value.roles=r.filter(o=>o.product=="roles"),t.value.salads=r.filter(o=>o.product=="salads"),t.value.drinks=r.filter(o=>o.product=="drinks")}function s(r){t.value.checkedProducts=r}function i(r){t.value.isShowMenu=r}return{main:t,setProducts:n,setCheckedProducts:s,fetchProducts:e,setShowMenu:i}}),Dc=$o("orderStore",()=>{const t=Xf(),e=Be({isProductModalVisible:!1,currentProduct:[],amountProducts:0,sumProducts:0,order:[]});function n(){e.value.isProductModalVisible=!e.value.isProductModalVisible,e.value.amountProducts=0,e.value.sumProducts=0,e.value.currentProduct=[]}function s(c){if(e.value.order.some(h=>h.id==c.id)){const h=e.value.order.find(d=>d.id==c.id);e.value.amountProducts=h.amountProducts,e.value.sumProducts=h.sumProducts,e.value.currentProduct=[h]}else e.value.currentProduct=[c]}function i(){e.value.currentProduct=[]}function r(){e.value.amountProducts+=1,e.value.sumProducts+=+e.value.currentProduct[0].productPrice}function o(){e.value.amountProducts-=1,e.value.sumProducts-=+e.value.currentProduct[0].productPrice}function a(){e.value.isProductModalVisible=!1;const c=e.value.currentProduct.map(h=>({...h,amountProducts:e.value.amountProducts,sumProducts:e.value.sumProducts}));e.value.order.some(h=>h.id==c[0].id)?(e.value.order.map(h=>(h.id==c[0].id&&(h.amountProducts=e.value.amountProducts,h.sumProducts=e.value.sumProducts),h)),t.orderSum(e.value.order)):(e.value.order=[...e.value.order,...c],t.orderSum(e.value.order)),e.value.currentProduct=[],e.value.amountProducts=0,e.value.sumProducts=0}function l(){e.value.order=[]}return{order:e,setProductModal:n,setCurrentProduct:s,removeCurentProduct:i,addProduct:r,removeProduct:o,addToBasket:a,resetOrder:l}}),Xf=$o("basketStore",()=>{const{toastify:t}=ks.useToastify();Cr();const e=Be({orderSum:0,isBasketModalVisible:!1}),n=Dc();function s(){e.value.isBasketModalVisible=!e.value.isBasketModalVisible}function i(o){e.value.orderSum=o.reduce((a,l)=>a+l.sumProducts,0)}function r(){n.resetOrder(),e.value.orderSum=0,e.value.isBasketModalVisible=!1,t("success","Замовлення прийнято!")}return{basket:e,orderSum:i,setBasketModal:s,orderConfirm:r}}),jD=["src"],HD=Ie({__name:"BasketButton",setup(t){const e=Xf();return(n,s)=>(re(),ge("img",{onClick:s[0]||(s[0]=(...i)=>C(e).setBasketModal&&C(e).setBasketModal(...i)),class:"basket",src:C(_I),alt:""},null,8,jD))}});const WD=qe(HD,[["__scopeId","data-v-89db5cc0"]]);/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Oi=typeof window<"u";function zD(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ke=Object.assign;function Tu(t,e){const n={};for(const s in e){const i=e[s];n[s]=dn(i)?i.map(t):t(i)}return n}const to=()=>{},dn=Array.isArray,qD=/\/$/,KD=t=>t.replace(qD,"");function Iu(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=QD(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function GD(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Im(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function YD(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&ir(e.matched[s],n.matched[i])&&fb(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ir(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function fb(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!XD(t[n],e[n]))return!1;return!0}function XD(t,e){return dn(t)?Am(t,e):dn(e)?Am(e,t):t===e}function Am(t,e){return dn(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function QD(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let i=n.length-1,r,o;for(r=0;r<s.length;r++)if(o=s[r],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var xo;(function(t){t.pop="pop",t.push="push"})(xo||(xo={}));var no;(function(t){t.back="back",t.forward="forward",t.unknown=""})(no||(no={}));function JD(t){if(!t)if(Oi){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),KD(t)}const ZD=/^[^#]+#/;function eM(t,e){return t.replace(ZD,"#")+e}function tM(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Mc=()=>({left:window.pageXOffset,top:window.pageYOffset});function nM(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=tM(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Sm(t,e){return(history.state?history.state.position-e:-1)+t}const Nh=new Map;function sM(t,e){Nh.set(t,e)}function iM(t){const e=Nh.get(t);return Nh.delete(t),e}let rM=()=>location.protocol+"//"+location.host;function pb(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),Im(l,"")}return Im(n,t)+s+i}function oM(t,e,n,s){let i=[],r=[],o=null;const a=({state:d})=>{const f=pb(t,location),m=n.value,T=e.value;let P=0;if(d){if(n.value=f,e.value=d,o&&o===m){o=null;return}P=T?d.position-T.position:0}else s(f);i.forEach(v=>{v(n.value,m,{delta:P,type:xo.pop,direction:P?P>0?no.forward:no.back:no.unknown})})};function l(){o=n.value}function c(d){i.push(d);const f=()=>{const m=i.indexOf(d);m>-1&&i.splice(m,1)};return r.push(f),f}function u(){const{history:d}=window;d.state&&d.replaceState(ke({},d.state,{scroll:Mc()}),"")}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:h}}function Rm(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?Mc():null}}function aM(t){const{history:e,location:n}=window,s={value:pb(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:rM()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),i.value=c}catch(f){console.error(f),n[u?"replace":"assign"](d)}}function o(l,c){const u=ke({},e.state,Rm(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=ke({},i.value,e.state,{forward:l,scroll:Mc()});r(u.current,u,!0);const h=ke({},Rm(s.value,l,null),{position:u.position+1},c);r(l,h,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function lM(t){t=JD(t);const e=aM(t),n=oM(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=ke({location:"",base:t,go:s,createHref:eM.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function cM(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),lM(t)}function uM(t){return typeof t=="string"||t&&typeof t=="object"}function gb(t){return typeof t=="string"||typeof t=="symbol"}const is={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},mb=Symbol("");var km;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(km||(km={}));function rr(t,e){return ke(new Error,{type:t,[mb]:!0},e)}function Sn(t,e){return t instanceof Error&&mb in t&&(e==null||!!(t.type&e))}const Om="[^/]+?",hM={sensitive:!1,strict:!1,start:!0,end:!0},dM=/[.+*?^${}()[\]/\\]/g;function fM(t,e){const n=ke({},hM,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const d=c[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(dM,"\\$&"),f+=40;else if(d.type===1){const{value:m,repeatable:T,optional:P,regexp:v}=d;r.push({name:m,repeatable:T,optional:P});const g=v||Om;if(g!==Om){f+=10;try{new RegExp(`(${g})`)}catch(S){throw new Error(`Invalid custom RegExp for param "${m}" (${g}): `+S.message)}}let b=T?`((?:${g})(?:/(?:${g}))*)`:`(${g})`;h||(b=P&&c.length<2?`(?:/${b})`:"/"+b),P&&(b+="?"),i+=b,f+=20,P&&(f+=-8),T&&(f+=-20),g===".*"&&(f+=-50)}u.push(f)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const f=u[d]||"",m=r[d-1];h[m.name]=f&&m.repeatable?f.split("/"):f}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const f of d)if(f.type===0)u+=f.value;else if(f.type===1){const{value:m,repeatable:T,optional:P}=f,v=m in c?c[m]:"";if(dn(v)&&!T)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const g=dn(v)?v.join("/"):v;if(!g)if(P)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=g}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function pM(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function gM(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=pM(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(Pm(s))return 1;if(Pm(i))return-1}return i.length-s.length}function Pm(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const mM={type:0,value:""},_M=/[a-zA-Z0-9_]/;function vM(t){if(!t)return[[]];if(t==="/")return[[mM]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${c}": ${f}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:l==="("?n=2:_M.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function yM(t,e,n){const s=fM(vM(t.path),n),i=ke(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function EM(t,e){const n=[],s=new Map;e=Dm({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,d){const f=!d,m=bM(u);m.aliasOf=d&&d.record;const T=Dm(e,u),P=[m];if("alias"in u){const b=typeof u.alias=="string"?[u.alias]:u.alias;for(const S of b)P.push(ke({},m,{components:d?d.record.components:m.components,path:S,aliasOf:d?d.record:m}))}let v,g;for(const b of P){const{path:S}=b;if(h&&S[0]!=="/"){const w=h.record.path,A=w[w.length-1]==="/"?"":"/";b.path=h.record.path+(S&&A+S)}if(v=yM(b,h,T),d?d.alias.push(v):(g=g||v,g!==v&&g.alias.push(v),f&&u.name&&!Nm(v)&&o(u.name)),m.children){const w=m.children;for(let A=0;A<w.length;A++)r(w[A],v,d&&d.children[A])}d=d||v,(v.record.components&&Object.keys(v.record.components).length||v.record.name||v.record.redirect)&&l(v)}return g?()=>{o(g)}:to}function o(u){if(gb(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&gM(u,n[h])>=0&&(u.record.path!==n[h].record.path||!_b(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Nm(u)&&s.set(u.record.name,u)}function c(u,h){let d,f={},m,T;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw rr(1,{location:u});T=d.record.name,f=ke(xm(h.params,d.keys.filter(g=>!g.optional).map(g=>g.name)),u.params&&xm(u.params,d.keys.map(g=>g.name))),m=d.stringify(f)}else if("path"in u)m=u.path,d=n.find(g=>g.re.test(m)),d&&(f=d.parse(m),T=d.record.name);else{if(d=h.name?s.get(h.name):n.find(g=>g.re.test(h.path)),!d)throw rr(1,{location:u,currentLocation:h});T=d.record.name,f=ke({},h.params,u.params),m=d.stringify(f)}const P=[];let v=d;for(;v;)P.unshift(v.record),v=v.parent;return{name:T,path:m,params:f,matched:P,meta:CM(P)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function xm(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function bM(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:wM(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function wM(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Nm(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function CM(t){return t.reduce((e,n)=>ke(e,n.meta),{})}function Dm(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function _b(t,e){return e.children.some(n=>n===t||_b(t,n))}const vb=/#/g,TM=/&/g,IM=/\//g,AM=/=/g,SM=/\?/g,yb=/\+/g,RM=/%5B/g,kM=/%5D/g,Eb=/%5E/g,OM=/%60/g,bb=/%7B/g,PM=/%7C/g,wb=/%7D/g,xM=/%20/g;function Qf(t){return encodeURI(""+t).replace(PM,"|").replace(RM,"[").replace(kM,"]")}function NM(t){return Qf(t).replace(bb,"{").replace(wb,"}").replace(Eb,"^")}function Dh(t){return Qf(t).replace(yb,"%2B").replace(xM,"+").replace(vb,"%23").replace(TM,"%26").replace(OM,"`").replace(bb,"{").replace(wb,"}").replace(Eb,"^")}function DM(t){return Dh(t).replace(AM,"%3D")}function MM(t){return Qf(t).replace(vb,"%23").replace(SM,"%3F")}function FM(t){return t==null?"":MM(t).replace(IM,"%2F")}function Rl(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function LM(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(yb," "),o=r.indexOf("="),a=Rl(o<0?r:r.slice(0,o)),l=o<0?null:Rl(r.slice(o+1));if(a in e){let c=e[a];dn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Mm(t){let e="";for(let n in t){const s=t[n];if(n=DM(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(dn(s)?s.map(r=>r&&Dh(r)):[s&&Dh(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function UM(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=dn(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const BM=Symbol(""),Fm=Symbol(""),Jf=Symbol(""),Zf=Symbol(""),Mh=Symbol("");function Nr(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function cs(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(rr(4,{from:n,to:e})):h instanceof Error?a(h):uM(h)?a(rr(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},c=t.call(s&&s.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function Au(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(VM(a)){const c=(a.__vccOpts||a)[e];c&&i.push(cs(c,n,s,r,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=zD(c)?c.default:c;r.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&cs(d,n,s,r,o)()}))}}return i}function VM(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Lm(t){const e=Dt(Jf),n=Dt(Zf),s=Ce(()=>e.resolve(C(t.to))),i=Ce(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(ir.bind(null,u));if(d>-1)return d;const f=Um(l[c-2]);return c>1&&Um(u)===f&&h[h.length-1].path!==f?h.findIndex(ir.bind(null,l[c-2])):d}),r=Ce(()=>i.value>-1&&HM(n.params,s.value.params)),o=Ce(()=>i.value>-1&&i.value===n.matched.length-1&&fb(n.params,s.value.params));function a(l={}){return jM(l)?e[C(t.replace)?"replace":"push"](C(t.to)).catch(to):Promise.resolve()}return{route:s,href:Ce(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const $M=Ie({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Lm,setup(t,{slots:e}){const n=In(Lm(t)),{options:s}=Dt(Jf),i=Ce(()=>({[Bm(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Bm(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Ss("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),No=$M;function jM(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function HM(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!dn(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Um(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Bm=(t,e,n)=>t??e??n,WM=Ie({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Dt(Mh),i=Ce(()=>t.route||s.value),r=Dt(Fm,0),o=Ce(()=>{let c=C(r);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=Ce(()=>i.value.matched[o.value]);Xs(Fm,Ce(()=>o.value+1)),Xs(BM,a),Xs(Mh,i);const l=Be();return Ze(()=>[l.value,a.value,t.name],([c,u,h],[d,f,m])=>{u&&(u.instances[h]=c,f&&f!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),c&&u&&(!f||!ir(u,f)||!d)&&(u.enterCallbacks[h]||[]).forEach(T=>T(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Vm(n.default,{Component:d,route:c});const f=h.props[u],m=f?f===!0?c.params:typeof f=="function"?f(c):f:null,P=Ss(d,ke({},m,e,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return Vm(n.default,{Component:P,route:c})||P}}});function Vm(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const zM=WM;function qM(t){const e=EM(t.routes,t),n=t.parseQuery||LM,s=t.stringifyQuery||Mm,i=t.history,r=Nr(),o=Nr(),a=Nr(),l=y_(is);let c=is;Oi&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Tu.bind(null,M=>""+M),h=Tu.bind(null,FM),d=Tu.bind(null,Rl);function f(M,K){let k,W;return gb(M)?(k=e.getRecordMatcher(M),W=K):W=M,e.addRoute(W,k)}function m(M){const K=e.getRecordMatcher(M);K&&e.removeRoute(K)}function T(){return e.getRoutes().map(M=>M.record)}function P(M){return!!e.getRecordMatcher(M)}function v(M,K){if(K=ke({},K||l.value),typeof M=="string"){const p=Iu(n,M,K.path),y=e.resolve({path:p.path},K),x=i.createHref(p.fullPath);return ke(p,y,{params:d(y.params),hash:Rl(p.hash),redirectedFrom:void 0,href:x})}let k;if("path"in M)k=ke({},M,{path:Iu(n,M.path,K.path).path});else{const p=ke({},M.params);for(const y in p)p[y]==null&&delete p[y];k=ke({},M,{params:h(M.params)}),K.params=h(K.params)}const W=e.resolve(k,K),oe=M.hash||"";W.params=u(d(W.params));const Oe=GD(s,ke({},M,{hash:NM(oe),path:W.path})),he=i.createHref(Oe);return ke({fullPath:Oe,hash:oe,query:s===Mm?UM(M.query):M.query||{}},W,{redirectedFrom:void 0,href:he})}function g(M){return typeof M=="string"?Iu(n,M,l.value.path):ke({},M)}function b(M,K){if(c!==M)return rr(8,{from:K,to:M})}function S(M){return I(M)}function w(M){return S(ke(g(M),{replace:!0}))}function A(M){const K=M.matched[M.matched.length-1];if(K&&K.redirect){const{redirect:k}=K;let W=typeof k=="function"?k(M):k;return typeof W=="string"&&(W=W.includes("?")||W.includes("#")?W=g(W):{path:W},W.params={}),ke({query:M.query,hash:M.hash,params:"path"in W?{}:M.params},W)}}function I(M,K){const k=c=v(M),W=l.value,oe=M.state,Oe=M.force,he=M.replace===!0,p=A(k);if(p)return I(ke(g(p),{state:typeof p=="object"?ke({},oe,p.state):oe,force:Oe,replace:he}),K||k);const y=k;y.redirectedFrom=K;let x;return!Oe&&YD(s,W,k)&&(x=rr(16,{to:y,from:W}),Ge(W,W,!0,!1)),(x?Promise.resolve(x):N(y,W)).catch(D=>Sn(D)?Sn(D,2)?D:ve(D):Z(D,y,W)).then(D=>{if(D){if(Sn(D,2))return I(ke({replace:he},g(D.to),{state:typeof D.to=="object"?ke({},oe,D.to.state):oe,force:Oe}),K||y)}else D=V(y,W,!0,he,oe);return O(y,W,D),D})}function E(M,K){const k=b(M,K);return k?Promise.reject(k):Promise.resolve()}function N(M,K){let k;const[W,oe,Oe]=KM(M,K);k=Au(W.reverse(),"beforeRouteLeave",M,K);for(const p of W)p.leaveGuards.forEach(y=>{k.push(cs(y,M,K))});const he=E.bind(null,M,K);return k.push(he),Ai(k).then(()=>{k=[];for(const p of r.list())k.push(cs(p,M,K));return k.push(he),Ai(k)}).then(()=>{k=Au(oe,"beforeRouteUpdate",M,K);for(const p of oe)p.updateGuards.forEach(y=>{k.push(cs(y,M,K))});return k.push(he),Ai(k)}).then(()=>{k=[];for(const p of M.matched)if(p.beforeEnter&&!K.matched.includes(p))if(dn(p.beforeEnter))for(const y of p.beforeEnter)k.push(cs(y,M,K));else k.push(cs(p.beforeEnter,M,K));return k.push(he),Ai(k)}).then(()=>(M.matched.forEach(p=>p.enterCallbacks={}),k=Au(Oe,"beforeRouteEnter",M,K),k.push(he),Ai(k))).then(()=>{k=[];for(const p of o.list())k.push(cs(p,M,K));return k.push(he),Ai(k)}).catch(p=>Sn(p,8)?p:Promise.reject(p))}function O(M,K,k){for(const W of a.list())W(M,K,k)}function V(M,K,k,W,oe){const Oe=b(M,K);if(Oe)return Oe;const he=K===is,p=Oi?history.state:{};k&&(W||he?i.replace(M.fullPath,ke({scroll:he&&p&&p.scroll},oe)):i.push(M.fullPath,oe)),l.value=M,Ge(M,K,k,he),ve()}let L;function J(){L||(L=i.listen((M,K,k)=>{if(!Gt.listening)return;const W=v(M),oe=A(W);if(oe){I(ke(oe,{replace:!0}),W).catch(to);return}c=W;const Oe=l.value;Oi&&sM(Sm(Oe.fullPath,k.delta),Mc()),N(W,Oe).catch(he=>Sn(he,12)?he:Sn(he,2)?(I(he.to,W).then(p=>{Sn(p,20)&&!k.delta&&k.type===xo.pop&&i.go(-1,!1)}).catch(to),Promise.reject()):(k.delta&&i.go(-k.delta,!1),Z(he,W,Oe))).then(he=>{he=he||V(W,Oe,!1),he&&(k.delta&&!Sn(he,8)?i.go(-k.delta,!1):k.type===xo.pop&&Sn(he,20)&&i.go(-1,!1)),O(W,Oe,he)}).catch(to)}))}let $=Nr(),le=Nr(),ne;function Z(M,K,k){ve(M);const W=le.list();return W.length?W.forEach(oe=>oe(M,K,k)):console.error(M),Promise.reject(M)}function ae(){return ne&&l.value!==is?Promise.resolve():new Promise((M,K)=>{$.add([M,K])})}function ve(M){return ne||(ne=!M,J(),$.list().forEach(([K,k])=>M?k(M):K()),$.reset()),M}function Ge(M,K,k,W){const{scrollBehavior:oe}=t;if(!Oi||!oe)return Promise.resolve();const Oe=!k&&iM(Sm(M.fullPath,0))||(W||!k)&&history.state&&history.state.scroll||null;return vn().then(()=>oe(M,K,Oe)).then(he=>he&&nM(he)).catch(he=>Z(he,M,K))}const Le=M=>i.go(M);let be;const wt=new Set,Gt={currentRoute:l,listening:!0,addRoute:f,removeRoute:m,hasRoute:P,getRoutes:T,resolve:v,options:t,push:S,replace:w,go:Le,back:()=>Le(-1),forward:()=>Le(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:le.add,isReady:ae,install(M){const K=this;M.component("RouterLink",No),M.component("RouterView",zM),M.config.globalProperties.$router=K,Object.defineProperty(M.config.globalProperties,"$route",{enumerable:!0,get:()=>C(l)}),Oi&&!be&&l.value===is&&(be=!0,S(i.location).catch(oe=>{}));const k={};for(const oe in is)k[oe]=Ce(()=>l.value[oe]);M.provide(Jf,K),M.provide(Zf,In(k)),M.provide(Mh,l);const W=M.unmount;wt.add(M),M.unmount=function(){wt.delete(M),wt.size<1&&(c=is,L&&L(),L=null,l.value=is,be=!1,ne=!1),W()}}};return Gt}function Ai(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function KM(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>ir(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>ir(c,l))||i.push(l))}return[n,s,i]}function GM(){return Dt(Zf)}const YM="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAClElEQVR4nO2aTUtVQRiAJwnSY6IIWv2IFPrYuMlFhrTLCFq1rVWBRBK0yED7C7luFYFurE2YFVFpFkS5DCGrC27OxiIte2LwlUa9FffemXzPnXlguPfcC3PO+8znmRljEolEIpFIJHYI4CQwC6zgh1XgNXDaaAfoA37Kg38E3ntIHxwZA0YzwLQ8qNfSAk6I2FdGM8ASsBwob1ujVo1mgNymQHkv2KpliiYAmKiy83taLwJyYK3Cju/71mCLLiCvMJ+FogooAV+BBrlukOtSLALuS/u9DLQAV+T6XiwCDpeZAX4DDkUhwAJ0AXeAt/LZZSqk0AJ8oFoAsAcYBt7YqSlwA2iMScC4tG07N/8h3+3bX1vdCwCOSMDzwAGgA3gkv730JUGzgHMS7LDzW7PzFuhFgmYBPRLoOyALJUGzgF3AAwn0YSgJagVYgFZgRgJ9Aux1/suAKfnPLmO1G40CWJ+j9wKXgKEq0s2NNzYp9SafNSGoAKBNSs4nm5bAykho0iRgTB7sGXC1yhrgpvN2clTmPs3OEDmqScBn4IvbdkMBdMpiyLxGAS01Z/bve+3TKOCWVMvnnprAhT80gczpB0Y0CWgFHnvuBAf+EryuTtAZBo8BFwMMg5nqYbBW6mIiVAvApFPymc+SVy8AOOqUbpDgtQs4K0FeCxW8dgEHJVC7HLZfxnmvwasWYAFuS8BrkuJZErMAu2XDw44Ec8D1qBZF/weFFgB0A3dlY8R+dkcjgPJbYyvRbI3xe3N0UNYD7CZpVJujpdi3x/PYD0jk6YgM22rAxstTpUzVRQ3wRVEELMV+UHJaqu8Zz/n2F+Wo7HHnsPQnT4elF51+4ZTRDuul9cLzcfm5QgSfSCQSiUTC7CS/AM1L9S7V4a3YAAAAAElFTkSuQmCC",XM="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA0ElEQVR4nO3TQQqCQBTG8TlESt6jNhXUebxIHSDPYyTtWuXCO9S2/V+EgUCc54i+ocIPBnzK88cwb4z5pQAxcLcrDoVGwINPKiAJsdPSgmXrOQ6x0wpYdrxL1FHj/paoo2o4Hqga/r8Bbuin6IKDxHwTXARwr65zzoWmDbAdULdzkQYsc3W1j6Sv7kgmwakinErwQRHeS/BCEY6csG18KsAvEZUmeySc+8BnR3NzVXYDar+J9pnsEUlNX4C1ArzqhS1+At4TgM0/jl7onDlmotRKvK0vr54p5gAAAABJRU5ErkJggg==",QM=t=>(ur("data-v-684bfa7c"),t=t(),hr(),t),JM={class:"product"},ZM=["src"],e1={class:"product__info"},t1={class:"product__title"},n1={class:"product__price"},s1={class:"product__amount"},i1={class:"ctrl-amount"},r1=["disabled"],o1={class:"amount"},a1={class:"amount-all"},l1=QM(()=>G("span",null,"Додати в кошик",-1)),c1=["src"],u1=Ie({__name:"ProductModal",setup(t){const e=Dc();function n(){e.order.sumProducts&&e.addToBasket()}return(s,i)=>Gn((re(),ge("div",{class:"product-modal-wrapper",onClick:i[3]||(i[3]=(...r)=>C(e).setProductModal&&C(e).setProductModal(...r))},[G("div",{onClick:i[2]||(i[2]=Vo(()=>{},["stop"])),class:"product-modal"},[(re(!0),ge(je,null,dr(C(e).order.currentProduct,r=>(re(),ge("div",JM,[G("img",{src:r.productCover,class:"product__photo"},null,8,ZM),G("div",e1,[G("h3",t1,Ne(r.productName),1),G("span",n1,Ne(r.productPrice)+" грн",1)])]))),256)),G("div",s1,[G("div",i1,[G("button",{disabled:!C(e).order.amountProducts,onClick:i[0]||(i[0]=(...r)=>C(e).removeProduct&&C(e).removeProduct(...r)),class:"amount-btn"}," Думаю досить ",8,r1),G("span",o1,Ne(C(e).order.amountProducts)+" кіл-ть",1),G("button",{onClick:i[1]||(i[1]=(...r)=>C(e).addProduct&&C(e).addProduct(...r)),class:"amount-btn"}," Хочу ще ")]),G("span",a1," Вартість замовлення - "+Ne(C(e).order.sumProducts)+" грн ",1)]),G("button",{onClick:n,class:"basket"},[l1,G("img",{class:"basket-img",src:C(XM),alt:""},null,8,c1)])])],512)),[[Yn,C(e).order.isProductModalVisible]])}});const h1=qe(u1,[["__scopeId","data-v-684bfa7c"]]),Cb=$o("adminStore",()=>{Cr();const{toastify:t}=ks.useToastify();async function e(s){try{const i={contentType:"image/jpeg"},r=RP($D,"images/"+s.productCover.name),o=AP(r,s.productCover,i);await new Promise((c,u)=>{o.on("state_changed",null,u,c)});const a=await SP(o.snapshot.ref),l=await AD($a(ja,"products/"));await qf($a(ja,`products/${l.key}`),{id:l.key,productName:s.productName,productDescription:s.productDescription,productPrice:s.productPrice,productWeight:s.productWeight,product:s.product,productCover:a}),t("success","Товар додано!")}catch{t("error","Сталася помилка, спробуйте пізніше!")}}async function n(s){try{await SD($a(ja,`products/${s.id}`)),t("success","Товар видалено")}catch{t("error","Сталася помилка, спробуйте пізніше!")}}return{uploadProduct:e,removeProduct:n}}),d1=["src"],f1={class:"product__title"},p1={class:"product__description"},g1={class:"price-and-buy"},m1={class:"price-and-buy__price"},_1=["onClick"],v1=["onClick"],y1=Ie({__name:"Product",props:{products:null},setup(t){const e=Dc(),n=wi(),s=Cb(),{toastify:i}=ks.useToastify();function r(o){n.user.email?(e.setProductModal(),e.setCurrentProduct(o)):i("warning","Спочатку авторизуйтесь")}return(o,a)=>(re(!0),ge(je,null,dr(t.products,l=>(re(),ge("div",{class:"product",key:l.id},[G("img",{class:"product__img",src:l.productCover,alt:""},null,8,d1),G("h3",f1,Ne(l.productName),1),G("div",p1,[G("p",null,Ne(l.productDescription),1)]),G("div",g1,[G("span",m1,Ne(l.productPrice)+" грн.",1),G("span",null,Ne(l.productWeight)+" г",1),C(n).user.email!=="caulfieldd17@gmail.com"?(re(),ge("button",{key:0,onClick:c=>r(l),class:"price-and-buy__buy"}," Замовити ",8,_1)):(re(),ge("button",{key:1,onClick:c=>C(s).removeProduct(l),class:"price-and-buy__buy"}," Видалити ",8,v1))])]))),128))}});const Dr=qe(y1,[["__scopeId","data-v-cd012ec8"]]),E1=t=>(ur("data-v-7bafaf74"),t=t(),hr(),t),b1={class:"products-list-wrapper"},w1={key:0,class:"without-products"},C1=E1(()=>G("p",null,"Продукти не знайдено",-1)),T1=[C1],I1=Ie({__name:"ProductsList",setup(t){const e=Cr();return(n,s)=>(re(),ge(je,null,[G("div",b1,[ee(Dr,{products:C(e).main.pizza},null,8,["products"]),C(e).main.checkedProducts.includes("burgers")?(re(),Qt(Dr,{key:0,products:C(e).main.burgers},null,8,["products"])):rn("",!0),C(e).main.checkedProducts.includes("roles")?(re(),Qt(Dr,{key:1,products:C(e).main.roles},null,8,["products"])):rn("",!0),C(e).main.checkedProducts.includes("salads")?(re(),Qt(Dr,{key:2,products:C(e).main.salads},null,8,["products"])):rn("",!0),C(e).main.checkedProducts.includes("drinks")?(re(),Qt(Dr,{key:3,products:C(e).main.drinks},null,8,["products"])):rn("",!0)]),C(e).main.error?(re(),ge("div",w1,T1)):rn("",!0)],64))}});const A1=qe(I1,[["__scopeId","data-v-7bafaf74"]]),Tb=t=>(ur("data-v-e95d9687"),t=t(),hr(),t),S1=["for"],R1=["id","value","onUpdate:modelValue"],k1=Tb(()=>G("li",{class:"item"},[G("span",null,"Про нас")],-1)),O1=Tb(()=>G("li",{class:"item"},[G("span",null,"Робота")],-1)),P1=[k1,O1],x1=Ie({__name:"ProductsMenuList",setup(t){const e=Cr(),{main:n}=vd(e),{fetchProducts:s,setCheckedProducts:i}=e,r=Be([{id:1,value:"burgers",product:"Бургери",checked:!1},{id:2,value:"roles",product:"Роли",checked:!1},{id:3,value:"salads",product:"Салати",checked:!1},{id:4,value:"drinks",product:"Напої",checked:!1}]),o=Ce(()=>{let a=[];return r.value.forEach(l=>{l.checked&&a.push(l.value)}),a});return ad(()=>{i(o.value)}),fn(()=>{s()}),(a,l)=>(re(),ge(je,null,[G("div",null,[G("h3",{class:St(["title-list",{"active-title-list":C(n).isShowMenu}])}," Товари ",2),G("ul",{class:St(["main-list",{"active-main-list":C(n).isShowMenu}])},[(re(!0),ge(je,null,dr(r.value,c=>(re(),ge("li",{class:"main-item",key:c.id},[G("label",{for:c.value},[Gn(G("input",{type:"checkbox",id:c.value,value:c.value,"onUpdate:modelValue":u=>c.checked=u},null,8,R1),[[ec,c.checked]]),zt(" "+Ne(c.product),1)],8,S1)]))),128))],2)]),G("ul",{class:St(["list",{"active-list":C(n).isShowMenu}])},P1,2)],64))}});const N1=qe(x1,[["__scopeId","data-v-e95d9687"]]),Ib="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA+ElEQVR4nO3YO0oEQRQF0IMgIiYaGmqkK3ABugHNXIVbcAuGpuIG3IAfUAxE9zChmWAyoPhkoE0GBHukne7nO3Djrlv9qypKKaWUUv69Szxhe+gzEU1ecShBkWhyhmUJigQesSlBkcALDiQoMskHTrBo4EW+coN1CYoEnrEnQZHAO46xMOvF7lpesOtcYK3rWfurjLCToUhgjKMMRaLJOVYyFAncVxHzvwuR5dEaZ3jZR7N8fm97MPCY+iGu6pk2Bd5+u0TpUptF464e+0mJ66Ev41NsrCZb3X0D8t3hw4aBiamcYskARZYDuis8YGveAymllFJK0b1PWPYJBNI2YFUAAAAASUVORK5CYII=",D1=["src"],M1=Ie({__name:"MainMenu",setup(t){const e=Cr(),n=Be(window.innerWidth),s=()=>{n.value=window.innerWidth};fn(()=>{window.addEventListener("resize",s),s()}),Ns(()=>{window.removeEventListener("resize",s)}),Ze(n,()=>{n.value>767&&r(!1)});const{main:i}=vd(e),{setShowMenu:r}=e;return(o,a)=>(re(),ge("div",{onClick:a[1]||(a[1]=Vo(()=>{},["stop"])),class:St(["menu",{"menu-active":C(i).isShowMenu}])},[Gn(G("img",{class:"menu-arrow",onClick:a[0]||(a[0]=l=>C(r)(!C(i).isShowMenu)),src:C(Ib),alt:""},null,8,D1),[[Yn,!C(i).isShowMenu&&n.value<767]]),ee(N1)],2))}});const F1=qe(M1,[["__scopeId","data-v-ba683935"]]),L1=t=>(ur("data-v-a52df7c0"),t=t(),hr(),t),U1={key:0,class:"order-list"},B1=["src"],V1={class:"order__product-info"},$1={class:"order__product-name"},j1={class:"order__product-description"},H1={class:"order__product-price"},W1={class:"order__order-info"},z1={class:"order__amount-products"},q1={class:"order__price-products"},K1={class:"order-sum-container"},G1={class:"order-dum"},Y1={key:1,class:"empty-basket"},X1=L1(()=>G("p",null,"Тут поки порожньо, зробіть замовлення!",-1)),Q1=Ie({__name:"BasketModal",setup(t){const e=Xf(),n=Dc();return(s,i)=>Gn((re(),ge("div",{onClick:i[3]||(i[3]=(...r)=>C(e).setBasketModal&&C(e).setBasketModal(...r)),class:"basket-modal-wrapper"},[G("div",{onClick:i[2]||(i[2]=Vo(()=>{},["stop"])),class:"basket-modal"},[C(n).order.order.length?(re(),ge("div",U1,[(re(!0),ge(je,null,dr(C(n).order.order,r=>(re(),ge("div",{class:"order",key:r.id},[G("img",{src:r.productCover,class:"order__product-photo"},null,8,B1),G("div",V1,[G("h3",$1,Ne(r.productName),1),G("p",j1,Ne(r.productDescription),1),G("span",H1,Ne(r.productPrice)+" грн ",1)]),G("div",W1,[G("span",z1,"Кількість - "+Ne(r.amountProducts)+" шт.",1),G("span",q1,"Вартість за "+Ne(r.amountProducts)+" шт. - "+Ne(r.sumProducts)+" грн.",1)])]))),128)),G("div",K1,[G("span",G1,"Вартість замовлення - "+Ne(C(e).basket.orderSum)+" грн.",1),G("button",{onClick:i[0]||(i[0]=(...r)=>C(e).orderConfirm&&C(e).orderConfirm(...r)),class:"confirm-order-btn"}," Замовлення підтверджую ")])])):(re(),ge("div",Y1,[X1,G("button",{onClick:i[1]||(i[1]=(...r)=>C(e).setBasketModal&&C(e).setBasketModal(...r)),class:"close-basket-btn"}," Закрити ")]))])],512)),[[Yn,C(e).basket.isBasketModalVisible]])}});const J1=qe(Q1,[["__scopeId","data-v-a52df7c0"]]),Z1=["src","onClick"],eF=Ie({__name:"MainPage",setup(t){const e=Cr(),{main:n}=vd(e),{setShowMenu:s}=e,i=Be(0),r=()=>{i.value=window.pageYOffset},o=()=>{window.scrollTo({top:0,behavior:"smooth"})};return fn(()=>{window.addEventListener("scroll",r)}),Ns(()=>{window.removeEventListener("scroll",r)}),(a,l)=>(re(),ge("div",{class:St(["wrapper",{"menu-active":C(n).isShowMenu}]),onClick:l[0]||(l[0]=c=>C(s)(!1))},[G("img",{class:St(["sroll-up-img",{"sroll-up-img_active":i.value>150}]),src:C(Ib),onClick:Vo(o,["stop"]),alt:""},null,10,Z1),ee(F1),ee(A1),ee(h1),ee(J1)],2))}});const tF=qe(eF,[["__scopeId","data-v-91e19be7"]]);/**
  * vee-validate v4.8.4
  * (c) 2023 Abdelrahman Awad
  * @license MIT
  */function qn(t){return typeof t=="function"}function so(t){return t==null}const gi=t=>t!==null&&!!t&&typeof t=="object"&&!Array.isArray(t);function Ab(t){return Number(t)>=0}function nF(t){const e=parseFloat(t);return isNaN(e)?t:e}const sF={};function iF(t){return sF[t]}const fa=Symbol("vee-validate-form"),rF=Symbol("vee-validate-field-instance"),kl=Symbol("Default empty value"),oF=typeof window<"u";function Fh(t){return qn(t)&&!!t.__locatorRef}function bs(t){return!!t&&qn(t.parse)&&t.__type==="VVTypedSchema"}function io(t){return!!t&&qn(t.validate)}function or(t){return t==="checkbox"||t==="radio"}function aF(t){return gi(t)||Array.isArray(t)}function Sb(t){return Array.isArray(t)?t.length===0:gi(t)&&Object.keys(t).length===0}function Fc(t){return/^\[.+\]$/i.test(t)}function lF(t){return Rb(t)&&t.multiple}function Rb(t){return t.tagName==="SELECT"}function cF(t,e){const n=![!1,null,void 0,0].includes(e.multiple)&&!Number.isNaN(e.multiple);return t==="select"&&"multiple"in e&&n}function uF(t,e){return!cF(t,e)&&e.type!=="file"&&!or(e.type)}function kb(t){return ep(t)&&t.target&&"submit"in t.target}function ep(t){return t?!!(typeof Event<"u"&&qn(Event)&&t instanceof Event||t&&t.srcElement):!1}function $m(t,e){return e in t&&t[e]!==kl}function nt(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;var n,s,i;if(Array.isArray(t)){if(n=t.length,n!=e.length)return!1;for(s=n;s--!==0;)if(!nt(t[s],e[s]))return!1;return!0}if(t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(s of t.entries())if(!e.has(s[0]))return!1;for(s of t.entries())if(!nt(s[1],e.get(s[0])))return!1;return!0}if(jm(t)&&jm(e))return!(t.size!==e.size||t.name!==e.name||t.lastModified!==e.lastModified||t.type!==e.type);if(t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(s of t.entries())if(!e.has(s[0]))return!1;return!0}if(ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(n=t.length,n!=e.length)return!1;for(s=n;s--!==0;)if(t[s]!==e[s])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===e.toString();if(i=Object.keys(t),n=i.length,n!==Object.keys(e).length)return!1;for(s=n;s--!==0;)if(!Object.prototype.hasOwnProperty.call(e,i[s]))return!1;for(s=n;s--!==0;){var r=i[s];if(!nt(t[r],e[r]))return!1}return!0}return t!==t&&e!==e}function jm(t){return oF?t instanceof File:!1}function Hm(t,e,n){typeof n.value=="object"&&(n.value=xe(n.value)),!n.enumerable||n.get||n.set||!n.configurable||!n.writable||e==="__proto__"?Object.defineProperty(t,e,n):t[e]=n.value}function xe(t){if(typeof t!="object")return t;var e=0,n,s,i,r=Object.prototype.toString.call(t);if(r==="[object Object]"?i=Object.create(t.__proto__||null):r==="[object Array]"?i=Array(t.length):r==="[object Set]"?(i=new Set,t.forEach(function(o){i.add(xe(o))})):r==="[object Map]"?(i=new Map,t.forEach(function(o,a){i.set(xe(a),xe(o))})):r==="[object Date]"?i=new Date(+t):r==="[object RegExp]"?i=new RegExp(t.source,t.flags):r==="[object DataView]"?i=new t.constructor(xe(t.buffer)):r==="[object ArrayBuffer]"?i=t.slice(0):r.slice(-6)==="Array]"&&(i=new t.constructor(t)),i){for(s=Object.getOwnPropertySymbols(t);e<s.length;e++)Hm(i,s[e],Object.getOwnPropertyDescriptor(t,s[e]));for(e=0,s=Object.getOwnPropertyNames(t);e<s.length;e++)Object.hasOwnProperty.call(i,n=s[e])&&i[n]===t[n]||Hm(i,n,Object.getOwnPropertyDescriptor(t,n))}return i||t}function tp(t){return Fc(t)?t.replace(/\[|\]/gi,""):t}function Je(t,e,n){return t?Fc(e)?t[tp(e)]:(e||"").split(/\.|\[(\d+)\]/).filter(Boolean).reduce((i,r)=>aF(i)&&r in i?i[r]:n,t):n}function as(t,e,n){if(Fc(e)){t[tp(e)]=n;return}const s=e.split(/\.|\[(\d+)\]/).filter(Boolean);let i=t;for(let r=0;r<s.length;r++){if(r===s.length-1){i[s[r]]=n;return}(!(s[r]in i)||so(i[s[r]]))&&(i[s[r]]=Ab(s[r+1])?[]:{}),i=i[s[r]]}}function Su(t,e){if(Array.isArray(t)&&Ab(e)){t.splice(Number(e),1);return}gi(t)&&delete t[e]}function Na(t,e){if(Fc(e)){delete t[tp(e)];return}const n=e.split(/\.|\[(\d+)\]/).filter(Boolean);let s=t;for(let r=0;r<n.length;r++){if(r===n.length-1){Su(s,n[r]);break}if(!(n[r]in s)||so(s[n[r]]))break;s=s[n[r]]}const i=n.map((r,o)=>Je(t,n.slice(0,o).join(".")));for(let r=i.length-1;r>=0;r--)if(Sb(i[r])){if(r===0){Su(t,n[0]);continue}Su(i[r-1],n[r-1])}}function ct(t){return Object.keys(t)}function np(t,e=void 0){const n=en();return(n==null?void 0:n.provides[t])||Dt(t,e)}function Lh(t,e,n){if(Array.isArray(t)){const s=[...t],i=s.findIndex(r=>nt(r,e));return i>=0?s.splice(i,1):s.push(e),s}return nt(t,e)?n:e}function Wm(t,e=0){let n=null,s=[];return function(...i){return n&&window.clearTimeout(n),n=window.setTimeout(()=>{const r=t(...i);s.forEach(o=>o(r)),s=[]},e),new Promise(r=>s.push(r))}}function hF(t,e){return gi(e)&&e.number?nF(t):t}function Uh(t,e){let n;return async function(...i){const r=t(...i);n=r;const o=await r;return r!==n||(n=void 0,e(o,i)),o}}function dF({get:t,set:e}){const n=Be(xe(t()));return Ze(t,s=>{nt(s,n.value)||(n.value=xe(s))},{deep:!0}),Ze(n,s=>{nt(s,t())||e(xe(s))},{deep:!0}),n}function fF(t){return qn(t)?t():C(t)}function pF(t){return Ce(()=>fF(t))}const Lc=(t,e,n)=>e.slots.default?typeof t=="string"||!t?e.slots.default(n()):{default:()=>{var s,i;return(i=(s=e.slots).default)===null||i===void 0?void 0:i.call(s,n())}}:e.slots.default;function Ru(t){if(Ob(t))return t._value}function Ob(t){return"_value"in t}function sp(t){if(!ep(t))return t;const e=t.target;if(or(e.type)&&Ob(e))return Ru(e);if(e.type==="file"&&e.files){const n=Array.from(e.files);return e.multiple?n:n[0]}if(lF(e))return Array.from(e.options).filter(n=>n.selected&&!n.disabled).map(Ru);if(Rb(e)){const n=Array.from(e.options).find(s=>s.selected);return n?Ru(n):e.value}return e.value}function Pb(t){const e={};return Object.defineProperty(e,"_$$isNormalized",{value:!0,writable:!1,enumerable:!1,configurable:!1}),t?gi(t)&&t._$$isNormalized?t:gi(t)?Object.keys(t).reduce((n,s)=>{const i=gF(t[s]);return t[s]!==!1&&(n[s]=zm(i)),n},e):typeof t!="string"?e:t.split("|").reduce((n,s)=>{const i=mF(s);return i.name&&(n[i.name]=zm(i.params)),n},e):e}function gF(t){return t===!0?[]:Array.isArray(t)||gi(t)?t:[t]}function zm(t){const e=n=>typeof n=="string"&&n[0]==="@"?_F(n.slice(1)):n;return Array.isArray(t)?t.map(e):t instanceof RegExp?[t]:Object.keys(t).reduce((n,s)=>(n[s]=e(t[s]),n),{})}const mF=t=>{let e=[];const n=t.split(":")[0];return t.includes(":")&&(e=t.split(":").slice(1).join(":").split(",")),{name:n,params:e}};function _F(t){const e=n=>Je(n,t)||n[t];return e.__locatorRef=t,e}function vF(t){return Array.isArray(t)?t.filter(Fh):ct(t).filter(e=>Fh(t[e])).map(e=>t[e])}const yF={generateMessage:({field:t})=>`${t} is not valid.`,bails:!0,validateOnBlur:!0,validateOnChange:!0,validateOnInput:!1,validateOnModelUpdate:!0};let EF=Object.assign({},yF);const ip=()=>EF;async function xb(t,e,n={}){const s=n==null?void 0:n.bails,i={name:(n==null?void 0:n.name)||"{field}",rules:e,label:n==null?void 0:n.label,bails:s??!0,formData:(n==null?void 0:n.values)||{}},o=(await bF(i,t)).errors;return{errors:o,valid:!o.length}}async function bF(t,e){if(bs(t.rules)||io(t.rules))return CF(e,t.rules);if(qn(t.rules)||Array.isArray(t.rules)){const o={field:t.label||t.name,name:t.name,label:t.label,form:t.formData,value:e},a=Array.isArray(t.rules)?t.rules:[t.rules],l=a.length,c=[];for(let u=0;u<l;u++){const h=a[u],d=await h(e,o);if(typeof d!="string"&&d)continue;const m=typeof d=="string"?d:Db(o);if(c.push(m),t.bails)return{errors:c}}return{errors:c}}const n=Object.assign(Object.assign({},t),{rules:Pb(t.rules)}),s=[],i=Object.keys(n.rules),r=i.length;for(let o=0;o<r;o++){const a=i[o],l=await TF(n,e,{name:a,params:n.rules[a]});if(l.error&&(s.push(l.error),t.bails))return{errors:s}}return{errors:s}}function wF(t){return!!t&&t.name==="ValidationError"}function Nb(t){return{__type:"VVTypedSchema",async parse(n){var s;try{return{output:await t.validate(n,{abortEarly:!1}),errors:[]}}catch(i){if(!wF(i))throw i;if(!(!((s=i.inner)===null||s===void 0)&&s.length)&&i.errors.length)return{errors:[{path:i.path,errors:i.errors}]};const r=i.inner.reduce((o,a)=>{const l=a.path||"";return o[l]||(o[l]={errors:[],path:l}),o[l].errors.push(...a.errors),o},{});return{errors:Object.values(r)}}}}}async function CF(t,e){const s=await(bs(e)?e:Nb(e)).parse(t),i=[];for(const r of s.errors)r.errors.length&&i.push(...r.errors);return{errors:i}}async function TF(t,e,n){const s=iF(n.name);if(!s)throw new Error(`No such validator '${n.name}' exists.`);const i=IF(n.params,t.formData),r={field:t.label||t.name,name:t.name,label:t.label,value:e,form:t.formData,rule:Object.assign(Object.assign({},n),{params:i})},o=await s(e,i,r);return typeof o=="string"?{error:o}:{error:o?void 0:Db(r)}}function Db(t){const e=ip().generateMessage;return e?e(t):"Field is invalid"}function IF(t,e){const n=s=>Fh(s)?s(e):s;return Array.isArray(t)?t.map(n):Object.keys(t).reduce((s,i)=>(s[i]=n(t[i]),s),{})}async function AF(t,e){const s=await(bs(t)?t:Nb(t)).parse(e),i={},r={};for(const o of s.errors){const a=o.errors,l=(o.path||"").replace(/\["(\d+)"\]/g,(c,u)=>`[${u}]`);i[l]={valid:!a.length,errors:a},a.length&&(r[l]=a[0])}return{valid:!s.errors.length,results:i,errors:r,values:s.value}}async function SF(t,e,n){const i=ct(t).map(async c=>{var u,h,d;const f=(u=n==null?void 0:n.names)===null||u===void 0?void 0:u[c],m=await xb(Je(e,c),t[c],{name:(f==null?void 0:f.name)||c,label:f==null?void 0:f.label,values:e,bails:(d=(h=n==null?void 0:n.bailsMap)===null||h===void 0?void 0:h[c])!==null&&d!==void 0?d:!0});return Object.assign(Object.assign({},m),{path:c})});let r=!0;const o=await Promise.all(i),a={},l={};for(const c of o)a[c.path]={valid:c.valid,errors:c.errors},c.valid||(r=!1,l[c.path]=c.errors[0]);return{valid:r,results:a,errors:l}}let qm=0;function RF(t,e){const{value:n,initialValue:s,setInitialValue:i}=Mb(t,e.modelValue,e.form),{errorMessage:r,errors:o,setErrors:a}=OF(t,e.form),l=kF(n,s,o),c=qm>=Number.MAX_SAFE_INTEGER?0:++qm;function u(h){var d;"value"in h&&(n.value=h.value),"errors"in h&&a(h.errors),"touched"in h&&(l.touched=(d=h.touched)!==null&&d!==void 0?d:l.touched),"initialValue"in h&&i(h.initialValue)}return{id:c,path:t,value:n,initialValue:s,meta:l,errors:o,errorMessage:r,setState:u}}function Mb(t,e,n){const s=Be(C(e));function i(){return n?Je(n.meta.value.initialValues,C(t),C(s)):C(s)}function r(c){if(!n){s.value=c;return}n.stageInitialValue(C(t),c,!0)}const o=Ce(i);if(!n)return{value:Be(i()),initialValue:o,setInitialValue:r};const a=e?C(e):Je(n.values,C(t),C(o));return n.stageInitialValue(C(t),a,!0),{value:Ce({get(){return Je(n.values,C(t))},set(c){n.setFieldValue(C(t),c)}}),initialValue:o,setInitialValue:r}}function kF(t,e,n){const s=In({touched:!1,pending:!1,valid:!0,validated:!!C(n).length,initialValue:Ce(()=>C(e)),dirty:Ce(()=>!nt(C(t),C(e)))});return Ze(n,i=>{s.valid=!i.length},{immediate:!0,flush:"sync"}),s}function OF(t,e){function n(i){return i?Array.isArray(i)?i:[i]:[]}if(!e){const i=Be([]);return{errors:i,errorMessage:Ce(()=>i.value[0]),setErrors:r=>{i.value=n(r)}}}const s=Ce(()=>e.errorBag.value[C(t)]||[]);return{errors:s,errorMessage:Ce(()=>s.value[0]),setErrors:i=>{e.setFieldErrorBag(C(t),n(i))}}}function Uc(t,e,n){return or(n==null?void 0:n.type)?NF(t,e,n):Fb(t,e,n)}function Fb(t,e,n){const{initialValue:s,validateOnMount:i,bails:r,type:o,checkedValue:a,label:l,validateOnValueUpdate:c,uncheckedValue:u,controlled:h,keepValueOnUnmount:d,modelPropName:f,syncVModel:m,form:T}=PF(n),P=h?np(fa):void 0,v=T||P,g=pF(t);let b=!1;const{id:S,value:w,initialValue:A,meta:I,setState:E,errors:N,errorMessage:O}=RF(g,{modelValue:s,form:v});m&&DF({value:w,prop:f,handleChange:Z});const V=()=>{I.touched=!0},L=Ce(()=>{let k=C(e);const W=C(v==null?void 0:v.schema);return W&&!io(W)&&!bs(W)&&(k=xF(W,C(g))||k),io(k)||bs(k)||qn(k)||Array.isArray(k)?k:Pb(k)});async function J(k){var W,oe;return v!=null&&v.validateSchema?(W=(await v.validateSchema(k)).results[C(g)])!==null&&W!==void 0?W:{valid:!0,errors:[]}:xb(w.value,L.value,{name:C(g),label:C(l),values:(oe=v==null?void 0:v.values)!==null&&oe!==void 0?oe:{},bails:r})}const $=Uh(async()=>(I.pending=!0,I.validated=!0,J("validated-only")),k=>(b&&(k.valid=!0,k.errors=[]),E({errors:k.errors}),I.pending=!1,k)),le=Uh(async()=>J("silent"),k=>(b&&(k.valid=!0),I.valid=k.valid,k));function ne(k){return(k==null?void 0:k.mode)==="silent"?le():$()}function Z(k,W=!0){const oe=sp(k);w.value=oe,!c&&W&&$()}fn(()=>{if(i)return $();(!v||!v.validateSchema)&&le()});function ae(k){I.touched=k}let ve,Ge=xe(w.value);function Le(){ve=Ze(w,(k,W)=>{if(nt(k,W)&&nt(k,Ge))return;(c?$:le)(),Ge=xe(k)},{deep:!0})}Le();function be(k){var W;ve==null||ve();const oe=k&&"value"in k?k.value:A.value;E({value:xe(oe),initialValue:xe(oe),touched:(W=k==null?void 0:k.touched)!==null&&W!==void 0?W:!1,errors:(k==null?void 0:k.errors)||[]}),I.pending=!1,I.validated=!1,le(),vn(()=>{Le()})}function wt(k){w.value=k}function Gt(k){E({errors:Array.isArray(k)?k:[k]})}const M={id:S,name:g,label:l,value:w,meta:I,errors:N,errorMessage:O,type:o,checkedValue:a,uncheckedValue:u,bails:r,keepValueOnUnmount:d,resetField:be,handleReset:()=>be(),validate:ne,handleChange:Z,handleBlur:V,setState:E,setTouched:ae,setErrors:Gt,setValue:wt};if(Xs(rF,M),De(e)&&typeof C(e)!="function"&&Ze(e,(k,W)=>{nt(k,W)||(I.validated?$():le())},{deep:!0}),!v)return M;v.register(M),Ns(()=>{b=!0,v.unregister(M)});const K=Ce(()=>{const k=L.value;return!k||qn(k)||io(k)||bs(k)||Array.isArray(k)?{}:Object.keys(k).reduce((W,oe)=>{const Oe=vF(k[oe]).map(he=>he.__locatorRef).reduce((he,p)=>{const y=Je(v.values,p)||v.values[p];return y!==void 0&&(he[p]=y),he},{});return Object.assign(W,Oe),W},{})});return Ze(K,(k,W)=>{if(!Object.keys(k).length)return;!nt(k,W)&&(I.validated?$():le())}),M}function PF(t){var e;const n=()=>({initialValue:void 0,validateOnMount:!1,bails:!0,label:void 0,validateOnValueUpdate:!0,keepValueOnUnmount:void 0,modelPropName:"modelValue",syncVModel:!0,controlled:!0}),i=((e=t==null?void 0:t.syncVModel)!==null&&e!==void 0?e:!0)&&!("initialValue"in(t||{}))?Bh(en(),(t==null?void 0:t.modelPropName)||"modelValue"):t==null?void 0:t.initialValue;if(!t)return Object.assign(Object.assign({},n()),{initialValue:i});const r="valueProp"in t?t.valueProp:t.checkedValue,o="standalone"in t?!t.standalone:t.controlled;return Object.assign(Object.assign(Object.assign({},n()),t||{}),{initialValue:i,controlled:o??!0,checkedValue:r})}function xF(t,e){if(t)return t[e]}function NF(t,e,n){const s=n!=null&&n.standalone?void 0:np(fa),i=n==null?void 0:n.checkedValue,r=n==null?void 0:n.uncheckedValue;function o(a){const l=a.handleChange,c=Ce(()=>{const h=C(a.value),d=C(i);return Array.isArray(h)?h.findIndex(f=>nt(f,d))>=0:nt(d,h)});function u(h,d=!0){var f;if(c.value===((f=h==null?void 0:h.target)===null||f===void 0?void 0:f.checked)){d&&a.validate();return}let m=sp(h);s||(m=Lh(C(a.value),C(i),C(r))),l(m,d)}return Object.assign(Object.assign({},a),{checked:c,checkedValue:i,uncheckedValue:r,handleChange:u})}return o(Fb(t,e,n))}function DF({prop:t,value:e,handleChange:n}){const s=en();if(!s)return;const i=t||"modelValue",r=`update:${i}`;i in s.props&&(Ze(e,o=>{nt(o,Bh(s,i))||s.emit(r,o)}),Ze(()=>Bh(s,i),o=>{if(o===kl&&e.value===void 0)return;const a=o===kl?void 0:o;nt(a,hF(e.value,s.props.modelModifiers))||n(a)}))}function Bh(t,e){if(t)return t.props[e]}const MF=Ie({name:"Field",inheritAttrs:!1,props:{as:{type:[String,Object],default:void 0},name:{type:String,required:!0},rules:{type:[Object,String,Function],default:void 0},validateOnMount:{type:Boolean,default:!1},validateOnBlur:{type:Boolean,default:void 0},validateOnChange:{type:Boolean,default:void 0},validateOnInput:{type:Boolean,default:void 0},validateOnModelUpdate:{type:Boolean,default:void 0},bails:{type:Boolean,default:()=>ip().bails},label:{type:String,default:void 0},uncheckedValue:{type:null,default:void 0},modelValue:{type:null,default:kl},modelModifiers:{type:null,default:()=>({})},"onUpdate:modelValue":{type:null,default:void 0},standalone:{type:Boolean,default:!1},keepValue:{type:Boolean,default:void 0}},setup(t,e){const n=It(t,"rules"),s=It(t,"name"),i=It(t,"label"),r=It(t,"uncheckedValue"),o=It(t,"keepValue"),{errors:a,value:l,errorMessage:c,validate:u,handleChange:h,handleBlur:d,setTouched:f,resetField:m,handleReset:T,meta:P,checked:v,setErrors:g}=Uc(s,n,{validateOnMount:t.validateOnMount,bails:t.bails,standalone:t.standalone,type:e.attrs.type,initialValue:LF(t,e),checkedValue:e.attrs.value,uncheckedValue:r,label:i,validateOnValueUpdate:!1,keepValueOnUnmount:o}),b=function(N,O=!0){h(N,O),e.emit("update:modelValue",l.value)},S=E=>{or(e.attrs.type)||(l.value=sp(E))},w=function(N){S(N),e.emit("update:modelValue",l.value)},A=Ce(()=>{const{validateOnInput:E,validateOnChange:N,validateOnBlur:O,validateOnModelUpdate:V}=FF(t),L=[d,e.attrs.onBlur,O?u:void 0].filter(Boolean),J=[Z=>b(Z,E),e.attrs.onInput].filter(Boolean),$=[Z=>b(Z,N),e.attrs.onChange].filter(Boolean),le={name:t.name,onBlur:L,onInput:J,onChange:$};le["onUpdate:modelValue"]=Z=>b(Z,V),or(e.attrs.type)&&v&&(le.checked=v.value);const ne=Km(t,e);return uF(ne,e.attrs)&&(le.value=l.value),le});function I(){return{field:A.value,value:l.value,meta:P,errors:a.value,errorMessage:c.value,validate:u,resetField:m,handleChange:b,handleInput:w,handleReset:T,handleBlur:d,setTouched:f,setErrors:g}}return e.expose({setErrors:g,setTouched:f,reset:m,validate:u,handleChange:h}),()=>{const E=Yl(Km(t,e)),N=Lc(E,e,I);return E?Ss(E,Object.assign(Object.assign({},e.attrs),A.value),N):N}}});function Km(t,e){let n=t.as||"";return!t.as&&!e.slots.default&&(n="input"),n}function FF(t){var e,n,s,i;const{validateOnInput:r,validateOnChange:o,validateOnBlur:a,validateOnModelUpdate:l}=ip();return{validateOnInput:(e=t.validateOnInput)!==null&&e!==void 0?e:r,validateOnChange:(n=t.validateOnChange)!==null&&n!==void 0?n:o,validateOnBlur:(s=t.validateOnBlur)!==null&&s!==void 0?s:a,validateOnModelUpdate:(i=t.validateOnModelUpdate)!==null&&i!==void 0?i:l}}function LF(t,e){return or(e.attrs.type)?$m(t,"modelValue")?t.modelValue:void 0:$m(t,"modelValue")?t.modelValue:e.attrs.value}const Lb=MF;let UF=0;function Ub(t){const e=C(t==null?void 0:t.initialValues)||{},n=C(t==null?void 0:t.validationSchema);return n&&bs(n)&&qn(n.cast)?xe(n.cast(e)||{}):xe(e)}function Bc(t){var e;const n=UF++,s=new Set;let i=!1;const r=Be({}),o=Be(!1),a=Be(0),l=[],c=In(Ub(t)),{errorBag:u,setErrorBag:h,setFieldErrorBag:d}=$F(t==null?void 0:t.initialErrors),f=Ce(()=>ct(u.value).reduce((_,R)=>{const F=u.value[R];return F&&F.length&&(_[R]=F[0]),_},{}));function m(_){const R=r.value[_];return Array.isArray(R)?R[0]:R}function T(_){return!!r.value[_]}const P=Ce(()=>ct(r.value).reduce((_,R)=>{const F=m(R);return F&&(_[R]={name:C(F.name)||"",label:C(F.label)||""}),_},{})),v=Ce(()=>ct(r.value).reduce((_,R)=>{var F;const B=m(R);return B&&(_[R]=(F=B.bails)!==null&&F!==void 0?F:!0),_},{})),g=Object.assign({},(t==null?void 0:t.initialErrors)||{}),b=(e=t==null?void 0:t.keepValuesOnUnmount)!==null&&e!==void 0?e:!1,{initialValues:S,originalInitialValues:w,setInitialValues:A}=VF(r,c,t),I=BF(r,c,w,f),E=Ce(()=>[...s,...ct(r.value)].reduce((_,R)=>{const F=Je(c,R);return as(_,R,F),_},{})),N=t==null?void 0:t.validationSchema,O=Wm(j,5),V=Wm(j,5),L=Uh(async _=>await _==="silent"?O():V(),(_,[R])=>{const F=ne.fieldsByPath.value||{},B=ct(ne.errorBag.value);return[...new Set([...ct(_.results),...ct(F),...B])].reduce((Q,se)=>{const de=F[se],Se=(_.results[se]||{errors:[]}).errors,Ve={errors:Se,valid:!Se.length};if(Q.results[se]=Ve,Ve.valid||(Q.errors[se]=Ve.errors[0]),!de)return Ge(se,Se),Q;if(ae(de,Zn=>Zn.meta.valid=Ve.valid),R==="silent")return Q;const Jn=Array.isArray(de)?de.some(Zn=>Zn.meta.validated):de.meta.validated;return R==="validated-only"&&!Jn||ae(de,Zn=>Zn.setState({errors:Ve.errors})),Q},{valid:_.valid,results:{},errors:{}})});function J(_){return function(F,B){return function(Q){return Q instanceof Event&&(Q.preventDefault(),Q.stopPropagation()),k(ct(r.value).reduce((se,de)=>(se[de]=!0,se),{})),o.value=!0,a.value++,x().then(se=>{const de=xe(c);if(se.valid&&typeof F=="function"){const Se=xe(E.value);let Ve=_?Se:de;return se.values&&(Ve=se.values),F(Ve,{evt:Q,controlledValues:Se,setErrors:Le,setFieldError:Ge,setTouched:k,setFieldTouched:K,setValues:wt,setFieldValue:be,resetForm:oe,resetField:W})}!se.valid&&typeof B=="function"&&B({values:de,evt:Q,errors:se.errors,results:se.results})}).then(se=>(o.value=!1,se),se=>{throw o.value=!1,se})}}}const le=J(!1);le.withControlled=J(!0);const ne={formId:n,fieldsByPath:r,values:c,controlledValues:E,errorBag:u,errors:f,schema:N,submitCount:a,meta:I,isSubmitting:o,fieldArrays:l,keepValuesOnUnmount:b,validateSchema:C(N)?L:void 0,validate:x,register:p,unregister:y,setFieldErrorBag:d,validateField:D,setFieldValue:be,setValues:wt,setErrors:Le,setFieldError:Ge,setFieldTouched:K,setTouched:k,resetForm:oe,resetField:W,handleSubmit:le,stageInitialValue:z,unsetInitialValue:U,setFieldInitialValue:Y,useFieldModel:M};function Z(_){return Array.isArray(_)}function ae(_,R){return Array.isArray(_)?_.forEach(R):R(_)}function ve(_){Object.values(r.value).forEach(R=>{R&&ae(R,_)})}function Ge(_,R){d(_,R)}function Le(_){h(_)}function be(_,R,{force:F}={force:!1}){var B;const X=r.value[_],Q=xe(R);if(!X){as(c,_,Q);return}if(Z(X)&&((B=X[0])===null||B===void 0?void 0:B.type)==="checkbox"&&!Array.isArray(R)){const de=xe(Lh(Je(c,_)||[],R,void 0));as(c,_,de);return}let se=Q;!Z(X)&&X.type==="checkbox"&&!F&&!i&&(se=xe(Lh(Je(c,_),R,C(X.uncheckedValue)))),as(c,_,se)}function wt(_){ct(c).forEach(R=>{delete c[R]}),ct(_).forEach(R=>{be(R,_[R])}),l.forEach(R=>R&&R.reset())}function Gt(_){const{value:R}=Mb(_,void 0,ne);return Ze(R,()=>{T(C(_))||x({mode:"validated-only"})},{deep:!0}),s.add(C(_)),R}function M(_){return Array.isArray(_)?_.map(Gt):Gt(_)}function K(_,R){const F=r.value[_];F&&ae(F,B=>B.setTouched(R))}function k(_){ct(_).forEach(R=>{K(R,!!_[R])})}function W(_,R){const F=r.value[_];F&&ae(F,B=>B.resetField(R))}function oe(_){i=!0,ve(F=>F.resetField());const R=_!=null&&_.values?_.values:w.value;A(R),wt(R),_!=null&&_.touched&&k(_.touched),Le((_==null?void 0:_.errors)||{}),a.value=(_==null?void 0:_.submitCount)||0,vn(()=>{i=!1})}function Oe(_,R){const F=Ts(_),B=R;if(!r.value[B]){r.value[B]=F;return}const X=r.value[B];X&&!Array.isArray(X)&&(r.value[B]=[X]),r.value[B]=[...r.value[B],F]}function he(_,R){const F=R,B=r.value[F];if(B){if(!Z(B)&&_.id===B.id){delete r.value[F];return}if(Z(B)){const X=B.findIndex(Q=>Q.id===_.id);if(X===-1)return;B.splice(X,1),B.length||delete r.value[F]}}}function p(_){const R=C(_.name);Oe(_,R),De(_.name)&&Ze(_.name,async(B,X)=>{await vn(),he(_,X),Oe(_,B),(f.value[X]||f.value[B])&&(Ge(X,void 0),D(B)),await vn(),T(X)||Na(c,X)});const F=C(_.errorMessage);F&&(g==null?void 0:g[R])!==F&&D(R),delete g[R]}function y(_){const R=C(_.name),F=r.value[R],B=!!F&&Z(F);he(_,R),vn(()=>{var X;const Q=(X=C(_.keepValueOnUnmount))!==null&&X!==void 0?X:C(b),se=Je(c,R);if(B&&(F===r.value[R]||!r.value[R])&&!Q)if(Array.isArray(se)){const Se=se.findIndex(Ve=>nt(Ve,C(_.checkedValue)));if(Se>-1){const Ve=[...se];Ve.splice(Se,1),be(R,Ve,{force:!0})}}else se===C(_.checkedValue)&&Na(c,R);if(!T(R)){if(Ge(R,void 0),Q||B&&Array.isArray(se)&&!Sb(se))return;Na(c,R)}})}async function x(_){const R=(_==null?void 0:_.mode)||"force";if(R==="force"&&ve(Q=>Q.meta.validated=!0),ne.validateSchema)return ne.validateSchema(R);const F=await Promise.all(Object.values(r.value).map(Q=>{const se=Array.isArray(Q)?Q[0]:Q;return se?se.validate(_).then(de=>({key:C(se.name),valid:de.valid,errors:de.errors})):Promise.resolve({key:"",valid:!0,errors:[]})})),B={},X={};for(const Q of F)B[Q.key]={valid:Q.valid,errors:Q.errors},Q.errors.length&&(X[Q.key]=Q.errors[0]);return{valid:F.every(Q=>Q.valid),results:B,errors:X}}async function D(_){const R=r.value[_];return R?Array.isArray(R)?R.map(F=>F.validate())[0]:R.validate():Promise.resolve({errors:[],valid:!0})}function U(_){Na(S.value,_)}function z(_,R,F=!1){as(c,_,R),Y(_,R),F&&!(t!=null&&t.initialValues)&&as(w.value,_,xe(R))}function Y(_,R){as(S.value,_,xe(R))}async function j(){const _=C(N);return _?io(_)||bs(_)?await AF(_,c):await SF(_,c,{names:P.value,bailsMap:v.value}):{valid:!0,results:{},errors:{}}}const q=le((_,{evt:R})=>{kb(R)&&R.target.submit()});return fn(()=>{if(t!=null&&t.initialErrors&&Le(t.initialErrors),t!=null&&t.initialTouched&&k(t.initialTouched),t!=null&&t.validateOnMount){x();return}ne.validateSchema&&ne.validateSchema("silent")}),De(N)&&Ze(N,()=>{var _;(_=ne.validateSchema)===null||_===void 0||_.call(ne,"validated-only")}),Xs(fa,ne),Object.assign(Object.assign({},ne),{handleReset:()=>oe(),submitForm:q})}function BF(t,e,n,s){const i={touched:"some",pending:"some",valid:"every"},r=Ce(()=>!nt(e,C(n)));function o(){const l=Object.values(t.value).flat(1).filter(Boolean);return ct(i).reduce((c,u)=>{const h=i[u];return c[u]=l[h](d=>d.meta[u]),c},{})}const a=In(o());return ad(()=>{const l=o();a.touched=l.touched,a.valid=l.valid,a.pending=l.pending}),Ce(()=>Object.assign(Object.assign({initialValues:C(n)},a),{valid:a.valid&&!ct(s.value).length,dirty:r.value}))}function VF(t,e,n){const s=Ub(n),i=n==null?void 0:n.initialValues,r=Be(s),o=Be(xe(s));function a(l,c=!1){r.value=xe(l),o.value=xe(l),c&&ct(t.value).forEach(u=>{const h=t.value[u],d=Array.isArray(h)?h.some(m=>m.meta.touched):h==null?void 0:h.meta.touched;if(!h||d)return;const f=Je(r.value,u);as(e,u,xe(f))})}return De(i)&&Ze(i,l=>{a(l,!0)},{deep:!0}),{initialValues:r,originalInitialValues:o,setInitialValues:a}}function $F(t){const e=Be({});function n(r){return Array.isArray(r)?r:r?[r]:[]}function s(r,o){if(!o){delete e.value[r];return}e.value[r]=n(o)}function i(r){e.value=ct(r).reduce((o,a)=>{const l=r[a];return l&&(o[a]=n(l)),o},{})}return t&&i(t),{errorBag:e,setErrorBag:i,setFieldErrorBag:s}}Ie({name:"Form",inheritAttrs:!1,props:{as:{type:String,default:"form"},validationSchema:{type:Object,default:void 0},initialValues:{type:Object,default:void 0},initialErrors:{type:Object,default:void 0},initialTouched:{type:Object,default:void 0},validateOnMount:{type:Boolean,default:!1},onSubmit:{type:Function,default:void 0},onInvalidSubmit:{type:Function,default:void 0},keepValues:{type:Boolean,default:!1}},setup(t,e){const n=It(t,"initialValues"),s=It(t,"validationSchema"),i=It(t,"keepValues"),{errors:r,errorBag:o,values:a,meta:l,isSubmitting:c,submitCount:u,controlledValues:h,validate:d,validateField:f,handleReset:m,resetForm:T,handleSubmit:P,setErrors:v,setFieldError:g,setFieldValue:b,setValues:S,setFieldTouched:w,setTouched:A,resetField:I}=Bc({validationSchema:s.value?s:void 0,initialValues:n,initialErrors:t.initialErrors,initialTouched:t.initialTouched,validateOnMount:t.validateOnMount,keepValuesOnUnmount:i}),E=P((ne,{evt:Z})=>{kb(Z)&&Z.target.submit()},t.onInvalidSubmit),N=t.onSubmit?P(t.onSubmit,t.onInvalidSubmit):E;function O(ne){ep(ne)&&ne.preventDefault(),m(),typeof e.attrs.onReset=="function"&&e.attrs.onReset()}function V(ne,Z){return P(typeof ne=="function"&&!Z?ne:Z,t.onInvalidSubmit)(ne)}function L(){return xe(a)}function J(){return xe(l.value)}function $(){return xe(r.value)}function le(){return{meta:l.value,errors:r.value,errorBag:o.value,values:a,isSubmitting:c.value,submitCount:u.value,controlledValues:h.value,validate:d,validateField:f,handleSubmit:V,handleReset:m,submitForm:E,setErrors:v,setFieldError:g,setFieldValue:b,setValues:S,setFieldTouched:w,setTouched:A,resetForm:T,resetField:I,getValues:L,getMeta:J,getErrors:$}}return e.expose({setFieldError:g,setErrors:v,setFieldValue:b,setValues:S,setFieldTouched:w,setTouched:A,resetForm:T,validate:d,validateField:f,resetField:I,getValues:L,getMeta:J,getErrors:$}),function(){const Z=t.as==="form"?t.as:Yl(t.as),ae=Lc(Z,e,le);if(!t.as)return ae;const ve=t.as==="form"?{novalidate:!0}:{};return Ss(Z,Object.assign(Object.assign(Object.assign({},ve),e.attrs),{onSubmit:N,onReset:O}),ae)}}});function jF(t){const e=np(fa,void 0),n=Be([]),s=()=>{},i={fields:n,remove:s,push:s,swap:s,insert:s,update:s,replace:s,prepend:s,move:s};if(!e||!C(t))return i;const r=e.fieldArrays.find(w=>C(w.path)===C(t));if(r)return r;let o=0;function a(){return Je(e==null?void 0:e.values,C(t),[])||[]}function l(){const w=a();n.value=w.map(u),c()}l();function c(){const w=n.value.length;for(let A=0;A<w;A++){const I=n.value[A];I.isFirst=A===0,I.isLast=A===w-1}}function u(w){const A=o++;return{key:A,value:dF({get(){const E=Je(e==null?void 0:e.values,C(t),[])||[],N=n.value.findIndex(O=>O.key===A);return N===-1?w:E[N]},set(E){const N=n.value.findIndex(O=>O.key===A);N!==-1&&v(N,E)}}),isFirst:!1,isLast:!1}}function h(){c(),e==null||e.validate({mode:"silent"})}function d(w){const A=C(t),I=Je(e==null?void 0:e.values,A);if(!I||!Array.isArray(I))return;const E=[...I];E.splice(w,1),e==null||e.unsetInitialValue(A+`[${w}]`),e==null||e.setFieldValue(A,E),n.value.splice(w,1),h()}function f(w){const A=C(t),I=Je(e==null?void 0:e.values,A),E=so(I)?[]:I;if(!Array.isArray(E))return;const N=[...E];N.push(w),e==null||e.stageInitialValue(A+`[${N.length-1}]`,w),e==null||e.setFieldValue(A,N),n.value.push(u(w)),h()}function m(w,A){const I=C(t),E=Je(e==null?void 0:e.values,I);if(!Array.isArray(E)||!(w in E)||!(A in E))return;const N=[...E],O=[...n.value],V=N[w];N[w]=N[A],N[A]=V;const L=O[w];O[w]=O[A],O[A]=L,e==null||e.setFieldValue(I,N),n.value=O,c()}function T(w,A){const I=C(t),E=Je(e==null?void 0:e.values,I);if(!Array.isArray(E)||E.length<w)return;const N=[...E],O=[...n.value];N.splice(w,0,A),O.splice(w,0,u(A)),e==null||e.setFieldValue(I,N),n.value=O,h()}function P(w){const A=C(t);e==null||e.setFieldValue(A,w),l(),h()}function v(w,A){const I=C(t),E=Je(e==null?void 0:e.values,I);!Array.isArray(E)||E.length-1<w||(e==null||e.setFieldValue(`${I}[${w}]`,A),e==null||e.validate({mode:"validated-only"}))}function g(w){const A=C(t),I=Je(e==null?void 0:e.values,A),E=so(I)?[]:I;if(!Array.isArray(E))return;const N=[w,...E];e==null||e.stageInitialValue(A+`[${N.length-1}]`,w),e==null||e.setFieldValue(A,N),n.value.unshift(u(w)),h()}function b(w,A){const I=C(t),E=Je(e==null?void 0:e.values,I),N=so(E)?[]:[...E];if(!Array.isArray(E)||!(w in E)||!(A in E))return;const O=[...n.value],V=O[w];O.splice(w,1),O.splice(A,0,V);const L=N[w];N.splice(w,1),N.splice(A,0,L),e==null||e.setFieldValue(I,N),n.value=O,h()}const S={fields:n,remove:d,push:f,swap:m,insert:T,update:v,replace:P,prepend:g,move:b};return e.fieldArrays.push(Object.assign({path:t,reset:l},S)),Ns(()=>{const w=e.fieldArrays.findIndex(A=>C(A.path)===C(t));w>=0&&e.fieldArrays.splice(w,1)}),Ze(a,w=>{const A=n.value.map(I=>I.value);nt(w,A)||l()}),S}Ie({name:"FieldArray",inheritAttrs:!1,props:{name:{type:String,required:!0}},setup(t,e){const{push:n,remove:s,swap:i,insert:r,replace:o,update:a,prepend:l,move:c,fields:u}=jF(It(t,"name"));function h(){return{fields:u.value,push:n,remove:s,swap:i,insert:r,update:a,replace:o,prepend:l,move:c}}return e.expose({push:n,remove:s,swap:i,insert:r,update:a,replace:o,prepend:l,move:c}),()=>Lc(void 0,e,h)}});const HF=Ie({name:"ErrorMessage",props:{as:{type:String,default:void 0},name:{type:String,required:!0}},setup(t,e){const n=Dt(fa,void 0),s=Ce(()=>n==null?void 0:n.errors.value[t.name]);function i(){return{message:s.value}}return()=>{if(!s.value)return;const r=t.as?Yl(t.as):t.as,o=Lc(r,e,i),a=Object.assign({role:"alert"},e.attrs);return!r&&(Array.isArray(o)||!o)&&(o!=null&&o.length)?o:(Array.isArray(o)||!o)&&!(o!=null&&o.length)?Ss(r||"span",a,s.value):Ss(r,a,o)}}}),Bb=HF,WF={class:"form-input"},zF=["for"],qF=["type","id","name","value","placeholder"],KF=Ie({__name:"FormInput",props:{type:null,name:null,value:null,label:null,placeholder:null},setup(t){const e=t,n=It(e,"name"),{value:s,errorMessage:i,handleBlur:r,handleChange:o,meta:a}=Uc(n,void 0,{initialValue:e.value});return(l,c)=>(re(),ge("div",WF,[t.label?(re(),ge("label",{key:0,class:"label-input",for:C(n)},Ne(t.label),9,zF)):rn("",!0),G("input",{class:"input",type:t.type,id:C(n),name:C(n),value:C(s),placeholder:t.placeholder,onInput:c[0]||(c[0]=(...u)=>C(o)&&C(o)(...u)),onBlur:c[1]||(c[1]=(...u)=>C(r)&&C(r)(...u))},null,40,qF),Gn(G("p",{class:"error"},Ne(C(i)),513),[[Yn,C(i)||C(a).valid]])]))}});const Ol=qe(KF,[["__scopeId","data-v-05644960"]]);function Ei(t){this._maxSize=t,this.clear()}Ei.prototype.clear=function(){this._size=0,this._values=Object.create(null)};Ei.prototype.get=function(t){return this._values[t]};Ei.prototype.set=function(t,e){return this._size>=this._maxSize&&this.clear(),t in this._values||this._size++,this._values[t]=e};var GF=/[^.^\]^[]+|(?=\[\]|\.\.)/g,Vb=/^\d+$/,YF=/^\d/,XF=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,QF=/^\s*(['"]?)(.*?)(\1)\s*$/,rp=512,Gm=new Ei(rp),Ym=new Ei(rp),Xm=new Ei(rp),si={Cache:Ei,split:Vh,normalizePath:ku,setter:function(t){var e=ku(t);return Ym.get(t)||Ym.set(t,function(s,i){for(var r=0,o=e.length,a=s;r<o-1;){var l=e[r];if(l==="__proto__"||l==="constructor"||l==="prototype")return s;a=a[e[r++]]}a[e[r]]=i})},getter:function(t,e){var n=ku(t);return Xm.get(t)||Xm.set(t,function(i){for(var r=0,o=n.length;r<o;)if(i!=null||!e)i=i[n[r++]];else return;return i})},join:function(t){return t.reduce(function(e,n){return e+(op(n)||Vb.test(n)?"["+n+"]":(e?".":"")+n)},"")},forEach:function(t,e,n){JF(Array.isArray(t)?t:Vh(t),e,n)}};function ku(t){return Gm.get(t)||Gm.set(t,Vh(t).map(function(e){return e.replace(QF,"$2")}))}function Vh(t){return t.match(GF)||[""]}function JF(t,e,n){var s=t.length,i,r,o,a;for(r=0;r<s;r++)i=t[r],i&&(tL(i)&&(i='"'+i+'"'),a=op(i),o=!a&&/^\d+$/.test(i),e.call(n,i,a,o,r,t))}function op(t){return typeof t=="string"&&t&&["'",'"'].indexOf(t.charAt(0))!==-1}function ZF(t){return t.match(YF)&&!t.match(Vb)}function eL(t){return XF.test(t)}function tL(t){return!op(t)&&(ZF(t)||eL(t))}const nL=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,Vc=t=>t.match(nL)||[],$c=t=>t[0].toUpperCase()+t.slice(1),ap=(t,e)=>Vc(t).join(e).toLowerCase(),$b=t=>Vc(t).reduce((e,n)=>`${e}${e?n[0].toUpperCase()+n.slice(1).toLowerCase():n.toLowerCase()}`,""),sL=t=>$c($b(t)),iL=t=>ap(t,"_"),rL=t=>ap(t,"-"),oL=t=>$c(ap(t," ")),aL=t=>Vc(t).map($c).join(" ");var Ou={words:Vc,upperFirst:$c,camelCase:$b,pascalCase:sL,snakeCase:iL,kebabCase:rL,sentenceCase:oL,titleCase:aL},Pl={},lL={get exports(){return Pl},set exports(t){Pl=t}};lL.exports=function(t){return jb(cL(t),t)};Pl.array=jb;function jb(t,e){var n=t.length,s=new Array(n),i={},r=n,o=uL(e),a=hL(t);for(e.forEach(function(c){if(!a.has(c[0])||!a.has(c[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});r--;)i[r]||l(t[r],r,new Set);return s;function l(c,u,h){if(h.has(c)){var d;try{d=", node was:"+JSON.stringify(c)}catch{d=""}throw new Error("Cyclic dependency"+d)}if(!a.has(c))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(c));if(!i[u]){i[u]=!0;var f=o.get(c)||new Set;if(f=Array.from(f),u=f.length){h.add(c);do{var m=f[--u];l(m,a.get(m),h)}while(u);h.delete(c)}s[--n]=c}}}function cL(t){for(var e=new Set,n=0,s=t.length;n<s;n++){var i=t[n];e.add(i[0]),e.add(i[1])}return Array.from(e)}function uL(t){for(var e=new Map,n=0,s=t.length;n<s;n++){var i=t[n];e.has(i[0])||e.set(i[0],new Set),e.has(i[1])||e.set(i[1],new Set),e.get(i[0]).add(i[1])}return e}function hL(t){for(var e=new Map,n=0,s=t.length;n<s;n++)e.set(t[n],n);return e}const dL=Object.prototype.toString,fL=Error.prototype.toString,pL=RegExp.prototype.toString,gL=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",mL=/^Symbol\((.*)\)(.*)$/;function _L(t){return t!=+t?"NaN":t===0&&1/t<0?"-0":""+t}function Qm(t,e=!1){if(t==null||t===!0||t===!1)return""+t;const n=typeof t;if(n==="number")return _L(t);if(n==="string")return e?`"${t}"`:t;if(n==="function")return"[Function "+(t.name||"anonymous")+"]";if(n==="symbol")return gL.call(t).replace(mL,"Symbol($1)");const s=dL.call(t).slice(8,-1);return s==="Date"?isNaN(t.getTime())?""+t:t.toISOString(t):s==="Error"||t instanceof Error?"["+fL.call(t)+"]":s==="RegExp"?pL.call(t):null}function Ki(t,e){let n=Qm(t,e);return n!==null?n:JSON.stringify(t,function(s,i){let r=Qm(this[s],e);return r!==null?r:i},2)}function Hb(t){return t==null?[]:[].concat(t)}let vL=/\$\{\s*(\w+)\s*\}/g;class $t extends Error{static formatError(e,n){const s=n.label||n.path||"this";return s!==n.path&&(n=Object.assign({},n,{path:s})),typeof e=="string"?e.replace(vL,(i,r)=>Ki(n[r])):typeof e=="function"?e(n):e}static isError(e){return e&&e.name==="ValidationError"}constructor(e,n,s,i){super(),this.value=void 0,this.path=void 0,this.type=void 0,this.errors=void 0,this.params=void 0,this.inner=void 0,this.name="ValidationError",this.value=n,this.path=s,this.type=i,this.errors=[],this.inner=[],Hb(e).forEach(r=>{$t.isError(r)?(this.errors.push(...r.errors),this.inner=this.inner.concat(r.inner.length?r.inner:r)):this.errors.push(r)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0],Error.captureStackTrace&&Error.captureStackTrace(this,$t)}}let On={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:t,type:e,value:n,originalValue:s})=>{const i=s!=null&&s!==n?` (cast from the value \`${Ki(s,!0)}\`).`:".";return e!=="mixed"?`${t} must be a \`${e}\` type, but the final value was: \`${Ki(n,!0)}\``+i:`${t} must match the configured type. The validated value was: \`${Ki(n,!0)}\``+i}},tn={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},yL={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},$h={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},EL={isValue:"${path} field must be ${value}"},jh={noUnknown:"${path} field has unspecified keys: ${unknown}"},bL={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"};Object.assign(Object.create(null),{mixed:On,string:tn,number:yL,date:$h,object:jh,array:bL,boolean:EL});const lp=t=>t&&t.__isYupSchema__;class xl{static fromOptions(e,n){if(!n.then&&!n.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:s,then:i,otherwise:r}=n,o=typeof s=="function"?s:(...a)=>a.every(l=>l===s);return new xl(e,(a,l)=>{var c;let u=o(...a)?i:r;return(c=u==null?void 0:u(l))!=null?c:l})}constructor(e,n){this.fn=void 0,this.refs=e,this.refs=e,this.fn=n}resolve(e,n){let s=this.refs.map(r=>r.getValue(n==null?void 0:n.value,n==null?void 0:n.parent,n==null?void 0:n.context)),i=this.fn(s,e,n);if(i===void 0||i===e)return e;if(!lp(i))throw new TypeError("conditions must return a schema object");return i.resolve(n)}}const Da={context:"$",value:"."};class bi{constructor(e,n={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof e!="string")throw new TypeError("ref must be a string, got: "+e);if(this.key=e.trim(),e==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===Da.context,this.isValue=this.key[0]===Da.value,this.isSibling=!this.isContext&&!this.isValue;let s=this.isContext?Da.context:this.isValue?Da.value:"";this.path=this.key.slice(s.length),this.getter=this.path&&si.getter(this.path,!0),this.map=n.map}getValue(e,n,s){let i=this.isContext?s:this.isValue?e:n;return this.getter&&(i=this.getter(i||{})),this.map&&(i=this.map(i)),i}cast(e,n){return this.getValue(e,n==null?void 0:n.parent,n==null?void 0:n.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(e){return e&&e.__isYupRef}}bi.prototype.__isYupRef=!0;const gs=t=>t==null;function Si(t){function e({value:n,path:s="",options:i,originalValue:r,schema:o},a,l){const{name:c,test:u,params:h,message:d,skipAbsent:f}=t;let{parent:m,context:T,abortEarly:P=o.spec.abortEarly}=i;function v(O){return bi.isRef(O)?O.getValue(n,m,T):O}function g(O={}){const V=Object.assign({value:n,originalValue:r,label:o.spec.label,path:O.path||s,spec:o.spec},h,O.params);for(const J of Object.keys(V))V[J]=v(V[J]);const L=new $t($t.formatError(O.message||d,V),n,V.path,O.type||c);return L.params=V,L}const b=P?a:l;let S={path:s,parent:m,type:c,from:i.from,createError:g,resolve:v,options:i,originalValue:r,schema:o};const w=O=>{$t.isError(O)?b(O):O?l(null):b(g())},A=O=>{$t.isError(O)?b(O):a(O)},I=f&&gs(n);if(!i.sync){try{Promise.resolve(I?!0:u.call(S,n,S)).then(w,A)}catch(O){A(O)}return}let E;try{var N;if(E=I?!0:u.call(S,n,S),typeof((N=E)==null?void 0:N.then)=="function")throw new Error(`Validation test of type: "${S.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`)}catch(O){A(O);return}w(E)}return e.OPTIONS=t,e}function wL(t,e,n,s=n){let i,r,o;return e?(si.forEach(e,(a,l,c)=>{let u=l?a.slice(1,a.length-1):a;t=t.resolve({context:s,parent:i,value:n});let h=t.type==="tuple",d=c?parseInt(u,10):0;if(t.innerType||h){if(h&&!c)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${o}" must contain an index to the tuple element, e.g. "${o}[0]"`);if(n&&d>=n.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${a}, in the path: ${e}. because there is no value at that index. `);i=n,n=n&&n[d],t=h?t.spec.types[d]:t.innerType}if(!c){if(!t.fields||!t.fields[u])throw new Error(`The schema does not contain the path: ${e}. (failed at: ${o} which is a type: "${t.type}")`);i=n,n=n&&n[u],t=t.fields[u]}r=u,o=l?"["+a+"]":"."+a}),{schema:t,parent:i,parentPath:r}):{parent:i,parentPath:e,schema:t}}class Nl extends Set{describe(){const e=[];for(const n of this.values())e.push(bi.isRef(n)?n.describe():n);return e}resolveAll(e){let n=[];for(const s of this.values())n.push(e(s));return n}clone(){return new Nl(this.values())}merge(e,n){const s=this.clone();return e.forEach(i=>s.add(i)),n.forEach(i=>s.delete(i)),s}}function Di(t,e=new Map){if(lp(t)||!t||typeof t!="object")return t;if(e.has(t))return e.get(t);let n;if(t instanceof Date)n=new Date(t.getTime()),e.set(t,n);else if(t instanceof RegExp)n=new RegExp(t),e.set(t,n);else if(Array.isArray(t)){n=new Array(t.length),e.set(t,n);for(let s=0;s<t.length;s++)n[s]=Di(t[s],e)}else if(t instanceof Map){n=new Map,e.set(t,n);for(const[s,i]of t.entries())n.set(s,Di(i,e))}else if(t instanceof Set){n=new Set,e.set(t,n);for(const s of t)n.add(Di(s,e))}else if(t instanceof Object){n={},e.set(t,n);for(const[s,i]of Object.entries(t))n[s]=Di(i,e)}else throw Error(`Unable to clone ${t}`);return n}class Tn{constructor(e){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new Nl,this._blacklist=new Nl,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(On.notType)}),this.type=e.type,this._typeCheck=e.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,nullable:!1,optional:!0,coerce:!0},e==null?void 0:e.spec),this.withMutation(n=>{n.nonNullable()})}get _type(){return this.type}clone(e){if(this._mutate)return e&&Object.assign(this.spec,e),this;const n=Object.create(Object.getPrototypeOf(this));return n.type=this.type,n._typeCheck=this._typeCheck,n._whitelist=this._whitelist.clone(),n._blacklist=this._blacklist.clone(),n.internalTests=Object.assign({},this.internalTests),n.exclusiveTests=Object.assign({},this.exclusiveTests),n.deps=[...this.deps],n.conditions=[...this.conditions],n.tests=[...this.tests],n.transforms=[...this.transforms],n.spec=Di(Object.assign({},this.spec,e)),n}label(e){let n=this.clone();return n.spec.label=e,n}meta(...e){if(e.length===0)return this.spec.meta;let n=this.clone();return n.spec.meta=Object.assign(n.spec.meta||{},e[0]),n}withMutation(e){let n=this._mutate;this._mutate=!0;let s=e(this);return this._mutate=n,s}concat(e){if(!e||e===this)return this;if(e.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${e.type}`);let n=this,s=e.clone();const i=Object.assign({},n.spec,s.spec);return s.spec=i,s.internalTests=Object.assign({},n.internalTests,s.internalTests),s._whitelist=n._whitelist.merge(e._whitelist,e._blacklist),s._blacklist=n._blacklist.merge(e._blacklist,e._whitelist),s.tests=n.tests,s.exclusiveTests=n.exclusiveTests,s.withMutation(r=>{e.tests.forEach(o=>{r.test(o.OPTIONS)})}),s.transforms=[...n.transforms,...s.transforms],s}isType(e){return e==null?!!(this.spec.nullable&&e===null||this.spec.optional&&e===void 0):this._typeCheck(e)}resolve(e){let n=this;if(n.conditions.length){let s=n.conditions;n=n.clone(),n.conditions=[],n=s.reduce((i,r)=>r.resolve(i,e),n),n=n.resolve(e)}return n}resolveOptions(e){var n,s,i;return Object.assign({},e,{from:e.from||[],strict:(n=e.strict)!=null?n:this.spec.strict,abortEarly:(s=e.abortEarly)!=null?s:this.spec.abortEarly,recursive:(i=e.recursive)!=null?i:this.spec.recursive})}cast(e,n={}){let s=this.resolve(Object.assign({value:e},n)),i=n.assert==="ignore-optionality",r=s._cast(e,n);if(n.assert!==!1&&!s.isType(r)){if(i&&gs(r))return r;let o=Ki(e),a=Ki(r);throw new TypeError(`The value of ${n.path||"field"} could not be cast to a value that satisfies the schema type: "${s.type}". 

attempted value: ${o} 
`+(a!==o?`result of cast: ${a}`:""))}return r}_cast(e,n){let s=e===void 0?e:this.transforms.reduce((i,r)=>r.call(this,i,e,this),e);return s===void 0&&(s=this.getDefault()),s}_validate(e,n={},s,i){let{path:r,originalValue:o=e,strict:a=this.spec.strict}=n,l=e;a||(l=this._cast(l,Object.assign({assert:!1},n)));let c=[];for(let u of Object.values(this.internalTests))u&&c.push(u);this.runTests({path:r,value:l,originalValue:o,options:n,tests:c},s,u=>{if(u.length)return i(u,l);this.runTests({path:r,value:l,originalValue:o,options:n,tests:this.tests},s,i)})}runTests(e,n,s){let i=!1,{tests:r,value:o,originalValue:a,path:l,options:c}=e,u=T=>{i||(i=!0,n(T,o))},h=T=>{i||(i=!0,s(T,o))},d=r.length,f=[];if(!d)return h([]);let m={value:o,originalValue:a,path:l,options:c,schema:this};for(let T=0;T<r.length;T++){const P=r[T];P(m,u,function(g){g&&(f=f.concat(g)),--d<=0&&h(f)})}}asNestedTest({key:e,index:n,parent:s,parentPath:i,originalParent:r,options:o}){const a=e??n;if(a==null)throw TypeError("Must include `key` or `index` for nested validations");const l=typeof a=="number";let c=s[a];const u=Object.assign({},o,{strict:!0,parent:s,value:c,originalValue:r[a],key:void 0,[l?"index":"key"]:a,path:l||a.includes(".")?`${i||""}[${c?a:`"${a}"`}]`:(i?`${i}.`:"")+e});return(h,d,f)=>this.resolve(u)._validate(c,u,d,f)}validate(e,n){let s=this.resolve(Object.assign({},n,{value:e}));return new Promise((i,r)=>s._validate(e,n,(o,a)=>{$t.isError(o)&&(o.value=a),r(o)},(o,a)=>{o.length?r(new $t(o,a)):i(a)}))}validateSync(e,n){let s=this.resolve(Object.assign({},n,{value:e})),i;return s._validate(e,Object.assign({},n,{sync:!0}),(r,o)=>{throw $t.isError(r)&&(r.value=o),r},(r,o)=>{if(r.length)throw new $t(r,e);i=o}),i}isValid(e,n){return this.validate(e,n).then(()=>!0,s=>{if($t.isError(s))return!1;throw s})}isValidSync(e,n){try{return this.validateSync(e,n),!0}catch(s){if($t.isError(s))return!1;throw s}}_getDefault(){let e=this.spec.default;return e==null?e:typeof e=="function"?e.call(this):Di(e)}getDefault(e){return this.resolve(e||{})._getDefault()}default(e){return arguments.length===0?this._getDefault():this.clone({default:e})}strict(e=!0){return this.clone({strict:e})}nullability(e,n){const s=this.clone({nullable:e});return s.internalTests.nullable=Si({message:n,name:"nullable",test(i){return i===null?this.schema.spec.nullable:!0}}),s}optionality(e,n){const s=this.clone({optional:e});return s.internalTests.optionality=Si({message:n,name:"optionality",test(i){return i===void 0?this.schema.spec.optional:!0}}),s}optional(){return this.optionality(!0)}defined(e=On.defined){return this.optionality(!1,e)}nullable(){return this.nullability(!0)}nonNullable(e=On.notNull){return this.nullability(!1,e)}required(e=On.required){return this.clone().withMutation(n=>n.nonNullable(e).defined(e))}notRequired(){return this.clone().withMutation(e=>e.nullable().optional())}transform(e){let n=this.clone();return n.transforms.push(e),n}test(...e){let n;if(e.length===1?typeof e[0]=="function"?n={test:e[0]}:n=e[0]:e.length===2?n={name:e[0],test:e[1]}:n={name:e[0],message:e[1],test:e[2]},n.message===void 0&&(n.message=On.default),typeof n.test!="function")throw new TypeError("`test` is a required parameters");let s=this.clone(),i=Si(n),r=n.exclusive||n.name&&s.exclusiveTests[n.name]===!0;if(n.exclusive&&!n.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return n.name&&(s.exclusiveTests[n.name]=!!n.exclusive),s.tests=s.tests.filter(o=>!(o.OPTIONS.name===n.name&&(r||o.OPTIONS.test===i.OPTIONS.test))),s.tests.push(i),s}when(e,n){!Array.isArray(e)&&typeof e!="string"&&(n=e,e=".");let s=this.clone(),i=Hb(e).map(r=>new bi(r));return i.forEach(r=>{r.isSibling&&s.deps.push(r.key)}),s.conditions.push(typeof n=="function"?new xl(i,n):xl.fromOptions(i,n)),s}typeError(e){let n=this.clone();return n.internalTests.typeError=Si({message:e,name:"typeError",test(s){return!gs(s)&&!this.schema._typeCheck(s)?this.createError({params:{type:this.schema.type}}):!0}}),n}oneOf(e,n=On.oneOf){let s=this.clone();return e.forEach(i=>{s._whitelist.add(i),s._blacklist.delete(i)}),s.internalTests.whiteList=Si({message:n,name:"oneOf",skipAbsent:!0,test(i){let r=this.schema._whitelist,o=r.resolveAll(this.resolve);return o.includes(i)?!0:this.createError({params:{values:Array.from(r).join(", "),resolved:o}})}}),s}notOneOf(e,n=On.notOneOf){let s=this.clone();return e.forEach(i=>{s._blacklist.add(i),s._whitelist.delete(i)}),s.internalTests.blacklist=Si({message:n,name:"notOneOf",test(i){let r=this.schema._blacklist,o=r.resolveAll(this.resolve);return o.includes(i)?this.createError({params:{values:Array.from(r).join(", "),resolved:o}}):!0}}),s}strip(e=!0){let n=this.clone();return n.spec.strip=e,n}describe(e){const n=(e?this.resolve(e):this).clone(),{label:s,meta:i,optional:r,nullable:o}=n.spec;return{meta:i,label:s,optional:r,nullable:o,default:n.getDefault(e),type:n.type,oneOf:n._whitelist.describe(),notOneOf:n._blacklist.describe(),tests:n.tests.map(l=>({name:l.OPTIONS.name,params:l.OPTIONS.params})).filter((l,c,u)=>u.findIndex(h=>h.name===l.name)===c)}}}Tn.prototype.__isYupSchema__=!0;for(const t of["validate","validateSync"])Tn.prototype[`${t}At`]=function(e,n,s={}){const{parent:i,parentPath:r,schema:o}=wL(this,e,n,s.context);return o[t](i&&i[r],Object.assign({},s,{parent:i,path:e}))};for(const t of["equals","is"])Tn.prototype[t]=Tn.prototype.oneOf;for(const t of["not","nope"])Tn.prototype[t]=Tn.prototype.notOneOf;let CL=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,TL=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,IL=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,AL=t=>gs(t)||t===t.trim(),SL={}.toString();function Pn(){return new Wb}class Wb extends Tn{constructor(){super({type:"string",check(e){return e instanceof String&&(e=e.valueOf()),typeof e=="string"}}),this.withMutation(()=>{this.transform((e,n,s)=>{if(!s.spec.coerce||s.isType(e)||Array.isArray(e))return e;const i=e!=null&&e.toString?e.toString():e;return i===SL?e:i})})}required(e){return super.required(e).withMutation(n=>n.test({message:e||On.required,name:"required",skipAbsent:!0,test:s=>!!s.length}))}notRequired(){return super.notRequired().withMutation(e=>(e.tests=e.tests.filter(n=>n.OPTIONS.name!=="required"),e))}length(e,n=tn.length){return this.test({message:n,name:"length",exclusive:!0,params:{length:e},skipAbsent:!0,test(s){return s.length===this.resolve(e)}})}min(e,n=tn.min){return this.test({message:n,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(s){return s.length>=this.resolve(e)}})}max(e,n=tn.max){return this.test({name:"max",exclusive:!0,message:n,params:{max:e},skipAbsent:!0,test(s){return s.length<=this.resolve(e)}})}matches(e,n){let s=!1,i,r;return n&&(typeof n=="object"?{excludeEmptyString:s=!1,message:i,name:r}=n:i=n),this.test({name:r||"matches",message:i||tn.matches,params:{regex:e},skipAbsent:!0,test:o=>o===""&&s||o.search(e)!==-1})}email(e=tn.email){return this.matches(CL,{name:"email",message:e,excludeEmptyString:!0})}url(e=tn.url){return this.matches(TL,{name:"url",message:e,excludeEmptyString:!0})}uuid(e=tn.uuid){return this.matches(IL,{name:"uuid",message:e,excludeEmptyString:!1})}ensure(){return this.default("").transform(e=>e===null?"":e)}trim(e=tn.trim){return this.transform(n=>n!=null?n.trim():n).test({message:e,name:"trim",test:AL})}lowercase(e=tn.lowercase){return this.transform(n=>gs(n)?n:n.toLowerCase()).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>gs(n)||n===n.toLowerCase()})}uppercase(e=tn.uppercase){return this.transform(n=>gs(n)?n:n.toUpperCase()).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>gs(n)||n===n.toUpperCase()})}}Pn.prototype=Wb.prototype;var RL=/^(\d{4}|[+\-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;function kL(t){var e=[1,4,5,6,7,10,11],n=0,s,i;if(i=RL.exec(t)){for(var r=0,o;o=e[r];++r)i[o]=+i[o]||0;i[2]=(+i[2]||1)-1,i[3]=+i[3]||1,i[7]=i[7]?String(i[7]).substr(0,3):0,(i[8]===void 0||i[8]==="")&&(i[9]===void 0||i[9]==="")?s=+new Date(i[1],i[2],i[3],i[4],i[5],i[6],i[7]):(i[8]!=="Z"&&i[9]!==void 0&&(n=i[10]*60+i[11],i[9]==="+"&&(n=0-n)),s=Date.UTC(i[1],i[2],i[3],i[4],i[5]+n,i[6],i[7]))}else s=Date.parse?Date.parse(t):NaN;return s}let OL=new Date(""),PL=t=>Object.prototype.toString.call(t)==="[object Date]";class jc extends Tn{constructor(){super({type:"date",check(e){return PL(e)&&!isNaN(e.getTime())}}),this.withMutation(()=>{this.transform((e,n,s)=>!s.spec.coerce||s.isType(e)?e:(e=kL(e),isNaN(e)?jc.INVALID_DATE:new Date(e)))})}prepareParam(e,n){let s;if(bi.isRef(e))s=e;else{let i=this.cast(e);if(!this._typeCheck(i))throw new TypeError(`\`${n}\` must be a Date or a value that can be \`cast()\` to a Date`);s=i}return s}min(e,n=$h.min){let s=this.prepareParam(e,"min");return this.test({message:n,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(i){return i>=this.resolve(s)}})}max(e,n=$h.max){let s=this.prepareParam(e,"max");return this.test({message:n,name:"max",exclusive:!0,params:{max:e},skipAbsent:!0,test(i){return i<=this.resolve(s)}})}}jc.INVALID_DATE=OL;jc.prototype;function xL(t,e=[]){let n=[],s=new Set,i=new Set(e.map(([o,a])=>`${o}-${a}`));function r(o,a){let l=si.split(o)[0];s.add(l),i.has(`${a}-${l}`)||n.push([a,l])}for(const o of Object.keys(t)){let a=t[o];s.add(o),bi.isRef(a)&&a.isSibling?r(a.path,o):lp(a)&&"deps"in a&&a.deps.forEach(l=>r(l,o))}return Pl.array(Array.from(s),n).reverse()}function Jm(t,e){let n=1/0;return t.some((s,i)=>{var r;if((r=e.path)!=null&&r.includes(s))return n=i,!0}),n}function zb(t){return(e,n)=>Jm(t,e)-Jm(t,n)}const NL=(t,e,n)=>{if(typeof t!="string")return t;let s=t;try{s=JSON.parse(t)}catch{}return n.isType(s)?s:t};function Ha(t){if("fields"in t){const e={};for(const[n,s]of Object.entries(t.fields))e[n]=Ha(s);return t.setFields(e)}if(t.type==="array"){const e=t.optional();return e.innerType&&(e.innerType=Ha(e.innerType)),e}return t.type==="tuple"?t.optional().clone({types:t.spec.types.map(Ha)}):"optional"in t?t.optional():t}const DL=(t,e)=>{const n=[...si.normalizePath(e)];if(n.length===1)return n[0]in t;let s=n.pop(),i=si.getter(si.join(n),!0)(t);return!!(i&&s in i)};let Zm=t=>Object.prototype.toString.call(t)==="[object Object]";function ML(t,e){let n=Object.keys(t.fields);return Object.keys(e).filter(s=>n.indexOf(s)===-1)}const FL=zb([]);function cp(t){return new qb(t)}class qb extends Tn{constructor(e){super({type:"object",check(n){return Zm(n)||typeof n=="function"}}),this.fields=Object.create(null),this._sortErrors=FL,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{e&&this.shape(e)})}_cast(e,n={}){var s;let i=super._cast(e,n);if(i===void 0)return this.getDefault();if(!this._typeCheck(i))return i;let r=this.fields,o=(s=n.stripUnknown)!=null?s:this.spec.noUnknown,a=[].concat(this._nodes,Object.keys(i).filter(h=>!this._nodes.includes(h))),l={},c=Object.assign({},n,{parent:l,__validating:n.__validating||!1}),u=!1;for(const h of a){let d=r[h],f=h in i;if(d){let m,T=i[h];c.path=(n.path?`${n.path}.`:"")+h,d=d.resolve({value:T,context:n.context,parent:l});let P=d instanceof Tn?d.spec:void 0,v=P==null?void 0:P.strict;if(P!=null&&P.strip){u=u||h in i;continue}m=!n.__validating||!v?d.cast(i[h],c):i[h],m!==void 0&&(l[h]=m)}else f&&!o&&(l[h]=i[h]);(f!==h in l||l[h]!==i[h])&&(u=!0)}return u?l:i}_validate(e,n={},s,i){let{from:r=[],originalValue:o=e,recursive:a=this.spec.recursive}=n;n.from=[{schema:this,value:o},...r],n.__validating=!0,n.originalValue=o,super._validate(e,n,s,(l,c)=>{if(!a||!Zm(c)){i(l,c);return}o=o||c;let u=[];for(let h of this._nodes){let d=this.fields[h];!d||bi.isRef(d)||u.push(d.asNestedTest({options:n,key:h,parent:c,parentPath:n.path,originalParent:o}))}this.runTests({tests:u,value:c,originalValue:o,options:n},s,h=>{i(h.sort(this._sortErrors).concat(l),c)})})}clone(e){const n=super.clone(e);return n.fields=Object.assign({},this.fields),n._nodes=this._nodes,n._excludedEdges=this._excludedEdges,n._sortErrors=this._sortErrors,n}concat(e){let n=super.concat(e),s=n.fields;for(let[i,r]of Object.entries(this.fields)){const o=s[i];s[i]=o===void 0?r:o}return n.withMutation(i=>i.setFields(s,this._excludedEdges))}_getDefault(){if("default"in this.spec)return super._getDefault();if(!this._nodes.length)return;let e={};return this._nodes.forEach(n=>{const s=this.fields[n];e[n]=s&&"getDefault"in s?s.getDefault():void 0}),e}setFields(e,n){let s=this.clone();return s.fields=e,s._nodes=xL(e,n),s._sortErrors=zb(Object.keys(e)),n&&(s._excludedEdges=n),s}shape(e,n=[]){return this.clone().withMutation(s=>{let i=s._excludedEdges;return n.length&&(Array.isArray(n[0])||(n=[n]),i=[...s._excludedEdges,...n]),s.setFields(Object.assign(s.fields,e),i)})}partial(){const e={};for(const[n,s]of Object.entries(this.fields))e[n]="optional"in s&&s.optional instanceof Function?s.optional():s;return this.setFields(e)}deepPartial(){return Ha(this)}pick(e){const n={};for(const s of e)this.fields[s]&&(n[s]=this.fields[s]);return this.setFields(n)}omit(e){const n=Object.assign({},this.fields);for(const s of e)delete n[s];return this.setFields(n)}from(e,n,s){let i=si.getter(e,!0);return this.transform(r=>{if(!r)return r;let o=r;return DL(r,e)&&(o=Object.assign({},r),s||delete o[e],o[n]=i(r)),o})}json(){return this.transform(NL)}noUnknown(e=!0,n=jh.noUnknown){typeof e!="boolean"&&(n=e,e=!0);let s=this.test({name:"noUnknown",exclusive:!0,message:n,test(i){if(i==null)return!0;const r=ML(this.schema,i);return!e||r.length===0||this.createError({params:{unknown:r.join(", ")}})}});return s.spec.noUnknown=e,s}unknown(e=!0,n=jh.noUnknown){return this.noUnknown(!e,n)}transformKeys(e){return this.transform(n=>{if(!n)return n;const s={};for(const i of Object.keys(n))s[e(i)]=n[i];return s})}camelCase(){return this.transformKeys(Ou.camelCase)}snakeCase(){return this.transformKeys(Ou.snakeCase)}constantCase(){return this.transformKeys(e=>Ou.snakeCase(e).toUpperCase())}describe(e){let n=super.describe(e);n.fields={};for(const[i,r]of Object.entries(this.fields)){var s;let o=e;(s=o)!=null&&s.value&&(o=Object.assign({},o,{parent:o.value,value:o.value[i]})),n.fields[i]=r.describe(o)}return n}}cp.prototype=qb.prototype;const Kb=cp().shape({email:Pn().required("Email is required field").email("Invalid email address"),password:Pn().required("Password is required field").min(6,"Password must contain at least six characters").matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,"Password must contain a letter, a number and one special character")});const LL={},UL={class:"submit-btn",type:"submit"};function BL(t,e){return re(),ge("button",UL,[Xl(t.$slots,"default",{},void 0,!0)])}const up=qe(LL,[["render",BL],["__scopeId","data-v-7a17fab8"]]),VL=Ie({__name:"SignUpForm",setup(t){const e=wi(),n={email:"",password:""},{handleSubmit:s}=Bc({initialValues:n,validationSchema:Kb}),i=s((r,{resetForm:o})=>{e.signUpUser(r.email,r.password),o()});return(r,o)=>{const a=fo("RouterLink");return re(),ge("form",{class:"form",onSubmit:o[0]||(o[0]=(...l)=>C(i)&&C(i)(...l))},[ee(Ol,{type:"email",name:"email",value:n.email,label:"Email",placeholder:"Email"},null,8,["value"]),ee(Ol,{type:"password",name:"password",value:n.password,label:"Password",placeholder:"Password"},null,8,["value"]),ee(up,null,{default:ft(()=>[zt("Sign Up")]),_:1}),G("p",null,[zt(" Already have an account? Then "),ee(a,{to:"/sign-in"},{default:ft(()=>[zt("Sign In")]),_:1})])],32)}}});const $L=qe(VL,[["__scopeId","data-v-0d809568"]]);const jL={},HL={class:"wrapper"};function WL(t,e){return re(),ge("div",HL,[Xl(t.$slots,"default",{},void 0,!0)])}const Gb=qe(jL,[["render",WL],["__scopeId","data-v-e2d79420"]]),zL=Ie({__name:"SignUpPage",setup(t){return(e,n)=>(re(),Qt(Gb,null,{default:ft(()=>[ee($L)]),_:1}))}}),qL=Ie({__name:"SignInForm",setup(t){const e=wi(),n={email:"",password:""},{handleSubmit:s}=Bc({initialValues:n,validationSchema:Kb}),i=s((r,{resetForm:o})=>{e.signInUser(r.email,r.password),o()});return(r,o)=>{const a=fo("RouterLink");return re(),ge("form",{class:"form",onSubmit:o[0]||(o[0]=(...l)=>C(i)&&C(i)(...l))},[G("div",null,[ee(Ol,{type:"email",name:"email",value:n.email,label:"Email",placeholder:"Email"},null,8,["value"]),ee(Ol,{type:"password",name:"password",value:n.password,label:"Password",placeholder:"Password"},null,8,["value"])]),ee(up,null,{default:ft(()=>[zt("Sign In")]),_:1}),G("p",null,[zt(" Don't have an account? Then "),ee(a,{to:"/sign-up"},{default:ft(()=>[zt("Sign Up")]),_:1})])],32)}}});const KL=qe(qL,[["__scopeId","data-v-423d9a42"]]),GL=Ie({__name:"SignInPage",setup(t){return(e,n)=>(re(),Qt(Gb,null,{default:ft(()=>[ee(KL)]),_:1}))}}),YL={class:"add-product-input"},XL=["for"],QL=["type","id","name","value","placeholder"],JL=Ie({__name:"AddProductInput",props:{type:null,name:null,value:null,label:null,placeholder:null},setup(t){const e=t,n=It(e,"name"),{value:s,errorMessage:i,handleBlur:r,handleChange:o,meta:a}=Uc(n,void 0,{initialValue:e.value});return(l,c)=>(re(),ge("div",YL,[t.label?(re(),ge("label",{key:0,class:"label-input",for:C(n)},Ne(t.label),9,XL)):rn("",!0),G("input",{class:St(["input",{"error-input":C(i)}]),type:t.type,id:C(n),name:C(n),value:C(s),placeholder:t.placeholder,onInput:c[0]||(c[0]=(...u)=>C(o)&&C(o)(...u)),onBlur:c[1]||(c[1]=(...u)=>C(r)&&C(r)(...u))},null,42,QL),Gn(G("p",{class:"error"},Ne(C(i)),513),[[Yn,C(i)||C(a).valid]])]))}});const Pu=qe(JL,[["__scopeId","data-v-8b1356c9"]]),ZL={class:"wrapper"},eU=["for"],tU=["id","name","value","placeholder"],nU=Ie({__name:"TextareaForDescriptionProduct",props:{name:null,value:null,label:null,placeholder:null},setup(t){const e=t,n=It(e,"name"),{value:s,errorMessage:i,handleBlur:r,handleChange:o,meta:a}=Uc(n,void 0,{initialValue:e.value});return(l,c)=>(re(),ge("div",ZL,[t.label?(re(),ge("label",{key:0,class:"label-area",for:C(n)},Ne(t.label),9,eU)):rn("",!0),G("textarea",{class:St(["area",{"error-area":C(i)}]),id:C(n),name:C(n),value:C(s),placeholder:t.placeholder,onInput:c[0]||(c[0]=(...u)=>C(o)&&C(o)(...u)),onBlur:c[1]||(c[1]=(...u)=>C(r)&&C(r)(...u))},null,42,tU),Gn(G("p",{class:"error"},Ne(C(i)),513),[[Yn,C(i)||C(a).valid]])]))}});const sU=qe(nU,[["__scopeId","data-v-24521a36"]]),iU={class:"select-product"},rU=["for"],oU={value:"",disabled:""},aU=["value"],lU=Ie({__name:"SelectProduct",props:{label:null,defaultValue:null,name:null},setup(t){const e=Be([{id:1,value:"pizza",product:"Піца"},{id:2,value:"burgers",product:"Бургери"},{id:3,value:"roles",product:"Роли"},{id:4,value:"salads",product:"Салати"},{id:5,value:"drinks",product:"Напої"}]);return(n,s)=>(re(),ge("div",iU,[G("label",{for:t.name,class:"label-product"},Ne(t.label),9,rU),ee(C(Lb),{class:"select-product",name:t.name,as:"select"},{default:ft(()=>[G("option",oU,Ne(t.defaultValue),1),(re(!0),ge(je,null,dr(e.value,i=>(re(),ge("option",{value:i.value,key:i.id},Ne(i.product),9,aU))),128))]),_:1},8,["name"]),ee(C(Bb),{class:"error",name:t.name},null,8,["name"])]))}});const cU=qe(lU,[["__scopeId","data-v-397e950d"]]),uU={class:"upload-cover"},hU=["for"],dU=["name","onChange","onBlur"],fU=Ie({__name:"UploadProductCoverInput",props:{name:null,label:null,value:null},setup(t){return(e,n)=>(re(),ge("div",uU,[G("label",{for:t.name,class:"label-cover-product"},Ne(t.label),9,hU),ee(C(Lb),{name:t.name},{default:ft(({handleChange:s,handleBlur:i})=>[G("input",{type:"file",name:t.name,class:"upload-cover__input",onChange:s,onBlur:i},null,40,dU)]),_:1},8,["name"]),ee(C(Bb),{class:"error",name:t.name},null,8,["name"])]))}});const pU=qe(fU,[["__scopeId","data-v-b68c8bf5"]]),gU=cp().shape({productName:Pn().required("Поле обов'язкове"),productDescription:Pn().required("Поле обов'язкове"),productPrice:Pn().required("Поле обов'язкове"),productWeight:Pn().required("Поле обов'язкове"),product:Pn().required("Поле обов'язкове"),productCover:Pn().required("Поле обов'язкове")}),mU={class:"add-products-form-wrapper"},_U={class:"add-products-form-wrapper__btn-conteiner"},vU=Ie({__name:"AddProductsForm",setup(t){const e={productName:"",productDescription:"",productPrice:0,productWeight:0,product:"",productCover:""},{handleSubmit:n}=Bc({validationSchema:gU,initialValues:e}),s=Cb(),i=n((r,{resetForm:o})=>{s.uploadProduct(r),o()});return(r,o)=>(re(),ge("div",mU,[G("form",{class:"form",onSubmit:o[0]||(o[0]=(...a)=>C(i)&&C(i)(...a))},[ee(Pu,{type:"text",name:"productName",value:e.productName,label:"Назва страви",placeholder:"Назва страви"},null,8,["value"]),ee(sU,{name:"productDescription",value:e.productDescription,label:"Опис",placeholder:"Опис"},null,8,["value"]),ee(Pu,{type:"number",name:"productPrice",value:e.productPrice,label:"Ціна",placeholder:"Ціна"},null,8,["value"]),ee(Pu,{type:"number",name:"productWeight",value:e.productWeight,label:"Вага",placeholder:"Вага"},null,8,["value"]),ee(cU,{name:"product","default-value":"Оберіть категорію",label:"Категорія"}),ee(pU,{label:"Оберіть фото для завантаження",name:"productCover",value:e.productCover},null,8,["value"]),G("div",_U,[ee(up,null,{default:ft(()=>[zt("Submit")]),_:1})])],32)]))}});const yU=qe(vU,[["__scopeId","data-v-448a3195"]]),EU=Ie({__name:"AdminPage",setup(t){const e=wi();return fn(()=>{e.user.email!=="caulfieldd17@gmail.com"&&Hs.push("/")}),(n,s)=>(re(),Qt(yU))}}),bU=[{path:"/",component:tF},{path:"/sign-up",name:"sign-up",component:zL},{path:"/sign-in",name:"sign-in",component:GL},{path:"/admin",name:"admin",component:EU}],Hs=qM({history:cM("/snackSprint/"),routes:bU}),wi=$o("userStore",()=>{const{toastify:t}=ks.useToastify(),e=Be({id:"",email:""});function n(a,l){e.value.id=a,e.value.email=l}function s(){e.value.id="",e.value.email=""}function i(a,l){DS(Cu,a,l).then(({user:c})=>{c.email&&n(c.uid,c.email),Hs.push("/")}).catch(c=>t("error","Перевірте правильність введених даних"))}function r(a,l){MS(Cu,a,l).then(({user:c})=>{c.email&&n(c.uid,c.email),c.email==="caulfieldd17@gmail.com"?Hs.push("/admin"):Hs.push("/")}).catch(c=>t("error","Перевірте правильність введених даних"))}function o(){US(Cu).then(()=>{s(),Hs.push("/")}).catch(a=>{Hs.push("/"),console.error(a)})}return{user:e,setUser:n,removeUser:s,signUpUser:i,signInUser:r,logoutUser:o}}),wU=["src"],CU=Ie({__name:"LogInButton",setup(t){const e=wi();return(n,s)=>(re(),Qt(C(No),{class:St(["logIn-btn",{isAuth:!C(e).user.email}]),to:"/sign-in"},{default:ft(()=>[G("img",{src:C(YM),alt:""},null,8,wU)]),_:1},8,["class"]))}});const TU=qe(CU,[["__scopeId","data-v-907384db"]]),IU="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAADm0lEQVR4nO3aSYgcVRjA8TfilognMYqCikQDGtyiEYI7okLADRRUCKghYBCFuBxURIS4HBQGYowegkYlJgc9iCiKMQcPoh4kEA8REUUixCBujFETf/LoanhT9nSsnqrm1Vj/U09P9fd976u3fUsIHR0dHR3jBadgOe7GM3gDn2AXvsJe/Ii/cWZoOzgCN+AV7FaNx0JbwXw8jO+Nzs7QRnAZvlEP7VoGuAN/qY/2LANci/3qpR3LAAvwg2b4FneGnNE70ppmecgRHImfx+CAnZgIuYEbjY8LQm7g2TE64JGQG9hWMnJjsSleiTVYh7ewA18XV90/8UfxOV6BP8UWPFHMqBPx9AAHvBlyQ28AfeId4Pia5B6Cj0sO2BFyA78kBn5Ys+yrSg74LuSG3nTu81DNsieKe0CfqZAbpnNdA/JfTBWEzB1wRgPyV7fJAcc2IP+iNjng0Abkn9QaB4Rm5B/1v3ZAJFsHYNmYHBCTpH2WhVzQu7722dygns2Jni0hF0zP9DaWv8PiRM/ukAvYlxg2v+Esc599IRfwZWLY0gb1XJjo2RVyAS8lhr0dI7gGdMSo8J1Ez8aQCzgPBxLjNjSgY0MiP+o6N+SE6YmLaOBpNco+veTgJ0Nu6E3RNCv0XENvf1sTS6wWivRXn5gfWFyDzLNLVaYrQs7gvcTYmMo6bBayDi/yhH3eDbmDRfgtMXrdLGQ9n8j5tc59pVFwm+ncM4KMmElOuSW0CaxPjI9BzKoKv72rFPjUtqGODRxXeoNxQI8PK2sVyc+1/s2C0Daw0GBejXXEGWqLabSXsjC0DSw1vMB5fvLsWfi8VbXAg4FrkgF8gKdK63oYL2B78vfVoW3g1nKSJNYLijrgTMTy+s3Fs6+39gQYkMdfX+oRjPvAVPL/qaKF7uQZTpHVoU3oVYU3JQNYO4KM9DTYlP1JgFNxL94f0CG2ZgR595VkxGjws9gxhiXNjKJ69LekMCju6sO4fcRWu2HEcvxkEYDVXogZCOYVCicrtrxWLpbi+gry9xbL5CYcXVXXUHAMVmBrqQegChePoPeSEXX9XizDuBxPqKo3jegexEelTMyoPDro9neQmRZ/M1sOFGOIY1kUKhiwR/38hJdjsyPOiW+nGOi84nP8bmUxleOzdbOnigO2m3v897YdvU1urjFZxQGXm3tcWsUBE3jN3GFr5fZavYTkA/iigfb3cbC/sP3+2SRmOzo6OjrCHOYfLRvw1Ppk1+YAAAAASUVORK5CYII=",AU={class:"user-menu"},SU=["src"],RU={class:"user-menu"},kU={class:"user-menu__item"},OU={key:0,class:"user-menu__item"},PU=Ie({__name:"UserMenu",setup(t){const e=wi(),n=()=>{e.logoutUser()};return(s,i)=>(re(),ge("div",AU,[G("img",{src:C(IU),class:St(["user-account-btn",{isAuth:C(e).user.email}]),alt:""},null,10,SU),Gn(G("ul",RU,[G("li",{class:"user-menu__item"},[G("span",{onClick:n},"Вийти")]),G("li",kU,[G("span",null,[ee(C(No),{to:"/"},{default:ft(()=>[zt("Головна")]),_:1})])]),C(e).user.email=="caulfieldd17@gmail.com"?(re(),ge("li",OU,[G("span",null,[ee(C(No),{to:"/admin"},{default:ft(()=>[zt("Адмінка")]),_:1})])])):rn("",!0)],512),[[Yn,C(e).user.email]])]))}});const xU=qe(PU,[["__scopeId","data-v-018e3485"]]),NU=t=>(ur("data-v-e43f3671"),t=t(),hr(),t),DU={class:"header"},MU=NU(()=>G("h1",null,"SnackSprint",-1)),FU=Ie({__name:"Header",setup(t){const e=wi(),n=GM();return(s,i)=>(re(),ge("header",DU,[ee(C(No),{to:"/"},{default:ft(()=>[MU]),_:1}),ee(TU),C(n).path=="/"&&C(e).user.email?(re(),Qt(WD,{key:0})):rn("",!0),ee(xU)]))}});const LU=qe(FU,[["__scopeId","data-v-e43f3671"]]);const UU={},BU={class:"main"};function VU(t,e){return re(),ge("main",BU,[Xl(t.$slots,"default",{},void 0,!0)])}const $U=qe(UU,[["render",VU],["__scopeId","data-v-15a2598a"]]),jU=Ie({__name:"App",setup(t){return(e,n)=>{const s=fo("Toastify"),i=fo("RouterView");return re(),ge(je,null,[ee(s),ee(LU),ee($U,null,{default:ft(()=>[ee(i)]),_:1}),ee(mI)],64)}}});const Hc=xv(jU);Hc.use(Hs);Hc.use(iI());Hc.use(ks.createToastifyPlugin,{pauseTimerOnHover:!0,closeOnClick:!0});Hc.mount("#app");
