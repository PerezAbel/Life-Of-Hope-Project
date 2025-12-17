import React from 'react';
import '../css/LatestNews.css';

const NewsSection = () => {
  const newsItems = [
    {
      id: 1,
      title: "New Education Center Opens in Nairobi",
      excerpt: "Our new facility will serve over 200 children daily with after-school programs and tutoring.",
      date: "June 15, 2023",
      image: "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      title: "Annual Charity Run Raises 5M KES",
      excerpt: "Community members came together to support our youth programs through this year's marathon.",
      date: "April 2, 2023",
      image: "https://ehospice.com/wp-content/uploads/2018/07/7f2870c5a68685af45d0a87202bd56f0.jpg"
    },
    {
      id: 3,
      title: "Volunteer of the Year Awarded",
      excerpt: "Recognizing James Mwangi for his 500+ hours of service to our mentorship program.",
      date: "February 28, 2023",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <div className="news-section">
      {/* Background Decorations */}
      <div className="news-bg-decor-1"></div>
      <div className="news-bg-decor-2"></div>
      <div className="news-bg-pattern"></div>
      
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Latest News</h2>
          <div className="title-decoration">
            <div className="blue-line"></div>
            <div className="yellow-dot"></div>
            <div className="blue-wave"></div>
          </div>
        </div>

        <div className="news-grid">
          {newsItems.map(item => (
            <div key={item.id} className="news-card">
              {/* Card Decorations */}
              <div className="card-yellow-accent"></div>
              <div className="card-blue-accent"></div>
              <div className="card-corner-decor"></div>
              
              <div className="news-image">
                <img src={item.image} alt={item.title} />
                <div className="image-overlay"></div>
              </div>
              <div className="news-content">
                <div className="news-date">{item.date}</div>
                <h3 className="news-title">{item.title}</h3>
                <p className="news-excerpt">{item.excerpt}</p>
                <a href="#" className="news-link">
                  More News
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsSection;