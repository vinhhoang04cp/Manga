import React, { useState, useEffect } from 'react';
import '../../assets/styles/components/Home/MangaShowcase.css';
import { showcaseManga } from '../../data/mangaData';
import { renderStars } from '../../utils/helpers.jsx';

const MangaShowcase = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  
  // Số items hiển thị trên mỗi slide (responsive)
  const [itemsPerSlide, setItemsPerSlide] = useState(6); // Thay đổi từ 4 thành 6
  
  // Tính total slides
  const totalSlides = Math.ceil(showcaseManga.length / itemsPerSlide);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoplay) return;
    
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % totalSlides);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [totalSlides, isAutoplay]);

  // Responsive items per slide
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setItemsPerSlide(2);
      } else if (window.innerWidth <= 768) {
        setItemsPerSlide(3);
      } else if (window.innerWidth <= 1200) {
        setItemsPerSlide(4);
      } else {
        setItemsPerSlide(6); // Thay đổi từ 4 thành 6 cho desktop
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Navigation functions
  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % totalSlides);
    setIsAutoplay(false);
    setTimeout(() => setIsAutoplay(true), 10000); // Resume autoplay after 10s
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoplay(false);
    setTimeout(() => setIsAutoplay(true), 10000);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoplay(false);
    setTimeout(() => setIsAutoplay(true), 10000);
  };

  // Get current items to display
  const getCurrentItems = () => {
    const start = currentSlide * itemsPerSlide;
    const end = start + itemsPerSlide;
    return showcaseManga.slice(start, end);
  };
  return (
    <section className="manga-showcase">
      <div className="showcase-container">
        {/* Header */}
        <div className="showcase-header">
          <div className="showcase-title-section">
            <h2 className="showcase-title">TRUYỆN HANGTRUYEN</h2>
            <p className="showcase-subtitle">Truyện đặc sắc của HangTruyen</p>
          </div>
          <div className="showcase-controls">
            <span className="view-all-link">Xem tất cả</span>
            <div className="showcase-nav">
              <button className="nav-btn nav-prev" onClick={prevSlide}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="nav-btn nav-next" onClick={nextSlide}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="carousel-container">
          <div 
            className="carousel-track"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
              width: `${totalSlides * 100}%`
            }}
          >
            {/* Render slides */}
            {Array.from({ length: totalSlides }, (_, slideIndex) => (
              <div key={slideIndex} className="carousel-slide">
                {showcaseManga
                  .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                  .map((manga) => (
                    <div key={manga.id} className="showcase-card">
                      {/* Notification Badge */}
                      {manga.hasNotification && (
                        <div className="notification-badge">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="10" fill="#ff6b35"/>
                            <path d="M12 6v6l4 2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      )}

                      {/* Card Image */}
                      <div className="card-image-wrapper">
                        <img src={manga.image} alt={manga.title} className="card-image" />
                        <div className="card-overlay">
                          <div className="overlay-content">
                            <button className="read-btn">
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <polygon points="5,3 19,12 5,21" fill="white"/>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Card Info */}
                      <div className="card-info">
                        <h3 className="card-title">{manga.title}</h3>
                        
                        {/* Rating Stars */}
                        {manga.rating > 0 && (
                          <div className="card-rating">
                            <div className="rating-stars">
                              {renderStars(manga.rating)}
                            </div>
                            <span className="rating-number">{manga.rating}</span>
                          </div>
                        )}

                        {/* Chapter Details */}
                        <div className="card-chapter">
                          <span className="chapter-name">{manga.chapter}</span>
                          <span className="chapter-time">{manga.time}</span>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          {Array.from({ length: totalSlides }, (_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MangaShowcase;