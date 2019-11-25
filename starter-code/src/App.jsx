import React from 'react';
import './App.css';

export default function App() {
    return (
        <React.Fragment>
        <div id="big-wrapper">
            <nav>
                <img src="images/ironhack-logo.svg" alt="ironhack logo"/>
                <img src="images/menu-top.svg" alt="ironhack logo"/>
            </nav>
            <section id="hero">
                <h1>Say hello to ReactJS</h1>
                <p>You will learn a Frontend framework from scratch, to become a Ninja Developer</p>
                <div>
                    <a href="#"><button>Awesome</button></a>
                </div>
            </section>
        </div>
        <section id="features-container">
            <div id="features">
                <div className="features-info">
                    <img src="images/icon1.png"/>
                    <h3>Declarative</h3>
                    <p>React makes it painless to create interactive UIs.</p>
                </div>
                <div className="features-info">
                <img src="images/icon2.png"/>
                    <h3>Components</h3>
                    <p>Build encapsulated components that manage their state.</p>
                </div>
                <div className="features-info">
                    <img src="images/icon3.png"/>
                    <h3>Single-Way</h3>
                    <p>A set of immutable values are passed to the component's.</p>
                </div>
                <div className="features-info">
                    <img src="images/icon4.png"/>
                    <h3>JSX</h3>
                    <p>Statically-typed, designed to run on modern browsers.</p>
                </div>
            </div>
        </section>
        </React.Fragment>
    )
}
