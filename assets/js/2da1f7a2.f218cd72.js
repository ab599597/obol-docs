"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[78715],{15680:(e,t,r)=>{r.d(t,{xA:()=>d,yg:()=>g});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(r),y=n,g=c["".concat(s,".").concat(y)]||c[y]||u[y]||o;return r?a.createElement(g,i(i({ref:t},d),{},{components:r})):a.createElement(g,i({ref:t},d))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},34026:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=r(58168),n=(r(96540),r(15680));const o={sidebar_position:1,description:"A node operator joins a DV cluster"},i="Operator Journey",l={unversionedId:"int/quickstart/group/quickstart-group-operator",id:"version-v0.18.0/int/quickstart/group/quickstart-group-operator",title:"Operator Journey",description:"A node operator joins a DV cluster",source:"@site/versioned_docs/version-v0.18.0/int/quickstart/group/quickstart-group-operator.md",sourceDirName:"int/quickstart/group",slug:"/int/quickstart/group/quickstart-group-operator",permalink:"/docs/v0.18.0/int/quickstart/group/quickstart-group-operator",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.18.0/int/quickstart/group/quickstart-group-operator.md",tags:[],version:"v0.18.0",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"A node operator joins a DV cluster"},sidebar:"tutorialSidebar",previous:{title:"Creator & Leader Journey",permalink:"/docs/v0.18.0/int/quickstart/group/quickstart-group-leader-creator"},next:{title:"Using the CLI",permalink:"/docs/v0.18.0/int/quickstart/group/quickstart-cli"}},s={},p=[{value:"Overview Video",id:"overview-video",level:2},{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Step 1. Share an Ethereum address with your Leader or Creator",id:"step-1-share-an-ethereum-address-with-your-leader-or-creator",level:2},{value:"Step 2. Create and back up a private key for charon",id:"step-2-create-and-back-up-a-private-key-for-charon",level:2},{value:"Step 3. Join and sign the cluster configuration",id:"step-3-join-and-sign-the-cluster-configuration",level:2},{value:"Step 4. Run the DKG",id:"step-4-run-the-dkg",level:2},{value:"Overview",id:"overview",level:3},{value:"Step 5. Start your Distributed Validator Node",id:"step-5-start-your-distributed-validator-node",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...o}=e;return(0,n.yg)(c,(0,a.A)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"operator-journey"},"Operator Journey"),(0,n.yg)("admonition",{type:"caution"},(0,n.yg)("p",{parentName:"admonition"},"Charon is in a beta state and should be used with caution according to its ",(0,n.yg)("a",{parentName:"p",href:"https://obol.tech/terms.pdf"},"Terms of Use"),".")),(0,n.yg)("p",null,"The following instructions aim to assist a group of operators coordinating together to create a distributed validator cluster after receiving an cluster invite link from a leader or creator."),(0,n.yg)("h2",{id:"overview-video"},"Overview Video"),(0,n.yg)("p",{align:"center"},(0,n.yg)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/6pXASqjAQbs",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,n.yg)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Ensure you have ",(0,n.yg)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/"},"docker")," installed."),(0,n.yg)("li",{parentName:"ul"},"Ensure you have ",(0,n.yg)("a",{parentName:"li",href:"https://git-scm.com/downloads"},"git")," installed. "),(0,n.yg)("li",{parentName:"ul"},"Make sure ",(0,n.yg)("inlineCode",{parentName:"li"},"docker")," is running before executing the commands below.")),(0,n.yg)("h2",{id:"step-1-share-an-ethereum-address-with-your-leader-or-creator"},"Step 1. Share an Ethereum address with your Leader or Creator"),(0,n.yg)("p",null,"Before starting the cluster creation, make sure you have shared an Ethereum address with your cluster ",(0,n.yg)("strong",{parentName:"p"},"Leader")," or ",(0,n.yg)("strong",{parentName:"p"},"Creator"),". If you haven't chosen someone as a Leader or Creator yet, please go back to the ",(0,n.yg)("a",{parentName:"p",href:"/docs/v0.18.0/int/quickstart/group/"},"Quickstart intro")," and define one person to go through the ",(0,n.yg)("a",{parentName:"p",href:"./quickstart-group-leader-creator"},"Leader & Creator Journey")," before moving forward. "),(0,n.yg)("h2",{id:"step-2-create-and-back-up-a-private-key-for-charon"},"Step 2. Create and back up a private key for charon"),(0,n.yg)("p",null,"In order to prepare for a distributed key generation ceremony, you need to create an ",(0,n.yg)("a",{parentName:"p",href:"/docs/v0.18.0/int/faq/errors#enrs-keys"},"ENR")," for your charon client. This ENR is a public/private key pair, and allows the other charon clients in the DKG to identify and connect to your node."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sh"},'# Clone this repo\ngit clone https://github.com/ObolNetwork/charon-distributed-validator-node.git\n\n# Change directory\ncd charon-distributed-validator-node\n\n# Create your charon ENR private key, this will create a charon-enr-private-key file in the .charon directory\ndocker run --rm -v "$(pwd):/opt/charon" obolnetwork/charon:v0.18.0 create enr\n')),(0,n.yg)("p",null,"You should expect to see a console output like"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"Created ENR private key: .charon/charon-enr-private-key\nenr:-JG4QGQpV4qYe32QFUAbY1UyGNtNcrVMip83cvJRhw1brMslPeyELIz3q6dsZ7GblVaCjL_8FKQhF6Syg-O_kIWztimGAYHY5EvPgmlkgnY0gmlwhH8AAAGJc2VjcDI1NmsxoQKzMe_GFPpSqtnYl-mJr8uZAUtmkqccsAx7ojGmFy-FY4N0Y3CCDhqDdWRwgg4u\n")),(0,n.yg)("p",null,"If instead of being shown your ",(0,n.yg)("inlineCode",{parentName:"p"},"enr")," you see an error saying ",(0,n.yg)("inlineCode",{parentName:"p"},"permission denied")," then you may need to ",(0,n.yg)("a",{parentName:"p",href:"../../faq/errors#docker-permission-denied-error"},"update docker permissions")," to allow the command to run successfully."),(0,n.yg)("admonition",{type:"caution"},(0,n.yg)("p",{parentName:"admonition"},"Please make sure to create a backup of the private key at ",(0,n.yg)("inlineCode",{parentName:"p"},".charon/charon-enr-private-key"),". Be careful not to commit it to git! ",(0,n.yg)("strong",{parentName:"p"},"If you lose this file you won't be able to take part in the DKG ceremony and start the DV cluster successfully."))),(0,n.yg)("h2",{id:"step-3-join-and-sign-the-cluster-configuration"},"Step 3. Join and sign the cluster configuration"),(0,n.yg)("p",null,"After receiving the invite link created by the ",(0,n.yg)("strong",{parentName:"p"},"Leader")," or ",(0,n.yg)("strong",{parentName:"p"},"Creator"),", you will be able to join and sign the cluster configuration created."),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Go to the DV launchpad link provided by the leader or creator.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Connect your wallet using the Ethereum address provided to the leader in ",(0,n.yg)("a",{parentName:"p",href:"#step-1-share-an-ethereum-address-with-your-leader-or-creator"},"step 1"),"."),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("img",{alt:"Connect Wallet",src:r(540).A,width:"1784",height:"607"}))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Review the operators addresses submitted and click ",(0,n.yg)("inlineCode",{parentName:"p"},"Get Started")," to continue."),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("img",{alt:"Get Started",src:r(8119).A,width:"1884",height:"1760"}))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Review and accept the advisories.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Review the configuration created by the leader or creator and add your ",(0,n.yg)("inlineCode",{parentName:"p"},"ENR")," generated in ",(0,n.yg)("a",{parentName:"p",href:"#step-2-create-and-back-up-a-private-key-for-charon"},"step 2"),"."),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("img",{alt:"Review Config",src:r(24974).A,width:"1898",height:"2768"}))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Sign the following with your wallet "),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"The config hash. This is a hashed representation of all of the details for this cluster. "),(0,n.yg)("li",{parentName:"ul"},"Your own ",(0,n.yg)("inlineCode",{parentName:"li"},"ENR"),". This signature authorises the key represented by this ENR to act on your behalf in the cluster."))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Wait for all the other operators in your cluster to do the same."))),(0,n.yg)("h2",{id:"step-4-run-the-dkg"},"Step 4. Run the DKG"),(0,n.yg)("admonition",{type:"info"},(0,n.yg)("p",{parentName:"admonition"},"For the ",(0,n.yg)("a",{parentName:"p",href:"/docs/next/charon/dkg"},"DKG")," to complete, all operators need to be running the command simultaneously. It helps to coordinate an agreed upon time amongst operators at which to run the command.")),(0,n.yg)("h3",{id:"overview"},"Overview"),(0,n.yg)("p",{align:"center"},(0,n.yg)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/cEMhxHuNJrI",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Once all operators successfully signed, your screen will automatically advance to the next step and look like this. Click ",(0,n.yg)("inlineCode",{parentName:"p"},"Continue"),". If you closed the tab, just go back to the invite link shared by the leader and connect your wallet."),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("img",{alt:"Config Signing Success",src:r(98009).A,width:"2864",height:"2164"}))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"You have two options to perform the DKG."),(0,n.yg)("ol",{parentName:"li"},(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Option 1")," and default is to copy and run the ",(0,n.yg)("inlineCode",{parentName:"p"},"docker")," command on the screen into your terminal. It will retrieve the remote cluster details and begin the DKG process.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Option 2")," (Manual DKG) is to download the ",(0,n.yg)("inlineCode",{parentName:"p"},"cluster-definition")," file manually and move it to the hidden ",(0,n.yg)("inlineCode",{parentName:"p"},".charon")," folder. Then, every cluster member participates in the DKG ceremony by running the command displayed."),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("img",{alt:"Run the DKG",src:r(32646).A,width:"1897",height:"1388"}))))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Assuming the DKG is successful, a number of artefacts will be created in the ",(0,n.yg)("inlineCode",{parentName:"p"},".charon")," folder. These include:"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"A ",(0,n.yg)("inlineCode",{parentName:"li"},"deposit-data.json")," file. This contains the information needed to activate the validator on the Ethereum network."),(0,n.yg)("li",{parentName:"ul"},"A ",(0,n.yg)("inlineCode",{parentName:"li"},"cluster-lock.json")," file. This contains the information needed by charon to operate the distributed validator cluster with its peers."),(0,n.yg)("li",{parentName:"ul"},"A ",(0,n.yg)("inlineCode",{parentName:"li"},"validator_keys/")," folder. This folder contains the private key shares and passwords for the created distributed validators.")))),(0,n.yg)("admonition",{type:"caution"},(0,n.yg)("p",{parentName:"admonition"},"Please make sure to create a backup of ",(0,n.yg)("inlineCode",{parentName:"p"},".charon/validator_keys"),". ",(0,n.yg)("strong",{parentName:"p"},"If you lose your keys you won't be able to start the DV cluster successfully."))),(0,n.yg)("admonition",{type:"info"},(0,n.yg)("p",{parentName:"admonition"},"The ",(0,n.yg)("inlineCode",{parentName:"p"},"cluster-lock")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"deposit-data")," files are identical for each operator and can be copied if lost.")),(0,n.yg)("h2",{id:"step-5-start-your-distributed-validator-node"},"Step 5. Start your Distributed Validator Node"),(0,n.yg)("p",null,"With the DKG ceremony over, the last phase before activation is to prepare your node for validating over the long term. This repo is configured to sync an execution layer client (",(0,n.yg)("inlineCode",{parentName:"p"},"geth"),") and a consensus layer client (",(0,n.yg)("inlineCode",{parentName:"p"},"lighthouse"),")."),(0,n.yg)("p",null,"Before completing these instructions, you should assign a static local IP address to your device (extending the DHCP reservation indefinitely or removing the device from the DCHP pool entirely if you prefer), and port forward the TCP protocol on the public port ",(0,n.yg)("inlineCode",{parentName:"p"},":3610")," on your router to your device's local IP address on the same port. This step is different for every person's home internet, and can be complicated by the presence of dynamic public IP addresses. We are currently working on making this as easy as possible, but for the time being, a distributed validator cluster isn't going to work very resiliently if all charon nodes cannot talk directly to one another and instead need to have an intermediary node forwarding traffic to them."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Caution"),": If you manually update ",(0,n.yg)("inlineCode",{parentName:"p"},"docker compose")," to mount ",(0,n.yg)("inlineCode",{parentName:"p"},"lighthouse")," from your locally synced ",(0,n.yg)("inlineCode",{parentName:"p"},"~/.lighthouse"),", the whole chain database may get deleted. It'd be best not to manually update as ",(0,n.yg)("inlineCode",{parentName:"p"},"lighthouse")," checkpoint-syncs so the syncing doesn't take much time."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Note"),": If you have a ",(0,n.yg)("inlineCode",{parentName:"p"},"geth")," node already synced, you can simply copy over the directory. For ex: ",(0,n.yg)("inlineCode",{parentName:"p"},"cp -r ~/.ethereum/goerli data/geth"),". This makes everything faster since you start from a synced geth node."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"# Delete lighthouse data if it exists\nrm -r ./data/lighthouse\n\n# Spin up a Distributed Validator Node with a Validator Client\ndocker compose up\n\n# Open Grafana dashboard\nopen http://localhost:3000/d/singlenode/\n")),(0,n.yg)("p",null,"You should use the grafana dashboard to infer whether your cluster is healthy. In particular you should check:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"That your charon client can connect to the configured beacon client."),(0,n.yg)("li",{parentName:"ul"},"That your charon client can connect to all peers.")),(0,n.yg)("p",null,"Most components in the dashboard have some help text there to assist you in understanding your cluster performance."),(0,n.yg)("p",null,"You might notice that there are logs indicating that a validator cannot be found and that APIs are returning 404. This is to be expected at this point, as the validator public keys listed in the lock file have not been deposited and acknowledged on the consensus layer yet (usually ~16 hours after the deposit is made)."),(0,n.yg)("p",null,"If at any point you need to turn off your node, you can run:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"# Shut down the currently running distributed validator node\ndocker compose down\n")))}u.isMDXComponent=!0},540:(e,t,r)=>{r.d(t,{A:()=>a});const a=r.p+"assets/images/Guide05-f21317bae6200ae532bee73349d77207.png"},8119:(e,t,r)=>{r.d(t,{A:()=>a});const a=r.p+"assets/images/Guide06-aef4c137e7c3ea5a383244d3ad563394.png"},24974:(e,t,r)=>{r.d(t,{A:()=>a});const a=r.p+"assets/images/Guide07-2eacaec1895903d6c864a257ad91ba6c.png"},98009:(e,t,r)=>{r.d(t,{A:()=>a});const a=r.p+"assets/images/Guide08-46621accb14c6c81d266bc55adb43621.png"},32646:(e,t,r)=>{r.d(t,{A:()=>a});const a=r.p+"assets/images/Guide10-66d7c37171ee24ff1b6f7118308c6a29.png"}}]);