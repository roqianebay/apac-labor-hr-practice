function L(zh, en) {
  return { zh, en };
}

function R(url, zh, en) {
  return { url, title: L(zh, en) };
}

const EBAY = "https://ebaybenefits.com";
const CATS = ["health_medical", "health_wellness", "income", "retirement", "leave", "travel", "perks"];
const LABELS = {
  health_medical: L("医疗健康", "Medical cover"),
  health_wellness: L("身心健康", "Wellbeing"),
  income: L("收入保障", "Income protection"),
  retirement: L("退休储蓄", "Retirement"),
  leave: L("休假", "Time off"),
  travel: L("差旅", "Travel"),
  perks: L("更多福利", "More benefits")
};

function marketRefs() {
  const row = {};
  CATS.forEach((id) => {
    row[id] = R(EBAY, LABELS[id].zh, LABELS[id].en);
  });
  row.health_wellness = R("https://ebay.lyrahealth.com", "Lyra EAP", "Lyra EAP");
  return row;
}

window.BENEFIT_CATEGORY_REFS = {
  CN: marketRefs(),
  HK: marketRefs(),
  SG: marketRefs(),
  AU: marketRefs(),
  MY: marketRefs(),
  TH: marketRefs(),
  NZ: marketRefs(),
  IN: marketRefs()
};