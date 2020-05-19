import React, { Component } from "react";
import "./App.css";

const mainHead = <h1 className="display-1">Say hello to ReactJS</h1>;
const subTitle = (<p>You will learn a Frontend framework from scratch, to become a Ninja Developer.</p>);
const button = <button className="btn btn-dark btn-lg" type="submit">Awesome!</button>;

const navbar = (
  <nav class="navbar navbar-light">
    <a class="navbar-brand" href="#">
      <img
        src="../images/ironhack-logo.svg"
        width="40"
        height="40"
        alt=""
        loading="lazy"
      />
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  </nav>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        {navbar}
        {mainHead}
        {subTitle}
        {button}
      </div>
    );
  }
}

export default App;
