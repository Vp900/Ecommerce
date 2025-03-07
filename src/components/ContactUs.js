import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-container">
      
      {/* Contact Info & Form Row */}
      <div className="contact-content">
        
        {/* Contact Info */}
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>Email: example@example.com</p>
          <p>Phone: +91 9004207813</p>
          <p>Address: 123 Street, City, Country</p>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <h2>Get in Touch</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="4" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

      </div>

      {/* Full-Width Map */}
      <div className="contact-map">
        <h2>Our Location</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509315!2d144.95373631531666!3d-37.81627944202159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce840!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1619923785216!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

    </div>
  );
};

export default ContactUs;
