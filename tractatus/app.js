/* ========================================
   Tractatus Logico-Philosophicus — app.js
   Tree view, detail panel, search, routing
   ======================================== */

(function () {
  "use strict";

  /* ---- Data helpers ---- */
  var allIds = Object.keys(PROPOSITIONS);

  function getParentId(id) {
    var depth = PROPOSITIONS[id].depth;
    if (depth <= 1) return null;
    for (var targetDepth = depth - 1; targetDepth >= 1; targetDepth--) {
      var best = null;
      for (var i = 0; i < allIds.length; i++) {
        var otherId = allIds[i];
        if (otherId === id) continue;
        if (PROPOSITIONS[otherId].depth !== targetDepth) continue;
        if (id.startsWith(otherId) && (!best || otherId.length > best.length)) {
          best = otherId;
        }
      }
      if (best) return best;
    }
    return null;
  }

  // Precompute children map
  var childrenMap = {};
  allIds.forEach(function (id) { childrenMap[id] = []; });
  allIds.forEach(function (id) {
    var p = getParentId(id);
    if (p) childrenMap[p].push(id);
  });

  function getChildren(id) {
    return childrenMap[id] || [];
  }

  function getSiblings(id) {
    const parent = getParentId(id);
    if (parent === null) return ROOT_IDS;
    return getChildren(parent);
  }

  function getIdPath(id) {
    const parts = [id];
    let cur = id;
    while (true) {
      const p = getParentId(cur);
      if (p === null) break;
      parts.unshift(p);
      cur = p;
    }
    return parts;
  }

  /* ---- State ---- */
  let state = {
    selectedId: null,
    expandedIdSet: new Set(ROOT_IDS), // which nodes have expanded children
    searchQuery: "",
    originalVisible: false,
  };

  /* ---- DOM refs ---- */
  const $ = function (sel) { return document.querySelector(sel); };
  const $$ = function (sel) { return document.querySelectorAll(sel); };

  const treeRoot = $("#treeRoot");
  const introContent = $("#introContent");
  const glossaryContent = $("#glossaryContent");
  const detailContent = $("#detailContent");
  const breadcrumbEl = $("#breadcrumb");
  const propNumberEl = $("#propNumber");
  const propTextEl = $("#propText");
  const subPropsEl = $("#subProps");
  const origToggleBtn = $("#originalToggle");
  const origTextBlock = $("#originalText");
  const origDe = $("#origDe");
  const origEnOgden = $("#origEnOgden");
  const origEnPM = $("#origEnPM");
  const navPrev = $("#navPrev");
  const navParentBtn = $("#navParent");
  const navNext = $("#navNext");
  const translationBadge = $("#translationBadge");
  const searchBtn = $("#searchBtn");
  const searchBox = $("#searchBox");
  const searchInput = $("#searchInput");
  const searchCount = $("#searchCount");
  const searchClear = $("#searchClear");
  const collapseAllBtn = $("#collapseAllBtn");
  const expandToBtn = $("#expandToBtn");
  const mobileToggleBtn = $("#mobileToggle");
  const treePanel = $("#treePanel");
  const detailPanel = $("#detailPanel");

  /* ---- Tree: build & render ---- */

  function renderTree() {
    treeRoot.innerHTML = "";
    ROOT_IDS.forEach(function (id) {
      renderNode(id, treeRoot);
    });

    // restore selection
    if (state.selectedId) {
      selectNode(state.selectedId, false);
    }
  }

  function renderNode(id, container) {
    const prop = PROPOSITIONS[id];
    const childIds = getChildren(id);
    const hasChildren = childIds.length > 0;
    const isExpanded = state.expandedIdSet.has(id);
    const depth = prop.depth;

    const wrapper = document.createElement("div");
    wrapper.className = "tree-node";
    wrapper.dataset.id = id;

    const row = document.createElement("div");
    row.className = "tree-row";
    row.style.paddingLeft = (depth - 1) * 24 + 8 + "px";
    row.addEventListener("click", function (e) {
      if (e.target.classList.contains("tree-toggle")) return; // toggle handled separately
      onNodeClick(id);
    });

    // Toggle arrow
    const toggle = document.createElement("span");
    toggle.className = "tree-toggle" + (hasChildren ? "" : " no-children");
    toggle.textContent = isExpanded ? "▼" : "▶";
    if (hasChildren) {
      toggle.addEventListener("click", function (e) {
        e.stopPropagation();
        toggleExpand(id);
      });
    }
    row.appendChild(toggle);

    // Number
    const numSpan = document.createElement("span");
    numSpan.className = "tree-number";
    numSpan.textContent = id;
    row.appendChild(numSpan);

    // Text
    const textSpan = document.createElement("span");
    textSpan.className = "tree-text";
    if (prop.zh) {
      textSpan.textContent = prop.zh;
    } else {
      textSpan.textContent = prop.en || "";
      textSpan.classList.add("untranslated");
    }
    if (!prop.en || prop.en.trim() === "(empty)") {
      textSpan.classList.add("empty");
    }
    row.appendChild(textSpan);

    wrapper.appendChild(row);

    // Children container
    const childrenDiv = document.createElement("div");
    childrenDiv.className = "tree-children";
    if (!isExpanded) {
      childrenDiv.classList.add("collapsed");
    }
    if (hasChildren) {
      childIds.sort().forEach(function (cid) {
        renderNode(cid, childrenDiv);
      });
    }
    wrapper.appendChild(childrenDiv);

    container.appendChild(wrapper);
    return wrapper;
  }

  function toggleExpand(id) {
    if (state.expandedIdSet.has(id)) {
      state.expandedIdSet.delete(id);
    } else {
      state.expandedIdSet.add(id);
    }
    var wrapper = treeRoot.querySelector('[data-id="' + id + '"]');
    if (!wrapper) return;
    var childrenDiv = wrapper.querySelector(".tree-children");
    var toggleEl = wrapper.querySelector(".tree-toggle");
    if (!childrenDiv || !toggleEl) return;

    var isExpanded = state.expandedIdSet.has(id);
    toggleEl.textContent = isExpanded ? "▼" : "▶";

    if (isExpanded) {
      childrenDiv.classList.remove("collapsed");
    } else {
      childrenDiv.classList.add("collapsed");
    }
  }

  function expandAncestors(id) {
    const path = getIdPath(id);
    path.pop(); // remove self
    path.forEach(function (pid) {
      if (!state.expandedIdSet.has(pid)) {
        toggleExpand(pid);
      }
    });
  }

  /* ---- Selection & Detail ---- */

  function onNodeClick(id) {
    if (id === "__intro__" || id === "__glossary__") {
      selectSpecial(id, true);
      return;
    }
    // Expand parent path if not already visible
    expandAncestors(id);
    // Expand this node if it has children and isn't expanded
    if (getChildren(id).length > 0 && !state.expandedIdSet.has(id)) {
      toggleExpand(id);
    }
    selectNode(id, true);
  }

  function selectSpecial(specialId, updateHash) {
    // Deselect all tree rows (regular and special)
    var allRows = treeRoot.querySelectorAll('.tree-row');
    for (var r = 0; r < allRows.length; r++) {
      allRows[r].classList.remove('selected');
    }
    var allIntroRows = document.querySelectorAll('#treeIntro .intro-row');
    for (var r = 0; r < allIntroRows.length; r++) {
      allIntroRows[r].classList.remove('selected');
    }

    state.selectedId = specialId;

    // Highlight the clicked special row
    var specialRow = document.querySelector('#treeIntro .intro-row[data-id="' + specialId + '"]');
    if (specialRow) specialRow.classList.add('selected');

    // Hide all content panels
    introContent.classList.add('hidden');
    glossaryContent.classList.add('hidden');
    detailContent.classList.add('hidden');
    subPropsEl.style.display = 'none';

    // Show the relevant one
    if (specialId === '__intro__') {
      introContent.classList.remove('hidden');
    } else if (specialId === '__glossary__') {
      glossaryContent.classList.remove('hidden');
    }

    if (updateHash) {
      history.replaceState(null, "", window.location.pathname);
    }
  }

  function selectNode(id, updateHash) {
    // Handle special nodes
    if (id === "__intro__" || id === "__glossary__") {
      selectSpecial(id, updateHash);
      return;
    }

    // Deselect all tree rows (including special)
    var allRows = treeRoot.querySelectorAll('.tree-row');
    for (var r = 0; r < allRows.length; r++) {
      allRows[r].classList.remove('selected');
    }
    var allIntroRows = document.querySelectorAll('#treeIntro .intro-row');
    for (var r = 0; r < allIntroRows.length; r++) {
      allIntroRows[r].classList.remove('selected');
    }

    state.selectedId = id;

    // Select new
    var row = treeRoot.querySelector('[data-id="' + id + '"] .tree-row');
    if (row) {
      row.classList.add("selected");
      row.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }

    showDetail(id);
    if (updateHash) {
      history.replaceState(null, "", "#" + id);
    }
  }

  function showDetail(id) {
    var prop = PROPOSITIONS[id];
    if (!prop) return;

    // Hide special pages, show detail
    introContent.classList.add("hidden");
    glossaryContent.classList.add("hidden");
    detailContent.classList.remove("hidden");

    state.originalVisible = false;
    origTextBlock.classList.add("hidden");
    origToggleBtn.classList.remove("open");
    origToggleBtn.querySelector(".toggle-icon").textContent = "▸";

    // Breadcrumb
    var path = getIdPath(id);
    breadcrumbEl.innerHTML = "";
    path.forEach(function (pid, idx) {
      if (idx > 0) {
        var sep = document.createElement("span");
        sep.className = "sep";
        sep.textContent = "→";
        breadcrumbEl.appendChild(sep);
      }
      if (idx === path.length - 1) {
        var span = document.createElement("span");
        span.className = "current";
        span.textContent = pid;
        breadcrumbEl.appendChild(span);
      } else {
        var a = document.createElement("a");
        a.textContent = pid;
        (function (p) {
          a.addEventListener("click", function (e) {
            e.preventDefault();
            onNodeClick(p);
          });
        })(pid);
        breadcrumbEl.appendChild(a);
      }
    });

    // Number
    propNumberEl.textContent = id;

    // Text
    if (prop.zh) {
      propTextEl.textContent = prop.zh;
      translationBadge.classList.add("hidden");
    } else {
      propTextEl.textContent = prop.en || "";
      translationBadge.classList.remove("hidden");
    }

    // Original
    origDe.textContent = prop.de || "";
    origEnOgden.textContent = prop.en || "";
    origEnPM.textContent = prop.enPM || "";

    // Sub-propositions
    renderSubProps(id);

    // Navigation buttons
    updateNavButtons(id);
  }

  function renderSubProps(id) {
    var children = getChildren(id).sort();
    subPropsEl.innerHTML = "";

    if (children.length === 0) {
      subPropsEl.style.display = "none";
      return;
    }

    subPropsEl.style.display = "block";

    var title = document.createElement("div");
    title.className = "sub-props-title";
    title.textContent = "评注";
    subPropsEl.appendChild(title);

    children.forEach(function (cid) {
      var child = PROPOSITIONS[cid];
      var item = document.createElement("div");
      item.className = "sub-prop-item";
      item.addEventListener("click", function (e) {
        e.stopPropagation();
        onNodeClick(cid);
      });

      var num = document.createElement("span");
      num.className = "sub-prop-num";
      num.textContent = cid;
      item.appendChild(num);

      var text = document.createElement("div");
      text.className = "sub-prop-text";
      if (child.zh) {
        text.textContent = child.zh;
      } else {
        text.textContent = child.en || "";
        text.classList.add("untranslated");
      }
      if (!child.en || child.en.trim() === "(empty)") {
        text.classList.add("empty");
      }
      item.appendChild(text);

      subPropsEl.appendChild(item);
    });
  }

  function updateNavButtons(id) {
    const siblings = getSiblings(id);
    const idx = siblings.indexOf(id);
    const parentId = getParentId(id);
    const children = getChildren(id);

    navPrev.disabled = idx <= 0;
    navNext.disabled = idx >= siblings.length - 1;
    navParentBtn.disabled = parentId === null;

    navPrev.onclick = function () {
      if (idx > 0) onNodeClick(siblings[idx - 1]);
    };
    navNext.onclick = function () {
      if (idx < siblings.length - 1) onNodeClick(siblings[idx + 1]);
    };
    navParentBtn.onclick = function () {
      if (parentId) onNodeClick(parentId);
    };
  }

  /* ---- Original Toggle ---- */

  origToggleBtn.addEventListener("click", function () {
    state.originalVisible = !state.originalVisible;
    if (state.originalVisible) {
      origTextBlock.classList.remove("hidden");
      origToggleBtn.classList.add("open");
      origToggleBtn.querySelector(".toggle-icon").textContent = "▾";
    } else {
      origTextBlock.classList.add("hidden");
      origToggleBtn.classList.remove("open");
      origToggleBtn.querySelector(".toggle-icon").textContent = "▸";
    }
  });

  /* ---- Search ---- */

  searchBtn.addEventListener("click", function () {
    const isHidden = searchBox.classList.contains("hidden");
    if (isHidden) {
      searchBox.classList.remove("hidden");
      searchInput.focus();
    } else {
      clearSearch();
    }
  });

  searchClear.addEventListener("click", function (e) {
    e.stopPropagation();
    clearSearch();
  });

  searchInput.addEventListener("input", function () {
    const q = searchInput.value.trim().toLowerCase();
    state.searchQuery = q;
    if (!q) {
      clearSearch();
      return;
    }
    performSearch(q);
  });

  function performSearch(q) {
    // Expand all nodes that have matches in their subtree
    const matchingIds = allIds.filter(function (id) {
      const prop = PROPOSITIONS[id];
      const text = (prop.zh || prop.en || "").toLowerCase();
      return id.includes(q) || text.includes(q);
    });

    searchCount.textContent = matchingIds.length + " 个结果";

    // Expand ancestors of all matching nodes
    const toExpand = new Set();
    matchingIds.forEach(function (id) {
      getIdPath(id).forEach(function (pid) {
        if (pid !== id) toExpand.add(pid);
      });
    });

    // Expand needed nodes
    toExpand.forEach(function (pid) {
      if (!state.expandedIdSet.has(pid)) {
        state.expandedIdSet.add(pid);
      }
    });

    // Collapse unneeded expanded nodes (but keep roots and matching paths)
    const neededSet = new Set();
    matchingIds.forEach(function (id) {
      getIdPath(id).forEach(function (pid) {
        neededSet.add(pid);
      });
    });

    // Actually for UX, don't collapse - just expand what's needed
    renderTree();

    // Highlight matches
    matchingIds.forEach(function (id) {
      const row = treeRoot.querySelector('[data-id="' + id + '"] .tree-row');
      if (row) row.classList.add("search-match");
    });

    // Auto-select first match
    if (matchingIds.length > 0) {
      selectNode(matchingIds[0], true);
    }
  }

  function clearSearch() {
    state.searchQuery = "";
    searchInput.value = "";
    searchBox.classList.add("hidden");
    searchCount.textContent = "";

    // Remove highlights
    $$(".search-match").forEach(function (el) {
      el.classList.remove("search-match");
    });

    renderTree();
  }

  // Also style search matches
  (function addSearchStyles() {
    var style = document.createElement("style");
    style.textContent =
      ".tree-row.search-match { background: #fef3c7 !important; border-left-color: #f59e0b !important; }";
    document.head.appendChild(style);
  })();

  /* ---- Keyboard Shortcuts ---- */

  document.addEventListener("keydown", function (e) {
    // Ctrl+K / Cmd+K: open search
    if ((e.ctrlKey || e.metaKey) && e.key === "k") {
      e.preventDefault();
      searchBox.classList.remove("hidden");
      searchInput.focus();
      return;
    }

    // Escape: close search / clear selection
    if (e.key === "Escape") {
      if (!searchBox.classList.contains("hidden")) {
        clearSearch();
      }
      return;
    }

    // Arrow keys for navigation
    if (!state.selectedId) return;
    if (e.target.tagName === "INPUT") return;

    function isSpecial(id) {
      return id === "__intro__" || id === "__glossary__";
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (state.selectedId === "__glossary__") {
        onNodeClick("__intro__");
        return;
      }
      if (state.selectedId === "__intro__") return;
      navigatePrev();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (state.selectedId === "__intro__") {
        onNodeClick("__glossary__");
        return;
      }
      if (state.selectedId === "__glossary__") {
        onNodeClick(ROOT_IDS[0]);
        return;
      }
      navigateNext();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      if (isSpecial(state.selectedId)) return;
      var parent = getParentId(state.selectedId);
      if (parent) {
        onNodeClick(parent);
      } else {
        onNodeClick("__glossary__");
      }
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      if (isSpecial(state.selectedId)) {
        onNodeClick(ROOT_IDS[0]);
        return;
      }
      var children = getChildren(state.selectedId);
      if (children.length > 0) onNodeClick(children[0]);
    }
  });

  function navigatePrev() {
    if (isSpecial(state.selectedId)) return;
    var siblings = getSiblings(state.selectedId);
    var idx = siblings.indexOf(state.selectedId);
    if (idx > 0) {
      onNodeClick(siblings[idx - 1]);
    } else {
      var parent = getParentId(state.selectedId);
      if (parent) {
        selectNode(parent, true);
      } else {
        onNodeClick("__glossary__");
      }
    }
  }

  function navigateNext() {
    const siblings = getSiblings(state.selectedId);
    const idx = siblings.indexOf(state.selectedId);
    if (idx < siblings.length - 1) {
      onNodeClick(siblings[idx + 1]);
    }
  }

  /* ---- Toolbar Buttons ---- */

  collapseAllBtn.addEventListener("click", function () {
    state.expandedIdSet = new Set();
    renderTree();
  });

  expandToBtn.addEventListener("click", function () {
    state.expandedIdSet = new Set(allIds);
    renderTree();
  });

  /* ---- Mobile Toggle ---- */

  mobileToggleBtn.addEventListener("click", function () {
    if (treePanel.classList.contains("hidden-mobile")) {
      treePanel.classList.remove("hidden-mobile");
      detailPanel.classList.add("hidden-mobile");
      mobileToggleBtn.textContent = "📋 大纲 / 详情";
    } else {
      treePanel.classList.add("hidden-mobile");
      detailPanel.classList.remove("hidden-mobile");
      mobileToggleBtn.textContent = "🌳 大纲 / 详情";
    }
  });

  /* ---- Route: URL Hash ---- */

  function handleHash() {
    var hash = window.location.hash.replace("#", "").trim();
    if (!hash) return;

    // Validate the hash matches a proposition
    if (PROPOSITIONS[hash]) {
      expandAncestors(hash);
      // Expand the node itself
      if (getChildren(hash).length > 0 && !state.expandedIdSet.has(hash)) {
        state.expandedIdSet.add(hash);
      }
      renderTree();
      selectNode(hash, false);
    }
  }

  window.addEventListener("hashchange", handleHash);

  /* ---- Init ---- */

  function init() {
    renderTree();

    // Add click handlers for special tree nodes
    var specialRows = document.querySelectorAll('#treeIntro .intro-row');
    for (var s = 0; s < specialRows.length; s++) {
      specialRows[s].addEventListener("click", function () {
        onNodeClick(this.dataset.id);
      });
    }

    if (window.location.hash) {
      handleHash();
    } else {
      selectSpecial("__intro__", false);
    }
  }

  init();
})();
