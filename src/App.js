import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <img src="/images/ironhack-logo.svg" alt="ironhack-logo" />
          <img src="/images/menu-top.svg" alt="" />
        </nav>
        <div>
          <h1>Say hello to ReactJS</h1>
          <p>
            Your wil learn how to use <br /> the most popular frontend library,{" "}
            <br /> and become a super ninja developer
          </p>
          <button>Awesome!</button>
        </div>
        <div>
          <div>
            <img src="/images/icon1.png" alt="" />
            <h4>Declarative</h4>
            <p>React makes it mainless to create UIs.</p>
          </div>
          <div>
            <img src="/images/icon2.png" alt="" />
            <h4>Components</h4>
            <p>Build encapsulated components that manage their state</p>
          </div>
          <div>
            <img src="/images/icon3.png" alt="" />
            <h4>Single-Way</h4>
            <p>A set of immutable values are passed to the components</p>
          </div>
          <div>
            <img src="/images/icon4.png" alt="" />
            <h4>JSX</h4>
            <p>Statically-typed, designed to run on modern browsers</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
