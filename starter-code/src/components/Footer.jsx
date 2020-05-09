import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div className="infos">
                <div>
                    <img src="/images/icon1.png" width="130px" ></img>
                    <h2>Declarative</h2>
                    <p>React makes it<br />painless to create<br />interactive UIs.</p>
                </div>
                <div>
                    <img src="/images/icon2.png" width="130px"  ></img>
                    <h2>Components</h2>
                    <p>Build encapsulated<br />components that<br />manage their state.</p>
                </div>
                <div>
                    <img src="/images/icon3.png" width="130px" ></img>
                    <h2>Single-Way</h2>
                    <p>A set of immutable<br />values are passed to<br />the component's.</p>
                </div>
                <div>
                    <img src="/images/icon4.png" width="130px" ></img>
                    <h2>JSX</h2>
                    <p>Statically-typed,<br />designed to run on<br />modern browsers.</p>
                </div>
            </div>
        )
    }
}

export default Footer
