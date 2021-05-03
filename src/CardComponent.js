import React from 'react';
import './CardComponent.css'

function Card({cardImage, cardTitle, cardDescription}){
  return (
    <div className="cardDiv">
      <img src={cardImage} alt="image"/>
      <h2>{cardTitle}</h2>
      <p>{cardDescription}</p>
    </div>
  )
}

export default Card;
