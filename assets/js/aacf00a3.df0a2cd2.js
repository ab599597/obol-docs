"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[81822],{22898:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>h});var n=i(74848),r=i(28453);const a={Description:"Generating private keys for a Distributed Validator requires a Distributed Key Generation (DKG) Ceremony."},o="Distributed Validator Key Generation",s={id:"dvk/distributed-validator-keys",title:"Distributed Validator Key Generation",description:"Contents",source:"@site/versioned_docs/version-v0.10.0/dvk/01_distributed-validator-keys.md",sourceDirName:"dvk",slug:"/dvk/distributed-validator-keys",permalink:"/docs/v0.10.0/dvk/distributed-validator-keys",draft:!1,unlisted:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.10.0/dvk/01_distributed-validator-keys.md",tags:[],version:"v0.10.0",sidebarPosition:1,frontMatter:{Description:"Generating private keys for a Distributed Validator requires a Distributed Key Generation (DKG) Ceremony."},sidebar:"tutorialSidebar",previous:{title:"Charon CLI reference",permalink:"/docs/v0.10.0/dv/charon_cli_reference"},next:{title:"Distributed Validator launchpad",permalink:"/docs/v0.10.0/dvk/distributed_validator_launchpad"}},d={},h=[{value:"Contents",id:"contents",level:2},{value:"Overview",id:"overview",level:2},{value:"Actors Involved",id:"actors-involved",level:2},{value:"Cluster Definition Creation",id:"cluster-definition-creation",level:2},{value:"Carrying out the DKG ceremony",id:"carrying-out-the-dkg-ceremony",level:2},{value:"Backing up the ceremony artifacts",id:"backing-up-the-ceremony-artifacts",level:2},{value:"Preparing for validator activation",id:"preparing-for-validator-activation",level:2},{value:"DKG Verification",id:"dkg-verification",level:2},{value:"Appendix",id:"appendix",level:2},{value:"Using DKG without the launchpad",id:"using-dkg-without-the-launchpad",level:3},{value:"Sample Configuration and Lock Files",id:"sample-configuration-and-lock-files",level:3}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"distributed-validator-key-generation",children:"Distributed Validator Key Generation"}),"\n",(0,n.jsx)(t.h2,{id:"contents",children:"Contents"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#overview",children:"Overview"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#actors-involved",children:"Actors involved"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#cluster-definition-creation",children:"Cluster Definition creation"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#carrying-out-the-dkg-ceremony",children:"Carrying out the DKG ceremony"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#backing-up-the-ceremony-artifacts",children:"Backing up ceremony artifacts"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#preparing-for-validator-activation",children:"Preparing for validator activation"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#dkg-verification",children:"DKG verification"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#appendix",children:"Appendix"})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(t.p,{children:"A distributed validator key is a group of BLS private keys that together operate as a threshold key for participating in proof-of-stake consensus."}),"\n",(0,n.jsx)(t.p,{children:"To make a distributed validator with no fault-tolerance (i.e. all nodes need to be online to sign every message), due to the BLS signature scheme used by Proof of Stake Ethereum, each key share could be chosen by operators independently. However, to create a distributed validator that can stay online despite a subset of its nodes going offline, the key shares need to be generated together. (4 randomly chosen points on a graph don't all neccessarily sit on the same order three curve.) To do this in a secure manner with no one party being trusted to distribute the keys requires what is known as a distributed key generation ceremony."}),"\n",(0,n.jsxs)(t.p,{children:["The charon client has the responsibility of securely completing a distributed key generation ceremony with its counterparty nodes. The ceremony configuration is outlined in a ",(0,n.jsx)(t.a,{href:"https://docs.obol.tech/docs/dv/distributed-validator-cluster-manifest",children:"cluster definition"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"actors-involved",children:"Actors Involved"}),"\n",(0,n.jsxs)(t.p,{children:["A distributed key generation ceremony involves ",(0,n.jsx)(t.code,{children:"Operators"})," and their ",(0,n.jsx)(t.code,{children:"Charon clients"}),"."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["An ",(0,n.jsx)(t.code,{children:"Operator"})," is identified by their Ethereum address. They will sign with this address's private key to authenticate their charon client ahead of the ceremony. The signature will be of; a hash of the charon clients ENR public key, the ",(0,n.jsx)(t.code,{children:"cluster_definition_hash"}),", and an incrementing ",(0,n.jsx)(t.code,{children:"nonce"}),", allowing for a direct linkage between a user, their charon client, and the cluster this client is intended to service, while retaining the ability to update the charon client by incrementing the nonce value and re-signing like the standard ENR spec."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["A ",(0,n.jsx)(t.code,{children:"Charon client"})," is also identified by a public/private key pair, in this instance, the public key is represented as an ",(0,n.jsx)(t.a,{href:"https://eips.ethereum.org/EIPS/eip-778",children:"Ethereum Node Record"})," (ENR). This is a standard identity format for both EL and CL clients. These ENRs are used by each charon node to identify its cluster peers over the internet, and to communicate with one another in an ",(0,n.jsx)(t.a,{href:"https://github.com/libp2p/go-libp2p-noise",children:"end to end encrypted manner"}),". These keys need to be created by each operator before they can participate in a cluster creation."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"cluster-definition-creation",children:"Cluster Definition Creation"}),"\n",(0,n.jsxs)(t.p,{children:["This definition file is created with the help of the ",(0,n.jsx)(t.a,{href:"https://docs.obol.tech/docs/dvk/distributed_validator_launchpad",children:"Distributed Validator Launchpad"}),". The creation process involves a number of steps."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["A ",(0,n.jsx)(t.code,{children:"leader"}),' Operator, that wishes to co-ordinate the creation of a new Distributed Validator Cluster navigates to the launch pad and selects "Create new Cluster"']}),"\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.code,{children:"leader"})," uses the user interface to configure all of the important details about the cluster including:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.code,{children:"withdrawal address"})," for the created validators"]}),"\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.code,{children:"feeRecipient"})," for block proposals if it differs from the withdrawal address"]}),"\n",(0,n.jsx)(t.li,{children:"The number of distributed validators to create"}),"\n",(0,n.jsx)(t.li,{children:"The list of participants in the cluster specified by Ethereum address(/ENS)"}),"\n",(0,n.jsx)(t.li,{children:"The threshold of fault tolerance required (if not choosing the safe default)"}),"\n",(0,n.jsx)(t.li,{children:"The network (fork_version/chainId) that this cluster will validate on"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["These key pieces of information form the basis of the cluster configuration. These fields (and some technical fields like DKG algorithm to use) are serialised and merklised to produce the definition's ",(0,n.jsx)(t.code,{children:"cluster_definition_hash"}),". This merkle root will be used to confirm that their is no ambiguity or deviation between definitions when they are provided to charon nodes."]}),"\n",(0,n.jsx)(t.li,{children:"Once the leader is satisfied with the configuration they publish it to the launchpad's data availability layer for the other participants to access. (For early development the launchpad will use a centralised backend db to store the cluster configuration. Near production, solutions like IPFS or arweave may be more suitable for the long term decentralisation of the launchpad.)"}),"\n",(0,n.jsx)(t.li,{children:"The leader will then share the URL to this ceremony with their intended participants."}),"\n",(0,n.jsxs)(t.li,{children:["Anyone that clicks the ceremony url, or inputs the ",(0,n.jsx)(t.code,{children:"cluster_definition_hash"})," when prompted on the landing page will be brought to the ceremony status page. (After completing all disclaimers and advisories)"]}),"\n",(0,n.jsxs)(t.li,{children:['A "Connect Wallet" button will be visible beneath the ceremony status container, a participant can click on it to connect their wallet to the site',"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"If the participant connects a wallet that is not in the participant list, the button disables, as there is nothing to do"}),"\n",(0,n.jsx)(t.li,{children:"If the participant connects a wallet that is in the participant list, they get prompted to input the ENR of their charon node."}),"\n",(0,n.jsxs)(t.li,{children:['If the ENR field is populated and validated the participant can now see a "Confirm Cluster Configuration" button. This button triggers one/two signatures.',"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["The participant signs the ",(0,n.jsx)(t.code,{children:"cluster_definition_hash"}),", to prove they are consensting to this exact configuration."]}),"\n",(0,n.jsx)(t.li,{children:"The participant signs their charon node's ENR, to authenticate and authorise that specific charon node to participate on their behalf in the distributed validator cluster."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.li,{children:"These/this signature is sent to the data availability layer, where it verifies the signatures are correct for the given participants ethereum address. If the signatures pass validation, the signature of the definition hash and the the ENR + signature get saved to the definition object."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.li,{children:"All participants in the list must sign the definition hash and submit a signed ENR before a DKG ceremony can begin. The outstanding signatures can be easily displayed on the status page."}),"\n",(0,n.jsxs)(t.li,{children:["Finally, once all participants have signed their approval, and submitted a charon node ENR to act on their behalf, the definition data can be downloaded as a file if the users click a newly displayed button, ",(0,n.jsx)(t.code,{children:"Download Manifest"}),"."]}),"\n",(0,n.jsx)(t.li,{children:"At this point each participant must load this definition into their charon client, and the client will attempt to complete the DKG."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"carrying-out-the-dkg-ceremony",children:"Carrying out the DKG ceremony"}),"\n",(0,n.jsxs)(t.p,{children:["Once participant has their definition file prepared, they will pass the file to charon's ",(0,n.jsx)(t.code,{children:"dkg"})," command. Charon will read the ENRs in the definition, confirm that its ENR is present, and then will reach out to bootnodes that are deployed to find the other ENRs on the network. (Fresh ENRs just have a public key and an IP address of 0.0.0.0 until they are loaded into a live charon client, which will update the IP address and increment the ENRs nonce and resign with the clients private key. If an ENR with a higher nonce is seen be a charon client, they will update the IP address of that ENR in their address book.)"]}),"\n",(0,n.jsxs)(t.p,{children:["Once all clients in the cluster can establish a connection with one another and they each complete a handshake (confirm everyone has a matching ",(0,n.jsx)(t.code,{children:"cluster_definition_hash"}),"), the ceremony begins."]}),"\n",(0,n.jsx)(t.p,{children:"No user input is required, charon does the work and outputs the following files to each machine and then exits."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"# Common data\n.charon/cluster-definition.json          # The original definition file from the DV Launchpad or `charon create dkg`\n.charon/cluster-lock.json                # New lockfile based on cluster-definition.json with validator group public keys and threshold BLS verifiers included with the initial cluster config\n.charon/deposit-data.json         # JSON file of deposit data for the distributed validators\n\n# Sensitive operator-specific data\n.charon/charon-enr-private-key    # Created before the ceremony took place [Back this up]\n.charon/validator_keys/           # Folder of key shares to be backed up and moved to validator client [Back this up]\n"})}),"\n",(0,n.jsx)(t.h2,{id:"backing-up-the-ceremony-artifacts",children:"Backing up the ceremony artifacts"}),"\n",(0,n.jsx)(t.p,{children:"Once the ceremony is complete, all participants should take a backup of the created files. In future versions of charon, if a participant loses access to these key shares, it will be possible to use a key re-sharing protocol to swap the participants old keys out of a distributed validator in favour of new keys, allowing the rest of a cluster to recover from a set of lost key shares. However for now, without a backup, the safest thing to do would be to exit the validator."}),"\n",(0,n.jsx)(t.h2,{id:"preparing-for-validator-activation",children:"Preparing for validator activation"}),"\n",(0,n.jsxs)(t.p,{children:["Once the ceremony is complete, and secure backups of key shares have been made by each operator. They must now load these key shares into their validator clients, and run the ",(0,n.jsx)(t.code,{children:"charon run"})," command to turn it into operational mode."]}),"\n",(0,n.jsx)(t.p,{children:"All operators should confirm that their charon client logs indicate all nodes are online and connected. They should also verify the readiness of their beacon clients and validator clients. Charon's grafana dashboard is a good way to see the readiness of the full cluster from its perspective."}),"\n",(0,n.jsx)(t.p,{children:"Once all operators are satisfied with network connectivity, one member can use the Obol Distributed Validator deposit flow to send the required ether and deposit data to the deposit contract, beginning the process of a distributed validator activation. Good luck."}),"\n",(0,n.jsx)(t.h2,{id:"dkg-verification",children:"DKG Verification"}),"\n",(0,n.jsxs)(t.p,{children:["For many use cases of distributed validators, the funder/depositor of the validator may not be the same person as the key creators/node operators, as (outside of the base protocol) stake delegation is a common phenomenon. This handover of information introduces a point of trust. How does someone verify that a proposed validator ",(0,n.jsx)(t.code,{children:"deposit data"})," corresponds to a real, fair, DKG with participants the depositor expects?"]}),"\n",(0,n.jsxs)(t.p,{children:['There are a number of aspects to this trust surface that can be mitigated with a "Don\'t trust, verify" model. Verification for the time being is easier off chain, until things like a ',(0,n.jsx)(t.a,{href:"https://eips.ethereum.org/EIPS/eip-2537",children:"BLS precompile"})," are brought into the EVM, along with cheap ZKP verification on chain. Some of the questions that can be asked of Distributed Validator Key Generation Ceremonies include:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Do the public key shares combine together to form the group public key?","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"This can be checked on chain as it doe not require a pairing operation"}),"\n",(0,n.jsx)(t.li,{children:"This can give confidence that a BLS pubkey represents a Distributed Validator, but does not say anything about the custody of the keys. (e.g. Was the ceremony sybil attacked, did they collude to reconstitute the group private key etc.)"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["Do the created BLS public keys attest to their ",(0,n.jsx)(t.code,{children:"cluster_definition_hash"}),"?","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"This is to create a backwards link between newly created BLS public keys and the operator's eth1 addresses that took part in their creation."}),"\n",(0,n.jsxs)(t.li,{children:["If a proposed distributed validator BLS group public key can produce a signature of the ",(0,n.jsx)(t.code,{children:"cluster_definition_hash"}),", it can be inferred that at least a threshold of the operators signed this data."]}),"\n",(0,n.jsxs)(t.li,{children:["As the ",(0,n.jsx)(t.code,{children:"cluster_definition_hash"})," is the same for all distributed validators created in the ceremony, the signatures can be aggregated into a group signature that verifies all created group keys at once. This makes it cheaper to verify a number of validators at once on chain."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["Is there either a VSS or PVSS proof of a fair DKG ceremony?","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"VSS (Verifiable Secret Sharing) means only operators can verify fairness, as the proof requires knowledge of one of the secrets."}),"\n",(0,n.jsx)(t.li,{children:"PVSS (Publicly Verifiable Secret Sharing) means anyone can verify fairness, as the proof is usually a Zero Knowledge Proof."}),"\n",(0,n.jsx)(t.li,{children:"A PVSS of a fair DKG would make it more difficult for operators to collude and undermine the security of the Distributed Validator."}),"\n",(0,n.jsx)(t.li,{children:"Zero Knowledge Proof verification on chain is currently expensive, but is becoming achievable through the hard work and research of the many ZK based teams in the industry."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"appendix",children:"Appendix"}),"\n",(0,n.jsx)(t.h3,{id:"using-dkg-without-the-launchpad",children:"Using DKG without the launchpad"}),"\n",(0,n.jsxs)(t.p,{children:["Charon clients can do a DKG with a definition file that does not contain operator signatures if you pass a ",(0,n.jsx)(t.code,{children:"--no-verify"})," flag to ",(0,n.jsx)(t.code,{children:"charon dkg"}),". This can be used for testing purposes when strict signature verification is not of the utmost importance."]}),"\n",(0,n.jsx)(t.h3,{id:"sample-configuration-and-lock-files",children:"Sample Configuration and Lock Files"}),"\n",(0,n.jsxs)(t.p,{children:["Refer to the details ",(0,n.jsx)(t.a,{href:"/docs/v0.10.0/dv/distributed-validator-cluster-manifest#cluster-configuration-files",children:"here"}),"."]})]})}function c(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>s});var n=i(96540);const r={},a=n.createContext(r);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);