"use client";

import { useEffect, useMemo, useState } from "react";
import { FaBuilding, FaCheck, FaPhoneAlt, FaRegCalendarAlt, FaSave, FaSignOutAlt, FaUserTie, FaSearch, FaSync, FaWhatsapp } from "react-icons/fa";
import { ConfigNotice } from "./GoogleAdsSite";
import { isSupabaseConfigured, supabase } from "../lib/supabase";

const initialForm = {
  leadType: "client",
  name: "",
  phone: "",
  company: "",
  source: "Meeting",
  services: ["Google Ads"],
  requirement: "",
  notes: "",
  followUpDate: "",
};

const clientServices = ["Google Ads", "Social Media", "WhatsApp API", "Website", "SEO", "Meta Ads", "AI Video", "GMB"];
const supplierServices = ["GMB", "AI Video", "Website", "WhatsApp API", "Social Media", "SEO", "Design", "Development"];
const sources = ["Meeting", "Instagram", "WhatsApp", "Call", "Referral", "Website", "Other"];
const getWhatsappLink = (phone) => {
  const cleaned = String(phone || "").replace(/\D/g, "");
  if (cleaned.length === 10) {
    return `https://wa.me/91${cleaned}`;
  }
  return `https://wa.me/${cleaned}`;
};

export default function LeadsPage() {
  const [session, setSession] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [form, setForm] = useState(initialForm);
  const [message, setMessage] = useState("");
  const [authMessage, setAuthMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState(null);

  // New Dashboard States
  const [view, setView] = useState("capture"); // "capture" or "list"
  const [leadsData, setLeadsData] = useState({ clients: [], suppliers: [] });
  const [leadsLoading, setLeadsLoading] = useState(false);
  const [leadsError, setLeadsError] = useState("");
  const [leadsSearch, setLeadsSearch] = useState("");
  const [leadsFilterType, setLeadsFilterType] = useState("clients"); // "clients" or "suppliers"

  const serviceOptions = useMemo(
    () => (form.leadType === "supplier" ? supplierServices : clientServices),
    [form.leadType]
  );

  useEffect(() => {
    if (!isSupabaseConfigured) return;

    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setLoading(false);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession);
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  const fetchLeads = async () => {
    setLeadsLoading(true);
    setLeadsError("");
    try {
      const response = await fetch("/api/leads", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${session?.access_token || ""}`,
        },
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to load leads.");
      }
      setLeadsData({
        clients: data.clients || [],
        suppliers: data.suppliers || [],
      });
    } catch (err) {
      setLeadsError(err.message);
    } finally {
      setLeadsLoading(false);
    }
  };

  useEffect(() => {
    if (session && view === "list") {
      fetchLeads();
    }
  }, [session, view]);

  const filteredLeads = useMemo(() => {
    const list = leadsFilterType === "suppliers" ? leadsData.suppliers : leadsData.clients;
    if (!leadsSearch.trim()) return list;
    const query = leadsSearch.toLowerCase();
    return list.filter((lead) => {
      const name = String(lead.name || "").toLowerCase();
      const phone = String(lead.phone || "").toLowerCase();
      const company = String(lead.company || "").toLowerCase();
      const services = String(lead.servicesText || lead.services || "").toLowerCase();
      const notes = String(lead.notes || "").toLowerCase();
      const requirement = String(lead.requirement || "").toLowerCase();
      return (
        name.includes(query) ||
        phone.includes(query) ||
        company.includes(query) ||
        services.includes(query) ||
        notes.includes(query) ||
        requirement.includes(query)
      );
    });
  }, [leadsData, leadsFilterType, leadsSearch]);

  const handleLogin = async (event) => {
    event.preventDefault();
    setAuthMessage("Signing in...");
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setAuthMessage(error ? error.message : "");
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setLastSaved(null);
    setLeadsData({ clients: [], suppliers: [] });
  };

  const updateField = (field, value) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const changeLeadType = (leadType) => {
    const defaultService = leadType === "supplier" ? "GMB" : "Google Ads";
    setForm((current) => ({
      ...current,
      leadType,
      source: leadType === "supplier" ? "Instagram" : "Meeting",
      services: [defaultService],
    }));
    setMessage("");
  };

  const toggleService = (service) => {
    setForm((current) => {
      const exists = current.services.includes(service);
      return {
        ...current,
        services: exists
          ? current.services.filter((item) => item !== service)
          : [...current.services, service],
      };
    });
  };

  const resetForm = () => {
    setForm((current) => ({
      ...initialForm,
      leadType: current.leadType,
      source: current.leadType === "supplier" ? "Instagram" : "Meeting",
      services: [current.leadType === "supplier" ? "GMB" : "Google Ads"],
    }));
  };

  const saveLead = async (event) => {
    event.preventDefault();
    setIsSaving(true);
    setMessage("Saving lead...");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.access_token || ""}`,
        },
        body: JSON.stringify(form),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Could not save lead.");
      }

      setLastSaved({
        name: form.name,
        phone: form.phone,
        leadType: form.leadType,
        services: form.services.join(", "),
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      });
      setMessage("Saved to Google Sheet.");
      resetForm();
    } catch (error) {
      setMessage(error.message);
    } finally {
      setIsSaving(false);
    }
  };

  if (!isSupabaseConfigured) return <ConfigNotice />;

  if (loading) {
    return (
      <main className="leads-page leads-page--center">
        <section className="leads-auth">
          <p className="ads-eyebrow">Lead Capture</p>
          <h1>Loading leads...</h1>
        </section>
      </main>
    );
  }

  if (!session) {
    return (
      <main className="leads-page leads-page--center">
        <section className="leads-auth">
          <img src="/clients/logo.png" alt="Yash Deliwala" />
          <p className="ads-eyebrow">Private Lead Capture</p>
          <h1>Login to save leads</h1>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              required
              placeholder="Admin email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              type="password"
              required
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <button type="submit">Login</button>
          </form>
          {authMessage && <p>{authMessage}</p>}
        </section>
      </main>
    );
  }

  return (
    <main className="leads-page">
      <section className="leads-shell">
        <div className="leads-header">
          <div>
            <p className="ads-eyebrow">Lead Capture CRM</p>
            <h1>Clients and Suppliers Lead Management</h1>
          </div>
          <button className="leads-logout" type="button" onClick={handleLogout}>
            <FaSignOutAlt aria-hidden="true" />
            Logout
          </button>
        </div>

        <div className="leads-nav-tabs">
          <button
            type="button"
            className={`leads-nav-tab ${view === "capture" ? "active" : ""}`}
            onClick={() => setView("capture")}
          >
            Capture Lead
          </button>
          <button
            type="button"
            className={`leads-nav-tab ${view === "list" ? "active" : ""}`}
            onClick={() => setView("list")}
          >
            View Dashboard
          </button>
        </div>

        {view === "capture" && (
          <div className="leads-layout">
            <form className="leads-form" onSubmit={saveLead}>
              <div className="lead-type-toggle" role="tablist" aria-label="Lead type">
                <button
                  type="button"
                  className={form.leadType === "client" ? "active" : ""}
                  onClick={() => changeLeadType("client")}
                >
                  <FaUserTie aria-hidden="true" />
                  Client
                </button>
                <button
                  type="button"
                  className={form.leadType === "supplier" ? "active" : ""}
                  onClick={() => changeLeadType("supplier")}
                >
                  <FaBuilding aria-hidden="true" />
                  Supplier
                </button>
              </div>

              <div className="leads-grid">
                <label>
                  Name
                  <input
                    required
                    value={form.name}
                    onChange={(event) => updateField("name", event.target.value)}
                    placeholder="Person name"
                  />
                </label>
                <label>
                  Phone
                  <input
                    required
                    value={form.phone}
                    onChange={(event) => updateField("phone", event.target.value)}
                    placeholder="+91 98765 43210"
                    inputMode="tel"
                  />
                </label>
                <label>
                  Company
                  <input
                    value={form.company}
                    onChange={(event) => updateField("company", event.target.value)}
                    placeholder="Company or page name"
                  />
                </label>
                <label>
                  Source
                  <select value={form.source} onChange={(event) => updateField("source", event.target.value)}>
                    {sources.map((source) => (
                      <option key={source} value={source}>
                        {source}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <fieldset className="service-picker">
                <legend>{form.leadType === "supplier" ? "Supplier services" : "Client requirement"}</legend>
                <div>
                  {serviceOptions.map((service) => (
                    <button
                      type="button"
                      key={service}
                      className={form.services.includes(service) ? "selected" : ""}
                      onClick={() => toggleService(service)}
                    >
                      {form.services.includes(service) && <FaCheck aria-hidden="true" />}
                      {service}
                    </button>
                  ))}
                </div>
              </fieldset>

              <label>
                Requirement
                <textarea
                  rows={4}
                  value={form.requirement}
                  onChange={(event) => updateField("requirement", event.target.value)}
                  placeholder={form.leadType === "supplier" ? "What do they provide, price, city, quality notes..." : "Budget, service need, timeline, discussion details..."}
                />
              </label>

              <label>
                Follow up date
                <input
                  type="date"
                  value={form.followUpDate}
                  onChange={(event) => updateField("followUpDate", event.target.value)}
                />
              </label>

              <label>
                Notes
                <textarea
                  rows={3}
                  value={form.notes}
                  onChange={(event) => updateField("notes", event.target.value)}
                  placeholder="Extra memory, pricing, next step, Instagram handle..."
                />
              </label>

              <div className="leads-actions">
                <button type="submit" disabled={isSaving}>
                  <FaSave aria-hidden="true" />
                  {isSaving ? "Saving..." : "Save Lead"}
                </button>
                <button type="button" onClick={resetForm}>
                  Clear
                </button>
              </div>
              {message && <p className="leads-message">{message}</p>}
            </form>

            <aside className="leads-summary">
              <div>
                <span>
                  <FaPhoneAlt aria-hidden="true" />
                </span>
                <h2>{form.leadType === "supplier" ? "Supplier tab" : "Client tab"}</h2>
                <p>
                  This entry will be sent to the {form.leadType === "supplier" ? "Suppliers" : "Clients"} sheet with service,
                  source, follow up date, and notes.
                </p>
              </div>
              <div>
                <span>
                  <FaRegCalendarAlt aria-hidden="true" />
                </span>
                <h2>Fast follow-up memory</h2>
                <p>Use it right after meetings, calls, WhatsApp chats, or Instagram supplier conversations.</p>
              </div>
              {lastSaved && (
                <div className="last-saved">
                  <p>Last saved</p>
                  <strong>{lastSaved.name}</strong>
                  <span>{lastSaved.phone}</span>
                  <small>
                    {lastSaved.leadType} - {lastSaved.services} - {lastSaved.time}
                  </small>
                </div>
              )}
            </aside>
          </div>
        )}

        {view === "list" && (
          <div className="leads-list-container">
            <div className="leads-list-header">
              <div className="leads-type-filter">
                <button
                  type="button"
                  className={leadsFilterType === "clients" ? "active" : ""}
                  onClick={() => setLeadsFilterType("clients")}
                >
                  Clients ({leadsData.clients.length})
                </button>
                <button
                  type="button"
                  className={leadsFilterType === "suppliers" ? "active" : ""}
                  onClick={() => setLeadsFilterType("suppliers")}
                >
                  Suppliers ({leadsData.suppliers.length})
                </button>
              </div>

              <div className="leads-list-controls">
                <div style={{ position: "relative", display: "inline-block" }}>
                  <FaSearch style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "#64748b" }} />
                  <input
                    type="text"
                    className="leads-search-input"
                    placeholder="Search leads..."
                    value={leadsSearch}
                    onChange={(e) => setLeadsSearch(e.target.value)}
                    style={{ paddingLeft: "34px" }}
                  />
                </div>
                <button
                  type="button"
                  className="leads-refresh-btn"
                  onClick={fetchLeads}
                  disabled={leadsLoading}
                >
                  <FaSync className={leadsLoading ? "animate-spin" : ""} />
                  Refresh
                </button>
              </div>
            </div>

            {leadsLoading && (
              <div className="leads-list-loading">
                <FaSync className="animate-spin" style={{ fontSize: "24px", marginBottom: "12px" }} />
                <p>Loading leads from Google Sheet...</p>
              </div>
            )}

            {leadsError && (
              <div className="leads-list-error">
                <p>Error: {leadsError}</p>
                <button type="button" onClick={fetchLeads} className="leads-refresh-btn">Try Again</button>
              </div>
            )}

            {!leadsLoading && !leadsError && filteredLeads.length === 0 && (
              <div className="leads-list-empty">
                <p>No leads found.</p>
              </div>
            )}

            {!leadsLoading && !leadsError && filteredLeads.length > 0 && (
              <div className="leads-grid-list">
                {filteredLeads.map((lead, idx) => (
                  <div key={idx} className="lead-card">
                    <div className="lead-card-header">
                      <div>
                        <h3>{lead.name}</h3>
                        <p className="lead-card-company">{lead.company || "No Company"}</p>
                      </div>
                      <span className="lead-card-status">{lead.status || "New"}</span>
                    </div>
                    <div className="lead-card-body">
                      <div className="lead-card-info">
                        <div className="lead-phone-row">
                          <strong>Phone: </strong>
                          <a href={`tel:${lead.phone}`} className="lead-phone-link">
                            {lead.phone}
                          </a>
                          <div className="lead-phone-actions">
                            <a
                              href={`tel:${lead.phone}`}
                              className="lead-action-btn lead-action-call"
                              title={`Call ${lead.name}`}
                            >
                              <FaPhoneAlt />
                            </a>
                            <a
                              href={getWhatsappLink(lead.phone)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="lead-action-btn lead-action-whatsapp"
                              title={`WhatsApp ${lead.name}`}
                            >
                              <FaWhatsapp />
                            </a>
                          </div>
                        </div>
                        <div>
                          <strong>Source: </strong>
                          {lead.source || "N/A"}
                        </div>
                        <div>
                          <strong>Follow Up: </strong>
                          {lead.followUpDate ? new Date(lead.followUpDate).toLocaleDateString([], { month: "short", day: "numeric", year: "numeric" }) : "None"}
                        </div>
                        <div>
                          <strong>Submitted: </strong>
                          {lead.submittedAt ? new Date(lead.submittedAt).toLocaleString([], { dateStyle: 'short', timeStyle: 'short' }) : "N/A"}
                        </div>
                      </div>
                      <div className="lead-card-services">
                        {(lead.servicesText || lead.services) ? (lead.servicesText || lead.services).split(", ").map(s => <span key={s} className="service-tag">{s}</span>) : null}
                      </div>
                      {lead.requirement && (
                        <div className="lead-card-text">
                          <strong>Requirement</strong>
                          <p>{lead.requirement}</p>
                        </div>
                      )}
                      {lead.notes && (
                        <div className="lead-card-text lead-card-notes">
                          <strong>Notes</strong>
                          <p>{lead.notes}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </section>
    </main>
  );
}
