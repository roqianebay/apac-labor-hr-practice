(function (global) {
  const KEY = "apac-employer-benefits-lang";

  function L(zh, en) {
    return { zh, en };
  }

  const UI = {
    pageTitle: L("APAC Employer Benefits Summary", "APAC Employer Benefits Summary"),
    subtitle: L(
      "亚太雇主福利摘要看板 · 2026 Benefit Summary（8 个市场）",
      "APAC employer benefits desk · 2026 Benefit Summary (8 markets)"
    ),
    live: L("雇主福利对照", "Employer benefits"),
    intro: L(
      "<strong>用途：</strong>对照各市场 <strong>2026 年 1 月 eBay Benefit Summary</strong> 要点（公司政策，非法定最低）。完整条款、资格与变更以 <strong>People Central / ebaybenefits.com</strong> 及员工手册为准；本页为 HR 内部索引，不构成法律或福利承诺。",
      "<strong>Purpose:</strong> Index key points from the <strong>January 2026 eBay Benefit Summary</strong> by market (company policy, not statutory floors). Authoritative terms live on <strong>People Central / ebaybenefits.com</strong>; internal HR index only — not a binding benefits statement."
    ),
    statMarkets: L("已收录市场", "Markets indexed"),
    statCats: L("福利模块", "Benefit modules"),
    chartModulesTitle: L("Benefit Summary 模块覆盖", "Benefit Summary module coverage"),
    chartModulesSub: L(
      "各市场在本看板中展开的<strong>福利模块</strong>数量（2026 年 1 月摘要）。",
      "Number of <strong>benefit modules</strong> expanded per market (Jan 2026 summary)."
    ),
    searchPh: L("搜索市场、类别、关键词…", "Search market, category, keyword…"),
    filterMarket: L("全部市场", "All markets"),
    filterCat: L("全部类别", "All categories"),
    tabOverview: L("总览汇总", "Overview"),
    tabCountries: L("分市场详表", "By market"),
    tabCategories: L("分类对照", "By category"),
    tabSources: L("官方来源", "Sources"),
    overviewH2: L("雇主福利对照矩阵", "Employer benefits matrix"),
    overviewSub: L(
      "一张表对照 <strong>8 个市场</strong>（含印度）：中国大陆、香港、新加坡、澳大利亚、马来西亚、泰国、新西兰、印度。内容摘自 2026 年 1 月 Benefit Summary，已在单元格内展开要点。",
      "One matrix for <strong>8 markets</strong> (incl. India): CN, HK, SG, AU, MY, TH, NZ, IN. January 2026 Benefit Summary — key points shown inline in each cell."
    ),
    matrixHint: L(
      "提示：总览表已含完整摘要与要点列表，无需点击外链；分市场标签默认全部展开。",
      "Tip: overview cells include full summaries and bullet points — no outbound links required; all markets expanded on the Countries tab."
    ),
    indexH2: L("页面索引", "Page index"),
    indexSub: L(
      "可选：用下方芯片跳转到各标签；福利正文已在<strong>总览表</strong>与<strong>分市场</strong>中直接展示（默认全部展开）。",
      "Optional: use chips to switch tabs. Benefit text is inline on <strong>Overview</strong> and <strong>By market</strong> (all markets expanded by default)."
    ),
    searchApply: L("搜索", "Search"),
    searchReset: L("重置", "Reset"),
    noCountryMatch: L("没有符合筛选的市场。", "No markets match the current filters."),
    noBlocksInFilter: L("当前类别下无条目。", "No items for this category."),
    indexSectionsLabel: L("模块", "Sections"),
    indexMarketsLabel: L("市场", "Markets"),
    indexCatsLabel: L("福利类别", "Benefit modules"),
    indexHitsTitle: L("搜索结果", "Search results"),
    indexNoHits: L("无匹配条目。", "No matches."),
    indexSearchPh: L("关键词：平安、GU Health、病假、Chubb…", "Keywords: Ping An, GU Health, sick leave, Chubb…"),
    countriesH2: L("各市场雇主福利详表", "Employer benefit detail by market"),
    countriesSub: L("点击行展开；数据来源：2026 年 1 月 Benefit Summary PDF。", "Expand rows; source: January 2026 Benefit Summary."),
    accordionChevron: L("▾", "▾"),
    categoriesH2: L("按类别横向对照", "Cross-market by module"),
    sourcesH2: L("来源与线上入口", "Sources & portals"),
    colType: L("类别", "Module"),
    policyRefShort: L("资料", "Reference"),
    hubIndex: L("APAC People Policy Dictionary", "APAC People Policy Dictionary"),
    hubLabor: L("流程与劳动法", "Process & labor law"),
    hubLeave: L("法定休假", "Leave & holidays"),
    hubStatutory: L("法定福利", "Statutory benefits"),
    foot: L(
      "APAC Employer Benefits Summary · 基于 2026 Benefit Summary · HR 内部参考",
      "APAC Employer Benefits Summary · from 2026 Benefit Summary · internal HR reference"
    )
  };

  const savedLang = localStorage.getItem(KEY);
  const state = { lang: savedLang === "zh" ? "zh" : "en" };

  function t(v) {
    if (v && typeof v === "object" && ("zh" in v || "en" in v)) return v[state.lang] || v.zh || v.en || "";
    return v == null ? "" : String(v);
  }

  function itemField(item, key) {
    const enKey = key + "En";
    if (state.lang === "en" && item && item[enKey]) return item[enKey];
    const v = item ? item[key] : "";
    if (v && typeof v === "object" && ("zh" in v || "en" in v)) return t(v);
    return v == null ? "" : v;
  }

  function catLabel(id) {
    const cats = global.BENEFIT_CATEGORIES || [];
    const c = cats.find((x) => x.id === id);
    return c ? t(c.label) : id;
  }

  function marketName(m) {
    if (!m) return "";
    if (state.lang === "en" && m.nameEn) return m.nameEn;
    return m.nameZh || m.code;
  }

  function setText(id, html) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  }

  function applyChrome() {
    document.documentElement.lang = state.lang === "en" ? "en" : "zh-CN";
    document.title = t(UI.pageTitle);
    setText("ui-subtitle", t(UI.subtitle));
    setText("ui-live", t(UI.live));
    setText("ui-intro", t(UI.intro));
    ["ui-tab-overview", "ui-tab-countries", "ui-tab-categories", "ui-tab-sources"].forEach((id, i) => {
      const keys = [UI.tabOverview, UI.tabCountries, UI.tabCategories, UI.tabSources];
      setText(id, t(keys[i]));
    });
    setText("ui-overview-h2", t(UI.overviewH2));
    setText("ui-overview-sub", t(UI.overviewSub));
    setText("ui-matrix-hint", t(UI.matrixHint));
    setText("ui-index-h2", t(UI.indexH2));
    setText("ui-index-sub", t(UI.indexSub));
    setText("ui-index-sections-label", t(UI.indexSectionsLabel));
    setText("ui-index-markets-label", t(UI.indexMarketsLabel));
    setText("ui-index-cats-label", t(UI.indexCatsLabel));
    setText("ui-index-hits-title", t(UI.indexHitsTitle));
    setText("ui-chart-modules-title", t(UI.chartModulesTitle));
    setText("ui-chart-modules-sub", t(UI.chartModulesSub));
    setText("ui-countries-h2", t(UI.countriesH2));
    setText("ui-countries-sub", t(UI.countriesSub));
    setText("ui-categories-h2", t(UI.categoriesH2));
    setText("ui-sources-h2", t(UI.sourcesH2));
    setText("ui-foot", t(UI.foot));
    setText("ui-hub-index", t(UI.hubIndex));
    setText("ui-hub-labor", t(UI.hubLabor));
    setText("ui-hub-leave", t(UI.hubLeave));
    setText("ui-hub-statutory", t(UI.hubStatutory));
    const search = document.getElementById("searchInput");
    if (search) search.placeholder = t(UI.indexSearchPh);
    const applyBtn = document.getElementById("searchApplyBtn");
    if (applyBtn) applyBtn.textContent = t(UI.searchApply);
    const resetBtn = document.getElementById("searchResetBtn");
    if (resetBtn) resetBtn.textContent = t(UI.searchReset);
    document.querySelectorAll("#lang-switch button").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === state.lang);
    });
    if (typeof global.fillBenefitFilters === "function") global.fillBenefitFilters();
    if (typeof global.renderBenefitStats === "function") global.renderBenefitStats();
    if (typeof global.renderEmployerInsightCharts === "function") global.renderEmployerInsightCharts();
    if (typeof global.renderBenefitSources === "function") global.renderBenefitSources();
    if (typeof global.renderPolicySpotlight === "function") global.renderPolicySpotlight();
    if (typeof global.applyBenefitViews === "function") global.applyBenefitViews();
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

  global.BenefitsLang = { UI, t, itemField, catLabel, marketName, init, get lang() { return state.lang; } };
})(window);