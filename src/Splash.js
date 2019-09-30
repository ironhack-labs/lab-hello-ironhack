import React, { Component } from "react";
import Heading from "./Heading";
import Button from "./Button";
import "./App.css";

let background = "./images/react-logo.svg"

class Splash extends Component {
  render() {
    return (
        <main>
        <Heading />
        <div id="content">
            <div>
                <h1>Say Hello to ReactJS</h1>
                <p>You will learn a Frontend framework from scratch, to become a Ninja Developer.</p>
                <Button />
            </div>
            <div>
                <img src={background} alt="React Logo"/>
                <img src={background} alt="React Logo"/>
                <img src={background} alt="React Logo"/>
            </div>
        </div>
      </main>
    );
  }
}

export default Splash;
