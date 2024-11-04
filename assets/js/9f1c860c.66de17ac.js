(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3830],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return p},kt:function(){return m}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),i=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=i(e.components);return n.createElement(c.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=i(t),m=a,y=u["".concat(c,".").concat(m)]||u[m]||f[m]||o;return t?n.createElement(y,l(l({ref:r},p),{},{components:t})):n.createElement(y,l({ref:r},p))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=u;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var i=2;i<o;i++)l[i]=t[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5072:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return i},toc:function(){return p},default:function(){return u}});var n=t(2122),a=t(9756),o=(t(7294),t(3905)),l=["components"],s={title:"Player - Bone Transforms"},c=void 0,i={unversionedId:"LuaScript/Reference by category/Transfrom/snippet-player-bone-transforms",id:"LuaScript/Reference by category/Transfrom/snippet-player-bone-transforms",isDocsHomePage:!1,title:"Player - Bone Transforms",description:"Retrieve bone transforms on the players body.",source:"@site/docs/LuaScript/4.Reference by category/3.Transfrom/snippet-player-bone-transforms.md",sourceDirName:"LuaScript/4.Reference by category/3.Transfrom",slug:"/LuaScript/Reference by category/Transfrom/snippet-player-bone-transforms",permalink:"/community-docs/docs/LuaScript/Reference by category/Transfrom/snippet-player-bone-transforms",editUrl:"https://github.com/BattleTalent/community-docs/docs/LuaScript/4.Reference by category/3.Transfrom/snippet-player-bone-transforms.md",version:"current",frontMatter:{title:"Player - Bone Transforms"},sidebar:"docs",previous:{title:"GetTransformOnAvatar",permalink:"/community-docs/docs/LuaScript/Reference by category/Transfrom/snippet-get-transform-on-avatar"},next:{title:"Transform - LookAt",permalink:"/community-docs/docs/LuaScript/Reference by category/Transfrom/snippet-transform-lookat"}},p=[{value:"Example",id:"example",children:[]},{value:"User Variables",id:"user-variables",children:[]},{value:"FAQ",id:"faq",children:[{value:"This script is only for the chest?",id:"this-script-is-only-for-the-chest",children:[]}]}],f={toc:p};function u(e){var r=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Retrieve bone transforms on the players body."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"function test:GetPlayerChestTransform()\n    local chestTrans = CL.InteractCharacter.PlayerInstance.ik.references.chest\n    return chestTrans;\nend\n\nlocal chestTransform = GetPlayerChestTransform()\n")),(0,o.kt)("h2",{id:"user-variables"},"User Variables"),(0,o.kt)("p",null,"No user variables."),(0,o.kt)("h2",{id:"faq"},"FAQ"),(0,o.kt)("h3",{id:"this-script-is-only-for-the-chest"},"This script is only for the chest?"),(0,o.kt)("p",null,"Correct. But you can call all other bones of the player as well!"),(0,o.kt)("p",null,"List of bones:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"references.root"),(0,o.kt)("li",{parentName:"ul"},"references.pelvis"),(0,o.kt)("li",{parentName:"ul"},"references.spine"),(0,o.kt)("li",{parentName:"ul"},"references.chest"),(0,o.kt)("li",{parentName:"ul"},"references.neck"),(0,o.kt)("li",{parentName:"ul"},"references.head"),(0,o.kt)("li",{parentName:"ul"},"references.leftShoulder"),(0,o.kt)("li",{parentName:"ul"},"references.leftUpperArm"),(0,o.kt)("li",{parentName:"ul"},"references.leftForearm"),(0,o.kt)("li",{parentName:"ul"},"references.leftHand"),(0,o.kt)("li",{parentName:"ul"},"references.rightShoulder"),(0,o.kt)("li",{parentName:"ul"},"references.rightUpperArm"),(0,o.kt)("li",{parentName:"ul"},"references.rightForearm"),(0,o.kt)("li",{parentName:"ul"},"references.rightHand"),(0,o.kt)("li",{parentName:"ul"},"references.leftThigh"),(0,o.kt)("li",{parentName:"ul"},"references.leftCalf"),(0,o.kt)("li",{parentName:"ul"},"references.leftFoot"),(0,o.kt)("li",{parentName:"ul"},"references.leftToes"),(0,o.kt)("li",{parentName:"ul"},"references.rightThigh"),(0,o.kt)("li",{parentName:"ul"},"references.rightCalf"),(0,o.kt)("li",{parentName:"ul"},"references.rightFoot"),(0,o.kt)("li",{parentName:"ul"},"references.rightToes")))}u.isMDXComponent=!0}}]);