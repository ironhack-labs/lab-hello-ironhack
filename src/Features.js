import React from "react";
import "./assets/styles/style.css";

const Features = (props) => {
  return (
    <div className="features">
      <div className="feature">
        <img src="./images/icon1.png" alt="Declarative icon" />
        <h4>Declarative</h4>
        <p>React makes it painless to create interactive UIs.</p>
      </div>

      <div className="feature">
        <img src="./images/icon2.png" alt="Components icon" />
        <h4>Components</h4>
        <p>Build encapsulated components that manage their state.</p>
      </div>

      <div className="feature">
        <img src="./images/icon3.png" alt="Single-way icon" />
        <h4>Single-Way</h4>
        <p>A set of immutable values are passed to the components.</p>
      </div>

      <div className="feature">
        <img src="./images/icon4.png" alt="JSX icon" />
        <h4>JSX</h4>
        <p>Statically-typed, designed to run on modern browsers.</p>
      </div>
    </div>
  );
};

export default Features;
