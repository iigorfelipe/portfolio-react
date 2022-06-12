import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { links } from './helpers/links';
import '../css/navigation.css';

export default function Navigation() {
  const [activeLink, setActiveLink] = useState(null);

  return (
    <div className="nav-container">
      <div className="nav">
        <ul>
          {
            links.map(item => {
              return (
                <li
                  key={item.id}
                  id={item.id}
                  className={
                    item.className +
                    (item.id === activeLink ? " active" : "")
                  }
                >
                  <NavLink 
                    to={item.to}
                    onMouseEnter={() => setActiveLink( item.id ) }
                    onMouseLeave={() => setActiveLink( null ) } 
                  >
                    <span className="icon">{item.icon}</span>
                    <span className="text">{item.name}</span>
                  </NavLink>
                </li>
              );               
            })
          }
        </ul>
      </div>
    </div>
  );
}
