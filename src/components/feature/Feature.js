import React from 'react';
import './Feature.css';

const Feature = ({image, featureTitle, description}) => {
    return(
        <div id="feature-box">
            <img src={image}></img>
            <h3>{featureTitle}</h3>
            <p>{description}</p>
        </div>
    )
}

export default Feature;