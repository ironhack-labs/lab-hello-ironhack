import React from 'react'
import './Section1.css'
import icon1 from '../../../images/icon1.png'
import icon2 from '../../../images/icon2.png'
import icon3 from '../../../images/icon3.png'
import icon4 from '../../../images/icon4.png'

const Section1 = () => {

    return (
        <div className="container" id="section1">
            <div className="row">
                <article className="col-sm-3">
                    <figure>
                        <img src={icon1} alt="declarative-logo"></img>
                    </figure>
                    <h3>Declarative</h3>
                    <p>React makes it painless to create interactive UIs.</p>
                </article>
                <article className="col-sm-3">
                    <figure>
                        <img src={icon2} alt="components-logo"></img>
                    </figure>
                    <h3>Components</h3>
                    <p>Build encapsulated components that manage their state.</p>
                </article>
                <article className="col-sm-3">
                    <figure>
                        <img src={icon3} alt="single-way-logo"></img>
                    </figure>
                    <h3>Single Way</h3>
                    <p>A set of immutable values are passed to the components.</p>
                </article>
                <article className="col-sm-3">
                    <figure>
                        <img src={icon4} alt="jsx-logo"></img>
                    </figure>
                    <h3>JSX</h3>
                    <p>Statically-typed, designed to run on modern browsers.</p>
                </article>
            </div>
        </div>
    )
}

export default Section1