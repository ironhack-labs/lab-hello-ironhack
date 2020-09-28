import React from 'react'

import img1 from '../../public/icon1.png';
import img2 from '../../public/icon2.png';
import img3 from '../../public/icon3.png';
import img4 from '../../public/icon4.png';



function Feature() {

    return (
        <section>
            <article>
                <img src={img1}></img>
                <h2>Declarative</h2>
                <p>React makes it pinless to create interactive UI</p>
            </article>

            <article>
                <img src={img2}></img>
                <h2>Components </h2>
                <p>Build encapsulated</p>
            </article>

            <article>
                <img src={img3}></img>
                <h2>Single-Way</h2>
                <p>A set of immutable values are passed to the components's</p>
            </article>

            <article>
                <img src={img4}></img>
                <h2>JSX</h2>
                <p>Statically-typed designed to run on modern browser</p>
            </article>
        </section>
    )
}

export default Feature