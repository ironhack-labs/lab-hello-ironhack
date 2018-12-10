import React, { Component } from 'react'
//import Logo from '../public/images/icon1.png'

class App extends Component {
    render() {
        return (
            <div>
                <div className="banner">
                    <nav className="navbar">
                        <div className="brand">
                            <img src={'../images/ironhack-logo.svg'} alt="" />
                        </div>
                        <div className="burguer">
                            <img src={'../images/menu-top.svg'} alt="" />
                        </div>
                    </nav>
                    <div className="content">
                        <h1 className="title">Say hello to<br /> ReactJS</h1>
                        <p>You will learn a Frontend <br /> framework from scratch, to <br /> became a Ninja Developer.</p>
                        <button className="awesome">Awesome!</button>
                    </div>
                </div>
                <section className="icon-row">
                    <div className="icon-container">
                        <div className="icon-item">
                            <img src={'../images/icon1.png'} alt="" />
                            <h3>Declarative</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae libero officia earum facere est quam incidunt. Eius sit quaerat repellat veniam, voluptatem quia libero ducimus!</p>
                        </div>
                        <div className="icon-item">
                            <img src={'../images/icon2.png'} alt="" />
                            <h3>Components</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae libero officia earum facere est quam incidunt. Eius sit quaerat repellat veniam, voluptatem quia libero ducimus!</p>
                        </div>
                        <div className="icon-item">
                            <img src={'../images/icon3.png'} alt="" />
                            <h3>Single-Way</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae libero officia earum facere est quam incidunt. Eius sit quaerat repellat veniam, voluptatem quia libero ducimus!</p>
                        </div>
                        <div className="icon-item">
                            <img src={'../images/icon4.png'} alt="" />
                            <h3>JSX</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae libero officia earum facere est quam incidunt. Eius sit quaerat repellat veniam, voluptatem quia libero ducimus!</p>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default App