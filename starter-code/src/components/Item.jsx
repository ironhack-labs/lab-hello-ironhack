import React, { Component } from "react";

class Item extends Component {
  render() {
    return (
      <div className="item">
        <img className="itemImg" src={"../../images/" + this.props.img} alt=""/>
        <h2 className="itemTitle">{this.props.title}</h2>
        <p className="itemDescription">{this.props.description}</p>
      </div>
    );
  }
}

export default Item;
