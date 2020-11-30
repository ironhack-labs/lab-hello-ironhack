import React from 'react';
import Card from '../Card';
import './Section.css';

const Section = () => {
  return (
    <div className='section'>
      <Card
        image='/images/icon1.png'
        title='Declarative'
        text='React makes it painless to create interactive UIs.'
      />
      <Card
        image='/images/icon2.png'
        title='Components'
        text='Build encapsulated components that manage their state.'
      />
      <Card
        image='/images/icon3.png'
        title='Single-Way'
        text="A set of immutable values are passed to the component's."
      />
      <Card
        image='/images/icon4.png'
        title='JSX'
        text='Statically-typed, designed to run on modern browsers.'
      />
    </div>
  )
}

export default Section;
