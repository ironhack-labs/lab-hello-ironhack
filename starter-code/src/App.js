import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    const logo = "/images/ironhack-logo.svg";
    const menu = "/images/menu-top.svg";
    const title = "Say hello to ReactJS "
    const promise = "You will learn a Frontend Framework from scratch, to become a Ninja Developer"
    const images = [
      "/images/icon1.png",
      "/images/icon2.png",
      "/images/icon3.png",
      "/images/icon4.png"
    ]

    // const data [array ob objects]

    return (
      <div className="App">
        <div className="hello">
          <div className="navbar">
            <img className="logo" src={logo} />
            <img className="menu" src={menu} />
          </div>
          <h1>{title}</h1>
          <h3>{promise}</h3>
          <button>Awesome!</button>
        </div >
        <div className="traits">
          {images.map(e => {
            return <img src={e}></img>
          })}
        </div>
      </div>
    );
  }
}

export default App;