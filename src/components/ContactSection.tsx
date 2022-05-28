import React from "react";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <div className="contact-section-wrapper">
      <div className="contact-section-info">
        <h3 className="contact-section-title">Yhteystiedot</h3>
        <h5 className="contact-section-item">Kiiltäväx Oy (y-tunnus)</h5>
        <h5 className="contact-section-item">Osoite</h5>
        <h5 className="contact-section-item">12345 Helsinki</h5>
        <h5 className="contact-section-item">kiiltavax@gmail.com</h5>
        <h5 className="contact-section-item">+358 123 4567</h5>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactSection;
