import React from 'react';
import './cards.css';

function cards({ image, title, description }) {
    return 
        <div className="cards">
        <img src={image}/>
        <h4>{title}</h4>
        <p>{description}</p>
    </div>
}

export default cards;
