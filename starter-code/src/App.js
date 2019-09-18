import React, { Component } from 'react'
import './App.css'

class App extends Component {
  render() {
    const img = {
      ironhackLogo: './images/ironhack-logo.svg',
      hamburger: './images/menu-top.svg',
      iconDeclarative: './images/icon1.png',
      iconComponents: './images/icon2.png',
      iconSingleWay: './images/icon3.png',
      iconJsx: './images/icon4.png'
    }

    const ironhackLogo = (
      <img src={img.ironhackLogo} />
    )

    const hamburger = (
      <div>
        <img src={img.hamburger} className='ham' />
      </div>

    )

    const title = (
      <h1>Say hello to ReactJS</h1>
    )

    const subheadline = (
      <p>You will learn a Frontend framework from scratch to become a Ninja Developer.</p>
    )

    const btn = (
      <button>Awesome!</button>
    )

    const declarative = (
      <div>
        <img src={img.iconDeclarative} className='' />
        <h2>Declarative</h2>
        <p>React makes it painless to create interactive UIs.</p>
      </div>
    )
    const components = (
      <div>
        <img src={img.iconComponents} className='' />
        <h2>Components</h2>
        <p>Build encapsulated components that manage their state.</p>
      </div>
    )
    const singleWay = (
      <div>
        <img src={img.iconSingleWay} className='' />
        <h2>Single-Way</h2>
        <p>A set of immutable values are passed to the components.</p>
      </div>
    )
    const jsx = (
      <div>
        <img src={img.iconJsx} className='' />
        <h2>JSX</h2>
        <p>Statically typed, designed to run on modern browsers.</p>
      </div>
    )

    return (
      <div className='App'>
        <header>
          <nav>
            <div>{ironhackLogo}</div>
            <div>{hamburger}</div>
          </nav>

          <div className='content'>
            {title}
            {subheadline}
            {btn}
          </div>

        </header>

        <main>
          <div className='icon-row'>
            <div>{declarative}</div>
            <div>{components}</div>
            <div>{singleWay}</div>
            <div>{jsx}</div>
          </div>
        </main>

      </div>
    )
  }
}

export default App
