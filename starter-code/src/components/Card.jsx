import React from 'react'
import '../styles/Card.css'

function Card(props) {
  return (
      <div className='card__item'>
        <img className='card__img' src={props.img} alt=""/>
        <h2 className='card__title'>{props.title}</h2>
        <p className='card__text'>{props.text}</p>
      </div>
  )
}

export default Card
