import React, { Component } from "react";


class Card extends Component {
    render(){
        return (
            <div className="one-card">
                <img src={this.props.cardImg} />
                <h2> {this.props.cardTitle} </h2>
                <p> {this.props.cardBody} </p>
            </div>
        ) 
    }
    
}

export default Card;