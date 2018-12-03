import React, { Component } from "react";
import "./section.css";

class Section extends Component {
  constructor(props) {
    super(props)
    console.log(props)
  }
  
  render() {
    const iconosTexto = [
      {
        image: "../../../public/images/icon1.png",
        title: "Declarative",
        text: "React makes it painless to create interactive UIs.",
      },
      {
        image: "../../../public/images/icon2.png",
        title: "Components",
        text: "Build encapsulated components that manage their state.",
      },
      {
        image: "../../../public/images/icon3.png",
        title: "Single-Way",
        text: "A set of immutable values are passed to the component's.",
      },
      {
        image: "./images/icon4.png",
        title: "JSX",
        text: "Statically-typed, designed to run on modern browsers.",
      }
    ]
   
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