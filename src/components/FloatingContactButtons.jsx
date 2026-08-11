import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { PHONE_NUMBER, WHATSAPP_LINK } from "../lib/site-config";
import { handleCallClick, handleWhatsAppClick } from "../lib/tracking";

const FloatingContactButtons = () => {
  return (
    <>
      <a
        className="floating-contact-button floating-contact-button--phone"
        href={`tel:${PHONE_NUMBER}`}
        onClick={() => handleCallClick("Floating Call Click")}
        aria-label="Call Yash Deliwala"
      >
        <FaPhoneAlt />
      </a>
      <a
        className="floating-contact-button floating-contact-button--whatsapp"
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => handleWhatsAppClick("Floating WhatsApp Click")}
        aria-label="Message Yash Deliwala on WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </>
  );
};

export default FloatingContactButtons;
