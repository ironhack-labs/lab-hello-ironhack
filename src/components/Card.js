import React, { Component } from 'react'

 class Card extends Component {
    render() {
        return (
            <div>
                <img src={this.props.cardImg}/>
                <p className="card-title">{this.props.cardTitle}</p>
                <p className="card-text">{this.props.cardBody}</p>

            </div>
        )
    }
}

export default Card
