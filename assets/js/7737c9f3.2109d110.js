"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9174],{5680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>m});var r=n(6540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(n),f=i,m=p["".concat(c,".").concat(f)]||p[f]||l[f]||o;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var d=2;d<o;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2148:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=n(8168),i=(n(6540),n(5680));const o={title:"Introduction",sidebar_position:0},a="User Guide",s={unversionedId:"user-guide/index",id:"user-guide/index",title:"Introduction",description:"There are two main personas within Dispatch: an incident commander and an incident participant.",source:"@site/docs/user-guide/index.mdx",sourceDirName:"user-guide",slug:"/user-guide/",permalink:"/dispatch/docs/user-guide/",draft:!1,editUrl:"https://github.com/netflix/dispatch/edit/master/docs/docs/user-guide/index.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Introduction",sidebar_position:0},sidebar:"userGuideSidebar",next:{title:"Dashboards",permalink:"/dispatch/docs/user-guide/dashboard/"}},c={},d=[],u={toc:d},p="wrapper";function l(e){let{components:t,...n}=e;return(0,i.yg)(p,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"user-guide"},"User Guide"),(0,i.yg)("p",null,"There are two ",(0,i.yg)("em",{parentName:"p"},"main")," personas within Dispatch: an incident commander and an incident participant."),(0,i.yg)("p",null,"The incident commander is responsible for driving an incident to resolution. They act as a tie-breaking vote on contentious decisions and are responsible for understanding the ",(0,i.yg)("em",{parentName:"p"},"entire")," incident context. Depending on the team and scale of the incident, they are also responsible for delegating tasks and asking questions of other incident participants."),(0,i.yg)("p",null,"Incident participants are subject matter experts (SMEs) brought into the incident to help resolve tasks or answer the incident commander's questions."),(0,i.yg)("p",null,"Next, you will find more information about how each of these personas interacts with Dispatch."))}l.isMDXComponent=!0}}]);