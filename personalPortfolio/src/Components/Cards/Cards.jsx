import React from 'react';
import './Cards.css';
import amazonImage from './amazon.jpg';
import MinecraftImage from './Minecraft.jpg';
import perfumeStoreImage from './perfumeStore.jpg';

export default function Cards({ title, description, link, projectId }) {
  const getImageSource = () => {
    switch (projectId) {
      case 1:
        return amazonImage;
      case 2:
        return MinecraftImage;
      case 3:
        return perfumeStoreImage;
      default:
        return null;
    }
  };

  const backgroundImage = getImageSource();

  if (!backgroundImage) {
    console.error(`Image not found for projectId: ${projectId}`);
  }

  return (
    <div
      className='card'
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1>{title}</h1>
      <div className='card-content'>
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link}>Go To Website</a>
      </div>
    </div>
  );
}