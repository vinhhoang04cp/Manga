import React, { useState } from 'react';
import '../../assets/styles/components/Home/Hottest.css';
import { hottestManga } from '../../data/mangaData';

/**
 * Hottest (phiên bản đơn giản):
 * - Phân trang danh sách manga theo "slide" (mỗi slide 3 items)
 * - Điều hướng bằng 2 nút Prev/Next (vòng lặp)
 * - Không phụ thuộc helper bên ngoài (tự tính trang & tự render sao)
 * - Bảo vệ trường hợp không có dữ liệu
 */

const ITEMS_PER_SLIDE = 3;

/** Định dạng số lượt xem: 1200 -> 1.2K, 2450000 -> 2.45M */
function formatViews(v) {
  if (typeof v === 'string') return v; // nếu data đã là '1.2M' thì giữ nguyên
  const n = Number(v) || 0;
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1).replace(/\.0$/, '')}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1).replace(/\.0$/, '')}K`;
  return `${n}`;
}

/** Render sao theo thang 5 — đơn giản, dễ hiểu (★, ☆) */
function SimpleStars({ rating = 0 }) {
  const full = Math.floor(rating);
  const hasHalf = rating - full >= 0.5; // bạn có thể bỏ nếu không cần nửa sao
  const max = 5;

  const stars = [];
  for (let i = 0; i < full && i < max; i++) stars.push('★');
  if (hasHalf && stars.length < max) stars.push('⯪'); // ký tự đại diện “nửa sao”, có thể đổi bằng SVG/icon
  while (stars.length < max) stars.push('☆');

  return (
    <span className="stars" aria-label={`Đánh giá ${rating}/5`}>
      {stars.join('')}
    </span>
  );
}

const Hottest = () => {
  const [page, setPage] = useState(0); // "page" = slide hiện tại

  // Nếu không có dữ liệu, hiển thị thông điệp thân thiện
  if (!Array.isArray(hottestManga) || hottestManga.length === 0) {
    return (
      <section className="hottest-section">
        <div className="container">
          <div className="hottest-header">
            <div className="header-content">
              <h2 className="section-title">TOP THỊNH HÀNH</h2>
              <p className="section-subtitle">Chưa có dữ liệu để hiển thị.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Tổng số slide (làm tròn lên)
  const totalSlides = Math.ceil(hottestManga.length / ITEMS_PER_SLIDE);

  // Cắt mảng theo trang hiện tại: [start, end)
  const start = page * ITEMS_PER_SLIDE;
  const end = start + ITEMS_PER_SLIDE;
  const visibleItems = hottestManga.slice(start, end);

  const canNavigate = totalSlides > 1;

  // Điều hướng vòng lặp
  const goPrev = () => {
    if (!canNavigate) return;
    setPage((p) => (p - 1 + totalSlides) % totalSlides);
  };

  const goNext = () => {
    if (!canNavigate) return;
    setPage((p) => (p + 1) % totalSlides);
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

          {/* Nút điều hướng */}
          <div className="navigation-arrows">
            <button
              className="nav-arrow prev"
              onClick={goPrev}
              aria-label="Xem trang trước"
              aria-disabled={!canNavigate}
              disabled={!canNavigate}
              title={canNavigate ? 'Trang trước' : 'Chỉ có 1 trang'}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <button
              className="nav-arrow next"
              onClick={goNext}
              aria-label="Xem trang sau"
              aria-disabled={!canNavigate}
              disabled={!canNavigate}
              title={canNavigate ? 'Trang sau' : 'Chỉ có 1 trang'}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Manga Cards */}
        <div className="manga-grid">
          {visibleItems.map((manga, idx) => {
            const rank = start + idx + 1; // số thứ hạng toàn cục
            return (
              <div key={manga.id ?? `${manga.title}-${rank}`} className="manga-card">
                {/* Ranking Number */}
                <div className={`ranking-number rank-${rank}`}>{rank}</div>

                {/* Manga Content */}
                <div className="manga-content">
                  <div className="manga-image">
                    <img src={manga.image} alt={manga.title} loading="lazy" />
                  </div>

                  <div className="manga-info">
                    <h3 className="manga-title">{manga.title}</h3>

                    {/* Rating */}
                    <div className="rating-section">
                      <SimpleStars rating={manga.rating} />
                      <span className="rating-value">{manga.rating}</span>
                    </div>

                    {/* Views */}
                    <div className="views-section">
                      <span className="views">{formatViews(manga.views)}</span>
                    </div>

                    {/* Chapters */}
                    <div className="chapters-section">
                      {(manga.chapters || []).map((chapter, cIdx) => (
                        <div key={chapter?.id ?? cIdx} className="chapter-item">
                          <span className="chapter-name">{chapter?.name}</span>
                          <span className="chapter-time">{chapter?.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* (Tuỳ chọn) Dots indicator đơn giản; giúp nhảy nhanh đến trang cụ thể */}
        <div className="page-dots" role="tablist" aria-label="Chọn trang">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === page}
              className={`page-dot ${i === page ? 'active' : ''}`}
              onClick={() => setPage(i)}
              title={`Trang ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hottest;
