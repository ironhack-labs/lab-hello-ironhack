import React, { Component } from "react";
import Element from "./Element";

export default class Hello extends Component {
  constructor() {
    super();
    this.elements = [
      {
        image: "public/images/icon1.png",
        title: "Declarative",
        description: "React makes it painless to create interactive UIs",
      },

      {
        image: "public/images/icon2.png",
        title: "Components",
        description: "React makes it painless to create interactive UIs",
      },
      {
        image: "public/images/icon3.png",
        title: "Single-Way",
        description: "React makes it painless to create interactive UIs",
      },
      {
        image: "public/images/icon4.png",
        title: "JSX",
        description: "React makes it painless to create interactive UIs",
      },
    ];
  }

  render() {
    return (
      <div>
        <div id="front">
          <div id="topBar">
            <img src="public/images/ironhack-logo.svg" />
            <img src="public/images/menu-top.svg" />
          </div>
          <div id="text">
            <h1>Say hello to ReactJs</h1>
            <h3>
              You will learn a Frontend framework from scratch, to become a
              Ninja Developer
            </h3>
          </div>
          <button id="button1">Awesome!</button>
        </div>
        <div id="bottom"></div>
        <div id = "capsules">
          {this.elements.map((element, i) => (<Element key={i} image={element.image}  title={element.title} description={element.description}></Element>))}
        </div>
      </div>
    );
  }
}
