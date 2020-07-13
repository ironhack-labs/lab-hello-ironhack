import React from 'react'
import './App.css'

// Custom components
import Title from './Title/Title'
import Card from './Card/Card'

import logo from '../img/ironhack-logo.svg'
import menu from '../img/menu-top.svg'
import icon1 from '../img/icon1.png'
import icon2 from '../img/icon2.png'
import icon3 from '../img/icon3.png'
import icon4 from '../img/icon4.png'

const App = () => {
  return (

    <main className="App">
      <section className="">

        <header>
          <img src={logo} ></img>
          <img src={menu} ></img>
        </header>

        <article>
          <Title titleText="Say hello to ReactJS" subtitleText="You will learn a Frontend framework from scractch to becaome an Ninka Developer " />
        </article>

        <article>
          <button name="boton">
            Awesome!
        </button>
        </article>

      </section>

      <section className="foot">
        <Card name="Declarative" texto="React makes it painless to create interactive UIS" /> <img src={icon1}></img>
        <Card name="Components" texto="Build encapsulated components that manage their state" /><img src={icon2}></img>
        <Card name="Single-Way" texto="A set of immutable values are passed to the component's" /><img src={icon3}></img>
        <Card name="JSX" texto="Statically-typed designe to run on modern browsers" /><img src={icon4}></img>
      </section>

    </main>

  )
}

export default App