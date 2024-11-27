"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[35436],{94196:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var n=s(74848),i=s(28453);const o={sidebar_position:3,description:"Split existing validator keys"},r="Split existing validator private keys",a={id:"advanced/quickstart-split",title:"Split existing validator private keys",description:"Split existing validator keys",source:"@site/versioned_docs/version-v0.19.1/advanced/quickstart-split.md",sourceDirName:"advanced",slug:"/advanced/quickstart-split",permalink:"/v0.19.1/advanced/quickstart-split",draft:!1,unlisted:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.19.1/advanced/quickstart-split.md",tags:[],version:"v0.19.1",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"Split existing validator keys"},sidebar:"tutorialSidebar",previous:{title:"Enable MEV",permalink:"/v0.19.1/advanced/quickstart-builder-api"},next:{title:"Getting Started Monitoring your Node",permalink:"/v0.19.1/advanced/monitoring"}},l={},d=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Step 1. Clone the charon repo and copy existing keystore files",id:"step-1-clone-the-charon-repo-and-copy-existing-keystore-files",level:2},{value:"Step 2. Split the keys using the charon docker command",id:"step-2-split-the-keys-using-the-charon-docker-command",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"split-existing-validator-private-keys",children:"Split existing validator private keys"})}),"\n",(0,n.jsxs)(t.admonition,{type:"warning",children:[(0,n.jsxs)(t.p,{children:["Charon is in a beta state and should be used with caution according to its ",(0,n.jsx)(t.a,{href:"https://obol.tech/terms.pdf",children:"Terms of Use"}),"."]}),(0,n.jsxs)(t.p,{children:["This process should only be used if you want to split an ",(0,n.jsx)(t.em,{children:"existing validator private key"})," into multiple private key shares for use in a Distributed Validator Cluster. If your existing validator is not properly shut down before the Distributed Validator starts, your validator may be slashed."]}),(0,n.jsxs)(t.p,{children:["If you are starting a new validator, you should follow a ",(0,n.jsx)(t.a,{href:"/v0.19.1/start/quickstart_overview",children:"quickstart guide"})," instead."]}),(0,n.jsxs)(t.p,{children:["If you use MEV-Boost, make sure you turned off your MEV-Boost service for the time of splitting the keys, otherwise you may hit ",(0,n.jsx)(t.a,{href:"https://github.com/ObolNetwork/charon/issues/2770",children:"this issue"}),"."]})]}),"\n",(0,n.jsxs)(t.p,{children:["Split an existing Ethereum validator key into multiple key shares for use in an ",(0,n.jsx)(t.a,{href:"/v0.19.1/int/key-concepts#distributed-validator-cluster",children:"Obol Distributed Validator Cluster"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"pre-requisites",children:"Pre-requisites"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Ensure you have the existing validator keystores (the ones to split) and passwords."}),"\n",(0,n.jsxs)(t.li,{children:["Ensure you have ",(0,n.jsx)(t.a,{href:"https://docs.docker.com/engine/install/",children:"docker"})," installed."]}),"\n",(0,n.jsxs)(t.li,{children:["Make sure ",(0,n.jsx)(t.code,{children:"docker"})," is running before executing the commands below."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"step-1-clone-the-charon-repo-and-copy-existing-keystore-files",children:"Step 1. Clone the charon repo and copy existing keystore files"}),"\n",(0,n.jsxs)(t.p,{children:["Clone the ",(0,n.jsx)(t.a,{href:"https://github.com/ObolNetwork/charon",children:"charon"})," repo."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"# Clone the repo\ngit clone https://github.com/ObolNetwork/charon.git\n\n# Change directory\ncd charon/\n\n# Create a folder within this checked out repo\nmkdir split_keys\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Copy the existing validator ",(0,n.jsx)(t.code,{children:"keystore.json"})," files into this new folder. Alongside them, with a matching filename but ending with ",(0,n.jsx)(t.code,{children:".txt"})," should be the password to the keystore. E.g., ",(0,n.jsx)(t.code,{children:"keystore-0.json"})," ",(0,n.jsx)(t.code,{children:"keystore-0.txt"})]}),"\n",(0,n.jsx)(t.p,{children:"At the end of this process, you should have a tree like this:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"\u251c\u2500\u2500 split_keys\n\u2502\xa0\xa0 \u251c\u2500\u2500 keystore-0.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 keystore-0.txt\n\u2502\xa0\xa0 \u251c\u2500\u2500 keystore-1.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 keystore-1.txt\n\u2502   ...\n\u2502\xa0\xa0 \u251c\u2500\u2500 keystore-*.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 keystore-*.txt\n"})}),"\n",(0,n.jsx)(t.h2,{id:"step-2-split-the-keys-using-the-charon-docker-command",children:"Step 2. Split the keys using the charon docker command"}),"\n",(0,n.jsx)(t.p,{children:"Run the following docker command to split the keys:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:'CHARON_VERSION=                # E.g. v0.19.1\nCLUSTER_NAME=                  # The name of the cluster you want to create.\nWITHDRAWAL_ADDRESS=            # The address you want to use for withdrawals.\nFEE_RECIPIENT_ADDRESS=         # The address you want to use for fee payments.\nNODES=                         # The number of nodes in the cluster.    \n\ndocker run --rm -v $(pwd):/opt/charon obolnetwork/charon:${CHARON_VERSION} create cluster --name="${CLUSTER_NAME}" --withdrawal-addresses="${WITHDRAWAL_ADDRESS}" --fee-recipient-addresses="${FEE_RECIPIENT_ADDRESS}" --split-existing-keys --split-keys-dir=/opt/charon/split_keys --nodes ${NODES} --network goerli\n'})}),"\n",(0,n.jsxs)(t.p,{children:["The above command will create ",(0,n.jsx)(t.code,{children:"validator_keys"})," along with ",(0,n.jsx)(t.code,{children:"cluster-lock.json"})," in ",(0,n.jsx)(t.code,{children:"./cluster"})," for each node."]}),"\n",(0,n.jsx)(t.p,{children:"Command output:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"***************** WARNING: Splitting keys **********************\n Please make sure any existing validator has been shut down for\n at least 2 finalised epochs before starting the charon cluster,\n otherwise slashing could occur.                               \n****************************************************************\n\nCreated charon cluster:\n --split-existing-keys=true\n\n./cluster/\n\u251c\u2500 node[0-*]/                   Directory for each node\n\u2502  \u251c\u2500 charon-enr-private-key    Charon networking private key for node authentication\n\u2502  \u251c\u2500 cluster-lock.json         Cluster lock defines the cluster lock file which is signed by all nodes\n\u2502  \u251c\u2500 validator_keys            Validator keystores and password\n\u2502  \u2502  \u251c\u2500 keystore-*.json        Validator private share key for duty signing\n\u2502  \u2502  \u251c\u2500 keystore-*.txt         Keystore password files for keystore-*.json\n"})}),"\n",(0,n.jsx)(t.p,{children:"These split keys can now be used to start a charon cluster."})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>a});var n=s(96540);const i={},o=n.createContext(i);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);