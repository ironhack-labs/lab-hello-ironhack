import Article from './Article'
import Button from './Button'

import icon1 from './images/icon1.png'
import icon2 from './images/icon2.png'
import icon3 from './images/icon3.png'
import icon4 from './images/icon4.png'
import logo from './images/ironhack-logo.svg'
import menu from './images/menu-top.svg'

import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <nav className="margin">
          <img src={logo} alt="ironhack logo"/>
          <img src={menu} alt="menu icon"/>
        </nav>
        <h1 className="white-text margin">Say hello to <br/> ReactJS</h1>
        <p className="white-text margin">You will learn how to use <br/> the most popular frontend library,<br/> and become a super Ninja developer.</p>
        <Button
          text="Awesome!"
        />
      </header>
      <section className="white-bg row margin">
        <Article
          img={icon1}
          title="Declarative"
          description="React makes it painless to create interactive UIs."
        />
        <Article
          img={icon2}
          title="Components"
          description="Build encapsulated components that manage their state."
        />
        <Article
          img={icon3}
          title="Single-Way"
          description="A set of immutable values are passed to the component's."
        />
        <Article
          img={icon4}
          title="JSX"
          description="Statically-typed, designed to run on modern browsers."
        />
      </section>
    </div>
  );
}

export default App;
