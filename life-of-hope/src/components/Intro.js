import React from 'react';
import '../css/Intro.css';


const Intro = () => {
  return (
    <div className="intro-container">
      <section className="intro-section">
        <div className="intro-content">
          <div className="intro-text-container">
            <h1 className="intro-title">Welcome!</h1>
            <p className="intro-text">
              to Life of Hope Community Center—a place where dreams are nurtured and futures are built. 
              We believe every child deserves a chance to shine, and through your support, we can create 
              lasting change in their lives. Join us today and be part of a powerful movement transforming 
              communities with love, hope, and purpose!
            </p>
          </div>
          <div className="intro-image-container">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6vnM2cIFeqh6ji6yBGgXKLqcaBeO0KxY1SQ&s" 
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