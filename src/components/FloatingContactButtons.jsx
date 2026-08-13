import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { PHONE_NUMBER, WHATSAPP_LINK } from "../lib/site-config";

const FloatingContactButtons = () => {
  return (
    <>
      {/* Desktop Floating Action Buttons */}
      <div className="desktop-floating-buttons">
        <a
          className="floating-contact-button floating-contact-button--phone"
          href={`tel:${PHONE_NUMBER}`}
          aria-label="Call Yash Deliwala"
        >
          <FaPhoneAlt />
        </a>
        <a
          className="floating-contact-button floating-contact-button--whatsapp"
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Message Yash Deliwala on WhatsApp"
        >
          <FaWhatsapp />
        </a>
      </div>

      {/* Mobile Full-Width Sticky Bottom Action Bar */}
      <div className="mobile-bottom-action-bar">
        <a
          className="mobile-action-btn mobile-action-btn--call"
          href={`tel:${PHONE_NUMBER}`}
          aria-label="Call Yash Deliwala"
        >
          <FaPhoneAlt className="mobile-action-btn__icon" />
          <span>Call Now</span>
        </a>
        <a
          className="mobile-action-btn mobile-action-btn--whatsapp"
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Message Yash Deliwala on WhatsApp"
        >
          <FaWhatsapp className="mobile-action-btn__icon" />
          <span>WhatsApp</span>
        </a>
      </div>
    </>
  );
};

export default FloatingContactButtons;

