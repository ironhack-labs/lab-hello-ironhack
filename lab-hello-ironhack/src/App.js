import React from 'react';
import './App.css';
import Navbar from './components/navbar'
import Button from './components/button'
import Feature from './components/feature'

function App() {

  const featureList = [
    {
      imageSrc: './icon1.png',
      altText: 'screen showing tool',
      title: 'Declarative',
      text: 'React makes it painless to create interactive UIs.',
    },
    {
      imageSrc: './icon2.png',
      altText: 'screen showing pen',
      title: 'Components',
      text: 'Build encapsulated components that manage their state.',
    },
    {
      imageSrc: './icon3.png',
      altText: 'screen showing gear',
      title: 'Single-Way',
      text: 'A set of immutable values are passed to the componenet\'s.',
    },
    {
      imageSrc: './icon4.png',
      altText: 'screen showing script',
      title: 'JSX',
      text: 'Statically-typed designed to run on modern browsers.',
    }
  ]

  return (

    <>

      <Navbar />
      <section className='hero'>

        <h1>Say hello to ReactJS</h1>
        <p>You will learn how to use the most popular frontend library, and become a super ninja developer</p>
        <Button link='#' name='Awesome!' />

      </section>

      <section className='featureList'>

        {featureList.map(elm => {
          return <Feature imageSrc={elm.imageSrc} altText={elm.altText} title={elm.title} text={elm.text} />
        })}

      </section>

    </>

  )
}

export default App;
