import React, { useState } from 'react';
import '../../assets/styles/components/common/Header.css';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className="manga-header">
      <div className="container-fluid">
        <div className="row align-items-center">
          {/* Logo Section */}
          <div className="col-auto">
            <div className="logo-section d-flex align-items-center">
              <div className="logo-icon">
                <div className="logo-circle">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <circle cx="20" cy="20" r="18" fill="#1E90FF"/>
                    <circle cx="15" cy="15" r="2" fill="white"/>
                    <circle cx="25" cy="15" r="2" fill="white"/>
                    <path d="M13 25C15 27 20 27 27 25" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M12 10L16 6M28 10L24 6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
              <div className="logo-text ms-3">
                <div className="logo-line">
                  <span className="hang">HANG</span>
                </div>
                <div className="logo-line">
                  <span className="truyen">TRUYỆN</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Menu */}
          <div className="col">
            <nav className="navbar-nav">
              <ul className="nav-menu d-flex align-items-center justify-content-center mb-0">
                <li className="nav-item">
                  <a href="#" className="nav-link">RANDOM</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">HOT NHẤT</a>
                </li>
                <li className="nav-item dropdown">
                  <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                    THỂ LOẠI
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Romance</a></li>
                    <li><a className="dropdown-item" href="#">Comedy</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                    TAGS
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Completed</a></li>
                    <li><a className="dropdown-item" href="#">Ongoing</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">TIN TỨC</a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Search and Actions */}
          <div className="col-auto">
            <div className="header-actions d-flex align-items-center">
              {/* Search Bar */}
              <div className="search-container me-3">
                <div className="input-group">
                  <input 
                    type="text" 
                    className="form-control search-input" 
                    placeholder="Tìm kiếm"
                  />
                  <button className="btn search-btn" type="button">
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85zm-5.442 1.398a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z"/>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Advanced Button */}
              <button className="btn btn-advanced me-2">
                Nâng cao
              </button>

              {/* Dark Mode Toggle */}
              <button 
                className="btn btn-dark-mode me-3"
                onClick={toggleDarkMode}
              >
                <div className={`dark-mode-switch ${isDarkMode ? 'active' : ''}`}>
                  <div className="switch-track">
                    <div className="switch-thumb"></div>
                  </div>
                </div>
              </button>

              {/* Login Button */}
              <button className="btn btn-login">
                ĐĂNG NHẬP
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
