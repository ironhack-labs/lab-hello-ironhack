import React, { Component } from "react";
import "./App.css";
 
class App extends Component {
  render() {
    const title = <h1> Say hello to ReactJs</h1>
    const parag = <p>You will learn a Frontend <br /> framework from scratch, to <br /> become an Ninka developer</p>
    return (
      <div className="App">
        {title}
        {parag}
        <button type="submit"> Awesome!</button>
      </div>
    );
  }
}
 
export default App;