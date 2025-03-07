import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
       <div className="topbar">
      {/* Left Section: Contact & Timing */}
      <div className="left-section">
        <span><i className="fas fa-phone-alt"></i> +919004207813,  +919598548727</span>
        <span><i className="fas fa-envelope"></i> vikaspal9004@gmail.com</span>

      </div>

      {/* Right Section: Social Media Icons */}
      <div className="right-section">
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-google"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-pinterest"></i></a>
      </div>
    </div>
      <div className="header-container">
        
        {/* Logo */}
        <div className="logo">
          <Link to="/">Ecommerce</Link>
        </div>

        {/* Navigation */}
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </nav>

        {/* Search and Icons */}
        <div className="search-icons">
          <div className="search-container">
            <input type="text" placeholder="Search products..." />
            <i className="fas fa-search"></i>
          </div>

          <div className="icons">
            <button><i className="fas fa-shopping-bag"></i></button>
            <button><i className="fas fa-user"></i></button>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;
