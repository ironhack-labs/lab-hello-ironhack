//1. Importaciones
import React, { Component } from "react";

//2. Funciones o clases y exportación
export default class Features extends Component {
    render({icon, feature, text}=this.props) {
        return (
            <div>
                <img src={icon}/>
                <h3>{feature}</h3>
                <p>{text}</p>
            </div>
        )
    }
} 