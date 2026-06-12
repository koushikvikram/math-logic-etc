(function () {
  const processed = new WeakSet();

  function makeZoomable(container) {
    if (processed.has(container)) return;

    const svg = container.querySelector("svg");
    if (!svg) return;

    processed.add(container);
    container.classList.add("mermaid-zoomable");

    const hint = document.createElement("div");
    hint.className = "mermaid-zoom-hint";
    hint.textContent = "Scroll to zoom. Drag to pan. Double-click to reset.";
    container.prepend(hint);

    svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
    svg.style.width = "100%";
    svg.style.height = "100%";
    const panZoom = svgPanZoom(svg, {
      controlIconsEnabled: true,
      fit: true,
      center: true,
      minZoom: 0.2,
      maxZoom: 20,
      zoomScaleSensitivity: 0.25,
      dblClickZoomEnabled: false,
    });

    container.addEventListener("dblclick", function () {
      panZoom.resetZoom();
      panZoom.center();
      panZoom.fit();
    });
  }

  function enableMermaidPanZoom() {
    if (typeof svgPanZoom !== "function") return;
    document.querySelectorAll(".mermaid").forEach(makeZoomable);
  }

  const observer = new MutationObserver(enableMermaidPanZoom);
  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
  });

  if (typeof document$ !== "undefined") {
    document$.subscribe(enableMermaidPanZoom);
  } else {
    document.addEventListener("DOMContentLoaded", enableMermaidPanZoom);
  }

  window.addEventListener("load", enableMermaidPanZoom);
})();
