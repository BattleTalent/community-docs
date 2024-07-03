(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8933],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return h}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=s(t),h=i,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||o;return t?r.createElement(m,l(l({ref:n},p),{},{components:t})):r.createElement(m,l({ref:n},p))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=u;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2676:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var r=t(2122),i=t(9756),o=(t(7294),t(3905)),l=["components"],a={title:"OnColliderEnter"},c=void 0,s={unversionedId:"snippets/snippet-on-collider-enter",id:"snippets/snippet-on-collider-enter",isDocsHomePage:!1,title:"OnColliderEnter",description:"Do things when an object with a rigidBody and collider collides with another collider.",source:"@site/docs/snippets/snippet-on-collider-enter.md",sourceDirName:"snippets",slug:"/snippets/snippet-on-collider-enter",permalink:"/community-docs/docs/snippets/snippet-on-collider-enter",editUrl:"https://github.com/BattleTalent/community-docs/docs/snippets/snippet-on-collider-enter.md",version:"current",frontMatter:{title:"OnColliderEnter"},sidebar:"docs",previous:{title:"Manually drop item",permalink:"/community-docs/docs/snippets/snippet-manually-drop-item"},next:{title:"OnGrab",permalink:"/community-docs/docs/snippets/snippet-on-grab"}},p=[{value:"Example",id:"example",children:[]},{value:"User Variables",id:"user-variables",children:[]},{value:"FAQ",id:"faq",children:[{value:"Where do I add this script?",id:"where-do-i-add-this-script",children:[]},{value:"Any way to see which object I collided into?",id:"any-way-to-see-which-object-i-collided-into",children:[]},{value:"Any way to only trigger when I hit something really hard?",id:"any-way-to-only-trigger-when-i-hit-something-really-hard",children:[]}]}],d={toc:p};function u(e){var n=e.components,t=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Do things when an object with a rigidBody and collider ",(0,o.kt)("strong",{parentName:"p"},"collides")," with another collider."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'local table = {}\n\nfunction table:OnColliderEnter(collision)\n    print("I collided!")\nend\n\nreturn Class(nil,nil,table)\n')),(0,o.kt)("h2",{id:"user-variables"},"User Variables"),(0,o.kt)("p",null,"No user variables."),(0,o.kt)("h2",{id:"faq"},"FAQ"),(0,o.kt)("h3",{id:"where-do-i-add-this-script"},"Where do I add this script?"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"OnColliderEnter")," is a function that can be called from all luascripts as long as the object has a ",(0,o.kt)("inlineCode",{parentName:"p"},"rigidBody")," and a ",(0,o.kt)("inlineCode",{parentName:"p"},"collider")," that is NOT set to ",(0,o.kt)("inlineCode",{parentName:"p"},"OnTrigger"),"."),(0,o.kt)("h3",{id:"any-way-to-see-which-object-i-collided-into"},"Any way to see which object I collided into?"),(0,o.kt)("p",null,"Yes, just call ",(0,o.kt)("inlineCode",{parentName:"p"},"print(collision.gameObject.name)")," to get the name of the object you collided with."),(0,o.kt)("h3",{id:"any-way-to-only-trigger-when-i-hit-something-really-hard"},"Any way to only trigger when I hit something really hard?"),(0,o.kt)("p",null,"Yes, just return when the ",(0,o.kt)("inlineCode",{parentName:"p"},"sqrMagnitude")," is below a certain value."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'local table = {\n    minimumSqrMagnitute = 2,\n}\n\nfunction table:OnColliderEnter(collision)\n    if collision.relativeVelocity.sqrMagnitude < self.minimumSqrMagnitute then\n        return\n    end\n\n    print("I collided really hard!")\nend\n\nreturn Class(nil,nil,table)\n')))}u.isMDXComponent=!0}}]);