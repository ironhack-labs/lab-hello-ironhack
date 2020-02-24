import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
    render () {
        return (
            <footer className="footer">
                <div className="infoCard">
                    <img src="../images/icon1.png" alt="icon1"/>
                    <h3>Declarative</h3>
                    <p>React makes it painless to create interactive UIs.</p>
                </div>
                <div className="infoCard">
                    <img src="../images/icon2.png" alt="icon2"/>
                    <h3>Components</h3>
                    <p>Build encapsulated components that manage ther state</p>
                </div>
                <div className="infoCard">
                    <img src="../images/icon3.png" alt="icon3"/>
                    <h3>Single-way</h3>
                    <p>A set of immutable values are passed to the comonent's.</p>
                </div>
                <div className="infoCard">
                    <img src="../images/icon4.png" alt="icon4"/>
                    <h3>JSX</h3>
                    <p>Statically-typed, designed to run on modern browsers.</p>
                </div>
            </footer>
        );
    };
};
export default Footer;