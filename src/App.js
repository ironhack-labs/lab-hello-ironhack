import React, { Component } from "react";
import "./App.css";
import Navbar from './components/Navbar.js'
import Main from './components/Main.js'
import Footer from './components/Footer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
