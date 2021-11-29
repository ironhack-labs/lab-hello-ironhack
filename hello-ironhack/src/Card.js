import React from 'react'
import './Card.css'


const Card = (props) => {


    return (
        <article className="card">
            <img src={props.src} alt={props.imageName} />
            <h3 className="title">{props.name}</h3>
            <p>{props.paragraph}</p>
        </article>
    )
}

export default Card