import React from 'react'
import "./../styles/Card.css";

export default function Card({
    icon,
    subTitle,
    description
}) {
    return (
        <div className="card">
            <img src={icon} alt={`icon`}/>
            <div>
                <h2>{subTitle}</h2>
                <p>{description}</p>
            </div>
        </div>
    )
}
