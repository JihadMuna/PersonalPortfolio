import React from 'react';
import './HeroSection.css';
import backgroundImage from './background.jpg'; // Provide the correct relative path

export default function HeroSection() {
  return (
    <section  id= 'home' className='hero-section' style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h1>Welcome to My Portfolio</h1>
      <p>Explore my projects and skills</p>
    </section>
  );
}