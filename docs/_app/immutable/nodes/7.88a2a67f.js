import{_ as M}from"../chunks/preload-helper.41c905a7.js";import{S as R,i as z,s as C,x as j,k as b,q as y,a as q,y as x,l as P,m as w,r as E,h as d,c as O,z as H,b as L,D as l,A as S,u as T,d as A,f as B,g as D,B as I,v as U}from"../chunks/index.b631eb22.js";const V=(r,t)=>{const a=r[t];return a?typeof a=="function"?a():Promise.resolve(a):new Promise((o,i)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(i.bind(null,new Error("Unknown variable dynamic import: "+t)))})};async function F({params:r}){const t=await V(Object.assign({"../../../lib/posts/bajs.svx":()=>M(()=>import("../chunks/bajs.d447d157.js"),["..\\chunks\\bajs.d447d157.js","..\\chunks\\index.b631eb22.js"],import.meta.url)}),`../../../lib/posts/${r.path}.svx`),{title:a,date:o}=t.metadata;return{content:t.default,title:a,date:o}}const Q=Object.freeze(Object.defineProperty({__proto__:null,load:F},Symbol.toStringTag,{value:"Module"}));function G(r){let t,a,o=r[0].title+"",i,v,c,h,f=r[0].date+"",p,g,e,u;var _=r[0].content;function k(n){return{}}return _&&(e=j(_,k())),{c(){t=b("article"),a=b("h1"),i=y(o),v=q(),c=b("p"),h=y("Published: "),p=y(f),g=q(),e&&x(e.$$.fragment)},l(n){t=P(n,"ARTICLE",{});var s=w(t);a=P(s,"H1",{});var m=w(a);i=E(m,o),m.forEach(d),v=O(s),c=P(s,"P",{});var $=w(c);h=E($,"Published: "),p=E($,f),$.forEach(d),g=O(s),e&&H(e.$$.fragment,s),s.forEach(d)},m(n,s){L(n,t,s),l(t,a),l(a,i),l(t,v),l(t,c),l(c,h),l(c,p),l(t,g),e&&S(e,t,null),u=!0},p(n,[s]){if((!u||s&1)&&o!==(o=n[0].title+"")&&T(i,o),(!u||s&1)&&f!==(f=n[0].date+"")&&T(p,f),_!==(_=n[0].content)){if(e){U();const m=e;A(m.$$.fragment,1,0,()=>{I(m,1)}),B()}_?(e=j(_,k()),x(e.$$.fragment),D(e.$$.fragment,1),S(e,t,null)):e=null}},i(n){u||(e&&D(e.$$.fragment,n),u=!0)},o(n){e&&A(e.$$.fragment,n),u=!1},d(n){n&&d(t),e&&I(e)}}}function J(r,t,a){let{data:o}=t;return r.$$set=i=>{"data"in i&&a(0,o=i.data)},[o]}class W extends R{constructor(t){super(),z(this,t,J,G,C,{data:0})}}export{W as component,Q as universal};