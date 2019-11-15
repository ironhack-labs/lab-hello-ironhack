import React, { Component } from "react";

import "./Hero.css";
class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <h1 className="hero-title">
          Say hello to
          <br />
          ReactJS
        </h1>
        <p className="hero-text">
          You will learn a Frontend <br />
          framework from scratch to
          <br />
          become a Ninja Developer
        </p>
        <button className="hero-button">Awesome!</button>
      </div>
    );
  }
}

export default Hero;
