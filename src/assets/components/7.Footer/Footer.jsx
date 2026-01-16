import React from "react";
import "./Footer.css"; // Import the CSS file
import { FaPhone, FaEnvelope, FaFax, FaPhoneSquareAlt } from "react-icons/fa"; // Import icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section - Company Info */}
        <div className="footer-left">
          <img src="/assets/logo.png" alt="Y.A Logo" className="footer-logo" />
          <p className="footer-company-name">Y.A Company</p>
        </div>

        {/* Center Section - Navigation */}
        <div className="footer-nav">
          <a href="/#home">Home</a>
          <a href="/#service">Service</a>
          <a href="/#project">Project</a>
          <a href="/#contact">Contact</a>
        </div>

        {/* Right Section - Contact Info */}
        <div className="footer-contact">
          <p>123 Main Street, City, Country</p>
          <p>
            <FaPhoneSquareAlt /> +123-456-7890
          </p>
          <p>
            <FaPhone /> +123-456-7891
          </p>
          <p>
            <FaFax /> +123-456-7892
          </p>
          <p>
            <FaEnvelope /> contact@y.acompany.com
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Y.A Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
