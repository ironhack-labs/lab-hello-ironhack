import React, {Component} from "react";
import "./App.css"

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="start">
          <nav className="navBar">
            <img src="/images/ironhack-logo.svg" alt="logo"/>
            <img src="/images/menu-top.svg" alt="menu"/>
          </nav>
          <section className="half">
          <h1>
            Say hello to ReactJS
          </h1>
          <p>
            You willl learm a Fontend framework from scratch, o becaome an Ninka Developer.
          </p>
          <span className="button">
            Awesome!
          </span>
        </section>
        </section>
        <section className="end">
          <div>
          <img src="/images/icon1.png" alt="icon1"/>
            <h3>Declarative</h3>
            <p>
              React makes it painless to create interactive Uls.
            </p>
          </div>
          <div>
          <img src="/images/icon2.png" alt="icon2"/>
            <h3>Declarative</h3>
            <p>
              React makes it painless to create interactive Uls.
            </p>
          </div>
          <div>
          <img src="/images/icon3.png" alt="icon3"/>
            <h3>Declarative</h3>
            <p>
              React makes it painless to create interactive Uls.
            </p>
          </div>
          <div>
          <img src="/images/icon4.png" alt="icon4"/>
            <h3>Declarative</h3>
            <p>
              React makes it painless to create interactive Uls.
            </p>
          </div>
        </section>
      </div>
    );
  }
}
export default App;
