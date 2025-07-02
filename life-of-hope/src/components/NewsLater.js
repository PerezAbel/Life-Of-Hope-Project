import React from 'react';
import '../css/NewsLater.css';

const Newsletter = () => {
  return (
    <section className="newsletter-section">
      <div className="newsletter-overlay">
        <h2>Subscribe to Our Newsletter!</h2>
        <form className="newsletter-form">
          <input type="email" placeholder="Email *" required />
          <button type="submit">SUBSCRIBE!</button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
