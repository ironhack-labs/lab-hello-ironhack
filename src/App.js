import React, {Component} from "react";
import Header from "./Header";
import Elements from "./Elements";
import "./App.css";

class App extends Component{
  render(){
    return (
      <div>
        <Header/>
        <Elements/>
      </div>
    )
  }
}

export default App;