import React, { Component } from "react";
import "./App.css";
import NavBar from "./Components/nav-bar/navBar"
import Content from "./Components/content/content"
import Title from "./Components/title/title"
import Button from "./Components/button/button"

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="header">
       <NavBar></NavBar> 
       <Title></Title>
       <Button></Button>
      </div>
       <Content></Content>
      </div>

    );
  }
}

export default App;