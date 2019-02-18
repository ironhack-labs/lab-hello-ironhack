import React, {Component} from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <div class="black">
          <div class="container">
            <nav>
              <div class="nav-wrapper black">
                <a href="#" class="brand-logo">
                  <img
                    src="/images/ironhack-logo.svg"
                    width="60px"
                    height="60px"
                  />
                </a>
                <a href="#" class="brand-logo right">
                  <img src="/images/menu-top.svg" />
                </a>
              </div>
            </nav>
            <div class="section">
              <div class="row">
                <div class="col l5">
                  <h1 class="white-text">Say Hello to ReactJS</h1>
                  <h5 class="grey-text">
                    You will learn a FrontEnd framework from scratch, to become
                    a Ninja Dev !
                  </h5>
                  <div class="section">
                    <button class="btn-large">Awesome !</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="section">
          <div class="row">
            <div class="container">
              <div class="col l3">
                <img src="/images/icon1.png" />
                <h4>Declarative</h4>
                <p>React make it painless to create interactive UI.</p>
              </div>
              <div class="col l3">
                <img src="/images/icon2.png" />
                <h4>Component</h4>
                <p>React make it painless to create interactive UI.</p>
              </div>
              <div class="col l3">
                <img src="/images/icon3.png" />
                <h4>Single-Way</h4>
                <p>React make it painless to create interactive UI.</p>
              </div>
              <div class="col l3">
                <img class="left-align" src="/images/icon4.png" />
                <h4>JSX</h4>
                <p>React make it painless to create interactive UI.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
