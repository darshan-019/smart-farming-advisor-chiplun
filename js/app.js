// ============================================================
// APP — hash-based routing + rendering. No backend, no build step.
// ============================================================

function getLang() {
  return localStorage.getItem("sfa_lang") || "mr";
}
function setLang(l) {
  localStorage.setItem("sfa_lang", l);
}
function tr(field) {
  // field is a {en, mr} object
  if (!field) return "";
  const lang = getLang();
  return field[lang] || field.en || "";
}

const app = document.getElementById("app");

function navigate(hash) {
  window.location.hash = hash;
}

window.addEventListener("hashchange", render);
window.addEventListener("DOMContentLoaded", () => {
  document.documentElement.lang = getLang();
  render();
});

function closeDrawer() {
  document.getElementById("navdrawer").classList.remove("open");
}
function toggleDrawer() {
  document.getElementById("navdrawer").classList.toggle("open");
}
function toggleLang() {
  setLang(getLang() === "mr" ? "en" : "mr");
  document.documentElement.lang = getLang();
  render();
}

function renderTopbar() {
  return `
    <div class="topbar">
      <a class="brand" href="index.html">
        <span class="emoji">&#127807;</span><span>${tr(UI.siteName)}</span>
      </a>
      <div class="controls">
        <button class="langbtn" onclick="toggleLang()">${tr(UI.langToggle)}</button>
      </div>
    </div>
    <nav class="topnav" aria-label="${tr(UI.siteName)}">
      <a href="index.html">${tr(UI.navHome)}</a>
      <a href="#home">${tr(UI.navCrops)}</a>
      <a href="#calendar">${tr(UI.navCalendar)}</a>
      <a href="#fertilizer">${tr(UI.navFertilizer)}</a>
      <a href="#pest">${tr(UI.navPest)}</a>
      <a href="#about">${tr(UI.navAbout)}</a>
      <a href="#feedback">${tr(UI.navFeedback)}</a>
    </nav>
  `;
}
function render() {
  const hash = window.location.hash.replace("#", "") || "home";
  const parts = hash.split("/");
  let body = "";
  if (parts[0] === "home") body = renderHome();
  else if (parts[0] === "crop") body = renderCropOverview(parts[1]);
  else if (parts[0] === "journey") body = renderJourney(parts[1], parts[2], parseInt(parts[3] || "0", 10));
  else if (parts[0] === "calendar") body = renderCalendarPage(parts[1]);
  else if (parts[0] === "fertilizer") body = renderFertilizerGuide();
  else if (parts[0] === "pest") body = renderPestPage();
  else if (parts[0] === "about") body = renderAbout();
  else if (parts[0] === "feedback") body = renderFeedback();
  else body = renderHome();

  app.innerHTML = renderTopbar() + `<main>${body}</main>` + renderFooter();
  window.scrollTo(0, 0);
}

function renderFooter() {
  return `<footer>${tr(UI.footerNote)}</footer>`;
}

// ---------------- HOME ----------------
function renderHome() {
  const cards = CROP_ORDER.map(id => {
    const c = CROPS[id];
    return `
      <button class="crop-card" onclick="navigate('crop/${id}')">
        <span class="emoji">${c.icon}</span>
        <span class="name">${tr(c.name)}</span>
      </button>`;
  }).join("");
  return `
    <div class="hero">
      <div class="emoji-row">🌾</div>
      <h1>${tr(UI.siteName)}</h1>
      <p class="tagline">${tr(UI.tagline)}</p>
    </div>
    <h2 class="section-title">${tr(UI.selectCrop)}</h2>
    <div class="crop-grid">${cards}</div>
  `;
}

// ---------------- CROP OVERVIEW ----------------
function renderCropOverview(cropId) {
  const c = CROPS[cropId];
  if (!c) return renderHome();
  const ageChips = c.ageGroups.map((a, i) =>
    `<button class="age-chip" data-age="${a.id}" onclick="selectAge('${cropId}','${a.id}')">${tr(a.name)}</button>`
  ).join("");
  return `
    <button class="btn secondary small" onclick="navigate('home')">${tr(UI.backToCrops)}</button>
    <div class="hero" style="padding-top:14px;">
      <div class="emoji-row">${c.icon}</div>
      <h1>${tr(c.name)}</h1>
      <p class="pill">${tr(c.subtitle)}</p>
    </div>
    <div class="card">
      <h3>${tr(UI.overview)}</h3>
      <p>${tr(c.overview)}</p>
    </div>
    <h2 class="section-title">${tr(UI.selectAge)}</h2>
    <div class="age-grid" id="age-grid">${ageChips}</div>
    <button class="btn" id="start-btn" disabled style="opacity:0.5;" onclick="startJourney('${cropId}')">${tr(UI.startJourney)}</button>
    <div class="btn-row" style="margin-top:16px;">
      <button class="btn secondary" onclick="navigate('calendar/${cropId}')">📅 ${tr(UI.calendarHeading)}</button>
    </div>
  `;
}

let selectedAge = {};
function selectAge(cropId, ageId) {
  selectedAge[cropId] = ageId;
  document.querySelectorAll("#age-grid .age-chip").forEach(el => {
    el.classList.toggle("active", el.dataset.age === ageId);
  });
  const btn = document.getElementById("start-btn");
  btn.disabled = false;
  btn.style.opacity = "1";
}
function startJourney(cropId) {
  const age = selectedAge[cropId] || CROPS[cropId].ageGroups[0].id;
  navigate(`journey/${cropId}/${age}/0`);
}

// ---------------- JOURNEY (STEPPER) ----------------
function getFertForAge(crop, ageId) {
  const data = crop.fertilizerByAge && crop.fertilizerByAge[ageId];
  if (!data) return { status: "unverified" };
  if (data === "unverified") return { status: "unverified" };
  return { status: "has_data", items: data };
}

function renderFertBlock(crop, stage, ageId) {
  if (stage.fertilizerStatus === "none") {
    return `<div class="empty-note">🧪 ${tr(UI.noFertilizerMsg)}</div>`;
  }
  if (stage.fertilizerStatus === "byAge") {
    const f = getFertForAge(crop, ageId);
    if (f.status === "unverified") {
      return `<div class="empty-note unverified">🧪 ${tr(UI.unverifiedMsg)}</div>`;
    }
    return f.items.map(item => renderOneFert(item)).join("");
  }
  return `<div class="empty-note unverified">🧪 ${tr(UI.unverifiedMsg)}</div>`;
}

let sourceToggleCount = 0;
function renderOneFert(item) {
  sourceToggleCount++;
  const sid = `src-${sourceToggleCount}`;
  const rows = [
    ["fertilizerLabel", item.fertilizer],
    ["nutrientLabel", item.nutrient],
    ["quantityLabel", item.quantity, "quantity"],
    ["basisLabel", item.basis],
    ["whenLabel", item.when],
    ["methodLabel", item.method],
  ].filter(r => r[1]);
  let html = `<div class="fert-card"><div class="fert-title">🧪 ${tr(UI.fertilizerCard)}</div>`;
  rows.forEach(r => {
    html += `<div class="fert-row ${r[2] || ""}"><span class="k">${tr(UI[r[0]])}</span><span class="v">${tr(r[1])}</span></div>`;
  });
  if (item.important) {
    html += `<div class="fert-row"><span class="k">${tr(UI.importantLabel)}</span><span class="v">${tr(item.important)}</span></div>`;
  }
  if (item.source) {
    html += `<button class="fert-source-btn" onclick="document.getElementById('${sid}').classList.toggle('show')">📚 ${tr(UI.sourceBtn)}</button>
      <div class="source-box" id="${sid}">
        <strong>${item.source.organization}</strong><br/>
        ${item.source.publication}${item.source.year && item.source.year !== "n.d." ? " (" + item.source.year + ")" : ""}<br/>
        <a href="${item.source.url}" target="_blank" rel="noopener">${item.source.url}</a>
      </div>`;
  }
  html += `</div>`;
  return html;
}

function renderJourney(cropId, ageId, idx) {
  const crop = CROPS[cropId];
  if (!crop) return renderHome();
  const stages = crop.timeline;
  idx = Math.max(0, Math.min(idx, stages.length - 1));
  const stage = stages[idx];
  const ageName = (crop.ageGroups.find(a => a.id === ageId) || {}).name;

  const dots = stages.map((s, i) => `<span style="display:inline-block;width:8px;height:8px;border-radius:50%;margin:0 3px;background:${i === idx ? 'var(--gold)' : 'var(--line)'};"></span>`).join("");

  return `
    <button class="btn secondary small" onclick="navigate('crop/${cropId}')">${tr(UI.backToCrops)}</button>
    <div class="hero" style="padding-top:10px;padding-bottom:0;">
      <div class="emoji-row">${crop.icon}</div>
      <h1>${tr(crop.name)}</h1>
      ${ageName ? `<p class="pill">${tr(ageName)}</p>` : ""}
    </div>
    <p style="text-align:center;color:#6b5c4e;font-size:0.85rem;">${tr(UI.stageOf)} ${idx + 1} / ${stages.length}</p>
    <div style="text-align:center;margin-bottom:8px;">${dots}</div>

    <div class="card" style="border-color:var(--gold);border-width:2px;">
      <div style="display:flex;align-items:center;gap:10px;">
        <span style="font-size:2rem;">${stage.icon}</span>
        <div>
          <h2 style="margin-bottom:2px;">${tr(stage.stage)}</h2>
          <div style="font-size:0.85rem;color:#6b5c4e;">${tr(stage.time)}</div>
        </div>
      </div>

      <div class="stage-block">
        <div class="label">🧪 ${tr(UI.fertilizerCard)}</div>
        ${renderFertBlock(crop, stage, ageId)}
      </div>

      ${stage.irrigation ? `<div class="stage-block"><div class="label">💧 ${tr(UI.waterLabel)}</div><p>${tr(stage.irrigation)}</p></div>` : ""}
      ${stage.cropCare ? `<div class="stage-block"><div class="label">🌿 ${tr(UI.cropCareLabel)}</div><p>${tr(stage.cropCare)}</p></div>` : ""}
      ${stage.pestDisease ? `<div class="stage-block"><div class="label">🐛 ${tr(UI.pestLabel)}</div><p>${tr(stage.pestDisease)}</p></div>` : ""}
      ${stage.nextStep ? `<div class="stage-block"><div class="label">📌 ${tr(UI.nextStepLabel)}</div><div class="next-step">${tr(stage.nextStep)}</div></div>` : ""}
    </div>

    <div class="btn-row">
      ${idx > 0 ? `<button class="btn secondary" onclick="navigate('journey/${cropId}/${ageId}/${idx - 1}')">${tr(UI.prevStageBtn)}</button>` : ""}
      ${idx < stages.length - 1
        ? `<button class="btn" onclick="navigate('journey/${cropId}/${ageId}/${idx + 1}')">${tr(UI.nextStageBtn)}</button>`
        : `<button class="btn" onclick="navigate('calendar/${cropId}')">📅 ${tr(UI.calendarHeading)}</button>`}
    </div>
    ${idx === stages.length - 1 ? renderSourcesBlock(crop) : ""}
  `;
}

function renderSourcesBlock(crop) {
  const items = (crop.sources || []).map(s => `
    <div class="source-item">
      <div class="org">${s.organization}</div>
      <div>${s.publication}${s.year && s.year !== "n.d." ? " (" + s.year + ")" : ""}</div>
      <a href="${s.url}" target="_blank" rel="noopener" style="font-size:0.8rem;word-break:break-all;">${s.url}</a>
    </div>`).join("");
  return `<div class="card"><h3>📚 ${tr(UI.sourcesHeading)}</h3>${items}</div>`;
}

// ---------------- CALENDAR ----------------
function renderCalendarPage(cropId) {
  if (cropId && CROPS[cropId]) {
    const c = CROPS[cropId];
    const rows = c.calendar.map(r => `
      <div class="cal-row"><div class="month">${tr(r.month)}</div><div class="act">${tr(r.activity)}</div></div>
    `).join("");
    return `
      <button class="btn secondary small" onclick="navigate('crop/${cropId}')">${tr(UI.backToCrops)}</button>
      <h1>${c.icon} ${tr(c.name)} — ${tr(UI.calendarHeading)}</h1>
      <div class="card">${rows}</div>
    `;
  }
  const links = CROP_ORDER.map(id => {
    const c = CROPS[id];
    return `<button class="btn secondary" onclick="navigate('calendar/${id}')">${c.icon} ${tr(c.name)}</button>`;
  }).join("");
  return `<h1>📅 ${tr(UI.calendarHeading)}</h1><div class="btn-row" style="flex-direction:column;">${links}</div>`;
}

// ---------------- FERTILIZER GUIDE ----------------
function renderFertilizerGuide() {
  const sections = CROP_ORDER.map(id => {
    const c = CROPS[id];
    const ageIds = Object.keys(c.fertilizerByAge || {}).filter(k => c.fertilizerByAge[k] !== "unverified" && k !== "hybridNote");
    let content = "";
    if (ageIds.length === 0) {
      content = `<div class="empty-note unverified">${tr(UI.unverifiedMsg)}</div>`;
    } else {
      ageIds.forEach(ageId => {
        const ageName = (c.ageGroups.find(a => a.id === ageId) || {}).name;
        content += `<p class="pill">${ageName ? tr(ageName) : ageId}</p>`;
        const items = c.fertilizerByAge[ageId];
        if (Array.isArray(items)) content += items.map(renderOneFert).join("");
      });
    }
    return `<div class="card"><h3>${c.icon} ${tr(c.name)}</h3>${content}
      <button class="btn secondary small" onclick="navigate('crop/${id}')">${tr(UI.startJourney)}</button>
    </div>`;
  }).join("");
  return `<h1>🧪 ${tr(UI.navFertilizer)}</h1>${sections}`;
}

// ---------------- PEST & DISEASE ----------------
function renderPestPage() {
  const sections = CROP_ORDER.map(id => {
    const c = CROPS[id];
    const items = c.timeline.filter(s => s.pestDisease).map(s =>
      `<div class="stage-block"><div class="label">${s.icon} ${tr(s.stage)}</div><p>${tr(s.pestDisease)}</p></div>`
    ).join("");
    return `<div class="card"><h3>${c.icon} ${tr(c.name)}</h3>${items}</div>`;
  }).join("");
  return `<h1>🐛 ${tr(UI.navPest)}</h1>${sections}`;
}

// ---------------- ABOUT ----------------
function renderAbout() {
  return `
    <h1>ℹ️ ${tr(UI.navAbout)}</h1>
    <div class="card"><p>${tr(UI.aboutText)}</p></div>
    <div class="disclaimer">
      <h3>${tr(UI.disclaimerHeading)}</h3>
      <p>${tr(UI.disclaimerText)}</p>
    </div>
  `;
}

// ---------------- FEEDBACK ----------------
function renderFeedback() {
  return `
    <h1>✉️ ${tr(UI.navFeedback)}</h1>
    <div class="card"><p>${tr(UI.feedbackText)}</p></div>
  `;
}
