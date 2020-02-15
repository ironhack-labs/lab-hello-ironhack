import React, { Component } from "react";
import "../App.css";

class Contenedor extends Component {
    render() {
        return(
            <div className="information">
                <h1>ReactJS</h1>
                <p>You will learn a Frontend <br/> framework from scratch, <br/> to become a Ninja Developer</p>
                <button className="button-lg">Awesome!!</button>
            </div>
        )
    }
};

export default Contenedor;

