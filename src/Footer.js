import React, {Component} from "react";
import "./App.css";

//Clases o Funciones
export default class Footer extends Component {
    render({img,title,desc}=this.props){
    return(
        <div className="cardStyles">
          <img src={img} width='100px' height='100px' />
          <h3>{title}</h3>
          <span>{desc}</span>
        </div>
    )
  }
}
