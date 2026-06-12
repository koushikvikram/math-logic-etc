(function () {
  const rendered = new WeakSet();
  const zoomed = new WeakSet();
  let rendering = false;
  let scheduled = false;
  let initialized = false;

  function makeZoomable(container) {
    if (zoomed.has(container)) return;

    const svg = container.querySelector("svg");
    if (!svg) return;

    zoomed.add(container);
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

  function prepareCodeFence(code) {
    if (rendered.has(code)) return null;

    const source = code.textContent.trim();
    if (!source) return null;

    rendered.add(code);

    const container = document.createElement("div");
    container.className = "mermaid";
    container.textContent = source;

    const wrapper = code.closest(".highlight") || code.closest("pre") || code;
    wrapper.replaceWith(container);

    return container;
  }

  async function renderAndZoomMermaid() {
    if (rendering) return;
    if (typeof mermaid !== "object" || typeof svgPanZoom !== "function") return;

    rendering = true;

    try {
      if (!initialized) {
        mermaid.initialize({ startOnLoad: false });
        initialized = true;
      }

      const nodes = Array.from(
        document.querySelectorAll("code.language-mermaid")
      )
        .map(prepareCodeFence)
        .filter(Boolean);

      document.querySelectorAll(".mermaid").forEach(function (container) {
        if (container.querySelector("svg")) {
          makeZoomable(container);
          return;
        }

        if (rendered.has(container) || !container.textContent.trim()) return;

        rendered.add(container);
        nodes.push(container);
      });

      if (nodes.length > 0) {
        await mermaid.run({ nodes });
      }

      document.querySelectorAll(".mermaid").forEach(makeZoomable);
    } finally {
      rendering = false;
    }
  }

  function scheduleRender() {
    if (scheduled) return;

    scheduled = true;
    window.requestAnimationFrame(function () {
      scheduled = false;
      renderAndZoomMermaid();
    });
  }

  const observer = new MutationObserver(scheduleRender);
  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
  });

  if (typeof document$ !== "undefined") {
    document$.subscribe(scheduleRender);
  } else {
    document.addEventListener("DOMContentLoaded", scheduleRender);
  }

  window.addEventListener("load", scheduleRender);
  scheduleRender();
})();
