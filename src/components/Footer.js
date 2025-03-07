import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>We provide high-quality products with the best service. Stay connected with us for the latest updates. Our commitment is to deliver excellence and ensure customer satisfaction. Follow us for new arrivals, exclusive deals, and exciting offers.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        
      {/* Contact Info */}
      <div className="footer-section contact">
        <h2>Contact Us</h2>
        <p><b>Address:</b> Wadala East Mumbai</p>
        <p><b>Email:</b> vikaspal9004@gmail.com</p>
        <p><b>Phone: </b>+91 9004207813</p>
        </div>

        {/* Social Media Icons */}
        <div className="footer-section social">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>&copy; 2025 Your Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
