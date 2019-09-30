import React, { Component } from "react";
import "./App.css";
// import logo from './react-logo.png';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="mainDiv">
                    <div className="nav">
                        <img src='images/ironhack-logo.svg'></img>
                        <img src='images/menu-top.svg'></img>
                    </div>
                    <div className="main">
                        <div className="mainContent">
                            <h1> Say Hello to ReactJS </h1>
                            <h5>You will learn a Frontend framework from scratch to become a Ninja Developer</h5>
                            <p>Awesome!</p>
                        </div>
                        <div className="react-logos">
                            <img className="reactLogo1" src='images/react-logo.svg'></img>
                            <img className="reactLogo2" src='images/react-logo.svg'></img>
                            <img className="reactLogo3" src='images/react-logo.svg'></img>
                        </div>

                    </div>


                </div>
                <div className="sectionDiv">
                    <div className="section">
                        <img src='images/icon1.png'></img>
                        <h6>Declarative</h6>
                        <p>React makes it painless to create interactive UIs.</p>
                    </div>
                    <div className="section">
                        <img src='images/icon2.png'></img>
                        <h6>Components</h6>
                        <p>Build encapsulated components that manage their state.</p>
                    </div>
                    <div className="section">
                        <img src='images/icon3.png'></img>
                        <h6>Single-Way</h6>
                        <p>A set of immutable values are are passed to the component's.</p>
                    </div>
                    <div className="section">
                        <img src='images/icon4.png'></img>
                        <h6>JSX</h6>
                        <p>Statically-typed, designed to run on modern browsers.</p>
                    </div>
                </div>



            </div>
        );
    }
}

export default App;
