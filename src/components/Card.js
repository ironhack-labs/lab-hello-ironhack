import React, { Component } from 'react'

 class Card extends Component {
    render() {
        return (
            <div>
                <img src={this.props.cardImg}/>
                <p>{this.props.cardTitle}</p>
                <p>{this.props.cardBody}</p>

            </div>
        )
    }
}

export default Card
