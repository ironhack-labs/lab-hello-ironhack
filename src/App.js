import React from 'react';
import Navbar from './components/navbar';
import Button from './components/button';
import Feature from './components/feature';
import './App.css';


const App = () =>{
  
  return(

    <main>
    <section className="top-content">
    <Navbar/>
      <section className="button-sec">
    <Button/>
    </section>
    </section>
    <section className="features">
    <Feature/>
    </section >
  </main>
    )

  
}

export default App;
