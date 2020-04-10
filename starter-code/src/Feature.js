import React, { Component } from "react";
import "./styles.css";

class Feature extends Component {
    render() {
        return (
            <div className="Feature">
                <img className="Icon" src={this.props.icon} />
                <h2 className="Name">{this.props.name}</h2>
                <span className="Description">{this.props.description}</span>
            </div>
        );
    }
}

export default Feature;