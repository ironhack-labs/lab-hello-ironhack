import React, { Component } from "react";
import "./Elements.css"


class Elements extends Component {

  render(){
    return(
      <div className="elements">
        <img src={this.props.element.image} />
        <h1>{this.props.element.title}</h1>
        <p>{this.props.element.description}</p>
      </div>
    )
  }
}

export default Elements