!(function(n, e) {
  if ("function" == typeof define && define.amd)
    define(["./custom-style-interface.min.compiled.js"], e);
  else if ("undefined" != typeof exports)
    e(require("./custom-style-interface.min.compiled.js"));
  else {
    var t = { exports: {} };
    e(n.customStyleInterfaceMinCompiled), (n.cpTypography = t.exports);
  }
})(this, function() {
  "use strict";
  !(function() {
    var n = "cp-typography-head";
    if (!document.getElementById(n)) {
      var e = document.createElement("div");
      e.setAttribute("style", "display: none;"),
        e.setAttribute("id", n),
        (e.innerHTML =
          '\n    <style id="' +
          n +
          '-style">:root {\n\n  --font-size: 16px;\n  --line-height: 1.5em;\n  --font-family: "Overpass", Overpass, Helvetica, helvetica, arial, sans-serif;\n  --code-font-family: Consolas, Monaco, "Andale Mono", monospace;\n  --font-weight: 400;\n  --heading-font-weight: 600;\n  --h1-font-size: 24px;\n  --h2-font-size: 21px;\n  --h3-font-size: 18px;\n  --h4-font-size: 16px;\n  --h5-font-size: 16px;\n  --h6-font-size: 14px;\n  --alt-h1-font-size: 30px;\n  --alt-h2-font-size: 26px;\n  --alt-h3-font-size: 20px;\n  --alt-h4-font-size: 18px;\n  --alt-h5-font-size: 16px;\n  --alt-h6-font-size: 14px;\n  --paragraph-margin-bottom: var(--font-size, 16px);\n  --heading-margin-top: 1em;\n  --heading-margin-bottom: 10px; }\n\nbody {\n  font-family: var(--font-family, "Overpass", Overpass, Helvetica, helvetica, arial, sans-serif);\n  font-size: var(--font-size, 16px);\n  line-height: var(--line-height, 1.5em);\n  font-weight: var(--font-weight, 400);\n  color: var(--text-color, #333);\n  text-rendering: optimizeLegibility;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-smoothing: antialiased; }\n\np {\n  margin-top: 1em;\n  margin-bottom: var(--paragraph-margin-bottom, 1em); }\n\nh1, h2, h3, h4, h5, h6 {\n  margin-top: var(--heading-margin-top, 1em);\n  margin-bottom: var(--heading-margin-bottom, 10px);\n  font-weight: var(--heading-font-weight, 600);\n  line-height: var(--line-height, 1.5em);\n  text-rendering: auto; }\n\nh1 {\n  font-size: var(--h1-font-size, 24px); }\n\nh2 {\n  font-size: var(--h2-font-size, 21px); }\n\nh3 {\n  font-size: var(--h3-font-size, 18px); }\n\nh4 {\n  font-size: var(--h4-font-size, 16px); }\n\nh5 {\n  font-size: var(--h5-font-size, 16px); }\n\nh6 {\n  font-size: var(--h6-font-size, 14px); }</style>\n  '),
        document.head.appendChild(e),
        window.ShadyCSS &&
          window.ShadyCSS.CustomStyleInterface.addCustomStyle(
            document.querySelector("#" + n + "-style")
          );
    }
  })();
});
