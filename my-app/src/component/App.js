import React from 'react';
import Button from './button';
import Navbar from './navbar';
import Feature from './feature';

//images
import icon1 from '../img/icon1.png'
import icon2 from '../img/icon2.png'
import icon3 from '../img/icon3.png'
import icon4 from '../img/icon4.png'

import bglogo from '../img/react-logo.svg'

function App() {

  return (
    <div className="App">
      <Navbar/>
    <main style ={{background : {bglogo}}} >
      <h1>
        Say hello to ReactJS
      </h1>
      <p>
        You will learn how to use the most popular fornt end library and 
        become a ninja developer
      </p>
      <Button name = "Awesome!" url= "#"/>
    </main>


    <section className="features">
      <Feature name="Declarative" src={icon1} description="React makes it painless to create interactive UIs." />
      <Feature name="Components" src={icon2} description="Build encapsulated components that manage their state" />
      <Feature name="Single Way" src={icon3} description="A set of inmutable values are passed to the component's." />
      <Feature name="JSX" src={icon4} description="Statically typed designed to work on modern browsers" />
    
    </section>  

    </div>
  );
}

export default App;
