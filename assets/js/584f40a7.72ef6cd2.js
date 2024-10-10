"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[17214],{50688:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var r=i(74848),t=i(28453);const s={description:"Documenting a Distributed Validator Cluster in a standardised file format",sidebar_position:3},d="Cluster configuration",l={id:"charon/cluster-configuration",title:"Cluster configuration",description:"Documenting a Distributed Validator Cluster in a standardised file format",source:"@site/versioned_docs/version-v0.19.1/charon/cluster-configuration.md",sourceDirName:"charon",slug:"/charon/cluster-configuration",permalink:"/docs/v0.19.1/charon/cluster-configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.19.1/charon/cluster-configuration.md",tags:[],version:"v0.19.1",sidebarPosition:3,frontMatter:{description:"Documenting a Distributed Validator Cluster in a standardised file format",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Distributed Key Generation",permalink:"/docs/v0.19.1/charon/dkg"},next:{title:"Charon networking",permalink:"/docs/v0.19.1/charon/networking"}},c={},o=[{value:"Cluster Definition File",id:"cluster-definition-file",level:2},{value:"Using the CLI",id:"using-the-cli",level:3},{value:"Using the DV Launchpad",id:"using-the-dv-launchpad",level:3},{value:"Cluster Lock File",id:"cluster-lock-file",level:2},{value:"Cluster Size and Resilience",id:"cluster-size-and-resilience",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"cluster-configuration",children:"Cluster configuration"})}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["These cluster definition and cluster lock files are a work in progress. The intention is for the files to be standardised for operating distributed validators via the ",(0,r.jsx)(n.a,{href:"https://eips.ethereum.org/",children:"EIP process"})," when appropriate."]})}),"\n",(0,r.jsx)(n.p,{children:"This document describes the configuration options for running a charon client or cluster."}),"\n",(0,r.jsx)(n.p,{children:"A charon cluster is configured in two steps:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"cluster-definition.json"})," which defines the intended cluster configuration before keys have been created in a distributed key generation ceremony."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"cluster-lock.json"})," which includes and extends ",(0,r.jsx)(n.code,{children:"cluster-definition.json"})," with distributed validator BLS public key shares."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["In the case of a solo operator running a cluster, the ",(0,r.jsx)(n.a,{href:"/docs/v0.19.1/charon/charon-cli-reference#create-a-full-cluster-locally",children:(0,r.jsx)(n.code,{children:"charon create cluster"})})," command combines both steps into one and just outputs the final ",(0,r.jsx)(n.code,{children:"cluster-lock.json"})," without a DKG step."]}),"\n",(0,r.jsx)(n.h2,{id:"cluster-definition-file",children:"Cluster Definition File"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"cluster-definition.json"})," is provided as input to the DKG which generates keys and the ",(0,r.jsx)(n.code,{children:"cluster-lock.json"})," file."]}),"\n",(0,r.jsx)(n.h3,{id:"using-the-cli",children:"Using the CLI"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.a,{href:"/docs/v0.19.1/charon/charon-cli-reference#creating-the-configuration-for-a-dkg-ceremony",children:(0,r.jsx)(n.code,{children:"charon create dkg"})})," command is used to create the ",(0,r.jsx)(n.code,{children:"cluster-definition.json"})," file which is used as input to ",(0,r.jsx)(n.code,{children:"charon dkg"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The schema of the ",(0,r.jsx)(n.code,{children:"cluster-definition.json"})," is defined as:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "name": "best cluster", // Optional cosmetic identifier\n  "creator": {\n    "address": "0x123..abfc", //ETH1 address of the creator\n    "config_signature": "0x123654...abcedf" // EIP712 Signature of config_hash using creator privkey\n  },\n  "operators": [\n    {\n      "address": "0x123..abfc", // ETH1 address of the operator\n      "enr": "enr://abcdef...12345", // Charon node ENR\n      "config_signature": "0x123456...abcdef", // EIP712 Signature of config_hash by ETH1 address priv key\n      "enr_signature": "0x123654...abcedf" // EIP712 Signature of ENR by ETH1 address priv key\n    }\n  ],\n  "uuid": "1234-abcdef-1234-abcdef", // Random unique identifier.\n  "version": "v1.2.0", // Schema version\n  "timestamp": "2022-01-01T12:00:00+00:00", // Creation timestamp\n  "num_validators": 2, // Number of distributed validators to be created in cluster-lock.json\n  "threshold": 3, // Optional threshold required for signature reconstruction\n  "validators": [\n    {\n      "fee_recipient_address": "0x123..abfc", // ETH1 fee_recipient address of validator\n      "withdrawal_address": "0x123..abfc" // ETH1 withdrawal address of validator\n    },\n    {\n      "fee_recipient_address": "0x123..abfc", // ETH1 fee_recipient address of validator\n      "withdrawal_address": "0x123..abfc" // ETH1 withdrawal address of validator\n    }\n  ],\n  "dkg_algorithm": "foo_dkg_v1", // Optional DKG algorithm for key generation\n  "fork_version": "0x00112233", // Chain/Network identifier\n  "config_hash": "0xabcfde...acbfed", // Hash of the static (non-changing) fields\n  "definition_hash": "0xabcdef...abcedef" // Final hash of all fields\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"using-the-dv-launchpad",children:"Using the DV Launchpad"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["A ",(0,r.jsx)(n.code,{children:"leader/creator"}),', that wishes to coordinate the creation of a new Distributed Validator Cluster navigates to the launchpad and selects "Create new Cluster"']}),"\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"leader/creator"})," uses the user interface to configure all of the important details about the cluster including:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"Withdrawal Address"})," for the created validators"]}),"\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"Fee Recipient Address"})," for block proposals if it differs from the withdrawal address"]}),"\n",(0,r.jsx)(n.li,{children:"The number of distributed validators to create"}),"\n",(0,r.jsx)(n.li,{children:"The list of participants in the cluster specified by Ethereum address(/ENS)"}),"\n",(0,r.jsx)(n.li,{children:"The threshold of fault tolerance required"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["These key pieces of information form the basis of the cluster configuration. These fields (and some technical fields like DKG algorithm to use) are serialized and merklized to produce the definition's ",(0,r.jsx)(n.code,{children:"cluster_definition_hash"}),". This merkle root will be used to confirm that there is no ambiguity or deviation between definitions when they are provided to charon nodes."]}),"\n",(0,r.jsxs)(n.li,{children:["Once the ",(0,r.jsx)(n.code,{children:"leader/creator"})," is satisfied with the configuration they publish it to the launchpad's data availability layer for the other participants to access. (For early development the launchpad will use a centralized backend db to store the cluster configuration. Near production, solutions like IPFS or arweave may be more suitable for the long term decentralization of the launchpad.)"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"cluster-lock-file",children:"Cluster Lock File"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"cluster-lock.json"})," has the following schema:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "cluster_definition": {...},                              // Cluster definiition json, identical schema to above,\n  "distributed_validators": [                               // Length equal to cluster_definition.num_validators.\n    {\n      "distributed_public_key":  "0x123..abfc",             // DV root pubkey\n      "public_shares": [ "abc...fed", "cfd...bfe"],         // Length equal to cluster_definition.operators\n      "fee_recipient": "0x123..abfc"                        // Defaults to withdrawal address if not set, can be edited manually\n    }\n  ],\n  "lock_hash": "abcdef...abcedef",                          // Config_hash plus distributed_validators\n  "signature_aggregate": "abcdef...abcedef"                 // BLS aggregate signature of the lock hash signed by each DV pubkey.\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"cluster-size-and-resilience",children:"Cluster Size and Resilience"}),"\n",(0,r.jsx)(n.p,{children:"The cluster size (the number of nodes/operators in the cluster) determines the resilience of the cluster; its ability remain operational under diverse failure scenarios.\nLarger clusters can tolerate more faulty nodes.\nHowever, increased cluster size implies higher operational costs and potential network latency, which may negatively affect performance"}),"\n",(0,r.jsx)(n.p,{children:"Optimal cluster size is therefore trade-off between resilience (larger is better) vs cost-efficiency and performance (smaller is better)."}),"\n",(0,r.jsx)(n.p,{children:"Cluster resilience can be broadly classified into two categories:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Byzantine_fault",children:"Byzantine Fault Tolerance (BFT)"})})," - the ability to tolerate nodes that are actively trying to disrupt the cluster."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Fault_tolerance",children:"Crash Fault Tolerance (CFT)"})})," - the ability to tolerate nodes that have crashed or are otherwise unavailable."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Different cluster sizes tolerate different counts of byzantine vs crash nodes.\nIn practice, hardware and software crash relatively frequently, while byzantine behaviour is relatively uncommon.\nHowever, Byzantine Fault Tolerance is crucial for trust minimised systems like distributed validators.\nThus, cluster size can be chosen to optimise for either BFT or CFT."}),"\n",(0,r.jsx)(n.p,{children:"The table below lists different cluster sizes and their characteristics:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Cluster Size"})," - the number of nodes in the cluster."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Threshold"})," - the minimum number of nodes that must collaborate to reach consensus quorum and to create signatures."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"BFT #"})," - the maximum number of byzantine nodes that can be tolerated."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"CFT #"})," - the maximum number of crashed nodes that can be tolerated."]}),"\n"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Cluster Size"}),(0,r.jsx)(n.th,{children:"Threshold"}),(0,r.jsx)(n.th,{children:"BFT #"}),(0,r.jsx)(n.th,{children:"CFT #"}),(0,r.jsx)(n.th,{children:"Note"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"\u274c Invalid: Not CFT nor BFT!"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"\u274c Invalid: Not CFT nor BFT!"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"3"}),(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"\u26a0\ufe0f Warning: CFT but not BFT!"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"4"}),(0,r.jsx)(n.td,{children:"3"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"\u2705 CFT and BFT optimal for 1 faulty"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"5"}),(0,r.jsx)(n.td,{children:"4"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"6"}),(0,r.jsx)(n.td,{children:"4"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{children:"\u2705 CFT optimal for 2 crashed"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"7"}),(0,r.jsx)(n.td,{children:"5"}),(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{children:"\u2705 BFT optimal for 2 byzantine"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"8"}),(0,r.jsx)(n.td,{children:"6"}),(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"9"}),(0,r.jsx)(n.td,{children:"6"}),(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{children:"3"}),(0,r.jsx)(n.td,{children:"\u2705 CFT optimal for 3 crashed"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"10"}),(0,r.jsx)(n.td,{children:"7"}),(0,r.jsx)(n.td,{children:"3"}),(0,r.jsx)(n.td,{children:"3"}),(0,r.jsx)(n.td,{children:"\u2705 BFT optimal for 3 byzantine"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"11"}),(0,r.jsx)(n.td,{children:"8"}),(0,r.jsx)(n.td,{children:"3"}),(0,r.jsx)(n.td,{children:"3"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"12"}),(0,r.jsx)(n.td,{children:"8"}),(0,r.jsx)(n.td,{children:"3"}),(0,r.jsx)(n.td,{children:"4"}),(0,r.jsx)(n.td,{children:"\u2705 CFT optimal for 4 crashed"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"13"}),(0,r.jsx)(n.td,{children:"9"}),(0,r.jsx)(n.td,{children:"4"}),(0,r.jsx)(n.td,{children:"4"}),(0,r.jsx)(n.td,{children:"\u2705 BFT optimal for 4 byzantine"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"14"}),(0,r.jsx)(n.td,{children:"10"}),(0,r.jsx)(n.td,{children:"4"}),(0,r.jsx)(n.td,{children:"4"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"15"}),(0,r.jsx)(n.td,{children:"10"}),(0,r.jsx)(n.td,{children:"4"}),(0,r.jsx)(n.td,{children:"5"}),(0,r.jsx)(n.td,{children:"\u2705 CFT optimal for 5 crashed"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"16"}),(0,r.jsx)(n.td,{children:"11"}),(0,r.jsx)(n.td,{children:"5"}),(0,r.jsx)(n.td,{children:"5"}),(0,r.jsx)(n.td,{children:"\u2705 BFT optimal for 5 byzantine"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"17"}),(0,r.jsx)(n.td,{children:"12"}),(0,r.jsx)(n.td,{children:"5"}),(0,r.jsx)(n.td,{children:"5"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"18"}),(0,r.jsx)(n.td,{children:"12"}),(0,r.jsx)(n.td,{children:"5"}),(0,r.jsx)(n.td,{children:"6"}),(0,r.jsx)(n.td,{children:"\u2705 CFT optimal for 6 crashed"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"19"}),(0,r.jsx)(n.td,{children:"13"}),(0,r.jsx)(n.td,{children:"6"}),(0,r.jsx)(n.td,{children:"6"}),(0,r.jsx)(n.td,{children:"\u2705 BFT optimal for 6 byzantine"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"20"}),(0,r.jsx)(n.td,{children:"14"}),(0,r.jsx)(n.td,{children:"6"}),(0,r.jsx)(n.td,{children:"6"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"21"}),(0,r.jsx)(n.td,{children:"14"}),(0,r.jsx)(n.td,{children:"6"}),(0,r.jsx)(n.td,{children:"7"}),(0,r.jsx)(n.td,{children:"\u2705 CFT optimal for 7 crashed"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"22"}),(0,r.jsx)(n.td,{children:"15"}),(0,r.jsx)(n.td,{children:"7"}),(0,r.jsx)(n.td,{children:"7"}),(0,r.jsx)(n.td,{children:"\u2705 BFT optimal for 7 byzantine"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["The table above is determined by the QBFT consensus algorithm with the\nfollowing formulas from ",(0,r.jsx)(n.a,{href:"https://arxiv.org/pdf/1909.10194.pdf",children:"this"})," paper:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"n = cluster size\n\nThreshold: min number of honest nodes required to reach quorum given size n\nQuorum(n) = ceiling(2n/3) \n\nBFT #: max number of faulty (byzantine) nodes given size n\nf(n) = floor((n-1)/3)\n\nCFT #: max number of unavailable (crashed) nodes given size n\ncrashed(n) = n - Quorum(n)\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>l});var r=i(96540);const t={},s=r.createContext(t);function d(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);