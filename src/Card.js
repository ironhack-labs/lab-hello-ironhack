import React, { Component } from "react";
import './App.css'

class Card extends Component {
    render(props){
        return (<div><img src={this.props.img}/> <div><h2>{this.props.h2}</h2></div> <div><p>{this.props.p}</p></div></div>);
    }
}

export default Card;