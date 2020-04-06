import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
        <div className="App">
            <section className="landing bc-grey flex-row">
                <header className="header col-12 flex-row justify-content-between bc-grey">
                    <div><img src="images/ironhack-logo.svg"/></div>
                    <div><img src="images/menu-top.svg"/></div>
                </header>
                <div>
                    <h1 className="fc-white">Say hello to ReactJS</h1>
                    <p className="fc-white">You will learn a Frontend framework from scratch, to become a ninja developer</p>
                    <button className="button">Awesome!</button>
                </div>
            </section>
            <section className="flex-row features">
                <div  className="col-3">
                    <img src="images/icon1.png"/>
                    <h2 className="pl-md">Declarative</h2>
                    <p className="pl-md">React make it painless to create interactive UIs</p>
                </div>
                <div className="col-3">
                    <img src="images/icon2.png"/>
                    <h2 className="pl-md ellipsis">Components</h2>
                    <p className="pl-md">Build encapsulated components that manage their state</p>
                </div>
                <div className="col-3">
                    <img src="images/icon3.png"/>
                    <h2 className="pl-md ellipsis">Single-Way</h2>
                    <p className="pl-md">A set of immutable values are passed to the components</p>
                </div>
                <div className="col-3">
                    <img src="images/icon4.png"/>
                    <h2 className="pl-md ellipsis">JSX</h2>
                    <p className="pl-md">Statically-typed designed to run on modern browsers</p>
                </div>
            </section>
        </div>
    );
  }
}

export default App;