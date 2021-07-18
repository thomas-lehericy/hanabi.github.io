/*! For license information please see 9ab63864.d31e18bc.js.LICENSE.txt */
(self.webpackChunkhanabi_github_io=self.webpackChunkhanabi_github_io||[]).push([[9719,5429,9108,5212,5247,7484,6143,7830,4704,8084,6263,5567,3580,6485,6184,6551,4090,8359,5193,7087,8762,1705,1203,9937],{8173:function(e,t,n){"use strict";function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function r(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}n.d(t,{Z:function(){return r}})},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=i.createContext({}),c=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),g=c(n),d=r,m=g["".concat(o,".").concat(d)]||g[d]||p[d]||a;return n?i.createElement(m,l(l({ref:t},u),{},{components:n})):i.createElement(m,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=g;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<a;c++)l[c]=n[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8215:function(e,t,n){"use strict";var i=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return i.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},5064:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var i=n(7294),r=n(9443);var a=function(){var e=(0,i.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(6010),s="tabItem_1uMI",o="tabItemActive_2DSg";var c=37,u=39;var p=function(e){var t=e.lazy,n=e.block,r=e.defaultValue,p=e.values,g=e.groupId,d=e.className,m=a(),h=m.tabGroupChoices,f=m.setTabGroupChoices,v=(0,i.useState)(r),b=v[0],y=v[1],x=i.Children.toArray(e.children),w=[];if(null!=g){var k=h[g];null!=k&&k!==b&&p.some((function(e){return e.value===k}))&&y(k)}var E=function(e){var t=e.currentTarget,n=w.indexOf(t),i=p[n].value;y(i),null!=g&&(f(g,i),setTimeout((function(){var e,n,i,r,a,l,s,c;(e=t.getBoundingClientRect(),n=e.top,i=e.left,r=e.bottom,a=e.right,l=window,s=l.innerHeight,c=l.innerWidth,n>=0&&a<=c&&r<=s&&i>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},q=function(e){var t,n;switch(e.keyCode){case u:var i=w.indexOf(e.target)+1;n=w[i]||w[0];break;case c:var r=w.indexOf(e.target)-1;n=w[r]||w[w.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},d)},p.map((function(e){var t=e.value,n=e.label;return i.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,l.Z)("tabs__item",s,{"tabs__item--active":b===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:q,onFocus:E,onClick:E},n)}))),t?(0,i.cloneElement)(x.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},x.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},9443:function(e,t,n){"use strict";var i=(0,n(7294).createContext)(void 0);t.Z=i},6679:function(e){e.exports={mainSidebar:["about",{"Beginner's Guide":["beginner","beginner/card-layout",{"The Chop":["beginner/chop","beginner/chop-question-1","beginner/chop-question-2","beginner/chop-question-3","beginner/chop-question-4"]},"beginner/card-notes","beginner/two-types-of-clues",{"1 - Play Clues":["beginner/play-clues","beginner/play-clues-question-1","beginner/play-clues-question-2","beginner/delayed-play-clues","beginner/delayed-play-clues-question-1","beginner/delayed-play-clues-question-2","beginner/delayed-play-clues-question-3"]},{"2 - Save Clues":["beginner/save-clues","beginner/5-save","beginner/5-save-question-1","beginner/5-save-question-2","beginner/2-save","beginner/2-save-question-1","beginner/2-save-question-2","beginner/2-save-question-3","beginner/critical-save","beginner/critical-save-question-1","beginner/critical-save-question-2","beginner/critical-save-question-3","beginner/critical-save-question-4"]},{"Clue Interpretation":["beginner/single-card-focus","beginner/single-card-focus-question-1","beginner/single-card-focus-question-2","beginner/single-card-focus-question-3","beginner/single-card-focus-question-4","beginner/clue-interpretation","beginner/clue-interpretation-question-1","beginner/clue-interpretation-question-2","beginner/clue-interpretation-question-3","beginner/clue-interpretation-question-4"]},"beginner/three-main-principles",{"1 - Good Touch Principle":["beginner/good-touch-principle","beginner/good-touch-principle-question-1","beginner/good-touch-principle-question-2","beginner/good-touch-principle-question-3","beginner/good-touch-principle-question-4"]},{"2 - Save Principle":["beginner/save-principle","beginner/save-principle-question-1","beginner/save-principle-question-2"]},{"3 - Minimum Clue Value Principle":["beginner/minimum-clue-value-principle","beginner/minimum-clue-value-principle-question-1"]},{"The Early Game":["beginner/early-game","beginner/early-game-question-1","beginner/early-game-question-2","beginner/early-game-question-3","beginner/early-game-question-4"]},{"General Strategy":["beginner/other-general-strategy","beginner/other-general-strategy-question-1","beginner/other-general-strategy-question-2","beginner/other-general-strategy-question-3","beginner/other-general-strategy-question-4","beginner/other-general-strategy-question-5"]},{"Special Moves":["beginner/special-moves","beginner/prompt","beginner/prompt-question-1","beginner/prompt-question-2","beginner/prompt-question-3","beginner/finesse","beginner/finesse-question-1","beginner/finesse-question-2"]},"beginner/next-steps"]},"how-to-join","learning-path",{"Basic Strategies":["reference","first-principles","level-1","level-2","level-3","level-4","level-5","level-6","level-7","level-8","level-9","level-10","level-11","level-12","level-13","level-14","level-15","level-16","level-17","level-18","level-19","level-20","level-21","level-22","level-23"]},{"Advanced Strategies":["extras","extras/play-clues","extras/save-clues","extras/fix-clues","extras/discards-misplays","extras/chop-moves","extras/special-finesses","extras/special-bluffs","extras/suboptimal-moves","extras/pushes-pulls","extras/signal-shifting","extras/ejections","extras/discharges","extras/charms","extras/ejection-extensions","extras/miscellaneous"]},{"Variant Specific":["variant-specific","variant-specific/3-suits","variant-specific/black","variant-specific/black-rainbow","variant-specific/brown","variant-specific/clue-starved","variant-specific/color-blind","variant-specific/cow-pig","variant-specific/dark-null","variant-specific/dark-omni-gray-pink","variant-specific/dark-pink","variant-specific/dark-prism","variant-specific/dark-rainbow","variant-specific/deceptive-fives","variant-specific/dual-color-3-suits","variant-specific/dual-color-6-suits","variant-specific/dual-color","variant-specific/duck","variant-specific/extremely-ambiguous","variant-specific/muddy-rainbow-cocoa-rainbow","variant-specific/null","variant-specific/number-blind","variant-specific/number-mute","variant-specific/omni","variant-specific/pink","variant-specific/pink-omni","variant-specific/pink-ones","variant-specific/prism","variant-specific/rainbow","variant-specific/rainbow-muddy-rainbow","variant-specific/rainbow-ones-rainbow-fives","variant-specific/reversed","variant-specific/special-fives","variant-specific/throw-it-in-a-hole","variant-specific/totally-blind","variant-specific/up-or-down","variant-specific/white","variant-specific/no-positive-clues"]},"convention-attribution"]}},1961:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var i=n(8173),r=n(7294),a=n(5774),l=n(6679),s=l.mainSidebar.find((function(e){return e["Beginner's Guide"]}))["Beginner's Guide"],o=[];!function e(t,n){for(var r,a=(0,i.Z)(n);!(r=a()).done;){var l=r.value;"string"==typeof l?t.push(l):e(t,Object.values(l)[0])}}(o,s),"beginner"===o[0]&&o.shift();var c=o.length;function u(e){var t=e.id,n=o.findIndex((function(e){return"beginner/"+t===e}));if(-1===n)throw new Error("page id not found in sidebar");var i=Math.round((n+1)/c*100);return(0,r.useEffect)((function(){document.querySelector("main > div > div > div:nth-child(2)").append(document.querySelector("#percent")),document.querySelector("#percent").style.display=null})),r.createElement("div",{id:"percent",style:{position:"fixed",display:"none",width:"8em",height:"8em"}},r.createElement(a.Ip,{value:i,text:i+"%"}))}},161:function(e,t,n){"use strict";n.r(t),n.d(t,{contentTitle:function(){return $},default:function(){return te},frontMatter:function(){return K},metadata:function(){return J},toc:function(){return Y}});var i,r,a,l,s,o,c,u,p,g,d,m,h,f,v,b,y,x,w,k,E,q,O,C,N,P,S,j,T,_,H,I,R,B,Z,A=n(2122),D=n(9756),M=n(7294),G=n(3905),V=n(1961),W=n(5064),z=n(8215),Q=["title","titleId"];function F(){return(F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function L(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var X=function(e){var t=e.title,n=e.titleId,A=L(e,Q);return M.createElement("svg",F({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",baseProfile:"full",height:500,viewBox:"0 0 944 500",width:944,className:"example","aria-labelledby":n},A),t?M.createElement("title",{id:n},t):null,i||(i=M.createElement("defs",null,M.createElement("filter",{x:0,y:0,width:1,height:1,id:"5-save-question-2_yml__a"},M.createElement("feFlood",{floodColor:"#0ff"})))),r||(r=M.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/red1.svg"})),a||(a=M.createElement("image",{height:100,width:70,x:78,xlinkHref:"/img/pieces/cards/yellow0.svg"})),l||(l=M.createElement("image",{height:100,width:70,x:156,xlinkHref:"/img/pieces/cards/green0.svg"})),s||(s=M.createElement("image",{height:100,width:70,x:234,xlinkHref:"/img/pieces/cards/blue3.svg"})),o||(o=M.createElement("image",{height:100,width:70,x:312,xlinkHref:"/img/pieces/cards/purple2.svg"})),M.createElement("svg",F({height:100,width:90,x:464,className:"example","aria-labelledby":n},A),t?M.createElement("title",{id:n},t):null,c||(c=M.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Alice")),u||(u=M.createElement("text",{dominantBaseline:"central",dy:30,filter:"url(#5-save-question-2_yml__a)",x:"0%",y:"50%"},"Clue Giver")),p||(p=M.createElement("text",{dominantBaseline:"central",dy:30,x:"0%",y:"50%"},"Clue Giver"))),M.createElement("svg",F({height:100,width:70,x:554,className:"example","aria-labelledby":n},A),t?M.createElement("title",{id:n},t):null,g||(g=M.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),M.createElement("svg",F({height:100,width:70,x:632,className:"example","aria-labelledby":n},A),t?M.createElement("title",{id:n},t):null,d||(d=M.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),M.createElement("svg",F({height:100,width:70,x:710,className:"example","aria-labelledby":n},A),t?M.createElement("title",{id:n},t):null,m||(m=M.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),M.createElement("svg",F({height:100,width:70,x:788,className:"example","aria-labelledby":n},A),t?M.createElement("title",{id:n},t):null,h||(h=M.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),M.createElement("svg",F({height:100,width:70,x:866,className:"example","aria-labelledby":n},A),t?M.createElement("title",{id:n},t):null,f||(f=M.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),M.createElement("svg",F({height:100,width:90,x:464,y:125,className:"example","aria-labelledby":n},A),t?M.createElement("title",{id:n},t):null,v||(v=M.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Bob"))),b||(b=M.createElement("image",{height:100,width:70,x:554,xlinkHref:"/img/pieces/cards/blue1.svg",y:125})),y||(y=M.createElement("image",{height:100,width:70,x:632,xlinkHref:"/img/pieces/cards/red1.svg",y:125})),x||(x=M.createElement("image",{height:100,width:70,x:710,xlinkHref:"/img/pieces/cards/purple5.svg",y:125})),w||(w=M.createElement("image",{height:100,width:70,x:788,xlinkHref:"/img/pieces/cards/green5.svg",y:125})),k||(k=M.createElement("image",{height:100,width:70,x:866,xlinkHref:"/img/pieces/cards/yellow2.svg",y:125})),M.createElement("svg",F({height:100,width:90,x:464,y:250,className:"example","aria-labelledby":n},A),t?M.createElement("title",{id:n},t):null,E||(E=M.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Cathy"))),q||(q=M.createElement("image",{height:100,width:70,x:554,xlinkHref:"/img/pieces/cards/red4.svg",y:250})),O||(O=M.createElement("image",{height:100,width:70,x:632,xlinkHref:"/img/pieces/cards/yellow5.svg",y:250})),C||(C=M.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:707,y:247})),N||(N=M.createElement("image",{height:100,width:70,x:710,xlinkHref:"/img/pieces/cards/blue5.svg",y:250})),P||(P=M.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:785,y:247})),S||(S=M.createElement("image",{height:100,width:70,x:788,xlinkHref:"/img/pieces/cards/green2.svg",y:250})),j||(j=M.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:863,y:247})),T||(T=M.createElement("image",{height:100,width:70,x:866,xlinkHref:"/img/pieces/cards/yellow2.svg",y:250})),M.createElement("svg",F({height:100,width:90,x:464,y:375,className:"example","aria-labelledby":n},A),t?M.createElement("title",{id:n},t):null,_||(_=M.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Donald"))),H||(H=M.createElement("image",{height:100,width:70,x:554,xlinkHref:"/img/pieces/cards/purple4.svg",y:375})),I||(I=M.createElement("image",{height:100,width:70,x:632,xlinkHref:"/img/pieces/cards/purple4.svg",y:375})),R||(R=M.createElement("image",{height:100,width:70,x:710,xlinkHref:"/img/pieces/cards/blue1.svg",y:375})),B||(B=M.createElement("image",{height:100,width:70,x:788,xlinkHref:"/img/pieces/cards/red5.svg",y:375})),Z||(Z=M.createElement("image",{height:100,width:70,x:866,xlinkHref:"/img/pieces/cards/purple3.svg",y:375})))},U=["components"],K={id:"5-save-question-2",title:"The 5 Save (Question 2)"},$=void 0,J={unversionedId:"beginner/5-save-question-2",id:"beginner/5-save-question-2",isDocsHomePage:!1,title:"The 5 Save (Question 2)",description:"<Tabs",source:"@site/docs/beginner/5-save-question-2.md",sourceDirName:"beginner",slug:"/beginner/5-save-question-2",permalink:"/docs/beginner/5-save-question-2",editUrl:"https://github.com/hanabi/hanabi.github.io/edit/main/docs/beginner/5-save-question-2.md",version:"current",sidebarPosition:5,frontMatter:{id:"5-save-question-2",title:"The 5 Save (Question 2)"},sidebar:"mainSidebar",previous:{title:"The 5 Save (Question 1)",permalink:"/docs/beginner/5-save-question-1"},next:{title:"The 2 Save",permalink:"/docs/beginner/2-save"}},Y=[],ee={toc:Y};function te(e){var t=e.components,n=(0,D.Z)(e,U);return(0,G.kt)("wrapper",(0,A.Z)({},ee,n,{components:t,mdxType:"MDXLayout"}),(0,G.kt)(V.Z,{id:"5-save-question-2",mdxType:"BeginnersGuideProgress"}),(0,G.kt)(W.Z,{defaultValue:"question",values:[{label:"Question",value:"question"},{label:"Solution",value:"solution"}],mdxType:"Tabs"},(0,G.kt)(z.Z,{value:"question",mdxType:"TabItem"},(0,G.kt)("ul",null,(0,G.kt)("li",{parentName:"ul"},"What action should Alice perform?"))),(0,G.kt)(z.Z,{value:"solution",mdxType:"TabItem"},(0,G.kt)("ul",null,(0,G.kt)("li",{parentName:"ul"},"Bob has two 5's, but neither of them are on chop, so they cannot be saved yet."),(0,G.kt)("li",{parentName:"ul"},"Cathy has a 5 and it is on chop.",(0,G.kt)("ul",{parentName:"li"},(0,G.kt)("li",{parentName:"ul"},"(Her chop is slot 2 because the cards on slot 3, slot 4, and slot 5 have a clue on them.)"))),(0,G.kt)("li",{parentName:"ul"},"Donald has one 5, but it is not on chop, so it cannot be saved yet."),(0,G.kt)("li",{parentName:"ul"},"Thus, Alice should clue number 5 to Cathy as a ",(0,G.kt)("em",{parentName:"li"},"5 Save"),".")))),(0,G.kt)(X,{mdxType:"FiveSaveQuestion2"}))}te.isMDXComponent=!0},6010:function(e,t,n){"use strict";function i(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=i(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=i(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})},5774:function(e,t,n){"use strict";n.d(t,{Ip:function(){return o}});var i=n(7294),r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function a(e){var t=e.className,n=e.counterClockwise,r=e.dashRatio,a=e.pathRadius,o=e.strokeWidth,c=e.style;return(0,i.createElement)("path",{className:t,style:Object.assign({},c,s({pathRadius:a,dashRatio:r,counterClockwise:n})),d:l({pathRadius:a,counterClockwise:n}),strokeWidth:o,fillOpacity:0})}function l(e){var t=e.pathRadius,n=e.counterClockwise?1:0;return"\n      M 50,50\n      m 0,-"+t+"\n      a "+t+","+t+" "+n+" 1 1 0,"+2*t+"\n      a "+t+","+t+" "+n+" 1 1 0,-"+2*t+"\n    "}function s(e){var t=e.counterClockwise,n=e.dashRatio,i=e.pathRadius,r=2*Math.PI*i,a=(1-n)*r;return{strokeDasharray:r+"px "+r+"px",strokeDashoffset:(t?-a:a)+"px"}}var o=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},t.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},t.prototype.getPathRatio=function(){var e=this.props,t=e.value,n=e.minValue,i=e.maxValue;return(Math.min(Math.max(t,n),i)-n)/(i-n)},t.prototype.render=function(){var e=this.props,t=e.circleRatio,n=e.className,r=e.classes,l=e.counterClockwise,s=e.styles,o=e.strokeWidth,c=e.text,u=this.getPathRadius(),p=this.getPathRatio();return(0,i.createElement)("svg",{className:r.root+" "+n,style:s.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?(0,i.createElement)("circle",{className:r.background,style:s.background,cx:50,cy:50,r:50}):null,(0,i.createElement)(a,{className:r.trail,counterClockwise:l,dashRatio:t,pathRadius:u,strokeWidth:o,style:s.trail}),(0,i.createElement)(a,{className:r.path,counterClockwise:l,dashRatio:p*t,pathRadius:u,strokeWidth:o,style:s.path}),c?(0,i.createElement)("text",{className:r.text,style:s.text,x:50,y:50},c):null)},t.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},t}(i.Component)}}]);