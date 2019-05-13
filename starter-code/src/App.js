import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav type="navbar">
          <div class="logo">
            <img src="./images/ironhack-logo.svg" alt="ironhack logo" />
          </div>
          <div class="menu">
            <img src="./images/menu-top.svg" alt="menu top" />
          </div>
        </nav>

        <div class="basic">
          <h1>
            Say Hello to <br /> ReactJS
          </h1>
          <h3 class="learn">
            You will learn a Frontend
            <br />
            framework framework from scratch, to
            <br />
            become a Ninka Developer
          </h3>
          <button type="button" class="btn btn-primary btn-lg">
            Awesome!
          </button>

            <img class = "atoms1" src="./images/react-logo.svg" alt="reactlogo"/>
            <img class = "atoms2" src="./images/react-logo.svg" alt="reactlogo"/>
            <img class = "atoms3" src="./images/react-logo.svg" alt="reactlogo"/>
            <img class = "atoms4" src="./images/react-logo.svg" alt="reactlogo"/>
            <img class = "atoms5" src="./images/react-logo.svg" alt="reactlogo"/>
            <img class = "atoms6" src="./images/react-logo.svg" alt="reactlogo"/>
        
        </div>

      </header>

      <div class="row">
        <div class="column">
          <img src="./images/icon1.png" alt="icon1" />
          <h3>Declarative</h3>
          <p>
            React makes it
            <br />
            painless to create
            <br />
            interactive UIs
          </p>
        </div>
        <div class="column">
          <img src="./images/icon2.png" alt="icon2" />
          <h3>Components</h3>
          <p>
            Build encapsulated
            <br />
            components that
            <br />
            manage their state
          </p>
        </div>
        <div class="column">
          <img src="./images/icon3.png" alt="icon3" />
          <h3>Single-Way</h3>
          <p>
            A set of immutable
            <br />
            values are passed to
            <br />
            the components
          </p>
        </div>
        <div class="column">
          <img src="./images/icon4.png" alt="icon4" />
          <h3>JSX</h3>
          <p>
            Statically typed,
            <br />
            designed to run on
            <br />
            modern browsers
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
