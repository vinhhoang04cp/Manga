import React, { useState } from 'react';
import { newsArticles } from '../../data/mangaData';
import '../../assets/styles/components/Home/News.css';

const News = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = 5; // Number of cards to show at once
  const totalSlides = Math.ceil(newsArticles.length / itemsPerSlide);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const translateX = -(currentIndex * 100);

  return (
    <div className="news-section">
      <div className="news-container">
        
        {/* Header */}
        <div className="news-header">
          <div className="news-title-section">
            <h2 className="news-title">TIN TỨC</h2>
            <p className="news-subtitle">Bài viết mới nhất từ cộng đồng.</p>
          </div>
          
          <div className="news-controls">
            <a href="#all-news" className="view-all-link">Xem tất cả</a>
            <div className="news-nav">
              <button 
                className="nav-btn" 
                onClick={goToPrev}
                disabled={currentIndex === 0}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                </svg>
              </button>
              <button 
                className="nav-btn" 
                onClick={goToNext}
                disabled={currentIndex === totalSlides - 1}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div className="news-carousel-container">
          <div className="news-carousel-track" style={{ transform: `translateX(${translateX}%)` }}>
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div key={slideIndex} className="news-carousel-slide">
                {newsArticles
                  .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                  .map(article => (
                    <div key={article.id} className="news-card">
                      <div className="news-card-image">
                        <img src={article.thumbnail} alt={article.title} />
                      </div>
                      
                      <div className="news-card-content">
                        <h3 className="news-card-title">{article.title}</h3>
                        <p className="news-card-description">{article.description}</p>
                        
                        <div className="news-card-meta">
                          <div className="news-author">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                            </svg>
                            <span>{article.author}</span>
                          </div>
                          
                          <div className="news-date">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                            </svg>
                            <span>{article.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
