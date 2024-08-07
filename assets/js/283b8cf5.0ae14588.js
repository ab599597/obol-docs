"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[12190],{81893:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var o=i(74848),n=i(28453);const s={description:"How do distributed validator clients communicate with one another securely?"},r="Peer discovery",a={id:"dv/peer-discovery",title:"Peer discovery",description:"How do distributed validator clients communicate with one another securely?",source:"@site/versioned_docs/version-v0.8.0/dv/06_peer-discovery.md",sourceDirName:"dv",slug:"/dv/peer-discovery",permalink:"/docs/v0.8.0/dv/peer-discovery",draft:!1,unlisted:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.8.0/dv/06_peer-discovery.md",tags:[],version:"v0.8.0",sidebarPosition:6,frontMatter:{description:"How do distributed validator clients communicate with one another securely?"},sidebar:"tutorialSidebar",previous:{title:"Middleware Architecture",permalink:"/docs/v0.8.0/dv/middleware-daemon"},next:{title:"P2P interface",permalink:"/docs/v0.8.0/dv/p2p-interface"}},d={},c=[{value:"Authenticating a distributed validator client",id:"authenticating-a-distributed-validator-client",level:3},{value:"Node database",id:"node-database",level:4},{value:"Node discovery",id:"node-discovery",level:4}];function l(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"peer-discovery",children:"Peer discovery"}),"\n",(0,o.jsx)(t.p,{children:"In order to maintain security and sybil-resistance, charon clients need to be able to authenticate one another. We achieve this by giving each charon client a public/private key pair that they can sign with such that other clients in the cluster will be able to recognise them as legitimate no matter which IP address they communicate from."}),"\n",(0,o.jsxs)(t.p,{children:["At the end of a ",(0,o.jsx)(t.a,{href:"/docs/v0.8.0/dv/validator-creation#stages-of-creating-a-distributed-validator",children:"DKG ceremony"}),", each operator will have a number of files outputted by their charon client based on how many distributed validators the group chose to generate together."]}),"\n",(0,o.jsx)(t.p,{children:"These files are:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Validator keystore(s):"})," These files will be loaded into the operator's validator client and each file represents one share of a Distributed Validator."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"A distributed validator cluster lock file:"})," This ",(0,o.jsx)(t.code,{children:"cluster-lock.json"})," file contains the configuration a distributed validator client like charon needs to join a cluster capable of operating a number of distributed validators."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Validator deposit data:"})," This file is used to activate one or more distributed validators on the Ethereum network."]}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"authenticating-a-distributed-validator-client",children:"Authenticating a distributed validator client"}),"\n",(0,o.jsxs)(t.p,{children:["Before a DKG process begins, all operators must run ",(0,o.jsx)(t.code,{children:"charon create enr"}),", or just ",(0,o.jsx)(t.code,{children:"charon enr"}),", to create or get the Ethereum Node Record for their client. These ENRs are included in the configuration of a Distributed Key Generation ceremony."]}),"\n",(0,o.jsxs)(t.p,{children:["The file that outlines a DKG ceremony is known as a ",(0,o.jsx)(t.a,{href:"/docs/v0.8.0/dv/distributed-validator-cluster-manifest",children:(0,o.jsx)(t.code,{children:"cluster-definition"})})," file. This file is passed to ",(0,o.jsx)(t.code,{children:"charon dkg"})," which uses it to create private keys, a cluster lock file and deposit data for the configured number of distributed validators. The cluster-lock file will be made available to ",(0,o.jsx)(t.code,{children:"charon run"}),", and the validator key stores will be made available to the configured validator client."]}),"\n",(0,o.jsxs)(t.p,{children:["When ",(0,o.jsx)(t.code,{children:"charon run"})," starts up and ingests its configuration from the ",(0,o.jsx)(t.code,{children:"cluster-lock.json"})," file, it checks if its observed/configured public IP address differs from what is listed in the lock file. If it is different; it updates the IP address, increments the nonce of the ENR and reissues it before beginning to establish connections with the other operators in the cluster."]}),"\n",(0,o.jsx)(t.h4,{id:"node-database",children:"Node database"}),"\n",(0,o.jsx)(t.p,{children:"Distributed Validator Clusters are permissioned networks with a fully meshed topology. Each node will permanently store the ENRs of all other known Obol nodes in their node database."}),"\n",(0,o.jsxs)(t.p,{children:["Unlike with node databases of public permissionless networks (such as ",(0,o.jsx)(t.a,{href:"https://pkg.go.dev/github.com/ethereum/go-ethereum@v1.10.13/p2p/enode#DB",children:"Go-Ethereum"}),"), there is no inbuilt eviction logic \u2013 the database will keep growing indefinitely. This is acceptable as the number of operators in a cluster is expected to stay constant. Mutable cluster operators will be introduced in future."]}),"\n",(0,o.jsx)(t.h4,{id:"node-discovery",children:"Node discovery"}),"\n",(0,o.jsxs)(t.p,{children:["At boot, a charon client will ingest it's configured ",(0,o.jsx)(t.code,{children:"cluster-lock.json"})," file. This file contains a list of ENRs of the client's peers. The client will attempt to establish a connection with these peers, and will perform a handshake if they connect to establish an end to end encrypted communication channel between the clients."]}),"\n",(0,o.jsxs)(t.p,{children:["However, the IP addresses within an ENR can become stale. This could result in a cluster not being able to establish a connection with all nodes. To be tolerant to operator IP addresses changing, charon also supports the ",(0,o.jsx)(t.a,{href:"https://github.com/ethereum/devp2p/blob/master/discv5/discv5.md",children:"discv5"})," discovery protocol. This allows a charon client to find another operator that might have moved IP address, but still retains the same ENR private key."]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>a});var o=i(96540);const n={},s=o.createContext(n);function r(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);