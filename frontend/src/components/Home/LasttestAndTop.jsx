import React, { useState } from 'react';
import '../../assets/styles/components/Home/LattestAndTop.css';

const LatestAndTop = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState('Ngày');

  // Sample data cho "Mới Cập Nhật"
  const latestManga = [
    {
      id: 1,
      title: "Chàng Rể Manh Nhất Lịch Sử",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=150&h=200&fit=crop",
      rating: 5,
      views: "2.28M lượt xem",
      chapters: [
        { name: "Chapter #333", time: "1 giờ trước" },
        { name: "Chapter #332", time: "6 ngày trước" }
      ]
    },
    {
      id: 2,
      title: "Ôm Khận Tiểu Mã Giáp Của Tôi",
      image: "https://images.unsplash.com/photo-1613376023733-0a73315d9b06?w=150&h=200&fit=crop",
      rating: 4.2,
      views: "80.85K lượt xem",
      chapters: [
        { name: "Chapter 379", time: "11 giờ trước" },
        { name: "Chapter 378", time: "1 tháng trước" }
      ]
    },
    {
      id: 3,
      title: "Các Nữ Đồ Đệ Của Ta Đều Là Chư Thiên Đại Lão Tướng Lai",
      image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=150&h=200&fit=crop",
      rating: 3.6,
      views: "40.48K lượt xem",
      chapters: [
        { name: "Chapter 357", time: "11 giờ trước" },
        { name: "Chapter 356", time: "1 tháng trước" }
      ]
    },
    {
      id: 4,
      title: "Ta Có Một Sơn Trại",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=150&h=200&fit=crop",
      rating: 4.2,
      views: "42.18K lượt xem",
      chapters: [
        { name: "Chapter #1206", time: "1 ngày trước" },
        { name: "Chapter #1205", time: "1 ngày trước" }
      ]
    },
    {
      id: 5,
      title: "Yêu Thần Ký",
      image: "https://images.unsplash.com/photo-1613376023733-0a73315d9b06?w=150&h=200&fit=crop",
      rating: 4.9,
      views: "120.08K lượt xem",
      chapters: [
        { name: "Chapter #655", time: "1 ngày trước" },
        { name: "Chapter #654", time: "14 ngày trước" }
      ]
    },
    {
      id: 6,
      title: "Tuyệt Thế Vô Thần",
      image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=150&h=200&fit=crop",
      rating: 4.2,
      views: "10.24M lượt xem",
      chapters: [
        { name: "Chapter #1052", time: "1 ngày trước" },
        { name: "Chapter #1051", time: "6 ngày trước" }
      ]
    }
  ];

  // Sample data cho "Top Theo Dõi"
  const topManga = [
    {
      id: 1,
      rank: 1,
      title: "Nàng Nổi Loạn X Chàng Thợ May",
      image: "https://images.unsplash.com/photo-1613376023733-0a73315d9b06?w=80&h=100&fit=crop",
      rating: 2.5,
      views: "6.14K lượt xem",
      chapter: "Chapter 116",
      time: "2 tháng trước"
    },
    {
      id: 2,
      rank: 2,
      title: "A Wonderful New World",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=80&h=100&fit=crop",
      rating: 0,
      views: "0 lượt xem",
      chapter: "Chapter #262 END",
      time: "6 ngày trước"
    },
    {
      id: 3,
      rank: 3,
      title: "Vô Luyện Đỉnh Phong",
      image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=80&h=100&fit=crop",
      rating: 3.3,
      views: "10K lượt xem",
      chapter: "Chapter #4845",
      time: "6 ngày trước"
    },
    {
      id: 4,
      rank: 4,
      title: "Chú Thuật Hồi Chiến",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=80&h=100&fit=crop",
      rating: 4.2,
      views: "0 lượt xem",
      chapter: "Chapter 273.4",
      time: "9 tháng trước"
    },
    {
      id: 5,
      rank: 5,
      title: "Shangri-La Frontier",
      image: "https://images.unsplash.com/photo-1613376023733-0a73315d9b06?w=80&h=100&fit=crop",
      rating: 3.5,
      views: "28K lượt xem",
      chapter: "Chapter #234",
      time: "4 ngày trước"
    },
    {
      id: 6,
      rank: 6,
      title: "Jujutsu Kaisen Modulo",
      image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=80&h=100&fit=crop",
      rating: 0,
      views: "0 lượt xem",
      chapter: "Chapter #1",
      time: "4 ngày trước"
    },
  ];

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