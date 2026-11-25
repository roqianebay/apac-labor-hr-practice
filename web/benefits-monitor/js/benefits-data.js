function L(zh, en) {
  return { zh, en };
}

window.BENEFITS_DATA_VERSION = "2026-11-26-refs-v1";

window.BENEFIT_MATRIX_GROUPS = [
  {
    id: "set1",
    title: L("亚太国家及地区（第一部分）", "APAC countries & regions (part 1)"),
    codes: ["CN", "HK", "SG", "AU", "MY", "TH", "NZ"]
  },
  {
    id: "set2",
    title: L("其他亚太国家及地区", "Other APAC countries & regions"),
    codes: ["JP", "KR", "IN", "TW", "ID", "VN", "PH"]
  }
];
window.BENEFIT_MATRIX_CODES = [
  "CN", "HK", "SG", "AU", "MY", "TH", "NZ", "JP", "KR", "IN", "TW", "ID", "VN", "PH"
];
window.BENEFIT_MATRIX_FOCUS = ["CN", "AU", "SG", "MY"];

window.BENEFIT_CATEGORIES = [
  { id: "leave_annual", label: L("年假/带薪假", "Annual / paid leave") },
  { id: "holidays", label: L("公共假日", "Public holidays") },
  { id: "leave_sick", label: L("病假", "Sick leave") },
  { id: "sick_pay", label: L("病假工资", "Sick leave pay") },
  { id: "leave_parental", label: L("产假/陪产假/育儿假", "Maternity / paternity / parental") },
  { id: "social", label: L("社会保险/公积金", "Social insurance / funds") },
  { id: "minimum_wage", label: L("最低工资", "Minimum wage") },
  { id: "retirement", label: L("退休/养老金", "Retirement / pension") },
  { id: "medical", label: L("医疗/工伤保险", "Medical / workers' comp") },
  { id: "overtime", label: L("加班与工时", "Overtime & working hours") },
  { id: "other", label: L("其他法定福利", "Other statutory") }
];

window.BENEFIT_MARKETS = [
  {
    code: "CN", flag: "🇨🇳", nameZh: "中国大陆", nameEn: "Mainland China",
    sources: [
      { title: "人社部政策库", titleEn: "MOHRSS", url: "https://www.mohrss.gov.cn/" },
      { title: "国务院公报·劳动", titleEn: "State Council", url: "https://www.gov.cn/" }
    ],
    items: [
      { cat: "leave_annual", summary: "职工累计工作满1/10/20年 → 年假5/10/15天（法定最低）。", summaryEn: "Statutory annual leave: 5/10/15 days by 1/10/20 years of service." },
      {
        cat: "holidays",
        summary: "自2025年起法定节假日13天（国令795）；春节4天、劳动节2天等；年度调休安排另发。",
        summaryEn: "13 statutory days from 2025 (Order 795); Spring Festival 4, Labour 2; bridge schedule yearly.",
        ref: {
          url: "https://www.gov.cn/zhengce/zhengceku/202411/content_6986381.htm",
          title: L("国务院令第795号", "State Council Order 795")
        }
      },
      { cat: "leave_sick", summary: "医疗期按工龄与司龄分档（常见3～24个月）；须医疗机构证明。", summaryEn: "Medical treatment period tiers by service (often 3–24 months); medical proof required." },
      { cat: "sick_pay", summary: "病假工资不低于当地最低工资80%为通行法定底线；医疗期内分段计发依地方与用人单位规章。", summaryEn: "Statutory floor often ≥80% local minimum wage; tiered pay in medical period per local rules." },
      { cat: "leave_parental", summary: "产假≥98天（地方可延长）；陪产假各省级规定；育儿假多地试点。", summaryEn: "Maternity ≥98 days (extensions local); paternity & childcare leave vary by province." },
      { cat: "social", summary: "五险：养老、医疗、失业、工伤、生育；住房公积金用人单位与职工强制缴存（比例地方定）。", summaryEn: "Five insurances + mandatory housing fund; rates set locally." },
      { cat: "minimum_wage", summary: "分省/市/县月最低工资与小时标准，无全国统一额；每年由人社部门公布调整。", summaryEn: "Provincial/city/county monthly & hourly floors — no single national rate; revised yearly." },
      { cat: "retirement", summary: "基本养老保险累计缴满15年可领取；法定退休年龄按新规分步延迟。", summaryEn: "Pension after 15 years contributions; retirement age being phased up." },
      { cat: "medical", summary: "基本医疗保险（职工/居民）；工伤认定后享受工伤医疗与伤残待遇。", summaryEn: "Basic medical insurance; work injury benefits after认定." },
      { cat: "overtime", summary: "标准工时8h/日、40h/周；加班工资150%/200%/300%（工作日/休息/法定假）。", summaryEn: "Standard hours; OT pay 150%/200%/300%." },
      { cat: "other", summary: "高温津贴、女职工劳动保护等属地强制标准。", summaryEn: "Heat allowance, female worker protection — local mandatory." }
    ]
  },
  {
    code: "HK", flag: "🇭🇰", nameZh: "香港", nameEn: "Hong Kong",
    sources: [{ title: "劳工处", titleEn: "Labour Department", url: "https://www.labour.gov.hk/" }],
    items: [
      { cat: "leave_annual", summary: "雇佣条例：按受雇年资7/14/14天年假阶梯（可高于合约）。", summaryEn: "EO statutory annual leave 7–14 days by service (contract may exceed)." },
      { cat: "holidays", summary: "2026年起15天法定假期（新增复活节星期一；2028/2030再增）。", summaryEn: "15 statutory holidays from 2026 (Easter Monday added; more from 2028/2030)." },
      { cat: "leave_sick", summary: "连续合约满12周：享有薪病假额度，按2/4条累计与使用规则。", summaryEn: "Paid sick leave entitlement after 12-week continuous contract; accumulation rules apply." },
      { cat: "sick_pay", summary: "有薪病假工资为惯常平均日薪的 <strong>4/5</strong>（雇佣条例）。", summaryEn: "Paid sick leave pay: <strong>four-fifths</strong> of average daily wages (Employment Ordinance)." },
      { cat: "leave_parental", summary: "产假14周（雇主可向政府索取部分）；陪产假5天（2023起法定）。", summaryEn: "14 weeks maternity (partial reimbursement); 5 days paternity." },
      { cat: "social", summary: "强积金MPF：雇主及雇员各5%（下限/上限依条例）。", summaryEn: "MPF: employer/employee 5% each (caps apply)." },
      { cat: "minimum_wage", summary: "法定最低时薪（SMW）每年检讨；<strong>2025-05-01</strong> 起 <strong>HK$42.1/小时</strong>（须以劳工处最新公告为准）。", summaryEn: "Statutory Minimum Wage hourly rate reviewed annually; <strong>HK$42.1/hr</strong> from <strong>1 May 2025</strong> (verify LD notice)." },
      { cat: "retirement", summary: "65岁一般取MPF结余；公务员/职业计划另计。", summaryEn: "Typically MPF withdrawal from age 65; civil schemes differ." },
      { cat: "medical", summary: "雇员补偿条例（工伤）；公立医院服务非雇佣福利。", summaryEn: "Employees' Compensation (work injury); public hospital not employer benefit." },
      { cat: "overtime", summary: "无统一法定加班费；以合约/行业习惯为准，受最低工资约束。", summaryEn: "No universal statutory OT rate — contract/industry; min wage floor." },
      { cat: "other", summary: "有薪年假、休息日本身为法定；长服金/遣散费（制度调整中）。", summaryEn: "Statutory holidays & AL; LSP/SP systems (reforming)." }
    ]
  },
  {
    code: "TW", flag: "🇹🇼", nameZh: "台湾", nameEn: "Taiwan",
    sources: [{ title: "劳动部", titleEn: "MOL", url: "https://www.mol.gov.tw/" }],
    items: [
      { cat: "leave_annual", summary: "劳工特休：6个月～多年资对应3～30天（劳基法）。", summaryEn: "Special leave 3–30 days by seniority under LSA." },
      { cat: "holidays", summary: "国务院公布之放假日（含国防部降敏节假日每年公布）。", summaryEn: "Government-announced national holidays annually." },
      { cat: "leave_sick", summary: "普通伤病假年度上限与医师证明依劳动基准法与规则。", summaryEn: "Ordinary sick leave caps and medical proof under LSA rules." },
      { cat: "sick_pay", summary: "未住院病假超30天部分雇主可仅发半数工资；住院与未住院规则分列（劳基法第43条）。", summaryEn: "Beyond 30 days non-hospitalisation, employer may pay half wages; hospitalisation rules differ (LSA art. 43)." },
      { cat: "leave_parental", summary: "产假8周；陪产假7天；育儿假/减少工作时间等家族照顾假。", summaryEn: "8 weeks maternity; 7 days paternity; parental/family leave." },
      { cat: "social", summary: "劳工保险（含就保医陪）+ 劳工退休金新制雇主提缴≥6%。", summaryEn: "Labor insurance + employer pension contribution ≥6%." },
      { cat: "minimum_wage", summary: "基本月薪每年调整；<strong>2025</strong> 月基本工资约 <strong>NT$28,590</strong>（每月/40h/周，以劳动部公告为准）。", summaryEn: "Monthly basic wage adjusted yearly; <strong>~NT$28,590</strong> in <strong>2025</strong> (40h week — MOL notice)." },
      { cat: "retirement", summary: "退休申请年满65（或符合劳基法旧制规则）。", summaryEn: "Retirement typically 65 or legacy LSA rules." },
      { cat: "medical", summary: "职灾双轨：劳工保险职灾给付+职安法雇主责任。", summaryEn: "Occupational injury via labour insurance + OSH duties." },
      { cat: "overtime", summary: "延长工时须工会/人力部同意；加班排除订项与加班费倍数法定。", summaryEn: "OT requires process; statutory OT pay multipliers." },
      { cat: "other", summary: "职业安全卫生设施为法定义务；劳工退休后援依规则。", summaryEn: "OSH facilities mandatory; post-retirement support per rules." }
    ]
  },
  {
    code: "SG", flag: "🇸🇬", nameZh: "新加坡", nameEn: "Singapore",
    sources: [{ title: "MOM", titleEn: "Ministry of Manpower", url: "https://www.mom.gov.sg/" }],
    items: [
      { cat: "leave_annual", summary: "入职满3个月：第1年起7–14天（按年资阶梯，Employment Act Part IV）。", summaryEn: "7–14 days annual leave by service (EA Part IV, after 3 months)." },
      { cat: "holidays", summary: "11天法定公众假期；受薪雇员须付节日薪酬或补假。", summaryEn: "11 public holidays — pay or off in lieu." },
      { cat: "leave_sick", summary: "门诊14天+住院60天有薪病假（须医生证明，Employment Act适用员工门槛）。", summaryEn: "14 outpatient + 60 hospitalisation paid sick days (MC; EA coverage)." },
      { cat: "sick_pay", summary: "有薪病假按雇员约定的 gross rate of pay 计付；年资与额度未满足之日可不计薪（EA/MOM）。", summaryEn: "Paid sick at gross rate of pay for entitled days; pro-rata if service days not met (EA/MOM)." },
      { cat: "leave_parental", summary: "产假16周；2025-04起陪产假法定4周GPPL；育儿假6天GPCL+ECL2天（公民子女）。", summaryEn: "16 weeks maternity; 4 weeks GPPL paternity from Apr 2025; 6 days GPCL + 2 days ECL (SC children)." },
      { cat: "social", summary: "CPF：雇主+雇员缴至中央公积金（费率分龄档）。", summaryEn: "Central Provident Fund contributions by age bands." },
      { cat: "minimum_wage", summary: "无全国统一最低工资；<strong>PWM</strong>分行业/职业组别加薪路径 + 工作准证<strong>Local Qualifying Salary</strong>等底线（MOM）。", summaryEn: "No single national minimum; <strong>Progressive Wage Model</strong> + LQS and sectoral floors (MOM)." },
      { cat: "retirement", summary: "55岁提领部分CPF；会后 Full Retirement Sum 规则。", summaryEn: "CPF withdrawals from 55; FRS rules apply." },
      { cat: "medical", summary: "Work Injury Compensation Act；雇主须买WICA保险。", summaryEn: "WICA mandatory insurance for work injuries." },
      { cat: "overtime", summary: "部分员工适用：超时工资≥1.5倍；经理/专业人士多豁免。", summaryEn: "OT 1.5× for covered employees; many PMETs exempt." },
      { cat: "other", summary: "SDL技能发展税等法定缴纳。", summaryEn: "Skills Development Levy and other statutory payments." }
    ]
  },
  {
    code: "AU", flag: "🇦🇺", nameZh: "澳大利亚", nameEn: "Australia",
    sources: [{ title: "Fair Work Ombudsman", titleEn: "FWO", url: "https://www.fairwork.gov.au/" }],
    items: [
      { cat: "leave_annual", summary: "NES：全职每年4周年假（累积，解雇时折现）。", summaryEn: "NES: 4 weeks paid annual leave (accrues, paid out on termination)." },
      { cat: "holidays", summary: "国民各州公共假日表不同（雇主义务一致为带薪假或补薪）。", summaryEn: "State-based public holidays — paid leave or loading." },
      { cat: "leave_sick", summary: "个人/护理假10天/年累积（全职，NES）。", summaryEn: "10 days personal/carer's leave per year (accrual, NES)." },
      { cat: "sick_pay", summary: "带薪病假按 ordinary hours × base rate（含 Award/合同）；无薪病假不扣其他法定权益。", summaryEn: "Paid personal/carer's leave at base rate for ordinary hours (award/contract)." },
      { cat: "leave_parental", summary: "政府PPL+NES无薪育婴假；灵活育婴假2025-07至2026-06最多120天、2026-07起130天。", summaryEn: "Gov PPL + NES unpaid parental leave; flexible parental leave cap 120 days (to Jun 2026), 130 from Jul 2026." },
      { cat: "social", summary: "无中国型五险一金；Medicare levy税+养老金Super。", summaryEn: "No CN-style bundle; Medicare levy + compulsory super." },
      { cat: "minimum_wage", summary: "全国最低工资由 FWC 年度决定；<strong>2024-07</strong> 起约 <strong>A$24.10/小时</strong> 或 <strong>$972.80/周</strong>（以当期 FW Act 最低工资令为准）。", summaryEn: "National minimum wage set by FWC; <strong>~A$24.10/hr</strong> or <strong>$972.80/wk</strong> from <strong>Jul 2024</strong> order (check current)." },
      { cat: "retirement", summary: "Super Guarantee雇主缴费比例法定上调轨道（2025约11.5%+）。", summaryEn: "Super Guarantee employer rate on statutory schedule." },
      { cat: "medical", summary: "Workers' compensation各州工伤险强制。", summaryEn: "Mandatory workers' compensation (state schemes)." },
      { cat: "overtime", summary: "Modern Award定加班/罚金率；上限与合理额外工时。", summaryEn: "Award penalty rates; reasonable additional hours rules." },
      { cat: "other", summary: "长期服务假（州法）；加班休假替代协议（部分行业）。", summaryEn: "Long service leave (state); TOIL in some sectors." }
    ]
  },
  {
    code: "NZ", flag: "🇳🇿", nameZh: "新西兰", nameEn: "New Zealand",
    sources: [{ title: "Employment NZ", titleEn: "Employment NZ", url: "https://www.employment.govt.nz/" }],
    items: [
      { cat: "leave_annual", summary: "年假4周/满整年（或按协议折算）。", summaryEn: "4 weeks annual holidays after 12 months." },
      { cat: "holidays", summary: "11天全国法定假+周年元旦等。", summaryEn: "11 national public holidays + NZ public holidays." },
      { cat: "leave_sick", summary: "病假10天/年（2024立法扩展）；另收养假等。", summaryEn: "10 sick days per year (2024 reform); adoption leave etc." },
      { cat: "sick_pay", summary: "带薪病假按 reproduction of pay if employee would have worked（Holidays Act）；不需医生证明的额度限于首日等规则。", summaryEn: "Paid sick leave replicates pay the employee would have received (Holidays Act)." },
      { cat: "leave_parental", summary: "政府Paid parental leave + 雇主可补充。", summaryEn: "Gov paid parental leave; employer top-ups optional." },
      { cat: "social", summary: "ACC工伤/意外统一征税；无强制公积金。", summaryEn: "ACC levy covers accidents; no mandatory pension fund." },
      { cat: "minimum_wage", summary: "成人法定最低工资每年四月调整；<strong>2024-04</strong> 起 <strong>$23.50/小时</strong>（Employment NZ 公告）。", summaryEn: "Adult minimum wage reviewed April yearly; <strong>$23.50/hr</strong> from <strong>Apr 2024</strong> (Employment NZ)." },
      { cat: "retirement", summary: "KiwiSaver自愿加入机制+雇主匹配最低3%（如加入）。", summaryEn: "KiwiSaver opt-in; employer 3% if member enrolled." },
      { cat: "medical", summary: "ACC涵盖工作场所伤病。", summaryEn: "ACC covers work-related injuries." },
      { cat: "overtime", summary: "无统一法定OT倍数，以雇佣协议与最低薪为准。", summaryEn: "No universal OT multiplier — agreement and minimum wage." },
      { cat: "other", summary: "丧假、陪审团假等法定带薪假期有限定。", summaryEn: "Bereavement, jury duty leave in statute." }
    ]
  },
  {
    code: "JP", flag: "🇯🇵", nameZh: "日本", nameEn: "Japan",
    sources: [{ title: "厚生労働省", titleEn: "MHLW", url: "https://www.mhlw.go.jp/" }],
    items: [
      { cat: "leave_annual", summary: "半年出勤率≥80%：10～20日有給（按勤续年数）。", summaryEn: "Paid annual leave 10–20 days by tenure (≥80% attendance)." },
      { cat: "holidays", summary: "国民祝日16日前后+黄金周（会社规定）。", summaryEn: "~16 national holidays; company calendar applies." },
      { cat: "leave_sick", summary: "法定带薪病假不普遍；缺勤多为无薪或就劳规则。", summaryEn: "No general statutory paid sick leave; unpaid absence common." },
      { cat: "sick_pay", summary: "健康保险<strong>伤病支给</strong>：等待期后按标准报酬日额约 <strong>2/3</strong> 支付（有期限；可与雇用保险衔接）。", summaryEn: "Health insurance sickness allowance ~<strong>two-thirds</strong> of standard daily benefit after waiting period (time-limited)." },
      { cat: "leave_parental", summary: "产前产后8周；育児休业男女可取得（儿童出生～1岁等）。", summaryEn: "Maternity ~8 weeks; childcare leave for parents." },
      { cat: "social", summary: "雇用保险·健康保险·厚生年金·劳灾雇主加入。", summaryEn: "Employment, health, employees' pension, workers' comp." },
      { cat: "minimum_wage", summary: "都道府県別<strong>最低賃金</strong>法制；全国加重平均2024年度前年突破约<strong>1,055円/时</strong>（地域差大）。", summaryEn: "Prefectural minimum wages; national weighted avg exceeded <strong>¥1,055/hr</strong> in FY2024 (wide regional spread)." },
      { cat: "retirement", summary: "年金领取原则上65；厚生年金与国民年金并用。", summaryEn: "Pension generally from 65; employees' + national pension." },
      { cat: "medical", summary: "労灾保险强制约业涵盖职业病与事故。", summaryEn: "Mandatory workers' accident insurance." },
      { cat: "overtime", summary: "36協定上限加班；超40h/月2024起有小幅额外保险义务。", summaryEn: "Article 36 overtime caps; extra pension duty over thresholds." },
      { cat: "other", summary: "退职金非法定但课税规则惯例化。", summaryEn: "Retirement allowance not statutory but tax rules common." }
    ]
  },
  {
    code: "KR", flag: "🇰🇷", nameZh: "韩国", nameEn: "Korea",
    sources: [{ title: "고용노동부", titleEn: "MOEL", url: "https://www.moel.go.kr/" }],
    items: [
      { cat: "leave_annual", summary: "1年以上：15天有薪年假；每2年+1天至25天上限。", summaryEn: "15 days paid leave after 1 year; +1 per 2 years to 25." },
      { cat: "holidays", summary: "公休日劳动者工资法定支付或补休。", summaryEn: "Paid wages or substitute rest on public holidays." },
      { cat: "leave_sick", summary: "带薪病假非法定普遍；依雇用规约/就课。", summaryEn: "No broad statutory paid sick; employer policies apply." },
      { cat: "sick_pay", summary: "国民健康保险承担诊疗费用；无薪病假期间符合条件者可申请<strong>雇用保险</strong>伤病津贴（要件与期限限制）。", summaryEn: "NHI covers treatment; employment insurance sickness benefit if eligible during unpaid leave (limits apply)." },
      { cat: "leave_parental", summary: "产假90天；2025育儿津贴上调；2026-08起1–2周短期育儿假；配偶陪产假窗口2026-09扩大。", summaryEn: "90-day maternity; 2025 benefit uplift; short parental leave 1–2 weeks from Aug 2026; spouse birth leave expanded Sep 2026." },
      { cat: "social", summary: "国民年金·健康保险·雇用保险·工伤雇主扣缴缴纳。", summaryEn: "National pension, health, employment, industrial accident." },
      { cat: "minimum_wage", summary: "最低时薪每年调整；<strong>2025</strong> 起 <strong>10,030 韩元/小时</strong>（最低时薪委员会/MOEL）。", summaryEn: "Hourly minimum wage adjusted yearly; <strong>KRW 10,030/hr</strong> from <strong>2025</strong> (MOEL)." },
      { cat: "retirement", summary: "满60岁年金领取（逐步上调）；退职金DC/DB义务化路径。", summaryEn: "Pension from 60 (rising); severance pay system." },
      { cat: "medical", summary: "산재보험涵盖职业伤病医疗与康复。", summaryEn: "Industrial accident insurance for treatment and rehab." },
      { cat: "overtime", summary: "周40h标准；延长·假日·夜间工资加成法定。", summaryEn: "40h week; premium pay for extended/night/holiday." },
      { cat: "other", summary: "月1次以上주휴수당（带薪周休）。", summaryEn: "Paid weekly holiday allowance ≥ monthly." }
    ]
  },
  {
    code: "IN", flag: "🇮🇳", nameZh: "印度", nameEn: "India",
    sources: [{ title: "Labour Codes (India)", titleEn: "Labour Codes", url: "https://labour.gov.in/" }],
    items: [
      { cat: "leave_annual", summary: "州法与商店Establishment法各异：常见12～24天年假。", summaryEn: "State/establishment acts: often 12–24 annual leave days." },
      { cat: "holidays", summary: "国民假日+各邦假日清单（雇主必须放假或加班费）。", summaryEn: "National + state lists; holiday or overtime pay." },
      { cat: "leave_sick", summary: "各邦 Shops & Establishments / 行业法病假天数不一。", summaryEn: "Sick leave days vary by state establishment acts." },
      { cat: "sick_pay", summary: "部分邦法要求带薪病假按基本工资计；全国性最低工资/劳工法典<strong>病假工资</strong>改革仍因邦与行业差异。", summaryEn: "Some states mandate paid sick at basic wages; national code rollout varies by state/industry." },
      { cat: "leave_parental", summary: "Maternity Benefit Act：26周；陪产假15天（符合条件雇员）。", summaryEn: "26 weeks maternity (Maternity Benefit Act); 15 days paternity." },
      { cat: "social", summary: "EPF（雇员公积金）+ ESIC（薪资门槛内医保）。", summaryEn: "EPF + ESIC for eligible wage bands." },
      { cat: "minimum_wage", summary: "中央与各邦<strong>最低工资法</strong>并行；2024劳工法典（工资法）全国基准工资/ floor 分技能与地理区（岗培部）。", summaryEn: "Central + state minimum wages; Wage Code floor wages by geography/skill (implementing rules)." },
      { cat: "retirement", summary: "EPF满年限领取/部分提取。", summaryEn: "EPF withdrawal rules at retirement age." },
      { cat: "medical", summary: "ESIC诊疗+工伤Employer's liability。", summaryEn: "ESIC care; employer liability for injury." },
      { cat: "overtime", summary: "工厂法加班倍率普遍200%；IT行业多豁免磋商。", summaryEn: "Factory Act 2× OT common; IT exemptions." },
      { cat: "other", summary: "Bonus Payment Act年度奖金法定；gratuity满年限。", summaryEn: "Statutory bonus; gratuity after 5 years." }
    ]
  },
  {
    code: "MY", flag: "🇲🇾", nameZh: "马来西亚", nameEn: "Malaysia",
    sources: [{ title: "HR Ministry", titleEn: "MoHR", url: "https://www.mohr.gov.my/" }],
    items: [
      { cat: "leave_annual", summary: "Employment Act：2～5年8天、5年以上12天…阶梯。", summaryEn: "EA annual leave 8–16 days by tenure." },
      { cat: "holidays", summary: "联邦+州公共假日雇主须遵守。", summaryEn: "Federal and state public holidays." },
      { cat: "leave_sick", summary: "住院病假60天+门诊22天（EA涵盖员工门槛）。", summaryEn: "60 hospital + 22 outpatient sick days (eligible employees)." },
      { cat: "sick_pay", summary: "带薪病假按雇员「最后薪水」规则支付（Employment Act 第60F条等）；薪资含固定津贴是否计入视规章。", summaryEn: "Paid sick per EA s.60F \"last drawn rate\" rules for eligible employees." },
      { cat: "leave_parental", summary: "产假98天；2023起陪产假7天（雇员资格）。", summaryEn: "98 days maternity; 7 days paternity." },
      { cat: "social", summary: "EPF公积金、SOCSO社会保险、EIS就业保险雇主缴。", summaryEn: "EPF, SOCSO, EIS contributions." },
      { cat: "minimum_wage", summary: "全国最低月薪令；<strong>2025-08</strong> 起 <strong>RM 1,700/月</strong>（26 工作日构成，MoHR）。", summaryEn: "National minimum monthly wage order; <strong>RM 1,700/mo</strong> from <strong>Aug 2025</strong> (MoHR)." },
      { cat: "retirement", summary: "EPF55岁可取；法定退休年龄60。", summaryEn: "EPF from 55; retirement age 60." },
      { cat: "medical", summary: "PERKESO职业伤病治疗与津贴。", summaryEn: "SOCSO work injury scheme." },
      { cat: "overtime", summary: "普通日1.5×、休息/假日更高倍数。", summaryEn: "OT 1.5× weekdays; higher on rest days." },
      { cat: "other", summary: "公共假期补薪与轮班津贴等地缘惯例。", summaryEn: "Holiday pay loads and shift premiums (sector practice)." }
    ]
  },
  {
    code: "TH", flag: "🇹🇭", nameZh: "泰国", nameEn: "Thailand",
    sources: [{ title: "กระทรวงแรงงาน", titleEn: "MOL Thailand", url: "https://www.mol.go.th/" }],
    items: [
      { cat: "leave_annual", summary: "工作满1年6天年假；3年10天；6年14天…法定最低。", summaryEn: "Minimum annual leave 6–14+ days by tenure." },
      { cat: "holidays", summary: "法定假日13～16日（皇家膺礼年度调整）。", summaryEn: "13–16 public holidays annually." },
      { cat: "leave_sick", summary: "法定带薪病假每年30天。", summaryEn: "30 days statutory paid sick leave per year." },
      { cat: "sick_pay", summary: "病假工资按雇员<strong>日常工作工资</strong>标准支付30天（劳动保护法）；超出须医院证明。", summaryEn: "Paid sick at normal wages up to 30 days per year (Labour Protection Act); medical cert for extended." },
      { cat: "leave_parental", summary: "产假90天（雇主付45天+社保45天）；陪产假未普遍法定。", summaryEn: "90 days maternity (split employer/SSO); limited paternity." },
      { cat: "social", summary: "社保SSO含医疗、工伤、失业、产假基金。", summaryEn: "Social Security Fund: medical, injury, unemployment, maternity." },
      { cat: "minimum_wage", summary: "全国日薪最低工资；<strong>400 泰铢/日</strong>为近年全国统一基准（须核对劳工部最新令）。", summaryEn: "National daily minimum wage; <strong>THB 400/day</strong> unified floor in recent orders (verify MOL notice)." },
      { cat: "retirement", summary: "政府养老金+私人职业基金视参保。", summaryEn: "Government pension + provident funds if enrolled." },
      { cat: "medical", summary: "工伤经SSO与劳工法雇主配合。", summaryEn: "Work injury via SSO and employer duties." },
      { cat: "overtime", summary: "日8h周48h；加班1.5～3倍工资。", summaryEn: "8h/day 48h/week; OT 1.5–3×." },
      { cat: "other", summary: "遣散费按工龄法定计。", summaryEn: "Statutory severance by service length." }
    ]
  },
  {
    code: "ID", flag: "🇮🇩", nameZh: "印尼", nameEn: "Indonesia",
    sources: [{ title: "Kemnaker", titleEn: "Ministry of Manpower", url: "https://kemnaker.go.id/" }],
    items: [
      { cat: "leave_annual", summary: "工作连续满12个月12天年假。", summaryEn: "12 days annual leave after 12 months." },
      { cat: "holidays", summary: "2026年17天国假+8天共同休假（三部长SKB 2025-09）。", summaryEn: "2026: 17 national holidays + 8 collective leave days (Sep 2025 SKB)." },
      { cat: "leave_sick", summary: "病假须有医生证明；带薪天数控年资。", summaryEn: "Medical certificate required; paid days by service." },
      { cat: "sick_pay", summary: "首<strong>8周</strong>全薪、次<strong>4周</strong>75%、后续50%直至法定额度用尽（UU 13/2003 施行规则）。", summaryEn: "Paid sick: <strong>100%</strong> first 8 weeks, <strong>75%</strong> next 4 weeks, <strong>50%</strong> thereafter (law/regulation caps)." },
      { cat: "leave_parental", summary: "产假3个月；近年父亲陪产假扩展至数日（法改）。", summaryEn: "3 months maternity; paternity days expanded by reform." },
      { cat: "social", summary: "BPJS Ketenagakerjaan（工伤、养老、死亡）+ BPJS Kesehatan医保强制。", summaryEn: "BPJS Employment + Health mandatory." },
      { cat: "minimum_wage", summary: "省设<strong>UMP/UMP 区域</strong>年度调整（2025 雅加达等上调；以 Manpower Minister 令为准）。", summaryEn: "Provincial minimum wage (UMP) set yearly; 2025 uplifts in Jakarta etc. (ministerial decrees)." },
      { cat: "retirement", summary: "JHT储蓄满龄或条件领取。", summaryEn: "JHT old-age savings withdrawal rules." },
      { cat: "medical", summary: "BPJS JKK工伤+JKM。", summaryEn: "Work accident and death benefits." },
      { cat: "overtime", summary: "首1.5h 1.5×、其后2×；夜间与假日加成。", summaryEn: "OT tiers 1.5× then 2×; night/holiday premiums." },
      { cat: "other", summary: "THR宗教节日津贴强制。", summaryEn: "Mandatory religious holiday bonus (THR)." }
    ]
  },
  {
    code: "VN", flag: "🇻🇳", nameZh: "越南", nameEn: "Vietnam",
    sources: [{ title: "MOLISA", titleEn: "MOLISA", url: "https://www.molisa.gov.vn/" }],
    items: [
      { cat: "leave_annual", summary: "12～14天年假按工龄与劳动条件。", summaryEn: "12–14 annual leave days by conditions." },
      { cat: "holidays", summary: "春节长假等国定假日带薪。", summaryEn: "Tet and national holidays — paid." },
      { cat: "leave_sick", summary: "参保职工病假社保可按规报销诊疗；休天数依合约与社保法。", summaryEn: "Insured workers: medical costs via social health insurance; leave days per contract/law." },
      { cat: "sick_pay", summary: "病假期间领取<strong>社会保险病休待遇</strong>（按缴费基数与年限计）；雇主可补足至合同工资。", summaryEn: "Social insurance sickness benefit by contribution base/tenure; employer may top up to contract wage." },
      { cat: "leave_parental", summary: "产假6个月（社保法41/2024，2025-07起）；父亲陪产5–14工作日；2026-07二孩延至7个月/陪产10天。", summaryEn: "6 months maternity (SIL Law from Jul 2025); paternity 5–14 working days; 2nd child: 7 months / 10 days from Jul 2026." },
      { cat: "social", summary: "BHXH养老、BHYT医疗、BHTN失业雇主劳方分摊。", summaryEn: "Social, health, unemployment insurance split." },
      { cat: "minimum_wage", summary: "分区域月最低工资（区域I–IV）；<strong>2024-07</strong> 起第一类地区约 <strong>4.96百万越南盾/月</strong>（政府令，年调）。", summaryEn: "Regional monthly minimum wages (zones I–IV); Region I ~<strong>VND 4.96m</strong> from <strong>Jul 2024</strong> (yearly decrees)." },
      { cat: "retirement", summary: "男60女55退休（逐步上调方案）。", summaryEn: "Retirement ages 60/55 (phasing up)." },
      { cat: "medical", summary: "职业病与工作事故社保给付。", summaryEn: "Occupational disease and accident benefits." },
      { cat: "overtime", summary: "年加班费总时长上限；平日150%、周末200%、节假日300%。", summaryEn: "Annual OT caps; 150/200/300% pay." },
      { cat: "other", summary: "年13月薪习惯非法定但集体合同常见。", summaryEn: "13th month customary not universal statutory." }
    ]
  },
  {
    code: "PH", flag: "🇵🇭", nameZh: "菲律宾", nameEn: "Philippines",
    sources: [{ title: "DOLE", titleEn: "DOLE", url: "https://www.dole.gov.ph/" }],
    items: [
      { cat: "leave_annual", summary: "5天Service Incentive Leave（满1年，可含病事假合并）。", summaryEn: "5 days SIL after 1 year (may combine purposes)." },
      { cat: "holidays", summary: "Regular + special non-working holidays薪酬规则区分。", summaryEn: "Regular vs special holiday pay rules differ." },
      { cat: "leave_sick", summary: "无普遍法定雇主带薪长期病假；SIL 5天可作病事假合并。", summaryEn: "No broad employer paid sick statute; SIL 5 days may combine purposes." },
      { cat: "sick_pay", summary: "<strong>SSS 疾病津贴</strong>：参保且满足贡献条件时按平均日薪比例日付（上限约120天/年，以SSS规则为准）。", summaryEn: "<strong>SSS sickness benefit</strong> for qualifying members — daily cash benefit caps (~120 days/year, SSS rules)." },
      { cat: "leave_parental", summary: "产假105天；solo parent加15天；陪产假7天（RA 8187）。", summaryEn: "105 days maternity; solo parent +15; 7 days paternity (RA 8187)." },
      { cat: "social", summary: "SSS、PhilHealth、Pag-IBIG强制。", summaryEn: "SSS, PhilHealth, Pag-IBIG mandatory." },
      { cat: "minimum_wage", summary: "分地区<strong>工资令</strong>（NCR 等）；2024-07 NCR 非农业约 <strong>PHP 645/日</strong>（DOLE/TRC 区域令）。", summaryEn: "Regional wage orders (e.g. NCR); non-agri NCR ~<strong>PHP 645/day</strong> from <strong>Jul 2024</strong> (DOLE)." },
      { cat: "retirement", summary: "SSS养老金60岁；Pag-IBIG MP2可选。", summaryEn: "SSS pension at 60; Pag-IBIG savings." },
      { cat: "medical", summary: "ECC/PhilHealth工伤与工作病。", summaryEn: "ECC and PhilHealth for work-related cases." },
      { cat: "overtime", summary: "标准8h；OT125%、休息日130%起。", summaryEn: "8h standard; OT from 125% / rest day 130%." },
      { cat: "other", summary: "第13月工资月中奖（法定奖金）。", summaryEn: "13th month pay mid-year by statute." }
    ]
  }
];