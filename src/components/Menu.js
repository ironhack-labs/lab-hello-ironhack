//1. Importaciones
import React, { Component } from "react";

//2. Funciones o clases y exportación
export default class Menu extends Component {
    render() {
        return (
            <header id="menu">
                <nav>
                    <a href="#">
                        <img src={this.props.logo}/>
                    </a>
                    <a href="#">
                        <img src={this.props.menu}/>
                    </a>
                </nav>
            </header>
        )
    }
}