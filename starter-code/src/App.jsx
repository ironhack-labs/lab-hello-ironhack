import React, { Component } from "react";
//Components
import Headermain from "./components/Headermain";
import Button from "./components/Button";
import Text from "./components/Text";
import Image from "./components/Image";
import "./css/global.css";

export class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Headermain />
        <section id="main-element">
          <div>
            <div id="text">
              <h1>
                Say Hello<br></br>to ReactJS
              </h1>
              <h2>
                You will learn a Frontend<br></br>
                framework from scratch to<br></br>
                become an Ninka Developer.
              </h2>
            </div>
            <Button text="Awesome!" />
          </div>
          <div>
            <img id="reactlogo1" src="./images/react-logo.svg" alt="react logos"/>
            <img id="reactlogo2" src="./images/react-logo.svg" alt="react logos"/>
            <img id="reactlogo3" src="./images/react-logo.svg" alt="react logos"/>
            <img id="reactlogo4" src="./images/react-logo.svg" alt="react logos"/>

          </div>
        </section>
        <section id="second-element">
          <div id="sub-section">
            <div className="block">
              <Image filepath="./images/icon1.png" text="icon1" />
              <Text
                title="Declarative"
                text="React makes it painless to create interactive UIs."
              />
            </div>
            <div className="block">
              <Image filepath="./images/icon2.png" text="icon1" />
              <Text
                title="Components"
                text="Build encapsulated components that manage their state."
              />
            </div>
            <div className="block">
              <Image filepath="./images/icon3.png" text="icon1" />
              <Text
                title="Single-Way"
                text="A set of immutable values are passed to the component's."
              />
            </div>
            <div className="block">
              <Image filepath="./images/icon4.png" text="icon1" />
              <Text
                title="JSX"
                text="Statically-typed, designed to run on modern browsers."
              />
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default App;
