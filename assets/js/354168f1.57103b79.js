"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[17619],{15680:(e,t,a)=>{a.d(t,{xA:()=>g,yg:()=>h});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},g=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),p=u(a),c=n,h=p["".concat(l,".").concat(c)]||p[c]||d[c]||i;return a?r.createElement(h,o(o({ref:t},g),{},{components:a})):r.createElement(h,o({ref:t},g))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,o[1]=s;for(var u=2;u<i;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},20671:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=a(58168),n=(a(96540),a(15680));const i={sidebar_position:4,description:"Add monitoring credentials to help the Obol Team monitor the health of your cluster"},o="Getting Started Monitoring your Node",s={unversionedId:"advanced/monitoring",id:"version-v0.19.1/advanced/monitoring",title:"Getting Started Monitoring your Node",description:"Add monitoring credentials to help the Obol Team monitor the health of your cluster",source:"@site/versioned_docs/version-v0.19.1/advanced/monitoring.md",sourceDirName:"advanced",slug:"/advanced/monitoring",permalink:"/docs/v0.19.1/advanced/monitoring",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.19.1/advanced/monitoring.md",tags:[],version:"v0.19.1",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"Add monitoring credentials to help the Obol Team monitor the health of your cluster"},sidebar:"tutorialSidebar",previous:{title:"Split existing validator private keys",permalink:"/docs/v0.19.1/advanced/quickstart-split"},next:{title:"Push Metrics to Obol Monitoring",permalink:"/docs/v0.19.1/advanced/obol-monitoring"}},l={},u=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Import Pre-Configured Charon Dashboards",id:"import-pre-configured-charon-dashboards",level:2},{value:"Example Alerting Rules",id:"example-alerting-rules",level:2},{value:"Understanding Alert Rules",id:"understanding-alert-rules",level:2},{value:"Best Practices for Monitoring Charon Nodes &amp; Cluster",id:"best-practices-for-monitoring-charon-nodes--cluster",level:2},{value:"Third-Party Services for Uptime Testing",id:"third-party-services-for-uptime-testing",level:2},{value:"Key metrics to watch to verify node health based on jobs",id:"key-metrics-to-watch-to-verify-node-health-based-on-jobs",level:2}],g={toc:u},p="wrapper";function d(e){let{components:t,...a}=e;return(0,n.yg)(p,(0,r.A)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"getting-started-monitoring-your-node"},"Getting Started Monitoring your Node"),(0,n.yg)("p",null,"Welcome to this comprehensive guide, designed to assist you in effectively monitoring your Charon cluster and nodes, and setting up alerts based on specified parameters."),(0,n.yg)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,n.yg)("p",null,"Ensure the following software are installed:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Docker: Find the installation guide for Ubuntu ",(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("a",{parentName:"strong",href:"https://docs.docker.com/engine/install/ubuntu/"},"here"))),(0,n.yg)("li",{parentName:"ul"},"Prometheus: You can install it using the guide available ",(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("a",{parentName:"strong",href:"https://prometheus.io/docs/prometheus/latest/installation/"},"here"))),(0,n.yg)("li",{parentName:"ul"},"Grafana: Follow this ",(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("a",{parentName:"strong",href:"https://grafana.com/docs/grafana/latest/setup-grafana/installation/"},"link"))," to install Grafana")),(0,n.yg)("h2",{id:"import-pre-configured-charon-dashboards"},"Import Pre-Configured Charon Dashboards"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Navigate to the ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("a",{parentName:"strong",href:"https://github.com/ObolNetwork/monitoring/tree/main/dashboards"},"repository"))," that contains a variety of Grafana dashboards. For this demonstration, we will utilize the Charon Dashboard json.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"In your Grafana interface, create a new dashboard and select the import option.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},'Copy the content of the Charon Dashboard json from the repository and paste it into the import box in Grafana. Click "Load" to proceed.')),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},'Finalize the import by clicking on the "Import" button. At this point, your dashboard should begin displaying metrics. Ensure your Charon client and Prometheus are operational for this to occur.'))),(0,n.yg)("h2",{id:"example-alerting-rules"},"Example Alerting Rules"),(0,n.yg)("p",null,'To create alerts for Node-Exporter, follow these steps based on the sample rules provided on the "Awesome Prometheus alerts" page:'),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Visit the ",(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("a",{parentName:"strong",href:"https://samber.github.io/awesome-prometheus-alerts/rules.html#host-and-hardware"},"Awesome Prometheus alerts"))," page. Here, you will find lists of Prometheus alerting rules categorized by hardware, system, and services."),(0,n.yg)("li",{parentName:"ol"},"Depending on your need, select the category of alerts. For example, if you want to set up alerts for your system's CPU usage, click on the 'CPU' under the 'Host & Hardware' category."),(0,n.yg)("li",{parentName:"ol"},"On the selected page, you'll find specific alert rules like 'High CPU Usage'. Each rule will provide the PromQL expression, alert name, and a brief description of what the alert does. You can copy these rules."),(0,n.yg)("li",{parentName:"ol"},"Paste the copied rules into your Prometheus configuration file under the ",(0,n.yg)("inlineCode",{parentName:"li"},"rules")," section. Make sure you understand each rule before adding it to avoid unnecessary alerts."),(0,n.yg)("li",{parentName:"ol"},"Finally, save and apply the configuration file. Prometheus should now trigger alerts based on these rules.")),(0,n.yg)("p",null,"For alerts specific to Charon/Alpha, refer to the alerting rules available on this ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/ObolNetwork/monitoring/tree/main/alerting-rules"},"ObolNetwork/monitoring"),"."),(0,n.yg)("h2",{id:"understanding-alert-rules"},"Understanding Alert Rules"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("inlineCode",{parentName:"li"},"ClusterBeaconNodeDown"),"This alert is activated when the beacon node in a specified Alpha cluster is offline. The beacon node is crucial for validating transactions and producing new blocks. Its unavailability could disrupt the overall functionality of the cluster."),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("inlineCode",{parentName:"li"},"ClusterBeaconNodeSyncing"),"This alert indicates that the beacon node in a specified Alpha cluster is synchronizing, i.e., catching up with the latest blocks in the cluster."),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("inlineCode",{parentName:"li"},"ClusterNodeDown"),"This alert is activated when a node in a specified Alpha cluster is offline."),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("inlineCode",{parentName:"li"},"ClusterMissedAttestations"),":This alert indicates that there have been missed attestations in a specified Alpha cluster. Missed attestations may suggest that validators are not operating correctly, compromising the security and efficiency of the cluster."),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("inlineCode",{parentName:"li"},"ClusterInUnknownStatus"),": This alert is designed to activate when a node within the cluster is detected to be in an unknown state. The condition is evaluated by checking whether the maximum of the app_monitoring_readyz metric is 0."),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("inlineCode",{parentName:"li"},"ClusterInsufficientPeers"),":This alert is set to activate when the number of peers for a node in the Alpha M1 Cluster #1 is insufficient. The condition is evaluated by checking whether the maximum of the ",(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"strong"},"app_monitoring_readyz"))," equals 4."),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("inlineCode",{parentName:"li"},"ClusterFailureRate"),": This alert is activated when the failure rate of the Alpha M1 Cluster #1 exceeds a certain threshold."),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("inlineCode",{parentName:"li"},"ClusterVCMissingValidators"),": This alert is activated if any validators in the Alpha M1 Cluster #1 are missing."),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("inlineCode",{parentName:"li"},"ClusterHighPctFailedSyncMsgDuty"),': This alert is activated if a high percentage of sync message duties failed in the cluster. The alert is activated if the sum of the increase in failed duties tagged with "sync_message" in the last hour divided by the sum of the increase in total duties tagged with "sync_message" in the last hour is greater than 0.1.'),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("inlineCode",{parentName:"li"},"ClusterNumConnectedRelays"),": This alert is activated if the number of connected relays in the cluster falls to 0."),(0,n.yg)("li",{parentName:"ol"},"PeerPingLatency: 1. This alert is activated if the 90th percentile of the ping latency to the peers in a cluster exceeds 500ms within 2 minutes.")),(0,n.yg)("h2",{id:"best-practices-for-monitoring-charon-nodes--cluster"},"Best Practices for Monitoring Charon Nodes & Cluster"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Establish Baselines"),": Familiarize yourself with the normal operation metrics like CPU, memory, and network usage. This will help you detect anomalies."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Define Key Metrics"),": Set up alerts for essential metrics, encompassing both system-level and Charon-specific ones."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Configure Alerts"),": Based on these metrics, set up actionable alerts."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Monitor Network"),": Regularly assess the connectivity between nodes and the network."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Perform Regular Health Checks"),": Consistently evaluate the status of your nodes and clusters."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Monitor System Logs"),": Keep an eye on logs for error messages or unusual activities."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Assess Resource Usage"),": Ensure your nodes are neither over- nor under-utilized."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Automate Monitoring"),": Use automation to ensure no issues go undetected."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Conduct Drills"),": Regularly simulate failure scenarios to fine-tune your setup."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Update Regularly"),": Keep your nodes and clusters updated with the latest software versions.")),(0,n.yg)("h2",{id:"third-party-services-for-uptime-testing"},"Third-Party Services for Uptime Testing"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://updown.io/"},"updown.io")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://grafana.com/grafana/plugins/grafana-synthetic-monitoring-app/"},"Grafana synthetic Monitoring"))),(0,n.yg)("h2",{id:"key-metrics-to-watch-to-verify-node-health-based-on-jobs"},"Key metrics to watch to verify node health based on jobs"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Node Exporter:")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"CPU Usage"),": High or spiking CPU usage can be a sign of a process demanding more resources than it should."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Memory Usage"),": If a node is consistently running out of memory, it could be due to a memory leak or simply under-provisioning."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Disk I/O"),": Slow disk operations can cause applications to hang or delay responses. High disk I/O can indicate storage performance issues or a sign of high load on the system."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Network Usage"),": High network traffic or packet loss can signal network configuration issues, or that a service is being overwhelmed by requests."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Disk Space"),": Running out of disk space can lead to application errors and data loss."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Uptime"),": The amount of time a system has been up without any restarts. Frequent restarts can indicate instability in the system."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Error Rates"),": The number of errors encountered by your application. This could be 4xx/5xx HTTP errors, exceptions, or any other kind of error your application may log."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Latency"),": The delay before a transfer of data begins following an instruction for its transfer."),(0,n.yg)("p",null,"It is also important to check:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"NTP clock skew"),(0,n.yg)("li",{parentName:"ul"},"Process restarts and failures (eg. through\xa0",(0,n.yg)("inlineCode",{parentName:"li"},"node_systemd"),")"),(0,n.yg)("li",{parentName:"ul"},"alert on high error and panic log counts.")))}d.isMDXComponent=!0}}]);