/** Company dossiers keyed to MI_COMPETITORS id — public / filing-based where noted */
(function () {
  function L(zh, en) {
    return { zh, en };
  }

  /**
   * @type {Record<string, {
   *   founded:string, hq:L, listing:L,
   *   history:L, culture:L, chinaEntry:L,
   *   gmv2025:L, revenue2025:L, growth2025:L,
   *   headcount:L, headcountNote:L,
   *   businessModel:L, marketShare:L,
   *   milestones:Array<{year:number,text:L}>,
   *   extra?:Array<{label:L,value:L}>
   * }>}
   */
  window.MI_COMPANY_PROFILES = {
    ebay: {
      founded: "1995",
      hq: L("美国加州圣何塞", "San Jose, California, U.S."),
      listing: L("纳斯达克 EBAY", "Nasdaq: EBAY"),
      history: L(
        "Pierre Omidyar 创办 AuctionWeb，发展为全球最大 C2C/B2C 第三方市场之一；历经 PayPal 分拆、StubHub 等资产处置，现聚焦核心市场平台。",
        "Pierre Omidyar’s AuctionWeb became a global C2C/B2C marketplace; after PayPal spin-off and asset sales, focus is the core marketplace."
      ),
      culture: L(
        "使命「为所有人创造经济机会」；强调包容性、卖家成功与社区信任；混合办公与全球分布式团队。",
        "Mission: economic opportunity for all; seller success, trust, community; hybrid work & distributed teams."
      ),
      chinaEntry: L(
        "2003 年前后布局中国站点与出口卖家生态；<strong>eBay 中国</strong>曾与 EachNet 合并，后重心转向<strong>中国跨境出口卖家</strong>（SpeedPAK/eIS），本土 C2C 平台业务让位于淘宝等。",
        "China site & export sellers from ~2003; EachNet merger era, then pivot to <strong>China export sellers</strong> (SpeedPAK/eIS) as domestic C2C shifted to local champions."
      ),
      gmv2025: L("<strong>$796 亿</strong> GMV（FY2025 年报）", "<strong>$79.6B</strong> GMV (FY2025 annual report)"),
      revenue2025: L("<strong>$111 亿</strong> 营收（+8%）", "<strong>$11.1B</strong> revenue (+8%)"),
      growth2025: L("GMV +7%；营收 +8%（年报口径）", "GMV +7%; revenue +8% (annual report)"),
      headcount: L("约 <strong>12,300</strong> 人（2025-12-31）", "~<strong>12,300</strong> (Dec 31, 2025)"),
      headcountNote: L("见 10-K 披露", "See 10-K filing"),
      businessModel: L(
        "纯平台抽佣 + 支付 + 一方便告；无自营库存；爱好者品类与跨境托管物流。",
        "Marketplace take rate + payments + 1P ads; no 1P inventory; enthusiasts & managed cross-border."
      ),
      marketShare: L(
        "全球第三方 C2C 领先；跨境「最近一单」约 5%（2025–26 调查），低于 Amazon/Temu。",
        "Leading global C2C marketplace; ~5% latest cross-border order share (2025–26 survey), below Amazon/Temu."
      ),
      milestones: [
        { year: 1995, text: L("AuctionWeb 上线", "AuctionWeb launches") },
        { year: 2002, text: L("收购 PayPal", "Acquires PayPal") },
        { year: 2015, text: L("分拆 PayPal", "PayPal spin-off") },
        { year: 2023, text: L("战略聚焦「爱好者电商」", "“E-commerce for enthusiasts” strategy") },
        { year: 2025, text: L("GMV $79.6B 年报；国际 GMV 约 51%", "GMV $79.6B annual report; ~51% non-U.S. GMV") }
      ],
      extra: [
        { label: L("买家规模", "Buyers"), value: L("约 1.35 亿", "~135M") },
        { label: L("可达市场", "Reach"), value: L("190+ 国家/地区", "190+ markets") }
      ]
    },
    amazon: {
      founded: "1994",
      hq: L("美国华盛顿州西雅图", "Seattle, Washington, U.S."),
      listing: L("纳斯达克 AMZN", "Nasdaq: AMZN"),
      history: L(
        "从在线书店到「万货商店」、AWS 云、Prime 会员与物流帝国；第三方市场 GMV 占电商业务主体。",
        "Online books to everything store, AWS cloud, Prime and logistics; 3P marketplace dominates retail GMV."
      ),
      culture: L(
        "Leadership Principles、客户痴迷、Day 1；高强度与数据驱动；近年推 RTO（重返办公室）争议。",
        "Leadership Principles, customer obsession, Day 1; intense, data-driven; RTO debates."
      ),
      chinaEntry: L(
        "2004 进入中国（amazon.cn）；<strong>2019</strong> 起关闭国内第三方电商，保留 AWS、跨境进口（海外购）与全球开店（中国卖家出口）。",
        "Entered China 2004 (amazon.cn); from <strong>2019</strong> wound down domestic 3P, kept AWS, cross-border import & global selling for CN exporters."
      ),
      gmv2025: L("未单独披露电商 GMV", "E-commerce GMV not separately disclosed"),
      revenue2025: L("2024 净销售约 <strong>$6,380 亿</strong>；2025 持续双位数 AWS/广告", "2024 net sales ~<strong>$638B</strong>; 2025 AWS/ads growth"),
      growth2025: L("零售中低个位数；云与广告双位数（分部）", "Retail mid-single digits; cloud & ads double-digit (segments)"),
      headcount: L("约 <strong>155 万</strong>（2024，含仓储）", "~<strong>1.55M</strong> (2024, incl. warehouses)"),
      headcountNote: L("体量最大；2022–2024 总部与技术裁员后趋稳", "Largest; stabilized after 2022–24 corp/tech cuts"),
      businessModel: L("自营 + 3P 市场 + FBA + AWS + 广告 + 订阅 Prime", "1P + 3P + FBA + AWS + ads + Prime"),
      marketShare: L("美国电商份额领先；跨境最近一单约 <strong>24%</strong>（2025）", "U.S. e-commerce leader; ~<strong>24%</strong> latest cross-border order (2025)"),
      milestones: [
        { year: 1994, text: L("Cadabra 书店创立", "Cadabra bookstore founded") },
        { year: 2005, text: L("推出 Prime", "Prime launched") },
        { year: 2006, text: L("AWS 对外商用", "AWS commercial launch") },
        { year: 2019, text: L("中国本土电商调整", "China domestic marketplace pivot") }
      ]
    },
    temu: {
      founded: "2022",
      hq: L("美国波士顿 / 上海（拼多多集团）", "Boston, U.S. / Shanghai (PDD Group)"),
      listing: L("母公司拼多多 PDD（纳斯达克）", "Parent PDD Holdings (Nasdaq)"),
      history: L(
        "拼多多 2022 年推出海外品牌 Temu，全托管跨境模式复制国内供应链效率；2024–2025 全球下载与 GMV 爆发。",
        "PDD launched Temu in 2022 with fully managed cross-border; explosive global downloads & GMV 2024–25."
      ),
      culture: L(
        "继承拼多多「本分、拼搏」；极致效率、补贴换增长；跨境团队快速扩张与本地化合规并重。",
        "PDD ethos: efficiency, subsidies for growth; rapid intl. expansion + compliance."
      ),
      chinaEntry: L(
        "本身即中国供应链出海窗口；<strong>2022-09</strong> 美国首发，后快速进入亚太、欧洲、拉美。",
        "China supply export channel; U.S. launch <strong>Sep 2022</strong>, then APAC, EU, LatAm."
      ),
      gmv2025: L("未披露；估数十亿–百亿美元级（第三方）", "Undisclosed; third-party estimates in tens–hundreds of billions USD"),
      revenue2025: L("合并入 PDD 财报，未单列", "Consolidated in PDD; not broken out"),
      growth2025: L("跨境用户与订单增速全球领先梯队", "Among fastest cross-border order growth globally"),
      headcount: L("集团约 <strong>1.3 万+</strong>（PDD 2023 约）；Temu 团队持续扩张", "PDD ~<strong>13k+</strong> (2023 filing); Temu team expanding"),
      headcountNote: L("含大量供应链与运营外包", "Heavy ops & supply-chain outsourcing"),
      businessModel: L("全托管（平台定价/履约）+ 中国工厂直供", "Fully managed (platform pricing/fulfillment) + CN factory supply"),
      marketShare: L("跨境最近一单约 <strong>24%</strong>，与亚马逊并列（2025）", "~<strong>24%</strong> latest cross-border order, tied with Amazon (2025)"),
      milestones: [
        { year: 2015, text: L("拼多多成立", "Pinduoduo founded") },
        { year: 2022, text: L("Temu 上线", "Temu launch") },
        { year: 2024, text: L("半托管模式试水", "Semi-managed pilot") }
      ]
    },
    shein: {
      founded: "2008",
      hq: L("新加坡（运营总部）/ 广州起源", "Singapore (HQ) / Guangzhou origin"),
      listing: L("非上市（筹备 IPO 报道屡有）", "Private (IPO reports recurring)"),
      history: L(
        "从婚纱跨境电商到全球快时尚 DTC；小单快反供应链 + 社交营销；近年推平台化（SHEIN Marketplace）。",
        "Wedding export to global fast-fashion DTC; small-batch supply chain + social; marketplace push."
      ),
      culture: L(
        "高速迭代、数据选品；劳工与 ESG 议题持续受到关注。",
        "Rapid iteration, data-led assortment; ongoing labor/ESG scrutiny."
      ),
      chinaEntry: L(
        "中国供应链起家；对国内买家以跨境电商/独立站为主，非传统「进中国做本土站」模式。",
        "Built on China supply; serves China buyers via cross-border/DTC, not classic domestic marketplace entry."
      ),
      gmv2025: L("未上市未披露；媒体估 GMV/收入数百亿美元级", "Private; press estimates $10B+ revenue scale"),
      revenue2025: L("估 +20% 左右（第三方，波动大）", "Est. ~+20% (third-party, volatile)"),
      growth2025: L("增速较 2021–2023 峰值放缓；本地化仓增加", "Slower vs 2021–23 peak; more local hubs"),
      headcount: L("估 <strong>1.6 万</strong>（公开报道区间）", "Est. <strong>~16k</strong> (press range)"),
      headcountNote: L("含大量供应链合作伙伴", "Large partner network beyond FTEs"),
      businessModel: L("DTC 自营 + 开放平台；空运小包跨境", "DTC 1P + marketplace; air parcel cross-border"),
      marketShare: L("跨境最近一单约 <strong>9%</strong>（2025）", "~<strong>9%</strong> latest cross-border order (2025)"),
      milestones: [
        { year: 2008, text: L("Nanjing 起源", "Founded in Nanjing") },
        { year: 2015, text: L("品牌 SHEIN 全球化", "SHEIN global brand") },
        { year: 2023, text: L("第三方卖家平台", "Marketplace for sellers") }
      ]
    },
    aliexpress: {
      founded: "2010",
      hq: L("中国杭州（阿里）", "Hangzhou, China (Alibaba)"),
      listing: L("母公司 BABA 纽交所/港交所", "Parent BABA NYSE/HKEX"),
      history: L(
        "阿里旗下面向海外消费者的 B2C 跨境平台；与菜鸟协同；<strong>Choice</strong> 全托管对标 Temu。",
        "Alibaba B2C export platform; Cainiao synergy; <strong>Choice</strong> fully managed vs Temu."
      ),
      culture: L(
        "阿里「客户第一」与新六脉神剑；组织瘦身后国际数字商业（AIDC）权重上升。",
        "Alibaba values; post-reorg AIDC (intl. digital commerce) prioritized."
      ),
      chinaEntry: L(
        "从中国出海，无「进入中国」概念；服务全球买家、中国/全球卖家。",
        "Export-from-China; serves global buyers and CN/global sellers."
      ),
      gmv2025: L("AIDC 季度 GMV 双位数增长（阿里财报表述）", "AIDC GMV double-digit growth (Alibaba earnings)"),
      revenue2025: L("阿里 AIDC 收入增速领先国内电商板块", "AIDC revenue growth outpaces China commerce"),
      growth2025: L("Choice + 海外仓推动欧洲/新兴市场", "Choice + overseas WH for EU/emerging"),
      headcount: L("集团约 <strong>20 万</strong>（2024）；速卖通团队为子集", "Group ~<strong>200k</strong> (2024); AE team is subset"),
      headcountNote: L("2023–2025 多轮组织优化", "2023–25 org optimizations"),
      businessModel: L("平台抽佣 + 广告 + 全托管 Choice + 菜鸟", "Commission + ads + Choice + Cainiao"),
      marketShare: L("跨境最近一单约 <strong>8%</strong>", "~<strong>8%</strong> latest cross-border order"),
      milestones: [
        { year: 1999, text: L("阿里巴巴成立", "Alibaba founded") },
        { year: 2010, text: L("AliExpress 发布", "AliExpress launch") },
        { year: 2023, text: L("Choice 全托管", "Choice fully managed") }
      ]
    },
    shopee: {
      founded: "2015",
      hq: L("新加坡", "Singapore"),
      listing: L("Sea Limited SE（纽交所）", "Sea Limited SE (NYSE)"),
      history: L(
        "Sea Group 旗下；移动端优先抓住东南亚智能手机红利；与 Garena 游戏、SeaMoney 金融协同。",
        "Sea Group unit; mobile-first SEA; synergy with Garena games & SeaMoney."
      ),
      culture: L(
        "创业文化、区域大战；盈利压力下从规模转向效率。", 
        "Startup culture, regional blitz; shift from growth-at-all-costs to profit."
      ),
      chinaEntry: L(
        "在中国不设 C 端本土站；<strong>跨境中国卖家</strong>与保税仓模式服务东南亚。",
        "No China domestic C-site; <strong>CN cross-border sellers</strong> & bonded WH for SEA."
      ),
      gmv2025: L("2024 全年电商 GMV 约 <strong>$1,000 亿+</strong>（Sea 披露量级）", "2024 e-commerce GMV ~<strong>$100B+</strong> scale (Sea filings)"),
      revenue2025: L("电商收入随 GMV 与 take rate；集团曾扭亏", "E-commerce revenue with GMV/take rate; group profitability improved"),
      growth2025: L("GMV 中个位数至低双位数（区域分化）", "GMV mid-single to low double digits (by market)"),
      headcount: L("Sea 集团约 <strong>8.5 万</strong>（峰值后优化）", "Sea ~<strong>85k</strong> (post optimization from peak)"),
      headcountNote: L("2022–2024 裁员与编制收缩", "2022–24 layoffs & headcount cuts"),
      businessModel: L("0 佣金时代结束；佣金+广告+ SLS 物流+金融", "Commissions + ads + SLS logistics + fintech"),
      marketShare: L("东南亚多国电商份额 #1–2", "Top 1–2 e-commerce share in several SEA markets"),
      milestones: [
        { year: 2009, text: L("Garena/Sea 成立", "Garena/Sea founded") },
        { year: 2015, text: L("Shopee 推出", "Shopee launch") },
        { year: 2023, text: L("集团首次季度盈利", "First quarterly group profit") }
      ]
    },
    lazada: {
      founded: "2012",
      hq: L("新加坡", "Singapore"),
      listing: L("阿里全资子公司（曾融资）", "Alibaba subsidiary"),
      history: L(
        "Rocket Internet 孵化后在东南亚扩张；<strong>2016</strong> 阿里控股，与菜鸟、天猫国际协同。",
        "Rocket Internet spinout; <strong>2016</strong> Alibaba control; Cainiao/Tmall Global synergy."
      ),
      culture: L(
        "阿里系与本土团队融合；大促驱动、卖家运营重地。",
        "Alibaba + local teams; campaign-driven seller ops."
      ),
      chinaEntry: L(
        "中国卖家出海主渠道之一；LazGlobal 跨境业务。",
        "Major CN seller export channel; LazGlobal cross-border."
      ),
      gmv2025: L("未单独披露；估东南亚第三极（次于 Shopee/TikTok）", "Not disclosed; est. #3 in SEA behind Shopee/TikTok"),
      revenue2025: L("合并阿里 AIDC", "Part of Alibaba AIDC"),
      growth2025: L("份额承压；投入品牌与物流", "Share pressure; brand & logistics investment"),
      headcount: L("估数千–上万（区域）", "Est. thousands–10k+ regional"),
      headcountNote: L("与 TikTok Shop 竞争加剧", "Competition vs TikTok Shop"),
      businessModel: L("B2C 平台 + 跨境 LazGlobal + 阿里生态", "B2C marketplace + LazGlobal + Alibaba ecosystem"),
      marketShare: L("马来西亚、泰国等仍居前 2–3", "Top 2–3 in MY, TH, etc."),
      milestones: [
        { year: 2012, text: L("Lazada 成立", "Lazada founded") },
        { year: 2016, text: L("阿里控股", "Alibaba majority stake") }
      ]
    },
    rakuten: {
      founded: "1997",
      hq: L("日本东京", "Tokyo, Japan"),
      listing: L("东京证交所 4755", "TSE: 4755"),
      history: L(
        "日本电商 pioneer；扩展至金融、移动 Rakuten Mobile；海外收购（含时尚、物流）后部分收缩。",
        "Japan e-commerce pioneer; fintech, Rakuten Mobile; some intl. M&A retrenched."
      ),
      culture: L(
        "「Optimism」文化与英语化办公实验；集团复杂多元。", 
        "“Optimism” culture; Englishization experiment; conglomerate complexity."
      ),
      chinaEntry: L(
        "与中国业务有限；接待中国跨境卖家；旅行与营销合作。",
        "Limited China domestic; hosts CN cross-border sellers; travel/marketing ties."
      ),
      gmv2025: L("日本 EC 交易额万亿日元量级（集团披露）", "Japan EC GMS in trillions of JPY (group)"),
      revenue2025: L("电商服务收入个位数增长", "E-commerce services low-single-digit growth"),
      growth2025: L("金融与移动拖累利润；电商稳健", "Finance/mobile weigh on profit; commerce steady"),
      headcount: L("集团约 <strong>2.8 万+</strong>（全球）", "Group <strong>28k+</strong> global"),
      headcountNote: L("重组非核心业务", "Restructuring non-core units"),
      businessModel: L("市场 + 积分 + 金融 + 物流 Rakuten Logistics", "Marketplace + points + finance + logistics"),
      marketShare: L("日本电商交易额领先阵营", "Among Japan e-commerce GMS leaders"),
      milestones: [
        { year: 1997, text: L("楽天市場 上线", "Rakuten Ichiba launch") },
        { year: 2010, text: L("全球扩张高峰", "Global expansion peak") }
      ]
    },
    coupang: {
      founded: "2010",
      hq: L("韩国首尔", "Seoul, South Korea"),
      listing: L("纽约证交所 CPNG", "NYSE: CPNG"),
      history: L(
        "韩国「火箭配送」重新定义履约；扩展生鲜、流媒体 Coupang Play；<strong>2024–2025</strong> 进军台湾。",
        "Rocket Delivery reset fulfillment; fresh, Coupang Play; <strong>2024–25</strong> Taiwan entry."
      ),
      culture: L(
        "高强度「奋斗」文化；数据与履约 KPI 驱动。", 
        "Intense execution culture; data & fulfillment KPIs."
      ),
      chinaEntry: L(
        "无中国本土电商；中国供应链商品经跨境进入韩国。",
        "No China domestic site; CN goods via cross-border to Korea."
      ),
      gmv2025: L("未以 GMV 指引；净销售额约 <strong>$300 亿+</strong> 量级（2024）", "Net revenues ~<strong>$30B+</strong> scale (2024)"),
      revenue2025: L("双位数增长（历史）", "Double-digit growth (historical)"),
      growth2025: L("台湾与国际试点", "Taiwan & intl. pilots"),
      headcount: L("约 <strong>9 万</strong>（含履约，2023–2024 区间）", "~<strong>90k</strong> incl. fulfillment (2023–24 range)"),
      headcountNote: L("履约人员占比高", "High share in fulfillment roles"),
      businessModel: L("自营 + 3P + 会员 Wow + 广告", "1P + 3P + Wow membership + ads"),
      marketShare: L("韩国电商份额约 <strong>20%+</strong>（第三方估）", "Korea e-commerce ~<strong>20%+</strong> (estimates)"),
      milestones: [
        { year: 2010, text: L("Coupang 成立", "Coupang founded") },
        { year: 2021, text: L("纽交所 IPO", "NYSE IPO") },
        { year: 2024, text: L("台湾 Rocket 落地", "Taiwan Rocket launch") }
      ]
    },
    etsy: {
      founded: "2005",
      hq: L("美国纽约布鲁克林", "Brooklyn, New York, U.S."),
      listing: L("纳斯达克 ETSY", "Nasdaq: ETSY"),
      history: L(
        "手工艺与独立设计师市场；疫情在家经济红利后增长常态化。",
        "Handmade & indie designer marketplace; post-COVID normalization."
      ),
      culture: L(
        "使命驱动、创意社区、强调「keep commerce human」。",
        "Mission-driven creative community; “keep commerce human”."
      ),
      chinaEntry: L(
        "中国卖家可跨境开店；非中国本土招商重地。",
        "CN sellers can export; not a domestic CN focus."
      ),
      gmv2025: L("2024 GMV 约 <strong>$132 亿</strong>", "2024 GMV ~<strong>$13.2B</strong>"),
      revenue2025: L("2024 营收约 <strong>$27 亿</strong>", "2024 revenue ~<strong>$2.7B</strong>"),
      growth2025: L("低个位数 GMV 增长", "Low-single-digit GMV growth"),
      headcount: L("约 <strong>2,400</strong>（2024）", "~<strong>2,400</strong> (2024)"),
      headcountNote: L("小而精；多次小比例裁员", "Small team; periodic micro layoffs"),
      businessModel: L("抽佣 + 广告 + 支付", "Commission + ads + payments"),
      marketShare: L("手工艺细分市场领先", "Leading handmade niche"),
      milestones: [
        { year: 2005, text: L("Etsy 上线", "Etsy launch") },
        { year: 2015, text: L("IPO", "IPO") }
      ]
    },
    jd: {
      founded: "1998",
      hq: L("中国北京", "Beijing, China"),
      listing: L("纳斯达克 JD / 港交所", "Nasdaq JD / HKEX"),
      history: L(
        "自营 B2C + 开放平台；自建物流京东物流（26 万+ 人）；跨境 JD Worldwide。",
        "1P B2C + marketplace; JD Logistics; JD Worldwide cross-border."
      ),
      culture: L(
        "「客户为先、拼搏、诚信」；强履约与供应链文化。", 
        "Customer first, execution, supply-chain culture."
      ),
      chinaEntry: L("本土平台；<strong>2015</strong> 起跨境电商 JD Worldwide。", "Domestic platform; JD Worldwide cross-border from <strong>2015</strong>."),
      gmv2025: L("2024 净收入约 <strong>1.16 万亿人民币</strong>量级", "2024 net revenues ~<strong>¥1.16T</strong> scale"),
      revenue2025: L("中个位数增长；利润改善", "Mid-single-digit growth; margin improvement"),
      growth2025: L("家电 3C 稳；跨境与下沉市场", "Electronics stable; cross-border & lower-tier cities"),
      headcount: L("集团约 <strong>57 万</strong>（含物流，2023）", "Group ~<strong>570k</strong> incl. logistics (2023)"),
      headcountNote: L("物流员工占大头", "Logistics dominates headcount"),
      businessModel: L("自营 + POP + 物流科技 + 工业品", "1P + POP + logistics tech + industrials"),
      marketShare: L("中国 B2C 份额约 <strong>20%</strong> 阵营（估）", "~<strong>20%</strong> China B2C camp (est.)"),
      milestones: [
        { year: 1998, text: L("中关村起步", "Zhongguancun start") },
        { year: 2014, text: L("纳斯达克 IPO", "Nasdaq IPO") },
        { year: 2021, text: L("港交所二次上市", "HKEX listing") }
      ]
    },
    tiktokshop: {
      founded: "2021",
      hq: L("新加坡 / 洛杉矶（ByteDance）", "Singapore / Los Angeles (ByteDance)"),
      listing: L("字节跳动（非上市）", "ByteDance (private)"),
      history: L(
        "从印尼直播带货到全球社交电商；2023–2025 东南亚、美国、欧洲 rollout；content-commerce 闭环。",
        "Indonesia live commerce to global social commerce; 2023–25 rollout; content-commerce loop."
      ),
      culture: L(
        "字节「始终创业」；节奏极快；算法与内容基因。", 
        "ByteDance “Always Day 1”; fast pace; algorithm & content DNA."
      ),
      chinaEntry: L(
        "中国卖家通过跨境入驻；国内抖音电商（ sister ）份额巨大但与 TikTok Shop 主体分离。",
        "CN sellers via cross-border; domestic Douyin commerce separate but huge."
      ),
      gmv2025: L("估全球 GMV <strong>$300 亿+</strong>（第三方 2024–2025）", "Est. global GMV <strong>$30B+</strong> (third-party 2024–25)"),
      revenue2025: L("抽佣 + 广告；字节未单列", "Commission + ads; ByteDance not broken out"),
      growth2025: L("东南亚 GMV 增速领先；美欧监管不确定", "Leading SEA GMV growth; US/EU regulatory uncertainty"),
      headcount: L("字节全球 <strong>15 万+</strong>（估）；电商团队快速变化", "ByteDance <strong>150k+</strong> est.; commerce team volatile"),
      headcountNote: L("含大量内容与审核外包", "Heavy content/moderation outsourcing"),
      businessModel: L("短视频/直播 + 闭环交易 + 联盟分销", "Short video/live + in-app checkout + affiliates"),
      marketShare: L("东南亚多国份额跃居前三", "Top 3 in several SEA markets rapidly"),
      milestones: [
        { year: 2021, text: L("印尼试点", "Indonesia pilot") },
        { year: 2023, text: L("东南亚六国", "Six SEA markets") },
        { year: 2024, text: L("美国开放入驻", "U.S. seller onboarding") }
      ]
    },
    walmart: {
      founded: "1962",
      hq: L("美国阿肯色州本顿维尔", "Bentonville, Arkansas, U.S."),
      listing: L("纽约证交所 WMT", "NYSE: WMT"),
      history: L(
        "全球最大线下零售商；Walmart.com 与 <strong>Marketplace</strong> 追赶亚马逊；WFS 履约对标 FBA。",
        "World’s largest brick-and-mortar; Walmart.com & <strong>Marketplace</strong> catching Amazon; WFS vs FBA."
      ),
      culture: L(
        "「帮助他人节省金钱」；门店文化与供应链效率。", 
        "Save money, live better; store ops & supply-chain efficiency."
      ),
      chinaEntry: L(
        "山姆会员店中国；电商以进口与跨境为主；<strong>已出售</strong> 1 号店等早期资产。",
        "Sam’s Club China; e-com import/CB; divested Yihaodian-era assets."
      ),
      gmv2025: L("全球零售营收约 <strong>$6,800 亿</strong>（2025 FY）", "Global revenue ~<strong>$680B</strong> (FY2025)"),
      revenue2025: L("电商销售额约 <strong>27%</strong> 渗透率（公司目标）", "E-commerce ~<strong>27%</strong> of sales (goal path)"),
      growth2025: L("Marketplace SKU 与 WFS 扩张", "Marketplace SKU & WFS expansion"),
      headcount: L("全球约 <strong>210 万</strong>", "~<strong>2.1M</strong> worldwide"),
      headcountNote: L("门店员工为主", "Mostly store associates"),
      businessModel: L("线下零售 + 电商 + 3P 市场 + 广告", "Stores + e-com + 3P marketplace + ads"),
      marketShare: L("美国电商 #2（次于 Amazon）", "U.S. e-commerce #2 behind Amazon"),
      milestones: [
        { year: 2000, text: L("Walmart.com", "Walmart.com") },
        { year: 2016, text: L("收购 Jet.com", "Jet.com acquisition") },
        { year: 2009, text: L("第三方市场开放", "Marketplace launch") }
      ]
    }
  };

  /** Columns for summary table */
  window.MI_PROFILE_TABLE_COLS = [
    { key: "founded", label: L("成立", "Founded") },
    { key: "hq", label: L("总部", "HQ") },
    { key: "chinaEntry", label: L("与中国关系", "China link") },
    { key: "gmv2025", label: L("GMV / 规模", "GMV / scale") },
    { key: "growth2025", label: L("增长", "Growth") },
    { key: "headcount", label: L("人员规模", "Headcount") },
    { key: "listing", label: L("上市", "Listing") }
  ];

  window.MI_MARKET_CONTEXT = [
    {
      title: L("亚太跨境主战场", "APAC cross-border theater"),
      body: L(
        "澳新、日韩买家海淘 + 中国出口卖家经 eIS/SpeedPAK；东南亚为<strong>目的地</strong>兼竞争市场（Shopee/TikTok/Temu）。",
        "ANZ & JP/KR buyer imports + China exports via eIS/SpeedPAK; SEA is a <strong>destination</strong> and battleground (Shopee/TikTok/Temu)."
      ),
      sources: [
        { title: L("eBay International Shipping", "eBay International Shipping"), url: "https://www.ebay.com/help/selling/shipping-items/setting-shipping-options/international-shipping-program?id=4646" }
      ]
    },
    {
      title: L("亚太 GMV 与供给", "APAC GMV & supply"),
      body: L(
        "eBay 未披露亚太 GMV；区域上澳日渗透率最高，中国侧重<strong>供给侧</strong>；人事应捆绑 SpeedPAK、Trust、站点本地化项目。",
        "No APAC GMV split disclosed; AU/JP highest penetration, China <strong>supply-side</strong>; tie HR to SpeedPAK, trust, localization."
      ),
      sources: [{ title: L("eBay 投资者关系", "eBay IR"), url: "https://investors.ebayinc.com/" }]
    },
    {
      title: L("全托管冲击（亚太有感）", "Managed-discounter shock (APAC)"),
      body: L(
        "Temu/Shein/速卖通拉高亚太消费者预期；eBay 以收藏家/汽配/鉴别差异化，而非包邮价格战。",
        "Temu/Shein/AliExpress raise APAC consumer expectations; eBay differentiates on collectibles/P&A/authentication, not free-ship wars."
      )
    },
    {
      title: L("监管与关税", "Regulation & tariffs"),
      body: L(
        "2024–2026 美欧对小包免税与平台责任收紧，重塑跨境成本曲线；合规与本地化仓网成为竞争门槛。",
        "2024–26 U.S./EU de minimis & platform duty rules tighten; compliance & local hubs become moats."
      )
    }
  ];
})();