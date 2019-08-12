import React from "react";

const Card = props => {
  return (
    <div>
      <h1> {props.titulo} </h1>

      <p>{props.parrafo}</p>
    </div>
  );
};

export default Card;
