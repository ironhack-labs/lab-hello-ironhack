import React from "react";
import ReactDOM from "react-dom";
import './style.css'



const element = (
    <div>
        <div className="background_logo">
            <div className='head'>
                <img src='/images/ironhack-logo.svg' />
                <img src='/images/menu-top.svg' />
            </div>
            <p style={{ color: "white" }}>
                <h1>Say hello to ReactJS</h1>
                <h2>You will learn a Frontend framework from scratch, to become a Ninka Developer</h2>
            </p>
            <button className='btn'>AWESOME!</button>
        </div>
        <div className='Below'>
            <div>
                <img src='/images/icon1.png' />
                <h2>Declarative</h2>
                <p>React makes it painless to create interactive UIs.</p>
            </div>
            <div>
                <img src='/images/icon2.png' />
                <h2>Components</h2>
                <p>Build encapsulated components that manage their state.</p>
            </div>
            <div>
                <img src='/images/icon3.png' />
                <h2>Single-Way</h2>
                <p>A set of immutable values are passed to the component.</p>
            </div>
            <div>
                <img src='/images/icon4.png' />
                <h2>JSX</h2>
                <p>Statically-typed, designed to run on.</p>
            </div>
        </div>
    </div>



)

ReactDOM.render(element, document.getElementById("root"));