import React from "react";
import Header from "./Header"
import IconeDiv from "./IconeDiv"
import "./App.css";

const App = () => {
    return (
        <div>
        <header>
            <Header/>
        </header>
        <section className="main">
            <div className="icn-container">
            <IconeDiv title="Declarative" image="../images/icon1.png">React makes it painless to create intercative UI</IconeDiv>
            <IconeDiv title="Component" image="../images/icon2.png">Build encapsulated components that manage their state</IconeDiv>
            <IconeDiv title="Single-Way" image="../images/icon3.png">A set of immutable values are passed to the component's</IconeDiv>
            <IconeDiv title="JSX" image="../images/icon4.png">Statically-typed, designed to runon modern browsers</IconeDiv>
            </div>
        </section>
        </div>
    )
}

export default App



