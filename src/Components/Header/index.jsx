import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import './style.css';

const Header = () => {
  const toggleMenu = () => {
    const navMenu = document.querySelector('.nav-menu');
    const menuToggle = document.querySelector('.menu-toggle');
    
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <Link to="/" className="logo"></Link>
          
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={toggleMenu}>
                <span className="material-icons"></span>
                <span>Início</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/sobre" className="nav-link" onClick={toggleMenu}>
                <span className="material-icons"></span>
                <span>Sobre</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cursos" className="nav-link" onClick={toggleMenu}>
                <span className="material-icons"></span>
                <span>Cursos</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/areadoaluno" className="nav-link" onClick={toggleMenu}>
                <span className="material-icons"></span>
                <span>Área do Aluno</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contato" className="nav-link" onClick={toggleMenu}>
                <span className="material-icons"></span>
                <span>Contato</span>
              </Link>
            </li>
          </ul>
          
          <button className="menu-toggle" onClick={toggleMenu}>
            <span className="material-icons">menu</span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;