function L(zh, en) {
  return { zh, en };
}

window.DASH_HUB_UI = {
  brand: L("APAC ER Toolkit", "APAC ER Toolkit"),
  title: L("亚太 ER 看板总索引", "APAC ER dashboard index"),
  kicker: L("一页看清 · 按用途进入", "One page · pick your board"),
  lede: L(
    "下列看板为同一套亚太员工关系工具集。<strong>流程与劳动法正文</strong>集中在「APAC ER Process &amp; Labor Law」看板；本页只做<strong>介绍与跳转</strong>，不替代各看板内数据。",
    "These boards are one APAC ER toolkit. <strong>Process and labour-law content</strong> lives in the APAC ER Process &amp; Labor Law board; this page only <strong>introduces and links</strong> — it does not replace in-board data."
  ),
  notice: L(
    "所有看板均为 HR/ER 内部参考与人工整理索引，不构成法律意见。个案请以合同、员工手册与当地律师意见为准。",
    "All boards are internal HR/ER reference and curated indexes, not legal advice. Live cases: contracts, policies and local counsel."
  ),
  sectionH2: L("看板一览", "Board directory"),
  sectionSub: L("点击卡片进入对应站点（新标签打开）。", "Open a card to visit that site (new tab)."),
  openBoard: L("进入看板", "Open board"),
  primaryBadge: L("核心 · 流程与法规", "Core · process & law"),
  foot: L(
    "APAC ER Dashboard Index · 与劳动法办案指南同仓库部署 · 不覆盖各看板原有页面",
    "APAC ER Dashboard Index · deployed with the labor guide repo · does not replace existing boards"
  ),
  langAria: L("切换语言", "Switch language"),
  navIndex: L("总索引", "Index"),
  navLabor: L("流程与劳动法", "Process &amp; law")
};

/** @type {Array<{id:string,title:L,pitch:L,bullets:L[],href:string,primary?:boolean,ext?:boolean}>} */
window.DASH_HUB_BOARDS = [
  {
    id: "labor",
    primary: true,
    title: L("APAC ER Process &amp; Labor Law", "APAC ER Process &amp; Labor Law"),
    pitch: L(
      "裁员、绩效解除、试用期、违纪等<strong>办案流程与法定底线</strong>的主看板。",
      "Primary desk for <strong>case processes and statutory floors</strong>: redundancy, performance, probation, misconduct."
    ),
    bullets: [
      L("十地对照表与国家详策（中港台新澳新马泰日韩印等）", "Ten-market matrix and per-country desks (CN, HK, SG, AU, NZ, MY, TH, JP, KR, IN…)"),
      L("四类案件路径与 ER 实操要点", "Four case types — paths and ER playbooks"),
      L("官方法规直达 + 14 国/地区向导与检查清单", "Official source links + 14-market wizard and checklists")
    ],
    href: "./index.html",
    ext: false
  },
  {
    id: "gov",
    title: L("APAC Government Policy Monitor", "APAC Government Policy Monitor"),
    pitch: L(
      "各国<strong>劳动、就业与移民政策</strong>变动追踪（政府来源导向）。",
      "Government-led tracking of <strong>labour, employment and immigration</strong> policy shifts."
    ),
    bullets: [
      L("政策时间线与官方法规链接", "Policy timeline and official links"),
      L("多市场筛选与分类", "Multi-market filters and categories"),
      L("与 ER 办案指南、雇主监测互补使用", "Use alongside the labor guide and employer monitors")
    ],
    href: "https://roqianebay.github.io/apac-policy-monitor/",
    ext: true
  },
  {
    id: "ernews",
    title: L("APAC ER News Update V2.0", "APAC ER News Update V2.0"),
    pitch: L(
      "亚太<strong>裁员、组织优化与补偿</strong>动态；500 强外企与知名企业档案。",
      "APAC <strong>layoffs, restructure and severance</strong> intel; F500 and notable employer profiles."
    ),
    bullets: [
      L("时间线动态与原文 / 搜索外链", "Timeline with source and search links"),
      L("补偿金对照表与法定市场摘要", "Severance comparison table and legal floor briefs"),
      L("中英切换 · 含来源索引页", "ZH/EN · source index tab")
    ],
    href: "https://roqianebay.github.io/apac-ta-employer-monitor/",
    ext: true
  },
  {
    id: "talent",
    title: L("Talent Employer Policy Monitor", "Talent Employer Policy Monitor"),
    pitch: L(
      "互联网<strong>扩招 · 开放职位 · 中国市场</strong>；薪酬对标与竞品矩阵（裁员见 ER News）。",
      "Internet <strong>hiring, open roles, China market</strong>; comp & peer matrix (layoffs on ER News)."
    ),
    bullets: [
      L("Talent Intel V3 · 招聘动态与中国市场专页", "Talent Intel V3 · hiring feed & China tab"),
      L("薪酬对标 · 竞品矩阵（无裁员条目）", "Comp benchmarks · peer matrix (no layoffs)"),
      L("中英切换", "ZH/EN toggle")
    ],
    href: "https://roqianebay.github.io/apac-ta-employer-policy-monitor/?v=20261125",
    ext: true
  },
  {
    id: "benefits",
    title: L("APAC Statutory Benefits Monitor", "APAC Statutory Benefits Monitor"),
    pitch: L(
      "14 个亚太市场<strong>法定福利</strong>：年假、病假、产假、社保、医保、加班等对照。",
      "14 APAC markets — <strong>statutory benefits</strong>: leave, social insurance, medical, OT and more."
    ),
    bullets: [
      L("福利对照矩阵 + 分国卡片", "Benefits matrix + country cards"),
      L("官方法规入口链接", "Official source links"),
      L("中英切换", "ZH/EN toggle")
    ],
    href: "https://roqianebay.github.io/apac-labor-hr-practice/benefits-monitor/?v=20261125",
    ext: true
  },
  {
    id: "leave",
    title: L("APAC Leave &amp; Holidays Monitor", "APAC Leave &amp; Holidays Monitor"),
    pitch: L(
      "法定公休 · 年假 · 病假及各类休假<strong>分国分栏详表</strong>。",
      "Public holidays · annual &amp; sick leave · <strong>per-country detail</strong>."
    ),
    bullets: [
      L("中国大陆 2025 起法定公休 <strong>13 天</strong>（国令第 795）", "Mainland China <strong>13</strong> statutory public days from 2025 (Order 795)"),
      L("总览矩阵 + 分国详表（默认）", "Overview matrix · country detail (default tab)"),
      L("中英切换", "ZH/EN toggle")
    ],
    href: "https://roqianebay.github.io/apac-labor-hr-practice/leave-monitor/?v=20261125",
    ext: true
  }
];