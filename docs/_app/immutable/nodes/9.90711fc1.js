import{S as W,i as Y,s as z,k as B,q as L,a as T,l as I,m as O,r as w,h as v,c as A,n as d,p as F,b as D,D as o,N as K,u as R,O as J,H as Q,L as V,K as N,P as X}from"../chunks/index.b631eb22.js";import{f as Z}from"../chunks/index.7981f47f.js";function S(n,e,s){const f=n.slice();return f[9]=e[s],f}function q(n){let e,s,f,i=n[9].name+"",c,C,h,E,g=n[9].count+"",u,k,m,b,a=n[9].cost+"",l,r,t,y,P,j;function G(){return n[3](n[9])}return{c(){e=B("article"),s=B("button"),f=L("Buy "),c=L(i),C=T(),h=B("p"),E=L("Owned: "),u=L(g),k=T(),m=B("p"),b=L("Cost: "),l=L(a),r=T(),t=B("img"),this.h()},l(p){e=I(p,"ARTICLE",{class:!0});var _=O(e);s=I(_,"BUTTON",{class:!0});var U=O(s);f=w(U,"Buy "),c=w(U,i),U.forEach(v),C=A(_),h=I(_,"P",{class:!0});var H=O(h);E=w(H,"Owned: "),u=w(H,g),H.forEach(v),k=A(_),m=I(_,"P",{class:!0});var M=O(m);b=w(M,"Cost: "),l=w(M,a),M.forEach(v),_.forEach(v),r=A(p),t=I(p,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){d(s,"class","svelte-9hbaui"),d(h,"class","svelte-9hbaui"),d(m,"class","svelte-9hbaui"),d(e,"class","item svelte-9hbaui"),d(t,"class","unit_image svelte-9hbaui"),N(t.src,y=n[9].name.toLowerCase()+".png")||d(t,"src",y),d(t,"alt","bajs")},m(p,_){D(p,e,_),o(e,s),o(s,f),o(s,c),o(e,C),o(e,h),o(h,E),o(h,u),o(e,k),o(e,m),o(m,b),o(m,l),D(p,r,_),D(p,t,_),P||(j=K(s,"click",G),P=!0)},p(p,_){n=p,_&2&&i!==(i=n[9].name+"")&&R(c,i),_&2&&g!==(g=n[9].count+"")&&R(u,g),_&2&&a!==(a=n[9].cost+"")&&R(l,a),_&2&&!N(t.src,y=n[9].name.toLowerCase()+".png")&&d(t,"src",y)},d(p){p&&v(e),p&&v(r),p&&v(t),P=!1,j()}}}function x(n){let e,s,f,i,c,C,h,E,g,u,k,m,b=n[1],a=[];for(let l=0;l<b.length;l+=1)a[l]=q(S(n,b,l));return{c(){e=B("body"),s=B("h1"),f=L("CHILD LABOR CLICKER!!!!!!"),i=T(),c=B("button"),C=L(`CP (Coal points):
    
		`),h=B("span"),E=L(n[0]),u=T();for(let l=0;l<a.length;l+=1)a[l].c();this.h()},l(l){e=I(l,"BODY",{class:!0});var r=O(e);s=I(r,"H1",{class:!0});var t=O(s);f=w(t,"CHILD LABOR CLICKER!!!!!!"),t.forEach(v),i=A(r),c=I(r,"BUTTON",{id:!0,class:!0});var y=O(c);C=w(y,`CP (Coal points):
    
		`),h=I(y,"SPAN",{style:!0});var P=O(h);E=w(P,n[0]),P.forEach(v),y.forEach(v),u=A(r);for(let j=0;j<a.length;j+=1)a[j].l(r);r.forEach(v),this.h()},h(){d(s,"class","svelte-9hbaui"),F(h,"display","inline-block"),d(c,"id","cookie"),d(c,"class","svelte-9hbaui"),d(e,"class","svelte-9hbaui")},m(l,r){D(l,e,r),o(e,s),o(s,f),o(e,i),o(e,c),o(c,C),o(c,h),o(h,E),o(e,u);for(let t=0;t<a.length;t+=1)a[t].m(e,null);k||(m=K(c,"click",n[2]),k=!0)},p(l,[r]){if(r&1&&R(E,l[0]),r&2){b=l[1];let t;for(t=0;t<b.length;t+=1){const y=S(l,b,t);a[t]?a[t].p(y,r):(a[t]=q(y),a[t].c(),a[t].m(e,null))}for(;t<a.length;t+=1)a[t].d(1);a.length=b.length}},i(l){g||J(()=>{g=X(c,Z,{y:-20}),g.start()})},o:Q,d(l){l&&v(e),V(a,l),k=!1,m()}}}var $=1;function tt(n,e,s){let f;var i=0;let c;setInterval(()=>{c=new Date,f.forEach(u=>{u.count>0&&u.Update()})},1);class C{constructor(k,m,b,a){this.name=k,this.cost=m,this.count=0,this.pertick=b,this.baseIncrease=a,this.bajs=0}Update(){if(console.log(c.getTime()),this.bajs>1e3){let k=this.bajs%1e3;E(k),this.bajs-=1e3}this.bajs+=this.pertick}Buy(){i<this.cost||(this.count+=1,s(0,i-=this.cost),s(0,i),this.cost+=this.baseIncrease,this.cost*=1.5,this.cost=Math.round(this.cost),this.count>1&&this.pertick*1.3,s(1,f))}}function h(){s(0,i+=1*$),s(0,i)}function E(u){s(0,i+=u),s(0,i)}const g=u=>{u.Buy()};return s(1,f=[new C("Child Worker",2,3,20),new C("Coal Mine",2,3,60),new C("Sweatshop",2,3,150)]),[i,f,h,g]}class lt extends W{constructor(e){super(),Y(this,e,tt,x,z,{})}}export{lt as component};
