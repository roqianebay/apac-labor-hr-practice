(function () {
  const UI = window.DASH_HUB_UI;
  const BOARDS = window.DASH_HUB_BOARDS || [];
  const KEY = "apac-er-lang";

  const ICONS = {
    labor:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M7 8h10M6 12h12M8 16h8"/></svg>',
    gov:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true"><path d="M4 20V9l8-5 8 5v11"/><path d="M9 20v-6h6v6"/></svg>',
    ernews:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true"><path d="M4 5h16v14H4z"/><path d="M8 9h8M8 13h6"/></svg>',
    "market-intel":
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true"><path d="M4 20V10l4-3 4 3v10"/><path d="M12 20V6l4-3 4 3v14"/><path d="M8 17h2M16 14h2"/></svg>',
    talent:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true"><path d="M4 18V6l8-3 8 3v12"/><path d="M12 9v3"/></svg>',
    "employer-benefits":
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true"><rect x="3" y="8" width="18" height="13" rx="2"/><path d="M12 8V5a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v3"/></svg>',
    benefits:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true"><path d="M8 4h8l2 4H6l2-4z"/><path d="M6 8v12h12V8"/></svg>',
    leave:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true"><rect x="4" y="5" width="16" height="16" rx="2"/><path d="M8 3v4M16 3v4M4 11h16"/></svg>',
    default:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><rect x="4" y="4" width="16" height="16" rx="3"/></svg>'
  };

  const state = { lang: localStorage.getItem(KEY) === "en" ? "en" : "zh" };

  function t(v) {
    if (v && typeof v === "object" && ("zh" in v || "en" in v)) return v[state.lang] || v.zh || v.en || "";
    return v == null ? "" : String(v);
  }

  function setText(id, html) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  }

  function iconFor(board) {
    return ICONS[board.id] || ICONS.default;
  }

  function cornerBadgeHtml(b) {
    const label = b.badge ? t(b.badge) : b.primary ? t(UI.primaryBadge) : "";
    if (!label) return "";
    let cls = "dash-badge dash-badge-corner";
    if (b.primary) cls += " primary";
    else if (b.badgeAccent === "apac") cls += " accent-apac";
    return `<span class="${cls}">${label}</span>`;
  }

  function boardCardHtml(b) {
    const bullets = b.bullets.map((x) => `<li>${t(x)}</li>`).join("");
    const corner = cornerBadgeHtml(b);
    const rel = b.ext ? ' target="_blank" rel="noopener noreferrer"' : "";
    const extMark = b.ext ? ' <span class="dash-ext" aria-hidden="true">↗</span>' : "";
    return `
      <article class="dash-card card${b.primary ? " is-primary" : ""}${b.badgeAccent === "apac" ? " is-apac-accent" : ""}">
        ${corner}
        <div class="dash-card-top">
          <div class="dash-card-icon" aria-hidden="true">${iconFor(b)}</div>
        </div>
        <header class="dash-card-head">
          <h3>${t(b.title)}${extMark}</h3>
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
    setText("ui-row1-title", t(UI.row1Title));
    setText("ui-row1-sub", t(UI.row1Sub));
    setText("ui-row2-title", t(UI.row2Title));
    setText("ui-row2-sub", t(UI.row2Sub));
    setText("ui-module-lbl", t(UI.moduleCount));
    const countEl = document.getElementById("ui-module-count");
    if (countEl) countEl.textContent = String(BOARDS.length);
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