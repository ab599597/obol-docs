"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[4681],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return h}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(r),h=i,f=p["".concat(l,".").concat(h)]||p[h]||u[h]||o;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var d=2;d<o;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8608:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return u}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],s={description:"How do distributed validator clients communicate with one another securely?"},l="Peer discovery",d={unversionedId:"dv/peer-discovery",id:"version-v0.3.0/dv/peer-discovery",title:"Peer discovery",description:"How do distributed validator clients communicate with one another securely?",source:"@site/versioned_docs/version-v0.3.0/dv/06_peer-discovery.md",sourceDirName:"dv",slug:"/dv/peer-discovery",permalink:"/docs/v0.3.0/dv/peer-discovery",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.3.0/dv/06_peer-discovery.md",tags:[],version:"v0.3.0",sidebarPosition:6,frontMatter:{description:"How do distributed validator clients communicate with one another securely?"},sidebar:"version-v0.3.0/tutorialSidebar",previous:{title:"Middleware daemon",permalink:"/docs/v0.3.0/dv/middleware-daemon"},next:{title:"P2P interface",permalink:"/docs/v0.3.0/dv/p2p-interface"}},c={},u=[{value:"Authenticating a distributed validator client",id:"authenticating-a-distributed-validator-client",level:3},{value:"Node database",id:"node-database",level:4},{value:"Node discovery",id:"node-discovery",level:4}],p={toc:u};function h(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"peer-discovery"},"Peer discovery"),(0,o.kt)("p",null,"In order to maintain security, middleware clients need to be able to authenticate one another. We achieve this by giving each middleware client something they can use that other clients in the cluster will be able to recognise as legitimate."),(0,o.kt)("p",null,"At the end of a ",(0,o.kt)("a",{parentName:"p",href:"/docs/v0.3.0/dv/validator-creation#stages-of-creating-a-distributed-validator"},"DVK generation ceremony"),", each operator will have a number of files outputted by their CLI program/browser based on how many distributed validators the group chose to generate together."),(0,o.kt)("p",null,"These files are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Validator keystore(s):")," These files will be loaded into the operator's validator client and each file represents one share of a distributed validator."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"A distributed validator cluster manifest:")," This file contains the configuration a distributed validator client like charon needs to join a cluster capable of operating a number of distributed validators.")),(0,o.kt)("h3",{id:"authenticating-a-distributed-validator-client"},"Authenticating a distributed validator client"),(0,o.kt)("p",null,"During the final stage of the DVK ceremony, after the validator key shares are generated for each operator, the ceremony program will generate a random SECP256K1 key pair to be used by a Charon client for its ENR. The program will sign this ENR public key with every keystore this validator will service, to indicate to all other operators that this randomly generated key is directly authorised by the current operator to communicate at the consensus layer for their distributed validator key shares."),(0,o.kt)("p",null,"This sensitive ENR private key, and the general configuration of the distributed validator cluster will be the outputs of a DVK ceremony known shorthand as a ",(0,o.kt)("inlineCode",{parentName:"p"},"cluster manifest"),"."),(0,o.kt)("p",null,"This manifest file will be made available to a charon client, and the validator key stores will be made available to the configured validator client. When charon starts up and ingests its configuration from the manifest file, it will use the provided keypair for its ENR. If it's configured IP address is different from what is embedded in the ENR to begin with, it reissues the ENR as needed and begins to establish connections with the other operators in the cluster as recorded in the manifest file."),(0,o.kt)("h4",{id:"node-database"},"Node database"),(0,o.kt)("p",null,"Obol DV clusters are permissioned networks with a fully meshed topology. Each node will permanently store the ENRs of all other known Obol nodes in their node database."),(0,o.kt)("p",null,"Unlike with node databases of public permissionless networks (such as ",(0,o.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/ethereum/go-ethereum@v1.10.13/p2p/enode#DB"},"Go-Ethereum"),"), there is no inbuilt eviction logic \u2013 the database will keep growing indefinitely."),(0,o.kt)("h4",{id:"node-discovery"},"Node discovery"),(0,o.kt)("p",null,"In early versions of Charon, operator nodes will be seeded in the node database from cluster manifest files. Updates to the node database can be made in realtime as a Charon client receives messages from these authorised ENRs containing a higher nonce value than present in our node database, usually representing an IP address update."),(0,o.kt)("p",null,"In the future, Charon is intended to discover counterparty nodes using the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ethereum/devp2p/blob/master/discv5/discv5.md"},"discv5")," protocol. All DVCs connecting to the Obol Network will join a public node discovery peer-to-peer network to find the latest ENR records for their DV peers."),(0,o.kt)("p",null,"This dynamic discovery serves two purposes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Bootstrapping a node database in the event of data loss when peers no longer listen on the IP addresseses specified in the manifest and need to be located."),(0,o.kt)("li",{parentName:"ul"},"Periodically refreshing ENRs to follow IP address changes, e.g. AWS EC2 IPs or NAT on residential broadband.")))}h.isMDXComponent=!0}}]);