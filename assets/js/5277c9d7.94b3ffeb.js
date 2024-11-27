"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[34535],{86040:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=n(74848),s=n(28453);const r={sidebar_position:2,description:"Run all nodes in a distributed validator cluster"},o="Run a cluster alone",l={id:"int/quickstart/quickstart-alone",title:"Run a cluster alone",description:"Run all nodes in a distributed validator cluster",source:"@site/versioned_docs/version-v0.14.0/int/quickstart/quickstart-alone.md",sourceDirName:"int/quickstart",slug:"/int/quickstart/quickstart-alone",permalink:"/v0.14.0/int/quickstart/quickstart-alone",draft:!1,unlisted:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.14.0/int/quickstart/quickstart-alone.md",tags:[],version:"v0.14.0",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Run all nodes in a distributed validator cluster"},sidebar:"tutorialSidebar",previous:{title:"Operator Journey",permalink:"/v0.14.0/int/quickstart/group/quickstart-group-operator"},next:{title:"Run a cluster with MEV-Boost",permalink:"/v0.14.0/int/quickstart/quickstart-builder-api"}},a={},d=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Step 1. Download the components and set up the environment",id:"step-1-download-the-components-and-set-up-the-environment",level:2},{value:"Step 2. Create the artifacts needed to run a DV cluster",id:"step-2-create-the-artifacts-needed-to-run-a-dv-cluster",level:2},{value:"Distributed Validator Cluster",id:"distributed-validator-cluster",level:3},{value:"Step 3. Start the cluster",id:"step-3-start-the-cluster",level:2},{value:"Step 4. Activate the validator",id:"step-4-activate-the-validator",level:2},{value:"Step 5. Validator Voluntary Exit",id:"step-5-validator-voluntary-exit",level:2},{value:"Run Prysm VCs in a DV Cluster",id:"run-prysm-vcs-in-a-dv-cluster",level:2},{value:"Feedback",id:"feedback",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"run-a-cluster-alone",children:"Run a cluster alone"})}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsx)(t.p,{children:"Charon is in an early alpha state and is not ready to be run on mainnet"})}),"\n",(0,i.jsx)(t.h2,{id:"pre-requisites",children:"Pre-requisites"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Ensure you have ",(0,i.jsx)(t.a,{href:"https://docs.docker.com/engine/install/",children:"docker"})," installed."]}),"\n",(0,i.jsxs)(t.li,{children:["Ensure you have ",(0,i.jsx)(t.a,{href:"https://git-scm.com/downloads",children:"git"})," installed."]}),"\n",(0,i.jsxs)(t.li,{children:["Make sure ",(0,i.jsx)(t.code,{children:"docker"})," is running before executing the commands below."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"step-1-download-the-components-and-set-up-the-environment",children:"Step 1. Download the components and set up the environment"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Clone the ",(0,i.jsx)(t.a,{href:"https://github.com/ObolNetwork/charon-distributed-validator-cluster",children:"charon-distributed-validator-cluster"})," repo and ",(0,i.jsx)(t.code,{children:"cd"})," into the directory."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:"# Clone the repo\ngit clone https://github.com/ObolNetwork/charon-distributed-validator-cluster.git\n\n# Change directory\ncd charon-distributed-validator-cluster/\n"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Prepare the environment variables"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:"# Copy the sample environment variables\ncp .env.sample .env\n"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:".env.sample"})," is a sample environment file that allows overriding default configuration defined in ",(0,i.jsx)(t.code,{children:"docker-compose.yml"}),". Uncomment and set any variable to override its value."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"step-2-create-the-artifacts-needed-to-run-a-dv-cluster",children:"Step 2. Create the artifacts needed to run a DV cluster"}),"\n",(0,i.jsx)(t.p,{children:"Run the following command:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:'# Enter required validator addresses\nWITHDRAWAL_ADDR=<ENTER YOUR WITHDRAWAL ADDRESS HERE>\nFEE_RECIPIENT_ADDR=<ENTER YOUR FEE RECIPIENT ADDRESS HERE>\n\n# Create a distributed validator cluster\ndocker run --rm -v "$(pwd):/opt/charon" obolnetwork/charon:v0.14.0 create cluster --name="mycluster" --withdrawal-addresses="${WITHDRAWAL_ADDR}" --fee-recipient-addresses="${FEE_RECIPIENT_ADDR}" --nodes 6 --threshold 5\n'})}),"\n",(0,i.jsxs)(t.p,{children:["This command will create a subdirectory ",(0,i.jsx)(t.code,{children:".charon/cluster"}),". In it are six folders, one for each charon node created. Each folder contains partial private keys that together make up the distributed validator described in ",(0,i.jsx)(t.code,{children:".charon/cluster/cluster-lock.json"}),". Note\nthat charon versions prior to ",(0,i.jsx)(t.code,{children:"v0.14.0"})," had a single ",(0,i.jsx)(t.code,{children:"--withdrawal-address"})," flag which was changed to the ",(0,i.jsx)(t.code,{children:"--withdrawal-addresses"})," flag in the ",(0,i.jsx)(t.a,{href:"https://github.com/ObolNetwork/charon/releases/tag/v0.14.0",children:"v0.14.0 release"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["This guide will launch all six charon clients in separate containers along with an execution client and consensus client. To distribute your cluster physically, copy each directory with one (or several) private keys within it to the other machines you want to use. Consider using the single node ",(0,i.jsx)(t.a,{href:"https://github.com/ObolNetwork/charon-distributed-validator-node",children:"docker compose"}),", the kubernetes ",(0,i.jsx)(t.a,{href:"https://github.com/ObolNetwork/charon-k8s-distributed-validator-node",children:"manifests"}),", or the ",(0,i.jsx)(t.a,{href:"https://github.com/ObolNetwork/helm-charts",children:"helm chart"})," example repos to get your nodes up and connected."]}),"\n",(0,i.jsx)(t.h3,{id:"distributed-validator-cluster",children:"Distributed Validator Cluster"}),"\n",(0,i.jsx)(t.p,{children:"The default cluster consists of:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://github.com/NethermindEth/nethermind",children:"Nethermind"}),", an execution layer client"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://github.com/sigp/lighthouse",children:"Lighthouse"}),", a consensus layer client"]}),"\n",(0,i.jsxs)(t.li,{children:["Six ",(0,i.jsx)(t.a,{href:"https://github.com/ObolNetwork/charon",children:"charon"})," nodes"]}),"\n",(0,i.jsxs)(t.li,{children:["Mixture of validator clients:","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["vc0: ",(0,i.jsx)(t.a,{href:"https://github.com/sigp/lighthouse",children:"Lighthouse"})]}),"\n",(0,i.jsxs)(t.li,{children:["vc1: ",(0,i.jsx)(t.a,{href:"https://github.com/ConsenSys/teku",children:"Teku"})]}),"\n",(0,i.jsxs)(t.li,{children:["vc2: ",(0,i.jsx)(t.a,{href:"https://github.com/status-im/nimbus-eth2",children:"Nimbus"})]}),"\n",(0,i.jsxs)(t.li,{children:["vc3: ",(0,i.jsx)(t.a,{href:"https://github.com/sigp/lighthouse",children:"Lighthouse"})]}),"\n",(0,i.jsxs)(t.li,{children:["vc4: ",(0,i.jsx)(t.a,{href:"https://github.com/ConsenSys/teku",children:"Teku"})]}),"\n",(0,i.jsxs)(t.li,{children:["vc5: ",(0,i.jsx)(t.a,{href:"https://github.com/status-im/nimbus-eth2",children:"Nimbus"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["The intention is to support all validator clients. Read more about our client support ",(0,i.jsx)(t.a,{href:"https://dvt.obol.tech",children:"here"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"step-3-start-the-cluster",children:"Step 3. Start the cluster"}),"\n",(0,i.jsx)(t.p,{children:"Run this command from each machine containing private keys to start your cluster containers"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:"# Start the distributed validator cluster\ndocker compose up --build\n"})}),"\n",(0,i.jsx)(t.p,{children:"Check the monitoring dashboard and see if things look all right"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:"# Open Grafana\nopen http://localhost:3000/d/laEp8vupp\n"})}),"\n",(0,i.jsx)(t.h2,{id:"step-4-activate-the-validator",children:"Step 4. Activate the validator"}),"\n",(0,i.jsx)(t.p,{children:"If all the above went correctly, it's natural to see logs like:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:'INFO sched      No active DVs for slot {"slot": 3288627}'})}),"\n",(0,i.jsxs)(t.p,{children:["This is because you need to activate your freshly created distributed validator on the testnet with the ",(0,i.jsx)(t.a,{href:"https://goerli.launchpad.ethereum.org/en/",children:"existing launchpad"}),". The validator deposit data should be in ",(0,i.jsx)(t.code,{children:".charon/cluster/deposit-data.json"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"This process can take a minimum of 16 hours, with the maximum time to activation being dictated by the length of the activation queue, which can be weeks. You can leave your distributed validator cluster offline until closer to the activation period if you would prefer. You can also use this time to improve and harden your monitoring and alerting for the cluster."}),"\n",(0,i.jsx)(t.h2,{id:"step-5-validator-voluntary-exit",children:"Step 5. Validator Voluntary Exit"}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsx)(t.p,{children:"This step only needs to be taken when you decide to exit your DV cluster."})}),"\n",(0,i.jsx)(t.p,{children:"A voluntary exit is when a validator chooses to stop performing its duties, and exits the beacon chain permanently. To voluntarily exit, the validator must continue performing its validator duties until successfully exited to avoid penalties."}),"\n",(0,i.jsxs)(t.p,{children:["To trigger a voluntary exit, a sidecar ",(0,i.jsx)(t.code,{children:"docker-compose"})," command is executed that signs and submits the voluntary exit to the active running charon node that shares it with other nodes in the cluster. The commands below should be executed in the terminal on the same machine and same folder as the active running ",(0,i.jsx)(t.code,{children:"charon-distribute-validator-node"})," docker compose."]}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsx)(t.p,{children:"A threshold of nodes in the cluster need to perform this task to exit a validator."})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Create a new ",(0,i.jsx)(t.code,{children:"exit_keys"})," folder next to ",(0,i.jsx)(t.code,{children:".charon/validator_keys"}),": ",(0,i.jsx)(t.code,{children:"mkdir .charon/exit_keys"})]}),"\n",(0,i.jsxs)(t.li,{children:["Copy the validator keys and passwords that you want to exit from the ",(0,i.jsx)(t.code,{children:"validator_keys"})," folder to the ",(0,i.jsx)(t.code,{children:"exit_keys"})," folder.","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["E.g. to exit validator #4: ",(0,i.jsx)(t.code,{children:"cp .charon/validator_keys/keystore/keystore-4* .charon/exit_keys/"})]}),"\n",(0,i.jsxs)(t.li,{children:["Warning: all keys copied to the ",(0,i.jsx)(t.code,{children:"exit_keys"})," folder will be exited, so be careful!"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["Ensure the external network in ",(0,i.jsx)(t.code,{children:"compose-voluntary-exit.yml"})," is correct.","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Confirm the name of the exiting ",(0,i.jsx)(t.code,{children:"charon-distributed-validator-node"})," docker network: ",(0,i.jsx)(t.code,{children:"docker network ls"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["If it isn't ",(0,i.jsx)(t.code,{children:"charon-distributed-validator-node-dvnode"}),", then update ",(0,i.jsx)(t.code,{children:"compose-voluntary-exit.yml"})," accordingly."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["Ensure the latest fork version epoch is used:","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Voluntary exists require an epoch after which they take effect."}),"\n",(0,i.jsx)(t.li,{children:"All VCs need to sign and submit the exact same messages (epoch) in DVT."}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"--epoch=1"})," would be ideal, since all chains have that epoch in the past, so the validator should exit immediately."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"compose-voluntary-exit.yml"})," is configured with ",(0,i.jsx)(t.code,{children:"--epoch=162304"})," which is the latest Capella fork on Goerli."]}),"\n",(0,i.jsxs)(t.li,{children:["If the Charon cluster is running on a different chain, ",(0,i.jsx)(t.strong,{children:"ALL"})," operators must update ",(0,i.jsx)(t.code,{children:"--epoch"})," to the same latest fork version returned by ",(0,i.jsx)(t.code,{children:"curl $BEACON_NODE/eth/v1/config/fork_schedule"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["Run the command to submit this node's partially signed voluntary exit:","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"docker compose -f compose-voluntary-exit.yml up"})}),"\n",(0,i.jsxs)(t.li,{children:["Confirm the logs: ",(0,i.jsx)(t.code,{children:"Exit for validator XXXXX submitted"})]}),"\n",(0,i.jsxs)(t.li,{children:["Exit the container: ",(0,i.jsx)(t.code,{children:"Ctrl-C"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["The charon metric ",(0,i.jsx)(t.code,{children:"core_parsigdb_exit_total"})," will be incremented each time a voluntary exit partial signature is received, either from this node or from peers."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"run-prysm-vcs-in-a-dv-cluster",children:"Run Prysm VCs in a DV Cluster"}),"\n",(0,i.jsxs)(t.p,{children:["We have provided experimental support of prysm validator client through ",(0,i.jsx)(t.a,{href:"https://github.com/ObolNetwork/charon-distributed-validator-cluster/blob/main/compose-prysm.yml",children:"compose-prysm.yml"}),"\nwhich needs a prysm beacon node to work alongside a REST based beacon node. Here are the steps to test prysm in a DV Cluster:"]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Run the following command:","\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:"cp docker-compose.override.yml.sample docker-compose.override.yml\n"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Disable"})," the VCs in ",(0,i.jsx)(t.code,{children:"docker-compose.override.yml"})," that are to be replaced by corresponding prysm VCs by un-commenting profiles field\n(",(0,i.jsx)(t.a,{href:"https://docs.docker.com/compose/profiles/",children:"more details on profiles"}),"). Also disable the prysm VCs that are not required in the cluster in ",(0,i.jsx)(t.code,{children:"docker-compose.override.yml"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["Run the following command:","\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:"docker compose -f docker-compose.yml -f compose-prysm.yml -f docker-compose.override.yml up --build\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Note: Support for prysm validator clients is in an experimental phase as prysm doesn't provide ",(0,i.jsx)(t.a,{href:"https://github.com/prysmaticlabs/prysm/issues/11580",children:"complete support"}),"\nfor running their validator client on a beacon node REST API."]}),"\n",(0,i.jsx)(t.h2,{id:"feedback",children:"Feedback"}),"\n",(0,i.jsxs)(t.p,{children:["If you have gotten this far through the process, and whether you succeeded or failed at running the distributed validator successfully, we would like to hear\nyour feedback on the process and where you encountered difficulties. Please let us know by joining and posting on our ",(0,i.jsx)(t.a,{href:"https://discord.gg/n6ebKsX46w",children:"Discord"}),".\nAlso, feel free to add issues to our ",(0,i.jsx)(t.a,{href:"https://github.com/ObolNetwork",children:"GitHub repos"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var i=n(96540);const s={},r=i.createContext(s);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);