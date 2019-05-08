import React, { Component } from "react";
import "./Content.css";
class Content extends Component {
  render() {
    return (
      <div className="Content">
       
         <img src={this.props.obj.imgURL}/>
         <h3>{this.props.obj.title}</h3>
         <p>{this.props.obj.text}</p>
       
      </div>
    );
  }
}

export default Content;