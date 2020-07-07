import React, {Component} from "react";
import Navbar from "./Navbar";
import Button from "./Button";
import Feature from "./Feature";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="content">
                <Navbar />
                <section id="hero" className="dark-bg">
                    <h1>Say hello to<br />ReactJS</h1>
                    <p className="sub-h1">You will learn a Frontend framework from scratch, to become a Ninja Developer.</p>
                    <Button />
                </section>
                <section id="features">
                    <Feature img="../images/icon1.png" title="Declarative" text="React makes it painless to create interaective UIs."/>
                    <Feature img="../images/icon2.png" title="Components" text="Build encapsulated components that manage their state."/>
                    <Feature img="../images/icon3.png" title="Single-Way" text="A set of immutable values are passed to the components."/>
                    <Feature img="../images/icon4.png" title="JSX" text="Statically-typed, designed to run on modern browsers."/>
                </section>
            </div>
        )
    }
}

export default App;