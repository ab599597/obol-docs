"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[48284],{52310:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=t(74848),s=t(28453);const o={sidebar_position:7,description:"Run a cluster on mainnet"},r="Run a DV on mainnet",a={id:"int/quickstart/quickstart-mainnet",title:"Run a DV on mainnet",description:"Run a cluster on mainnet",source:"@site/versioned_docs/version-v0.17.0/int/quickstart/quickstart-mainnet.md",sourceDirName:"int/quickstart",slug:"/int/quickstart/quickstart-mainnet",permalink:"/v0.17.0/int/quickstart/quickstart-mainnet",draft:!1,unlisted:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.17.0/int/quickstart/quickstart-mainnet.md",tags:[],version:"v0.17.0",sidebarPosition:7,frontMatter:{sidebar_position:7,description:"Run a cluster on mainnet"},sidebar:"tutorialSidebar",previous:{title:"Update a DV",permalink:"/v0.17.0/int/quickstart/update"},next:{title:"Create a DV using the SDK",permalink:"/v0.17.0/int/quickstart/advanced/quickstart-sdk"}},d={},c=[{value:"Pre-requisites",id:"pre-requisites",level:3},{value:"Steps",id:"steps",level:3},{value:"Remote mainnet beacon node",id:"remote-mainnet-beacon-node",level:4},{value:"Exit a mainnet distributed validator",id:"exit-a-mainnet-distributed-validator",level:4}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"run-a-dv-on-mainnet",children:"Run a DV on mainnet"})}),"\n",(0,i.jsxs)(n.admonition,{type:"warning",children:[(0,i.jsxs)(n.p,{children:["Charon is in an alpha state, and you should proceed only if you accept the risk, the ",(0,i.jsx)(n.a,{href:"https://obol.tech/terms.pdf",children:"terms of use"}),", and have tested running a Distributed Validator on a testnet first."]}),(0,i.jsx)(n.p,{children:"Distributed Validators created for goerli cannot be used on mainnet and vice versa, please take caution when creating, backing up, and activating mainnet validators."})]}),"\n",(0,i.jsx)(n.p,{children:"This section is intended for users who wish to run their Distributed Validator on Ethereum mainnet."}),"\n",(0,i.jsx)(n.h3,{id:"pre-requisites",children:"Pre-requisites"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Ensure you have ",(0,i.jsx)(n.a,{href:"https://docs.docker.com/engine/install/",children:"docker"})," installed."]}),"\n",(0,i.jsxs)(n.li,{children:["Ensure you have ",(0,i.jsx)(n.a,{href:"https://git-scm.com/downloads",children:"git"})," installed."]}),"\n",(0,i.jsxs)(n.li,{children:["Make sure ",(0,i.jsx)(n.code,{children:"docker"})," is running before executing the commands below."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"steps",children:"Steps"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Clone the ",(0,i.jsx)(n.a,{href:"https://github.com/ObolNetwork/charon-distributed-validator-node",children:"charon-distributed-validator-node"})," repo and ",(0,i.jsx)(n.code,{children:"cd"})," into the directory."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"# Clone this repo\ngit clone https://github.com/ObolNetwork/charon-distributed-validator-node.git\n\n# Change directory\ncd charon-distributed-validator-node\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["If you have already cloned the repo, make sure that it is ",(0,i.jsx)(n.a,{href:"./update",children:"up-to-date"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Copy the ",(0,i.jsx)(n.code,{children:".env.sample"})," file to ",(0,i.jsx)(n.code,{children:".env"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"cp -n .env.sample .env\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsxs)(n.li,{children:["In your ",(0,i.jsx)(n.code,{children:".env"})," file, uncomment and set values for ",(0,i.jsx)(n.code,{children:"NETWORK"})," & ",(0,i.jsx)(n.code,{children:"LIGHTHOUSE_CHECKPOINT_SYNC_URL"})]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"...\n# Overrides network for all the relevant services.\nNETWORK=mainnet\n...\n# Checkpoint sync url used by lighthouse to fast sync.\nLIGHTHOUSE_CHECKPOINT_SYNC_URL=https://mainnet.checkpoint.sigp.io/https://eth-clients.github.io/checkpoint-sync-endpoints/#mainnet\n...\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Note that you can choose any checkpoint sync url from ",(0,i.jsx)(n.a,{href:"https://eth-clients.github.io/checkpoint-sync-endpoints/#mainnet",children:"https://eth-clients.github.io/checkpoint-sync-endpoints/#mainnet"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Your DV stack is now mainnet ready \ud83c\udf89"}),"\n",(0,i.jsx)(n.h4,{id:"remote-mainnet-beacon-node",children:"Remote mainnet beacon node"}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"Using a remote beacon node will impact the performance of your Distributed Validator and should be used sparingly."})}),"\n",(0,i.jsxs)(n.p,{children:["If you already have a mainnet beacon node running somewhere and you want to use that instead of running EL (",(0,i.jsx)(n.code,{children:"geth"}),") & CL (",(0,i.jsx)(n.code,{children:"lighthouse"}),") as part of the repo, you can disable these images. To do so, follow these steps:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Copy the ",(0,i.jsx)(n.code,{children:"docker-compose.override.yml.sample"})," file"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"cp -n docker-compose.override.yml.sample docker-compose.override.yml\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["Uncomment the ",(0,i.jsx)(n.code,{children:"profiles: [disable]"})," section for both ",(0,i.jsx)(n.code,{children:"geth"})," and ",(0,i.jsx)(n.code,{children:"lighthouse"}),". The override file should now look like this"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"services:\n  geth:\n    # Disable geth\n    profiles: [disable]\n    # Bind geth internal ports to host ports\n    #ports:\n      #- 8545:8545 # JSON-RPC\n      #- 8551:8551 # AUTH-RPC\n      #- 6060:6060 # Metrics\n\n  lighthouse:\n    # Disable lighthouse\n    profiles: [disable]\n    # Bind lighthouse internal ports to host ports\n    #ports:\n      #- 5052:5052 # HTTP\n      #- 5054:5054 # Metrics\n...\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsxs)(n.li,{children:["Then, uncomment and set the ",(0,i.jsx)(n.code,{children:"CHARON_BEACON_NODE_ENDPOINTS"})," variable in the ",(0,i.jsx)(n.code,{children:".env"})," file to your mainnet beacon node's URL"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"...\n# Connect to one or more external beacon nodes. Use a comma separated list excluding spaces.\nCHARON_BEACON_NODE_ENDPOINTS=<YOUR_REMOTE_MAINNET_BEACON_NODE_URL>\n...\n"})}),"\n",(0,i.jsx)(n.h4,{id:"exit-a-mainnet-distributed-validator",children:"Exit a mainnet distributed validator"}),"\n",(0,i.jsxs)(n.p,{children:["If you want to exit your mainnet validator, you need to uncomment and set the ",(0,i.jsx)(n.code,{children:"EXIT_EPOCH"})," variable in the ",(0,i.jsx)(n.code,{children:".env"})," file"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"...\n# Cluster wide consistent exit epoch. Set to latest for fork version, see `curl $BEACON_NODE/eth/v1/config/fork_schedule`\n# Currently, the latest fork is capella (epoch: 194048)\nEXIT_EPOCH=194048\n...\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Note that ",(0,i.jsx)(n.code,{children:"EXIT_EPOCH"})," should be ",(0,i.jsx)(n.code,{children:"194048"})," after the ",(0,i.jsx)(n.a,{href:"https://blog.ethereum.org/2023/03/28/shapella-mainnet-announcement",children:"shapella fork"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(96540);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);