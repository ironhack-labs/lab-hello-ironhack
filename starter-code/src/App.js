import React, { Component } from "react";
import "./App.css";
class App extends Component {
    render(){
        return (
            <div className="App">
                <div className="row">
                    <div className="top-section">
                    <div className="cover-image">
                    </div>
                    {/* <img style="background: url(./images/react-logo.png)"></img> */}
                        <h1>Say hello to ReactJS</h1>
                        <p>You will learn a Frontend framework from scratch, to become a Ninja Developer</p>
                        <button className="top-button">Awesome!</button>
                    </div>
                    <div className="components-section">
                        <div className="col-4">
                            <img src="./images/icon1.png"></img>
                            <h1>Declarative</h1>
                            <p>React makes it painless to create interactive UIs</p>
                        </div>
                        <div className="col-4">
                            <img src="./images/icon2.png"></img>
                            <h1>Components</h1>
                            <p>Build encapsulated components that manage their state</p>
                        </div>
                        <div className="col-4">
                            <img src="./images/icon3.png"></img>
                            <h1>Single-Way</h1>
                            <p>A set of immutable values are passed to the component's</p>
                        </div>
                        <div className="col-4">
                            <img src="./images/icon4.png"></img>
                            <h1>JSX</h1>
                            <p>Statically-typed designed to run on modern browsers.</p>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}
export default App;