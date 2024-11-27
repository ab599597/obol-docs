"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[61585],{24191:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>h});var r=n(74848),o=n(28453),i=n(49489),s=n(7227);const a={sidebar_position:4,description:"Create a DV with a group"},l="Create a DV with a group",c={id:"start/quickstart_group",title:"Create a DV with a group",description:"Create a DV with a group",source:"@site/versioned_docs/version-v0.19.1/start/quickstart_group.md",sourceDirName:"start",slug:"/start/quickstart_group",permalink:"/v0.19.1/start/quickstart_group",draft:!1,unlisted:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.19.1/start/quickstart_group.md",tags:[],version:"v0.19.1",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"Create a DV with a group"},sidebar:"tutorialSidebar",previous:{title:"Create a DV alone",permalink:"/v0.19.1/start/quickstart_alone"},next:{title:"Activate a DV",permalink:"/v0.19.1/start/activate-dv"}},d={},h=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Step 1: Generate an ENR",id:"step-1-generate-an-enr",level:2},{value:"Step 2: Create a cluster or accept an invitation to a cluster",id:"step-2-create-a-cluster-or-accept-an-invitation-to-a-cluster",level:2},{value:"Step 3: Run the Distributed Key Generation (DKG) ceremony",id:"step-3-run-the-distributed-key-generation-dkg-ceremony",level:2},{value:"Step 4: Start your Distributed Validator Node",id:"step-4-start-your-distributed-validator-node",level:2},{value:"Using a pre-existing beacon node",id:"using-a-pre-existing-beacon-node",level:4}];function u(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"create-a-dv-with-a-group",children:"Create a DV with a group"})}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsxs)(t.p,{children:["Charon is in a beta state and should be used with caution according to its ",(0,r.jsx)(t.a,{href:"https://obol.tech/terms.pdf",children:"Terms of Use"}),"."]})}),"\n",(0,r.jsx)(t.p,{children:"This quickstart guide will walk you through creating a Distributed Validator Cluster with a number of other node operators."}),"\n",(0,r.jsx)(t.h2,{id:"pre-requisites",children:"Pre-requisites"}),"\n",(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:[(0,r.jsxs)(t.p,{children:["A basic"," "]}),(0,r.jsx)("a",{href:"https://docs.ethstaker.cc/ethstaker-knowledge-base/",target:"_blank",children:(0,r.jsx)(t.p,{children:"knowledge"})})," ",(0,r.jsx)(t.p,{children:"of Ethereum nodes and validators."})]}),(0,r.jsxs)("li",{children:[(0,r.jsxs)(t.p,{children:["Ensure you have"," "]}),(0,r.jsx)("a",{href:"https://git-scm.com/downloads",target:"_blank",children:(0,r.jsx)(t.p,{children:"git"})})," ",(0,r.jsx)(t.p,{children:"installed."})]}),(0,r.jsxs)("li",{children:[(0,r.jsxs)(t.p,{children:["Ensure you have"," "]}),(0,r.jsx)("a",{href:"https://docs.docker.com/engine/install/",target:"_blank",children:(0,r.jsx)(t.p,{children:"docker"})})," ",(0,r.jsxs)(t.p,{children:["installed."," "]})]}),(0,r.jsx)("li",{children:(0,r.jsxs)(t.p,{children:["Make sure ",(0,r.jsx)("code",{children:"docker"})," is running before executing the commands\nbelow."]})})]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(t.h2,{id:"step-1-generate-an-enr",children:"Step 1: Generate an ENR"}),"\n",(0,r.jsx)(t.p,{children:"In order to prepare for a distributed key generation ceremony, you need to create an ENR for your charon client. This ENR is a public/private key pair that allows the other charon clients in the DKG to identify and connect to your node. If you are creating a cluster but not taking part as a node operator in it, you can skip this step."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'# Clone the repo\ngit clone https://github.com/ObolNetwork/charon-distributed-validator-node.git\n\n# Change directory\ncd charon-distributed-validator-node/\n\n# Use docker to create an ENR. Backup the file `.charon/charon-enr-private-key`.\ndocker run --rm -v "$(pwd):/opt/charon" obolnetwork/charon:v0.19.1 create enr\n'})}),"\n",(0,r.jsx)(t.p,{children:"You should expect to see a console output like this:"}),"\n",(0,r.jsx)(t.p,{children:"Created ENR private key: .charon/charon-enr-private-key\nenr:-JG4QGQpV4qYe32QFUAbY1UyGNtNcrVMip83cvJRhw1brMslPeyELIz3q6dsZ7GblVaCjL_8FKQhF6Syg-O_kIWztimGAYHY5EvPgmlkgnY0gmlwhH8AAAGJc2VjcDI1NmsxoQKzMe_GFPpSqtnYl-mJr8uZAUtmkqccsAx7ojGmFy-FY4N0Y3CCDhqDdWRwgg4u"}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsxs)(t.p,{children:["Please make sure to create a backup of the private key at ",(0,r.jsx)(t.code,{children:".charon/charon-enr-private-key"}),". Be careful not to commit it to git! ",(0,r.jsx)(t.strong,{children:"If you lose this file you won't be able to take part in the DKG ceremony nor start the DV cluster successfully."})]})}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["If instead of being shown your ",(0,r.jsx)(t.code,{children:"enr"})," you see an error saying ",(0,r.jsx)(t.code,{children:"permission denied"})," then you may need to ",(0,r.jsx)(t.a,{href:"../int/faq/errors#docker-permission-denied-error",children:"update your docker permissions"})," to allow the command to run successfully."]})}),"\n",(0,r.jsxs)(t.p,{children:["For the next step, select the ",(0,r.jsx)(t.em,{children:"Creator"})," tab if you are coordinating the creation of the cluster. (This role holds no position of privilege in the cluster, it only sets the initial terms of the cluster that the other operators agree to.) Select the ",(0,r.jsx)(t.em,{children:"Operator"})," tab if you are accepting an invitation to operate a node in a cluster proposed by the cluster creator."]}),"\n",(0,r.jsx)(t.h2,{id:"step-2-create-a-cluster-or-accept-an-invitation-to-a-cluster",children:"Step 2: Create a cluster or accept an invitation to a cluster"}),"\n",(0,r.jsxs)(i.A,{groupId:"Creator",children:[(0,r.jsxs)(s.A,{value:"Creator",label:"Creator",default:!0,children:[(0,r.jsx)("h2",{children:" Collect addresses, configure the cluster, share the invitation"}),(0,r.jsx)("p",{children:(0,r.jsxs)(t.p,{children:["Before starting the cluster creation process, you will need to collect an\nEthereum address for each operator in the cluster. They will need to be\nable to sign messages through MetaMask with this address.\n",(0,r.jsx)("i",{children:"(Broader wallet support will be added in future.)"})," With these addresses\nin hand, go through the cluster creation flow."]})}),(0,r.jsxs)(i.A,{groupId:"Launchpad-other",children:[(0,r.jsxs)(s.A,{value:"Launchpad",label:"Launchpad",default:!0,children:[(0,r.jsxs)("p",{children:[(0,r.jsx)(t.p,{children:"You will use the Launchpad to create an invitation, and share it with\nthe operators."}),(0,r.jsx)("br",{}),(0,r.jsxs)(t.p,{children:["This video shows the flow within the"," "]}),(0,r.jsx)("a",{href:"/docs/dvl/intro#dv-launchpad-links",target:"_blank",children:(0,r.jsx)(t.p,{children:"DV Launchpad"})}),(0,r.jsx)(t.p,{children:":"})]}),(0,r.jsx)("p",{align:"center",children:(0,r.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/6pXASqjAQbs",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})}),(0,r.jsxs)("p",{children:[(0,r.jsx)(t.p,{children:"The following are the steps for creating a cluster."}),(0,r.jsxs)("ol",{children:[(0,r.jsx)("li",{children:(0,r.jsxs)(t.p,{children:["Go to the"," ","\n",(0,r.jsx)("a",{href:"/docs/dvl/intro#dv-launchpad-links",children:"DV Launchpad"})]})}),(0,r.jsxs)("li",{children:[(0,r.jsx)(t.p,{children:"Connect your wallet"}),(0,r.jsx)("img",{src:"/img/Guide01.png",alt:"Connect your wallet"})]}),(0,r.jsxs)("li",{children:[(0,r.jsxs)(t.p,{children:["Select ",(0,r.jsx)("code",{children:"Create a Cluster with a group"})," then"," ","\n",(0,r.jsx)("code",{children:"Get Started"}),"."]}),(0,r.jsx)("img",{src:"/img/Guide02.png",alt:"Get started"})]}),(0,r.jsx)("li",{children:"Follow the flow and accept the advisories."}),(0,r.jsx)("li",{children:"Configure the Cluster"}),(0,r.jsx)("ul",{children:(0,r.jsx)("li",{children:(0,r.jsxs)(t.p,{children:["Input the ",(0,r.jsx)("code",{children:"Cluster Name"})," & ",(0,r.jsx)("code",{children:"Cluster Size"})," ","\n(i.e. number of operators in the cluster). The threshold will\nupdate automatically, it shows the number of nodes that need to\nbe functioning for the validator(s) to stay active."]})})}),(0,r.jsx)("li",{children:(0,r.jsx)(t.p,{children:'Input the Ethereum addresses for each operator that you collected\npreviously. If you will be taking part as an operator, click the\n"Use My Address" button for Operator 1.'})}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)(t.p,{children:"Select the desired amount of validators (32 ETH each) the\ncluster will run. (Note that the mainnet launchpad is restricted\nto one validator for now.)"})}),(0,r.jsx)("li",{children:(0,r.jsxs)(t.p,{children:["If you are taking part in the cluster, enter the ENR you\ngenerated in ",(0,r.jsx)("a",{href:"#step-1-generate-an-enr",children:"step one"}),' in\nthe "What is your charon client\'s ENR?" field.']})}),(0,r.jsx)("li",{children:(0,r.jsxs)(t.p,{children:["Enter the ",(0,r.jsx)("code",{children:"Principal address"})," which should receive\nthe principal 32 ETH and the accrued consensus layer rewards\nwhen the validator is exited. This can optionally be set to the\ncontract address of a multisig / splitter contract."]})}),(0,r.jsx)("li",{children:(0,r.jsxs)(t.p,{children:["Enter the ",(0,r.jsx)("code",{children:"Fee Recipient address"})," to which the\nexecution layer rewards will go. This can be the same as the\nprincipal address, or it can be a different address. This can\noptionally be set to the contract address of a multisig /\nsplitter contract."]})})]}),(0,r.jsx)("li",{children:(0,r.jsxs)(t.p,{children:["Click ",(0,r.jsx)("code",{children:"Create Cluster Configuration"}),". Review that all\nthe details are correct, and press ",(0,r.jsx)("code",{children:"Confirm and Sign"})," ","\nYou will be prompted to sign two or three transactions with your\nMetaMask wallet. These are:"]})}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)("code",{children:"config_hash"}),". This is a hashed representation of\nthe details of this cluster, to ensure everyone is agreeing to\nan identical setup."]})}),(0,r.jsx)("li",{children:(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)("code",{children:"operator_config_hash"}),". This is your acceptance\nof the terms and conditions of participating as a node operator."]})}),(0,r.jsx)("li",{children:(0,r.jsxs)(t.p,{children:["Your ",(0,r.jsx)("code",{children:"ENR"}),". Signing your ENR authorises the\ncorresponding private key to act on your behalf in the cluster."]})})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)(t.p,{children:"Share your cluster invite link with the operators. Following the\nlink will show you a screen waiting for other operators to accept\nthe configuration you created."}),(0,r.jsx)("img",{src:"/img/Guide04.png",alt:"Invite Operators"})]}),(0,r.jsx)("li",{children:(0,r.jsx)(t.p,{children:"You can use the link to monitor how many of the operators have\nalready signed their approval of the cluster configuration and\nsubmitted their ENR."})})]})]})]}),(0,r.jsx)(s.A,{value:"CLI",label:"CLI",children:(0,r.jsxs)("p",{children:[(0,r.jsx)(t.p,{children:"You will use the CLI to create the cluster definition file, which you\nwill distribute it to the operators manually."}),(0,r.jsxs)("ol",{children:[(0,r.jsx)("li",{children:(0,r.jsxs)(t.p,{children:["The leader or creator of the cluster will prepare the\n",(0,r.jsx)("code",{children:"cluster-definition.json"})," file for the Distributed Key Generation\nceremony using the ",(0,r.jsx)("code",{children:"charon create dkg"})," command."]})}),(0,r.jsx)("li",{children:(0,r.jsxs)(t.p,{children:["Populate the ",(0,r.jsx)("code",{children:"charon create dkg"})," command with the\nappropriate flags including the ",(0,r.jsx)("code",{children:"name"}),", the"," ","\n",(0,r.jsx)("code",{children:"num-validators"}),", the"," ","\n",(0,r.jsx)("code",{children:"fee-recipient-addresses"}),", the"," ","\n",(0,r.jsx)("code",{children:"withdrawal-addresses"}),", and the"," ","\n",(0,r.jsx)("code",{children:"operator-enrs"})," of all the operators participating in\nthe cluster."]})}),(0,r.jsxs)("li",{children:[(0,r.jsxs)(t.p,{children:["Run the ",(0,r.jsx)("code",{children:"charon create dkg"}),' command that generates DKG\ncluster-definition.json file. (Note: in the "docker run" command,\nyou may have to change the version from v0.19.0 to the correct\nversion of the repo you are using)']}),(0,r.jsx)("pre",{children:(0,r.jsxs)(t.p,{children:['docker run --rm -v "$(pwd):/opt/charon"\nobolnetwork/charon',":v0",'.19.0 create dkg --name="Quickstart"\n--num-validators=1\n--fee-recipient-addresses="0x0000000000000000000000000000000000000000"\n--withdrawal-addresses="0x0000000000000000000000000000000000000000"\n--operator-enrs="enr:-JG4QGQpV4qYe32QFUAbY1UyGNtNcrVMip83cvJRhw1brMslPeyELIz3q6dsZ7GblVaCjL_8FKQhF6Syg-O_kIWztimGAYHY5EvPgmlkgnY0gmlwhH8AAAGJc2VjcDI1NmsxoQKzMe_GFPpSqtnYl-mJr8uZAUtmkqccsAx7ojGmFy-FY4N0Y3CCDhqDdWRwgg4u"']})}),(0,r.jsxs)(t.p,{children:["This command should output a file at\n",(0,r.jsx)("code",{children:".charon/cluster-definition.json"})," This file needs to be\nshared with the other operators in a cluster."]}),(0,r.jsx)("ul",{children:(0,r.jsx)("li",{children:(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)("code",{children:".charon"})," folder is hidden by default. To view\nit, run ",(0,r.jsx)("code",{children:"ls -al .charon"})," in your terminal. Else, if\nyou are on ",(0,r.jsx)("code",{children:"macOS"}),", press"," ","\n",(0,r.jsx)("code",{children:"Cmd + Shift + ."})," to view all hidden files in the\nfinder application."]})})})]})]})]})})]})]}),(0,r.jsxs)(s.A,{value:"Operator",label:"Operator",children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)("h2",{children:"Join the cluster prepared by the creator"}),"\nUse the Launchpad or CLI to join the cluster configuration generated by the creator:"]}),(0,r.jsxs)(i.A,{groupId:"Launchpad-other",children:[(0,r.jsxs)(s.A,{value:"Launchpad",label:"Launchpad",default:!0,children:[(0,r.jsx)(t.p,{children:"Your cluster creator needs to configure the cluster, and send you\nan invite URL link to join the cluster on the Launchpad. Once you've\nreceived the Launchpad invite link, you can begin the cluster acceptance process."}),(0,r.jsx)("p",{align:"center",children:(0,r.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/6pXASqjAQbs",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})}),(0,r.jsxs)("ol",{children:[(0,r.jsx)("li",{children:"Click on the DV launchpad link provided by the leader or creator. Make sure you recognise the domain and the person sending you the link, to ensure you are not being phished."}),(0,r.jsxs)("li",{children:["Connect your wallet using the Ethereum address provided to the leader. ",(0,r.jsx)("img",{src:"/img/Guide05.png",alt:"Connect Wallet"})]}),(0,r.jsxs)("li",{children:["Review the operators addresses\nsubmitted and click ",(0,r.jsx)("code",{children:"Get Started"})," to continue. ",(0,r.jsx)("img",{src:"/img/Guide06.png",alt:"Get Started"})]}),(0,r.jsx)("li",{children:"Review and accept the DV Launchpad terms & conditions and advisories. "}),(0,r.jsxs)("li",{children:["Review the cluster configuration set by the creator and add your\n",(0,r.jsx)("code",{children:"ENR"})," that you generated in ",(0,r.jsx)("a",{href:"#step-1-generate-an-enr",children:"step 1"}),".",(0,r.jsx)("img",{src:"/img/Guide07.png",alt:"Review Config"})]}),(0,r.jsx)("li",{children:(0,r.jsxs)(t.p,{children:["Sign the two transactions with your wallet, these are:\n",(0,r.jsx)("ul",{children:"The config hash.\nThis is a hashed representation of all of the details for this cluster."}),"\n",(0,r.jsxs)("ul",{children:["Your own ",(0,r.jsx)("code",{children:"ENR"})," This signature authorises the key represented by\nthis ENR to act on your behalf in the cluster."]})]})}),(0,r.jsx)("li",{children:"Wait for all the other\noperators in your cluster to also finish these steps."})]})]}),(0,r.jsx)(s.A,{value:"CLI",label:"CLI",children:(0,r.jsxs)(t.p,{children:["You'll receive the ",(0,r.jsx)("code",{children:"cluster-definition.json"})," file created by\nthe leader/creator. You should save it in the ",(0,r.jsx)("code",{children:".charon/"})," ","\nfolder that was created initially. (Alternatively, you can use the"," ","\n",(0,r.jsx)("code",{children:"--definition-file"}),"\nflag to override the default expected location for this file.)"]})})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"Once every participating operator is ready, the next step is the distributed key generation amongst the operators."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"If you are not planning on operating a node, and were only configuring the cluster for the operators, your journey ends here. Well done!"}),"\n",(0,r.jsx)(t.li,{children:"If you are one of the cluster operators, continue to the next step."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"step-3-run-the-distributed-key-generation-dkg-ceremony",children:"Step 3: Run the Distributed Key Generation (DKG) ceremony"}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["For the ",(0,r.jsx)(t.a,{href:"/v0.19.1/charon/dkg",children:"DKG"})," to complete, all operators need to be running the command simultaneously. It helps if operators can agreed on a certain time or schedule a video call for them to all run the command together."]})}),"\n",(0,r.jsxs)(i.A,{groupId:"Launchpad-other",children:[(0,r.jsxs)(s.A,{value:"Launchpad",label:"Launchpad",default:!0,children:[(0,r.jsx)("p",{align:"center",children:(0,r.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/cEMhxHuNJrI",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})}),(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Once all operators successfully signed, your screen will automatically advance to the next step and look like this. Click ",(0,r.jsx)(t.code,{children:"Continue"}),". (If you closed the tab, you can always go back to the invite link shared by the leader and connect your wallet.)"]}),"\n"]}),(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Config Signing Success",src:n(98009).A+"",width:"2864",height:"2164"})}),(0,r.jsxs)(t.ol,{start:"2",children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Copy and run the ",(0,r.jsx)(t.code,{children:"docker"})," command on the screen into your terminal. It will retrieve the remote cluster details and begin the DKG process."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Run the DKG",src:n(32646).A+"",width:"1897",height:"1388"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Assuming the DKG is successful, a number of artefacts will be created in the ",(0,r.jsx)(t.code,{children:".charon"})," folder of the node. These include:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["A ",(0,r.jsx)(t.code,{children:"deposit-data.json"})," file. This contains the information needed to activate the validator on the Ethereum network."]}),"\n",(0,r.jsxs)(t.li,{children:["A ",(0,r.jsx)(t.code,{children:"cluster-lock.json"})," file. This contains the information needed by charon to operate the distributed validator cluster with its peers."]}),"\n",(0,r.jsxs)(t.li,{children:["A ",(0,r.jsx)(t.code,{children:"validator_keys/"})," folder. This folder contains the private key shares and passwords for the created distributed validators."]}),"\n"]}),"\n"]}),"\n"]})]}),(0,r.jsx)(s.A,{value:"CLI",label:"CLI",children:(0,r.jsxs)(t.p,{children:["Once the creator gives you the ",(0,r.jsx)("code",{children:"cluster-definition.json"})," file and you place it in a ",(0,r.jsx)("code",{children:".charon"})," subdirectory, run: ",(0,r.jsxs)("pre",{children:['docker run --rm -v "$(pwd):/opt/charon" obolnetwork/charon',":v0",".19.0 dkg --publish"]})," and the DKG process should begin."]})})]}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsxs)(t.p,{children:["Please make sure to create a backup of your ",(0,r.jsx)(t.code,{children:".charon/"})," folder. ",(0,r.jsx)(t.strong,{children:"If you lose your private keys you won't be able to start the DV cluster successfully and may risk your validator deposit becoming unrecoverable."})," Ensure every operator has their ",(0,r.jsx)(t.code,{children:".charon"})," folder securely and privately backed up before activating any validators."]})}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"cluster-lock"})," and ",(0,r.jsx)(t.code,{children:"deposit-data"})," files are identical for each operator, if lost, they can be copied from one operator to another."]})}),"\n",(0,r.jsx)(t.p,{children:"Now that the DKG has been completed, all operators can start their nodes."}),"\n",(0,r.jsx)(t.h2,{id:"step-4-start-your-distributed-validator-node",children:"Step 4: Start your Distributed Validator Node"}),"\n",(0,r.jsx)(t.p,{children:"With the DKG ceremony over, the last phase before activation is to prepare your node for validating over the long term."}),"\n",(0,r.jsxs)(i.A,{groupId:"Full-Pre-Existing",children:[(0,r.jsxs)(s.A,{value:"Full Node",label:"Full Node",default:!0,children:[(0,r.jsxs)(t.p,{children:["The quickstart ",(0,r.jsx)("a",{href:"https://github.com/ObolNetwork/charon-distributed-validator-node",target:"_blank",children:"repository"})," is configured to sync an execution layer client (",(0,r.jsx)("code",{children:"Nethermind"}),") and a consensus layer client (",(0,r.jsx)("code",{children:"Lighthouse"}),"). You can also leverage alternative ways to run a node such as Ansible, Helm, or Kubernetes manifests."]}),(0,r.jsxs)(i.A,{groupId:"Docker-Helm",children:[(0,r.jsxs)(s.A,{value:"Docker",label:"Docker",default:!0,children:[(0,r.jsxs)(t.admonition,{type:"info",children:[(0,r.jsxs)(t.p,{children:["Currently, the quickstart ",(0,r.jsx)(t.a,{href:"https://github.com/ObolNetwork/charon-distributed-validator-node",children:"repo"})," configures a node for the Holesky testnet. It is possible to choose a different network (another testnet, or mainnet) by overriding the ",(0,r.jsx)(t.code,{children:".env"})," file.\nFrom within the ",(0,r.jsx)(t.code,{children:"charon-distributed-validator-node"})," directory:"]}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:".env.sample"})," is a sample environment file that allows overriding default configuration defined in ",(0,r.jsx)(t.code,{children:"docker-compose.yml"}),". Uncomment and set any variable to override its value."]}),(0,r.jsxs)(t.p,{children:["Setup the desired inputs for the DV, including the network you wish to operate on. Check the ",(0,r.jsx)(t.a,{href:"/v0.19.1/charon/charon-cli-reference",children:"Charon CLI reference"})," for additional optional flags to set."]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'# Copy ".env.sample", renaming it ".env"\ncp .env.sample .env\n'})})]}),(0,r.jsxs)(t.admonition,{type:"warning",children:[(0,r.jsxs)(t.p,{children:["If you manually update ",(0,r.jsx)(t.code,{children:"docker compose"})," to mount ",(0,r.jsx)(t.code,{children:"lighthouse"})," from your locally synced ",(0,r.jsx)(t.code,{children:"~/.lighthouse"}),", the whole chain database may get deleted. It'd be best not to manually update as ",(0,r.jsx)(t.code,{children:"lighthouse"})," checkpoint-syncs so the syncing doesn't take much time.",(0,r.jsx)("br",{})]}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note"}),": If you have a ",(0,r.jsx)(t.code,{children:"nethermind"})," node already synced, you can simply copy over the directory. For ex: ",(0,r.jsx)(t.code,{children:"cp -r ~/.ethereum/goerli data/nethermind"}),". This makes everything faster since you start from a synced nethermind node."]})]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"# Delete lighthouse data if it exists\nrm -r ./data/lighthouse\n\n# Spin up a Distributed Validator Node with a Validator Client\ndocker compose up -d\n\n"})}),(0,r.jsx)(t.p,{children:"If at any point you need to turn off your node, you can run:"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"# Shut down the currently running distributed validator node\ndocker compose down\n"})}),(0,r.jsx)(t.p,{children:"You should use the grafana dashboard that accompanies the quickstart repo to see whether your cluster is healthy."}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"# Open Grafana dashboard\nopen http://localhost:3000/d/singlenode/\n"})}),(0,r.jsx)(t.p,{children:"In particular you should check:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"That your charon client can connect to the configured beacon client."}),"\n",(0,r.jsx)(t.li,{children:"That your charon client can connect to all peers directly."}),"\n",(0,r.jsx)(t.li,{children:"That your validator client is connected to charon, and has the private keys it needs loaded and accessible."}),"\n"]}),(0,r.jsx)(t.p,{children:"Most components in the dashboard have some help text there to assist you in understanding your cluster performance."}),(0,r.jsx)(t.p,{children:"You might notice that there are logs indicating that a validator cannot be found and that APIs are returning 404. This is to be expected at this point, as the validator public keys listed in the lock file have not been deposited and acknowledged on the consensus layer yet (usually ~16 hours after the deposit is made)."})]}),(0,r.jsx)(s.A,{value:"Ansible",label:"Ansible",children:(0,r.jsxs)(t.p,{children:["Use an ansible playbook to start your node. ",(0,r.jsx)("a",{href:"https://github.com/ObolNetwork/obol-ansible",target:"_blank",children:"See the repo here"})," for further instructions."]})}),(0,r.jsx)(s.A,{value:"Helm",label:"Helm",children:(0,r.jsxs)(t.p,{children:["Use a Helm to start your node. ",(0,r.jsx)("a",{href:"https://github.com/ObolNetwork/helm-charts",target:"_blank",children:"See the repo here"})," for further instructions."]})}),(0,r.jsx)(s.A,{value:"Kubernetes",label:"Kubernetes",children:(0,r.jsxs)(t.p,{children:["Use Kubernetes manifests to start your charon client and validator client. These manifests expect an existing Beacon Node Endpoint to connect to. ",(0,r.jsx)("a",{href:"https://github.com/ObolNetwork/charon-k8s-distributed-validator-node",target:"_blank",children:"See the repo here"})," for further instructions."]})})]})]}),(0,r.jsxs)(s.A,{value:"Existing Beacon Node",label:"Existing Beacon Node",children:[(0,r.jsx)(t.h4,{id:"using-a-pre-existing-beacon-node",children:"Using a pre-existing beacon node"}),(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsx)(t.p,{children:"Using a remote beacon node will impact the performance of your Distributed Validator and should be used sparingly."})}),(0,r.jsxs)(t.p,{children:["If you already have a beacon node running somewhere and you want to use that instead of running an EL (",(0,r.jsx)(t.code,{children:"nethermind"}),") & CL (",(0,r.jsx)(t.code,{children:"lighthouse"}),") as part of the example repo, you can disable these images. To do so, follow these steps:"]}),(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Copy the ",(0,r.jsx)(t.code,{children:"docker-compose.override.yml.sample"})," file"]}),"\n"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"cp -n docker-compose.override.yml.sample docker-compose.override.yml\n"})}),(0,r.jsxs)(t.ol,{start:"2",children:["\n",(0,r.jsxs)(t.li,{children:["Uncomment the ",(0,r.jsx)(t.code,{children:"profiles: [disable]"})," section for both ",(0,r.jsx)(t.code,{children:"nethermind"})," and ",(0,r.jsx)(t.code,{children:"lighthouse"}),". The override file should now look like this"]}),"\n"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"services:\n  nethermind:\n    # Disable nethermind\n    profiles: [disable]\n    # Bind nethermind internal ports to host ports\n    #ports:\n      #- 8545:8545 # JSON-RPC\n      #- 8551:8551 # AUTH-RPC\n      #- 6060:6060 # Metrics\n\n  lighthouse:\n    # Disable lighthouse\n    profiles: [disable]\n    # Bind lighthouse internal ports to host ports\n    #ports:\n      #- 5052:5052 # HTTP\n      #- 5054:5054 # Metrics\n...\n"})}),(0,r.jsxs)(t.ol,{start:"3",children:["\n",(0,r.jsxs)(t.li,{children:["Then, uncomment and set the ",(0,r.jsx)(t.code,{children:"CHARON_BEACON_NODE_ENDPOINTS"})," variable in the ",(0,r.jsx)(t.code,{children:".env"})," file to your beacon node's URL"]}),"\n"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"...\n# Connect to one or more external beacon nodes. Use a comma separated list excluding spaces.\nCHARON_BEACON_NODE_ENDPOINTS=<YOUR_REMOTE_BEACON_NODE_URL>\n...\n"})}),(0,r.jsxs)(t.ol,{start:"4",children:["\n",(0,r.jsx)(t.li,{children:"Restart your docker compose"}),"\n"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"docker compose down\ndocker compose up -d\n"})})]})]}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["In a Distributed Validator Cluster, it is important to have a low latency connection to your peers. Charon clients will use the NAT protocol to attempt to establish a direct connection to one another automatically. If this doesn't happen, you should port forward charon's p2p port to the public internet to facilitate direct connections. (The default port to expose is ",(0,r.jsx)(t.code,{children:":3610"}),"). Read more about charon's networking ",(0,r.jsx)(t.a,{href:"/v0.19.1/charon/networking",children:"here"}),"."]})}),"\n",(0,r.jsx)(t.p,{children:"If you have gotten to this stage, every node is up, synced and connected, congratulations. You can now move forward to activating your validator to begin staking."})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},7227:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var r=n(34164);const o={tabItem:"tabItem_Ymn6"};var i=n(74848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,s),hidden:n,children:t})}},49489:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(96540),o=n(34164),i=n(24245),s=n(56347),a=n(36494),l=n(62814),c=n(45167),d=n(69900);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:o}}=e;return{value:t,label:n,attributes:r,default:o}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function x(e){let{queryString:t=!1,groupId:n}=e;const o=(0,s.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(o.location.search);t.set(i,e),o.replace({...o.location,search:t.toString()})}),[i,o])]}function j(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,i=u(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[c,h]=x({queryString:n,groupId:o}),[j,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,i]=(0,d.Dv)(n);return[o,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:o}),g=(()=>{const e=c??j;return p({value:e,tabValues:i})?e:null})();(0,a.A)((()=>{g&&l(g)}),[g]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),m(e)}),[h,m,i]),tabValues:i}}var m=n(11062);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(74848);function b(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const t=e.currentTarget,n=l.indexOf(t),o=a[n].value;o!==r&&(c(t),s(o))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},t),children:a.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:h,onClick:d,...i,className:(0,o.A)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:i}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function v(e){const t=j(e);return(0,f.jsxs)("div",{className:(0,o.A)("tabs-container",g.tabList),children:[(0,f.jsx)(b,{...t,...e}),(0,f.jsx)(y,{...t,...e})]})}function w(e){const t=(0,m.A)();return(0,f.jsx)(v,{...e,children:h(e.children)},String(t))}},98009:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/Guide08-46621accb14c6c81d266bc55adb43621.png"},32646:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/Guide10-66d7c37171ee24ff1b6f7118308c6a29.png"},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var r=n(96540);const o={},i=r.createContext(o);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);