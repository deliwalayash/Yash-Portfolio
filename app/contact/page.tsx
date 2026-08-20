import Image from "next/image";
import {
  FaCheckCircle,
  FaGoogle,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaUserPlus,
} from "react-icons/fa";
import { SiteShell } from "../../src/components/GoogleAdsSite";
import { PHONE_NUMBER } from "../../src/lib/site-config";
import ContactForm from "../../src/components/ContactForm";
import { ContactHeroActions, ContactChannelCards } from "../../src/components/ContactChannels";

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

          <ContactHeroActions />
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

        <ContactChannelCards />
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

        <ContactForm />
      </section>
    </SiteShell>
  );
}

