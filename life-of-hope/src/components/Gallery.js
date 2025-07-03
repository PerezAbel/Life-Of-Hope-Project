import React from 'react';
import '../css/Gallery.css';

const Gallery = () => {
  // Sample gallery images with different height classes
  const galleryImages = [
    {
      id: 1,
      src: 'https://www.scfirststeps.org/media/xo3ew0ic/2019_12_12_anw6584.jpg',
      alt: 'Community event 2023',
      caption: 'Annual community gathering',
      height: 'short' // Options: short, medium, tall
    },
    {
      id: 2,
      src: '/path-to-image2.jpg',
      alt: 'Education program',
      caption: 'Children learning in our education center',
      height: 'medium'
    },
    {
      id: 3,
      src: '/path-to-image3.jpg',
      alt: 'Volunteers at work',
      caption: 'Our dedicated volunteer team',
      height: 'short'
    },
    {
      id: 4,
      src: '/path-to-image4.jpg',
      alt: 'Family support',
      caption: 'Supporting families in need',
      height: 'medium'
    },
    {
      id: 5,
      src: '/path-to-image5.jpg',
      alt: 'Fundraising event',
      caption: '2023 charity gala',
      height: 'tall'
    },
    {
      id: 6,
      src: '/path-to-image6.jpg',
      alt: 'New facility',
      caption: 'Our new community center',
      height: 'short'
    }
  ];

  return (
    <div className="gallery-page">
      <header className="gallery-header">
        <h1>Gallery</h1>
        <p className="gallery-intro">
          Witness the powerful moments captured in images, showcasing the impact of our initiatives and projects.
        </p>
      </header>

      <div className="gallery-grid">
        {galleryImages.map((image) => (
          <div 
            className={`gallery-item ${image.height}`} 
            key={image.id}
          >
            <img 
              src={image.src} 
              alt={image.alt}
              className="gallery-image"
            />
            <div className="image-caption">{image.caption}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;