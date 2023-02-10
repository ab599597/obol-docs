"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[5698],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var i=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=i.createContext({}),d=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(r),h=a,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||n;return r?i.createElement(m,o(o({ref:t},c),{},{components:r})):i.createElement(m,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,o=new Array(n);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var d=2;d<n;d++)o[d]=r[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}h.displayName="MDXCreateElement"},67004:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>d});var i=r(87462),a=(r(67294),r(3905));const n={description:"How does the Obol Network look on-chain?"},o="Obol Manager Contracts",s={unversionedId:"sc/introducing-obol-managers",id:"version-v0.9.0/sc/introducing-obol-managers",title:"Obol Manager Contracts",description:"How does the Obol Network look on-chain?",source:"@site/versioned_docs/version-v0.9.0/sc/01_introducing-obol-managers.md",sourceDirName:"sc",slug:"/sc/introducing-obol-managers",permalink:"/docs/v0.9.0/sc/introducing-obol-managers",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.9.0/sc/01_introducing-obol-managers.md",tags:[],version:"v0.9.0",sidebarPosition:1,frontMatter:{description:"How does the Obol Network look on-chain?"},sidebar:"tutorialSidebar",previous:{title:"Distributed Validator launchpad",permalink:"/docs/v0.9.0/dvk/distributed_validator_launchpad"},next:{title:"Filing a bug report",permalink:"/docs/v0.9.0/cg/bug-report"}},l={},d=[{value:"Withdrawal Recipients",id:"withdrawal-recipients",level:2},{value:"Ownable Withdrawal Recipient",id:"ownable-withdrawal-recipient",level:3},{value:"Immutable Withdrawal Recipient",id:"immutable-withdrawal-recipient",level:3},{value:"Registries",id:"registries",level:2},{value:"Deposit Registry",id:"deposit-registry",level:3},{value:"Operator Registry",id:"operator-registry",level:3},{value:"Validator Registry",id:"validator-registry",level:3}],c={toc:d};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"obol-manager-contracts"},"Obol Manager Contracts"),(0,a.kt)("p",null,"Obol develops and maintains a suite of smart contracts for use with Distributed Validators. "),(0,a.kt)("h2",{id:"withdrawal-recipients"},"Withdrawal Recipients"),(0,a.kt)("p",null,"The key to a distributed validator is understanding how a withdrawal is processed. The most common way to handle a withdrawal of a validator operated by a number of different people is to use an immutable withdrawal recipient contract, with the distribution rules hardcoded into it. "),(0,a.kt)("p",null,"For the time being Obol uses ",(0,a.kt)("inlineCode",{parentName:"p"},"0x01")," withdrawal credentials, and intends to upgrade to ",(0,a.kt)("a",{parentName:"p",href:"https://ethresear.ch/t/0x03-withdrawal-credentials-simple-eth1-triggerable-withdrawals/10021"},"0x03 withdrawal credentials")," when smart contract initiated exits are enabled. "),(0,a.kt)("h3",{id:"ownable-withdrawal-recipient"},"Ownable Withdrawal Recipient"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity",metastring:'title="WithdrawalRecipientOwnable.sol"',title:'"WithdrawalRecipientOwnable.sol"'},'// SPDX-License-Identifier: MIT\n\npragma solidity ^0.8.0;\n\nimport "@openzeppelin/contracts/access/Ownable.sol";\n\ncontract WithdrawalRecipientOwnable is Ownable {\n    receive() external payable {}\n\n    function withdraw(address payable recipient) public onlyOwner {\n        recipient.transfer(address(this).balance);\n    }\n}\n\n')),(0,a.kt)("p",null,"An Ownable Withdrawal Recipient is the most basic type of withdrawal recipient contract. It implements Open Zeppelin's ",(0,a.kt)("inlineCode",{parentName:"p"},"Ownable")," interface and allows one address to call the ",(0,a.kt)("inlineCode",{parentName:"p"},"withdraw()")," function, which pulls all ether from the address into the owners address (or another address specified). Calling withdraw could also fund a fee split to the Obol Network, and/or the protocol that has deployed and instantiated this DV."),(0,a.kt)("h3",{id:"immutable-withdrawal-recipient"},"Immutable Withdrawal Recipient"),(0,a.kt)("p",null,"An immutable withdrawal recipient is similar to an ownable recipient except the owner is hardcoded during construction and the ability to change ownership is removed. This contract should only be used as part of a larger smart contract system, for example a yearn vault strategy might use an immutable recipient contract as its vault address should never change. "),(0,a.kt)("h2",{id:"registries"},"Registries"),(0,a.kt)("h3",{id:"deposit-registry"},"Deposit Registry"),(0,a.kt)("p",null,"The Deposit Registry is a way for the deposit and activation of distributed validators to be two separate processes. In the simple case for DVs, a registry of deposits is not required. However when the person depositing the ether is not the same entity as the operators producing the deposits, a coordination mechanism is needed to make sure only one 32 eth deposit is submitted per DV. A deposit registry can prevent double deposits by ordering the allocation of ether to validator deposits. "),(0,a.kt)("h3",{id:"operator-registry"},"Operator Registry"),(0,a.kt)("p",null,"If the submission of deposits to a deposit registry needs to be gated to only whitelisted addresses, a simple operator registry may serve as a way to control who can submit deposits to the deposit registry. "),(0,a.kt)("h3",{id:"validator-registry"},"Validator Registry"),(0,a.kt)("p",null,"If validators need to be managed on chain programatically rather than manually with humans triggering exits, a validator registry can be used. Deposits getting activated get an entry into the validator registry, and validators using 0x03 exits get staged for removal from the registry. This registry can be used to coordinate many validators with similar operators and configuration. "),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Validator registries depend on the as of yet unimplemented ",(0,a.kt)("inlineCode",{parentName:"p"},"0x03")," validator exit feature.")))}p.isMDXComponent=!0}}]);