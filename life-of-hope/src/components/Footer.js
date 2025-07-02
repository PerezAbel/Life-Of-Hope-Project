import React from 'react';  
import '../css/Footer.css'


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__section">
        <h4>Navigation</h4>
        <ul>
          <li>About Us</li>
          <li>Gallery</li>
          <li>Contact Us</li>   
          <li>Join Us</li> 
          <li>Donate Now</li>

        </ul>
      </div>
      <div className="footer__section">
        <h4>Keep in Touch</h4>
        <ul>
          <li>ShopAll</li>
          <li>Phones</li>
          <li>Laptops</li>
          <li>Ipads & Tables</li>
          <li>Gaming Consoles</li> 
          <li>Drones</li>  
          <li>Home Apliances</li>
        </ul>
      </div>
      <div className="footer__section">
        <h4>Address</h4>
        <ul>
          <li>Shipping & Returns </li>
          <li>Terms & Conditions</li>
          <li>Payment Methods </li> 
          <li>Help </li>
        </ul>
      </div>
      <div className="footer__section">
        <h4>Socials</h4>
        <ul>
          <li>Store Location500 Terry Francine Street</li>
          <li>San Francisco, CA 94158</li>
          <li>123-456-7890</li>
        </ul>
      </div>
      <div className="footer__copyright">
        © 2025 Copyright BunnyTunez |All rights reserved 
      </div>
    </footer>
  );
};

export default Footer;
