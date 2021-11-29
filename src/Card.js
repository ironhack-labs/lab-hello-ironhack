import React from 'react'
import './Card.css'


const Card = (props) => {

  return (
    <article className="card">
      <header>
        <img src={props.src} alt={props.name} />
        <p className="title"></p>
      </header>
      <div>
        <p>Lorem ipsum</p>
      </div>
    </article>
  )
}

export default Card