import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { PHONE_NUMBER, WHATSAPP_LINK } from "../lib/site-config";

const FloatingContactButtons = () => {
  return (
    <>
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
    </>
  );
};

export default FloatingContactButtons;
