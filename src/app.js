//1. Importaciones
import React, { Component } from "react";
import Menu from './components/Menu';
import Banner from './components/Banner';
import Features from './components/Features';
import "./App.css";

//2. Funciones o clases
export default class App extends Component {
  render() {
    //Variables 
    const pageTitle = 'Say hello to React JS';
    const bannerText = 'You will learn how to use the most popular frontend library, and become a super Ninja developer.';
    const dataFeatures = [
        {
            icon: "./images/icon1.png",
            feature: "Declarative",
            text: "React makes it painless to create interactive UIs.",
        },
        {
            icon: "./images/icon2.png",
            feature: "Components",
            text: "Build encapsulated components that manage their state.",
        },
        {
            icon: "./images/icon3.png",
            feature: "Single-Way",
            text: "A set of immutable values are passed to the component's",
        },
        {
            icon: "./images/icon4.png",
            feature: "JSX",
            text: "Statically-typed, designed to run on modern browsers",
        },
    ]
    //Rénder del sitio
    return (
        <div className="App">
            <Menu logo="./images/ironhack-logo.svg" menu="./images/menu-top.svg" />
            <Banner title={pageTitle} text={bannerText} button="awesome!" />

            <section id="features">
                {dataFeatures.map((item, index) => //Recorremos data hasta renderizar toda la data
                    <Features key={index} icon={item.icon} title={item.feature} text={item.text}/>
                )}
            </section>
        </div>
    );
}
}

//3. Exportaciones (para conectar entre archivos)
// export default App; (o lo podemos exportar esde arriba)
