"use strict";(self.webpackChunkportfolio2=self.webpackChunkportfolio2||[]).push([[450],{1903:function(e,t,a){a.r(t);var n=a(7294),l=a(4472),r=a(1700);t.default=function(e){var t=e.data.topics,a=t.group,c=t.totalCount;return n.createElement(l.Z,null,n.createElement(r.Z,{title:"All projects",totalCount:c,topics:a}))}},1700:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(5444),l=a(7294),r=a(7668),c=a(5900),s=a.n(c);function m(e){switch(e){case"devops":return"bg-green-300 text-green-800";case"web":return"bg-blue-300 text-blue-800";case"data":return"bg-red-300 text-red-800";case"programming":return"bg-yellow-300 text-yellow-800";default:return"bg-gray-300 text-gray-800"}}var i=function(e){var t=e.category,a=e.children;return l.createElement("span",{className:s()("inline-flex items-center px-1.5 py-1 text-xs rounded-md font-medium",m(t))},a)},o=function(e){var t=e.topics;return console.log(t),l.createElement("div",{className:"p-20 flex justify-center"},l.createElement("div",{className:"timeline-module--timeline--Qmghl"},t.sort((function(e,t){return t.fieldValue-e.fieldValue})).map((function(e){var t=e.fieldValue,a=e.nodes;return l.createElement(l.Fragment,{key:t},a.map((function(e){var a=e.html,n=e.frontmatter;return l.createElement("div",{key:n.title,className:"timeline-module--timeline-wrapper--2qqQV"},l.createElement("div",{className:"timeline-module--timeline-year--DiypK"},t),null===n.subtopics?l.createElement("div",{className:"timeline-module--timeline-content--Ws1su"},l.createElement("div",{className:"flex items-center justify-between"},l.createElement("h2",{className:"text-xl font-bold"},n.title),l.createElement("div",{className:"space-x-1 inline-flex"},n.categories.map((function(e){return l.createElement(i,{key:e,category:e},e)})))),l.createElement("p",{className:"text-justify font-normal",dangerouslySetInnerHTML:{__html:a}}),l.createElement("div",{className:"space-x-1 text-3xl"},n.icons.map((function(e){var t=e[0],a=e[1];return l.createElement("span",{key:t,title:t},l.createElement("i",{className:a}))})))):l.createElement("div",{className:"timeline-module--timeline-content-group--3RSDg"},l.createElement("div",{className:"space-y-6"},l.createElement("div",{className:"flex items-center justify-between"},l.createElement("h2",{className:"text-xl font-bold"},n.title),l.createElement("div",{className:"space-x-1 inline-flex"},n.categories.map((function(e){return l.createElement(i,{key:e,category:e},e)})))),l.createElement("p",{className:"text-justify font-normal",dangerouslySetInnerHTML:{__html:a}})),n.subtopics.map((function(e){var t=e.childMarkdownRemark,a=t.html,n=t.frontmatter,r=n.title,c=n.icons;return l.createElement("div",{key:r,className:"space-y-6"},l.createElement("h2",{className:"text-xl font-bold"},r),l.createElement("p",{className:"text-justify font-normal",dangerouslySetInnerHTML:{__html:a}}),l.createElement("div",{className:"space-x-1 text-3xl"},c.map((function(e){var t=e[0],a=e[1];return l.createElement("span",{key:t,title:t},l.createElement("i",{className:a}))}))))}))))})))}))))};var u=function(e){var t=e.title,a=e.totalCount,c=e.topics;return l.createElement(r.Z,{className:"space-y-8"},l.createElement("p",{className:"text-3xl font-bold space-x-2"},l.createElement(n.rU,{to:"/",className:"text-gray-300 hover:text-white space-x-2"},l.createElement("span",{className:"align-middle"},"Home"),l.createElement("span",{className:"text-xl"},l.createElement("i",{className:"fas fa-home align-middle"}))),l.createElement("span",{className:"text-gray-600 align-middle"},">"),l.createElement("span",{className:"text-indigo-500 align-middle"},t),l.createElement("span",{className:"ml-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-black text-white"},a)),l.createElement(o,{topics:c}))}}}]);
//# sourceMappingURL=component---src-pages-all-projects-js-4be166439d47e99bb47d.js.map