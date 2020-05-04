import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import MainSection from "./components/MainSection";
import ReactAssets from "./components/ReactAssets"
    
class App extends Component {
    render() {
        return (
            <div>
                <main className="main">
                    <NavBar />
                    <MainSection />
                </main>
                <section className="reactAssets">
                    <ReactAssets 
                        src="./images/icon1.png"
                        title="Declarative"
                        description ="React makes it painless to create interactive UIs."
                    />
                    <ReactAssets
                        src="./images/icon2.png"
                        title="Components"
                        description="Build encapsulated components that manage their state."
                    />
                    <ReactAssets
                        src="./images/icon3.png"
                        title="Single-Way"
                        description="A set of immutable values are passed to the component's."
                    />
                    <ReactAssets
                        src="./images/icon4.png"
                        title="JSX"
                        description="Statically-typed designed to run on modern browsers."
                        />
                </section>
            </div>
        );
    }
}

export default App;
