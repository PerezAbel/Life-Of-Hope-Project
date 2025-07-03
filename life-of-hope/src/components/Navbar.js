import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.dropdown')) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-blue-800 font-bold text-xl">
          <Link to="/">Life Of Hope Community Project</Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/home" className="text-gray-700 hover:text-blue-700">Home</Link>
          <Link to="/aboutus" className="text-gray-700 hover:text-blue-700">About Us</Link>
          <Link to="/gallery" className="text-gray-700 hover:text-blue-700">Gallery</Link>

          {/* Dropdown */}
          <div className="relative dropdown">
            <button
              onClick={() => setIsDropdownOpen(prev => !prev)}
              className="text-gray-700 hover:text-blue-700 flex items-center gap-1"
            >
              More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isDropdownOpen && (
              <div className="absolute top-8 left-0 w-40 bg-white border border-gray-200 shadow-lg rounded-lg z-50">
                <ul className="text-sm text-gray-700">
                  <li>
                    <Link to="/sublink1" className="block px-4 py-2 hover:bg-yellow-100">
                      Sublink 1
                    </Link>
                  </li>
                  <li>
                    <Link to="/sublink2" className="block px-4 py-2 hover:bg-yellow-100">
                      Sublink 2
                    </Link>
                  </li>
                  <li>
                    <Link to="/sublink3" className="block px-4 py-2 hover:bg-yellow-100">
                      Sublink 3
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Donate Button */}
        <div>
          <Link to="/donate">
            <button className="bg-yellow-400 text-blue-900 font-semibold px-4 py-2 rounded hover:bg-yellow-300 transition">
              Donate
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
