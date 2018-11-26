import React from "react";
import ReactDOM from "react-dom";
// import App from "./App.js";
import "./App.css";

ReactDOM.render(

  <section className="whole-wrap">

    <header>
    <nav>
      <img src="/images/ironhack-logo.svg" />
      <img src="/images/menu-top.svg" />
    </nav>

    <div className="head">
      <h1>Say hello to ReactJS</h1>
      <h3>You will learn a Front-end framework from scratch, to become a Ninja Developer</h3>
      <button className="button-styling">Awesome !</button>
    </div>
    </header>


    <div className="wrapper-menu">
      <div className="pres-menu">

        <div className="menu-cat">
          <img src="images/icon1.png"></img>
          <h5>Declarative</h5>
          <p>React makes it painless to create interactive UIs</p>
        </div>

        <div className="menu-cat">
        <img src="images/icon2.png"></img>
        <h5>Components</h5>
        <p>Build encapsulated components that manage their state.</p>
        </div>

        <div className="menu-cat">
        <img src="images/icon3.png"></img>
        <h5>Single-Way</h5>
        <p>A set of immunable values are passed to the component's.</p>
        </div>

        <div className="menu-cat">
          <img src="images/icon4.png"></img>
          <h5>JSX</h5>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>

      </div>
    </div>

  </section>,


  document.getElementById("root")
);
