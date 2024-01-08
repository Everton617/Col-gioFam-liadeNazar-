import React, { useState } from 'react';
import '../css/NavBar.css';
import familia from '../assets/img/familia.png';

const Navbar = () => {
  const [isNavActive, setIsNavActive] = useState(false);

  const handleMenuClick = () => {
    setIsNavActive(!isNavActive);
  };

  return (
    <div className={`container-navbar ${isNavActive ? 'nav-ativa' : ''}`}>
      <div className="logo">
        <div className='box-title'>
          <h2>Colégio</h2>
          <h1>Família de Nazaré</h1>
        </div>
        <div className='box-img'>
          <img src={familia} alt="" />
        </div>
      </div>
      
      <nav  className={isNavActive ? 'active' : ''}>
        <div className="menu-icons" onClick={handleMenuClick}>
          <i className="fas fa-bars"></i>
          <i className="fas fa-times"></i>
        </div>
        <ul className='nav-list'>
          <li><a href="#principios">O que prezamos</a></li>
          <li><a href="#segmentos">Segmentos</a></li>
          <li><a href="#footer">Contatos</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;