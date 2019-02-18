import React from 'react';
import "./CardInfo.css"


class CardInfo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container-card">
                <img src={this.props.img} />
                <h2>{this.props.title}</h2>
                <p>{this.props.description}</p>
            </div>
        )
    }
}

export default CardInfo;