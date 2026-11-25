(function (global) {
  const KEY = "apac-benefits-lang";

  function L(zh, en) {
    return { zh, en };
  }

  const UI = {
    pageTitle: L("APAC Statutory Benefits Monitor", "APAC Statutory Benefits Monitor"),
    subtitle: L(
      "亚太地区法定福利汇总 · 年假 · 病假 · 产假/陪产假 · 社保 · 退休金 · 医保",
      "APAC statutory benefits · annual/sick/parental leave · social security · retirement · medical"
    ),
    live: L("法定底线对照", "Statutory floor"),
    updated: L("更新", "Updated"),
    intro: L(
      "<strong>用途：</strong>对照各市场<strong>法律规定的最低福利</strong>（非公司额外政策）。内容为公开法规摘要，<strong>非自动爬虫</strong>；个案以劳动合同、集体协议及官方文本为准。",
      "<strong>Purpose:</strong> Compare <strong>legal minimum benefits</strong> (not voluntary perks). Curated public-law summaries — <strong>not a live crawler</strong>; verify contracts and official texts for live cases."
    ),
    statMarkets: L("覆盖市场", "Markets"),
    statTopics: L("福利维度", "Benefit topics"),
    statRows: L("条目汇总", "Data rows"),
    searchPh: L("搜索国家、类别、关键词…", "Search country, category, keyword…"),
    filterMarket: L("全部市场", "All markets"),
    filterCat: L("全部类别", "All categories"),
    tabMatrix: L("对照矩阵", "Comparison matrix"),
    tabMarkets: L("分国卡片", "By market"),
    tabSources: L("官方来源", "Official sources"),
    matrixH2: L("法定福利对照矩阵", "Statutory benefits matrix"),
    matrixSub: L("行为福利类别，列为市场；点击表头国别可筛选。完整表述见「分国卡片」。", "Rows = benefit types, columns = markets. Use country cards for detail."),
    marketsH2: L("各市场法定福利明细", "Per-market statutory detail"),
    sourcesH2: L("官方法规与权威来源", "Official law and guidance"),
    refLabel: L("官方链接", "Official links"),
    colTopic: L("类别", "Category"),
    hubIndex: L("APAC People Policy Dictionary", "APAC People Policy Dictionary"),
    hubLabor: L("流程与劳动法", "Process & labor law"),
    foot: L(
      "APAC Statutory Benefits Monitor · HR/ER 内部参考 · 不构成法律意见",
      "APAC Statutory Benefits Monitor · internal HR/ER reference · not legal advice"
    )
  };

  const CAT_ZH = {
    leave_annual: "年假/带薪假",
    holidays: "公共假日",
    leave_sick: "病假",
    leave_parental: "产假/陪产假/育儿假",
    social: "社会保险/公积金",
    retirement: "退休/养老金",
    medical: "医疗/工伤保险",
    overtime: "加班与工时",
    other: "其他法定福利"
  };

  const state = { lang: localStorage.getItem(KEY) === "en" ? "en" : "zh" };

  function t(v) {
    if (v && typeof v === "object" && ("zh" in v || "en" in v)) return v[state.lang] || v.zh || v.en || "";
    return v == null ? "" : String(v);
  }

  function catLabel(id) {
    if (state.lang === "en") {
      const cats = global.BENEFIT_CATEGORIES || [];
      const c = cats.find((x) => x.id === id);
      return c ? t(c.label) : id;
    }
    return CAT_ZH[id] || id;
  }

  function marketName(m) {
    if (!m) return "";
    if (state.lang === "en" && m.nameEn) return m.nameEn;
    return m.nameZh || m.code;
  }

  function itemField(item, key) {
    const enKey = key + "En";
    if (state.lang === "en" && item[enKey]) return item[enKey];
    return item[key];
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
    setText("ui-tab-matrix", t(UI.tabMatrix));
    setText("ui-tab-markets", t(UI.tabMarkets));
    setText("ui-tab-sources", t(UI.tabSources));
    setText("ui-matrix-h2", t(UI.matrixH2));
    setText("ui-matrix-sub", t(UI.matrixSub));
    setText("ui-markets-h2", t(UI.marketsH2));
    setText("ui-sources-h2", t(UI.sourcesH2));
    setText("ui-foot", t(UI.foot));
    setText("ui-hub-index", t(UI.hubIndex));
    setText("ui-hub-labor", t(UI.hubLabor));
    const search = document.getElementById("searchInput");
    if (search) search.placeholder = t(UI.searchPh);
    const cf = document.getElementById("countryFilter");
    if (cf && cf.options[0]) cf.options[0].textContent = t(UI.filterMarket);
    const catf = document.getElementById("categoryFilter");
    if (catf && catf.options[0]) catf.options[0].textContent = t(UI.filterCat);
    if (typeof global.renderStats === "function") global.renderStats();
    if (typeof global.applyFilters === "function") global.applyFilters();
    if (typeof global.renderSources === "function") global.renderSources();
    if (typeof global.fillBenefitFilters === "function") global.fillBenefitFilters();
    document.querySelectorAll("#lang-switch button").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === state.lang);
    });
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

  global.BenefitsLang = { UI, t, catLabel, marketName, itemField, init, get lang() { return state.lang; } };
})(window);