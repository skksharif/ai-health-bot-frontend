// StarRating.js
import React from "react";
import "./StarRating.css"; // Optional, for styling the stars

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="star-rating">
      {Array(fullStars)
        .fill(0)
        .map((_, i) => (
          <span key={`full-${i}`} className="star full">★</span>
        ))}
      {halfStar && <span className="star half">☆</span>}
      {Array(emptyStars)
        .fill(0)
        .map((_, i) => (
          <span key={`empty-${i}`} className="star empty">☆</span>
        ))}
    </div>
  );
};

export default StarRating;
