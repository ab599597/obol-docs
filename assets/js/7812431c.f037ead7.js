"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[9533],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),p=i,h=u["".concat(l,".").concat(p)]||u[p]||f[p]||a;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var d=2;d<a;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},25914:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var r=n(87462),i=(n(67294),n(3905));const a={description:"Documenting a Distributed Validator Cluster in a standardised file format"},o="Cluster Configuration",s={unversionedId:"dv/distributed-validator-cluster-manifest",id:"version-v0.12.0/dv/distributed-validator-cluster-manifest",title:"Cluster Configuration",description:"Documenting a Distributed Validator Cluster in a standardised file format",source:"@site/versioned_docs/version-v0.12.0/dv/08_distributed-validator-cluster-manifest.md",sourceDirName:"dv",slug:"/dv/distributed-validator-cluster-manifest",permalink:"/docs/v0.12.0/dv/distributed-validator-cluster-manifest",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.12.0/dv/08_distributed-validator-cluster-manifest.md",tags:[],version:"v0.12.0",sidebarPosition:8,frontMatter:{description:"Documenting a Distributed Validator Cluster in a standardised file format"},sidebar:"tutorialSidebar",previous:{title:"P2P interface",permalink:"/docs/v0.12.0/dv/p2p-interface"},next:{title:"Charon CLI reference",permalink:"/docs/v0.12.0/dv/charon_cli_reference"}},l={},d=[{value:"Cluster Definition File",id:"cluster-definition-file",level:2},{value:"Cluster Lock File",id:"cluster-lock-file",level:2}],c={toc:d};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"cluster-configuration"},"Cluster Configuration"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"These cluster definition and cluster lock files are a work in progress. The intention is for the files to be standardised for operating distributed validators via the ",(0,i.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/"},"EIP process")," when appropriate.")),(0,i.kt)("p",null,"This document describes the configuration options for running a charon client (or cluster) locally or in production."),(0,i.kt)("h2",{id:"cluster-definition-file"},"Cluster Definition File"),(0,i.kt)("p",null,"A charon cluster is configured in two steps:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cluster-definition.json")," which defines the intended cluster configuration before keys have been created in a distributed key generation ceremony."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cluster-lock.json")," which includes and extends ",(0,i.kt)("inlineCode",{parentName:"li"},"cluster-definition.json")," with distributed validator BLS public key shares.")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"charon create dkg")," command is used to create ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster-definition.json")," file which is used as input to ",(0,i.kt)("inlineCode",{parentName:"p"},"charon dkg"),"."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"charon create cluster")," command combines both steps into one and just outputs the final ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster-lock.json")," without a DKG step."),(0,i.kt)("p",null,"The schema of the ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster-definition.json")," is defined as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "best cluster", // Optional cosmetic identifier\n  "operators": [\n    {\n      "address": "0x123..abfc", // ETH1 address of the operator\n      "enr": "enr://abcdef...12345", // Charon node ENR\n      "config_signature": "0x123456...abcdef", // EIP712 Signature of config_hash by ETH1 address priv key\n      "enr_signature": "0x123654...abcedf" // EIP712 Signature of ENR by ETH1 address priv key\n    }\n  ],\n  "uuid": "1234-abcdef-1234-abcdef", // Random unique identifier.\n  "version": "v1.2.0", // Schema version\n  "timestamp": "2022-01-01T12:00:00+00:00", // Creation timestamp\n  "num_validators": 100, // Number of distributed validators to be created in cluster-lock.json\n  "threshold": 3, // Optional threshold required for signature reconstruction\n  "fee_recipient_address": "0x123..abfc", // ETH1 fee_recipient address\n  "withdrawal_address": "0x123..abfc", // ETH1 withdrawal address\n  "dkg_algorithm": "foo_dkg_v1", // Optional DKG algorithm for key generation\n  "fork_version": "0x00112233", // Chain/Network identifier\n  "config_hash": "abcfde...acbfed", // Hash of the static (non-changing) fields\n  "definition_hash": "abcdef...abcedef" // Final hash of all fields\n}\n')),(0,i.kt)("p",null,"The above ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster-definition.json")," is provided as input to the DKG which generates keys and the ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster-lock.json")," file."),(0,i.kt)("h2",{id:"cluster-lock-file"},"Cluster Lock File"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster-lock.json")," has the following schema:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "cluster_definition": {...},                              // Cluster definiition json, identical schema to above,\n  "distributed_validators": [                               // Length equal to cluster_definition.num_validators.\n    {\n      "distributed_public_key":  "0x123..abfc",             // DV root pubkey\n      "public_shares": [ "abc...fed", "cfd...bfe"],         // Length equal to cluster_definition.operators\n      "fee_recipient": "0x123..abfc"                        // Defaults to withdrawal address if not set, can be edited manually\n    }\n  ],\n  "lock_hash": "abcdef...abcedef",                          // Config_hash plus distributed_validators\n  "signature_aggregate": "abcdef...abcedef"                 // BLS aggregate signature of the lock hash signed by each DV pubkey.\n}\n')))}u.isMDXComponent=!0}}]);