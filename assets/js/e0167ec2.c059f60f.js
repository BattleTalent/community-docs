(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8670],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=u(r),d=o,f=l["".concat(s,".").concat(d)]||l[d]||m[d]||a;return r?n.createElement(f,c(c({ref:t},p),{},{components:r})):n.createElement(f,c({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=l;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},7987:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return l}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),c=["components"],i={},s="Advanced - Create Combat Room",u={unversionedId:"support-mod-types/Scene/Tutorials/create-combat-room",id:"support-mod-types/Scene/Tutorials/create-combat-room",isDocsHomePage:!1,title:"Advanced - Create Combat Room",description:"Here is an example of creating a battle room in a scene.",source:"@site/docs/support-mod-types/3.Scene/Tutorials/2.create-combat-room.md",sourceDirName:"support-mod-types/3.Scene/Tutorials",slug:"/support-mod-types/Scene/Tutorials/create-combat-room",permalink:"/community-docs/docs/support-mod-types/Scene/Tutorials/create-combat-room",editUrl:"https://github.com/BattleTalent/community-docs/docs/support-mod-types/3.Scene/Tutorials/2.create-combat-room.md",version:"current",sidebarPosition:2,frontMatter:{},sidebar:"docs",previous:{title:"Basic - Scene Mod",permalink:"/community-docs/docs/support-mod-types/Scene/Tutorials/create-a-scene-mod"},next:{title:"create-a-role-mod",permalink:"/community-docs/docs/support-mod-types/Role/Tutorials/create-a-role-mod"}},p=[],m={toc:p};function l(e){var t=e.components,i=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"advanced---create-combat-room"},"Advanced - Create Combat Room"),(0,a.kt)("p",null,"Here is an example of creating a battle room in a scene."),(0,a.kt)("h4",{id:"1place-stonegatewithcombat"},"1.Place StoneGateWithCombat"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(6884).Z})),(0,a.kt)("h4",{id:"2set-the-size-of-the-areatrigger-under-stonegate-to-cover-the-entire-room"},"2.Set the size of the AreaTrigger under StoneGate to cover the entire room."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(2034).Z})),(0,a.kt)("h4",{id:"3create-the-wavegenerator-file"},"3.Create the WaveGenerator file"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(6105).Z})),(0,a.kt)("p",null,'Fill in the number of enemies generated at the same time in the "SpawnNum" field, the number will go up in the array as you kill more enemies. Fill in the enemy name in the "Pool" field.'),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(1139).Z})),(0,a.kt)("p",null,"Specify WaveGenerator to ConfigCombat under StoneGateWithCombat."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(7615).Z})),(0,a.kt)("h4",{id:"5adjust-the-position-of-the-spawn-points-of-eventtoconfigcombat-you-can-increase-or-decrease-the-generation-points-as-needed"},"5.Adjust the position of the spawn points of EventToConfigCombat, you can increase or decrease the generation points as needed."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(73).Z})),(0,a.kt)("h4",{id:"6done"},"6.Done!"))}l.isMDXComponent=!0},7615:function(e,t,r){"use strict";t.Z=r.p+"assets/images/configcombat-adc0191ced977251564071f993be7511.png"},1139:function(e,t,r){"use strict";t.Z=r.p+"assets/images/fillwavegenerator-9e03db6902e7a9ccda99c50dd48ff5dc.png"},6884:function(e,t,r){"use strict";t.Z=r.p+"assets/images/place-7b59e465a4a6010100822b6f59caebb1.png"},73:function(e,t,r){"use strict";t.Z=r.p+"assets/images/pointlist-6c98f028db8739c7060f2c3d06714da2.png"},2034:function(e,t,r){"use strict";t.Z=r.p+"assets/images/settrigger-276bb7c0172d5092d7b953f5fcd17ba6.png"},6105:function(e,t,r){"use strict";t.Z=r.p+"assets/images/wavegenerator-7699f4ddc6f811e8bf5bfa51e0058c89.png"}}]);