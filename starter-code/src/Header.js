import React, { Component } from "react";
import "./Header.css";
class Heder extends Component {
  render() {
    return (
      <div className="Header">
        <h1>Say Hello to <br/> ReactJS</h1>
        <p>You will learn Frontend <br /> framework from scratch to <br /> become Ninka Developer</p>
        <button>Awesome !</button>
      </div>
    );
  }
}

export default Heder;