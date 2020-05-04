import React from "react";

function Bottom(props) {
  return (
    <div className="items">
      <img src={props.image} className="image"/>
      <h1>{props.title}</h1>
      <p>{props.text}</p>
    </div>
  );
}

export default Bottom;
