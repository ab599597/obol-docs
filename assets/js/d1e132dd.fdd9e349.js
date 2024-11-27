"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[95947],{19861:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var s=n(74848),i=n(28453);const r={},a="Quickstart Guides",o={id:"int/quickstart/index",title:"Quickstart Guides",description:"Charon is in an alpha state and should be used with caution according to its Terms of Use.",source:"@site/versioned_docs/version-v0.16.0/int/quickstart/index.md",sourceDirName:"int/quickstart",slug:"/int/quickstart/",permalink:"/v0.16.0/int/quickstart/",draft:!1,unlisted:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.16.0/int/quickstart/index.md",tags:[],version:"v0.16.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Key concepts",permalink:"/v0.16.0/int/key-concepts"},next:{title:"Run a test cluster locally",permalink:"/v0.16.0/int/quickstart/alone/test-locally"}},c={},d=[];function l(e){const t={a:"a",admonition:"admonition",h1:"h1",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"quickstart-guides",children:"Quickstart Guides"})}),"\n",(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsxs)(t.p,{children:["Charon is in an alpha state and should be used with caution according to its ",(0,s.jsx)(t.a,{href:"https://obol.tech/terms.pdf",children:"Terms of Use"}),"."]})}),"\n",(0,s.jsx)(t.p,{children:"There are two ways to set up a distributed validator and each comes with its own quickstart"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsxs)(t.a,{href:"/v0.16.0/int/quickstart/group/",children:["Run a DV cluster as a ",(0,s.jsx)(t.strong,{children:"group"})]}),", where several operators run the nodes that make up the cluster. In this setup, the key shares are created using a distributed key generation process, avoiding the full private keys being stored in full in any one place.\nThis approach can also be used by single operators looking to manage all nodes of a cluster but wanting to create the key shares in a trust-minimised fashion."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsxs)(t.a,{href:"./quickstart/alone/create-keys",children:["Run a DV cluster ",(0,s.jsx)(t.strong,{children:"alone"})]}),", where a single operator runs all the nodes of the DV. Depending on trust assumptions, there is not necessarily the need to create the key shares via a DKG process. Instead the key shares can be created in a centralised manner, and distributed securely to the nodes."]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var s=n(96540);const i={},r=s.createContext(i);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);