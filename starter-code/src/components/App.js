import React, { Component } from "react";
import NavBar from "./nav-bar/Nav"
import Header from "./Header/header"
import Section from "./Section/section"

const iconosTexto = [
  {
    image: "./images/icon1.png",
    title: "Declarative",
    text: "React makes it painless to create interactive UIs.",
  },
  {
    image: "./images/icon2.png",
    title: "Components",
    text: "Build encapsulated components that manage their state.",
  },
  {
    image: "./images/icon3.png",
    title: "Single-Way",
    text: "A set of immutable values are passed to the component's.",
  },
  {
    image: "./images/icon4.png",
    title: "JSX",
    text: "Statically-typed, designed to run on modern browsers.",
  }
]

class App extends Component {
  render() {
    return (
      <div>
      <NavBar />
      <Header />
      {iconosTexto.map(array =><Section img={array.image} title={array.title} p={array.text}></Section>)}
      </div>
    );
  }
}

export default App;