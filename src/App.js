import React, { Component } from "react";
import "./App.css";

const mainArea = (
  <div className="container mt-5">
    <div className="row">
      <div className="display-1 font-weight-bold col ">
        Say hello to <br /> ReactJS
      </div>
    </div>

    <div className="row">
      <div className="h4 font-weight-lighter mb-4 col">
        You will learn a Frontend <br /> framework from scratch, to <br />
        become a Ninja Developer.
      </div>
    </div>

    <div className="row">
      <div className="col my-4">
        <button className="btn btn-light btn-lg" type="submit">
          Awesome!
        </button>
      </div>
    </div>
  </div>
);

const navbar = (
  <nav class="navbar navbar-dark">
    <div className="container">
      <a class="navbar-brand" href="#">
        <img
          src="../images/ironhack-logo.svg"
          width="40"
          height="40"
          alt=""
          loading="lazy"
        />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
  </nav>
);


class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        {navbar}
        {mainArea}
      </div>
    );
  }
}

export default App;
