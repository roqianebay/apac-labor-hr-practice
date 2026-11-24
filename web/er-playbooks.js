/* APAC ER playbooks for non-specialist HR — depends on COUNTRIES, CODES, CASE_LABELS from index.html */
(function () {
  const UNIVERSAL_INVESTIGATION = [
    { phase: "1. 接收与分诊", owner: "ER", days: "Day 0–1", tasks: [
      "记录举报渠道、时间、指控摘要（不写结论）",
      "判断是否需立即停职（安全/数据/暴力）",
      "指派调查负责人（避免直属经理单人调查）",
      "告知举报人：保密、反报复政策"
    ], donts: ["勿在未调查前公开指责员工", "勿销毁或隐瞒电子证据"] },
    { phase: "2. 调查计划", owner: "ER + Legal*", days: "Day 1–3", tasks: [
      "明确指控事实（可证实/不可证实的分开）",
      "列出证人、文件、系统日志（email/门禁/CCTV 政策）",
      "确定员工陈述权（书面通知面谈时间、可带代表*）",
      "*国别差异见下方"
    ], legal: "有刑事嫌疑、监管通报、媒体风险时必叫 Legal" },
    { phase: "3. 证据收集", owner: "调查员", days: "Day 3–10", tasks: [
      "保存原始证据（hash/截图时间戳）",
      "访谈：开放式问题 + 书面纪要 + 签字/邮件确认",
      "如涉及多名员工，注意公平对待、分批访谈"
    ], donts: ["勿诱导性提问", "勿承诺结果"] },
    { phase: "4. 结论与处分建议", owner: "ER + HRBP", days: "Day 10–15", tasks: [
      "撰写调查报告：事实 / 违反条款 / 建议处分",
      "处分梯度：口头警告 → 书面 → 最后警告 → 解除",
      "解除前：国别程序（show cause / 工会 / 30日通知等）"
    ], legal: "建议解除前 Legal 复核" },
    { phase: "5. 沟通与收尾", owner: "ER", days: "结案周", tasks: [
      "书面决定 + 申诉渠道",
      "离职手续 / 停职结束",
      "团队沟通（不披露个人隐私）",
      "经验教训、政策补丁"
    ]}
  ];

  const UNIVERSAL_PIP = [
    { phase: "1. 触发与记录", owner: "经理 + ER", days: "Week 0", tasks: [
      "用历史绩效记录说明「非突然」— 非仅一次差评",
      "确认合同/政策允许 PIP 与解除标准",
      "经理与 ER 对齐：目标须 SMART、可衡量"
    ]},
    { phase: "2. PIP 文件发放", owner: "ER", days: "Week 0–1", tasks: [
      "书面 PIP：目标、资源、辅导计划、检查点（建议 30–90 天）",
      "员工签收；拒签则邮件送达并注明",
      "安排固定 1:1 辅导并记录"
    ], donts: ["勿设定不可能完成的任务", "勿歧视性标准"] },
    { phase: "3. 中期复评", owner: "经理", days: "PIP 中期", tasks: [
      "书面中期评估：达标/部分/未达标",
      "未达标：是否调整支持或延长（政策允许时）",
      "保留员工书面意见"
    ]},
    { phase: "4. 终评与决定", owner: "ER + 经理", days: "PIP 结束", tasks: [
      "终评会议 + 书面结果",
      "未达标：国别解除路径（通知期/补偿/PIP 是否充分）",
      "考虑调岗最后机会（部分国别/公司政策）"
    ], legal: "CN/JP/KR 等解除难度高 — 提前 Legal" },
    { phase: "5. 解除或回流", owner: "ER", days: "结案", tasks: [
      "解除：通知、结算、离职证明",
      "回流：关闭 PIP、新目标 — 文档归档 3–7 年"
    ]}
  ];

  const INV_COUNTRY = {
    CN: { timeline: "约 2–4 周", specifics: ["规章制度须已民主程序公示", "严重违纪可单方解除仍须事实清楚", "工会/职工代表：解除应说明理由", "勿在午休/集体场合宣布决定"], legal: ["仲裁极高 — 证据链 + 解除通知书必备", "社保公积金停缴时点"] },
    HK: { timeline: "1–3 周", specifics: ["Summary dismissal 仅限极端严重违纪", "一般违纪仍要合理调查和警告", "劳资审裁处注重程序公正"], legal: ["LSP/Severance 是否仍触发"] },
    SG: { timeline: "2–4 周", specifics: ["Domestic inquiry 程序", "可 paid suspension pending inquiry", "Show cause letter → 听证 → 决定信"], legal: ["Wrongful dismissal 索赔 — 程序瑕疵高风险", "EP 员工同步 MOM"] },
    AU: { timeline: "2–4 周", specifics: ["Procedural fairness", "Show cause before dismissal", "Serious misconduct 可 summary dismissal"], legal: ["Fair Work unfair dismissal", "Small business 不同门槛"] },
    NZ: { timeline: "2–4 周", specifics: ["Good faith + fair process", "Personal grievance 常见"], legal: ["过程比结果更常被挑战"] },
    MY: { timeline: "2–3 周", specifics: ["书面信函（英/马来文）", "工业法院风险 — 文档齐全", "Work permit 外籍雇员"], legal: [] },
    TH: { timeline: "2–4 周", specifics: ["泰文记录", "正当理由解雇", "工会（如有）"], legal: [] },
    JP: { timeline: "3–8 周", specifics: ["正装解雇极难 — 多走希望退職", "解雇四要件培训", "工会/社员说明会"], legal: ["几乎必咨询日本 counsel"] },
    KR: { timeline: "2–4 周", specifics: ["징계委원회", "正当理由 + 书面", "30 日解雇预告"], legal: ["集体争议敏感"] },
    IN: { timeline: "2–5 周", specifics: ["Standing orders（如适用）", "IT 业常协商 exit", "PF/Gratuity 结算"], legal: [] },
    ID: { timeline: "2–4 周", specifics: [" bipartite", "PKWT vs PKWTT 不同", "Warning 层级"], legal: [] },
    VN: { timeline: "2–4 周", specifics: ["内部规章已公示", "工会咨询（纪律、裁员）"], legal: [] },
    PH: { timeline: "3–6 周", specifics: ["Notice to explain", "Administrative hearing", "双通知（NTD + termination）"], legal: ["NLRC — security of tenure"] }
  };

  const PIP_COUNTRY = {
    CN: { specifics: ["第 40 条：不能胜任 → 培训或调岗 → 仍不能胜任", "禁止仅因一次 KPI 未达标解除", "协商解除常优于单方 40 条"], notice: "30 日或代通知金 + 经济补偿 N" },
    HK: { specifics: ["依赖合同 termination 条款", "合理警告 + 时间改进", "代通知金常见"], notice: "合约约定" },
    SG: { specifics: ["Poor performance 可 termination with notice", "PIP + 文档降低争议", "Citizen/PR notice 按 EA"], notice: "EA 通知期 + ex-gratia 惯例" },
    AU: { specifics: ["不能突击解雇", "Warnings + PIP", "Small business fair dismissal code"], notice: "NES 通知期" },
    NZ: { specifics: ["Fair process", "Trial period 不可用于已转正员工"], notice: "合理通知 + 合同" },
    MY: { specifics: ["渐进纪律与绩效", "EA 终止补偿"], notice: "4–8 周" },
    TH: { specifics: ["书面 PIP 泰文", "遣散费阶梯如解除"], notice: "≥1 薪资期" },
    JP: { specifics: ["绩效解雇极难", "多用希望退職或配转", "唱介/人事发令格式"], notice: "30 日" },
    KR: { specifics: ["正当理由", "绩效不达标论证", "징계/人事委员会"], notice: "30 日预报" },
    IN: { specifics: ["合同 + ex-gratia 谈判", "PIP 3–6 月常见"], notice: "合同" },
    ID: { specifics: ["警告信层级", "PHK 补偿测算"], notice: "30 天" },
    VN: { specifics: ["规章 KPI", "工会（如纪律解除）"], notice: "30–45 日" },
    PH: { specifics: ["Valid cause + due process", "PIP 记录用于 just cause"], notice: "30 日" }
  };

  const GLOSSARY = [
    { t: "无故解除 / Wrongful dismissal", d: "雇主没有合法理由或未走法定/合理程序解雇员工；员工可索赔或申请仲裁。" },
    { t: "Genuine redundancy（澳洲）", d: "岗位不再需要、非因员工个人表现；需 consultation 并可能付 redundancy pay。" },
    { t: "Retrenchment（新加坡）", d: "因业务原因裁岗，非因员工过失；MOM 有公平雇佣指引。" },
    { t: "经济补偿 N（中国）", d: "合法解除时按工龄每满一年一个月工资（有封顶）。" },
    { t: "Show cause", d: "给员工书面机会解释为何不应被处分/解雇。" },
    { t: "Domestic inquiry（新加坡）", d: "内部听证式违纪调查：指控、陈述、证据、决定。" },
    { t: "PIP", d: "绩效改进计划：书面目标、期限、辅导 — 解除前的常见必要步骤。" },
    { t: "希望退職（日本）", d: "员工「自愿」离职 + 公司 incentive — 日本大规模减员常用路径。" },
    { t: "Security of tenure（菲律宾）", d: "正当理由 + 完整程序才能解雇，试用期外保护强。" }
  ];

  const LEGAL_WHEN = [
    "涉及刑事、欺诈、数据泄露监管通报",
    "集体裁员/关闭办公室/罢工风险",
    "高管、工会成员、孕妇/病假员工*（各国保护不同）",
    "解除可能被诉或已在咨词/仲裁",
    "不确定适用哪国法律（派遣、跨境办公）"
  ];

  function esc(s) { return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;"); }

  function renderPhases(phases, title) {
    return `<h3 style="margin-bottom:0.75rem;color:var(--accent-2)">${esc(title)}</h3>` +
      phases.map(p => `<div class="phase-block">
        <div class="phase-head"><span class="role-tag">${esc(p.owner)}</span> <strong>${esc(p.phase)}</strong> <span class="phase-days">${esc(p.days || "")}</span></div>
        <ul>${(p.tasks||[]).map(t => `<li>${esc(t)}</li>`).join("")}</ul>
        ${p.donts ? `<p class="warn-box">避免：${p.donts.map(esc).join("；")}</p>` : ""}
        ${p.legal ? `<p class="legal-hint">${esc(typeof p.legal === "string" ? p.legal : "")}</p>` : ""}
      </div>`).join("");
  }

  window.renderWizard = function () {
    const caseId = document.getElementById("wizardCase").value;
    const code = document.getElementById("wizardCountry").value;
    const x = COUNTRIES[code];
    const label = CASE_LABELS[caseId];
    const inv = INV_COUNTRY[code] || {};
    const pip = PIP_COUNTRY[code] || {};
    let body = "";
    if (caseId === "disc") {
      body = renderPhases(UNIVERSAL_INVESTIGATION, "违纪调查 — 通用五步（再叠加本国要求）") +
        countryBox(code, inv, "本国调查要点");
    } else if (caseId === "pip") {
      body = renderPhases(UNIVERSAL_PIP, "绩效不佳 — 通用 PIP 五步") + countryBox(code, pip, "本国绩效解除要点");
    } else {
      const pack = (CHECKLISTS[caseId] && CHECKLISTS[caseId][code]) ||
        { steps: (CASES.find(c => c.id === caseId) || {}).steps || [], docs: [] };
      body = `<div class="plain-intro">你选择的场景：<strong>${esc(label)}</strong>。下面给出该国最需要注意的 3 件事，完整清单见 Case Checklist Tab。</div>
        <ul class="big-list">${pack.steps.slice(0, 8).map(s => `<li>${esc(s)}</li>`).join("")}</ul>
        <p class="plain-intro">${esc(x.keyNote)}</p>`;
    }
    document.getElementById("wizardBody").innerHTML = `
      <article class="checklist-card">
        <h2 style="font-size:1.05rem;margin-bottom:0.5rem">${x.flag} ${esc(x.name)} · ${esc(label)}</h2>
        <p class="plain-intro">${esc(x.law)}</p>
        ${body}
        <h4 style="margin-top:1rem">何时必须找当地律师 / Global Legal</h4>
        <ul>${LEGAL_WHEN.map(l => `<li>${esc(l)}</li>`).join("")}</ul>
        <div class="refs" style="margin-top:0.75rem">${x.refs.map(r => `<a href="${esc(r.u)}" target="_blank" rel="noopener">${esc(r.t)}</a>`).join("")}</div>
      </article>`;
  };

  function countryBox(code, data, title) {
    const x = COUNTRIES[code];
    return `<div class="country-addon">
      <h4>${x.flag} ${esc(title)}（典型 ${esc(data.timeline || "2–4 周")}）</h4>
      <ul>${(data.specifics || []).map(s => `<li>${esc(s)}</li>`).join("")}</ul>
      ${data.notice ? `<p class="plain-intro"><strong>通知/补偿线索：</strong>${esc(data.notice)}</p>` : ""}
      ${(data.legal || []).length ? `<p class="legal-hint">Legal：${data.legal.map(esc).join("；")}</p>` : ""}
    </div>`;
  }

  window.renderInvestigationPage = function () {
    const code = document.getElementById("invCountry").value;
    const inv = INV_COUNTRY[code];
    document.getElementById("invBody").innerHTML =
      `<p class="plain-intro">给<strong>不熟悉当地法</strong>的 HR：按下面顺序做，不会替代律师，但可避免 80% 程序失误。</p>` +
      renderPhases(UNIVERSAL_INVESTIGATION, "标准调查流程") + countryBox(code, inv, "叠加 — 本国");
  };

  window.renderPipPage = function () {
    const code = document.getElementById("pipCountry").value;
    const pip = PIP_COUNTRY[code];
    document.getElementById("pipBody").innerHTML =
      `<p class="plain-intro">绩效解除在多数 APAC 法域是<strong>高争议</strong>路径；PIP 的价值是证明「给了合理机会」。</p>` +
      renderPhases(UNIVERSAL_PIP, "标准 PIP 流程") + countryBox(code, pip, "叠加 — 本国");
  };

  window.renderGlossaryPage = function () {
    document.getElementById("glossaryBody").innerHTML = GLOSSARY.map(g =>
      `<article class="country-card"><h3>${esc(g.t)}</h3><p style="font-size:0.85rem;color:var(--muted)">${esc(g.d)}</p></article>`
    ).join("");
  };

  window.enrichChecklist = function (html, caseId, code) {
    if (caseId !== "disc" && caseId !== "pip") return html;
    const extra = caseId === "disc"
      ? `<div style="margin-top:1rem"><button type="button" class="btn" onclick="document.querySelector('[data-tab=investigation]').click()">打开完整调查手册</button></div>`
      : `<div style="margin-top:1rem"><button type="button" class="btn" onclick="document.querySelector('[data-tab=pip-manual]').click()">打开完整 PIP 手册</button></div>`;
    return html + extra;
  };

  window.initPlaybooks = function () {
    ["wizardCountry", "invCountry", "pipCountry"].forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      CODES.forEach(c => {
        const o = document.createElement("option");
        o.value = c;
        o.textContent = COUNTRIES[c].name;
        el.appendChild(o);
      });
      el.value = "SG";
    });
    document.getElementById("wizardCase")?.addEventListener("change", renderWizard);
    document.getElementById("wizardCountry")?.addEventListener("change", renderWizard);
    document.getElementById("invCountry")?.addEventListener("change", renderInvestigationPage);
    document.getElementById("pipCountry")?.addEventListener("change", renderPipPage);
    renderWizard();
    renderInvestigationPage();
    renderPipPage();
    renderGlossaryPage();
  };
})();