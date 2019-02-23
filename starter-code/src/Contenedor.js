import React, { Component } from "react";
import "./App.css";

class Contenedor extends Component {
    render()
    {
        return (
            <div className="contenido">
                <h1>Say hello to </h1>
                <h1>ReactJS</h1>
                <p>You will learn a Frontend<br></br> framework from scratch, <br></br> to become an Ninja Developer</p>
            
                <button className="button-lg">Awesome!</button>
            </div>
            
        );
    }
}


export default Contenedor;