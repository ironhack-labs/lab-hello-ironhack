import React, { Component } from 'react';
import "../public/styles/styles.css";


class App extends Component{
    render(){
        return(
            <div>
                <div>
                    <div className="nav">
                        <div className="bar">
                            <img src="./images/ironhack-logo.svg"/>
                            <img src="./images/menu-top.svg" alt="menu"/>                
                        </div>                      
                        <div className="content">
                            <h1>Say hello to ReactJS</h1>
                            <h2>You will learn a Frontend framework from scratch, to became a Ninja Developer</h2>
                            <button>Awesome!</button>
                        </div>
                    </div>
                    <div className="icons">
                        <div className="char">
                            <img src="./images/icon1.png"/>
                            <h3>Declarative</h3>
                            <h4>React makes it painless to create interactive UIs</h4>
                        </div>
                        <div className="char">
                            <img src="./images/icon2.png"/>
                            <h3>Components</h3>
                            <h4>Build encapsulated components that manage their state</h4>
                        </div>
                        <div className="char">
                            <img src="./images/icon3.png"/>
                            <h3>Single-Way</h3>
                            <h4>A set of immutable values are passed to the components</h4>
                        </div>
                        <div className="char">
                            <img src="./images/icon4.png"/>
                            <h3>JSX</h3>
                            <h4>Statically-typed, designed to run on modern browsers</h4>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default App;