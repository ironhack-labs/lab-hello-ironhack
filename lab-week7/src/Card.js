import React from 'react';
import './Card.css'


const Card = (props) => {
    return <div className="card">

    <img src={props.src} alt={props.name}/>
    <h2>{props.text}</h2>
    <p>{props.paragrah}</p>

    </div>
}

export default Card