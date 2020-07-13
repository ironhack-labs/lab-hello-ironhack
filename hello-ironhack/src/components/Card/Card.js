import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <article className="card">
      <img src={props.source} />
      <h4>{props.title}</h4>
      <p>{props.text}</p>
    </article>
  );
};
export default Card;
