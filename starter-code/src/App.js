import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Grid from "./Grid";

class App extends React.Component {
  render() {
    return (
      <div id="app-container">
        <Navbar />
        <Hero />
        <Grid />
      </div>
    );
  }
}

export default App;
