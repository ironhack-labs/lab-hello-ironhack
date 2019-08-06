import React, { Component } from "react";
import "./App.css";
import Nav from "./layout/Nav"
import Hero from "./layout/Hero"
import HeroText from "./components/HeroText"
import Button from "./components/Button"
import Footer from "./layout/Footer"


class App extends Component {
  render() {
  
    return (
      <div>
          <Nav />

          <Hero />
          
          <HeroText />

          <Button />
     
          <Footer />
      </div>
    );
  }
}

export default App;