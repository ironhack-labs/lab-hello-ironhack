import React, { Component } from "react";
import "./App.css";
import Box from "./Box.js";
import Header from "./Header.js";
 
class App extends Component {
  render() {
    return (
        <div className="root">
            <Header />
            <div className="container">
                <div className="row">
                    <Box imgUrl="../images/icon1.png" title="Declarative" description="React makes it painless to create intereactive UIs"/>
                    <Box imgUrl="../images/icon2.png" title="Components" description="Build encapsulated components that manage their state."/>
                    <Box imgUrl="../images/icon3.png" title="Single-Way" description="A set of immutable values are passed to the component's."/>
                    <Box imgUrl="../images/icon4.png" title="JSX" description="Statically-typed, designed to run on modern browsers."/>
                </div>
            </div>      
        </div>
    );
  }
}
 
export default App;