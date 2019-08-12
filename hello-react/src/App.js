import React from 'react';
import './App.css';


import { ReactComponent as Logo } from './ironhack-logo.svg'
import { ReactComponent as Menu } from './menu-top.svg'
import icon1 from './icon1.png'
import icon2 from './icon2.png'
import icon3 from './icon3.png'
import icon4 from './icon4.png'

function App() {
  return (
    <React.Fragment>
      <header className="App-header">
        <nav className="app-nav">
          <Logo />
          <Menu />
        </nav>
        <div className="container">
          <h1>Say Hello to ReactJS</h1>
          <p>You will learn a Frontend
            framework from scratch, to become
            a an ninka Developer.
        </p>
          <div className="button">Awesome!</div>
        </div>
      </header>
      <section className="white">
        <article>
          <img src={icon1} alt="icon-1"></img>
          <h2>Declarative</h2>
          <p>It is a long established fact that a reader will be distracted by th</p>
        </article>

        <article>
          <img src={icon2} alt="icon-1"></img>
          <h2>Components</h2>
          <p>It is a long established fact that a reader will be distracted by I</p>
        </article>

        <article>
          <img src={icon3} alt="icon-1"></img>
          <h2>Single-Way</h2>
          <p>It is a long established fact orem I</p>
        </article>

        <article>
          <img src={icon4} alt="icon-4"></img>
          <h2>JSX</h2>
          <p>It is a long established fact that a roint of using Lorem </p>
        </article>


      </section>
    </React.Fragment>
  );
}

export default App;
