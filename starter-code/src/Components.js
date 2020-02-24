import React from 'react'

function Components() {
    return (
        <ul className="listing">
            <li>
                <img src="./images/icon1.png"/>
                <h1>Declarative</h1>
                <p>React makes it painless to create interactive UIs.</p>
            </li>
            <li>
                <img src="./images/icon2.png"/>
                <h1>Components</h1>
                <p>Build encapsulated components that manage their state</p>
            </li>
            <li>
                <img src="./images/icon3.png"/>
                <h1>Single-Way</h1>
                <p>A set of immutable values are passed to the component's</p>
            </li>
            <li>
                <img src="./images/icon4.png"/>
                <h1>JSX</h1>
                <p>Statically-typed designed to run on modern browsers.</p>
            </li>   
        </ul>
    )
}

export default Components;
