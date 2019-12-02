import React from 'react';
import './App.css';
import Navbar from './components/navbar.js'
import Section from './components/section.js'
import Button from './components/button.js'
import SectionThree from './components/SectionThree.js'
import icon1 from './components/images/icon1.png';
import icon2 from './components/images/icon2.png';
import icon3 from './components/images/icon3.png';
import icon4 from './components/images/icon4.png';



function App() {
  return (
    
    <div className="App">

      <Navbar></Navbar>

      <Section>
        <Button></Button>
      </Section>

    <section className="sectionThree">

      <SectionThree img={icon1} title="Declarative" text="React makes it painless to create interactive UIs" ></SectionThree>
      <SectionThree img={icon2} title="Components" text="Build encapsulated components that manage their state" ></SectionThree>
      <SectionThree img={icon3} title="Single-Way" text="A set of inmuterables values are passed to the components" ></SectionThree>
      <SectionThree img={icon4} title="JSX" text="Statically typed, designed to run on modern browsers" ></SectionThree>

    </section>

      <SectionThree></SectionThree>
    


    </div>
  );
}

export default App;
