import React, { Component } from 'react';

class Details extends Component {
    render() {
        return (
            <div>
            <section className="wrapper">
            <div className=" details-container">
                <div className="row">
                    <div className="column">
                        <img src="./images/icon1.png" alt="icon1"/>
                        <h3>Declarative</h3>
                        <span>React makes it painless to create interactive UIs</span>
                    </div>
                    <div className="column">
                        <img src="./images/icon2.png" alt="icon2"/>
                        <h3>Components</h3>
                        <span>Build encapsulated components that manage their statement.</span>
                    </div>
                    <div className="column">
                        <img src="./images/icon3.png" alt="icon3"/>
                        <h3>Simgle-Way</h3>
                        <span>A set of immutable values are passed to the component's.</span>
                    </div>
                    <div className="column">
                        <img src="./images/icon4.png" alt="icon4"/>
                        <h3>JSX</h3>
                        <span>Statically-typed, designed to run on modern browsers.</span>
                    </div>
                </div>
                </div>
            </section> 
            </div>


        );
    }
}

export default Details;