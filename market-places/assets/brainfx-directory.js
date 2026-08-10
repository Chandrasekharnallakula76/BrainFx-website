const brainfxBaseProfiles = [
  {
    id:"c1", type:"clinician", name:"Dr. Hannah Mehta", initials:"HM", role:"Clinical Neuropsychologist", city:"Toronto", region:"Ontario", lat:43.6532, lng:-79.3832, rating:"4.9", reviews:183, experience:"14 yrs", availability:"Available this week", published:true,
    specialties:["ABI","Stroke","Pediatric","Neuropsychology"], languages:["English","Hindi"], verified:"BrainFX 360 Advanced Verified",
    bio:"Supports patients recovering from acquired brain injury, stroke, and complex cognitive changes with structured cognitive assessment and practical rehabilitation planning.",
    education:["PhD Clinical Neuropsychology, University of Toronto","Postdoctoral Fellowship in Cognitive Rehabilitation","BrainFX 360 Advanced Certification"],
    experienceList:["14 years in hospital and outpatient neurorehabilitation settings","Led interdisciplinary cognitive assessment programs for ABI and stroke recovery","Created return to school and family guidance pathways"],
    services:["BrainFX 360 Assessment","Cognitive Rehabilitation Planning","Pediatric Neuropsychological Assessment","Caregiver Consultation"],
    approach:"Warm, evidence informed, and goal oriented. Patients receive clear findings and practical next steps.",
    calendly:"https://calendly.com/brainfx/hannah-mehta"
  },
  {
    id:"c2", type:"clinician", name:"Amelia Morin", initials:"AM", role:"Occupational Therapist", city:"Montreal", region:"Quebec", lat:45.5017, lng:-73.5673, rating:"4.8", reviews:124, experience:"11 yrs", availability:"2 week wait", published:true,
    specialties:["Return to Work","Dementia","Occupational Therapy"], languages:["English","French"], verified:"BrainFX Verified",
    bio:"Focuses on daily function, workplace participation, dementia care planning, and practical strategies for home and community routines.",
    education:["MSc Occupational Therapy, McGill University","Certified BrainFX 360 Clinician","Advanced workplace accommodation training"],
    experienceList:["11 years in community based cognitive rehabilitation","Designed return to work plans for insurers and employers","Special focus on dementia care and caregiver education"],
    services:["Functional Cognition Assessment","Return to Work Planning","Home and Workplace Accommodation","Caregiver Education"],
    approach:"Collaborative and practical, with recommendations patients can use immediately.",
    calendly:"https://calendly.com/brainfx/amelia-morin"
  },
  {
    id:"c3", type:"clinician", name:"Marcus Silva", initials:"MS", role:"Occupational Therapist", city:"Vancouver", region:"British Columbia", lat:49.2827, lng:-123.1207, rating:"4.7", reviews:197, experience:"9 yrs", availability:"Available this week", published:true,
    specialties:["Stroke","Concussion","Dementia"], languages:["English","Spanish"], verified:"BrainFX Verified",
    bio:"Helps patients and families translate assessment findings into rehabilitation routines, safety strategies, and community reintegration plans.",
    education:["MOT Occupational Therapy, University of British Columbia","BrainFX 360 Certification","Concussion management continuing education"],
    experienceList:["9 years in neurorehabilitation and community OT practice","Supported stroke recovery programs across outpatient and home care settings","Experienced in fatigue management and cognitive pacing"],
    services:["BrainFX 360 Assessment","Stroke Recovery Planning","Concussion Recovery Coaching","Community Reintegration"],
    approach:"Structured, calm, and family centered, with measurable goals.",
    calendly:"https://calendly.com/brainfx/marcus-silva"
  },
  {
    id:"c4", type:"clinician", name:"Dr. Sophie Hart", initials:"SH", role:"Neuropsychologist", city:"Ottawa", region:"Ontario", lat:45.4215, lng:-75.6972, rating:"4.9", reviews:214, experience:"16 yrs", availability:"This month", published:true,
    specialties:["Concussion","Pediatric","Neuropsychology"], languages:["English","French"], verified:"BrainFX 360 Advanced Verified",
    bio:"Specializes in pediatric and young adult cognitive profiles, concussion, and school reintegration after injury or neurological change.",
    education:["PsyD Clinical Neuropsychology, York University","Pediatric Neuropsychology Residency","BrainFX 360 Advanced Certification"],
    experienceList:["16 years in pediatric neuropsychology and concussion care","Consulted with schools and families on return to learn plans","Built cognitive screening pathways for multidisciplinary clinics"],
    services:["Pediatric Cognitive Assessment","Concussion Assessment","Return to Learn Planning","Family Consultation"],
    approach:"Detailed, compassionate, and developmentally informed.",
    calendly:"https://calendly.com/brainfx/sophie-hart"
  },
  {
    id:"c5", type:"clinician", name:"Ethan Brooks", initials:"EB", role:"Speech Language Pathologist", city:"Calgary", region:"Alberta", lat:51.0447, lng:-114.0719, rating:"4.7", reviews:91, experience:"8 yrs", availability:"Available this week", published:true,
    specialties:["Concussion","Communication","ABI"], languages:["English"], verified:"BrainFX Verified",
    bio:"Supports cognitive communication changes, attention challenges, and fatigue after concussion or acquired brain injury.",
    education:["MSc Speech Language Pathology, University of Alberta","BrainFX 360 Certification","Cognitive communication rehabilitation training"],
    experienceList:["8 years in cognitive communication rehabilitation","Worked with athletes, students, and professionals after concussion","Collaborates with OTs and neuropsychologists"],
    services:["Cognitive Communication Assessment","Concussion Recovery Planning","Attention and Memory Strategy Coaching","Family Education"],
    approach:"Clear, encouraging, and skills based.",
    calendly:"https://calendly.com/brainfx/ethan-brooks"
  },
  {
    id:"k1", type:"clinic", name:"BrainFX NeuroCare Clinic", initials:"BN", role:"Integrated Cognitive Assessment Clinic", city:"Toronto", region:"Ontario", lat:43.6682, lng:-79.4052, rating:"4.9", reviews:342, experience:"12 yrs", availability:"Available this week", published:true,
    specialties:["ABI","Stroke","Concussion","Dementia"], languages:["English","French"], verified:"BrainFX Verified Clinic",
    bio:"Integrated clinic offering BrainFX 360 assessment, interdisciplinary care planning, and cognitive rehabilitation pathways.",
    education:["BrainFX clinic verification completed","Interdisciplinary neurorehabilitation team review","Annual quality and credential review"],
    experienceList:["Supports high volume cognitive assessment referrals","Coordinates OT, neuropsychology, and speech language services","Provides structured assessment summaries for patients and care teams"],
    services:["BrainFX 360 Assessment","Interdisciplinary Case Review","Cognitive Rehabilitation","Family Consultation"],
    team:["Dr. Hannah Mehta","Amelia Morin","Marcus Silva"], approach:"A coordinated clinic model for assessment, rehabilitation planning, and follow up support.",
    calendly:"https://calendly.com/brainfx/neurocare-consult"
  },
  {
    id:"k2", type:"clinic", name:"Cognitive Recovery Partners", initials:"CR", role:"Brain Injury and Return to Work Clinic", city:"Vancouver", region:"British Columbia", lat:49.2697, lng:-123.1456, rating:"4.8", reviews:286, experience:"10 yrs", availability:"2 week wait", published:true,
    specialties:["Return to Work","Concussion","ABI","Rehabilitation"], languages:["English","Mandarin","Punjabi"], verified:"BrainFX Verified Clinic",
    bio:"Clinic focused on concussion recovery, workplace accommodation, functional cognition, and return to work planning.",
    education:["BrainFX clinic verification completed","Workplace accommodation pathway review","Clinical documentation standards review"],
    experienceList:["Works with insurers, employers, and families","Builds functional recovery plans for work and school","Supports complex concussion and ABI cases"],
    services:["Functional Cognition Assessment","Return to Work Planning","Concussion Recovery Program","Workplace Accommodation"],
    team:["Dr. Sophie Hart","Ethan Brooks","Naomi Clarke"], approach:"Practical, workplace aware care that turns assessment findings into clear accommodations and recovery plans.",
    calendly:"https://calendly.com/brainfx/recovery-partners"
  },
  {
    id:"k3", type:"clinic", name:"MindBridge Cognitive Health", initials:"MB", role:"Memory and Neurorehabilitation Clinic", city:"Montreal", region:"Quebec", lat:45.5142, lng:-73.5857, rating:"4.7", reviews:198, experience:"9 yrs", availability:"Available this week", published:true,
    specialties:["Dementia","Memory Care","Stroke","Rehabilitation"], languages:["English","French","Arabic"], verified:"BrainFX Verified Clinic",
    bio:"Bilingual clinic supporting memory concerns, dementia screening, stroke recovery, and caregiver education.",
    education:["BrainFX clinic verification completed","Bilingual care pathway review","Caregiver education standards review"],
    experienceList:["Runs memory and cognitive screening programs","Supports families through structured caregiver guidance","Coordinates follow up for dementia and stroke care"],
    services:["Memory Screening","BrainFX 360 Assessment","Caregiver Education","Stroke Recovery Planning"],
    team:["Dr. Aria Tan","Leo Carter","Amelia Taylor"], approach:"Clear, supportive, and family centered guidance for patients and caregivers.",
    calendly:"https://calendly.com/brainfx/mindbridge-intake"
  }
];

const profileStoreKey = "brainfxDirectoryProfiles";
const leadStoreKey = "brainfxOwnerLeads";
const $ = (selector, root=document) => root.querySelector(selector);
const $$ = (selector, root=document) => Array.from(root.querySelectorAll(selector));
const page = document.body.dataset.page || "find";
let activeFilter = "All";
let query = "";
let activeLeadProfileId = "";
const leafletState = new Map();

try {
  const params = new URLSearchParams(window.location.search);
  query = params.get("q") || "";
  activeFilter = params.get("filter") || "All";
} catch (error) {
  activeFilter = "All";
  query = "";
}

function escapeHtml(value){
  return String(value ?? "").replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
}
function safeArray(value){
  if(Array.isArray(value)) return value.filter(Boolean);
  return String(value || "").split(",").map(item => item.trim()).filter(Boolean);
}
function initialsFromName(name){
  return String(name || "BF").split(/\s+/).filter(Boolean).slice(0,2).map(part => part[0]).join("").toUpperCase() || "BF";
}
function normalizeProfile(profile, index=0){
  const fallback = brainfxBaseProfiles[index] || brainfxBaseProfiles[0] || {};
  return {
    ...fallback,
    ...profile,
    id: profile.id || fallback.id || `p${index + 1}`,
    type: profile.type === "clinic" ? "clinic" : "clinician",
    initials: profile.initials || initialsFromName(profile.name || fallback.name),
    specialties: safeArray(profile.specialties || fallback.specialties),
    languages: safeArray(profile.languages || fallback.languages),
    education: safeArray(profile.education || fallback.education),
    experienceList: safeArray(profile.experienceList || fallback.experienceList),
    services: safeArray(profile.services || fallback.services),
    team: safeArray(profile.team || fallback.team),
    lat: Number(profile.lat ?? fallback.lat ?? 43.6532),
    lng: Number(profile.lng ?? fallback.lng ?? -79.3832),
    rating: String(profile.rating || fallback.rating || "4.8"),
    reviews: Number(profile.reviews ?? fallback.reviews ?? 0),
    published: profile.published !== false
  };
}
function readStoredProfiles(){
  try {
    const stored = JSON.parse(localStorage.getItem(profileStoreKey) || "null");
    if(Array.isArray(stored) && stored.length) return stored.map(normalizeProfile);
  } catch (error) {}
  return brainfxBaseProfiles.map(normalizeProfile);
}
function writeStoredProfiles(profiles){
  localStorage.setItem(profileStoreKey, JSON.stringify(profiles.map((profile, index) => normalizeProfile(profile, index))));
}
function resetStoredProfiles(){
  localStorage.removeItem(profileStoreKey);
}
function loadPublicProfiles(){
  return readStoredProfiles().filter(profile => profile.published !== false);
}

let directoryProfiles = loadPublicProfiles();
window.directoryProfiles = directoryProfiles;
window.brainfxProfileStore = {
  baseProfiles: brainfxBaseProfiles,
  read: readStoredProfiles,
  write: writeStoredProfiles,
  reset: resetStoredProfiles,
  refreshPublic(){
    directoryProfiles = loadPublicProfiles();
    window.directoryProfiles = directoryProfiles;
    return directoryProfiles;
  }
};

function refreshPublicProfiles(){
  if(window.brainfxProfileStore){
    directoryProfiles = window.brainfxProfileStore.refreshPublic();
  }
}
function avatarData(p){
  const first = p.type === "clinic" ? "#0a0e2e" : "#0b5f95";
  const second = p.type === "clinic" ? "#1182cf" : "#5fb662";
  const label = escapeHtml(p.initials);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96"><defs><linearGradient id="g" x1="0" x2="1" y1="0" y2="1"><stop stop-color="${first}"/><stop offset="1" stop-color="${second}"/></linearGradient></defs><rect width="96" height="96" rx="48" fill="url(#g)"/><circle cx="48" cy="34" r="15" fill="rgba(255,255,255,.9)"/><path d="M20 82c4-20 19-31 28-31s24 11 28 31" fill="rgba(255,255,255,.88)"/><text x="48" y="57" text-anchor="middle" font-family="Arial,sans-serif" font-size="20" font-weight="800" fill="${first}">${label}</text></svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}
function byPage(){
  if(page === "clinicians") return directoryProfiles.filter(p => p.type === "clinician");
  if(page === "clinics") return directoryProfiles.filter(p => p.type === "clinic");
  return directoryProfiles;
}
function matchesFilter(profile, filter){
  if(filter === "All") return true;
  const normalized = String(filter || "").toLowerCase();
  if(profile.type === normalized) return true;
  if(normalized === "available" && /available/i.test(profile.availability)) return true;
  return profile.specialties.some(item => item.toLowerCase() === normalized) || profile.role.toLowerCase().includes(normalized) || profile.region.toLowerCase() === normalized;
}
function filteredProfiles(){
  refreshPublicProfiles();
  const q = query.trim().toLowerCase();
  return byPage().filter(p => {
    const text = [p.type,p.name,p.role,p.city,p.region,p.availability,p.verified,p.bio,p.approach,...p.specialties,...p.languages,...p.services,...(p.team || [])].join(" ").toLowerCase();
    return matchesFilter(p, activeFilter) && (!q || text.includes(q));
  });
}
function badgeText(p){
  return p.type === "clinic" ? "BrainFX Verified Clinic" : "BrainFX Verified Clinician";
}
function cardMarkup(p){
  return `<article class="profile-card" data-id="${p.id}">
    <div class="hover-cta"><button class="btn ghost" type="button" data-action="profile" data-id="${p.id}">View Profile</button></div>
    <div class="card-top"><div class="avatar">${escapeHtml(p.initials)}</div><div><div class="name">${escapeHtml(p.name)}</div><div class="role">${escapeHtml(p.role)}</div><div class="badge">${badgeText(p)}</div></div></div>
    <div class="trust-row"><span>Accepting requests</span><span>Calendly available</span></div>
    <div class="stats"><div class="stat"><strong>${escapeHtml(p.rating)}</strong><span>rating</span></div><div class="stat"><strong>${escapeHtml(p.experience)}</strong><span>experience</span></div><div class="stat"><strong>${escapeHtml(p.availability)}</strong><span>availability</span></div></div>
    <div class="chips">${p.specialties.slice(0,4).map(s => `<span class="chip">${escapeHtml(s)}</span>`).join("")}</div>
    <p class="bio">${escapeHtml(p.bio)}</p>
    <div class="card-actions"><button class="btn ghost" type="button" data-action="profile" data-id="${p.id}">View Profile</button><button class="btn green" type="button" data-action="book" data-id="${p.id}">Book</button></div>
  </article>`;
}
function resultMarkup(p){
  return `<div class="result-card" data-id="${p.id}">
    <div class="card-top"><img class="result-photo" src="${avatarData(p)}" alt="${escapeHtml(p.name)}"><div><div class="name">${escapeHtml(p.name)}</div><div class="role">${escapeHtml(p.role)}</div><div class="badge">${badgeText(p)}</div></div></div>
    <div class="chips">${p.specialties.slice(0,3).map(s => `<span class="chip">${escapeHtml(s)}</span>`).join("")}</div>
    <p class="bio">${escapeHtml(p.city)}, ${escapeHtml(p.region)}, ${escapeHtml(p.availability)}</p>
    <div class="card-actions"><button class="btn ghost" type="button" data-action="profile" data-id="${p.id}">View Profile</button><button class="btn green" type="button" data-action="book" data-id="${p.id}">Book</button></div>
  </div>`;
}
function renderDirectory(){
  const grid = $("#directoryGrid");
  if(!grid) return;
  const list = filteredProfiles();
  grid.innerHTML = list.length ? list.map(cardMarkup).join("") : `<div class="profile-card"><div class="name">No matching profiles</div><p class="bio">Try another specialty, city, clinician, or clinic name.</p></div>`;
  const count = $("#profileCount");
  if(count) count.textContent = String(list.length);
}
function markerIcon(profile){
  if(!window.L) return null;
  return L.divIcon({
    className:"leaflet-profile-pin-shell",
    html:`<div class="leaflet-profile-pin ${profile.type}"><img src="${avatarData(profile)}" alt="${escapeHtml(profile.name)}"></div>`,
    iconSize:[70,70],
    iconAnchor:[35,35],
    popupAnchor:[0,-34]
  });
}
function initLeafletMap(container){
  if(!container || !window.L) {
    if(container) {
      container.classList.add("map-unavailable");
      container.innerHTML = `<div class="map-fallback">Real map is loading. Search results are still available on the left.</div>`;
    }
    return null;
  }
  if(leafletState.has(container)) return leafletState.get(container);
  const map = L.map(container, {scrollWheelZoom:false, zoomControl:true, attributionControl:true});
  map.setView([49.5,-96.6], 4);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom:18,
    attribution:'&copy; OpenStreetMap contributors'
  }).addTo(map);
  const layer = L.layerGroup().addTo(map);
  const state = {map, layer};
  leafletState.set(container, state);
  setTimeout(() => map.invalidateSize(), 80);
  return state;
}
function renderLeafletMaps(list){
  $$(".real-map").forEach(container => {
    const state = initLeafletMap(container);
    if(!state) return;
    state.layer.clearLayers();
    const located = list.filter(profile => Number.isFinite(profile.lat) && Number.isFinite(profile.lng));
    located.forEach(profile => {
      const marker = L.marker([profile.lat, profile.lng], {icon:markerIcon(profile), keyboard:true, title:profile.name});
      marker.on("click", () => openProfile(profile.id));
      marker.bindTooltip(`<strong>${escapeHtml(profile.name)}</strong><br>${escapeHtml(profile.city)}`, {direction:"top", offset:[0,-28], opacity:.96});
      marker.addTo(state.layer);
    });
    if(located.length === 1){
      state.map.setView([located[0].lat, located[0].lng], 10, {animate:true});
    } else if(located.length > 1){
      const bounds = L.latLngBounds(located.map(profile => [profile.lat, profile.lng]));
      state.map.fitBounds(bounds.pad(.22), {maxZoom:8, animate:true});
    } else {
      state.map.setView([49.5,-96.6], 4);
    }
    setTimeout(() => state.map.invalidateSize(), 80);
  });
}
function renderMap(){
  const list = filteredProfiles();
  const results = $("#mapResults");
  if(results) results.innerHTML = list.length ? list.map(resultMarkup).join("") : `<div class="result-card"><div class="name">No matching profiles</div><p class="bio">Clear search or choose All to see everyone.</p></div>`;
  const count = $("#mapCount");
  if(count) count.textContent = String(list.length);
  const total = $("#totalProfiles");
  if(total) total.textContent = String(directoryProfiles.length);
  const available = $("#availableProfiles");
  if(available) available.textContent = String(list.filter(p => /available/i.test(p.availability)).length);
  renderLeafletMaps(list);
}
function render(){
  renderDirectory();
  renderMap();
}
function profileModalMarkup(p){
  return `<div class="modal-head">
    <div class="avatar">${escapeHtml(p.initials)}</div>
    <div><div class="badge">${escapeHtml(p.verified)}</div><h3>${escapeHtml(p.name)}</h3><p>${escapeHtml(p.role)}, ${escapeHtml(p.city)}, ${escapeHtml(p.region)}, ${escapeHtml(p.availability)}</p></div>
    <button class="close" type="button" data-action="close" aria-label="Close profile">&times;</button>
  </div>
  <div class="modal-body">
    <div>
      <div class="block"><h4>${p.type === "clinic" ? "Clinic profile" : "Clinician profile"}</h4><p>${escapeHtml(p.bio)}</p><p style="margin-top:10px">${escapeHtml(p.approach)}</p></div>
      <div class="block" style="margin-top:14px"><h4>${p.type === "clinic" ? "Verification and background" : "Studies and credentials"}</h4><ul>${p.education.map(x => `<li>${escapeHtml(x)}</li>`).join("")}</ul></div>
      <div class="block" style="margin-top:14px"><h4>Experience</h4><ul>${p.experienceList.map(x => `<li>${escapeHtml(x)}</li>`).join("")}</ul></div>
      ${p.team && p.team.length ? `<div class="block" style="margin-top:14px"><h4>Clinic team</h4><ul>${p.team.map(x => `<li>${escapeHtml(x)}</li>`).join("")}</ul></div>` : ""}
    </div>
    <div>
      <div class="block"><h4>Specialties</h4><div class="chips">${p.specialties.map(x => `<span class="chip">${escapeHtml(x)}</span>`).join("")}</div></div>
      <div class="block" style="margin-top:14px"><h4>Services</h4><ul>${p.services.map(x => `<li>${escapeHtml(x)}</li>`).join("")}</ul></div>
      <div class="block calendly-box" style="margin-top:14px"><h4>Availability</h4><p>Request details first so BrainFX can follow up before booking.</p><div class="slot"><span>Next available</span><strong>${escapeHtml(p.availability)}</strong></div><div class="slot"><span>Session</span><strong>60 min</strong></div><button class="btn green" type="button" data-action="book" data-id="${p.id}" style="margin-top:14px;width:100%">Open Calendly</button></div>
    </div>
  </div>
  <div class="modal-actions"><button class="btn ghost" type="button" data-action="close">Close</button><button class="btn green" type="button" data-action="book" data-id="${p.id}">Book ${p.type === "clinic" ? "Clinic" : "Clinician"}</button></div>`;
}
function openProfile(id){
  const p = directoryProfiles.find(item => item.id === id);
  if(!p || !$("#profileContent") || !$("#profileModal")) return;
  $("#profileContent").innerHTML = profileModalMarkup(p);
  $("#profileModal").classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeProfile(){
  $("#profileModal")?.classList.remove("open");
  document.body.style.overflow = "";
}
function readLeads(){
  try { return JSON.parse(localStorage.getItem(leadStoreKey) || "[]"); }
  catch (error) { return []; }
}
function writeLeads(leads){
  localStorage.setItem(leadStoreKey, JSON.stringify(leads));
}
function submitNetlifyLead(lead){
  if(!document.querySelector('form[name="brainfx-lead"]')) return;
  const payload = new URLSearchParams();
  payload.set("form-name", "brainfx-lead");
  Object.entries({
    id:lead.id, createdAt:lead.createdAt, status:lead.status, priority:lead.priority, patientName:lead.patientName,
    email:lead.email, phone:lead.phone, need:lead.need, message:lead.message, source:lead.source, profileName:lead.profileName,
    profileType:lead.profileType, profileRole:lead.profileRole, location:lead.location, availability:lead.availability, calendly:lead.calendly
  }).forEach(([key, value]) => payload.set(key, value || ""));
  fetch("/", {method:"POST", headers:{"Content-Type":"application/x-www-form-urlencoded"}, body:payload.toString()}).catch(() => {});
}
function leadId(){
  return `BFX-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2,6).toUpperCase()}`;
}
function isValidEmail(value){
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || "").trim());
}
function ensureLeadModal(){
  if($("#leadModal")) return;
  document.body.insertAdjacentHTML("beforeend", `<div class="modal lead-modal" id="leadModal">
    <div class="modal-scrim" data-action="lead-close"></div>
    <div class="modal-card lead-card"><div id="leadContent"></div></div>
  </div>`);
}
function leadModalMarkup(p){
  return `<form id="leadForm">
    <div class="modal-head">
      <div class="avatar">${escapeHtml(p.initials)}</div>
      <div><div class="badge">${badgeText(p)}</div><h3>Request booking</h3><p>${escapeHtml(p.name)}, ${escapeHtml(p.availability)}</p></div>
      <button class="close" type="button" data-action="lead-close" aria-label="Close booking form">&times;</button>
    </div>
    <div class="lead-body">
      <div class="lead-profile"><div class="avatar" style="width:48px;height:48px;border-radius:14px;font-size:14px">${escapeHtml(p.initials)}</div><div><strong>${escapeHtml(p.name)}</strong><span>${escapeHtml(p.role)}, ${escapeHtml(p.city)}, ${escapeHtml(p.region)}</span></div></div>
      <p class="lead-note">Send your details so BrainFX can follow up. Calendly will open after the lead is captured.</p>
      <div class="lead-error" id="leadError">Please enter your name and a valid email.</div>
      <div class="lead-grid">
        <div class="field"><label for="leadName">Name</label><input id="leadName" name="name" autocomplete="name" required></div>
        <div class="field"><label for="leadEmail">Email</label><input id="leadEmail" name="email" type="email" autocomplete="email" required></div>
      </div>
      <div class="lead-grid">
        <div class="field"><label for="leadPhone">Phone</label><input id="leadPhone" name="phone" autocomplete="tel"></div>
        <div class="field"><label for="leadNeed">Primary need</label><select id="leadNeed" name="need"><option>Assessment</option><option>Concussion</option><option>Stroke</option><option>ABI</option><option>Dementia</option><option>Clinic referral</option></select></div>
      </div>
      <div class="field"><label for="leadMessage">Notes</label><textarea id="leadMessage" name="message" placeholder="Share timing, city, referral details, or care needs."></textarea></div>
    </div>
    <div class="modal-actions"><button class="btn ghost" type="button" data-action="lead-close">Cancel</button><button class="btn green" type="submit">Save lead and open Calendly</button></div>
  </form>`;
}
function openLeadCapture(id){
  const p = directoryProfiles.find(item => item.id === id);
  if(!p) return;
  ensureLeadModal();
  activeLeadProfileId = id;
  closeProfile();
  $("#leadContent").innerHTML = leadModalMarkup(p);
  $("#leadModal").classList.add("open");
  document.body.style.overflow = "hidden";
  setTimeout(() => $("#leadName")?.focus(), 30);
}
function closeLeadCapture(){
  $("#leadModal")?.classList.remove("open");
  activeLeadProfileId = "";
  document.body.style.overflow = "";
}
function saveLeadFromForm(form){
  const p = directoryProfiles.find(item => item.id === activeLeadProfileId);
  if(!p) return false;
  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();
  const email = String(data.get("email") || "").trim();
  if(!name || !isValidEmail(email)){
    $("#leadError")?.classList.add("show");
    return false;
  }
  const lead = {
    id:leadId(),
    createdAt:new Date().toISOString(),
    status:"New",
    priority:/available/i.test(p.availability) ? "High" : "Normal",
    patientName:name,
    email,
    phone:String(data.get("phone") || "").trim(),
    need:String(data.get("need") || "").trim(),
    message:String(data.get("message") || "").trim(),
    source:document.title || "BrainFX directory",
    profileId:p.id,
    profileName:p.name,
    profileType:p.type,
    profileRole:p.role,
    location:`${p.city}, ${p.region}`,
    availability:p.availability,
    calendly:p.calendly,
    activity:[`${new Date().toLocaleString()} Lead captured from ${document.title || "directory"}`]
  };
  const leads = readLeads();
  leads.unshift(lead);
  writeLeads(leads);
  submitNetlifyLead(lead);
  showToast("Lead saved to private admin");
  closeLeadCapture();
  if(p.calendly) window.open(p.calendly, "_blank", "noopener,noreferrer");
  return true;
}
function showToast(message){
  const toast = $("#toast");
  if(!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2600);
}
function setFilter(filterValue){
  activeFilter = filterValue || "All";
  $$("[data-filter]").forEach(btn => btn.classList.toggle("on", btn.dataset.filter === activeFilter));
  render();
}
function setQuery(value, source){
  query = value || "";
  $$("[data-search]").forEach(input => { if(input !== source) input.value = query; });
  render();
}

document.addEventListener("click", event => {
  const action = event.target.closest("[data-action]");
  if(action){
    const id = action.dataset.id;
    if(action.dataset.action === "profile") openProfile(id);
    if(action.dataset.action === "book") openLeadCapture(id);
    if(action.dataset.action === "close") closeProfile();
    if(action.dataset.action === "lead-close") closeLeadCapture();
  }
  if(event.target.classList.contains("modal-scrim")){
    closeLeadCapture();
    closeProfile();
  }
  const filter = event.target.closest("[data-filter]");
  if(filter) setFilter(filter.dataset.filter);
});
document.addEventListener("input", event => {
  if(event.target.matches("[data-search]")) setQuery(event.target.value, event.target);
});
document.addEventListener("keydown", event => {
  if(event.key === "Escape"){
    closeLeadCapture();
    closeProfile();
  }
});
document.addEventListener("submit", event => {
  if(event.target.matches("#leadForm")){
    event.preventDefault();
    saveLeadFromForm(event.target);
  }
});
$("#resetSearch")?.addEventListener("click", () => {
  setQuery("");
  setFilter("All");
  $$("[data-search]").forEach(input => input.value = "");
});
$$("[data-search]").forEach(input => { input.value = query; });
$$("[data-filter]").forEach(btn => btn.classList.toggle("on", btn.dataset.filter === activeFilter));
render();
window.addEventListener("resize", () => {
  leafletState.forEach(state => state.map.invalidateSize());
});
