(function (global) {
  const KEY = "ebay-market-intel-lang";

  function L(zh, en) {
    return { zh, en };
  }

  const UI = {
    pageTitle: L("eBay 亚太市场与竞品监测", "eBay APAC Market & Competitor Monitor"),
    subtitle: L(
      "亚太地区 · 跨境 GMV · 竞品 · 招聘裁员 · HR 对照",
      "Asia-Pacific · cross-border GMV · peers · hiring/layoffs · HR intel"
    ),
    badge: L("亚太 HR 内部参考", "APAC HR internal reference"),
    intro: L(
      "<strong>默认视角：整个亚太地区。</strong>整理 eBay 亚太 GMV/跨境、区域竞品、招聘裁员与 HR 对话素材；欧美数据仅作背景。<strong>非投资建议</strong>；带「估」为内部估算。快照 <strong>2026-11-26 APAC</strong>。",
      "<strong>Default lens: Asia-Pacific.</strong> eBay APAC GMV/cross-border, regional peers, hiring/layoffs & HR talking points; US/EU as background. <strong>Not investment advice</strong>; “est.” = internal. Snapshot <strong>26 Nov 2026 APAC</strong>."
    ),
    tabOverview: L("总览", "Overview"),
    tabHr: L("HR 视角", "HR lens"),
    tabHiring: L("亚太招聘", "APAC hiring"),
    tabLayoffs: L("裁员动态", "Layoffs"),
    tabProfiles: L("档案与图表", "Profiles & charts"),
    tabCompetitors: L("竞争对手", "Competitors"),
    tabCrossBorder: L("亚太跨境", "APAC cross-border"),
    tabApac: L("亚太布局", "APAC"),
    tabLogistics: L("跨境物流", "Logistics"),
    tabSources: L("来源", "Sources"),
    overviewStrategy: L("战略重心（2024–2026）", "Strategic focus (2024–2026)"),
    overviewTimeline: L("行业时间线", "Industry timeline"),
    apacFocusTitle: L("亚太工作重点", "APAC work focus"),
    overviewPositioning: L("eBay 在亚太的定位", "eBay positioning in APAC"),
    positioningBody: L(
      "澳新/日韩<strong>买家</strong> + 中国<strong>出口卖家</strong> + 东南亚<strong>跨境目的地</strong>；托管物流（eIS/SpeedPAK）与信任/鉴别对抗 Temu/Shopee 低价冲击。",
      "<strong>Buyers</strong> in ANZ/JP/KR + China <strong>export sellers</strong> + SEA as <strong>CB destination</strong>; managed logistics (eIS/SpeedPAK) & trust/auth vs Temu/Shopee price shock."
    ),
    apacCbTitle: L("亚太跨境电商要点", "APAC cross-border essentials"),
    apacRegionChartTitle: L("eBay 亚太子区域角色（定性 1–5）", "eBay APAC sub-region role (1–5)"),
    apacRegionChartNote: L("左轴：eBay 区域角色；条形为跨境强度。", "Bars: eBay regional role; depth = cross-border intensity."),
    barTitle: L("亚太视角：全球跨境「最近一单」份额", "APAC lens: latest cross-border order share (global survey)"),
    barNote: L(
      "调查覆盖 37 国含大量亚太受访者；亚太消费者同样倾向 Temu/Amazon。<strong>非 GMV</strong>。",
      "37-country survey incl. many APAC respondents; APAC buyers also skew Temu/Amazon. <strong>Not GMV</strong>."
    ),
    apacCbPanelTitle: L("亚太跨境竞争与机会", "APAC cross-border competition & opportunity"),
    compFilterPh: L("筛选竞争对手…", "Filter competitors…"),
    compThreat: L("对 eBay 威胁度", "Threat to eBay"),
    compStrength: L("综合竞争力", "Overall strength"),
    compModel: L("商业模式", "Business model"),
    compTrend: L("2024–2025 趋势", "2024–25 trend"),
    compStrategy: L("战略方向", "Strategy"),
    compLogistics: L("物流", "Logistics"),
    compTalent: L("人才", "Talent"),
    compApac: L("亚太", "APAC"),
    compMoats: L("护城河", "Moats"),
    compRisks: L("风险", "Risks"),
    apacTitle: L("亚太市场布局强度（定性 0–4）", "APAC footprint strength (qualitative 0–4)"),
    apacNote: L("0 极少 · 1 低 · 2 中 · 3 强 · 4 领先；基于公开报道与平台特性的内部整理。", "0 minimal · 1 low · 2 mid · 3 strong · 4 leading; internal qualitative rollup."),
    apacLegend: L("图例", "Legend"),
    logisticsTitle: L("跨境物流模式对照", "Cross-border logistics comparison"),
    talentTitle: L("招聘与组织信号", "Hiring & workforce signals"),
    talentHiring: L("扩招方向", "Hiring focus"),
    talentLayoffs: L("裁员/优化", "Layoffs / optimization"),
    talentSignal: L("解读", "Read-through"),
    sourcesH2: L("参考来源", "Reference sources"),
    foot: L(
      "eBay Market & Competitor Monitor · 内部参考 · 与 APAC People Policy Dictionary 同仓库部署",
      "eBay Market & Competitor Monitor · internal reference · deployed with APAC People Policy Dictionary"
    ),
    hubDict: L("Policy Dictionary", "Policy Dictionary"),
    hubErNews: L("ER News", "ER News"),
    openRefs: L("官方链接", "Official links"),
    scoreOf: L("分", "pts"),
    profileSection: L("公司档案详情", "Company dossier"),
    profileFounded: L("成立时间", "Founded"),
    profileHq: L("总部", "Headquarters"),
    profileListing: L("上市/所有制", "Listing / ownership"),
    profileGmv: L("2025 GMV / 交易规模", "2025 GMV / scale"),
    profileRevenue: L("2025 营收口径", "2025 revenue basis"),
    profileGrowth: L("2025 增长", "2025 growth"),
    profileHeadcount: L("人员规模", "Headcount"),
    profileHistory: L("发展简史", "Brief history"),
    profileCulture: L("企业文化", "Culture"),
    profileChina: L("与中国/入华关系", "China relationship"),
    profileBizModel: L("业务模式（摘要）", "Business model (summary)"),
    profileShare: L("市场地位", "Market position"),
    profileMilestones: L("关键里程碑", "Key milestones"),
    profileTableTitle: L("文字对照表（可选）", "Text table (optional)"),
    profileTableNote: L(
      "上方图表为主；勾选显示完整文字表。",
      "Charts above are primary; toggle for full text table."
    ),
    profileDossierTitle: L("分展开卷（含历史与文化）", "Expandable dossiers (history & culture)"),
    chartBoardTitle: L("竞品指标条形图（可切换指标）", "Peer metric bars (switch metric)"),
    chartEstLegend: L("* = 估计或未披露", "* = estimate or undisclosed"),
    heatmapTitle: L("多指标热力对照", "Multi-metric heatmap"),
    heatmapNote: L(
      "颜色越深数值越高（人数列为对数）；便于 HRBP 一眼看差异。",
      "Darker = higher (log scale for headcount); quick HRBP scan."
    ),
    scatterTitle: L("增长 vs 对 eBay 威胁（象限图）", "Growth vs threat to eBay (quadrant)"),
    scatterX: L("增长 →", "Growth →"),
    scatterY: L("对 eBay 威胁 ↑", "Threat to eBay ↑"),
    scatterCaption: L(
      "右上：高增长高威胁（如 Temu）；左下：低增长低威胁。eBay 标于左下。",
      "Top-right: high growth & threat (e.g. Temu); bottom-left: low. eBay bottom-left."
    ),
    tableToggleLabel: L("显示文字对照表", "Show text comparison table"),
    hrTitle: L("HR 业务理解手册", "HR business playbook"),
    hrLede: L(
      "按主题分类的<strong>中立业务背景</strong>，可用于与业务/员工沟通，非绩效或股价论述。",
      "Neutral <strong>business context</strong> by theme for leader/employee conversations — not performance or stock narrative."
    ),
    overviewChartTitle: L("eBay 核心指标", "eBay core metrics"),
    overviewChartApacNote: L("高亮为亚太相关或内部估算指标。", "Highlighted rows are APAC-related or internal estimates."),
    compChartTitle: L("对 eBay 威胁度排序", "Threat to eBay (ranked)"),
    apacChartTitle: L("亚太布局指数（各国均值）", "APAC footprint index (avg)"),
    apacChartNote: L("与下方矩阵对照；数值越高布局越强。", "Pairs with matrix below; higher = stronger footprint."),
    logisticsChartTitle: L("物流能力对比（1–5）", "Logistics comparison (1–5)"),
    logisticsChartNote: L("速度 / 成本友好 / 亚太适配 — 定性评分。", "Speed / cost / APAC fit — qualitative scores."),
    logisticsSpeed: L("时效", "Speed"),
    logisticsCost: L("成本", "Cost"),
    logisticsApac: L("亚太", "APAC"),
    hiringTitle: L("中国及亚太在招方向（公开）", "China & APAC hiring (public)"),
    hiringNote: L(
      "岗位数为<strong>估计</strong>，仅反映招聘主题；请以各公司官网为准。",
      "Role counts are <strong>estimates</strong> — themes only; verify on careers sites."
    ),
    hiringListTitle: L("分公司招聘快照", "Hiring snapshot by company"),
    hiringOpenEst: L("在招（估）", "Open roles (est.)"),
    hiringRoles: L("主要工种", "Key functions"),
    hiringCareers: L("招聘入口", "Careers"),
    layoffScaleTitle: L("近期裁员规模（报道口径）", "Recent layoff scale (press basis)"),
    layoffScaleNote: L("近月公开报道整理；规模为人次估计。", "Recent press roundup; headcount approximate."),
    layoffReasonTitle: L("裁员动因分布（行业归纳）", "Layoff drivers (sector rollup)"),
    layoffEventsTitle: L("裁员事件清单", "Layoff event list"),
    layoffEventsNote: L("含原因与亚太补偿模式摘要；个案以法律意见为准。", "Reasons & APAC severance briefs; cases need legal review."),
    layoffRegion: L("区域", "Region"),
    layoffReason: L("原因", "Reason"),
    layoffSeverance: L("亚太补偿模式", "APAC severance pattern"),
    severanceTitle: L("亚太法定/常见补偿模式", "APAC statutory / common severance patterns"),
    valueChainTitle: L("eBay 价值链（与人事触点）", "eBay value chain (HR touchpoints)"),
    taxonomyTitle: L("竞品分类（模式 / 履约 / 用工）", "Peer taxonomy (model / fulfillment / workforce)"),
    marketSizeTitle: L("市场规模参考", "Market size reference")
  };

  const saved = localStorage.getItem(KEY);
  const state = { lang: saved === "zh" ? "zh" : "en" };

  function t(v) {
    if (v && typeof v === "object" && ("zh" in v || "en" in v)) return v[state.lang] || v.zh || v.en || "";
    return v == null ? "" : String(v);
  }

  function setLang(lang) {
    state.lang = lang === "zh" ? "zh" : "en";
    localStorage.setItem(KEY, state.lang);
    document.documentElement.lang = state.lang === "zh" ? "zh-CN" : "en";
    document.querySelectorAll("#lang-switch button").forEach((b) => {
      b.classList.toggle("active", b.dataset.lang === state.lang);
    });
    if (typeof global.applyMarketIntelUi === "function") global.applyMarketIntelUi();
  }

  global.MarketIntelLang = { UI, t, get lang() { return state.lang; }, setLang };
})(window);