import React from "react";
import ReactDOM from "react-dom";
import "./style.css";


const landingPage = (
    <div className="main">
    <div className="header">
    <div className="nav">
        <img src="../images/ironhack-logo.svg" alt="logo"/>
        <img src="../images/menu-top.svg" alt="logo"/>
    </div>
    <div className="header-text">
        <h1>Say hello to ReactJS</h1>You will learn a Frontend framework from scratch, to become a Ninja Developer.
        <p></p>
        <button>Awesome!</button>
        </div>
    </div>
    <div className="features">
        <div className="feature">
            <img src="../images/icon1.png" alt="icon1"/>
            <h3>Declarative</h3>
            <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div className="feature">
        <img src="../images/icon2.png" alt="icon2"/>
            <h3>Components</h3>
            <p>Build encapsulated components that manage their state.</p>
        </div>
        <div className="feature">
        <img src="../images/icon3.png" alt="icon3"/>
            <h3>Single-Way</h3>
            <p>A set of immutable values are passed to the component's.</p>
        </div>
        <div className="feature">
        <img src="../images/icon4.png" alt="icon4"/>
            <h3>JSX</h3>
            <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
    </div>
</div>

)


ReactDOM.render(landingPage, document.getElementById("root"));