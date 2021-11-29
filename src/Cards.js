import React from "react";
import "./Card.css";
const Card = (props) => {
  return (
    <div className="card">
      <img src={props.src} alt="" />
      <h3>{props.subtitle}</h3>
      <p>{props.paragraph}</p>
    </div>
  );
};

export default Card;
