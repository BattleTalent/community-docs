(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5851],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(t),f=o,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return t?r.createElement(m,c(c({ref:n},s),{},{components:t})):r.createElement(m,c({ref:n},s))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=t[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7505:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var r=t(2122),o=t(9756),a=(t(7294),t(3905)),c=["components"],i={title:"UnlockContentConfig - IsItemUnlockedAndEnabled"},l=void 0,p={unversionedId:"LuaScript/Reference by category/Others/snippet-unlockcontentconfig-IsItemUnlockedAndEnabled",id:"LuaScript/Reference by category/Others/snippet-unlockcontentconfig-IsItemUnlockedAndEnabled",isDocsHomePage:!1,title:"UnlockContentConfig - IsItemUnlockedAndEnabled",description:"Check if a weapon/song/other is unlocked and enabled.",source:"@site/docs/LuaScript/4.Reference by category/12.Others/snippet-unlockcontentconfig-IsItemUnlockedAndEnabled.md",sourceDirName:"LuaScript/4.Reference by category/12.Others",slug:"/LuaScript/Reference by category/Others/snippet-unlockcontentconfig-IsItemUnlockedAndEnabled",permalink:"/community-docs/docs/LuaScript/Reference by category/Others/snippet-unlockcontentconfig-IsItemUnlockedAndEnabled",editUrl:"https://github.com/BattleTalent/community-docs/docs/LuaScript/4.Reference by category/12.Others/snippet-unlockcontentconfig-IsItemUnlockedAndEnabled.md",version:"current",frontMatter:{title:"UnlockContentConfig - IsItemUnlockedAndEnabled"},sidebar:"docs",previous:{title:"List all weapons",permalink:"/community-docs/docs/LuaScript/Reference by category/Others/snippet-list-all-weapons"},next:{title:"Tips",permalink:"/community-docs/docs/LuaScript/Tips"}},s=[{value:"Example",id:"example",children:[]},{value:"User Variables",id:"user-variables",children:[]}],u={toc:s};function d(e){var n=e.components,t=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Check if a weapon/song/other is unlocked and enabled."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'if CL.UnlockContentConfig.IsItemUnlockedAndEnabled(self.yourWeaponId) then\n    print("This weapon is enabled")\nend \n')),(0,a.kt)("h2",{id:"user-variables"},"User Variables"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Component"),(0,a.kt)("th",{parentName:"tr",align:null},"variable"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"self.yourWeaponId"))))))}d.isMDXComponent=!0}}]);