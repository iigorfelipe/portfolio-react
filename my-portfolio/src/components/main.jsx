import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai'
import Navigation from './navigation';
import '../css/main.css';

class Main extends React.Component {
  constructor() {
    super();

    this.state = {
      linkedin: "https://www.linkedin.com/in/igor-f-738660210/",
      github: "https://github.com/iigorfelipe",
      email: "/contact"
    }
  }

  render() {
    const { linkedin, github, email } = this.state

    return (
      <>
        <Navigation/>
        <div className="main-container">
        <h1>Hello, I'm Igor!</h1>
        <p>Web development student</p>
        <div className="main-links">
          <Link target="_blank" to={linkedin} className="main-link"><AiFillLinkedin /></Link>
          <Link target="_blank" to={github} className="main-link"><AiFillGithub /></Link>
          <Link to={email} className="main-link"><AiOutlineMail /></Link>
        </div>
        <button className="main-btn">Click me</button>
      </div>
      </>
    );
  }
}

export default Main;
