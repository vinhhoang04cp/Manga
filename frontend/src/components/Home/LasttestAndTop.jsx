import React, { useState } from 'react';
import '../../assets/styles/components/Home/LattestAndTop.css';
import { latestManga, topManga } from '../../data/mangaData';
import { renderStars } from '../../utils/helpers.jsx';

const LatestAndTop = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState('Ngày');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <section className="latest-and-top-section">
      <div className="container">
        <div className="two-column-layout">
          
          {/* Left Column - Mới Cập Nhật */}
          <div className="left-column">
            <div className="section-header">
              <h2 className="section-title">MỚI CẬP NHẬT</h2>
              <p className="section-subtitle">Truyện mới được cập nhật.</p>
              <div className="view-all-link">
                <span>Xem tất cả</span>
                <div className="nav-arrows">
                  <button className="nav-arrow">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </button>
                  <button className="nav-arrow">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="manga-list">
              {latestManga.map((manga) => (
                <div key={manga.id} className="manga-item">
                  <div className="manga-image">
                    <img src={manga.image} alt={manga.title} />
                  </div>
                  <div className="manga-info">
                    <h3 className="manga-title">{manga.title}</h3>
                    <div className="rating-section">
                      <div className="stars">
                        {renderStars(manga.rating)}
                      </div>
                      <span className="rating-value">{manga.rating}</span>
                    </div>
                    <div className="views">{manga.views}</div>
                    <div className="chapters">
                      {manga.chapters.map((chapter, idx) => (
                        <div key={idx} className="chapter-item">
                          <span className="chapter-name">{chapter.name}</span>
                          <span className="chapter-time">{chapter.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="pagination">
              <button 
                className={`page-btn ${currentPage === 1 ? 'active' : ''}`}
                onClick={() => handlePageChange(1)}
              >
                1
              </button>
              <button 
                className={`page-btn ${currentPage === 2 ? 'active' : ''}`}
                onClick={() => handlePageChange(2)}
              >
                2
              </button>
              <button 
                className={`page-btn ${currentPage === 3 ? 'active' : ''}`}
                onClick={() => handlePageChange(3)}
              >
                3
              </button>
            </div>
          </div>

          {/* Right Column - Top Theo Dõi */}
          <div className="right-column">
            <div className="section-header">
              <h2 className="section-title">TOP THEO DÕI</h2>
              <p className="section-subtitle">Truyện mới được cập nhật.</p>
            </div>

            {/* Tabs */}
            <div className="tabs">
              {['Ngày', 'Tuần', 'Tháng'].map((tab) => (
                <button
                  key={tab}
                  className={`tab ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Top Manga List */}
            <div className="top-manga-list">
              {topManga.map((manga) => (
                <div key={manga.id} className="top-manga-item">
                  <div className={`rank-number rank-${manga.rank}`}>
                    {String(manga.rank).padStart(2, '0')}
                  </div>
                  <div className="manga-image-small">
                    <img src={manga.image} alt={manga.title} />
                  </div>
                  <div className="manga-info-small">
                    <h4 className="manga-title-small">{manga.title}</h4>
                    <div className="rating-section-small">
                      <div className="stars">
                        {renderStars(manga.rating)}
                      </div>
                      <span className="rating-value">{manga.rating}</span>
                      <span className="views-small">{manga.views}</span>
                    </div>
                    <div className="chapter-info-small">
                      <span className="chapter-name-small">{manga.chapter}</span>
                      <span className="chapter-time-small">{manga.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestAndTop;