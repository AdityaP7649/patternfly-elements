!(function(e, t) {
  if ("function" == typeof define && define.amd) define([], t);
  else if ("undefined" != typeof exports) t();
  else {
    var n = { exports: {} };
    t(), (e.rhDatetime = n.exports);
  }
})(this, function() {
  "use strict";
  function e(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function t(e, t) {
    if (!e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
  }
  function n(e, t) {
    if ("function" != typeof t && null !== t)
      throw new TypeError(
        "Super expression must either be null or a function, not " + typeof t
      );
    (e.prototype = Object.create(t && t.prototype, {
      constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
    })),
      t &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(e, t)
          : (e.__proto__ = t));
  }
  var i = (function() {
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
    r = document.createElement("template");
  (r.innerHTML =
    "\n  <style>\n    :host {\n      display: inline;\n    }\n  </style>\n  <span></span>\n"),
    window.ShadyCSS && ShadyCSS.prepareTemplate(r, "rh-datetime");
  var o = (function(o) {
    function a() {
      e(this, a);
      var n = t(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this));
      return (
        n.attachShadow({ mode: "open" }),
        n.shadowRoot.appendChild(r.content.cloneNode(!0)),
        (n.type = n.getAttribute("type") || "local"),
        n
      );
    }
    return (
      n(a, HTMLElement),
      i(
        a,
        [
          {
            key: "connectedCallback",
            value: function() {
              window.ShadyCSS && ShadyCSS.styleElement(this);
            }
          },
          {
            key: "attributeChangedCallback",
            value: function(e, t, n) {
              this[e] = n;
            }
          },
          {
            key: "_getOptions",
            value: function() {
              var e = {
                  weekday: { short: "short", long: "long" },
                  day: { numeric: "numeric", "2-digit": "2-digit" },
                  month: { short: "short", long: "long" },
                  year: { numeric: "numeric", "2-digit": "2-digit" },
                  hour: { numeric: "numeric", "2-digit": "2-digit" },
                  minute: { numeric: "numeric", "2-digit": "2-digit" },
                  second: { numeric: "numeric", "2-digit": "2-digit" },
                  timeZoneName: { short: "short", long: "long" }
                },
                t = {};
              for (var n in e) {
                var i = e[n][this.getAttribute(n)];
                i && (t[n] = i);
              }
              return t;
            }
          },
          {
            key: "_getTypeString",
            value: function() {
              var e = this._getOptions(),
                t = this.getAttribute("locale") || navigator.language,
                n = "";
              switch (this.type) {
                case "local":
                  n = new Intl.DateTimeFormat(t, e).format(this._datetime);
                  break;
                case "relative":
                  n = this._getTimeRelative(this._datetime - Date.now());
                  break;
                default:
                  n = this._datetime;
              }
              return n;
            }
          },
          {
            key: "_getTimeRelative",
            value: function(e) {
              var t = e > 0 ? "until" : "ago",
                n = "just now",
                i = Math.round(Math.abs(e) / 1e3),
                r = Math.round(i / 60),
                o = Math.round(r / 60),
                a = Math.round(o / 24),
                u = Math.round(a / 30),
                s = Math.round(u / 12);
              return (
                u >= 18
                  ? (n = s + " years")
                  : u >= 12
                    ? (n = "a year")
                    : a >= 45
                      ? (n = u + " months")
                      : a >= 30
                        ? (n = "a month")
                        : o >= 36
                          ? (n = a + " days")
                          : o >= 24
                            ? (n = "a day")
                            : r >= 90
                              ? (n = o + " hours")
                              : r >= 45
                                ? (n = "an hour")
                                : i >= 90
                                  ? (n = r + " minutes")
                                  : i >= 45
                                    ? (n = "a minute")
                                    : i >= 10 && (n = i + " seconds"),
                "just now" !== n ? n + " " + t : n
              );
            }
          },
          {
            key: "datetime",
            get: function() {
              return this._datetime;
            },
            set: function(e) {
              Date.parse(e) &&
                ((Date.parse(e) && this._datetime === Date.parse(e)) ||
                  ((this._datetime = Date.parse(e)),
                  (this.shadowRoot.querySelector("span").innerText = window.Intl
                    ? this._getTypeString()
                    : e)));
            }
          },
          {
            key: "type",
            get: function() {
              return this._type;
            },
            set: function(e) {
              this._type !== e && (this._type = e);
            }
          }
        ],
        [
          {
            key: "observedAttributes",
            get: function() {
              return ["datetime", "type"];
            }
          }
        ]
      ),
      a
    );
  })();
  window.customElements.define("rh-datetime", o);
});
