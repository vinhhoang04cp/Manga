import React, { useState } from 'react';
import '../../assets/styles/components/Home/Hottest.css';

const Hottest = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample data - dữ liệu mẫu theo ảnh
  const mangaData = [
    {
      id: 1,
      title: "CHÚ THUẬT HỒI CHIẾN",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop",
      rating: 4.2,
      views: "48.11K lượt xem",
      chapters: [
        { name: "Chapter 273.4", time: "9 tháng trước" },
        { name: "Chapter 273.3", time: "9 tháng trước" }
      ]
    },
    {
      id: 2,
      title: "NÀNG NỔI LOẠN X CHÀNG THỢ MAY",
      image: "https://images.unsplash.com/photo-1613376023733-0a73315d9b06?w=300&h=400&fit=crop",
      rating: 2.5,
      views: "141.22K lượt xem",
      chapters: [
        { name: "Chapter 116", time: "2 tháng trước" },
        { name: "Chapter 115 (END)", time: "6 tháng trước" }
      ]
    },
    {
      id: 3,
      title: "VÔ LUYỆN ĐỈNH PHONG",
      image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=300&h=400&fit=crop",
      rating: 3.3,
      views: "66.4M lượt xem",
      chapters: [
        { name: "Chapter #4845", time: "6 ngày trước" },
        { name: "Chapter 4844", time: "1 tháng trước" }
      ]
    },
    {
      id: 4,
      title: "THÁM TỬ LỪNG DANH CONAN",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop",
      rating: 4.8,
      views: "89.3K lượt xem",
      chapters: [
        { name: "Chapter 1120", time: "3 ngày trước" },
        { name: "Chapter 1119", time: "1 tuần trước" }
      ]
    },
    {
      id: 5,
      title: "ONE PIECE",
      image: "https://images.unsplash.com/photo-1613376023733-0a73315d9b06?w=300&h=400&fit=crop",
      rating: 4.9,
      views: "250M lượt xem",
      chapters: [
        { name: "Chapter 1095", time: "1 ngày trước" },
        { name: "Chapter 1094", time: "1 tuần trước" }
      ]
    },
    {
      id: 6,
      title: "ATTACK ON TITAN",
      image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=300&h=400&fit=crop",
      rating: 4.7,
      views: "180M lượt xem",
      chapters: [
        { name: "Chapter 139 (END)", time: "2 năm trước" },
        { name: "Chapter 138", time: "2 năm trước" }
      ]
    }
  ];

  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(mangaData.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentItems = () => {
    const start = currentSlide * itemsPerSlide;
    const end = start + itemsPerSlide;
    return mangaData.slice(start, end);
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<span key={i} className="star filled">★</span>);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<span key={i} className="star half">★</span>);
      } else {
        stars.push(<span key={i} className="star empty">★</span>);
      }
    }
    return stars;
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