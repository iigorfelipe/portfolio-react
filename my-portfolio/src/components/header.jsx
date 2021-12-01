import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <>
        <Link to="" className="header-link-home">Home</Link>
        <div className="header-menu">
          <Link to="/about" className="header-link">About</Link>
          <Link to="/portfolio" className="header-link">Portfolio</Link>
        </div>
      </>
    );
  }
}

export default Header;
