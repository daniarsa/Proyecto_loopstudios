import React from 'react';
import SectionItem from './Section_infoItem';
import Section_info from './Section_info';
import Deep_earth from '../assets/img/desktop/image-deep-earth.jpg';
import Night_arcade from '../assets/img/desktop/image-night-arcade.jpg';
import Soccer_team_vr from '../assets/img/desktop/image-soccer-team.jpg';
import The_grid from '../assets/img/desktop/image-grid.jpg';
import From_up_above_ve from '../assets/img/desktop/image-from-above.jpg';
import Pocket_borealis from '../assets/img/desktop/image-pocket-borealis.jpg';
import The_curiosity from '../assets/img/desktop/image-curiosity.jpg';
import Make_it_fisheye from '../assets/img/desktop/image-fisheye.jpg';
import "../styles/Main.scss";

const creations = [
  { title: 'DEEP EARTH', imageUrl: Deep_earth},
  { title: 'NIGHT ARCADE', imageUrl: Night_arcade },
  { title: 'SOCCER TEAM VR', imageUrl: Soccer_team_vr },
  { title: 'THE GRID', imageUrl: The_grid },
  { title: 'FROM UP ABOVE VR', imageUrl: From_up_above_ve },
  { title: 'POCKET BOREALIS', imageUrl: Pocket_borealis },
  { title: 'THE CURIOSITY', imageUrl: The_curiosity  },
  { title: 'MAKE IT FISHEYE', imageUrl: Make_it_fisheye },
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