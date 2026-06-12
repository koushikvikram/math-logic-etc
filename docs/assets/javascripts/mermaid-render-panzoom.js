(function () {
  const rendered = new WeakSet();
  const zoomed = new WeakSet();
  let mermaidApiPromise;
  let initialized = false;
  let rendering = false;
  let scheduled = false;

  function loadMermaid() {
    if (!mermaidApiPromise) {
      mermaidApiPromise = import(
        "https://unpkg.com/mermaid@11/dist/mermaid.esm.min.mjs"
      ).then(function (module) {
        return module.default;
      });
    }

    return mermaidApiPromise;
  }

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

  function replaceWithMermaidContainer(element, source) {
    const container = document.createElement("div");
    container.className = "mermaid";
    container.textContent = source.trim();
    element.replaceWith(container);
    rendered.add(container);
    return container;
  }

  function collectMermaidNodes() {
    const nodes = [];

    document.querySelectorAll("pre.mermaid").forEach(function (pre) {
      if (rendered.has(pre)) return;

      const code = pre.querySelector("code");
      const source = (code || pre).textContent;
      if (!source.trim()) return;

      rendered.add(pre);
      nodes.push(replaceWithMermaidContainer(pre, source));
    });

    document.querySelectorAll("code.language-mermaid").forEach(function (code) {
      if (rendered.has(code)) return;

      const source = code.textContent;
      if (!source.trim()) return;

      rendered.add(code);

      const wrapper = code.closest(".highlight") || code.closest("pre") || code;
      nodes.push(replaceWithMermaidContainer(wrapper, source));
    });

    document.querySelectorAll(".mermaid").forEach(function (container) {
      if (container.querySelector("svg")) {
        makeZoomable(container);
        return;
      }

      if (rendered.has(container) || !container.textContent.trim()) return;

      rendered.add(container);
      nodes.push(container);
    });

    return nodes;
  }

  async function renderAndZoomMermaid() {
    if (rendering) return;
    if (typeof svgPanZoom !== "function") return;

    rendering = true;

    try {
      const nodes = collectMermaidNodes();
      const mermaid = await loadMermaid();

      if (!initialized) {
        mermaid.initialize({ startOnLoad: false });
        initialized = true;
      }

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
