import React from 'react';
import './card.css';

const Card = ({imgPath, title, description}) => {
    return (
        <div className="card-container">
            <img src={imgPath}/>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default Card;