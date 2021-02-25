import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <article className="card__col">
      <img src={props.image} alt="icon" className='card-image' />
      <h4 className='card-header'>{props.title}</h4>
      <p className='card-text'>{props.text}</p>
    </article>
  )
}

export default Card
