!(function(e, n) {
  if ("function" == typeof define && define.amd)
    define(["./custom-style-interface.min.compiled.js"], n);
  else if ("undefined" != typeof exports)
    n(require("./custom-style-interface.min.compiled.js"));
  else {
    var r = { exports: {} };
    n(e.customStyleInterfaceMinCompiled), (e.cpVars = r.exports);
  }
})(this, function() {
  "use strict";
  !(function() {
    if (!document.getElementById("cp-vars-head")) {
      var e = document.createElement("div");
      e.setAttribute("style", "display: none;"),
        e.setAttribute("id", "cp-vars-head"),
        (e.innerHTML =
          '\n    <style id="cp-vars-head-style">:root {\n\n  --gutter-size: 32px;\n  --box-padding: 32px;\n  --box-padding-sm: 16px;\n  --box-padding-xs: 8px;\n\n  --breakpoint-xs-min: 480px;\n  --breakpoint-sm-min: 768px;\n  --breakpoint-md-min: 992px;\n  --breakpoint-lg-min: 1200px;\n  --breakpoint-xxs-max: 479px;\n  --breakpoint-xs-max: 767px;\n  --breakpoint-sm-max: 991px;\n  --breakpoint-md-max: 1199px;\n\n  --white: #fff;\n  --black: #1a1a1a;\n  --red: #c00;\n  --brand-primary: #c00;\n  --gray-gainsboro: #dcdcdc;\n  --gray-space: #4c4c4c;\n  --blue-sky: #a3dbe8;\n  --blue-light: #00b9e4;\n  --gold: #f0ab00;\n  --green: #92d400;\n  --purple: #7551A6;\n  --teal: #007a87;\n  --teal-dark: #004153;\n  --blue-peacock: #0088ce;\n  --orange: #ec7a08;\n  --green-verde: #3f9c35;\n  --gray-charcoal: #37424a;\n  --gray-nickel: #7a858b;\n  --black-soft: #252527;\n  --red-brick: #a30000;\n  --red-maroon: #820000;\n  --red-garnet: #6e0000;\n  --red-morello: #5a0000;\n  --red-red-wine: #460000;\n  --red-daredevil: #320000;\n  --gray-moon: #f0f0f0;\n  --gray-platinum: #e7e7e7;\n  --gray-mercury: #d2d2d2;\n  --gray-storm: #bebebe;\n  --gray-stone: #aaa;\n  --gray-fog: #969696;\n  --gray-battleship: #828282;\n  --gray-batman: #6e6e6e;\n  --gray-umbra: #5a5a5a;\n  --gray-iron: #464646;\n  --gray-night: #333;\n  --black-nero: #1e1e1e;\n  --gray-nimbus: #ededed;\n  --gray-silver: #ccc;\n  --blue-rain: #264a60;\n  --blue-denim: #06c;\n  --blue-navy: #004080;\n  --blue-azure: #0076e0;\n  --blue-maya: #73bcf7;\n  --blue-dodger: #2b9af3;\n  --purple-amethyst: #967abd;\n  --purple-rain: #3b0083;\n\n  --product-default: #252527;\n  --storage1: #ec7a08;\n  --storage2: #f0ab00;\n  --infrastructure1: #0088ce;\n  --infrastructure2: #00b9e4;\n  --app-dev1: #3f9c35;\n  --app-dev2: #92d400;\n  --support1: #37424a;\n  --support2: #7a858b;\n\n  --red-dark1: #a30000;\n  --red-dark2: #820000;\n  --red-dark3: #6e0000;\n  --red-dark4: #5a0000;\n  --red-dark5: #460000;\n  --red-dark6: #320000;\n  --gray1: #f0f0f0;\n  --gray2: #e7e7e7;\n  --gray3: #d2d2d2;\n  --gray4: #bebebe;\n  --gray5: #aaa;\n  --gray6: #969696;\n  --gray7: #828282;\n  --gray8: #6e6e6e;\n  --gray9: #5a5a5a;\n  --gray10: #464646;\n  --gray11: #333;\n  --gray12: #1e1e1e;\n\n  --text-color: #333;\n  --link-color: #06c;\n  --link-color-hover: #004080;\n  --link-color-visited: #7551A6;\n  --inverted-text-color: #fff;\n  --inverted-link-color: #73bcf7;\n  --inverted-link-color-hover: #2b9af3;\n  --inverted-link-color-visited: #967abd;\n  --ui-element: #0076e0;\n  --ui-element-hover: #004080;\n  --bg-color1: #fff;\n  --bg-color2: #e7e7e7;\n  --bg-color3: #d2d2d2;\n  --bg-color4: #bebebe;\n  --bg-color5: #aaa;\n  --bg-color6: #969696;\n\n  --border-width: 1px;\n  --border-style: solid;\n  --border-color: #ededed;\n\n  --cubic-bezier: cubic-bezier(0.465, 0.183, 0.153, 0.946); }</style>\n  '),
        document.head.appendChild(e),
        window.ShadyCSS &&
          window.ShadyCSS.CustomStyleInterface.addCustomStyle(
            document.querySelector("#cp-vars-head-style")
          );
    }
  })();
});
