import React, { Component } from "react";
import "./App.css";
import Test from "./Test.js";
import "./Test.css";

class App extends Component {
  render() {
    return (
    <section>
    <div className="section-one">   
        <div className="menu-top">
            <img src="/images/ironhack-logo.svg"/>
            <img src="/images/menu-top.svg"/>
            </div>
        <div className="section-one-elements">
            <div className="title-elements">
            <div className="title-text">
                <h1 className="title"> Say hello to </h1>
                <h1 className="title">ReactJS </h1>
                </div>
            <div className="title-description-element">
                <p className="title-description">
                You will learn a Frontend framework from scratch, to become a Ninja Developer.
                </p>
                </div>
            <div className="button-element">
                <button className="button">Awesome!</button>
                </div>
            </div>
            <div className="react-logos">
                <div className="react-logos-two">
                <img src="/images/react-logo.svg" className="react-two"/>
                <img src="/images/react-logo.svg" className="react-two"/>
                {/* <img src="/images/react-logo.svg" className="react-two"/> */}
                </div>
                <div className="react-logos-one">
                <img src="/images/react-logo.svg" className="react-one"/>
                <img src="/images/react-logo.svg" className="react-one"/>
                <img src="/images/react-logo.svg" className="react-one"/>
                </div>
            </div>
        </div>
    </div>

    <div className="section-two">
        
        <div className="section-two-elements">
        
        <div className="section-two-columns">
        <img src="/images/icon1.png" class="icons"/>
        <h2 className="title-two">Declarative</h2>
        <p className="title-two-description">React makes it painless to create interactive UI's.</p>
        </div>

        <div className="section-two-columns">
        <img src="/images/icon2.png" class="icons"/>
        <h2 className="title-two">Components</h2>
        <p className="title-two-description">React makes it painless to create interactive UI's.</p>
        </div>

        <div className="section-two-columns">
        <img src="/images/icon3.png" class="icons"/>
        <h2 className="title-two">Single-Way</h2>
        <p className="title-two-description">React makes it painless to create interactive UI's.</p>
        </div>

        <div className="section-two-columns">
        <img src="/images/icon1.png" class="icons"/>
        <h2 className="title-two">JSX</h2>
        <p className="title-two-description">React makes it painless to create interactive UI's.</p>
        </div>
        </div>    
    </div>
    <div className="section-three">
    <Test></Test>
    </div>
    </section>
    );
  }
}


export default App;