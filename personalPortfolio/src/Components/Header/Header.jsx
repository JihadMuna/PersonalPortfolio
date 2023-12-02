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
        <li><a href="#home" onClick={() => console.log('Home clicked')}>Home</a></li>
<li><a href="#projects" onClick={() => console.log('Projects clicked')}>Projects</a></li>
<li><a href="#about" onClick={() => console.log('About clicked')}>About</a></li>
<li><a href="#contact" onClick={() => console.log('Contact clicked')}>Contact</a></li>
<li><a href="#contact-me" onClick={() => console.log('Contact Me clicked')}>Contact Me</a></li>
        </ul>
      </nav>
    </header>
  );
}