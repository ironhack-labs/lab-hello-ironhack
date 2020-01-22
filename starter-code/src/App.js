import React, { Component } from "react";
import "./App.css";

class App extends Component {
    render() {
        const element = (
            <div className="container">
                <div className="navbar">
                    <div className="logo"><img src="/images/ironhack-logo.svg" alt="" /></div>
                    <div><img src="/images/menu-top.svg" alt="" /></div>
                </div>
                <div className="body-top">
                    <h1>Say hello to ReactJS</h1>
                    <h2>You will learn a Frontend framework from strach, to becaome an Ninka Developer,</h2>
                </div>
                <div className="button-container">
                    <a href="#" className="button">Awesome!</a>
                </div>
                <div className="body-middle">
                    <div className="cards">
                        <img className="cards-img" src="/images/icon1.png" />
                        <h3>Declative</h3>
                        <p>React makes it painless to create interactive UIs</p>
                    </div>
                    <div className="cards">
                        <img className="cards-img" src="/images/icon2.png" />
                        <h3>Components</h3>
                        <p>Builds encapsulated components that manage their slate</p>
                    </div>
                    <div className="cards">
                        <img className="cards-img" src="/images/icon3.png" />
                        <h3>Single-Way</h3>
                        <p>A set immutable values are passed to component's</p>
                    </div>
                    <div className="cards">
                        <img className="cards-img" src="/images/icon4.png" />
                        <h3>JSX</h3>
                        <p>Statilly-typed, designed to run on the modern browsers</p>
                    </div>
                </div>
            </div>
        );
        return (
            <div className="App">
                {element}
            </div>
        );
    }
}

export default App;
