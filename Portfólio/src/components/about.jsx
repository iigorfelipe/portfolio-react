import React, { useEffect } from 'react';
import Navigation from './navigation';
import lis from '../imagens/lis.gif';
import op from '../imagens/one-piece.jpg';
import portal from '../imagens/portal2.gif';
import fav from '../imagens/favorite-films.png';
import book from '../imagens/treasure-island.jpg';
import { BsMouse } from 'react-icons/bs';
import { rollHorizontally } from './scroll';

export default function About() {
  useEffect(() => { rollHorizontally() },[]);

  return (
    <>
    <Navigation />
      <div className="items-wrapper">
        <div className="items">
          <div className="item">
            <img src={ lis } alt="" />
          </div>
          <div className="item">
            <img src={ op } alt="" />
          </div>
          <div className="item">
            <img src={ portal } alt="" />
          </div>
          <div className="item">
            <img src={ fav } alt="" />
          </div>
          <div className="item">
            <img src={ book } alt="" />
          </div>
        </div>
      </div>
      <div>Role o <span className='icon-scroll'><BsMouse /></span> sobre as imagens</div>
    </>
  );
}
