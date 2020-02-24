import React from 'react';
import './App.css';
// import Nav from './components/nav/nav.js'
import logo from './ironhack-logo.svg'
import menu from './menu-top.svg'
import Footer from './components/footer/footer'

function App() {
  return (
    <main>
       <section className="bg-color">
        <nav className="navbar">
          <img src={logo}/>
          <img src={menu}/>
        </nav>
        <h1>Say hello to ReactJS</h1>
        <p className="white">You wil learn a Frontend <br></br>
        framework from scratch, to<br></br>
        become an Ninja Developer</p>

        <br></br>

        <a href="#">Awesome!</a>
       </section>
        <section className="components">

          <Footer src="icon1.png" title="Declarative" text="React makes it painless to create intereactive UIs"></Footer>
          <Footer src="icon2.png" title="Components" text="React makes it painless to create intereactive UIs"></Footer>
          <Footer src="icon3.png" title="Single-Way" text="React makes it painless to create intereactive UIs"></Footer>
          <Footer src="icon4.png" title="JSX" text="React makes it painless to create intereactive UIs"></Footer>

        </section>
       
    </main>
  );
}

export default App;
