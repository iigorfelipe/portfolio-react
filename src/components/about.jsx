import React, { useEffect } from 'react';
import Navigation from './navigation';
import luffy from '../imagens/luffy.gif';
import zoro from '../imagens/zoro.gif';
import robin from '../imagens/nico-robin.gif';
import { BsMouse } from 'react-icons/bs';
import { rollHorizontally } from './helpers/scroll';

export default function About() {
  useEffect(() => { rollHorizontally() }, []);

  return (
    <>
      <Navigation />
  
      <div className="items-wrapper">

        <div className="items">
          <div className="item"><img src={ robin } alt="" /></div>
          <div className="item"><img src={ luffy } alt="" /></div>
          <div className="item"><img src={ zoro } alt="" /></div>
          <div className="item"><img src={ robin } alt="" /></div>
          <div className="item"><img src={ luffy } alt="" /></div>
        </div>

      </div>

      <div>Role o <span className='icon-scroll'><BsMouse /></span> sobre as imagens</div>
    </>
  );
}
