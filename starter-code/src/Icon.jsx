import React from "react";
import "./css/HeaderMain.css";
import "./css/index.css";

export default function Icon() {
  return (
    <div className="icon-container">
      <div className="icons">
        <img src="./images/icon1.png" alt="icon" />
        <h3>Declarative</h3>
        <p>
          React makes it
          <br /> painless to create interactiveUIs.
        </p>
      </div>
      <div className="icons">
        <img src="./images/icon2.png" alt="icon" />
        <h3>Component</h3>
        <p>
          Built encapsulated
          <br /> components that
          <br /> manage their state
        </p>
      </div>
      <div className="icons">
        <img src="./images/icon3.png" alt="icon" />
        <h3>Single-Way</h3>
        <p>
          A set of immutable
          <br /> values are passed to
          <br /> the components
        </p>
      </div>
      <div className="icons">
        <img src="./images/icon4.png" alt="icon" />
        <h3>JSX</h3>
        <p>
          Statically typed,
          <br /> designed to run on <br />
          modern browsers
        </p>
      </div>
    </div>
  );
}
