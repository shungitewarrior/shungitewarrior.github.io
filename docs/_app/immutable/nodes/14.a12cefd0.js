import{S as oe,i as ne,s as ae,k as b,q as P,a as D,l as E,m as I,r as R,h as d,c as y,n as g,b as F,D as n,X as K,N as C,H as W,L as Z,Q as le,o as re,Y as z,u as se}from"../chunks/index.b631eb22.js";function $(t,e,s){const a=t.slice();return a[8]=e[s],a}function x(t,e,s){const a=t.slice();return a[11]=e[s],a}function ee(t){let e,s,a,r,c,m=t[0].indexOf(t[11])+1+". "+t[11],T,u,i,f;return{c(){e=b("article"),s=b("button"),a=D(),r=b("button"),c=D(),T=P(m),u=D(),this.h()},l(h){e=E(h,"ARTICLE",{class:!0});var O=I(e);s=E(O,"BUTTON",{class:!0}),I(s).forEach(d),a=y(O),r=E(O,"BUTTON",{class:!0}),I(r).forEach(d),c=y(O),T=R(O,m),u=y(O),O.forEach(d),this.h()},h(){g(s,"class","remove_button svelte-4t9vhr"),g(r,"class","move_button svelte-4t9vhr"),g(e,"class","todo svelte-4t9vhr")},m(h,O){F(h,e,O),n(e,s),n(e,a),n(e,r),n(e,c),n(e,T),n(e,u),i||(f=[C(s,"click",function(){z(t[5](t[11]))&&t[5](t[11]).apply(this,arguments)}),C(r,"click",function(){z(t[4](t[11]))&&t[4](t[11]).apply(this,arguments)})],i=!0)},p(h,O){t=h,O&1&&m!==(m=t[0].indexOf(t[11])+1+". "+t[11])&&se(T,m)},d(h){h&&d(e),i=!1,le(f)}}}function te(t){let e,s,a,r=t[1].indexOf(t[8])+1+". "+t[8],c,m,T,u;return{c(){e=b("article"),s=b("button"),a=D(),c=P(r),m=D(),this.h()},l(i){e=E(i,"ARTICLE",{class:!0});var f=I(e);s=E(f,"BUTTON",{class:!0}),I(s).forEach(d),a=y(f),c=R(f,r),m=y(f),f.forEach(d),this.h()},h(){g(s,"class","remove_button svelte-4t9vhr"),g(e,"class","done svelte-4t9vhr")},m(i,f){F(i,e,f),n(e,s),n(e,a),n(e,c),n(e,m),T||(u=C(s,"click",function(){z(t[6](t[8]))&&t[6](t[8]).apply(this,arguments)}),T=!0)},p(i,f){t=i,f&2&&r!==(r=t[1].indexOf(t[8])+1+". "+t[8])&&se(c,r)},d(i){i&&d(e),T=!1,u()}}}function ie(t){let e,s,a,r,c,m,T,u,i,f,h,O,L,w,N,S,M,Y,k,j,H,G,V=t[0],v=[];for(let o=0;o<V.length;o+=1)v[o]=ee(x(t,V,o));let A=t[1],_=[];for(let o=0;o<A.length;o+=1)_[o]=te($(t,A,o));return{c(){e=b("body"),s=b("p"),a=P("my todos :3"),r=D(),c=b("p"),m=P("new todo:"),T=D(),u=b("div"),i=b("input"),f=D(),h=b("button"),O=D(),L=b("div"),w=D(),N=b("div"),S=b("div"),M=P(`TODO:\r
            `);for(let o=0;o<v.length;o+=1)v[o].c();Y=D(),k=b("div"),j=P(`DONE:\r
            `);for(let o=0;o<_.length;o+=1)_[o].c();this.h()},l(o){e=E(o,"BODY",{class:!0});var p=I(e);s=E(p,"P",{class:!0});var l=I(s);a=R(l,"my todos :3"),l.forEach(d),r=y(p),c=E(p,"P",{class:!0});var B=I(c);m=R(B,"new todo:"),B.forEach(d),T=y(p),u=E(p,"DIV",{class:!0});var J=I(u);i=E(J,"INPUT",{maxlength:!0,placeholder:!0,class:!0}),f=y(J),h=E(J,"BUTTON",{class:!0}),I(h).forEach(d),O=y(J),L=E(J,"DIV",{}),I(L).forEach(d),J.forEach(d),w=y(p),N=E(p,"DIV",{class:!0});var q=I(N);S=E(q,"DIV",{class:!0});var Q=I(S);M=R(Q,`TODO:\r
            `);for(let U=0;U<v.length;U+=1)v[U].l(Q);Q.forEach(d),Y=y(q),k=E(q,"DIV",{class:!0});var X=I(k);j=R(X,`DONE:\r
            `);for(let U=0;U<_.length;U+=1)_[U].l(X);X.forEach(d),q.forEach(d),p.forEach(d),this.h()},h(){g(s,"class","title svelte-4t9vhr"),g(c,"class","svelte-4t9vhr"),g(i,"maxlength","30"),g(i,"placeholder","hva skal du gjøre"),g(i,"class","svelte-4t9vhr"),g(h,"class","add_button svelte-4t9vhr"),g(u,"class","div1 svelte-4t9vhr"),g(S,"class","list svelte-4t9vhr"),g(k,"class","list svelte-4t9vhr"),g(N,"class","flex-container svelte-4t9vhr"),g(e,"class","svelte-4t9vhr")},m(o,p){F(o,e,p),n(e,s),n(s,a),n(e,r),n(e,c),n(c,m),n(e,T),n(e,u),n(u,i),K(i,t[2]),n(u,f),n(u,h),n(u,O),n(u,L),n(e,w),n(e,N),n(N,S),n(S,M);for(let l=0;l<v.length;l+=1)v[l].m(S,null);n(N,Y),n(N,k),n(k,j);for(let l=0;l<_.length;l+=1)_[l].m(k,null);H||(G=[C(i,"input",t[7]),C(h,"click",t[3])],H=!0)},p(o,[p]){if(p&4&&i.value!==o[2]&&K(i,o[2]),p&49){V=o[0];let l;for(l=0;l<V.length;l+=1){const B=x(o,V,l);v[l]?v[l].p(B,p):(v[l]=ee(B),v[l].c(),v[l].m(S,null))}for(;l<v.length;l+=1)v[l].d(1);v.length=V.length}if(p&66){A=o[1];let l;for(l=0;l<A.length;l+=1){const B=$(o,A,l);_[l]?_[l].p(B,p):(_[l]=te(B),_[l].c(),_[l].m(k,null))}for(;l<_.length;l+=1)_[l].d(1);_.length=A.length}},i:W,o:W,d(o){o&&d(e),Z(v,o),Z(_,o),H=!1,le(G)}}}function ce(t,e,s){let a=[],r=[];re(async()=>{localStorage.setItem("todos",JSON.stringify(a)),localStorage.setItem("dones",JSON.stringify(r)),s(0,a=JSON.parse(localStorage.getItem("todos"))),s(1,r=JSON.parse(localStorage.getItem("dones")))});var c="";function m(){c.length<1||(a.push(c),s(0,a),console.log(a),s(2,c=""),console.log(localStorage.getItem("todos")+" "+localStorage.getItem("dones")))}function T(h){r.push(h),s(1,r),u(h)}function u(h){a.splice(a.indexOf(h),1),s(0,a)}function i(h){r.splice(r.indexOf(h),1),s(1,r)}function f(){c=this.value,s(2,c)}return[a,r,c,m,T,u,i,f]}class ue extends oe{constructor(e){super(),ne(this,e,ce,ie,ae,{})}}export{ue as component};
