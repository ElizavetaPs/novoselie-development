!function(){var e={62:function(){var e=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")};!function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=t.rangeInputsClassName,i=void 0===o?"filter__range-inputs input":o,r=t.priceInputsClassName,n=void 0===r?"filter__price-input":r,a=t.progressClassName,p=void 0===a?"filter__range-progress":a,c=t.minRangeClassName,s=void 0===c?"filter__range-min":c,l=t.minPriceInputClassName,d=void 0===l?"filter__price-input--min":l,u=document.querySelectorAll(".".concat(i)),f=document.querySelectorAll(".".concat(n)),g=document.querySelector(".".concat(p)),h=5e5;f.forEach((function(t){t.addEventListener("input",(function(t){var o=!f[0].value.trim().length,i=!f[1].value.trim().length,r=o?0:parseInt(f[0].value.replace(/\s/g,"")),n=i?0:parseInt(f[1].value.replace(/\s/g,""));r>n&&(r=n),n-r>=h&&n<=u[1].max&&(t.target.classList.contains(d)?(f[0].value=o?"":e(r),u[0].value=r,g.style.left=r/u[0].max*100+"%"):(f[1].value=i?"":e(n),u[1].value=n,g.style.right=100-n/u[1].max*100+"%"))}))})),u.forEach((function(t){t.addEventListener("input",(function(t){var o=parseInt(u[0].value.replace(/\s/g,"")),i=parseInt(u[1].value.replace(/\s/g,""));i-o<h?t.target.className===s?u[0].value=i-h:u[1].value=o+h:(f[0].value=e(o),f[1].value=e(i),g.style.left=o/u[0].max*100+"%",g.style.right=100-i/u[1].max*100+"%")}))}))}()},157:function(){!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.wrapperClassName,o=void 0===t?"slider":t,i=e.itemClassName,r=void 0===i?"slider__item":i,n=e.activeItemClassName,a=void 0===n?"slider__item--active":n,p=e.dotsClassName,c=void 0===p?"slider__dots":p,s=e.dotClassName,l=void 0===s?"slider__dot":s,d=e.activeDotClassName,u=void 0===d?"slider__dot--active":d,f=document.querySelectorAll(".".concat(o));f.forEach((function(e){var t=e.querySelectorAll(".".concat(r)),o=document.createElement("div");o.classList.add(c),t.forEach((function(t,i){var r=document.createElement("div");r.classList.add(l),t.classList.contains(a)&&r.classList.add(u),r.addEventListener("click",(function(){var i=e.querySelector(".".concat(a));i&&i.classList.remove(a),t.classList.add(a);var n=o.querySelector(".".concat(u));n&&n.classList.remove(u),r.classList.add(u)})),o.appendChild(r)})),e.appendChild(o)}))}()},750:function(e,t,o){"use strict";var i=o(81),r=o.n(i),n=o(645),a=o.n(n),p=o(667),c=o.n(p),s=new URL(o(794),o.b),l=new URL(o(926),o.b),d=new URL(o(190),o.b),u=new URL(o(370),o.b),f=new URL(o(587),o.b),g=new URL(o(344),o.b),h=a()(r());h.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Montserrat:wght@400;500;700;900&family=Open+Sans:wght@400;600;700&family=Raleway&display=swap);"]);var x=c()(s),b=c()(l),_=c()(d),m=c()(u),v=c()(f),y=c()(g);h.push([e.id,'body{margin:0;padding:0;height:100vh;font-family:"Montserrat",sans-serif}ul{list-style:none;padding:0;margin:0}a{text-decoration:none;cursor:pointer}h1,h2,h3{margin:0;padding:0}button{cursor:pointer}.wrapper{max-width:1440px;margin:0 auto;padding:0 50px;box-sizing:border-box}.page{padding:50px 0 40px}.page__title{font-weight:500;font-size:30px;line-height:37px;color:#5e6076;text-transform:uppercase}.page__content{margin-top:40px;display:grid;grid-template-columns:1fr 318px;grid-gap:60px}.button{background-color:#da552f;border:none;border-radius:12px;color:#fff;padding:0 10px;height:47px;display:block;cursor:pointer;font-size:14px;letter-spacing:1.2px}.button:hover{background-color:#da552f;opacity:.7}.button-live{display:flex;align-items:center;background-color:transparent;border:none;color:#5e6076;padding:0 10px;cursor:pointer}.button-live span{position:relative}.button-live__indicator{margin-right:4px;background-color:#da552f;width:9px;height:9px;left:-14px;border-radius:50%}.indicator-btn{position:relative;display:flex;align-items:center;background-color:transparent;border:none;color:#5e6076;font-size:13px;line-height:16px;padding:0 0 0 8px}.indicator-btn:before{content:"";position:absolute;left:0;width:5px;height:5px;background-color:#da552f;border-radius:50%}.button-icon{background-color:transparent;border:none;padding:0}.slider{position:relative;margin:auto;height:100%}.slider__items{height:100%}.slider__item{display:none;height:100%;-webkit-animation-name:fade;-webkit-animation-duration:1.5s;animation-name:fade;animation-duration:1.5s}.slider__item--active{display:block}.slider__item img{object-fit:cover;width:100%;height:100%;border:none;box-shadow:none}.slider__dots{width:100%;display:flex;justify-content:space-between;position:absolute;bottom:15px;padding:0 20px;box-sizing:border-box;z-index:100}.slider__dot{cursor:pointer;height:2px;width:100%;margin-right:10px;background-color:#fff;opacity:.3;display:block;transition:background-color .6s ease}.slider__dot--active{opacity:.7}.slider__dot:last-child{margin-right:0}@-webkit-keyframes fade{from{opacity:.4}to{opacity:1}}@keyframes fade{from{opacity:.4}to{opacity:1}}.header__container{display:flex;justify-content:space-between;align-items:center;height:77px}.header__nav ul{display:flex;max-width:330px;flex-wrap:wrap}.header__nav ul li{margin-right:15px}.header__nav ul li:last-child{margin-right:0}.header__nav li>a{cursor:pointer;font-size:12px;line-height:15px;color:#5e6076}.header__nav li>a:hover{color:#da552f}.header__button{height:37px}.header__contact button{background-color:transparent;border:none;padding:0;cursor:pointer;font-size:14px;margin-right:17px;color:#5e6076}.header__contact a{font-weight:600;font-size:14px;line-height:17px;color:#5e6076}.header__contact a:hover{color:#da552f}.header__icon{border:none;background:transparent}.header__icon:hover svg{fill:#da552f}.header__icon svg:hover{fill:#da552f}.projects{display:grid;grid-template-columns:1fr 1fr;grid-gap:30px 50px}.project{width:100%}.project__slider{position:relative;width:100%;height:355px;border-radius:20px;overflow:hidden}.project__slider-live{position:absolute}.project__slider-preview img{width:100%;height:100%}.project__slider-top{position:absolute;top:0;padding:20px;display:flex;justify-content:space-between;box-sizing:border-box;width:100%}.project__slider-bottom{position:absolute;bottom:0;padding:20px 20px 30px;display:flex;justify-content:space-between;box-sizing:border-box;width:100%}.project__slider-clarification{padding:3px;box-sizing:border-box;background-color:#fff;border-radius:4px;font-size:13px;line-height:16px}.project__slider-nav{position:absolute;bottom:0;width:100%;padding:0 20px;box-sizing:border-box;display:flex}.project__live{position:absolute;bottom:20px;left:20px;padding:3px;box-sizing:border-box;background-color:#fff;border-radius:4px}.project__content{width:100%}.project__content-top{display:flex;justify-content:space-between;padding:28px 20px 0}.project__title{font-weight:900;font-size:16px;line-height:20px;text-transform:uppercase;color:#5e6076;margin-bottom:5px}.project__subway{display:flex;align-items:center;font-weight:500;font-size:12px;line-height:15px;color:#abadc5}.project__subway-icon{display:inline-block;margin:0 6px;width:7px;height:15px;background-image:url('+x+')}.project__building{font-size:12px;color:#abadc5;border-bottom:1px solid #eee;padding:10px 36px 10px 20px}.project__building:last-child{border-bottom:none}.project__building-details{display:flex;justify-content:space-between;font-size:14px;line-height:17px;color:#5e6076;margin-top:2px}.project__building-price{position:relative}.project__building-price::after{content:"";position:absolute;width:10px;height:6px;background-image:url('+b+");background-repeat:no-repeat;right:-16px;top:4px}.project--head{grid-column:1/-1;display:flex;justify-content:space-between}.project--head .project__slider{max-width:480px;height:545px}.project--head .project__content{width:calc(100% - 480px)}.project--head .project__content-top{display:block;padding:30px 30px 20px}.project--head .project__flats-button{margin-top:30px}.project--head .project__building{font-size:12px;color:#abadc5;border-bottom:1px solid #eee;padding:30px}.project--head .project__building:last-child{border-bottom:none}.more-projects{width:100%;max-height:465px;background-image:url("+_+");display:flex;justify-content:center;box-sizing:border-box;border-radius:20px;grid-column:1/-1;padding:30px}.more-projects__inner{background-color:#fff;width:100%;max-width:385px;height:100%;border-radius:20px;padding:60px 56px 70px;box-sizing:border-box;display:grid;grid-gap:62px;align-content:center}.more-projects__logo{margin:0 auto}.more-projects__logo img{width:207px;height:50px}.more-projects__counts{display:flex;justify-content:space-between}.more-projects__counts--bold{color:#5e6076;font-weight:900;font-size:30px;line-height:37px}.more-projects__counts span{color:#abadc5;font-weight:500;font-size:14px;line-height:17px}.more-projects__button{width:175px;height:37px;margin:0 auto}.filter__container{background-color:#5e6076;border-radius:20px;padding:30px;color:#fff;display:grid;grid-template-columns:1fr;grid-gap:30px 0}.filter__types{width:100%;height:40px;display:grid;grid-template-columns:2fr 1fr 1fr 1fr;border:1px solid #777990;border-radius:6px;box-sizing:border-box}.filter__type{display:flex;align-items:center;position:relative;height:100%;width:100%;border-right:1px solid #777990;box-sizing:border-box;cursor:pointer}.filter__type:last-child{border-right:none}.filter__type-input{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0, 0, 0, 0)}.filter__type-input:checked+.filter__type-box{background-color:#777990}.filter__type-box{position:absolute;width:100%;height:100%;box-sizing:border-box}.filter__type-name{margin:0 auto;z-index:10}.filter__value{display:flex;align-items:center;justify-content:center;margin-top:10px}.filter__value span{font-size:16px;line-height:20px;color:#5e6076;margin-right:10px}.filter__inputs{display:grid;grid-template-columns:1fr;grid-gap:15px 0}.filter__input{border:1px solid #777990;border-radius:6px;background-color:transparent;width:100%;height:40px;padding:0 10px;box-sizing:border-box;color:#fff}.filter__input:last-child{margin-bottom:0}.filter__input::placeholder{color:#abadc5}.filter__input:focus{outline:none;border:1px solid #abadc5}.filter__price-input--min{padding:0 10px 0 75px}.filter__price-input--max{padding:0 10px 0 35px}.filter__input-wrapper{position:relative;display:flex;align-items:center;font-size:14px;line-height:17px}.filter__input-wrapper span{position:absolute;padding-left:10px;color:#abadc5}.filter__range{position:relative}.filter__range-slider{height:2px;position:relative;background:#777990;margin-top:8px}.filter__range-progress{height:100%;left:0;right:0;position:absolute;background:#da552f}.filter__range-inputs input{position:absolute;width:100%;height:2px;background:none;pointer-events:none;-webkit-appearance:none;-moz-appearance:none;padding:0;margin:0}.filter__range-inputs input:first-child{z-index:1}.filter__range-inputs input::-webkit-slider-thumb{height:24px;width:24px;border-radius:50%;background:#777990 url("+m+") center center no-repeat;pointer-events:auto;-webkit-appearance:none;cursor:grab;position:relative}.filter__range-inputs input::-webkit-slider-thumb:active{background-color:#da552f;background-image:none;opacity:.3}.filter__range-inputs input::-moz-range-thumb{height:24px;width:24px;border-radius:50%;background-color:#777990;pointer-events:auto;-webkit-appearance:none;cursor:grab;position:relative}.filter__range-inputs input::-moz-range-thumb:active{background-color:#da552f;opacity:.3}.filter__check{display:block;padding-left:24px;margin-bottom:14px;cursor:pointer}.filter__check:last-child{margin-bottom:0}.filter__check-input{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0, 0, 0, 0)}.filter__check-input:checked+.filter__check-box{background-image:url("+v+")}.filter__check-input:focus+.filter__check-box{border:1px solid #abadc5}.filter__check-box{position:absolute;width:16px;height:16px;border:1px solid #777990;margin-left:-24px;box-sizing:border-box}.filter__search{position:relative}.filter__search-input{padding:10px 37px 10px 10px}.filter__search-icon{position:absolute;top:0;right:10px;width:17px;height:17px;background-image:url("+y+")}input[type=number]::-webkit-outer-spin-button,input[type=number]::-webkit-inner-spin-button{-webkit-appearance:none}.footer{border-top:1px solid #b6b8ce}.footer__container{padding:43px 0;display:flex;justify-content:space-between}.footer__menu{display:grid;grid-template-columns:repeat(3, fit-content(100%));grid-gap:0 60px}.footer__menu a{color:#5e6076}.footer__menu a:hover{color:#da552f}.footer__menu-item{margin-bottom:10px;font-size:12px;line-height:15px;color:#5e6076}.footer__menu-item:last-child{margin-bottom:0}.footer__menu-item:hover{color:#da552f}.footer__menu-title{margin-bottom:15px;font-size:16px;line-height:20px;color:#5e6076}.footer__social-item{margin-bottom:15px;font-size:12px;line-height:15px}.footer__social-item a{color:#5e6076}.footer__social-item a:hover{color:#da552f}.footer__form{max-width:370px}.footer__form-title{font-size:16px;line-height:20px;color:#abadc5;padding:0}.footer__form-group{height:50px;margin:17px 0 10px;display:flex}.footer__form-input{height:100%;width:100%;border-radius:12px;border:1px solid rgba(0,0,0,.1);box-sizing:border-box;padding:0 10px}.footer__form-input::placeholder{color:#abadc5}.footer__form-input:focus{outline:none;border:1px solid #abadc5}.footer__form-button{height:100%;margin-left:10px}.footer__form span{display:block;font-size:12px;line-height:15px;color:#abadc5}.footer__copyright{display:flex;justify-content:space-between;padding-bottom:30px}.footer__copyright span,.footer__copyright a{color:#abadc5;font-size:12px;line-height:15px}",""]),t.Z=h},645:function(e){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var o="",i=void 0!==t[5];return t[4]&&(o+="@supports (".concat(t[4],") {")),t[2]&&(o+="@media ".concat(t[2]," {")),i&&(o+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),o+=e(t),i&&(o+="}"),t[2]&&(o+="}"),t[4]&&(o+="}"),o})).join("")},t.i=function(e,o,i,r,n){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(i)for(var p=0;p<this.length;p++){var c=this[p][0];null!=c&&(a[c]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);i&&a[l[0]]||(void 0!==n&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=n),o&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=o):l[2]=o),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},667:function(e){"use strict";e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:function(e){"use strict";e.exports=function(e){return e[1]}},379:function(e){"use strict";var t=[];function o(e){for(var o=-1,i=0;i<t.length;i++)if(t[i].identifier===e){o=i;break}return o}function i(e,i){for(var n={},a=[],p=0;p<e.length;p++){var c=e[p],s=i.base?c[0]+i.base:c[0],l=n[s]||0,d="".concat(s," ").concat(l);n[s]=l+1;var u=o(d),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(f);else{var g=r(f,i);i.byIndex=p,t.splice(p,0,{identifier:d,updater:g,references:1})}a.push(d)}return a}function r(e,t){var o=t.domAPI(t);return o.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;o.update(e=t)}else o.remove()}}e.exports=function(e,r){var n=i(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<n.length;a++){var p=o(n[a]);t[p].references--}for(var c=i(e,r),s=0;s<n.length;s++){var l=o(n[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}n=c}}},569:function(e){"use strict";var t={};e.exports=function(e,o){var i=function(e){if(void 0===t[e]){var o=document.querySelector(e);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}t[e]=o}return t[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(o)}},216:function(e){"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:function(e,t,o){"use strict";e.exports=function(e){var t=o.nc;t&&e.setAttribute("nonce",t)}},795:function(e){"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(o){!function(e,t,o){var i="";o.supports&&(i+="@supports (".concat(o.supports,") {")),o.media&&(i+="@media ".concat(o.media," {"));var r=void 0!==o.layer;r&&(i+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),i+=o.css,r&&(i+="}"),o.media&&(i+="}"),o.supports&&(i+="}");var n=o.sourceMap;n&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(n))))," */")),t.styleTagTransform(i,e,t.options)}(t,e,o)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:function(e){"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},926:function(e,t,o){"use strict";e.exports=o.p+"086dd26c4377d701919f.svg"},587:function(e,t,o){"use strict";e.exports=o.p+"c580efc45fc771d62b69.svg"},794:function(e,t,o){"use strict";e.exports=o.p+"787452134fe53fe139cb.svg"},370:function(e,t,o){"use strict";e.exports=o.p+"dd2ef99530c8faf70a66.svg"},344:function(e,t,o){"use strict";e.exports=o.p+"b98a2b6eb18b3e878321.svg"},190:function(e,t,o){"use strict";e.exports=o.p+"3c233e9fa11ef4bc1dac.png"}},t={};function o(i){var r=t[i];if(void 0!==r)return r.exports;var n=t[i]={id:i,exports:{}};return e[i](n,n.exports,o),n.exports}o.m=e,o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,{a:t}),t},o.d=function(e,t){for(var i in t)o.o(t,i)&&!o.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");i.length&&(e=i[i.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e}(),o.b=document.baseURI||self.location.href,function(){"use strict";var e=o(379),t=o.n(e),i=o(795),r=o.n(i),n=o(569),a=o.n(n),p=o(565),c=o.n(p),s=o(216),l=o.n(s),d=o(589),u=o.n(d),f=o(750),g={};g.styleTagTransform=u(),g.setAttributes=c(),g.insert=a().bind(null,"head"),g.domAPI=r(),g.insertStyleElement=l(),t()(f.Z,g),f.Z&&f.Z.locals&&f.Z.locals,o(157),o(62)}()}();