(function (global) {
  const KEY = "apac-leave-lang";

  function L(zh, en) {
    return { zh, en };
  }

  const UI = {
    pageTitle: L("APAC Leave & Holidays Monitor", "APAC Leave & Holidays Monitor"),
    subtitle: L(
      "亚太法定假期 · 年假 · 病假及其他法定休假汇总",
      "APAC public holidays · annual & sick leave · other statutory leave"
    ),
    live: L("法定休假对照", "Statutory leave"),
    intro: L(
      "<strong>用途：</strong>汇总各国/地区<strong>法律规定的休假</strong>（公共假日、带薪年假、病假、产假/陪产假等）。数据快照：<strong>2026-11-25</strong>（含中国 13 天、香港 2026 起 15 天法定假、新马菲新育儿假近期修订等）。为对照摘要，非法律意见；请以官方法令、年度放假历与合同为准。",
      "<strong>Purpose:</strong> Compare <strong>legally mandated leave</strong> by market. Data snapshot <strong>25 Nov 2026</strong> (e.g. China 13 public days, HK 15 from 2026, recent parental-leave reforms). Illustrative — not legal advice; rely on official gazettes, annual calendars and contracts."
    ),
    statMarkets: L("覆盖市场", "Markets"),
    statCats: L("休假类别", "Leave types"),
    searchPh: L("搜索国家、类别、关键词…", "Search country, category, keyword…"),
    filterMarket: L("全部市场", "All markets"),
    filterCat: L("全部类别", "All categories"),
    tabOverview: L("总览汇总", "Overview"),
    tabCountries: L("分国详表", "By country"),
    tabCategories: L("分类对照", "By category"),
    tabSources: L("官方来源", "Official sources"),
    overviewH2: L("休假类型对照矩阵", "Leave-type comparison matrix"),
    overviewSub: L("矩阵为一句话摘要；完整表述与要点见「分国详表」。", "Matrix shows one-line summaries; see country tab for full detail."),
    matrixHint: L("提示：矩阵为简写；公共假日请以分国卡片及官方年度历为准。数据快照 2026-11-25。", "Tip: matrix cells are abbreviated; use country cards and official annual calendars. Snapshot 2026-11-25."),
    spotlightLink: L("国务院令全文", "State Council text"),
    countriesH2: L("各国休假详表", "Country leave detail"),
    categoriesH2: L("按类别横向对照", "Cross-market by category"),
    sourcesH2: L("官方法规链接", "Official links"),
    colType: L("类别", "Category"),
    openDetail: L("见分国详表", "See country detail"),
    hubIndex: L("看板总索引", "Dashboard index"),
    hubLabor: L("流程与劳动法", "Process & labor law"),
    hubBenefits: L("法定福利", "Statutory benefits"),
    foot: L(
      "APAC Leave & Holidays Monitor · HR/ER 内部参考 · 不构成法律意见",
      "APAC Leave & Holidays Monitor · internal reference · not legal advice"
    )
  };

  const state = { lang: localStorage.getItem(KEY) === "en" ? "en" : "zh" };

  function t(v) {
    if (v && typeof v === "object" && ("zh" in v || "en" in v)) return v[state.lang] || v.zh || v.en || "";
    return v == null ? "" : String(v);
  }

  function itemField(item, key) {
    const enKey = key + "En";
    if (state.lang === "en" && item && item[enKey]) return item[enKey];
    return item ? item[key] : "";
  }

  function catLabel(id) {
    const cats = global.LEAVE_CATEGORIES || [];
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
    setText("ui-countries-h2", t(UI.countriesH2));
    setText("ui-categories-h2", t(UI.categoriesH2));
    setText("ui-sources-h2", t(UI.sourcesH2));
    setText("ui-foot", t(UI.foot));
    setText("ui-hub-index", t(UI.hubIndex));
    setText("ui-hub-labor", t(UI.hubLabor));
    setText("ui-hub-benefits", t(UI.hubBenefits));
    const search = document.getElementById("searchInput");
    if (search) search.placeholder = t(UI.searchPh);
    document.querySelectorAll("#lang-switch button").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === state.lang);
    });
    if (typeof global.fillLeaveFilters === "function") global.fillLeaveFilters();
    if (typeof global.renderLeaveStats === "function") global.renderLeaveStats();
    if (typeof global.applyLeaveFilters === "function") global.applyLeaveFilters();
    if (typeof global.renderLeaveSources === "function") global.renderLeaveSources();
    if (typeof global.renderPolicySpotlight === "function") global.renderPolicySpotlight();
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

  global.LeaveLang = { UI, t, itemField, catLabel, marketName, init, get lang() { return state.lang; } };
})(window);