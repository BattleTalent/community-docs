(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1852],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var a=r.createContext({}),p=function(t){var e=r.useContext(a),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},c=function(t){var e=p(t.components);return r.createElement(a.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,a=t.parentName,c=u(t,["components","mdxType","originalType","parentName"]),d=p(n),f=o,y=d["".concat(a,".").concat(f)]||d[f]||l[f]||i;return n?r.createElement(y,s(s({ref:e},c),{},{components:n})):r.createElement(y,s({ref:e},c))}));function f(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,s=new Array(i);s[0]=d;var u={};for(var a in e)hasOwnProperty.call(e,a)&&(u[a]=e[a]);u.originalType=t,u.mdxType="string"==typeof t?t:o,s[1]=u;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6633:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return u},contentTitle:function(){return a},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),s=["components"],u={title:"InputDetection"},a=void 0,p={unversionedId:"snippets/snippet-input-detection",id:"snippets/snippet-input-detection",isDocsHomePage:!1,title:"InputDetection",description:"Checks if a button is pressed",source:"@site/docs/snippets/snippet-input-detection.md",sourceDirName:"snippets",slug:"/snippets/snippet-input-detection",permalink:"/community-docs/docs/snippets/snippet-input-detection",editUrl:"https://github.com/BattleTalent/community-docs/docs/snippets/snippet-input-detection.md",version:"current",frontMatter:{title:"InputDetection"},sidebar:"docs",previous:{title:"CL - PhysicsHelper - IgnoreCollisions",permalink:"/community-docs/docs/snippets/snippet-ignore-collisions"},next:{title:"Instantiate Weapon",permalink:"/community-docs/docs/snippets/snippet-instantiate-weapon"}},c=[{value:"Example",id:"example",children:[]},{value:"User Variables",id:"user-variables",children:[]},{value:"FAQ",id:"faq",children:[{value:"Any other functions I can use with buttons?",id:"any-other-functions-i-can-use-with-buttons",children:[]}]}],l={toc:c};function d(t){var e=t.components,n=(0,o.Z)(t,s);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Checks if a button is pressed"),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'local player = CL.InteractCharacter.PlayerInstance\nif player == nil then\n    return\nend\n\nlocal leftHand = player.hands[1]\nlocal rightHand = player.hands[0]\n\nlocal xButton = leftHand.inputs[CL.VRTKInputButton.ButtonType.ButtonOne]\nlocal yButton = leftHand.inputs[CL.VRTKInputButton.ButtonType.ButtonTwo]\nlocal aButton = rightHand.inputs[CL.VRTKInputButton.ButtonType.ButtonOne]\nlocal bButton = rightHand.inputs[CL.VRTKInputButton.ButtonType.ButtonTwo]\n\nif xButton.IsPressed then\n    print("you pressed the X button")\nend\n\nif yButton.IsPressed then\n    print("you pressed the Y button")\nend\n\nif aButton.IsPressed then\n    print("you pressed the A button")\nend\n\nif bButton.IsPressed then\n    print("you pressed the B button")\nend\n')),(0,i.kt)("h2",{id:"user-variables"},"User Variables"),(0,i.kt)("p",null,"No user variables."),(0,i.kt)("h2",{id:"faq"},"FAQ"),(0,i.kt)("h3",{id:"any-other-functions-i-can-use-with-buttons"},"Any other functions I can use with buttons?"),(0,i.kt)("p",null,"Yes! you can also check if it's being touched, heldDown, and more! Check ",(0,i.kt)("a",{parentName:"p",href:"https://battletalent.github.io/BTModToolkit/class_cross_link_1_1_v_r_t_k_input_button.html"},"here")))}d.isMDXComponent=!0}}]);