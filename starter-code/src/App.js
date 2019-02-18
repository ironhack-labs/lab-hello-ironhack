import React, { Component } from "react";
import NavBar from './Components/Navbar/NavBar';
import HeadingText from './Components/HeadingText/HeadingText'
import CardInfo from './Components/CardInfo/CardInfo'
import '../public/style.css'

class App extends Component {
    render() {
        return (
            <div className="app">
                <header>
                    <NavBar />
                    <HeadingText />
                </header>
                <section className="container-section">
                    <CardInfo img="/images/icon1.png" title="Declarative" description="React makes it painless to create interactive UIs."/>
                    <CardInfo img="/images/icon2.png" title="Components" description="Build encapsulated components that manage their state."/>
                    <CardInfo img="/images/icon3.png" title="Single-Way" description="A set of immutable values are passed to the component's"/>
                    <CardInfo img="/images/icon4.png" title="JSX" description="Statically-typed designed to run on modern browsers."/>
                </section>
            </div>
        );
    }
}

export default App;