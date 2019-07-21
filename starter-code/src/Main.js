import React, { Component } from "react";

class Main extends Component {
  render() {
    return (
      <main>
        <div className="wrapper">
          <div className="card">
            <img src="images/icon1.png"></img>
            <h3>Declarative</h3>
            <p>React makes it painless to create interactive UIs.</p>
          </div>
          <div className="card">
            <img src="images/icon2.png"></img>
            <h3>Components</h3>
            <p>Build encapsulated elements that manage their state.</p>
          </div>
          <div className="card">
            <img src="images/icon3.png"></img>
            <h3>Single-way</h3>
            <p>A set of immutable values are passable to the component's.</p>
          </div>
          <div className="card">
            <img src="images/icon4.png"></img>
            <h3>JSX</h3>
            <p>Statically typed designed to run in modern browsers.</p>
          </div>
        </div>
      </main>
    );
  }
}

export default Main;