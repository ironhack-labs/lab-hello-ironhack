import React from "react";
import avatar from "./images/karla.png";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";
import "./App.css";
import Navbar from "./Components/Navbar";
import Button from "./Components/Button"
import MessageHeader from "./Components/MessageHeader";
import Card from "./Components/Card";

//<React.StrictMode>
// StrictMode is a tool for highlighting potential problems in an application. Like Fragment, StrictMode does not render any visible UI. It activates additional checks and warnings for its descendants.
//https://reactjs.org/docs/strict-mode.html
const App = () => {
  return (
    <React.StrictMode>
    <section>
      <div className="header-section">
        <Navbar />
        {/* <div className="navbar-wrapper">
          <div className="ironhack-logo"></div>
          <div className="menu-icon"></div>
        </div> */}
        <MessageHeader />
        {/* <h1>Say hello to ReactJS</h1>
        <p className="header-text">You will learn how to use the most popular frontend library, and become a super Ninja developer.</p> */}
        <Button />
        {/* <a href="#" className="button"> Awesome!</a> */}
      </div>
    <div className="features-icons">
        <Card // props-> imgSource, title, description
          imgSource={icon1}
          title="Declarative"
          description="React makes it painless to create interactive UIs."
        />
        <Card // props-> imgSource, title, description
          imgSource={icon2}
          title="Components"
          description="Build encapsulated components that manage their state."
        />
        <Card // props-> imgSource, title, description
          imgSource={icon3}
          title="Single-Way"
          description="A set of immutable values are passed to the compoments."
        />
        <Card // props-> imgSource, title, description
          imgSource={icon4}
          title="JSX"
          description="Statically-typed, designed to run on modern browsers."
        />
      {/* <div className="card-feature">
        <img src={icon1} alt="declarative icon" />
        <h3>Declarative</h3>
        <p>React makes it painless to create interactive UIs.</p>
      </div>
      <div className="card-feature">
        
        <img src={icon2} alt="components icon" />
        <h3>Components</h3>
        <p>Build encapsulated components that manage their state.</p>
      </div>
      <div className="card-feature">
        <img src={icon3} alt="singleway icon" />
        <h3>Single-Way</h3>
        <p>A set of immutable values are passed to the compoments.</p>
      </div>
      <div className="card-feature">
        <img src={icon4} alt="jsx icon" />
        <h3>Declarative</h3>
        <p>Statically-typed, designed to run on modern browsers.</p>
      </div> */}
    </div>
  </section>
  </React.StrictMode>
  )
}
// const App = () => {
//   }
// var app = function app() {
//     return /*#__PURE__*/React.createElement("h1", {
//     return /*#__PURE__*/React.createElement("h1", {
//       className: "app"
//     }, "Hello World!");
//   };

// export the function


//  babel transpiles the code to all-browsers understandable version

// webpack is a build tool that allows us to take all of our project assets 
//and turns them into a production-ready bundle.
// webpack -> will intelligently bundle our files into a single file.

export default App;