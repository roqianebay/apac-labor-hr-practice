(function () {
  var params = new URLSearchParams(location.search);
  var path = location.pathname;
  var isLeave = /\/leave-monitor\//.test(path);
  var isPolicyDict = /er-dashboards\.html$/i.test(path) || /\/er-dashboards\.html/i.test(path);
  var defaultLightPage = isLeave || isPolicyDict;

  var darkParam = params.get("theme");
  if (darkParam === "dark" || darkParam === "er-news") {
    return;
  }

  var wantLight =
    defaultLightPage || params.get("theme") === "er-process-draft";

  if (!wantLight) return;

  document.documentElement.classList.add("theme-er-process-draft");

  var cssBase = "css/";
  if (/\/ebay-market-intel\/|\/benefits-monitor\/|\/leave-monitor\/|\/employer-benefits-summary\//.test(path)) {
    cssBase = "../css/";
  }

  function addCss(href) {
    var el = document.createElement("link");
    el.rel = "stylesheet";
    el.href = href;
    document.head.appendChild(el);
  }

  var v = "20261126-apac-badge";
  addCss(cssBase + "theme-er-process-draft.css?v=" + v);

  window.addEventListener("DOMContentLoaded", function () {
    if (document.body.classList.contains("dash-hub-page")) {
      addCss(cssBase + "dashboard-hub-er-draft.css?v=" + v);
    }

    var root = cssBase === "../css/" ? "../" : "./";
    var bar = document.createElement("div");
    bar.className = "theme-draft-ribbon";

    if (defaultLightPage) {
      bar.innerHTML =
        "流程风亮色（与 <a href=\"" +
        root +
        "index.html#hub\">劳动法 #hub</a> 一致）· " +
        "<a href=\"" +
        root +
        "theme-compare.html\">配色对比</a> · " +
        '<a href="#" id="theme-draft-off">切换暗色看板</a>';
    } else {
      bar.innerHTML =
        "配色草稿（对齐 <a href=\"" +
        root +
        "index.html#hub\">流程与劳动法</a>）· " +
        "<a href=\"" +
        root +
        "theme-compare.html\">对比入口</a> · " +
        '<a href="#" id="theme-draft-off">查看当前正式配色</a>';
    }

    document.body.prepend(bar);
    var off = document.getElementById("theme-draft-off");
    if (off) {
      off.addEventListener("click", function (e) {
        e.preventDefault();
        var u = new URL(location.href);
        if (defaultLightPage) {
          u.searchParams.set("theme", "dark");
        } else {
          u.searchParams.delete("theme");
        }
        location.href = u.toString();
      });
    }
  });
})();