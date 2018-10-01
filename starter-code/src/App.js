import React, {Component} from "react"
import "./App.css"

class App extends Component{
    render(){
        return(
            <div className="App">
                <img className="logoReact" src="/images/react-logo.svg" alt="logoReact"></img>
                <navbar className="NavBar">
                    <img className="logo" src="/images/ironhack-logo.svg" alt="logoIronHack"></img>
                    <img className="logo" src="/images/menu-top.svg" alt="logoMenu"></img>
                </navbar>
                <section className="body">
                    <h1>Say hello to ReactJS</h1>
                    <p>You will learn Frontend framework from scratch, to become a Ninja developer</p>
                    <button>Awesome</button>
                </section>
                <section className="logos">
                    <div>
                        <img src="images/icon1.png" alt="icono1"></img>
                        <h3>Declarative</h3>
                        <p>React makes it painless to create interactive UIs.</p>
                    </div>
                    <div>
                        <img src="images/icon2.png" alt="icono2"></img>
                        <h3>Components</h3>
                        <p>Build encapsulated components that manage their state.</p>
                    </div>
                    <div>
                        <img src="images/icon3.png" alt="icono3"></img>
                        <h3>Single-way</h3>
                        <p>A set of immutable values are passedto the component's.</p>
                    </div>
                    <div>
                        <img src="images/icon4.png" alt="icono4"></img>
                        <h3>JSX</h3>
                        <p>Statically-typed, designed to run on  modern browsers</p>
                    </div>
                </section>
            </div>
        )
    }
}

export default App;