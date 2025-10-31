import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../css/ImageSlider.css';   
import pic33 from '../Photos/pic33.jpg';  
import pic30 from '../Photos/pic30.jpeg'; 
import pic32 from '../Photos/pic32.jpeg'; 
const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const slides = [
    {
      image: pic33,
      title: 'Empowering Young Mothers',
      subtitle: 'Supporting teen moms through education and childcare',
      text: 'Our programs help young mothers complete their education while providing quality childcare'
    },
    {
      image: pic30,
      title: 'Bridging the Education Gap',
      subtitle: 'Equal opportunities for all children',
      text: 'We work to provide quality education resources to underserved communities'
    },
    {
      image: pic32,
      title: 'Community Development',
      subtitle: 'Building sustainable futures',
      text: 'Our community initiatives create long-term solutions for poverty alleviation'
    }
  ];

  const goToPrevSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentImageIndex(prevIndex => 
        prevIndex === 0 ? slides.length - 1 : prevIndex - 1
      );
      setFade(true);
    }, 300);
  };

  const goToNextSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentImageIndex(prevIndex => 
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
      setFade(true);
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`slider-image ${index === currentImageIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          {index === currentImageIndex && (
            <div className={`slider-content ${fade ? 'fade-in' : 'fade-out'}`}>
              <div className="content-wrapper">
                <h2 className="slider-title">{slide.title}</h2>
                <h3 className="slider-subtitle">{slide.subtitle}</h3>
                <p className="slider-text">{slide.text}</p>
              </div>
            </div>
          )}
        </div>
      ))}
      
      <button className="slider-button prev" onClick={goToPrevSlide}>
        <FaChevronLeft />
      </button>
      <button className="slider-button next" onClick={goToNextSlide}>
        <FaChevronRight />
      </button>
      
      <div className="slider-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;