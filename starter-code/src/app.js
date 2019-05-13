import React from "react";
import "./App.css";
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Columns from "./components/Columns"



class App extends React.Component {
  render() {
    return (
      <div class="content">
        <Nav />
        <Hero />
        <Columns />
      </div>
    );
  }
}

export default App;
