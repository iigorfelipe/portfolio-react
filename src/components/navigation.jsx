import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { TiMessages } from 'react-icons/ti';
import { MdOutlinePhotoSizeSelectActual } from 'react-icons/md';
import '../css/navigation.css';

export default function Navigation() {
  const [display, setDisplay] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const [links] = useState([
    {
      id: 1,
      to: "/",
      name: "Home",
      icon: <AiOutlineHome />,
      className: "list"
    },
    {
      id: 2,
      to: "/about",
      name: "About",
      icon: <CgProfile />,
      className: "list"
    },
    {
      id: 3,
      to: "/portfolio",
      name: "Portfolio",
      icon: <MdOutlinePhotoSizeSelectActual />,
      className: "list"
    },
    {
      id: 4,
      to: "/contact",
      name: "Contact",
      icon: <TiMessages />,
      className: "list"
    }
  ]);

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
                  onMouseEnter={() => setDisplay(true) }
                  onMouseLeave={() => setDisplay(false) }
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

          <div className={display ? "indicator" : ""}></div>

        </ul>
      </div>
    </div>
  );
}
