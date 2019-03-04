import React, { Component } from "react";
import Nav from './components/nav.jsx'
import Hero from './components/landingimage.jsx'
import Cards from './components/cards.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Hero/>
        <Cards/>
      </div>
    );
  }
}

export default App;
