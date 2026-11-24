(function () {
    const CODES = ["CN", "HK", "SG", "AU", "NZ", "MY", "TH", "JP", "KR", "IN", "ID", "VN", "PH"];

    const COUNTRIES = {
      CN: { flag: "🇨🇳", name: "中国大陆", law: "《劳动合同法》《劳动争议调解仲裁法》等", severance: "经济补偿 N：每满 1 年 1 个月工资（6 个月以上不满 1 年按 1 年；不满 6 个月半个月）；封顶 12 年 × 当地社平 3 倍；违法解除 2N", notice: "提前 30 日书面通知或代通知金（第 40、41 条情形）", probation: "试用期解除：证明不符合录用条件 + 说明（第 39 条）；试用期工资有下限", performance: "难", misconduct: "高", arbitration: "极高", massLayoff: "≥20 人或占 10%+ 需程序（报告、方案）", keyNote: "协商解除（N/N+1）普遍；规章制度民主程序与公示至关重要；封口费协议注意个税与社保", refs: [
        { t: "中国政府网 — 劳动合同法", u: "https://www.gov.cn/zhengce/2009-12/25/content_1627471.htm" },
        { t: "人社部 — 政策服务", u: "https://www.mohrss.gov.cn/" }
      ]},
      HK: { flag: "🇭🇰", name: "香港", law: "《雇佣条例》(Employment Ordinance) + 普通法", severance: "长期服务金 LSP / 遣散费 Severance（满足条件时）；法定遣散非「N 月」大陆模式；无一般强制法定 severance package 如 Australia", notice: "57 条：按雇用长短 7 天–1 个月预告期或代通知金（与连续性合约期相关）", probation: "中", performance: "低", misconduct: "低-中", arbitration: "低", massLayoff: "无欧盟式集体磋商法；留意《裁员实务守则》及合约", keyNote: "随即解雇（summary dismissal）限于严重违纪；倘有争议多走劳资审裁处/Labour Tribunal", refs: [
        { t: "劳工处 — Employment Ordinance 概要", u: "https://www.labour.gov.hk/eng/legislat/contentA.htm" },
        { t: "劳工处 — 终止雇佣", u: "https://www.labour.gov.hk/eng/public/wcp/ConciseGuide/terminate.htm" }
      ]},
      SG: { flag: "🇸🇬", name: "新加坡", law: "Employment Act（核心雇员）+ 普通法/合约", severance: "无一般法定 severance 公式；行业惯例 ex-gratia（常按年资周数）；MOM 指引Retrenchment", notice: "EA：citizen/PR 满 3 个月 — 通知 1 天至 4 周（按服务年限）；EP 持有人另须 MOM/ICA", probation: "中", performance: "中", misconduct: "中高", misconductNote: "misconduct 调查程序", arbitration: "中高", massLayoff: "MOM Tripartite Guidelines on Fair Employment — 非核心员工 retrenchment 实践", keyNote: "Wrongful dismissal 可索赔；调查听证会、书面警告链重要；外籍雇员 pass 与时间线", refs: [
        { t: "MOM — Termination", u: "https://www.mom.gov.sg/employment-practices/termination-of-employment" },
        { t: "MOM — Retrenchment", u: "https://www.mom.gov.sg/employment-practices/retrenchment" }
      ]},
      AU: { flag: "🇦🇺", name: "澳大利亚", law: "Fair Work Act 2009 + National Employment Standards (NES)", severance: "法定 Redundancy pay：按连续服务年限阶梯（最高 16 周，小雇主例外）", notice: "NES 通知期 1–5 周（按年限）；可与 garden leave 结合", probation: "低-中", performance: "中", misconduct: "中", arbitration: "中", massLayoff: "genuine redundancy + consultation（部分 modern award/enterprise agreement 要求）", keyNote: "unfair dismissal 适用人群有最低雇用门槛；小生意雇主规则不同；严重 misconduct 可即时解雇", refs: [
        { t: "Fair Work — Redundancy", u: "https://www.fairwork.gov.au/ending-employment/redundancy" },
        { t: "Fair Work — Notice & redundancy pay", u: "https://www.fairwork.gov.au/tools-and-resources/fact-sheets/minimum-workplace-entitlements/redundancy-pay-and-notice" }
      ]},
      NZ: { flag: "🇳🇿", name: "新西兰", law: "Employment Relations Act 2000 (ERA)", severance: "无强制 statutory redundancy payment（除非合同/CBA 约定）；侧重程序公正", notice: "合理通知 (reasonable notice)，无固定周数表；看合约、年限、惯例", probation: "中", performance: "中", misconduct: "中", arbitration: "中", massLayoff: "重组需 good faith consultation；大规模留意沟通与选址", keyNote: "personal grievance 常见；90 天试用（trial period，员工≤20 人雇主特殊规则已变）须合同明确", refs: [
        { t: "Employment NZ — Ending employment", u: "https://www.employment.govt.nz/resolving-problems/types-of-problems/good-employer/end-employment/" },
        { t: "ERA 2000 (legislation)", u: "https://www.legislation.govt.nz/act/public/2000/0024/latest/DLM58317.html" }
      ]},
      MY: { flag: "🇲🇾", name: "马来西亚", law: "Employment Act 1955（2022 修订扩大适用）", severance: "终止/裁员补偿：按服务年限 10 / 15 / 20 天工资/年（不同年限档）", notice: "4–8 周书面通知（视合约与 EA 规定）", probation: "中", performance: "中", misconduct: "中", arbitration: "中", massLayoff: "大规模留意 Industrial Relations Act 与部門指导", keyNote: "外籍雇员 work permit 与 passport；EA 外人员仍受一般合同法约束", refs: [
        { t: "HRD Corp / MOHR — Employment Act", u: "https://www.mohr.gov.my/index.php/en/employee/employment-act-1955" },
        { t: "Department of Labour", u: "https://jtksm.mohr.gov.my/" }
      ]},
      TH: { flag: "🇹🇭", name: "泰国", law: "Labour Protection Act B.E. 2541 + Labour Relations Act", severance: "解雇遣散费：30 / 60 / 90 / 180 / 300 / 400 天工资（按服务年限阶梯）", notice: "至少 1 个薪资支付期提前通知（或代通知金）", probation: "中", performance: "中", misconduct: "中", arbitration: "中低", massLayoff: "大规模关闭留意特别法与劳工部", keyNote: "无正当理由解雇风险高；书面泰文记录、witness、工会（如有）", refs: [
        { t: "Thai Labour — 概要 (DLPW)", u: "https://www.doe.go.th/" },
        { t: "Labour Protection Act 摘要", u: "https://www.ilo.org/dyn/natlex/docs/MONOGRAPH/113907/115291/F1378266037/THA113907.pdf" }
      ]},
      JP: { flag: "🇯🇵", name: "日本", law: "労働基準法、労働契約法、労働組合法等", severance: "无统一法定 N；退職金制度（就规）+ 希望退職对价", notice: "解雇预告 30 日前或平均工资 30 日代金", probation: "中", performance: "高", misconduct: "高", arbitration: "中", massLayoff: "规模大时工会交涉 / 希望退職窗口", keyNote: "解雇四要件极严；正規解雇少，多用希望退職；敏感记录与签名", refs: [
        { t: "厚生労働省 — 雇用・労働", u: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/index.html" },
        { t: "MHLW — 解雇相关指南", u: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/koyou/koyou_roudou_kisoku/index.html" }
      ]},
      KR: { flag: "🇰🇷", name: "韩国", law: "근로기준법、独劳法等", severance: "退职金：在职满 1 年以上，每年 30 日平均工资", notice: "解雇预报 30 日前通知或同等预告津贴", probation: "中", performance: "中高", misconduct: "高", arbitration: "中高", massLayoff: "50 人以上 50 天期间事前通知劳动者代表", keyNote: "解雇须有正当理由并书面；集体争议敏感；resignation vs dismissal 分项", refs: [
        { t: "MOEL — Labor Standards (EN)", u: "https://www.moel.go.kr/english/policy/policyinfo/sl/view.do" },
        { t: "국가법령 — 근로기준법", u: "https://www.law.go.kr/" }
      ]},
      IN: { flag: "🇮🇳", name: "印度", law: "Industrial Disputes Act 1947 + Shops & Establishments + 合同", severance: "Gratuity（≥5 年）；较大 enterprise 终止可能需政府准许", notice: "合同/州法（30–90 天常见）", probation: "低-中", performance: "中", misconduct: "中", arbitration: "高", massLayoff: "雇佣≥100 人 — retrenchment compensation + 可能 prior approval", keyNote: "IT 业多 ex-gratia 谈判；ESIC/PF 结清；non-compete 可执行性有限", refs: [
        { t: "India Code — Gratuity Act", u: "https://www.indiacode.nic.in/handle/123456789/2188" },
        { t: "Labour Ministry", u: "https://labour.gov.in/" }
      ]},
      ID: { flag: "🇮🇩", name: "印度尼西亚", law: "UU Ketenagakerjaan (Cipta Kerja) + PP", severance: "PKWT 期满 / PHK：PHK腾曲 + hak 按年资", notice: "30 天书面（视合同 & 事由）", probation: "中", performance: "中", misconduct: "中", arbitration: "中", massLayoff: "大规模：两方案（调岗 / 补偿）+ 登记", keyNote: "工会 & bipartite；宗教津贴与 THR；外籍 KITAS", refs: [
        { t: "Kemnaker — Ketenagakerjaan", u: "https://kemnaker.go.id/" },
        { t: "ILO Natlex — Indonesia", u: "https://www.ilo.org/dyn/natlex/natlex4.search?p_lang=en&p_country=IDN" }
      ]},
      VN: { flag: "🇻🇳", name: "越南", law: "2019 Labor Code + Decrees", severance: "severance allowance 按服务年限（半年一档）", notice: "至少 30 日（或 45 日依情形）", probation: "中", performance: "中", misconduct: "中", arbitration: "中", massLayoff: "经济原因裁员：30 日前工会/职工代表咨询", keyNote: "discipline 依内部规章公示；social insurance 手续", refs: [
        { t: "MOJ — Labor Code info", u: "https://www.moj.gov.vn/" },
        { t: "ILO — Vietnam labour", u: "https://www.ilo.org/hanoi" }
      ]},
      PH: { flag: "🇵🇭", name: "菲律宾", law: "Labor Code of the Philippines + DOLE rules", severance: "非 just cause：separation pay（半月/一月工资/年，视事由）", notice: "至少 30 日（termination for authorized causes）", probation: "中", performance: "中", misconduct: "中", arbitration: "中", massLayoff: "Authorized causes：报告 DOLE；实名投诉程序", keyNote: "just cause 双通知 + NLRC 听证（security of tenure）", refs: [
        { t: "DOLE — Labor Code", u: "https://www.dole.gov.ph/" },
        { t: "NLRC", u: "https://nlrc.dole.gov.ph/" }
      ]}
    };

    const MATRIX = [
      { dim: "主要法律", values: { CN: "劳动合同法+", HK: "雇佣条例", SG: "Employment Act", AU: "Fair Work Act", NZ: "ERA 2000", MY: "EA 1955", TH: "LPA", JP: "労基法/労契法", KR: "근로기준법", IN: "ID Act + S&E", ID: "UU Cipta Kerja", VN: "Labor Code 2019", PH: "Labor Code" }},
      { dim: "法定遣散费 / 终止金", values: { CN: "N 月工资", HK: "LSP/Severance", SG: "无公式(惯例)", AU: "Redundancy 阶梯", NZ: "靠合同", MY: "10–20天/年", TH: "30–400天", JP: "退職金/希望退職", KR: "30日/年", IN: "Gratuity等", ID: "PHK 阶梯", VN: "按年限津贴", PH: "Separation pay" }},
      { dim: "通知期", values: { CN: "30天", HK: "7天–1月", SG: "1天–4周", AU: "1–5周", NZ: "合理通知", MY: "4–8周", TH: "≥1薪期", JP: "30日", KR: "30日", IN: "合同/州法", ID: "30天", VN: "30–45日", PH: "30日" }},
      { dim: "试用期解除", values: { CN: "高", HK: "中", SG: "中", AU: "低-中", NZ: "中", MY: "中", TH: "中", JP: "中", KR: "中", IN: "低-中", ID: "中", VN: "中", PH: "中" }},
      { dim: "绩效解除难度", values: { CN: "高", HK: "低", SG: "中高", AU: "中", NZ: "中", MY: "中", TH: "中", JP: "高", KR: "中高", IN: "中", ID: "中", VN: "中", PH: "中" }, css: "diff" },
      { dim: "违纪解除难度", values: { CN: "高", HK: "低-中", SG: "中", AU: "中", NZ: "中", MY: "中", TH: "中", JP: "高", KR: "高", IN: "中", ID: "中", VN: "中", PH: "中" }, css: "diff" },
      { dim: "仲裁/诉讼风险", values: { CN: "极高", HK: "低", SG: "中高", AU: "中", NZ: "中", MY: "中", TH: "中低", JP: "中", KR: "中高", IN: "高", ID: "中", VN: "中", PH: "中" }, css: "risk" },
      { dim: "裁员关键词", values: { CN: "经济性裁员", HK: "遣散/LSP", SG: "Retrenchment", AU: "Redundancy", NZ: "Consultation", MY: "VSS", TH: "เลิกจ้าง", JP: "希望退職", KR: "해고/정리", IN: "Retrenchment", ID: "PHK mass", VN: "thu hẹp", PH: "Redundancy/DOLE" }},
    ];

    const CASE_LABELS = { rif: "裁员/重组", pip: "绩效解除", prob: "试用期", disc: "违纪" };

    const CHECKLISTS = {
      rif: {
        CN: { steps: ["业务必要性论证与民主程序（20+/10%）", "向劳动部门报告方案", "selection matrix", "协商解除优先", "N/社保/公积金结清"], docs: ["裁员方案", "工会/职工说明", "解除协议", "离职证明"] },
        SG: { steps: ["Tripartite retrenchment 实践", "MOM notification（适用时）", "selection & notice", "ex-gratia 计算", "EP cancellation"], docs: ["Retrenchment letter", "Settlement", "IR21 tax"] },
        AU: { steps: ["Genuine redundancy test", "Consultation（award/EA）", "Notice + redundancy pay", "Modern award 核对", "Final pay"], docs: ["Redundancy letter", "Consultation records", "Separation certificate"] },
        JP: { steps: ["评估能否希望退職", "社长/工会说明", "退職金算定", "社保脱退", "源泉/visa"], docs: ["希望退職申请书", "合意书", "解雇不可能记录（如裁员）"] },
        IN: { steps: ["确认 ID Act 适用性", "Retrenchment compensation", "notice period", "Full & final", "Relieving"], docs: ["Termination letter", "FF settlement", "Form 16等"] },
      },
      pip: {
        CN: { steps: ["制度/PIP依据", "培训或调岗", "仍不能胜任举证", "提前30日或代通知", "经济补偿"], docs: ["PIP", "培训记录", "评估", "解除通知"] },
        HK: { steps: ["合约条款", "书面警告", "合理程序", "代通知金"], docs: ["Warning letters", "Termination notice"] },
        SG: { steps: ["Policy inquiry", "warning + PIP", "show cause", "notice/payment"], docs: ["PIP", "Inquiry minutes", "Termination"] },
        AU: { steps: ["Procedural fairness", "Warnings", "Small business code if appl.", "Unfair dismissal 风险评估"], docs: ["Performance plan", "Meeting notes"] },
      },
      prob: {
        CN: { steps: ["试用期条款合法", "录用条件书面", "不符合录用条件说明", "即时解除证据"], docs: ["Offer", "Probation review", "39条解除说明"] },
        NZ: { steps: ["Trial period 合同条款", "90 day 内", "fair process still"], docs: ["Agreement clause", "Feedback records"] },
        PH: { steps: [" probation ≤6月", "just cause 标准仍适用", "双通知如适用"], docs: ["Probationary contract", "Notice to explain"] },
      },
      disc: {
        CN: { steps: ["民主程序规章", "调查不出席", "停工留薪", "严重违纪事实", "解除决定"], docs: ["调查报告", "员工陈述", "解除通知书"] },
        SG: { steps: ["Domestic inquiry", "suspension letter", "show cause", "decision letter"], docs: ["Charge sheet", "Inquiry minutes"] },
        AU: { steps: ["Investigation", "Show cause", "Serious misconduct?", "Summary vs notice"], docs: ["Investigation report", "Warning history"] },
        KR: { steps: ["正当理由书面", "30日预报", "工会/代表", "退职金分项"], docs: ["징계委원회 记录", "해고통지"] },
      }
    };

    const CASES = [
      { id: "rif", title: "裁员 / 重组 (RIF)", steps: [
        "确认业务理由与 headcount 批准（非歧视）",
        "国别：是否触发 collective consultation / MOM retrenchment / CN 裁员报告",
        "选定标准（职能/地点/层級）与 selection matrix",
        "individual / group 沟通日程序与 FAQ",
        "计算：statutory + company severance + 年假/奖金 pro-rata",
        "解除协议、保密、竞业、设备归还、签证/社保公积金"
      ], hints: { CN: "20+ 或 10% 程序；协商 N/N+1", SG: "MOM retrenchment notification（一定规模）", AU: "Genuine redundancy + consultation", HK: "LSP/Severance 资格核对", MY: "EA 补偿天数", TH: "遣散费阶梯" }},
      { id: "pip", title: "绩效不佳解除", steps: [
        "合同/政策中的绩效管理与 PIP 条款",
        "书面 PIP：目标、辅导、复评节点（建议 ≥30–90 天）",
        "记录 coaching、criteria、员工反馈",
        "国别：是否允许无过失解除或须支付代通知/补偿",
        "解除面谈与见证人；保留完整档案"
      ], hints: { CN: "第 40 条不能胜任 + 培训/调岗仍不能胜任；举证重", HK: "合约 termination clause + 合理程序", SG: "无过失解除通常给 notice/payment", AU: "unfair dismissal risk — 程序公正" }},
      { id: "prob", title: "试用期", steps: [
        "确认书面试用期长度合法上限",
        "录用条件与 KPI 入职时明确",
        "试用期评估表与中期反馈",
        "不符合录用条件：书面说明（CN 尤重要）",
        "解除通知期（可能短于正式期）"
      ], hints: { CN: "39 条：不符合录用条件；勿混淆与 40 条", NZ: "Trial period 须在雇佣协议载明", AU: "Minimum employment period 影响 unfair dismissal" }},
      { id: "disc", title: "违纪 / Misconduct", steps: [
        "暂停职务调查（paid suspension 视国别）",
        "指控书、证据链、面谈记录、代表权（工会）",
        "分级处分：警告 → 最后警告 → 解除",
        "严重违纪：是否允许 summary dismissal",
        "解除决定书面化；申诉渠道"
      ], hints: { CN: "规章制度民主程序 + 严重性举证", HK: "summary dismissal 仅限严重", SG: "inquiry 程序降低 wrongful dismissal", AU: "serious misconduct 可即时解雇" }}
    ];

    function cssClass(val, type) {
      if (type === "risk") {
        if (/极高|高/.test(val) && !/中高|中低/.test(val)) return "risk-high";
        if (/中/.test(val)) return "risk-mid";
        return "risk-low";
      }
      if (type === "diff") {
        if (/高/.test(val)) return "diff-high";
        if (/低/.test(val)) return "diff-low";
        return "";
      }
      return "";
    }

    function renderMatrix() {
      const hdr = CODES.map(c => `<th class="country-col">${COUNTRIES[c].flag} ${COUNTRIES[c].name}</th>`).join("");
      const rows = MATRIX.map(row => {
        const cells = CODES.map(c => {
          const v = row.values[c] || "—";
          const cls = row.css ? cssClass(v, row.css) : "";
          return `<td class="${cls}">${v}</td>`;
        }).join("");
        return `<tr class="dim-row"><td>${row.dim}</td>${cells}</tr>`;
      }).join("");
      document.getElementById("matrixTable").innerHTML =
        `<table><thead><tr><th>维度</th>${hdr}</tr></thead><tbody>${rows}</tbody></table>`;
    }

    function renderDetail(filter) {
      document.getElementById("countryDetail").innerHTML = CODES.filter(c => !filter || c === filter).map(c => {
        const x = COUNTRIES[c];
        const refs = x.refs.map(r => `<a href="${r.u}" target="_blank" rel="noopener">${r.t}</a>`).join("");
        return `<article class="country-card" data-code="${c}">
          <h3>${x.flag} ${x.name}</h3>
          <ul>
            <li><strong>主要法律</strong>${x.law}</li>
            <li><strong>法定遣散/补偿</strong>${x.severance}</li>
            <li><strong>通知期</strong>${x.notice}</li>
            <li><strong>试用期</strong>难度 ${typeof x.probation === "string" ? x.probation : "见政策"}</li>
            <li><strong>绩效解除</strong>相对难度 <span class="${cssClass(x.performance, "diff")}">${x.performance}</span></li>
            <li><strong>违纪解除</strong>相对难度 <span class="${cssClass(x.misconduct, "diff")}">${x.misconduct}</span></li>
            <li><strong>仲裁/争议风险</strong><span class="${cssClass(x.arbitration, "risk")}">${x.arbitration}</span></li>
            <li><strong>批量裁员</strong>${x.massLayoff}</li>
            <li><strong>ER 实务要点</strong>${x.keyNote}</li>
          </ul>
          <div class="refs">${refs}</div>
        </article>`;
      }).join("");
    }

    function renderCases() {
      document.getElementById("caseGuides").innerHTML = CASES.map(cs => {
        const hints = CODES.map(c => `${COUNTRIES[c].flag} ${COUNTRIES[c].name}：${cs.hints[c] || "依合约与当地法"}`).join("<br>");
        const steps = cs.steps.map(s => `<li>${s}</li>`).join("");
        return `<article class="case-card"><h3>${cs.title}</h3><ol>${steps}</ol><div class="case-country"><strong>国别差异提示</strong><br>${hints}</div></article>`;
      }).join("");
    }

    function renderLinks() {
      document.getElementById("linkIndex").innerHTML = CODES.map(c => {
        const x = COUNTRIES[c];
        const refs = x.refs.map(r => `<a href="${r.u}" target="_blank" rel="noopener">${r.t}</a>`).join("");
        return `<article class="country-card"><h3>${x.flag} ${x.name}</h3><div class="refs">${refs}</div></article>`;
      }).join("");
    }

    function defaultChecklist(caseId, code) {
      const x = COUNTRIES[code];
      const base = (CASES.find(c => c.id === caseId) || {}).steps || [];
      return {
        steps: [...base, `核对 ${x.name}：${x.notice}`, `补偿/遣散：${x.severance.slice(0, 80)}…`],
        docs: ["劳动合同/手册条款", "书面通知", "解除/结算协议", "离职证明", "签证/社保结清（如适用）"]
      };
    }

    function renderChecklist() {
      const caseId = document.getElementById("casePick").value;
      const code = document.getElementById("checkCountryPick").value;
      const x = COUNTRIES[code];
      const pack = (CHECKLISTS[caseId] && CHECKLISTS[caseId][code]) || defaultChecklist(caseId, code);
      const hint = (CASES.find(c => c.id === caseId) || {}).hints || {};
      let html = `<article class="checklist-card" id="activeChecklist">
        <h3>${CASE_LABELS[caseId]} · ${x.flag} ${x.name}</h3>
        <p style="font-size:0.8rem;color:var(--muted);margin-bottom:0.5rem">${hint[code] || x.keyNote}</p>
        <div class="check-grid">
          <div><h4>操作 Checklist</h4><ul>${pack.steps.map(s => `<li>${s}</li>`).join("")}</ul></div>
          <div><h4>建议文书 / 证据</h4><ul>${pack.docs.map(d => `<li>${d}</li>`).join("")}</ul>
            <h4>官方法规</h4><div class="refs">${x.refs.map(r => `<a href="${r.u}" target="_blank" rel="noopener">${r.t}</a>`).join("")}</div>
          </div>
        </div>
      </article>`;
      if (window.enrichChecklist) html = enrichChecklist(html, caseId, code);
      document.getElementById("checklistBody").innerHTML = html;
    }

    function exportMatrixCsv() {
      const header = ["维度", ...CODES.map(c => COUNTRIES[c].name)];
      const rows = MATRIX.map(row => [row.dim, ...CODES.map(c => row.values[c] || "")]);
      const csv = [header, ...rows].map(r => r.map(c => `"${String(c).replace(/"/g, '""')}"`).join(",")).join("\n");
      const blob = new Blob(["\ufeff" + csv], { type: "text/csv;charset=utf-8" });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "apac-labor-matrix.csv";
      a.click();
    }

    document.querySelectorAll("#tools-section .er14-tab").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll("#tools-section .er14-tab").forEach(b => b.classList.remove("active"));
        document.querySelectorAll("#tools-section .er14-panel").forEach(p => p.classList.remove("active"));
        btn.classList.add("active");
        document.getElementById("panel-" + btn.dataset.tab).classList.add("active");
      });
    });

    const pick = document.getElementById("countryPick");
    CODES.forEach(c => {
      const o = document.createElement("option");
      o.value = c;
      o.textContent = COUNTRIES[c].name;
      pick.appendChild(o);
    });
    pick.addEventListener("change", () => renderDetail(pick.value));

    const checkPick = document.getElementById("checkCountryPick");
    CODES.forEach(c => {
      const o = document.createElement("option");
      o.value = c;
      o.textContent = COUNTRIES[c].name;
      checkPick.appendChild(o);
    });
    checkPick.value = "SG";
    document.getElementById("casePick").addEventListener("change", renderChecklist);
    checkPick.addEventListener("change", renderChecklist);
    document.getElementById("exportMatrix").addEventListener("click", exportMatrixCsv);
    document.getElementById("printChecklist").addEventListener("click", () => {
      const el = document.getElementById("activeChecklist");
      if (!el) return;
      const w = window.open("", "_blank");
      w.document.write(`<html><head><title>ER Checklist</title></head><body style="font-family:sans-serif;padding:20px">${el.innerHTML}</body></html>`);
      w.document.close();
      w.print();
    });

    renderMatrix();
    renderDetail("");
    renderCases();
    renderLinks();
    renderChecklist();
})();
