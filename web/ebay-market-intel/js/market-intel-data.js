function L(zh, en) {
  return { zh, en };
}

window.MI_DATA_VERSION = "2026-11-26-apac";

/** @type {Array<{id:string, value:string, label:L, hint:L}>} */
window.MI_EBAY_KPIS = [
  {
    id: "gmv",
    value: "$79.6B",
    chartNum: 79.6,
    label: L("2025 全球 GMV", "2025 global GMV"),
    hint: L("年报口径；含运费与税费", "Annual report; incl. shipping & tax")
  },
  {
    id: "apac-gmv",
    value: "~$26B",
    chartNum: 26,
    apac: true,
    label: L("亚太相关 GMV（估）", "APAC-related GMV (est.)"),
    hint: L(
      "公司未单独披露；综合澳/日/韩/东南亚买家与中国出口卖家等<strong>内部估算</strong>。",
      "Not separately disclosed; <strong>internal est.</strong> from AU/JP/KR/SEA buyers & China export sellers."
    )
  },
  {
    id: "apac-pct",
    value: "~33%",
    chartNum: 33,
    apac: true,
    label: L("亚太占全球 GMV（估）", "APAC share of global GMV (est.)"),
    hint: L("在 51% 非美国 GMV 中亚太为最大区域块之一", "Among 51% non-U.S. GMV, APAC is one of the largest blocks")
  },
  {
    id: "intl",
    value: "51%",
    chartNum: 51,
    label: L("GMV 来自美国以外", "GMV outside U.S."),
    hint: L("国际化仍为增长核心", "International mix remains core")
  },
  {
    id: "xb",
    value: "~20%",
    chartNum: 20,
    label: L("全球跨境 GMV 占比", "Global cross-border GMV share"),
    hint: L("管理层公开表述", "Management commentary")
  },
  {
    id: "apac-xb",
    value: "~9%",
    chartNum: 9,
    apac: true,
    label: L("亚太跨境 GMV 占比（估）", "APAC cross-border GMV share (est.)"),
    hint: L("中国出口经 SpeedPAK/eIS + 澳日东南亚买家跨境", "CN export via SpeedPAK/eIS + AU/JP/SEA buyer imports")
  },
  {
    id: "buyers",
    value: "135M",
    label: L("活跃买家（约）", "Active buyers (approx.)"),
    hint: L("2025 年报", "2025 annual report")
  },
  {
    id: "countries",
    value: "190+",
    label: L("可送达市场", "Ship-to markets"),
    hint: L("含国际物流托管方案", "Incl. managed intl. shipping")
  },
  {
    id: "xb-share",
    value: "5%",
    chartNum: 5,
    label: L("全球跨境最近一单份额", "Latest cross-border order share"),
    hint: L("Statista / IPC 2025 调查；亚太消费者亦适用", "Statista / IPC 2025; applies to APAC consumers")
  }
];

/** APAC-first brief for overview & cross-border tabs */
window.MI_APAC_FOCUS = {
  headline: L(
    "亚太是 eBay 国际 GMV 与跨境卖家的<strong>主战场</strong>",
    "APAC is the <strong>primary theater</strong> for eBay intl. GMV & cross-border sellers"
  ),
  lede: L(
    "本看板<strong>默认亚太视角</strong>：澳新、东北亚、东南亚、中国出口供给与监管动态；欧美数据仅作参照。",
    "This board defaults to an <strong>APAC lens</strong>: ANZ, North Asia, SEA, China export supply & regulation; US/EU as reference only."
  ),
  bullets: [
    L("买家：澳大利亚、日本长期为跨境高渗透市场", "Buyers: Australia & Japan long high cross-border penetration"),
    L("卖家：中国出口仓/eIS/ SpeedPAK 为亚太跨境供给枢纽", "Sellers: China export + eIS/SpeedPAK as APAC supply hub"),
    L("竞争：Shopee/TikTok/Lazada 超本地 vs Temu/Shein 低价渗透", "Rivals: Shopee/TikTok/Lazada local vs Temu/Shein price ingress"),
    L("人事：区域精干总部 + 各国站点/外包客服与 Trust", "People: lean regional hub + country sites/vendor CS & trust")
  ]
};

window.MI_APAC_CB_INSIGHTS = [
  {
    title: L("亚太跨境在学什么", "What APAC cross-border means here"),
    body: L(
      "不仅是「中国卖全球」，也包括<strong>澳日买家</strong>在美欧日库存中淘宝、<strong>东南亚</strong>消费者使用 Amazon/Temu/本地应用对中国件下单。eBay 差异化在<strong>C2C 长尾 + 托管关税</strong>。",
      "Not only “China to world” but <strong>AU/JP buyers</strong> sourcing globally, <strong>SEA</strong> consumers on Amazon/Temu/apps buying from China. eBay wedge: <strong>C2C long-tail + managed duties</strong>."
    )
  },
  {
    title: L("亚太竞争态势（2025–2026）", "APAC competitive set (2025–26)"),
    body: L(
      "东南亚<strong>超本地</strong>（Shopee、Lazada、TikTok Shop）抢本地就业与商家；<strong>全托管</strong>（Temu、Shein、速卖通）抢价格与跨境件；亚马逊 FBA 在澳印日强势。",
      "SEA <strong>hyper-local</strong> (Shopee, Lazada, TikTok Shop) for local jobs/merchants; <strong>fully managed</strong> (Temu, SHEIN, AliExpress) on price/parcels; Amazon FBA strong in AU/IN/JP."
    )
  },
  {
    title: L("对亚太 HR 的含义", "Implications for APAC HR"),
    body: L(
      "编制分布在<strong>新加坡/澳洲区域协调</strong>、<strong>中国技术与卖家支持</strong>、<strong>各国 Trust/CS</strong>；员工常感知「全球裁员新闻」但更应以<strong>亚太 GMV 与跨境项目</strong>讨论优先级。",
      "Roles split across <strong>SG/AU coordination</strong>, <strong>China tech & seller support</strong>, <strong>country trust/CS</strong>; global layoff news ≠ always APAC cuts — anchor talks in <strong>APAC GMV & CB programs</strong>."
    )
  }
];

/** APAC sub-region role for eBay (qualitative 1–5) */
window.MI_APAC_REGION_BARS = [
  { id: "anz", name: L("澳新 ANZ", "ANZ"), ebayRole: 5, cbIntensity: 4, color: "#14b8a6", highlight: true },
  { id: "jpkr", name: L("日本 / 韩国", "Japan / Korea"), ebayRole: 4, cbIntensity: 4, color: "#38bdf8" },
  { id: "cn", name: L("中国出口供给", "China export supply"), ebayRole: 4, cbIntensity: 5, color: "#f97316" },
  { id: "sea", name: L("东南亚", "Southeast Asia"), ebayRole: 2, cbIntensity: 4, color: "#f43f5e" },
  { id: "in", name: L("印度", "India"), ebayRole: 2, cbIntensity: 2, color: "#a855f7" }
];

/** @type {Array<{id:string, title:L, body:L, bullets:L[]}>} */
window.MI_STRATEGY_PILLARS = [
  {
    id: "relevant",
    title: L("相关体验 Relevant Experiences", "Relevant Experiences"),
    body: L(
      "聚焦「爱好者」品类：汽配零部件、收藏品、翻新、服饰、奢侈品与球鞋；AI 搜索与发现、策展式购物体验。",
      "Enthusiast focus: P&A, collectibles, refurbished, apparel, luxury & sneakers; AI search/discovery and curated journeys."
    ),
    bullets: [
      L("品类深耕而非全品类价格血战", "Category depth vs. race-to-bottom pricing"),
      L("信任、鉴别与 C2C/B2C 混合供给", "Trust, authentication & mixed C2C/B2C supply")
    ]
  },
  {
    id: "scalable",
    title: L("可扩展方案 Scalable Solutions", "Scalable Solutions"),
    body: L(
      "亚太：<strong>SpeedPAK</strong>、<strong>eBay International Shipping</strong> 服务中国出口与澳日等枢纽；广告与支付降低跨境摩擦。",
      "APAC: <strong>SpeedPAK</strong> & <strong>eBay International Shipping</strong> for China export & AU/JP hubs; ads & payments cut friction."
    ),
    bullets: [
      L("中国卖家发国内枢纽 → 平台处理关税/退运", "CN sellers inject at domestic hub → duties/returns managed"),
      L("澳大利亚/日本买家体验优化为区域重点", "AU/JP buyer experience as regional priority")
    ]
  },
  {
    id: "magical",
    title: L("创新体验 Magical Innovations", "Magical Innovations"),
    body: L(
      "生成式 AI 刊登、直播电商（eBay Live）与个性化推荐；提升转化与广告货币化。",
      "Gen-AI listings, live commerce (eBay Live), personalization; conversion & ads monetization."
    ),
    bullets: [
      L("技术投入偏向效率与卖家成功率", "Tech spend tied to seller success & efficiency"),
      L("非战略第三方广告收缩，一方便告增长", "Trim non-strategic 3P ads; grow 1P advertising")
    ]
  }
];

/** Cross-border “latest order” share — illustrative public survey 2025 */
window.MI_CROSSBORDER_BARS = [
  { id: "amazon", name: L("亚马逊 Amazon", "Amazon"), pct: 24, color: "#f59e0b" },
  { id: "temu", name: L("Temu（拼多多）", "Temu (PDD)"), pct: 24, color: "#fb923c" },
  { id: "shein", name: L("SHEIN", "SHEIN"), pct: 9, color: "#e879f9" },
  { id: "aliexpress", name: L("速卖通 AliExpress", "AliExpress"), pct: 8, color: "#f97316" },
  { id: "ebay", name: L("eBay", "eBay"), pct: 5, color: "#22d3ee", highlight: true },
  { id: "zalando", name: L("Zalando", "Zalando"), pct: 3, color: "#94a3b8" },
  { id: "other", name: L("其他 Other", "Other"), pct: 27, color: "#475569" }
];

/** @type {Array<{year:number, events:Array<{q:string, text:L}>}>} */
window.MI_TIMELINE = [
  {
    year: 2024,
    events: [
      { q: "Q1–Q2", text: L("eBay 强化爱好者品类与 AI 刊登工具；跨境托管物流向更多始发国扩展。", "eBay doubles down on enthusiast categories & AI listing tools; managed intl. shipping expands origins.") },
      { q: "Q2–Q4", text: L("Temu / SHEIN 在欧美加速补贴获客；跨境平台「最近一单」份额快速上升。", "Temu/SHEIN subsidy-led growth in EU/US; cross-border “latest order” share rises sharply.") },
      { q: "全年", text: L("亚马逊 FBA 与 Buy with Prime 跨境零售广告一体化；Shopee 亚太聚焦盈利。", "Amazon FBA + Buy with Prime retail media; Shopee APAC profitability focus.") }
    ]
  },
  {
    year: 2025,
    events: [
      { q: "H1", text: L("eBay GMV 约 390 亿美元（半年）；国际收入占比维持约一半。", "eBay ~$39B H1 GMV; ~half revenue non-U.S.") },
      { q: "H2", text: L("国际运输方案推广至加拿大等；直播电商与收藏品增长。", "Intl. shipping rolls to Canada etc.; live commerce & collectibles growth.") },
      { q: "调查", text: L("全球跨境最近一单：亚马逊与 Temu 各约 24%，eBay 约 5%（较前几年承压）。", "Global latest cross-border order: Amazon & Temu ~24% each, eBay ~5% (pressure vs prior years).") }
    ]
  },
  {
    year: 2026,
    events: [
      { q: "展望", text: L("监管（关税、平台责任、数据）与物流成本成跨境主变量；爱好者品类与鉴别信任是 eBay 差异化。", "Regulation (duties, platform liability, data) & logistics costs dominate; enthusiast trust is eBay’s wedge.") },
      { q: "亚太", text: L("中国出口卖家 + 澳日东南亚买家双侧；与本土超本地平台（Shopee、Coupang）竞合。", "China export sellers + AU/JP/SEA buyers; coopetition with hyper-local apps (Shopee, Coupang).") }
    ]
  }
];

/**
 * @type {Array<{
 *   id:string, name:L, badge:L, model:L,
 *   revenue:L, trend:L, strategy:L, logistics:L, talent:L, apac:L,
 *   competitiveness:number, threat:number,
 *   moats:L[], risks:L[], refs:{title:L,url:string}[]
 * }>}
 */
window.MI_COMPETITORS = [
  {
    id: "amazon",
    name: L("亚马逊 Amazon", "Amazon"),
    badge: L("综合龙头", "Market leader"),
    model: L("自营 + 第三方市场 + 云", "1P + 3P marketplace + AWS"),
    revenue: L("2024 净销售额约 6,380 亿美元量级", "~$638B net sales scale (2024)"),
    trend: L("2025：零售与广告稳健；资本开支向 AI 与物流。", "2025: retail & ads solid; capex to AI & logistics."),
    strategy: L(" Prime 会员飞轮、FBA、广告与低价百货扩张；跨境 Buy with Prime。", "Prime flywheel, FBA, ads & essentials; cross-border Buy with Prime."),
    logistics: L("FBA 全球仓网；龙舟专线；末端自建与外包混合。", "Global FBA; Dragon Boat lanes; mixed last-mile."),
    talent: L("2022–2024 多轮裁员后编制趋稳；AI 与物流岗扩招。", "Post-2022–24 layoffs stabilization; AI/logistics hiring."),
    apac: L("日印澳新成熟；东南亚通过收购/合作；中国进口为主。", "Mature JP/IN/AU/NZ; SEA via partners; China import-focused."),
    competitiveness: 92,
    threat: 88,
    moats: [L("Prime 与 FBA 时效", "Prime + FBA speed"), L("搜索与广告密度", "Search & ad density")],
    risks: [L("监管与反垄断", "Regulation & antitrust"), L("低价平台侵蚀", "Discount platform erosion")],
    refs: [{ title: L("Amazon 投资者关系", "Amazon IR"), url: "https://ir.aboutamazon.com/" }]
  },
  {
    id: "temu",
    name: L("Temu（拼多多海外）", "Temu (PDD)"),
    badge: L("跨境低价", "Cross-border discounter"),
    model: L("全托管 + 中国供给", "Fully managed + China supply"),
    revenue: L("未单独披露；GMV 增速全球领先梯队", "Not broken out; GMV growth top-tier globally"),
    trend: L("2024–2025 跨境份额跃升至与亚马逊并列。", "2024–25 cross-border share jumped to parity with Amazon."),
    strategy: L("极致低价、补贴拉新；半托管向本地化过渡（挑战加大）。", "Ultra-low price & subsidies; semi-managed local pivot (harder)."),
    logistics: L("集运仓 + 邮政/专线；对关税政策高度敏感。", "Consolidation hubs + postal/linehaul; tariff-sensitive."),
    talent: L("国内供应链人才为主；海外本地化团队扩张。", "China supply talent core; overseas localization hires."),
    apac: L("澳日韩东南亚快速增长；与 Shopee 价格竞争。", "Fast growth AU/JP/KR/SEA; price war vs Shopee."),
    competitiveness: 78,
    threat: 95,
    moats: [L("供给链成本", "Supply-chain cost"), L("流量补贴", "Traffic subsidies")],
    risks: [L("监管/合规", "Compliance"), L("补贴不可持续", "Subsidy sustainability")],
    refs: [{ title: L("Statista 跨境份额", "Statista cross-border share"), url: "https://www.statista.com/statistics/878623/digital-retailers-digital-buyers-cross-border-digital-purchases/" }]
  },
  {
    id: "shein",
    name: L("SHEIN", "SHEIN"),
    badge: L("时尚跨境", "Fashion cross-border"),
    model: L("小单快反 + DTC", "Small-batch fast fashion DTC"),
    revenue: L("私有公司；媒体估年收入数百亿美元级", "Private; press estimates $10B+ scale"),
    trend: L("2025 份额约 9%；面临的监管与本地化仓库增加。", "~9% 2025 share; more local hubs & scrutiny."),
    strategy: L("服饰美妆为主；第三方平台（SHEIN Marketplace）扩张。", "Apparel/beauty; marketplace expansion."),
    logistics: L("国内中心仓 + 海外前置仓；空运占比高。", "China hub + overseas hubs; air-heavy."),
    talent: L("广州供应链与跨境运营为核心；多地设办公室。", "GZ supply chain core; multi-region offices."),
    apac: L("东南亚、中东、拉美增长；与本土时尚平台竞争。", "Growth in SEA, MENA, LatAm; vs local fashion."),
    competitiveness: 72,
    threat: 82,
    moats: [L("SKU 上新速度", "SKU velocity"), L("社交营销", "Social marketing")],
    risks: [L("ESG 与关税", "ESG & duties"), L("品牌升级难度", "Brand upmarket difficulty")],
    refs: [{ title: L("SHEIN 新闻室", "SHEIN newsroom"), url: "https://www.sheingroup.com/newsroom" }]
  },
  {
    id: "aliexpress",
    name: L("阿里巴巴 · 速卖通", "Alibaba · AliExpress"),
    badge: L("中国跨境 B2C", "China cross-border B2C"),
    model: L("平台 + 全托管 Choice", "Marketplace + Choice fully managed"),
    revenue: L("阿里国际数字商业板块增长强于国内淘天", "AIDC segment outpaces China Taobao/Tmall"),
    trend: L("2025 加码海外仓与欧洲本地化履约。", "2025: more EU local fulfillment & warehouses."),
    strategy: L("Choice 全托管对标 Temu；各国站点差异化。", "Choice vs Temu; localized country sites."),
    logistics: L("菜鸟全球网络 + 海外仓；中欧铁路/海运。", "Cainiao network + overseas warehouses."),
    talent: L("阿里集团组织瘦身；国际团队相对优先。", "Alibaba group slimming; intl. teams relatively favored."),
    apac: L("日韩东南亚卖家/买家双向；与 eBay 在标准品/长尾重叠。", "Two-way JP/KR/SEA; overlaps eBay on long-tail."),
    competitiveness: 80,
    threat: 75,
    moats: [L("菜鸟物流", "Cainiao logistics"), L("中国产业带", "China industrial belts")],
    risks: [L("国内竞争分流", "Domestic competition"), L("地缘政治", "Geopolitics")],
    refs: [{ title: L("阿里巴巴投资者", "Alibaba IR"), url: "https://www.alibabagroup.com/" }]
  },
  {
    id: "shopee",
    name: L("Shopee（Sea）", "Shopee (Sea)"),
    badge: L("东南亚超本地", "SEA super-app"),
    model: L("C2C/B2C 市场 + 游戏/金融", "Marketplace + games/fintech"),
    revenue: L("Sea 集团电商 GMV 领先东南亚", "Sea group leads SEA e-commerce GMV"),
    trend: L("2024–2025 盈利改善；物流补贴收敛。", "2024–25 profitability improves; logistics subsidies tighten."),
    strategy: L("直播、短视频、免运促销；跨境中国件。", "Live stream, video, free-shipping promos; CN cross-border."),
    logistics: L("SLS 自建物流；最后一公里密集。", "Shopee Logistics SLS; dense last-mile."),
    talent: L("区域裁员与优化与盈利目标绑定。", "Regional layoffs tied to profitability targets."),
    apac: L("新加坡总部；印尼、越南、泰国、菲律宾核心。", "Singapore HQ; ID/VN/TH/PH core."),
    competitiveness: 85,
    threat: 70,
    moats: [L("东南亚心智", "SEA consumer mindshare"), L("低价包邮", "Low price + free ship")],
    risks: [L("Temu/Lazada 竞争", "Temu/Lazada rivalry"), L("汇率", "FX")],
    refs: [{ title: L("Sea 投资者", "Sea Limited IR"), url: "https://www.sea.com/investors" }]
  },
  {
    id: "lazada",
    name: L("Lazada（阿里）", "Lazada (Alibaba)"),
    badge: L("东南亚", "Southeast Asia"),
    model: L("品牌 + 平台", "Brands + marketplace"),
    revenue: L("阿里国际板块一部分", "Part of Alibaba International"),
    trend: L("与 TikTok Shop、Shopee 三国杀；整合菜鸟。", "Fight vs TikTok Shop & Shopee; Cainiao integration."),
    strategy: L("品牌官方店；大促与跨境中国供给。", "Brand flagship stores; mega-sales & CN supply."),
    logistics: L("区域仓 + 3PL；大件重货本地化。", "Regional DCs + 3PL; bulky local delivery."),
    talent: L("多轮优化；技术岗向 AI 推荐倾斜。", "Multiple optimization rounds; AI reco hiring."),
    apac: L("泰马菲越新；中国卖家出海通道。", "TH/MY/PH/VN/SG; China seller outbound."),
    competitiveness: 68,
    threat: 65,
    moats: [L("阿里资金与供给", "Alibaba capital & supply")],
    risks: [L("份额压力", "Share pressure")],
    refs: [{ title: L("Lazada", "Lazada"), url: "https://www.lazada.com/" }]
  },
  {
    id: "rakuten",
    name: L("乐天 Rakuten", "Rakuten"),
    badge: L("日本", "Japan"),
    model: L("电商 + 金融科技 + 移动", "Commerce + fintech + mobile"),
    revenue: L("日本 GMV 领先平台之一", "Among top JP GMV marketplaces"),
    trend: L("跨境电商通道 Rakuten Global；物流联盟。", "Rakuten Global cross-border; logistics alliances."),
    strategy: L("积分经济圈；711 便利店取货网络。", "Points ecosystem; convenience store pickup."),
    logistics: L("乐天物流 + 伙伴；关西/关东仓。", "Rakuten Logistics + partners; Kanto/Kansai DCs."),
    talent: L("集团重组；非核心资产剥离。", "Group restructuring; non-core divestitures."),
    apac: L("日本主战场；台湾 Rakuten 生态；与 eBay 买家重叠。", "Japan core; Taiwan ecosystem; buyer overlap with eBay."),
    competitiveness: 70,
    threat: 55,
    moats: [L("积分与金融交叉销售", "Points & fintech cross-sell")],
    risks: [L("亚马逊日本", "Amazon Japan")],
    refs: [{ title: L("乐天 IR", "Rakuten IR"), url: "https://global.rakuten.com/corp/investors/" }]
  },
  {
    id: "coupang",
    name: L("Coupang", "Coupang"),
    badge: L("韩国", "South Korea"),
    model: L("自营 + 市场 + 火箭配送", "1P + marketplace + Rocket"),
    revenue: L("韩国电商份额领先", "Leading Korean e-commerce share"),
    trend: L("2025 中国台湾扩张；物流复制。", "2025 Taiwan expansion; logistics playbook copy."),
    strategy: L("Rocket 当日/次日达；会员订阅。", "Rocket same/next-day; membership."),
    logistics: L("自建履约网络成护城河。", "Owned fulfillment as moat."),
    talent: L("韩国本土扩招履约与算法。", "KR hiring in fulfillment & algorithms."),
    apac: L("韩国主市场；台日试点；与跨境平台间接竞争。", "Korea core; TW/JP pilots; indirect vs cross-border."),
    competitiveness: 82,
    threat: 58,
    moats: [L("履约速度", "Fulfillment speed")],
    risks: [L("盈利平衡", "Profitability balance")],
    refs: [{ title: L("Coupang IR", "Coupang IR"), url: "https://ir.aboutcoupang.com/" }]
  },
  {
    id: "etsy",
    name: L("Etsy", "Etsy"),
    badge: L("手工/长尾", "Handmade / long-tail"),
    model: L("纯第三方手工艺市场", "Pure 3P handmade marketplace"),
    revenue: L("年收入约 27 亿美元量级（2024）", "~$2.7B revenue scale (2024)"),
    trend: L("增长放缓；与 eBay 在收藏品/手工艺交叉。", "Slower growth; overlaps eBay collectibles."),
    strategy: L("搜索与广告货币化；负责任商业叙事。", "Search & ad monetization; responsible commerce."),
    logistics: L("卖家自发货为主；与 eBay 差异化较小。", "Mostly seller-shipped; less logistics moat."),
    talent: L("精简组织；产品工程聚焦。", "Lean org; product/engineering focus."),
    apac: L("欧美为主；亚太卖家出口。", "US/EU core; APAC sellers export."),
    competitiveness: 55,
    threat: 40,
    moats: [L("手工艺心智", "Handmade brand")],
    risks: [L("Temu 廉价替代品", "Temu substitutes")],
    refs: [{ title: L("Etsy IR", "Etsy IR"), url: "https://investors.etsy.com/" }]
  },
  {
    id: "jd",
    name: L("京东 JD.com", "JD.com"),
    badge: L("中国自营+平台", "China 1P + platform"),
    model: L("自营 B2C + POP + 京东物流", "1P B2C + POP + JD Logistics"),
    revenue: L("2024 净收入约 1.16 万亿人民币量级", "~¥1.16T net revenue scale (2024)"),
    trend: L("利润改善；跨境 JD Worldwide 与工业品。", "Margin improvement; JD Worldwide & industrials."),
    strategy: L("低价心智对抗拼多多；物流科技对外输出。", "Value vs PDD; logistics tech output."),
    logistics: L("亚洲最大自建物流之一；仓配一体。", "Among Asia’s largest owned logistics networks."),
    talent: L("物流人数占多数；技术岗稳定。", "Logistics-heavy; steady tech roles."),
    apac: L("中国主场；跨境进口/出口；东南亚试点有限。", "China core; cross-border; limited SEA pilots."),
    competitiveness: 86,
    threat: 45,
    moats: [L("自营履约", "Owned fulfillment"), L("3C/家电", "Electronics/appliances")],
    risks: [L("价格战", "Price war"), L("增量放缓", "Slower growth")],
    refs: [{ title: L("京东投资者关系", "JD IR"), url: "https://ir.jd.com/" }]
  },
  {
    id: "tiktokshop",
    name: L("TikTok Shop", "TikTok Shop"),
    badge: L("社交电商", "Social commerce"),
    model: L("内容种草 + 闭环下单", "Content discovery + in-app checkout"),
    revenue: L("字节未单列；估 GMV 数百亿美元级", "ByteDance not broken out; est. $10B+ GMV scale"),
    trend: L("2024–2025 东南亚与美国扩张；监管波动。", "2024–25 SEA & U.S. expansion; regulatory swings."),
    strategy: L("达人分销；货盘性价比；与 Lazada/Shopee 混战。", "Creator affiliates; value assortment; battle vs Lazada/Shopee."),
    logistics: L("依赖第三方与平台补贴；本地仓逐步增加。", "3P logistics & subsidies; more local stock."),
    talent: L("ByteDance 编制大；电商团队快速调整。", "Large ByteDance base; volatile commerce team."),
    apac: L("印尼、泰国、越南、马来、菲律宾、新加坡主战场。", "ID, TH, VN, MY, PH, SG core."),
    competitiveness: 84,
    threat: 72,
    moats: [L("流量与内容", "Traffic & content"), L("直播转化", "Live conversion")],
    risks: [L("政策与封禁", "Policy/ban risk"), L("低毛利", "Low margin")],
    refs: [{ title: L("TikTok Business", "TikTok Business"), url: "https://www.tiktok.com/business/en" }]
  },
  {
    id: "walmart",
    name: L("沃尔玛 Walmart", "Walmart"),
    badge: L("零售+市场", "Retail + marketplace"),
    model: L("线下门店 + 电商 + WFS", "Stores + e-com + WFS"),
    revenue: L("全球零售营收约 6,800 亿美元 FY", "~$680B global retail revenue FY"),
    trend: L("Marketplace 与广告追赶 Amazon；会员 Walmart+。", "Marketplace & ads catch Amazon; Walmart+."),
    strategy: L("全渠道 + 3P 卖家扩张；大宗商品与商超。", "Omnichannel + 3P expansion; grocery & essentials."),
    logistics: L("门店作前置仓；WFS 对标 FBA。", "Stores as forward locations; WFS vs FBA."),
    talent: L("全球最大雇主之一；门店岗为主。", "Among world’s largest employers; store-heavy."),
    apac: L("中国山姆；电商跨境有限；亚太非主战场。", "Sam’s Club China; limited APAC e-com."),
    competitiveness: 88,
    threat: 55,
    moats: [L("门店密度", "Store density"), L("采购规模", "Procurement scale")],
    risks: [L("电商利润率", "E-com margin"), L("亚太份额弱", "Weak APAC share")],
    refs: [{ title: L("Walmart IR", "Walmart IR"), url: "https://stock.walmart.com/" }]
  },
  {
    id: "ebay",
    name: L("eBay（本公司）", "eBay (home company)"),
    badge: L("第三方市场", "3P marketplace"),
    model: L("C2C/B2C 平台 · 无自营库存", "C2C/B2C platform · no 1P inventory"),
    revenue: L("2024 营收约 103 亿美元；2025 GMV 近 800 亿", "~$10.3B revenue 2024; ~$80B GMV 2025"),
    trend: L("爱好者品类 + 广告 + 跨境托管物流；份额在低价跨境中承压。", "Enthusiast categories + ads + managed intl. shipping; share pressure vs discounters."),
    strategy: L("三大支柱：相关体验、可扩展方案、创新体验；AI 与直播。", "Three pillars: relevant experiences, scalable solutions, magical innovations; AI & live."),
    logistics: L("eBay International Shipping、SpeedPAK、端到端关税与退运托管。", "eIS, SpeedPAK, duties/returns managed end-to-end."),
    talent: L("相对克制裁员；投资 AI、信任与安全、产品。", "Relatively disciplined workforce; invest in AI, trust & product."),
    apac: L("澳日强买家；中国出口卖家；东南亚为跨境目的地。", "Strong AU/JP buyers; China export sellers; SEA as destinations."),
    competitiveness: 68,
    threat: 0,
    moats: [L("全球长尾库存", "Global long-tail inventory"), L("收藏品/汽配心智", "Collectibles & P&A"), L("跨境信任与支付", "Cross-border trust & payments")],
    risks: [L("低价全托管平台", "Managed low-price apps"), L("搜索外部化", "Search disintermediation")],
    refs: [
      { title: L("eBay 2025 年报", "eBay 2025 annual report"), url: "https://investors.ebayinc.com/" },
      { title: L("SEC 10-K", "SEC 10-K"), url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001065088" }
    ]
  }
];

/** APAC country rows — qualitative footprint 1–5 */
window.MI_APAC_MARKETS = [
  { code: "AU", flag: "🇦🇺", name: L("澳大利亚", "Australia") },
  { code: "CN", flag: "🇨🇳", name: L("中国", "China") },
  { code: "HK", flag: "🇭🇰", name: L("香港", "Hong Kong") },
  { code: "JP", flag: "🇯🇵", name: L("日本", "Japan") },
  { code: "KR", flag: "🇰🇷", name: L("韩国", "South Korea") },
  { code: "SG", flag: "🇸🇬", name: L("新加坡", "Singapore") },
  { code: "MY", flag: "🇲🇾", name: L("马来西亚", "Malaysia") },
  { code: "TH", flag: "🇹🇭", name: L("泰国", "Thailand") },
  { code: "VN", flag: "🇻🇳", name: L("越南", "Vietnam") },
  { code: "ID", flag: "🇮🇩", name: L("印度尼西亚", "Indonesia") },
  { code: "PH", flag: "🇵🇭", name: L("菲律宾", "Philippines") },
  { code: "IN", flag: "🇮🇳", name: L("印度", "India") },
  { code: "TW", flag: "🇹🇼", name: L("台湾", "Taiwan") }
];

/**
 * footprint: 0 none, 1 low, 2 moderate, 3 strong, 4 leadership
 * keys match competitor id + ebay always
 */
window.MI_APAC_FOOTPRINT = {
  AU: { ebay: 4, amazon: 4, temu: 3, shein: 3, aliexpress: 2, shopee: 1, lazada: 1, rakuten: 1, coupang: 1, jd: 1, tiktokshop: 2 },
  CN: { ebay: 2, amazon: 2, temu: 1, shein: 2, aliexpress: 3, shopee: 1, lazada: 1, rakuten: 1, coupang: 1, jd: 4, tiktokshop: 2 },
  HK: { ebay: 2, amazon: 3, temu: 3, shein: 3, aliexpress: 2, shopee: 2, lazada: 1, rakuten: 1, coupang: 1, jd: 3, tiktokshop: 3 },
  JP: { ebay: 3, amazon: 4, temu: 3, shein: 3, aliexpress: 2, shopee: 1, lazada: 1, rakuten: 4, coupang: 2, jd: 2, tiktokshop: 2 },
  KR: { ebay: 2, amazon: 3, temu: 3, shein: 3, aliexpress: 2, shopee: 1, lazada: 1, rakuten: 2, coupang: 4, jd: 1, tiktokshop: 2 },
  SG: { ebay: 2, amazon: 3, temu: 3, shein: 3, aliexpress: 2, shopee: 4, lazada: 3, rakuten: 1, coupang: 1, jd: 2, tiktokshop: 4 },
  MY: { ebay: 2, amazon: 2, temu: 3, shein: 3, aliexpress: 3, shopee: 4, lazada: 4, rakuten: 1, coupang: 1, jd: 2, tiktokshop: 4 },
  TH: { ebay: 1, amazon: 2, temu: 3, shein: 3, aliexpress: 2, shopee: 4, lazada: 3, rakuten: 1, coupang: 1, jd: 1, tiktokshop: 4 },
  VN: { ebay: 1, amazon: 1, temu: 2, shein: 3, aliexpress: 2, shopee: 4, lazada: 2, rakuten: 1, coupang: 1, jd: 1, tiktokshop: 4 },
  ID: { ebay: 1, amazon: 1, temu: 2, shein: 3, aliexpress: 2, shopee: 4, lazada: 3, rakuten: 1, coupang: 1, jd: 1, tiktokshop: 4 },
  PH: { ebay: 1, amazon: 2, temu: 3, shein: 3, aliexpress: 2, shopee: 4, lazada: 3, rakuten: 1, coupang: 1, jd: 1, tiktokshop: 4 },
  IN: { ebay: 2, amazon: 4, temu: 2, shein: 3, aliexpress: 2, shopee: 1, lazada: 1, rakuten: 1, coupang: 1, jd: 1, tiktokshop: 3 },
  TW: { ebay: 2, amazon: 3, temu: 3, shein: 3, aliexpress: 2, shopee: 3, lazada: 1, rakuten: 2, coupang: 3, jd: 2, tiktokshop: 3 }
};

/** Logistics comparison 1–5 scores for chart (internal qualitative) */
window.MI_LOGISTICS_SCORES = [
  { id: "ebay", label: L("eBay", "eBay"), speed: 3, cost: 4, apacFit: 4, highlight: true, color: "#14b8a6" },
  { id: "amazon", label: L("Amazon FBA", "Amazon FBA"), speed: 5, cost: 2, apacFit: 4, color: "#f59e0b" },
  { id: "temu", label: L("Temu/SHEIN", "Temu/SHEIN"), speed: 2, cost: 5, apacFit: 3, color: "#fb923c" },
  { id: "cainiao", label: L("菜鸟/速卖通", "Cainiao/AE"), speed: 3, cost: 4, apacFit: 4, color: "#f97316" },
  { id: "shopee", label: L("Shopee SLS", "Shopee SLS"), speed: 4, cost: 3, apacFit: 5, color: "#f43f5e" }
];

window.MI_LOGISTICS_ROWS = [
  {
    player: L("eBay", "eBay"),
    highlight: true,
    model: L("托管国际运输 eIS + SpeedPAK", "Managed eIS + SpeedPAK"),
    strengths: L("卖家发国内枢纽；平台处理关税/退运；覆盖 190 国", "Domestic hub injection; duties/returns handled; 190+ countries"),
    apac: L("中国出口、澳大利亚进口、日本/东南亚买家", "China export, Australia import, JP/SEA buyers"),
    watch: L("时效 vs FBA/火箭配送；平价平台物流补贴", "Speed vs FBA/Rocket; subsidized discounter logistics")
  },
  {
    player: L("Amazon FBA", "Amazon FBA"),
    model: L("海外仓 + 头程", "Overseas FC + inbound"),
    strengths: L("Prime 时效；跨境龙舟与本地库存", "Prime SLA; Dragon Boat & local stock"),
    apac: L("日印澳成熟；东南亚通过合作", "JP/IN/AU mature; SEA partners"),
    watch: L("仓储费与合规成本", "Storage fees & compliance")
  },
  {
    player: L("Temu / SHEIN", "Temu / SHEIN"),
    model: L("集运 + 空运/邮政", "Consolidation + air/postal"),
    strengths: L("极低包邮门槛", "Ultra-low free-shipping threshold"),
    apac: L("全亚太铺货；关税政策敏感", "Pan-APAC; tariff-sensitive"),
    watch: L("监管与可持续性质疑", "Regulation & sustainability")
  },
  {
    player: L("菜鸟 / 速卖通", "Cainiao / AliExpress"),
    model: L("海外仓 + 中欧班列", "Overseas WH + rail"),
    strengths: L("中国产业带一体化", "China belt integration"),
    apac: L("东南亚仓网与 EU 本地化", "SEA warehouse network & EU local"),
    watch: L("地缘政治与成本", "Geopolitics & cost")
  },
  {
    player: L("Shopee SLS", "Shopee SLS"),
    model: L("区域自建 + 跨境专线", "Regional owned + CB lanes"),
    strengths: L("东南亚最后一公里密度", "SEA last-mile density"),
    apac: L("六国核心市场", "Six core SEA markets"),
    watch: L("盈利与补贴平衡", "Profit vs subsidy balance")
  }
];

window.MI_TALENT_SNAPSHOT = [
  {
    company: L("eBay", "eBay"),
    highlight: true,
    hiring: L("AI/ML、广告、信任与安全、产品工程；亚太客服与卖家运营。", "AI/ML, ads, trust & safety, product eng.; APAC CS & seller ops."),
    layoffs: L("2022–2024 行业周期中有精简，规模小于大型同行；重心转向效率。", "2022–24 cycle trimming, smaller than mega-cap peers; efficiency focus."),
    signal: L("稳定盈利 + 回购；人才竞争在 AI 与跨境合规。", "Profitable + buybacks; talent war in AI & trade compliance.")
  },
  {
    company: L("Amazon", "Amazon"),
    hiring: L("AWS、物流机器人、AI 购物。", "AWS, robotics, AI shopping."),
    layoffs: L("2022–2024 多万人级裁员后趋稳。", "Stabilized after 2022–24 10k+ cuts."),
    signal: L("总部 RTO 政策；区域差异大。", "HQ RTO; regional variance.")
  },
  {
    company: L("阿里巴巴", "Alibaba"),
    hiring: L("国际电商、云、AI。", "Intl. commerce, cloud, AI."),
    layoffs: L("2023–2025 组织瘦身与业务聚焦。", "2023–25 org slimming & focus."),
    signal: L("国内 vs 国际板块编制分化。", "China vs intl. headcount split.")
  },
  {
    company: L("Sea / Shopee", "Sea / Shopee"),
    hiring: L("履约、直播电商、支付。", "Fulfillment, live commerce, payments."),
    layoffs: L("盈利压力下区域优化。", "Regional optimization for profit."),
    signal: L("东南亚本地化团队扩张。", "SEA localization hiring.")
  },
  {
    company: L("Temu / PDD", "Temu / PDD"),
    hiring: L("供应链、算法、海外合规。", "Supply chain, algorithms, compliance."),
    layoffs: L("快速扩张期，整体净增。", "Expansion phase, net adds."),
    signal: L("低薪高加班文化争议。", "Work-culture debates.")
  },
  {
    company: L("京东 JD", "JD.com"),
    hiring: L("物流科技、工业品、跨境采销。", "Logistics tech, industrials, cross-border sourcing."),
    layoffs: L("总体编制稳定；结构向履约与科技倾斜。", "Relatively stable; shift to fulfillment & tech."),
    signal: L("人效与利润率压力并存。", "Productivity vs margin pressure.")
  },
  {
    company: L("TikTok Shop", "TikTok Shop"),
    hiring: L("本地运营、达人生态、合规与履约。", "Local ops, creators, compliance, fulfillment."),
    layoffs: L("随政策与市场调整团队规模。", "Team size shifts with policy/markets."),
    signal: L("东南亚扩张 vs 欧美合规成本高。", "SEA expansion vs US/EU compliance cost.")
  },
  {
    company: L("沃尔玛 Walmart", "Walmart"),
    hiring: L("门店、电商履约、广告技术。", "Stores, e-com fulfillment, retail media tech."),
    layoffs: L("总部小幅优化；门店岗流动性高。", "Corp micro-trims; high store churn."),
    signal: L("全美最大私营雇主画像。", "Largest private U.S. employer profile.")
  }
];

window.MI_SOURCES = [
  { title: L("eBay Investor Relations", "eBay Investor Relations"), url: "https://investors.ebayinc.com/" },
  { title: L("eBay 2025 Annual Report (SEC)", "eBay 2025 Annual Report (SEC)"), url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001065088" },
  { title: L("Statista — cross-border latest order 2025", "Statista — cross-border latest order 2025"), url: "https://www.statista.com/statistics/878623/digital-retailers-digital-buyers-cross-border-digital-purchases/" },
  { title: L("Statista — Temu penetration chart", "Statista — Temu penetration chart"), url: "https://www.statista.com/chart/36522/global-cross-border-e-commerce-market-penetration-by-company/" },
  { title: L("APAC ER News（裁员动态）", "APAC ER News (layoffs)"), url: "https://roqianebay.github.io/apac-ta-employer-monitor/" },
  { title: L("Talent Employer Policy Monitor", "Talent Employer Policy Monitor"), url: "https://roqianebay.github.io/apac-ta-employer-policy-monitor/" },
  { title: L("Amazon IR", "Amazon IR"), url: "https://ir.aboutamazon.com/" },
  { title: L("JD IR", "JD IR"), url: "https://ir.jd.com/" },
  { title: L("Walmart IR", "Walmart IR"), url: "https://stock.walmart.com/" }
];