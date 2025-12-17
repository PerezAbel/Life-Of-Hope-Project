import React from 'react';
import { FaHandHoldingHeart, FaHandsHelping, FaUserFriends } from 'react-icons/fa';
import '../css/Container.css';
import { Link } from 'react-router-dom';

const Container = () => {
  return (
    <div className="container-wrapper">
      <div className="container-overlap">
        <div className="container-grid">
          {/* Donation Card */}
          <div className="container-card donation-card">
            <div className="card-icon">
              <FaHandHoldingHeart />
            </div>
            <h3>Make Donation</h3>
            <p>Help today because tomorrow you may be the one who needs helping!</p>  
            <Link to="/donate" className="nav-link">
            <button className="container-button">
              Donate 
              <span className="button-arrow">→</span>
            </button> 
            </Link>
          </div>

          {/* Fundraising Card */}
          <div className="container-card fundraising-card">
            <div className="card-icon">
              <FaHandsHelping />
            </div>
            <h3>Fundraising</h3>
            <p>Help today because tomorrow you may be the one who needs helping!</p>  
             <Link to="/donate" className="nav-link">
            <button className="container-button">
              Read More
              <span className="button-arrow">→</span>
            </button> 
            </Link>
          </div>

          {/* Volunteer Card */}
          <div className="container-card volunteer-card">
            <div className="card-icon">
              <FaUserFriends />
            </div>
            <h3>Become A Volunteer</h3>
            <p>Help today because tomorrow you may be the one who needs helping!</p>  
             <Link to="/donate" className="nav-link">
            <button className="container-button">
              Read More
              <span className="button-arrow">→</span>
            </button> 
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;