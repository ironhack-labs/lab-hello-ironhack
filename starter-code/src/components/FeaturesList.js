import React from 'react'
import Feature from './Feature'

const FeaturesList = () => {
  return (
    <div className="features-list">
      <Feature image="/images/icon1.png" title="Declarative" text="React makes it painless to create interactive UIs" />
      <Feature image="/images/icon2.png" title="Components" text="Build encapsulated componets that manage their state" />
      <Feature image="/images/icon2.png" title="Single-way" text="A set of inmutable values are passed to the component's" />
      <Feature image="/images/icon2.png" title="JSX" text="Statically-typed, designed to run on modern browsers." />
    </div>
  )
}

export default FeaturesList