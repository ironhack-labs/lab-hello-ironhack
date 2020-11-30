// solution: https://github.com/ross-u/LAB-solution-hello-react-oct-2019https://github.com/ross-u/LAB-solution-hello-react-oct-2019
import "./App.css";
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
      <img src="/images/ironhack-logo.svg"/>
      <img src="/images/menu-top.svg"/>
        <h1 className="h1-white">
          Say hello to <br />
          ReactJS
        </h1>
        <p className="p-white">
          You will learn how to use the most popular frontend library, and
          become a super NInja developer
        </p>
        <button>Awesome!</button>
      </div>
    );
  }
}

export default App;
