import React, { Component } from 'react'
import '../public/stylesheets/Grid.css';

class GridElement extends Component {
    render() {
        return (
            <div className="grid-element">
                <img src={this.props.imgSrc} alt=""/>
                <h3>{this.props.title}</h3>
                <p>{this.props.paragraph}</p>
            </div>
        )
    }
}

export default class Grid extends Component {
  render() {
    return (
      <div className="grid-container">
        <GridElement title="Declarative" imgSrc="./images/icon1.png" paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, eius fugit minus quibusdam aut incidunt dignissimos recusandae vitae doloribus, quas corrupti nobis provident consequatur distinctio temporibus laboriosam magni odit animi."/>
        <GridElement title="Components" imgSrc="./images/icon2.png" paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, eius fugit minus quibusdam aut incidunt dignissimos recusandae vitae doloribus, quas corrupti nobis provident consequatur distinctio temporibus laboriosam magni odit animi."/>
        <GridElement title="Single-way" imgSrc="./images/icon3.png" paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, eius fugit minus quibusdam aut incidunt dignissimos recusandae vitae doloribus, quas corrupti nobis provident consequatur distinctio temporibus laboriosam magni odit animi."/>
        <GridElement title="JSX" imgSrc="./images/icon4.png" paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, eius fugit minus quibusdam aut incidunt dignissimos recusandae vitae doloribus, quas corrupti nobis provident consequatur distinctio temporibus laboriosam magni odit animi."/>
      </div>
    )
  }
}
