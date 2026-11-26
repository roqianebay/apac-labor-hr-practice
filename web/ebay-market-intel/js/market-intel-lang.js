(function (global) {
  const KEY = "ebay-market-intel-lang";

  function L(zh, en) {
    return { zh, en };
  }

  const UI = {
    pageTitle: L("eBay APAC Market & Competitor Monitor", "eBay APAC Market & Competitor Monitor"),
    subtitle: L(
      "亚太地区 · 跨境 GMV · 竞品 · 招聘裁员 · HR 对照",
      "Asia-Pacific · cross-border GMV · peers · hiring/layoffs · HR intel"
    ),
    badge: L("公开来源 · 可点击原文", "Public sources · linked"),
    intro: L(
      "<strong>默认视角：整个亚太地区。</strong>数字以 <strong>eBay 年报/10-K、投资者关系、Statista 等可点击原文</strong>为主；未披露项（如分地区 GMV）不展示推算。竞品与定性指数供内部对照。<strong>非投资建议。</strong> 快照 <strong>2026-11-26</strong>。",
      "<strong>Default lens: Asia-Pacific.</strong> Figures prioritise <strong>clickable sources</strong> (eBay annual report/10-K, IR, Statista, etc.); undisclosed items (e.g. regional GMV) are not modelled. Peer/qualitative indices for internal context. <strong>Not investment advice.</strong> Snapshot <strong>26 Nov 2026</strong>."
    ),
    tabOverview: L("总览", "Overview"),
    tabHr: L("HR 视角", "HR lens"),
    tabHiring: L("亚太招聘", "APAC hiring"),
    tabCompensation: L("薪酬信息", "Compensation"),
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
    compSummaryTitle: L("亚太竞争对手汇总", "APAC competitor landscape"),
    compSummaryNote: L("三类竞合关系 · 内部整理", "Three coopetition clusters · internal"),
    compCompareTitle: L("多指标对比（可切换）", "Multi-metric comparison (switchable)"),
    compCompareNote: L("默认亚太布局指数；可切威胁度、GMV、增长等。eBay 行高亮。", "Default APAC footprint index; switch threat, GMV, growth, etc. eBay row highlighted."),
    compDualTitle: L("威胁度 vs 竞争力", "Threat vs strength"),
    compDualNote: L("0–100 内部指数；不含 eBay 自身。", "0–100 internal index; excludes eBay."),
    compDualThreat: L("威胁", "Threat"),
    compDualStrength: L("竞争力", "Strength"),
    compScatterTitle: L("增长 vs 对 eBay 威胁", "Growth vs threat to eBay"),
    compHeatmapTitle: L("竞品多指标热力图", "Peer multi-metric heatmap"),
    compHeatmapNote: L("与「档案与图表」页同一套指标；深色=更高。", "Same metrics as Profiles tab; darker = higher."),
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
      "eBay APAC Market & Competitor Monitor · 披露与公开来源 · 内部参考",
      "eBay APAC Market & Competitor Monitor · disclosures & public sources · internal reference"
    ),
    hubDict: L("Policy Dictionary", "Policy Dictionary"),
    hubErNews: L("ER News", "ER News"),
    openRefs: L("官方链接", "Official links"),
    scoreOf: L("分", "pts"),
    profileSection: L("公司档案详情", "Company dossier"),
    profileFounded: L("成立时间", "Founded"),
    profileHq: L("总部", "Headquarters"),
    profileListing: L("上市/所有制", "Listing / ownership"),
    profileGmv: L("GMV / 交易规模", "GMV / scale"),
    profileRevenue: L("营收口径", "Revenue basis"),
    profileGrowth: L("增长", "Growth"),
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
      "颜色越深数值越高（人数列为对数）；便于 HR 一眼看差异。",
      "Darker = higher (log scale for headcount); quick HR scan."
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
    overviewChartApacNote: L("条形图与 KPI 一致；虚线边框为调查或非精确披露口径。", "Bars match KPIs; dashed = survey or non-precise disclosure."),
    marketSizeTitle: L("公开来源（外链）", "Public sources (external links)"),
    apacGmvNoteTitle: L("为何不设「亚太 GMV」数字", "Why there is no APAC GMV $ figure"),
    compChartTitle: L("对 eBay 威胁度排序", "Threat to eBay (ranked)"),
    apacChartTitle: L("亚太布局指数（各国均值）", "APAC footprint index (avg)"),
    apacChartNote: L("与下方矩阵对照；数值越高布局越强。", "Pairs with matrix below; higher = stronger footprint."),
    logisticsChartTitle: L("物流能力对比（1–5）", "Logistics comparison (1–5)"),
    logisticsChartNote: L(
      "热力格：行=物流方案，列=速度 / 成本友好 / 亚太适配；色越深分数越高（定性 1–5）。",
      "Heat grid: rows = fulfilment model; columns = speed / cost / APAC fit; darker = higher (qualitative 1–5)."
    ),
    logisticsSpeed: L("时效", "Speed"),
    logisticsCost: L("成本", "Cost"),
    logisticsApac: L("亚太", "APAC"),
    hiringTitle: L("中国及亚太在招方向（公开）", "China & APAC hiring (public)"),
    hiringNote: L(
      "热力格：<strong>行=公司、列=国家/地区</strong>，格内为在招数（估）*；空项表示该市场无收录。请以各公司官网为准。",
      "Heat grid: <strong>row = company, column = market</strong>; cell = est. open roles *; blank = not in snapshot. Verify on careers sites."
    ),
    hiringListTitle: L("分公司招聘快照", "Hiring snapshot by company"),
    hiringOpenEst: L("在招（估）", "Open roles (est.)"),
    hiringRoles: L("主要工种", "Key functions"),
    hiringCareers: L("招聘入口", "Careers"),
    layoffScaleTitle: L("2025 年裁员规模（报道口径）", "2025 layoff scale (press basis)"),
    layoffScaleNote: L(
      "以 <strong>2025 年</strong>公开报道为主（条形左侧为报道年月，如 2025-10）；规模为估算人次，少数条目跨 2024–25。",
      "Primarily <strong>2025</strong> press reports (YYYY-MM on the left of each bar); headcount approximate; some spans 2024–25."
    ),
    layoffReasonTitle: L("裁员动因分布（行业归纳）", "Layoff drivers (sector rollup)"),
    layoffEventsTitle: L("裁员事件清单", "Layoff event list"),
    layoffEventsNote: L(
      "清单与上图均为 <strong>2025 年口径</strong>报道快照；含原因与亚太补偿摘要，个案以法律意见为准。",
      "<strong>2025-basis</strong> press snapshot aligned with chart above; severance briefs illustrative — legal review per case."
    ),
    layoffRegion: L("区域", "Region"),
    layoffReason: L("原因", "Reason"),
    layoffSeverance: L("亚太补偿模式", "APAC severance pattern"),
    severanceTitle: L("亚太法定/常见补偿模式", "APAC statutory / common severance patterns"),
    valueChainTitle: L("eBay 价值链（与人事触点）", "eBay value chain (HR touchpoints)"),
    taxonomyTitle: L("竞品分类（模式 / 履约 / 用工）", "Peer taxonomy (model / fulfillment / workforce)"),
    compTabTitle: L("亚太薪酬信息", "APAC compensation intelligence"),
    compTabLede: L(
      "Senior IC 总包对标与公开 JD 薪资区间；默认中国市场，可用芯片切换亚太市场。<strong>示意数据</strong>，发 offer 前请以 JD / Levels.fyi / 律师或 TA 复核为准。",
      "Senior IC total comp benchmarks & public JD salary bands; default China — use chips for other APAC markets. <strong>Illustrative</strong>; confirm via JD / Levels.fyi / TA or counsel before offers."
    ),
    compBenchTitle: L("APAC 薪酬对标（Senior IC）", "APAC comp benchmarks (Senior IC)"),
    compBenchNote: L(
      "总包为<strong>示意</strong>（USD 千/年，含年化股权）；默认中国；请以 JD / offer / Levels.fyi 为准，点击来源核对。",
      "Total comp is <strong>illustrative</strong> (USD k/yr, equity annualized); default China; verify via JD / offer / Levels.fyi — use source links."
    ),
    roleSalaryTitle: L("招聘岗位薪资对比（公开 JD 主题）", "Hiring salary comparison (public JD themes)"),
    roleSalaryNote: L(
      "摘录自各公司招聘官网与 TA 市场情报整理的<strong>区间示意</strong>，非 eBay 内部数据；发 offer 前务必核对职级与口径。",
      "Ranges from careers sites & TA market intel — <strong>illustrative</strong>, not eBay internal data; confirm grade & basis before offers."
    ),
    compThCompany: L("公司", "Company"),
    compThMarket: L("市场", "Market"),
    compThRole: L("职级 / 方向", "Level / track"),
    compThBase: L("Base (k USD)", "Base (k USD)"),
    compThEq: L("Equity (k USD)", "Equity (k USD)"),
    compThTotal: L("Total (k USD)", "Total (k USD)"),
    compThTrend: L("趋势", "Trend"),
    compThSource: L("来源", "Source"),
    roleThTitle: L("岗位", "Role"),
    roleThSalary: L("薪资区间（JD/市场）", "Salary band (JD/market)"),
    roleThPosted: L("时间", "Timing"),
    compTalentMonitorLink: L("Talent Policy Monitor 薪酬表", "Talent Policy Monitor comp table"),
    filterAllMarkets: L("全部亚太", "All APAC")
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