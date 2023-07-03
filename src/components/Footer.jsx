import React from 'react';
import './styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-column">
        <h4 className="footer-heading">Company</h4>
        <ul className="footer-list">
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Careers</li>
          <li>Terms of Service</li>
        </ul>
      </div>
      <div className="footer-column">
        <h4 className="footer-heading">Resources</h4>
        <ul className="footer-list">
          <li>FAQ</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="footer-column">
        <h4 className="footer-heading">Connect With Us</h4>
        <ul className="footer-list">
          <li>Facebook</li>
          <li>Twitter</li>
          <li>LinkedIn</li>
          <li>Instagram</li>
        </ul>
      </div>
      <div className="footer-column">
        <h4 className="footer-heading">Subscribe to Our Newsletter</h4>
        <form className="footer-form">
          <input type="email" placeholder="Enter your email" className="footer-input" />
          <button type="submit" className="footer-button">Subscribe</button>
        </form>
      </div>
    </footer>
  );
  
};

export default Footer;
