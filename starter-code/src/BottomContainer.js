import React from "react";

const Bottom = () => {
  return (
    <div className="bottomContainer">
      <div className="itemContainer">
        <img className="iconsBottom" src="images/icon1.png" />
        <h2>Declarative</h2>
        <p>React makes it painless to create interactive UIs</p>
      </div>
      <div className="itemContainer">
        <img className="iconsBottom" src="images/icon2.png" />
        <h2>Components</h2>
        <p>Build encapsulated comonents that manange their state</p>
      </div>
      <div className="itemContainer">
        <img className="iconsBottom" src="images/icon3.png" />
        <h2>Single-Way</h2>
        <p>A set of immutable balues are passed to the component</p>
      </div>
      <div className="itemContainer">
        <img className="iconsBottom" src="images/icon4.png" />
        <h2>JSX</h2>
        <p>Statically-types, designed to run on modern browsers</p>
      </div>
    </div>
  );
};

export default Bottom;
