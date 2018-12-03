import React, { Component } from "react";
import "./Features.css";
import Feature from "../Feature/Feature.js"

class Features extends Component {

  state = {
    featureA: {
      img: '/images/icon1.png',
      title: 'Declarative',
      text: 'React makes it painless to create interactive UIs'
    },
    featureB: {
      img: '/images/icon2.png',
      title: 'Components',
      text: 'Build encasulated components that manage their state'
    },
     featureC: {
      img: '/images/icon3.png',
      title: 'Single-Way',
      text: "A set of immutable values are passed to the component's"
    },
     featureD: {
      img: '/images/icon4.png',
      title: 'JSX',
      text: 'Statically-typed, designed to run on modern browsers'
    },
  }

  render() {
    return (
      <div className="Features">

        <Feature imgPath={this.state.featureA.img} title={this.state.featureA.title} text={this.state.featureA.text}></Feature>
        <Feature imgPath={this.state.featureB.img} title={this.state.featureB.title} text={this.state.featureB.text}></Feature>
        <Feature imgPath={this.state.featureC.img} title={this.state.featureC.title} text={this.state.featureC.text}></Feature>
        <Feature imgPath={this.state.featureD.img} title={this.state.featureD.title} text={this.state.featureD.text}></Feature>
      </div>
    );
  }
}

export default Features;

