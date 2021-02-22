import React from "react";
import Div1 from "./Div1";
import Navbar from "./Navbar";
import Options from "./Options";
import "./App.css";

class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <Div1 />
                <div id="options">
                    <Options img="images/icon1.png" h2="Declarative" p="React makes it painless to create interactive UIs" />
                    <Options img="images/icon2.png" h2="Components" p="Build encapsulated components that manage their state." />
                    <Options img="images/icon3.png" h2="Single-Way" p="A set of mutable values are passed to the component." />
                    <Options img="images/icon4.png" h2="JSX" p="Staticly-typed, designed to run on model browsers." />
                </div>
            </div>
        )
    }
}

export default App;
