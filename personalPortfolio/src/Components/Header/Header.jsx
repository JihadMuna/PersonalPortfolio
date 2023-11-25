import React from 'react';
import './Header.css';
import logoImage from './logoImage.png';

export default function Header() {
  return (
    <header className='header'>
        <div className='logo'>
          <img src={logoImage} alt='logo-img' />
        </div>
      <nav className='nav'>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
