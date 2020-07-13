import React from 'react'
import './App.css'

import Presentation from './Presentation/Presentation'
import Cards from './Cards/Cards'

import img1 from '../images/icon1.png'
import img2 from '../images/icon2.png'
import img3 from '../images/icon3.png'
import img4 from '../images/icon4.png'

const App = () => {
  return (
    <main>
      <Presentation />
      <section className='artSection'>
        <Cards imgSrc={img1} titleCard='Declarative' textCard='React makes it painless to create interactive Uis.' />
        <Cards imgSrc={img2} titleCard='Components' textCard='Build encapsulated components that manage their state.' />
        <Cards imgSrc={img3} titleCard='Single-Way' textCard='A set of inmutable values  are passed to the component’s.' />
        <Cards imgSrc={img4} titleCard='JSX' textCard='Statically-typed. Designed to run on modern browsers.' />
      </section>
    </main>
  )
}

export default App