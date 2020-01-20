import React, { Component } from "react";
import "./App.css";

class App extends Component {

    render() {
        return(
            <div id="complete">
            <section id="landing">
                <nav id="navbar"> 
                    <img src="../images/ironhack-logo.svg" />
                    <img src="../images/menu-top.svg" />
                </nav>
                <div id="main"> 
                    <h1>Say hello to ReactJS</h1>
                    <p>You will learn a Frontend framework from scratch to become a Ninja Developer.</p>
                    <button id="button-awesome">Awesome!</button>
                </div>
            </section>
            <section id="icons">
                <div>
                    <figure><img src="../images/icon1.png" alt="IMAGE-1"/></figure>
                    <h3>Declarative</h3>
                    <p>React makes it painless to create interactive UIs.</p>
                </div>
                <div>
                    <figure><img src="../images/icon2.png" alt="IMAGE-2"/></figure>
                    <h3>Components</h3>
                    <p>Build encapsulated components that manage their state.</p>
                </div>
                <div>
                    <figure><img src="../images/icon3.png" alt="IMAGE-3"/></figure>
                    <h3>Single-Way</h3>
                    <p>A set of immutable values are passed to the components.</p>
                </div>
                <div>
                    <figure><img src="../images/icon4.png" alt="IMAGE-4"/></figure>
                    <h3>JSX</h3>
                    <p>Statically-typed designed to run on modern browsers.</p>
                </div>
            </section>
            </div>
        );
    }
}


export default App;