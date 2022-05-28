import React from "react";

const ContactForm = () => {
  return (
    <div className="contact-form-wrapper">
      <h3>Ota yhteyttä</h3>
      <input
        className="contact-form-input"
        type="text"
        placeholder="Nimi"
        required
      />
      <input
        className="contact-form-input"
        type="text"
        placeholder="Puhelin"
        required
      />
      <input
        className="contact-form-input"
        type="text"
        placeholder="Sähköposti"
        required
      />
      <textarea
        required
        className="contact-form-input contact-form-message-input"
        placeholder="Kirjoita viestisi tähän"
      />
      <button className="send-button">Lähetä</button>
    </div>
  );
};

export default ContactForm;
