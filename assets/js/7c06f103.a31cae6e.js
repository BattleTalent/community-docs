(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6943],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=u(n),f=i,d=m["".concat(l,".").concat(f)]||m[f]||s[f]||o;return n?r.createElement(d,a(a({ref:t},p),{},{components:n})):r.createElement(d,a({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},966:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var r=n(2122),i=n(9756),o=(n(7294),n(3905)),a=["components"],c={title:"Tips"},l=void 0,u={unversionedId:"LuaScript/Tips",id:"LuaScript/Tips",isDocsHomePage:!1,title:"Tips",description:"Some extra tips for using LuaScript.",source:"@site/docs/LuaScript/5.Tips.md",sourceDirName:"LuaScript",slug:"/LuaScript/Tips",permalink:"/community-docs/docs/LuaScript/Tips",editUrl:"https://github.com/BattleTalent/community-docs/docs/LuaScript/5.Tips.md",version:"current",sidebarPosition:5,frontMatter:{title:"Tips"},sidebar:"docs",previous:{title:"UnlockContentConfig - IsItemUnlockedAndEnabled",permalink:"/community-docs/docs/LuaScript/Reference by category/Others/snippet-unlockcontentconfig-IsItemUnlockedAndEnabled"},next:{title:"Damage Pipeline",permalink:"/community-docs/docs/details/damage-pipeline"}},p=[{value:"Namespaces",id:"namespaces",children:[]},{value:"Static functions",id:"static-functions",children:[]}],s={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Some extra tips for using LuaScript."),(0,o.kt)("h2",{id:"namespaces"},"Namespaces"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"namespace of CSharp code is ",(0,o.kt)("inlineCode",{parentName:"li"},"CS")," in lua"),(0,o.kt)("li",{parentName:"ul"},"namespace CrossLink is ",(0,o.kt)("inlineCode",{parentName:"li"},"CL")," in lua, CL == CS.CrossLink"),(0,o.kt)("li",{parentName:"ul"},"namespace UnityEngine is ",(0,o.kt)("inlineCode",{parentName:"li"},"UE")," in lua, UE == CS.UnityEngine")),(0,o.kt)("h2",{id:"static-functions"},"Static functions"),(0,o.kt)("p",null,"Calling a static function should use ",(0,o.kt)("inlineCode",{parentName:"p"},".")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},":")," in lua.\nExample:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Normal function call: ",(0,o.kt)("inlineCode",{parentName:"li"},"object:TestFunction()"),"."),(0,o.kt)("li",{parentName:"ul"},"Static function call: ",(0,o.kt)("inlineCode",{parentName:"li"},"object.TestFunction()"),".")))}m.isMDXComponent=!0}}]);