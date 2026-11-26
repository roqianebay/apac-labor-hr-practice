(function () {
  function L(zh, en) {
    return { zh, en };
  }

  /**
   * Numeric peer metrics for charts. apacIndex = avg MI_APAC_FOOTPRINT 0–4 (computed in app if missing).
   * *Est = illustrative / third-party estimate when gmvEst/headcountEst true.
   */
  window.MI_CHART_METRICS = [
    {
      id: "ebay",
      color: "#14b8a6",
      headcount: 12300,
      headcountEst: false,
      gmvBn: 83.5,
      gmvEst: true,
      revenueBn: 11.8,
      revenueEst: true,
      growthPct: 8,
      growthEst: false,
      strength: 68,
      threat: 0,
      crossBorderPct: 5,
      crossBorderEst: false
    },
    {
      id: "amazon",
      color: "#f59e0b",
      headcount: 1550000,
      headcountEst: true,
      gmvBn: null,
      gmvEst: true,
      revenueBn: 638,
      revenueEst: false,
      growthPct: 11,
      growthEst: true,
      strength: 92,
      threat: 88,
      crossBorderPct: 24,
      crossBorderEst: false
    },
    {
      id: "temu",
      color: "#fb923c",
      headcount: 13000,
      headcountEst: true,
      gmvBn: 80,
      gmvEst: true,
      revenueBn: null,
      revenueEst: true,
      growthPct: 45,
      growthEst: true,
      strength: 78,
      threat: 95,
      crossBorderPct: 24,
      crossBorderEst: false
    },
    {
      id: "shein",
      color: "#e879f9",
      headcount: 16000,
      headcountEst: true,
      gmvBn: 35,
      gmvEst: true,
      revenueBn: 32,
      revenueEst: true,
      growthPct: 18,
      growthEst: true,
      strength: 72,
      threat: 82,
      crossBorderPct: 9,
      crossBorderEst: false
    },
    {
      id: "aliexpress",
      color: "#f97316",
      headcount: 200000,
      headcountEst: true,
      gmvBn: null,
      gmvEst: true,
      revenueBn: 45,
      revenueEst: true,
      growthPct: 15,
      growthEst: true,
      strength: 80,
      threat: 75,
      crossBorderPct: 8,
      crossBorderEst: false
    },
    {
      id: "shopee",
      color: "#f43f5e",
      headcount: 85000,
      headcountEst: true,
      gmvBn: 100,
      gmvEst: true,
      revenueBn: 12,
      revenueEst: true,
      growthPct: 12,
      growthEst: true,
      strength: 85,
      threat: 70,
      crossBorderPct: null,
      crossBorderEst: true
    },
    {
      id: "lazada",
      color: "#0ea5e9",
      headcount: 8000,
      headcountEst: true,
      gmvBn: 18,
      gmvEst: true,
      revenueBn: null,
      revenueEst: true,
      growthPct: 8,
      growthEst: true,
      strength: 68,
      threat: 65,
      crossBorderPct: null,
      crossBorderEst: true
    },
    {
      id: "rakuten",
      color: "#bf0000",
      headcount: 28000,
      headcountEst: true,
      gmvBn: 45,
      gmvEst: true,
      revenueBn: 15,
      revenueEst: true,
      growthPct: 3,
      growthEst: true,
      strength: 70,
      threat: 55,
      crossBorderPct: null,
      crossBorderEst: true
    },
    {
      id: "coupang",
      color: "#a855f7",
      headcount: 90000,
      headcountEst: true,
      gmvBn: 32,
      gmvEst: true,
      revenueBn: 30,
      revenueEst: false,
      growthPct: 14,
      growthEst: true,
      strength: 82,
      threat: 58,
      crossBorderPct: null,
      crossBorderEst: true
    },
    {
      id: "etsy",
      color: "#f472b6",
      headcount: 2400,
      headcountEst: false,
      gmvBn: 13.2,
      gmvEst: false,
      revenueBn: 2.7,
      revenueEst: false,
      growthPct: 4,
      growthEst: false,
      strength: 55,
      threat: 40,
      crossBorderPct: null,
      crossBorderEst: true
    },
    {
      id: "jd",
      color: "#dc2626",
      headcount: 570000,
      headcountEst: true,
      gmvBn: 420,
      gmvEst: true,
      revenueBn: 158,
      revenueEst: true,
      growthPct: 6,
      growthEst: true,
      strength: 86,
      threat: 45,
      crossBorderPct: null,
      crossBorderEst: true
    },
    {
      id: "tiktokshop",
      color: "#22d3ee",
      headcount: 150000,
      headcountEst: true,
      gmvBn: 33,
      gmvEst: true,
      revenueBn: null,
      revenueEst: true,
      growthPct: 55,
      growthEst: true,
      strength: 84,
      threat: 72,
      crossBorderPct: null,
      crossBorderEst: true
    },
    {
      id: "walmart",
      color: "#0071ce",
      headcount: 2100000,
      headcountEst: false,
      gmvBn: null,
      gmvEst: true,
      revenueBn: 680,
      revenueEst: false,
      growthPct: 5,
      growthEst: true,
      strength: 88,
      threat: 55,
      crossBorderPct: null,
      crossBorderEst: true
    }
  ];

  window.MI_CHART_METRIC_DEFS = [
    {
      id: "apacIndex",
      label: L("亚太布局指数", "APAC footprint index"),
      unit: L("0–4 均值", "0–4 average"),
      note: L("由亚太矩阵各国档位求平均。", "Average of APAC matrix footprint levels.")
    },
    {
      id: "headcount",
      label: L("员工人数", "Headcount"),
      unit: L("人（对数刻度）", "people (log scale)"),
      note: L("含仓储/门店的巨头编制明显偏高；详见公司档案。", "Retail/logistics giants incl. stores/FCs — see dossiers.")
    },
    {
      id: "gmvBn",
      label: L("GMV（十亿美元）", "GMV (USD bn)"),
      unit: L("十亿美元", "USD billions"),
      note: L("未披露项为估计，条形图为虚线边框。", "Undisclosed values estimated; dashed bar border.")
    },
    {
      id: "revenueBn",
      label: L("营收（十亿美元）", "Revenue (USD bn)"),
      unit: L("十亿美元", "USD billions"),
      note: L("部分为集团或分部口径，不宜直接等同 GMV。", "Some are group or segment basis — not equal to GMV.")
    },
    {
      id: "growthPct",
      label: L("增长（%）", "Growth (%)"),
      unit: L("同比约数", "YoY approx."),
      note: L("混合 GMV/营收/订单增速，仅供趋势感知。", "Mix of GMV/revenue/order growth — trend sense only.")
    },
    {
      id: "strength",
      label: L("竞争力指数", "Strength index"),
      unit: L("0–100 内部", "0–100 internal"),
      note: L("定性综合分，见竞品卡片。", "Qualitative rollup — see competitor cards.")
    },
    {
      id: "threat",
      label: L("对 eBay 威胁", "Threat to eBay"),
      unit: L("0–100 内部", "0–100 internal"),
      note: L("越高对 eBay 跨境/品类压力越大。", "Higher = more pressure on eBay cross-border/categories.")
    },
    {
      id: "crossBorderPct",
      label: L("跨境最近一单%", "Cross-border latest order %"),
      unit: L("% 调查", "% survey"),
      note: L("Statista/IPC 2025 受访者口径。", "Statista/IPC 2025 respondent share.")
    }
  ];

  /** Competitor taxonomy for HR */
  window.MI_PEER_TAXONOMY = [
    {
      id: "model",
      title: L("按商业模式", "By business model"),
      chips: [
        { label: L("纯第三方市场", "Pure 3P marketplace"), ids: ["ebay", "etsy"] },
        { label: L("自营 + 平台", "1P + marketplace"), ids: ["amazon", "jd", "walmart", "coupang"] },
        { label: L("全托管跨境", "Fully managed CB"), ids: ["temu", "shein", "aliexpress"] },
        { label: L("社交电商", "Social commerce"), ids: ["tiktokshop"] },
        { label: L("区域超本地", "Regional super-app"), ids: ["shopee", "lazada", "rakuten"] }
      ]
    },
    {
      id: "fulfillment",
      title: L("按履约方式", "By fulfillment"),
      chips: [
        { label: L("卖家自发货", "Seller-shipped"), ids: ["ebay", "etsy"] },
        { label: L("平台托管物流", "Platform-managed"), ids: ["ebay", "temu", "shein"] },
        { label: L("自建仓配", "Owned FC network"), ids: ["amazon", "jd", "coupang", "walmart"] },
        { label: L("第三方+补贴", "3P + subsidies"), ids: ["shopee", "lazada", "tiktokshop"] }
      ]
    },
    {
      id: "hr",
      title: L("按用工结构（HR 关注）", "By workforce shape (HR)"),
      chips: [
        { label: L("精干总部型", "Lean HQ"), ids: ["ebay", "etsy"] },
        { label: L("百万级门店/仓", "1M+ store/FC"), ids: ["amazon", "walmart"] },
        { label: L("物流劳工密集", "Logistics-heavy"), ids: ["jd", "coupang", "shopee"] },
        { label: L("高速扩张互联网", "Hyper-growth tech"), ids: ["temu", "tiktokshop", "shein"] }
      ]
    }
  ];

  window.MI_EBAY_VALUE_CHAIN = [
    {
      step: L("买家", "Buyers"),
      body: L("约 1.35 亿；爱好者/长尾需求；跨境占 GMV ~20%。", "~135M; enthusiast/long-tail; ~20% cross-border GMV."),
      hr: L("客服、Trust、支付争议、本土化营销。", "CS, trust, payments disputes, localized marketing.")
    },
    {
      step: L("卖家", "Sellers"),
      body: L("C2C/B2C；中国出口、美欧澳日供给与收货。", "C2C/B2C; CN export; US/EU/AU/JP supply & demand."),
      hr: L("卖家增长、政策教育与违规治理（非雇员但影响品牌）。", "Seller growth, policy education, enforcement (non-employee brand risk).")
    },
    {
      step: L("平台收入", "Monetization"),
      body: L("成交费 + 支付 + Promoted Listings 广告。", "Final value fees + payments + Promoted Listings."),
      hr: L("广告/产品/数据科学岗位与卖家成功指标挂钩。", "Ads/product/data roles tied to seller success metrics.")
    },
    {
      step: L("跨境物流", "Cross-border"),
      body: L("eIS、SpeedPAK；枢纽注入 + 关税退运托管。", "eIS, SpeedPAK; hub injection + duties/returns."),
      hr: L("物流合作、合规报关、亚太运营与时效 SLA。", "Carrier partners, customs compliance, APAC ops & SLAs.")
    },
    {
      step: L("信任与安全", "Trust & safety"),
      body: L("鉴别、假冒、支付欺诈、政策执法。", "Authentication, counterfeits, fraud, policy enforcement."),
      hr: L("高专业度审核与 ER 交叉（裁员、外包团队）。", "Specialist moderation; ER overlap (layoffs, vendors).")
    }
  ];

  window.MI_HRBP_SECTIONS = [
    {
      id: "biz-101",
      icon: "📊",
      title: L("业务 101：HR 该知道什么", "Business 101 for HR"),
      intro: L(
        "eBay 是<strong>资产轻型</strong>的第三方市场——收入来自卖家成交与广告，而非库存。人事工作围绕<strong>全球站点、跨境、信任、AI 产品</strong>展开。",
        "eBay is an <strong>asset-light</strong> 3P marketplace — revenue from seller transactions & ads, not inventory. People work spans <strong>global sites, cross-border, trust, AI product</strong>."
      ),
      items: [
        {
          title: L("核心指标语言", "Metrics language"),
          body: L("GMV（成交总额）→ 抽佣与广告；<strong>take rate</strong>；国际 GMV 占比 ~51%；活跃买家。", "GMV → fees & ads; <strong>take rate</strong>; ~51% non-U.S. GMV; active buyers.")
        },
        {
          title: L("战略翻译成人事", "Strategy → people"),
          body: L("爱好者品类 → 垂直人才（汽配、收藏品）；AI 刊登/搜索 → ML 扩招；跨境物流 → 亚太运营与合规。", "Enthusiasts → vertical talent (P&A, collectibles); AI listings/search → ML hiring; CB logistics → APAC ops & compliance.")
        },
        {
          title: L("与竞品的用工差异", "Workforce vs peers"),
          body: L("编制远小于 Amazon/京东/沃尔玛；更像<strong>产品+平台</strong>编制，而非百万物流劳动力。", "Much smaller than Amazon/JD/Walmart; <strong>product + platform</strong> headcount vs mega logistics.")
        }
      ]
    },
    {
      id: "segments",
      icon: "🌏",
      title: L("市场与区域分段", "Markets & segments"),
      intro: L("亚太 HR 常遇<strong>跨境出口卖家、本地买家、外包客服</strong>三类人群。", "APAC HR often touch <strong>export sellers, local buyers, vendor CS</strong>."),
      items: [
        {
          title: L("成熟买家市场", "Mature buyer markets"),
          body: L("澳大利亚、日本、英国/欧盟（经跨境）；高 ARPU、高信任要求。", "Australia, Japan, UK/EU (cross-border); high ARPU, high trust bar.")
        },
        {
          title: L("中国供给", "China supply"),
          body: L("出口卖家与物流合作方；SpeedPAK/eIS；合规与知识产权敏感。", "Export sellers & carriers; SpeedPAK/eIS; compliance & IP sensitivity.")
        },
        {
          title: L("东南亚增量", "SEA growth"),
          body: L("买家目的地 vs Shopee/TikTok <strong>本地化就业</strong>竞争；eBay 多为跨境而非本地站。", "Buyer destinations vs Shopee/TikTok <strong>local hiring</strong>; eBay mostly cross-border.")
        }
      ]
    },
    {
      id: "people-risks",
      icon: "⚠️",
      title: L("人事与 ER 风险地图", "People & ER risk map"),
      intro: L("了解业务有助于解释<strong>招聘冻结、裁员传闻、外包扩张</strong>。", "Business context explains <strong>hiring freezes, layoff rumors, vendor scale-up</strong>."),
      items: [
        {
          title: L("行业裁员周期", "Sector layoff cycles"),
          body: L("互联网 2022–2024 大平台裁员；eBay 相对克制。对标 Amazon/阿里/Sea 时员工易焦虑。", "2022–24 big-tech cuts; eBay more restrained. Amazon/Alibaba/Sea news drives anxiety.")
        },
        {
          title: L("外包与零工", "Vendors & gig"),
          body: L("信任审核、客服、内容审核常外包；竞对劳工纠纷可波及雇主品牌。", "Trust, CS, moderation often outsourced; peer labor scandals affect employer brand.")
        },
        {
          title: L("跨境合规人才", "Cross-border compliance"),
          body: L("关税、数据出境、劳动法多法域 — 法务+HR 政策协同需求上升。", "Tariffs, data transfer, multi-jurisdiction labor law — Legal + HR policy alignment.")
        }
      ]
    },
    {
      id: "conversations",
      icon: "💬",
      title: L("HR 对话素材", "Conversation starters"),
      intro: L("与业务负责人沟通时可用的<strong>中立事实句</strong>（非投资建议）。", "Neutral <strong>fact sentences</strong> for leader conversations (not investment advice)."),
      items: [
        {
          title: L("为什么谈跨境", "Why cross-border matters"),
          body: L("eBay ~20% GMV 跨境；Temu/Amazon 占跨境最近一单各约 24% — 业务在<em>渗透</em>不在<em>垄断</em>。", "~20% eBay GMV cross-border; Temu/Amazon ~24% latest CB order each — about <em>share</em> not <em>monopoly</em>.")
        },
        {
          title: L("为什么谈爱好者品类", "Why enthusiasts"),
          body: L("汽配、收藏品复购与鉴别能力构成差异化；廉价全托管不主打此库存。", "P&A, collectibles — repeat & authentication; discounters don't own this supply.")
        },
        {
          title: L("亚太竞品动态", "APAC peer moves"),
          body: L("Shopee/TikTok 本地用工扩张；我们跨境枢纽+<strong>精干</strong>全球团队组合不同。", "Shopee/TikTok expand local hiring; our model is CB hubs + <strong>lean</strong> global team.")
        }
      ]
    },
    {
      id: "ecosystem",
      icon: "🔗",
      title: L("生态与监管", "Ecosystem & regulation"),
      intro: L("2024–2026 平台政策影响<strong>人力合规与沟通</strong>。", "2024–26 platform policy shapes <strong>people compliance & comms</strong>."),
      items: [
        {
          title: L("小包关税与通关", "De minimis & customs"),
          body: L("美欧收紧影响 Temu/SHEIN 模式；eBay 托管关税方案是卖点也是运营复杂度。", "US/EU tightening hits discounters; eBay duty-managed shipping is selling point & complexity.")
        },
        {
          title: L("平台劳动者认定", "Platform labor rules"),
          body: L("部分市场讨论骑手/卖家劳动地位；人事政策需避免错误类比雇员关系。", "Some markets debate platform worker status; avoid wrong employee analogies in policy.")
        },
        {
          title: L("AI 与自动化", "AI & automation"),
          body: L("刊登、搜索、审核自动化 — 技能重塑与变更管理需求。", "Listings, search, moderation automation — reskilling & change management.")
        }
      ]
    }
  ];

  window.MI_MARKET_SIZE = [
    {
      label: L("亚太零售电商（2026）", "APAC retail e-commerce (2026)"),
      value: L("~$2.8T+ 量级（估）", "~$2.8T+ scale (est.)"),
      trend: L("增速仍领先全球；直播与社交电商加深", "Still faster than global; live & social commerce deepen")
    },
    {
      label: L("亚太跨境 B2C（2026）", "APAC cross-border B2C (2026)"),
      value: L("~$400B+ 量级（估）", "~$400B+ scale (est.)"),
      trend: L("小包关税变动下供应链再分配", "Supply chains reshuffle under parcel-duty rules")
    },
    {
      label: L("东南亚电商 GMV（2026）", "SEA e-commerce GMV (2026)"),
      value: L("~$155B 量级（估）", "~$155B scale (est.)"),
      trend: L("超本地平台主导；Temu/TikTok 补贴战续", "Hyper-local leads; Temu/TikTok subsidy fight continues")
    }
  ];
})();