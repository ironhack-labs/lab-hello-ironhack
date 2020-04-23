import React from 'react'
import "./App.css";

export default function app() {
    return (
        <div className="main">

        <div className="container">
        <navbar className="navbar">
            <img src="/images/ironhack-logo.svg"></img>
            <img src="/images/menu-top.svg"></img>
        </navbar>
        
        <h1>Say hello to <br></br>ReactJS</h1>
        <p>You will learn a Frontend<br></br> framework from scratch, to <br></br>become a Ninja Developer.</p>

        <button className="button">Awesome!</button>
        </div>

        <div className="containerImages">
            <div className="container-items">
                <img src="/images/icon1.png"></img>
                <h2>Declarative</h2>
                <p>React makes it painless to create interactive UIs.</p>
            </div>

            <div className="container-items">
                <img src="/images/icon2.png"></img>
                <h2>Components</h2>
                <p>Build encapsulated components that manage their state.</p>
            </div>
            
            <div className="container-items">
                <img src="/images/icon3.png"></img>
                <h2>Single-Way</h2>
                <p>A set of immutable values are passed to the component's.</p>
            </div>

            <div className="container-items">
                <img src="/images/icon4.png"></img>
                <h2>JSX</h2>
                <p>Statically-typed, design to run on modern browsers.</p>
            </div>
        </div>

        </div>

    )
}
