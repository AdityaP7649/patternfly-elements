!(function(e, t) {
  if ("function" == typeof define && define.amd)
    define(
      [
        "../rhelement/rhelement.compiled.js",
        "../cp-styles/cp-styles.compiled.js"
      ],
      t
    );
  else if ("undefined" != typeof exports)
    t(
      require("../rhelement/rhelement.compiled.js"),
      require("../cp-styles/cp-styles.compiled.js")
    );
  else {
    t(e.rhelementCompiled, e.cpStylesCompiled), (e.cpAccordionHeading = {});
  }
})(this, function(e) {
  "use strict";
  var t = (function(e) {
      return e && e.__esModule ? e : { default: e };
    })(e),
    n = (function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      return function(t, n, i) {
        return n && e(t.prototype, n), i && e(t, i), t;
      };
    })(),
    i = document.createElement("template");
  i.innerHTML =
    '\n<style>*, *::before, *:after {\n  box-sizing: var(--box-sizing, border-box); }\n\n:host {\n  display: block;\n  background: var(--gray-nimbus, #ededed); }\n\n:host(.animating) {\n  transition: transform 0.3s ease-in-out; }\n\nh2 {\n  margin: 0;\n  padding: 0;\n  border: 1px solid white; }\n\nbutton {\n  margin: 0;\n  border: none;\n  font-family: inherit;\n  font-size: 16px;\n  line-height: 1.5;\n  min-height: 3em;\n  height: auto;\n  cursor: pointer;\n  width: 100%;\n  text-align: left;\n  background: none; }\n\nbutton:focus {\n  outline: 1px solid blue; }\n\n[aria-expanded] {\n  position: relative;\n  display: block;\n  font-weight: normal;\n  padding-left: 2.5em; }\n\n[aria-expanded="false"]::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 40%;\n  display: block;\n  border-style: solid;\n  border-width: 0.15em 0.15em 0 0;\n  height: 0.35em;\n  width: 0.35em;\n  transform: rotate(45deg);\n  margin-left: 1em;\n  text-align: center;\n  transition: transform 0.15s; }\n\n[aria-expanded="true"]::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 40%;\n  display: block;\n  width: 0.35em;\n  height: 0.35em;\n  border-style: solid;\n  border-width: 0.15em 0.15em 0 0;\n  margin-left: 1em;\n  text-align: center;\n  transition: all 0.15s;\n  transform: rotate(135deg); }</style>\n<button aria-expanded="false" role="tab"></button>\n';
  var o = (function(e) {
    function o() {
      !(function(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      })(this, o);
      var e = (function(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      })(
        this,
        (o.__proto__ || Object.getPrototypeOf(o)).call(
          this,
          "cp-accordion-heading",
          i
        )
      );
      return (e._clickHandler = e._clickHandler.bind(e)), e;
    }
    return (
      (function(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      })(o, t.default),
      n(o, null, [
        {
          key: "observedAttributes",
          get: function() {
            return ["aria-expanded"];
          }
        }
      ]),
      n(o, [
        {
          key: "connectedCallback",
          value: function() {
            (function e(t, n, i) {
              null === t && (t = Function.prototype);
              var o = Object.getOwnPropertyDescriptor(t, n);
              if (void 0 === o) {
                var r = Object.getPrototypeOf(t);
                return null === r ? void 0 : e(r, n, i);
              }
              if ("value" in o) return o.value;
              var a = o.get;
              if (void 0 !== a) return a.call(i);
            })(
              o.prototype.__proto__ || Object.getPrototypeOf(o.prototype),
              "connectedCallback",
              this
            ).call(this),
              (this.button = this.shadowRoot.querySelector("button"));
            var e = this.children[0],
              t = !1;
            if (e) {
              switch (e.tagName) {
                case "H1":
                case "H2":
                case "H3":
                case "H4":
                case "H5":
                case "H6":
                  t = !0;
              }
              var n = document.createElement(e.tagName);
              (this.button.innerText = e.innerText),
                n.appendChild(this.button),
                this.shadowRoot.appendChild(n);
            } else this.button.innerText = this.textContent.trim();
            t ||
              console.warn(
                "The first child in the light DOM must be a heading level tag (h1, h2, h3, h4, h5, or h6)"
              ),
              this.addEventListener("click", this._clickHandler);
          }
        },
        {
          key: "disconnectedCallback",
          value: function() {
            this.removeEventListener("click", this._clickHandler);
          }
        },
        {
          key: "_clickHandler",
          value: function(e) {
            this.dispatchEvent(
              new CustomEvent("cp-accordion-change", {
                detail: { expanded: !this.expanded },
                bubbles: !0
              })
            );
          }
        },
        {
          key: "expanded",
          get: function() {
            return this.hasAttribute("aria-expanded");
          },
          set: function(e) {
            (e = Boolean(e))
              ? (this.setAttribute("aria-expanded", !0),
                this.button.setAttribute("aria-expanded", !0))
              : (this.removeAttribute("aria-expanded"),
                this.button.setAttribute("aria-expanded", !1));
          }
        }
      ]),
      o
    );
  })();
  window.customElements.define("cp-accordion-heading", o);
});
