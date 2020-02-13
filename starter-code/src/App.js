import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="TitleContainer"> <h1 className="Title"> Say hello to ReactJS </h1> </div>
        <div className="SubTitleContainer"> <p className="Subtitle"> You will learn a Frontend framework from scratch to become a Ninka Developer. </p></div>
        <div className="ButtonContainer"> <button type="button" class="btn btn-light btn-lg myBtn" >Awesome!</button></div>
      </div>

    );
  }
}

export default App;
