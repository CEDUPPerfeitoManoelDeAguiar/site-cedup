import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import MenuIcon from '@mui/icons-material/Menu';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import InfoIcon from '@mui/icons-material/Info';
import HomeIcon from '@mui/icons-material/Home';

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
                <HomeIcon />
                <span>Início</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/sobre" className="nav-link" onClick={toggleMenu}>
                <InfoIcon />
                <span>Sobre</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cursos" className="nav-link" onClick={toggleMenu}>
                <SchoolIcon />
                <span>Cursos</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/areadoaluno" className="nav-link" onClick={toggleMenu}>
                <PersonIcon />
                <span>Área do Aluno</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contato" className="nav-link" onClick={toggleMenu}>
                <EmailIcon />
                <span>Contato</span>
              </Link>
            </li>
          </ul>
          
          <button className="menu-toggle" onClick={toggleMenu}>
            <MenuIcon />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;