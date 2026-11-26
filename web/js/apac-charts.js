(function (global) {
  /** @type {{ host: HTMLElement, chart: import("echarts").EChartsType }[]} */
  const registry = [];
  let echartsPromise = null;
  const ECHARTS_URL =
    "https://cdn.jsdelivr.net/npm/echarts@5.5.1/dist/echarts.min.js";

  function readTheme() {
    const b = document.body;
    const s = b && getComputedStyle(b);
    const pick = (v, fb) => (v && String(v).trim()) || fb;
    return {
      text: pick(s?.color, "#e8edf4"),
      muted: pick(s?.getPropertyValue("--text-muted"), "#8b9cb3"),
      border: pick(s?.getPropertyValue("--border"), "#2d3a4f"),
      surface: pick(s?.getPropertyValue("--surface"), "#1a2332"),
      surface2: pick(s?.getPropertyValue("--surface-2"), "#243044"),
      accent: pick(s?.getPropertyValue("--accent"), "#14b8a6"),
      accent2: pick(s?.getPropertyValue("--mi-accent"), "#6366f1"),
      bg: pick(s?.getPropertyValue("--bg"), "#0f1419"),
      isLight: document.documentElement.classList.contains("theme-er-process-draft")
    };
  }

  function ensureEcharts() {
    if (global.echarts) return Promise.resolve(global.echarts);
    if (echartsPromise) return echartsPromise;
    echartsPromise = new Promise((resolve, reject) => {
      const el = document.createElement("script");
      el.src = ECHARTS_URL;
      el.async = true;
      el.onload = () => resolve(global.echarts);
      el.onerror = () => reject(new Error("echarts load failed"));
      document.head.appendChild(el);
    });
    return echartsPromise;
  }

  function dispose(host) {
    if (!host) return;
    if (host._apacChartRo) {
      host._apacChartRo.disconnect();
      host._apacChartRo = null;
    }
    const idx = registry.findIndex((r) => r.host === host);
    if (idx >= 0) {
      registry[idx].chart.dispose();
      registry.splice(idx, 1);
    }
    host.classList.add("echart-host");
  }

  function fitHeight(host, rows, base) {
    const h = Math.max(base || 260, Math.min(520, (rows?.length || 4) * 36 + 56));
    host.style.height = h + "px";
    host.style.minHeight = "200px";
    host.style.width = "100%";
  }

  function baseGrid(opts) {
    const yW = opts?.yLabelWidth ?? 0;
    const right = opts?.gridRight ?? (opts?.showBarLabels === false ? 20 : 72);
    const left = yW > 0 ? yW + 16 : 8;
    return {
      left,
      right,
      top: 12,
      bottom: 8,
      containLabel: yW <= 0
    };
  }

  function gradientBar(color, isLight) {
    return {
      type: "linear",
      x: 0,
      y: 0,
      x2: 1,
      y2: 0,
      colorStops: [
        { offset: 0, color: isLight ? "rgba(30, 90, 74, 0.35)" : color + "55" },
        { offset: 1, color: color }
      ]
    };
  }

  function scheduleChartResize(chart, host) {
    if (!chart || !host) return;
    const run = () => {
      try {
        if (host.isConnected && chart && !chart.isDisposed()) chart.resize();
      } catch (_) {
        /* ignore dispose race */
      }
    };
    requestAnimationFrame(() => {
      run();
      requestAnimationFrame(run);
    });
  }

  function resizeAll() {
    registry.forEach(({ chart, host }) => {
      try {
        if (host.isConnected && chart && !chart.isDisposed()) chart.resize();
      } catch (_) {
        /* ignore */
      }
    });
  }

  function watchHostResize(host, chart) {
    if (!host || !chart || typeof global.ResizeObserver !== "function") return;
    if (host._apacChartRo) {
      host._apacChartRo.disconnect();
    }
    const ro = new ResizeObserver(() => {
      if (host.offsetWidth > 0 && chart && !chart.isDisposed()) chart.resize();
    });
    ro.observe(host);
    host._apacChartRo = ro;
  }

  function initChart(host, ec) {
    dispose(host);
    const chart = ec.init(host, undefined, { renderer: "canvas" });
    registry.push({ host, chart });
    watchHostResize(host, chart);
    return chart;
  }

  const DEFAULT_BAR_HEADROOM = 1.14;

  function barAxisMax(rows, opts) {
    const dataPeak = Math.max(...rows.map((r) => r.value), 1);
    const scalePeak = opts?.max ?? dataPeak;
    const headroom = opts?.headroom ?? DEFAULT_BAR_HEADROOM;
    return scalePeak * headroom;
  }

  function renderBar(host, rows, opts) {
    if (!host) return Promise.resolve(false);
    if (!rows || !rows.length) {
      dispose(host);
      host.innerHTML = "";
      return Promise.resolve(false);
    }
    fitHeight(host, rows, opts?.height);
    return ensureEcharts()
      .then((ec) => {
        const T = readTheme();
        const axisMax = barAxisMax(rows, opts);
        const names = rows.map((r) => r.name);
        const values = rows.map((r) => r.value);
        const colors = rows.map((r) => r.color || T.accent);
        const showLabels = opts.showBarLabels !== false;
        const labelSize = opts.labelFontSize ?? 12;
        const yFont = opts.yLabelFontSize ?? 11;
        const yW = opts.yLabelWidth ?? 0;
        const chart = initChart(host, ec);
        chart.setOption({
          animationDuration: 720,
          animationEasing: "cubicOut",
          grid: baseGrid(opts),
          tooltip: {
            trigger: "axis",
            axisPointer: { type: "shadow" },
            backgroundColor: T.surface,
            borderColor: T.border,
            textStyle: { color: T.text, fontSize: 12 },
            formatter: (params) => {
              const p = params[0];
              const row = rows[p.dataIndex];
              const val =
                row.labelText ??
                (opts?.format?.(row) ??
                  `${row.value}${row.suffix ?? ""}${row.est ? "*" : ""}`);
              return `<strong>${p.name}</strong><br/>${val}`;
            }
          },
          xAxis: {
            type: "value",
            max: axisMax,
            splitLine: { lineStyle: { color: T.border, opacity: 0.45 } },
            axisLabel: { show: opts.hideValueAxis !== true, color: T.muted, fontSize: 11 },
            axisLine: { show: false }
          },
          yAxis: {
            type: "category",
            data: names.slice().reverse(),
            axisLabel: {
              color: T.text,
              fontSize: yFont,
              width: yW > 0 ? yW : undefined,
              overflow: yW > 0 ? "truncate" : "break",
              lineHeight: yFont + 4
            },
            axisTick: { show: false },
            axisLine: { lineStyle: { color: T.border } }
          },
          series: [
            {
              type: "bar",
              data: values
                .slice()
                .reverse()
                .map((v, i) => {
                  const row = rows[rows.length - 1 - i];
                  const c = colors[rows.length - 1 - i];
                  const labelText =
                    row.labelText ??
                    (opts?.format?.(row) ??
                      `${row.value}${row.suffix ?? ""}${row.est ? "*" : ""}`);
                  const labelPos = opts.labelPosition ?? "right";
                  return {
                    value: v,
                    itemStyle: {
                      color: gradientBar(c, T.isLight),
                      borderRadius: [0, 6, 6, 0],
                      borderColor: row.est ? T.muted : "transparent",
                      borderWidth: row.est ? 1 : 0,
                      borderType: row.est ? "dashed" : "solid",
                      shadowBlur: row.highlight ? 14 : 0,
                      shadowColor: row.highlight ? c + "88" : "transparent"
                    },
                    label: {
                      show: showLabels,
                      position: labelPos,
                      distance: labelPos === "right" ? 6 : 8,
                      color: labelPos === "insideRight" ? "#fff" : row.highlight ? c : T.text,
                      fontWeight: row.highlight ? 700 : 600,
                      fontSize: labelSize,
                      formatter: () => labelText
                    }
                  };
                }),
              barMaxWidth: opts.barMaxWidth ?? 22,
              emphasis: {
                itemStyle: { shadowBlur: 18, shadowColor: "rgba(0,0,0,0.25)" }
              }
            }
          ]
        });
        scheduleChartResize(chart, host);
        return true;
      })
      .catch(() => false);
  }

  function renderScatter(host, points, opts) {
    if (!host || !points?.length) return Promise.resolve(false);
    host.style.height = (opts?.height || 340) + "px";
    host.style.width = "100%";
    return ensureEcharts()
      .then((ec) => {
        const T = readTheme();
        const maxG = Math.max(...points.map((p) => p.growth), 1);
        const maxT = Math.max(...points.map((p) => p.threat), 1);
        const chart = initChart(host, ec);
        const midG = maxG * 0.5;
        const midT = maxT * 0.5;
        chart.setOption({
          animationDuration: 800,
          grid: { left: 48, right: 24, top: 28, bottom: 44 },
          tooltip: {
            trigger: "item",
            backgroundColor: T.surface,
            borderColor: T.border,
            textStyle: { color: T.text },
            formatter: (p) =>
              `<strong>${p.data.name}</strong><br/>${opts?.xLabel || "Growth"}: ${p.data.value[0]}%<br/>${
                opts?.yLabel || "Threat"
              }: ${p.data.value[1]}`
          },
          xAxis: {
            name: opts?.xName || "",
            nameLocation: "middle",
            nameGap: 28,
            nameTextStyle: { color: T.muted, fontSize: 11 },
            min: 0,
            max: maxG * 1.05,
            splitLine: {
              lineStyle: { type: "dashed", color: T.border, opacity: 0.6 }
            },
            axisLine: { lineStyle: { color: T.border } },
            axisLabel: { color: T.muted, formatter: "{value}%" }
          },
          yAxis: {
            name: opts?.yName || "",
            nameTextStyle: { color: T.muted, fontSize: 11 },
            min: 0,
            max: maxT * 1.08,
            splitLine: {
              lineStyle: { type: "dashed", color: T.border, opacity: 0.6 }
            },
            axisLine: { lineStyle: { color: T.border } },
            axisLabel: { color: T.muted }
          },
          series: [
            {
              type: "scatter",
              symbolSize: (val, params) => (params.data.highlight ? 52 : 38),
              data: points.map((p) => ({
                name: p.name,
                value: [p.growth, p.threat],
                itemStyle: {
                  color: p.color,
                  borderColor: p.highlight ? "#fff" : T.border,
                  borderWidth: p.highlight ? 2 : 1,
                  shadowBlur: p.highlight ? 12 : 4,
                  shadowColor: p.color + "66"
                },
                label: {
                  show: true,
                  formatter: p.short || p.name,
                  color: "#fff",
                  fontSize: 10,
                  fontWeight: 600
                },
                highlight: p.highlight
              })),
              markLine: {
                silent: true,
                symbol: "none",
                lineStyle: { color: T.muted, opacity: 0.35, type: "solid" },
                data: [{ xAxis: midG }, { yAxis: midT }]
              }
            }
          ]
        });
        scheduleChartResize(chart, host);
        return true;
      })
      .catch(() => false);
  }

  function renderHeatmap(host, matrix, opts) {
    if (!host || !matrix) return Promise.resolve(false);
    host.style.height = (opts?.height || 360) + "px";
    return ensureEcharts()
      .then((ec) => {
        const T = readTheme();
        const chart = initChart(host, ec);
        const { xLabels, yLabels, data, cellLabels } = matrix;
        const vals = data.map((d) => d[2]).filter((v) => v != null && !Number.isNaN(v));
        const vmin = opts?.scaleMin ?? Math.min(...vals, 0);
        const vmax = opts?.scaleMax ?? Math.max(...vals, 1);
        const labelFont = opts?.labelFontSize ?? 9;
        const gridLeft = opts?.gridLeft ?? 88;
        const labelAt = (xi, yi) => {
          const key = yi + ":" + xi;
          if (cellLabels && cellLabels[key] != null) return cellLabels[key];
          const v = data.find((d) => d[0] === xi && d[1] === yi);
          return v ? v[2] : "";
        };
        chart.setOption({
          tooltip: {
            position: "top",
            backgroundColor: T.surface,
            borderColor: T.border,
            textStyle: { color: T.text },
            formatter: (p) => {
              const y = yLabels[p.data[1]];
              const x = xLabels[p.data[0]];
              const extra =
                typeof opts?.tooltipExtra === "function"
                  ? opts.tooltipExtra(p.data[0], p.data[1])
                  : "";
              return `<strong>${y}</strong> · ${x}<br/>${labelAt(p.data[0], p.data[1])}${extra || ""}`;
            }
          },
          grid: { left: gridLeft, right: 16, top: 12, bottom: opts?.scaleMin != null ? 72 : 64 },
          xAxis: {
            type: "category",
            data: xLabels,
            splitArea: { show: false },
            axisLabel: { color: T.muted, fontSize: 11, rotate: opts?.xLabelRotate ?? 28 },
            axisLine: { lineStyle: { color: T.border } }
          },
          yAxis: {
            type: "category",
            data: yLabels,
            axisLabel: { color: T.text, fontSize: 12 },
            axisLine: { lineStyle: { color: T.border } }
          },
          visualMap: {
            min: vmin,
            max: vmax,
            calculable: false,
            orient: "horizontal",
            left: "center",
            bottom: 4,
            itemWidth: 12,
            itemHeight: 80,
            text: opts?.visualMapText ?? [],
            textStyle: { color: T.muted, fontSize: 10 },
            inRange: {
              color: opts?.heatColors
                ? opts.heatColors
                : T.isLight
                  ? ["#f7f4ee", "#c4e8de", "#1e5a4a"]
                  : ["#1e293b", "#334155", "#2dd4bf"]
            }
          },
          series: [
            {
              type: "heatmap",
              data,
              label: {
                show: true,
                color: T.isLight ? "#1a2332" : "#e8edf4",
                fontSize: labelFont,
                fontWeight: 600,
                formatter: (p) => String(labelAt(p.data[0], p.data[1]))
              },
              emphasis: {
                itemStyle: { shadowBlur: 10, shadowColor: "rgba(0,0,0,0.3)" }
              }
            }
          ]
        });
        scheduleChartResize(chart, host);
        return true;
      })
      .catch(() => false);
  }

  function renderRadar(host, series, indicators, opts) {
    if (!host || !series?.length) return Promise.resolve(false);
    host.style.height = (opts?.height || 380) + "px";
    return ensureEcharts()
      .then((ec) => {
        const T = readTheme();
        const chart = initChart(host, ec);
        chart.setOption({
          tooltip: { backgroundColor: T.surface, borderColor: T.border, textStyle: { color: T.text } },
          legend: {
            bottom: 0,
            textStyle: { color: T.muted, fontSize: 11 },
            type: "scroll"
          },
          radar: {
            indicator: indicators,
            radius: "62%",
            splitLine: { lineStyle: { color: T.border, opacity: 0.5 } },
            splitArea: { areaStyle: { color: [T.isLight ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.03)", "transparent"] } },
            axisName: { color: T.muted, fontSize: 10 }
          },
          series: [
            {
              type: "radar",
              data: series.map((s) => ({
                name: s.name,
                value: s.values,
                lineStyle: { width: s.highlight ? 2.5 : 1.5, color: s.color },
                areaStyle: { opacity: s.highlight ? 0.22 : 0.08, color: s.color },
                itemStyle: { color: s.color },
                symbolSize: s.highlight ? 6 : 4
              }))
            }
          ]
        });
        scheduleChartResize(chart, host);
        return true;
      })
      .catch(() => false);
  }

  let resizeTimer;
  function onResize() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      registry.forEach(({ chart, host }) => {
        if (host.isConnected) chart.resize();
      });
    }, 120);
  }
  global.addEventListener("resize", onResize);
  global.addEventListener(
    "load",
    () => {
      requestAnimationFrame(() => resizeAll());
    },
    { once: true }
  );
  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      () => {
        ensureEcharts().finally(() => requestAnimationFrame(() => resizeAll()));
      },
      { once: true }
    );
  } else {
    ensureEcharts().finally(() => requestAnimationFrame(() => resizeAll()));
  }

  global.ApacCharts = {
    ensureEcharts,
    renderBar,
    barAxisMax,
    DEFAULT_BAR_HEADROOM,
    renderScatter,
    renderHeatmap,
    renderRadar,
    dispose,
    resizeAll,
    scheduleChartResize,
    readTheme
  };
})(typeof window !== "undefined" ? window : globalThis);