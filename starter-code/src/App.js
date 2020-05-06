import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Button from "./components/Button";
import Cards from "./components/Cards";
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="landing">
          <Header></Header>
          <Hero
            title="Say hello to ReactJs"
            description="You will learn a Frontend framework from scratch to become a Ninja Developer"
          />
          <Button text="Awesome!" color="white" link="#" />
        </div>
        <footer className="content">
          <Cards />
        </footer>
      </div>
    );
  }
}

export default App;
