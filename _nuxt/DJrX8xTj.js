import d from"./bYp6uVQ0.js";import _ from"./BJlGE7lA.js";import y from"./DWSqAfWv.js";import f from"./BujPn_ul.js";import k from"./GKCsKY5D.js";import{useLayout as h}from"./rflFLgvs.js";import{r as b,H as M,c as g,t as C,v as A,x as r,z as i,Z as L,T as S,i as E}from"./BMAZduz9.js";import"./Da7h34OJ.js";import"./CQfGuK2a.js";import"./BDB8Pzls.js";import"./DCXSDiyq.js";import"./C1rpcVUP.js";import"./CdmVNnAb.js";import"./DXH2yAvA.js";import"./C4VqCLQp.js";import"./DWL4116U.js";import"./BpW08pDK.js";import"./ejz576nj.js";import"./BMcsD95C.js";import"./B0xEA_uU.js";import"./DQ8wX3Z2.js";import"./HkJE_FHI.js";import"./BS4RO5e-.js";import"./neyLyFds.js";import"./DEQxxvbt.js";const w={class:"layout-sidebar"},N={class:"layout-main-container"},T={class:"layout-main"},$=r("div",{class:"layout-mask"},null,-1),it={__name:"AppLayout",setup(x){const{layoutConfig:e,layoutState:o,isSidebarActive:n}=h(),a=b(null);M(n,t=>{t?u():m()});const c=g(()=>({"layout-theme-light":e.darkTheme.value==="light","layout-theme-dark":e.darkTheme.value==="dark","layout-overlay":e.menuMode.value==="overlay","layout-static":e.menuMode.value==="static","layout-static-inactive":o.staticMenuDesktopInactive.value&&e.menuMode.value==="static","layout-overlay-active":o.overlayMenuActive.value,"layout-mobile-active":o.staticMenuMobileActive.value,"p-ripple-disabled":e.ripple.value===!1})),u=()=>{a.value||(a.value=t=>{p(t)&&(o.overlayMenuActive.value=!1,o.staticMenuMobileActive.value=!1,o.menuHoverActive.value=!1)},document.addEventListener("click",a.value))},m=()=>{a.value&&(document.removeEventListener("click",a),a.value=null)},p=t=>{const l=document.querySelector(".layout-sidebar"),s=document.querySelector(".layout-menu-button");return!(l.isSameNode(t.target)||l.contains(t.target)||s.isSameNode(t.target)||s.contains(t.target))};return(t,l)=>{const s=E("router-view"),v=d;return C(),A(S,null,[r("div",{class:L(["layout-wrapper",c.value])},[i(_),r("div",w,[i(f)]),r("div",N,[r("div",T,[i(s)]),i(y)]),i(k),$],2),i(v,{position:"top-right"})],64)}}};export{it as default};