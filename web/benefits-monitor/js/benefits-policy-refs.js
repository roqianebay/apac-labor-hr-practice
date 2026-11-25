function L(zh, en) {
  return { zh, en };
}

function R(url, zh, en) {
  return { url, title: L(zh, en) };
}

/** @type {Record<string, Record<string, {url:string, title:{zh:string,en:string}}>>} */
window.BENEFIT_CATEGORY_REFS = {
  CN: {
    leave_annual: R("https://www.gov.cn/zhengce/zhengceku/2008-03/28/content_925021.htm", "职工带薪年休假条例", "Regulation on paid annual leave"),
    holidays: R("https://www.gov.cn/zhengce/zhengceku/202411/content_6986381.htm", "法定节假日办法（国令795）", "Public holidays (Order 795)"),
    leave_sick: R("https://www.mohrss.gov.cn/SYrlzyhshbzb/zcfg_flfg/", "医疗期与病假相关规定", "Medical period & sick leave rules"),
    sick_pay: R("https://www.mohrss.gov.cn/SYrlzyhshbzb/zcfg_flfg/", "病假工资计发规定", "Sick pay rules"),
    leave_parental: R("https://www.mohrss.gov.cn/SYrlzyhshbzb/zcfg_flfg/", "产假/陪产假与人口健康条例", "Maternity & parental rules"),
    social: R("https://www.mohrss.gov.cn/SYrlzyhshbzb/zcfg_flfg/", "社会保险法与配套规章", "Social insurance laws"),
    minimum_wage: R("https://www.mohrss.gov.cn/SYrlzyhshbzb/zcfg_flfg/", "最低工资规定", "Minimum wage rules"),
    retirement: R("https://www.mohrss.gov.cn/SYrlzyhshbzb/zcfg_flfg/", "养老保险与退休年龄政策", "Pension & retirement age"),
    medical: R("https://www.mohrss.gov.cn/SYrlzyhshbzb/zcfg_flfg/", "医疗保险与工伤保险", "Medical & work injury"),
    overtime: R("https://www.mohrss.gov.cn/SYrlzyhshbzb/zcfg_flfg/", "工时与加班工资", "Working hours & OT pay"),
    other: R("https://www.mohrss.gov.cn/", "人社部政策库", "MOHRSS policy library")
  },
  HK: {
    leave_annual: R("https://www.labour.gov.hk/eng/publications/faq/employment_ordinance.htm", "雇佣条例年假", "EO annual leave"),
    holidays: R("https://www.labour.gov.hk/eng/publications/faq/statutory_holidays.htm", "法定假期", "Statutory holidays"),
    leave_sick: R("https://www.labour.gov.hk/eng/publications/faq/employment_ordinance.htm", "雇佣条例病假", "EO sick leave"),
    sick_pay: R("https://www.labour.gov.hk/eng/publications/faq/employment_ordinance.htm", "有薪病假工资（4/5）", "Paid sick leave pay"),
    leave_parental: R("https://www.labour.gov.hk/eng/publications/faq/maternity_paternity.htm", "产假与陪产假", "Maternity & paternity"),
    social: R("https://www.mpfa.org.hk/", "强积金（MPF）", "Mandatory Provident Fund"),
    minimum_wage: R("https://www.labour.gov.hk/eng/news/content.htm", "法定最低工资", "Statutory Minimum Wage"),
    retirement: R("https://www.mpfa.org.hk/", "强积金与退休", "MPF retirement"),
    medical: R("https://www.labour.gov.hk/eng/compensation/", "雇员补偿（工伤）", "Employees' compensation"),
    overtime: R("https://www.labour.gov.hk/eng/publications/faq/employment_ordinance.htm", "工资与工作时间", "Wages & hours"),
    other: R("https://www.labour.gov.hk/eng/", "劳工处", "Labour Department")
  },
  TW: {
    leave_annual: R("https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=N0030001", "劳动基准法（特休）", "Labour Standards Act"),
    holidays: R("https://www.mol.gov.tw/", "劳动部节假日安排", "MOL holiday schedule"),
    leave_sick: R("https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=N0030001", "病假条文（劳基法）", "Sick leave (LSA)"),
    sick_pay: R("https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=N0030001", "病假工资（劳基法第43条）", "Sick pay (LSA art. 43)"),
    leave_parental: R("https://www.mol.gov.tw/", "产前产后与家庭照顾假", "Parental & family leave"),
    social: R("https://www.bli.gov.tw/", "劳工保险与退休金", "Labour insurance & pension"),
    minimum_wage: R("https://www.mol.gov.tw/", "基本工资公告", "Basic wage announcements"),
    retirement: R("https://www.bli.gov.tw/", "劳工保险与退休金", "Pension rules (BLI)"),
    medical: R("https://www.osha.gov.tw/", "职业安全卫生与职灾", "OSH & occupational injury"),
    overtime: R("https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=N0030001", "延长工时与加班费", "Overtime & premiums"),
    other: R("https://www.mol.gov.tw/", "劳动部", "Ministry of Labour")
  },
  SG: {
    leave_annual: R("https://www.mom.gov.sg/employment-practices/annual-leave", "年假", "Annual leave"),
    holidays: R("https://www.mom.gov.sg/employment-practices/public-holidays", "公共假期", "Public holidays"),
    leave_sick: R("https://www.mom.gov.sg/employment-practices/sick-leave", "病假", "Sick leave"),
    sick_pay: R("https://www.mom.gov.sg/employment-practices/sick-leave", "病假薪酬", "Sick leave pay"),
    leave_parental: R("https://www.mom.gov.sg/employment-practices/leave", "产假/陪产假/育儿假", "Parental leave"),
    social: R("https://www.cpf.gov.sg/", "中央公积金（CPF）", "CPF"),
    minimum_wage: R("https://www.mom.gov.sg/employment-practices/progressive-wage-model", "递进式加薪/PWM", "Progressive Wage Model"),
    retirement: R("https://www.cpf.gov.sg/", "CPF 退休", "CPF retirement"),
    medical: R("https://www.mom.gov.sg/workplace-safety-and-health/work-injury-compensation", "工伤赔偿（WICA）", "Work injury compensation"),
    overtime: R("https://www.mom.gov.sg/employment-practices/salary", "加班与薪资", "Salary & overtime"),
    other: R("https://www.mom.gov.sg/", "人力部 MOM", "Ministry of Manpower")
  },
  AU: {
    leave_annual: R("https://www.fairwork.gov.au/leave/annual-leave", "年假（NES）", "Annual leave (NES)"),
    holidays: R("https://www.fairwork.gov.au/leave/public-holidays", "公共假期", "Public holidays"),
    leave_sick: R("https://www.fairwork.gov.au/leave/sick-and-carers-leave", "病假/护理假", "Sick & carer's leave"),
    sick_pay: R("https://www.fairwork.gov.au/leave/sick-and-carers-leave", "病假工资", "Sick leave pay"),
    leave_parental: R("https://www.fairwork.gov.au/leave/parental-leave", "育婴假", "Parental leave"),
    social: R("https://www.servicesaustralia.gov.au/", "Medicare / Services Australia", "Medicare & services"),
    minimum_wage: R("https://www.fairwork.gov.au/pay-and-wages/minimum-wages", "全国最低工资", "National minimum wage"),
    retirement: R("https://www.ato.gov.au/tax-and-super/super-for-employers/super-guarantee", "Super Guarantee", "Super Guarantee"),
    medical: R("https://www.fairwork.gov.au/leave/compassionate-and-bereavement-leave", "工伤与补偿（州法）", "Workers' compensation"),
    overtime: R("https://www.fairwork.gov.au/pay-and-wages/overtime-penalty-rates", "加班与罚金率", "Overtime & penalties"),
    other: R("https://www.fairwork.gov.au/", "Fair Work Ombudsman", "Fair Work Ombudsman")
  },
  NZ: {
    leave_annual: R("https://www.employment.govt.nz/leave-and-holidays/annual-holidays/", "年假", "Annual holidays"),
    holidays: R("https://www.employment.govt.nz/leave-and-holidays/public-holidays/", "法定公共假期", "Public holidays"),
    leave_sick: R("https://www.employment.govt.nz/leave-and-holidays/sick-leave-and-bereavement/", "病假", "Sick leave"),
    sick_pay: R("https://www.employment.govt.nz/leave-and-holidays/sick-leave-and-bereavement/", "病假工资", "Sick leave pay"),
    leave_parental: R("https://www.employment.govt.nz/leave-and-holidays/parental-leave/", "育儿假", "Parental leave"),
    social: R("https://www.acc.co.nz/", "ACC", "ACC"),
    minimum_wage: R("https://www.employment.govt.nz/hours-and-wages/pay/minimum-wage/", "最低工资", "Minimum wage"),
    retirement: R("https://www.kiwisaver.govt.nz/", "KiwiSaver", "KiwiSaver"),
    medical: R("https://www.acc.co.nz/", "ACC 工伤", "ACC injury cover"),
    overtime: R("https://www.employment.govt.nz/hours-and-wages/", "工时与薪酬", "Hours & wages"),
    other: R("https://www.employment.govt.nz/", "Employment NZ", "Employment NZ")
  },
  JP: {
    leave_annual: R("https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/roudoukeiyaku/", "年次有給休暇", "Annual paid leave"),
    holidays: R("https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/roudoujikan/", "节假日与休日", "Holidays & rest"),
    leave_sick: R("https://www.mhlw.go.jp/seisaku/bunya/koyou_roudou/roudoujikan/", "病休制度", "Sick absence rules"),
    sick_pay: R("https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iryouhoken/", "健康保险伤病支给", "Health insurance sickness pay"),
    leave_parental: R("https://www.mhlw.go.jp/seisaku/bunya/kodomo/kosodate_shien/", "产假与育儿休业", "Maternity & childcare leave"),
    social: R("https://www.nenkin.go.jp/", "社会保险（年金·健保）", "Social insurance"),
    minimum_wage: R("https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/chingin/index.html", "最低工资标准（地域别）", "Regional minimum wages"),
    retirement: R("https://www.nenkin.go.jp/", "年金", "Public pension"),
    medical: R("https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/saigai/saigaikensaku/", "労災保险", "Workers' comp"),
    overtime: R("https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/roudoujikan/", "工时与加班", "Working hours & OT"),
    other: R("https://www.mhlw.go.jp/", "厚生労働省", "MHLW")
  },
  KR: {
    leave_annual: R("https://www.moel.go.kr/policy/policyinfo/laborlaw/laborlaw.do", "带薪年假", "Paid annual leave"),
    holidays: R("https://www.moel.go.kr/policy/policyinfo/laborlaw/laborlaw.do", "公休日", "Public holidays"),
    leave_sick: R("https://www.moel.go.kr/policy/policyinfo/laborlaw/laborlaw.do", "病假", "Sick leave"),
    sick_pay: R("https://www.moel.go.kr/policy/policyinfo/laborlaw/laborlaw.do", "伤病津贴", "Sickness benefits"),
    leave_parental: R("https://www.moel.go.kr/policy/policyinfo/welfare/labormatters.do", "产假/育儿", "Maternity & parental"),
    social: R("https://www.4insure.or.kr/", "四大保险", "Four major insurances"),
    minimum_wage: R("https://www.moel.go.kr/policy/policyinfo/wage/inmini2015.do", "最低工资", "Minimum wage"),
    retirement: R("https://www.nps.or.kr/", "国民年金", "National pension"),
    medical: R("https://www.kcomwel.or.kr/", "산재보험", "Industrial accident insurance"),
    overtime: R("https://www.moel.go.kr/policy/policyinfo/laborlaw/laborlaw.do", "加班工资", "Overtime pay"),
    other: R("https://www.moel.go.kr/", "雇用劳动部", "MOEL")
  },
  IN: {
    leave_annual: R("https://labour.gov.in/", "各邦年假法", "State annual leave acts"),
    holidays: R("https://labour.gov.in/", "国家与邦假日", "National & state holidays"),
    leave_sick: R("https://labour.gov.in/", "病假规定（州法/法典）", "Sick leave rules"),
    sick_pay: R("https://labour.gov.in/", "病假工资（州法）", "Sick pay rules"),
    leave_parental: R("https://labour.gov.in/", "产假福利法", "Maternity Benefit Act"),
    social: R("https://www.epfindia.gov.in/", "EPF / ESIC", "EPF & ESIC"),
    minimum_wage: R("https://labour.gov.in/", "最低工资与工资法典", "Minimum wages & Wage Code"),
    retirement: R("https://www.epfindia.gov.in/", "EPF 退休", "EPF retirement"),
    medical: R("https://www.esic.gov.in/", "ESIC 医疗", "ESIC medical"),
    overtime: R("https://labour.gov.in/", "工厂法加班", "Factory Act overtime"),
    other: R("https://labour.gov.in/", "劳工部", "Ministry of Labour")
  },
  MY: {
    leave_annual: R("https://www.mohr.gov.my/index.php/en/laws-and-regulations/act/employment-act-1955", "就业法年假", "EA annual leave"),
    holidays: R("https://www.mohr.gov.my/", "公共假期", "Public holidays"),
    leave_sick: R("https://www.mohr.gov.my/index.php/en/laws-and-regulations/act/employment-act-1955", "就业法病假", "EA sick leave"),
    sick_pay: R("https://www.mohr.gov.my/index.php/en/laws-and-regulations/act/employment-act-1955", "病假薪酬（第60F条）", "Sick pay (EA)"),
    leave_parental: R("https://www.mohr.gov.my/", "产假/陪产假", "Maternity & paternity"),
    social: R("https://www.kwsp.gov.my/", "EPF", "EPF"),
    minimum_wage: R("https://www.mohr.gov.my/", "最低薪金令", "Minimum wages order"),
    retirement: R("https://www.kwsp.gov.my/", "EPF 退休", "EPF retirement"),
    medical: R("https://www.perkeso.gov.my/", "SOCSO 工伤", "SOCSO work injury"),
    overtime: R("https://www.mohr.gov.my/index.php/en/laws-and-regulations/act/employment-act-1955", "加班报酬", "Overtime pay"),
    other: R("https://www.mohr.gov.my/", "人力资源部", "MoHR")
  },
  TH: {
    leave_annual: R("https://www.mol.go.th/", "年假（劳保法）", "Annual leave"),
    holidays: R("https://www.mol.go.th/", "法定假日", "Public holidays"),
    leave_sick: R("https://www.mol.go.th/", "带薪病假30天", "Paid sick leave"),
    sick_pay: R("https://www.mol.go.th/", "病假工资", "Sick pay"),
    leave_parental: R("https://www.mol.go.th/", "产假", "Maternity leave"),
    social: R("https://www.sso.go.th/", "社保 SSO", "Social Security Office"),
    minimum_wage: R("https://www.mol.go.th/", "最低工资", "Minimum wage"),
    retirement: R("https://www.sso.go.th/", "养老金", "Pension benefits"),
    medical: R("https://www.sso.go.th/", "工伤与医疗", "Injury & medical"),
    overtime: R("https://www.mol.go.th/", "加班工资", "Overtime pay"),
    other: R("https://www.mol.go.th/", "劳工部", "Ministry of Labour")
  },
  ID: {
    leave_annual: R("https://kemnaker.go.id/", "年假规定", "Annual leave"),
    holidays: R("https://kemnaker.go.id/", "国定假日", "National holidays"),
    leave_sick: R("https://kemnaker.go.id/", "病假", "Sick leave"),
    sick_pay: R("https://kemnaker.go.id/", "病假薪酬比例", "Sick pay tiers"),
    leave_parental: R("https://kemnaker.go.id/", "产假", "Maternity leave"),
    social: R("https://bpjsketenagakerjaan.go.id/", "BPJS 雇佣", "BPJS Employment"),
    minimum_wage: R("https://kemnaker.go.id/", "UMP 最低工资", "Provincial minimum wage"),
    retirement: R("https://bpjsketenagakerjaan.go.id/", "JHT 养老", "Old-age savings"),
    medical: R("https://bpjsketenagakerjaan.go.id/", "工伤 JK", "Work accident benefits"),
    overtime: R("https://kemnaker.go.id/", "加班工资", "Overtime pay"),
    other: R("https://kemnaker.go.id/", "劳工部", "Ministry of Manpower")
  },
  VN: {
    leave_annual: R("https://www.molisa.gov.vn/", "年假", "Annual leave"),
    holidays: R("https://www.molisa.gov.vn/", "国定假日", "Public holidays"),
    leave_sick: R("https://baohiemxahoi.gov.vn/", "病假与社保", "Sick leave & BHXH"),
    sick_pay: R("https://baohiemxahoi.gov.vn/", "病休待遇", "Sickness benefits"),
    leave_parental: R("https://www.molisa.gov.vn/", "产假/陪产", "Maternity & paternity"),
    social: R("https://baohiemxahoi.gov.vn/", "社会保险", "Social insurance"),
    minimum_wage: R("https://www.molisa.gov.vn/", "区域最低工资", "Regional minimum wage"),
    retirement: R("https://baohiemxahoi.gov.vn/", "养老保险", "Pension insurance"),
    medical: R("https://baohiemxahoi.gov.vn/", "医保与工伤", "Health & work injury"),
    overtime: R("https://www.molisa.gov.vn/", "加班工资", "Overtime pay"),
    other: R("https://www.molisa.gov.vn/", "MOLISA", "MOLISA")
  },
  PH: {
    leave_annual: R("https://www.dole.gov.ph/", "Service Incentive Leave", "Service incentive leave"),
    holidays: R("https://www.dole.gov.ph/", "假日薪酬", "Holiday pay rules"),
    leave_sick: R("https://www.dole.gov.ph/", "病假与SIL", "Sick leave & SIL"),
    sick_pay: R("https://www.sss.gov.ph/", "SSS 疾病津贴", "SSS sickness benefit"),
    leave_parental: R("https://www.dole.gov.ph/", "产假/陪产假", "Maternity & paternity"),
    social: R("https://www.sss.gov.ph/", "SSS", "SSS"),
    minimum_wage: R("https://www.dole.gov.ph/", "地区工资令", "Regional wage orders"),
    retirement: R("https://www.sss.gov.ph/", "SSS 养老金", "SSS pension"),
    medical: R("https://www.philhealth.gov.ph/", "PhilHealth", "PhilHealth"),
    overtime: R("https://www.dole.gov.ph/", "加班工资", "Overtime pay"),
    other: R("https://www.dole.gov.ph/", "DOLE", "DOLE")
  }
};