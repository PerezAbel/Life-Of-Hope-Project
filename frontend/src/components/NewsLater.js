import React from 'react';
import '../css/NewsLater.css';

const Newsletter = () => {
  return (
    <section className="newsletter-section">
      {/* Background Decorations */}
      <div className="parachute-decor"></div>
      <div className="yellow-circle-decor"></div>
      <div className="blue-wave-decor"></div>
      
      <div className="newsletter-container">
        <div className="newsletter-content">
          <h2 className="newsletter-title">
            Subscribe to Our Newsletter!
            <span className="title-decoration">
              <span className="blue-line"></span>
              <span className="yellow-dot"></span>
            </span>
          </h2>
          
          <p className="newsletter-subtitle">
            Stay updated with our latest projects and success stories
          </p>
          
          <form className="newsletter-form">
            <div className="input-container">
              <input 
                type="email" 
                placeholder="Your email address *" 
                required 
                className="newsletter-input"
              />
              <div className="input-yellow-accent"></div>
            </div>
            <button type="submit" className="newsletter-button">
              SUBSCRIBE NOW
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;