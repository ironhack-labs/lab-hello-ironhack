import React from "react";
import "../styles/footer.css";

export default function footer() {
    return (
        <footer className="footer">
            <div className="logos">
                <img src="./images/icon1.png" alt="" />
                <h2>Declarative</h2>
                <p>React makes it<br />painless to create<br />interactive UIs.</p>
            </div>
            <div className="logos">
                <img src="./images/icon2.png" alt="" />
                <h2>Components</h2>
                <p>Build encapsulated<br />components that<br />manage their state.</p>
            </div>
            <div className="logos">
                <img src="./images/icon3.png" alt="" />
                <h2>Single-Way</h2>
                <p>A set of immutable<br />values are passed to<br />the component's.</p>
            </div>
            <div className="logos">
                <img src="./images/icon4.png" alt="" />
                <h2>JSX</h2>
                <p>Statically-typed.<br/>designed to run on<br/>modern browsers.</p>
            </div>
        </footer>

    );
}