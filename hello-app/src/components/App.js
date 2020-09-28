import React from 'react';
//import { ReactComponent as ReactLogo } from '././ironhack-logo.svg';
//import { ReactComponent as ReactBurger } from '././menu-top.svg'
import './App.css';


import Title from './title/title'
import Features from './features/features'
import Button from './button/button'
import Navbar from './navbar/navbar'

const App = () => {

  return (
    <>

      <div>
        <Navbar logo="././ironhack-logo.png" hamburguer="././menu-top.png" />
      </div>

      <section className="background">
        <Title titleText="Say Hello to ReactJS" text="You will learn how to use the most popular frontend library, and become a super Ninja developer." />
        <Button textButton="Awesome!" />
      </section>

      <section className="featuresContent">
        <Features image="././icon1.png" articleTitle="Declarative" articleParagraph="React makes it painless to create interactive UIs." />
        <Features image="././icon2.png" articleTitle="Components" articleParagraph="Build encapsulated components that manage their state." />
        <Features image="././icon3.png" articleTitle="Single-Way" articleParagraph="A set of inmutable values are passed to the component´s" />
        <Features image="././icon4.png" articleTitle="JSX" articleParagraph="Statically-typed, designed to run on  modern browsers." />
      </section>
    </>

  )

}

export default App;
