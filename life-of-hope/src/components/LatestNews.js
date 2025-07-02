import React from "react";
import "../css/LatestNews.css"; // Assume we'll create this CSS file

const LatestNews = () => {
  const newsItems = [
    {
      title: "Love is Real",
      category: "PRESS RELEASES",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum massa vel enim ut, finibus et nunc.",
      linkText: "Read More"
    },
    {
      title: "Children Need Care",
      category: "EVENTS",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum massa vel enim ut, finibus et nunc.",
      linkText: "Read More"
    },
    {
      title: "Foster Care",
      category: "EVENTS",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum massa vel enim ut, finibus et nunc.",
      linkText: "Read More"
    },
    {
      title: "Story About Hope",
      category: "PRESS RELEASES",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum massa vel enim ut, finibus et nunc.",
      linkText: "Read More"
    }
  ];

  return (
    <div className="latest-news-container">
      <div className="section-header">
        <h2>STAY CONNECTED</h2>
        <h1>Latest News & Events</h1>
      </div>
      
      <div className="news-grid">
        {newsItems.map((item, index) => (
          <div className="news-card" key={index}>
            <h3>{item.title}</h3>
            <span className="category">{item.category}</span>
            <p>{item.description}</p>
            <a href="#" className="read-more">{item.linkText}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;