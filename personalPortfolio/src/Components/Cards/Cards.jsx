import React from 'react'
import './Cards.css'

export default function Cards({title, description, link}) {
  return (
    <div className='card'>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link}>
      Go To Website
      </a>
    </div>
  )
}
