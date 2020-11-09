import React, { Component } from "react";
import "./App.css"

class App extends React.Component {
    render() {
        return <div>
            <section class="section-intro">
            <nav class="nav-bar">
                <img src="../images/ironhack-logo.svg" />
                <img src="../images/menu-top.svg" />
            </nav>
                <div>
                <h1>Say hello to <br></br>ReactJS</h1>
                <h2>You will learn how to use <br></br>the most popular frontend library,<br></br> and become a super Ninja developer.</h2>
                <button class="button">Awesome!</button>
                </div>
            </section>
            <section class="section-logos">
                <div class="logos-container">
                    <img src="../images/icon1.png" />
                    <h3>Declarative</h3>
                    <p>React makes it painless to create interactive UIs.</p>
                </div>
                <div class="logos-container">
                    <img src="../images/icon2.png" />
                    <h3>Components</h3>
                    <p>Buils encapsulated components that manage their state.</p>
                </div>
                <div class="logos-container">
                    <img src="../images/icon3.png" />
                    <h3>Single-Way</h3>
                    <p>A set of immutable values are passed to the component's</p>
                </div>
                <div class="logos-container">
                    <img src="../images/icon3.png" />
                    <h3>JSX</h3>
                    <p>Statically-typed designed to run on modern browsers</p>
                </div>

            </section>
        </div>
    }
}
export default App;
