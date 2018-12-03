import React, { Component } from "react";
import "./card.css";

class Card extends Component{
    constructor(){
     super()   
    }
    render(){
        return (
            <div className="card">
                <img src={this.props.image}></img>
                <h1>{this.props.title}</h1>
                <p>{this.props.text}</p>
            </div>
        )
    }
}
export default Card;