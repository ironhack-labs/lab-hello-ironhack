import React from "react";
import "./card.styles.css";

const Card = ({ title, src, text }) => {
  return (
    <div className="card">
      <img className="card-img" src={src} />
      <h3>{title}</h3>
      <h4>{text}</h4>
    </div>
  );
};

export default Card;
