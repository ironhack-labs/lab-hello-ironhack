import React, { Component } from "react";

class Undericons extends Component {
  render() {
    return (
      <div>
        <footer className="footer">
          <section>
            <img src="/images/icon1.png" alt="icon1" />
            <h1>Declarative</h1>
            <p>React makes it painless to create interactive UIs.</p>
          </section>
          <section>
            <img src="/images/icon2.png" alt="icon1" />
            <h1>Components</h1>
            <p>Build encapsulated components that manage their state.</p>
          </section>
          <section>
            <img src="/images/icon3.png" alt="icon1" />
            <h1>Single-Way</h1>
            <p>A set of immutable values are passed to the component's</p>
          </section>
          <section>
            <img src="/images/icon4.png" alt="icon1" />
            <h1>JSX</h1>
            <p>Statically-typed designed to run on modern browsers.</p>
          </section>
        </footer>
      </div>
    );
  }
}

export default Undericons;
