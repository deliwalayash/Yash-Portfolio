import Image from "next/image";
import {
  FaCheckCircle,
  FaEnvelope,
  FaGoogle,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaUserPlus,
  FaWhatsapp,
} from "react-icons/fa";
import { SiteShell } from "../../src/components/GoogleAdsSite";
import { PHONE_NUMBER, WHATSAPP_LINK } from "../../src/lib/site-config";

export const metadata = {
  title: "Contact Yash Deliwala | Google Ads Expert in India",
  description:
    "Book a 1-on-1 Google Ads consultation (Rs. 1000) or contact Yash Deliwala directly via phone, email, or WhatsApp for Search Ads and PPC campaigns.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Yash Deliwala | Google Ads Expert in India",
    description:
      "Connect directly with Yash Deliwala for Google Search Ads, lead generation, conversion tracking, and PPC campaign management.",
    url: "https://yashdeliwala.com/contact",
    siteName: "Yash Google Ads Expert",
    images: ["/clients/yash-deliwala.jpeg"],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Yash Deliwala | Google Ads Expert in India",
    description:
      "Connect directly with Yash Deliwala for Google Search Ads, lead generation, and PPC campaign management.",
    images: ["/clients/yash-deliwala.jpeg"],
  },
};

export default function ContactPage() {
  const highlights = [
    "Direct Support — No junior account managers or outsourcing",
    "100% Transparent Lead, Call & Conversion Tracking",
    "Customized Strategies for Local & Pan-India Campaigns",
  ];

  return (
    <SiteShell>
      {/* Hero Section */}
      <section className="ads-hero">
        <div className="ads-hero__content">
          <p className="ads-eyebrow">
            <FaGoogle />
            Google Ads Expert &amp; PPC Consultant
          </p>
          <h1>Get in Touch with Yash Deliwala</h1>
          <p className="ads-hero__text">
            Looking to start a high-ROI Google Ads campaign or optimize your existing account? Book a 1-on-1 consultation (Rs. 1000) or message directly on WhatsApp.
          </p>

          <div style={{ margin: "20px 0", display: "flex", flexDirection: "column", gap: "10px" }}>
            {highlights.map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", fontWeight: "600", color: "#334155" }}>
                <FaCheckCircle style={{ color: "var(--ads-blue)", flexShrink: 0 }} />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="ads-actions">
            <a
              className="ads-button ads-button--primary"
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp /> Chat on WhatsApp
            </a>
            <a className="ads-button ads-button--secondary" href={`tel:${PHONE_NUMBER}`}>
              <FaPhoneAlt /> Call {PHONE_NUMBER}
            </a>
          </div>
        </div>

        {/* Profile Card */}
        <div className="ads-hero__media">
          <div className="ads-profile-card">
            <div className="ads-profile-card__avatar-wrap">
              <Image
                src="/clients/yash-deliwala.jpeg"
                alt="Yash Deliwala - Google Ads Expert in India"
                width={160}
                height={160}
                className="ads-profile-card__avatar"
                priority
              />
            </div>
            <h2>Yash Deliwala</h2>
            <p className="ads-profile-card__title">Google Ads Expert &amp; PPC Consultant</p>
            <p className="ads-profile-card__meta">
              <FaMapMarkerAlt /> Surat, Gujarat &amp; Pan-India
            </p>

            <a href="/vcf" className="ads-button ads-button--primary" style={{ width: "100%", justifyContent: "center", marginTop: "16px" }}>
              <FaUserPlus /> Save VCF Contact Card
            </a>
          </div>
        </div>
      </section>

      {/* Direct Contact Cards */}
      <section className="ads-section">
        <div className="ads-section__heading">
          <p className="ads-eyebrow">
            <FaPhoneAlt />
            Direct Channels
          </p>
          <h2>Connect via your preferred channel</h2>
        </div>

        <div className="ads-service-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          <a href={`tel:${PHONE_NUMBER}`} className="ads-card contact-channel-card" style={{ textDecoration: "none" }}>
            <div className="contact-icon-badge contact-icon-badge--phone">
              <FaPhoneAlt />
            </div>
            <h3>Direct Call</h3>
            <p style={{ fontWeight: "700", color: "#0f172a", fontSize: "16px", marginTop: "4px" }}>{PHONE_NUMBER}</p>
            <span style={{ fontSize: "13px", color: "var(--ads-blue)", fontWeight: "600", marginTop: "8px", display: "inline-block" }}>Tap to call now &rarr;</span>
          </a>

          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="ads-card contact-channel-card" style={{ textDecoration: "none" }}>
            <div className="contact-icon-badge contact-icon-badge--whatsapp">
              <FaWhatsapp />
            </div>
            <h3>WhatsApp</h3>
            <p style={{ fontWeight: "700", color: "#0f172a", fontSize: "16px", marginTop: "4px" }}>Instant Chat</p>
            <span style={{ fontSize: "13px", color: "#25d366", fontWeight: "600", marginTop: "8px", display: "inline-block" }}>Message on WhatsApp &rarr;</span>
          </a>

          <a href="mailto:yashdeliwala10@gmail.com" className="ads-card contact-channel-card" style={{ textDecoration: "none" }}>
            <div className="contact-icon-badge contact-icon-badge--email">
              <FaEnvelope />
            </div>
            <h3>Email</h3>
            <p style={{ fontWeight: "700", color: "#0f172a", fontSize: "15px", marginTop: "4px" }}>yashdeliwala10@gmail.com</p>
            <span style={{ fontSize: "13px", color: "var(--ads-blue)", fontWeight: "600", marginTop: "8px", display: "inline-block" }}>Send an email &rarr;</span>
          </a>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="ads-section ads-contact" id="contact-form">
        <div className="ads-contact__copy">
          <p className="ads-eyebrow">
            <FaGoogle />
            Google Ads Consultation
          </p>
          <h2>Need better Google Ads results in India?</h2>
          <p>
            Share your business, target location, monthly budget, and current ad goal. I will help you understand what to fix first and how to run your Google Ads more cleanly.
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
          <button className="ads-button ads-button--primary" type="submit" style={{ width: "100%", justifyContent: "center" }}>
            Submit Inquiry
          </button>
        </form>
      </section>
    </SiteShell>
  );
}
