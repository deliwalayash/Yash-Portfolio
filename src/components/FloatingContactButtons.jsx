import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const PHONE_NUMBER = "+919712952456";

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
        href={`https://wa.me/${PHONE_NUMBER.replace("+", "")}`}
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
