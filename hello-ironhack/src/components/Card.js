import React from 'react'

const Card = (props) => {
  return (
    <div className="col-md-3">
      <img src={props.image} alt="imagenes pequeñas"></img>
      <h4>{props.title}</h4>
      <p>{props.description}</p>
    </div>
  )
}

export default Card

