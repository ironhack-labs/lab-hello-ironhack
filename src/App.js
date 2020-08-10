
import React, { Component } from "react";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <section class="top-section">
                    <header>
                        <div class="container">
                            <div className="header_logo">
                                <img src="../images/ironhack-logo.svg" alt="Ironhack Logo" />
                            </div>
                            <div className="header_menu">
                                <button type="button"><img src="../images/menu-top.svg" alt="menu button" /></button>
                            </div>
                        </div>
                    </header>
                    <div class="container">
                        <section className="heroBanner">
                            <div class="heroBanner_box">
                                <h1>Say hello ReactJS</h1>
                                <p>You will learn a Frontend<br/>framework from scratch, to<br/>become a Nija Developer</p>
                                <button type="button">Awesome!</button>
                            </div>
                        </section>
                    </div>
                    <span class="bgLogo1"></span>
                    <span class="bgLogo2"></span>
                    <span class="bgLogo3"></span>
                </section>
                
                <main>
                    <div class="container">
                        <section className="features">
                        <div className="card">
                            <div className="card_icon">
                                <img src="../images/icon1.png" alt="declarative icon" />
                            </div>
                            <div className="card_content">
                                <h3 className="card_title">Declarative</h3>
                                <p className="card_description">Reac makes it painless to create interactive UIs</p>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card_icon">
                                <img src="../images/icon2.png" alt="components icon" />
                            </div>
                            <div className="card_content">
                                <h3 className="card_title">Components</h3>
                                <p className="card_description">Build encapsulated components that manager their state</p>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card_icon">
                                <img src="../images/icon3.png" alt="single-way icon" />
                            </div>
                            <div className="card_content">
                                <h3 className="card_title">Single-Way</h3>
                                <p className="card_description">A set of inmutable values are passed to the component's</p>
                            </div>
                            
                        </div>

                        <div className="card">
                            <div className="card_icon">
                                <img src="../images/icon4.png" alt="JSX icon" />
                            </div>
                            <div className="card_content">
                                <h3 className="card_title">JSX</h3>
                                <p className="card_description">Statically-typed, designed to run on modern browsers</p>
                            </div>
                        </div>
                    </section>
                    </div>
                </main>
            </div>
        );
    }
}

export default App;