function L(zh, en) {
  return { zh, en };
}

function R(url, zh, en) {
  return { url, title: L(zh, en) };
}

/** @type {Record<string, Record<string, {url:string, title:{zh:string,en:string}}>>} */
window.LEAVE_CATEGORY_REFS = {
  CN: {
    public: R("https://www.gov.cn/zhengce/zhengceku/202411/content_6986381.htm", "法定节假日（国令795）", "Public holidays (Order 795)"),
    annual: R("https://www.gov.cn/zhengce/zhengceku/2008-03/28/content_925021.htm", "带薪年休假条例", "Paid annual leave"),
    sick: R("https://www.mohrss.gov.cn/SYrlzyhshbzb/zcfg_flfg/", "医疗期与病假", "Medical period & sick leave"),
    parental: R("https://www.mohrss.gov.cn/SYrlzyhshbzb/zcfg_flfg/", "产假/陪产假条例", "Maternity & parental"),
    special: R("https://www.mohrss.gov.cn/SYrlzyhshbzb/zcfg_flfg/", "婚丧等休假", "Marriage & bereavement leave"),
    rest: R("https://www.mohrss.gov.cn/SYrlzyhshbzb/zcfg_flfg/", "工时与休息", "Working hours & rest")
  },
  HK: {
    public: R("https://www.labour.gov.hk/eng/publications/faq/statutory_holidays.htm", "法定假期", "Statutory holidays"),
    annual: R("https://www.labour.gov.hk/eng/publications/faq/employment_ordinance.htm", "年假", "Annual leave"),
    sick: R("https://www.labour.gov.hk/eng/publications/faq/employment_ordinance.htm", "有薪病假", "Paid sick leave"),
    parental: R("https://www.labour.gov.hk/eng/publications/faq/maternity_paternity.htm", "产假/陪产假", "Maternity & paternity"),
    special: R("https://www.labour.gov.hk/eng/publications/faq/employment_ordinance.htm", "其他法定假", "Other statutory leave"),
    rest: R("https://www.labour.gov.hk/eng/publications/faq/employment_ordinance.htm", "休息日", "Rest days")
  },
  TW: {
    public: R("https://www.mol.gov.tw/", "国定假日", "National holidays"),
    annual: R("https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=N0030001", "特休", "Special leave"),
    sick: R("https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=N0030001", "病假", "Sick leave"),
    parental: R("https://www.mol.gov.tw/", "产假/陪产", "Maternity & paternity"),
    special: R("https://www.mol.gov.tw/", "其他休假", "Other leave"),
    rest: R("https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=N0030001", "工时", "Working hours")
  },
  SG: {
    public: R("https://www.mom.gov.sg/employment-practices/public-holidays", "公共假期", "Public holidays"),
    annual: R("https://www.mom.gov.sg/employment-practices/annual-leave", "年假", "Annual leave"),
    sick: R("https://www.mom.gov.sg/employment-practices/sick-leave", "病假", "Sick leave"),
    parental: R("https://www.mom.gov.sg/employment-practices/leave", "产假/育儿假", "Parental leave"),
    special: R("https://www.mom.gov.sg/employment-practices", "其他假期", "Other leave"),
    rest: R("https://www.mom.gov.sg/employment-practices/hours-of-work", "工时", "Hours of work")
  },
  AU: {
    public: R("https://www.fairwork.gov.au/leave/public-holidays", "公共假期", "Public holidays"),
    annual: R("https://www.fairwork.gov.au/leave/annual-leave", "年假", "Annual leave"),
    sick: R("https://www.fairwork.gov.au/leave/sick-and-carers-leave", "病假/护理假", "Sick & carer's leave"),
    parental: R("https://www.fairwork.gov.au/leave/parental-leave", "育婴假", "Parental leave"),
    special: R("https://www.fairwork.gov.au/leave", "其他法定假", "Other leave"),
    rest: R("https://www.fairwork.gov.au/hours-of-work", "工时", "Hours of work")
  },
  MY: {
    public: R("https://www.mohr.gov.my/", "公共假期", "Public holidays"),
    annual: R("https://www.mohr.gov.my/index.php/en/laws-and-regulations/act/employment-act-1955", "年假", "Annual leave"),
    sick: R("https://www.mohr.gov.my/index.php/en/laws-and-regulations/act/employment-act-1955", "病假", "Sick leave"),
    parental: R("https://www.mohr.gov.my/", "产假", "Maternity"),
    special: R("https://www.mohr.gov.my/", "其他休假", "Other leave"),
    rest: R("https://www.mohr.gov.my/", "工时", "Working hours")
  },
  TH: {
    public: R("https://www.mol.go.th/", "法定假日", "Public holidays"),
    annual: R("https://www.mol.go.th/", "年假", "Annual leave"),
    sick: R("https://www.mol.go.th/", "病假", "Sick leave"),
    parental: R("https://www.mol.go.th/", "产假", "Maternity"),
    special: R("https://www.mol.go.th/", "其他", "Other leave"),
    rest: R("https://www.mol.go.th/", "工时", "Working hours")
  },
  NZ: {
    public: R("https://www.employment.govt.nz/leave-and-holidays/public-holidays/", "公共假期", "Public holidays"),
    annual: R("https://www.employment.govt.nz/leave-and-holidays/annual-holidays/", "年假", "Annual holidays"),
    sick: R("https://www.employment.govt.nz/leave-and-holidays/sick-leave-and-bereavement/", "病假", "Sick leave"),
    parental: R("https://www.employment.govt.nz/leave-and-holidays/parental-leave/", "育儿假", "Parental leave"),
    special: R("https://www.employment.govt.nz/leave-and-holidays/", "其他", "Other leave"),
    rest: R("https://www.employment.govt.nz/hours-and-wages/", "工时", "Hours")
  },
  JP: {
    public: R("https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/roudoujikan/", "国民祝日", "National holidays"),
    annual: R("https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/roudoukeiyaku/", "年次有給", "Annual paid leave"),
    sick: R("https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iryouhoken/", "病休", "Sick absence"),
    parental: R("https://www.mhlw.go.jp/seisaku/bunya/kodomo/kosodate_shien/", "育児休業", "Childcare leave"),
    special: R("https://www.mhlw.go.jp/", "其他休假", "Other leave"),
    rest: R("https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/roudoujikan/", "劳动法工时", "Working hours")
  },
  KR: {
    public: R("https://www.moel.go.kr/policy/policyinfo/laborlaw/laborlaw.do", "公休日", "Public holidays"),
    annual: R("https://www.moel.go.kr/policy/policyinfo/laborlaw/laborlaw.do", "带薪年假", "Annual leave"),
    sick: R("https://www.moel.go.kr/policy/policyinfo/laborlaw/laborlaw.do", "病假", "Sick leave"),
    parental: R("https://www.moel.go.kr/policy/policyinfo/welfare/labormatters.do", "产假/育儿", "Parental leave"),
    special: R("https://www.moel.go.kr/", "其他", "Other leave"),
    rest: R("https://www.moel.go.kr/policy/policyinfo/laborlaw/laborlaw.do", "工时", "Working hours")
  },
  IN: {
    public: R("https://labour.gov.in/", "假日", "Holidays"),
    annual: R("https://labour.gov.in/", "年假", "Annual leave"),
    sick: R("https://labour.gov.in/", "病假", "Sick leave"),
    parental: R("https://labour.gov.in/", "产假", "Maternity"),
    special: R("https://labour.gov.in/", "其他", "Other leave"),
    rest: R("https://labour.gov.in/", "工时", "Working hours")
  },
  ID: {
    public: R("https://kemnaker.go.id/", "国定假", "Public holidays"),
    annual: R("https://kemnaker.go.id/", "年假", "Annual leave"),
    sick: R("https://kemnaker.go.id/", "病假", "Sick leave"),
    parental: R("https://kemnaker.go.id/", "产假", "Maternity"),
    special: R("https://kemnaker.go.id/", "其他", "Other leave"),
    rest: R("https://kemnaker.go.id/", "工时", "Working hours")
  },
  VN: {
    public: R("https://www.molisa.gov.vn/", "国定假", "Public holidays"),
    annual: R("https://www.molisa.gov.vn/", "年假", "Annual leave"),
    sick: R("https://baohiemxahoi.gov.vn/", "病假", "Sick leave"),
    parental: R("https://www.molisa.gov.vn/", "产假", "Maternity"),
    special: R("https://www.molisa.gov.vn/", "其他", "Other leave"),
    rest: R("https://www.molisa.gov.vn/", "工时", "Working hours")
  },
  PH: {
    public: R("https://www.dole.gov.ph/", "假日", "Holidays"),
    annual: R("https://www.dole.gov.ph/", "年假SIL", "Annual / SIL"),
    sick: R("https://www.sss.gov.ph/", "病假/SSS", "Sick / SSS"),
    parental: R("https://www.dole.gov.ph/", "产假", "Maternity"),
    special: R("https://www.dole.gov.ph/", "其他", "Other leave"),
    rest: R("https://www.dole.gov.ph/", "工时", "Working hours")
  }
};