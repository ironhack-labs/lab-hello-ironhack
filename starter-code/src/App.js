import React, { Component } from "react";
import "./App.css";


import Nav from './Nav';
import Cards from './Cards';

class App extends Component {
  render() {
    return (
      <div className="App">
          < Nav />
          < Cards />
        </div>

    );
  }
}

export default App;
