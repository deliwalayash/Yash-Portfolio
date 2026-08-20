"use client";

import { useState } from "react";
import { trackConversion } from "../lib/conversions";

export default function ContactForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

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
      console.error("Form error:", err);
    } finally {
      setLoading(false);
    }
  };

  if (formSubmitted) {
    return (
      <div className="ads-form" style={{ background: "#ecfdf5", border: "1px solid #6ee7b7", borderRadius: "16px", padding: "32px", textAlign: "center" }}>
        <h3 style={{ color: "#065f46", fontSize: "20px", fontWeight: "800", marginBottom: "8px" }}>Inquiry Received!</h3>
        <p style={{ color: "#047857", fontSize: "14.5px" }}>Yash will review your business details and contact you shortly.</p>
      </div>
    );
  }

  return (
    <form className="ads-form" onSubmit={handleSubmit}>
      <input type="hidden" name="access_key" value="2c6efe99-dc5c-4acc-b523-656523121182" />
      <input type="text" name="name" required placeholder="Your name" />
      <input type="email" name="email" required placeholder="Email address" />
      <input type="tel" name="phone" placeholder="Phone or WhatsApp number" />
      <textarea name="message" required rows={5} placeholder="Tell me about your business and Google Ads goal" />
      <button disabled={loading} className="ads-button ads-button--primary" type="submit" style={{ width: "100%", justifyContent: "center" }}>
        {loading ? "Submitting..." : "Submit Inquiry"}
      </button>
    </form>
  );
}
