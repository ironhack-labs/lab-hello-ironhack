import React, { Component } from "react";


export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <img src={this.props.img} />
        <h2>{this.props.tittle}</h2>
        <p>{this.props.text}</p>
      </div>
    );
  }
}


