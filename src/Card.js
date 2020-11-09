import React, { Component } from "react";
import "./Card.css";

const Card = props => {
    return (
      <div className="Card">
        <img src={props.imgPath} />
        <h2>{props.title}</h2>
        <p>{props.p}</p>
      </div>
    )
}

 

export default Card;