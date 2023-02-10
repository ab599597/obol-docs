"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[5549],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},37544:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:4,description:"Run all nodes in a distributed validator cluster"},i="Run a cluster alone",l={unversionedId:"int/quickstart/quickstart-alone",id:"version-v0.12.0/int/quickstart/quickstart-alone",title:"Run a cluster alone",description:"Run all nodes in a distributed validator cluster",source:"@site/versioned_docs/version-v0.12.0/int/quickstart/quickstart-alone.md",sourceDirName:"int/quickstart",slug:"/int/quickstart/quickstart-alone",permalink:"/docs/v0.12.0/int/quickstart/quickstart-alone",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.12.0/int/quickstart/quickstart-alone.md",tags:[],version:"v0.12.0",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"Run all nodes in a distributed validator cluster"},sidebar:"tutorialSidebar",previous:{title:"CLI",permalink:"/docs/v0.12.0/int/quickstart/group/quickstart-group-cli"},next:{title:"Run a cluster with MEV-Boost",permalink:"/docs/v0.12.0/int/quickstart/quickstart-builder-api"}},s={},p=[],c={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"run-a-cluster-alone"},"Run a cluster alone"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Charon is in an early alpha state and is not ready to be run on mainnet")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Clone the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ObolNetwork/charon-distributed-validator-cluster"},"charon-distributed-validator-cluster")," template repo and ",(0,r.kt)("inlineCode",{parentName:"p"},"cd")," into the directory."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# Clone the repo\ngit clone https://github.com/ObolNetwork/charon-distributed-validator-cluster.git\n\n# Change directory\ncd charon-distributed-validator-cluster/\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Prepare the environment variables"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# Copy the sample environment variables\ncp .env.sample .env\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},".env.sample")," is a sample environment file that allows overriding default configuration defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),". Uncomment and set any variable to override its value.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create the artifacts needed to run a testnet distributed validator cluster"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'# Create a testnet distributed validator cluster\ndocker run --rm -v "$(pwd):/opt/charon" obolnetwork/charon:v0.12.0 create cluster --withdrawal-address="0x000000000000000000000000000000000000dead"\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Start the cluster"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# Start the distributed validator cluster\ndocker-compose up\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Checkout the monitoring dashboard and see if things look all right"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# Open Grafana\nopen http://localhost:3000/d/singlenode/single-charon-node-dashboard?\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Activate the validator on the testnet using the original ",(0,r.kt)("a",{parentName:"p",href:"https://goerli.launchpad.ethereum.org/en/overview"},"staking launchpad")," site with the deposit data created at ",(0,r.kt)("inlineCode",{parentName:"p"},".charon/cluster/deposit-data.json"),"."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If you use Mac OS, ",(0,r.kt)("inlineCode",{parentName:"li"},".charon"),' the default output folder, does not show up on the launchpad\'s "Upload Deposit Data" file picker. Rectify this by pressing ',(0,r.kt)("inlineCode",{parentName:"li"},"Command + Shift + . ")," (full stop). This should display hidden folders, allowing you to select the deposit file.")))),(0,r.kt)("p",null,"If this all worked, you are now running a distributed validator cluster on a testnet. Congratulations \ud83c\udf89.\nTry turning off a single node of the four with ",(0,r.kt)("inlineCode",{parentName:"p"},"docker stop")," and see if the validator stays online or begins missing duties, to see for yourself the fault-tolerance that can be added to proof of stake validation with this new Distributed Validator Technology."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Don't forget to be a good testnet steward and exit your validator when you are finished testing with it.")))}d.isMDXComponent=!0}}]);