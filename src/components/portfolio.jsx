import React, { useEffect } from 'react';
import Navigation from './navigation';
import moves from '../imagens/moves.gif';
import weather from '../imagens/weather.png'
import portifolio from '../imagens/portifolio.png';
import yt from '../imagens/yt.png';
import { BsMouse } from 'react-icons/bs';
import { rollHorizontally } from './helpers/scroll';
import '../css/carousel.css'

export default function Portfolio() {
  useEffect(() => { rollHorizontally() }, []);

  return (
    <>
      <Navigation />
  
      <div className="items-wrapper">

        <div className="items">
          <div className="item"><img src={ moves } alt="" /></div>
          <div className="item"><img src={ weather } alt="" /></div>
          <div className="item"><img src={ yt } alt="" /></div>
          <div className="item"><img src={ portifolio } alt="" /></div>
        </div>

      </div>

      <div>Role o <span className='icon-scroll'><BsMouse /></span> sobre as imagens</div>
    </>
  );
}
