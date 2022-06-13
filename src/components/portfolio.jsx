import React, { useEffect } from 'react';
import Navigation from './navigation';
import { BsMouse } from 'react-icons/bs';
import { rollHorizontally } from './helpers/scroll';
import '../css/carousel.css'
import { projects } from './helpers/projects';

export default function Portfolio() {
  useEffect(() => { rollHorizontally() }, []);

  return (
    <>
      <Navigation />
  
      <div className="items-wrapper">
        
        <div className="items">
        <p>Nome do Projeto</p>
          {
            projects.map((item) => (
              <div
                key={ item.id }
                className="item"
              >
                <img src={ item.img } alt="" />
              </div>
            ))
          }
        </div>

      </div>

      <div>Role o <span className='icon-scroll'><BsMouse /></span> sobre as imagens</div>
    </>
  );
}
