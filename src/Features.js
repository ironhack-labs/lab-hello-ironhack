import React from 'react'
import './Features.css'
import Card from './Card'

const Features = () => {
  return (
    <div>
      <section className='features'>
        <div className="container">
          <div className="row">
            <Card image='./images/icon1.png' title='Declarative' text='React makes it painless to create interactive UIs' />
            <Card image='./images/icon2.png' title='Components' text='Build encapsulated components that manage their state' />
            <Card image='./images/icon3.png' title='Single-Way' text='A set of immutable values are passed to the components' />
            <Card image='./images/icon4.png' title='JSX' text='Statically-typed, designed to run on modern browsers' />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Features