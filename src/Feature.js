import React from "react";

// TODO Features section
// Prop of each element of that single feature

function Feature(props) {
  return (
    // Creating and styling each component by separated

    <div className="feature">
      <img src={props.image} alt={props.title} />
      <h4>{props.title}</h4>
      <p>{props.description}</p>
    </div>
  );
}

export default Feature;
