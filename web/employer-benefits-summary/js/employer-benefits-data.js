function L(zh, en) {
  return { zh, en };
}

window.BENEFITS_DATA_VERSION = "2026-01-inline8";

window.EMPLOYER_BENEFITS_INLINE = true;

window.BENEFIT_MATRIX_GROUPS = [
  {
    id: "apac2026",
    title: L("亚太国家及地区", "APAC countries & regions"),
    codes: ["CN", "HK", "SG", "AU", "MY", "TH", "NZ", "IN"]
  }
];
window.BENEFIT_MATRIX_CODES = ["CN", "HK", "SG", "AU", "MY", "TH", "NZ", "IN"];
window.BENEFIT_MATRIX_FOCUS = ["CN", "AU", "SG", "MY"];

window.BENEFIT_CATEGORIES = [
  { id: "health_medical", label: L("医疗健康保险", "Medical & hospital cover") },
  { id: "health_wellness", label: L("身心健康项目", "Wellbeing & EAP programs") },
  { id: "income", label: L("收入保障", "Income protection") },
  { id: "retirement", label: L("退休储蓄", "Retirement savings") },
  { id: "leave", label: L("休假与平衡", "Time off & work-life") },
  { id: "travel", label: L("差旅保障", "Travel benefits") },
  { id: "perks", label: L("其他福利", "More benefits") }
];

window.POLICY_SPOTLIGHTS = [
  {
    code: "CN",
    title: L("中国大陆 · 带薪病假", "Mainland China · paid sick leave"),
    headline: L("12 天", "12 days"),
    sub: L("自 2026-01-01 起全员全薪", "Fully paid for all employees from 1 Jan 2026"),
    body: L(
      "2026 Benefit Summary：带薪病假由既往额度调整为<strong>每年最多 12 天全薪</strong>；年假首两年 15 天/年，之后每年 +1 天封顶 20 天。",
      "2026 Benefit Summary: sick leave now <strong>up to 12 fully paid days/year</strong>; annual leave 15 days (years 1–2), +1 day per year thereafter, cap 20."
    ),
    pills: [L("Ping An 医保", "Ping An medical"), L("Birth parent 20 周", "Birth parent 20 wks"), L("差旅 Chubb", "Travel Chubb")],
    href: ""
  },
  {
    code: "AU",
    title: L("澳大利亚 · 雇主出资医保", "Australia · employer-funded health"),
    headline: L("100%", "100%"),
    sub: L("GU Health 计划保费（至 AGR Tier 3）", "GU Health premiums to AGR Tier 3"),
    body: L(
      "公司承担选定 GU Health 计划 <strong>100% 保费</strong>（单身/家庭，至澳大利亚政府回扣 Tier 3）；可选自付升级至 90% 报销档位。",
      "Company pays <strong>100%</strong> of selected GU Health premiums (single/family, up to AGR Tier 3); optional employee-paid upgrade to 90% extras tier."
    ),
    pills: [L("年假 20 工作日", "20 working days AL"), L("Super 12%", "Super 12%"), L("Sabbatical 4 周", "4-week sabbatical")],
    href: ""
  },
  {
    code: "SG",
    title: L("新加坡 · 年假阶梯", "Singapore · annual leave ladder"),
    headline: L("25 天", "25 days"),
    sub: L("20 天起，每年 +1", "From 20 days, +1 per year"),
    body: L(
      "Paid time off 起 <strong>20 天</strong>，每满一年 +1，上限 <strong>25 天</strong>；病假 14 天（住院 60 天）。",
      "Paid time off from <strong>20 days</strong>, +1/year, cap <strong>25</strong>; sick 14 days (60 if hospitalised)."
    ),
    pills: [L("Singlife", "Singlife"), L("CPF", "CPF"), L("Major medical 80k", "Major medical 80k")],
    href: ""
  }
];

window.BENEFIT_MARKETS = [
  {
    code: "CN",
    flag: "🇨🇳",
    nameZh: "中国大陆",
    nameEn: "Mainland China",
    snapshot: L("2026 年 1 月 Benefit Summary", "January 2026 Benefit Summary"),
    sources: [
      { title: "eBay Benefits 官网", titleEn: "ebaybenefits.com", url: "https://ebaybenefits.com" },
      { title: "People Central（Hub）", titleEn: "People Central on the Hub", url: "https://ebaybenefits.com" }
    ],
    items: [
      {
        cat: "health_medical",
        shortSummary: L("平安：门诊/住院各 RMB 4 万、重疾 10 万、牙科 300", "Ping An: RMB 40k OP/IP, CI 100k, dental 300"),
        summary: L(
          "<strong>平安医疗</strong>（员工+子女）：门诊及住院各 <strong>100% 报销至 RMB 40,000/保单年</strong>（社保结算前提下）；可自选加保 50% 自付药/特需病房。生育 <strong>RMB 8,000</strong>；住院津贴 <strong>RMB 100/日</strong>最长 180 天。",
          "<strong>Ping An medical</strong> (employee + children): <strong>100% reimbursement up to RMB 40,000/policy year</strong> each for outpatient & inpatient (after social medical settlement); optional 50% top-up for self-paid meds/VIP wards. Maternity <strong>RMB 8,000</strong>; hospital income <strong>RMB 100/day</strong> up to 180 days."
        ),
        summaryEn:
          "<strong>Ping An medical</strong> (employee + children): <strong>100% reimbursement up to RMB 40,000/policy year</strong> each for outpatient & inpatient (after social medical settlement); optional 50% top-up for self-paid meds/VIP wards. Maternity <strong>RMB 8,000</strong>; hospital income <strong>RMB 100/day</strong> up to 180 days.",
        details: [
          "重大疾病：首次确诊给付 RMB 100,000（可自愿加保至 20 万）。",
          "年度体检：公司安排一次全面体检/保单年。",
          "流感/疫苗/核酸：员工每年最高 RMB 100；子女 50% 至 RMB 100。",
          "齿科 RMB 300/年；视力无商保，可走 mini benefits。",
          "雇主承担员工及合格子女保费 100%；子女出生至 22 岁，子女赔付为 inpatient/outpatient 各 50% 至 RMB 20,000/人/年。"
        ],
        detailsEn: [
          "Critical illness: RMB 100,000 lump sum on first diagnosis (voluntary top-up to 200k).",
          "Comprehensive annual health check once per policy year.",
          "Flu/vaccine/PCR: employee up to RMB 100/year; children 50% up to RMB 100.",
          "Dental RMB 300/year; vision via mini benefits (no vision insurance).",
          "Employer pays 100% premiums for employee & eligible children (birth–22); dependents at 50% reimbursement up to RMB 20,000/person/year."
        ],
        ref: { url: "https://ebaybenefits.com", title: L("平安 · Manage your health", "Ping An · Manage your health") }
      },
      {
        cat: "health_wellness",
        shortSummary: L("Lyra EAP · Teladoc · Grokker · Cleo · Thrive", "Lyra EAP · Teladoc · Grokker · Cleo · Thrive"),
        summary: L(
          "全球身心健康套件：<strong>Lyra/ICAS EAP</strong>（ebay.lyrahealth.com，用户 eBay / 密码 care）；<strong>Teladoc</strong> 二次诊疗意见（注册码 EBAYGLOBAL）；<strong>Grokker</strong>、<strong>Cleo</strong> 育儿（含 Teens）、<strong>Thrive Global</strong>（Slack/SSO 或码 EBAY）。",
          "Global wellbeing stack: <strong>Lyra/ICAS EAP</strong> (ebay.lyrahealth.com, user eBay / password care); <strong>Teladoc</strong> expert medical opinion (code EBAYGLOBAL); <strong>Grokker</strong>, <strong>Cleo</strong> parenting (incl. Teens), <strong>Thrive Global</strong> (Slack/SSO or code EBAY)."
        ),
        summaryEn:
          "Global wellbeing stack: <strong>Lyra/ICAS EAP</strong> (ebay.lyrahealth.com, user eBay / password care); <strong>Teladoc</strong> expert medical opinion (code EBAYGLOBAL); <strong>Grokker</strong>, <strong>Cleo</strong> parenting (incl. Teens), <strong>Thrive Global</strong> (Slack/SSO or code EBAY)."
      },
      {
        cat: "income",
        shortSummary: L("寿险/意外 36×月薪；重疾 10 万", "Life/AD 36× monthly salary; CI 100k"),
        summary: L(
          "<strong>寿险</strong>及<strong>意外身故</strong>：36 倍月薪或 RMB 200,000 取高（可自愿加保至 48 倍）。意外伤残按法定伤残等级 10%–100% 给付。",
          "<strong>Life</strong> and <strong>accidental death</strong>: 36× monthly salary or RMB 200,000 whichever higher (voluntary top-up to 48×). Accidental disability per statutory grading 10%–100% of sum insured."
        ),
        summaryEn:
          "<strong>Life</strong> and <strong>accidental death</strong>: 36× monthly salary or RMB 200,000 whichever higher (voluntary top-up to 48×). Accidental disability per statutory grading 10%–100% of sum insured.",
        details: [
          "重大疾病：33 种重疾首次给付 RMB 100,000；3 种轻症 RMB 30,000。",
          "公司承担员工寿险及意外险保费 100%。"
        ],
        detailsEn: [
          "Critical illness: RMB 100,000 (33 major); RMB 30,000 (3 mild).",
          "Employer pays 100% of employee life & accident premiums."
        ]
      },
      {
        cat: "retirement",
        shortSummary: L("社保养老 雇主 16% / 员工 8%", "Pension: employer 16% / employee 8%"),
        summary: L(
          "按属地社保：<strong>雇主 16%</strong>、<strong>员工 8%</strong> 缴费基数月薪（至社保封顶）；待遇依缴费年限与地方平均工资。服务商 <strong>TMF</strong>。",
          "Local social security pension: <strong>employer 16%</strong>, <strong>employee 8%</strong> of contributory salary (capped); benefits per service years & local average wage. Provider <strong>TMF</strong>."
        ),
        summaryEn:
          "Local social security pension: <strong>employer 16%</strong>, <strong>employee 8%</strong> of contributory salary (capped); benefits per service years & local average wage. Provider <strong>TMF</strong>."
      },
      {
        cat: "leave",
        shortSummary: L("年假 15→20 天；病假 12 天全薪；育婴 20+12 周", "AL 15→20d; 12 paid sick days; parental 20+12 wks"),
        summary: L(
          "<strong>年假</strong>：入职首两年 15 天/年，之后每满一年 +1 天，最高 20 天。<strong> Sabbatical</strong>：满 5 年最多 4 周。<strong>带薪病假</strong>：自 2026-01-01 起全年最多 <strong>12 天全薪</strong>。",
          "<strong>Annual leave</strong>: 15 days/year years 1–2, +1 day per additional year, max 20. <strong>Sabbatical</strong>: up to 4 weeks after 5 years. <strong>Paid sick leave</strong>: from <strong>1 Jan 2026</strong>, up to <strong>12 fully paid days</strong>/year."
        ),
        summaryEn:
          "<strong>Annual leave</strong>: 15 days/year years 1–2, +1 day per additional year, max 20. <strong>Sabbatical</strong>: up to 4 weeks after 5 years. <strong>Paid sick leave</strong>: from <strong>1 Jan 2026</strong>, up to <strong>12 fully paid days</strong>/year.",
        details: [
          "Birth parent：公司计划 20 周 100% 基本薪（与法定产假并行，法定更高则不减少）。上海/深圳法定产假天数及难产/多胎加成见 Summary。",
          "Non-birth parent：84 日历天（12 周）带薪。",
          "育儿假：上海 5 天/周期至子女 3 岁；深圳 10 天/周期（按城市适用）。",
          "丧假：配偶/父母/子女等最多 10 天；祖父母等 5 天；叔伯等 3 天。",
          "2026 法定连休：元旦、春节、清明、劳动、端午、中秋、国庆等（见 Summary 日历）。"
        ],
        detailsEn: [
          "Birth parent: 20 weeks at 100% base pay (statutory higher not reduced). Shanghai/Shenzhen statutory maternity rules per Summary.",
          "Non-birth parent: 84 calendar days (12 weeks) paid.",
          "Childcare leave: Shanghai 5 days/cycle until child turns 3; Shenzhen 10 (city-specific).",
          "Bereavement: up to 10/5/3 days by relationship (per global eBay policy).",
          "2026 public holiday bridge calendar in Benefit Summary."
        ]
      },
      {
        cat: "travel",
        shortSummary: L("Chubb 境外医疗 + BTA 5×年薪", "Chubb OCM + BTA 5× base salary"),
        summary: L(
          "全球差旅：<strong>GSOC</strong> +1 408-376-7777；<strong>境外紧急医疗（Chubb）</strong> 经 Global Guardian 协调直付。",
          "Global travelers: <strong>GSOC</strong> +1 408-376-7777; <strong>out-of-country medical (Chubb)</strong> via Global Guardian coordination."
        ),
        summaryEn:
          "Global travelers: <strong>GSOC</strong> +1 408-376-7777; <strong>out-of-country medical (Chubb)</strong> via Global Guardian coordination.",
        details: [
          "保单号 ADD N01172293；Cigna CoC 签证证明：coc.ajg.com，码 newebay。",
          "商务差旅意外（BTA）：意外身故保额 5 倍年薪，上限 USD 1,000,000。",
          "财物：遗失/损坏个人物品 USD 1,000/件，单次行程上限 USD 2,500。",
          "雇主承担差旅相关保费 100%；商务差旅母乳寄送（Milk Stork）。"
        ],
        detailsEn: [
          "Policy ADD N01172293; visa CoC: coc.ajg.com, code newebay.",
          "BTA: AD&D 5× annual base salary, max USD 1,000,000.",
          "Personal property: USD 1,000/item, USD 2,500/trip.",
          "Employer pays 100% travel premiums; Milk Stork for business travel."
        ]
      },
      {
        cat: "perks",
        shortSummary: L("Mini 3000 · 教育 6000 · 餐补 50/日", "Mini 3k · edu 6k · meal RMB 50/day"),
        summary: L(
          "<strong>Mini benefits</strong> RMB 3,000/年（视力、齿科、健身等）；<strong>教育资助</strong> RMB 6,000/年；<strong>餐补</strong> RMB 50/工作日（各类无薪假除外）。",
          "<strong>Mini benefits</strong> RMB 3,000/year (vision, dental, fitness); <strong>education assistance</strong> RMB 6,000/year; <strong>meal allowance</strong> RMB 50/working day (excl. unpaid leave)."
        ),
        summaryEn:
          "<strong>Mini benefits</strong> RMB 3,000/year (vision, dental, fitness); <strong>education assistance</strong> RMB 6,000/year; <strong>meal allowance</strong> RMB 50/working day (excl. unpaid leave).",
        details: [
          "加班餐/交通：满 3 小时加班餐 RMB 40，出租车最高 RMB 45。",
          "节庆礼金：生日券、新婚/新生儿 RMB 500 等。",
          "兼职员工仍享受全部福利。"
        ],
        detailsEn: [
          "OT meal RMB 40 (3h+); taxi up to RMB 45.",
          "Gifts: birthday voucher, wedding/newborn RMB 500, etc.",
          "Part-time employees remain eligible for full benefits."
        ]
      }
    ]
  },
  {
    code: "AU",
    flag: "🇦🇺",
    nameZh: "澳大利亚",
    nameEn: "Australia",
    snapshot: L("2026 年 1 月 Benefit Summary", "January 2026 Benefit Summary"),
    sources: [
      { title: "eBay Benefits 官网", titleEn: "ebaybenefits.com", url: "https://ebaybenefits.com" },
      { title: "People Central（Hub）", titleEn: "People Central on the Hub", url: "https://ebaybenefits.com" }
    ],
    items: [
      {
        cat: "health_medical",
        shortSummary: L("GU Health：雇主付 100% 保费", "GU Health: employer 100% premium"),
        summary: L(
          "<strong>GU Health</strong>：住院及私立合作医院费用 100%；MBS 医疗费用 25%（Medicare 75%）；年费超额 <strong>AUD 250/人、500/家庭</strong>由雇主承担。",
          "<strong>GU Health</strong>: 100% hospital charges; 25% of MBS medical fees (Medicare 75%); annual excess <strong>AUD 250/person, 500/family</strong> employer-funded."
        ),
        summaryEn:
          "<strong>GU Health</strong>: 100% hospital charges; 25% of MBS medical fees (Medicare 75%); annual excess <strong>AUD 250/person, 500/family</strong> employer-funded.",
        details: [
          "Extras：理疗等 60% 至年度限额（如理疗+运动+针灸 AUD 525）；牙科合并限额 AUD 1,200/人；视力 AUD 180。",
          "雇主承担选定计划 100% 保费至 AGR Tier 3；员工可自付升级至 90% 报销档位。"
        ],
        detailsEn: [
          "Extras: 60% reimbursement to annual limits (e.g. physio bundle AUD 525); dental AUD 1,200/person; vision AUD 180.",
          "Employer pays 100% of selected plan to AGR Tier 3; employee may upgrade to 90% tier at own cost."
        ],
        ref: { url: "https://ebaybenefits.com", title: L("GU Health", "GU Health") }
      },
      {
        cat: "health_wellness",
        shortSummary: L("Lyra · Teladoc · Grokker · Cleo · Thrive", "Lyra · Teladoc · Grokker · Cleo · Thrive"),
        summary: L(
          "与中国大陆相同的全球 EAP / Teladoc / Grokker / Cleo（hicleo.com/ebay）/ Thrive 套件；Cleo Teens 覆盖 13–18 岁。",
          "Same global Lyra EAP, Teladoc, Grokker, Cleo (hicleo.com/ebay), Thrive stack as China; Cleo Teens ages 13–18."
        ),
        summaryEn: "Same global Lyra EAP, Teladoc, Grokker, Cleo (hicleo.com/ebay), Thrive stack as China; Cleo Teens ages 13–18."
      },
      {
        cat: "income",
        shortSummary: L("寿险/TPD 经 smartMonday；伤残 75%", "Life/TPD via smartMonday; 75% salary continuance"),
        summary: L(
          "参与公司 <strong>smartMonday Super</strong> 者：寿险/TPD 为 max(20%×年薪×未来服务至 65 岁, 年龄最低保额)。",
          "On company <strong>smartMonday Super</strong>: life/TPD = max(20%× annual salary×future service to 65, age-based minimum)."
        ),
        summaryEn:
          "On company <strong>smartMonday Super</strong>: life/TPD = max(20%× annual salary×future service to 65, age-based minimum).",
        details: [
          "薪资继续（伤残）：最高 75% 伤残前收入，月 cap AUD 30,000，等待期 60 天，雇主付保费 100%。",
          "短期/长期伤残按法定要求提供。"
        ],
        detailsEn: [
          "Salary continuance: up to 75% pre-disability income, max AUD 30,000/month, 60-day wait, employer-paid.",
          "Short-term and long-term disability per statutory requirements."
        ]
      },
      {
        cat: "retirement",
        shortSummary: L("Super 雇主 12%（2025-07 起）", "Employer Super 12% from Jul 2025"),
        summary: L(
          "默认 <strong>smartMonday Super</strong>：退休为账户余额一次性领取；<strong>雇主 Super 12%</strong>（自 2025-07-01）。如选择其他基金，雇主按同等比例供款。",
          "Default <strong>smartMonday Super</strong>: retirement via account balance; <strong>employer Super 12%</strong> from <strong>1 Jul 2025</strong>. Same employer contribution if another fund chosen."
        ),
        summaryEn:
          "Default <strong>smartMonday Super</strong>: retirement via account balance; <strong>employer Super 12%</strong> from <strong>1 Jul 2025</strong>. Same employer contribution if another fund chosen.",
        details: [
          "寿险/TPD 与 Super 计划绑定（见收入保障）。",
          "32+ 投资选项（预混/行业基金）。"
        ],
        detailsEn: [
          "Life/TPD linked to Super plan (see income protection).",
          "32+ investment options (pre-mixed and sector)."
        ]
      },
      {
        cat: "leave",
        shortSummary: L("年假 20 工作日；病假 10 天；育婴 52+12 周", "20 working days AL; 10 sick; parental 52+12 wks"),
        summary: L(
          "<strong>年假 20 个工作日</strong>；<strong>病假/护理假 10 天/年</strong>；<strong>Sabbatical</strong> 满 5 年最多 4 周。",
          "<strong>20 working days</strong> annual leave; <strong>10 days</strong> personal/sick/carer's per year; <strong>sabbatical</strong> up to 4 weeks after 5 years."
        ),
        summaryEn:
          "<strong>20 working days</strong> annual leave; <strong>10 days</strong> personal/sick/carer's per year; <strong>sabbatical</strong> up to 4 weeks after 5 years.",
        details: [
          "Primary carer：52 周额度含 20 周 100% 基本薪；Secondary carer 12 周 100% 基本薪（须符合资格）。",
          "丧假/同情假：按直系亲属层级 2–10 天（同全球政策）。",
          "2026 新南威尔士州公休 11 天表（Summary）；周末遇假补休下个工作日。"
        ],
        detailsEn: [
          "Primary carer: 52 weeks incl. 20 weeks at 100% base pay; secondary carer 12 weeks at 100% (eligibility applies).",
          "Bereavement/compassionate leave: 2–10 days by relationship.",
          "2026 NSW public holiday table in Summary; weekend holidays observed next working day."
        ]
      },
      {
        cat: "travel",
        shortSummary: L("Chubb 境外医疗 + BTA", "Chubb OCM + BTA"),
        summary: L(
          "与中国大陆一致的 GSOC / Global Guardian / Chubb 境外紧急医疗安排；签证 CoC 同上。",
          "Same GSOC / Global Guardian / Chubb OCM arrangement as China; visa CoC as above."
        ),
        summaryEn: "Same GSOC / Global Guardian / Chubb OCM arrangement as China; visa CoC as above.",
        details: [
          "BTA：5×基本年薪意外身故，上限 USD 1,000,000。",
          "财物：USD 500/件，单次事件上限 USD 1,000（Chubb）。",
          "雇主承担差旅保费 100%；Milk Stork 商务差旅母乳寄送。"
        ],
        detailsEn: [
          "BTA: AD&D 5× annual base salary, max USD 1,000,000.",
          "Personal property: USD 500/item, USD 1,000/incident (Chubb).",
          "Employer pays 100%; Milk Stork for business travel."
        ]
      },
      {
        cat: "perks",
        shortSummary: L("Care.com · 教育 50% AUD 5k · ClassPass", "Care.com · edu 50% AUD 5k · ClassPass"),
        summary: L(
          "<strong>Care.com</strong> 会员由公司承担；<strong>教育资助</strong> 认可澳洲院校课程费 50%，最高 <strong>AUD 5,000/年</strong>。",
          "<strong>Care.com</strong> membership paid by company; <strong>education assistance</strong> 50% of approved AU course fees, up to <strong>AUD 5,000/year</strong>."
        ),
        summaryEn:
          "<strong>Care.com</strong> membership paid by company; <strong>education assistance</strong> 50% of approved AU course fees, up to <strong>AUD 5,000/year</strong>.",
        details: [
          "ClassPass：公司补贴 USD 50/月，员工自付 USD 40（50 Credit Plan）；可自购加点。",
          "晚班经理酌情出租车券。",
          "兼职员工仍享受全部福利。"
        ],
        detailsEn: [
          "ClassPass: company subsidizes USD 50/mo, employee USD 40 (50 Credit Plan); optional top-up.",
          "Cab vouchers at managerial discretion for late work.",
          "Part-time employees remain eligible for full benefits."
        ]
      }
    ]
  },
  {
    code: "HK", flag: "🇭🇰", nameZh: "香港", nameEn: "Hong Kong",
    snapshot: L("2026 年 1 月 Benefit Summary", "January 2026 Benefit Summary"),
    sources: [
      { title: "eBay Benefits 官网", titleEn: "ebaybenefits.com", url: "https://ebaybenefits.com" },
      { title: "People Central（Hub）", titleEn: "People Central on the Hub", url: "https://ebaybenefits.com" }
    ],
    items: [
      {
        cat: "health_medical",
        shortSummary: L("Sun Life：门诊/住院限额", "Sun Life OP/IP limits"),
        summary: L("<strong>Sun Life</strong>：全科 HKD 500/次（30次/年）；住院手术至 HKD 116,000；Major medical 自付 HKD 1,000 后 80% 至 HKD 200,000/次；牙科 HKD 4,000；正常/剖宫产分娩 HKD 20k/30k。雇主 100% 员工及家属保费。", "<strong>Sun Life</strong>: GP HKD 500/visit (30/yr); inpatient surgery to HKD 116k; major medical HKD 1k deductible then 80% to HKD 200k; dental HKD 4k; delivery HKD 20k/30k. Employer 100% premiums."),
        summaryEn: "<strong>Sun Life</strong>: GP HKD 500/visit (30/yr); inpatient surgery to HKD 116k; major medical HKD 1k deductible then 80% to HKD 200k; dental HKD 4k; delivery HKD 20k/30k. Employer 100% premiums.",
        ref: { url: "https://ebaybenefits.com", title: L("Sun Life HK", "Sun Life HK") }
      },
      {
        cat: "health_wellness",
        shortSummary: L("Lyra · Teladoc · Grokker · Cleo · Thrive", "Lyra · Teladoc · Grokker · Cleo · Thrive"),
        summary: L("全球身心健康：<strong>Lyra/ICAS EAP</strong>、<strong>Teladoc</strong>（EBAYGLOBAL）、<strong>Grokker</strong>、<strong>Cleo</strong>、<strong>Thrive</strong>。", "Global stack: <strong>Lyra/ICAS EAP</strong>, <strong>Teladoc</strong> (EBAYGLOBAL), <strong>Grokker</strong>, <strong>Cleo</strong>, <strong>Thrive</strong>."),
        summaryEn: "Global stack: <strong>Lyra/ICAS EAP</strong>, <strong>Teladoc</strong> (EBAYGLOBAL), <strong>Grokker</strong>, <strong>Cleo</strong>, <strong>Thrive</strong>.",
      },
      {
        cat: "income",
        shortSummary: L("寿险/意外 36×月薪", "Life/AD 36× monthly"),
        summary: L("寿险、意外身故/伤残均为 <strong>36 倍基本月薪</strong>；TPD 36 倍月薪；短期伤残按法定。Sun Life，雇主 100%。", "Life, accidental death/disability <strong>36× basic monthly</strong>; TPD 36×; short-term disability statutory. Sun Life, employer 100%."),
        summaryEn: "Life, accidental death/disability <strong>36× basic monthly</strong>; TPD 36×; short-term disability statutory. Sun Life, employer 100%.",
      },
      {
        cat: "retirement",
        shortSummary: L("MPF 5%+5%", "MPF 5%+5%"),
        summary: L("<strong>MPF</strong> 雇主/雇员各 <strong>5%</strong> 有关入息（上限 HKD 30,000/月）；退休提取账户结余。", "<strong>MPF</strong>: employer/employee <strong>5%</strong> each (cap HKD 30,000/mo); lump sum at retirement."),
        summaryEn: "<strong>MPF</strong>: employer/employee <strong>5%</strong> each (cap HKD 30,000/mo); lump sum at retirement.",
      },
      {
        cat: "leave",
        shortSummary: L("年假 15→20；病假累计 120", "AL 15→20; sick bank 120"),
        summary: L("年假 15 天起每年 +1 至 20 天；带薪病假 2 天/月（首年）→4 天/月，累计至 120 天；Sabbatical 4 周；Birth/Non-birth 20+12 周 100% 基本薪；婚假 4 工作日。", "AL from 15, +1/year to 20; paid sick 2/mo then 4/mo, cap 120; sabbatical 4 wks; birth/non-birth 20+12 wks at 100%; 4 wedding days."),
        summaryEn: "AL from 15, +1/year to 20; paid sick 2/mo then 4/mo, cap 120; sabbatical 4 wks; birth/non-birth 20+12 wks at 100%; 4 wedding days.",
      },
      {
        cat: "travel",
        shortSummary: L("Chubb + BTA", "Chubb + BTA"),
        summary: L("全球 <strong>GSOC</strong> +1 408-376-7777；<strong>Chubb 境外医疗</strong>（ADD N01172293）经 Global Guardian；CoC：<strong>coc.ajg.com</strong>（newebay）。", "Global <strong>GSOC</strong>; <strong>Chubb OCM</strong> (ADD N01172293) via Global Guardian; CoC <strong>coc.ajg.com</strong> (newebay)."),
        summaryEn: "Global <strong>GSOC</strong>; <strong>Chubb OCM</strong> (ADD N01172293) via Global Guardian; CoC <strong>coc.ajg.com</strong> (newebay).",
        details: ["BTA：5×基本年薪，上限 USD 1,000,000（财物限额见各市场 Summary）。", "雇主承担差旅保费 100%；Milk Stork 商务差旅。"],
        detailsEn: ["BTA: 5× base salary, max USD 1,000,000 (property limits per market Summary).", "Employer pays 100%; Milk Stork on business travel."],
      },
      {
        cat: "perks",
        shortSummary: L("More benefits（Hub）", "More benefits (Hub)"),
        summary: L("其余福利（如本地特色补贴）见 Summary 与 People Central；兼职员工享全部福利。", "Other local perks in Summary / People Central; part-time employees retain full benefits."),
        summaryEn: "Other local perks in Summary / People Central; part-time employees retain full benefits.",
      }
    ]
  },
  {
    code: "SG", flag: "🇸🇬", nameZh: "新加坡", nameEn: "Singapore",
    snapshot: L("2026 年 1 月 Benefit Summary", "January 2026 Benefit Summary"),
    sources: [
      { title: "eBay Benefits 官网", titleEn: "ebaybenefits.com", url: "https://ebaybenefits.com" },
      { title: "People Central（Hub）", titleEn: "People Central on the Hub", url: "https://ebaybenefits.com" }
    ],
    items: [
      {
        cat: "health_medical",
        shortSummary: L("Singlife 住院；AIA 牙科", "Singlife IP; AIA dental"),
        summary: L("<strong>Singlife</strong>：Major medical 上限 SGD 80,000/年；住院精神科 SGD 5,000；Panel GP 100%；非 Panel 诊费至 SGD 50。牙科 <strong>AIA</strong> Panel 基础预防 100%。雇主 100% 员工及直系家属保费。", "<strong>Singlife</strong>: major medical cap SGD 80k/yr; psychiatry SGD 5k; panel GP 100%; non-panel to SGD 50. <strong>AIA</strong> dental panel basic/preventive 100%. Employer 100% for employee & dependents."),
        summaryEn: "<strong>Singlife</strong>: major medical cap SGD 80k/yr; psychiatry SGD 5k; panel GP 100%; non-panel to SGD 50. <strong>AIA</strong> dental panel basic/preventive 100%. Employer 100% for employee & dependents.",
        ref: { url: "https://ebaybenefits.com", title: L("Singlife / AIA", "Singlife / AIA") }
      },
      {
        cat: "health_wellness",
        shortSummary: L("Lyra · Teladoc · Grokker · Cleo · Thrive", "Lyra · Teladoc · Grokker · Cleo · Thrive"),
        summary: L("全球身心健康：<strong>Lyra/ICAS EAP</strong>、<strong>Teladoc</strong>（EBAYGLOBAL）、<strong>Grokker</strong>、<strong>Cleo</strong>、<strong>Thrive</strong>。", "Global stack: <strong>Lyra/ICAS EAP</strong>, <strong>Teladoc</strong> (EBAYGLOBAL), <strong>Grokker</strong>, <strong>Cleo</strong>, <strong>Thrive</strong>."),
        summaryEn: "Global stack: <strong>Lyra/ICAS EAP</strong>, <strong>Teladoc</strong> (EBAYGLOBAL), <strong>Grokker</strong>, <strong>Cleo</strong>, <strong>Thrive</strong>.",
      },
      {
        cat: "income",
        shortSummary: L("寿险 36×月薪；重疾 5 万", "Life 36×; CI SGD 50k"),
        summary: L("寿险/TPD <strong>36×月基本薪</strong>（最高 SGD 3,000,000）；重疾 37 种给付 <strong>SGD 50,000</strong>；意外身故 36×（上限 SGD 2M）。Singlife/Chubb，雇主 100%。", "Life/TPD <strong>36× monthly basic</strong> (cap SGD 3M); dread disease <strong>SGD 50k</strong>; accidental death 36× (cap SGD 2M). Singlife/Chubb, employer 100%."),
        summaryEn: "Life/TPD <strong>36× monthly basic</strong> (cap SGD 3M); dread disease <strong>SGD 50k</strong>; accidental death 36× (cap SGD 2M). Singlife/Chubb, employer 100%.",
      },
      {
        cat: "retirement",
        shortSummary: L("CPF 法定分龄费率", "Statutory CPF bands"),
        summary: L("法定 <strong>CPF</strong>：雇主 7.5%–17%、雇员 5%–20%（分龄）；普通工资上限 SGD 8,000/月。非公民可选 International Retirement Plan。", "Statutory <strong>CPF</strong>: employer 7.5%–17%, employee 5%–20% by age; ordinary wage cap SGD 8,000/mo. Non-SC may opt into International Retirement Plan."),
        summaryEn: "Statutory <strong>CPF</strong>: employer 7.5%–17%, employee 5%–20% by age; ordinary wage cap SGD 8,000/mo. Non-SC may opt into International Retirement Plan.",
      },
      {
        cat: "leave",
        shortSummary: L("年假 20→25 天；病假 14 天", "AL 20→25d; sick 14d"),
        summary: L("年假起 <strong>20 天</strong>，每年 +1 至 <strong>25 天</strong>；病假 14 天全薪（住院可达 60 天）；Sabbatical 4 周；Birth/Non-birth 20+12 周 100%；含育儿假/婚假 4 工作日等（见 Summary）。", "AL from <strong>20 days</strong>, +1/year to <strong>25</strong>; sick 14 days paid (60 if hospitalised); sabbatical 4 wks; birth/non-birth 20+12 at 100%; childcare/marriage leave per Summary."),
        summaryEn: "AL from <strong>20 days</strong>, +1/year to <strong>25</strong>; sick 14 days paid (60 if hospitalised); sabbatical 4 wks; birth/non-birth 20+12 at 100%; childcare/marriage leave per Summary.",
      },
      {
        cat: "travel",
        shortSummary: L("Chubb + BTA", "Chubb + BTA"),
        summary: L("全球 <strong>GSOC</strong> +1 408-376-7777；<strong>Chubb 境外医疗</strong>（ADD N01172293）经 Global Guardian；CoC：<strong>coc.ajg.com</strong>（newebay）。", "Global <strong>GSOC</strong>; <strong>Chubb OCM</strong> (ADD N01172293) via Global Guardian; CoC <strong>coc.ajg.com</strong> (newebay)."),
        summaryEn: "Global <strong>GSOC</strong>; <strong>Chubb OCM</strong> (ADD N01172293) via Global Guardian; CoC <strong>coc.ajg.com</strong> (newebay).",
        details: ["BTA：5×基本年薪，上限 USD 1,000,000（财物限额见各市场 Summary）。", "雇主承担差旅保费 100%；Milk Stork 商务差旅。"],
        detailsEn: ["BTA: 5× base salary, max USD 1,000,000 (property limits per market Summary).", "Employer pays 100%; Milk Stork on business travel."],
      },
      {
        cat: "perks",
        shortSummary: L("More benefits", "More benefits"),
        summary: L("教育资助、ClassPass 等见 Summary「More benefits」与 People Central。", "Education assistance, ClassPass, etc. in Summary and People Central."),
        summaryEn: "Education assistance, ClassPass, etc. in Summary and People Central.",
      }
    ]
  },
  {
    code: "MY", flag: "🇲🇾", nameZh: "马来西亚", nameEn: "Malaysia",
    snapshot: L("2026 年 1 月 Benefit Summary", "January 2026 Benefit Summary"),
    sources: [
      { title: "eBay Benefits 官网", titleEn: "ebaybenefits.com", url: "https://ebaybenefits.com" },
      { title: "People Central（Hub）", titleEn: "People Central on the Hub", url: "https://ebaybenefits.com" }
    ],
    items: [
      {
        cat: "health_medical",
        shortSummary: L("AIA 住院 RM 60k/年", "AIA inpatient RM 60k/yr"),
        summary: L("<strong>AIA</strong>：政府医院年度限额 <strong>RM 60,000</strong>（病房 RM 250/日、ICU RM 500/日）；门诊意外 RM 3,500/次；生育年度限额 RM 3,000。雇主 100% 员工及家属保费。", "<strong>AIA</strong>: govt hospital annual limit <strong>RM 60,000</strong> (room RM 250/day, ICU RM 500); emergency OP RM 3,500; maternity annual RM 3,000. Employer 100% premiums."),
        summaryEn: "<strong>AIA</strong>: govt hospital annual limit <strong>RM 60,000</strong> (room RM 250/day, ICU RM 500); emergency OP RM 3,500; maternity annual RM 3,000. Employer 100% premiums.",
        ref: { url: "https://ebaybenefits.com", title: L("AIA Malaysia", "AIA Malaysia") }
      },
      {
        cat: "health_wellness",
        shortSummary: L("Lyra · Teladoc · Grokker · Cleo · Thrive", "Lyra · Teladoc · Grokker · Cleo · Thrive"),
        summary: L("全球身心健康：<strong>Lyra/ICAS EAP</strong>、<strong>Teladoc</strong>（EBAYGLOBAL）、<strong>Grokker</strong>、<strong>Cleo</strong>、<strong>Thrive</strong>。", "Global stack: <strong>Lyra/ICAS EAP</strong>, <strong>Teladoc</strong> (EBAYGLOBAL), <strong>Grokker</strong>, <strong>Cleo</strong>, <strong>Thrive</strong>."),
        summaryEn: "Global stack: <strong>Lyra/ICAS EAP</strong>, <strong>Teladoc</strong> (EBAYGLOBAL), <strong>Grokker</strong>, <strong>Cleo</strong>, <strong>Thrive</strong>.",
      },
      {
        cat: "income",
        shortSummary: L("寿险 24×；意外 36×月薪", "Life 24×; AD 36× monthly"),
        summary: L("寿险 <strong>24 倍</strong>基本月薪；意外身故/伤残 <strong>36 倍</strong>。Utmost，雇主 100%。", "Life <strong>24×</strong> basic monthly; accidental death <strong>36×</strong>. Utmost, employer 100%."),
        summaryEn: "Life <strong>24×</strong> basic monthly; accidental death <strong>36×</strong>. Utmost, employer 100%.",
      },
      {
        cat: "retirement",
        shortSummary: L("EPF 法定；外籍可选 IRP", "Statutory EPF; IRP option"),
        summary: L("马来西亚公民按法定 <strong>EPF</strong>；非公民且未自愿参加 EPF 者可登记 <strong>International Retirement Plan</strong>。", "Malaysian citizens: statutory <strong>EPF</strong>; non-citizens not in voluntary EPF may register <strong>International Retirement Plan</strong>."),
        summaryEn: "Malaysian citizens: statutory <strong>EPF</strong>; non-citizens not in voluntary EPF may register <strong>International Retirement Plan</strong>.",
      },
      {
        cat: "leave",
        shortSummary: L("年假 15→20 天", "AL 15→20 days"),
        summary: L("年假起 15 天/年，每年 +1 至 20 天；Sabbatical 4 周；Birth/Non-birth 20+12 周 100% 基本薪；病假按雇佣法令阶梯（见 Summary）。", "AL from 15 days, +1/year to 20; sabbatical 4 wks; birth/non-birth 20+12 at 100%; sick leave per Employment Act tiers in Summary."),
        summaryEn: "AL from 15 days, +1/year to 20; sabbatical 4 wks; birth/non-birth 20+12 at 100%; sick leave per Employment Act tiers in Summary.",
      },
      {
        cat: "travel",
        shortSummary: L("Chubb + BTA", "Chubb + BTA"),
        summary: L("全球 <strong>GSOC</strong> +1 408-376-7777；<strong>Chubb 境外医疗</strong>（ADD N01172293）经 Global Guardian；CoC：<strong>coc.ajg.com</strong>（newebay）。", "Global <strong>GSOC</strong>; <strong>Chubb OCM</strong> (ADD N01172293) via Global Guardian; CoC <strong>coc.ajg.com</strong> (newebay)."),
        summaryEn: "Global <strong>GSOC</strong>; <strong>Chubb OCM</strong> (ADD N01172293) via Global Guardian; CoC <strong>coc.ajg.com</strong> (newebay).",
        details: ["BTA：5×基本年薪，上限 USD 1,000,000（财物限额见各市场 Summary）。", "雇主承担差旅保费 100%；Milk Stork 商务差旅。"],
        detailsEn: ["BTA: 5× base salary, max USD 1,000,000 (property limits per market Summary).", "Employer pays 100%; Milk Stork on business travel."],
      },
      {
        cat: "perks",
        shortSummary: L("More benefits", "More benefits"),
        summary: L("本地津贴与项目见 Summary 第 16 页及 People Central。", "Local allowances in Summary p.16 and People Central."),
        summaryEn: "Local allowances in Summary p.16 and People Central.",
      }
    ]
  },
  {
    code: "TH", flag: "🇹🇭", nameZh: "泰国", nameEn: "Thailand",
    snapshot: L("2026 年 1 月 Benefit Summary", "January 2026 Benefit Summary"),
    sources: [
      { title: "eBay Benefits 官网", titleEn: "ebaybenefits.com", url: "https://ebaybenefits.com" },
      { title: "People Central（Hub）", titleEn: "People Central on the Hub", url: "https://ebaybenefits.com" }
    ],
    items: [
      {
        cat: "health_medical",
        shortSummary: L("Generali：门诊/住院限额", "Generali OP/IP caps"),
        summary: L("<strong>Generali</strong>：门诊 <strong>THB 2,000/次</strong>（30次/年）；住院综合费用 THB 40,000/次；手术 THB 50,000；牙科 THB 5,000/年（报销）；分娩 THB 30k/60k。雇主 100% 员工及家属保费。", "<strong>Generali</strong>: consultation <strong>THB 2,000/visit</strong> (30/yr); hospital bundle THB 40k/disability; surgery THB 50k; dental THB 5k/yr reimb.; maternity THB 30k/60k. Employer 100%."),
        summaryEn: "<strong>Generali</strong>: consultation <strong>THB 2,000/visit</strong> (30/yr); hospital bundle THB 40k/disability; surgery THB 50k; dental THB 5k/yr reimb.; maternity THB 30k/60k. Employer 100%.",
        ref: { url: "https://ebaybenefits.com", title: L("Generali Thailand", "Generali Thailand") }
      },
      {
        cat: "health_wellness",
        shortSummary: L("Lyra · Teladoc · Grokker · Cleo · Thrive", "Lyra · Teladoc · Grokker · Cleo · Thrive"),
        summary: L("全球身心健康：<strong>Lyra/ICAS EAP</strong>、<strong>Teladoc</strong>（EBAYGLOBAL）、<strong>Grokker</strong>、<strong>Cleo</strong>、<strong>Thrive</strong>。", "Global stack: <strong>Lyra/ICAS EAP</strong>, <strong>Teladoc</strong> (EBAYGLOBAL), <strong>Grokker</strong>, <strong>Cleo</strong>, <strong>Thrive</strong>."),
        summaryEn: "Global stack: <strong>Lyra/ICAS EAP</strong>, <strong>Teladoc</strong> (EBAYGLOBAL), <strong>Grokker</strong>, <strong>Cleo</strong>, <strong>Thrive</strong>.",
      },
      {
        cat: "income",
        shortSummary: L("寿险 24×月薪；意外 24×", "Life 24× monthly; AD 24×"),
        summary: L("寿险及意外 <strong>24 倍月薪</strong>（上限 THB 10,000,000）。雇主 100%。", "Life & accidental death <strong>24× monthly salary</strong> (cap THB 10M). Employer 100%."),
        summaryEn: "Life & accidental death <strong>24× monthly salary</strong> (cap THB 10M). Employer 100%.",
      },
      {
        cat: "retirement",
        shortSummary: L("国际退休金 雇主 7%", "Intl plan employer 7%"),
        summary: L("<strong>International Retirement Plan</strong>：雇主 <strong>7% 总薪</strong>；员工自愿 2%/4%/6%；可额外自愿供款。", "<strong>International Retirement Plan</strong>: employer <strong>7% gross</strong>; employee voluntary 2%/4%/6%; AVCs allowed."),
        summaryEn: "<strong>International Retirement Plan</strong>: employer <strong>7% gross</strong>; employee voluntary 2%/4%/6%; AVCs allowed.",
      },
      {
        cat: "leave",
        shortSummary: L("年假 15→20 天", "AL 15→20 days"),
        summary: L("年假首年 <strong>15 天</strong>，每年 +1（同 Leave Monitor 结构）；Sabbatical 4 周；Birth/Non-birth 20+12 周 100% 基本薪（见 Summary）。", "AL <strong>15 days</strong> year 1, +1 each year; sabbatical 4 wks; birth/non-birth 20+12 at 100% per Summary."),
        summaryEn: "AL <strong>15 days</strong> year 1, +1 each year; sabbatical 4 wks; birth/non-birth 20+12 at 100% per Summary.",
      },
      {
        cat: "travel",
        shortSummary: L("Chubb + BTA", "Chubb + BTA"),
        summary: L("全球 <strong>GSOC</strong> +1 408-376-7777；<strong>Chubb 境外医疗</strong>（ADD N01172293）经 Global Guardian；CoC：<strong>coc.ajg.com</strong>（newebay）。", "Global <strong>GSOC</strong>; <strong>Chubb OCM</strong> (ADD N01172293) via Global Guardian; CoC <strong>coc.ajg.com</strong> (newebay)."),
        summaryEn: "Global <strong>GSOC</strong>; <strong>Chubb OCM</strong> (ADD N01172293) via Global Guardian; CoC <strong>coc.ajg.com</strong> (newebay).",
        details: ["BTA：5×基本年薪，上限 USD 1,000,000（财物限额见各市场 Summary）。", "雇主承担差旅保费 100%；Milk Stork 商务差旅。"],
        detailsEn: ["BTA: 5× base salary, max USD 1,000,000 (property limits per market Summary).", "Employer pays 100%; Milk Stork on business travel."],
      },
      {
        cat: "perks",
        shortSummary: L("More benefits", "More benefits"),
        summary: L("泰国本地福利见 Summary 与 Hub。", "Thailand local perks in Summary and Hub."),
        summaryEn: "Thailand local perks in Summary and Hub.",
      }
    ]
  },
  {
    code: "NZ", flag: "🇳🇿", nameZh: "新西兰", nameEn: "New Zealand",
    snapshot: L("2026 年 1 月 Benefit Summary", "January 2026 Benefit Summary"),
    sources: [
      { title: "eBay Benefits 官网", titleEn: "ebaybenefits.com", url: "https://ebaybenefits.com" },
      { title: "People Central（Hub）", titleEn: "People Central on the Hub", url: "https://ebaybenefits.com" }
    ],
    items: [
      {
        cat: "health_medical",
        shortSummary: L("nib 私立手术 30 万 NZD", "nib private surgical NZD 300k"),
        summary: L("<strong>nib</strong>（Mercer 经纪）：私立手术至 <strong>NZD 300,000</strong>/人/年；非手术住院 NZD 200,000；专科 Option；牙科/光学分项限额；ACC top-up；雇主付基础住院计划 100% 保费。", "<strong>nib</strong> (Mercer): private surgical to <strong>NZD 300k</strong>/person/yr; medical hospitalisation NZD 200k; specialist option; dental/optical limits; ACC top-up; employer 100% base hospital premium."),
        summaryEn: "<strong>nib</strong> (Mercer): private surgical to <strong>NZD 300k</strong>/person/yr; medical hospitalisation NZD 200k; specialist option; dental/optical limits; ACC top-up; employer 100% base hospital premium.",
        ref: { url: "https://ebaybenefits.com", title: L("nib / Mercer", "nib / Mercer") }
      },
      {
        cat: "health_wellness",
        shortSummary: L("Lyra · Teladoc · Grokker · Cleo · Thrive", "Lyra · Teladoc · Grokker · Cleo · Thrive"),
        summary: L("全球身心健康：<strong>Lyra/ICAS EAP</strong>、<strong>Teladoc</strong>（EBAYGLOBAL）、<strong>Grokker</strong>、<strong>Cleo</strong>、<strong>Thrive</strong>。", "Global stack: <strong>Lyra/ICAS EAP</strong>, <strong>Teladoc</strong> (EBAYGLOBAL), <strong>Grokker</strong>, <strong>Cleo</strong>, <strong>Thrive</strong>."),
        summaryEn: "Global stack: <strong>Lyra/ICAS EAP</strong>, <strong>Teladoc</strong> (EBAYGLOBAL), <strong>Grokker</strong>, <strong>Cleo</strong>, <strong>Thrive</strong>.",
      },
      {
        cat: "income",
        shortSummary: L("寿险/TPD 3×年薪", "Life/TPD 3× salary"),
        summary: L("寿险及 TPD <strong>3 倍基本年薪</strong>（AAL NZD 325,000）；短期伤残（收入保障）最高 75% 薪，等待期 90 天，最长给付 5 年，月 cap NZD 30,000。<strong>AIA</strong>，雇主 100%。", "Life & TPD <strong>3× base salary</strong> (AAL NZD 325k); income protection up to 75%, 90-day wait, 5-year benefit period, NZD 30k/mo cap. <strong>AIA</strong>, employer 100%."),
        summaryEn: "Life & TPD <strong>3× base salary</strong> (AAL NZD 325k); income protection up to 75%, 90-day wait, 5-year benefit period, NZD 30k/mo cap. <strong>AIA</strong>, employer 100%.",
      },
      {
        cat: "retirement",
        shortSummary: L("KiwiSaver 雇主 3%", "KiwiSaver employer 3%"),
        summary: L("法定 <strong>KiwiSaver</strong>：员工可选 3%–10%（默认 3%）；雇主 <strong>3%</strong> 总薪。", "Statutory <strong>KiwiSaver</strong>: employee 3%–10% (default 3%); employer <strong>3%</strong> gross."),
        summaryEn: "Statutory <strong>KiwiSaver</strong>: employee 3%–10% (default 3%); employer <strong>3%</strong> gross.",
      },
      {
        cat: "leave",
        shortSummary: L("年假 20 工作日；病假 10 天", "20 working days AL; 10 sick"),
        summary: L("<strong>20 个工作日</strong>年假；病假 <strong>10 天/年</strong>（可结转累计至 20 天）；Sabbatical 4 周；育婴假等同全球 20+12 周政策；2026 公休表见 Summary。", "<strong>20 working days</strong> AL; sick <strong>10 days/yr</strong> (carryover cap 20); sabbatical 4 wks; parental 20+12 wks global policy; 2026 holiday table in Summary."),
        summaryEn: "<strong>20 working days</strong> AL; sick <strong>10 days/yr</strong> (carryover cap 20); sabbatical 4 wks; parental 20+12 wks global policy; 2026 holiday table in Summary.",
      },
      {
        cat: "travel",
        shortSummary: L("Chubb + BTA", "Chubb + BTA"),
        summary: L("全球 <strong>GSOC</strong> +1 408-376-7777；<strong>Chubb 境外医疗</strong>（ADD N01172293）经 Global Guardian；CoC：<strong>coc.ajg.com</strong>（newebay）。", "Global <strong>GSOC</strong>; <strong>Chubb OCM</strong> (ADD N01172293) via Global Guardian; CoC <strong>coc.ajg.com</strong> (newebay)."),
        summaryEn: "Global <strong>GSOC</strong>; <strong>Chubb OCM</strong> (ADD N01172293) via Global Guardian; CoC <strong>coc.ajg.com</strong> (newebay).",
        details: ["BTA：5×基本年薪，上限 USD 1,000,000（财物限额见各市场 Summary）。", "雇主承担差旅保费 100%；Milk Stork 商务差旅。"],
        detailsEn: ["BTA: 5× base salary, max USD 1,000,000 (property limits per market Summary).", "Employer pays 100%; Milk Stork on business travel."],
      },
      {
        cat: "perks",
        shortSummary: L("More benefits", "More benefits"),
        summary: L("教育、健身等见 Summary 与 People Central。", "Education, fitness, etc. in Summary and People Central."),
        summaryEn: "Education, fitness, etc. in Summary and People Central.",
      }
    ]
  },
  {
    code: "IN", flag: "🇮🇳", nameZh: "印度", nameEn: "India",
    snapshot: L("2026 年 1 月 Benefit Summary", "January 2026 Benefit Summary"),
    sources: [
      { title: "eBay Benefits 官网", titleEn: "ebaybenefits.com", url: "https://ebaybenefits.com" },
      { title: "People Central（Hub）", titleEn: "People Central on the Hub", url: "https://ebaybenefits.com" }
    ],
    items: [
      {
        cat: "health_medical",
        shortSummary: L("Future Generali 家庭 60 万 INR", "Future Generali family INR 6L"),
        summary: L("<strong>Future Generali</strong>：家庭总保额 <strong>INR 6,00,000</strong>；生育 INR 75k/1L（前 2 胎）；父母 claims >1L 有 10% co-pay；牙科+视力 INR 5,000/年（仅员工）。雇主 100% 保费（最多 5 名家属）。", "<strong>Future Generali</strong>: family SI <strong>INR 600,000</strong>; maternity INR 75k/100k (first 2 children); 10% co-pay on parent claims >INR 100k; dental+vision INR 5k/yr (employee). Employer 100% (max 5 dependents)."),
        summaryEn: "<strong>Future Generali</strong>: family SI <strong>INR 600,000</strong>; maternity INR 75k/100k (first 2 children); 10% co-pay on parent claims >INR 100k; dental+vision INR 5k/yr (employee). Employer 100% (max 5 dependents).",
        ref: { url: "https://ebaybenefits.com", title: L("Future Generali", "Future Generali") }
      },
      {
        cat: "health_wellness",
        shortSummary: L("Lyra · Teladoc · Grokker · Cleo · Thrive", "Lyra · Teladoc · Grokker · Cleo · Thrive"),
        summary: L("全球身心健康：<strong>Lyra/ICAS EAP</strong>、<strong>Teladoc</strong>（EBAYGLOBAL）、<strong>Grokker</strong>、<strong>Cleo</strong>、<strong>Thrive</strong>。", "Global stack: <strong>Lyra/ICAS EAP</strong>, <strong>Teladoc</strong> (EBAYGLOBAL), <strong>Grokker</strong>, <strong>Cleo</strong>, <strong>Thrive</strong>."),
        summaryEn: "Global stack: <strong>Lyra/ICAS EAP</strong>, <strong>Teladoc</strong> (EBAYGLOBAL), <strong>Grokker</strong>, <strong>Cleo</strong>, <strong>Thrive</strong>.",
      },
      {
        cat: "income",
        shortSummary: L("寿险 2× CTC；意外 3×", "Life 2× CTC; AD 3×"),
        summary: L("寿险 <strong>2 倍 CTC</strong>；意外身故/伤残最高 <strong>3 倍</strong>年薪；短期伤残周薪 1%×3×年薪或 INR 5,000（较低者）最长 104 周。Future Generali，雇主 100%。", "Life <strong>2× CTC</strong>; accidental death/disability up to <strong>3×</strong> annual base; STD weekly benefit per policy. Future Generali, employer 100%."),
        summaryEn: "Life <strong>2× CTC</strong>; accidental death/disability up to <strong>3×</strong> annual base; STD weekly benefit per policy. Future Generali, employer 100%.",
      },
      {
        cat: "retirement",
        shortSummary: L("EPF 12%+12%；Gratuity", "EPF 12%+12%; Gratuity"),
        summary: L("<strong>EPF</strong> 雇员 12% 基本薪（可自愿至 88%）；雇主 12% 基本薪（即 6% 年薪）。<strong>Gratuity</strong> 全由公司按 Gratuity Act 支付。", "<strong>EPF</strong>: employee 12% of basic (voluntary up to 88%); employer 12% of basic (6% of annual base). <strong>Gratuity</strong> fully employer-funded per Gratuity Act."),
        summaryEn: "<strong>EPF</strong>: employee 12% of basic (voluntary up to 88%); employer 12% of basic (6% of annual base). <strong>Gratuity</strong> fully employer-funded per Gratuity Act.",
      },
      {
        cat: "leave",
        shortSummary: L("年假 25 天；病假 12 天", "25 AL days; 12 sick"),
        summary: L("<strong>25 天</strong>年假；<strong>12 天</strong>病假；Sabbatical 4 周；法定产假 26 周 + 公司 Non-birth 12 周 100%；丧假 10/5/3 天层级。", "<strong>25 days</strong> AL; <strong>12 days</strong> sick; sabbatical 4 wks; 26 weeks maternity + 12 weeks non-birth at 100%; bereavement 10/5/3 days."),
        summaryEn: "<strong>25 days</strong> AL; <strong>12 days</strong> sick; sabbatical 4 wks; 26 weeks maternity + 12 weeks non-birth at 100%; bereavement 10/5/3 days.",
      },
      {
        cat: "travel",
        shortSummary: L("Chubb + BTA", "Chubb + BTA"),
        summary: L("全球 <strong>GSOC</strong> +1 408-376-7777；<strong>Chubb 境外医疗</strong>（ADD N01172293）经 Global Guardian；CoC：<strong>coc.ajg.com</strong>（newebay）。", "Global <strong>GSOC</strong>; <strong>Chubb OCM</strong> (ADD N01172293) via Global Guardian; CoC <strong>coc.ajg.com</strong> (newebay)."),
        summaryEn: "Global <strong>GSOC</strong>; <strong>Chubb OCM</strong> (ADD N01172293) via Global Guardian; CoC <strong>coc.ajg.com</strong> (newebay).",
        details: ["BTA：5×基本年薪，上限 USD 1,000,000（财物限额见各市场 Summary）。", "雇主承担差旅保费 100%；Milk Stork 商务差旅。"],
        detailsEn: ["BTA: 5× base salary, max USD 1,000,000 (property limits per market Summary).", "Employer pays 100%; Milk Stork on business travel."],
      },
      {
        cat: "perks",
        shortSummary: L("More benefits", "More benefits"),
        summary: L("印度本地津贴、礼品等见 Summary 第 15 页。", "India local allowances and gifts in Summary p.15."),
        summaryEn: "India local allowances and gifts in Summary p.15.",
      }
    ]
  }
];