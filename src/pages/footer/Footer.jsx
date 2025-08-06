
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaShieldAlt,
  FaCreditCard,
  FaTruck,
  FaHeadset
} from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Top Section - Help & Information */}
      <div className="footer-top">
        <div className="help-card">
          <div className="help-icon"><FaHeadset /></div>
          <div>
            <h4>24/7 CUSTOMER CARE</h4>
            <p>Have a question? Call us anytime</p>
          </div>
        </div>
        
        <div className="help-card">
          <div className="help-icon"><FaShieldAlt /></div>
          <div>
            <h4>100% SAFE PAYMENTS</h4>
            <p>Secure payment options</p>
          </div>
        </div>
        
        <div className="help-card">
          <div className="help-icon"><FaTruck /></div>
          <div>
            <h4>FREE & FAST DELIVERY</h4>
            <p>Across India</p>
          </div>
        </div>
        
        <div className="help-card">
          <div className="help-icon"><FaCreditCard /></div>
          <div>
            <h4>EASY RETURNS</h4>
            <p>15-day return policy</p>
          </div>
        </div>
      </div>
      
      {/* Middle Section - Links */}
      <div className="footer-middle">
        <div className="footer-section">
          <h4>ONLINE SHOPPING</h4>
          <ul>
            <li><Link to="/men">Men</Link></li>
            <li><Link to="/women">Women</Link></li>
            <li><Link to="/kids">Kids</Link></li>
            <li><Link to="/home-living">Home & Living</Link></li>
            <li><Link to="/beauty">Beauty</Link></li>
            <li><Link to="/gift-cards">Gift Cards</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>CUSTOMER POLICIES</h4>
          <ul>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/faq">FAQs</Link></li>
            <li><Link to="/shipping">Shipping Policy</Link></li>
            <li><Link to="/returns">Returns & Refunds</Link></li>
            <li><Link to="/cancellation">Cancellation</Link></li>
            <li><Link to="/track-order">Track Order</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>ABOUT US</h4>
          <ul>
            <li><Link to="/about">About Company</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/press">Press</Link></li>
            <li><Link to="/corporate">Corporate</Link></li>
          </ul>
        </div>

        <div className="footer-section contact-info">
          <h4>EXPERIENCE OUR APP</h4>
          <div className="app-download">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Google_Pay_Logo.svg/2560px-Google_Pay_Logo.svg.png" alt="Google Play" />
            <img src="https://www.logo.wine/a/logo/App_Store_(iOS)/App_Store_(iOS)-Logo.wine.svg" alt="App Store" />
          </div>
          <h4 className="social-title">KEEP IN TOUCH</h4>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FaYoutube />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
      
      {/* Bottom Section - Copyright & Legal */}
      <div className="footer-bottom">
        <div className="copyright">
          <p>© 2023 www.myeshop.com. All rights reserved.</p>
          <div className="country-selector">
            <span>India</span>
          </div>
        </div>
        <div className="legal-links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-of-use">Terms of Use</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/sitemap">Sitemap</Link>
        </div>
         <div className="payment-methods">
          <img src="https://i.pinimg.com/736x/5f/79/a6/5f79a6defe837d721dd2e3b2dba041e1.jpg" alt="Visa" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/MasterCard_early_1990s_logo.png/1200px-MasterCard_early_1990s_logo.png" alt="Mastercard" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhp3rS7QYgDEkD--cWFUrd3rYiSZEch9tyZA&s" alt="American Express" />
          <img src="https://www.sketchappsources.com/resources/source-image/PayPalCard.png" alt="PayPal" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfp_3jN-zgVDJzWjr1I4lKWWRothBbWHb8hQ&s" alt="Apple Pay" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;




