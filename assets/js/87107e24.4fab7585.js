"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[64065],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>g});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),s=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(a),h=n,g=c["".concat(d,".").concat(h)]||c[h]||u[h]||o;return a?r.createElement(g,i(i({ref:t},p),{},{components:a})):r.createElement(g,i({ref:t},p))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},71345:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=a(58168),n=(a(96540),a(15680));const o={description:"A dapp to securely create Distributed Validators alone or with a group.",sidebar_position:6},i="DV Launchpad",l={unversionedId:"dvl/intro",id:"version-v0.19.1/dvl/intro",title:"DV Launchpad",description:"A dapp to securely create Distributed Validators alone or with a group.",source:"@site/versioned_docs/version-v0.19.1/dvl/intro.md",sourceDirName:"dvl",slug:"/dvl/intro",permalink:"/docs/v0.19.1/dvl/intro",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.19.1/dvl/intro.md",tags:[],version:"v0.19.1",sidebarPosition:6,frontMatter:{description:"A dapp to securely create Distributed Validators alone or with a group.",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"CLI reference",permalink:"/docs/v0.19.1/charon/charon-cli-reference"},next:{title:"Obol Splits",permalink:"/docs/v0.19.1/sc/introducing-obol-splits"}},d={},s=[{value:"Getting started",id:"getting-started",level:2},{value:"DV Launchpad Links",id:"dv-launchpad-links",level:2}],p={toc:s},c="wrapper";function u(e){let{components:t,...o}=e;return(0,n.yg)(c,(0,r.A)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"dv-launchpad"},"DV Launchpad"),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"DV Launchpad Promo Image",src:a(3143).A,width:"1440",height:"643"})),(0,n.yg)("p",null,"In order to activate an Ethereum validator, 32 ETH must be deposited into the official deposit contract. "),(0,n.yg)("p",null,"The vast majority of users that created validators to date have used the ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("a",{parentName:"strong",href:"https://launchpad.ethereum.org/"},(0,n.yg)("del",{parentName:"a"},"Eth2")," Staking Launchpad")),", a public good open source website built by the Ethereum Foundation alongside participants that later went on to found Obol. This tool has been wildly successful in the safe and educational creation of a significant number of validators on the Ethereum mainnet."),(0,n.yg)("p",null,"To facilitate the generation of distributed validator keys amongst remote users with high trust, the Obol Network developed and maintains a website that enables a group of users to come together and create these threshold keys: ",(0,n.yg)("strong",{parentName:"p"},"The DV Launchpad"),"."),(0,n.yg)("h2",{id:"getting-started"},"Getting started"),(0,n.yg)("p",null,"For more information on running charon in a UI friendly way through the DV Launchpad, take a look at our ",(0,n.yg)("a",{parentName:"p",href:"/docs/v0.19.1/start/quickstart_overview"},"Quickstart Guides"),". "),(0,n.yg)("h2",{id:"dv-launchpad-links"},"DV Launchpad Links"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Ethereum Network"),(0,n.yg)("th",{parentName:"tr",align:null},"Launchpad"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Mainnet"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://beta.launchpad.obol.tech"},"https://beta.launchpad.obol.tech"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Holesky"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://holesky.launchpad.obol.tech"},"https://holesky.launchpad.obol.tech"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Sepolia"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://sepolia.launchpad.obol.tech"},"https://sepolia.launchpad.obol.tech"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Goerli"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://goerli.launchpad.obol.tech"},"https://goerli.launchpad.obol.tech"))))))}u.isMDXComponent=!0},3143:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/DistributeYourValidators-70d9f95984d5a3ad434b9e0d5a2d6073.svg"}}]);