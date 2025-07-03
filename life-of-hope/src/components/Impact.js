import React from 'react';
import '../css/Impact.css';

const Impact = () => {
  return (
    <div className="impact-container" style={{
      backgroundImage: 'url(https://globalhealth.uw.edu/sites/default/files/styles/content_image/public/Children%20help%20with%20washing%20dishes%2C%20Niger_Joris-Jan%20van%20den%20Boom-flickr.jpg?itok=pEkUujcJ)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      position: 'relative',
    }}>
      {/* Dark overlay */}
      <div className="overlay"></div>

      {/* Content positioned above the overlay */}
      <div className="content-wrapper">
        <h2 className="story-title">Our Story</h2>
        
        <div className="video-container">
          <div className="video-placeholder">
            <div className="play-button">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="https://www.youtube.com/shorts/Q9C_BiLKJuQ">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2"/>
                <path d="M10 8L16 12L10 16V8Z" fill="white"/>
              </svg>
            </div>
            <p className="video-caption">Click to watch our story</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;