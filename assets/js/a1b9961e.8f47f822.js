"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[21137],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>u});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var g=a.createContext({}),p=function(e){var t=a.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(g.Provider,{value:t},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,g=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,u=s["".concat(g,".").concat(m)]||s[m]||y[m]||l;return n?a.createElement(u,i(i({ref:t},d),{},{components:n})):a.createElement(u,i({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var g in t)hasOwnProperty.call(t,g)&&(o[g]=t[g]);o.originalType=e,o[s]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},46495:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(58168),r=(n(96540),n(15680));const l={description:"The client object of the Obol SDK",sidebar_position:6,sidebar_label:"Client"},i=void 0,o={unversionedId:"sdk/classes/Client",id:"version-v0.19.1/sdk/classes/Client",title:"Client",description:"The client object of the Obol SDK",source:"@site/versioned_docs/version-v0.19.1/sdk/classes/Client.md",sourceDirName:"sdk/classes",slug:"/sdk/classes/Client",permalink:"/docs/v0.19.1/sdk/classes/Client",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.19.1/sdk/classes/Client.md",tags:[],version:"v0.19.1",sidebarPosition:6,frontMatter:{description:"The client object of the Obol SDK",sidebar_position:6,sidebar_label:"Client"},sidebar:"apiSidebar",previous:{title:"FORK_MAPPING",permalink:"/docs/v0.19.1/sdk/enumerations/FORK_MAPPING"},next:{title:"ClusterDefintion",permalink:"/docs/v0.19.1/sdk/interfaces/ClusterDefintion"}},g={},p=[{value:"Extends",id:"extends",level:2},{value:"Constructors",id:"constructors",level:2},{value:"new Client(config, signer)",id:"new-clientconfig-signer",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Source",id:"source",level:4},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2},{value:"createClusterDefinition()",id:"createclusterdefinition",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Throws",id:"throws",level:4},{value:"Source",id:"source-1",level:4},{value:"getClusterDefinition()",id:"getclusterdefinition",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Throws",id:"throws-1",level:4},{value:"Source",id:"source-2",level:4},{value:"getClusterLock()",id:"getclusterlock",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Throws",id:"throws-2",level:4},{value:"Source",id:"source-3",level:4},{value:"request()",id:"request",level:3},{value:"Type parameters",id:"type-parameters",level:4},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Inherited from",id:"inherited-from",level:4},{value:"Source",id:"source-4",level:4},{value:"updateClusterDefinition()",id:"updateclusterdefinition",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Throws",id:"throws-3",level:4},{value:"Source",id:"source-5",level:4}],d={toc:p},s="wrapper";function y(e){let{components:t,...n}=e;return(0,r.yg)(s,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Obol SDK ",(0,r.yg)("inlineCode",{parentName:"p"},"Client")," can be used for creating, managing and activating distributed validators."),(0,r.yg)("h2",{id:"extends"},"Extends"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"Base"))),(0,r.yg)("h2",{id:"constructors"},"Constructors"),(0,r.yg)("h3",{id:"new-clientconfig-signer"},"new Client(config, signer)"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"new Client"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"config"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"signer"),"?): ",(0,r.yg)("a",{parentName:"p",href:"/docs/v0.19.1/sdk/classes/Client"},(0,r.yg)("inlineCode",{parentName:"a"},"Client")))),(0,r.yg)("h4",{id:"parameters"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"config")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"Object")),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"config.baseUrl"),"?"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"string")),(0,r.yg)("td",{parentName:"tr",align:"left"},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"config.chainId"),"?"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"number")),(0,r.yg)("td",{parentName:"tr",align:"left"},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"signer"),"?"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"Signer")),(0,r.yg)("td",{parentName:"tr",align:"left"},"ethersJS Signer")))),(0,r.yg)("h4",{id:"returns"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/docs/v0.19.1/sdk/classes/Client"},(0,r.yg)("inlineCode",{parentName:"a"},"Client"))),(0,r.yg)("p",null,"Obol-SDK Client instance"),(0,r.yg)("p",null,"An example of how to instantiate obol-sdk Client:\n",(0,r.yg)("a",{parentName:"p",href:"https://github.com/ObolNetwork/obol-sdk-examples/blob/main/TS-Example/index.ts#L29"},"obolClient")),(0,r.yg)("h4",{id:"overrides"},"Overrides"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"Base.constructor")),(0,r.yg)("h4",{id:"source"},"Source"),(0,r.yg)("p",null,"index.ts:27"),(0,r.yg)("h2",{id:"properties"},"Properties"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Property"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Modifier"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Inherited from"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"baseUrl")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"public")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"string")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"Base.baseUrl"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"chainId")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"public")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"number")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"Base.chainId"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"fork_version")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"public")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"string")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"Base.fork_version"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"signer")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"private")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"undefined")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"td"},"Signer")),(0,r.yg)("td",{parentName:"tr",align:"left"},"-")))),(0,r.yg)("h2",{id:"methods"},"Methods"),(0,r.yg)("h3",{id:"createclusterdefinition"},"createClusterDefinition()"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"createClusterDefinition"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"newCluster"),"): ",(0,r.yg)("inlineCode",{parentName:"p"},"Promise"),"< ",(0,r.yg)("inlineCode",{parentName:"p"},"string")," ",">")),(0,r.yg)("p",null,"Creates a cluster definition which contains cluster configuration."),(0,r.yg)("h4",{id:"parameters-1"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"newCluster")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"/docs/v0.19.1/sdk/interfaces/ClusterPayload"},(0,r.yg)("inlineCode",{parentName:"a"},"ClusterPayload"))),(0,r.yg)("td",{parentName:"tr",align:"left"},"The new unique cluster.")))),(0,r.yg)("h4",{id:"returns-1"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"Promise"),"< ",(0,r.yg)("inlineCode",{parentName:"p"},"string")," ",">"),(0,r.yg)("p",null,"config_hash."),(0,r.yg)("h4",{id:"throws"},"Throws"),(0,r.yg)("p",null,"On duplicate entries, missing or wrong cluster keys."),(0,r.yg)("p",null,"An example of how to use createClusterDefinition:\n",(0,r.yg)("a",{parentName:"p",href:"https://github.com/ObolNetwork/obol-sdk-examples/blob/main/TS-Example/index.ts"},"createObolCluster")),(0,r.yg)("h4",{id:"source-1"},"Source"),(0,r.yg)("p",null,"index.ts:42"),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"getclusterdefinition"},"getClusterDefinition()"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"getClusterDefinition"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"configHash"),"): ",(0,r.yg)("inlineCode",{parentName:"p"},"Promise"),"< ",(0,r.yg)("a",{parentName:"p",href:"/docs/v0.19.1/sdk/interfaces/ClusterDefintion"},(0,r.yg)("inlineCode",{parentName:"a"},"ClusterDefintion"))," ",">")),(0,r.yg)("h4",{id:"parameters-2"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"configHash")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"string"))))),(0,r.yg)("h4",{id:"returns-2"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"Promise"),"< ",(0,r.yg)("a",{parentName:"p",href:"/docs/v0.19.1/sdk/interfaces/ClusterDefintion"},(0,r.yg)("inlineCode",{parentName:"a"},"ClusterDefintion"))," ",">"),(0,r.yg)("p",null,"The  cluster definition for config hash"),(0,r.yg)("h4",{id:"throws-1"},"Throws"),(0,r.yg)("p",null,"On not found config hash."),(0,r.yg)("p",null,"An example of how to use getClusterDefinition:\n",(0,r.yg)("a",{parentName:"p",href:"https://github.com/ObolNetwork/obol-sdk-examples/blob/main/TS-Example/index.ts"},"getObolClusterDefinition")),(0,r.yg)("h4",{id:"source-2"},"Source"),(0,r.yg)("p",null,"index.ts:132"),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"getclusterlock"},"getClusterLock()"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"getClusterLock"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"configHash"),"): ",(0,r.yg)("inlineCode",{parentName:"p"},"Promise"),"< ",(0,r.yg)("a",{parentName:"p",href:"/docs/v0.19.1/sdk/interfaces/ClusterLock"},(0,r.yg)("inlineCode",{parentName:"a"},"ClusterLock"))," ",">")),(0,r.yg)("h4",{id:"parameters-3"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"configHash")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"string"))))),(0,r.yg)("h4",{id:"returns-3"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"Promise"),"< ",(0,r.yg)("a",{parentName:"p",href:"/docs/v0.19.1/sdk/interfaces/ClusterLock"},(0,r.yg)("inlineCode",{parentName:"a"},"ClusterLock"))," ",">"),(0,r.yg)("p",null,"The matched cluster details (lock) from DB"),(0,r.yg)("h4",{id:"throws-2"},"Throws"),(0,r.yg)("p",null,"On not found cluster definition or lock."),(0,r.yg)("p",null,"An example of how to use getClusterLock:\n",(0,r.yg)("a",{parentName:"p",href:"https://github.com/ObolNetwork/obol-sdk-examples/blob/main/TS-Example/index.ts"},"getObolClusterLock")),(0,r.yg)("h4",{id:"source-3"},"Source"),(0,r.yg)("p",null,"index.ts:148"),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"request"},"request()"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"protected"))," ",(0,r.yg)("strong",{parentName:"p"},"request"),"<",(0,r.yg)("inlineCode",{parentName:"p"},"T"),">","(",(0,r.yg)("inlineCode",{parentName:"p"},"endpoint"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"options"),"?): ",(0,r.yg)("inlineCode",{parentName:"p"},"Promise"),"< ",(0,r.yg)("inlineCode",{parentName:"p"},"T")," ",">")),(0,r.yg)("h4",{id:"type-parameters"},"Type parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Type parameter"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"T"))))),(0,r.yg)("h4",{id:"parameters-4"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"endpoint")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"string"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"options"),"?"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"RequestInit"))))),(0,r.yg)("h4",{id:"returns-4"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"Promise"),"< ",(0,r.yg)("inlineCode",{parentName:"p"},"T")," ",">"),(0,r.yg)("h4",{id:"inherited-from"},"Inherited from"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"Base.request")),(0,r.yg)("h4",{id:"source-4"},"Source"),(0,r.yg)("p",null,"base.ts:23"),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"updateclusterdefinition"},"updateClusterDefinition()"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"updateClusterDefinition"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"operatorPayload"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"configHash"),"): ",(0,r.yg)("inlineCode",{parentName:"p"},"Promise"),"< ",(0,r.yg)("a",{parentName:"p",href:"/docs/v0.19.1/sdk/interfaces/ClusterDefintion"},(0,r.yg)("inlineCode",{parentName:"a"},"ClusterDefintion"))," ",">")),(0,r.yg)("p",null,"Approves joining a cluster with specific configuration."),(0,r.yg)("h4",{id:"parameters-5"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"operatorPayload")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"/docs/v0.19.1/sdk/type-aliases/OperatorPayload"},(0,r.yg)("inlineCode",{parentName:"a"},"OperatorPayload"))),(0,r.yg)("td",{parentName:"tr",align:"left"},"The operator data including signatures.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"configHash")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"string")),(0,r.yg)("td",{parentName:"tr",align:"left"},"The config hash of the cluster which the operator confirms joining to.")))),(0,r.yg)("h4",{id:"returns-5"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"Promise"),"< ",(0,r.yg)("a",{parentName:"p",href:"/docs/v0.19.1/sdk/interfaces/ClusterDefintion"},(0,r.yg)("inlineCode",{parentName:"a"},"ClusterDefintion"))," ",">"),(0,r.yg)("p",null,"The cluster definition."),(0,r.yg)("h4",{id:"throws-3"},"Throws"),(0,r.yg)("p",null,"On unauthorized, duplicate entries, missing keys, not found cluster or invalid data."),(0,r.yg)("p",null,"An example of how to use updateClusterDefinition:\n",(0,r.yg)("a",{parentName:"p",href:"https://github.com/ObolNetwork/obol-sdk-examples/blob/main/TS-Example/index.ts"},"updateClusterDefinition")),(0,r.yg)("h4",{id:"source-5"},"Source"),(0,r.yg)("p",null,"index.ts:93"))}y.isMDXComponent=!0}}]);