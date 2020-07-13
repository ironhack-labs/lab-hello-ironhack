
import React from 'react'
import './fullpage.css'
import logo from '../images/ironhack-logo.svg'
import top from '../images/menu-top.svg'
import icon1 from '../images/icon1.png'
import icon2 from '../images/icon2.png'
import icon3 from '../images/icon3.png'
import icon4 from '../images/icon4.png'




const Fullpage = () => {


    return (
        <main>
            <div className="container">
                <div className="top-logos">

                    <figure>
                        <img src={logo} className="App-logo" alt="logo" />
                    </figure>
                    <figure>
                        <img src={top} className="nav-logo" alt="logo" />
                    </figure>

                </div>


                <h1>Say hello to ReactJS</h1>
                <p>You will leran a Frontend framework from scratch, to become an Ninja Developer.</p>
                <button className="btn ">Awesome!</button>
            </div>

            <div className="text-bot">
                    <div>
                    <img src={icon1} className="logo-bot" alt="logo" />
                        <h2>Declarative</h2>
                        <small>JSXReact makes it panless to create interactive UIs.</small>
                    </div>
                    <div>
                    <img src={icon2} className="logo-bot" alt="logo" />

                    <h2>Components</h2>
                    <small>Build encapsulated Components manage their state.</small>

                    </div>
                    <div>
                    <img src={icon3} className="logo-bot" alt="logo" />

                    <h2>Single-Way</h2>
                    <small>A set to inmutable values are passed to the component's.</small>

                    </div>
                    <div>
                    <img src={icon4} className="logo-bot" alt="logo" />

                    <h2>JSX</h2>
                    <small>Statically-typed designed to run on modern browsers.</small>

                    </div>
            </div>
        </main>
    )
}

export default Fullpage