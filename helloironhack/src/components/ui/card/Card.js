import React from "react";
import "./Card.css";

const Card = ({img, title, text}) => {
    return (
    
    <article className="card">
      <img src={img} alt={title}/>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
};

export default Card;
