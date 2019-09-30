import React, { Component } from "react";
import Heading from "./Heading"
import Button from "./Button"
import "./App.css";



let background = "./images/react-logo.svg"
class Main extends Component {
  render() {
    return (
      <main>
        <Heading />
        <div id="content">
          <div>
            <h1>Say hello to ReactJS.</h1>
            <p>You will learn a Frontend framework from scratch, to become a Ninka Developer.</p>
            < Button />
          </div>
          <div>
            <img src={background}></img>
            <img src={background}></img>
            <img src={background}></img>
          </div>
        </div>
      </main>
    )
  }

}


export default Main;