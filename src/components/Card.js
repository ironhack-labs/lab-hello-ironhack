import React, { Component } from 'react'

class Card extends Component {
    render() {
        return (
            <div className="component">
                <img src={this.props.cardImg} />
                <h4>{this.props.cardTitle}</h4>
                <p>{this.props.cardBody}</p>
            </div>
        )
    }
}

export default Card
