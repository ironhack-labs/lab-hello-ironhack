import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="background-dark element-margin">
        <div className="iron-logo">
          <img src="/images/ironhack-logo.svg" alt=""/>
        </div>
        <div className="menu">
          <img src="/images/menu-top.svg" alt=""/>
        </div>
        </nav>
        <header className="background-dark element-margin">
         <h1> Say hello to</h1>
         <h1> ReactJS </h1>
         <p className="header-text"> You will learn a frontend</p> 
         <p className="header-text"> framework from scratch,</p> 
         <p className="header-text"> to becone a ninja Developer</p>
         <button>Awsome!</button>
        </header>
        <section className="element-margin">
          <div>
            <div>
              <img src="/images/icon1.png" alt=""/>
            </div>
            <div>
              <h3>Declarative</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, laborum eos in obcaecat.</p>
            </div>
          </div>
          <div>
            <div>
              <img src="/images/icon2.png" alt=""/>
            </div>
            <div>
              <h3>Components</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, laborum eos in obcaecat.</p>
            </div>
          </div>
          <div>
            <div>
              <img src="/images/icon3.png" alt=""/>
            </div>
            <div>
              <h3>Single-Way</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, laborum eos in obcaecat.</p>
            </div>
          </div>
          <div>
            <div>
              <img src="/images/icon4.png" alt=""/>
            </div>
            <div>
              <h3>JSX</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, laborum eos in obcaecat.</p>
            </div>
          </div>
        </section>
        
      </div>
    );
  }
}

export default App;
