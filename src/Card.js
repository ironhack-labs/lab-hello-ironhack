import React, { Component } from 'react';


class Card extends Component {

    render() {
        return (
            <div className="Card">
                <img src={this.props.info.image}/>
                <h2>{this.props.info.title}</h2>
                <p>{this.props.info.text}</p>
            </div>
        )
    }
}


export default Card;
