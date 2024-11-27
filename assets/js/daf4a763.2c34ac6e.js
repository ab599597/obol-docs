"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[88553],{92935:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(74848),i=t(28453);const o={description:"Charon -  The Distributed Validator Client"},a="Introducing Charon",s={id:"dv/introducing-charon",title:"Introducing Charon",description:"Charon -  The Distributed Validator Client",source:"@site/versioned_docs/version-v0.6.0/dv/01_introducing-charon.md",sourceDirName:"dv",slug:"/dv/introducing-charon",permalink:"/v0.6.0/dv/introducing-charon",draft:!1,unlisted:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.6.0/dv/01_introducing-charon.md",tags:[],version:"v0.6.0",sidebarPosition:1,frontMatter:{description:"Charon -  The Distributed Validator Client"},sidebar:"tutorialSidebar",previous:{title:"Frequently asked questions",permalink:"/v0.6.0/int/faq"},next:{title:"Distributed validator creation",permalink:"/v0.6.0/dv/validator-creation"}},d={},c=[{value:"What is Charon?",id:"what-is-charon",level:3},{value:"Charon architecture",id:"charon-architecture",level:3},{value:"Get started",id:"get-started",level:3}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h3:"h3",header:"header",img:"img",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"introducing-charon",children:"Introducing Charon"})}),"\n",(0,r.jsxs)(n.p,{children:["This section introduces and outlines the Charon middleware. For additional context regarding distributed validator technology, see ",(0,r.jsx)(n.a,{href:"../int/key-concepts#distributed-validator",children:"this section"})," of the key concept page."]}),"\n",(0,r.jsx)(n.h3,{id:"what-is-charon",children:"What is Charon?"}),"\n",(0,r.jsx)(n.p,{children:"Charon is a GoLang-based, HTTP middleware built by Obol to enable any existing Ethereum validator clients to operate together as part of a distributed validator."}),"\n",(0,r.jsxs)(n.p,{children:["Charon sits as a middleware between a normal validating client and it's connected beacon node, intercepting and proxying API traffic. Multiple Charon clients are configured to communicate together to come to consensus on validator duties and behave as a single unified proof-of-stake validator together. The nodes form a cluster that is ",(0,r.jsx)(n.em,{children:"byzantine-fault tolerant"})," and continues to progress assuming a supermajority of working/honest nodes is met."]}),"\n",(0,r.jsx)(n.h3,{id:"charon-architecture",children:"Charon architecture"}),"\n",(0,r.jsx)(n.p,{children:"The below graphic visually outlines the internal functionalies of Charon."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Charon Internals Slide",src:t(9930).A+"",width:"960",height:"540"})}),"\n",(0,r.jsx)(n.h3,{id:"get-started",children:"Get started"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"charon"})," client is in an early alpha state, and is not ready for mainnet, see ",(0,r.jsx)(n.a,{href:"https://github.com/ObolNetwork/charon#supported-consensus-layer-clients",children:"here"})," for the latest on charon's readiness."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"docker run ghcr.io/obolnetwork/charon:v0.6.0 --help\n"})}),"\n",(0,r.jsxs)(n.p,{children:["For more information on running charon, take a look at our ",(0,r.jsx)(n.a,{href:"/v0.6.0/int/quickstart",children:"quickstart guide"}),"."]})]})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},9930:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/CharonInternals-8cab9fd64594cf16a86f3b7c10f10a88.png"},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>s});var r=t(96540);const i={},o=r.createContext(i);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);