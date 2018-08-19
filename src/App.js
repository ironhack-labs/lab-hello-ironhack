import React, { Component} from "react";
import "./App.css";

class App extends Component{
  render(){
    return(
      <div className="App">
        <div className="Back">
          <div className="Left">
            <img src= "ironhack-logo.svg" />
          </div>
          <div className="Right">
            <img src= "menu-top.svg" />
          </div>
        </div>  
        <div className="Below">
          <h1>Say hello to ReactJS</h1>
        </div>
      </div>
    );
  }
}

export default App;