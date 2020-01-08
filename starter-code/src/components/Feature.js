import React from 'react'

const Feature = props => {
  return (
    <div className="feature-card">
      <img className="card-img" src={props.image} alt=""></img>
      <h4 className="card-title">{props.title}</h4>
      <p className="card-text">{props.text}</p>
    </div>
  )
}

export default Feature