import React from 'react';
import './DownloadAppSection.css';

const DownloadAppSection = () => {
  return (
    <section className="download-app-section">
      <div className="section-container">
        <div className="download-grid">
          <div className="download-content">
            <h2 className="download-title">Download the App</h2>
            <div className="download-block">
              <h3 className="download-subtitle">Rider App:</h3>
              <div className="app-buttons">
                <a href="#" className="app-store-btn">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on App Store" />
                </a>
                <a href="#" className="app-store-btn">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" />
                </a>
              </div>
              <div className="promo-badge">
                <p>First ride <strong>FREE</strong> (up to $15 value) with code <strong className="promo-code">WELCOME2025</strong></p>
              </div>
            </div>
          </div>
          <div className="download-image">
            <img src="https://images.unsplash.com/photo-1739271933163-8dcc7c8e8a3e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBzbWFydHBob25lJTIwaGFwcHl8ZW58MHx8fHwxNzYzNzI2MTEwfDA&ixlib=rb-4.1.0&q=85" alt="Download App" className="promo-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadAppSection;