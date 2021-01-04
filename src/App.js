import React from "react";
import "./index.css";

function App() {
  return (
    <div>
      <div className="top">
        <div className="heder">
          <img src="../images/ironhack-logo.svg"></img>
          <img src="../images/menu-top.svg"></img>
        </div>
        <h1>
          Say hello to<br></br>ReactJS
        </h1>
        <p>
          You will learn how to use<br></br>the most popular frontend library,
          <br></br> and become a super Ninja developer.
        </p>
        <a href="#" class="myButton">
          Awesome!
        </a>{" "}
      </div>
      <div className="Icons">
        <div>
          <img src="../images/icon1.png"></img>
          <h2>Declarative</h2>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div>
          <img src="../images/icon2.png"></img>
          <h2>Components</h2>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div>
          <img src="../images/icon3.png"></img>
          <h2>Single-Way</h2>
          <p>A set of immutable values are passed to the components</p>
        </div>
        <div>
          <img src="../images/icon4.png"></img>
          <h2>JSX</h2>
          <p>Statiscally-typed, designed to run on modern browsers.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
