import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Block from "./components/Infoblock.jsx"
import Header from "./components/Header.jsx"




class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Cover">
          <Navbar />
          <Header/>
        </div>
        <div className="body">
          <Block
            image="/images/icon1.png"
            title="Declarative"
            description="React makes it"
          />
          <Block
          image="/images/icon2.png"
          title="Components"
          description="Build encapsulatedcomponents"
          />
          <Block
          image="/images/icon3.png"
          title="Single-Way"
          description="SA set of immutable"
          />
          <Block
          image="/images/icon4.png"
          title="JSX"
          description="Statically-typed"
          />
        </div>
      </div>
    );
  }
}

export default App;
