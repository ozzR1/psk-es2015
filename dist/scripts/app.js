"use strict";!function(e){var r=e.querySelector("#app");r.displayInstalledToast=function(){return e.querySelector("#caching-complete").show()},r.addEventListener("dom-change",function(){return console.log("Our app is ready to rock!")}),window.addEventListener("WebComponentsReady",function(){}),addEventListener("paper-header-transform",function(r){var n=e.querySelector(".app-name"),t=e.querySelector(".middle-container"),a=e.querySelector(".bottom-container"),o=r.detail,c=o.height-o.condensedHeight,l=Math.min(1,o.y/c),s=.5,i=Math.max(s,(c-o.y)/(c/(1-s))+s),d=1-l;Polymer.Base.transform("translate3d(0,"+100*l+"%,0)",t),Polymer.Base.transform("scale("+d+") translateZ(0)",a),Polymer.Base.transform("scale("+i+") translateZ(0)",n)}),r.onMenuSelect=function(){var r=e.querySelector("#paperDrawerPanel");r.narrow&&r.closeDrawer()}}(document),function(e){var r=e.querySelector("#app");r.displayInstalledToast=function(){return e.querySelector("#caching-complete").show()},r.addEventListener("dom-change",function(){return console.log("Our app is ready to rock!")}),window.addEventListener("WebComponentsReady",function(){}),addEventListener("paper-header-transform",function(r){var n=e.querySelector(".app-name"),t=e.querySelector(".middle-container"),a=e.querySelector(".bottom-container"),o=r.detail,c=o.height-o.condensedHeight,l=Math.min(1,o.y/c),s=.5,i=Math.max(s,(c-o.y)/(c/(1-s))+s),d=1-l;Polymer.Base.transform("translate3d(0,"+100*l+"%,0)",t),Polymer.Base.transform("scale("+d+") translateZ(0)",a),Polymer.Base.transform("scale("+i+") translateZ(0)",n)}),r.onMenuSelect=function(){var r=e.querySelector("#paperDrawerPanel");r.narrow&&r.closeDrawer()}}(document);