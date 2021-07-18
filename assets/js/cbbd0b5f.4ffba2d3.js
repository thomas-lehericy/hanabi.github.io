/*! For license information please see cbbd0b5f.4ffba2d3.js.LICENSE.txt */
(self.webpackChunkhanabi_github_io=self.webpackChunkhanabi_github_io||[]).push([[4500],{8173:function(e,t,n){"use strict";function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function r(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}n.d(t,{Z:function(){return r}})},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return g}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),g=r,d=m["".concat(l,".").concat(g)]||m[g]||p[g]||a;return n?i.createElement(d,o(o({ref:t},u),{},{components:n})):i.createElement(d,o({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6679:function(e){e.exports={mainSidebar:["about",{"Beginner's Guide":["beginner","beginner/card-layout",{"The Chop":["beginner/chop","beginner/chop-question-1","beginner/chop-question-2","beginner/chop-question-3","beginner/chop-question-4"]},"beginner/card-notes","beginner/two-types-of-clues",{"1 - Play Clues":["beginner/play-clues","beginner/play-clues-question-1","beginner/play-clues-question-2","beginner/delayed-play-clues","beginner/delayed-play-clues-question-1","beginner/delayed-play-clues-question-2","beginner/delayed-play-clues-question-3"]},{"2 - Save Clues":["beginner/save-clues","beginner/5-save","beginner/5-save-question-1","beginner/5-save-question-2","beginner/2-save","beginner/2-save-question-1","beginner/2-save-question-2","beginner/2-save-question-3","beginner/critical-save","beginner/critical-save-question-1","beginner/critical-save-question-2","beginner/critical-save-question-3","beginner/critical-save-question-4"]},{"Clue Interpretation":["beginner/single-card-focus","beginner/single-card-focus-question-1","beginner/single-card-focus-question-2","beginner/single-card-focus-question-3","beginner/single-card-focus-question-4","beginner/clue-interpretation","beginner/clue-interpretation-question-1","beginner/clue-interpretation-question-2","beginner/clue-interpretation-question-3","beginner/clue-interpretation-question-4"]},"beginner/three-main-principles",{"1 - Good Touch Principle":["beginner/good-touch-principle","beginner/good-touch-principle-question-1","beginner/good-touch-principle-question-2","beginner/good-touch-principle-question-3","beginner/good-touch-principle-question-4"]},{"2 - Save Principle":["beginner/save-principle","beginner/save-principle-question-1","beginner/save-principle-question-2"]},{"3 - Minimum Clue Value Principle":["beginner/minimum-clue-value-principle","beginner/minimum-clue-value-principle-question-1"]},{"The Early Game":["beginner/early-game","beginner/early-game-question-1","beginner/early-game-question-2","beginner/early-game-question-3","beginner/early-game-question-4"]},{"General Strategy":["beginner/other-general-strategy","beginner/other-general-strategy-question-1","beginner/other-general-strategy-question-2","beginner/other-general-strategy-question-3","beginner/other-general-strategy-question-4","beginner/other-general-strategy-question-5"]},{"Special Moves":["beginner/special-moves","beginner/prompt","beginner/prompt-question-1","beginner/prompt-question-2","beginner/prompt-question-3","beginner/finesse","beginner/finesse-question-1","beginner/finesse-question-2"]},"beginner/next-steps"]},"how-to-join","learning-path",{"Basic Strategies":["reference","first-principles","level-1","level-2","level-3","level-4","level-5","level-6","level-7","level-8","level-9","level-10","level-11","level-12","level-13","level-14","level-15","level-16","level-17","level-18","level-19","level-20","level-21","level-22","level-23"]},{"Advanced Strategies":["extras","extras/play-clues","extras/save-clues","extras/fix-clues","extras/discards-misplays","extras/chop-moves","extras/special-finesses","extras/special-bluffs","extras/suboptimal-moves","extras/pushes-pulls","extras/signal-shifting","extras/ejections","extras/discharges","extras/charms","extras/ejection-extensions","extras/miscellaneous"]},{"Variant Specific":["variant-specific","variant-specific/3-suits","variant-specific/black","variant-specific/black-rainbow","variant-specific/brown","variant-specific/clue-starved","variant-specific/color-blind","variant-specific/cow-pig","variant-specific/dark-null","variant-specific/dark-omni-gray-pink","variant-specific/dark-pink","variant-specific/dark-prism","variant-specific/dark-rainbow","variant-specific/deceptive-fives","variant-specific/dual-color-3-suits","variant-specific/dual-color-6-suits","variant-specific/dual-color","variant-specific/duck","variant-specific/extremely-ambiguous","variant-specific/muddy-rainbow-cocoa-rainbow","variant-specific/null","variant-specific/number-blind","variant-specific/number-mute","variant-specific/omni","variant-specific/pink","variant-specific/pink-omni","variant-specific/pink-ones","variant-specific/prism","variant-specific/rainbow","variant-specific/rainbow-muddy-rainbow","variant-specific/rainbow-ones-rainbow-fives","variant-specific/reversed","variant-specific/special-fives","variant-specific/throw-it-in-a-hole","variant-specific/totally-blind","variant-specific/up-or-down","variant-specific/white","variant-specific/no-positive-clues"]},"convention-attribution"]}},1961:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var i=n(8173),r=n(7294),a=n(5774),o=n(6679),s=o.mainSidebar.find((function(e){return e["Beginner's Guide"]}))["Beginner's Guide"],l=[];!function e(t,n){for(var r,a=(0,i.Z)(n);!(r=a()).done;){var o=r.value;"string"==typeof o?t.push(o):e(t,Object.values(o)[0])}}(l,s),"beginner"===l[0]&&l.shift();var c=l.length;function u(e){var t=e.id,n=l.findIndex((function(e){return"beginner/"+t===e}));if(-1===n)throw new Error("page id not found in sidebar");var i=Math.round((n+1)/c*100);return(0,r.useEffect)((function(){document.querySelector("main > div > div > div:nth-child(2)").append(document.querySelector("#percent")),document.querySelector("#percent").style.display=null})),r.createElement("div",{id:"percent",style:{position:"fixed",display:"none",width:"8em",height:"8em"}},r.createElement(a.Ip,{value:i,text:i+"%"}))}},8764:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return g}});var i=n(2122),r=n(9756),a=(n(7294),n(3905)),o=n(1961),s=["components"],l={id:"early-game",title:"The Early Game"},c=void 0,u={unversionedId:"beginner/early-game",id:"beginner/early-game",isDocsHomePage:!1,title:"The Early Game",description:"- In Hanabi, the beginning of the game can be stressful - there can be a lot of important cards on chop. For this reason, it is nice if players can be certain that their teammates will give a clue instead of discarding.",source:"@site/docs/beginner/early-game.md",sourceDirName:"beginner",slug:"/beginner/early-game",permalink:"/docs/beginner/early-game",editUrl:"https://github.com/hanabi/hanabi.github.io/edit/main/docs/beginner/early-game.md",version:"current",frontMatter:{id:"early-game",title:"The Early Game"},sidebar:"mainSidebar",previous:{title:"Minimum Clue Value Principle (Question 1)",permalink:"/docs/beginner/minimum-clue-value-principle-question-1"},next:{title:"The Early Game (Question 1)",permalink:"/docs/beginner/early-game-question-1"}},p=[{value:"The 5 Stall (Cluing Off Chop 5&#39;s)",id:"the-5-stall-cluing-off-chop-5s",children:[]}],m={toc:p};function g(e){var t=e.components,n=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{id:"early-game",mdxType:"BeginnersGuideProgress"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In Hanabi, the beginning of the game can be stressful - there can be a lot of important cards on chop. For this reason, it is nice if players can be certain that their teammates will give a clue instead of discarding."),(0,a.kt)("li",{parentName:"ul"},"We formalize this concept as ",(0,a.kt)("em",{parentName:"li"},"The Early Game"),". The ",(0,a.kt)("em",{parentName:"li"},"Early Game")," is defined as the period of time before someone discards for the first time. When they do, they initiate the ",(0,a.kt)("em",{parentName:"li"},"Mid-Game"),"."),(0,a.kt)("li",{parentName:"ul"},"Everyone agrees that they ",(0,a.kt)("strong",{parentName:"li"},"must"),' "extinguish" all of the available ',(0,a.kt)("em",{parentName:"li"},"Play Clues")," and ",(0,a.kt)("em",{parentName:"li"},"Save Clues")," before initiating the ",(0,a.kt)("em",{parentName:"li"},"Mid-Game"),". (There are no cards in the discard pile yet, but ",(0,a.kt)("em",{parentName:"li"},"Save Clues")," still need to be given to all of the 5's on chop and all of the 2's on chop that are not present in someone else's hand.)"),(0,a.kt)("li",{parentName:"ul"},"Furthermore, in the ",(0,a.kt)("em",{parentName:"li"},"Early Game"),", you can do a special move called a ",(0,a.kt)("em",{parentName:"li"},"5 Stall"),"; see below.")),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"the-5-stall-cluing-off-chop-5s"},"The 5 Stall (Cluing Off Chop 5's)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Normally, you are only allowed to give a ",(0,a.kt)("em",{parentName:"li"},"Save Clue")," to a 5 if it is on chop. So if you use number 5 to clue a 5 that is ",(0,a.kt)("strong",{parentName:"li"},"not")," on chop, then it will typically look like a ",(0,a.kt)("em",{parentName:"li"},"Play Clue")," on that 5 (or some other advanced strategy)."),(0,a.kt)("li",{parentName:"ul"},"As a special exception, in the ",(0,a.kt)("em",{parentName:"li"},"Early Game"),", you ",(0,a.kt)("strong",{parentName:"li"},"are")," allowed to clue number 5 as a ",(0,a.kt)("em",{parentName:"li"},"Save Clue"),' to off chop 5\'s. Doing this is just interpreted as a "stall" clue and that you are trying to extend the ',(0,a.kt)("em",{parentName:"li"},"Early Game")," for a little bit longer."),(0,a.kt)("li",{parentName:"ul"},"However, you are ",(0,a.kt)("strong",{parentName:"li"},"only"),' allowed to do this if there is nothing else to do, meaning that all of the "normal" ',(0,a.kt)("em",{parentName:"li"},"Play Clues")," and ",(0,a.kt)("em",{parentName:"li"},"Save Clues")," have been extinguished."),(0,a.kt)("li",{parentName:"ul"},"Normally, ",(0,a.kt)("em",{parentName:"li"},"5 Stalls")," are only performed in the ",(0,a.kt)("em",{parentName:"li"},"Early Game"),". However, you might see someone do a ",(0,a.kt)("em",{parentName:"li"},"5 Stall")," in the ",(0,a.kt)("em",{parentName:"li"},"Mid-Game")," if they are in a special situation where they are not allowed to discard.")))}g.isMDXComponent=!0},5774:function(e,t,n){"use strict";n.d(t,{Ip:function(){return l}});var i=n(7294),r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function a(e){var t=e.className,n=e.counterClockwise,r=e.dashRatio,a=e.pathRadius,l=e.strokeWidth,c=e.style;return(0,i.createElement)("path",{className:t,style:Object.assign({},c,s({pathRadius:a,dashRatio:r,counterClockwise:n})),d:o({pathRadius:a,counterClockwise:n}),strokeWidth:l,fillOpacity:0})}function o(e){var t=e.pathRadius,n=e.counterClockwise?1:0;return"\n      M 50,50\n      m 0,-"+t+"\n      a "+t+","+t+" "+n+" 1 1 0,"+2*t+"\n      a "+t+","+t+" "+n+" 1 1 0,-"+2*t+"\n    "}function s(e){var t=e.counterClockwise,n=e.dashRatio,i=e.pathRadius,r=2*Math.PI*i,a=(1-n)*r;return{strokeDasharray:r+"px "+r+"px",strokeDashoffset:(t?-a:a)+"px"}}var l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},t.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},t.prototype.getPathRatio=function(){var e=this.props,t=e.value,n=e.minValue,i=e.maxValue;return(Math.min(Math.max(t,n),i)-n)/(i-n)},t.prototype.render=function(){var e=this.props,t=e.circleRatio,n=e.className,r=e.classes,o=e.counterClockwise,s=e.styles,l=e.strokeWidth,c=e.text,u=this.getPathRadius(),p=this.getPathRatio();return(0,i.createElement)("svg",{className:r.root+" "+n,style:s.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?(0,i.createElement)("circle",{className:r.background,style:s.background,cx:50,cy:50,r:50}):null,(0,i.createElement)(a,{className:r.trail,counterClockwise:o,dashRatio:t,pathRadius:u,strokeWidth:l,style:s.trail}),(0,i.createElement)(a,{className:r.path,counterClockwise:o,dashRatio:p*t,pathRadius:u,strokeWidth:l,style:s.path}),c?(0,i.createElement)("text",{className:r.text,style:s.text,x:50,y:50},c):null)},t.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},t}(i.Component)}}]);