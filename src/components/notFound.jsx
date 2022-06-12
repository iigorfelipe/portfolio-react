import React from "react";
import Navigation from './navigation';
import '../css/notFound.css';

export default function NotFound() {
  return (
    <div className="notFound-container">
      <p>Página não encontrada :(
      <br />
      <br />
      Por favor, escolha uma das opções abaixo</p>
      <Navigation />
    </div>
  );
}
