(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function Bu(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}function $u(t){if(te(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Xe(s)?nE(s):$u(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(Xe(t))return t;if(De(t))return t}}const Z0=/;(?![^(]*\))/g,eE=/:([^]+)/,tE=/\/\*.*?\*\//gs;function nE(t){const e={};return t.replace(tE,"").split(Z0).forEach(n=>{if(n){const s=n.split(eE);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function _t(t){let e="";if(Xe(t))e=t;else if(te(t))for(let n=0;n<t.length;n++){const s=_t(t[n]);s&&(e+=s+" ")}else if(De(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const sE="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",iE=Bu(sE);function U_(t){return!!t||t===""}function rE(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Wa(t[s],e[s]);return n}function Wa(t,e){if(t===e)return!0;let n=nf(t),s=nf(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Cr(t),s=Cr(e),n||s)return t===e;if(n=te(t),s=te(e),n||s)return n&&s?rE(t,e):!1;if(n=De(t),s=De(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Wa(t[o],e[o]))return!1}}return String(t)===String(e)}function B_(t,e){return t.findIndex(n=>Wa(n,e))}const Oe=t=>Xe(t)?t:t==null?"":te(t)||De(t)&&(t.toString===j_||!ue(t.toString))?JSON.stringify(t,$_,2):String(t),$_=(t,e)=>e&&e.__v_isRef?$_(t,e.value):ui(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:qa(e)?{[`Set(${e.size})`]:[...e.values()]}:De(e)&&!te(e)&&!H_(e)?String(e):e,Fe={},ci=[],Zt=()=>{},oE=()=>!1,aE=/^on[^a-z]/,za=t=>aE.test(t),Vu=t=>t.startsWith("onUpdate:"),vt=Object.assign,ju=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},lE=Object.prototype.hasOwnProperty,ye=(t,e)=>lE.call(t,e),te=Array.isArray,ui=t=>Qr(t)==="[object Map]",qa=t=>Qr(t)==="[object Set]",nf=t=>Qr(t)==="[object Date]",ue=t=>typeof t=="function",Xe=t=>typeof t=="string",Cr=t=>typeof t=="symbol",De=t=>t!==null&&typeof t=="object",V_=t=>De(t)&&ue(t.then)&&ue(t.catch),j_=Object.prototype.toString,Qr=t=>j_.call(t),cE=t=>Qr(t).slice(8,-1),H_=t=>Qr(t)==="[object Object]",Hu=t=>Xe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ko=Bu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ka=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},uE=/-(\w)/g,pn=Ka(t=>t.replace(uE,(e,n)=>n?n.toUpperCase():"")),hE=/\B([A-Z])/g,xi=Ka(t=>t.replace(hE,"-$1").toLowerCase()),Ga=Ka(t=>t.charAt(0).toUpperCase()+t.slice(1)),Kl=Ka(t=>t?`on${Ga(t)}`:""),Tr=(t,e)=>!Object.is(t,e),Go=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},sa=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},dE=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let sf;const fE=()=>sf||(sf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let xt;class W_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=xt,!e&&xt&&(this.index=(xt.scopes||(xt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=xt;try{return xt=this,e()}finally{xt=n}}}on(){xt=this}off(){xt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function z_(t){return new W_(t)}function pE(t,e=xt){e&&e.active&&e.effects.push(t)}function q_(){return xt}function _E(t){xt&&xt.cleanups.push(t)}const Wu=t=>{const e=new Set(t);return e.w=0,e.n=0,e},K_=t=>(t.w&ls)>0,G_=t=>(t.n&ls)>0,gE=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=ls},mE=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];K_(i)&&!G_(i)?i.delete(t):e[n++]=i,i.w&=~ls,i.n&=~ls}e.length=n}},ia=new WeakMap;let ir=0,ls=1;const Dc=30;let Kt;const Os=Symbol(""),Mc=Symbol("");class zu{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,pE(this,s)}run(){if(!this.active)return this.fn();let e=Kt,n=ns;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Kt,Kt=this,ns=!0,ls=1<<++ir,ir<=Dc?gE(this):rf(this),this.fn()}finally{ir<=Dc&&mE(this),ls=1<<--ir,Kt=this.parent,ns=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Kt===this?this.deferStop=!0:this.active&&(rf(this),this.onStop&&this.onStop(),this.active=!1)}}function rf(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let ns=!0;const Y_=[];function Di(){Y_.push(ns),ns=!1}function Mi(){const t=Y_.pop();ns=t===void 0?!0:t}function Ot(t,e,n){if(ns&&Kt){let s=ia.get(t);s||ia.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=Wu()),X_(i)}}function X_(t,e){let n=!1;ir<=Dc?G_(t)||(t.n|=ls,n=!K_(t)):n=!t.has(Kt),n&&(t.add(Kt),Kt.deps.push(t))}function kn(t,e,n,s,i,r){const o=ia.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&te(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":te(t)?Hu(n)&&a.push(o.get("length")):(a.push(o.get(Os)),ui(t)&&a.push(o.get(Mc)));break;case"delete":te(t)||(a.push(o.get(Os)),ui(t)&&a.push(o.get(Mc)));break;case"set":ui(t)&&a.push(o.get(Os));break}if(a.length===1)a[0]&&Lc(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Lc(Wu(l))}}function Lc(t,e){const n=te(t)?t:[...t];for(const s of n)s.computed&&of(s);for(const s of n)s.computed||of(s)}function of(t,e){(t!==Kt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function vE(t,e){var n;return(n=ia.get(t))===null||n===void 0?void 0:n.get(e)}const yE=Bu("__proto__,__v_isRef,__isVue"),Q_=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Cr)),EE=qu(),bE=qu(!1,!0),wE=qu(!0),af=IE();function IE(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=me(this);for(let r=0,o=this.length;r<o;r++)Ot(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(me)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Di();const s=me(this)[e].apply(this,n);return Mi(),s}}),t}function CE(t){const e=me(this);return Ot(e,"has",t),e.hasOwnProperty(t)}function qu(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?$E:ng:e?tg:eg).get(s))return s;const o=te(s);if(!t){if(o&&ye(af,i))return Reflect.get(af,i,r);if(i==="hasOwnProperty")return CE}const a=Reflect.get(s,i,r);return(Cr(i)?Q_.has(i):yE(i))||(t||Ot(s,"get",i),e)?a:xe(a)?o&&Hu(i)?a:a.value:De(a)?t?sg(a):Ln(a):a}}const TE=J_(),SE=J_(!0);function J_(t=!1){return function(n,s,i,r){let o=n[s];if(bi(o)&&xe(o)&&!xe(i))return!1;if(!t&&(!ra(i)&&!bi(i)&&(o=me(o),i=me(i)),!te(n)&&xe(o)&&!xe(i)))return o.value=i,!0;const a=te(n)&&Hu(s)?Number(s)<n.length:ye(n,s),l=Reflect.set(n,s,i,r);return n===me(r)&&(a?Tr(i,o)&&kn(n,"set",s,i):kn(n,"add",s,i)),l}}function AE(t,e){const n=ye(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&kn(t,"delete",e,void 0),s}function RE(t,e){const n=Reflect.has(t,e);return(!Cr(e)||!Q_.has(e))&&Ot(t,"has",e),n}function kE(t){return Ot(t,"iterate",te(t)?"length":Os),Reflect.ownKeys(t)}const Z_={get:EE,set:TE,deleteProperty:AE,has:RE,ownKeys:kE},OE={get:wE,set(t,e){return!0},deleteProperty(t,e){return!0}},PE=vt({},Z_,{get:bE,set:SE}),Ku=t=>t,Ya=t=>Reflect.getPrototypeOf(t);function Po(t,e,n=!1,s=!1){t=t.__v_raw;const i=me(t),r=me(e);n||(e!==r&&Ot(i,"get",e),Ot(i,"get",r));const{has:o}=Ya(i),a=s?Ku:n?Xu:Sr;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function No(t,e=!1){const n=this.__v_raw,s=me(n),i=me(t);return e||(t!==i&&Ot(s,"has",t),Ot(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function xo(t,e=!1){return t=t.__v_raw,!e&&Ot(me(t),"iterate",Os),Reflect.get(t,"size",t)}function lf(t){t=me(t);const e=me(this);return Ya(e).has.call(e,t)||(e.add(t),kn(e,"add",t,t)),this}function cf(t,e){e=me(e);const n=me(this),{has:s,get:i}=Ya(n);let r=s.call(n,t);r||(t=me(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?Tr(e,o)&&kn(n,"set",t,e):kn(n,"add",t,e),this}function uf(t){const e=me(this),{has:n,get:s}=Ya(e);let i=n.call(e,t);i||(t=me(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&kn(e,"delete",t,void 0),r}function hf(){const t=me(this),e=t.size!==0,n=t.clear();return e&&kn(t,"clear",void 0,void 0),n}function Do(t,e){return function(s,i){const r=this,o=r.__v_raw,a=me(o),l=e?Ku:t?Xu:Sr;return!t&&Ot(a,"iterate",Os),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function Mo(t,e,n){return function(...s){const i=this.__v_raw,r=me(i),o=ui(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?Ku:e?Xu:Sr;return!e&&Ot(r,"iterate",l?Mc:Os),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function jn(t){return function(...e){return t==="delete"?!1:this}}function NE(){const t={get(r){return Po(this,r)},get size(){return xo(this)},has:No,add:lf,set:cf,delete:uf,clear:hf,forEach:Do(!1,!1)},e={get(r){return Po(this,r,!1,!0)},get size(){return xo(this)},has:No,add:lf,set:cf,delete:uf,clear:hf,forEach:Do(!1,!0)},n={get(r){return Po(this,r,!0)},get size(){return xo(this,!0)},has(r){return No.call(this,r,!0)},add:jn("add"),set:jn("set"),delete:jn("delete"),clear:jn("clear"),forEach:Do(!0,!1)},s={get(r){return Po(this,r,!0,!0)},get size(){return xo(this,!0)},has(r){return No.call(this,r,!0)},add:jn("add"),set:jn("set"),delete:jn("delete"),clear:jn("clear"),forEach:Do(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Mo(r,!1,!1),n[r]=Mo(r,!0,!1),e[r]=Mo(r,!1,!0),s[r]=Mo(r,!0,!0)}),[t,n,e,s]}const[xE,DE,ME,LE]=NE();function Gu(t,e){const n=e?t?LE:ME:t?DE:xE;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(ye(n,i)&&i in s?n:s,i,r)}const FE={get:Gu(!1,!1)},UE={get:Gu(!1,!0)},BE={get:Gu(!0,!1)},eg=new WeakMap,tg=new WeakMap,ng=new WeakMap,$E=new WeakMap;function VE(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function jE(t){return t.__v_skip||!Object.isExtensible(t)?0:VE(cE(t))}function Ln(t){return bi(t)?t:Yu(t,!1,Z_,FE,eg)}function HE(t){return Yu(t,!1,PE,UE,tg)}function sg(t){return Yu(t,!0,OE,BE,ng)}function Yu(t,e,n,s,i){if(!De(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=jE(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function Sn(t){return bi(t)?Sn(t.__v_raw):!!(t&&t.__v_isReactive)}function bi(t){return!!(t&&t.__v_isReadonly)}function ra(t){return!!(t&&t.__v_isShallow)}function ig(t){return Sn(t)||bi(t)}function me(t){const e=t&&t.__v_raw;return e?me(e):t}function Fs(t){return sa(t,"__v_skip",!0),t}const Sr=t=>De(t)?Ln(t):t,Xu=t=>De(t)?sg(t):t;function rg(t){ns&&Kt&&(t=me(t),X_(t.dep||(t.dep=Wu())))}function og(t,e){t=me(t);const n=t.dep;n&&Lc(n)}function xe(t){return!!(t&&t.__v_isRef===!0)}function We(t){return ag(t,!1)}function WE(t){return ag(t,!0)}function ag(t,e){return xe(t)?t:new zE(t,e)}class zE{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:me(e),this._value=n?e:Sr(e)}get value(){return rg(this),this._value}set value(e){const n=this.__v_isShallow||ra(e)||bi(e);e=n?e:me(e),Tr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Sr(e),og(this))}}function v(t){return xe(t)?t.value:t}const qE={get:(t,e,n)=>v(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return xe(i)&&!xe(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function lg(t){return Sn(t)?t:new Proxy(t,qE)}function KE(t){const e=te(t)?new Array(t.length):{};for(const n in t)e[n]=St(t,n);return e}class GE{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return vE(me(this._object),this._key)}}function St(t,e,n){const s=t[e];return xe(s)?s:new GE(t,e,n)}var cg;class YE{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[cg]=!1,this._dirty=!0,this.effect=new zu(e,()=>{this._dirty||(this._dirty=!0,og(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=me(this);return rg(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}cg="__v_isReadonly";function XE(t,e,n=!1){let s,i;const r=ue(t);return r?(s=t,i=Zt):(s=t.get,i=t.set),new YE(s,i,r||!i,n)}function ss(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){Xa(r,e,n)}return i}function jt(t,e,n,s){if(ue(t)){const r=ss(t,e,n,s);return r&&V_(r)&&r.catch(o=>{Xa(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(jt(t[r],e,n,s));return i}function Xa(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){ss(l,null,10,[t,o,a]);return}}QE(t,n,i,s)}function QE(t,e,n,s=!0){console.error(t)}let Ar=!1,Fc=!1;const pt=[];let ln=0;const hi=[];let yn=null,bs=0;const ug=Promise.resolve();let Qu=null;function es(t){const e=Qu||ug;return t?e.then(this?t.bind(this):t):e}function JE(t){let e=ln+1,n=pt.length;for(;e<n;){const s=e+n>>>1;Rr(pt[s])<t?e=s+1:n=s}return e}function Ju(t){(!pt.length||!pt.includes(t,Ar&&t.allowRecurse?ln+1:ln))&&(t.id==null?pt.push(t):pt.splice(JE(t.id),0,t),hg())}function hg(){!Ar&&!Fc&&(Fc=!0,Qu=ug.then(fg))}function ZE(t){const e=pt.indexOf(t);e>ln&&pt.splice(e,1)}function eb(t){te(t)?hi.push(...t):(!yn||!yn.includes(t,t.allowRecurse?bs+1:bs))&&hi.push(t),hg()}function df(t,e=Ar?ln+1:0){for(;e<pt.length;e++){const n=pt[e];n&&n.pre&&(pt.splice(e,1),e--,n())}}function dg(t){if(hi.length){const e=[...new Set(hi)];if(hi.length=0,yn){yn.push(...e);return}for(yn=e,yn.sort((n,s)=>Rr(n)-Rr(s)),bs=0;bs<yn.length;bs++)yn[bs]();yn=null,bs=0}}const Rr=t=>t.id==null?1/0:t.id,tb=(t,e)=>{const n=Rr(t)-Rr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function fg(t){Fc=!1,Ar=!0,pt.sort(tb);const e=Zt;try{for(ln=0;ln<pt.length;ln++){const n=pt[ln];n&&n.active!==!1&&ss(n,null,14)}}finally{ln=0,pt.length=0,dg(),Ar=!1,Qu=null,(pt.length||hi.length)&&fg()}}function nb(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Fe;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||Fe;d&&(i=n.map(p=>Xe(p)?p.trim():p)),h&&(i=n.map(dE))}let a,l=s[a=Kl(e)]||s[a=Kl(pn(e))];!l&&r&&(l=s[a=Kl(xi(e))]),l&&jt(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,jt(c,t,6,i)}}function pg(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!ue(t)){const l=c=>{const u=pg(c,e,!0);u&&(a=!0,vt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(De(t)&&s.set(t,null),null):(te(r)?r.forEach(l=>o[l]=null):vt(o,r),De(t)&&s.set(t,o),o)}function Qa(t,e){return!t||!za(e)?!1:(e=e.slice(2).replace(/Once$/,""),ye(t,e[0].toLowerCase()+e.slice(1))||ye(t,xi(e))||ye(t,e))}let lt=null,Ja=null;function oa(t){const e=lt;return lt=t,Ja=t&&t.type.__scopeId||null,e}function Jr(t){Ja=t}function Zr(){Ja=null}function It(t,e=lt,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&wf(-1);const r=oa(e);let o;try{o=t(...i)}finally{oa(r),s._d&&wf(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Gl(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:p,ctx:m,inheritAttrs:E}=t;let k,C;const D=oa(t);try{if(n.shapeFlag&4){const H=i||s;k=an(u.call(H,H,h,r,p,d,m)),C=l}else{const H=e;k=an(H.length>1?H(r,{attrs:l,slots:a,emit:c}):H(r,null)),C=e.props?l:sb(l)}}catch(H){hr.length=0,Xa(H,t,1),k=J(Ht)}let P=k;if(C&&E!==!1){const H=Object.keys(C),{shapeFlag:A}=P;H.length&&A&7&&(o&&H.some(Vu)&&(C=ib(C,o)),P=cs(P,C))}return n.dirs&&(P=cs(P),P.dirs=P.dirs?P.dirs.concat(n.dirs):n.dirs),n.transition&&(P.transition=n.transition),k=P,oa(D),k}const sb=t=>{let e;for(const n in t)(n==="class"||n==="style"||za(n))&&((e||(e={}))[n]=t[n]);return e},ib=(t,e)=>{const n={};for(const s in t)(!Vu(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function rb(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?ff(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!Qa(c,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?ff(s,o,c):!0:!!o;return!1}function ff(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Qa(n,r))return!0}return!1}function ob({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const ab=t=>t.__isSuspense;function lb(t,e){e&&e.pendingBranch?te(t)?e.effects.push(...t):e.effects.push(t):eb(t)}function di(t,e){if(Ke){let n=Ke.provides;const s=Ke.parent&&Ke.parent.provides;s===n&&(n=Ke.provides=Object.create(s)),n[t]=e}}function Ft(t,e,n=!1){const s=Ke||lt;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&ue(e)?e.call(s.proxy):e}}function _g(t,e){return Zu(t,null,e)}const Lo={};function et(t,e,n){return Zu(t,e,n)}function Zu(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=Fe){const a=q_()===(Ke==null?void 0:Ke.scope)?Ke:null;let l,c=!1,u=!1;if(xe(t)?(l=()=>t.value,c=ra(t)):Sn(t)?(l=()=>t,s=!0):te(t)?(u=!0,c=t.some(P=>Sn(P)||ra(P)),l=()=>t.map(P=>{if(xe(P))return P.value;if(Sn(P))return Ts(P);if(ue(P))return ss(P,a,2)})):ue(t)?e?l=()=>ss(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),jt(t,a,3,[d])}:l=Zt,e&&s){const P=l;l=()=>Ts(P())}let h,d=P=>{h=C.onStop=()=>{ss(P,a,4)}},p;if(Or)if(d=Zt,e?n&&jt(e,a,3,[l(),u?[]:void 0,d]):l(),i==="sync"){const P=ew();p=P.__watcherHandles||(P.__watcherHandles=[])}else return Zt;let m=u?new Array(t.length).fill(Lo):Lo;const E=()=>{if(C.active)if(e){const P=C.run();(s||c||(u?P.some((H,A)=>Tr(H,m[A])):Tr(P,m)))&&(h&&h(),jt(e,a,3,[P,m===Lo?void 0:u&&m[0]===Lo?[]:m,d]),m=P)}else C.run()};E.allowRecurse=!!e;let k;i==="sync"?k=E:i==="post"?k=()=>Ct(E,a&&a.suspense):(E.pre=!0,a&&(E.id=a.uid),k=()=>Ju(E));const C=new zu(l,k);e?n?E():m=C.run():i==="post"?Ct(C.run.bind(C),a&&a.suspense):C.run();const D=()=>{C.stop(),a&&a.scope&&ju(a.scope.effects,C)};return p&&p.push(D),D}function cb(t,e,n){const s=this.proxy,i=Xe(t)?t.includes(".")?gg(s,t):()=>s[t]:t.bind(s,s);let r;ue(e)?r=e:(r=e.handler,n=e);const o=Ke;wi(this);const a=Zu(i,r.bind(s),n);return o?wi(o):Ps(),a}function gg(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Ts(t,e){if(!De(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),xe(t))Ts(t.value,e);else if(te(t))for(let n=0;n<t.length;n++)Ts(t[n],e);else if(qa(t)||ui(t))t.forEach(n=>{Ts(n,e)});else if(H_(t))for(const n in t)Ts(t[n],e);return t}function ub(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return qs(()=>{t.isMounted=!0}),eo(()=>{t.isUnmounting=!0}),t}const Vt=[Function,Array],hb={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Vt,onEnter:Vt,onAfterEnter:Vt,onEnterCancelled:Vt,onBeforeLeave:Vt,onLeave:Vt,onAfterLeave:Vt,onLeaveCancelled:Vt,onBeforeAppear:Vt,onAppear:Vt,onAfterAppear:Vt,onAppearCancelled:Vt},setup(t,{slots:e}){const n=no(),s=ub();let i;return()=>{const r=e.default&&vg(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const E of r)if(E.type!==Ht){o=E;break}}const a=me(t),{mode:l}=a;if(s.isLeaving)return Yl(o);const c=pf(o);if(!c)return Yl(o);const u=Uc(c,a,s,n);Bc(c,u);const h=n.subTree,d=h&&pf(h);let p=!1;const{getTransitionKey:m}=c.type;if(m){const E=m();i===void 0?i=E:E!==i&&(i=E,p=!0)}if(d&&d.type!==Ht&&(!ws(c,d)||p)){const E=Uc(d,a,s,n);if(Bc(d,E),l==="out-in")return s.isLeaving=!0,E.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},Yl(o);l==="in-out"&&c.type!==Ht&&(E.delayLeave=(k,C,D)=>{const P=mg(s,d);P[String(d.key)]=d,k._leaveCb=()=>{C(),k._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=D})}return o}}},db=hb;function mg(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Uc(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:p,onLeaveCancelled:m,onBeforeAppear:E,onAppear:k,onAfterAppear:C,onAppearCancelled:D}=e,P=String(t.key),H=mg(n,t),A=(I,L)=>{I&&jt(I,s,9,L)},M=(I,L)=>{const B=L[1];A(I,L),te(I)?I.every(ce=>ce.length<=1)&&B():I.length<=1&&B()},N={mode:r,persisted:o,beforeEnter(I){let L=a;if(!n.isMounted)if(i)L=E||a;else return;I._leaveCb&&I._leaveCb(!0);const B=H[P];B&&ws(t,B)&&B.el._leaveCb&&B.el._leaveCb(),A(L,[I])},enter(I){let L=l,B=c,ce=u;if(!n.isMounted)if(i)L=k||l,B=C||c,ce=D||u;else return;let ge=!1;const ke=I._enterCb=Se=>{ge||(ge=!0,Se?A(ce,[I]):A(B,[I]),N.delayedLeave&&N.delayedLeave(),I._enterCb=void 0)};L?M(L,[I,ke]):ke()},leave(I,L){const B=String(t.key);if(I._enterCb&&I._enterCb(!0),n.isUnmounting)return L();A(h,[I]);let ce=!1;const ge=I._leaveCb=ke=>{ce||(ce=!0,L(),ke?A(m,[I]):A(p,[I]),I._leaveCb=void 0,H[B]===t&&delete H[B])};H[B]=t,d?M(d,[I,ge]):ge()},clone(I){return Uc(I,e,n,s)}};return N}function Yl(t){if(Za(t))return t=cs(t),t.children=null,t}function pf(t){return Za(t)?t.children?t.children[0]:void 0:t}function Bc(t,e){t.shapeFlag&6&&t.component?Bc(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function vg(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===Ye?(o.patchFlag&128&&i++,s=s.concat(vg(o.children,e,a))):(e||o.type!==Ht)&&s.push(a!=null?cs(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function Ce(t){return ue(t)?{setup:t,name:t.name}:t}const cr=t=>!!t.type.__asyncLoader,Za=t=>t.type.__isKeepAlive;function fb(t,e){yg(t,"a",e)}function pb(t,e){yg(t,"da",e)}function yg(t,e,n=Ke){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(el(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Za(i.parent.vnode)&&_b(s,e,n,i),i=i.parent}}function _b(t,e,n,s){const i=el(e,t,s,!0);Eg(()=>{ju(s[e],i)},n)}function el(t,e,n=Ke,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Di(),wi(n);const a=jt(e,n,t,o);return Ps(),Mi(),a});return s?i.unshift(r):i.push(r),r}}const Fn=t=>(e,n=Ke)=>(!Or||t==="sp")&&el(t,(...s)=>e(...s),n),gb=Fn("bm"),qs=Fn("m"),mb=Fn("bu"),vb=Fn("u"),eo=Fn("bum"),Eg=Fn("um"),yb=Fn("sp"),Eb=Fn("rtg"),bb=Fn("rtc");function wb(t,e=Ke){el("ec",t,e)}function Ks(t,e){const n=lt;if(n===null)return t;const s=sl(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=Fe]=e[r];o&&(ue(o)&&(o={mounted:o,updated:o}),o.deep&&Ts(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function gs(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(Di(),jt(l,n,8,[t.el,a,t,e]),Mi())}}const eh="components";function th(t,e){return wg(eh,t,!0,e)||t}const bg=Symbol();function nh(t){return Xe(t)?wg(eh,t,!1)||t:t||bg}function wg(t,e,n=!0,s=!1){const i=lt||Ke;if(i){const r=i.type;if(t===eh){const a=Qb(r,!1);if(a&&(a===e||a===pn(e)||a===Ga(pn(e))))return r}const o=_f(i[t]||r[t],e)||_f(i.appContext[t],e);return!o&&s?r:o}}function _f(t,e){return t&&(t[e]||t[pn(e)]||t[Ga(pn(e))])}function to(t,e,n,s){let i;const r=n&&n[s];if(te(t)||Xe(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(De(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}function sh(t,e,n={},s,i){if(lt.isCE||lt.parent&&cr(lt.parent)&&lt.parent.isCE)return e!=="default"&&(n.name=e),J("slot",n,s&&s());let r=t[e];r&&r._c&&(r._d=!1),Q();const o=r&&Ig(r(n)),a=Xt(Ye,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function Ig(t){return t.some(e=>la(e)?!(e.type===Ht||e.type===Ye&&!Ig(e.children)):!0)?t:null}const $c=t=>t?Dg(t)?sl(t)||t.proxy:$c(t.parent):null,ur=vt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>$c(t.parent),$root:t=>$c(t.root),$emit:t=>t.emit,$options:t=>ih(t),$forceUpdate:t=>t.f||(t.f=()=>Ju(t.update)),$nextTick:t=>t.n||(t.n=es.bind(t.proxy)),$watch:t=>cb.bind(t)}),Xl=(t,e)=>t!==Fe&&!t.__isScriptSetup&&ye(t,e),Ib={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Xl(s,e))return o[e]=1,s[e];if(i!==Fe&&ye(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&ye(c,e))return o[e]=3,r[e];if(n!==Fe&&ye(n,e))return o[e]=4,n[e];Vc&&(o[e]=0)}}const u=ur[e];let h,d;if(u)return e==="$attrs"&&Ot(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Fe&&ye(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,ye(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Xl(i,e)?(i[e]=n,!0):s!==Fe&&ye(s,e)?(s[e]=n,!0):ye(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==Fe&&ye(t,o)||Xl(e,o)||(a=r[0])&&ye(a,o)||ye(s,o)||ye(ur,o)||ye(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ye(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Vc=!0;function Cb(t){const e=ih(t),n=t.proxy,s=t.ctx;Vc=!1,e.beforeCreate&&gf(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:p,updated:m,activated:E,deactivated:k,beforeDestroy:C,beforeUnmount:D,destroyed:P,unmounted:H,render:A,renderTracked:M,renderTriggered:N,errorCaptured:I,serverPrefetch:L,expose:B,inheritAttrs:ce,components:ge,directives:ke,filters:Se}=e;if(c&&Tb(c,s,null,t.appContext.config.unwrapInjectedRef),o)for(const Z in o){const he=o[Z];ue(he)&&(s[Z]=he.bind(n))}if(i){const Z=i.call(n,n);De(Z)&&(t.data=Ln(Z))}if(Vc=!0,r)for(const Z in r){const he=r[Z],ze=ue(he)?he.bind(n,n):ue(he.get)?he.get.bind(n,n):Zt,ht=!ue(he)&&ue(he.set)?he.set.bind(n):Zt,Qe=Ee({get:ze,set:ht});Object.defineProperty(s,Z,{enumerable:!0,configurable:!0,get:()=>Qe.value,set:je=>Qe.value=je})}if(a)for(const Z in a)Cg(a[Z],s,n,Z);if(l){const Z=ue(l)?l.call(n):l;Reflect.ownKeys(Z).forEach(he=>{di(he,Z[he])})}u&&gf(u,t,"c");function oe(Z,he){te(he)?he.forEach(ze=>Z(ze.bind(n))):he&&Z(he.bind(n))}if(oe(gb,h),oe(qs,d),oe(mb,p),oe(vb,m),oe(fb,E),oe(pb,k),oe(wb,I),oe(bb,M),oe(Eb,N),oe(eo,D),oe(Eg,H),oe(yb,L),te(B))if(B.length){const Z=t.exposed||(t.exposed={});B.forEach(he=>{Object.defineProperty(Z,he,{get:()=>n[he],set:ze=>n[he]=ze})})}else t.exposed||(t.exposed={});A&&t.render===Zt&&(t.render=A),ce!=null&&(t.inheritAttrs=ce),ge&&(t.components=ge),ke&&(t.directives=ke)}function Tb(t,e,n=Zt,s=!1){te(t)&&(t=jc(t));for(const i in t){const r=t[i];let o;De(r)?"default"in r?o=Ft(r.from||i,r.default,!0):o=Ft(r.from||i):o=Ft(r),xe(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function gf(t,e,n){jt(te(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Cg(t,e,n,s){const i=s.includes(".")?gg(n,s):()=>n[s];if(Xe(t)){const r=e[t];ue(r)&&et(i,r)}else if(ue(t))et(i,t.bind(n));else if(De(t))if(te(t))t.forEach(r=>Cg(r,e,n,s));else{const r=ue(t.handler)?t.handler.bind(n):e[t.handler];ue(r)&&et(i,r,t)}}function ih(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>aa(l,c,o,!0)),aa(l,e,o)),De(e)&&r.set(e,l),l}function aa(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&aa(t,r,n,!0),i&&i.forEach(o=>aa(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Sb[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Sb={data:mf,props:vs,emits:vs,methods:vs,computed:vs,beforeCreate:bt,created:bt,beforeMount:bt,mounted:bt,beforeUpdate:bt,updated:bt,beforeDestroy:bt,beforeUnmount:bt,destroyed:bt,unmounted:bt,activated:bt,deactivated:bt,errorCaptured:bt,serverPrefetch:bt,components:vs,directives:vs,watch:Rb,provide:mf,inject:Ab};function mf(t,e){return e?t?function(){return vt(ue(t)?t.call(this,this):t,ue(e)?e.call(this,this):e)}:e:t}function Ab(t,e){return vs(jc(t),jc(e))}function jc(t){if(te(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function bt(t,e){return t?[...new Set([].concat(t,e))]:e}function vs(t,e){return t?vt(vt(Object.create(null),t),e):e}function Rb(t,e){if(!t)return e;if(!e)return t;const n=vt(Object.create(null),t);for(const s in e)n[s]=bt(t[s],e[s]);return n}function kb(t,e,n,s=!1){const i={},r={};sa(r,nl,1),t.propsDefaults=Object.create(null),Tg(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:HE(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Ob(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=me(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Qa(t.emitsOptions,d))continue;const p=e[d];if(l)if(ye(r,d))p!==r[d]&&(r[d]=p,c=!0);else{const m=pn(d);i[m]=Hc(l,a,m,p,t,!1)}else p!==r[d]&&(r[d]=p,c=!0)}}}else{Tg(t,e,i,r)&&(c=!0);let u;for(const h in a)(!e||!ye(e,h)&&((u=xi(h))===h||!ye(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Hc(l,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!ye(e,h))&&(delete r[h],c=!0)}c&&kn(t,"set","$attrs")}function Tg(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ko(l))continue;const c=e[l];let u;i&&ye(i,u=pn(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Qa(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=me(n),c=a||Fe;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Hc(i,l,h,c[h],t,!ye(c,h))}}return o}function Hc(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=ye(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&ue(l)){const{propsDefaults:c}=i;n in c?s=c[n]:(wi(i),s=c[n]=l.call(null,e),Ps())}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===xi(n))&&(s=!0))}return s}function Sg(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!ue(t)){const u=h=>{l=!0;const[d,p]=Sg(h,e,!0);vt(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return De(t)&&s.set(t,ci),ci;if(te(r))for(let u=0;u<r.length;u++){const h=pn(r[u]);vf(h)&&(o[h]=Fe)}else if(r)for(const u in r){const h=pn(u);if(vf(h)){const d=r[u],p=o[h]=te(d)||ue(d)?{type:d}:Object.assign({},d);if(p){const m=bf(Boolean,p.type),E=bf(String,p.type);p[0]=m>-1,p[1]=E<0||m<E,(m>-1||ye(p,"default"))&&a.push(h)}}}const c=[o,a];return De(t)&&s.set(t,c),c}function vf(t){return t[0]!=="$"}function yf(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Ef(t,e){return yf(t)===yf(e)}function bf(t,e){return te(e)?e.findIndex(n=>Ef(n,t)):ue(e)&&Ef(e,t)?0:-1}const Ag=t=>t[0]==="_"||t==="$stable",rh=t=>te(t)?t.map(an):[an(t)],Pb=(t,e,n)=>{if(e._n)return e;const s=It((...i)=>rh(e(...i)),n);return s._c=!1,s},Rg=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Ag(i))continue;const r=t[i];if(ue(r))e[i]=Pb(i,r,s);else if(r!=null){const o=rh(r);e[i]=()=>o}}},kg=(t,e)=>{const n=rh(e);t.slots.default=()=>n},Nb=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=me(e),sa(e,"_",n)):Rg(e,t.slots={})}else t.slots={},e&&kg(t,e);sa(t.slots,nl,1)},xb=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=Fe;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(vt(i,e),!n&&a===1&&delete i._):(r=!e.$stable,Rg(e,i)),o=e}else e&&(kg(t,e),o={default:1});if(r)for(const a in i)!Ag(a)&&!(a in o)&&delete i[a]};function Og(){return{app:null,config:{isNativeTag:oE,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Db=0;function Mb(t,e){return function(s,i=null){ue(s)||(s=Object.assign({},s)),i!=null&&!De(i)&&(i=null);const r=Og(),o=new Set;let a=!1;const l=r.app={_uid:Db++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:tw,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&ue(c.install)?(o.add(c),c.install(l,...u)):ue(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const d=J(s,i);return d.appContext=r,u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,sl(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l}};return l}}function Wc(t,e,n,s,i=!1){if(te(t)){t.forEach((d,p)=>Wc(d,e&&(te(e)?e[p]:e),n,s,i));return}if(cr(s)&&!i)return;const r=s.shapeFlag&4?sl(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Fe?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Xe(c)?(u[c]=null,ye(h,c)&&(h[c]=null)):xe(c)&&(c.value=null)),ue(l))ss(l,a,12,[o,u]);else{const d=Xe(l),p=xe(l);if(d||p){const m=()=>{if(t.f){const E=d?ye(h,l)?h[l]:u[l]:l.value;i?te(E)&&ju(E,r):te(E)?E.includes(r)||E.push(r):d?(u[l]=[r],ye(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,ye(h,l)&&(h[l]=o)):p&&(l.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,Ct(m,n)):m()}}}const Ct=lb;function Lb(t){return Fb(t)}function Fb(t,e){const n=fE();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:p=Zt,insertStaticContent:m}=t,E=(f,g,w,T=null,O=null,$=null,q=!1,F=null,j=!!g.dynamicChildren)=>{if(f===g)return;f&&!ws(f,g)&&(T=b(f),je(f,O,$,!0),f=null),g.patchFlag===-2&&(j=!1,g.dynamicChildren=null);const{type:_,ref:y,shapeFlag:R}=g;switch(_){case tl:k(f,g,w,T);break;case Ht:C(f,g,w,T);break;case Ql:f==null&&D(g,w,T,q);break;case Ye:ge(f,g,w,T,O,$,q,F,j);break;default:R&1?A(f,g,w,T,O,$,q,F,j):R&6?ke(f,g,w,T,O,$,q,F,j):(R&64||R&128)&&_.process(f,g,w,T,O,$,q,F,j,ee)}y!=null&&O&&Wc(y,f&&f.ref,$,g||f,!g)},k=(f,g,w,T)=>{if(f==null)s(g.el=a(g.children),w,T);else{const O=g.el=f.el;g.children!==f.children&&c(O,g.children)}},C=(f,g,w,T)=>{f==null?s(g.el=l(g.children||""),w,T):g.el=f.el},D=(f,g,w,T)=>{[f.el,f.anchor]=m(f.children,g,w,T,f.el,f.anchor)},P=({el:f,anchor:g},w,T)=>{let O;for(;f&&f!==g;)O=d(f),s(f,w,T),f=O;s(g,w,T)},H=({el:f,anchor:g})=>{let w;for(;f&&f!==g;)w=d(f),i(f),f=w;i(g)},A=(f,g,w,T,O,$,q,F,j)=>{q=q||g.type==="svg",f==null?M(g,w,T,O,$,q,F,j):L(f,g,O,$,q,F,j)},M=(f,g,w,T,O,$,q,F)=>{let j,_;const{type:y,props:R,shapeFlag:x,transition:K,dirs:G}=f;if(j=f.el=o(f.type,$,R&&R.is,R),x&8?u(j,f.children):x&16&&I(f.children,j,null,T,O,$&&y!=="foreignObject",q,F),G&&gs(f,null,T,"created"),N(j,f,f.scopeId,q,T),R){for(const re in R)re!=="value"&&!Ko(re)&&r(j,re,null,R[re],$,f.children,T,O,z);"value"in R&&r(j,"value",null,R.value),(_=R.onVnodeBeforeMount)&&on(_,T,f)}G&&gs(f,null,T,"beforeMount");const Y=(!O||O&&!O.pendingBranch)&&K&&!K.persisted;Y&&K.beforeEnter(j),s(j,g,w),((_=R&&R.onVnodeMounted)||Y||G)&&Ct(()=>{_&&on(_,T,f),Y&&K.enter(j),G&&gs(f,null,T,"mounted")},O)},N=(f,g,w,T,O)=>{if(w&&p(f,w),T)for(let $=0;$<T.length;$++)p(f,T[$]);if(O){let $=O.subTree;if(g===$){const q=O.vnode;N(f,q,q.scopeId,q.slotScopeIds,O.parent)}}},I=(f,g,w,T,O,$,q,F,j=0)=>{for(let _=j;_<f.length;_++){const y=f[_]=F?Kn(f[_]):an(f[_]);E(null,y,g,w,T,O,$,q,F)}},L=(f,g,w,T,O,$,q)=>{const F=g.el=f.el;let{patchFlag:j,dynamicChildren:_,dirs:y}=g;j|=f.patchFlag&16;const R=f.props||Fe,x=g.props||Fe;let K;w&&ms(w,!1),(K=x.onVnodeBeforeUpdate)&&on(K,w,g,f),y&&gs(g,f,w,"beforeUpdate"),w&&ms(w,!0);const G=O&&g.type!=="foreignObject";if(_?B(f.dynamicChildren,_,F,w,T,G,$):q||he(f,g,F,null,w,T,G,$,!1),j>0){if(j&16)ce(F,g,R,x,w,T,O);else if(j&2&&R.class!==x.class&&r(F,"class",null,x.class,O),j&4&&r(F,"style",R.style,x.style,O),j&8){const Y=g.dynamicProps;for(let re=0;re<Y.length;re++){const we=Y[re],Me=R[we],$n=x[we];($n!==Me||we==="value")&&r(F,we,Me,$n,O,f.children,w,T,z)}}j&1&&f.children!==g.children&&u(F,g.children)}else!q&&_==null&&ce(F,g,R,x,w,T,O);((K=x.onVnodeUpdated)||y)&&Ct(()=>{K&&on(K,w,g,f),y&&gs(g,f,w,"updated")},T)},B=(f,g,w,T,O,$,q)=>{for(let F=0;F<g.length;F++){const j=f[F],_=g[F],y=j.el&&(j.type===Ye||!ws(j,_)||j.shapeFlag&70)?h(j.el):w;E(j,_,y,null,T,O,$,q,!0)}},ce=(f,g,w,T,O,$,q)=>{if(w!==T){if(w!==Fe)for(const F in w)!Ko(F)&&!(F in T)&&r(f,F,w[F],null,q,g.children,O,$,z);for(const F in T){if(Ko(F))continue;const j=T[F],_=w[F];j!==_&&F!=="value"&&r(f,F,_,j,q,g.children,O,$,z)}"value"in T&&r(f,"value",w.value,T.value)}},ge=(f,g,w,T,O,$,q,F,j)=>{const _=g.el=f?f.el:a(""),y=g.anchor=f?f.anchor:a("");let{patchFlag:R,dynamicChildren:x,slotScopeIds:K}=g;K&&(F=F?F.concat(K):K),f==null?(s(_,w,T),s(y,w,T),I(g.children,w,y,O,$,q,F,j)):R>0&&R&64&&x&&f.dynamicChildren?(B(f.dynamicChildren,x,w,O,$,q,F),(g.key!=null||O&&g===O.subTree)&&Pg(f,g,!0)):he(f,g,w,y,O,$,q,F,j)},ke=(f,g,w,T,O,$,q,F,j)=>{g.slotScopeIds=F,f==null?g.shapeFlag&512?O.ctx.activate(g,w,T,q,j):Se(g,w,T,O,$,q,j):_e(f,g,j)},Se=(f,g,w,T,O,$,q)=>{const F=f.component=qb(f,T,O);if(Za(f)&&(F.ctx.renderer=ee),Kb(F),F.asyncDep){if(O&&O.registerDep(F,oe),!f.el){const j=F.subTree=J(Ht);C(null,j,g,w)}return}oe(F,f,g,w,O,$,q)},_e=(f,g,w)=>{const T=g.component=f.component;if(rb(f,g,w))if(T.asyncDep&&!T.asyncResolved){Z(T,g,w);return}else T.next=g,ZE(T.update),T.update();else g.el=f.el,T.vnode=g},oe=(f,g,w,T,O,$,q)=>{const F=()=>{if(f.isMounted){let{next:y,bu:R,u:x,parent:K,vnode:G}=f,Y=y,re;ms(f,!1),y?(y.el=G.el,Z(f,y,q)):y=G,R&&Go(R),(re=y.props&&y.props.onVnodeBeforeUpdate)&&on(re,K,y,G),ms(f,!0);const we=Gl(f),Me=f.subTree;f.subTree=we,E(Me,we,h(Me.el),b(Me),f,O,$),y.el=we.el,Y===null&&ob(f,we.el),x&&Ct(x,O),(re=y.props&&y.props.onVnodeUpdated)&&Ct(()=>on(re,K,y,G),O)}else{let y;const{el:R,props:x}=g,{bm:K,m:G,parent:Y}=f,re=cr(g);if(ms(f,!1),K&&Go(K),!re&&(y=x&&x.onVnodeBeforeMount)&&on(y,Y,g),ms(f,!0),R&&ie){const we=()=>{f.subTree=Gl(f),ie(R,f.subTree,f,O,null)};re?g.type.__asyncLoader().then(()=>!f.isUnmounted&&we()):we()}else{const we=f.subTree=Gl(f);E(null,we,w,T,f,O,$),g.el=we.el}if(G&&Ct(G,O),!re&&(y=x&&x.onVnodeMounted)){const we=g;Ct(()=>on(y,Y,we),O)}(g.shapeFlag&256||Y&&cr(Y.vnode)&&Y.vnode.shapeFlag&256)&&f.a&&Ct(f.a,O),f.isMounted=!0,g=w=T=null}},j=f.effect=new zu(F,()=>Ju(_),f.scope),_=f.update=()=>j.run();_.id=f.uid,ms(f,!0),_()},Z=(f,g,w)=>{g.component=f;const T=f.vnode.props;f.vnode=g,f.next=null,Ob(f,g.props,T,w),xb(f,g.children,w),Di(),df(),Mi()},he=(f,g,w,T,O,$,q,F,j=!1)=>{const _=f&&f.children,y=f?f.shapeFlag:0,R=g.children,{patchFlag:x,shapeFlag:K}=g;if(x>0){if(x&128){ht(_,R,w,T,O,$,q,F,j);return}else if(x&256){ze(_,R,w,T,O,$,q,F,j);return}}K&8?(y&16&&z(_,O,$),R!==_&&u(w,R)):y&16?K&16?ht(_,R,w,T,O,$,q,F,j):z(_,O,$,!0):(y&8&&u(w,""),K&16&&I(R,w,T,O,$,q,F,j))},ze=(f,g,w,T,O,$,q,F,j)=>{f=f||ci,g=g||ci;const _=f.length,y=g.length,R=Math.min(_,y);let x;for(x=0;x<R;x++){const K=g[x]=j?Kn(g[x]):an(g[x]);E(f[x],K,w,null,O,$,q,F,j)}_>y?z(f,O,$,!0,!1,R):I(g,w,T,O,$,q,F,j,R)},ht=(f,g,w,T,O,$,q,F,j)=>{let _=0;const y=g.length;let R=f.length-1,x=y-1;for(;_<=R&&_<=x;){const K=f[_],G=g[_]=j?Kn(g[_]):an(g[_]);if(ws(K,G))E(K,G,w,null,O,$,q,F,j);else break;_++}for(;_<=R&&_<=x;){const K=f[R],G=g[x]=j?Kn(g[x]):an(g[x]);if(ws(K,G))E(K,G,w,null,O,$,q,F,j);else break;R--,x--}if(_>R){if(_<=x){const K=x+1,G=K<y?g[K].el:T;for(;_<=x;)E(null,g[_]=j?Kn(g[_]):an(g[_]),w,G,O,$,q,F,j),_++}}else if(_>x)for(;_<=R;)je(f[_],O,$,!0),_++;else{const K=_,G=_,Y=new Map;for(_=G;_<=x;_++){const Nt=g[_]=j?Kn(g[_]):an(g[_]);Nt.key!=null&&Y.set(Nt.key,_)}let re,we=0;const Me=x-G+1;let $n=!1,Vn=0;const Gi=new Array(Me);for(_=0;_<Me;_++)Gi[_]=0;for(_=K;_<=R;_++){const Nt=f[_];if(we>=Me){je(Nt,O,$,!0);continue}let rn;if(Nt.key!=null)rn=Y.get(Nt.key);else for(re=G;re<=x;re++)if(Gi[re-G]===0&&ws(Nt,g[re])){rn=re;break}rn===void 0?je(Nt,O,$,!0):(Gi[rn-G]=_+1,rn>=Vn?Vn=rn:$n=!0,E(Nt,g[rn],w,null,O,$,q,F,j),we++)}const ef=$n?Ub(Gi):ci;for(re=ef.length-1,_=Me-1;_>=0;_--){const Nt=G+_,rn=g[Nt],tf=Nt+1<y?g[Nt+1].el:T;Gi[_]===0?E(null,rn,w,tf,O,$,q,F,j):$n&&(re<0||_!==ef[re]?Qe(rn,w,tf,2):re--)}}},Qe=(f,g,w,T,O=null)=>{const{el:$,type:q,transition:F,children:j,shapeFlag:_}=f;if(_&6){Qe(f.component.subTree,g,w,T);return}if(_&128){f.suspense.move(g,w,T);return}if(_&64){q.move(f,g,w,ee);return}if(q===Ye){s($,g,w);for(let R=0;R<j.length;R++)Qe(j[R],g,w,T);s(f.anchor,g,w);return}if(q===Ql){P(f,g,w);return}if(T!==2&&_&1&&F)if(T===0)F.beforeEnter($),s($,g,w),Ct(()=>F.enter($),O);else{const{leave:R,delayLeave:x,afterLeave:K}=F,G=()=>s($,g,w),Y=()=>{R($,()=>{G(),K&&K()})};x?x($,G,Y):Y()}else s($,g,w)},je=(f,g,w,T=!1,O=!1)=>{const{type:$,props:q,ref:F,children:j,dynamicChildren:_,shapeFlag:y,patchFlag:R,dirs:x}=f;if(F!=null&&Wc(F,null,w,f,!0),y&256){g.ctx.deactivate(f);return}const K=y&1&&x,G=!cr(f);let Y;if(G&&(Y=q&&q.onVnodeBeforeUnmount)&&on(Y,g,f),y&6)S(f.component,w,T);else{if(y&128){f.suspense.unmount(w,T);return}K&&gs(f,null,g,"beforeUnmount"),y&64?f.type.remove(f,g,w,O,ee,T):_&&($!==Ye||R>0&&R&64)?z(_,g,w,!1,!0):($===Ye&&R&384||!O&&y&16)&&z(j,g,w),T&&$t(f)}(G&&(Y=q&&q.onVnodeUnmounted)||K)&&Ct(()=>{Y&&on(Y,g,f),K&&gs(f,null,g,"unmounted")},w)},$t=f=>{const{type:g,el:w,anchor:T,transition:O}=f;if(g===Ye){mn(w,T);return}if(g===Ql){H(f);return}const $=()=>{i(w),O&&!O.persisted&&O.afterLeave&&O.afterLeave()};if(f.shapeFlag&1&&O&&!O.persisted){const{leave:q,delayLeave:F}=O,j=()=>q(w,$);F?F(f.el,$,j):j()}else $()},mn=(f,g)=>{let w;for(;f!==g;)w=d(f),i(f),f=w;i(g)},S=(f,g,w)=>{const{bum:T,scope:O,update:$,subTree:q,um:F}=f;T&&Go(T),O.stop(),$&&($.active=!1,je(q,f,g,w)),F&&Ct(F,g),Ct(()=>{f.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},z=(f,g,w,T=!1,O=!1,$=0)=>{for(let q=$;q<f.length;q++)je(f[q],g,w,T,O)},b=f=>f.shapeFlag&6?b(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),V=(f,g,w)=>{f==null?g._vnode&&je(g._vnode,null,null,!0):E(g._vnode||null,f,g,null,null,null,w),df(),dg(),g._vnode=f},ee={p:E,um:je,m:Qe,r:$t,mt:Se,mc:I,pc:he,pbc:B,n:b,o:t};let Ae,ie;return e&&([Ae,ie]=e(ee)),{render:V,hydrate:Ae,createApp:Mb(V,Ae)}}function ms({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Pg(t,e,n=!1){const s=t.children,i=e.children;if(te(s)&&te(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Kn(i[r]),a.el=o.el),n||Pg(o,a)),a.type===tl&&(a.el=o.el)}}function Ub(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const Bb=t=>t.__isTeleport,Ye=Symbol(void 0),tl=Symbol(void 0),Ht=Symbol(void 0),Ql=Symbol(void 0),hr=[];let Yt=null;function Q(t=!1){hr.push(Yt=t?null:[])}function $b(){hr.pop(),Yt=hr[hr.length-1]||null}let kr=1;function wf(t){kr+=t}function Ng(t){return t.dynamicChildren=kr>0?Yt||ci:null,$b(),kr>0&&Yt&&Yt.push(t),t}function le(t,e,n,s,i,r){return Ng(W(t,e,n,s,i,r,!0))}function Xt(t,e,n,s,i){return Ng(J(t,e,n,s,i,!0))}function la(t){return t?t.__v_isVNode===!0:!1}function ws(t,e){return t.type===e.type&&t.key===e.key}const nl="__vInternal",xg=({key:t})=>t??null,Yo=({ref:t,ref_key:e,ref_for:n})=>t!=null?Xe(t)||xe(t)||ue(t)?{i:lt,r:t,k:e,f:!!n}:t:null;function W(t,e=null,n=null,s=0,i=null,r=t===Ye?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&xg(e),ref:e&&Yo(e),scopeId:Ja,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:lt};return a?(oh(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Xe(n)?8:16),kr>0&&!o&&Yt&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Yt.push(l),l}const J=Vb;function Vb(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===bg)&&(t=Ht),la(t)){const a=cs(t,e,!0);return n&&oh(a,n),kr>0&&!r&&Yt&&(a.shapeFlag&6?Yt[Yt.indexOf(t)]=a:Yt.push(a)),a.patchFlag|=-2,a}if(Jb(t)&&(t=t.__vccOpts),e){e=jb(e);let{class:a,style:l}=e;a&&!Xe(a)&&(e.class=_t(a)),De(l)&&(ig(l)&&!te(l)&&(l=vt({},l)),e.style=$u(l))}const o=Xe(t)?1:ab(t)?128:Bb(t)?64:De(t)?4:ue(t)?2:0;return W(t,e,n,s,i,o,r,!0)}function jb(t){return t?ig(t)||nl in t?vt({},t):t:null}function cs(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?Hb(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&xg(a),ref:e&&e.ref?n&&i?te(i)?i.concat(Yo(e)):[i,Yo(e)]:Yo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ye?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&cs(t.ssContent),ssFallback:t.ssFallback&&cs(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function en(t=" ",e=0){return J(tl,null,t,e)}function cn(t="",e=!1){return e?(Q(),Xt(Ht,null,t)):J(Ht,null,t)}function an(t){return t==null||typeof t=="boolean"?J(Ht):te(t)?J(Ye,null,t.slice()):typeof t=="object"?Kn(t):J(tl,null,String(t))}function Kn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:cs(t)}function oh(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(te(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),oh(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(nl in e)?e._ctx=lt:i===3&&lt&&(lt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ue(e)?(e={default:e,_ctx:lt},n=32):(e=String(e),s&64?(n=16,e=[en(e)]):n=8);t.children=e,t.shapeFlag|=n}function Hb(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=_t([e.class,s.class]));else if(i==="style")e.style=$u([e.style,s.style]);else if(za(i)){const r=e[i],o=s[i];o&&r!==o&&!(te(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function on(t,e,n,s=null){jt(t,e,7,[n,s])}const Wb=Og();let zb=0;function qb(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Wb,r={uid:zb++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new W_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Sg(s,i),emitsOptions:pg(s,i),emit:null,emitted:null,propsDefaults:Fe,inheritAttrs:s.inheritAttrs,ctx:Fe,data:Fe,props:Fe,attrs:Fe,slots:Fe,refs:Fe,setupState:Fe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=nb.bind(null,r),t.ce&&t.ce(r),r}let Ke=null;const no=()=>Ke||lt,wi=t=>{Ke=t,t.scope.on()},Ps=()=>{Ke&&Ke.scope.off(),Ke=null};function Dg(t){return t.vnode.shapeFlag&4}let Or=!1;function Kb(t,e=!1){Or=e;const{props:n,children:s}=t.vnode,i=Dg(t);kb(t,n,i,e),Nb(t,s);const r=i?Gb(t,e):void 0;return Or=!1,r}function Gb(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Fs(new Proxy(t.ctx,Ib));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?Xb(t):null;wi(t),Di();const r=ss(s,t,0,[t.props,i]);if(Mi(),Ps(),V_(r)){if(r.then(Ps,Ps),e)return r.then(o=>{If(t,o,e)}).catch(o=>{Xa(o,t,0)});t.asyncDep=r}else If(t,r,e)}else Mg(t,e)}function If(t,e,n){ue(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:De(e)&&(t.setupState=lg(e)),Mg(t,n)}let Cf;function Mg(t,e,n){const s=t.type;if(!t.render){if(!e&&Cf&&!s.render){const i=s.template||ih(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=vt(vt({isCustomElement:r,delimiters:a},o),l);s.render=Cf(i,c)}}t.render=s.render||Zt}wi(t),Di(),Cb(t),Mi(),Ps()}function Yb(t){return new Proxy(t.attrs,{get(e,n){return Ot(t,"get","$attrs"),e[n]}})}function Xb(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=Yb(t))},slots:t.slots,emit:t.emit,expose:e}}function sl(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(lg(Fs(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ur)return ur[n](t)},has(e,n){return n in e||n in ur}}))}function Qb(t,e=!0){return ue(t)?t.displayName||t.name:t.name||e&&t.__name}function Jb(t){return ue(t)&&"__vccOpts"in t}const Ee=(t,e)=>XE(t,e,Or);function Ii(t,e,n){const s=arguments.length;return s===2?De(e)&&!te(e)?la(e)?J(t,null,[e]):J(t,e):J(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&la(n)&&(n=[n]),J(t,e,n))}const Zb=Symbol(""),ew=()=>Ft(Zb),tw="3.2.47",nw="http://www.w3.org/2000/svg",Is=typeof document<"u"?document:null,Tf=Is&&Is.createElement("template"),sw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?Is.createElementNS(nw,t):Is.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Is.createTextNode(t),createComment:t=>Is.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Is.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Tf.innerHTML=s?`<svg>${t}</svg>`:t;const a=Tf.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function iw(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function rw(t,e,n){const s=t.style,i=Xe(n);if(n&&!i){if(e&&!Xe(e))for(const r in e)n[r]==null&&zc(s,r,"");for(const r in n)zc(s,r,n[r])}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const Sf=/\s*!important$/;function zc(t,e,n){if(te(n))n.forEach(s=>zc(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=ow(t,e);Sf.test(n)?t.setProperty(xi(s),n.replace(Sf,""),"important"):t[s]=n}}const Af=["Webkit","Moz","ms"],Jl={};function ow(t,e){const n=Jl[e];if(n)return n;let s=pn(e);if(s!=="filter"&&s in t)return Jl[e]=s;s=Ga(s);for(let i=0;i<Af.length;i++){const r=Af[i]+s;if(r in t)return Jl[e]=r}return e}const Rf="http://www.w3.org/1999/xlink";function aw(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Rf,e.slice(6,e.length)):t.setAttributeNS(Rf,e,n);else{const r=iE(e);n==null||r&&!U_(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function lw(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n??"";(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=U_(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Lg(t,e,n,s){t.addEventListener(e,n,s)}function cw(t,e,n,s){t.removeEventListener(e,n,s)}function uw(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=hw(e);if(s){const c=r[e]=pw(s,i);Lg(t,a,c,l)}else o&&(cw(t,a,o,l),r[e]=void 0)}}const kf=/(?:Once|Passive|Capture)$/;function hw(t){let e;if(kf.test(t)){e={};let s;for(;s=t.match(kf);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):xi(t.slice(2)),e]}let Zl=0;const dw=Promise.resolve(),fw=()=>Zl||(dw.then(()=>Zl=0),Zl=Date.now());function pw(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;jt(_w(s,n.value),e,5,[s])};return n.value=t,n.attached=fw(),n}function _w(t,e){if(te(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Of=/^on[a-z]/,gw=(t,e,n,s,i=!1,r,o,a,l)=>{e==="class"?iw(t,s,i):e==="style"?rw(t,n,s):za(e)?Vu(e)||uw(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):mw(t,e,s,i))?lw(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),aw(t,e,s,i))};function mw(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Of.test(e)&&ue(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Of.test(e)&&Xe(n)?!1:e in t}const vw={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};db.props;const Pf=t=>{const e=t.props["onUpdate:modelValue"]||!1;return te(e)?n=>Go(e,n):e},yw={deep:!0,created(t,e,n){t._assign=Pf(n),Lg(t,"change",()=>{const s=t._modelValue,i=Ew(t),r=t.checked,o=t._assign;if(te(s)){const a=B_(s,i),l=a!==-1;if(r&&!l)o(s.concat(i));else if(!r&&l){const c=[...s];c.splice(a,1),o(c)}}else if(qa(s)){const a=new Set(s);r?a.add(i):a.delete(i),o(a)}else o(Fg(t,r))})},mounted:Nf,beforeUpdate(t,e,n){t._assign=Pf(n),Nf(t,e,n)}};function Nf(t,{value:e,oldValue:n},s){t._modelValue=e,te(e)?t.checked=B_(e,s.props.value)>-1:qa(e)?t.checked=e.has(s.props.value):e!==n&&(t.checked=Wa(e,Fg(t,!0)))}function Ew(t){return"_value"in t?t._value:t.value}function Fg(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const bw=["ctrl","shift","alt","meta"],ww={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>bw.some(n=>t[`${n}Key`]&&!e.includes(n))},il=(t,e)=>(n,...s)=>{for(let i=0;i<e.length;i++){const r=ww[e[i]];if(r&&r(n,e))return}return t(n,...s)},Li={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Yi(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),Yi(t,!0),s.enter(t)):s.leave(t,()=>{Yi(t,!1)}):Yi(t,e))},beforeUnmount(t,{value:e}){Yi(t,e)}};function Yi(t,e){t.style.display=e?t._vod:"none"}const Iw=vt({patchProp:gw},sw);let xf;function Cw(){return xf||(xf=Lb(Iw))}const Tw=(...t)=>{const e=Cw().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Sw(s);if(!i)return;const r=e._component;!ue(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Sw(t){return Xe(t)?document.querySelector(t):t}var Aw=!1;/*!
  * pinia v2.0.34
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let Ug;const rl=t=>Ug=t,Bg=Symbol();function qc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var dr;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(dr||(dr={}));function Rw(){const t=z_(!0),e=t.run(()=>We({}));let n=[],s=[];const i=Fs({install(r){rl(i),i._a=r,r.provide(Bg,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!Aw?s.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const $g=()=>{};function Df(t,e,n,s=$g){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&q_()&&_E(i),i}function Js(t,...e){t.slice().forEach(n=>{n(...e)})}function Kc(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];qc(i)&&qc(s)&&t.hasOwnProperty(n)&&!xe(s)&&!Sn(s)?t[n]=Kc(i,s):t[n]=s}return t}const kw=Symbol();function Ow(t){return!qc(t)||!t.hasOwnProperty(kw)}const{assign:zn}=Object;function Pw(t){return!!(xe(t)&&t.effect)}function Nw(t,e,n,s){const{state:i,actions:r,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=i?i():{});const u=KE(n.state.value[t]);return zn(u,r,Object.keys(o||{}).reduce((h,d)=>(h[d]=Fs(Ee(()=>{rl(n);const p=n._s.get(t);return o[d].call(p,p)})),h),{}))}return l=Vg(t,c,e,n,s,!0),l}function Vg(t,e,n={},s,i,r){let o;const a=zn({actions:{}},n),l={deep:!0};let c,u,h=Fs([]),d=Fs([]),p;const m=s.state.value[t];!r&&!m&&(s.state.value[t]={}),We({});let E;function k(N){let I;c=u=!1,typeof N=="function"?(N(s.state.value[t]),I={type:dr.patchFunction,storeId:t,events:p}):(Kc(s.state.value[t],N),I={type:dr.patchObject,payload:N,storeId:t,events:p});const L=E=Symbol();es().then(()=>{E===L&&(c=!0)}),u=!0,Js(h,I,s.state.value[t])}const C=r?function(){const{state:I}=n,L=I?I():{};this.$patch(B=>{zn(B,L)})}:$g;function D(){o.stop(),h=[],d=[],s._s.delete(t)}function P(N,I){return function(){rl(s);const L=Array.from(arguments),B=[],ce=[];function ge(_e){B.push(_e)}function ke(_e){ce.push(_e)}Js(d,{args:L,name:N,store:A,after:ge,onError:ke});let Se;try{Se=I.apply(this&&this.$id===t?this:A,L)}catch(_e){throw Js(ce,_e),_e}return Se instanceof Promise?Se.then(_e=>(Js(B,_e),_e)).catch(_e=>(Js(ce,_e),Promise.reject(_e))):(Js(B,Se),Se)}}const H={_p:s,$id:t,$onAction:Df.bind(null,d),$patch:k,$reset:C,$subscribe(N,I={}){const L=Df(h,N,I.detached,()=>B()),B=o.run(()=>et(()=>s.state.value[t],ce=>{(I.flush==="sync"?u:c)&&N({storeId:t,type:dr.direct,events:p},ce)},zn({},l,I)));return L},$dispose:D},A=Ln(H);s._s.set(t,A);const M=s._e.run(()=>(o=z_(),o.run(()=>e())));for(const N in M){const I=M[N];if(xe(I)&&!Pw(I)||Sn(I))r||(m&&Ow(I)&&(xe(I)?I.value=m[N]:Kc(I,m[N])),s.state.value[t][N]=I);else if(typeof I=="function"){const L=P(N,I);M[N]=L,a.actions[N]=I}}return zn(A,M),zn(me(A),M),Object.defineProperty(A,"$state",{get:()=>s.state.value[t],set:N=>{k(I=>{zn(I,N)})}}),s._p.forEach(N=>{zn(A,o.run(()=>N({store:A,app:s._a,pinia:s,options:a})))}),m&&r&&n.hydrate&&n.hydrate(A.$state,m),c=!0,u=!0,A}function so(t,e,n){let s,i;const r=typeof e=="function";typeof t=="string"?(s=t,i=r?n:e):(i=t,s=t.id);function o(a,l){const c=no();return a=a||c&&Ft(Bg,null),a&&rl(a),a=Ug,a._s.has(s)||(r?Vg(s,e,i,a):Nw(s,i,a)),a._s.get(s)}return o.$id=s,o}function ah(t){{t=me(t);const e={};for(const n in t){const s=t[n];(xe(s)||Sn(s))&&(e[n]=St(t,n))}return e}}const $e=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},xw={},Dw={class:"footer"};function Mw(t,e){return Q(),le("footer",Dw)}const Lw=$e(xw,[["render",Mw],["__scopeId","data-v-7199557b"]]),Fw="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAABmElEQVR4nO3ZT07CQBSA8edCb6Ab8SwQVxI3LDQs5ALarR5EI0dw49rgTj2FBwA36hFK8pmaGoiBMJ2ZZv7wvoQN07TzS5OXFkQ0zWvAAJjVn4HkHHAOlCyaAyPZEmy+aNZj80MDwxXYcs13Q8nwzs6BC+BszdooO6wsjskDjQE2GzQNsMmjscAmi8YBmxwaD9hk0HjERo+mBWz0aE3T4go4BT5Iv+oXlb4JuDowl6Ym4KwSBf+LzJJNsYXgGVs2tPqZoKfAyUbwEnxseaEn4BDoAJMW1k0aG0P/AgrLi3WWznHUwrpJhTQN6NlcacV5vK4b1rUBHyQM3m8MrgK+EgR/i23AW4LgVxfwOEHwvQu4SBB85QLuJQhuPqFdJnUEYLsJbTupA4M/xTUaTurAYPsJbTupA4PtJ7TtpA4MvhTXaD6pQ7482E9oh0k9qV/tqs0+t7De3oR2eaYOkPuEdnmmDtCL+Aq4I/5ufYKPib+uT/AO8EC8PVZ79AauAvaAG+C9/ic+dGW9l2tg93eTmqZpmqZpmoTrB1sQlZanMEzkAAAAAElFTkSuQmCC";/**
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
 */const jg={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const U=function(t,e){if(!t)throw Fi(e)},Fi=function(t){return new Error("Firebase Database ("+jg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Hg=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Uw=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},lh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(d=64)),s.push(n[u],n[h],n[d],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Hg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Uw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new Bw;const d=r<<2|a>>4;if(s.push(d),c!==64){const p=a<<4&240|c>>2;if(s.push(p),h!==64){const m=c<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Bw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Wg=function(t){const e=Hg(t);return lh.encodeByteArray(e,!0)},ca=function(t){return Wg(t).replace(/\./g,"")},ua=function(t){try{return lh.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function $w(t){return zg(void 0,t)}function zg(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Vw(n)||(t[n]=zg(t[n],e[n]));return t}function Vw(t){return t!=="__proto__"}/**
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
 */function jw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Hw=()=>jw().__FIREBASE_DEFAULTS__,Ww=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},zw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ua(t[1]);return e&&JSON.parse(e)},ol=()=>{try{return Hw()||Ww()||zw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},qg=t=>{var e,n;return(n=(e=ol())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ch=t=>{const e=qg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},qw=()=>{var t;return(t=ol())===null||t===void 0?void 0:t.config},Kg=t=>{var e;return(e=ol())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class al{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function uh(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[ca(JSON.stringify(n)),ca(JSON.stringify(o)),a].join(".")}/**
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
 */function yt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(yt())}function Kw(){var t;const e=(t=ol())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Gw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Gg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Yw(){const t=yt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Yg(){return jg.NODE_ADMIN===!0}function Xw(){try{return typeof indexedDB=="object"}catch{return!1}}function Qw(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const Jw="FirebaseError";class gn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Jw,Object.setPrototypeOf(this,gn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,io.prototype.create)}}class io{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Zw(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new gn(i,a,s)}}function Zw(t,e){return t.replace(eI,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const eI=/\{\$([^}]+)}/g;/**
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
 */function Pr(t){return JSON.parse(t)}function st(t){return JSON.stringify(t)}/**
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
 */const Xg=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Pr(ua(r[0])||""),n=Pr(ua(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},tI=function(t){const e=Xg(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},nI=function(t){const e=Xg(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Un(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ci(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Gc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ha(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function da(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Mf(r)&&Mf(o)){if(!da(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Mf(t){return t!==null&&typeof t=="object"}/**
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
 */function Ui(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function rr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function or(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class sI{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function iI(t,e){const n=new rI(t,e);return n.subscribe.bind(n)}class rI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");oI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=ec),i.error===void 0&&(i.error=ec),i.complete===void 0&&(i.complete=ec);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function oI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ec(){}function dh(t,e){return`${t} failed: ${e} argument `}/**
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
 */const aI=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,U(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ll=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function rt(t){return t&&t._delegate?t._delegate:t}class On{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ys="[DEFAULT]";/**
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
 */class lI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new al;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(uI(e))try{this.getOrInitializeService({instanceIdentifier:ys})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=ys){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ys){return this.instances.has(e)}getOptions(e=ys){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:cI(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ys){return this.component?this.component.multipleInstances?e:ys:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function cI(t){return t===ys?void 0:t}function uI(t){return t.instantiationMode==="EAGER"}/**
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
 */class hI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new lI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ie||(Ie={}));const dI={debug:Ie.DEBUG,verbose:Ie.VERBOSE,info:Ie.INFO,warn:Ie.WARN,error:Ie.ERROR,silent:Ie.SILENT},fI=Ie.INFO,pI={[Ie.DEBUG]:"log",[Ie.VERBOSE]:"log",[Ie.INFO]:"info",[Ie.WARN]:"warn",[Ie.ERROR]:"error"},_I=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=pI[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class cl{constructor(e){this.name=e,this._logLevel=fI,this._logHandler=_I,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?dI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ie.DEBUG,...e),this._logHandler(this,Ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ie.VERBOSE,...e),this._logHandler(this,Ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ie.INFO,...e),this._logHandler(this,Ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ie.WARN,...e),this._logHandler(this,Ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ie.ERROR,...e),this._logHandler(this,Ie.ERROR,...e)}}const gI=(t,e)=>e.some(n=>t instanceof n);let Lf,Ff;function mI(){return Lf||(Lf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vI(){return Ff||(Ff=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Qg=new WeakMap,Yc=new WeakMap,Jg=new WeakMap,tc=new WeakMap,fh=new WeakMap;function yI(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(is(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Qg.set(n,t)}).catch(()=>{}),fh.set(e,t),e}function EI(t){if(Yc.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Yc.set(t,e)}let Xc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Yc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Jg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return is(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function bI(t){Xc=t(Xc)}function wI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(nc(this),e,...n);return Jg.set(s,e.sort?e.sort():[e]),is(s)}:vI().includes(t)?function(...e){return t.apply(nc(this),e),is(Qg.get(this))}:function(...e){return is(t.apply(nc(this),e))}}function II(t){return typeof t=="function"?wI(t):(t instanceof IDBTransaction&&EI(t),gI(t,mI())?new Proxy(t,Xc):t)}function is(t){if(t instanceof IDBRequest)return yI(t);if(tc.has(t))return tc.get(t);const e=II(t);return e!==t&&(tc.set(t,e),fh.set(e,t)),e}const nc=t=>fh.get(t);function CI(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=is(o);return s&&o.addEventListener("upgradeneeded",l=>{s(is(o.result),l.oldVersion,l.newVersion,is(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const TI=["get","getKey","getAll","getAllKeys","count"],SI=["put","add","delete","clear"],sc=new Map;function Uf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(sc.get(e))return sc.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=SI.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||TI.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return sc.set(e,r),r}bI(t=>({...t,get:(e,n,s)=>Uf(e,n)||t.get(e,n,s),has:(e,n)=>!!Uf(e,n)||t.has(e,n)}));/**
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
 */class AI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(RI(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function RI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Qc="@firebase/app",Bf="0.9.7";/**
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
 */const Us=new cl("@firebase/app"),kI="@firebase/app-compat",OI="@firebase/analytics-compat",PI="@firebase/analytics",NI="@firebase/app-check-compat",xI="@firebase/app-check",DI="@firebase/auth",MI="@firebase/auth-compat",LI="@firebase/database",FI="@firebase/database-compat",UI="@firebase/functions",BI="@firebase/functions-compat",$I="@firebase/installations",VI="@firebase/installations-compat",jI="@firebase/messaging",HI="@firebase/messaging-compat",WI="@firebase/performance",zI="@firebase/performance-compat",qI="@firebase/remote-config",KI="@firebase/remote-config-compat",GI="@firebase/storage",YI="@firebase/storage-compat",XI="@firebase/firestore",QI="@firebase/firestore-compat",JI="firebase",ZI="9.19.1";/**
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
 */const Jc="[DEFAULT]",eC={[Qc]:"fire-core",[kI]:"fire-core-compat",[PI]:"fire-analytics",[OI]:"fire-analytics-compat",[xI]:"fire-app-check",[NI]:"fire-app-check-compat",[DI]:"fire-auth",[MI]:"fire-auth-compat",[LI]:"fire-rtdb",[FI]:"fire-rtdb-compat",[UI]:"fire-fn",[BI]:"fire-fn-compat",[$I]:"fire-iid",[VI]:"fire-iid-compat",[jI]:"fire-fcm",[HI]:"fire-fcm-compat",[WI]:"fire-perf",[zI]:"fire-perf-compat",[qI]:"fire-rc",[KI]:"fire-rc-compat",[GI]:"fire-gcs",[YI]:"fire-gcs-compat",[XI]:"fire-fst",[QI]:"fire-fst-compat","fire-js":"fire-js",[JI]:"fire-js-all"};/**
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
 */const fa=new Map,Zc=new Map;function tC(t,e){try{t.container.addComponent(e)}catch(n){Us.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function us(t){const e=t.name;if(Zc.has(e))return Us.debug(`There were multiple attempts to register component ${e}.`),!1;Zc.set(e,t);for(const n of fa.values())tC(n,t);return!0}function ro(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const nC={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},rs=new io("app","Firebase",nC);/**
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
 */class sC{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new On("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw rs.create("app-deleted",{appName:this._name})}}/**
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
 */const Gs=ZI;function Zg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Jc,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw rs.create("bad-app-name",{appName:String(i)});if(n||(n=qw()),!n)throw rs.create("no-options");const r=fa.get(i);if(r){if(da(n,r.options)&&da(s,r.config))return r;throw rs.create("duplicate-app",{appName:i})}const o=new hI(i);for(const l of Zc.values())o.addComponent(l);const a=new sC(n,s,o);return fa.set(i,a),a}function ul(t=Jc){const e=fa.get(t);if(!e&&t===Jc)return Zg();if(!e)throw rs.create("no-app",{appName:t});return e}function Wt(t,e,n){var s;let i=(s=eC[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Us.warn(a.join(" "));return}us(new On(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const iC="firebase-heartbeat-database",rC=1,Nr="firebase-heartbeat-store";let ic=null;function em(){return ic||(ic=CI(iC,rC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Nr)}}}).catch(t=>{throw rs.create("idb-open",{originalErrorMessage:t.message})})),ic}async function oC(t){try{return(await em()).transaction(Nr).objectStore(Nr).get(tm(t))}catch(e){if(e instanceof gn)Us.warn(e.message);else{const n=rs.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Us.warn(n.message)}}}async function $f(t,e){try{const s=(await em()).transaction(Nr,"readwrite");return await s.objectStore(Nr).put(e,tm(t)),s.done}catch(n){if(n instanceof gn)Us.warn(n.message);else{const s=rs.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Us.warn(s.message)}}}function tm(t){return`${t.name}!${t.options.appId}`}/**
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
 */const aC=1024,lC=30*24*60*60*1e3;class cC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new hC(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Vf();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=lC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Vf(),{heartbeatsToSend:n,unsentEntries:s}=uC(this._heartbeatsCache.heartbeats),i=ca(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Vf(){return new Date().toISOString().substring(0,10)}function uC(t,e=aC){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),jf(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),jf(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class hC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Xw()?Qw().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await oC(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return $f(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return $f(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function jf(t){return ca(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function dC(t){us(new On("platform-logger",e=>new AI(e),"PRIVATE")),us(new On("heartbeat",e=>new cC(e),"PRIVATE")),Wt(Qc,Bf,t),Wt(Qc,Bf,"esm2017"),Wt("fire-js","")}dC("");var fC="firebase",pC="9.19.1";/**
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
 */Wt(fC,pC,"app");function ph(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function nm(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _C=nm,sm=new io("auth","Firebase",nm());/**
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
 */const Hf=new cl("@firebase/auth");function Xo(t,...e){Hf.logLevel<=Ie.ERROR&&Hf.error(`Auth (${Gs}): ${t}`,...e)}/**
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
 */function nn(t,...e){throw _h(t,...e)}function dn(t,...e){return _h(t,...e)}function gC(t,e,n){const s=Object.assign(Object.assign({},_C()),{[e]:n});return new io("auth","Firebase",s).create(e,{appName:t.name})}function _h(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return sm.create(t,...e)}function se(t,e,...n){if(!t)throw _h(e,...n)}function wn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Xo(e),new Error(e)}function Pn(t,e){t||wn(e)}/**
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
 */const Wf=new Map;function In(t){Pn(t instanceof Function,"Expected a class definition");let e=Wf.get(t);return e?(Pn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Wf.set(t,e),e)}/**
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
 */function mC(t,e){const n=ro(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(da(r,e??{}))return i;nn(i,"already-initialized")}return n.initialize({options:e})}function vC(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(In);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function eu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function yC(){return zf()==="http:"||zf()==="https:"}function zf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function EC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(yC()||Gw()||"connection"in navigator)?navigator.onLine:!0}function bC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class oo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Pn(n>e,"Short delay should be less than long delay!"),this.isMobile=hh()||Gg()}get(){return EC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function gh(t,e){Pn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class im{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;wn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;wn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;wn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const wC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const IC=new oo(3e4,6e4);function ao(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function lo(t,e,n,s,i={}){return rm(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Ui(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),im.fetch()(om(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function rm(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},wC),e);try{const i=new CC(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Fo(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Fo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Fo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Fo(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw gC(t,u,c);nn(t,u)}}catch(i){if(i instanceof gn)throw i;nn(t,"network-request-failed",{message:String(i)})}}async function co(t,e,n,s,i={}){const r=await lo(t,e,n,s,i);return"mfaPendingCredential"in r&&nn(t,"multi-factor-auth-required",{_serverResponse:r}),r}function om(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?gh(t.config,i):`${t.config.apiScheme}://${i}`}class CC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(dn(this.auth,"network-request-failed")),IC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Fo(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=dn(t,e,s);return i.customData._tokenResponse=n,i}/**
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
 */async function TC(t,e){return lo(t,"POST","/v1/accounts:delete",e)}async function SC(t,e){return lo(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function fr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function AC(t,e=!1){const n=rt(t),s=await n.getIdToken(e),i=mh(s);se(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:fr(rc(i.auth_time)),issuedAtTime:fr(rc(i.iat)),expirationTime:fr(rc(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function rc(t){return Number(t)*1e3}function mh(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Xo("JWT malformed, contained fewer than 3 sections"),null;try{const i=ua(n);return i?JSON.parse(i):(Xo("Failed to decode base64 JWT payload"),null)}catch(i){return Xo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function RC(t){const e=mh(t);return se(e,"internal-error"),se(typeof e.exp<"u","internal-error"),se(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function xr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof gn&&kC(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function kC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class OC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class am{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=fr(this.lastLoginAt),this.creationTime=fr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function pa(t){var e;const n=t.auth,s=await t.getIdToken(),i=await xr(t,SC(n,{idToken:s}));se(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?xC(r.providerUserInfo):[],a=NC(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new am(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function PC(t){const e=rt(t);await pa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function NC(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function xC(t){return t.map(e=>{var{providerId:n}=e,s=ph(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function DC(t,e){const n=await rm(t,{},async()=>{const s=Ui({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=om(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",im.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Dr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){se(e.idToken,"internal-error"),se(typeof e.idToken<"u","internal-error"),se(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):RC(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return se(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await DC(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Dr;return s&&(se(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(se(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(se(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Dr,this.toJSON())}_performRefresh(){return wn("not implemented")}}/**
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
 */function Hn(t,e){se(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ns{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=ph(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new OC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new am(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await xr(this,this.stsTokenManager.getToken(this.auth,e));return se(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return AC(this,e)}reload(){return PC(this)}_assign(e){this!==e&&(se(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ns(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){se(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await pa(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await xr(this,TC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,p=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,C=(c=n.createdAt)!==null&&c!==void 0?c:void 0,D=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:P,emailVerified:H,isAnonymous:A,providerData:M,stsTokenManager:N}=n;se(P&&N,e,"internal-error");const I=Dr.fromJSON(this.name,N);se(typeof P=="string",e,"internal-error"),Hn(h,e.name),Hn(d,e.name),se(typeof H=="boolean",e,"internal-error"),se(typeof A=="boolean",e,"internal-error"),Hn(p,e.name),Hn(m,e.name),Hn(E,e.name),Hn(k,e.name),Hn(C,e.name),Hn(D,e.name);const L=new Ns({uid:P,auth:e,email:d,emailVerified:H,displayName:h,isAnonymous:A,photoURL:m,phoneNumber:p,tenantId:E,stsTokenManager:I,createdAt:C,lastLoginAt:D});return M&&Array.isArray(M)&&(L.providerData=M.map(B=>Object.assign({},B))),k&&(L._redirectEventId=k),L}static async _fromIdTokenResponse(e,n,s=!1){const i=new Dr;i.updateFromServerResponse(n);const r=new Ns({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await pa(r),r}}/**
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
 */class lm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}lm.type="NONE";const qf=lm;/**
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
 */function Qo(t,e,n){return`firebase:${t}:${e}:${n}`}class fi{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Qo(this.userKey,i.apiKey,r),this.fullPersistenceKey=Qo("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ns._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new fi(In(qf),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||In(qf);const o=Qo(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=Ns._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new fi(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new fi(r,e,s))}}/**
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
 */function Kf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(hm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(cm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(fm(e))return"Blackberry";if(pm(e))return"Webos";if(vh(e))return"Safari";if((e.includes("chrome/")||um(e))&&!e.includes("edge/"))return"Chrome";if(dm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function cm(t=yt()){return/firefox\//i.test(t)}function vh(t=yt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function um(t=yt()){return/crios\//i.test(t)}function hm(t=yt()){return/iemobile/i.test(t)}function dm(t=yt()){return/android/i.test(t)}function fm(t=yt()){return/blackberry/i.test(t)}function pm(t=yt()){return/webos/i.test(t)}function hl(t=yt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function MC(t=yt()){var e;return hl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function LC(){return Yw()&&document.documentMode===10}function _m(t=yt()){return hl(t)||dm(t)||pm(t)||fm(t)||/windows phone/i.test(t)||hm(t)}function FC(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function gm(t,e=[]){let n;switch(t){case"Browser":n=Kf(yt());break;case"Worker":n=`${Kf(yt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Gs}/${s}`}/**
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
 */class UC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */class BC{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Gf(this),this.idTokenSubscription=new Gf(this),this.beforeStateQueue=new UC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=sm,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=In(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await fi.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return se(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await pa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=bC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?rt(e):null;return n&&se(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&se(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(In(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new io("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&In(e)||this._popupRedirectResolver;se(n,this,"argument-error"),this.redirectPersistenceManager=await fi.create(this,[In(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return se(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return se(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=gm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function uo(t){return rt(t)}class Gf{constructor(e){this.auth=e,this.observer=null,this.addObserver=iI(n=>this.observer=n)}get next(){return se(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function $C(t,e,n){const s=uo(t);se(s._canInitEmulator,s,"emulator-config-failed"),se(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=mm(e),{host:o,port:a}=VC(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||jC()}function mm(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function VC(t){const e=mm(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Yf(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Yf(o)}}}function Yf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function jC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class yh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return wn("not implemented")}_getIdTokenResponse(e){return wn("not implemented")}_linkToIdToken(e,n){return wn("not implemented")}_getReauthenticationResolver(e){return wn("not implemented")}}async function HC(t,e){return lo(t,"POST","/v1/accounts:update",e)}/**
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
 */async function WC(t,e){return co(t,"POST","/v1/accounts:signInWithPassword",ao(t,e))}/**
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
 */async function zC(t,e){return co(t,"POST","/v1/accounts:signInWithEmailLink",ao(t,e))}async function qC(t,e){return co(t,"POST","/v1/accounts:signInWithEmailLink",ao(t,e))}/**
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
 */class Mr extends yh{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Mr(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Mr(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return WC(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return zC(e,{email:this._email,oobCode:this._password});default:nn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return HC(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return qC(e,{idToken:n,email:this._email,oobCode:this._password});default:nn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function pi(t,e){return co(t,"POST","/v1/accounts:signInWithIdp",ao(t,e))}/**
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
 */const KC="http://localhost";class Bs extends yh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Bs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):nn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=ph(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Bs(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return pi(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,pi(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,pi(e,n)}buildRequest(){const e={requestUri:KC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ui(n)}return e}}/**
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
 */function GC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function YC(t){const e=rr(or(t)).link,n=e?rr(or(e)).deep_link_id:null,s=rr(or(t)).deep_link_id;return(s?rr(or(s)).link:null)||s||n||e||t}class Eh{constructor(e){var n,s,i,r,o,a;const l=rr(or(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,h=GC((i=l.mode)!==null&&i!==void 0?i:null);se(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=YC(e);try{return new Eh(n)}catch{return null}}}/**
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
 */class Bi{constructor(){this.providerId=Bi.PROVIDER_ID}static credential(e,n){return Mr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Eh.parseLink(n);return se(s,"argument-error"),Mr._fromEmailAndCode(e,s.code,s.tenantId)}}Bi.PROVIDER_ID="password";Bi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Bi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class vm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ho extends vm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Yn extends ho{constructor(){super("facebook.com")}static credential(e){return Bs._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yn.credential(e.oauthAccessToken)}catch{return null}}}Yn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Yn.PROVIDER_ID="facebook.com";/**
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
 */class Xn extends ho{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Bs._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Xn.credential(n,s)}catch{return null}}}Xn.GOOGLE_SIGN_IN_METHOD="google.com";Xn.PROVIDER_ID="google.com";/**
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
 */class Qn extends ho{constructor(){super("github.com")}static credential(e){return Bs._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qn.credential(e.oauthAccessToken)}catch{return null}}}Qn.GITHUB_SIGN_IN_METHOD="github.com";Qn.PROVIDER_ID="github.com";/**
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
 */class Jn extends ho{constructor(){super("twitter.com")}static credential(e,n){return Bs._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Jn.credential(n,s)}catch{return null}}}Jn.TWITTER_SIGN_IN_METHOD="twitter.com";Jn.PROVIDER_ID="twitter.com";/**
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
 */async function XC(t,e){return co(t,"POST","/v1/accounts:signUp",ao(t,e))}/**
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
 */class $s{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await Ns._fromIdTokenResponse(e,s,i),o=Xf(s);return new $s({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=Xf(s);return new $s({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function Xf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class _a extends gn{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,_a.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new _a(e,n,s,i)}}function ym(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?_a._fromErrorAndOperation(t,r,e,s):r})}async function QC(t,e,n=!1){const s=await xr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return $s._forOperation(t,"link",s)}/**
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
 */async function JC(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await xr(t,ym(s,i,e,t),n);se(r.idToken,s,"internal-error");const o=mh(r.idToken);se(o,s,"internal-error");const{sub:a}=o;return se(t.uid===a,s,"user-mismatch"),$s._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&nn(s,"user-mismatch"),r}}/**
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
 */async function Em(t,e,n=!1){const s="signIn",i=await ym(t,s,e),r=await $s._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function ZC(t,e){return Em(uo(t),e)}async function eT(t,e,n){const s=uo(t),i=await XC(s,{returnSecureToken:!0,email:e,password:n}),r=await $s._fromIdTokenResponse(s,"signIn",i);return await s._updateCurrentUser(r.user),r}function tT(t,e,n){return ZC(rt(t),Bi.credential(e,n))}function nT(t,e,n,s){return rt(t).onIdTokenChanged(e,n,s)}function sT(t,e,n){return rt(t).beforeAuthStateChanged(e,n)}function iT(t){return rt(t).signOut()}const ga="__sak";/**
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
 */class bm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ga,"1"),this.storage.removeItem(ga),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function rT(){const t=yt();return vh(t)||hl(t)}const oT=1e3,aT=10;class wm extends bm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=rT()&&FC(),this.fallbackToPolling=_m(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);LC()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,aT):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},oT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}wm.type="LOCAL";const lT=wm;/**
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
 */class Im extends bm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Im.type="SESSION";const Cm=Im;/**
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
 */function cT(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class dl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new dl(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await cT(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}dl.receivers=[];/**
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
 */function bh(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class uT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=bh("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function fn(){return window}function hT(t){fn().location.href=t}/**
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
 */function Tm(){return typeof fn().WorkerGlobalScope<"u"&&typeof fn().importScripts=="function"}async function dT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function fT(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function pT(){return Tm()?self:null}/**
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
 */const Sm="firebaseLocalStorageDb",_T=1,ma="firebaseLocalStorage",Am="fbase_key";class fo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function fl(t,e){return t.transaction([ma],e?"readwrite":"readonly").objectStore(ma)}function gT(){const t=indexedDB.deleteDatabase(Sm);return new fo(t).toPromise()}function tu(){const t=indexedDB.open(Sm,_T);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(ma,{keyPath:Am})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(ma)?e(s):(s.close(),await gT(),e(await tu()))})})}async function Qf(t,e,n){const s=fl(t,!0).put({[Am]:e,value:n});return new fo(s).toPromise()}async function mT(t,e){const n=fl(t,!1).get(e),s=await new fo(n).toPromise();return s===void 0?null:s.value}function Jf(t,e){const n=fl(t,!0).delete(e);return new fo(n).toPromise()}const vT=800,yT=3;class Rm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await tu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>yT)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Tm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=dl._getInstance(pT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await dT(),!this.activeServiceWorker)return;this.sender=new uT(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||fT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await tu();return await Qf(e,ga,"1"),await Jf(e,ga),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Qf(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>mT(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Jf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=fl(i,!1).getAll();return new fo(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),vT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Rm.type="LOCAL";const ET=Rm;/**
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
 */function bT(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function wT(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=dn("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",bT().appendChild(s)})}function IT(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new oo(3e4,6e4);/**
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
 */function CT(t,e){return e?In(e):(se(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class wh extends yh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return pi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return pi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return pi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function TT(t){return Em(t.auth,new wh(t),t.bypassAuthState)}function ST(t){const{auth:e,user:n}=t;return se(n,e,"internal-error"),JC(n,new wh(t),t.bypassAuthState)}async function AT(t){const{auth:e,user:n}=t;return se(n,e,"internal-error"),QC(n,new wh(t),t.bypassAuthState)}/**
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
 */class km{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return TT;case"linkViaPopup":case"linkViaRedirect":return AT;case"reauthViaPopup":case"reauthViaRedirect":return ST;default:nn(this.auth,"internal-error")}}resolve(e){Pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const RT=new oo(2e3,1e4);class ri extends km{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,ri.currentPopupAction&&ri.currentPopupAction.cancel(),ri.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return se(e,this.auth,"internal-error"),e}async onExecution(){Pn(this.filter.length===1,"Popup operations only handle one event");const e=bh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(dn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(dn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ri.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(dn(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,RT.get())};e()}}ri.currentPopupAction=null;/**
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
 */const kT="pendingRedirect",Jo=new Map;class OT extends km{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Jo.get(this.auth._key());if(!e){try{const s=await PT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Jo.set(this.auth._key(),e)}return this.bypassAuthState||Jo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function PT(t,e){const n=DT(e),s=xT(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function NT(t,e){Jo.set(t._key(),e)}function xT(t){return In(t._redirectPersistence)}function DT(t){return Qo(kT,t.config.apiKey,t.name)}async function MT(t,e,n=!1){const s=uo(t),i=CT(s,e),o=await new OT(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const LT=10*60*1e3;class FT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!UT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Om(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(dn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=LT&&this.cachedEventUids.clear(),this.cachedEventUids.has(Zf(e))}saveEventToCache(e){this.cachedEventUids.add(Zf(e)),this.lastProcessedEventTime=Date.now()}}function Zf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Om({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function UT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Om(t);default:return!1}}/**
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
 */async function BT(t,e={}){return lo(t,"GET","/v1/projects",e)}/**
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
 */const $T=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,VT=/^https?/;async function jT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await BT(t);for(const n of e)try{if(HT(n))return}catch{}nn(t,"unauthorized-domain")}function HT(t){const e=eu(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!VT.test(n))return!1;if($T.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const WT=new oo(3e4,6e4);function ep(){const t=fn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function zT(t){return new Promise((e,n)=>{var s,i,r;function o(){ep(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ep(),n(dn(t,"network-request-failed"))},timeout:WT.get()})}if(!((i=(s=fn().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=fn().gapi)===null||r===void 0)&&r.load)o();else{const a=IT("iframefcb");return fn()[a]=()=>{gapi.load?o():n(dn(t,"network-request-failed"))},wT(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Zo=null,e})}let Zo=null;function qT(t){return Zo=Zo||zT(t),Zo}/**
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
 */const KT=new oo(5e3,15e3),GT="__/auth/iframe",YT="emulator/auth/iframe",XT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},QT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function JT(t){const e=t.config;se(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?gh(e,YT):`https://${t.config.authDomain}/${GT}`,s={apiKey:e.apiKey,appName:t.name,v:Gs},i=QT.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Ui(s).slice(1)}`}async function ZT(t){const e=await qT(t),n=fn().gapi;return se(n,t,"internal-error"),e.open({where:document.body,url:JT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:XT,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=dn(t,"network-request-failed"),a=fn().setTimeout(()=>{r(o)},KT.get());function l(){fn().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const eS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},tS=500,nS=600,sS="_blank",iS="http://localhost";class tp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function rS(t,e,n,s=tS,i=nS){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},eS),{width:s.toString(),height:i.toString(),top:r,left:o}),c=yt().toLowerCase();n&&(a=um(c)?sS:n),cm(c)&&(e=e||iS,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[p,m])=>`${d}${p}=${m},`,"");if(MC(c)&&a!=="_self")return oS(e||"",a),new tp(null);const h=window.open(e||"",a,u);se(h,t,"popup-blocked");try{h.focus()}catch{}return new tp(h)}function oS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const aS="__/auth/handler",lS="emulator/auth/handler";function np(t,e,n,s,i,r){se(t.config.authDomain,t,"auth-domain-config-required"),se(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Gs,eventId:i};if(e instanceof vm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Gc(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(r||{}))o[l]=c}if(e instanceof ho){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${cS(t)}?${Ui(a).slice(1)}`}function cS({config:t}){return t.emulator?gh(t,lS):`https://${t.authDomain}/${aS}`}/**
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
 */const oc="webStorageSupport";class uS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Cm,this._completeRedirectFn=MT,this._overrideRedirectResult=NT}async _openPopup(e,n,s,i){var r;Pn((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=np(e,n,s,eu(),i);return rS(e,o,bh())}async _openRedirect(e,n,s,i){return await this._originValidation(e),hT(np(e,n,s,eu(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Pn(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await ZT(e),s=new FT(e);return n.register("authEvent",i=>(se(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(oc,{type:oc},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[oc];o!==void 0&&n(!!o),nn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=jT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return _m()||vh()||hl()}}const hS=uS;var sp="@firebase/auth",ip="0.22.0";/**
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
 */class dS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){se(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function fS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function pS(t){us(new On("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=s.options;return((a,l)=>{se(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),se(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:r,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:gm(t)},u=new BC(a,l,c);return vC(u,n),u})(s,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),us(new On("auth-internal",e=>{const n=uo(e.getProvider("auth").getImmediate());return(s=>new dS(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Wt(sp,ip,fS(t)),Wt(sp,ip,"esm2017")}/**
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
 */const _S=5*60,gS=Kg("authIdTokenMaxAge")||_S;let rp=null;const mS=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>gS)return;const i=n==null?void 0:n.token;rp!==i&&(rp=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function vS(t=ul()){const e=ro(t,"auth");if(e.isInitialized())return e.getImmediate();const n=mC(t,{popupRedirectResolver:hS,persistence:[ET,lT,Cm]}),s=Kg("authTokenSyncURL");if(s){const r=mS(s);sT(n,r,()=>r(n.currentUser)),nT(n,o=>r(o))}const i=qg("auth");return i&&$C(n,`http://${i}`),n}pS("Browser");var yS=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},X,Ih=Ih||{},ae=yS||self;function va(){}function pl(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function po(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function ES(t){return Object.prototype.hasOwnProperty.call(t,ac)&&t[ac]||(t[ac]=++bS)}var ac="closure_uid_"+(1e9*Math.random()>>>0),bS=0;function wS(t,e,n){return t.call.apply(t.bind,arguments)}function IS(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function gt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?gt=wS:gt=IS,gt.apply(null,arguments)}function Uo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function ut(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function fs(){this.s=this.s,this.o=this.o}var CS=0;fs.prototype.s=!1;fs.prototype.na=function(){!this.s&&(this.s=!0,this.M(),CS!=0)&&ES(this)};fs.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Pm=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Ch(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function op(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(pl(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function mt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}mt.prototype.h=function(){this.defaultPrevented=!0};var TS=function(){if(!ae.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{ae.addEventListener("test",va,e),ae.removeEventListener("test",va,e)}catch{}return t}();function ya(t){return/^[\s\xa0]*$/.test(t)}var ap=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function lc(t,e){return t<e?-1:t>e?1:0}function _l(){var t=ae.navigator;return t&&(t=t.userAgent)?t:""}function un(t){return _l().indexOf(t)!=-1}function Th(t){return Th[" "](t),t}Th[" "]=va;function SS(t){var e=kS;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var AS=un("Opera"),Lr=un("Trident")||un("MSIE"),Nm=un("Edge"),nu=Nm||Lr,xm=un("Gecko")&&!(_l().toLowerCase().indexOf("webkit")!=-1&&!un("Edge"))&&!(un("Trident")||un("MSIE"))&&!un("Edge"),RS=_l().toLowerCase().indexOf("webkit")!=-1&&!un("Edge");function Dm(){var t=ae.document;return t?t.documentMode:void 0}var su;e:{var cc="",uc=function(){var t=_l();if(xm)return/rv:([^\);]+)(\)|;)/.exec(t);if(Nm)return/Edge\/([\d\.]+)/.exec(t);if(Lr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(RS)return/WebKit\/(\S+)/.exec(t);if(AS)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(uc&&(cc=uc?uc[1]:""),Lr){var hc=Dm();if(hc!=null&&hc>parseFloat(cc)){su=String(hc);break e}}su=cc}var kS={};function OS(){return SS(function(){let t=0;const e=ap(String(su)).split("."),n=ap("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=lc(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||lc(i[2].length==0,r[2].length==0)||lc(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}ae.document&&Lr&&Dm();function Fr(t,e){if(mt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(xm){e:{try{Th(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:PS[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Fr.X.h.call(this)}}ut(Fr,mt);var PS={2:"touch",3:"pen",4:"mouse"};Fr.prototype.h=function(){Fr.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var _o="closure_listenable_"+(1e6*Math.random()|0),NS=0;function xS(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++NS,this.ba=this.ea=!1}function gl(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Sh(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Mm(t){const e={};for(const n in t)e[n]=t[n];return e}const lp="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Lm(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<lp.length;r++)n=lp[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function ml(t){this.src=t,this.g={},this.h=0}ml.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=ru(t,e,s,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new xS(e,this.src,r,!!s,i),e.ea=n,t.push(e)),e};function iu(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=Pm(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(gl(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function ru(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}var Ah="closure_lm_"+(1e6*Math.random()|0),dc={};function Fm(t,e,n,s,i){if(s&&s.once)return Bm(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Fm(t,e[r],n,s,i);return null}return n=Oh(n),t&&t[_o]?t.N(e,n,po(s)?!!s.capture:!!s,i):Um(t,e,n,!1,s,i)}function Um(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=po(i)?!!i.capture:!!i,a=kh(t);if(a||(t[Ah]=a=new ml(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=DS(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)TS||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(Vm(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function DS(){function t(n){return e.call(t.src,t.listener,n)}const e=MS;return t}function Bm(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Bm(t,e[r],n,s,i);return null}return n=Oh(n),t&&t[_o]?t.O(e,n,po(s)?!!s.capture:!!s,i):Um(t,e,n,!0,s,i)}function $m(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)$m(t,e[r],n,s,i);else s=po(s)?!!s.capture:!!s,n=Oh(n),t&&t[_o]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=ru(r,n,s,i),-1<n&&(gl(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=kh(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ru(e,n,s,i)),(n=-1<t?e[t]:null)&&Rh(n))}function Rh(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[_o])iu(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Vm(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=kh(e))?(iu(n,t),n.h==0&&(n.src=null,e[Ah]=null)):gl(t)}}}function Vm(t){return t in dc?dc[t]:dc[t]="on"+t}function MS(t,e){if(t.ba)t=!0;else{e=new Fr(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&Rh(t),t=n.call(s,e)}return t}function kh(t){return t=t[Ah],t instanceof ml?t:null}var fc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Oh(t){return typeof t=="function"?t:(t[fc]||(t[fc]=function(e){return t.handleEvent(e)}),t[fc])}function it(){fs.call(this),this.i=new ml(this),this.P=this,this.I=null}ut(it,fs);it.prototype[_o]=!0;it.prototype.removeEventListener=function(t,e,n,s){$m(this,t,e,n,s)};function ct(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new mt(e,t);else if(e instanceof mt)e.target=e.target||t;else{var i=e;e=new mt(s,t),Lm(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=Bo(o,s,!0,e)&&i}if(o=e.g=t,i=Bo(o,s,!0,e)&&i,i=Bo(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=Bo(o,s,!1,e)&&i}it.prototype.M=function(){if(it.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)gl(n[s]);delete t.g[e],t.h--}}this.I=null};it.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};it.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Bo(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&iu(t.i,o),i=a.call(l,s)!==!1&&i}}return i&&!s.defaultPrevented}var Ph=ae.JSON.stringify;function LS(){var t=Wm;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class FS{constructor(){this.h=this.g=null}add(e,n){const s=jm.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var jm=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new US,t=>t.reset());class US{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function BS(t){ae.setTimeout(()=>{throw t},0)}function Hm(t,e){ou||$S(),au||(ou(),au=!0),Wm.add(t,e)}var ou;function $S(){var t=ae.Promise.resolve(void 0);ou=function(){t.then(VS)}}var au=!1,Wm=new FS;function VS(){for(var t;t=LS();){try{t.h.call(t.g)}catch(n){BS(n)}var e=jm;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}au=!1}function vl(t,e){it.call(this),this.h=t||1,this.g=e||ae,this.j=gt(this.lb,this),this.l=Date.now()}ut(vl,it);X=vl.prototype;X.ca=!1;X.R=null;X.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),ct(this,"tick"),this.ca&&(Nh(this),this.start()))}};X.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Nh(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}X.M=function(){vl.X.M.call(this),Nh(this),delete this.g};function xh(t,e,n){if(typeof t=="function")n&&(t=gt(t,n));else if(t&&typeof t.handleEvent=="function")t=gt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ae.setTimeout(t,e||0)}function zm(t){t.g=xh(()=>{t.g=null,t.i&&(t.i=!1,zm(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class jS extends fs{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:zm(this)}M(){super.M(),this.g&&(ae.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ur(t){fs.call(this),this.h=t,this.g={}}ut(Ur,fs);var cp=[];function qm(t,e,n,s){Array.isArray(n)||(n&&(cp[0]=n.toString()),n=cp);for(var i=0;i<n.length;i++){var r=Fm(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Km(t){Sh(t.g,function(e,n){this.g.hasOwnProperty(n)&&Rh(e)},t),t.g={}}Ur.prototype.M=function(){Ur.X.M.call(this),Km(this)};Ur.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function yl(){this.g=!0}yl.prototype.Aa=function(){this.g=!1};function HS(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function WS(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function oi(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+qS(t,n)+(s?" "+s:"")})}function zS(t,e){t.info(function(){return"TIMEOUT: "+e})}yl.prototype.info=function(){};function qS(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Ph(n)}catch{return e}}var $i={},up=null;function Dh(){return up=up||new it}$i.Pa="serverreachability";function Gm(t){mt.call(this,$i.Pa,t)}ut(Gm,mt);function Br(t){const e=Dh();ct(e,new Gm(e))}$i.STAT_EVENT="statevent";function Ym(t,e){mt.call(this,$i.STAT_EVENT,t),this.stat=e}ut(Ym,mt);function wt(t){const e=Dh();ct(e,new Ym(e,t))}$i.Qa="timingevent";function Xm(t,e){mt.call(this,$i.Qa,t),this.size=e}ut(Xm,mt);function go(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ae.setTimeout(function(){t()},e)}var Mh={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},KS={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Lh(){}Lh.prototype.h=null;function hp(t){return t.h||(t.h=t.i())}function GS(){}var mo={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Fh(){mt.call(this,"d")}ut(Fh,mt);function Uh(){mt.call(this,"c")}ut(Uh,mt);var lu;function El(){}ut(El,Lh);El.prototype.g=function(){return new XMLHttpRequest};El.prototype.i=function(){return{}};lu=new El;function vo(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new Ur(this),this.O=YS,t=nu?125:void 0,this.T=new vl(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Qm}function Qm(){this.i=null,this.g="",this.h=!1}var YS=45e3,cu={},Ea={};X=vo.prototype;X.setTimeout=function(t){this.O=t};function uu(t,e,n){t.K=1,t.v=wl(Nn(e)),t.s=n,t.P=!0,Jm(t,null)}function Jm(t,e){t.F=Date.now(),yo(t),t.A=Nn(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),ov(n.i,"t",s),t.C=0,n=t.l.H,t.h=new Qm,t.g=Av(t.l,n?e:null,!t.s),0<t.N&&(t.L=new jS(gt(t.La,t,t.g),t.N)),qm(t.S,t.g,"readystatechange",t.ib),e=t.H?Mm(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Br(),HS(t.j,t.u,t.A,t.m,t.U,t.s)}X.ib=function(t){t=t.target;const e=this.L;e&&Cn(t)==3?e.l():this.La(t)};X.La=function(t){try{if(t==this.g)e:{const u=Cn(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||nu||this.g&&(this.h.h||this.g.fa()||_p(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?Br(3):Br(2)),bl(this);var n=this.g.aa();this.Y=n;t:if(Zm(this)){var s=_p(this.g);t="";var i=s.length,r=Cn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ss(this),pr(this);var o="";break t}this.h.i=new ae.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,WS(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ya(a)){var c=a;break t}}c=null}if(n=c)oi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,hu(this,n);else{this.i=!1,this.o=3,wt(12),Ss(this),pr(this);break e}}this.P?(ev(this,u,o),nu&&this.i&&u==3&&(qm(this.S,this.T,"tick",this.hb),this.T.start())):(oi(this.j,this.m,o,null),hu(this,o)),u==4&&Ss(this),this.i&&!this.I&&(u==4?Iv(this.l,this):(this.i=!1,yo(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,wt(12)):(this.o=0,wt(13)),Ss(this),pr(this)}}}catch{}finally{}};function Zm(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function ev(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=XS(t,n),i==Ea){e==4&&(t.o=4,wt(14),s=!1),oi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==cu){t.o=4,wt(15),oi(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else oi(t.j,t.m,i,null),hu(t,i);Zm(t)&&i!=Ea&&i!=cu&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,wt(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),zh(e),e.K=!0,wt(11))):(oi(t.j,t.m,n,"[Invalid Chunked Response]"),Ss(t),pr(t))}X.hb=function(){if(this.g){var t=Cn(this.g),e=this.g.fa();this.C<e.length&&(bl(this),ev(this,t,e),this.i&&t!=4&&yo(this))}};function XS(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Ea:(n=Number(e.substring(n,s)),isNaN(n)?cu:(s+=1,s+n>e.length?Ea:(e=e.substr(s,n),t.C=s+n,e)))}X.cancel=function(){this.I=!0,Ss(this)};function yo(t){t.V=Date.now()+t.O,tv(t,t.O)}function tv(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=go(gt(t.gb,t),e)}function bl(t){t.B&&(ae.clearTimeout(t.B),t.B=null)}X.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(zS(this.j,this.A),this.K!=2&&(Br(),wt(17)),Ss(this),this.o=2,pr(this)):tv(this,this.V-t)};function pr(t){t.l.G==0||t.I||Iv(t.l,t)}function Ss(t){bl(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Nh(t.T),Km(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function hu(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||du(n.h,t))){if(!t.J&&du(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Ia(n),Sl(n);else break e;Wh(n),wt(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=go(gt(n.cb,n),6e3));if(1>=cv(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else As(n,11)}else if((t.J||n.g==t)&&Ia(n),!ya(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.T=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.I=c[1],n.ka=c[2];const u=c[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=c[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=t.g;if(p){const m=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var r=s.h;r.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Bh(r,r.h),r.h=null))}if(s.D){const E=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;E&&(s.za=E,Be(s.F,s.D,E))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=Sv(s,s.H?s.ka:null,s.V),o.J){uv(s.h,o);var a=o,l=s.J;l&&a.setTimeout(l),a.B&&(bl(a),yo(a)),s.g=o}else bv(s);0<n.i.length&&Al(n)}else c[0]!="stop"&&c[0]!="close"||As(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?As(n,7):Hh(n):c[0]!="noop"&&n.l&&n.l.wa(c),n.A=0)}}Br(4)}catch{}}function QS(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(pl(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function JS(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(pl(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function nv(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(pl(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=JS(t),s=QS(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var sv=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ZS(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function xs(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof xs){this.h=e!==void 0?e:t.h,ba(this,t.j),this.s=t.s,this.g=t.g,wa(this,t.m),this.l=t.l,e=t.i;var n=new $r;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),dp(this,n),this.o=t.o}else t&&(n=String(t).match(sv))?(this.h=!!e,ba(this,n[1]||"",!0),this.s=ar(n[2]||""),this.g=ar(n[3]||"",!0),wa(this,n[4]),this.l=ar(n[5]||"",!0),dp(this,n[6]||"",!0),this.o=ar(n[7]||"")):(this.h=!!e,this.i=new $r(null,this.h))}xs.prototype.toString=function(){var t=[],e=this.j;e&&t.push(lr(e,fp,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(lr(e,fp,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(lr(n,n.charAt(0)=="/"?nA:tA,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",lr(n,iA)),t.join("")};function Nn(t){return new xs(t)}function ba(t,e,n){t.j=n?ar(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function wa(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function dp(t,e,n){e instanceof $r?(t.i=e,rA(t.i,t.h)):(n||(e=lr(e,sA)),t.i=new $r(e,t.h))}function Be(t,e,n){t.i.set(e,n)}function wl(t){return Be(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ar(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function lr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,eA),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function eA(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var fp=/[#\/\?@]/g,tA=/[#\?:]/g,nA=/[#\?]/g,sA=/[#\?@]/g,iA=/#/g;function $r(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ps(t){t.g||(t.g=new Map,t.h=0,t.i&&ZS(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}X=$r.prototype;X.add=function(t,e){ps(this),this.i=null,t=Vi(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function iv(t,e){ps(t),e=Vi(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function rv(t,e){return ps(t),e=Vi(t,e),t.g.has(e)}X.forEach=function(t,e){ps(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};X.oa=function(){ps(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};X.W=function(t){ps(this);let e=[];if(typeof t=="string")rv(this,t)&&(e=e.concat(this.g.get(Vi(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};X.set=function(t,e){return ps(this),this.i=null,t=Vi(this,t),rv(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};X.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function ov(t,e,n){iv(t,e),0<n.length&&(t.i=null,t.g.set(Vi(t,e),Ch(n)),t.h+=n.length)}X.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function Vi(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function rA(t,e){e&&!t.j&&(ps(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(iv(this,s),ov(this,i,n))},t)),t.j=e}var oA=class{constructor(t,e){this.h=t,this.g=e}};function av(t){this.l=t||aA,ae.PerformanceNavigationTiming?(t=ae.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ae.g&&ae.g.Ga&&ae.g.Ga()&&ae.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var aA=10;function lv(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function cv(t){return t.h?1:t.g?t.g.size:0}function du(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Bh(t,e){t.g?t.g.add(e):t.h=e}function uv(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}av.prototype.cancel=function(){if(this.i=hv(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function hv(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Ch(t.i)}function $h(){}$h.prototype.stringify=function(t){return ae.JSON.stringify(t,void 0)};$h.prototype.parse=function(t){return ae.JSON.parse(t,void 0)};function lA(){this.g=new $h}function cA(t,e,n){const s=n||"";try{nv(t,function(i,r){let o=i;po(i)&&(o=Ph(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function uA(t,e){const n=new yl;if(ae.Image){const s=new Image;s.onload=Uo($o,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Uo($o,n,s,"TestLoadImage: error",!1,e),s.onabort=Uo($o,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Uo($o,n,s,"TestLoadImage: timeout",!1,e),ae.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function $o(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function Il(t){this.l=t.ac||null,this.j=t.jb||!1}ut(Il,Lh);Il.prototype.g=function(){return new Cl(this.l,this.j)};Il.prototype.i=function(t){return function(){return t}}({});function Cl(t,e){it.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Vh,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ut(Cl,it);var Vh=0;X=Cl.prototype;X.open=function(t,e){if(this.readyState!=Vh)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Vr(this)};X.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||ae).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};X.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Eo(this)),this.readyState=Vh};X.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Vr(this)),this.g&&(this.readyState=3,Vr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof ae.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;dv(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function dv(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}X.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Eo(this):Vr(this),this.readyState==3&&dv(this)}};X.Va=function(t){this.g&&(this.response=this.responseText=t,Eo(this))};X.Ua=function(t){this.g&&(this.response=t,Eo(this))};X.ga=function(){this.g&&Eo(this)};function Eo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Vr(t)}X.setRequestHeader=function(t,e){this.v.append(t,e)};X.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};X.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Vr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Cl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var hA=ae.JSON.parse;function Ge(t){it.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=fv,this.K=this.L=!1}ut(Ge,it);var fv="",dA=/^https?$/i,fA=["POST","PUT"];X=Ge.prototype;X.Ka=function(t){this.L=t};X.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():lu.g(),this.C=this.u?hp(this.u):hp(lu),this.g.onreadystatechange=gt(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){pp(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=ae.FormData&&t instanceof ae.FormData,!(0<=Pm(fA,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{gv(this),0<this.B&&((this.K=pA(this.g))?(this.g.timeout=this.B,this.g.ontimeout=gt(this.qa,this)):this.A=xh(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){pp(this,r)}};function pA(t){return Lr&&OS()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}X.qa=function(){typeof Ih<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ct(this,"timeout"),this.abort(8))};function pp(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,pv(t),Tl(t)}function pv(t){t.D||(t.D=!0,ct(t,"complete"),ct(t,"error"))}X.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ct(this,"complete"),ct(this,"abort"),Tl(this))};X.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Tl(this,!0)),Ge.X.M.call(this)};X.Ha=function(){this.s||(this.F||this.v||this.l?_v(this):this.fb())};X.fb=function(){_v(this)};function _v(t){if(t.h&&typeof Ih<"u"&&(!t.C[1]||Cn(t)!=4||t.aa()!=2)){if(t.v&&Cn(t)==4)xh(t.Ha,0,t);else if(ct(t,"readystatechange"),Cn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.H).match(sv)[1]||null;if(!i&&ae.self&&ae.self.location){var r=ae.self.location.protocol;i=r.substr(0,r.length-1)}s=!dA.test(i?i.toLowerCase():"")}n=s}if(n)ct(t,"complete"),ct(t,"success");else{t.m=6;try{var o=2<Cn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",pv(t)}}finally{Tl(t)}}}}function Tl(t,e){if(t.g){gv(t);const n=t.g,s=t.C[0]?va:null;t.g=null,t.C=null,e||ct(t,"ready");try{n.onreadystatechange=s}catch{}}}function gv(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(ae.clearTimeout(t.A),t.A=null)}function Cn(t){return t.g?t.g.readyState:0}X.aa=function(){try{return 2<Cn(this)?this.g.status:-1}catch{return-1}};X.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};X.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),hA(e)}};function _p(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case fv:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}X.Ea=function(){return this.m};X.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function mv(t){let e="";return Sh(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function jh(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=mv(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Be(t,e,n))}function Xi(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function vv(t){this.Ca=0,this.i=[],this.j=new yl,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Xi("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Xi("baseRetryDelayMs",5e3,t),this.bb=Xi("retryDelaySeedMs",1e4,t),this.$a=Xi("forwardChannelMaxRetries",2,t),this.ta=Xi("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new av(t&&t.concurrentRequestLimit),this.Fa=new lA,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}X=vv.prototype;X.ma=8;X.G=1;function Hh(t){if(yv(t),t.G==3){var e=t.U++,n=Nn(t.F);Be(n,"SID",t.I),Be(n,"RID",e),Be(n,"TYPE","terminate"),bo(t,n),e=new vo(t,t.j,e,void 0),e.K=2,e.v=wl(Nn(n)),n=!1,ae.navigator&&ae.navigator.sendBeacon&&(n=ae.navigator.sendBeacon(e.v.toString(),"")),!n&&ae.Image&&(new Image().src=e.v,n=!0),n||(e.g=Av(e.l,null),e.g.da(e.v)),e.F=Date.now(),yo(e)}Tv(t)}function Sl(t){t.g&&(zh(t),t.g.cancel(),t.g=null)}function yv(t){Sl(t),t.u&&(ae.clearTimeout(t.u),t.u=null),Ia(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&ae.clearTimeout(t.m),t.m=null)}function Al(t){lv(t.h)||t.m||(t.m=!0,Hm(t.Ja,t),t.C=0)}function _A(t,e){return cv(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=go(gt(t.Ja,t,e),Cv(t,t.C)),t.C++,!0)}X.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new vo(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=Mm(r),Lm(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Ev(this,i,e),n=Nn(this.F),Be(n,"RID",t),Be(n,"CVER",22),this.D&&Be(n,"X-HTTP-Session-Id",this.D),bo(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(mv(r)))+"&"+e:this.o&&jh(n,this.o,r)),Bh(this.h,i),this.Ya&&Be(n,"TYPE","init"),this.O?(Be(n,"$req",e),Be(n,"SID","null"),i.Z=!0,uu(i,n,null)):uu(i,n,e),this.G=2}}else this.G==3&&(t?gp(this,t):this.i.length==0||lv(this.h)||gp(this))};function gp(t,e){var n;e?n=e.m:n=t.U++;const s=Nn(t.F);Be(s,"SID",t.I),Be(s,"RID",n),Be(s,"AID",t.T),bo(t,s),t.o&&t.s&&jh(s,t.o,t.s),n=new vo(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Ev(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Bh(t.h,n),uu(n,s,e)}function bo(t,e){t.ia&&Sh(t.ia,function(n,s){Be(e,s,n)}),t.l&&nv({},function(n,s){Be(e,s,n)})}function Ev(t,e,n){n=Math.min(t.i.length,n);var s=t.l?gt(t.l.Ra,t.l,t):null;e:{var i=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=i[l].h;const u=i[l].g;if(c-=r,0>c)r=Math.max(0,i[l].h-100),a=!1;else try{cA(u,o,"req"+c+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function bv(t){t.g||t.u||(t.Z=1,Hm(t.Ia,t),t.A=0)}function Wh(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=go(gt(t.Ia,t),Cv(t,t.A)),t.A++,!0)}X.Ia=function(){if(this.u=null,wv(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=go(gt(this.eb,this),t)}};X.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,wt(10),Sl(this),wv(this))};function zh(t){t.B!=null&&(ae.clearTimeout(t.B),t.B=null)}function wv(t){t.g=new vo(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Nn(t.sa);Be(e,"RID","rpc"),Be(e,"SID",t.I),Be(e,"CI",t.L?"0":"1"),Be(e,"AID",t.T),Be(e,"TYPE","xmlhttp"),bo(t,e),t.o&&t.s&&jh(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=wl(Nn(e)),n.s=null,n.P=!0,Jm(n,t)}X.cb=function(){this.v!=null&&(this.v=null,Sl(this),Wh(this),wt(19))};function Ia(t){t.v!=null&&(ae.clearTimeout(t.v),t.v=null)}function Iv(t,e){var n=null;if(t.g==e){Ia(t),zh(t),t.g=null;var s=2}else if(du(t.h,e))n=e.D,uv(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=Dh(),ct(s,new Xm(s,n)),Al(t)}else bv(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(s==1&&_A(t,e)||s==2&&Wh(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:As(t,5);break;case 4:As(t,10);break;case 3:As(t,6);break;default:As(t,2)}}}function Cv(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function As(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=gt(t.kb,t);n||(n=new xs("//www.google.com/images/cleardot.gif"),ae.location&&ae.location.protocol=="http"||ba(n,"https"),wl(n)),uA(n.toString(),s)}else wt(2);t.G=0,t.l&&t.l.va(e),Tv(t),yv(t)}X.kb=function(t){t?(this.j.info("Successfully pinged google.com"),wt(2)):(this.j.info("Failed to ping google.com"),wt(1))};function Tv(t){if(t.G=0,t.la=[],t.l){const e=hv(t.h);(e.length!=0||t.i.length!=0)&&(op(t.la,e),op(t.la,t.i),t.h.i.length=0,Ch(t.i),t.i.length=0),t.l.ua()}}function Sv(t,e,n){var s=n instanceof xs?Nn(n):new xs(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),wa(s,s.m);else{var i=ae.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new xs(null,void 0);s&&ba(r,s),e&&(r.g=e),i&&wa(r,i),n&&(r.l=n),s=r}return n=t.D,e=t.za,n&&e&&Be(s,n,e),Be(s,"VER",t.ma),bo(t,s),s}function Av(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Ge(new Il({jb:!0})):new Ge(t.ra),e.Ka(t.H),e}function Rv(){}X=Rv.prototype;X.xa=function(){};X.wa=function(){};X.va=function(){};X.ua=function(){};X.Ra=function(){};function zt(t,e){it.call(this),this.g=new vv(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!ya(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ya(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ji(this)}ut(zt,it);zt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;wt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Sv(t,null,t.V),Al(t)};zt.prototype.close=function(){Hh(this.g)};zt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Ph(t),t=n);e.i.push(new oA(e.ab++,t)),e.G==3&&Al(e)};zt.prototype.M=function(){this.g.l=null,delete this.j,Hh(this.g),delete this.g,zt.X.M.call(this)};function kv(t){Fh.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ut(kv,Fh);function Ov(){Uh.call(this),this.status=1}ut(Ov,Uh);function ji(t){this.g=t}ut(ji,Rv);ji.prototype.xa=function(){ct(this.g,"a")};ji.prototype.wa=function(t){ct(this.g,new kv(t))};ji.prototype.va=function(t){ct(this.g,new Ov)};ji.prototype.ua=function(){ct(this.g,"b")};zt.prototype.send=zt.prototype.u;zt.prototype.open=zt.prototype.m;zt.prototype.close=zt.prototype.close;Mh.NO_ERROR=0;Mh.TIMEOUT=8;Mh.HTTP_ERROR=6;KS.COMPLETE="complete";GS.EventType=mo;mo.OPEN="a";mo.CLOSE="b";mo.ERROR="c";mo.MESSAGE="d";it.prototype.listen=it.prototype.N;Ge.prototype.listenOnce=Ge.prototype.O;Ge.prototype.getLastError=Ge.prototype.Oa;Ge.prototype.getLastErrorCode=Ge.prototype.Ea;Ge.prototype.getStatus=Ge.prototype.aa;Ge.prototype.getResponseJson=Ge.prototype.Sa;Ge.prototype.getResponseText=Ge.prototype.fa;Ge.prototype.send=Ge.prototype.da;Ge.prototype.setWithCredentials=Ge.prototype.Ka;const mp="@firebase/firestore";/**
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
 */class dt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}dt.UNAUTHENTICATED=new dt(null),dt.GOOGLE_CREDENTIALS=new dt("google-credentials-uid"),dt.FIRST_PARTY=new dt("first-party-uid"),dt.MOCK_USER=new dt("mock-user");/**
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
 */let wo="9.19.0";/**
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
 */const Ti=new cl("@firebase/firestore");function Mt(t,...e){if(Ti.logLevel<=Ie.DEBUG){const n=e.map(Kh);Ti.debug(`Firestore (${wo}): ${t}`,...n)}}function qh(t,...e){if(Ti.logLevel<=Ie.ERROR){const n=e.map(Kh);Ti.error(`Firestore (${wo}): ${t}`,...n)}}function gA(t,...e){if(Ti.logLevel<=Ie.WARN){const n=e.map(Kh);Ti.warn(`Firestore (${wo}): ${t}`,...n)}}function Kh(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function Gh(t="Unexpected state"){const e=`FIRESTORE (${wo}) INTERNAL ASSERTION FAILED: `+t;throw qh(e),new Error(e)}function fu(t,e){t||Gh()}/**
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
 */const Ut={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Bt extends gn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class _i{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Pv{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class mA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(dt.UNAUTHENTICATED))}shutdown(){}}class vA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class yA{constructor(e){this.t=e,this.currentUser=dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let r=new _i;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new _i,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{Mt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(Mt("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new _i)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(Mt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(fu(typeof s.accessToken=="string"),new Pv(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return fu(e===null||typeof e=="string"),new dt(e)}}class EA{constructor(e,n,s){this.h=e,this.l=n,this.m=s,this.type="FirstParty",this.user=dt.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class bA{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new EA(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(dt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class wA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class IA{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const s=r=>{r.error!=null&&Mt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.T;return this.T=r.token,Mt("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{Mt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.I.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.I.getImmediate({optional:!0});r?i(r):Mt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(fu(typeof n.token=="string"),this.T=n.token,new wA(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function CA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class TA{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=CA(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function Nv(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class SA{constructor(e,n,s,i,r,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Ca{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ca("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ca&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */var vp,ve;(ve=vp||(vp={}))[ve.OK=0]="OK",ve[ve.CANCELLED=1]="CANCELLED",ve[ve.UNKNOWN=2]="UNKNOWN",ve[ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ve[ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ve[ve.NOT_FOUND=5]="NOT_FOUND",ve[ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",ve[ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",ve[ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",ve[ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ve[ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ve[ve.ABORTED=10]="ABORTED",ve[ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",ve[ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",ve[ve.INTERNAL=13]="INTERNAL",ve[ve.UNAVAILABLE=14]="UNAVAILABLE",ve[ve.DATA_LOSS=15]="DATA_LOSS";function pc(){return typeof document<"u"?document:null}/**
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
 */class AA{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Ws=e,this.timerId=n,this._o=s,this.mo=i,this.yo=r,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),s=Math.max(0,Date.now()-this.To),i=Math.max(0,n-s);i>0&&Mt("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,i,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
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
 */class Yh{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new _i,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new Yh(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Bt(Ut.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function RA(t,e){if(qh("AsyncQueue",`${e}: ${t}`),Nv(t))return new Bt(Ut.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class kA{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=dt.UNAUTHENTICATED,this.clientId=TA.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{Mt("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(Mt("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Bt(Ut.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new _i;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=RA(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}/**
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
 */const yp=new Map;function OA(t,e,n,s){if(e===!0&&s===!0)throw new Bt(Ut.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function PA(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Gh()}function NA(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Bt(Ut.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=PA(t);throw new Bt(Ut.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Ep{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new Bt(Ut.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Bt(Ut.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,OA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class xv{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ep({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Bt(Ut.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new Bt(Ut.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ep(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new mA;switch(n.type){case"firstParty":return new bA(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new Bt(Ut.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=yp.get(e);n&&(Mt("ComponentProvider","Removing Datastore"),yp.delete(e),n.terminate())}(this),Promise.resolve()}}function xA(t,e,n,s={}){var i;const r=(t=NA(t,xv))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&gA("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=dt.MOCK_USER;else{o=uh(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=s.mockUserToken.sub||s.mockUserToken.user_id;if(!l)throw new Bt(Ut.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new dt(l)}t._authCredentials=new vA(new Pv(o,a))}}/**
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
 */class DA{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new AA(this,"async_queue_retry"),this.qc=()=>{const n=pc();n&&Mt("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const e=pc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const n=pc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new _i;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!Nv(e))throw e;Mt("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const n=this.Nc.then(()=>(this.Fc=!0,e().catch(s=>{this.Mc=s,this.Fc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw qh("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Fc=!1,s))));return this.Nc=n,n}enqueueAfterDelay(e,n,s){this.Uc(),this.Lc.indexOf(e)>-1&&(n=0);const i=Yh.createAndSchedule(this,e,n,s,r=>this.Qc(r));return this.$c.push(i),i}Uc(){this.Mc&&Gh()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}class MA extends xv{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new DA,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||FA(this),this._firestoreClient.terminate()}}function LA(t,e){const n=typeof t=="object"?t:ul(),s=typeof t=="string"?t:e||"(default)",i=ro(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=ch("firestore");r&&xA(i,...r)}return i}function FA(t){var e,n,s;const i=t._freezeSettings(),r=function(o,a,l,c){return new SA(o,a,l,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new kA(t._authCredentials,t._appCheckCredentials,t._queue,r),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=i.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}(function(t,e=!0){(function(n){wo=n})(Gs),us(new On("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new MA(new yA(n.getProvider("auth-internal")),new IA(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new Bt(Ut.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ca(a.options.projectId,l)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Wt(mp,"3.10.0",t),Wt(mp,"3.10.0","esm2017")})();/**
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
 */const Dv="firebasestorage.googleapis.com",Mv="storageBucket",UA=2*60*1e3,BA=10*60*1e3,$A=1e3;/**
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
 */class Ve extends gn{constructor(e,n,s=0){super(_c(e),`Firebase Storage: ${n} (${_c(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ve.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return _c(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ue;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ue||(Ue={}));function _c(t){return"storage/"+t}function Xh(){const t="An unknown error occurred, please check the error payload for server response.";return new Ve(Ue.UNKNOWN,t)}function VA(t){return new Ve(Ue.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function jA(t){return new Ve(Ue.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function HA(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ve(Ue.UNAUTHENTICATED,t)}function WA(){return new Ve(Ue.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function zA(t){return new Ve(Ue.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function Lv(){return new Ve(Ue.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Fv(){return new Ve(Ue.CANCELED,"User canceled the upload/download.")}function qA(t){return new Ve(Ue.INVALID_URL,"Invalid URL '"+t+"'.")}function KA(t){return new Ve(Ue.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function GA(){return new Ve(Ue.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Mv+"' property when initializing the app?")}function Uv(){return new Ve(Ue.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function YA(){return new Ve(Ue.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function XA(){return new Ve(Ue.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function QA(t){return new Ve(Ue.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function pu(t){return new Ve(Ue.INVALID_ARGUMENT,t)}function Bv(){return new Ve(Ue.APP_DELETED,"The Firebase app was deleted.")}function JA(t){return new Ve(Ue.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function _r(t,e){return new Ve(Ue.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Qi(t){throw new Ve(Ue.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Lt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=Lt.makeFromUrl(e,n)}catch{return new Lt(e,"")}if(s.path==="")return s;throw KA(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(H){H.path.charAt(H.path.length-1)==="/"&&(H.path_=H.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(H){H.path_=decodeURIComponent(H.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${u}/b/${i}/o${d}`,"i"),m={bucket:1,path:3},E=n===Dv?"(?:storage.googleapis.com|storage.cloud.google.com)":n,k="([^?#]*)",C=new RegExp(`^https?://${E}/${i}/${k}`,"i"),P=[{regex:a,indices:l,postModify:r},{regex:p,indices:m,postModify:c},{regex:C,indices:{bucket:1,path:2},postModify:c}];for(let H=0;H<P.length;H++){const A=P[H],M=A.regex.exec(e);if(M){const N=M[A.indices.bucket];let I=M[A.indices.path];I||(I=""),s=new Lt(N,I),A.postModify(s);break}}if(s==null)throw qA(e);return s}}class ZA{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function eR(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...k){c||(c=!0,e.apply(null,k))}function h(k){i=setTimeout(()=>{i=null,t(p,l())},k)}function d(){r&&clearTimeout(r)}function p(k,...C){if(c){d();return}if(k){d(),u.call(null,k,...C);return}if(l()||o){d(),u.call(null,k,...C);return}s<64&&(s*=2);let P;a===1?(a=2,P=0):P=(s+Math.random())*1e3,h(P)}let m=!1;function E(k){m||(m=!0,d(),!c&&(i!==null?(k||(a=2),clearTimeout(i),h(0)):k||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,E(!0)},n),E}function tR(t){t(!1)}/**
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
 */function nR(t){return t!==void 0}function sR(t){return typeof t=="function"}function iR(t){return typeof t=="object"&&!Array.isArray(t)}function Rl(t){return typeof t=="string"||t instanceof String}function bp(t){return Qh()&&t instanceof Blob}function Qh(){return typeof Blob<"u"&&!Kw()}function wp(t,e,n,s){if(s<e)throw pu(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw pu(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Io(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function $v(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var Ds;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Ds||(Ds={}));/**
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
 */function Vv(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
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
 */class rR{constructor(e,n,s,i,r,o,a,l,c,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,m)=>{this.resolve_=p,this.reject_=m,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new Vo(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===Ds.NO_ERROR,l=r.getStatus();if(!a||Vv(l,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===Ds.ABORT;s(!1,new Vo(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;s(!0,new Vo(c,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());nR(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=Xh();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?Bv():Fv();o(l)}else{const l=Lv();o(l)}};this.canceled_?n(!1,new Vo(!1,null,!0)):this.backoffId_=eR(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&tR(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Vo{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function oR(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function aR(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function lR(t,e){e&&(t["X-Firebase-GMPID"]=e)}function cR(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function uR(t,e,n,s,i,r,o=!0){const a=$v(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return lR(c,e),oR(c,n),aR(c,r),cR(c,s),new rR(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function hR(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function dR(...t){const e=hR();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(Qh())return new Blob(t);throw new Ve(Ue.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function fR(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function pR(t){if(typeof atob>"u")throw QA("base-64");return atob(t)}/**
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
 */const hn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class gc{constructor(e,n){this.data=e,this.contentType=n||null}}function _R(t,e){switch(t){case hn.RAW:return new gc(jv(e));case hn.BASE64:case hn.BASE64URL:return new gc(Hv(t,e));case hn.DATA_URL:return new gc(mR(e),vR(e))}throw Xh()}function jv(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const r=s,o=t.charCodeAt(++n);s=65536|(r&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function gR(t){let e;try{e=decodeURIComponent(t)}catch{throw _r(hn.DATA_URL,"Malformed data URL.")}return jv(e)}function Hv(t,e){switch(t){case hn.BASE64:{const i=e.indexOf("-")!==-1,r=e.indexOf("_")!==-1;if(i||r)throw _r(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case hn.BASE64URL:{const i=e.indexOf("+")!==-1,r=e.indexOf("/")!==-1;if(i||r)throw _r(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=pR(e)}catch(i){throw i.message.includes("polyfill")?i:_r(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let i=0;i<n.length;i++)s[i]=n.charCodeAt(i);return s}class Wv{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw _r(hn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=yR(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function mR(t){const e=new Wv(t);return e.base64?Hv(hn.BASE64,e.rest):gR(e.rest)}function vR(t){return new Wv(t).contentType}function yR(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Zn{constructor(e,n){let s=0,i="";bp(e)?(this.data_=e,s=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(bp(this.data_)){const s=this.data_,i=fR(s,e,n);return i===null?null:new Zn(i)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new Zn(s,!0)}}static getBlob(...e){if(Qh()){const n=e.map(s=>s instanceof Zn?s.data_:s);return new Zn(dR.apply(null,n))}else{const n=e.map(o=>Rl(o)?_R(hn.RAW,o).data:o.data_);let s=0;n.forEach(o=>{s+=o.byteLength});const i=new Uint8Array(s);let r=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[r++]=o[a]}),new Zn(i,!0)}}uploadData(){return this.data_}}/**
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
 */function zv(t){let e;try{e=JSON.parse(t)}catch{return null}return iR(e)?e:null}/**
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
 */function ER(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function bR(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function qv(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function wR(t,e){return e}class Et{constructor(e,n,s,i){this.server=e,this.local=n||e,this.writable=!!s,this.xform=i||wR}}let jo=null;function IR(t){return!Rl(t)||t.length<2?t:qv(t)}function Kv(){if(jo)return jo;const t=[];t.push(new Et("bucket")),t.push(new Et("generation")),t.push(new Et("metageneration")),t.push(new Et("name","fullPath",!0));function e(r,o){return IR(o)}const n=new Et("name");n.xform=e,t.push(n);function s(r,o){return o!==void 0?Number(o):o}const i=new Et("size");return i.xform=s,t.push(i),t.push(new Et("timeCreated")),t.push(new Et("updated")),t.push(new Et("md5Hash",null,!0)),t.push(new Et("cacheControl",null,!0)),t.push(new Et("contentDisposition",null,!0)),t.push(new Et("contentEncoding",null,!0)),t.push(new Et("contentLanguage",null,!0)),t.push(new Et("contentType",null,!0)),t.push(new Et("metadata","customMetadata",!0)),jo=t,jo}function CR(t,e){function n(){const s=t.bucket,i=t.fullPath,r=new Lt(s,i);return e._makeStorageReference(r)}Object.defineProperty(t,"ref",{get:n})}function TR(t,e,n){const s={};s.type="file";const i=n.length;for(let r=0;r<i;r++){const o=n[r];s[o.local]=o.xform(s,e[o.server])}return CR(s,t),s}function Gv(t,e,n){const s=zv(e);return s===null?null:TR(t,s,n)}function SR(t,e,n,s){const i=zv(e);if(i===null||!Rl(i.downloadTokens))return null;const r=i.downloadTokens;if(r.length===0)return null;const o=encodeURIComponent;return r.split(",").map(c=>{const u=t.bucket,h=t.fullPath,d="/b/"+o(u)+"/o/"+o(h),p=Io(d,n,s),m=$v({alt:"media",token:c});return p+m})[0]}function Yv(t,e){const n={},s=e.length;for(let i=0;i<s;i++){const r=e[i];r.writable&&(n[r.server]=t[r.local])}return JSON.stringify(n)}class Hi{constructor(e,n,s,i){this.url=e,this.method=n,this.handler=s,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function An(t){if(!t)throw Xh()}function Jh(t,e){function n(s,i){const r=Gv(t,i,e);return An(r!==null),r}return n}function AR(t,e){function n(s,i){const r=Gv(t,i,e);return An(r!==null),SR(r,i,t.host,t._protocol)}return n}function Co(t){function e(n,s){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=WA():i=HA():n.getStatus()===402?i=jA(t.bucket):n.getStatus()===403?i=zA(t.path):i=s,i.status=n.getStatus(),i.serverResponse=s.serverResponse,i}return e}function Xv(t){const e=Co(t);function n(s,i){let r=e(s,i);return s.getStatus()===404&&(r=VA(t.path)),r.serverResponse=i.serverResponse,r}return n}function RR(t,e,n){const s=e.fullServerUrl(),i=Io(s,t.host,t._protocol),r="GET",o=t.maxOperationRetryTime,a=new Hi(i,r,Jh(t,n),o);return a.errorHandler=Xv(e),a}function kR(t,e,n){const s=e.fullServerUrl(),i=Io(s,t.host,t._protocol),r="GET",o=t.maxOperationRetryTime,a=new Hi(i,r,AR(t,n),o);return a.errorHandler=Xv(e),a}function OR(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Qv(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=OR(null,e)),s}function PR(t,e,n,s,i){const r=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let P="";for(let H=0;H<2;H++)P=P+Math.random().toString().slice(2);return P}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=Qv(e,s,i),u=Yv(c,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,d=`\r
--`+l+"--",p=Zn.getBlob(h,s,d);if(p===null)throw Uv();const m={name:c.fullPath},E=Io(r,t.host,t._protocol),k="POST",C=t.maxUploadRetryTime,D=new Hi(E,k,Jh(t,n),C);return D.urlParams=m,D.headers=o,D.body=p.uploadData(),D.errorHandler=Co(e),D}class Ta{constructor(e,n,s,i){this.current=e,this.total=n,this.finalized=!!s,this.metadata=i||null}}function Zh(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{An(!1)}return An(!!n&&(e||["active"]).indexOf(n)!==-1),n}function NR(t,e,n,s,i){const r=e.bucketOnlyServerUrl(),o=Qv(e,s,i),a={name:o.fullPath},l=Io(r,t.host,t._protocol),c="POST",u={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${s.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=Yv(o,n),d=t.maxUploadRetryTime;function p(E){Zh(E);let k;try{k=E.getResponseHeader("X-Goog-Upload-URL")}catch{An(!1)}return An(Rl(k)),k}const m=new Hi(l,c,p,d);return m.urlParams=a,m.headers=u,m.body=h,m.errorHandler=Co(e),m}function xR(t,e,n,s){const i={"X-Goog-Upload-Command":"query"};function r(c){const u=Zh(c,["active","final"]);let h=null;try{h=c.getResponseHeader("X-Goog-Upload-Size-Received")}catch{An(!1)}h||An(!1);const d=Number(h);return An(!isNaN(d)),new Ta(d,s.size(),u==="final")}const o="POST",a=t.maxUploadRetryTime,l=new Hi(n,o,r,a);return l.headers=i,l.errorHandler=Co(e),l}const Ip=256*1024;function DR(t,e,n,s,i,r,o,a){const l=new Ta(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=s.size()),s.size()!==l.total)throw YA();const c=l.total-l.current;let u=c;i>0&&(u=Math.min(u,i));const h=l.current,d=h+u;let p="";u===0?p="finalize":c===u?p="upload, finalize":p="upload";const m={"X-Goog-Upload-Command":p,"X-Goog-Upload-Offset":`${l.current}`},E=s.slice(h,d);if(E===null)throw Uv();function k(H,A){const M=Zh(H,["active","final"]),N=l.current+u,I=s.size();let L;return M==="final"?L=Jh(e,r)(H,A):L=null,new Ta(N,I,M==="final",L)}const C="POST",D=e.maxUploadRetryTime,P=new Hi(n,C,k,D);return P.headers=m,P.body=E.uploadData(),P.progressCallback=a||null,P.errorHandler=Co(t),P}const Tt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function mc(t){switch(t){case"running":case"pausing":case"canceling":return Tt.RUNNING;case"paused":return Tt.PAUSED;case"success":return Tt.SUCCESS;case"canceled":return Tt.CANCELED;case"error":return Tt.ERROR;default:return Tt.ERROR}}/**
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
 */class MR{constructor(e,n,s){if(sR(e)||n!=null||s!=null)this.next=e,this.error=n??void 0,this.complete=s??void 0;else{const r=e;this.next=r.next,this.error=r.error,this.complete=r.complete}}}/**
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
 */function Zs(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class LR{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ds.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ds.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ds.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,i){if(this.sent_)throw Qi("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const r in i)i.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,i[r].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Qi("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Qi("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Qi("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Qi("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class FR extends LR{initXhr(){this.xhr_.responseType="text"}}function si(){return new FR}/**
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
 */class UR{constructor(e,n,s=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=s,this._mappings=Kv(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(Ue.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const r=this.isExponentialBackoffExpired();if(Vv(i.status,[]))if(r)i=Lv();else{this.sleepTime=Math.max(this.sleepTime*2,$A),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(Ue.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,r)=>{this._resolve=i,this._reject=r,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,s])=>{switch(this._state){case"running":e(n,s);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const s=NR(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(s,si,e,n);this._request=i,i.getPromise().then(r=>{this._request=void 0,this._uploadUrl=r,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,s)=>{const i=xR(this._ref.storage,this._ref._location,e,this._blob),r=this._ref.storage._makeRequest(i,si,n,s);this._request=r,r.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=Ip*this._chunkMultiplier,n=new Ta(this._transferred,this._blob.size()),s=this._uploadUrl;this._resolveToken((i,r)=>{let o;try{o=DR(this._ref._location,this._ref.storage,s,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const a=this._ref.storage._makeRequest(o,si,i,r,!1);this._request=a,a.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Ip*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const s=RR(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(s,si,e,n);this._request=i,i.getPromise().then(r=>{this._request=void 0,this._metadata=r,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const s=PR(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(s,si,e,n);this._request=i,i.getPromise().then(r=>{this._request=void 0,this._metadata=r,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=Fv(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=mc(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,s,i){const r=new MR(n||void 0,s||void 0,i||void 0);return this._addObserver(r),()=>{this._removeObserver(r)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(mc(this._state)){case Tt.SUCCESS:Zs(this._resolve.bind(null,this.snapshot))();break;case Tt.CANCELED:case Tt.ERROR:const n=this._reject;Zs(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(mc(this._state)){case Tt.RUNNING:case Tt.PAUSED:e.next&&Zs(e.next.bind(e,this.snapshot))();break;case Tt.SUCCESS:e.complete&&Zs(e.complete.bind(e))();break;case Tt.CANCELED:case Tt.ERROR:e.error&&Zs(e.error.bind(e,this._error))();break;default:e.error&&Zs(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */let kl=class _u{constructor(e,n){this._service=e,n instanceof Lt?this._location=n:this._location=Lt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new _u(e,n)}get root(){const e=new Lt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return qv(this._location.path)}get storage(){return this._service}get parent(){const e=ER(this._location.path);if(e===null)return null;const n=new Lt(this._location.bucket,e);return new _u(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw JA(e)}};function BR(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new UR(t,new Zn(e),n)}function $R(t){t._throwIfRoot("getDownloadURL");const e=kR(t.storage,t._location,Kv());return t.storage.makeRequestWithTokens(e,si).then(n=>{if(n===null)throw XA();return n})}function VR(t,e){const n=bR(t._location.path,e),s=new Lt(t._location.bucket,n);return new kl(t.storage,s)}/**
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
 */function jR(t){return/^[A-Za-z]+:\/\//.test(t)}function HR(t,e){return new kl(t,e)}function Jv(t,e){if(t instanceof ed){const n=t;if(n._bucket==null)throw GA();const s=new kl(n,n._bucket);return e!=null?Jv(s,e):s}else return e!==void 0?VR(t,e):t}function WR(t,e){if(e&&jR(e)){if(t instanceof ed)return HR(t,e);throw pu("To use ref(service, url), the first argument must be a Storage instance.")}else return Jv(t,e)}function Cp(t,e){const n=e==null?void 0:e[Mv];return n==null?null:Lt.makeFromBucketSpec(n,t)}function zR(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=s;i&&(t._overrideAuthToken=typeof i=="string"?i:uh(i,t.app.options.projectId))}class ed{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=Dv,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=UA,this._maxUploadRetryTime=BA,this._requests=new Set,i!=null?this._bucket=Lt.makeFromBucketSpec(i,this._host):this._bucket=Cp(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Lt.makeFromBucketSpec(this._url,e):this._bucket=Cp(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){wp("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){wp("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new kl(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new ZA(Bv());{const o=uR(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const Tp="@firebase/storage",Sp="0.11.2";/**
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
 */const Zv="storage";function qR(t,e,n){return t=rt(t),BR(t,e,n)}function KR(t){return t=rt(t),$R(t)}function GR(t,e){return t=rt(t),WR(t,e)}function YR(t=ul(),e){t=rt(t);const s=ro(t,Zv).getImmediate({identifier:e}),i=ch("storage");return i&&XR(s,...i),s}function XR(t,e,n,s={}){zR(t,e,n,s)}function QR(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new ed(n,s,i,e,Gs)}function JR(){us(new On(Zv,QR,"PUBLIC").setMultipleInstances(!0)),Wt(Tp,Sp,""),Wt(Tp,Sp,"esm2017")}JR();const Ap="@firebase/database",Rp="0.14.4";/**
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
 */let ey="";function ZR(t){ey=t}/**
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
 */class ek{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),st(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Pr(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class tk{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Un(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const ty=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new ek(e)}}catch{}return new tk},Rs=ty("localStorage"),gu=ty("sessionStorage");/**
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
 */const gi=new cl("@firebase/database"),nk=function(){let t=1;return function(){return t++}}(),ny=function(t){const e=aI(t),n=new sI;n.update(e);const s=n.digest();return lh.encodeByteArray(s)},To=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=To.apply(null,s):typeof s=="object"?e+=st(s):e+=s,e+=" "}return e};let Ms=null,kp=!0;const sk=function(t,e){U(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(gi.logLevel=Ie.VERBOSE,Ms=gi.log.bind(gi),e&&gu.set("logging_enabled",!0)):typeof t=="function"?Ms=t:(Ms=null,gu.remove("logging_enabled"))},ft=function(...t){if(kp===!0&&(kp=!1,Ms===null&&gu.get("logging_enabled")===!0&&sk(!0)),Ms){const e=To.apply(null,t);Ms(e)}},So=function(t){return function(...e){ft(t,...e)}},mu=function(...t){const e="FIREBASE INTERNAL ERROR: "+To(...t);gi.error(e)},xn=function(...t){const e=`FIREBASE FATAL ERROR: ${To(...t)}`;throw gi.error(e),new Error(e)},kt=function(...t){const e="FIREBASE WARNING: "+To(...t);gi.warn(e)},ik=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&kt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},sy=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},rk=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Si="[MIN_NAME]",Vs="[MAX_NAME]",Wi=function(t,e){if(t===e)return 0;if(t===Si||e===Vs)return-1;if(e===Si||t===Vs)return 1;{const n=Op(t),s=Op(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},ok=function(t,e){return t===e?0:t<e?-1:1},Ji=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+st(e))},td=function(t){if(typeof t!="object"||t===null)return st(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=st(e[s]),n+=":",n+=td(t[e[s]]);return n+="}",n},iy=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Pt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const ry=function(t){U(!sy(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},ak=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},lk=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function ck(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const uk=new RegExp("^-?(0*)\\d{1,10}$"),hk=-2147483648,dk=2147483647,Op=function(t){if(uk.test(t)){const e=Number(t);if(e>=hk&&e<=dk)return e}return null},zi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw kt("Exception was thrown by user callback.",n),e},Math.floor(0))}},fk=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},gr=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class pk{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){kt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class _k{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ft("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',kt(e)}}class mi{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}mi.OWNER="owner";/**
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
 */const nd="5",oy="v",ay="s",ly="r",cy="f",uy=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,hy="ls",dy="p",vu="ac",fy="websocket",py="long_polling";/**
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
 */class _y{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Rs.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Rs.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function gk(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function gy(t,e,n){U(typeof e=="string","typeof type must == string"),U(typeof n=="object","typeof params must == object");let s;if(e===fy)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===py)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);gk(t)&&(n.ns=t.namespace);const i=[];return Pt(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class mk{constructor(){this.counters_={}}incrementCounter(e,n=1){Un(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return $w(this.counters_)}}/**
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
 */const vc={},yc={};function sd(t){const e=t.toString();return vc[e]||(vc[e]=new mk),vc[e]}function vk(t,e){const n=t.toString();return yc[n]||(yc[n]=e()),yc[n]}/**
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
 */class yk{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&zi(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Pp="start",Ek="close",bk="pLPCommand",wk="pRTLPCB",my="id",vy="pw",yy="ser",Ik="cb",Ck="seg",Tk="ts",Sk="d",Ak="dframe",Ey=1870,by=30,Rk=Ey-by,kk=25e3,Ok=3e4;class ai{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=So(e),this.stats_=sd(n),this.urlFn=l=>(this.appCheckToken&&(l[vu]=this.appCheckToken),gy(n,py,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new yk(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Ok)),rk(()=>{if(this.isClosed_)return;this.scriptTagHolder=new id((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Pp)this.id=a,this.password=l;else if(o===Ek)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Pp]="t",s[yy]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Ik]=this.scriptTagHolder.uniqueCallbackIdentifier),s[oy]=nd,this.transportSessionId&&(s[ay]=this.transportSessionId),this.lastSessionId&&(s[hy]=this.lastSessionId),this.applicationId&&(s[dy]=this.applicationId),this.appCheckToken&&(s[vu]=this.appCheckToken),typeof location<"u"&&location.hostname&&uy.test(location.hostname)&&(s[ly]=cy);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ai.forceAllow_=!0}static forceDisallow(){ai.forceDisallow_=!0}static isAvailable(){return ai.forceAllow_?!0:!ai.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!ak()&&!lk()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=st(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Wg(n),i=iy(s,Rk);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Ak]="t",s[my]=e,s[vy]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=st(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class id{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=nk(),window[bk+this.uniqueCallbackIdentifier]=e,window[wk+this.uniqueCallbackIdentifier]=n,this.myIFrame=id.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ft("frame writing exception"),a.stack&&ft(a.stack),ft(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ft("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[my]=this.myID,e[vy]=this.myPW,e[yy]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+by+s.length<=Ey;){const o=this.pendingSegs.shift();s=s+"&"+Ck+i+"="+o.seg+"&"+Tk+i+"="+o.ts+"&"+Sk+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(kk)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{ft("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const Pk=16384,Nk=45e3;let Sa=null;typeof MozWebSocket<"u"?Sa=MozWebSocket:typeof WebSocket<"u"&&(Sa=WebSocket);class Gt{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=So(this.connId),this.stats_=sd(n),this.connURL=Gt.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[oy]=nd,typeof location<"u"&&location.hostname&&uy.test(location.hostname)&&(o[ly]=cy),n&&(o[ay]=n),s&&(o[hy]=s),i&&(o[vu]=i),r&&(o[dy]=r),gy(e,fy,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Rs.set("previous_websocket_failure",!0);try{let s;Yg(),this.mySock=new Sa(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Gt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Sa!==null&&!Gt.forceDisallow_}static previouslyFailed(){return Rs.isInMemoryStorage||Rs.get("previous_websocket_failure")===!0}markConnectionHealthy(){Rs.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Pr(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(U(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=st(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=iy(n,Pk);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Nk))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Gt.responsesRequiredToBeHealthy=2;Gt.healthyTimeout=3e4;/**
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
 */class jr{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ai,Gt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Gt&&Gt.isAvailable();let s=n&&!Gt.previouslyFailed();if(e.webSocketOnly&&(n||kt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Gt];else{const i=this.transports_=[];for(const r of jr.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);jr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}jr.globalTransportInitialized_=!1;/**
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
 */const xk=6e4,Dk=5e3,Mk=10*1024,Lk=100*1024,Ec="t",Np="d",Fk="s",xp="r",Uk="e",Dp="o",Mp="a",Lp="n",Fp="p",Bk="h";class $k{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=So("c:"+this.id+":"),this.transportManager_=new jr(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=gr(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Lk?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Mk?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ec in e){const n=e[Ec];n===Mp?this.upgradeIfSecondaryHealthy_():n===xp?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Dp&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ji("t",e),s=Ji("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Fp,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Mp,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Lp,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ji("t",e),s=Ji("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ji(Ec,e);if(Np in e){const s=e[Np];if(n===Bk){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Lp){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Fk?this.onConnectionShutdown_(s):n===xp?this.onReset_(s):n===Uk?mu("Server Error: "+s):n===Dp?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):mu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),nd!==s&&kt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),gr(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(xk))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):gr(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Dk))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Fp,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Rs.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class wy{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Iy{constructor(e){this.allowedEvents_=e,this.listeners_={},U(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){U(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Aa extends Iy{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!hh()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Aa}getInitialEvent(e){return U(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Up=32,Bp=768;class Pe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function be(){return new Pe("")}function de(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function hs(t){return t.pieces_.length-t.pieceNum_}function Ne(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Pe(t.pieces_,e)}function Cy(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Vk(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Ty(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Sy(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Pe(e,0)}function Je(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof Pe)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new Pe(n,0)}function pe(t){return t.pieceNum_>=t.pieces_.length}function At(t,e){const n=de(t),s=de(e);if(n===null)return e;if(n===s)return At(Ne(t),Ne(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function rd(t,e){if(hs(t)!==hs(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Qt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(hs(t)>hs(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class jk{constructor(e,n){this.errorPrefix_=n,this.parts_=Ty(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=ll(this.parts_[s]);Ay(this)}}function Hk(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=ll(e),Ay(t)}function Wk(t){const e=t.parts_.pop();t.byteLength_-=ll(e),t.parts_.length>0&&(t.byteLength_-=1)}function Ay(t){if(t.byteLength_>Bp)throw new Error(t.errorPrefix_+"has a key path longer than "+Bp+" bytes ("+t.byteLength_+").");if(t.parts_.length>Up)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Up+") or object contains a cycle "+Es(t))}function Es(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class od extends Iy{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new od}getInitialEvent(e){return U(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Zi=1e3,zk=60*5*1e3,$p=30*1e3,qk=1.3,Kk=3e4,Gk="server_kill",Vp=3;class Rn extends wy{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Rn.nextPersistentConnectionId_++,this.log_=So("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Zi,this.maxReconnectDelay_=zk,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Yg())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");od.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Aa.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(st(r)),U(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new al,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),U(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),U(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Rn.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Un(e,"w")){const s=Ci(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();kt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||nI(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=$p)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=tI(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),U(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+st(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):mu("Unrecognized action received from server: "+st(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){U(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Zi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Zi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Kk&&(this.reconnectDelay_=Zi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*qk)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Rn.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){U(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?ft("getToken() completed but was canceled"):(ft("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new $k(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,p=>{kt(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(Gk)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&kt(h),l())}}}interrupt(e){ft("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ft("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Gc(this.interruptReasons_)&&(this.reconnectDelay_=Zi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>td(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new Pe(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){ft("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Vp&&(this.reconnectDelay_=$p,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ft("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Vp&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+ey.replace(/\./g,"-")]=1,hh()?e["framework.cordova"]=1:Gg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Aa.getInstance().currentlyOnline();return Gc(this.interruptReasons_)&&e}}Rn.nextPersistentConnectionId_=0;Rn.nextConnectionId_=0;/**
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
 */class fe{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new fe(e,n)}}/**
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
 */class Ol{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new fe(Si,e),i=new fe(Si,n);return this.compare(s,i)!==0}minPost(){return fe.MIN}}/**
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
 */let Ho;class Ry extends Ol{static get __EMPTY_NODE(){return Ho}static set __EMPTY_NODE(e){Ho=e}compare(e,n){return Wi(e.name,n.name)}isDefinedOn(e){throw Fi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return fe.MIN}maxPost(){return new fe(Vs,Ho)}makePost(e,n){return U(typeof e=="string","KeyIndex indexValue must always be a string."),new fe(e,Ho)}toString(){return".key"}}const vi=new Ry;/**
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
 */class Wo{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class nt{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??nt.RED,this.left=i??Rt.EMPTY_NODE,this.right=r??Rt.EMPTY_NODE}copy(e,n,s,i,r){return new nt(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Rt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Rt.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}nt.RED=!0;nt.BLACK=!1;class Yk{copy(e,n,s,i,r){return this}insert(e,n,s){return new nt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Rt{constructor(e,n=Rt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Rt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,nt.BLACK,null,null))}remove(e){return new Rt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,nt.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Wo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Wo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Wo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Wo(this.root_,null,this.comparator_,!0,e)}}Rt.EMPTY_NODE=new Yk;/**
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
 */function Xk(t,e){return Wi(t.name,e.name)}function ad(t,e){return Wi(t,e)}/**
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
 */let yu;function Qk(t){yu=t}const ky=function(t){return typeof t=="number"?"number:"+ry(t):"string:"+t},Oy=function(t){if(t.isLeafNode()){const e=t.val();U(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Un(e,".sv"),"Priority must be a string or number.")}else U(t===yu||t.isEmpty(),"priority of unexpected type.");U(t===yu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let jp;class tt{constructor(e,n=tt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,U(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Oy(this.priorityNode_)}static set __childrenNodeConstructor(e){jp=e}static get __childrenNodeConstructor(){return jp}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new tt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:tt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return pe(e)?this:de(e)===".priority"?this.priorityNode_:tt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:tt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=de(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(U(s!==".priority"||hs(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,tt.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ne(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ky(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=ry(this.value_):e+=this.value_,this.lazyHash_=ny(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===tt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof tt.__childrenNodeConstructor?-1:(U(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=tt.VALUE_TYPE_ORDER.indexOf(n),r=tt.VALUE_TYPE_ORDER.indexOf(s);return U(i>=0,"Unknown leaf type: "+n),U(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}tt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Py,Ny;function Jk(t){Py=t}function Zk(t){Ny=t}class eO extends Ol{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Wi(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return fe.MIN}maxPost(){return new fe(Vs,new tt("[PRIORITY-POST]",Ny))}makePost(e,n){const s=Py(e);return new fe(n,new tt("[PRIORITY-POST]",s))}toString(){return".priority"}}const He=new eO;/**
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
 */const tO=Math.log(2);class nO{constructor(e){const n=r=>parseInt(Math.log(r)/tO,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ra=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new nt(d,h.node,nt.BLACK,null,null);{const p=parseInt(u/2,10)+l,m=i(l,p),E=i(p+1,c);return h=t[p],d=n?n(h):h,new nt(d,h.node,nt.BLACK,m,E)}},r=function(l){let c=null,u=null,h=t.length;const d=function(m,E){const k=h-m,C=h;h-=m;const D=i(k+1,C),P=t[k],H=n?n(P):P;p(new nt(H,P.node,E,null,D))},p=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<l.count;++m){const E=l.nextBitIsOne(),k=Math.pow(2,l.count-(m+1));E?d(k,nt.BLACK):(d(k,nt.BLACK),d(k,nt.RED))}return u},o=new nO(t.length),a=r(o);return new Rt(s||e,a)};/**
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
 */let bc;const ei={};class Tn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return U(ei&&He,"ChildrenNode.ts has not been loaded"),bc=bc||new Tn({".priority":ei},{".priority":He}),bc}get(e){const n=Ci(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Rt?n:null}hasIndex(e){return Un(this.indexSet_,e.toString())}addIndex(e,n){U(e!==vi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(fe.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Ra(s,e.getCompare()):a=ei;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Tn(u,c)}addToIndexes(e,n){const s=ha(this.indexes_,(i,r)=>{const o=Ci(this.indexSet_,r);if(U(o,"Missing index implementation for "+r),i===ei)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(fe.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Ra(a,o.getCompare())}else return ei;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new fe(e.name,a))),l.insert(e,e.node)}});return new Tn(s,this.indexSet_)}removeFromIndexes(e,n){const s=ha(this.indexes_,i=>{if(i===ei)return i;{const r=n.get(e.name);return r?i.remove(new fe(e.name,r)):i}});return new Tn(s,this.indexSet_)}}/**
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
 */let er;class ne{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Oy(this.priorityNode_),this.children_.isEmpty()&&U(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return er||(er=new ne(new Rt(ad),null,Tn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||er}updatePriority(e){return this.children_.isEmpty()?this:new ne(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?er:n}}getChild(e){const n=de(e);return n===null?this:this.getImmediateChild(n).getChild(Ne(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(U(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new fe(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?er:this.priorityNode_;return new ne(i,o,r)}}updateChild(e,n){const s=de(e);if(s===null)return n;{U(de(e)!==".priority"||hs(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(Ne(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(He,(o,a)=>{n[o]=a.val(e),s++,r&&ne.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+ky(this.getPriority().val())+":"),this.forEachChild(He,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":ny(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new fe(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new fe(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new fe(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,fe.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,fe.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ao?-1:0}withIndex(e){if(e===vi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ne(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===vi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(He),i=n.getIterator(He);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===vi?null:this.indexMap_.get(e.toString())}}ne.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class sO extends ne{constructor(){super(new Rt(ad),ne.EMPTY_NODE,Tn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ne.EMPTY_NODE}isEmpty(){return!1}}const Ao=new sO;Object.defineProperties(fe,{MIN:{value:new fe(Si,ne.EMPTY_NODE)},MAX:{value:new fe(Vs,Ao)}});Ry.__EMPTY_NODE=ne.EMPTY_NODE;tt.__childrenNodeConstructor=ne;Qk(Ao);Zk(Ao);/**
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
 */const iO=!0;function at(t,e=null){if(t===null)return ne.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),U(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new tt(n,at(e))}if(!(t instanceof Array)&&iO){const n=[];let s=!1;if(Pt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=at(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new fe(o,l)))}}),n.length===0)return ne.EMPTY_NODE;const r=Ra(n,Xk,o=>o.name,ad);if(s){const o=Ra(n,He.getCompare());return new ne(r,at(e),new Tn({".priority":o},{".priority":He}))}else return new ne(r,at(e),Tn.Default)}else{let n=ne.EMPTY_NODE;return Pt(t,(s,i)=>{if(Un(t,s)&&s.substring(0,1)!=="."){const r=at(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(at(e))}}Jk(at);/**
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
 */class rO extends Ol{constructor(e){super(),this.indexPath_=e,U(!pe(e)&&de(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Wi(e.name,n.name):r}makePost(e,n){const s=at(e),i=ne.EMPTY_NODE.updateChild(this.indexPath_,s);return new fe(n,i)}maxPost(){const e=ne.EMPTY_NODE.updateChild(this.indexPath_,Ao);return new fe(Vs,e)}toString(){return Ty(this.indexPath_,0).join("/")}}/**
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
 */class oO extends Ol{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Wi(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return fe.MIN}maxPost(){return fe.MAX}makePost(e,n){const s=at(e);return new fe(n,s)}toString(){return".value"}}const aO=new oO;/**
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
 */function xy(t){return{type:"value",snapshotNode:t}}function Ai(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Hr(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Wr(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function lO(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class ld{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){U(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Hr(n,a)):U(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ai(n,s)):o.trackChildChange(Wr(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(He,(i,r)=>{n.hasChild(i)||s.trackChildChange(Hr(i,r))}),n.isLeafNode()||n.forEachChild(He,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Wr(i,r,o))}else s.trackChildChange(Ai(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?ne.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class zr{constructor(e){this.indexedFilter_=new ld(e.getIndex()),this.index_=e.getIndex(),this.startPost_=zr.getStartPost_(e),this.endPost_=zr.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new fe(n,s))||(s=ne.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=ne.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(ne.EMPTY_NODE);const r=this;return n.forEachChild(He,(o,a)=>{r.matches(new fe(o,a))||(i=i.updateImmediateChild(o,ne.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class cO{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new zr(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new fe(n,s))||(s=ne.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=ne.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=ne.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(ne.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,ne.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,p)=>h(p,d)}else o=this.index_.getCompare();const a=e;U(a.numChildren()===this.limit_,"");const l=new fe(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const p=d==null?1:o(d,l);if(u&&!s.isEmpty()&&p>=0)return r!=null&&r.trackChildChange(Wr(n,s,h)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(Hr(n,h));const E=a.updateImmediateChild(n,ne.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(Ai(d.name,d.node)),E.updateImmediateChild(d.name,d.node)):E}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Hr(c.name,c.node)),r.trackChildChange(Ai(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,ne.EMPTY_NODE)):e}}/**
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
 */class cd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=He}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return U(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return U(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Si}hasEnd(){return this.endSet_}getIndexEndValue(){return U(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return U(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Vs}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return U(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===He}copy(){const e=new cd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function uO(t){return t.loadsAllData()?new ld(t.getIndex()):t.hasLimit()?new cO(t):new zr(t)}function Hp(t){const e={};if(t.isDefault())return e;let n;if(t.index_===He?n="$priority":t.index_===aO?n="$value":t.index_===vi?n="$key":(U(t.index_ instanceof rO,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=st(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=st(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+st(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=st(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+st(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Wp(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==He&&(e.i=t.index_.toString()),e}/**
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
 */class ka extends wy{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=So("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(U(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=ka.getListenId_(e,s),a={};this.listens_[o]=a;const l=Hp(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),Ci(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=ka.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Hp(e._queryParams),s=e._path.toString(),i=new al;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ui(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Pr(a.responseText)}catch{kt("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&kt("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class hO{constructor(){this.rootNode_=ne.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Oa(){return{value:null,children:new Map}}function Dy(t,e,n){if(pe(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=de(e);t.children.has(s)||t.children.set(s,Oa());const i=t.children.get(s);e=Ne(e),Dy(i,e,n)}}function Eu(t,e,n){t.value!==null?n(e,t.value):dO(t,(s,i)=>{const r=new Pe(e.toString()+"/"+s);Eu(i,r,n)})}function dO(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class fO{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Pt(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const zp=10*1e3,pO=30*1e3,_O=5*60*1e3;class gO{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new fO(e);const s=zp+(pO-zp)*Math.random();gr(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Pt(e,(i,r)=>{r>0&&Un(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),gr(this.reportStats_.bind(this),Math.floor(Math.random()*2*_O))}}/**
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
 */var Jt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Jt||(Jt={}));function My(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ud(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function hd(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Pa{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Jt.ACK_USER_WRITE,this.source=My()}operationForChild(e){if(pe(this.path)){if(this.affectedTree.value!=null)return U(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Pe(e));return new Pa(be(),n,this.revert)}}else return U(de(this.path)===e,"operationForChild called for unrelated child."),new Pa(Ne(this.path),this.affectedTree,this.revert)}}/**
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
 */class qr{constructor(e,n){this.source=e,this.path=n,this.type=Jt.LISTEN_COMPLETE}operationForChild(e){return pe(this.path)?new qr(this.source,be()):new qr(this.source,Ne(this.path))}}/**
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
 */class js{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Jt.OVERWRITE}operationForChild(e){return pe(this.path)?new js(this.source,be(),this.snap.getImmediateChild(e)):new js(this.source,Ne(this.path),this.snap)}}/**
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
 */class Kr{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Jt.MERGE}operationForChild(e){if(pe(this.path)){const n=this.children.subtree(new Pe(e));return n.isEmpty()?null:n.value?new js(this.source,be(),n.value):new Kr(this.source,be(),n)}else return U(de(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Kr(this.source,Ne(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Hs{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(pe(e))return this.isFullyInitialized()&&!this.filtered_;const n=de(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class mO{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function vO(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(lO(o.childName,o.snapshotNode))}),tr(t,i,"child_removed",e,s,n),tr(t,i,"child_added",e,s,n),tr(t,i,"child_moved",r,s,n),tr(t,i,"child_changed",e,s,n),tr(t,i,"value",e,s,n),i}function tr(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>EO(t,a,l)),o.forEach(a=>{const l=yO(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function yO(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function EO(t,e,n){if(e.childName==null||n.childName==null)throw Fi("Should only compare child_ events.");const s=new fe(e.childName,e.snapshotNode),i=new fe(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function Pl(t,e){return{eventCache:t,serverCache:e}}function mr(t,e,n,s){return Pl(new Hs(e,n,s),t.serverCache)}function Ly(t,e,n,s){return Pl(t.eventCache,new Hs(e,n,s))}function bu(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Ws(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let wc;const bO=()=>(wc||(wc=new Rt(ok)),wc);class Le{constructor(e,n=bO()){this.value=e,this.children=n}static fromObject(e){let n=new Le(null);return Pt(e,(s,i)=>{n=n.set(new Pe(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:be(),value:this.value};if(pe(e))return null;{const s=de(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(Ne(e),n);return r!=null?{path:Je(new Pe(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(pe(e))return this;{const n=de(e),s=this.children.get(n);return s!==null?s.subtree(Ne(e)):new Le(null)}}set(e,n){if(pe(e))return new Le(n,this.children);{const s=de(e),r=(this.children.get(s)||new Le(null)).set(Ne(e),n),o=this.children.insert(s,r);return new Le(this.value,o)}}remove(e){if(pe(e))return this.children.isEmpty()?new Le(null):new Le(null,this.children);{const n=de(e),s=this.children.get(n);if(s){const i=s.remove(Ne(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new Le(null):new Le(this.value,r)}else return this}}get(e){if(pe(e))return this.value;{const n=de(e),s=this.children.get(n);return s?s.get(Ne(e)):null}}setTree(e,n){if(pe(e))return n;{const s=de(e),r=(this.children.get(s)||new Le(null)).setTree(Ne(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new Le(this.value,o)}}fold(e){return this.fold_(be(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(Je(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,be(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(pe(e))return null;{const r=de(e),o=this.children.get(r);return o?o.findOnPath_(Ne(e),Je(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,be(),n)}foreachOnPath_(e,n,s){if(pe(e))return this;{this.value&&s(n,this.value);const i=de(e),r=this.children.get(i);return r?r.foreachOnPath_(Ne(e),Je(n,i),s):new Le(null)}}foreach(e){this.foreach_(be(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(Je(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class tn{constructor(e){this.writeTree_=e}static empty(){return new tn(new Le(null))}}function vr(t,e,n){if(pe(e))return new tn(new Le(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=At(i,e);return r=r.updateChild(o,n),new tn(t.writeTree_.set(i,r))}else{const i=new Le(n),r=t.writeTree_.setTree(e,i);return new tn(r)}}}function qp(t,e,n){let s=t;return Pt(n,(i,r)=>{s=vr(s,Je(e,i),r)}),s}function Kp(t,e){if(pe(e))return tn.empty();{const n=t.writeTree_.setTree(e,new Le(null));return new tn(n)}}function wu(t,e){return Ys(t,e)!=null}function Ys(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(At(n.path,e)):null}function Gp(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(He,(s,i)=>{e.push(new fe(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new fe(s,i.value))}),e}function os(t,e){if(pe(e))return t;{const n=Ys(t,e);return n!=null?new tn(new Le(n)):new tn(t.writeTree_.subtree(e))}}function Iu(t){return t.writeTree_.isEmpty()}function Ri(t,e){return Fy(be(),t.writeTree_,e)}function Fy(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(U(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Fy(Je(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Je(t,".priority"),s)),n}}/**
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
 */function dd(t,e){return Vy(e,t)}function wO(t,e,n,s,i){U(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=vr(t.visibleWrites,e,n)),t.lastWriteId=s}function IO(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function CO(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);U(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&TO(a,s.path)?i=!1:Qt(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return SO(t),!0;if(s.snap)t.visibleWrites=Kp(t.visibleWrites,s.path);else{const a=s.children;Pt(a,l=>{t.visibleWrites=Kp(t.visibleWrites,Je(s.path,l))})}return!0}else return!1}function TO(t,e){if(t.snap)return Qt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Qt(Je(t.path,n),e))return!0;return!1}function SO(t){t.visibleWrites=Uy(t.allWrites,AO,be()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function AO(t){return t.visible}function Uy(t,e,n){let s=tn.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)Qt(n,o)?(a=At(n,o),s=vr(s,a,r.snap)):Qt(o,n)&&(a=At(o,n),s=vr(s,be(),r.snap.getChild(a)));else if(r.children){if(Qt(n,o))a=At(n,o),s=qp(s,a,r.children);else if(Qt(o,n))if(a=At(o,n),pe(a))s=qp(s,be(),r.children);else{const l=Ci(r.children,de(a));if(l){const c=l.getChild(Ne(a));s=vr(s,be(),c)}}}else throw Fi("WriteRecord should have .snap or .children")}}return s}function By(t,e,n,s,i){if(!s&&!i){const r=Ys(t.visibleWrites,e);if(r!=null)return r;{const o=os(t.visibleWrites,e);if(Iu(o))return n;if(n==null&&!wu(o,be()))return null;{const a=n||ne.EMPTY_NODE;return Ri(o,a)}}}else{const r=os(t.visibleWrites,e);if(!i&&Iu(r))return n;if(!i&&n==null&&!wu(r,be()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(Qt(c.path,e)||Qt(e,c.path))},a=Uy(t.allWrites,o,e),l=n||ne.EMPTY_NODE;return Ri(a,l)}}}function RO(t,e,n){let s=ne.EMPTY_NODE;const i=Ys(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(He,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=os(t.visibleWrites,e);return n.forEachChild(He,(o,a)=>{const l=Ri(os(r,new Pe(o)),a);s=s.updateImmediateChild(o,l)}),Gp(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=os(t.visibleWrites,e);return Gp(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function kO(t,e,n,s,i){U(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=Je(e,n);if(wu(t.visibleWrites,r))return null;{const o=os(t.visibleWrites,r);return Iu(o)?i.getChild(n):Ri(o,i.getChild(n))}}function OO(t,e,n,s){const i=Je(e,n),r=Ys(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=os(t.visibleWrites,i);return Ri(o,s.getNode().getImmediateChild(n))}else return null}function PO(t,e){return Ys(t.visibleWrites,e)}function NO(t,e,n,s,i,r,o){let a;const l=os(t.visibleWrites,e),c=Ys(l,be());if(c!=null)a=c;else if(n!=null)a=Ri(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let p=d.getNext();for(;p&&u.length<i;)h(p,s)!==0&&u.push(p),p=d.getNext();return u}else return[]}function xO(){return{visibleWrites:tn.empty(),allWrites:[],lastWriteId:-1}}function Na(t,e,n,s){return By(t.writeTree,t.treePath,e,n,s)}function fd(t,e){return RO(t.writeTree,t.treePath,e)}function Yp(t,e,n,s){return kO(t.writeTree,t.treePath,e,n,s)}function xa(t,e){return PO(t.writeTree,Je(t.treePath,e))}function DO(t,e,n,s,i,r){return NO(t.writeTree,t.treePath,e,n,s,i,r)}function pd(t,e,n){return OO(t.writeTree,t.treePath,e,n)}function $y(t,e){return Vy(Je(t.treePath,e),t.writeTree)}function Vy(t,e){return{treePath:t,writeTree:e}}/**
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
 */class MO{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;U(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),U(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Wr(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Hr(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Ai(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Wr(s,e.snapshotNode,i.oldSnap));else throw Fi("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class LO{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const jy=new LO;class _d{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Hs(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return pd(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ws(this.viewCache_),r=DO(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function FO(t){return{filter:t}}function UO(t,e){U(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),U(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function BO(t,e,n,s,i){const r=new MO;let o,a;if(n.type===Jt.OVERWRITE){const c=n;c.source.fromUser?o=Cu(t,e,c.path,c.snap,s,i,r):(U(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!pe(c.path),o=Da(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===Jt.MERGE){const c=n;c.source.fromUser?o=VO(t,e,c.path,c.children,s,i,r):(U(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Tu(t,e,c.path,c.children,s,i,a,r))}else if(n.type===Jt.ACK_USER_WRITE){const c=n;c.revert?o=WO(t,e,c.path,s,i,r):o=jO(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===Jt.LISTEN_COMPLETE)o=HO(t,e,n.path,s,r);else throw Fi("Unknown operation type: "+n.type);const l=r.getChanges();return $O(e,o,l),{viewCache:o,changes:l}}function $O(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=bu(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(xy(bu(e)))}}function Hy(t,e,n,s,i,r){const o=e.eventCache;if(xa(s,n)!=null)return e;{let a,l;if(pe(n))if(U(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Ws(e),u=c instanceof ne?c:ne.EMPTY_NODE,h=fd(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Na(s,Ws(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=de(n);if(c===".priority"){U(hs(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=Yp(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=Ne(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=Yp(s,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=pd(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return mr(e,a,o.isFullyInitialized()||pe(n),t.filter.filtersNodes())}}function Da(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(pe(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),p,null)}else{const p=de(n);if(!l.isCompleteForPath(n)&&hs(n)>1)return e;const m=Ne(n),k=l.getNode().getImmediateChild(p).updateChild(m,s);p===".priority"?c=u.updatePriority(l.getNode(),k):c=u.updateChild(l.getNode(),p,k,m,jy,null)}const h=Ly(e,c,l.isFullyInitialized()||pe(n),u.filtersNodes()),d=new _d(i,h,r);return Hy(t,h,n,i,d,a)}function Cu(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new _d(i,e,r);if(pe(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=mr(e,c,!0,t.filter.filtersNodes());else{const h=de(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=mr(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=Ne(n),p=a.getNode().getImmediateChild(h);let m;if(pe(d))m=s;else{const E=u.getCompleteChild(h);E!=null?Cy(d)===".priority"&&E.getChild(Sy(d)).isEmpty()?m=E:m=E.updateChild(d,s):m=ne.EMPTY_NODE}if(p.equals(m))l=e;else{const E=t.filter.updateChild(a.getNode(),h,m,d,u,o);l=mr(e,E,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Xp(t,e){return t.eventCache.isCompleteForChild(e)}function VO(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=Je(n,l);Xp(e,de(u))&&(a=Cu(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=Je(n,l);Xp(e,de(u))||(a=Cu(t,a,u,c,i,r,o))}),a}function Qp(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Tu(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;pe(n)?c=s:c=new Le(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const p=e.serverCache.getNode().getImmediateChild(h),m=Qp(t,p,d);l=Da(t,l,new Pe(h),m,i,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const p=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!p){const m=e.serverCache.getNode().getImmediateChild(h),E=Qp(t,m,d);l=Da(t,l,new Pe(h),E,i,r,o,a)}}),l}function jO(t,e,n,s,i,r,o){if(xa(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(pe(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Da(t,e,n,l.getNode().getChild(n),i,r,a,o);if(pe(n)){let c=new Le(null);return l.getNode().forEachChild(vi,(u,h)=>{c=c.set(new Pe(u),h)}),Tu(t,e,n,c,i,r,a,o)}else return e}else{let c=new Le(null);return s.foreach((u,h)=>{const d=Je(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),Tu(t,e,n,c,i,r,a,o)}}function HO(t,e,n,s,i){const r=e.serverCache,o=Ly(e,r.getNode(),r.isFullyInitialized()||pe(n),r.isFiltered());return Hy(t,o,n,s,jy,i)}function WO(t,e,n,s,i,r){let o;if(xa(s,n)!=null)return e;{const a=new _d(s,e,i),l=e.eventCache.getNode();let c;if(pe(n)||de(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Na(s,Ws(e));else{const h=e.serverCache.getNode();U(h instanceof ne,"serverChildren would be complete if leaf node"),u=fd(s,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=de(n);let h=pd(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,Ne(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,ne.EMPTY_NODE,Ne(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Na(s,Ws(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||xa(s,be())!=null,mr(e,c,o,t.filter.filtersNodes())}}/**
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
 */class zO{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new ld(s.getIndex()),r=uO(s);this.processor_=FO(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(ne.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(ne.EMPTY_NODE,a.getNode(),null),u=new Hs(l,o.isFullyInitialized(),i.filtersNodes()),h=new Hs(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Pl(h,u),this.eventGenerator_=new mO(this.query_)}get query(){return this.query_}}function qO(t){return t.viewCache_.serverCache.getNode()}function KO(t,e){const n=Ws(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!pe(e)&&!n.getImmediateChild(de(e)).isEmpty())?n.getChild(e):null}function Jp(t){return t.eventRegistrations_.length===0}function GO(t,e){t.eventRegistrations_.push(e)}function Zp(t,e,n){const s=[];if(n){U(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function e_(t,e,n,s){e.type===Jt.MERGE&&e.source.queryId!==null&&(U(Ws(t.viewCache_),"We should always have a full cache before handling merges"),U(bu(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=BO(t.processor_,i,e,n,s);return UO(t.processor_,r.viewCache),U(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Wy(t,r.changes,r.viewCache.eventCache.getNode(),null)}function YO(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(He,(r,o)=>{s.push(Ai(r,o))}),n.isFullyInitialized()&&s.push(xy(n.getNode())),Wy(t,s,n.getNode(),e)}function Wy(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return vO(t.eventGenerator_,e,n,i)}/**
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
 */let Ma;class XO{constructor(){this.views=new Map}}function QO(t){U(!Ma,"__referenceConstructor has already been defined"),Ma=t}function JO(){return U(Ma,"Reference.ts has not been loaded"),Ma}function ZO(t){return t.views.size===0}function gd(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return U(r!=null,"SyncTree gave us an op for an invalid query."),e_(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(e_(o,e,n,s));return r}}function eP(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=Na(n,i?s:null),l=!1;a?l=!0:s instanceof ne?(a=fd(n,s),l=!1):(a=ne.EMPTY_NODE,l=!1);const c=Pl(new Hs(a,l,!1),new Hs(s,i,!1));return new zO(e,c)}return o}function tP(t,e,n,s,i,r){const o=eP(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),GO(o,n),YO(o,n)}function nP(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=ds(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(Zp(c,n,s)),Jp(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(Zp(l,n,s)),Jp(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!ds(t)&&r.push(new(JO())(e._repo,e._path)),{removed:r,events:o}}function zy(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function yi(t,e){let n=null;for(const s of t.views.values())n=n||KO(s,e);return n}function qy(t,e){if(e._queryParams.loadsAllData())return Nl(t);{const s=e._queryIdentifier;return t.views.get(s)}}function Ky(t,e){return qy(t,e)!=null}function ds(t){return Nl(t)!=null}function Nl(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let La;function sP(t){U(!La,"__referenceConstructor has already been defined"),La=t}function iP(){return U(La,"Reference.ts has not been loaded"),La}let rP=1;class t_{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Le(null),this.pendingWriteTree_=xO(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Gy(t,e,n,s,i){return wO(t.pendingWriteTree_,e,n,s,i),i?Ro(t,new js(My(),e,n)):[]}function ks(t,e,n=!1){const s=IO(t.pendingWriteTree_,e);if(CO(t.pendingWriteTree_,e)){let r=new Le(null);return s.snap!=null?r=r.set(be(),!0):Pt(s.children,o=>{r=r.set(new Pe(o),!0)}),Ro(t,new Pa(s.path,r,n))}else return[]}function xl(t,e,n){return Ro(t,new js(ud(),e,n))}function oP(t,e,n){const s=Le.fromObject(n);return Ro(t,new Kr(ud(),e,s))}function aP(t,e){return Ro(t,new qr(ud(),e))}function lP(t,e,n){const s=vd(t,n);if(s){const i=yd(s),r=i.path,o=i.queryId,a=At(r,e),l=new qr(hd(o),a);return Ed(t,r,l)}else return[]}function Su(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||Ky(o,e))){const l=nP(o,e,n,s);ZO(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(d,p)=>ds(p));if(u&&!h){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const p=hP(d);for(let m=0;m<p.length;++m){const E=p[m],k=E.query,C=Qy(t,E);t.listenProvider_.startListening(yr(k),Fa(t,k),C.hashFn,C.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(yr(e),null):c.forEach(d=>{const p=t.queryToTagMap.get(Dl(d));t.listenProvider_.stopListening(yr(d),p)}))}dP(t,c)}return a}function cP(t,e,n,s){const i=vd(t,s);if(i!=null){const r=yd(i),o=r.path,a=r.queryId,l=At(o,e),c=new js(hd(a),l,n);return Ed(t,o,c)}else return[]}function uP(t,e,n,s){const i=vd(t,s);if(i){const r=yd(i),o=r.path,a=r.queryId,l=At(o,e),c=Le.fromObject(n),u=new Kr(hd(a),l,c);return Ed(t,o,u)}else return[]}function n_(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,p)=>{const m=At(d,i);r=r||yi(p,m),o=o||ds(p)});let a=t.syncPointTree_.get(i);a?(o=o||ds(a),r=r||yi(a,be())):(a=new XO,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=ne.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((p,m)=>{const E=yi(m,be());E&&(r=r.updateImmediateChild(p,E))}));const c=Ky(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=Dl(e);U(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const p=fP();t.queryToTagMap.set(d,p),t.tagToQueryMap.set(p,d)}const u=dd(t.pendingWriteTree_,i);let h=tP(a,e,n,u,r,l);if(!c&&!o&&!s){const d=qy(a,e);h=h.concat(pP(t,e,d))}return h}function md(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=At(o,e),c=yi(a,l);if(c)return c});return By(i,e,r,n,!0)}function Ro(t,e){return Yy(e,t.syncPointTree_,null,dd(t.pendingWriteTree_,be()))}function Yy(t,e,n,s){if(pe(t.path))return Xy(t,e,n,s);{const i=e.get(be());n==null&&i!=null&&(n=yi(i,be()));let r=[];const o=de(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=$y(s,o);r=r.concat(Yy(a,l,c,u))}return i&&(r=r.concat(gd(i,t,s,n))),r}}function Xy(t,e,n,s){const i=e.get(be());n==null&&i!=null&&(n=yi(i,be()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=$y(s,o),u=t.operationForChild(o);u&&(r=r.concat(Xy(u,a,l,c)))}),i&&(r=r.concat(gd(i,t,s,n))),r}function Qy(t,e){const n=e.query,s=Fa(t,n);return{hashFn:()=>(qO(e)||ne.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?lP(t,n._path,s):aP(t,n._path);{const r=ck(i,n);return Su(t,n,null,r)}}}}function Fa(t,e){const n=Dl(e);return t.queryToTagMap.get(n)}function Dl(t){return t._path.toString()+"$"+t._queryIdentifier}function vd(t,e){return t.tagToQueryMap.get(e)}function yd(t){const e=t.indexOf("$");return U(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Pe(t.substr(0,e))}}function Ed(t,e,n){const s=t.syncPointTree_.get(e);U(s,"Missing sync point for query tag that we're tracking");const i=dd(t.pendingWriteTree_,e);return gd(s,n,i,null)}function hP(t){return t.fold((e,n,s)=>{if(n&&ds(n))return[Nl(n)];{let i=[];return n&&(i=zy(n)),Pt(s,(r,o)=>{i=i.concat(o)}),i}})}function yr(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(iP())(t._repo,t._path):t}function dP(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Dl(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function fP(){return rP++}function pP(t,e,n){const s=e._path,i=Fa(t,e),r=Qy(t,n),o=t.listenProvider_.startListening(yr(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)U(!ds(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!pe(c)&&u&&ds(u))return[Nl(u).query];{let d=[];return u&&(d=d.concat(zy(u).map(p=>p.query))),Pt(h,(p,m)=>{d=d.concat(m)}),d}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(yr(u),Fa(t,u))}}return o}/**
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
 */class bd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new bd(n)}node(){return this.node_}}class wd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Je(this.path_,e);return new wd(this.syncTree_,n)}node(){return md(this.syncTree_,this.path_)}}const _P=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},s_=function(t,e,n){if(!t||typeof t!="object")return t;if(U(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return gP(t[".sv"],e,n);if(typeof t[".sv"]=="object")return mP(t[".sv"],e);U(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},gP=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:U(!1,"Unexpected server value: "+t)}},mP=function(t,e,n){t.hasOwnProperty("increment")||U(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&U(!1,"Unexpected increment value: "+s);const i=e.node();if(U(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},vP=function(t,e,n,s){return Id(e,new wd(n,t),s)},Jy=function(t,e,n){return Id(t,new bd(e),n)};function Id(t,e,n){const s=t.getPriority().val(),i=s_(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=s_(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new tt(a,at(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new tt(i))),o.forEachChild(He,(a,l)=>{const c=Id(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class Cd{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Td(t,e){let n=e instanceof Pe?e:new Pe(e),s=t,i=de(n);for(;i!==null;){const r=Ci(s.node.children,i)||{children:{},childCount:0};s=new Cd(i,s,r),n=Ne(n),i=de(n)}return s}function qi(t){return t.node.value}function Zy(t,e){t.node.value=e,Au(t)}function e0(t){return t.node.childCount>0}function yP(t){return qi(t)===void 0&&!e0(t)}function Ml(t,e){Pt(t.node.children,(n,s)=>{e(new Cd(n,t,s))})}function t0(t,e,n,s){n&&!s&&e(t),Ml(t,i=>{t0(i,e,!0,s)}),n&&s&&e(t)}function EP(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function ko(t){return new Pe(t.parent===null?t.name:ko(t.parent)+"/"+t.name)}function Au(t){t.parent!==null&&bP(t.parent,t.name,t)}function bP(t,e,n){const s=yP(n),i=Un(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Au(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Au(t))}/**
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
 */const wP=/[\[\].#$\/\u0000-\u001F\u007F]/,IP=/[\[\].#$\u0000-\u001F\u007F]/,Ic=10*1024*1024,n0=function(t){return typeof t=="string"&&t.length!==0&&!wP.test(t)},s0=function(t){return typeof t=="string"&&t.length!==0&&!IP.test(t)},CP=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),s0(t)},i0=function(t,e,n,s){s&&e===void 0||Sd(dh(t,"value"),e,n)},Sd=function(t,e,n){const s=n instanceof Pe?new jk(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Es(s));if(typeof e=="function")throw new Error(t+"contains a function "+Es(s)+" with contents = "+e.toString());if(sy(e))throw new Error(t+"contains "+e.toString()+" "+Es(s));if(typeof e=="string"&&e.length>Ic/3&&ll(e)>Ic)throw new Error(t+"contains a string greater than "+Ic+" utf8 bytes "+Es(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Pt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!n0(o)))throw new Error(t+" contains an invalid key ("+o+") "+Es(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Hk(s,o),Sd(t,a,s),Wk(s)}),i&&r)throw new Error(t+' contains ".value" child '+Es(s)+" in addition to actual children.")}},r0=function(t,e,n,s){if(!(s&&n===void 0)&&!s0(n))throw new Error(dh(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},TP=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),r0(t,e,n,s)},Ad=function(t,e){if(de(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},SP=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!n0(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!CP(n))throw new Error(dh(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class AP{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Rd(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!rd(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function o0(t,e,n){Rd(t,n),a0(t,s=>rd(s,e))}function Dn(t,e,n){Rd(t,n),a0(t,s=>Qt(s,e)||Qt(e,s))}function a0(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(RP(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function RP(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Ms&&ft("event: "+n.toString()),zi(s)}}}/**
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
 */const kP="repo_interrupt",OP=25;class PP{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new AP,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Oa(),this.transactionQueueTree_=new Cd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function NP(t,e,n){if(t.stats_=sd(t.repoInfo_),t.forceRestClient_||fk())t.server_=new ka(t.repoInfo_,(s,i,r,o)=>{i_(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>r_(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{st(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Rn(t.repoInfo_,e,(s,i,r,o)=>{i_(t,s,i,r,o)},s=>{r_(t,s)},s=>{xP(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=vk(t.repoInfo_,()=>new gO(t.stats_,t.server_)),t.infoData_=new hO,t.infoSyncTree_=new t_({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=xl(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Od(t,"connected",!1),t.serverSyncTree_=new t_({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);Dn(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function l0(t){const n=t.infoData_.getNode(new Pe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function kd(t){return _P({timestamp:l0(t)})}function i_(t,e,n,s,i){t.dataUpdateCount++;const r=new Pe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=ha(n,c=>at(c));o=uP(t.serverSyncTree_,r,l,i)}else{const l=at(n);o=cP(t.serverSyncTree_,r,l,i)}else if(s){const l=ha(n,c=>at(c));o=oP(t.serverSyncTree_,r,l)}else{const l=at(n);o=xl(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Ll(t,r)),Dn(t.eventQueue_,a,o)}function r_(t,e){Od(t,"connected",e),e===!1&&MP(t)}function xP(t,e){Pt(e,(n,s)=>{Od(t,n,s)})}function Od(t,e,n){const s=new Pe("/.info/"+e),i=at(n);t.infoData_.updateSnapshot(s,i);const r=xl(t.infoSyncTree_,s,i);Dn(t.eventQueue_,s,r)}function c0(t){return t.nextWriteId_++}function DP(t,e,n,s,i){Pd(t,"set",{path:e.toString(),value:n,priority:s});const r=kd(t),o=at(n,s),a=md(t.serverSyncTree_,e),l=Jy(o,a,r),c=c0(t),u=Gy(t.serverSyncTree_,e,l,c,!0);Rd(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(d,p)=>{const m=d==="ok";m||kt("set at "+e+" failed: "+d);const E=ks(t.serverSyncTree_,c,!m);Dn(t.eventQueue_,e,E),UP(t,i,d,p)});const h=p0(t,e);Ll(t,h),Dn(t.eventQueue_,h,[])}function MP(t){Pd(t,"onDisconnectEvents");const e=kd(t),n=Oa();Eu(t.onDisconnect_,be(),(i,r)=>{const o=vP(i,r,t.serverSyncTree_,e);Dy(n,i,o)});let s=[];Eu(n,be(),(i,r)=>{s=s.concat(xl(t.serverSyncTree_,i,r));const o=p0(t,i);Ll(t,o)}),t.onDisconnect_=Oa(),Dn(t.eventQueue_,be(),s)}function LP(t,e,n){let s;de(e._path)===".info"?s=n_(t.infoSyncTree_,e,n):s=n_(t.serverSyncTree_,e,n),o0(t.eventQueue_,e._path,s)}function o_(t,e,n){let s;de(e._path)===".info"?s=Su(t.infoSyncTree_,e,n):s=Su(t.serverSyncTree_,e,n),o0(t.eventQueue_,e._path,s)}function FP(t){t.persistentConnection_&&t.persistentConnection_.interrupt(kP)}function Pd(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ft(n,...e)}function UP(t,e,n,s){e&&zi(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function u0(t,e,n){return md(t.serverSyncTree_,e,n)||ne.EMPTY_NODE}function Nd(t,e=t.transactionQueueTree_){if(e||Fl(t,e),qi(e)){const n=d0(t,e);U(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&BP(t,ko(e),n)}else e0(e)&&Ml(e,n=>{Nd(t,n)})}function BP(t,e,n){const s=n.map(c=>c.currentWriteId),i=u0(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];U(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=At(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Pd(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(ks(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Fl(t,Td(t.transactionQueueTree_,e)),Nd(t,t.transactionQueueTree_),Dn(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)zi(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{kt("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Ll(t,e)}},o)}function Ll(t,e){const n=h0(t,e),s=ko(n),i=d0(t,n);return $P(t,i,s),s}function $P(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=At(n,l.path);let u=!1,h;if(U(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(ks(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=OP)u=!0,h="maxretry",i=i.concat(ks(t.serverSyncTree_,l.currentWriteId,!0));else{const d=u0(t,l.path,o);l.currentInputSnapshot=d;const p=e[a].update(d.val());if(p!==void 0){Sd("transaction failed: Data returned ",p,l.path);let m=at(p);typeof p=="object"&&p!=null&&Un(p,".priority")||(m=m.updatePriority(d.getPriority()));const k=l.currentWriteId,C=kd(t),D=Jy(m,d,C);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=D,l.currentWriteId=c0(t),o.splice(o.indexOf(k),1),i=i.concat(Gy(t.serverSyncTree_,l.path,D,l.currentWriteId,l.applyLocally)),i=i.concat(ks(t.serverSyncTree_,k,!0))}else u=!0,h="nodata",i=i.concat(ks(t.serverSyncTree_,l.currentWriteId,!0))}Dn(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}Fl(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)zi(s[a]);Nd(t,t.transactionQueueTree_)}function h0(t,e){let n,s=t.transactionQueueTree_;for(n=de(e);n!==null&&qi(s)===void 0;)s=Td(s,n),e=Ne(e),n=de(e);return s}function d0(t,e){const n=[];return f0(t,e,n),n.sort((s,i)=>s.order-i.order),n}function f0(t,e,n){const s=qi(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Ml(e,i=>{f0(t,i,n)})}function Fl(t,e){const n=qi(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Zy(e,n.length>0?n:void 0)}Ml(e,s=>{Fl(t,s)})}function p0(t,e){const n=ko(h0(t,e)),s=Td(t.transactionQueueTree_,e);return EP(s,i=>{Cc(t,i)}),Cc(t,s),t0(s,i=>{Cc(t,i)}),n}function Cc(t,e){const n=qi(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(U(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(U(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(ks(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Zy(e,void 0):n.length=r+1,Dn(t.eventQueue_,ko(e),i);for(let o=0;o<s.length;o++)zi(s[o])}}/**
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
 */function VP(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function jP(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):kt(`Invalid query segment '${n}' in query '${t}'`)}return e}const a_=function(t,e){const n=HP(t),s=n.namespace;n.domain==="firebase.com"&&xn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&xn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||ik();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new _y(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new Pe(n.pathString)}},HP=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=VP(t.substring(u,h)));const d=jP(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */const l_="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",WP=function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=l_.charAt(n%64),n=Math.floor(n/64);U(n===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=l_.charAt(e[i]);return U(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class _0{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+st(this.snapshot.exportVal())}}class g0{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class zP{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return U(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class xd{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return pe(this._path)?null:Cy(this._path)}get ref(){return new Bn(this._repo,this._path)}get _queryIdentifier(){const e=Wp(this._queryParams),n=td(e);return n==="{}"?"default":n}get _queryObject(){return Wp(this._queryParams)}isEqual(e){if(e=rt(e),!(e instanceof xd))return!1;const n=this._repo===e._repo,s=rd(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Vk(this._path)}}class Bn extends xd{constructor(e,n){super(e,n,new cd,!1)}get parent(){const e=Sy(this._path);return e===null?null:new Bn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Gr{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Pe(e),s=ki(this.ref,e);return new Gr(this._node.getChild(n),s,He)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Gr(i,ki(this.ref,s),He)))}hasChild(e){const n=new Pe(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ea(t,e){return t=rt(t),t._checkNotDeleted("ref"),e!==void 0?ki(t._root,e):t._root}function ki(t,e){return t=rt(t),de(t._path)===null?TP("child","path",e,!1):r0("child","path",e,!1),new Bn(t._repo,Je(t._path,e))}function qP(t,e){t=rt(t),Ad("push",t._path),i0("push",e,t._path,!0);const n=l0(t._repo),s=WP(n),i=ki(t,s),r=ki(t,s);let o;return e!=null?o=Dd(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function KP(t){return Ad("remove",t._path),Dd(t,null)}function Dd(t,e){t=rt(t),Ad("set",t._path),i0("set",e,t._path,!1);const n=new al;return DP(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class Md{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new _0("value",this,new Gr(e.snapshotNode,new Bn(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new g0(this,e,n):null}matches(e){return e instanceof Md?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Ld{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new g0(this,e,n):null}createEvent(e,n){U(e.childName!=null,"Child events should have a childName.");const s=ki(new Bn(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new _0(e.type,this,new Gr(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Ld?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function GP(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const l=n,c=(u,h)=>{o_(t._repo,t,a),l(u,h)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new zP(n,r||void 0),a=e==="value"?new Md(o):new Ld(e,o);return LP(t._repo,t,a),()=>o_(t._repo,t,a)}function YP(t,e,n,s){return GP(t,"value",e,n,s)}QO(Bn);sP(Bn);/**
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
 */const XP="FIREBASE_DATABASE_EMULATOR_HOST",Ru={};let QP=!1;function JP(t,e,n,s){t.repoInfo_=new _y(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function ZP(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||xn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ft("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=a_(r,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[XP]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=a_(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new mi(mi.OWNER):new _k(t.name,t.options,e);SP("Invalid Firebase Database URL",o),pe(o.path)||xn("Database URL must point to the root of a Firebase Database (not including a child path).");const h=tN(a,t,u,new pk(t.name,n));return new nN(h,t)}function eN(t,e){const n=Ru[e];(!n||n[t.key]!==t)&&xn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),FP(t),delete n[t.key]}function tN(t,e,n,s){let i=Ru[e.name];i||(i={},Ru[e.name]=i);let r=i[t.toURLString()];return r&&xn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new PP(t,QP,n,s),i[t.toURLString()]=r,r}class nN{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(NP(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Bn(this._repo,be())),this._rootInternal}_delete(){return this._rootInternal!==null&&(eN(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&xn("Cannot call "+e+" on a deleted database.")}}function sN(t=ul(),e){const n=ro(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=ch("database");s&&iN(n,...s)}return n}function iN(t,e,n,s={}){t=rt(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&xn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&xn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new mi(mi.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:uh(s.mockUserToken,t.app.options.projectId);r=new mi(o)}JP(i,e,n,r)}/**
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
 */function rN(t){ZR(Gs),us(new On("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return ZP(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Wt(Ap,Rp,t),Wt(Ap,Rp,"esm2017")}Rn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Rn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};rN();const oN={apiKey:"AIzaSyCJyeK_uaQqFQ029_L8He2X19zreqUYNWc",authDomain:"snacksprint-5053d.firebaseapp.com",projectId:"snacksprint-5053d",storageBucket:"snacksprint-5053d.appspot.com",messagingSenderId:"293488162980",appId:"1:293488162980:web:e9200a53088e6a73bb8e31",databaseURL:"https://snacksprint-5053d-default-rtdb.europe-west1.firebasedatabase.app"},Fd=Zg(oN),Tc=vS(Fd);LA(Fd);const aN=YR(Fd),ta=sN(),_s=so("mainStore",()=>{const t=We({pizza:[],burgers:[],roles:[],salads:[],drinks:[],checkedProducts:[],message:"",success:!1,error:!1,isShowMenu:!1});async function e(){try{t.value.error=!1;const o=ea(ta,"products/");YP(o,a=>{const l=a.val();l!==null&&n(Object.values(l))})}catch(o){t.value.error=!0,console.error(o)}}function n(o){t.value.pizza=o.filter(a=>a.product=="pizza"),t.value.burgers=o.filter(a=>a.product=="burgers"),t.value.roles=o.filter(a=>a.product=="roles"),t.value.salads=o.filter(a=>a.product=="salads"),t.value.drinks=o.filter(a=>a.product=="drinks")}function s(o){t.value.checkedProducts=o}function i(o,a){switch(o){case"success":{t.value.success=!0,t.value.error=!1,t.value.message=a,setTimeout(()=>t.value.success=!1,1e3);break}case"error":{t.value.success=!1,t.value.error=!0,t.value.message=a,setTimeout(()=>t.value.error=!1,1e3);break}}}function r(o){t.value.isShowMenu=o}return{main:t,setProducts:n,setCheckedProducts:s,fetchProducts:e,toastify:i,setShowMenu:r}}),Ul=so("orderStore",()=>{const t=Ud(),e=We({isProductModalVisible:!1,currentProduct:[],amountProducts:0,sumProducts:0,order:[]});function n(){e.value.isProductModalVisible=!e.value.isProductModalVisible,e.value.amountProducts=0,e.value.sumProducts=0,e.value.currentProduct=[]}function s(c){if(e.value.order.some(h=>h.id==c.id)){const h=e.value.order.find(d=>d.id==c.id);e.value.amountProducts=h.amountProducts,e.value.sumProducts=h.sumProducts,e.value.currentProduct=[h]}else e.value.currentProduct=[c]}function i(){e.value.currentProduct=[]}function r(){e.value.amountProducts+=1,e.value.sumProducts+=+e.value.currentProduct[0].productPrice}function o(){e.value.amountProducts-=1,e.value.sumProducts-=+e.value.currentProduct[0].productPrice}function a(){e.value.isProductModalVisible=!1;const c=e.value.currentProduct.map(h=>({...h,amountProducts:e.value.amountProducts,sumProducts:e.value.sumProducts}));e.value.order.some(h=>h.id==c[0].id)?(e.value.order.map(h=>(h.id==c[0].id&&(h.amountProducts=e.value.amountProducts,h.sumProducts=e.value.sumProducts),h)),t.orderSum(e.value.order)):(e.value.order=[...e.value.order,...c],t.orderSum(e.value.order)),e.value.currentProduct=[],e.value.amountProducts=0,e.value.sumProducts=0}function l(){e.value.order=[]}return{order:e,setProductModal:n,setCurrentProduct:s,removeCurentProduct:i,addProduct:r,removeProduct:o,addToBasket:a,resetOrder:l}}),Ud=so("basketStore",()=>{const t=_s(),e=We({orderSum:0,isBasketModalVisible:!1}),n=Ul();function s(){e.value.isBasketModalVisible=!e.value.isBasketModalVisible}function i(o){e.value.orderSum=o.reduce((a,l)=>a+l.sumProducts,0)}function r(){n.resetOrder(),e.value.orderSum=0,e.value.isBasketModalVisible=!1,t.toastify("success","Замовлення прийнято!")}return{basket:e,orderSum:i,setBasketModal:s,orderConfirm:r}}),lN=["src"],cN=Ce({__name:"BasketButton",setup(t){const e=Ud();return(n,s)=>(Q(),le("img",{onClick:s[0]||(s[0]=(...i)=>v(e).setBasketModal&&v(e).setBasketModal(...i)),class:"basket",src:v(Fw),alt:""},null,8,lN))}});const uN=$e(cN,[["__scopeId","data-v-1b581581"]]);/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const ii=typeof window<"u";function hN(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Te=Object.assign;function Sc(t,e){const n={};for(const s in e){const i=e[s];n[s]=sn(i)?i.map(t):t(i)}return n}const Er=()=>{},sn=Array.isArray,dN=/\/$/,fN=t=>t.replace(dN,"");function Ac(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=mN(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function pN(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function c_(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function _N(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&Oi(e.matched[s],n.matched[i])&&m0(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Oi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function m0(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!gN(t[n],e[n]))return!1;return!0}function gN(t,e){return sn(t)?u_(t,e):sn(e)?u_(e,t):t===e}function u_(t,e){return sn(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function mN(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let i=n.length-1,r,o;for(r=0;r<s.length;r++)if(o=s[r],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var Yr;(function(t){t.pop="pop",t.push="push"})(Yr||(Yr={}));var br;(function(t){t.back="back",t.forward="forward",t.unknown=""})(br||(br={}));function vN(t){if(!t)if(ii){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),fN(t)}const yN=/^[^#]+#/;function EN(t,e){return t.replace(yN,"#")+e}function bN(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Bl=()=>({left:window.pageXOffset,top:window.pageYOffset});function wN(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=bN(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function h_(t,e){return(history.state?history.state.position-e:-1)+t}const ku=new Map;function IN(t,e){ku.set(t,e)}function CN(t){const e=ku.get(t);return ku.delete(t),e}let TN=()=>location.protocol+"//"+location.host;function v0(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),c_(l,"")}return c_(n,t)+s+i}function SN(t,e,n,s){let i=[],r=[],o=null;const a=({state:d})=>{const p=v0(t,location),m=n.value,E=e.value;let k=0;if(d){if(n.value=p,e.value=d,o&&o===m){o=null;return}k=E?d.position-E.position:0}else s(p);i.forEach(C=>{C(n.value,m,{delta:k,type:Yr.pop,direction:k?k>0?br.forward:br.back:br.unknown})})};function l(){o=n.value}function c(d){i.push(d);const p=()=>{const m=i.indexOf(d);m>-1&&i.splice(m,1)};return r.push(p),p}function u(){const{history:d}=window;d.state&&d.replaceState(Te({},d.state,{scroll:Bl()}),"")}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:h}}function d_(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?Bl():null}}function AN(t){const{history:e,location:n}=window,s={value:v0(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:TN()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),i.value=c}catch(p){console.error(p),n[u?"replace":"assign"](d)}}function o(l,c){const u=Te({},e.state,d_(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=Te({},i.value,e.state,{forward:l,scroll:Bl()});r(u.current,u,!0);const h=Te({},d_(s.value,l,null),{position:u.position+1},c);r(l,h,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function RN(t){t=vN(t);const e=AN(t),n=SN(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=Te({location:"",base:t,go:s,createHref:EN.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function kN(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),RN(t)}function ON(t){return typeof t=="string"||t&&typeof t=="object"}function y0(t){return typeof t=="string"||typeof t=="symbol"}const Wn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},E0=Symbol("");var f_;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(f_||(f_={}));function Pi(t,e){return Te(new Error,{type:t,[E0]:!0},e)}function vn(t,e){return t instanceof Error&&E0 in t&&(e==null||!!(t.type&e))}const p_="[^/]+?",PN={sensitive:!1,strict:!1,start:!0,end:!0},NN=/[.+*?^${}()[\]/\\]/g;function xN(t,e){const n=Te({},PN,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const d=c[h];let p=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(NN,"\\$&"),p+=40;else if(d.type===1){const{value:m,repeatable:E,optional:k,regexp:C}=d;r.push({name:m,repeatable:E,optional:k});const D=C||p_;if(D!==p_){p+=10;try{new RegExp(`(${D})`)}catch(H){throw new Error(`Invalid custom RegExp for param "${m}" (${D}): `+H.message)}}let P=E?`((?:${D})(?:/(?:${D}))*)`:`(${D})`;h||(P=k&&c.length<2?`(?:/${P})`:"/"+P),k&&(P+="?"),i+=P,p+=20,k&&(p+=-8),E&&(p+=-20),D===".*"&&(p+=-50)}u.push(p)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",m=r[d-1];h[m.name]=p&&m.repeatable?p.split("/"):p}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of d)if(p.type===0)u+=p.value;else if(p.type===1){const{value:m,repeatable:E,optional:k}=p,C=m in c?c[m]:"";if(sn(C)&&!E)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const D=sn(C)?C.join("/"):C;if(!D)if(k)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=D}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function DN(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function MN(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=DN(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(__(s))return 1;if(__(i))return-1}return i.length-s.length}function __(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const LN={type:0,value:""},FN=/[a-zA-Z0-9_]/;function UN(t){if(!t)return[[]];if(t==="/")return[[LN]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:l==="("?n=2:FN.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function BN(t,e,n){const s=xN(UN(t.path),n),i=Te(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function $N(t,e){const n=[],s=new Map;e=v_({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,d){const p=!d,m=VN(u);m.aliasOf=d&&d.record;const E=v_(e,u),k=[m];if("alias"in u){const P=typeof u.alias=="string"?[u.alias]:u.alias;for(const H of P)k.push(Te({},m,{components:d?d.record.components:m.components,path:H,aliasOf:d?d.record:m}))}let C,D;for(const P of k){const{path:H}=P;if(h&&H[0]!=="/"){const A=h.record.path,M=A[A.length-1]==="/"?"":"/";P.path=h.record.path+(H&&M+H)}if(C=BN(P,h,E),d?d.alias.push(C):(D=D||C,D!==C&&D.alias.push(C),p&&u.name&&!m_(C)&&o(u.name)),m.children){const A=m.children;for(let M=0;M<A.length;M++)r(A[M],C,d&&d.children[M])}d=d||C,(C.record.components&&Object.keys(C.record.components).length||C.record.name||C.record.redirect)&&l(C)}return D?()=>{o(D)}:Er}function o(u){if(y0(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&MN(u,n[h])>=0&&(u.record.path!==n[h].record.path||!b0(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!m_(u)&&s.set(u.record.name,u)}function c(u,h){let d,p={},m,E;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw Pi(1,{location:u});E=d.record.name,p=Te(g_(h.params,d.keys.filter(D=>!D.optional).map(D=>D.name)),u.params&&g_(u.params,d.keys.map(D=>D.name))),m=d.stringify(p)}else if("path"in u)m=u.path,d=n.find(D=>D.re.test(m)),d&&(p=d.parse(m),E=d.record.name);else{if(d=h.name?s.get(h.name):n.find(D=>D.re.test(h.path)),!d)throw Pi(1,{location:u,currentLocation:h});E=d.record.name,p=Te({},h.params,u.params),m=d.stringify(p)}const k=[];let C=d;for(;C;)k.unshift(C.record),C=C.parent;return{name:E,path:m,params:p,matched:k,meta:HN(k)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function g_(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function VN(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:jN(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function jN(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function m_(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function HN(t){return t.reduce((e,n)=>Te(e,n.meta),{})}function v_(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function b0(t,e){return e.children.some(n=>n===t||b0(t,n))}const w0=/#/g,WN=/&/g,zN=/\//g,qN=/=/g,KN=/\?/g,I0=/\+/g,GN=/%5B/g,YN=/%5D/g,C0=/%5E/g,XN=/%60/g,T0=/%7B/g,QN=/%7C/g,S0=/%7D/g,JN=/%20/g;function Bd(t){return encodeURI(""+t).replace(QN,"|").replace(GN,"[").replace(YN,"]")}function ZN(t){return Bd(t).replace(T0,"{").replace(S0,"}").replace(C0,"^")}function Ou(t){return Bd(t).replace(I0,"%2B").replace(JN,"+").replace(w0,"%23").replace(WN,"%26").replace(XN,"`").replace(T0,"{").replace(S0,"}").replace(C0,"^")}function ex(t){return Ou(t).replace(qN,"%3D")}function tx(t){return Bd(t).replace(w0,"%23").replace(KN,"%3F")}function nx(t){return t==null?"":tx(t).replace(zN,"%2F")}function Ua(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function sx(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(I0," "),o=r.indexOf("="),a=Ua(o<0?r:r.slice(0,o)),l=o<0?null:Ua(r.slice(o+1));if(a in e){let c=e[a];sn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function y_(t){let e="";for(let n in t){const s=t[n];if(n=ex(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(sn(s)?s.map(r=>r&&Ou(r)):[s&&Ou(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function ix(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=sn(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const rx=Symbol(""),E_=Symbol(""),$d=Symbol(""),Vd=Symbol(""),Pu=Symbol("");function nr(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Gn(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(Pi(4,{from:n,to:e})):h instanceof Error?a(h):ON(h)?a(Pi(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},c=t.call(s&&s.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function Rc(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(ox(a)){const c=(a.__vccOpts||a)[e];c&&i.push(Gn(c,n,s,r,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=hN(c)?c.default:c;r.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&Gn(d,n,s,r,o)()}))}}return i}function ox(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function b_(t){const e=Ft($d),n=Ft(Vd),s=Ee(()=>e.resolve(v(t.to))),i=Ee(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Oi.bind(null,u));if(d>-1)return d;const p=w_(l[c-2]);return c>1&&w_(u)===p&&h[h.length-1].path!==p?h.findIndex(Oi.bind(null,l[c-2])):d}),r=Ee(()=>i.value>-1&&cx(n.params,s.value.params)),o=Ee(()=>i.value>-1&&i.value===n.matched.length-1&&m0(n.params,s.value.params));function a(l={}){return lx(l)?e[v(t.replace)?"replace":"push"](v(t.to)).catch(Er):Promise.resolve()}return{route:s,href:Ee(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const ax=Ce({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:b_,setup(t,{slots:e}){const n=Ln(b_(t)),{options:s}=Ft($d),i=Ee(()=>({[I_(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[I_(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Ii("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),Xr=ax;function lx(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function cx(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!sn(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function w_(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const I_=(t,e,n)=>t??e??n,ux=Ce({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Ft(Pu),i=Ee(()=>t.route||s.value),r=Ft(E_,0),o=Ee(()=>{let c=v(r);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=Ee(()=>i.value.matched[o.value]);di(E_,Ee(()=>o.value+1)),di(rx,a),di(Pu,i);const l=We();return et(()=>[l.value,a.value,t.name],([c,u,h],[d,p,m])=>{u&&(u.instances[h]=c,p&&p!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!Oi(u,p)||!d)&&(u.enterCallbacks[h]||[]).forEach(E=>E(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return C_(n.default,{Component:d,route:c});const p=h.props[u],m=p?p===!0?c.params:typeof p=="function"?p(c):p:null,k=Ii(d,Te({},m,e,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return C_(n.default,{Component:k,route:c})||k}}});function C_(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const hx=ux;function dx(t){const e=$N(t.routes,t),n=t.parseQuery||sx,s=t.stringifyQuery||y_,i=t.history,r=nr(),o=nr(),a=nr(),l=WE(Wn);let c=Wn;ii&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Sc.bind(null,S=>""+S),h=Sc.bind(null,nx),d=Sc.bind(null,Ua);function p(S,z){let b,V;return y0(S)?(b=e.getRecordMatcher(S),V=z):V=S,e.addRoute(V,b)}function m(S){const z=e.getRecordMatcher(S);z&&e.removeRoute(z)}function E(){return e.getRoutes().map(S=>S.record)}function k(S){return!!e.getRecordMatcher(S)}function C(S,z){if(z=Te({},z||l.value),typeof S=="string"){const f=Ac(n,S,z.path),g=e.resolve({path:f.path},z),w=i.createHref(f.fullPath);return Te(f,g,{params:d(g.params),hash:Ua(f.hash),redirectedFrom:void 0,href:w})}let b;if("path"in S)b=Te({},S,{path:Ac(n,S.path,z.path).path});else{const f=Te({},S.params);for(const g in f)f[g]==null&&delete f[g];b=Te({},S,{params:h(S.params)}),z.params=h(z.params)}const V=e.resolve(b,z),ee=S.hash||"";V.params=u(d(V.params));const Ae=pN(s,Te({},S,{hash:ZN(ee),path:V.path})),ie=i.createHref(Ae);return Te({fullPath:Ae,hash:ee,query:s===y_?ix(S.query):S.query||{}},V,{redirectedFrom:void 0,href:ie})}function D(S){return typeof S=="string"?Ac(n,S,l.value.path):Te({},S)}function P(S,z){if(c!==S)return Pi(8,{from:z,to:S})}function H(S){return N(S)}function A(S){return H(Te(D(S),{replace:!0}))}function M(S){const z=S.matched[S.matched.length-1];if(z&&z.redirect){const{redirect:b}=z;let V=typeof b=="function"?b(S):b;return typeof V=="string"&&(V=V.includes("?")||V.includes("#")?V=D(V):{path:V},V.params={}),Te({query:S.query,hash:S.hash,params:"path"in V?{}:S.params},V)}}function N(S,z){const b=c=C(S),V=l.value,ee=S.state,Ae=S.force,ie=S.replace===!0,f=M(b);if(f)return N(Te(D(f),{state:typeof f=="object"?Te({},ee,f.state):ee,force:Ae,replace:ie}),z||b);const g=b;g.redirectedFrom=z;let w;return!Ae&&_N(s,V,b)&&(w=Pi(16,{to:g,from:V}),ht(V,V,!0,!1)),(w?Promise.resolve(w):L(g,V)).catch(T=>vn(T)?vn(T,2)?T:ze(T):Z(T,g,V)).then(T=>{if(T){if(vn(T,2))return N(Te({replace:ie},D(T.to),{state:typeof T.to=="object"?Te({},ee,T.to.state):ee,force:Ae}),z||g)}else T=ce(g,V,!0,ie,ee);return B(g,V,T),T})}function I(S,z){const b=P(S,z);return b?Promise.reject(b):Promise.resolve()}function L(S,z){let b;const[V,ee,Ae]=fx(S,z);b=Rc(V.reverse(),"beforeRouteLeave",S,z);for(const f of V)f.leaveGuards.forEach(g=>{b.push(Gn(g,S,z))});const ie=I.bind(null,S,z);return b.push(ie),ti(b).then(()=>{b=[];for(const f of r.list())b.push(Gn(f,S,z));return b.push(ie),ti(b)}).then(()=>{b=Rc(ee,"beforeRouteUpdate",S,z);for(const f of ee)f.updateGuards.forEach(g=>{b.push(Gn(g,S,z))});return b.push(ie),ti(b)}).then(()=>{b=[];for(const f of S.matched)if(f.beforeEnter&&!z.matched.includes(f))if(sn(f.beforeEnter))for(const g of f.beforeEnter)b.push(Gn(g,S,z));else b.push(Gn(f.beforeEnter,S,z));return b.push(ie),ti(b)}).then(()=>(S.matched.forEach(f=>f.enterCallbacks={}),b=Rc(Ae,"beforeRouteEnter",S,z),b.push(ie),ti(b))).then(()=>{b=[];for(const f of o.list())b.push(Gn(f,S,z));return b.push(ie),ti(b)}).catch(f=>vn(f,8)?f:Promise.reject(f))}function B(S,z,b){for(const V of a.list())V(S,z,b)}function ce(S,z,b,V,ee){const Ae=P(S,z);if(Ae)return Ae;const ie=z===Wn,f=ii?history.state:{};b&&(V||ie?i.replace(S.fullPath,Te({scroll:ie&&f&&f.scroll},ee)):i.push(S.fullPath,ee)),l.value=S,ht(S,z,b,ie),ze()}let ge;function ke(){ge||(ge=i.listen((S,z,b)=>{if(!mn.listening)return;const V=C(S),ee=M(V);if(ee){N(Te(ee,{replace:!0}),V).catch(Er);return}c=V;const Ae=l.value;ii&&IN(h_(Ae.fullPath,b.delta),Bl()),L(V,Ae).catch(ie=>vn(ie,12)?ie:vn(ie,2)?(N(ie.to,V).then(f=>{vn(f,20)&&!b.delta&&b.type===Yr.pop&&i.go(-1,!1)}).catch(Er),Promise.reject()):(b.delta&&i.go(-b.delta,!1),Z(ie,V,Ae))).then(ie=>{ie=ie||ce(V,Ae,!1),ie&&(b.delta&&!vn(ie,8)?i.go(-b.delta,!1):b.type===Yr.pop&&vn(ie,20)&&i.go(-1,!1)),B(V,Ae,ie)}).catch(Er)}))}let Se=nr(),_e=nr(),oe;function Z(S,z,b){ze(S);const V=_e.list();return V.length?V.forEach(ee=>ee(S,z,b)):console.error(S),Promise.reject(S)}function he(){return oe&&l.value!==Wn?Promise.resolve():new Promise((S,z)=>{Se.add([S,z])})}function ze(S){return oe||(oe=!S,ke(),Se.list().forEach(([z,b])=>S?b(S):z()),Se.reset()),S}function ht(S,z,b,V){const{scrollBehavior:ee}=t;if(!ii||!ee)return Promise.resolve();const Ae=!b&&CN(h_(S.fullPath,0))||(V||!b)&&history.state&&history.state.scroll||null;return es().then(()=>ee(S,z,Ae)).then(ie=>ie&&wN(ie)).catch(ie=>Z(ie,S,z))}const Qe=S=>i.go(S);let je;const $t=new Set,mn={currentRoute:l,listening:!0,addRoute:p,removeRoute:m,hasRoute:k,getRoutes:E,resolve:C,options:t,push:H,replace:A,go:Qe,back:()=>Qe(-1),forward:()=>Qe(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:_e.add,isReady:he,install(S){const z=this;S.component("RouterLink",Xr),S.component("RouterView",hx),S.config.globalProperties.$router=z,Object.defineProperty(S.config.globalProperties,"$route",{enumerable:!0,get:()=>v(l)}),ii&&!je&&l.value===Wn&&(je=!0,H(i.location).catch(ee=>{}));const b={};for(const ee in Wn)b[ee]=Ee(()=>l.value[ee]);S.provide($d,z),S.provide(Vd,Ln(b)),S.provide(Pu,l);const V=S.unmount;$t.add(S),S.unmount=function(){$t.delete(S),$t.size<1&&(c=Wn,ge&&ge(),ge=null,l.value=Wn,je=!1,oe=!1),V()}}};return mn}function ti(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function fx(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>Oi(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Oi(c,l))||i.push(l))}return[n,s,i]}function px(){return Ft(Vd)}const _x="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAClElEQVR4nO2aTUtVQRiAJwnSY6IIWv2IFPrYuMlFhrTLCFq1rVWBRBK0yED7C7luFYFurE2YFVFpFkS5DCGrC27OxiIte2LwlUa9FffemXzPnXlguPfcC3PO+8znmRljEolEIpFIJHYI4CQwC6zgh1XgNXDaaAfoA37Kg38E3ntIHxwZA0YzwLQ8qNfSAk6I2FdGM8ASsBwob1ujVo1mgNymQHkv2KpliiYAmKiy83taLwJyYK3Cju/71mCLLiCvMJ+FogooAV+BBrlukOtSLALuS/u9DLQAV+T6XiwCDpeZAX4DDkUhwAJ0AXeAt/LZZSqk0AJ8oFoAsAcYBt7YqSlwA2iMScC4tG07N/8h3+3bX1vdCwCOSMDzwAGgA3gkv730JUGzgHMS7LDzW7PzFuhFgmYBPRLoOyALJUGzgF3AAwn0YSgJagVYgFZgRgJ9Aux1/suAKfnPLmO1G40CWJ+j9wKXgKEq0s2NNzYp9SafNSGoAKBNSs4nm5bAykho0iRgTB7sGXC1yhrgpvN2clTmPs3OEDmqScBn4IvbdkMBdMpiyLxGAS01Z/bve+3TKOCWVMvnnprAhT80gczpB0Y0CWgFHnvuBAf+EryuTtAZBo8BFwMMg5nqYbBW6mIiVAvApFPymc+SVy8AOOqUbpDgtQs4K0FeCxW8dgEHJVC7HLZfxnmvwasWYAFuS8BrkuJZErMAu2XDw44Ec8D1qBZF/weFFgB0A3dlY8R+dkcjgPJbYyvRbI3xe3N0UNYD7CZpVJujpdi3x/PYD0jk6YgM22rAxstTpUzVRQ3wRVEELMV+UHJaqu8Zz/n2F+Wo7HHnsPQnT4elF51+4ZTRDuul9cLzcfm5QgSfSCQSiUTC7CS/AM1L9S7V4a3YAAAAAElFTkSuQmCC",gx="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA0ElEQVR4nO3TQQqCQBTG8TlESt6jNhXUebxIHSDPYyTtWuXCO9S2/V+EgUCc54i+ocIPBnzK88cwb4z5pQAxcLcrDoVGwINPKiAJsdPSgmXrOQ6x0wpYdrxL1FHj/paoo2o4Hqga/r8Bbuin6IKDxHwTXARwr65zzoWmDbAdULdzkQYsc3W1j6Sv7kgmwakinErwQRHeS/BCEY6csG18KsAvEZUmeySc+8BnR3NzVXYDar+J9pnsEUlNX4C1ArzqhS1+At4TgM0/jl7onDlmotRKvK0vr54p5gAAAABJRU5ErkJggg==",mx=t=>(Jr("data-v-4e65f1fc"),t=t(),Zr(),t),vx={class:"product"},yx=["src"],Ex={class:"product__info"},bx={class:"product__title"},wx={class:"product__price"},Ix={class:"product__amount"},Cx={class:"ctrl-amount"},Tx=["disabled"],Sx={class:"amount"},Ax={class:"amount-all"},Rx=mx(()=>W("span",null,"Додати в кошик",-1)),kx=["src"],Ox=Ce({__name:"ProductModal",setup(t){const e=Ul();function n(){e.order.sumProducts&&e.addToBasket()}return(s,i)=>Ks((Q(),le("div",{class:"product-modal-wrapper",onClick:i[3]||(i[3]=(...r)=>v(e).setProductModal&&v(e).setProductModal(...r))},[W("div",{onClick:i[2]||(i[2]=il(()=>{},["stop"])),class:"product-modal"},[(Q(!0),le(Ye,null,to(v(e).order.currentProduct,r=>(Q(),le("div",vx,[W("img",{src:r.productCover,class:"product__photo"},null,8,yx),W("div",Ex,[W("h3",bx,Oe(r.productName),1),W("span",wx,Oe(r.productPrice)+" грн",1)])]))),256)),W("div",Ix,[W("div",Cx,[W("button",{disabled:!v(e).order.amountProducts,onClick:i[0]||(i[0]=(...r)=>v(e).removeProduct&&v(e).removeProduct(...r)),class:"amount-btn"}," Думаю досить ",8,Tx),W("span",Sx,Oe(v(e).order.amountProducts)+" кіл-ть",1),W("button",{onClick:i[1]||(i[1]=(...r)=>v(e).addProduct&&v(e).addProduct(...r)),class:"amount-btn"}," Хочу ще ")]),W("span",Ax," Вартість замовлення - "+Oe(v(e).order.sumProducts)+" грн ",1)]),W("button",{onClick:n,class:"basket"},[Rx,W("img",{class:"basket-img",src:v(gx),alt:""},null,8,kx)])])],512)),[[Li,v(e).order.isProductModalVisible]])}});const Px=$e(Ox,[["__scopeId","data-v-4e65f1fc"]]),A0=so("adminStore",()=>{const t=_s();async function e(s){try{const i={contentType:"image/jpeg"},r=GR(aN,"images/"+s.productCover.name),o=qR(r,s.productCover,i);await new Promise((c,u)=>{o.on("state_changed",null,u,c)});const a=await KR(o.snapshot.ref),l=await qP(ea(ta,"products/"));await Dd(ea(ta,`products/${l.key}`),{id:l.key,productName:s.productName,productDescription:s.productDescription,productPrice:s.productPrice,productWeight:s.productWeight,product:s.product,productCover:a}),t.toastify("success","Товар додано!")}catch{t.toastify("error","Сталася помилка, спробуйте пізніше!")}}async function n(s){try{await KP(ea(ta,`products/${s.id}`)),t.toastify("success","Товар видалено")}catch{t.toastify("error","Сталася помилка, спробуйте пізніше!")}}return{uploadProduct:e,removeProduct:n}}),Nx=["src"],xx={class:"product__title"},Dx={class:"product__description"},Mx={class:"price-and-buy"},Lx={class:"price-and-buy__price"},Fx=["onClick"],Ux=["onClick"],Bx=Ce({__name:"Product",props:{products:null},setup(t){const e=Ul(),n=Ki(),s=A0();function i(r){e.setProductModal(),e.setCurrentProduct(r)}return(r,o)=>(Q(!0),le(Ye,null,to(t.products,a=>(Q(),le("div",{class:"product",key:a.id},[W("img",{class:"product__img",src:a.productCover,alt:""},null,8,Nx),W("h3",xx,Oe(a.productName),1),W("div",Dx,[W("p",null,Oe(a.productDescription),1)]),W("div",Mx,[W("span",Lx,Oe(a.productPrice)+" грн.",1),W("span",null,Oe(a.productWeight)+" г",1),v(n).user.email!=="caulfieldd17@gmail.com"?(Q(),le("button",{key:0,onClick:l=>i(a),class:"price-and-buy__buy"}," Замовити ",8,Fx)):(Q(),le("button",{key:1,onClick:l=>v(s).removeProduct(a),class:"price-and-buy__buy"}," Видалити ",8,Ux))])]))),128))}});const sr=$e(Bx,[["__scopeId","data-v-62fcbc35"]]),$x=t=>(Jr("data-v-7bafaf74"),t=t(),Zr(),t),Vx={class:"products-list-wrapper"},jx={key:0,class:"without-products"},Hx=$x(()=>W("p",null,"Продукти не знайдено",-1)),Wx=[Hx],zx=Ce({__name:"ProductsList",setup(t){const e=_s();return(n,s)=>(Q(),le(Ye,null,[W("div",Vx,[J(sr,{products:v(e).main.pizza},null,8,["products"]),v(e).main.checkedProducts.includes("burgers")?(Q(),Xt(sr,{key:0,products:v(e).main.burgers},null,8,["products"])):cn("",!0),v(e).main.checkedProducts.includes("roles")?(Q(),Xt(sr,{key:1,products:v(e).main.roles},null,8,["products"])):cn("",!0),v(e).main.checkedProducts.includes("salads")?(Q(),Xt(sr,{key:2,products:v(e).main.salads},null,8,["products"])):cn("",!0),v(e).main.checkedProducts.includes("drinks")?(Q(),Xt(sr,{key:3,products:v(e).main.drinks},null,8,["products"])):cn("",!0)]),v(e).main.error?(Q(),le("div",jx,Wx)):cn("",!0)],64))}});const qx=$e(zx,[["__scopeId","data-v-7bafaf74"]]),R0=t=>(Jr("data-v-e95d9687"),t=t(),Zr(),t),Kx=["for"],Gx=["id","value","onUpdate:modelValue"],Yx=R0(()=>W("li",{class:"item"},[W("span",null,"Про нас")],-1)),Xx=R0(()=>W("li",{class:"item"},[W("span",null,"Робота")],-1)),Qx=[Yx,Xx],Jx=Ce({__name:"ProductsMenuList",setup(t){const e=_s(),{main:n}=ah(e),{fetchProducts:s,setCheckedProducts:i}=e,r=We([{id:1,value:"burgers",product:"Бургери",checked:!1},{id:2,value:"roles",product:"Роли",checked:!1},{id:3,value:"salads",product:"Салати",checked:!1},{id:4,value:"drinks",product:"Напої",checked:!1}]),o=Ee(()=>{let a=[];return r.value.forEach(l=>{l.checked&&a.push(l.value)}),a});return _g(()=>{i(o.value)}),qs(()=>{s()}),(a,l)=>(Q(),le(Ye,null,[W("div",null,[W("h3",{class:_t(["title-list",{"active-title-list":v(n).isShowMenu}])}," Товари ",2),W("ul",{class:_t(["main-list",{"active-main-list":v(n).isShowMenu}])},[(Q(!0),le(Ye,null,to(r.value,c=>(Q(),le("li",{class:"main-item",key:c.id},[W("label",{for:c.value},[Ks(W("input",{type:"checkbox",id:c.value,value:c.value,"onUpdate:modelValue":u=>c.checked=u},null,8,Gx),[[yw,c.checked]]),en(" "+Oe(c.product),1)],8,Kx)]))),128))],2)]),W("ul",{class:_t(["list",{"active-list":v(n).isShowMenu}])},Qx,2)],64))}});const Zx=$e(Jx,[["__scopeId","data-v-e95d9687"]]),k0="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA+ElEQVR4nO3YO0oEQRQF0IMgIiYaGmqkK3ABugHNXIVbcAuGpuIG3IAfUAxE9zChmWAyoPhkoE0GBHukne7nO3Djrlv9qypKKaWUUv69Szxhe+gzEU1ecShBkWhyhmUJigQesSlBkcALDiQoMskHTrBo4EW+coN1CYoEnrEnQZHAO46xMOvF7lpesOtcYK3rWfurjLCToUhgjKMMRaLJOVYyFAncVxHzvwuR5dEaZ3jZR7N8fm97MPCY+iGu6pk2Bd5+u0TpUptF464e+0mJ66Ev41NsrCZb3X0D8t3hw4aBiamcYskARZYDuis8YGveAymllFJK0b1PWPYJBNI2YFUAAAAASUVORK5CYII=",e1=["src"],t1=Ce({__name:"MainMenu",setup(t){const e=_s(),{main:n}=ah(e),{setShowMenu:s}=e;return(i,r)=>(Q(),le("div",{onClick:r[1]||(r[1]=il(()=>{},["stop"])),class:_t(["menu",{"menu-active":v(n).isShowMenu}])},[W("img",{class:_t(["menu-arrow",{"menu-arrow_active":v(n).isShowMenu}]),onClick:r[0]||(r[0]=o=>v(s)(!v(n).isShowMenu)),src:v(k0),alt:""},null,10,e1),J(Zx)],2))}});const n1=$e(t1,[["__scopeId","data-v-e541aa98"]]),s1=t=>(Jr("data-v-44303a1e"),t=t(),Zr(),t),i1={key:0,class:"order-list"},r1=["src"],o1={class:"order__product-info"},a1={class:"order__product-name"},l1={class:"order__product-description"},c1={class:"order__product-price"},u1={class:"order__order-info"},h1={class:"order__amount-products"},d1={class:"order__price-products"},f1={class:"order-sum-container"},p1={class:"order-dum"},_1={key:1,class:"empty-basket"},g1=s1(()=>W("p",null,"Тут поки порожньо, зробіть замовлення!",-1)),m1=Ce({__name:"BasketModal",setup(t){const e=Ud(),n=Ul();return(s,i)=>Ks((Q(),le("div",{onClick:i[3]||(i[3]=(...r)=>v(e).setBasketModal&&v(e).setBasketModal(...r)),class:"basket-modal-wrapper"},[W("div",{onClick:i[2]||(i[2]=il(()=>{},["stop"])),class:"basket-modal"},[v(n).order.order.length?(Q(),le("div",i1,[(Q(!0),le(Ye,null,to(v(n).order.order,r=>(Q(),le("div",{class:"order",key:r.id},[W("img",{src:r.productCover,class:"order__product-photo"},null,8,r1),W("div",o1,[W("h3",a1,Oe(r.productName),1),W("p",l1,Oe(r.productDescription),1),W("span",c1,Oe(r.productPrice)+" грн ",1)]),W("div",u1,[W("span",h1,"Кількість - "+Oe(r.amountProducts)+" шт.",1),W("span",d1,"Вартість за "+Oe(r.amountProducts)+" шт. - "+Oe(r.sumProducts)+" грн.",1)])]))),128)),W("div",f1,[W("span",p1,"Вартість замовлення - "+Oe(v(e).basket.orderSum)+" грн.",1),W("button",{onClick:i[0]||(i[0]=(...r)=>v(e).orderConfirm&&v(e).orderConfirm(...r)),class:"confirm-order-btn"}," Замовлення підтверджую ")])])):(Q(),le("div",_1,[g1,W("button",{onClick:i[1]||(i[1]=(...r)=>v(e).setBasketModal&&v(e).setBasketModal(...r)),class:"close-basket-btn"}," Закрити ")]))])],512)),[[Li,v(e).basket.isBasketModalVisible]])}});const v1=$e(m1,[["__scopeId","data-v-44303a1e"]]),y1=["src","onClick"],E1=Ce({__name:"MainPage",setup(t){const e=We(window.innerWidth),n=We(0),s=()=>{n.value=window.pageYOffset},i=()=>{e.value=window.innerWidth},r=()=>{window.scrollTo({top:0,behavior:"smooth"})};qs(()=>{window.addEventListener("resize",i),window.addEventListener("scroll",s),i()}),eo(()=>{window.removeEventListener("resize",i),window.removeEventListener("scroll",s)}),et(e,()=>{e.value>767&&l(!1)});const o=_s(),{main:a}=ah(o),{setShowMenu:l}=o;return(c,u)=>(Q(),le("div",{class:_t(["wrapper",{"menu-active":v(a).isShowMenu}]),onClick:u[0]||(u[0]=h=>v(l)(!1))},[W("img",{class:_t(["sroll-up-img",{"sroll-up-img_active":n.value>150}]),src:v(k0),onClick:il(r,["stop"]),alt:""},null,10,y1),J(n1),J(qx),J(Px),J(v1)],2))}});const b1=$e(E1,[["__scopeId","data-v-7542372c"]]);/**
  * vee-validate v4.8.4
  * (c) 2023 Abdelrahman Awad
  * @license MIT
  */function Mn(t){return typeof t=="function"}function wr(t){return t==null}const zs=t=>t!==null&&!!t&&typeof t=="object"&&!Array.isArray(t);function O0(t){return Number(t)>=0}function w1(t){const e=parseFloat(t);return isNaN(e)?t:e}const I1={};function C1(t){return I1[t]}const Oo=Symbol("vee-validate-form"),T1=Symbol("vee-validate-field-instance"),Ba=Symbol("Default empty value"),S1=typeof window<"u";function Nu(t){return Mn(t)&&!!t.__locatorRef}function as(t){return!!t&&Mn(t.parse)&&t.__type==="VVTypedSchema"}function Ir(t){return!!t&&Mn(t.validate)}function Ni(t){return t==="checkbox"||t==="radio"}function A1(t){return zs(t)||Array.isArray(t)}function P0(t){return Array.isArray(t)?t.length===0:zs(t)&&Object.keys(t).length===0}function $l(t){return/^\[.+\]$/i.test(t)}function R1(t){return N0(t)&&t.multiple}function N0(t){return t.tagName==="SELECT"}function k1(t,e){const n=![!1,null,void 0,0].includes(e.multiple)&&!Number.isNaN(e.multiple);return t==="select"&&"multiple"in e&&n}function O1(t,e){return!k1(t,e)&&e.type!=="file"&&!Ni(e.type)}function x0(t){return jd(t)&&t.target&&"submit"in t.target}function jd(t){return t?!!(typeof Event<"u"&&Mn(Event)&&t instanceof Event||t&&t.srcElement):!1}function T_(t,e){return e in t&&t[e]!==Ba}function Ze(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;var n,s,i;if(Array.isArray(t)){if(n=t.length,n!=e.length)return!1;for(s=n;s--!==0;)if(!Ze(t[s],e[s]))return!1;return!0}if(t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(s of t.entries())if(!e.has(s[0]))return!1;for(s of t.entries())if(!Ze(s[1],e.get(s[0])))return!1;return!0}if(S_(t)&&S_(e))return!(t.size!==e.size||t.name!==e.name||t.lastModified!==e.lastModified||t.type!==e.type);if(t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(s of t.entries())if(!e.has(s[0]))return!1;return!0}if(ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(n=t.length,n!=e.length)return!1;for(s=n;s--!==0;)if(t[s]!==e[s])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===e.toString();if(i=Object.keys(t),n=i.length,n!==Object.keys(e).length)return!1;for(s=n;s--!==0;)if(!Object.prototype.hasOwnProperty.call(e,i[s]))return!1;for(s=n;s--!==0;){var r=i[s];if(!Ze(t[r],e[r]))return!1}return!0}return t!==t&&e!==e}function S_(t){return S1?t instanceof File:!1}function A_(t,e,n){typeof n.value=="object"&&(n.value=Re(n.value)),!n.enumerable||n.get||n.set||!n.configurable||!n.writable||e==="__proto__"?Object.defineProperty(t,e,n):t[e]=n.value}function Re(t){if(typeof t!="object")return t;var e=0,n,s,i,r=Object.prototype.toString.call(t);if(r==="[object Object]"?i=Object.create(t.__proto__||null):r==="[object Array]"?i=Array(t.length):r==="[object Set]"?(i=new Set,t.forEach(function(o){i.add(Re(o))})):r==="[object Map]"?(i=new Map,t.forEach(function(o,a){i.set(Re(a),Re(o))})):r==="[object Date]"?i=new Date(+t):r==="[object RegExp]"?i=new RegExp(t.source,t.flags):r==="[object DataView]"?i=new t.constructor(Re(t.buffer)):r==="[object ArrayBuffer]"?i=t.slice(0):r.slice(-6)==="Array]"&&(i=new t.constructor(t)),i){for(s=Object.getOwnPropertySymbols(t);e<s.length;e++)A_(i,s[e],Object.getOwnPropertyDescriptor(t,s[e]));for(e=0,s=Object.getOwnPropertyNames(t);e<s.length;e++)Object.hasOwnProperty.call(i,n=s[e])&&i[n]===t[n]||A_(i,n,Object.getOwnPropertyDescriptor(t,n))}return i||t}function Hd(t){return $l(t)?t.replace(/\[|\]/gi,""):t}function qe(t,e,n){return t?$l(e)?t[Hd(e)]:(e||"").split(/\.|\[(\d+)\]/).filter(Boolean).reduce((i,r)=>A1(i)&&r in i?i[r]:n,t):n}function qn(t,e,n){if($l(e)){t[Hd(e)]=n;return}const s=e.split(/\.|\[(\d+)\]/).filter(Boolean);let i=t;for(let r=0;r<s.length;r++){if(r===s.length-1){i[s[r]]=n;return}(!(s[r]in i)||wr(i[s[r]]))&&(i[s[r]]=O0(s[r+1])?[]:{}),i=i[s[r]]}}function kc(t,e){if(Array.isArray(t)&&O0(e)){t.splice(Number(e),1);return}zs(t)&&delete t[e]}function zo(t,e){if($l(e)){delete t[Hd(e)];return}const n=e.split(/\.|\[(\d+)\]/).filter(Boolean);let s=t;for(let r=0;r<n.length;r++){if(r===n.length-1){kc(s,n[r]);break}if(!(n[r]in s)||wr(s[n[r]]))break;s=s[n[r]]}const i=n.map((r,o)=>qe(t,n.slice(0,o).join(".")));for(let r=i.length-1;r>=0;r--)if(P0(i[r])){if(r===0){kc(t,n[0]);continue}kc(i[r-1],n[r-1])}}function ot(t){return Object.keys(t)}function Wd(t,e=void 0){const n=no();return(n==null?void 0:n.provides[t])||Ft(t,e)}function xu(t,e,n){if(Array.isArray(t)){const s=[...t],i=s.findIndex(r=>Ze(r,e));return i>=0?s.splice(i,1):s.push(e),s}return Ze(t,e)?n:e}function R_(t,e=0){let n=null,s=[];return function(...i){return n&&window.clearTimeout(n),n=window.setTimeout(()=>{const r=t(...i);s.forEach(o=>o(r)),s=[]},e),new Promise(r=>s.push(r))}}function P1(t,e){return zs(e)&&e.number?w1(t):t}function Du(t,e){let n;return async function(...i){const r=t(...i);n=r;const o=await r;return r!==n||(n=void 0,e(o,i)),o}}function N1({get:t,set:e}){const n=We(Re(t()));return et(t,s=>{Ze(s,n.value)||(n.value=Re(s))},{deep:!0}),et(n,s=>{Ze(s,t())||e(Re(s))},{deep:!0}),n}function x1(t){return Mn(t)?t():v(t)}function D1(t){return Ee(()=>x1(t))}const Vl=(t,e,n)=>e.slots.default?typeof t=="string"||!t?e.slots.default(n()):{default:()=>{var s,i;return(i=(s=e.slots).default)===null||i===void 0?void 0:i.call(s,n())}}:e.slots.default;function Oc(t){if(D0(t))return t._value}function D0(t){return"_value"in t}function zd(t){if(!jd(t))return t;const e=t.target;if(Ni(e.type)&&D0(e))return Oc(e);if(e.type==="file"&&e.files){const n=Array.from(e.files);return e.multiple?n:n[0]}if(R1(e))return Array.from(e.options).filter(n=>n.selected&&!n.disabled).map(Oc);if(N0(e)){const n=Array.from(e.options).find(s=>s.selected);return n?Oc(n):e.value}return e.value}function M0(t){const e={};return Object.defineProperty(e,"_$$isNormalized",{value:!0,writable:!1,enumerable:!1,configurable:!1}),t?zs(t)&&t._$$isNormalized?t:zs(t)?Object.keys(t).reduce((n,s)=>{const i=M1(t[s]);return t[s]!==!1&&(n[s]=k_(i)),n},e):typeof t!="string"?e:t.split("|").reduce((n,s)=>{const i=L1(s);return i.name&&(n[i.name]=k_(i.params)),n},e):e}function M1(t){return t===!0?[]:Array.isArray(t)||zs(t)?t:[t]}function k_(t){const e=n=>typeof n=="string"&&n[0]==="@"?F1(n.slice(1)):n;return Array.isArray(t)?t.map(e):t instanceof RegExp?[t]:Object.keys(t).reduce((n,s)=>(n[s]=e(t[s]),n),{})}const L1=t=>{let e=[];const n=t.split(":")[0];return t.includes(":")&&(e=t.split(":").slice(1).join(":").split(",")),{name:n,params:e}};function F1(t){const e=n=>qe(n,t)||n[t];return e.__locatorRef=t,e}function U1(t){return Array.isArray(t)?t.filter(Nu):ot(t).filter(e=>Nu(t[e])).map(e=>t[e])}const B1={generateMessage:({field:t})=>`${t} is not valid.`,bails:!0,validateOnBlur:!0,validateOnChange:!0,validateOnInput:!1,validateOnModelUpdate:!0};let $1=Object.assign({},B1);const qd=()=>$1;async function L0(t,e,n={}){const s=n==null?void 0:n.bails,i={name:(n==null?void 0:n.name)||"{field}",rules:e,label:n==null?void 0:n.label,bails:s??!0,formData:(n==null?void 0:n.values)||{}},o=(await V1(i,t)).errors;return{errors:o,valid:!o.length}}async function V1(t,e){if(as(t.rules)||Ir(t.rules))return H1(e,t.rules);if(Mn(t.rules)||Array.isArray(t.rules)){const o={field:t.label||t.name,name:t.name,label:t.label,form:t.formData,value:e},a=Array.isArray(t.rules)?t.rules:[t.rules],l=a.length,c=[];for(let u=0;u<l;u++){const h=a[u],d=await h(e,o);if(typeof d!="string"&&d)continue;const m=typeof d=="string"?d:U0(o);if(c.push(m),t.bails)return{errors:c}}return{errors:c}}const n=Object.assign(Object.assign({},t),{rules:M0(t.rules)}),s=[],i=Object.keys(n.rules),r=i.length;for(let o=0;o<r;o++){const a=i[o],l=await W1(n,e,{name:a,params:n.rules[a]});if(l.error&&(s.push(l.error),t.bails))return{errors:s}}return{errors:s}}function j1(t){return!!t&&t.name==="ValidationError"}function F0(t){return{__type:"VVTypedSchema",async parse(n){var s;try{return{output:await t.validate(n,{abortEarly:!1}),errors:[]}}catch(i){if(!j1(i))throw i;if(!(!((s=i.inner)===null||s===void 0)&&s.length)&&i.errors.length)return{errors:[{path:i.path,errors:i.errors}]};const r=i.inner.reduce((o,a)=>{const l=a.path||"";return o[l]||(o[l]={errors:[],path:l}),o[l].errors.push(...a.errors),o},{});return{errors:Object.values(r)}}}}}async function H1(t,e){const s=await(as(e)?e:F0(e)).parse(t),i=[];for(const r of s.errors)r.errors.length&&i.push(...r.errors);return{errors:i}}async function W1(t,e,n){const s=C1(n.name);if(!s)throw new Error(`No such validator '${n.name}' exists.`);const i=z1(n.params,t.formData),r={field:t.label||t.name,name:t.name,label:t.label,value:e,form:t.formData,rule:Object.assign(Object.assign({},n),{params:i})},o=await s(e,i,r);return typeof o=="string"?{error:o}:{error:o?void 0:U0(r)}}function U0(t){const e=qd().generateMessage;return e?e(t):"Field is invalid"}function z1(t,e){const n=s=>Nu(s)?s(e):s;return Array.isArray(t)?t.map(n):Object.keys(t).reduce((s,i)=>(s[i]=n(t[i]),s),{})}async function q1(t,e){const s=await(as(t)?t:F0(t)).parse(e),i={},r={};for(const o of s.errors){const a=o.errors,l=(o.path||"").replace(/\["(\d+)"\]/g,(c,u)=>`[${u}]`);i[l]={valid:!a.length,errors:a},a.length&&(r[l]=a[0])}return{valid:!s.errors.length,results:i,errors:r,values:s.value}}async function K1(t,e,n){const i=ot(t).map(async c=>{var u,h,d;const p=(u=n==null?void 0:n.names)===null||u===void 0?void 0:u[c],m=await L0(qe(e,c),t[c],{name:(p==null?void 0:p.name)||c,label:p==null?void 0:p.label,values:e,bails:(d=(h=n==null?void 0:n.bailsMap)===null||h===void 0?void 0:h[c])!==null&&d!==void 0?d:!0});return Object.assign(Object.assign({},m),{path:c})});let r=!0;const o=await Promise.all(i),a={},l={};for(const c of o)a[c.path]={valid:c.valid,errors:c.errors},c.valid||(r=!1,l[c.path]=c.errors[0]);return{valid:r,results:a,errors:l}}let O_=0;function G1(t,e){const{value:n,initialValue:s,setInitialValue:i}=B0(t,e.modelValue,e.form),{errorMessage:r,errors:o,setErrors:a}=X1(t,e.form),l=Y1(n,s,o),c=O_>=Number.MAX_SAFE_INTEGER?0:++O_;function u(h){var d;"value"in h&&(n.value=h.value),"errors"in h&&a(h.errors),"touched"in h&&(l.touched=(d=h.touched)!==null&&d!==void 0?d:l.touched),"initialValue"in h&&i(h.initialValue)}return{id:c,path:t,value:n,initialValue:s,meta:l,errors:o,errorMessage:r,setState:u}}function B0(t,e,n){const s=We(v(e));function i(){return n?qe(n.meta.value.initialValues,v(t),v(s)):v(s)}function r(c){if(!n){s.value=c;return}n.stageInitialValue(v(t),c,!0)}const o=Ee(i);if(!n)return{value:We(i()),initialValue:o,setInitialValue:r};const a=e?v(e):qe(n.values,v(t),v(o));return n.stageInitialValue(v(t),a,!0),{value:Ee({get(){return qe(n.values,v(t))},set(c){n.setFieldValue(v(t),c)}}),initialValue:o,setInitialValue:r}}function Y1(t,e,n){const s=Ln({touched:!1,pending:!1,valid:!0,validated:!!v(n).length,initialValue:Ee(()=>v(e)),dirty:Ee(()=>!Ze(v(t),v(e)))});return et(n,i=>{s.valid=!i.length},{immediate:!0,flush:"sync"}),s}function X1(t,e){function n(i){return i?Array.isArray(i)?i:[i]:[]}if(!e){const i=We([]);return{errors:i,errorMessage:Ee(()=>i.value[0]),setErrors:r=>{i.value=n(r)}}}const s=Ee(()=>e.errorBag.value[v(t)]||[]);return{errors:s,errorMessage:Ee(()=>s.value[0]),setErrors:i=>{e.setFieldErrorBag(v(t),n(i))}}}function jl(t,e,n){return Ni(n==null?void 0:n.type)?Z1(t,e,n):$0(t,e,n)}function $0(t,e,n){const{initialValue:s,validateOnMount:i,bails:r,type:o,checkedValue:a,label:l,validateOnValueUpdate:c,uncheckedValue:u,controlled:h,keepValueOnUnmount:d,modelPropName:p,syncVModel:m,form:E}=Q1(n),k=h?Wd(Oo):void 0,C=E||k,D=D1(t);let P=!1;const{id:H,value:A,initialValue:M,meta:N,setState:I,errors:L,errorMessage:B}=G1(D,{modelValue:s,form:C});m&&eD({value:A,prop:p,handleChange:Z});const ce=()=>{N.touched=!0},ge=Ee(()=>{let b=v(e);const V=v(C==null?void 0:C.schema);return V&&!Ir(V)&&!as(V)&&(b=J1(V,v(D))||b),Ir(b)||as(b)||Mn(b)||Array.isArray(b)?b:M0(b)});async function ke(b){var V,ee;return C!=null&&C.validateSchema?(V=(await C.validateSchema(b)).results[v(D)])!==null&&V!==void 0?V:{valid:!0,errors:[]}:L0(A.value,ge.value,{name:v(D),label:v(l),values:(ee=C==null?void 0:C.values)!==null&&ee!==void 0?ee:{},bails:r})}const Se=Du(async()=>(N.pending=!0,N.validated=!0,ke("validated-only")),b=>(P&&(b.valid=!0,b.errors=[]),I({errors:b.errors}),N.pending=!1,b)),_e=Du(async()=>ke("silent"),b=>(P&&(b.valid=!0),N.valid=b.valid,b));function oe(b){return(b==null?void 0:b.mode)==="silent"?_e():Se()}function Z(b,V=!0){const ee=zd(b);A.value=ee,!c&&V&&Se()}qs(()=>{if(i)return Se();(!C||!C.validateSchema)&&_e()});function he(b){N.touched=b}let ze,ht=Re(A.value);function Qe(){ze=et(A,(b,V)=>{if(Ze(b,V)&&Ze(b,ht))return;(c?Se:_e)(),ht=Re(b)},{deep:!0})}Qe();function je(b){var V;ze==null||ze();const ee=b&&"value"in b?b.value:M.value;I({value:Re(ee),initialValue:Re(ee),touched:(V=b==null?void 0:b.touched)!==null&&V!==void 0?V:!1,errors:(b==null?void 0:b.errors)||[]}),N.pending=!1,N.validated=!1,_e(),es(()=>{Qe()})}function $t(b){A.value=b}function mn(b){I({errors:Array.isArray(b)?b:[b]})}const S={id:H,name:D,label:l,value:A,meta:N,errors:L,errorMessage:B,type:o,checkedValue:a,uncheckedValue:u,bails:r,keepValueOnUnmount:d,resetField:je,handleReset:()=>je(),validate:oe,handleChange:Z,handleBlur:ce,setState:I,setTouched:he,setErrors:mn,setValue:$t};if(di(T1,S),xe(e)&&typeof v(e)!="function"&&et(e,(b,V)=>{Ze(b,V)||(N.validated?Se():_e())},{deep:!0}),!C)return S;C.register(S),eo(()=>{P=!0,C.unregister(S)});const z=Ee(()=>{const b=ge.value;return!b||Mn(b)||Ir(b)||as(b)||Array.isArray(b)?{}:Object.keys(b).reduce((V,ee)=>{const Ae=U1(b[ee]).map(ie=>ie.__locatorRef).reduce((ie,f)=>{const g=qe(C.values,f)||C.values[f];return g!==void 0&&(ie[f]=g),ie},{});return Object.assign(V,Ae),V},{})});return et(z,(b,V)=>{if(!Object.keys(b).length)return;!Ze(b,V)&&(N.validated?Se():_e())}),S}function Q1(t){var e;const n=()=>({initialValue:void 0,validateOnMount:!1,bails:!0,label:void 0,validateOnValueUpdate:!0,keepValueOnUnmount:void 0,modelPropName:"modelValue",syncVModel:!0,controlled:!0}),i=((e=t==null?void 0:t.syncVModel)!==null&&e!==void 0?e:!0)&&!("initialValue"in(t||{}))?Mu(no(),(t==null?void 0:t.modelPropName)||"modelValue"):t==null?void 0:t.initialValue;if(!t)return Object.assign(Object.assign({},n()),{initialValue:i});const r="valueProp"in t?t.valueProp:t.checkedValue,o="standalone"in t?!t.standalone:t.controlled;return Object.assign(Object.assign(Object.assign({},n()),t||{}),{initialValue:i,controlled:o??!0,checkedValue:r})}function J1(t,e){if(t)return t[e]}function Z1(t,e,n){const s=n!=null&&n.standalone?void 0:Wd(Oo),i=n==null?void 0:n.checkedValue,r=n==null?void 0:n.uncheckedValue;function o(a){const l=a.handleChange,c=Ee(()=>{const h=v(a.value),d=v(i);return Array.isArray(h)?h.findIndex(p=>Ze(p,d))>=0:Ze(d,h)});function u(h,d=!0){var p;if(c.value===((p=h==null?void 0:h.target)===null||p===void 0?void 0:p.checked)){d&&a.validate();return}let m=zd(h);s||(m=xu(v(a.value),v(i),v(r))),l(m,d)}return Object.assign(Object.assign({},a),{checked:c,checkedValue:i,uncheckedValue:r,handleChange:u})}return o($0(t,e,n))}function eD({prop:t,value:e,handleChange:n}){const s=no();if(!s)return;const i=t||"modelValue",r=`update:${i}`;i in s.props&&(et(e,o=>{Ze(o,Mu(s,i))||s.emit(r,o)}),et(()=>Mu(s,i),o=>{if(o===Ba&&e.value===void 0)return;const a=o===Ba?void 0:o;Ze(a,P1(e.value,s.props.modelModifiers))||n(a)}))}function Mu(t,e){if(t)return t.props[e]}const tD=Ce({name:"Field",inheritAttrs:!1,props:{as:{type:[String,Object],default:void 0},name:{type:String,required:!0},rules:{type:[Object,String,Function],default:void 0},validateOnMount:{type:Boolean,default:!1},validateOnBlur:{type:Boolean,default:void 0},validateOnChange:{type:Boolean,default:void 0},validateOnInput:{type:Boolean,default:void 0},validateOnModelUpdate:{type:Boolean,default:void 0},bails:{type:Boolean,default:()=>qd().bails},label:{type:String,default:void 0},uncheckedValue:{type:null,default:void 0},modelValue:{type:null,default:Ba},modelModifiers:{type:null,default:()=>({})},"onUpdate:modelValue":{type:null,default:void 0},standalone:{type:Boolean,default:!1},keepValue:{type:Boolean,default:void 0}},setup(t,e){const n=St(t,"rules"),s=St(t,"name"),i=St(t,"label"),r=St(t,"uncheckedValue"),o=St(t,"keepValue"),{errors:a,value:l,errorMessage:c,validate:u,handleChange:h,handleBlur:d,setTouched:p,resetField:m,handleReset:E,meta:k,checked:C,setErrors:D}=jl(s,n,{validateOnMount:t.validateOnMount,bails:t.bails,standalone:t.standalone,type:e.attrs.type,initialValue:sD(t,e),checkedValue:e.attrs.value,uncheckedValue:r,label:i,validateOnValueUpdate:!1,keepValueOnUnmount:o}),P=function(L,B=!0){h(L,B),e.emit("update:modelValue",l.value)},H=I=>{Ni(e.attrs.type)||(l.value=zd(I))},A=function(L){H(L),e.emit("update:modelValue",l.value)},M=Ee(()=>{const{validateOnInput:I,validateOnChange:L,validateOnBlur:B,validateOnModelUpdate:ce}=nD(t),ge=[d,e.attrs.onBlur,B?u:void 0].filter(Boolean),ke=[Z=>P(Z,I),e.attrs.onInput].filter(Boolean),Se=[Z=>P(Z,L),e.attrs.onChange].filter(Boolean),_e={name:t.name,onBlur:ge,onInput:ke,onChange:Se};_e["onUpdate:modelValue"]=Z=>P(Z,ce),Ni(e.attrs.type)&&C&&(_e.checked=C.value);const oe=P_(t,e);return O1(oe,e.attrs)&&(_e.value=l.value),_e});function N(){return{field:M.value,value:l.value,meta:k,errors:a.value,errorMessage:c.value,validate:u,resetField:m,handleChange:P,handleInput:A,handleReset:E,handleBlur:d,setTouched:p,setErrors:D}}return e.expose({setErrors:D,setTouched:p,reset:m,validate:u,handleChange:h}),()=>{const I=nh(P_(t,e)),L=Vl(I,e,N);return I?Ii(I,Object.assign(Object.assign({},e.attrs),M.value),L):L}}});function P_(t,e){let n=t.as||"";return!t.as&&!e.slots.default&&(n="input"),n}function nD(t){var e,n,s,i;const{validateOnInput:r,validateOnChange:o,validateOnBlur:a,validateOnModelUpdate:l}=qd();return{validateOnInput:(e=t.validateOnInput)!==null&&e!==void 0?e:r,validateOnChange:(n=t.validateOnChange)!==null&&n!==void 0?n:o,validateOnBlur:(s=t.validateOnBlur)!==null&&s!==void 0?s:a,validateOnModelUpdate:(i=t.validateOnModelUpdate)!==null&&i!==void 0?i:l}}function sD(t,e){return Ni(e.attrs.type)?T_(t,"modelValue")?t.modelValue:void 0:T_(t,"modelValue")?t.modelValue:e.attrs.value}const V0=tD;let iD=0;function j0(t){const e=v(t==null?void 0:t.initialValues)||{},n=v(t==null?void 0:t.validationSchema);return n&&as(n)&&Mn(n.cast)?Re(n.cast(e)||{}):Re(e)}function Hl(t){var e;const n=iD++,s=new Set;let i=!1;const r=We({}),o=We(!1),a=We(0),l=[],c=Ln(j0(t)),{errorBag:u,setErrorBag:h,setFieldErrorBag:d}=aD(t==null?void 0:t.initialErrors),p=Ee(()=>ot(u.value).reduce((_,y)=>{const R=u.value[y];return R&&R.length&&(_[y]=R[0]),_},{}));function m(_){const y=r.value[_];return Array.isArray(y)?y[0]:y}function E(_){return!!r.value[_]}const k=Ee(()=>ot(r.value).reduce((_,y)=>{const R=m(y);return R&&(_[y]={name:v(R.name)||"",label:v(R.label)||""}),_},{})),C=Ee(()=>ot(r.value).reduce((_,y)=>{var R;const x=m(y);return x&&(_[y]=(R=x.bails)!==null&&R!==void 0?R:!0),_},{})),D=Object.assign({},(t==null?void 0:t.initialErrors)||{}),P=(e=t==null?void 0:t.keepValuesOnUnmount)!==null&&e!==void 0?e:!1,{initialValues:H,originalInitialValues:A,setInitialValues:M}=oD(r,c,t),N=rD(r,c,A,p),I=Ee(()=>[...s,...ot(r.value)].reduce((_,y)=>{const R=qe(c,y);return qn(_,y,R),_},{})),L=t==null?void 0:t.validationSchema,B=R_(F,5),ce=R_(F,5),ge=Du(async _=>await _==="silent"?B():ce(),(_,[y])=>{const R=oe.fieldsByPath.value||{},x=ot(oe.errorBag.value);return[...new Set([...ot(_.results),...ot(R),...x])].reduce((G,Y)=>{const re=R[Y],we=(_.results[Y]||{errors:[]}).errors,Me={errors:we,valid:!we.length};if(G.results[Y]=Me,Me.valid||(G.errors[Y]=Me.errors[0]),!re)return ht(Y,we),G;if(he(re,Vn=>Vn.meta.valid=Me.valid),y==="silent")return G;const $n=Array.isArray(re)?re.some(Vn=>Vn.meta.validated):re.meta.validated;return y==="validated-only"&&!$n||he(re,Vn=>Vn.setState({errors:Me.errors})),G},{valid:_.valid,results:{},errors:{}})});function ke(_){return function(R,x){return function(G){return G instanceof Event&&(G.preventDefault(),G.stopPropagation()),b(ot(r.value).reduce((Y,re)=>(Y[re]=!0,Y),{})),o.value=!0,a.value++,w().then(Y=>{const re=Re(c);if(Y.valid&&typeof R=="function"){const we=Re(I.value);let Me=_?we:re;return Y.values&&(Me=Y.values),R(Me,{evt:G,controlledValues:we,setErrors:Qe,setFieldError:ht,setTouched:b,setFieldTouched:z,setValues:$t,setFieldValue:je,resetForm:ee,resetField:V})}!Y.valid&&typeof x=="function"&&x({values:re,evt:G,errors:Y.errors,results:Y.results})}).then(Y=>(o.value=!1,Y),Y=>{throw o.value=!1,Y})}}}const _e=ke(!1);_e.withControlled=ke(!0);const oe={formId:n,fieldsByPath:r,values:c,controlledValues:I,errorBag:u,errors:p,schema:L,submitCount:a,meta:N,isSubmitting:o,fieldArrays:l,keepValuesOnUnmount:P,validateSchema:v(L)?ge:void 0,validate:w,register:f,unregister:g,setFieldErrorBag:d,validateField:T,setFieldValue:je,setValues:$t,setErrors:Qe,setFieldError:ht,setFieldTouched:z,setTouched:b,resetForm:ee,resetField:V,handleSubmit:_e,stageInitialValue:$,unsetInitialValue:O,setFieldInitialValue:q,useFieldModel:S};function Z(_){return Array.isArray(_)}function he(_,y){return Array.isArray(_)?_.forEach(y):y(_)}function ze(_){Object.values(r.value).forEach(y=>{y&&he(y,_)})}function ht(_,y){d(_,y)}function Qe(_){h(_)}function je(_,y,{force:R}={force:!1}){var x;const K=r.value[_],G=Re(y);if(!K){qn(c,_,G);return}if(Z(K)&&((x=K[0])===null||x===void 0?void 0:x.type)==="checkbox"&&!Array.isArray(y)){const re=Re(xu(qe(c,_)||[],y,void 0));qn(c,_,re);return}let Y=G;!Z(K)&&K.type==="checkbox"&&!R&&!i&&(Y=Re(xu(qe(c,_),y,v(K.uncheckedValue)))),qn(c,_,Y)}function $t(_){ot(c).forEach(y=>{delete c[y]}),ot(_).forEach(y=>{je(y,_[y])}),l.forEach(y=>y&&y.reset())}function mn(_){const{value:y}=B0(_,void 0,oe);return et(y,()=>{E(v(_))||w({mode:"validated-only"})},{deep:!0}),s.add(v(_)),y}function S(_){return Array.isArray(_)?_.map(mn):mn(_)}function z(_,y){const R=r.value[_];R&&he(R,x=>x.setTouched(y))}function b(_){ot(_).forEach(y=>{z(y,!!_[y])})}function V(_,y){const R=r.value[_];R&&he(R,x=>x.resetField(y))}function ee(_){i=!0,ze(R=>R.resetField());const y=_!=null&&_.values?_.values:A.value;M(y),$t(y),_!=null&&_.touched&&b(_.touched),Qe((_==null?void 0:_.errors)||{}),a.value=(_==null?void 0:_.submitCount)||0,es(()=>{i=!1})}function Ae(_,y){const R=Fs(_),x=y;if(!r.value[x]){r.value[x]=R;return}const K=r.value[x];K&&!Array.isArray(K)&&(r.value[x]=[K]),r.value[x]=[...r.value[x],R]}function ie(_,y){const R=y,x=r.value[R];if(x){if(!Z(x)&&_.id===x.id){delete r.value[R];return}if(Z(x)){const K=x.findIndex(G=>G.id===_.id);if(K===-1)return;x.splice(K,1),x.length||delete r.value[R]}}}function f(_){const y=v(_.name);Ae(_,y),xe(_.name)&&et(_.name,async(x,K)=>{await es(),ie(_,K),Ae(_,x),(p.value[K]||p.value[x])&&(ht(K,void 0),T(x)),await es(),E(K)||zo(c,K)});const R=v(_.errorMessage);R&&(D==null?void 0:D[y])!==R&&T(y),delete D[y]}function g(_){const y=v(_.name),R=r.value[y],x=!!R&&Z(R);ie(_,y),es(()=>{var K;const G=(K=v(_.keepValueOnUnmount))!==null&&K!==void 0?K:v(P),Y=qe(c,y);if(x&&(R===r.value[y]||!r.value[y])&&!G)if(Array.isArray(Y)){const we=Y.findIndex(Me=>Ze(Me,v(_.checkedValue)));if(we>-1){const Me=[...Y];Me.splice(we,1),je(y,Me,{force:!0})}}else Y===v(_.checkedValue)&&zo(c,y);if(!E(y)){if(ht(y,void 0),G||x&&Array.isArray(Y)&&!P0(Y))return;zo(c,y)}})}async function w(_){const y=(_==null?void 0:_.mode)||"force";if(y==="force"&&ze(G=>G.meta.validated=!0),oe.validateSchema)return oe.validateSchema(y);const R=await Promise.all(Object.values(r.value).map(G=>{const Y=Array.isArray(G)?G[0]:G;return Y?Y.validate(_).then(re=>({key:v(Y.name),valid:re.valid,errors:re.errors})):Promise.resolve({key:"",valid:!0,errors:[]})})),x={},K={};for(const G of R)x[G.key]={valid:G.valid,errors:G.errors},G.errors.length&&(K[G.key]=G.errors[0]);return{valid:R.every(G=>G.valid),results:x,errors:K}}async function T(_){const y=r.value[_];return y?Array.isArray(y)?y.map(R=>R.validate())[0]:y.validate():Promise.resolve({errors:[],valid:!0})}function O(_){zo(H.value,_)}function $(_,y,R=!1){qn(c,_,y),q(_,y),R&&!(t!=null&&t.initialValues)&&qn(A.value,_,Re(y))}function q(_,y){qn(H.value,_,Re(y))}async function F(){const _=v(L);return _?Ir(_)||as(_)?await q1(_,c):await K1(_,c,{names:k.value,bailsMap:C.value}):{valid:!0,results:{},errors:{}}}const j=_e((_,{evt:y})=>{x0(y)&&y.target.submit()});return qs(()=>{if(t!=null&&t.initialErrors&&Qe(t.initialErrors),t!=null&&t.initialTouched&&b(t.initialTouched),t!=null&&t.validateOnMount){w();return}oe.validateSchema&&oe.validateSchema("silent")}),xe(L)&&et(L,()=>{var _;(_=oe.validateSchema)===null||_===void 0||_.call(oe,"validated-only")}),di(Oo,oe),Object.assign(Object.assign({},oe),{handleReset:()=>ee(),submitForm:j})}function rD(t,e,n,s){const i={touched:"some",pending:"some",valid:"every"},r=Ee(()=>!Ze(e,v(n)));function o(){const l=Object.values(t.value).flat(1).filter(Boolean);return ot(i).reduce((c,u)=>{const h=i[u];return c[u]=l[h](d=>d.meta[u]),c},{})}const a=Ln(o());return _g(()=>{const l=o();a.touched=l.touched,a.valid=l.valid,a.pending=l.pending}),Ee(()=>Object.assign(Object.assign({initialValues:v(n)},a),{valid:a.valid&&!ot(s.value).length,dirty:r.value}))}function oD(t,e,n){const s=j0(n),i=n==null?void 0:n.initialValues,r=We(s),o=We(Re(s));function a(l,c=!1){r.value=Re(l),o.value=Re(l),c&&ot(t.value).forEach(u=>{const h=t.value[u],d=Array.isArray(h)?h.some(m=>m.meta.touched):h==null?void 0:h.meta.touched;if(!h||d)return;const p=qe(r.value,u);qn(e,u,Re(p))})}return xe(i)&&et(i,l=>{a(l,!0)},{deep:!0}),{initialValues:r,originalInitialValues:o,setInitialValues:a}}function aD(t){const e=We({});function n(r){return Array.isArray(r)?r:r?[r]:[]}function s(r,o){if(!o){delete e.value[r];return}e.value[r]=n(o)}function i(r){e.value=ot(r).reduce((o,a)=>{const l=r[a];return l&&(o[a]=n(l)),o},{})}return t&&i(t),{errorBag:e,setErrorBag:i,setFieldErrorBag:s}}Ce({name:"Form",inheritAttrs:!1,props:{as:{type:String,default:"form"},validationSchema:{type:Object,default:void 0},initialValues:{type:Object,default:void 0},initialErrors:{type:Object,default:void 0},initialTouched:{type:Object,default:void 0},validateOnMount:{type:Boolean,default:!1},onSubmit:{type:Function,default:void 0},onInvalidSubmit:{type:Function,default:void 0},keepValues:{type:Boolean,default:!1}},setup(t,e){const n=St(t,"initialValues"),s=St(t,"validationSchema"),i=St(t,"keepValues"),{errors:r,errorBag:o,values:a,meta:l,isSubmitting:c,submitCount:u,controlledValues:h,validate:d,validateField:p,handleReset:m,resetForm:E,handleSubmit:k,setErrors:C,setFieldError:D,setFieldValue:P,setValues:H,setFieldTouched:A,setTouched:M,resetField:N}=Hl({validationSchema:s.value?s:void 0,initialValues:n,initialErrors:t.initialErrors,initialTouched:t.initialTouched,validateOnMount:t.validateOnMount,keepValuesOnUnmount:i}),I=k((oe,{evt:Z})=>{x0(Z)&&Z.target.submit()},t.onInvalidSubmit),L=t.onSubmit?k(t.onSubmit,t.onInvalidSubmit):I;function B(oe){jd(oe)&&oe.preventDefault(),m(),typeof e.attrs.onReset=="function"&&e.attrs.onReset()}function ce(oe,Z){return k(typeof oe=="function"&&!Z?oe:Z,t.onInvalidSubmit)(oe)}function ge(){return Re(a)}function ke(){return Re(l.value)}function Se(){return Re(r.value)}function _e(){return{meta:l.value,errors:r.value,errorBag:o.value,values:a,isSubmitting:c.value,submitCount:u.value,controlledValues:h.value,validate:d,validateField:p,handleSubmit:ce,handleReset:m,submitForm:I,setErrors:C,setFieldError:D,setFieldValue:P,setValues:H,setFieldTouched:A,setTouched:M,resetForm:E,resetField:N,getValues:ge,getMeta:ke,getErrors:Se}}return e.expose({setFieldError:D,setErrors:C,setFieldValue:P,setValues:H,setFieldTouched:A,setTouched:M,resetForm:E,validate:d,validateField:p,resetField:N,getValues:ge,getMeta:ke,getErrors:Se}),function(){const Z=t.as==="form"?t.as:nh(t.as),he=Vl(Z,e,_e);if(!t.as)return he;const ze=t.as==="form"?{novalidate:!0}:{};return Ii(Z,Object.assign(Object.assign(Object.assign({},ze),e.attrs),{onSubmit:L,onReset:B}),he)}}});function lD(t){const e=Wd(Oo,void 0),n=We([]),s=()=>{},i={fields:n,remove:s,push:s,swap:s,insert:s,update:s,replace:s,prepend:s,move:s};if(!e||!v(t))return i;const r=e.fieldArrays.find(A=>v(A.path)===v(t));if(r)return r;let o=0;function a(){return qe(e==null?void 0:e.values,v(t),[])||[]}function l(){const A=a();n.value=A.map(u),c()}l();function c(){const A=n.value.length;for(let M=0;M<A;M++){const N=n.value[M];N.isFirst=M===0,N.isLast=M===A-1}}function u(A){const M=o++;return{key:M,value:N1({get(){const I=qe(e==null?void 0:e.values,v(t),[])||[],L=n.value.findIndex(B=>B.key===M);return L===-1?A:I[L]},set(I){const L=n.value.findIndex(B=>B.key===M);L!==-1&&C(L,I)}}),isFirst:!1,isLast:!1}}function h(){c(),e==null||e.validate({mode:"silent"})}function d(A){const M=v(t),N=qe(e==null?void 0:e.values,M);if(!N||!Array.isArray(N))return;const I=[...N];I.splice(A,1),e==null||e.unsetInitialValue(M+`[${A}]`),e==null||e.setFieldValue(M,I),n.value.splice(A,1),h()}function p(A){const M=v(t),N=qe(e==null?void 0:e.values,M),I=wr(N)?[]:N;if(!Array.isArray(I))return;const L=[...I];L.push(A),e==null||e.stageInitialValue(M+`[${L.length-1}]`,A),e==null||e.setFieldValue(M,L),n.value.push(u(A)),h()}function m(A,M){const N=v(t),I=qe(e==null?void 0:e.values,N);if(!Array.isArray(I)||!(A in I)||!(M in I))return;const L=[...I],B=[...n.value],ce=L[A];L[A]=L[M],L[M]=ce;const ge=B[A];B[A]=B[M],B[M]=ge,e==null||e.setFieldValue(N,L),n.value=B,c()}function E(A,M){const N=v(t),I=qe(e==null?void 0:e.values,N);if(!Array.isArray(I)||I.length<A)return;const L=[...I],B=[...n.value];L.splice(A,0,M),B.splice(A,0,u(M)),e==null||e.setFieldValue(N,L),n.value=B,h()}function k(A){const M=v(t);e==null||e.setFieldValue(M,A),l(),h()}function C(A,M){const N=v(t),I=qe(e==null?void 0:e.values,N);!Array.isArray(I)||I.length-1<A||(e==null||e.setFieldValue(`${N}[${A}]`,M),e==null||e.validate({mode:"validated-only"}))}function D(A){const M=v(t),N=qe(e==null?void 0:e.values,M),I=wr(N)?[]:N;if(!Array.isArray(I))return;const L=[A,...I];e==null||e.stageInitialValue(M+`[${L.length-1}]`,A),e==null||e.setFieldValue(M,L),n.value.unshift(u(A)),h()}function P(A,M){const N=v(t),I=qe(e==null?void 0:e.values,N),L=wr(I)?[]:[...I];if(!Array.isArray(I)||!(A in I)||!(M in I))return;const B=[...n.value],ce=B[A];B.splice(A,1),B.splice(M,0,ce);const ge=L[A];L.splice(A,1),L.splice(M,0,ge),e==null||e.setFieldValue(N,L),n.value=B,h()}const H={fields:n,remove:d,push:p,swap:m,insert:E,update:C,replace:k,prepend:D,move:P};return e.fieldArrays.push(Object.assign({path:t,reset:l},H)),eo(()=>{const A=e.fieldArrays.findIndex(M=>v(M.path)===v(t));A>=0&&e.fieldArrays.splice(A,1)}),et(a,A=>{const M=n.value.map(N=>N.value);Ze(A,M)||l()}),H}Ce({name:"FieldArray",inheritAttrs:!1,props:{name:{type:String,required:!0}},setup(t,e){const{push:n,remove:s,swap:i,insert:r,replace:o,update:a,prepend:l,move:c,fields:u}=lD(St(t,"name"));function h(){return{fields:u.value,push:n,remove:s,swap:i,insert:r,update:a,replace:o,prepend:l,move:c}}return e.expose({push:n,remove:s,swap:i,insert:r,update:a,replace:o,prepend:l,move:c}),()=>Vl(void 0,e,h)}});const cD=Ce({name:"ErrorMessage",props:{as:{type:String,default:void 0},name:{type:String,required:!0}},setup(t,e){const n=Ft(Oo,void 0),s=Ee(()=>n==null?void 0:n.errors.value[t.name]);function i(){return{message:s.value}}return()=>{if(!s.value)return;const r=t.as?nh(t.as):t.as,o=Vl(r,e,i),a=Object.assign({role:"alert"},e.attrs);return!r&&(Array.isArray(o)||!o)&&(o!=null&&o.length)?o:(Array.isArray(o)||!o)&&!(o!=null&&o.length)?Ii(r||"span",a,s.value):Ii(r,a,o)}}}),H0=cD,uD={class:"form-input"},hD=["for"],dD=["type","id","name","value","placeholder"],fD=Ce({__name:"FormInput",props:{type:null,name:null,value:null,label:null,placeholder:null},setup(t){const e=t,n=St(e,"name"),{value:s,errorMessage:i,handleBlur:r,handleChange:o,meta:a}=jl(n,void 0,{initialValue:e.value});return(l,c)=>(Q(),le("div",uD,[t.label?(Q(),le("label",{key:0,class:"label-input",for:v(n)},Oe(t.label),9,hD)):cn("",!0),W("input",{class:"input",type:t.type,id:v(n),name:v(n),value:v(s),placeholder:t.placeholder,onInput:c[0]||(c[0]=(...u)=>v(o)&&v(o)(...u)),onBlur:c[1]||(c[1]=(...u)=>v(r)&&v(r)(...u))},null,40,dD),Ks(W("p",{class:"error"},Oe(v(i)),513),[[Li,v(i)||v(a).valid]])]))}});const $a=$e(fD,[["__scopeId","data-v-05644960"]]);function Xs(t){this._maxSize=t,this.clear()}Xs.prototype.clear=function(){this._size=0,this._values=Object.create(null)};Xs.prototype.get=function(t){return this._values[t]};Xs.prototype.set=function(t,e){return this._size>=this._maxSize&&this.clear(),t in this._values||this._size++,this._values[t]=e};var pD=/[^.^\]^[]+|(?=\[\]|\.\.)/g,W0=/^\d+$/,_D=/^\d/,gD=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,mD=/^\s*(['"]?)(.*?)(\1)\s*$/,Kd=512,N_=new Xs(Kd),x_=new Xs(Kd),D_=new Xs(Kd),Ls={Cache:Xs,split:Lu,normalizePath:Pc,setter:function(t){var e=Pc(t);return x_.get(t)||x_.set(t,function(s,i){for(var r=0,o=e.length,a=s;r<o-1;){var l=e[r];if(l==="__proto__"||l==="constructor"||l==="prototype")return s;a=a[e[r++]]}a[e[r]]=i})},getter:function(t,e){var n=Pc(t);return D_.get(t)||D_.set(t,function(i){for(var r=0,o=n.length;r<o;)if(i!=null||!e)i=i[n[r++]];else return;return i})},join:function(t){return t.reduce(function(e,n){return e+(Gd(n)||W0.test(n)?"["+n+"]":(e?".":"")+n)},"")},forEach:function(t,e,n){vD(Array.isArray(t)?t:Lu(t),e,n)}};function Pc(t){return N_.get(t)||N_.set(t,Lu(t).map(function(e){return e.replace(mD,"$2")}))}function Lu(t){return t.match(pD)||[""]}function vD(t,e,n){var s=t.length,i,r,o,a;for(r=0;r<s;r++)i=t[r],i&&(bD(i)&&(i='"'+i+'"'),a=Gd(i),o=!a&&/^\d+$/.test(i),e.call(n,i,a,o,r,t))}function Gd(t){return typeof t=="string"&&t&&["'",'"'].indexOf(t.charAt(0))!==-1}function yD(t){return t.match(_D)&&!t.match(W0)}function ED(t){return gD.test(t)}function bD(t){return!Gd(t)&&(yD(t)||ED(t))}const wD=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,Wl=t=>t.match(wD)||[],zl=t=>t[0].toUpperCase()+t.slice(1),Yd=(t,e)=>Wl(t).join(e).toLowerCase(),z0=t=>Wl(t).reduce((e,n)=>`${e}${e?n[0].toUpperCase()+n.slice(1).toLowerCase():n.toLowerCase()}`,""),ID=t=>zl(z0(t)),CD=t=>Yd(t,"_"),TD=t=>Yd(t,"-"),SD=t=>zl(Yd(t," ")),AD=t=>Wl(t).map(zl).join(" ");var Nc={words:Wl,upperFirst:zl,camelCase:z0,pascalCase:ID,snakeCase:CD,kebabCase:TD,sentenceCase:SD,titleCase:AD},Va={},RD={get exports(){return Va},set exports(t){Va=t}};RD.exports=function(t){return q0(kD(t),t)};Va.array=q0;function q0(t,e){var n=t.length,s=new Array(n),i={},r=n,o=OD(e),a=PD(t);for(e.forEach(function(c){if(!a.has(c[0])||!a.has(c[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});r--;)i[r]||l(t[r],r,new Set);return s;function l(c,u,h){if(h.has(c)){var d;try{d=", node was:"+JSON.stringify(c)}catch{d=""}throw new Error("Cyclic dependency"+d)}if(!a.has(c))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(c));if(!i[u]){i[u]=!0;var p=o.get(c)||new Set;if(p=Array.from(p),u=p.length){h.add(c);do{var m=p[--u];l(m,a.get(m),h)}while(u);h.delete(c)}s[--n]=c}}}function kD(t){for(var e=new Set,n=0,s=t.length;n<s;n++){var i=t[n];e.add(i[0]),e.add(i[1])}return Array.from(e)}function OD(t){for(var e=new Map,n=0,s=t.length;n<s;n++){var i=t[n];e.has(i[0])||e.set(i[0],new Set),e.has(i[1])||e.set(i[1],new Set),e.get(i[0]).add(i[1])}return e}function PD(t){for(var e=new Map,n=0,s=t.length;n<s;n++)e.set(t[n],n);return e}const ND=Object.prototype.toString,xD=Error.prototype.toString,DD=RegExp.prototype.toString,MD=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",LD=/^Symbol\((.*)\)(.*)$/;function FD(t){return t!=+t?"NaN":t===0&&1/t<0?"-0":""+t}function M_(t,e=!1){if(t==null||t===!0||t===!1)return""+t;const n=typeof t;if(n==="number")return FD(t);if(n==="string")return e?`"${t}"`:t;if(n==="function")return"[Function "+(t.name||"anonymous")+"]";if(n==="symbol")return MD.call(t).replace(LD,"Symbol($1)");const s=ND.call(t).slice(8,-1);return s==="Date"?isNaN(t.getTime())?""+t:t.toISOString(t):s==="Error"||t instanceof Error?"["+xD.call(t)+"]":s==="RegExp"?DD.call(t):null}function Ei(t,e){let n=M_(t,e);return n!==null?n:JSON.stringify(t,function(s,i){let r=M_(this[s],e);return r!==null?r:i},2)}function K0(t){return t==null?[]:[].concat(t)}let UD=/\$\{\s*(\w+)\s*\}/g;class Dt extends Error{static formatError(e,n){const s=n.label||n.path||"this";return s!==n.path&&(n=Object.assign({},n,{path:s})),typeof e=="string"?e.replace(UD,(i,r)=>Ei(n[r])):typeof e=="function"?e(n):e}static isError(e){return e&&e.name==="ValidationError"}constructor(e,n,s,i){super(),this.value=void 0,this.path=void 0,this.type=void 0,this.errors=void 0,this.params=void 0,this.inner=void 0,this.name="ValidationError",this.value=n,this.path=s,this.type=i,this.errors=[],this.inner=[],K0(e).forEach(r=>{Dt.isError(r)?(this.errors.push(...r.errors),this.inner=this.inner.concat(r.inner.length?r.inner:r)):this.errors.push(r)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0],Error.captureStackTrace&&Error.captureStackTrace(this,Dt)}}let En={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:t,type:e,value:n,originalValue:s})=>{const i=s!=null&&s!==n?` (cast from the value \`${Ei(s,!0)}\`).`:".";return e!=="mixed"?`${t} must be a \`${e}\` type, but the final value was: \`${Ei(n,!0)}\``+i:`${t} must match the configured type. The validated value was: \`${Ei(n,!0)}\``+i}},qt={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},BD={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},Fu={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},$D={isValue:"${path} field must be ${value}"},Uu={noUnknown:"${path} field has unspecified keys: ${unknown}"},VD={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"};Object.assign(Object.create(null),{mixed:En,string:qt,number:BD,date:Fu,object:Uu,array:VD,boolean:$D});const Xd=t=>t&&t.__isYupSchema__;class ja{static fromOptions(e,n){if(!n.then&&!n.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:s,then:i,otherwise:r}=n,o=typeof s=="function"?s:(...a)=>a.every(l=>l===s);return new ja(e,(a,l)=>{var c;let u=o(...a)?i:r;return(c=u==null?void 0:u(l))!=null?c:l})}constructor(e,n){this.fn=void 0,this.refs=e,this.refs=e,this.fn=n}resolve(e,n){let s=this.refs.map(r=>r.getValue(n==null?void 0:n.value,n==null?void 0:n.parent,n==null?void 0:n.context)),i=this.fn(s,e,n);if(i===void 0||i===e)return e;if(!Xd(i))throw new TypeError("conditions must return a schema object");return i.resolve(n)}}const qo={context:"$",value:"."};class Qs{constructor(e,n={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof e!="string")throw new TypeError("ref must be a string, got: "+e);if(this.key=e.trim(),e==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===qo.context,this.isValue=this.key[0]===qo.value,this.isSibling=!this.isContext&&!this.isValue;let s=this.isContext?qo.context:this.isValue?qo.value:"";this.path=this.key.slice(s.length),this.getter=this.path&&Ls.getter(this.path,!0),this.map=n.map}getValue(e,n,s){let i=this.isContext?s:this.isValue?e:n;return this.getter&&(i=this.getter(i||{})),this.map&&(i=this.map(i)),i}cast(e,n){return this.getValue(e,n==null?void 0:n.parent,n==null?void 0:n.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(e){return e&&e.__isYupRef}}Qs.prototype.__isYupRef=!0;const ts=t=>t==null;function ni(t){function e({value:n,path:s="",options:i,originalValue:r,schema:o},a,l){const{name:c,test:u,params:h,message:d,skipAbsent:p}=t;let{parent:m,context:E,abortEarly:k=o.spec.abortEarly}=i;function C(B){return Qs.isRef(B)?B.getValue(n,m,E):B}function D(B={}){const ce=Object.assign({value:n,originalValue:r,label:o.spec.label,path:B.path||s,spec:o.spec},h,B.params);for(const ke of Object.keys(ce))ce[ke]=C(ce[ke]);const ge=new Dt(Dt.formatError(B.message||d,ce),n,ce.path,B.type||c);return ge.params=ce,ge}const P=k?a:l;let H={path:s,parent:m,type:c,from:i.from,createError:D,resolve:C,options:i,originalValue:r,schema:o};const A=B=>{Dt.isError(B)?P(B):B?l(null):P(D())},M=B=>{Dt.isError(B)?P(B):a(B)},N=p&&ts(n);if(!i.sync){try{Promise.resolve(N?!0:u.call(H,n,H)).then(A,M)}catch(B){M(B)}return}let I;try{var L;if(I=N?!0:u.call(H,n,H),typeof((L=I)==null?void 0:L.then)=="function")throw new Error(`Validation test of type: "${H.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`)}catch(B){M(B);return}A(I)}return e.OPTIONS=t,e}function jD(t,e,n,s=n){let i,r,o;return e?(Ls.forEach(e,(a,l,c)=>{let u=l?a.slice(1,a.length-1):a;t=t.resolve({context:s,parent:i,value:n});let h=t.type==="tuple",d=c?parseInt(u,10):0;if(t.innerType||h){if(h&&!c)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${o}" must contain an index to the tuple element, e.g. "${o}[0]"`);if(n&&d>=n.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${a}, in the path: ${e}. because there is no value at that index. `);i=n,n=n&&n[d],t=h?t.spec.types[d]:t.innerType}if(!c){if(!t.fields||!t.fields[u])throw new Error(`The schema does not contain the path: ${e}. (failed at: ${o} which is a type: "${t.type}")`);i=n,n=n&&n[u],t=t.fields[u]}r=u,o=l?"["+a+"]":"."+a}),{schema:t,parent:i,parentPath:r}):{parent:i,parentPath:e,schema:t}}class Ha extends Set{describe(){const e=[];for(const n of this.values())e.push(Qs.isRef(n)?n.describe():n);return e}resolveAll(e){let n=[];for(const s of this.values())n.push(e(s));return n}clone(){return new Ha(this.values())}merge(e,n){const s=this.clone();return e.forEach(i=>s.add(i)),n.forEach(i=>s.delete(i)),s}}function li(t,e=new Map){if(Xd(t)||!t||typeof t!="object")return t;if(e.has(t))return e.get(t);let n;if(t instanceof Date)n=new Date(t.getTime()),e.set(t,n);else if(t instanceof RegExp)n=new RegExp(t),e.set(t,n);else if(Array.isArray(t)){n=new Array(t.length),e.set(t,n);for(let s=0;s<t.length;s++)n[s]=li(t[s],e)}else if(t instanceof Map){n=new Map,e.set(t,n);for(const[s,i]of t.entries())n.set(s,li(i,e))}else if(t instanceof Set){n=new Set,e.set(t,n);for(const s of t)n.add(li(s,e))}else if(t instanceof Object){n={},e.set(t,n);for(const[s,i]of Object.entries(t))n[s]=li(i,e)}else throw Error(`Unable to clone ${t}`);return n}class _n{constructor(e){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new Ha,this._blacklist=new Ha,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(En.notType)}),this.type=e.type,this._typeCheck=e.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,nullable:!1,optional:!0,coerce:!0},e==null?void 0:e.spec),this.withMutation(n=>{n.nonNullable()})}get _type(){return this.type}clone(e){if(this._mutate)return e&&Object.assign(this.spec,e),this;const n=Object.create(Object.getPrototypeOf(this));return n.type=this.type,n._typeCheck=this._typeCheck,n._whitelist=this._whitelist.clone(),n._blacklist=this._blacklist.clone(),n.internalTests=Object.assign({},this.internalTests),n.exclusiveTests=Object.assign({},this.exclusiveTests),n.deps=[...this.deps],n.conditions=[...this.conditions],n.tests=[...this.tests],n.transforms=[...this.transforms],n.spec=li(Object.assign({},this.spec,e)),n}label(e){let n=this.clone();return n.spec.label=e,n}meta(...e){if(e.length===0)return this.spec.meta;let n=this.clone();return n.spec.meta=Object.assign(n.spec.meta||{},e[0]),n}withMutation(e){let n=this._mutate;this._mutate=!0;let s=e(this);return this._mutate=n,s}concat(e){if(!e||e===this)return this;if(e.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${e.type}`);let n=this,s=e.clone();const i=Object.assign({},n.spec,s.spec);return s.spec=i,s.internalTests=Object.assign({},n.internalTests,s.internalTests),s._whitelist=n._whitelist.merge(e._whitelist,e._blacklist),s._blacklist=n._blacklist.merge(e._blacklist,e._whitelist),s.tests=n.tests,s.exclusiveTests=n.exclusiveTests,s.withMutation(r=>{e.tests.forEach(o=>{r.test(o.OPTIONS)})}),s.transforms=[...n.transforms,...s.transforms],s}isType(e){return e==null?!!(this.spec.nullable&&e===null||this.spec.optional&&e===void 0):this._typeCheck(e)}resolve(e){let n=this;if(n.conditions.length){let s=n.conditions;n=n.clone(),n.conditions=[],n=s.reduce((i,r)=>r.resolve(i,e),n),n=n.resolve(e)}return n}resolveOptions(e){var n,s,i;return Object.assign({},e,{from:e.from||[],strict:(n=e.strict)!=null?n:this.spec.strict,abortEarly:(s=e.abortEarly)!=null?s:this.spec.abortEarly,recursive:(i=e.recursive)!=null?i:this.spec.recursive})}cast(e,n={}){let s=this.resolve(Object.assign({value:e},n)),i=n.assert==="ignore-optionality",r=s._cast(e,n);if(n.assert!==!1&&!s.isType(r)){if(i&&ts(r))return r;let o=Ei(e),a=Ei(r);throw new TypeError(`The value of ${n.path||"field"} could not be cast to a value that satisfies the schema type: "${s.type}". 

attempted value: ${o} 
`+(a!==o?`result of cast: ${a}`:""))}return r}_cast(e,n){let s=e===void 0?e:this.transforms.reduce((i,r)=>r.call(this,i,e,this),e);return s===void 0&&(s=this.getDefault()),s}_validate(e,n={},s,i){let{path:r,originalValue:o=e,strict:a=this.spec.strict}=n,l=e;a||(l=this._cast(l,Object.assign({assert:!1},n)));let c=[];for(let u of Object.values(this.internalTests))u&&c.push(u);this.runTests({path:r,value:l,originalValue:o,options:n,tests:c},s,u=>{if(u.length)return i(u,l);this.runTests({path:r,value:l,originalValue:o,options:n,tests:this.tests},s,i)})}runTests(e,n,s){let i=!1,{tests:r,value:o,originalValue:a,path:l,options:c}=e,u=E=>{i||(i=!0,n(E,o))},h=E=>{i||(i=!0,s(E,o))},d=r.length,p=[];if(!d)return h([]);let m={value:o,originalValue:a,path:l,options:c,schema:this};for(let E=0;E<r.length;E++){const k=r[E];k(m,u,function(D){D&&(p=p.concat(D)),--d<=0&&h(p)})}}asNestedTest({key:e,index:n,parent:s,parentPath:i,originalParent:r,options:o}){const a=e??n;if(a==null)throw TypeError("Must include `key` or `index` for nested validations");const l=typeof a=="number";let c=s[a];const u=Object.assign({},o,{strict:!0,parent:s,value:c,originalValue:r[a],key:void 0,[l?"index":"key"]:a,path:l||a.includes(".")?`${i||""}[${c?a:`"${a}"`}]`:(i?`${i}.`:"")+e});return(h,d,p)=>this.resolve(u)._validate(c,u,d,p)}validate(e,n){let s=this.resolve(Object.assign({},n,{value:e}));return new Promise((i,r)=>s._validate(e,n,(o,a)=>{Dt.isError(o)&&(o.value=a),r(o)},(o,a)=>{o.length?r(new Dt(o,a)):i(a)}))}validateSync(e,n){let s=this.resolve(Object.assign({},n,{value:e})),i;return s._validate(e,Object.assign({},n,{sync:!0}),(r,o)=>{throw Dt.isError(r)&&(r.value=o),r},(r,o)=>{if(r.length)throw new Dt(r,e);i=o}),i}isValid(e,n){return this.validate(e,n).then(()=>!0,s=>{if(Dt.isError(s))return!1;throw s})}isValidSync(e,n){try{return this.validateSync(e,n),!0}catch(s){if(Dt.isError(s))return!1;throw s}}_getDefault(){let e=this.spec.default;return e==null?e:typeof e=="function"?e.call(this):li(e)}getDefault(e){return this.resolve(e||{})._getDefault()}default(e){return arguments.length===0?this._getDefault():this.clone({default:e})}strict(e=!0){return this.clone({strict:e})}nullability(e,n){const s=this.clone({nullable:e});return s.internalTests.nullable=ni({message:n,name:"nullable",test(i){return i===null?this.schema.spec.nullable:!0}}),s}optionality(e,n){const s=this.clone({optional:e});return s.internalTests.optionality=ni({message:n,name:"optionality",test(i){return i===void 0?this.schema.spec.optional:!0}}),s}optional(){return this.optionality(!0)}defined(e=En.defined){return this.optionality(!1,e)}nullable(){return this.nullability(!0)}nonNullable(e=En.notNull){return this.nullability(!1,e)}required(e=En.required){return this.clone().withMutation(n=>n.nonNullable(e).defined(e))}notRequired(){return this.clone().withMutation(e=>e.nullable().optional())}transform(e){let n=this.clone();return n.transforms.push(e),n}test(...e){let n;if(e.length===1?typeof e[0]=="function"?n={test:e[0]}:n=e[0]:e.length===2?n={name:e[0],test:e[1]}:n={name:e[0],message:e[1],test:e[2]},n.message===void 0&&(n.message=En.default),typeof n.test!="function")throw new TypeError("`test` is a required parameters");let s=this.clone(),i=ni(n),r=n.exclusive||n.name&&s.exclusiveTests[n.name]===!0;if(n.exclusive&&!n.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return n.name&&(s.exclusiveTests[n.name]=!!n.exclusive),s.tests=s.tests.filter(o=>!(o.OPTIONS.name===n.name&&(r||o.OPTIONS.test===i.OPTIONS.test))),s.tests.push(i),s}when(e,n){!Array.isArray(e)&&typeof e!="string"&&(n=e,e=".");let s=this.clone(),i=K0(e).map(r=>new Qs(r));return i.forEach(r=>{r.isSibling&&s.deps.push(r.key)}),s.conditions.push(typeof n=="function"?new ja(i,n):ja.fromOptions(i,n)),s}typeError(e){let n=this.clone();return n.internalTests.typeError=ni({message:e,name:"typeError",test(s){return!ts(s)&&!this.schema._typeCheck(s)?this.createError({params:{type:this.schema.type}}):!0}}),n}oneOf(e,n=En.oneOf){let s=this.clone();return e.forEach(i=>{s._whitelist.add(i),s._blacklist.delete(i)}),s.internalTests.whiteList=ni({message:n,name:"oneOf",skipAbsent:!0,test(i){let r=this.schema._whitelist,o=r.resolveAll(this.resolve);return o.includes(i)?!0:this.createError({params:{values:Array.from(r).join(", "),resolved:o}})}}),s}notOneOf(e,n=En.notOneOf){let s=this.clone();return e.forEach(i=>{s._blacklist.add(i),s._whitelist.delete(i)}),s.internalTests.blacklist=ni({message:n,name:"notOneOf",test(i){let r=this.schema._blacklist,o=r.resolveAll(this.resolve);return o.includes(i)?this.createError({params:{values:Array.from(r).join(", "),resolved:o}}):!0}}),s}strip(e=!0){let n=this.clone();return n.spec.strip=e,n}describe(e){const n=(e?this.resolve(e):this).clone(),{label:s,meta:i,optional:r,nullable:o}=n.spec;return{meta:i,label:s,optional:r,nullable:o,default:n.getDefault(e),type:n.type,oneOf:n._whitelist.describe(),notOneOf:n._blacklist.describe(),tests:n.tests.map(l=>({name:l.OPTIONS.name,params:l.OPTIONS.params})).filter((l,c,u)=>u.findIndex(h=>h.name===l.name)===c)}}}_n.prototype.__isYupSchema__=!0;for(const t of["validate","validateSync"])_n.prototype[`${t}At`]=function(e,n,s={}){const{parent:i,parentPath:r,schema:o}=jD(this,e,n,s.context);return o[t](i&&i[r],Object.assign({},s,{parent:i,path:e}))};for(const t of["equals","is"])_n.prototype[t]=_n.prototype.oneOf;for(const t of["not","nope"])_n.prototype[t]=_n.prototype.notOneOf;let HD=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,WD=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,zD=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,qD=t=>ts(t)||t===t.trim(),KD={}.toString();function bn(){return new G0}class G0 extends _n{constructor(){super({type:"string",check(e){return e instanceof String&&(e=e.valueOf()),typeof e=="string"}}),this.withMutation(()=>{this.transform((e,n,s)=>{if(!s.spec.coerce||s.isType(e)||Array.isArray(e))return e;const i=e!=null&&e.toString?e.toString():e;return i===KD?e:i})})}required(e){return super.required(e).withMutation(n=>n.test({message:e||En.required,name:"required",skipAbsent:!0,test:s=>!!s.length}))}notRequired(){return super.notRequired().withMutation(e=>(e.tests=e.tests.filter(n=>n.OPTIONS.name!=="required"),e))}length(e,n=qt.length){return this.test({message:n,name:"length",exclusive:!0,params:{length:e},skipAbsent:!0,test(s){return s.length===this.resolve(e)}})}min(e,n=qt.min){return this.test({message:n,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(s){return s.length>=this.resolve(e)}})}max(e,n=qt.max){return this.test({name:"max",exclusive:!0,message:n,params:{max:e},skipAbsent:!0,test(s){return s.length<=this.resolve(e)}})}matches(e,n){let s=!1,i,r;return n&&(typeof n=="object"?{excludeEmptyString:s=!1,message:i,name:r}=n:i=n),this.test({name:r||"matches",message:i||qt.matches,params:{regex:e},skipAbsent:!0,test:o=>o===""&&s||o.search(e)!==-1})}email(e=qt.email){return this.matches(HD,{name:"email",message:e,excludeEmptyString:!0})}url(e=qt.url){return this.matches(WD,{name:"url",message:e,excludeEmptyString:!0})}uuid(e=qt.uuid){return this.matches(zD,{name:"uuid",message:e,excludeEmptyString:!1})}ensure(){return this.default("").transform(e=>e===null?"":e)}trim(e=qt.trim){return this.transform(n=>n!=null?n.trim():n).test({message:e,name:"trim",test:qD})}lowercase(e=qt.lowercase){return this.transform(n=>ts(n)?n:n.toLowerCase()).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>ts(n)||n===n.toLowerCase()})}uppercase(e=qt.uppercase){return this.transform(n=>ts(n)?n:n.toUpperCase()).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>ts(n)||n===n.toUpperCase()})}}bn.prototype=G0.prototype;var GD=/^(\d{4}|[+\-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;function YD(t){var e=[1,4,5,6,7,10,11],n=0,s,i;if(i=GD.exec(t)){for(var r=0,o;o=e[r];++r)i[o]=+i[o]||0;i[2]=(+i[2]||1)-1,i[3]=+i[3]||1,i[7]=i[7]?String(i[7]).substr(0,3):0,(i[8]===void 0||i[8]==="")&&(i[9]===void 0||i[9]==="")?s=+new Date(i[1],i[2],i[3],i[4],i[5],i[6],i[7]):(i[8]!=="Z"&&i[9]!==void 0&&(n=i[10]*60+i[11],i[9]==="+"&&(n=0-n)),s=Date.UTC(i[1],i[2],i[3],i[4],i[5]+n,i[6],i[7]))}else s=Date.parse?Date.parse(t):NaN;return s}let XD=new Date(""),QD=t=>Object.prototype.toString.call(t)==="[object Date]";class ql extends _n{constructor(){super({type:"date",check(e){return QD(e)&&!isNaN(e.getTime())}}),this.withMutation(()=>{this.transform((e,n,s)=>!s.spec.coerce||s.isType(e)?e:(e=YD(e),isNaN(e)?ql.INVALID_DATE:new Date(e)))})}prepareParam(e,n){let s;if(Qs.isRef(e))s=e;else{let i=this.cast(e);if(!this._typeCheck(i))throw new TypeError(`\`${n}\` must be a Date or a value that can be \`cast()\` to a Date`);s=i}return s}min(e,n=Fu.min){let s=this.prepareParam(e,"min");return this.test({message:n,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(i){return i>=this.resolve(s)}})}max(e,n=Fu.max){let s=this.prepareParam(e,"max");return this.test({message:n,name:"max",exclusive:!0,params:{max:e},skipAbsent:!0,test(i){return i<=this.resolve(s)}})}}ql.INVALID_DATE=XD;ql.prototype;function JD(t,e=[]){let n=[],s=new Set,i=new Set(e.map(([o,a])=>`${o}-${a}`));function r(o,a){let l=Ls.split(o)[0];s.add(l),i.has(`${a}-${l}`)||n.push([a,l])}for(const o of Object.keys(t)){let a=t[o];s.add(o),Qs.isRef(a)&&a.isSibling?r(a.path,o):Xd(a)&&"deps"in a&&a.deps.forEach(l=>r(l,o))}return Va.array(Array.from(s),n).reverse()}function L_(t,e){let n=1/0;return t.some((s,i)=>{var r;if((r=e.path)!=null&&r.includes(s))return n=i,!0}),n}function Y0(t){return(e,n)=>L_(t,e)-L_(t,n)}const ZD=(t,e,n)=>{if(typeof t!="string")return t;let s=t;try{s=JSON.parse(t)}catch{}return n.isType(s)?s:t};function na(t){if("fields"in t){const e={};for(const[n,s]of Object.entries(t.fields))e[n]=na(s);return t.setFields(e)}if(t.type==="array"){const e=t.optional();return e.innerType&&(e.innerType=na(e.innerType)),e}return t.type==="tuple"?t.optional().clone({types:t.spec.types.map(na)}):"optional"in t?t.optional():t}const eM=(t,e)=>{const n=[...Ls.normalizePath(e)];if(n.length===1)return n[0]in t;let s=n.pop(),i=Ls.getter(Ls.join(n),!0)(t);return!!(i&&s in i)};let F_=t=>Object.prototype.toString.call(t)==="[object Object]";function tM(t,e){let n=Object.keys(t.fields);return Object.keys(e).filter(s=>n.indexOf(s)===-1)}const nM=Y0([]);function Qd(t){return new X0(t)}class X0 extends _n{constructor(e){super({type:"object",check(n){return F_(n)||typeof n=="function"}}),this.fields=Object.create(null),this._sortErrors=nM,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{e&&this.shape(e)})}_cast(e,n={}){var s;let i=super._cast(e,n);if(i===void 0)return this.getDefault();if(!this._typeCheck(i))return i;let r=this.fields,o=(s=n.stripUnknown)!=null?s:this.spec.noUnknown,a=[].concat(this._nodes,Object.keys(i).filter(h=>!this._nodes.includes(h))),l={},c=Object.assign({},n,{parent:l,__validating:n.__validating||!1}),u=!1;for(const h of a){let d=r[h],p=h in i;if(d){let m,E=i[h];c.path=(n.path?`${n.path}.`:"")+h,d=d.resolve({value:E,context:n.context,parent:l});let k=d instanceof _n?d.spec:void 0,C=k==null?void 0:k.strict;if(k!=null&&k.strip){u=u||h in i;continue}m=!n.__validating||!C?d.cast(i[h],c):i[h],m!==void 0&&(l[h]=m)}else p&&!o&&(l[h]=i[h]);(p!==h in l||l[h]!==i[h])&&(u=!0)}return u?l:i}_validate(e,n={},s,i){let{from:r=[],originalValue:o=e,recursive:a=this.spec.recursive}=n;n.from=[{schema:this,value:o},...r],n.__validating=!0,n.originalValue=o,super._validate(e,n,s,(l,c)=>{if(!a||!F_(c)){i(l,c);return}o=o||c;let u=[];for(let h of this._nodes){let d=this.fields[h];!d||Qs.isRef(d)||u.push(d.asNestedTest({options:n,key:h,parent:c,parentPath:n.path,originalParent:o}))}this.runTests({tests:u,value:c,originalValue:o,options:n},s,h=>{i(h.sort(this._sortErrors).concat(l),c)})})}clone(e){const n=super.clone(e);return n.fields=Object.assign({},this.fields),n._nodes=this._nodes,n._excludedEdges=this._excludedEdges,n._sortErrors=this._sortErrors,n}concat(e){let n=super.concat(e),s=n.fields;for(let[i,r]of Object.entries(this.fields)){const o=s[i];s[i]=o===void 0?r:o}return n.withMutation(i=>i.setFields(s,this._excludedEdges))}_getDefault(){if("default"in this.spec)return super._getDefault();if(!this._nodes.length)return;let e={};return this._nodes.forEach(n=>{const s=this.fields[n];e[n]=s&&"getDefault"in s?s.getDefault():void 0}),e}setFields(e,n){let s=this.clone();return s.fields=e,s._nodes=JD(e,n),s._sortErrors=Y0(Object.keys(e)),n&&(s._excludedEdges=n),s}shape(e,n=[]){return this.clone().withMutation(s=>{let i=s._excludedEdges;return n.length&&(Array.isArray(n[0])||(n=[n]),i=[...s._excludedEdges,...n]),s.setFields(Object.assign(s.fields,e),i)})}partial(){const e={};for(const[n,s]of Object.entries(this.fields))e[n]="optional"in s&&s.optional instanceof Function?s.optional():s;return this.setFields(e)}deepPartial(){return na(this)}pick(e){const n={};for(const s of e)this.fields[s]&&(n[s]=this.fields[s]);return this.setFields(n)}omit(e){const n=Object.assign({},this.fields);for(const s of e)delete n[s];return this.setFields(n)}from(e,n,s){let i=Ls.getter(e,!0);return this.transform(r=>{if(!r)return r;let o=r;return eM(r,e)&&(o=Object.assign({},r),s||delete o[e],o[n]=i(r)),o})}json(){return this.transform(ZD)}noUnknown(e=!0,n=Uu.noUnknown){typeof e!="boolean"&&(n=e,e=!0);let s=this.test({name:"noUnknown",exclusive:!0,message:n,test(i){if(i==null)return!0;const r=tM(this.schema,i);return!e||r.length===0||this.createError({params:{unknown:r.join(", ")}})}});return s.spec.noUnknown=e,s}unknown(e=!0,n=Uu.noUnknown){return this.noUnknown(!e,n)}transformKeys(e){return this.transform(n=>{if(!n)return n;const s={};for(const i of Object.keys(n))s[e(i)]=n[i];return s})}camelCase(){return this.transformKeys(Nc.camelCase)}snakeCase(){return this.transformKeys(Nc.snakeCase)}constantCase(){return this.transformKeys(e=>Nc.snakeCase(e).toUpperCase())}describe(e){let n=super.describe(e);n.fields={};for(const[i,r]of Object.entries(this.fields)){var s;let o=e;(s=o)!=null&&s.value&&(o=Object.assign({},o,{parent:o.value,value:o.value[i]})),n.fields[i]=r.describe(o)}return n}}Qd.prototype=X0.prototype;const Q0=Qd().shape({email:bn().required("Email is required field").email("Invalid email address"),password:bn().required("Password is required field").min(6,"Password must contain at least six characters").matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,"Password must contain a letter, a number and one special character")});const sM={},iM={class:"submit-btn",type:"submit"};function rM(t,e){return Q(),le("button",iM,[sh(t.$slots,"default",{},void 0,!0)])}const Jd=$e(sM,[["render",rM],["__scopeId","data-v-7a17fab8"]]),oM=Ce({__name:"SignUpForm",setup(t){const e=Ki(),n={email:"",password:""},{handleSubmit:s}=Hl({initialValues:n,validationSchema:Q0}),i=s((r,{resetForm:o})=>{e.signUpUser(r.email,r.password),o()});return(r,o)=>{const a=th("RouterLink");return Q(),le("form",{class:"form",onSubmit:o[0]||(o[0]=(...l)=>v(i)&&v(i)(...l))},[J($a,{type:"email",name:"email",value:n.email,label:"Email",placeholder:"Email"},null,8,["value"]),J($a,{type:"password",name:"password",value:n.password,label:"Password",placeholder:"Password"},null,8,["value"]),J(Jd,null,{default:It(()=>[en("Sign Up")]),_:1}),W("p",null,[en(" Already have an account? Then "),J(a,{to:"/sign-in"},{default:It(()=>[en("Sign In")]),_:1})])],32)}}});const aM=$e(oM,[["__scopeId","data-v-0d809568"]]);const lM={},cM={class:"wrapper"};function uM(t,e){return Q(),le("div",cM,[sh(t.$slots,"default",{},void 0,!0)])}const J0=$e(lM,[["render",uM],["__scopeId","data-v-e2d79420"]]),hM=Ce({__name:"SignUpPage",setup(t){return(e,n)=>(Q(),Xt(J0,null,{default:It(()=>[J(aM)]),_:1}))}}),dM=Ce({__name:"SignInForm",setup(t){const e=Ki(),n={email:"",password:""},{handleSubmit:s}=Hl({initialValues:n,validationSchema:Q0}),i=s((r,{resetForm:o})=>{e.signInUser(r.email,r.password),o()});return(r,o)=>{const a=th("RouterLink");return Q(),le("form",{class:"form",onSubmit:o[0]||(o[0]=(...l)=>v(i)&&v(i)(...l))},[W("div",null,[J($a,{type:"email",name:"email",value:n.email,label:"Email",placeholder:"Email"},null,8,["value"]),J($a,{type:"password",name:"password",value:n.password,label:"Password",placeholder:"Password"},null,8,["value"])]),J(Jd,null,{default:It(()=>[en("Sign In")]),_:1}),W("p",null,[en(" Don't have an account? Then "),J(a,{to:"/sign-up"},{default:It(()=>[en("Sign Up")]),_:1})])],32)}}});const fM=$e(dM,[["__scopeId","data-v-423d9a42"]]),pM=Ce({__name:"SignInPage",setup(t){return(e,n)=>(Q(),Xt(J0,null,{default:It(()=>[J(fM)]),_:1}))}}),_M={class:"add-product-input"},gM=["for"],mM=["type","id","name","value","placeholder"],vM=Ce({__name:"AddProductInput",props:{type:null,name:null,value:null,label:null,placeholder:null},setup(t){const e=t,n=St(e,"name"),{value:s,errorMessage:i,handleBlur:r,handleChange:o,meta:a}=jl(n,void 0,{initialValue:e.value});return(l,c)=>(Q(),le("div",_M,[t.label?(Q(),le("label",{key:0,class:"label-input",for:v(n)},Oe(t.label),9,gM)):cn("",!0),W("input",{class:_t(["input",{"error-input":v(i)}]),type:t.type,id:v(n),name:v(n),value:v(s),placeholder:t.placeholder,onInput:c[0]||(c[0]=(...u)=>v(o)&&v(o)(...u)),onBlur:c[1]||(c[1]=(...u)=>v(r)&&v(r)(...u))},null,42,mM),Ks(W("p",{class:"error"},Oe(v(i)),513),[[Li,v(i)||v(a).valid]])]))}});const xc=$e(vM,[["__scopeId","data-v-8b1356c9"]]),yM={class:"wrapper"},EM=["for"],bM=["id","name","value","placeholder"],wM=Ce({__name:"TextareaForDescriptionProduct",props:{name:null,value:null,label:null,placeholder:null},setup(t){const e=t,n=St(e,"name"),{value:s,errorMessage:i,handleBlur:r,handleChange:o,meta:a}=jl(n,void 0,{initialValue:e.value});return(l,c)=>(Q(),le("div",yM,[t.label?(Q(),le("label",{key:0,class:"label-area",for:v(n)},Oe(t.label),9,EM)):cn("",!0),W("textarea",{class:_t(["area",{"error-area":v(i)}]),id:v(n),name:v(n),value:v(s),placeholder:t.placeholder,onInput:c[0]||(c[0]=(...u)=>v(o)&&v(o)(...u)),onBlur:c[1]||(c[1]=(...u)=>v(r)&&v(r)(...u))},null,42,bM),Ks(W("p",{class:"error"},Oe(v(i)),513),[[Li,v(i)||v(a).valid]])]))}});const IM=$e(wM,[["__scopeId","data-v-24521a36"]]),CM={class:"select-product"},TM=["for"],SM={value:"",disabled:""},AM=["value"],RM=Ce({__name:"SelectProduct",props:{label:null,defaultValue:null,name:null},setup(t){const e=We([{id:1,value:"pizza",product:"Піца"},{id:2,value:"burgers",product:"Бургери"},{id:3,value:"roles",product:"Роли"},{id:4,value:"salads",product:"Салати"},{id:5,value:"drinks",product:"Напої"}]);return(n,s)=>(Q(),le("div",CM,[W("label",{for:t.name,class:"label-product"},Oe(t.label),9,TM),J(v(V0),{class:"select-product",name:t.name,as:"select"},{default:It(()=>[W("option",SM,Oe(t.defaultValue),1),(Q(!0),le(Ye,null,to(e.value,i=>(Q(),le("option",{value:i.value,key:i.id},Oe(i.product),9,AM))),128))]),_:1},8,["name"]),J(v(H0),{class:"error",name:t.name},null,8,["name"])]))}});const kM=$e(RM,[["__scopeId","data-v-397e950d"]]),OM={class:"upload-cover"},PM=["for"],NM=["name","onChange","onBlur"],xM=Ce({__name:"UploadProductCoverInput",props:{name:null,label:null,value:null},setup(t){return(e,n)=>(Q(),le("div",OM,[W("label",{for:t.name,class:"label-cover-product"},Oe(t.label),9,PM),J(v(V0),{name:t.name},{default:It(({handleChange:s,handleBlur:i})=>[W("input",{type:"file",name:t.name,class:"upload-cover__input",onChange:s,onBlur:i},null,40,NM)]),_:1},8,["name"]),J(v(H0),{class:"error",name:t.name},null,8,["name"])]))}});const DM=$e(xM,[["__scopeId","data-v-b68c8bf5"]]),MM=Qd().shape({productName:bn().required("Поле обов'язкове"),productDescription:bn().required("Поле обов'язкове"),productPrice:bn().required("Поле обов'язкове"),productWeight:bn().required("Поле обов'язкове"),product:bn().required("Поле обов'язкове"),productCover:bn().required("Поле обов'язкове")}),LM={class:"add-products-form-wrapper"},FM={class:"add-products-form-wrapper__btn-conteiner"},UM=Ce({__name:"AddProductsForm",setup(t){const e={productName:"",productDescription:"",productPrice:0,productWeight:0,product:"",productCover:""},{handleSubmit:n}=Hl({validationSchema:MM,initialValues:e}),s=A0(),i=n((r,{resetForm:o})=>{s.uploadProduct(r),o()});return(r,o)=>(Q(),le("div",LM,[W("form",{class:"form",onSubmit:o[0]||(o[0]=(...a)=>v(i)&&v(i)(...a))},[J(xc,{type:"text",name:"productName",value:e.productName,label:"Назва страви",placeholder:"Назва страви"},null,8,["value"]),J(IM,{name:"productDescription",value:e.productDescription,label:"Опис",placeholder:"Опис"},null,8,["value"]),J(xc,{type:"number",name:"productPrice",value:e.productPrice,label:"Ціна",placeholder:"Ціна"},null,8,["value"]),J(xc,{type:"number",name:"productWeight",value:e.productWeight,label:"Вага",placeholder:"Вага"},null,8,["value"]),J(kM,{name:"product","default-value":"Оберіть категорію",label:"Категорія"}),J(DM,{label:"Оберіть фото для завантаження",name:"productCover",value:e.productCover},null,8,["value"]),W("div",FM,[J(Jd,null,{default:It(()=>[en("Submit")]),_:1})])],32)]))}});const BM=$e(UM,[["__scopeId","data-v-448a3195"]]),$M=Ce({__name:"AdminPage",setup(t){const e=Ki();return qs(()=>{e.user.email!=="caulfieldd17@gmail.com"&&Cs.push("/")}),(n,s)=>(Q(),Xt(BM))}}),VM=[{path:"/",component:b1},{path:"/sign-up",name:"sign-up",component:hM},{path:"/sign-in",name:"sign-in",component:pM},{path:"/admin",name:"admin",component:$M}],Cs=dx({history:kN("/snackSprint/"),routes:VM}),Ki=so("userStore",()=>{const t=_s(),e=We({id:"",email:""});function n(a,l){e.value.id=a,e.value.email=l}function s(){e.value.id="",e.value.email=""}function i(a,l){eT(Tc,a,l).then(({user:c})=>{c.email&&n(c.uid,c.email),Cs.push("/")}).catch(c=>t.toastify("error","Перевірте правильність введених даних"))}function r(a,l){tT(Tc,a,l).then(({user:c})=>{c.email&&n(c.uid,c.email),c.email==="caulfieldd17@gmail.com"?Cs.push("/admin"):Cs.push("/")}).catch(c=>t.toastify("error","Перевірте правильність введених даних"))}function o(){iT(Tc).then(()=>{s(),Cs.push("/")}).catch(a=>{Cs.push("/"),console.error(a)})}return{user:e,setUser:n,removeUser:s,signUpUser:i,signInUser:r,logoutUser:o}}),jM=["src"],HM=Ce({__name:"LogInButton",setup(t){const e=Ki();return(n,s)=>(Q(),Xt(v(Xr),{class:_t(["logIn-btn",{isAuth:!v(e).user.email}]),to:"/sign-in"},{default:It(()=>[W("img",{src:v(_x),alt:""},null,8,jM)]),_:1},8,["class"]))}});const WM=$e(HM,[["__scopeId","data-v-907384db"]]),zM="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAADm0lEQVR4nO3aSYgcVRjA8TfilognMYqCikQDGtyiEYI7okLADRRUCKghYBCFuBxURIS4HBQGYowegkYlJgc9iCiKMQcPoh4kEA8REUUixCBujFETf/LoanhT9nSsnqrm1Vj/U09P9fd976u3fUsIHR0dHR3jBadgOe7GM3gDn2AXvsJe/Ii/cWZoOzgCN+AV7FaNx0JbwXw8jO+Nzs7QRnAZvlEP7VoGuAN/qY/2LANci/3qpR3LAAvwg2b4FneGnNE70ppmecgRHImfx+CAnZgIuYEbjY8LQm7g2TE64JGQG9hWMnJjsSleiTVYh7ewA18XV90/8UfxOV6BP8UWPFHMqBPx9AAHvBlyQ28AfeId4Pia5B6Cj0sO2BFyA78kBn5Ys+yrSg74LuSG3nTu81DNsieKe0CfqZAbpnNdA/JfTBWEzB1wRgPyV7fJAcc2IP+iNjng0Abkn9QaB4Rm5B/1v3ZAJFsHYNmYHBCTpH2WhVzQu7722dygns2Jni0hF0zP9DaWv8PiRM/ukAvYlxg2v+Esc599IRfwZWLY0gb1XJjo2RVyAS8lhr0dI7gGdMSo8J1Ez8aQCzgPBxLjNjSgY0MiP+o6N+SE6YmLaOBpNco+veTgJ0Nu6E3RNCv0XENvf1sTS6wWivRXn5gfWFyDzLNLVaYrQs7gvcTYmMo6bBayDi/yhH3eDbmDRfgtMXrdLGQ9n8j5tc59pVFwm+ncM4KMmElOuSW0CaxPjI9BzKoKv72rFPjUtqGODRxXeoNxQI8PK2sVyc+1/s2C0Daw0GBejXXEGWqLabSXsjC0DSw1vMB5fvLsWfi8VbXAg4FrkgF8gKdK63oYL2B78vfVoW3g1nKSJNYLijrgTMTy+s3Fs6+39gQYkMdfX+oRjPvAVPL/qaKF7uQZTpHVoU3oVYU3JQNYO4KM9DTYlP1JgFNxL94f0CG2ZgR595VkxGjws9gxhiXNjKJ69LekMCju6sO4fcRWu2HEcvxkEYDVXogZCOYVCicrtrxWLpbi+gry9xbL5CYcXVXXUHAMVmBrqQegChePoPeSEXX9XizDuBxPqKo3jegexEelTMyoPDro9neQmRZ/M1sOFGOIY1kUKhiwR/38hJdjsyPOiW+nGOi84nP8bmUxleOzdbOnigO2m3v897YdvU1urjFZxQGXm3tcWsUBE3jN3GFr5fZavYTkA/iigfb3cbC/sP3+2SRmOzo6OjrCHOYfLRvw1Ppk1+YAAAAASUVORK5CYII=",qM={class:"user-menu"},KM=["src"],GM={class:"user-menu"},YM={class:"user-menu__item"},XM={key:0,class:"user-menu__item"},QM=Ce({__name:"UserMenu",setup(t){const e=Ki(),n=()=>{e.logoutUser()};return(s,i)=>(Q(),le("div",qM,[W("img",{src:v(zM),class:_t(["user-account-btn",{isAuth:v(e).user.email}]),alt:""},null,10,KM),Ks(W("ul",GM,[W("li",{class:"user-menu__item"},[W("span",{onClick:n},"Вийти")]),W("li",YM,[W("span",null,[J(v(Xr),{to:"/"},{default:It(()=>[en("Головна")]),_:1})])]),v(e).user.email=="caulfieldd17@gmail.com"?(Q(),le("li",XM,[W("span",null,[J(v(Xr),{to:"/admin"},{default:It(()=>[en("Адмінка")]),_:1})])])):cn("",!0)],512),[[Li,v(e).user.email]])]))}});const JM=$e(QM,[["__scopeId","data-v-018e3485"]]),ZM=t=>(Jr("data-v-cdea7ee8"),t=t(),Zr(),t),eL={class:"header"},tL=ZM(()=>W("h1",null,"SnakeSprint",-1)),nL=Ce({__name:"Header",setup(t){const e=px();return(n,s)=>(Q(),le("header",eL,[J(v(Xr),{to:"/"},{default:It(()=>[tL]),_:1}),J(WM),v(e).path=="/"?(Q(),Xt(uN,{key:0})):cn("",!0),J(JM)]))}});const sL=$e(nL,[["__scopeId","data-v-cdea7ee8"]]);const iL={},rL={class:"main"};function oL(t,e){return Q(),le("main",rL,[sh(t.$slots,"default",{},void 0,!0)])}const aL=$e(iL,[["render",oL],["__scopeId","data-v-15a2598a"]]),lL={class:"toast__text"},cL=Ce({__name:"Toast",setup(t){const e=_s();return(n,s)=>(Q(),le("div",{class:_t(["toast-container",{"toast-visible":v(e).main.success||v(e).main.error}])},[W("div",{class:_t(["toast",[v(e).main.success&&"toast-succes",v(e).main.error&&"toast-error"]])},[W("p",lL,Oe(v(e).main.message),1)],2)],2))}});const uL=$e(cL,[["__scopeId","data-v-6635c369"]]),hL=Ce({__name:"App",setup(t){return(e,n)=>{const s=th("RouterView");return Q(),le(Ye,null,[J(sL),J(uL),J(aL,null,{default:It(()=>[J(s)]),_:1}),J(Lw)],64)}}});const Zd=Tw(hL);Zd.use(Cs);Zd.use(Rw());Zd.mount("#app");
