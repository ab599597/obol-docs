"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[61585],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>y});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(a),h=r,y=d["".concat(s,".").concat(h)]||d[h]||p[h]||o;return a?n.createElement(y,i(i({ref:t},c),{},{components:a})):n.createElement(y,i({ref:t},c))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},7227:(e,t,a)=>{a.d(t,{A:()=>i});var n=a(96540),r=a(20053);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,i),hidden:a},t)}},49489:(e,t,a)=>{a.d(t,{A:()=>k});var n=a(58168),r=a(96540),o=a(20053),i=a(24245),l=a(56347),s=a(62814),u=a(45167),c=a(81269);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function y(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.W6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=p(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,u]=y({queryString:a,groupId:n}),[d,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Dv)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),m=(()=>{const e=s??d;return h({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{m&&l(m)}),[m]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),g(e)}),[u,g,o]),tabValues:o}}var m=a(11062);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),p=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==l&&(d(t),s(n))},h=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.A)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:h,onClick:p},i,{className:(0,o.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":l===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=g(e);return r.createElement("div",{className:(0,o.A)("tabs-container",f.tabList)},r.createElement(b,(0,n.A)({},e,t)),r.createElement(v,(0,n.A)({},e,t)))}function k(e){const t=(0,m.A)();return r.createElement(w,(0,n.A)({key:String(t)},e))}},82352:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>y,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var n=a(58168),r=(a(96540),a(15680)),o=a(49489),i=a(7227);const l={sidebar_position:4,description:"Create a DV with a group"},s="Create a DV with a group",u={unversionedId:"start/quickstart_group",id:"version-v0.19.1/start/quickstart_group",title:"Create a DV with a group",description:"Create a DV with a group",source:"@site/versioned_docs/version-v0.19.1/start/quickstart_group.md",sourceDirName:"start",slug:"/start/quickstart_group",permalink:"/docs/v0.19.1/start/quickstart_group",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.19.1/start/quickstart_group.md",tags:[],version:"v0.19.1",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"Create a DV with a group"},sidebar:"tutorialSidebar",previous:{title:"Create a DV alone",permalink:"/docs/v0.19.1/start/quickstart_alone"},next:{title:"Activate a DV",permalink:"/docs/v0.19.1/start/activate-dv"}},c={},d=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Step 1: Generate an ENR",id:"step-1-generate-an-enr",level:2},{value:"Step 2: Create a cluster or accept an invitation to a cluster",id:"step-2-create-a-cluster-or-accept-an-invitation-to-a-cluster",level:2},{value:"Step 3: Run the Distributed Key Generation (DKG) ceremony",id:"step-3-run-the-distributed-key-generation-dkg-ceremony",level:2},{value:"Step 4: Start your Distributed Validator Node",id:"step-4-start-your-distributed-validator-node",level:2},{value:"Using a pre-existing beacon node",id:"using-a-pre-existing-beacon-node",level:4}],p={toc:d},h="wrapper";function y(e){let{components:t,...l}=e;return(0,r.yg)(h,(0,n.A)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"create-a-dv-with-a-group"},"Create a DV with a group"),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"Charon is in a beta state and should be used with caution according to its ",(0,r.yg)("a",{parentName:"p",href:"https://obol.tech/terms.pdf"},"Terms of Use"),".")),(0,r.yg)("p",null,"This quickstart guide will walk you through creating a Distributed Validator Cluster with a number of other node operators."),(0,r.yg)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,r.yg)("ul",null,(0,r.yg)("li",null,"A basic"," ",(0,r.yg)("a",{href:"https://docs.ethstaker.cc/ethstaker-knowledge-base/",target:"_blank"},"knowledge")," ","of Ethereum nodes and validators."),(0,r.yg)("li",null,"Ensure you have"," ",(0,r.yg)("a",{href:"https://git-scm.com/downloads",target:"_blank"},"git")," ","installed."),(0,r.yg)("li",null,"Ensure you have"," ",(0,r.yg)("a",{href:"https://docs.docker.com/engine/install/",target:"_blank"},"docker")," ","installed."," "),(0,r.yg)("li",null,"Make sure ",(0,r.yg)("code",null,"docker")," is running before executing the commands below.")),(0,r.yg)("br",null),(0,r.yg)("h2",{id:"step-1-generate-an-enr"},"Step 1: Generate an ENR"),(0,r.yg)("p",null,"In order to prepare for a distributed key generation ceremony, you need to create an ENR for your charon client. This ENR is a public/private key pair that allows the other charon clients in the DKG to identify and connect to your node. If you are creating a cluster but not taking part as a node operator in it, you can skip this step."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'# Clone the repo\ngit clone https://github.com/ObolNetwork/charon-distributed-validator-node.git\n\n# Change directory\ncd charon-distributed-validator-node/\n\n# Use docker to create an ENR. Backup the file `.charon/charon-enr-private-key`.\ndocker run --rm -v "$(pwd):/opt/charon" obolnetwork/charon:v0.19.1 create enr\n')),(0,r.yg)("p",null,"You should expect to see a console output like this:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"Created ENR private key: .charon/charon-enr-private-key\nenr:-JG4QGQpV4qYe32QFUAbY1UyGNtNcrVMip83cvJRhw1brMslPeyELIz3q6dsZ7GblVaCjL_8FKQhF6Syg-O_kIWztimGAYHY5EvPgmlkgnY0gmlwhH8AAAGJc2VjcDI1NmsxoQKzMe_GFPpSqtnYl-mJr8uZAUtmkqccsAx7ojGmFy-FY4N0Y3CCDhqDdWRwgg4u\n")),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"Please make sure to create a backup of the private key at ",(0,r.yg)("inlineCode",{parentName:"p"},".charon/charon-enr-private-key"),". Be careful not to commit it to git! ",(0,r.yg)("strong",{parentName:"p"},"If you lose this file you won't be able to take part in the DKG ceremony nor start the DV cluster successfully."))),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"If instead of being shown your ",(0,r.yg)("inlineCode",{parentName:"p"},"enr")," you see an error saying ",(0,r.yg)("inlineCode",{parentName:"p"},"permission denied")," then you may need to ",(0,r.yg)("a",{parentName:"p",href:"../int/faq/errors#docker-permission-denied-error"},"update your docker permissions")," to allow the command to run successfully.")),(0,r.yg)("p",null,"For the next step, select the ",(0,r.yg)("em",{parentName:"p"},"Creator")," tab if you are coordinating the creation of the cluster. (This role holds no position of privilege in the cluster, it only sets the initial terms of the cluster that the other operators agree to.) Select the ",(0,r.yg)("em",{parentName:"p"},"Operator")," tab if you are accepting an invitation to operate a node in a cluster proposed by the cluster creator."),(0,r.yg)("h2",{id:"step-2-create-a-cluster-or-accept-an-invitation-to-a-cluster"},"Step 2: Create a cluster or accept an invitation to a cluster"),(0,r.yg)(o.A,{groupId:"Creator",mdxType:"Tabs"},(0,r.yg)(i.A,{value:"Creator",label:"Creator",default:!0,mdxType:"TabItem"},(0,r.yg)("h2",null," Collect addresses, configure the cluster, share the invitation"),(0,r.yg)("p",null,"Before starting the cluster creation process, you will need to collect an Ethereum address for each operator in the cluster. They will need to be able to sign messages through MetaMask with this address.",(0,r.yg)("i",null,"(Broader wallet support will be added in future.)")," With these addresses in hand, go through the cluster creation flow."),(0,r.yg)(o.A,{groupId:"Launchpad-other",mdxType:"Tabs"},(0,r.yg)(i.A,{value:"Launchpad",label:"Launchpad",default:!0,mdxType:"TabItem"},"You will use the Launchpad to create an invitation, and share it with the operators.",(0,r.yg)("br",null),"This video shows the flow within the"," ",(0,r.yg)("a",{href:"/docs/dvl/intro#dv-launchpad-links",target:"_blank"},"DV Launchpad"),":",(0,r.yg)("p",{align:"center"},(0,r.yg)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/6pXASqjAQbs",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,r.yg)("p",null,"The following are the steps for creating a cluster.",(0,r.yg)("ol",null,(0,r.yg)("li",null,"Go to the"," ",(0,r.yg)("a",{href:"/docs/dvl/intro#dv-launchpad-links"},"DV Launchpad")),(0,r.yg)("li",null,"Connect your wallet",(0,r.yg)("img",{src:"/img/Guide01.png",alt:"Connect your wallet"})),(0,r.yg)("li",null,"Select ",(0,r.yg)("code",null,"Create a Cluster with a group")," then"," ",(0,r.yg)("code",null,"Get Started"),".",(0,r.yg)("img",{src:"/img/Guide02.png",alt:"Get started"})),(0,r.yg)("li",null,"Follow the flow and accept the advisories."),(0,r.yg)("li",null,"Configure the Cluster"),(0,r.yg)("ul",null,(0,r.yg)("li",null,"Input the ",(0,r.yg)("code",null,"Cluster Name")," & ",(0,r.yg)("code",null,"Cluster Size")," ","(i.e. number of operators in the cluster). The threshold will update automatically, it shows the number of nodes that need to be functioning for the validator(s) to stay active.")),(0,r.yg)("li",null,'Input the Ethereum addresses for each operator that you collected previously. If you will be taking part as an operator, click the "Use My Address" button for Operator 1.'),(0,r.yg)("ul",null,(0,r.yg)("li",null,"Select the desired amount of validators (32 ETH each) the cluster will run. (Note that the mainnet launchpad is restricted to one validator for now.)"),(0,r.yg)("li",null,"If you are taking part in the cluster, enter the ENR you generated in ",(0,r.yg)("a",{href:"#step-1-generate-an-enr"},"step one"),' in the "What is your charon client\'s ENR?" field.'),(0,r.yg)("li",null,"Enter the ",(0,r.yg)("code",null,"Principal address")," which should receive the principal 32 ETH and the accrued consensus layer rewards when the validator is exited. This can optionally be set to the contract address of a multisig / splitter contract."),(0,r.yg)("li",null,"Enter the ",(0,r.yg)("code",null,"Fee Recipient address")," to which the execution layer rewards will go. This can be the same as the principal address, or it can be a different address. This can optionally be set to the contract address of a multisig / splitter contract.")),(0,r.yg)("li",null,"Click ",(0,r.yg)("code",null,"Create Cluster Configuration"),". Review that all the details are correct, and press ",(0,r.yg)("code",null,"Confirm and Sign")," ","You will be prompted to sign two or three transactions with your MetaMask wallet. These are:"),(0,r.yg)("ul",null,(0,r.yg)("li",null,"The ",(0,r.yg)("code",null,"config_hash"),". This is a hashed representation of the details of this cluster, to ensure everyone is agreeing to an identical setup."),(0,r.yg)("li",null,"The ",(0,r.yg)("code",null,"operator_config_hash"),". This is your acceptance of the terms and conditions of participating as a node operator."),(0,r.yg)("li",null,"Your ",(0,r.yg)("code",null,"ENR"),". Signing your ENR authorises the corresponding private key to act on your behalf in the cluster.")),(0,r.yg)("li",null,"Share your cluster invite link with the operators. Following the link will show you a screen waiting for other operators to accept the configuration you created.",(0,r.yg)("img",{src:"/img/Guide04.png",alt:"Invite Operators"})),(0,r.yg)("li",null,"You can use the link to monitor how many of the operators have already signed their approval of the cluster configuration and submitted their ENR.")))),(0,r.yg)(i.A,{value:"CLI",label:"CLI",mdxType:"TabItem"},(0,r.yg)("p",null,"You will use the CLI to create the cluster definition file, which you will distribute it to the operators manually.",(0,r.yg)("ol",null,(0,r.yg)("li",null,"The leader or creator of the cluster will prepare the",(0,r.yg)("code",null,"cluster-definition.json")," file for the Distributed Key Generation ceremony using the ",(0,r.yg)("code",null,"charon create dkg")," command."),(0,r.yg)("li",null,"Populate the ",(0,r.yg)("code",null,"charon create dkg")," command with the appropriate flags including the ",(0,r.yg)("code",null,"name"),", the"," ",(0,r.yg)("code",null,"num-validators"),", the"," ",(0,r.yg)("code",null,"fee-recipient-addresses"),", the"," ",(0,r.yg)("code",null,"withdrawal-addresses"),", and the"," ",(0,r.yg)("code",null,"operator-enrs")," of all the operators participating in the cluster."),(0,r.yg)("li",null,"Run the ",(0,r.yg)("code",null,"charon create dkg"),' command that generates DKG cluster-definition.json file. (Note: in the "docker run" command, you may have to change the version from v0.19.0 to the correct version of the repo you are using)',(0,r.yg)("pre",null,'docker run --rm -v "$(pwd):/opt/charon" obolnetwork/charon:v0.19.0 create dkg --name="Quickstart" --num-validators=1 --fee-recipient-addresses="0x0000000000000000000000000000000000000000" --withdrawal-addresses="0x0000000000000000000000000000000000000000" --operator-enrs="enr:-JG4QGQpV4qYe32QFUAbY1UyGNtNcrVMip83cvJRhw1brMslPeyELIz3q6dsZ7GblVaCjL_8FKQhF6Syg-O_kIWztimGAYHY5EvPgmlkgnY0gmlwhH8AAAGJc2VjcDI1NmsxoQKzMe_GFPpSqtnYl-mJr8uZAUtmkqccsAx7ojGmFy-FY4N0Y3CCDhqDdWRwgg4u"'),"This command should output a file at",(0,r.yg)("code",null,".charon/cluster-definition.json")," This file needs to be shared with the other operators in a cluster.",(0,r.yg)("ul",null,(0,r.yg)("li",null,"The ",(0,r.yg)("code",null,".charon")," folder is hidden by default. To view it, run ",(0,r.yg)("code",null,"ls -al .charon")," in your terminal. Else, if you are on ",(0,r.yg)("code",null,"macOS"),", press"," ",(0,r.yg)("code",null,"Cmd + Shift + .")," to view all hidden files in the finder application.")))))))),(0,r.yg)(i.A,{value:"Operator",label:"Operator",mdxType:"TabItem"},(0,r.yg)("h2",null,"Join the cluster prepared by the creator"),"Use the Launchpad or CLI to join the cluster configuration generated by the creator:",(0,r.yg)(o.A,{groupId:"Launchpad-other",mdxType:"Tabs"},(0,r.yg)(i.A,{value:"Launchpad",label:"Launchpad",default:!0,mdxType:"TabItem"},"Your cluster creator needs to configure the cluster, and send you an invite URL link to join the cluster on the Launchpad. Once you've received the Launchpad invite link, you can begin the cluster acceptance process.",(0,r.yg)("p",{align:"center"},(0,r.yg)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/6pXASqjAQbs",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,r.yg)("ol",null,(0,r.yg)("li",null,"Click on the DV launchpad link provided by the leader or creator. Make sure you recognise the domain and the person sending you the link, to ensure you are not being phished."),(0,r.yg)("li",null,"Connect your wallet using the Ethereum address provided to the leader. ",(0,r.yg)("img",{src:"/img/Guide05.png",alt:"Connect Wallet"})),(0,r.yg)("li",null,"Review the operators addresses submitted and click ",(0,r.yg)("code",null,"Get Started")," to continue. ",(0,r.yg)("img",{src:"/img/Guide06.png",alt:"Get Started"})),(0,r.yg)("li",null,"Review and accept the DV Launchpad terms & conditions and advisories. "),(0,r.yg)("li",null,"Review the cluster configuration set by the creator and add your",(0,r.yg)("code",null,"ENR")," that you generated in ",(0,r.yg)("a",{href:"#step-1-generate-an-enr"},"step 1"),".",(0,r.yg)("img",{src:"/img/Guide07.png",alt:"Review Config"})),(0,r.yg)("li",null,"Sign the two transactions with your wallet, these are:",(0,r.yg)("ul",null,"The config hash. This is a hashed representation of all of the details for this cluster."),(0,r.yg)("ul",null,"Your own ",(0,r.yg)("code",null,"ENR")," This signature authorises the key represented by this ENR to act on your behalf in the cluster.")),(0,r.yg)("li",null,"Wait for all the other operators in your cluster to also finish these steps."))),(0,r.yg)(i.A,{value:"CLI",label:"CLI",mdxType:"TabItem"},"You'll receive the ",(0,r.yg)("code",null,"cluster-definition.json")," file created by the leader/creator. You should save it in the ",(0,r.yg)("code",null,".charon/")," ","folder that was created initially. (Alternatively, you can use the"," ",(0,r.yg)("code",null,"--definition-file"),"flag to override the default expected location for this file.)")))),(0,r.yg)("p",null,"Once every participating operator is ready, the next step is the distributed key generation amongst the operators."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"If you are not planning on operating a node, and were only configuring the cluster for the operators, your journey ends here. Well done!"),(0,r.yg)("li",{parentName:"ul"},"If you are one of the cluster operators, continue to the next step.")),(0,r.yg)("h2",{id:"step-3-run-the-distributed-key-generation-dkg-ceremony"},"Step 3: Run the Distributed Key Generation (DKG) ceremony"),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"For the ",(0,r.yg)("a",{parentName:"p",href:"/docs/v0.19.1/charon/dkg"},"DKG")," to complete, all operators need to be running the command simultaneously. It helps if operators can agreed on a certain time or schedule a video call for them to all run the command together.")),(0,r.yg)(o.A,{groupId:"Launchpad-other",mdxType:"Tabs"},(0,r.yg)(i.A,{value:"Launchpad",label:"Launchpad",default:!0,mdxType:"TabItem"},(0,r.yg)("p",{align:"center"},(0,r.yg)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/cEMhxHuNJrI",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Once all operators successfully signed, your screen will automatically advance to the next step and look like this. Click ",(0,r.yg)("inlineCode",{parentName:"li"},"Continue"),". (If you closed the tab, you can always go back to the invite link shared by the leader and connect your wallet.)")),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Config Signing Success",src:a(98009).A,width:"2864",height:"2164"})),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Copy and run the ",(0,r.yg)("inlineCode",{parentName:"p"},"docker")," command on the screen into your terminal. It will retrieve the remote cluster details and begin the DKG process."),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("img",{alt:"Run the DKG",src:a(32646).A,width:"1897",height:"1388"}))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Assuming the DKG is successful, a number of artefacts will be created in the ",(0,r.yg)("inlineCode",{parentName:"p"},".charon")," folder of the node. These include:"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"A ",(0,r.yg)("inlineCode",{parentName:"li"},"deposit-data.json")," file. This contains the information needed to activate the validator on the Ethereum network."),(0,r.yg)("li",{parentName:"ul"},"A ",(0,r.yg)("inlineCode",{parentName:"li"},"cluster-lock.json")," file. This contains the information needed by charon to operate the distributed validator cluster with its peers."),(0,r.yg)("li",{parentName:"ul"},"A ",(0,r.yg)("inlineCode",{parentName:"li"},"validator_keys/")," folder. This folder contains the private key shares and passwords for the created distributed validators."))))),(0,r.yg)(i.A,{value:"CLI",label:"CLI",mdxType:"TabItem"},"Once the creator gives you the ",(0,r.yg)("code",null,"cluster-definition.json")," file and you place it in a ",(0,r.yg)("code",null,".charon")," subdirectory, run: ",(0,r.yg)("pre",null,'docker run --rm -v "$(pwd):/opt/charon" obolnetwork/charon:v0.19.0 dkg --publish')," and the DKG process should begin.")),(0,r.yg)("admonition",{type:"warning"},(0,r.yg)("p",{parentName:"admonition"},"Please make sure to create a backup of your ",(0,r.yg)("inlineCode",{parentName:"p"},".charon/")," folder. ",(0,r.yg)("strong",{parentName:"p"},"If you lose your private keys you won't be able to start the DV cluster successfully and may risk your validator deposit becoming unrecoverable.")," Ensure every operator has their ",(0,r.yg)("inlineCode",{parentName:"p"},".charon")," folder securely and privately backed up before activating any validators.")),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"The ",(0,r.yg)("inlineCode",{parentName:"p"},"cluster-lock")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"deposit-data")," files are identical for each operator, if lost, they can be copied from one operator to another.")),(0,r.yg)("p",null,"Now that the DKG has been completed, all operators can start their nodes."),(0,r.yg)("h2",{id:"step-4-start-your-distributed-validator-node"},"Step 4: Start your Distributed Validator Node"),(0,r.yg)("p",null,"With the DKG ceremony over, the last phase before activation is to prepare your node for validating over the long term."),(0,r.yg)(o.A,{groupId:"Full-Pre-Existing",mdxType:"Tabs"},(0,r.yg)(i.A,{value:"Full Node",label:"Full Node",default:!0,mdxType:"TabItem"},"The quickstart ",(0,r.yg)("a",{href:"https://github.com/ObolNetwork/charon-distributed-validator-node",target:"_blank"},"repository")," is configured to sync an execution layer client (",(0,r.yg)("code",null,"Nethermind"),") and a consensus layer client (",(0,r.yg)("code",null,"Lighthouse"),"). You can also leverage alternative ways to run a node such as Ansible, Helm, or Kubernetes manifests.",(0,r.yg)(o.A,{groupId:"Docker-Helm",mdxType:"Tabs"},(0,r.yg)(i.A,{value:"Docker",label:"Docker",default:!0,mdxType:"TabItem"},(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"Currently, the quickstart ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/ObolNetwork/charon-distributed-validator-node"},"repo")," configures a node for the Holesky testnet. It is possible to choose a different network (another testnet, or mainnet) by overriding the ",(0,r.yg)("inlineCode",{parentName:"p"},".env")," file.\nFrom within the ",(0,r.yg)("inlineCode",{parentName:"p"},"charon-distributed-validator-node")," directory:"),(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("inlineCode",{parentName:"p"},".env.sample")," is a sample environment file that allows overriding default configuration defined in ",(0,r.yg)("inlineCode",{parentName:"p"},"docker-compose.yml"),". Uncomment and set any variable to override its value."),(0,r.yg)("p",{parentName:"admonition"},"Setup the desired inputs for the DV, including the network you wish to operate on. Check the ",(0,r.yg)("a",{parentName:"p",href:"/docs/v0.19.1/charon/charon-cli-reference"},"Charon CLI reference")," for additional optional flags to set."),(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'# Copy ".env.sample", renaming it ".env"\ncp .env.sample .env\n'))),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"If you manually update ",(0,r.yg)("inlineCode",{parentName:"p"},"docker compose")," to mount ",(0,r.yg)("inlineCode",{parentName:"p"},"lighthouse")," from your locally synced ",(0,r.yg)("inlineCode",{parentName:"p"},"~/.lighthouse"),", the whole chain database may get deleted. It'd be best not to manually update as ",(0,r.yg)("inlineCode",{parentName:"p"},"lighthouse")," checkpoint-syncs so the syncing doesn't take much time.",(0,r.yg)("br",null)),(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("strong",{parentName:"p"},"Note"),": If you have a ",(0,r.yg)("inlineCode",{parentName:"p"},"nethermind")," node already synced, you can simply copy over the directory. For ex: ",(0,r.yg)("inlineCode",{parentName:"p"},"cp -r ~/.ethereum/goerli data/nethermind"),". This makes everything faster since you start from a synced nethermind node.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"# Delete lighthouse data if it exists\nrm -r ./data/lighthouse\n\n# Spin up a Distributed Validator Node with a Validator Client\ndocker compose up -d\n\n")),(0,r.yg)("p",null,"If at any point you need to turn off your node, you can run:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"# Shut down the currently running distributed validator node\ndocker compose down\n")),(0,r.yg)("p",null,"You should use the grafana dashboard that accompanies the quickstart repo to see whether your cluster is healthy."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"# Open Grafana dashboard\nopen http://localhost:3000/d/singlenode/\n")),(0,r.yg)("p",null,"In particular you should check:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"That your charon client can connect to the configured beacon client."),(0,r.yg)("li",{parentName:"ul"},"That your charon client can connect to all peers directly."),(0,r.yg)("li",{parentName:"ul"},"That your validator client is connected to charon, and has the private keys it needs loaded and accessible.")),(0,r.yg)("p",null,"Most components in the dashboard have some help text there to assist you in understanding your cluster performance."),(0,r.yg)("p",null,"You might notice that there are logs indicating that a validator cannot be found and that APIs are returning 404. This is to be expected at this point, as the validator public keys listed in the lock file have not been deposited and acknowledged on the consensus layer yet (usually ~16 hours after the deposit is made).")),(0,r.yg)(i.A,{value:"Ansible",label:"Ansible",mdxType:"TabItem"},"Use an ansible playbook to start your node. ",(0,r.yg)("a",{href:"https://github.com/ObolNetwork/obol-ansible",target:"_blank"},"See the repo here")," for further instructions."),(0,r.yg)(i.A,{value:"Helm",label:"Helm",mdxType:"TabItem"},"Use a Helm to start your node. ",(0,r.yg)("a",{href:"https://github.com/ObolNetwork/helm-charts",target:"_blank"},"See the repo here")," for further instructions."),(0,r.yg)(i.A,{value:"Kubernetes",label:"Kubernetes",mdxType:"TabItem"},"Use Kubernetes manifests to start your charon client and validator client. These manifests expect an existing Beacon Node Endpoint to connect to. ",(0,r.yg)("a",{href:"https://github.com/ObolNetwork/charon-k8s-distributed-validator-node",target:"_blank"},"See the repo here")," for further instructions."))),(0,r.yg)(i.A,{value:"Existing Beacon Node",label:"Existing Beacon Node",mdxType:"TabItem"},(0,r.yg)("h4",{id:"using-a-pre-existing-beacon-node"},"Using a pre-existing beacon node"),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"Using a remote beacon node will impact the performance of your Distributed Validator and should be used sparingly.")),(0,r.yg)("p",null,"If you already have a beacon node running somewhere and you want to use that instead of running an EL (",(0,r.yg)("inlineCode",{parentName:"p"},"nethermind"),") & CL (",(0,r.yg)("inlineCode",{parentName:"p"},"lighthouse"),") as part of the example repo, you can disable these images. To do so, follow these steps:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Copy the ",(0,r.yg)("inlineCode",{parentName:"li"},"docker-compose.override.yml.sample")," file")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"cp -n docker-compose.override.yml.sample docker-compose.override.yml\n")),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"Uncomment the ",(0,r.yg)("inlineCode",{parentName:"li"},"profiles: [disable]")," section for both ",(0,r.yg)("inlineCode",{parentName:"li"},"nethermind")," and ",(0,r.yg)("inlineCode",{parentName:"li"},"lighthouse"),". The override file should now look like this")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"services:\n  nethermind:\n    # Disable nethermind\n    profiles: [disable]\n    # Bind nethermind internal ports to host ports\n    #ports:\n      #- 8545:8545 # JSON-RPC\n      #- 8551:8551 # AUTH-RPC\n      #- 6060:6060 # Metrics\n\n  lighthouse:\n    # Disable lighthouse\n    profiles: [disable]\n    # Bind lighthouse internal ports to host ports\n    #ports:\n      #- 5052:5052 # HTTP\n      #- 5054:5054 # Metrics\n...\n")),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"Then, uncomment and set the ",(0,r.yg)("inlineCode",{parentName:"li"},"CHARON_BEACON_NODE_ENDPOINTS")," variable in the ",(0,r.yg)("inlineCode",{parentName:"li"},".env")," file to your beacon node's URL")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"...\n# Connect to one or more external beacon nodes. Use a comma separated list excluding spaces.\nCHARON_BEACON_NODE_ENDPOINTS=<YOUR_REMOTE_BEACON_NODE_URL>\n...\n")),(0,r.yg)("ol",{start:4},(0,r.yg)("li",{parentName:"ol"},"Restart your docker compose")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"docker compose down\ndocker compose up -d\n")))),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"In a Distributed Validator Cluster, it is important to have a low latency connection to your peers. Charon clients will use the NAT protocol to attempt to establish a direct connection to one another automatically. If this doesn't happen, you should port forward charon's p2p port to the public internet to facilitate direct connections. (The default port to expose is ",(0,r.yg)("inlineCode",{parentName:"p"},":3610"),"). Read more about charon's networking ",(0,r.yg)("a",{parentName:"p",href:"/docs/v0.19.1/charon/networking"},"here"),".")),(0,r.yg)("p",null,"If you have gotten to this stage, every node is up, synced and connected, congratulations. You can now move forward to activating your validator to begin staking."))}y.isMDXComponent=!0},98009:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/Guide08-46621accb14c6c81d266bc55adb43621.png"},32646:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/Guide10-66d7c37171ee24ff1b6f7118308c6a29.png"}}]);