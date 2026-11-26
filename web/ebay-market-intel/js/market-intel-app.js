(function (global) {
  const LL = () => global.MarketIntelLang;

  function t(v) {
    return LL().t(v);
  }

  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /** @param {HTMLElement|null} host @param {{name:string,value:number,color?:string,highlight?:boolean,est?:boolean,suffix?:string}[]} rows */
  function renderSimpleBarChart(host, rows, opts = {}) {
    if (!host || !rows.length) {
      if (host) host.innerHTML = "";
      return;
    }
    const peak = opts.max ?? Math.max(...rows.map((r) => r.value), 1);
    host.innerHTML = rows
      .map((row) => {
        const pct = Math.round((row.value / peak) * 100);
        const cls =
          "bar-row" +
          (row.highlight ? " is-ebay" : "") +
          (row.apac ? " is-apac" : "") +
          (row.est ? " is-est" : "");
        const color = row.color || "var(--mi-accent)";
        const valText =
          opts.format?.(row) ??
          `${row.value}${row.suffix ?? ""}${row.est ? "*" : ""}`;
        return (
          `<div class="${cls}">` +
          `<div class="bar-meta"><span class="bar-name">${row.name}</span><span class="bar-pct">${valText}</span></div>` +
          `<div class="bar-track"><span class="bar-fill" style="width:${pct}%;background:${color}"></span></div>` +
          `</div>`
        );
      })
      .join("");
  }

  function kpiCardHtml(k) {
    const est = k.estimate ? " is-estimate" : "";
    return (
      `<article class="kpi-card${est}">` +
      `<div class="kpi-value">${esc(k.value)}</div>` +
      `<div class="kpi-label">${t(k.label)}</div>` +
      `<div class="kpi-hint">${t(k.hint)}</div>` +
      `</article>`
    );
  }

  function renderKpis() {
    const host = document.getElementById("kpiGrid");
    if (!host) return;
    const all = global.MI_EBAY_KPIS || [];
    const row1 = all.filter((k) => (k.row || 1) === 1);
    const row2 = all.filter((k) => k.row === 2);
    host.innerHTML =
      `<div class="kpi-grid-row">${row1.map(kpiCardHtml).join("")}</div>` +
      (row2.length ? `<div class="kpi-grid-row kpi-grid-row--secondary">${row2.map(kpiCardHtml).join("")}</div>` : "");
  }

  function orderedKpis() {
    const all = global.MI_EBAY_KPIS || [];
    const row1 = all.filter((k) => (k.row || 1) === 1);
    const row2 = all.filter((k) => k.row === 2);
    return [...row1, ...row2];
  }

  function renderApacGmvNote() {
    const note = global.MI_APAC_GMV_NOTE;
    const body = document.getElementById("apacGmvNoteBody");
    const instead = document.getElementById("apacGmvNoteInstead");
    if (!note || !body) return;
    body.innerHTML = t(note.body);
    if (instead) instead.innerHTML = t(note.instead);
  }

  function renderApacFocus() {
    const host = document.getElementById("apacFocusBody");
    const focus = global.MI_APAC_FOCUS;
    if (!host || !focus) return;
    const bullets = (focus.bullets || []).map((b) => `<li>${t(b)}</li>`).join("");
    host.innerHTML =
      `<p class="apac-focus-headline">${t(focus.headline)}</p>` +
      `<p class="apac-focus-lede">${t(focus.lede)}</p>` +
      `<ul class="apac-focus-list">${bullets}</ul>`;
  }

  function renderApacCbInsights(hostId) {
    const host = document.getElementById(hostId);
    if (!host) return;
    host.innerHTML = (global.MI_APAC_CB_INSIGHTS || [])
      .map(
        (card) =>
          `<article class="apac-insight-card">` +
          `<h3>${t(card.title)}</h3>` +
          `<p>${t(card.body)}</p>` +
          `</article>`
      )
      .join("");
  }

  function renderApacRegionBars(hostId) {
    const host = document.getElementById(hostId);
    if (!host) return;
    const rows = (global.MI_APAC_REGION_BARS || []).map((row) => ({
      name: `${t(row.name)} · ${LL().lang === "zh" ? "跨境" : "CB"} ${row.cbIntensity}`,
      value: row.ebayRole,
      color: row.color,
      highlight: !!row.highlight,
      apac: true
    }));
    renderSimpleBarChart(host, rows, {
      max: 5,
      format: (row) => `${row.value}/5`
    });
  }

  function renderPillars() {
    const host = document.getElementById("pillarGrid");
    if (!host) return;
    host.innerHTML = (global.MI_STRATEGY_PILLARS || [])
      .map(
        (p) =>
          `<article class="pillar-card">` +
          `<h3>${t(p.title)}</h3>` +
          `<p>${t(p.body)}</p>` +
          `<ul>${(p.bullets || []).map((b) => `<li>${t(b)}</li>`).join("")}</ul>` +
          `</article>`
      )
      .join("");
  }

  function renderTimeline() {
    const host = document.getElementById("timelineHost");
    if (!host) return;
    host.innerHTML = (global.MI_TIMELINE || [])
      .map(
        (y) =>
          `<section class="tl-year">` +
          `<h3 class="tl-year-label">${y.year}</h3>` +
          `<div class="tl-events">${(y.events || [])
            .map((e) => `<div class="tl-event"><span class="tl-q">${esc(e.q)}</span><p>${t(e.text)}</p></div>`)
            .join("")}</div>` +
          `</section>`
      )
      .join("");
  }

  function renderCrossBorderBars() {
    const host = document.getElementById("barChart");
    if (!host) return;
    const rows = (global.MI_CROSSBORDER_BARS || []).map((row) => ({
      name: t(row.name),
      value: row.pct,
      color: row.color,
      highlight: row.highlight,
      suffix: "%"
    }));
    renderSimpleBarChart(host, rows);
  }

  function kpiChartSuffix(k) {
    if (k.id === "gmv") return "B";
    if (k.id === "buyers") return "M";
    if (
      k.chartNum != null &&
      (String(k.value).includes("%") || k.id === "intl" || k.id === "xb" || k.id === "xb-share")
    )
      return "%";
    return "";
  }

  function renderOverviewKpiChart() {
    const host = document.getElementById("overviewKpiChart");
    const rows = orderedKpis()
      .filter((k) => k.chartNum != null)
      .map((k) => ({
        name: t(k.label),
        value: k.chartNum,
        apac: false,
        highlight: k.id === "gmv",
        est: !!k.estimate || k.id === "buyers",
        suffix: kpiChartSuffix(k),
        color: k.estimate ? "#64748b" : "#14b8a6"
      }));
    renderSimpleBarChart(host, rows);
  }

  function renderCompetitorSummary() {
    const summary = global.MI_COMPETITOR_SUMMARY;
    const ledeEl = document.getElementById("compSummaryLede");
    const clustersEl = document.getElementById("compSummaryClusters");
    const ebayEl = document.getElementById("compSummaryEbay");
    if (!summary || !clustersEl) return;
    if (ledeEl) ledeEl.innerHTML = t(summary.lede);
    if (ebayEl) ebayEl.innerHTML = t(summary.ebayNote);
    clustersEl.innerHTML = (summary.clusters || [])
      .map((cl) => {
        const peers = (cl.peerIds || [])
          .map((id) => {
            const c = getComp(id);
            if (!c) return "";
            return `<span class="comp-peer-pill">${t(c.name)}</span>`;
          })
          .join("");
        return (
          `<article class="comp-summary-card" style="--cluster:${esc(cl.tone || "#14b8a6")}">` +
          `<h3>${t(cl.title)}</h3>` +
          `<p>${t(cl.body)}</p>` +
          `<div class="comp-peer-pills">${peers}</div>` +
          `</article>`
        );
      })
      .join("");
  }

  function renderCompDualMetricChart() {
    const host = document.getElementById("compDualChart");
    if (!host) return;
    const rows = [...(global.MI_COMPETITORS || [])]
      .filter((c) => c.id !== "ebay" && c.threat > 0)
      .sort((a, b) => b.threat - a.threat);
    host.innerHTML = rows
      .map((c) => {
        const tPct = Math.min(100, Math.max(0, c.threat));
        const sPct = Math.min(100, Math.max(0, c.competitiveness));
        return (
          `<article class="dual-metric-row">` +
          `<header class="dual-metric-head">` +
          `<span class="dual-metric-name">${t(c.name)}</span>` +
          `<span class="dual-metric-badge">${t(c.badge)}</span>` +
          `</header>` +
          `<div class="dual-metric-bars">` +
          `<div class="dual-bar-line" title="${t(LL().UI.compDualThreat)} ${c.threat}">` +
          `<span class="dual-bar-label">${t(LL().UI.compDualThreat)}</span>` +
          `<div class="bar-track bar-track-sm"><span class="bar-fill score-red" style="width:${tPct}%"></span></div>` +
          `<span class="dual-bar-num">${c.threat}</span></div>` +
          `<div class="dual-bar-line" title="${t(LL().UI.compDualStrength)} ${c.competitiveness}">` +
          `<span class="dual-bar-label">${t(LL().UI.compDualStrength)}</span>` +
          `<div class="bar-track bar-track-sm"><span class="bar-fill score-blue" style="width:${sPct}%"></span></div>` +
          `<span class="dual-bar-num">${c.competitiveness}</span></div>` +
          `</div></article>`
        );
      })
      .join("");
  }

  function renderApacFootprintChart() {
    const host = document.getElementById("apacFootprintChart");
    const metrics = enrichedMetrics();
    const rows = metrics
      .map((m) => ({
        name: compName(m.id),
        value: m.apacIndex,
        color: m.color,
        highlight: m.id === "ebay",
        suffix: ""
      }))
      .filter((r) => r.value > 0)
      .sort((a, b) => b.value - a.value);
    renderSimpleBarChart(host, rows, { max: 4 });
  }

  function renderLogisticsScoreChart() {
    const host = document.getElementById("logisticsScoreChart");
    if (!host) return;
    const U = LL().UI;
    const scores = global.MI_LOGISTICS_SCORES || [];
    host.innerHTML = scores
      .map((s) => {
        const mk = (val, label, color) => {
          const pct = (val / 5) * 100;
          return (
            `<div class="log-mini-row">` +
            `<span class="log-mini-label">${label}</span>` +
            `<div class="bar-track bar-track-sm"><span class="bar-fill" style="width:${pct}%;background:${color}"></span></div>` +
            `<span class="log-mini-num">${val}/5</span></div>`
          );
        };
        return (
          `<article class="log-score-card${s.highlight ? " is-ebay" : ""}">` +
          `<h3>${t(s.label)}</h3>` +
          mk(s.speed, t(U.logisticsSpeed), "#38bdf8") +
          mk(s.cost, t(U.logisticsCost), "#22c55e") +
          mk(s.apacFit, t(U.logisticsApac), "#14b8a6") +
          `</article>`
        );
      })
      .join("");
  }

  function renderHiring() {
    const chartHost = document.getElementById("hiringMarketChart");
    const listHost = document.getElementById("hiringPanel");
    const byMarket = {};
    (global.MI_APAC_OPEN_ROLES || []).forEach((co) => {
      (co.markets || []).forEach((m) => {
        const key = t(m.market);
        if (!byMarket[key]) byMarket[key] = { name: key, flag: m.flag, value: 0 };
        byMarket[key].value += m.rolesEst || 0;
      });
    });
    const rows = Object.values(byMarket)
      .sort((a, b) => b.value - a.value)
      .map((r) => ({
        name: `${r.flag} ${r.name}`,
        value: r.value,
        est: true,
        color: "#38bdf8"
      }));
    renderSimpleBarChart(chartHost, rows);

    if (!listHost) return;
    listHost.innerHTML = (global.MI_APAC_OPEN_ROLES || [])
      .map((co) => {
        const markets = (co.markets || [])
          .map(
            (m) =>
              `<li>${m.flag} ${t(m.market)} — ${t(LL().UI.hiringOpenEst)} <strong>${m.rolesEst}*</strong> · ${t(
                m.focus
              )}</li>`
          )
          .join("");
        const roles = (co.roles || []).map((r) => `<span class="tag tag-good">${t(r)}</span>`).join("");
        return (
          `<article class="hiring-card${co.highlight ? " is-ebay" : ""}">` +
          `<h3>${t(co.company)}</h3>` +
          `<ul class="hiring-markets">${markets}</ul>` +
          `<p><strong>${t(LL().UI.hiringRoles)}:</strong> ${roles}</p>` +
          `<p>${t(co.note)}</p>` +
          `<p><a href="${co.careersUrl}" target="_blank" rel="noopener noreferrer">${t(LL().UI.hiringCareers)} ↗</a></p>` +
          `</article>`
        );
      })
      .join("");
  }

  function renderLayoffs() {
    const events = global.MI_RECENT_LAYOFFS || [];
    const scaleRows = [...events]
      .filter((e) => e.scaleNum > 0)
      .sort((a, b) => b.scaleNum - a.scaleNum)
      .map((e) => ({
        name: t(e.company),
        value: e.scaleNum,
        highlight: e.highlight,
        est: true,
        color: "#f87171"
      }));
    renderSimpleBarChart(document.getElementById("layoffScaleChart"), scaleRows);

    const reasonRows = (global.MI_LAYOFF_REASONS || []).map((r) => ({
      name: t(r.label),
      value: r.pct,
      color: r.color,
      suffix: "%"
    }));
    renderSimpleBarChart(document.getElementById("layoffReasonChart"), reasonRows);

    const list = document.getElementById("layoffEventsList");
    if (list) {
      list.innerHTML = events
        .map(
          (e) =>
            `<article class="layoff-event${e.highlight ? " is-ebay" : ""}">` +
            `<header><span class="layoff-date">${esc(e.date)}</span> <strong>${t(e.company)}</strong></header>` +
            `<p><strong>${LL().lang === "zh" ? "规模" : "Scale"}:</strong> ${t(e.scale)}</p>` +
            `<p><strong>${t(LL().UI.layoffRegion)}:</strong> ${t(e.region)}</p>` +
            `<p><strong>${t(LL().UI.layoffReason)}:</strong> ${t(e.reason)}</p>` +
            `<p class="layoff-sev"><strong>${t(LL().UI.layoffSeverance)}:</strong> ${t(e.severanceApac)}</p>` +
            `</article>`
        )
        .join("");
    }

    const sev = document.getElementById("severancePanel");
    if (sev) {
      sev.innerHTML = (global.MI_APAC_SEVERANCE_MODES || [])
        .map(
          (s) =>
            `<article class="severance-card">` +
            `<h3>${s.flag} ${t(s.market)}</h3>` +
            `<p>${t(s.pattern)}</p></article>`
        )
        .join("");
    }
  }

  let compFilter = "";
  let chartMetric = "apacIndex";

  function getComp(id) {
    return (global.MI_COMPETITORS || []).find((c) => c.id === id);
  }

  function compName(id) {
    const c = getComp(id);
    return c ? t(c.name) : id;
  }

  function apacIndexFor(id) {
    const matrix = global.MI_APAC_FOOTPRINT || {};
    let sum = 0;
    let n = 0;
    Object.keys(matrix).forEach((code) => {
      const v = matrix[code][id];
      if (v != null) {
        sum += v;
        n += 1;
      }
    });
    return n ? sum / n : 0;
  }

  function enrichedMetrics() {
    return (global.MI_CHART_METRICS || []).map((m) => ({
      ...m,
      apacIndex: apacIndexFor(m.id)
    }));
  }

  function formatMetricValue(metricId, raw, est) {
    if (raw == null || Number.isNaN(raw)) return est ? "— (~)" : "—";
    if (metricId === "headcount") {
      if (raw >= 1e6) return (raw / 1e6).toFixed(2) + "M" + (est ? "*" : "");
      if (raw >= 1e3) return (raw / 1e3).toFixed(1) + "K" + (est ? "*" : "");
      return String(raw) + (est ? "*" : "");
    }
    if (metricId === "apacIndex") return raw.toFixed(2) + (est ? "*" : "");
    if (metricId === "growthPct" || metricId === "crossBorderPct") return raw + "%" + (est ? "*" : "");
    if (metricId === "strength" || metricId === "threat") return raw + (est ? "*" : "");
    return "$" + raw + "B" + (est ? "*" : "");
  }

  function metricEstFlag(m, metricId) {
    if (metricId === "apacIndex") return false;
    const key = metricId + "Est";
    if (key in m) return !!m[key];
    if (metricId === "strength" || metricId === "threat") return false;
    return true;
  }

  function metricRaw(m, metricId) {
    if (metricId === "apacIndex") return m.apacIndex;
    return m[metricId];
  }

  function renderMetricChips(hostId) {
    const host = document.getElementById(hostId);
    if (!host) return;
    host.innerHTML = (global.MI_CHART_METRIC_DEFS || [])
      .map((d) => {
        const active = d.id === chartMetric ? " active" : "";
        return `<button type="button" class="metric-chip${active}" data-metric="${d.id}">${t(d.label)}</button>`;
      })
      .join("");
  }

  function syncMetricChips() {
    document.querySelectorAll(".metric-chip[data-metric]").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.metric === chartMetric);
    });
  }

  function paintMainMetricChart(host, noteEl) {
    if (!host) return;
    const def = (global.MI_CHART_METRIC_DEFS || []).find((d) => d.id === chartMetric);
    if (noteEl && def) {
      noteEl.innerHTML = `<strong>${t(def.unit)}</strong> — ${t(def.note)} <span class="est-legend">${t(LL().UI.chartEstLegend)}</span>`;
    }
    const rows = enrichedMetrics()
      .filter((m) => {
        const v = metricRaw(m, chartMetric);
        return v != null && v !== "";
      })
      .sort((a, b) => {
        const va = metricRaw(a, chartMetric);
        const vb = metricRaw(b, chartMetric);
        return vb - va;
      });
    let max = 0;
    rows.forEach((m) => {
      const v = metricRaw(m, chartMetric);
      if (chartMetric === "headcount") max = Math.max(max, Math.log10(Math.max(v, 1)));
      else max = Math.max(max, v);
    });
    if (max <= 0) max = 1;
    host.innerHTML = rows
      .map((m) => {
        const v = metricRaw(m, chartMetric);
        const est = metricEstFlag(m, chartMetric);
        let pct;
        if (chartMetric === "headcount") pct = Math.round((Math.log10(Math.max(v, 1)) / max) * 100);
        else pct = Math.round((v / max) * 100);
        const isEbay = m.id === "ebay";
        const cls = "bar-row" + (isEbay ? " is-ebay" : "") + (est ? " is-est" : "");
        const color = m.color || "var(--mi-accent)";
        return (
          `<div class="${cls}">` +
          `<div class="bar-meta"><span class="bar-name">${esc(compName(m.id))}</span>` +
          `<span class="bar-pct">${formatMetricValue(chartMetric, v, est)}</span></div>` +
          `<div class="bar-track"><span class="bar-fill" style="width:${pct}%;background:${color}"></span></div>` +
          `</div>`
        );
      })
      .join("");
  }

  function renderMainMetricCharts() {
    paintMainMetricChart(
      document.getElementById("mainMetricChart"),
      document.getElementById("mainMetricNote")
    );
    paintMainMetricChart(
      document.getElementById("compMainMetricChart"),
      document.getElementById("compMainMetricNote")
    );
  }

  function paintScatterChart(host) {
    if (!host) return;
    const rows = enrichedMetrics().filter((m) => m.growthPct != null && m.threat != null && m.id !== "ebay");
    const ebay = enrichedMetrics().find((m) => m.id === "ebay");
    const maxG = Math.max(...rows.map((m) => m.growthPct), ebay?.growthPct || 0, 1);
    const maxT = Math.max(...rows.map((m) => m.threat), 1);
    const dots = rows
      .map((m) => {
        const left = Math.min(98, Math.max(2, (m.growthPct / maxG) * 100));
        const bottom = Math.min(98, Math.max(2, (m.threat / maxT) * 100));
        const short = m.id.slice(0, 2).toUpperCase();
        return `<button type="button" class="scatter-dot" style="left:${left}%;bottom:${bottom}%;background:${m.color}" title="${esc(
          compName(m.id)
        )}: ${m.growthPct}% / ${m.threat}">${short}</button>`;
      })
      .join("");
    const ebayDot = ebay
      ? `<button type="button" class="scatter-dot is-ebay" style="left:${Math.min(
          98,
          (ebay.growthPct / maxG) * 100
        )}%;bottom:2%;" title="eBay">eBay</button>`
      : "";
    host.innerHTML =
      `<div class="scatter-plot" role="img" aria-label="Growth vs threat">` +
      `<span class="axis-y">${t(LL().UI.scatterY)}</span>` +
      `<span class="axis-x">${t(LL().UI.scatterX)}</span>` +
      dots +
      ebayDot +
      `</div>` +
      `<p class="scatter-caption">${t(LL().UI.scatterCaption)}</p>`;
  }

  function renderScatterCharts() {
    paintScatterChart(document.getElementById("scatterChart"));
    paintScatterChart(document.getElementById("compScatterChart"));
  }

  function paintMetricHeatmap(host) {
    if (!host) return;
    const keys = ["gmvBn", "revenueBn", "growthPct", "headcount", "apacIndex", "threat"];
    const labels = {
      gmvBn: LL().lang === "zh" ? "GMV" : "GMV",
      revenueBn: LL().lang === "zh" ? "营收" : "Rev",
      growthPct: LL().lang === "zh" ? "增长" : "Growth",
      headcount: LL().lang === "zh" ? "人数" : "HC",
      apacIndex: LL().lang === "zh" ? "亚太" : "APAC",
      threat: LL().lang === "zh" ? "威胁" : "Threat"
    };
    const metrics = enrichedMetrics();
    const norms = {};
    keys.forEach((k) => {
      const vals = metrics.map((m) => metricRaw(m, k)).filter((v) => v != null && !Number.isNaN(v));
      const max = Math.max(...vals, 1);
      const min = Math.min(...vals, 0);
      norms[k] = { max, min, span: max - min || 1 };
    });
    const head =
      `<tr><th class="sticky-col">${LL().lang === "zh" ? "公司" : "Co."}</th>` +
      keys.map((k) => `<th>${labels[k]}</th>`).join("") +
      `</tr>`;
    const body = metrics
      .map((m) => {
        const cells = keys
          .map((k) => {
            const v = metricRaw(m, k);
            if (v == null) return `<td class="heat-empty">—</td>`;
            let intensity;
            if (k === "headcount") {
              intensity = (Math.log10(Math.max(v, 1)) - Math.log10(1000)) / (Math.log10(2.1e6) - Math.log10(1000));
            } else {
              intensity = (v - norms[k].min) / norms[k].span;
            }
            intensity = Math.min(1, Math.max(0.08, intensity));
            const isEbay = m.id === "ebay";
            return `<td class="heat-cell${isEbay ? " is-ebay" : ""}" style="--heat:${intensity}">${formatMetricValue(
              k,
              v,
              metricEstFlag(m, k)
            )}</td>`;
          })
          .join("");
        return `<tr class="${m.id === "ebay" ? "row-ebay" : ""}"><th class="sticky-col">${esc(compName(m.id))}</th>${cells}</tr>`;
      })
      .join("");
    host.innerHTML = `<table class="heatmap-table"><thead>${head}</thead><tbody>${body}</tbody></table>`;
  }

  function renderMetricHeatmaps() {
    paintMetricHeatmap(document.getElementById("metricHeatmap"));
    paintMetricHeatmap(document.getElementById("compMetricHeatmap"));
  }

  function renderCompareCharts() {
    renderMetricChips("metricChipBar");
    renderMetricChips("compMetricChipBar");
    renderMainMetricCharts();
    renderScatterCharts();
    renderMetricHeatmaps();
    syncMetricChips();
  }

  function renderHrbp() {
    const sizeHost = document.getElementById("marketSizeGrid");
    if (sizeHost) {
      sizeHost.innerHTML = (global.MI_MARKET_SIZE || [])
        .map(
          (s) =>
            `<article class="size-card"><div class="size-label">${t(s.label)}</div>` +
            `<div class="size-value">${t(s.value)}</div><div class="size-trend">${t(s.trend)}</div></article>`
        )
        .join("");
    }
    const vc = document.getElementById("valueChain");
    if (vc) {
      vc.innerHTML = (global.MI_EBAY_VALUE_CHAIN || [])
        .map(
          (s) =>
            `<article class="vc-card">` +
            `<h3>${t(s.step)}</h3>` +
            `<p>${t(s.body)}</p>` +
            `<p class="vc-hr"><strong>HR:</strong> ${t(s.hr)}</p></article>`
        )
        .join("");
    }
    const tax = document.getElementById("taxonomyHost");
    if (tax) {
      tax.innerHTML = (global.MI_PEER_TAXONOMY || [])
        .map(
          (g) =>
            `<section class="tax-group"><h3>${t(g.title)}</h3>` +
            `<div class="tax-chips">${(g.chips || [])
              .map((ch) => {
                const names = (ch.ids || []).map((id) => compName(id)).join(" · ");
                return `<article class="tax-chip"><strong>${t(ch.label)}</strong><span>${names}</span></article>`;
              })
              .join("")}</div></section>`
        )
        .join("");
    }
    const host = document.getElementById("hrbpSections");
    if (!host) return;
    host.innerHTML = (global.MI_HRBP_SECTIONS || [])
      .map(
        (sec) =>
          `<article class="hrbp-section">` +
          `<header><span class="hrbp-icon" aria-hidden="true">${sec.icon || ""}</span>` +
          `<h2>${t(sec.title)}</h2></header>` +
          `<p class="hrbp-intro">${t(sec.intro)}</p>` +
          `<ul class="hrbp-list">${(sec.items || [])
            .map((it) => `<li><strong>${t(it.title)}</strong><p>${t(it.body)}</p></li>`)
            .join("")}</ul></article>`
      )
      .join("");
  }

  function getProfile(id) {
    return (global.MI_COMPANY_PROFILES || {})[id] || null;
  }

  function profileBlock(id) {
    const p = getProfile(id);
    if (!p) return "";
    const U = LL().UI;
    const milestones = (p.milestones || [])
      .map((m) => `<li><span class="ms-year">${m.year}</span> ${t(m.text)}</li>`)
      .join("");
    const extras = (p.extra || [])
      .map((e) => `<div class="fact-item"><dt>${t(e.label)}</dt><dd>${t(e.value)}</dd></div>`)
      .join("");
    return (
      `<div class="comp-profile">` +
      `<h4 class="profile-h4">${t(U.profileSection)}</h4>` +
      `<div class="fact-grid">` +
      `<div class="fact-item"><dt>${t(U.profileFounded)}</dt><dd>${esc(p.founded)}</dd></div>` +
      `<div class="fact-item"><dt>${t(U.profileHq)}</dt><dd>${t(p.hq)}</dd></div>` +
      `<div class="fact-item"><dt>${t(U.profileListing)}</dt><dd>${t(p.listing)}</dd></div>` +
      `<div class="fact-item"><dt>${t(U.profileGmv)}</dt><dd>${t(p.gmv2025)}</dd></div>` +
      `<div class="fact-item"><dt>${t(U.profileRevenue)}</dt><dd>${t(p.revenue2025)}</dd></div>` +
      `<div class="fact-item"><dt>${t(U.profileGrowth)}</dt><dd>${t(p.growth2025)}</dd></div>` +
      `<div class="fact-item"><dt>${t(U.profileHeadcount)}</dt><dd>${t(p.headcount)}</dd></div>` +
      extras +
      `</div>` +
      `<p class="profile-note">${t(p.headcountNote)}</p>` +
      `<div class="profile-block"><strong>${t(U.profileHistory)}</strong><p>${t(p.history)}</p></div>` +
      `<div class="profile-block"><strong>${t(U.profileCulture)}</strong><p>${t(p.culture)}</p></div>` +
      `<div class="profile-block"><strong>${t(U.profileChina)}</strong><p>${t(p.chinaEntry)}</p></div>` +
      `<div class="profile-block"><strong>${t(U.profileBizModel)}</strong><p>${t(p.businessModel)}</p></div>` +
      `<div class="profile-block"><strong>${t(U.profileShare)}</strong><p>${t(p.marketShare)}</p></div>` +
      (milestones ? `<div class="profile-block"><strong>${t(U.profileMilestones)}</strong><ol class="milestone-list">${milestones}</ol></div>` : "") +
      `</div>`
    );
  }

  function competitorCard(c) {
    const isEbay = c.id === "ebay";
    const moats = (c.moats || []).map((m) => `<span class="tag tag-good">${t(m)}</span>`).join("");
    const risks = (c.risks || []).map((m) => `<span class="tag tag-warn">${t(m)}</span>`).join("");
    const refs = (c.refs || [])
      .map((r) => `<a href="${r.url}" target="_blank" rel="noopener noreferrer">${t(r.title)} ↗</a>`)
      .join(" · ");
    const threatRow = isEbay
      ? ""
      : `<div class="score-row">` +
        `<span class="score-label">${t(LL().UI.compThreat)}</span>` +
        `<div class="score-track"><span class="score-fill score-red" style="width:${c.threat}%"></span></div>` +
        `<span class="score-num">${c.threat}</span>` +
        `</div>`;
    return (
      `<article class="comp-card${isEbay ? " is-ebay" : ""}" data-comp-id="${c.id}">` +
      `<header class="comp-head">` +
      `<h3>${t(c.name)}</h3>` +
      `<span class="comp-badge">${t(c.badge)}</span>` +
      `</header>` +
      `<p class="comp-revenue">${t(c.revenue)}</p>` +
      `<div class="score-row">` +
      `<span class="score-label">${t(LL().UI.compStrength)}</span>` +
      `<div class="score-track"><span class="score-fill score-blue" style="width:${c.competitiveness}%"></span></div>` +
      `<span class="score-num">${c.competitiveness}</span>` +
      `</div>` +
      threatRow +
      `<dl class="comp-dl">` +
      `<div><dt>${t(LL().UI.compModel)}</dt><dd>${t(c.model)}</dd></div>` +
      `<div><dt>${t(LL().UI.compTrend)}</dt><dd>${t(c.trend)}</dd></div>` +
      `<div><dt>${t(LL().UI.compStrategy)}</dt><dd>${t(c.strategy)}</dd></div>` +
      `<div><dt>${t(LL().UI.compLogistics)}</dt><dd>${t(c.logistics)}</dd></div>` +
      `<div><dt>${t(LL().UI.compTalent)}</dt><dd>${t(c.talent)}</dd></div>` +
      `<div><dt>${t(LL().UI.compApac)}</dt><dd>${t(c.apac)}</dd></div>` +
      `</dl>` +
      `<div class="tag-row"><strong>${t(LL().UI.compMoats)}</strong> ${moats}</div>` +
      `<div class="tag-row"><strong>${t(LL().UI.compRisks)}</strong> ${risks}</div>` +
      profileBlock(c.id) +
      `<p class="comp-refs">${refs}</p>` +
      `</article>`
    );
  }

  function renderCompetitors() {
    const host = document.getElementById("compGrid");
    if (!host) return;
    const q = compFilter.trim().toLowerCase();
    const list = (global.MI_COMPETITORS || []).filter((c) => {
      if (!q) return true;
      const p = getProfile(c.id);
      const pBlob = p
        ? t(p.history) + t(p.culture) + t(p.chinaEntry) + t(p.gmv2025) + (p.founded || "")
        : "";
      const blob = (t(c.name) + t(c.badge) + t(c.model) + c.id + pBlob).toLowerCase();
      return blob.includes(q);
    });
    const ordered = [...list].sort((a, b) => (a.id === "ebay" ? -1 : b.id === "ebay" ? 1 : b.threat - a.threat));
    host.innerHTML = ordered.map(competitorCard).join("");
  }

  const APAC_PLAYERS = [
    "ebay",
    "amazon",
    "temu",
    "shein",
    "aliexpress",
    "shopee",
    "lazada",
    "tiktokshop",
    "jd",
    "rakuten",
    "coupang"
  ];

  const APAC_PLAYER_LABELS = {
    ebay: "eBay",
    amazon: "Amazon",
    temu: "Temu",
    shein: "SHEIN",
    aliexpress: "AliEx",
    shopee: "Shopee",
    lazada: "Lazada",
    tiktokshop: "TikTok",
    jd: "JD",
    rakuten: "Rakuten",
    coupang: "Coupang"
  };

  function footprintCell(level) {
    const labels = ["·", "₁", "₂", "₃", "₄"];
    const cls = `fp fp-${level}`;
    return `<td class="${cls}" title="${level}">${labels[level] ?? "·"}</td>`;
  }

  function renderApac() {
    const head = document.getElementById("apacHead");
    const body = document.getElementById("apacBody");
    if (!head || !body) return;
    const markets = global.MI_APAC_MARKETS || [];
    const matrix = global.MI_APAC_FOOTPRINT || {};
    head.innerHTML =
      `<tr><th class="sticky-col">${LL().lang === "zh" ? "市场" : "Market"}</th>` +
      APAC_PLAYERS.map(
        (p) =>
          `<th class="${p === "ebay" ? "col-ebay" : ""}" title="${p}">${APAC_PLAYER_LABELS[p] || p}</th>`
      ).join("") +
      `</tr>`;
    body.innerHTML = markets
      .map((m) => {
        const row = matrix[m.code] || {};
        return (
          `<tr><th class="sticky-col">${m.flag} ${t(m.name)}</th>` +
          APAC_PLAYERS.map((p) => footprintCell(row[p] ?? 0)).join("") +
          `</tr>`
        );
      })
      .join("");
  }

  function renderLogistics() {
    const host = document.getElementById("logisticsPanel");
    if (!host) return;
    host.innerHTML = (global.MI_LOGISTICS_ROWS || [])
      .map(
        (r) =>
          `<article class="log-card${r.highlight ? " is-ebay" : ""}">` +
          `<h3>${t(r.player)}</h3>` +
          `<p class="log-model">${t(r.model)}</p>` +
          `<p><strong>${LL().lang === "zh" ? "优势" : "Strengths"}:</strong> ${t(r.strengths)}</p>` +
          `<p><strong>APAC:</strong> ${t(r.apac)}</p>` +
          `<p class="log-watch"><strong>${LL().lang === "zh" ? "关注" : "Watch"}:</strong> ${t(r.watch)}</p>` +
          `</article>`
      )
      .join("");
  }

  function renderMarketContext() {
    const host = document.getElementById("marketContextGrid");
    if (!host) return;
    host.innerHTML = (global.MI_MARKET_CONTEXT || [])
      .map((x) => `<article class="context-card"><h3>${t(x.title)}</h3><p>${t(x.body)}</p></article>`)
      .join("");
  }

  function renderProfileTable() {
    const head = document.getElementById("profileTableHead");
    const body = document.getElementById("profileTableBody");
    if (!head || !body) return;
    const cols = global.MI_PROFILE_TABLE_COLS || [];
    const comps = (global.MI_COMPETITORS || []).slice();
    const ordered = [...comps].sort((a, b) => (a.id === "ebay" ? -1 : b.id === "ebay" ? 1 : 0));
    head.innerHTML =
      `<tr><th class="sticky-col">${LL().lang === "zh" ? "公司" : "Company"}</th>` +
      cols.map((c) => `<th>${t(c.label)}</th>`).join("") +
      `</tr>`;
    body.innerHTML = ordered
      .map((c) => {
        const p = getProfile(c.id);
        if (!p) return "";
        const cells = cols
          .map((col) => {
            const val = p[col.key];
            const html = col.key === "founded" ? esc(val) : t(val);
            return `<td class="${c.id === "ebay" ? "cell-ebay" : ""}">${html}</td>`;
          })
          .join("");
        return (
          `<tr class="${c.id === "ebay" ? "row-ebay" : ""}">` +
          `<th class="sticky-col">${t(c.name)}</th>${cells}</tr>`
        );
      })
      .join("");
  }

  function renderProfileDossiers() {
    const host = document.getElementById("profileDossierList");
    if (!host) return;
    const ordered = [...(global.MI_COMPETITORS || [])].sort((a, b) =>
      a.id === "ebay" ? -1 : b.id === "ebay" ? 1 : t(a.name).localeCompare(t(b.name))
    );
    host.innerHTML = ordered
      .map((c) => {
        const isEbay = c.id === "ebay";
        return (
          `<details class="dossier${isEbay ? " is-ebay" : ""}" id="dossier-${c.id}">` +
          `<summary>${t(c.name)} · ${t(c.badge)}</summary>` +
          `<div class="dossier-body">${profileBlock(c.id)}</div>` +
          `</details>`
        );
      })
      .join("");
  }

  function renderSources() {
    const host = document.getElementById("sourcesList");
    if (!host) return;
    host.innerHTML = (global.MI_SOURCES || [])
      .map((s) => `<li><a href="${s.url}" target="_blank" rel="noopener noreferrer">${t(s.title)} ↗</a></li>`)
      .join("");
  }

  function applyStaticUi() {
    const U = LL().UI;
    document.title = t(U.pageTitle);
    setTextHtml("ui-page-h1", U.pageTitle);
    const sub = document.getElementById("ui-subtitle");
    if (sub) sub.textContent = t(U.subtitle);
    const intro = document.getElementById("ui-intro");
    if (intro) intro.innerHTML = t(U.intro);
    const live = document.getElementById("ui-live");
    if (live) live.textContent = t(U.badge);
    const ver = document.getElementById("ui-data-version");
    if (ver) ver.textContent = global.MI_DATA_VERSION || "";
    const foot = document.getElementById("ui-foot");
    if (foot) foot.innerHTML = t(U.foot);

    const labels = {
      "ui-tab-overview": U.tabOverview,
      "ui-tab-competitors": U.tabCompetitors,
      "ui-tab-crossborder": U.tabCrossBorder,
      "ui-tab-apac": U.tabApac,
      "ui-tab-logistics": U.tabLogistics,
      "ui-tab-hiring": U.tabHiring,
      "ui-tab-layoffs": U.tabLayoffs,
      "ui-tab-hr": U.tabHr,
      "ui-tab-sources": U.tabSources,
      "ui-tab-profiles": U.tabProfiles
    };
    Object.entries(labels).forEach(([id, v]) => {
      const el = document.getElementById(id);
      if (el) el.textContent = t(v);
    });

    setTextHtml("ui-overview-strategy", U.overviewStrategy);
    setTextHtml("ui-overview-timeline", U.overviewTimeline);
    setTextHtml("ui-positioning-title", U.overviewPositioning);
    setTextHtml("ui-positioning-body", U.positioningBody);
    setTextHtml("ui-bar-title", U.barTitle);
    setTextHtml("ui-bar-note", U.barNote);
    setTextHtml("ui-apac-title", U.apacTitle);
    setTextHtml("ui-apac-note", U.apacNote);
    setTextHtml("ui-logistics-title", U.logisticsTitle);
    setTextHtml("ui-sources-h2", U.sourcesH2);
    setTextHtml("ui-overview-chart-title", U.overviewChartTitle);
    setTextHtml("ui-overview-chart-apac-note", U.overviewChartApacNote);
    setTextHtml("ui-apac-focus-title", U.apacFocusTitle);
    setTextHtml("ui-apac-gmv-note-title", U.apacGmvNoteTitle);
    setTextHtml("ui-apac-cb-title", U.apacCbTitle);
    setTextHtml("ui-apac-cb-panel-title", U.apacCbPanelTitle);
    setTextHtml("ui-apac-region-chart-title", U.apacRegionChartTitle);
    setTextHtml("ui-apac-region-chart-note", U.apacRegionChartNote);
    setTextHtml("ui-apac-region-chart-title-cb", U.apacRegionChartTitle);
    setTextHtml("ui-apac-region-chart-note-cb", U.apacRegionChartNote);
    setTextHtml("ui-comp-summary-title", U.compSummaryTitle);
    setTextHtml("ui-comp-summary-note", U.compSummaryNote);
    setTextHtml("ui-comp-compare-title", U.compCompareTitle);
    setTextHtml("ui-comp-compare-note", U.compCompareNote);
    setTextHtml("ui-comp-dual-title", U.compDualTitle);
    setTextHtml("ui-comp-dual-note", U.compDualNote);
    setTextHtml("ui-comp-dual-threat", U.compDualThreat);
    setTextHtml("ui-comp-dual-strength", U.compDualStrength);
    setTextHtml("ui-comp-scatter-title", U.compScatterTitle);
    setTextHtml("ui-comp-heatmap-title", U.compHeatmapTitle);
    setTextHtml("ui-comp-heatmap-note", U.compHeatmapNote);
    setTextHtml("ui-apac-chart-title", U.apacChartTitle);
    setTextHtml("ui-apac-chart-note", U.apacChartNote);
    setTextHtml("ui-logistics-chart-title", U.logisticsChartTitle);
    setTextHtml("ui-logistics-chart-note", U.logisticsChartNote);
    setTextHtml("ui-hiring-title", U.hiringTitle);
    setTextHtml("ui-hiring-note", U.hiringNote);
    setTextHtml("ui-hiring-list-title", U.hiringListTitle);
    setTextHtml("ui-layoff-scale-title", U.layoffScaleTitle);
    setTextHtml("ui-layoff-scale-note", U.layoffScaleNote);
    setTextHtml("ui-layoff-reason-title", U.layoffReasonTitle);
    setTextHtml("ui-layoff-events-title", U.layoffEventsTitle);
    setTextHtml("ui-layoff-events-note", U.layoffEventsNote);
    setTextHtml("ui-severance-title", U.severanceTitle);
    setTextHtml("ui-hr-title", U.hrTitle);
    setTextHtml("ui-hr-lede", U.hrLede);
    setTextHtml("ui-profile-table-title", U.profileTableTitle);
    setTextHtml("ui-profile-table-note", U.profileTableNote);
    setTextHtml("ui-profile-dossier-title", U.profileDossierTitle);
    setTextHtml("ui-chart-board-title", U.chartBoardTitle);
    setTextHtml("ui-heatmap-title", U.heatmapTitle);
    setTextHtml("ui-heatmap-note", U.heatmapNote);
    setTextHtml("ui-scatter-title", U.scatterTitle);
    setTextHtml("ui-value-chain-title", U.valueChainTitle);
    setTextHtml("ui-taxonomy-title", U.taxonomyTitle);
    setTextHtml("ui-market-size-title", U.marketSizeTitle);
    setTextHtml("ui-table-toggle-label", U.tableToggleLabel);

    const ph = document.getElementById("compFilter");
    if (ph) ph.placeholder = t(U.compFilterPh);
  }

  function setTextHtml(id, v) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = t(v);
  }

  function renderAll() {
    applyStaticUi();
    renderApacFocus();
    renderApacGmvNote();
    renderKpis();
    renderApacCbInsights("apacCbInsights");
    renderApacCbInsights("apacCbPanelInsights");
    renderApacRegionBars("apacRegionChart");
    renderApacRegionBars("apacRegionChartCb");
    renderOverviewKpiChart();
    renderMarketContext();
    renderPillars();
    renderTimeline();
    renderCrossBorderBars();
    renderCompetitorSummary();
    renderCompDualMetricChart();
    renderCompetitors();
    renderCompareCharts();
    renderProfileTable();
    renderProfileDossiers();
    renderApacFootprintChart();
    renderApac();
    renderLogisticsScoreChart();
    renderLogistics();
    renderHiring();
    renderLayoffs();
    renderHrbp();
    renderSources();
  }

  global.applyMarketIntelUi = renderAll;

  function activateTab(tab) {
    document.querySelectorAll(".tab-btn").forEach((b) => b.classList.toggle("active", b.dataset.tab === tab));
    document.querySelectorAll(".panel").forEach((p) => p.classList.toggle("active", p.id === "panel-" + tab));
  }

  function bindUi() {
    document.querySelectorAll(".tab-btn").forEach((btn) => {
      btn.addEventListener("click", () => activateTab(btn.dataset.tab));
    });
    document.getElementById("lang-switch")?.addEventListener("click", (e) => {
      const b = e.target.closest("button[data-lang]");
      if (b) LL().setLang(b.dataset.lang);
    });
    document.getElementById("compFilter")?.addEventListener("input", (e) => {
      compFilter = e.target.value || "";
      renderCompetitors();
    });
    document.querySelector(".container")?.addEventListener("click", (e) => {
      const btn = e.target.closest(".metric-chip[data-metric]");
      if (!btn) return;
      chartMetric = btn.dataset.metric;
      renderCompareCharts();
    });
    const tableToggle = document.getElementById("profileTableToggle");
    if (tableToggle) {
      tableToggle.addEventListener("change", () => {
        const wrap = document.getElementById("profileTableWrap");
        if (wrap) wrap.hidden = !tableToggle.checked;
      });
    }
  }

  bindUi();
  renderAll();
})(window);