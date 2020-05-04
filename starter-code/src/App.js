import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar"
import MainSection from "./components/MainSection"
import ReactAssets from "./components/ReactAssets"
 

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <MainSection/>
        <div className="assets">
        <ReactAssets picture="images/icon1.png" 
        title="Declarative" 
        description="React makes it painless to create interactive UIs"/>
        <ReactAssets picture="images/icon2.png" 
        title="Components" 
        description="Build encapsulated components that manage their state"/>
        <ReactAssets picture="images/icon3.png" 
        title="Single-Way" 
        description="A set of immutable values are passed to components"/>
        <ReactAssets picture="images/icon4.png" 
        title="JSX" 
        description="Statically-typed designed to run on modern browsers"/>
        </div>
        
        
      </div>
    );
  }
}
 
export default App;

