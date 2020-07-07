import React, { Component } from "react";
import "./App.css";
 
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="bg">
          <div className="images">
            <img src="/images/ironhack-logo.svg"></img>
            <img src="/images/menu-top.svg"></img>
          </div>
          <div className="title">
            <h1> Say hello to ReactJS </h1>
            <p>You will learn a Frontend framework from scratch, to become a Ninja Developer</p>
          </div>
          <button className="btn btn-light" id="btn">Awesome!</button>
        </div>
        <div className="Bottom">
          <ul className="list">
            <li><img src="/images/icon1.png"></img>
              <h4>Declarative</h4>
              <p>Some text</p>
            </li>
            <li><img src="/images/icon2.png"></img>
              <h4>Components</h4>
              <p>Some text</p>
            </li>
            <li><img src="/images/icon3.png"></img>
              <h4>Single-way</h4>
              <p>Some text</p>
            </li>
            <li><img src="/images/icon4.png"></img>
              <h4>JSX</h4>
              <p>Some text</p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
 
export default App;