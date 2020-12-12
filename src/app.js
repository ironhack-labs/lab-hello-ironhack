import React, { Component } from "react";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div>
                    <nav>
                        <img src="/images/ironhack-logo.svg"></img>
                        <img src="/images/menu-top.svg"></img>
                    </nav>
                </div>
                <main>
                    <h1> Say hello to ReactJS </h1>
                    <p className="intro-text">You will learn how to use the most popular frontend library, and become a super Ninja developer</p>
                    <button className="the-button">Awesome!</button>
                </main>
                <div className="features">
                    <div className="each-feature">
                        <img src="/images/icon1.png"></img>
                        <h2>Declarative</h2>
                        <p>React makes it painless to create interactive UIs.</p>
                    </div>
                    <div className="each-feature">
                        <img src="/images/icon2.png"></img>
                        <h2>Components</h2>
                        <p>Build encapsulated components that manage their state.</p>
                    </div>
                    <div className="each-feature">
                        <img src="/images/icon3.png"></img>
                        <h2>Single-Way</h2>
                        <p>A set of immutable values are passed to the component's.</p>
                    </div>
                    <div className="each-feature">
                        <img src="/images/icon4.png"></img>
                        <h2>JSX</h2>
                        <p>Statically-typed, designed to run on modern browsers.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;