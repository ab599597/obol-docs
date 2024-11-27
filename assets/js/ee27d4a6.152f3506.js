"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[26133],{92418:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=i(74848),n=i(28453);const o={description:"How do distributed validator clients communicate with one another securely?"},s="Peer discovery",a={id:"dv/peer-discovery",title:"Peer discovery",description:"How do distributed validator clients communicate with one another securely?",source:"@site/versioned_docs/version-v0.3.0/dv/06_peer-discovery.md",sourceDirName:"dv",slug:"/dv/peer-discovery",permalink:"/v0.3.0/dv/peer-discovery",draft:!1,unlisted:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.3.0/dv/06_peer-discovery.md",tags:[],version:"v0.3.0",sidebarPosition:6,frontMatter:{description:"How do distributed validator clients communicate with one another securely?"},sidebar:"tutorialSidebar",previous:{title:"Middleware daemon",permalink:"/v0.3.0/dv/middleware-daemon"},next:{title:"P2P interface",permalink:"/v0.3.0/dv/p2p-interface"}},d={},l=[{value:"Authenticating a distributed validator client",id:"authenticating-a-distributed-validator-client",level:3},{value:"Node database",id:"node-database",level:4},{value:"Node discovery",id:"node-discovery",level:4}];function c(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"peer-discovery",children:"Peer discovery"})}),"\n",(0,r.jsx)(t.p,{children:"In order to maintain security, middleware clients need to be able to authenticate one another. We achieve this by giving each middleware client something they can use that other clients in the cluster will be able to recognise as legitimate."}),"\n",(0,r.jsxs)(t.p,{children:["At the end of a ",(0,r.jsx)(t.a,{href:"/v0.3.0/dv/validator-creation#stages-of-creating-a-distributed-validator",children:"DVK generation ceremony"}),", each operator will have a number of files outputted by their CLI program/browser based on how many distributed validators the group chose to generate together."]}),"\n",(0,r.jsx)(t.p,{children:"These files are:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Validator keystore(s):"})," These files will be loaded into the operator's validator client and each file represents one share of a distributed validator."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"A distributed validator cluster manifest:"})," This file contains the configuration a distributed validator client like charon needs to join a cluster capable of operating a number of distributed validators."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"authenticating-a-distributed-validator-client",children:"Authenticating a distributed validator client"}),"\n",(0,r.jsx)(t.p,{children:"During the final stage of the DVK ceremony, after the validator key shares are generated for each operator, the ceremony program will generate a random SECP256K1 key pair to be used by a Charon client for its ENR. The program will sign this ENR public key with every keystore this validator will service, to indicate to all other operators that this randomly generated key is directly authorised by the current operator to communicate at the consensus layer for their distributed validator key shares."}),"\n",(0,r.jsxs)(t.p,{children:["This sensitive ENR private key, and the general configuration of the distributed validator cluster will be the outputs of a DVK ceremony known shorthand as a ",(0,r.jsx)(t.code,{children:"cluster manifest"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"This manifest file will be made available to a charon client, and the validator key stores will be made available to the configured validator client. When charon starts up and ingests its configuration from the manifest file, it will use the provided keypair for its ENR. If it's configured IP address is different from what is embedded in the ENR to begin with, it reissues the ENR as needed and begins to establish connections with the other operators in the cluster as recorded in the manifest file."}),"\n",(0,r.jsx)(t.h4,{id:"node-database",children:"Node database"}),"\n",(0,r.jsx)(t.p,{children:"Obol DV clusters are permissioned networks with a fully meshed topology. Each node will permanently store the ENRs of all other known Obol nodes in their node database."}),"\n",(0,r.jsxs)(t.p,{children:["Unlike with node databases of public permissionless networks (such as ",(0,r.jsx)(t.a,{href:"https://pkg.go.dev/github.com/ethereum/go-ethereum@v1.10.13/p2p/enode#DB",children:"Go-Ethereum"}),"), there is no inbuilt eviction logic \u2013 the database will keep growing indefinitely."]}),"\n",(0,r.jsx)(t.h4,{id:"node-discovery",children:"Node discovery"}),"\n",(0,r.jsx)(t.p,{children:"In early versions of Charon, operator nodes will be seeded in the node database from cluster manifest files. Updates to the node database can be made in realtime as a Charon client receives messages from these authorised ENRs containing a higher nonce value than present in our node database, usually representing an IP address update."}),"\n",(0,r.jsxs)(t.p,{children:["In the future, Charon is intended to discover counterparty nodes using the ",(0,r.jsx)(t.a,{href:"https://github.com/ethereum/devp2p/blob/master/discv5/discv5.md",children:"discv5"})," protocol. All DVCs connecting to the Obol Network will join a public node discovery peer-to-peer network to find the latest ENR records for their DV peers."]}),"\n",(0,r.jsx)(t.p,{children:"This dynamic discovery serves two purposes:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Bootstrapping a node database in the event of data loss when peers no longer listen on the IP addresseses specified in the manifest and need to be located."}),"\n",(0,r.jsx)(t.li,{children:"Periodically refreshing ENRs to follow IP address changes, e.g. AWS EC2 IPs or NAT on residential broadband."}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>a});var r=i(96540);const n={},o=r.createContext(n);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);