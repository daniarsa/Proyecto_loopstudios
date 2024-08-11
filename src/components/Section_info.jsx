import React from 'react';
import "../styles/Section_info.scss";

const Section_info = () => {
  return (
    <section className="Section_info">
      <div className="Section_info__image">
        <img src="src/assets/img/desktop/image-interactive.jpg" alt="" />
      </div>
      <div className="Section_info__content">
        <h1>THE LEADER IN INTERACTIVE VR</h1>
        <p>
          Founded in 2011, Loopstudios has been producing world-class virtual reality projects 
          for some of the best companies around the globe. Our award-winning creations have 
          transformed businesses through digital experiences that bind to their brand.
        </p>
      </div>
    </section>
  );
};

export default Section_info;