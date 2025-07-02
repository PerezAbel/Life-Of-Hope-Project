import React, { useRef } from 'react';
import '../css/Gallery.css';

function Gallery() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Sample causes data - replace with your actual content
  const causes = [
    {
      id: 1,
      title: "Education for All",
      description: "Providing school supplies and tuition for underprivileged children",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      title: "Clean Water Initiative",
      description: "Building wells in communities without access to clean water",
      image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      title: "Women Empowerment",
      description: "Vocational training and mentorship programs for young women",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 4,
      title: "Hunger Relief",
      description: "Weekly food distribution to families in need",
      image: "https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 5,
      title: "Medical Outreach",
      description: "Free health screenings and medication for rural communities",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <div className="current-causes">
      <div className="section-header">
        <h2>Current causes</h2>
        <p>Innovative your help</p>
      </div>

      <div className="causes-container">
        <button 
          className="scroll-button left" 
          onClick={() => scroll('left')}
          aria-label="Scroll left"
        >
          &lt;
        </button>

        <div className="causes-scroll" ref={scrollRef}>
          {causes.map(cause => (
            <div key={cause.id} className="cause-card">
              <div className="card-image">
                <img src={cause.image} alt={cause.title} />
              </div>
              <div className="card-content">
                <h3>{cause.title}</h3>
                <p>{cause.description}</p>
                <button className="support-button">Support this cause</button>
              </div>
            </div>
          ))}
        </div>

        <button 
          className="scroll-button right" 
          onClick={() => scroll('right')}
          aria-label="Scroll right"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Gallery;