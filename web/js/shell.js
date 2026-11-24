(function () {
  function openToolsTab(tabId) {
    const root = document.getElementById("tools-section");
    if (!root) return;
    const btn = root.querySelector('.er14-tab[data-tab="' + tabId + '"]');
    if (btn) btn.click();
    const anchor = document.getElementById("tools") || root;
    anchor.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const hash = (location.hash || "").replace(/^#/, "");
  if (hash === "tools" || hash === "") return;
  if (hash.startsWith("tools-")) {
    openToolsTab(hash.slice(6));
    return;
  }
  if (hash === "links") {
    openToolsTab("links");
    return;
  }
  if (["wizard", "investigation", "pip-manual", "checklist", "matrix", "detail", "glossary", "cases"].includes(hash)) {
    document.getElementById("tools-section") && openToolsTab(hash);
  }

  document.getElementById("ui-sources-more14")?.addEventListener("click", (e) => {
    e.preventDefault();
    openToolsTab("links");
  });
})();