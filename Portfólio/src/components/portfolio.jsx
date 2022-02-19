import React, { useEffect } from 'react';
import Navigation from './navigation';
import sanji from '../imagens/sanji.gif';
import luffy from '../imagens/luffy.gif';
import zoro from '../imagens/zoro.gif';
import robin from '../imagens/nico-robin.gif';
import teach from '../imagens/blackbeard.gif';
import { BsMouse } from 'react-icons/bs';
import { rollHorizontally } from './scroll';

export default function Portfolio() {
  useEffect(() => { rollHorizontally() }, []);

  return (
    <>
      <Navigation />
      <div className="items-wrapper">
        <div className="items">
          <div className="item">
            <img src={ sanji } alt="" />
          </div>
          <div className="item">
            <img src={ luffy } alt="" />
          </div>
          <div className="item">
            <img src={ zoro } alt="" />
          </div>
          <div className="item">
            <img src={ robin } alt="" />
          </div>
          <div className="item">
            <img src={ teach } alt="" />
          </div>
        </div>
      </div>
      <div>Role o <span className='icon-scroll'><BsMouse /></span> sobre as imagens</div>
    </>
  );
}
