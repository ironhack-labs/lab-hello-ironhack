import React from "react";
import "./Icon.css";

function Icons({ img, title, txt }) {
  return (
    <div className="last-container">
      <img alt="icons" className="icon" src={img} />
      <h2>{title}</h2>
      <p>{txt}</p>
    </div>
  );
}
export default Icons;
