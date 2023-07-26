(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1429],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(n),f=o,d=m["".concat(l,".").concat(f)]||m[f]||u[f]||a;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8288:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=["components"],p={title:"GetComponent"},l=void 0,c={unversionedId:"snippets/snippet-get-component",id:"snippets/snippet-get-component",isDocsHomePage:!1,title:"GetComponent",description:"It gets the component on a gameObj just like in Unity.",source:"@site/docs/snippets/snippet-get-component.md",sourceDirName:"snippets",slug:"/snippets/snippet-get-component",permalink:"/community-docs/docs/snippets/snippet-get-component",editUrl:"https://github.com/BattleTalent/community-docs/docs/snippets/snippet-get-component.md",version:"current",frontMatter:{title:"GetComponent"},sidebar:"docs",previous:{title:"Explosion Without damage to player",permalink:"/community-docs/docs/snippets/snippet-explosion-without-damage-to-player"},next:{title:"HitInfo",permalink:"/community-docs/docs/snippets/snippet-hit-info"}},s=[{value:"Example",id:"example",children:[]},{value:"User Variables",id:"user-variables",children:[]}],u={toc:s};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"It gets the component on a gameObj just like in Unity."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"The following example gets the ",(0,a.kt)("inlineCode",{parentName:"p"},"InteractWeapon")," component from variable ",(0,a.kt)("inlineCode",{parentName:"p"},"self.gameObj")," and stores it in ",(0,a.kt)("inlineCode",{parentName:"p"},"interactWeapon")," variable."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"local interactWeapon = self.gameObj:GetComponent(typeof(CL.InteractWeapon))\n")),(0,a.kt)("h2",{id:"user-variables"},"User Variables"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Component"),(0,a.kt)("th",{parentName:"tr",align:null},"variable"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"GameObject"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"self.gameObj"))))))}m.isMDXComponent=!0}}]);