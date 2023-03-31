"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3893],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),l=s(n),g=r,f=l["".concat(c,".").concat(g)]||l[g]||d[g]||o;return n?i.createElement(f,a(a({ref:t},p),{},{components:n})):i.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=g;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u[l]="string"==typeof e?e:r,a[1]=u;for(var s=2;s<o;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1024:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>s});var i=n(7462),r=(n(7294),n(4137));const o={description:"Configuration options for the Duo plugin."},a="Configuring Duo",u={unversionedId:"administration/settings/plugins/configuring-duo",id:"administration/settings/plugins/configuring-duo",title:"Configuring Duo",description:"Configuration options for the Duo plugin.",source:"@site/docs/administration/settings/plugins/configuring-duo.mdx",sourceDirName:"administration/settings/plugins",slug:"/administration/settings/plugins/configuring-duo",permalink:"/dispatch/docs/administration/settings/plugins/configuring-duo",draft:!1,editUrl:"https://github.com/netflix/dispatch/edit/master/docs/docs/administration/settings/plugins/configuring-duo.mdx",tags:[],version:"current",frontMatter:{description:"Configuration options for the Duo plugin."},sidebar:"adminSidebar",previous:{title:"Configuring Atlassian Confluence",permalink:"/dispatch/docs/administration/settings/plugins/configuring-atlassian-confluence"},next:{title:"Configuring G Suite Integration",permalink:"/dispatch/docs/administration/settings/plugins/configuring-g-suite"}},c={},s=[{value:"<code>Integration Key</code> [Required. Secret: True]",id:"integration-key-required-secret-true",level:2},{value:"<code>Integration Secret Key</code> [Required. Secret: True]",id:"integration-secret-key-required-secret-true",level:2},{value:"<code>API Hostname</code> [Required]",id:"api-hostname-required",level:2},{value:"Duo Setup",id:"duo-setup",level:2}],p={toc:s},l="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(l,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configuring-duo"},"Configuring Duo"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Dispatch ships with Duo support for additional multi-factor authentication checks within the application, such as when a snooze rule is created. This plugin is not required for core functionality.")),(0,r.kt)("h2",{id:"integration-key-required-secret-true"},(0,r.kt)("inlineCode",{parentName:"h2"},"Integration Key")," ","[","Required. Secret: True","]"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Auth API integration key ('DI...').")),(0,r.kt)("h2",{id:"integration-secret-key-required-secret-true"},(0,r.kt)("inlineCode",{parentName:"h2"},"Integration Secret Key")," ","[","Required. Secret: True","]"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Secret token used in conjunction with integration key.")),(0,r.kt)("h2",{id:"api-hostname-required"},(0,r.kt)("inlineCode",{parentName:"h2"},"API Hostname")," ","[","Required","]"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"API hostname ('api-....duosecurity.com')")),(0,r.kt)("h2",{id:"duo-setup"},"Duo Setup"),(0,r.kt)("p",null,"Log in to the Duo Admin Panel and navigate to ",(0,r.kt)("inlineCode",{parentName:"p"},"Applications"),". Click ",(0,r.kt)("inlineCode",{parentName:"p"},"Protect an Application")," and locate the entry for Auth API in the applications list. Click ",(0,r.kt)("inlineCode",{parentName:"p"},"Protect")," to the far-right to configure the application and get your ",(0,r.kt)("inlineCode",{parentName:"p"},"integration key"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"secret key"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"API hostname"),"."))}d.isMDXComponent=!0}}]);