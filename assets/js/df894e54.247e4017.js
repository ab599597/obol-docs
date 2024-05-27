"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[54266],{15680:(e,t,r)=>{r.d(t,{xA:()=>l,yg:()=>m});var n=r(96540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),f=i,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:i,a[1]=c;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5589:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=r(58168),i=(r(96540),r(15680));const o={description:"Connectivity between Charon instances"},a="P2P interface",c={unversionedId:"dv/p2p-interface",id:"version-v0.7.0/dv/p2p-interface",title:"P2P interface",description:"Connectivity between Charon instances",source:"@site/versioned_docs/version-v0.7.0/dv/07_p2p-interface.md",sourceDirName:"dv",slug:"/dv/p2p-interface",permalink:"/docs/v0.7.0/dv/p2p-interface",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.7.0/dv/07_p2p-interface.md",tags:[],version:"v0.7.0",sidebarPosition:7,frontMatter:{description:"Connectivity between Charon instances"},sidebar:"tutorialSidebar",previous:{title:"Peer discovery",permalink:"/docs/v0.7.0/dv/peer-discovery"},next:{title:"Cluster Configuration",permalink:"/docs/v0.7.0/dv/distributed-validator-cluster-manifest"}},s={},p=[],l={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,i.yg)(u,(0,n.A)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"p2p-interface"},"P2P interface"),(0,i.yg)("p",null,"The Charon P2P interface loosely follows the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/ethereum/consensus-specs/blob/dev/specs/phase0/p2p-interface.md"},"Eth2 beacon P2P interface"),"."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Transport: TCP over IPv4/IPv6."),(0,i.yg)("li",{parentName:"ul"},"Identity: ",(0,i.yg)("a",{parentName:"li",href:"https://eips.ethereum.org/EIPS/eip-778"},"Ethereum Node Records"),". "),(0,i.yg)("li",{parentName:"ul"},"Handshake: ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/libp2p/specs/tree/master/noise"},"noise-libp2p")," with ",(0,i.yg)("inlineCode",{parentName:"li"},"secp256k1")," keys.",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Each charon client must have their ENR public key authorized in a ",(0,i.yg)("a",{parentName:"li",href:"/docs/v0.7.0/dv/distributed-validator-cluster-manifest"},"cluster-lock.json")," file in order for the client handshake to succeed."))),(0,i.yg)("li",{parentName:"ul"},"Discovery: ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/ethereum/devp2p/blob/master/discv5/discv5.md"},"Discv5"),".")))}d.isMDXComponent=!0}}]);