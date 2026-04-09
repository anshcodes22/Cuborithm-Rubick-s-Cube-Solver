var Bg=Object.defineProperty;var zg=(n,e,t)=>e in n?Bg(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var ot=(n,e,t)=>zg(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function Qt(n,e){const t=Object.create(null),i=n.split(",");for(let s=0;s<i.length;s++)t[i[s]]=!0;return e?s=>!!t[s.toLowerCase()]:s=>!!t[s]}const Vg="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",Hg=Qt(Vg);function ms(n){if(Le(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=ke(i)?Id(i):ms(i);if(s)for(const r in s)e[r]=s[r]}return e}else{if(ke(n))return n;if(tt(n))return n}}const Gg=/;(?![^(]*\))/g,Wg=/:([^]+)/,jg=/\/\*.*?\*\//gs;function Id(n){const e={};return n.replace(jg,"").split(Gg).forEach(t=>{if(t){const i=t.split(Wg);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function ti(n){let e="";if(ke(n))e=n;else if(Le(n))for(let t=0;t<n.length;t++){const i=ti(n[t]);i&&(e+=i+" ")}else if(tt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}function $g(n){if(!n)return null;let{class:e,style:t}=n;return e&&!ke(e)&&(n.class=ti(e)),t&&(n.style=ms(t)),n}const qg="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",Xg="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",Kg="area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr",Yg=Qt(qg),Zg=Qt(Xg),Jg=Qt(Kg),Qg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",e_=Qt(Qg);function Fd(n){return!!n||n===""}function t_(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=xi(n[i],e[i]);return t}function xi(n,e){if(n===e)return!0;let t=nf(n),i=nf(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=yi(n),i=yi(e),t||i)return n===e;if(t=Le(n),i=Le(e),t||i)return t&&i?t_(n,e):!1;if(t=tt(n),i=tt(e),t||i){if(!t||!i)return!1;const s=Object.keys(n).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!xi(n[o],e[o]))return!1}}return String(n)===String(e)}function Fa(n,e){return n.findIndex(t=>xi(t,e))}const Gi=n=>ke(n)?n:n==null?"":Le(n)||tt(n)&&(n.toString===Od||!Ne(n.toString))?JSON.stringify(n,Nd,2):String(n),Nd=(n,e)=>e&&e.__v_isRef?Nd(n,e.value):Zs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s])=>(t[`${i} =>`]=s,t),{})}:_s(e)?{[`Set(${e.size})`]:[...e.values()]}:tt(e)&&!Le(e)&&!Ud(e)?String(e):e,et={},Ys=[],Zt=()=>{},sa=()=>!1,n_=/^on[^a-z]/,gs=n=>n_.test(n),$c=n=>n.startsWith("onUpdate:"),Je=Object.assign,qc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},i_=Object.prototype.hasOwnProperty,Ye=(n,e)=>i_.call(n,e),Le=Array.isArray,Zs=n=>_r(n)==="[object Map]",_s=n=>_r(n)==="[object Set]",nf=n=>_r(n)==="[object Date]",s_=n=>_r(n)==="[object RegExp]",Ne=n=>typeof n=="function",ke=n=>typeof n=="string",yi=n=>typeof n=="symbol",tt=n=>n!==null&&typeof n=="object",Xc=n=>tt(n)&&Ne(n.then)&&Ne(n.catch),Od=Object.prototype.toString,_r=n=>Od.call(n),r_=n=>_r(n).slice(8,-1),Ud=n=>_r(n)==="[object Object]",Kc=n=>ke(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Xi=Qt(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),o_=Qt("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),Na=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},a_=/-(\w)/g,Lt=Na(n=>n.replace(a_,(e,t)=>t?t.toUpperCase():"")),l_=/\B([A-Z])/g,un=Na(n=>n.replace(l_,"-$1").toLowerCase()),vs=Na(n=>n.charAt(0).toUpperCase()+n.slice(1)),Js=Na(n=>n?`on${vs(n)}`:""),rr=(n,e)=>!Object.is(n,e),Qs=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},da=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},pa=n=>{const e=parseFloat(n);return isNaN(e)?n:e},ma=n=>{const e=ke(n)?Number(n):NaN;return isNaN(e)?n:e};let sf;const c_=()=>sf||(sf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let an;class Yc{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=an,!e&&an&&(this.index=(an.scopes||(an.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=an;try{return an=this,e()}finally{an=t}}}on(){an=this}off(){an=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function u_(n){return new Yc(n)}function kd(n,e=an){e&&e.active&&e.effects.push(n)}function Bd(){return an}function f_(n){an&&an.cleanups.push(n)}const Zc=n=>{const e=new Set(n);return e.w=0,e.n=0,e},zd=n=>(n.w&bi)>0,Vd=n=>(n.n&bi)>0,h_=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=bi},d_=n=>{const{deps:e}=n;if(e.length){let t=0;for(let i=0;i<e.length;i++){const s=e[i];zd(s)&&!Vd(s)?s.delete(n):e[t++]=s,s.w&=~bi,s.n&=~bi}e.length=t}},ga=new WeakMap;let kr=0,bi=1;const oc=30;let An;const Ki=Symbol(""),ac=Symbol("");class po{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,kd(this,i)}run(){if(!this.active)return this.fn();let e=An,t=gi;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=An,An=this,gi=!0,bi=1<<++kr,kr<=oc?h_(this):rf(this),this.fn()}finally{kr<=oc&&d_(this),bi=1<<--kr,An=this.parent,gi=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){An===this?this.deferStop=!0:this.active&&(rf(this),this.onStop&&this.onStop(),this.active=!1)}}function rf(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}function p_(n,e){n.effect&&(n=n.effect.fn);const t=new po(n);e&&(Je(t,e),e.scope&&kd(t,e.scope)),(!e||!e.lazy)&&t.run();const i=t.run.bind(t);return i.effect=t,i}function m_(n){n.effect.stop()}let gi=!0;const Hd=[];function vr(){Hd.push(gi),gi=!1}function xr(){const n=Hd.pop();gi=n===void 0?!0:n}function Jt(n,e,t){if(gi&&An){let i=ga.get(n);i||ga.set(n,i=new Map);let s=i.get(t);s||i.set(t,s=Zc()),Gd(s)}}function Gd(n,e){let t=!1;kr<=oc?Vd(n)||(n.n|=bi,t=!zd(n)):t=!n.has(An),t&&(n.add(An),An.deps.push(n))}function ni(n,e,t,i,s,r){const o=ga.get(n);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Le(n)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Le(n)?Kc(t)&&a.push(o.get("length")):(a.push(o.get(Ki)),Zs(n)&&a.push(o.get(ac)));break;case"delete":Le(n)||(a.push(o.get(Ki)),Zs(n)&&a.push(o.get(ac)));break;case"set":Zs(n)&&a.push(o.get(Ki));break}if(a.length===1)a[0]&&lc(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);lc(Zc(l))}}function lc(n,e){const t=Le(n)?n:[...n];for(const i of t)i.computed&&of(i);for(const i of t)i.computed||of(i)}function of(n,e){(n!==An||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}function g_(n,e){var t;return(t=ga.get(n))===null||t===void 0?void 0:t.get(e)}const __=Qt("__proto__,__v_isRef,__isVue"),Wd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(yi)),v_=Oa(),x_=Oa(!1,!0),y_=Oa(!0),b_=Oa(!0,!0),af=M_();function M_(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=je(this);for(let r=0,o=this.length;r<o;r++)Jt(i,"get",r+"");const s=i[e](...t);return s===-1||s===!1?i[e](...t.map(je)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){vr();const i=je(this)[e].apply(this,t);return xr(),i}}),n}function S_(n){const e=je(this);return Jt(e,"has",n),e.hasOwnProperty(n)}function Oa(n=!1,e=!1){return function(i,s,r){if(s==="__v_isReactive")return!n;if(s==="__v_isReadonly")return n;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&r===(n?e?Zd:Yd:e?Kd:Xd).get(i))return i;const o=Le(i);if(!n){if(o&&Ye(af,s))return Reflect.get(af,s,r);if(s==="hasOwnProperty")return S_}const a=Reflect.get(i,s,r);return(yi(s)?Wd.has(s):__(s))||(n||Jt(i,"get",s),e)?a:Rt(a)?o&&Kc(s)?a:a.value:tt(a)?n?Qc(a):Ba(a):a}}const w_=jd(),E_=jd(!0);function jd(n=!1){return function(t,i,s,r){let o=t[i];if(rs(o)&&Rt(o)&&!Rt(s))return!1;if(!n&&(!Zr(s)&&!rs(s)&&(o=je(o),s=je(s)),!Le(t)&&Rt(o)&&!Rt(s)))return o.value=s,!0;const a=Le(t)&&Kc(i)?Number(i)<t.length:Ye(t,i),l=Reflect.set(t,i,s,r);return t===je(r)&&(a?rr(s,o)&&ni(t,"set",i,s):ni(t,"add",i,s)),l}}function T_(n,e){const t=Ye(n,e);n[e];const i=Reflect.deleteProperty(n,e);return i&&t&&ni(n,"delete",e,void 0),i}function C_(n,e){const t=Reflect.has(n,e);return(!yi(e)||!Wd.has(e))&&Jt(n,"has",e),t}function A_(n){return Jt(n,"iterate",Le(n)?"length":Ki),Reflect.ownKeys(n)}const $d={get:v_,set:w_,deleteProperty:T_,has:C_,ownKeys:A_},qd={get:y_,set(n,e){return!0},deleteProperty(n,e){return!0}},R_=Je({},$d,{get:x_,set:E_}),L_=Je({},qd,{get:b_}),Jc=n=>n,Ua=n=>Reflect.getPrototypeOf(n);function Eo(n,e,t=!1,i=!1){n=n.__v_raw;const s=je(n),r=je(e);t||(e!==r&&Jt(s,"get",e),Jt(s,"get",r));const{has:o}=Ua(s),a=i?Jc:t?nu:Jr;if(o.call(s,e))return a(n.get(e));if(o.call(s,r))return a(n.get(r));n!==s&&n.get(e)}function To(n,e=!1){const t=this.__v_raw,i=je(t),s=je(n);return e||(n!==s&&Jt(i,"has",n),Jt(i,"has",s)),n===s?t.has(n):t.has(n)||t.has(s)}function Co(n,e=!1){return n=n.__v_raw,!e&&Jt(je(n),"iterate",Ki),Reflect.get(n,"size",n)}function lf(n){n=je(n);const e=je(this);return Ua(e).has.call(e,n)||(e.add(n),ni(e,"add",n,n)),this}function cf(n,e){e=je(e);const t=je(this),{has:i,get:s}=Ua(t);let r=i.call(t,n);r||(n=je(n),r=i.call(t,n));const o=s.call(t,n);return t.set(n,e),r?rr(e,o)&&ni(t,"set",n,e):ni(t,"add",n,e),this}function uf(n){const e=je(this),{has:t,get:i}=Ua(e);let s=t.call(e,n);s||(n=je(n),s=t.call(e,n)),i&&i.call(e,n);const r=e.delete(n);return s&&ni(e,"delete",n,void 0),r}function ff(){const n=je(this),e=n.size!==0,t=n.clear();return e&&ni(n,"clear",void 0,void 0),t}function Ao(n,e){return function(i,s){const r=this,o=r.__v_raw,a=je(o),l=e?Jc:n?nu:Jr;return!n&&Jt(a,"iterate",Ki),o.forEach((c,u)=>i.call(s,l(c),l(u),r))}}function Ro(n,e,t){return function(...i){const s=this.__v_raw,r=je(s),o=Zs(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?Jc:e?nu:Jr;return!e&&Jt(r,"iterate",l?ac:Ki),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function ri(n){return function(...e){return n==="delete"?!1:this}}function P_(){const n={get(r){return Eo(this,r)},get size(){return Co(this)},has:To,add:lf,set:cf,delete:uf,clear:ff,forEach:Ao(!1,!1)},e={get(r){return Eo(this,r,!1,!0)},get size(){return Co(this)},has:To,add:lf,set:cf,delete:uf,clear:ff,forEach:Ao(!1,!0)},t={get(r){return Eo(this,r,!0)},get size(){return Co(this,!0)},has(r){return To.call(this,r,!0)},add:ri("add"),set:ri("set"),delete:ri("delete"),clear:ri("clear"),forEach:Ao(!0,!1)},i={get(r){return Eo(this,r,!0,!0)},get size(){return Co(this,!0)},has(r){return To.call(this,r,!0)},add:ri("add"),set:ri("set"),delete:ri("delete"),clear:ri("clear"),forEach:Ao(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Ro(r,!1,!1),t[r]=Ro(r,!0,!1),e[r]=Ro(r,!1,!0),i[r]=Ro(r,!0,!0)}),[n,t,e,i]}const[D_,I_,F_,N_]=P_();function ka(n,e){const t=e?n?N_:F_:n?I_:D_;return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(Ye(t,s)&&s in i?t:i,s,r)}const O_={get:ka(!1,!1)},U_={get:ka(!1,!0)},k_={get:ka(!0,!1)},B_={get:ka(!0,!0)},Xd=new WeakMap,Kd=new WeakMap,Yd=new WeakMap,Zd=new WeakMap;function z_(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function V_(n){return n.__v_skip||!Object.isExtensible(n)?0:z_(r_(n))}function Ba(n){return rs(n)?n:za(n,!1,$d,O_,Xd)}function Jd(n){return za(n,!1,R_,U_,Kd)}function Qc(n){return za(n,!0,qd,k_,Yd)}function H_(n){return za(n,!0,L_,B_,Zd)}function za(n,e,t,i,s){if(!tt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=s.get(n);if(r)return r;const o=V_(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return s.set(n,a),a}function Yi(n){return rs(n)?Yi(n.__v_raw):!!(n&&n.__v_isReactive)}function rs(n){return!!(n&&n.__v_isReadonly)}function Zr(n){return!!(n&&n.__v_isShallow)}function eu(n){return Yi(n)||rs(n)}function je(n){const e=n&&n.__v_raw;return e?je(e):n}function tu(n){return da(n,"__v_skip",!0),n}const Jr=n=>tt(n)?Ba(n):n,nu=n=>tt(n)?Qc(n):n;function iu(n){gi&&An&&(n=je(n),Gd(n.dep||(n.dep=Zc())))}function Va(n,e){n=je(n);const t=n.dep;t&&lc(t)}function Rt(n){return!!(n&&n.__v_isRef===!0)}function Pt(n){return Qd(n,!1)}function G_(n){return Qd(n,!0)}function Qd(n,e){return Rt(n)?n:new W_(n,e)}class W_{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:je(e),this._value=t?e:Jr(e)}get value(){return iu(this),this._value}set value(e){const t=this.__v_isShallow||Zr(e)||rs(e);e=t?e:je(e),rr(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Jr(e),Va(this))}}function j_(n){Va(n)}function _a(n){return Rt(n)?n.value:n}const $_={get:(n,e,t)=>_a(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return Rt(s)&&!Rt(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function su(n){return Yi(n)?n:new Proxy(n,$_)}class q_{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:t,set:i}=e(()=>iu(this),()=>Va(this));this._get=t,this._set=i}get value(){return this._get()}set value(e){this._set(e)}}function X_(n){return new q_(n)}function K_(n){const e=Le(n)?new Array(n.length):{};for(const t in n)e[t]=ep(n,t);return e}class Y_{constructor(e,t,i){this._object=e,this._key=t,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return g_(je(this._object),this._key)}}function ep(n,e,t){const i=n[e];return Rt(i)?i:new Y_(n,e,t)}var tp;class Z_{constructor(e,t,i,s){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[tp]=!1,this._dirty=!0,this.effect=new po(e,()=>{this._dirty||(this._dirty=!0,Va(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=je(this);return iu(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}tp="__v_isReadonly";function J_(n,e,t=!1){let i,s;const r=Ne(n);return r?(i=n,s=Zt):(i=n.get,s=n.set),new Z_(i,s,r||!s,t)}function Q_(n,...e){}function e0(n,e){}function Jn(n,e,t,i){let s;try{s=i?n(...i):n()}catch(r){xs(r,e,t)}return s}function hn(n,e,t,i){if(Ne(n)){const r=Jn(n,e,t,i);return r&&Xc(r)&&r.catch(o=>{xs(o,e,t)}),r}const s=[];for(let r=0;r<n.length;r++)s.push(hn(n[r],e,t,i));return s}function xs(n,e,t,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=t;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){Jn(l,null,10,[n,o,a]);return}}t0(n,t,s,i)}function t0(n,e,t,i=!0){console.error(n)}let Qr=!1,cc=!1;const Ot=[];let Un=0;const er=[];let Xn=null,zi=0;const np=Promise.resolve();let ru=null;function Ha(n){const e=ru||np;return n?e.then(this?n.bind(this):n):e}function n0(n){let e=Un+1,t=Ot.length;for(;e<t;){const i=e+t>>>1;eo(Ot[i])<n?e=i+1:t=i}return e}function Ga(n){(!Ot.length||!Ot.includes(n,Qr&&n.allowRecurse?Un+1:Un))&&(n.id==null?Ot.push(n):Ot.splice(n0(n.id),0,n),ip())}function ip(){!Qr&&!cc&&(cc=!0,ru=np.then(sp))}function i0(n){const e=Ot.indexOf(n);e>Un&&Ot.splice(e,1)}function ou(n){Le(n)?er.push(...n):(!Xn||!Xn.includes(n,n.allowRecurse?zi+1:zi))&&er.push(n),ip()}function hf(n,e=Qr?Un+1:0){for(;e<Ot.length;e++){const t=Ot[e];t&&t.pre&&(Ot.splice(e,1),e--,t())}}function va(n){if(er.length){const e=[...new Set(er)];if(er.length=0,Xn){Xn.push(...e);return}for(Xn=e,Xn.sort((t,i)=>eo(t)-eo(i)),zi=0;zi<Xn.length;zi++)Xn[zi]();Xn=null,zi=0}}const eo=n=>n.id==null?1/0:n.id,s0=(n,e)=>{const t=eo(n)-eo(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function sp(n){cc=!1,Qr=!0,Ot.sort(s0);try{for(Un=0;Un<Ot.length;Un++){const e=Ot[Un];e&&e.active!==!1&&Jn(e,null,14)}}finally{Un=0,Ot.length=0,va(),Qr=!1,ru=null,(Ot.length||er.length)&&sp()}}let Hs,Lo=[];function rp(n,e){var t,i;Hs=n,Hs?(Hs.enabled=!0,Lo.forEach(({event:s,args:r})=>Hs.emit(s,...r)),Lo=[]):typeof window<"u"&&window.HTMLElement&&!(!((i=(t=window.navigator)===null||t===void 0?void 0:t.userAgent)===null||i===void 0)&&i.includes("jsdom"))?((e.__VUE_DEVTOOLS_HOOK_REPLAY__=e.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(r=>{rp(r,e)}),setTimeout(()=>{Hs||(e.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Lo=[])},3e3)):Lo=[]}function r0(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||et;let s=t;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=i[u]||et;h&&(s=t.map(m=>ke(m)?m.trim():m)),f&&(s=t.map(pa))}let a,l=i[a=Js(e)]||i[a=Js(Lt(e))];!l&&r&&(l=i[a=Js(un(e))]),l&&hn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,hn(c,n,6,s)}}function op(n,e,t=!1){const i=e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Ne(n)){const l=c=>{const u=op(c,e,!0);u&&(a=!0,Je(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(tt(n)&&i.set(n,null),null):(Le(r)?r.forEach(l=>o[l]=null):Je(o,r),tt(n)&&i.set(n,o),o)}function Wa(n,e){return!n||!gs(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ye(n,e[0].toLowerCase()+e.slice(1))||Ye(n,un(e))||Ye(n,e))}let It=null,ja=null;function to(n){const e=It;return It=n,ja=n&&n.type.__scopeId||null,e}function au(n){ja=n}function lu(){ja=null}const o0=n=>cu;function cu(n,e=It,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&_c(-1);const r=to(e);let o;try{o=n(...s)}finally{to(r),i._d&&_c(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function ra(n){const{type:e,vnode:t,proxy:i,withProxy:s,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:h,setupState:m,ctx:v,inheritAttrs:d}=n;let p,g;const _=to(n);try{if(t.shapeFlag&4){const w=s||i;p=ln(u.call(w,w,f,r,m,h,v)),g=l}else{const w=e;p=ln(w.length>1?w(r,{attrs:l,slots:a,emit:c}):w(r,null)),g=e.props?l:l0(l)}}catch(w){$r.length=0,xs(w,n,1),p=st(kt)}let b=p;if(g&&d!==!1){const w=Object.keys(g),{shapeFlag:S}=b;w.length&&S&7&&(o&&w.some($c)&&(g=c0(g,o)),b=Bn(b,g))}return t.dirs&&(b=Bn(b),b.dirs=b.dirs?b.dirs.concat(t.dirs):t.dirs),t.transition&&(b.transition=t.transition),p=b,to(_),p}function a0(n){let e;for(let t=0;t<n.length;t++){const i=n[t];if(Mi(i)){if(i.type!==kt||i.children==="v-if"){if(e)return;e=i}}else return}return e}const l0=n=>{let e;for(const t in n)(t==="class"||t==="style"||gs(t))&&((e||(e={}))[t]=n[t]);return e},c0=(n,e)=>{const t={};for(const i in n)(!$c(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function u0(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?df(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!Wa(c,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?df(i,o,c):!0:!!o;return!1}function df(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!Wa(t,r))return!0}return!1}function uu({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const ap=n=>n.__isSuspense,f0={name:"Suspense",__isSuspense:!0,process(n,e,t,i,s,r,o,a,l,c){n==null?d0(e,t,i,s,r,o,a,l,c):p0(n,e,t,i,s,o,a,l,c)},hydrate:m0,create:fu,normalize:g0},h0=f0;function no(n,e){const t=n.props&&n.props[e];Ne(t)&&t()}function d0(n,e,t,i,s,r,o,a,l){const{p:c,o:{createElement:u}}=l,f=u("div"),h=n.suspense=fu(n,s,i,e,f,t,r,o,a,l);c(null,h.pendingBranch=n.ssContent,f,null,i,h,r,o),h.deps>0?(no(n,"onPending"),no(n,"onFallback"),c(null,n.ssFallback,e,t,i,null,r,o),tr(h,n.ssFallback)):h.resolve()}function p0(n,e,t,i,s,r,o,a,{p:l,um:c,o:{createElement:u}}){const f=e.suspense=n.suspense;f.vnode=e,e.el=n.el;const h=e.ssContent,m=e.ssFallback,{activeBranch:v,pendingBranch:d,isInFallback:p,isHydrating:g}=f;if(d)f.pendingBranch=h,Rn(h,d)?(l(d,h,f.hiddenContainer,null,s,f,r,o,a),f.deps<=0?f.resolve():p&&(l(v,m,t,i,s,null,r,o,a),tr(f,m))):(f.pendingId++,g?(f.isHydrating=!1,f.activeBranch=d):c(d,s,f),f.deps=0,f.effects.length=0,f.hiddenContainer=u("div"),p?(l(null,h,f.hiddenContainer,null,s,f,r,o,a),f.deps<=0?f.resolve():(l(v,m,t,i,s,null,r,o,a),tr(f,m))):v&&Rn(h,v)?(l(v,h,t,i,s,f,r,o,a),f.resolve(!0)):(l(null,h,f.hiddenContainer,null,s,f,r,o,a),f.deps<=0&&f.resolve()));else if(v&&Rn(h,v))l(v,h,t,i,s,f,r,o,a),tr(f,h);else if(no(e,"onPending"),f.pendingBranch=h,f.pendingId++,l(null,h,f.hiddenContainer,null,s,f,r,o,a),f.deps<=0)f.resolve();else{const{timeout:_,pendingId:b}=f;_>0?setTimeout(()=>{f.pendingId===b&&f.fallback(m)},_):_===0&&f.fallback(m)}}function fu(n,e,t,i,s,r,o,a,l,c,u=!1){const{p:f,m:h,um:m,n:v,o:{parentNode:d,remove:p}}=c,g=n.props?ma(n.props.timeout):void 0,_={vnode:n,parent:e,parentComponent:t,isSVG:o,container:i,hiddenContainer:s,anchor:r,deps:0,pendingId:0,timeout:typeof g=="number"?g:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(b=!1){const{vnode:w,activeBranch:S,pendingBranch:P,pendingId:L,effects:x,parentComponent:T,container:D}=_;if(_.isHydrating)_.isHydrating=!1;else if(!b){const N=S&&P.transition&&P.transition.mode==="out-in";N&&(S.transition.afterLeave=()=>{L===_.pendingId&&h(P,D,F,0)});let{anchor:F}=_;S&&(F=v(S),m(S,T,_,!0)),N||h(P,D,F,0)}tr(_,P),_.pendingBranch=null,_.isInFallback=!1;let V=_.parent,W=!1;for(;V;){if(V.pendingBranch){V.effects.push(...x),W=!0;break}V=V.parent}W||ou(x),_.effects=[],no(w,"onResolve")},fallback(b){if(!_.pendingBranch)return;const{vnode:w,activeBranch:S,parentComponent:P,container:L,isSVG:x}=_;no(w,"onFallback");const T=v(S),D=()=>{_.isInFallback&&(f(null,b,L,T,P,null,x,a,l),tr(_,b))},V=b.transition&&b.transition.mode==="out-in";V&&(S.transition.afterLeave=D),_.isInFallback=!0,m(S,P,null,!0),V||D()},move(b,w,S){_.activeBranch&&h(_.activeBranch,b,w,S),_.container=b},next(){return _.activeBranch&&v(_.activeBranch)},registerDep(b,w){const S=!!_.pendingBranch;S&&_.deps++;const P=b.vnode.el;b.asyncDep.catch(L=>{xs(L,b,0)}).then(L=>{if(b.isUnmounted||_.isUnmounted||_.pendingId!==b.suspenseId)return;b.asyncResolved=!0;const{vnode:x}=b;vc(b,L,!1),P&&(x.el=P);const T=!P&&b.subTree.el;w(b,x,d(P||b.subTree.el),P?null:v(b.subTree),_,o,l),T&&p(T),uu(b,x.el),S&&--_.deps===0&&_.resolve()})},unmount(b,w){_.isUnmounted=!0,_.activeBranch&&m(_.activeBranch,t,b,w),_.pendingBranch&&m(_.pendingBranch,t,b,w)}};return _}function m0(n,e,t,i,s,r,o,a,l){const c=e.suspense=fu(e,i,t,n.parentNode,document.createElement("div"),null,s,r,o,a,!0),u=l(n,c.pendingBranch=e.ssContent,t,c,r,o);return c.deps===0&&c.resolve(),u}function g0(n){const{shapeFlag:e,children:t}=n,i=e&32;n.ssContent=pf(i?t.default:t),n.ssFallback=i?pf(t.fallback):st(kt)}function pf(n){let e;if(Ne(n)){const t=ls&&n._c;t&&(n._d=!1,at()),n=n(),t&&(n._d=!0,e=Kt,Op())}return Le(n)&&(n=a0(n)),n=ln(n),e&&!n.dynamicChildren&&(n.dynamicChildren=e.filter(t=>t!==n)),n}function lp(n,e){e&&e.pendingBranch?Le(n)?e.effects.push(...n):e.effects.push(n):ou(n)}function tr(n,e){n.activeBranch=e;const{vnode:t,parentComponent:i}=n,s=t.el=e.el;i&&i.subTree===t&&(i.vnode.el=s,uu(i,s))}function cp(n,e){if(ft){let t=ft.provides;const i=ft.parent&&ft.parent.provides;i===t&&(t=ft.provides=Object.create(i)),t[n]=e}}function Gr(n,e,t=!1){const i=ft||It;if(i){const s=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(s&&n in s)return s[n];if(arguments.length>1)return t&&Ne(e)?e.call(i.proxy):e}}function _0(n,e){return mo(n,null,e)}function up(n,e){return mo(n,null,{flush:"post"})}function v0(n,e){return mo(n,null,{flush:"sync"})}const Po={};function nr(n,e,t){return mo(n,e,t)}function mo(n,e,{immediate:t,deep:i,flush:s,onTrack:r,onTrigger:o}=et){const a=Bd()===(ft==null?void 0:ft.scope)?ft:null;let l,c=!1,u=!1;if(Rt(n)?(l=()=>n.value,c=Zr(n)):Yi(n)?(l=()=>n,i=!0):Le(n)?(u=!0,c=n.some(b=>Yi(b)||Zr(b)),l=()=>n.map(b=>{if(Rt(b))return b.value;if(Yi(b))return Wi(b);if(Ne(b))return Jn(b,a,2)})):Ne(n)?e?l=()=>Jn(n,a,2):l=()=>{if(!(a&&a.isUnmounted))return f&&f(),hn(n,a,3,[h])}:l=Zt,e&&i){const b=l;l=()=>Wi(b())}let f,h=b=>{f=g.onStop=()=>{Jn(b,a,4)}},m;if(ar)if(h=Zt,e?t&&hn(e,a,3,[l(),u?[]:void 0,h]):l(),s==="sync"){const b=Yp();m=b.__watcherHandles||(b.__watcherHandles=[])}else return Zt;let v=u?new Array(n.length).fill(Po):Po;const d=()=>{if(g.active)if(e){const b=g.run();(i||c||(u?b.some((w,S)=>rr(w,v[S])):rr(b,v)))&&(f&&f(),hn(e,a,3,[b,v===Po?void 0:u&&v[0]===Po?[]:v,h]),v=b)}else g.run()};d.allowRecurse=!!e;let p;s==="sync"?p=d:s==="post"?p=()=>Dt(d,a&&a.suspense):(d.pre=!0,a&&(d.id=a.uid),p=()=>Ga(d));const g=new po(l,p);e?t?d():v=g.run():s==="post"?Dt(g.run.bind(g),a&&a.suspense):g.run();const _=()=>{g.stop(),a&&a.scope&&qc(a.scope.effects,g)};return m&&m.push(_),_}function x0(n,e,t){const i=this.proxy,s=ke(n)?n.includes(".")?fp(i,n):()=>i[n]:n.bind(i,i);let r;Ne(e)?r=e:(r=e.handler,t=e);const o=ft;Si(this);const a=mo(s,r.bind(i),t);return o?Si(o):_i(),a}function fp(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}function Wi(n,e){if(!tt(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),Rt(n))Wi(n.value,e);else if(Le(n))for(let t=0;t<n.length;t++)Wi(n[t],e);else if(_s(n)||Zs(n))n.forEach(t=>{Wi(t,e)});else if(Ud(n))for(const t in n)Wi(n[t],e);return n}function hu(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return br(()=>{n.isMounted=!0}),Ka(()=>{n.isUnmounting=!0}),n}const _n=[Function,Array],y0={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:_n,onEnter:_n,onAfterEnter:_n,onEnterCancelled:_n,onBeforeLeave:_n,onLeave:_n,onAfterLeave:_n,onLeaveCancelled:_n,onBeforeAppear:_n,onAppear:_n,onAfterAppear:_n,onAppearCancelled:_n},setup(n,{slots:e}){const t=Ti(),i=hu();let s;return()=>{const r=e.default&&$a(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const d of r)if(d.type!==kt){o=d;break}}const a=je(n),{mode:l}=a;if(i.isLeaving)return fl(o);const c=mf(o);if(!c)return fl(o);const u=or(c,a,i,t);os(c,u);const f=t.subTree,h=f&&mf(f);let m=!1;const{getTransitionKey:v}=c.type;if(v){const d=v();s===void 0?s=d:d!==s&&(s=d,m=!0)}if(h&&h.type!==kt&&(!Rn(c,h)||m)){const d=or(h,a,i,t);if(os(h,d),l==="out-in")return i.isLeaving=!0,d.afterLeave=()=>{i.isLeaving=!1,t.update.active!==!1&&t.update()},fl(o);l==="in-out"&&c.type!==kt&&(d.delayLeave=(p,g,_)=>{const b=hp(i,h);b[String(h.key)]=h,p._leaveCb=()=>{g(),p._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=_})}return o}}},du=y0;function hp(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function or(n,e,t,i){const{appear:s,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:f,onLeave:h,onAfterLeave:m,onLeaveCancelled:v,onBeforeAppear:d,onAppear:p,onAfterAppear:g,onAppearCancelled:_}=e,b=String(n.key),w=hp(t,n),S=(x,T)=>{x&&hn(x,i,9,T)},P=(x,T)=>{const D=T[1];S(x,T),Le(x)?x.every(V=>V.length<=1)&&D():x.length<=1&&D()},L={mode:r,persisted:o,beforeEnter(x){let T=a;if(!t.isMounted)if(s)T=d||a;else return;x._leaveCb&&x._leaveCb(!0);const D=w[b];D&&Rn(n,D)&&D.el._leaveCb&&D.el._leaveCb(),S(T,[x])},enter(x){let T=l,D=c,V=u;if(!t.isMounted)if(s)T=p||l,D=g||c,V=_||u;else return;let W=!1;const N=x._enterCb=F=>{W||(W=!0,F?S(V,[x]):S(D,[x]),L.delayedLeave&&L.delayedLeave(),x._enterCb=void 0)};T?P(T,[x,N]):N()},leave(x,T){const D=String(n.key);if(x._enterCb&&x._enterCb(!0),t.isUnmounting)return T();S(f,[x]);let V=!1;const W=x._leaveCb=N=>{V||(V=!0,T(),N?S(v,[x]):S(m,[x]),x._leaveCb=void 0,w[D]===n&&delete w[D])};w[D]=n,h?P(h,[x,W]):W()},clone(x){return or(x,e,t,i)}};return L}function fl(n){if(go(n))return n=Bn(n),n.children=null,n}function mf(n){return go(n)?n.children?n.children[0]:void 0:n}function os(n,e){n.shapeFlag&6&&n.component?os(n.component.subTree,e):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function $a(n,e=!1,t){let i=[],s=0;for(let r=0;r<n.length;r++){let o=n[r];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:r);o.type===pt?(o.patchFlag&128&&s++,i=i.concat($a(o.children,e,a))):(e||o.type!==kt)&&i.push(a!=null?Bn(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function yr(n){return Ne(n)?{setup:n,name:n.name}:n}const Zi=n=>!!n.type.__asyncLoader;function b0(n){Ne(n)&&(n={loader:n});const{loader:e,loadingComponent:t,errorComponent:i,delay:s=200,timeout:r,suspensible:o=!0,onError:a}=n;let l=null,c,u=0;const f=()=>(u++,l=null,h()),h=()=>{let m;return l||(m=l=e().catch(v=>{if(v=v instanceof Error?v:new Error(String(v)),a)return new Promise((d,p)=>{a(v,()=>d(f()),()=>p(v),u+1)});throw v}).then(v=>m!==l&&l?l:(v&&(v.__esModule||v[Symbol.toStringTag]==="Module")&&(v=v.default),c=v,v)))};return yr({name:"AsyncComponentWrapper",__asyncLoader:h,get __asyncResolved(){return c},setup(){const m=ft;if(c)return()=>hl(c,m);const v=_=>{l=null,xs(_,m,13,!i)};if(o&&m.suspense||ar)return h().then(_=>()=>hl(_,m)).catch(_=>(v(_),()=>i?st(i,{error:_}):null));const d=Pt(!1),p=Pt(),g=Pt(!!s);return s&&setTimeout(()=>{g.value=!1},s),r!=null&&setTimeout(()=>{if(!d.value&&!p.value){const _=new Error(`Async component timed out after ${r}ms.`);v(_),p.value=_}},r),h().then(()=>{d.value=!0,m.parent&&go(m.parent.vnode)&&Ga(m.parent.update)}).catch(_=>{v(_),p.value=_}),()=>{if(d.value&&c)return hl(c,m);if(p.value&&i)return st(i,{error:p.value});if(t&&!g.value)return st(t)}}})}function hl(n,e){const{ref:t,props:i,children:s,ce:r}=e.vnode,o=st(n,i,s);return o.ref=t,o.ce=r,delete e.vnode.ce,o}const go=n=>n.type.__isKeepAlive,M0={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(n,{slots:e}){const t=Ti(),i=t.ctx;if(!i.renderer)return()=>{const _=e.default&&e.default();return _&&_.length===1?_[0]:_};const s=new Map,r=new Set;let o=null;const a=t.suspense,{renderer:{p:l,m:c,um:u,o:{createElement:f}}}=i,h=f("div");i.activate=(_,b,w,S,P)=>{const L=_.component;c(_,b,w,0,a),l(L.vnode,_,b,w,L,a,S,_.slotScopeIds,P),Dt(()=>{L.isDeactivated=!1,L.a&&Qs(L.a);const x=_.props&&_.props.onVnodeMounted;x&&qt(x,L.parent,_)},a)},i.deactivate=_=>{const b=_.component;c(_,h,null,1,a),Dt(()=>{b.da&&Qs(b.da);const w=_.props&&_.props.onVnodeUnmounted;w&&qt(w,b.parent,_),b.isDeactivated=!0},a)};function m(_){dl(_),u(_,t,a,!0)}function v(_){s.forEach((b,w)=>{const S=yc(b.type);S&&(!_||!_(S))&&d(w)})}function d(_){const b=s.get(_);!o||!Rn(b,o)?m(b):o&&dl(o),s.delete(_),r.delete(_)}nr(()=>[n.include,n.exclude],([_,b])=>{_&&v(w=>Br(_,w)),b&&v(w=>!Br(b,w))},{flush:"post",deep:!0});let p=null;const g=()=>{p!=null&&s.set(p,pl(t.subTree))};return br(g),Xa(g),Ka(()=>{s.forEach(_=>{const{subTree:b,suspense:w}=t,S=pl(b);if(_.type===S.type&&_.key===S.key){dl(S);const P=S.component.da;P&&Dt(P,w);return}m(_)})}),()=>{if(p=null,!e.default)return null;const _=e.default(),b=_[0];if(_.length>1)return o=null,_;if(!Mi(b)||!(b.shapeFlag&4)&&!(b.shapeFlag&128))return o=null,b;let w=pl(b);const S=w.type,P=yc(Zi(w)?w.type.__asyncResolved||{}:S),{include:L,exclude:x,max:T}=n;if(L&&(!P||!Br(L,P))||x&&P&&Br(x,P))return o=w,b;const D=w.key==null?S:w.key,V=s.get(D);return w.el&&(w=Bn(w),b.shapeFlag&128&&(b.ssContent=w)),p=D,V?(w.el=V.el,w.component=V.component,w.transition&&os(w,w.transition),w.shapeFlag|=512,r.delete(D),r.add(D)):(r.add(D),T&&r.size>parseInt(T,10)&&d(r.values().next().value)),w.shapeFlag|=256,o=w,ap(b.type)?b:w}}},S0=M0;function Br(n,e){return Le(n)?n.some(t=>Br(t,e)):ke(n)?n.split(",").includes(e):s_(n)?n.test(e):!1}function dp(n,e){mp(n,"a",e)}function pp(n,e){mp(n,"da",e)}function mp(n,e,t=ft){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(qa(e,i,t),t){let s=t.parent;for(;s&&s.parent;)go(s.parent.vnode)&&w0(i,e,t,s),s=s.parent}}function w0(n,e,t,i){const s=qa(e,n,i,!0);_o(()=>{qc(i[e],s)},t)}function dl(n){n.shapeFlag&=-257,n.shapeFlag&=-513}function pl(n){return n.shapeFlag&128?n.ssContent:n}function qa(n,e,t=ft,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;vr(),Si(t);const a=hn(e,t,n,o);return _i(),xr(),a});return i?s.unshift(r):s.push(r),r}}const ii=n=>(e,t=ft)=>(!ar||n==="sp")&&qa(n,(...i)=>e(...i),t),gp=ii("bm"),br=ii("m"),_p=ii("bu"),Xa=ii("u"),Ka=ii("bum"),_o=ii("um"),vp=ii("sp"),xp=ii("rtg"),yp=ii("rtc");function bp(n,e=ft){qa("ec",n,e)}function Mp(n,e){const t=It;if(t===null)return n;const i=Za(t)||t.proxy,s=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=et]=e[r];o&&(Ne(o)&&(o={mounted:o,updated:o}),o.deep&&Wi(a),s.push({dir:o,instance:i,value:a,oldValue:void 0,arg:l,modifiers:c}))}return n}function Fn(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(vr(),hn(l,t,8,[n.el,a,n,e]),xr())}}const pu="components",E0="directives";function uc(n,e){return mu(pu,n,!0,e)||n}const Sp=Symbol();function T0(n){return ke(n)?mu(pu,n,!1)||n:n||Sp}function C0(n){return mu(E0,n)}function mu(n,e,t=!0,i=!1){const s=It||ft;if(s){const r=s.type;if(n===pu){const a=yc(r,!1);if(a&&(a===e||a===Lt(e)||a===vs(Lt(e))))return r}const o=gf(s[n]||r[n],e)||gf(s.appContext[n],e);return!o&&i?r:o}}function gf(n,e){return n&&(n[e]||n[Lt(e)]||n[vs(Lt(e))])}function gu(n,e,t,i){let s;const r=t&&t[i];if(Le(n)||ke(n)){s=new Array(n.length);for(let o=0,a=n.length;o<a;o++)s[o]=e(n[o],o,void 0,r&&r[o])}else if(typeof n=="number"){s=new Array(n);for(let o=0;o<n;o++)s[o]=e(o+1,o,void 0,r&&r[o])}else if(tt(n))if(n[Symbol.iterator])s=Array.from(n,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(n);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(n[c],c,a,r&&r[a])}}else s=[];return t&&(t[i]=s),s}function A0(n,e){for(let t=0;t<e.length;t++){const i=e[t];if(Le(i))for(let s=0;s<i.length;s++)n[i[s].name]=i[s].fn;else i&&(n[i.name]=i.key?(...s)=>{const r=i.fn(...s);return r&&(r.key=i.key),r}:i.fn)}return n}function R0(n,e,t={},i,s){if(It.isCE||It.parent&&Zi(It.parent)&&It.parent.isCE)return e!=="default"&&(t.name=e),st("slot",t,i&&i());let r=n[e];r&&r._c&&(r._d=!1),at();const o=r&&wp(r(t)),a=yu(pt,{key:t.key||o&&o.key||`_${e}`},o||(i?i():[]),o&&n._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function wp(n){return n.some(e=>Mi(e)?!(e.type===kt||e.type===pt&&!wp(e.children)):!0)?n:null}function L0(n,e){const t={};for(const i in n)t[e&&/[A-Z]/.test(i)?`on:${i}`:Js(i)]=n[i];return t}const fc=n=>n?Hp(n)?Za(n)||n.proxy:fc(n.parent):null,Wr=Je(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>fc(n.parent),$root:n=>fc(n.root),$emit:n=>n.emit,$options:n=>_u(n),$forceUpdate:n=>n.f||(n.f=()=>Ga(n.update)),$nextTick:n=>n.n||(n.n=Ha.bind(n.proxy)),$watch:n=>x0.bind(n)}),ml=(n,e)=>n!==et&&!n.__isScriptSetup&&Ye(n,e),hc={get({_:n},e){const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(ml(i,e))return o[e]=1,i[e];if(s!==et&&Ye(s,e))return o[e]=2,s[e];if((c=n.propsOptions[0])&&Ye(c,e))return o[e]=3,r[e];if(t!==et&&Ye(t,e))return o[e]=4,t[e];dc&&(o[e]=0)}}const u=Wr[e];let f,h;if(u)return e==="$attrs"&&Jt(n,"get",e),u(n);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==et&&Ye(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,Ye(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return ml(s,e)?(s[e]=t,!0):i!==et&&Ye(i,e)?(i[e]=t,!0):Ye(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!t[o]||n!==et&&Ye(n,o)||ml(e,o)||(a=r[0])&&Ye(a,o)||Ye(i,o)||Ye(Wr,o)||Ye(s.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Ye(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}},P0=Je({},hc,{get(n,e){if(e!==Symbol.unscopables)return hc.get(n,e,n)},has(n,e){return e[0]!=="_"&&!Hg(e)}});let dc=!0;function D0(n){const e=_u(n),t=n.proxy,i=n.ctx;dc=!1,e.beforeCreate&&_f(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:m,updated:v,activated:d,deactivated:p,beforeDestroy:g,beforeUnmount:_,destroyed:b,unmounted:w,render:S,renderTracked:P,renderTriggered:L,errorCaptured:x,serverPrefetch:T,expose:D,inheritAttrs:V,components:W,directives:N,filters:F}=e;if(c&&I0(c,i,null,n.appContext.config.unwrapInjectedRef),o)for(const te in o){const X=o[te];Ne(X)&&(i[te]=X.bind(t))}if(s){const te=s.call(t,t);tt(te)&&(n.data=Ba(te))}if(dc=!0,r)for(const te in r){const X=r[te],he=Ne(X)?X.bind(t,t):Ne(X.get)?X.get.bind(t,t):Zt,_e=!Ne(X)&&Ne(X.set)?X.set.bind(t):Zt,ve=es({get:he,set:_e});Object.defineProperty(i,te,{enumerable:!0,configurable:!0,get:()=>ve.value,set:K=>ve.value=K})}if(a)for(const te in a)Ep(a[te],i,t,te);if(l){const te=Ne(l)?l.call(t):l;Reflect.ownKeys(te).forEach(X=>{cp(X,te[X])})}u&&_f(u,n,"c");function le(te,X){Le(X)?X.forEach(he=>te(he.bind(t))):X&&te(X.bind(t))}if(le(gp,f),le(br,h),le(_p,m),le(Xa,v),le(dp,d),le(pp,p),le(bp,x),le(yp,P),le(xp,L),le(Ka,_),le(_o,w),le(vp,T),Le(D))if(D.length){const te=n.exposed||(n.exposed={});D.forEach(X=>{Object.defineProperty(te,X,{get:()=>t[X],set:he=>t[X]=he})})}else n.exposed||(n.exposed={});S&&n.render===Zt&&(n.render=S),V!=null&&(n.inheritAttrs=V),W&&(n.components=W),N&&(n.directives=N)}function I0(n,e,t=Zt,i=!1){Le(n)&&(n=pc(n));for(const s in n){const r=n[s];let o;tt(r)?"default"in r?o=Gr(r.from||s,r.default,!0):o=Gr(r.from||s):o=Gr(r),Rt(o)&&i?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function _f(n,e,t){hn(Le(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Ep(n,e,t,i){const s=i.includes(".")?fp(t,i):()=>t[i];if(ke(n)){const r=e[n];Ne(r)&&nr(s,r)}else if(Ne(n))nr(s,n.bind(t));else if(tt(n))if(Le(n))n.forEach(r=>Ep(r,e,t,i));else{const r=Ne(n.handler)?n.handler.bind(t):e[n.handler];Ne(r)&&nr(s,r,n)}}function _u(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>xa(l,c,o,!0)),xa(l,e,o)),tt(e)&&r.set(e,l),l}function xa(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&xa(n,r,t,!0),s&&s.forEach(o=>xa(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=F0[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const F0={data:vf,props:Ui,emits:Ui,methods:Ui,computed:Ui,beforeCreate:Wt,created:Wt,beforeMount:Wt,mounted:Wt,beforeUpdate:Wt,updated:Wt,beforeDestroy:Wt,beforeUnmount:Wt,destroyed:Wt,unmounted:Wt,activated:Wt,deactivated:Wt,errorCaptured:Wt,serverPrefetch:Wt,components:Ui,directives:Ui,watch:O0,provide:vf,inject:N0};function vf(n,e){return e?n?function(){return Je(Ne(n)?n.call(this,this):n,Ne(e)?e.call(this,this):e)}:e:n}function N0(n,e){return Ui(pc(n),pc(e))}function pc(n){if(Le(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Wt(n,e){return n?[...new Set([].concat(n,e))]:e}function Ui(n,e){return n?Je(Je(Object.create(null),n),e):e}function O0(n,e){if(!n)return e;if(!e)return n;const t=Je(Object.create(null),n);for(const i in e)t[i]=Wt(n[i],e[i]);return t}function U0(n,e,t,i=!1){const s={},r={};da(r,Ya,1),n.propsDefaults=Object.create(null),Tp(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:Jd(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function k0(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=je(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Wa(n.emitsOptions,h))continue;const m=e[h];if(l)if(Ye(r,h))m!==r[h]&&(r[h]=m,c=!0);else{const v=Lt(h);s[v]=mc(l,a,v,m,n,!1)}else m!==r[h]&&(r[h]=m,c=!0)}}}else{Tp(n,e,s,r)&&(c=!0);let u;for(const f in a)(!e||!Ye(e,f)&&((u=un(f))===f||!Ye(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(s[f]=mc(l,a,f,void 0,n,!0)):delete s[f]);if(r!==a)for(const f in r)(!e||!Ye(e,f))&&(delete r[f],c=!0)}c&&ni(n,"set","$attrs")}function Tp(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Xi(l))continue;const c=e[l];let u;s&&Ye(s,u=Lt(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:Wa(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=je(t),c=a||et;for(let u=0;u<r.length;u++){const f=r[u];t[f]=mc(s,l,f,c[f],n,!Ye(c,f))}}return o}function mc(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=Ye(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&Ne(l)){const{propsDefaults:c}=s;t in c?i=c[t]:(Si(s),i=c[t]=l.call(null,e),_i())}else i=l}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===un(t))&&(i=!0))}return i}function Cp(n,e,t=!1){const i=e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Ne(n)){const u=f=>{l=!0;const[h,m]=Cp(f,e,!0);Je(o,h),m&&a.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return tt(n)&&i.set(n,Ys),Ys;if(Le(r))for(let u=0;u<r.length;u++){const f=Lt(r[u]);xf(f)&&(o[f]=et)}else if(r)for(const u in r){const f=Lt(u);if(xf(f)){const h=r[u],m=o[f]=Le(h)||Ne(h)?{type:h}:Object.assign({},h);if(m){const v=Mf(Boolean,m.type),d=Mf(String,m.type);m[0]=v>-1,m[1]=d<0||v<d,(v>-1||Ye(m,"default"))&&a.push(f)}}}const c=[o,a];return tt(n)&&i.set(n,c),c}function xf(n){return n[0]!=="$"}function yf(n){const e=n&&n.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:n===null?"null":""}function bf(n,e){return yf(n)===yf(e)}function Mf(n,e){return Le(e)?e.findIndex(t=>bf(t,n)):Ne(e)&&bf(e,n)?0:-1}const Ap=n=>n[0]==="_"||n==="$stable",vu=n=>Le(n)?n.map(ln):[ln(n)],B0=(n,e,t)=>{if(e._n)return e;const i=cu((...s)=>vu(e(...s)),t);return i._c=!1,i},Rp=(n,e,t)=>{const i=n._ctx;for(const s in n){if(Ap(s))continue;const r=n[s];if(Ne(r))e[s]=B0(s,r,i);else if(r!=null){const o=vu(r);e[s]=()=>o}}},Lp=(n,e)=>{const t=vu(e);n.slots.default=()=>t},z0=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=je(e),da(e,"_",t)):Rp(e,n.slots={})}else n.slots={},e&&Lp(n,e);da(n.slots,Ya,1)},V0=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=et;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:(Je(s,e),!t&&a===1&&delete s._):(r=!e.$stable,Rp(e,s)),o=e}else e&&(Lp(n,e),o={default:1});if(r)for(const a in s)!Ap(a)&&!(a in o)&&delete s[a]};function Pp(){return{app:null,config:{isNativeTag:sa,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let H0=0;function G0(n,e){return function(i,s=null){Ne(i)||(i=Object.assign({},i)),s!=null&&!tt(s)&&(s=null);const r=Pp(),o=new Set;let a=!1;const l=r.app={_uid:H0++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Jp,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&Ne(c.install)?(o.add(c),c.install(l,...u)):Ne(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,f){if(!a){const h=st(i,s);return h.appContext=r,u&&e?e(h,c):n(h,c,f),a=!0,l._container=c,c.__vue_app__=l,Za(h.component)||h.component.proxy}},unmount(){a&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l}};return l}}function ya(n,e,t,i,s=!1){if(Le(n)){n.forEach((h,m)=>ya(h,e&&(Le(e)?e[m]:e),t,i,s));return}if(Zi(i)&&!s)return;const r=i.shapeFlag&4?Za(i.component)||i.component.proxy:i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===et?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(ke(c)?(u[c]=null,Ye(f,c)&&(f[c]=null)):Rt(c)&&(c.value=null)),Ne(l))Jn(l,a,12,[o,u]);else{const h=ke(l),m=Rt(l);if(h||m){const v=()=>{if(n.f){const d=h?Ye(f,l)?f[l]:u[l]:l.value;s?Le(d)&&qc(d,r):Le(d)?d.includes(r)||d.push(r):h?(u[l]=[r],Ye(f,l)&&(f[l]=u[l])):(l.value=[r],n.k&&(u[n.k]=l.value))}else h?(u[l]=o,Ye(f,l)&&(f[l]=o)):m&&(l.value=o,n.k&&(u[n.k]=o))};o?(v.id=-1,Dt(v,t)):v()}}}let oi=!1;const Do=n=>/svg/.test(n.namespaceURI)&&n.tagName!=="foreignObject",Io=n=>n.nodeType===8;function W0(n){const{mt:e,p:t,o:{patchProp:i,createText:s,nextSibling:r,parentNode:o,remove:a,insert:l,createComment:c}}=n,u=(g,_)=>{if(!_.hasChildNodes()){t(null,g,_),va(),_._vnode=g;return}oi=!1,f(_.firstChild,g,null,null,null),va(),_._vnode=g,oi&&console.error("Hydration completed but contains mismatches.")},f=(g,_,b,w,S,P=!1)=>{const L=Io(g)&&g.data==="[",x=()=>d(g,_,b,w,S,L),{type:T,ref:D,shapeFlag:V,patchFlag:W}=_;let N=g.nodeType;_.el=g,W===-2&&(P=!1,_.dynamicChildren=null);let F=null;switch(T){case as:N!==3?_.children===""?(l(_.el=s(""),o(g),g),F=g):F=x():(g.data!==_.children&&(oi=!0,g.data=_.children),F=r(g));break;case kt:N!==8||L?F=x():F=r(g);break;case Ji:if(L&&(g=r(g),N=g.nodeType),N===1||N===3){F=g;const ie=!_.children.length;for(let le=0;le<_.staticCount;le++)ie&&(_.children+=F.nodeType===1?F.outerHTML:F.data),le===_.staticCount-1&&(_.anchor=F),F=r(F);return L?r(F):F}else x();break;case pt:L?F=v(g,_,b,w,S,P):F=x();break;default:if(V&1)N!==1||_.type.toLowerCase()!==g.tagName.toLowerCase()?F=x():F=h(g,_,b,w,S,P);else if(V&6){_.slotScopeIds=S;const ie=o(g);if(e(_,ie,null,b,w,Do(ie),P),F=L?p(g):r(g),F&&Io(F)&&F.data==="teleport end"&&(F=r(F)),Zi(_)){let le;L?(le=st(pt),le.anchor=F?F.previousSibling:ie.lastChild):le=g.nodeType===3?Qi(""):st("div"),le.el=g,_.component.subTree=le}}else V&64?N!==8?F=x():F=_.type.hydrate(g,_,b,w,S,P,n,m):V&128&&(F=_.type.hydrate(g,_,b,w,Do(o(g)),S,P,n,f))}return D!=null&&ya(D,null,w,_),F},h=(g,_,b,w,S,P)=>{P=P||!!_.dynamicChildren;const{type:L,props:x,patchFlag:T,shapeFlag:D,dirs:V}=_,W=L==="input"&&V||L==="option";if(W||T!==-1){if(V&&Fn(_,null,b,"created"),x)if(W||!P||T&48)for(const F in x)(W&&F.endsWith("value")||gs(F)&&!Xi(F))&&i(g,F,null,x[F],!1,void 0,b);else x.onClick&&i(g,"onClick",null,x.onClick,!1,void 0,b);let N;if((N=x&&x.onVnodeBeforeMount)&&qt(N,b,_),V&&Fn(_,null,b,"beforeMount"),((N=x&&x.onVnodeMounted)||V)&&lp(()=>{N&&qt(N,b,_),V&&Fn(_,null,b,"mounted")},w),D&16&&!(x&&(x.innerHTML||x.textContent))){let F=m(g.firstChild,_,g,b,w,S,P);for(;F;){oi=!0;const ie=F;F=F.nextSibling,a(ie)}}else D&8&&g.textContent!==_.children&&(oi=!0,g.textContent=_.children)}return g.nextSibling},m=(g,_,b,w,S,P,L)=>{L=L||!!_.dynamicChildren;const x=_.children,T=x.length;for(let D=0;D<T;D++){const V=L?x[D]:x[D]=ln(x[D]);if(g)g=f(g,V,w,S,P,L);else{if(V.type===as&&!V.children)continue;oi=!0,t(null,V,b,null,w,S,Do(b),P)}}return g},v=(g,_,b,w,S,P)=>{const{slotScopeIds:L}=_;L&&(S=S?S.concat(L):L);const x=o(g),T=m(r(g),_,x,b,w,S,P);return T&&Io(T)&&T.data==="]"?r(_.anchor=T):(oi=!0,l(_.anchor=c("]"),x,T),T)},d=(g,_,b,w,S,P)=>{if(oi=!0,_.el=null,P){const T=p(g);for(;;){const D=r(g);if(D&&D!==T)a(D);else break}}const L=r(g),x=o(g);return a(g),t(null,_,x,L,b,w,Do(x),S),L},p=g=>{let _=0;for(;g;)if(g=r(g),g&&Io(g)&&(g.data==="["&&_++,g.data==="]")){if(_===0)return r(g);_--}return g};return[u,f]}const Dt=lp;function Dp(n){return Fp(n)}function Ip(n){return Fp(n,W0)}function Fp(n,e){const t=c_();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:m=Zt,insertStaticContent:v}=n,d=(C,R,J,ue=null,ce=null,k=null,H=!1,z=null,q=!!R.dynamicChildren)=>{if(C===R)return;C&&!Rn(C,R)&&(ue=xe(C),K(C,ce,k,!0),C=null),R.patchFlag===-2&&(q=!1,R.dynamicChildren=null);const{type:O,ref:M,shapeFlag:y}=R;switch(O){case as:p(C,R,J,ue);break;case kt:g(C,R,J,ue);break;case Ji:C==null&&_(R,J,ue,H);break;case pt:W(C,R,J,ue,ce,k,H,z,q);break;default:y&1?S(C,R,J,ue,ce,k,H,z,q):y&6?N(C,R,J,ue,ce,k,H,z,q):(y&64||y&128)&&O.process(C,R,J,ue,ce,k,H,z,q,be)}M!=null&&ce&&ya(M,C&&C.ref,k,R||C,!R)},p=(C,R,J,ue)=>{if(C==null)i(R.el=a(R.children),J,ue);else{const ce=R.el=C.el;R.children!==C.children&&c(ce,R.children)}},g=(C,R,J,ue)=>{C==null?i(R.el=l(R.children||""),J,ue):R.el=C.el},_=(C,R,J,ue)=>{[C.el,C.anchor]=v(C.children,R,J,ue,C.el,C.anchor)},b=({el:C,anchor:R},J,ue)=>{let ce;for(;C&&C!==R;)ce=h(C),i(C,J,ue),C=ce;i(R,J,ue)},w=({el:C,anchor:R})=>{let J;for(;C&&C!==R;)J=h(C),s(C),C=J;s(R)},S=(C,R,J,ue,ce,k,H,z,q)=>{H=H||R.type==="svg",C==null?P(R,J,ue,ce,k,H,z,q):T(C,R,ce,k,H,z,q)},P=(C,R,J,ue,ce,k,H,z)=>{let q,O;const{type:M,props:y,shapeFlag:I,transition:$,dirs:re}=C;if(q=C.el=o(C.type,k,y&&y.is,y),I&8?u(q,C.children):I&16&&x(C.children,q,null,ue,ce,k&&M!=="foreignObject",H,z),re&&Fn(C,null,ue,"created"),L(q,C,C.scopeId,H,ue),y){for(const Y in y)Y!=="value"&&!Xi(Y)&&r(q,Y,null,y[Y],k,C.children,ue,ce,B);"value"in y&&r(q,"value",null,y.value),(O=y.onVnodeBeforeMount)&&qt(O,ue,C)}re&&Fn(C,null,ue,"beforeMount");const oe=(!ce||ce&&!ce.pendingBranch)&&$&&!$.persisted;oe&&$.beforeEnter(q),i(q,R,J),((O=y&&y.onVnodeMounted)||oe||re)&&Dt(()=>{O&&qt(O,ue,C),oe&&$.enter(q),re&&Fn(C,null,ue,"mounted")},ce)},L=(C,R,J,ue,ce)=>{if(J&&m(C,J),ue)for(let k=0;k<ue.length;k++)m(C,ue[k]);if(ce){let k=ce.subTree;if(R===k){const H=ce.vnode;L(C,H,H.scopeId,H.slotScopeIds,ce.parent)}}},x=(C,R,J,ue,ce,k,H,z,q=0)=>{for(let O=q;O<C.length;O++){const M=C[O]=z?di(C[O]):ln(C[O]);d(null,M,R,J,ue,ce,k,H,z)}},T=(C,R,J,ue,ce,k,H)=>{const z=R.el=C.el;let{patchFlag:q,dynamicChildren:O,dirs:M}=R;q|=C.patchFlag&16;const y=C.props||et,I=R.props||et;let $;J&&Di(J,!1),($=I.onVnodeBeforeUpdate)&&qt($,J,R,C),M&&Fn(R,C,J,"beforeUpdate"),J&&Di(J,!0);const re=ce&&R.type!=="foreignObject";if(O?D(C.dynamicChildren,O,z,J,ue,re,k):H||X(C,R,z,null,J,ue,re,k,!1),q>0){if(q&16)V(z,R,y,I,J,ue,ce);else if(q&2&&y.class!==I.class&&r(z,"class",null,I.class,ce),q&4&&r(z,"style",y.style,I.style,ce),q&8){const oe=R.dynamicProps;for(let Y=0;Y<oe.length;Y++){const E=oe[Y],U=y[E],fe=I[E];(fe!==U||E==="value")&&r(z,E,U,fe,ce,C.children,J,ue,B)}}q&1&&C.children!==R.children&&u(z,R.children)}else!H&&O==null&&V(z,R,y,I,J,ue,ce);(($=I.onVnodeUpdated)||M)&&Dt(()=>{$&&qt($,J,R,C),M&&Fn(R,C,J,"updated")},ue)},D=(C,R,J,ue,ce,k,H)=>{for(let z=0;z<R.length;z++){const q=C[z],O=R[z],M=q.el&&(q.type===pt||!Rn(q,O)||q.shapeFlag&70)?f(q.el):J;d(q,O,M,null,ue,ce,k,H,!0)}},V=(C,R,J,ue,ce,k,H)=>{if(J!==ue){if(J!==et)for(const z in J)!Xi(z)&&!(z in ue)&&r(C,z,J[z],null,H,R.children,ce,k,B);for(const z in ue){if(Xi(z))continue;const q=ue[z],O=J[z];q!==O&&z!=="value"&&r(C,z,O,q,H,R.children,ce,k,B)}"value"in ue&&r(C,"value",J.value,ue.value)}},W=(C,R,J,ue,ce,k,H,z,q)=>{const O=R.el=C?C.el:a(""),M=R.anchor=C?C.anchor:a("");let{patchFlag:y,dynamicChildren:I,slotScopeIds:$}=R;$&&(z=z?z.concat($):$),C==null?(i(O,J,ue),i(M,J,ue),x(R.children,J,M,ce,k,H,z,q)):y>0&&y&64&&I&&C.dynamicChildren?(D(C.dynamicChildren,I,J,ce,k,H,z),(R.key!=null||ce&&R===ce.subTree)&&xu(C,R,!0)):X(C,R,J,M,ce,k,H,z,q)},N=(C,R,J,ue,ce,k,H,z,q)=>{R.slotScopeIds=z,C==null?R.shapeFlag&512?ce.ctx.activate(R,J,ue,H,q):F(R,J,ue,ce,k,H,q):ie(C,R,q)},F=(C,R,J,ue,ce,k,H)=>{const z=C.component=Vp(C,ue,ce);if(go(C)&&(z.ctx.renderer=be),Gp(z),z.asyncDep){if(ce&&ce.registerDep(z,le),!C.el){const q=z.subTree=st(kt);g(null,q,R,J)}return}le(z,C,R,J,ce,k,H)},ie=(C,R,J)=>{const ue=R.component=C.component;if(u0(C,R,J))if(ue.asyncDep&&!ue.asyncResolved){te(ue,R,J);return}else ue.next=R,i0(ue.update),ue.update();else R.el=C.el,ue.vnode=R},le=(C,R,J,ue,ce,k,H)=>{const z=()=>{if(C.isMounted){let{next:M,bu:y,u:I,parent:$,vnode:re}=C,oe=M,Y;Di(C,!1),M?(M.el=re.el,te(C,M,H)):M=re,y&&Qs(y),(Y=M.props&&M.props.onVnodeBeforeUpdate)&&qt(Y,$,M,re),Di(C,!0);const E=ra(C),U=C.subTree;C.subTree=E,d(U,E,f(U.el),xe(U),C,ce,k),M.el=E.el,oe===null&&uu(C,E.el),I&&Dt(I,ce),(Y=M.props&&M.props.onVnodeUpdated)&&Dt(()=>qt(Y,$,M,re),ce)}else{let M;const{el:y,props:I}=R,{bm:$,m:re,parent:oe}=C,Y=Zi(R);if(Di(C,!1),$&&Qs($),!Y&&(M=I&&I.onVnodeBeforeMount)&&qt(M,oe,R),Di(C,!0),y&&Ee){const E=()=>{C.subTree=ra(C),Ee(y,C.subTree,C,ce,null)};Y?R.type.__asyncLoader().then(()=>!C.isUnmounted&&E()):E()}else{const E=C.subTree=ra(C);d(null,E,J,ue,C,ce,k),R.el=E.el}if(re&&Dt(re,ce),!Y&&(M=I&&I.onVnodeMounted)){const E=R;Dt(()=>qt(M,oe,E),ce)}(R.shapeFlag&256||oe&&Zi(oe.vnode)&&oe.vnode.shapeFlag&256)&&C.a&&Dt(C.a,ce),C.isMounted=!0,R=J=ue=null}},q=C.effect=new po(z,()=>Ga(O),C.scope),O=C.update=()=>q.run();O.id=C.uid,Di(C,!0),O()},te=(C,R,J)=>{R.component=C;const ue=C.vnode.props;C.vnode=R,C.next=null,k0(C,R.props,ue,J),V0(C,R.children,J),vr(),hf(),xr()},X=(C,R,J,ue,ce,k,H,z,q=!1)=>{const O=C&&C.children,M=C?C.shapeFlag:0,y=R.children,{patchFlag:I,shapeFlag:$}=R;if(I>0){if(I&128){_e(O,y,J,ue,ce,k,H,z,q);return}else if(I&256){he(O,y,J,ue,ce,k,H,z,q);return}}$&8?(M&16&&B(O,ce,k),y!==O&&u(J,y)):M&16?$&16?_e(O,y,J,ue,ce,k,H,z,q):B(O,ce,k,!0):(M&8&&u(J,""),$&16&&x(y,J,ue,ce,k,H,z,q))},he=(C,R,J,ue,ce,k,H,z,q)=>{C=C||Ys,R=R||Ys;const O=C.length,M=R.length,y=Math.min(O,M);let I;for(I=0;I<y;I++){const $=R[I]=q?di(R[I]):ln(R[I]);d(C[I],$,J,null,ce,k,H,z,q)}O>M?B(C,ce,k,!0,!1,y):x(R,J,ue,ce,k,H,z,q,y)},_e=(C,R,J,ue,ce,k,H,z,q)=>{let O=0;const M=R.length;let y=C.length-1,I=M-1;for(;O<=y&&O<=I;){const $=C[O],re=R[O]=q?di(R[O]):ln(R[O]);if(Rn($,re))d($,re,J,null,ce,k,H,z,q);else break;O++}for(;O<=y&&O<=I;){const $=C[y],re=R[I]=q?di(R[I]):ln(R[I]);if(Rn($,re))d($,re,J,null,ce,k,H,z,q);else break;y--,I--}if(O>y){if(O<=I){const $=I+1,re=$<M?R[$].el:ue;for(;O<=I;)d(null,R[O]=q?di(R[O]):ln(R[O]),J,re,ce,k,H,z,q),O++}}else if(O>I)for(;O<=y;)K(C[O],ce,k,!0),O++;else{const $=O,re=O,oe=new Map;for(O=re;O<=I;O++){const Te=R[O]=q?di(R[O]):ln(R[O]);Te.key!=null&&oe.set(Te.key,O)}let Y,E=0;const U=I-re+1;let fe=!1,we=0;const Me=new Array(U);for(O=0;O<U;O++)Me[O]=0;for(O=$;O<=y;O++){const Te=C[O];if(E>=U){K(Te,ce,k,!0);continue}let De;if(Te.key!=null)De=oe.get(Te.key);else for(Y=re;Y<=I;Y++)if(Me[Y-re]===0&&Rn(Te,R[Y])){De=Y;break}De===void 0?K(Te,ce,k,!0):(Me[De-re]=O+1,De>=we?we=De:fe=!0,d(Te,R[De],J,null,ce,k,H,z,q),E++)}const Ce=fe?j0(Me):Ys;for(Y=Ce.length-1,O=U-1;O>=0;O--){const Te=re+O,De=R[Te],Oe=Te+1<M?R[Te+1].el:ue;Me[O]===0?d(null,De,J,Oe,ce,k,H,z,q):fe&&(Y<0||O!==Ce[Y]?ve(De,J,Oe,2):Y--)}}},ve=(C,R,J,ue,ce=null)=>{const{el:k,type:H,transition:z,children:q,shapeFlag:O}=C;if(O&6){ve(C.component.subTree,R,J,ue);return}if(O&128){C.suspense.move(R,J,ue);return}if(O&64){H.move(C,R,J,be);return}if(H===pt){i(k,R,J);for(let y=0;y<q.length;y++)ve(q[y],R,J,ue);i(C.anchor,R,J);return}if(H===Ji){b(C,R,J);return}if(ue!==2&&O&1&&z)if(ue===0)z.beforeEnter(k),i(k,R,J),Dt(()=>z.enter(k),ce);else{const{leave:y,delayLeave:I,afterLeave:$}=z,re=()=>i(k,R,J),oe=()=>{y(k,()=>{re(),$&&$()})};I?I(k,re,oe):oe()}else i(k,R,J)},K=(C,R,J,ue=!1,ce=!1)=>{const{type:k,props:H,ref:z,children:q,dynamicChildren:O,shapeFlag:M,patchFlag:y,dirs:I}=C;if(z!=null&&ya(z,null,J,C,!0),M&256){R.ctx.deactivate(C);return}const $=M&1&&I,re=!Zi(C);let oe;if(re&&(oe=H&&H.onVnodeBeforeUnmount)&&qt(oe,R,C),M&6)ee(C.component,J,ue);else{if(M&128){C.suspense.unmount(J,ue);return}$&&Fn(C,null,R,"beforeUnmount"),M&64?C.type.remove(C,R,J,ce,be,ue):O&&(k!==pt||y>0&&y&64)?B(O,R,J,!1,!0):(k===pt&&y&384||!ce&&M&16)&&B(q,R,J),ue&&G(C)}(re&&(oe=H&&H.onVnodeUnmounted)||$)&&Dt(()=>{oe&&qt(oe,R,C),$&&Fn(C,null,R,"unmounted")},J)},G=C=>{const{type:R,el:J,anchor:ue,transition:ce}=C;if(R===pt){Q(J,ue);return}if(R===Ji){w(C);return}const k=()=>{s(J),ce&&!ce.persisted&&ce.afterLeave&&ce.afterLeave()};if(C.shapeFlag&1&&ce&&!ce.persisted){const{leave:H,delayLeave:z}=ce,q=()=>H(J,k);z?z(C.el,k,q):q()}else k()},Q=(C,R)=>{let J;for(;C!==R;)J=h(C),s(C),C=J;s(R)},ee=(C,R,J)=>{const{bum:ue,scope:ce,update:k,subTree:H,um:z}=C;ue&&Qs(ue),ce.stop(),k&&(k.active=!1,K(H,C,R,J)),z&&Dt(z,R),Dt(()=>{C.isUnmounted=!0},R),R&&R.pendingBranch&&!R.isUnmounted&&C.asyncDep&&!C.asyncResolved&&C.suspenseId===R.pendingId&&(R.deps--,R.deps===0&&R.resolve())},B=(C,R,J,ue=!1,ce=!1,k=0)=>{for(let H=k;H<C.length;H++)K(C[H],R,J,ue,ce)},xe=C=>C.shapeFlag&6?xe(C.component.subTree):C.shapeFlag&128?C.suspense.next():h(C.anchor||C.el),me=(C,R,J)=>{C==null?R._vnode&&K(R._vnode,null,null,!0):d(R._vnode||null,C,R,null,null,null,J),hf(),va(),R._vnode=C},be={p:d,um:K,m:ve,r:G,mt:F,mc:x,pc:X,pbc:D,n:xe,o:n};let ye,Ee;return e&&([ye,Ee]=e(be)),{render:me,hydrate:ye,createApp:G0(me,ye)}}function Di({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function xu(n,e,t=!1){const i=n.children,s=e.children;if(Le(i)&&Le(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=di(s[r]),a.el=o.el),t||xu(o,a)),a.type===as&&(a.el=o.el)}}function j0(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}const $0=n=>n.__isTeleport,jr=n=>n&&(n.disabled||n.disabled===""),Sf=n=>typeof SVGElement<"u"&&n instanceof SVGElement,gc=(n,e)=>{const t=n&&n.to;return ke(t)?e?e(t):null:t},q0={__isTeleport:!0,process(n,e,t,i,s,r,o,a,l,c){const{mc:u,pc:f,pbc:h,o:{insert:m,querySelector:v,createText:d,createComment:p}}=c,g=jr(e.props);let{shapeFlag:_,children:b,dynamicChildren:w}=e;if(n==null){const S=e.el=d(""),P=e.anchor=d("");m(S,t,i),m(P,t,i);const L=e.target=gc(e.props,v),x=e.targetAnchor=d("");L&&(m(x,L),o=o||Sf(L));const T=(D,V)=>{_&16&&u(b,D,V,s,r,o,a,l)};g?T(t,P):L&&T(L,x)}else{e.el=n.el;const S=e.anchor=n.anchor,P=e.target=n.target,L=e.targetAnchor=n.targetAnchor,x=jr(n.props),T=x?t:P,D=x?S:L;if(o=o||Sf(P),w?(h(n.dynamicChildren,w,T,s,r,o,a),xu(n,e,!0)):l||f(n,e,T,D,s,r,o,a,!1),g)x||Fo(e,t,S,c,1);else if((e.props&&e.props.to)!==(n.props&&n.props.to)){const V=e.target=gc(e.props,v);V&&Fo(e,V,null,c,0)}else x&&Fo(e,P,L,c,1)}Np(e)},remove(n,e,t,i,{um:s,o:{remove:r}},o){const{shapeFlag:a,children:l,anchor:c,targetAnchor:u,target:f,props:h}=n;if(f&&r(u),(o||!jr(h))&&(r(c),a&16))for(let m=0;m<l.length;m++){const v=l[m];s(v,e,t,!0,!!v.dynamicChildren)}},move:Fo,hydrate:X0};function Fo(n,e,t,{o:{insert:i},m:s},r=2){r===0&&i(n.targetAnchor,e,t);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=n,f=r===2;if(f&&i(o,e,t),(!f||jr(u))&&l&16)for(let h=0;h<c.length;h++)s(c[h],e,t,2);f&&i(a,e,t)}function X0(n,e,t,i,s,r,{o:{nextSibling:o,parentNode:a,querySelector:l}},c){const u=e.target=gc(e.props,l);if(u){const f=u._lpa||u.firstChild;if(e.shapeFlag&16)if(jr(e.props))e.anchor=c(o(n),e,a(n),t,i,s,r),e.targetAnchor=f;else{e.anchor=o(n);let h=f;for(;h;)if(h=o(h),h&&h.nodeType===8&&h.data==="teleport anchor"){e.targetAnchor=h,u._lpa=e.targetAnchor&&o(e.targetAnchor);break}c(f,e,u,t,i,s,r)}Np(e)}return e.anchor&&o(e.anchor)}const K0=q0;function Np(n){const e=n.ctx;if(e&&e.ut){let t=n.children[0].el;for(;t!==n.targetAnchor;)t.nodeType===1&&t.setAttribute("data-v-owner",e.uid),t=t.nextSibling;e.ut()}}const pt=Symbol(void 0),as=Symbol(void 0),kt=Symbol(void 0),Ji=Symbol(void 0),$r=[];let Kt=null;function at(n=!1){$r.push(Kt=n?null:[])}function Op(){$r.pop(),Kt=$r[$r.length-1]||null}let ls=1;function _c(n){ls+=n}function Up(n){return n.dynamicChildren=ls>0?Kt||Ys:null,Op(),ls>0&&Kt&&Kt.push(n),n}function dt(n,e,t,i,s,r){return Up(Fe(n,e,t,i,s,r,!0))}function yu(n,e,t,i,s){return Up(st(n,e,t,i,s,!0))}function Mi(n){return n?n.__v_isVNode===!0:!1}function Rn(n,e){return n.type===e.type&&n.key===e.key}function Y0(n){}const Ya="__vInternal",kp=({key:n})=>n??null,oa=({ref:n,ref_key:e,ref_for:t})=>n!=null?ke(n)||Rt(n)||Ne(n)?{i:It,r:n,k:e,f:!!t}:n:null;function Fe(n,e=null,t=null,i=0,s=null,r=n===pt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&kp(e),ref:e&&oa(e),scopeId:ja,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:It};return a?(bu(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=ke(t)?8:16),ls>0&&!o&&Kt&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Kt.push(l),l}const st=Z0;function Z0(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===Sp)&&(n=kt),Mi(n)){const a=Bn(n,e,!0);return t&&bu(a,t),ls>0&&!r&&Kt&&(a.shapeFlag&6?Kt[Kt.indexOf(n)]=a:Kt.push(a)),a.patchFlag|=-2,a}if(sv(n)&&(n=n.__vccOpts),e){e=Bp(e);let{class:a,style:l}=e;a&&!ke(a)&&(e.class=ti(a)),tt(l)&&(eu(l)&&!Le(l)&&(l=Je({},l)),e.style=ms(l))}const o=ke(n)?1:ap(n)?128:$0(n)?64:tt(n)?4:Ne(n)?2:0;return Fe(n,e,t,i,s,o,r,!0)}function Bp(n){return n?eu(n)||Ya in n?Je({},n):n:null}function Bn(n,e,t=!1){const{props:i,ref:s,patchFlag:r,children:o}=n,a=e?zp(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:a,key:a&&kp(a),ref:e&&e.ref?t&&s?Le(s)?s.concat(oa(e)):[s,oa(e)]:oa(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==pt?r===-1?16:r|16:r,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Bn(n.ssContent),ssFallback:n.ssFallback&&Bn(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function Qi(n=" ",e=0){return st(as,null,n,e)}function J0(n,e){const t=st(Ji,null,n);return t.staticCount=e,t}function Kn(n="",e=!1){return e?(at(),yu(kt,null,n)):st(kt,null,n)}function ln(n){return n==null||typeof n=="boolean"?st(kt):Le(n)?st(pt,null,n.slice()):typeof n=="object"?di(n):st(as,null,String(n))}function di(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Bn(n)}function bu(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Le(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),bu(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!(Ya in e)?e._ctx=It:s===3&&It&&(It.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ne(e)?(e={default:e,_ctx:It},t=32):(e=String(e),i&64?(t=16,e=[Qi(e)]):t=8);n.children=e,n.shapeFlag|=t}function zp(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=ti([e.class,i.class]));else if(s==="style")e.style=ms([e.style,i.style]);else if(gs(s)){const r=e[s],o=i[s];o&&r!==o&&!(Le(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function qt(n,e,t,i=null){hn(n,e,7,[t,i])}const Q0=Pp();let ev=0;function Vp(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||Q0,r={uid:ev++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Yc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Cp(i,s),emitsOptions:op(i,s),emit:null,emitted:null,propsDefaults:et,inheritAttrs:i.inheritAttrs,ctx:et,data:et,props:et,attrs:et,slots:et,refs:et,setupState:et,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=r0.bind(null,r),n.ce&&n.ce(r),r}let ft=null;const Ti=()=>ft||It,Si=n=>{ft=n,n.scope.on()},_i=()=>{ft&&ft.scope.off(),ft=null};function Hp(n){return n.vnode.shapeFlag&4}let ar=!1;function Gp(n,e=!1){ar=e;const{props:t,children:i}=n.vnode,s=Hp(n);U0(n,t,s,e),z0(n,i);const r=s?tv(n,e):void 0;return ar=!1,r}function tv(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=tu(new Proxy(n.ctx,hc));const{setup:i}=t;if(i){const s=n.setupContext=i.length>1?$p(n):null;Si(n),vr();const r=Jn(i,n,0,[n.props,s]);if(xr(),_i(),Xc(r)){if(r.then(_i,_i),e)return r.then(o=>{vc(n,o,e)}).catch(o=>{xs(o,n,0)});n.asyncDep=r}else vc(n,r,e)}else jp(n,e)}function vc(n,e,t){Ne(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:tt(e)&&(n.setupState=su(e)),jp(n,t)}let ba,xc;function Wp(n){ba=n,xc=e=>{e.render._rc&&(e.withProxy=new Proxy(e.ctx,P0))}}const nv=()=>!ba;function jp(n,e,t){const i=n.type;if(!n.render){if(!e&&ba&&!i.render){const s=i.template||_u(n).template;if(s){const{isCustomElement:r,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=Je(Je({isCustomElement:r,delimiters:a},o),l);i.render=ba(s,c)}}n.render=i.render||Zt,xc&&xc(n)}Si(n),vr(),D0(n),xr(),_i()}function iv(n){return new Proxy(n.attrs,{get(e,t){return Jt(n,"get","$attrs"),e[t]}})}function $p(n){const e=i=>{n.exposed=i||{}};let t;return{get attrs(){return t||(t=iv(n))},slots:n.slots,emit:n.emit,expose:e}}function Za(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(su(tu(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Wr)return Wr[t](n)},has(e,t){return t in e||t in Wr}}))}function yc(n,e=!0){return Ne(n)?n.displayName||n.name:n.name||e&&n.__name}function sv(n){return Ne(n)&&"__vccOpts"in n}const es=(n,e)=>J_(n,e,ar);function rv(){return null}function ov(){return null}function av(n){}function lv(n,e){return null}function cv(){return qp().slots}function uv(){return qp().attrs}function qp(){const n=Ti();return n.setupContext||(n.setupContext=$p(n))}function fv(n,e){const t=Le(n)?n.reduce((i,s)=>(i[s]={},i),{}):n;for(const i in e){const s=t[i];s?Le(s)||Ne(s)?t[i]={type:s,default:e[i]}:s.default=e[i]:s===null&&(t[i]={default:e[i]})}return t}function hv(n,e){const t={};for(const i in n)e.includes(i)||Object.defineProperty(t,i,{enumerable:!0,get:()=>n[i]});return t}function dv(n){const e=Ti();let t=n();return _i(),Xc(t)&&(t=t.catch(i=>{throw Si(e),i})),[t,()=>Si(e)]}function Xp(n,e,t){const i=arguments.length;return i===2?tt(e)&&!Le(e)?Mi(e)?st(n,null,[e]):st(n,e):st(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Mi(t)&&(t=[t]),st(n,e,t))}const Kp=Symbol(""),Yp=()=>Gr(Kp);function pv(){}function mv(n,e,t,i){const s=t[i];if(s&&Zp(s,n))return s;const r=e();return r.memo=n.slice(),t[i]=r}function Zp(n,e){const t=n.memo;if(t.length!=e.length)return!1;for(let i=0;i<t.length;i++)if(rr(t[i],e[i]))return!1;return ls>0&&Kt&&Kt.push(n),!0}const Jp="3.2.47",gv={createComponentInstance:Vp,setupComponent:Gp,renderComponentRoot:ra,setCurrentRenderingInstance:to,isVNode:Mi,normalizeVNode:ln},_v=gv,vv=null,xv=null,yv="http://www.w3.org/2000/svg",Vi=typeof document<"u"?document:null,wf=Vi&&Vi.createElement("template"),bv={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e?Vi.createElementNS(yv,n):Vi.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Vi.createTextNode(n),createComment:n=>Vi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Vi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{wf.innerHTML=i?`<svg>${n}</svg>`:n;const a=wf.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function Mv(n,e,t){const i=n._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function Sv(n,e,t){const i=n.style,s=ke(t);if(t&&!s){if(e&&!ke(e))for(const r in e)t[r]==null&&bc(i,r,"");for(const r in t)bc(i,r,t[r])}else{const r=i.display;s?e!==t&&(i.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(i.display=r)}}const Ef=/\s*!important$/;function bc(n,e,t){if(Le(t))t.forEach(i=>bc(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=wv(n,e);Ef.test(t)?n.setProperty(un(i),t.replace(Ef,""),"important"):n[i]=t}}const Tf=["Webkit","Moz","ms"],gl={};function wv(n,e){const t=gl[e];if(t)return t;let i=Lt(e);if(i!=="filter"&&i in n)return gl[e]=i;i=vs(i);for(let s=0;s<Tf.length;s++){const r=Tf[s]+i;if(r in n)return gl[e]=r}return e}const Cf="http://www.w3.org/1999/xlink";function Ev(n,e,t,i,s){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(Cf,e.slice(6,e.length)):n.setAttributeNS(Cf,e,t);else{const r=e_(e);t==null||r&&!Fd(t)?n.removeAttribute(e):n.setAttribute(e,r?"":t)}}function Tv(n,e,t,i,s,r,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,s,r),n[e]=t??"";return}if(e==="value"&&n.tagName!=="PROGRESS"&&!n.tagName.includes("-")){n._value=t;const l=t??"";(n.value!==l||n.tagName==="OPTION")&&(n.value=l),t==null&&n.removeAttribute(e);return}let a=!1;if(t===""||t==null){const l=typeof n[e];l==="boolean"?t=Fd(t):t==null&&l==="string"?(t="",a=!0):l==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(e)}function Yn(n,e,t,i){n.addEventListener(e,t,i)}function Cv(n,e,t,i){n.removeEventListener(e,t,i)}function Av(n,e,t,i,s=null){const r=n._vei||(n._vei={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=Rv(e);if(i){const c=r[e]=Dv(i,s);Yn(n,a,c,l)}else o&&(Cv(n,a,o,l),r[e]=void 0)}}const Af=/(?:Once|Passive|Capture)$/;function Rv(n){let e;if(Af.test(n)){e={};let i;for(;i=n.match(Af);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):un(n.slice(2)),e]}let _l=0;const Lv=Promise.resolve(),Pv=()=>_l||(Lv.then(()=>_l=0),_l=Date.now());function Dv(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;hn(Iv(i,t.value),e,5,[i])};return t.value=n,t.attached=Pv(),t}function Iv(n,e){if(Le(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Rf=/^on[a-z]/,Fv=(n,e,t,i,s=!1,r,o,a,l)=>{e==="class"?Mv(n,i,s):e==="style"?Sv(n,t,i):gs(e)?$c(e)||Av(n,e,t,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Nv(n,e,i,s))?Tv(n,e,i,r,o,a,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Ev(n,e,i,s))};function Nv(n,e,t,i){return i?!!(e==="innerHTML"||e==="textContent"||e in n&&Rf.test(e)&&Ne(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||Rf.test(e)&&ke(t)?!1:e in n}function Qp(n,e){const t=yr(n);class i extends Ja{constructor(r){super(t,r,e)}}return i.def=t,i}const Ov=n=>Qp(n,mm),Uv=typeof HTMLElement<"u"?HTMLElement:class{};class Ja extends Uv{constructor(e,t={},i){super(),this._def=e,this._props=t,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this.shadowRoot&&i?i(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,Ha(()=>{this._connected||(wc(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let i=0;i<this.attributes.length;i++)this._setAttr(this.attributes[i].name);new MutationObserver(i=>{for(const s of i)this._setAttr(s.attributeName)}).observe(this,{attributes:!0});const e=(i,s=!1)=>{const{props:r,styles:o}=i;let a;if(r&&!Le(r))for(const l in r){const c=r[l];(c===Number||c&&c.type===Number)&&(l in this._props&&(this._props[l]=ma(this._props[l])),(a||(a=Object.create(null)))[Lt(l)]=!0)}this._numberProps=a,s&&this._resolveProps(i),this._applyStyles(o),this._update()},t=this._def.__asyncLoader;t?t().then(i=>e(i,!0)):e(this._def)}_resolveProps(e){const{props:t}=e,i=Le(t)?t:Object.keys(t||{});for(const s of Object.keys(this))s[0]!=="_"&&i.includes(s)&&this._setProp(s,this[s],!0,!1);for(const s of i.map(Lt))Object.defineProperty(this,s,{get(){return this._getProp(s)},set(r){this._setProp(s,r)}})}_setAttr(e){let t=this.getAttribute(e);const i=Lt(e);this._numberProps&&this._numberProps[i]&&(t=ma(t)),this._setProp(i,t,!1)}_getProp(e){return this._props[e]}_setProp(e,t,i=!0,s=!0){t!==this._props[e]&&(this._props[e]=t,s&&this._instance&&this._update(),i&&(t===!0?this.setAttribute(un(e),""):typeof t=="string"||typeof t=="number"?this.setAttribute(un(e),t+""):t||this.removeAttribute(un(e))))}_update(){wc(this._createVNode(),this.shadowRoot)}_createVNode(){const e=st(this._def,Je({},this._props));return this._instance||(e.ce=t=>{this._instance=t,t.isCE=!0;const i=(r,o)=>{this.dispatchEvent(new CustomEvent(r,{detail:o}))};t.emit=(r,...o)=>{i(r,o),un(r)!==r&&i(un(r),o)};let s=this;for(;s=s&&(s.parentNode||s.host);)if(s instanceof Ja){t.parent=s._instance,t.provides=s._instance.provides;break}}),e}_applyStyles(e){e&&e.forEach(t=>{const i=document.createElement("style");i.textContent=t,this.shadowRoot.appendChild(i)})}}function kv(n="$style"){{const e=Ti();if(!e)return et;const t=e.type.__cssModules;if(!t)return et;const i=t[n];return i||et}}function Bv(n){const e=Ti();if(!e)return;const t=e.ut=(s=n(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(r=>Sc(r,s))},i=()=>{const s=n(e.proxy);Mc(e.subTree,s),t(s)};up(i),br(()=>{const s=new MutationObserver(i);s.observe(e.subTree.el.parentNode,{childList:!0}),_o(()=>s.disconnect())})}function Mc(n,e){if(n.shapeFlag&128){const t=n.suspense;n=t.activeBranch,t.pendingBranch&&!t.isHydrating&&t.effects.push(()=>{Mc(t.activeBranch,e)})}for(;n.component;)n=n.component.subTree;if(n.shapeFlag&1&&n.el)Sc(n.el,e);else if(n.type===pt)n.children.forEach(t=>Mc(t,e));else if(n.type===Ji){let{el:t,anchor:i}=n;for(;t&&(Sc(t,e),t!==i);)t=t.nextSibling}}function Sc(n,e){if(n.nodeType===1){const t=n.style;for(const i in e)t.setProperty(`--${i}`,e[i])}}const ai="transition",Tr="animation",Mu=(n,{slots:e})=>Xp(du,tm(n),e);Mu.displayName="Transition";const em={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},zv=Mu.props=Je({},du.props,em),Ii=(n,e=[])=>{Le(n)?n.forEach(t=>t(...e)):n&&n(...e)},Lf=n=>n?Le(n)?n.some(e=>e.length>1):n.length>1:!1;function tm(n){const e={};for(const W in n)W in em||(e[W]=n[W]);if(n.css===!1)return e;const{name:t="v",type:i,duration:s,enterFromClass:r=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:h=`${t}-leave-active`,leaveToClass:m=`${t}-leave-to`}=n,v=Vv(s),d=v&&v[0],p=v&&v[1],{onBeforeEnter:g,onEnter:_,onEnterCancelled:b,onLeave:w,onLeaveCancelled:S,onBeforeAppear:P=g,onAppear:L=_,onAppearCancelled:x=b}=e,T=(W,N,F)=>{hi(W,N?u:a),hi(W,N?c:o),F&&F()},D=(W,N)=>{W._isLeaving=!1,hi(W,f),hi(W,m),hi(W,h),N&&N()},V=W=>(N,F)=>{const ie=W?L:_,le=()=>T(N,W,F);Ii(ie,[N,le]),Pf(()=>{hi(N,W?l:r),qn(N,W?u:a),Lf(ie)||Df(N,i,d,le)})};return Je(e,{onBeforeEnter(W){Ii(g,[W]),qn(W,r),qn(W,o)},onBeforeAppear(W){Ii(P,[W]),qn(W,l),qn(W,c)},onEnter:V(!1),onAppear:V(!0),onLeave(W,N){W._isLeaving=!0;const F=()=>D(W,N);qn(W,f),im(),qn(W,h),Pf(()=>{W._isLeaving&&(hi(W,f),qn(W,m),Lf(w)||Df(W,i,p,F))}),Ii(w,[W,F])},onEnterCancelled(W){T(W,!1),Ii(b,[W])},onAppearCancelled(W){T(W,!0),Ii(x,[W])},onLeaveCancelled(W){D(W),Ii(S,[W])}})}function Vv(n){if(n==null)return null;if(tt(n))return[vl(n.enter),vl(n.leave)];{const e=vl(n);return[e,e]}}function vl(n){return ma(n)}function qn(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n._vtc||(n._vtc=new Set)).add(e)}function hi(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const{_vtc:t}=n;t&&(t.delete(e),t.size||(n._vtc=void 0))}function Pf(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let Hv=0;function Df(n,e,t,i){const s=n._endId=++Hv,r=()=>{s===n._endId&&i()};if(t)return setTimeout(r,t);const{type:o,timeout:a,propCount:l}=nm(n,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{n.removeEventListener(c,h),r()},h=m=>{m.target===n&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),n.addEventListener(c,h)}function nm(n,e){const t=window.getComputedStyle(n),i=v=>(t[v]||"").split(", "),s=i(`${ai}Delay`),r=i(`${ai}Duration`),o=If(s,r),a=i(`${Tr}Delay`),l=i(`${Tr}Duration`),c=If(a,l);let u=null,f=0,h=0;e===ai?o>0&&(u=ai,f=o,h=r.length):e===Tr?c>0&&(u=Tr,f=c,h=l.length):(f=Math.max(o,c),u=f>0?o>c?ai:Tr:null,h=u?u===ai?r.length:l.length:0);const m=u===ai&&/\b(transform|all)(,|$)/.test(i(`${ai}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:m}}function If(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>Ff(t)+Ff(n[i])))}function Ff(n){return Number(n.slice(0,-1).replace(",","."))*1e3}function im(){return document.body.offsetHeight}const sm=new WeakMap,rm=new WeakMap,om={name:"TransitionGroup",props:Je({},zv,{tag:String,moveClass:String}),setup(n,{slots:e}){const t=Ti(),i=hu();let s,r;return Xa(()=>{if(!s.length)return;const o=n.moveClass||`${n.name||"v"}-move`;if(!Xv(s[0].el,t.vnode.el,o))return;s.forEach(jv),s.forEach($v);const a=s.filter(qv);im(),a.forEach(l=>{const c=l.el,u=c.style;qn(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const f=c._moveCb=h=>{h&&h.target!==c||(!h||/transform$/.test(h.propertyName))&&(c.removeEventListener("transitionend",f),c._moveCb=null,hi(c,o))};c.addEventListener("transitionend",f)})}),()=>{const o=je(n),a=tm(o);let l=o.tag||pt;s=r,r=e.default?$a(e.default()):[];for(let c=0;c<r.length;c++){const u=r[c];u.key!=null&&os(u,or(u,a,i,t))}if(s)for(let c=0;c<s.length;c++){const u=s[c];os(u,or(u,a,i,t)),sm.set(u,u.el.getBoundingClientRect())}return st(l,null,r)}}},Gv=n=>delete n.mode;om.props;const Wv=om;function jv(n){const e=n.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function $v(n){rm.set(n,n.el.getBoundingClientRect())}function qv(n){const e=sm.get(n),t=rm.get(n),i=e.left-t.left,s=e.top-t.top;if(i||s){const r=n.el.style;return r.transform=r.webkitTransform=`translate(${i}px,${s}px)`,r.transitionDuration="0s",n}}function Xv(n,e,t){const i=n.cloneNode();n._vtc&&n._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&i.classList.remove(a))}),t.split(/\s+/).forEach(o=>o&&i.classList.add(o)),i.style.display="none";const s=e.nodeType===1?e:e.parentNode;s.appendChild(i);const{hasTransform:r}=nm(i);return s.removeChild(i),r}const wi=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Le(e)?t=>Qs(e,t):e};function Kv(n){n.target.composing=!0}function Nf(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const io={created(n,{modifiers:{lazy:e,trim:t,number:i}},s){n._assign=wi(s);const r=i||s.props&&s.props.type==="number";Yn(n,e?"change":"input",o=>{if(o.target.composing)return;let a=n.value;t&&(a=a.trim()),r&&(a=pa(a)),n._assign(a)}),t&&Yn(n,"change",()=>{n.value=n.value.trim()}),e||(Yn(n,"compositionstart",Kv),Yn(n,"compositionend",Nf),Yn(n,"change",Nf))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,modifiers:{lazy:t,trim:i,number:s}},r){if(n._assign=wi(r),n.composing||document.activeElement===n&&n.type!=="range"&&(t||i&&n.value.trim()===e||(s||n.type==="number")&&pa(n.value)===e))return;const o=e??"";n.value!==o&&(n.value=o)}},Su={deep:!0,created(n,e,t){n._assign=wi(t),Yn(n,"change",()=>{const i=n._modelValue,s=lr(n),r=n.checked,o=n._assign;if(Le(i)){const a=Fa(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const c=[...i];c.splice(a,1),o(c)}}else if(_s(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(lm(n,r))})},mounted:Of,beforeUpdate(n,e,t){n._assign=wi(t),Of(n,e,t)}};function Of(n,{value:e,oldValue:t},i){n._modelValue=e,Le(e)?n.checked=Fa(e,i.props.value)>-1:_s(e)?n.checked=e.has(i.props.value):e!==t&&(n.checked=xi(e,lm(n,!0)))}const wu={created(n,{value:e},t){n.checked=xi(e,t.props.value),n._assign=wi(t),Yn(n,"change",()=>{n._assign(lr(n))})},beforeUpdate(n,{value:e,oldValue:t},i){n._assign=wi(i),e!==t&&(n.checked=xi(e,i.props.value))}},am={deep:!0,created(n,{value:e,modifiers:{number:t}},i){const s=_s(e);Yn(n,"change",()=>{const r=Array.prototype.filter.call(n.options,o=>o.selected).map(o=>t?pa(lr(o)):lr(o));n._assign(n.multiple?s?new Set(r):r:r[0])}),n._assign=wi(i)},mounted(n,{value:e}){Uf(n,e)},beforeUpdate(n,e,t){n._assign=wi(t)},updated(n,{value:e}){Uf(n,e)}};function Uf(n,e){const t=n.multiple;if(!(t&&!Le(e)&&!_s(e))){for(let i=0,s=n.options.length;i<s;i++){const r=n.options[i],o=lr(r);if(t)Le(e)?r.selected=Fa(e,o)>-1:r.selected=e.has(o);else if(xi(lr(r),e)){n.selectedIndex!==i&&(n.selectedIndex=i);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function lr(n){return"_value"in n?n._value:n.value}function lm(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const cm={created(n,e,t){No(n,e,t,null,"created")},mounted(n,e,t){No(n,e,t,null,"mounted")},beforeUpdate(n,e,t,i){No(n,e,t,i,"beforeUpdate")},updated(n,e,t,i){No(n,e,t,i,"updated")}};function um(n,e){switch(n){case"SELECT":return am;case"TEXTAREA":return io;default:switch(e){case"checkbox":return Su;case"radio":return wu;default:return io}}}function No(n,e,t,i,s){const o=um(n.tagName,t.props&&t.props.type)[s];o&&o(n,e,t,i)}function Yv(){io.getSSRProps=({value:n})=>({value:n}),wu.getSSRProps=({value:n},e)=>{if(e.props&&xi(e.props.value,n))return{checked:!0}},Su.getSSRProps=({value:n},e)=>{if(Le(n)){if(e.props&&Fa(n,e.props.value)>-1)return{checked:!0}}else if(_s(n)){if(e.props&&n.has(e.props.value))return{checked:!0}}else if(n)return{checked:!0}},cm.getSSRProps=(n,e)=>{if(typeof e.type!="string")return;const t=um(e.type.toUpperCase(),e.props&&e.props.type);if(t.getSSRProps)return t.getSSRProps(n,e)}}const Zv=["ctrl","shift","alt","meta"],Jv={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>Zv.some(t=>n[`${t}Key`]&&!e.includes(t))},Qv=(n,e)=>(t,...i)=>{for(let s=0;s<e.length;s++){const r=Jv[e[s]];if(r&&r(t,e))return}return n(t,...i)},ex={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},tx=(n,e)=>t=>{if(!("key"in t))return;const i=un(t.key);if(e.some(s=>s===i||ex[s]===i))return n(t)},fm={beforeMount(n,{value:e},{transition:t}){n._vod=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):Cr(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),Cr(n,!0),i.enter(n)):i.leave(n,()=>{Cr(n,!1)}):Cr(n,e))},beforeUnmount(n,{value:e}){Cr(n,e)}};function Cr(n,e){n.style.display=e?n._vod:"none"}function nx(){fm.getSSRProps=({value:n})=>{if(!n)return{style:{display:"none"}}}}const hm=Je({patchProp:Fv},bv);let qr,kf=!1;function dm(){return qr||(qr=Dp(hm))}function pm(){return qr=kf?qr:Ip(hm),kf=!0,qr}const wc=(...n)=>{dm().render(...n)},mm=(...n)=>{pm().hydrate(...n)},gm=(...n)=>{const e=dm().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=_m(i);if(!s)return;const r=e._component;!Ne(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=t(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e},ix=(...n)=>{const e=pm().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=_m(i);if(s)return t(s,!0,s instanceof SVGElement)},e};function _m(n){return ke(n)?document.querySelector(n):n}let Bf=!1;const sx=()=>{Bf||(Bf=!0,Yv(),nx())},rx=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:du,Comment:kt,EffectScope:Yc,Fragment:pt,KeepAlive:S0,ReactiveEffect:po,Static:Ji,Suspense:h0,Teleport:K0,Text:as,Transition:Mu,TransitionGroup:Wv,VueElement:Ja,assertNumber:e0,callWithAsyncErrorHandling:hn,callWithErrorHandling:Jn,camelize:Lt,capitalize:vs,cloneVNode:Bn,compatUtils:xv,computed:es,createApp:gm,createBlock:yu,createCommentVNode:Kn,createElementBlock:dt,createElementVNode:Fe,createHydrationRenderer:Ip,createPropsRestProxy:hv,createRenderer:Dp,createSSRApp:ix,createSlots:A0,createStaticVNode:J0,createTextVNode:Qi,createVNode:st,customRef:X_,defineAsyncComponent:b0,defineComponent:yr,defineCustomElement:Qp,defineEmits:ov,defineExpose:av,defineProps:rv,defineSSRCustomElement:Ov,get devtools(){return Hs},effect:p_,effectScope:u_,getCurrentInstance:Ti,getCurrentScope:Bd,getTransitionRawChildren:$a,guardReactiveProps:Bp,h:Xp,handleError:xs,hydrate:mm,initCustomFormatter:pv,initDirectivesForSSR:sx,inject:Gr,isMemoSame:Zp,isProxy:eu,isReactive:Yi,isReadonly:rs,isRef:Rt,isRuntimeOnly:nv,isShallow:Zr,isVNode:Mi,markRaw:tu,mergeDefaults:fv,mergeProps:zp,nextTick:Ha,normalizeClass:ti,normalizeProps:$g,normalizeStyle:ms,onActivated:dp,onBeforeMount:gp,onBeforeUnmount:Ka,onBeforeUpdate:_p,onDeactivated:pp,onErrorCaptured:bp,onMounted:br,onRenderTracked:yp,onRenderTriggered:xp,onScopeDispose:f_,onServerPrefetch:vp,onUnmounted:_o,onUpdated:Xa,openBlock:at,popScopeId:lu,provide:cp,proxyRefs:su,pushScopeId:au,queuePostFlushCb:ou,reactive:Ba,readonly:Qc,ref:Pt,registerRuntimeCompiler:Wp,render:wc,renderList:gu,renderSlot:R0,resolveComponent:uc,resolveDirective:C0,resolveDynamicComponent:T0,resolveFilter:vv,resolveTransitionHooks:or,setBlockTracking:_c,setDevtoolsHook:rp,setTransitionHooks:os,shallowReactive:Jd,shallowReadonly:H_,shallowRef:G_,ssrContextKey:Kp,ssrUtils:_v,stop:m_,toDisplayString:Gi,toHandlerKey:Js,toHandlers:L0,toRaw:je,toRef:ep,toRefs:K_,transformVNodeArgs:Y0,triggerRef:j_,unref:_a,useAttrs:uv,useCssModule:kv,useCssVars:Bv,useSSRContext:Yp,useSlots:cv,useTransitionState:hu,vModelCheckbox:Su,vModelDynamic:cm,vModelRadio:wu,vModelSelect:am,vModelText:io,vShow:fm,version:Jp,warn:Q_,watch:nr,watchEffect:_0,watchPostEffect:up,watchSyncEffect:v0,withAsyncContext:dv,withCtx:cu,withDefaults:lv,withDirectives:Mp,withKeys:tx,withMemo:mv,withModifiers:Qv,withScopeId:o0},Symbol.toStringTag,{value:"Module"}));function Eu(n){throw n}function vm(n){}function ct(n,e,t,i){const s=n,r=new SyntaxError(String(s));return r.code=n,r.loc=e,r}const so=Symbol(""),Xr=Symbol(""),Tu=Symbol(""),Ma=Symbol(""),xm=Symbol(""),cs=Symbol(""),ym=Symbol(""),bm=Symbol(""),Cu=Symbol(""),Au=Symbol(""),vo=Symbol(""),Ru=Symbol(""),Mm=Symbol(""),Lu=Symbol(""),Sa=Symbol(""),Pu=Symbol(""),Du=Symbol(""),Iu=Symbol(""),Fu=Symbol(""),Sm=Symbol(""),wm=Symbol(""),Qa=Symbol(""),wa=Symbol(""),Nu=Symbol(""),Ou=Symbol(""),ro=Symbol(""),xo=Symbol(""),Uu=Symbol(""),Ec=Symbol(""),ox=Symbol(""),Tc=Symbol(""),Ea=Symbol(""),ax=Symbol(""),lx=Symbol(""),ku=Symbol(""),cx=Symbol(""),ux=Symbol(""),Bu=Symbol(""),Em=Symbol(""),cr={[so]:"Fragment",[Xr]:"Teleport",[Tu]:"Suspense",[Ma]:"KeepAlive",[xm]:"BaseTransition",[cs]:"openBlock",[ym]:"createBlock",[bm]:"createElementBlock",[Cu]:"createVNode",[Au]:"createElementVNode",[vo]:"createCommentVNode",[Ru]:"createTextVNode",[Mm]:"createStaticVNode",[Lu]:"resolveComponent",[Sa]:"resolveDynamicComponent",[Pu]:"resolveDirective",[Du]:"resolveFilter",[Iu]:"withDirectives",[Fu]:"renderList",[Sm]:"renderSlot",[wm]:"createSlots",[Qa]:"toDisplayString",[wa]:"mergeProps",[Nu]:"normalizeClass",[Ou]:"normalizeStyle",[ro]:"normalizeProps",[xo]:"guardReactiveProps",[Uu]:"toHandlers",[Ec]:"camelize",[ox]:"capitalize",[Tc]:"toHandlerKey",[Ea]:"setBlockTracking",[ax]:"pushScopeId",[lx]:"popScopeId",[ku]:"withCtx",[cx]:"unref",[ux]:"isRef",[Bu]:"withMemo",[Em]:"isMemoSame"};function fx(n){Object.getOwnPropertySymbols(n).forEach(e=>{cr[e]=n[e]})}const gn={source:"",start:{line:1,column:1,offset:0},end:{line:1,column:1,offset:0}};function hx(n,e=gn){return{type:0,children:n,helpers:new Set,components:[],directives:[],hoists:[],imports:[],cached:0,temps:0,codegenNode:void 0,loc:e}}function oo(n,e,t,i,s,r,o,a=!1,l=!1,c=!1,u=gn){return n&&(a?(n.helper(cs),n.helper(hr(n.inSSR,c))):n.helper(fr(n.inSSR,c)),o&&n.helper(Iu)),{type:13,tag:e,props:t,children:i,patchFlag:s,dynamicProps:r,directives:o,isBlock:a,disableTracking:l,isComponent:c,loc:u}}function yo(n,e=gn){return{type:17,loc:e,elements:n}}function Mn(n,e=gn){return{type:15,loc:e,properties:n}}function ht(n,e){return{type:16,loc:gn,key:ke(n)?Ve(n,!0):n,value:e}}function Ve(n,e=!1,t=gn,i=0){return{type:4,loc:t,content:n,isStatic:e,constType:e?3:i}}function In(n,e=gn){return{type:8,loc:e,children:n}}function xt(n,e=[],t=gn){return{type:14,loc:t,callee:n,arguments:e}}function ur(n,e=void 0,t=!1,i=!1,s=gn){return{type:18,params:n,returns:e,newline:t,isSlot:i,loc:s}}function Cc(n,e,t,i=!0){return{type:19,test:n,consequent:e,alternate:t,newline:i,loc:gn}}function dx(n,e,t=!1){return{type:20,index:n,value:e,isVNode:t,loc:gn}}function px(n){return{type:21,body:n,loc:gn}}const Yt=n=>n.type===4&&n.isStatic,js=(n,e)=>n===e||n===un(e);function Tm(n){if(js(n,"Teleport"))return Xr;if(js(n,"Suspense"))return Tu;if(js(n,"KeepAlive"))return Ma;if(js(n,"BaseTransition"))return xm}const mx=/^\d|[^\$\w]/,zu=n=>!mx.test(n),gx=/[A-Za-z_$\xA0-\uFFFF]/,_x=/[\.\?\w$\xA0-\uFFFF]/,vx=/\s+[.[]\s*|\s*[.[]\s+/g,xx=n=>{n=n.trim().replace(vx,o=>o.trim());let e=0,t=[],i=0,s=0,r=null;for(let o=0;o<n.length;o++){const a=n.charAt(o);switch(e){case 0:if(a==="[")t.push(e),e=1,i++;else if(a==="(")t.push(e),e=2,s++;else if(!(o===0?gx:_x).test(a))return!1;break;case 1:a==="'"||a==='"'||a==="`"?(t.push(e),e=3,r=a):a==="["?i++:a==="]"&&(--i||(e=t.pop()));break;case 2:if(a==="'"||a==='"'||a==="`")t.push(e),e=3,r=a;else if(a==="(")s++;else if(a===")"){if(o===n.length-1)return!1;--s||(e=t.pop())}break;case 3:a===r&&(e=t.pop(),r=null);break}}return!i&&!s},Cm=xx;function Am(n,e,t){const s={source:n.source.slice(e,e+t),start:Ta(n.start,n.source,e),end:n.end};return t!=null&&(s.end=Ta(n.start,n.source,e+t)),s}function Ta(n,e,t=e.length){return Ca(Je({},n),e,t)}function Ca(n,e,t=e.length){let i=0,s=-1;for(let r=0;r<t;r++)e.charCodeAt(r)===10&&(i++,s=r);return n.offset+=t,n.line+=i,n.column=s===-1?n.column+t:t-s,n}function yn(n,e,t=!1){for(let i=0;i<n.props.length;i++){const s=n.props[i];if(s.type===7&&(t||s.exp)&&(ke(e)?s.name===e:e.test(s.name)))return s}}function el(n,e,t=!1,i=!1){for(let s=0;s<n.props.length;s++){const r=n.props[s];if(r.type===6){if(t)continue;if(r.name===e&&(r.value||i))return r}else if(r.name==="bind"&&(r.exp||i)&&ji(r.arg,e))return r}}function ji(n,e){return!!(n&&Yt(n)&&n.content===e)}function yx(n){return n.props.some(e=>e.type===7&&e.name==="bind"&&(!e.arg||e.arg.type!==4||!e.arg.isStatic))}function xl(n){return n.type===5||n.type===2}function bx(n){return n.type===7&&n.name==="slot"}function Aa(n){return n.type===1&&n.tagType===3}function Ra(n){return n.type===1&&n.tagType===2}function fr(n,e){return n||e?Cu:Au}function hr(n,e){return n||e?ym:bm}const Mx=new Set([ro,xo]);function Rm(n,e=[]){if(n&&!ke(n)&&n.type===14){const t=n.callee;if(!ke(t)&&Mx.has(t))return Rm(n.arguments[0],e.concat(n))}return[n,e]}function La(n,e,t){let i,s=n.type===13?n.props:n.arguments[2],r=[],o;if(s&&!ke(s)&&s.type===14){const a=Rm(s);s=a[0],r=a[1],o=r[r.length-1]}if(s==null||ke(s))i=Mn([e]);else if(s.type===14){const a=s.arguments[0];!ke(a)&&a.type===15?zf(e,a)||a.properties.unshift(e):s.callee===Uu?i=xt(t.helper(wa),[Mn([e]),s]):s.arguments.unshift(Mn([e])),!i&&(i=s)}else s.type===15?(zf(e,s)||s.properties.unshift(e),i=s):(i=xt(t.helper(wa),[Mn([e]),s]),o&&o.callee===xo&&(o=r[r.length-2]));n.type===13?o?o.arguments[0]=i:n.props=i:o?o.arguments[0]=i:n.arguments[2]=i}function zf(n,e){let t=!1;if(n.key.type===4){const i=n.key.content;t=e.properties.some(s=>s.key.type===4&&s.key.content===i)}return t}function ao(n,e){return`_${e}_${n.replace(/[^\w]/g,(t,i)=>t==="-"?"_":n.charCodeAt(i).toString())}`}function Sx(n){return n.type===14&&n.callee===Bu?n.arguments[1].returns:n}function Vu(n,{helper:e,removeHelper:t,inSSR:i}){n.isBlock||(n.isBlock=!0,t(fr(i,n.isComponent)),e(cs),e(hr(i,n.isComponent)))}function Vf(n,e){const t=e.options?e.options.compatConfig:e.compatConfig,i=t&&t[n];return n==="MODE"?i||3:i}function ts(n,e){const t=Vf("MODE",e),i=Vf(n,e);return t===3?i===!0:i!==!1}function lo(n,e,t,...i){return ts(n,e)}const wx=/&(gt|lt|amp|apos|quot);/g,Ex={gt:">",lt:"<",amp:"&",apos:"'",quot:'"'},Hf={delimiters:["{{","}}"],getNamespace:()=>0,getTextMode:()=>0,isVoidTag:sa,isPreTag:sa,isCustomElement:sa,decodeEntities:n=>n.replace(wx,(e,t)=>Ex[t]),onError:Eu,onWarn:vm,comments:!1};function Tx(n,e={}){const t=Cx(n,e),i=dn(t);return hx(Hu(t,0,[]),wn(t,i))}function Cx(n,e){const t=Je({},Hf);let i;for(i in e)t[i]=e[i]===void 0?Hf[i]:e[i];return{options:t,column:1,line:1,offset:0,originalSource:n,source:n,inPre:!1,inVPre:!1,onWarn:t.onWarn}}function Hu(n,e,t){const i=tl(t),s=i?i.ns:0,r=[];for(;!Ox(n,e,t);){const a=n.source;let l;if(e===0||e===1){if(!n.inVPre&&Ut(a,n.options.delimiters[0]))l=Fx(n,e);else if(e===0&&a[0]==="<")if(a.length===1)Qe(n,5,1);else if(a[1]==="!")Ut(a,"<!--")?l=Rx(n):Ut(a,"<!DOCTYPE")?l=Ar(n):Ut(a,"<![CDATA[")?s!==0?l=Ax(n,t):(Qe(n,1),l=Ar(n)):(Qe(n,11),l=Ar(n));else if(a[1]==="/")if(a.length===2)Qe(n,5,2);else if(a[2]===">"){Qe(n,14,2),St(n,3);continue}else if(/[a-z]/i.test(a[2])){Qe(n,23),Ac(n,1,i);continue}else Qe(n,12,2),l=Ar(n);else/[a-z]/i.test(a[1])?(l=Lx(n,t),ts("COMPILER_NATIVE_TEMPLATE",n)&&l&&l.tag==="template"&&!l.props.some(c=>c.type===7&&Lm(c.name))&&(l=l.children)):a[1]==="?"?(Qe(n,21,1),l=Ar(n)):Qe(n,12,1)}if(l||(l=Nx(n,e)),Le(l))for(let c=0;c<l.length;c++)Gf(r,l[c]);else Gf(r,l)}let o=!1;if(e!==2&&e!==1){const a=n.options.whitespace!=="preserve";for(let l=0;l<r.length;l++){const c=r[l];if(c.type===2)if(n.inPre)c.content=c.content.replace(/\r\n/g,`
`);else if(/[^\t\r\n\f ]/.test(c.content))a&&(c.content=c.content.replace(/[\t\r\n\f ]+/g," "));else{const u=r[l-1],f=r[l+1];!u||!f||a&&(u.type===3&&f.type===3||u.type===3&&f.type===1||u.type===1&&f.type===3||u.type===1&&f.type===1&&/[\r\n]/.test(c.content))?(o=!0,r[l]=null):c.content=" "}else c.type===3&&!n.options.comments&&(o=!0,r[l]=null)}if(n.inPre&&i&&n.options.isPreTag(i.tag)){const l=r[0];l&&l.type===2&&(l.content=l.content.replace(/^\r?\n/,""))}}return o?r.filter(Boolean):r}function Gf(n,e){if(e.type===2){const t=tl(n);if(t&&t.type===2&&t.loc.end.offset===e.loc.start.offset){t.content+=e.content,t.loc.end=e.loc.end,t.loc.source+=e.loc.source;return}}n.push(e)}function Ax(n,e){St(n,9);const t=Hu(n,3,e);return n.source.length===0?Qe(n,6):St(n,3),t}function Rx(n){const e=dn(n);let t;const i=/--(\!)?>/.exec(n.source);if(!i)t=n.source.slice(4),St(n,n.source.length),Qe(n,7);else{i.index<=3&&Qe(n,0),i[1]&&Qe(n,10),t=n.source.slice(4,i.index);const s=n.source.slice(0,i.index);let r=1,o=0;for(;(o=s.indexOf("<!--",r))!==-1;)St(n,o-r+1),o+4<s.length&&Qe(n,16),r=o+1;St(n,i.index+i[0].length-r+1)}return{type:3,content:t,loc:wn(n,e)}}function Ar(n){const e=dn(n),t=n.source[1]==="?"?1:2;let i;const s=n.source.indexOf(">");return s===-1?(i=n.source.slice(t),St(n,n.source.length)):(i=n.source.slice(t,s),St(n,s+1)),{type:3,content:i,loc:wn(n,e)}}function Lx(n,e){const t=n.inPre,i=n.inVPre,s=tl(e),r=Ac(n,0,s),o=n.inPre&&!t,a=n.inVPre&&!i;if(r.isSelfClosing||n.options.isVoidTag(r.tag))return o&&(n.inPre=!1),a&&(n.inVPre=!1),r;e.push(r);const l=n.options.getTextMode(r,s),c=Hu(n,l,e);e.pop();{const u=r.props.find(f=>f.type===6&&f.name==="inline-template");if(u&&lo("COMPILER_INLINE_TEMPLATE",n,u.loc)){const f=wn(n,r.loc.end);u.value={type:2,content:f.source,loc:f}}}if(r.children=c,Rc(n.source,r.tag))Ac(n,1,s);else if(Qe(n,24,0,r.loc.start),n.source.length===0&&r.tag.toLowerCase()==="script"){const u=c[0];u&&Ut(u.loc.source,"<!--")&&Qe(n,8)}return r.loc=wn(n,r.loc.start),o&&(n.inPre=!1),a&&(n.inVPre=!1),r}const Lm=Qt("if,else,else-if,for,slot");function Ac(n,e,t){const i=dn(n),s=/^<\/?([a-z][^\t\r\n\f />]*)/i.exec(n.source),r=s[1],o=n.options.getNamespace(r,t);St(n,s[0].length),co(n);const a=dn(n),l=n.source;n.options.isPreTag(r)&&(n.inPre=!0);let c=Wf(n,e);e===0&&!n.inVPre&&c.some(h=>h.type===7&&h.name==="pre")&&(n.inVPre=!0,Je(n,a),n.source=l,c=Wf(n,e).filter(h=>h.name!=="v-pre"));let u=!1;if(n.source.length===0?Qe(n,9):(u=Ut(n.source,"/>"),e===1&&u&&Qe(n,4),St(n,u?2:1)),e===1)return;let f=0;return n.inVPre||(r==="slot"?f=2:r==="template"?c.some(h=>h.type===7&&Lm(h.name))&&(f=3):Px(r,c,n)&&(f=1)),{type:1,ns:o,tag:r,tagType:f,props:c,isSelfClosing:u,children:[],loc:wn(n,i),codegenNode:void 0}}function Px(n,e,t){const i=t.options;if(i.isCustomElement(n))return!1;if(n==="component"||/^[A-Z]/.test(n)||Tm(n)||i.isBuiltInComponent&&i.isBuiltInComponent(n)||i.isNativeTag&&!i.isNativeTag(n))return!0;for(let s=0;s<e.length;s++){const r=e[s];if(r.type===6){if(r.name==="is"&&r.value){if(r.value.content.startsWith("vue:"))return!0;if(lo("COMPILER_IS_ON_ELEMENT",t,r.loc))return!0}}else{if(r.name==="is")return!0;if(r.name==="bind"&&ji(r.arg,"is")&&lo("COMPILER_IS_ON_ELEMENT",t,r.loc))return!0}}}function Wf(n,e){const t=[],i=new Set;for(;n.source.length>0&&!Ut(n.source,">")&&!Ut(n.source,"/>");){if(Ut(n.source,"/")){Qe(n,22),St(n,1),co(n);continue}e===1&&Qe(n,3);const s=Dx(n,i);s.type===6&&s.value&&s.name==="class"&&(s.value.content=s.value.content.replace(/\s+/g," ").trim()),e===0&&t.push(s),/^[^\t\r\n\f />]/.test(n.source)&&Qe(n,15),co(n)}return t}function Dx(n,e){const t=dn(n),s=/^[^\t\r\n\f />][^\t\r\n\f />=]*/.exec(n.source)[0];e.has(s)&&Qe(n,2),e.add(s),s[0]==="="&&Qe(n,19);{const a=/["'<]/g;let l;for(;l=a.exec(s);)Qe(n,17,l.index)}St(n,s.length);let r;/^[\t\r\n\f ]*=/.test(n.source)&&(co(n),St(n,1),co(n),r=Ix(n),r||Qe(n,13));const o=wn(n,t);if(!n.inVPre&&/^(v-[A-Za-z0-9-]|:|\.|@|#)/.test(s)){const a=/(?:^v-([a-z0-9-]+))?(?:(?::|^\.|^@|^#)(\[[^\]]+\]|[^\.]+))?(.+)?$/i.exec(s);let l=Ut(s,"."),c=a[1]||(l||Ut(s,":")?"bind":Ut(s,"@")?"on":"slot"),u;if(a[2]){const h=c==="slot",m=s.lastIndexOf(a[2]),v=wn(n,jf(n,t,m),jf(n,t,m+a[2].length+(h&&a[3]||"").length));let d=a[2],p=!0;d.startsWith("[")?(p=!1,d.endsWith("]")?d=d.slice(1,d.length-1):(Qe(n,27),d=d.slice(1))):h&&(d+=a[3]||""),u={type:4,content:d,isStatic:p,constType:p?3:0,loc:v}}if(r&&r.isQuoted){const h=r.loc;h.start.offset++,h.start.column++,h.end=Ta(h.start,r.content),h.source=h.source.slice(1,-1)}const f=a[3]?a[3].slice(1).split("."):[];return l&&f.push("prop"),c==="bind"&&u&&f.includes("sync")&&lo("COMPILER_V_BIND_SYNC",n,o,u.loc.source)&&(c="model",f.splice(f.indexOf("sync"),1)),{type:7,name:c,exp:r&&{type:4,content:r.content,isStatic:!1,constType:0,loc:r.loc},arg:u,modifiers:f,loc:o}}return!n.inVPre&&Ut(s,"v-")&&Qe(n,26),{type:6,name:s,value:r&&{type:2,content:r.content,loc:r.loc},loc:o}}function Ix(n){const e=dn(n);let t;const i=n.source[0],s=i==='"'||i==="'";if(s){St(n,1);const r=n.source.indexOf(i);r===-1?t=Kr(n,n.source.length,4):(t=Kr(n,r,4),St(n,1))}else{const r=/^[^\t\r\n\f >]+/.exec(n.source);if(!r)return;const o=/["'<=`]/g;let a;for(;a=o.exec(r[0]);)Qe(n,18,a.index);t=Kr(n,r[0].length,4)}return{content:t,isQuoted:s,loc:wn(n,e)}}function Fx(n,e){const[t,i]=n.options.delimiters,s=n.source.indexOf(i,t.length);if(s===-1){Qe(n,25);return}const r=dn(n);St(n,t.length);const o=dn(n),a=dn(n),l=s-t.length,c=n.source.slice(0,l),u=Kr(n,l,e),f=u.trim(),h=u.indexOf(f);h>0&&Ca(o,c,h);const m=l-(u.length-f.length-h);return Ca(a,c,m),St(n,i.length),{type:5,content:{type:4,isStatic:!1,constType:0,content:f,loc:wn(n,o,a)},loc:wn(n,r)}}function Nx(n,e){const t=e===3?["]]>"]:["<",n.options.delimiters[0]];let i=n.source.length;for(let o=0;o<t.length;o++){const a=n.source.indexOf(t[o],1);a!==-1&&i>a&&(i=a)}const s=dn(n);return{type:2,content:Kr(n,i,e),loc:wn(n,s)}}function Kr(n,e,t){const i=n.source.slice(0,e);return St(n,e),t===2||t===3||!i.includes("&")?i:n.options.decodeEntities(i,t===4)}function dn(n){const{column:e,line:t,offset:i}=n;return{column:e,line:t,offset:i}}function wn(n,e,t){return t=t||dn(n),{start:e,end:t,source:n.originalSource.slice(e.offset,t.offset)}}function tl(n){return n[n.length-1]}function Ut(n,e){return n.startsWith(e)}function St(n,e){const{source:t}=n;Ca(n,t,e),n.source=t.slice(e)}function co(n){const e=/^[\t\r\n\f ]+/.exec(n.source);e&&St(n,e[0].length)}function jf(n,e,t){return Ta(e,n.originalSource.slice(e.offset,t),t)}function Qe(n,e,t,i=dn(n)){t&&(i.offset+=t,i.column+=t),n.options.onError(ct(e,{start:i,end:i,source:""}))}function Ox(n,e,t){const i=n.source;switch(e){case 0:if(Ut(i,"</")){for(let s=t.length-1;s>=0;--s)if(Rc(i,t[s].tag))return!0}break;case 1:case 2:{const s=tl(t);if(s&&Rc(i,s.tag))return!0;break}case 3:if(Ut(i,"]]>"))return!0;break}return!i}function Rc(n,e){return Ut(n,"</")&&n.slice(2,2+e.length).toLowerCase()===e.toLowerCase()&&/[\t\r\n\f />]/.test(n[2+e.length]||">")}function Ux(n,e){aa(n,e,Pm(n,n.children[0]))}function Pm(n,e){const{children:t}=n;return t.length===1&&e.type===1&&!Ra(e)}function aa(n,e,t=!1){const{children:i}=n,s=i.length;let r=0;for(let o=0;o<i.length;o++){const a=i[o];if(a.type===1&&a.tagType===0){const l=t?0:Sn(a,e);if(l>0){if(l>=2){a.codegenNode.patchFlag="-1",a.codegenNode=e.hoist(a.codegenNode),r++;continue}}else{const c=a.codegenNode;if(c.type===13){const u=Nm(c);if((!u||u===512||u===1)&&Im(a,e)>=2){const f=Fm(a);f&&(c.props=e.hoist(f))}c.dynamicProps&&(c.dynamicProps=e.hoist(c.dynamicProps))}}}if(a.type===1){const l=a.tagType===1;l&&e.scopes.vSlot++,aa(a,e),l&&e.scopes.vSlot--}else if(a.type===11)aa(a,e,a.children.length===1);else if(a.type===9)for(let l=0;l<a.branches.length;l++)aa(a.branches[l],e,a.branches[l].children.length===1)}r&&e.transformHoist&&e.transformHoist(i,e,n),r&&r===s&&n.type===1&&n.tagType===0&&n.codegenNode&&n.codegenNode.type===13&&Le(n.codegenNode.children)&&(n.codegenNode.children=e.hoist(yo(n.codegenNode.children)))}function Sn(n,e){const{constantCache:t}=e;switch(n.type){case 1:if(n.tagType!==0)return 0;const i=t.get(n);if(i!==void 0)return i;const s=n.codegenNode;if(s.type!==13||s.isBlock&&n.tag!=="svg"&&n.tag!=="foreignObject")return 0;if(Nm(s))return t.set(n,0),0;{let a=3;const l=Im(n,e);if(l===0)return t.set(n,0),0;l<a&&(a=l);for(let c=0;c<n.children.length;c++){const u=Sn(n.children[c],e);if(u===0)return t.set(n,0),0;u<a&&(a=u)}if(a>1)for(let c=0;c<n.props.length;c++){const u=n.props[c];if(u.type===7&&u.name==="bind"&&u.exp){const f=Sn(u.exp,e);if(f===0)return t.set(n,0),0;f<a&&(a=f)}}if(s.isBlock){for(let c=0;c<n.props.length;c++)if(n.props[c].type===7)return t.set(n,0),0;e.removeHelper(cs),e.removeHelper(hr(e.inSSR,s.isComponent)),s.isBlock=!1,e.helper(fr(e.inSSR,s.isComponent))}return t.set(n,a),a}case 2:case 3:return 3;case 9:case 11:case 10:return 0;case 5:case 12:return Sn(n.content,e);case 4:return n.constType;case 8:let o=3;for(let a=0;a<n.children.length;a++){const l=n.children[a];if(ke(l)||yi(l))continue;const c=Sn(l,e);if(c===0)return 0;c<o&&(o=c)}return o;default:return 0}}const kx=new Set([Nu,Ou,ro,xo]);function Dm(n,e){if(n.type===14&&!ke(n.callee)&&kx.has(n.callee)){const t=n.arguments[0];if(t.type===4)return Sn(t,e);if(t.type===14)return Dm(t,e)}return 0}function Im(n,e){let t=3;const i=Fm(n);if(i&&i.type===15){const{properties:s}=i;for(let r=0;r<s.length;r++){const{key:o,value:a}=s[r],l=Sn(o,e);if(l===0)return l;l<t&&(t=l);let c;if(a.type===4?c=Sn(a,e):a.type===14?c=Dm(a,e):c=0,c===0)return c;c<t&&(t=c)}}return t}function Fm(n){const e=n.codegenNode;if(e.type===13)return e.props}function Nm(n){const e=n.patchFlag;return e?parseInt(e,10):void 0}function Bx(n,{filename:e="",prefixIdentifiers:t=!1,hoistStatic:i=!1,cacheHandlers:s=!1,nodeTransforms:r=[],directiveTransforms:o={},transformHoist:a=null,isBuiltInComponent:l=Zt,isCustomElement:c=Zt,expressionPlugins:u=[],scopeId:f=null,slotted:h=!0,ssr:m=!1,inSSR:v=!1,ssrCssVars:d="",bindingMetadata:p=et,inline:g=!1,isTS:_=!1,onError:b=Eu,onWarn:w=vm,compatConfig:S}){const P=e.replace(/\?.*$/,"").match(/([^/\\]+)\.\w+$/),L={selfName:P&&vs(Lt(P[1])),prefixIdentifiers:t,hoistStatic:i,cacheHandlers:s,nodeTransforms:r,directiveTransforms:o,transformHoist:a,isBuiltInComponent:l,isCustomElement:c,expressionPlugins:u,scopeId:f,slotted:h,ssr:m,inSSR:v,ssrCssVars:d,bindingMetadata:p,inline:g,isTS:_,onError:b,onWarn:w,compatConfig:S,root:n,helpers:new Map,components:new Set,directives:new Set,hoists:[],imports:[],constantCache:new Map,temps:0,cached:0,identifiers:Object.create(null),scopes:{vFor:0,vSlot:0,vPre:0,vOnce:0},parent:null,currentNode:n,childIndex:0,inVOnce:!1,helper(x){const T=L.helpers.get(x)||0;return L.helpers.set(x,T+1),x},removeHelper(x){const T=L.helpers.get(x);if(T){const D=T-1;D?L.helpers.set(x,D):L.helpers.delete(x)}},helperString(x){return`_${cr[L.helper(x)]}`},replaceNode(x){L.parent.children[L.childIndex]=L.currentNode=x},removeNode(x){const T=L.parent.children,D=x?T.indexOf(x):L.currentNode?L.childIndex:-1;!x||x===L.currentNode?(L.currentNode=null,L.onNodeRemoved()):L.childIndex>D&&(L.childIndex--,L.onNodeRemoved()),L.parent.children.splice(D,1)},onNodeRemoved:()=>{},addIdentifiers(x){},removeIdentifiers(x){},hoist(x){ke(x)&&(x=Ve(x)),L.hoists.push(x);const T=Ve(`_hoisted_${L.hoists.length}`,!1,x.loc,2);return T.hoisted=x,T},cache(x,T=!1){return dx(L.cached++,x,T)}};return L.filters=new Set,L}function zx(n,e){const t=Bx(n,e);nl(n,t),e.hoistStatic&&Ux(n,t),e.ssr||Vx(n,t),n.helpers=new Set([...t.helpers.keys()]),n.components=[...t.components],n.directives=[...t.directives],n.imports=t.imports,n.hoists=t.hoists,n.temps=t.temps,n.cached=t.cached,n.filters=[...t.filters]}function Vx(n,e){const{helper:t}=e,{children:i}=n;if(i.length===1){const s=i[0];if(Pm(n,s)&&s.codegenNode){const r=s.codegenNode;r.type===13&&Vu(r,e),n.codegenNode=r}else n.codegenNode=s}else if(i.length>1){let s=64;n.codegenNode=oo(e,t(so),void 0,n.children,s+"",void 0,void 0,!0,void 0,!1)}}function Hx(n,e){let t=0;const i=()=>{t--};for(;t<n.children.length;t++){const s=n.children[t];ke(s)||(e.parent=n,e.childIndex=t,e.onNodeRemoved=i,nl(s,e))}}function nl(n,e){e.currentNode=n;const{nodeTransforms:t}=e,i=[];for(let r=0;r<t.length;r++){const o=t[r](n,e);if(o&&(Le(o)?i.push(...o):i.push(o)),e.currentNode)n=e.currentNode;else return}switch(n.type){case 3:e.ssr||e.helper(vo);break;case 5:e.ssr||e.helper(Qa);break;case 9:for(let r=0;r<n.branches.length;r++)nl(n.branches[r],e);break;case 10:case 11:case 1:case 0:Hx(n,e);break}e.currentNode=n;let s=i.length;for(;s--;)i[s]()}function Om(n,e){const t=ke(n)?i=>i===n:i=>n.test(i);return(i,s)=>{if(i.type===1){const{props:r}=i;if(i.tagType===3&&r.some(bx))return;const o=[];for(let a=0;a<r.length;a++){const l=r[a];if(l.type===7&&t(l.name)){r.splice(a,1),a--;const c=e(i,l,s);c&&o.push(c)}}return o}}}const il="/*#__PURE__*/",Um=n=>`${cr[n]}: _${cr[n]}`;function Gx(n,{mode:e="function",prefixIdentifiers:t=e==="module",sourceMap:i=!1,filename:s="template.vue.html",scopeId:r=null,optimizeImports:o=!1,runtimeGlobalName:a="Vue",runtimeModuleName:l="vue",ssrRuntimeModuleName:c="vue/server-renderer",ssr:u=!1,isTS:f=!1,inSSR:h=!1}){const m={mode:e,prefixIdentifiers:t,sourceMap:i,filename:s,scopeId:r,optimizeImports:o,runtimeGlobalName:a,runtimeModuleName:l,ssrRuntimeModuleName:c,ssr:u,isTS:f,inSSR:h,source:n.loc.source,code:"",column:1,line:1,offset:0,indentLevel:0,pure:!1,map:void 0,helper(d){return`_${cr[d]}`},push(d,p){m.code+=d},indent(){v(++m.indentLevel)},deindent(d=!1){d?--m.indentLevel:v(--m.indentLevel)},newline(){v(m.indentLevel)}};function v(d){m.push(`
`+"  ".repeat(d))}return m}function Wx(n,e={}){const t=Gx(n,e);e.onContextCreated&&e.onContextCreated(t);const{mode:i,push:s,prefixIdentifiers:r,indent:o,deindent:a,newline:l,scopeId:c,ssr:u}=t,f=Array.from(n.helpers),h=f.length>0,m=!r&&i!=="module";jx(n,t);const d=u?"ssrRender":"render",g=(u?["_ctx","_push","_parent","_attrs"]:["_ctx","_cache"]).join(", ");if(s(`function ${d}(${g}) {`),o(),m&&(s("with (_ctx) {"),o(),h&&(s(`const { ${f.map(Um).join(", ")} } = _Vue`),s(`
`),l())),n.components.length&&(yl(n.components,"component",t),(n.directives.length||n.temps>0)&&l()),n.directives.length&&(yl(n.directives,"directive",t),n.temps>0&&l()),n.filters&&n.filters.length&&(l(),yl(n.filters,"filter",t),l()),n.temps>0){s("let ");for(let _=0;_<n.temps;_++)s(`${_>0?", ":""}_temp${_}`)}return(n.components.length||n.directives.length||n.temps)&&(s(`
`),l()),u||s("return "),n.codegenNode?Bt(n.codegenNode,t):s("null"),m&&(a(),s("}")),a(),s("}"),{ast:n,code:t.code,preamble:"",map:t.map?t.map.toJSON():void 0}}function jx(n,e){const{ssr:t,prefixIdentifiers:i,push:s,newline:r,runtimeModuleName:o,runtimeGlobalName:a,ssrRuntimeModuleName:l}=e,c=a,u=Array.from(n.helpers);if(u.length>0&&(s(`const _Vue = ${c}
`),n.hoists.length)){const f=[Cu,Au,vo,Ru,Mm].filter(h=>u.includes(h)).map(Um).join(", ");s(`const { ${f} } = _Vue
`)}$x(n.hoists,e),r(),s("return ")}function yl(n,e,{helper:t,push:i,newline:s,isTS:r}){const o=t(e==="filter"?Du:e==="component"?Lu:Pu);for(let a=0;a<n.length;a++){let l=n[a];const c=l.endsWith("__self");c&&(l=l.slice(0,-6)),i(`const ${ao(l,e)} = ${o}(${JSON.stringify(l)}${c?", true":""})${r?"!":""}`),a<n.length-1&&s()}}function $x(n,e){if(!n.length)return;e.pure=!0;const{push:t,newline:i,helper:s,scopeId:r,mode:o}=e;i();for(let a=0;a<n.length;a++){const l=n[a];l&&(t(`const _hoisted_${a+1} = `),Bt(l,e),i())}e.pure=!1}function Gu(n,e){const t=n.length>3||!1;e.push("["),t&&e.indent(),bo(n,e,t),t&&e.deindent(),e.push("]")}function bo(n,e,t=!1,i=!0){const{push:s,newline:r}=e;for(let o=0;o<n.length;o++){const a=n[o];ke(a)?s(a):Le(a)?Gu(a,e):Bt(a,e),o<n.length-1&&(t?(i&&s(","),r()):i&&s(", "))}}function Bt(n,e){if(ke(n)){e.push(n);return}if(yi(n)){e.push(e.helper(n));return}switch(n.type){case 1:case 9:case 11:Bt(n.codegenNode,e);break;case 2:qx(n,e);break;case 4:km(n,e);break;case 5:Xx(n,e);break;case 12:Bt(n.codegenNode,e);break;case 8:Bm(n,e);break;case 3:Yx(n,e);break;case 13:Zx(n,e);break;case 14:Qx(n,e);break;case 15:ey(n,e);break;case 17:ty(n,e);break;case 18:ny(n,e);break;case 19:iy(n,e);break;case 20:sy(n,e);break;case 21:bo(n.body,e,!0,!1);break}}function qx(n,e){e.push(JSON.stringify(n.content),n)}function km(n,e){const{content:t,isStatic:i}=n;e.push(i?JSON.stringify(t):t,n)}function Xx(n,e){const{push:t,helper:i,pure:s}=e;s&&t(il),t(`${i(Qa)}(`),Bt(n.content,e),t(")")}function Bm(n,e){for(let t=0;t<n.children.length;t++){const i=n.children[t];ke(i)?e.push(i):Bt(i,e)}}function Kx(n,e){const{push:t}=e;if(n.type===8)t("["),Bm(n,e),t("]");else if(n.isStatic){const i=zu(n.content)?n.content:JSON.stringify(n.content);t(i,n)}else t(`[${n.content}]`,n)}function Yx(n,e){const{push:t,helper:i,pure:s}=e;s&&t(il),t(`${i(vo)}(${JSON.stringify(n.content)})`,n)}function Zx(n,e){const{push:t,helper:i,pure:s}=e,{tag:r,props:o,children:a,patchFlag:l,dynamicProps:c,directives:u,isBlock:f,disableTracking:h,isComponent:m}=n;u&&t(i(Iu)+"("),f&&t(`(${i(cs)}(${h?"true":""}), `),s&&t(il);const v=f?hr(e.inSSR,m):fr(e.inSSR,m);t(i(v)+"(",n),bo(Jx([r,o,a,l,c]),e),t(")"),f&&t(")"),u&&(t(", "),Bt(u,e),t(")"))}function Jx(n){let e=n.length;for(;e--&&n[e]==null;);return n.slice(0,e+1).map(t=>t||"null")}function Qx(n,e){const{push:t,helper:i,pure:s}=e,r=ke(n.callee)?n.callee:i(n.callee);s&&t(il),t(r+"(",n),bo(n.arguments,e),t(")")}function ey(n,e){const{push:t,indent:i,deindent:s,newline:r}=e,{properties:o}=n;if(!o.length){t("{}",n);return}const a=o.length>1||!1;t(a?"{":"{ "),a&&i();for(let l=0;l<o.length;l++){const{key:c,value:u}=o[l];Kx(c,e),t(": "),Bt(u,e),l<o.length-1&&(t(","),r())}a&&s(),t(a?"}":" }")}function ty(n,e){Gu(n.elements,e)}function ny(n,e){const{push:t,indent:i,deindent:s}=e,{params:r,returns:o,body:a,newline:l,isSlot:c}=n;c&&t(`_${cr[ku]}(`),t("(",n),Le(r)?bo(r,e):r&&Bt(r,e),t(") => "),(l||a)&&(t("{"),i()),o?(l&&t("return "),Le(o)?Gu(o,e):Bt(o,e)):a&&Bt(a,e),(l||a)&&(s(),t("}")),c&&(n.isNonScopedSlot&&t(", undefined, true"),t(")"))}function iy(n,e){const{test:t,consequent:i,alternate:s,newline:r}=n,{push:o,indent:a,deindent:l,newline:c}=e;if(t.type===4){const f=!zu(t.content);f&&o("("),km(t,e),f&&o(")")}else o("("),Bt(t,e),o(")");r&&a(),e.indentLevel++,r||o(" "),o("? "),Bt(i,e),e.indentLevel--,r&&c(),r||o(" "),o(": ");const u=s.type===19;u||e.indentLevel++,Bt(s,e),u||e.indentLevel--,r&&l(!0)}function sy(n,e){const{push:t,helper:i,indent:s,deindent:r,newline:o}=e;t(`_cache[${n.index}] || (`),n.isVNode&&(s(),t(`${i(Ea)}(-1),`),o()),t(`_cache[${n.index}] = `),Bt(n.value,e),n.isVNode&&(t(","),o(),t(`${i(Ea)}(1),`),o(),t(`_cache[${n.index}]`),r()),t(")")}new RegExp("\\b"+"arguments,await,break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,let,new,return,super,switch,throw,try,var,void,while,with,yield".split(",").join("\\b|\\b")+"\\b");const ry=Om(/^(if|else|else-if)$/,(n,e,t)=>oy(n,e,t,(i,s,r)=>{const o=t.parent.children;let a=o.indexOf(i),l=0;for(;a-->=0;){const c=o[a];c&&c.type===9&&(l+=c.branches.length)}return()=>{if(r)i.codegenNode=qf(s,l,t);else{const c=ay(i.codegenNode);c.alternate=qf(s,l+i.branches.length-1,t)}}}));function oy(n,e,t,i){if(e.name!=="else"&&(!e.exp||!e.exp.content.trim())){const s=e.exp?e.exp.loc:n.loc;t.onError(ct(28,e.loc)),e.exp=Ve("true",!1,s)}if(e.name==="if"){const s=$f(n,e),r={type:9,loc:n.loc,branches:[s]};if(t.replaceNode(r),i)return i(r,s,!0)}else{const s=t.parent.children;let r=s.indexOf(n);for(;r-->=-1;){const o=s[r];if(o&&o.type===3){t.removeNode(o);continue}if(o&&o.type===2&&!o.content.trim().length){t.removeNode(o);continue}if(o&&o.type===9){e.name==="else-if"&&o.branches[o.branches.length-1].condition===void 0&&t.onError(ct(30,n.loc)),t.removeNode();const a=$f(n,e);o.branches.push(a);const l=i&&i(o,a,!1);nl(a,t),l&&l(),t.currentNode=null}else t.onError(ct(30,n.loc));break}}}function $f(n,e){const t=n.tagType===3;return{type:10,loc:n.loc,condition:e.name==="else"?void 0:e.exp,children:t&&!yn(n,"for")?n.children:[n],userKey:el(n,"key"),isTemplateIf:t}}function qf(n,e,t){return n.condition?Cc(n.condition,Xf(n,e,t),xt(t.helper(vo),['""',"true"])):Xf(n,e,t)}function Xf(n,e,t){const{helper:i}=t,s=ht("key",Ve(`${e}`,!1,gn,2)),{children:r}=n,o=r[0];if(r.length!==1||o.type!==1)if(r.length===1&&o.type===11){const l=o.codegenNode;return La(l,s,t),l}else return oo(t,i(so),Mn([s]),r,64+"",void 0,void 0,!0,!1,!1,n.loc);else{const l=o.codegenNode,c=Sx(l);return c.type===13&&Vu(c,t),La(c,s,t),l}}function ay(n){for(;;)if(n.type===19)if(n.alternate.type===19)n=n.alternate;else return n;else n.type===20&&(n=n.value)}const ly=Om("for",(n,e,t)=>{const{helper:i,removeHelper:s}=t;return cy(n,e,t,r=>{const o=xt(i(Fu),[r.source]),a=Aa(n),l=yn(n,"memo"),c=el(n,"key"),u=c&&(c.type===6?Ve(c.value.content,!0):c.exp),f=c?ht("key",u):null,h=r.source.type===4&&r.source.constType>0,m=h?64:c?128:256;return r.codegenNode=oo(t,i(so),void 0,o,m+"",void 0,void 0,!0,!h,!1,n.loc),()=>{let v;const{children:d}=r,p=d.length!==1||d[0].type!==1,g=Ra(n)?n:a&&n.children.length===1&&Ra(n.children[0])?n.children[0]:null;if(g?(v=g.codegenNode,a&&f&&La(v,f,t)):p?v=oo(t,i(so),f?Mn([f]):void 0,n.children,"64",void 0,void 0,!0,void 0,!1):(v=d[0].codegenNode,a&&f&&La(v,f,t),v.isBlock!==!h&&(v.isBlock?(s(cs),s(hr(t.inSSR,v.isComponent))):s(fr(t.inSSR,v.isComponent))),v.isBlock=!h,v.isBlock?(i(cs),i(hr(t.inSSR,v.isComponent))):i(fr(t.inSSR,v.isComponent))),l){const _=ur(Lc(r.parseResult,[Ve("_cached")]));_.body=px([In(["const _memo = (",l.exp,")"]),In(["if (_cached",...u?[" && _cached.key === ",u]:[],` && ${t.helperString(Em)}(_cached, _memo)) return _cached`]),In(["const _item = ",v]),Ve("_item.memo = _memo"),Ve("return _item")]),o.arguments.push(_,Ve("_cache"),Ve(String(t.cached++)))}else o.arguments.push(ur(Lc(r.parseResult),v,!0))}})});function cy(n,e,t,i){if(!e.exp){t.onError(ct(31,e.loc));return}const s=zm(e.exp);if(!s){t.onError(ct(32,e.loc));return}const{addIdentifiers:r,removeIdentifiers:o,scopes:a}=t,{source:l,value:c,key:u,index:f}=s,h={type:11,loc:e.loc,source:l,valueAlias:c,keyAlias:u,objectIndexAlias:f,parseResult:s,children:Aa(n)?n.children:[n]};t.replaceNode(h),a.vFor++;const m=i&&i(h);return()=>{a.vFor--,m&&m()}}const uy=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,Kf=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,fy=/^\(|\)$/g;function zm(n,e){const t=n.loc,i=n.content,s=i.match(uy);if(!s)return;const[,r,o]=s,a={source:Oo(t,o.trim(),i.indexOf(o,r.length)),value:void 0,key:void 0,index:void 0};let l=r.trim().replace(fy,"").trim();const c=r.indexOf(l),u=l.match(Kf);if(u){l=l.replace(Kf,"").trim();const f=u[1].trim();let h;if(f&&(h=i.indexOf(f,c+l.length),a.key=Oo(t,f,h)),u[2]){const m=u[2].trim();m&&(a.index=Oo(t,m,i.indexOf(m,a.key?h+f.length:c+l.length)))}}return l&&(a.value=Oo(t,l,c)),a}function Oo(n,e,t){return Ve(e,!1,Am(n,t,e.length))}function Lc({value:n,key:e,index:t},i=[]){return hy([n,e,t,...i])}function hy(n){let e=n.length;for(;e--&&!n[e];);return n.slice(0,e+1).map((t,i)=>t||Ve("_".repeat(i+1),!1))}const Yf=Ve("undefined",!1),dy=(n,e)=>{if(n.type===1&&(n.tagType===1||n.tagType===3)){const t=yn(n,"slot");if(t)return t.exp,e.scopes.vSlot++,()=>{e.scopes.vSlot--}}},py=(n,e,t)=>ur(n,e,!1,!0,e.length?e[0].loc:t);function my(n,e,t=py){e.helper(ku);const{children:i,loc:s}=n,r=[],o=[];let a=e.scopes.vSlot>0||e.scopes.vFor>0;const l=yn(n,"slot",!0);if(l){const{arg:p,exp:g}=l;p&&!Yt(p)&&(a=!0),r.push(ht(p||Ve("default",!0),t(g,i,s)))}let c=!1,u=!1;const f=[],h=new Set;let m=0;for(let p=0;p<i.length;p++){const g=i[p];let _;if(!Aa(g)||!(_=yn(g,"slot",!0))){g.type!==3&&f.push(g);continue}if(l){e.onError(ct(37,_.loc));break}c=!0;const{children:b,loc:w}=g,{arg:S=Ve("default",!0),exp:P,loc:L}=_;let x;Yt(S)?x=S?S.content:"default":a=!0;const T=t(P,b,w);let D,V,W;if(D=yn(g,"if"))a=!0,o.push(Cc(D.exp,Uo(S,T,m++),Yf));else if(V=yn(g,/^else(-if)?$/,!0)){let N=p,F;for(;N--&&(F=i[N],F.type===3););if(F&&Aa(F)&&yn(F,"if")){i.splice(p,1),p--;let ie=o[o.length-1];for(;ie.alternate.type===19;)ie=ie.alternate;ie.alternate=V.exp?Cc(V.exp,Uo(S,T,m++),Yf):Uo(S,T,m++)}else e.onError(ct(30,V.loc))}else if(W=yn(g,"for")){a=!0;const N=W.parseResult||zm(W.exp);N?o.push(xt(e.helper(Fu),[N.source,ur(Lc(N),Uo(S,T),!0)])):e.onError(ct(32,W.loc))}else{if(x){if(h.has(x)){e.onError(ct(38,L));continue}h.add(x),x==="default"&&(u=!0)}r.push(ht(S,T))}}if(!l){const p=(g,_)=>{const b=t(g,_,s);return e.compatConfig&&(b.isNonScopedSlot=!0),ht("default",b)};c?f.length&&f.some(g=>Vm(g))&&(u?e.onError(ct(39,f[0].loc)):r.push(p(void 0,f))):r.push(p(void 0,i))}const v=a?2:la(n.children)?3:1;let d=Mn(r.concat(ht("_",Ve(v+"",!1))),s);return o.length&&(d=xt(e.helper(wm),[d,yo(o)])),{slots:d,hasDynamicSlots:a}}function Uo(n,e,t){const i=[ht("name",n),ht("fn",e)];return t!=null&&i.push(ht("key",Ve(String(t),!0))),Mn(i)}function la(n){for(let e=0;e<n.length;e++){const t=n[e];switch(t.type){case 1:if(t.tagType===2||la(t.children))return!0;break;case 9:if(la(t.branches))return!0;break;case 10:case 11:if(la(t.children))return!0;break}}return!1}function Vm(n){return n.type!==2&&n.type!==12?!0:n.type===2?!!n.content.trim():Vm(n.content)}const Hm=new WeakMap,gy=(n,e)=>function(){if(n=e.currentNode,!(n.type===1&&(n.tagType===0||n.tagType===1)))return;const{tag:i,props:s}=n,r=n.tagType===1;let o=r?_y(n,e):`"${i}"`;const a=tt(o)&&o.callee===Sa;let l,c,u,f=0,h,m,v,d=a||o===Xr||o===Tu||!r&&(i==="svg"||i==="foreignObject");if(s.length>0){const p=Gm(n,e,void 0,r,a);l=p.props,f=p.patchFlag,m=p.dynamicPropNames;const g=p.directives;v=g&&g.length?yo(g.map(_=>xy(_,e))):void 0,p.shouldUseBlock&&(d=!0)}if(n.children.length>0)if(o===Ma&&(d=!0,f|=1024),r&&o!==Xr&&o!==Ma){const{slots:g,hasDynamicSlots:_}=my(n,e);c=g,_&&(f|=1024)}else if(n.children.length===1&&o!==Xr){const g=n.children[0],_=g.type,b=_===5||_===8;b&&Sn(g,e)===0&&(f|=1),b||_===2?c=g:c=n.children}else c=n.children;f!==0&&(u=String(f),m&&m.length&&(h=yy(m))),n.codegenNode=oo(e,o,l,c,u,h,v,!!d,!1,r,n.loc)};function _y(n,e,t=!1){let{tag:i}=n;const s=Pc(i),r=el(n,"is");if(r)if(s||ts("COMPILER_IS_ON_ELEMENT",e)){const l=r.type===6?r.value&&Ve(r.value.content,!0):r.exp;if(l)return xt(e.helper(Sa),[l])}else r.type===6&&r.value.content.startsWith("vue:")&&(i=r.value.content.slice(4));const o=!s&&yn(n,"is");if(o&&o.exp)return xt(e.helper(Sa),[o.exp]);const a=Tm(i)||e.isBuiltInComponent(i);return a?(t||e.helper(a),a):(e.helper(Lu),e.components.add(i),ao(i,"component"))}function Gm(n,e,t=n.props,i,s,r=!1){const{tag:o,loc:a,children:l}=n;let c=[];const u=[],f=[],h=l.length>0;let m=!1,v=0,d=!1,p=!1,g=!1,_=!1,b=!1,w=!1;const S=[],P=T=>{c.length&&(u.push(Mn(Zf(c),a)),c=[]),T&&u.push(T)},L=({key:T,value:D})=>{if(Yt(T)){const V=T.content,W=gs(V);if(W&&(!i||s)&&V.toLowerCase()!=="onclick"&&V!=="onUpdate:modelValue"&&!Xi(V)&&(_=!0),W&&Xi(V)&&(w=!0),D.type===20||(D.type===4||D.type===8)&&Sn(D,e)>0)return;V==="ref"?d=!0:V==="class"?p=!0:V==="style"?g=!0:V!=="key"&&!S.includes(V)&&S.push(V),i&&(V==="class"||V==="style")&&!S.includes(V)&&S.push(V)}else b=!0};for(let T=0;T<t.length;T++){const D=t[T];if(D.type===6){const{loc:V,name:W,value:N}=D;let F=!0;if(W==="ref"&&(d=!0,e.scopes.vFor>0&&c.push(ht(Ve("ref_for",!0),Ve("true")))),W==="is"&&(Pc(o)||N&&N.content.startsWith("vue:")||ts("COMPILER_IS_ON_ELEMENT",e)))continue;c.push(ht(Ve(W,!0,Am(V,0,W.length)),Ve(N?N.content:"",F,N?N.loc:V)))}else{const{name:V,arg:W,exp:N,loc:F}=D,ie=V==="bind",le=V==="on";if(V==="slot"){i||e.onError(ct(40,F));continue}if(V==="once"||V==="memo"||V==="is"||ie&&ji(W,"is")&&(Pc(o)||ts("COMPILER_IS_ON_ELEMENT",e))||le&&r)continue;if((ie&&ji(W,"key")||le&&h&&ji(W,"vue:before-update"))&&(m=!0),ie&&ji(W,"ref")&&e.scopes.vFor>0&&c.push(ht(Ve("ref_for",!0),Ve("true"))),!W&&(ie||le)){if(b=!0,N)if(ie){if(P(),ts("COMPILER_V_BIND_OBJECT_ORDER",e)){u.unshift(N);continue}u.push(N)}else P({type:14,loc:F,callee:e.helper(Uu),arguments:i?[N]:[N,"true"]});else e.onError(ct(ie?34:35,F));continue}const te=e.directiveTransforms[V];if(te){const{props:X,needRuntime:he}=te(D,n,e);!r&&X.forEach(L),le&&W&&!Yt(W)?P(Mn(X,a)):c.push(...X),he&&(f.push(D),yi(he)&&Hm.set(D,he))}else o_(V)||(f.push(D),h&&(m=!0))}}let x;if(u.length?(P(),u.length>1?x=xt(e.helper(wa),u,a):x=u[0]):c.length&&(x=Mn(Zf(c),a)),b?v|=16:(p&&!i&&(v|=2),g&&!i&&(v|=4),S.length&&(v|=8),_&&(v|=32)),!m&&(v===0||v===32)&&(d||w||f.length>0)&&(v|=512),!e.inSSR&&x)switch(x.type){case 15:let T=-1,D=-1,V=!1;for(let F=0;F<x.properties.length;F++){const ie=x.properties[F].key;Yt(ie)?ie.content==="class"?T=F:ie.content==="style"&&(D=F):ie.isHandlerKey||(V=!0)}const W=x.properties[T],N=x.properties[D];V?x=xt(e.helper(ro),[x]):(W&&!Yt(W.value)&&(W.value=xt(e.helper(Nu),[W.value])),N&&(g||N.value.type===4&&N.value.content.trim()[0]==="["||N.value.type===17)&&(N.value=xt(e.helper(Ou),[N.value])));break;case 14:break;default:x=xt(e.helper(ro),[xt(e.helper(xo),[x])]);break}return{props:x,directives:f,patchFlag:v,dynamicPropNames:S,shouldUseBlock:m}}function Zf(n){const e=new Map,t=[];for(let i=0;i<n.length;i++){const s=n[i];if(s.key.type===8||!s.key.isStatic){t.push(s);continue}const r=s.key.content,o=e.get(r);o?(r==="style"||r==="class"||gs(r))&&vy(o,s):(e.set(r,s),t.push(s))}return t}function vy(n,e){n.value.type===17?n.value.elements.push(e.value):n.value=yo([n.value,e.value],n.loc)}function xy(n,e){const t=[],i=Hm.get(n);i?t.push(e.helperString(i)):(e.helper(Pu),e.directives.add(n.name),t.push(ao(n.name,"directive")));const{loc:s}=n;if(n.exp&&t.push(n.exp),n.arg&&(n.exp||t.push("void 0"),t.push(n.arg)),Object.keys(n.modifiers).length){n.arg||(n.exp||t.push("void 0"),t.push("void 0"));const r=Ve("true",!1,s);t.push(Mn(n.modifiers.map(o=>ht(o,r)),s))}return yo(t,n.loc)}function yy(n){let e="[";for(let t=0,i=n.length;t<i;t++)e+=JSON.stringify(n[t]),t<i-1&&(e+=", ");return e+"]"}function Pc(n){return n==="component"||n==="Component"}const by=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},My=/-(\w)/g,Jf=by(n=>n.replace(My,(e,t)=>t?t.toUpperCase():"")),Sy=(n,e)=>{if(Ra(n)){const{children:t,loc:i}=n,{slotName:s,slotProps:r}=wy(n,e),o=[e.prefixIdentifiers?"_ctx.$slots":"$slots",s,"{}","undefined","true"];let a=2;r&&(o[2]=r,a=3),t.length&&(o[3]=ur([],t,!1,!1,i),a=4),e.scopeId&&!e.slotted&&(a=5),o.splice(a),n.codegenNode=xt(e.helper(Sm),o,i)}};function wy(n,e){let t='"default"',i;const s=[];for(let r=0;r<n.props.length;r++){const o=n.props[r];o.type===6?o.value&&(o.name==="name"?t=JSON.stringify(o.value.content):(o.name=Jf(o.name),s.push(o))):o.name==="bind"&&ji(o.arg,"name")?o.exp&&(t=o.exp):(o.name==="bind"&&o.arg&&Yt(o.arg)&&(o.arg.content=Jf(o.arg.content)),s.push(o))}if(s.length>0){const{props:r,directives:o}=Gm(n,e,s,!1,!1);i=r,o.length&&e.onError(ct(36,o[0].loc))}return{slotName:t,slotProps:i}}const Ey=/^\s*([\w$_]+|(async\s*)?\([^)]*?\))\s*(:[^=]+)?=>|^\s*(async\s+)?function(?:\s+[\w$]+)?\s*\(/,Wm=(n,e,t,i)=>{const{loc:s,modifiers:r,arg:o}=n;!n.exp&&!r.length&&t.onError(ct(35,s));let a;if(o.type===4)if(o.isStatic){let f=o.content;f.startsWith("vue:")&&(f=`vnode-${f.slice(4)}`);const h=e.tagType!==0||f.startsWith("vnode")||!/[A-Z]/.test(f)?Js(Lt(f)):`on:${f}`;a=Ve(h,!0,o.loc)}else a=In([`${t.helperString(Tc)}(`,o,")"]);else a=o,a.children.unshift(`${t.helperString(Tc)}(`),a.children.push(")");let l=n.exp;l&&!l.content.trim()&&(l=void 0);let c=t.cacheHandlers&&!l&&!t.inVOnce;if(l){const f=Cm(l.content),h=!(f||Ey.test(l.content)),m=l.content.includes(";");(h||c&&f)&&(l=In([`${h?"$event":"(...args)"} => ${m?"{":"("}`,l,m?"}":")"]))}let u={props:[ht(a,l||Ve("() => {}",!1,s))]};return i&&(u=i(u)),c&&(u.props[0].value=t.cache(u.props[0].value)),u.props.forEach(f=>f.key.isHandlerKey=!0),u},Ty=(n,e,t)=>{const{exp:i,modifiers:s,loc:r}=n,o=n.arg;return o.type!==4?(o.children.unshift("("),o.children.push(') || ""')):o.isStatic||(o.content=`${o.content} || ""`),s.includes("camel")&&(o.type===4?o.isStatic?o.content=Lt(o.content):o.content=`${t.helperString(Ec)}(${o.content})`:(o.children.unshift(`${t.helperString(Ec)}(`),o.children.push(")"))),t.inSSR||(s.includes("prop")&&Qf(o,"."),s.includes("attr")&&Qf(o,"^")),!i||i.type===4&&!i.content.trim()?(t.onError(ct(34,r)),{props:[ht(o,Ve("",!0,r))]}):{props:[ht(o,i)]}},Qf=(n,e)=>{n.type===4?n.isStatic?n.content=e+n.content:n.content=`\`${e}\${${n.content}}\``:(n.children.unshift(`'${e}' + (`),n.children.push(")"))},Cy=(n,e)=>{if(n.type===0||n.type===1||n.type===11||n.type===10)return()=>{const t=n.children;let i,s=!1;for(let r=0;r<t.length;r++){const o=t[r];if(xl(o)){s=!0;for(let a=r+1;a<t.length;a++){const l=t[a];if(xl(l))i||(i=t[r]=In([o],o.loc)),i.children.push(" + ",l),t.splice(a,1),a--;else{i=void 0;break}}}}if(!(!s||t.length===1&&(n.type===0||n.type===1&&n.tagType===0&&!n.props.find(r=>r.type===7&&!e.directiveTransforms[r.name])&&n.tag!=="template")))for(let r=0;r<t.length;r++){const o=t[r];if(xl(o)||o.type===8){const a=[];(o.type!==2||o.content!==" ")&&a.push(o),!e.ssr&&Sn(o,e)===0&&a.push("1"),t[r]={type:12,content:o,loc:o.loc,codegenNode:xt(e.helper(Ru),a)}}}}},eh=new WeakSet,Ay=(n,e)=>{if(n.type===1&&yn(n,"once",!0))return eh.has(n)||e.inVOnce?void 0:(eh.add(n),e.inVOnce=!0,e.helper(Ea),()=>{e.inVOnce=!1;const t=e.currentNode;t.codegenNode&&(t.codegenNode=e.cache(t.codegenNode,!0))})},jm=(n,e,t)=>{const{exp:i,arg:s}=n;if(!i)return t.onError(ct(41,n.loc)),ko();const r=i.loc.source,o=i.type===4?i.content:r,a=t.bindingMetadata[r];if(a==="props"||a==="props-aliased")return t.onError(ct(44,i.loc)),ko();if(!o.trim()||!Cm(o))return t.onError(ct(42,i.loc)),ko();const l=s||Ve("modelValue",!0),c=s?Yt(s)?`onUpdate:${Lt(s.content)}`:In(['"onUpdate:" + ',s]):"onUpdate:modelValue";let u;const f=t.isTS?"($event: any)":"$event";u=In([`${f} => ((`,i,") = $event)"]);const h=[ht(l,n.exp),ht(c,u)];if(n.modifiers.length&&e.tagType===1){const m=n.modifiers.map(d=>(zu(d)?d:JSON.stringify(d))+": true").join(", "),v=s?Yt(s)?`${s.content}Modifiers`:In([s,' + "Modifiers"']):"modelModifiers";h.push(ht(v,Ve(`{ ${m} }`,!1,n.loc,2)))}return ko(h)};function ko(n=[]){return{props:n}}const Ry=/[\w).+\-_$\]]/,Ly=(n,e)=>{ts("COMPILER_FILTER",e)&&(n.type===5&&Pa(n.content,e),n.type===1&&n.props.forEach(t=>{t.type===7&&t.name!=="for"&&t.exp&&Pa(t.exp,e)}))};function Pa(n,e){if(n.type===4)th(n,e);else for(let t=0;t<n.children.length;t++){const i=n.children[t];typeof i=="object"&&(i.type===4?th(i,e):i.type===8?Pa(n,e):i.type===5&&Pa(i.content,e))}}function th(n,e){const t=n.content;let i=!1,s=!1,r=!1,o=!1,a=0,l=0,c=0,u=0,f,h,m,v,d=[];for(m=0;m<t.length;m++)if(h=f,f=t.charCodeAt(m),i)f===39&&h!==92&&(i=!1);else if(s)f===34&&h!==92&&(s=!1);else if(r)f===96&&h!==92&&(r=!1);else if(o)f===47&&h!==92&&(o=!1);else if(f===124&&t.charCodeAt(m+1)!==124&&t.charCodeAt(m-1)!==124&&!a&&!l&&!c)v===void 0?(u=m+1,v=t.slice(0,m).trim()):p();else{switch(f){case 34:s=!0;break;case 39:i=!0;break;case 96:r=!0;break;case 40:c++;break;case 41:c--;break;case 91:l++;break;case 93:l--;break;case 123:a++;break;case 125:a--;break}if(f===47){let g=m-1,_;for(;g>=0&&(_=t.charAt(g),_===" ");g--);(!_||!Ry.test(_))&&(o=!0)}}v===void 0?v=t.slice(0,m).trim():u!==0&&p();function p(){d.push(t.slice(u,m).trim()),u=m+1}if(d.length){for(m=0;m<d.length;m++)v=Py(v,d[m],e);n.content=v}}function Py(n,e,t){t.helper(Du);const i=e.indexOf("(");if(i<0)return t.filters.add(e),`${ao(e,"filter")}(${n})`;{const s=e.slice(0,i),r=e.slice(i+1);return t.filters.add(s),`${ao(s,"filter")}(${n}${r!==")"?","+r:r}`}}const nh=new WeakSet,Dy=(n,e)=>{if(n.type===1){const t=yn(n,"memo");return!t||nh.has(n)?void 0:(nh.add(n),()=>{const i=n.codegenNode||e.currentNode.codegenNode;i&&i.type===13&&(n.tagType!==1&&Vu(i,e),n.codegenNode=xt(e.helper(Bu),[t.exp,ur(void 0,i),"_cache",String(e.cached++)]))})}};function Iy(n){return[[Ay,ry,Dy,ly,Ly,Sy,gy,dy,Cy],{on:Wm,bind:Ty,model:jm}]}function Fy(n,e={}){const t=e.onError||Eu,i=e.mode==="module";e.prefixIdentifiers===!0?t(ct(47)):i&&t(ct(48));const s=!1;e.cacheHandlers&&t(ct(49)),e.scopeId&&!i&&t(ct(50));const r=ke(n)?Tx(n,e):n,[o,a]=Iy();return zx(r,Je({},e,{prefixIdentifiers:s,nodeTransforms:[...o,...e.nodeTransforms||[]],directiveTransforms:Je({},a,e.directiveTransforms||{})})),Wx(r,Je({},e,{prefixIdentifiers:s}))}const Ny=()=>({props:[]}),$m=Symbol(""),qm=Symbol(""),Xm=Symbol(""),Km=Symbol(""),Dc=Symbol(""),Ym=Symbol(""),Zm=Symbol(""),Jm=Symbol(""),Qm=Symbol(""),eg=Symbol("");fx({[$m]:"vModelRadio",[qm]:"vModelCheckbox",[Xm]:"vModelText",[Km]:"vModelSelect",[Dc]:"vModelDynamic",[Ym]:"withModifiers",[Zm]:"withKeys",[Jm]:"vShow",[Qm]:"Transition",[eg]:"TransitionGroup"});let Es;function Oy(n,e=!1){return Es||(Es=document.createElement("div")),e?(Es.innerHTML=`<div foo="${n.replace(/"/g,"&quot;")}">`,Es.children[0].getAttribute("foo")):(Es.innerHTML=n,Es.textContent)}const Uy=Qt("style,iframe,script,noscript",!0),ky={isVoidTag:Jg,isNativeTag:n=>Yg(n)||Zg(n),isPreTag:n=>n==="pre",decodeEntities:Oy,isBuiltInComponent:n=>{if(js(n,"Transition"))return Qm;if(js(n,"TransitionGroup"))return eg},getNamespace(n,e){let t=e?e.ns:0;if(e&&t===2)if(e.tag==="annotation-xml"){if(n==="svg")return 1;e.props.some(i=>i.type===6&&i.name==="encoding"&&i.value!=null&&(i.value.content==="text/html"||i.value.content==="application/xhtml+xml"))&&(t=0)}else/^m(?:[ions]|text)$/.test(e.tag)&&n!=="mglyph"&&n!=="malignmark"&&(t=0);else e&&t===1&&(e.tag==="foreignObject"||e.tag==="desc"||e.tag==="title")&&(t=0);if(t===0){if(n==="svg")return 1;if(n==="math")return 2}return t},getTextMode({tag:n,ns:e}){if(e===0){if(n==="textarea"||n==="title")return 1;if(Uy(n))return 2}return 0}},By=n=>{n.type===1&&n.props.forEach((e,t)=>{e.type===6&&e.name==="style"&&e.value&&(n.props[t]={type:7,name:"bind",arg:Ve("style",!0,e.loc),exp:zy(e.value.content,e.loc),modifiers:[],loc:e.loc})})},zy=(n,e)=>{const t=Id(n);return Ve(JSON.stringify(t),!1,e,3)};function Qn(n,e){return ct(n,e)}const Vy=(n,e,t)=>{const{exp:i,loc:s}=n;return i||t.onError(Qn(51,s)),e.children.length&&(t.onError(Qn(52,s)),e.children.length=0),{props:[ht(Ve("innerHTML",!0,s),i||Ve("",!0))]}},Hy=(n,e,t)=>{const{exp:i,loc:s}=n;return i||t.onError(Qn(53,s)),e.children.length&&(t.onError(Qn(54,s)),e.children.length=0),{props:[ht(Ve("textContent",!0),i?Sn(i,t)>0?i:xt(t.helperString(Qa),[i],s):Ve("",!0))]}},Gy=(n,e,t)=>{const i=jm(n,e,t);if(!i.props.length||e.tagType===1)return i;n.arg&&t.onError(Qn(56,n.arg.loc));const{tag:s}=e,r=t.isCustomElement(s);if(s==="input"||s==="textarea"||s==="select"||r){let o=Xm,a=!1;if(s==="input"||r){const l=el(e,"type");if(l){if(l.type===7)o=Dc;else if(l.value)switch(l.value.content){case"radio":o=$m;break;case"checkbox":o=qm;break;case"file":a=!0,t.onError(Qn(57,n.loc));break}}else yx(e)&&(o=Dc)}else s==="select"&&(o=Km);a||(i.needRuntime=t.helper(o))}else t.onError(Qn(55,n.loc));return i.props=i.props.filter(o=>!(o.key.type===4&&o.key.content==="modelValue")),i},Wy=Qt("passive,once,capture"),jy=Qt("stop,prevent,self,ctrl,shift,alt,meta,exact,middle"),$y=Qt("left,right"),tg=Qt("onkeyup,onkeydown,onkeypress",!0),qy=(n,e,t,i)=>{const s=[],r=[],o=[];for(let a=0;a<e.length;a++){const l=e[a];l==="native"&&lo("COMPILER_V_ON_NATIVE",t)||Wy(l)?o.push(l):$y(l)?Yt(n)?tg(n.content)?s.push(l):r.push(l):(s.push(l),r.push(l)):jy(l)?r.push(l):s.push(l)}return{keyModifiers:s,nonKeyModifiers:r,eventOptionModifiers:o}},ih=(n,e)=>Yt(n)&&n.content.toLowerCase()==="onclick"?Ve(e,!0):n.type!==4?In(["(",n,`) === "onClick" ? "${e}" : (`,n,")"]):n,Xy=(n,e,t)=>Wm(n,e,t,i=>{const{modifiers:s}=n;if(!s.length)return i;let{key:r,value:o}=i.props[0];const{keyModifiers:a,nonKeyModifiers:l,eventOptionModifiers:c}=qy(r,s,t,n.loc);if(l.includes("right")&&(r=ih(r,"onContextmenu")),l.includes("middle")&&(r=ih(r,"onMouseup")),l.length&&(o=xt(t.helper(Ym),[o,JSON.stringify(l)])),a.length&&(!Yt(r)||tg(r.content))&&(o=xt(t.helper(Zm),[o,JSON.stringify(a)])),c.length){const u=c.map(vs).join("");r=Yt(r)?Ve(`${r.content}${u}`,!0):In(["(",r,`) + "${u}"`])}return{props:[ht(r,o)]}}),Ky=(n,e,t)=>{const{exp:i,loc:s}=n;return i||t.onError(Qn(59,s)),{props:[],needRuntime:t.helper(Jm)}},Yy=(n,e)=>{n.type===1&&n.tagType===0&&(n.tag==="script"||n.tag==="style")&&(e.onError(Qn(61,n.loc)),e.removeNode())},Zy=[By],Jy={cloak:Ny,html:Vy,text:Hy,model:Gy,on:Xy,show:Ky};function Qy(n,e={}){return Fy(n,Je({},ky,e,{nodeTransforms:[Yy,...Zy,...e.nodeTransforms||[]],directiveTransforms:Je({},Jy,e.directiveTransforms||{}),transformHoist:null}))}const sh=Object.create(null);function eb(n,e){if(!ke(n))if(n.nodeType)n=n.innerHTML;else return Zt;const t=n,i=sh[t];if(i)return i;if(n[0]==="#"){const a=document.querySelector(n);n=a?a.innerHTML:""}const s=Je({hoistStatic:!0,onError:void 0,onWarn:Zt},e);!s.isCustomElement&&typeof customElements<"u"&&(s.isCustomElement=a=>!!customElements.get(a));const{code:r}=Qy(n,s),o=new Function("Vue",r)(rx);return o._rc=!0,sh[t]=o}Wp(eb);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wu="149",Ts={ROTATE:0,DOLLY:1,PAN:2},Cs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},tb=0,rh=1,nb=2,ng=1,ig=2,zr=3,Ei=0,pn=1,mi=2,vi=0,ir=1,oh=2,ah=3,lh=4,ib=5,Gs=100,sb=101,rb=102,ch=103,uh=104,ob=200,ab=201,lb=202,cb=203,sg=204,rg=205,ub=206,fb=207,hb=208,db=209,pb=210,mb=0,gb=1,_b=2,Ic=3,vb=4,xb=5,yb=6,bb=7,og=0,Mb=1,Sb=2,ei=0,wb=1,Eb=2,Tb=3,Cb=4,Ab=5,ag=300,dr=301,pr=302,Fc=303,Nc=304,sl=306,Oc=1e3,Ln=1001,Uc=1002,$t=1003,fh=1004,bl=1005,bn=1006,Rb=1007,uo=1008,us=1009,Lb=1010,Pb=1011,lg=1012,Db=1013,$i=1014,qi=1015,fo=1016,Ib=1017,Fb=1018,sr=1020,Nb=1021,Pn=1023,Ob=1024,Ub=1025,ns=1026,mr=1027,kb=1028,Bb=1029,zb=1030,Vb=1031,Hb=1033,Ml=33776,Sl=33777,wl=33778,El=33779,hh=35840,dh=35841,ph=35842,mh=35843,Gb=36196,gh=37492,_h=37496,vh=37808,xh=37809,yh=37810,bh=37811,Mh=37812,Sh=37813,wh=37814,Eh=37815,Th=37816,Ch=37817,Ah=37818,Rh=37819,Lh=37820,Ph=37821,Tl=36492,Wb=36283,Dh=36284,Ih=36285,Fh=36286,fs=3e3,rt=3001,jb=3200,$b=3201,cg=0,qb=1,Nn="srgb",ho="srgb-linear",Cl=7680,Xb=519,Nh=35044,Oh="300 es",kc=1035;class ys{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Al=Math.PI/180,Uh=180/Math.PI;function Mo(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Nt[n&255]+Nt[n>>8&255]+Nt[n>>16&255]+Nt[n>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[t&63|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[i&255]+Nt[i>>8&255]+Nt[i>>16&255]+Nt[i>>24&255]).toLowerCase()}function Xt(n,e,t){return Math.max(e,Math.min(t,n))}function Kb(n,e){return(n%e+e)%e}function Rl(n,e,t){return(1-t)*n+t*e}function kh(n){return(n&n-1)===0&&n!==0}function Bc(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Bo(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function sn(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Be{constructor(e=0,t=0){Be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class fn{constructor(){fn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],m=i[5],v=i[8],d=s[0],p=s[3],g=s[6],_=s[1],b=s[4],w=s[7],S=s[2],P=s[5],L=s[8];return r[0]=o*d+a*_+l*S,r[3]=o*p+a*b+l*P,r[6]=o*g+a*w+l*L,r[1]=c*d+u*_+f*S,r[4]=c*p+u*b+f*P,r[7]=c*g+u*w+f*L,r[2]=h*d+m*_+v*S,r[5]=h*p+m*b+v*P,r[8]=h*g+m*w+v*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*r,m=c*r-o*l,v=t*f+i*h+s*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const d=1/v;return e[0]=f*d,e[1]=(s*c-u*i)*d,e[2]=(a*i-s*o)*d,e[3]=h*d,e[4]=(u*t-s*l)*d,e[5]=(s*r-a*t)*d,e[6]=m*d,e[7]=(i*l-c*t)*d,e[8]=(o*t-i*r)*d,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ll.makeScale(e,t)),this}rotate(e){return this.premultiply(Ll.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ll.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ll=new fn;function ug(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Da(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function is(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ca(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Pl={[Nn]:{[ho]:is},[ho]:{[Nn]:ca}},Gt={legacyMode:!0,get workingColorSpace(){return ho},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.legacyMode||e===t||!e||!t)return n;if(Pl[e]&&Pl[e][t]!==void 0){const i=Pl[e][t];return n.r=i(n.r),n.g=i(n.g),n.b=i(n.b),n}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}},fg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mt={r:0,g:0,b:0},En={h:0,s:0,l:0},zo={h:0,s:0,l:0};function Dl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function Vo(n,e){return e.r=n.r,e.g=n.g,e.b=n.b,e}class it{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Gt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Gt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Gt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Gt.workingColorSpace){if(e=Kb(e,1),t=Xt(t,0,1),i=Xt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Dl(o,r,e+1/3),this.g=Dl(o,r,e),this.b=Dl(o,r,e-1/3)}return Gt.toWorkingColorSpace(this,s),this}setStyle(e,t=Nn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,Gt.toWorkingColorSpace(this,t),i(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,Gt.toWorkingColorSpace(this,t),i(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return i(r[4]),this.setHSL(l,c,u,t)}break}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,Gt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,Gt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Nn){const i=fg[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=is(e.r),this.g=is(e.g),this.b=is(e.b),this}copyLinearToSRGB(e){return this.r=ca(e.r),this.g=ca(e.g),this.b=ca(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nn){return Gt.fromWorkingColorSpace(Vo(this,Mt),e),Xt(Mt.r*255,0,255)<<16^Xt(Mt.g*255,0,255)<<8^Xt(Mt.b*255,0,255)<<0}getHexString(e=Nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Gt.workingColorSpace){Gt.fromWorkingColorSpace(Vo(this,Mt),t);const i=Mt.r,s=Mt.g,r=Mt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Gt.workingColorSpace){return Gt.fromWorkingColorSpace(Vo(this,Mt),t),e.r=Mt.r,e.g=Mt.g,e.b=Mt.b,e}getStyle(e=Nn){return Gt.fromWorkingColorSpace(Vo(this,Mt),e),e!==Nn?`color(${e} ${Mt.r} ${Mt.g} ${Mt.b})`:`rgb(${Mt.r*255|0},${Mt.g*255|0},${Mt.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(En),En.h+=e,En.s+=t,En.l+=i,this.setHSL(En.h,En.s,En.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(En),e.getHSL(zo);const i=Rl(En.h,zo.h,t),s=Rl(En.s,zo.s,t),r=Rl(En.l,zo.l,t);return this.setHSL(i,s,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}it.NAMES=fg;let As;class hg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{As===void 0&&(As=Da("canvas")),As.width=e.width,As.height=e.height;const i=As.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=As}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Da("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=is(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(is(t[i]/255)*255):t[i]=is(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class dg{constructor(e=null){this.isSource=!0,this.uuid=Mo(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Il(s[o].image)):r.push(Il(s[o]))}else r=Il(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Il(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?hg.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Yb=0;class mn extends ys{constructor(e=mn.DEFAULT_IMAGE,t=mn.DEFAULT_MAPPING,i=Ln,s=Ln,r=bn,o=uo,a=Pn,l=us,c=mn.DEFAULT_ANISOTROPY,u=fs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yb++}),this.uuid=Mo(),this.name="",this.source=new dg(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ag)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Oc:e.x=e.x-Math.floor(e.x);break;case Ln:e.x=e.x<0?0:1;break;case Uc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Oc:e.y=e.y-Math.floor(e.y);break;case Ln:e.y=e.y<0?0:1;break;case Uc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=ag;mn.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,t=0,i=0,s=1){lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],m=l[5],v=l[9],d=l[2],p=l[6],g=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-d)<.01&&Math.abs(v-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+d)<.1&&Math.abs(v+p)<.1&&Math.abs(c+m+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,w=(m+1)/2,S=(g+1)/2,P=(u+h)/4,L=(f+d)/4,x=(v+p)/4;return b>w&&b>S?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=P/i,r=L/i):w>S?w<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),i=P/s,r=x/s):S<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),i=L/r,s=x/r),this.set(i,s,r,t),this}let _=Math.sqrt((p-v)*(p-v)+(f-d)*(f-d)+(h-u)*(h-u));return Math.abs(_)<.001&&(_=1),this.x=(p-v)/_,this.y=(f-d)/_,this.z=(h-u)/_,this.w=Math.acos((c+m+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hs extends ys{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);const s={width:e,height:t,depth:1};this.texture=new mn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:bn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new dg(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pg extends mn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=$t,this.minFilter=$t,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zb extends mn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=$t,this.minFilter=$t,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ds{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3];const h=r[o+0],m=r[o+1],v=r[o+2],d=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=m,e[t+2]=v,e[t+3]=d;return}if(f!==d||l!==h||c!==m||u!==v){let p=1-a;const g=l*h+c*m+u*v+f*d,_=g>=0?1:-1,b=1-g*g;if(b>Number.EPSILON){const S=Math.sqrt(b),P=Math.atan2(S,g*_);p=Math.sin(p*P)/S,a=Math.sin(a*P)/S}const w=a*_;if(l=l*p+h*w,c=c*p+m*w,u=u*p+v*w,f=f*p+d*w,p===1-a){const S=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=S,c*=S,u*=S,f*=S}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[o],h=r[o+1],m=r[o+2],v=r[o+3];return e[t]=a*v+u*f+l*m-c*h,e[t+1]=l*v+u*h+c*f-a*m,e[t+2]=c*v+u*m+a*h-l*f,e[t+3]=u*v-a*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),f=a(r/2),h=l(i/2),m=l(s/2),v=l(r/2);switch(o){case"XYZ":this._x=h*u*f+c*m*v,this._y=c*m*f-h*u*v,this._z=c*u*v+h*m*f,this._w=c*u*f-h*m*v;break;case"YXZ":this._x=h*u*f+c*m*v,this._y=c*m*f-h*u*v,this._z=c*u*v-h*m*f,this._w=c*u*f+h*m*v;break;case"ZXY":this._x=h*u*f-c*m*v,this._y=c*m*f+h*u*v,this._z=c*u*v+h*m*f,this._w=c*u*f-h*m*v;break;case"ZYX":this._x=h*u*f-c*m*v,this._y=c*m*f+h*u*v,this._z=c*u*v-h*m*f,this._w=c*u*f+h*m*v;break;case"YZX":this._x=h*u*f+c*m*v,this._y=c*m*f+h*u*v,this._z=c*u*v-h*m*f,this._w=c*u*f-h*m*v;break;case"XZY":this._x=h*u*f-c*m*v,this._y=c*m*f-h*u*v,this._z=c*u*v+h*m*f,this._w=c*u*f+h*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(u-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=s*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(e=0,t=0,i=0){Z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*s-a*i,u=l*i+a*t-r*s,f=l*s+r*i-o*t,h=-r*t-o*i-a*s;return this.x=c*l+h*-r+u*-a-f*-o,this.y=u*l+h*-o+f*-r-c*-a,this.z=f*l+h*-a+c*-o-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Fl.copy(this).projectOnVector(e),this.sub(Fl)}reflect(e){return this.sub(Fl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fl=new Z,Bh=new ds;class So{constructor(e=new Z(1/0,1/0,1/0),t=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,s=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],f=e[l+1],h=e[l+2];u<t&&(t=u),f<i&&(i=f),h<s&&(s=h),u>r&&(r=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,i,s),this.max.set(r,o,a),this}setFromBufferAttribute(e){let t=1/0,i=1/0,s=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),f=e.getY(l),h=e.getZ(l);u<t&&(t=u),f<i&&(i=f),h<s&&(s=h),u>r&&(r=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,i,s),this.max.set(r,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Fi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const r=i.attributes.position;for(let o=0,a=r.count;o<a;o++)Fi.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Fi)}else i.boundingBox===null&&i.computeBoundingBox(),Nl.copy(i.boundingBox),Nl.applyMatrix4(e.matrixWorld),this.union(Nl);const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Fi),Fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Rr),Ho.subVectors(this.max,Rr),Rs.subVectors(e.a,Rr),Ls.subVectors(e.b,Rr),Ps.subVectors(e.c,Rr),li.subVectors(Ls,Rs),ci.subVectors(Ps,Ls),Ni.subVectors(Rs,Ps);let t=[0,-li.z,li.y,0,-ci.z,ci.y,0,-Ni.z,Ni.y,li.z,0,-li.x,ci.z,0,-ci.x,Ni.z,0,-Ni.x,-li.y,li.x,0,-ci.y,ci.x,0,-Ni.y,Ni.x,0];return!Ol(t,Rs,Ls,Ps,Ho)||(t=[1,0,0,0,1,0,0,0,1],!Ol(t,Rs,Ls,Ps,Ho))?!1:(Go.crossVectors(li,ci),t=[Go.x,Go.y,Go.z],Ol(t,Rs,Ls,Ps,Ho))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Fi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Fi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Hn=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Fi=new Z,Nl=new So,Rs=new Z,Ls=new Z,Ps=new Z,li=new Z,ci=new Z,Ni=new Z,Rr=new Z,Ho=new Z,Go=new Z,Oi=new Z;function Ol(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Oi.fromArray(n,r);const a=s.x*Math.abs(Oi.x)+s.y*Math.abs(Oi.y)+s.z*Math.abs(Oi.z),l=e.dot(Oi),c=t.dot(Oi),u=i.dot(Oi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Jb=new So,Lr=new Z,Ul=new Z;class ju{constructor(e=new Z,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Jb.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Lr.subVectors(e,this.center);const t=Lr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Lr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ul.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Lr.copy(e.center).add(Ul)),this.expandByPoint(Lr.copy(e.center).sub(Ul))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Gn=new Z,kl=new Z,Wo=new Z,ui=new Z,Bl=new Z,jo=new Z,zl=new Z;class mg{constructor(e=new Z,t=new Z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Gn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gn.copy(this.direction).multiplyScalar(t).add(this.origin),Gn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){kl.copy(e).add(t).multiplyScalar(.5),Wo.copy(t).sub(e).normalize(),ui.copy(this.origin).sub(kl);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Wo),a=ui.dot(this.direction),l=-ui.dot(Wo),c=ui.lengthSq(),u=Math.abs(1-o*o);let f,h,m,v;if(u>0)if(f=o*l-a,h=o*a-l,v=r*u,f>=0)if(h>=-v)if(h<=v){const d=1/u;f*=d,h*=d,m=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=r,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h<=-v?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-l),r),m=-f*f+h*(h+2*l)+c):h<=v?(f=0,h=Math.min(Math.max(-r,-l),r),m=h*(h+2*l)+c):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-l),r),m=-f*f+h*(h+2*l)+c);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;return i&&i.copy(this.direction).multiplyScalar(f).add(this.origin),s&&s.copy(Wo).multiplyScalar(h).add(kl),m}intersectSphere(e,t){Gn.subVectors(e.center,this.origin);const i=Gn.dot(this.direction),s=Gn.dot(Gn)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Gn)!==null}intersectTriangle(e,t,i,s,r){Bl.subVectors(t,e),jo.subVectors(i,e),zl.crossVectors(Bl,jo);let o=this.direction.dot(zl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ui.subVectors(this.origin,e);const l=a*this.direction.dot(jo.crossVectors(ui,jo));if(l<0)return null;const c=a*this.direction.dot(Bl.cross(ui));if(c<0||l+c>o)return null;const u=-a*ui.dot(zl);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(){yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,s,r,o,a,l,c,u,f,h,m,v,d,p){const g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=f,g[14]=h,g[3]=m,g[7]=v,g[11]=d,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Ds.setFromMatrixColumn(e,0).length(),r=1/Ds.setFromMatrixColumn(e,1).length(),o=1/Ds.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=o*u,m=o*f,v=a*u,d=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+v*c,t[5]=h-d*c,t[9]=-a*l,t[2]=d-h*c,t[6]=v+m*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,m=l*f,v=c*u,d=c*f;t[0]=h+d*a,t[4]=v*a-m,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=m*a-v,t[6]=d+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,m=l*f,v=c*u,d=c*f;t[0]=h-d*a,t[4]=-o*f,t[8]=v+m*a,t[1]=m+v*a,t[5]=o*u,t[9]=d-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,m=o*f,v=a*u,d=a*f;t[0]=l*u,t[4]=v*c-m,t[8]=h*c+d,t[1]=l*f,t[5]=d*c+h,t[9]=m*c-v,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*c,v=a*l,d=a*c;t[0]=l*u,t[4]=d-h*f,t[8]=v*f+m,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*f+v,t[10]=h-d*f}else if(e.order==="XZY"){const h=o*l,m=o*c,v=a*l,d=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+d,t[5]=o*u,t[9]=m*f-v,t[2]=v*f-m,t[6]=a*u,t[10]=d*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Qb,e,eM)}lookAt(e,t,i){const s=this.elements;return rn.subVectors(e,t),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),fi.crossVectors(i,rn),fi.lengthSq()===0&&(Math.abs(i.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),fi.crossVectors(i,rn)),fi.normalize(),$o.crossVectors(rn,fi),s[0]=fi.x,s[4]=$o.x,s[8]=rn.x,s[1]=fi.y,s[5]=$o.y,s[9]=rn.y,s[2]=fi.z,s[6]=$o.z,s[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],m=i[13],v=i[2],d=i[6],p=i[10],g=i[14],_=i[3],b=i[7],w=i[11],S=i[15],P=s[0],L=s[4],x=s[8],T=s[12],D=s[1],V=s[5],W=s[9],N=s[13],F=s[2],ie=s[6],le=s[10],te=s[14],X=s[3],he=s[7],_e=s[11],ve=s[15];return r[0]=o*P+a*D+l*F+c*X,r[4]=o*L+a*V+l*ie+c*he,r[8]=o*x+a*W+l*le+c*_e,r[12]=o*T+a*N+l*te+c*ve,r[1]=u*P+f*D+h*F+m*X,r[5]=u*L+f*V+h*ie+m*he,r[9]=u*x+f*W+h*le+m*_e,r[13]=u*T+f*N+h*te+m*ve,r[2]=v*P+d*D+p*F+g*X,r[6]=v*L+d*V+p*ie+g*he,r[10]=v*x+d*W+p*le+g*_e,r[14]=v*T+d*N+p*te+g*ve,r[3]=_*P+b*D+w*F+S*X,r[7]=_*L+b*V+w*ie+S*he,r[11]=_*x+b*W+w*le+S*_e,r[15]=_*T+b*N+w*te+S*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],m=e[14],v=e[3],d=e[7],p=e[11],g=e[15];return v*(+r*l*f-s*c*f-r*a*h+i*c*h+s*a*m-i*l*m)+d*(+t*l*m-t*c*h+r*o*h-s*o*m+s*c*u-r*l*u)+p*(+t*c*f-t*a*m-r*o*f+i*o*m+r*a*u-i*c*u)+g*(-s*a*u-t*l*f+t*a*h+s*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],m=e[11],v=e[12],d=e[13],p=e[14],g=e[15],_=f*p*c-d*h*c+d*l*m-a*p*m-f*l*g+a*h*g,b=v*h*c-u*p*c-v*l*m+o*p*m+u*l*g-o*h*g,w=u*d*c-v*f*c+v*a*m-o*d*m-u*a*g+o*f*g,S=v*f*l-u*d*l-v*a*h+o*d*h+u*a*p-o*f*p,P=t*_+i*b+s*w+r*S;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/P;return e[0]=_*L,e[1]=(d*h*r-f*p*r-d*s*m+i*p*m+f*s*g-i*h*g)*L,e[2]=(a*p*r-d*l*r+d*s*c-i*p*c-a*s*g+i*l*g)*L,e[3]=(f*l*r-a*h*r-f*s*c+i*h*c+a*s*m-i*l*m)*L,e[4]=b*L,e[5]=(u*p*r-v*h*r+v*s*m-t*p*m-u*s*g+t*h*g)*L,e[6]=(v*l*r-o*p*r-v*s*c+t*p*c+o*s*g-t*l*g)*L,e[7]=(o*h*r-u*l*r+u*s*c-t*h*c-o*s*m+t*l*m)*L,e[8]=w*L,e[9]=(v*f*r-u*d*r-v*i*m+t*d*m+u*i*g-t*f*g)*L,e[10]=(o*d*r-v*a*r+v*i*c-t*d*c-o*i*g+t*a*g)*L,e[11]=(u*a*r-o*f*r-u*i*c+t*f*c+o*i*m-t*a*m)*L,e[12]=S*L,e[13]=(u*d*s-v*f*s+v*i*h-t*d*h-u*i*p+t*f*p)*L,e[14]=(v*a*s-o*d*s-v*i*l+t*d*l+o*i*p-t*a*p)*L,e[15]=(o*f*s-u*a*s+u*i*l-t*f*l-o*i*h+t*a*h)*L,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,f=a+a,h=r*c,m=r*u,v=r*f,d=o*u,p=o*f,g=a*f,_=l*c,b=l*u,w=l*f,S=i.x,P=i.y,L=i.z;return s[0]=(1-(d+g))*S,s[1]=(m+w)*S,s[2]=(v-b)*S,s[3]=0,s[4]=(m-w)*P,s[5]=(1-(h+g))*P,s[6]=(p+_)*P,s[7]=0,s[8]=(v+b)*L,s[9]=(p-_)*L,s[10]=(1-(h+d))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Ds.set(s[0],s[1],s[2]).length();const o=Ds.set(s[4],s[5],s[6]).length(),a=Ds.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Tn.copy(this);const c=1/r,u=1/o,f=1/a;return Tn.elements[0]*=c,Tn.elements[1]*=c,Tn.elements[2]*=c,Tn.elements[4]*=u,Tn.elements[5]*=u,Tn.elements[6]*=u,Tn.elements[8]*=f,Tn.elements[9]*=f,Tn.elements[10]*=f,t.setFromRotationMatrix(Tn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o){const a=this.elements,l=2*r/(t-e),c=2*r/(i-s),u=(t+e)/(t-e),f=(i+s)/(i-s),h=-(o+r)/(o-r),m=-2*o*r/(o-r);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,s,r,o){const a=this.elements,l=1/(t-e),c=1/(i-s),u=1/(o-r),f=(t+e)*l,h=(i+s)*c,m=(o+r)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ds=new Z,Tn=new yt,Qb=new Z(0,0,0),eM=new Z(1,1,1),fi=new Z,$o=new Z,rn=new Z,zh=new yt,Vh=new ds;class rl{constructor(e=0,t=0,i=0,s=rl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Xt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return zh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vh.setFromEuler(this),this.setFromQuaternion(Vh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}rl.DEFAULT_ORDER="XYZ";class $u{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let tM=0;const Hh=new Z,Is=new ds,Wn=new yt,qo=new Z,Pr=new Z,nM=new Z,iM=new ds,Gh=new Z(1,0,0),Wh=new Z(0,1,0),jh=new Z(0,0,1),sM={type:"added"},$h={type:"removed"};class zt extends ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tM++}),this.uuid=Mo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zt.DEFAULT_UP.clone();const e=new Z,t=new rl,i=new ds,s=new Z(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new yt},normalMatrix:{value:new fn}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new $u,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Is.setFromAxisAngle(e,t),this.quaternion.multiply(Is),this}rotateOnWorldAxis(e,t){return Is.setFromAxisAngle(e,t),this.quaternion.premultiply(Is),this}rotateX(e){return this.rotateOnAxis(Gh,e)}rotateY(e){return this.rotateOnAxis(Wh,e)}rotateZ(e){return this.rotateOnAxis(jh,e)}translateOnAxis(e,t){return Hh.copy(e).applyQuaternion(this.quaternion),this.position.add(Hh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gh,e)}translateY(e){return this.translateOnAxis(Wh,e)}translateZ(e){return this.translateOnAxis(jh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?qo.copy(e):qo.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(Pr,qo,this.up):Wn.lookAt(qo,Pr,this.up),this.quaternion.setFromRotationMatrix(Wn),s&&(Wn.extractRotation(s.matrixWorld),Is.setFromRotationMatrix(Wn),this.quaternion.premultiply(Is.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(sM)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($h)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent($h)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let s=0,r=this.children.length;s<r;s++){const o=this.children[s].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,e,nM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,iM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++){const r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),m=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}zt.DEFAULT_UP=new Z(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Cn=new Z,jn=new Z,Vl=new Z,$n=new Z,Fs=new Z,Ns=new Z,qh=new Z,Hl=new Z,Gl=new Z,Wl=new Z;class Zn{constructor(e=new Z,t=new Z,i=new Z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Cn.subVectors(e,t),s.cross(Cn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Cn.subVectors(s,t),jn.subVectors(i,t),Vl.subVectors(e,t);const o=Cn.dot(Cn),a=Cn.dot(jn),l=Cn.dot(Vl),c=jn.dot(jn),u=jn.dot(Vl),f=o*c-a*a;if(f===0)return r.set(-2,-1,-1);const h=1/f,m=(c*l-a*u)*h,v=(o*u-a*l)*h;return r.set(1-m-v,v,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,$n),$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getUV(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,$n),l.set(0,0),l.addScaledVector(r,$n.x),l.addScaledVector(o,$n.y),l.addScaledVector(a,$n.z),l}static isFrontFacing(e,t,i,s){return Cn.subVectors(i,t),jn.subVectors(e,t),Cn.cross(jn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),Cn.cross(jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Zn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return Zn.getUV(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;Fs.subVectors(s,i),Ns.subVectors(r,i),Hl.subVectors(e,i);const l=Fs.dot(Hl),c=Ns.dot(Hl);if(l<=0&&c<=0)return t.copy(i);Gl.subVectors(e,s);const u=Fs.dot(Gl),f=Ns.dot(Gl);if(u>=0&&f<=u)return t.copy(s);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Fs,o);Wl.subVectors(e,r);const m=Fs.dot(Wl),v=Ns.dot(Wl);if(v>=0&&m<=v)return t.copy(r);const d=m*c-l*v;if(d<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(i).addScaledVector(Ns,a);const p=u*v-m*f;if(p<=0&&f-u>=0&&m-v>=0)return qh.subVectors(r,s),a=(f-u)/(f-u+(m-v)),t.copy(s).addScaledVector(qh,a);const g=1/(p+d+h);return o=d*g,a=h*g,t.copy(i).addScaledVector(Fs,o).addScaledVector(Ns,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let rM=0;class wo extends ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rM++}),this.uuid=Mo(),this.name="",this.type="Material",this.blending=ir,this.side=Ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=sg,this.blendDst=rg,this.blendEquation=Gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ic,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xb,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cl,this.stencilZFail=Cl,this.stencilZPass=Cl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const s=this[t];if(s===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ir&&(i.blending=this.blending),this.side!==Ei&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class gg extends wo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=og,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new Z,Xo=new Be;class kn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Nh,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Xo.fromBufferAttribute(this,t),Xo.applyMatrix3(e),this.setXY(t,Xo.x,Xo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix3(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix4(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.applyNormalMatrix(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.transformDirection(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Bo(t,this.array)),t}setX(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Bo(t,this.array)),t}setY(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Bo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Bo(t,this.array)),t}setW(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),i=sn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),i=sn(i,this.array),s=sn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),i=sn(i,this.array),s=sn(s,this.array),r=sn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Nh&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class _g extends kn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class vg extends kn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ss extends kn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let oM=0;const vn=new yt,jl=new zt,Os=new Z,on=new So,Dr=new So,At=new Z;class bs extends ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:oM++}),this.uuid=Mo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ug(e)?vg:_g)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new fn().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vn.makeRotationFromQuaternion(e),this.applyMatrix4(vn),this}rotateX(e){return vn.makeRotationX(e),this.applyMatrix4(vn),this}rotateY(e){return vn.makeRotationY(e),this.applyMatrix4(vn),this}rotateZ(e){return vn.makeRotationZ(e),this.applyMatrix4(vn),this}translate(e,t,i){return vn.makeTranslation(e,t,i),this.applyMatrix4(vn),this}scale(e,t,i){return vn.makeScale(e,t,i),this.applyMatrix4(vn),this}lookAt(e){return jl.lookAt(e),jl.updateMatrix(),this.applyMatrix4(jl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Os).negate(),this.translate(Os.x,Os.y,Os.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ss(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new So);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];on.setFromBufferAttribute(r),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ju);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Z,1/0);return}if(e){const i=this.boundingSphere.center;if(on.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Dr.setFromBufferAttribute(a),this.morphTargetsRelative?(At.addVectors(on.min,Dr.min),on.expandByPoint(At),At.addVectors(on.max,Dr.max),on.expandByPoint(At)):(on.expandByPoint(Dr.min),on.expandByPoint(Dr.max))}on.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)At.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(At));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)At.fromBufferAttribute(a,c),l&&(Os.fromBufferAttribute(e,c),At.add(Os)),s=Math.max(s,i.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let D=0;D<a;D++)c[D]=new Z,u[D]=new Z;const f=new Z,h=new Z,m=new Z,v=new Be,d=new Be,p=new Be,g=new Z,_=new Z;function b(D,V,W){f.fromArray(s,D*3),h.fromArray(s,V*3),m.fromArray(s,W*3),v.fromArray(o,D*2),d.fromArray(o,V*2),p.fromArray(o,W*2),h.sub(f),m.sub(f),d.sub(v),p.sub(v);const N=1/(d.x*p.y-p.x*d.y);isFinite(N)&&(g.copy(h).multiplyScalar(p.y).addScaledVector(m,-d.y).multiplyScalar(N),_.copy(m).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(N),c[D].add(g),c[V].add(g),c[W].add(g),u[D].add(_),u[V].add(_),u[W].add(_))}let w=this.groups;w.length===0&&(w=[{start:0,count:i.length}]);for(let D=0,V=w.length;D<V;++D){const W=w[D],N=W.start,F=W.count;for(let ie=N,le=N+F;ie<le;ie+=3)b(i[ie+0],i[ie+1],i[ie+2])}const S=new Z,P=new Z,L=new Z,x=new Z;function T(D){L.fromArray(r,D*3),x.copy(L);const V=c[D];S.copy(V),S.sub(L.multiplyScalar(L.dot(V))).normalize(),P.crossVectors(x,V);const N=P.dot(u[D])<0?-1:1;l[D*4]=S.x,l[D*4+1]=S.y,l[D*4+2]=S.z,l[D*4+3]=N}for(let D=0,V=w.length;D<V;++D){const W=w[D],N=W.start,F=W.count;for(let ie=N,le=N+F;ie<le;ie+=3)T(i[ie+0]),T(i[ie+1]),T(i[ie+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new kn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const s=new Z,r=new Z,o=new Z,a=new Z,l=new Z,c=new Z,u=new Z,f=new Z;if(e)for(let h=0,m=e.count;h<m;h+=3){const v=e.getX(h+0),d=e.getX(h+1),p=e.getX(h+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,d),o.fromBufferAttribute(t,p),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,d),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(d,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let m=0,v=0;for(let d=0,p=l.length;d<p;d++){a.isInterleavedBufferAttribute?m=l[d]*a.data.stride+a.offset:m=l[d]*u;for(let g=0;g<u;g++)h[v++]=c[m++]}return new kn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new bs,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],m=e(h,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xh=new yt,Us=new mg,$l=new ju,Ir=new Z,Fr=new Z,Nr=new Z,ql=new Z,Ko=new Z,Yo=new Be,Zo=new Be,Jo=new Be,Xl=new Z,Qo=new Z;class Dn extends zt{constructor(e=new bs,t=new gg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Ko.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(ql.fromBufferAttribute(f,e),o?Ko.addScaledVector(ql,u):Ko.addScaledVector(ql.sub(t),u))}t.add(Ko)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;if(s===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),$l.copy(i.boundingSphere),$l.applyMatrix4(r),e.ray.intersectsSphere($l)===!1)||(Xh.copy(r).invert(),Us.copy(e.ray).applyMatrix4(Xh),i.boundingBox!==null&&Us.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,l=i.attributes.position,c=i.attributes.uv,u=i.attributes.uv2,f=i.groups,h=i.drawRange;if(a!==null)if(Array.isArray(s))for(let m=0,v=f.length;m<v;m++){const d=f[m],p=s[d.materialIndex],g=Math.max(d.start,h.start),_=Math.min(a.count,Math.min(d.start+d.count,h.start+h.count));for(let b=g,w=_;b<w;b+=3){const S=a.getX(b),P=a.getX(b+1),L=a.getX(b+2);o=ea(this,p,e,Us,c,u,S,P,L),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=d.materialIndex,t.push(o))}}else{const m=Math.max(0,h.start),v=Math.min(a.count,h.start+h.count);for(let d=m,p=v;d<p;d+=3){const g=a.getX(d),_=a.getX(d+1),b=a.getX(d+2);o=ea(this,s,e,Us,c,u,g,_,b),o&&(o.faceIndex=Math.floor(d/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(s))for(let m=0,v=f.length;m<v;m++){const d=f[m],p=s[d.materialIndex],g=Math.max(d.start,h.start),_=Math.min(l.count,Math.min(d.start+d.count,h.start+h.count));for(let b=g,w=_;b<w;b+=3){const S=b,P=b+1,L=b+2;o=ea(this,p,e,Us,c,u,S,P,L),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=d.materialIndex,t.push(o))}}else{const m=Math.max(0,h.start),v=Math.min(l.count,h.start+h.count);for(let d=m,p=v;d<p;d+=3){const g=d,_=d+1,b=d+2;o=ea(this,s,e,Us,c,u,g,_,b),o&&(o.faceIndex=Math.floor(d/3),t.push(o))}}}}function aM(n,e,t,i,s,r,o,a){let l;if(e.side===pn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Ei,a),l===null)return null;Qo.copy(a),Qo.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Qo);return c<t.near||c>t.far?null:{distance:c,point:Qo.clone(),object:n}}function ea(n,e,t,i,s,r,o,a,l){n.getVertexPosition(o,Ir),n.getVertexPosition(a,Fr),n.getVertexPosition(l,Nr);const c=aM(n,e,t,i,Ir,Fr,Nr,Xl);if(c){s&&(Yo.fromBufferAttribute(s,o),Zo.fromBufferAttribute(s,a),Jo.fromBufferAttribute(s,l),c.uv=Zn.getUV(Xl,Ir,Fr,Nr,Yo,Zo,Jo,new Be)),r&&(Yo.fromBufferAttribute(r,o),Zo.fromBufferAttribute(r,a),Jo.fromBufferAttribute(r,l),c.uv2=Zn.getUV(Xl,Ir,Fr,Nr,Yo,Zo,Jo,new Be));const u={a:o,b:a,c:l,normal:new Z,materialIndex:0};Zn.getNormal(Ir,Fr,Nr,u.normal),c.face=u}return c}class Mr extends bs{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,m=0;v("z","y","x",-1,-1,i,t,e,o,r,0),v("z","y","x",1,-1,i,t,-e,o,r,1),v("x","z","y",1,1,e,i,t,s,o,2),v("x","z","y",1,-1,e,i,-t,s,o,3),v("x","y","z",1,-1,e,t,i,s,r,4),v("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ss(c,3)),this.setAttribute("normal",new ss(u,3)),this.setAttribute("uv",new ss(f,2));function v(d,p,g,_,b,w,S,P,L,x,T){const D=w/L,V=S/x,W=w/2,N=S/2,F=P/2,ie=L+1,le=x+1;let te=0,X=0;const he=new Z;for(let _e=0;_e<le;_e++){const ve=_e*V-N;for(let K=0;K<ie;K++){const G=K*D-W;he[d]=G*_,he[p]=ve*b,he[g]=F,c.push(he.x,he.y,he.z),he[d]=0,he[p]=0,he[g]=P>0?1:-1,u.push(he.x,he.y,he.z),f.push(K/L),f.push(1-_e/x),te+=1}}for(let _e=0;_e<x;_e++)for(let ve=0;ve<L;ve++){const K=h+ve+ie*_e,G=h+ve+ie*(_e+1),Q=h+(ve+1)+ie*(_e+1),ee=h+(ve+1)+ie*_e;l.push(K,G,ee),l.push(G,Q,ee),X+=6}a.addGroup(m,X,T),m+=X,h+=te}}static fromJSON(e){return new Mr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function gr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function jt(n){const e={};for(let t=0;t<n.length;t++){const i=gr(n[t]);for(const s in i)e[s]=i[s]}return e}function lM(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function xg(n){return n.getRenderTarget()===null&&n.outputEncoding===rt?Nn:ho}const cM={clone:gr,merge:jt};var uM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ps extends wo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uM,this.fragmentShader=fM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gr(e.uniforms),this.uniformsGroups=lM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class yg extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class cn extends yg{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Uh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Al*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Uh*2*Math.atan(Math.tan(Al*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Al*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ks=-90,Bs=1;class hM extends zt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const s=new cn(ks,Bs,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(1,0,0),this.add(s);const r=new cn(ks,Bs,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const o=new cn(ks,Bs,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new cn(ks,Bs,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new cn(ks,Bs,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new cn(ks,Bs,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[s,r,o,a,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=ei,e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,s),e.setRenderTarget(i,1),e.render(t,r),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=m,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class bg extends mn{constructor(e,t,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:dr,super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class dM extends hs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new bg(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:bn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Mr(5,5,5),r=new ps({name:"CubemapFromEquirect",uniforms:gr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pn,blending:vi});r.uniforms.tEquirect.value=t;const o=new Dn(s,r),a=t.minFilter;return t.minFilter===uo&&(t.minFilter=bn),new hM(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const Kl=new Z,pM=new Z,mM=new fn;class ki{constructor(e=new Z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Kl.subVectors(i,t).cross(pM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(Kl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(i).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||mM.getNormalMatrix(e),s=this.coplanarPoint(Kl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zs=new ju,ta=new Z;class qu{constructor(e=new ki,t=new ki,i=new ki,s=new ki,r=new ki,o=new ki){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,s=i[0],r=i[1],o=i[2],a=i[3],l=i[4],c=i[5],u=i[6],f=i[7],h=i[8],m=i[9],v=i[10],d=i[11],p=i[12],g=i[13],_=i[14],b=i[15];return t[0].setComponents(a-s,f-l,d-h,b-p).normalize(),t[1].setComponents(a+s,f+l,d+h,b+p).normalize(),t[2].setComponents(a+r,f+c,d+m,b+g).normalize(),t[3].setComponents(a-r,f-c,d-m,b-g).normalize(),t[4].setComponents(a-o,f-u,d-v,b-_).normalize(),t[5].setComponents(a+o,f+u,d+v,b+_).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),zs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(zs)}intersectsSprite(e){return zs.center.set(0,0,0),zs.radius=.7071067811865476,zs.applyMatrix4(e.matrixWorld),this.intersectsSphere(zs)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(ta.x=s.normal.x>0?e.max.x:e.min.x,ta.y=s.normal.y>0?e.max.y:e.min.y,ta.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ta)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Mg(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function gM(n,e){const t=e.isWebGL2,i=new WeakMap;function s(c,u){const f=c.array,h=c.usage,m=n.createBuffer();n.bindBuffer(u,m),n.bufferData(u,f,h),c.onUploadCallback();let v;if(f instanceof Float32Array)v=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=5123;else if(f instanceof Int16Array)v=5122;else if(f instanceof Uint32Array)v=5125;else if(f instanceof Int32Array)v=5124;else if(f instanceof Int8Array)v=5120;else if(f instanceof Uint8Array)v=5121;else if(f instanceof Uint8ClampedArray)v=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:v,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,f){const h=u.array,m=u.updateRange;n.bindBuffer(f,c),m.count===-1?n.bufferSubData(f,0,h):(t?n.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):n.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,s(c,u)):f.version<c.version&&(r(f.buffer,c,u),f.version=c.version)}return{get:o,remove:a,update:l}}class Xu extends bs{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,f=e/a,h=t/l,m=[],v=[],d=[],p=[];for(let g=0;g<u;g++){const _=g*h-o;for(let b=0;b<c;b++){const w=b*f-r;v.push(w,-_,0),d.push(0,0,1),p.push(b/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let _=0;_<a;_++){const b=_+c*g,w=_+c*(g+1),S=_+1+c*(g+1),P=_+1+c*g;m.push(b,w,P),m.push(w,S,P)}this.setIndex(m),this.setAttribute("position",new ss(v,3)),this.setAttribute("normal",new ss(d,3)),this.setAttribute("uv",new ss(p,2))}static fromJSON(e){return new Xu(e.width,e.height,e.widthSegments,e.heightSegments)}}var _M=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,vM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xM=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,yM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,MM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,SM="vec3 transformed = vec3( position );",wM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,EM=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,TM=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,CM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,AM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,RM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,LM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,PM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,DM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,IM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,FM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,NM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,OM=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,UM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,kM=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,BM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,VM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,HM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,GM="gl_FragColor = linearToOutputTexel( gl_FragColor );",WM=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jM=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,$M=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qM=`#ifdef USE_ENVMAP
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
#endif`,XM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,KM=`#ifdef USE_ENVMAP
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
#endif`,YM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ZM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,JM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,QM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eS=`#ifdef USE_GRADIENTMAP
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
}`,tS=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,nS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,iS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,oS=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,aS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,hS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,dS=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,pS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,mS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,gS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_S=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,xS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,yS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,MS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,SS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ES=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,TS=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,CS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,AS=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,RS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,LS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,PS=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,DS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,FS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,NS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,OS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,US=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,kS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,BS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,VS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,HS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,GS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,WS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$S=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,XS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,KS=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,YS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ZS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,JS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,QS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,e1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,t1=`#ifdef USE_SKINNING
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
#endif`,n1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,i1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,s1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,r1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,o1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,a1=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,l1=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,c1=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,u1=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,f1=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,h1=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,d1=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,p1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const m1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,g1=`uniform sampler2D t2D;
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
	#include <encodings_fragment>
}`,_1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,x1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,b1=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,M1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,S1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,w1=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,E1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,T1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,C1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,A1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,R1=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,L1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,D1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,F1=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,O1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,U1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,k1=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,z1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,H1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,G1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,W1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,j1=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,q1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,X1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,ze={alphamap_fragment:_M,alphamap_pars_fragment:vM,alphatest_fragment:xM,alphatest_pars_fragment:yM,aomap_fragment:bM,aomap_pars_fragment:MM,begin_vertex:SM,beginnormal_vertex:wM,bsdfs:EM,iridescence_fragment:TM,bumpmap_pars_fragment:CM,clipping_planes_fragment:AM,clipping_planes_pars_fragment:RM,clipping_planes_pars_vertex:LM,clipping_planes_vertex:PM,color_fragment:DM,color_pars_fragment:IM,color_pars_vertex:FM,color_vertex:NM,common:OM,cube_uv_reflection_fragment:UM,defaultnormal_vertex:kM,displacementmap_pars_vertex:BM,displacementmap_vertex:zM,emissivemap_fragment:VM,emissivemap_pars_fragment:HM,encodings_fragment:GM,encodings_pars_fragment:WM,envmap_fragment:jM,envmap_common_pars_fragment:$M,envmap_pars_fragment:qM,envmap_pars_vertex:XM,envmap_physical_pars_fragment:oS,envmap_vertex:KM,fog_vertex:YM,fog_pars_vertex:ZM,fog_fragment:JM,fog_pars_fragment:QM,gradientmap_pars_fragment:eS,lightmap_fragment:tS,lightmap_pars_fragment:nS,lights_lambert_fragment:iS,lights_lambert_pars_fragment:sS,lights_pars_begin:rS,lights_toon_fragment:aS,lights_toon_pars_fragment:lS,lights_phong_fragment:cS,lights_phong_pars_fragment:uS,lights_physical_fragment:fS,lights_physical_pars_fragment:hS,lights_fragment_begin:dS,lights_fragment_maps:pS,lights_fragment_end:mS,logdepthbuf_fragment:gS,logdepthbuf_pars_fragment:_S,logdepthbuf_pars_vertex:vS,logdepthbuf_vertex:xS,map_fragment:yS,map_pars_fragment:bS,map_particle_fragment:MS,map_particle_pars_fragment:SS,metalnessmap_fragment:wS,metalnessmap_pars_fragment:ES,morphcolor_vertex:TS,morphnormal_vertex:CS,morphtarget_pars_vertex:AS,morphtarget_vertex:RS,normal_fragment_begin:LS,normal_fragment_maps:PS,normal_pars_fragment:DS,normal_pars_vertex:IS,normal_vertex:FS,normalmap_pars_fragment:NS,clearcoat_normal_fragment_begin:OS,clearcoat_normal_fragment_maps:US,clearcoat_pars_fragment:kS,iridescence_pars_fragment:BS,output_fragment:zS,packing:VS,premultiplied_alpha_fragment:HS,project_vertex:GS,dithering_fragment:WS,dithering_pars_fragment:jS,roughnessmap_fragment:$S,roughnessmap_pars_fragment:qS,shadowmap_pars_fragment:XS,shadowmap_pars_vertex:KS,shadowmap_vertex:YS,shadowmask_pars_fragment:ZS,skinbase_vertex:JS,skinning_pars_vertex:QS,skinning_vertex:e1,skinnormal_vertex:t1,specularmap_fragment:n1,specularmap_pars_fragment:i1,tonemapping_fragment:s1,tonemapping_pars_fragment:r1,transmission_fragment:o1,transmission_pars_fragment:a1,uv_pars_fragment:l1,uv_pars_vertex:c1,uv_vertex:u1,uv2_pars_fragment:f1,uv2_pars_vertex:h1,uv2_vertex:d1,worldpos_vertex:p1,background_vert:m1,background_frag:g1,backgroundCube_vert:_1,backgroundCube_frag:v1,cube_vert:x1,cube_frag:y1,depth_vert:b1,depth_frag:M1,distanceRGBA_vert:S1,distanceRGBA_frag:w1,equirect_vert:E1,equirect_frag:T1,linedashed_vert:C1,linedashed_frag:A1,meshbasic_vert:R1,meshbasic_frag:L1,meshlambert_vert:P1,meshlambert_frag:D1,meshmatcap_vert:I1,meshmatcap_frag:F1,meshnormal_vert:N1,meshnormal_frag:O1,meshphong_vert:U1,meshphong_frag:k1,meshphysical_vert:B1,meshphysical_frag:z1,meshtoon_vert:V1,meshtoon_frag:H1,points_vert:G1,points_frag:W1,shadow_vert:j1,shadow_frag:$1,sprite_vert:q1,sprite_frag:X1},Ae={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new fn},uv2Transform:{value:new fn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new fn}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new fn}}},On={basic:{uniforms:jt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:jt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new it(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:jt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:jt([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:jt([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new it(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:jt([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:jt([Ae.points,Ae.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:jt([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:jt([Ae.common,Ae.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:jt([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:jt([Ae.sprite,Ae.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new fn},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:jt([Ae.common,Ae.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:jt([Ae.lights,Ae.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};On.physical={uniforms:jt([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Be(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const na={r:0,b:0,g:0};function K1(n,e,t,i,s,r,o){const a=new it(0);let l=r===!0?0:1,c,u,f=null,h=0,m=null;function v(p,g){let _=!1,b=g.isScene===!0?g.background:null;b&&b.isTexture&&(b=(g.backgroundBlurriness>0?t:e).get(b));const w=n.xr,S=w.getSession&&w.getSession();S&&S.environmentBlendMode==="additive"&&(b=null),b===null?d(a,l):b&&b.isColor&&(d(b,1),_=!0),(n.autoClear||_)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),b&&(b.isCubeTexture||b.mapping===sl)?(u===void 0&&(u=new Dn(new Mr(1,1,1),new ps({name:"BackgroundCubeMaterial",uniforms:gr(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,L,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.toneMapped=b.encoding!==rt,(f!==b||h!==b.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=b,h=b.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Dn(new Xu(2,2),new ps({name:"BackgroundMaterial",uniforms:gr(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=b.encoding!==rt,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(f!==b||h!==b.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=b,h=b.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function d(p,g){p.getRGB(na,xg(n)),i.buffers.color.setClear(na.r,na.g,na.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(p,g=1){a.set(p),l=g,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,d(a,l)},render:v}}function Y1(n,e,t,i){const s=n.getParameter(34921),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=p(null);let c=l,u=!1;function f(F,ie,le,te,X){let he=!1;if(o){const _e=d(te,le,ie);c!==_e&&(c=_e,m(c.object)),he=g(F,te,le,X),he&&_(F,te,le,X)}else{const _e=ie.wireframe===!0;(c.geometry!==te.id||c.program!==le.id||c.wireframe!==_e)&&(c.geometry=te.id,c.program=le.id,c.wireframe=_e,he=!0)}X!==null&&t.update(X,34963),(he||u)&&(u=!1,x(F,ie,le,te),X!==null&&n.bindBuffer(34963,t.get(X).buffer))}function h(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function m(F){return i.isWebGL2?n.bindVertexArray(F):r.bindVertexArrayOES(F)}function v(F){return i.isWebGL2?n.deleteVertexArray(F):r.deleteVertexArrayOES(F)}function d(F,ie,le){const te=le.wireframe===!0;let X=a[F.id];X===void 0&&(X={},a[F.id]=X);let he=X[ie.id];he===void 0&&(he={},X[ie.id]=he);let _e=he[te];return _e===void 0&&(_e=p(h()),he[te]=_e),_e}function p(F){const ie=[],le=[],te=[];for(let X=0;X<s;X++)ie[X]=0,le[X]=0,te[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ie,enabledAttributes:le,attributeDivisors:te,object:F,attributes:{},index:null}}function g(F,ie,le,te){const X=c.attributes,he=ie.attributes;let _e=0;const ve=le.getAttributes();for(const K in ve)if(ve[K].location>=0){const Q=X[K];let ee=he[K];if(ee===void 0&&(K==="instanceMatrix"&&F.instanceMatrix&&(ee=F.instanceMatrix),K==="instanceColor"&&F.instanceColor&&(ee=F.instanceColor)),Q===void 0||Q.attribute!==ee||ee&&Q.data!==ee.data)return!0;_e++}return c.attributesNum!==_e||c.index!==te}function _(F,ie,le,te){const X={},he=ie.attributes;let _e=0;const ve=le.getAttributes();for(const K in ve)if(ve[K].location>=0){let Q=he[K];Q===void 0&&(K==="instanceMatrix"&&F.instanceMatrix&&(Q=F.instanceMatrix),K==="instanceColor"&&F.instanceColor&&(Q=F.instanceColor));const ee={};ee.attribute=Q,Q&&Q.data&&(ee.data=Q.data),X[K]=ee,_e++}c.attributes=X,c.attributesNum=_e,c.index=te}function b(){const F=c.newAttributes;for(let ie=0,le=F.length;ie<le;ie++)F[ie]=0}function w(F){S(F,0)}function S(F,ie){const le=c.newAttributes,te=c.enabledAttributes,X=c.attributeDivisors;le[F]=1,te[F]===0&&(n.enableVertexAttribArray(F),te[F]=1),X[F]!==ie&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,ie),X[F]=ie)}function P(){const F=c.newAttributes,ie=c.enabledAttributes;for(let le=0,te=ie.length;le<te;le++)ie[le]!==F[le]&&(n.disableVertexAttribArray(le),ie[le]=0)}function L(F,ie,le,te,X,he){i.isWebGL2===!0&&(le===5124||le===5125)?n.vertexAttribIPointer(F,ie,le,X,he):n.vertexAttribPointer(F,ie,le,te,X,he)}function x(F,ie,le,te){if(i.isWebGL2===!1&&(F.isInstancedMesh||te.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;b();const X=te.attributes,he=le.getAttributes(),_e=ie.defaultAttributeValues;for(const ve in he){const K=he[ve];if(K.location>=0){let G=X[ve];if(G===void 0&&(ve==="instanceMatrix"&&F.instanceMatrix&&(G=F.instanceMatrix),ve==="instanceColor"&&F.instanceColor&&(G=F.instanceColor)),G!==void 0){const Q=G.normalized,ee=G.itemSize,B=t.get(G);if(B===void 0)continue;const xe=B.buffer,me=B.type,be=B.bytesPerElement;if(G.isInterleavedBufferAttribute){const ye=G.data,Ee=ye.stride,C=G.offset;if(ye.isInstancedInterleavedBuffer){for(let R=0;R<K.locationSize;R++)S(K.location+R,ye.meshPerAttribute);F.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let R=0;R<K.locationSize;R++)w(K.location+R);n.bindBuffer(34962,xe);for(let R=0;R<K.locationSize;R++)L(K.location+R,ee/K.locationSize,me,Q,Ee*be,(C+ee/K.locationSize*R)*be)}else{if(G.isInstancedBufferAttribute){for(let ye=0;ye<K.locationSize;ye++)S(K.location+ye,G.meshPerAttribute);F.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let ye=0;ye<K.locationSize;ye++)w(K.location+ye);n.bindBuffer(34962,xe);for(let ye=0;ye<K.locationSize;ye++)L(K.location+ye,ee/K.locationSize,me,Q,ee*be,ee/K.locationSize*ye*be)}}else if(_e!==void 0){const Q=_e[ve];if(Q!==void 0)switch(Q.length){case 2:n.vertexAttrib2fv(K.location,Q);break;case 3:n.vertexAttrib3fv(K.location,Q);break;case 4:n.vertexAttrib4fv(K.location,Q);break;default:n.vertexAttrib1fv(K.location,Q)}}}}P()}function T(){W();for(const F in a){const ie=a[F];for(const le in ie){const te=ie[le];for(const X in te)v(te[X].object),delete te[X];delete ie[le]}delete a[F]}}function D(F){if(a[F.id]===void 0)return;const ie=a[F.id];for(const le in ie){const te=ie[le];for(const X in te)v(te[X].object),delete te[X];delete ie[le]}delete a[F.id]}function V(F){for(const ie in a){const le=a[ie];if(le[F.id]===void 0)continue;const te=le[F.id];for(const X in te)v(te[X].object),delete te[X];delete le[F.id]}}function W(){N(),u=!0,c!==l&&(c=l,m(c.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:W,resetDefaultState:N,dispose:T,releaseStatesOfGeometry:D,releaseStatesOfProgram:V,initAttributes:b,enableAttribute:w,disableUnusedAttributes:P}}function Z1(n,e,t,i){const s=i.isWebGL2;let r;function o(c){r=c}function a(c,u){n.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,f){if(f===0)return;let h,m;if(s)h=n,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](r,c,u,f),t.update(u,r,f)}this.setMode=o,this.render=a,this.renderInstances=l}function J1(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(L){if(L==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(34930),h=n.getParameter(35660),m=n.getParameter(3379),v=n.getParameter(34076),d=n.getParameter(34921),p=n.getParameter(36347),g=n.getParameter(36348),_=n.getParameter(36349),b=h>0,w=o||e.has("OES_texture_float"),S=b&&w,P=o?n.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:v,maxAttributes:d,maxVertexUniforms:p,maxVaryings:g,maxFragmentUniforms:_,vertexTextures:b,floatFragmentTextures:w,floatVertexTextures:S,maxSamples:P}}function Q1(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new ki,a=new fn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||i!==0||s;return s=h,i=f.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,m){const v=f.clippingPlanes,d=f.clipIntersection,p=f.clipShadows,g=n.get(f);if(!s||v===null||v.length===0||r&&!p)r?u(null):c();else{const _=r?0:i,b=_*4;let w=g.clippingState||null;l.value=w,w=u(v,h,b,m);for(let S=0;S!==b;++S)w[S]=t[S];g.clippingState=w,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,m,v){const d=f!==null?f.length:0;let p=null;if(d!==0){if(p=l.value,v!==!0||p===null){const g=m+d*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<g)&&(p=new Float32Array(g));for(let b=0,w=m;b!==d;++b,w+=4)o.copy(f[b]).applyMatrix4(_,a),o.normal.toArray(p,w),p[w+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=d,e.numIntersection=0,p}}function ew(n){let e=new WeakMap;function t(o,a){return a===Fc?o.mapping=dr:a===Nc&&(o.mapping=pr),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Fc||a===Nc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new dM(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class Sg extends yg{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const $s=4,Kh=[.125,.215,.35,.446,.526,.582],Hi=20,Yl=new Sg,Yh=new it;let Zl=null;const Bi=(1+Math.sqrt(5))/2,Vs=1/Bi,Zh=[new Z(1,1,1),new Z(-1,1,1),new Z(1,1,-1),new Z(-1,1,-1),new Z(0,Bi,Vs),new Z(0,Bi,-Vs),new Z(Vs,0,Bi),new Z(-Vs,0,Bi),new Z(Bi,Vs,0),new Z(-Bi,Vs,0)];class Jh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Zl=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=td(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ed(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Zl),e.scissorTest=!1,ia(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===dr||e.mapping===pr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zl=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:fo,format:Pn,encoding:fs,depthBuffer:!1},s=Qh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qh(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tw(r)),this._blurMaterial=nw(r,e,t)}return s}_compileMaterial(e){const t=new Dn(this._lodPlanes[0],e);this._renderer.compile(t,Yl)}_sceneToCubeUV(e,t,i,s){const a=new cn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Yh),u.toneMapping=ei,u.autoClear=!1;const m=new gg({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),v=new Dn(new Mr,m);let d=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,d=!0):(m.color.copy(Yh),d=!0);for(let g=0;g<6;g++){const _=g%3;_===0?(a.up.set(0,l[g],0),a.lookAt(c[g],0,0)):_===1?(a.up.set(0,0,l[g]),a.lookAt(0,c[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,c[g]));const b=this._cubeSize;ia(s,_*b,g>2?b:0,b,b),u.setRenderTarget(s),d&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===dr||e.mapping===pr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=td()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ed());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Dn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;ia(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Yl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Zh[(s-1)%Zh.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Dn(this._lodPlanes[s],c),h=c.uniforms,m=this._sizeLods[i]-1,v=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Hi-1),d=r/v,p=isFinite(r)?1+Math.floor(u*d):Hi;p>Hi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Hi}`);const g=[];let _=0;for(let L=0;L<Hi;++L){const x=L/d,T=Math.exp(-x*x/2);g.push(T),L===0?_+=T:L<p&&(_+=2*T)}for(let L=0;L<g.length;L++)g[L]=g[L]/_;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=g,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:b}=this;h.dTheta.value=v,h.mipInt.value=b-i;const w=this._sizeLods[s],S=3*w*(s>b-$s?s-b+$s:0),P=4*(this._cubeSize-w);ia(t,S,P,3*w,2*w),l.setRenderTarget(t),l.render(f,Yl)}}function tw(n){const e=[],t=[],i=[];let s=n;const r=n-$s+1+Kh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-$s?l=Kh[o-n+$s-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,v=6,d=3,p=2,g=1,_=new Float32Array(d*v*m),b=new Float32Array(p*v*m),w=new Float32Array(g*v*m);for(let P=0;P<m;P++){const L=P%3*2/3-1,x=P>2?0:-1,T=[L,x,0,L+2/3,x,0,L+2/3,x+1,0,L,x,0,L+2/3,x+1,0,L,x+1,0];_.set(T,d*v*P),b.set(h,p*v*P);const D=[P,P,P,P,P,P];w.set(D,g*v*P)}const S=new bs;S.setAttribute("position",new kn(_,d)),S.setAttribute("uv",new kn(b,p)),S.setAttribute("faceIndex",new kn(w,g)),e.push(S),s>$s&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Qh(n,e,t){const i=new hs(n,e,t);return i.texture.mapping=sl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ia(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function nw(n,e,t){const i=new Float32Array(Hi),s=new Z(0,1,0);return new ps({name:"SphericalGaussianBlur",defines:{n:Hi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ku(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function ed(){return new ps({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ku(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function td(){return new ps({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ku(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Ku(){return`

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
	`}function iw(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Fc||l===Nc,u=l===dr||l===pr;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new Jh(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&s(f)){t===null&&(t=new Jh(n));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",r),h.texture}else return null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function sw(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function rw(n,e,t,i){const s={},r=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);h.removeEventListener("dispose",o),delete s[h.id];const m=r.get(h);m&&(e.remove(m),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const v in h)e.update(h[v],34962);const m=f.morphAttributes;for(const v in m){const d=m[v];for(let p=0,g=d.length;p<g;p++)e.update(d[p],34962)}}function c(f){const h=[],m=f.index,v=f.attributes.position;let d=0;if(m!==null){const _=m.array;d=m.version;for(let b=0,w=_.length;b<w;b+=3){const S=_[b+0],P=_[b+1],L=_[b+2];h.push(S,P,P,L,L,S)}}else{const _=v.array;d=v.version;for(let b=0,w=_.length/3-1;b<w;b+=3){const S=b+0,P=b+1,L=b+2;h.push(S,P,P,L,L,S)}}const p=new(ug(h)?vg:_g)(h,1);p.version=d;const g=r.get(f);g&&e.remove(g),r.set(f,p)}function u(f){const h=r.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function ow(n,e,t,i){const s=i.isWebGL2;let r;function o(h){r=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function u(h,m){n.drawElements(r,m,a,h*l),t.update(m,r,1)}function f(h,m,v){if(v===0)return;let d,p;if(s)d=n,p="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](r,m,a,h*l,v),t.update(m,r,v)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f}function aw(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(r/3);break;case 1:t.lines+=a*(r/2);break;case 3:t.lines+=a*(r-1);break;case 2:t.lines+=a*r;break;case 0:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function lw(n,e){return n[0]-e[0]}function cw(n,e){return Math.abs(e[1])-Math.abs(n[1])}function uw(n,e,t){const i={},s=new Float32Array(8),r=new WeakMap,o=new lt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f,h){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=d!==void 0?d.length:0;let g=r.get(u);if(g===void 0||g.count!==p){let le=function(){F.dispose(),r.delete(u),u.removeEventListener("dispose",le)};var v=le;g!==void 0&&g.texture.dispose();const w=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,P=u.morphAttributes.color!==void 0,L=u.morphAttributes.position||[],x=u.morphAttributes.normal||[],T=u.morphAttributes.color||[];let D=0;w===!0&&(D=1),S===!0&&(D=2),P===!0&&(D=3);let V=u.attributes.position.count*D,W=1;V>e.maxTextureSize&&(W=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const N=new Float32Array(V*W*4*p),F=new pg(N,V,W,p);F.type=qi,F.needsUpdate=!0;const ie=D*4;for(let te=0;te<p;te++){const X=L[te],he=x[te],_e=T[te],ve=V*W*4*te;for(let K=0;K<X.count;K++){const G=K*ie;w===!0&&(o.fromBufferAttribute(X,K),N[ve+G+0]=o.x,N[ve+G+1]=o.y,N[ve+G+2]=o.z,N[ve+G+3]=0),S===!0&&(o.fromBufferAttribute(he,K),N[ve+G+4]=o.x,N[ve+G+5]=o.y,N[ve+G+6]=o.z,N[ve+G+7]=0),P===!0&&(o.fromBufferAttribute(_e,K),N[ve+G+8]=o.x,N[ve+G+9]=o.y,N[ve+G+10]=o.z,N[ve+G+11]=_e.itemSize===4?o.w:1)}}g={count:p,texture:F,size:new Be(V,W)},r.set(u,g),u.addEventListener("dispose",le)}let _=0;for(let w=0;w<m.length;w++)_+=m[w];const b=u.morphTargetsRelative?1:1-_;h.getUniforms().setValue(n,"morphTargetBaseInfluence",b),h.getUniforms().setValue(n,"morphTargetInfluences",m),h.getUniforms().setValue(n,"morphTargetsTexture",g.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",g.size)}else{const d=m===void 0?0:m.length;let p=i[u.id];if(p===void 0||p.length!==d){p=[];for(let S=0;S<d;S++)p[S]=[S,0];i[u.id]=p}for(let S=0;S<d;S++){const P=p[S];P[0]=S,P[1]=m[S]}p.sort(cw);for(let S=0;S<8;S++)S<d&&p[S][1]?(a[S][0]=p[S][0],a[S][1]=p[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(lw);const g=u.morphAttributes.position,_=u.morphAttributes.normal;let b=0;for(let S=0;S<8;S++){const P=a[S],L=P[0],x=P[1];L!==Number.MAX_SAFE_INTEGER&&x?(g&&u.getAttribute("morphTarget"+S)!==g[L]&&u.setAttribute("morphTarget"+S,g[L]),_&&u.getAttribute("morphNormal"+S)!==_[L]&&u.setAttribute("morphNormal"+S,_[L]),s[S]=x,b+=x):(g&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),_&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),s[S]=0)}const w=u.morphTargetsRelative?1:1-b;h.getUniforms().setValue(n,"morphTargetBaseInfluence",w),h.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function fw(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);return s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const wg=new mn,Eg=new pg,Tg=new Zb,Cg=new bg,nd=[],id=[],sd=new Float32Array(16),rd=new Float32Array(9),od=new Float32Array(4);function Sr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=nd[s];if(r===void 0&&(r=new Float32Array(s),nd[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function wt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Et(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ol(n,e){let t=id[e];t===void 0&&(t=new Int32Array(e),id[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function hw(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function dw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;n.uniform2fv(this.addr,e),Et(t,e)}}function pw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;n.uniform3fv(this.addr,e),Et(t,e)}}function mw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;n.uniform4fv(this.addr,e),Et(t,e)}}function gw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(wt(t,i))return;od.set(i),n.uniformMatrix2fv(this.addr,!1,od),Et(t,i)}}function _w(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(wt(t,i))return;rd.set(i),n.uniformMatrix3fv(this.addr,!1,rd),Et(t,i)}}function vw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(wt(t,i))return;sd.set(i),n.uniformMatrix4fv(this.addr,!1,sd),Et(t,i)}}function xw(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function yw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;n.uniform2iv(this.addr,e),Et(t,e)}}function bw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;n.uniform3iv(this.addr,e),Et(t,e)}}function Mw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;n.uniform4iv(this.addr,e),Et(t,e)}}function Sw(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function ww(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;n.uniform2uiv(this.addr,e),Et(t,e)}}function Ew(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;n.uniform3uiv(this.addr,e),Et(t,e)}}function Tw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;n.uniform4uiv(this.addr,e),Et(t,e)}}function Cw(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2D(e||wg,s)}function Aw(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Tg,s)}function Rw(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Cg,s)}function Lw(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Eg,s)}function Pw(n){switch(n){case 5126:return hw;case 35664:return dw;case 35665:return pw;case 35666:return mw;case 35674:return gw;case 35675:return _w;case 35676:return vw;case 5124:case 35670:return xw;case 35667:case 35671:return yw;case 35668:case 35672:return bw;case 35669:case 35673:return Mw;case 5125:return Sw;case 36294:return ww;case 36295:return Ew;case 36296:return Tw;case 35678:case 36198:case 36298:case 36306:case 35682:return Cw;case 35679:case 36299:case 36307:return Aw;case 35680:case 36300:case 36308:case 36293:return Rw;case 36289:case 36303:case 36311:case 36292:return Lw}}function Dw(n,e){n.uniform1fv(this.addr,e)}function Iw(n,e){const t=Sr(e,this.size,2);n.uniform2fv(this.addr,t)}function Fw(n,e){const t=Sr(e,this.size,3);n.uniform3fv(this.addr,t)}function Nw(n,e){const t=Sr(e,this.size,4);n.uniform4fv(this.addr,t)}function Ow(n,e){const t=Sr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Uw(n,e){const t=Sr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function kw(n,e){const t=Sr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Bw(n,e){n.uniform1iv(this.addr,e)}function zw(n,e){n.uniform2iv(this.addr,e)}function Vw(n,e){n.uniform3iv(this.addr,e)}function Hw(n,e){n.uniform4iv(this.addr,e)}function Gw(n,e){n.uniform1uiv(this.addr,e)}function Ww(n,e){n.uniform2uiv(this.addr,e)}function jw(n,e){n.uniform3uiv(this.addr,e)}function $w(n,e){n.uniform4uiv(this.addr,e)}function qw(n,e,t){const i=this.cache,s=e.length,r=ol(t,s);wt(i,r)||(n.uniform1iv(this.addr,r),Et(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||wg,r[o])}function Xw(n,e,t){const i=this.cache,s=e.length,r=ol(t,s);wt(i,r)||(n.uniform1iv(this.addr,r),Et(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Tg,r[o])}function Kw(n,e,t){const i=this.cache,s=e.length,r=ol(t,s);wt(i,r)||(n.uniform1iv(this.addr,r),Et(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Cg,r[o])}function Yw(n,e,t){const i=this.cache,s=e.length,r=ol(t,s);wt(i,r)||(n.uniform1iv(this.addr,r),Et(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Eg,r[o])}function Zw(n){switch(n){case 5126:return Dw;case 35664:return Iw;case 35665:return Fw;case 35666:return Nw;case 35674:return Ow;case 35675:return Uw;case 35676:return kw;case 5124:case 35670:return Bw;case 35667:case 35671:return zw;case 35668:case 35672:return Vw;case 35669:case 35673:return Hw;case 5125:return Gw;case 36294:return Ww;case 36295:return jw;case 36296:return $w;case 35678:case 36198:case 36298:case 36306:case 35682:return qw;case 35679:case 36299:case 36307:return Xw;case 35680:case 36300:case 36308:case 36293:return Kw;case 36289:case 36303:case 36311:case 36292:return Yw}}class Jw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=Pw(t.type)}}class Qw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=Zw(t.type)}}class eE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const Jl=/(\w+)(\])?(\[|\.)?/g;function ad(n,e){n.seq.push(e),n.map[e.id]=e}function tE(n,e,t){const i=n.name,s=i.length;for(Jl.lastIndex=0;;){const r=Jl.exec(i),o=Jl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){ad(t,c===void 0?new Jw(a,n,e):new Qw(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new eE(a),ad(t,f)),t=f}}}class ua{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);tE(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function ld(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let nE=0;function iE(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function sE(n){switch(n){case fs:return["Linear","( value )"];case rt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function cd(n,e,t){const i=n.getShaderParameter(e,35713),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+iE(n.getShaderSource(e),o)}else return s}function rE(n,e){const t=sE(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function oE(n,e){let t;switch(e){case wb:t="Linear";break;case Eb:t="Reinhard";break;case Tb:t="OptimizedCineon";break;case Cb:t="ACESFilmic";break;case Ab:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function aE(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Vr).join(`
`)}function lE(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function cE(n,e){const t={},i=n.getProgramParameter(e,35721);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Vr(n){return n!==""}function ud(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const uE=/^[ \t]*#include +<([\w\d./]+)>/gm;function zc(n){return n.replace(uE,fE)}function fE(n,e){const t=ze[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return zc(t)}const hE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hd(n){return n.replace(hE,dE)}function dE(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function dd(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function pE(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ng?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===ig?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===zr&&(e="SHADOWMAP_TYPE_VSM"),e}function mE(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case dr:case pr:e="ENVMAP_TYPE_CUBE";break;case sl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function gE(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case pr:e="ENVMAP_MODE_REFRACTION";break}return e}function _E(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case og:e="ENVMAP_BLENDING_MULTIPLY";break;case Mb:e="ENVMAP_BLENDING_MIX";break;case Sb:e="ENVMAP_BLENDING_ADD";break}return e}function vE(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function xE(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=pE(t),c=mE(t),u=gE(t),f=_E(t),h=vE(t),m=t.isWebGL2?"":aE(t),v=lE(r),d=s.createProgram();let p,g,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[v].filter(Vr).join(`
`),p.length>0&&(p+=`
`),g=[m,v].filter(Vr).join(`
`),g.length>0&&(g+=`
`)):(p=[dd(t),"#define SHADER_NAME "+t.shaderName,v,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vr).join(`
`),g=[m,dd(t),"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ei?"#define TONE_MAPPING":"",t.toneMapping!==ei?ze.tonemapping_pars_fragment:"",t.toneMapping!==ei?oE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.encodings_pars_fragment,rE("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vr).join(`
`)),o=zc(o),o=ud(o,t),o=fd(o,t),a=zc(a),a=ud(a,t),a=fd(a,t),o=hd(o),a=hd(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",t.glslVersion===Oh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Oh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const b=_+p+o,w=_+g+a,S=ld(s,35633,b),P=ld(s,35632,w);if(s.attachShader(d,S),s.attachShader(d,P),t.index0AttributeName!==void 0?s.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(d,0,"position"),s.linkProgram(d),n.debug.checkShaderErrors){const T=s.getProgramInfoLog(d).trim(),D=s.getShaderInfoLog(S).trim(),V=s.getShaderInfoLog(P).trim();let W=!0,N=!0;if(s.getProgramParameter(d,35714)===!1){W=!1;const F=cd(s,S,"vertex"),ie=cd(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(d,35715)+`

Program Info Log: `+T+`
`+F+`
`+ie)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(D===""||V==="")&&(N=!1);N&&(this.diagnostics={runnable:W,programLog:T,vertexShader:{log:D,prefix:p},fragmentShader:{log:V,prefix:g}})}s.deleteShader(S),s.deleteShader(P);let L;this.getUniforms=function(){return L===void 0&&(L=new ua(s,d)),L};let x;return this.getAttributes=function(){return x===void 0&&(x=cE(s,d)),x},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(d),this.program=void 0},this.name=t.shaderName,this.id=nE++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=S,this.fragmentShader=P,this}let yE=0;class bE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new ME(e),t.set(e,i)),i}}class ME{constructor(e){this.id=yE++,this.code=e,this.usedTimes=0}}function SE(n,e,t,i,s,r,o){const a=new $u,l=new bE,c=[],u=s.isWebGL2,f=s.logarithmicDepthBuffer,h=s.vertexTextures;let m=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x,T,D,V,W){const N=V.fog,F=W.geometry,ie=x.isMeshStandardMaterial?V.environment:null,le=(x.isMeshStandardMaterial?t:e).get(x.envMap||ie),te=le&&le.mapping===sl?le.image.height:null,X=v[x.type];x.precision!==null&&(m=s.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const he=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,_e=he!==void 0?he.length:0;let ve=0;F.morphAttributes.position!==void 0&&(ve=1),F.morphAttributes.normal!==void 0&&(ve=2),F.morphAttributes.color!==void 0&&(ve=3);let K,G,Q,ee;if(X){const Ee=On[X];K=Ee.vertexShader,G=Ee.fragmentShader}else K=x.vertexShader,G=x.fragmentShader,l.update(x),Q=l.getVertexShaderID(x),ee=l.getFragmentShaderID(x);const B=n.getRenderTarget(),xe=x.alphaTest>0,me=x.clearcoat>0,be=x.iridescence>0;return{isWebGL2:u,shaderID:X,shaderName:x.type,vertexShader:K,fragmentShader:G,defines:x.defines,customVertexShaderID:Q,customFragmentShaderID:ee,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,instancing:W.isInstancedMesh===!0,instancingColor:W.isInstancedMesh===!0&&W.instanceColor!==null,supportsVertexTextures:h,outputEncoding:B===null?n.outputEncoding:B.isXRRenderTarget===!0?B.texture.encoding:fs,map:!!x.map,matcap:!!x.matcap,envMap:!!le,envMapMode:le&&le.mapping,envMapCubeUVHeight:te,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===qb,tangentSpaceNormalMap:x.normalMapType===cg,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===rt,clearcoat:me,clearcoatMap:me&&!!x.clearcoatMap,clearcoatRoughnessMap:me&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:me&&!!x.clearcoatNormalMap,iridescence:be,iridescenceMap:be&&!!x.iridescenceMap,iridescenceThicknessMap:be&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===ir,alphaMap:!!x.alphaMap,alphaTest:xe,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!F.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(x.map||x.bumpMap||x.normalMap||x.specularMap||x.alphaMap||x.emissiveMap||x.roughnessMap||x.metalnessMap||x.clearcoatNormalMap||x.iridescenceMap||x.iridescenceThicknessMap||x.transmission>0||x.transmissionMap||x.thicknessMap||x.specularIntensityMap||x.specularColorMap||x.sheen>0||x.sheenColorMap||x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!N,useFog:x.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:f,skinning:W.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:ve,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:x.toneMapped?n.toneMapping:ei,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===mi,flipSided:x.side===pn,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function p(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const D in x.defines)T.push(D),T.push(x.defines[D]);return x.isRawShaderMaterial===!1&&(g(T,x),_(T,x),T.push(n.outputEncoding)),T.push(x.customProgramCacheKey),T.join()}function g(x,T){x.push(T.precision),x.push(T.outputEncoding),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.combine),x.push(T.vertexUvs),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function _(x,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.map&&a.enable(4),T.matcap&&a.enable(5),T.envMap&&a.enable(6),T.lightMap&&a.enable(7),T.aoMap&&a.enable(8),T.emissiveMap&&a.enable(9),T.bumpMap&&a.enable(10),T.normalMap&&a.enable(11),T.objectSpaceNormalMap&&a.enable(12),T.tangentSpaceNormalMap&&a.enable(13),T.clearcoat&&a.enable(14),T.clearcoatMap&&a.enable(15),T.clearcoatRoughnessMap&&a.enable(16),T.clearcoatNormalMap&&a.enable(17),T.iridescence&&a.enable(18),T.iridescenceMap&&a.enable(19),T.iridescenceThicknessMap&&a.enable(20),T.displacementMap&&a.enable(21),T.specularMap&&a.enable(22),T.roughnessMap&&a.enable(23),T.metalnessMap&&a.enable(24),T.gradientMap&&a.enable(25),T.alphaMap&&a.enable(26),T.alphaTest&&a.enable(27),T.vertexColors&&a.enable(28),T.vertexAlphas&&a.enable(29),T.vertexUvs&&a.enable(30),T.vertexTangents&&a.enable(31),T.uvsVertexOnly&&a.enable(32),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.physicallyCorrectLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.specularIntensityMap&&a.enable(15),T.specularColorMap&&a.enable(16),T.transmission&&a.enable(17),T.transmissionMap&&a.enable(18),T.thicknessMap&&a.enable(19),T.sheen&&a.enable(20),T.sheenColorMap&&a.enable(21),T.sheenRoughnessMap&&a.enable(22),T.decodeVideoTexture&&a.enable(23),T.opaque&&a.enable(24),x.push(a.mask)}function b(x){const T=v[x.type];let D;if(T){const V=On[T];D=cM.clone(V.uniforms)}else D=x.uniforms;return D}function w(x,T){let D;for(let V=0,W=c.length;V<W;V++){const N=c[V];if(N.cacheKey===T){D=N,++D.usedTimes;break}}return D===void 0&&(D=new xE(n,T,x,r),c.push(D)),D}function S(x){if(--x.usedTimes===0){const T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),x.destroy()}}function P(x){l.remove(x)}function L(){l.dispose()}return{getParameters:d,getProgramCacheKey:p,getUniforms:b,acquireProgram:w,releaseProgram:S,releaseShaderCache:P,programs:c,dispose:L}}function wE(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function EE(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function pd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function md(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(f,h,m,v,d,p){let g=n[e];return g===void 0?(g={id:f.id,object:f,geometry:h,material:m,groupOrder:v,renderOrder:f.renderOrder,z:d,group:p},n[e]=g):(g.id=f.id,g.object=f,g.geometry=h,g.material=m,g.groupOrder=v,g.renderOrder=f.renderOrder,g.z=d,g.group=p),e++,g}function a(f,h,m,v,d,p){const g=o(f,h,m,v,d,p);m.transmission>0?i.push(g):m.transparent===!0?s.push(g):t.push(g)}function l(f,h,m,v,d,p){const g=o(f,h,m,v,d,p);m.transmission>0?i.unshift(g):m.transparent===!0?s.unshift(g):t.unshift(g)}function c(f,h){t.length>1&&t.sort(f||EE),i.length>1&&i.sort(h||pd),s.length>1&&s.sort(h||pd)}function u(){for(let f=e,h=n.length;f<h;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function TE(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new md,n.set(i,[o])):s>=r.length?(o=new md,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function CE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Z,color:new it};break;case"SpotLight":t={position:new Z,direction:new Z,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Z,color:new it,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Z,skyColor:new it,groundColor:new it};break;case"RectAreaLight":t={color:new it,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return n[e.id]=t,t}}}function AE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let RE=0;function LE(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function PE(n,e){const t=new CE,i=AE(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)s.probe.push(new Z);const r=new Z,o=new yt,a=new yt;function l(u,f){let h=0,m=0,v=0;for(let V=0;V<9;V++)s.probe[V].set(0,0,0);let d=0,p=0,g=0,_=0,b=0,w=0,S=0,P=0,L=0,x=0;u.sort(LE);const T=f!==!0?Math.PI:1;for(let V=0,W=u.length;V<W;V++){const N=u[V],F=N.color,ie=N.intensity,le=N.distance,te=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)h+=F.r*ie*T,m+=F.g*ie*T,v+=F.b*ie*T;else if(N.isLightProbe)for(let X=0;X<9;X++)s.probe[X].addScaledVector(N.sh.coefficients[X],ie);else if(N.isDirectionalLight){const X=t.get(N);if(X.color.copy(N.color).multiplyScalar(N.intensity*T),N.castShadow){const he=N.shadow,_e=i.get(N);_e.shadowBias=he.bias,_e.shadowNormalBias=he.normalBias,_e.shadowRadius=he.radius,_e.shadowMapSize=he.mapSize,s.directionalShadow[d]=_e,s.directionalShadowMap[d]=te,s.directionalShadowMatrix[d]=N.shadow.matrix,w++}s.directional[d]=X,d++}else if(N.isSpotLight){const X=t.get(N);X.position.setFromMatrixPosition(N.matrixWorld),X.color.copy(F).multiplyScalar(ie*T),X.distance=le,X.coneCos=Math.cos(N.angle),X.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),X.decay=N.decay,s.spot[g]=X;const he=N.shadow;if(N.map&&(s.spotLightMap[L]=N.map,L++,he.updateMatrices(N),N.castShadow&&x++),s.spotLightMatrix[g]=he.matrix,N.castShadow){const _e=i.get(N);_e.shadowBias=he.bias,_e.shadowNormalBias=he.normalBias,_e.shadowRadius=he.radius,_e.shadowMapSize=he.mapSize,s.spotShadow[g]=_e,s.spotShadowMap[g]=te,P++}g++}else if(N.isRectAreaLight){const X=t.get(N);X.color.copy(F).multiplyScalar(ie),X.halfWidth.set(N.width*.5,0,0),X.halfHeight.set(0,N.height*.5,0),s.rectArea[_]=X,_++}else if(N.isPointLight){const X=t.get(N);if(X.color.copy(N.color).multiplyScalar(N.intensity*T),X.distance=N.distance,X.decay=N.decay,N.castShadow){const he=N.shadow,_e=i.get(N);_e.shadowBias=he.bias,_e.shadowNormalBias=he.normalBias,_e.shadowRadius=he.radius,_e.shadowMapSize=he.mapSize,_e.shadowCameraNear=he.camera.near,_e.shadowCameraFar=he.camera.far,s.pointShadow[p]=_e,s.pointShadowMap[p]=te,s.pointShadowMatrix[p]=N.shadow.matrix,S++}s.point[p]=X,p++}else if(N.isHemisphereLight){const X=t.get(N);X.skyColor.copy(N.color).multiplyScalar(ie*T),X.groundColor.copy(N.groundColor).multiplyScalar(ie*T),s.hemi[b]=X,b++}}_>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ae.LTC_FLOAT_1,s.rectAreaLTC2=Ae.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Ae.LTC_HALF_1,s.rectAreaLTC2=Ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=h,s.ambient[1]=m,s.ambient[2]=v;const D=s.hash;(D.directionalLength!==d||D.pointLength!==p||D.spotLength!==g||D.rectAreaLength!==_||D.hemiLength!==b||D.numDirectionalShadows!==w||D.numPointShadows!==S||D.numSpotShadows!==P||D.numSpotMaps!==L)&&(s.directional.length=d,s.spot.length=g,s.rectArea.length=_,s.point.length=p,s.hemi.length=b,s.directionalShadow.length=w,s.directionalShadowMap.length=w,s.pointShadow.length=S,s.pointShadowMap.length=S,s.spotShadow.length=P,s.spotShadowMap.length=P,s.directionalShadowMatrix.length=w,s.pointShadowMatrix.length=S,s.spotLightMatrix.length=P+L-x,s.spotLightMap.length=L,s.numSpotLightShadowsWithMaps=x,D.directionalLength=d,D.pointLength=p,D.spotLength=g,D.rectAreaLength=_,D.hemiLength=b,D.numDirectionalShadows=w,D.numPointShadows=S,D.numSpotShadows=P,D.numSpotMaps=L,s.version=RE++)}function c(u,f){let h=0,m=0,v=0,d=0,p=0;const g=f.matrixWorldInverse;for(let _=0,b=u.length;_<b;_++){const w=u[_];if(w.isDirectionalLight){const S=s.directional[h];S.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),h++}else if(w.isSpotLight){const S=s.spot[v];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),v++}else if(w.isRectAreaLight){const S=s.rectArea[d];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(g),a.identity(),o.copy(w.matrixWorld),o.premultiply(g),a.extractRotation(o),S.halfWidth.set(w.width*.5,0,0),S.halfHeight.set(0,w.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),d++}else if(w.isPointLight){const S=s.point[m];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(g),m++}else if(w.isHemisphereLight){const S=s.hemi[p];S.direction.setFromMatrixPosition(w.matrixWorld),S.direction.transformDirection(g),p++}}}return{setup:l,setupView:c,state:s}}function gd(n,e){const t=new PE(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(f){i.push(f)}function a(f){s.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function DE(n,e){let t=new WeakMap;function i(r,o=0){const a=t.get(r);let l;return a===void 0?(l=new gd(n,e),t.set(r,[l])):o>=a.length?(l=new gd(n,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:i,dispose:s}}class IE extends wo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class FE extends wo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new Z,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const NE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,OE=`uniform sampler2D shadow_pass;
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
}`;function UE(n,e,t){let i=new qu;const s=new Be,r=new Be,o=new lt,a=new IE({depthPacking:$b}),l=new FE,c={},u=t.maxTextureSize,f={[Ei]:pn,[pn]:Ei,[mi]:mi},h=new ps({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:NE,fragmentShader:OE}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const v=new bs;v.setAttribute("position",new kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const d=new Dn(v,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ng,this.render=function(w,S,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const L=n.getRenderTarget(),x=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),D=n.state;D.setBlending(vi),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);for(let V=0,W=w.length;V<W;V++){const N=w[V],F=N.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);const ie=F.getFrameExtents();if(s.multiply(ie),r.copy(F.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ie.x),s.x=r.x*ie.x,F.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ie.y),s.y=r.y*ie.y,F.mapSize.y=r.y)),F.map===null){const te=this.type!==zr?{minFilter:$t,magFilter:$t}:{};F.map=new hs(s.x,s.y,te),F.map.texture.name=N.name+".shadowMap",F.camera.updateProjectionMatrix()}n.setRenderTarget(F.map),n.clear();const le=F.getViewportCount();for(let te=0;te<le;te++){const X=F.getViewport(te);o.set(r.x*X.x,r.y*X.y,r.x*X.z,r.y*X.w),D.viewport(o),F.updateMatrices(N,te),i=F.getFrustum(),b(S,P,F.camera,N,this.type)}F.isPointLightShadow!==!0&&this.type===zr&&g(F,P),F.needsUpdate=!1}p.needsUpdate=!1,n.setRenderTarget(L,x,T)};function g(w,S){const P=e.update(d);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new hs(s.x,s.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(S,null,P,h,d,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(S,null,P,m,d,null)}function _(w,S,P,L,x,T){let D=null;const V=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(V!==void 0)D=V;else if(D=P.isPointLight===!0?l:a,n.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const W=D.uuid,N=S.uuid;let F=c[W];F===void 0&&(F={},c[W]=F);let ie=F[N];ie===void 0&&(ie=D.clone(),F[N]=ie),D=ie}return D.visible=S.visible,D.wireframe=S.wireframe,T===zr?D.side=S.shadowSide!==null?S.shadowSide:S.side:D.side=S.shadowSide!==null?S.shadowSide:f[S.side],D.alphaMap=S.alphaMap,D.alphaTest=S.alphaTest,D.map=S.map,D.clipShadows=S.clipShadows,D.clippingPlanes=S.clippingPlanes,D.clipIntersection=S.clipIntersection,D.displacementMap=S.displacementMap,D.displacementScale=S.displacementScale,D.displacementBias=S.displacementBias,D.wireframeLinewidth=S.wireframeLinewidth,D.linewidth=S.linewidth,P.isPointLight===!0&&D.isMeshDistanceMaterial===!0&&(D.referencePosition.setFromMatrixPosition(P.matrixWorld),D.nearDistance=L,D.farDistance=x),D}function b(w,S,P,L,x){if(w.visible===!1)return;if(w.layers.test(S.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&x===zr)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);const V=e.update(w),W=w.material;if(Array.isArray(W)){const N=V.groups;for(let F=0,ie=N.length;F<ie;F++){const le=N[F],te=W[le.materialIndex];if(te&&te.visible){const X=_(w,te,L,P.near,P.far,x);n.renderBufferDirect(P,null,V,X,w,le)}}}else if(W.visible){const N=_(w,W,L,P.near,P.far,x);n.renderBufferDirect(P,null,V,N,w,null)}}const D=w.children;for(let V=0,W=D.length;V<W;V++)b(D[V],S,P,L,x)}}function kE(n,e,t){const i=t.isWebGL2;function s(){let j=!1;const de=new lt;let Se=null;const Re=new lt(0,0,0,0);return{setMask:function(Pe){Se!==Pe&&!j&&(n.colorMask(Pe,Pe,Pe,Pe),Se=Pe)},setLocked:function(Pe){j=Pe},setClear:function(Pe,We,ut,bt,en){en===!0&&(Pe*=bt,We*=bt,ut*=bt),de.set(Pe,We,ut,bt),Re.equals(de)===!1&&(n.clearColor(Pe,We,ut,bt),Re.copy(de))},reset:function(){j=!1,Se=null,Re.set(-1,0,0,0)}}}function r(){let j=!1,de=null,Se=null,Re=null;return{setTest:function(Pe){Pe?xe(2929):me(2929)},setMask:function(Pe){de!==Pe&&!j&&(n.depthMask(Pe),de=Pe)},setFunc:function(Pe){if(Se!==Pe){switch(Pe){case mb:n.depthFunc(512);break;case gb:n.depthFunc(519);break;case _b:n.depthFunc(513);break;case Ic:n.depthFunc(515);break;case vb:n.depthFunc(514);break;case xb:n.depthFunc(518);break;case yb:n.depthFunc(516);break;case bb:n.depthFunc(517);break;default:n.depthFunc(515)}Se=Pe}},setLocked:function(Pe){j=Pe},setClear:function(Pe){Re!==Pe&&(n.clearDepth(Pe),Re=Pe)},reset:function(){j=!1,de=null,Se=null,Re=null}}}function o(){let j=!1,de=null,Se=null,Re=null,Pe=null,We=null,ut=null,bt=null,en=null;return{setTest:function(nt){j||(nt?xe(2960):me(2960))},setMask:function(nt){de!==nt&&!j&&(n.stencilMask(nt),de=nt)},setFunc:function(nt,Vt,Tt){(Se!==nt||Re!==Vt||Pe!==Tt)&&(n.stencilFunc(nt,Vt,Tt),Se=nt,Re=Vt,Pe=Tt)},setOp:function(nt,Vt,Tt){(We!==nt||ut!==Vt||bt!==Tt)&&(n.stencilOp(nt,Vt,Tt),We=nt,ut=Vt,bt=Tt)},setLocked:function(nt){j=nt},setClear:function(nt){en!==nt&&(n.clearStencil(nt),en=nt)},reset:function(){j=!1,de=null,Se=null,Re=null,Pe=null,We=null,ut=null,bt=null,en=null}}}const a=new s,l=new r,c=new o,u=new WeakMap,f=new WeakMap;let h={},m={},v=new WeakMap,d=[],p=null,g=!1,_=null,b=null,w=null,S=null,P=null,L=null,x=null,T=!1,D=null,V=null,W=null,N=null,F=null;const ie=n.getParameter(35661);let le=!1,te=0;const X=n.getParameter(7938);X.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(X)[1]),le=te>=1):X.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),le=te>=2);let he=null,_e={};const ve=n.getParameter(3088),K=n.getParameter(2978),G=new lt().fromArray(ve),Q=new lt().fromArray(K);function ee(j,de,Se){const Re=new Uint8Array(4),Pe=n.createTexture();n.bindTexture(j,Pe),n.texParameteri(j,10241,9728),n.texParameteri(j,10240,9728);for(let We=0;We<Se;We++)n.texImage2D(de+We,0,6408,1,1,0,6408,5121,Re);return Pe}const B={};B[3553]=ee(3553,3553,1),B[34067]=ee(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),xe(2929),l.setFunc(Ic),ce(!1),k(rh),xe(2884),J(vi);function xe(j){h[j]!==!0&&(n.enable(j),h[j]=!0)}function me(j){h[j]!==!1&&(n.disable(j),h[j]=!1)}function be(j,de){return m[j]!==de?(n.bindFramebuffer(j,de),m[j]=de,i&&(j===36009&&(m[36160]=de),j===36160&&(m[36009]=de)),!0):!1}function ye(j,de){let Se=d,Re=!1;if(j)if(Se=v.get(de),Se===void 0&&(Se=[],v.set(de,Se)),j.isWebGLMultipleRenderTargets){const Pe=j.texture;if(Se.length!==Pe.length||Se[0]!==36064){for(let We=0,ut=Pe.length;We<ut;We++)Se[We]=36064+We;Se.length=Pe.length,Re=!0}}else Se[0]!==36064&&(Se[0]=36064,Re=!0);else Se[0]!==1029&&(Se[0]=1029,Re=!0);Re&&(t.isWebGL2?n.drawBuffers(Se):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Se))}function Ee(j){return p!==j?(n.useProgram(j),p=j,!0):!1}const C={[Gs]:32774,[sb]:32778,[rb]:32779};if(i)C[ch]=32775,C[uh]=32776;else{const j=e.get("EXT_blend_minmax");j!==null&&(C[ch]=j.MIN_EXT,C[uh]=j.MAX_EXT)}const R={[ob]:0,[ab]:1,[lb]:768,[sg]:770,[pb]:776,[hb]:774,[ub]:772,[cb]:769,[rg]:771,[db]:775,[fb]:773};function J(j,de,Se,Re,Pe,We,ut,bt){if(j===vi){g===!0&&(me(3042),g=!1);return}if(g===!1&&(xe(3042),g=!0),j!==ib){if(j!==_||bt!==T){if((b!==Gs||P!==Gs)&&(n.blendEquation(32774),b=Gs,P=Gs),bt)switch(j){case ir:n.blendFuncSeparate(1,771,1,771);break;case oh:n.blendFunc(1,1);break;case ah:n.blendFuncSeparate(0,769,0,1);break;case lh:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case ir:n.blendFuncSeparate(770,771,1,771);break;case oh:n.blendFunc(770,1);break;case ah:n.blendFuncSeparate(0,769,0,1);break;case lh:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}w=null,S=null,L=null,x=null,_=j,T=bt}return}Pe=Pe||de,We=We||Se,ut=ut||Re,(de!==b||Pe!==P)&&(n.blendEquationSeparate(C[de],C[Pe]),b=de,P=Pe),(Se!==w||Re!==S||We!==L||ut!==x)&&(n.blendFuncSeparate(R[Se],R[Re],R[We],R[ut]),w=Se,S=Re,L=We,x=ut),_=j,T=!1}function ue(j,de){j.side===mi?me(2884):xe(2884);let Se=j.side===pn;de&&(Se=!Se),ce(Se),j.blending===ir&&j.transparent===!1?J(vi):J(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.premultipliedAlpha),l.setFunc(j.depthFunc),l.setTest(j.depthTest),l.setMask(j.depthWrite),a.setMask(j.colorWrite);const Re=j.stencilWrite;c.setTest(Re),Re&&(c.setMask(j.stencilWriteMask),c.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),c.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),z(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?xe(32926):me(32926)}function ce(j){D!==j&&(j?n.frontFace(2304):n.frontFace(2305),D=j)}function k(j){j!==tb?(xe(2884),j!==V&&(j===rh?n.cullFace(1029):j===nb?n.cullFace(1028):n.cullFace(1032))):me(2884),V=j}function H(j){j!==W&&(le&&n.lineWidth(j),W=j)}function z(j,de,Se){j?(xe(32823),(N!==de||F!==Se)&&(n.polygonOffset(de,Se),N=de,F=Se)):me(32823)}function q(j){j?xe(3089):me(3089)}function O(j){j===void 0&&(j=33984+ie-1),he!==j&&(n.activeTexture(j),he=j)}function M(j,de,Se){Se===void 0&&(he===null?Se=33984+ie-1:Se=he);let Re=_e[Se];Re===void 0&&(Re={type:void 0,texture:void 0},_e[Se]=Re),(Re.type!==j||Re.texture!==de)&&(he!==Se&&(n.activeTexture(Se),he=Se),n.bindTexture(j,de||B[j]),Re.type=j,Re.texture=de)}function y(){const j=_e[he];j!==void 0&&j.type!==void 0&&(n.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function I(){try{n.compressedTexImage2D.apply(n,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function $(){try{n.compressedTexImage3D.apply(n,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function re(){try{n.texSubImage2D.apply(n,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function oe(){try{n.texSubImage3D.apply(n,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Y(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function E(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function U(){try{n.texStorage2D.apply(n,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function fe(){try{n.texStorage3D.apply(n,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function we(){try{n.texImage2D.apply(n,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Me(){try{n.texImage3D.apply(n,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ce(j){G.equals(j)===!1&&(n.scissor(j.x,j.y,j.z,j.w),G.copy(j))}function Te(j){Q.equals(j)===!1&&(n.viewport(j.x,j.y,j.z,j.w),Q.copy(j))}function De(j,de){let Se=f.get(de);Se===void 0&&(Se=new WeakMap,f.set(de,Se));let Re=Se.get(j);Re===void 0&&(Re=n.getUniformBlockIndex(de,j.name),Se.set(j,Re))}function Oe(j,de){const Re=f.get(de).get(j);u.get(de)!==Re&&(n.uniformBlockBinding(de,Re,j.__bindingPointIndex),u.set(de,Re))}function $e(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},he=null,_e={},m={},v=new WeakMap,d=[],p=null,g=!1,_=null,b=null,w=null,S=null,P=null,L=null,x=null,T=!1,D=null,V=null,W=null,N=null,F=null,G.set(0,0,n.canvas.width,n.canvas.height),Q.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:xe,disable:me,bindFramebuffer:be,drawBuffers:ye,useProgram:Ee,setBlending:J,setMaterial:ue,setFlipSided:ce,setCullFace:k,setLineWidth:H,setPolygonOffset:z,setScissorTest:q,activeTexture:O,bindTexture:M,unbindTexture:y,compressedTexImage2D:I,compressedTexImage3D:$,texImage2D:we,texImage3D:Me,updateUBOMapping:De,uniformBlockBinding:Oe,texStorage2D:U,texStorage3D:fe,texSubImage2D:re,texSubImage3D:oe,compressedTexSubImage2D:Y,compressedTexSubImage3D:E,scissor:Ce,viewport:Te,reset:$e}}function BE(n,e,t,i,s,r,o){const a=s.isWebGL2,l=s.maxTextures,c=s.maxCubemapSize,u=s.maxTextureSize,f=s.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let d;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(M,y){return g?new OffscreenCanvas(M,y):Da("canvas")}function b(M,y,I,$){let re=1;if((M.width>$||M.height>$)&&(re=$/Math.max(M.width,M.height)),re<1||y===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){const oe=y?Bc:Math.floor,Y=oe(re*M.width),E=oe(re*M.height);d===void 0&&(d=_(Y,E));const U=I?_(Y,E):d;return U.width=Y,U.height=E,U.getContext("2d").drawImage(M,0,0,Y,E),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+Y+"x"+E+")."),U}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function w(M){return kh(M.width)&&kh(M.height)}function S(M){return a?!1:M.wrapS!==Ln||M.wrapT!==Ln||M.minFilter!==$t&&M.minFilter!==bn}function P(M,y){return M.generateMipmaps&&y&&M.minFilter!==$t&&M.minFilter!==bn}function L(M){n.generateMipmap(M)}function x(M,y,I,$,re=!1){if(a===!1)return y;if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let oe=y;return y===6403&&(I===5126&&(oe=33326),I===5131&&(oe=33325),I===5121&&(oe=33321)),y===33319&&(I===5126&&(oe=33328),I===5131&&(oe=33327),I===5121&&(oe=33323)),y===6408&&(I===5126&&(oe=34836),I===5131&&(oe=34842),I===5121&&(oe=$===rt&&re===!1?35907:32856),I===32819&&(oe=32854),I===32820&&(oe=32855)),(oe===33325||oe===33326||oe===33327||oe===33328||oe===34842||oe===34836)&&e.get("EXT_color_buffer_float"),oe}function T(M,y,I){return P(M,I)===!0||M.isFramebufferTexture&&M.minFilter!==$t&&M.minFilter!==bn?Math.log2(Math.max(y.width,y.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?y.mipmaps.length:1}function D(M){return M===$t||M===fh||M===bl?9728:9729}function V(M){const y=M.target;y.removeEventListener("dispose",V),N(y),y.isVideoTexture&&v.delete(y)}function W(M){const y=M.target;y.removeEventListener("dispose",W),ie(y)}function N(M){const y=i.get(M);if(y.__webglInit===void 0)return;const I=M.source,$=p.get(I);if($){const re=$[y.__cacheKey];re.usedTimes--,re.usedTimes===0&&F(M),Object.keys($).length===0&&p.delete(I)}i.remove(M)}function F(M){const y=i.get(M);n.deleteTexture(y.__webglTexture);const I=M.source,$=p.get(I);delete $[y.__cacheKey],o.memory.textures--}function ie(M){const y=M.texture,I=i.get(M),$=i.get(y);if($.__webglTexture!==void 0&&(n.deleteTexture($.__webglTexture),o.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let re=0;re<6;re++)n.deleteFramebuffer(I.__webglFramebuffer[re]),I.__webglDepthbuffer&&n.deleteRenderbuffer(I.__webglDepthbuffer[re]);else{if(n.deleteFramebuffer(I.__webglFramebuffer),I.__webglDepthbuffer&&n.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&n.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let re=0;re<I.__webglColorRenderbuffer.length;re++)I.__webglColorRenderbuffer[re]&&n.deleteRenderbuffer(I.__webglColorRenderbuffer[re]);I.__webglDepthRenderbuffer&&n.deleteRenderbuffer(I.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let re=0,oe=y.length;re<oe;re++){const Y=i.get(y[re]);Y.__webglTexture&&(n.deleteTexture(Y.__webglTexture),o.memory.textures--),i.remove(y[re])}i.remove(y),i.remove(M)}let le=0;function te(){le=0}function X(){const M=le;return M>=l&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+l),le+=1,M}function he(M){const y=[];return y.push(M.wrapS),y.push(M.wrapT),y.push(M.wrapR||0),y.push(M.magFilter),y.push(M.minFilter),y.push(M.anisotropy),y.push(M.internalFormat),y.push(M.format),y.push(M.type),y.push(M.generateMipmaps),y.push(M.premultiplyAlpha),y.push(M.flipY),y.push(M.unpackAlignment),y.push(M.encoding),y.join()}function _e(M,y){const I=i.get(M);if(M.isVideoTexture&&q(M),M.isRenderTargetTexture===!1&&M.version>0&&I.__version!==M.version){const $=M.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{me(I,M,y);return}}t.bindTexture(3553,I.__webglTexture,33984+y)}function ve(M,y){const I=i.get(M);if(M.version>0&&I.__version!==M.version){me(I,M,y);return}t.bindTexture(35866,I.__webglTexture,33984+y)}function K(M,y){const I=i.get(M);if(M.version>0&&I.__version!==M.version){me(I,M,y);return}t.bindTexture(32879,I.__webglTexture,33984+y)}function G(M,y){const I=i.get(M);if(M.version>0&&I.__version!==M.version){be(I,M,y);return}t.bindTexture(34067,I.__webglTexture,33984+y)}const Q={[Oc]:10497,[Ln]:33071,[Uc]:33648},ee={[$t]:9728,[fh]:9984,[bl]:9986,[bn]:9729,[Rb]:9985,[uo]:9987};function B(M,y,I){if(I?(n.texParameteri(M,10242,Q[y.wrapS]),n.texParameteri(M,10243,Q[y.wrapT]),(M===32879||M===35866)&&n.texParameteri(M,32882,Q[y.wrapR]),n.texParameteri(M,10240,ee[y.magFilter]),n.texParameteri(M,10241,ee[y.minFilter])):(n.texParameteri(M,10242,33071),n.texParameteri(M,10243,33071),(M===32879||M===35866)&&n.texParameteri(M,32882,33071),(y.wrapS!==Ln||y.wrapT!==Ln)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(M,10240,D(y.magFilter)),n.texParameteri(M,10241,D(y.minFilter)),y.minFilter!==$t&&y.minFilter!==bn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const $=e.get("EXT_texture_filter_anisotropic");if(y.magFilter===$t||y.minFilter!==bl&&y.minFilter!==uo||y.type===qi&&e.has("OES_texture_float_linear")===!1||a===!1&&y.type===fo&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||i.get(y).__currentAnisotropy)&&(n.texParameterf(M,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy)}}function xe(M,y){let I=!1;M.__webglInit===void 0&&(M.__webglInit=!0,y.addEventListener("dispose",V));const $=y.source;let re=p.get($);re===void 0&&(re={},p.set($,re));const oe=he(y);if(oe!==M.__cacheKey){re[oe]===void 0&&(re[oe]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,I=!0),re[oe].usedTimes++;const Y=re[M.__cacheKey];Y!==void 0&&(re[M.__cacheKey].usedTimes--,Y.usedTimes===0&&F(y)),M.__cacheKey=oe,M.__webglTexture=re[oe].texture}return I}function me(M,y,I){let $=3553;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&($=35866),y.isData3DTexture&&($=32879);const re=xe(M,y),oe=y.source;t.bindTexture($,M.__webglTexture,33984+I);const Y=i.get(oe);if(oe.version!==Y.__version||re===!0){t.activeTexture(33984+I),n.pixelStorei(37440,y.flipY),n.pixelStorei(37441,y.premultiplyAlpha),n.pixelStorei(3317,y.unpackAlignment),n.pixelStorei(37443,0);const E=S(y)&&w(y.image)===!1;let U=b(y.image,E,!1,u);U=O(y,U);const fe=w(U)||a,we=r.convert(y.format,y.encoding);let Me=r.convert(y.type),Ce=x(y.internalFormat,we,Me,y.encoding,y.isVideoTexture);B($,y,fe);let Te;const De=y.mipmaps,Oe=a&&y.isVideoTexture!==!0,$e=Y.__version===void 0||re===!0,j=T(y,U,fe);if(y.isDepthTexture)Ce=6402,a?y.type===qi?Ce=36012:y.type===$i?Ce=33190:y.type===sr?Ce=35056:Ce=33189:y.type===qi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===ns&&Ce===6402&&y.type!==lg&&y.type!==$i&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=$i,Me=r.convert(y.type)),y.format===mr&&Ce===6402&&(Ce=34041,y.type!==sr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=sr,Me=r.convert(y.type))),$e&&(Oe?t.texStorage2D(3553,1,Ce,U.width,U.height):t.texImage2D(3553,0,Ce,U.width,U.height,0,we,Me,null));else if(y.isDataTexture)if(De.length>0&&fe){Oe&&$e&&t.texStorage2D(3553,j,Ce,De[0].width,De[0].height);for(let de=0,Se=De.length;de<Se;de++)Te=De[de],Oe?t.texSubImage2D(3553,de,0,0,Te.width,Te.height,we,Me,Te.data):t.texImage2D(3553,de,Ce,Te.width,Te.height,0,we,Me,Te.data);y.generateMipmaps=!1}else Oe?($e&&t.texStorage2D(3553,j,Ce,U.width,U.height),t.texSubImage2D(3553,0,0,0,U.width,U.height,we,Me,U.data)):t.texImage2D(3553,0,Ce,U.width,U.height,0,we,Me,U.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Oe&&$e&&t.texStorage3D(35866,j,Ce,De[0].width,De[0].height,U.depth);for(let de=0,Se=De.length;de<Se;de++)Te=De[de],y.format!==Pn?we!==null?Oe?t.compressedTexSubImage3D(35866,de,0,0,0,Te.width,Te.height,U.depth,we,Te.data,0,0):t.compressedTexImage3D(35866,de,Ce,Te.width,Te.height,U.depth,0,Te.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?t.texSubImage3D(35866,de,0,0,0,Te.width,Te.height,U.depth,we,Me,Te.data):t.texImage3D(35866,de,Ce,Te.width,Te.height,U.depth,0,we,Me,Te.data)}else{Oe&&$e&&t.texStorage2D(3553,j,Ce,De[0].width,De[0].height);for(let de=0,Se=De.length;de<Se;de++)Te=De[de],y.format!==Pn?we!==null?Oe?t.compressedTexSubImage2D(3553,de,0,0,Te.width,Te.height,we,Te.data):t.compressedTexImage2D(3553,de,Ce,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?t.texSubImage2D(3553,de,0,0,Te.width,Te.height,we,Me,Te.data):t.texImage2D(3553,de,Ce,Te.width,Te.height,0,we,Me,Te.data)}else if(y.isDataArrayTexture)Oe?($e&&t.texStorage3D(35866,j,Ce,U.width,U.height,U.depth),t.texSubImage3D(35866,0,0,0,0,U.width,U.height,U.depth,we,Me,U.data)):t.texImage3D(35866,0,Ce,U.width,U.height,U.depth,0,we,Me,U.data);else if(y.isData3DTexture)Oe?($e&&t.texStorage3D(32879,j,Ce,U.width,U.height,U.depth),t.texSubImage3D(32879,0,0,0,0,U.width,U.height,U.depth,we,Me,U.data)):t.texImage3D(32879,0,Ce,U.width,U.height,U.depth,0,we,Me,U.data);else if(y.isFramebufferTexture){if($e)if(Oe)t.texStorage2D(3553,j,Ce,U.width,U.height);else{let de=U.width,Se=U.height;for(let Re=0;Re<j;Re++)t.texImage2D(3553,Re,Ce,de,Se,0,we,Me,null),de>>=1,Se>>=1}}else if(De.length>0&&fe){Oe&&$e&&t.texStorage2D(3553,j,Ce,De[0].width,De[0].height);for(let de=0,Se=De.length;de<Se;de++)Te=De[de],Oe?t.texSubImage2D(3553,de,0,0,we,Me,Te):t.texImage2D(3553,de,Ce,we,Me,Te);y.generateMipmaps=!1}else Oe?($e&&t.texStorage2D(3553,j,Ce,U.width,U.height),t.texSubImage2D(3553,0,0,0,we,Me,U)):t.texImage2D(3553,0,Ce,we,Me,U);P(y,fe)&&L($),Y.__version=oe.version,y.onUpdate&&y.onUpdate(y)}M.__version=y.version}function be(M,y,I){if(y.image.length!==6)return;const $=xe(M,y),re=y.source;t.bindTexture(34067,M.__webglTexture,33984+I);const oe=i.get(re);if(re.version!==oe.__version||$===!0){t.activeTexture(33984+I),n.pixelStorei(37440,y.flipY),n.pixelStorei(37441,y.premultiplyAlpha),n.pixelStorei(3317,y.unpackAlignment),n.pixelStorei(37443,0);const Y=y.isCompressedTexture||y.image[0].isCompressedTexture,E=y.image[0]&&y.image[0].isDataTexture,U=[];for(let de=0;de<6;de++)!Y&&!E?U[de]=b(y.image[de],!1,!0,c):U[de]=E?y.image[de].image:y.image[de],U[de]=O(y,U[de]);const fe=U[0],we=w(fe)||a,Me=r.convert(y.format,y.encoding),Ce=r.convert(y.type),Te=x(y.internalFormat,Me,Ce,y.encoding),De=a&&y.isVideoTexture!==!0,Oe=oe.__version===void 0||$===!0;let $e=T(y,fe,we);B(34067,y,we);let j;if(Y){De&&Oe&&t.texStorage2D(34067,$e,Te,fe.width,fe.height);for(let de=0;de<6;de++){j=U[de].mipmaps;for(let Se=0;Se<j.length;Se++){const Re=j[Se];y.format!==Pn?Me!==null?De?t.compressedTexSubImage2D(34069+de,Se,0,0,Re.width,Re.height,Me,Re.data):t.compressedTexImage2D(34069+de,Se,Te,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?t.texSubImage2D(34069+de,Se,0,0,Re.width,Re.height,Me,Ce,Re.data):t.texImage2D(34069+de,Se,Te,Re.width,Re.height,0,Me,Ce,Re.data)}}}else{j=y.mipmaps,De&&Oe&&(j.length>0&&$e++,t.texStorage2D(34067,$e,Te,U[0].width,U[0].height));for(let de=0;de<6;de++)if(E){De?t.texSubImage2D(34069+de,0,0,0,U[de].width,U[de].height,Me,Ce,U[de].data):t.texImage2D(34069+de,0,Te,U[de].width,U[de].height,0,Me,Ce,U[de].data);for(let Se=0;Se<j.length;Se++){const Pe=j[Se].image[de].image;De?t.texSubImage2D(34069+de,Se+1,0,0,Pe.width,Pe.height,Me,Ce,Pe.data):t.texImage2D(34069+de,Se+1,Te,Pe.width,Pe.height,0,Me,Ce,Pe.data)}}else{De?t.texSubImage2D(34069+de,0,0,0,Me,Ce,U[de]):t.texImage2D(34069+de,0,Te,Me,Ce,U[de]);for(let Se=0;Se<j.length;Se++){const Re=j[Se];De?t.texSubImage2D(34069+de,Se+1,0,0,Me,Ce,Re.image[de]):t.texImage2D(34069+de,Se+1,Te,Me,Ce,Re.image[de])}}}P(y,we)&&L(34067),oe.__version=re.version,y.onUpdate&&y.onUpdate(y)}M.__version=y.version}function ye(M,y,I,$,re){const oe=r.convert(I.format,I.encoding),Y=r.convert(I.type),E=x(I.internalFormat,oe,Y,I.encoding);i.get(y).__hasExternalTextures||(re===32879||re===35866?t.texImage3D(re,0,E,y.width,y.height,y.depth,0,oe,Y,null):t.texImage2D(re,0,E,y.width,y.height,0,oe,Y,null)),t.bindFramebuffer(36160,M),z(y)?h.framebufferTexture2DMultisampleEXT(36160,$,re,i.get(I).__webglTexture,0,H(y)):(re===3553||re>=34069&&re<=34074)&&n.framebufferTexture2D(36160,$,re,i.get(I).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ee(M,y,I){if(n.bindRenderbuffer(36161,M),y.depthBuffer&&!y.stencilBuffer){let $=33189;if(I||z(y)){const re=y.depthTexture;re&&re.isDepthTexture&&(re.type===qi?$=36012:re.type===$i&&($=33190));const oe=H(y);z(y)?h.renderbufferStorageMultisampleEXT(36161,oe,$,y.width,y.height):n.renderbufferStorageMultisample(36161,oe,$,y.width,y.height)}else n.renderbufferStorage(36161,$,y.width,y.height);n.framebufferRenderbuffer(36160,36096,36161,M)}else if(y.depthBuffer&&y.stencilBuffer){const $=H(y);I&&z(y)===!1?n.renderbufferStorageMultisample(36161,$,35056,y.width,y.height):z(y)?h.renderbufferStorageMultisampleEXT(36161,$,35056,y.width,y.height):n.renderbufferStorage(36161,34041,y.width,y.height),n.framebufferRenderbuffer(36160,33306,36161,M)}else{const $=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let re=0;re<$.length;re++){const oe=$[re],Y=r.convert(oe.format,oe.encoding),E=r.convert(oe.type),U=x(oe.internalFormat,Y,E,oe.encoding),fe=H(y);I&&z(y)===!1?n.renderbufferStorageMultisample(36161,fe,U,y.width,y.height):z(y)?h.renderbufferStorageMultisampleEXT(36161,fe,U,y.width,y.height):n.renderbufferStorage(36161,U,y.width,y.height)}}n.bindRenderbuffer(36161,null)}function C(M,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,M),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),_e(y.depthTexture,0);const $=i.get(y.depthTexture).__webglTexture,re=H(y);if(y.depthTexture.format===ns)z(y)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,$,0,re):n.framebufferTexture2D(36160,36096,3553,$,0);else if(y.depthTexture.format===mr)z(y)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,$,0,re):n.framebufferTexture2D(36160,33306,3553,$,0);else throw new Error("Unknown depthTexture format")}function R(M){const y=i.get(M),I=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!y.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");C(y.__webglFramebuffer,M)}else if(I){y.__webglDepthbuffer=[];for(let $=0;$<6;$++)t.bindFramebuffer(36160,y.__webglFramebuffer[$]),y.__webglDepthbuffer[$]=n.createRenderbuffer(),Ee(y.__webglDepthbuffer[$],M,!1)}else t.bindFramebuffer(36160,y.__webglFramebuffer),y.__webglDepthbuffer=n.createRenderbuffer(),Ee(y.__webglDepthbuffer,M,!1);t.bindFramebuffer(36160,null)}function J(M,y,I){const $=i.get(M);y!==void 0&&ye($.__webglFramebuffer,M,M.texture,36064,3553),I!==void 0&&R(M)}function ue(M){const y=M.texture,I=i.get(M),$=i.get(y);M.addEventListener("dispose",W),M.isWebGLMultipleRenderTargets!==!0&&($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=y.version,o.memory.textures++);const re=M.isWebGLCubeRenderTarget===!0,oe=M.isWebGLMultipleRenderTargets===!0,Y=w(M)||a;if(re){I.__webglFramebuffer=[];for(let E=0;E<6;E++)I.__webglFramebuffer[E]=n.createFramebuffer()}else{if(I.__webglFramebuffer=n.createFramebuffer(),oe)if(s.drawBuffers){const E=M.texture;for(let U=0,fe=E.length;U<fe;U++){const we=i.get(E[U]);we.__webglTexture===void 0&&(we.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&M.samples>0&&z(M)===!1){const E=oe?y:[y];I.__webglMultisampledFramebuffer=n.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,I.__webglMultisampledFramebuffer);for(let U=0;U<E.length;U++){const fe=E[U];I.__webglColorRenderbuffer[U]=n.createRenderbuffer(),n.bindRenderbuffer(36161,I.__webglColorRenderbuffer[U]);const we=r.convert(fe.format,fe.encoding),Me=r.convert(fe.type),Ce=x(fe.internalFormat,we,Me,fe.encoding,M.isXRRenderTarget===!0),Te=H(M);n.renderbufferStorageMultisample(36161,Te,Ce,M.width,M.height),n.framebufferRenderbuffer(36160,36064+U,36161,I.__webglColorRenderbuffer[U])}n.bindRenderbuffer(36161,null),M.depthBuffer&&(I.__webglDepthRenderbuffer=n.createRenderbuffer(),Ee(I.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(36160,null)}}if(re){t.bindTexture(34067,$.__webglTexture),B(34067,y,Y);for(let E=0;E<6;E++)ye(I.__webglFramebuffer[E],M,y,36064,34069+E);P(y,Y)&&L(34067),t.unbindTexture()}else if(oe){const E=M.texture;for(let U=0,fe=E.length;U<fe;U++){const we=E[U],Me=i.get(we);t.bindTexture(3553,Me.__webglTexture),B(3553,we,Y),ye(I.__webglFramebuffer,M,we,36064+U,3553),P(we,Y)&&L(3553)}t.unbindTexture()}else{let E=3553;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(a?E=M.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(E,$.__webglTexture),B(E,y,Y),ye(I.__webglFramebuffer,M,y,36064,E),P(y,Y)&&L(E),t.unbindTexture()}M.depthBuffer&&R(M)}function ce(M){const y=w(M)||a,I=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let $=0,re=I.length;$<re;$++){const oe=I[$];if(P(oe,y)){const Y=M.isWebGLCubeRenderTarget?34067:3553,E=i.get(oe).__webglTexture;t.bindTexture(Y,E),L(Y),t.unbindTexture()}}}function k(M){if(a&&M.samples>0&&z(M)===!1){const y=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],I=M.width,$=M.height;let re=16384;const oe=[],Y=M.stencilBuffer?33306:36096,E=i.get(M),U=M.isWebGLMultipleRenderTargets===!0;if(U)for(let fe=0;fe<y.length;fe++)t.bindFramebuffer(36160,E.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+fe,36161,null),t.bindFramebuffer(36160,E.__webglFramebuffer),n.framebufferTexture2D(36009,36064+fe,3553,null,0);t.bindFramebuffer(36008,E.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,E.__webglFramebuffer);for(let fe=0;fe<y.length;fe++){oe.push(36064+fe),M.depthBuffer&&oe.push(Y);const we=E.__ignoreDepthValues!==void 0?E.__ignoreDepthValues:!1;if(we===!1&&(M.depthBuffer&&(re|=256),M.stencilBuffer&&(re|=1024)),U&&n.framebufferRenderbuffer(36008,36064,36161,E.__webglColorRenderbuffer[fe]),we===!0&&(n.invalidateFramebuffer(36008,[Y]),n.invalidateFramebuffer(36009,[Y])),U){const Me=i.get(y[fe]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,Me,0)}n.blitFramebuffer(0,0,I,$,0,0,I,$,re,9728),m&&n.invalidateFramebuffer(36008,oe)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),U)for(let fe=0;fe<y.length;fe++){t.bindFramebuffer(36160,E.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+fe,36161,E.__webglColorRenderbuffer[fe]);const we=i.get(y[fe]).__webglTexture;t.bindFramebuffer(36160,E.__webglFramebuffer),n.framebufferTexture2D(36009,36064+fe,3553,we,0)}t.bindFramebuffer(36009,E.__webglMultisampledFramebuffer)}}function H(M){return Math.min(f,M.samples)}function z(M){const y=i.get(M);return a&&M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function q(M){const y=o.render.frame;v.get(M)!==y&&(v.set(M,y),M.update())}function O(M,y){const I=M.encoding,$=M.format,re=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===kc||I!==fs&&(I===rt?a===!1?e.has("EXT_sRGB")===!0&&$===Pn?(M.format=kc,M.minFilter=bn,M.generateMipmaps=!1):y=hg.sRGBToLinear(y):($!==Pn||re!==us)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",I)),y}this.allocateTextureUnit=X,this.resetTextureUnits=te,this.setTexture2D=_e,this.setTexture2DArray=ve,this.setTexture3D=K,this.setTextureCube=G,this.rebindTextures=J,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=k,this.setupDepthRenderbuffer=R,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=z}function zE(n,e,t){const i=t.isWebGL2;function s(r,o=null){let a;if(r===us)return 5121;if(r===Ib)return 32819;if(r===Fb)return 32820;if(r===Lb)return 5120;if(r===Pb)return 5122;if(r===lg)return 5123;if(r===Db)return 5124;if(r===$i)return 5125;if(r===qi)return 5126;if(r===fo)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Nb)return 6406;if(r===Pn)return 6408;if(r===Ob)return 6409;if(r===Ub)return 6410;if(r===ns)return 6402;if(r===mr)return 34041;if(r===kc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===kb)return 6403;if(r===Bb)return 36244;if(r===zb)return 33319;if(r===Vb)return 33320;if(r===Hb)return 36249;if(r===Ml||r===Sl||r===wl||r===El)if(o===rt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Ml)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Sl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===wl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===El)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Ml)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Sl)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===wl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===El)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===hh||r===dh||r===ph||r===mh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===hh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===dh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ph)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===mh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Gb)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===gh||r===_h)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===gh)return o===rt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===_h)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===vh||r===xh||r===yh||r===bh||r===Mh||r===Sh||r===wh||r===Eh||r===Th||r===Ch||r===Ah||r===Rh||r===Lh||r===Ph)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===vh)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===xh)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===yh)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===bh)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Mh)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Sh)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===wh)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Eh)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Th)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ch)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ah)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Rh)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Lh)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ph)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Tl)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Tl)return o===rt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===Wb||r===Dh||r===Ih||r===Fh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Tl)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Dh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ih)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Fh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===sr?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}class VE extends cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}let qs=class extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}};const HE={type:"move"};class Ql{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const d of e.hand.values()){const p=t.getJointPose(d,i),g=this._getHandJoint(c,d);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=p.radius),g.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,v=.005;c.inputState.pinching&&h>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(HE)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new qs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class GE extends mn{constructor(e,t,i,s,r,o,a,l,c,u){if(u=u!==void 0?u:ns,u!==ns&&u!==mr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ns&&(i=$i),i===void 0&&u===mr&&(i=sr),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:$t,this.minFilter=l!==void 0?l:$t,this.flipY=!1,this.generateMipmaps=!1}}class WE extends ys{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,m=null,v=null;const d=t.getContextAttributes();let p=null,g=null;const _=[],b=[],w=new Set,S=new Map,P=new cn;P.layers.enable(1),P.viewport=new lt;const L=new cn;L.layers.enable(2),L.viewport=new lt;const x=[P,L],T=new VE;T.layers.enable(1),T.layers.enable(2);let D=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let G=_[K];return G===void 0&&(G=new Ql,_[K]=G),G.getTargetRaySpace()},this.getControllerGrip=function(K){let G=_[K];return G===void 0&&(G=new Ql,_[K]=G),G.getGripSpace()},this.getHand=function(K){let G=_[K];return G===void 0&&(G=new Ql,_[K]=G),G.getHandSpace()};function W(K){const G=b.indexOf(K.inputSource);if(G===-1)return;const Q=_[G];Q!==void 0&&Q.dispatchEvent({type:K.type,data:K.inputSource})}function N(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",F);for(let K=0;K<_.length;K++){const G=b[K];G!==null&&(b[K]=null,_[K].disconnect(G))}D=null,V=null,e.setRenderTarget(p),m=null,h=null,f=null,s=null,g=null,ve.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",N),s.addEventListener("inputsourceschange",F),d.xrCompatible!==!0&&await t.makeXRCompatible(),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const G={antialias:s.renderState.layers===void 0?d.antialias:!0,alpha:d.alpha,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,G),s.updateRenderState({baseLayer:m}),g=new hs(m.framebufferWidth,m.framebufferHeight,{format:Pn,type:us,encoding:e.outputEncoding,stencilBuffer:d.stencil})}else{let G=null,Q=null,ee=null;d.depth&&(ee=d.stencil?35056:33190,G=d.stencil?mr:ns,Q=d.stencil?sr:$i);const B={colorFormat:32856,depthFormat:ee,scaleFactor:r};f=new XRWebGLBinding(s,t),h=f.createProjectionLayer(B),s.updateRenderState({layers:[h]}),g=new hs(h.textureWidth,h.textureHeight,{format:Pn,type:us,depthTexture:new GE(h.textureWidth,h.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,G),stencilBuffer:d.stencil,encoding:e.outputEncoding,samples:d.antialias?4:0});const xe=e.properties.get(g);xe.__ignoreDepthValues=h.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ve.setContext(s),ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function F(K){for(let G=0;G<K.removed.length;G++){const Q=K.removed[G],ee=b.indexOf(Q);ee>=0&&(b[ee]=null,_[ee].disconnect(Q))}for(let G=0;G<K.added.length;G++){const Q=K.added[G];let ee=b.indexOf(Q);if(ee===-1){for(let xe=0;xe<_.length;xe++)if(xe>=b.length){b.push(Q),ee=xe;break}else if(b[xe]===null){b[xe]=Q,ee=xe;break}if(ee===-1)break}const B=_[ee];B&&B.connect(Q)}}const ie=new Z,le=new Z;function te(K,G,Q){ie.setFromMatrixPosition(G.matrixWorld),le.setFromMatrixPosition(Q.matrixWorld);const ee=ie.distanceTo(le),B=G.projectionMatrix.elements,xe=Q.projectionMatrix.elements,me=B[14]/(B[10]-1),be=B[14]/(B[10]+1),ye=(B[9]+1)/B[5],Ee=(B[9]-1)/B[5],C=(B[8]-1)/B[0],R=(xe[8]+1)/xe[0],J=me*C,ue=me*R,ce=ee/(-C+R),k=ce*-C;G.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(k),K.translateZ(ce),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert();const H=me+ce,z=be+ce,q=J-k,O=ue+(ee-k),M=ye*be/z*H,y=Ee*be/z*H;K.projectionMatrix.makePerspective(q,O,M,y,H,z)}function X(K,G){G===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(G.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;T.near=L.near=P.near=K.near,T.far=L.far=P.far=K.far,(D!==T.near||V!==T.far)&&(s.updateRenderState({depthNear:T.near,depthFar:T.far}),D=T.near,V=T.far);const G=K.parent,Q=T.cameras;X(T,G);for(let B=0;B<Q.length;B++)X(Q[B],G);T.matrixWorld.decompose(T.position,T.quaternion,T.scale),K.matrix.copy(T.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale);const ee=K.children;for(let B=0,xe=ee.length;B<xe;B++)ee[B].updateMatrixWorld(!0);Q.length===2?te(T,P,L):T.projectionMatrix.copy(P.projectionMatrix)},this.getCamera=function(){return T},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(K){l=K,h!==null&&(h.fixedFoveation=K),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=K)},this.getPlanes=function(){return w};let he=null;function _e(K,G){if(u=G.getViewerPose(c||o),v=G,u!==null){const Q=u.views;m!==null&&(e.setRenderTargetFramebuffer(g,m.framebuffer),e.setRenderTarget(g));let ee=!1;Q.length!==T.cameras.length&&(T.cameras.length=0,ee=!0);for(let B=0;B<Q.length;B++){const xe=Q[B];let me=null;if(m!==null)me=m.getViewport(xe);else{const ye=f.getViewSubImage(h,xe);me=ye.viewport,B===0&&(e.setRenderTargetTextures(g,ye.colorTexture,h.ignoreDepthValues?void 0:ye.depthStencilTexture),e.setRenderTarget(g))}let be=x[B];be===void 0&&(be=new cn,be.layers.enable(B),be.viewport=new lt,x[B]=be),be.matrix.fromArray(xe.transform.matrix),be.projectionMatrix.fromArray(xe.projectionMatrix),be.viewport.set(me.x,me.y,me.width,me.height),B===0&&T.matrix.copy(be.matrix),ee===!0&&T.cameras.push(be)}}for(let Q=0;Q<_.length;Q++){const ee=b[Q],B=_[Q];ee!==null&&B!==void 0&&B.update(ee,G,c||o)}if(he&&he(K,G),G.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:G.detectedPlanes});let Q=null;for(const ee of w)G.detectedPlanes.has(ee)||(Q===null&&(Q=[]),Q.push(ee));if(Q!==null)for(const ee of Q)w.delete(ee),S.delete(ee),i.dispatchEvent({type:"planeremoved",data:ee});for(const ee of G.detectedPlanes)if(!w.has(ee))w.add(ee),S.set(ee,G.lastChangedTime),i.dispatchEvent({type:"planeadded",data:ee});else{const B=S.get(ee);ee.lastChangedTime>B&&(S.set(ee,ee.lastChangedTime),i.dispatchEvent({type:"planechanged",data:ee}))}}v=null}const ve=new Mg;ve.setAnimationLoop(_e),this.setAnimationLoop=function(K){he=K},this.dispose=function(){}}}function jE(n,e){function t(d,p){p.color.getRGB(d.fogColor.value,xg(n)),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function i(d,p,g,_,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(d,p):p.isMeshToonMaterial?(s(d,p),u(d,p)):p.isMeshPhongMaterial?(s(d,p),c(d,p)):p.isMeshStandardMaterial?(s(d,p),f(d,p),p.isMeshPhysicalMaterial&&h(d,p,b)):p.isMeshMatcapMaterial?(s(d,p),m(d,p)):p.isMeshDepthMaterial?s(d,p):p.isMeshDistanceMaterial?(s(d,p),v(d,p)):p.isMeshNormalMaterial?s(d,p):p.isLineBasicMaterial?(r(d,p),p.isLineDashedMaterial&&o(d,p)):p.isPointsMaterial?a(d,p,g,_):p.isSpriteMaterial?l(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.bumpMap&&(d.bumpMap.value=p.bumpMap,d.bumpScale.value=p.bumpScale,p.side===pn&&(d.bumpScale.value*=-1)),p.displacementMap&&(d.displacementMap.value=p.displacementMap,d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap),p.normalMap&&(d.normalMap.value=p.normalMap,d.normalScale.value.copy(p.normalScale),p.side===pn&&d.normalScale.value.negate()),p.specularMap&&(d.specularMap.value=p.specularMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const g=e.get(p).envMap;if(g&&(d.envMap.value=g,d.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap){d.lightMap.value=p.lightMap;const w=n.physicallyCorrectLights!==!0?Math.PI:1;d.lightMapIntensity.value=p.lightMapIntensity*w}p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity);let _;p.map?_=p.map:p.specularMap?_=p.specularMap:p.displacementMap?_=p.displacementMap:p.normalMap?_=p.normalMap:p.bumpMap?_=p.bumpMap:p.roughnessMap?_=p.roughnessMap:p.metalnessMap?_=p.metalnessMap:p.alphaMap?_=p.alphaMap:p.emissiveMap?_=p.emissiveMap:p.clearcoatMap?_=p.clearcoatMap:p.clearcoatNormalMap?_=p.clearcoatNormalMap:p.clearcoatRoughnessMap?_=p.clearcoatRoughnessMap:p.iridescenceMap?_=p.iridescenceMap:p.iridescenceThicknessMap?_=p.iridescenceThicknessMap:p.specularIntensityMap?_=p.specularIntensityMap:p.specularColorMap?_=p.specularColorMap:p.transmissionMap?_=p.transmissionMap:p.thicknessMap?_=p.thicknessMap:p.sheenColorMap?_=p.sheenColorMap:p.sheenRoughnessMap&&(_=p.sheenRoughnessMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),d.uvTransform.value.copy(_.matrix));let b;p.aoMap?b=p.aoMap:p.lightMap&&(b=p.lightMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),d.uv2Transform.value.copy(b.matrix))}function r(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity}function o(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function a(d,p,g,_){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*g,d.scale.value=_*.5,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let b;p.map?b=p.map:p.alphaMap&&(b=p.alphaMap),b!==void 0&&(b.matrixAutoUpdate===!0&&b.updateMatrix(),d.uvTransform.value.copy(b.matrix))}function l(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let g;p.map?g=p.map:p.alphaMap&&(g=p.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),d.uvTransform.value.copy(g.matrix))}function c(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function u(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function f(d,p){d.roughness.value=p.roughness,d.metalness.value=p.metalness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function h(d,p,g){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),d.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===pn&&d.clearcoatNormalScale.value.negate())),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=g.texture,d.transmissionSamplerSize.value.set(g.width,g.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap)}function m(d,p){p.matcap&&(d.matcap.value=p.matcap)}function v(d,p){d.referencePosition.value.copy(p.referencePosition),d.nearDistance.value=p.nearDistance,d.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function $E(n,e,t,i){let s={},r={},o=[];const a=t.isWebGL2?n.getParameter(35375):0;function l(_,b){const w=b.program;i.uniformBlockBinding(_,w)}function c(_,b){let w=s[_.id];w===void 0&&(v(_),w=u(_),s[_.id]=w,_.addEventListener("dispose",p));const S=b.program;i.updateUBOMapping(_,S);const P=e.render.frame;r[_.id]!==P&&(h(_),r[_.id]=P)}function u(_){const b=f();_.__bindingPointIndex=b;const w=n.createBuffer(),S=_.__size,P=_.usage;return n.bindBuffer(35345,w),n.bufferData(35345,S,P),n.bindBuffer(35345,null),n.bindBufferBase(35345,b,w),w}function f(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const b=s[_.id],w=_.uniforms,S=_.__cache;n.bindBuffer(35345,b);for(let P=0,L=w.length;P<L;P++){const x=w[P];if(m(x,P,S)===!0){const T=x.__offset,D=Array.isArray(x.value)?x.value:[x.value];let V=0;for(let W=0;W<D.length;W++){const N=D[W],F=d(N);typeof N=="number"?(x.__data[0]=N,n.bufferSubData(35345,T+V,x.__data)):N.isMatrix3?(x.__data[0]=N.elements[0],x.__data[1]=N.elements[1],x.__data[2]=N.elements[2],x.__data[3]=N.elements[0],x.__data[4]=N.elements[3],x.__data[5]=N.elements[4],x.__data[6]=N.elements[5],x.__data[7]=N.elements[0],x.__data[8]=N.elements[6],x.__data[9]=N.elements[7],x.__data[10]=N.elements[8],x.__data[11]=N.elements[0]):(N.toArray(x.__data,V),V+=F.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(35345,T,x.__data)}}n.bindBuffer(35345,null)}function m(_,b,w){const S=_.value;if(w[b]===void 0){if(typeof S=="number")w[b]=S;else{const P=Array.isArray(S)?S:[S],L=[];for(let x=0;x<P.length;x++)L.push(P[x].clone());w[b]=L}return!0}else if(typeof S=="number"){if(w[b]!==S)return w[b]=S,!0}else{const P=Array.isArray(w[b])?w[b]:[w[b]],L=Array.isArray(S)?S:[S];for(let x=0;x<P.length;x++){const T=P[x];if(T.equals(L[x])===!1)return T.copy(L[x]),!0}}return!1}function v(_){const b=_.uniforms;let w=0;const S=16;let P=0;for(let L=0,x=b.length;L<x;L++){const T=b[L],D={boundary:0,storage:0},V=Array.isArray(T.value)?T.value:[T.value];for(let W=0,N=V.length;W<N;W++){const F=V[W],ie=d(F);D.boundary+=ie.boundary,D.storage+=ie.storage}if(T.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=w,L>0){P=w%S;const W=S-P;P!==0&&W-D.boundary<0&&(w+=S-P,T.__offset=w)}w+=D.storage}return P=w%S,P>0&&(w+=S-P),_.__size=w,_.__cache={},this}function d(_){const b={boundary:0,storage:0};return typeof _=="number"?(b.boundary=4,b.storage=4):_.isVector2?(b.boundary=8,b.storage=8):_.isVector3||_.isColor?(b.boundary=16,b.storage=12):_.isVector4?(b.boundary=16,b.storage=16):_.isMatrix3?(b.boundary=48,b.storage=48):_.isMatrix4?(b.boundary=64,b.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),b}function p(_){const b=_.target;b.removeEventListener("dispose",p);const w=o.indexOf(b.__bindingPointIndex);o.splice(w,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function g(){for(const _ in s)n.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:g}}function qE(){const n=Da("canvas");return n.style.display="block",n}function Ag(n={}){this.isWebGLRenderer=!0;const e=n.canvas!==void 0?n.canvas:qE(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,s=n.stencil!==void 0?n.stencil:!0,r=n.antialias!==void 0?n.antialias:!1,o=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,a=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",c=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=n.alpha!==void 0?n.alpha:!1;let f=null,h=null;const m=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=fs,this.physicallyCorrectLights=!1,this.toneMapping=ei,this.toneMappingExposure=1;const d=this;let p=!1,g=0,_=0,b=null,w=-1,S=null;const P=new lt,L=new lt;let x=null,T=e.width,D=e.height,V=1,W=null,N=null;const F=new lt(0,0,T,D),ie=new lt(0,0,T,D);let le=!1;const te=new qu;let X=!1,he=!1,_e=null;const ve=new yt,K=new Be,G=new Z,Q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ee(){return b===null?V:1}let B=t;function xe(A,ae){for(let pe=0;pe<A.length;pe++){const ne=A[pe],ge=e.getContext(ne,ae);if(ge!==null)return ge}return null}try{const A={alpha:!0,depth:i,stencil:s,antialias:r,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Wu}`),e.addEventListener("webglcontextlost",Ce,!1),e.addEventListener("webglcontextrestored",Te,!1),e.addEventListener("webglcontextcreationerror",De,!1),B===null){const ae=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&ae.shift(),B=xe(ae,A),B===null)throw xe(ae)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let me,be,ye,Ee,C,R,J,ue,ce,k,H,z,q,O,M,y,I,$,re,oe,Y,E,U,fe;function we(){me=new sw(B),be=new J1(B,me,n),me.init(be),E=new zE(B,me,be),ye=new kE(B,me,be),Ee=new aw,C=new wE,R=new BE(B,me,ye,C,be,E,Ee),J=new ew(d),ue=new iw(d),ce=new gM(B,be),U=new Y1(B,me,ce,be),k=new rw(B,ce,Ee,U),H=new fw(B,k,ce,Ee),re=new uw(B,be,R),y=new Q1(C),z=new SE(d,J,ue,me,be,U,y),q=new jE(d,C),O=new TE,M=new DE(me,be),$=new K1(d,J,ue,ye,H,u,o),I=new UE(d,H,be),fe=new $E(B,Ee,be,ye),oe=new Z1(B,me,Ee,be),Y=new ow(B,me,Ee,be),Ee.programs=z.programs,d.capabilities=be,d.extensions=me,d.properties=C,d.renderLists=O,d.shadowMap=I,d.state=ye,d.info=Ee}we();const Me=new WE(d,B);this.xr=Me,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const A=me.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=me.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(A){A!==void 0&&(V=A,this.setSize(T,D,!1))},this.getSize=function(A){return A.set(T,D)},this.setSize=function(A,ae,pe){if(Me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=A,D=ae,e.width=Math.floor(A*V),e.height=Math.floor(ae*V),pe!==!1&&(e.style.width=A+"px",e.style.height=ae+"px"),this.setViewport(0,0,A,ae)},this.getDrawingBufferSize=function(A){return A.set(T*V,D*V).floor()},this.setDrawingBufferSize=function(A,ae,pe){T=A,D=ae,V=pe,e.width=Math.floor(A*pe),e.height=Math.floor(ae*pe),this.setViewport(0,0,A,ae)},this.getCurrentViewport=function(A){return A.copy(P)},this.getViewport=function(A){return A.copy(F)},this.setViewport=function(A,ae,pe,ne){A.isVector4?F.set(A.x,A.y,A.z,A.w):F.set(A,ae,pe,ne),ye.viewport(P.copy(F).multiplyScalar(V).floor())},this.getScissor=function(A){return A.copy(ie)},this.setScissor=function(A,ae,pe,ne){A.isVector4?ie.set(A.x,A.y,A.z,A.w):ie.set(A,ae,pe,ne),ye.scissor(L.copy(ie).multiplyScalar(V).floor())},this.getScissorTest=function(){return le},this.setScissorTest=function(A){ye.setScissorTest(le=A)},this.setOpaqueSort=function(A){W=A},this.setTransparentSort=function(A){N=A},this.getClearColor=function(A){return A.copy($.getClearColor())},this.setClearColor=function(){$.setClearColor.apply($,arguments)},this.getClearAlpha=function(){return $.getClearAlpha()},this.setClearAlpha=function(){$.setClearAlpha.apply($,arguments)},this.clear=function(A=!0,ae=!0,pe=!0){let ne=0;A&&(ne|=16384),ae&&(ne|=256),pe&&(ne|=1024),B.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ce,!1),e.removeEventListener("webglcontextrestored",Te,!1),e.removeEventListener("webglcontextcreationerror",De,!1),O.dispose(),M.dispose(),C.dispose(),J.dispose(),ue.dispose(),H.dispose(),U.dispose(),fe.dispose(),z.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",Re),Me.removeEventListener("sessionend",Pe),_e&&(_e.dispose(),_e=null),We.stop()};function Ce(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function Te(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const A=Ee.autoReset,ae=I.enabled,pe=I.autoUpdate,ne=I.needsUpdate,ge=I.type;we(),Ee.autoReset=A,I.enabled=ae,I.autoUpdate=pe,I.needsUpdate=ne,I.type=ge}function De(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Oe(A){const ae=A.target;ae.removeEventListener("dispose",Oe),$e(ae)}function $e(A){j(A),C.remove(A)}function j(A){const ae=C.get(A).programs;ae!==void 0&&(ae.forEach(function(pe){z.releaseProgram(pe)}),A.isShaderMaterial&&z.releaseShaderCache(A))}this.renderBufferDirect=function(A,ae,pe,ne,ge,Ie){ae===null&&(ae=Q);const Ue=ge.isMesh&&ge.matrixWorld.determinant()<0,He=Ft(A,ae,pe,ne,ge);ye.setMaterial(ne,Ue);let Ge=pe.index,Ze=1;ne.wireframe===!0&&(Ge=k.getWireframeAttribute(pe),Ze=2);const qe=pe.drawRange,Xe=pe.attributes.position;let mt=qe.start*Ze,tn=(qe.start+qe.count)*Ze;Ie!==null&&(mt=Math.max(mt,Ie.start*Ze),tn=Math.min(tn,(Ie.start+Ie.count)*Ze)),Ge!==null?(mt=Math.max(mt,0),tn=Math.min(tn,Ge.count)):Xe!=null&&(mt=Math.max(mt,0),tn=Math.min(tn,Xe.count));const Vn=tn-mt;if(Vn<0||Vn===1/0)return;U.setup(ge,ne,He,pe,Ge);let Ri,gt=oe;if(Ge!==null&&(Ri=ce.get(Ge),gt=Y,gt.setIndex(Ri)),ge.isMesh)ne.wireframe===!0?(ye.setLineWidth(ne.wireframeLinewidth*ee()),gt.setMode(1)):gt.setMode(4);else if(ge.isLine){let Ke=ne.linewidth;Ke===void 0&&(Ke=1),ye.setLineWidth(Ke*ee()),ge.isLineSegments?gt.setMode(1):ge.isLineLoop?gt.setMode(2):gt.setMode(3)}else ge.isPoints?gt.setMode(0):ge.isSprite&&gt.setMode(4);if(ge.isInstancedMesh)gt.renderInstances(mt,Vn,ge.count);else if(pe.isInstancedBufferGeometry){const Ke=pe._maxInstanceCount!==void 0?pe._maxInstanceCount:1/0,al=Math.min(pe.instanceCount,Ke);gt.renderInstances(mt,Vn,al)}else gt.render(mt,Vn)},this.compile=function(A,ae){function pe(ne,ge,Ie){ne.transparent===!0&&ne.side===mi&&ne.forceSinglePass===!1?(ne.side=pn,ne.needsUpdate=!0,Tt(ne,ge,Ie),ne.side=Ei,ne.needsUpdate=!0,Tt(ne,ge,Ie),ne.side=mi):Tt(ne,ge,Ie)}h=M.get(A),h.init(),v.push(h),A.traverseVisible(function(ne){ne.isLight&&ne.layers.test(ae.layers)&&(h.pushLight(ne),ne.castShadow&&h.pushShadow(ne))}),h.setupLights(d.physicallyCorrectLights),A.traverse(function(ne){const ge=ne.material;if(ge)if(Array.isArray(ge))for(let Ie=0;Ie<ge.length;Ie++){const Ue=ge[Ie];pe(Ue,A,ne)}else pe(ge,A,ne)}),v.pop(),h=null};let de=null;function Se(A){de&&de(A)}function Re(){We.stop()}function Pe(){We.start()}const We=new Mg;We.setAnimationLoop(Se),typeof self<"u"&&We.setContext(self),this.setAnimationLoop=function(A){de=A,Me.setAnimationLoop(A),A===null?We.stop():We.start()},Me.addEventListener("sessionstart",Re),Me.addEventListener("sessionend",Pe),this.render=function(A,ae){if(ae!==void 0&&ae.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),ae.parent===null&&ae.matrixWorldAutoUpdate===!0&&ae.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(ae),ae=Me.getCamera()),A.isScene===!0&&A.onBeforeRender(d,A,ae,b),h=M.get(A,v.length),h.init(),v.push(h),ve.multiplyMatrices(ae.projectionMatrix,ae.matrixWorldInverse),te.setFromProjectionMatrix(ve),he=this.localClippingEnabled,X=y.init(this.clippingPlanes,he),f=O.get(A,m.length),f.init(),m.push(f),ut(A,ae,0,d.sortObjects),f.finish(),d.sortObjects===!0&&f.sort(W,N),X===!0&&y.beginShadows();const pe=h.state.shadowsArray;if(I.render(pe,A,ae),X===!0&&y.endShadows(),this.info.autoReset===!0&&this.info.reset(),$.render(f,A),h.setupLights(d.physicallyCorrectLights),ae.isArrayCamera){const ne=ae.cameras;for(let ge=0,Ie=ne.length;ge<Ie;ge++){const Ue=ne[ge];bt(f,A,Ue,Ue.viewport)}}else bt(f,A,ae);b!==null&&(R.updateMultisampleRenderTarget(b),R.updateRenderTargetMipmap(b)),A.isScene===!0&&A.onAfterRender(d,A,ae),U.resetDefaultState(),w=-1,S=null,v.pop(),v.length>0?h=v[v.length-1]:h=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function ut(A,ae,pe,ne){if(A.visible===!1)return;if(A.layers.test(ae.layers)){if(A.isGroup)pe=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(ae);else if(A.isLight)h.pushLight(A),A.castShadow&&h.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||te.intersectsSprite(A)){ne&&G.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ve);const Ue=H.update(A),He=A.material;He.visible&&f.push(A,Ue,He,pe,G.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(A.isSkinnedMesh&&A.skeleton.frame!==Ee.render.frame&&(A.skeleton.update(),A.skeleton.frame=Ee.render.frame),!A.frustumCulled||te.intersectsObject(A))){ne&&G.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ve);const Ue=H.update(A),He=A.material;if(Array.isArray(He)){const Ge=Ue.groups;for(let Ze=0,qe=Ge.length;Ze<qe;Ze++){const Xe=Ge[Ze],mt=He[Xe.materialIndex];mt&&mt.visible&&f.push(A,Ue,mt,pe,G.z,Xe)}}else He.visible&&f.push(A,Ue,He,pe,G.z,null)}}const Ie=A.children;for(let Ue=0,He=Ie.length;Ue<He;Ue++)ut(Ie[Ue],ae,pe,ne)}function bt(A,ae,pe,ne){const ge=A.opaque,Ie=A.transmissive,Ue=A.transparent;h.setupLightsView(pe),X===!0&&y.setGlobalState(d.clippingPlanes,pe),Ie.length>0&&en(ge,ae,pe),ne&&ye.viewport(P.copy(ne)),ge.length>0&&nt(ge,ae,pe),Ie.length>0&&nt(Ie,ae,pe),Ue.length>0&&nt(Ue,ae,pe),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function en(A,ae,pe){const ne=be.isWebGL2;_e===null&&(_e=new hs(1,1,{generateMipmaps:!0,type:me.has("EXT_color_buffer_half_float")?fo:us,minFilter:uo,samples:ne&&r===!0?4:0})),d.getDrawingBufferSize(K),ne?_e.setSize(K.x,K.y):_e.setSize(Bc(K.x),Bc(K.y));const ge=d.getRenderTarget();d.setRenderTarget(_e),d.clear();const Ie=d.toneMapping;d.toneMapping=ei,nt(A,ae,pe),d.toneMapping=Ie,R.updateMultisampleRenderTarget(_e),R.updateRenderTargetMipmap(_e),d.setRenderTarget(ge)}function nt(A,ae,pe){const ne=ae.isScene===!0?ae.overrideMaterial:null;for(let ge=0,Ie=A.length;ge<Ie;ge++){const Ue=A[ge],He=Ue.object,Ge=Ue.geometry,Ze=ne===null?Ue.material:ne,qe=Ue.group;He.layers.test(pe.layers)&&Vt(He,ae,pe,Ge,Ze,qe)}}function Vt(A,ae,pe,ne,ge,Ie){A.onBeforeRender(d,ae,pe,ne,ge,Ie),A.modelViewMatrix.multiplyMatrices(pe.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ge.onBeforeRender(d,ae,pe,ne,A,Ie),ge.transparent===!0&&ge.side===mi&&ge.forceSinglePass===!1?(ge.side=pn,ge.needsUpdate=!0,d.renderBufferDirect(pe,ae,ne,ge,A,Ie),ge.side=Ei,ge.needsUpdate=!0,d.renderBufferDirect(pe,ae,ne,ge,A,Ie),ge.side=mi):d.renderBufferDirect(pe,ae,ne,ge,A,Ie),A.onAfterRender(d,ae,pe,ne,ge,Ie)}function Tt(A,ae,pe){ae.isScene!==!0&&(ae=Q);const ne=C.get(A),ge=h.state.lights,Ie=h.state.shadowsArray,Ue=ge.state.version,He=z.getParameters(A,ge.state,Ie,ae,pe),Ge=z.getProgramCacheKey(He);let Ze=ne.programs;ne.environment=A.isMeshStandardMaterial?ae.environment:null,ne.fog=ae.fog,ne.envMap=(A.isMeshStandardMaterial?ue:J).get(A.envMap||ne.environment),Ze===void 0&&(A.addEventListener("dispose",Oe),Ze=new Map,ne.programs=Ze);let qe=Ze.get(Ge);if(qe!==void 0){if(ne.currentProgram===qe&&ne.lightsStateVersion===Ue)return si(A,He),qe}else He.uniforms=z.getUniforms(A),A.onBuild(pe,He,d),A.onBeforeCompile(He,d),qe=z.acquireProgram(He,Ge),Ze.set(Ge,qe),ne.uniforms=He.uniforms;const Xe=ne.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Xe.clippingPlanes=y.uniform),si(A,He),ne.needsLights=Ai(A),ne.lightsStateVersion=Ue,ne.needsLights&&(Xe.ambientLightColor.value=ge.state.ambient,Xe.lightProbe.value=ge.state.probe,Xe.directionalLights.value=ge.state.directional,Xe.directionalLightShadows.value=ge.state.directionalShadow,Xe.spotLights.value=ge.state.spot,Xe.spotLightShadows.value=ge.state.spotShadow,Xe.rectAreaLights.value=ge.state.rectArea,Xe.ltc_1.value=ge.state.rectAreaLTC1,Xe.ltc_2.value=ge.state.rectAreaLTC2,Xe.pointLights.value=ge.state.point,Xe.pointLightShadows.value=ge.state.pointShadow,Xe.hemisphereLights.value=ge.state.hemi,Xe.directionalShadowMap.value=ge.state.directionalShadowMap,Xe.directionalShadowMatrix.value=ge.state.directionalShadowMatrix,Xe.spotShadowMap.value=ge.state.spotShadowMap,Xe.spotLightMatrix.value=ge.state.spotLightMatrix,Xe.spotLightMap.value=ge.state.spotLightMap,Xe.pointShadowMap.value=ge.state.pointShadowMap,Xe.pointShadowMatrix.value=ge.state.pointShadowMatrix);const mt=qe.getUniforms(),tn=ua.seqWithValue(mt.seq,Xe);return ne.currentProgram=qe,ne.uniformsList=tn,qe}function si(A,ae){const pe=C.get(A);pe.outputEncoding=ae.outputEncoding,pe.instancing=ae.instancing,pe.skinning=ae.skinning,pe.morphTargets=ae.morphTargets,pe.morphNormals=ae.morphNormals,pe.morphColors=ae.morphColors,pe.morphTargetsCount=ae.morphTargetsCount,pe.numClippingPlanes=ae.numClippingPlanes,pe.numIntersection=ae.numClipIntersection,pe.vertexAlphas=ae.vertexAlphas,pe.vertexTangents=ae.vertexTangents,pe.toneMapping=ae.toneMapping}function Ft(A,ae,pe,ne,ge){ae.isScene!==!0&&(ae=Q),R.resetTextureUnits();const Ie=ae.fog,Ue=ne.isMeshStandardMaterial?ae.environment:null,He=b===null?d.outputEncoding:b.isXRRenderTarget===!0?b.texture.encoding:fs,Ge=(ne.isMeshStandardMaterial?ue:J).get(ne.envMap||Ue),Ze=ne.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,qe=!!ne.normalMap&&!!pe.attributes.tangent,Xe=!!pe.morphAttributes.position,mt=!!pe.morphAttributes.normal,tn=!!pe.morphAttributes.color,Vn=ne.toneMapped?d.toneMapping:ei,Ri=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,gt=Ri!==void 0?Ri.length:0,Ke=C.get(ne),al=h.state.lights;if(X===!0&&(he===!0||A!==S)){const nn=A===S&&ne.id===w;y.setState(ne,A,nn)}let Ct=!1;ne.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==al.state.version||Ke.outputEncoding!==He||ge.isInstancedMesh&&Ke.instancing===!1||!ge.isInstancedMesh&&Ke.instancing===!0||ge.isSkinnedMesh&&Ke.skinning===!1||!ge.isSkinnedMesh&&Ke.skinning===!0||Ke.envMap!==Ge||ne.fog===!0&&Ke.fog!==Ie||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==y.numPlanes||Ke.numIntersection!==y.numIntersection)||Ke.vertexAlphas!==Ze||Ke.vertexTangents!==qe||Ke.morphTargets!==Xe||Ke.morphNormals!==mt||Ke.morphColors!==tn||Ke.toneMapping!==Vn||be.isWebGL2===!0&&Ke.morphTargetsCount!==gt)&&(Ct=!0):(Ct=!0,Ke.__version=ne.version);let Li=Ke.currentProgram;Ct===!0&&(Li=Tt(ne,ae,ge));let ef=!1,Er=!1,ll=!1;const Ht=Li.getUniforms(),Pi=Ke.uniforms;if(ye.useProgram(Li.program)&&(ef=!0,Er=!0,ll=!0),ne.id!==w&&(w=ne.id,Er=!0),ef||S!==A){if(Ht.setValue(B,"projectionMatrix",A.projectionMatrix),be.logarithmicDepthBuffer&&Ht.setValue(B,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),S!==A&&(S=A,Er=!0,ll=!0),ne.isShaderMaterial||ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshStandardMaterial||ne.envMap){const nn=Ht.map.cameraPosition;nn!==void 0&&nn.setValue(B,G.setFromMatrixPosition(A.matrixWorld))}(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Ht.setValue(B,"isOrthographic",A.isOrthographicCamera===!0),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial||ne.isShadowMaterial||ge.isSkinnedMesh)&&Ht.setValue(B,"viewMatrix",A.matrixWorldInverse)}if(ge.isSkinnedMesh){Ht.setOptional(B,ge,"bindMatrix"),Ht.setOptional(B,ge,"bindMatrixInverse");const nn=ge.skeleton;nn&&(be.floatVertexTextures?(nn.boneTexture===null&&nn.computeBoneTexture(),Ht.setValue(B,"boneTexture",nn.boneTexture,R),Ht.setValue(B,"boneTextureSize",nn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const cl=pe.morphAttributes;if((cl.position!==void 0||cl.normal!==void 0||cl.color!==void 0&&be.isWebGL2===!0)&&re.update(ge,pe,ne,Li),(Er||Ke.receiveShadow!==ge.receiveShadow)&&(Ke.receiveShadow=ge.receiveShadow,Ht.setValue(B,"receiveShadow",ge.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(Pi.envMap.value=Ge,Pi.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),Er&&(Ht.setValue(B,"toneMappingExposure",d.toneMappingExposure),Ke.needsLights&&Ci(Pi,ll),Ie&&ne.fog===!0&&q.refreshFogUniforms(Pi,Ie),q.refreshMaterialUniforms(Pi,ne,V,D,_e),ua.upload(B,Ke.uniformsList,Pi,R)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(ua.upload(B,Ke.uniformsList,Pi,R),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Ht.setValue(B,"center",ge.center),Ht.setValue(B,"modelViewMatrix",ge.modelViewMatrix),Ht.setValue(B,"normalMatrix",ge.normalMatrix),Ht.setValue(B,"modelMatrix",ge.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const nn=ne.uniformsGroups;for(let ul=0,kg=nn.length;ul<kg;ul++)if(be.isWebGL2){const tf=nn[ul];fe.update(tf,Li),fe.bind(tf,Li)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Li}function Ci(A,ae){A.ambientLightColor.needsUpdate=ae,A.lightProbe.needsUpdate=ae,A.directionalLights.needsUpdate=ae,A.directionalLightShadows.needsUpdate=ae,A.pointLights.needsUpdate=ae,A.pointLightShadows.needsUpdate=ae,A.spotLights.needsUpdate=ae,A.spotLightShadows.needsUpdate=ae,A.rectAreaLights.needsUpdate=ae,A.hemisphereLights.needsUpdate=ae}function Ai(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return _},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(A,ae,pe){C.get(A.texture).__webglTexture=ae,C.get(A.depthTexture).__webglTexture=pe;const ne=C.get(A);ne.__hasExternalTextures=!0,ne.__hasExternalTextures&&(ne.__autoAllocateDepthBuffer=pe===void 0,ne.__autoAllocateDepthBuffer||me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ne.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,ae){const pe=C.get(A);pe.__webglFramebuffer=ae,pe.__useDefaultFramebuffer=ae===void 0},this.setRenderTarget=function(A,ae=0,pe=0){b=A,g=ae,_=pe;let ne=!0,ge=null,Ie=!1,Ue=!1;if(A){const Ge=C.get(A);Ge.__useDefaultFramebuffer!==void 0?(ye.bindFramebuffer(36160,null),ne=!1):Ge.__webglFramebuffer===void 0?R.setupRenderTarget(A):Ge.__hasExternalTextures&&R.rebindTextures(A,C.get(A.texture).__webglTexture,C.get(A.depthTexture).__webglTexture);const Ze=A.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(Ue=!0);const qe=C.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(ge=qe[ae],Ie=!0):be.isWebGL2&&A.samples>0&&R.useMultisampledRTT(A)===!1?ge=C.get(A).__webglMultisampledFramebuffer:ge=qe,P.copy(A.viewport),L.copy(A.scissor),x=A.scissorTest}else P.copy(F).multiplyScalar(V).floor(),L.copy(ie).multiplyScalar(V).floor(),x=le;if(ye.bindFramebuffer(36160,ge)&&be.drawBuffers&&ne&&ye.drawBuffers(A,ge),ye.viewport(P),ye.scissor(L),ye.setScissorTest(x),Ie){const Ge=C.get(A.texture);B.framebufferTexture2D(36160,36064,34069+ae,Ge.__webglTexture,pe)}else if(Ue){const Ge=C.get(A.texture),Ze=ae||0;B.framebufferTextureLayer(36160,36064,Ge.__webglTexture,pe||0,Ze)}w=-1},this.readRenderTargetPixels=function(A,ae,pe,ne,ge,Ie,Ue){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=C.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ue!==void 0&&(He=He[Ue]),He){ye.bindFramebuffer(36160,He);try{const Ge=A.texture,Ze=Ge.format,qe=Ge.type;if(Ze!==Pn&&E.convert(Ze)!==B.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Xe=qe===fo&&(me.has("EXT_color_buffer_half_float")||be.isWebGL2&&me.has("EXT_color_buffer_float"));if(qe!==us&&E.convert(qe)!==B.getParameter(35738)&&!(qe===qi&&(be.isWebGL2||me.has("OES_texture_float")||me.has("WEBGL_color_buffer_float")))&&!Xe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ae>=0&&ae<=A.width-ne&&pe>=0&&pe<=A.height-ge&&B.readPixels(ae,pe,ne,ge,E.convert(Ze),E.convert(qe),Ie)}finally{const Ge=b!==null?C.get(b).__webglFramebuffer:null;ye.bindFramebuffer(36160,Ge)}}},this.copyFramebufferToTexture=function(A,ae,pe=0){const ne=Math.pow(2,-pe),ge=Math.floor(ae.image.width*ne),Ie=Math.floor(ae.image.height*ne);R.setTexture2D(ae,0),B.copyTexSubImage2D(3553,pe,0,0,A.x,A.y,ge,Ie),ye.unbindTexture()},this.copyTextureToTexture=function(A,ae,pe,ne=0){const ge=ae.image.width,Ie=ae.image.height,Ue=E.convert(pe.format),He=E.convert(pe.type);R.setTexture2D(pe,0),B.pixelStorei(37440,pe.flipY),B.pixelStorei(37441,pe.premultiplyAlpha),B.pixelStorei(3317,pe.unpackAlignment),ae.isDataTexture?B.texSubImage2D(3553,ne,A.x,A.y,ge,Ie,Ue,He,ae.image.data):ae.isCompressedTexture?B.compressedTexSubImage2D(3553,ne,A.x,A.y,ae.mipmaps[0].width,ae.mipmaps[0].height,Ue,ae.mipmaps[0].data):B.texSubImage2D(3553,ne,A.x,A.y,Ue,He,ae.image),ne===0&&pe.generateMipmaps&&B.generateMipmap(3553),ye.unbindTexture()},this.copyTextureToTexture3D=function(A,ae,pe,ne,ge=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ie=A.max.x-A.min.x+1,Ue=A.max.y-A.min.y+1,He=A.max.z-A.min.z+1,Ge=E.convert(ne.format),Ze=E.convert(ne.type);let qe;if(ne.isData3DTexture)R.setTexture3D(ne,0),qe=32879;else if(ne.isDataArrayTexture)R.setTexture2DArray(ne,0),qe=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(37440,ne.flipY),B.pixelStorei(37441,ne.premultiplyAlpha),B.pixelStorei(3317,ne.unpackAlignment);const Xe=B.getParameter(3314),mt=B.getParameter(32878),tn=B.getParameter(3316),Vn=B.getParameter(3315),Ri=B.getParameter(32877),gt=pe.isCompressedTexture?pe.mipmaps[0]:pe.image;B.pixelStorei(3314,gt.width),B.pixelStorei(32878,gt.height),B.pixelStorei(3316,A.min.x),B.pixelStorei(3315,A.min.y),B.pixelStorei(32877,A.min.z),pe.isDataTexture||pe.isData3DTexture?B.texSubImage3D(qe,ge,ae.x,ae.y,ae.z,Ie,Ue,He,Ge,Ze,gt.data):pe.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(qe,ge,ae.x,ae.y,ae.z,Ie,Ue,He,Ge,gt.data)):B.texSubImage3D(qe,ge,ae.x,ae.y,ae.z,Ie,Ue,He,Ge,Ze,gt),B.pixelStorei(3314,Xe),B.pixelStorei(32878,mt),B.pixelStorei(3316,tn),B.pixelStorei(3315,Vn),B.pixelStorei(32877,Ri),ge===0&&ne.generateMipmaps&&B.generateMipmap(qe),ye.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?R.setTextureCube(A,0):A.isData3DTexture?R.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?R.setTexture2DArray(A,0):R.setTexture2D(A,0),ye.unbindTexture()},this.resetState=function(){g=0,_=0,b=null,ye.reset(),U.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class XE extends Ag{}XE.prototype.isWebGL1Renderer=!0;class KE extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class YE extends wo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new it(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cg,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Yu extends zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new it(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const ec=new yt,_d=new Z,vd=new Z;class Rg{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qu,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;_d.setFromMatrixPosition(e.matrixWorld),t.position.copy(_d),vd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vd),t.updateMatrixWorld(),ec.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ec),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ec)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const xd=new yt,Or=new Z,tc=new Z;class ZE extends Rg{constructor(){super(new cn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Be(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new Z(1,0,0),new Z(-1,0,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,1,0),new Z(0,-1,0)],this._cubeUps=[new Z(0,1,0),new Z(0,1,0),new Z(0,1,0),new Z(0,1,0),new Z(0,0,1),new Z(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Or.setFromMatrixPosition(e.matrixWorld),i.position.copy(Or),tc.copy(i.position),tc.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(tc),i.updateMatrixWorld(),s.makeTranslation(-Or.x,-Or.y,-Or.z),xd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xd)}}class JE extends Yu{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new ZE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class QE extends Rg{constructor(){super(new Sg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class yd extends Yu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new QE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class eT extends Yu{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class tT{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=bd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=bd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function bd(){return(typeof performance>"u"?Date:performance).now()}class nT{constructor(e,t,i=0,s=1/0){this.ray=new mg(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new $u,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return Vc(e,this,i,t),i.sort(Md),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Vc(e[s],this,i,t);return i.sort(Md),i}}function Md(n,e){return n.distance-e.distance}function Vc(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const s=n.children;for(let r=0,o=s.length;r<o;r++)Vc(s[r],e,t,!0)}}class Sd{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Xt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wu);var Zu={Linear:{None:function(n){return n}},Quadratic:{InOut:function(n){return(n*=2)<1?.5*n*n:-.5*(--n*(n-2)-1)}}},Hr;typeof self>"u"&&typeof process<"u"&&process.hrtime?Hr=function(){var n=process.hrtime();return n[0]*1e3+n[1]/1e6}:typeof self<"u"&&self.performance!==void 0&&self.performance.now!==void 0?Hr=self.performance.now.bind(self.performance):Date.now!==void 0?Hr=Date.now:Hr=function(){return new Date().getTime()};var Ws=Hr,iT=function(){function n(){this._tweens={},this._tweensAddedDuringUpdate={}}return n.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(t){return e._tweens[t]})},n.prototype.removeAll=function(){this._tweens={}},n.prototype.add=function(e){this._tweens[e.getId()]=e,this._tweensAddedDuringUpdate[e.getId()]=e},n.prototype.remove=function(e){delete this._tweens[e.getId()],delete this._tweensAddedDuringUpdate[e.getId()]},n.prototype.update=function(e,t){e===void 0&&(e=Ws()),t===void 0&&(t=!1);var i=Object.keys(this._tweens);if(i.length===0)return!1;for(;i.length>0;){this._tweensAddedDuringUpdate={};for(var s=0;s<i.length;s++){var r=this._tweens[i[s]],o=!t;r&&r.update(e,o)===!1&&!t&&delete this._tweens[i[s]]}i=Object.keys(this._tweensAddedDuringUpdate)}return!0},n}(),Lg={Linear:function(n,e){var t=n.length-1,i=t*e,s=Math.floor(i),r=Lg.Utils.Linear;return e<0?r(n[0],n[1],i):e>1?r(n[t],n[t-1],t-i):r(n[s],n[s+1>t?t:s+1],i-s)},Utils:{Linear:function(n,e,t){return(e-n)*t+n}}},Pg=function(){function n(){}return n.nextId=function(){return n._nextId++},n._nextId=0,n}(),Dg=new iT,Ig=function(){function n(e,t){t===void 0&&(t=Dg),this._object=e,this._group=t,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=Zu.Linear.None,this._interpolationFunction=Lg.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._id=Pg.nextId(),this._isChainStopped=!1,this._goToEnd=!1}return n.prototype.getId=function(){return this._id},n.prototype.isPlaying=function(){return this._isPlaying},n.prototype.isPaused=function(){return this._isPaused},n.prototype.to=function(e,t){return this._valuesEnd=Object.create(e),t!==void 0&&(this._duration=t),this},n.prototype.duration=function(e){return this._duration=e,this},n.prototype.start=function(e){if(this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var t in this._valuesStartRepeat)this._swapEndStartRepeatValues(t),this._valuesStart[t]=this._valuesStartRepeat[t]}return this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e!==void 0?typeof e=="string"?Ws()+parseFloat(e):e:Ws(),this._startTime+=this._delayTime,this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat),this},n.prototype._setupProperties=function(e,t,i,s){for(var r in i){var o=e[r],a=Array.isArray(o),l=a?"array":typeof o,c=!a&&Array.isArray(i[r]);if(!(l==="undefined"||l==="function")){if(c){var u=i[r];if(u.length===0)continue;u=u.map(this._handleRelativeValue.bind(this,o)),i[r]=[o].concat(u)}if((l==="object"||a)&&o&&!c){t[r]=a?[]:{};for(var f in o)t[r][f]=o[f];s[r]=a?[]:{},this._setupProperties(o,t[r],i[r],s[r])}else typeof t[r]>"u"&&(t[r]=o),a||(t[r]*=1),c?s[r]=i[r].slice().reverse():s[r]=t[r]||0}}},n.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},n.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},n.prototype.pause=function(e){return e===void 0&&(e=Ws()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this._group&&this._group.remove(this),this)},n.prototype.resume=function(e){return e===void 0&&(e=Ws()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},n.prototype.stopChainedTweens=function(){for(var e=0,t=this._chainedTweens.length;e<t;e++)this._chainedTweens[e].stop();return this},n.prototype.group=function(e){return this._group=e,this},n.prototype.delay=function(e){return this._delayTime=e,this},n.prototype.repeat=function(e){return this._initialRepeat=e,this._repeat=e,this},n.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},n.prototype.yoyo=function(e){return this._yoyo=e,this},n.prototype.easing=function(e){return this._easingFunction=e,this},n.prototype.interpolation=function(e){return this._interpolationFunction=e,this},n.prototype.chain=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this._chainedTweens=e,this},n.prototype.onStart=function(e){return this._onStartCallback=e,this},n.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},n.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},n.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},n.prototype.onStop=function(e){return this._onStopCallback=e,this},n.prototype.update=function(e,t){if(e===void 0&&(e=Ws()),t===void 0&&(t=!0),this._isPaused)return!0;var i,s,r=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(e>r)return!1;t&&this.start(e)}if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),s=(e-this._startTime)/this._duration,s=this._duration===0||s>1?1:s;var o=this._easingFunction(s);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,o),this._onUpdateCallback&&this._onUpdateCallback(this._object,s),s===1)if(this._repeat>0){isFinite(this._repeat)&&this._repeat--;for(i in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[i]=="string"&&(this._valuesStartRepeat[i]=this._valuesStartRepeat[i]+parseFloat(this._valuesEnd[i])),this._yoyo&&this._swapEndStartRepeatValues(i),this._valuesStart[i]=this._valuesStartRepeat[i];return this._yoyo&&(this._reversed=!this._reversed),this._repeatDelayTime!==void 0?this._startTime=e+this._repeatDelayTime:this._startTime=e+this._delayTime,this._onRepeatCallback&&this._onRepeatCallback(this._object),!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var a=0,l=this._chainedTweens.length;a<l;a++)this._chainedTweens[a].start(this._startTime+this._duration);return this._isPlaying=!1,!1}return!0},n.prototype._updateProperties=function(e,t,i,s){for(var r in i)if(t[r]!==void 0){var o=t[r]||0,a=i[r],l=Array.isArray(e[r]),c=Array.isArray(a),u=!l&&c;u?e[r]=this._interpolationFunction(a,s):typeof a=="object"&&a?this._updateProperties(e[r],o,a,s):(a=this._handleRelativeValue(o,a),typeof a=="number"&&(e[r]=o+(a-o)*s))}},n.prototype._handleRelativeValue=function(e,t){return typeof t!="string"?t:t.charAt(0)==="+"||t.charAt(0)==="-"?e+parseFloat(t):parseFloat(t)},n.prototype._swapEndStartRepeatValues=function(e){var t=this._valuesStartRepeat[e],i=this._valuesEnd[e];typeof i=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(i):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=t},n}();Pg.nextId;var zn=Dg;zn.getAll.bind(zn);zn.removeAll.bind(zn);zn.add.bind(zn);zn.remove.bind(zn);var sT=zn.update.bind(zn);const wd={type:"change"},nc={type:"start"},Ed={type:"end"};class rT extends ys{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new Z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ts.ROTATE,MIDDLE:Ts.DOLLY,RIGHT:Ts.PAN},this.touches={ONE:Cs.ROTATE,TWO:Cs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(E){E.addEventListener("keydown",O),this._domElementKeyEvents=E},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(wd),i.update(),r=s.NONE},this.update=function(){const E=new Z,U=new ds().setFromUnitVectors(e.up,new Z(0,1,0)),fe=U.clone().invert(),we=new Z,Me=new ds,Ce=2*Math.PI;return function(){const De=i.object.position;E.copy(De).sub(i.target),E.applyQuaternion(U),a.setFromVector3(E),i.autoRotate&&r===s.NONE&&T(L()),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Oe=i.minAzimuthAngle,$e=i.maxAzimuthAngle;return isFinite(Oe)&&isFinite($e)&&(Oe<-Math.PI?Oe+=Ce:Oe>Math.PI&&(Oe-=Ce),$e<-Math.PI?$e+=Ce:$e>Math.PI&&($e-=Ce),Oe<=$e?a.theta=Math.max(Oe,Math.min($e,a.theta)):a.theta=a.theta>(Oe+$e)/2?Math.max(Oe,a.theta):Math.min($e,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(i.minDistance,Math.min(i.maxDistance,a.radius)),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),E.setFromSpherical(a),E.applyQuaternion(fe),De.copy(i.target).add(E),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,f||we.distanceToSquared(i.object.position)>o||8*(1-Me.dot(i.object.quaternion))>o?(i.dispatchEvent(wd),we.copy(i.object.position),Me.copy(i.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",I),i.domElement.removeEventListener("pointerdown",J),i.domElement.removeEventListener("pointercancel",k),i.domElement.removeEventListener("wheel",q),i.domElement.removeEventListener("pointermove",ue),i.domElement.removeEventListener("pointerup",ce),i._domElementKeyEvents!==null&&i._domElementKeyEvents.removeEventListener("keydown",O)};const i=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const o=1e-6,a=new Sd,l=new Sd;let c=1;const u=new Z;let f=!1;const h=new Be,m=new Be,v=new Be,d=new Be,p=new Be,g=new Be,_=new Be,b=new Be,w=new Be,S=[],P={};function L(){return 2*Math.PI/60/60*i.autoRotateSpeed}function x(){return Math.pow(.95,i.zoomSpeed)}function T(E){l.theta-=E}function D(E){l.phi-=E}const V=function(){const E=new Z;return function(fe,we){E.setFromMatrixColumn(we,0),E.multiplyScalar(-fe),u.add(E)}}(),W=function(){const E=new Z;return function(fe,we){i.screenSpacePanning===!0?E.setFromMatrixColumn(we,1):(E.setFromMatrixColumn(we,0),E.crossVectors(i.object.up,E)),E.multiplyScalar(fe),u.add(E)}}(),N=function(){const E=new Z;return function(fe,we){const Me=i.domElement;if(i.object.isPerspectiveCamera){const Ce=i.object.position;E.copy(Ce).sub(i.target);let Te=E.length();Te*=Math.tan(i.object.fov/2*Math.PI/180),V(2*fe*Te/Me.clientHeight,i.object.matrix),W(2*we*Te/Me.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(V(fe*(i.object.right-i.object.left)/i.object.zoom/Me.clientWidth,i.object.matrix),W(we*(i.object.top-i.object.bottom)/i.object.zoom/Me.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function F(E){i.object.isPerspectiveCamera?c/=E:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*E)),i.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ie(E){i.object.isPerspectiveCamera?c*=E:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/E)),i.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function le(E){h.set(E.clientX,E.clientY)}function te(E){_.set(E.clientX,E.clientY)}function X(E){d.set(E.clientX,E.clientY)}function he(E){m.set(E.clientX,E.clientY),v.subVectors(m,h).multiplyScalar(i.rotateSpeed);const U=i.domElement;T(2*Math.PI*v.x/U.clientHeight),D(2*Math.PI*v.y/U.clientHeight),h.copy(m),i.update()}function _e(E){b.set(E.clientX,E.clientY),w.subVectors(b,_),w.y>0?F(x()):w.y<0&&ie(x()),_.copy(b),i.update()}function ve(E){p.set(E.clientX,E.clientY),g.subVectors(p,d).multiplyScalar(i.panSpeed),N(g.x,g.y),d.copy(p),i.update()}function K(E){E.deltaY<0?ie(x()):E.deltaY>0&&F(x()),i.update()}function G(E){let U=!1;switch(E.code){case i.keys.UP:E.ctrlKey||E.metaKey||E.shiftKey?D(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):N(0,i.keyPanSpeed),U=!0;break;case i.keys.BOTTOM:E.ctrlKey||E.metaKey||E.shiftKey?D(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):N(0,-i.keyPanSpeed),U=!0;break;case i.keys.LEFT:E.ctrlKey||E.metaKey||E.shiftKey?T(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):N(i.keyPanSpeed,0),U=!0;break;case i.keys.RIGHT:E.ctrlKey||E.metaKey||E.shiftKey?T(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):N(-i.keyPanSpeed,0),U=!0;break}U&&(E.preventDefault(),i.update())}function Q(){if(S.length===1)h.set(S[0].pageX,S[0].pageY);else{const E=.5*(S[0].pageX+S[1].pageX),U=.5*(S[0].pageY+S[1].pageY);h.set(E,U)}}function ee(){if(S.length===1)d.set(S[0].pageX,S[0].pageY);else{const E=.5*(S[0].pageX+S[1].pageX),U=.5*(S[0].pageY+S[1].pageY);d.set(E,U)}}function B(){const E=S[0].pageX-S[1].pageX,U=S[0].pageY-S[1].pageY,fe=Math.sqrt(E*E+U*U);_.set(0,fe)}function xe(){i.enableZoom&&B(),i.enablePan&&ee()}function me(){i.enableZoom&&B(),i.enableRotate&&Q()}function be(E){if(S.length==1)m.set(E.pageX,E.pageY);else{const fe=Y(E),we=.5*(E.pageX+fe.x),Me=.5*(E.pageY+fe.y);m.set(we,Me)}v.subVectors(m,h).multiplyScalar(i.rotateSpeed);const U=i.domElement;T(2*Math.PI*v.x/U.clientHeight),D(2*Math.PI*v.y/U.clientHeight),h.copy(m)}function ye(E){if(S.length===1)p.set(E.pageX,E.pageY);else{const U=Y(E),fe=.5*(E.pageX+U.x),we=.5*(E.pageY+U.y);p.set(fe,we)}g.subVectors(p,d).multiplyScalar(i.panSpeed),N(g.x,g.y),d.copy(p)}function Ee(E){const U=Y(E),fe=E.pageX-U.x,we=E.pageY-U.y,Me=Math.sqrt(fe*fe+we*we);b.set(0,Me),w.set(0,Math.pow(b.y/_.y,i.zoomSpeed)),F(w.y),_.copy(b)}function C(E){i.enableZoom&&Ee(E),i.enablePan&&ye(E)}function R(E){i.enableZoom&&Ee(E),i.enableRotate&&be(E)}function J(E){i.enabled!==!1&&(S.length===0&&(i.domElement.setPointerCapture(E.pointerId),i.domElement.addEventListener("pointermove",ue),i.domElement.addEventListener("pointerup",ce)),$(E),E.pointerType==="touch"?M(E):H(E))}function ue(E){i.enabled!==!1&&(E.pointerType==="touch"?y(E):z(E))}function ce(E){re(E),S.length===0&&(i.domElement.releasePointerCapture(E.pointerId),i.domElement.removeEventListener("pointermove",ue),i.domElement.removeEventListener("pointerup",ce)),i.dispatchEvent(Ed),r=s.NONE}function k(E){re(E)}function H(E){let U;switch(E.button){case 0:U=i.mouseButtons.LEFT;break;case 1:U=i.mouseButtons.MIDDLE;break;case 2:U=i.mouseButtons.RIGHT;break;default:U=-1}switch(U){case Ts.DOLLY:if(i.enableZoom===!1)return;te(E),r=s.DOLLY;break;case Ts.ROTATE:if(E.ctrlKey||E.metaKey||E.shiftKey){if(i.enablePan===!1)return;X(E),r=s.PAN}else{if(i.enableRotate===!1)return;le(E),r=s.ROTATE}break;case Ts.PAN:if(E.ctrlKey||E.metaKey||E.shiftKey){if(i.enableRotate===!1)return;le(E),r=s.ROTATE}else{if(i.enablePan===!1)return;X(E),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(nc)}function z(E){switch(r){case s.ROTATE:if(i.enableRotate===!1)return;he(E);break;case s.DOLLY:if(i.enableZoom===!1)return;_e(E);break;case s.PAN:if(i.enablePan===!1)return;ve(E);break}}function q(E){i.enabled===!1||i.enableZoom===!1||r!==s.NONE||(E.preventDefault(),i.dispatchEvent(nc),K(E),i.dispatchEvent(Ed))}function O(E){i.enabled===!1||i.enablePan===!1||G(E)}function M(E){switch(oe(E),S.length){case 1:switch(i.touches.ONE){case Cs.ROTATE:if(i.enableRotate===!1)return;Q(),r=s.TOUCH_ROTATE;break;case Cs.PAN:if(i.enablePan===!1)return;ee(),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(i.touches.TWO){case Cs.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;xe(),r=s.TOUCH_DOLLY_PAN;break;case Cs.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;me(),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(nc)}function y(E){switch(oe(E),r){case s.TOUCH_ROTATE:if(i.enableRotate===!1)return;be(E),i.update();break;case s.TOUCH_PAN:if(i.enablePan===!1)return;ye(E),i.update();break;case s.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;C(E),i.update();break;case s.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;R(E),i.update();break;default:r=s.NONE}}function I(E){i.enabled!==!1&&E.preventDefault()}function $(E){S.push(E)}function re(E){delete P[E.pointerId];for(let U=0;U<S.length;U++)if(S[U].pointerId==E.pointerId){S.splice(U,1);return}}function oe(E){let U=P[E.pointerId];U===void 0&&(U=new Be,P[E.pointerId]=U),U.set(E.pageX,E.pageY)}function Y(E){const U=E.pointerId===S[0].pointerId?S[1]:S[0];return P[U.pointerId]}i.domElement.addEventListener("contextmenu",I),i.domElement.addEventListener("pointerdown",J),i.domElement.addEventListener("pointercancel",k),i.domElement.addEventListener("wheel",q,{passive:!1}),this.update()}}const Td=14,oT=60;class aT{constructor(e){ot(this,"scene");ot(this,"camera");ot(this,"renderer");ot(this,"clock");ot(this,"controls");ot(this,"animations",[]);this.clock=new tT,this.scene=new KE,this.scene.background=new it(855314);const t=new eT(16777215,.6);this.scene.add(t);const i=new yd(16777215,2.8);i.position.set(12,18,14),i.castShadow=!0,i.shadow.mapSize.width=2048,i.shadow.mapSize.height=2048,i.shadow.camera.near=.5,i.shadow.camera.far=80,i.shadow.camera.left=-20,i.shadow.camera.right=20,i.shadow.camera.top=20,i.shadow.camera.bottom=-20,i.shadow.bias=-.001,this.scene.add(i);const s=new yd(9356796,.8);s.position.set(-10,-8,6),this.scene.add(s);const r=new JE(16770229,.6,40);r.position.set(0,-10,-8),this.scene.add(r),this.camera=this.buildCamera(e),this.renderer=new Ag({antialias:!0,alpha:!1}),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ig,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.outputColorSpace="srgb",this.controls=this.buildControls(e),this.adjustSize(e),e.appendChild(this.renderer.domElement),window.addEventListener("resize",()=>this.adjustSize(e))}start(){this.renderer.setAnimationLoop(()=>{sT(),this.controls.update();const e=this.clock.getDelta();this.animations.forEach(t=>t(e)),this.renderer.render(this.scene,this.camera)})}stop(){this.renderer.setAnimationLoop(null)}getScene(){return this.scene}getCamera(){return this.camera}getRendererDomElement(){return this.renderer.domElement}addAnimationLoop(e){this.animations.push(e)}setControlsEnabled(e){this.controls.enabled=e}bringCameraToCenter(){return this.tweenCamera(Td,5,5)}sendCameraAway(){return this.tweenCamera(oT,0,-5)}tweenCamera(e,t,i){return new Promise(s=>{const r={length:Math.round(this.camera.position.length()),x:this.camera.position.x,y:this.camera.position.y},o={length:e,x:t,y:i};new Ig(r).to(o,500).easing(Zu.Quadratic.InOut).onUpdate(a=>{this.camera.position.setLength(a.length),this.camera.position.x=a.x,this.camera.position.y=a.y,this.camera.lookAt(new Z(0,0,0))}).onComplete(a=>{this.camera.position.setLength(a.length),this.camera.position.x=a.x,this.camera.position.y=a.y,this.camera.lookAt(new Z(0,0,0)),s()}).start()})}buildCamera(e){const t=new cn(38,e.clientWidth/e.clientHeight,.1,200);return t.position.set(5,6,Td),t}buildControls(e){const t=new rT(this.camera,this.renderer.domElement);return t.enableDamping=!0,t.dampingFactor=.06,t.minDistance=8,t.maxDistance=50,t.enablePan=!1,t}adjustSize(e){this.camera.aspect=e.clientWidth/e.clientHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(e.clientWidth,e.clientHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))}}var se=(n=>(n[n.UP=0]="UP",n[n.LEFT=1]="LEFT",n[n.FRONT=2]="FRONT",n[n.RIGHT=3]="RIGHT",n[n.BACK=4]="BACK",n[n.DOWN=5]="DOWN",n))(se||{});const Yr=()=>Object.keys(se).filter(n=>!isNaN(Number(n))).map(n=>Number(n));var vt=(n=>(n[n.YELLOW=0]="YELLOW",n[n.ORANGE=1]="ORANGE",n[n.BLUE=2]="BLUE",n[n.RED=3]="RED",n[n.GREEN=4]="GREEN",n[n.WHITE=5]="WHITE",n))(vt||{});const Fg=n=>{switch(n){case 0:return 12696320;case 1:return 11488e3;case 2:return 2377328;case 3:return 8589842;case 4:return 30991;case 5:return 12895428}},Ms=new Map;Ms.set(0,"y");Ms.set(1,"o");Ms.set(2,"b");Ms.set(3,"r");Ms.set(4,"g");Ms.set(5,"w");const Cd=n=>Ms.get(n),Ss=new Map;Ss.set("y",0);Ss.set("o",1);Ss.set("b",2);Ss.set("r",3);Ss.set("g",4);Ss.set("w",5);const fa=n=>Ss.get(n),Ur=new Z;function xn(n,e,t,i,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Ur.copy(e),Ur[i]=0,Ur.normalize();const c=.5*o/(o+a),u=1-Ur.angleTo(n)/l;return Math.sign(Ur[t])===1?u*c:a/(o+a)+c+c*(1-u)}class lT extends Mr{constructor(e=1,t=1,i=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,i/2,r),super(1,1,1,s,s,s),s===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new Z,l=new Z,c=new Z(e,t,i).divideScalar(2).subScalar(r),u=this.attributes.position.array,f=this.attributes.normal.array,h=this.attributes.uv.array,m=u.length/6,v=new Z,d=.5/s;for(let p=0,g=0;p<u.length;p+=3,g+=2)switch(a.fromArray(u,p),l.copy(a),l.x-=Math.sign(l.x)*d,l.y-=Math.sign(l.y)*d,l.z-=Math.sign(l.z)*d,l.normalize(),u[p+0]=c.x*Math.sign(a.x)+l.x*r,u[p+1]=c.y*Math.sign(a.y)+l.y*r,u[p+2]=c.z*Math.sign(a.z)+l.z*r,f[p+0]=l.x,f[p+1]=l.y,f[p+2]=l.z,Math.floor(p/m)){case 0:v.set(1,0,0),h[g+0]=xn(v,l,"z","y",r,i),h[g+1]=1-xn(v,l,"y","z",r,t);break;case 1:v.set(-1,0,0),h[g+0]=1-xn(v,l,"z","y",r,i),h[g+1]=1-xn(v,l,"y","z",r,t);break;case 2:v.set(0,1,0),h[g+0]=1-xn(v,l,"x","z",r,e),h[g+1]=xn(v,l,"z","x",r,i);break;case 3:v.set(0,-1,0),h[g+0]=1-xn(v,l,"x","z",r,e),h[g+1]=1-xn(v,l,"z","x",r,i);break;case 4:v.set(0,0,1),h[g+0]=1-xn(v,l,"x","y",r,e),h[g+1]=1-xn(v,l,"y","x",r,t);break;case 5:v.set(0,0,-1),h[g+0]=xn(v,l,"x","y",r,e),h[g+1]=1-xn(v,l,"y","x",r,t);break}}}const Ad={0:se.RIGHT,1:se.LEFT,2:se.UP,3:se.DOWN,4:se.FRONT,5:se.BACK},cT=658188,uT=4473924;class fT{constructor(e){ot(this,"cubeletMesh");const t=e.cubeDimension*.018,i=e.sideSize-t,s=new lT(i,i,i,4,.05),r=this.getPositionFromCubelet(e);r.subScalar((e.cubeDimension-1)*.5),r.multiplyScalar(e.sideSize);const o=this.createMaterials(e.cubelet);this.cubeletMesh=new Dn(s,o),this.cubeletMesh.castShadow=!0,this.cubeletMesh.receiveShadow=!0,this.cubeletMesh.position.set(r.x,r.y,r.z);const a={};for(let l=0;l<=5;l++){const c=Ad[l],u=e.cubelet.stickers.find(f=>f.side===c);a[l]=u?{stickerIndex:u.id,side:c}:null}this.cubeletMesh.userData.stickersByFace=a}getMesh(){return this.cubeletMesh}updateFaceColor(e,t){const s=this.cubeletMesh.material[e];s&&(s.color.setHex(t??uT),s.needsUpdate=!0)}createMaterials(e){return Array.from({length:6}).map((t,i)=>{const s=Ad[i],r=e.stickers.find(a=>a.side===s),o=r?Fg(r.color):cT;return new YE({color:o,roughness:.45,metalness:.05,transparent:!1})})}getPositionFromCubelet(e){let t=0,i=0,s=0;const r=e.cubelet.stickers[0],o=e.cubeDimension;switch(r.side){case se.UP:i=o-1,t=r.x,s=r.y;break;case se.DOWN:i=0,t=r.x,s=o-1-r.y;break;case se.RIGHT:t=o-1,i=o-1-r.y,s=o-1-r.x;break;case se.LEFT:t=0,i=o-1-r.y,s=r.x;break;case se.FRONT:s=o-1,t=r.x,i=o-1-r.y;break;case se.BACK:s=0,t=o-1-r.x,i=o-1-r.y;break}return new Z(t,i,s)}}var Ng=(n=>(n.x="x",n.y="y",n.z="z",n))(Ng||{});const hT=n=>{switch(n){case se.BACK:case se.FRONT:return"z";case se.UP:case se.DOWN:return"y";case se.LEFT:case se.RIGHT:return"x"}},Ia=class Ia{constructor(e){ot(this,"parent");ot(this,"dimension");ot(this,"rubiksCubeGroup");ot(this,"cubeletRenderers",[]);this.rubiksCubeGroup=new qs,this.parent=e.parent,this.dimension=e.cube.getDimension();const t=e.size/this.dimension;e.cube.getAllCubelets().forEach(i=>{const s=new fT({sideSize:t,cubelet:i,cubeDimension:this.dimension}),r=s.getMesh();r.parent=this.rubiksCubeGroup,this.rubiksCubeGroup.add(r),this.cubeletRenderers.push(s)}),this.rubiksCubeGroup.position.copy(e.position),this.parent.add(this.rubiksCubeGroup)}getMesh(){return this.rubiksCubeGroup}getRaycasterTargets(){return this.rubiksCubeGroup.children.filter(e=>e instanceof Dn)}getClickedSticker(e){var o;const t=e.object,i=(o=e.face)==null?void 0:o.materialIndex;if(i==null)return null;const s=t.userData.stickersByFace;if(!s)return null;const r=s[i];return r?{mesh:t,faceIndex:i,sticker:r}:null}updateStickerColor(e,t){const i=t!==null?Fg(t):null;for(const s of this.rubiksCubeGroup.children){if(!(s instanceof Dn))continue;const r=s.userData.stickersByFace;if(r){for(const[o,a]of Object.entries(r))if(a&&a.stickerIndex===e){const c=s.material[Number(o)];c&&(c.color.setHex(i??4473924),c.needsUpdate=!0)}}}}applyFullConfig(e,t){for(let i=0;i<e.length;i++)this.updateStickerColor(i,t(e[i]))}async rotateFace(e){const t=hT(e.side),i=Ng[t];let s=Math.PI/2*(e.counterClockwiseDirection?1:-1);(e.side===se.BACK||e.side===se.DOWN||e.side===se.LEFT)&&(s*=-1);const r=this.buildRotationGroup(i,e);this.parent.add(r);const o={rotation:0},a={rotation:s},l=e.duration!==void 0?e.duration:Ia.DEFAULT_ANIM_DURATION;return new Promise(c=>{new Ig(o).to(a,l).easing(e.easing??Zu.Quadratic.InOut).onUpdate(u=>{r.rotation[i]=u.rotation}).onComplete(()=>{r.rotation[i]=s,r.updateMatrixWorld(!0),r.children.forEach(u=>{const f=u.matrixWorld.clone(),h=new Z().setFromMatrixPosition(f);u.parent=this.rubiksCubeGroup,u.position.copy(h.clone().sub(this.rubiksCubeGroup.position)),u.rotation.setFromRotationMatrix(f)}),this.parent.remove(r),c()}).start()})}buildRotationGroup(e,t){let i=(a,l)=>l-a;(t.side===se.BACK||t.side===se.DOWN||t.side===se.LEFT)&&(i=(a,l)=>a-l);let s=0,r=this.dimension*this.dimension;t.layer!==void 0&&t.layer>0&&(r=4*(this.dimension-1),s=(t.layer-1)*r+this.dimension*this.dimension);const o=new qs;return this.rubiksCubeGroup.children.slice().sort((a,l)=>i(a.position[e],l.position[e])).filter((a,l)=>l>=s&&l<s+r).forEach(a=>{a.parent=o,o.add(a)}),this.rubiksCubeGroup.getWorldPosition(o.position),o}};ot(Ia,"DEFAULT_ANIM_DURATION",280);let Hc=Ia;const Xs=class Xs{constructor(e){ot(this,"dimension");ot(this,"stickers");ot(this,"cubeletCounter");this.dimension=e,this.stickers=[],this.cubeletCounter=0}create(){if(Xs.cubeletsCreatorMap.has(this.dimension))return Xs.cubeletsCreatorMap.get(this.dimension);{let e=0;Yr().map(o=>{for(let a=0;a<this.dimension;++a)for(let l=0;l<this.dimension;++l)this.stickers.push({side:o,x:l,y:a,id:e++})});const t=this.extractCenters(),i=this.extractCorners(),s=this.extractEdges(),r=[...i,...s,...t];return Xs.cubeletsCreatorMap.set(this.dimension,r),r}}cubeletsMerger(e){const t={stickers:[],id:++this.cubeletCounter};return e.forEach(i=>{this.stickers.forEach((s,r,o)=>{s.side===i.side&&i.x===s.x&&i.y===s.y&&t.stickers.push(...o.splice(r,1))})}),t}extractEdges(){const e=this.dimension-1,t=[];for(let i=1;i<this.dimension-1;++i)t.push(this.cubeletsMerger([{side:se.FRONT,x:0,y:i},{side:se.LEFT,x:e,y:i}])),t.push(this.cubeletsMerger([{side:se.FRONT,x:e,y:i},{side:se.RIGHT,x:0,y:i}])),t.push(this.cubeletsMerger([{side:se.FRONT,x:i,y:0},{side:se.UP,x:i,y:e}])),t.push(this.cubeletsMerger([{side:se.FRONT,x:i,y:e},{side:se.DOWN,x:i,y:0}])),t.push(this.cubeletsMerger([{side:se.BACK,x:e,y:i},{side:se.LEFT,x:0,y:i}])),t.push(this.cubeletsMerger([{side:se.BACK,x:0,y:i},{side:se.RIGHT,x:e,y:i}])),t.push(this.cubeletsMerger([{side:se.BACK,x:i,y:0},{side:se.UP,x:e-i,y:0}])),t.push(this.cubeletsMerger([{side:se.BACK,x:i,y:e},{side:se.DOWN,x:e-i,y:e}])),t.push(this.cubeletsMerger([{side:se.RIGHT,x:i,y:0},{side:se.UP,x:e,y:e-i}])),t.push(this.cubeletsMerger([{side:se.RIGHT,x:i,y:e},{side:se.DOWN,x:e,y:i}])),t.push(this.cubeletsMerger([{side:se.LEFT,x:i,y:0},{side:se.UP,x:0,y:i}])),t.push(this.cubeletsMerger([{side:se.LEFT,x:i,y:e},{side:se.DOWN,x:0,y:e-i}]));return t}extractCenters(){const e=this.dimension-1,t=[];return this.stickers.filter(i=>i.x!==0&&i.x!==e&&i.y!==0&&i.y!==e).forEach(i=>{t.push({stickers:[i],id:++this.cubeletCounter})}),t}extractCorners(){const e=[],t=this.dimension-1;return e.push(this.cubeletsMerger([{side:se.FRONT,x:0,y:0},{side:se.UP,x:0,y:t},{side:se.LEFT,x:t,y:0}])),e.push(this.cubeletsMerger([{side:se.FRONT,x:t,y:0},{side:se.UP,x:t,y:t},{side:se.RIGHT,x:0,y:0}])),e.push(this.cubeletsMerger([{side:se.FRONT,x:0,y:t},{side:se.DOWN,x:0,y:0},{side:se.LEFT,x:t,y:t}])),e.push(this.cubeletsMerger([{side:se.FRONT,x:t,y:t},{side:se.DOWN,x:t,y:0},{side:se.RIGHT,x:0,y:t}])),e.push(this.cubeletsMerger([{side:se.BACK,x:0,y:0},{side:se.UP,x:t,y:0},{side:se.RIGHT,x:t,y:0}])),e.push(this.cubeletsMerger([{side:se.BACK,x:t,y:0},{side:se.UP,x:0,y:0},{side:se.LEFT,x:0,y:0}])),e.push(this.cubeletsMerger([{side:se.BACK,x:0,y:t},{side:se.DOWN,x:t,y:t},{side:se.RIGHT,x:t,y:t}])),e.push(this.cubeletsMerger([{side:se.BACK,x:t,y:t},{side:se.DOWN,x:0,y:t},{side:se.LEFT,x:0,y:t}])),e}};ot(Xs,"cubeletsCreatorMap",new Map);let Gc=Xs;const Ks=class Ks{constructor(e){ot(this,"dimension");if(this.dimension=e,!Ks.faceRotatorMap.has(this.dimension)){const t=new Map;for(let i=0;i<this.dimension;++i){const s=this.createUpFaceClockwiseRotator(i),r=this.createLeftFaceClockwiseRotator(i),o=this.createFrontFaceClockwiseRotator(i),a=this.createRightFaceClockwiseRotator(i),l=this.createBackFaceClockwiseRotator(i),c=this.createDownFaceClockwiseRotator(i),u=new Map;u.set(se.UP,s.map(f=>this.faceStickerMapper(f))),u.set(se.LEFT,r.map(f=>this.faceStickerMapper(f))),u.set(se.FRONT,o.map(f=>this.faceStickerMapper(f))),u.set(se.RIGHT,a.map(f=>this.faceStickerMapper(f))),u.set(se.BACK,l.map(f=>this.faceStickerMapper(f))),u.set(se.DOWN,c.map(f=>this.faceStickerMapper(f))),t.set(i,u)}Ks.faceRotatorMap.set(this.dimension,t)}}rotate(e,t){const i=new pi({clone:e.getConfiguration()}),s=[];return Ks.faceRotatorMap.get(this.dimension).get(t.layer||0).get(t.side).forEach(r=>{t.counterClockwiseDirection?s.push({index:r.source,color:e.getColorOfIndex(r.destination)}):s.push({index:r.destination,color:e.getColorOfIndex(r.source)})}),i.setColorsOfIndexes(s),i}idMapper(e){let t=e.side*this.dimension*this.dimension;return t+=this.dimension*e.y,t+=e.x,t}faceStickerMapper(e){return{source:this.idMapper(e.source),destination:this.idMapper(e.destination)}}createSideLidClockwiseRotator(e){const t=[];for(let i=0;i<this.dimension*this.dimension;++i){const s=i%this.dimension,r=Math.floor(i/this.dimension),o=this.dimension-1-r,a=s;t.push({source:{side:e,x:s,y:r},destination:{side:e,x:o,y:a}})}return t}createUpFaceClockwiseRotator(e){this.dimension-1;const t=[];e===0&&t.push(...this.createSideLidClockwiseRotator(se.UP));for(let i=0;i<this.dimension;++i)t.push({source:{side:se.FRONT,x:i,y:e},destination:{side:se.LEFT,x:i,y:e}}),t.push({source:{side:se.LEFT,x:i,y:e},destination:{side:se.BACK,x:i,y:e}}),t.push({source:{side:se.BACK,x:i,y:e},destination:{side:se.RIGHT,x:i,y:e}}),t.push({source:{side:se.RIGHT,x:i,y:e},destination:{side:se.FRONT,x:i,y:e}});return t}createLeftFaceClockwiseRotator(e){const t=this.dimension-1,i=[];e===0&&i.push(...this.createSideLidClockwiseRotator(se.LEFT));for(let s=0;s<this.dimension;++s)i.push({source:{side:se.FRONT,x:e,y:s},destination:{side:se.DOWN,x:e,y:s}}),i.push({source:{side:se.DOWN,x:e,y:s},destination:{side:se.BACK,x:t-e,y:t-s}}),i.push({source:{side:se.BACK,x:t-e,y:t-s},destination:{side:se.UP,x:e,y:s}}),i.push({source:{side:se.UP,x:e,y:s},destination:{side:se.FRONT,x:e,y:s}});return i}createFrontFaceClockwiseRotator(e){const t=this.dimension-1,i=[];e===0&&i.push(...this.createSideLidClockwiseRotator(se.FRONT));for(let s=0;s<this.dimension;++s)i.push({source:{side:se.UP,x:s,y:t-e},destination:{side:se.RIGHT,x:e,y:s}}),i.push({source:{side:se.RIGHT,x:e,y:s},destination:{side:se.DOWN,x:t-s,y:e}}),i.push({source:{side:se.DOWN,x:t-s,y:e},destination:{side:se.LEFT,x:t-e,y:t-s}}),i.push({source:{side:se.LEFT,x:t-e,y:t-s},destination:{side:se.UP,x:s,y:t-e}});return i}createRightFaceClockwiseRotator(e){const t=this.dimension-1,i=[];e===0&&i.push(...this.createSideLidClockwiseRotator(se.RIGHT));for(let s=0;s<this.dimension;++s)i.push({source:{side:se.UP,x:t-e,y:s},destination:{side:se.BACK,x:e,y:t-s}}),i.push({source:{side:se.BACK,x:e,y:t-s},destination:{side:se.DOWN,x:t-e,y:s}}),i.push({source:{side:se.DOWN,x:t-e,y:s},destination:{side:se.FRONT,x:t-e,y:s}}),i.push({source:{side:se.FRONT,x:t-e,y:s},destination:{side:se.UP,x:t-e,y:s}});return i}createBackFaceClockwiseRotator(e){const t=this.dimension-1,i=[];e===0&&i.push(...this.createSideLidClockwiseRotator(se.BACK));for(let s=0;s<this.dimension;++s)i.push({source:{side:se.LEFT,x:e,y:s},destination:{side:se.DOWN,x:s,y:t-e}}),i.push({source:{side:se.DOWN,x:s,y:t-e},destination:{side:se.RIGHT,x:t-e,y:t-s}}),i.push({source:{side:se.RIGHT,x:t-e,y:t-s},destination:{side:se.UP,x:t-s,y:e}}),i.push({source:{side:se.UP,x:t-s,y:e},destination:{side:se.LEFT,x:e,y:s}});return i}createDownFaceClockwiseRotator(e){const t=this.dimension-1,i=[];e===0&&i.push(...this.createSideLidClockwiseRotator(se.DOWN));for(let s=0;s<this.dimension;++s)i.push({source:{side:se.LEFT,x:s,y:t-e},destination:{side:se.FRONT,x:s,y:t-e}}),i.push({source:{side:se.FRONT,x:s,y:t-e},destination:{side:se.RIGHT,x:s,y:t-e}}),i.push({source:{side:se.RIGHT,x:s,y:t-e},destination:{side:se.BACK,x:s,y:t-e}}),i.push({source:{side:se.BACK,x:s,y:t-e},destination:{side:se.LEFT,x:s,y:t-e}});return i}};ot(Ks,"faceRotatorMap",new Map);let Wc=Ks;const ws=new Map;ws.set(se.FRONT,vt.BLUE);ws.set(se.UP,vt.YELLOW);ws.set(se.RIGHT,vt.RED);ws.set(se.LEFT,vt.ORANGE);ws.set(se.BACK,vt.GREEN);ws.set(se.DOWN,vt.WHITE);class pi{constructor(e){ot(this,"configuration");ot(this,"dimension");ot(this,"faceRotator");ot(this,"colorlessCubelets");if(this.dimension=e==null?void 0:e.dimension,e!=null&&e.clone)this.dimension=Math.sqrt(e.clone.length/6),this.configuration=e.clone.slice();else{const t=this.dimension*this.dimension,i=(e==null?void 0:e.colorMap)||ws,s=Yr();this.configuration="";for(let r=0;r<s.length;++r){const o=i.get(r),a=Cd(o);this.configuration+=a.repeat(t)}}this.faceRotator=new Wc(this.dimension),this.colorlessCubelets=new Gc(this.dimension).create()}clone(){return new pi({clone:this.configuration})}getDimension(){return this.dimension}getConfiguration(){return this.configuration}getHash(){return this.configuration}isSolved(){const e=this.dimension*this.dimension,t=Yr(),i=Array.from(new Array(e));return t.every((s,r)=>i.every((o,a)=>this.configuration[r*e+a]===this.configuration[r*e]))}rotateFace(e){return this.faceRotator.rotate(this,e)}getAllCubelets(){return this.addColorToCubelets(this.colorlessCubelets)}getAllColorlessCubelets(){return this.colorlessCubelets}getSideOfIndex(e){const t=Yr().length;return e/t}getColorlessCubeletOfIndex(e){return this.colorlessCubelets.find(t=>t.stickers.some(i=>i.id===e))}getCubeletsBySides(...e){const t=this.colorlessCubelets.filter(i=>i.stickers.every(s=>e.includes(s.side)));return this.addColorToCubelets(t)}getCubeletsByColors(...e){const t=this.colorlessCubelets.filter(i=>i.stickers.every(s=>e.includes(fa(this.configuration[s.id]))));return this.addColorToCubelets(t)}getColorOfIndex(e){return fa(this.configuration[e])}setColorsOfIndexes(e){const t=this.configuration.split("");e.forEach(i=>{t[i.index]=Cd(i.color)}),this.configuration=t.join("")}addColorToCubelets(e){return e.map(t=>({stickers:t.stickers.map(i=>({...i,color:fa(this.configuration[i.id])}))}))}}class dT{constructor(e=30){ot(this,"moves");this.moves=e}scramble(e){let t;const i=Math.floor(e.getDimension()/2),s=Yr(),r=[];return Array.from(new Array(this.moves)).forEach(()=>{const o=Math.floor(Math.random()*6)===0,a=Math.floor(Math.random()*2)===0,l=Math.floor(Math.random()*i);let c=Math.floor(Math.random()*s.length),u={side:c,counterClockwiseDirection:a,layer:l};for(;t!==void 0&&t.side===u.side&&t.layer===u.layer;)c=Math.floor(Math.random()*s.length),u={side:c,counterClockwiseDirection:a,layer:l};t=u,o&&(u.counterClockwiseDirection=!1,r.push(u)),r.push(u)}),r.filter((o,a)=>a<this.moves)}}const ic={world:{scrambleMoves:()=>Math.floor(Math.random()*10+28),scrambleRotationDuration:70},renderers:{rotationDuration:280}};function pT(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var ha={exports:{}},mT=ha.exports,Rd;function Og(){return Rd||(Rd=1,function(n){(function(){var e,t,i,s,r,o,a,l,c,u,f,h,m,v,d,p,g,_,b,w,S,P,L,x,T,D,V,W,N,F,ie,le,te;[b,_,v,r,g,e]=[0,1,2,3,4,5],[V,L,T,S,c,f,a,m]=[0,1,2,3,4,5,6,7],[D,P,x,w,h,l,u,o,p,d,t,i]=[0,1,2,3,4,5,6,7,8,9,10,11],[N,ie,te]=function(){var X,he,_e,ve,K,G;return G=function(Q){return Q-1},K=function(Q){return G(9)+Q},_e=function(Q){return K(9)+Q},he=function(Q){return _e(9)+Q},ve=function(Q){return he(9)+Q},X=function(Q){return ve(9)+Q},[[4,13,22,31,40,49],[[G(9),K(1),_e(3)],[G(7),_e(1),ve(3)],[G(1),ve(1),X(3)],[G(3),X(1),K(3)],[he(3),_e(9),K(7)],[he(1),ve(9),_e(7)],[he(7),X(9),ve(7)],[he(9),K(9),X(7)]],[[G(6),K(2)],[G(8),_e(2)],[G(4),ve(2)],[G(2),X(2)],[he(6),K(8)],[he(2),_e(8)],[he(4),ve(8)],[he(8),X(8)],[_e(6),K(4)],[_e(4),ve(6)],[X(6),ve(4)],[X(4),K(6)]]]}(),W=["U","R","F","D","L","B"],F=[["U","R","F"],["U","F","L"],["U","L","B"],["U","B","R"],["D","F","R"],["D","L","F"],["D","B","L"],["D","R","B"]],le=[["U","R"],["U","F"],["U","L"],["U","B"],["D","R"],["D","F"],["D","L"],["D","B"],["F","R"],["F","L"],["B","L"],["B","R"]],s=(function(){var X,he,_e;class ve{constructor(G){G!=null?this.init(G):this.identity(),this.newCenter=function(){var Q,ee;for(ee=[],Q=0;Q<=5;++Q)ee.push(0);return ee}(),this.newCp=function(){var Q,ee;for(ee=[],Q=0;Q<=7;++Q)ee.push(0);return ee}(),this.newEp=function(){var Q,ee;for(ee=[],Q=0;Q<=11;++Q)ee.push(0);return ee}(),this.newCo=function(){var Q,ee;for(ee=[],Q=0;Q<=7;++Q)ee.push(0);return ee}(),this.newEo=function(){var Q,ee;for(ee=[],Q=0;Q<=11;++Q)ee.push(0);return ee}()}init(G){return this.center=G.center.slice(0),this.co=G.co.slice(0),this.ep=G.ep.slice(0),this.cp=G.cp.slice(0),this.eo=G.eo.slice(0)}identity(){return this.center=[0,1,2,3,4,5],this.cp=[0,1,2,3,4,5,6,7],this.co=function(){var G,Q;for(Q=[],G=0;G<=7;++G)Q.push(0);return Q}(),this.ep=[0,1,2,3,4,5,6,7,8,9,10,11],this.eo=function(){var G,Q;for(Q=[],G=0;G<=11;++G)Q.push(0);return Q}()}toJSON(){return{center:this.center,cp:this.cp,co:this.co,ep:this.ep,eo:this.eo}}asString(){var G,Q,ee,B,xe,me,be,ye,Ee,C,R;for(R=[],ee=B=0;B<=5;ee=++B)R[9*ee+4]=W[this.center[ee]];for(ee=xe=0;xe<=7;ee=++xe)for(G=this.cp[ee],Ee=this.co[ee],be=me=0;me<=2;be=++me)R[ie[ee][(be+Ee)%3]]=F[G][be];for(ee=ye=0;ye<=11;ee=++ye)for(Q=this.ep[ee],Ee=this.eo[ee],be=C=0;C<=1;be=++C)R[te[ee][(be+Ee)%2]]=le[Q][be];return R.join("")}static fromString(G){var Q,ee,B,xe,me,be,ye,Ee,C,R,J,ue,ce,k;for(B=new ve,xe=be=0;be<=5;xe=++be)for(me=ye=0;ye<=5;me=++ye)G[9*xe+4]===W[me]&&(B.center[xe]=me);for(xe=Ee=0;Ee<=7;xe=++Ee){for(R=C=0;C<=2&&!((k=G[ie[xe][R]])==="U"||k==="D");R=++C);for(Q=G[ie[xe][(R+1)%3]],ee=G[ie[xe][(R+2)%3]],me=J=0;J<=7;me=++J)Q===F[me][1]&&ee===F[me][2]&&(B.cp[xe]=me,B.co[xe]=R%3)}for(xe=ue=0;ue<=11;xe=++ue)for(me=ce=0;ce<=11;me=++ce){if(G[te[xe][0]]===le[me][0]&&G[te[xe][1]]===le[me][1]){B.ep[xe]=me,B.eo[xe]=0;break}if(G[te[xe][0]]===le[me][1]&&G[te[xe][1]]===le[me][0]){B.ep[xe]=me,B.eo[xe]=1;break}}return B}clone(){return new ve(this.toJSON())}static random(){return new ve().randomize()}isSolved(){var G,Q,ee,B,xe,me,be;for(ee=this.clone(),ee.move(ee.upright()),Q=xe=0;xe<=5;Q=++xe)if(ee.center[Q]!==Q)return!1;for(G=me=0;me<=7;G=++me)if(ee.cp[G]!==G||ee.co[G]!==0)return!1;for(B=be=0;be<=11;B=++be)if(ee.ep[B]!==B||ee.eo[B]!==0)return!1;return!0}centerMultiply(G){var Q,ee,B;for(B=ee=0;ee<=5;B=++ee)Q=G.center[B],this.newCenter[B]=this.center[Q];return[this.center,this.newCenter]=[this.newCenter,this.center],this}cornerMultiply(G){var Q,ee,B;for(B=ee=0;ee<=7;B=++ee)Q=G.cp[B],this.newCp[B]=this.cp[Q],this.newCo[B]=(this.co[Q]+G.co[B])%3;return[this.cp,this.newCp]=[this.newCp,this.cp],[this.co,this.newCo]=[this.newCo,this.co],this}edgeMultiply(G){var Q,ee,B;for(B=ee=0;ee<=11;B=++ee)Q=G.ep[B],this.newEp[B]=this.ep[Q],this.newEo[B]=(this.eo[Q]+G.eo[B])%2;return[this.ep,this.newEp]=[this.newEp,this.ep],[this.eo,this.newEo]=[this.newEo,this.eo],this}multiply(G){return this.centerMultiply(G),this.cornerMultiply(G),this.edgeMultiply(G),this}move(G){var Q,ee,B,xe,me,be,ye,Ee;for(ye=_e(G),ee=0,xe=ye.length;ee<xe;ee++)for(me=ye[ee],Q=me/3|0,be=me%3,B=0,Ee=be;0<=Ee?B<=Ee:B>=Ee;0<=Ee?++B:--B)this.multiply(ve.moves[Q]);return this}upright(){var G,Q,ee,B,xe,me;for(G=this.clone(),me=[],Q=B=0;B<=5&&G.center[Q]!==v;Q=++B);switch(Q){case r:me.push("x");break;case b:me.push("x'");break;case e:me.push("x2");break;case _:me.push("y");break;case g:me.push("y'")}for(me.length&&G.move(me[0]),ee=xe=0;xe<=5&&G.center[ee]!==b;ee=++xe);switch(ee){case g:me.push("z");break;case _:me.push("z'");break;case r:me.push("z2")}return me.join(" ")}static inverse(G){var Q,ee,B,xe,me,be,ye;if(be=function(){var Ee,C,R,J;for(R=_e(G),J=[],Ee=0,C=R.length;Ee<C;Ee++)xe=R[Ee],Q=xe/3|0,me=xe%3,J.push(Q*3+-(me-1)+1);return J}(),be.reverse(),typeof G=="string"){for(ye="",ee=0,B=be.length;ee<B;ee++)xe=be[ee],Q=xe/3|0,me=xe%3,ye+=X[Q],me===1?ye+="2":me===2&&(ye+="'"),ye+=" ";return ye.substring(0,ye.length-1)}else return G.length!=null?be:be[0]}}return ve.prototype.randomize=function(){var K,G,Q,ee,B,xe,me,be,ye;return xe=function(Ee,C){return Ee+Math.floor(Math.random()*(C-Ee+1))},ye=function(Ee){var C,R;for(C=Ee.length;C!==0;)R=xe(0,C-1),C-=1,Ee[C],[Ee[C],Ee[R]]=[Ee[R],Ee[C]]},ee=function(Ee){var C,R,J,ue,ce,k,H;for(ce=0,H=function(){var z,q,O;for(O=[],z=0,q=Ee.length-1;0<=q?z<=q:z>=q;0<=q?++z:--z)O.push(!1);return O}();;){for(C=-1,J=ue=0,k=Ee.length-1;0<=k?ue<=k:ue>=k;J=0<=k?++ue:--ue)if(!H[J]){C=J;break}if(C===-1)break;for(R=0;!H[C];)H[C]=!0,R++,C=Ee[C];ce+=R+1}return ce},K=function(Ee,C){var R;return R=ee(C)+ee(Ee),R%2===0},Q=function(Ee,C){for(ye(C),ye(Ee);!K(Ee,C);)ye(C),ye(Ee)},me=function(Ee,C){var R,J,ue,ce;for(ue=0,R=J=0,ce=Ee.length-1;0<=ce?J<=ce:J>=ce;R=0<=ce?++J:--J)ue+=Ee[R]=xe(0,C-1)},B=function(Ee,C){return Ee.reduce(function(R,J){return R+J})%C===0},G=function(Ee,C){for(me(Ee,3);!B(Ee,3);)me(Ee,3);for(me(C,2);!B(C,2);)me(C,2)},be=function(){return Q(this.cp,this.ep),G(this.co,this.eo),this},be}(),ve.moves=[{center:[0,1,2,3,4,5],cp:[S,V,L,T,c,f,a,m],co:[0,0,0,0,0,0,0,0],ep:[w,D,P,x,h,l,u,o,p,d,t,i],eo:[0,0,0,0,0,0,0,0,0,0,0,0]},{center:[0,1,2,3,4,5],cp:[c,L,T,V,m,f,a,S],co:[2,0,0,1,1,0,0,2],ep:[p,P,x,w,i,l,u,o,h,d,t,D],eo:[0,0,0,0,0,0,0,0,0,0,0,0]},{center:[0,1,2,3,4,5],cp:[L,f,T,S,V,c,a,m],co:[1,2,0,0,2,1,0,0],ep:[D,d,x,w,h,p,u,o,P,l,t,i],eo:[0,1,0,0,0,1,0,0,1,1,0,0]},{center:[0,1,2,3,4,5],cp:[V,L,T,S,f,a,m,c],co:[0,0,0,0,0,0,0,0],ep:[D,P,x,w,l,u,o,h,p,d,t,i],eo:[0,0,0,0,0,0,0,0,0,0,0,0]},{center:[0,1,2,3,4,5],cp:[V,T,a,S,c,L,f,m],co:[0,1,2,0,0,2,1,0],ep:[D,P,t,w,h,l,d,o,p,x,u,i],eo:[0,0,0,0,0,0,0,0,0,0,0,0]},{center:[0,1,2,3,4,5],cp:[V,L,S,m,c,f,T,a],co:[0,0,1,2,0,0,2,1],ep:[D,P,x,i,h,l,u,t,p,d,w,o],eo:[0,0,0,1,0,0,0,1,0,0,1,1]},{center:[b,v,g,r,e,_],cp:[V,L,T,S,c,f,a,m],co:[0,0,0,0,0,0,0,0],ep:[D,P,x,w,h,l,u,o,d,t,i,p],eo:[0,0,0,0,0,0,0,0,1,1,1,1]},{center:[e,_,b,v,g,r],cp:[V,L,T,S,c,f,a,m],co:[0,0,0,0,0,0,0,0],ep:[D,w,x,o,h,P,u,l,p,d,t,i],eo:[0,1,0,1,0,1,0,1,0,0,0,0]},{center:[g,b,v,_,r,e],cp:[V,L,T,S,c,f,a,m],co:[0,0,0,0,0,0,0,0],ep:[x,P,u,w,D,l,h,o,p,d,t,i],eo:[1,0,1,0,1,0,1,0,0,0,0,0]}],he={U:0,R:1,F:2,D:3,L:4,B:5,E:6,M:7,S:8,x:9,y:10,z:11,u:12,r:13,f:14,d:15,l:16,b:17},X={0:"U",1:"R",2:"F",3:"D",4:"L",5:"B",6:"E",7:"M",8:"S",9:"x",10:"y",11:"z",12:"u",13:"r",14:"f",15:"d",16:"l",17:"b"},_e=function(K){var G,Q,ee,B,xe,me,be;if(typeof K=="string"){for(me=K.split(/\s+/),be=[],G=0,Q=me.length;G<Q;G++)if(B=me[G],B.length!==0){if(B.length>2)throw new Error(`Invalid move: ${B}`);if(ee=he[B[0]],ee===void 0)throw new Error(`Invalid move: ${B}`);if(B.length===1)xe=0;else if(B[1]==="2")xe=1;else if(B[1]==="'")xe=2;else throw new Error(`Invalid move: ${B}`);be.push(ee*3+xe)}return be}else return K.length!=null?K:[K]},ve.moves.push(new ve().move("R M' L'").toJSON()),ve.moves.push(new ve().move("U E' D'").toJSON()),ve.moves.push(new ve().move("F S B'").toJSON()),ve.moves.push(new ve().move("U E'").toJSON()),ve.moves.push(new ve().move("R M'").toJSON()),ve.moves.push(new ve().move("F S").toJSON()),ve.moves.push(new ve().move("D E").toJSON()),ve.moves.push(new ve().move("L M").toJSON()),ve.moves.push(new ve().move("B S'").toJSON()),ve}).call(this),n!==null?n.exports=s:this.Cube=s}).call(mT)}(ha)),ha.exports}var sc={},Ld;function gT(){return Ld||(Ld=1,(function(){var n,e,t,i,s,r,o,a,l,c,u,f,h,m,v,d,p,g,_,b,w,S,P,L,x,T,D,V,W,N,F,ie,le,te,X,he,_e,ve,K,G,Q,ee,B,xe,me,be,ye,Ee,C,R,J,ue,ce=[].indexOf;i=this.Cube||Og(),[le,W,F,D,a,c,r,f]=[0,1,2,3,4,5,6,7],[ie,V,N,T,u,o,l,s,m,h,n,e]=[0,1,2,3,4,5,6,7,8,9,10,11],t=function(k,H){var z,q,O;if(k<H)return 0;for(H>k/2&&(H=k-H),O=1,z=k,q=1;z!==k-H;)O*=z,O/=q,z--,q++;return O},G=function(k){var H,z,q,O;for(H=1,z=q=2,O=k;2<=O?q<=O:q>=O;z=2<=O?++q:--q)H*=z;return H},ee=function(k,H){return k>H?k:H},R=function(k,H,z){var q,O,M,y,I;for(I=k[H],q=O=M=H,y=z-1;M<=y?O<=y:O>=y;q=M<=y?++O:--O)k[q]=k[q+1];return k[z]=I},J=function(k,H,z){var q,O,M,y,I;for(I=k[z],q=O=M=z,y=H+1;M<=y?O<=y:O>=y;q=M<=y?++O:--O)k[q]=k[q-1];return k[H]=I},ye=function(k,H,z,q=!1){var O,M,y,I,$,re;return I=z-H,y=G(I+1),k==="corners"?(M=7,re="cp"):(M=11,re="ep"),$=function(){var oe,Y,E;for(E=[],O=oe=0,Y=I;0<=Y?oe<=Y:oe>=Y;O=0<=Y?++oe:--oe)E.push(0);return E}(),function(oe){var Y,E,U,fe,we,Me,Ce,Te,De,Oe,$e,j,de,Se,Re,Pe,We,ut,bt,en,nt,Vt,Tt,si,Ft,Ci,Ai;if(oe!=null){for(O=Me=0,$e=I;0<=$e?Me<=$e:Me>=$e;O=0<=$e?++Me:--Me)$[O]=O+H;for(E=oe%y,Y=oe/y|0,De=this[re],O=Ce=0,j=M;0<=j?Ce<=j:Ce>=j;O=0<=j?++Ce:--Ce)De[O]=-1;for(fe=Te=1,Se=I;1<=Se?Te<=Se:Te>=Se;fe=1<=Se?++Te:--Te)for(we=E%(fe+1),E=E/(fe+1)|0;we>0;)J($,0,fe),we--;if(Ft=I,q)for(fe=Oe=0,Re=M;0<=Re?Oe<=Re:Oe>=Re;fe=0<=Re?++Oe:--Oe)U=t(M-fe,Ft+1),Y-U>=0&&(De[fe]=$[I-Ft],Y-=U,Ft--);else for(fe=Vt=Pe=M;Pe<=0?Vt<=0:Vt>=0;fe=Pe<=0?++Vt:--Vt)U=t(fe,Ft+1),Y-U>=0&&(De[fe]=$[Ft],Y-=U,Ft--);return this}else{for(De=this[re],O=Tt=0,We=I;0<=We?Tt<=We:Tt>=We;O=0<=We?++Tt:--Tt)$[O]=-1;if(Y=E=Ft=0,q)for(fe=si=ut=M;ut<=0?si<=0:si>=0;fe=ut<=0?++si:--si)H<=(bt=De[fe])&&bt<=z&&(Y+=t(M-fe,Ft+1),$[I-Ft]=De[fe],Ft++);else for(fe=Ci=0,en=M;0<=en?Ci<=en:Ci>=en;fe=0<=en?++Ci:--Ci)H<=(nt=De[fe])&&nt<=z&&(Y+=t(fe,Ft+1),$[Ft]=De[fe],Ft++);for(fe=Ai=de=I;de<=0?Ai<=0:Ai>=0;fe=de<=0?++Ai:--Ai){for(we=0;$[fe]!==H+fe;)R($,0,fe),we++;E=(fe+1)*E+we}return Y*y+E}}},v={twist:function(k){var H,z,q,O,M,y;if(k!=null){for(M=0,H=z=6;z>=0;H=--z)O=k%3,k=k/3|0,this.co[H]=O,M+=O;return this.co[7]=(3-M%3)%3,this}else{for(y=0,H=q=0;q<=6;H=++q)y=3*y+this.co[H];return y}},flip:function(k){var H,z,q,O,M,y;if(k!=null){for(M=0,H=z=10;z>=0;H=--z)O=k%2,k=k/2|0,this.eo[H]=O,M+=O;return this.eo[11]=(2-M%2)%2,this}else{for(y=0,H=q=0;q<=10;H=++q)y=2*y+this.eo[H];return y}},cornerParity:function(){var k,H,z,q,O,M,y,I,$;for($=0,k=z=O=f,M=le+1;O<=M?z<=M:z>=M;k=O<=M?++z:--z)for(H=q=y=k-1,I=le;y<=I?q<=I:q>=I;H=y<=I?++q:--q)this.cp[H]>this.cp[k]&&$++;return $%2},edgeParity:function(){var k,H,z,q,O,M,y,I,$;for($=0,k=z=O=e,M=ie+1;O<=M?z<=M:z>=M;k=O<=M?++z:--z)for(H=q=y=k-1,I=ie;y<=I?q<=I:q>=I;H=y<=I?++q:--q)this.ep[H]>this.ep[k]&&$++;return $%2},URFtoDLF:ye("corners",le,c),URtoUL:ye("edges",ie,N),UBtoDF:ye("edges",T,o),URtoDF:ye("edges",ie,o),FRtoBR:ye("edges",m,e,!0)};for(Q in v)ue=v[Q],i.prototype[Q]=ue;he=function(k,H,z){var q,O,M,y,I,$,re,oe,Y,E,U;for(q=k==="corners"?"cornerMultiply":"edgeMultiply",O=new i,U=[],M=$=0,E=z-1;0<=E?$<=E:$>=E;M=0<=E?++$:--$){for(O[H](M),y=[],I=oe=0;oe<=5;I=++oe){for(re=i.moves[I],Y=0;Y<=2;++Y)O[q](re),y.push(O[H]());O[q](re)}U.push(y)}return U},B=function(){var k,H;return k=new i,H=new i,function(z,q){var O,M;for(k.URtoUL(z),H.UBtoDF(q),O=M=0;M<=7;O=++M)if(k.ep[O]!==-1){if(H.ep[O]!==-1)return-1;H.ep[O]=k.ep[O]}return H.URtoDF()}}(),w=2187,d=2048,g=2,p=11880,_=495,b=24,P=20160,L=20160,x=1320,S=1320,i.moveTables={parity:[[1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1],[0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0]],twist:null,flip:null,FRtoBR:null,URFtoDLF:null,URtoDF:null,URtoUL:null,UBtoDF:null,mergeURtoDF:null},xe={twist:["corners",w],flip:["edges",d],FRtoBR:["edges",p],URFtoDLF:["corners",P],URtoDF:["edges",L],URtoUL:["edges",x],UBtoDF:["edges",S],mergeURtoDF:[]},i.computeMoveTables=function(...k){var H,z,q,O,M,y;for(k.length===0&&(k=function(){var I;I=[];for(q in xe)I.push(q);return I}()),z=0,H=k.length;z<H;z++)y=k[z],this.moveTables[y]===null&&(y==="mergeURtoDF"?this.moveTables.mergeURtoDF=function(){var I,$,re,oe;for(oe=[],$=re=0;re<=335;$=++re)oe.push(function(){var Y,E;for(E=[],I=Y=0;Y<=335;I=++Y)E.push(B($,I));return E}());return oe}():([O,M]=xe[y],this.moveTables[y]=he(O,y,M)));return this},te=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],me=function(){var k,H,z,q,O,M,y,I;for(I=[],H=z=0;z<=5;H=++z){for(q=[],k=O=0;O<=5;k=++O)if(k!==H&&k!==H-3)for(y=M=0;M<=2;y=++M)q.push(k*3+y);I.push(q)}return I}(),X=[0,1,2,4,7,9,10,11,13,16],be=function(){var k,H,z,q,O,M,y,I,$,re;for(re=[],H=q=0;q<=5;H=++q){for(O=[],k=M=0;M<=5;k=++M)if(k!==H&&k!==H-3)for($=k===0||k===3?[0,1,2]:[1],y=0,z=$.length;y<z;y++)I=$[y],O.push(k*3+I);re.push(O)}return re}(),Ee=function(k,H,z){var q,O,M;return q=H%8,M=H>>3,O=q<<2,z!=null?(k[M]&=~(15<<O),k[M]|=z<<O,z):(k[M]&15<<O)>>>O},_e=function(k,H,z,q){var O,M,y,I,$,re,oe,Y,E,U,fe,we;for(we=function(){var Me,Ce,Te;for(Te=[],Me=0,Ce=Math.ceil(H/8)-1;0<=Ce?Me<=Ce:Me>=Ce;0<=Ce?++Me:--Me)Te.push(4294967295);return Te}(),k===1?Y=te:Y=X,M=0,Ee(we,0,M),y=1;y!==H;){for(I=re=0,fe=H-1;0<=fe?re<=fe:re>=fe;I=0<=fe?++re:--re)if(Ee(we,I)===M)for(O=z(I),U=0,$=Y.length;U<$;U++)oe=Y[U],E=q(O,oe),Ee(we,E)===15&&(Ee(we,E,M+1),y++);M++}return we},i.pruningTables={sliceTwist:null,sliceFlip:null,sliceURFtoDLFParity:null,sliceURtoDFParity:null},C={sliceTwist:[1,_*w,function(k){return[k%_,k/_|0]},function(k,H){var z,q,O,M;return[O,M]=k,z=i.moveTables.FRtoBR[O*24][H]/24|0,q=i.moveTables.twist[M][H],q*_+z}],sliceFlip:[1,_*d,function(k){return[k%_,k/_|0]},function(k,H){var z,q,O,M;return[M,z]=k,O=i.moveTables.FRtoBR[M*24][H]/24|0,q=i.moveTables.flip[z][H],q*_+O}],sliceURFtoDLFParity:[2,b*P*g,function(k){return[k%2,(k/2|0)%b,(k/2|0)/b|0]},function(k,H){var z,q,O,M,y,I;return[y,I,z]=k,q=i.moveTables.parity[y][H],O=i.moveTables.FRtoBR[I][H],M=i.moveTables.URFtoDLF[z][H],(M*b+O)*2+q}],sliceURtoDFParity:[2,b*L*g,function(k){return[k%2,(k/2|0)%b,(k/2|0)/b|0]},function(k,H){var z,q,O,M,y,I;return[y,I,z]=k,q=i.moveTables.parity[y][H],O=i.moveTables.FRtoBR[I][H],M=i.moveTables.URtoDF[z][H],(M*b+O)*2+q}]},i.computePruningTables=function(...k){var H,z,q,O,M;for(k.length===0&&(k=function(){var y;y=[];for(q in C)y.push(q);return y}()),z=0,H=k.length;z<H;z++)M=k[z],this.pruningTables[M]===null&&(O=C[M],this.pruningTables[M]=_e(...O));return this},i.initSolver=function(){return i.computeMoveTables(),i.computePruningTables()},i.prototype.solveUpright=function(k=22){var H,z,q,O,M,y,I,$,re;return q=function(){var oe,Y,E,U,fe,we,Me;for(Y=["U","R","F","D","L","B"],we=["","2","'"],Me=[],oe=E=0;E<=5;oe=++E)for(fe=U=0;U<=2;fe=++U)Me.push(Y[oe]+we[fe]);return Me}(),H=class{constructor(Y){this.parent=null,this.lastMove=null,this.depth=0,Y&&this.init(Y)}init(Y){return this.flip=Y.flip(),this.twist=Y.twist(),this.slice=Y.FRtoBR()/b|0,this.parity=Y.cornerParity(),this.URFtoDLF=Y.URFtoDLF(),this.FRtoBR=Y.FRtoBR(),this.URtoUL=Y.URtoUL(),this.UBtoDF=Y.UBtoDF(),this}solution(){return this.parent?this.parent.solution()+q[this.lastMove]+" ":""}move(Y,E,U){return i.moveTables[Y][E][U]}pruning(Y,E){return Ee(i.pruningTables[Y],E)}moves1(){return this.lastMove!==null?me[this.lastMove/3|0]:te}minDist1(){var Y,E;return Y=this.pruning("sliceFlip",_*this.flip+this.slice),E=this.pruning("sliceTwist",_*this.twist+this.slice),ee(Y,E)}next1(Y){var E;return E=z.pop(),E.parent=this,E.lastMove=Y,E.depth=this.depth+1,E.flip=this.move("flip",this.flip,Y),E.twist=this.move("twist",this.twist,Y),E.slice=this.move("FRtoBR",this.slice*24,Y)/24|0,E}moves2(){return this.lastMove!==null?be[this.lastMove/3|0]:X}minDist2(){var Y,E,U,fe;return U=(b*this.URtoDF+this.FRtoBR)*g+this.parity,Y=this.pruning("sliceURtoDFParity",U),fe=(b*this.URFtoDLF+this.FRtoBR)*g+this.parity,E=this.pruning("sliceURFtoDLFParity",fe),ee(Y,E)}init2(Y=!0){if(this.parent!==null&&(this.parent.init2(!1),this.URFtoDLF=this.move("URFtoDLF",this.parent.URFtoDLF,this.lastMove),this.FRtoBR=this.move("FRtoBR",this.parent.FRtoBR,this.lastMove),this.parity=this.move("parity",this.parent.parity,this.lastMove),this.URtoUL=this.move("URtoUL",this.parent.URtoUL,this.lastMove),this.UBtoDF=this.move("UBtoDF",this.parent.UBtoDF,this.lastMove),Y))return this.URtoDF=this.move("mergeURtoDF",this.URtoUL,this.UBtoDF)}next2(Y){var E;return E=z.pop(),E.parent=this,E.lastMove=Y,E.depth=this.depth+1,E.URFtoDLF=this.move("URFtoDLF",this.URFtoDLF,Y),E.FRtoBR=this.move("FRtoBR",this.FRtoBR,Y),E.parity=this.move("parity",this.parity,Y),E.URtoDF=this.move("URtoDF",this.URtoDF,Y),E}},$=null,M=function(oe){var Y,E,U,fe;for(Y=0,fe=[],Y=E=1,U=k;(1<=U?E<=U:E>=U)&&(O(oe,Y),$===null);Y=1<=U?++E:--E)fe.push(Y++);return fe},O=function(oe,Y){var E,U,fe,we,Me,Ce,Te;if(Y===0){if(oe.minDist1()===0&&(oe.lastMove===null||(Me=oe.lastMove,ce.call(X,Me)<0)))return I(oe)}else if(Y>0&&oe.minDist1()<=Y){for(Ce=oe.moves1(),Te=[],U=0,E=Ce.length;U<E&&(fe=Ce[U],we=oe.next1(fe),O(we,Y-1),z.push(we),$===null);U++)Te.push(void 0);return Te}},I=function(oe){var Y,E,U,fe;for(oe.init2(),fe=[],Y=E=1,U=k-oe.depth;(1<=U?E<=U:E>=U)&&(y(oe,Y),$===null);Y=1<=U?++E:--E)fe.push(Y++);return fe},y=function(oe,Y){var E,U,fe,we,Me,Ce;if(Y===0){if(oe.minDist2()===0)return $=oe.solution()}else if(Y>0&&oe.minDist2()<=Y){for(Me=oe.moves2(),Ce=[],U=0,E=Me.length;U<E&&(fe=Me[U],we=oe.next2(fe),y(we,Y-1),z.push(we),$===null);U++)Ce.push(void 0);return Ce}},z=function(){var oe,Y,E;for(E=[],oe=0,Y=k+1;0<=Y?oe<=Y:oe>=Y;0<=Y?++oe:--oe)E.push(new H);return E}(),re=z.pop().init(this),M(re),z.push(re),$.length>0&&($=$.substring(0,$.length-1)),$},K={U:0,R:1,F:2,D:3,L:4,B:5},ve={0:"U",1:"R",2:"F",3:"D",4:"L",5:"B"},i.prototype.solve=function(k=22){var H,z,q,O,M,y,I,$,re;for(H=this.clone(),$=H.upright(),H.move($),y=new i().move($).center,re=H.solveUpright(k),I=[],M=re.split(" "),q=0,z=M.length;q<z;q++)O=M[q],I.push(ve[y[K[O[0]]]]),O.length>1&&(I[I.length-1]+=O[1]);return I.join(" ")},i.scramble=function(){return i.inverse(i.random().solve())}}).call(sc)),sc}var rc,Pd;function _T(){return Pd||(Pd=1,rc=Og(),gT()),rc}var vT=_T();const Ug=pT(vT);let jc=!1;function xT(){jc||(Ug.initSolver(),jc=!0)}function yT(n){if(n.length!==54)return{valid:!1,reason:`Expected 54 stickers, got ${n.length}`};const e="-";if(n.includes(e))return{valid:!1,reason:`${n.split("").filter(a=>a===e).length} sticker(s) are not colored yet`};const t={};for(const o of n)t[o]=(t[o]??0)+1;const i=["y","o","b","r","g","w"];for(const o of i)if((t[o]??0)!==9)return{valid:!1,reason:`Color '${o}' appears ${t[o]??0} times; expected 9`};const s=[4,13,22,31,40,49].map(o=>n[o]);return new Set(s).size!==6?{valid:!1,reason:"Two or more face centers share the same color"}:{valid:!0}}function bT(n){const e=[4,13,22,31,40,49],t=["U","L","F","R","B","D"],i=new Map;return e.forEach((r,o)=>{i.set(n[r],t[o])}),(n.slice(0,9)+n.slice(27,36)+n.slice(18,27)+n.slice(45,54)+n.slice(9,18)+n.slice(36,45)).split("").map(r=>i.get(r)??"?").join("")}function MT(n){const e=[],t=n.trim().split(/\s+/).filter(Boolean),i={U:se.UP,D:se.DOWN,L:se.LEFT,R:se.RIGHT,F:se.FRONT,B:se.BACK};for(const s of t){const r=s[0],o=s.slice(1),a=i[r];if(a===void 0)continue;const l=o.includes("'"),c=o.includes("2"),u={side:a,counterClockwiseDirection:l,layer:0};e.push(u),c&&e.push({...u})}return e}function ST(n){if(!jc)throw new Error("Kociemba solver not initialized. Call initKociembaSolver() first.");const e=bT(n);if(e.includes("?"))throw new Error("Failed to convert cube state: unknown color encountered");let t;try{t=Ug.fromString(e)}catch(s){throw new Error(`Invalid cube state: ${(s==null?void 0:s.message)??s}`)}const i=t.solve();return!i||i.trim()===""?[]:MT(i)}function wT(n){const e={[se.UP]:"U",[se.DOWN]:"D",[se.LEFT]:"L",[se.RIGHT]:"R",[se.FRONT]:"F",[se.BACK]:"B"},t=[];let i=0;for(;i<n.length;){const s=n[i],r=e[s.side];i+1<n.length&&n[i+1].side===s.side&&n[i+1].counterClockwiseDirection===s.counterClockwiseDirection&&n[i+1].layer===s.layer?(t.push(`${r}2`),i+=2):(t.push(s.counterClockwiseDirection?`${r}'`:r),i++)}return t}const Ju=n=>(au("data-v-3b4af1d0"),n=n(),lu(),n),ET={class:"color-picker"},TT=Ju(()=>Fe("p",{class:"picker-label"},"Pick a color",-1)),CT={class:"swatch-grid"},AT=["title","aria-label","onClick"],RT={key:0,viewBox:"0 0 16 16",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"},LT=Ju(()=>Fe("line",{x1:"2",y1:"2",x2:"14",y2:"14"},null,-1)),PT=Ju(()=>Fe("line",{x1:"14",y1:"2",x2:"2",y2:"14"},null,-1)),DT=[LT,PT],IT=yr({__name:"ColorPicker",props:{modelValue:null},emits:["update:modelValue"],setup(n,{emit:e}){const t=n,i=[{color:vt.WHITE,hex:"#d4d4d4",label:"White"},{color:vt.YELLOW,hex:"#f5e220",label:"Yellow"},{color:vt.RED,hex:"#c82020",label:"Red"},{color:vt.ORANGE,hex:"#e06010",label:"Orange"},{color:vt.BLUE,hex:"#1a5fa8",label:"Blue"},{color:vt.GREEN,hex:"#18842a",label:"Green"},{color:null,hex:"#333344",label:"Erase"}];function s(o){e("update:modelValue",o)}function r(o){return t.modelValue===o}return(o,a)=>(at(),dt("div",ET,[TT,Fe("div",CT,[(at(),dt(pt,null,gu(i,l=>Fe("button",{key:String(l.color),class:ti(["swatch",{active:r(l.color)}]),style:ms({backgroundColor:l.hex}),title:l.label,"aria-label":l.label,onClick:c=>s(l.color)},[l.color===null?(at(),dt("svg",RT,DT)):Kn("",!0)],14,AT)),64))])]))}}),Qu=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},FT=Qu(IT,[["__scopeId","data-v-3b4af1d0"]]),wr=n=>(au("data-v-2092bfd3"),n=n(),lu(),n),NT={class:"solution-panel"},OT={class:"panel-header"},UT=wr(()=>Fe("span",{class:"panel-title"},"Solution",-1)),kT={class:"move-count"},BT={class:"move-list-wrapper"},zT={class:"move-list"},VT={key:0,class:"empty-hint"},HT={key:0,class:"progress-bar"},GT={class:"controls-row"},WT=wr(()=>Fe("svg",{viewBox:"0 0 16 16",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[Fe("path",{d:"M3 8a5 5 0 1 1 .9 2.9"}),Fe("polyline",{points:"1,6 3,8 5,6"})],-1)),jT=[WT],$T={key:0,viewBox:"0 0 16 16",fill:"currentColor"},qT=wr(()=>Fe("path",{d:"M4 2l10 6-10 6z"},null,-1)),XT=[qT],KT={key:1,viewBox:"0 0 16 16",fill:"currentColor"},YT=wr(()=>Fe("rect",{x:"3",y:"2",width:"4",height:"12",rx:"1"},null,-1)),ZT=wr(()=>Fe("rect",{x:"9",y:"2",width:"4",height:"12",rx:"1"},null,-1)),JT=[YT,ZT],QT={class:"speed-row"},eC=wr(()=>Fe("span",{class:"speed-label"},"Speed",-1)),tC={class:"speed-value"},nC=yr({__name:"SolutionPanel",props:{moves:null,currentMoveIndex:null,isPlaying:{type:Boolean}},emits:["play","pause","reset","speedChange"],setup(n,{emit:e}){const t=n,i=Pt(3),s=es(()=>t.moves.length),r=es(()=>s.value===0?0:Math.round((t.currentMoveIndex+1)/s.value*100));return nr(i,o=>e("speedChange",o)),(o,a)=>(at(),dt("div",NT,[Fe("div",OT,[UT,Fe("span",kT,Gi(_a(s))+" moves",1)]),Fe("div",BT,[Fe("div",zT,[(at(!0),dt(pt,null,gu(n.moves,(l,c)=>(at(),dt("span",{key:c,class:ti(["move-chip",{done:c<n.currentMoveIndex,current:c===n.currentMoveIndex,pending:c>n.currentMoveIndex}])},Gi(l),3))),128)),n.moves.length===0?(at(),dt("span",VT," No moves — cube is already solved! ")):Kn("",!0)])]),n.moves.length>0?(at(),dt("div",HT,[Fe("div",{class:"progress-fill",style:ms({width:_a(r)+"%"})},null,4)])):Kn("",!0),Fe("div",GT,[Fe("button",{class:"ctrl-btn reset-btn",onClick:a[0]||(a[0]=l=>e("reset")),title:"Restart"},jT),Fe("button",{class:"ctrl-btn play-btn",onClick:a[1]||(a[1]=l=>n.isPlaying?e("pause"):e("play"))},[n.isPlaying?(at(),dt("svg",KT,JT)):(at(),dt("svg",$T,XT)),Qi(" "+Gi(n.isPlaying?"Pause":"Play"),1)])]),Fe("div",QT,[eC,Mp(Fe("input",{id:"speed-slider",type:"range",min:"1",max:"10","onUpdate:modelValue":a[2]||(a[2]=l=>i.value=l),class:"speed-slider"},null,512),[[io,i.value,void 0,{number:!0}]]),Fe("span",tC,Gi(i.value)+"×",1)])]))}}),iC=Qu(nC,[["__scopeId","data-v-2092bfd3"]]),Dd="-".repeat(54);function sC(n){return n==="-"?null:fa(n)??null}const rC=yr({name:"App",components:{ColorPicker:FT,SolutionPanel:iC},setup(){const n=Pt("edit"),e=Pt(vt.WHITE),t=Pt(Dd),i=Pt([]),s=Pt([]),r=Pt(-1),o=Pt(!1),a=Pt(3),l=Pt(!1),c=Pt(!1),u=Pt(!1),f=Pt("");let h,m,v,d;const p=es(()=>yT(t.value)),g=es(()=>p.value.valid),_=es(()=>p.value.valid?"":p.value.reason);function b(){const te=document.getElementById("scene-container");h=new aT(te),h.start(),v=new pi({dimension:3}),m=new Hc({parent:h.getScene(),cube:v,position:new Z(0,0,0),size:4.8}),w(),d=new nT,d.params.Line={threshold:.1},h.getRendererDomElement().addEventListener("click",L)}function w(){for(let te=0;te<54;te++)m.updateStickerColor(te,null)}function S(te){for(let X=0;X<54;X++)m.updateStickerColor(X,sC(te[X]))}function P(te,X){const he=t.value.split("");if(X===null)he[te]="-";else{const _e={[vt.YELLOW]:"y",[vt.ORANGE]:"o",[vt.BLUE]:"b",[vt.RED]:"r",[vt.GREEN]:"g",[vt.WHITE]:"w"};he[te]=_e[X]}t.value=he.join(""),m.updateStickerColor(te,X)}function L(te){if(n.value!=="edit")return;const he=h.getRendererDomElement().getBoundingClientRect(),_e=new Be((te.clientX-he.left)/he.width*2-1,-((te.clientY-he.top)/he.height)*2+1);d.setFromCamera(_e,h.getCamera());const ve=m.getRaycasterTargets(),K=d.intersectObjects(ve,!1);if(K.length===0)return;const G=m.getClickedSticker(K[0]);G&&P(G.sticker.stickerIndex,e.value)}function x(){t.value=Dd,w(),f.value="",i.value=[],s.value=[],r.value=-1,c.value=!1}async function T(){if(u.value||o.value)return;u.value=!0,f.value="",i.value=[],s.value=[],r.value=-1,c.value=!1,n.value==="solve"&&(n.value="edit"),v=new pi({dimension:3});const X=new dT(ic.world.scrambleMoves()).scramble(v);for(const he of X)await m.rotateFace({...he,duration:ic.world.scrambleRotationDuration}),v=v.rotateFace(he);t.value=v.getConfiguration(),u.value=!1}async function D(){if(!g.value){f.value=_.value;return}l.value=!0,f.value="",i.value=[],s.value=[],r.value=-1,c.value=!1;try{const te=ST(t.value);s.value=te,i.value=wT(te),n.value="solve",v=new pi({clone:t.value})}catch(te){f.value=(te==null?void 0:te.message)??"Solver failed"}finally{l.value=!1}}function V(){o.value||(r.value>=s.value.length-1&&(r.value=-1,v=new pi({clone:t.value}),S(t.value)),o.value=!0,W())}async function W(){if(!o.value)return;const te=r.value+1;if(te>=s.value.length){o.value=!1,c.value=!0,r.value=s.value.length;return}r.value=te;const X=s.value[te],he=Math.round(ic.renderers.rotationDuration/a.value);await m.rotateFace({...X,duration:he}),v=v.rotateFace(X),W()}function N(){o.value=!1}function F(){o.value=!1,r.value=-1,c.value=!1,v=new pi({clone:t.value}),S(t.value)}function ie(te){a.value=te}function le(){o.value=!1,c.value=!1,n.value="edit",S(t.value),r.value=-1,i.value=[],s.value=[],f.value=""}return br(async()=>{await Ha(),b(),xT()}),_o(()=>{h==null||h.stop();const te=h==null?void 0:h.getRendererDomElement();te==null||te.removeEventListener("click",L)}),{mode:n,selectedColor:e,editorConfig:t,solutionMoves:i,currentMoveIndex:r,isPlaying:o,isSolving:l,isSolved:c,isShuffling:u,solveError:f,canSolve:g,validationMessage:_,clearCube:x,shuffleCube:T,runSolver:D,playAnimation:V,pauseAnimation:N,resetAnimation:F,onSpeedChange:ie,goToEditMode:le}}}),oC={id:"root-layout"},aC=Fe("div",{id:"scene-container"},null,-1),lC={class:"app-header glass"},cC=Fe("div",{class:"header-brand"},[Fe("span",{class:"brand-icon"},"⬡"),Fe("span",{class:"brand-name"},"Rubik's AI")],-1),uC={class:"mode-tabs"},fC=["disabled"],hC={key:0,class:"spinner"},dC={class:"quick-actions"},pC=["disabled"],mC={key:0,class:"spinner"},gC=["disabled"],_C={class:"side-panel glass"},vC={class:"panel-section"},xC=Fe("div",{class:"panel-section hint-section"},[Fe("p",{class:"hint-text"},"Click any sticker on the cube to paint it")],-1),yC={class:"panel-section"},bC={key:0,class:"validation-chip error"},MC={key:1,class:"validation-chip ok"},SC={class:"panel-section"},wC=["disabled"],EC={key:0,class:"spinner"},TC={key:0,class:"panel-section"},CC={class:"validation-chip error"},AC={class:"panel-section"},RC={key:0,class:"panel-section"},LC=Fe("div",{class:"solved-banner"},"🎉 Solved!",-1),PC=[LC],DC={class:"panel-section"};function IC(n,e,t,i,s,r){const o=uc("ColorPicker"),a=uc("SolutionPanel");return at(),dt("div",oC,[aC,Fe("header",lC,[cC,Fe("div",uC,[Fe("button",{id:"tab-edit",class:ti(["tab-btn",{active:n.mode==="edit"}]),onClick:e[0]||(e[0]=(...l)=>n.goToEditMode&&n.goToEditMode(...l))}," ✏️ Edit ",2),Fe("button",{id:"tab-solve",class:ti(["tab-btn",{active:n.mode==="solve"}]),disabled:!n.canSolve||n.isShuffling,onClick:e[1]||(e[1]=(...l)=>n.runSolver&&n.runSolver(...l))},[n.isSolving?(at(),dt("span",hC)):Kn("",!0),Qi(" 🔍 Solve ")],10,fC)]),Fe("div",dC,[Fe("button",{id:"btn-shuffle",class:"action-btn",disabled:n.isShuffling||n.isPlaying,onClick:e[2]||(e[2]=(...l)=>n.shuffleCube&&n.shuffleCube(...l))},[n.isShuffling?(at(),dt("span",mC)):Kn("",!0),Qi(" 🔀 Shuffle ")],8,pC),Fe("button",{id:"btn-clear",class:"action-btn",disabled:n.isPlaying,onClick:e[3]||(e[3]=(...l)=>n.clearCube&&n.clearCube(...l))}," 🗑 Clear ",8,gC)])]),Fe("aside",_C,[n.mode==="edit"?(at(),dt(pt,{key:0},[Fe("div",vC,[st(o,{modelValue:n.selectedColor,"onUpdate:modelValue":e[4]||(e[4]=l=>n.selectedColor=l)},null,8,["modelValue"])]),xC,Fe("div",yC,[n.validationMessage?(at(),dt("div",bC," ⚠ "+Gi(n.validationMessage),1)):(at(),dt("div",MC," ✓ Cube state is valid "))]),Fe("div",SC,[Fe("button",{id:"btn-solve-main",class:"primary-btn",disabled:!n.canSolve||n.isSolving,onClick:e[5]||(e[5]=(...l)=>n.runSolver&&n.runSolver(...l))},[n.isSolving?(at(),dt("span",EC)):Kn("",!0),Qi(" Find Solution → ")],8,wC)]),n.solveError?(at(),dt("div",TC,[Fe("div",CC,Gi(n.solveError),1)])):Kn("",!0)],64)):(at(),dt(pt,{key:1},[Fe("div",AC,[st(a,{moves:n.solutionMoves,"current-move-index":n.currentMoveIndex,"is-playing":n.isPlaying,onPlay:n.playAnimation,onPause:n.pauseAnimation,onReset:n.resetAnimation,onSpeedChange:n.onSpeedChange},null,8,["moves","current-move-index","is-playing","onPlay","onPause","onReset","onSpeedChange"])]),n.isSolved?(at(),dt("div",RC,PC)):Kn("",!0),Fe("div",DC,[Fe("button",{id:"btn-back",class:"secondary-btn",onClick:e[6]||(e[6]=(...l)=>n.goToEditMode&&n.goToEditMode(...l))}," ← Back to Editor ")])],64))])])}const FC=Qu(rC,[["render",IC]]);gm(FC).mount("#app");
