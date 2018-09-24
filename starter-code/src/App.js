import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="the-first-class">
      <div className="whatever">
            <img id="first-image" src="../images/react-logo.svg"></img>
        </div>
        <div className="whatever-two">
            <img id="second-image" src="../images/react-logo.svg"></img>
        </div>
      
      <div>
        <h1 id="h-one-id"> Say hello to<br></br> ReactJS</h1>
        <p id="id-one">You will learn a Frontend<br></br>
        framework from scratch, to<br></br>
        became an Ninka Developer</p>
        <button id="button-id">Awesome!</button>
      </div>

      
      </div>
      </div>
    );
  }
}

export default App;