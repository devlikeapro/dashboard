import{_ as k,a as y}from"./0pxVITPn.js";import S from"./-uXuh6Uv.js";import{u as w}from"./BUKjHOuw.js";import{d as V,c,L as $,t as i,v as r,x as t,y as n,M as o,z as m,N as l,O as _,P as N,B as x,_ as O}from"./EUqUP5lW.js";import{_ as j}from"./B__Sp1mP.js";import"./DFpDj4YW.js";import"./B-CXA6QY.js";import"./75UDSGXz.js";import"./ReFhIEhQ.js";import"./BhuvkqtI.js";import"./cIsk-gXN.js";import"./D7IOrt_g.js";import"./upu_fuXc.js";import"./_QVKPVDg.js";import"./Bgc0-JeA.js";import"./DYNw7iot.js";import"./CLufVgJv.js";import"./DiDAvSOU.js";import"./DnE3FAxi.js";import"./2ZeYBdrG.js";import"./xVRKbCXW.js";import"./C8eVBcG5.js";import"./C7UluAPY.js";import"./CuhqqzZB.js";import"./CdsUei4w.js";import"./BLkj9jlW.js";import"./DiiRyG4E.js";import"./4UBqhHA3.js";import"./CqvKd9Wg.js";import"./CEU4T2cH.js";import"./BDxEydEk.js";import"./vqQHV26I.js";import"./BPD7dpCa.js";import"./xQcMKeWN.js";import"./CZKUQpKE.js";import"./D7STheno.js";import"./rffQQXHN.js";import"./BaClFrgN.js";import"./DfG6VTBE.js";import"./BVj_riV9.js";import"./-SkX-p2L.js";import"./BckH4bL3.js";import"./DeOF4zTG.js";import"./6Tcx9rn2.js";import"./sUow17VR.js";import"./Blteo0TU.js";import"./DJ9OB7Bd.js";import"./Ckwfob4H.js";import"./BZSoLJoi.js";import"./C-_r1ev9.js";import"./c-OyYc4d.js";import"./CyL8tyNw.js";import"./C4j9VWd1.js";import"./CVun7_RQ.js";import"./CdIAmmuS.js";import"./CR3wTC4T.js";import"./rkF229-n.js";import"./C4lQ8i5l.js";import"./BHSML_T0.js";const B={class:"col-12 lg:col-6 xl:col-4"},P={class:"card mb-0"},T={class:"flex justify-content-between mb-3"},D=t("span",{class:"block text-900 font-medium mb-3"},"Sessions",-1),I={class:"text-900 font-medium text-xl"},C={class:"flex"},E=t("div",{class:"flex align-items-center justify-content-center bg-green-50 border-round",style:{width:"2.5rem",height:"2.5rem"}},[t("i",{class:"pi pi-whatsapp text-green-500 text-xl"})],-1),R={class:"text-green-500 font-medium"},W=t("span",{class:"text-500"}," working",-1),q=t("span",{class:"text-500"},", ",-1),G={class:"text-orange-400 font-medium"},K=t("span",{class:"text-500"}," requires attention",-1),L=t("span",{class:"text-500"},", ",-1),M={class:"text-gray-400 font-medium"},U=t("span",{class:"text-500"}," stopped",-1),z={class:"col-12 lg:col-6 xl:col-4"},F={class:"card mb-0"},H={class:"flex justify-content-between mb-3"},A=t("span",{class:"block text-900 font-medium mb-3"},"Workers",-1),J={class:"text-900 font-medium text-xl"},Q=t("div",{class:"flex align-items-center justify-content-center bg-purple-100 border-round",style:{width:"2.5rem",height:"2.5rem"}},[t("i",{class:"pi pi-server text-purple-500 text-xl"})],-1),X={class:"text-red-500 font-medium"},Y=t("span",{class:"text-900"}," not connected",-1),Z=t("span",null," / ",-1),tt={class:"text-green-500 font-medium"},et=t("span",{class:"text-500"}," connected",-1),st={class:"col-12 lg:col-6 xl:col-4"},ot={class:"card mb-0"},nt={class:"flex justify-content-between mb-3"},it=t("span",{class:"block text-900 font-medium mb-3"}," Latest Version ",-1),rt={key:1,class:"text-900 font-medium text-xl"},ct={href:"https://waha.devlike.pro/docs/overview/changelog/",target:"_blank"},lt=t("i",{class:"pi pi-external-link"},null,-1),at=t("div",{class:"flex align-items-center justify-content-center bg-cyan-100 border-round",style:{width:"2.5rem",height:"2.5rem"}},[t("i",{class:"pi pi-cloud-download text-cyan-500 text-xl"})],-1),dt={class:"text-orange-400 font-medium"},mt=t("span",{class:"text-500"}," workers ready for updates",-1),pt={key:1,class:"text-green-500 font-medium"},_t=t("i",{class:"pi text-green-500 pi-check-circle"},null,-1),ht=V({__name:"IndexOverview",setup(f){const e=w(),a=c(()=>e.servers.filter(s=>s.connected===!1)),p=c(()=>e.servers.filter(s=>s.connected===!0)),d=c(()=>e.servers.filter(s=>e.latestVersion&&s.version&&s.version.version!==e.latestVersion)),h=c(()=>e.visibleSessions.filter(s=>s.status!=="WORKING"&&s.status!=="STOPPED")),v=c(()=>e.visibleSessions.filter(s=>s.status==="WORKING")),u=c(()=>e.visibleSessions.filter(s=>s.status==="STOPPED"));return $(()=>{e.refresh()}),(s,yt)=>{const g=k,b=S;return i(),r(l,null,[t("div",B,[t("div",P,[t("div",T,[t("div",null,[D,t("div",I,n(o(e).visibleSessions.length),1)]),t("div",C,[t("div",null,[m(g)]),E])]),t("span",R,n(o(v).length),1),W,o(h).length>0?(i(),r(l,{key:0},[q,t("span",G,n(o(h).length),1),K],64)):_("",!0),o(u).length>0?(i(),r(l,{key:1},[L,t("span",M,n(o(u).length),1),U],64)):_("",!0)])]),t("div",z,[t("div",F,[t("div",H,[t("div",null,[A,t("span",J,[t("span",null,n(o(e).servers.length),1)])]),Q]),t("div",null,[o(a).length>0?(i(),r(l,{key:0},[t("span",X,n(o(a).length),1),Y,Z],64)):_("",!0),t("span",tt,n(o(p).length),1),et])])]),t("div",st,[t("div",ot,[t("div",nt,[t("div",null,[it,t("div",null,[o(e).latestVersion?(i(),r("span",rt,[t("a",ct,[x(n(o(e).latestVersion)+" ",1),lt])])):(i(),N(b,{key:0,width:"4rem"}))])]),at]),o(d).length>0?(i(),r(l,{key:0},[t("span",dt,n(o(d).length),1),mt],64)):(i(),r("span",pt,[_t,x(" Up to date ")]))])])],64)}}}),ut={},xt={class:"grid"},ft={class:"col-12"},vt={class:"card"},gt={class:"col-12"},bt={class:"card"};function kt(f,e){const a=ht,p=j,d=y;return i(),r("div",xt,[m(a),t("div",ft,[t("div",vt,[m(p)])]),t("div",gt,[t("div",bt,[m(d)])])])}const Oe=O(ut,[["render",kt]]);export{Oe as default};