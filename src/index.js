import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const element=(
    <div>
        <div className="banner">
            <header>
                <img src="./images/ironhack-logo.svg" alt="ironhack logo"/>
                <img src="./images/menu-top.svg" alt="menu"/>
            </header>
            <div className="container">
                <h1>Say hello to ReactsJS</h1>
                <p id="message">You will learn how to use the most popular
                frontend library, and become a super Ninja developer.</p>
                <div id="awesome"><p>Awesome!</p></div>
            </div>
        </div>

        <div className="features">
            <div className="card">
                <img src="./images/icon1.png" alt=""/>
                <h2>Declarative</h2>
                <p>React makes it painless to create interactive UI's.</p>
            </div>
            <div className="card">
                <img src="./images/icon2.png" alt=""/>
                <h2>Components</h2>
                <p>Build encapsulated components that manage their state.</p>
            </div>
            <div className="card">
                <img src="./images/icon3.png" alt=""/>
                <h2>Single-Way</h2>
                <p>A set of inmutable values are passed to the components.</p>
            </div>
            <div className="card">
                <img src="./images/icon4.png" alt=""/>
                <h2>JSX</h2>
                <p>Statically-typed, designed to run on modern browsers.</p>
            </div>
        </div>
    </div>
)



ReactDOM.render(element,document.getElementById('root'))