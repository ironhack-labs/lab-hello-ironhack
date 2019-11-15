import React from "react";

import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Row from "./Components/Row/Row";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Hero />
        <Row />
      </div>
    );
  }
}

export default App;
