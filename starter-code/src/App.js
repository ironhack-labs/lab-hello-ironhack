import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="section1">
          <ul>
            <li>
              <div className="">
                <img src="images/ironhack-logo.svg" className="ironLogo" />
                <h1> Say hello to ReactJS </h1>
                <p className="pSection1">
                  You will learn a Frontend framework from scratch, to become an
                  Ninka Developer.
                </p>
              </div>
              <div>
                <button className="button-l"> Awesome! </button>
              </div>
            </li>

            <li>
              <div className="logo-react">
                <img src="images/react-logo.svg" className="react-logo" />
                <img src="images/react-logo.svg" className="react-logo1" />
                <img src="images/react-logo.svg" className="react-logo1" />
              </div>
            </li>
          </ul>
        </div>
        <div className="section2">
          <ul>
            <li>
              <img src="images/icon1.png" />
              <h3>Declarative</h3>
              <p>React makes it painless to create interactive UIs.</p>
            </li>
            <li>
              <img src="images/icon2.png" />
              <h3>Components</h3>
              <p>Build encapsulated components that manage their state.</p>
            </li>
            <li>
              <img src="images/icon3.png" />
              <h3>Single-Way</h3>
              <p>A set of inmutable values are passed to the components.</p>
            </li>
            <li>
              <img src="images/icon4.png" />
              <h3>JSX</h3>
              <p>Statically-typed, designed to run on modern browsers.</p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
