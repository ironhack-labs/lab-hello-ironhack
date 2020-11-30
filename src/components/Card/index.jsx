import React from 'react';
import './Card.css';

const Card = (props) => {
  const { image, title, text } = props;
  return (
    <div className='card'>
      <img src={image} alt='React Icons' />
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  )
}

export default Card;