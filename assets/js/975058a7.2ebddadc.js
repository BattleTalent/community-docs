(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4212],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return d},kt:function(){return f}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(a),f=o,m=c["".concat(l,".").concat(f)]||c[f]||u[f]||r;return a?n.createElement(m,i(i({ref:t},d),{},{components:a})):n.createElement(m,i({ref:t},d))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1687:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var n=a(2122),o=a(9756),r=(a(7294),a(3905)),i=["components"],s={},l="Modify Avatar HandPose",p={unversionedId:"support-mod-types/Avatar/Tutorials/modify-avatar-hand-pose",id:"support-mod-types/Avatar/Tutorials/modify-avatar-hand-pose",isDocsHomePage:!1,title:"Modify Avatar HandPose",description:'Note: The prefixes used in the tutorial are "WMD\\", which can be replaced with your own prefix, and you will need to change the prefix in the AddressableConfig(Assets/Resources/AddressableConfig) file. Once you have changed the prefix, you will need to fill in your new prefix instead of "WMD\\" in the tutorial.',source:"@site/docs/support-mod-types/6.Avatar/Tutorials/10.modify-avatar-hand-pose.md",sourceDirName:"support-mod-types/6.Avatar/Tutorials",slug:"/support-mod-types/Avatar/Tutorials/modify-avatar-hand-pose",permalink:"/community-docs/docs/support-mod-types/Avatar/Tutorials/modify-avatar-hand-pose",editUrl:"https://github.com/BattleTalent/community-docs/docs/support-mod-types/6.Avatar/Tutorials/10.modify-avatar-hand-pose.md",version:"current",sidebarPosition:10,frontMatter:{},sidebar:"docs",previous:{title:"Basic - Create an avatar mod",permalink:"/community-docs/docs/support-mod-types/Avatar/Tutorials/create-an-avatar-mod"},next:{title:"Avatar Clothing",permalink:"/community-docs/docs/support-mod-types/Avatar/Tutorials/avatar-clothing"}},d=[],u={toc:d};function c(e){var t=e.components,s=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"modify-avatar-handpose"},"Modify Avatar HandPose"),(0,r.kt)("p",null,'Note: The prefixes used in the tutorial are "WMD',"_",'", which can be replaced with your own prefix, and you will need to change the prefix in the AddressableConfig(Assets/Resources/AddressableConfig) file. Once you have changed the prefix, you will need to fill in your new prefix instead of "WMD',"_",'" in the tutorial.'),(0,r.kt)("h4",{id:"1install-the-handposetool-mod"},"1.Install the HandPoseTool Mod"),(0,r.kt)("p",null,"HandPoseTool Mod path:Asset/Toolkit/HandPoseHelper. It has been built so just copy the mod files to the corresponding path on Windows or Quest."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To run on Windows: ",(0,r.kt)("inlineCode",{parentName:"li"},"C:\\Users[username]\\AppData\\LocalLow\\CyDream\\BattleTalent\\Mods")),(0,r.kt)("li",{parentName:"ul"},"To run on Quest: ",(0,r.kt)("inlineCode",{parentName:"li"},"/sdcard/Android/data/com.CyDream.BattleTalent/files/Mods/"))),(0,r.kt)("p",null,"More details about how to install Mod please check  ",(0,r.kt)("a",{parentName:"p",href:"/docs/"},"Quick Start"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"CreateFolder",src:a(3591).Z})),(0,r.kt)("h4",{id:"2switch-avatar-in-the-game"},"2.Switch Avatar in the Game"),(0,r.kt)("p",null,"Switch to the Avatar you need to modify in the game."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"CreateFolder",src:a(8773).Z})),(0,r.kt)("h4",{id:"3use-handposetool"},"3.Use HandPoseTool"),(0,r.kt)("p",null,"Spawn the ",(0,r.kt)("strong",{parentName:"p"},"HandPoseTool")," and place it in the hand slot."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"CreateFolder",src:a(1713).Z})),(0,r.kt)("p",null,"Spawn weapons that use the ",(0,r.kt)("inlineCode",{parentName:"p"},"HandPose")," you need to modify.\nHold it with the other hand.\nIn this case the panel of the handPoseTool shows the HandPose information of the gripping hand."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"CreateFolder",src:a(3605).Z})),(0,r.kt)("p",null,"Using the hand with the HandPoseTool placed:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"You can press ",(0,r.kt)("strong",{parentName:"li"},"Trigger")," to select the parameter to be modified."),(0,r.kt)("li",{parentName:"ol"},"Use the ",(0,r.kt)("strong",{parentName:"li"},"joystick")," to adjust the values."),(0,r.kt)("li",{parentName:"ol"},"For ease of operation, you can ",(0,r.kt)("strong",{parentName:"li"},"disable character movement")," by pressing and holding the trigger, and release it by pressing and holding it again.")),(0,r.kt)("h4",{id:"4use-adjusted-values"},"4.Use adjusted values"),(0,r.kt)("p",null,"Back to  ",(0,r.kt)("a",{parentName:"p",href:"create-an-avatar-mod"},"Create a avatar mod")," step 6. Use the adjusted values on your ",(0,r.kt)("inlineCode",{parentName:"p"},"AvatarInfo"),", taking care to distinguish between left and right handedness."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"CreateFolder",src:a(8187).Z})),(0,r.kt)("p",null,"Done\uff01"))}c.isMDXComponent=!0},3605:function(e,t,a){"use strict";t.Z=a.p+"assets/images/ModifyHandPose-26b4e5190b53b8f8cb68eef4a3596201.png"},8773:function(e,t,a){"use strict";t.Z=a.p+"assets/images/SelectAvatar-eb993c3a40dc3ba214316f44a3e9895e.png"},1713:function(e,t,a){"use strict";t.Z=a.p+"assets/images/SpawnHandPoseTool-4ae11045f7d075bed8c280345a4ee9e9.png"},3591:function(e,t,a){"use strict";t.Z=a.p+"assets/images/ToolPath-9f01c1dbece796e4345334ccae1e298f.png"},8187:function(e,t,a){"use strict";t.Z=a.p+"assets/images/UseValue-bed3aee60ba29ee6f1b8066192dab217.png"}}]);