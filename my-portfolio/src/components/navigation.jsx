import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { TiMessages } from 'react-icons/ti';
import { IoMdSettings } from 'react-icons/io';
import { MdOutlinePhotoSizeSelectActual } from 'react-icons/md';
import '../css/navigation.css';

class Navigation extends React.Component {
  constructor() {
    super();

    this.state = {
      links: [
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
          to: "#",
          name: "Message",
          icon: <TiMessages />,
          className: "list"
        },
        {
          id: 4,
          to: "/portfolio",
          name: "Portfolio",
          icon: <MdOutlinePhotoSizeSelectActual />,
          className: "list"
        },
        {
          id: 5,
          to: "#",
          name: "Settings",
          icon: <IoMdSettings />,
          className: "list"
        }
      ],
      activeLink: null,
      activeDisplay: false
    };
  }

  activeOn = (id) => {
    this.setState({ activeLink: id });
  };

  activeOff= () => {
    this.setState({ activeLink: null });
  };

  displayOn = () => {
    this.setState({ activeDisplay: true });
  }

  displayOff = () => {
    this.setState({ activeDisplay: false });
  }

  render() {
    const { links, activeLink, activeDisplay } = this.state;

    return (
      <div className="nav-container">
        <div className="nav">
          <ul>
            {links.map(elem => {
              return (
                <li
                  key={elem.id}
                  id={elem.id}
                  className={
                    elem.className +
                    (elem.id === activeLink ? " active" : "")
                  }
                  onMouseEnter={ this.displayOn }
                  onMouseLeave={ this.displayOff }
                >
                  <NavLink 
                    to={elem.to}
                    onMouseEnter={() => this.activeOn(elem.id)}
                    onMouseLeave={ this.activeOff } 
                  >
                    <span className="icon">{elem.icon}</span>
                    <span className="text">{elem.name}</span>
                  </NavLink>
                </li>
              );               
            })}
            <div className={activeDisplay ? "indicator" : ""}></div>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navigation;
