import React from 'react';
import "../styles/Main.scss";

const Section_infoItem = ({ title, imageUrl }) => {
  return (
    <div className="cards-item">
      <img src={imageUrl} alt={title} className="cards-item__image" />
      <div className="cards-item__title">{title}</div>
    </div>
  );
};

export default Section_infoItem;