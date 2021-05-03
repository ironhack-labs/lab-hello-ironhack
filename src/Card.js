import React from 'react';
import './App.css';

const Card = ({title, text, image}) => {
    return(
        <article className="card-item">
          <img src={image}></img>
          <h3>{title}</h3>
          <p>{text}</p>
        </article>
    )
}

export default Card;
