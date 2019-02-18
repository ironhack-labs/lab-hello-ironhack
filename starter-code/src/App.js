import React, { Component } from "react";

import "./App.css";

// import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    // render() returns the html of this component's content
    // (use parenthesis when returning multiple lines of html)
    return (
      // use "className" instead of "class" for styling
      <div className="App container">
        <div className="section1">
          <div className="nav">
            <img src="images/ironhack-logo.svg" />
            <img src="images/menu-top.svg" />
          </div>
          <div className="text">
            <h1 className="titles">Say Hello to react JS</h1>
            <p className="titles">
              You will learn a fronted framework from scratch, to become a ninja
              developer.
            </p>
            <button type="button" className="btn btn-light but">
              Awesome!
            </button>
          </div>
        </div>

        <section className="section2">
          <div className="album-container">
            <div className="1">
              <img src="images/icon1.png" />
              <h3 className="title">Declarative</h3>
              <p>React makes it painless to create interactive UIs.</p>
            </div>
            <div className="2">
              <img src="images/icon2.png" />
              <h3 className="title">Components</h3>
              <p>React makes it painless to create interactive UIs.</p>
            </div>
            <div className="3">
              <img src="images/icon3.png" />
              <h3 className="title">Single-Way</h3>
              <p>React makes it painless to create interactive UIs.</p>
            </div>
            <div className="4">
              <img src="images/icon4.png" />
              <h3 className="title">JSX</h3>
              <p>React makes it painless to create interactive UIs.</p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
