(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[77462],{8941:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var n=r(62540);r(63696);var s=r(9347),o=r(81912);function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}),e}function c(e,t){switch(e){case"noicon":case"loaded":return null;case"loading":return(0,o.T)({id:"theme.IdealImageMessage.loading",message:"Loading...",description:"When the full-scale image is loading"});case"load":{let{pickedSrc:e}=t,{size:r}=e,n=r?` (${function(e){let t=["B","KB","MB","GB","TB"];if(0===e)return"n/a";let r=Math.floor(Math.log(e)/Math.log(1024));return 0===r?`${e} ${t[r]}`:`${(e/1024**r).toFixed(1)} ${t[r]}`}(r)})`:"";return(0,o.T)({id:"theme.IdealImageMessage.load",message:"Click to load{sizeMessage}",description:"To prompt users to load the full image. sizeMessage is a parenthesized size figure."},{sizeMessage:n})}case"offline":return(0,o.T)({id:"theme.IdealImageMessage.offline",message:"Your browser is offline. Image not loaded",description:"When the user is viewing an offline document"});case"error":{let{loadInfo:e}=t;if(404===e)return(0,o.T)({id:"theme.IdealImageMessage.404error",message:"404. Image not found",description:"When the image is not found"});return(0,o.T)({id:"theme.IdealImageMessage.error",message:"Error. Click to reload",description:"When the image fails to load for unknown error"})}default:throw Error(`Wrong icon: ${e}`)}}function l(e){var t,r;let{img:o}=e,l=function(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}(e,["img"]);return"string"==typeof o||"default"in o?(0,n.jsx)("img",i({src:"string"==typeof o?o:o.default},l)):(0,n.jsx)(s.A,a(i({},l),{height:null!==(t=o.src.height)&&void 0!==t?t:100,width:null!==(r=o.src.width)&&void 0!==r?r:100,placeholder:{lqip:o.preSrc},src:o.src.src,srcSet:o.src.images.map(e=>a(i({},e),{src:e.path})),getMessage:c}))}},21440:(e,t,r)=>{"use strict";r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>b,default:()=>x,frontMatter:()=>h,metadata:()=>n,toc:()=>f});let n=JSON.parse('{"id":"playground","title":"Playground","description":"Playgrounds allow you to run Docusaurus in your browser, without installing anything!","source":"@site/docs/playground.mdx","sourceDirName":".","slug":"/playground","permalink":"/docs/playground","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/playground.mdx","tags":[],"version":"current","lastUpdatedBy":"S\xe9bastien Lorber","lastUpdatedAt":1727966907000,"frontMatter":{},"sidebar":"docs","previous":{"title":"Configuration","permalink":"/docs/configuration"},"next":{"title":"TypeScript Support","permalink":"/docs/typescript-support"}}');var s=r(62540),o=r(43023);r(63696);var i=r(11750),a=r(81912),c=r(36372),l=r(8941),d=r(37425);let u=[{name:"\u{1F4E6} CodeSandbox",image:r(67376),url:"https://docusaurus.new/codesandbox",urlTS:"https://docusaurus.new/codesandbox-ts",description:(0,s.jsx)(a.A,{id:"playground.codesandbox.description",children:"CodeSandbox is an online code editor and development environment that allows developers to create, share and collaborate on web development projects in a browser-based environment"})},{name:"\u26A1 StackBlitz \u{1F195}",image:r(56179),url:"https://docusaurus.new/stackblitz",urlTS:"https://docusaurus.new/stackblitz-ts",description:(0,s.jsx)(a.A,{id:"playground.stackblitz.description",values:{webContainersLink:(0,s.jsx)(c.A,{href:"https://blog.stackblitz.com/posts/introducing-webcontainers/",children:"WebContainers"})},children:"StackBlitz uses a novel {webContainersLink} technology to run Docusaurus directly in your browser."})}];function p({name:e,image:t,url:r,urlTS:n,description:o}){return(0,s.jsx)("div",{className:"col col--6 margin-bottom--lg",children:(0,s.jsxs)("div",{className:(0,i.A)("card"),children:[(0,s.jsx)("div",{className:(0,i.A)("card__image"),children:(0,s.jsx)(c.A,{to:r,children:(0,s.jsx)(l.A,{img:t,alt:`${e}'s image`})})}),(0,s.jsxs)("div",{className:"card__body",children:[(0,s.jsx)(d.A,{as:"h3",children:e}),(0,s.jsx)("p",{children:o})]}),(0,s.jsxs)("div",{className:"card__footer",children:[(0,s.jsx)("div",{style:{textAlign:"center"},children:(0,s.jsx)("b",{children:(0,s.jsx)(a.A,{id:"playground.tryItButton",children:"Try it now!"})})}),(0,s.jsxs)("div",{className:"button-group button-group--block",children:[(0,s.jsx)(c.A,{className:"button button--secondary",to:r,children:"JavaScript"}),(0,s.jsx)(c.A,{className:"button button--secondary",to:n,children:"TypeScript"})]})]})]})})}function g(){return(0,s.jsx)("div",{className:"row",children:u.map(e=>(0,s.jsx)(p,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({},e),e.name))})}let h={},b="Playground",m={},f=[];function A(e){let t={a:"a",admonition:"admonition",h1:"h1",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"playground",children:"Playground"})}),"\n",(0,s.jsxs)(t.p,{children:["Playgrounds allow you to run Docusaurus ",(0,s.jsx)(t.strong,{children:"in your browser, without installing anything"}),"!"]}),"\n",(0,s.jsx)(t.p,{children:"They are mostly useful for:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Testing Docusaurus"}),"\n",(0,s.jsx)(t.li,{children:"Reporting bugs"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Use ",(0,s.jsx)(t.a,{href:"https://docusaurus.new",children:"docusaurus.new"})," as an easy-to-remember shortcut."]}),"\n",(0,s.jsx)(t.p,{children:"Choose one of the available options below."}),"\n","\n",(0,s.jsx)(g,{}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["For convenience, we'll remember your choice next time you visit ",(0,s.jsx)(t.a,{href:"https://docusaurus.new",children:"docusaurus.new"}),"."]})})]})}function x(e={}){let{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(A,{...e})}):A(e)}},67376:(e,t,r)=>{e.exports={src:{srcSet:r.p+"assets/ideal-img/codesandbox.7906bc4.640.png 640w,"+r.p+"assets/ideal-img/codesandbox.36984ff.1030.png 1030w",images:[{path:r.p+"assets/ideal-img/codesandbox.7906bc4.640.png",width:640,height:355},{path:r.p+"assets/ideal-img/codesandbox.36984ff.1030.png",width:1030,height:571}],src:r.p+"assets/ideal-img/codesandbox.7906bc4.640.png",toString:function(){return r.p+"assets/ideal-img/codesandbox.7906bc4.640.png"},placeholder:void 0,width:640,height:355},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA7ElEQVR4nB3Ov0rDQACA8ZszxVrvLpfYu0goUWtQwT+IOtRasrg6WQdbhL5BHZwEoaVIaXHpC6irxc3JxUVfw01wcHD7pB1+07d8orKasb1zQLmcUrIxcZwQmEUK85IFrVGBQQcRwtolppIkIQxDlFJsrm+QHx1Tq1bJa3UO9/YRWqtZTNMVXOwozhXI26dcTYbcPo+5ntzTGnQQURQhpaRkLYExSL+IPMnY6p9zNu5QH7WRzV2Ec47QGNJ0mcpahlYBN4MuP/zx9vnB1+83L++vCN/3mVJKzxY8z+Oy2eLp4ZFG44Lh3Yh+t8c/jL9rZrM0xfsAAAAASUVORK5CYII="}},56179:(e,t,r)=>{e.exports={src:{srcSet:r.p+"assets/ideal-img/stackblitz.4ee9b70.640.png 640w,"+r.p+"assets/ideal-img/stackblitz.8ebfdbb.1030.png 1030w",images:[{path:r.p+"assets/ideal-img/stackblitz.4ee9b70.640.png",width:640,height:356},{path:r.p+"assets/ideal-img/stackblitz.8ebfdbb.1030.png",width:1030,height:572}],src:r.p+"assets/ideal-img/stackblitz.4ee9b70.640.png",toString:function(){return r.p+"assets/ideal-img/stackblitz.4ee9b70.640.png"},placeholder:void 0,width:640,height:356},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAACXBIWXMAABYlAAAWJQFJUiTwAAAA2UlEQVR4nB3LvUrDUABA4fsAovbPNs29yb25adKEWlJB8C0rqFOx+BD+ILjbvTiYDiWpUx2zWAIeMcPHmY5I05SLyysm0wxjR+ggbLiej/INvrZ42iKkjvBsgiMDXC+k5/hE4ykvb6+8r1as1x88Pj0jBjJABhP6KmbgWlpdySjJ2G4Ldl876rqmLArEUIV44TnSjFE6pusYonRGvtlQliU/hwOfeY5QJsbYFOlHOCqk3ZNEScZ+/01VVfxCM4jTdp9/J62zpkfHHYZSc3N7x2Jxz3L5wHx+zR8O9nujOJsFvAAAAABJRU5ErkJggg=="}},43023:(e,t,r)=>{"use strict";r.d(t,{R:()=>i,x:()=>a});var n=r(63696);let s={},o=n.createContext(s);function i(e){let t=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);