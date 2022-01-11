import React from "react";
import './style.css'

const Section2 = () => {
  return (
    <section>
      <div>
        <img src="./images/icon1.png" alt="" />
        <h1>Declarative</h1>
        <p>
          React makes it <br /> painless to create <br /> a interactive UIs.
        </p>
      </div>

      <div>
        <img src="./images/icon2.png" alt="" />
        <h1>Components</h1>
        <p>Build encapsulated components that manage their state.</p>
      </div>

      <div>
        <img src="./images/icon3.png" alt="" />
        <h1>Single-Way</h1>
        <p>A set of inmunatable values are passed to the component's.</p>
      </div>
      
      <div>
        <img src="./images/icon4.png" alt="" />
        <h1>JSX</h1>
        <p>Statically typed, designed to run on modern browsers.</p>
      </div>
    </section>
  );
};

export default Section2;
