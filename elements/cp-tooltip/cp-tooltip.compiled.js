!(function(t, e) {
  if ("function" == typeof define && define.amd)
    define(
      [
        "../rhelement/rhelement.compiled.js",
        "../cp-styles/cp-styles.compiled.js"
      ],
      e
    );
  else if ("undefined" != typeof exports)
    e(
      require("../rhelement/rhelement.compiled.js"),
      require("../cp-styles/cp-styles.compiled.js")
    );
  else {
    var n = { exports: {} };
    e(t.rhelementCompiled, t.cpStylesCompiled), (t.cpTooltip = n.exports);
  }
})(this, function(t) {
  "use strict";
  function e(t, e) {
    if (!(t instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  function n(t, e) {
    if (!t)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
  }
  function o(t, e) {
    if ("function" != typeof e && null !== e)
      throw new TypeError(
        "Super expression must either be null or a function, not " + typeof e
      );
    (t.prototype = Object.create(e && e.prototype, {
      constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 }
    })),
      e &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(t, e)
          : (t.__proto__ = e));
  }
  var i = (function(t) {
      return t && t.__esModule ? t : { default: t };
    })(t),
    r = (function() {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      return function(e, n, o) {
        return n && t(e.prototype, n), o && t(e, o), e;
      };
    })(),
    s = function t(e, n, o) {
      null === e && (e = Function.prototype);
      var i = Object.getOwnPropertyDescriptor(e, n);
      if (void 0 === i) {
        var r = Object.getPrototypeOf(e);
        return null === r ? void 0 : t(r, n, o);
      }
      if ("value" in i) return i.value;
      var s = i.get;
      if (void 0 !== s) return s.call(o);
    },
    a = document.createElement("template");
  a.innerHTML =
    "\n<style>:host {\n  display: inline-block;\n  position: absolute;\n  background: #1a1a1a;\n  color: white;\n  padding: 4px 6px;\n  border-radius: 2px;\n  max-width: 200px;\n  font-size: 0.9em; }\n\n:host([hidden]) {\n  display: none; }\n\n:host::after {\n  display: block;\n  content: '';\n  width: 0;\n  height: 0;\n  border: 4px solid black;\n  border-right-color: transparent;\n  border-left-color: transparent;\n  border-bottom: 0;\n  position: absolute;\n  top: auto;\n  right: auto;\n  bottom: -4px;\n  left: 50%;\n  margin-left: -2px; }\n\n:host([data-position=\"left\"])::after {\n  display: block;\n  content: '';\n  width: 0;\n  height: 0;\n  border: 4px solid black;\n  border-top-color: transparent;\n  border-bottom-color: transparent;\n  border-right: 0;\n  position: absolute;\n  top: 50%;\n  right: -4px;\n  bottom: auto;\n  left: auto;\n  margin-top: -2px; }\n\n:host([data-position=\"right\"])::after {\n  display: block;\n  content: '';\n  width: 0;\n  height: 0;\n  border: 4px solid black;\n  border-top-color: transparent;\n  border-bottom-color: transparent;\n  border-left: 0;\n  position: absolute;\n  top: 50%;\n  right: auto;\n  bottom: auto;\n  left: -4px;\n  margin-top: -2px; }\n\n:host([data-position=\"bottom\"])::after {\n  display: block;\n  content: '';\n  width: 0;\n  height: 0;\n  border: 4px solid black;\n  border-right-color: transparent;\n  border-left-color: transparent;\n  border-top: 0;\n  position: absolute;\n  top: -4px;\n  right: auto;\n  bottom: auto;\n  left: 50%;\n  margin-left: -2px; }</style>\n<slot></slot>\n";
  var l = (function(t) {
    function l() {
      e(this, l);
      var t = n(
        this,
        (l.__proto__ || Object.getPrototypeOf(l)).call(this, "cp-tooltip", a)
      );
      return (t._show = t._show.bind(t)), (t._hide = t._hide.bind(t)), t;
    }
    return (
      o(l, i.default),
      r(l, [
        {
          key: "connectedCallback",
          value: function() {
            s(
              l.prototype.__proto__ || Object.getPrototypeOf(l.prototype),
              "connectedCallback",
              this
            ).call(this),
              this.hasAttribute("role") || this.setAttribute("role", "tooltip"),
              this.hasAttribute("tabindex") ||
                this.setAttribute("tabindex", -1),
              this._hide(),
              (this._target = this.getRootNode().querySelector(
                "[aria-describedby=" + this.id + "]"
              )),
              this._target &&
                (this._target.addEventListener("focus", this._show),
                this._target.addEventListener("blur", this._hide),
                this._target.addEventListener("mouseenter", this._show),
                this._target.addEventListener("mouseleave", this._hide));
          }
        },
        {
          key: "disconnectedCallback",
          value: function() {
            this._target &&
              (this._target.removeEventListener("focus", this._show),
              this._target.removeEventListener("blur", this._hide),
              this._target.removeEventListener("mouseenter", this._show),
              this._target.removeEventListener("mouseleave", this._hide));
          }
        },
        {
          key: "_show",
          value: function() {
            this.hidden = !1;
            var t = this._target.offsetTop,
              e = this._target.offsetLeft,
              n = this._target.getBoundingClientRect(),
              o = this.getBoundingClientRect();
            switch (this.getAttribute("data-position")) {
              case "left":
                (this.style.top = t - n.height / 4 + "px"),
                  (this.style.left = e - o.width - 6 + "px");
                break;
              case "right":
                (this.style.top = t - n.height / 4 + "px"),
                  (this.style.left = e + n.width + 6 + "px");
                break;
              case "top":
                (this.style.top = t - o.height - 6 + "px"),
                  (this.style.left = e + n.width / 2 - o.width / 2 + "px");
                break;
              case "bottom":
                (this.style.top = t + n.height + 6 + "px"),
                  (this.style.left = e + n.width / 2 - o.width / 2 + "px");
                break;
              default:
                (this.style.top = t - o.height - 6 + "px"),
                  (this.style.left = e + n.width / 2 - o.width / 2 + "px");
            }
          }
        },
        {
          key: "_hide",
          value: function() {
            this.hidden = !0;
          }
        }
      ]),
      l
    );
  })();
  window.customElements.define("cp-tooltip", l);
});
