import{s as r}from"./BcBrOrW9.js";import{a6 as a,t as i,v as l,$ as o,ad as p}from"./BKwiWV2A.js";var d={root:function(t){var n=t.instance;return["p-splitter-panel",{"p-splitter-panel-nested":n.isNested}]}},u=a.extend({name:"splitterpanel",classes:d}),c={name:"BaseSplitterPanel",extends:r,props:{size:{type:Number,default:null},minSize:{type:Number,default:null}},style:u,provide:function(){return{$parentInstance:this}}},f={name:"SplitterPanel",extends:c,inheritAttrs:!1,data:function(){return{nestedState:null}},computed:{isNested:function(){var t=this;return this.$slots.default().some(function(n){return t.nestedState=n.type.name==="Splitter"?!0:null,t.nestedState})},getPTOptions:function(){return{context:{nested:this.isNested}}}}};function m(e,t,n,S,v,s){return i(),l("div",p({ref:"container",class:e.cx("root")},e.ptmi("root",s.getPTOptions)),[o(e.$slots,"default")],16)}f.render=m;export{f as default};