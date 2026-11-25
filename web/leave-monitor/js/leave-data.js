function L(zh, en) {
  return { zh, en };
}

window.LEAVE_DATA_VERSION = "2026-11-26-matrix-focus";

/** Overview matrix columns only (VN/ID excluded); order = priority for eBay APAC footprint */
window.LEAVE_MATRIX_CODES = ["CN", "AU", "SG", "MY", "HK", "NZ", "TW", "JP", "KR", "TH", "PH", "IN"];
window.LEAVE_MATRIX_FOCUS = ["CN", "AU", "SG", "MY"];

window.POLICY_SPOTLIGHTS = [
  {
    code: "CN",
    title: L("中国大陆 · 法定节假日", "Mainland China · public holidays"),
    headline: L("13 天", "13 days"),
    sub: L("自 2025-01-01 起（国令第 795 号）", "From 1 Jan 2025 (State Council Order 795)"),
    body: L(
      "元旦1 + 春节4（除夕至初三）+ 清明1 + 劳动2 + 端午1 + 中秋1 + 国庆3。<strong>2026</strong> 年连休以国务院办公厅年度放假通知为准；调休连休天数不等于法定 13 天。",
      "1 NY + 4 Spring Festival + 1 Qingming + 2 Labour + 1 Dragon Boat + 1 Mid-Autumn + 3 National Day. <strong>2026</strong> bridge schedule per annual State Council notice — long breaks ≠ 13 statutory days."
    ),
    pills: [
      L("2024-11 修法", "Nov 2024 amendment"),
      L("2026 放假历", "2026 holiday calendar"),
      L("春节 +1", "Spring Festival +1"),
      L("劳动节 +1", "Labour Day +1")
    ],
    href: "https://www.gov.cn/zhengce/zhengceku/202411/content_6986381.htm"
  },
  {
    code: "HK",
    title: L("香港 · 法定假期渐进增加", "Hong Kong · phased statutory holidays"),
    headline: L("15 天", "15 days"),
    sub: L("自 2026-01-01 起（+复活节星期一）", "From 1 Jan 2026 (+Easter Monday)"),
    body: L(
      "2026 年起增至 <strong>15 天</strong>；2028 起加 Good Friday 至 16 天；2030 起再增 1 天至 17 天。劳工处发布 <strong>2026</strong> 法定假日表，雇员法定假遇休息日须补假。",
      "From 2026: <strong>15</strong> statutory holidays; 16 from 2028 (+Good Friday); 17 from 2030. Labour Department <strong>2026</strong> table — substitute rest day if holiday falls on rest day."
    ),
    pills: [L("2026 日历", "2026 calendar"), L("复活节星期一", "Easter Monday"), L("2030→17天", "17 days by 2030")],
    href: "https://www.labour.gov.hk/eng/news/latest_holidays2026.htm"
  },
  {
    code: "MY",
    title: L("马来西亚 · 联邦假日与育儿假", "Malaysia · federal holidays & parental leave"),
    headline: L("11 天", "11 days"),
    sub: L("2026 联邦全国假日 + 州假", "2026 federal national + state days"),
    body: L(
      "2026 年联邦层面 <strong>11 个</strong>全国假日，沙巴/砂拉越自 2025-05 起适用修订雇佣法令；年假 8–16 天、产假 98 天、陪产假 7 天（2023 起）。",
      "<strong>2026</strong>: <strong>11</strong> federal national holidays; Sabah/Sarawak ordinances from May 2025 — EA annual 8–16 days, 98-day maternity, 7-day paternity (from 2023)."
    ),
    pills: [L("核心市场", "Core market"), L("州假另计", "State holidays extra"), L("EA 年假", "EA annual leave")],
    href: "https://www.mohr.gov.my/"
  },
  {
    code: "AU",
    title: L("澳大利亚 · 灵活育婴假 2026", "Australia · flexible parental leave 2026"),
    headline: L("130 天", "130 days"),
    sub: L("自 2026-07 起上限", "Cap from Jul 2026"),
    body: L(
      "NES 无薪育婴假最长 12–24 个月；<strong>灵活育婴假</strong> 2025-07 至 2026-06 最多 120 天，<strong>2026-07 起</strong>提升至 <strong>130 天</strong>，与联邦 Paid Parental Leave 并行核对 Fair Work 与雇主政策。",
      "NES unpaid parental leave up to 12–24 months; <strong>flexible parental leave</strong> cap rises to <strong>130 days from Jul 2026</strong> (was 120 in FY25-26); check Fair Work and employer schemes."
    ),
    pills: [L("核心市场", "Core market"), L("Fair Work", "Fair Work"), L("州级公休", "State public holidays")],
    href: "https://www.fairwork.gov.au/leave"
  }
];

window.LEAVE_CATEGORIES = [
  { id: "public", label: L("法定节假日", "Public / statutory holidays") },
  { id: "annual", label: L("年假（带薪年休假）", "Annual leave / paid vacation") },
  { id: "sick", label: L("病假", "Sick leave") },
  { id: "parental", label: L("产假 / 陪产假 / 育儿假", "Maternity / paternity / parental") },
  { id: "special", label: L("其他法定休假", "Other statutory leave") },
  { id: "rest", label: L("周休与工时", "Weekly rest & hours") }
];

window.LEAVE_MARKETS = [
  {
    code: "CN", flag: "🇨🇳", nameZh: "中国大陆", nameEn: "Mainland China",
    sources: [{ title: "人社部", titleEn: "MOHRSS", url: "https://www.mohrss.gov.cn/" }],
    items: [
      { cat: "public",
        shortSummary: "法定 13 天（2025 起）",
        shortSummaryEn: "13 statutory days (2025+)",
        summary: "自 2025-01-01 起法定节假日共 <strong>13 天</strong>（国令第 795 号；此前为 11 天）：元旦 1、春节 4（除夕至初三）、清明 1、劳动 2、端午 1、中秋 1、国庆 3。", summaryEn: "From 1 Jan 2025: <strong>13 statutory days</strong> (Order 795; was 11): NY 1, Spring Festival 4 (eve–day 3), Qingming 1, Labour 2, Dragon Boat 1, Mid-Autumn 1, National Day 3.",
        details: ["2026 年连休以国务院办公厅年度放假通知为准", "法定 13 天框架不因调休增减", "少数民族地区可另有民族节日", "法定节假日加班付 2–3 倍工资", "官方：https://www.gov.cn/zhengce/zhengceku/202411/content_6986381.htm"],
        detailsEn: ["2026 bridge schedule: annual State Council notice", "13 statutory days fixed; bridge days separate", "Ethnic festivals in minority regions", "Holiday work at 2–3× pay", "Official: gov.cn Order 795"] },
      { cat: "annual", summary: "累计工作满 1/10/20 年：5/10/15 天带薪年假（法定最低）。", summaryEn: "Statutory annual leave 5/10/15 days by 1/10/20 years of service.",
        details: ["新入职满 1 年者适用最低档", "单位因经营需要可统筹安排", "未休年假可折算或翻倍补偿"],
        detailsEn: ["Applies after first qualifying year", "Employer may schedule collectively", "Unused leave: payout or double pay on termination rules"] },
      { cat: "sick", summary: "医疗期按工龄与司龄分档；病假工资一般不低于当地最低工资 80%（地方细则）。", summaryEn: "Medical treatment period by tenure; sick pay often ≥80% local minimum (local rules).",
        details: ["需医疗机构证明", "超过医疗期可协商或解除", "各地医疗期上限表不同"],
        detailsEn: ["Medical certificate required", "Beyond medical period: consultation or termination rules", "Local caps on medical period"] },
      { cat: "parental", summary: "产假≥98 天（多数省市延长）；陪产假、育儿假依省级人口与健康条例（各地差异大）。", summaryEn: "Maternity ≥98 days (often extended locally); paternity/parental leave by provincial rules.",
        details: ["女职工产假含省市延长政策", "男方陪产育儿假试点扩展中", "生育津贴与社保衔接"],
        detailsEn: ["Maternity plus provincial extensions", "Paternity/parental leave expanding by region", "Benefits via social insurance"] },
      { cat: "special", summary: "婚假、丧假等按地方人口计生条例/职工规章；常驻酌情。", summaryEn: "Marriage, bereavement etc. under local rules.",
        details: ["婚假 3–15 天不等（省份）", "丧假近亲属通常 1–3 天", "三八妇女节半天（部分单位）"],
        detailsEn: ["Marriage leave 3–15 days by province", "Bereavement often 1–3 days", "Women's Day half day (common practice)"] },
      { cat: "rest", summary: "标准工时每日 8 小时、每周 40 小时；加班有上限。", summaryEn: "Standard 8h/day, 40h/week; overtime caps.",
        details: ["双休制为普遍实践", "综合工时、不定时需审批", "加班费比例法定"],
        detailsEn: ["Five-day week common", "Alternative hours need approval", "Statutory OT rates"] }
    ]
  },
  {
    code: "HK", flag: "🇭🇰", nameZh: "香港", nameEn: "Hong Kong",
    sources: [
      { title: "劳工处", titleEn: "Labour Department", url: "https://www.labour.gov.hk/" },
      { title: "2026 法定假期", titleEn: "2026 statutory holidays", url: "https://www.labour.gov.hk/eng/news/latest_holidays2026.htm" }
    ],
    items: [
      { cat: "public",
        shortSummary: "法定 15 天（2026 起）",
        shortSummaryEn: "15 statutory days (2026+)",
        summary: "自 <strong>2026-01-01</strong> 起法定假期增至 <strong>15 天</strong>（新增复活节星期一；2028 起 Good Friday、2030 起再增 1 天至 17 天）。", summaryEn: "From <strong>1 Jan 2026</strong>: <strong>15 statutory holidays</strong> (Easter Monday added; 16 from 2028, 17 from 2030).",
        details: ["劳工处每年公布法定假日表", "休息日遇法定假须补假", "满 3 个月连续合约享假日薪酬"],
        detailsEn: ["Labour Dept annual holiday list", "Substitute day if on rest day", "Holiday pay after 3 months' continuous contract"] },
      { cat: "annual", summary: "雇佣条例：年假 7–14 天梯度（服务年资）。", summaryEn: "EO annual leave 7–14 days by service.",
        details: ["连续契约满 12 个月", "可累积", "离职折现"],
        detailsEn: ["Continuous contract 12+ months", "Accrual allowed", "Pay in lieu on termination"] },
      { cat: "sick", summary: "有薪病假累计按「2+4」规则（满 12 周合资格）。", summaryEn: "Paid sick leave accumulation (eligible after 12 weeks).",
        details: ["注册医生证明", "有薪病假先于无薪", "严重可跳长期病假"],
        detailsEn: ["Registered medical certificate", "Paid sick before unpaid", "Long-term sick rules"] },
      { cat: "parental", summary: "产假 14 周；陪产假 5 天（法定）。", summaryEn: "14 weeks maternity; 5 days paternity.",
        details: ["雇主可向政府索偿部分产假", "陪产假须为初生子女父亲", "暂无法定育儿假（讨论中）"],
        detailsEn: ["Partial maternity reimbursement", "Paternity for father of newborn", "No general parental leave yet"] },
      { cat: "special", summary: "婚假非法定；工伤假依雇员补偿条例。", summaryEn: "No statutory marriage leave; injury under ECC.",
        details: ["雇员可休无薪事假协商", "工伤有赔偿与康复", "陪审员假等可协商"],
        detailsEn: ["Unpaid leave negotiated", "Work injury scheme", "Jury leave by agreement"] },
      { cat: "rest", summary: "每连续 7 日至少 1 天休息；另有法定假日。", summaryEn: "At least 1 rest day per 7 days plus holidays.",
        details: ["休息日可在合同订明", "长工时长上限规则", "加班多用于 blue-collar sectors"],
        detailsEn: ["Rest day in contract", "Hours limits", "OT more common in certain sectors"] }
    ]
  },
  {
    code: "TW", flag: "🇹🇼", nameZh: "台湾", nameEn: "Taiwan",
    sources: [{ title: "劳动部", titleEn: "MOL", url: "https://www.mol.gov.tw/" }],
    items: [
      { cat: "public",
        shortSummary: "国定+调休（年度公告）",
        shortSummaryEn: "National + bridge (annual)",
        summary: "纪念日、民俗节日及调休放假；<strong>2026 年</strong>由行政院统一公布月历（含春节、228、清明、端午、中秋、国庆连休等）。", summaryEn: "National commemorations, folk holidays and bridge days; <strong>2026</strong> unified calendar from the Executive Yuan.",
        details: ["劳动部节假日刊物", "调休形成连假", "出勤工资依劳基法节假日条款"],
        detailsEn: ["MOL holiday gazette", "Bridge long weekends", "Pay per LSA holiday rules"] },
      { cat: "annual", summary: "特休 3～30 天按年资（劳基法第 38 条）。", summaryEn: "Special leave 3–30 days by seniority (LSA Art. 38).",
        details: ["6 个月至未满 1 年：3 天", "逐年增加至上限", "未休可折现"],
        detailsEn: ["6 months to <1 year: 3 days", "Increases to cap", "Unused paid out on exit"] },
      { cat: "sick", summary: "住院病假 1 年 30 日、非住院 2 日+4 日等规则。", summaryEn: "Hospitalisation 30 days/year; outpatient rules apply.",
        details: ["需医师证明", "劳保普通伤病津贴衔接", "超过可走留职停薪"],
        detailsEn: ["Medical certificate", "Labour insurance benefits", "Leave without pay after cap"] },
      { cat: "parental", summary: "产假 8 周；陪产假 7 天；育婴留职停薪最长 2 年。", summaryEn: "8 weeks maternity; 7 days paternity; parental unpaid up to 2 years.",
        details: ["产间可工资补贴", "育婴留停男女均可", "家庭照顾假 7 日"],
        detailsEn: ["Maternity pay support", "Parental leave for parents", "Family care leave 7 days"] },
      { cat: "special", summary: "婚假 8 日、丧假按亲等 3–8 日。", summaryEn: "Marriage 8 days; bereavement 3–8 days by kinship.",
        details: ["公假（兵役、选举等）", "生理假 1 月 1 日", "安胎休养"],
        detailsEn: ["Public leave (service, voting)", "Menstrual leave 1 day/month in some rules", "Pregnancy rest"] },
      { cat: "rest", summary: "单日不超过 8 小时、4 周 40 小时；须一日例假。", summaryEn: "8h/day, 40h/4 weeks; mandatory weekly rest.",
        details: ["加班需工资加成", "变形工时需核准", "11 小时以上须连续休息"],
        detailsEn: ["OT premium pay", "Flexible hours need approval", "11h rest between shifts"] }
    ]
  },
  {
    code: "SG", flag: "🇸🇬", nameZh: "新加坡", nameEn: "Singapore",
    sources: [{ title: "MOM", titleEn: "MOM", url: "https://www.mom.gov.sg/leave-and-benefits" }],
    items: [
      { cat: "public",
        shortSummary: "11 天公休（2026 历表）",
        shortSummaryEn: "11 public holidays (2026)",
        summary: "雇佣法令下 <strong>11 天</strong>公休（MOM 每年公布历表；2026 含农历新年 2 天、哈芝、卫塞等）。", summaryEn: "<strong>11</strong> gazetted public holidays under the Employment Act (MOM publishes annual list incl. CNY 2 days in 2026).",
        details: ["满 3 个月起适用", "休息日遇公休补假", "MOM 2026 holiday list on mom.gov.sg"],
        detailsEn: ["After 3 months", "Substitute if on rest day", "See MOM 2026 public holiday list"] },
      { cat: "annual", summary: "首年 7 天起，递增至最高 14 天（Employment Act Part IV）。", summaryEn: "From 7 days year one, up to 14 days (EA Part IV).",
        details: ["满 3 个月起算", "前 3 年每年 +1", "离职未休应支付"],
        detailsEn: ["After 3 months", "+1 day years 1–3", "Pay unused on termination"] },
      { cat: "sick", summary: "门诊 14 天 + 住院 60 天有薪病假（政府注册医生 MC）。", summaryEn: "14 outpatient + 60 hospitalisation paid sick (MC).",
        details: ["须通知雇主", "未用完无薪病假可续", "外国员工同理合资格者"],
        detailsEn: ["Notify employer", "Unpaid extension", "Foreign workers if eligible"] },
      { cat: "parental", summary: "产假 16 周；<strong>2025-04-01 起</strong>陪产假法定 4 周（GPPL）；公民子女育儿假 6 天 GPCL + 7–12 岁 2 天 ECL。", summaryEn: "16 weeks maternity; <strong>from 1 Apr 2025</strong> 4 weeks statutory GPPL; 6 days GPCL (+2 days ECL age 7–12) for SC children.",
        details: ["陪产假须提前 4 周通知雇主", "政府付费陪产假上限见 MSF GPL", "非公民育儿假 2 天/年"],
        detailsEn: ["4 weeks' notice for GPPL", "GPL reimbursement caps apply", "2 childcare days/year if child not SC"] },
      { cat: "special", summary: "共享产假/领养假等 MOM 指引更新。", summaryEn: "Shared parental, adoption leave per MOM.",
        details: ["无薪婴幼儿照护假", "国家服务假等", "陪审团假非法定"],
        detailsEn: ["Unpaid infant care", "National service arrangements", "No statutory jury leave"] },
      { cat: "rest", summary: "每周至少 1 天休息日； Part IV 员工工时上限。", summaryEn: "Min 1 rest day/week; hours caps for Part IV employees.",
        details: ["经理例外常见", "超时需加班费", "夜班补贴非普遍法定"],
        detailsEn: ["PMET exemptions", "OT for covered workers", "Night shift not universal statutory"] }
    ]
  },
  {
    code: "AU", flag: "🇦🇺", nameZh: "澳大利亚", nameEn: "Australia",
    sources: [{ title: "Fair Work", titleEn: "Fair Work", url: "https://www.fairwork.gov.au/leave" }],
    items: [
      { cat: "public", summary: "州级公共假日表不同；全国统一国庆等。", summaryEn: "State public holiday lists; national days.",
        details: ["各州 Easter、杯赛日等", "假日工作 Award 罚金", "乳品区州假日差异"],
        detailsEn: ["State-specific days", "Award penalties on work", "Regional variation"] },
      { cat: "annual", summary: "NES 4 周年假（全职累积）。", summaryEn: "NES: 4 weeks annual leave (accrues).",
        details: ["可按 Award 为 5 周（如 shift worker）", "生病可用年假", "离职折现"],
        detailsEn: ["5 weeks for some awards", "Can take for sickness", "Payout on termination"] },
      { cat: "sick", summary: "个人/护理假每年 10 天累积（含可带薪）。", summaryEn: "10 days personal/carer's leave per year.",
        details: ["临时工按工时比例", "证据要求按雇主政策", "可累积跨年"],
        detailsEn: ["Casuals pro-rata", "Evidence per policy", "Accrual carries over"] },
      { cat: "parental", summary: "NES 无薪育婴假最长 12 个月（可延至 24 个月）；<strong>灵活育婴假</strong>：2025-07 至 2026-06 最多 120 天，<strong>2026-07 起</strong>最多 130 天；政府 PPL 与雇主政策并行。", summaryEn: "NES unpaid parental leave up to 12 months (to 24 by agreement); <strong>flexible parental leave</strong> cap 120 days (1 Jul 2025–Jun 2026), <strong>130 days from Jul 2026</strong>; plus Govt PPL/employer schemes.",
        details: ["无薪育婴假期间年假一般不累积", "Keeping in touch days 可累积年假", "Fair Work 育婴假保证复职"],
        detailsEn: ["Annual leave usually doesn't accrue on unpaid parental leave", "KIT days accrue leave", "Return-to-work guarantee"] },
      { cat: "special", summary: "社区服务假、陪审团假、家暴假等 NES/Award。", summaryEn: "Community service, jury, family violence leave in NES/awards.",
        details: ["长期服务假各州立法", "丧假常含在 personal leave", "辩护立场假"],
        detailsEn: ["Long service leave by state", "Bereavement in personal", "Defence reservist leave"] },
      { cat: "rest", summary: "38 小时/周基准；合理额外工时。", summaryEn: "38h/week baseline; reasonable additional hours.",
        details: ["Award 罚金率", "Breaker-break", "Flexible work requests"],
        detailsEn: ["Award penalties", "Break requirements", "Flexible work laws"] }
    ]
  },
  {
    code: "NZ", flag: "🇳🇿", nameZh: "新西兰", nameEn: "New Zealand",
    sources: [{ title: "Employment NZ", titleEn: "Employment NZ", url: "https://www.employment.govt.nz/leave-and-holidays/" }],
    items: [
      { cat: "public",
        shortSummary: "11 天国定假",
        shortSummaryEn: "11 national holidays",
        summary: "2026 年 <strong>11 个</strong>全国法定公休（含 ANZAC、国王诞辰、毛利新年 Matariki、圣诞等；遇周末 Mondayisation）。", summaryEn: "2026: <strong>11</strong> national public holidays (ANZAC, King's Birthday, Matariki, Christmas; Mondayisation rules).",
        details: ["地区另有省级纪念日", "假日工作法定最低薪酬", "Employment NZ 年度一览"],
        detailsEn: ["Regional anniversaries", "Minimum pay if working holidays", "Employment NZ annual list"] },
      { cat: "annual", summary: "满 12 个月 4 周年假。", summaryEn: "4 weeks after 12 months.",
        details: ["可按周比例计算", "停机 shutdown 可动用年假", "离职支付"],
        detailsEn: ["Can cash-up by agreement", "Closedowns use annual", "Final pay includes leave"] },
      { cat: "sick", summary: "病假 10 天/年（2024 立法）；含配对护理。", summaryEn: "10 sick days per year (2024 Act); includes caring.",
        details: ["累积每年", "雇主可要求合理证明", "不足首年按比例"],
        detailsEn: ["Accrues yearly", "Reasonable proof", "Pro-rata first year"] },
      { cat: "parental", summary: "政府带薪育儿假 26 周（条件）；伴侣假。", summaryEn: "Gov paid parental 26 weeks (eligible); partner leave.",
        details: ["雇主可延长无薪", "早产假、死产假", "家庭暴力假 10 天"],
        detailsEn: ["Extended unpaid common", "Premature/stillbirth provisions", "FDV leave 10 days"] },
      { cat: "special", summary: "陪审团假、军假、选举假等。", summaryEn: "Jury, military, voting leave.",
        details: ["丧假 3 天", "公会培训假协商", "无薪假协商"],
        detailsEn: ["Bereavement 3 days", "Union leave negotiated", "Unpaid by agreement"] },
      { cat: "rest", summary: "无统一法定加班倍数；最低薪与协议。", summaryEn: "No universal OT multiplier; minimum wage and agreement.",
        details: ["合理休息间隔", "夜班无普遍加成", "工时记录要求"],
        detailsEn: ["Rest between shifts", "Limited night premium", "Record-keeping"] }
    ]
  },
  {
    code: "JP", flag: "🇯🇵", nameZh: "日本", nameEn: "Japan",
    sources: [{ title: "厚生労働省", titleEn: "MHLW", url: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/index.html" }],
    items: [
      { cat: "public", summary: "约 16 个国民祝日 + 公司年终年末。", summaryEn: "~16 national holidays plus company year-end.",
        details: ["海の日、体育の日等", "施行日按年份调整", "假日工作需 35%+ 等"],
        detailsEn: ["Marine Day, Sports Day, etc.", "Dates shift by year", "Holiday work premiums"] },
      { cat: "annual", summary: "有給休暇：半年出勤≥80% 起 10 日，最高 20 日。", summaryEn: "Paid annual: from 10 days at 6 months (80% attendance), up to 20.",
        details: ["强制 5 日/年取得义务（2020）", "未使用可部分前两年结转", "离职一般不给付未休"],
        detailsEn: ["Must use 5 days/year (2020 rule)", "Limited carryover", "Unused rarely paid on exit"] },
      { cat: "sick", summary: "法定带薪病假无通用制度；劳资惯例无薪 + 健保给付。", summaryEn: "No general statutory paid sick leave; unpaid + health insurance.",
        details: ["傷病手当金要件", "公司业务事故劳灾", "パート也适用有給"],
        detailsEn: ["Sickness allowance from insurer", "Workers' comp for injury", "Part-timers eligible for paid leave"] },
      { cat: "parental", summary: "产前产后合计约 14 周；育儿休业至 1 岁起可延长。<strong>2025 年</strong>育儿·介护休业法分阶段施行：男性育休取得状况公表扩至 300 人以上企业。", summaryEn: "~14 weeks maternity; childcare leave from age 1+. <strong>2025</strong> phased childcare/care leave reforms; parental KPI disclosure for firms 300+ employees.",
        details: ["出生前后父母各 14 天育休可获加成给付（2025-04 起）", "子の看護等休暇延至小学 3 年级", "2025-10 起 3 岁至就学前须有两项以上灵活勤务"],
        detailsEn: ["Bonus if both parents take 14 days post-birth (from Apr 2025)", "Child nursing leave to grade 3", "From Oct 2025: 2+ flexible work options ages 3–school"] },
      { cat: "special", summary: "子の看護等休暇（含入学式等）；介护休业法定；庆吊假依就业规则。", summaryEn: "Child nursing/care leave (incl. ceremonies); statutory nursing-care leave; bereavement per work rules.",
        details: ["感染症班级停课可休", "配偶者出産休暇", "介护休业·短小时用工 2025 强化"],
        detailsEn: ["Class closures for infection", "Spouse childbirth leave", "Care leave / reduced hours strengthened 2025"] },
      { cat: "rest", summary: "每周至少 1 天或 4 周 4 天休息；法定 8h/日。", summaryEn: "Weekly rest; statutory 8h/day.",
        details: ["36 协定加班", "深夜 22–5 加成", "服务业跨日排班"],
        detailsEn: ["Article 36 overtime", "Late-night premium", "Cross-midnight shifts"] }
    ]
  },
  {
    code: "KR", flag: "🇰🇷", nameZh: "韩国", nameEn: "Korea",
    sources: [{ title: "MOEL", titleEn: "MOEL", url: "https://www.moel.go.kr/" }],
    items: [
      { cat: "public", summary: "公休日带薪；春节中秋长假。", summaryEn: "Paid public holidays; Lunar NY/Chuseok blocks.",
        details: ["宪法纪念日等", "替代休日制", "假日上班工资加成"],
        detailsEn: ["Constitution Day, etc.", "Substitute holiday system", "Holiday work premium"] },
      { cat: "annual", summary: "满 1 年 15 天；每 2 年 +1 至 25 天上限。", summaryEn: "15 days after 1 year; +1 per 2 years to 25 max.",
        details: ["未满 1 年按月比例", "雇主可指定使用时段", "离职折现部分争议"],
        detailsEn: ["Pro-rata first year", "Employer may designate timing", "Payout rules on exit"] },
      { cat: "sick", summary: "无统一带薪病假法定；依社员规或商谈。", summaryEn: "No universal paid sick leave statute; employer rules.",
        details: ["工伤医疗费另轨", "病毒保育假等临时措施", "医生诊断书"],
        detailsEn: ["Work injury separate", "Temporary childcare sick measures", "Medical certificates"] },
      { cat: "parental", summary: "产假 90 天；育儿休假最长 1 年（父母各用满 3 个月可合计延长至 1.5 年）。<strong>2025-01</strong> 育儿津贴上调并取消事后补发；<strong>2026-08-20</strong> 起可享 1–2 周短期育儿假。", summaryEn: "90-day maternity; parental leave up to 1 year (to 1.5 years if both parents use ≥3 months each). <strong>Jan 2025</strong> benefit uplift; <strong>from 20 Aug 2026</strong> short-term parental leave 1–2 weeks.",
        details: ["2026-09 配偶预产期前 50 天至产后 120 天内 20 天陪产假", "父母同时育儿假补助提高", "育儿期工时缩短至小学 6 年级以下"],
        detailsEn: ["From Sep 2026: 20-day spouse birth leave window expanded", "Higher pay when both parents take leave", "Reduced hours to child grade 6"] },
      { cat: "special", summary: "婚假、丧假无薪或少薪看公司规定。", summaryEn: "Marriage/bereavement often unpaid per company.",
        details: ["生理期假无薪", "教官假等国家义务", "选举投票假"],
        detailsEn: ["Menstrual unpaid common", "Training/service leave", "Voting leave"] },
      { cat: "rest", summary: "每周 40 小时；保持周休金（每月≥1 次）。", summaryEn: "40h/week; weekly holiday pay monthly.",
        details: ["加班 50% 起", "夜间加成", "服务行业例外挑战"],
        detailsEn: ["OT from 50%", "Night premium", "Service sector exceptions"] }
    ]
  },
  {
    code: "IN", flag: "🇮🇳", nameZh: "印度", nameEn: "India",
    sources: [{ title: "Labour codes / state acts", titleEn: "India Labour", url: "https://labour.gov.in/" }],
    items: [
      { cat: "public", summary: "国定假 + 邦假清单；商店旅馆法各异。", summaryEn: "National + state lists; shop acts vary.",
        details: ["共和国日、独立日、甘地诞等", "印地教、穆斯林节日", "换班员工补假"],
        detailsEn: ["Republic Day, Independence Day", "Religious holidays", "Shift worker substitution"] },
      { cat: "annual", summary: "常见 12–24 天年假（邦/行业法）。", summaryEn: "Often 12–24 annual leave days (state/industry).",
        details: ["IT 合同常 15–21 天", "累积上限常见", " encashment 政策"],
        detailsEn: ["IT contracts often 15–21", "Accrual caps", "Encashment policies"] },
      { cat: "sick", summary: "部分邦法定带薪病假；ESI 适用 90 天等。", summaryEn: "Some states mandate paid sick; ESI up to 90 days.",
        details: ["需医疗证明", "累积 vs 年度刷新", "Mumbai 等城另有规则"],
        detailsEn: ["Medical certificate", "Accrual vs refresh", "City-specific rules"] },
      { cat: "parental", summary: "Maternity Benefit Act：产假 26 周（符合条件）；陪产假 <strong>15 天</strong>（2024 前后联邦立法维持）。", summaryEn: "Maternity Benefit Act: 26 weeks maternity (eligible); <strong>15 days</strong> paternity (federal framework).",
        details: ["生育津贴法案", "领养假部分州", "Surrogacy 规定更新"],
        detailsEn: ["Maternity Benefit Act", "Adoption in some states", "Surrogacy rules"] },
      { cat: "special", summary: "结婚假、丧假各省不同。", summaryEn: "Marriage, bereavement vary by state.",
        details: ["陪审团假州法", "服兵役假", "节日换薪 vs 补假"],
        detailsEn: ["Jury by state", "Military leave", "Holiday pay in lieu"] },
      { cat: "rest", summary: "工厂法每周至少 1 日休息；IT 弹性大。", summaryEn: "Factories Act weekly rest; IT flexible.",
        details: ["加班 2 倍规则部分行业", "夜班女性限制废除后调整", "碎工资单禁止"],
        detailsEn: ["Double OT in factories", "Night work rules updated", "Wage rules reforms"] }
    ]
  },
  {
    code: "MY", flag: "🇲🇾", nameZh: "马来西亚", nameEn: "Malaysia",
    sources: [{ title: "MOHR", titleEn: "MOHR", url: "https://www.mohr.gov.my/" }],
    items: [
      { cat: "public",
        shortSummary: "联邦 11+ 公休",
        shortSummaryEn: "11+ federal holidays",
        summary: "2026 年联邦层面 <strong>11 个</strong>全国假日 + 各州额外假日（2025-05 起沙巴/砂拉越适用修订雇佣法令，与半岛规则并行核对）。", summaryEn: "2026: <strong>11</strong> federal national holidays + state days (Sabah/Sarawak ordinances aligned from May 2025 — check local EA).",
        details: [" Hari Merdeka、开斋等", "雇主义务付薪或放假", "休息日遇假日补假"],
        detailsEn: ["Merdeka, Hari Raya, etc.", "Pay or off in lieu", "Substitute if on rest day"] },
      { cat: "annual", summary: "Employment Act 年假 8–16 天（服务年限）。", summaryEn: "EA annual leave 8–16 days by tenure.",
        details: ["满 12 个月", "可到 16 天", "未休离职折现"],
        detailsEn: ["After 12 months", "Up to 16 days", "Pay unused on exit"] },
      { cat: "sick", summary: "门诊 22 + 住院 60 天（合资格 EA 雇员）。", summaryEn: "22 outpatient + 60 hospitalisation sick days.",
        details: ["政府医生或认可私人医生", "超过可走无薪", "累积规则"],
        detailsEn: ["Government or approved doctor", "Unpaid beyond", "Accumulation rules"] },
      { cat: "parental", summary: "产假 98 天；陪产假 7 天（2023 起）。", summaryEn: "98 days maternity; 7 days paternity.",
        details: ["外国配偶需检查资格", "流产假", "哺乳时间"],
        detailsEn: ["Foreign spouse eligibility check", "Miscarriage leave", "Nursing breaks"] },
      { cat: "special", summary: "朝圣假、哈忌假等宗教休假惯例。", summaryEn: "Hajj and religious leave practices.",
        details: ["无薪事假协商", "迁葬假", "国定毕业假非法定"],
        detailsEn: ["Unpaid leave negotiated", "Funeral travel", "No statutory graduation leave"] },
      { cat: "rest", summary: "每周至少 1 天休息日；45 小时/周上限（ EA 适用者）。", summaryEn: "Min 1 rest day/week; 45h/week cap (covered employees).",
        details: ["加班费 1.5–3 倍", "夜班女性部分限制", "外包争议"],
        detailsEn: ["OT 1.5–3×", "Night work restrictions history", "Outsourcing debates"] }
    ]
  },
  {
    code: "TH", flag: "🇹🇭", nameZh: "泰国", nameEn: "Thailand",
    sources: [{ title: "MOL Thailand", titleEn: "MOL", url: "https://www.mol.go.th/" }],
    items: [
      { cat: "public",
        shortSummary: "2026 约 16 天",
        shortSummaryEn: "~16 days in 2026",
        summary: "<strong>2026</strong> 官方日历通常含宋干、水灯等约 <strong>16 个</strong>法定假日（依皇家公告年度调整）。", summaryEn: "<strong>2026</strong> royal gazette calendar typically lists ~<strong>16</strong> public holidays (Songkran, Loy Krathong, etc.).",
        details: ["泼水节、水灯节", "假日工作双倍起", "穆斯林节日南部"],
        detailsEn: ["Songkran, Loy Krathong", "Double pay on holiday work", "Muslim holidays in south"] },
      { cat: "annual", summary: "满 1 年：6 天起，3 年 10 天，6 年 14 天…", summaryEn: "After 1 year: from 6 days, 10 at 3 years, 14 at 6 years…",
        details: ["离职折现", "可协商合并公休", "每年须使用"],
        detailsEn: ["Pay on termination", "May combine with holidays by policy", "Annual use"] },
      { cat: "sick", summary: "带薪病假每年 30 天。", summaryEn: "30 paid sick days per year.",
        details: ["需医疗证明", "超过可走无薪", "SSO 补贴部分"],
        detailsEn: ["Medical certificate", "Unpaid beyond", "SSO partial support"] },
      { cat: "parental", summary: "产假 98 天（雇主 45+社保 45）；陪产假有限。", summaryEn: "98 days maternity (45 employer + 45 SSO); limited paternity.",
        details: ["怀孕检查假", "流产假", "托儿所假非法定"],
        detailsEn: ["Prenatal visit leave", "Miscarriage leave", "No statutory nursery leave"] },
      { cat: "special", summary: "出家、兵役、丧假等泰国惯例。", summaryEn: "Ordination, military, bereavement customs.",
        details: ["僧侣假文化", "佛教节日", "无薪照顾假"],
        detailsEn: ["Ordination culture", "Buddhist festivals", "Unpaid care leave"] },
      { cat: "rest", summary: "日 8 小时、周 48 小时上限。", summaryEn: "8h/day, 48h/week limits.",
        details: ["加班 1.5–3 倍", "夜班女性限制历史", "服务业长工时"],
        detailsEn: ["OT 1.5–3×", "Past night restrictions", "Hospitality long hours"] }
    ]
  },
  {
    code: "ID", flag: "🇮🇩", nameZh: "印尼", nameEn: "Indonesia",
    sources: [{ title: "Kemnaker", titleEn: "Kemnaker", url: "https://kemnaker.go.id/" }],
    items: [
      { cat: "public",
        shortSummary: "2026：17 国假 +8 连休",
        shortSummaryEn: "2026: 17 nat. +8 collective",
        summary: "<strong>2026</strong> 三部长 SKB（2025-09-19）：<strong>17 天</strong>国定假 + <strong>8 天</strong>cuti bersama（连休通常冲抵年假；民间可不完全适用私营）。", summaryEn: "<strong>2026</strong> tri-minister SKB (19 Sep 2025): <strong>17</strong> national holidays + <strong>8</strong> collective leave days (often deducted from annual leave in practice).",
        details: ["开斋连休 20–24/3/2026", "宗教节日日期由宗教部令补充", "私营执行依雇主政策"],
        detailsEn: ["Eid bridge 20–24 Mar 2026", "Islamic dates via Ministry of Religion", "Private sector follows employer policy"] },
      { cat: "annual", summary: "连续工作满 12 个月享 12 天年假。", summaryEn: "12 days annual leave after 12 continuous months.",
        details: ["可分割使用", "离职折现", "外国员工同样"],
        detailsEn: ["Can split", "Cash on exit", "Foreign workers included"] },
      { cat: "sick", summary: "病假薪资按递减百分比（依工龄与证明）。", summaryEn: "Sick pay at declining % with tenure and MC.",
        details: ["需医生证明", "超过 12 个月走无薪", "长期病可能需要评估"],
        detailsEn: ["Doctor certificate", "Unpaid after cap", "Long-term assessment"] },
      { cat: "parental", summary: "产假 3 个月；父亲陪产假数日（法改扩展）。", summaryEn: "3 months maternity; paternity days expanded.",
        details: ["流产假", "可延长协商", "哺乳休息"],
        detailsEn: ["Miscarriage leave", "Extensions negotiated", "Nursing breaks"] },
      { cat: "special", summary: "婚假、割礼、朝圣等宗教休假。", summaryEn: "Marriage, religious pilgrimage leave.",
        details: ["巴马杜延期", "献血假惯例", "社死日无薪"],
        detailsEn: ["Hajj leave", "Blood donation practice", "Bereavement unpaid"] },
      { cat: "rest", summary: "每周 6 日或 40 小时（依规章）；夜班加成。", summaryEn: "40h or 6-day rules; night premiums.",
        details: ["宗教斋月工时安排", "加班上限 3 小时/日", "服务业轮班"],
        detailsEn: ["Ramadan schedules", "OT cap 3h/day", "Shift work"] }
    ]
  },
  {
    code: "VN", flag: "🇻🇳", nameZh: "越南", nameEn: "Vietnam",
    sources: [{ title: "MOLISA", titleEn: "MOLISA", url: "https://www.molisa.gov.vn/" }],
    items: [
      { cat: "public",
        shortSummary: "国假 11 天框架",
        shortSummaryEn: "11-day holiday framework",
        summary: "劳动法列明 <strong>11 天</strong>国定假；实际连休因春节、国庆等年度政府通知延长（带薪公休）。", summaryEn: "<strong>11</strong> national holidays listed in Labour Code; Tet/National Day breaks lengthened per annual government notice.",
        details: ["国庆、雄王节", "假日工作或补休", "少数民族节日"],
        detailsEn: ["National Day, Hung Kings", "Work or compensatory rest", "Ethnic holidays"] },
      { cat: "annual", summary: "12–14 天年假（工龄与条件）。", summaryEn: "12–14 annual leave days by service.",
        details: ["有害工种增加", "离职折现", "可提前休完"],
        detailsEn: ["Extra for hazardous jobs", "Payout on exit", "Advance leave"] },
      { cat: "sick", summary: "社保参保者病假享受 BHYT 补贴+雇主补足。", summaryEn: "Insured workers: health insurance + employer top-up.",
        details: ["需医疗记录", "长期病社保承担", "超过社保期无薪"],
        detailsEn: ["Medical records", "Long-term SSO", "Unpaid beyond"] },
      { cat: "parental", summary: "产假 6 个月（社会保险法 41/2024 自 <strong>2025-07-01</strong>）；参保父亲陪产假 <strong>5–14 个工作日</strong>；<strong>2026-07-01</strong> 起二孩母亲产假 7 个月、父亲陪产 10 天。", summaryEn: "6 months maternity (Social Insurance Law 41/2024 from <strong>1 Jul 2025</strong>); insured fathers <strong>5–14 working days</strong> paternity; <strong>from 1 Jul 2026</strong> 7 months maternity / 10 days paternity for second child.",
        details: ["须在出生后 60 日内休假", "可按分娩方式递增天数", "生育奖励与人口法 2025 衔接"],
        detailsEn: ["Must start within 60 days of birth", "Days scale by birth type", "Population Law 2025 links"] },
      { cat: "special", summary: "婚假 3 天；丧假 3 天（亲友标准）。", summaryEn: "Marriage 3 days; bereavement 3 days.",
        details: ["公民义务假", "儿女结婚假", "个人事假协商"],
        detailsEn: ["Civic duty leave", "Child marriage leave", "Personal unpaid"] },
      { cat: "rest", summary: "每日 8 小时、年加班上限；平日 150% 加班。", summaryEn: "8h/day; annual OT cap; 150% weekday OT.",
        details: ["夜班津贴", "轮班制工厂", "服务业长工时风险"],
        detailsEn: ["Night allowance", "Factory shifts", "Hospitality OT risk"] }
    ]
  },
  {
    code: "PH", flag: "🇵🇭", nameZh: "菲律宾", nameEn: "Philippines",
    sources: [{ title: "DOLE", titleEn: "DOLE", url: "https://www.dole.gov.ph/" }],
    items: [
      { cat: "public", summary: "Regular 与 Special 非工作日规则不同。", summaryEn: "Regular vs special non-working day rules differ.",
        details: ["Holy Week、独立日", "Special day 无工无薪", "Worked holiday premium"],
        detailsEn: ["Holy Week, Independence", "Special non-working rules", "Holiday premiums"] },
      { cat: "annual", summary: "Service Incentive Leave 5 天/年（满 1 年）。", summaryEn: "5 days SIL after 1 year.",
        details: ["可病事并用", "少于 10 人雇主有例外", "累积或年度依雇规"],
        detailsEn: ["Multi-purpose", "Small employer exceptions", "Accrual per rules"] },
      { cat: "sick", summary: "无广泛法定带薪病假；SSS 疾病津贴有限。", summaryEn: "Limited SSS sickness benefit; no broad paid sick statute.",
        details: ["公司病假惯例", "医生证明", "长期病无薪为主"],
        detailsEn: ["Employer sick practice", "Medical cert", "Long-term often unpaid"] },
      { cat: "parental", summary: "产假 105 天（单胎）；solo parent +15；陪产假法定 <strong>7 天</strong>（RA 8187，前四次分娩）。", summaryEn: "105 days maternity; solo parent +15; statutory <strong>7 days</strong> paternity (RA 8187, first four deliveries).",
        details: ["陪产假 60 日内使用", "未使用不折现", "VAWC/单亲假等特殊群体假"],
        detailsEn: ["Paternity within 60 days of birth", "Unused not convertible to cash", "VAWC/solo-parent leaves"] },
      { cat: "special", summary: "单亲假、家暴假等特殊群体假。", summaryEn: "Solo parent, VAWC leave.",
        details: ["锐意假非法定", "选举假", "葬礼假惯例 3–5 天"],
        detailsEn: ["Bereavement practice 3–5", "Voting leave", "No statutory graduation"] },
      { cat: "rest", summary: "每周至少 24 小时连续休息；8 小时工作日。", summaryEn: "24 consecutive hours weekly rest; 8h workday.",
        details: ["加班 125% 起", "夜班加成", "雇佣大量 call center"],
        detailsEn: ["OT from 125%", "Night differential", "BPO sector patterns"] }
    ]
  }
];