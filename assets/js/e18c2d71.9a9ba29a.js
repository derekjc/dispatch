"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3356],{5680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>g});var n=a(6540);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(a),u=i,g=d["".concat(s,".").concat(u)]||d[u]||m[u]||l;return a?n.createElement(g,r(r({ref:t},p),{},{components:a})):n.createElement(g,r({ref:t},p))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:i,r[1]=o;for(var c=2;c<l;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4341:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=a(8168),i=(a(6540),a(5680));const l={},r="Templates",o={unversionedId:"administration/settings/templates",id:"administration/settings/templates",title:"Templates",description:"Templates are used by Dispatch to create case or incident specific documentation. These templates are copied and filled out to the best of Dispatch's abilities. After their creation, they are normal documents that are associated to your case or incident and can be used for collaborating and capturing facts and findings.",source:"@site/docs/administration/settings/templates.mdx",sourceDirName:"administration/settings",slug:"/administration/settings/templates",permalink:"/dispatch/docs/administration/settings/templates",draft:!1,editUrl:"https://github.com/netflix/dispatch/edit/master/docs/docs/administration/settings/templates.mdx",tags:[],version:"current",frontMatter:{},sidebar:"adminSidebar",previous:{title:"Server",permalink:"/dispatch/docs/administration/settings/server"},next:{title:"CLI",permalink:"/dispatch/docs/administration/cli"}},s={},c=[{value:"Case Template",id:"case-template",level:3},{value:"Template Variables",id:"template-variables",level:4},{value:"Incident Template",id:"incident-template",level:3},{value:"Template Variables",id:"template-variables-1",level:4},{value:"Executive Template",id:"executive-template",level:3},{value:"Review Template",id:"review-template",level:3},{value:"Tracking Template",id:"tracking-template",level:3},{value:"Template Association",id:"template-association",level:3}],p={toc:c},d="wrapper";function m(e){let{components:t,...l}=e;return(0,i.yg)(d,(0,n.A)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"templates"},"Templates"),(0,i.yg)("p",null,"Templates are used by Dispatch to create case or incident specific documentation. These templates are copied and filled out to the best of Dispatch's abilities. After their creation, they are normal documents that are associated to your case or incident and can be used for collaborating and capturing facts and findings."),(0,i.yg)("p",null,"There are several types of templates that Dispatch supports:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Case"),(0,i.yg)("li",{parentName:"ul"},"Incident"),(0,i.yg)("li",{parentName:"ul"},"Executive"),(0,i.yg)("li",{parentName:"ul"},"Review"),(0,i.yg)("li",{parentName:"ul"},"Tracking")),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("p",null,(0,i.yg)("img",{src:a(2524).A,width:"774",height:"1426"}))),"**Name:** Name of the template.",(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Description:")," Description of the template."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Weblink:")," The weblink to the template."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"External Id:")," External identifier for the document template. Used for API integration (e.g. Google doc file id). Typically, the unique id in the weblink."),(0,i.yg)("p",null,"Enabling evergreen for a template instructs Dispatch to send an email reminder to the template owner informing them that they should review the template to ensure that the template is up to date."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Evergreen Owner:")," The email address representing the owner of this document template."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Evergreen Reminder Interval:")," Number of days that should elapse between reminders sent to the document template owner."),(0,i.yg)("h3",{id:"case-template"},"Case Template"),(0,i.yg)("p",null,"A copy of this template is created for each new case on case creation. It contains the current state of the case and is used by the case owner/ assignee to capture facts and findings."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://docs.google.com/document/d/1g1cl9liXG8US0eBnrZYRaeWa7Ek_hoZJ5PPadas44vI"},"Example Case Document"))),(0,i.yg)("h4",{id:"template-variables"},"Template Variables"),(0,i.yg)("p",null,"The following is a list of available variables that Dispatch will attempt to resolve on document creation. Note: we do not currently re-resolve these."),(0,i.yg)("p",null,"NOTE: All variables must be enclosed in a ",(0,i.yg)("inlineCode",{parentName:"p"},"{{}}")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"case_name")," - The case's name"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"case_title")," - The cases's title"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"case_description")," - The case's description"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"case_resolution")," - The case's resolution"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"case_owner")," - The case's owner"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"case_type")," - The case's type"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"case_severity")," - The case's severity"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"case_priority")," - The case's priority"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"case_status")," - The case's status"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"case_storage_weblink")," - Link to the storage resource")),(0,i.yg)("h3",{id:"incident-template"},"Incident Template"),(0,i.yg)("p",null,"A copy of this template is created for each new incident on incident creation. It contains the current state of the incident and is used by incident participants to share knowledge about the incident."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://docs.google.com/document/d/1fv--CrGpWJJ4nyPR0N0hq4JchHJPuqsXN4azE9CGQiE"},"Example Incident Document"))),(0,i.yg)("h4",{id:"template-variables-1"},"Template Variables"),(0,i.yg)("p",null,"The following is a list of available variables that Dispatch will attempt to resolve on document creation. Note: we do not currently re-resolve these."),(0,i.yg)("p",null,"NOTE: All variables must be enclosed in a ",(0,i.yg)("inlineCode",{parentName:"p"},"{{}}")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"name")," - The name of the incident"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"title")," - The incident's title"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"description")," - The incident's description"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"resolution")," - The incident's resolution"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"commander_fullname")," - The current commander's name"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"type")," - The incident's type"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"priority")," - The incident's priority"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"status")," - The incident's status"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"conversation_weblink")," - Link to the conversation resource (if any)"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"conference_weblink")," - Link to the conference resource (if any)"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"storage_weblink")," - Link to the storage resource (if any)"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"document_weblink")," - Link to the incident document (if any)"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"ticket_weblink")," - Link to the incident ticket (if any)")),(0,i.yg)("h3",{id:"executive-template"},"Executive Template"),(0,i.yg)("p",null,"Often during an incident an executive report needs to be drafted that provides a high-level overview of the incident and the current actions that are being carried out. A copy of this template will be created, filled, and stored in the incident storage every time a new executive report is drafted."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://docs.google.com/document/d/1dab6k14p5ageo5B_d1YlB_zS9hMGHDMXy9RUbIZous4"},"Example Executive Report"))),(0,i.yg)("h3",{id:"review-template"},"Review Template"),(0,i.yg)("p",null,"A copy of this template is automatically created when an incident is marked as stable. It is used by the incident commander and participants for reconciling any incident learnings, discussions, or post-incident tasks."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://docs.google.com/document/d/1MkCTyheZRtKzMxOBhLgh3PrvarERA9Bwo0joM7D9tmg"},"Example Incident Review Document"))),(0,i.yg)("h3",{id:"tracking-template"},"Tracking Template"),(0,i.yg)("p",null,"Some incidents require the tracking of multiple assets, this template is a simple spreadsheet that allows incident participants to collaborate on tabular data."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://docs.google.com/spreadsheets/d/1Odk4KlL7uMF_yd7OvTOCaPWmtTA_WzFBIA4lMeU5cGY"},"Example Incident Tracking Sheet"))),(0,i.yg)("h3",{id:"template-association"},"Template Association"),(0,i.yg)("p",null,"Case and incident templates can be associated to their corresponding types. This allows our templates to closely match a given case or incident type and provide additional context and direction for those given types."),(0,i.yg)("p",null,"Additionally, templates can be associated with multiple case or incident types, if for example, you only want to use one template."),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("p",null,(0,i.yg)("img",{src:a(1308).A,width:"772",height:"1556"}))),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("p",null,(0,i.yg)("img",{src:a(9314).A,width:"774",height:"1652"}))))}m.isMDXComponent=!0},1308:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/admin-ui-associate-case-template-b973e84a4205925802e8f0fa5270a451.png"},9314:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/admin-ui-associate-incident-template-ec4ee33bf56ae3e7d8b697409cf1f440.png"},2524:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/admin-ui-create-edit-template-16a417c35c4820f30c25f9a7bc88f72f.png"}}]);