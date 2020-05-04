import React, { Component } from "react";
import Footer from "./components/Footer";
import Logo from "./components/Logo";
import Button from "./components/Button";
import Middle from "./components/Middle";

import "./index.css";

class App extends Component {
  render() {
    return (
      <div className="first-part">
        <header>
          <div className="ironhack-logo">
            <Logo data="/images/ironhack-logo.svg" />
          </div>

          <div className="menu-top">
            <Logo data="/images/menu-top.svg" />
          </div>
        </header>

        <div className="middle">
          <div>
            <Middle title="Say hello to ReactJS"
              paragraphe="You will learn a frontend framework from scratch, to becaome an Ninka Developper."
            />
          </div>

          <div>
            <Button textButton="Awesome!" />
          </div>
        </div>

        <div>
          <footer >
            <div className="footer">
              <Footer
                image="/images/icon1.png"
                title="Declarative"
                text="React makes it painles to create interactive UIs."
              />
              <Footer
                image="/images/icon2.png"
                title="Components"
                text="Build encapsuled componentsthat manage their state"
              />
              <Footer
                image="/images/icon3.png"
                title="Single-Way"
                text="A set of immutable values are passed to the component's."
              />
              <Footer
                image="/images/icon4.png"
                title="JSX"
                text="Statically-typed designedto run on modern browsers."
              />
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
