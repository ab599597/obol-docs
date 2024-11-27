"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[41629],{64383:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var a=n(74848),r=n(28453),s=n(49489),i=n(7227);const o={sidebar_position:1,description:"Create a DV cluster using the Obol Typescript SDK"},l="Create a DV using the SDK",c={id:"int/quickstart/advanced/quickstart-sdk",title:"Create a DV using the SDK",description:"Create a DV cluster using the Obol Typescript SDK",source:"@site/versioned_docs/version-v0.18.0/int/quickstart/advanced/quickstart-sdk.md",sourceDirName:"int/quickstart/advanced",slug:"/int/quickstart/advanced/quickstart-sdk",permalink:"/v0.18.0/int/quickstart/advanced/quickstart-sdk",draft:!1,unlisted:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.18.0/int/quickstart/advanced/quickstart-sdk.md",tags:[],version:"v0.18.0",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Create a DV cluster using the Obol Typescript SDK"},sidebar:"tutorialSidebar",previous:{title:"Run a DV on mainnet",permalink:"/v0.18.0/int/quickstart/quickstart-mainnet"},next:{title:"Run a cluster with MEV enabled",permalink:"/v0.18.0/int/quickstart/advanced/quickstart-builder-api"}},d={},u=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Install the package",id:"install-the-package",level:2},{value:"Instantiate the client",id:"instantiate-the-client",level:2},{value:"Propose the cluster",id:"propose-the-cluster",level:2},{value:"Invite the Operators to complete the DKG",id:"invite-the-operators-to-complete-the-dkg",level:2},{value:"Retrieve the created Distributed Validators using the SDK",id:"retrieve-the-created-distributed-validators-using-the-sdk",level:2},{value:"Activate the DVs using the deposit contract",id:"activate-the-dvs-using-the-deposit-contract",level:2},{value:"Usage Examples",id:"usage-examples",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"create-a-dv-using-the-sdk",children:"Create a DV using the SDK"})}),"\n",(0,a.jsx)(t.admonition,{type:"warning",children:(0,a.jsx)(t.p,{children:"The Obol-SDK is in a beta state and should be used with caution on testnets only."})}),"\n",(0,a.jsxs)(t.p,{children:["This is a walkthrough of using the ",(0,a.jsx)(t.a,{href:"https://www.npmjs.com/package/@obolnetwork/obol-sdk",children:"Obol-SDK"})," to propose a four-node distributed validator cluster for creation using the ",(0,a.jsx)(t.a,{href:"/v0.18.0/dvl/intro",children:"DV Launchpad"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"pre-requisites",children:"Pre-requisites"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["You have ",(0,a.jsx)(t.a,{href:"https://nodejs.org/en",children:"node.js"})," installed."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"install-the-package",children:"Install the package"}),"\n",(0,a.jsx)(t.p,{children:"Install the Obol-SDK package into your development environment"}),"\n",(0,a.jsxs)(s.A,{groupId:"install-sdk",children:[(0,a.jsx)(i.A,{value:"npm",label:"NPM",default:!0,children:(0,a.jsx)("pre",{children:(0,a.jsx)("code",{children:"npm install --save @obolnetwork/obol-sdk"})})}),(0,a.jsx)(i.A,{value:"yarn",label:"Yarn",children:(0,a.jsx)("pre",{children:(0,a.jsx)("code",{children:"yarn add @obolnetwork/obol-sdk"})})})]}),"\n",(0,a.jsx)(t.h2,{id:"instantiate-the-client",children:"Instantiate the client"}),"\n",(0,a.jsx)(t.p,{children:"The first thing you need to do is create a instance of the Obol SDK client. The client takes two constructor parameters:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["The ",(0,a.jsx)(t.code,{children:"chainID"})," for the chain you intend to use."]}),"\n",(0,a.jsxs)(t.li,{children:["An ethers.js ",(0,a.jsx)(t.a,{href:"https://docs.ethers.org/v6/api/providers/#Signer-signTypedData",children:"signer"})," object."]}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:'import { Client } from "@obolnetwork/obol-sdk";\nimport { ethers } from "ethers";\n\n// Create a dummy ethers signer object with a throwaway private key\nconst mnemonic = ethers.Wallet.createRandom().mnemonic?.phrase || "";\nconst privateKey = ethers.Wallet.fromPhrase(mnemonic).privateKey;\nconst wallet = new ethers.Wallet(privateKey);\nconst signer = wallet.connect(null);\n\n// Instantiate the Obol Client for goerli\nconst obol = new Client({ chainId: 5 }, signer);\n'})}),"\n",(0,a.jsx)(t.h2,{id:"propose-the-cluster",children:"Propose the cluster"}),"\n",(0,a.jsx)(t.p,{children:"List the Ethereum addresses of participating operators, along with withdrawal and fee recipient address data for each validator you intend for the operators to create."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:'// A config hash is a deterministic hash of the proposed DV cluster configuration\nconst configHash = await obol.createClusterDefinition({\n  name: "SDK Demo Cluster",\n  operators: [\n    { address: "0xC35CfCd67b9C27345a54EDEcC1033F2284148c81" },\n    { address: "0x33807D6F1DCe44b9C599fFE03640762A6F08C496" },\n    { address: "0xc6e76F72Ea672FAe05C357157CfC37720F0aF26f" },\n    { address: "0x86B8145c98e5BD25BA722645b15eD65f024a87EC" },\n  ],\n  validators: [\n    {\n      fee_recipient_address: "0x3CD4958e76C317abcEA19faDd076348808424F99",\n      withdrawal_address: "0xE0C5ceA4D3869F156717C66E188Ae81C80914a6e",\n    },\n  ],\n});\n\nconsole.log(\n  `Direct the operators to https://goerli.launchpad.obol.tech/dv?configHash=${configHash} to complete the key generation process`\n);\n'})}),"\n",(0,a.jsx)(t.h2,{id:"invite-the-operators-to-complete-the-dkg",children:"Invite the Operators to complete the DKG"}),"\n",(0,a.jsxs)(t.p,{children:["Once the Obol-API returns a ",(0,a.jsx)(t.code,{children:"configHash"})," string from the ",(0,a.jsx)(t.code,{children:"createClusterDefinition"})," method, you can use this identifier to invite the operators to the ",(0,a.jsx)(t.a,{href:"/v0.18.0/dvl/intro",children:"Launchpad"})," to complete the process"]}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["Operators navigate to ",(0,a.jsx)(t.code,{children:"https://<NETWORK_NAME_HERE>.launchpad.obol.tech/dv?configHash=<CONFIG_HASH_HERE>"})," and complete the ",(0,a.jsx)(t.a,{href:"/v0.18.0/int/quickstart/group/quickstart-group-operator",children:"run a DV with others"})," flow."]}),"\n",(0,a.jsxs)(t.li,{children:["Once the DKG is complete, and operators are using the ",(0,a.jsx)(t.code,{children:"--publish"})," flag, the created cluster details will be posted to the Obol API"]}),"\n",(0,a.jsxs)(t.li,{children:["The creator will be able to retrieve this data with ",(0,a.jsx)(t.code,{children:"obol.getClusterLock(configHash)"}),", to use for activating the newly created validator."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"retrieve-the-created-distributed-validators-using-the-sdk",children:"Retrieve the created Distributed Validators using the SDK"}),"\n",(0,a.jsx)(t.p,{children:"Once the DKG is complete, the proposer of the cluster can retrieve key data such as the validator public keys and their associated deposit data messages."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"const clusterLock = await obol.getClusterLock(configHash);\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Reference lock files can be found ",(0,a.jsx)(t.a,{href:"https://github.com/ObolNetwork/charon/tree/main/cluster/testdata",children:"here"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"activate-the-dvs-using-the-deposit-contract",children:"Activate the DVs using the deposit contract"}),"\n",(0,a.jsxs)(t.p,{children:["In order to activate the distributed validators, the cluster operator can retrieve the validators' associated deposit data from the lock file and use it to craft transactions to the ",(0,a.jsx)(t.code,{children:"deposit()"})," method on the deposit contract."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'const validatorDepositData =\n  clusterLock.distributed_validators[validatorIndex].deposit_data;\n\nconst depositContract = new ethers.Contract(\n  DEPOSIT_CONTRACT_ADDRESS, // 0x00000000219ab540356cBB839Cbe05303d7705Fa for Mainnet, 0xff50ed3d0ec03aC01D4C79aAd74928BFF48a7b2b for Goerli\n  depositContractABI, // https://etherscan.io/address/0x00000000219ab540356cBB839Cbe05303d7705Fa#code for Mainnet, and replace the address for Goerli\n  signer\n);\n\nconst TX_VALUE = ethers.parseEther("32");\n\nconst tx = await depositContract.deposit(\n  validatorDepositData.pubkey,\n  validatorDepositData.withdrawal_credentials,\n  validatorDepositData.signature,\n  validatorDepositData.deposit_data_root,\n  { value: TX_VALUE }\n);\n\nconst txResult = await tx.wait();\n'})}),"\n",(0,a.jsx)(t.h2,{id:"usage-examples",children:"Usage Examples"}),"\n",(0,a.jsxs)(t.p,{children:["Examples of how our SDK can be used are found ",(0,a.jsx)(t.a,{href:"https://github.com/ObolNetwork/obol-sdk-examples",children:"here"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},7227:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var a=n(34164);const r={tabItem:"tabItem_Ymn6"};var s=n(74848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,i),hidden:n,children:t})}},49489:(e,t,n)=>{n.d(t,{A:()=>D});var a=n(96540),r=n(34164),s=n(24245),i=n(56347),o=n(36494),l=n(62814),c=n(45167),d=n(69900);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function v(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,s=h(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[c,u]=v({queryString:n,groupId:r}),[b,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,d.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:r}),m=(()=>{const e=c??b;return p({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{m&&l(m)}),[m]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,s]),tabValues:s}}var f=n(11062);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(74848);function x(e){let{className:t,block:n,selectedValue:a,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const t=e.currentTarget,n=l.indexOf(t),r=o[n].value;r!==a&&(c(t),i(r))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:u,onClick:d,...s,className:(0,r.A)("tabs__item",m.tabItem,s?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:s}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function k(e){const t=b(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",m.tabList),children:[(0,g.jsx)(x,{...t,...e}),(0,g.jsx)(j,{...t,...e})]})}function D(e){const t=(0,f.A)();return(0,g.jsx)(k,{...e,children:u(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var a=n(96540);const r={},s=a.createContext(r);function i(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);