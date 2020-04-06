import React, { Component } from 'react';


class Section extends Component {
    render() {
        return (
            <section className="section-container">
                <div className="info-container">
                    <img className="icon" alt="icon" src="images/icon1.png" />
                    <h2 className="title-section">Declarative</h2>
                    <p className="text-section">React make it painless to create interactive UIs</p>
                </div>
                <div className="info-container">
                    <img className="icon" alt="icon" src="images/icon2.png" />
                    <h2 className="title-section">Components</h2>
                    <p className="text-section">Build encapsulated components that manage their state</p>
                </div>
                <div className="info-container">
                    <img className="icon" alt="icon" src="images/icon3.png" />
                    <h2 className="title-section">Single-Way</h2>
                    <p className="text-section">A set of immutable values are passed to the components</p>
                </div>
                <div className="info-container">
                    <img className="icon" alt="icon" src="images/icon4.png" />
                    <h2 className="title-section">JSX</h2>
                    <p className="text-section">Statically-typed designed to run on modern browsers</p>
                </div>
            </section>
        );
    }
}

export default Section;