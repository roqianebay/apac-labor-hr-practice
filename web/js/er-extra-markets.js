(function () {
  if (!window.ER_DATA || !window.ER_COMPACT) return;

  const extraIds = ["jp", "kr", "in"];
  window.ER_DATA.colIds = window.ER_DATA.colIds.concat(extraIds);

  window.ER_DATA.jurisdictions.push(
    {
      id: "jp",
      name: L("日本", "Japan"),
      law: L("労働基準法、労働契約法、就業規則・判例", "Labor Standards Act, Labor Contract Act, work rules and case law"),
      severance: L(
        "无统一法定 N。退職金多由就業規則/労使協定约定；法定解雇は解雇予告30日前または平均賃金30日分の代金。",
        "No unified statutory N. Retirement pay is usually under work rules/CBA; lawful dismissal needs 30 days’ notice or 30 days’ average wages in lieu."
      ),
      notice: L(
        "解雇予告：原則30日前（労基法第20条）；代行可能。希望退職（退職願）は会社同意要。",
        "Dismissal: 30 days’ notice in principle (LSA s.20), or pay in lieu. Voluntary resignation (taishoku) needs agreement."
      ),
      summary: L(
        "正規解雇ハードル極高（合理性・必要性・相当性等）。実務は希望退職・契約満了・配置転換が主流。外国人は在留資格・社保脱退に注意。",
        "Formal dismissal is very hard (reasonableness, necessity, appropriateness). Practice favours voluntary exit, fixed-term expiry and redeployment. Mind visa and social insurance offboarding."
      ),
      sources: [
        { label: L("厚生労働省 — 雇用・労働", "MHLW employment"), href: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/index.html" },
        { label: L("解雇に関する指針", "Dismissal guidelines"), href: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/koyou/koyou_roudou_kisoku/index.html" }
      ],
      redundancy: [
        L("絞り込みや閉鎖時は人員整理計画・経営陣説明・工会（如有）— 随后多走希望退職窗口。", "Workforce reduction: plan, management brief, union if any — often a voluntary-exit window."),
        L("正規解雇を使う場合：就規・手続・证拠の四要件水準を満たすこと。", "If using formal dismissal: meet work-rule and judicial standards on process and evidence."),
        L("役割消滅でも「解雇＝最後手段」论证が要る。", "Even role elimination: dismissal must be the last resort."),
        L("退職金算定・源泉・社会保険・雇用保険離職票。", "Retirement pay, withholding, social/employment insurance separation.")
      ],
      performance: [
        L("能力差だけでは解雇理由になりにくい；就規の服務規律・警告・改善记录が要。", "Ability gap alone rarely suffices; need rules, warnings and improvement records."),
        L("PIP・配置転換・社内異動を先に検討。", "Consider PIP, redeployment and internal transfer first."),
        L("解雇予告30日または代金。", "30 days’ notice or pay in lieu."),
        L("外国人：在留資格の更新可否とタイムライン。", "Foreign nationals: visa renewal risk and timeline.")
      ],
      probation: [
        L("試用期間は就規で明示；解雇予告ルールは本採用と同様。", "Probation in work rules; notice rules apply like regular hire."),
        L("試用不適合も客观事由と记录を要。", "Failed probation still needs objective grounds and records."),
        L("契約期間・更新見込みを書面で。", "Contract term and renewal expectations in writing.")
      ],
      discipline: [
        L("就業規則の懲戒規定・手続（聴聞）を踏まえる。", "Follow disciplinary rules and hearing procedure in work rules."),
        L("即日解雇級は限定的（重大な背信・安全等）。", "Same-day dismissal only for narrow serious cases."),
        L("懲戒委員会・工会（如有）の手続を省かない。", "Do not skip disciplinary committee / union steps if required.")
      ],
      dispute: L(
        "労働審判・労働基準監督署。不当解雇で無効・損害賠償。会社都合退職と解雇の区別が争点になりやすい。",
        "Labour tribunal and labour standards office. Unfair dismissal: voidance and damages. Disputes often turn on company-requested exit vs dismissal."
      ),
      playbook: {
        redundancy: L("整理必要性→希望退職募集→個別交渉→退職金・社保→正規解雇は弁護士必須", "Need → voluntary window → individual deals → pay/insurance → formal dismissal needs counsel"),
        performance: L("就規确认→警告・改善→配置転換→それでも不可なら予告解雇路线", "Rules → warn/improve → redeploy → then notice dismissal path"),
        probation: L("試用条件明示→期中评价→予告または希望退職", "State conditions → mid reviews → notice or voluntary exit"),
        discipline: L("调查・聴聞→懲戒梯度→重大のみ即時", "Investigate → hearing → escalate → summary only if serious")
      }
    },
    {
      id: "kr",
      name: L("韩国", "Korea"),
      law: L("근로기준법、 근로자퇴직급여保障法、判例", "Labor Standards Act, Employee Retirement Benefit Security Act, case law"),
      severance: L(
        "退职金：连续工作满1年，每年30日分平均工资（ ER 常称 severance）；未满1年一般无。", 
        "Severance: after 1 year’s service, 30 days’ average wage per year worked; usually none if under 1 year."
      ),
      notice: L(
        "解雇예고：至少30日前书面通知或同额予告手当（근기법第26条）。",
        "Dismissal notice: at least 30 days in writing or equivalent allowance (LSA Art. 26)."
      ),
      summary: L(
        "解雇须有「正当な理由」；书面理由与程序。50人以上经济性解雇须50天前向劳动者代表通知。集体争议敏感。",
        "Dismissal needs “justifiable reason”; written grounds and process. 50+ redundancy: 50-day notice to worker rep. Collective sensitivity."
      ),
      sources: [
        { label: L("MOEL — Labor Standards (EN)", "MOEL Labor Standards"), href: "https://www.moel.go.kr/english/policy/policyinfo/sl/view.do" },
        { label: L("국가법령 — 근로기준법", "Korean legislation portal"), href: "https://www.law.go.kr/" }
      ],
      redundancy: [
        L("50人以上、50天前劳动者代表通知（紧急管理要件）。", "50+ employees: 50-day notice to worker representative (urgent managerial grounds)."),
        L("客观基准选员，避免歧视与报复解雇印象。", "Objective selection; avoid discrimination or reprisal appearance."),
        L("退职金 + 予告手当/通知 + 未休年假等结算。", "Severance + notice allowance + unused leave."),
        L("工会/艺能工会（如有）协商记录。", "Union consultation records if applicable.")
      ],
      performance: [
        L("就不能履行书面标准·警告·改善机会。", "Written standards, warnings and improvement chances."),
        L("惩委会记录（内部规定）有助于正当性。", "Disciplinary committee records help justification."),
        L("30日予告或手当。", "30-day notice or allowance.")
      ],
      probation: [
        L("试用期在合同载明；过早解除仍要正当理由。", "Probation in contract; early exit still needs grounds."),
        L("不满1年：退职金可能不适用，其他结算仍要做。", "Under 1 year: severance may not apply; still settle pay/leave.")
      ],
      discipline: [
        L("书面指控、陈述机会、顺序惩戒。", "Written charge, chance to respond, graduated discipline."),
        L("立即解雇限于重大违纪违法等。", "Immediate dismissal for serious misconduct only."),
        L("解雇通知书与理由书保全。", "Keep dismissal letter and statement of reasons.")
      ],
      dispute: L(
        "労働委員会·地方法院。不当解雇→复职或损害赔偿。解雇通知瑕疵可导致无效。",
        "Labour Relations Commission and courts. Unfair dismissal: reinstatement or damages. Defective notice can void dismissal."
      ),
      playbook: {
        redundancy: L("50人门槛→代表通知→选员基准→退职金 package→文书", "50+ rule → rep notice → criteria → severance package → documents"),
        performance: L("标准→警告→改善期→惩委会→予告解雇", "Standards → warnings → improvement → committee → notice dismissal"),
        probation: L("合同试用条款→记录→理由对照→通知", "Clause → records → map grounds → notice"),
        discipline: L("调查→惩戒委→梯度→仅重大即时", "Investigate → committee → escalate → summary if serious")
      }
    },
    {
      id: "in",
      name: L("印度", "India"),
      law: L("Industrial Disputes Act 1947、各邦 Shops & Establishments、劳动合同", "Industrial Disputes Act 1947, state Shops & Establishments Acts, contracts"),
      severance: L(
        "Gratuity（≥5年，Payment of Gratuity Act）；裁员/终止补偿依 ID Act 与工厂规模（如≥100人 retrenchment compensation）。IT 业多 ex-gratia 谈判。",
        "Gratuity (5+ years under Payment of Gratuity Act); retrenchment/termination pay under ID Act and establishment size (e.g. 100+ workers). IT often ex-gratia by negotiation."
      ),
      notice: L(
        "合同/州法常见30–90天；大规模终止可能须政府批准或补偿方案。",
        "Contract/state law often 30–90 days; large-scale termination may need government approval or prescribed compensation."
      ),
      summary: L(
        "适用法取决于雇员类别、薪资、工厂/事务所登记与邦法。non-compete 可执行性有限。PF/ESIC 结清重要。",
        "Law depends on worker category, wages, factory/establishment registration and state law. Limited non-compete enforceability. PF/ESIC closure matters."
      ),
      sources: [
        { label: L("Labour Ministry", "Labour Ministry"), href: "https://labour.gov.in/" },
        { label: L("India Code — Gratuity Act", "Gratuity Act"), href: "https://www.indiacode.nic.in/handle/123456789/2188" }
      ],
      redundancy: [
        L("确认 ID Act / 工厂登记是否适用；≥100人须补偿+可能 prior permission。", "Check ID Act / factory status; 100+ may need compensation and prior permission."),
        L("LIFO 或客观标准；notice + retrenchment compensation。", "LIFO or objective criteria; notice + retrenchment compensation."),
        L("IT/服务：书面协议+F&F+ relieving letter。", "IT/services: agreement + F&F + relieving letter.")
      ],
      performance: [
        L("政策、PIP、书面警告（合同/手册）。", "Policy, PIP, written warnings (contract/handbook)."),
        L("试用期按合同；转正后 notice+settlement。", "Probation per contract; post-confirmation notice + settlement."),
        L("避免突然解雇；保留调查记录。", "Avoid surprise exit; keep investigation file.")
      ],
      probation: [
        L("试用期长度依合同/邦法。", "Probation length per contract/state."),
        L("不通过须书面理由与 notice。", "Failure needs written reasons and notice.")
      ],
      discipline: [
        L("调查、show cause、纪律听证（如政策要求）。", "Investigation, show cause, disciplinary hearing if required."),
        L("严重不当可 summary，但程序仍要。", "Summary for serious misconduct; process still required.")
      ],
      dispute: L(
        "工业法庭/劳工法院；复职与背薪风险。员工分类错误会颠覆全流程。",
        "Industrial tribunals/labour courts; reinstatement and back-wages risk. Misclassification can void the whole process."
      ),
      playbook: {
        redundancy: L("适用性审计→政府/代表程序→补偿表→F&F", "Applicability audit → govt/rep process → comp table → F&F"),
        performance: L("PIP→警告→notice→协议", "PIP → warnings → notice → settlement"),
        probation: L("合同试用→评价→不通过通知", "Contract probation → review → fail notice"),
        discipline: L("调查→show cause→决定→ relieving", "Investigate → show cause → decision → relieving")
      }
    }
  );

  const C = window.ER_COMPACT;
  Object.assign(C.snapshot, {
    jp: { rule: L("解雇四要件/最后手段", "Dismissal last resort"), pay: L("退職金就规", "Rule-based retirement pay"), risk: "high", riskLabel: L("高", "High") },
    kr: { rule: L("正当な理由", "Justifiable reason"), pay: L("30日/年退职金", "30 days/year severance"), risk: "mid", riskLabel: L("中高", "Medium-high") },
    in: { rule: L("依类别适用 ID Act", "ID Act by category"), pay: L("Gratuity/裁员补偿", "Gratuity / retrenchment"), risk: "high", riskLabel: L("高", "High") }
  });
  Object.assign(C.countries, {
    jp: {
      first: L("优先希望退職与退職金谈判；正規解雇须律师。", "Prefer voluntary exit and retirement pay; formal dismissal needs counsel."),
      redline: L("无就规依据、无听证即解雇。", "No work-rule basis or hearing: do not dismiss."),
      payShort: L("退職金+30日予告/代金", "Retirement pay + 30-day notice/lieu"),
      noticeShort: L("30日予告", "30 days’ notice")
    },
    kr: {
      first: L("解雇理由书面化；50人以上走代表通知。", "Written dismissal grounds; 50+ use rep notice."),
      redline: L("报复性解雇、无程序惩戒。", "Reprisal or discipline without process."),
      payShort: L("退职金+予告手当", "Severance + notice pay"),
      noticeShort: L("30日前", "30 days ahead")
    },
    in: {
      first: L("先确认雇员分类与适用法规。", "Confirm worker category and applicable law first."),
      redline: L("未做 show cause 即解雇（政策要求时）。", "Dismiss without show cause when policy requires it."),
      payShort: L("Gratuity/ ID Act 补偿", "Gratuity / ID Act pay"),
      noticeShort: L("合同/州法30–90天", "Contract/state 30–90 days")
    }
  });

  const flows = {
    jp: {
      redundancy: [L("希望退職可否", "Voluntary exit?"), L("工会/说明会", "Union/briefing"), L("退職金算定", "Cost retirement pay"), L("正規解雇は律师", "Formal = counsel")],
      performance: [L("就規与警告", "Rules + warnings"), L("配置転換", "Redeploy"), L("30日予告", "30-day notice"), L("在留确认", "Check visa")],
      probation: [L("試用条件", "Trial conditions"), L("期中记录", "Mid records"), L("予告或合意离职", "Notice or agreed exit")],
      discipline: [L("懲戒手続", "Disciplinary process"), L("聴聞", "Hearing"), L("梯度", "Escalate"), L("重大のみ即時", "Summary if serious")]
    },
    kr: {
      redundancy: [L("50人通知?", "50+ notice?"), L("选员基准", "Selection criteria"), L("退职金", "Severance"), L("代表协商", "Rep consult")],
      performance: [L("标准+警告", "Standards + warn"), L("改善期", "Improvement"), L("惩委会", "Committee"), L("30日予告", "30-day notice")],
      probation: [L("合同试用", "Contract trial"), L("记录", "Records"), L("理由书", "Grounds letter")],
      discipline: [L("调查", "Investigate"), L("惩戒委", "Committee"), L("解雇通知", "Dismissal notice")]
    },
    in: {
      redundancy: [L("ID Act适用", "ID Act apply?"), L("100人批准?", "100+ approval?"), L("补偿+notice", "Comp + notice"), L("F&F", "F&F")],
      performance: [L("PIP", "PIP"), L("警告", "Warnings"), L("notice", "Notice"), L("协议", "Settlement")],
      probation: [L("合同试用", "Probation clause"), L("评价", "Review"), L("不通过通知", "Fail notice")],
      discipline: [L("调查", "Investigate"), L("show cause", "Show cause"), L("听证", "Hearing")]
    }
  };
  extraIds.forEach((id) => {
    ["redundancy", "performance", "probation", "discipline"].forEach((k) => {
      C.countryFlows[k][id] = flows[id][k];
    });
  });

  const matrixAdds = {
    jp: {
      rule: L("解雇最后手段+就规", "Dismissal last resort + rules"),
      pay: L("退職金；30日予告", "Retirement pay; 30-day notice"),
      notice: L("30日予告/代金", "30 days or lieu"),
      risk: L("高", "High"),
      red: L("无理由解雇", "Dismissal without grounds")
    },
    kr: {
      rule: L("正当な理由", "Justifiable reason"),
      pay: L("30日/年退职金", "30 days/year severance"),
      notice: L("30日予告/手当", "30 days / allowance"),
      risk: L("中高", "Medium-high"),
      red: L("无理由/报复解雇", "No grounds / reprisal")
    },
    in: {
      rule: L("分类+ID Act", "Classification + ID Act"),
      pay: L("Gratuity/裁员补偿", "Gratuity / retrenchment"),
      notice: L("30–90天常见", "Often 30–90 days"),
      risk: L("高", "High"),
      red: L("分类错误", "Wrong classification")
    }
  };
  const rowKeys = ["rule", "pay", "notice", "risk", "red"];
  const rowMap = ["规则模式", "法定/惯例补偿", "通知", "办案风险", "最常见红线"];
  window.ER_MATRIX_V2.forEach((row, i) => {
    extraIds.forEach((id) => {
      const key = rowKeys[i];
      if (key && matrixAdds[id][key]) row[id] = matrixAdds[id][key];
    });
  });

  const M = window.ER_DATA.matrix;
  Object.assign(M[0], { jp: L("労働基準法/労働契約法", "LSA / Labor Contract Act"), kr: L("근로기준법", "Labor Standards Act"), in: L("ID Act + 邦法", "ID Act + state law") });
  Object.assign(M[1], { jp: L("退職金就规；无统一N", "Rule-based; no unified N"), kr: L("30日/年退职金", "30 days/year severance"), in: L("Gratuity/裁员补偿", "Gratuity / retrenchment") });
  Object.assign(M[2], { jp: L("30日予告/代金", "30 days or lieu"), kr: L("30日予告/手当", "30 days / allowance"), in: L("30–90天", "30–90 days") });
  Object.assign(M[3], { jp: L("高", "High"), kr: L("中高", "Medium-high"), in: L("中", "Medium") });
  Object.assign(M[4], { jp: L("高", "High"), kr: L("高", "High"), in: L("中", "Medium") });
  Object.assign(M[5], { jp: L("中", "Medium"), kr: L("中高", "Medium-high"), in: L("高", "High") });
  Object.assign(M[6], { jp: L("解雇需高度合理", "Highly justified dismissal"), kr: L("正当な理由", "Justifiable reason"), in: L("视雇员类别", "Depends on category") });
  Object.assign(M[7], { jp: L("无效+损害赔偿", "Void + damages"), kr: L("复职/损害赔偿", "Reinstatement / damages"), in: L("复职/背薪", "Reinstatement / back wages") });
})();