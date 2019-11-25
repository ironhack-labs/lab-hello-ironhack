import React from "react";
import "./Icon.css";

export default function Icon(props) {
  return (
    <div className="subdescription">
      <img id="one-icon" src={props.icon} alt="icon logo" />
      <h3 id="subtitle">{props.subtitle}</h3>
      <p id="legend">{props.legend}</p>
    </div>
  );
}
