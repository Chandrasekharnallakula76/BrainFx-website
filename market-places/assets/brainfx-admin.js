const adminPasscode = "brainfx-owner";
const adminSessionKey = "brainfxOwnerAdminSession";
const adminLeadKey = "brainfxOwnerLeads";
const adminSettingsKey = "brainfxOwnerSettings";
let adminLeads = [];
let adminProfiles = [];
let selectedLeadId = "";
let selectedProfileId = "";
let activeStatusFilter = "All";
let activeProfileFilter = "All";
let activeSearch = "";

const admin$ = selector => document.querySelector(selector);
const admin$$ = selector => Array.from(document.querySelectorAll(selector));

function adminEscape(value){
  return String(value ?? "").replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
}
function toList(value){
  if(Array.isArray(value)) return value.filter(Boolean);
  return String(value || "").split(",").map(item => item.trim()).filter(Boolean);
}
function readAdminLeads(){
  try { return JSON.parse(localStorage.getItem(adminLeadKey) || "[]"); }
  catch (error) { return []; }
}
function writeAdminLeads(){
  localStorage.setItem(adminLeadKey, JSON.stringify(adminLeads));
}
function readAdminProfiles(){
  return window.brainfxProfileStore ? window.brainfxProfileStore.read() : (window.directoryProfiles || []);
}
function writeAdminProfiles(){
  if(window.brainfxProfileStore) {
    window.brainfxProfileStore.write(adminProfiles);
    window.brainfxProfileStore.refreshPublic();
  }
}
function readSettings(){
  const defaults = {
    routingEmail:"",
    routingMode:"Manual assignment",
    defaultCalendly:"https://calendly.com/brainfx/intake",
    bookingWindow:"Available this week",
    notifyEmail:"",
    notifyLeads:true,
    notifyProfiles:true,
    showOnlyPublished:true
  };
  try { return {...defaults, ...JSON.parse(localStorage.getItem(adminSettingsKey) || "{}")}; }
  catch (error) { return defaults; }
}
function writeSettings(settings){
  localStorage.setItem(adminSettingsKey, JSON.stringify(settings));
}
function showAdminToast(message){
  const toast = admin$("#adminToast");
  if(!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showAdminToast.timer);
  showAdminToast.timer = setTimeout(() => toast.classList.remove("show"), 2400);
}
function unlockAdmin(){
  admin$("#loginGate").classList.add("hidden");
  admin$("#adminShell").classList.remove("locked");
  document.body.classList.add("admin-open");
  adminLeads = readAdminLeads();
  adminProfiles = readAdminProfiles();
  selectedLeadId = adminLeads[0]?.id || "";
  selectedProfileId = adminProfiles[0]?.id || "";
  loadSettingsForm();
  renderAdmin();
}
function lockAdmin(){
  localStorage.removeItem(adminSessionKey);
  admin$("#loginGate").classList.remove("hidden");
  admin$("#adminShell").classList.add("locked");
  document.body.classList.remove("admin-open");
  admin$("#ownerPasscode").value = "";
}
function filteredAdminLeads(){
  const q = activeSearch.trim().toLowerCase();
  return adminLeads.filter(lead => {
    const statusOk = activeStatusFilter === "All" || lead.status === activeStatusFilter;
    const text = [lead.patientName,lead.email,lead.phone,lead.need,lead.message,lead.profileName,lead.profileRole,lead.location,lead.status,lead.priority,lead.assignedTo].join(" ").toLowerCase();
    return statusOk && (!q || text.includes(q));
  });
}
function filteredAdminProfiles(){
  if(activeProfileFilter === "All") return adminProfiles;
  return adminProfiles.filter(profile => profile.type === activeProfileFilter);
}
function statusPill(status){
  const cls = status === "Booked" ? "blue" : status === "Closed" ? "gray" : "";
  return `<span class="pill ${cls}">${adminEscape(status)}</span>`;
}
function leadRow(lead){
  return `<button class="lead-row ${lead.id === selectedLeadId ? "active" : ""}" type="button" data-lead="${adminEscape(lead.id)}">
    <div class="lead-row-top"><strong>${adminEscape(lead.patientName)}</strong>${statusPill(lead.status)}</div>
    <p>${adminEscape(lead.need || "Care request")}, ${adminEscape(lead.profileName || "Unassigned")}</p>
    <p>${new Date(lead.createdAt).toLocaleString()}</p>
  </button>`;
}
function renderLeadList(){
  const list = filteredAdminLeads();
  const target = admin$("#leadList");
  target.innerHTML = list.length ? list.map(leadRow).join("") : `<div class="detail-empty"><div><strong>No leads found</strong><p>Captured leads will appear here.</p></div></div>`;
  if(list.length && !list.some(lead => lead.id === selectedLeadId)){
    selectedLeadId = list[0].id;
  }
}
function detailCard(label, value){
  return `<div class="detail-card"><span>${adminEscape(label)}</span><strong>${adminEscape(value || "Not provided")}</strong></div>`;
}
function profileOptions(selectedId){
  return `<option value="">Choose profile</option>${adminProfiles.map(profile => `<option value="${adminEscape(profile.id)}" ${profile.id === selectedId ? "selected" : ""}>${adminEscape(profile.name)} (${adminEscape(profile.type)})</option>`).join("")}`;
}
function renderLeadDetail(){
  const lead = adminLeads.find(item => item.id === selectedLeadId);
  const target = admin$("#leadDetail");
  if(!lead){
    target.innerHTML = `<div class="detail-empty"><div><strong>Select a lead</strong><p>Lead details, contact information, and actions show here.</p></div></div>`;
    return;
  }
  const statuses = ["New","Contacted","Booked","Closed"];
  const settings = readSettings();
  const calendly = lead.calendly || settings.defaultCalendly || "";
  target.innerHTML = `<div class="detail-head">
    <div>
      <h3>${adminEscape(lead.patientName)}</h3>
      <div class="detail-meta">${statusPill(lead.status)}<span class="pill">${adminEscape(lead.priority || "Normal")}</span><span class="pill gray">${adminEscape(lead.id)}</span></div>
    </div>
    <div class="detail-actions">${statuses.map(status => `<button class="status-btn ${lead.status === status ? "active" : ""}" type="button" data-status="${status}">${status}</button>`).join("")}</div>
  </div>
  <div class="assign-card">
    <div>
      <h4>Assign lead</h4>
      <p>Choose a clinician or clinic and apply it to this request.</p>
    </div>
    <select id="assignLeadProfile">${profileOptions(lead.profileId)}</select>
    <button class="btn" type="button" data-assign-lead>Assign Lead</button>
    <button class="btn danger-btn" type="button" data-delete-lead>Delete Lead</button>
  </div>
  <div class="detail-grid">
    ${detailCard("Email", lead.email)}
    ${detailCard("Phone", lead.phone)}
    ${detailCard("Need", lead.need)}
    ${detailCard("Requested profile", lead.profileName)}
    ${detailCard("Profile type", lead.profileType)}
    ${detailCard("Location", lead.location)}
    ${detailCard("Availability", lead.availability)}
    ${detailCard("Source", lead.source)}
  </div>
  <div class="notes"><h4>Lead notes</h4><textarea id="leadNotes">${adminEscape(lead.message || "")}</textarea><button class="btn ghost" type="button" data-save-notes>Save notes</button></div>
  <div class="detail-actions" style="margin-top:14px">
    <a class="btn green" href="${adminEscape(calendly)}" target="_blank" rel="noreferrer">Open Calendly</a>
    <a class="btn ghost" href="mailto:${encodeURIComponent(lead.email || "")}?subject=${encodeURIComponent("BrainFX booking follow up")}">Email lead</a>
  </div>`;
}
function renderKpis(){
  admin$("#totalLeads").textContent = adminLeads.length;
  admin$("#newLeads").textContent = adminLeads.filter(l => l.status === "New").length;
  admin$("#highLeads").textContent = adminLeads.filter(l => l.priority === "High").length;
  admin$("#bookedLeads").textContent = adminLeads.filter(l => l.status === "Booked").length;
}
function renderCommandBoard(){
  const statuses = ["New","Contacted","Booked","Closed"];
  admin$("#commandBoard").innerHTML = statuses.map(status => `<div class="pipe-col">
    <h3>${status} (${adminLeads.filter(l => l.status === status).length})</h3>
    ${adminLeads.filter(l => l.status === status).map(lead => `<button class="pipe-card" type="button" data-lead="${adminEscape(lead.id)}"><strong>${adminEscape(lead.patientName)}</strong><p>${adminEscape(lead.profileName)} ${lead.need ? ", " + adminEscape(lead.need) : ""}</p></button>`).join("") || `<p style="color:#667085;font-size:13px">No leads</p>`}
  </div>`).join("");
}
function profileCard(profile){
  return `<article class="admin-profile ${profile.id === selectedProfileId ? "active" : ""}" data-profile="${adminEscape(profile.id)}">
    <div class="admin-profile-top"><span class="pill ${profile.published === false ? "gray" : ""}">${profile.published === false ? "Hidden" : "Published"}</span><span class="pill">${adminEscape(profile.type)}</span></div>
    <h3>${adminEscape(profile.name)}</h3>
    <p>${adminEscape(profile.role)}, ${adminEscape(profile.city)}, ${adminEscape(profile.region)}</p>
    <p><strong>${adminEscape(profile.availability)}</strong></p>
    <button class="btn ghost" type="button" data-edit-profile="${adminEscape(profile.id)}">Edit</button>
  </article>`;
}
function renderProfiles(){
  const target = admin$("#profileAdminGrid");
  const profiles = filteredAdminProfiles();
  target.innerHTML = profiles.length ? profiles.map(profileCard).join("") : `<div class="detail-empty"><div><strong>No profiles found</strong><p>Switch filters to see more profiles.</p></div></div>`;
  if(profiles.length && !profiles.some(profile => profile.id === selectedProfileId)){
    selectedProfileId = profiles[0].id;
  }
  renderProfileEditor();
}
function renderProfileEditor(){
  const profile = adminProfiles.find(item => item.id === selectedProfileId);
  const editor = admin$("#profileEditor");
  if(!profile){
    editor.innerHTML = `<div class="detail-empty"><div><strong>Select a profile</strong><p>Edit clinicians and clinics from here.</p></div></div>`;
    return;
  }
  editor.innerHTML = `<input type="hidden" name="id" value="${adminEscape(profile.id)}">
    <div class="editor-head">
      <div><h3>Edit profile</h3><p>${adminEscape(profile.name)}</p></div>
      <label class="check-row publish-toggle"><input name="published" type="checkbox" ${profile.published === false ? "" : "checked"}> Published</label>
    </div>
    <div class="editor-grid">
      <label>Display name<input name="name" value="${adminEscape(profile.name)}" required></label>
      <label>Type<select name="type"><option value="clinician" ${profile.type === "clinician" ? "selected" : ""}>Clinician</option><option value="clinic" ${profile.type === "clinic" ? "selected" : ""}>Clinic</option></select></label>
      <label>Role or clinic type<input name="role" value="${adminEscape(profile.role)}" required></label>
      <label>Initials<input name="initials" value="${adminEscape(profile.initials)}"></label>
      <label>City<input name="city" value="${adminEscape(profile.city)}" required></label>
      <label>Region<input name="region" value="${adminEscape(profile.region)}" required></label>
      <label>Latitude<input name="lat" type="number" step="0.0001" value="${adminEscape(profile.lat)}"></label>
      <label>Longitude<input name="lng" type="number" step="0.0001" value="${adminEscape(profile.lng)}"></label>
      <label>Availability<input name="availability" value="${adminEscape(profile.availability)}" required></label>
      <label>Calendly<input name="calendly" type="url" value="${adminEscape(profile.calendly)}"></label>
      <label>Rating<input name="rating" value="${adminEscape(profile.rating)}"></label>
      <label>Experience<input name="experience" value="${adminEscape(profile.experience)}"></label>
      <label class="wide">Verification<input name="verified" value="${adminEscape(profile.verified)}"></label>
      <label class="wide">Specialties<textarea name="specialties">${adminEscape(toList(profile.specialties).join(", "))}</textarea></label>
      <label class="wide">Languages<textarea name="languages">${adminEscape(toList(profile.languages).join(", "))}</textarea></label>
      <label class="wide">Services<textarea name="services">${adminEscape(toList(profile.services).join(", "))}</textarea></label>
      <label class="wide">Studies and credentials<textarea name="education">${adminEscape(toList(profile.education).join(", "))}</textarea></label>
      <label class="wide">Experience details<textarea name="experienceList">${adminEscape(toList(profile.experienceList).join(", "))}</textarea></label>
      <label class="wide">Profile bio<textarea name="bio">${adminEscape(profile.bio)}</textarea></label>
      <label class="wide">Approach<textarea name="approach">${adminEscape(profile.approach)}</textarea></label>
    </div>
    <div class="editor-actions">
      <button class="btn green" type="submit">Save profile</button>
      <button class="btn ghost" type="button" data-publish-profile>${profile.published === false ? "Publish" : "Hide"}</button>
    </div>`;
}
function renderAdmin(){
  renderKpis();
  renderLeadList();
  renderLeadDetail();
  renderCommandBoard();
  renderProfiles();
}
function updateLeadStatus(status){
  const lead = adminLeads.find(item => item.id === selectedLeadId);
  if(!lead) return;
  lead.status = status;
  lead.activity = lead.activity || [];
  lead.activity.unshift(`${new Date().toLocaleString()} Status changed to ${status}`);
  writeAdminLeads();
  renderAdmin();
  showAdminToast(`Lead marked ${status}`);
}
function assignSelectedLead(){
  const lead = adminLeads.find(item => item.id === selectedLeadId);
  const profileId = admin$("#assignLeadProfile")?.value;
  const profile = adminProfiles.find(item => item.id === profileId);
  if(!lead || !profile) {
    showAdminToast("Choose a profile to assign");
    return;
  }
  lead.profileId = profile.id;
  lead.profileName = profile.name;
  lead.profileType = profile.type;
  lead.profileRole = profile.role;
  lead.location = `${profile.city}, ${profile.region}`;
  lead.availability = profile.availability;
  lead.calendly = profile.calendly;
  lead.assignedTo = profile.name;
  lead.activity = lead.activity || [];
  lead.activity.unshift(`${new Date().toLocaleString()} Assigned to ${profile.name}`);
  writeAdminLeads();
  renderAdmin();
  showAdminToast("Lead assigned");
}
function deleteSelectedLead(){
  const lead = adminLeads.find(item => item.id === selectedLeadId);
  if(!lead) return;
  if(!confirm(`Delete lead for ${lead.patientName}?`)) return;
  adminLeads = adminLeads.filter(item => item.id !== selectedLeadId);
  selectedLeadId = adminLeads[0]?.id || "";
  writeAdminLeads();
  renderAdmin();
  showAdminToast("Lead deleted");
}
function saveLeadNotes(){
  const lead = adminLeads.find(item => item.id === selectedLeadId);
  if(!lead) return;
  lead.message = admin$("#leadNotes")?.value || "";
  lead.activity = lead.activity || [];
  lead.activity.unshift(`${new Date().toLocaleString()} Notes updated`);
  writeAdminLeads();
  renderAdmin();
  showAdminToast("Notes saved");
}
function saveProfile(form){
  const data = new FormData(form);
  const id = String(data.get("id") || "");
  const index = adminProfiles.findIndex(profile => profile.id === id);
  if(index < 0) return;
  adminProfiles[index] = {
    ...adminProfiles[index],
    name:String(data.get("name") || "").trim(),
    type:String(data.get("type") || "clinician"),
    role:String(data.get("role") || "").trim(),
    initials:String(data.get("initials") || "").trim(),
    city:String(data.get("city") || "").trim(),
    region:String(data.get("region") || "").trim(),
    lat:Number(data.get("lat") || adminProfiles[index].lat),
    lng:Number(data.get("lng") || adminProfiles[index].lng),
    availability:String(data.get("availability") || "").trim(),
    calendly:String(data.get("calendly") || "").trim(),
    rating:String(data.get("rating") || "4.8").trim(),
    experience:String(data.get("experience") || "").trim(),
    verified:String(data.get("verified") || "").trim(),
    specialties:toList(data.get("specialties")),
    languages:toList(data.get("languages")),
    services:toList(data.get("services")),
    education:toList(data.get("education")),
    experienceList:toList(data.get("experienceList")),
    bio:String(data.get("bio") || "").trim(),
    approach:String(data.get("approach") || "").trim(),
    published:Boolean(data.get("published"))
  };
  writeAdminProfiles();
  renderAdmin();
  showAdminToast("Profile saved");
}
function toggleSelectedProfile(){
  const profile = adminProfiles.find(item => item.id === selectedProfileId);
  if(!profile) return;
  profile.published = profile.published === false;
  writeAdminProfiles();
  renderAdmin();
  showAdminToast(profile.published ? "Profile published" : "Profile hidden");
}
function loadSettingsForm(){
  const settings = readSettings();
  const form = admin$("#settingsForm");
  if(!form) return;
  Object.entries(settings).forEach(([key, value]) => {
    const field = form.elements[key];
    if(!field) return;
    if(field.type === "checkbox") field.checked = Boolean(value);
    else field.value = value;
  });
}
function saveSettings(form){
  const data = new FormData(form);
  const settings = {
    routingEmail:String(data.get("routingEmail") || "").trim(),
    routingMode:String(data.get("routingMode") || "Manual assignment"),
    defaultCalendly:String(data.get("defaultCalendly") || "").trim(),
    bookingWindow:String(data.get("bookingWindow") || "Available this week"),
    notifyEmail:String(data.get("notifyEmail") || "").trim(),
    notifyLeads:Boolean(data.get("notifyLeads")),
    notifyProfiles:Boolean(data.get("notifyProfiles")),
    showOnlyPublished:Boolean(data.get("showOnlyPublished"))
  };
  writeSettings(settings);
  showAdminToast("Settings saved");
}
function exportCsv(){
  const rows = [["Lead ID","Created","Status","Priority","Name","Email","Phone","Need","Profile","Location","Message"]];
  adminLeads.forEach(lead => rows.push([lead.id,lead.createdAt,lead.status,lead.priority,lead.patientName,lead.email,lead.phone,lead.need,lead.profileName,lead.location,lead.message]));
  const csv = rows.map(row => row.map(cell => `"${String(cell ?? "").replace(/"/g,'""')}"`).join(",")).join("\n");
  const blob = new Blob([csv], {type:"text/csv"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `brainfx-leads-${new Date().toISOString().slice(0,10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}
function openView(view, button){
  admin$$(".side-link").forEach(btn => btn.classList.toggle("active", btn === button));
  admin$$(".view").forEach(panel => panel.classList.toggle("active", panel.id === `view${view[0].toUpperCase()}${view.slice(1)}`));
}

admin$("#loginForm").addEventListener("submit", event => {
  event.preventDefault();
  if(admin$("#ownerPasscode").value === adminPasscode){
    localStorage.setItem(adminSessionKey, "open");
    admin$("#loginError").classList.remove("show");
    unlockAdmin();
  } else {
    admin$("#loginError").classList.add("show");
  }
});
admin$("#logoutBtn").addEventListener("click", lockAdmin);
admin$("#exportBtn").addEventListener("click", exportCsv);
admin$("#clearBtn").addEventListener("click", () => {
  if(!confirm("Clear all saved leads?")) return;
  adminLeads = [];
  selectedLeadId = "";
  writeAdminLeads();
  renderAdmin();
  showAdminToast("Leads cleared");
});
admin$("#resetProfilesBtn").addEventListener("click", () => {
  if(!confirm("Reset directory profiles to the original version?")) return;
  window.brainfxProfileStore?.reset();
  adminProfiles = readAdminProfiles();
  selectedProfileId = adminProfiles[0]?.id || "";
  renderAdmin();
  showAdminToast("Directory reset");
});
admin$("#leadSearch").addEventListener("input", event => {
  activeSearch = event.target.value;
  renderAdmin();
});
admin$("#statusFilter").addEventListener("change", event => {
  activeStatusFilter = event.target.value;
  renderAdmin();
});
admin$("#profileEditor").addEventListener("submit", event => {
  event.preventDefault();
  saveProfile(event.target);
});
admin$("#settingsForm").addEventListener("submit", event => {
  event.preventDefault();
  saveSettings(event.target);
});
document.addEventListener("click", event => {
  const row = event.target.closest("[data-lead]");
  if(row){
    selectedLeadId = row.dataset.lead;
    renderAdmin();
  }
  const status = event.target.closest("[data-status]");
  if(status) updateLeadStatus(status.dataset.status);
  const side = event.target.closest("[data-view]");
  if(side) openView(side.dataset.view, side);
  const assign = event.target.closest("[data-assign-lead]");
  if(assign) assignSelectedLead();
  const deleteLead = event.target.closest("[data-delete-lead]");
  if(deleteLead) deleteSelectedLead();
  const saveNotes = event.target.closest("[data-save-notes]");
  if(saveNotes) saveLeadNotes();
  const profile = event.target.closest("[data-profile], [data-edit-profile]");
  if(profile){
    selectedProfileId = profile.dataset.profile || profile.dataset.editProfile;
    renderProfiles();
  }
  const profileFilter = event.target.closest("[data-profile-filter]");
  if(profileFilter){
    activeProfileFilter = profileFilter.dataset.profileFilter;
    admin$$("[data-profile-filter]").forEach(btn => btn.classList.toggle("active", btn === profileFilter));
    renderProfiles();
  }
  const publishProfile = event.target.closest("[data-publish-profile]");
  if(publishProfile) toggleSelectedProfile();
});

if(localStorage.getItem(adminSessionKey) === "open"){
  unlockAdmin();
}
