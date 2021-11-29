import React from 'react'
import './Card.css'


const Card = (props) => {

  return (
    <article className="card">
        <img src={props.src} alt={props.cardTitle} />
        <h2>{props.cardTitle}</h2>
        <p>{props.cardParagraph}</p>
    </article>
  )
}

export default Card