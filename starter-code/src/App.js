import React, { Component } from "react";
import "./App.css";

import MyNavbar from "./Navbar.js";
import MyFooter from "./Footer.js";

class App extends Component {
  render() {
    return (
      <div>
      <div className="background">
        <MyNavbar />
        <div className="App">
          <h1>Say Hello to</h1>
          <h1>ReactJs! </h1>
          <br></br>
          <p>You will learn a Frontend</p>
          <p>Framework from scratch </p>
          <p>to become a Ninja developer!</p>
        </div>
        <button class="button">Awesome!</button>
        
      </div>
      <MyFooter />
      </div>
    );
  }
}

export default App;
