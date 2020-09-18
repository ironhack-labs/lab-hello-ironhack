import React from "react";
import "./app.css";

const App = () => {
    return(
        <div>
            <section className="header">
                <nav>
                    <img src="../images/ironhack-logo.svg"></img>
                    <img src="../images/menu-top.svg"></img>
                </nav>
                <section className="jumbo">
                    <div className="mainContent">
                        <div>
                            <h1>Say hello to ReactJS</h1>
                                <p>You will learn a Frontend</p>
                                <p>framework form scratch, to</p>
                                <p>become a Ninja Developer.</p>
                        </div>
                        <button>Awesome!</button>
                    </div>
                    <div className="logoPositioning">
                        <div className="backgroundLogos">
                            <div className="logo1"></div>
                            <div className="logo2"></div>
                            <div className="logo3"></div>
                        </div>
                        <div className="backgroundLogos2">
                            <div className="logo4"></div>
                            <div className="logo5"></div>
                            <div className="logo6"></div>
                        </div>
                    </div>
                </section>
            </section>
            <section className="pageBottom">
                <div className="description">
                    <img src="../images/icon1.png"></img>
                    <h2>Declarative</h2>
                    <p>React makes it painless to create UIs.</p>
                </div>
                <div className="description">
                    <img src="../images/icon2.png"></img>
                    <h2>Components</h2>
                    <p>Build encapsulated components that manage their state.</p>
                </div>
                <div className="description">
                    <img src="../images/icon3.png"></img>
                    <h2>Single-way</h2>
                    <p>A set of immutable values are passed to the components.</p>
                </div>
                <div className="description">
                    <img src="../images/icon4.png"></img>
                    <h2>JSX</h2>
                    <p>Statically-types, designed to run on modern browsers.</p>
                </div>
            </section>
        </div>
    )
}

export default App;
