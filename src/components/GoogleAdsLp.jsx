"use client";

import { useCallback, useEffect, useState } from "react";
import {
  FaCheckCircle,
  FaGoogle,
  FaLock,
  FaPhoneAlt,
  FaQuestionCircle,
  FaQuoteLeft,
  FaRocket,
  FaSearchDollar,
  FaShieldAlt,
  FaStar,
  FaTools,
  FaUserCheck,
  FaWhatsapp,
} from "react-icons/fa";
import { clients } from "./GoogleAdsSite";
import GoogleAdsDashboards from "./GoogleAdsDashboards";
import { PHONE_NUMBER, WHATSAPP_LINK } from "../lib/site-config";
import { trackConversion } from "../lib/conversions";

// ─── Static Data: module scope so these objects are NEVER recreated on re-render ───
const LP_WHAT_YOU_GET = [
  {
    title: "1-on-1 Paid Consultation (₹1000)",
    description:
      "Direct consultation & strategy session to eliminate wasted ad spend, negative keyword leaks, and bad targeting.",
    icon: <FaSearchDollar className="text-blue-500" />,
  },
  {
    title: "100% Transparent Reporting",
    description:
      "Complete ownership of your ad account and live dashboards. Know exactly where every single rupee is spent.",
    icon: <FaShieldAlt className="text-emerald-500" />,
  },
  {
    title: "Direct Communication",
    description:
      "Work directly with Yash Deliwala. No junior account managers, no middle-men, and fast execution on WhatsApp.",
    icon: <FaUserCheck className="text-indigo-500" />,
  },
  {
    title: "Budget-Friendly for SMBs",
    description:
      "PPC structures built specifically for small & medium Indian businesses to deliver high ROI without bloated retainers.",
    icon: <FaTools className="text-amber-500" />,
  },
];

const LP_PROCESS_STEPS = [
  {
    step: "01",
    title: "Audit & Opportunity",
    description:
      "Review your website, existing campaigns, competitor keywords, and conversion tracking setup.",
  },
  {
    step: "02",
    title: "Strategy & Setup",
    description:
      "Build high-intent Search & PMax campaigns with negative keyword lists, ad copies, and call tracking.",
  },
  {
    step: "03",
    title: "Launch & Scale",
    description:
      "Deploy targeted ads in your city or pan-India and optimize weekly for maximum lead conversions.",
  },
];

const LP_TESTIMONIALS = [
  {
    quote:
      "Yash turned around our Google Ads performance in 3 weeks. Direct updates, zero fluff, and 120+ qualified patient calls monthly.",
    name: "Dr. Aditya",
    role: "Clinic Director, Surat",
  },
  {
    quote:
      "Our lead quality doubled while reducing cost per lead by 35%. Complete transparency and sharp keyword targeting.",
    name: "Rajesh Patel",
    role: "B2B Manufacturing Director",
  },
];

const LP_FAQS = [
  {
    q: "How much does Google Ads management cost?",
    a: "Management starts from ₹15,000 per month with zero hidden agency fees. Your ad spend is paid directly to Google.",
  },
  {
    q: "How fast can I see leads and results?",
    a: "Search Ads start generating phone calls, form enquiries, and WhatsApp leads within 24 to 72 hours of launching.",
  },
  {
    q: "Do I need a large budget to start?",
    a: "No. You can start with a modest budget of ₹15,000 - ₹30,000/month (paid to Google) and scale as your leads grow.",
  },
];

// Helper function to track GA4 / Google Ads conversion events cleanly
function trackConversionEvent(eventName, eventParams = {}) {
  if (typeof window !== "undefined") {
    // 1. GA4 / Google Ads gtag push
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, eventParams);
    }
    // 2. GTM / Custom dataLayer push
    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: eventName,
        ...eventParams,
      });
    }
    console.log(`[Conversion Event Tracked]: ${eventName}`, eventParams);
  }
}

export default function GoogleAdsLp() {
  const [mounted, setMounted] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleFormSubmit = useCallback(async (e) => {
    e.preventDefault();
    setLoading(true);

    // Fire Google Ads & GA4 lead form conversion event
    trackConversion("lead_form");

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setFormSubmitted(true);
      }
    } catch (err) {
      console.error("Form submit error:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleWhatsAppClick = useCallback(() => {
    trackConversion("whatsapp");
  }, []);

  const handleCallClick = useCallback(() => {
    trackConversion("call");
  }, []);

  // Use module-level constants — no new arrays created on re-render
  const whatYouGet = LP_WHAT_YOU_GET;
  const processSteps = LP_PROCESS_STEPS;
  const testimonials = LP_TESTIMONIALS;
  const faqs = LP_FAQS;

  if (!mounted) return null;

  return (
    <div className="lp-site">
      {/* Minimal Header — ZERO Outbound Navigation Links */}
      <header className="lp-header">
        <div className="lp-header-container">
          <div className="lp-brand">
            <img
              src="/clients/logo (2).jpeg"
              alt="Yash Deliwala Google Ads Expert Logo"
              decoding="async"
              width="40"
              height="40"
            />
            <span>Yash Google Ads Expert</span>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="hero" className="lp-hero">
          <div className="lp-hero-grid">
            {/* Left Content */}
            <div className="lp-hero-left">
              <p className="lp-eyebrow">
                <FaGoogle /> Google Ads Agency in India
              </p>

              <h1>Get More Leads with a Google Ads Agency You Can Trust</h1>

              <p className="lp-hero-sub">
                Stop wasting ad budget on empty clicks. Work directly with Yash Deliwala to launch
                high-intent Search & Performance Max campaigns engineered to deliver real phone calls
                and qualified sales enquiries.
              </p>

              <ul className="lp-hero-badges">
                <li>
                  <FaCheckCircle className="text-emerald-500" />
                  <span>₹50L+ Ad Budget Managed Across India</span>
                </li>
                <li>
                  <FaCheckCircle className="text-emerald-500" />
                  <span>100% Transparent Account Ownership & Reports</span>
                </li>
                <li>
                  <FaCheckCircle className="text-emerald-500" />
                  <span>Direct Specialist Support — No Account Managers</span>
                </li>
              </ul>
            </div>

            {/* Right Form */}
            <div className="lp-hero-right">
              <div className="lp-form-card">
                <h3>Book 1-on-1 Consultation (₹1000)</h3>
                <p>Book a dedicated 1-on-1 strategy session to review &amp; fix your Google Ads campaigns.</p>

                {formSubmitted ? (
                  <div className="lp-form-success">
                    <FaCheckCircle className="text-4xl text-emerald-500 mx-auto mb-3" />
                    <h4>Consultation Request Received!</h4>
                    <p>Yash will review your details and connect with you on WhatsApp / phone shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="lp-form">
                    <input
                      type="hidden"
                      name="access_key"
                      value="2c6efe99-dc5c-4acc-b523-656523121182"
                    />
                    <input
                      type="hidden"
                      name="subject"
                      value="New Google Ads Consultation Lead"
                    />

                    <div className="lp-form-group">
                      <label htmlFor="lp-name">Your Name *</label>
                      <input
                        id="lp-name"
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. Rahul Sharma"
                      />
                    </div>

                    <div className="lp-form-group">
                      <label htmlFor="lp-phone">Phone / WhatsApp Number *</label>
                      <input
                        id="lp-phone"
                        type="tel"
                        name="phone"
                        required
                        placeholder="e.g. +91 98765 43210"
                      />
                    </div>

                    <div className="lp-form-group">
                      <label htmlFor="lp-business">Business Type / Industry *</label>
                      <select id="lp-business" name="business_type" required defaultValue="">
                        <option value="" disabled>
                          Select your industry
                        </option>
                        <option value="Healthcare / Clinic / Doctor">Doctor / Clinic / Hospital</option>
                        <option value="B2B Manufacturing / Industrial">B2B Manufacturing / Equipment</option>
                        <option value="Real Estate / Architecture / Interiors">Real Estate / Architect / Interiors</option>
                        <option value="Local Service Business">Local Service Business</option>
                        <option value="E-commerce Store">E-commerce Store</option>
                        <option value="Other">Other Service</option>
                      </select>
                    </div>

                    <div className="lp-form-group">
                      <label htmlFor="lp-budget">Monthly Ad Budget</label>
                      <select id="lp-budget" name="monthly_budget" defaultValue="₹15,000 - ₹35,000">
                        <option value="Under ₹15,000">Under ₹15,000/mo</option>
                        <option value="₹15,000 - ₹35,000">₹15,000 - ₹35,000/mo</option>
                        <option value="₹35,000 - ₹1,00,000">₹35,000 - ₹1,00,000/mo</option>
                        <option value="₹1,00,000+">₹1,00,000+/mo</option>
                      </select>
                    </div>

                    <button type="submit" disabled={loading} className="lp-form-submit">
                      {loading ? "Submitting..." : "Book Consultation (₹1000)"}
                    </button>

                    <div className="lp-form-trust">
                      <FaLock className="text-slate-400" />
                      <span>We respond within 2 hours • No spam, ever</span>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Centered Credibility Line Below Hero */}
          <div className="lp-hero-credibility">
            <img
              src="/clients/yash-deliwala.jpeg"
              alt="Yash Deliwala - Google Ads Agency Specialist"
              fetchPriority="high"
              decoding="async"
              width="70"
              height="70"
            />
            <div>
              <strong>Managed personally by Yash Deliwala</strong>
              <span>No junior account managers • No outsourcing • 100% direct accountability</span>
            </div>
          </div>
        </section>

        {/* Section 1: Trust Strip */}
        <section className="lp-section lp-trust-strip">
          <div className="lp-stats-grid">
            <div className="lp-stat-box">
              <strong>₹50L+</strong>
              <span>Ad Budget Managed</span>
            </div>
            <div className="lp-stat-box">
              <strong>3.8x</strong>
              <span>Average Client ROI</span>
            </div>
            <div className="lp-stat-box">
              <strong>50+</strong>
              <span>Successful Campaigns</span>
            </div>
          </div>

          <div className="lp-logos-wrapper">
            <p className="lp-logos-title">Trusted by businesses across India</p>
            <div className="lp-logos-grid">
              {clients.map((c, idx) => (
                <div key={idx} className="lp-logo-item">
                  <img src={c.image} alt={`${c.name} client logo`} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Real Campaign Performance Results */}
        <GoogleAdsDashboards />

        {/* Section 2: What You Get */}
        <section className="lp-section lp-benefits">
          <div className="lp-section-heading">
            <h2>What You Get When Working With Me</h2>
            <p>Direct Google Ads management engineered for high ROI and clean conversion data.</p>
          </div>

          <div className="lp-benefits-grid">
            {whatYouGet.map((b, idx) => (
              <div key={idx} className="lp-benefit-card">
                <div className="lp-benefit-icon">{b.icon}</div>
                <h3>{b.title}</h3>
                <p>{b.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Dedicated Profile & Personal Credibility Section */}
        <section className="lp-section lp-specialist-card" style={{ background: "#ffffff", border: "1px solid #dbe8fa", borderRadius: "24px", padding: "40px 32px", margin: "40px 0", boxShadow: "0 12px 36px rgba(15, 78, 163, 0.06)" }}>
          <div className="lp-specialist-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "32px", alignItems: "center" }}>
            <div style={{ textAlign: "center" }}>
              <img
                src="/clients/yash-deliwala.jpeg"
                alt="Yash Deliwala - Google Ads Expert in India"
                width="190"
                height="190"
                decoding="async"
                style={{ borderRadius: "50%", border: "4px solid var(--ads-blue)", objectFit: "cover", margin: "0 auto 14px", boxShadow: "0 10px 30px rgba(47,140,255,0.22)" }}
              />
              <span style={{ display: "inline-block", background: "#e0f2fe", color: "var(--ads-blue)", fontSize: "12.5px", fontWeight: "700", padding: "5px 14px", borderRadius: "20px" }}>
                <FaCheckCircle style={{ display: "inline", marginRight: "5px" }} /> Google Ads Certified
              </span>
            </div>
            <div>
              <p style={{ color: "var(--ads-blue)", fontSize: "13px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 6px" }}>
                Direct 1-on-1 Support
              </p>
              <h2 style={{ fontSize: "28px", fontWeight: "850", color: "#0f172a", margin: "0 0 12px", lineHeight: "1.2" }}>
                Work Directly with Yash Deliwala
              </h2>
              <p style={{ color: "#475569", fontSize: "15px", lineHeight: "1.7", margin: "0 0 20px" }}>
                My website and services carry my name, <strong>yashdeliwala.com</strong>, because I stand 100% behind every campaign. 
                I personally review your business goals, set up high-intent search campaigns, structure conversion tracking, and optimize weekly — giving you complete transparency and direct WhatsApp access.
              </p>
              <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", alignItems: "center" }}>
                <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" onClick={handleWhatsAppClick} className="lp-button lp-button--whatsapp">
                  <FaWhatsapp /> Chat Directly with Yash
                </a>
                <a href={`tel:${PHONE_NUMBER}`} onClick={handleCallClick} className="lp-button lp-button--secondary">
                  <FaPhoneAlt /> Call {PHONE_NUMBER}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Simple 3-Step Process */}
        <section className="lp-section lp-process">
          <div className="lp-section-heading">
            <h2>Simple 3-Step Working Process</h2>
          </div>

          <div className="lp-process-grid">
            {processSteps.map((p, idx) => (
              <div key={idx} className="lp-process-card">
                <div className="lp-process-step">{p.step}</div>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Short Testimonial Snippets */}
        <section className="lp-section lp-testimonials">
          <div className="lp-section-heading">
            <h2>Real Results from Real Clients</h2>
          </div>

          <div className="lp-testimonial-grid">
            {testimonials.map((t, idx) => (
              <div key={idx} className="lp-testimonial-card">
                <div className="lp-stars">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-amber-400" />
                  ))}
                </div>
                <p>"{t.quote}"</p>
                <div className="lp-author">
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: FAQ (3 Questions Max) */}
        <section className="lp-section lp-faq">
          <div className="lp-section-heading">
            <h2>Frequently Asked Questions</h2>
          </div>

          <div className="lp-faq-list">
            {faqs.map((f, idx) => (
              <details key={idx} className="lp-faq-item" open={idx === 0}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Section 6: Final Conversion CTA Block */}
        <section className="lp-section lp-final-cta">
          <div className="lp-cta-card">
            <h2>Ready to Get Qualified Leads from Google Ads?</h2>
            <p>
              Stop wasting budget on clicks that don't convert. Book a 1-on-1 consultation session or chat
              with Yash directly.
            </p>

            <div className="lp-cta-actions">
              <a
                href="#hero"
                className="lp-button lp-button--primary"
              >
                Book Consultation (₹1000)
              </a>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                onClick={handleWhatsAppClick}
                className="lp-button lp-button--whatsapp"
              >
                <FaWhatsapp /> Chat on WhatsApp
              </a>

              <a
                href={`tel:${PHONE_NUMBER}`}
                onClick={handleCallClick}
                className="lp-button lp-button--secondary"
              >
                <FaPhoneAlt /> Call {PHONE_NUMBER}
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Minimal Footer — ZERO Outbound Links */}
      <footer className="lp-footer">
        <div className="lp-footer-container">
          <p>© {new Date().getFullYear()} Yash Deliwala — Google Ads Agency Expert in India.</p>
          <p className="lp-footer-sub">All rights reserved. Your data is strictly confidential.</p>
        </div>
      </footer>

      {/* Sticky / Floating Conversion Elements */}
      {/* Desktop & Mobile Floating WhatsApp */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer"
        onClick={handleWhatsAppClick}
        className="lp-float-whatsapp"
        aria-label="Chat on WhatsApp with Yash"
      >
        <FaWhatsapp />
      </a>

      {/* Mobile Sticky Bottom Action Bar */}
      <div className="lp-mobile-bottom-bar mobile-bottom-action-bar">
        <a
          href={`tel:${PHONE_NUMBER}`}
          onClick={handleCallClick}
          className="lp-mobile-bar-btn lp-mobile-bar-btn--call mobile-action-btn mobile-action-btn--call"
        >
          <FaPhoneAlt className="mobile-action-btn__icon" /> <span>Call Now</span>
        </a>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noreferrer"
          onClick={handleWhatsAppClick}
          className="lp-mobile-bar-btn lp-mobile-bar-btn--whatsapp mobile-action-btn mobile-action-btn--whatsapp"
        >
          <FaWhatsapp className="mobile-action-btn__icon" /> <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
