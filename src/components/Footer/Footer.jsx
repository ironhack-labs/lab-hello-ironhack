import React from "react";
const icon1 = "images/icon1.png";
const icon2 = "images/icon2.png";
const icon3 = "images/icon3.png";
const icon4 = "images/icon4.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="card">
        <img src={icon1} />
        <h4>Declarative</h4>
        <p>React makes it painless to create interactive UIs.</p>
      </div>
      <div className="card">
        <img src={icon2} />
        <h4>Components</h4>
        <p>Build encapsulated components that manage their state.</p>
      </div>
      <div className="card">
        <img src={icon3} />
        <h4>Single-Way</h4>
        <p>A set of immutable values are passed to the components.</p>
      </div>
      <div className="card">
        <img src={icon4} />
        <h4>JSX</h4>
        <p>Statically-typed, designed to run on modern browsers.</p>
      </div>
    </div>
  );
};

export default Footer;
