import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <div className="FlexLeft">
            <img className="Logo" src="/images/ironhack-logo.svg" alt="Logo" />
            <h1 className="MainTitle"> Say Hello to ReactJS </h1>
            <p className="Text">
              You will learn a Frontend framework from Scatch to become a Ninja
              developper
            </p>
            <button className="Button"> Awesome!</button>
          </div>

          <div className="FlexRight">
            <div className="FlexRightLeft">
              <img
                className="Electron1"
                src="/images/react-logo.svg"
                alt="Logo"
              />

              <img
                className="Electron2"
                src="/images/react-logo.svg"
                alt="Logo"
              />

              <img
                className="Electron3"
                src="/images/react-logo.svg"
                alt="Logo"
              />
            </div>

            <div className="FlexRightRight">
              <img className="MenuLogo" src="/images/menu-top.svg" alt="Logo" />
              <img
                className="Electron4"
                src="/images/react-logo.svg"
                alt="Logo"
              />

              <img
                className="Electron5"
                src="/images/react-logo.svg"
                alt="Logo"
              />

              <img
                className="Electron6"
                src="/images/react-logo.svg"
                alt="Logo"
              />
            </div>
          </div>
        </div>

        <div className="EndContainerFlex">
          <div className="container1">
            <img className="Image1" src="/images/icon1.png" alt="Logo" />
            <p className="Title1">Declarative</p>
            <h5 className="Text1">
              React makes it painless to create interactive UI's.
            </h5>
          </div>

          <div className="container2">
            <img className="Image2" src="/images/icon2.png" alt="Logo" />{" "}
            <p className="Title2">Components</p>
            <h5 className="Text2">
              Build encapsulated components that manage their state.
            </h5>
          </div>

          <div className="container3">
            <img className="Image3" src="/images/icon3.png" alt="Logo" />
            <p className="Title3">Single-Way</p>
            <h5 className="Text3">
              A set of immutable valuesare passed to the components.
            </h5>
          </div>

          <div className="container4">
            <img className="Image4" src="/images/icon4.png" alt="Logo" />
            <p className="Title4">JSX</p>
            <h5 className="Text4">
              Statically-typed designed to run on modern browsers.
            </h5>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
