(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{102:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=b(a),m=n,d=p["".concat(i,".").concat(m)]||p[m]||u[m]||c;return a?r.a.createElement(d,l(l({ref:t},s),{},{components:a})):r.a.createElement(d,l({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,i=new Array(c);i[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<c;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},103:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},111:function(e,t,a){"use strict";var n=a(0),r=a(112);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},112:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},119:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(111),i=a(103),l=a(55),o=a.n(l),s=37,b=39;t.a=function(e){var t=e.lazy,a=e.block,l=e.defaultValue,p=e.values,u=e.groupId,m=e.className,d=Object(c.a)(),f=d.tabGroupChoices,h=d.setTabGroupChoices,O=Object(n.useState)(l),j=O[0],v=O[1],g=n.Children.toArray(e.children);if(null!=u){var y=f[u];null!=y&&y!==j&&p.some((function(e){return e.value===y}))&&v(y)}var N=function(e){v(e),null!=u&&h(u,e)},w=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":a},m)},p.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(i.a)("tabs__item",o.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case b:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return N(t)},onClick:function(){N(t)}},a)}))),t?Object(n.cloneElement)(g.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}},120:function(e,t,a){"use strict";var n=a(3),r=a(0),c=a.n(r);t.a=function(e){var t=e.children,a=e.hidden,r=e.className;return c.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:a,className:r}),t)}},78:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(7),c=(a(0),a(102)),i=a(119),l=a(120),o={title:"Clef External Signer",id:"bee-clef"},s={unversionedId:"installation/bee-clef",id:"installation/bee-clef",isDocsHomePage:!1,title:"Clef External Signer",description:"Bee makes use of Go Ethereum's external signer, Clef.",source:"@site/docs/installation/bee-clef.md",slug:"/installation/bee-clef",permalink:"/docs/installation/bee-clef",editUrl:"https://github.com/ethersphere/docs.github.io/blob/master/docs/installation/bee-clef.md",version:"current",sidebar:"Balls",previous:{title:"Connectivity",permalink:"/docs/installation/connectivity"},next:{title:"Backups",permalink:"/docs/maintenance/backups"}},b=[{value:"Packages",id:"packages",children:[{value:"Configuring Bee-clef",id:"configuring-bee-clef",children:[]},{value:"Interact With Clef",id:"interact-with-clef",children:[]}]},{value:"Data Locations",id:"data-locations",children:[]},{value:"Manual Installation",id:"manual-installation",children:[]}],p={toc:b};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Bee makes use of Go Ethereum's external signer, ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://geth.ethereum.org/docs/clef/tutorial"}),"Clef"),"."),Object(c.b)("p",null,"Because Bee must sign a lot of transactions automatically and quickly, a ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ethersphere/bee-clef"}),"Bee specific version of Clef, Bee-clef")," has been packaged which includes all the relevant configuration and implements the specific configuration needed to make Clef work with Bee."),Object(c.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"Clef will create a new Ethereum key pair for you during installation. Make sure you keep a ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/maintenance/backups"}),"backup")," of your key pair somewhere safe and secure!"))),Object(c.b)("h2",{id:"packages"},"Packages"),Object(c.b)("p",null,"Bee clef can be installed automatically using your system's package manager."),Object(c.b)(i.a,{defaultValue:"debian",values:[{label:"Ubuntu / Debian / Raspbian",value:"debian"},{label:"CentOS",value:"centos"},{label:"MacOS",value:"macos"}],mdxType:"Tabs"},Object(c.b)(l.a,{value:"debian",mdxType:"TabItem"},Object(c.b)("h4",{id:"amd64"},"AMD64"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"wget https://github.com/ethersphere/bee-clef/releases/download/v0.4.9/bee-clef_0.4.9_amd64.deb\nsudo dpkg -i bee-clef_0.4.9_amd64.deb\n")),Object(c.b)("h4",{id:"arm-raspberry-pi"},"ARM (Raspberry Pi)"),Object(c.b)("h5",{id:"armv7"},"ARMv7"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"wget https://github.com/ethersphere/bee-clef/releases/download/v0.4.9/bee-clef_0.4.9_armv7.deb\nsudo dpkg -i bee-clef_0.4.9_armv7.deb\n")),Object(c.b)("h5",{id:"arm64"},"ARM64"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"wget https://github.com/ethersphere/bee-clef/releases/download/v0.4.9/bee-clef_0.4.9_arm64.deb\nsudo dpkg -i bee-clef_0.4.9_arm64.deb\n"))),Object(c.b)(l.a,{value:"centos",mdxType:"TabItem"},Object(c.b)("h4",{id:"amd64-1"},"AMD64"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"wget https://github.com/ethersphere/bee-clef/releases/download/v0.4.9/bee-clef_0.4.9_amd64.rpm\nsudo rpm -i bee-clef_0.4.9_amd64.rpm\n")),Object(c.b)("h4",{id:"arm-raspberry-pi-1"},"ARM (Raspberry Pi)"),Object(c.b)("h5",{id:"armv7-1"},"ARMv7"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"wget https://github.com/ethersphere/bee-clef/releases/download/v0.4.9/bee-clef_0.4.9_armv7.rpm\nsudo rpm -i bee-clef_0.4.9_armv7.rpm\n")),Object(c.b)("h5",{id:"arm64-1"},"ARM64"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"wget https://github.com/ethersphere/bee-clef/releases/download/v0.4.9/bee-clef_0.4.9_arm64.rpm\nsudo rpm -i bee-clef_0.4.9_arm64.rpm\n"))),Object(c.b)(l.a,{value:"macos",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"brew tap ethersphere/tap\nbrew install swarm-clef\n")),Object(c.b)("p",null,"To run Bee Clef as a service now and on startup, run:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"brew services start swarm-clef\n")))),Object(c.b)("h3",{id:"configuring-bee-clef"},"Configuring Bee-clef"),Object(c.b)("p",null,"Configuration files are stored in ",Object(c.b)("inlineCode",{parentName:"p"},"/etc/bee-clef/")),Object(c.b)("p",null,"Under a normal/default package install, there wont be any configuration changes necessary to start using bee-clef."),Object(c.b)("h3",{id:"interact-with-clef"},"Interact With Clef"),Object(c.b)("p",null,"Once Clef has been installed, it will begin running as a service."),Object(c.b)("p",null,"To check Clef is running ok, we may use ",Object(c.b)("inlineCode",{parentName:"p"},"systemctl")," (on Linux) or ",Object(c.b)("inlineCode",{parentName:"p"},"launchctl")," (on MacOS) to query the status of the ",Object(c.b)("inlineCode",{parentName:"p"},"bee-clef")," service."),Object(c.b)(i.a,{defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"MacOS",value:"macos"}],mdxType:"Tabs"},Object(c.b)(l.a,{value:"linux",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"systemctl status bee-clef\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"\u25cf bee-clef.service - Bee Clef\n     Loaded: loaded (/lib/systemd/system/bee-clef.service; enabled; vendor preset: enabled)\n     Active: active (running) since Fri 2020-11-20 23:45:16 GMT; 1min 29s ago\n")),Object(c.b)("p",null,"And if you want to follow it's logs, you can use:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"journalctl -f -u bee-clef.service\n"))),Object(c.b)(l.a,{value:"macos",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"launchctl list | grep swarm-clef\n")))),Object(c.b)("p",null,"When Bee-clef first starts, you should see something very similar to the following:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-log"}),'Feb 21 19:52:43 comp-name systemd[1]: Started Bee Clef.\nFeb 21 19:52:43 comp-name bee-clef-service[494678]: WARNING!\nFeb 21 19:52:43 comp-name bee-clef-service[494678]: Clef is an account management tool. It may, like any software, contain bugs.\nFeb 21 19:52:43 comp-name bee-clef-service[494678]: Please take care to\nFeb 21 19:52:43 comp-name bee-clef-service[494678]: - backup your keystore files,\nFeb 21 19:52:43 comp-name bee-clef-service[494678]: - verify that the keystore(s) can be opened with your password.\nFeb 21 19:52:43 comp-name bee-clef-service[494678]: Clef is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\nFeb 21 19:52:43 comp-name bee-clef-service[494678]: without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR\nFeb 21 19:52:43 comp-name bee-clef-service[494678]: PURPOSE. See the GNU General Public License for more details.\nFeb 21 19:52:43 comp-name bee-clef-service[494678]: INFO [02-21|19:52:43.862] Using stdin/stdout as UI-channel\nFeb 21 19:52:44 comp-name bee-clef-service[494678]: INFO [02-21|19:52:44.036] Loaded 4byte database                    embeds=146841 locals=3 local=/etc/bee-clef/4byte.json\nFeb 21 19:52:44 comp-name bee-clef-service[494678]: {"jsonrpc":"2.0","id":1,"method":"ui_onInputRequired","params":[{"title":"Master Password","prompt":"Please enter the password to decrypt the master seed","isPassword":true}]}\nFeb 21 19:54:25 comp-name bee-clef-service[494678]: INFO [02-21|19:54:25.048] Rule engine configured                   file=/etc/bee-clef/rules.js\nFeb 21 19:54:25 comp-name bee-clef-service[494678]: INFO [02-21|19:54:25.048] Starting signer                          chainid=5 keystore=/var/lib/bee-clef/keystore light-kdf=false advanced=false\nFeb 21 19:54:25 comp-name bee-clef-service[494678]: INFO [02-21|19:54:25.049] IPC endpoint opened                      url=/var/lib/bee-clef/clef.ipc\nFeb 21 19:54:25 comp-name bee-clef-service[494678]: {"jsonrpc":"2.0","method":"ui_onSignerStartup","params":[{"info":{"extapi_http":"n/a","extapi_ipc":"/var/lib/bee-clef/clef.ipc","extapi_version":"6.1.0","intapi_version":"7.0.1"}}]}\n')),Object(c.b)("div",{className:"admonition admonition-info alert alert--info"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"This line can be safely ignored, there is no action required: ",Object(c.b)("inlineCode",{parentName:"p"},'{"jsonrpc":"2.0","id":1,"method":"ui_onInputRequired","params":[{"title":"Master Password","prompt":"Please enter the password to decrypt the master seed","isPassword":true}]}')))),Object(c.b)("p",null,"As soon as ",Object(c.b)("inlineCode",{parentName:"p"},"bee")," starts interacting with ",Object(c.b)("inlineCode",{parentName:"p"},"bee-clef")," you should start to see log messages populate, for a regularly active and connected node they will appear every few seconds:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"Feb 24 22:29:15 comp-name bee-clef-service[1118]: INFO [02-24|22:29:15.118] Op approved\nFeb 24 22:30:17 comp-name bee-clef-service[1118]: INFO [02-24|22:30:17.371] Op approved\nFeb 24 22:30:19 comp-name bee-clef-service[1118]: INFO [02-24|22:30:19.344] Op approved\n...\n")),Object(c.b)("h2",{id:"data-locations"},"Data Locations"),Object(c.b)("p",null,"Key material and other data is stored in ",Object(c.b)("inlineCode",{parentName:"p"},"/var/lib/bee-clef/")),Object(c.b)("div",{className:"admonition admonition-info alert alert--info"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"Bee can communicate with Bee-clef in a variety of ways. The default way, if installed via the packages, will use an Inter-process communication (IPC) file. This is a special file that Bee-clef creates on startup that Bee will use to send requests back-and-forth. When the Bee-clef service is running you'll notice that a ",Object(c.b)("inlineCode",{parentName:"p"},"/var/lib/bee-clef/clef.ipc")," file is created."))),Object(c.b)("h2",{id:"manual-installation"},"Manual Installation"),Object(c.b)("p",null,"To install Clef manually, first retrieve the relevant Clef binary from Ethereum's ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://geth.ethereum.org/downloads/"}),"Geth & Tools")," download page, or build directly from the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ethereum/go-ethereum/wiki/Building-Ethereum"}),"source"),"."),Object(c.b)("p",null,"Because Bee needs Clef to sign many transactions automatically, we must run Clef as a service with relaxed permissions and rules set. To ensure Clef only signs transactions from Bee, we must protect the ",Object(c.b)("inlineCode",{parentName:"p"},"clef.ipc")," file by ",Object(c.b)("strong",{parentName:"p"},"creating a Bee user and setting permissions so that it is only possible for this user to make use of the ipc socket.")),Object(c.b)("p",null,"Additionally, Clef requires transaction signatures for the Bee's chequebook interaction."),Object(c.b)("p",null,"A shell script automating the post-initialisation permission changing and including the Clef config, ",Object(c.b)("inlineCode",{parentName:"p"},"clef-service"),", as well as the ",Object(c.b)("inlineCode",{parentName:"p"},"4byte.json")," transaction signature file and ",Object(c.b)("inlineCode",{parentName:"p"},"rules.js")," file can all be found in the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ethersphere/bee-clef/tree/master/packaging"}),"Bee-clef repository"),"."),Object(c.b)("p",null,"Finally, once Clef is running, simply ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/installation/configuration"}),"configure your Bee node")," to enable Clef using ",Object(c.b)("inlineCode",{parentName:"p"},"--clef-signer-enable")," and point Bee to the correct ipc socket using ",Object(c.b)("inlineCode",{parentName:"p"},"--clef-signer-endpoint"),"."))}u.isMDXComponent=!0}}]);