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

  function baseGrid() {
    return { left: 8, right: 28, top: 12, bottom: 8, containLabel: true };
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

  function initChart(host, ec) {
    dispose(host);
    const chart = ec.init(host, undefined, { renderer: "canvas" });
    registry.push({ host, chart });
    return chart;
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
        const peak = opts?.max ?? Math.max(...rows.map((r) => r.value), 1);
        const names = rows.map((r) => r.name);
        const values = rows.map((r) => r.value);
        const colors = rows.map((r) => r.color || T.accent);
        const chart = initChart(host, ec);
        chart.setOption({
          animationDuration: 720,
          animationEasing: "cubicOut",
          grid: baseGrid(),
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
                opts?.format?.(row) ??
                `${row.value}${row.suffix ?? ""}${row.est ? "*" : ""}`;
              return `<strong>${p.name}</strong><br/>${val}`;
            }
          },
          xAxis: {
            type: "value",
            max: peak,
            splitLine: { lineStyle: { color: T.border, opacity: 0.45 } },
            axisLabel: { color: T.muted, fontSize: 11 },
            axisLine: { show: false }
          },
          yAxis: {
            type: "category",
            data: names.slice().reverse(),
            axisLabel: {
              color: T.text,
              fontSize: 11
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
                      show: true,
                      position: "right",
                      color: row.highlight ? c : T.muted,
                      fontWeight: row.highlight ? 700 : 500,
                      formatter: () =>
                        opts?.format?.(row) ??
                        `${row.value}${row.suffix ?? ""}${row.est ? "*" : ""}`
                    }
                  };
                }),
              barMaxWidth: 22,
              emphasis: {
                itemStyle: { shadowBlur: 18, shadowColor: "rgba(0,0,0,0.25)" }
              }
            }
          ]
        });
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
        const vmin = Math.min(...vals, 0);
        const vmax = Math.max(...vals, 1);
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
              return `<strong>${y}</strong> · ${x}<br/>${labelAt(p.data[0], p.data[1])}`;
            }
          },
          grid: { left: 88, right: 16, top: 8, bottom: 64 },
          xAxis: {
            type: "category",
            data: xLabels,
            splitArea: { show: false },
            axisLabel: { color: T.muted, fontSize: 10, rotate: 28 },
            axisLine: { lineStyle: { color: T.border } }
          },
          yAxis: {
            type: "category",
            data: yLabels,
            axisLabel: { color: T.text, fontSize: 11 },
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
            textStyle: { color: T.muted, fontSize: 10 },
            inRange: {
              color: T.isLight
                ? ["#f7f4ee", "#c4e8de", "#1e5a4a"]
                : ["#1a2332", "#334155", "#14b8a6"]
            }
          },
          series: [
            {
              type: "heatmap",
              data,
              label: {
                show: true,
                color: T.isLight ? "#1a2332" : "#e8edf4",
                fontSize: 9,
                formatter: (p) => String(labelAt(p.data[0], p.data[1]))
              },
              emphasis: {
                itemStyle: { shadowBlur: 10, shadowColor: "rgba(0,0,0,0.3)" }
              }
            }
          ]
        });
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

  global.ApacCharts = {
    ensureEcharts,
    renderBar,
    renderScatter,
    renderHeatmap,
    renderRadar,
    dispose,
    readTheme
  };
})(typeof window !== "undefined" ? window : globalThis);