import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Button from "./components/Button";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="dark-box">
          <NavBar />
          <Main />
          <Button />
        </div>

        <Footer />
      </div>
    );
  }
}
