/*!
* Qoopido.js library v3.2.4, 2014-5-12
* https://github.com/dlueth/qoopido.js
* (c) 2014 Dirk Lueth
* Dual licensed under MIT and GPL
*/
!function(e){var t=[];document.querySelectorAll||t.push("../document/queryselectorall"),window.qoopido.register("polyfill/elements/matches",e,t)}(function(){"use strict";if(!Element.prototype.matches){var e=Element.prototype;e.matches=e.matchesSelector=e.matchesSelector||e.webkitMatchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector||function(e){for(var t,r=this.parentElement.querySelectorAll(e),o=0;t=r[o++];)if(t===this)return!0;return!1}}return!0});