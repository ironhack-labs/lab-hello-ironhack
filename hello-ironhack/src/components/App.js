import React from 'react'

import Nav from './nav/nav'
import Intro from './intro/intro'
import Icons from './icons/icons'

import icon1 from '../public/icon1.png'
import icon2 from '../public/icon2.png'
import icon3 from '../public/icon3.png'
import icon4 from '../public/icon4.png'

const App = () => {
  return (

   <main>

      <nav>
        <Nav/>
      </nav>

      <section>
        <Intro/>
      </section>

      <section className="secondPart">
        <Icons img= {icon1} title= "Declarative" text="React makes it painless to create interactive UIs"/>
        <Icons img= {icon2} title= "Components" text="Build encapsulated components that manage their state"/>
        <Icons img= {icon3} title= "Single-Way" text="A set of immutable values are passed to the component's."/>
        <Icons img= {icon4} title= "JSX" text="Statically-typed, designed to run on modern browsers."/>
      </section>


   </main>

  )
}

export default App;
