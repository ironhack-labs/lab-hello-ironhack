import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <img className="Iron" src="/images/ironhack-logo.svg" alt="Ironhack logo" />
          <img className="Menu" src="/images/menu-top.svg" alt="Ironhack logo" />
        </nav>
        <div className="Main">
          <div className="Left">
            <h1>Say hello to ReactJS</h1>
            <p>
              You will learn a Frontend framework from scratch, to become an
              Ninja Developer.
            </p>
            <button>Awesome!</button>
          </div>
          <div className="Right">
            <div className="RightA">
              <img className="React1" src="/images/react-logo.svg" alt="React logo" />
              <img className="React2" src="/images/react-logo.svg" alt="React logo" />
              <img className="React3" src="/images/react-logo.svg" alt="React logo" />
            </div>
            <div className="RightB">
              <img className="React4" src="/images/react-logo.svg" alt="React logo" />
              <img className="React5" src="/images/react-logo.svg" alt="React logo" />
              <img className="React6" src="/images/react-logo.svg" alt="React logo" />
            </div>
          </div>
        </div>
        <div className="Cards">
          <div className="Card">
            <img src="/images/icon1.png" alt="Icon 1" />
            <h2>Declarative</h2>
            <p>React makes it painless to create interactive UIs.</p>
          </div>
          <div className="Card">
            <img src="/images/icon2.png" alt="Icon 1" />
            <h2>Components</h2>
            <p>Buid encapsulated components that manage their state.</p>
          </div>
          <div className="Card">
            <img src="/images/icon3.png" alt="Icon 1" />
            <h2>Single-Way</h2>
            <p>A set of immutable values are passed to the components.</p>
          </div>
          <div className="Card">
            <img src="/images/icon4.png" alt="Icon 1" />
            <h2>JSX</h2>
            <p>Statically-typed, designed to run on modern browsers.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
