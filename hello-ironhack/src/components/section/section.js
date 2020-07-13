import React from 'react'

//images
import icon1 from '../../public/images/images/icon1.png'
import icon2 from '../../public/images/images/icon2.png'
import icon3 from '../../public/images/images/icon3.png'
import icon4 from '../../public/images/images/icon4.png'

//CSS
import './section.css'

const section = () => {

    return (
        <div className = 'container'>
            <section className = 'row'>
                <article className = 'col-3'>
                    <img src ={icon1} />
                    <h4>Declarative</h4>
                    <p>React makes it painless to create interactiveUIs</p>
                </article>

                <article className = 'col-3'>
                    <img src = {icon2} />
                    <h4>Components</h4>
                    <p>Build encapsulated components that manage their state</p>
                </article>

                <article className = 'col-3'>
                    <img src = {icon3} />
                    <h4>Single-Way</h4>
                    <p>A set of inmmutable values are passed to the componet´s</p>
                </article>

                <article className = 'col-3'>
                    <img src = {icon4} />
                    <h4>JSX</h4>
                    <p>Statically-typed designed to run on modern browsers</p>
                </article>
            </section>
        </div>

    )
}

export default section