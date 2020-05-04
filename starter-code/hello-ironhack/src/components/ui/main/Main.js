import React from 'react'
import './Main.css'
import Button from '../button/Button'

const Main = () => {
    return (
        <>
        <section className="hero">
            <h1>Say hello to ReactJS</h1>
            <h6>You will learn a Frontend framework from scratch, to become an Ninka Developer.</h6>
            <Button/>
        </section>

        <section className="info">
            <article>
                <img src="./images/icon1.png" alt="Icon 1"></img>
                <h3>Declarative</h3>
                <p>React makes is painless to create interactive UIs.</p>
            </article>

            <article>
                <img src="./images/icon2.png" alt="Icon 2" ></img>
                <h3>Components</h3>
                <p>Build encapsulated components that manage their state.</p>
            </article>

            <article>
                <img src="./images/icon3.png" alt="Icon 3"></img>
                <h3>Single-Way</h3>
                <p>A set of inmmutable values are passed to the component's</p>
            </article>

            <article>
                <img src="./images/icon4.png" alt="Icon 4"></img>
                <h3>JSX</h3>
                <p>Statically-typed, designed to run on modern browsers.</p>
            </article>


        </section>
        </>
    )
}


export default Main