"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[5180],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=d(n),u=a,m=h["".concat(c,".").concat(u)]||h[u]||l[u]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7007:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return l}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={Description:"A rust-based CLI client for hosting and participating in Distributed Validator key generation ceremonies."},c="DKG CLI reference",d={unversionedId:"dvk/dkg_cli_reference",id:"version-v0.6.1/dvk/dkg_cli_reference",title:"DKG CLI reference",description:"The dkg-poc client is a prototype implementation for generating Distributed Validator Keys. Keys generated with this tool will not work with Charon, and they are not suitable for use. Creating keys for a Distributed Validator should use the charon create dkg command.",source:"@site/versioned_docs/version-v0.6.1/dvk/03_dkg_cli_reference.md",sourceDirName:"dvk",slug:"/dvk/dkg_cli_reference",permalink:"/docs/dvk/dkg_cli_reference",draft:!1,editUrl:"https://github.com/obolnetwork/obol-docs/edit/main/website/versioned_docs/version-v0.6.1/dvk/03_dkg_cli_reference.md",tags:[],version:"v0.6.1",sidebarPosition:3,frontMatter:{Description:"A rust-based CLI client for hosting and participating in Distributed Validator key generation ceremonies."},sidebar:"tutorialSidebar",previous:{title:"Distributed Validator launchpad",permalink:"/docs/dvk/distributed_validator_launchpad"},next:{title:"Obol Manager Contracts",permalink:"/docs/sc/introducing-obol-managers"}},p={},l=[],h={toc:l};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"dkg-cli-reference"},"DKG CLI reference"),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"dkg-poc")," client is a prototype implementation for generating Distributed Validator Keys. Keys generated with this tool will not work with Charon, and they are not suitable for use. Creating keys for a Distributed Validator should use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/dv/charon_cli_reference#creating-the-configuration-for-a-dkg-ceremony"},(0,i.kt)("inlineCode",{parentName:"a"},"charon create dkg")," command"),"."))),(0,i.kt)("p",null,"The following is a reference for ",(0,i.kt)("inlineCode",{parentName:"p"},"dkg-poc")," at commit ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ObolNetwork/dkg-poc/commit/6181feaab2f60bdaaec954f11c04ef49c0b3366a"},(0,i.kt)("inlineCode",{parentName:"a"},"6181fea")),". Find the latest release on our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ObolNetwork/dkg-poc"},"Github"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"dkg-poc")," is implemented as a rust-based webserver for performing a distributed key generation ceremony. This deployment model ended up raising many user experience and security concerns, for example it is both hard and likely insecure to setup a TLS protected webserver at home if you are not a specialist in this area. Further, the PoC is based on an ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kobigurk/aggregatable-dkg"},"Aggregatable DKG")," library which is built on sharing a group element rather than a field element, which makes the threshold signing scheme more complex as a result. These factors resulted in a deprecation of this approach, with many valuable insights gained from this client. Currently a DV launchpad and charon based DKG flow serves as the intended ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ObolNetwork/charon/blob/main/docs/dkg.md"},"DKG architecture")," for creating Distributed Validator Clusters. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ dkg-poc --help \n\ndkg-poc 0.1.0\nA Distributed Validator Key Generation client for the Obol Network.\n\nUSAGE:\n    dkg-poc <SUBCOMMAND>\n\nFLAGS:\n    -h, --help       Prints help information\n    -V, --version    Prints version information\n\nSUBCOMMANDS:\n    help           Prints this message or the help of the given subcommand(s)\n    lead           Lead a new DKG ceremony\n    participate    Participate in a DKG ceremony\n\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ dkg-poc lead --help\n\ndkg-poc-lead 0.1.0\nLead a new DKG ceremony\n\nUSAGE:\n    dkg-poc lead [OPTIONS] --num-participants <num-participants> --threshold <threshold>\n\nFLAGS:\n    -h, --help       Prints help information\n    -V, --version    Prints version information\n\nOPTIONS:\n    -a, --address <addr>\n            The address to bind this client to, to participate in the DKG ceremony (Default: 127.0.0.1:8081)\n\n    -e, --enr <enr>\n            Provide existing charon ENR for this participant instead of generating a new private key to import\n\n    -n, --num-participants <num-participants>    The number of participants taking part in the DKG ceremony\n    -p, --password <password>\n            Password to join the ceremony (Default is to randomly generate a password)\n\n    -t, --threshold <threshold>\n            Sets the threshold at which point a group of shareholders can create valid signatures\n\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ dkg-poc participate --help\n\ndkg-poc-participate 0.1.0\nParticipate in a DKG ceremony\n\nUSAGE:\n    dkg-poc participate [OPTIONS] --leader-address <leader-addr>\n\nFLAGS:\n    -h, --help       Prints help information\n    -V, --version    Prints version information\n\nOPTIONS:\n    -a, --address <addr>                  The address to bind this client to, to participate in the DKG ceremony\n                                          (Default: 127.0.0.1:8081)\n    -e, --enr <enr>                       Provide existing charon ENR for this participant instead of generating a new\n                                          private key to import\n    -l, --leader-address <leader-addr>    The address of the webserver leading the DKG ceremony\n    -p, --password <password>             Password to join the ceremony (Default is to randomly generate a password)\n")))}u.isMDXComponent=!0}}]);