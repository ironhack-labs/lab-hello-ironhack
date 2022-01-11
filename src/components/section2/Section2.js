import React from 'react';
import ReactDOM from 'react-dom';

const Section2 = () => {
    return (
        <section className="section2">
            <div className="container">
                <div>
                    <img src="images/icon1.png"/>
                    <h3>Declarative</h3>
                    <p>React makes it painless to create interactives UIs.</p>
                </div>
                <div>
                    <img src="images/icon2.png"/>
                    <h3>Components</h3>
                    <p>Build encapsulated components that manage their state.</p>
                </div>
                <div>
                    <img src="images/icon3.png"/>
                    <h3>Single-Way</h3>
                    <p>A set of immutable value are passed to <br/>the component's.</p>
                </div>
                <div>
                    <img src="images/icon4.png"/>
                    <h3>JSX</h3>
                    <p>Statically-typed, designed to run on modern browsers.</p>
                </div>
            </div>
        </section>
    )
}

export default Section2;