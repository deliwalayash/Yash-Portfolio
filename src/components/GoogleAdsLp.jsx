"use client";

import { useState } from "react";
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
import { PHONE_NUMBER, WHATSAPP_LINK } from "../lib/site-config";

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
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Fire conversion event
    trackConversionEvent("lp_form_submit", {
      event_category: "Lead Generation",
      event_label: "Google Ads LP Form Submission",
    });

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
  };

  const handleWhatsAppClick = () => {
    trackConversionEvent("lp_whatsapp_click", {
      event_category: "Lead Generation",
      event_label: "Google Ads LP WhatsApp Click",
    });
  };

  const handleCallClick = () => {
    trackConversionEvent("lp_call_click", {
      event_category: "Lead Generation",
      event_label: "Google Ads LP Phone Call Click",
    });
  };

  const whatYouGet = [
    {
      title: "Free Google Ads Audit",
      description:
        "In-depth analysis of your current account to eliminate wasted ad spend, negative keyword leaks, and bad targeting.",
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

  const processSteps = [
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

  const testimonials = [
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

  const faqs = [
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

  return (
    <div className="lp-site">
      {/* Minimal Header — ZERO Outbound Navigation Links */}
      <header className="lp-header">
        <div className="lp-header-container">
          <div className="lp-brand">
            <img src="/clients/logo.png" alt="Yash Deliwala Google Ads Expert Logo" />
            <span>Yash Google Ads Expert</span>
          </div>

          <a
            href={`tel:${PHONE_NUMBER}`}
            onClick={handleCallClick}
            className="lp-header-call"
            aria-label="Call Yash Deliwala Now"
          >
            <FaPhoneAlt />
            <span>Call Now</span>
          </a>
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
                <h3>Get a Free Google Ads Audit</h3>
                <p>Receive a custom campaign review & strategy roadmap within 2 hours.</p>

                {formSubmitted ? (
                  <div className="lp-form-success">
                    <FaCheckCircle className="text-4xl text-emerald-500 mx-auto mb-3" />
                    <h4>Audit Request Received!</h4>
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
                      value="New Google Ads LP Audit Lead"
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
                      {loading ? "Submitting..." : "Get Free Audit Now"}
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
              src="/yash-google-ads-photo.png"
              alt="Yash Deliwala - Google Ads Agency Specialist"
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
              Stop wasting budget on clicks that don't convert. Get your free campaign audit or chat
              with Yash directly.
            </p>

            <div className="lp-cta-actions">
              <a
                href="#hero"
                className="lp-button lp-button--primary"
              >
                Get Free Audit Now
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
      <div className="lp-mobile-bottom-bar">
        <a
          href={`tel:${PHONE_NUMBER}`}
          onClick={handleCallClick}
          className="lp-mobile-bar-btn lp-mobile-bar-btn--call"
        >
          <FaPhoneAlt /> Call Now
        </a>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noreferrer"
          onClick={handleWhatsAppClick}
          className="lp-mobile-bar-btn lp-mobile-bar-btn--whatsapp"
        >
          <FaWhatsapp /> WhatsApp Yash
        </a>
      </div>
    </div>
  );
}
