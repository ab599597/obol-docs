"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[25280],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>g});var n=a(96540);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(a),h=i,g=c["".concat(s,".").concat(h)]||c[h]||u[h]||r;return a?n.createElement(g,o(o({ref:t},p),{},{components:a})):n.createElement(g,o({ref:t},p))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},31131:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=a(58168),i=(a(96540),a(15680));const r={sidebar_position:1,description:"Run one node in a multi-operator distributed validator cluster using the DV Launchpad"},o="Launchpad",l={unversionedId:"int/quickstart/group/quickstart-group-launchpad",id:"version-v0.11.0/int/quickstart/group/quickstart-group-launchpad",title:"Launchpad",description:"Run one node in a multi-operator distributed validator cluster using the DV Launchpad",source:"@site/versioned_docs/version-v0.11.0/int/quickstart/group/quickstart-group-launchpad.md",sourceDirName:"int/quickstart/group",slug:"/int/quickstart/group/quickstart-group-launchpad",permalink:"/docs/v0.11.0/int/quickstart/group/quickstart-group-launchpad",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.11.0/int/quickstart/group/quickstart-group-launchpad.md",tags:[],version:"v0.11.0",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Run one node in a multi-operator distributed validator cluster using the DV Launchpad"},sidebar:"tutorialSidebar",previous:{title:"Quickstart Guides",permalink:"/docs/v0.11.0/int/quickstart/"},next:{title:"CLI",permalink:"/docs/v0.11.0/int/quickstart/group/quickstart-group-cli"}},s={},d=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"1-min Video Overview",id:"1-min-video-overview",level:2},{value:"Step 1. Creating and backing up a private key for charon",id:"step-1-creating-and-backing-up-a-private-key-for-charon",level:2},{value:"Step 2. Leader creates the DKG configuration file and distributes it to cluster operators",id:"step-2-leader-creates-the-dkg-configuration-file-and-distributes-it-to-cluster-operators",level:2},{value:"Step 3. Operators join and sign the cluster configuration",id:"step-3-operators-join-and-sign-the-cluster-configuration",level:2},{value:"Step 3. Run the DKG",id:"step-3-run-the-dkg",level:2},{value:"Step 4. Start the Distributed Validator Cluster",id:"step-4-start-the-distributed-validator-cluster",level:2},{value:"Step 5. Activate the deposit data",id:"step-5-activate-the-deposit-data",level:2},{value:"Other Optional Actions",id:"other-optional-actions",level:2},{value:"Step 6. Leader Adds Central Monitoring Token",id:"step-6-leader-adds-central-monitoring-token",level:2},{value:"Validator Voluntary Exit",id:"validator-voluntary-exit",level:2},{value:"Self-Host a Bootnode",id:"self-host-a-bootnode",level:2}],p={toc:d},c="wrapper";function u(e){let{components:t,...r}=e;return(0,i.yg)(c,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"launchpad"},"Launchpad"),(0,i.yg)("p",null,"The following instructions aim to assist a group of users coordinating together to create a distributed validator cluster between them."),(0,i.yg)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Ensure you have ",(0,i.yg)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/"},"docker")," and ",(0,i.yg)("a",{parentName:"li",href:"https://git-scm.com/downloads"},"git")," installed. Also, make sure ",(0,i.yg)("inlineCode",{parentName:"li"},"docker")," is running before executing the commands below."),(0,i.yg)("li",{parentName:"ul"},"Decide who the leader of your cluster will be. Only leaders have to perform ",(0,i.yg)("a",{parentName:"li",href:"#step-2-leader-creates-the-dkg-configuration-file-and-distributes-it-to-everyone-else"},"step 2")," and ",(0,i.yg)("a",{parentName:"li",href:"#step-5-activate-the-deposit-data"},"step 5")," in the quickstart process. They do not get any special privilege.")),(0,i.yg)("h2",{id:"1-min-video-overview"},"1-min Video Overview"),(0,i.yg)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/QZM7mQs78pI",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen",allowfullscreen:!0}),(0,i.yg)("h2",{id:"step-1-creating-and-backing-up-a-private-key-for-charon"},"Step 1. Creating and backing up a private key for charon"),(0,i.yg)("p",null,"The first step of running a cluster is preparing for a distributed key generation ceremony. To do this everyone must create an ",(0,i.yg)("a",{parentName:"p",href:"/docs/v0.11.0/int/faq/errors#what-is-an-enr"},"ENR")," for their charon client. This ENR is a public/private key pair, and allows the other charon clients in the DKG to identify and connect to your node."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},'# Clone this repo\ngit clone https://github.com/ObolNetwork/charon-distributed-validator-node.git\n\n# Change directory\ncd charon-distributed-validator-node\n\n# Create your charon ENR private key, this will create a charon-enr-private-key file in the .charon directory\ndocker run --rm -v "$(pwd):/opt/charon" obolnetwork/charon:v0.11.0 create enr\n')),(0,i.yg)("p",null,"You should expect to see a console output like"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"Created ENR private key: .charon/charon-enr-private-key\nenr:-JG4QGQpV4qYe32QFUAbY1UyGNtNcrVMip83cvJRhw1brMslPeyELIz3q6dsZ7GblVaCjL_8FKQhF6Syg-O_kIWztimGAYHY5EvPgmlkgnY0gmlwhH8AAAGJc2VjcDI1NmsxoQKzMe_GFPpSqtnYl-mJr8uZAUtmkqccsAx7ojGmFy-FY4N0Y3CCDhqDdWRwgg4u\n")),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"\u26a0\ufe0f Attention"),(0,i.yg)("p",{parentName:"blockquote"},"Please make sure to create a backup of the private key at ",(0,i.yg)("inlineCode",{parentName:"p"},".charon/charon-enr-private-key"),". Be careful not to commit it to git! ",(0,i.yg)("strong",{parentName:"p"},"If you lose this file you won't be able to take part in the DKG ceremony."))),(0,i.yg)("p",null,"Finally, share the Ethereum address you will use for the cluster with the leader so that he/she can proceed to Step 2."),(0,i.yg)("h2",{id:"step-2-leader-creates-the-dkg-configuration-file-and-distributes-it-to-cluster-operators"},"Step 2. Leader creates the DKG configuration file and distributes it to cluster operators"),(0,i.yg)("p",null,"The leader will prepare the configuration file for the distributed key generation ceremony using the launchpad."),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Go to the DV Launchpad (",(0,i.yg)("a",{parentName:"p",href:"https://launchpad.obol.dev"},"https://launchpad.obol.dev"),") ")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Connect your wallet"),(0,i.yg)("p",{parentName:"li"},(0,i.yg)("img",{alt:"Connect your Wallet",src:a(2328).A,width:"2842",height:"1800"}))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Select ",(0,i.yg)("inlineCode",{parentName:"p"},"Create a Cluster with a group")," then ",(0,i.yg)("inlineCode",{parentName:"p"},"Get Started"),"."),(0,i.yg)("p",{parentName:"li"},(0,i.yg)("img",{alt:"Get Started",src:a(97939).A,width:"2880",height:"1298"}))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Follow the flow and accept the advisories")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Configure the Cluster "),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Add the ",(0,i.yg)("inlineCode",{parentName:"li"},"Cluster Name")," & ",(0,i.yg)("inlineCode",{parentName:"li"},"Cluster Size")," (i.e. number of operators in the cluster)"),(0,i.yg)("li",{parentName:"ul"},"Add the Ethereum addresses for each operator received at the end of ",(0,i.yg)("a",{parentName:"li",href:"#step-1-creating-and-backing-up-a-private-key-for-charon"},"Step 1"),"."),(0,i.yg)("li",{parentName:"ul"},"Select the desired amount of validators (32 ETH each)"),(0,i.yg)("li",{parentName:"ul"},"Paste your ",(0,i.yg)("inlineCode",{parentName:"li"},"ENR")," generated in ",(0,i.yg)("a",{parentName:"li",href:"#step-1-creating-and-backing-up-a-private-key-for-charon"},"Step 1"),"."),(0,i.yg)("li",{parentName:"ul"},"Choose your Withdrawal Addresses for validator exit."),(0,i.yg)("li",{parentName:"ul"},"Create Group")),(0,i.yg)("p",{parentName:"li"},(0,i.yg)("img",{alt:"Create Group",src:a(66026).A,width:"2616",height:"6184"}))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Review, Confirm and Sign the Configuration (there can be up to 4 signatures needed)"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Cluster Configuration (contains operators, withdrawal address, # validators, etc.) "),(0,i.yg)("li",{parentName:"ul"},"Config hash "),(0,i.yg)("li",{parentName:"ul"},"His/her own ",(0,i.yg)("inlineCode",{parentName:"li"},"ENR")),(0,i.yg)("li",{parentName:"ul"},"His/her operator definition (address, ",(0,i.yg)("inlineCode",{parentName:"li"},"ENR"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"enr_sig")," and ",(0,i.yg)("inlineCode",{parentName:"li"},"config_hash")," signatures) "))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Share your group invite link with the cluster operators. Following the link as a leader will show you a screen waiting for other operators to accept the configuration."),(0,i.yg)("p",{parentName:"li"},(0,i.yg)("img",{alt:"Invite Operators",src:a(36453).A,width:"1604",height:"1478"})))),(0,i.yg)("h2",{id:"step-3-operators-join-and-sign-the-cluster-configuration"},"Step 3. Operators join and sign the cluster configuration"),(0,i.yg)("p",null,"After receiving the invite link created by the leader, cluster members will be able to join and sign the cluster configuration."),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Go to the DV launchpad link provided by the leader.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Connect your wallet using the Ethereum address provided to the leader in ",(0,i.yg)("a",{parentName:"p",href:"#step-1-creating-and-backing-up-a-private-key-for-charon"},"Step 1"),"."),(0,i.yg)("p",{parentName:"li"},(0,i.yg)("img",{alt:"Connect Wallet",src:a(540).A,width:"1784",height:"607"}))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Review the operators addresses submitted and click ",(0,i.yg)("inlineCode",{parentName:"p"},"Get Started")," to continue."),(0,i.yg)("p",{parentName:"li"},(0,i.yg)("img",{alt:"Get Started",src:a(8119).A,width:"1884",height:"1760"}))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Review and accept the advisories.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Review the configuration created by the leader and add your ",(0,i.yg)("inlineCode",{parentName:"p"},"ENR")," generated in ",(0,i.yg)("a",{parentName:"p",href:"#step-1-creating-and-backing-up-a-private-key-for-charon"},"Step 1"),"."),(0,i.yg)("p",{parentName:"li"},(0,i.yg)("img",{alt:"Review Config",src:a(24974).A,width:"1898",height:"2768"}))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Sign the configuration with your wallet and wait for other operators to do the same (up to three signatures required)."),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Config hash "),(0,i.yg)("li",{parentName:"ul"},"Your own ",(0,i.yg)("inlineCode",{parentName:"li"},"ENR")),(0,i.yg)("li",{parentName:"ul"},"Your operator definition (address, ",(0,i.yg)("inlineCode",{parentName:"li"},"ENR"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"enr_sig")," and ",(0,i.yg)("inlineCode",{parentName:"li"},"config_hash")," signatures)")))),(0,i.yg)("h2",{id:"step-3-run-the-dkg"},"Step 3. Run the DKG"),(0,i.yg)("p",null,"For Charon v1, this needs to happen synchronously between participants at an agreed time."),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Once all operators successfully signed, your screen will automatically advance to the next step and look like this. Click ",(0,i.yg)("inlineCode",{parentName:"p"},"Continue"),"."),(0,i.yg)("p",{parentName:"li"},(0,i.yg)("img",{alt:"Config Signing Success",src:a(98009).A,width:"2864",height:"2164"}))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"You have two options at this stage."),(0,i.yg)("ol",{parentName:"li"},(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Option 1 and default is to run the ",(0,i.yg)("inlineCode",{parentName:"p"},"docker")," command on the screen in your terminal to automatically download the ",(0,i.yg)("inlineCode",{parentName:"p"},"cluster-definition")," file and move it to the hidden ",(0,i.yg)("inlineCode",{parentName:"p"},".charon")," folder and start the DKG process.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Option 2 is to download the ",(0,i.yg)("inlineCode",{parentName:"p"},"cluster-definition")," file and move it to the hidden ",(0,i.yg)("inlineCode",{parentName:"p"},".charon")," folder. Then, every cluster member participates in the DKG ceremony by running the command displayed under the ",(0,i.yg)("inlineCode",{parentName:"p"},"Run the DKG")," menu. It will look something like this:"),(0,i.yg)("p",{parentName:"li"},(0,i.yg)("img",{alt:"Run the DKG",src:a(32646).A,width:"1897",height:"1388"})),(0,i.yg)("p",{parentName:"li"},"This is a helpful ",(0,i.yg)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=94Pkovp5zoQ&ab_channel=ObolNetwork"},"DKG video walkthrough")," (it uses the CLI to get the ",(0,i.yg)("inlineCode",{parentName:"p"},"cluster-definition")," file but the DKG logic is the same).")))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Assuming the DKG is successful, a number of artefacts will be created in the ",(0,i.yg)("inlineCode",{parentName:"p"},".charon")," folder. These include:"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"A ",(0,i.yg)("inlineCode",{parentName:"li"},"deposit-data.json")," file. This contains the information needed to activate the validator on the Ethereum network."),(0,i.yg)("li",{parentName:"ul"},"A ",(0,i.yg)("inlineCode",{parentName:"li"},"cluster-lock.json")," file. This contains the information needed by charon to operate the distributed validator cluster with its peers."),(0,i.yg)("li",{parentName:"ul"},"A ",(0,i.yg)("inlineCode",{parentName:"li"},"validator_keys/")," folder. This folder contains the private key shares and passwords for the created distributed validators."))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"At this point you should make a backup of the ",(0,i.yg)("inlineCode",{parentName:"p"},".charon/validator_keys")," folder as replacing lost private keys is not straightforward at this point in charon's development. The ",(0,i.yg)("inlineCode",{parentName:"p"},"cluster-lock")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"deposit-data")," files are identical for each operator and can be copied if lost.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"If taking part in an official Obol testnet, one cluster member will have to submit the ",(0,i.yg)("inlineCode",{parentName:"p"},"cluster-lock")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"deposit-data")," files to the Obol Team."))),(0,i.yg)("h2",{id:"step-4-start-the-distributed-validator-cluster"},"Step 4. Start the Distributed Validator Cluster"),(0,i.yg)("p",null,"With the DKG ceremony over, the last phase before activation is to prepare your node for validating over the long term. This repo is configured to sync an execution layer client (",(0,i.yg)("inlineCode",{parentName:"p"},"nethermind"),") and a consensus layer client (",(0,i.yg)("inlineCode",{parentName:"p"},"nimbus"),")."),(0,i.yg)("p",null,"Before completing these instructions, you should assign a static local IP address to your device (extending the DHCP reservation indefinitely or removing the device from the DCHP pool entirely if you prefer), and port forward the TCP protocol on the public port ",(0,i.yg)("inlineCode",{parentName:"p"},":3610")," on your router to your device's local IP address on the same port. This step is different for every person's home internet, and can be complicated by the presence of dynamic public IP addresses. We are currently working on making this as easy as possible, but for the time being, a distributed validator cluster isn't going to work very resiliently if all charon nodes cannot talk directly to one another and instead need to have an intermediary node forwarding traffic to them."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Caution"),": If you manually update ",(0,i.yg)("inlineCode",{parentName:"p"},"docker-compose")," to mount ",(0,i.yg)("inlineCode",{parentName:"p"},"lighthouse")," from your locally synced ",(0,i.yg)("inlineCode",{parentName:"p"},"~/.lighthouse"),", the whole chain database may get deleted. It'd be best not to manually update as ",(0,i.yg)("inlineCode",{parentName:"p"},"lighthouse")," checkpoint-syncs so the syncing doesn't take much time."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"NOTE"),": If you have a ",(0,i.yg)("inlineCode",{parentName:"p"},"geth")," node already synced, you can simply copy over the directory. For ex: ",(0,i.yg)("inlineCode",{parentName:"p"},"cp -r ~/.ethereum/goerli data/geth"),". This makes everything faster since you start from a synced geth node."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"# Delete lighthouse data if it exists\nrm -r ./data/lighthouse\n\n# Spin up a Distributed Validator Node with a Validator Client\ndocker-compose up\n\n# Open Grafana dashboard\nopen http://localhost:3000/d/singlenode/\n")),(0,i.yg)("p",null,"You should use the grafana dashboard to infer whether your cluster is healthy. In particular you should check:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"That your charon client can connect to the configured beacon client."),(0,i.yg)("li",{parentName:"ul"},"That your charon client can connect to all peers.")),(0,i.yg)("p",null,"Most components in the dashboard have some help text there to assist you in understanding your cluster performance."),(0,i.yg)("p",null,"You might notice that there are logs indicating that a validator cannot be found and that APIs are returning 404. This is to be expected at this point, as the validator public keys listed in the lock file have not been deposited and acknowledged on the consensus layer yet (usually ~16 hours after the deposit is made)."),(0,i.yg)("p",null,"To turn off your node after checking the health of the cluster you can run:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"# Shut down the currently running distributed validator node\ndocker-compose down\n")),(0,i.yg)("h2",{id:"step-5-activate-the-deposit-data"},"Step 5. Activate the deposit data"),(0,i.yg)("p",null,"If you and your team have gotten to this phase of the quickstart, and you have successfully created a distributed validator together, and you have connected all of your charon clients together such that the monitoring indicates that they are all healthy and ready to operate, one person may process to activate this deposit data with the existing ",(0,i.yg)("a",{parentName:"p",href:"https://prater.launchpad.ethereum.org/"},"staking launchpad"),"."),(0,i.yg)("p",null,"This process can take a minimum of 16 hours, with the maximum time to activation being dictated by the length of the activation queue, which can be weeks. You can leave your distributed validator cluster offline until closer to the activation period if you would prefer. You can also use this time to improve and harden your monitoring and alerting for the cluster."),(0,i.yg)("p",null,"If you have gotten this far through the process, and whether you succeed or fail at running the distributed validator successfully on the testnet, we would like to hear your feedback on the process and where you encountered difficulties. Please let us know by joining and posting on our ",(0,i.yg)("a",{parentName:"p",href:"https://discord.gg/TsXFa8uB2E"},"Discord"),". Also, feel free to add issues to our ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/ObolNetwork"},"GitHub repos"),"."),(0,i.yg)("h2",{id:"other-optional-actions"},"Other Optional Actions"),(0,i.yg)("p",null,"The above steps should get you running a distributed validator cluster. The following are some extra steps you may want to take either to help Obol with their testing program, or to improve the resilience and performance of your distributed validator cluster."),(0,i.yg)("h2",{id:"step-6-leader-adds-central-monitoring-token"},"Step 6. Leader Adds Central Monitoring Token"),(0,i.yg)("p",null,"The cluster leader may be provided with a Central Monitoring Token used to push distributed validator metrics to our central prometheus service to monitor, analyze and improve your cluster's performance. The token needs to be added in prometheus/prometheus.yml replacing ",(0,i.yg)("inlineCode",{parentName:"p"},"$PROM_REMOTE_WRITE_TOKEN"),". The token will look like:\n",(0,i.yg)("inlineCode",{parentName:"p"},"eyJtZXNzYWdlIjoiSldUIFJ1bGVzISIsImlhdCI6MTQ1OTQ0ODExOSwiZXhwIjoxNDU5NDU0NTE5fQ"),"."),(0,i.yg)("p",null,"The cluster leader will be assigned a cluster name to be added in the prometheus/prometheus.yml replacing the ",(0,i.yg)("inlineCode",{parentName:"p"},"$CLUSTER_NAME"),". The cluster name will look like: ",(0,i.yg)("inlineCode",{parentName:"p"},"cluster-123"),"\nFinal prometheus/prometheus.yml would look something like:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"global:\n  scrape_interval:     30s # Set the scrape interval to every 30 seconds.\n  evaluation_interval: 30s # Evaluate rules every 30 seconds.\n  external_labels:\n    cluster_name: cluster-123\n\nremote_write:\n  - url: https://vm.monitoring.gcp.obol.tech/write\n    authorization:\n      credentials: 436764:eyJtZXNzYWdlIjoiSldUIFJ1bGVzISIsImlhdCI6MTQ1OTQ0ODExOSwiZXhwIjoxNDU5NDU0NTE5fQ\n\nscrape_configs:\n  - job_name: 'charon'\n    static_configs:\n      - targets: ['charon:3620']\n  - job_name: 'teku'\n    static_configs:\n      - targets: ['teku:8008']\n  - job_name: 'node-exporter'\n    static_configs:\n      - targets: ['node-exporter:9100']\n")),(0,i.yg)("h2",{id:"validator-voluntary-exit"},"Validator Voluntary Exit"),(0,i.yg)("p",null,"A voluntary exit is when a validator chooses to stop performing its duties, and exits the beacon chain permanently. To voluntarily exit, the validator must continue performing its validator duties until successfully exited to avoid penalties."),(0,i.yg)("p",null,"To trigger a voluntary exit, a sidecar docker-compose command is executed that signs and submits the voluntary exit to the active running charon node that shares it with other nodes in the cluster. The commands below should be executed on the same machine and same folder as the active running ",(0,i.yg)("inlineCode",{parentName:"p"},"charon-distribute-validator-node")," docker compose."),(0,i.yg)("admonition",{type:"info"},(0,i.yg)("p",{parentName:"admonition"},"A threshold of peers in the cluster need to perform this task to exit a validator.")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Create a new ",(0,i.yg)("inlineCode",{parentName:"li"},"exit_keys")," folder next to ",(0,i.yg)("inlineCode",{parentName:"li"},".charon/validator_keys"),": ",(0,i.yg)("inlineCode",{parentName:"li"},"mkdir .charon/exit_keys")),(0,i.yg)("li",{parentName:"ul"},"Copy the validator keys and passwords that you want to exit from the ",(0,i.yg)("inlineCode",{parentName:"li"},"validator_keys")," folder to the ",(0,i.yg)("inlineCode",{parentName:"li"},"exit_keys")," folder.",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"E.g. to exit validator #4: ",(0,i.yg)("inlineCode",{parentName:"li"},"cp .charon/validator_keys/keystore/keystore-4* .charon/exit_keys/")),(0,i.yg)("li",{parentName:"ul"},"Warning: all keys copied to the ",(0,i.yg)("inlineCode",{parentName:"li"},"exit_keys")," folder will be exited, so be careful!"))),(0,i.yg)("li",{parentName:"ul"},"Ensure the external network in ",(0,i.yg)("inlineCode",{parentName:"li"},"compose-voluntary-exit.yml")," is correct.",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Confirm the name of the exiting ",(0,i.yg)("inlineCode",{parentName:"li"},"charon-distributed-validator-node")," docker network: ",(0,i.yg)("inlineCode",{parentName:"li"},"docker network ls"),"."),(0,i.yg)("li",{parentName:"ul"},"If it isn't ",(0,i.yg)("inlineCode",{parentName:"li"},"charon-distributed-validator-node-dvnode"),", then update ",(0,i.yg)("inlineCode",{parentName:"li"},"compose-voluntary-exit.yml")," accordingly."))),(0,i.yg)("li",{parentName:"ul"},"Ensure the latest fork version epoch is used:",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Voluntary exists require an epoch after which they take effect."),(0,i.yg)("li",{parentName:"ul"},"All VCs need to sign and submit the exact same messages (epoch) in DVT."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"--epoch=1")," would be ideal, since all chains have that epoch in the past, so the validator should exit immediately."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"compose-voluntary-exit.yml")," is configured with ",(0,i.yg)("inlineCode",{parentName:"li"},"--epoch=112260")," which is the latest Bellatrix fork on Prater."),(0,i.yg)("li",{parentName:"ul"},"If the Charon cluster is running on a different chain, ",(0,i.yg)("strong",{parentName:"li"},"ALL")," operators must update ",(0,i.yg)("inlineCode",{parentName:"li"},"--epoch")," to the same latest fork version returned by ",(0,i.yg)("inlineCode",{parentName:"li"},"curl $BEACON_NODE/eth/v1/config/fork_schedule"),"."))),(0,i.yg)("li",{parentName:"ul"},"Run the command to submit this node's partially signed voluntary exit:",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"docker-compose -f compose-voluntary-exit.yml up")),(0,i.yg)("li",{parentName:"ul"},"Confirm the logs: ",(0,i.yg)("inlineCode",{parentName:"li"},"Exit for validator XXXXX submitted")),(0,i.yg)("li",{parentName:"ul"},"Exit the container: ",(0,i.yg)("inlineCode",{parentName:"li"},"Ctrl-C")))),(0,i.yg)("li",{parentName:"ul"},"The charon metric ",(0,i.yg)("inlineCode",{parentName:"li"},"core_parsigdb_exit_total")," will be incremented each time a voluntary exit partial signature is received, either from this node or from peers.")),(0,i.yg)("h2",{id:"self-host-a-bootnode"},"Self-Host a Bootnode"),(0,i.yg)("p",null,"If you are experiencing connectivity issues with the Obol hosted bootnode, or you want to improve your clusters latency and decentralisation, you can opt to host your own bootnode on a separate open and static internet port."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"# Figure out your public IP\ncurl v4.ident.me\n\n# Clone the repo and cd into it.\ngit clone https://github.com/ObolNetwork/charon-distributed-validator-node.git\n\ncd charon-distributed-validator-node\n\n# Replace 'replace.with.public.ip.or.hostname' in bootnode/docker-compose.yml with your public IPv4 or DNS hostname # Replace 'replace.with.public.ip.or.hostname' in bootnode/docker-compose.yml with your public IPv4 or DNS hostname\n\nnano bootnode/docker-compose.yml\n\ndocker-compose -f bootnode/docker-compose.yml up\n")),(0,i.yg)("p",null,"Test whether the bootnode is publicly accessible. This should return an ENR:\n",(0,i.yg)("inlineCode",{parentName:"p"},"curl http://replace.with.public.ip.or.hostname:3640/enr")),(0,i.yg)("p",null,"Ensure the ENR returned by the bootnode contains the correct public IP and port by decoding it with ",(0,i.yg)("a",{parentName:"p",href:"https://enr-viewer.com/"},"https://enr-viewer.com/"),"."),(0,i.yg)("p",null,"Configure ",(0,i.yg)("strong",{parentName:"p"},"ALL")," charon nodes in your cluster to use this bootnode:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Either by adding a flag: ",(0,i.yg)("inlineCode",{parentName:"li"},"--p2p-bootnodes=http://replace.with.public.ip.or.hostname:3640/enr")),(0,i.yg)("li",{parentName:"ul"},"Or by setting the environment variable: ",(0,i.yg)("inlineCode",{parentName:"li"},"CHARON_P2P_BOOTNODES=http://replace.with.public.ip.or.hostname:3640/enr"))),(0,i.yg)("p",null,"Note that a local ",(0,i.yg)("inlineCode",{parentName:"p"},"boonode/.charon/charon-enr-private-key")," file will be created next to ",(0,i.yg)("inlineCode",{parentName:"p"},"bootnode/docker-compose.yml")," to ensure a persisted bootnode ENR across restarts."))}u.isMDXComponent=!0},2328:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/Guide01-d53467f3ff24bc1fe1e6b90c8f181df2.png"},97939:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/Guide02-07714c655844eeb2b6805bd87a387233.png"},66026:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/Guide03-42559630a410769d2b8c6d9635ede640.png"},36453:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/Guide04-f9db7d75efeda34396609e991e2840b6.png"},540:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/Guide05-f21317bae6200ae532bee73349d77207.png"},8119:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/Guide06-aef4c137e7c3ea5a383244d3ad563394.png"},24974:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/Guide07-2eacaec1895903d6c864a257ad91ba6c.png"},98009:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/Guide08-46621accb14c6c81d266bc55adb43621.png"},32646:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/Guide10-66d7c37171ee24ff1b6f7118308c6a29.png"}}]);