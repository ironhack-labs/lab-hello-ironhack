//Paso I: Importaciones
import React, { Component } from "react";

//Paso II: Clases
class Card extends Component {

  render(props) {
  return (

    <div className = "card">
        <div><img src = {this.props.imgsrc}/></div>
        <div>{this.props.h2}</div>
        <div>{this.props.p}</div>
    </div>
  )
  }
} 

//Paso III:Exportaciones
export default Card; 
