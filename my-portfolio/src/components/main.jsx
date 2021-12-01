import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

class Main extends React.Component {
  render() {
    return (
      <>
        <div className="main-nav">
          <Link to="/about" className="main-nav-link">About</Link>
          <Link to="/portfolio" className="main-nav-link">Portfolio</Link>
        </div>
        <div className="main-container">
        <h1>Hello, I'm Igor!</h1>
        <p>Web development student</p>
        <div className="main-container-links">
          <Link to="" className="main-link"><AiFillLinkedin /></Link>
          <Link to="" className="main-link"><AiFillGithub /></Link>
        </div>
        <button className="main-btn">Click me</button>
      </div>
      </>
    );
  }
}

export default Main;
