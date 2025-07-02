import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/NavBar.css';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/" className="navbar-logo">🌿 Hope</Link>
        </div>

        <div className="navbar-center">
          <Link to="/home" className="navbar-link">Home</Link>
          <Link to="/gallery" className="navbar-link">About Us</Link>
          <Link to="/contact" className="navbar-link">Gallery</Link>
          <Link to="/contact" className="navbar-link">More</Link>
        </div>

        <div className="navbar-right">
          <Link to="/contact">
            <button className="donate-button">Donate</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
