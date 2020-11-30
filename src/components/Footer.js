import React from 'react';
import './styles/Footer.css';

const Footer = (props) => {
    return(
        <div className="Footer">
            <div>
                <img src="/images/icon1.png"/>
                <h2>Declarative</h2>
                <p>React makes it painless to create interactive UIs.</p>
            </div>
            <div>
                <img src="/images/icon2.png"/>
                <h2>Components</h2>
                <p>Build encapsulated components that manage their state.</p>
            </div>
            <div>
                <img src="/images/icon3.png"/>
                <h2>Single-Way</h2>
                <p>A set of immutable values are passed to the component's.</p>
            </div>
            <div>
                <img src="/images/icon4.png"/>
                <h2>JSX</h2>
                <p>Statically-typed, designed to run on modern browsers.</p>
            </div>
        </div>
    )
}

export default Footer;