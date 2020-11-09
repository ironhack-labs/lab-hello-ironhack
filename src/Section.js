import React, { Component } from "react";

const Section = ({icon, title, text}) => {
    return (
        <div>
          <img src={icon} alt=""/>  
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      )
}

/* class User extends Component {

  render() {
  return <h2>Hello, {this.props.firstName} {this.props.lastName}</h2>;
  }
} */

export default Section;
