import React from 'react';
import '../css/Intro.css';  
import photo2 from '../Photos/photo2.png'

const Intro = () => {
  return (
    <div className="intro-container"> 
      {/* Background decorations */}
      <div className="bg-decor-circle"></div>
      <div className="bg-decor-wave"></div>
      
      <section className="intro-section">
        <div className="intro-content"> 
          <div className="intro-text-container">
            <h1 className="intro-title">
              Welcome!
              <span className="title-underline"></span>
              <span className="title-underline-accent"></span>
            </h1>
            
            <p className="intro-text">
              to Life of Hope Community Center—a place where dreams are nurtured and futures are built. 
              We believe every child deserves a chance to shine, and through your support, we can create 
              lasting change in their lives. Join us today and be part of a powerful movement transforming 
              communities with love, hope, and purpose!
            </p>
          </div>
          
          <div className="intro-image-container">
            <div className="image-ship-decor"></div>
            <div className="image-corner-accent"></div>
            <img 
              src= {photo2}
              alt="Children at Life of Hope Community Center" 
              className="intro-image"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Intro;