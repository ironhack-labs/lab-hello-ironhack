import React from 'react';
import "./../styles/Thumbnail.css"

export default function Thumbnail({
    icon,
    title,
    info
}) {
    return (
        <div className="thumbnail">
            <img src={icon} alt={title} /> 
            <div className="title">
                <h3>{title}</h3>
            </div>
            <div className="info">
                <p>{info}</p>
            </div>
        </div>
    );
}

