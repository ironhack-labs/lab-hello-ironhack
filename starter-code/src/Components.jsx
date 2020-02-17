import React from "react";
import "./styles/App.css";

export default function Components({ image, title, infos }) {
  return (
    <div className="component-box">
      <img className="component-image" src={image} alt="" />
      <p className="component-title">{title}</p>
      <p className="component-infos">{infos}</p>
    </div>
  );
}
