"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[65148],{31839:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=t(74848),s=t(28453),a=t(49489),i=t(7227);const o={sidebar_position:1,description:"A leader/creator creates a cluster configuration to be shared with operators"},l="Creator & Leader Journey",c={id:"int/quickstart/group/quickstart-group-leader-creator",title:"Creator & Leader Journey",description:"A leader/creator creates a cluster configuration to be shared with operators",source:"@site/versioned_docs/version-v0.17.1/int/quickstart/group/quickstart-group-leader-creator.md",sourceDirName:"int/quickstart/group",slug:"/int/quickstart/group/quickstart-group-leader-creator",permalink:"/v0.17.1/int/quickstart/group/quickstart-group-leader-creator",draft:!1,unlisted:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.17.1/int/quickstart/group/quickstart-group-leader-creator.md",tags:[],version:"v0.17.1",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"A leader/creator creates a cluster configuration to be shared with operators"},sidebar:"tutorialSidebar",previous:{title:"Run a cluster as a group",permalink:"/v0.17.1/int/quickstart/group/"},next:{title:"Operator Journey",permalink:"/v0.17.1/int/quickstart/group/quickstart-group-operator"}},d={},u=[{value:"Overview Video",id:"overview-video",level:2},{value:"Step 1. Collect Ethereum addresses of the cluster operators",id:"step-1-collect-ethereum-addresses-of-the-cluster-operators",level:2},{value:"Step 2. Create and back up a private key for charon",id:"step-2-create-and-back-up-a-private-key-for-charon",level:2},{value:"Step 3. Create the DKG configuration file and distribute it to cluster operators",id:"step-3-create-the-dkg-configuration-file-and-distribute-it-to-cluster-operators",level:2}];function h(e){const r={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"creator--leader-journey",children:"Creator & Leader Journey"})}),"\n",(0,n.jsx)(r.admonition,{type:"warning",children:(0,n.jsxs)(r.p,{children:["Charon is in an alpha state and should be used with caution according to its ",(0,n.jsx)(r.a,{href:"https://obol.tech/terms.pdf",children:"Terms of Use"}),"."]})}),"\n",(0,n.jsxs)(r.p,{children:["The following instructions aim to assist with the preparation of a distributed validator key generation ceremony. Select the ",(0,n.jsx)(r.em,{children:"Leader"})," tab if you ",(0,n.jsx)(r.strong,{children:"will"})," be an operator participating in the cluster, and select the ",(0,n.jsx)(r.em,{children:"Creator"})," tab if you ",(0,n.jsx)(r.strong,{children:"will NOT"})," be an operator in the cluster."]}),"\n",(0,n.jsx)(r.p,{children:"These roles hold no position of privilege in the cluster, they only set the initial terms of the cluster that the other operators agree to."}),"\n",(0,n.jsxs)(a.A,{groupId:"leader-creator",children:[(0,n.jsxs)(i.A,{value:"leader",label:"Leader",default:!0,children:[(0,n.jsxs)(r.p,{children:["The person creating the cluster ",(0,n.jsx)("b",{children:"will"})," be a node operator in the cluster.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"\n",(0,n.jsx)("h1",{children:"Pre-requisites"})]}),(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:["Ensure you have ",(0,n.jsx)("a",{href:"https://docs.docker.com/engine/install/",target:"_blank",children:"docker"})," installed."]}),(0,n.jsxs)("li",{children:["Ensure you have ",(0,n.jsx)("a",{href:"https://git-scm.com/downloads",target:"_blank",children:"git"})," installed."]}),(0,n.jsxs)("li",{children:["Make sure ",(0,n.jsx)("code",{children:"docker"})," is running before executing the commands below."]})]})]}),(0,n.jsx)(i.A,{value:"creator",label:"Creator",children:(0,n.jsxs)(r.p,{children:["The person creating the cluster ",(0,n.jsx)("b",{children:"will not"})," be a node operator in the cluster."]})})]}),"\n",(0,n.jsx)(r.h2,{id:"overview-video",children:"Overview Video"}),"\n",(0,n.jsx)("p",{align:"center",children:(0,n.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/OK6WE8te33Q",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})}),"\n",(0,n.jsx)(r.h2,{id:"step-1-collect-ethereum-addresses-of-the-cluster-operators",children:"Step 1. Collect Ethereum addresses of the cluster operators"}),"\n",(0,n.jsx)(r.p,{children:"Before starting the cluster creation, you will need to collect one Ethereum address per operator in the cluster. They will need to be able to sign messages through metamask with this address. Broader wallet support will be added in future."}),"\n",(0,n.jsx)(r.h2,{id:"step-2-create-and-back-up-a-private-key-for-charon",children:"Step 2. Create and back up a private key for charon"}),"\n",(0,n.jsxs)(a.A,{groupId:"leader-creator",children:[(0,n.jsxs)(i.A,{value:"leader",label:"Leader",default:!0,children:[(0,n.jsxs)(r.p,{children:["In order to prepare for a distributed key generation ceremony, you need to create an ",(0,n.jsx)(r.a,{href:"/v0.17.1/int/faq/errors#enrs-keys",children:"ENR"})," for your charon client. Operators in your cluster will also need to do this step, as per their ",(0,n.jsx)(r.a,{href:"./quickstart-group-operator#step-2-create-and-back-up-a-private-key-for-charon",children:"quickstart"}),". This ENR is a public/private key pair, and allows the other charon clients in the DKG to identify and connect to your node."]}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-sh",children:'# Clone this repo\ngit clone https://github.com/ObolNetwork/charon-distributed-validator-node.git\n\n# Change directory\ncd charon-distributed-validator-node\n\n# Create your charon ENR private key, this will create a charon-enr-private-key file in the .charon directory\ndocker run --rm -v "$(pwd):/opt/charon" obolnetwork/charon:v0.17.1 create enr\n'})}),(0,n.jsx)(r.p,{children:"You should expect to see a console output like"}),(0,n.jsx)(r.p,{children:"Created ENR private key: .charon/charon-enr-private-key\nenr:-JG4QGQpV4qYe32QFUAbY1UyGNtNcrVMip83cvJRhw1brMslPeyELIz3q6dsZ7GblVaCjL_8FKQhF6Syg-O_kIWztimGAYHY5EvPgmlkgnY0gmlwhH8AAAGJc2VjcDI1NmsxoQKzMe_GFPpSqtnYl-mJr8uZAUtmkqccsAx7ojGmFy-FY4N0Y3CCDhqDdWRwgg4u"}),(0,n.jsxs)(r.p,{children:["If instead of being shown your ",(0,n.jsx)(r.code,{children:"enr"})," you see an error saying ",(0,n.jsx)(r.code,{children:"permission denied"})," then you may need to ",(0,n.jsx)(r.a,{href:"../../faq/errors#docker-permission-denied-error",children:"update docker permissions"})," to allow the command to run successfully."]}),(0,n.jsx)(r.admonition,{type:"warning",children:(0,n.jsxs)(r.p,{children:["Please make sure to create a backup of the private key at ",(0,n.jsx)(r.code,{children:".charon/charon-enr-private-key"}),". Be careful not to commit it to git! ",(0,n.jsx)(r.strong,{children:"If you lose this file you won't be able to take part in the DKG ceremony and start the DV cluster successfully."})]})})]}),(0,n.jsx)(i.A,{value:"creator",label:"Creator",children:(0,n.jsxs)(r.p,{children:["This step is not needed and you can move on to ",(0,n.jsx)(r.a,{href:"#step-3-create-the-dkg-configuration-file-and-distribute-it-to-cluster-operators",children:"Step 3"}),"."]})})]}),"\n",(0,n.jsx)(r.h2,{id:"step-3-create-the-dkg-configuration-file-and-distribute-it-to-cluster-operators",children:"Step 3. Create the DKG configuration file and distribute it to cluster operators"}),"\n",(0,n.jsx)(r.p,{children:"You will prepare the configuration file for the distributed key generation ceremony using the launchpad."}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsxs)(r.li,{children:["Go to the ",(0,n.jsx)(r.a,{href:"https://goerli.launchpad.obol.tech",children:"DV Launchpad"})]}),"\n",(0,n.jsx)(r.li,{children:"Connect your wallet"}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{alt:"Connect your Wallet",src:t(2328).A+"",width:"2842",height:"1800"})}),"\n",(0,n.jsxs)(r.ol,{start:"3",children:["\n",(0,n.jsxs)(r.li,{children:["Select ",(0,n.jsx)(r.code,{children:"Create a Cluster with a group"})," then ",(0,n.jsx)(r.code,{children:"Get Started"}),"."]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{alt:"Get Started",src:t(97939).A+"",width:"2880",height:"1298"})}),"\n",(0,n.jsxs)(r.ol,{start:"4",children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:"Follow the flow and accept the advisories."}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:"Configure the Cluster"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Input the ",(0,n.jsx)(r.code,{children:"Cluster Name"})," & ",(0,n.jsx)(r.code,{children:"Cluster Size"})," (i.e. number of operators in the cluster). The threshold for the cluster to operate sucessfully will update automatically."]}),"\n"]}),"\n",(0,n.jsxs)(a.A,{groupId:"leader-creator",children:[(0,n.jsx)(i.A,{value:"leader",label:"Leader",default:!0,children:(0,n.jsx)("ul",{children:(0,n.jsx)("li",{children:(0,n.jsxs)(r.p,{children:["\u26a0\ufe0f Leave the ",(0,n.jsx)(r.code,{children:"Non-Operator"})," toggle ",(0,n.jsx)("b",{children:"OFF"}),"."]})})})}),(0,n.jsx)(i.A,{value:"creator",label:"Creator",children:(0,n.jsx)("ul",{children:(0,n.jsx)("li",{children:(0,n.jsxs)(r.p,{children:["\u26a0\ufe0f Turn the ",(0,n.jsx)(r.code,{children:"Non-Operator"})," toggle ",(0,n.jsx)("b",{children:"ON"}),"."]})})})})]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Input the Ethereum addresses for each operator collected during ",(0,n.jsx)(r.a,{href:"#step-1-collect-ethereum-addresses-of-the-cluster-operators",children:"step 1"}),"."]}),"\n",(0,n.jsx)(r.li,{children:"Select the desired amount of validators (32 ETH each) the cluster will run."}),"\n",(0,n.jsxs)(r.li,{children:["Paste your ",(0,n.jsx)(r.code,{children:"ENR"})," generated at ",(0,n.jsx)(r.a,{href:"#step-2-create-and-back-up-a-private-key-for-charon",children:"Step 2"}),"."]}),"\n",(0,n.jsxs)(r.li,{children:["Select the ",(0,n.jsx)(r.code,{children:"Withdrawal Addresses"})," method. Use ",(0,n.jsx)(r.code,{children:"Single address"})," to receive the principal and fees to a single address or ",(0,n.jsx)(r.code,{children:"Splitter Contracts"})," to share them among operators."]}),"\n"]}),"\n",(0,n.jsxs)(a.A,{groupId:"withdrawl-method",children:[(0,n.jsxs)(i.A,{value:"single",label:"Single Address",children:[(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:["Enter the ",(0,n.jsx)("code",{children:"Withdrawal Address"})," that will receive the validator effective balance at exit and when balance skimming occurs."]}),(0,n.jsxs)("li",{children:["Enter the ",(0,n.jsx)("code",{children:"Fee Recipient Address"})," to receive MEV rewards (if enabled), and block proposal priority fees."]}),(0,n.jsx)("br",{})]}),(0,n.jsx)(r.p,{children:"You can set them to be the same as your connected wallet address in one click."}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{alt:"Create Group",src:t(66026).A+"",width:"2616",height:"6184"})})]}),(0,n.jsxs)(i.A,{value:"splitter",label:"Reward Splitter",children:[(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"Enter the Ethereum address to claim the validator principal (32 ether) at exit."}),(0,n.jsx)("li",{children:"Enter the Ethereum addresses and their percentage split of the validator's rewards. Validator rewards include consensus rewards, MEV rewards and proposal priority fees."})]}),(0,n.jsx)("br",{}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{alt:"Create Group",src:t(25836).A+"",width:"1532",height:"5520"})})]})]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Click ",(0,n.jsx)(r.code,{children:"Create Cluster Configuration"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(a.A,{groupId:"withdrawl-method",children:[(0,n.jsx)(i.A,{value:"single",label:"Single Address",children:(0,n.jsx)("ul",{children:(0,n.jsxs)(r.ol,{start:"6",children:["\n",(0,n.jsx)(r.li,{children:"Review the cluster configuration"}),"\n"]})})}),(0,n.jsx)(i.A,{value:"splitter",label:"Reward Splitter",children:(0,n.jsx)("ul",{children:"6. Deploy the withdrawal manager contracts by signing the two transactions with your wallet."})})]}),"\n",(0,n.jsxs)(a.A,{groupId:"leader-creator",children:[(0,n.jsxs)(i.A,{value:"leader",label:"Leader",default:!0,children:[(0,n.jsx)("ul",{children:(0,n.jsxs)(r.ol,{start:"7",children:["\n",(0,n.jsx)(r.li,{children:"You will be asked to confirm your configuration and to sign:"}),"\n"]})}),(0,n.jsx)("ul",{children:(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:["The ",(0,n.jsx)("code",{children:"config_hash"}),". This is a hashed representation of the details of this cluster, to ensure everyone is agreeing to an identical setup."]}),(0,n.jsxs)("li",{children:["The ",(0,n.jsx)("code",{children:"operator_config_hash"}),". This is your acceptance of the terms as a participating node operator."]}),(0,n.jsxs)("li",{children:["Your ",(0,n.jsx)("code",{children:"ENR"}),". Signing your ENR authorises the corresponding private key to act on your behalf in the cluster."]})]})})]}),(0,n.jsxs)(i.A,{value:"creator",label:"Creator",children:[(0,n.jsx)("ul",{children:(0,n.jsxs)(r.ol,{start:"7",children:["\n",(0,n.jsx)(r.li,{children:"You will be asked to confirm your configuration and to sign:"}),"\n"]})}),(0,n.jsx)("ul",{children:(0,n.jsx)("ul",{children:(0,n.jsxs)("li",{children:["The ",(0,n.jsx)("code",{children:"config_hash"}),". This is a hashed representation of the details of this cluster, to ensure everyone is agreeing to an identical setup."]})})})]})]}),"\n",(0,n.jsxs)(r.ol,{start:"8",children:["\n",(0,n.jsx)(r.li,{children:"Share your cluster invite link with the operators. Following the link will show you a screen waiting for other operators to accept the configuration you created."}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{alt:"Invite Operators",src:t(36453).A+"",width:"1604",height:"1478"})}),"\n",(0,n.jsxs)(a.A,{groupId:"leader-creator",children:[(0,n.jsx)(i.A,{value:"leader",label:"Leader",default:!0,children:(0,n.jsxs)(r.p,{children:["\ud83d\udc49 Once every participating operator has signed their approval to the terms, you will continue the ",(0,n.jsxs)(r.a,{href:"./quickstart-group-operator#step-3-run-the-dkg",children:[(0,n.jsx)(r.strong,{children:"Operator"})," journey"]})," by completing the distributed key generation step."]})}),(0,n.jsx)(i.A,{value:"creator",label:"Creator",children:(0,n.jsx)(r.p,{children:"Your journey ends here and you can monitor with the link whether the operators confirm their agreement to the cluster by signing their approval. Future versions of the launchpad will allow a creator to track a distributed validator's lifecycle in its entirety."})})]})]})}function p(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},7227:(e,r,t)=>{t.d(r,{A:()=>i});t(96540);var n=t(34164);const s={tabItem:"tabItem_Ymn6"};var a=t(74848);function i(e){let{children:r,hidden:t,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,i),hidden:t,children:r})}},49489:(e,r,t)=>{t.d(r,{A:()=>w});var n=t(96540),s=t(34164),a=t(24245),i=t(56347),o=t(36494),l=t(62814),c=t(45167),d=t(69900);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??function(e){return u(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:s}}=e;return{value:r,label:t,attributes:n,default:s}}))}(t);return function(e){const r=(0,c.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function p(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function x(e){let{queryString:r=!1,groupId:t}=e;const s=(0,i.W6)(),a=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,l.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const r=new URLSearchParams(s.location.search);r.set(a,e),s.replace({...s.location,search:r.toString()})}),[a,s])]}function g(e){const{defaultValue:r,queryString:t=!1,groupId:s}=e,a=h(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:a}))),[c,u]=x({queryString:t,groupId:s}),[g,f]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[s,a]=(0,d.Dv)(t);return[s,(0,n.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:s}),j=(()=>{const e=c??g;return p({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{j&&l(j)}),[j]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,a]),tabValues:a}}var f=t(11062);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(74848);function m(e){let{className:r,block:t,selectedValue:n,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const r=e.currentTarget,t=l.indexOf(r),s=o[t].value;s!==n&&(c(r),i(s))},u=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;r=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;r=l[t]??l[l.length-1];break}}r?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},r),children:o.map((e=>{let{value:r,label:t,attributes:a}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>l.push(e),onKeyDown:u,onClick:d,...a,className:(0,s.A)("tabs__item",j.tabItem,a?.className,{"tabs__item--active":n===r}),children:t??r},r)}))})}function v(e){let{lazy:r,children:t,selectedValue:a}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=i.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==a})))})}function y(e){const r=g(e);return(0,b.jsxs)("div",{className:(0,s.A)("tabs-container",j.tabList),children:[(0,b.jsx)(m,{...r,...e}),(0,b.jsx)(v,{...r,...e})]})}function w(e){const r=(0,f.A)();return(0,b.jsx)(y,{...e,children:u(e.children)},String(r))}},2328:(e,r,t)=>{t.d(r,{A:()=>n});const n=t.p+"assets/images/Guide01-d53467f3ff24bc1fe1e6b90c8f181df2.png"},97939:(e,r,t)=>{t.d(r,{A:()=>n});const n=t.p+"assets/images/Guide02-07714c655844eeb2b6805bd87a387233.png"},25836:(e,r,t)=>{t.d(r,{A:()=>n});const n=t.p+"assets/images/Guide03-splitter-e53a8a48ee8f47e584dd7b289b352c7e.png"},66026:(e,r,t)=>{t.d(r,{A:()=>n});const n=t.p+"assets/images/Guide03-42559630a410769d2b8c6d9635ede640.png"},36453:(e,r,t)=>{t.d(r,{A:()=>n});const n=t.p+"assets/images/Guide04-f9db7d75efeda34396609e991e2840b6.png"},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>o});var n=t(96540);const s={},a=n.createContext(s);function i(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);