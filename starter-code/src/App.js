import React, {Component} from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <main>
      
        <section className="top">
        
        <div className="nav">
          <img src="images/ironhack-logo.svg" />
          <img src="images/menu-top.svg" />
        </div>

          <h1>Say hello to React.JS</h1>
          <p>You will learn a Frontend Framework from scratch, to become a Ninja Developer</p>
          <button>Awesome!</button>
        </section>

        <section className="bottom">
          <div>
            <img src="/images/icon1.png" /> 
            <h2>Declarative</h2>
            <p>React makes it painless to create interactive UIs.</p>
          </div>
          <div>
            <img src="/images/icon2.png" /> 
            <h2>Components</h2>
            <p>Build encapsulated components that manage their state.</p>
          </div>
          <div>
            <img src="/images/icon3.png" /> 
            <h2>Single Way</h2>
            <p>A set of immutable values are passed to the components.</p>
          </div>
          <div>
            <img src="/images/icon4.png" /> 
            <h2>JSX</h2>
            <p>Statically-typed, designed to run on modern browsers.</p>
          </div>
        </section>
        <div className="react1"><img src="/images/react-logo.svg"/></div>
        <div className="react2"><img src="/images/react-logo.svg"/></div>
        <div className="react3"><img src="/images/react-logo.svg"/></div>
      </main>
    )
  }
}

export default App;