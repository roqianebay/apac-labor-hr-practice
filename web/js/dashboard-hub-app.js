(function () {
  const UI = window.DASH_HUB_UI;
  const BOARDS = window.DASH_HUB_BOARDS || [];
  const KEY = "apac-er-lang";

  const state = { lang: localStorage.getItem(KEY) === "en" ? "en" : "zh" };

  function t(v) {
    if (v && typeof v === "object" && ("zh" in v || "en" in v)) return v[state.lang] || v.zh || v.en || "";
    return v == null ? "" : String(v);
  }

  function setText(id, html) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  }

  function boardCardHtml(b) {
      const bullets = b.bullets.map((x) => `<li>${t(x)}</li>`).join("");
      const primary = b.primary
        ? `<span class="dash-badge primary">${t(UI.primaryBadge)}</span>`
        : "";
      const rel = b.ext ? ' target="_blank" rel="noopener noreferrer"' : "";
      const extMark = b.ext ? ' <span class="dash-ext" aria-hidden="true">↗</span>' : "";
      return `
        <article class="dash-card card ${b.primary ? "is-primary" : ""}">
          <header class="dash-card-head">
            <h3>${t(b.title)}${extMark}</h3>
            ${primary}
          </header>
          <p class="dash-pitch">${t(b.pitch)}</p>
          <ul class="dash-list">${bullets}</ul>
          <a class="dash-cta" href="${b.href}"${rel}>${t(UI.openBoard)}</a>
        </article>`;
  }

  function renderBoards() {
    const row1 = document.getElementById("dash-grid-row1");
    const row2 = document.getElementById("dash-grid-row2");
    const legacy = document.getElementById("dash-grid");
    const renderList = (boards, host) => {
      if (!host) return;
      host.innerHTML = boards.map((b) => boardCardHtml(b)).join("");
    };
    if (row1 && row2) {
      renderList(BOARDS.filter((b) => (b.hubRow || 1) === 1), row1);
      renderList(BOARDS.filter((b) => b.hubRow === 2), row2);
    } else if (legacy) {
      legacy.innerHTML = BOARDS.map((b) => boardCardHtml(b)).join("");
    }
  }

  function applyChrome() {
    document.documentElement.lang = state.lang === "en" ? "en" : "zh-CN";
    document.title = t(UI.title);
    setText("ui-brand", t(UI.brand));
    setText("ui-kicker", t(UI.kicker));
    setText("ui-title", t(UI.title));
    setText("ui-lede", t(UI.lede));
    setText("ui-notice", t(UI.notice));
    setText("ui-section-h2", t(UI.sectionH2));
    setText("ui-section-sub", t(UI.sectionSub));
    setText("ui-foot", t(UI.foot));
    setText("ui-nav-index", t(UI.navIndex));
    setText("ui-nav-labor", t(UI.navLabor));
    document.querySelectorAll("#lang-switch button").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === state.lang);
    });
    renderBoards();
  }

  function init() {
    document.getElementById("lang-switch")?.addEventListener("click", (e) => {
      const btn = e.target.closest("button[data-lang]");
      if (!btn) return;
      state.lang = btn.dataset.lang === "en" ? "en" : "zh";
      localStorage.setItem(KEY, state.lang);
      applyChrome();
    });
    applyChrome();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();