import React, {Component} from "react";

class Feature extends Component {
    render() {
        return (
            <div className="item">
                <img src={this.props.img} alt="Declarative icon" />
                <h2>{this.props.title}</h2>
                <p>{this.props.text}</p>
            </div>
        )
    }
}

export default Feature;