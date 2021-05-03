import React from 'react';
import './BodyComponent.css';

function Body ({image, title, description}) {
    return (
        <div className="body">
           <img src={image}/>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default Body;