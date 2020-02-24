import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <div class="container">
          <header >
            <a href="#"><img src="./images/ironhack-logo.svg" alt="" /></a>
            <a href="#"><img src="./images/menu-top.svg" alt="" /></a>
          </header>
          <div class="App-header">
            <h1>Say hellow to <br></br>ReactJS</h1>
            <span>You will learn a Frontend <br /> framework from scratch, to <br /> become a ninja Developer.</span>
          </div>
          <a href="#" id="btn">Awesome!</a>

        </div>


        <div>
          <div class="second">
            <div>
              <img src="./images/icon1.png" alt="" />
              <h3>Declarative</h3>
              <p>React makes it <br /> paintless to create <br /> interactive UIs.</p>
            </div>
            <div>
              <img src="./images/icon2.png" alt="" />
              <h3>Components</h3>
              <p>Build encapsulated <br /> components that <br /> manage their state</p>      </div>

            <div>
              <img src="./images/icon3.png" alt="" />
              <h3>Single way</h3>
              <p>A set off inmmutable <br /> values are bassed to <br /> the components</p>      </div>
          

          <div>
            <img src="./images/icon4.png" alt="" />
            <h3>JSX</h3>
            <p>Statically-tiped, <br /> the signed to run on <br /> modern browsers</p>      </div>
        </div>
      </div>
      </div>
    );
  }
}

export default App;