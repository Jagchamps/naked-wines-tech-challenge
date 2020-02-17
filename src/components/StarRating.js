import React, { useEffect, useState, useRef } from 'react';

//import './star-rating.css';

function StarRating(props) {
  const rating = useRef("rating");
  const averageRating = Math.round(props.averageRating);

  useEffect(() => {
    const setRating = ev => {
      const stars = rating.current.getElementsByClassName('star');
      Array.from(stars).forEach(star => {
        star.style.color =
          averageRating >= star.dataset.value ? '#df171e' : 'gray';
      });
    };
    setRating();
  }, []);

  return (
    <div
      className="rating"
      ref={rating}
      data-rating={averageRating}
    >
      {[...Array(+props.numberOfStars).keys()].map(n => {
        return (
          <span
            className="star"
            key={n+1}
            data-value={n+1}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
}

export default StarRating;