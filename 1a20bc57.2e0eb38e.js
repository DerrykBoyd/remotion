(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{129:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=i.a.createContext({}),p=function(e){var t=i.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=p(n),u=a,d=s["".concat(o,".").concat(u)]||s[u]||m[u]||r;return n?i.a.createElement(d,c(c({ref:t},b),{},{components:n})):i.a.createElement(d,c({ref:t},b))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var b=2;b<r;b++)o[b]=n[b];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},79:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),i=n(7),r=(n(0),n(129)),o={title:"CLI options",id:"cli"},c={unversionedId:"cli",id:"cli",isDocsHomePage:!1,title:"CLI options",description:"The default command in package.json that powers npm run build is:",source:"@site/docs/cli.md",slug:"/cli",permalink:"/docs/cli",editUrl:"https://github.com/JonnyBurger/remotion/edit/main/packages/docs/docs/cli.md",version:"current",sidebar:"someSidebar",previous:{title:"Transparent videos",permalink:"/docs/transparent-videos"},next:{title:"Configuration file",permalink:"/docs/config"}},l=[{value:"Flags",id:"flags",children:[]},{value:"Example command",id:"example-command",children:[]},{value:"See also",id:"see-also",children:[]}],b={toc:l};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The default command in package.json that powers ",Object(r.b)("inlineCode",{parentName:"p"},"npm run build")," is:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npx remotion render <entry-file> <composition-id> <output-location>\n")),Object(r.b)("h2",{id:"flags"},"Flags"),Object(r.b)("p",null,"Besides choosing a video and output location with the command line arguments, the following flags are supported:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"--props"),": React Props to pass to the root component of your video. Must be a serialized JSON string."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"--concurrency"),": ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"config#setconcurrency"}),"How many CPU threads to use.")," Minimum 1. The maximum is the amount of threads you have."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"--pixel-format"),": ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"config#setpixelformat"}),"Set a custom pixel format. See here for available values.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"--image-format"),": ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"config#setimageformat"}),Object(r.b)("inlineCode",{parentName:"a"},"jpeg")," or ",Object(r.b)("inlineCode",{parentName:"a"},"png")," - JPEG is faster, but supports transparency.")," The default image format is ",Object(r.b)("inlineCode",{parentName:"li"},"jpeg")," since v1.1. Flag available since v1.4."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"--config"),": Specify a location for the Remotion config file. Available in v1.2 and later."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"--quality"),": ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"config#setquality"}),"Value between 0 and 100 for JPEG rendering quality"),". Doesn't work when PNG frames are rendered. Available since v1.4."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"--overwrite"),": ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"config#setoverwriteoutput"}),"Write to output even if file already exists.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"--sequence"),": ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"config#setimagesequence"}),"Pass this flag if you want an image sequence as the output instead of a video.")," Available since v1.4."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"--codec"),": ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"config#setoutputformat"}),Object(r.b)("inlineCode",{parentName:"a"},"h264")," or ",Object(r.b)("inlineCode",{parentName:"a"},"h265")," or ",Object(r.b)("inlineCode",{parentName:"a"},"png")," or ",Object(r.b)("inlineCode",{parentName:"a"},"vp8")," or ",Object(r.b)("inlineCode",{parentName:"a"},"vp9")),". If you don't supply ",Object(r.b)("inlineCode",{parentName:"li"},"--codec"),", it will use the H.264 encoder. Available since v1.4."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"--crf"),": ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"config#setcrf"}),"To set Constant Rate Factor (CRF) of the output"),". Minimum 0. Use this rate control mode if you want to keep the best quality and care less about the file size. Available since v1.4."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"--browser-executable"),": ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"config#setbrowserexecutable"}),"Path to a Chrome executable"),". If not specified and Remotion cannot find one, it will download one during rendering. Available since v1.5.")),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"If you don't feel like passing command line flags every time, consider creating a ",Object(r.b)("inlineCode",{parentName:"p"},"remotion.config.ts")," ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"config"}),"config file"),"."))),Object(r.b)("h2",{id:"example-command"},"Example command"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"npx remotion render --overwrite --codec=vp8 src/index.tsx HelloWorld video.mp4\n")),Object(r.b)("h2",{id:"see-also"},"See also"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"render"}),"Render your video")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"config"}),"Configuration file"))))}p.isMDXComponent=!0}}]);