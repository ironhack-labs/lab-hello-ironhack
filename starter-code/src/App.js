import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <div className="Background">
          <div className="Nav">
            <img src="images/ironhack-logo.svg"></img>
            <img src="images/menu-top.svg"></img>
          </div>
          <div class="DisplayHeader">
            <div class="Header">
              <h1 class="Title">Say hello to ReactJS</h1>
              <p class="Text">You will learn a Frontend framework from scratch, to become an Ninka Developer.</p>
              <button class="Button">Awesome!</button>
            </div>
            <div class="DisplayHeader WidthLogos">
              <div class="DisplayLogo">
                <img src="images/react-logo.svg" class="BigLogo"></img>
                <img src="images/react-logo.svg" class="MediumLogo MediumLogo1"></img>
                <img src="images/react-logo.svg" class="MediumLogo MediumLogo3"></img>
              </div>
              <div class="DisplayLogo SmallLogos">
              <img src="images/react-logo.svg" class="ReactLogoSmall"></img>
              <img src="images/react-logo.svg" class="ReactLogoSmall"></img>
              <img src="images/react-logo.svg" class="ReactLogoSmall"></img>
              </div>
            </div>
          </div>
        </div>
        <div class="Icons">
          <div class="Item">
            <img src="images/icon1.png"></img>
            <div class="TextBox">
              <p class="ItemTitle">Declarative</p>
              <p class="ItemText">React makes it painless to create interactive UIs.</p>
            </div>
          </div>
          <div>
            <img src="images/icon2.png"></img>
            <div class="TextBox">
              <p class="ItemTitle">Components</p>
              <p class="ItemText">Build encapsulated components that manage their state.</p>
            </div>
          </div>
          <div class="Item">
            <img src="images/icon3.png"></img>
            <div class="TextBox">
              <p class="ItemTitle">Single-Way</p>
              <p class="ItemText">A set of immutable values are passed to component's.</p>
            </div>
          </div>
          <div class="Item">
            <img src="images/icon4.png"></img>
            <div class="TextBox">
              <p class="ItemTitle">JSX</p>
              <p class="ItemText">Statically-typed, designed to run on modern browsers.</p>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;