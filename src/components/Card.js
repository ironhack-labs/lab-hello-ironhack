import React, { Component } from 'react'

class Card extends Component {
    render() {
        return (
            <div className="card">
                <img className="card-image" src={this.props.cardImg} />
                <h3 className="card-title">{this.props.cardTitle}</h3>
                <p className="card-text">{this.props.cardBody}</p>
            </div>
        )
    }
}

export default Card;