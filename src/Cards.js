import React from 'react';

function Cards({ images, title, description }) {
    return(
        <div className="single-card">
        <img src={images}/>
        <h4>{title}</h4>
        <p>{description}</p>
        </div>
    )  
}

export default Cards;
