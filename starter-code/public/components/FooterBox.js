import React, { Component } from 'react'

export default class FooterBox extends Component {
  constructor() {
    super()
    
    this.imageData = {
      url: ["../images/icon1.png", "../images/icon2.png", "../images/icon3.png", "../images/icon4.png"]
    }
}

  render() {
    const icon1 = <img src={this.imageData.url[0]} />
    const icon2 = <img src={this.imageData.url[1]} />
    const icon3 = <img src={this.imageData.url[2]} />
    const icon4 = <img src={this.imageData.url[3]} />

    const declarative = <h2>Declarative</h2>
    const components = <h2>Components</h2>
    const singleWay = <h2>Single-Way</h2>
    const jsx = <h2>JSX</h2>

    const text1 = <p>React makes it painless to create interactive UIs.</p>
    const text2 = <p>Build encapsulated components that manage their state.</p>
    const text3 = <p>A set of immutable values are passed to the component's.</p>
    const text4 = <p>Statically-typed, designed to run on moderns browsers.</p>

    return (
      <div className="footerContainer">
      <section className="footerBox">{icon1} {declarative} {text1}</section>
      <section className="footerBox">{icon2} {components} {text2}</section>
      <section className="footerBox">{icon3} {singleWay} {text3}</section>
      <section className="footerBox">{icon4} {jsx} {text4}</section>
      </div>
    )
  }
}


