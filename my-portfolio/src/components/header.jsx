import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <div className="header-menu">
        <Link to="" className="header-link">About</Link>
        <Link to="" className="header-link">Portfolio</Link>
      </div>
    );
  }
}

export default Header;
