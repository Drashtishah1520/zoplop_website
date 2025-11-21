import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="https://customer-assets.emergentagent.com/job_5d232d78-efa2-4fbe-aeed-dce9cc654a5e/artifacts/mdh1ayxy_ZopLop_Logo.svg" alt="ZopLop" className="footer-logo" />
            <p className="footer-tagline">Choose Canadian. Choose Community. Choose Zoplop.</p>
            <div className="footer-contact">
              <p className="contact-phone">+1 800-ZOPLOP-1</p>
              <p className="contact-email">support@zoplop.ca</p>
            </div>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-list">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Drive with Us</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-list">
              <li><a href="#">Standard Rides</a></li>
              <li><a href="#">Women-for-Women</a></li>
              <li><a href="#">Group Rides</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Support</h4>
            <ul className="footer-list">
              <li><a href="#contact">Contact</a></li>
              <li><a href="#safety">Safety</a></li>
              <li><a href="#">Help Center</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>© 2025 Zoplop Inc. All Rights Reserved. Proudly Canadian-Owned.</p>
          </div>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <span className="separator">•</span>
            <a href="#">Terms & Conditions</a>
          </div>
          <div className="footer-app-links">
            <a href="#" className="footer-app-btn">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" />
            </a>
            <a href="#" className="footer-app-btn">
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;