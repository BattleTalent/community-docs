(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8720],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return y}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(r),y=a,f=d["".concat(l,".").concat(y)]||d[y]||s[y]||o;return r?n.createElement(f,c(c({ref:t},u),{},{components:r})):n.createElement(f,c({ref:t},u))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6634:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),c=["components"],i={title:"Add HP to player"},l=void 0,p={unversionedId:"LuaScript/Reference by category/Player/snippet-add-hp",id:"LuaScript/Reference by category/Player/snippet-add-hp",isDocsHomePage:!1,title:"Add HP to player",description:"Adds 20 HP to the player.",source:"@site/docs/LuaScript/4.Reference by category/6.Player/snippet-add-hp.md",sourceDirName:"LuaScript/4.Reference by category/6.Player",slug:"/LuaScript/Reference by category/Player/snippet-add-hp",permalink:"/community-docs/docs/LuaScript/Reference by category/Player/snippet-add-hp",editUrl:"https://github.com/BattleTalent/community-docs/docs/LuaScript/4.Reference by category/6.Player/snippet-add-hp.md",version:"current",frontMatter:{title:"Add HP to player"},sidebar:"docs",previous:{title:"Event - OnModToggle",permalink:"/community-docs/docs/LuaScript/Reference by category/Mod/snippet-event-on-mod-toggle"},next:{title:"Change weapon stats",permalink:"/community-docs/docs/LuaScript/Reference by category/Weapon/Hit/snippet-change-weapon-stats"}},u=[{value:"Example",id:"example",children:[]},{value:"User Variables",id:"user-variables",children:[]},{value:"FAQ",id:"faq",children:[{value:"Can I also do this for mana?",id:"can-i-also-do-this-for-mana",children:[]}]}],s={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Adds 20 HP to the player."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"local player = CL.InteractCharacter.PlayerInstance\nif player == nil then\n    return\nend\n\nplayer.attr:AddHp(20)\n")),(0,o.kt)("h2",{id:"user-variables"},"User Variables"),(0,o.kt)("p",null,"No user variables."),(0,o.kt)("h2",{id:"faq"},"FAQ"),(0,o.kt)("h3",{id:"can-i-also-do-this-for-mana"},"Can I also do this for mana?"),(0,o.kt)("p",null,"Yes you can! use ",(0,o.kt)("inlineCode",{parentName:"p"},"AddMp()")," to add mana. More information can be found ",(0,o.kt)("a",{parentName:"p",href:"https://battletalent.github.io/BTModToolkit/class_cross_link_1_1_player_combat_attr.html"},"here"),"."))}d.isMDXComponent=!0}}]);