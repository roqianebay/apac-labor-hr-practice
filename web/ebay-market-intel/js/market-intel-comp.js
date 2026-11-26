(function () {
  function L(zh, en) {
    return { zh, en };
  }

  /**
   * Senior IC total compensation — illustrative USD thousands / year (cash + annualized equity).
   * Sourced from public career bands, Levels.fyi community snapshots, and TA market intel — verify live offers.
   */
  window.MI_APAC_COMP_BENCHMARKS = [
    {
      companyId: "ebay",
      highlight: true,
      company: L("eBay", "eBay"),
      code: "CN",
      flag: "🇨🇳",
      market: L("中国", "China"),
      role: L("高级工程师（跨境/卖家）", "Senior Engineer (cross-border / sellers)"),
      base: 52,
      equity: 28,
      total: 90,
      trend: L("→", "→"),
      sources: [
        { title: L("eBay Careers", "eBay Careers"), url: "https://careers.ebayinc.com/" },
        { title: L("Levels.fyi", "Levels.fyi"), url: "https://www.levels.fyi/companies/ebay/salaries" }
      ]
    },
    {
      companyId: "ebay",
      highlight: true,
      company: L("eBay", "eBay"),
      code: "SG",
      flag: "🇸🇬",
      market: L("新加坡", "Singapore"),
      role: L("Senior Engineer", "Senior Engineer"),
      base: 100,
      equity: 35,
      total: 165,
      trend: L("↑", "↑"),
      sources: [
        { title: L("eBay Careers", "eBay Careers"), url: "https://careers.ebayinc.com/" },
        { title: L("Levels.fyi", "Levels.fyi"), url: "https://www.levels.fyi/companies/ebay/salaries" }
      ]
    },
    {
      companyId: "ebay",
      highlight: true,
      company: L("eBay", "eBay"),
      code: "AU",
      flag: "🇦🇺",
      market: L("澳大利亚", "Australia"),
      role: L("Senior Engineer", "Senior Engineer"),
      base: 105,
      equity: 38,
      total: 170,
      trend: L("→", "→"),
      sources: [{ title: L("eBay Careers", "eBay Careers"), url: "https://careers.ebayinc.com/" }]
    },
    {
      companyId: "alibaba",
      company: L("阿里巴巴", "Alibaba"),
      code: "CN",
      flag: "🇨🇳",
      market: L("中国", "China"),
      role: L("P7 工程师", "P7 Engineer"),
      base: 55,
      equity: 25,
      total: 95,
      trend: L("→", "→"),
      sources: [{ title: L("阿里招聘", "Alibaba Talent"), url: "https://talent.alibaba.com/" }]
    },
    {
      companyId: "bytedance",
      company: L("字节跳动", "ByteDance"),
      code: "CN",
      flag: "🇨🇳",
      market: L("中国", "China"),
      role: L("2-1 工程师", "2-1 Engineer"),
      base: 50,
      equity: 35,
      total: 100,
      trend: L("↑", "↑"),
      sources: [{ title: L("字节招聘", "ByteDance Careers"), url: "https://jobs.bytedance.com/" }]
    },
    {
      companyId: "jd",
      company: L("京东", "JD.com"),
      code: "CN",
      flag: "🇨🇳",
      market: L("中国", "China"),
      role: L("高级工程师", "Senior Engineer"),
      base: 48,
      equity: 22,
      total: 85,
      trend: L("→", "→"),
      sources: [{ title: L("京东招聘", "JD Careers"), url: "https://zhaopin.jd.com/" }]
    },
    {
      companyId: "amazon",
      company: L("亚马逊", "Amazon"),
      code: "CN",
      flag: "🇨🇳",
      market: L("中国", "China"),
      role: L("SDE III（AWS/出口）", "SDE III (AWS / export)"),
      base: 50,
      equity: 30,
      total: 92,
      trend: L("↑", "↑"),
      sources: [{ title: L("Amazon Jobs", "Amazon Jobs"), url: "https://www.amazon.jobs/" }]
    },
    {
      companyId: "shopee",
      company: L("Shopee", "Shopee"),
      code: "CN",
      flag: "🇨🇳",
      market: L("中国", "China"),
      role: L("高级工程师（跨境）", "Senior Engineer (cross-border)"),
      base: 45,
      equity: 20,
      total: 78,
      trend: L("→", "→"),
      sources: [{ title: L("Sea Careers", "Sea Careers"), url: "https://careers.sea.com/" }]
    },
    {
      companyId: "tiktokshop",
      company: L("TikTok", "TikTok"),
      code: "CN",
      flag: "🇨🇳",
      market: L("中国", "China"),
      role: L("高级工程师（电商）", "Senior Engineer (e-commerce)"),
      base: 52,
      equity: 32,
      total: 98,
      trend: L("↑", "↑"),
      sources: [{ title: L("TikTok Careers", "TikTok Careers"), url: "https://careers.tiktok.com/" }]
    },
    {
      companyId: "amazon",
      company: L("亚马逊", "Amazon"),
      code: "SG",
      flag: "🇸🇬",
      market: L("新加坡", "Singapore"),
      role: L("SDE III", "SDE III"),
      base: 120,
      equity: 60,
      total: 210,
      trend: L("→", "→"),
      sources: [{ title: L("Amazon Jobs", "Amazon Jobs"), url: "https://www.amazon.jobs/" }]
    },
    {
      companyId: "google",
      company: L("Google", "Google"),
      code: "SG",
      flag: "🇸🇬",
      market: L("新加坡", "Singapore"),
      role: L("Senior SWE", "Senior SWE"),
      base: 130,
      equity: 100,
      total: 280,
      trend: L("↑", "↑"),
      sources: [{ title: L("Google Careers", "Google Careers"), url: "https://careers.google.com/" }]
    },
    {
      companyId: "shopee",
      company: L("Shopee", "Shopee"),
      code: "SG",
      flag: "🇸🇬",
      market: L("新加坡", "Singapore"),
      role: L("Senior Engineer", "Senior Engineer"),
      base: 95,
      equity: 30,
      total: 155,
      trend: L("→", "→"),
      sources: [{ title: L("Sea Careers", "Sea Careers"), url: "https://careers.sea.com/" }]
    },
    {
      companyId: "paypal",
      company: L("PayPal", "PayPal"),
      code: "SG",
      flag: "🇸🇬",
      market: L("新加坡", "Singapore"),
      role: L("Senior Engineer", "Senior Engineer"),
      base: 110,
      equity: 45,
      total: 185,
      trend: L("↑", "↑"),
      sources: [{ title: L("PayPal Careers", "PayPal Careers"), url: "https://careers.pypl.com/" }]
    },
    {
      companyId: "amazon",
      company: L("亚马逊", "Amazon"),
      code: "IN",
      flag: "🇮🇳",
      market: L("印度", "India"),
      role: L("SDE III", "SDE III"),
      base: 45,
      equity: 35,
      total: 95,
      trend: L("↑", "↑"),
      sources: [{ title: L("Amazon Jobs", "Amazon Jobs"), url: "https://www.amazon.jobs/" }]
    },
    {
      companyId: "google",
      company: L("Google", "Google"),
      code: "IN",
      flag: "🇮🇳",
      market: L("印度", "India"),
      role: L("Senior SWE", "Senior SWE"),
      base: 55,
      equity: 45,
      total: 115,
      trend: L("↑", "↑"),
      sources: [{ title: L("Google Careers", "Google Careers"), url: "https://careers.google.com/" }]
    },
    {
      companyId: "rakuten",
      company: L("乐天", "Rakuten"),
      code: "JP",
      flag: "🇯🇵",
      market: L("日本", "Japan"),
      role: L("Senior Engineer", "Senior Engineer"),
      base: 85,
      equity: 15,
      total: 110,
      trend: L("→", "→"),
      sources: [{ title: L("Rakuten Careers", "Rakuten Careers"), url: "https://corp.rakuten.co.jp/careers/" }]
    },
    {
      companyId: "coupang",
      company: L("Coupang", "Coupang"),
      code: "KR",
      flag: "🇰🇷",
      market: L("韩国", "South Korea"),
      role: L("Senior Engineer", "Senior Engineer"),
      base: 90,
      equity: 50,
      total: 180,
      trend: L("↑", "↑"),
      sources: [{ title: L("Coupang Careers", "Coupang Careers"), url: "https://www.coupang.jobs/" }]
    },
    {
      companyId: "microsoft",
      company: L("Microsoft", "Microsoft"),
      code: "AU",
      flag: "🇦🇺",
      market: L("澳大利亚", "Australia"),
      role: L("Senior SDE", "Senior SDE"),
      base: 115,
      equity: 55,
      total: 195,
      trend: L("→", "→"),
      sources: [{ title: L("Microsoft Careers", "Microsoft Careers"), url: "https://careers.microsoft.com/" }]
    }
  ];

  /** Public job-posting salary bands — illustrative; always verify JD / offer letter */
  window.MI_APAC_JOB_SALARIES = [
    {
      companyId: "ebay",
      code: "CN",
      highlight: true,
      company: L("eBay", "eBay"),
      market: L("中国 · 上海/深圳", "China · Shanghai/Shenzhen"),
      title: L("高级软件工程师（卖家/跨境）", "Senior Software Engineer (seller / CB)"),
      salary: L("年薪人民币约 50–70 万 + 股票", "~CNY 500–700k/yr + equity"),
      posted: L("2026 Q1 招聘主题", "2026 Q1 hiring theme"),
      sources: [{ title: L("查看职位", "View roles"), url: "https://careers.ebayinc.com/" }]
    },
    {
      companyId: "ebay",
      code: "SG",
      highlight: true,
      company: L("eBay", "eBay"),
      market: L("新加坡", "Singapore"),
      title: L("Senior Engineer, Seller Experience", "Senior Engineer, Seller Experience"),
      salary: L("SGD 12–18 万/年 + RSU（JD 区间因级而异）", "SGD 120–180k/yr + RSU (band varies)"),
      posted: L("2026 Q1", "2026 Q1"),
      sources: [{ title: L("查看职位", "View roles"), url: "https://careers.ebayinc.com/" }]
    },
    {
      companyId: "alibaba",
      code: "CN",
      company: L("阿里巴巴 / 速卖通", "Alibaba / AliExpress"),
      market: L("中国 · 杭州", "China · Hangzhou"),
      title: L("高级开发工程师（国际电商）", "Senior Engineer (intl. commerce)"),
      salary: L("年薪人民币约 55–80 万 + 年终", "~CNY 550–800k/yr + bonus"),
      posted: L("2026", "2026"),
      sources: [{ title: L("阿里招聘", "Alibaba Talent"), url: "https://talent.alibaba.com/" }]
    },
    {
      companyId: "bytedance",
      code: "CN",
      company: L("字节 · TikTok Shop", "ByteDance · TikTok Shop"),
      market: L("中国 · 北京/上海", "China · Beijing/Shanghai"),
      title: L("推荐/电商算法工程师", "Reco / e-commerce algorithm engineer"),
      salary: L("年薪人民币约 60–100 万 + 期权", "~CNY 600k–1M/yr + options"),
      posted: L("2026", "2026"),
      sources: [{ title: L("字节招聘", "ByteDance Jobs"), url: "https://jobs.bytedance.com/" }]
    },
    {
      companyId: "amazon",
      code: "CN",
      company: L("亚马逊", "Amazon"),
      market: L("中国 · 北京", "China · Beijing"),
      title: L("SDE III, AWS", "SDE III, AWS"),
      salary: L("年薪人民币约 50–75 万 + 签字费/股票", "~CNY 500–750k/yr + sign-on/RSU"),
      posted: L("2026", "2026"),
      sources: [{ title: L("Amazon Jobs CN", "Amazon Jobs"), url: "https://www.amazon.jobs/" }]
    },
    {
      companyId: "shopee",
      code: "CN",
      company: L("Shopee", "Shopee"),
      market: L("中国 · 深圳", "China · Shenzhen"),
      title: L("高级研发（跨境卖家）", "Senior engineer (CB sellers)"),
      salary: L("年薪人民币约 45–65 万", "~CNY 450–650k/yr"),
      posted: L("2026", "2026"),
      sources: [{ title: L("Sea Careers", "Sea Careers"), url: "https://careers.sea.com/" }]
    },
    {
      companyId: "shopee",
      code: "SG",
      company: L("Shopee", "Shopee"),
      market: L("新加坡", "Singapore"),
      title: L("Senior Engineer, Marketplace", "Senior Engineer, Marketplace"),
      salary: L("SGD 10–16 万/年", "SGD 100–160k/yr"),
      posted: L("2026", "2026"),
      sources: [{ title: L("Sea Careers", "Sea Careers"), url: "https://careers.sea.com/" }]
    },
    {
      companyId: "paypal",
      code: "SG",
      company: L("PayPal", "PayPal"),
      market: L("新加坡", "Singapore"),
      title: L("Senior Engineer, Risk", "Senior Engineer, Risk"),
      salary: L("SGD 13–20 万/年 + RSU", "SGD 130–200k/yr + RSU"),
      posted: L("2026 H1", "2026 H1"),
      sources: [{ title: L("PayPal Careers", "PayPal Careers"), url: "https://careers.pypl.com/" }]
    },
    {
      companyId: "google",
      code: "SG",
      company: L("Google", "Google"),
      market: L("新加坡", "Singapore"),
      title: L("Senior SWE, Cloud", "Senior SWE, Cloud"),
      salary: L("SGD 18–28 万/年 + RSU", "SGD 180–280k/yr + RSU"),
      posted: L("2026", "2026"),
      sources: [{ title: L("Google Careers", "Google Careers"), url: "https://careers.google.com/" }]
    },
    {
      companyId: "jd",
      code: "CN",
      company: L("京东", "JD.com"),
      market: L("中国 · 北京", "China · Beijing"),
      title: L("物流/供应链技术专家", "Logistics / supply-chain tech"),
      salary: L("年薪人民币约 45–70 万", "~CNY 450–700k/yr"),
      posted: L("2026", "2026"),
      sources: [{ title: L("京东招聘", "JD Careers"), url: "https://zhaopin.jd.com/" }]
    }
  ];

  window.MI_COMP_MARKETS = [
    { code: "CN", flag: "🇨🇳", label: L("中国", "China"), default: true },
    { code: "SG", flag: "🇸🇬", label: L("新加坡", "Singapore") },
    { code: "AU", flag: "🇦🇺", label: L("澳大利亚", "Australia") },
    { code: "JP", flag: "🇯🇵", label: L("日本", "Japan") },
    { code: "KR", flag: "🇰🇷", label: L("韩国", "South Korea") },
    { code: "IN", flag: "🇮🇳", label: L("印度", "India") }
  ];
})();