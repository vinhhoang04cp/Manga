import React from 'react';
import '../../assets/styles/components/common/Footer.css';

const Footer = () => {
  return (
    <footer className="manga-footer">
      <div className="container">
        <div className="footer-content">
          {/* Left Section - Logo and Description */}
          <div className="footer-left">
            <div className="footer-logo">
              <div className="logo-circle">
                <div className="logo-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
              </div>
              <div className="logo-text">
                <span className="hang">HANG</span>
                <span className="truyen">TRUYEN</span>
              </div>
            </div>
            <p className="footer-description">
              Hangtruyen là website đọc <strong>truyện tranh</strong> online uy tín hàng đầu 
              Việt Nam. Tất cả các truyện trên website đang tải được 
              Hangtruyen biên dịch và tổng hợp từ nhiều nguồn trên 
              Internet.
            </p>
          </div>

          {/* Middle Sections - Links */}
          <div className="footer-middle">
            <div className="footer-column">
              <h4 className="footer-title">Về chúng tôi</h4>
              <ul className="footer-links">
                <li><a href="/terms">Điều khoản dịch vụ</a></li>
                <li><a href="/privacy">Chính sách bảo mật</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-title">Phương thức liên hệ</h4>
              <ul className="footer-links">
                <li><a href="/disclaimer">Tuyên bố miễn trừ trách nhiệm</a></li>
              </ul>
            </div>
          </div>

          {/* Right Section - Social Media and Character */}
          <div className="footer-right">
            <div className="social-media">
              <a href="https://facebook.com" className="social-link" aria-label="Facebook">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://twitter.com" className="social-link" aria-label="Twitter">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
            
            {/* Character Illustration */}
            <div className="footer-character">
              {/* Temporary SVG placeholder for manga characters */}
              <svg 
                width="200" 
                height="120" 
                viewBox="0 0 200 120" 
                className="character-image"
                aria-label="Manga Characters Illustration"
              >
                {/* Background */}
                <rect width="200" height="120" fill="transparent"/>
                
                {/* Character 1 - Superhero style */}
                <g transform="translate(20, 20)">
                  <circle cx="15" cy="15" r="12" fill="#ff4757"/>
                  <rect x="5" y="25" width="20" height="30" rx="3" fill="#1E90FF"/>
                  <rect x="0" y="30" width="8" height="15" rx="2" fill="#ff4757"/>
                  <rect x="22" y="30" width="8" height="15" rx="2" fill="#ff4757"/>
                  <rect x="8" y="55" width="6" height="20" rx="2" fill="#2c3e50"/>
                  <rect x="16" y="55" width="6" height="20" rx="2" fill="#2c3e50"/>
                  {/* Mask */}
                  <path d="M8 12 Q15 8 22 12 Q15 18 8 12" fill="#2c3e50"/>
                </g>
                
                {/* Character 2 - Ninja style */}
                <g transform="translate(70, 25)">
                  <circle cx="12" cy="12" r="10" fill="#34495e"/>
                  <rect x="4" y="20" width="16" height="25" rx="2" fill="#2c3e50"/>
                  <rect x="0" y="25" width="6" height="12" rx="2" fill="#34495e"/>
                  <rect x="18" y="25" width="6" height="12" rx="2" fill="#34495e"/>
                  <rect x="6" y="45" width="5" height="18" rx="2" fill="#2c3e50"/>
                  <rect x="13" y="45" width="5" height="18" rx="2" fill="#2c3e50"/>
                  {/* Eyes */}
                  <circle cx="8" cy="10" r="2" fill="#ff4757"/>
                  <circle cx="16" cy="10" r="2" fill="#ff4757"/>
                </g>
                
                {/* Character 3 - Warrior style */}
                <g transform="translate(120, 15)">
                  <circle cx="18" cy="18" r="14" fill="#f39c12"/>
                  <rect x="8" y="30" width="20" height="35" rx="3" fill="#e74c3c"/>
                  <rect x="2" y="35" width="10" height="18" rx="2" fill="#f39c12"/>
                  <rect x="26" y="35" width="10" height="18" rx="2" fill="#f39c12"/>
                  <rect x="10" y="65" width="7" height="25" rx="2" fill="#8e44ad"/>
                  <rect x="19" y="65" width="7" height="25" rx="2" fill="#8e44ad"/>
                  {/* Cape */}
                  <path d="M8 30 Q18 25 28 30 L28 60 Q18 55 8 60 Z" fill="#9b59b6"/>
                  {/* Hair */}
                  <path d="M10 8 Q18 4 26 8 Q18 22 10 8" fill="#2c3e50"/>
                </g>
                
                {/* Decorative elements */}
                <g opacity="0.3">
                  <circle cx="40" cy="30" r="2" fill="#1E90FF"/>
                  <circle cx="90" cy="40" r="1.5" fill="#ff4757"/>
                  <circle cx="160" cy="35" r="2.5" fill="#f39c12"/>
                  <circle cx="180" cy="50" r="1" fill="#9b59b6"/>
                </g>
              </svg>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="footer-bottom">
          <div className="copyright">
            <p>Copyright © 2024, All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
