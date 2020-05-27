import React, { Component } from "react";
import "./app.css";

class App extends Component {
    render () {
      return (
            <div className="App">
                <div className="top">
                    <header>
                        <nav>
                        <img className="ihLogo" src='../images/ironhack-logo.svg'/>
                        <img className="menu-top" src='../images/menu-top.svg'/>
                        </nav>
                    </header> 
                    <div className="top-container">
                        <h1>Say hello to ReactJS</h1>
                        <p className="top-p">
                            You will learn a Frontend framework from scratch, to become a Ninja Developer.
                        </p>
                        <button>Awesome!</button>   
                    </div><br/>
                </div>
                <div className="container">
                    <article className="container-icons">
                        <img src="../images/icon1.png" alt="Declarative" className="icons"/>
                        <h3>Declarative</h3>
                        <p>React makes it painless to create interactive UIs.</p>
                    </article>

                    <article className="container-icons">
                        <img src="../images/icon2.png" alt="Components" className="icons"/>
                        <h3>Components</h3>
                        <p>Build encapsulated components that manage their state.</p>
                    </article>

                    <article className="container-icons">
                        <img src="../images/icon3.png" alt="Single-Way" className="icons"/>
                        <h3>Single-Way</h3>
                        <p>A set of immutable values are passed to the components.</p>
                    </article>

                    <article className="container-icons">
                        <img src="../images/icon4.png" alt="JSX" className="icons"/>
                        <h3>JSX</h3>
                        <p>Statically-typed, designed to run on modern browsers.</p>
                    </article>
                </div>
            </div>
        )
    }
}

export default App;