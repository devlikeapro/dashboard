import{_ as k,a as y}from"./Czlm8cOo.js";import S from"./D2KsnYhx.js";import{u as w}from"./Du7-gIOb.js";import{d as V,c,V as $,t as n,v as r,x as t,y as i,N as o,z as d,T as l,U as _,L as N,B as x,_ as j}from"./C6RVWvg8.js";import{_ as B}from"./DTtIV3Kc.js";import"./BA1FreOK.js";import"./1xe70Tsy.js";import"./Bz4jCqtn.js";import"./CkfYR_mS.js";import"./Bavdzxnc.js";import"./DcFMfRtY.js";import"./DFRu83tS.js";import"./Bve316N9.js";import"./Da6lcFxJ.js";import"./OD-94Mii.js";import"./74a7My_7.js";import"./BUGiYvvn.js";import"./DsjBjCNK.js";import"./BNUdJZI7.js";import"./NlzPU5-Q.js";import"./CwM6FwEs.js";import"./CYNDt3Io.js";import"./nvanx9XR.js";import"./DyNrtvP7.js";import"./_rUJ_ruv.js";import"./B7e1gWrV.js";import"./teqq-oZO.js";import"./KHJmqrId.js";import"./CktuXmq6.js";import"./B4Lsw2Fr.js";import"./okU0kSbQ.js";import"./B-9bI2ON.js";import"./DFSpCbjf.js";import"./B2xB4Lc4.js";import"./BLeNDH04.js";import"./BbyWD4rP.js";import"./CCvufsEg.js";import"./BVsz9cQv.js";import"./CPbrbYQm.js";import"./Cye27c6k.js";import"./C3qTWHxC.js";import"./DWtZcyA6.js";import"./DTLUUIZU.js";import"./B-rqw4sK.js";import"./BkqOnZ7Z.js";import"./CwRuQ9eI.js";import"./Czq9pWBx.js";import"./oPmbVY7L.js";import"./Ckb2tarf.js";import"./CMgG5IsM.js";import"./5mWf-HB9.js";import"./9IEUknbI.js";import"./WR8XIMsi.js";import"./Dz4cl-52.js";import"./b83sZZTj.js";import"./CFqlj3Ih.js";import"./CZs2BFmC.js";import"./pkFGkA2S.js";import"./Gs-9x_k-.js";import"./Bn9WO_kL.js";import"./CzA0CPXw.js";import"./CDyRVU3Z.js";import"./BX7gnICQ.js";import"./D4a9uCUK.js";import"./D4JPrZTO.js";const O={class:"col-12 lg:col-6 xl:col-4"},T={class:"card mb-0"},D={class:"flex justify-content-between mb-3"},I=t("span",{class:"block text-900 font-medium mb-3"},"Sessions",-1),P={class:"text-900 font-medium text-xl"},C={class:"flex"},E=t("div",{class:"flex align-items-center justify-content-center bg-green-50 border-round",style:{width:"2.5rem",height:"2.5rem"}},[t("i",{class:"pi pi-whatsapp text-green-500 text-xl"})],-1),R={class:"text-green-500 font-medium"},U=t("span",{class:"text-500"}," working",-1),W=t("span",{class:"text-500"},", ",-1),q={class:"text-orange-400 font-medium"},G=t("span",{class:"text-500"}," requires attention",-1),K=t("span",{class:"text-500"},", ",-1),L={class:"text-gray-400 font-medium"},z=t("span",{class:"text-500"}," stopped",-1),F={class:"col-12 lg:col-6 xl:col-4"},H={class:"card mb-0"},M={class:"flex justify-content-between mb-3"},A=t("span",{class:"block text-900 font-medium mb-3"},"Workers",-1),J={class:"text-900 font-medium text-xl"},Q=t("div",{class:"flex align-items-center justify-content-center bg-purple-100 border-round",style:{width:"2.5rem",height:"2.5rem"}},[t("i",{class:"pi pi-server text-purple-500 text-xl"})],-1),X={class:"text-red-500 font-medium"},Y=t("span",{class:"text-900"}," not connected",-1),Z=t("span",null," / ",-1),tt={class:"text-green-500 font-medium"},et=t("span",{class:"text-500"}," connected",-1),st={class:"col-12 lg:col-6 xl:col-4"},ot={class:"card mb-0"},it={class:"flex justify-content-between mb-3"},nt=t("span",{class:"block text-900 font-medium mb-3"}," Latest Version ",-1),rt={key:1,class:"text-900 font-medium text-xl"},ct={href:"https://waha.devlike.pro/docs/overview/changelog/",target:"_blank"},lt=t("i",{class:"pi pi-external-link"},null,-1),at=t("div",{class:"flex align-items-center justify-content-center bg-cyan-100 border-round",style:{width:"2.5rem",height:"2.5rem"}},[t("i",{class:"pi pi-cloud-download text-cyan-500 text-xl"})],-1),mt={class:"text-orange-400 font-medium"},dt=t("span",{class:"text-500"}," workers ready for updates",-1),pt={key:1,class:"text-green-500 font-medium"},_t=t("i",{class:"pi text-green-500 pi-check-circle"},null,-1),ht=V({__name:"IndexOverview",setup(f){const e=w(),a=c(()=>e.servers.filter(s=>s.connected===!1)),p=c(()=>e.servers.filter(s=>s.connected===!0)),m=c(()=>e.servers.filter(s=>e.latestVersion&&s.version&&s.version.version!==e.latestVersion)),h=c(()=>e.visibleSessions.filter(s=>s.status!=="WORKING"&&s.status!=="STOPPED")),v=c(()=>e.visibleSessions.filter(s=>s.status==="WORKING")),u=c(()=>e.visibleSessions.filter(s=>s.status==="STOPPED"));return $(()=>{e.refresh()}),(s,yt)=>{const g=k,b=S;return n(),r(l,null,[t("div",O,[t("div",T,[t("div",D,[t("div",null,[I,t("div",P,i(o(e).visibleSessions.length),1)]),t("div",C,[t("div",null,[d(g)]),E])]),t("span",R,i(o(v).length),1),U,o(h).length>0?(n(),r(l,{key:0},[W,t("span",q,i(o(h).length),1),G],64)):_("",!0),o(u).length>0?(n(),r(l,{key:1},[K,t("span",L,i(o(u).length),1),z],64)):_("",!0)])]),t("div",F,[t("div",H,[t("div",M,[t("div",null,[A,t("span",J,[t("span",null,i(o(e).servers.length),1)])]),Q]),t("div",null,[o(a).length>0?(n(),r(l,{key:0},[t("span",X,i(o(a).length),1),Y,Z],64)):_("",!0),t("span",tt,i(o(p).length),1),et])])]),t("div",st,[t("div",ot,[t("div",it,[t("div",null,[nt,t("div",null,[o(e).latestVersion?(n(),r("span",rt,[t("a",ct,[x(i(o(e).latestVersion)+" ",1),lt])])):(n(),N(b,{key:0,width:"4rem"}))])]),at]),o(m).length>0?(n(),r(l,{key:0},[t("span",mt,i(o(m).length),1),dt],64)):(n(),r("span",pt,[_t,x(" Up to date ")]))])])],64)}}}),ut={},xt={class:"grid"},ft={class:"col-12"},vt={class:"card"},gt={class:"col-12"},bt={class:"card"};function kt(f,e){const a=ht,p=B,m=y;return n(),r("div",xt,[d(a),t("div",ft,[t("div",vt,[d(p)])]),t("div",gt,[t("div",bt,[d(m)])])])}const Pe=j(ut,[["render",kt]]);export{Pe as default};