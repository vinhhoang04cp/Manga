import React, { useEffect, useState } from 'react';
import '../../assets/styles/components/Home/Carousel.css';
import { carouselSlides } from '../../data/mangaData';

const Carousel = () => {
  // 1) Trạng thái: slide đang hiển thị (0 -> length-1)
  const [index, setIndex] = useState(0);

  // 2) Tính sẵn các chỉ số liền kề (trái/phải) để dùng nhiều nơi
  const total = carouselSlides.length;
  const prevIndex = (index - 1 + total) % total;
  const nextIndex = (index + 1) % total;

  // 3) Hàm điều hướng thủ công
  const goNext = () => setIndex((i) => (i + 1) % total);
  const goPrev = () => setIndex((i) => (i - 1 + total) % total);

  // 4) Tự chạy 5s/lần (auto-play) và dọn dẹp interval khi unmount
  useEffect(() => {
    const timer = setInterval(goNext, 5000);
    return () => clearInterval(timer);
  }, [total]); // total hiếm khi đổi, nhưng thêm vào cho an toàn

  // 5) Lấy phần accent từ tiêu đề (tối đa 2 từ sau từ đầu tiên)
  const currentTitle = carouselSlides[index]?.title || '';
  const words = currentTitle.split(' ').filter(Boolean);
  const accent = words.slice(1, 3).join(' '); // vd: "One Piece Chap 100" -> "Piece Chap"

  return (
    <section className="hero-carousel">
      {/* Tiêu đề */}
      <div className="carousel-title">
        <h2>
          <span className="title-main">TRUYỆN</span>
          <span className="title-accent">{accent}</span>
        </h2>
      </div>

      {/* Khu vực chính của carousel */}
      <div className="carousel-container">
        {/* Nút trái */}
        <button
          className="carousel-arrow carousel-prev"
          onClick={goPrev}
          aria-label="Previous slide"
        >
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path
              fillRule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            />
          </svg>
        </button>

        {/* Danh sách slide */}
        <div className="carousel-slides">
          {carouselSlides.map((slide, i) => {
            // Gán class theo vị trí so với slide hiện tại
            let cls = 'slide-item';
            if (i === index) cls += ' slide-center active';
            else if (i === prevIndex) cls += ' slide-left';
            else if (i === nextIndex) cls += ' slide-right';
            else cls += ' slide-hidden';

            return (
              <div key={slide.id} className={cls}>
                <img src={slide.image} alt={slide.title} />
              </div>
            );
          })}
        </div>

        {/* Nút phải */}
        <button
          className="carousel-arrow carousel-next"
          onClick={goNext}
          aria-label="Next slide"
        >
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path
              fillRule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </button>
      </div>

      {/* Tagline */}
      <div className="carousel-tagline">
        <p>HangTruyen Chính Thức - Đọc truyện tranh miễn phí</p>
      </div>
    </section>
  );
};

export default Carousel;
