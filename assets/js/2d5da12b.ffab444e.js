"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[82012],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>g});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(t),m=a,g=c["".concat(l,".").concat(m)]||c[m]||h[m]||o;return t?r.createElement(g,i(i({ref:n},u),{},{components:t})):r.createElement(g,i({ref:n},u))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},95557:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=t(58168),a=(t(96540),t(15680));const o={sidebar_position:1,description:"Frequently asked questions"},i="Frequently asked questions",s={unversionedId:"int/faq/general",id:"version-v0.16.0/int/faq/general",title:"Frequently asked questions",description:"Frequently asked questions",source:"@site/versioned_docs/version-v0.16.0/int/faq/general.md",sourceDirName:"int/faq",slug:"/int/faq/general",permalink:"/docs/v0.16.0/int/faq/general",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.16.0/int/faq/general.md",tags:[],version:"v0.16.0",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Frequently asked questions"},sidebar:"tutorialSidebar",previous:{title:"Self-Host a Relay",permalink:"/docs/v0.16.0/int/quickstart/advanced/self-relay"},next:{title:"Errors & Resolutions",permalink:"/docs/v0.16.0/int/faq/errors"}},l={},d=[{value:"General",id:"general",level:2},{value:"Does Obol have a token?",id:"does-obol-have-a-token",level:3},{value:"Where can I learn more about Distributed Validators?",id:"where-can-i-learn-more-about-distributed-validators",level:3},{value:"Where does the name Charon come from?",id:"where-does-the-name-charon-come-from",level:3},{value:"What are the hardware requirements for running a Charon node?",id:"what-are-the-hardware-requirements-for-running-a-charon-node",level:3},{value:"What is the difference between a node, a validator and a cluster?",id:"what-is-the-difference-between-a-node-a-validator-and-a-cluster",level:3},{value:"Can I migrate an existing Charon node to a new machine?",id:"can-i-migrate-an-existing-charon-node-to-a-new-machine",level:3},{value:"Distributed Key Generation",id:"distributed-key-generation",level:2},{value:"What are the min and max numbers of operators for a Distributed Validator?",id:"what-are-the-min-and-max-numbers-of-operators-for-a-distributed-validator",level:3},{value:"Debugging Errors in Logs",id:"debugging-errors-in-logs",level:2}],u={toc:d},c="wrapper";function h(e){let{components:n,...t}=e;return(0,a.yg)(c,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"frequently-asked-questions"},"Frequently asked questions"),(0,a.yg)("h2",{id:"general"},"General"),(0,a.yg)("h3",{id:"does-obol-have-a-token"},"Does Obol have a token?"),(0,a.yg)("p",null,"No. Distributed validators use only Ether."),(0,a.yg)("h3",{id:"where-can-i-learn-more-about-distributed-validators"},"Where can I learn more about Distributed Validators?"),(0,a.yg)("p",null,"Have you checked out our ",(0,a.yg)("a",{parentName:"p",href:"https://blog.obol.tech"},"blog site")," and ",(0,a.yg)("a",{parentName:"p",href:"https://twitter.com/ObolNetwork"},"twitter")," yet? Maybe join our ",(0,a.yg)("a",{parentName:"p",href:"https://discord.gg/n6ebKsX46w"},"discord")," too."),(0,a.yg)("h3",{id:"where-does-the-name-charon-come-from"},"Where does the name Charon come from?"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://www.theoi.com/Khthonios/Kharon.html"},"Charon")," ","[kharon]"," is the Ancient Greek Ferryman of the Dead. He was tasked with bringing people across the Acheron river to the underworld. His fee was one Obol coin, placed in the mouth of the deceased. This tradition of placing a coin or Obol in the mouth of the deceased continues to this day across the Greek world."),(0,a.yg)("h3",{id:"what-are-the-hardware-requirements-for-running-a-charon-node"},"What are the hardware requirements for running a Charon node?"),(0,a.yg)("p",null,"Charon alone uses negligible disk space of not more than a few MBs. However, if you are running your consensus client and execution client on the same server as charon, then you will typically need the same hardware as running a full Ethereum node: "),(0,a.yg)("p",null,"At minimum:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"A CPU with 2+ physical cores (or 4 vCPUs)"),(0,a.yg)("li",{parentName:"ul"},"8GB RAM"),(0,a.yg)("li",{parentName:"ul"},"1.5TB+ free SSD disk space (for mainnet)"),(0,a.yg)("li",{parentName:"ul"},"10mb/s internet bandwidth")),(0,a.yg)("p",null,"Recommended specifications:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"A CPU with 4+ physical cores"),(0,a.yg)("li",{parentName:"ul"},"16GB+ RAM"),(0,a.yg)("li",{parentName:"ul"},"2TB+ free disk on a high performance SSD (e.g. NVMe)"),(0,a.yg)("li",{parentName:"ul"},"25mb/s internet bandwidth")),(0,a.yg)("p",null,"For more hardware considerations, check out the ",(0,a.yg)("a",{parentName:"p",href:"https://ethereum.org/en/developers/docs/nodes-and-clients/run-a-node/#environment-and-hardware"},"ethereum.org guides")," which explores various setups and trade-offs, such as running the node locally or in the cloud."),(0,a.yg)("p",null,"For now, Geth, Teku & Lighthouse clients are packaged within the docker compose file provided in the ",(0,a.yg)("a",{parentName:"p",href:"../quickstart/group"},"quickstart guides"),", so you don't have to install anything else to run a cluster. Just make sure you give them some time to sync once you start running your node."),(0,a.yg)("h3",{id:"what-is-the-difference-between-a-node-a-validator-and-a-cluster"},"What is the difference between a node, a validator and a cluster?"),(0,a.yg)("p",null,"A node is a single instance of Ethereum EL+CL clients that can communicate with other nodes to maintain the Ethereum blockchain."),(0,a.yg)("p",null,"A validator is a node that participates in the consensus process by verifying transactions and creating new blocks. Multiple validators can run from the same node."),(0,a.yg)("p",null,"A cluster is a group of nodes that act together as one or several validators, which allows for a more efficient use of resources, reduces operational costs, and provides better reliability and fault tolerance."),(0,a.yg)("h3",{id:"can-i-migrate-an-existing-charon-node-to-a-new-machine"},"Can I migrate an existing Charon node to a new machine?"),(0,a.yg)("p",null,"It is possible to migrate your Charon node to another machine running the same config by moving the ",(0,a.yg)("inlineCode",{parentName:"p"},".charon")," folder with its contents to your new machine. Make sure the EL and CL on the new machine are synced before proceeding to the move to minimize downtime. "),(0,a.yg)("h2",{id:"distributed-key-generation"},"Distributed Key Generation"),(0,a.yg)("h3",{id:"what-are-the-min-and-max-numbers-of-operators-for-a-distributed-validator"},"What are the min and max numbers of operators for a Distributed Validator?"),(0,a.yg)("p",null,"Currently, the minimum is 4 operators with a threshold of 3."),(0,a.yg)("p",null,"The threshold (aka quorum) corresponds to the minimum numbers of operators that need to be active for the validator(s) to be able to perform its duties. It is defined by the following formula ",(0,a.yg)("inlineCode",{parentName:"p"},"n-(ceil(n/3)-1)"),". We strongly recommend using this default threshold in your DKG as it maximises liveness while maintaining BFT safety. Setting a 4 out of 4 cluster for example, would make your validator more vulnerable to going offline instead of less vulnerable. You can check the recommended threshold values for a cluster ",(0,a.yg)("a",{parentName:"p",href:"/docs/v0.16.0/int/key-concepts#distributed-validator-threshold"},"here"),"."),(0,a.yg)("h2",{id:"debugging-errors-in-logs"},"Debugging Errors in Logs"),(0,a.yg)("p",null,"You can check if the containers on your node are outputting errors by running ",(0,a.yg)("inlineCode",{parentName:"p"},"docker compose logs")," on a machine with a running cluster."),(0,a.yg)("p",null,"Diagnose some common errors and view their resolutions ",(0,a.yg)("a",{parentName:"p",href:"/docs/v0.16.0/int/faq/errors"},"here"),"."))}h.isMDXComponent=!0}}]);