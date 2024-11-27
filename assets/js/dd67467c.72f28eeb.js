"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[93738],{48068:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>h});var n=s(74848),i=s(28453);const o={sidebar_position:4,description:"Software Development Security Assessment"},r="Software Development at Obol",a={id:"sec/ev-assessment",title:"Software Development at Obol",description:"Software Development Security Assessment",source:"@site/versioned_docs/version-v0.19.2/sec/ev-assessment.md",sourceDirName:"sec",slug:"/sec/ev-assessment",permalink:"/v0.19.2/sec/ev-assessment",draft:!1,unlisted:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.19.2/sec/ev-assessment.md",tags:[],version:"v0.19.2",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"Software Development Security Assessment"},sidebar:"tutorialSidebar",previous:{title:"Contacts",permalink:"/v0.19.2/sec/contact"},next:{title:"Smart Contract Audit",permalink:"/v0.19.2/sec/smart_contract_audit"}},l={},h=[{value:"Contents:",id:"contents",level:2},{value:"Background Info",id:"background-info",level:2},{value:"What is Obol?",id:"what-is-obol",level:3},{value:"What is Obol\u2019s goal?",id:"what-is-obols-goal",level:3},{value:"What are Obol\u2019s objectives?",id:"what-are-obols-objectives",level:3},{value:"What is Obol\u2019s product?",id:"what-is-obols-product",level:3},{value:"Analysis - Cluster Setup and DKG",id:"analysis---cluster-setup-and-dkg",level:2},{value:"Key Risks",id:"key-risks",level:2},{value:"1. Validation of Contract Deployment and Deposit Data Relies Heavily on Launchpad",id:"1-validation-of-contract-deployment-and-deposit-data-relies-heavily-on-launchpad",level:3},{value:"2. Social Consensus, aka \u201cWho sends the 32 ETH?\u201d",id:"2-social-consensus-aka-who-sends-the-32-eth",level:3},{value:"Recommendations",id:"recommendations",level:2},{value:"R1: Users should deploy cluster contracts through a known on-chain entry point",id:"r1-users-should-deploy-cluster-contracts-through-a-known-on-chain-entry-point",level:3},{value:"Obol\u2019s response:",id:"obols-response",level:4},{value:"R2: Users should deposit to the beacon chain through a pool contract",id:"r2-users-should-deposit-to-the-beacon-chain-through-a-pool-contract",level:3},{value:"Obol\u2019s response:",id:"obols-response-1",level:4},{value:"R3: Raise the barrier to entry to push an update to the Launchpad",id:"r3-raise-the-barrier-to-entry-to-push-an-update-to-the-launchpad",level:3},{value:"Obol\u2019s response:",id:"obols-response-2",level:4},{value:"Additional Notes",id:"additional-notes",level:2},{value:"Vulnerability Disclosure",id:"vulnerability-disclosure",level:3},{value:"Obol\u2019s response:",id:"obols-response-3",level:4},{value:"Key Personnel Risk",id:"key-personnel-risk",level:3},{value:"Obol\u2019s response:",id:"obols-response-4",level:4}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"software-development-at-obol",children:"Software Development at Obol"})}),"\n",(0,n.jsx)(t.p,{children:"When hardening a projects technical security, team member's operational security, and the security of the software development practices in use by the team are some of the most criticial areas to secure. Many hacks and compromises in the space to date have been a result of these attack vectors rather than exploits of the software itself."}),"\n",(0,n.jsx)(t.p,{children:"With this in mind, in January 2023 the Obol team retained the expertise of Ethereal Venture's security researcher Alex Wade; to interview key stakeholders and produce a report into the teams Software Development Lifecycle."}),"\n",(0,n.jsx)(t.p,{children:"The below page is a result of the report that was produced. What is present here has had some sensitive information redacted, and contains responses to the recommendations made, detailing the actions the Obol team have taken to mitigate what has been highlighted."}),"\n",(0,n.jsx)(t.h1,{id:"obol-report",children:"Obol Report"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Prepared by: Alex Wade (Ethereal Ventures)"}),"\n",(0,n.jsx)(t.strong,{children:"Date: Jan 2023"})]}),"\n",(0,n.jsx)(t.p,{children:"Over the past month, I worked with Obol to review their software development practices in preparation for their upcoming security audits. My goals were to review and analyze:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Software development processes"}),"\n",(0,n.jsx)(t.li,{children:"Vulnerability disclosure and escalation procedures"}),"\n",(0,n.jsx)(t.li,{children:"Key personnel risk"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"The information in this report was collected through a series of interviews with Obol\u2019s project leads."}),"\n",(0,n.jsx)(t.h2,{id:"contents",children:"Contents:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Background Info"}),"\n",(0,n.jsxs)(t.li,{children:["Analysis - Cluster Setup and DKG","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Key Risks"}),"\n",(0,n.jsx)(t.li,{children:"Potential Attack Scenarios"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["Recommendations","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"R1: Users should deploy cluster contracts through a known on-chain entry point"}),"\n",(0,n.jsx)(t.li,{children:"R2: Users should deposit to the beacon chain through a pool contract"}),"\n",(0,n.jsx)(t.li,{children:"R3: Raise the barrier to entry to push an update to the Launchpad"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["Additional Notes","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Vulnerability Disclosure"}),"\n",(0,n.jsx)(t.li,{children:"Key Personnel Risk"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"background-info",children:"Background Info"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Each team lead was asked to describe Obol in terms of its goals, objectives, and key features."})}),"\n",(0,n.jsx)(t.h3,{id:"what-is-obol",children:"What is Obol?"}),"\n",(0,n.jsx)(t.p,{children:"Obol builds DVT (Distributed Validator Technology) for Ethereum."}),"\n",(0,n.jsx)(t.h3,{id:"what-is-obols-goal",children:"What is Obol\u2019s goal?"}),"\n",(0,n.jsx)(t.p,{children:"Obol\u2019s goal is to solve a classic distributed systems problem: uptime."}),"\n",(0,n.jsx)(t.p,{children:"Rather than requiring Ethereum validators to stake on their own, Obol allows groups of operators to stake together. Using Obol, a single validator can be run cooperatively by multiple people across multiple machines."}),"\n",(0,n.jsx)(t.p,{children:"In theory, this architecture provides validators with some redundancy against common issues: server and power outages, client failures, and more."}),"\n",(0,n.jsx)(t.h3,{id:"what-are-obols-objectives",children:"What are Obol\u2019s objectives?"}),"\n",(0,n.jsx)(t.p,{children:"Obol\u2019s business objective is to provide base-layer infrastructure to support a distributed validator ecosystem. As Obol provides base layer technology, other companies and projects will build on top of Obol."}),"\n",(0,n.jsx)(t.p,{children:"Obol\u2019s business model is to eventually capture a portion of the revenue generated by validators that use Obol infrastructure."}),"\n",(0,n.jsx)(t.h3,{id:"what-is-obols-product",children:"What is Obol\u2019s product?"}),"\n",(0,n.jsx)(t.p,{children:"Obol\u2019s product consists of three main components, each run by its own team: a webapp, a client, and smart contracts."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/v0.19.2/dvl/intro",children:"DV Launchpad"}),": A webapp to create and manage distributed validators."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/v0.19.2/charon/intro",children:"Charon"}),": A middleware client that enables operators to run distributed validators."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/v0.19.2/sc/introducing-obol-splits",children:"Solidity"}),": Withdrawal and fee recipient contracts for use with distributed validators."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"analysis---cluster-setup-and-dkg",children:"Analysis - Cluster Setup and DKG"}),"\n",(0,n.jsx)(t.p,{children:"The Launchpad guides users through the process of creating a cluster, which defines important parameters like the validator\u2019s fee recipient and withdrawal addresses, as well as the identities of the operators in the cluster. In order to ensure their cluster configuration is correct, users need to rely on a few different factors."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"First, users need to trust the Charon client"})," to perform the DKG correctly, and validate things like:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Config file is well-formed and is using the expected version"}),"\n",(0,n.jsx)(t.li,{children:"Signatures and ENRs from other operators are valid"}),"\n",(0,n.jsx)(t.li,{children:"Cluster config hash is correct"}),"\n",(0,n.jsx)(t.li,{children:"DKG succeeds in producing valid signatures"}),"\n",(0,n.jsx)(t.li,{children:"Deposit data is well-formed and is correctly generated from the cluster config and DKG."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"However, Charon\u2019s validation is limited to the digital: signature checks, cluster file syntax, etc. It does NOT help would-be operators determine whether the other operators listed in their cluster definition are the real people with whom they intend to start a DVT cluster. So -"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Second, users need to come to social consensus with fellow operators."})," While the cluster is being set up, it\u2019s important that each operator is an active participant. Each member of the group must validate and confirm that:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"the cluster file correctly reflects their address and node identity, and reflects the information they received from fellow operators"}),"\n",(0,n.jsx)(t.li,{children:"the cluster parameters are expected \u2013 namely, the number of validators and signing threshold"}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Finally, users need to perform independent validation."})," Each user should perform their own validation of the cluster definition:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Is my information correct? (address and ENR)"}),"\n",(0,n.jsx)(t.li,{children:"Does the information I received from the group match the cluster definition?"}),"\n",(0,n.jsx)(t.li,{children:"Is the ETH2 deposit data correct, and does it match the information in the cluster definition?"}),"\n",(0,n.jsx)(t.li,{children:"Are the withdrawal and fee recipient addresses correct?"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"These final steps are potentially the most difficult, and may require significant technical knowledge."}),"\n",(0,n.jsx)(t.h2,{id:"key-risks",children:"Key Risks"}),"\n",(0,n.jsx)(t.h3,{id:"1-validation-of-contract-deployment-and-deposit-data-relies-heavily-on-launchpad",children:"1. Validation of Contract Deployment and Deposit Data Relies Heavily on Launchpad"}),"\n",(0,n.jsx)(t.p,{children:"From my interviews, it seems that the user deploys both the withdrawal and fee recipient contracts through the Launchpad."}),"\n",(0,n.jsxs)(t.p,{children:["What I\u2019m picturing is that during the first parts of the cluster setup process, the user is prompted to sign one or more transactions deploying the withdrawal and fee recipient contracts to mainnet. The Launchpad apparently uses an npm package to deploy these contracts: ",(0,n.jsx)(t.code,{children:"0xsplits/splits-sdk"}),", which I assume provides either JSON artifacts or a factory address on chain. The Launchpad then places the deployed contracts into the cluster config file, and the process moves on."]}),"\n",(0,n.jsx)(t.p,{children:"If an attacker has published a malicious update to the Launchpad (or compromised an underlying dependency), the contracts deployed by the Launchpad may be malicious. The questions I\u2019d like to pose are:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"How does the group creator know the Launchpad deployed the correct contracts?"}),"\n",(0,n.jsx)(t.li,{children:"How does the rest of the group know the creator deployed the contracts through the Launchpad?"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"My understanding is that this ultimately comes down to the independent verification that each of the group\u2019s members performs during and after the cluster\u2019s setup phase."}),"\n",(0,n.jsx)(t.p,{children:"At its worst, this verification might consist solely of the cluster creator confirming to the others that, yes, those addresses match the contracts I deployed through the Launchpad."}),"\n",(0,n.jsx)(t.p,{children:"A more sophisticated user might verify that not only do the addresses match, but the deployed source code looks roughly correct. However, this step is far out of the realm of many would-be validators. To be really certain that the source code is correct would require auditor-level knowledge."}),"\n",(0,n.jsx)(t.p,{children:"The risk is that:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"the deployed contracts are NOT the correctly-configured 0xsplits waterfall/fee splitter contracts"}),"\n",(0,n.jsx)(t.li,{children:"most users are ill-equipped to make this determination themselves"}),"\n",(0,n.jsx)(t.li,{children:"we don\u2019t want to trust the Launchpad as the single source of truth"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"In the worst case, the cluster may end up depositing with malicious withdrawal or fee recipient credentials. If unnoticed, this may net an attacker the entire withdrawal amount, once the cluster exits."}),"\n",(0,n.jsx)(t.p,{children:"Note that the same (or similar) risks apply to validation of deposit data, which has the potential to be similarly difficult. I\u2019m a little fuzzy on which part of the Obol stack actually generates the deposit data / deposit transaction, so I can\u2019t speak to this as much. However, I think the mitigation for both of these is roughly the same - read on!"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Mitigation:"})}),"\n",(0,n.jsx)(t.p,{children:"It\u2019s certainly a good idea to make it harder to deploy malicious updates to the Launchpad, but this may not be entirely possible. A higher-yield strategy may be to educate and empower users to perform independent validation of the DVT setup process - without relying on information fed to them by Charon and the Launchpad."}),"\n",(0,n.jsx)(t.p,{children:"I\u2019ve outlined some ideas for this in #R1 and #R2."}),"\n",(0,n.jsx)(t.h3,{id:"2-social-consensus-aka-who-sends-the-32-eth",children:"2. Social Consensus, aka \u201cWho sends the 32 ETH?\u201d"}),"\n",(0,n.jsx)(t.p,{children:"Depositing to the beacon chain requires a total of 32 ETH. Obol\u2019s product allows multiple operators to act as a single validator together, which means would-be operators need to agree on how to fund the 32 ETH needed to initiate the deposit."}),"\n",(0,n.jsx)(t.p,{children:"It is my understanding that currently, this process comes down to trust and loose social consensus. Essentially, the group needs to decide who chips in what amount together, and then trust someone to take the 32 ETH and complete the deposit process correctly (without running away with the money)."}),"\n",(0,n.jsx)(t.p,{children:"Granted, the initial launch of Obol will be open only to a small group of people as the kinks in the system get worked out - but in preparation for an eventual public release, the deposit process needs to be much simpler and far less reliant on trust."}),"\n",(0,n.jsx)(t.p,{children:"Mitigation: See #R2."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Potential Attack Scenarios"})}),"\n",(0,n.jsx)(t.p,{children:"During the interview process, I learned that each of Obol\u2019s core components has its own GitHub repo, and that each repo has roughly the same structure in terms of organization and security policies. For each repository:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"There are two overall github organization administrators, and a number of people have administrative control over individual repositories."}),"\n",(0,n.jsxs)(t.li,{children:["In order to merge PRs, the submitter needs:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"CI/CD checks to pass"}),"\n",(0,n.jsx)(t.li,{children:"Review from one person (anyone at Obol)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Of course, admin access also means the ability to change these settings - so repo admins could theoretically merge PRs without needing checks to pass, and without review/approval, organization admins can control the full GitHub organization."}),"\n",(0,n.jsx)(t.p,{children:"The following scenarios describe the impact an attack may have."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"1. Publishing a malicious version of the Launchpad, or compromising an underlying dependency"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Reward: High"}),"\n",(0,n.jsx)(t.li,{children:"Difficulty: Medium-Low"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"As described in Key Risks, publishing a malicious version of the Launchpad has the potential to net the largest payout for an attacker. By tampering with the cluster\u2019s deposit data or withdrawal/fee recipient contracts, an attacker stands to gain 32 ETH or more per compromised cluster."}),"\n",(0,n.jsx)(t.p,{children:"During the interviews, I learned that merging PRs to main in the Launchpad repo triggers an action that publishes to the site. Given that merges can be performed by an authorized Obol developer, this makes the developers prime targets for social engineering attacks."}),"\n",(0,n.jsxs)(t.p,{children:["Additionally, the use of the ",(0,n.jsx)(t.code,{children:"0xsplits/splits-sdk"})," NPM package to aid in contract deployment may represent a supply chain attack vector. It may be that this applies to other Launchpad dependencies as well."]}),"\n",(0,n.jsx)(t.p,{children:"In any case, with a fairly large surface area and high potential reward, this scenario represents a credible risk to users during the cluster setup and DKG process."}),"\n",(0,n.jsx)(t.p,{children:"See #R1, #R2, and #R3 for some ideas to address this scenario."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"2. Publishing a malicious version of Charon to new operators"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Reward: Medium"}),"\n",(0,n.jsx)(t.li,{children:"Difficulty: High"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"During the cluster setup process, Charon is responsible both for validating the cluster configuration produced by the Launchpad, as well as performing a DKG ceremony between a group\u2019s operators."}),"\n",(0,n.jsx)(t.p,{children:"If new operators use a malicious version of Charon to perform this process, it may be possible to tamper with both of these responsibilities, or even get access to part or all of the underlying validator private key created during DKG."}),"\n",(0,n.jsx)(t.p,{children:"However, the difficulty of this type of attack seems quite high. An attacker would first need to carry out the same type of social engineering attack described in scenario 1 to publish and tag a new version of Charon. Crucially, users would also need to install the malicious version - unlike the Launchpad, an update here is not pushed directly to users."}),"\n",(0,n.jsx)(t.p,{children:"As long as Obol is clear and consistent with communication around releases and versioning, it seems unlikely that a user would both install a brand-new, unannounced release, and finish the cluster setup process before being warned about the attack."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"3. Publishing a malicious version of Charon to existing validators"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Reward: Low"}),"\n",(0,n.jsx)(t.li,{children:"Difficulty: High"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Once a distributed validator is up and running, much of the danger has passed. As a middleware client, Charon sits between a validator\u2019s consensus and validator clients. As such, it shouldn\u2019t have direct access to a validator\u2019s withdrawal keys nor signing keys."}),"\n",(0,n.jsx)(t.p,{children:"If existing validators update to a malicious version of Charon, it\u2019s likely the worst thing an attacker could theoretically do is slash the validator, however, assuming charon has no access to any private keys, this would be predicated on one or more validator clients connected to charon also failing to prevent the signing of a slashable message. In practice, a compromised charon client is more likely to pose liveness risks than safety risks."}),"\n",(0,n.jsx)(t.p,{children:"This is not likely to be particularly motivating to potential attackers - and paired with the high difficulty described above, this scenario seems unlikely to cause significant issues."}),"\n",(0,n.jsx)(t.h2,{id:"recommendations",children:"Recommendations"}),"\n",(0,n.jsx)(t.h3,{id:"r1-users-should-deploy-cluster-contracts-through-a-known-on-chain-entry-point",children:"R1: Users should deploy cluster contracts through a known on-chain entry point"}),"\n",(0,n.jsxs)(t.p,{children:["During setup, users should only sign one transaction via the Launchpad - to a contract located at an Obol-held ENS (e.g. ",(0,n.jsx)(t.code,{children:"launchpad.obol.eth"}),"). This contract should deploy everything needed for the cluster to operate, like the withdrawal and fee recipient contracts. It should also initialize them with the provided reward split configuration (and any other config needed)."]}),"\n",(0,n.jsx)(t.p,{children:"Rather than using an NPM library to supply a factory address or JSON artifacts, this has the benefit of being both:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Harder to compromise:"})," as long as the user knows launchpad.obol.eth, it\u2019s pretty difficult to trick them into deploying the wrong contracts."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Easier to validate"})," for non-technical users: the Obol contract can be queried for deployment information via etherscan. For example:"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Etherscan Contract View Screenshot",src:s(71723).A+"",width:"1262",height:"428"})}),"\n",(0,n.jsx)(t.p,{children:"Note that in order for this to be successful, Obol needs to provide detailed steps for users to perform manual validation of their cluster setups. Users should be able to treat this as a \u201cchecklist:\u201d"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Did I send a transaction to ",(0,n.jsx)(t.code,{children:"launchpad.obol.eth"}),"?"]}),"\n",(0,n.jsx)(t.li,{children:"Can I use the ENS name to locate and query the deployment manager contract on etherscan?"}),"\n",(0,n.jsxs)(t.li,{children:["If I input my address, does etherscan report the configuration I was expecting?","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"withdrawal address matches"}),"\n",(0,n.jsx)(t.li,{children:"fee recipient address matches"}),"\n",(0,n.jsx)(t.li,{children:"reward split configuration matches"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"As long as these steps are plastered all over the place (i.e. not just on the Launchpad) and Obol puts in effort to educate users about the process, this approach should allow users to validate cluster configurations themselves - regardless of Launchpad or NPM package compromise."}),"\n",(0,n.jsx)(t.h4,{id:"obols-response",children:"Obol\u2019s response:"}),"\n",(0,n.jsx)(t.p,{children:"Roadmapped: add the ability for the OWR factory to claim and transfer its reverse resolution ownership."}),"\n",(0,n.jsx)(t.h3,{id:"r2-users-should-deposit-to-the-beacon-chain-through-a-pool-contract",children:"R2: Users should deposit to the beacon chain through a pool contract"}),"\n",(0,n.jsx)(t.p,{children:"Once cluster setup and DKG is complete, a group of operators should deposit to the beacon chain by way of a pool contract. The pool contract should:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Accept Eth from any of the group\u2019s operators"}),"\n",(0,n.jsx)(t.li,{children:"Stop accepting Eth when the contract\u2019s balance hits (32 ETH * number of validators)"}),"\n",(0,n.jsx)(t.li,{children:"Make it easy to pull the trigger and deposit to the beacon chain once the critical balance has been reached"}),"\n",(0,n.jsx)(t.li,{children:"Offer all of the group\u2019s operators a \u201cbail\u201d option at any point before the deposit is triggered"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Ideally, this contract is deployed during the setup process described in #R1, as another step toward allowing users to perform independent validation of the process."}),"\n",(0,n.jsx)(t.p,{children:"Rather than relying on social consensus, this should:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Allow operators to fund the validator without needing to trust any single party"}),"\n",(0,n.jsx)(t.li,{children:"Make it harder to mess up the deposit or send funds to some malicious actor, as the pool contract should know what the beacon deposit contract address is"}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"obols-response-1",children:"Obol\u2019s response:"}),"\n",(0,n.jsx)(t.p,{children:"Roadmapped: give the operators a streamlined, secure way to deposit Ether (ETH) to the beacon chain collectively, satisfying specific conditions:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Pooling from multiple operators."}),"\n",(0,n.jsx)(t.li,{children:"Ceasing to accept ETH once a critical balance is reached, defined by 32 ETH multiplied by the number of validators."}),"\n",(0,n.jsx)(t.li,{children:"Facilitating an immediate deposit to the beacon chain once the target balance is reached."}),"\n",(0,n.jsx)(t.li,{children:"Provide a 'bail-out' option for operators to withdraw their contribution before initiating the group's deposit to the beacon chain."}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"r3-raise-the-barrier-to-entry-to-push-an-update-to-the-launchpad",children:"R3: Raise the barrier to entry to push an update to the Launchpad"}),"\n",(0,n.jsx)(t.p,{children:"Currently, any repo admin can publish an update to the Launchpad unchecked."}),"\n",(0,n.jsx)(t.p,{children:"Given the risks and scenarios outlined above, consider amending this process so that the sole compromise of either admin is not sufficient to publish to the Launchpad site. It may be worthwhile to require both admins to approve publishing to the site."}),"\n",(0,n.jsx)(t.p,{children:"Along with simply adding additional prerequisites to publish an update to the Launchpad, ensure that both admins have enabled some level of multi-factor authentication on their GitHub accounts."}),"\n",(0,n.jsx)(t.h4,{id:"obols-response-2",children:"Obol\u2019s response:"}),"\n",(0,n.jsx)(t.p,{children:"We removed individual\u2019s ability to merge changes without review, enforced MFA, signed commits, and employed Bulldozer bot to make sure a PR gets merged automatically when all checks pass."}),"\n",(0,n.jsx)(t.h2,{id:"additional-notes",children:"Additional Notes"}),"\n",(0,n.jsx)(t.h3,{id:"vulnerability-disclosure",children:"Vulnerability Disclosure"}),"\n",(0,n.jsx)(t.p,{children:"During the interviews, I got some conflicting information when asking about Obol\u2019s vulnerability disclosure process."}),"\n",(0,n.jsxs)(t.p,{children:["Some interviewees directed me towards Obol\u2019s security repo, which details security contacts: ",(0,n.jsx)(t.a,{href:"https://github.com/ObolNetwork/obol-security",children:"ObolNetwork/obol-security"}),", while some answered that disclosure should happen primarily through Immunefi. While these may both be part of the correct answer, it seems that Obol\u2019s disclosure process may not be as well-defined as it could be. Here are some notes:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"I wasn\u2019t able to find information about Obol on Immunefi. I also didn\u2019t find any reference to a security contact or disclosure policy in Obol\u2019s docs."}),"\n",(0,n.jsxs)(t.li,{children:["When looking into the obol security repo, I noticed broken links in a few of the sections in README.md and SECURITY.md:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Security policy"}),"\n",(0,n.jsx)(t.li,{children:"More Information"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.li,{children:"Some of the text and links in the Bug Bounty Program don\u2019t seem to apply to Obol (see text referring to Vaults and Strategies)."}),"\n",(0,n.jsx)(t.li,{children:"The Receiving Disclosures section does not include a public key with which submitters can encrypt vulnerability information."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"It\u2019s my understanding that these items are probably lower priority due to Obol\u2019s initial closed launch - but these should be squared away soon!\n[Obol response to latest vuln disclosure process goes here]"}),"\n",(0,n.jsx)(t.h4,{id:"obols-response-3",children:"Obol\u2019s response:"}),"\n",(0,n.jsx)(t.p,{children:"we addressed all of the concerns in the obol-security repository:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"The security policy link has been fixed"}),"\n",(0,n.jsx)(t.li,{children:"The Bug Bounty program received an overhaul and clearly states rewards, eligibility, and scope"}),"\n",(0,n.jsx)(t.li,{children:"We list two GPG public keys for which we accept encrypted vulnerabilities reports."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"We are actively working towards integrating Immunefi in our security pipeline."}),"\n",(0,n.jsx)(t.h3,{id:"key-personnel-risk",children:"Key Personnel Risk"}),"\n",(0,n.jsx)(t.p,{children:"A final section on the specifics of key personnel risk faced by Obol has been redacted from the original report. Particular areas of control highlighted were github org ownership and domain name control."}),"\n",(0,n.jsx)(t.h4,{id:"obols-response-4",children:"Obol\u2019s response:"}),"\n",(0,n.jsx)(t.p,{children:"These risks have been mitigated by adding an extra admin to the github org, and by setting up a second DNS stack in case the primary one fails, along with general Opsec improvements."})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},71723:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/EtherscanContractView-54408fc410ab0165bc8f38d4e63baf1e.png"},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>a});var n=s(96540);const i={},o=n.createContext(i);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);