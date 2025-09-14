import React from 'react';

/**
 * Render stars based on rating
 * @param {number} rating - Rating value (0-5)
 * @returns {JSX.Element[]} Array of star elements
 */
export const renderStars = (rating) => {
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

/**
 * Common carousel navigation functionality
 * @param {number} currentIndex - Current slide/page index
 * @param {number} totalItems - Total number of items
 * @param {function} setCurrentIndex - State setter function
 * @returns {object} Navigation functions
 */
export const useCarouselNavigation = (currentIndex, totalItems, setCurrentIndex) => {
  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  const goTo = (index) => {
    setCurrentIndex(index);
  };

  return { next, prev, goTo };
};

/**
 * Get paginated items from an array
 * @param {Array} items - Array of items to paginate
 * @param {number} currentPage - Current page (0-based)
 * @param {number} itemsPerPage - Number of items per page
 * @returns {Array} Slice of items for current page
 */
export const getPaginatedItems = (items, currentPage, itemsPerPage) => {
  const start = currentPage * itemsPerPage;
  const end = start + itemsPerPage;
  return items.slice(start, end);
};

/**
 * Calculate total number of pages
 * @param {number} totalItems - Total number of items
 * @param {number} itemsPerPage - Items per page
 * @returns {number} Total pages
 */
export const getTotalPages = (totalItems, itemsPerPage) => {
  return Math.ceil(totalItems / itemsPerPage);
};