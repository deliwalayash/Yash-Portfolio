"use client";

import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { PHONE_NUMBER, WHATSAPP_LINK } from "../lib/site-config";
import { trackConversion } from "../lib/conversions";

export function ContactHeroActions() {
  return (
    <div className="ads-actions">
      <a
        className="ads-button ads-button--primary"
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer"
        onClick={() => trackConversion("whatsapp")}
      >
        <FaWhatsapp /> Chat on WhatsApp
      </a>
      <a
        className="ads-button ads-button--secondary"
        href={`tel:${PHONE_NUMBER}`}
        onClick={() => trackConversion("call")}
      >
        <FaPhoneAlt /> Call {PHONE_NUMBER}
      </a>
    </div>
  );
}

export function ContactChannelCards() {
  return (
    <div className="ads-service-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
      <a
        href={`tel:${PHONE_NUMBER}`}
        onClick={() => trackConversion("call")}
        className="ads-card contact-channel-card"
        style={{ textDecoration: "none" }}
      >
        <div className="contact-icon-badge contact-icon-badge--phone">
          <FaPhoneAlt />
        </div>
        <h3>Direct Call</h3>
        <p style={{ fontWeight: "700", color: "#0f172a", fontSize: "16px", marginTop: "4px" }}>{PHONE_NUMBER}</p>
        <span style={{ fontSize: "13px", color: "var(--ads-blue)", fontWeight: "600", marginTop: "8px", display: "inline-block" }}>
          Tap to call now &rarr;
        </span>
      </a>

      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer"
        onClick={() => trackConversion("whatsapp")}
        className="ads-card contact-channel-card"
        style={{ textDecoration: "none" }}
      >
        <div className="contact-icon-badge contact-icon-badge--whatsapp">
          <FaWhatsapp />
        </div>
        <h3>WhatsApp</h3>
        <p style={{ fontWeight: "700", color: "#0f172a", fontSize: "16px", marginTop: "4px" }}>Instant Chat</p>
        <span style={{ fontSize: "13px", color: "#25d366", fontWeight: "600", marginTop: "8px", display: "inline-block" }}>
          Message on WhatsApp &rarr;
        </span>
      </a>

      <a href="mailto:yashdeliwala10@gmail.com" className="ads-card contact-channel-card" style={{ textDecoration: "none" }}>
        <div className="contact-icon-badge contact-icon-badge--email">
          <FaEnvelope />
        </div>
        <h3>Email</h3>
        <p style={{ fontWeight: "700", color: "#0f172a", fontSize: "15px", marginTop: "4px" }}>yashdeliwala10@gmail.com</p>
        <span style={{ fontSize: "13px", color: "var(--ads-blue)", fontWeight: "600", marginTop: "8px", display: "inline-block" }}>
          Send an email &rarr;
        </span>
      </a>
    </div>
  );
}
