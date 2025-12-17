import React, { useState, useRef } from 'react';
import '../css/Impact.css';
import vid1 from '../Photos/vid1.mp4';
import vid2 from '../Photos/vid2.mp4';

const Impact = () => {
  const videos = [vid1, vid2];
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    // Automatically switch to next video when one finishes
    const nextVideo = (currentVideo + 1) % videos.length;
    setCurrentVideo(nextVideo);
  };

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

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

        <div className="video-container" onClick={handlePlayClick}>
          <video
            ref={videoRef}
            src={videos[currentVideo]}
            controls
            onEnded={handleVideoEnd}
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default Impact;
