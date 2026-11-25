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
      "<strong>用途：</strong>汇总各<strong>国家及地区</strong>法律规定的休假（公共假日、带薪年假、病假、产假/陪产假等）。数据快照 <strong>2026-11-26</strong>（含中国 13 天、港 2026 起 15 天法定假、澳 2026-07 灵活育婴假 130 天等）。为对照摘要，非法律意见；请以官方法令、年度放假历与合同为准。",
      "<strong>Purpose:</strong> Compare <strong>legally mandated leave</strong> by country or region. Snapshot <strong>26 Nov 2026</strong> (e.g. China 13 public days, HK 15 from 2026, AU flexible parental 130 days from Jul 2026). Illustrative — not legal advice."
    ),
    statMarkets: L("覆盖国家/地区", "Countries & regions"),
    statCats: L("休假类别", "Leave types"),
    searchPh: L("搜索国家/地区、类别、关键词…", "Search country/region, category, keyword…"),
    filterMarket: L("全部国家/地区", "All countries & regions"),
    filterCat: L("全部类别", "All categories"),
    tabOverview: L("总览汇总", "Overview"),
    tabCountries: L("分国/地区详表", "By country/region"),
    tabCategories: L("分类对照", "By category"),
    tabSources: L("官方来源", "Official sources"),
    overviewH2: L("休假类型对照矩阵", "Leave-type comparison matrix"),
    overviewSub: L(
      "<strong>第一部分</strong>：中国大陆、香港、新加坡、澳大利亚、马来西亚、泰国、新西兰；<strong>其他亚太国家及地区</strong>：日本、韩国、印度、台湾、印尼、越南、菲律宾。详表含全部 14 个国家/地区。",
      "<strong>Part 1</strong>: CN, HK, SG, AU, MY, TH, NZ. <strong>Other APAC</strong>: JP, KR, IN, TW, ID, VN, PH. Detail tab lists all 14 countries & regions."
    ),
    matrixHint: L(
      "提示：矩阵为简写；中国大陆、澳大利亚、新加坡、马来西亚列高亮。公共假日以官方法令及 <strong>2026</strong> 年度历为准。",
      "Tip: matrix abbreviated; CN, AU, SG, MY highlighted. Public holidays per statute and <strong>2026</strong> official calendars."
    ),
    spotlightLink: L("国务院令全文", "State Council text"),
    indexH2: L("页面索引", "Page index"),
    indexSub: L(
      "先选<strong>国家/地区 / 休假类别</strong>、输入关键词，再点<strong>搜索</strong>；或点下面芯片快速跳转。默认展示全部条目（中国大陆、澳大利亚、新加坡、马来西亚默认展开）。",
      "Pick <strong>country/region / leave type</strong>, enter keywords, then click <strong>Search</strong>. Chips jump quickly. All regions shown by default (CN/AU/SG/MY expanded)."
    ),
    searchApply: L("搜索", "Search"),
    searchReset: L("重置", "Reset"),
    noCountryMatch: L("没有符合筛选的国家/地区，请点「重置」恢复全部列表。", "No matches — click Reset to show all countries & regions."),
    noBlocksInFilter: L("当前类别筛选下无条目，请调整类别或重置。", "No items for this category — change category or reset."),
    indexSectionsLabel: L("模块", "Sections"),
    indexMarketsLabel: L("国家及地区", "Countries & regions"),
    indexCatsLabel: L("休假类别", "Leave types"),
    indexHitsTitle: L("搜索结果", "Search results"),
    indexNoHits: L("无匹配条目，请换关键词或浏览国家/地区列表。", "No matches — try another keyword or browse the list."),
    indexSearchPh: L("关键词：国家/地区、产假、年假、法定假日…（输入后点搜索）", "Keywords: country/region, maternity, annual leave… then click Search"),
    countriesH2: L("各国家/地区休假详表", "Leave detail by country/region"),
    countriesSub: L("点击行展开查看六大类休假要点；无筛选时中国大陆、澳大利亚、新加坡、马来西亚默认展开。", "Click a row to expand six leave types; CN, AU, SG and MY open by default when not filtering."),
    accordionChevron: L("▾", "▾"),
    categoriesH2: L("按类别横向对照", "Cross-market by category"),
    sourcesH2: L("官方法规链接", "Official links"),
    colType: L("类别", "Category"),
    openDetail: L("见分国详表", "See country detail"),
    hubIndex: L("APAC People Policy Dictionary", "APAC People Policy Dictionary"),
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
    setText("ui-index-h2", t(UI.indexH2));
    setText("ui-index-sub", t(UI.indexSub));
    setText("ui-index-sections-label", t(UI.indexSectionsLabel));
    setText("ui-index-markets-label", t(UI.indexMarketsLabel));
    setText("ui-index-cats-label", t(UI.indexCatsLabel));
    setText("ui-index-hits-title", t(UI.indexHitsTitle));
    const indexSearch = document.getElementById("indexQuickSearch");
    if (indexSearch) indexSearch.placeholder = t(UI.indexSearchPh);
    setText("ui-countries-h2", t(UI.countriesH2));
    setText("ui-countries-sub", t(UI.countriesSub));
    setText("ui-categories-h2", t(UI.categoriesH2));
    setText("ui-sources-h2", t(UI.sourcesH2));
    setText("ui-foot", t(UI.foot));
    setText("ui-hub-index", t(UI.hubIndex));
    setText("ui-hub-labor", t(UI.hubLabor));
    setText("ui-hub-benefits", t(UI.hubBenefits));
    const search = document.getElementById("searchInput");
    if (search) search.placeholder = t(UI.indexSearchPh);
    const applyBtn = document.getElementById("searchApplyBtn");
    if (applyBtn) applyBtn.textContent = t(UI.searchApply);
    const resetBtn = document.getElementById("searchResetBtn");
    if (resetBtn) resetBtn.textContent = t(UI.searchReset);
    document.querySelectorAll("#lang-switch button").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === state.lang);
    });
    if (typeof global.fillLeaveFilters === "function") global.fillLeaveFilters();
    if (typeof global.renderLeaveStats === "function") global.renderLeaveStats();
    if (typeof global.renderLeaveSources === "function") global.renderLeaveSources();
    if (typeof global.renderPolicySpotlight === "function") global.renderPolicySpotlight();
    if (typeof global.applyLeaveViews === "function") global.applyLeaveViews();
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