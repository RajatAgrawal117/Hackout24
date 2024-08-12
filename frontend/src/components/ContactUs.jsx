import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <section className="contact-section">
      <div className="contact-content">
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-description">We'd love to hear from you! Reach out to us with any questions or feedback.</p>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" className="contact-input"/>
          <input type="email" placeholder="Your Email" className="contact-input"/>
          <textarea placeholder="Your Message" className="contact-textarea"></textarea>
          <button type="submit" className="contact-button">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
