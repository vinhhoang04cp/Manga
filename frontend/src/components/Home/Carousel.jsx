import React, { useState, useEffect } from 'react';
import '../../assets/styles/components/Home/Carousel.css';
import { carouselSlides } from '../../data/mangaData';
import { useCarouselNavigation } from '../../utils/helpers.jsx';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { next: nextSlide, prev: prevSlide } = useCarouselNavigation(
    currentSlide, 
    carouselSlides.length, 
    setCurrentSlide
  );

  // Auto play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const getPrevIndex = () => {
    return (currentSlide - 1 + carouselSlides.length) % carouselSlides.length;
  };

  const getNextIndex = () => {
    return (currentSlide + 1) % carouselSlides.length;
  };

  return (
    <section className="hero-carousel">
      {/* Title */}
      <div className="carousel-title">
        <h2>
          <span className="title-main">TRUYỆN</span>
          <span className="title-accent">{carouselSlides[currentSlide].title.split(' ')[1]} {carouselSlides[currentSlide].title.split(' ')[2] || ''}</span>
        </h2>
      </div>

      <div className="carousel-container">
        {/* Left Arrow */}
        <button 
          className="carousel-arrow carousel-prev"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
          </svg>
        </button>

        {/* Carousel Slides */}
        <div className="carousel-slides">
          {carouselSlides.map((slide, index) => {
            let slideClass = 'slide-item';
            
            // Determine slide position relative to current slide
            if (index === currentSlide) {
              slideClass += ' slide-center active';
            } else if (index === getPrevIndex()) {
              slideClass += ' slide-left';
            } else if (index === getNextIndex()) {
              slideClass += ' slide-right';
            } else {
              slideClass += ' slide-hidden';
            }

            return (
              <div key={slide.id} className={slideClass}>
                <img 
                  src={slide.image} 
                  alt={slide.title}
                />
              </div>
            );
          })}
        </div>

        {/* Right Arrow */}
        <button 
          className="carousel-arrow carousel-next"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
          </svg>
        </button>
      </div>

      {/* Bottom Tagline */}
      <div className="carousel-tagline">
        <p>HangTruyen Chính Thức - Đọc truyện tranh miễn phí</p>
      </div>
    </section>
  );
};

export default Carousel;
