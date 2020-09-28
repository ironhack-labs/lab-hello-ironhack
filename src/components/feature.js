import React from 'react'
import './App.css'

const Feature = () => {
    return (
        <article className="feature">
            <div>
                <img src="/icon1.png" alt='Declarative' />
                <h2>Declarative</h2>
                <p>ReactJS makes it painless to create interactive UIS.</p>
            </div>
            <div>
                <img src="/icon2.png" alt='Components' />
                <h2>Components</h2>
                <p>Build encapsulated Components that manage their state.</p>
            </div>
            <div>
                <img src="/icon3.png" alt='Single-way' />
                <h2>Single-way</h2>
                <p>A set of immutable values are passed to day component's.</p>
            </div>
            <div>
                <img src="/icon4.png" alt='JSX' />
                <h2>JSX</h2>
                <p>Statically-typed, designed to run on modern browsers.</p>
            </div>
        </article>
    )
}

export default Feature