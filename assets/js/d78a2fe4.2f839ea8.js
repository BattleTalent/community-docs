(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7883],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return y}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(r),y=a,d=f["".concat(s,".").concat(y)]||f[y]||u[y]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5624:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return f}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),i=["components"],c={title:"SphereCast"},s=void 0,l={unversionedId:"LuaScript/Reference by category/Physic/snippet-sphere-casting",id:"LuaScript/Reference by category/Physic/snippet-sphere-casting",isDocsHomePage:!1,title:"SphereCast",description:"Casts a sphere along a ray and returns detailed information on what was hit.",source:"@site/docs/LuaScript/4.Reference by category/4.Physic/snippet-sphere-casting.md",sourceDirName:"LuaScript/4.Reference by category/4.Physic",slug:"/LuaScript/Reference by category/Physic/snippet-sphere-casting",permalink:"/community-docs/docs/LuaScript/Reference by category/Physic/snippet-sphere-casting",editUrl:"https://github.com/BattleTalent/community-docs/docs/LuaScript/4.Reference by category/4.Physic/snippet-sphere-casting.md",version:"current",frontMatter:{title:"SphereCast"},sidebar:"docs",previous:{title:"RayCast",permalink:"/community-docs/docs/LuaScript/Reference by category/Physic/snippet-ray-casting"},next:{title:"Event - OnModToggle",permalink:"/community-docs/docs/LuaScript/Reference by category/Mod/snippet-event-on-mod-toggle"}},p=[{value:"Example",id:"example",children:[]},{value:"User Variables",id:"user-variables",children:[]}],u={toc:p};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Casts a sphere along a ray and returns detailed information on what was hit."),(0,o.kt)("p",null,"This is useful when a Raycast does not give enough precision, because you want to find out if an object of a specific size, such as a character, will be able to move somewhere without colliding with anything on the way. Think of the sphere cast like a thick raycast. In this case the ray is specified by a start vector and a direction."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Notes"),": SphereCast will not detect colliders for which the sphere overlaps the collider. Passing a zero radius results in undefined output and doesn't always behave the same as ",(0,o.kt)("a",{parentName:"p",href:"snippet-ray-casting"},"Raycast"),"."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"local forward = self.transformThatYouAreRaycastingFrom:TransformDirection(UE.Vector3.forward);\nlocal ret, hitInfo = UE.Physics.SphereCast(self.transformThatYouAreRaycastingFrom.position, 0.02, forward, 50, CL.LayerDefine.EnvLayerMask.value)\n\nif ret then\n    print(hitInfo.collider.name)\nend\n")),(0,o.kt)("h2",{id:"user-variables"},"User Variables"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Component"),(0,o.kt)("th",{parentName:"tr",align:null},"variable"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Transform"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"self.transformThatYouAreRaycastingFrom"))))))}f.isMDXComponent=!0}}]);