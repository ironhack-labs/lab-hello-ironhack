import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

const navbar = (
    <nav >
    <img src="../images/ironhack-logo.svg"/>
    <img src="../images/menu-top.svg"/>
    </nav>
)
const sayHello = (
    <div>
        <div>
            <h1>Say hello to</h1>
            <h1>ReactJS</h1>
        </div>
        <div>
            <p>You will learn a Frontend</p>
            <p>framework from scratch, to</p>
            <p>become a Ninja Developer</p>
        </div>
    </div>
    );
const images = (
        <div className="images">
          <div>
        <img src="../images/icon1.png"/>
        <h3>Declarative</h3>
        <p>React makes it painless to create interactive UIs.</p>
              </div>  
              <div>
        <img src="../images/icon2.png"/>
        <h3>Components</h3>
        <p>Build encapsulated components that manage their state.</p>
              </div>
              <div>

        <img src="../images/icon3.png"/>
              <h3>Single-Way</h3>
              <p>A set of immutable values are passed to the components.</p>
              </div>
              <div>
        <img src="../images/icon4.png"/>
        <h3>JSX</h3>
        <p>Statically-typed, designed to run on modern browsers.</p>
              </div>
        </div>
    )

const button = (
    <div>
        <button>Awesome!</button>
    </div>
)
 const elements = 
 <div>
     {navbar}
     <div className="up">
    {sayHello}
    {button}
    </div>
    <br />
    <div className="down">
    {images}
    </div>
 </div>
ReactDOM.render(
    elements,
    document.getElementById("root")
);