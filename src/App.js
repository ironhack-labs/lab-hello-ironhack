import React, { Component } from "react";
import "./App.css";

const mainArea = (
  <div className="container mt-5">
    <div className="row">
      <div className="display-3 font-weight-bold col col-lg-6">
        Say hello to ReactJS
      </div>
    </div>

    <div className="row">
      <div className="h3 h5-lg font-weight-lighter my-3 col-8 col-lg-4">
        You will learn a Frontend framework from scratch, to
        become a Ninja Developer.
      </div>
    </div>

    <div className="row">
      <div className="col my-4">
        <button className="btn btn-light btn-lg mt-4" type="submit">
          Awesome!
        </button>
      </div>
    </div>  
  </div>
);

const navbar = (
  <nav class="navbar navbar-dark sticky-top my-3">
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
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="#">
            Home <span class="sr-only">(current)</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Features
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Pricing
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">
            Disabled
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

class App extends Component {
  render() {
    return (
      <div className="App container">
        {navbar}
        {mainArea}
      </div>
    );
  }
}

export default App;
