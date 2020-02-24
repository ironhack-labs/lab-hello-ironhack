import React from 'react'
import Card from './components/cards/Card'

function App() {
  return (
    <>
      <header>
        <div className="menu">
          <img src="./images/ironhack-logo.svg" />
          <img src="./images/menu-top.svg" />
        </div>
      </header>
      <main>
        <div className="hero-wrapper">
          <div className="hero">
            <h1>Say hello to<br /> ReactJS</h1>
            <p>You will learn a Frontend<br /> framework from scrath, to<br /> became an Ninja Developer.</p>
            <a href="#">Awesome!</a>
          </div>
          <div className="react-logo-first">
            <img id="one" src="./images/react-logo.svg" />
            <img id="two" src="./images/react-logo.svg" />
            <img id="three" src="./images/react-logo.svg" />
          </div>
          <div className="react-logo-last">
            <img src="./images/react-logo.svg" />
            <img src="./images/react-logo.svg" />
            <img src="./images/react-logo.svg" />
          </div>

        </div>
        <div className="cards-wrapper">
          <div className="cards">
            <Card src="./images/icon1.png" title="Declarative" content="React makes it painless to create interactive UIs." />
            <Card src="./images/icon2.png" title="Components" content="Build encapsulated components that manage their state." />
            <Card src="./images/icon3.png" title="Single-Way" content="A set of immutable values are passed to the component's." />
            <Card src="./images/icon4.png" title="JSX" content="Statically-typed, designed to run on modern browsers." />
          </div>
        </div>
      </main>
    </>
  )
}

export default App