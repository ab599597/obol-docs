"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[47283],{6731:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=i(74848),n=i(28453);const a={description:"How does the Obol Network look on-chain?"},o="Obol Manager Contracts",s={id:"sc/introducing-obol-managers",title:"Obol Manager Contracts",description:"How does the Obol Network look on-chain?",source:"@site/versioned_docs/version-v0.4.0/sc/01_introducing-obol-managers.md",sourceDirName:"sc",slug:"/sc/introducing-obol-managers",permalink:"/v0.4.0/sc/introducing-obol-managers",draft:!1,unlisted:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.4.0/sc/01_introducing-obol-managers.md",tags:[],version:"v0.4.0",sidebarPosition:1,frontMatter:{description:"How does the Obol Network look on-chain?"},sidebar:"tutorialSidebar",previous:{title:"DKG CLI reference",permalink:"/v0.4.0/dvk/dkg_cli_reference"},next:{title:"Filing a bug report",permalink:"/v0.4.0/cg/bug-report"}},d={},l=[{value:"Withdrawal Recipients",id:"withdrawal-recipients",level:2},{value:"Ownable Withdrawal Recipient",id:"ownable-withdrawal-recipient",level:3},{value:"Immutable Withdrawal Recipient",id:"immutable-withdrawal-recipient",level:3},{value:"Registries",id:"registries",level:2},{value:"Deposit Registry",id:"deposit-registry",level:3},{value:"Operator Registry",id:"operator-registry",level:3},{value:"Validator Registry",id:"validator-registry",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"obol-manager-contracts",children:"Obol Manager Contracts"})}),"\n",(0,r.jsx)(t.p,{children:"Obol develops and maintains a suite of smart contracts for use with Distributed Validators."}),"\n",(0,r.jsx)(t.h2,{id:"withdrawal-recipients",children:"Withdrawal Recipients"}),"\n",(0,r.jsx)(t.p,{children:"The key to a distributed validator is understanding how a withdrawal is processed. The most common way to handle a withdrawal of a validator operated by a number of different people is to use an immutable withdrawal recipient contract, with the distribution rules hardcoded into it."}),"\n",(0,r.jsxs)(t.p,{children:["For the time being Obol uses ",(0,r.jsx)(t.code,{children:"0x01"})," withdrawal credentials, and intends to upgrade to ",(0,r.jsx)(t.a,{href:"https://www.dropbox.com/s/z8kpyl5r2lh1ixe/Screenshot%202021-12-26%20at%2013.53.48.png?dl=0",children:"0x03 withdrawal credentials"})," when smart contract initiated exits are enabled."]}),"\n",(0,r.jsx)(t.h3,{id:"ownable-withdrawal-recipient",children:"Ownable Withdrawal Recipient"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-solidity",metastring:'title="WithdrawalRecipientOwnable.sol"',children:'// SPDX-License-Identifier: MIT\n\npragma solidity ^0.8.0;\n\nimport "@openzeppelin/contracts/access/Ownable.sol";\n\ncontract WithdrawalRecipientOwnable is Ownable {\n    receive() external payable {}\n\n    function withdraw(address payable recipient) public onlyOwner {\n        recipient.transfer(address(this).balance);\n    }\n}\n\n'})}),"\n",(0,r.jsxs)(t.p,{children:["An Ownable Withdrawal Recipient is the most basic type of withdrawal recipient contract. It implements Open Zeppelin's ",(0,r.jsx)(t.code,{children:"Ownable"})," interface and allows one address to call the ",(0,r.jsx)(t.code,{children:"withdraw()"})," function, which pulls all ether from the address into the owners address (or another address specified). Calling withdraw could also fund a fee split to the Obol Network, and/or the protocol that has deployed and instantiated this DV."]}),"\n",(0,r.jsx)(t.h3,{id:"immutable-withdrawal-recipient",children:"Immutable Withdrawal Recipient"}),"\n",(0,r.jsx)(t.p,{children:"An immutable withdrawal recipient is similar to an ownable recipient except the owner is hardcoded during construction and the ability to change ownership is removed. This contract should only be used as part of a larger smart contract system, for example a yearn vault strategy might use an immutable recipient contract as its vault address should never change."}),"\n",(0,r.jsx)(t.h2,{id:"registries",children:"Registries"}),"\n",(0,r.jsx)(t.h3,{id:"deposit-registry",children:"Deposit Registry"}),"\n",(0,r.jsx)(t.p,{children:"The Deposit Registry is a way for the deposit and activation of distributed validators to be two separate processes. In the simple case for DVs, a registry of deposits is not required. However when the person depositing the ether is not the same entity as the operators producing the deposits, a coordination mechanism is needed to make sure only one 32 eth deposit is submitted per DV. A deposit registry can prevent double deposits by ordering the allocation of ether to validator deposits."}),"\n",(0,r.jsx)(t.h3,{id:"operator-registry",children:"Operator Registry"}),"\n",(0,r.jsx)(t.p,{children:"If the submission of deposits to a deposit registry needs to be gated to only whitelisted addresses, a simple operator registry may serve as a way to control who can submit deposits to the deposit registry."}),"\n",(0,r.jsx)(t.h3,{id:"validator-registry",children:"Validator Registry"}),"\n",(0,r.jsx)(t.p,{children:"If validators need to be managed on chain programatically rather than manually with humans triggering exits, a validator registry can be used. Deposits getting activated get an entry into the validator registry, and validators using 0x03 exits get staged for removal from the registry. This registry can be used to coordinate many validators with similar operators and configuration."}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["Validator registries depend on the as of yet unimplemented ",(0,r.jsx)(t.code,{children:"0x03"})," validator exit feature."]})})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>s});var r=i(96540);const n={},a=r.createContext(n);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);