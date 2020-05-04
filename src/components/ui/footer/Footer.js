import React from 'react'
import './Footer.css';

const Footer = () => {
    return (
        <footer className="foot">
            <div>
                <img src="/icon1.png" alt="ironhack logo" />
                <h4>Declarative</h4>
                <p>React makes it painless to create interactive UIs</p>
            </div>
            <div>
                <img src="/icon2.png" alt="ironhack logo" />
                <h4>Components</h4>
                <p>Build encapsulated components that manage their state</p>

            </div>
            <div>
                <img src="/icon3.png" alt="ironhack logo" />
                <h4>Single-way</h4>
                <p>A set inmutable values are passed to the components</p>

            </div>
            <div>

                <img src="/icon4.png" alt="ironhack logo" />
                <h4>JSX</h4>
                <p>Statically-typed design to run on modern browsers</p>
            </div>
        </footer>
    )
}

export default Footer