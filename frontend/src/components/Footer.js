import React from 'react'; 
import '../css/Footer.css'
import { FaFacebook, FaTwitter, FaYoutube, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-column">
            <h3 className="footer-title">Life of Hope</h3>
            <p className="footer-description">
              Empowering communities through education, healthcare, and sustainable development.
            </p>
            <div className="footer-social">
              <a href="https://www.facebook.com/lifeofhopecp" aria-label="Facebook"><FaFacebook /></a>
              <a href="https://x.com/HenryMakoriO?t=FnKSqyzab0H9MN_VebvKZw&s=09" aria-label="Twitter"><FaTwitter /></a>
              <a href="https://youtube.com/@lifeofhopecommunityproject3418?si=2P41RKNF17vdNqB9" aria-label="YouTube"><FaYoutube /></a>
              <a href="https://www.linkedin.com/company/life-of-hope-community-project/ " aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="https://www.instagram.com/lifeovhope?igsh=NzRjNmc5ZDhrbXRj" aria-label="Instagram"><FaInstagram /></a>
            </div>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Programs</a></li>
              <li><a href="#">Success Stories</a></li>
              <li><a href="#">Get Involved</a></li>
              <li><a href="#">Donate</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">Programs</h4>
            <ul className="footer-links">
              <li><a href="#">Education Initiative</a></li>
              <li><a href="#">Healthcare Access</a></li>
              <li><a href="#">Women Empowerment</a></li>
              <li><a href="#">Youth Development</a></li>
              <li><a href="#">Community Outreach</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="footer-contact">
              <li>
                <MdLocationOn className="contact-icon" />
                <span>Korogocho A Village, Nairobi, Kenya</span>
              </li>
              <li>
                <MdPhone className="contact-icon" />
                <span>0722693520</span>
              </li>
              <li>
                <MdEmail className="contact-icon" />
                <span>lifeofhopecp@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
          <div className="footer-copyright">
            © {new Date().getFullYear()} Life of Hope Community Project. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;