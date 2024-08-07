"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[43182],{69347:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=i(74848),r=i(28453);const o={description:"Deployment Architecture for a Distributed Validator Client"},a="Middleware Architecture",s={id:"dv/middleware-daemon",title:"Middleware Architecture",description:"Deployment Architecture for a Distributed Validator Client",source:"@site/versioned_docs/version-v0.6.0/dv/04_middleware-daemon.md",sourceDirName:"dv",slug:"/dv/middleware-daemon",permalink:"/docs/v0.6.0/dv/middleware-daemon",draft:!1,unlisted:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.6.0/dv/04_middleware-daemon.md",tags:[],version:"v0.6.0",sidebarPosition:4,frontMatter:{description:"Deployment Architecture for a Distributed Validator Client"},sidebar:"tutorialSidebar",previous:{title:"Distributed validator creation",permalink:"/docs/v0.6.0/dv/validator-creation"},next:{title:"Peer discovery",permalink:"/docs/v0.6.0/dv/peer-discovery"}},d={},c=[{value:"Operation",id:"operation",level:3}];function l(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"middleware-architecture",children:"Middleware Architecture"}),"\n",(0,n.jsx)("p",{align:"center",children:(0,n.jsx)("img",{src:"/img/DistributedValidatorCluster.svg"})}),"\n",(0,n.jsxs)(t.p,{children:["The Charon daemon sits as a middleware between the consensus layer's ",(0,n.jsx)(t.a,{href:"https://ethereum.github.io/beacon-APIs/",children:"beacon node API"})," and any downstream validator clients."]}),"\n",(0,n.jsx)(t.h3,{id:"operation",children:"Operation"}),"\n",(0,n.jsx)(t.p,{children:"The middleware strives to be stateless and statically configured through 777 file systems. The lack of a control-plane API for online reconfiguration is deliberate to keep operations simple and secure by default."}),"\n",(0,n.jsx)(t.p,{children:"The daemon offers a config reload instruction through Unix signals which is useful to join or leave Obol clusters on-the-fly without interruption."}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"charon"})," package will initially be available as a Docker image and through binary builds. An APT package with a systemd integration is planned."]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>s});var n=i(96540);const r={},o=n.createContext(r);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);