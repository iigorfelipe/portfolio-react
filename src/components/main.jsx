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
        <p className="main-p1">Olá, me chamo Igor!</p>
        <p className="main-p2">Estudante de desenvolvimento web</p>
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
