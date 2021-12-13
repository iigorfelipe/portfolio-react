import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai'
import Navigation from './navigation';

class Main extends React.Component {
  render() {
    return (
      <>
        <Navigation/>
        <div className="main-container">
        <h1>Hello, I'm Igor!</h1>
        <p>Web development student</p>
        <div className="main-links">
          <Link to="" className="main-link"><AiFillLinkedin /></Link>
          <Link to="" className="main-link"><AiFillGithub /></Link>
          <Link to="" className="main-link"><AiOutlineMail /></Link>
        </div>
        <button className="main-btn">Click me</button>
      </div>
      </>
    );
  }
}

export default Main;
