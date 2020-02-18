import React, { useEffect, useRef } from "react";

function StarRating(props) {
  const rating = useRef("rating");

  useEffect(() => {
    const setRating = ev => {
      const stars = rating.current.getElementsByClassName("star");
      Array.from(stars).forEach(star => {
        star.style.color =
          props.averageRating >= star.dataset.value ? "#df171e" : "black";
      });
    };
    setRating();
  }, []);

  return (
    <div className="rating" ref={rating} data-rating={props.averageRating}>
      {[...Array(+props.numberOfStars).keys()].map(n => {
        return (
          <span className="star" key={n + 1} data-value={n + 1}>
            &#9733;
          </span>
        );
      })}
    </div>
  );
}

export default StarRating;
