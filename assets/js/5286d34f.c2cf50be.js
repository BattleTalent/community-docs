(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9068],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return p},kt:function(){return m}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=n.createContext({}),c=function(e){var r=n.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(o.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=c(t),m=a,h=f["".concat(o,".").concat(m)]||f[m]||u[m]||l;return t?n.createElement(h,s(s({ref:r},p),{},{components:t})):n.createElement(h,s({ref:r},p))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=t.length,s=new Array(l);s[0]=f;var i={};for(var o in r)hasOwnProperty.call(r,o)&&(i[o]=r[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<l;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},7362:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return p},default:function(){return f}});var n=t(2122),a=t(9756),l=(t(7294),t(3905)),s=["components"],i={title:"Player - Bone Transforms"},o=void 0,c={unversionedId:"snippets/snippet-player-bone-transforms",id:"snippets/snippet-player-bone-transforms",isDocsHomePage:!1,title:"Player - Bone Transforms",description:"Retrieve bone transforms on the players body.",source:"@site/docs/snippets/snippet-player-bone-transforms.md",sourceDirName:"snippets",slug:"/snippets/snippet-player-bone-transforms",permalink:"/community-docs/docs/snippets/snippet-player-bone-transforms",editUrl:"https://github.com/BattleTalent/community-docs/docs/snippets/snippet-player-bone-transforms.md",version:"current",frontMatter:{title:"Player - Bone Transforms"},sidebar:"docs",previous:{title:"OnTriggerEnter",permalink:"/community-docs/docs/snippets/snippet-on-trigger-enter"},next:{title:"Print",permalink:"/community-docs/docs/snippets/snippet-print"}},p=[{value:"Example",id:"example",children:[]},{value:"User Variables",id:"user-variables",children:[]},{value:"FAQ",id:"faq",children:[{value:"This script is only for the chest?",id:"this-script-is-only-for-the-chest",children:[]}]}],u={toc:p};function f(e){var r=e.components,t=(0,a.Z)(e,s);return(0,l.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Retrieve bone transforms on the players body."),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"function test:GetPlayerChestTransform()\n    local chestTrans = CL.InteractCharacter.PlayerInstance.ik.references.chest\n    return chestTrans;\nend\n\nlocal chestTransform = GetPlayerChestTransform()\n")),(0,l.kt)("h2",{id:"user-variables"},"User Variables"),(0,l.kt)("p",null,"No user variables."),(0,l.kt)("h2",{id:"faq"},"FAQ"),(0,l.kt)("h3",{id:"this-script-is-only-for-the-chest"},"This script is only for the chest?"),(0,l.kt)("p",null,"Correct. But you can call all other bones of the player as well!"),(0,l.kt)("p",null,"List of bones:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"references.root"),(0,l.kt)("li",{parentName:"ul"},"references.pelvis"),(0,l.kt)("li",{parentName:"ul"},"references.spine"),(0,l.kt)("li",{parentName:"ul"},"references.chest"),(0,l.kt)("li",{parentName:"ul"},"references.neck"),(0,l.kt)("li",{parentName:"ul"},"references.head"),(0,l.kt)("li",{parentName:"ul"},"references.leftShoulder"),(0,l.kt)("li",{parentName:"ul"},"references.leftUpperArm"),(0,l.kt)("li",{parentName:"ul"},"references.leftForearm"),(0,l.kt)("li",{parentName:"ul"},"references.leftHand"),(0,l.kt)("li",{parentName:"ul"},"references.rightShoulder"),(0,l.kt)("li",{parentName:"ul"},"references.rightUpperArm"),(0,l.kt)("li",{parentName:"ul"},"references.rightForearm"),(0,l.kt)("li",{parentName:"ul"},"references.rightHand"),(0,l.kt)("li",{parentName:"ul"},"references.leftThigh"),(0,l.kt)("li",{parentName:"ul"},"references.leftCalf"),(0,l.kt)("li",{parentName:"ul"},"references.leftFoot"),(0,l.kt)("li",{parentName:"ul"},"references.leftToes"),(0,l.kt)("li",{parentName:"ul"},"references.rightThigh"),(0,l.kt)("li",{parentName:"ul"},"references.rightCalf"),(0,l.kt)("li",{parentName:"ul"},"references.rightFoot"),(0,l.kt)("li",{parentName:"ul"},"references.rightToes")))}f.isMDXComponent=!0}}]);