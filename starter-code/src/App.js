import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    const ironhackLogo = "/images/ironhack-logo.svg";
    const menu_top = "/images/menu-top.svg";
    const background_image = "/images/react-logo.svg";
    const icon1 = "/images/icon1.png";
    const icon2 = "/images/icon2.png";
    const icon3 = "/images/icon3.png";
    const icon4 = "/images/icon4.png";
    const greetingText = (
      <h1>
        Say Hello to ReactJS which is not reactive on windows localhost pffffff
      </h1>
    );
    const ninka = <h4>you will learn react and become a ninka</h4>;
    const stupidButton = (
      <button type="button" id="awesome">
        Awesome!
      </button>
    );
    const declarative = <h2>Declatarative</h2>;
    const icon1Text = <p>react makes it painless to create stuff</p>;
    const components = <h2>components</h2>;
    const icon2Text = <p>build encapsulated components</p>;
    const singleWay = <h2>single-way</h2>;
    const icon3Text = <p>a SET OF IMMUTABLE VALUES</p>;
    const JSXHeadline = <h2>JSX</h2>;
    const icon4Text = (
      <p>Statically-typed, designed to run on modern browsers</p>
    );
    return (
      <div className="App">
        <div className="upperBlock">
          <div className="menu">
            <img width="50" height="50" src={ironhackLogo}></img>
            <img src={menu_top}></img>
          </div>
          <div className="textInUpperBlock">
            {greetingText}
            {ninka}
          </div>

          {stupidButton}
        </div>
        <div className="lowerBlock">
          <div className="row">
            <div className="column">
              <img src={icon1}></img>
              {declarative}
              {icon1Text}
            </div>
            <div className="column">
              <img src={icon2}></img>
              {components}
              {icon2Text}
            </div>
            <div className="column">
              <img src={icon3}></img>
              {singleWay}
              {icon3Text}
            </div>
            <div className="column">
              <img src={icon4}></img>
              {JSXHeadline}
              {icon4Text}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
