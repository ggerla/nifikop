"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[3451],{35318:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(27378);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=i,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return t?a.createElement(f,r(r({ref:n},p),{},{components:t})):a.createElement(f,r({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},55975:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var a=t(25773),i=t(30808),o=(t(27378),t(35318)),r=["components"],s={id:"1_scaling_mechanism",title:"Scaling mechanism",sidebar_label:"Scaling mechanism"},l=void 0,c={unversionedId:"3_manage_nifi/1_manage_clusters/2_cluster_scaling/1_scaling_mechanism",id:"version-v1.0.0/3_manage_nifi/1_manage_clusters/2_cluster_scaling/1_scaling_mechanism",title:"Scaling mechanism",description:"This tasks shows you how to perform a gracefull cluster scale up and scale down.",source:"@site/versioned_docs/version-v1.0.0/3_manage_nifi/1_manage_clusters/2_cluster_scaling/1_scaling_mechanism.md",sourceDirName:"3_manage_nifi/1_manage_clusters/2_cluster_scaling",slug:"/3_manage_nifi/1_manage_clusters/2_cluster_scaling/1_scaling_mechanism",permalink:"/nifikop/docs/3_manage_nifi/1_manage_clusters/2_cluster_scaling/1_scaling_mechanism",draft:!1,editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v1.0.0/3_manage_nifi/1_manage_clusters/2_cluster_scaling/1_scaling_mechanism.md",tags:[],version:"v1.0.0",lastUpdatedBy:"Alexandre Guitton",lastUpdatedAt:1668875267,formattedLastUpdatedAt:"Nov 19, 2022",frontMatter:{id:"1_scaling_mechanism",title:"Scaling mechanism",sidebar_label:"Scaling mechanism"},sidebar:"docs",previous:{title:"Custom User Authorizers",permalink:"/nifikop/docs/3_manage_nifi/1_manage_clusters/1_deploy_cluster/6_users_authorization/1_custom_user_authorizer"},next:{title:"Design Principles",permalink:"/nifikop/docs/3_manage_nifi/1_manage_clusters/2_cluster_scaling/2_auto_scaling/0_design_principles"}},p={},u=[{value:"Before you begin",id:"before-you-begin",level:2},{value:"About this task",id:"about-this-task",level:2},{value:"Scale up : Add a new node",id:"scale-up--add-a-new-node",level:2},{value:"Scaledown : Gracefully remove node",id:"scaledown--gracefully-remove-node",level:2}],d={toc:u};function m(e){var n=e.components,s=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},d,s,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This tasks shows you how to perform a gracefull cluster scale up and scale down."),(0,o.kt)("h2",{id:"before-you-begin"},"Before you begin"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Setup NiFiKop by following the instructions in the ",(0,o.kt)("a",{parentName:"li",href:"../../../2_deploy_nifikop/1_quick_start"},"Installation guide"),"."),(0,o.kt)("li",{parentName:"ul"},"Deploy the ",(0,o.kt)("a",{parentName:"li",href:"../1_deploy_cluster/1_quick_start"},"Simple NiFi")," sample cluster."),(0,o.kt)("li",{parentName:"ul"},"Review the ",(0,o.kt)("a",{parentName:"li",href:"../../../5_references/1_nifi_cluster/4_node"},"Node")," references doc.")),(0,o.kt)("h2",{id:"about-this-task"},"About this task"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"../1_deploy_cluster/1_quick_start"},"Simple NiFi")," example consists of a three nodes NiFi cluster.\nA node decommission must follow a strict procedure, described in the ",(0,o.kt)("a",{parentName:"p",href:"https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#decommission-nodes"},"NiFi documentation")," :"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Disconnect the node"),(0,o.kt)("li",{parentName:"ol"},"Once disconnect completes, offload the node."),(0,o.kt)("li",{parentName:"ol"},"Once offload completes, delete the node."),(0,o.kt)("li",{parentName:"ol"},"Once the delete request has finished, stop/remove the NiFi service on the host.")),(0,o.kt)("p",null,"For the moment, we have implemented it as follows in the operator :"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Disconnect the node"),(0,o.kt)("li",{parentName:"ol"},"Once disconnect completes, offload the node."),(0,o.kt)("li",{parentName:"ol"},"Once offload completes, delete the pod."),(0,o.kt)("li",{parentName:"ol"},"Once the pod deletion completes, delete the node."),(0,o.kt)("li",{parentName:"ol"},"Once the delete request has finished, remove the node from the NifiCluster status.")),(0,o.kt)("p",null,"In addition, we have a regular check that ensure that all nodes have been removed."),(0,o.kt)("p",null,"In this task, you will first perform a scale up, in adding an new node. Then, you will remove another node that the one created, and observe the decommission's steps."),(0,o.kt)("h2",{id:"scale-up--add-a-new-node"},"Scale up : Add a new node"),(0,o.kt)("p",null,"For this task, we will simply add a node with the same configuration than the other ones, if you want to know more about how to add a node with an other configuration let's have a look to the ",(0,o.kt)("a",{parentName:"p",href:"../1_deploy_cluster/2_nodes_configuration"},"Node configuration")," documentation page."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Add and run a dataflow as the example :")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Scaling dataflow",src:t(90192).Z,width:"832",height:"660"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Add a new node to the list of ",(0,o.kt)("inlineCode",{parentName:"li"},"NifiCluster.Spec.Nodes")," field, by following the ",(0,o.kt)("a",{parentName:"li",href:"../../../5_references/1_nifi_cluster/4_node"},"Node object definition")," documentation:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: nifi.konpyutaika.com/v1\nkind: NifiCluster\nmetadata:\n  name: simplenifi\nspec:\n  service:\n    headlessEnabled: true\n  zkAddress: "zookeepercluster-client.zookeeper:2181"\n  zkPath: "/simplenifi"\n  clusterImage: "apache/nifi:1.12.1"\n  oneNifiNodePerNode: false\n  nodeConfigGroups:\n    default_group:\n      isNode: true\n      storageConfigs:\n        - mountPath: "/opt/nifi/nifi-current/logs"\n          name: logs\n          pvcSpec:\n            accessModes:\n              - ReadWriteOnce\n            storageClassName: "standard"\n            resources:\n              requests:\n                storage: 10Gi\n      serviceAccountName: "default"\n      resourcesRequirements:\n        limits:\n          cpu: "2"\n          memory: 3Gi\n        requests:\n          cpu: "1"\n          memory: 1Gi\n  nodes:\n    - id: 0\n      nodeConfigGroup: "default_group"\n    - id: 1\n      nodeConfigGroup: "default_group"\n    - id: 2\n      nodeConfigGroup: "default_group"\n# >>>> START: The new node\n    - id: 25\n      nodeConfigGroup: "default_group"\n# <<<< END\n  propagateLabels: true\n  nifiClusterTaskSpec:\n    retryDurationMinutes: 10\n  listenersConfig:\n    internalListeners:\n      - type: "http"\n        name: "http"\n        containerPort: 8080\n      - type: "cluster"\n        name: "cluster"\n        containerPort: 6007\n      - type: "s2s"\n        name: "s2s"\n        containerPort: 10000\n')),(0,o.kt)("admonition",{type:"important"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Note :")," The ",(0,o.kt)("inlineCode",{parentName:"p"},"Node.Id")," field must be unique in the ",(0,o.kt)("inlineCode",{parentName:"p"},"NifiCluster.Spec.Nodes")," list.")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Apply the new ",(0,o.kt)("inlineCode",{parentName:"li"},"NifiCluster")," configuration :")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl -n nifi apply -f config/samples/simplenificluster.yaml\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"You should now have the following resources into kubernetes :")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"kubectl get pods,configmap,pvc -l nodeId=25\nNAME                          READY   STATUS    RESTARTS   AGE\npod/simplenifi-25-nodem5jh4   1/1     Running   0          11m\n\nNAME                             DATA   AGE\nconfigmap/simplenifi-config-25   7      11m\n\nNAME                                               STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS   AGE\npersistentvolumeclaim/simplenifi-25-storagehwn24   Bound    pvc-7da86076-728e-11ea-846d-42010a8400f2   10Gi       RWO            standard       11m\n")),(0,o.kt)("p",null,"And if you go on the NiFi UI, in the cluster administration page :"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Scale up, cluster list",src:t(17530).Z,width:"1880",height:"357"})),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"You now have data on the new node :")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Scale up, cluster distribution",src:t(70486).Z,width:"766",height:"568"})),(0,o.kt)("h2",{id:"scaledown--gracefully-remove-node"},"Scaledown : Gracefully remove node"),(0,o.kt)("p",null,"For this task, we will simply remove a node and look at that the decommissions steps."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Remove the node from the list of ",(0,o.kt)("inlineCode",{parentName:"li"},"NifiCluster.Spec.Nodes")," field :")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: nifi.konpyutaika.com/v1\nkind: NifiCluster\nmetadata:\n  name: simplenifi\nspec:\n  headlessServiceEnabled: true\n  zkAddresse: "zookeepercluster-client.zookeeper:2181"\n  zkPath: "/simplenifi"\n  clusterImage: "apache/nifi:1.11.3"\n  oneNifiNodePerNode: false\n  nodeConfigGroups:\n    default_group:\n      isNode: true\n      storageConfigs:\n        - mountPath: "/opt/nifi/nifi-current/logs"\n          name: logs\n          pvcSpec:\n            accessModes:\n              - ReadWriteOnce\n            storageClassName: "standard"\n            resources:\n              requests:\n                storage: 10Gi\n      serviceAccountName: "default"\n      resourcesRequirements:\n        limits:\n          cpu: "2"\n          memory: 3Gi\n        requests:\n          cpu: "1"\n          memory: 1Gi\n  nodes:\n    - id: 0\n      nodeConfigGroup: "default_group"\n    - id: 1\n      nodeConfigGroup: "default_group"\n# >>>> START: node removed\n#    - id: 2\n#      nodeConfigGroup: "default_group"\n# <<<< END\n    - id: 25\n      nodeConfigGroup: "default_group"\n  propagateLabels: true\n  nifiClusterTaskSpec:\n    retryDurationMinutes: 10\n  listenersConfig:\n    internalListeners:\n      - type: "http"\n        name: "http"\n        containerPort: 8080\n      - type: "cluster"\n        name: "cluster"\n        containerPort: 6007\n      - type: "s2s"\n        name: "s2s"\n        containerPort: 10000\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Apply the new ",(0,o.kt)("inlineCode",{parentName:"li"},"NifiCluster")," configuration :")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl -n nifi apply -f config/samples/simplenificluster.yaml\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"You can follow the node's action step status in the ",(0,o.kt)("inlineCode",{parentName:"li"},"NifiCluster.Status")," description :")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"kubectl describe nificluster simplenifi\n\n...\nStatus:\n  Nodes State:\n    ...\n    2:\n      Configuration State:  ConfigInSync\n      Graceful Action State:\n        Action State:   GracefulDownscaleRequired\n        Error Message:\n    ...\n...\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The list of decommisions step and their corresponding value for the ",(0,o.kt)("inlineCode",{parentName:"p"},"Nifi Cluster.Status.Node State.Graceful ActionState.ActionStep")," field is described into the ",(0,o.kt)("a",{parentName:"p",href:"../../../5_references/1_nifi_cluster/5_node_state#actionstep"},"Node State page"))),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Once the scaledown successfully performed, you should have the data offloaded on the other nodes, and the node state removed from the ",(0,o.kt)("inlineCode",{parentName:"li"},"NifiCluster.Status.NodesState")," list :")),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Keep in mind that the ",(0,o.kt)("a",{parentName:"p",href:"/nifikop/docs/5_references/1_nifi_cluster/#nificlustertaskspec"},(0,o.kt)("inlineCode",{parentName:"a"},"NifiCluster.Spec.nifiClusterTaskSpec.retryDurationMinutes"))," should be long enough to perform the whole procedure, or you will have some rollback and retry loop.")))}m.isMDXComponent=!0},17530:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/scaleup_cluster_list-35ad91fb8c072c4235a969eb9acfcdae.png"},70486:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/scaleup_distribution-e8a1d9e0e4ce70f4fe16965ebeee7a32.png"},90192:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/scaling_dataflow-5966160565dedb1d2c691ae255bae15c.png"}}]);