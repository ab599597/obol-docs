"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[3564],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=o.createContext({}),d=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},k=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(r),k=a,m=u["".concat(l,".").concat(k)]||u[k]||h[k]||n;return r?o.createElement(m,i(i({ref:t},c),{},{components:r})):o.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=k;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var d=2;d<n;d++)i[d]=r[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}k.displayName="MDXCreateElement"},1028:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>d});var o=r(87462),a=(r(67294),r(3905));const n={sidebar_position:2,description:"Errors & Resolutions"},i="Errors & Resolutions",s={unversionedId:"int/faq/errors",id:"version-v0.16.0/int/faq/errors",title:"Errors & Resolutions",description:"Errors & Resolutions",source:"@site/versioned_docs/version-v0.16.0/int/faq/errors.mdx",sourceDirName:"int/faq",slug:"/int/faq/errors",permalink:"/docs/int/faq/errors",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.16.0/int/faq/errors.mdx",tags:[],version:"v0.16.0",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Errors & Resolutions"},sidebar:"tutorialSidebar",previous:{title:"Frequently asked questions",permalink:"/docs/int/faq/general"},next:{title:"Centralization risks and mitigation",permalink:"/docs/int/faq/risks"}},l={},d=[],c={toc:d};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"errors--resolutions"},"Errors & Resolutions"),(0,a.kt)("p",null,"All operators should try to restart their nodes and should check if they are on the latest stable version before attempting anything other configuration change as we are still in beta and frequently releasing fixes. You can restart and update with the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker compose down\ngit pull\ndocker compose up\n")),(0,a.kt)("p",null,"You can check your logs using"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker compose logs\n")),(0,a.kt)("details",{open:!0,className:"details"},(0,a.kt)("summary",null,(0,a.kt)("h2",{id:"enrs-keys"},"ENRs & Keys")),(0,a.kt)("details",{className:"details"},(0,a.kt)("summary",null,(0,a.kt)("h4",{id:"what-is-an-enr"},"What is an ENR?")),"An ENR is shorthand for an ",(0,a.kt)("a",{href:"https://eips.ethereum.org/EIPS/eip-778"},"Ethereum Node Record"),". It is a way to represent a node on a public network, with a reliable mechanism to update its information.",(0,a.kt)("br",null),(0,a.kt)("br",null),"At Obol we use ENRs to identify charon nodes to one another such that they can form clusters with the right charon nodes and not impostors. ENRs have private keys they use to sign updates to the ",(0,a.kt)("a",{href:"https://enr-viewer.com/"},"data contained")," in their ENR. This private key is by default found at ",(0,a.kt)("code",null,".charon/charon-enr-private-key"),", and should be kept secure, and not checked into version control.",(0,a.kt)("br",null),(0,a.kt)("br",null),"An ENR looks something like this: ",(0,a.kt)("pre",null,(0,a.kt)("code",null,"enr:-JG4QAgAOXjGFcTIkXBO30aUMzg2YSo1CYV0OH8Sf2s7zA2kFjVC9ZQ_jZZItdE8gA-tUXW-rWGDqEcoQkeJ98Pw7GaGAYFI7eoegmlkgnY0gmlwhCKNyGGJc2VjcDI1NmsxoQI6SQlzw3WGZ_VxFHLhawQFhCK8Aw7Z0zq8IABksuJEJIN0Y3CCPoODdWRwgj6E"))),(0,a.kt)("details",{className:"details"},(0,a.kt)("summary",null,(0,a.kt)("h4",{id:"generate-enr-again"},"How do I get my ENR if I want to generate it again?")),(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("code",null,"cd")," to the directory where your private keys are located (ex: ",(0,a.kt)("code",null,"cd /path/to/charon/enr/private/key"),")"),(0,a.kt)("li",null,"Run ",(0,a.kt)("code",null,'docker run --rm -v "$(pwd):/opt/charon" obolnetwork/charon:latest enr'),". This prints the ENR on your screen. "),(0,a.kt)("li",null,"Please note that this ENR is not the same as the one generated when you created it for the first time. This is because the process of generating ENRs includes the current timestamp."))),(0,a.kt)("details",{className:"details"},(0,a.kt)("summary",null,(0,a.kt)("h4",{id:"lost-enr-private-key"}," What do I do if lose my ",(0,a.kt)("code",null,"charon-enr-private-key"),"? ")),(0,a.kt)("ul",null,(0,a.kt)("li",null," For now, ENR rotation/replacement is not supported, it will be supported in a future release. "),(0,a.kt)("li",null," Therefore, it's advised to always keep a backup of your"," "," ",(0,a.kt)("code",null,"private-key")," in a secure location (ex: cloud storage, USB Flash drive etc.) "))),(0,a.kt)("details",{className:"details"},(0,a.kt)("summary",null,(0,a.kt)("h4",{id:"lost-keys"},"I can't find the keys anywhere")),(0,a.kt)("ul",null,(0,a.kt)("li",null,"The ",(0,a.kt)("code",null,"charon-enr-private-key")," is generated inside a hidden folder ",(0,a.kt)("code",null,".charon"),". "),(0,a.kt)("li",null,"To view it, run ",(0,a.kt)("code",null,"ls -al")," in your terminal. "),(0,a.kt)("li",null,"You can then copy the key to your ",(0,a.kt)("code",null,"~/Downloads")," folder for easy access by running ",(0,a.kt)("code",null,"cp .charon/charon-enr-private-key ~/Downloads"),". This step maybe a bit different for windows. "),(0,a.kt)("li",null,"Else, if you are on ",(0,a.kt)("code",null,"macOS"),", press ",(0,a.kt)("code",null,"Cmd + Shift + . ")," to view the ",(0,a.kt)("code",null,".charon")," folder in the finder application. ")))),(0,a.kt)("details",{open:!0,className:"details"},(0,a.kt)("summary",null,(0,a.kt)("h2",{id:"lighthouse"},"Lighthouse")),(0,a.kt)("details",{className:"details"},(0,a.kt)("summary",null,(0,a.kt)("h4",{id:"downloading-historical-blocks"},"Downloading historical blocks"))," This means that Lighthouse is still syncing which will throw a lot of errors down the line. Wait for the sync before moving further."),(0,a.kt)("details",{className:"details"},(0,a.kt)("summary",null,(0,a.kt)("h4",{id:"failed-to-request-attester-duties"},(0,a.kt)("code",null,"Failed to request attester duties")," error"))," Indicates there is something wrong with your lighthouse beacon node. This might be because the request buffer is full as your node is never starting consensus since it never gets the duties."),(0,a.kt)("details",{className:"details"},(0,a.kt)("summary",null,(0,a.kt)("h4",{id:"discovery-search-timeout"},(0,a.kt)("code",null,"Not enough time for a discovery seach")," error"))," This could be linked to an internet connection being to slow or relying on a slow third-party service such as Infura.")),(0,a.kt)("details",{open:!0,className:"details"},(0,a.kt)("summary",null,(0,a.kt)("h2",{id:"beacon-node"},"Beacon Node")),(0,a.kt)("details",{className:"details"},(0,a.kt)("summary",null,(0,a.kt)("h4",{id:"error-communicating-with-beacon-node-api"},(0,a.kt)("code",null,"Error communicating with Beacon Node API")," & ",(0,a.kt)("code",null,"Error while connecting to beacon node event stream")))," This is likely due to lighthouse not done syncing, wait and try again once synced. Can also be linked to Teku keystore issue."),(0,a.kt)("details",{className:"details"},(0,a.kt)("summary",null,(0,a.kt)("h4",{id:"clock-sync-issues"},"Clock sync issues"))," Either your clock server time is off, or you are talking to a remote beacon client that is super slow (this is why we advise against using services like infura)."),(0,a.kt)("details",{className:"details"},(0,a.kt)("summary",null,(0,a.kt)("h4",{id:"beacon-node-API-flaky"},"My beacon node API is flaky with lots of errors and timeouts")),"A good quality beacon node API is critical to validator performance. It is always advised to run your own beacon node to ensure low latencies to boost validator performance.",(0,a.kt)("br",null),(0,a.kt)("br",null),"Using 3rd party services like Infura's beacon node API has significant disadvantages since the quality is often low. Requests often return 500s or timeout (Charon times out after 2s). This results in lots of warnings and errors and failed duties. We are working on an ",(0,a.kt)("a",{href:"https://github.com/ObolNetwork/charon/issues/960"},"issue")," to mitigate against this, but running a local beacon node is still always preferred. We are not yet considering increasing the 2s timeout since that can have knock-on effects.")),(0,a.kt)("details",{open:!0,className:"details"},(0,a.kt)("summary",null,(0,a.kt)("h2",{id:"charon"},"Charon")),(0,a.kt)("details",{className:"details"},(0,a.kt)("summary",null,(0,a.kt)("h4",{id:"attester-failed-in-consensus-component-error"},(0,a.kt)("code",null,"Attester failed in consensus component")," error"))," The required number of operators defined in your cluster-lock file is probably not online to sign successfully. Make sure all operators are running the latest version of charon. To check if some peers are not online: ",(0,a.kt)("code",null," docker logs charon-distributed-validator-node-charon-1 2>&1 | grep 'absent' ")),(0,a.kt)("details",{className:"details"},(0,a.kt)("summary",null,(0,a.kt)("h4",{id:"load-private-key-error"},(0,a.kt)("code",null,"Load private key")," error"))," Make sure you have successfully run a DKG before running the node. The key should be created and placed in the right directory during the ceremony Also, make sure you are working in the right directory: ",(0,a.kt)("code",null,"charon-distributed-validator-node")),(0,a.kt)("details",{className:"details"},(0,a.kt)("summary",null,(0,a.kt)("h4",{id:"failed-to-confirm-node-connection-error"},(0,a.kt)("code",null,"Failed to confirm node connection")," error"))," Wait for Teku & Lighthouse sync to be complete."),(0,a.kt)("details",{className:"details"},(0,a.kt)("summary",null,(0,a.kt)("h4",{id:"reserve-relay-circuit-error"},(0,a.kt)("code",null,"Reserve relay circuit: reservation failed")," error")),(0,a.kt)("code",null,"RESERVATION_REFUSED"),' is returned by the libp2p relay when some maximum limit has been reached. This is most often due to "maximum reservations per IP/peer". This is when your charon node is restarting or in some error loop and constantly attempting to create new relay reservations reaching the maximum.',(0,a.kt)("br",null),(0,a.kt)("br",null),'To fix this error, stop your charon node for 30mins before restarting it. This should allow the relay enough time to reset your ip/peer limits and should then allow new reservations. This could also be due to the relay being overloaded in general, so reaching a server wide "maximum connections" limit. This is an issue with relay scalability and we are working in a long term fix for this.'),(0,a.kt)("details",{className:"details"},(0,a.kt)("summary",null,(0,a.kt)("h4",{id:"opening-relay-circuit-error"},(0,a.kt)("code",null,"Error opening relay circuit: NO_RESERVATION")," error")),(0,a.kt)("code",null,"Error opening relay circuit NO_RESERVATION (204)")," indicates the peer isn't connected to the relay, so the charon client cannot connect to the peer via the relay. That might be because the peer is offline or the peer is configured to connect to a different relay.",(0,a.kt)("br",null),(0,a.kt)("br",null),"To fix this error, ensure the peer is online and configured with the exact same `--p2p-relays` flag."),(0,a.kt)("details",{className:"details"},(0,a.kt)("summary",null,(0,a.kt)("h4",{id:"duty-data-from-beacon-node-error"},(0,a.kt)("code",null,"Couldn't fetch duty data from the beacon node")," error")),(0,a.kt)("code",null,"msgFetcher")," indicates a duty failed in the fetcher component when it failed to fetch the required data from the beacon node API. This indicates a problem with the upstream beacon node."),(0,a.kt)("details",{className:"details"},(0,a.kt)("summary",null,(0,a.kt)("h4",{id:"aggregate-attestation-error"},(0,a.kt)("code",null,"Couldn't aggregate attestation due to failed attester duty")," error")),(0,a.kt)("code",null,"msgFetcherAggregatorNoAttData")," indicates an attestation aggregation duty failed in the fetcher component since it couldn't fetch the prerequisite attestation data. This indicates the associated attestation duty failed to obtain a cluster agreed upon value."),(0,a.kt)("details",{className:"details"},(0,a.kt)("summary",null,(0,a.kt)("h4",{id:"aggregate-attestation-insufficient-partial-v2-committee-error"},(0,a.kt)("code",null,"Couldn't aggregate attestation due to insufficient partial v2 committee subscriptions")," error")),(0,a.kt)("code",null,"msgFetcherAggregatorZeroPrepares")," indicates an attestation aggregation duty failed in the fetcher component since it couldn't fetch the prerequisite aggregated v2 committee subscription. This indicates the associated prepare aggregation duty failed due to no partial v2 committee subscription submitted by the cluster validator clients."),(0,a.kt)("details",{className:"details"},(0,a.kt)("summary",null,(0,a.kt)("h4",{id:"aggregate-attestation-failed-prepare-aggregator-duty-error"},(0,a.kt)("code",null,"Couldn't aggregate attestation due to failed prepare aggregator duty")," error")),(0,a.kt)("code",null,"msgFetcherAggregatorFailedPrepare")," indicates an attestation aggregation duty failed in the fetcher component since it couldn't fetch the prerequisite aggregated v2 committee subscription. This indicates the associated prepare aggregation duty failed."),(0,a.kt)("details",{className:"details"},(0,a.kt)("summary",null,(0,a.kt)("h4",{id:"insufficient-partial-randao-signatures-error"},(0,a.kt)("code",null,"Couldn't propose block due to insufficient partial randao signatures")," error")),(0,a.kt)("code",null,"msgFetcherProposerFewRandaos")," indicates a block proposer duty failed in the fetcher component since it couldn't fetch the prerequisite aggregated RANDAO. This indicates the associated randao duty failed due to insufficient partial randao signatures submitted by the cluster validator clients."),(0,a.kt)("details",{className:"details"},(0,a.kt)("summary",null,(0,a.kt)("h4",{id:"zero-partial-randao-signatures-error"},(0,a.kt)("code",null,"Couldn't propose block due to zero partial randao signatures")," error")),(0,a.kt)("code",null,"msgFetcherProposerZeroRandaos")," indicates a block proposer duty failed in the fetcher component since it couldn't fetch the prerequisite aggregated RANDAO. This indicates the associated randao duty failed due to no partial randao signatures submitted by the cluster validator clients."),(0,a.kt)("details",{className:"details"},(0,a.kt)("summary",null,(0,a.kt)("h4",{id:"failed-randao-duty-error"},(0,a.kt)("code",null,"Couldn't propose block due to failed randao duty")," error")),(0,a.kt)("code",null,"msgFetcherProposerZeroRandaos")," indicates a block proposer duty failed in the fetcher component since it couldn't fetch the prerequisite aggregated RANDAO. This indicates the associated randao duty failed."),(0,a.kt)("details",{className:"details"},(0,a.kt)("summary",null,(0,a.kt)("h4",{id:"consensus-algorithm-not-complete-error"},(0,a.kt)("code",null,"Consensus algorithm didn't complete")," error")),(0,a.kt)("code",null,"msgConsensus")," indicates a duty failed in consensus component. This could indicate that insufficient honest peers participated in consensus or p2p network connection problems."),(0,a.kt)("details",{className:"details"},(0,a.kt)("summary",null,(0,a.kt)("h4",{id:"signed-duty-not-submitted-error"},(0,a.kt)("code",null,"Signed duty not submitted by local validator client")," error")),(0,a.kt)("code",null,"msgValidatorAPI")," indicates that partial signature were never submitted by the local validator client. This could indicate that the local validator client is offline, or has connection problems with charon, or has some other problem. See validator client logs for more details."),(0,a.kt)("details",{className:"details"},(0,a.kt)("summary",null,(0,a.kt)("h4",{id:"partial-signature-exchange-error"},(0,a.kt)("code",null,"Bug: partial signature database didn't trigger partial signature exchange")," error")),(0,a.kt)("code",null,"msgParSigDBInternal")," indicates a bug in the partial signature database as it is unexpected."),(0,a.kt)("details",{className:"details"},(0,a.kt)("summary",null,(0,a.kt)("h4",{id:"no-partial-signature-received-error"},(0,a.kt)("code",null,"No partial signatures received from peers")," error")),(0,a.kt)("code",null,"msgParSigEx")," indicates that no partial signature for the duty was received from any peer. This indicates all peers are offline or p2p network connection problems."),(0,a.kt)("details",{className:"details"},(0,a.kt)("summary",null,(0,a.kt)("h4",{id:"insufficient-partial-signatures-received-error"},(0,a.kt)("code",null,"Insufficient partial signatures received, minimum required threshold not reached")," error")),(0,a.kt)("code",null,"msgParSigDBThreshold")," indicates that insufficient partial signatures for the duty was received from peers. This indicates problems with peers or p2p network connection problems."),(0,a.kt)("details",{className:"details"},(0,a.kt)("summary",null,(0,a.kt)("h4",{id:"inconsistent-signed-data-error"},(0,a.kt)("code",null,"Bug: threshold aggregation of partial signatures failed due to inconsistent signed data")," error")),(0,a.kt)("code",null,"msgSigAgg")," indicates that BLS threshold aggregation of sufficient partial signatures failed. This indicates inconsistent signed data. This indicates a bug in charon as it is unexpected.")),(0,a.kt)("details",{open:!0,className:"details"},(0,a.kt)("summary",null,(0,a.kt)("h2",{id:"teku"},"Teku")),(0,a.kt)("details",{className:"details"},(0,a.kt)("summary",null,(0,a.kt)("h4",{id:"teku-keystore-file-error"},"Teku ",(0,a.kt)("code",null,"keystore file")," error "))," Teku sometimes logs an error which looks like ",(0,a.kt)("code",null,"Keystore file /opt/charon/validator_keys/keystore-0.json.lock already in use.")," This can be solved by deleting the file(s) ending with ",(0,a.kt)("code",null,".lock")," in the folder ",(0,a.kt)("code",null,".charon/validator_keys"),". It is caused by an unsafe shut down of Teku (usually by double pressing `Ctrl+C` to shutdown containers faster).")),(0,a.kt)("details",{open:!0,className:"details"},(0,a.kt)("summary",null,(0,a.kt)("h2",{id:"grafana"}," Grafana ")),(0,a.kt)("details",{className:"details"},(0,a.kt)("summary",null,(0,a.kt)("h4",{id:"how-to-fix-grafana-dashboard"}," How to fix the grafana dashboard? "))," Sometimes, grafana dashboard doesn't load any data first time around. You can solve this by following the steps below: ",(0,a.kt)("ul",null,(0,a.kt)("li",null,"Click the Wheel Icon > Datasources"),(0,a.kt)("li",null,"Click prometheus"),(0,a.kt)("li",null,'Change the "Access" field from ',(0,a.kt)("code",null,"Server (default)")," to ",(0,a.kt)("code",null,"Browser"),'. Press "Save & Test". It should fail. '),(0,a.kt)("li",null,'Change the "Access" field back to ',(0,a.kt)("code",null,"Server (default)"),' and press "Save & Test". You should be presented with a green success icon saying "Data source is working" and you can return to the dashboard page. '))),(0,a.kt)("details",{className:"details"},(0,a.kt)("summary",null,(0,a.kt)("h4",{id:"no-data-validator-info-panel"},(0,a.kt)("code",null,"N/A")," & ",(0,a.kt)("code",null,"No data")," in validator info panel"))," Can be linked to the ",(0,a.kt)("a",{href:"https://github.com/ObolNetwork/charon-distributed-validator-node#teku-keystore-file-error"},"Teku Keystore issue"),".")),(0,a.kt)("details",{open:!0,className:"details"},(0,a.kt)("summary",null,(0,a.kt)("h2",{id:"prometheus"},"Prometheus")),(0,a.kt)("details",{className:"details"},(0,a.kt)("summary",null,(0,a.kt)("h4",{id:"unauthorized-invalid-token-error"},(0,a.kt)("code",null,"Unauthorized: authentication error: invalid token")))," You can ignore this error unless you have been contacted by the Obol Team with monitoring credentials. In that case, follow ",(0,a.kt)("a",{href:"/docs/int/quickstart/group/quickstart-group-operator#step-6---optional-add-the-monitoring-credentials"},"Step 6 of the quickstart"),". It does not affect cluster performance or prevent the cluster from running.")),(0,a.kt)("details",{open:!0,className:"details"},(0,a.kt)("summary",null,(0,a.kt)("h2",{id:"docker"}," Docker ")),(0,a.kt)("details",{className:"details"},(0,a.kt)("summary",null,(0,a.kt)("h4",{id:"docker-permission-denied-error"}," How to fix ",(0,a.kt)("code",null,"permission denied")," errors? "))," Permission denied errors can come up in a variety of manners, particularly on Linux and WSL for Windows systems. In the interest of security, the charon docker image runs as a non-root user, and this user often does not have the permissions to write in the directory you have checked out the code to. This can be generally be fixed with some of the following: ",(0,a.kt)("ul",null,(0,a.kt)("li",null,"Running docker commands with ",(0,a.kt)("code",null,"sudo"),", if you haven't ",(0,a.kt)("a",{href:"https://docs.docker.com/engine/install/linux-postinstall/"},"setup docker to be run as a non-root user"),". "),(0,a.kt)("li",null,"Changing the permissions of the ",(0,a.kt)("code",null,".charon")," folder with the commands: "),(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("code",null,"mkdir .charon")," (if it doesn't already exist)"),(0,a.kt)("li",null,(0,a.kt)("code",null,"sudo chmod -R 666 .charon"))))),(0,a.kt)("details",{className:"details"},(0,a.kt)("summary",null,(0,a.kt)("h4",{id:"running-docker-compose-up-error"}," I see a lot of errors after running ",(0,a.kt)("code",null,"docker compose up")))," It's because both geth and lighthouse start syncing and so there's connectivity issues among the containers. Simply let the containers run for a while. You won't observe frequent errors when geth finishes syncing. You can also add a second beacon node endpoint for something like infura by adding a comma separated API URL to the end of ",(0,a.kt)("code",null,"CHARON_BEACON_NODE_ENDPOINTS")," in the docker-compose(./docker-compose.yml#84)."),(0,a.kt)("details",{className:"details"},(0,a.kt)("summary",null,(0,a.kt)("h4",{id:"loki-plugin-not-found-error"}," How do I fix the ",(0,a.kt)("code",null,'plugin "loki" not found')," error?"))," If you get the following error when calling `docker compose up`:",(0,a.kt)("br",null),(0,a.kt)("code",null,'Error response from daemon: error looking up logging plugin loki: plugin "loki" not found'),".",(0,a.kt)("br",null),"Then it probably means that the Loki docker driver isn't installed. In that case, run the following command to install loki:",(0,a.kt)("br",null),(0,a.kt)("code",null,"docker plugin install grafana/loki-docker-driver:latest --alias loki --grant-all-permissions "))),(0,a.kt)("details",{open:!0,className:"details"},(0,a.kt)("summary",null,(0,a.kt)("h2",{id:"Relay"},"Relay")),(0,a.kt)("details",{className:"details"},(0,a.kt)("summary",null,(0,a.kt)("h4",{id:"resolve-ip-or-p2p-external-host-flag-error"},(0,a.kt)("code",null," Resolve IP of p2p external host flag: lookup replace.with.public.ip.or.hostname: no such host ")," "," error"))," Replace ",(0,a.kt)("code",null,"replace.with.public.ip.or.hostname")," in the relay/docker-compose.yml with your real public IP or DNS hostname."),(0,a.kt)("details",{className:"details"},(0,a.kt)("summary",null,(0,a.kt)("h4",{id:"timeout-resolving-bootnode-enr"},(0,a.kt)("code",null," Timeout resolving bootnode ENR: context deadline exceeded ")," "," error"))," The relay you are trying to connect to your peers via is offline or unreachable.")))}u.isMDXComponent=!0}}]);