import React from 'react';

import Icon1 from './icon1.png'
import Icon2 from './icon2.png'
import Icon3 from './icon3.png'
import Icon4 from './icon4.png'
import IronLogo from './ironhack-logo.svg'
import MenuTop from './menu-top.svg'
import ReactLogo from './react-logo.svg'

import Header from './components/Header'
import Nav from './components/Nav'
import Article from './components/Section'


import './App.css';

function App() {
  return (
    <>
      <Nav logo1={IronLogo} logo2={MenuTop} />
      <main>
        <Header />
        <section className="bg-white">
          <Article icon={Icon1} title="Declarative" paragraph="React makes it painless to create interactive UIs." />
          <Article icon={Icon2} title="Components" paragraph="Build encapsulated components that manage their state." />
          <Article icon={Icon3} title="Single-Way" paragraph="A set of inmutable values are passed to the component's" />
          <Article icon={Icon4} title="JSX" paragraph="Statically-typed, designed to run on modern browsers." />
        </section>

      </main>
    </>
  );
}

export default App;
