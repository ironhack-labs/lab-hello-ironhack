import React from "react";
import "./Icons.css";

function Icons({ link, name, txt }) {
  return (
    <div className="list">
      <img alt="logo" className="logo-image" src={link} />
      <h3 className="name">{name}</h3>
      <p className="text">{txt}</p>
    </div>
  );
}

export default Icons;
