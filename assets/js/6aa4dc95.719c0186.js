"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[42998],{99845:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=i(74848),r=i(28453);const o={sidebar_position:1,description:"Frequently asked questions"},a="Frequently asked questions",s={id:"int/faq/general",title:"Frequently asked questions",description:"Frequently asked questions",source:"@site/versioned_docs/version-v0.11.0/int/faq/general.md",sourceDirName:"int/faq",slug:"/int/faq/general",permalink:"/docs/v0.11.0/int/faq/general",draft:!1,unlisted:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.11.0/int/faq/general.md",tags:[],version:"v0.11.0",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Frequently asked questions"},sidebar:"tutorialSidebar",previous:{title:"Working groups",permalink:"/docs/v0.11.0/int/working-groups"},next:{title:"Errors & Resolutions",permalink:"/docs/v0.11.0/int/faq/errors"}},l={},d=[{value:"General",id:"general",level:2},{value:"Does Obol have a token?",id:"does-obol-have-a-token",level:3},{value:"Where can I learn more about Distributed Validators?",id:"where-can-i-learn-more-about-distributed-validators",level:3},{value:"What&#39;s with the name Charon?",id:"whats-with-the-name-charon",level:3},{value:"What are the hardware requirements for running a Charon node?",id:"what-are-the-hardware-requirements-for-running-a-charon-node",level:3},{value:"Migrating existing validators",id:"migrating-existing-validators",level:2},{value:"Can I keep my existing validator client?",id:"can-i-keep-my-existing-validator-client",level:3},{value:"Can I migrate my existing validator into a distributed validator?",id:"can-i-migrate-my-existing-validator-into-a-distributed-validator",level:3},{value:"Distributed Key Generation",id:"distributed-key-generation",level:2},{value:"How to run a DKG",id:"how-to-run-a-dkg",level:3},{value:"What are the min and max numbers of operators for a Distributed Validator?",id:"what-are-the-min-and-max-numbers-of-operators-for-a-distributed-validator",level:3},{value:"Debugging Errors in Logs",id:"debugging-errors-in-logs",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"frequently-asked-questions",children:"Frequently asked questions"}),"\n",(0,n.jsx)(t.h2,{id:"general",children:"General"}),"\n",(0,n.jsx)(t.h3,{id:"does-obol-have-a-token",children:"Does Obol have a token?"}),"\n",(0,n.jsx)(t.p,{children:"No. Distributed validators use only ether."}),"\n",(0,n.jsx)(t.h3,{id:"where-can-i-learn-more-about-distributed-validators",children:"Where can I learn more about Distributed Validators?"}),"\n",(0,n.jsxs)(t.p,{children:["Have you checked out our ",(0,n.jsx)(t.a,{href:"https://blog.obol.tech",children:"blog site"})," and ",(0,n.jsx)(t.a,{href:"https://twitter.com/ObolNetwork",children:"twitter"})," yet? Maybe join our ",(0,n.jsx)(t.a,{href:"https://discord.gg/n6ebKsX46w",children:"discord"})," too."]}),"\n",(0,n.jsx)(t.h3,{id:"whats-with-the-name-charon",children:"What's with the name Charon?"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://www.theoi.com/Khthonios/Kharon.html",children:"Charon"})," is the Ancient Greek Ferryman of the Dead. He was tasked with bringing people across the Acheron river to the underworld. His fee was one Obol coin, placed in the mouth of the deceased. This tradition of placing a coin or Obol in the mouth of the deceased continues to this day across the Greek world."]}),"\n",(0,n.jsx)(t.h3,{id:"what-are-the-hardware-requirements-for-running-a-charon-node",children:"What are the hardware requirements for running a Charon node?"}),"\n",(0,n.jsx)(t.p,{children:"It should be the same as running a normal post-merge Ethereum node. It would be easiest with 16GB of RAM, 500GB of disk and 8MB/s of internet bandwidth, though lower resourced machines can probably be used with some effort."}),"\n",(0,n.jsx)(t.p,{children:"Charon alone uses negligible disk space of not more than a few MBs. However if you are running your consensus client and execution client on the same server with charon then you will need 500GB of free SSD disk space (assuming you are running a testnet chain, mainnet requires 1TB or more disk space ideally)."}),"\n",(0,n.jsxs)(t.p,{children:["For now, Teku & Lighthouse clients are packaged within the docker compose file provided in the ",(0,n.jsx)(t.a,{href:"/docs/v0.11.0/int/quickstart/group/quickstart-group-launchpad",children:"quickstart guides"}),", so you don't have to install anything else to run a cluster. Just make sure you give them some time to sync once you start running your node."]}),"\n",(0,n.jsx)(t.h2,{id:"migrating-existing-validators",children:"Migrating existing validators"}),"\n",(0,n.jsx)(t.h3,{id:"can-i-keep-my-existing-validator-client",children:"Can I keep my existing validator client?"}),"\n",(0,n.jsxs)(t.p,{children:["Yes. Charon sits as a middleware between a validator client and it's beacon node. All validators that implement the standard REST API will be supported, along with all popular client delivery software such as Dappnode ",(0,n.jsx)(t.a,{href:"https://dappnode.github.io/explorer/#/",children:"packages"}),", Rocket Pool's ",(0,n.jsx)(t.a,{href:"https://github.com/rocket-pool/smartnode",children:"smart node"}),", StakeHouse's ",(0,n.jsx)(t.a,{href:"https://github.com/stake-house/wagyu",children:"wagyu"}),", and Stereum's ",(0,n.jsx)(t.a,{href:"https://stereum.net/development/#roadmap",children:"node launcher"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"can-i-migrate-my-existing-validator-into-a-distributed-validator",children:"Can I migrate my existing validator into a distributed validator?"}),"\n",(0,n.jsx)(t.p,{children:"It is possible to split an existing validator keystore into a set of key shares suitable for a distributed validator cluster, but it is a trusted distribution process which is not ideal compared to setting up a fresh cluster using a DKG ceremony where no operator ever has the full private key. Furthermore, if the old staking system is not safely shut down, it could pose a risk of slashing by double signing alongside the new distributed validator, please use extreme caution if migrating a validator, and make sure to wait at least three epochs offline to reduce the risk of double signing or surround voting."}),"\n",(0,n.jsx)(t.p,{children:"In an ideal scenario, a distributed validator's private key should never exist in full in a single location."}),"\n",(0,n.jsxs)(t.p,{children:["You can split an existing EIP-2335 keystore for a validator to migrate it to a distributed validator architecture with the ",(0,n.jsx)(t.code,{children:"charon create cluster --split-existing-keys"})," command documented ",(0,n.jsx)(t.a,{href:"/docs/v0.11.0/dv/charon_cli_reference#create-a-full-cluster-locally",children:"here"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"distributed-key-generation",children:"Distributed Key Generation"}),"\n",(0,n.jsx)(t.h3,{id:"how-to-run-a-dkg",children:"How to run a DKG"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["This is a helpful ",(0,n.jsx)(t.a,{href:"https://www.youtube.com/watch?v=94Pkovp5zoQ&ab_channel=ObolNetwork",children:"video walkthrough"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["You can also use ",(0,n.jsx)(t.a,{href:"https://docs.google.com/spreadsheets/d/1A-ncCgasaRZwRPlvrUqRFovNaUTOksNuQLFOqGCaxf8/edit#gid=0",children:"this worksheet"})," to easily follow the steps it outlines."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"what-are-the-min-and-max-numbers-of-operators-for-a-distributed-validator",children:"What are the min and max numbers of operators for a Distributed Validator?"}),"\n",(0,n.jsx)(t.p,{children:"Currently, the minimum is 4 operators with a threshold of 3."}),"\n",(0,n.jsxs)(t.p,{children:["The threshold (aka quorum) corresponds to the minimum numbers of operators that need to be active for the validator(s) to be able to perform its(their) duties. It is defined by the following formula ",(0,n.jsx)(t.code,{children:"n-(ceil(n/3)-1)"}),". We strongly recommend using this default threshold in your DKG as it maximises liveness while maintaing BFT safety. Setting a 4 out of 4 cluster for example, would make your validator more vulnerable to going offline instead of less vulnerable. You can check threshold value in your ",(0,n.jsx)(t.a,{href:"/docs/v0.11.0/dv/distributed-validator-cluster-manifest#cluster-lock-file",children:(0,n.jsx)(t.code,{children:"cluster-lock.json"})})," file."]}),"\n",(0,n.jsx)(t.p,{children:"The maximum, honest answer, we don't know yet! It will depend heavily on your nodes network latency to talk to one another. The CLI caps out at 31 for now for a sane maximum. In practice, 10 nodes allows 3 nodes to fail at any one time, and probably is the largest cluster you should attempt for now unless you you're really experimenting \ud83d\ude05."}),"\n",(0,n.jsx)(t.p,{children:"By the way, the more operators, the longer the DKG, but don't worry, there is no limit in the timing for connecting nodes during the DKG."}),"\n",(0,n.jsx)(t.h2,{id:"debugging-errors-in-logs",children:"Debugging Errors in Logs"}),"\n",(0,n.jsxs)(t.p,{children:["You can check if the containers on your node are outputting errors by running ",(0,n.jsx)(t.code,{children:"docker-compose logs"})," on a machine with a running cluster."]}),"\n",(0,n.jsxs)(t.p,{children:["Diagnose some common errors and view their resolutions ",(0,n.jsx)(t.a,{href:"/docs/v0.11.0/int/faq/errors",children:"here"}),"."]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>s});var n=i(96540);const r={},o=n.createContext(r);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);