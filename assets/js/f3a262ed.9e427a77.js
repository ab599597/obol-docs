"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[9520],{43002:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=i(74848),r=i(28453);const o={description:"Generating private keys for a Distributed Validator requires a Distributed Key Generation (DKG) Ceremony.",sidebar_position:2},a="Distributed Key Generation",s={id:"charon/dkg",title:"Distributed Key Generation",description:"Generating private keys for a Distributed Validator requires a Distributed Key Generation (DKG) Ceremony.",source:"@site/versioned_docs/version-v0.19.0/charon/dkg.md",sourceDirName:"charon",slug:"/charon/dkg",permalink:"/docs/v0.19.0/charon/dkg",draft:!1,unlisted:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.19.0/charon/dkg.md",tags:[],version:"v0.19.0",sidebarPosition:2,frontMatter:{description:"Generating private keys for a Distributed Validator requires a Distributed Key Generation (DKG) Ceremony.",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/v0.19.0/charon/intro"},next:{title:"Cluster configuration",permalink:"/docs/v0.19.0/charon/cluster-configuration"}},d={},c=[{value:"Overview",id:"overview",level:2},{value:"Actors Involved",id:"actors-involved",level:2},{value:"Cluster Definition Creation",id:"cluster-definition-creation",level:2},{value:"Carrying out the DKG ceremony",id:"carrying-out-the-dkg-ceremony",level:2},{value:"Backing up the ceremony artifacts",id:"backing-up-the-ceremony-artifacts",level:2},{value:"DKG Verification",id:"dkg-verification",level:2},{value:"Appendix",id:"appendix",level:2},{value:"Sample Configuration and Lock Files",id:"sample-configuration-and-lock-files",level:3}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"distributed-key-generation",children:"Distributed Key Generation"}),"\n",(0,n.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsxs)(t.p,{children:["A ",(0,n.jsx)(t.a,{href:"/docs/next/int/key-concepts#distributed-validator-key",children:(0,n.jsx)(t.strong,{children:"distributed validator key"})})," is a group of BLS private keys that together operate as a threshold key for participating in proof-of-stake consensus."]}),"\n",(0,n.jsxs)(t.p,{children:["To make a distributed validator with no fault-tolerance (i.e. all nodes need to be online to sign every message), due to the BLS signature scheme used by Proof of Stake Ethereum, each key share could be chosen by operators independently. However, to create a distributed validator that can stay online despite a subset of its nodes going offline, the key shares need to be generated together (4 randomly chosen points on a graph don't all necessarily sit on the same order three curve). To do this in a secure manner with no one party being trusted to distribute the keys requires what is known as a ",(0,n.jsx)(t.a,{href:"/docs/next/int/key-concepts#distributed-validator-key-generation-ceremony",children:(0,n.jsx)(t.strong,{children:"distributed key generation ceremony"})}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["The charon client has the responsibility of securely completing a distributed key generation ceremony with its counterparty nodes. The ceremony configuration is outlined in a ",(0,n.jsx)(t.a,{href:"../charon/cluster-configuration",children:"cluster definition"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"actors-involved",children:"Actors Involved"}),"\n",(0,n.jsxs)(t.p,{children:["A distributed key generation ceremony involves ",(0,n.jsx)(t.code,{children:"Operators"})," and their ",(0,n.jsx)(t.code,{children:"Charon clients"}),"."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["An ",(0,n.jsx)(t.code,{children:"Operator"})," is identified by their Ethereum address. They will sign a message with this address to authorize their charon client to take part in the DKG ceremony."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["A ",(0,n.jsx)(t.code,{children:"Charon client"})," is also identified by a public/private key pair, in this instance, the public key is represented as an ",(0,n.jsx)(t.a,{href:"https://eips.ethereum.org/EIPS/eip-778",children:"Ethereum Node Record"})," (ENR). This is a standard identity format for both EL and CL clients. These ENRs are used by each charon node to identify its cluster peers over the internet, and to communicate with one another in an ",(0,n.jsx)(t.a,{href:"https://github.com/libp2p/go-libp2p/tree/master/p2p/security/noise",children:"end to end encrypted manner"}),". These keys need to be created (and backed up) by each operator before they can participate in a cluster creation."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"cluster-definition-creation",children:"Cluster Definition Creation"}),"\n",(0,n.jsxs)(t.p,{children:["This cluster definition specifies the intended cluster configuration before keys have been created in a distributed key generation ceremony. The ",(0,n.jsx)(t.code,{children:"cluster-definition.json"})," file can be created with the help of the ",(0,n.jsx)(t.a,{href:"/docs/v0.19.0/charon/cluster-configuration#using-the-dv-launchpad",children:"Distributed Validator Launchpad"})," or via the ",(0,n.jsx)(t.a,{href:"/docs/v0.19.0/charon/cluster-configuration#using-the-cli",children:"CLI"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"carrying-out-the-dkg-ceremony",children:"Carrying out the DKG ceremony"}),"\n",(0,n.jsxs)(t.p,{children:["Once all participants have signed the cluster definition, they can load the ",(0,n.jsx)(t.code,{children:"cluster-definition"})," file into their charon client, and the client will attempt to complete the DKG."]}),"\n",(0,n.jsx)(t.p,{children:"Charon will read the ENRs in the definition, confirm that its ENR is present, and then will reach out to relays that are deployed to find the other ENRs on the network. (Fresh ENRs just have a public key and an IP address of 0.0.0.0 until they are loaded into a live charon client, which will update the IP address and increment the ENRs nonce and resign with the clients private key. If an ENR with a higher nonce is seen by a charon client, they will update the IP address of that ENR in their address book.)"}),"\n",(0,n.jsxs)(t.p,{children:["Once all clients in the cluster can establish a connection with one another and they each complete a handshake (confirm everyone has a matching ",(0,n.jsx)(t.code,{children:"cluster_definition_hash"}),"), the ceremony begins."]}),"\n",(0,n.jsx)(t.p,{children:"No user input is required, charon does the work and outputs the following files to each machine and then exits."}),"\n",(0,n.jsx)(t.h2,{id:"backing-up-the-ceremony-artifacts",children:"Backing up the ceremony artifacts"}),"\n",(0,n.jsx)(t.p,{children:"At the end of a DKG ceremony, each operator will have a number of files outputted by their charon client based on how many distributed validators the group chose to generate together."}),"\n",(0,n.jsx)(t.p,{children:"These files are:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Validator keystore(s):"})," These files will be loaded into the operator's validator client and each file represents one share of a Distributed Validator."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"A distributed validator cluster lock file:"})," This ",(0,n.jsx)(t.code,{children:"cluster-lock.json"})," file contains the configuration a distributed validator client like charon needs to join a cluster capable of operating a number of distributed validators."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Validator deposit data:"})," This file is used to activate one or more distributed validators on the Ethereum network."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Once the ceremony is complete, all participants should take a backup of the created files. In future versions of charon, if a participant loses access to these key shares, it will be possible to use a key re-sharing protocol to swap the participants old keys out of a distributed validator in favor of new keys, allowing the rest of a cluster to recover from a set of lost key shares. However for now, without a backup, the safest thing to do would be to exit the validator."}),"\n",(0,n.jsx)(t.h2,{id:"dkg-verification",children:"DKG Verification"}),"\n",(0,n.jsxs)(t.p,{children:["For many use cases of distributed validators, the funder/depositor of the validator may not be the same person as the key creators/node operators, as (outside of the base protocol) stake delegation is a common phenomenon. This handover of information introduces a point of trust. How does someone verify that a proposed validator ",(0,n.jsx)(t.code,{children:"deposit data"})," corresponds to a real, fair, DKG with participants the depositor expects?"]}),"\n",(0,n.jsxs)(t.p,{children:['There are a number of aspects to this trust surface that can be mitigated with a "Don\'t trust, verify" model. Verification for the time being is easier off chain, until things like a ',(0,n.jsx)(t.a,{href:"https://eips.ethereum.org/EIPS/eip-2537",children:"BLS precompile"})," are brought into the EVM, along with cheap ZKP verification on chain. Some of the questions that can be asked of Distributed Validator Key Generation Ceremonies include:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Do the public key shares combine together to form the group public key?","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"This can be checked on chain as it does not require a pairing operation"}),"\n",(0,n.jsx)(t.li,{children:"This can give confidence that a BLS pubkey represents a Distributed Validator, but does not say anything about the custody of the keys. (e.g. Was the ceremony sybil attacked, did they collude to reconstitute the group private key etc.)"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["Do the created BLS public keys attest to their ",(0,n.jsx)(t.code,{children:"cluster_definition_hash"}),"?","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"This is to create a backwards link between newly created BLS public keys and the operator's eth1 addresses that took part in their creation."}),"\n",(0,n.jsxs)(t.li,{children:["If a proposed distributed validator BLS group public key can produce a signature of the ",(0,n.jsx)(t.code,{children:"cluster_definition_hash"}),", it can be inferred that at least a threshold of the operators signed this data."]}),"\n",(0,n.jsxs)(t.li,{children:["As the ",(0,n.jsx)(t.code,{children:"cluster_definition_hash"})," is the same for all distributed validators created in the ceremony, the signatures can be aggregated into a group signature that verifies all created group keys at once. This makes it cheaper to verify a number of validators at once on chain."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["Is there either a VSS or PVSS proof of a fair DKG ceremony?","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"VSS (Verifiable Secret Sharing) means only operators can verify fairness, as the proof requires knowledge of one of the secrets."}),"\n",(0,n.jsx)(t.li,{children:"PVSS (Publicly Verifiable Secret Sharing) means anyone can verify fairness, as the proof is usually a Zero Knowledge Proof."}),"\n",(0,n.jsx)(t.li,{children:"A PVSS of a fair DKG would make it more difficult for operators to collude and undermine the security of the Distributed Validator."}),"\n",(0,n.jsx)(t.li,{children:"Zero Knowledge Proof verification on chain is currently expensive, but is becoming achievable through the hard work and research of the many ZK based teams in the industry."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"appendix",children:"Appendix"}),"\n",(0,n.jsx)(t.h3,{id:"sample-configuration-and-lock-files",children:"Sample Configuration and Lock Files"}),"\n",(0,n.jsxs)(t.p,{children:["Refer to the details ",(0,n.jsx)(t.a,{href:"../charon/cluster-configuration",children:"here"}),"."]})]})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>s});var n=i(96540);const r={},o=n.createContext(r);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);