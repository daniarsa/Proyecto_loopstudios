import React from 'react';
import SectionItem from './Section_infoItem';
import Section_info from './Section_info';
import deep from '../assets/img/desktop/image-deep-earth.jpg';
import "../styles/Main.scss";

const creations = [
  { title: 'DEEP EARTH', imageUrl: deep},
  { title: 'NIGHT ARCADE', imageUrl: 'src/assets/img/desktop/image-night-arcade.jpg' },
  { title: 'SOCCER TEAM VR', imageUrl: 'src/assets/img/desktop/image-soccer-team.jpg' },
  { title: 'THE GRID', imageUrl: 'src/assets/img/desktop/image-grid.jpg' },
  { title: 'FROM UP ABOVE VR', imageUrl: 'src/assets/img/desktop/image-from-above.jpg' },
  { title: 'POCKET BOREALIS', imageUrl: 'src/assets/img/desktop/image-pocket-borealis.jpg' },
  { title: 'THE CURIOSITY', imageUrl: 'src/assets/img/desktop/image-curiosity.jpg' },
  { title: 'MAKE IT FISHEYE', imageUrl: 'src/assets/img/desktop/image-fisheye.jpg' },
];

const Main = () => {
  return (
    <section className="cards">
      <Section_info/>
      <div className="cards__header">
        <h2>OUR CREATIONS</h2>
        <button className="cards__see-all">SEE ALL</button>
      </div>
      <div className="cards__grid">
        {creations.map((creation, index) => (
          <SectionItem key={index} title={creation.title} imageUrl={creation.imageUrl} />
        ))}
      </div>
    </section>
  );
};

export default Main;