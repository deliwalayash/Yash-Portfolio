"use client";

import { useState } from "react";

export default function HomeContactForm({ placeholderMessage }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (typeof window !== "undefined") {
      if (typeof window.gtag === "function") {
        window.gtag("event", "home_form_submit", {
          event_category: "Lead Generation",
          event_label: "Home Page Contact Form Submission",
        });
      }
      if (Array.isArray(window.dataLayer)) {
        window.dataLayer.push({
          event: "home_form_submit",
          event_category: "Lead Generation",
          event_label: "Home Page Contact Form Submission",
        });
      }
    }

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        window.location.href = "/thank-you";
      } else {
        setError("Submission failed. Please try again or connect via WhatsApp.");
        setLoading(false);
      }
    } catch (err) {
      console.error("Form submit error:", err);
      setError("Something went wrong. Please try again or connect via WhatsApp.");
      setLoading(false);
    }
  };

  return (
    <form className="ads-form" onSubmit={handleSubmit}>
      <input type="hidden" name="access_key" value="2c6efe99-dc5c-4acc-b523-656523121182" />
      <input type="text" name="name" required placeholder="Your name" />
      <input type="email" name="email" required placeholder="Email address" />
      <input type="tel" name="phone" placeholder="Phone or WhatsApp number" />
      <textarea
        name="message"
        required
        rows={5}
        placeholder={placeholderMessage || "Tell me about your business and Google Ads goal"}
      />
      {error && <p style={{ color: "#ef4444", fontSize: "14px", margin: "0" }}>{error}</p>}
      <button type="submit" disabled={loading}>
        {loading ? "Sending..." : "Send Enquiry"}
      </button>
    </form>
  );
}
