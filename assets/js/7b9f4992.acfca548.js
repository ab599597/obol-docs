"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[43509],{49366:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>l,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=t(74848),i=t(28453);const s={description:"Connectivity between Charon instances",sidebar_position:5},o="P2P interface",c={id:"charon/p2p-interface",title:"P2P interface",description:"Connectivity between Charon instances",source:"@site/versioned_docs/version-v0.13.0/charon/p2p-interface.md",sourceDirName:"charon",slug:"/charon/p2p-interface",permalink:"/docs/v0.13.0/charon/p2p-interface",draft:!1,unlisted:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.13.0/charon/p2p-interface.md",tags:[],version:"v0.13.0",sidebarPosition:5,frontMatter:{description:"Connectivity between Charon instances",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Peer discovery",permalink:"/docs/v0.13.0/charon/peer-discovery"},next:{title:"CLI reference",permalink:"/docs/v0.13.0/charon/charon_cli_reference"}},a={},d=[];function h(e){const n={a:"a",code:"code",h1:"h1",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"p2p-interface",children:"P2P interface"}),"\n",(0,r.jsxs)(n.p,{children:["The Charon P2P interface loosely follows the ",(0,r.jsx)(n.a,{href:"https://github.com/ethereum/consensus-specs/blob/dev/specs/phase0/p2p-interface.md",children:"Eth2 beacon P2P interface"}),"."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Transport: TCP over IPv4/IPv6."}),"\n",(0,r.jsxs)(n.li,{children:["Identity: ",(0,r.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-778",children:"Ethereum Node Records"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Handshake: ",(0,r.jsx)(n.a,{href:"https://github.com/libp2p/specs/tree/master/noise",children:"noise-libp2p"})," with ",(0,r.jsx)(n.code,{children:"secp256k1"})," keys.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Each charon client must have their ENR public key authorized in a ",(0,r.jsx)(n.a,{href:"./cluster-configuration",children:(0,r.jsx)(n.code,{children:"cluster-lock.json"})})," file in order for the client handshake to succeed."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Discovery: ",(0,r.jsx)(n.a,{href:"https://github.com/ethereum/devp2p/blob/master/discv5/discv5.md",children:"Discv5"}),"."]}),"\n"]})]})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var r=t(96540);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);