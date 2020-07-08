import React, { Component } from "react";


class Boton extends Component {
    render() {
        return (
            <button className="boton">{this.props.texto}</button>
        );
      }
}

export default Boton;