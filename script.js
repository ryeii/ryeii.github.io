const publications = [
  {
    year: 2026,
    venueFull: "ACM International Conference on Systems for Energy-Efficient Buildings, Cities, and Transportation",
    venueShort: "BuildSys",
    authors: "Zhibo Hou, Zhiyu An, and Wan Du",
    title: "TIME: Information-Theoretic MPPI Exploration for Efficient HVAC Control",
    url: "https://dl.acm.org/doi/full/10.1145/3744256.3812559",
    topics: ["ml", "environment"],
  },
  {
    year: 2026,
    venueFull: "AAAI Conference on Artificial Intelligence",
    venueShort: "AAAI",
    authors: "Zhiyu An and Wan Du",
    title: "MoralReason: Generalizable Moral Decision Alignment For LLM Agents Using Reasoning-Level Reinforcement Learning",
    url: "https://arxiv.org/abs/2511.12271",
    topics: ["interface"],
  },
  {
    year: 2026,
    venueFull: "International Conference on Learning Representations",
    venueShort: "ICLR",
    authors: "Zhibo Hou, Zhiyu An, and Wan Du",
    title: "Beyond Noisy-TVs: Noise-Robust Exploration Via Learning Progress Monitoring",
    url: "https://arxiv.org/abs/2509.25438",
    topics: ["ml"],
  },
  {
    year: 2025,
    venueFull: "Proceedings of the NeurIPS Workshop on Symmetry and Geometry in Neural Representations",
    venueShort: "NeurIPS Workshop",
    authors: "Zhiyu An and Wan Du",
    title: "Representational Homomorphism Error Predicts Compositional Generalization In Language Models",
    url: "https://neurips.cc/virtual/2025/loc/san-diego/136901",
    note: "Spotlight, Oral. Also presented at the NeurIPS Workshop on Foundations of Reasoning in Language Models",
    topics: ["interface"],
  },
  {
    year: 2025,
    venueFull: "Learning for Dynamics and Control Conference",
    venueShort: "L4DC",
    authors: "Zhiyu An, Zhibo Hou, and Wan Du",
    title: "Disentangling Uncertainties by Learning Compressed Data Representation",
    url: "https://arxiv.org/abs/2503.15801",
    topics: ["ml"],
  },
  {
    year: 2025,
    venueFull: "IEEE Internet of Things Journal",
    venueShort: "IEEE IoT-J",
    authors: "Zhiyu An, Xianzhong Ding, Arya Rathee, and Wan Du",
    title: "A Safe and Data-efficient Model-based Reinforcement Learning System for HVAC Control",
    url: "https://ieeexplore.ieee.org/document/10878986",
    topics: ["ml", "environment"],
  },
  {
    year: 2025,
    venueFull: "SIGIR Workshop on Robust Information Retrieval",
    venueShort: "SIGIR Workshop",
    authors: "Zhiyu An, Xianzhong Ding, Yen-Chun Fu, Cheng-Chung Chu, Yan Li, and Wan Du",
    title: "Golden-Retriever: High-Fidelity Agentic Retrieval Augmented Generation for Industrial Knowledge Base",
    url: "https://arxiv.org/abs/2408.00798",
    note: "Work done while interning at Western Digital Corporation",
    topics: ["interface"],
  },
  {
    year: 2025,
    venueFull: "Hawaii International Conference on System Sciences",
    venueShort: "HICSS",
    authors: "Xianzhong Ding, Wanshi Hong, Bin Wang, Zhiyu An, and Wan Du",
    title: "Deepot: Parking Lot Identification Using Low-Resolution Satellite Imagery",
    note: "Best Paper Award",
    topics: ["ml", "environment"],
  },
  {
    year: 2024,
    venueFull: "International Conference on Learning Representations - Tiny Papers Track",
    venueShort: "ICLR Tiny Papers",
    authors: "Zhiyu An, Xianzhong Ding, and Wan Du",
    title: "Reward Bound for Behavioral Guarantee of Model-Based Planning Agents",
    url: "https://arxiv.org/abs/2402.13419",
    topics: ["ml"],
  },
  {
    year: 2024,
    venueFull: "ACM/IEEE Design Automation Conference",
    venueShort: "DAC",
    authors: "Zhiyu An, Xianzhong Ding, and Wan Du",
    title: "Go Beyond Black-box Policies: Rethinking the Design of Learning Agent for Interpretable and Verifiable HVAC Control",
    url: "https://arxiv.org/abs/2403.00172",
    topics: ["ml", "environment"],
  },
  {
    year: 2024,
    venueFull: "ACM SIGKDD Conference on Knowledge Discovery and Data Mining",
    venueShort: "KDD",
    authors: "Yuning Chen, Kang Yang, Brady Holder, Luke Paloutzian, Khaled M. Bali, Zhiyu An, and Wan Du",
    title: "MARLP: Time-series Forecasting Control for Agricultural Managed Aquifer Recharge",
    url: "https://dl.acm.org/doi/10.1145/3637528.3671533",
    topics: ["ml", "environment"],
  },
  {
    year: 2023,
    venueFull: "ACM International Conference on Systems for Energy-Efficient Buildings, Cities, and Transportation",
    venueShort: "BuildSys",
    authors: "Zhiyu An, Xianzhong Ding, Arya Rathee, and Wan Du",
    title: "CLUE: Safe Model-Based RL HVAC Control Using Epistemic Uncertainty Estimation",
    url: "https://dl.acm.org/doi/10.1145/3600100.3623742",
    note: "Best Paper Runner-Up",
    topics: ["ml", "environment"],
  },
  {
    year: 2023,
    venueFull: "ACM Conference on Embedded Networked Sensor Systems Poster Session",
    venueShort: "SenSys Poster",
    authors: "Zhiyu An, Xianzhong Ding, and Wan Du",
    title: "Data Efficient HVAC Control using Gaussian Process-based Reinforcement Learning",
    topics: ["ml", "environment"],
  },
];

const topicLabels = {
  interface: "Explainable and Trustworthy AI",
  ml: "Machine Learning",
  environment: "Civil Engineering + IoT",
};

const circles = document.querySelectorAll(".venn-circle");
const drawerTab = document.querySelector("#drawer-tab");
const publicationList = document.querySelector("#publication-list");
const paperItems = document.querySelectorAll(".paper-set li[data-publication]");
const resetTopicsButton = document.querySelector("#reset-topics");
const researchSection = document.querySelector("#research");
const connector = document.querySelector(".paper-connector");
const connectorPath = document.querySelector("#paper-connector-path");
let activeConnectorItem = null;
let activeConnectorTarget = null;
let connectorTimer = null;
let currentTopic = null;

function appendAuthorText(container, authors) {
  const highlightedName = "Zhiyu An";
  const parts = authors.split(highlightedName);

  parts.forEach((part, index) => {
    if (part) {
      container.append(document.createTextNode(part));
    }

    if (index < parts.length - 1) {
      const underline = document.createElement("u");
      underline.textContent = highlightedName;
      container.append(underline);
    }
  });
}

function createPublicationItem(publication, index) {
  const item = document.createElement("li");
  item.className = "reference-item";
  item.dataset.topics = publication.topics.join(" ");
  item.id = `publication-${index + 1}`;
  item.tabIndex = -1;

  const text = document.createElement("p");
  text.className = "reference-text";

  const authors = document.createElement("span");
  authors.className = "reference-authors";
  appendAuthorText(authors, publication.authors);

  const title = document.createElement(publication.url ? "a" : "span");
  title.className = "reference-title";
  if (publication.url) {
    title.href = publication.url;
    title.target = "_blank";
    title.rel = "noreferrer";
  }
  title.textContent = `"${publication.title}"`;

  const venueFull = document.createElement("cite");
  venueFull.className = "reference-venue-full";
  venueFull.textContent = publication.venueFull;

  const venueShort = document.createElement("strong");
  venueShort.className = "reference-venue-short";
  venueShort.textContent = `(${publication.venueShort})`;

  text.append(authors, ". ", title, ", ", venueFull, " ", venueShort, `, ${publication.year}.`);

  if (publication.note) {
    const note = document.createElement("span");
    note.className = "reference-note";
    note.textContent = ` ${publication.note}.`;
    text.append(note);
  }

  item.append(text);
  return item;
}

function setDrawerOpen(isOpen) {
  document.body.classList.toggle("drawer-open", isOpen);
  drawerTab.setAttribute("aria-expanded", String(isOpen));
  drawerTab.setAttribute(
    "aria-label",
    isOpen ? "Collapse publications panel" : "Expand publications panel"
  );
}

function setActiveTopic(topicKey, shouldScroll = true) {
  const matchingItems = publicationList.querySelectorAll(`[data-topics~="${topicKey}"]`);
  currentTopic = topicKey;
  researchSection.classList.add("has-active-topic");

  circles.forEach((circle) => {
    const isActive = circle.dataset.topic === topicKey;
    circle.classList.toggle("is-active", isActive);
    circle.setAttribute("aria-pressed", String(isActive));
  });

  publicationList.querySelectorAll(".reference-item").forEach((item) => {
    const isMatch = item.dataset.topics.split(" ").includes(topicKey);
    item.classList.toggle("is-highlighted", isMatch);
    item.setAttribute("aria-label", isMatch ? `${topicLabels[topicKey]} related publication` : "Publication");
  });

  if (shouldScroll && matchingItems.length > 0) {
    matchingItems[0].scrollIntoView({ behavior: "smooth", block: "start" });
    matchingItems[0].focus({ preventScroll: true });
  }
}

function resetActiveTopic() {
  currentTopic = null;
  clearPaperConnector();
  researchSection.classList.remove("has-active-topic");

  circles.forEach((circle) => {
    circle.classList.remove("is-active");
    circle.setAttribute("aria-pressed", "false");
  });

  publicationList.querySelectorAll(".reference-item").forEach((item) => {
    item.classList.remove("is-highlighted", "is-linked");
    item.setAttribute("aria-label", "Publication");
  });
}

function clearPaperConnector() {
  window.clearTimeout(connectorTimer);
  activeConnectorItem = null;

  if (activeConnectorTarget) {
    activeConnectorTarget.classList.remove("is-linked");
    activeConnectorTarget = null;
  }

  connector.classList.remove("is-visible");
  connectorPath.setAttribute("d", "");
}

function drawPaperConnector() {
  if (!activeConnectorItem || !activeConnectorTarget) {
    return;
  }

  const sourceRect = activeConnectorItem.getBoundingClientRect();
  const targetRect = activeConnectorTarget.getBoundingClientRect();
  const startX = sourceRect.right + 8;
  const startY = sourceRect.top + sourceRect.height / 2;
  const endX = targetRect.left + 8;
  const endY = targetRect.top + Math.min(targetRect.height / 2, 34);
  const distance = Math.max(60, endX - startX);
  const controlX1 = startX + distance * 0.38;
  const controlX2 = startX + distance * 0.78;

  connectorPath.setAttribute(
    "d",
    `M ${startX} ${startY} C ${controlX1} ${startY}, ${controlX2} ${endY}, ${endX} ${endY}`
  );
  connector.classList.add("is-visible");
}

function showPaperConnector(item) {
  const target = document.querySelector(`#${item.dataset.publication}`);

  if (!target) {
    return;
  }

  window.clearTimeout(connectorTimer);
  setDrawerOpen(true);

  if (activeConnectorTarget && activeConnectorTarget !== target) {
    activeConnectorTarget.classList.remove("is-linked");
  }

  activeConnectorItem = item;
  activeConnectorTarget = target;
  target.classList.add("is-linked");
  target.scrollIntoView({ behavior: "smooth", block: "center" });

  connectorTimer = window.setTimeout(() => {
    drawPaperConnector();
  }, 260);
}

publicationList.append(...publications.map(createPublicationItem));

circles.forEach((circle) => {
  circle.addEventListener("click", () => {
    setDrawerOpen(true);

    if (currentTopic === circle.dataset.topic) {
      resetActiveTopic();
      return;
    }

    setActiveTopic(circle.dataset.topic);
  });
});

drawerTab.addEventListener("click", () => {
  setDrawerOpen(!document.body.classList.contains("drawer-open"));
});

resetTopicsButton.addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();
  resetActiveTopic();
});

paperItems.forEach((item) => {
  item.addEventListener("pointerenter", () => showPaperConnector(item));
  item.addEventListener("pointerleave", clearPaperConnector);
  item.addEventListener("mouseenter", () => showPaperConnector(item));
  item.addEventListener("focus", () => showPaperConnector(item));
  item.addEventListener("mouseleave", clearPaperConnector);
  item.addEventListener("blur", clearPaperConnector);
});

window.addEventListener("resize", drawPaperConnector);
window.addEventListener("scroll", drawPaperConnector, { passive: true });
publicationList.addEventListener("scroll", drawPaperConnector, { passive: true });
