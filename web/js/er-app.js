(function () {
  const D = window.ER_DATA;
  const UI = window.ER_UI;
  const C = window.ER_COMPACT;
  const COLS = D.colIds;
  const KEY = "apac-er-lang";
  const CASE_KEY = {
    redundancy: "redundancy",
    performance: "performance",
    probation: "probation",
    discipline: "discipline"
  };

  const state = {
    lang: localStorage.getItem(KEY) === "en" ? "en" : "zh",
    caseId: "redundancy",
    casesViewId: "redundancy",
    countryId: "cn"
  };

  function t(v) {
    if (v && typeof v === "object" && ("zh" in v || "en" in v)) {
      return v[state.lang] || v.zh || v.en || "";
    }
    return v == null ? "" : String(v);
  }

  function riskClass(s) {
    s = String(s);
    if (/Very high|极高|Medium-high|中高|^High$|^高$/.test(s) && !/Medium-low|中低|Low–medium|低-中/.test(s)) {
      if (/^Medium$|^中$/.test(s)) return "mid";
      return "high";
    }
    if (/Low|低/.test(s)) return /medium|中/.test(s) ? "mid" : "low";
    if (/Medium|中/.test(s)) return "mid";
    return "";
  }

  function setText(id, html) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  }

  function nameOf(id) {
    const j = D.jurisdictions.find((x) => x.id === id);
    return j ? t(j.name) : id;
  }

  function arrow() {
    return `<div class="flow-arr" aria-hidden="true"></div>`;
  }

  function countryFlowHtml(caseId, countryId) {
    const steps = (C.countryFlows[caseId] || {})[countryId] || [];
    return steps
      .map((s, i) => `<div class="flow-node process">${t(s)}</div>${i < steps.length - 1 ? arrow() : ""}`)
      .join("");
  }

  function caseItems(j, caseId) {
    if (caseId === "redundancy") return j.redundancy;
    if (caseId === "performance") return j.performance;
    if (caseId === "probation") return j.probation;
    return j.discipline;
  }

  function renderChrome() {
    document.documentElement.lang = state.lang === "en" ? "en" : "zh-CN";
    document.title = t(UI.title);
    setText("ui-brand", t(UI.brand));
    setText("ui-nav-index", t(UI.navIndex));
    setText("ui-nav-hub", t(UI.navHub));
    setText("ui-hub-h2", t(UI.hubH2));
    setText("ui-hub-sub", t(UI.hubSub));
    setText("ui-nav-compare", t(UI.navCompare));
    setText("ui-nav-sources", t(UI.navSources));
    setText("ui-sources-h2", t(UI.sourcesH2));
    setText("ui-sources-sub", t(UI.sourcesSub));
    setText("ui-sources-more14", t(UI.sourcesMore14));
    setText("ui-nav-cases", t(UI.navCases));
    setText("ui-nav-countries", t(UI.navCountries));
    setText("ui-nav-tools", t(UI.navTools));
    setText("ui-cases-h2", t(UI.casesH2));
    setText("ui-cases-sub", t(UI.casesSub));
    setText("ui-kicker", t(UI.kicker));
    setText("ui-h1", t(UI.h1));
    setText("ui-lede", t(UI.lede));
    setText("ui-chip-date", t(UI.chipDate));
    setText("ui-chip-floor", t(UI.chipFloor));
    setText("ui-chip-counsel", t(UI.chipCounsel));
    setText("ui-notice", t(UI.notice));
    setText("ui-compare-h2", t(UI.compareH2));
    setText("ui-compare-sub", t(UI.compareSub));
    setText("ui-countries-h2", t(UI.countriesH2));
    setText("ui-countries-sub", t(UI.countriesSub));
    setText("ui-pick-country", t(UI.pickCountry));
    setText("ui-footer", t(UI.footer));
    document.getElementById("lang-switch").setAttribute("aria-label", t(UI.langAria));
    document.querySelectorAll("#lang-switch button").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === state.lang);
    });
  }

  function renderMatrix() {
    const rows = window.ER_MATRIX_V2;
    const table = document.getElementById("matrix");
    const head = `<thead><tr><th class="dim">${t(UI.dim)}</th>${COLS
      .map(
        (id) =>
          `<th><button class="th-link${id === state.countryId ? " is-on" : ""}" type="button" data-country="${id}">${nameOf(id)}</button></th>`
      )
      .join("")}</tr></thead>`;
    const body = rows
      .map((row) => {
        const cells = COLS
          .map((id) => {
            const val = t(row[id]);
            const cls = row.risk ? riskClass(val) : "";
            const on = id === state.countryId ? " is-on" : "";
            return `<td class="${on.trim()}">${cls ? `<span class="risk ${cls}">${val}</span>` : val}</td>`;
          })
          .join("");
        return `<tr><td class="dim">${t(row.dim)}</td>${cells}</tr>`;
      })
      .join("");
    table.innerHTML = head + `<tbody>${body}</tbody>`;
  }

  function blockHtml(title, items) {
    if (!items) return "";
    const bilingual = items && typeof items === "object" && ("zh" in items || "en" in items) && !Array.isArray(items);
    if (Array.isArray(items) && !items.length) return "";
    const body = bilingual
      ? `<p>${t(items)}</p>`
      : `<ul class="list">${items.map((i) => `<li>${t(i)}</li>`).join("")}</ul>`;
    return `<div class="block"><h4>${title}</h4>${body}</div>`;
  }

  function renderHub() {
    const el = document.getElementById("hub-grid");
    const list = window.ER_HUB_LINKS || [];
    if (!el) return;
    el.innerHTML = list
      .map((item) => {
        const tag = item.current ? `<span class="hub-now">${state.lang === "en" ? "Current" : "当前"}</span>` : "";
        if (item.current) {
          return `<article class="hub-card is-current card"><h3>${t(item.title)} ${tag}</h3><p class="meta">${t(item.desc)}</p></article>`;
        }
        return `<a class="hub-card card" href="${item.href}" target="_blank" rel="noopener noreferrer"><h3>${t(item.title)}<span class="source-ext" aria-hidden="true">↗</span></h3><p class="meta">${t(item.desc)}</p></a>`;
      })
      .join("");
  }

  function renderSources() {
    const el = document.getElementById("sources-grid");
    if (!el) return;
    el.innerHTML = D.jurisdictions
      .map((j) => {
        const links = j.sources
          .map(
            (s) =>
              `<a class="source-link" href="${s.href}" target="_blank" rel="noopener noreferrer">${t(s.label)}<span class="source-ext" aria-hidden="true">↗</span></a>`
          )
          .join("");
        return `<article class="source-card card">
          <h3>${t(j.name)}</h3>
          <p class="meta">${t(j.law)}</p>
          <div class="source-links">${links}</div>
        </article>`;
      })
      .join("");
  }

  function renderCasesPanel() {
    const panel = document.getElementById("cases-panel");
    if (!panel) return;
    const c = D.cases.find((x) => x.id === state.casesViewId) || D.cases[0];
    const steps = c.steps || [];
    const globalFlow = steps
      .map((s, i) => {
        const label = t(s);
        return `<div class="flow-node process cases-step" title="${label.replace(/"/g, "&quot;")}"><span class="cases-step-n" aria-hidden="true">${i + 1}</span><span class="cases-step-t">${label}</span></div>${i < steps.length - 1 ? arrow() : ""}`;
      })
      .join("");
    const tableRows = COLS.map((id) => {
      const loc = (C.countryFlows[c.id] || {})[id] || [];
      const chips = loc
        .map((s, i) => `<span class="chip-step" title="${t(s).replace(/"/g, "&quot;")}"><b>${i + 1}</b> ${t(s)}</span>`)
        .join("");
      return `<tr><td class="dim">${nameOf(id)}</td><td><div class="chip-steps">${chips || "—"}</div></td></tr>`;
    }).join("");

    panel.innerHTML = `
      <p class="cases-intro">${t(c.intro)}</p>
      <h4 class="cases-label">${t(UI.flowGlobal)}</h4>
      <div class="cases-flow-track">
        <div class="flow cases-flow-h" role="list" style="--case-steps:${steps.length}">${globalFlow}</div>
      </div>
      <h4 class="cases-label">${t(UI.tipsH3)}</h4>
      <div class="table-wrap cases-table-wrap">
        <table class="cases-market-table">
          <thead><tr><th class="dim">${t(UI.casesMarketCol)}</th><th>${t(UI.casesStepsCol)}</th></tr></thead>
          <tbody>${tableRows}</tbody>
        </table>
      </div>
      <p class="hint cases-hint">${t(UI.casesHintDetail)}</p>`;
  }

  function renderCases() {
    const root = document.getElementById("cases-root");
    if (!root) return;
    root.innerHTML = `
      <div class="cases-desk card">
        <div class="filters cases-type-tabs" id="cases-type-tabs" role="tablist">
          ${D.cases
            .map(
              (c) =>
                `<button type="button" class="tab${c.id === state.casesViewId ? " active" : ""}" role="tab" aria-selected="${c.id === state.casesViewId}" data-cases-type="${c.id}">${t(c.name)}</button>`
            )
            .join("")}
        </div>
        <div id="cases-panel" role="tabpanel"></div>
      </div>`;
    renderCasesPanel();
  }

  function renderCountryTabs() {
    document.getElementById("country-tabs").innerHTML = COLS.map(
      (id) =>
        `<button class="tab${id === state.countryId ? " active" : ""}" type="button" data-country="${id}">${nameOf(id)}</button>`
    ).join("");
  }

  function renderDesk() {
    const j = D.jurisdictions.find((x) => x.id === state.countryId);
    const compact = C.countries[j.id];
    const snap = C.snapshot[j.id];
    const caseMeta = D.cases.find((c) => c.id === state.caseId);
    const items = caseItems(j, state.caseId);
    const links = j.sources
      .map((s) => `<a href="${s.href}" target="_blank" rel="noopener">${t(s.label)}</a>`)
      .join("");

    const allBlocks = [
      { key: "redundancy", title: t(UI.blockRedundancy), items: j.redundancy },
      { key: "performance", title: t(UI.blockPerformance), items: j.performance },
      { key: "probation", title: t(UI.blockProbation), items: j.probation },
      { key: "discipline", title: t(UI.blockDiscipline), items: j.discipline }
    ]
      .map((b) => blockHtml(b.title, b.items))
      .join("");

    document.getElementById("country-desk").innerHTML = `
      <div class="country-head">
        <h3>${t(j.name)}</h3>
        <span class="risk ${snap.risk}">${t(snap.riskLabel)}</span>
      </div>
      <p class="meta">${t(j.law)}</p>
      <p>${t(j.summary)}</p>
      <div class="blocks" style="margin:14px 0">
        <div class="block"><h4>${t(UI.deskIntro)}</h4><ul class="list"><li><strong>${t(UI.tagSeverance)}</strong> ${t(j.severance)}</li><li><strong>${t(UI.tagNotice)}</strong> ${t(j.notice)}</li></ul></div>
        ${blockHtml(t(UI.deskDispute), j.dispute)}
      </div>
      <div class="kpi">
        <div><span>${t(UI.firstMove)}</span><strong>${t(compact.first)}</strong></div>
        <div class="kpi-red"><span>${t(UI.redline)}</span><strong>${t(compact.redline)}</strong></div>
        <div><span>${t(UI.tagSeverance)}</span><strong>${t(compact.payShort)}</strong></div>
        <div><span>${t(UI.tagNotice)}</span><strong>${t(compact.noticeShort)}</strong></div>
      </div>
      <div class="filters" id="case-tabs">
        ${D.cases
          .map(
            (c) =>
              `<button class="tab${c.id === state.caseId ? " active" : ""}" type="button" data-case="${c.id}">${t(c.name)}</button>`
          )
          .join("")}
      </div>
      <div class="desk-case">
        <p class="headline">${t(caseMeta.name)} · ${t(j.name)}</p>
        <div class="flow-split single">
          <div class="flow-col">
            <h3 class="flow-label">${t(UI.flowCountry)}</h3>
            <div class="flow">${countryFlowHtml(state.caseId, j.id)}</div>
          </div>
          <div class="flow-col">
            <h3 class="flow-label">${t(UI.casePolicy)}</h3>
            <ul class="list">${items.map((i) => `<li>${t(i)}</li>`).join("")}</ul>
            <p class="play-line"><strong>${t(UI.playbookLabel)}：</strong>${t(j.playbook[CASE_KEY[state.caseId] || state.caseId])}</p>
          </div>
        </div>
        <details class="block" style="margin-top:16px">
          <summary style="cursor:pointer;font-weight:700">${t(UI.deskAllPolicies)}</summary>
          <div class="blocks" style="margin-top:12px">${allBlocks}</div>
        </details>
        <div class="sources">${links}</div>
      </div>`;
  }

  function setCountry(id, scroll) {
    if (!COLS.includes(id)) return;
    state.countryId = id;
    renderMatrix();
    renderCountryTabs();
    renderDesk();
    if (scroll) {
      document.getElementById("countries").scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function render() {
    renderChrome();
    renderHub();
    renderMatrix();
    renderSources();
    renderCases();
    renderCountryTabs();
    renderDesk();
  }

  document.getElementById("lang-switch").addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-lang]");
    if (!btn) return;
    state.lang = btn.dataset.lang === "en" ? "en" : "zh";
    localStorage.setItem(KEY, state.lang);
    render();
  });

  document.getElementById("matrix").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-country]");
    if (!btn) return;
    setCountry(btn.dataset.country, true);
  });

  document.getElementById("country-tabs").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-country]");
    if (!btn) return;
    setCountry(btn.dataset.country, false);
  });

  document.getElementById("country-desk").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-case]");
    if (!btn) return;
    state.caseId = btn.dataset.case;
    state.casesViewId = state.caseId;
    renderDesk();
    renderCountryTabs();
    renderCases();
  });

  document.getElementById("cases-root").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-cases-type]");
    if (!btn) return;
    state.casesViewId = btn.dataset.casesType;
    state.caseId = state.casesViewId;
    renderCases();
    renderDesk();
    renderCountryTabs();
  });

  render();
})();
