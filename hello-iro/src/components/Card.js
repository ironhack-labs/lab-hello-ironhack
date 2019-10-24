import React, { Component } from "react";

const Card = props => {
  return (
    <div
      style={{
        textAlign: "center"
      }}
    >
      <img src={props.img} alt="" />
      <p>{props.title} </p>
      <p
        style={{
          padding: "2% 2%"
        }}
      >
        {props.description}
      </p>
    </div>
  );
};

export default Card;
