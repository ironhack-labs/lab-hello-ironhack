import React from 'react';
import './Card.css';

const Card = ({ title, content, imgPath }) => 
  <div className="card">
    <img src={imgPath} alt={title}/>
    <h2>{title}</h2>
    <p>{content}</p>
  </div>

export default Card;
