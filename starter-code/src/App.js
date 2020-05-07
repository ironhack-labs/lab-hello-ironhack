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
        description={<p>React makes it <br/> painless to create <br/> interactive UIs</p>}/>
        <ReactAssets picture="images/icon2.png" 
        title="Components" 
        description={<p>Build encapsulated <br/> components that <br/> manage their state</p>}/>
        <ReactAssets picture="images/icon3.png" 
        title="Single-Way" 
        description={<p>A set of immutable <br/> values are passed to <br/> components</p>}/>
        <ReactAssets picture="images/icon4.png" 
        title="JSX" 
        description={<p>Statically-typed,<br/> designed to run on<br/> modern browsers</p>}/>
        </div>
        
        
      </div>
    );
  }
}
 
export default App;

