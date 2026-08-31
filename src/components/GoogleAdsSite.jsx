import { memo } from "react";
import {
  FaBullseye,
  FaChartBar,
  FaChartLine,
  FaCheckCircle,
  FaChevronRight,
  FaEnvelope,
  FaGoogle,
  FaHeadset,
  FaHeart,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaSearchDollar,
  FaShieldAlt,
  FaUsers,
  FaWhatsapp,
} from "react-icons/fa";
import AdsHeader from "./AdsHeader";
import FloatingContactButtons from "./FloatingContactButtons";
import GoogleAdsDashboards from "./GoogleAdsDashboards";
import { locationPages } from "../lib/location-pages";
import { isSupabaseConfigured } from "../lib/supabase";
import { PHONE_NUMBER, WHATSAPP_LINK } from "../lib/site-config";

const services = [
  {
    title: "Google Search Ads",
    description:
      "Search campaign setup for high-intent keywords, clean ad groups, focused ad copy, and enquiries from people actively searching for your service.",
  },
  {
    title: "Google Ads Freelancer",
    description:
      "Direct campaign management from a Google Ads freelancer in India, with practical strategy, budget control, tracking, and weekly optimization.",
  },
  {
    title: "Google Ads Agency Support",
    description:
      "Agency-style Google Ads management for Indian businesses that need planning, setup, reporting, landing page suggestions, and ongoing PPC growth.",
  },
  {
    title: "Performance Max Campaigns",
    description:
      "Performance Max setup and optimization with audience signals, creative guidance, conversion goals, and budget decisions based on lead quality.",
  },
  {
    title: "Lead Generation Campaigns",
    description:
      "Google Ads campaigns built to generate calls, forms, WhatsApp enquiries, and qualified leads for service businesses across India.",
  },
  {
    title: "Conversion Tracking",
    description:
      "Setup for call tracking, form submissions, WhatsApp clicks, and important website actions so every campaign can be improved with real data.",
  },
];

export const clients = [
  {
    name: "Dr. Aditya",
    image: "/clients/Dr.-Aditya-Logo-04-Red.png",
  },
  {
    name: "Tattvamassi, Surat",
    image: "/clients/images (1).jfif",
  },
  {
    name: "Marina Grand Hospital",
    image: "/clients/logo-marina-new518.webp",
  },
  {
    name: "Ved",
    image: "/clients/logo-ved.webp",
  },
  {
    name: "Elevate",
    image: "/clients/client-logo-elevate.jpeg",
  },
  {
    name: "Hospital Client",
    image: "/clients/hospital-client-logo.jpeg",
  },
  {
    name: "Salon Client",
    image: "/clients/salon-client-logo.jpeg",
  },
  {
    name: "Skin Clinic Client",
    image: "/clients/skin-clinic-client-logo.jpeg",
  },
];

const results = [
  { value: "India", label: "Google Ads management for businesses across India" },
  { value: "Search", label: "campaigns built around high-intent keywords" },
  { value: "Tracked", label: "calls, forms, WhatsApp clicks, and lead actions" },
];

const steps = [
  "Audit your Google Ads account, website, keywords, landing page, and conversion tracking.",
  "Build a focused PPC structure around Search Ads, Performance Max, location targeting, and lead quality.",
  "Track calls, forms, WhatsApp clicks, and optimize campaigns every week using real conversion data.",
];

export const faqItems = [
  {
    question: "Who is a good Google Ads expert in India for lead generation?",
    answer:
      "Yash Deliwala helps Indian businesses run Google Ads campaigns for calls, forms, WhatsApp enquiries, and qualified leads with clear tracking and weekly optimization.",
  },
  {
    question: "Do you work as a Google Ads freelancer or agency?",
    answer:
      "I work as a Google Ads freelancer with an agency-style process, including campaign planning, setup, conversion tracking, optimization, and reporting.",
  },
  {
    question: "Which Google Ads services do you provide?",
    answer:
      "Services include Google Search Ads, PPC campaign management, Performance Max campaigns, lead generation campaigns, landing page suggestions, and conversion tracking setup.",
  },
  {
    question: "How much does Google Ads management cost in India?",
    answer:
      "Google Ads management starts from Rs. 15,000 per month, with a recommended minimum ad spend of Rs. 15,000 per month paid directly to Google.",
  },
  {
    question: "Can Google Search Ads work for local and India-wide businesses?",
    answer:
      "Yes. Google Search Ads can target a single city, selected locations, or India-wide searches depending on your service area, budget, and lead quality goals.",
  },
];

export const formatDate = (value) =>
  value
    ? new Intl.DateTimeFormat("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }).format(new Date(value))
    : "";

export function calculateReadingTime(text) {
  if (!text) return "3 min read";
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

export const BlogVisual = memo(function BlogVisual({ blog, variant = "card" }) {
  const imgSrc = blog?.image_url || "/clients/yash-deliwala.jpeg";
  const className = variant === "thumb" ? "blog-thumb-img" : "blog-card-img";

  return (
    <img
      src={imgSrc}
      alt={blog?.title || "Yash Deliwala Google Ads Expert"}
      className={className}
      loading="lazy"
      decoding="async"
      width="400"
      height="225"
    />
  );
});

export function BlogContent({ content = "" }) {
  if (!content) return null;

  const rawLines = content.split("\n").map((l) => l.trim()).filter(Boolean);
  const elements = [];
  let currentList = [];

  const flushList = (keyPrefix) => {
    if (currentList.length > 0) {
      elements.push(
        <ul className="blog-content__list" key={`${keyPrefix}-list-${elements.length}`}>
          {currentList.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      );
      currentList = [];
    }
  };

  const isShortNoPunctuation = (str) =>
    str && str.length < 65 && !/[.,?;!]$/.test(str) && !str.startsWith("#");

  for (let index = 0; index < rawLines.length; index++) {
    const line = rawLines[index];
    const nextLine = rawLines[index + 1] || "";

    // Checkmark bullet points
    if (line.startsWith("✅") || line.startsWith("âœ…") || line.startsWith("✔")) {
      flushList(index);
      const text = line.replace(/^(\u2705|âœ…|✔)\s*/, "");
      elements.push(
        <div className="blog-content__check" key={index}>
          <span className="blog-check-badge">✓</span>
          <span>{text}</span>
        </div>
      );
      continue;
    }

    // Markdown bullet list item (- , * , • )
    if (/^[-*•]\s+/.test(line)) {
      const itemText = line.replace(/^[-*•]\s+/, "");
      currentList.push(itemText);
      continue;
    }

    // Explicit markdown sub-headers
    if (line.startsWith("### ")) {
      flushList(index);
      elements.push(<h3 key={index}>{line.replace(/^###\s*/, "")}</h3>);
      continue;
    }
    if (line.startsWith("## ") || line.startsWith("# ")) {
      flushList(index);
      elements.push(<h2 key={index}>{line.replace(/^###?\s*/, "")}</h2>);
      continue;
    }

    // First line lead paragraph
    if (index === 0) {
      flushList(index);
      elements.push(
        <p className="blog-content__lead" key={index}>
          {line}
        </p>
      );
      continue;
    }

    // Heading determination logic:
    const isNumberedHeading = /^\d+\.\s+[A-Z]/.test(line);
    const endsWithColon = line.endsWith(":");

    // If this line and the next line are both short lines without punctuation, they form a LIST!
    if (
      !endsWithColon &&
      !isNumberedHeading &&
      isShortNoPunctuation(line) &&
      isShortNoPunctuation(nextLine)
    ) {
      currentList.push(line);
      continue;
    }

    // If we reach a non-list item, flush any collected list items
    flushList(index);

    // Is it a genuine Section Title?
    const isExplicitHeader =
      endsWithColon ||
      isNumberedHeading ||
      (line.length < 50 &&
        !/[.,?;!]$/.test(line) &&
        !currentList.length &&
        nextLine.length > 40);

    if (isExplicitHeader) {
      const cleanHeader = line.replace(/:$/, "");
      if (isNumberedHeading || line.length < 35) {
        elements.push(<h3 key={index}>{cleanHeader}</h3>);
      } else {
        elements.push(<h2 key={index}>{cleanHeader}</h2>);
      }
      continue;
    }

    // Standard readable paragraph
    elements.push(<p key={index}>{line}</p>);
  }

  flushList("final");

  return <div className="blog-content">{elements}</div>;
}

export function BlogAuthorBio() {
  return (
    <div className="blog-author-bio">
      <img src="/clients/yash-deliwala.jpeg" alt="Yash Deliwala Google Ads Expert" loading="lazy" decoding="async" width="80" height="80" />
      <div>
        <span>WRITTEN BY</span>
        <h3>Yash Deliwala</h3>
        <p>
          Google Ads Freelancer and PPC Consultant based in India. Specializing in high-intent Search campaigns, Performance Max, lead generation, and conversion tracking for businesses across India.
        </p>
      </div>
    </div>
  );
}

export function BlogSidebar({ suggestedBlogs = [] }) {
  return (
    <aside className="blog-sidebar">
      <div className="blog-sidebar__widget blog-author-widget">
        <div className="blog-author-widget__avatar">
          <img src="/clients/yash-deliwala.jpeg" alt="Yash Deliwala" loading="lazy" decoding="async" width="60" height="60" />
        </div>
        <div className="blog-author-widget__info">
          <h3>Yash Deliwala</h3>
          <span>Google Ads Expert in India</span>
          <p>Helping Indian businesses run profitable Google Ads for leads, calls, and WhatsApp sales enquiries.</p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="ads-button ads-button--primary blog-author-widget__btn">
            Chat on WhatsApp
          </a>
        </div>
      </div>

      {suggestedBlogs.length > 0 && (
        <div className="blog-sidebar__widget blog-suggested-widget">
          <h3 className="blog-sidebar__title">Suggested Articles</h3>
          <div className="blog-suggested__list">
            {suggestedBlogs.map((item) => (
              <a href={`/blog/${item.slug}`} className="blog-suggested__item" key={item.slug}>
                <div className="blog-suggested__media">
                  <BlogVisual blog={item} variant="thumb" />
                </div>
                <div className="blog-suggested__content">
                  <span>{formatDate(item.created_at)}</span>
                  <h4>{item.title}</h4>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

      <div className="blog-sidebar__widget blog-cta-widget">
        <h3>Need Google Ads Results?</h3>
        <p>Get a direct campaign review and Search Ads structure built for your business goals.</p>
        <a href="#contact" className="ads-button ads-button--secondary">
          Book Rs. 1000 Consultation
        </a>
      </div>
    </aside>
  );
}

export const BlogCard = memo(function BlogCard({ blog }) {
  return (
    <a className="blog-card" href={`/blog/${blog.slug}`}>
      <BlogVisual blog={blog} />
      <div>
        <span>{formatDate(blog.created_at)}</span>
        <h2>{blog.title}</h2>
        <p>{blog.excerpt}</p>
        <strong>Read blog</strong>
      </div>
    </a>
  );
});

export function SiteShell({ children }) {
  return (
    <div className="ads-site">
      <AdsHeader variant="inner" />
      {children}
      <AdsFooter />
    </div>
  );
}

export function AdsFooter({ locationLabel = "Surat, Gujarat" }) {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer" style={{ background: "#f4f8fd", borderTop: "1px solid #e2e8f0", padding: "56px 20px 28px", color: "#334155", fontFamily: "Sora, sans-serif" }}>
      <div className="site-footer__container" style={{ maxWidth: "1240px", margin: "0 auto" }}>
        
        {/* ── Top Main Footer Grid ── */}
        <div className="site-footer__grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "40px", alignItems: "start" }}>
          
          {/* Column 1: Brand & Contact Info */}
          <div className="site-footer__col site-footer__col--brand" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div className="site-footer__logo-wrap" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <img
                src="/clients/logo (2).jpeg"
                alt="Yash Deliwala Google Ads Expert"
                width="52"
                height="52"
                decoding="async"
                style={{ borderRadius: "50%", border: "2px solid var(--ads-blue)", objectFit: "cover" }}
              />
              <div className="site-footer__logo-text">
                <strong style={{ display: "block", color: "#0f172a", fontSize: "18px", fontWeight: "800", lineHeight: "1.3" }}>Yash Deliwala</strong>
                <span style={{ display: "block", color: "var(--ads-blue)", fontSize: "13px", fontWeight: "700", marginTop: "1px" }}>Google Ads Expert in India</span>
              </div>
            </div>

            <p className="site-footer__bio" style={{ color: "#475569", fontSize: "13.5px", lineHeight: "1.6", margin: "0" }}>
              Helping businesses across India grow with result-driven Google Ads campaigns, real leads, and measurable ROI.
            </p>

            <div className="site-footer__contact-list" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <a href={`tel:${PHONE_NUMBER}`} className="site-footer__contact-item" style={{ display: "flex", alignItems: "center", gap: "12px", color: "#334155", fontSize: "13.5px", fontWeight: "600", textDecoration: "none" }}>
                <span className="site-footer__icon-badge" style={{ width: "34px", height: "34px", borderRadius: "50%", background: "var(--ads-blue)", color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", flexShrink: 0 }}>
                  <FaPhoneAlt />
                </span>
                <span>{PHONE_NUMBER}</span>
              </a>
              <a href="mailto:yashdeliwala10@gmail.com" className="site-footer__contact-item" style={{ display: "flex", alignItems: "center", gap: "12px", color: "#334155", fontSize: "13.5px", fontWeight: "600", textDecoration: "none" }}>
                <span className="site-footer__icon-badge" style={{ width: "34px", height: "34px", borderRadius: "50%", background: "var(--ads-blue)", color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", flexShrink: 0 }}>
                  <FaEnvelope />
                </span>
                <span>yashdeliwala10@gmail.com</span>
              </a>
              <div className="site-footer__contact-item" style={{ display: "flex", alignItems: "center", gap: "12px", color: "#334155", fontSize: "13.5px", fontWeight: "600" }}>
                <span className="site-footer__icon-badge" style={{ width: "34px", height: "34px", borderRadius: "50%", background: "var(--ads-blue)", color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", flexShrink: 0 }}>
                  <FaMapMarkerAlt />
                </span>
                <span>Surat, Gujarat, India</span>
              </div>
            </div>

            <div className="site-footer__socials" style={{ display: "flex", gap: "10px", marginTop: "4px" }}>
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="site-footer__social-btn" style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#e2e8f0", color: "var(--ads-blue)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px", textDecoration: "none" }}>
                <FaWhatsapp />
              </a>
              <a href="https://www.linkedin.com/in/yash-deliwala/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="site-footer__social-btn" style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#e2e8f0", color: "var(--ads-blue)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px", textDecoration: "none" }}>
                <FaLinkedin />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="site-footer__social-btn" style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#e2e8f0", color: "var(--ads-blue)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px", textDecoration: "none" }}>
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="site-footer__col" style={{ display: "flex", flexDirection: "column" }}>
            <h3 className="site-footer__col-title" style={{ color: "#1e3a8a", fontSize: "15px", fontWeight: "800", margin: "0 0 16px 0", display: "block" }}>Services</h3>
            <ul className="site-footer__link-list" style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              <li>
                <a href="/" style={{ display: "flex", alignItems: "center", gap: "8px", color: "#475569", fontSize: "13.5px", fontWeight: "600", textDecoration: "none" }}><FaChevronRight style={{ color: "var(--ads-blue)", fontSize: "11px", flexShrink: 0 }} /> Google Ads Management</a>
              </li>
              <li>
                <a href="/#services" style={{ display: "flex", alignItems: "center", gap: "8px", color: "#475569", fontSize: "13.5px", fontWeight: "600", textDecoration: "none" }}><FaChevronRight style={{ color: "var(--ads-blue)", fontSize: "11px", flexShrink: 0 }} /> Search Ads (PPC)</a>
              </li>
              <li>
                <a href="/#services" style={{ display: "flex", alignItems: "center", gap: "8px", color: "#475569", fontSize: "13.5px", fontWeight: "600", textDecoration: "none" }}><FaChevronRight style={{ color: "var(--ads-blue)", fontSize: "11px", flexShrink: 0 }} /> Performance Max Campaigns</a>
              </li>
              <li>
                <a href="/#services" style={{ display: "flex", alignItems: "center", gap: "8px", color: "#475569", fontSize: "13.5px", fontWeight: "600", textDecoration: "none" }}><FaChevronRight style={{ color: "var(--ads-blue)", fontSize: "11px", flexShrink: 0 }} /> Lead Generation</a>
              </li>
              <li>
                <a href="/#services" style={{ display: "flex", alignItems: "center", gap: "8px", color: "#475569", fontSize: "13.5px", fontWeight: "600", textDecoration: "none" }}><FaChevronRight style={{ color: "var(--ads-blue)", fontSize: "11px", flexShrink: 0 }} /> Conversion Tracking</a>
              </li>
              <li>
                <a href="/lp" style={{ display: "flex", alignItems: "center", gap: "8px", color: "#475569", fontSize: "13.5px", fontWeight: "600", textDecoration: "none" }}><FaChevronRight style={{ color: "var(--ads-blue)", fontSize: "11px", flexShrink: 0 }} /> Google Ads Audit</a>
              </li>
              <li>
                <a href="/#contact" style={{ display: "flex", alignItems: "center", gap: "8px", color: "#475569", fontSize: "13.5px", fontWeight: "600", textDecoration: "none" }}><FaChevronRight style={{ color: "var(--ads-blue)", fontSize: "11px", flexShrink: 0 }} /> Consultation</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="site-footer__col" style={{ display: "flex", flexDirection: "column" }}>
            <h3 className="site-footer__col-title" style={{ color: "#1e3a8a", fontSize: "15px", fontWeight: "800", margin: "0 0 16px 0", display: "block" }}>Quick Links</h3>
            <ul className="site-footer__link-list" style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              <li>
                <a href="/#results" style={{ display: "flex", alignItems: "center", gap: "8px", color: "#475569", fontSize: "13.5px", fontWeight: "600", textDecoration: "none" }}><FaChevronRight style={{ color: "var(--ads-blue)", fontSize: "11px", flexShrink: 0 }} /> Real Campaign Results</a>
              </li>
              <li>
                <a href="/#pricing" style={{ display: "flex", alignItems: "center", gap: "8px", color: "#475569", fontSize: "13.5px", fontWeight: "600", textDecoration: "none" }}><FaChevronRight style={{ color: "var(--ads-blue)", fontSize: "11px", flexShrink: 0 }} /> Pricing &amp; Plans</a>
              </li>
              <li>
                <a href="/" style={{ display: "flex", alignItems: "center", gap: "8px", color: "#475569", fontSize: "13.5px", fontWeight: "600", textDecoration: "none" }}><FaChevronRight style={{ color: "var(--ads-blue)", fontSize: "11px", flexShrink: 0 }} /> About Me</a>
              </li>
              <li>
                <a href="/blogs" style={{ display: "flex", alignItems: "center", gap: "8px", color: "#475569", fontSize: "13.5px", fontWeight: "600", textDecoration: "none" }}><FaChevronRight style={{ color: "var(--ads-blue)", fontSize: "11px", flexShrink: 0 }} /> Blog</a>
              </li>
              <li>
                <a href="/contact" style={{ display: "flex", alignItems: "center", gap: "8px", color: "#475569", fontSize: "13.5px", fontWeight: "600", textDecoration: "none" }}><FaChevronRight style={{ color: "var(--ads-blue)", fontSize: "11px", flexShrink: 0 }} /> Contact</a>
              </li>
              <li>
                <a href="/#contact" style={{ display: "flex", alignItems: "center", gap: "8px", color: "#475569", fontSize: "13.5px", fontWeight: "600", textDecoration: "none" }}><FaChevronRight style={{ color: "var(--ads-blue)", fontSize: "11px", flexShrink: 0 }} /> Free Consultation</a>
              </li>
              <li>
                <a href="/lp" style={{ display: "flex", alignItems: "center", gap: "8px", color: "#475569", fontSize: "13.5px", fontWeight: "600", textDecoration: "none" }}><FaChevronRight style={{ color: "var(--ads-blue)", fontSize: "11px", flexShrink: 0 }} /> Get Free Audit</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Cities We Serve & Need Help Box */}
          <div className="site-footer__col site-footer__col--cities" style={{ display: "flex", flexDirection: "column" }}>
            <h3 className="site-footer__col-title" style={{ color: "#1e3a8a", fontSize: "15px", fontWeight: "800", margin: "0 0 16px 0", display: "block" }}>Cities We Serve</h3>
            <ul className="site-footer__link-list" style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {locationPages.map((page) => (
                <li key={page.slug}>
                  <a href={`/${page.slug}`} style={{ color: "#475569", fontSize: "13.5px", fontWeight: "600", textDecoration: "none" }}>Google Ads in {page.city}</a>
                </li>
              ))}
              <li>
                <a href="/google-ads-agency-india" style={{ color: "#475569", fontSize: "13.5px", fontWeight: "600", textDecoration: "none" }}>Google Ads in India</a>
              </li>
            </ul>

            {/* Need Help Box */}
            <a href="/#contact" className="site-footer__help-box" style={{ marginTop: "24px", background: "#e0f2fe", border: "1px solid #bae6fd", borderRadius: "16px", padding: "16px 18px", display: "flex", alignItems: "center", gap: "14px", textDecoration: "none" }}>
              <div className="site-footer__help-icon" style={{ width: "44px", height: "44px", borderRadius: "50%", background: "var(--ads-blue)", color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "17px", flexShrink: 0 }}>
                <FaPhoneAlt />
              </div>
              <div className="site-footer__help-content">
                <strong style={{ display: "block", color: "#0f172a", fontSize: "14.5px", fontWeight: "800" }}>Need Help?</strong>
                <p style={{ margin: "3px 0 0", color: "#334155", fontSize: "12px", lineHeight: "1.4" }}>Book a ₹1000 Consultation and grow your business faster.</p>
              </div>
            </a>
          </div>

        </div>

        {/* ── Middle Trust / Stat Bar ── */}
        <div className="site-footer__trust-bar" style={{ marginTop: "48px", background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "20px 28px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "20px", boxShadow: "0 4px 20px rgba(0, 0, 0, 0.03)" }}>
          <div className="site-footer__trust-item" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div className="site-footer__trust-icon" style={{ width: "38px", height: "38px", borderRadius: "50%", background: "#eff6ff", color: "var(--ads-blue)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "17px", flexShrink: 0 }}><FaShieldAlt /></div>
            <div>
              <strong style={{ display: "block", color: "#0f172a", fontSize: "14px", fontWeight: "800", lineHeight: "1.2" }}>Google Ads</strong>
              <span style={{ display: "block", color: "#64748b", fontSize: "12px", fontWeight: "600" }}>Certified Expert</span>
            </div>
          </div>
          <div className="site-footer__trust-item" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div className="site-footer__trust-icon" style={{ width: "38px", height: "38px", borderRadius: "50%", background: "#eff6ff", color: "var(--ads-blue)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "17px", flexShrink: 0 }}><FaChartBar /></div>
            <div>
              <strong style={{ display: "block", color: "#0f172a", fontSize: "14px", fontWeight: "800", lineHeight: "1.2" }}>50+</strong>
              <span style={{ display: "block", color: "#64748b", fontSize: "12px", fontWeight: "600" }}>Successful Campaigns</span>
            </div>
          </div>
          <div className="site-footer__trust-item" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div className="site-footer__trust-icon" style={{ width: "38px", height: "38px", borderRadius: "50%", background: "#eff6ff", color: "var(--ads-blue)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "17px", flexShrink: 0 }}><FaUsers /></div>
            <div>
              <strong style={{ display: "block", color: "#0f172a", fontSize: "14px", fontWeight: "800", lineHeight: "1.2" }}>20+</strong>
              <span style={{ display: "block", color: "#64748b", fontSize: "12px", fontWeight: "600" }}>Industries Served</span>
            </div>
          </div>
          <div className="site-footer__trust-item" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div className="site-footer__trust-icon" style={{ width: "38px", height: "38px", borderRadius: "50%", background: "#eff6ff", color: "var(--ads-blue)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "17px", flexShrink: 0 }}><FaBullseye /></div>
            <div>
              <strong style={{ display: "block", color: "#0f172a", fontSize: "14px", fontWeight: "800", lineHeight: "1.2" }}>100%</strong>
              <span style={{ display: "block", color: "#64748b", fontSize: "12px", fontWeight: "600" }}>ROI Focused</span>
            </div>
          </div>
          <div className="site-footer__trust-item" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div className="site-footer__trust-icon" style={{ width: "38px", height: "38px", borderRadius: "50%", background: "#eff6ff", color: "var(--ads-blue)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "17px", flexShrink: 0 }}><FaHeadset /></div>
            <div>
              <strong style={{ display: "block", color: "#0f172a", fontSize: "14px", fontWeight: "800", lineHeight: "1.2" }}>Dedicated</strong>
              <span style={{ display: "block", color: "#64748b", fontSize: "12px", fontWeight: "600" }}>Support</span>
            </div>
          </div>
        </div>

        {/* ── Bottom Legal & Copyright Bar ── */}
        <div className="site-footer__bottom-section" style={{ marginTop: "36px", paddingTop: "24px", borderTop: "1px solid #e2e8f0" }}>
          <div className="site-footer__legal-links" style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px", flexWrap: "wrap", color: "#94a3b8", fontSize: "13px" }}>
            <a href="/contact" style={{ color: "#64748b", fontSize: "13px", fontWeight: "600", textDecoration: "none" }}>Privacy Policy</a>
            <span>·</span>
            <a href="/contact" style={{ color: "#64748b", fontSize: "13px", fontWeight: "600", textDecoration: "none" }}>Terms &amp; Conditions</a>
            <span>·</span>
            <a href="/contact" style={{ color: "#64748b", fontSize: "13px", fontWeight: "600", textDecoration: "none" }}>Refund Policy</a>
            <span>·</span>
            <a href="/contact" style={{ color: "#64748b", fontSize: "13px", fontWeight: "600", textDecoration: "none" }}>Disclaimer</a>
            <span>·</span>
            <a href="/sitemap.xml" style={{ color: "#64748b", fontSize: "13px", fontWeight: "600", textDecoration: "none" }}>Sitemap</a>
          </div>

          <div className="site-footer__copyright-row" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px", color: "#64748b", fontSize: "13px", fontWeight: "500" }}>
            <p style={{ margin: 0 }}>© {year} Yash Deliwala — Google Ads Expert in India. All rights reserved.</p>
            <p className="site-footer__made-with" style={{ margin: 0, display: "flex", alignItems: "center", gap: "5px" }}>
              Made with <FaHeart className="site-footer__heart-icon" style={{ color: "var(--ads-blue)" }} /> for Indian Businesses
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}

export function ConfigNotice() {
  return (
    <SiteShell>
      <main className="blog-page">
        <section className="blog-hero">
          <p className="ads-eyebrow">Setup needed</p>
          <h1>Supabase keys are missing.</h1>
          <p>
            Add Supabase URL and anon key in `.env`. Next.js can read your
            current Vite names locally, and deployment can use
            `NEXT_PUBLIC_SUPABASE_URL` plus `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
          </p>
        </section>
      </main>
    </SiteShell>
  );
}

export function GoogleAdsLanding({ blogs = [] }) {
  return (
    <div className="ads-site">
      <FloatingContactButtons />
      <AdsHeader />

      <main>
        <section id="home" className="ads-hero">
          <div className="ads-hero__content">
            <p className="ads-eyebrow">
              <FaGoogle />
              Google Ads Expert in India
            </p>
            <h1>Google Ads Expert in India for Search Ads, Leads and Sales.</h1>
            <p className="ads-hero__text">
              Hire Yash Deliwala for Google Ads management, PPC campaigns,
              Search Ads, Performance Max, lead generation, and conversion
              tracking for businesses across India.
            </p>

            <div className="ads-logo-panel">
              <img src="/clients/logo (2).jpeg" alt="Yash Deliwala Google Ads Expert logo" decoding="async" width="50" height="50" />
              <div>
                <strong>Yash Deliwala</strong>
                <span>Google Ads Freelancer & PPC Consultant</span>
              </div>
            </div>

            <div className="ads-actions">
              <a className="ads-button ads-button--primary" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                <FaWhatsapp />
                WhatsApp Yash
              </a>
              <a className="ads-button ads-button--secondary" href="#contact">
                Book Rs. 1000 Consultation
              </a>
            </div>

            <div className="ads-hero__proof">
              {results.map((item) => (
                <div key={item.value}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="ads-hero__media" aria-label="Yash Deliwala Google Ads Expert">
            <img
              src="/clients/yash-deliwala.jpeg"
              alt="Yash Deliwala, Google Ads expert in India"
              fetchPriority="high"
              decoding="async"
              width="540"
              height="540"
            />
          </div>
        </section>

        <section className="ads-section ads-seo-copy">
          <div className="ads-section__heading">
            <p className="ads-eyebrow">
              <FaGoogle />
              Google Ads Freelancer &amp; Agency Services
            </p>
            <h2>India-focused Google Ads management for businesses that need real enquiries.</h2>
          </div>

          <div className="ads-seo-copy__grid">
            <div>
              <h3>
                <a href="/google-ads-expert-surat" className="ads-internal-link">
                  Google Ads Freelancer in India
                </a>
              </h3>
              <p>
                Work directly with a Google Ads freelancer who manages keyword
                research, campaign setup, ad copy, budget control, and ongoing
                optimization without confusing layers.{" "}
                <a href="/google-ads-expert-surat" className="ads-inline-link">
                  See campaign results from Surat →
                </a>
              </p>
            </div>
            <div>
              <h3>
                <a href="/google-ads-agency-india" className="ads-internal-link">
                  Google Ads Agency Style Process
                </a>
              </h3>
              <p>
                Get a structured agency-style workflow with account audit,
                conversion tracking, search campaign planning,{" "}
                <a href="/google-ads-agency-india" className="ads-inline-link">
                  Performance Max management
                </a>
                , and clear reporting.
              </p>
            </div>
            <div>
              <h3>Google Search Ads for Leads</h3>
              <p>
                Target people searching for your service on Google and convert
                that traffic into calls, forms, WhatsApp enquiries, and sales
                conversations. We serve businesses across{" "}
                <a href="/google-ads-expert-mumbai" className="ads-inline-link">Mumbai</a>,{" "}
                <a href="/google-ads-expert-delhi" className="ads-inline-link">Delhi</a>, and{" "}
                <a href="/google-ads-expert-ahmedabad" className="ads-inline-link">Ahmedabad</a>.
              </p>
            </div>
          </div>
        </section>

        <GoogleAdsDashboards />

        <section id="services" className="ads-section">
          <div className="ads-section__heading">
            <p className="ads-eyebrow">
              <FaSearchDollar />
              Google Ads Management Services
            </p>
            <h2>Search Ads, PPC management, tracking, and lead generation in one place.</h2>
          </div>

          <div className="ads-service-grid">
            {services.map((service) => (
              <div className="ads-card" key={service.title}>
                <FaChartLine />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="pricing" className="ads-section ads-pricing">
          <div className="ads-section__heading">
            <p className="ads-eyebrow">
              <FaSearchDollar />
              Pricing
            </p>
            <h2>Clear Google Ads management pricing before we start.</h2>
          </div>

          <div className="ads-pricing-grid">
            <div className="ads-pricing-card">
              <span>Campaign management</span>
              <strong>Starting from Rs. 15,000/month</strong>
              <p>Monthly charge for planning, setup, optimization, tracking, and campaign reporting.</p>
            </div>
            <div className="ads-pricing-card">
              <span>Minimum ad spend</span>
              <strong>Rs. 15,000/month</strong>
              <p>Recommended minimum Google Ads budget paid directly for running campaigns.</p>
            </div>
            <div className="ads-pricing-card ads-pricing-card--highlight">
              <span>Consultation</span>
              <strong>Rs. 1000</strong>
              <p>One-time consultation to review your business, campaign goals, and next steps.</p>
            </div>
          </div>
        </section>

        <section id="video" className="ads-section ads-video-section">
          <div className="ads-section__heading">
            <p className="ads-eyebrow">
              <FaGoogle />
              Google Ads Video
            </p>
            <h2>Watch how Google Search Ads can help generate better leads.</h2>
          </div>

          <div className="ads-video-frame">
            <iframe
              src="https://www.youtube.com/embed/KdnXToNgYKA"
              title="Google Ads video by Yash Deliwala"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </section>

        <section id="clients" className="ads-section ads-clients">
          <div className="ads-section__heading">
            <p className="ads-eyebrow">
              <FaGoogle />
              Client Work
            </p>
            <h2>Trusted by businesses that want better visibility, leads, and PPC results.</h2>
          </div>

          <div className="ads-client-grid">
            {clients.map((client) => (
              <div className="ads-client-card" key={client.name} aria-label={client.name}>
                <div className="ads-client-card__logo">
                  <img src={client.image} alt={`${client.name} client logo`} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="process" className="ads-section ads-section--blue">
          <div className="ads-section__heading">
            <p className="ads-eyebrow ads-eyebrow--light">
              <FaMapMarkerAlt />
              Simple Working Process
            </p>
            <h2>A practical PPC process for Search Ads, tracking, and weekly optimization.</h2>
          </div>

          <div className="ads-process">
            {steps.map((step, index) => (
              <div className="ads-process__item" key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="faq" className="ads-section ads-faq">
          <div className="ads-section__heading">
            <p className="ads-eyebrow">
              <FaGoogle />
              Google Ads FAQ
            </p>
            <h2>Questions businesses ask before hiring a Google Ads expert in India.</h2>
          </div>

          <div className="ads-faq__list">
            {faqItems.map((item) => (
              <details className="ads-faq__item" key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <HomeBlogsSection blogs={blogs} />

        <section id="contact" className="ads-contact">
          <div className="ads-contact__copy">
            <p className="ads-eyebrow">
              <FaPhoneAlt />
              Google Ads Consultation
            </p>
            <h2>Need better Google Ads results in India?</h2>
            <p>
              Share your business, target location, monthly budget, and current
              ad goal. I will help you understand what to fix first and how to
              run your Google Ads more cleanly.
            </p>
            <div className="ads-consultation-price">
              <span>Consultation charge</span>
              <strong>Rs. 1000</strong>
            </div>
            <div className="ads-contact__quick">
              <a href={`tel:${PHONE_NUMBER}`}>{PHONE_NUMBER}</a>
              <a href="mailto:yashdeliwala10@gmail.com">yashdeliwala10@gmail.com</a>
            </div>
          </div>

          <form className="ads-form" action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="2c6efe99-dc5c-4acc-b523-656523121182" />
            <input type="text" name="name" required placeholder="Your name" />
            <input type="email" name="email" required placeholder="Email address" />
            <input type="tel" name="phone" placeholder="Phone or WhatsApp number" />
            <textarea name="message" required rows={5} placeholder="Tell me about your business and Google Ads goal" />
            <button type="submit">Send Enquiry</button>
          </form>
        </section>
      </main>

      <AdsFooter />
    </div>
  );
}

export function LocationSeoPage({ page, dynamicPages = [] }) {
  const serviceName = page.service || "Google Ads";
  const cityName = page.city || "India";
  const stateName = page.state || "Gujarat";
  const industryText = Array.isArray(page.industries)
    ? page.industries.join(", ")
    : "local businesses, clinics, manufacturers, real estate, and service providers";

  const defaultFaqs = [
    {
      question: `Do you provide ${serviceName} management in ${cityName}?`,
      answer: `Yes. Yash Deliwala provides professional ${serviceName} management for businesses in ${cityName}, including campaign setup, Search Ads, Performance Max, conversion tracking, and weekly optimization.`,
    },
    {
      question: `Can you work as a ${serviceName} freelancer for ${cityName} businesses?`,
      answer: `Yes. Yash works as a dedicated ${serviceName} freelancer and consultant for businesses that want direct support, quick communication, and high lead quality.`,
    },
    {
      question: `What is the starting price for ${serviceName} management?`,
      answer: `${serviceName} management starts from Rs. 15,000 per month. Recommended ad spend starts at Rs. 15,000 per month paid directly to Google.`,
    },
  ];

  const faqsToDisplay =
    Array.isArray(page.faq) && page.faq.length > 0
      ? page.faq.filter((f) => f.question && f.answer)
      : defaultFaqs;

  // Combine static and dynamic pages for internal links
  const allLocationLinks = [
    ...locationPages,
    ...dynamicPages.filter(
      (dp) => !locationPages.some((lp) => lp.slug === dp.slug)
    ),
  ].filter((p) => p.slug !== page.slug);

  return (
    <div className="ads-site">
      <FloatingContactButtons />
      <AdsHeader variant="inner" />

      <main className="location-page">
        {/* ── Hero Section ── */}
        <section className="location-hero">
          <div>
            <p className="ads-eyebrow">
              <FaMapMarkerAlt />
              {serviceName} Expert in {cityName}
            </p>
            <h1>{page.h1 || `${serviceName} Expert in ${cityName} for Search Ads, Leads and Calls.`}</h1>
            <p>
              {page.hero_subtitle ||
                `Hire Yash Deliwala for ${serviceName} management in ${cityName}, including Search Ads, PPC campaign setup, Performance Max, conversion tracking, and weekly optimization for better enquiries.`}
            </p>
            <div className="ads-actions">
              <a className="ads-button ads-button--primary" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                <FaWhatsapp />
                WhatsApp Yash
              </a>
              <a className="ads-button ads-button--secondary" href="#contact">
                Book Rs. 1000 Consultation
              </a>
            </div>
          </div>

          <div className="location-hero__card">
            <img src={page.image_url || "/clients/logo (2).jpeg"} alt={`Yash Deliwala ${serviceName} expert in ${cityName}`} decoding="async" width="80" height="80" />
            <strong>Yash Deliwala</strong>
            <span>{serviceName} Freelancer &amp; Consultant</span>
          </div>
        </section>

        {/* ── Services Grid ── */}
        <section className="ads-section location-section">
          <div className="ads-section__heading">
            <p className="ads-eyebrow">
              <FaGoogle />
              {serviceName} Services in {cityName}
            </p>
            <h2>{serviceName} management for {cityName} businesses that need measurable leads.</h2>
          </div>

          <div className="ads-seo-copy__grid">
            <div>
              <h3>Google Search Ads in {cityName}</h3>
              <p>
                Build campaigns around high-intent keywords, service searches,
                location terms, and conversion-focused ad copy for people
                searching in and around {cityName}.
              </p>
            </div>
            <div>
              <h3>{serviceName} Freelancer in {cityName}</h3>
              <p>
                Work directly with a {serviceName} freelancer for campaign setup,
                budget planning, tracking, negative keywords, and ongoing PPC
                improvement.
              </p>
            </div>
            <div>
              <h3>Lead Generation Campaigns</h3>
              <p>
                Generate calls, WhatsApp enquiries, form leads, and sales
                conversations for {industryText} in {cityName}.
              </p>
            </div>
          </div>
        </section>

        {/* ── Custom In-Depth Content Block (if provided in DB) ── */}
        {page.content && (
          <section className="ads-section location-custom-content">
            <div className="ads-section__heading">
              <p className="ads-eyebrow">
                <FaSearchDollar />
                Strategy &amp; Growth
              </p>
              <h2>Tailored PPC Strategy for {cityName}</h2>
            </div>
            <BlogContent content={page.content} />
          </section>
        )}

        <GoogleAdsDashboards />

        {/* ── Local Campaign Strategy ── */}
        <section className="ads-section location-section location-section--soft">
          <div className="location-content">
            <p className="ads-eyebrow">
              <FaSearchDollar />
              Local Campaign Strategy
            </p>
            <h2>Why {cityName} campaigns need proper PPC structure.</h2>
            <p>
              {page.angle ||
                `${cityName} businesses need high-intent keyword focus, negative keyword control, and dedicated landing pages to prevent wasted ad budget and maximize inbound client enquiries.`}
            </p>
            <p>
              The goal is not just more clicks. The goal is to match search
              intent with the right landing page, track every important action,
              and improve the campaigns based on actual lead quality.
            </p>
          </div>
        </section>

        {/* ── Interactive FAQ Section ── */}
        <section className="ads-section ads-faq">
          <div className="ads-section__heading">
            <p className="ads-eyebrow">
              <FaGoogle />
              {cityName} {serviceName} FAQ
            </p>
            <h2>Questions before hiring a {serviceName} expert in {cityName}.</h2>
          </div>

          <div className="ads-faq__list">
            {faqsToDisplay.map((faq, idx) => (
              <details className="ads-faq__item" key={idx}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ── Internal Link Hub: Also Serving ── */}
        <section className="ads-section ads-also-serving">
          <div className="ads-section__heading">
            <p className="ads-eyebrow">
              <FaMapMarkerAlt />
              Also Serving Across India
            </p>
            <h2>{serviceName} expert available in major Indian cities.</h2>
          </div>
          <div className="ads-also-serving__grid">
            <a href="/" className="ads-also-serving__card">
              <strong>Google Ads Expert in India</strong>
              <span>India-wide Search Ads &amp; PPC management</span>
            </a>
            <a href="/google-ads-agency-india" className="ads-also-serving__card">
              <strong>Google Ads Agency in India</strong>
              <span>Agency-style process, transparent reporting</span>
            </a>
            {allLocationLinks.slice(0, 12).map((p) => (
              <a href={`/${p.slug}`} key={p.slug} className="ads-also-serving__card">
                <strong>{p.page_name || `${p.service || "Google Ads"} Expert in ${p.city}`}</strong>
                <span>{p.city}{p.state ? `, ${p.state}` : ""} — Search Ads &amp; Lead Generation</span>
              </a>
            ))}
          </div>
        </section>

        <section id="contact" className="ads-contact">
          <div className="ads-contact__copy">
            <p className="ads-eyebrow">
              <FaPhoneAlt />
              Google Ads Consultation in {page.city}
            </p>
            <h2>Want better Google Ads leads in {page.city}?</h2>
            <p>
              Share your business, service area, budget, and current campaign
              goal. I will help you understand what needs to be fixed first.
            </p>
            <div className="ads-consultation-price">
              <span>Consultation charge</span>
              <strong>Rs. 1000</strong>
            </div>
            <div className="ads-contact__quick">
              <a href={`tel:${PHONE_NUMBER}`}>{PHONE_NUMBER}</a>
              <a href="mailto:yashdeliwala10@gmail.com">yashdeliwala10@gmail.com</a>
            </div>
          </div>

          <form className="ads-form" action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="2c6efe99-dc5c-4acc-b523-656523121182" />
            <input type="text" name="name" required placeholder="Your name" />
            <input type="email" name="email" required placeholder="Email address" />
            <input type="tel" name="phone" placeholder="Phone or WhatsApp number" />
            <textarea name="message" required rows={5} placeholder={`Tell me about your ${page.city} Google Ads goal`} />
            <button type="submit">Send Enquiry</button>
          </form>
        </section>
      </main>

      <AdsFooter locationLabel={`${page.city}, ${page.state}`} />
    </div>
  );
}

function HomeBlogsSection({ blogs }) {
  if (!isSupabaseConfigured || blogs.length === 0) return null;

  return (
    <section id="blog" className="ads-section ads-home-blog">
      <div className="ads-section__heading">
        <p className="ads-eyebrow">
          <FaGoogle />
          Latest Blogs
        </p>
        <h2>Google Ads insights for business owners.</h2>
      </div>

      <div className="blog-grid blog-grid--home">
        {blogs.map((blog) => (
          <BlogCard blog={blog} key={blog.id} />
        ))}
      </div>

      <div className="ads-home-blog__action">
        <a className="ads-button ads-button--secondary" href="/blogs">View All Blogs</a>
      </div>
    </section>
  );
}
