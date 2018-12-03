import React, { Component } from "react";
import "./section.css";

class Section extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
  
   
    return (
      
        <div>
        <img src={this.props.img} />
        <h3>{this.props.title}</h3>
        <p>{this.props.p}</p>

        </div>
      
    );
  }
}

export default Section;