import React from 'react';
import './UspSection.css'

export default function Usp( { uspData: { header, body, image, altText } } ) {
    return ( 
        <div className="usp-container">
            <img src={image} alt={altText} />
            <h5>{header}</h5>
            <p>{body}</p>
        </div>
    )
}
