import React, { Component } from "react";
import "./App.css";
import Contenedor from "./components/Contenedor";
import Card from "./components/Card";

class App extends Component {
    render() {
        return (
            <div className="fold-1">
           <div className="navBar">
                <img className="logotipo" src="../images/ironhack-logo.svg"/>
                <img className="menu" src="../images/menu-top.svg"/>
               
           </div>

            <Contenedor />
            <Card />
            </div>
        );
    }
}

export default App;