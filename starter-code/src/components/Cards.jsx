import React, { Component } from 'react';
import CardSingle from "./CardSingle";

class Cards extends Component {
  render() {
    return (
      <div className='cards__container'>
        <CardSingle
          title='Declarative'
          icon='./images/icon1.png'
          text='React makes it painless to create interactive UIs.'
        />
        <CardSingle
          title='Components'
          icon='./images/icon2.png'
          text='Build encapsulated components that manage their state.'
        />
        <CardSingle
          title='Single-Way'
          icon='./images/icon3.png'
          text='A set of immutable values are passed to the components.'
        />
        <CardSingle
          title='JSX'
          icon='./images/icon4.png'
          text='Statically-typed, designed to run on modern browsers.'
        />
      </div>
    );
  }
}

export default Cards;