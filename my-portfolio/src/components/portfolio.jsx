import React from 'react';
import Navigation from './navigation';
import sanji from '../imagens/sanji.gif';
import luffy from '../imagens/luffy.gif';
import zoro from '../imagens/zoro.gif';
import robin from '../imagens/nico-robin.gif';
import teach from '../imagens/blackbeard.gif';

class Portfolio extends React.Component {
  componentDidMount() {
    this.func();
  }

  func = () => {
    document.querySelector(".portfolio-items")
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
        <div className="portfolio-items-wrapper">
          <div className="portfolio-items">
            <div className="portfolio-item">
              <img src={ sanji } alt="" />
            </div>
            <div className="portfolio-item">
              <img src={ luffy } alt="" />
            </div>
            <div className="portfolio-item">
              <img src={ zoro } alt="" />
            </div>
            <div className="portfolio-item">
              <img src={ robin } alt="" />
            </div>
            <div className="portfolio-item">
              <img src={ teach } alt="" />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Portfolio;
