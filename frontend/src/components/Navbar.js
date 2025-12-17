import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/NavBar.css';
import Logo from '../Projects/Logo.png';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.dropdown') && !e.target.closest('.mobile-menu-button')) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      {/* Decorative elements */}
      <div className="navbar-decorations">
        <div className="navbar-top-border"></div>
        <div className="navbar-circle-yellow"></div>
        <div className="navbar-circle-blue"></div>
      </div>

      <div className="navbar-container">
        {/* Logo with restructured text and image */}
        <div className="navbar-logo">
          <Link to="/home" className="logo-link">
            <div className="logo-icon">
              <img src={Logo} alt="Life of Hope Logo" className="logo-image" />
            </div>
            <div className="logo-text">
              <span className="logo-main">Life of Hope</span>
              <span className="logo-sub">Community Project</span>
            </div>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          className="mobile-menu-button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
        </button>

        {/* Navigation Links */}
        <div className={`navbar-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <Link to="/home" className="nav-link">
            Home
            <span className="link-underline"></span>
          </Link>
          <Link to="/aboutus" className="nav-link">
            About Us
            <span className="link-underline"></span>
          </Link>
          <Link to="/gallery" className="nav-link">
            Gallery
            <span className="link-underline"></span>
          </Link>

          {/* Dropdown */}
          {/* <div className="dropdown-container">
            <button
              onClick={() => setIsDropdownOpen(prev => !prev)}
              className="dropdown-button"
            >
              More
              <svg className="dropdown-icon" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7"/>
              </svg>
              <span className="link-underline"></span>
            </button>

            {isDropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/sublink1" className="dropdown-item">
                  <span className="dropdown-bullet"></span>
                  The Future
                </Link>
                <Link to="/sublink2" className="dropdown-item">
                  <span className="dropdown-bullet"></span>
                  Boy Child
                </Link>
                <Link to="/sublink3" className="dropdown-item">
                  <span className="dropdown-bullet"></span>
                  Teen Moms
                </Link>
              </div> */}
            {/* )} */}
          {/* </div> */}
        </div>

        {/* Donate Button */}
        <div className="navbar-button">
          <Link to="/donate">
            <button className="donate-button">
              Donate
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;