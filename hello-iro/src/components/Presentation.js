import React, { Component } from "react";

const Presentation = props => {
  return (
    <div className="presentation-div">
      <h1 className="presentation-title">{props.title}</h1>
      <p className="presentation-description">{props.description}</p>
      <button className="presentation-btn">{props.buttonTittle}</button>
    </div>
  );
};

export default Presentation;
