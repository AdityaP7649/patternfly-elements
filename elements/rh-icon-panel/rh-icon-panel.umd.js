!function(e,t){if("function"==typeof define&&define.amd)define(["../rhelement/rhelement.umd.js","../rh-icon/rh-icon.umd.js"],t);else if("undefined"!=typeof exports)t(require("../rhelement/rhelement.umd.js"),require("../rh-icon/rh-icon.umd.js"));else{t(e.rhelementUmd,e.rhIconUmd),e.rhIconPanel={}}}(this,function(e){"use strict";var t,n=(t=e)&&t.__esModule?t:{default:t};var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var r=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,t.tag))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default),o(t,[{key:"html",get:function(){return'\n<style>\n:host {\n  display: flex;\n  align-content: flex-start; }\n\n:host rh-icon {\n  margin-right: var(--rhe-c-icon-panel__icon--MarginRight, 1rem);\n  font-size: var(--rhe-c-icon-panel__icon--size, 4rem);\n  line-height: var(--rhe-c-icon-panel__icon--size, 4rem); }\n\n:host ::slotted([slot="header"]),\n:host ::slotted([slot="footer"]) {\n  display: block; }\n\n:host ::slotted([slot="footer"]) {\n  margin-top: var(--rhe-c-icon-panel__footer--MarginTop, 16px); }\n</style>\n<rh-icon></rh-icon>\n<div class="content">\n  <slot class="header" name="header"></slot>\n  <slot class="body"></slot>\n  <slot class="footer" name="footer"></slot>\n</div>'}},{key:"styleUrl",get:function(){return"rh-icon-panel.scss"}},{key:"templateUrl",get:function(){return"rh-icon-panel.html"}}],[{key:"tag",get:function(){return"rh-icon-panel"}},{key:"observedAttributes",get:function(){return["icon"]}}]),o(t,[{key:"attributeChangedCallback",value:function(e,t,n){"icon"===e&&(n&&this.shadowRoot.querySelector("rh-icon").setAttribute("icon",n))}}]),t}();n.default.create(r)});