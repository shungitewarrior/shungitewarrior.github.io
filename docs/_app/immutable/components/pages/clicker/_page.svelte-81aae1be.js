import{S as G,i as J,s as q,k as B,q as y,a as N,l as w,m as L,r as C,h as d,c as P,n as z,b as A,E as c,M as K,t as S,d as Q,f as D,N as W,L as V,p as X,u as Z,O as Y,C as j,g as $}from"../../../chunks/index-29796fea.js";import{f as F}from"../../../chunks/index-c52e3b54.js";function H(i,t,s){const o=i.slice();return o[7]=t[s],o}function M(i){let t,s,o;return{c(){t=B("span"),s=y(i[0]),this.h()},l(u){t=w(u,"SPAN",{style:!0});var l=L(t);s=C(l,i[0]),l.forEach(d),this.h()},h(){X(t,"display","inline-block")},m(u,l){A(u,t,l),c(t,s)},p(u,l){l&1&&Z(s,u[0])},i(u){o||W(()=>{o=Y(t,F,{y:-20}),o.start()})},o:j,d(u){u&&d(t)}}}function U(i){let t,s,o,u=i[7].name+"",l,v,_,g,E=i[7].count+"",k,O,n,p,r=i[7].cost+"",e,h,a,b;return{c(){t=B("article"),s=B("button"),o=y("Buy "),l=y(u),v=N(),_=B("p"),g=y("Number of workers: "),k=y(E),O=N(),n=B("p"),p=y("Cost of child worker: "),e=y(r),h=N(),this.h()},l(f){t=w(f,"ARTICLE",{class:!0});var m=L(t);s=w(m,"BUTTON",{class:!0});var I=L(s);o=C(I,"Buy "),l=C(I,u),I.forEach(d),v=P(m),_=w(m,"P",{class:!0});var R=L(_);g=C(R,"Number of workers: "),k=C(R,E),R.forEach(d),O=P(m),n=w(m,"P",{class:!0});var T=L(n);p=C(T,"Cost of child worker: "),e=C(T,r),T.forEach(d),h=P(m),m.forEach(d),this.h()},h(){z(s,"class","svelte-ueaz1d"),z(_,"class","svelte-ueaz1d"),z(n,"class","svelte-ueaz1d"),z(t,"class","item svelte-ueaz1d")},m(f,m){A(f,t,m),c(t,s),c(s,o),c(s,l),c(t,v),c(t,_),c(_,g),c(_,k),c(t,O),c(t,n),c(n,p),c(n,e),c(t,h),a||(b=K(s,"click",i[7].Buy),a=!0)},p(f,m){i=f},d(f){f&&d(t),a=!1,b()}}}function x(i){let t,s,o,u,l,v,_=i[0],g,E,k,O,n=M(i),p=i[1],r=[];for(let e=0;e<p.length;e+=1)r[e]=U(H(i,p,e));return{c(){t=B("body"),s=B("h1"),o=y("CHILD LABOR CLICKER!!!!!!"),u=N(),l=B("button"),v=y(`CP (Coal points):
    `),n.c(),E=N();for(let e=0;e<r.length;e+=1)r[e].c();this.h()},l(e){t=w(e,"BODY",{class:!0});var h=L(t);s=w(h,"H1",{class:!0});var a=L(s);o=C(a,"CHILD LABOR CLICKER!!!!!!"),a.forEach(d),u=P(h),l=w(h,"BUTTON",{id:!0,class:!0});var b=L(l);v=C(b,`CP (Coal points):
    `),n.l(b),b.forEach(d),E=P(h);for(let f=0;f<r.length;f+=1)r[f].l(h);h.forEach(d),this.h()},h(){z(s,"class","svelte-ueaz1d"),z(l,"id","cookie"),z(l,"class","svelte-ueaz1d"),z(t,"class","svelte-ueaz1d")},m(e,h){A(e,t,h),c(t,s),c(s,o),c(t,u),c(t,l),c(l,v),n.m(l,null),c(t,E);for(let a=0;a<r.length;a+=1)r[a].m(t,null);k||(O=K(l,"click",i[2]),k=!0)},p(e,[h]){if(h&1&&q(_,_=e[0])?($(),S(n,1,1,j),Q(),n=M(e),n.c(),D(n,1),n.m(l,null)):n.p(e,h),h&2){p=e[1];let a;for(a=0;a<p.length;a+=1){const b=H(e,p,a);r[a]?r[a].p(b,h):(r[a]=U(b),r[a].c(),r[a].m(t,null))}for(;a<r.length;a+=1)r[a].d(1);r.length=p.length}},i(e){D(n),g||W(()=>{g=Y(l,F,{y:-20}),g.start()})},o(e){S(n)},d(e){e&&d(t),n.d(e),V(r,e),k=!1,O()}}}function tt(i,t,s){let o,u;class l{constructor(E,k){this.name=E,this.cost=k,this.count=0}Buy(){o<this.cost||(s(0,o-=this.cost),s(0,o),this.count+=1,this.cost*=1.5,this.cost=Math.round(this.cost))}}var v=[new l("Child Worker",2),new l("Coal Mine",2),new l("Sweatshop",2)];function _(){s(0,o+=1*u)}return s(0,o=0),u=1,[o,v,_]}class lt extends G{constructor(t){super(),J(this,t,tt,x,q,{})}}export{lt as default};
