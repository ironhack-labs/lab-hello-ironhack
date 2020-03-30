import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
        <div>
            <div className='App'>
                <img src="/images/ironhack-logo.svg" alt=""/>
                <h1>Say hello to ReactJS</h1>
                <p>You will learn Frotend freamwork from Scratch, to becaome an Ninka Developer.</p>
                <button>Awesome!</button>
            </div>
            <div className="sections">
                <section>
                    <img src="/images/icon1.png" alt=""/>
                    <h3>Declarative</h3>
                    <p>React makes it painless to create interactive UIs.</p>
                </section>
                <section>
                <img src="/images/icon2.png" alt=""/>
                    <h3>Components</h3>
                    <p>React makes it painless to create interactive UIs.</p>
                </section>
                <section>
                <img src="/images/icon3.png" alt=""/>
                    <h3>Single-Way</h3>
                    <p>React makes it painless to create interactive UIs.</p>
                </section>
                <section>
                <img src="/images/icon4.png" alt=""/>
                    <h3>JSX</h3>
                    <p>React makes it painless to create interactive UIs.</p>
                </section>
            </div>
        </div>
    )
  }
}

export default App;
