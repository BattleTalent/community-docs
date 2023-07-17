(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1443],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7837:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],p={title:"Add HP to player"},s=void 0,c={unversionedId:"snippets/snippet-add-hp",id:"snippets/snippet-add-hp",isDocsHomePage:!1,title:"Add HP to player",description:"Adds 20 HP to the player.",source:"@site/docs/snippets/snippet-add-hp.md",sourceDirName:"snippets",slug:"/snippets/snippet-add-hp",permalink:"/community-docs/docs/snippets/snippet-add-hp",editUrl:"https://github.com/BattleTalent/community-docs/docs/snippets/snippet-add-hp.md",version:"current",frontMatter:{title:"Add HP to player"},sidebar:"docs",previous:{title:"Physics in Unity",permalink:"/community-docs/docs/details/unity-physics"},next:{title:"AddItem",permalink:"/community-docs/docs/snippets/snippet-add-store-item"}},l=[{value:"Example",id:"example",children:[]},{value:"User Variables",id:"user-variables",children:[]},{value:"FAQ",id:"faq",children:[{value:"Can I also do this for mana?",id:"can-i-also-do-this-for-mana",children:[]}]}],u={toc:l};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Adds 20 HP to the player."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"local player = CL.InteractCharacter.PlayerInstance\nif player == nil then\n    return\nend\n\nplayer.attr:AddHp(20)\n")),(0,o.kt)("h2",{id:"user-variables"},"User Variables"),(0,o.kt)("p",null,"No user variables."),(0,o.kt)("h2",{id:"faq"},"FAQ"),(0,o.kt)("h3",{id:"can-i-also-do-this-for-mana"},"Can I also do this for mana?"),(0,o.kt)("p",null,"Yes you can! use ",(0,o.kt)("inlineCode",{parentName:"p"},"AddMp()")," to add mana. More information can be found ",(0,o.kt)("a",{parentName:"p",href:"https://battletalent.github.io/BTModToolkit/class_cross_link_1_1_player_combat_attr.html"},"here"),"."))}d.isMDXComponent=!0}}]);