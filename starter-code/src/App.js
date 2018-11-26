import React, {Component} from "react"
import "./App.css"
import Features from "./Features"

class App extends Component {

    state = {
        containerA: {
            img: "/images/icon1.png",
            title: "Declarative",
            desc: "React makes it painless to create interactive UIs."
        },
        containerB: {
            img: "/images/icon2.png",
            title: "Components",
            desc: "Build encapsulated components that manage their state."
        },
        containerC: {
            img:"/images/icon3.png",
            title: "Single-Way",
            desc: "A set of immutable values are passed to the component's."
        },
        containerD: {
            img: "images/icon4.png",
            title: "JSX",
            desc: "Statically-typed, designed to run on modern browsers."
        }
    }
    
    render() {
        
        return (
            <div className="App">
                <nav>
                    <div className="nav-content">
                        <img src="/images/ironhack-logo.svg" />
                        <img src="/images/menu-top.svg"/>
                    </div>
                </nav>
                <section id="section1">
                <div id="container1">
                    <div>
                        <h1>Say hello to ReactJS</h1>
                    </div>
                    <div>
                        <p>You Will learn Frontend framework from scratch, to became an Ninka Developer.</p>
                    </div>
                    <div id="btn">
                        <button>Awesome!</button>
                    </div>
                </div>
                </section>

                <section id="section2">
                
                    <div className="container2">
                        <Features img={this.state.containerA.img} title={this.state.containerA.title} desc={this.state.containerA.desc} />
                    </div>

                    <div className="container2">
                        <Features img={this.state.containerB.img} title={this.state.containerB.title} desc={this.state.containerB.desc} />
                    </div>

                     <div className="container2">
                        <Features img={this.state.containerC.img} title={this.state.containerC.title} desc={this.state.containerC.desc} />
                    </div>

                     <div className="container2">
                        <Features img={this.state.containerD.img} title={this.state.containerD.title} desc={this.state.containerD.desc} />
                    </div>

                </section>

            </div>
        );
    }
}

export default App;