import React, { Component } from "react";
import "./App.css";

class App extends Component {

    render() {

        return (
            <div className="App">
                <div className="first">
                    <div className="title">
                        <h1> Say hello to ReactJS </h1>
                    </div>
                    <div className="text">
                        <p>You will learn a Frontend framework from scratch, to become an Ninka Developer.</p>
                    </div>
                    <button>Awesome!</button>
                </div>
                <div className="second">
                    <div className="contenidor">
                        <img src="../images/icon1.png" alt="first"/>
                        <h2>Declarative</h2>
                        <p>React makes it painless to create interactive UIs.</p>
                    </div>
                    <div className="contenidor">
                        <img src="../images/icon2.png" alt="second"/>
                        <h2>Components</h2>
                        <p>Build encapsulated components that manage their state.</p>
                    </div>
                    <div className="contenidor">
                        <img src="../images/icon3.png" alt="third"/>
                        <h2>Single-Way</h2>
                        <p>A set of immutable values are passed to the component's</p>
                    </div>
                    <div className="contenidor">
                        <img src="../images/icon4.png" alt="fourth"/>
                        <h2>JSX</h2>
                        <p>Statically-typed, designed to run on modern browsers.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;