import React from 'react';
import Card from './Card';

const Description = () => {
  const infos = [
    {
      img_url: './images/icon1.png',
      title: 'Declarative',
      content: 'React makes it painless to create interactive UIs.'
    }, {
      img_url: './images/icon2.png',
      title: 'Components',
      content: 'Build encapsulated components that manage their state.'
    }, {
      img_url: './images/icon3.png',
      title: 'Single-Way',
      content: 'A set of immutable values are passed to the component\'s'
    }, {
      img_url: './images/icon4.png',
      title: 'JSX',
      content: 'Statically-typed, designed to run on modern browsers.'
    },
  ]
  return (
    <div className='lowerPart'>
      {infos.map((card, i) => (
        <Card key={i} card={card} />
      ))}
    </div>
  )
}

export default Description;