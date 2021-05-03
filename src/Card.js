import React from 'react';
import './Card.css';

function Card({ cardImage, cardTitle, cardDescription }) {
  return (
    <div className="cardStyle">
      <img className="imageStyle" src={cardImage} alt="image"/>
      <h3>{cardTitle}</h3>
      <p className="descriptionStyle">{cardDescription}</p>
    </div>
  );
}

export default Card;
