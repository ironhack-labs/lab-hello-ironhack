import React, { Component } from "react";
import "./App.css";

class App extends Component {

    render() {
        const icon1 = '/images/icon1.png';
        const icon2 = '/images/icon2.png';
        const icon3 = '/images/icon3.png';
        const icon4 = '/images/icon4.png';
        const ihLogo = '/images/ironhack-logo.svg';
        const reactLogo = '/images/react-logo.svg';
        const menuBarImage = '/images/menu-top.svg';
        const pageTitle = {
            title: "Say hello to ReactJS",
            subTitle: "You will learn hot to use the most popular frontend library, and become a super Ninja developer",
            button: "Awesome",
        }

        const navBar = <nav><img src= {ihLogo}></img><img src= {menuBarImage}></img></nav>
        const title = <h1>{pageTitle.title}</h1>
        const subtitle = <h2>{pageTitle.subTitle}</h2>
        const button = <button>{pageTitle.button}</button>

        const Section = ({image, title, description}) => {
            return <section><img src={image}></img> <h3>{title}</h3> <p>{description}</p></section>
        }

            return (
                <div>

                <section className="top">
                {navBar}
                {title}
                {subtitle}
                {button}
                </section>

                <section className="bottom">
                <Section image="/images/icon1.png" title="Declarative"  description="React makes it painless to create interactive UIs" />
                <Section image="/images/icon2.png" title="Components"  description="Build encapsulted components that manage their state" />
                <Section image="/images/icon3.png" title="Single-Way"  description="A set of immutable values are passed to the component's" />
                <Section image="/images/icon4.png" title="JSX"  description="Statically-typed, designed to run on modern browsers" />
                </section>

                </div>
            );
    };
}







export default App;