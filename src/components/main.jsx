import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai'
import Navigation from './navigation';
import '../css/main.css';

export default function Main() {
  const history = useHistory();
  const [state] = useState(
    {
      linkedin: "https://www.linkedin.com/in/igor-f-738660210/",
      github: "https://github.com/iigorfelipe",
      email: "/contact"
    }
  );

  return (
    <>
      <Navigation />

      <div className="main-container">
  
        <h1>Hello, I'm Igor!</h1>
        <p>Web development student</p>

        <div className="main-links">
          <Link className="main-link" target="_blank" to={state.linkedin}><AiFillLinkedin /></Link>
          <Link className="main-link" target="_blank" to={state.github}><AiFillGithub /></Link>
          <Link className="main-link" to="/contact"><AiOutlineMail /></Link>
        </div>

        <button className="main-btn" onClick={ () => history.push('/nsei') }>Click me</button>
      </div>
    </>
  );
}
