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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, obcaecati iste et voluptates, cum omnis qui totam sequi in placeat nulla inventore, maxime quibusdam quam! Ut repellendus illo saepe vero?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, obcaecati iste et voluptates, cum omnis qui totam sequi in placeat nulla inventore, maxime quibusdam quam! Ut repellendus illo saepe vero?</p>
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
