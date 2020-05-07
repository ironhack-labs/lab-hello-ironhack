import React, { Component } from 'react';
import "../App.css";

export class Footer extends Component {
        render() {
                return (
                        <article className="whiteFooter">
                                <div>
                                        <img src="/images/icon1.png" />
                                        <h3>Declarative</h3>
                                        <p>React make it painless to create interaxtice UIs.</p>
                                </div>
                                <div>
                                        <img src="/images/icon2.png" />
                                        <h3>Components</h3>
                                        <p>Build encapsulated components that manage their state.</p>
                                </div>
                                <div>
                                        <img src="/images/icon3.png" />
                                        <h3>Single-Way</h3>
                                        <p>A set of immutable values are passed to the component's</p>
                                </div>
                                <div>
                                        <img src="/images/icon4.png" />
                                        <h3>JSX</h3>
                                        <p>Staticlly-typed, designed to run on modern browsers.</p>
                                </div>
                        </article>
                )
        }
}

export default Footer
