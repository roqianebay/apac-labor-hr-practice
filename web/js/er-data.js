function L(zh, en) {
  return { zh, en };
}

window.ER_UI = {
  brand: L("APAC Labor & HR Practice", "APAC Labor & HR Practice"),
  title: L("APAC Labor Law & HR Practice Guide", "APAC Labor Law & HR Practice Guide"),
  navCompare: L("十地对照", "Compare"),
  navSources: L("官方索引", "Official sources"),
  navCases: L("四类案件", "Case types"),
  navCountries: L("国家详策", "Country guides"),
  navHub: L("看板互联", "Dashboard hub"),
  navTools: L("14 国向导与手册", "14-country wizard"),
  kicker: L("亚太 ER 劳动关系办案指南", "APAC ER case-handling guide"),
  h1: L("亚太区域各国裁员、绩效解除、试用期、违纪流程。", "APAC processes for redundancy, performance exits, probation, and misconduct."),
  lede: L(
    "覆盖中国大陆、香港、新加坡、澳大利亚、新西兰、马来西亚、泰国、日本、韩国、印度（另含印尼越南菲等见下方工具区）。先把法定底线对齐，勿用一国思路套其他国家。",
    "Covers Mainland China, Hong Kong, Singapore, Australia, New Zealand, Malaysia, Thailand, Japan, Korea and India (plus Indonesia, Vietnam, Philippines and others in the tools section). Align statutory floors first — do not copy one country’s playbook elsewhere."
  ),
  hubH2: L("亚太 ER 看板互联", "APAC ER dashboard hub"),
  hubSub: L("同一套亚太员工关系工具，按用途跳转。", "One APAC ER toolkit — jump by purpose."),
  chipDate: L("资料截止 2026-09", "Updated Sep 2026"),
  chipFloor: L("法定底线 ≠ 公司政策", "Statute ≠ company policy"),
  chipCounsel: L("个案仍需当地律师复核", "Local counsel for live cases"),
  notice: L(
    "本站为 HR/ER 对照工具，不构成法律意见。奖、企业协议、集体合同、工作规则和地方法院口径可能严于或细于下表。处理真实个案请同时核对合同与现行官方文本。",
    "This is an HR/ER comparison tool, not legal advice. Awards, enterprise agreements, collective contracts, work rules and local courts may be stricter or more detailed than the table. For live cases, check the contract and current official texts."
  ),
  sourcesH2: L("官方法规与权威来源", "Official law and authority links"),
  sourcesSub: L(
    "办案前先对照<strong>政府/劳工部门</strong>公开文本。十地直达如下；印尼/越南/菲等见 14 国索引按钮。",
    "Check <strong>government / labour authority</strong> sites before acting. Ten markets below; ID, VN, PH etc. via the 14-market index."
  ),
  sourcesMore14: L("14 国/地区完整官方法规索引", "Full official index — 14 markets"),
  compareH2: L("十地对照表", "Ten-market matrix"),
  compareSub: L(
    "中港台新澳新马泰日韩印核心指标一览。点表头国家可跳转详策。印尼/越南/菲等见下方 14 国工具区。",
    "Core metrics for CN, HK, SG, AU, NZ, MY, TH, JP, KR and IN. Click a header for that desk. ID, VN, PH and others: 14-country tools below."
  ),
  dim: L("维度", "Topic"),
  casesH2: L("四类日常案件", "Four day-to-day case types"),
  casesSub: L(
    "先点选案件类型。横条为泛亚太通用路径；下表为十地关键步骤。完整流程图与法规要点见上方「国家详策」。",
    "Pick a case type. Bar: pan-APAC path; table: ten markets. Full flows and statute detail in Country guides above."
  ),
  tipsH3: L("十地关键路径", "Ten-market path"),
  casesMarketCol: L("市场", "Market"),
  casesStepsCol: L("步骤要点", "Key steps"),
  casesHintDetail: L(
    "需分国流程图、法规条文与 ER 路线：在上方「国家详策」切换国家与案件类型。",
    "For per-country flowcharts, statutes and ER playbooks: use Country guides above."
  ),
  countriesH2: L("各国详细政策", "Country-by-country policy"),
  countriesSub: L(
    "含裁员、绩效、试用期、违纪、争议出口与 ER 操作要点。",
    "Redundancy, performance, probation, misconduct, dispute routes and ER actions."
  ),
  tagSeverance: L("遣散", "Severance"),
  tagNotice: L("通知", "Notice"),
  blockRedundancy: L("裁员项目", "Redundancy"),
  blockPerformance: L("绩效解除", "Performance exit"),
  blockProbation: L("试用期", "Probation"),
  blockDiscipline: L("违纪处理", "Misconduct"),
  blockDispute: L("争议与风险", "Disputes and risk"),
  blockSources: L("主要公开来源", "Primary public sources"),
  footer: L(
    "APAC Labor & HR Practice Guide · 十地详策 + 14 国工具 · 看板互联见页首 · 不构成法律意见",
    "APAC Labor & HR Practice Guide · 10-market desk + 14-country tools · Hub at top · Not legal advice"
  ),
  deskIntro: L("遣散与通知（法定底线）", "Severance and notice (statutory floor)"),
  deskDispute: L("争议出口与仲裁风险", "Disputes and arbitration"),
  deskAllPolicies: L("该国四类案件法规要点（全文）", "All four case types — statutory points"),
  flowGlobal: L("泛亚太通用步骤", "Pan-APAC generic steps"),
  playbookLabel: L("ER 实操路线", "ER playbook"),
  langZh: "中文",
  langEn: "EN",
  langAria: L("切换语言", "Switch language")
};

window.ER_DATA = {
  updated: "2026-09",
  colIds: ["cn", "hk", "sg", "au", "nz", "my", "th"],
  jurisdictions: [
    {
      id: "cn",
      name: L("中国大陆", "Mainland China"),
      law: L("《劳动合同法》《劳动法》《劳动争议调解仲裁法》", "Labour Contract Law, Labour Law, Labour Dispute Mediation and Arbitration Law"),
      severance: L(
        "法定经济补偿 N：每满一年一个月工资；不满6个月付半个月。高薪员工基数封顶当地社平工资3倍、年限最多12年。违法解除一般为 2N。",
        "Statutory severance N: one month’s wage per year; half a month if under six months. High earners: cap at 3× local average wage and 12 years. Unlawful dismissal is generally 2N."
      ),
      notice: L(
        "无过失性辞退：提前30日书面通知或额外支付1个月工资（代通知金）。过失性解除可即时。",
        "No-fault dismissal: 30 days’ written notice or one month’s pay in lieu. Misconduct dismissal may be immediate."
      ),
      summary: L(
        "法定解除事由制。没有合法事由就不能单方解除，协商解除是实务主路径。",
        "Cause-based dismissal only. Without a statutory ground, unilateral termination is not available; mutual separation is the practical path."
      ),
      sources: [
        { label: L("劳动合同法", "Labour Contract Law"), href: "https://www.gov.cn/jrzg/2007-06/29/content_667720.htm" }
      ],
      redundancy: [
        L("第41条经济性裁员：裁减20人以上，或不足20人但占职工总数10%以上。", "Art. 41 collective redundancy: 20+ employees, or fewer than 20 but 10%+ of the workforce."),
        L("程序：提前30日向工会或全体职工说明情况、听取意见，裁员方案向劳动行政部门报告。", "Process: 30 days’ advance explanation to the union or all staff, take comments, then report the plan to the labour authority."),
        L("法定事由：破产重整；生产经营严重困难；转产、重大技术革新或经营方式调整且变更合同后仍需裁员；订立合同时的客观经济情况发生重大变化导致合同无法履行。", "Grounds: bankruptcy restructuring; serious operational difficulty; restructuring after contract variation still requires cuts; major change in objective circumstances making the contract unperformable."),
        L("优先留用：较长期限固定合同、无固定期限合同、家庭无其他就业人员且有需要扶养的老人或未成年人。", "Priority to retain: longer fixed-term contracts, open-ended contracts, and employees who are the sole earner supporting elderly or minors."),
        L("6个月内重新招用人员时，应通知被裁减人员并在同等条件下优先招用。", "If hiring again within six months, notify laid-off staff and prefer them on equal terms."),
        L("须支付经济补偿 N。不得裁减第42条保护对象（职业病/工伤、医疗期、孕产哺、本单位连续工作满15年且距法定退休不足5年等）。", "Pay N. Do not include Art. 42 protected staff (occupational disease/work injury, medical period, pregnancy/maternity/lactation, 15 years’ service and within 5 years of retirement, etc.)."),
        L("未达裁员人数门槛时，实务上多用协商解除或第40条第3项客观情况变化；后者举证和程序要求仍然很高。", "Below the headcount threshold, practice uses mutual separation or Art. 40(3) change of circumstances; the latter still has a high evidence bar.")
      ],
      performance: [
        L("不能以“绩效差”直接解除。第40条第2项路径：不能胜任工作 → 培训或调岗 → 仍不能胜任 → 30日通知或代通知金 + N。", "Poor ratings alone are not a ground. Art. 40(2): incompetence → training or redeployment → still incompetent → 30 days’ notice or pay in lieu + N."),
        L("“不能胜任”需有事先明确的岗位标准、考核制度、公示送达、客观证据。一次低分通常不够。", "Incompetence needs pre-set job standards, a published appraisal system, service of rules, and objective evidence. One low score is usually not enough."),
        L("PIP应有合理周期、可量化目标、辅导记录、员工确认或送达证据。", "A PIP needs a reasonable period, measurable goals, coaching notes, and employee acknowledgement or proof of service."),
        L("第42条保护期内不得走第40/41条。", "Do not use Arts. 40/41 during an Art. 42 protection period."),
        L("协商解除（用人单位提出）同样要付 N，但能显著降低仲裁和恢复劳动关系风险。", "Employer-initiated mutual separation still costs N, but sharply cuts reinstatement and arbitration risk.")
      ],
      probation: [
        L("试用期长度与合同期限挂钩：3个月–1年最长1个月；1–3年最长2个月；3年以上或无固定期限最长6个月。同一用人单位与同一劳动者只能约定一次试用期。", "Probation length follows contract term: max 1 month (3–12 month contracts), 2 months (1–3 years), 6 months (3+ years or open-ended). Only one probation with the same employer."),
        L("试用期工资不得低于本单位同岗位最低档或合同约定工资的80%，且不低于当地最低工资。", "Probation pay must be at least 80% of contract/same-role minimum and not below local minimum wage."),
        L("用人单位解除须证明不符合录用条件。录用条件应在入职前书面明确并送达。", "Employer exit requires proof the hire conditions were not met. Put those conditions in writing and serve them before or at onboarding."),
        L("不符合录用条件解除：一般无需支付经济补偿，但仍需履行通知工会等程序（如适用）。", "Failure-to-meet-conditions dismissal usually needs no severance, but union notification and other procedures may still apply."),
        L("劳动者试用期辞职提前3日通知。", "The employee may resign on 3 days’ notice during probation.")
      ],
      discipline: [
        L("第39条过失性解除：严重违反规章制度；严重失职营私舞弊造成重大损害；同时与其他单位建立劳动关系严重影响本职或拒不改正；被依法追究刑事责任等。", "Art. 39 summary dismissal: serious rule breach; serious dereliction/self-dealing causing major loss; concurrent employment that seriously affects the role or refusal to stop; criminal conviction, etc."),
        L("规章制度须经民主程序制定并向劳动者公示，否则很难作为严重违纪依据。", "Rules must be adopted through democratic procedure and published to staff, or they rarely support a serious-misconduct dismissal."),
        L("“严重”需与行为性质、损失、制度规定相当；口头警告升级到解除要有递进记录。", "“Serious” must match the act, loss and the written rule. Escalation from verbal warning to dismissal needs a paper trail."),
        L("程序：调查、询问、员工陈述申辩、工会通知（第43条）、书面解除通知送达。", "Process: investigate, interview, allow a response, notify the union (Art. 43), serve a written termination notice."),
        L("证据链不完整时，仲裁常认定为违法解除，面临继续履行或 2N。", "A weak evidence chain is often held unlawful: reinstatement or 2N.")
      ],
      dispute: L(
        "劳动争议仲裁前置，时效一般为一年。违法解除员工可选择继续履行或 2N。地方口径差异大，北上广深对不能胜任和严重违纪审查严格。",
        "Labour arbitration is a pre-condition; limitation is generally one year. On unlawful dismissal the employee may elect reinstatement or 2N. Local practice varies; Beijing, Shanghai, Guangzhou and Shenzhen scrutinise incompetence and misconduct closely."
      ),
      playbook: {
        redundancy: L(
          "先核人数门槛与第42条保护名单 → 准备经营困难/调整证据 → 工会/职代会说明 → 方案报劳动局 → 个别协商与补偿测算（N+代通知金策略）→ 签署协议、社保公积金停缴、档案转移。",
          "Check headcount trigger and Art. 42 protected list → gather business-difficulty evidence → brief union/staff → file the plan → individual deals and cost N + pay in lieu → sign, stop social insurance/housing fund, transfer files."
        ),
        performance: L(
          "先固定岗位说明书和考核规则 → 书面认定不能胜任 → 培训或调岗并保留记录 → 二次考核仍不达标 → 评估是否协商；协商不成再走第40条。",
          "Lock the JD and appraisal rules → written incompetence finding → train or redeploy with records → second fail → try mutual separation; if not, Art. 40."
        ),
        probation: L(
          "入职当天送达录用条件 → 试用期中期书面反馈 → 到期前收集不符合证据 → 解除通知写明具体条件与事实，避免空泛“表现不佳”。",
          "Serve hire conditions on day one → mid-probation written feedback → gather fail evidence before expiry → termination notice must cite the unmet condition and facts, not a vague “poor performance”."
        ),
        discipline: L(
          "先停职调查（注意工资）→ 对照已公示制度条款 → 询问笔录与证人/系统日志 → 工会意见 → 解除决定一次性说清事实，后续不宜随意更换理由。",
          "Investigate (watch pay during suspension) → map the published rule → interviews, witnesses, system logs → union view → state facts once in the decision; do not swap reasons later."
        )
      }
    },
    {
      id: "hk",
      name: L("香港", "Hong Kong"),
      law: L("《雇佣条例》(Cap. 57)、普通法", "Employment Ordinance (Cap. 57) and common law"),
      severance: L(
        "连续受雇满24个月且因裁员/停工被解雇：法定遣散费。月薪雇员为最后整月工资的2/3 × 年资（月薪上限 HK$22,500，总额上限 HK$390,000）。另有长期服务金（一般满5年，非因裁员且非即时解雇等）。",
        "After 24 months’ continuous employment, redundancy/layoff triggers statutory severance: 2/3 of last full month’s wages × years (wage cap HK$22,500; total cap HK$390,000). Long service payment may apply after 5 years if not redundancy and not summary dismissal."
      ),
      notice: L(
        "试用期首月：可无通知。其后合同约定，最短不少于7日；无约定则试用期后至少1个月。可支付代通知金。",
        "First month of probation: no notice. Thereafter, contractual notice of at least 7 days; if silent, at least 1 month after probation. Pay in lieu is allowed."
      ),
      summary: L(
        "原则上可凭通知或代通知金解雇，无需法定“正当事由”。风险主要在不合理解雇申索、歧视、连续合同权利及遣散费/长期服务金。",
        "In principle, employment ends on notice or pay in lieu with no statutory “just cause”. Risk sits in unreasonable dismissal claims, discrimination, continuous-contract rights, and SP/LSP."
      ),
      sources: [
        { label: L("劳工处雇佣条例简介", "Labour Dept EO guide"), href: "https://www.labour.gov.hk/eng/public/wcp/ConciseGuide/EO_guide_full.pdf" },
        { label: L("遣散费与长期服务金", "SP and LSP"), href: "https://www.labour.gov.hk/eng/public/wcp/ConciseGuide/11.pdf" }
      ],
      redundancy: [
        L("裁员解雇且连续合约满24个月：有权申索遣散费。雇主若不能反证，法律可推定解雇属裁员。", "Redundancy after 24 months on a continuous contract: statutory severance. Dismissal is presumed redundancy unless the employer rebuts it."),
        L("计算公式（月薪）：min(最后整月工资, 22,500) × 2/3 × 年资（不足一年按比例）。总额上限 390,000。雇员也可选择用离职前12个月平均工资。", "Monthly-rated formula: min(last full month’s wages, 22,500) × 2/3 × years (pro rata). Cap 390,000. The employee may elect 12-month average wages."),
        L("2025年5月1日起取消强积金对冲：该日后服务对应的遣散费/长期服务金，不得再用雇主强制性供款对冲；过渡日前部分仍可对冲。自愿性供款及年资酬金仍可用于对冲。", "From 1 May 2025, employer mandatory MPF cannot offset post-transition SP/LSP. Pre-transition service can still be offset. Voluntary contributions and gratuities may still offset."),
        L("即时解雇不获遣散费或长期服务金。", "Summary dismissal attracts no SP or LSP."),
        L("不合理及不合法解雇（如产假、工伤病假、工会、陪审员等受保护情况）可能面临补偿令。", "Unreasonable and unlawful dismissal (maternity, work-injury sick leave, union, jury service, etc.) may lead to a compensation order.")
      ],
      performance: [
        L("法律不要求必须走 PIP 才能因表现解雇，但合同/员工手册如承诺了程序，应按承诺执行。", "No statutory PIP is required for a performance exit, but follow any process promised in the contract or handbook."),
        L("给足通知或代通知金通常即可结束雇佣。", "Due notice or pay in lieu usually ends employment."),
        L("注意：若被认定为裁员，满24个月可能触发遣散费；若以表现解雇，应准备能反驳“裁员推定”的材料。", "If the exit is treated as redundancy, 24 months may trigger SP. For a performance dismissal, keep evidence that the role still exists."),
        L("连续合约（每周工作18小时以上等）决定年假、遣散费、长期服务金等资格。", "Continuous-contract status (e.g. 18+ hours a week) drives annual leave, SP and LSP eligibility.")
      ],
      probation: [
        L("试用期首月：任何一方可随时终止，无需通知或代通知金（即使合同写了更长通知）。", "First probation month: either party may end employment with no notice or pay in lieu, even if the contract says otherwise."),
        L("试用期首月之后：按约定通知，但不少于7日；无约定则不少于7日。", "After the first month: agreed notice, but not less than 7 days; if silent, at least 7 days."),
        L("试用期不是“随便解除无后果”：歧视、怀孕、工伤等保护仍然适用。", "Probation is not consequence-free: discrimination, pregnancy and work-injury protections still apply.")
      ],
      discipline: [
        L("第9条即时解雇（无需通知/代通知金）限于：故意不服从合法合理命令；行为不当；欺诈不诚实；一贯疏忽职责；或其他有权即时解雇的理由。", "s.9 summary dismissal (no notice/pay in lieu) is limited to wilful disobedience of a lawful and reasonable order, misconduct, fraud/dishonesty, habitual neglect, or other grounds warranting summary dismissal."),
        L("即时解雇门槛高，举证不足会变成错误解雇，需支付代通知金等。", "The bar is high. Weak proof becomes wrongful dismissal and pay in lieu (and more) is due."),
        L("一般违纪：警告、停职、按通知解雇更为稳妥。", "Ordinary misconduct: warning, suspension, or dismissal on notice is safer."),
        L("解雇后终止款项（除遣散费外）原则上须于终止后7日内支付。", "Termination payments other than severance are generally due within 7 days.")
      ],
      dispute: L(
        "劳资审裁处处理金钱申索；不合理解雇等可向劳工处/法院寻求救济。整体较内地仲裁风险低，但高薪员工合同索赔、歧视及2025年后遣散费成本上升需纳入预算。",
        "The Labour Tribunal hears money claims; unreasonable dismissal may go to the Labour Department/courts. Overall risk is lower than the Mainland, but budget for high-earner contract claims, discrimination, and higher SP cost after the 2025 MPF offset abolition."
      ),
      playbook: {
        redundancy: L(
          "先确认是否构成 redundancy/layoff → 计算连续受雇期是否满24个月 → 测算 SP 与 LSP 不可兼得 → 评估 MPF 对冲过渡规则 → 发出通知/代通知金 → 7日内结清工资年假。",
          "Confirm redundancy/layoff → 24 months’ continuous service? → SP and LSP are not both payable → apply MPF offset transition rules → notice or pay in lieu → wages and leave within 7 days."
        ),
        performance: L(
          "核对合同通知期 → 决定工作通知或代通知金 → 如可能被指裁员则准备岗位仍存在的证据 → 避免在受保护假期/投诉后报复性解雇。",
          "Check contractual notice → work notice or pay in lieu → if redundancy may be alleged, show the role still exists → avoid dismissal after protected leave or complaints."
        ),
        probation: L(
          "确认是否仍在首月 → 首月可当日终止 → 其后至少7日通知 → 书面说明最后工作日与款项。",
          "Still in month one? If yes, same-day exit is available → after that, at least 7 days’ notice → confirm last day and payments in writing."
        ),
        discipline: L(
          "判断是否达到第9条 → 未达则走通知解雇 → 达则固定证据后即时解雇并写明理由 → 即时解雇不付 SP/LSP。",
          "Does it meet s.9? If not, dismiss on notice. If yes, lock evidence, dismiss summarily and state reasons. No SP/LSP on summary dismissal."
        )
      }
    },
    {
      id: "sg",
      name: L("新加坡", "Singapore"),
      law: L("《雇佣法令》Employment Act 1968、《雇佣索赔法令》、不当解雇原则、MOM 负责任裁员指引", "Employment Act 1968, Employment Claims Act, wrongful-dismissal principles, MOM responsible retrenchment guidelines"),
      severance: L(
        "无法定强制遣散费。MOM 指引：任职满2年通常有资格获得裁员补偿，市场惯例约为每一年服务 2 周至 1 个月工资；不满2年可支付 ex-gratia。合同/集体协议优先。",
        "No mandatory statutory retrenchment pay. MOM guidance: 2+ years’ service is typically eligible; market norm is 2 weeks to 1 month per year. Under 2 years, ex-gratia is common. Contract/CBA prevails."
      ),
      notice: L(
        "合同约定优先。无约定则法定最低：不足26周=1天；26周–2年=1周；2–5年=2周；满5年=4周。可支付代通知金。",
        "Contract first. If silent, statutory minimum: <26 weeks = 1 day; 26 weeks–2 years = 1 week; 2–5 years = 2 weeks; 5+ years = 4 weeks. Pay in lieu allowed."
      ),
      summary: L(
        "通知终止是基本路径，但“无正当理由或借口”的解雇可被挑战。裁员补偿靠指引与协商，不是内地式法定 N。",
        "Notice termination is the baseline, but dismissal without just cause or excuse can be challenged. Retrenchment pay is guidance and negotiation, not PRC-style statutory N."
      ),
      sources: [
        { label: L("MOM 负责任裁员", "MOM responsible retrenchment"), href: "https://www.mom.gov.sg/employment-practices/retrenchment/responsible-retrenchment" },
        { label: L("Employment Act 通知与解雇", "Employment Act notice and dismissal"), href: "https://sso.agc.gov.sg/act/ema1968" }
      ],
      redundancy: [
        L("裁员定义：因冗员或业务重组终止；雇主终止后短期内不打算填补该空缺，可被推定为裁员。", "Retrenchment: termination for redundancy or reorganisation. Ending a role with no plan to refill it soon may be presumed retrenchment."),
        L("雇有≥10名员工的雇主，一旦告知员工被裁，须在5个工作日内向 MOM 提交强制裁员通知（Mandatory Retrenchment Notification）。", "Employers with 10+ staff must file Mandatory Retrenchment Notification with MOM within 5 working days of informing the employee."),
        L("应咨询工会（如有）、避免歧视性筛选、尽量给予更长通知、协助再就业。", "Consult the union if any, avoid discriminatory selection, give longer notice where possible, and support job search."),
        L("补偿：满2年服务通常应支付；惯例 2 周–1 个月/年，视公司财务与行业而定。", "Benefit: usually payable after 2 years; norm 2 weeks–1 month per year, depending on finances and sector."),
        L("筛选标准应与技能、业务需要相关，避免年龄、国籍、怀孕等歧视。", "Selection should track skills and business need, not age, nationality, pregnancy or similar.")
      ],
      performance: [
        L("合同终止条款 + 通知/代通知金是常用路径。", "Contractual termination plus notice/pay in lieu is the usual path."),
        L("若员工主张不当解雇，雇主需证明有正当理由或借口；绩效解雇应有目标、辅导、警告记录。", "If wrongful dismissal is alleged, show just cause or excuse. Performance exits need goals, coaching and warnings."),
        L("试用期不合格仍通常要给合同通知或代通知金；法院认为试用期结束并不当然使合同自动到期。", "Failed probation still usually requires contractual notice or pay in lieu; expiry of probation does not automatically end the contract."),
        L("PME 员工部分工时/加班条款不适用，但解雇与通知等核心保护仍可能适用。", "Some hours/OT rules do not apply to PMEs, but core dismissal and notice protections may still apply.")
      ],
      probation: [
        L("法令未规定最长试用期，常见 3–6 个月。", "No statutory maximum; 3–6 months is common."),
        L("试用期解雇仍要遵守合同通知；未约定则适用法定最低通知。", "Probation dismissal still follows contractual notice, or the statutory minimum if silent."),
        L("确认函/不获转正通知应在试用期届满前发出，并保留评估表与事实依据。", "Issue confirmation or non-confirmation before expiry, with appraisal forms and facts.")
      ],
      discipline: [
        L("第14条：因不当行为即时解雇前须经过 due inquiry（正当调查/聆讯）。可选择降级或停职停薪不超过1周。", "s.14: summary dismissal for misconduct requires due inquiry. Alternatives: downgrade or unpaid suspension up to one week."),
        L("调查期间可停职，停职一般不超过1周（或经局长批准更长），期间至少支付一半工资；若查无违纪须补回扣减工资。", "Suspension pending inquiry is generally up to one week (or longer with the Commissioner’s leave), at least half pay; restore withheld pay if no misconduct is found."),
        L("即使打算支付代通知金结束雇佣，若理由是违纪，实务上仍建议完成聆讯，避免 ECT 认定程序不公。", "Even if paying in lieu, complete an inquiry where the reason is misconduct, or the ECT may find the process unfair."),
        L("严重不诚实、暴力、严重违抗等才适合即时解雇。", "Reserve summary dismissal for serious dishonesty, violence or serious insubordination.")
      ],
      dispute: L(
        "工资等金钱索赔走 TADM；不当解雇可向雇佣索赔审裁处（ECT）提出。救济通常为补偿而非强制恢复职位。",
        "Wage claims go to TADM; wrongful dismissal may go to the Employment Claims Tribunals. Remedy is usually compensation, not forced reinstatement."
      ),
      playbook: {
        redundancy: L(
          "评估是否构成 retrenchment → 10人以上企业5个工作日内报 MOM → 工会咨询与筛选标准书面化 → 按惯例测算 2周–1个月/年 → 长于法定最低的通知。",
          "Is it retrenchment? → 10+ employer: notify MOM in 5 working days → union consult and written selection criteria → cost 2 weeks–1 month/year → notice longer than the statutory floor."
        ),
        performance: L(
          "对照 KPI 与警告信 → 决定 PIP 或直接通知终止 → 付清通知 → 准备“正当理由”卷宗以防 ECT。",
          "Map KPIs and warnings → PIP or notice termination → pay out notice → keep a just-cause file for the ECT."
        ),
        probation: L(
          "按合同通知终止 → 评估表具体到行为事例 → 不要默认“试用期满自动消失”。",
          "Terminate on contractual notice → appraisal with behavioural examples → do not assume the contract dies when probation ends."
        ),
        discipline: L(
          "停职（半薪）→ 书面指控 → 聆讯记录 → 决定即时解雇或通知解雇 → 即时解雇才可免通知。",
          "Suspend (half pay) → written allegations → inquiry record → summary or notice dismissal → only summary dismissal skips notice."
        )
      }
    },
    {
      id: "au",
      name: L("澳大利亚", "Australia"),
      law: L("《公平工作法》Fair Work Act 2009、国家就业标准 NES、现代奖/企业协议", "Fair Work Act 2009, National Employment Standards, modern awards / enterprise agreements"),
      severance: L(
        "NES 裁员补偿（雇主通常需雇 15 人及以上，且员工连续服务满12个月）：1年–<2年=4周 … 9年–<10年=16周；满10年为12周（阶梯回落）。小企业多数无法定裁员补偿。奖/协议可能更高。",
        "NES redundancy pay (generally 15+ employees and 12 months’ service): 4 weeks at 1–<2 years … 16 weeks at 9–<10 years; 12 weeks at 10+ years. Most small-business employees are excluded. Awards/agreements may be higher."
      ),
      notice: L(
        "NES 最低：≤1年=1周；>1–3年=2周；>3–5年=3周；>5年=4周。年满45岁且服务≥2年再加1周。可支付代通知金。严重不当行为可无通知。试用期同样享有通知。",
        "NES minimum: ≤1 year = 1 week; >1–3 = 2; >3–5 = 3; >5 = 4. Extra week if aged 45+ with 2+ years. Pay in lieu allowed. Serious misconduct: no notice. Probation still attracts notice."
      ),
      summary: L(
        "不需要“法定事由清单”，但须通过不公平解雇的“Harsh, unjust or unreasonable”检验：正当理由 + 公正程序。一般保护（General Protections）从入职第一天就适用。",
        "No closed list of statutory grounds, but unfair dismissal tests whether the dismissal was harsh, unjust or unreasonable: valid reason plus a fair process. General protections apply from day one."
      ),
      sources: [
        { label: L("Fair Work 解雇", "Fair Work dismissal"), href: "https://www.fairwork.gov.au/ending-employment/dismissal" },
        { label: L("NES 通知与裁员补偿", "NES notice and redundancy pay"), href: "https://www.fairwork.gov.au/tools-and-resources/fact-sheets/minimum-workplace-entitlements/notice-of-termination-and-redundancy-pay" }
      ],
      redundancy: [
        L("真正裁员：雇主不再需要该职位，而非针对个人表现。", "Genuine redundancy: the job is no longer required, not a performance issue."),
        L("须咨询（consultation）如奖/协议有要求；考虑调岗（redeployment）到关联实体的合适职位。", "Consult if the award/agreement requires it; consider redeployment into a suitable role in associated entities."),
        L("NES 裁员补偿阶梯：满1年4周、2年6周、3年7周、4年8周、5年10周、6年11周、7年13周、8年14周、9年16周、10年及以上12周。", "NES scale: 1y 4w, 2y 6w, 3y 7w, 4y 8w, 5y 10w, 6y 11w, 7y 13w, 8y 14w, 9y 16w, 10y+ 12w."),
        L("除外：连续服务不足12个月、小企业（<15人）、严重不当行为解雇、多数临时工、特定定期合同等。", "Exclusions: under 12 months, small business (<15), serious misconduct, most casuals, certain fixed-term contracts."),
        L("裁员同时仍须给 NES 通知或代通知金。", "NES notice or pay in lieu is still due on redundancy.")
      ],
      performance: [
        L("最低雇佣期过后（通常6个月；小企业12个月）员工可申请不公平解雇，须在解雇后21天内向 Fair Work Commission 提出。", "After the minimum employment period (usually 6 months; 12 for small business), unfair dismissal may be filed with the Fair Work Commission within 21 days."),
        L("程序要点：告知问题、给予改进机会、允许陪同、认真考虑其回应后再决定。", "Process: put the issues, allow improvement, allow a support person, consider the response, then decide."),
        L("延长试用期不能重置最低雇佣期时钟。", "Extending probation does not reset the minimum employment period."),
        L("高收入员工可能因 high income threshold 无法提出不公平解雇，但仍有一般保护与合同索赔。", "High-income employees may be barred from unfair dismissal but still have general protections and contract claims.")
      ],
      probation: [
        L("试用期是合同概念，不能剥夺 NES。即使试用期也要给通知（通常1周）。", "Probation is contractual and does not strip NES rights. Notice (usually 1 week) still applies."),
        L("最低雇佣期内通常无法提不公平解雇，但一般保护（歧视、投诉报复、工会等）从第一天适用。", "Unfair dismissal is usually unavailable in the minimum period, but general protections (discrimination, complaint victimisation, union) apply from day one."),
        L("不要在员工行使法定权利（请假、工伤投诉、歧视投诉）后立即解雇。", "Do not dismiss immediately after the employee exercises a workplace right (leave, injury complaint, discrimination complaint).")
      ],
      discipline: [
        L("严重不当行为（盗窃、欺诈、性骚扰、袭击、拒绝执行合法合理且属工作一部分的指示、对安全或商誉造成严重紧迫风险等）可无通知解雇。", "Serious misconduct (theft, fraud, sexual harassment, assault, refusal of a lawful and reasonable instruction that is part of the job, serious imminent risk to safety or reputation) may be dismissed without notice."),
        L("仍建议调查、让员工回应；程序不公可能导致不公平解雇成立。", "Still investigate and hear the employee; an unfair process can still make the dismissal unfair."),
        L("即使即时解雇，仍须支付已工作工资、累积年假等。", "Even on summary dismissal, pay wages worked and accrued annual leave."),
        L("普通违纪应走警告与改进程序，避免一次小过错直接解雇被认定为 harsh。", "Ordinary misconduct needs warnings and improvement; a single small fault can be found harsh.")
      ],
      dispute: L(
        "Fair Work Commission：不公平解雇、一般保护、裁员是否“真正裁员”。一般保护索赔风险高、可含惩罚性赔偿。另有人权/反歧视机构。",
        "Fair Work Commission: unfair dismissal, general protections, whether redundancy is genuine. General protections claims are high-risk and may include penalties. Human-rights/anti-discrimination bodies also apply."
      ),
      playbook: {
        redundancy: L(
          "证明职位消失 → 奖/协议咨询 → 关联公司调岗检索 → 核小企业与年资 → 叠加通知+裁员补偿 → 书面确认。",
          "Prove the job is gone → award/EA consultation → associated-entity redeployment search → check small-business and tenure → stack notice + redundancy pay → confirm in writing."
        ),
        performance: L(
          "先看是否过最低雇佣期 → 过了就必须 procedural fairness → PIP 与警告 → 会议允许 support person。",
          "Has the minimum period passed? If yes, procedural fairness is required → PIP and warnings → allow a support person."
        ),
        probation: L(
          "给1周通知 → 避开一般保护雷区 → 不要以为“试用期=零风险”。",
          "Give 1 week’s notice → stay off general-protections landmines → probation is not zero risk."
        ),
        discipline: L(
          "分清 serious misconduct 与普通违纪 → 调查+回应 → 严重方可无通知 → 保留所有谈话记录。",
          "Separate serious misconduct from ordinary misconduct → investigate and hear → only serious misconduct skips notice → keep every conversation on file."
        )
      }
    },
    {
      id: "nz",
      name: L("新西兰", "New Zealand"),
      law: L("《雇佣关系法》Employment Relations Act 2000（含2026年修订）、假期法、工资保护法", "Employment Relations Act 2000 (including 2026 amendments), Holidays Act, Wages Protection Act"),
      severance: L(
        "无法定强制裁员补偿。是否支付以及金额取决于雇佣协议、政策或协商。风险在于程序是否公正、裁员是否真实。",
        "No statutory redundancy pay. Amount depends on the agreement, policy or negotiation. Risk is whether the process was fair and the redundancy genuine."
      ),
      notice: L(
        "以书面雇佣协议为准；未约定则须给予合理通知。合理通知考虑年资、职级、找工作难度、行业惯例、是否支付补偿等。严重不当行为可即时解雇。",
        "Follow the written agreement; if silent, give reasonable notice (tenure, seniority, ease of finding work, industry custom, any compensation). Serious misconduct may be summary."
      ),
      summary: L(
        "核心是诚信义务与 s103A 公正解雇检验：雇主在当时是否公正地作为、是否有充分调查。实体理由和程序几乎同等重要。",
        "The core is good faith and the s103A justification test: what a fair and reasonable employer could have done. Substance and process weigh almost equally."
      ),
      sources: [
        { label: L("Employment NZ 裁员", "Employment NZ redundancy"), href: "https://www.employment.govt.nz/ending-employment/redundancy" },
        { label: L("90日试用期", "90-day trial periods"), href: "https://www.employment.govt.nz/starting-employment/hiring/trial-periods" }
      ],
      redundancy: [
        L("必须是真实的业务原因，不能用裁员掩盖绩效问题。", "Must be a genuine business reason, not performance dressed as redundancy."),
        L("公正程序：提出重组提案、提供信息、给员工反馈机会、认真考虑反馈、检索调岗、最后才决定。", "Fair process: proposal, information, feedback, genuine consideration, redeployment search, then a decision."),
        L("通知按协议；无约定则合理通知。可协商 garden leave 或提前离职。", "Notice per agreement, or reasonable notice. Garden leave or early exit can be agreed."),
        L("补偿无法定最低。协议写了就必须付。", "No statutory minimum compensation. If the agreement promises it, pay it."),
        L("先行决定“谁走”再补走咨询程序，极易构成不正当解雇。", "Deciding who goes and then consulting afterwards is a classic unjustified dismissal.")
      ],
      performance: [
        L("须告知标准、指出差距、给予改进机会和合理时间，再决定解雇。", "State the standard, show the gap, give a real chance and time to improve, then decide."),
        L("会议应允许员工带代表，雇主应保持开放心态而非走过场。", "Allow a representative; keep an open mind rather than a rubber-stamp meeting."),
        L("2026年修订提高了员工自身严重不当行为对救济的限制，但绩效案仍高度依赖程序。", "2026 reforms tighten remedies where the employee contributed via serious misconduct, but performance cases still turn on process."),
        L("高薪酬门槛（修订后约年薪 NZD 200,000）可能限制部分员工提出不正当解雇/不利益个人申诉，需按现行门槛核验。", "A high-income threshold (around NZD 200,000 after the reforms) may bar some dismissal/disadvantage grievances. Verify the current figure.")
      ],
      probation: [
        L("90日 trial period：须书面、开工前签署、给合理机会咨询独立意见、仅适用于未曾为该雇主工作过的新员工。", "90-day trial: in writing, signed before work starts, reasonable chance to take advice, only for genuine new employees."),
        L("有效试用期解雇：员工通常不能就该解雇提不正当解雇个人申诉；2026年2月21日起，也不能把同一解雇改包装成与解雇相关的不正当不利益。", "A valid trial dismissal generally bars an unjustified-dismissal grievance; from 21 Feb 2026 it also bars recasting the same dismissal as related unjustified disadvantage."),
        L("仍须按协议给予通知（严重不当行为除外）。通知必须在90日内发出。", "Notice in the agreement is still due (except serious misconduct). Notice must be given within the 90 days."),
        L("条款稍有瑕疵（先开工后签字、未提试用期、通知错误）试用期即失效，恢复完整公正程序要求。", "A technical defect (started work before signing, clause omitted, wrong notice) voids the trial and restores full process.")
      ],
      discipline: [
        L("轻微违纪：警告、调查、给解释机会。", "Minor misconduct: warn, investigate, hear the explanation."),
        L("严重不当行为：可即时解雇，但仍通常需要充分调查与听员工陈述。", "Serious misconduct may be summary, but a proper investigation and hearing are still expected."),
        L("诚信义务要求不误导、及时沟通。", "Good faith: no misleading conduct; be responsive and communicative."),
        L("解雇信理由应与调查结论一致。", "The dismissal letter must match the investigation findings.")
      ],
      dispute: L(
        "先向 Employment Relations Authority 提出个人申诉。调解是常见前置。救济包括复职、工资损失、伤害尊严赔偿。程序瑕疵即可能败诉。",
        "Personal grievances go to the Employment Relations Authority. Mediation is common. Remedies include reinstatement, lost wages and humiliation compensation. Process defects often lose the case."
      ),
      playbook: {
        redundancy: L(
          "重组文件 → 一对一咨询（非宣布决定）→ 考虑替代方案 → 书面决定+协议通知 → 协议若有 redundancy pay 必须支付。",
          "Restructuring paper → one-to-one consultation (not an announcement) → alternatives → written decision + contractual notice → pay redundancy if the agreement requires it."
        ),
        performance: L(
          "绩效会议纪要 → 改进计划 → 复核会 → 解雇前最后陈述。",
          "Performance meeting notes → improvement plan → review meeting → final comment before dismissal."
        ),
        probation: L(
          "开工前签好 trial clause → 90日内发通知 → 付足通知 → 不要另给“解雇理由”反而制造攻击点（仍须诚信、不可歧视）。",
          "Sign the trial clause before day one → give notice inside 90 days → pay notice → extra “reasons” can create attack points (still act in good faith; no discrimination)."
        ),
        discipline: L(
          "停职调查（按协议付薪）→ 指控信 → 会议 → 决定。严重不当行为才考虑即时解雇。",
          "Suspend pending investigation (pay per agreement) → allegation letter → meeting → decision. Reserve summary dismissal for serious misconduct."
        )
      }
    },
    {
      id: "my",
      name: L("马来西亚", "Malaysia"),
      law: L("《1955年雇佣法令》Employment Act 1955、《1967年劳资关系法令》IRA、《1980年终止与停工福利条例》", "Employment Act 1955, Industrial Relations Act 1967, Employment (Termination and Lay-Off Benefits) Regulations 1980"),
      severance: L(
        "终止/停工福利（通常要求连续服务满12个月）：<2年=每年10天工资；2–<5年=每年15天；≥5年=每年20天（不足年按月比例）。违纪解雇、辞职、退休届龄等除外。2023年起部分条文对月薪>RM4,000 的雇员仍有适用范围限制，须核对第一附表。",
        "Termination/lay-off benefits (usually after 12 months): 10 days/year if <2 years; 15 days for 2–<5; 20 days for 5+ (pro rata). Excludes misconduct, resignation, retirement. From 2023 some provisions still have scope limits for employees above RM4,000 — check the First Schedule."
      ),
      notice: L(
        "合同约定且双方对等。无书面约定则法定：<2年=4周；2–<5年=6周；≥5年=8周。可支付赔偿金代替通知。",
        "Contractual and mutual. If silent: <2 years = 4 weeks; 2–<5 = 6 weeks; 5+ = 8 weeks. Indemnity in lieu is allowed."
      ),
      summary: L(
        "通知终止仍可能构成“无正当理由或借口的解雇”。工业法庭审查实质公正与程序公正。试用期员工同样受保护。",
        "Termination on notice can still be dismissal without just cause or excuse. The Industrial Court tests both substance and procedure. Probationers are protected too."
      ),
      sources: [
        { label: L("JTKSM 裁员 FAQ", "JTKSM retrenchment FAQ"), href: "https://jtksm.mohr.gov.my/en/frequently-asked-questions/employees-retrenchment" }
      ],
      redundancy: [
        L("裁员须有真实冗员/重组/关闭业务等商业理由，并遵循 LIFO 或合理客观标准，避免针对工会/怀孕等。", "Need a genuine commercial reason (surplus, restructure, closure) and LIFO or other objective criteria — not union or pregnancy targeting."),
        L("实务 Code of Conduct for Industrial Harmony：尽量提前通知、与工会协商、协助再就业。", "Code of Conduct for Industrial Harmony: early notice, union consultation, outplacement."),
        L("符合资格者支付不低于 10/15/20 天年资阶梯的终止福利。", "Eligible staff: at least the 10/15/20-day scale."),
        L("终止福利须于终止后7日内支付，并书面说明计算方法。", "Pay benefits within 7 days and put the calculation in writing."),
        L("外籍员工、合同工同样可能提出不当解雇，不能只发通知了事。", "Foreign and contract staff may still claim unfair dismissal; notice alone is not enough.")
      ],
      performance: [
        L("绩效解雇必须证明：标准已知悉、已被警告、获合理改进机会、仍不达标。", "A performance dismissal must show known standards, warnings, a fair chance to improve, and continued failure."),
        L("PIP 在工业法庭是关键证据。", "A PIP is key evidence in the Industrial Court."),
        L("仅以“合同通知条款”终止高绩效争议员工，败诉风险高。", "Relying only on a notice clause for a contested performance case is high-risk.")
      ],
      probation: [
        L("试用期员工仍受“正当理由或借口”保护；不获转正=解雇。", "Probationers still have just-cause protection; non-confirmation is a dismissal."),
        L("应在试用期内告知不足并给予改进；到期前作出确认或延长或终止。", "Flag shortcomings during probation and allow improvement; confirm, extend or terminate before expiry."),
        L("默示转正：试用期满后仍当正式员工对待、发放仅正式员工享有的福利，可能被认定已转正。", "Implied confirmation: treating the person as confirmed and paying confirmed-only benefits after expiry can lock in confirmation."),
        L("试用期员工若不当解雇，回补工资上限一般为12个月（正式员工可达24个月，IRA 附表）。", "Unfairly dismissed probationers: backwages generally capped at 12 months (24 months for confirmed staff under the IRA schedule).")
      ],
      discipline: [
        L("第14条：因不当行为解雇前必须 due inquiry。可解雇、降级或其他较轻处分；无薪停职不超过2周。", "s.14: due inquiry before a misconduct dismissal. Options: dismiss, downgrade or lesser penalty; unpaid suspension max 2 weeks."),
        L("调查停职不超过2周，期间至少发半薪；查无违纪须补回。", "Investigatory suspension max 2 weeks at not less than half pay; restore pay if no misconduct."),
        L("指控须具体，给予书面通知和答辩机会，调查人与决定人尽量分离。", "Particulars in writing, a chance to be heard, and separate investigator and decision-maker where possible."),
        L("未经正当调查的违纪解雇极易在工业法庭败诉。", "Misconduct dismissal without due inquiry often fails in the Industrial Court.")
      ],
      dispute: L(
        "IRA 第20条：解雇后60日内向工业关系署提出陈述，可转介工业法庭。救济包括复职或背薪。",
        "IRA s.20: representations to the Industrial Relations Department within 60 days of dismissal, with possible referral to the Industrial Court. Remedies include reinstatement or backwages."
      ),
      playbook: {
        redundancy: L(
          "商业理由文件 → 筛选标准（慎用主观绩效混入）→ 通知与协商 → 10/15/20 天测算 → 7日内付款。",
          "Business-case paper → objective selection (do not smuggle in subjective performance) → notice and consult → cost 10/15/20 days → pay within 7 days."
        ),
        performance: L(
          "警告+PIP → 中期复核 → 终止会议 → 通知或代通知金 + 若属终止（非违纪）则考虑终止福利资格。",
          "Warning + PIP → mid-point review → termination meeting → notice or indemnity + termination benefits if it is a non-misconduct termination."
        ),
        probation: L(
          "书面标准 → 期中警告 → 到期决定 → 避免期满后不发确认信却继续用工。",
          "Written standards → mid-probation warning → decide by expiry → do not keep working the person with no confirmation letter after expiry."
        ),
        discipline: L(
          "show cause letter → due inquiry → 处分等级匹配 → 严重才即时解雇且不付终止福利。",
          "Show-cause letter → due inquiry → penalty must fit the act → only serious cases are summary, with no termination benefits."
        )
      }
    },
    {
      id: "th",
      name: L("泰国", "Thailand"),
      law: L("《劳动保护法》B.E. 2541（Labour Protection Act）、《民法典》、劳动法院实践", "Labour Protection Act B.E. 2541, Civil and Commercial Code, labour-court practice"),
      severance: L(
        "非第119条事由终止且连续工作满120天：120天–<1年=30天工资；1–<3年=90天；3–<6年=180天；6–<10年=240天；10–<20年=300天；≥20年=400天。",
        "If not a s.119 ground and 120+ days’ service: 30 days (120 days–<1 year); 90 (1–<3); 180 (3–<6); 240 (6–<10); 300 (10–<20); 400 (20+ years)."
      ),
      notice: L(
        "无固定期限合同：须在任一发薪日或之前书面通知，于下一个发薪日生效（通常一个薪资周期，最长不超过3个月）。可支付至终止日的工资以立即终止。固定期限合同到期一般无需预告。",
        "Indefinite contracts: written notice on or before a payday, effective on the next payday (usually one pay cycle, max 3 months). Pay through the effective date to terminate immediately. Fixed-term expiry generally needs no notice."
      ),
      summary: L(
        "无过失终止成本清晰（通知+法定遣散费）。违纪解雇只有符合第119条且即时书面说明理由才能免通知和遣散费。",
        "No-fault exits have a clear price (notice + statutory severance). Misconduct skips notice and severance only if it fits s.119 and the reason is stated in writing at termination."
      ),
      sources: [
        { label: L("劳动保护法文本", "Labour Protection Act text"), href: "https://faolex.fao.org/docs/pdf/tha220781.pdf" }
      ],
      redundancy: [
        L("一般裁员：预告+第118条遣散费。无单独“经济性裁员审批”，但须避免不公平解雇。", "Ordinary redundancy: notice + s.118 severance. No separate mass-layoff approval, but unfair dismissal still applies."),
        L("因新机器/技术导致组织、生产、销售或服务改进而裁员：至少提前60日通知劳工检查员及员工姓名名单；未按时通知须额外支付相当于60日工资的特别补偿（在法定遣散费之外）。", "Technology/machinery restructuring: at least 60 days’ notice to the labour inspector and named employees; late notice means extra 60 days’ special severance on top of statutory severance."),
        L("选择标准应合理，注意劳动法院对不公平解雇的补偿。", "Use reasonable selection criteria; labour courts may still award unfair-dismissal compensation."),
        L("遣散费须在终止时支付。", "Severance is due at termination.")
      ],
      performance: [
        L("绩效不佳通常不构成第119条，故需通知+遣散费。", "Poor performance is usually not s.119, so notice + severance are due."),
        L("若要以违纪（不遵守工作规则）解雇，一般须先书面警告，除非情节严重。", "To dismiss for rule breach, a prior written warning is generally required unless the case is serious."),
        L("不公平解雇即使付了法定遣散费，劳动法院仍可能判决额外赔偿。", "Paying statutory severance does not block extra unfair-dismissal damages.")
      ],
      probation: [
        L("法律不规定试用期上限；试用期合同仍视为不定期合同。", "No statutory maximum. A probation contract is still an indefinite contract."),
        L("实务上常将试用期设为不超过119天，因为满120天即产生最低30天遣散费。", "Practice keeps probation at 119 days or less, because 120 days triggers 30 days’ severance."),
        L("试用期内终止仍要依法预告或支付代通知，除非符合第119条。", "Even during probation, give notice or pay in lieu unless s.119 applies."),
        L("不要在第120天当天才终止以规避遣散费。", "Do not terminate on day 120 to dodge severance.")
      ],
      discipline: [
        L("第119条免遣散费（通常也即时）：不诚实或故意损害雇主；故意造成损害；重大过失致严重损害；违反正当工作规则且已书面警告（严重者可不经警告）；无正当理由连续旷工3日；确定判决监禁（过失/轻罪须造成雇主损害）。", "s.119 (no severance, usually immediate): dishonesty or intentional harm; wilful damage; gross negligence causing serious damage; breach of just work rules after written warning (unless serious); 3 consecutive days’ unauthorised absence; final imprisonment (negligence/petty offences must harm the employer)."),
        L("终止时必须书面载明第119条理由，事后补理由往往无效。", "State the s.119 ground in writing at termination; adding reasons later often fails."),
        L("警告书有效期等细节按法律与工作规则（书面警告通常自违纪日起不超过一年等规定需核对现行条文）。", "Warning validity and other details follow the Act and work rules (e.g. written warnings often limited to one year — check the current text).")
      ],
      dispute: L(
        "劳动法院可审查不公平解雇。法定遣散费是下限，不是“付完就无风险”。工会与雇员委员会在某些裁员场景需要沟通。",
        "Labour courts review unfair dismissal. Statutory severance is a floor, not a clean exit. Unions and employee committees may need to be engaged on some redundancies."
      ),
      playbook: {
        redundancy: L(
          "区分普通裁员与技术改进裁员（60日报告）→ 计算 30–400 天 → 在发薪日节点发预告或支付代替 → 当日结清遣散费。",
          "Ordinary vs technology redundancy (60-day report) → cost 30–400 days → notice on a payday or pay in lieu → pay severance on the day."
        ),
        performance: L(
          "预算通知+遣散费 → 如走规则违反须先警告 → 评估不公平解雇额外风险。",
          "Budget notice + severance → warn first if relying on a rule breach → price unfair-dismissal upside."
        ),
        probation: L(
          "119天前决定 → 仍给预告或代通知 → 满120天立即适用30天遣散费。",
          "Decide before day 119 → still give notice or pay in lieu → day 120 triggers 30 days’ severance."
        ),
        discipline: L(
          "对号入座第119条 → 终止信当场写明条款与事实 → 证据不足则改为有偿终止。",
          "Fit s.119 exactly → put the section and facts in the termination letter → if evidence is thin, pay to exit instead."
        )
      }
    }
  ],
  matrix: [
    {
      dim: L("主要法律", "Main statute"),
      cn: L("劳动合同法", "Labour Contract Law"),
      hk: L("雇佣条例 Cap.57", "Employment Ordinance Cap.57"),
      sg: L("雇佣法令 1968", "Employment Act 1968"),
      au: L("公平工作法 2009", "Fair Work Act 2009"),
      nz: L("雇佣关系法 2000", "Employment Relations Act 2000"),
      my: L("雇佣法令 1955 + IRA 1967", "Employment Act 1955 + IRA 1967"),
      th: L("劳动保护法 B.E.2541", "Labour Protection Act B.E.2541")
    },
    {
      dim: L("法定遣散费", "Statutory severance"),
      cn: L("N（1个月/年；高薪3倍×12年封顶）", "N (1 month/year; high-earner 3× × 12-year cap)"),
      hk: L("有：满24个月裁员，2/3月薪×年资（上限22,500/月、总额390,000）", "Yes: 24 months + redundancy; 2/3 month × years (cap 22,500/month, 390,000 total)"),
      sg: L("无强制；MOM 指引满2年约2周–1个月/年", "No mandate; MOM guide ~2 weeks–1 month/year after 2 years"),
      au: L("有 NES 年资阶梯（满1年；小企业通常除外）", "Yes, NES scale (12 months; small business usually excluded)"),
      nz: L("无法定；看协议/协商", "None statutory; contract/negotiation"),
      my: L("有：满12个月，10/15/20天/年", "Yes: 12 months, 10/15/20 days/year"),
      th: L("有：满120天，30–400天工资", "Yes: 120 days, 30–400 days’ wages")
    },
    {
      dim: L("通知期", "Notice"),
      cn: L("30天或1个月代通知金", "30 days or 1 month in lieu"),
      hk: L("首月可0；其后≥7天，无约定通常1个月", "Month 1: 0; then ≥7 days, often 1 month if silent"),
      sg: L("约定优先，否则1天–4周", "Contract first, else 1 day–4 weeks"),
      au: L("1–4周，45岁且≥2年+1周", "1–4 weeks; +1 week if 45+ and 2+ years"),
      nz: L("协议或合理通知", "Agreement or reasonable notice"),
      my: L("约定或4/6/8周", "Contract or 4/6/8 weeks"),
      th: L("通常1个薪资期（≤3个月）", "Usually 1 pay period (max 3 months)")
    },
    {
      risk: true,
      dim: L("绩效解除难度", "Performance-exit difficulty"),
      cn: L("高", "High"),
      hk: L("低", "Low"),
      sg: L("中", "Medium"),
      au: L("中高", "Medium-high"),
      nz: L("中", "Medium"),
      my: L("中", "Medium"),
      th: L("中", "Medium")
    },
    {
      risk: true,
      dim: L("违纪解除难度", "Misconduct-exit difficulty"),
      cn: L("高", "High"),
      hk: L("低-中", "Low–medium"),
      sg: L("中", "Medium"),
      au: L("中", "Medium"),
      nz: L("中", "Medium"),
      my: L("中", "Medium"),
      th: L("中", "Medium")
    },
    {
      risk: true,
      dim: L("仲裁/诉讼风险", "Arbitration / litigation risk"),
      cn: L("极高", "Very high"),
      hk: L("低", "Low"),
      sg: L("中", "Medium"),
      au: L("中高", "Medium-high"),
      nz: L("中", "Medium"),
      my: L("中", "Medium"),
      th: L("中低", "Medium-low")
    },
    {
      dim: L("是否必须法定事由", "Statutory cause required?"),
      cn: L("是（39/40/41条）", "Yes (Arts. 39/40/41)"),
      hk: L("否（通知即可）", "No (notice suffices)"),
      sg: L("通知可终止，但可被诉不当解雇", "Notice works, but wrongful dismissal can be claimed"),
      au: L("否，但不公平解雇审查理由+程序", "No, but unfair dismissal tests reason + process"),
      nz: L("须通过公正解雇检验", "Must pass the justification test"),
      my: L("须有正当理由或借口", "Just cause or excuse required"),
      th: L("无过失可终止但须付遣散费", "No-fault exit allowed if severance is paid")
    },
    {
      dim: L("违法解除代价", "Cost of unlawful dismissal"),
      cn: L("继续履行或 2N", "Reinstatement or 2N"),
      hk: L("代通知金、不合理解雇补偿、歧视赔偿", "Pay in lieu, unreasonable-dismissal awards, discrimination"),
      sg: L("ECT 补偿（通常非强制恢复）", "ECT compensation (reinstatement rare)"),
      au: L("复职/赔偿；一般保护可含惩罚", "Reinstatement/compensation; general protections may add penalties"),
      nz: L("复职、工资、尊严赔偿", "Reinstatement, wages, humiliation damages"),
      my: L("复职或最多24个月背薪", "Reinstatement or up to 24 months’ backwages"),
      th: L("法定遣散费 + 不公平解雇额外赔偿", "Statutory severance + unfair-dismissal extras")
    }
  ],
  cases: [
    {
      id: "redundancy",
      name: L("裁员项目", "Redundancy"),
      intro: L(
        "先定性是不是“岗位消失/业务收缩”，再走各地法定程序和补偿。用裁员包装绩效或违纪，在澳新马新西兰和马来西亚尤其危险。",
        "First decide whether the role truly disappears. Then run each market’s process and pay. Dressing performance or misconduct as redundancy is especially risky in Australia, New Zealand and Malaysia."
      ),
      steps: [
        L("冻结招聘并画清组织图：哪些岗位永久取消，哪些人可调岗。", "Freeze hiring and map the org chart: which roles end permanently, who can be redeployed."),
        L("拉出保护名单：孕产、工伤、医疗期、工会代表、高年资等。", "List protected people: pregnancy, injury, medical period, union reps, long service."),
        L("按国家拆预算：法定补偿 + 通知/代通知 + 协议溢价 + 律师/沟通成本。", "Budget by country: statutory pay + notice/in lieu + deal premium + counsel/comms."),
        L("程序先于谈话：中国报备、新加坡 MOM 通知、澳洲咨询、新西兰提案反馈、泰国技术裁员60日报告。", "Process before conversations: China filing, Singapore MOM notice, Australia consultation, New Zealand proposal/feedback, Thailand 60-day tech-redundancy report."),
        L("统一口径的书面 pack：时间线、筛选标准、协议、FAQ、经理话术。", "One written pack: timeline, selection criteria, agreements, FAQ, manager scripts."),
        L("签约与付款节点当地化，避免“先走人后算钱”。", "Localise signing and payment dates. Do not let people leave before money is calculated.")
      ]
    },
    {
      id: "performance",
      name: L("绩效问题员工解除", "Performance exit"),
      intro: L(
        "内地必须走不能胜任的培训/调岗闭环。香港相对灵活。澳新马泰更看“是否给过公平机会”。",
        "Mainland China requires the incompetence → train/redeploy loop. Hong Kong is more flexible. Australia, New Zealand, Malaysia and Thailand focus on whether a fair chance was given."
      ),
      steps: [
        L("把岗位标准、KPI、制度送达证据找齐，没有标准就先补标准再考核。", "Gather JD, KPIs and proof that rules were served. If there is no standard, set one before rating."),
        L("一次差评不够：安排 PIP，目标少而可验证，周期合理（常见 4–12 周）。", "One poor rating is not enough: run a PIP with few measurable goals over 4–12 weeks."),
        L("过程留痕：会议纪要、邮件、辅导、员工签字或送达。", "Leave a trail: minutes, email, coaching, signature or proof of service."),
        L("评估保护期与医疗/心理疾病因素，必要时暂停 PIP。", "Check protection periods and medical/mental-health issues; pause the PIP if needed."),
        L("优先协商解除（尤其是中国）；其他地区也可用 package 换结案与保密。", "Prefer mutual separation (especially in China); elsewhere a package can buy closure and confidentiality."),
        L("解雇信只写已证实的事实，不写情绪化评价。", "The letter states proven facts only, not emotional commentary.")
      ]
    },
    {
      id: "probation",
      name: L("试用期", "Probation"),
      intro: L(
        "试用期降低的是举证难度或诉讼门槛，不是“任意解雇”。新西兰 90 日条款极严；泰国 120 天触发遣散费；香港首月最灵活。",
        "Probation lowers the proof or claim threshold; it is not at-will. New Zealand’s 90-day clause is strict; Thailand’s 120-day mark triggers severance; Hong Kong’s first month is the most flexible."
      ),
      steps: [
        L("入职前写清录用条件/转正标准，香港以外尽量开工前签完合同。", "Write hire/confirmation standards before start. Outside Hong Kong, sign before day one."),
        L("日记式收集事例，避免到期当天才找材料。", "Keep a running log of examples. Do not hunt for files on the last day."),
        L("核对通知规则：中国3日（员工）/用人单位需法定事由；香港首月可0；澳试用也要1周；新西兰通知必须落在90日内。", "Check notice: China employee 3 days / employer still needs a ground; Hong Kong month 1 can be zero; Australia still 1 week; New Zealand notice must fall inside 90 days."),
        L("不要用延长试用期去规避已到期的法定保护（尤其澳洲最低雇佣期）。", "Do not extend probation to dodge protections that have already accrued (especially Australia’s minimum employment period)."),
        L("不通过时书面对照“哪一条录用条件未满足”。", "On a fail, map the letter to the exact unmet hire condition.")
      ]
    },
    {
      id: "discipline",
      name: L("违纪处理", "Misconduct"),
      intro: L(
        "即时解雇是高风险工具。新加坡、马来西亚强调 due inquiry；中国强调民主公示的规章制度；泰国必须在解雇信写明第119条。",
        "Summary dismissal is a high-risk tool. Singapore and Malaysia insist on due inquiry; China insists on democratically adopted, published rules; Thailand requires s.119 in the termination letter."
      ),
      steps: [
        L("保全证据：系统日志、门禁、邮件、CCTV、客户投诉，先于对质。", "Preserve evidence first: logs, access, email, CCTV, customer complaints — before confrontation."),
        L("对照制度条款，确认制度合法制定并已公示（中国尤其关键）。", "Map the rule. Confirm it was lawfully made and published (critical in China)."),
        L("调查与决策分离；给员工书面指控和答辩机会。", "Separate investigator and decision-maker; give written allegations and a chance to respond."),
        L("处分阶梯：警告→严重警告→解雇。小过错直接解除常被改判。", "Escalate: warning → final warning → dismissal. Jumping from a small fault often gets overturned."),
        L("只有欺诈、暴力、严重违抗、刑事等才评估即时解雇。", "Reserve summary dismissal for fraud, violence, serious insubordination or crime."),
        L("理由一次性说清；中国、泰国都忌事后更换解除依据。", "State the reason once. China and Thailand both penalise swapping grounds later.")
      ]
    }
  ]
};

window.ER_HUB_LINKS = [
  {
    title: L("劳动法 & HR 办案指南", "Labor law & HR practice"),
    desc: L("十地详策 · 官方索引 · 14 国向导（当前）", "10-market desk · sources · 14-country tools (you are here)"),
    href: "https://roqianebay.github.io/apac-labor-hr-practice/",
    current: true
  },
  {
    title: L("ER News V2.0", "ER News V2.0"),
    desc: L("裁员、补偿、企业 ER 动态与来源链接", "Layoffs, severance, ER news with source links"),
    href: "https://roqianebay.github.io/apac-ta-employer-monitor/"
  },
  {
    title: L("Talent Employer Monitor", "Talent Employer Monitor"),
    desc: L("原版 Talent / 雇主政策监测", "Original Talent & employer policy monitor"),
    href: "https://roqianebay.github.io/apac-ta-employer-policy-monitor/"
  },
  {
    title: L("政府政策 Monitor", "Government policy monitor"),
    desc: L("亚太政府劳动与就业政策追踪", "APAC government labour & employment tracking"),
    href: "https://roqianebay.github.io/apac-policy-monitor/"
  }
];
