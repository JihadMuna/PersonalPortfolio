import React from 'react'
import './CardsContainer.css'

function CardsContainer({children}) {
  return (
    <div id= 'projects' className='cards-container'>
        {children}
    </div>
  )
}

export default CardsContainer
