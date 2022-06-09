(()=>{"use strict";var n={294:(n,r,e)=>{e.d(r,{Z:()=>b});var t=e(645),o=e.n(t),i=e(667),a=e.n(i),c=new URL(e(570),e.b),s=new URL(e(102),e.b),p=new URL(e(620),e.b),l=new URL(e(241),e.b),u=new URL(e(907),e.b),f=o()((function(n){return n[1]})),d=a()(c),h=a()(s),g=a()(p),x=a()(l),m=a()(u);f.push([n.id,"@font-face {\r\n    font-family: heroes;\r\n    src: url("+d+");\r\n}\r\n\r\n* {\r\n    font-family: heroes;\r\n    font-size: 100%;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n    color: whitesmoke;\r\n    /* letter-spacing: 2px; */\r\n    text-shadow: 2px 2px #000000;\r\n}\r\n\r\n.bg {\r\n    position: absolute;\r\n    width: 1920px;\r\n    height: 1080px;\r\n    background: url("+h+")\r\n}\r\n\r\n.info-container {\r\n    width: 100vw;\r\n    height: 100vh;\r\n    position: absolute;\r\n    /* left: 104px; */\r\n    /* top: 1039px; */\r\n    /* display: flex; */\r\n}\r\n\r\n.info {\r\n    position: relative;\r\n    /* margin-top: 6px; */\r\n    /* width: 250px; */\r\n    /* height: 21px; */\r\n    text-overflow: ellipsis;\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n    font-size: 19px;\r\n}\r\n\r\n.runner-name-container {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.runner-name-container i {\r\n    font-size: 25px;\r\n    margin-right: 10px;\r\n}\r\n\r\n.runner-container1 {\r\n    position: absolute;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    top: 663px;\r\n    left: 3px;\r\n    width: 532px;\r\n    height: 76px;\r\n}\r\n\r\n.runner1 {\r\n    font-size: 3rem;\r\n    text-align: center;\r\n}\r\n\r\n.runner-container2 {\r\n    position: absolute;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    top: 663px;\r\n    left: 1378px;\r\n    width: 532px;\r\n    height: 76px;\r\n}\r\n\r\n.runner2 {\r\n    font-size: 3rem;\r\n    text-align: center;\r\n}\r\n\r\n.game-container {\r\n    position: absolute;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    top: 785px;\r\n    left: 357px;\r\n    width: 1206px;\r\n    height: 130px;\r\n    padding: 0px 0 0;\r\n}\r\n\r\n.game {\r\n    font-size: 3rem;\r\n    text-align: center;\r\n}\r\n\r\n.category-container {\r\n    position: absolute;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    top: 914px;\r\n    left: 357px;\r\n    width: 633px;\r\n    height: 56px;\r\n}\r\n\r\n.category {\r\n    font-size: 1.5rem;\r\n    text-align: center;\r\n}\r\n\r\n.category-icon {\r\n    width: 35px;\r\n    height: 35px;\r\n    color: red;\r\n    right: 205px;\r\n    background: url("+g+");\r\n    background-size: contain;\r\n    margin-right: 10px;\r\n}\r\n\r\n.platform-container {\r\n    position: absolute;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n    top: 1046px;\r\n    left: 1623px;\r\n    width: 290px;\r\n    height: 27px;\r\n    padding-right: 5px;\r\n}\r\n\r\n.platform {\r\n    font-size: 1.5rem;\r\n    text-align: center;\r\n}\r\n\r\n.estimate-container {\r\n    position: absolute;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    top: 922px;\r\n    left: 992px;\r\n    width: 571px;\r\n    height: 40px;\r\n}\r\n\r\n.estimate {\r\n    font-size: 2rem;\r\n    text-align: center;\r\n}\r\n\r\n.timer-icon {\r\n    width: 50px;\r\n    height: 50px;\r\n    color: red;\r\n    /* width: 512px;\r\n    height: 512px; */\r\n    /* position: absolute; */\r\n    right: 205px;\r\n    background: url("+x+");\r\n    background-size: contain;\r\n    margin-right: 10px;\r\n}\r\n\r\n.coms-container {\r\n    position: absolute;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n    top: 1007px;\r\n    left: 689px;\r\n    width: 550px;\r\n    height: 40px;\r\n}\r\n\r\n.coms {\r\n    font-size: 2rem;\r\n    text-align: center;\r\n}\r\n\r\n.com-icon {\r\n    width: 73px;\r\n    height: 73px;\r\n    max-height: 73px;\r\n    color: red;\r\n    right: 205px;\r\n    background: url("+m+");\r\n    /* background-size: contain; */\r\n    background-size: cover;\r\n    margin-right: 10px;\r\n}",""]);const b=f},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e=n(r);return r[2]?"@media ".concat(r[2]," {").concat(e,"}"):e})).join("")},r.i=function(n,e,t){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(t)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);t&&o[s[0]]||(e&&(s[2]?s[2]="".concat(e," and ").concat(s[2]):s[2]=e),r.push(s))}},r}},667:n=>{n.exports=function(n,r){return r||(r={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),r.hash&&(n+=r.hash),/["'() \t\n]|(%20)/.test(n)||r.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],p=t.base?s[0]+t.base:s[0],l=i[p]||0,u="".concat(p," ").concat(l);i[p]=l+1;var f=e(u),d={css:s[1],media:s[2],sourceMap:s[3]};-1!==f?(r[f].references++,r[f].updater(d)):r.push({identifier:u,updater:o(d,t),references:1}),a.push(u)}return a}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var i=t(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=e(i[a]);r[c].references--}for(var s=t(n,o),p=0;p<i.length;p++){var l=e(i[p]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}i=s}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t=e.css,o=e.media,i=e.sourceMap;o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleTagTransform(t,n)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}},102:(n,r,e)=>{n.exports=e.p+"images/fa80319d3d521b903852.png"},570:(n,r,e)=>{n.exports=e.p+"images/4df1d5bd795358c80faa.ttf"},620:(n,r,e)=>{n.exports=e.p+"images/b785329441f68f16217b.png"},907:(n,r,e)=>{n.exports=e.p+"images/736272cadb2f2aa528ad.png"},241:(n,r,e)=>{n.exports=e.p+"images/1f5cb8c844bf467458c8.png"}},r={};function e(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={id:t,exports:{}};return n[t](i,i.exports,e),i.exports}e.m=n,e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var r=e.g.document;if(!n&&r&&(r.currentScript&&(n=r.currentScript.src),!n)){var t=r.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.b=document.baseURI||self.location.href,(()=>{var n=e(379),r=e.n(n),t=e(795),o=e.n(t),i=e(569),a=e.n(i),c=e(565),s=e.n(c),p=e(216),l=e.n(p),u=e(589),f=e.n(u),d=e(294),h={};h.styleTagTransform=f(),h.setAttributes=s(),h.insert=a().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),r()(d.Z,h),d.Z&&d.Z.locals&&d.Z.locals;const g=document.querySelectorAll(".runner"),x=document.querySelectorAll(".game"),m=document.querySelectorAll(".category"),b=(document.querySelectorAll(".platform"),document.querySelectorAll(".estimate")),y=document.querySelectorAll(".coms"),v=nodecg.Replicant("generalRunInfo"),w=nodecg.Replicant("players");NodeCG.waitForReplicants(v,w).then((()=>{w.on("change",(n=>{g[0].textContent=`${n.twitch[0]}`,g[1].textContent=`${n.twitch[1]}`})),v.on("change",(n=>{console.log(n),x[0].textContent=n.game,m[0].textContent=`${n.category}`,b[0].textContent=`${n.estimate}`,y[0].textContent=`${n.coms}`}))}))})()})();