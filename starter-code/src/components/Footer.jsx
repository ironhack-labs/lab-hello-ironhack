import React from 'react';
import "./../styles/White.css";
import "./../styles/App.css";

const Footer = () => {
    return (
        <footer>
            <div className="footer-item">
                <img src="./images/icon1.png" alt="icon"/>
                <h2>Declarative</h2>
                <p>React makes it
                    <br/>painless to create
                    <br/>interactive UIs.
                </p>
            </div>
            <div className="footer-item">
                <img src="./images/icon2.png" alt="icon"/>
                <h2>Component</h2>
                <p>Built encapsulated
                    <br/> components that
                    <br/> manage their state.
                </p>
            </div>
            <div className="footer-item">
                <img src="./images/icon3.png" alt="icon"/>
                <h2>Single-Way</h2>
                <p>A set of immutable
                    <br/> values are passed to
                    <br/> the components.
                </p>
            </div>
            <div className="footer-item">
                <img src="./images/icon4.png" alt="icon"/>
                <h2>JSX</h2>
                <p>Statically typed,
                    <br/>designed to run on
                    <br/>modern browsers.
                </p>
            </div>
        </footer>
    )
}

export default Footer