import React, { Component, Fragment } from "react";
import "./App.css";
//import Nav from "./components/Nav"
import Feature from "./components/Feature"

class App extends Component {
  render() {
    return (
    <Fragment>
      <div className="app">
        <h1> Say hello to <br/> ReactJS </h1>
        <p>You will learn a Frontend 
        <br/>
        framework from scrath, to 
        <br/>
        become a Ninja Developer.</p>
        <button className="button">Awsome!</button>
      </div>
      <div className="feature-list">
        <Feature path="/images/icon1.png" title="Declarative" info="React make it painless to create interactive UIs." />
        <Feature path="/images/icon2.png" title="Components" info="React make it painless to create interactive UIs" /> 
        <Feature path="/images/icon3.png" title="Single Way" info="React make it painless to create interactive UIs" /> 
        <Feature path="/images/icon4.png" title="JSX" info="React make it painless to create interactive UIs" /> 
      </div>
      </Fragment>
    )
  }
}

export default App;