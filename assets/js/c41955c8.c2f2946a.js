(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9806],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return n?r.createElement(g,a(a({ref:t},c),{},{components:n})):r.createElement(g,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var p=2;p<l;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7469:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=n(2122),i=n(9756),l=(n(7294),n(3905)),a=["components"],o={title:"Skill - Toggle"},s=void 0,p={unversionedId:"snippets/snippet-skill-toggle",id:"snippets/snippet-skill-toggle",isDocsHomePage:!1,title:"Skill - Toggle",description:"A skill that will activate when pushing down the trigger button & deactivate when doing it again.",source:"@site/docs/snippets/snippet-skill-toggle.md",sourceDirName:"snippets",slug:"/snippets/snippet-skill-toggle",permalink:"/community-docs/docs/snippets/snippet-skill-toggle",editUrl:"https://github.com/BattleTalent/community-docs/docs/snippets/snippet-skill-toggle.md",version:"current",frontMatter:{title:"Skill - Toggle"},sidebar:"docs",previous:{title:"Skill - Instant",permalink:"/community-docs/docs/snippets/snippet-skill-instant"},next:{title:"SphereCast",permalink:"/community-docs/docs/snippets/snippet-sphere-casting"}},c=[{value:"Example",id:"example",children:[]},{value:"User Variables",id:"user-variables",children:[]},{value:"FAQ",id:"faq",children:[{value:"Where do I add this script?",id:"where-do-i-add-this-script",children:[]},{value:"Why is the function called multiple times when I trigger the skill?",id:"why-is-the-function-called-multiple-times-when-i-trigger-the-skill",children:[]}]}],u={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"A skill that will activate when pushing down the trigger button & deactivate when doing it again."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Remember:")," ",(0,l.kt)("inlineCode",{parentName:"p"},"Instant skill")," should be checked in the ",(0,l.kt)("inlineCode",{parentName:"p"},"InteractTriggerX")," component for a skill to be toggleable."),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'local table = {}\n\nfunction table:Awake()\n    self.isOpen = false\nend\n\nfunction table:UpdateSkill()\n    local shootInterval = self.shootInterval or 0.1\n    local st = self.shootTime or 0\n    local ct = UE.Time.time\n    if ct - st < shootInterval then\n        return\n    end\n\n    self:PullTrigger()\nend\n\nfunction table:PullTrigger()\n    if (self.isOpen) then\n        self.isOpen = self.isOpen == false;\n\n        print("Toggle skill deactivated!")\n        return\n    end\n    \n    self.isOpen = self.isOpen == false;\n\n    print("Toggle skill activated!")\nend\n\nreturn Class(nil,nil,table)\n')),(0,l.kt)("h2",{id:"user-variables"},"User Variables"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Component"),(0,l.kt)("th",{parentName:"tr",align:null},"variable"),(0,l.kt)("th",{parentName:"tr",align:null},"optional"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"self.shootInterval")),(0,l.kt)("td",{parentName:"tr",align:null},"yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"self.shootTime")),(0,l.kt)("td",{parentName:"tr",align:null},"yes")))),(0,l.kt)("h2",{id:"faq"},"FAQ"),(0,l.kt)("h3",{id:"where-do-i-add-this-script"},"Where do I add this script?"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"UpdateSkill")," is a function that can be called when adding a luascript to the ",(0,l.kt)("inlineCode",{parentName:"p"},"InteractTriggerX")," component."),(0,l.kt)("h3",{id:"why-is-the-function-called-multiple-times-when-i-trigger-the-skill"},"Why is the function called multiple times when I trigger the skill?"),(0,l.kt)("p",null,"Make sure ",(0,l.kt)("inlineCode",{parentName:"p"},"Instant skill")," is ",(0,l.kt)("strong",{parentName:"p"},"CHECKED")," in the ",(0,l.kt)("inlineCode",{parentName:"p"},"InteractTriggerX")," component."))}d.isMDXComponent=!0}}]);