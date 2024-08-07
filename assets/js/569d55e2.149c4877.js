"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[12894],{46874:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var s=n(74848),i=n(28453);const r={sidebar_position:5,description:"Community testing efforts"},o="Community Testing",a={id:"fr/testnet",title:"Community Testing",description:"Community testing efforts",source:"@site/docs/fr/testnet.md",sourceDirName:"fr",slug:"/fr/testnet",permalink:"/docs/next/fr/testnet",draft:!1,unlisted:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/docs/fr/testnet.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,description:"Community testing efforts"},sidebar:"tutorialSidebar",previous:{title:"Ethereum and its Relationship with DVT",permalink:"/docs/next/fr/ethereum_and_dvt"}},l={},c=[{value:"Devnet 1",id:"devnet-1",level:2},{value:"Devnet 2",id:"devnet-2",level:2},{value:"Athena Public Testnet 1",id:"athena-public-testnet-1",level:2},{value:"Bia Public Testnet 2",id:"bia-public-testnet-2",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",input:"input",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"community-testing",children:"Community Testing"}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["This page looks at the community testing efforts organised by Obol to test Distributed Validators at scale. If you are looking for guides to run a Distributed Validator on testnet you can do so ",(0,s.jsx)(t.a,{href:"/docs/next/start/quickstart_overview",children:"here"}),"."]})}),"\n",(0,s.jsx)(t.p,{children:"Over the last number of years, Obol Labs has coordinated and hosted a number of progressively larger testnets to help harden the Charon client and iterate on the key generation tooling."}),"\n",(0,s.jsx)(t.p,{children:"The following is a breakdown of the testnet roadmap, the features that were to be completed by each testnet, and their completion date and duration."}),"\n",(0,s.jsx)(t.h1,{id:"testnets",children:"Testnets"}),"\n",(0,s.jsxs)(t.ul,{className:"contains-task-list",children:["\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ",(0,s.jsx)(t.a,{href:"#devnet-1",children:"Dev Net 1"})]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ",(0,s.jsx)(t.a,{href:"#devnet-2",children:"Dev Net 2"})]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ",(0,s.jsx)(t.a,{href:"#athena-public-testnet-1",children:"Athena Public Testnet 1"})]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ",(0,s.jsx)(t.a,{href:"#bia-public-testnet-2",children:"Bia Public Testnet 2"})]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"devnet-1",children:"Devnet 1"}),"\n",(0,s.jsxs)(t.p,{children:["The first devnet aimed to have a number of trusted operators test out our earliest tutorial flows. The aim was for a single user to complete these tutorials alone, using ",(0,s.jsx)(t.code,{children:"docker compose"})," to spin up 4 Charon clients and 4 different validator clients on a single machine, with a remote consensus client. The keys were created locally in Charon and activated with the existing launchpad."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Participants:"})," Obol Dev Team, Client team advisors."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"State:"})," Pre-product"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Network:"})," Kiln"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Completed Date:"})," June 2022"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Duration:"})," 1 week"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Goals:"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["A single user completes a first tutorial alone, using ",(0,s.jsx)(t.code,{children:"docker compose"})," to spin up 4 Charon clients on a single machine, with a remote consensus client. The keys are created locally in Charon and activated with the existing launchpad."]}),"\n",(0,s.jsx)(t.li,{children:"Prove that the distributed validator paradigm with 4 separate VC implementations together operating as one logical validator works."}),"\n",(0,s.jsx)(t.li,{children:"Get the basics of monitoring in place, for the following testnet where accurate monitoring will be important due to Charon running across a network."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"devnet-2",children:"Devnet 2"}),"\n",(0,s.jsxs)(t.p,{children:["The second devnet aimed to have a number of trusted operators test out our earliest tutorial flows ",(0,s.jsx)(t.strong,{children:"together"})," for the first time."]}),"\n",(0,s.jsxs)(t.p,{children:["The aim was for groups of 4 testers to complete a group onboarding tutorial, using ",(0,s.jsx)(t.code,{children:"docker compose"})," to spin up 4 Charon clients and 4 different validator clients (Lighthouse, Teku, Lodestar and Vouch), each on their own machine at each operator's home or their place of choosing, running at least a kiln consensus client."]}),"\n",(0,s.jsxs)(t.p,{children:["This devnet was the first time ",(0,s.jsx)(t.code,{children:"charon dkg"})," was tested with users. A core focus of this devnet was to collect network performance data."]}),"\n",(0,s.jsx)(t.p,{children:"This was also the first time Charon was run in variable, non-virtual networks (i.e. the real internet)."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Participants:"})," Obol Dev Team, Client team advisors."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"State:"})," Pre-product"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Network:"})," Kiln"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Completed Date:"})," July 2022"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Duration:"})," 2 weeks"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Goals:"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Groups of 4 testers complete a group onboarding tutorial, using ",(0,s.jsx)(t.code,{children:"docker compose"})," to spin up 4 Charon clients, each on their own machine at each operator's home or their place of choosing, running at least a kiln consensus client."]}),"\n",(0,s.jsx)(t.li,{children:"Operators avoid exposing Charon to the public internet on a static IP address through the use of Obol-hosted relay nodes."}),"\n",(0,s.jsxs)(t.li,{children:["Users test ",(0,s.jsx)(t.code,{children:"charon dkg"}),". The launchpad is not used, and this dkg is triggered by a manifest config file created locally by a single operator using the ",(0,s.jsx)(t.code,{children:"charon create dkg"})," command."]}),"\n",(0,s.jsx)(t.li,{children:"Effective collection of network performance data, to enable gathering even higher signal performance data at scale during public testnets."}),"\n",(0,s.jsx)(t.li,{children:"Block proposals are in place."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"athena-public-testnet-1",children:"Athena Public Testnet 1"}),"\n",(0,s.jsx)(t.p,{children:"With tutorials for solo and group flows having been developed and refined. The goal for public testnet 1 was to get distributed validators into the hands of the wider Obol Community for the first time. The core focus of this testnet was the onboarding experience."}),"\n",(0,s.jsx)(t.p,{children:"The core output from this testnet was a significant number of public cluster running and public feedback collected."}),"\n",(0,s.jsx)(t.p,{children:"This was an unincentivized testnet and formed the basis for us to figure out a Sybil resistance mechanism."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Participants:"})," Obol Community"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"State:"})," Bare Minimum"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Network:"})," G\xf6rli"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Completed date:"})," October 2022"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Duration:"})," 2 weeks cluster setup, 8 weeks operation"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Goals:"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Get distributed validators into the hands of the Obol Early Community for the first time."}),"\n",(0,s.jsx)(t.li,{children:"Create the first public onboarding experience and gather feedback. This is the first time we need to provide comprehensive instructions for as many platforms (Unix, Mac, Windows) as possible."}),"\n",(0,s.jsx)(t.li,{children:"Make deploying Ethereum validator nodes accessible using the CLI."}),"\n",(0,s.jsx)(t.li,{children:"Generate a backlog of bugs, feature requests, platform requests and integration requests."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"bia-public-testnet-2",children:"Bia Public Testnet 2"}),"\n",(0,s.jsx)(t.p,{children:"This second public testnet intends to take the learning from Athena and scale the network by engaging both the wider at-home validator community and professional operators. This is the first time users are setting up DVs using the DV launchpad."}),"\n",(0,s.jsx)(t.p,{children:"This testnet is also important for learning the conditions Charon will be subjected to in production. A core output of this testnet is a large number of autonomous public DV clusters running and building up the Obol community with technical ambassadors."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Participants:"})," Obol Community, Ethereum staking community"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"State:"})," MVP"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Network:"})," G\xf6rli"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Completed date:"})," March 2023"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Duration:"})," 2 weeks cluster setup, 4-8 weeks operation"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Goals:"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Engage the wider Solo and Professional Ethereum Staking Community."}),"\n",(0,s.jsx)(t.li,{children:"Get integration feedback."}),"\n",(0,s.jsx)(t.li,{children:"Build confidence in Charon after running DVs on an Ethereum testnet."}),"\n",(0,s.jsx)(t.li,{children:"Learn about the conditions Charon will be subjected to in production."}),"\n",(0,s.jsx)(t.li,{children:"Distributed Validator returns are competitive versus single validator clients."}),"\n",(0,s.jsx)(t.li,{children:"Make deploying Ethereum validator nodes accessible using the DV Launchpad."}),"\n",(0,s.jsx)(t.li,{children:"Build comprehensive guides for various profiles to spin up DVs with minimal supervision from the core team."}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var s=n(96540);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);