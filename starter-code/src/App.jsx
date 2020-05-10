import React, { Component } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Button from "./components/Button";
import Middle from "./components/Middle";
import "./index.css";

class App extends Component {
  render() {
    return (
      <div className="first-part">
        <div className="header">
            <Header
              className="ironhack"
              image="/images/ironhack-logo.svg"
              alt="This is a logo"
            />

            <Header
              className="menu-top"
              image="/images/menu-top.svg"
              alt="This is a logo"
            />
        </div>

        <div className="middle">
          <div>
            <Middle
              title="Say hello to ReactJS"
              paragraphe="You will learn a frontend framework from scratch, to becaome an Ninka Developper."
            />
          </div>

          <div>
            <Button textButton="Awesome!" />
          </div>
        </div>

        <div>
          <footer>
            <div className="footer">
              <Footer
                image="/images/icon1.png"
                subtitle="Declarative"
                text="React makes it painles to create interactive UIs."
              />
              <Footer
                image="/images/icon2.png"
                subtitle="Components"
                text="Build encapsuled componentsthat manage their state"
              />
              <Footer
                image="/images/icon3.png"
                subtitle="Single-Way"
                text="A set of immutable values are passed to the component's."
              />
              <Footer
                image="/images/icon4.png"
                subtitle="JSX"
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
