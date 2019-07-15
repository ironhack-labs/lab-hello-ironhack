import React, { Component } from 'react'
import FooterElement from "./FooterElement"




class FootElement {
  constructor(url, title, description) {
    this.url = url
    this.title = title
    this.description = description
  }
}



export default class Footer extends Component {
  constructor() {
    super()
    this.footElements = [
      new FootElement("images/icon1.png", "Declarative", "React makes it painless to create interactive IUs."),
      new FootElement("images/icon2.png", "Components", "Build encapsulated components that manage their state."),
      new FootElement("images/icon3.png", "Single-Way", "A set of inmutable values are passed to the component's."),
      new FootElement("images/icon4.png", "JSX", "Statically-typed, designed to run on modern browsers."),
    ]
  }

  render() {
    return (
      <div className="Footer">
        {
          this.footElements.map((element, idx) =>
            <FooterElement key={idx}
              url={element.url}
              title={element.title}
              description={element.description}
            />
          )
        }
      </div>
    )
  }
}
