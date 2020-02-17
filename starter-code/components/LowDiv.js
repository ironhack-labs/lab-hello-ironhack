import React from 'react'

export default function LowDiv() {
    return (
        <div id="low-div">
            <div className="low-div-div">
                <img className="low-div-img" src="/images/icon1.png" alt="1"/>
                <h3>Declarative</h3>
                <p className="text">React makes it painless to create interactive UIs.</p>
            </div>
            <div className="low-div-div">
            <img className="low-div-img" src="/images/icon2.png" alt="2"/>
                <h3>Components</h3>
                <p className="text">Build encapsulated components that manage their state.</p>
            </div>
            <div className="low-div-div">
            <img className="low-div-img" src="/images/icon3.png" alt="3"/>
                <h3>Single-way</h3>
                <p className="text">A set of immutable values are passed to the component's.</p>
            </div>
            <div className="low-div-div">
            <img className="low-div-img" src="/images/icon4.png" alt="4"/>
                <h3>JSX</h3>
                <p className="text">Statically-typed, designed to run on modern browsers.</p>
            </div>
        </div>
    )
}
