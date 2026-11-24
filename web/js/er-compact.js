function L(zh, en) {
  return { zh, en };
}

Object.assign(window.ER_UI, {
  brand: L("APAC ER process and labor law", "APAC ER process and labor law"),
  title: L("APAC ER process and labor law", "APAC ER process and labor law"),
  kicker: L("APAC ER process and labor law", "APAC ER process and labor law"),
  h1: L("亚太区域各国裁员、绩效解除、试用期、违纪流程。", "APAC processes for redundancy, performance exits, probation, and misconduct."),
  lede: L(
    "上方对照表看差异。下方点国家标签，只显示该国的裁员、绩效、试用期、违纪政策与流程图。",
    "Use the matrix for differences. Then pick a country tab to see only that market’s redundancy, performance, probation and misconduct flows."
  ),
  navCompare: L("七地对照", "Matrix"),
  navCountries: L("国家政策", "Country desk"),
  compareH2: L("十地对照表", "Ten-market matrix"),
  compareSub: L("先看规则、补偿、通知和红线。点表头国家名可跳详策；更多市场见 #tools。", "Scan rule, pay, notice and red lines. Click a header for that desk; more markets in #tools."),
  countriesH2: L("按国家查看政策与流程", "Policies and flows by country"),
  countriesSub: L("每次只打开一个国家。先看红线，再选案件类型看流程图。", "One country at a time. Read the red line, then pick a case type for its flowchart."),
  flowCountry: L("本国流程", "Local flow"),
  casePolicy: L("本案政策要点", "Policy for this case"),
  pickCountry: L("选择国家", "Choose a country"),
  firstMove: L("第一动作", "Do first"),
  redline: L("红线", "Red line"),
  moreDetail: L("展开法律细则", "Open legal notes"),
  footer: L("V2 内部对照 · 中/英切换会记住语言 · 不构成法律意见。", "V2 internal desk · language is remembered · not legal advice."),
  yes: L("是", "Yes"),
  no: L("否", "No")
});

window.ER_COMPACT = {
  snapshot: {
    cn: {
      rule: L("法定事由才能解除", "Cause required"),
      pay: L("N / 违法 2N", "N / 2N if unlawful"),
      risk: "high",
      riskLabel: L("极高", "Very high")
    },
    hk: {
      rule: L("通知即可结束", "Exit on notice"),
      pay: L("满24个月裁员才有SP", "SP if 24 mo + redundancy"),
      risk: "low",
      riskLabel: L("低", "Low")
    },
    sg: {
      rule: L("通知可走，但可诉不当解雇", "Notice yes; wrongful-dismissal risk"),
      pay: L("裁员补偿无强制", "No mandatory retrenchment pay"),
      risk: "mid",
      riskLabel: L("中", "Medium")
    },
    au: {
      rule: L("理由 + 公正程序", "Valid reason + fair process"),
      pay: L("NES 裁员阶梯（小企业多除外）", "NES redundancy scale"),
      risk: "high",
      riskLabel: L("中高", "Medium-high")
    },
    nz: {
      rule: L("诚信 + 公正解雇检验", "Good faith + justification"),
      pay: L("无法定裁员补偿", "No statutory redundancy pay"),
      risk: "mid",
      riskLabel: L("中", "Medium")
    },
    my: {
      rule: L("须有正当理由或借口", "Just cause or excuse"),
      pay: L("10/15/20天/年", "10/15/20 days per year"),
      risk: "mid",
      riskLabel: L("中", "Medium")
    },
    th: {
      rule: L("无过失可走，但要付钱", "No-fault OK if you pay"),
      pay: L("满120天：30–400天", "120 days: 30–400 days’ pay"),
      risk: "mid",
      riskLabel: L("中低", "Medium-low")
    }
  },
  countries: {
    cn: {
      first: L("能协商就协商。单方解除必须对上第39/40/41条。", "Settle if you can. Unilateral exit must fit Arts. 39/40/41."),
      redline: L("没有法定事由、保护期内、制度未公示，不要解除。", "No statutory ground, protected period, or unpublished rules: do not dismiss."),
      payShort: L("N；违法继续履行或 2N", "N; if unlawful: reinstatement or 2N"),
      noticeShort: L("无过失 30天或代通知金", "No-fault: 30 days or pay in lieu")
    },
    hk: {
      first: L("核对通知期；满24个月先判断是不是裁员。", "Check notice. If 24+ months, is this redundancy?"),
      redline: L("不要在产假/工伤假等保护情形下解雇；即时解雇证据不足会变代通知金。", "Do not dismiss in protected situations (maternity, injury leave). Weak summary dismissal becomes pay in lieu."),
      payShort: L("裁员SP：2/3月薪×年资", "Redundancy SP: 2/3 month × years"),
      noticeShort: L("首月可0，其后至少7天", "Month 1: 0; then ≥7 days")
    },
    sg: {
      first: L("裁员先定性并在5个工作日内报 MOM（≥10人雇主）。", "If retrenchment, file MOM within 5 working days (10+ employer)."),
      redline: L("违纪即时解雇必须 due inquiry，不能只付代通知金了事。", "Summary misconduct needs due inquiry — paying in lieu is not enough."),
      payShort: L("惯例 2周–1个月/年（满2年）", "Norm: 2 weeks–1 month/year after 2 years"),
      noticeShort: L("约定优先，否则 1天–4周", "Contract first, else 1 day–4 weeks")
    },
    au: {
      first: L("先看最低雇佣期过没过（通常6个月）。过了就必须走公正程序。", "Has the minimum period passed (usually 6 months)? If yes, run a fair process."),
      redline: L("一般保护从入职第一天就有。不要在投诉/请假后立刻解雇。试用期也要给通知。", "General protections from day one. Do not dismiss after a complaint or leave. Probation still needs notice."),
      payShort: L("裁员：满1年 NES 阶梯", "Redundancy: NES scale after 1 year"),
      noticeShort: L("1–4周；45岁且满2年 +1周", "1–4 weeks; +1 if 45+ and 2+ years")
    },
    nz: {
      first: L("裁员先提案咨询，不要先内定名单。试用期必须开工前签好。", "Redundancy: consult on a proposal — do not pre-pick names. Trial clauses must be signed before day one."),
      redline: L("先决定再补程序=不正当解雇。90日条款稍有瑕疵即失效。", "Decide-then-consult is unjustified dismissal. A defective 90-day clause voids the trial."),
      payShort: L("看协议，无法定最低", "Contract only; no statutory minimum"),
      noticeShort: L("协议或合理通知", "Agreement or reasonable notice")
    },
    my: {
      first: L("绩效/违纪先警告或 due inquiry。不要只靠合同通知条款。", "Performance/misconduct: warn or hold due inquiry. A notice clause is not enough."),
      redline: L("不获转正也是解雇。60日内可进工业法庭。", "Non-confirmation is still a dismissal. 60 days to the Industrial Court."),
      payShort: L("满12个月：10/15/20天/年", "After 12 months: 10/15/20 days/year"),
      noticeShort: L("约定或 4/6/8周", "Contract or 4/6/8 weeks")
    },
    th: {
      first: L("先算满没满120天。无过失路径=通知+遣散费。", "Have they hit 120 days? No-fault path = notice + severance."),
      redline: L("第119条必须写在终止信上。不要在第120天当天规避遣散费。", "s.119 must be in the termination letter. Do not terminate on day 120 to dodge severance."),
      payShort: L("120天起 30–400天工资", "From 120 days: 30–400 days’ wages"),
      noticeShort: L("通常一个发薪周期", "Usually one pay cycle")
    }
  },
  cases: {
    redundancy: {
      headline: L("岗位必须真正消失。", "The job must actually disappear."),
      steps: [
        L("画组织图：哪些岗永久取消，谁可调岗。", "Map roles that end for good, and who can move."),
        L("剔除保护对象后再谈人。", "Remove protected people before naming anyone."),
        L("先走当地法定程序，再个别谈话。", "Run the local statutory process before 1:1s."),
        L("通知+补偿按该国公式一次算清。", "Price notice + pay on that country’s formula in one go.")
      ]
    },
    performance: {
      headline: L("一次差评不能走人。", "One poor rating is not an exit."),
      steps: [
        L("先有送达过的岗位标准和KPI。", "You need served job standards and KPIs."),
        L("给改进机会（PIP / 培训调岗）。", "Give a real chance (PIP / train or redeploy)."),
        L("中国优先协商；其他地区也可用 package。", "In China, settle first; elsewhere a package still helps."),
        L("解雇信只写已证实的事实。", "The letter states proven facts only.")
      ]
    },
    probation: {
      headline: L("试用期不是任意解雇。", "Probation is not at-will."),
      steps: [
        L("核对还在不在当地“窗口期”。", "Check you are still inside the local window."),
        L("对照入职时的录用/转正条件。", "Map facts to hire/confirmation conditions."),
        L("按该国通知规则发出。", "Give whatever notice that country requires."),
        L("信里写清未满足哪一条，勿写“表现不佳”。", "Cite the unmet condition — not “poor performance”.")
      ]
    },
    discipline: {
      headline: L("即时解雇是例外，不是默认。", "Summary dismissal is the exception."),
      steps: [
        L("先固证，再对质。", "Lock evidence before confrontation."),
        L("条款必须对得上已公示制度。", "The act must match a published rule."),
        L("调查、书面指控、给答辩。", "Investigate, put allegations in writing, hear them."),
        L("小过错走警告；理由只能说一次。", "Small faults get a warning. State the reason once.")
      ]
    }
  },
  genericFlows: {
    redundancy: [
      { k: "start", t: L("岗位还需要吗？", "Is the role still needed?") },
      { k: "decision", t: L("是针对个人表现吗？", "Is this really about one person’s performance?"), yes: L("改走绩效/违纪", "Use performance / misconduct instead"), no: L("确认为裁员", "Treat as redundancy") },
      { k: "process", t: L("列出保护名单并排除", "List and exclude protected staff") },
      { k: "process", t: L("走该国法定程序（报备/咨询/通知）", "Run local process (file / consult / notify)") },
      { k: "pay", t: L("支付通知 + 法定/惯例补偿", "Pay notice + statutory or market severance") }
    ],
    performance: [
      { k: "start", t: L("标准和KPI送达了吗？", "Were standards and KPIs served?") },
      { k: "decision", t: L("给过改进机会吗？", "Was a real improvement chance given?"), yes: L("进入解除评估", "Move to exit assessment"), no: L("先PIP / 培训调岗", "PIP / train or redeploy first") },
      { k: "process", t: L("二次考核仍不达标", "Still fails after the second review") },
      { k: "decision", t: L("能协商解除吗？", "Can you settle?"), yes: L("签协议走人（通常仍要付钱）", "Mutual exit (usually still paid)"), no: L("按该国法定路径解除", "Dismiss on the local statutory path") }
    ],
    probation: [
      { k: "start", t: L("仍在试用/最低雇佣窗口内？", "Still inside probation / minimum period?") },
      { k: "process", t: L("对照录用条件收集事例", "Collect examples against hire conditions") },
      { k: "decision", t: L("条件写明并已送达？", "Were conditions written and served?"), yes: L("按通知规则终止", "Terminate on the notice rules"), no: L("补材料或改协商，勿硬辞", "Fix the file or settle — do not force it") },
      { k: "pay", t: L("结清工资；看该国是否触发遣散费", "Pay wages; check if severance has already triggered") }
    ],
    discipline: [
      { k: "start", t: L("证据已保全？", "Is evidence preserved?") },
      { k: "process", t: L("对照已公示条款", "Map to a published rule") },
      { k: "process", t: L("调查 + 书面指控 + 答辩", "Investigate + written charge + response") },
      { k: "decision", t: L("达到即时解雇门槛？", "Does it meet summary-dismissal level?"), yes: L("即时解除（仍要写对理由）", "Summary dismissal (reasons must be right)"), no: L("警告或通知解除", "Warn, or dismiss on notice") }
    ]
  },
  countryFlows: {
    redundancy: {
      cn: [L("核人数：20人或10%", "Headcount: 20 or 10%"), L("第42条保护名单", "Art. 42 protected list"), L("工会说明 + 报劳动局", "Union brief + labour bureau"), L("付 N，或改协商", "Pay N, or settle")],
      hk: [L("是否 redundancy？", "Is it redundancy?"), L("连续合约满24个月？", "24 months continuous?"), L("算 SP（LSP不可兼得）", "Cost SP (not plus LSP)"), L("通知或代通知金", "Notice or pay in lieu")],
      sg: [L("是否 retrenchment？", "Is it retrenchment?"), L("≥10人：5日内报 MOM", "10+ staff: MOM in 5 days"), L("惯例 2周–1个月/年", "Norm 2 weeks–1 month/year"), L("给足通知", "Give full notice")],
      au: [L("职位永久取消？", "Job gone for good?"), L("咨询 + 关联公司调岗", "Consult + redeploy search"), L("小企业/年资除外项", "Small-business / tenure carve-outs"), L("NES 通知 + 裁员补偿", "NES notice + redundancy pay")],
      nz: [L("重组提案（尚未决定）", "Proposal — not a decision"), L("一对一咨询、听反馈", "1:1 consult and hear feedback"), L("检索替代岗位", "Look for alternatives"), L("协议通知；协议有补偿就付", "Contract notice; pay if promised")],
      my: [L("真实商业理由", "Genuine commercial reason"), L("客观筛选，勿掺绩效", "Objective selection"), L("10/15/20天测算", "Cost 10/15/20 days"), L("7日内付款", "Pay within 7 days")],
      th: [L("普通裁员还是技术裁员？", "Ordinary vs technology cut?"), L("技术裁员：60日报告", "Tech cut: 60-day report"), L("30–400天遣散费", "30–400 days’ severance"), L("发薪日节点通知或代通知", "Notice on payday or pay in lieu")]
    },
    performance: {
      cn: [L("书面不能胜任", "Written incompetence"), L("培训或调岗", "Train or redeploy"), L("二次仍不胜任", "Fails again"), L("协商，或第40条+N", "Settle, or Art. 40 + N")],
      hk: [L("核对通知期", "Check notice"), L("PIP非必须", "PIP not mandatory"), L("准备“岗位仍在”证据", "Show the role still exists"), L("通知或代通知金", "Notice or pay in lieu")],
      sg: [L("KPI与警告", "KPIs and warnings"), L("PIP或直接通知", "PIP or notice"), L("付清通知", "Pay notice"), L("留正当理由卷宗", "Keep a just-cause file")],
      au: [L("过最低雇佣期？", "Minimum period passed?"), L("告知问题+改进机会", "Put issues + chance to improve"), L("允许陪同", "Allow a support person"), L("再决定解雇", "Then decide")],
      nz: [L("说明标准与差距", "State the standard and gap"), L("改进计划", "Improvement plan"), L("复核会", "Review meeting"), L("解雇前最后陈述", "Final comment before dismissal")],
      my: [L("警告", "Warning"), L("PIP", "PIP"), L("终止会议", "Termination meeting"), L("通知 + 可能的终止福利", "Notice + possible termination benefits")],
      th: [L("绩效通常不是第119条", "Poor performance is not s.119"), L("规则违反须先警告", "Rule breach: warn first"), L("通知+遣散费", "Notice + severance"), L("仍可能有不公平解雇赔偿", "Unfair-dismissal extras still possible")]
    },
    probation: {
      cn: [L("录用条件已送达", "Hire conditions served"), L("最长1/2/6个月", "Max 1 / 2 / 6 months"), L("证明不符合条件", "Prove conditions unmet"), L("一般无 N", "Usually no N")],
      hk: [L("是否首月？", "Month one?"), L("是：可当日终止", "Yes: same-day exit"), L("否：至少7天", "No: at least 7 days"), L("保护情形仍适用", "Protected situations still apply")],
      sg: [L("合同通知仍要给", "Contract notice still due"), L("试用期满≠合同消失", "Probation end ≠ contract end"), L("评估表写事例", "Appraisal with examples"), L("付通知", "Pay notice")],
      au: [L("试用≠零风险", "Probation ≠ zero risk"), L("通常仍要1周通知", "Usually 1 week’s notice"), L("一般保护第一天起算", "General protections from day one"), L("延长试用不能清零时钟", "Extending probation does not reset the clock")],
      nz: [L("开工前签 trial", "Sign trial before day one"), L("90日内发出通知", "Give notice inside 90 days"), L("付足通知", "Pay full notice"), L("条款瑕疵即失效", "A defective clause voids it")],
      my: [L("不获转正=解雇", "Non-confirmation = dismissal"), L("期内告知不足", "Flag gaps during probation"), L("到期前作出决定", "Decide before expiry"), L("勿默示转正", "Do not imply confirmation")],
      th: [L("试用仍是不定期合同", "Probation is still indefinite"), L("争取119天前决定", "Decide before day 119"), L("仍要预告或代通知", "Notice or pay in lieu still due"), L("满120天=至少30天遣散费", "Day 120 = at least 30 days’ severance")]
    },
    discipline: {
      cn: [L("制度民主公示", "Rules published via due process"), L("调查+申辩", "Investigate + hear them"), L("通知工会", "Notify the union"), L("对上第39条才可即时", "Summary only if Art. 39 fits")],
      hk: [L("是否第9条？", "Does s.9 apply?"), L("否：通知解雇", "No: dismiss on notice"), L("是：固定证据后即时", "Yes: summary with evidence"), L("即时不付 SP/LSP", "No SP/LSP on summary")],
      sg: [L("停职（通常半薪）", "Suspend (usually half pay)"), L("due inquiry", "Due inquiry"), L("即时或通知解除", "Summary or notice"), L("无聆讯勿以违纪为由走人", "No inquiry, don’t call it misconduct")],
      au: [L("是否 serious misconduct？", "Serious misconduct?"), L("仍要调查+回应", "Still investigate and hear"), L("严重才可无通知", "Only then skip notice"), L("应付工资年假仍要结", "Wages and leave still due")],
      nz: [L("充分调查", "Full investigation"), L("听员工陈述", "Hear the employee"), L("严重才可即时", "Summary only if serious"), L("信与调查结论一致", "Letter must match findings")],
      my: [L("show cause", "Show-cause letter"), L("due inquiry", "Due inquiry"), L("处分要匹配", "Penalty must fit"), L("未经调查极易败诉", "No inquiry often loses")],
      th: [L("对号入座第119条", "Fit s.119 exactly"), L("终止信当场写明", "Put it in the letter now"), L("否则改付通知+遣散费", "Else pay notice + severance"), L("事后补理由常无效", "Adding reasons later often fails")]
    }
  }
};

window.ER_MATRIX_V2 = [
  {
    dim: L("规则模式", "Rule type"),
    cn: L("必须法定事由", "Statutory cause"),
    hk: L("通知即可", "Notice is enough"),
    sg: L("通知可走，可诉不当解雇", "Notice; wrongful-dismissal risk"),
    au: L("理由+程序", "Reason + process"),
    nz: L("公正解雇检验", "Justification test"),
    my: L("正当理由或借口", "Just cause or excuse"),
    th: L("无过失可走但要付钱", "No-fault if you pay")
  },
  {
    dim: L("法定/惯例补偿", "Pay on exit"),
    cn: L("N；违法 2N", "N; 2N if unlawful"),
    hk: L("满24个月裁员才有SP", "SP after 24 mo redundancy"),
    sg: L("无强制；惯例2周–1个月/年", "No mandate; 2w–1m / year"),
    au: L("NES年资阶梯（小企业多除外）", "NES scale (small biz often out)"),
    nz: L("无法定", "None statutory"),
    my: L("10 / 15 / 20天/年", "10 / 15 / 20 days / year"),
    th: L("30–400天（满120天）", "30–400 days after 120 days")
  },
  {
    dim: L("通知", "Notice"),
    cn: L("30天或代通知金", "30 days or pay in lieu"),
    hk: L("首月0，其后≥7天", "Month 1: 0; then ≥7 days"),
    sg: L("1天–4周", "1 day–4 weeks"),
    au: L("1–4周（可+1周）", "1–4 weeks (maybe +1)"),
    nz: L("协议/合理通知", "Contract / reasonable"),
    my: L("4 / 6 / 8周", "4 / 6 / 8 weeks"),
    th: L("约1个薪资期", "About 1 pay period")
  },
  {
    risk: true,
    dim: L("办案风险", "Case risk"),
    cn: L("极高", "Very high"),
    hk: L("低", "Low"),
    sg: L("中", "Medium"),
    au: L("中高", "Medium-high"),
    nz: L("中", "Medium"),
    my: L("中", "Medium"),
    th: L("中低", "Medium-low")
  },
  {
    dim: L("最常见红线", "Top red line"),
    cn: L("无事由单方解除", "Unilateral exit with no ground"),
    hk: L("保护情形下解雇", "Dismissing in a protected situation"),
    sg: L("违纪不做聆讯", "Misconduct without inquiry"),
    au: L("过最低期却无程序", "Past minimum period, no process"),
    nz: L("先内定再咨询", "Decide, then consult"),
    my: L("只发通知当解雇", "Notice letter as the whole case"),
    th: L("第119条没写进信", "s.119 missing from the letter")
  }
];
