//1. Importaciones
import React, { Component } from "react";

//2. Funciones o clases y exportación
export default class Banner extends Component {
    render() {
        return (
            <section id="banner">
                <h1>{this.props.title}</h1>
                <p>{this.props.text}</p>
                <a href="#">{this.props.button}</a>
            </section>
        )
    }
}