import React from "react";

const App = () => {
  return (
    <div className="big-container">
      <header>
        <div className="header-content">
          <div className="nav">
            <div className="logo">
              <img src="./images/ironhack-logo.svg"></img>
            </div>
            <div className="menu">
              <img src="./images/menu-top.svg"></img>
            </div>
          </div>

          <div className="container">
            <h1 className="title white">
              Say hello to ReactJS
              <br />
            </h1>
            <p className="white">
              You will learn how to use
              <br />
              the most popular frontend library,
              <br /> and become a super Ninja developer.
            </p>
          </div>
          <div>
            <button className="btn">Awesome!</button>
          </div>
        </div>
      </header>
      <div className="feature-container">
        <div className="features">
          <div className="declarative small-container">
            <img src="./images/icon1.png" />
            <h3>Declarative</h3>
            <p>React makes it painless to create interactive UI.</p>
          </div>
          <div className="components small-container">
            <img src="./images/icon2.png" />
            <h3>Components</h3>
            <p>Build encapsulated components that manage their state.</p>
          </div>
          <div className="single-way small-container">
            <img src="./images/icon3.png" />
            <h3>Single-Way</h3>
            <p>A set of immutable values are passed to the components.</p>
          </div>
          <div className="jsx small-container">
            <img src="./images/icon4.png" />
            <h3>JSX</h3>
            <p>Statically-typed, designed to run on modern browsers.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
