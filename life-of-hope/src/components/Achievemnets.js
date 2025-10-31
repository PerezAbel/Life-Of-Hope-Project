import React, { useState, useEffect } from 'react';
import '../css/Achievements.css';

const LifeOfHope = () => {
  // Testimonial slider data with corresponding images
  const testimonials = [
    {
      id: 1,
      text: "Life of Hope gave my family the support we needed when no one else would. Forever grateful!",
      author: "Sarah Johnson",
      role: "Foster Parent",
      image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      text: "Because of this organization, I graduated high school and am now in college. They changed my life.",
      author: "Michael Chen",
      role: "Former Foster Youth",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      text: "The counseling services helped me heal from trauma and become a better parent to my children.",
      author: "Maria Gonzalez",
      role: "Biological Parent",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    }
  ];

  // Achievement stats (converted dollars to Kenyan shillings at ~100:1 rate)
  const stats = [
    { number: 127, label: "Projects Completed" },
    { number: 845, label: "Children Rescued" },
    { number: 312, label: "Teen Girls Assisted" },
    { number: 2150, label: "Total Kids Impacted" },
    { number: 125000000, label: "Funds Raised (KES)" } // ~1.25M USD converted to KES
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [counts, setCounts] = useState(stats.map(stat => 0));

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Animate counting up
  useEffect(() => {
    const duration = 2000;
    const startTime = Date.now();
    
    const animateCounts = () => {
      const progress = Math.min(1, (Date.now() - startTime) / duration);
      
      setCounts(stats.map(stat => Math.floor(progress * stat.number)));

      if (progress < 1) {
        requestAnimationFrame(animateCounts);
      }
    };

    animateCounts();
  }, []);

  return (
    <div className="life-of-hope-container">
      {/* Yellow background decorations */}
      <div className="bg-decor-1"></div>
      <div className="bg-decor-2"></div>
      
      {/* Testimonial Slider Section */}
      {/* <div className="testimonial-section">
        <div className="section-yellow-border"></div>
        
        <div className="testimonial-content">
          <div className="section-header">
            <h2 className="section-title">Voices of Hope</h2>
            <div className="title-decoration">
              <div className="blue-line"></div>
              <div className="yellow-dot"></div>
            </div>
          </div>
          
          <div className="testimonial-slider">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`testimonial-slide ${index === currentTestimonial ? 'active' : ''}`}
              >
                <div className="yellow-quote-mark">"</div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author">
                  <p className="author-name">{testimonial.author}</p>
                  <p className="author-role">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="slider-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>
        
        <div className="testimonial-image-container">
          <div className="yellow-circle-bg"></div>
          <div className="image-frame">
            <img 
              src={testimonials[currentTestimonial].image} 
              alt={testimonials[currentTestimonial].author} 
            />
          </div>
          <div className="image-yellow-accent"></div>
        </div>
      </div> */}

      {/* Our Impact Section */}
      <div className="impact-section">
        <div className="section-yellow-border"></div>
        <div className="impact-content">
          <div className="section-header">
            <h2 className="section-title">Our Impact</h2>
            <div className="title-decoration">
              <div className="blue-line"></div>
              <div className="yellow-dot"></div>
              <div className="blue-wave"></div>
            </div>
          </div>
          
          <p className="impact-description">
            We have an impeccable reputation for the support we provide our foster children and families. 
            We maintain frequent, consistent contact.
          </p>
          
          <div className="years-container">
            <div className="years-range">2011 - Present</div>
            <div className="years-count">14</div>
            <div className="years-label">Years of Service</div>
          </div>
          
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={stat.label} className="stat-item">
                <div className="stat-number">
                  {stat.label.includes('KES') ? 'KES ' : ''}
                  {counts[index].toLocaleString()}
                </div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-decoration"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifeOfHope;