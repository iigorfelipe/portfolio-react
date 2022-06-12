import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai'
import Navigation from './navigation';
import '../css/main.css';

export default function Main() {
  return (
    <>
      <Navigation />

      <div className="main-container">
        <h1>Hello, I'm Igor!</h1>
        <p>Web development student</p>

        <div className="main-links">
          <a
            className="main-link"
            href="https://www.linkedin.com/in/iigor-felipe/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin />
          </a>
          <a
            className="main-link"
            href="https://github.com/iigorfelipe"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub />
          </a>
          <Link
            className="main-link"
            to="/contact"
          >
            <AiOutlineMail />
          </Link>
        </div>
      </div>
    </>
  );
}
