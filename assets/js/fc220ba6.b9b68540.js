"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[59865],{40398:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var r=t(74848),o=t(28453);const a={description:"A go-based middleware client for taking part in Distributed Validator clusters.",sidebar_position:5},s="CLI reference",i={id:"charon/charon-cli-reference",title:"CLI reference",description:"A go-based middleware client for taking part in Distributed Validator clusters.",source:"@site/versioned_docs/version-v0.17.0/charon/charon-cli-reference.md",sourceDirName:"charon",slug:"/charon/charon-cli-reference",permalink:"/v0.17.0/charon/charon-cli-reference",draft:!1,unlisted:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.17.0/charon/charon-cli-reference.md",tags:[],version:"v0.17.0",sidebarPosition:5,frontMatter:{description:"A go-based middleware client for taking part in Distributed Validator clusters.",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Charon networking",permalink:"/v0.17.0/charon/networking"},next:{title:"Introduction",permalink:"/v0.17.0/dvl/intro"}},l={},d=[{value:"The <code>create</code> subcommand",id:"the-create-subcommand",level:2},{value:"Creating an ENR for charon",id:"creating-an-enr-for-charon",level:3},{value:"Create a full cluster locally",id:"create-a-full-cluster-locally",level:3},{value:"Creating the configuration for a DKG Ceremony",id:"creating-the-configuration-for-a-dkg-ceremony",level:3},{value:"The <code>dkg</code> subcommand",id:"the-dkg-subcommand",level:2},{value:"Performing a DKG Ceremony",id:"performing-a-dkg-ceremony",level:3},{value:"The <code>run</code> subcommand",id:"the-run-subcommand",level:2},{value:"Run the Charon middleware",id:"run-the-charon-middleware",level:3},{value:"The <code>combine</code> subcommand",id:"the-combine-subcommand",level:2},{value:"Combine distributed validator keyshares into a single Validator key",id:"combine-distributed-validator-keyshares-into-a-single-validator-key",level:3},{value:"Host a relay",id:"host-a-relay",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"cli-reference",children:"CLI reference"})}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"charon"})," client is under heavy development, interfaces are subject to change until a first major version is published."]})}),"\n",(0,r.jsxs)(n.p,{children:["The following is a reference for charon version ",(0,r.jsx)(n.a,{href:"https://github.com/ObolNetwork/charon/releases/tag/v0.17.0",children:(0,r.jsx)(n.code,{children:"v0.17.0"})}),". Find the latest release on ",(0,r.jsx)(n.a,{href:"https://github.com/ObolNetwork/charon/releases",children:"our Github"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"The following are the top-level commands available to use."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-markdown",children:'Charon enables the operation of Ethereum validators in a fault tolerant manner by splitting the validating keys across a group of trusted parties using threshold cryptography.\n\nUsage:\n  charon [command]\n\nAvailable Commands:\n  combine     Combines the private key shares of a distributed validator cluster into a set of standard validator private keys.\n  completion  Generate the autocompletion script for the specified shell\n  create      Create artifacts for a distributed validator cluster\n  dkg         Participate in a Distributed Key Generation ceremony\n  enr         Prints a new ENR for this node\n  help        Help about any command\n  relay       Start a libp2p relay server\n  run         Run the charon middleware client\n  version     Print version and exit\n\nFlags:\n  -h, --help   Help for charon\n\nUse "charon [command] --help" for more information about a command.\n'})}),"\n",(0,r.jsxs)(n.h2,{id:"the-create-subcommand",children:["The ",(0,r.jsx)(n.code,{children:"create"})," subcommand"]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"create"})," subcommand handles the creation of artifacts needed by charon to operate."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-markdown",children:'charon create --help\nCreate artifacts for a distributed validator cluster. These commands can be used to facilitate the creation of a distributed validator cluster between a group of operators by performing a distributed key generation ceremony, or they can be used to create a local cluster for single operator use cases.\n\nUsage:\n  charon create [command]\n\nAvailable Commands:\n  cluster     Create private keys and configuration files needed to run a distributed validator cluster locally\n  dkg         Create the configuration for a new Distributed Key Generation ceremony using charon dkg\n  enr         Create an Ethereum Node Record (ENR) private key to identify this charon client\n\nFlags:\n  -h, --help   Help for create\n\nUse "charon create [command] --help" for more information about a command.\n'})}),"\n",(0,r.jsx)(n.h3,{id:"creating-an-enr-for-charon",children:"Creating an ENR for charon"}),"\n",(0,r.jsxs)(n.p,{children:["An ",(0,r.jsx)(n.code,{children:"enr"})," is an Ethereum Node Record. It is used to identify this charon client to its other counterparty charon clients across the internet."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-markdown",children:'charon create enr --help\nCreate an Ethereum Node Record (ENR) private key to identify this charon client\n\nUsage:\n  charon create enr [flags]\n\nFlags:\n      --data-dir string   The directory where charon will store all its internal data (default ".charon")\n  -h, --help              Help for enr\n'})}),"\n",(0,r.jsx)(n.h3,{id:"create-a-full-cluster-locally",children:"Create a full cluster locally"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"charon create cluster"})," creates a set of distributed validators locally, including the private keys, a ",(0,r.jsx)(n.code,{children:"cluster-lock.json"})," file, and deposit and exit data. However, this command should only be used for solo use of distributed validators. To run a Distributed Validator with a group of operators, it is preferable to create these artifacts using the ",(0,r.jsx)(n.code,{children:"charon dkg"})," command. That way, no single operator custodies all of the private keys to a distributed validator."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-markdown",children:'Creates a local charon cluster configuration including validator keys, charon p2p keys, cluster-lock.json and a deposit-data.json. See flags for supported features.\n\nUsage:\n  charon create cluster [flags]\n\nFlags:\n      --cluster-dir string                The target folder to create the cluster in. (default "./")\n      --definition-file string            Optional path to a cluster definition file or an HTTP URL. This overrides all other configuration flags.\n      --fee-recipient-addresses strings   Comma separated list of Ethereum addresses of the fee recipient for each validator. Either provide a single fee recipient address or fee recipient addresses for each validator.\n  -h, --help                              Help for cluster\n      --insecure-keys                     Generates insecure keystore files. This should never be used. It is not supported on mainnet.\n      --keymanager-addresses strings      Comma separated list of keymanager URLs to import validator key shares to. Note that multiple addresses are required, one for each node in the cluster, with node0\'s keyshares being imported to the first address, node1\'s keyshares to the second, and so on.\n      --keymanager-auth-tokens strings    Authentication bearer tokens to interact with the keymanager URLs. Don\'t include the "Bearer" symbol, only include the api-token.\n      --name string                       The cluster name\n      --network string                    Ethereum network to create validators for. Options: mainnet, goerli, gnosis, sepolia.\n      --nodes int                         The number of charon nodes in the cluster. Minimum is 3.\n      --num-validators int                The number of distributed validators needed in the cluster.\n      --publish                           Publish lock file to obol-api.\n      --publish-address string            The URL to publish the lock file to. (default "https://api.obol.tech")\n      --split-existing-keys               Split an existing validator\'s private key into a set of distributed validator private key shares. Does not re-create deposit data for this key.\n      --split-keys-dir string             Directory containing keys to split. Expects keys in keystore-*.json and passwords in keystore-*.txt. Requires --split-existing-keys.\n      --threshold int                     Optional override of threshold required for signature reconstruction. Defaults to ceil(n*2/3) if zero. Warning, non-default values decrease security.\n      --withdrawal-addresses strings      Comma separated list of Ethereum addresses to receive the returned stake and accrued rewards for each validator. Either provide a single withdrawal address or withdrawal addresses for each validator.\n'})}),"\n",(0,r.jsx)(n.h3,{id:"creating-the-configuration-for-a-dkg-ceremony",children:"Creating the configuration for a DKG Ceremony"}),"\n",(0,r.jsxs)(n.p,{children:["This ",(0,r.jsx)(n.code,{children:"charon create dkg"})," command creates a cluster_definition file used for the ",(0,r.jsx)(n.code,{children:"charon dkg"})," command."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-markdown",children:'charon create dkg --help\nCreate a cluster definition file that will be used by all participants of a DKG.\n\nUsage:\n  charon create dkg [flags]\n\nFlags:\n      --dkg-algorithm string              DKG algorithm to use; default, keycast, frost (default "default")\n      --fee-recipient-addresses strings   Comma separated list of Ethereum addresses of the fee recipient for each validator. Either provide a single fee recipient address or fee recipient addresses for each validator.\n  -h, --help                              Help for dkg\n      --name string                       Optional cosmetic cluster name\n      --network string                    Ethereum network to create validators for. Options: mainnet, gnosis, goerli, kiln, ropsten, sepolia. (default "mainnet")\n      --num-validators int                The number of distributed validators the cluster will manage (32ETH staked for each). (default 1)\n      --operator-enrs strings             [REQUIRED] Comma-separated list of each operator\'s Charon ENR address.\n      --output-dir string                 The folder to write the output cluster-definition.json file to. (default ".charon")\n  -t, --threshold int                     Optional override of threshold required for signature reconstruction. Defaults to ceil(n*2/3) if zero. Warning, non-default values decrease security.\n      --withdrawal-addresses strings      Comma separated list of Ethereum addresses to receive the returned stake and accrued rewards for each validator. Either provide a single withdrawal address or withdrawal addresses for each validator.\n'})}),"\n",(0,r.jsxs)(n.h2,{id:"the-dkg-subcommand",children:["The ",(0,r.jsx)(n.code,{children:"dkg"})," subcommand"]}),"\n",(0,r.jsx)(n.h3,{id:"performing-a-dkg-ceremony",children:"Performing a DKG Ceremony"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"charon dkg"})," command takes a ",(0,r.jsx)(n.code,{children:"cluster_definition.json"})," file that instructs charon on the terms of a new distributed validator cluster to be created. Charon establishes communication with the other nodes identified in the file, performs a distributed key generation ceremony to create the required threshold private keys, and signs deposit data for each new distributed validator. The command outputs the ",(0,r.jsx)(n.code,{children:"cluster-lock.json"})," file and key shares for each Distributed Validator created."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-markdown",children:'charon dkg --help\nParticipate in a distributed key generation ceremony for a specific cluster definition that creates\ndistributed validator key shares and a final cluster lock configuration. Note that all other cluster operators should run\nthis command at the same time.\n\nUsage:\n  charon dkg [flags]\n\nFlags:\n      --data-dir string                The directory where charon will store all its internal data (default ".charon")\n      --definition-file string         The path to the cluster definition file or an HTTP URL. (default ".charon/cluster-definition.json")\n  -h, --help                           Help for dkg\n      --keymanager-address string      The keymanager URL to import validator keyshares.\n      --keymanager-auth-token string   Authentication bearer token to interact with keymanager API. Don\'t include the "Bearer" symbol, only include the api-token.\n      --log-color string               Log color; auto, force, disable. (default "auto")\n      --log-format string              Log format; console, logfmt or json (default "console")\n      --log-level string               Log level; debug, info, warn or error (default "info")\n      --no-verify                      Disables cluster definition and lock file verification.\n      --p2p-allowlist string           Comma-separated list of CIDR subnets for allowing only certain peer connections. Example: 192.168.0.0/16 would permit connections to peers on your local network only. The default is to accept all connections.\n      --p2p-denylist string            Comma-separated list of CIDR subnets for disallowing certain peer connections. Example: 192.168.0.0/16 would disallow connections to peers on your local network. The default is to accept all connections.\n      --p2p-disable-reuseport          Disables TCP port reuse for outgoing libp2p connections.\n      --p2p-external-hostname string   The DNS hostname advertised by libp2p. This may be used to advertise an external DNS.\n      --p2p-external-ip string         The IP address advertised by libp2p. This may be used to advertise an external IP.\n      --p2p-relays strings             Comma-separated list of libp2p relay URLs or multiaddrs. (default [https://0.relay.obol.tech])\n      --p2p-tcp-address strings        Comma-separated list of listening TCP addresses (ip and port) for libP2P traffic. Empty default doesn\'t bind to local port therefore only supports outgoing connections.\n      --publish                        Publish lock file to obol-api.\n      --publish-address string         The URL to publish the lock file to. (default "https://api.obol.tech")\n      --shutdown-delay duration        Graceful shutdown delay. (default 1s)\n'})}),"\n",(0,r.jsxs)(n.h2,{id:"the-run-subcommand",children:["The ",(0,r.jsx)(n.code,{children:"run"})," subcommand"]}),"\n",(0,r.jsx)(n.h3,{id:"run-the-charon-middleware",children:"Run the Charon middleware"}),"\n",(0,r.jsxs)(n.p,{children:["This ",(0,r.jsx)(n.code,{children:"run"})," command accepts a ",(0,r.jsx)(n.code,{children:"cluster-lock.json"})," file that was created either via a ",(0,r.jsx)(n.code,{children:"charon create cluster"})," command or ",(0,r.jsx)(n.code,{children:"charon dkg"}),". This lock file outlines the nodes in the cluster and the distributed validators they operate on behalf of."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-markdown",children:'charon run --help\nStarts the long-running Charon middleware process to perform distributed validator duties.\n\nUsage:\n  charon run [flags]\n\nFlags:\n      --beacon-node-endpoints strings      Comma separated list of one or more beacon node endpoint URLs.\n      --builder-api                        Enables the builder api. Will only produce builder blocks. Builder API must also be enabled on the validator client. Beacon node must be connected to a builder-relay to access the builder network.\n      --feature-set string                 Minimum feature set to enable by default: alpha, beta, or stable. Warning: modify at own risk. (default "stable")\n      --feature-set-disable strings        Comma-separated list of features to disable, overriding the default minimum feature set.\n      --feature-set-enable strings         Comma-separated list of features to enable, overriding the default minimum feature set.\n  -h, --help                               Help for run\n      --jaeger-address string              Listening address for jaeger tracing.\n      --jaeger-service string              Service name used for jaeger tracing. (default "charon")\n      --lock-file string                   The path to the cluster lock file defining distributed validator cluster. (default ".charon/cluster-lock.json")\n      --log-color string                   Log color; auto, force, disable. (default "auto")\n      --log-format string                  Log format; console, logfmt or json (default "console")\n      --log-level string                   Log level; debug, info, warn or error (default "info")\n      --loki-addresses strings             Enables sending of logfmt structured logs to these Loki log aggregation server addresses. This is in addition to normal stderr logs.\n      --loki-service string                Service label sent with logs to Loki. (default "charon")\n      --monitoring-address string          Listening address (ip and port) for the monitoring API (prometheus, pprof). (default "127.0.0.1:3620")\n      --no-verify                          Disables cluster definition and lock file verification.\n      --p2p-allowlist string               Comma-separated list of CIDR subnets for allowing only certain peer connections. Example: 192.168.0.0/16 would permit connections to peers on your local network only. The default is to accept all connections.\n      --p2p-denylist string                Comma-separated list of CIDR subnets for disallowing certain peer connections. Example: 192.168.0.0/16 would disallow connections to peers on your local network. The default is to accept all connections.\n      --p2p-disable-reuseport              Disables TCP port reuse for outgoing libp2p connections.\n      --p2p-external-hostname string       The DNS hostname advertised by libp2p. This may be used to advertise an external DNS.\n      --p2p-external-ip string             The IP address advertised by libp2p. This may be used to advertise an external IP.\n      --p2p-relays strings                 Comma-separated list of libp2p relay URLs or multiaddrs. (default [https://0.relay.obol.tech])\n      --p2p-tcp-address strings            Comma-separated list of listening TCP addresses (ip and port) for libP2P traffic. Empty default doesn\'t bind to local port therefore only supports outgoing connections.\n      --private-key-file string            The path to the charon enr private key file. (default ".charon/charon-enr-private-key")\n      --private-key-file-lock              Enables private key locking to prevent multiple instances using the same key.\n      --simnet-beacon-mock                 Enables an internal mock beacon node for running a simnet.\n      --simnet-beacon-mock-fuzz            Configures simnet beaconmock to return fuzzed responses.\n      --simnet-slot-duration duration      Configures slot duration in simnet beacon mock. (default 1s)\n      --simnet-validator-keys-dir string   The directory containing the simnet validator key shares. (default ".charon/validator_keys")\n      --simnet-validator-mock              Enables an internal mock validator client when running a simnet. Requires simnet-beacon-mock.\n      --synthetic-block-proposals          Enables additional synthetic block proposal duties. Used for testing of rare duties.\n      --validator-api-address string       Listening address (ip and port) for validator-facing traffic proxying the beacon-node API. (default "127.0.0.1:3600")\n'})}),"\n",(0,r.jsxs)(n.h2,{id:"the-combine-subcommand",children:["The ",(0,r.jsx)(n.code,{children:"combine"})," subcommand"]}),"\n",(0,r.jsx)(n.h3,{id:"combine-distributed-validator-keyshares-into-a-single-validator-key",children:"Combine distributed validator keyshares into a single Validator key"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"combine"})," command combines many validator keyshares into a single Ethereum validator key."]}),"\n",(0,r.jsxs)(n.p,{children:["To run this command, one needs all the node operator's ",(0,r.jsx)(n.code,{children:".charon"})," directories, which need to be organized in the following way:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"validators-to-be-combined/\n\u251c\u2500\u2500 node0\n\u2502\xa0\xa0 \u251c\u2500\u2500 charon-enr-private-key\n\u2502\xa0\xa0 \u251c\u2500\u2500 cluster-lock.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 deposit-data.json\n\u2502\xa0\xa0 \u2514\u2500\u2500 validator_keys\n\u2502\xa0\xa0     \u251c\u2500\u2500 keystore-0.json\n\u2502\xa0\xa0     \u251c\u2500\u2500 keystore-0.txt\n\u2502\xa0\xa0     \u251c\u2500\u2500 keystore-1.json\n\u2502\xa0\xa0     \u2514\u2500\u2500 keystore-1.txt\n\u251c\u2500\u2500 node1\n\u2502\xa0\xa0 \u251c\u2500\u2500 charon-enr-private-key\n\u2502\xa0\xa0 \u251c\u2500\u2500 cluster-lock.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 deposit-data.json\n\u2502\xa0\xa0 \u2514\u2500\u2500 validator_keys\n\u2502\xa0\xa0     \u251c\u2500\u2500 keystore-0.json\n\u2502\xa0\xa0     \u251c\u2500\u2500 keystore-0.txt\n\u2502\xa0\xa0     \u251c\u2500\u2500 keystore-1.json\n\u2502\xa0\xa0     \u2514\u2500\u2500 keystore-1.txt\n\u251c\u2500\u2500 node2\n\u2502\xa0\xa0 \u251c\u2500\u2500 charon-enr-private-key\n\u2502\xa0\xa0 \u251c\u2500\u2500 cluster-lock.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 deposit-data.json\n\u2502\xa0\xa0 \u2514\u2500\u2500 validator_keys\n\u2502\xa0\xa0     \u251c\u2500\u2500 keystore-0.json\n\u2502\xa0\xa0     \u251c\u2500\u2500 keystore-0.txt\n\u2502\xa0\xa0     \u251c\u2500\u2500 keystore-1.json\n\u2502\xa0\xa0     \u2514\u2500\u2500 keystore-1.txt\n\u2514\u2500\u2500 node3\n    \u251c\u2500\u2500 charon-enr-private-key\n    \u251c\u2500\u2500 cluster-lock.json\n    \u251c\u2500\u2500 deposit-data.json\n    \u2514\u2500\u2500 validator_keys\n        \u251c\u2500\u2500 keystore-0.json\n        \u251c\u2500\u2500 keystore-0.txt\n        \u251c\u2500\u2500 keystore-1.json\n        \u2514\u2500\u2500 keystore-1.txt\n"})}),"\n",(0,r.jsx)(n.p,{children:"That is, each operator '.charon' directory must be placed in a parent directory, and renamed."}),"\n",(0,r.jsx)(n.p,{children:"Note that all validator keys are required for the successful execution of this command."}),"\n",(0,r.jsxs)(n.p,{children:["If for example the lock file defines 2 validators, each ",(0,r.jsx)(n.code,{children:"validator_keys"})," directory must contain exactly 4 files, a JSON and TXT file for each validator."]}),"\n",(0,r.jsx)(n.p,{children:"Those files must be named with an increasing index associated with the validator in the lock file, starting from 0."}),"\n",(0,r.jsxs)(n.p,{children:["The chosen name doesn't matter, as long as it's different from ",(0,r.jsx)(n.code,{children:".charon"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["At the end of the process ",(0,r.jsx)(n.code,{children:"combine"})," will create a new set of directories containing one validator key each, named after its public key:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"validators-to-be-combined/\n\u251c\u2500\u2500 0x822c5310674f4fc4ec595642d0eab73d01c62b588f467da6f98564f292a975a0ac4c3a10f1b3a00ccc166a28093c2dcd # contains private key\n\u2502\xa0\xa0 \u2514\u2500\u2500 validator_keys\n\u2502\xa0\xa0     \u251c\u2500\u2500 keystore-0.json\n\u2502\xa0\xa0     \u2514\u2500\u2500 keystore-0.txt\n\u251c\u2500\u2500 0x8929b4c8af2d2eb222d377cac2aa7be950e71d2b247507d19b5fdec838f0fb045ea8910075f191fd468da4be29690106 # contains private key\n\u2502\xa0\xa0 \u2514\u2500\u2500 validator_keys\n\u2502\xa0\xa0     \u251c\u2500\u2500 keystore-0.json\n\u2502\xa0\xa0     \u2514\u2500\u2500 keystore-0.txt\n\u251c\u2500\u2500 node0\n\u2502\xa0\xa0 \u251c\u2500\u2500 charon-enr-private-key\n\u2502\xa0\xa0 \u251c\u2500\u2500 cluster-lock.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 deposit-data.json\n\u2502\xa0\xa0 \u2514\u2500\u2500 validator_keys\n\u2502\xa0\xa0     \u251c\u2500\u2500 keystore-0.json\n\u2502\xa0\xa0     \u251c\u2500\u2500 keystore-0.txt\n\u2502\xa0\xa0     \u251c\u2500\u2500 keystore-1.json\n\u2502\xa0\xa0     \u2514\u2500\u2500 keystore-1.txt\n\u251c\u2500\u2500 node1\n\u2502\xa0\xa0 \u251c\u2500\u2500 charon-enr-private-key\n\u2502\xa0\xa0 \u251c\u2500\u2500 cluster-lock.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 deposit-data.json\n\u2502\xa0\xa0 \u2514\u2500\u2500 validator_keys\n\u2502\xa0\xa0     \u251c\u2500\u2500 keystore-0.json\n\u2502\xa0\xa0     \u251c\u2500\u2500 keystore-0.txt\n\u2502\xa0\xa0     \u251c\u2500\u2500 keystore-1.json\n\u2502\xa0\xa0     \u2514\u2500\u2500 keystore-1.txt\n\u251c\u2500\u2500 node2\n\u2502\xa0\xa0 \u251c\u2500\u2500 charon-enr-private-key\n\u2502\xa0\xa0 \u251c\u2500\u2500 cluster-lock.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 deposit-data.json\n\u2502\xa0\xa0 \u2514\u2500\u2500 validator_keys\n\u2502\xa0\xa0     \u251c\u2500\u2500 keystore-0.json\n\u2502\xa0\xa0     \u251c\u2500\u2500 keystore-0.txt\n\u2502\xa0\xa0     \u251c\u2500\u2500 keystore-1.json\n\u2502\xa0\xa0     \u2514\u2500\u2500 keystore-1.txt\n\u2514\u2500\u2500 node3\n    \u251c\u2500\u2500 charon-enr-private-key\n    \u251c\u2500\u2500 cluster-lock.json\n    \u251c\u2500\u2500 deposit-data.json\n    \u2514\u2500\u2500 validator_keys\n        \u251c\u2500\u2500 keystore-0.json\n        \u251c\u2500\u2500 keystore-0.txt\n        \u251c\u2500\u2500 keystore-1.json\n        \u2514\u2500\u2500 keystore-1.txt\n"})}),"\n",(0,r.jsxs)(n.p,{children:["By default, the ",(0,r.jsx)(n.code,{children:"combine"})," command will refuse to overwrite any private key that is already present in the destination directory."]}),"\n",(0,r.jsxs)(n.p,{children:["To force the process, use the ",(0,r.jsx)(n.code,{children:"--force"})," flag."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-markdown",children:'charon combine --help\nCombines the private key shares from a threshold of operators in a distributed validator cluster into a set of validator private keys that can be imported into a standard Ethereum validator client.\n\nWarning: running the resulting private keys in a validator alongside the original distributed validator cluster *will* result in slashing.\n\nUsage:\n  charon combine [flags]\n\nFlags:\n      --cluster-dir string   Parent directory containing a number of .charon subdirectories from the required threshold of nodes in the cluster. (default ".charon/cluster")\n      --force                Overwrites private keys with the same name if present.\n  -h, --help                 Help for combine\n      --output-dir string    Directory to output the combined private keys to. (default "./validator_keys")\n'})}),"\n",(0,r.jsx)(n.h2,{id:"host-a-relay",children:"Host a relay"}),"\n",(0,r.jsxs)(n.p,{children:["Relays run a libp2p ",(0,r.jsx)(n.a,{href:"https://docs.libp2p.io/concepts/nat/circuit-relay/",children:"circuit relay"})," server that allows charon clusters to perform peer discovery and for charon clients behind NAT gateways to be communicated with. If you want to self-host a relay for your cluster(s) the following command will start one."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-markdown",children:'charon relay --help\nStarts a libp2p relay that charon nodes can use to bootstrap their p2p cluster\n\nUsage:\n  charon relay [flags]\n\nFlags:\n      --auto-p2pkey                       Automatically create a p2pkey (secp256k1 private key used for p2p authentication and ENR) if none found in data directory. (default true)\n      --data-dir string                   The directory where charon will store all its internal data (default ".charon")\n  -h, --help                              Help for relay\n      --http-address string               Listening address (ip and port) for the relay http server serving runtime ENR. (default "127.0.0.1:3640")\n      --log-color string                  Log color; auto, force, disable. (default "auto")\n      --log-format string                 Log format; console, logfmt or json (default "console")\n      --log-level string                  Log level; debug, info, warn or error (default "info")\n      --loki-addresses strings            Enables sending of logfmt structured logs to these Loki log aggregation server addresses. This is in addition to normal stderr logs.\n      --loki-service string               Service label sent with logs to Loki. (default "charon")\n      --monitoring-address string         Listening address (ip and port) for the prometheus and pprof monitoring http server. (default "127.0.0.1:3620")\n      --p2p-advertise-private-addresses   Enable advertising of libp2p auto-detected private addresses. This doesn\'t affect manually provided p2p-external-ip/hostname.\n      --p2p-allowlist string              Comma-separated list of CIDR subnets for allowing only certain peer connections. Example: 192.168.0.0/16 would permit connections to peers on your local network only. The default is to accept all connections.\n      --p2p-denylist string               Comma-separated list of CIDR subnets for disallowing certain peer connections. Example: 192.168.0.0/16 would disallow connections to peers on your local network. The default is to accept all connections.\n      --p2p-disable-reuseport             Disables TCP port reuse for outgoing libp2p connections.\n      --p2p-external-hostname string      The DNS hostname advertised by libp2p. This may be used to advertise an external DNS.\n      --p2p-external-ip string            The IP address advertised by libp2p. This may be used to advertise an external IP.\n      --p2p-max-connections int           Libp2p maximum number of peers that can connect to this relay. (default 16384)\n      --p2p-max-reservations int          Updates max circuit reservations per peer (each valid for 30min) (default 512)\n      --p2p-relay-loglevel string         Libp2p circuit relay log level. E.g., debug, info, warn, error.\n      --p2p-relays strings                Comma-separated list of libp2p relay URLs or multiaddrs. (default [https://0.relay.obol.tech])\n      --p2p-tcp-address strings           Comma-separated list of listening TCP addresses (ip and port) for libP2P traffic. Empty default doesn\'t bind to local port therefore only supports outgoing connections.\n'})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var r=t(96540);const o={},a=r.createContext(o);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);