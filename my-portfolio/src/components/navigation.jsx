import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { TiMessages } from 'react-icons/ti';
import { IoMdSettings } from 'react-icons/io';
import { MdOutlinePhotoSizeSelectActual } from 'react-icons/md';
import '../css/navigation.css';

class Navigation extends React.Component {
  activeLink = () => {
    const list = document.querySelectorAll('.list');
    list.forEach((elem) =>  elem.classList.remove('active'));
  }

  render() {  
    return (
      <div className="nav-container">
        <div className="nav">
          <ul>
            <li className="list active">
              <NavLink to="#" onClick={ () => { this.activeLink() }}>
                <span className="icon"><AiOutlineHome /></span>
                <span className="text">Home</span>
              </NavLink>
            </li>
            <li className="list">
              <NavLink to="#" onClick={ () => { this.activeLink() }}>
                <span className="icon"><CgProfile /></span>
                <span className="text">About</span>
              </NavLink>
            </li>
            <li className="list">
              <NavLink to="#" onClick={ () => { this.activeLink() }}>
                <span className="icon"><TiMessages /></span>
                <span className="text">Contact</span>
              </NavLink>
            </li>
            <li className="list">
              <NavLink to="#" onClick={ () => { this.activeLink() }}>
                <span className="icon"><MdOutlinePhotoSizeSelectActual /></span>
                <span className="text">Portfolio</span>
              </NavLink>
            </li>
            <li className="list">
              <NavLink to="#" onClick={ () => { this.activeLink() }}>
                <span className="icon"><IoMdSettings /></span>
                <span className="text">Settings</span>
              </NavLink>
            </li>
            <div className="indicator"></div>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navigation;
