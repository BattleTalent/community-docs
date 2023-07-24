(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6986],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2131:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return p}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=["components"],c={},s="Create Combat Room",u={unversionedId:"tutorials-advanced/create-combat-room",id:"tutorials-advanced/create-combat-room",isDocsHomePage:!1,title:"Create Combat Room",description:"Here is an example of creating a battle room in a scene.",source:"@site/docs/tutorials-advanced/2.create-combat-room.md",sourceDirName:"tutorials-advanced",slug:"/tutorials-advanced/create-combat-room",permalink:"/community-docs/docs/tutorials-advanced/create-combat-room",editUrl:"https://github.com/BattleTalent/community-docs/docs/tutorials-advanced/2.create-combat-room.md",version:"current",sidebarPosition:2,frontMatter:{},sidebar:"docs",previous:{title:"Create near perfect convex colliders",permalink:"/community-docs/docs/tutorials-advanced/create-near-perfect-convex-colliders"},next:{title:"Create a skin mod",permalink:"/community-docs/docs/tutorials-advanced/create-a-skin-mod"}},l=[],m={toc:l};function p(e){var t=e.components,c=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-combat-room"},"Create Combat Room"),(0,a.kt)("p",null,"Here is an example of creating a battle room in a scene."),(0,a.kt)("h4",{id:"1place-stonegatewithcombat"},"1.Place StoneGateWithCombat"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(4129).Z})),(0,a.kt)("h4",{id:"2set-the-size-of-the-areatrigger-under-stonegate-to-cover-the-entire-room"},"2.Set the size of the AreaTrigger under StoneGate to cover the entire room."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(3080).Z})),(0,a.kt)("h4",{id:"3create-the-wavegenerator-file"},"3.Create the WaveGenerator file"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(1222).Z})),(0,a.kt)("p",null,'Fill in the number of enemies generated at the same time in the "SpawnNum" field, the number will go up in the array as you kill more enemies. Fill in the enemy name in the "Pool" field.'),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(4340).Z})),(0,a.kt)("p",null,"Specify WaveGenerator to ConfigCombat under StoneGateWithCombat."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(3558).Z})),(0,a.kt)("h4",{id:"5adjust-the-position-of-the-spawn-points-of-eventtoconfigcombat-you-can-increase-or-decrease-the-generation-points-as-needed"},"5.Adjust the position of the spawn points of EventToConfigCombat, you can increase or decrease the generation points as needed."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(4751).Z})),(0,a.kt)("h4",{id:"6done"},"6.Done!"))}p.isMDXComponent=!0},3558:function(e,t,n){"use strict";t.Z=n.p+"assets/images/configcombat-adc0191ced977251564071f993be7511.png"},4340:function(e,t,n){"use strict";t.Z=n.p+"assets/images/fillwavegenerator-9e03db6902e7a9ccda99c50dd48ff5dc.png"},4129:function(e,t,n){"use strict";t.Z=n.p+"assets/images/place-7b59e465a4a6010100822b6f59caebb1.png"},4751:function(e,t,n){"use strict";t.Z=n.p+"assets/images/pointlist-6c98f028db8739c7060f2c3d06714da2.png"},3080:function(e,t,n){"use strict";t.Z=n.p+"assets/images/settrigger-276bb7c0172d5092d7b953f5fcd17ba6.png"},1222:function(e,t,n){"use strict";t.Z=n.p+"assets/images/wavegenerator-7699f4ddc6f811e8bf5bfa51e0058c89.png"}}]);