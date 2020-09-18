import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="title-screen">
        <img id="background-logo-1" src="/images/react-logo.svg"></img>
        <img id="background-logo-2" src="/images/react-logo.svg"></img>
        <img id="background-logo-3" src="/images/react-logo.svg"></img>
        <div className="nav-bar">
            <img id="logo" src="/images/ironhack-logo.svg" alt="logo"></img>
            <img id="menu-top" src="/images/menu-top.svg" alt="menu-top"></img>
        </div>
        <div className="title">
        <h1>Say hello to ReactJS</h1>
        <h2>
          You will learn a Frontend framework from scratch, to become a Ninja
          Developer.
        </h2>
        <a href="#" className="button">
          Awesome!
        </a>
        </div>
      </div>
      <div className="feature-screen">
        <div className="feature-card">
          <img id="icon" src="/images/icon1.png" alt="icon1"></img>
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div className="feature-card">
        <img id="icon" src="/images/icon2.png" alt="icon2"></img>
          <h3>Components</h3>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div className="feature-card">
        <img id="icon" src="/images/icon3.png" alt="icon3"></img>
          <h3>Single-Way</h3>
          <p>A set of immutable values are passed to the components.</p>
        </div>
        <div className="feature-card">
        <img id="icon" src="/images/icon4.png" alt="icon4"></img>
          <h3>JSX</h3>
          <p>Statically types, designed to run on modern browsers.</p>
        </div>
      </div>
    </div>
  );
};

export default App;
