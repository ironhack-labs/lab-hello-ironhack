import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav class="nav">
        <img src="../images/IHLogo.png" className="App-logo" alt="logo" />
        <img src="../images/menu-top.svg" />
      </nav>
      <header className="App-header">
        <h1>Say hello to React.js</h1>
        <p>You will learn a Frontend framework from scratch, to become an Ninja Developer</p>
        <button href="#" class="awesome">
          Awesome!
        </button>
      </header>
      <div class="options">
        <div>
          <img src="../images/icon1.png" />
          <h3>Declarative</h3>
          <p> React makes it painless to create interactive UIs.</p>
        </div>
        <div>
          <img src="../images/icon2.png" />
          <h3>Components</h3>
          <p> Buils encapsulated components that manage their state.</p>
        </div>
        <div>
          <img src="../images/icon3.png" />
          <h3>Single-Way</h3>
          <p> A set of immutable values are passed to the component's.</p>
        </div>
        <div>
          <img src="../images/icon4.png" />
          <h3>JSX</h3>
          <p> Statially-typed, designed to run on modern browsers.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
