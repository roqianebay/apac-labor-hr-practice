(function () {
  var STORAGE_KEY = "apac-desk-theme";
  var CSS_V = "20261126-theme-toggle";
  var path = location.pathname;

  var isLeave = /\/leave-monitor\//.test(path);
  var isPolicyDict = /er-dashboards\.html$/i.test(path) || /\/er-dashboards\.html/i.test(path);
  var defaultLightPage = isLeave || isPolicyDict;

  var cssBase = "css/";
  if (/\/ebay-market-intel\/|\/benefits-monitor\/|\/leave-monitor\/|\/employer-benefits-summary\//.test(path)) {
    cssBase = "../css/";
  }

  function pageDefaultTheme() {
    return defaultLightPage ? "light" : "dark";
  }

  function parseUrlTheme() {
    var p = new URLSearchParams(location.search).get("theme");
    if (!p) return null;
    if (p === "dark" || p === "er-news") return "dark";
    if (p === "light" || p === "er-process-draft") return "light";
    return null;
  }

  function resolveTheme() {
    var fromUrl = parseUrlTheme();
    if (fromUrl) return fromUrl;
    var stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;
    return pageDefaultTheme();
  }

  function ensureStylesheet(id, href) {
    if (document.getElementById(id)) return;
    var el = document.createElement("link");
    el.id = id;
    el.rel = "stylesheet";
    el.href = href;
    document.head.appendChild(el);
  }

  function applyThemeClass(mode) {
    var light = mode === "light";
    document.documentElement.classList.toggle("theme-er-process-draft", light);
    if (light) {
      ensureStylesheet("apac-theme-er-draft", cssBase + "theme-er-process-draft.css?v=" + CSS_V);
    }
  }

  var currentTheme = resolveTheme();
  applyThemeClass(currentTheme);

  function guessLang() {
    var keys = [
      "apac-er-lang",
      "apac-benefits-lang",
      "apac-employer-benefits-lang",
      "apac-leave-lang",
      "ebay-market-intel-lang"
    ];
    for (var i = 0; i < keys.length; i++) {
      var v = localStorage.getItem(keys[i]);
      if (v === "en" || v === "zh") return v;
    }
    return document.documentElement.lang === "en" ? "en" : "zh";
  }

  function themeLabels(lang) {
    var en = lang === "en";
    return {
      dark: en ? "Dark" : "暗色",
      light: en ? "Light" : "亮色",
      aria: en ? "Color theme" : "配色"
    };
  }

  function updateThemeSwitchUi() {
    var wrap = document.getElementById("theme-switch");
    if (!wrap) return;
    var L = themeLabels(guessLang());
    wrap.setAttribute("aria-label", L.aria);
    var darkBtn = wrap.querySelector('[data-theme="dark"]');
    var lightBtn = wrap.querySelector('[data-theme="light"]');
    if (darkBtn) darkBtn.textContent = L.dark;
    if (lightBtn) lightBtn.textContent = L.light;
    wrap.querySelectorAll("button[data-theme]").forEach(function (btn) {
      var on = btn.dataset.theme === currentTheme;
      btn.classList.toggle("active", on);
      btn.setAttribute("aria-pressed", on ? "true" : "false");
    });
  }

  function ensureHubDraftCss() {
    if (!document.body.classList.contains("dash-hub-page")) return;
    ensureStylesheet("apac-theme-hub-draft", cssBase + "dashboard-hub-er-draft.css?v=" + CSS_V);
  }

  function setTheme(mode, persist) {
    if (mode !== "light" && mode !== "dark") return;
    currentTheme = mode;
    applyThemeClass(mode);
    if (mode === "light") ensureHubDraftCss();
    if (persist) localStorage.setItem(STORAGE_KEY, mode);
    try {
      var u = new URL(location.href);
      if (u.searchParams.has("theme")) {
        u.searchParams.delete("theme");
        history.replaceState(null, "", u.toString());
      }
    } catch (e) { /* ignore */ }
    updateThemeSwitchUi();
    if (window.ApacCharts && typeof window.ApacCharts.resizeAll === "function") {
      requestAnimationFrame(function () {
        window.ApacCharts.resizeAll();
      });
    }
  }

  function mountThemeSwitch() {
    var lang = document.getElementById("lang-switch");
    if (!lang || document.getElementById("theme-switch")) return;

    var wrap = document.createElement("div");
    wrap.className = "lang-switch theme-switch";
    wrap.id = "theme-switch";
    wrap.setAttribute("role", "group");
    wrap.innerHTML =
      '<button type="button" data-theme="dark" aria-pressed="false"></button>' +
      '<button type="button" data-theme="light" aria-pressed="false"></button>';
    lang.insertAdjacentElement("afterend", wrap);

    wrap.addEventListener("click", function (e) {
      var btn = e.target.closest("button[data-theme]");
      if (!btn || btn.dataset.theme === currentTheme) return;
      setTheme(btn.dataset.theme, true);
    });

    document.addEventListener(
      "click",
      function (e) {
        if (e.target.closest("#lang-switch button[data-lang]")) {
          requestAnimationFrame(updateThemeSwitchUi);
        }
      },
      true
    );

    updateThemeSwitchUi();
  }

  window.ApacTheme = {
    get mode() {
      return currentTheme;
    },
    setTheme: setTheme,
    refreshLabels: updateThemeSwitchUi
  };

  window.addEventListener("DOMContentLoaded", function () {
    if (currentTheme === "light") ensureHubDraftCss();
    mountThemeSwitch();
  });
})();