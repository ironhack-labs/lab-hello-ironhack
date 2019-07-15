import React, { Component } from "react";
import "../public/styles.css";
import NavBar from "./components/NavBar";
import MainBody from "./components/MainBody";
import Footer from "./components/Footer";

class App extends Component {
  constructor() {
    super();
    this.footerElement = [
      {
        image: "images/icon1.png",
        title: "Declarative",
        description: "React makes it painless to create interactive Uls."
      },
      {
        image: "images/icon2.png",
        title: "Components",
        description: "Build encapsulated components that manage their state."
      },
      {
        image: "images/icon3.png",
        title: "Single-Way",
        description: "A set if inmutable values are tpassed to the components."
      },
      {
        image: "images/icon4.png",
        title: "JSX",
        description: "Statically-typed, designed to run on modern browsers."
      }
    ];
  }

  render() {
    return (
      <div>
        <NavBar />
        <MainBody />
        <div className="footer">
        {this.footerElement.map((element,i) => (
          <Footer key={i}
            image={element.image}
            title={element.title}
            description={element.description}
          />
        ))}
        </div>
      </div>
    );
  }
}

export default App;
