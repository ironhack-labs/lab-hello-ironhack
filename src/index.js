import React from 'react';
import ReactDOM from 'react-dom';
import '../public/style.css';

const rootElement = document.getElementById('root');

const elements = (
    <div>
        <div className="heading">
            <div className="navbar">
                <img src="./images/ironhack-logo.svg" />
                <img src="./images/menu-top.svg" />
            </div>
            <div className="container-horizontal">
                <div className="container-vertical">
                    <h1>Say hello to ReactJS</h1>
                    <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
                    <button className="btn">Awesome!</button>
                </div>
                <div className="container-vertical">
                <img src="./images/react-logo.svg" />
                </div>
            </div>
        </div>
        <div className="container">
            <div className="card">
                <img src="./images/icon1.png" />
                <h3>Declarative</h3>
                <p>React makes it painless to create interactive UIs.</p>
            </div>
            <div className="card">
                <img src="./images/icon2.png" />
                <h3>Components</h3>
                <p>Build encapsulated components that manage their state.</p>
            </div>
            <div className="card">
                <img src="./images/icon3.png" />
                <h3>Single-Way</h3>
                <p>A set of immutable values are passed to the compotent's.</p>
            </div>
            <div className="card">
                <img src="./images/icon4.png" />
                <h3>JSX</h3>
                <p>Statically-typed, designed to run on modern browsers.</p>
            </div>
            
        </div>
    </div>
)


ReactDOM.render(
    elements,
    rootElement
)