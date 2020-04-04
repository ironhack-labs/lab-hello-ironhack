import React, { Component } from 'react';

class Box extends Component {
  render(){
    const { name, img, text } = this.props
    return ( 
      <div className="box">
        <img alt="none" src={`/images/${img}`}/>
        <h2>{name}</h2>
        <p>{text}</p>
      </div>
    );
  }
}

class Boxes extends Component {

  // Simulate DB get
  getBoxes(){
    return [
      {'title': 'Declarative', 'text': 'React makes painless to create interavtive UIs', 'image': 'icon1.png'},
      {'title': 'Components', 'text': 'Build encapsulated components that manage their state', 'image': 'icon2.png'},
      {'title': 'Single-Way', 'text': 'A set of inmutable values are passed to the components', 'image': 'icon3.png'},
      {'title': 'JSX', 'text': 'Statically-typed designed to run on modern browsers', 'image': 'icon4.png'}
    ]
  }

  generateBoxes(){
    const boxes = this.getBoxes()
    let jsxBoxes = []
    for (let i = 0; i < boxes.length; i++) {
      const box = boxes[i];
      jsxBoxes.push(<Box key={box.name} name={box.title} img={box.image} text={box.text} />)
    }
    return jsxBoxes
  }

  render(){
    return (
      <div className="boxes">
        {this.generateBoxes()}
      </div>
    );
  }
}

export default Boxes;
