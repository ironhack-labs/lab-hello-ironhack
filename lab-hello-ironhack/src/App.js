import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nabvar from "./components/navbar/navbar"
import SectionOne from "./components/article1/article1"

import SectionTwo from "./components/article2/article2"

import icon1 from './images/icon1.png'
import icon2 from './images/icon2.png'
import icon3 from './images/icon3.png'
import icon4 from './images/icon4.png'

const App = () => {

  return (

    <main>

      <Nabvar />

      
      <section className="section1">

        <SectionOne/>

      </section>
      <section className="section2">

        <SectionTwo clasName="col-3" image={icon1} title="Declarative" description="React makes it painless to create interactive UIs"/>
        <SectionTwo clasName="col-3" image={icon2} title= "Components" description ="Build encapsulated components that manage theri state"/>
        <SectionTwo clasName="col-3" image={icon3} title="Single-Way" description="A set of inmutable values are passed to the component's"/>
        <SectionTwo clasName="col-3" image={icon4} title="JSX" description="Statically-typed, designed to run on modern browsers" />
        
      </section>

    </main>
  )
}


export default App


















