import React from "react";
/* import "./miniItem.css"; */

export default class MiniItem extends React.Component {
  render() {
    return (
      <div className="miniItem">
        <img src={this.props.img} alt="" />
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
      </div>
    );
  }
}
