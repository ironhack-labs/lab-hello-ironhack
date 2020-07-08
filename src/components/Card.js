import React, { Component } from 'react'

 class Card extends Component {
    render() {
        return (
            <div>
            <img src={this.props.cardImg} />
            <h3> {this.props.cardTitle}</h3>
            <p> {this.props.cardBody} </p>
                
            </div>
        )
    }
}

export default Card