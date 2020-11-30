import logoImg from './ironhack-logo.svg';
import burgerImg from './menu-top.svg'
import icon1 from './icon1.png'
import icon2 from './icon2.png'
import icon3 from './icon3.png'
import icon4 from './icon4.png'
import reactImg from './react-logo.svg'
//impot './App.css';

import Navbar from './navbar/Navbar'
import Hero from './hero/Hero'
import Section from './section/Section'


function App() {

  const array = [
    {
      img: icon1,
      alt: "Declarative icon",
      title: "Declarative",
      text: "React makes it painless to create interactive UIs."
    },
    {
      img: icon2,
      alt: "Components icon",
      title: "Components",
      text: "Build encapsulated components that manage their state."
    },
    {
      img: icon3,
      alt: "Single-way icon",
      title: "Single-Way",
      text: "A set of immutable values are passed to the components"
    },
    {
      img: icon4,
      alt: "JSX icon",
      title: "JSX",
      text: "Statically-typed, designed to run on modern browsers."
    }
  ]

  return (
    <>
      <Navbar
        logoImg={logoImg}
        logoAlt="Ironhack logo"
        burgerImg={burgerImg}
        burgerAlt="Menu toggle button" />
      <main>
        <Hero
          reactImg={reactImg}
          reactAlt="react logo"
          siteTitle="Say hello to ReactJS"
          siteIntro="You will learn how to use the most popular front end library, and become a super ninja developer"
          buttonText="Awesome!" />

        <Section 
          articles={array}
        />
      </main>
    </>
  )
}
      
export default App;