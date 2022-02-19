import React from 'react';
import Navigation from './navigation';
import lis from '../imagens/lis.gif';
import op from '../imagens/one-piece.jpg';
import portal from '../imagens/portal2.gif';
import fav from '../imagens/favorite-films.png';
import book from '../imagens/treasure-island.jpg';
import { BsMouse } from 'react-icons/bs';

class About extends React.Component {
  componentDidMount() {
    this.func();
  }

  func = () => {
    document.querySelector(".about-items")
      .addEventListener("wheel", event => {
      if (event.deltaY > 0) {
        event.target.scrollBy(300, 0);
      } else {
        event.target.scrollBy(-300, 0);
      }
    });
  }

  render() {
    return (
      <>
      <Navigation />
        <div className="about-items-wrapper">
          <div className="about-items">
            <div className="about-item">
              <img src={ lis } alt="" />
            </div>
            <div className="about-item">
              <img src={ op } alt="" />
            </div>
            <div className="about-item">
              <img src={ portal } alt="" />
            </div>
            <div className="about-item">
              <img src={ fav } alt="" />
            </div>
            <div className="about-item">
              <img src={ book } alt="" />
            </div>
          </div>
        </div>
        <div>Role o <span className='icon-scroll'><BsMouse /></span> sobre as imagens</div>
      </>
    );
  }
}

export default About;
