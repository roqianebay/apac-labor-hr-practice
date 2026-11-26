(function () {
  function L(zh, en) {
    return { zh, en };
  }

  /** Snapshot: illustrative open-role themes in CN/APAC — check careers pages for live counts */
  window.MI_APAC_OPEN_ROLES = [
    {
      companyId: "ebay",
      highlight: true,
      company: L("eBay", "eBay"),
      markets: [
        { flag: "🇨🇳", market: L("中国", "China"), rolesEst: 40, focus: L("技术、Trust、跨境卖家支持", "Tech, trust, cross-border seller support") },
        { flag: "🇦🇺", market: L("澳大利亚", "Australia"), rolesEst: 25, focus: L("客服、品类运营", "CS, category ops") },
        { flag: "🇸🇬", market: L("新加坡", "Singapore"), rolesEst: 15, focus: L("区域协调、财务", "Regional coordination, finance") },
        { flag: "🇯🇵", market: L("日本", "Japan"), rolesEst: 12, focus: L("本地化运营", "Localization ops") }
      ],
      roles: [
        L("软件/数据/ML", "Software / data / ML"),
        L("信任与安全", "Trust & safety"),
        L("产品与设计", "Product & design"),
        L("卖家增长", "Seller growth")
      ],
      careersUrl: "https://careers.ebayinc.com/",
      note: L("亚太岗位分散在多国站点；以官网筛选 China/APAC。", "APAC roles across sites — filter CN/APAC on careers site.")
    },
    {
      companyId: "amazon",
      company: L("亚马逊 Amazon", "Amazon"),
      markets: [
        { flag: "🇨🇳", market: L("中国", "China"), rolesEst: 80, focus: L("AWS、全球开店", "AWS, global selling") },
        { flag: "🇮🇳", market: L("印度", "India"), rolesEst: 200, focus: L("AWS、零售开发中心", "AWS, retail dev centers") },
        { flag: "🇦🇺", market: L("澳大利亚", "Australia"), rolesEst: 120, focus: L("履约中心、AWS", "FC, AWS") },
        { flag: "🇸🇬", market: L("新加坡", "Singapore"), rolesEst: 90, focus: L("AWS、区域总部", "AWS, regional HQ") }
      ],
      roles: [L("AWS", "AWS"), L("物流", "Logistics"), L("零售运营", "Retail ops")],
      careersUrl: "https://www.amazon.jobs/",
      note: L("中国以 AWS/跨境出口为主，非本土电商。", "China: AWS / export selling, not domestic retail.")
    },
    {
      companyId: "shopee",
      company: L("Shopee（Sea）", "Shopee (Sea)"),
      markets: [
        { flag: "🇸🇬", market: L("新加坡", "Singapore"), rolesEst: 60, focus: L("总部职能", "HQ functions") },
        { flag: "🇮🇩", market: L("印尼", "Indonesia"), rolesEst: 150, focus: L("履约、运营", "Fulfillment, ops") },
        { flag: "🇨🇳", market: L("中国", "China"), rolesEst: 30, focus: L("跨境卖家、供应链", "Cross-border sellers, supply chain") }
      ],
      roles: [L("履约", "Fulfillment"), L("直播电商", "Live commerce"), L("算法", "Algorithms")],
      careersUrl: "https://careers.sea.com/",
      note: L("东南亚本地岗为主。", "SEA local roles dominate.")
    },
    {
      companyId: "alibaba",
      company: L("阿里巴巴 / 速卖通", "Alibaba / AliExpress"),
      markets: [
        { flag: "🇨🇳", market: L("中国", "China"), rolesEst: 400, focus: L("国际数字商业、菜鸟、云", "AIDC, Cainiao, cloud") },
        { flag: "🇸🇬", market: L("新加坡", "Singapore"), rolesEst: 40, focus: L("Lazada、区域", "Lazada, regional") }
      ],
      roles: [L("国际电商", "Intl. e-commerce"), L("物流", "Logistics"), L("AI", "AI")],
      careersUrl: "https://talent.alibaba.com/",
      note: L("国际板块相对扩招。", "Intl. commerce relatively favored.")
    },
    {
      companyId: "tiktokshop",
      company: L("TikTok Shop / 字节", "TikTok Shop / ByteDance"),
      markets: [
        { flag: "🇸🇬", market: L("新加坡", "Singapore"), rolesEst: 50, focus: L("电商区域", "E-commerce regional") },
        { flag: "🇨🇳", market: L("中国", "China"), rolesEst: 200, focus: L("运营、算法、出海", "Ops, algo, export") },
        { flag: "🇮🇩", market: L("印尼", "Indonesia"), rolesEst: 80, focus: L("本地团队", "Local teams") }
      ],
      roles: [L("电商运营", "E-commerce ops"), L("算法推荐", "Reco algorithms"), L("合规", "Compliance")],
      careersUrl: "https://careers.tiktok.com/",
      note: L("编制变动快，以官网为准。", "Headcount volatile — verify on site.")
    },
    {
      companyId: "jd",
      company: L("京东 JD.com", "JD.com"),
      markets: [
        { flag: "🇨🇳", market: L("中国", "China"), rolesEst: 500, focus: L("物流、技术、零售", "Logistics, tech, retail") }
      ],
      roles: [L("物流", "Logistics"), L("供应链", "Supply chain"), L("技术", "Technology")],
      careersUrl: "https://zhaopin.jd.com/",
      note: L("物流岗占比高。", "Logistics roles are a large share.")
    }
  ];

  /** Recent public layoff/restructure reports — APAC or global with APAC impact (2025 press snapshot) */
  window.MI_LAYOFF_SNAPSHOT_YEAR = "2025";
  window.MI_RECENT_LAYOFFS = [
    {
      date: "2025-10",
      companyId: "sea",
      company: L("Sea（Shopee）", "Sea (Shopee)"),
      scaleNum: 500,
      scale: L("约数百人（区域报道）", "~hundreds (regional press)"),
      region: L("新加坡 / 东南亚", "Singapore / SEA"),
      reason: L("持续盈利目标；削减非核心与重叠职能。", "Profitability targets; trim non-core & overlap."),
      severanceApac: L(
        "新加坡：常见 <strong>N+</strong> 周薪至月薪 + 未休年假折现（个案协商）；其他国家按当地劳动法。",
        "Singapore: often <strong>N+</strong> weeks/months + AL encashment (negotiated); other countries per local law."
      )
    },
    {
      date: "2025-09",
      companyId: "alibaba",
      company: L("阿里巴巴", "Alibaba"),
      scaleNum: 800,
      scale: L("多业务线优化（未单点披露）", "Multi-unit optimization (not single disclosure)"),
      region: L("中国为主", "Primarily China"),
      reason: L("组织瘦身；聚焦电商与云、AI。", "Org slimming; focus commerce, cloud, AI."),
      severanceApac: L(
        "中国：<strong>N+1</strong> 至 <strong>N+3</strong> 协商常见；期权/社保按合同与地方口径。",
        "China: <strong>N+1</strong> to <strong>N+3</strong> common in tech; equity/social per contract & locale."
      )
    },
    {
      date: "2025-08",
      companyId: "shein",
      company: L("SHEIN", "SHEIN"),
      scaleNum: 300,
      scale: L("数百人（供应链侧优化报道）", "Hundreds (supply-chain optimization reports)"),
      region: L("广州 / 全球", "Guangzhou / global"),
      reason: L("降本与合规团队重组。", "Cost cut & compliance reorg."),
      severanceApac: L(
        "中国：按劳动法解除补偿（N 或 2N 视情形）；加班与争议个案敏感。",
        "China: statutory severance (N or 2N by case); OT/labor disputes sensitive."
      )
    },
    {
      date: "2025-11",
      companyId: "rakuten",
      company: L("乐天 Rakuten", "Rakuten"),
      scaleNum: 200,
      scale: L("集团重组裁员（百元级报道）", "Group restructuring (press, ~200+)"),
      region: L("日本", "Japan"),
      reason: L("非核心业务剥离；移动投资承压。", "Non-core divestitures; mobile investment pressure."),
      severanceApac: L(
        "日本：<strong>雇用调整助成金</strong>框架下协商退职；法定解除有严格要件。",
        "Japan: negotiated exits under adjustment subsidy schemes; strict dismissal rules."
      )
    },
    {
      date: "2025-07",
      companyId: "lazada",
      company: L("Lazada", "Lazada"),
      scaleNum: 150,
      scale: L("区域团队优化", "Regional team optimization"),
      region: L("东南亚多国", "Multiple SEA markets"),
      reason: L("竞争 TikTok Shop；提升人效。", "TikTok Shop rivalry; productivity."),
      severanceApac: L(
        "新/马/泰/菲/越/印尼：法定 notice + 服务年限金各异；无单一「亚太标准」。",
        "SG/MY/TH/PH/VN/ID: statutory notice + service pay vary — no single APAC standard."
      )
    },
    {
      date: "2024-2025",
      companyId: "ebay",
      company: L("eBay", "eBay"),
      scaleNum: 0,
      scale: L("无单项公开「裁员 N 人」披露；见 10-K/业绩会效率表述（不设条形图规模）", "No single public “N layoffs” disclosure; see 10-K/earnings efficiency commentary (excluded from scale chart)"),
      region: L("全球", "Global"),
      reason: L("组合与效率管理（公开表述）；具体影响以 People 为准。", "Portfolio & efficiency (public commentary); impacts via official People channels."),
      severanceApac: L(
        "亚太 office：<strong>当地法 + 公司政策</strong>；勿与媒体报道的其他公司规模直接类比。",
        "APAC offices: <strong>local law + policy</strong>; do not equate with press-reported peer headcount events."
      ),
      highlight: true
    }
  ];

  window.MI_LAYOFF_REASONS = [
    { id: "profit", label: L("盈利 / 人效", "Profit / productivity"), pct: 35, color: "#f59e0b" },
    { id: "ai", label: L("AI 与自动化", "AI & automation"), pct: 20, color: "#a78bfa" },
    { id: "compete", label: L("份额与低价竞争", "Share & price war"), pct: 22, color: "#f87171" },
    { id: "reorg", label: L("战略重组", "Strategic reorg"), pct: 15, color: "#38bdf8" },
    { id: "reg", label: L("监管 / 合规成本", "Regulation / compliance"), pct: 8, color: "#94a3b8" }
  ];

  window.MI_APAC_SEVERANCE_MODES = [
    {
      flag: "🇨🇳",
      market: L("中国大陆", "Mainland China"),
      pattern: L(
        "协商解除常见 <strong>N+1～N+3</strong>（科技业）；违法解除可能 <strong>2N</strong>。社保公积金停缴月份、年假折算需逐项核对。",
        "Mutual termination often <strong>N+1–N+3</strong> (tech); unlawful dismissal may be <strong>2N</strong>. Check social insurance & AL payout."
      )
    },
    {
      flag: "🇸🇬",
      market: L("新加坡", "Singapore"),
      pattern: L(
        "无全行业强制 N+1；多按合同 + <strong>CPF</strong>。裁员常 packages 含 notice、未休年假、医疗等，外企常给予额外 goodwill。",
        "No statutory N+1; contract + <strong>CPF</strong>. Packages: notice, AL, medical; MNCs often add goodwill."
      )
    },
    {
      flag: "🇦🇺",
      market: L("澳大利亚", "Australia"),
      pattern: L(
        "<strong>Fair Work</strong>：不符合 genuine redundancy 风险高；法定 notice + severance by service。集体磋商（如适用）。",
        "<strong>Fair Work</strong>: genuine redundancy test; notice + severance by service; consultation if required."
      )
    },
    {
      flag: "🇯🇵",
      market: L("日本", "Japan"),
      pattern: L(
        "解雇要件严格；多用协商退职 + 补贴。外包与正社员待遇差显著。",
        "Strict dismissal bars; negotiated exit + allowances common. Permatemp gap large."
      )
    },
    {
      flag: "🇭🇰",
      market: L("香港", "Hong Kong"),
      pattern: L(
        "法例长期服务金 / 遣散费（视制度衔接）；notice 按合同与《雇佣条例》。",
        "LPF/severance per ordinance transition; notice per contract & Employment Ordinance."
      )
    }
  ];
})();