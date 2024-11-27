"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[84049],{61551:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=t(74848),o=t(28453);const s={description:"Charon - The Distributed Validator Client"},i="Introducing Charon",a={id:"dv/introducing-charon",title:"Introducing Charon",description:"Charon - The Distributed Validator Client",source:"@site/versioned_docs/version-v0.10.1/dv/01_introducing-charon.md",sourceDirName:"dv",slug:"/dv/introducing-charon",permalink:"/v0.10.1/dv/introducing-charon",draft:!1,unlisted:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.10.1/dv/01_introducing-charon.md",tags:[],version:"v0.10.1",sidebarPosition:1,frontMatter:{description:"Charon - The Distributed Validator Client"},sidebar:"tutorialSidebar",previous:{title:"Errors & Resolutions",permalink:"/v0.10.1/int/faq/errors"},next:{title:"Distributed validator creation",permalink:"/v0.10.1/dv/validator-creation"}},d={},c=[{value:"What is Charon?",id:"what-is-charon",level:2},{value:"Charon architecture",id:"charon-architecture",level:2},{value:"Ports",id:"ports",level:3},{value:"Getting started",id:"getting-started",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"introducing-charon",children:"Introducing Charon"})}),"\n",(0,r.jsxs)(n.p,{children:["This section introduces and outlines the Charon middleware. For additional context regarding distributed validator technology, see ",(0,r.jsx)(n.a,{href:"../int/key-concepts#distributed-validator",children:"this section"})," of the key concept page."]}),"\n",(0,r.jsx)(n.h2,{id:"what-is-charon",children:"What is Charon?"}),"\n",(0,r.jsx)(n.p,{children:"Charon is a GoLang-based, HTTP middleware built by Obol to enable any existing Ethereum validator clients to operate together as part of a distributed validator."}),"\n",(0,r.jsxs)(n.p,{children:["Charon sits as a middleware between a normal validating client and it's connected beacon node, intercepting and proxying API traffic. Multiple Charon clients are configured to communicate together to come to consensus on validator duties and behave as a single unified proof-of-stake validator together. The nodes form a cluster that is ",(0,r.jsx)(n.em,{children:"byzantine-fault tolerant"})," and continues to progress assuming a supermajority of working/honest nodes is met."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Charon Cluster",src:t(56629).A+"",width:"1200",height:"630"})}),"\n",(0,r.jsx)(n.h2,{id:"charon-architecture",children:"Charon architecture"}),"\n",(0,r.jsx)(n.p,{children:"The below graphic visually outlines the internal functionalies of Charon."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Charon Internals Slide",src:t(9930).A+"",width:"960",height:"540"})}),"\n",(0,r.jsx)(n.p,{children:"The middleware strives to be stateless and statically configured through 777 file systems. The lack of a control-plane API for online reconfiguration is deliberate to keep operations simple and secure by default."}),"\n",(0,r.jsx)(n.h3,{id:"ports",children:"Ports"}),"\n",(0,r.jsx)(n.p,{children:"The following is an outline of the services that can be exposed by charon."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:":3600"})," - The validator REST API. This is the port that serves the consensus layer's ",(0,r.jsx)(n.a,{href:"https://ethereum.github.io/beacon-APIs/",children:"beacon node API"}),". This is the port validator clients should talk to instead of their standard consensus client REST API port. Charon subsequently proxies these requests to the upstream consensus client specified by ",(0,r.jsx)(n.code,{children:"--beacon-node-endpoints"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:":3610"})," - Charon P2P port. This is the port that charon clients use to communicate with one another via TCP. This endpoint should be port-forwarded on your router and exposed publicly, preferably on a static IP address. This IP address should then be set on the charon run command with ",(0,r.jsx)(n.code,{children:"--p2p-external-ip"})," or ",(0,r.jsx)(n.code,{children:"CHARON_P2P_EXTERNAL_IP"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:":3620"})," - Monitoring port. This port hosts a webserver that serves prometheus metrics on ",(0,r.jsx)(n.code,{children:"/metrics"}),", a readiness endpoint on ",(0,r.jsx)(n.code,{children:"/readyz"})," and a liveness endpoint on ",(0,r.jsx)(n.code,{children:"/livez"}),", and a pprof server on ",(0,r.jsx)(n.code,{children:"/debug/pprof"}),". This port should not be exposed publicly."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:":3630"})," - UDP discovery port. This port is used by the discv5 discovery protocol for peer discovery of charon nodes."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:":3640"}),"  - Bootnode HTTP server port. This port hosts a HTTP webserver that serves a client's ENR on ",(0,r.jsx)(n.code,{children:"/enr"}),". This is only used by the ",(0,r.jsx)(n.code,{children:"charon bootnode"})," command."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"getting-started",children:"Getting started"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"charon"})," client is in an early alpha state, and is not ready for mainnet, see ",(0,r.jsx)(n.a,{href:"https://github.com/ObolNetwork/charon#supported-consensus-layer-clients",children:"here"})," for the latest on charon's readiness."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"docker run obolnetwork/charon:v0.10.0 --help\n"})}),"\n",(0,r.jsxs)(n.p,{children:["For more information on running charon, take a look at our ",(0,r.jsx)(n.a,{href:"/v0.10.1/int/quickstart/",children:"quickstart guide"}),"."]})]})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},9930:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/CharonInternals-8cab9fd64594cf16a86f3b7c10f10a88.png"},56629:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/DVCluster-d161355b3dfd1808a86148c8fe28271e.png"},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var r=t(96540);const o={},s=r.createContext(o);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);