import React from "react";

function Columns(props) {
  return (
    <div className="column">
      <img src={props.image} />
      <h1> {props.title} </h1>
      <p>{props.text}</p>
    </div>
  );
}
export default Columns;
