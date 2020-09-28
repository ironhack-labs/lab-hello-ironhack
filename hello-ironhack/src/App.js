import React from 'react';
import './App.css';
import Navbar from '../src/components/Navbar.js'
import Features from '../src/components/Features.js'
import img1 from './images/icon1.png'
import img2 from './images/icon2.png'
import img3 from './images/icon3.png'
import img4 from './images/icon4.png'



function App() {
  return (
    <>
      <Navbar />
    <div className="features">
        
      <Features img={img1} title="Declarative" text="React makes it painless to create interactive"/>
      <Features img={img2} title="Components" text="Build encapsulated components that manage their state"/>
      <Features img={img3} title="Single-way" text="A set of inmutable values are passed to the component's"/>
      <Features img={img4} title="JSX" text="Statically-typed designed to run on modern browsres"/>

    </div>


    </>
    
  );
}
export default App;
