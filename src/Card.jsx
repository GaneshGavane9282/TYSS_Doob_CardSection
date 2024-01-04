import React from "react";

const Card = ({ imageUrl, title }) => {
  return (
    <div className="cardContainer">
      <picture>
        <img src={imageUrl} alt="image" />
      </picture>

      <div className="imageTitle">
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default Card;
