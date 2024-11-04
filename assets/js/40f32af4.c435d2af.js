(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1065],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return p},kt:function(){return u}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),c=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=c(t.components);return r.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},h=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),h=c(n),u=a,y=h["".concat(s,".").concat(u)]||h[u]||d[u]||i;return n?r.createElement(y,o(o({ref:e},p),{},{components:n})):r.createElement(y,o({ref:e},p))}));function u(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1097:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return h}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=["components"],l={},s="PhysicsUnit",c={unversionedId:"details/physicsunit",id:"details/physicsunit",isDocsHomePage:!1,title:"PhysicsUnit",description:"Access the physics world",source:"@site/docs/details/physicsunit.md",sourceDirName:"details",slug:"/details/physicsunit",permalink:"/community-docs/docs/details/physicsunit",editUrl:"https://github.com/BattleTalent/community-docs/docs/details/physicsunit.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"HitInfo and CollisionEffect",permalink:"/community-docs/docs/details/hitinfo-and-collisioneffect"},next:{title:"Role, Waves and Weapon code names",permalink:"/community-docs/docs/details/role-and-weapon"}},p=[{value:"Access the physics world",id:"access-the-physics-world",children:[]},{value:"Predefined PhysicsUnit Types",id:"predefined-physicsunit-types",children:[]}],d={toc:p};function h(t){var e=t.components,n=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"physicsunit"},"PhysicsUnit"),(0,i.kt)("h3",{id:"access-the-physics-world"},"Access the physics world"),(0,i.kt)("p",null,"Battle Talent is fully driven by physics, so every collider in this game, we can find the logic object they belonged to. That is ",(0,i.kt)("strong",{parentName:"p"},"PhysicsUnit")," for. Btw, if an object doesn't have ",(0,i.kt)("strong",{parentName:"p"},"PhysicsUnit")," attached to, then we treat it as environment."),(0,i.kt)("p",null,"Here is an example to check what we got by a collider or rigidbody:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'local pu = CL.PhysicsUnit.GetPhysicsUnit(collider)\nif (pu == nil || pu:IsScene()) then\n    print("Env")\nelse\n    print(pu.unitType)\nend\n\n-- by default, we use Bottom Up Method, which means, we may get the sub object of another object\n-- if we want to get the root object, then we should use GetPhysicsUnitTopDown instead\nlocal puRB = CL.PhysicsUnit.GetPhysicsUnitTopDown(rigidbody.transform)\nif (puRB == nil || puRB:IsScene()) then\n    print("Env")\nelse\n    print(puRB.unitType)\nend\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"PhysicsUnit")," can be parenting. For example, a character itself is a ",(0,i.kt)("strong",{parentName:"p"},"PhysicsUnit"),"(InteractRole), and the weapon it holding is also a ",(0,i.kt)("strong",{parentName:"p"},"PhysicsUnit"),"(InteractWeapon). So when we got a collider, there's two way to know what it is. For example, if you got the collider of the weapon holding by a character. If we called ",(0,i.kt)("strong",{parentName:"p"},"GetPhysicsUnitTopDown"),", it will return the character(holding the weapon). If we called ",(0,i.kt)("strong",{parentName:"p"},"GetPhysicsUnit"),", it will return the weapon itself."),(0,i.kt)("h3",{id:"predefined-physicsunit-types"},"Predefined PhysicsUnit Types"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"enum name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"class name"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"FlyObject"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://battletalent.github.io/BTModToolkit/class_cross_link_1_1_fly_object.html"},"FlyObject"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"SceneObject"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://battletalent.github.io/BTModToolkit/class_cross_link_1_1_scene_object.html"},"SceneObject"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"InteractRole"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://battletalent.github.io/BTModToolkit/class_cross_link_1_1_full_character_control.html"},"FullCharacterControl"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"InteractWeapon"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://battletalent.github.io/BTModToolkit/class_cross_link_1_1_interact_weapon.html"},"InteractWeapon"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"PlayerRole"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://battletalent.github.io/BTModToolkit/class_cross_link_1_1_player_unit.html"},"PlayerUnit"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"PlayerHand"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://battletalent.github.io/BTModToolkit/class_cross_link_1_1_physics_hand.html"},"PhysicsHand"))))))}h.isMDXComponent=!0}}]);