"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["1790"],{86266:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>u,default:()=>f,assets:()=>d,toc:()=>h,frontMatter:()=>c});var t=JSON.parse('{"id":"api/plugins/plugin-ideal-image","title":"\uD83D\uDCE6 plugin-ideal-image","description":"Docusaurus Plugin to generate an almost ideal image (responsive, lazy-loading, and low quality placeholder).","source":"@site/docs/api/plugins/plugin-ideal-image.mdx","sourceDirName":"api/plugins","slug":"/api/plugins/@docusaurus/plugin-ideal-image","permalink":"/docs/api/plugins/@docusaurus/plugin-ideal-image","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/api/plugins/plugin-ideal-image.mdx","tags":[],"version":"current","lastUpdatedBy":"S\xe9bastien Lorber","lastUpdatedAt":1729178406000,"sidebarPosition":8,"frontMatter":{"sidebar_position":8,"slug":"/api/plugins/@docusaurus/plugin-ideal-image"},"sidebar":"api","previous":{"title":"\uD83D\uDCE6 plugin-google-tag-manager","permalink":"/docs/api/plugins/@docusaurus/plugin-google-tag-manager"},"next":{"title":"\uD83D\uDCE6 plugin-pwa","permalink":"/docs/api/plugins/@docusaurus/plugin-pwa"}}'),i=r("24246"),a=r("80980"),l=r("15398"),o=r("58636"),s=r("32240");let c={sidebar_position:8,slug:"/api/plugins/@docusaurus/plugin-ideal-image"},u="\uD83D\uDCE6 plugin-ideal-image",d={},h=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Example configuration",id:"ex-config",level:3}];function p(e){let n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"-plugin-ideal-image",children:"\uD83D\uDCE6 plugin-ideal-image"})}),"\n","\n",(0,i.jsx)(n.p,{children:"Docusaurus Plugin to generate an almost ideal image (responsive, lazy-loading, and low quality placeholder)."}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["By default, the plugin is ",(0,i.jsx)(n.strong,{children:"inactive in development"})," so you could always view full-scale images. If you want to debug the ideal image behavior, you could set the ",(0,i.jsx)(n.a,{href:"#disableInDev",children:(0,i.jsx)(n.code,{children:"disableInDev"})})," option to ",(0,i.jsx)(n.code,{children:"false"}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsxs)(l.Z,{groupId:"npm2yarn",children:[(0,i.jsx)(o.Z,{value:"npm",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm install --save @docusaurus/plugin-ideal-image\n"})})}),(0,i.jsx)(o.Z,{value:"yarn",label:"Yarn",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"yarn add @docusaurus/plugin-ideal-image\n"})})}),(0,i.jsx)(o.Z,{value:"pnpm",label:"pnpm",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pnpm add @docusaurus/plugin-ideal-image\n"})})})]}),"\n",(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(n.p,{children:"This plugin supports the PNG and JPG formats only."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"import Image from '@theme/IdealImage';\nimport thumbnail from './path/to/img.png';\n\n// your React code\n<Image img={thumbnail} />\n\n// or\n<Image img={require('./path/to/img.png')} />\n"})}),"\n",(0,i.jsxs)(n.admonition,{type:"warning",children:[(0,i.jsxs)(n.p,{children:["This plugin registers a ",(0,i.jsx)(n.a,{href:"https://webpack.js.org/loaders/",children:"Webpack loader"})," that changes the type of imported/require images:"]}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Before: ",(0,i.jsx)(n.code,{children:"string"})]}),"\n",(0,i.jsxs)(n.li,{children:["After: ",(0,i.jsx)(n.code,{children:'{preSrc: string, src: import("@theme/IdealImage").SrcImage}'})]}),"\n"]})]}),"\n",(0,i.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsx)(n.p,{children:"Accepted fields:"}),"\n",(0,i.jsx)(s.Z,{children:(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Option"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Default"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"name"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"ideal-img/[name].[hash:hex:7].[width].[ext]"})}),(0,i.jsx)(n.td,{children:"Filename template for output files."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"sizes"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"number[]"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.em,{children:"original size"})}),(0,i.jsx)(n.td,{children:"Specify all widths you want to use. If a specified size exceeds the original image's width, the latter will be used (i.e. images won't be scaled up)."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"size"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"number"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.em,{children:"original size"})}),(0,i.jsx)(n.td,{children:"Specify one width you want to use; if the specified size exceeds the original image's width, the latter will be used (i.e. images won't be scaled up)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"min"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"number"})}),(0,i.jsx)(n.td,{}),(0,i.jsxs)(n.td,{children:["As an alternative to manually specifying ",(0,i.jsx)(n.code,{children:"sizes"}),", you can specify ",(0,i.jsx)(n.code,{children:"min"}),", ",(0,i.jsx)(n.code,{children:"max"})," and ",(0,i.jsx)(n.code,{children:"steps"}),", and the sizes will be generated for you."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"max"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"number"})}),(0,i.jsx)(n.td,{}),(0,i.jsxs)(n.td,{children:["See ",(0,i.jsx)(n.code,{children:"min"})," above"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"steps"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"number"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"4"})}),(0,i.jsxs)(n.td,{children:["Configure the number of images generated between ",(0,i.jsx)(n.code,{children:"min"})," and ",(0,i.jsx)(n.code,{children:"max"})," (inclusive)"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"quality"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"number"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"85"})}),(0,i.jsx)(n.td,{children:"JPEG compression quality"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"disableInDev"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"boolean"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"true"})}),(0,i.jsxs)(n.td,{children:["You can test ideal image behavior in dev mode by setting this to ",(0,i.jsx)(n.code,{children:"false"}),". ",(0,i.jsx)(n.strong,{children:"Tip"}),": use ",(0,i.jsx)(n.a,{href:"https://www.browserstack.com/guide/how-to-perform-network-throttling-in-chrome",children:"network throttling"})," in your browser to simulate slow networks."]})]})]})]})}),"\n",(0,i.jsx)(n.h3,{id:"ex-config",children:"Example configuration"}),"\n",(0,i.jsx)(n.p,{children:"Here's an example configuration:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  plugins: [\n    [\n      '@docusaurus/plugin-ideal-image',\n      // highlight-start\n      {\n        quality: 70,\n        max: 1030, // max resized image's size.\n        min: 640, // min resized image's size. if original is lower, use that size.\n        steps: 2, // the max number of images generated between min and max (inclusive)\n        disableInDev: false,\n      },\n      // highlight-end\n    ],\n  ],\n};\n"})})]})}function f(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},58636:function(e,n,r){r.d(n,{Z:()=>l});var t=r("24246");r("27378");var i=r("90496");let a="tabItem_pnkT";function l(e){var n=e.children,r=e.hidden,l=e.className;return(0,t.jsx)("div",{role:"tabpanel",className:(0,i.Z)(a,l),hidden:r,children:n})}},15398:function(e,n,r){r.d(n,{Z:()=>S});var t=r("24246"),i=r("27378"),a=r("90496"),l=r("54947"),o=r("3620"),s=r("844"),c=r("97486"),u=r("32263"),d=r("16971");function h(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=Array(n);r<n;r++)t[r]=e[r];return t}function p(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r,t,i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var a=[],l=!0,o=!1;try{for(i=i.call(e);!(l=(r=i.next()).done)&&(a.push(r.value),!n||a.length!==n);l=!0);}catch(e){o=!0,t=e}finally{try{!l&&null!=i.return&&i.return()}finally{if(o)throw t}}return a}}(e,n)||function(e,n){if(e){if("string"==typeof e)return h(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return h(e,n)}}(e,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e){var n,r;return null!==(r=null===(n=i.Children.toArray(e).filter(function(e){return"\n"!==e}).map(function(e){var n,r;if(!e||(0,i.isValidElement)(e)&&(n=e.props)&&(void 0===n?"undefined":(r=n)&&"undefined"!=typeof Symbol&&r.constructor===Symbol?"symbol":typeof r)=="object"&&"value"in n)return e;throw Error("Docusaurus error: Bad <Tabs> child <".concat("string"==typeof e.type?e.type:e.type.name,'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.'))}))||void 0===n?void 0:n.filter(Boolean))&&void 0!==r?r:[]}function m(e){var n=e.value;return e.tabValues.some(function(e){return e.value===n})}var g=r("71607");let b="tabList_Qoir",j="tabItem_AQgk";function x(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.forEach(function(n){var t,i,a;t=e,i=n,a=r[n],i in t?Object.defineProperty(t,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[i]=a})}return e}function v(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):(function(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r.push.apply(r,t)}return r})(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}),e}function y(e){var n=e.className,r=e.block,i=e.selectedValue,o=e.selectValue,s=e.tabValues,c=[],u=(0,l.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,r=s[c.indexOf(n)].value;r!==i&&(u(n),o(r))},h=function(e){var n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var r,t=c.indexOf(e.currentTarget)+1;n=null!==(r=c[t])&&void 0!==r?r:c[0];break;case"ArrowLeft":var i,a=c.indexOf(e.currentTarget)-1;n=null!==(i=c[a])&&void 0!==i?i:c[c.length-1]}null==n||n.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},n),children:s.map(function(e){var n=e.value,r=e.label,l=e.attributes;return(0,t.jsx)("li",v(x({role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:function(e){return c.push(e)},onKeyDown:h,onClick:d},l),{className:(0,a.Z)("tabs__item",j,null==l?void 0:l.className,{"tabs__item--active":i===n}),children:null!=r?r:n}),n)})})}function w(e){var n=e.lazy,r=e.children,l=e.selectedValue,o=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){var s=o.find(function(e){return e.props.value===l});return s?(0,i.cloneElement)(s,{className:(0,a.Z)("margin-top--md",s.props.className)}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:o.map(function(e,n){return(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==l})})})}function O(e){var n=function(e){var n,r,t,a,l,h,g,b,j,x,v,y,w,O,S=e.defaultValue,I=e.queryString,k=e.groupId;var P=(r=(n=e).values,t=n.children,(0,i.useMemo)(function(){var e=null!=r?r:f(t).map(function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}});return!function(e){var n=(0,u.lx)(e,function(e,n){return e.value===n.value});if(n.length>0)throw Error('Docusaurus error: Duplicate values "'.concat(n.map(function(e){return e.value}).join(", "),'" found in <Tabs>. Every value needs to be unique.'))}(e),e},[r,t])),A=p((0,i.useState)(function(){return function(e){var n,r=e.defaultValue,t=e.tabValues;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!m({value:r,tabValues:t}))throw Error('Docusaurus error: The <Tabs> has a defaultValue "'.concat(r,'" but none of its children has the corresponding value. Available values are: ').concat(t.map(function(e){return e.value}).join(", "),". If you intend to show no default tab, use defaultValue={null} instead."));return r}var i=null!==(n=t.find(function(e){return e.default}))&&void 0!==n?n:t[0];if(!i)throw Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:S,tabValues:P})}),2),E=A[0],D=A[1];var T=p((l=(a={queryString:void 0!==I&&I,groupId:k}).queryString,h=a.groupId,g=(0,o.k6)(),b=function(e){var n=e.queryString,r=void 0!==n&&n,t=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:void 0!==l&&l,groupId:h}),[(0,c._X)(b),(0,i.useCallback)(function(e){if(!!b){var n,r,t=new URLSearchParams(g.location.search);t.set(b,e),g.replace((n=function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.forEach(function(n){var t,i,a;t=e,i=n,a=r[n],i in t?Object.defineProperty(t,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[i]=a})}return e}({},g.location),r=(r={search:t.toString()},r),Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):(function(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r.push.apply(r,t)}return r})(Object(r)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}),n))}},[b,g])]),2),N=T[0],C=T[1];var V=p((x=(j=({groupId:k}).groupId)?"docusaurus.tab.".concat(j):null,y=(v=p((0,d.Nk)(x),2))[0],w=v[1],[y,(0,i.useCallback)(function(e){if(!!x)w.set(e)},[x,w])]),2),q=V[0],z=V[1];var Z=m({value:O=null!=N?N:q,tabValues:P})?O:null;return(0,s.Z)(function(){Z&&D(Z)},[Z]),{selectedValue:E,selectValue:(0,i.useCallback)(function(e){if(!m({value:e,tabValues:P}))throw Error("Can't select invalid tab value=".concat(e));D(e),C(e),z(e)},[C,z,P]),tabValues:P}}(e);return(0,t.jsxs)("div",{className:(0,a.Z)("tabs-container",b),children:[(0,t.jsx)(y,x({},n,e)),(0,t.jsx)(w,x({},n,e))]})}function S(e){var n=(0,g.Z)();return(0,t.jsx)(O,v(x({},e),{children:f(e.children)}),String(n))}},32240:function(e,n,r){r.d(n,{Z:()=>d});var t=r("24246"),i=r("27378"),a=r("96700"),l=r("3620");let o="apiTable_e8hp";function s(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=Array(n);r<n;r++)t[r]=e[r];return t}function c(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r,t,i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var a=[],l=!0,o=!1;try{for(i=i.call(e);!(l=(r=i.next()).done)&&(a.push(r.value),!n||a.length!==n);l=!0);}catch(e){o=!0,t=e}finally{try{!l&&null!=i.return&&i.return()}finally{if(o)throw t}}return a}}(e,n)||function(e,n){if(e){if("string"==typeof e)return s(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,n)}}(e,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var u=i.forwardRef(function(e,n){var r=e.name,o=e.children,s=function(e){for(var n=e;(0,i.isValidElement)(n);)n=c(i.Children.toArray(n.props.children),1)[0];if("string"!=typeof n)throw Error("Could not extract APITable row name from JSX tree:\n".concat(JSON.stringify(e,null,2)));return n}(o),u=r?"".concat(r,"-").concat(s):s,d="#".concat(u),h=(0,l.k6)();return(0,a.Z)().collectAnchor(u),(0,t.jsx)("tr",{id:u,tabIndex:0,ref:h.location.hash===d?n:void 0,onClick:function(e){var n,r="TD"===e.target.tagName.toUpperCase(),t=!!(null===(n=window.getSelection())||void 0===n?void 0:n.toString());r&&!t&&h.push(d)},onKeyDown:function(e){"Enter"===e.key&&h.push(d)},children:o.props.children})});function d(e){var n=e.children,r=e.name;if("table"!==n.type)throw Error("Bad usage of APITable component.\nIt is probably that your Markdown table is malformed.\nMake sure to double-check you have the appropriate number of columns for each table row.");var a=c(i.Children.toArray(n.props.children),2),l=a[0],s=a[1],d=(0,i.useRef)(null);(0,i.useEffect)(function(){var e;null===(e=d.current)||void 0===e||e.focus()},[d]);var h=i.Children.map(s.props.children,function(e){return(0,t.jsx)(u,{name:r,ref:d,children:e})});return(0,t.jsxs)("table",{className:o,children:[l,(0,t.jsx)("tbody",{children:h})]})}},80980:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return l}});var t=r(27378);let i={},a=t.createContext(i);function l(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);