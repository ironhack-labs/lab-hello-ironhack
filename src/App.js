// 1. Importaciones
import React, { Component } from "react";
import Header from './components/Header.js';
import Banner from './components/Banner.js';
import ImageBox from './components/ImageBox.js';
import "./App.css";

// 2. Funciones o Clases
class App extends Component {

    render() {

        const bannerTitle = 'Say hello to RactJS';
        const bannerText = 'You will learn how to use the most popular frontend library, and become a super Ninja developer.';

        const data = [
            {
                icon: "./images/icon1.png",
                title: "Declarative",
                text: "React makes it painless to create interactive UIs.",
            },
            {
                icon: "./images/icon2.png",
                title: "Components",
                text: "Build encapsulated components that manage their state.",
            },
            {
                icon: "./images/icon3.png",
                title: "Single-Way",
                text: "A set of immutable values are passed to the component's",
            },
            {
                icon: "./images/icon4.png",
                title: "JSX",
                text: "Statically-typed, designed to run on modern browsers",
            },
        ]

        return (
            <div className="App">

                <Header logo="./images/ironhack-logo.svg" menu="./images/menu-top.svg" />

                <Banner title={bannerTitle} text={bannerText} button="Awesome!" />

                <section id="features">
                    {data.map((item, index) =>
                        <ImageBox key={index} icon={item.icon} title={item.title} text={item.text} />
                    )}
                </section>

            </div>
        );
    }

}

// 3. Exportación
export default App;