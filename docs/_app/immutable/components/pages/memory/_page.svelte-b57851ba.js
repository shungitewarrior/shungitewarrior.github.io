import{S as T,i as V,s as A,k as d,a as E,l as k,m as b,h as g,c as G,n as h,J as I,b as y,E as v,M,C as w,L as J,P as S,Q as x}from"../../../chunks/index-29796fea.js";function C(r,e,l){const i=r.slice();return i[11]=e[l],i[13]=l,i}function D(r){let e,l,i,a,o,m,p,u,c;function t(){return r[3](r[11])}function _(){return r[4](r[11])}return{c(){e=d("div"),l=d("img"),a=E(),o=d("img"),p=E(),this.h()},l(s){e=k(s,"DIV",{class:!0});var n=b(e);l=k(n,"IMG",{class:!0,src:!0,alt:!0}),a=G(n),o=k(n,"IMG",{class:!0,src:!0,alt:!0}),p=G(n),n.forEach(g),this.h()},h(){h(l,"class","front svelte-17h51px"),I(l.src,i=r[11].img)||h(l,"src",i),h(l,"alt",""),h(o,"class","back svelte-17h51px"),I(o.src,m="src/images/fleshdoor.png")||h(o,"src",m),h(o,"alt",""),h(e,"class","card svelte-17h51px"),x(e,"flipped",r[11].flipped)},m(s,n){y(s,e,n),v(e,l),v(e,a),v(e,o),v(e,p),u||(c=[M(e,"click",t),M(e,"keypress",_)],u=!0)},p(s,n){r=s,n&1&&!I(l.src,i=r[11].img)&&h(l,"src",i),n&1&&x(e,"flipped",r[11].flipped)},d(s){s&&g(e),u=!1,S(c)}}}function L(r){let e,l,i,a,o,m,p,u=r[0],c=[];for(let t=0;t<u.length;t+=1)c[t]=D(C(r,u,t));return{c(){e=d("main"),l=d("div");for(let t=0;t<c.length;t+=1)c[t].c();i=E(),a=d("img"),this.h()},l(t){e=k(t,"MAIN",{class:!0});var _=b(e);l=k(_,"DIV",{class:!0});var s=b(l);for(let n=0;n<c.length;n+=1)c[n].l(s);s.forEach(g),_.forEach(g),i=G(t),a=k(t,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){h(l,"class","row svelte-17h51px"),h(e,"class","svelte-17h51px"),h(a,"class","reset_button svelte-17h51px"),I(a.src,o="src/images/restart.png")||h(a,"src",o),h(a,"alt","")},m(t,_){y(t,e,_),v(e,l);for(let s=0;s<c.length;s+=1)c[s].m(l,null);y(t,i,_),y(t,a,_),m||(p=[M(a,"keypress",r[5]),M(a,"click",r[6])],m=!0)},p(t,[_]){if(_&3){u=t[0];let s;for(s=0;s<u.length;s+=1){const n=C(t,u,s);c[s]?c[s].p(n,_):(c[s]=D(n),c[s].c(),c[s].m(l,null))}for(;s<c.length;s+=1)c[s].d(1);c.length=u.length}},i:w,o:w,d(t){t&&g(e),J(c,t),t&&g(i),t&&g(a),m=!1,S(p)}}}function P(r){let e=r.length,l;for(;e!=0;)l=Math.floor(Math.random()*e),e--,[r[e],r[l]]=[r[l],r[e]];return r}function N(r,e,l){let i=[],a=["src/images/tl_face.png","src/images/tl_face.png","src/images/greyface.png","src/images/greyface.png","src/images/greenskull.png","src/images/greenskull.png"];P(a);let o=!0,m;for(let f=0;f<a.length;f++)i.push({id:f,img:a[f],flipped:!1,completed:!1});let p=0;function u(f){!f.flipped&&p<2&&o?(p==1&&f.img==m.img&&(m.completed=!0,f.completed=!0,p=-1),m=f,f.flipped=!0,p++,p==2&&setTimeout(()=>{i.forEach(q=>{q.flipped=q.completed}),p=0,l(0,i)},1e3),l(0,i)):alert("chill")}function c(){i.forEach(f=>{f.flipped=!1,f.completed=!1}),p=0,l(0,i),m="",o=!1,setTimeout(()=>{P(i),l(0,i),o=!0},1e3)}return[i,u,c,f=>{u(f)},f=>{u(f)},()=>{c()},()=>{c()}]}class j extends T{constructor(e){super(),V(this,e,N,L,A,{})}}export{j as default};