import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div class="card">
      <img src={props.img} />
      <h3>{props.caption}</h3>
      <p>{props.description}</p>
    </div>
  )
};

export default Card;