(function (global) {
  let appliedBenefitFilter = { q: "", country: "", category: "" };

  function markets() {
    return global.BENEFIT_MARKETS || [];
  }
  function cats() {
    return global.BENEFIT_CATEGORIES || [];
  }
  function marketsByCodes(codes) {
    const byCode = Object.fromEntries(markets().map((m) => [m.code, m]));
    return (codes || []).map((c) => byCode[c]).filter(Boolean);
  }
  function matrixFocusSet() {
    return new Set(global.BENEFIT_MATRIX_FOCUS || ["CN", "AU", "SG"]);
  }

  function lang() {
    return global.BenefitsLang || null;
  }

  function readDraftFilter() {
    const raw = document.getElementById("searchInput")?.value || "";
    return {
      q: String(raw).trim().toLowerCase(),
      country: document.getElementById("countryFilter")?.value || "",
      category: document.getElementById("categoryFilter")?.value || ""
    };
  }

  function getFilter() {
    return { ...appliedBenefitFilter };
  }

  function marketSearchBlob(m, LL) {
    let text = (m.nameZh || "") + (m.nameEn || "") + m.code;
    (m.items || []).forEach((it) => {
      text += LL ? LL.itemField(it, "summary") : it.summary;
      text += (it.details || []).join(" ");
      if (LL?.lang === "en" && it.detailsEn) text += it.detailsEn.join(" ");
      text += LL ? LL.catLabel(it.cat) : it.cat;
    });
    return text.toLowerCase();
  }

  function marketMatchesQuery(m, q, LL) {
    if (!q) return true;
    return marketSearchBlob(m, LL).includes(q);
  }

  function runBenefitSearch() {
    appliedBenefitFilter = readDraftFilter();
    applyBenefitViews();
  }

  function resetBenefitSearch() {
    const search = document.getElementById("searchInput");
    if (search) search.value = "";
    const cf = document.getElementById("countryFilter");
    const catf = document.getElementById("categoryFilter");
    if (cf) cf.value = "";
    if (catf) catf.value = "";
    appliedBenefitFilter = { q: "", country: "", category: "" };
    applyBenefitViews();
  }

  function activateTab(tab) {
    const btn = document.querySelector(`.tab-btn[data-tab="${tab}"]`);
    if (!btn) return;
    document.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
    document.querySelectorAll(".panel").forEach((p) => p.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById("panel-" + tab)?.classList.add("active");
  }

  function goToCountry(code) {
    activateTab("countries");
    if (!appliedBenefitFilter.q && !appliedBenefitFilter.country && !appliedBenefitFilter.category) {
      applyBenefitViews();
    } else {
      resetBenefitSearch();
    }
    requestAnimationFrame(() => {
      const el = document.getElementById("benefit-country-" + code);
      if (el && el.tagName === "DETAILS") el.open = true;
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  function goToCategory(catId) {
    const catf = document.getElementById("categoryFilter");
    if (catf) catf.value = catId;
    activateTab("countries");
    runBenefitSearch();
    requestAnimationFrame(() => {
      document.getElementById("panel-countries")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  function openCountryCodes(f) {
    const LL = lang();
    if (f.country) return new Set([f.country]);
    if (f.q) {
      const open = new Set();
      markets().forEach((m) => {
        if (marketMatchesQuery(m, f.q, LL)) open.add(m.code);
      });
      return open;
    }
    return new Set(global.BENEFIT_MATRIX_FOCUS || ["CN", "AU", "SG"]);
  }

  function itemShortText(item, LL) {
    if (LL && item.shortSummary) return LL.itemField(item, "shortSummary");
    if (item.shortSummary) return item.shortSummary;
    const full = LL ? LL.itemField(item, "summary") : item.summary;
    const plain = String(full).replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
    return plain.length > 88 ? plain.slice(0, 86) + "…" : plain;
  }

  function detailBullets(item, LL) {
    const list = LL && LL.lang === "en" && item.detailsEn ? item.detailsEn : item.details;
    return (list || []).map((x) => `<li>${x}</li>`).join("");
  }

  function countryTeaser(m, LL) {
    const pub = m.items.find((x) => x.cat === "holidays");
    if (pub) return itemShortText(pub, LL);
    const first = m.items[0];
    return first ? itemShortText(first, LL) : "";
  }

  function renderHomeIndex() {
    const LL = lang();
    const tabHost = document.getElementById("indexTabChips");
    if (!tabHost) return;

    const tabs = [
      { tab: "overview", label: LL ? LL.t(LL.UI.tabOverview) : "Overview" },
      { tab: "countries", label: LL ? LL.t(LL.UI.tabCountries) : "Countries" },
      { tab: "categories", label: LL ? LL.t(LL.UI.tabCategories) : "Categories" },
      { tab: "sources", label: LL ? LL.t(LL.UI.tabSources) : "Sources" }
    ];
    tabHost.innerHTML = tabs
      .map((t) => `<button type="button" class="index-chip" data-tab="${t.tab}">${t.label}</button>`)
      .join("");

    const focus = matrixFocusSet();
    const order = global.BENEFIT_MATRIX_CODES || [];
    const ordered = [...markets()].sort((a, b) => {
      const ai = order.indexOf(a.code);
      const bi = order.indexOf(b.code);
      if (ai !== -1 || bi !== -1) return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
      return 0;
    });
    const marketHost = document.getElementById("indexMarketChips");
    if (marketHost) {
      marketHost.innerHTML = ordered
        .map((m) => {
          const feat = focus.has(m.code) ? " is-focus" : "";
          const name = LL ? LL.marketName(m) : m.nameZh;
          return `<button type="button" class="index-chip${feat}" data-country="${m.code}">${m.flag} ${name}</button>`;
        })
        .join("");
    }

    const catHost = document.getElementById("indexCatChips");
    if (catHost) {
      catHost.innerHTML = cats()
        .map((c) => {
          const label = LL ? LL.t(c.label) : c.id;
          return `<button type="button" class="index-chip" data-cat="${c.id}">${label}</button>`;
        })
        .join("");
    }

    const f = getFilter();
    const wrap = document.getElementById("indexHitsWrap");
    const list = document.getElementById("indexHits");
    if (!f.q || f.q.length < 2) {
      if (wrap) wrap.hidden = true;
      if (list) list.innerHTML = "";
      return;
    }

    const hits = [];
    markets().forEach((m) => {
      if (!marketMatchesQuery(m, f.q, LL)) return;
      m.items.forEach((it) => {
        const text =
          (LL ? LL.itemField(it, "summary") : it.summary) +
          " " +
          (LL && LL.lang === "en" && it.detailsEn ? it.detailsEn.join(" ") : (it.details || []).join(" "));
        const catName = LL ? LL.catLabel(it.cat) : it.cat;
        if (!text.toLowerCase().includes(f.q) && !catName.toLowerCase().includes(f.q)) return;
        const plain = text.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
        hits.push({
          code: m.code,
          flag: m.flag,
          name: LL ? LL.marketName(m) : m.nameZh,
          cat: catName,
          snippet: plain.length > 120 ? plain.slice(0, 118) + "…" : plain
        });
      });
    });

    if (!wrap || !list) return;
    if (!hits.length) {
      wrap.hidden = false;
      list.innerHTML = `<li class="index-hit-empty">${LL ? LL.t(LL.UI.indexNoHits) : "No matches"}</li>`;
      return;
    }
    wrap.hidden = false;
    list.innerHTML = hits
      .slice(0, 24)
      .map(
        (h) =>
          `<li><button type="button" class="index-hit" data-country="${h.code}">` +
          `<span class="hit-title">${h.flag} ${h.name} · ${h.cat}</span>` +
          `<span class="hit-snippet">${h.snippet}</span></button></li>`
      )
      .join("");
  }
  global.renderHomeIndex = renderHomeIndex;

  function renderPolicySpotlight() {
    const LL = lang();
    const host = document.getElementById("policySpotlight");
    const spots = global.POLICY_SPOTLIGHTS || [];
    if (!host || !spots.length) {
      if (host) host.innerHTML = "";
      return;
    }
    const linkLabel = LL ? LL.t(LL.UI.spotlightLink) : "Source";
    host.innerHTML = spots
      .map((s) => {
        const title = s.title && (s.title.zh ? LL.t(s.title) : s.title);
        const headline = s.headline && (s.headline.zh ? LL.t(s.headline) : s.headline);
        const sub = s.sub && (s.sub.zh ? LL.t(s.sub) : s.sub);
        const body = s.body && (s.body.zh ? LL.t(s.body) : s.body);
        const pills = (s.pills || [])
          .map((p) => {
            const label = p && p.zh ? LL.t(p) : p;
            return `<span class="pill">${label}</span>`;
          })
          .join("");
        return (
          `<article class="policy-spot">${s.code ? `<span class="spot-code">${s.code}</span>` : ""}` +
          `<h3>${title}</h3>` +
          `<div class="big">${headline}<small>${sub || ""}</small></div>` +
          `<p>${body}</p>` +
          `<div class="pill-row">${pills}</div>` +
          (s.href
            ? `<p class="spot-link"><a href="${s.href}" target="_blank" rel="noopener noreferrer" style="color:var(--accent-light)">${linkLabel} →</a></p>`
            : "") +
          `</article>`
        );
      })
      .join("");
  }
  global.renderPolicySpotlight = renderPolicySpotlight;

  function renderBenefitStats() {
    const LL = lang();
    const host = document.getElementById("statsGrid");
    if (!host) return;
    host.innerHTML = `
      <div class="stat-card"><div class="label">${LL ? LL.t(LL.UI.statMarkets) : "Markets"}</div><div class="value">${markets().length}</div></div>
      <div class="stat-card"><div class="label">${LL ? LL.t(LL.UI.statCats) : "Types"}</div><div class="value">${cats().length}</div></div>`;
  }
  global.renderBenefitStats = renderBenefitStats;

  function fillBenefitFilters() {
    const LL = lang();
    const cf = document.getElementById("countryFilter");
    const catf = document.getElementById("categoryFilter");
    if (!cf || !catf) return;
    const cv = cf.value;
    const catv = catf.value;
    cf.innerHTML =
      `<option value="">${LL ? LL.t(LL.UI.filterMarket) : "All"}</option>` +
      markets().map((m) => `<option value="${m.code}">${LL ? LL.marketName(m) : m.nameZh}</option>`).join("");
    catf.innerHTML =
      `<option value="">${LL ? LL.t(LL.UI.filterCat) : "All"}</option>` +
      cats().map((c) => `<option value="${c.id}">${LL ? LL.t(c.label) : c.id}</option>`).join("");
    cf.value = cv;
    catf.value = catv;
  }
  global.fillBenefitFilters = fillBenefitFilters;

  function renderMatrixTable(headId, bodyId, cols, f, LL, focus) {
    const col = LL ? LL.t(LL.UI.colType) : "Type";
    const head = document.getElementById(headId);
    const body = document.getElementById(bodyId);
    if (!head || !body) return;
    head.innerHTML =
      `<tr><th class="topic-col">${col}</th>${cols
        .map((m) => {
          const foc = focus.has(m.code) ? " matrix-th-focus" : "";
          return `<th class="${foc.trim()}">${m.flag} ${LL ? LL.marketName(m) : m.nameZh}</th>`;
        })
        .join("")}</tr>`;
    body.innerHTML = cats()
      .map((cat) => {
        const rowText = cols
          .map((m) => {
            const it = m.items.find((x) => x.cat === cat.id);
            return it ? itemShortText(it, LL) + " " + (LL ? LL.itemField(it, "summary") : it.summary) : "";
          })
          .join(" ");
        const hide = (f.category && f.category !== cat.id) || (f.q && !rowText.toLowerCase().includes(f.q));
        const cells = cols
          .map((m) => {
            if (f.country && f.country !== m.code) return "<td>—</td>";
            const it = m.items.find((x) => x.cat === cat.id);
            if (!it) return "<td>—</td>";
            let extra = m.code === "CN" && cat.id === "holidays" ? " cell-cn-public" : "";
            if (focus.has(m.code)) extra += " cell-matrix-focus";
            return `<td class="cell-short${extra}">${itemShortText(it, LL)}</td>`;
          })
          .join("");
        return `<tr class="${hide ? "hidden" : ""}"><td class="topic-col">${LL ? LL.catLabel(cat.id) : cat.id}</td>${cells}</tr>`;
      })
      .join("");
  }

  function renderMatrix(f) {
    const LL = lang();
    const focus = matrixFocusSet();
    const host = document.getElementById("matrixStack");
    const groups = global.BENEFIT_MATRIX_GROUPS || [];
    if (!host) return;
    host.innerHTML = groups
      .map((g, idx) => {
        const title = g.title && typeof g.title === "object" ? (LL ? LL.t(g.title) : g.title.zh) : g.title;
        const cols = marketsByCodes(g.codes);
        const memberLine = cols
          .map((m) => `${m.flag} ${LL ? LL.marketName(m) : m.nameZh}`)
          .join(" · ");
        const divider = idx > 0 ? '<hr class="matrix-divider" aria-hidden="true" />' : "";
        return (
          divider +
          `<section class="matrix-block matrix-block--${g.id}">` +
          `<h3 class="matrix-block-title">${title}</h3>` +
          `<p class="matrix-block-members">${memberLine}</p>` +
          `<div class="table-wrap">` +
          `<table class="matrix-table">` +
          `<colgroup><col class="col-topic" /><col span="${g.codes.length}" class="col-market" /></colgroup>` +
          `<thead id="matrixHead-${g.id}"></thead><tbody id="matrixBody-${g.id}"></tbody></table>` +
          `</div></section>`
        );
      })
      .join("");
    groups.forEach((g) => {
      const cols = marketsByCodes(g.codes);
      renderMatrixTable(`matrixHead-${g.id}`, `matrixBody-${g.id}`, cols, f, LL, focus);
    });
  }

  function renderCountries(f) {
    const LL = lang();
    const grid = document.getElementById("countryGrid");
    if (!grid) return;
    const focus = matrixFocusSet();
    const openCodes = openCountryCodes(f);
    const ordered = [...markets()].sort((a, b) => {
      const af = focus.has(a.code) ? 0 : 1;
      const bf = focus.has(b.code) ? 0 : 1;
      if (af !== bf) return af - bf;
      const order = global.BENEFIT_MATRIX_CODES || [];
      const ai = order.indexOf(a.code);
      const bi = order.indexOf(b.code);
      if (ai !== -1 || bi !== -1) return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
      return (a.nameZh || "").localeCompare(b.nameZh || "", "zh");
    });
    const chevron = LL ? LL.t(LL.UI.accordionChevron) : "▾";
    const emptyHint = LL ? LL.t(LL.UI.noCountryMatch) : "No countries match — click Reset.";

    const html = ordered
      .map((m) => {
        const matchC = !f.country || f.country === m.code;
        const matchQ = marketMatchesQuery(m, f.q, LL);
        if (!matchC || !matchQ) return "";
        const blocks = m.items
          .filter((it) => !f.category || f.category === it.cat)
          .map(
            (it) => `
          <div class="benefit-block" id="benefit-${m.code}-${it.cat}">
            <h4>${LL ? LL.catLabel(it.cat) : it.cat}</h4>
            <div class="sum">${LL ? LL.itemField(it, "summary") : it.summary}</div>
            <ul>${detailBullets(it, LL)}</ul>
          </div>`
          )
          .join("");
        const bodyInner =
          blocks ||
          `<p class="benefit-empty">${LL ? LL.t(LL.UI.noBlocksInFilter) : "No benefit types match the selected category."}</p>`;
        const feat = focus.has(m.code) ? " is-featured" : "";
        const openAttr = openCodes.has(m.code) ? " open" : "";
        const name = LL ? LL.marketName(m) : m.nameZh;
        const teaser = countryTeaser(m, LL);
        return (
          `<details class="country-accordion${feat}" id="benefit-country-${m.code}" data-code="${m.code}"${openAttr}>` +
          `<summary class="country-accordion-summary">` +
          `<span class="acc-flag">${m.flag}</span>` +
          `<span class="acc-name">${name}</span>` +
          `<span class="acc-teaser">${teaser}</span>` +
          `<span class="acc-chevron" aria-hidden="true">${chevron}</span>` +
          `</summary>` +
          `<div class="country-accordion-body">${bodyInner}</div>` +
          `</details>`
        );
      })
      .join("");

    grid.innerHTML = html || `<p class="benefit-empty">${emptyHint}</p>`;
  }

  function renderCategories(f) {
    const LL = lang();
    const host = document.getElementById("categoryPanel");
    if (!host) return;
    host.innerHTML = cats()
      .filter((cat) => !f.category || f.category === cat.id)
      .map((cat) => {
        const rows = markets()
          .map((m) => {
            const it = m.items.find((x) => x.cat === cat.id);
            if (!it) return "";
            const text = (LL ? LL.itemField(it, "summary") : it.summary) + detailBullets(it, LL);
            const hide =
              (f.country && f.country !== m.code) ||
              (f.q && !marketMatchesQuery(m, f.q, LL));
            return `<div class="cat-row ${hide ? "hidden" : ""}"><span class="m">${m.flag} ${
              LL ? LL.marketName(m) : m.nameZh
            }</span><span class="v">${LL ? LL.itemField(it, "summary") : it.summary}</span></div>`;
          })
          .join("");
        return `<div class="cat-block"><h3>${LL ? LL.catLabel(cat.id) : cat.id}</h3>${rows}</div>`;
      })
      .join("");
  }

  function renderBenefitSources() {
    const LL = lang();
    const host = document.getElementById("sourcePanel");
    if (!host) return;
    host.innerHTML = markets()
      .map(
        (m) =>
          `<div style="margin-bottom:1rem"><strong>${m.flag} ${LL ? LL.marketName(m) : m.nameZh}</strong>` +
          (m.sources || [])
            .map((s) => {
              const t = LL && LL.lang === "en" && s.titleEn ? s.titleEn : s.title;
              return `<a href="${s.url}" target="_blank" rel="noopener noreferrer">${t}</a>`;
            })
            .join("") +
          "</div>"
      )
      .join("");
  }
  global.renderBenefitSources = renderBenefitSources;

  function applyBenefitViews() {
    const f = getFilter();
    try {
      renderMatrix(f);
      renderCountries(f);
      renderCategories(f);
      renderHomeIndex();
    } catch (err) {
      console.error("Benefits monitor render error", err);
    }
  }
  global.applyBenefitFilters = applyBenefitViews;
  global.applyBenefitViews = applyBenefitViews;
  global.runBenefitSearch = runBenefitSearch;
  global.resetBenefitSearch = resetBenefitSearch;

  function bindUI() {
    document.querySelectorAll(".tab-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
        document.querySelectorAll(".panel").forEach((p) => p.classList.remove("active"));
        btn.classList.add("active");
        document.getElementById("panel-" + btn.dataset.tab)?.classList.add("active");
      });
    });

    document.getElementById("searchApplyBtn")?.addEventListener("click", runBenefitSearch);
    document.getElementById("searchResetBtn")?.addEventListener("click", resetBenefitSearch);
    document.getElementById("searchInput")?.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        runBenefitSearch();
      }
    });

    document.getElementById("homeIndex")?.addEventListener("click", (e) => {
      const tabBtn = e.target.closest("[data-tab]");
      if (tabBtn?.dataset.tab) {
        activateTab(tabBtn.dataset.tab);
        document.getElementById("panel-" + tabBtn.dataset.tab)?.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      const countryBtn = e.target.closest("[data-country]");
      if (countryBtn?.dataset.country) {
        goToCountry(countryBtn.dataset.country);
        return;
      }
      const catBtn = e.target.closest("[data-cat]");
      if (catBtn?.dataset.cat) goToCategory(catBtn.dataset.cat);
    });
  }

  global.bindBenefitsUi = bindUI;
})(window);