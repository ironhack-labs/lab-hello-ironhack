import React from 'react'

function Chabeli(props) {


    return (
        <section className="seccion">
            <article>
                <figure className="icon1">
                    <img src="../images/icon1.png" alt="icon1" />
                    <h3>Declarative</h3>
                    <p>React makes <br/> it painless to create  <br/> interactive UIs</p>
                </figure>
            </article>
            <article>
                <figure className="icon2">
                    <img src="../images/icon2.png" alt="icon2" />
                    <h3>Component</h3>
                    <p>Buid encapsulated  <br/>components that  <br/>manage their state</p>

                </figure>
            </article>
            <article>
                <figure className="icon3">
                    <img src="../images/icon3.png" alt="icon3" />
                    <h3>Single-Way</h3>
                    <p>A set of inmutable  <br/>values ares passed to  <br/>the components</p>

                </figure>
            </article>
            <article>
                <figure className="icon4">
                    <img src="../images/icon4.png" alt="icon4" />
                    <h3>JSX</h3>
                    <p>Statically-typed, <br/> designed to run on <br/> modern browsers</p>

                </figure>
            </article>

        </section>

    )
}



export default Chabeli