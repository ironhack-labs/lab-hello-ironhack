import React,{Component} from 'react'
import '../public/styles/styles.css'

class App extends Component{
    render(){
        return(
            <div className="main-div">
                <nav className="nav">
                    <img src="../images/ironhack-logo.svg"/>
                    <img src="../images/menu-top.svg"/>
                </nav>

                <div className="landing">
                    <h1 className="tittle">Say hello to React js</h1>
                    <h5 className="subtittle">You will learn a Frontend framework from stratch, to become a Ninja Developer</h5>

                    <button>Awesome</button>
                </div>
                <div className="white">
                    <div className="cards">
                        <article class="card">
                            <img src="../images/icon1.png"/>
                            <h1>Declarative</h1>
                            <p>React makes it painless to create interactive UIs</p>
                        </article>
                        <article class="card">
                            <img src="../images/icon2.png"/>
                            <h1>Components</h1>
                            <p>Build encapsulated components that manage their state</p>
                        </article>
                        <article class="card">
                            <img src="../images/icon3.png"/>
                            <h1>Single-Way</h1>
                            <p>A set of immutable values are passed to the component's</p>
                        </article>
                        <article class="card">
                            <img src="../images/icon4.png"/>
                            <h1>JSX</h1>
                            <p>Statically-typed. designed to run on modern browsers.</p>
                        </article>
                    </div>
                </div>
            </div>
        )
    }
}

export default App