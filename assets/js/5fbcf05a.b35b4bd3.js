"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[56831],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>h});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),y=o,h=c["".concat(l,".").concat(y)]||c[y]||u[y]||a;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},39332:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(58168),o=(n(96540),n(15680));const a={sidebar_position:3,description:"Split existing validator keys"},i="Split existing validator private keys",s={unversionedId:"advanced/quickstart-split",id:"version-v0.19.2/advanced/quickstart-split",title:"Split existing validator private keys",description:"Split existing validator keys",source:"@site/versioned_docs/version-v0.19.2/advanced/quickstart-split.md",sourceDirName:"advanced",slug:"/advanced/quickstart-split",permalink:"/docs/advanced/quickstart-split",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.19.2/advanced/quickstart-split.md",tags:[],version:"v0.19.2",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"Split existing validator keys"},sidebar:"tutorialSidebar",previous:{title:"Enable MEV",permalink:"/docs/advanced/quickstart-builder-api"},next:{title:"Getting Started Monitoring your Node",permalink:"/docs/advanced/monitoring"}},l={},p=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Step 1. Clone the charon repo and copy existing keystore files",id:"step-1-clone-the-charon-repo-and-copy-existing-keystore-files",level:2},{value:"Step 2. Split the keys using the charon docker command",id:"step-2-split-the-keys-using-the-charon-docker-command",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,o.yg)(c,(0,r.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"split-existing-validator-private-keys"},"Split existing validator private keys"),(0,o.yg)("admonition",{type:"caution"},(0,o.yg)("p",{parentName:"admonition"},"Charon is in a beta state and should be used with caution according to its ",(0,o.yg)("a",{parentName:"p",href:"https://obol.tech/terms.pdf"},"Terms of Use"),"."),(0,o.yg)("p",{parentName:"admonition"},"This process should only be used if you want to split an ",(0,o.yg)("em",{parentName:"p"},"existing validator private key")," into multiple private key shares for use in a Distributed Validator Cluster. If your existing validator is not properly shut down before the Distributed Validator starts, your validator may be slashed."),(0,o.yg)("p",{parentName:"admonition"},"If you are starting a new validator, you should follow a ",(0,o.yg)("a",{parentName:"p",href:"/docs/start/quickstart_overview"},"quickstart guide")," instead."),(0,o.yg)("p",{parentName:"admonition"},"If you use MEV-Boost, make sure you turned off your MEV-Boost service for the time of splitting the keys, otherwise you may hit ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/ObolNetwork/charon/issues/2770"},"this issue"),".")),(0,o.yg)("p",null,"Split an existing Ethereum validator key into multiple key shares for use in an ",(0,o.yg)("a",{parentName:"p",href:"/docs/int/key-concepts#distributed-validator-cluster"},"Obol Distributed Validator Cluster"),"."),(0,o.yg)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Ensure you have the existing validator keystores (the ones to split) and passwords."),(0,o.yg)("li",{parentName:"ul"},"Ensure you have ",(0,o.yg)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/"},"docker")," installed."),(0,o.yg)("li",{parentName:"ul"},"Make sure ",(0,o.yg)("inlineCode",{parentName:"li"},"docker")," is running before executing the commands below.")),(0,o.yg)("h2",{id:"step-1-clone-the-charon-repo-and-copy-existing-keystore-files"},"Step 1. Clone the charon repo and copy existing keystore files"),(0,o.yg)("p",null,"Clone the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/ObolNetwork/charon"},"charon")," repo."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"# Clone the repo\ngit clone https://github.com/ObolNetwork/charon.git\n\n# Change directory\ncd charon/\n\n# Create a folder within this checked out repo\nmkdir split_keys\n")),(0,o.yg)("p",null,"Copy the existing validator ",(0,o.yg)("inlineCode",{parentName:"p"},"keystore.json")," files into this new folder. Alongside them, with a matching filename but ending with ",(0,o.yg)("inlineCode",{parentName:"p"},".txt")," should be the password to the keystore. E.g., ",(0,o.yg)("inlineCode",{parentName:"p"},"keystore-0.json")," ",(0,o.yg)("inlineCode",{parentName:"p"},"keystore-0.txt")),(0,o.yg)("p",null,"At the end of this process, you should have a tree like this:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"\u251c\u2500\u2500 split_keys\n\u2502\xa0\xa0 \u251c\u2500\u2500 keystore-0.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 keystore-0.txt\n\u2502\xa0\xa0 \u251c\u2500\u2500 keystore-1.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 keystore-1.txt\n\u2502   ...\n\u2502\xa0\xa0 \u251c\u2500\u2500 keystore-*.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 keystore-*.txt\n")),(0,o.yg)("h2",{id:"step-2-split-the-keys-using-the-charon-docker-command"},"Step 2. Split the keys using the charon docker command"),(0,o.yg)("p",null,"Run the following docker command to split the keys:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},'CHARON_VERSION=                # E.g. v0.19.2\nCLUSTER_NAME=                  # The name of the cluster you want to create.\nWITHDRAWAL_ADDRESS=            # The address you want to use for withdrawals (this is just for accuracy in your lock file, you can\'t change a withdrawal address for a validator that has already been deposited)\nFEE_RECIPIENT_ADDRESS=         # The address you want to use for block reward and MEV payments.\nNODES=                         # The number of nodes in the cluster.    \n\ndocker run --rm -v $(pwd):/opt/charon obolnetwork/charon:${CHARON_VERSION} create cluster --name="${CLUSTER_NAME}" --withdrawal-addresses="${WITHDRAWAL_ADDRESS}" --fee-recipient-addresses="${FEE_RECIPIENT_ADDRESS}" --split-existing-keys --split-keys-dir=/opt/charon/split_keys --nodes ${NODES} --network mainnet\n')),(0,o.yg)("p",null,"The above command will create ",(0,o.yg)("inlineCode",{parentName:"p"},"validator_keys")," along with ",(0,o.yg)("inlineCode",{parentName:"p"},"cluster-lock.json")," in ",(0,o.yg)("inlineCode",{parentName:"p"},"./cluster")," for each node."),(0,o.yg)("p",null,"Command output:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"***************** WARNING: Splitting keys **********************\n Please make sure any existing validator has been shut down for\n at least 2 finalised epochs before starting the charon cluster,\n otherwise slashing could occur.                               \n****************************************************************\n\nCreated charon cluster:\n --split-existing-keys=true\n\n./cluster/\n\u251c\u2500 node[0-*]/                   Directory for each node\n\u2502  \u251c\u2500 charon-enr-private-key    Charon networking private key for node authentication\n\u2502  \u251c\u2500 cluster-lock.json         Cluster lock defines the cluster lock file which is signed by all nodes\n\u2502  \u251c\u2500 validator_keys            Validator keystores and password\n\u2502  \u2502  \u251c\u2500 keystore-*.json        Validator private share key for duty signing\n\u2502  \u2502  \u251c\u2500 keystore-*.txt         Keystore password files for keystore-*.json\n")),(0,o.yg)("p",null,"These split keys can now be used to start a charon cluster."))}u.isMDXComponent=!0}}]);