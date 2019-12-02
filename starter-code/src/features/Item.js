import React from "react";

export default class Item extends React.Component {
  render() {
    return (
      <div className="item">
        <img src={this.props.image}></img>
        <h2>{this.props.title}</h2>
        <p>{this.props.paragraph}</p>
      </div>
    );
  }
}
