(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2310],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7070:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),i=["components"],l={},s="Avatar Clothing",c={unversionedId:"support-mod-types/Avatar/Tutorials/avatar-clothing",id:"support-mod-types/Avatar/Tutorials/avatar-clothing",isDocsHomePage:!1,title:"Avatar Clothing",description:'Note: The prefixes used in the tutorial are "WMD\\", which can be replaced with your own prefix, and you will need to change the prefix in the AddressableConfig(Assets/Resources/AddressableConfig) file. Once you have changed the prefix, you will need to fill in your new prefix instead of "WMD\\" in the tutorial.',source:"@site/docs/support-mod-types/6.Avatar/Tutorials/11.avatar-clothing.md",sourceDirName:"support-mod-types/6.Avatar/Tutorials",slug:"/support-mod-types/Avatar/Tutorials/avatar-clothing",permalink:"/community-docs/docs/support-mod-types/Avatar/Tutorials/avatar-clothing",editUrl:"https://github.com/BattleTalent/community-docs/docs/support-mod-types/6.Avatar/Tutorials/11.avatar-clothing.md",version:"current",sidebarPosition:11,frontMatter:{},sidebar:"docs",previous:{title:"Modify Avatar HandPose",permalink:"/community-docs/docs/support-mod-types/Avatar/Tutorials/modify-avatar-hand-pose"},next:{title:"Create a network mod",permalink:"/community-docs/docs/support-mod-types/Network/create-a-network-mod"}},u=[],p={toc:u};function d(e){var t=e.components,l=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"avatar-clothing"},"Avatar Clothing"),(0,a.kt)("p",null,'Note: The prefixes used in the tutorial are "WMD',"_",'", which can be replaced with your own prefix, and you will need to change the prefix in the AddressableConfig(Assets/Resources/AddressableConfig) file. Once you have changed the prefix, you will need to fill in your new prefix instead of "WMD',"_",'" in the tutorial.'),(0,a.kt)("h4",{id:"1place-luabehaviour"},"1.Place LuaBehaviour"),(0,a.kt)("p",null,"1.Open the Avatar prefab you made."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"CreateFolder",src:r(389).Z})),(0,a.kt)("p",null,"2.Double-click the RuntimeAvatarBuilder's FbxPrefab to jump to the target node."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"CreateFolder",src:r(639).Z})),(0,a.kt)("p",null,"3.Add a LuaBehaviour component."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Fill in "prefix_ClothBoneToolScript".'),(0,a.kt)("li",{parentName:"ul"},"Add a new ObjList with the name root, and assign the node of your model's clothing skeleton to root.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"CreateFolder",src:r(528).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Several cloth style options are available in ClothBoneToolScript to use pre-made parameters."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"  SoltSkirt\n  NormalSkirt\n  HardSkirt\n  LongHair\n  ShortHair\n  Tail\n  Breasts\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You can also manually modify each parameter by adding a new NumberList to LuaBehaviour."))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"CreateFolder",src:r(8411).Z})),(0,a.kt)("h4",{id:"2use-cloth-bone-collider"},"2.Use Cloth Bone Collider"),(0,a.kt)("p",null,"If you want clothing to not be able to pass through the body, you need to use ClothBoneCollider for the body."),(0,a.kt)("p",null,"1.Drag the ClothBoneColliderHelper to the node that has a collision with the clothing."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"CreateFolder",src:r(2204).Z})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"CreateFolder",src:r(8150).Z})),(0,a.kt)("p",null,"2.Adjust the parameters of clothBoneCollider to the size of the avatar part."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"CreateFolder",src:r(1379).Z})),(0,a.kt)("p",null,"3.Assign the LuaBehaviour you just set to Lua. "),(0,a.kt)("p",null,"click Invoke to automatically apply it to the ClothBoneTool."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"CreateFolder",src:r(4152).Z})),(0,a.kt)("h4",{id:"3save-the-prefab"},"3.Save the Prefab"),(0,a.kt)("p",null,"Done!"))}d.isMDXComponent=!0},1379:function(e,t,r){"use strict";t.Z=r.p+"assets/images/adject-size-589a69f70676df4b35b949975220e0d2.png"},4152:function(e,t,r){"use strict";t.Z=r.p+"assets/images/apply-collider-04bce98cca5cd9ade9bfff19fcb63709.png"},2204:function(e,t,r){"use strict";t.Z=r.p+"assets/images/clothbonecolliderhelper-c162ff4f5df51e39f39cd10b0311435f.png"},639:function(e,t,r){"use strict";t.Z=r.p+"assets/images/jump-to-node-1b43dff5f79f2154ac7658cb9f03e625.png"},389:function(e,t,r){"use strict";t.Z=r.p+"assets/images/place-avatar-22490f9f0237868f9c47daba4c36d53f.png"},8150:function(e,t,r){"use strict";t.Z=r.p+"assets/images/place-helper-79bf4281204de145481c0ddb21386c19.png"},8411:function(e,t,r){"use strict";t.Z=r.p+"assets/images/set-parameter-376a20ccc2ced2a50ce8df7d45eea346.png"},528:function(e,t,r){"use strict";t.Z=r.p+"assets/images/set-root-2ff0e1fc851ae9c77de724b98286ac44.png"}}]);