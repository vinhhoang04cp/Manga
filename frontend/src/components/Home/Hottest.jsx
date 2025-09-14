import React, { useState } from 'react';
import '../../assets/styles/components/Home/Hottest.css';
import { hottestManga } from '../../data/mangaData';
import { renderStars, useCarouselNavigation, getPaginatedItems, getTotalPages } from '../../utils/helpers.jsx';

const Hottest = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const itemsPerSlide = 3;
  const totalSlides = getTotalPages(hottestManga.length, itemsPerSlide);
  const { next: nextSlide, prev: prevSlide } = useCarouselNavigation(
    currentSlide, 
    totalSlides, 
    setCurrentSlide
  );

  const getCurrentItems = () => {
    return getPaginatedItems(hottestManga, currentSlide, itemsPerSlide);
  };

  return (
    <section className="hottest-section">
      <div className="container">
        {/* Header */}
        <div className="hottest-header">
          <div className="header-content">
            <h2 className="section-title">TOP THỊNH HÀNH</h2>
            <p className="section-subtitle">Truyện được mọi người yêu thích.</p>
          </div>
          <div className="navigation-arrows">
            <button className="nav-arrow prev" onClick={prevSlide}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="nav-arrow next" onClick={nextSlide}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Manga Cards */}
        <div className="manga-grid">
          {getCurrentItems().map((manga, index) => (
            <div key={manga.id} className="manga-card">
              {/* Ranking Number */}
              <div className={`ranking-number rank-${currentSlide * itemsPerSlide + index + 1}`}>
                {currentSlide * itemsPerSlide + index + 1}
              </div>

              {/* Manga Content */}
              <div className="manga-content">
                <div className="manga-image">
                  <img src={manga.image} alt={manga.title} />
                </div>
                
                <div className="manga-info">
                  <h3 className="manga-title">{manga.title}</h3>
                  
                  {/* Rating */}
                  <div className="rating-section">
                    <div className="stars">
                      {renderStars(manga.rating)}
                    </div>
                    <span className="rating-value">{manga.rating}</span>
                  </div>

                  {/* Views */}
                  <div className="views-section">
                    <span className="views">{manga.views}</span>
                  </div>

                  {/* Chapters */}
                  <div className="chapters-section">
                    {manga.chapters.map((chapter, idx) => (
                      <div key={idx} className="chapter-item">
                        <span className="chapter-name">{chapter.name}</span>
                        <span className="chapter-time">{chapter.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hottest;