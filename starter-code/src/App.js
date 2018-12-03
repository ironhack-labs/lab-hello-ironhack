import React from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import MainTitle from "./components/mainTitle/mainTitle";
import Button from "./components/button/button";
import MiniItem from "./components/miniItem/miniItem";

class App extends React.Component {
  elements = [
    {
      img: "/images/icon1.png",
      title: "Declarative",
      description: "React makes it painless to create interactive UIs"
    },
    {
      img: "/images/icon2.png",
      title: "Components",
      description: "Build encapsulated components that manages the state"
    },
    {
      img: "/images/icon3.png",
      title: "Single-Way",
      description: "A set of inmutable values are passed to the component's"
    },
    {
      img: "/images/icon4.png",
      title: "JSX",
      description: "Statically-typed designed to run on modern browsers"
    }
  ];

  render() {
    let mini = this.elements.map(element => {
      return (
        <MiniItem
          img={element.img}
          title={element.title}
          description={element.description}
        />
      );
    });
    return (
      <div className="App">
        <Navbar />
        <MainTitle />
        <Button />
        <div id="mini-items-container"> {mini}</div>
      </div>
    );
  }
}

export default App;
