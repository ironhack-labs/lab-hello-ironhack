import React, { Component } from "react";
import "../public/App.css";

class App extends Component {
  render() {
    return (
      <div className="">
      <div className="darkSquare App">
        <div className="navBar">
        <img className="ironHackLogo" width='40' height='40' src='./images/ironhack-logo.svg' alt=''/>
        <img className="menu" width='40' height='40' src='./images/menu-top.svg' alt=''/>
        </div>
        <div class="titles">
        <h1> Say hello to ReactJS </h1>
        <p>You will learn a Frontend framework from scratch, to became an Ninka Developer</p>
        <button className="btn">Awesome!</button>
        </div>
      </div>

      

      <div className="items">
      <div className="box firstDiv">
      <img src='./images/icon1.png' alt=''/>
      <h3>Declarative</h3>
      <p>React makes it painless to create interactive UIs</p>
      </div>

      <div className="box firstDiv">
      <img src='./images/icon2.png' alt=''/>
      <h3>Declarative</h3>
      <p>React makes it painless to create interactive UIs</p>
      </div>

      <div className="box firstDiv">
      <img src='./images/icon3.png' alt=''/>
      <h3>Declarative</h3>
      <p>React makes it painless to create interactive UIs</p>
      </div>

      <div className="box firstDiv">
      <img src='./images/icon4.png' alt=''/>
      <h3>Declarative</h3>
      <p>React makes it painless to create interactive UIs</p>
      </div>
      </div>


      </div>
    )
  }
}

export default App;

//background="react-logo.svg"
// className="ironhacklogo" 