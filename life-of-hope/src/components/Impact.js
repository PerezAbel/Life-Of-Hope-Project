import React from 'react';
import '../css/Impact.css';

const Impact = () => {
  return (
    <div className="impact-container">
      {/* White decorative elements */}
      <div className="decor-circle"></div>
      <div className="decor-wave"></div>
      
      <div className="content-wrapper">
        <div className="story-header">
          <h1 className="story-title">
            Our Story
            <span className="title-underline"></span>
          </h1>
          <p className="story-subtitle">Watch how we're transforming lives in our community</p>
        </div>

        <div className="video-container">
          <div className="video-placeholder">
            <div className="play-button">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 5V19L19 12L8 5Z" fill="white"/>
              </svg>
            </div>
            <div className="video-caption">Play Our Story</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;