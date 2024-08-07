"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[82012],{14928:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>h});var t=r(74848),o=r(28453);const i={sidebar_position:1,description:"Frequently asked questions"},a="Frequently asked questions",s={id:"int/faq/general",title:"Frequently asked questions",description:"Frequently asked questions",source:"@site/versioned_docs/version-v0.16.0/int/faq/general.md",sourceDirName:"int/faq",slug:"/int/faq/general",permalink:"/docs/v0.16.0/int/faq/general",draft:!1,unlisted:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.16.0/int/faq/general.md",tags:[],version:"v0.16.0",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Frequently asked questions"},sidebar:"tutorialSidebar",previous:{title:"Self-Host a Relay",permalink:"/docs/v0.16.0/int/quickstart/advanced/self-relay"},next:{title:"Errors & Resolutions",permalink:"/docs/v0.16.0/int/faq/errors"}},d={},h=[{value:"General",id:"general",level:2},{value:"Does Obol have a token?",id:"does-obol-have-a-token",level:3},{value:"Where can I learn more about Distributed Validators?",id:"where-can-i-learn-more-about-distributed-validators",level:3},{value:"Where does the name Charon come from?",id:"where-does-the-name-charon-come-from",level:3},{value:"What are the hardware requirements for running a Charon node?",id:"what-are-the-hardware-requirements-for-running-a-charon-node",level:3},{value:"What is the difference between a node, a validator and a cluster?",id:"what-is-the-difference-between-a-node-a-validator-and-a-cluster",level:3},{value:"Can I migrate an existing Charon node to a new machine?",id:"can-i-migrate-an-existing-charon-node-to-a-new-machine",level:3},{value:"Distributed Key Generation",id:"distributed-key-generation",level:2},{value:"What are the min and max numbers of operators for a Distributed Validator?",id:"what-are-the-min-and-max-numbers-of-operators-for-a-distributed-validator",level:3},{value:"Debugging Errors in Logs",id:"debugging-errors-in-logs",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"frequently-asked-questions",children:"Frequently asked questions"}),"\n",(0,t.jsx)(n.h2,{id:"general",children:"General"}),"\n",(0,t.jsx)(n.h3,{id:"does-obol-have-a-token",children:"Does Obol have a token?"}),"\n",(0,t.jsx)(n.p,{children:"No. Distributed validators use only Ether."}),"\n",(0,t.jsx)(n.h3,{id:"where-can-i-learn-more-about-distributed-validators",children:"Where can I learn more about Distributed Validators?"}),"\n",(0,t.jsxs)(n.p,{children:["Have you checked out our ",(0,t.jsx)(n.a,{href:"https://blog.obol.tech",children:"blog site"})," and ",(0,t.jsx)(n.a,{href:"https://twitter.com/ObolNetwork",children:"twitter"})," yet? Maybe join our ",(0,t.jsx)(n.a,{href:"https://discord.gg/n6ebKsX46w",children:"discord"})," too."]}),"\n",(0,t.jsx)(n.h3,{id:"where-does-the-name-charon-come-from",children:"Where does the name Charon come from?"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://www.theoi.com/Khthonios/Kharon.html",children:"Charon"})," [kharon] is the Ancient Greek Ferryman of the Dead. He was tasked with bringing people across the Acheron river to the underworld. His fee was one Obol coin, placed in the mouth of the deceased. This tradition of placing a coin or Obol in the mouth of the deceased continues to this day across the Greek world."]}),"\n",(0,t.jsx)(n.h3,{id:"what-are-the-hardware-requirements-for-running-a-charon-node",children:"What are the hardware requirements for running a Charon node?"}),"\n",(0,t.jsx)(n.p,{children:"Charon alone uses negligible disk space of not more than a few MBs. However, if you are running your consensus client and execution client on the same server as charon, then you will typically need the same hardware as running a full Ethereum node:"}),"\n",(0,t.jsx)(n.p,{children:"At minimum:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"A CPU with 2+ physical cores (or 4 vCPUs)"}),"\n",(0,t.jsx)(n.li,{children:"8GB RAM"}),"\n",(0,t.jsx)(n.li,{children:"1.5TB+ free SSD disk space (for mainnet)"}),"\n",(0,t.jsx)(n.li,{children:"10mb/s internet bandwidth"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Recommended specifications:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"A CPU with 4+ physical cores"}),"\n",(0,t.jsx)(n.li,{children:"16GB+ RAM"}),"\n",(0,t.jsx)(n.li,{children:"2TB+ free disk on a high performance SSD (e.g. NVMe)"}),"\n",(0,t.jsx)(n.li,{children:"25mb/s internet bandwidth"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["For more hardware considerations, check out the ",(0,t.jsx)(n.a,{href:"https://ethereum.org/en/developers/docs/nodes-and-clients/run-a-node/#environment-and-hardware",children:"ethereum.org guides"})," which explores various setups and trade-offs, such as running the node locally or in the cloud."]}),"\n",(0,t.jsxs)(n.p,{children:["For now, Geth, Teku & Lighthouse clients are packaged within the docker compose file provided in the ",(0,t.jsx)(n.a,{href:"../quickstart/group",children:"quickstart guides"}),", so you don't have to install anything else to run a cluster. Just make sure you give them some time to sync once you start running your node."]}),"\n",(0,t.jsx)(n.h3,{id:"what-is-the-difference-between-a-node-a-validator-and-a-cluster",children:"What is the difference between a node, a validator and a cluster?"}),"\n",(0,t.jsx)(n.p,{children:"A node is a single instance of Ethereum EL+CL clients that can communicate with other nodes to maintain the Ethereum blockchain."}),"\n",(0,t.jsx)(n.p,{children:"A validator is a node that participates in the consensus process by verifying transactions and creating new blocks. Multiple validators can run from the same node."}),"\n",(0,t.jsx)(n.p,{children:"A cluster is a group of nodes that act together as one or several validators, which allows for a more efficient use of resources, reduces operational costs, and provides better reliability and fault tolerance."}),"\n",(0,t.jsx)(n.h3,{id:"can-i-migrate-an-existing-charon-node-to-a-new-machine",children:"Can I migrate an existing Charon node to a new machine?"}),"\n",(0,t.jsxs)(n.p,{children:["It is possible to migrate your Charon node to another machine running the same config by moving the ",(0,t.jsx)(n.code,{children:".charon"})," folder with its contents to your new machine. Make sure the EL and CL on the new machine are synced before proceeding to the move to minimize downtime."]}),"\n",(0,t.jsx)(n.h2,{id:"distributed-key-generation",children:"Distributed Key Generation"}),"\n",(0,t.jsx)(n.h3,{id:"what-are-the-min-and-max-numbers-of-operators-for-a-distributed-validator",children:"What are the min and max numbers of operators for a Distributed Validator?"}),"\n",(0,t.jsx)(n.p,{children:"Currently, the minimum is 4 operators with a threshold of 3."}),"\n",(0,t.jsxs)(n.p,{children:["The threshold (aka quorum) corresponds to the minimum numbers of operators that need to be active for the validator(s) to be able to perform its duties. It is defined by the following formula ",(0,t.jsx)(n.code,{children:"n-(ceil(n/3)-1)"}),". We strongly recommend using this default threshold in your DKG as it maximises liveness while maintaining BFT safety. Setting a 4 out of 4 cluster for example, would make your validator more vulnerable to going offline instead of less vulnerable. You can check the recommended threshold values for a cluster ",(0,t.jsx)(n.a,{href:"/docs/v0.16.0/int/key-concepts#distributed-validator-threshold",children:"here"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"debugging-errors-in-logs",children:"Debugging Errors in Logs"}),"\n",(0,t.jsxs)(n.p,{children:["You can check if the containers on your node are outputting errors by running ",(0,t.jsx)(n.code,{children:"docker compose logs"})," on a machine with a running cluster."]}),"\n",(0,t.jsxs)(n.p,{children:["Diagnose some common errors and view their resolutions ",(0,t.jsx)(n.a,{href:"/docs/v0.16.0/int/faq/errors",children:"here"}),"."]})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>s});var t=r(96540);const o={},i=t.createContext(o);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);