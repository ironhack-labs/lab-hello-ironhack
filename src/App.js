import React, { Component } from "react";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="container-papa">
                <div className="container">
                    <div className="navbar-container">
                        <img className="ih-img"src="../images/ironhack-logo.svg" alt="ironhack logo"></img>
                        <img className="navbar-menu" src="../images/menu-top.svg" alt="menu"></img>
                    </div>
                    <br></br>
                    <div className ="top-part">
                        <h1>Say hello to<br></br> ReactJS</h1>
                        <div className="p-container">
                            <p>You will learn a Frontend framework from scratch, to become a Ninka Developer.</p>
                        </div>
                    </div>
                    <br></br>
                    <button className ="awesome">Awesome!</button>
                </div>
                <div className="icons-container">
                    <div className="card-container">
                        <img src="../images/icon1.png" alt="declarative"></img>
                        <h2>Declarative</h2>
                        <p>React makes it painless to create interactive UIs</p>
                    </div>
                    <div className="card-container">
                        <img src="../images/icon2.png" alt="Components"></img>
                        <h2>Components</h2>
                        <p>Build encapsulated components that manage their state</p>
                    </div>
                    <div className="card-container">
                        <img src="../images/icon3.png" alt="Single-Way"></img>
                        <h2>Single-Way</h2>
                        <p>A set of immutable values are passed to the components</p>
                    </div>
                    <div className="card-container">
                        <img src="../images/icon4.png" alt="JSX"></img>
                        <h2>JSX</h2>
                        <p>Statically-typed, designed to run on modern browsers</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;