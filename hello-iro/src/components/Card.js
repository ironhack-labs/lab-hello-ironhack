import React, { Component } from "react";

const Card = props => {
  return (
    <div>
      <img src={props.img} alt="" />
      <p>{props.title} </p>
      <p className="card-description">{props.description}</p>
    </div>
  );
};

export default Card;
