"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[47907],{24405:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var o=n(74848),r=n(28453);const i={sidebar_position:2,description:"Run one node in a multi-operator distributed validator cluster using the CLI"},s="CLI",a={id:"int/quickstart/group/quickstart-group-cli",title:"CLI",description:"Run one node in a multi-operator distributed validator cluster using the CLI",source:"@site/versioned_docs/version-v0.12.0/int/quickstart/group/quickstart-group-cli.md",sourceDirName:"int/quickstart/group",slug:"/int/quickstart/group/quickstart-group-cli",permalink:"/v0.12.0/int/quickstart/group/quickstart-group-cli",draft:!1,unlisted:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.12.0/int/quickstart/group/quickstart-group-cli.md",tags:[],version:"v0.12.0",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Run one node in a multi-operator distributed validator cluster using the CLI"},sidebar:"tutorialSidebar",previous:{title:"Launchpad",permalink:"/v0.12.0/int/quickstart/group/quickstart-group-launchpad"},next:{title:"Run a cluster alone",permalink:"/v0.12.0/int/quickstart/quickstart-alone"}},d={},c=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Step 1. Creating and backing up a private key for charon",id:"step-1-creating-and-backing-up-a-private-key-for-charon",level:2},{value:"Step 2. Leader creates the DKG configuration file and distributes it to cluster operators",id:"step-2-leader-creates-the-dkg-configuration-file-and-distributes-it-to-cluster-operators",level:2},{value:"Step 3. Run the DKG",id:"step-3-run-the-dkg",level:2},{value:"Step 4. Start the Distributed Validator Cluster",id:"step-4-start-the-distributed-validator-cluster",level:2},{value:"Step 5. Activate the deposit data",id:"step-5-activate-the-deposit-data",level:2},{value:"Step 6. Leader Adds Central Monitoring Token",id:"step-6-leader-adds-central-monitoring-token",level:2},{value:"Validator Voluntary Exit",id:"validator-voluntary-exit",level:2},{value:"Self-Host a Bootnode",id:"self-host-a-bootnode",level:2}];function l(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"cli",children:"CLI"})}),"\n",(0,o.jsx)(t.p,{children:"The following instructions aim to assist a group of users coordinating together to create a distributed validator cluster between them."}),"\n",(0,o.jsx)(t.h2,{id:"pre-requisites",children:"Pre-requisites"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Ensure you have ",(0,o.jsx)(t.a,{href:"https://docs.docker.com/engine/install/",children:"docker"})," and ",(0,o.jsx)(t.a,{href:"https://git-scm.com/downloads",children:"git"})," installed. Also, make sure ",(0,o.jsx)(t.code,{children:"docker"})," is running before executing the commands below."]}),"\n",(0,o.jsxs)(t.li,{children:["Decide who the leader of your cluster will be. Only leaders have to perform ",(0,o.jsx)(t.a,{href:"#step-2-leader-creates-the-dkg-configuration-file-and-distributes-it-to-everyone-else",children:"step 2"})," and ",(0,o.jsx)(t.a,{href:"#step-5-activate-the-deposit-data",children:"step 5"})," in the quickstart process. They do not get any special privilege."]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"step-1-creating-and-backing-up-a-private-key-for-charon",children:"Step 1. Creating and backing up a private key for charon"}),"\n",(0,o.jsxs)(t.p,{children:["The first step of running a cluster is preparing for a distributed key generation ceremony. To do this everyone must create an ",(0,o.jsx)(t.a,{href:"/v0.12.0/int/faq/errors#what-is-an-enr",children:"ENR"})," for their charon client. This ENR is a public/private key pair, and allows the other charon clients in the DKG to identify and connect to your node."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sh",children:'# Clone this repo\ngit clone https://github.com/ObolNetwork/charon-distributed-validator-node.git\n\n# Change directory\ncd charon-distributed-validator-node\n\n# Create your charon ENR private key, this will create a charon-enr-private-key file in the .charon directory\ndocker run --rm -v "$(pwd):/opt/charon" obolnetwork/charon:v0.12.0 create enr\n'})}),"\n",(0,o.jsx)(t.p,{children:"You should expect to see a console output like"}),"\n",(0,o.jsx)(t.p,{children:"Created ENR private key: .charon/charon-enr-private-key\nenr:-JG4QGQpV4qYe32QFUAbY1UyGNtNcrVMip83cvJRhw1brMslPeyELIz3q6dsZ7GblVaCjL_8FKQhF6Syg-O_kIWztimGAYHY5EvPgmlkgnY0gmlwhH8AAAGJc2VjcDI1NmsxoQKzMe_GFPpSqtnYl-mJr8uZAUtmkqccsAx7ojGmFy-FY4N0Y3CCDhqDdWRwgg4u"}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"\u26a0\ufe0f Attention"}),"\n",(0,o.jsxs)(t.p,{children:["Please make sure to create a backup of the private key at ",(0,o.jsx)(t.code,{children:".charon/charon-enr-private-key"}),". Be careful not to commit it to git! ",(0,o.jsx)(t.strong,{children:"If you lose this file you won't be able to take part in the DKG ceremony."})]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["If you are taking part in an organised Obol testnet, submit the created ENR public address (the console output starting with ",(0,o.jsx)(t.code,{children:"enr:-..."})," not the contents of the private key file) to the appropriate typeform."]}),"\n",(0,o.jsx)(t.h2,{id:"step-2-leader-creates-the-dkg-configuration-file-and-distributes-it-to-cluster-operators",children:"Step 2. Leader creates the DKG configuration file and distributes it to cluster operators"}),"\n",(0,o.jsxs)(t.p,{children:["The leader will prepare the ",(0,o.jsx)(t.code,{children:"cluster-definition.json"})," file for the Distributed Key Generation ceremony using the ",(0,o.jsx)(t.code,{children:"charon create dkg"})," command."]}),"\n",(0,o.jsxs)(t.p,{children:["In future, step 1 and step 2 of this guide will use the ",(0,o.jsx)(t.a,{href:"https://docs.obol.tech/docs/dvk/distributed_validator_launchpad",children:"Obol Distributed Validator Launchpad"})," to facilitate and verify these files are created in an authenticated manner."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'# Prepare an environment variable file\ncp .env.create_dkg.sample .env.create_dkg\n\n# Populate the .env.create_dkg file with the cluster name, the fee recipient and withdrawal Ethereum addresses and the \n# operator ENRs of all the operators participating in the DKG ceremony.\n\n# Run the `charon create dkg` command that generates DKG cluster-definition.json file.\ndocker run --rm -v "$(pwd):/opt/charon" --env-file .env.create_dkg obolnetwork/charon:v0.12.0 create dkg\n'})}),"\n",(0,o.jsxs)(t.p,{children:["This command should output a file at ",(0,o.jsx)(t.code,{children:".charon/cluster-definition.json"}),". This file needs to be shared with the other operators in a cluster."]}),"\n",(0,o.jsx)(t.h2,{id:"step-3-run-the-dkg",children:"Step 3. Run the DKG"}),"\n",(0,o.jsxs)(t.p,{children:["After receiving the ",(0,o.jsx)(t.code,{children:"cluster-definition.json"})," file created by the leader, cluster members should ideally save it in the ",(0,o.jsx)(t.code,{children:".charon/"})," folder that was created during step 1, alternatively the ",(0,o.jsx)(t.code,{children:"--definition-file"})," flag can override the default expected location for this file."]}),"\n",(0,o.jsx)(t.p,{children:"Every cluster member then participates in the DKG ceremony. For Charon v1, this needs to happen synchronously between participants at an agreed time."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'# Participate in DKG ceremony, this will create .charon/cluster-lock.json, .charon/deposit-data.json and .charon/validator_keys\ndocker run --rm -v "$(pwd):/opt/charon" obolnetwork/charon:v0.12.0 dkg\n'})}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["This is a helpful ",(0,o.jsx)(t.a,{href:"https://www.youtube.com/watch?v=94Pkovp5zoQ&ab_channel=ObolNetwork",children:"video walkthrough"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["Assuming the DKG is successful, a number of artefacts will be created in the ",(0,o.jsx)(t.code,{children:".charon"})," folder. These include:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["A ",(0,o.jsx)(t.code,{children:"deposit-data.json"})," file. This contains the information needed to activate the validator on the Ethereum network."]}),"\n",(0,o.jsxs)(t.li,{children:["A ",(0,o.jsx)(t.code,{children:"cluster-lock.json"})," file. This contains the information needed by charon to operate the distributed validator cluster with its peers."]}),"\n",(0,o.jsxs)(t.li,{children:["A ",(0,o.jsx)(t.code,{children:"validator_keys/"})," folder. This folder contains the private key shares and passwords for the created distributed validators."]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["At this point you should make a backup of the ",(0,o.jsx)(t.code,{children:".charon/validator_keys"})," folder as replacing lost private keys is not straightforward at this point in charon's development. The ",(0,o.jsx)(t.code,{children:"cluster-lock"})," and ",(0,o.jsx)(t.code,{children:"deposit-data"})," files are identical for each operator and can be copied if lost."]}),"\n",(0,o.jsxs)(t.p,{children:["If taking part in an official Obol testnet, one cluster member will have to submit the ",(0,o.jsx)(t.code,{children:"cluster-lock"})," and ",(0,o.jsx)(t.code,{children:"deposit-data"})," files to the Obol Team."]}),"\n",(0,o.jsx)(t.h2,{id:"step-4-start-the-distributed-validator-cluster",children:"Step 4. Start the Distributed Validator Cluster"}),"\n",(0,o.jsxs)(t.p,{children:["With the DKG ceremony over, the last phase before activation is to prepare your node for validating over the long term. This repo is configured to sync an execution layer client (",(0,o.jsx)(t.code,{children:"nethermind"}),") and a consensus layer client (",(0,o.jsx)(t.code,{children:"nimbus"}),")."]}),"\n",(0,o.jsxs)(t.p,{children:["Before completing these instructions, you should assign a static local IP address to your device (extending the DHCP reservation indefinitely or removing the device from the DCHP pool entirely if you prefer), and port forward the TCP protocol on the public port ",(0,o.jsx)(t.code,{children:":3610"})," on your router to your device's local IP address on the same port. This step is different for every person's home internet, and can be complicated by the presence of dynamic public IP addresses. We are currently working on making this as easy as possible, but for the time being, a distributed validator cluster isn't going to work very resiliently if all charon nodes cannot talk directly to one another and instead need to have an intermediary node forwarding traffic to them."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Caution"}),": If you manually update ",(0,o.jsx)(t.code,{children:"docker-compose"})," to mount ",(0,o.jsx)(t.code,{children:"lighthouse"})," from your locally synced ",(0,o.jsx)(t.code,{children:"~/.lighthouse"}),", the whole chain database may get deleted. It'd be best not to manually update as ",(0,o.jsx)(t.code,{children:"lighthouse"})," checkpoint-syncs so the syncing doesn't take much time."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"NOTE"}),": If you have a ",(0,o.jsx)(t.code,{children:"geth"})," node already synced, you can simply copy over the directory. For ex: ",(0,o.jsx)(t.code,{children:"cp -r ~/.ethereum/goerli data/geth"}),". This makes everything faster since you start from a synced geth node."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"# Delete lighthouse data if it exists\nrm -r ./data/lighthouse\n\n# Spin up a Distributed Validator Node with a Validator Client\ndocker-compose up\n\n# Open Grafana dashboard\nopen http://localhost:3000/d/singlenode/\n"})}),"\n",(0,o.jsx)(t.p,{children:"You should use the grafana dashboard to infer whether your cluster is healthy. In particular you should check:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"That your charon client can connect to the configured beacon client."}),"\n",(0,o.jsx)(t.li,{children:"That your charon client can connect to all peers"}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Most components in the dashboard have some help text there to assist you in understanding your cluster performance."}),"\n",(0,o.jsx)(t.p,{children:"You might notice that there are logs indicating that a validator cannot be found and that APIs are returning 404. This is to be expected at this point, as the validator public keys listed in the lock file have not been deposited and acknowledged on the consensus layer yet (usually ~16 hours after the deposit is made)."}),"\n",(0,o.jsx)(t.p,{children:"To turn off your node after checking the health of the cluster you can run:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"# Shut down the currently running distributed validator node\ndocker-compose down\n"})}),"\n",(0,o.jsx)(t.h2,{id:"step-5-activate-the-deposit-data",children:"Step 5. Activate the deposit data"}),"\n",(0,o.jsxs)(t.p,{children:["If you and your team have gotten to this phase of the quickstart, and you have successfully created a distributed validator together, and you have connected all of your charon clients together such that the monitoring indicates that they are all healthy and ready to operate, one person may process to activate this deposit data with the existing ",(0,o.jsx)(t.a,{href:"https://prater.launchpad.ethereum.org/",children:"staking launchpad"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"This process can take a minimum of 16 hours, with the maximum time to activation being dictated by the length of the activation queue, which can be weeks. You can leave your distributed validator cluster offline until closer to the activation period if you would prefer. You can also use this time to improve and harden your monitoring and alerting for the cluster."}),"\n",(0,o.jsxs)(t.p,{children:["If you have gotten this far through the process, and whether you succeed or fail at running the distributed validator successfully on the testnet, we would like to hear your feedback on the process and where you encountered difficulties. Please let us know by joining and posting on our ",(0,o.jsx)(t.a,{href:"https://discord.gg/TsXFa8uB2E",children:"Discord"}),". Also, feel free to add issues to our ",(0,o.jsx)(t.a,{href:"https://github.com/ObolNetwork",children:"GitHub repos"}),"."]}),"\n",(0,o.jsx)(t.h1,{id:"other-optional-actions",children:"Other Optional Actions"}),"\n",(0,o.jsx)(t.p,{children:"The above steps should get you running a distributed validator cluster. The following are some extra steps you may want to take either to help Obol with their testing program, or to improve the resilience and performance of your distributed validator cluster."}),"\n",(0,o.jsx)(t.h2,{id:"step-6-leader-adds-central-monitoring-token",children:"Step 6. Leader Adds Central Monitoring Token"}),"\n",(0,o.jsxs)(t.p,{children:["The cluster leader may be provided with a Central Monitoring Token used to push distributed validator metrics to our central prometheus service to monitor, analyze and improve your cluster's performance. The token needs to be added in prometheus/prometheus.yml replacing ",(0,o.jsx)(t.code,{children:"$PROM_REMOTE_WRITE_TOKEN"}),". The token will look like:\n",(0,o.jsx)(t.code,{children:"eyJtZXNzYWdlIjoiSldUIFJ1bGVzISIsImlhdCI6MTQ1OTQ0ODExOSwiZXhwIjoxNDU5NDU0NTE5fQ"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"Final prometheus/prometheus.yml would look something like:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"global:\n  scrape_interval:     30s # Set the scrape interval to every 30 seconds.\n  evaluation_interval: 30s # Evaluate rules every 30 seconds.\n\nremote_write:\n  - url: https://vm.monitoring.gcp.obol.tech/write\n    authorization:\n      credentials: eyJtZXNzYWdlIjoiSldUIFJ1bGVzISIsImlhdCI6MTQ1OTQ0ODExOSwiZXhwIjoxNDU5NDU0NTE5fQ\n\nscrape_configs:\n  - job_name: 'charon'\n    static_configs:\n      - targets: ['charon:3620']\n  - job_name: 'teku'\n    static_configs:\n      - targets: ['teku:8008']\n  - job_name: 'node-exporter'\n    static_configs:\n      - targets: ['node-exporter:9100']\n"})}),"\n",(0,o.jsx)(t.h2,{id:"validator-voluntary-exit",children:"Validator Voluntary Exit"}),"\n",(0,o.jsx)(t.p,{children:"A voluntary exit is when a validator chooses to stop performing its duties, and exits the beacon chain permanently. To voluntarily exit, the validator must continue performing its validator duties until successfully exited to avoid penalties."}),"\n",(0,o.jsxs)(t.p,{children:["To trigger a voluntary exit, a sidecar docker-compose command is executed that signs and submits the voluntary exit to the active running charon node that shares it with other nodes in the cluster. The commands below should be executed on the same machine and same folder as the active running ",(0,o.jsx)(t.code,{children:"charon-distribute-validator-node"})," docker compose."]}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsx)(t.p,{children:"A threshold of peers in the cluster need to perform this task to exit a validator."})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Create a new ",(0,o.jsx)(t.code,{children:"exit_keys"})," folder next to ",(0,o.jsx)(t.code,{children:".charon/validator_keys"}),": ",(0,o.jsx)(t.code,{children:"mkdir .charon/exit_keys"})]}),"\n",(0,o.jsxs)(t.li,{children:["Copy the validator keys and passwords that you want to exit from the ",(0,o.jsx)(t.code,{children:"validator_keys"})," folder to the ",(0,o.jsx)(t.code,{children:"exit_keys"})," folder.","\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["E.g. to exit validator #4: ",(0,o.jsx)(t.code,{children:"cp .charon/validator_keys/keystore/keystore-4* .charon/exit_keys/"})]}),"\n",(0,o.jsxs)(t.li,{children:["Warning: all keys copied to the ",(0,o.jsx)(t.code,{children:"exit_keys"})," folder will be exited, so be careful!"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["Ensure the external network in ",(0,o.jsx)(t.code,{children:"compose-voluntary-exit.yml"})," is correct.","\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Confirm the name of the exiting ",(0,o.jsx)(t.code,{children:"charon-distributed-validator-node"})," docker network: ",(0,o.jsx)(t.code,{children:"docker network ls"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:["If it isn't ",(0,o.jsx)(t.code,{children:"charon-distributed-validator-node-dvnode"}),", then update ",(0,o.jsx)(t.code,{children:"compose-voluntary-exit.yml"})," accordingly."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["Ensure the latest fork version epoch is used:","\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Voluntary exists require an epoch after which they take effect."}),"\n",(0,o.jsx)(t.li,{children:"All VCs need to sign and submit the exact same messages (epoch) in DVT."}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"--epoch=1"})," would be ideal, since all chains have that epoch in the past, so the validator should exit immediately."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"compose-voluntary-exit.yml"})," is configured with ",(0,o.jsx)(t.code,{children:"--epoch=112260"})," which is the latest Bellatrix fork on Prater."]}),"\n",(0,o.jsxs)(t.li,{children:["If the Charon cluster is running on a different chain, ",(0,o.jsx)(t.strong,{children:"ALL"})," operators must update ",(0,o.jsx)(t.code,{children:"--epoch"})," to the same latest fork version returned by ",(0,o.jsx)(t.code,{children:"curl $BEACON_NODE/eth/v1/config/fork_schedule"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["Run the command to submit this node's partially signed voluntary exit:","\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.code,{children:"docker-compose -f compose-voluntary-exit.yml up"})}),"\n",(0,o.jsxs)(t.li,{children:["Confirm the logs: ",(0,o.jsx)(t.code,{children:"Exit for validator XXXXX submitted"})]}),"\n",(0,o.jsxs)(t.li,{children:["Exit the container: ",(0,o.jsx)(t.code,{children:"Ctrl-C"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["The charon metric ",(0,o.jsx)(t.code,{children:"core_parsigdb_exit_total"})," will be incremented each time a voluntary exit partial signature is received, either from this node or from peers."]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"self-host-a-bootnode",children:"Self-Host a Bootnode"}),"\n",(0,o.jsx)(t.p,{children:"If you are experiencing connectivity issues with the Obol hosted bootnode, or you want to improve your clusters latency and decentralisation, you can opt to host your own bootnode on a separate open and static internet port."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"# Figure out your public IP\ncurl v4.ident.me\n\n# Clone the repo and cd into it.\ngit clone https://github.com/ObolNetwork/charon-distributed-validator-node.git\n\ncd charon-distributed-validator-node\n\n# Replace 'replace.with.public.ip.or.hostname' in bootnode/docker-compose.yml with your public IPv4 or DNS hostname # Replace 'replace.with.public.ip.or.hostname' in bootnode/docker-compose.yml with your public IPv4 or DNS hostname\n\nnano bootnode/docker-compose.yml\n\ndocker-compose -f bootnode/docker-compose.yml up\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Test whether the bootnode is publicly accessible. This should return an ENR:\n",(0,o.jsx)(t.code,{children:"curl http://replace.with.public.ip.or.hostname:3640/enr"})]}),"\n",(0,o.jsxs)(t.p,{children:["Ensure the ENR returned by the bootnode contains the correct public IP and port by decoding it with ",(0,o.jsx)(t.a,{href:"https://enr-viewer.com/",children:"https://enr-viewer.com/"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["Configure ",(0,o.jsx)(t.strong,{children:"ALL"})," charon nodes in your cluster to use this bootnode:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Either by adding a flag: ",(0,o.jsx)(t.code,{children:"--p2p-bootnodes=http://replace.with.public.ip.or.hostname:3640/enr"})]}),"\n",(0,o.jsxs)(t.li,{children:["Or by setting the environment variable: ",(0,o.jsx)(t.code,{children:"CHARON_P2P_BOOTNODES=http://replace.with.public.ip.or.hostname:3640/enr"})]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["Note that a local ",(0,o.jsx)(t.code,{children:"boonode/.charon/charon-enr-private-key"})," file will be created next to ",(0,o.jsx)(t.code,{children:"bootnode/docker-compose.yml"})," to ensure a persisted bootnode ENR across restarts."]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var o=n(96540);const r={},i=o.createContext(r);function s(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);