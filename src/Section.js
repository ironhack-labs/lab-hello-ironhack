import React from "react";

const Section = () => {
  return (
    <section className="icons">
      <div className="icon-elements">
        <img src="./images/icon1.png" alt="Declarative icon" />
        <h4 className="mb-0 h2">
          <strong>Declarative</strong>
        </h4>
        <p>React makes it painless to create interactive UIs.</p>
      </div>
      <div className="icon-elements">
        <img src="./images/icon2.png" alt="Components icon" />
        <h4 className="mb-0 h2">
          <strong>Components</strong>
        </h4>
        <p>Build encapsulated components that manage their state.</p>
      </div>
      <div className="icon-elements">
        <img src="./images/icon3.png" alt="Single-way icon" />
        <h4 className="mb-0 h2">
          <strong>Single-Way</strong>
        </h4>
        <p>A set of immutable values are passed to the component's.</p>
      </div>
      <div className="icon-elements">
        <img src="./images/icon4.png" alt="JSX icon" />
        <h4 className="mb-0 h2">
          <strong>JSX</strong>
        </h4>
        <p>Statically-typed, designed to run on modern browsers.</p>
      </div>
    </section>
  );
};

export default Section;
