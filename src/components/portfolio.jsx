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
    
      {
        projects.map((item) => (
          <a
            className="item-a"
            key={ item.id }
            href={ item.url }
            target="_blank"
            rel="noreferrer"
          >
            { item.name }
          </a>
        ))
      }

      <div className="items-wrapper">
        
        <div className="items">
          {
            projects.map((item) => (
              <div
                className="item"
                key={ item.id }
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
