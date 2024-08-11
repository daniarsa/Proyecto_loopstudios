import React from 'react';
import "../styles/Main.scss";

const SectionItem = ({ title, imageUrl }) => {
  return (
    <div className="gallery-item">
      <img src={imageUrl} alt={title} className="gallery-item__image" />
      <div className="gallery-item__title">{title}</div>
    </div>
  );
};

export default SectionItem;