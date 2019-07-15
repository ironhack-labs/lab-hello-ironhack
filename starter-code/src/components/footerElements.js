import React, { Component } from "react";
import Footer from "./Footer"

export default class footerElements extends Component {
  constructor() {
    super();
    this.containers = [
      {
        img:"images/icon1.png",
        tittle:"Declarative",
        text: "React makes it painless to create interactive UIs."
      },
      {
        img:"images/icon2.png",
        tittle:"Components",
        text:"Build encapsulated components that manage their statte."
      },
      {
        img:"images/icon3.png",
        tittle:"Single-Way",
        text:"A set of inmutable values are passed to the component´s."
      },
      {
        img:"images/icon4.png",
        tittle:"JSX",
        text:"Statically-typed designed to run on modern browsers."
    }
    ]
};
  

  render() {
    return (
      <div className="footer-elem">
        {this.containers.map((elem,index) => (
          <Footer
          key={index}
          img={elem.img}
          tittle={elem.tittle}
          text={elem.text} />
        ))}
      </div>
    );
  }
}
