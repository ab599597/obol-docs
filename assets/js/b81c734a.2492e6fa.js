"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[50234],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>y});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),g=o,y=p["".concat(l,".").concat(g)]||p[g]||d[g]||a;return r?n.createElement(y,s(s({ref:t},u),{},{components:r})):n.createElement(y,s({ref:t},u))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},62112:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(58168),o=(r(96540),r(15680));const a={},s="Glossary",i={unversionedId:"glossary",id:"version-v0.5.0/glossary",title:"Glossary",description:"This page elaborates on the various technical terminology featured throughout this manual. See a word or phrase that should be added? Let us know!",source:"@site/versioned_docs/version-v0.5.0/glossary.md",sourceDirName:".",slug:"/glossary",permalink:"/docs/v0.5.0/glossary",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.5.0/glossary.md",tags:[],version:"v0.5.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Testnets",permalink:"/docs/v0.5.0/testnet"}},l={},c=[{value:"Consensus",id:"consensus",level:3},{value:"Threshold signing",id:"threshold-signing",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.yg)(p,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"glossary"},"Glossary"),(0,o.yg)("p",null,"This page elaborates on the various technical terminology featured throughout this manual. See a word or phrase that should be added? Let us know!"),(0,o.yg)("h3",{id:"consensus"},"Consensus"),(0,o.yg)("p",null,"A collection of machines coming to agreement on what to sign together"),(0,o.yg)("h3",{id:"threshold-signing"},"Threshold signing"),(0,o.yg)("p",null,"Being able to sign a message with only a subset of key holders taking part - giving the collection of machines a level of fault tolerance."))}d.isMDXComponent=!0}}]);