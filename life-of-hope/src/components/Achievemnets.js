import React, { useState, useEffect } from 'react';
import '../css/Achievements.css';

const LifeOfHope = () => {
  // Testimonial slider data
  const testimonials = [
    {
      id: 1,
      text: "Life of Hope gave my family the support we needed when no one else would. Forever grateful!",
      author: "Sarah Johnson",
      role: "Foster Parent"
    },
    {
      id: 2,
      text: "Because of this organization, I graduated high school and am now in college. They changed my life.",
      author: "Michael Chen",
      role: "Former Foster Youth"
    },
    {
      id: 3,
      text: "The counseling services helped me heal from trauma and become a better parent to my children.",
      author: "Maria Gonzalez",
      role: "Biological Parent"
    }
  ];

  // Achievement stats
  const stats = [
    { number: 127, label: "Projects Completed" },
    { number: 845, label: "Children Rescued" },
    { number: 312, label: "Teen Girls Assisted" },
    { number: 2150, label: "Total Kids Impacted" },
    { number: 1250000, label: "Funds Raised ($)" }
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
      {/* Testimonial Slider Section */}
      <div className="testimonial-section">
        <div className="testimonial-content">
          <h2 className="section-title">Voices of Hope</h2>
          
          <div className="testimonial-slider">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`testimonial-slide ${index === currentTestimonial ? 'active' : ''}`}
              >
                <p className="testimonial-text">"{testimonial.text}"</p>
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
        
        <div className="testimonial-image">
          <img 
            src="https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
            alt="Happy family" 
          />
        </div>
      </div>

      {/* Our Impact Section */}
      <div className="impact-section">
        <div className="impact-content">
         
        </div>
        
        <div className="impact-stats"> 
           <h2 className="section-title">Our Impact</h2>
          <p className="impact-description">
            We have an impeccable reputation for the support we provide our foster children and families. 
            We maintain frequent, consistent contact.
          </p>
          
          
          <div className="years-range">2011-Present</div>
          <div className="years-count">14</div>
          <div className="years-label">Years of Service</div>
          
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={stat.label} className="stat-item">
                <div className="stat-number">
                  {stat.label.includes('$') ? '$' : ''}
                  {counts[index].toLocaleString()}
                  {stat.label === 'Years of Service' && '+'}
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifeOfHope;