import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="row">


          <div className="col-md-12 bg">
            <h1>say Hello to ReactJS</h1>
            <p>You will lern umas paradas aí.</p>
            <button className="btn-primary">YAY!</button>
          </div>



          <div className="col-md-3">
            <img src="./images/icon1.png"></img>
            <h2>Declarative</h2>
            <p>aaaa</p>
          </div>
          <div className="col-md-3">
            <img src="./images/icon2.png"></img>
            <h2>Components</h2>
            <p>aaaa</p>
          </div>
          <div className="col-md-3">
            <img src="./images/icon3.png"></img>
            <h2>Single-Way</h2>
            <p>aaaa</p>
          </div>
          <div className="col-md-3">
            <img src="./images/icon4.png"></img>
            <h2>JSX</h2>
            <p>aaaa</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;