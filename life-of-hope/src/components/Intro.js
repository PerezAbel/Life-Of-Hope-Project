import React from 'react';
import '../css/Intro.css';


const Intro = () => {
  return (
    <div className="intro-container"> 
     <h1 className="intro-title">Welcome!</h1>
      <section className="intro-section">
        <div className="intro-content"> 
         
          <div className="intro-text-container">
            
            <p className="intro-text">
              to Life of Hope Community Center—a place where dreams are nurtured and futures are built. 
              We believe every child deserves a chance to shine, and through your support, we can create 
              lasting change in their lives. Join us today and be part of a powerful movement transforming 
              communities with love, hope, and purpose!
            </p>
          </div>
          <div className="intro-image-container">
            <img 
              src="https://www.africaexpeditionsupport.com/wp-content/uploads/2015/11/communityservice-group-photo-kenya.jpg" 
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