import React, { Component } from "react";
import "./App.css";

import NavBar from './NavBar';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        
        <h1> Say hello to <br/>
          ReactJS</h1>
        <p>
          You will learn a Frontend <br/>
          framework from scratch, to  <br/>
          become an Ninja Developer.
        </p>
        <br/><br/>
        <button className="button">Awsome!</button>
        <br/>
        <br/>
        <br/>
        <Footer />
      </div>
    );
  }
}

export default App;