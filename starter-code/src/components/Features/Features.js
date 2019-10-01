import React, { Component } from 'react'
import Feature from './Feature/Feature'
import './Features.css'

class  FeatureData{
  constructor(id, img, title, text) {
    
    if (!id || id == 0 || img == "" || title == "" || text == "") throw new Error("Error data feature");
    
    this.id = id
    this.img = img;
    this.title = title;
    this.text = text;
  }
}

export default class Features extends Component {
  constructor(props) {
    super()

    this.features = [
      new FeatureData(
        1,
        "images/icon1.png", 
        "Declarative", 
        "React makes it painless to create interactive UIs."
        ),
      new FeatureData(
        2,
        "images/icon2.png", 
        "Components", 
        "Build encapsulated components that manage their state."
        ),
      new FeatureData(
        3,
        "images/icon3.png",
        "Single-Way", 
        "A set of immutable values are past too the component's."
        ),
      new FeatureData(
        4,
        "images/icon4.png", 
        "JSX", 
        "Statically-typed design to run on modern browsers."
        )
    ];
  }
  
  render() {
    return (
      <ul className='Features'>
        {this.features.map(feature => (
          <Feature
            key={feature.id}
            img={feature.img}
            title={feature.title}
            text={feature.text}
          ></Feature>
        ))}
      </ul>
    )
  }
}