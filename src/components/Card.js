import React from 'react'
import './styles/Card.css'


const Card = (props) => {
    return (
        <div className="Card">
        <img src={props.img} />
        <h3>{props.title}</h3>
        <p>{props.text}</p>
        </div>
    )
}

export default Card