"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[62364],{17672:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var n=i(74848),r=i(28453);const s={sidebar_position:3,description:"The Obol Modular Staking Stack"},o="Obol's Modular Staking Stack",a={id:"learn/intro/staking-stack",title:"Obol's Modular Staking Stack",description:"The Obol Modular Staking Stack",source:"@site/docs/learn/intro/staking-stack.md",sourceDirName:"learn/intro",slug:"/learn/intro/staking-stack",permalink:"/next/learn/intro/staking-stack",draft:!1,unlisted:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/docs/learn/intro/staking-stack.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"The Obol Modular Staking Stack"},sidebar:"tutorialSidebar",previous:{title:"Obol vs Other DV Implementations",permalink:"/next/learn/intro/obol-vs-others"},next:{title:"Obol Splits",permalink:"/next/learn/intro/obol-splits"}},l={},d=[{value:"The Components",id:"the-components",level:2},{value:"The Vision",id:"the-vision",level:2},{value:"V1 - Trusted Distributed Validators",id:"v1---trusted-distributed-validators",level:3},{value:"V2 - Trustless Distributed Validators",id:"v2---trustless-distributed-validators",level:3}];function c(e){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"obols-modular-staking-stack",children:"Obol's Modular Staking Stack"})}),"\n",(0,n.jsx)(t.h2,{id:"the-components",children:"The Components"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/next/learn/charon/intro",children:"Charon"})," - Obol's DV Middleware client."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/next/learn/intro/obol-splits",children:"Obol Splits"})," - A suite of smart contracts for use with distributed validators."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/next/learn/intro/launchpad",children:"DV Launchpad"})," - A website interface for configuring and activating distributed validators."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/next/adv/advanced/quickstart-sdk",children:"Obol SDK"})," - for creating Distributed Validators with the help of the Obol API."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Obol Stacking Stack",src:i(66192).A+"",width:"1225",height:"684"})}),"\n",(0,n.jsx)(t.h2,{id:"the-vision",children:"The Vision"}),"\n",(0,n.jsx)(t.p,{children:"The road to decentralizing stake is a long one. At Obol we have divided our vision into two key versions of distributed validators."}),"\n",(0,n.jsx)(t.h3,{id:"v1---trusted-distributed-validators",children:"V1 - Trusted Distributed Validators"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Multi Operator DV Cluster",src:i(32131).A+"",width:"1200",height:"630"})}),"\n",(0,n.jsx)(t.p,{children:"The first version of distributed validators will have dispute resolution out of band. Meaning you need to know and communicate with your other operators if there is an issue with your shared cluster."}),"\n",(0,n.jsx)(t.p,{children:"A DV without in-band dispute resolution/incentivisation is still extremely valuable. Individuals and staking as a service providers can deploy DVs on their own to make their validators fault tolerant. Groups can run DVs together, but need to bring their own dispute resolution to the table, whether that be a smart contract of their own, a traditional legal service agreement, or simply high trust between the group."}),"\n",(0,n.jsx)(t.h3,{id:"v2---trustless-distributed-validators",children:"V2 - Trustless Distributed Validators"}),"\n",(0,n.jsxs)(t.p,{children:["As described in our ",(0,n.jsx)(t.a,{href:"https://blog.obol.org/roadmap-the-distributed-validator-protocol/",children:"roadmap blog article"})," published in February 2024, Version 2 of Charon will layer in a (dis)incentivisation scheme to solve the \u201clazy operator\u201d problem, whereby an offline operator within a DV cluster does not earn any rewards. Further incentivisation alignment can be achieved with operator bonding requirements that can be slashed for unacceptable performance."]}),"\n",(0,n.jsxs)(t.p,{children:["To add an un-gameable incentivisation layer to threshold validation requires complex interactive cryptography schemes, secure off-chain dispute resolution, and EVM support for proofs of the consensus layer state, as a result, this will be a longer and more complex undertaking than V1, hence the delineation between the two. Some of the published R&D material is available in the ",(0,n.jsx)(t.a,{href:"https://docs.obol.org/next/fr/resources#research-and-development",children:"further reading"})," section of the docs."]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},32131:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/MultiOperator7-4edfd43fd723b1fc7a9c42ea8e79cbf0.png"},66192:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/StakingStack-509229ca49fdda3edce9fcea5918991b.png"},28453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>a});var n=i(96540);const r={},s=n.createContext(r);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);