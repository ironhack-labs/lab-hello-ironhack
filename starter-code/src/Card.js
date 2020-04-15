import React from "react";

const Card = props => {
  return (
    <div>
      <img src= {props.image} alt= {props.text} />
      <h3> {props.text}</h3>
      <h4> {props.second_text}</h4>
    </div>
  )
}

export default Card