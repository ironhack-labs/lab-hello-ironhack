/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    const icon1 = '/images/icon1.png';
    const icon2 = '/images/icon2.png';
    const icon3 = '/images/icon3.png';
    const icon4 = '/images/icon4.png';
    const ironLogo = '/images/ironhack-logo.svg';
    const menuTop = '/images/menu-top.svg';
    const reactLogo = '/images/react-logo.svg';

    const element = <img src = {reactLogo}/>
    return (
      <div className="container">
        <section className="header">
          <nav>
            <div>
              <img src={ironLogo}/>
            </div>
            <div>
              <img src={menuTop}/>
            </div>
          </nav>
          <div className="text-container">
            <h1>Say hello to<br></br>ReactJS</h1>
            <p>You will learn Frontend<br></br>framework from scratch, to<br></br>become an Ninja Developer.</p>
          </div>
          <div className="inner-container">
            <p>Awesome!</p>
          </div>
          
        </section>
        <footer>
          <div>
            <img src={icon1}/>
            <h2>Declarative</h2>
            <p>React make painless to create interactive UIs.</p>
          </div>
          <div>
            <img src={icon2}/>
            <h2>Components</h2>
            <p>Build encapsulated components that manage their state.</p>
          </div>
          <div>
            <img src={icon3}/>
            <h2>Single-Way</h2>
            <p>A set of immutable values are passed to the component's.</p>
          </div>
          <div>
            <img src={icon4}/>
            <h2>JSX</h2>
            <p>Statically-typed designed to run on modern browsers.</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;