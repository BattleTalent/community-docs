(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8358],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8437:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a=["components"],s={title:"Invalid path in AssetBundleProvider"},c=void 0,l={unversionedId:"common-issues/invalid-path-in-assetbundleprovider",id:"common-issues/invalid-path-in-assetbundleprovider",isDocsHomePage:!1,title:"Invalid path in AssetBundleProvider",description:"Steps to reproduce",source:"@site/docs/common-issues/invalid-path-in-assetbundleprovider.md",sourceDirName:"common-issues",slug:"/common-issues/invalid-path-in-assetbundleprovider",permalink:"/community-docs/docs/common-issues/invalid-path-in-assetbundleprovider",editUrl:"https://gitlab.com/brothersonline/xlua-battletalent-docs/-/edit/master/website/docs/common-issues/invalid-path-in-assetbundleprovider.md",version:"current",frontMatter:{title:"Invalid path in AssetBundleProvider"},sidebar:"docs",previous:{title:"Gaze info not showing",permalink:"/community-docs/docs/common-issues/gaze-info-not-showing"},next:{title:"Upgrade & vulnerability colors are not showing",permalink:"/community-docs/docs/common-issues/upgrade-and-vulnerability-colors-not-showing"}},u=[{value:"Steps to reproduce",id:"steps-to-reproduce",children:[]},{value:"Fix",id:"fix",children:[]}],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"steps-to-reproduce"},"Steps to reproduce"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Install a mod where the folder name has changed"),(0,i.kt)("li",{parentName:"ol"},'Get a big error in your console saying "Invalid Path to AssetBundleProvider".')),(0,i.kt)("h2",{id:"fix"},"Fix"),(0,i.kt)("p",null,"Dont rename a mod folder when it's build."))}d.isMDXComponent=!0}}]);