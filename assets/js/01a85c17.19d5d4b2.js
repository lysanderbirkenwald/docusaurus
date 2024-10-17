"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["40565"],{5666:function(e,t,r){r.d(t,{CS:()=>v,wj:()=>l,nO:()=>u,iZ:()=>y,n4:()=>c,Ne:()=>N,ci:()=>C,cH:()=>w});var n=r("24246"),a=r("27378"),i=r("50923"),o=r("3564");function l(){var e,t=(0,o.Z)(),r=null==t?void 0:null===(e=t.data)||void 0===e?void 0:e.blogMetadata;if(!r)throw Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return r}var s=a.createContext(null);function c(e){var t,r,i,o=e.children,l=e.content,c=e.isBlogPostPage;var u=(r=(t={content:l,isBlogPostPage:void 0!==c&&c}).content,i=t.isBlogPostPage,(0,a.useMemo)(function(){return{metadata:r.metadata,frontMatter:r.frontMatter,assets:r.assets,toc:r.toc,isBlogPostPage:i}},[r,i]));return(0,n.jsx)(s.Provider,{value:u,children:o})}function u(){var e=(0,a.useContext)(s);if(null===e)throw new i.i6("BlogPostProvider");return e}var m=r("83631"),f=r("8156");function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n,a,i;n=e,a=t,i=r[t],a in n?Object.defineProperty(n,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[a]=i})}return e}var g=function(e){return new Date(e).toISOString()};function p(e){var t=e.map(h);return{author:1===t.length?t[0]:t}}function b(e,t,r){return e?{image:function(e){var t=e.imageUrl;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:e.caption}}({imageUrl:t(e,{absolute:!0}),caption:"title image for the blog post: ".concat(r)})}:{}}function v(e){var t=(0,f.Z)().siteConfig,r=(0,m.Cg)().withBaseUrl,n=e.metadata,a=n.blogDescription,i=n.blogTitle,o=n.permalink,l="".concat(t.url).concat(o);return{"@context":"https://schema.org","@type":"Blog","@id":l,mainEntityOfPage:l,headline:i,description:a,blogPost:e.items.map(function(e){var n,a,i,o,l,s,c,u,m,f,v,y,h,j,O,P;return n=e.content,a=t,i=r,s=n.assets,c=n.frontMatter,m=(u=n.metadata).date,f=u.title,v=u.description,y=u.lastUpdatedAt,h=null!==(o=s.image)&&void 0!==o?o:c.image,j=null!==(l=c.keywords)&&void 0!==l?l:[],O="".concat(a.url).concat(u.permalink),d({"@type":"BlogPosting","@id":O,mainEntityOfPage:O,url:O,headline:f,name:f,description:v,datePublished:m},(P=y?g(y):void 0)?{dateModified:P}:{},p(u.authors),b(h,i,f),j?{keywords:j}:{})})}}function y(){var e,t,r,n,a=l(),i=u(),o=i.assets,s=i.metadata,c=(0,f.Z)().siteConfig,v=(0,m.Cg)().withBaseUrl,y=s.date,h=s.title,j=s.description,O=s.frontMatter,P=s.lastUpdatedAt,x=null!==(r=o.image)&&void 0!==r?r:O.image,w=null!==(n=O.keywords)&&void 0!==n?n:[],C=P?g(P):void 0,N="".concat(c.url).concat(s.permalink);return e=d({"@context":"https://schema.org","@type":"BlogPosting","@id":N,mainEntityOfPage:N,url:N,headline:h,name:h,description:j,datePublished:y},C?{dateModified:C}:{},p(s.authors),b(x,v,h),w?{keywords:w}:{}),t=(t={isPartOf:{"@type":"Blog","@id":"".concat(c.url).concat(a.blogBasePath),name:a.blogTitle}},t),Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}),e}function h(e){return d({"@type":"Person"},e.name?{name:e.name}:{},e.title?{description:e.title}:{},e.url?{url:e.url}:{},e.email?{email:e.email}:{},e.imageURL?{image:e.imageURL}:{})}var j=r("3620"),O=r("35363"),P=r("32263"),x=r("71208");function w(e){var t=(0,j.TH)().pathname;return(0,a.useMemo)(function(){return e.filter(function(e){var r,n;return r=e,n=t,(!r.unlisted||!!(0,x.Mg)(r.permalink,n))&&!0})},[e,t])}function C(e){var t=Object.entries((0,P.vM)(e,function(e){return"".concat(new Date(e.date).getFullYear())}));return t.reverse(),t}function N(e){var t=e.items,r=e.ulClassName,a=e.liClassName,i=e.linkClassName,o=e.linkActiveClassName;return(0,n.jsx)("ul",{className:r,children:t.map(function(e){return(0,n.jsx)("li",{className:a,children:(0,n.jsx)(O.Z,{isNavLink:!0,to:e.permalink,className:i,activeClassName:o,children:e.title})},e.permalink)})})}},9942:function(e,t,r){r.d(t,{Z:()=>A});var n=r("24246"),a=r("27378"),i=r("90496"),o=r("98143"),l=r("28115"),s=r("77827"),c=r("5666"),u=r("26378"),m=r("57922");function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function d(e){var t=e.year,r=e.yearGroupHeadingClassName,a=e.children;return(0,n.jsxs)("div",{role:"group",children:[(0,n.jsx)(m.Z,{as:"h3",className:r,children:t}),a]})}let g=(0,a.memo)(function(e){var t=e.items,r=e.yearGroupHeadingClassName,a=e.ListComponent;if(!(0,u.L)().blog.sidebar.groupByYear)return(0,n.jsx)(a,{items:t});var i=(0,c.ci)(t);return(0,n.jsx)(n.Fragment,{children:i.map(function(e){var t,i,o=(i=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var r,n,a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var i=[],o=!0,l=!1;try{for(a=a.call(e);!(o=(r=a.next()).done)&&(i.push(r.value),!t||i.length!==t);o=!0);}catch(e){l=!0,n=e}finally{try{!o&&null!=a.return&&a.return()}finally{if(l)throw n}}return i}}(t,2)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(e,t)}}(t,i)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l=o[0],s=o[1];return(0,n.jsx)(d,{year:l,yearGroupHeadingClassName:r,children:(0,n.jsx)(a,{items:s})},l)})})}),p="sidebar_P3nc",b="sidebarItemTitle_VrjY",v="sidebarItemList_OSkG",y="sidebarItem_WJ0y",h="sidebarItemLink_Qrfg",j="sidebarItemLinkActive_nUeK",O="yearGroupHeading_lECJ";var P=function(e){var t=e.items;return(0,n.jsx)(c.Ne,{items:t,ulClassName:(0,i.Z)(v,"clean-list"),liClassName:y,linkClassName:h,linkActiveClassName:j})};let x=(0,a.memo)(function(e){var t=e.sidebar,r=(0,c.cH)(t.items);return(0,n.jsx)("aside",{className:"col col--3",children:(0,n.jsxs)("nav",{className:(0,i.Z)(p,"thin-scrollbar"),"aria-label":(0,s.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,n.jsx)("div",{className:(0,i.Z)(b,"margin-bottom--md"),children:t.title}),(0,n.jsx)(g,{items:r,ListComponent:P,yearGroupHeadingClassName:O})]})})});var w=r("44160");let C="yearGroupHeading_Ruz9";var N=function(e){var t=e.items;return(0,n.jsx)(c.Ne,{items:t,ulClassName:"menu__list",liClassName:"menu__list-item",linkClassName:"menu__link",linkActiveClassName:"menu__link--active"})};function k(e){var t=e.sidebar,r=(0,c.cH)(t.items);return(0,n.jsx)(g,{items:r,ListComponent:N,yearGroupHeadingClassName:C})}let S=(0,a.memo)(function(e){return(0,n.jsx)(w.Zo,{component:k,props:e})});function Z(e){var t=e.sidebar,r=(0,l.i)();return(null==t?void 0:t.items.length)?"mobile"===r?(0,n.jsx)(S,{sidebar:t}):(0,n.jsx)(x,{sidebar:t}):null}function A(e){var t,r,a=e.sidebar,l=e.toc,s=e.children,c=function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++){if(r=i[n],!(t.indexOf(r)>=0))Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}}return a}(e,["sidebar","toc","children"]),u=a&&a.items.length>0;return(0,n.jsx)(o.Z,(t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n,a,i;n=e,a=t,i=r[t],a in n?Object.defineProperty(n,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[a]=i})}return e}({},c),r=(r={children:(0,n.jsx)("div",{className:"container margin-vert--lg",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)(Z,{sidebar:a}),(0,n.jsx)("main",{className:(0,i.Z)("col",{"col--7":u,"col--9 col--offset-1":!u}),children:s}),l&&(0,n.jsx)("div",{className:"col col--2",children:l})]})})},r),Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}),t))}},91981:function(e,t,r){r.r(t),r.d(t,{default:function(){return f}});var n=r(24246);r(27378);var a=r(90496),i=r(88715),o=r(57335),l=r(55951),s=r(9942),c=r(69086),u=r(69879),m=r(57922);function f(e){var t=e.tags,r=e.sidebar,f=(0,i.M)();return(0,n.jsxs)(o.FG,{className:(0,a.Z)(l.k.wrapper.blogPages,l.k.page.blogTagsListPage),children:[(0,n.jsx)(o.d,{title:f}),(0,n.jsx)(u.Z,{tag:"blog_tags_list"}),(0,n.jsxs)(s.Z,{sidebar:r,children:[(0,n.jsx)(m.Z,{as:"h1",children:f}),(0,n.jsx)(c.Z,{tags:t})]})]})}},63479:function(e,t,r){r.d(t,{Z:()=>l});var n=r("24246");r("27378");var a=r("90496"),i=r("35363");let o={tag:"tag_Nd8t",tagRegular:"tagRegular_TiLs",tagWithCount:"tagWithCount_AQg7"};function l(e){var t=e.permalink,r=e.label,l=e.count,s=e.description;return(0,n.jsxs)(i.Z,{href:t,title:s,className:(0,a.Z)(o.tag,l?o.tagWithCount:o.tagRegular),children:[r,l&&(0,n.jsx)("span",{children:l})]})}},69086:function(e,t,r){r.d(t,{Z:()=>c});var n=r("24246");r("27378");var a=r("88715"),i=r("63479"),o=r("57922");let l="tag_SyQ5";function s(e){var t=e.letterEntry;return(0,n.jsxs)("article",{children:[(0,n.jsx)(o.Z,{as:"h2",id:t.letter,children:t.letter}),(0,n.jsx)("ul",{className:"padding--none",children:t.tags.map(function(e){return(0,n.jsx)("li",{className:l,children:(0,n.jsx)(i.Z,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n,a,i;n=e,a=t,i=r[t],a in n?Object.defineProperty(n,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[a]=i})}return e}({},e))},e.permalink)})}),(0,n.jsx)("hr",{})]})}function c(e){var t=e.tags,r=(0,a.P)(t);return(0,n.jsx)("section",{className:"margin-vert--lg",children:r.map(function(e){return(0,n.jsx)(s,{letterEntry:e},e.letter)})})}},88715:function(e,t,r){r.d(t,{M:function(){return o},P:function(){return l}});var n=r(77827);function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r,n,a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var i=[],o=!0,l=!1;try{for(a=a.call(e);!(o=(r=a.next()).done)&&(i.push(r.value),!t||i.length!==t);o=!0);}catch(e){l=!0,n=e}finally{try{!o&&null!=a.return&&a.return()}finally{if(l)throw n}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var o=function(){return(0,n.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"})};function l(e){var t={};return Object.values(e).forEach(function(e){var r,n=e.label[0].toUpperCase();null!==(r=t[n])&&void 0!==r||(t[n]=[]),t[n].push(e)}),Object.entries(t).sort(function(e,t){var r=i(e,1)[0],n=i(t,1)[0];return r.localeCompare(n)}).map(function(e){var t=i(e,2);return{letter:t[0],tags:t[1].sort(function(e,t){return e.label.localeCompare(t.label)})}})}}}]);