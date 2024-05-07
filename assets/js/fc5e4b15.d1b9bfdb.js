"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[38360],{15680:(e,o,t)=>{t.d(o,{xA:()=>l,yg:()=>y});var r=t(96540);function n(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function a(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?a(Object(t),!0).forEach((function(o){n(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function c(e,o){if(null==e)return{};var t,r,n=function(e,o){if(null==e)return{};var t,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],o.indexOf(t)>=0||(n[t]=e[t]);return n}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=r.createContext({}),d=function(e){var o=r.useContext(s),t=o;return e&&(t="function"==typeof e?e(o):i(i({},o),e)),t},l=function(e){var o=d(e.components);return r.createElement(s.Provider,{value:o},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var o=e.children;return r.createElement(r.Fragment,{},o)}},m=r.forwardRef((function(e,o){var t=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(t),m=n,y=p["".concat(s,".").concat(m)]||p[m]||u[m]||a;return t?r.createElement(y,i(i({ref:o},l),{},{components:t})):r.createElement(y,i({ref:o},l))}));function y(e,o){var t=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var s in o)hasOwnProperty.call(o,s)&&(c[s]=o[s]);c.originalType=e,c[p]="string"==typeof e?e:n,i[1]=c;for(var d=2;d<a;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},83445:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var r=t(58168),n=(t(96540),t(15680));const a={sidebar_position:8,description:"Use advanced docker-compose features to have more flexibility and power to change the default configuration."},i="Advanced Docker Configs",c={unversionedId:"int/quickstart/advanced/adv-docker-configs",id:"version-v0.18.0/int/quickstart/advanced/adv-docker-configs",title:"Advanced Docker Configs",description:"Use advanced docker-compose features to have more flexibility and power to change the default configuration.",source:"@site/versioned_docs/version-v0.18.0/int/quickstart/advanced/adv-docker-configs.md",sourceDirName:"int/quickstart/advanced",slug:"/int/quickstart/advanced/adv-docker-configs",permalink:"/docs/v0.18.0/int/quickstart/advanced/adv-docker-configs",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.18.0/int/quickstart/advanced/adv-docker-configs.md",tags:[],version:"v0.18.0",sidebarPosition:8,frontMatter:{sidebar_position:8,description:"Use advanced docker-compose features to have more flexibility and power to change the default configuration."},sidebar:"tutorialSidebar",previous:{title:"Self-Host a Relay",permalink:"/docs/v0.18.0/int/quickstart/advanced/self-relay"},next:{title:"Combine DV private key shares",permalink:"/docs/v0.18.0/int/quickstart/advanced/quickstart-combine"}},s={},d=[],l={toc:d},p="wrapper";function u(e){let{components:o,...t}=e;return(0,n.yg)(p,(0,r.A)({},l,t,{components:o,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"advanced-docker-configs"},"Advanced Docker Configs"),(0,n.yg)("admonition",{type:"info"},(0,n.yg)("p",{parentName:"admonition"},"This section is intended for ",(0,n.yg)("em",{parentName:"p"},"docker power users"),", i.e., for those who are familiar with working with ",(0,n.yg)("inlineCode",{parentName:"p"},"docker-compose")," and want to have more flexibility and power to change the default configuration.")),(0,n.yg)("p",null,'We use the "Multiple Compose File" feature which provides a very powerful way to override any configuration in ',(0,n.yg)("inlineCode",{parentName:"p"},"docker-compose.yml")," without needing to modify git-checked-in files since that results in conflicts when upgrading this repo.\nSee ",(0,n.yg)("a",{parentName:"p",href:"https://docs.docker.com/compose/extends/#multiple-compose-files"},"this")," for more details."),(0,n.yg)("p",null,"There are some additional compose files in ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/ObolNetwork/charon-distributed-validator-node/"},"this repository"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"compose-debug.yml")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"docker-compose.override.yml.sample"),", along-with the default ",(0,n.yg)("inlineCode",{parentName:"p"},"docker-compose.yml")," file that you can use for this purpose."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"compose-debug.yml")," contains some additional containers that developers can use for debugging, like ",(0,n.yg)("inlineCode",{parentName:"li"},"jaeger"),". To achieve this, you can run:")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"docker compose -f docker-compose.yml -f compose-debug.yml up\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"docker-compose.override.yml.sample")," is intended to override the default configuration provided in ",(0,n.yg)("inlineCode",{parentName:"p"},"docker-compose.yml"),". This is useful when, for example, you wish to add port mappings or want to disable a container.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"To use it, just copy the sample file to ",(0,n.yg)("inlineCode",{parentName:"p"},"docker-compose.override.yml")," and customise it to your liking. Please create this file ONLY when you want to tweak something. This is because the default override file is empty and docker errors if you provide an empty compose file."))),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"cp docker-compose.override.yml.sample docker-compose.override.yml\n\n# Tweak docker-compose.override.yml and then run docker compose up\ndocker compose up\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"You can also run all these compose files together. This is desirable when you want to use both the features. For example, you may want to have some debugging containers AND also want to override some defaults. To achieve this, you can run:")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"docker compose -f docker-compose.yml -f docker-compose.override.yml -f compose-debug.yml up\n")))}u.isMDXComponent=!0}}]);