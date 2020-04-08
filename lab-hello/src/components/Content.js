import React, { Component } from "react";

class Content extends Component {
  render() {
    return (
      <div className="icons-container">
        <div>
          <img src="/images/icon1.png" alt="Declarative" />
          <h1>Declarative</h1>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div>
          <img src="/images/icon2.png" alt="Components" />
          <h1>Components</h1>
          <p>Build encapsulated Components that manage their state.</p>
        </div>
        <div>
          <img src="/images/icon3.png" alt="Single-way" />
          <h1>Single-way</h1>
          <p>A set of immutable values are passed to the Component's.</p>
        </div>
        <div>
          <img src="/images/icon4.png" alt="JSX" />
          <h1>JSX</h1>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </div>
    );
  }
}

export default Content;
