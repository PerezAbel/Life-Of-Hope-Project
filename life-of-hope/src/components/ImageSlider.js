import React, { useState, useEffect } from 'react';
import '../css/ImageSlider.css';

const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    'https://www.wvi.org/sites/default/files/teen%20moms.jpg',
    'https://mg.co.za/wp-content/uploads/2019/03/1effe0b2-00-rich-school-poor-school-the-great-divide-persists.jpeg',
    'https://storage.needpix.com/rsynced_images/africa-3828790_1280.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="slider-container">
      {images.map((image, index) => (
        <div 
          key={index}
          className={`slider-image ${index === currentImageIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      <div className="slider-overlay"></div>
    </div>
  );
};

export default ImageSlider;