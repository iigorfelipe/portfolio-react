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
      activeLink: null
    };
  }

  handleClick = (id) => {
    this.setState({ activeLink: id });
  };

  render() {
    const { links, activeLink } = this.state;

    return (
      <div className="nav-container">
        <div className="nav">
          <ul>
            {links.map(link => {
              return (               
                <li
                  key={link.id}
                  id={link.id}
                  className={
                    link.className +
                    (link.id === activeLink ? " active" : "")
                  }
                >
                  <NavLink to={link.to} onClick={() => this.handleClick(link.id)}>
                    <span className="icon">{link.icon}</span>
                    <span className="text">{link.name}</span>
                  </NavLink>
                </li>
              );               
            })}
            <div className="indicator"></div>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navigation;
