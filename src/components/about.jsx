import React from 'react';
import Navigation from './navigation';
import { icons } from './helpers/icons';
import '../css/about.css'

export default function About() {

  return (
    <>
      <Navigation />

      <div className="about-container">
        <div className="about-about">
          <p>Olá, meu nome é Igor, sou estudante de desenvolvimento web, comecei pelo YouTube em Julho de 2021 só para ver se eu ia gostar, já que eu amo <span>tecnologia</span>, e não deu outra, não só gostei como me apaixonei.</p>
          <br />
          <p>Além te ter gostado muito eu via <span>futuro</span> nisso, decidi então investir tudo nessa área, foi quando entrei na Trybe como estudante e foi a melhor escolha da minha vida.</p>
          <br />
          <p>Para me dedicar 100% nos estudos, saí do meu antigo emprego e nessa jornada adquiri muitos conhecimentos tanto no <span>Front-end</span> quanto no <span>Back-end</span>, eu amei ambas as áreas e por isso estou em busca de me tornar um desenvolvedor <span>Web Full Stack</span>.</p>
        </div>

        <div className="about-skills">
          {
            icons.map((item) => (
              <div
                key={item.id}
                className="about-skills-container"
              >
                <div className="about-icon">
                  {item.icon}
                </div>
                <div>{item.name}</div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
}
