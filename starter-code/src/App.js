/* eslint-disable react/button-has-type */
import React, { Component } from "react";
import "./App.css";
// import Background from '../public/images/react-logo.svg';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    const logo = <img className="logo" src="./images/ironhack-logo.svg" />;

    const menu = <img className="menu" src="./images/menu-top.svg" />;
    const react = <img className="react-logo" src="./images/react-logo.svg" />;
    const react2 = (
      <img className="react-logo-2" src="./images/react-logo.svg" />
    );
    const react3 = (
      <img className="react-logo-3" src="./images/react-logo.svg" />
    );
    const react4 = (
      <img className="react-logo-4" src="./images/react-logo.svg" />
    );
    const react5 = (
      <img className="react-logo-5" src="./images/react-logo.svg" />
    );
    const react6 = (
      <img className="react-logo-6" src="./images/react-logo.svg" />
    );

    const icon1 = <img src="./images/icon1.png" />;
    const icon2 = <img src="./images/icon2.png" />;
    const icon3 = <img src="./images/icon3.png" />;
    const icon4 = <img src="./images/icon4.png" />;

    const btn = <button>Awesome</button>;
    return (
      <div className="App">
        <section className="sct-father">
          {logo}
          {menu}
          {react}
          {react2}
          {react3}
          {react4}
          {react5}
          {react6}

          <div className="content">
            <h1> Say hello to ReactJS </h1>
            <h2>
              You will learn a Frontend framework from scratch, to became a
              Ninja Developer.
            </h2>
            {btn}
          </div>
        </section>

        <section className="sct-father2">
          <div className="icons">
            {icon1}
            <h1>Declarative</h1>
            <p>hjvasjvjvjvjvjvgjvguj</p>

            {icon2}
            <h1>Declarative</h1>
            <p>hjvasjvjvjvjvjvgjvguj</p>

            {icon3}
            <h1>Declarative</h1>
            <p>hjvasjvjvjvjvjvgjvguj</p>

            {icon4}
            <h1>Declarative</h1>
            <p>hjvasjvjvjvjvjvgjvguj</p>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
