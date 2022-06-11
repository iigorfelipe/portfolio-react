import React, { useEffect } from 'react';
import Navigation from './navigation';
import { BsMouse } from 'react-icons/bs';
import { rollHorizontally } from './helpers/scroll';
import play from '../imagens/play.jpeg';
import cinema from '../imagens/cinema.webp';
import draw from '../imagens/pexels-photo.jpg';
import '../css/carousel.css'

export default function About() {
  useEffect(() => { rollHorizontally() }, []);

  return (
    <>
      <Navigation />
  
      <div className="items-wrapper">

        <div className="items">
          <div className="item">
            <p>Olá, me chamo Igor, sou estudante de desenvolvimento web na Trybe</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam porro vero cum expedita ut aperiam tenetur velit, consectetur alias quia in voluptatibus doloremque voluptatum sint, nobis illum asperiores dolores. Necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam porro vero cum expedita ut aperiam tenetur velit, consectetur alias quia in voluptatibus doloremque voluptatum sint, nobis illum asperiores dolores. Necessitatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam porro vero cum expedita ut aperiam tenetur velit, consectetur alias quia in voluptatibus doloremque voluptatum sint, nobis illum asperiores dolores. Necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam porro vero cum expedita ut aperiam tenetur velit, consectetur alias quia in voluptatibus doloremque voluptatum sint, nobis illum asperiores dolores. Necessitatibus.</p>
          </div>
          <div className="item"><img src={ draw } alt="" /></div>
          <div className="item"><img src={ play } alt="" /></div>
          <div className="item"><img src={ cinema } alt="" /></div>
        </div>

      </div>

      <div>Role o <span className='icon-scroll'><BsMouse /></span> sobre as imagens</div>
    </>
  );
}
