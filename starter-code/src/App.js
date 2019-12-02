import React from "react";
import "./App.css";
import Menu from "./menu/Menu";
import Hero from "./hero/Hero";
import Features from "./features/Features";

// import NombreComp from "./carpeta/nombre"


export default class App extends React.Component {
    render() {
        return (
            <main>
                <Menu></Menu>
                <Hero></Hero>
                <Features></Features>
            </main>
        );
    }
}
