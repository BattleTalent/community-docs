(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3976],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return y}});var r=t(7294);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,c=function(e,n){if(null==e)return{};var t,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,c=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=u(t),y=c,m=f["".concat(l,".").concat(y)]||f[y]||s[y]||o;return t?r.createElement(m,a(a({ref:n},p),{},{components:t})):r.createElement(m,a({ref:n},p))}));function y(e,n){var t=arguments,c=n&&n.mdxType;if("string"==typeof e||c){var o=t.length,a=new Array(o);a[0]=f;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:c,a[1]=i;for(var u=2;u<o;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},7889:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var r=t(2122),c=t(9756),o=(t(7294),t(3905)),a=["components"],i={title:"Event - OnSceneEnter"},l=void 0,u={unversionedId:"LuaScript/Reference by category/Scene/snippet-event-on-scene-enter",id:"LuaScript/Reference by category/Scene/snippet-event-on-scene-enter",isDocsHomePage:!1,title:"Event - OnSceneEnter",description:"Call a function when entering a scene.",source:"@site/docs/LuaScript/4.Reference by category/8.Scene/snippet-event-on-scene-enter.md",sourceDirName:"LuaScript/4.Reference by category/8.Scene",slug:"/LuaScript/Reference by category/Scene/snippet-event-on-scene-enter",permalink:"/community-docs/docs/LuaScript/Reference by category/Scene/snippet-event-on-scene-enter",editUrl:"https://github.com/BattleTalent/community-docs/docs/LuaScript/4.Reference by category/8.Scene/snippet-event-on-scene-enter.md",version:"current",frontMatter:{title:"Event - OnSceneEnter"},sidebar:"docs",previous:{title:"Skill - Toggle",permalink:"/community-docs/docs/LuaScript/Reference by category/Weapon/Skill/snippet-skill-toggle"},next:{title:"RPC - Server to Client",permalink:"/community-docs/docs/LuaScript/Reference by category/Network/RPC"}},p=[{value:"Example",id:"example",children:[]},{value:"User Variables",id:"user-variables",children:[]}],s={toc:p};function f(e){var n=e.components,t=(0,c.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Call a function when entering a scene."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'local OnEnter = function()\n    print("I entered a scene")\nend\n\nCL.CoreEntry.EnterGameStateEvent("+", OnEnter) \n')),(0,o.kt)("h2",{id:"user-variables"},"User Variables"),(0,o.kt)("p",null,"No user variables."))}f.isMDXComponent=!0}}]);