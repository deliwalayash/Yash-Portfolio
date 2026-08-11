"use client";

import { useEffect } from "react";
import Link from "next/link";
import { FaCheckCircle, FaPhoneAlt, FaWhatsapp, FaHome } from "react-icons/fa";
import AdsHeader from "../../src/components/AdsHeader";
import { AdsFooter } from "../../src/components/GoogleAdsSite";
import FloatingContactButtons from "../../src/components/FloatingContactButtons";
import { PHONE_NUMBER, WHATSAPP_LINK } from "../../src/lib/site-config";
import {
  trackGoogleAdsConversion,
  handleWhatsAppClick as onWhatsAppClick,
  handleCallClick as onCallClick,
} from "../../src/lib/tracking";

export default function ThankYouPage() {
  useEffect(() => {
    // Fire Google Ads Page Load Conversion Event ONLY when /thank-you loads
    trackGoogleAdsConversion("AW-18373956835/QPGyCNzVwd8cEOOpsblE", 1.0, "INR");
  }, []);

  const handleWhatsAppClick = () => {
    onWhatsAppClick("Thank You Page WhatsApp Click");
  };

  const handleCallClick = () => {
    onCallClick("Thank You Page Call Click");
  };

  return (
    <div className="ads-site">
      <FloatingContactButtons />
      <AdsHeader variant="inner" />

      <main className="thank-you-page">
        <div className="thank-you-container">
          <div className="thank-you-card">
            {/* Visual Success Icon */}
            <div className="thank-you-icon-wrapper">
              <FaCheckCircle className="thank-you-icon" />
            </div>

            {/* Heading & Subheading */}
            <h1 className="thank-you-heading">
              Thank You! Your Request Has Been Received.
            </h1>

            <p className="thank-you-subheading">
              Thanks for reaching out. I'll review your requirements and get back to you shortly.
            </p>

            <p className="thank-you-response-note">
              Usually, I respond within 2 hours.
            </p>

            {/* CTA Buttons */}
            <div className="thank-you-actions">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                onClick={handleWhatsAppClick}
                className="ads-button ads-button--whatsapp thank-you-btn thank-you-btn--whatsapp"
              >
                <FaWhatsapp /> Chat on WhatsApp
              </a>

              <a
                href={`tel:${PHONE_NUMBER}`}
                onClick={handleCallClick}
                className="ads-button ads-button--primary thank-you-btn thank-you-btn--call"
              >
                <FaPhoneAlt /> Call Now
              </a>
            </div>

            {/* Back to Home Button */}
            <div className="thank-you-home-action">
              <Link href="/" className="ads-button ads-button--secondary thank-you-home-btn">
                <FaHome /> Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>

      <AdsFooter />
    </div>
  );
}
