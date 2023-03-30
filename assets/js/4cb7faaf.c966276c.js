"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[9536],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,m=d["".concat(s,".").concat(u)]||d[u]||h[u]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},95941:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={description:"Networking",sidebar_position:4},i="Charon networking",l={unversionedId:"charon/networking",id:"version-v0.14.4/charon/networking",title:"Charon networking",description:"Networking",source:"@site/versioned_docs/version-v0.14.4/charon/networking.md",sourceDirName:"charon",slug:"/charon/networking",permalink:"/docs/charon/networking",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.14.4/charon/networking.md",tags:[],version:"v0.14.4",sidebarPosition:4,frontMatter:{description:"Networking",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Cluster configuration",permalink:"/docs/charon/cluster-configuration"},next:{title:"CLI reference",permalink:"/docs/charon/charon-cli-reference"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"Internal Validator Stack",id:"internal-validator-stack",level:2},{value:"External P2P Network",id:"external-p2p-network",level:2},{value:"LibP2P Authentication and Security",id:"libp2p-authentication-and-security",level:3},{value:"LibP2P Relays and Peer Discovery",id:"libp2p-relays-and-peer-discovery",level:3},{value:"Scalable Relay Clusters",id:"scalable-relay-clusters",level:3}],p={toc:c};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"charon-networking"},"Charon networking"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"This document describes Charon's networking model which can be divided into two parts: the ",(0,a.kt)("a",{parentName:"p",href:"#internal-validator-stack"},(0,a.kt)("em",{parentName:"a"},"internal validator stack"))," and the ",(0,a.kt)("a",{parentName:"p",href:"#external-p2p-network"},(0,a.kt)("em",{parentName:"a"},"external p2p network")),"."),(0,a.kt)("h2",{id:"internal-validator-stack"},"Internal Validator Stack"),(0,a.kt)("img",{src:"/img/InternalValidatorStack.png",alt:"Internal Validator Stack",width:"50%"})," ",(0,a.kt)("br",null),(0,a.kt)("p",null,"Charon is a middleware DVT client and is therefore connected to an upstream beacon node and a downstream validator client is connected to it.\nEach operator should run the whole validator stack (all 4 client software types), either on the same machine or on different machines. The networking between\nthe nodes should be private and not exposed to the public internet."),(0,a.kt)("p",null,"Related Charon configuration flags:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--beacon-node-endpoints"),": Connects Charon to one or more beacon nodes."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--validator-api-address"),": Address for Charon to listen on and serve requests from the validator client.")),(0,a.kt)("h2",{id:"external-p2p-network"},"External P2P Network"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"External P2P Network",src:n(94442).Z,width:"2306",height:"494"}),'\nThe Charon clients in a DV cluster are connected to each other via a small p2p network consisting of only the clients in the cluster. Peer IP addresses are\ndiscovered via an external "relay" server. The p2p connections are over the public internet so the charon p2p port must be publicly accessible. Charon leverages\nthe popular ',(0,a.kt)("a",{parentName:"p",href:"https://libp2p.io/"},"libp2p")," protocol."),(0,a.kt)("p",null,"Related ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/charon/charon-cli-reference"},"Charon configuration flags"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--p2p-tcp-addresses"),": Addresses for Charon to listen on and serve p2p requests."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--p2p-relays"),": Connect charon to one or more relay servers."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--private-key-file"),": Private key identifying the charon client.")),(0,a.kt)("h3",{id:"libp2p-authentication-and-security"},"LibP2P Authentication and Security"),(0,a.kt)("p",null,"Each charon client has a secp256k1 private key. The associated public key is encoded into the ",(0,a.kt)("a",{parentName:"p",href:"/docs/charon/cluster-configuration#Cluster-Lock-File"},"cluster lock file")," to identify the nodes in the cluster.\nFor ease of use and to align with the Ethereum ecosystem, Charon encodes these public keys in the ",(0,a.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-778"},"ENR format"),",\nnot in ",(0,a.kt)("a",{parentName:"p",href:"https://docs.libp2p.io/concepts/fundamentals/peers/"},"libp2p\u2019s Peer ID format"),"."),(0,a.kt)("p",null,"Charon currently only supports libp2p tcp connections with ",(0,a.kt)("a",{parentName:"p",href:"https://noiseprotocol.org/"},"noise")," security and only accepts incoming libp2p connections from peers defined in the cluster lock. "),(0,a.kt)("h3",{id:"libp2p-relays-and-peer-discovery"},"LibP2P Relays and Peer Discovery"),(0,a.kt)("p",null,"Relays are simple libp2p servers that are publicly accessible supporting the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.libp2p.io/concepts/nat/circuit-relay/"},"circuit-relay")," protocol.\nCircuit-relay is a libp2p transport protocol that routes traffic between two peers over a third-party \u201crelay\u201d peer."),(0,a.kt)("p",null,"Obol hosts a publicly accessible relay at ",(0,a.kt)("a",{parentName:"p",href:"https://0.relay.obol.tech"},"https://0.relay.obol.tech")," and will work with other organisations in the community to host alternatives  Anyone can host their own relay server for their DV cluster."),(0,a.kt)("p",null,"Each charon node knows which peers are in the cluster from the ENRs in the cluster lock file, but their IP addresses are unknown. By connecting to the same relay,\nnodes establish \u201crelay connections\u201d to each other. Once connected via relay they exchange their known public addresses via libp2p\u2019s ",(0,a.kt)("a",{parentName:"p",href:"https://docs.libp2p.io/concepts/fundamentals/protocols/#identify"},"identify"),"\nprotocol. The relay connection is then upgraded to a direct connection. If a node\u2019s public IP changes, nodes once again connect via relay, exchange the new IP, and then connect directly once again."),(0,a.kt)("p",null,"Note that in order for two peers to discover each other, they must connect to the same relay. Cluster operators should therefore coordinate which relays to use."),(0,a.kt)("p",null,"Libp2p\u2019s ",(0,a.kt)("a",{parentName:"p",href:"https://docs.libp2p.io/concepts/fundamentals/protocols/#identify"},"identify")," protocol attempts to automatically detect the public IP address of a charon\nclient without the need to explicitly configure it. If this however fails, the following two configuration flags can be used to explicitly set the publicly advertised\naddress:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--p2p-external-ip"),": Explicitly sets the external IP address."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--p2p-external-hostname"),": Explicitly sets the external DNS host name.")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"If a pair of charon clients are not publicly accessible, due to being behind a NAT, they will not be able to upgrade their relay connections to a direct connection.\nEven though this is supported, it isn\u2019t recommended as relay connections introduce additional latency and reduced throughput and will result in decreased validator effectiveness\nand possible missed block proposals and attestations.")),(0,a.kt)("p",null,"Libp2p\u2019s circuit-relay connections are end-to-end encrypted, even though relay servers accept connections between nodes from multiple different clusters, relays are merely\nrouting opaque connections. And since Charon only accepts incoming connections from other peers in its cluster, the use of a relay doesn\u2019t allow connections between clusters."),(0,a.kt)("p",null,"Only the following three libp2p protocols are established between a charon node and a relay itself:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.libp2p.io/concepts/nat/circuit-relay/"},"circuit-relay"),": To establish relay e2e encrypted connections between two peers in a cluster. ",(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.libp2p.io/concepts/fundamentals/protocols/#identify"},"identify"),": Auto-detection of public IP addresses to share with other peers in the cluster. ",(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/ObolNetwork/charon/blob/main/app/peerinfo/peerinfo.go"},"peerinfo"),": Exchanges basic application ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/ObolNetwork/charon/blob/main/app/peerinfo/peerinfopb/v1/peerinfo.proto"},"metadata")," for improved operational metrics and observability. ",(0,a.kt)("br",null))),(0,a.kt)("p",null,"All other charon protocols are only established between nodes in the same cluster. "),(0,a.kt)("h3",{id:"scalable-relay-clusters"},"Scalable Relay Clusters"),(0,a.kt)("p",null,"In order for a charon client to connect to a relay, it needs the relay's ",(0,a.kt)("a",{parentName:"p",href:"https://docs.libp2p.io/concepts/fundamentals/addressing/"},"multiaddr")," (containing its public key and IP address).\nBut a single multiaddr can only point to a single relay server which can easily be overloaded if too many clusters connect to it. Charon therefore supports resolving a relay\u2019s multiaddr\nvia HTTP GET request. Since charon also includes the unique ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster-hash")," header in this request, the relay provider can use\n",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/load-balancing/docs/https/traffic-management-global#traffic_steering_header-based_routing"},"consistent header-based load-balancing")," to map clusters to one of many relays using a single HTTP address."),(0,a.kt)("p",null,"The relay supports serving its runtime public multiaddrs via its ",(0,a.kt)("inlineCode",{parentName:"p"},"--http-address")," flag."),(0,a.kt)("p",null,"E.g., ",(0,a.kt)("a",{parentName:"p",href:"https://0.relay.obol.tech"},"https://0.relay.obol.tech")," is actually a load-balancer that routes HTTP requests to one of many relays based on the ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster-hash")," header returning the target relay\u2019s multiaddr\nwhich the charon client then uses to connect to that relay."),(0,a.kt)("p",null,"The charon ",(0,a.kt)("inlineCode",{parentName:"p"},"--p2p-relays")," flag therefore supports both multiaddrs as well as HTTP URls."))}d.isMDXComponent=!0},94442:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ExternalP2PNetwork-37e54ca010415d35ddcc5b8e5dee3aec.png"}}]);